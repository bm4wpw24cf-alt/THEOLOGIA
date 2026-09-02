// Test-stub for `next/headers` (pakken kan ikke importeres utenfor Next-runtime).
// `cookies()` kaster – akkurat som når det kalles uten request-kontekst –
// slik at admin-auth sin hasAdminSessionCookie() fanger og returnerer false.
export async function cookies() {
  throw new Error("cookies() called outside request scope (test stub)");
}

export async function headers() {
  return new Headers();
}

export async function draftMode() {
  return { isEnabled: false };
}
