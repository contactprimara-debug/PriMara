/* Website booking (card #947, replaces the old third-party scheduler). Availability and event creation live in the Command Center
   (lib/booking-google.ts there): it reads free/busy on Pochey + Pochey X Talie + primary and writes events to
   Pochey only. This site only proxies, server side, with a shared secret. */
const BASE = process.env.BOOKING_API_BASE || "https://primara-commandcenter.vercel.app";
const headers = () => ({ "Content-Type": "application/json", "X-Booking-Secret": process.env.BOOKING_SHARED_SECRET || "" });

export type Slot = { start: string };
export async function fetchSlots(): Promise<Slot[] | null> {
  try {
    const r = await fetch(`${BASE}/api/booking/slots`, { headers: headers(), cache: "no-store", signal: AbortSignal.timeout(12000) });
    if (!r.ok) return null;
    const j = (await r.json()) as { slots?: Slot[] };
    return (j.slots ?? []).map((s) => ({ start: s.start }));
  } catch { return null; }
}

export type CreateResult = { ok: true; start: string; meet: string | null; eventId: string } | { ok: false; error: "taken" | "invalid" | "unavailable" };
export async function createBooking(b: { start: string; name: string; email: string; phone: string; note?: string; test?: boolean }): Promise<CreateResult> {
  try {
    const r = await fetch(`${BASE}/api/booking/create`, { method: "POST", headers: headers(), body: JSON.stringify(b), cache: "no-store", signal: AbortSignal.timeout(20000) });
    const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string; start?: string; meet?: string | null; eventId?: string };
    if (r.ok && j.ok) return { ok: true, start: j.start!, meet: j.meet ?? null, eventId: j.eventId! };
    return { ok: false, error: j.error === "taken" ? "taken" : j.error === "invalid" ? "invalid" : "unavailable" };
  } catch { return { ok: false, error: "unavailable" }; }
}
