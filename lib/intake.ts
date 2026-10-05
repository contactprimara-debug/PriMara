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

   Hardened 2026-10-05 (card #290): the old version made ONE 5s attempt and
   only console.error'd on failure -- a place nobody reads -- so a dropped
   mirror was invisible while GA4 still counted the lead. Now: up to 3
   attempts (network error / 5xx / 429 only), and if all fail the full lead
   is emailed to LEADS_INBOX with a loud subject so it is recoverable by hand.
   Retries are safe: the intake endpoint folds a repeat of the same enquiry
   into the first row (is_duplicate / duplicate_of), so no second mechanism.
*/

import { sendLeadEmail } from "@/lib/leads";

const INTAKE_URL =
  process.env.COMMAND_CENTER_INTAKE_URL ||
  // Primara365 is Command Center client 12; this is client 12's own token.
  "https://primara-commandcenter.vercel.app/api/leads/38f32fa98ff7ee098247ae0ad569e131";

const TIMEOUT_MS = 4000;
const ATTEMPTS = 3;
const BACKOFF_MS = [0, 400, 1200];

export async function mirrorLeadToIntake(payload: Record<string, unknown>): Promise<void> {
  let lastReason = "unknown";
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    if (BACKOFF_MS[attempt]) await new Promise((r) => setTimeout(r, BACKOFF_MS[attempt]));
    try {
      const res = await fetch(INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(TIMEOUT_MS),
        cache: "no-store",
      });
      if (res.ok) return;
      const text = await res.text().catch(() => "");
      lastReason = `HTTP ${res.status} ${text.slice(0, 200)}`;
      console.error(`[intake] mirror attempt ${attempt + 1}/${ATTEMPTS} returned`, res.status, text);
      // A 4xx (other than 429) will not get better by retrying.
      if (res.status < 500 && res.status !== 429) break;
    } catch (err) {
      lastReason = err instanceof Error ? err.message : String(err);
      console.error(`[intake] mirror attempt ${attempt + 1}/${ATTEMPTS} failed:`, err);
    }
  }
  await alertIntakeFailure(payload, lastReason);
}

/** Emails the full lead to the inbox we do read, so a failed mirror is never silent. */
async function alertIntakeFailure(payload: Record<string, unknown>, reason: string): Promise<void> {
  try {
    const lines = Object.entries(payload).map(([k, v]) => `${k}: ${String(v ?? "")}`);
    await sendLeadEmail({
      tag: "intake-failure",
      subject: `[ACTION] Lead NOT saved to Command Center (${String(payload.form ?? "form")}) - ${String(payload.name ?? "unknown")}`,
      text: [
        "The Command Center intake did not accept this submission (retried where retryable).",
        `Reason: ${reason}`,
        "Add it by hand (or re-POST it to the intake URL). Details:",
        "",
        ...lines,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[intake] ALERT EMAIL ALSO FAILED -- lead details:", JSON.stringify(payload), err);
  }
}
