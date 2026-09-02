import { isAuthorizedAdmin } from "@/lib/admin-auth";
import { deleteComment, getSql, updateComment, validateAdminComment } from "@/lib/comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return Response.json({ error: "Ikke autorisert." }, { status: 401 });
}

function parseId(raw: string): number | null {
  return /^\d+$/.test(raw) ? Number(raw) : null;
}

type Ctx = { params: Promise<{ id: string }> };

/**
 * PATCH /api/admin/comments/:id — rediger kommentar.
 * Body: { article, author, body, approved }
 */
export async function PATCH(request: Request, ctx: Ctx) {
  if (!(await isAuthorizedAdmin(request))) return unauthorized();

  const id = parseId((await ctx.params).id);
  if (id === null) return Response.json({ error: "Ugyldig id." }, { status: 400 });

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
    const comment = await updateComment(getSql(), id, result.value);
    if (!comment) {
      return Response.json({ error: "Kommentaren finnes ikke." }, { status: 404 });
    }
    return Response.json({ comment });
  } catch (error) {
    console.error("PATCH /api/admin/comments/:id feilet", error);
    return Response.json({ error: "Kunne ikke oppdatere kommentaren." }, { status: 500 });
  }
}

/** DELETE /api/admin/comments/:id — slett kommentar. */
export async function DELETE(request: Request, ctx: Ctx) {
  if (!(await isAuthorizedAdmin(request))) return unauthorized();

  const id = parseId((await ctx.params).id);
  if (id === null) return Response.json({ error: "Ugyldig id." }, { status: 400 });

  try {
    const removed = await deleteComment(getSql(), id);
    if (!removed) {
      return Response.json({ error: "Kommentaren finnes ikke." }, { status: 404 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/admin/comments/:id feilet", error);
    return Response.json({ error: "Kunne ikke slette kommentaren." }, { status: 500 });
  }
}
