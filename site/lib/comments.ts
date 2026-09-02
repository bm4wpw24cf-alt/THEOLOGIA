import { createHash, timingSafeEqual } from "node:crypto";
import { neon } from "@neondatabase/serverless";

/**
 * Datalag + validering for kommentarfeltet.
 *
 * Lagring: Postgres (Neon / Vercel Postgres) via `DATABASE_URL`.
 * All validering og rensing skjer her på serveren – frontend-validering
 * er kun en bekvemmelighet og aldri en sikkerhetsgrense.
 */

const ARTICLE_RE = /^\/[a-z0-9\-/]{1,150}$/;

// Kontrolltegn som skal fjernes fra fritekst (beholder \n og \t).
const CONTROL_CHARS_RE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

export const AUTHOR_MIN = 2;
export const AUTHOR_MAX = 60;
export const BODY_MIN = 3;
export const BODY_MAX = 4000;

/** Maks antall innsendinger per IP innenfor vinduet. */
export const RATE_LIMIT_MAX = 3;
export const RATE_LIMIT_WINDOW_MINUTES = 10;

export type PublicComment = {
  id: string;
  author: string;
  body: string;
  createdAt: string;
};

export type PendingComment = PublicComment & {
  article: string;
  approved: boolean;
};

/** Full rad slik adminsiden trenger den. */
export type AdminComment = PendingComment & {
  updatedAt: string;
};

export type AdminCommentInput = {
  article: string;
  author: string;
  body: string;
  approved: boolean;
};

let cachedSql: SqlClient | null = null;

export function getSql(): SqlClient {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL er ikke satt");
  }
  if (!cachedSql) {
    cachedSql = neon(url) as unknown as SqlClient;
  }
  return cachedSql;
}

/** Normaliser og valider artikkel-stien (brukes som nøkkel per side). */
export function normalizeArticle(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let value = raw.trim().toLowerCase();
  if (value.length > 1 && value.endsWith("/")) {
    value = value.slice(0, -1);
  }
  if (!ARTICLE_RE.test(value)) return null;
  return value;
}

/**
 * Fjern kontrolltegn (unntatt linjeskift/tab), trim, og klipp til maks lengde.
 * Selve lagringen er ren tekst; XSS unngås ved at teksten rendres som
 * React-tekstnoder (aldri `dangerouslySetInnerHTML`).
 */
export function sanitizeText(raw: unknown, maxLength: number): string {
  if (typeof raw !== "string") return "";
  const cleaned = raw
    .replace(/\r\n/g, "\n")
    .replace(CONTROL_CHARS_RE, "")
    .replace(/\n{3,}/g, "\n\n");
  return cleaned.trim().slice(0, maxLength);
}

export type ValidationResult =
  | { ok: true; value: { article: string; author: string; body: string } }
  | { ok: false; error: string };

export function validateSubmission(payload: unknown): ValidationResult {
  const data = (payload ?? {}) as Record<string, unknown>;

  const article = normalizeArticle(data.article);
  if (!article) {
    return { ok: false, error: "Ugyldig artikkelreferanse." };
  }

  const author = sanitizeText(data.author, AUTHOR_MAX);
  if (author.length < AUTHOR_MIN) {
    return { ok: false, error: `Navnet må ha minst ${AUTHOR_MIN} tegn.` };
  }

  const body = sanitizeText(data.body, BODY_MAX);
  if (body.length < BODY_MIN) {
    return { ok: false, error: "Skriv en kommentar før du sender inn." };
  }

  return { ok: true, value: { article, author, body } };
}

export type AdminValidationResult =
  | { ok: true; value: AdminCommentInput }
  | { ok: false; error: string };

/** Validering for kommentarer som opprettes/redigeres fra adminsiden. */
export function validateAdminComment(payload: unknown): AdminValidationResult {
  const data = (payload ?? {}) as Record<string, unknown>;

  const article = normalizeArticle(data.article);
  if (!article) {
    return { ok: false, error: "Artikkel-stien må være på formen /tema/artikkel." };
  }

  const author = sanitizeText(data.author, AUTHOR_MAX);
  if (author.length < AUTHOR_MIN) {
    return { ok: false, error: `Forfatternavnet må ha minst ${AUTHOR_MIN} tegn.` };
  }

  const body = sanitizeText(data.body, BODY_MAX);
  if (body.length < BODY_MIN) {
    return { ok: false, error: "Kommentarteksten kan ikke være tom." };
  }

  const approved = data.approved === undefined ? true : Boolean(data.approved);

  return { ok: true, value: { article, author, body, approved } };
}

/** Er honeypot-feltet fylt ut? (bot – skal avvises stille) */
export function isHoneypotFilled(payload: unknown): boolean {
  const data = (payload ?? {}) as Record<string, unknown>;
  return typeof data.website === "string" && data.website.trim() !== "";
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]!.trim() || "unknown";
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}

