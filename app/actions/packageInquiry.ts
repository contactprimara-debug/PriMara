"use server";

import { firstNameFrom, isBotSubmission, sendLeadEmail } from "@/lib/leads";

export type PackageInquiryState = {
  status: "idle" | "success" | "error";
  firstName?: string;
  error?: string;
};

export async function submitPackageInquiry(
  prevState: PackageInquiryState,
  formData: FormData
): Promise<PackageInquiryState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const practice = (formData.get("practice") as string)?.trim();
  const notes = (formData.get("notes") as string)?.trim() || "(none)";
  const pkg = (formData.get("package") as string)?.trim();

  if (!name || !email || !phone || !practice || !pkg) {
    return { status: "error", error: "Please fill in all required fields." };
  }

  const firstName = firstNameFrom(name);

  // Honeypot hit → pretend success, send nothing.
  if (isBotSubmission(formData)) {
    return { status: "success", firstName };
  }

  try {
    await sendLeadEmail({
      tag: "packageInquiry",
      subject: `Package inquiry — ${pkg} — ${name} (${practice})`,
      replyTo: email,
      text: [
        `NEW PACKAGE INQUIRY`,
        ``,
        `Package: ${pkg}`,
        `Name: ${name}`,
        `Practice: ${practice}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ``,
        `Notes:`,
        notes,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[packageInquiry] Resend send failed:", err);
    return {
      status: "error",
      error: "Could not send your inquiry. Please email liam.costello@primara365.com or call (561) 291-2681.",
    };
  }

  return { status: "success", firstName };
}
