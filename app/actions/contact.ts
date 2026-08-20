"use server";

import { firstNameFrom, isBotSubmission, sendLeadEmail } from "@/lib/leads";
import { pushLeadToCrm } from "@/lib/crm";

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

  // The CRM push is the durable record — it doesn't depend on email
  // delivery or downstream forwarding, either of which can fail silently
  // after Resend reports success. Run both, and only tell the visitor we
  // lost their message if the CRM save ALSO failed; email alone failing
  // still means the lead is safely captured.
  const [crmResult, emailResult] = await Promise.allSettled([
    pushLeadToCrm({
      contactName: name,
      practiceName,
      phone,
      email,
      notes: [callTime ? `Best time to call: ${callTime}` : null, reason ? `Reason: ${reason}` : null]
        .filter(Boolean)
        .join("\n"),
    }),
    sendLeadEmail({
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
    }),
  ]);

  const savedToCrm = crmResult.status === "fulfilled" && crmResult.value.ok;
  if (!savedToCrm) {
    console.error(
      "[contact] CRM save failed:",
      crmResult.status === "rejected" ? crmResult.reason : crmResult.value.reason
    );
  }
  if (emailResult.status === "rejected") {
    console.error("[contact] Resend send failed:", emailResult.reason);
  }

  if (!savedToCrm && emailResult.status === "rejected") {
    return { status: "error", error: "Could not send your message. Please call us directly at (561) 291-2681." };
  }

  return { status: "success", firstName };
}
