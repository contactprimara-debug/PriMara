/* ── Mirror every web-form lead into the Command Center intake ───────────
   Third, independent copy of a lead, alongside the dialer-CRM push
   (lib/crm.ts) and the Resend notification (lib/leads.ts).

   Why: the CRM push silently drops any lead with no phone number, and the
   email chain can fail downstream of "Delivered". The Command Center store
   accepts everything, has no required fields, and is what the daily
   watchdog reads — so a lead that lands here is a lead we can prove we got.

   Contract: this is best-effort and FULLY swallowed. It never throws, never
   rejects, and its outcome never reaches the visitor. A failure at the
   intake endpoint must not fail a submission or break the notification.
*/

const INTAKE_URL =
  process.env.COMMAND_CENTER_INTAKE_URL ||
  // Primara365 is Command Center client 12; this is client 12's own token.
  "https://primara-commandcenter.vercel.app/api/leads/38f32fa98ff7ee098247ae0ad569e131";

const TIMEOUT_MS = 5000;

export async function mirrorLeadToIntake(payload: Record<string, unknown>): Promise<void> {
  try {
    const res = await fetch(INTAKE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[intake] mirror returned", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("[intake] mirror failed:", err);
  }
}
