import type { NextRequest } from "next/server";
import {
  clientIp,
  countRecentSubmissions,
  fetchApprovedComments,
  getSql,
  hasDuplicateComment,
  hashIp,
  insertPendingComment,
  isHoneypotFilled,
  normalizeArticle,
  validateSubmission,
  RATE_LIMIT_MAX,
} from "@/lib/comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/comments?article=/sti — godkjente kommentarer for én side. */
export async function GET(request: NextRequest) {
  const article = normalizeArticle(request.nextUrl.searchParams.get("article"));
  if (!article) {
    return Response.json({ error: "Ugyldig artikkelreferanse." }, { status: 400 });
  }

  try {
    const comments = await fetchApprovedComments(getSql(), article);
    return Response.json({ comments });
  } catch (error) {
    console.error("GET /api/comments feilet", error);
    return Response.json({ error: "Kunne ikke hente kommentarer akkurat nå." }, { status: 500 });
  }
}

/** POST /api/comments — ny kommentar, lagres som ikke godkjent. */
export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // Honeypot: later som alt gikk bra, men lagrer ingenting.
  if (isHoneypotFilled(payload)) {
    return Response.json({ ok: true, pending: true });
  }

  const result = validateSubmission(payload);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  const { article, author, body } = result.value;

  const ipHash = hashIp(clientIp(request.headers));

  try {
    const sql = getSql();

    if ((await countRecentSubmissions(sql, ipHash)) >= RATE_LIMIT_MAX) {
      return Response.json(
        { error: "Du har sendt inn flere kommentarer nå nettopp. Vent noen minutter og prøv igjen." },
        { status: 429 },
      );
    }

    if (await hasDuplicateComment(sql, ipHash, body)) {
      return Response.json({ error: "Denne kommentaren er allerede sendt inn." }, { status: 409 });
    }

    await insertPendingComment(sql, { article, author, body, ipHash });

    // 201 Created: kommentaren er lagret, men venter på godkjenning før den vises.
    return Response.json({ ok: true, pending: true }, { status: 201 });
  } catch (error) {
    console.error("POST /api/comments feilet", error);
    return Response.json(
      { error: "Kunne ikke lagre kommentaren akkurat nå. Prøv igjen senere." },
      { status: 500 },
    );
  }
}
