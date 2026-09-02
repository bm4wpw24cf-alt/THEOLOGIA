import {
  createAdminSession,
  destroyAdminSession,
  hasAdminSessionCookie,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/admin/session — { authenticated: boolean } */
export async function GET() {
  return Response.json({ authenticated: await hasAdminSessionCookie() });
}

/** POST /api/admin/session — { password } → logg inn, sett session-cookie */
export async function POST(request: Request) {
  if (!process.env.ADMIN_TOKEN) {
    return Response.json({ error: "Innlogging er ikke konfigurert på serveren." }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  const password = (payload as Record<string, unknown> | null)?.password;
  if (!verifyAdminPassword(password)) {
    return Response.json({ error: "Feil passord." }, { status: 401 });
  }

  await createAdminSession();
  return Response.json({ ok: true, authenticated: true });
}

/** DELETE /api/admin/session — logg ut */
export async function DELETE() {
  await destroyAdminSession();
  return Response.json({ ok: true, authenticated: false });
}
