import { cookies } from "next/headers";

/* ── Lead-conversion gate ──────────────────────────────────────────────────
   Why this exists (bug found 2026-09-17): the honeypot path in the lead
   server actions returns { status: "success" } WITHOUT recording a lead —
   deliberately, so bots can't tell they were caught. Every form then does
   router.push("/thank-you"), and /thank-you rendered <LeadConversionPing />
   unconditionally, which fired generate_lead + the Google Ads conversion.
   Net effect: GA4 counted 7 conversions against 3 real leads in 28 days.

   The fix is a server-side handshake the client cannot forge. The server
   action sets a short-lived httpOnly cookie ONLY on a path where a real lead
   actually reached a durable destination; /thank-you reads it during render
   and only then mounts the ping. Bots still get the fake success and the
   redirect — they just land on a thank-you page with no tag on it.

   httpOnly matters: a bot that can't read or write this cookie can't
   manufacture a conversion by hitting /thank-you directly either.

   The TTL is deliberately tiny. It only has to survive one client-side
   router.push, which is immediate. A stale flag can't accumulate, and the
   ping's own sessionStorage guard still prevents a double-fire on reload.
*/

export const LEAD_PING_COOKIE = "pl_ok";
const TTL_SECONDS = 60;

/** Call ONLY after a real lead was recorded. Authorizes exactly one ping. */
export function markLeadRecorded(): void {
  try {
    cookies().set(LEAD_PING_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: TTL_SECONDS,
    });
  } catch (err) {
    // Never let a cookie-store failure turn a captured lead into an error.
    console.error("[leadPing] could not set conversion flag:", err);
  }
}

/** True when this render was reached by a genuinely recorded lead. */
export function hasLeadPingFlag(): boolean {
  try {
    return cookies().get(LEAD_PING_COOKIE)?.value === "1";
  } catch {
    return false;
  }
}
