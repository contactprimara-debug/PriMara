"use server";

import { sendLeadEmail } from "@/lib/leads";
import { pushLeadToCrm } from "@/lib/crm";
import { mirrorLeadToIntake } from "@/lib/intake";

export type AssessmentPayload = {
  name: string;
  email: string;
  phone?: string;
  practice?: string;
  score: number;
  tier: string;
  answers: Record<string, string>;
};

export async function submitAssessment(payload: AssessmentPayload) {
  const answerLines = Object.entries(payload.answers)
    .map(([q, a]) => `  ${q}: ${a}`)
    .join("\n");

  // See app/actions/contact.ts for why this is a CRM push + email, run in
  // parallel, both best-effort. Phone is optional on this form — when it's
  // missing, pushLeadToCrm reports "no phone number" and the email stays
  // the only record (the CRM's Lead.phone column is required).
  // See lib/intake.ts — additive, fully swallowed. This one matters most:
  // the CRM push refuses any lead with no phone, and phone is optional here.
  const [, crmResult, emailResult] = await Promise.allSettled([
    mirrorLeadToIntake({
      form: "assessment",
      page: "/assessment/quiz",
      name: payload.name,
      email: payload.email,
      phone: payload.phone || undefined,
      practice: payload.practice || undefined,
      score: payload.score,
      tier: payload.tier,
      message: `Practice Score Assessment: ${payload.score}% (${payload.tier})\n\nAnswers:\n${answerLines}`,
    }).then(() => undefined),
    pushLeadToCrm({
      contactName: payload.name,
      practiceName: payload.practice || payload.name,
      phone: payload.phone,
      email: payload.email,
      notes: `Practice Score Assessment: ${payload.score}% (${payload.tier})\n\nAnswers:\n${answerLines}`,
    }),
    sendLeadEmail({
      tag: "assessment",
      subject: `Practice Score Assessment — ${payload.name} scored ${payload.score}% (${payload.tier})`,
      replyTo: payload.email,
      text: [
        `NEW ASSESSMENT SUBMISSION`,
        ``,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `Practice: ${payload.practice || "Not provided"}`,
        `Score: ${payload.score}% — ${payload.tier}`,
        ``,
        `ANSWERS:`,
        answerLines,
      ].join("\n"),
    }),
  ]);

  if (crmResult.status === "rejected" || !crmResult.value.ok) {
    console.error(
      "[assessment] CRM save skipped/failed:",
      crmResult.status === "rejected" ? crmResult.reason : crmResult.value.reason
    );
  }
  if (emailResult.status === "rejected") {
    console.error("[assessment] Resend send failed:", emailResult.reason);
  }
}
