import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

/* ── Shared lead-email plumbing ────────────────────────────────────────────
   Single home for everything the three lead server actions used to each
   reimplement: the destination inbox, Resend delivery, first-name
   extraction, and the honeypot spam check.

   Delivery contract: requires RESEND_API_KEY and RESEND_FROM_EMAIL. When
   either is missing (fresh clone, CI), the submission is logged instead of
   sent and the visitor still sees success — a lead should never be lost to
   a config gap, and the log line preserves it for manual recovery.
*/

export const LEADS_INBOX = siteConfig.email;

/** Extract a first name for the thank-you message, skipping common titles. */
export function firstNameFrom(fullName: string): string {
  const titleRegex = /^(dr|mr|mrs|ms|prof|rev|sir|dame)\.?\s+/i;
  return fullName.trim().replace(titleRegex, "").split(/\s+/)[0] || fullName.trim();
}

/** True when the hidden honeypot field was filled — humans never see it. */
export function isBotSubmission(formData: FormData): boolean {
  return Boolean((formData.get("company") as string)?.trim());
}

export async function sendLeadEmail(opts: {
  tag: string; // log prefix, e.g. "contact"
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ sent: boolean }> {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    console.log(`[${opts.tag}] RESEND env not set — submission:`, opts.subject, "\n", opts.text);
    return { sent: false };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: LEADS_INBOX,
    replyTo: opts.replyTo || process.env.RESEND_REPLY_TO || undefined,
    subject: opts.subject,
    text: opts.text,
  });
  return { sent: true };
}
