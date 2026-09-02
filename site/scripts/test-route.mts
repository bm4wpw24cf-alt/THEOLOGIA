/**
 * Ende-til-ende-test av selve API-rutene (`app/api/comments/route.ts` og
 * `app/api/admin/comments/route.ts`) mot en ekte Postgres (PGlite), koblet inn
 * der `@neondatabase/serverless` ellers ville snakket med Neon over HTTP.
 *
 * Kjør:  node --import ./scripts/_register-hook.mjs scripts/test-route.mts
 * (eller: npm run test:route)
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { PGlite } from "@electric-sql/pglite";
import { neonConfig } from "@neondatabase/serverless";

process.env.DATABASE_URL = "postgresql://test:test@db.example.neon.tech/neondb";
process.env.COMMENT_IP_SALT = "test-salt";
process.env.ADMIN_TOKEN = "test-admin-token";

// --- Ekte Postgres via PGlite, med schema.sql ------------------------------
const db = new PGlite();
const schema = readFileSync(fileURLToPath(new URL("../db/schema.sql", import.meta.url)), "utf8");
for (const stmt of schema
  .split(/;\s*(?:\n|$)/)
  .map((s) => s.replace(/--.*$/gm, "").trim())
  .filter(Boolean)) {
  await db.exec(stmt);
}

// --- Lat som PGlite er Neon sitt HTTP-endepunkt ----------------------------
let simulateDbError = false;
neonConfig.fetchEndpoint = "http://pglite.local/sql";
neonConfig.fetchFunction = async (_url: string, opts: { body: string }) => {
  if (simulateDbError) {
    return new Response("boom", { status: 500 });
  }
  const { query, params } = JSON.parse(opts.body) as { query: string; params?: unknown[] };
  const res = await db.query<unknown[]>(query, params ?? [], { rowMode: "array" });
  // Konverter til Postgres tekst-representasjon slik ekte Neon-HTTP gjør,
  // så @neondatabase/serverless sine type-parsere gir riktige JS-verdier.
  const toWire = (v: unknown) => {
    if (v === null || v === undefined) return null;
    if (typeof v === "boolean") return v ? "t" : "f";
    if (v instanceof Date) return v.toISOString();
    return String(v);
  };
  return new Response(
    JSON.stringify({
      command: query.trim().split(/\s+/)[0].toUpperCase(),
      rowCount: res.rows.length,
      fields: res.fields.map((f: { name: string; dataTypeID: number }) => ({
        name: f.name,
        dataTypeID: f.dataTypeID,
      })),
      rows: res.rows.map((row) => row.map(toWire)),
    }),
    { status: 200, headers: { "content-type": "application/json" } },
  );
};

// --- Importer rutene ------------------------------------------------------
const { GET: getComments, POST: postComment } = await import("../app/api/comments/route.ts");
const { GET: adminGet, POST: adminCreate } = await import("../app/api/admin/comments/route.ts");
const { PATCH: adminPatch, DELETE: adminDelete } = await import(
  "../app/api/admin/comments/[id]/route.ts"
);

const ORIGIN = "http://localhost:3000";
const ARTICLE = "/veien-til-jesus/kom-til-kristus";
const TOKEN = "test-admin-token";

/** Minimal stand-in for NextRequest/Request – rutene bruker url, nextUrl, headers, json(). */
function req(
  url: string,
  init: { headers?: Record<string, string>; body?: unknown } = {},
) {
  return {
    url,
    nextUrl: new URL(url),
    headers: new Headers(init.headers ?? {}),
    json: async () => {
      if (init.body === undefined) throw new SyntaxError("no body");
      return init.body;
    },
  } as unknown as Parameters<typeof getComments>[0];
}

const auth = (token?: string) => (token ? { authorization: `Bearer ${token}` } : {});

const get = (path: string) => getComments(req(`${ORIGIN}${path}`));
const post = (body: unknown, headers: Record<string, string> = {}) =>
  postComment(req(`${ORIGIN}/api/comments`, { headers, body }));
const admGet = (path: string, token?: string) =>
  adminGet(req(`${ORIGIN}${path}`, { headers: auth(token) }));
const admCreate = (body: unknown, token?: string) =>
  adminCreate(req(`${ORIGIN}/api/admin/comments`, { headers: auth(token), body }));
