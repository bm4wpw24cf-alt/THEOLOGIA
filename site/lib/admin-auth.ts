import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { isValidAdminToken, verifyAdminPassword } from "@/lib/comments";

export { verifyAdminPassword };

/**
 * Admin-autentisering for /admin.
 *
 * Passordet er den eksisterende `ADMIN_TOKEN` – ingen ny hemmelighet.
 * Ved innlogging settes en httpOnly-cookie hvis verdi er en hash av tokenet
 * (bevis på kunnskap, ikke selve tokenet). Ingenting hemmelig ligger i
 * klientkoden. API-rutene godtar enten denne cookien eller den eksisterende
 * `Authorization: Bearer <ADMIN_TOKEN>`-headeren.
 */

const COOKIE_NAME = "theologia_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 12; // 12 timer

function safeEqualHex(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function expectedSessionValue(): string | null {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return null;
  return createHash("sha256").update(`theologia-admin-session:${token}`).digest("hex");
}

export async function createAdminSession(): Promise<void> {
  const value = expectedSessionValue();
  if (!value) throw new Error("ADMIN_TOKEN mangler");
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroyAdminSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

/** Har forespørselen en gyldig session-cookie? */
export async function hasAdminSessionCookie(): Promise<boolean> {
  const expected = expectedSessionValue();
  if (!expected) return false;
  try {
    const store = await cookies();
    const got = store.get(COOKIE_NAME)?.value;
    return typeof got === "string" && safeEqualHex(got, expected);
  } catch {
    // Ingen request-kontekst (f.eks. utenfor Next) = ingen gyldig session.
    return false;
  }
}

/**
 * Serverside-sjekk for admin-API-ruter: gyldig session-cookie ELLER
 * `Authorization: Bearer <ADMIN_TOKEN>`. Kall denne først i hver handler.
 */
export async function isAuthorizedAdmin(request: Request): Promise<boolean> {
  if (isValidAdminToken(request.headers.get("authorization"))) return true;
  return hasAdminSessionCookie();
}
