/* ── Push web-form leads directly into the dialer CRM ────────────────────
   Previously the only record of a form submission was an email — if any
   link in that chain broke (Resend API error, DNS/routing misconfiguration
   downstream of "Delivered", a filter, a typo) the lead vanished with
   nobody any wiser. This writes the lead straight into the CRM's database
   via its bearer-key-protected import API, independent of email entirely,
   so a lead survives even if notifications fail. Email (see lib/leads.ts)
   stays as a secondary, best-effort "hey, look at this now" notification.
*/

const CRM_IMPORT_URL = "https://dialer-crm-theta.vercel.app/api/leads/import-api";

export async function pushLeadToCrm(opts: {
  contactName?: string;
  practiceName: string;
  phone?: string;
  email?: string;
  notes?: string;
}): Promise<{ ok: boolean; reason?: string }> {
  const apiKey = process.env.WEB_LEADS_API_KEY;
  if (!apiKey) {
    console.error("[crm] WEB_LEADS_API_KEY is not configured — lead was NOT saved to the CRM.");
    return { ok: false, reason: "not configured" };
  }
  if (!opts.phone?.trim()) {
    // The CRM's Lead.phone column is required — a lead with no phone number
    // can't be stored there. It's still captured by the email notification.
    return { ok: false, reason: "no phone number" };
  }

  try {
    const res = await fetch(CRM_IMPORT_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "Website Form",
        rows: [
          {
            contactName: opts.contactName,
            practiceName: opts.practiceName,
            phone: opts.phone.trim(),
            email: opts.email?.trim() || undefined,
            notes: opts.notes,
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error("[crm] import API returned", res.status, await res.text());
      return { ok: false, reason: `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[crm] Failed to reach import API:", err);
    return { ok: false, reason: "network error" };
  }
}
