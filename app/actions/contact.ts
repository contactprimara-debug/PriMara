"use server";

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
  const callTime = (formData.get("callTime") as string)?.trim();

  if (!name || !phone || !reason || !callTime) {
    return { status: "error", error: "All fields are required." };
  }

  const firstName = name.split(" ")[0];

  // ── Send via Resend when RESEND_API_KEY is configured ──────────────────
  // Uncomment after adding RESEND_API_KEY and RESEND_FROM_EMAIL to .env.local
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: process.env.RESEND_FROM_EMAIL!,       // e.g. hello@primara.com
  //   to: "contactprimara@gmail.com",
  //   subject: `New inquiry from ${name} — ${reason}`,
  //   text: [
  //     `Name: ${name}`,
  //     `Phone: ${phone}`,
  //     `Reason: ${reason}`,
  //     `Best time to call: ${callTime}`,
  //   ].join("\n"),
  // });
  // ──────────────────────────────────────────────────────────────────────

  return { status: "success", firstName };
}