const admPatch = (id: string, body: unknown, token?: string) =>
  adminPatch(req(`${ORIGIN}/api/admin/comments/${id}`, { headers: auth(token), body }), {
    params: Promise.resolve({ id }),
  });
const admDelete = (id: string, token?: string) =>
  adminDelete(req(`${ORIGIN}/api/admin/comments/${id}`, { headers: auth(token) }), {
    params: Promise.resolve({ id }),
  });

let passed = 0;
async function check(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    passed += 1;
    console.log("  ✓", name);
  } catch (err) {
    console.error("  ✗", name);
    console.error(err);
    process.exitCode = 1;
  }
}

console.log("GET /api/comments");

await check("mangler article → 400 + { error }", async () => {
  const res = await get("/api/comments");
  assert.equal(res.status, 400);
  assert.equal(typeof (await res.json()).error, "string");
});

await check("ugyldig article → 400", async () => {
  assert.equal((await get("/api/comments?article=ikke-en-sti")).status, 400);
});

await check("gyldig article uten kommentarer → 200 + { comments: [] }", async () => {
  const res = await get(`/api/comments?article=${encodeURIComponent(ARTICLE)}`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { comments: [] });
});

await check("databasefeil → 500 + { error } (ingen frontend-fallback)", async () => {
  simulateDbError = true;
  const res = await get(`/api/comments?article=${encodeURIComponent(ARTICLE)}`);
  simulateDbError = false;
  assert.equal(res.status, 500);
  assert.equal(typeof (await res.json()).error, "string");
});

console.log("POST /api/comments");

let createdId = "";
await check("gyldig kommentar → 201 { ok, pending } og lagret approved=false", async () => {
  const res = await post({ article: ARTICLE, author: "Ola Nordmann", body: "Takk for en oppbyggelig artikkel." });
  assert.equal(res.status, 201);
  assert.deepEqual(await res.json(), { ok: true, pending: true });
  const rows = await db.query<{ id: number; approved: boolean; article: string }>(
    "select id, approved, article from comments order by id desc limit 1",
  );
  assert.equal(rows.rows[0].approved, false);
  assert.equal(rows.rows[0].article, ARTICLE);
  createdId = String(rows.rows[0].id);
});

await check("kommentaren vises IKKE offentlig før godkjenning", async () => {
  const res = await get(`/api/comments?article=${encodeURIComponent(ARTICLE)}`);
  assert.deepEqual(await res.json(), { comments: [] });
});

await check("honeypot utfylt → 200, ingenting lagret", async () => {
  const before = (await db.query("select count(*)::int c from comments")).rows[0] as { c: number };
  const res = await post({ article: ARTICLE, author: "Bot", body: "kjøp billig nå", website: "http://spam" });
  assert.equal(res.status, 200);
  const after = (await db.query("select count(*)::int c from comments")).rows[0] as { c: number };
  assert.equal(after.c, before.c);
});

await check("tom kommentar → 400", async () => {
  assert.equal((await post({ article: ARTICLE, author: "Ola", body: "  " })).status, 400);
});

await check("rate limiting: 4. innsending fra samme IP → 429", async () => {
  const ip = { "x-forwarded-for": "198.51.100.42" };
  for (let i = 0; i < 3; i += 1) {
    assert.equal((await post({ article: ARTICLE, author: "Kari", body: `melding ${i}` }, ip)).status, 201);
  }
  assert.equal((await post({ article: ARTICLE, author: "Kari", body: "melding 4" }, ip)).status, 429);
});

await check("duplikat (samme tekst, samme IP) → 409", async () => {
  const ip = { "x-forwarded-for": "203.0.113.7" };
  assert.equal((await post({ article: ARTICLE, author: "Per", body: "helt lik tekst" }, ip)).status, 201);
  assert.equal((await post({ article: ARTICLE, author: "Per", body: "helt lik tekst" }, ip)).status, 409);
});

console.log("/api/admin/comments (CRUD + auth)");

await check("GET uten token → 401", async () => {
  assert.equal((await admGet("/api/admin/comments")).status, 401);
});

await check("GET med feil token → 401", async () => {
  assert.equal((await admGet("/api/admin/comments", "feil")).status, 401);
});

await check("POST uten token → 401 (oppretting er beskyttet)", async () => {
  assert.equal(
    (await admCreate({ article: ARTICLE, author: "Angriper", body: "uautorisert" })).status,
    401,
  );
});

