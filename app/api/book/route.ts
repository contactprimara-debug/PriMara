import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/booking";
import { mirrorLeadToIntake } from "@/lib/intake";
import { markLeadRecorded } from "@/lib/leadPing";
import { isTestLead } from "@/lib/lead-test-markers";
import { sendLeadEmail } from "@/lib/leads";

/* Book a call. The booking is created first (Pochey event + Meet link), then the lead is recorded in the Command
   Center and the pl_ok flag is set ONLY when a stored lead id exists, so /thank-you fires generate_lead + the Ads
   conversion exactly like the forms do (never on click). Honeypot or TEST names never set the flag. */
export async function POST(req: NextRequest) {
  const b = (await req.json().catch(() => null)) as Record<string, string> | null;
  if (!b) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const name = (b.name ?? "").trim(), email = (b.email ?? "").trim(), phone = (b.phone ?? "").trim(), start = (b.start ?? "").trim();
  if (b.company) return NextResponse.json({ ok: true, start }); // honeypot: fake success, nothing recorded
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || phone.replace(/\D/g, "").length < 7 || !start)
    return NextResponse.json({ error: "Please enter your name, a valid email and phone number." }, { status: 400 });
  const test = isTestLead({ name, email }, { header: req.headers.get("x-primara-test") });
  const r = await createBooking({ start, name, email, phone, test });
  if (!r.ok) {
    const msg = r.error === "taken" ? "That time was just taken. Please pick another." : r.error === "invalid" ? "That time is no longer available. Please pick another." : "Booking is unavailable right now. Please call (561) 291-2681.";
    return NextResponse.json({ error: msg, code: r.error }, { status: r.error === "unavailable" ? 503 : 409 });
  }
  const when = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" }).format(new Date(r.start));
  const leadId = await mirrorLeadToIntake({ form: "booking", page: "homepage booking calendar", name, phone, email, best_time_to_call: when + " ET", message: `Booked a 30 minute call for ${when} ET`, booking_event: r.eventId }, { test });
  if (!test) {
    sendLeadEmail({ tag: "booking", subject: `Call booked: ${name} on ${when} ET`, replyTo: email, text: [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, `When: ${when} ET`, r.meet ? `Meet: ${r.meet}` : ""].filter(Boolean).join("\n") }).catch((e) => console.error("[book] email failed:", e));
    markLeadRecorded(leadId);
  }
  return NextResponse.json({ ok: true, start: r.start, meet: r.meet, ...(test ? { eventId: r.eventId } : {}) });
}
