import { isAuthorizedAdmin } from "@/lib/admin-auth";
import { createAdminComment, fetchAdminComments, getSql, validateAdminComment } from "@/lib/comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return Response.json({ error: "Ikke autorisert." }, { status: 401 });
}

/**
 * GET /api/admin/comments?status=all|pending
 * Auth: session-cookie eller `Authorization: Bearer <ADMIN_TOKEN>`.
 */
export async function GET(request: Request) {
  if (!(await isAuthorizedAdmin(request))) return unauthorized();

  const status =
    new URL(request.url).searchParams.get("status") === "pending" ? "pending" : "all";

  try {
    const comments = await fetchAdminComments(getSql(), status);
    return Response.json({ comments });
  } catch (error) {
    console.error("GET /api/admin/comments feilet", error);
    return Response.json({ error: "Kunne ikke hente kommentarer." }, { status: 500 });
  }
}

/**
 * POST /api/admin/comments — opprett kommentar fra adminsiden.
 * Body: { article, author, body, approved? }  (approved default true)
 */
export async function POST(request: Request) {
  if (!(await isAuthorizedAdmin(request))) return unauthorized();

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  const result = validateAdminComment(payload);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  try {
    const comment = await createAdminComment(getSql(), result.value);
    return Response.json({ comment }, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/comments feilet", error);
    return Response.json({ error: "Kunne ikke lagre kommentaren." }, { status: 500 });
  }
}