await check("PATCH og DELETE uten token → 401", async () => {
  assert.equal((await admPatch("1", { article: ARTICLE, author: "X", body: "y" })).status, 401);
  assert.equal((await admDelete("1")).status, 401);
});

await check("GET med token → 200, viser alle kommentarer med status", async () => {
  const res = await admGet("/api/admin/comments?status=all", TOKEN);
  assert.equal(res.status, 200);
  const { comments } = (await res.json()) as {
    comments: Array<{ id: string; approved: boolean; article: string; updatedAt: string }>;
  };
  assert.ok(comments.length > 0);
  assert.ok(comments.every((c) => typeof c.id === "string" && typeof c.approved === "boolean"));
});

let adminCreatedId = "";
await check("POST med token → 201, oppretter godkjent kommentar synlig offentlig", async () => {
  const res = await admCreate(
    { article: "/temaer/endetid", author: "Redaktøren", body: "Lagt til fra admin." },
    TOKEN,
  );
  assert.equal(res.status, 201);
  const { comment } = (await res.json()) as { comment: { id: string; approved: boolean } };
  assert.equal(comment.approved, true);
  adminCreatedId = comment.id;

  const shown = await get(`/api/comments?article=${encodeURIComponent("/temaer/endetid")}`);
  const body = (await shown.json()) as { comments: Array<{ body: string }> };
  assert.ok(body.comments.some((c) => c.body === "Lagt til fra admin."));
});

await check("POST med ugyldig artikkel → 400", async () => {
  assert.equal((await admCreate({ article: "bad", author: "R", body: "x y z" }, TOKEN)).status, 400);
});

await check("PATCH med token → 200, endrer tekst og skjuler fra offentlig visning", async () => {
  const res = await admPatch(
    adminCreatedId,
    { article: "/temaer/endetid", author: "Redaktøren", body: "Endret av admin.", approved: false },
    TOKEN,
  );
  assert.equal(res.status, 200);
  const { comment } = (await res.json()) as { comment: { body: string; approved: boolean } };
  assert.equal(comment.body, "Endret av admin.");
  assert.equal(comment.approved, false);

  const shown = await get(`/api/comments?article=${encodeURIComponent("/temaer/endetid")}`);
  const body = (await shown.json()) as { comments: Array<{ body: string }> };
  assert.ok(!body.comments.some((c) => c.body === "Endret av admin."));
});

await check("PATCH kan godkjenne en ventende brukerkommentar → blir synlig offentlig", async () => {
  const res = await admPatch(
    createdId,
    {
      article: ARTICLE,
      author: "Ola Nordmann",
      body: "Takk for en oppbyggelig artikkel.",
      approved: true,
    },
    TOKEN,
  );
  assert.equal(res.status, 200);
  const shown = await get(`/api/comments?article=${encodeURIComponent(ARTICLE)}`);
  const body = (await shown.json()) as { comments: Array<{ author: string }> };
  assert.ok(body.comments.some((c) => c.author === "Ola Nordmann"));
});

await check("PATCH på ukjent id → 404", async () => {
  assert.equal(
    (await admPatch("999999", { article: ARTICLE, author: "Navn", body: "gyldig tekst" }, TOKEN)).status,
    404,
  );
});

await check("DELETE med token → 200, deretter borte", async () => {
  assert.equal((await admDelete(adminCreatedId, TOKEN)).status, 200);
  assert.equal((await admDelete(adminCreatedId, TOKEN)).status, 404);
  const rows = await db.query("select count(*)::int c from comments where id = $1", [
    Number(adminCreatedId),
  ]);
  assert.equal((rows.rows[0] as { c: number }).c, 0);
});

await check("offentlig GET-responsform er uendret { id, author, body, createdAt }", async () => {
  const shown = await get(`/api/comments?article=${encodeURIComponent(ARTICLE)}`);
  const body = (await shown.json()) as { comments: Array<Record<string, unknown>> };
  assert.ok(body.comments.length > 0);
  assert.deepEqual(Object.keys(body.comments[0]).sort(), ["author", "body", "createdAt", "id"]);
});

await db.close();
console.log(`\n${passed} tester ok`);
if (process.exitCode) console.error("NOEN TESTER FEILET");