export function hashIp(ip: string): string {
  const salt = process.env.COMMENT_IP_SALT ?? "";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/** Konstanttids-sammenligning av admin-token. */
export function isValidAdminToken(header: string | null): boolean {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return false;
  const provided = header?.startsWith("Bearer ") ? header.slice(7) : "";
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/** Konstanttids-sjekk av admin-passord (= ADMIN_TOKEN). */
export function verifyAdminPassword(password: unknown): boolean {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || typeof password !== "string" || password.length === 0) return false;
  const a = createHash("sha256").update(password).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/* ---------------------------------------------------------------------------
 * Databaselag
 *
 * Funksjonene tar `sql` som argument (tagged-template, kompatibel med
 * @neondatabase/serverless) slik at de kan testes mot en lokal database.
 * ------------------------------------------------------------------------- */

export type SqlClient = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => Promise<Record<string, unknown>[]>;

function toPublicComment(row: Record<string, unknown>): PublicComment {
  return {
    id: String(row.id),
    author: String(row.author),
    body: String(row.body),
    createdAt: new Date(row.created_at as string | number | Date).toISOString(),
  };
}

export async function fetchApprovedComments(sql: SqlClient, article: string): Promise<PublicComment[]> {
  const rows = await sql`
    select id, author, body, created_at
    from comments
    where article = ${article} and approved = true
    order by created_at asc
    limit 500
  `;
  return rows.map(toPublicComment);
}

export async function countRecentSubmissions(sql: SqlClient, ipHash: string): Promise<number> {
  const rows = await sql`
    select count(*)::int as count
    from comments
    where ip_hash = ${ipHash}
      and created_at > now() - make_interval(mins => ${RATE_LIMIT_WINDOW_MINUTES})
  `;
  return Number(rows[0]?.count ?? 0);
}

export async function hasDuplicateComment(sql: SqlClient, ipHash: string, body: string): Promise<boolean> {
  const rows = await sql`
    select count(*)::int as count
    from comments
    where ip_hash = ${ipHash} and body = ${body}
      and created_at > now() - interval '1 day'
  `;
  return Number(rows[0]?.count ?? 0) > 0;
}

export async function insertPendingComment(
  sql: SqlClient,
  input: { article: string; author: string; body: string; ipHash: string },
): Promise<void> {
  await sql`
    insert into comments (article, author, body, ip_hash, approved)
    values (${input.article}, ${input.author}, ${input.body}, ${input.ipHash}, false)
  `;
}

function toAdminComment(row: Record<string, unknown>): AdminComment {
  return {
    ...toPublicComment(row),
    article: String(row.article),
    approved: Boolean(row.approved),
    updatedAt: new Date((row.updated_at ?? row.created_at) as string | number | Date).toISOString(),
  };
}

/** Alle kommentarer (evt. bare ikke-godkjente) – for adminsiden og moderering. */
export async function fetchAdminComments(
  sql: SqlClient,
  status: "pending" | "all" = "all",
): Promise<AdminComment[]> {
  const rows =
    status === "pending"
      ? await sql`
          select id, article, author, body, approved, created_at, updated_at
          from comments
          where approved = false
          order by created_at desc
          limit 500
        `
      : await sql`
          select id, article, author, body, approved, created_at, updated_at
          from comments
          order by created_at desc
          limit 500
        `;
  return rows.map(toAdminComment);
}

export async function fetchAdminCommentById(sql: SqlClient, id: number): Promise<AdminComment | null> {
  const rows = await sql`
    select id, article, author, body, approved, created_at, updated_at
    from comments
    where id = ${id}
    limit 1
  `;
  return rows[0] ? toAdminComment(rows[0]) : null;
}

export async function createAdminComment(sql: SqlClient, input: AdminCommentInput): Promise<AdminComment> {
  const rows = await sql`
    insert into comments (article, author, body, approved, created_at, updated_at)
    values (${input.article}, ${input.author}, ${input.body}, ${input.approved}, now(), now())
    returning id, article, author, body, approved, created_at, updated_at
  `;
  return toAdminComment(rows[0]!);
}

export async function updateComment(
  sql: SqlClient,
  id: number,
  input: AdminCommentInput,
): Promise<AdminComment | null> {
  const rows = await sql`
    update comments
    set article = ${input.article},
        author = ${input.author},
        body = ${input.body},
        approved = ${input.approved},
        updated_at = now()
    where id = ${id}
    returning id, article, author, body, approved, created_at, updated_at
  `;
  return rows[0] ? toAdminComment(rows[0]) : null;
}

export async function setCommentApproval(sql: SqlClient, id: number, approved: boolean): Promise<void> {
  await sql`update comments set approved = ${approved}, updated_at = now() where id = ${id}`;
}

export async function deleteComment(sql: SqlClient, id: number): Promise<boolean> {
  const rows = await sql`delete from comments where id = ${id} returning id`;
  return rows.length > 0;
}
