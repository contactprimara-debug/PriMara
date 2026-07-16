"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  firstName?: string;
  error?: string;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const reason = (formData.get("reason") as string)?.trim();
  // Optional — some form variants (and cached pages) don't send these.
  // Never reject a lead over a missing secondary field.
  const practiceName = (formData.get("practiceName") as string)?.trim() || "(not provided)";
  const callTime = (formData.get("callTime") as string)?.trim() || "Anytime";

  if (!name || !phone) {
    return { status: "error", error: "Please enter your name and phone number so we can reach you." };
  }

  // Extract first name, skipping common titles ("Dr.", "Mr.", etc.)
  const titleRegex = /^(dr|mr|mrs|ms|prof|rev|sir|dame)\.?\s+/i;
  const firstName =
    name.trim().replace(titleRegex, "").split(/\s+/)[0] || name.trim();

  // ── Send via Resend ─────────────────────────────────────────────────────
  // Requires RESEND_API_KEY and RESEND_FROM_EMAIL in .env.local
  // Falls back to console log when keys are not configured so the form still
  // returns success in dev (the user sees the thank-you screen).
  try {
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: "liam.costello@primara365.com",
        replyTo: process.env.RESEND_REPLY_TO || undefined,
        subject: `New inquiry from ${name} — ${practiceName}`,
        text: [
          `Name: ${name}`,
          `Practice: ${practiceName}`,
          `Phone: ${phone}`,
          `Best time to call: ${callTime}`,
          ...(reason ? [`Reason: ${reason}`] : []),
        ].join("\n"),
      });
    } else {
      console.log("[contact] RESEND_API_KEY not set — submission:", { name, practiceName, phone, callTime });
    }
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return { status: "error", error: "Could not send your message. Please call us directly at (561) 291-2681." };
  }

  return { status: "success", firstName };
}
