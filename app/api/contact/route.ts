import { NextRequest, NextResponse } from "next/server";
import { submitContact } from "@/app/actions/contact";
import { submitPackageInquiry } from "@/app/actions/packageInquiry";

/* ── Real HTTP endpoint for the contact/audit lead forms ────────────────────
   WHY (2026-09-23, site-health finding 218): the forms previously rendered
   action="" in raw server HTML because React server actions (action={fn})
   never emit a literal action URL — only a hydrated JS bundle knew how to
   submit them. The site-health tracking-coverage crawler reads raw SSR HTML
   only, so it saw "no intake POST" on every page with one of these forms,
   identical to the primara365 (client 11 in that system) fix already applied
   in ~/making-heaven-crowded commit 1756dc9.

   This route does the same work submitContact() already did — it's the same
   function, just called from here instead of from the useFormState hook —
   so CRM push, email, honeypot handling, and the pl_ok lead-conversion
   cookie gate are unchanged. The forms now literally render
   action="/api/contact" method="POST" in SSR HTML (visible to the crawler
   and to any non-JS client) and use onSubmit+fetch for the JS-enhanced UX.
*/
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
      if (value !== undefined && value !== null) formData.set(key, String(value));
    }

    // No-JS fallback for the packages forms: their raw SSR <form> also
    // points action="/api/contact" (this endpoint) alongside a
    // JS-enhanced fetch to /api/package-inquiry, so a visitor submitting
    // with JS disabled still reaches the right handler instead of 404ing.
    const result = formData.get("package")
      ? await submitPackageInquiry({ status: "idle" }, formData)
      : await submitContact({ status: "idle" }, formData);

    if (result.status === "error") {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true, firstName: result.firstName });
  } catch (err) {
    console.error("[api/contact] failed:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please call us directly at (561) 291-2681." },
      { status: 500 }
    );
  }
}
