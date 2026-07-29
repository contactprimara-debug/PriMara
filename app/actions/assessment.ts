"use server";

import { sendLeadEmail } from "@/lib/leads";

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
  try {
    const answerLines = Object.entries(payload.answers)
      .map(([q, a]) => `  ${q}: ${a}`)
      .join("\n");

    await sendLeadEmail({
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
    });
  } catch (err) {
    console.error("[assessment] Resend send failed:", err);
  }
}
