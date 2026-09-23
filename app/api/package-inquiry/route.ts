import { NextRequest, NextResponse } from "next/server";
import { submitPackageInquiry } from "@/app/actions/packageInquiry";

/* Same rationale as app/api/contact/route.ts — literal SSR action URL for
   the tracking-coverage crawler (site-health finding 218), same underlying
   logic (CRM push, email, honeypot, pl_ok gate) unchanged. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
      if (value !== undefined && value !== null) formData.set(key, String(value));
    }

    const result = await submitPackageInquiry({ status: "idle" }, formData);

    if (result.status === "error") {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true, firstName: result.firstName });
  } catch (err) {
    console.error("[api/package-inquiry] failed:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please call us directly at (561) 291-2681." },
      { status: 500 }
    );
  }
}
