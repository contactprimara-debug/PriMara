"use server";

import { firstNameFrom, isBotSubmission, sendLeadEmail } from "@/lib/leads";

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
  const email = (formData.get("email") as string)?.trim();
  // Optional — some form variants (and cached pages) don't send these.
  // Never reject a lead over a missing secondary field.
  const practiceName = (formData.get("practiceName") as string)?.trim() || "(not provided)";
  const callTime = (formData.get("callTime") as string)?.trim() || "Anytime";

  if (!name || !phone) {
    return { status: "error", error: "Please enter your name and phone number so we can reach you." };
  }

  const firstName = firstNameFrom(name);

  // Honeypot hit → pretend success, send nothing.
  if (isBotSubmission(formData)) {
    return { status: "success", firstName };
  }

  try {
    await sendLeadEmail({
      tag: "contact",
      subject: `New inquiry from ${name} — ${practiceName}`,
      replyTo: email || undefined,
      text: [
        `Name: ${name}`,
        `Practice: ${practiceName}`,
        `Phone: ${phone}`,
        `Best time to call: ${callTime}`,
        ...(email ? [`Email: ${email}`] : []),
        ...(reason ? [`Reason: ${reason}`] : []),
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return { status: "error", error: "Could not send your message. Please call us directly at (561) 291-2681." };
  }

  return { status: "success", firstName };
}
