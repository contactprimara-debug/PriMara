"use server";

import { Resend } from "resend";

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
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const answerLines = Object.entries(payload.answers)
        .map(([q, a]) => `  ${q}: ${a}`)
        .join("\n");

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: "liam.costello@primara365.com",
        replyTo: payload.email,
        subject: `Practice Score Assessment — ${payload.name} scored ${payload.score}% (${payload.tier})`,
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
    }
  } catch (err) {
    console.error("[assessment] Resend send failed:", err);
  }
}
