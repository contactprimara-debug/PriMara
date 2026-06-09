"use server";

import { Resend } from "resend";

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

  // Extract first name, skipping common titles ("Dr.", "Mr.", etc.)
  const titleRegex = /^(dr|mr|mrs|ms|prof|rev|sir|dame)\.?\s+/i;
  const firstName =
    name.trim().replace(titleRegex, "").split(/\s+/)[0] || name.trim();

  try {
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: "liam.costello@primara365.com",
        replyTo: email,
        subject: `Package inquiry — ${pkg} — ${name} (${practice})`,
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
    } else {
      console.log("[packageInquiry] RESEND_API_KEY not set — submission:", {
        pkg,
        name,
        practice,
        email,
        phone,
        notes,
      });
    }
  } catch (err) {
    console.error("[packageInquiry] Resend send failed:", err);
    return {
      status: "error",
      error: "Could not send your inquiry. Please email liam.costello@primara365.com or call (561) 291-2681.",
    };
  }

  return { status: "success", firstName };
}
