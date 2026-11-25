import { NextResponse } from "next/server";
import { fetchSlots } from "@/lib/booking";
export const dynamic = "force-dynamic";
export async function GET() {
  const slots = await fetchSlots();
  if (!slots) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  return NextResponse.json({ slots }, { headers: { "Cache-Control": "no-store" } });
}
