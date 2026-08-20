"use server";

import { firstNameFrom, isBotSubmission, sendLeadEmail } from "@/lib/leads";
import { pushLeadToCrm } from "@/lib/crm";

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

  // See app/actions/contact.ts for why this runs both in parallel and only
  // reports an error to the visitor if the CRM save also failed.
  const [crmResult, emailResult] = await Promise.allSettled([
    pushLeadToCrm({
      contactName: name,
      practiceName: practice,
      phone,
      email,
      notes: `Package inquiry: ${pkg}\n\nNotes:\n${notes}`,
    }),
    sendLeadEmail({
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
    }),
  ]);

  const savedToCrm = crmResult.status === "fulfilled" && crmResult.value.ok;
  if (!savedToCrm) {
    console.error(
      "[packageInquiry] CRM save failed:",
      crmResult.status === "rejected" ? crmResult.reason : crmResult.value.reason
    );
  }
  if (emailResult.status === "rejected") {
    console.error("[packageInquiry] Resend send failed:", emailResult.reason);
  }

  if (!savedToCrm && emailResult.status === "rejected") {
    return {
      status: "error",
      error: "Could not send your inquiry. Please email liam.costello@primara365.com or call (561) 291-2681.",
    };
  }

  return { status: "success", firstName };
}
