import type { Metadata } from "next";
import Link from "next/link";
import LegalShell, { legalBody, legalH2, legalList } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "SMS Terms and Consent | Primara",
  description: "How Primara 365 LLC uses text messages: program details, opt-out, help, and rates.",
  alternates: { canonical: "https://primara365.com/sms-terms" },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const sec: React.CSSProperties = { marginBottom: "2.25rem" };

export default function SmsTermsPage() {
  return (
    <LegalShell title="SMS Terms and Consent" effective="November 7, 2026">
      <div style={sec}>
        <h2 style={legalH2}>Program name</h2>
        <p style={legalBody}>Primara Customer Care Messages, sent by Primara 365 LLC (&ldquo;Primara&rdquo;), West Palm Beach, Florida.</p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>What you are agreeing to</h2>
        <p style={legalBody}>
          When you enter your mobile number on a form on primara365.com and submit it, you agree that Primara may text and call you about your request, such as
          confirming a free audit or scheduling a call. Consent to receive texts is not a condition of buying anything. You can also just call us at{" "}
          <a href="tel:+15612912681" style={{ color: "var(--gold)", whiteSpace: "nowrap" }}>(561)&nbsp;291-2681</a>.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>Message details</h2>
        <ul style={legalList}>
          <li><strong style={{ color: "var(--chalk)" }}>Frequency:</strong> message frequency varies, based on your request.</li>
          <li><strong style={{ color: "var(--chalk)" }}>Cost:</strong> message and data rates may apply, set by your carrier.</li>
          <li><strong style={{ color: "var(--chalk)" }}>Opt out:</strong> reply STOP at any time. You will get one confirmation and no more texts.</li>
          <li><strong style={{ color: "var(--chalk)" }}>Help:</strong> reply HELP, or email{" "}
            <a href="mailto:liam.costello@primara365.com" style={{ color: "var(--gold)" }}>liam.costello@primara365.com</a>, or call (561)&nbsp;291-2681.</li>
          <li><strong style={{ color: "var(--chalk)" }}>Carriers:</strong> carriers are not liable for delayed or undelivered messages.</li>
        </ul>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>Your mobile number is not shared</h2>
        <p style={legalBody}>
          We do not sell or share mobile numbers or SMS opt-in data with third parties or affiliates for their marketing or promotional purposes. Our messaging
          and email providers only handle your number to deliver our messages. Details are in our{" "}
          <Link prefetch={false} href="/privacy" style={{ color: "var(--gold)" }}>Privacy Policy</Link>.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>Please keep health details out of texts</h2>
        <p style={legalBody}>Do not text us patient names or any protected health information. Our messages are about business inquiries only.</p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>Related</h2>
        <p style={legalBody}>
          <Link prefetch={false} href="/terms" style={{ color: "var(--gold)" }}>Terms of Use</Link> ·{" "}
          <Link prefetch={false} href="/privacy" style={{ color: "var(--gold)" }}>Privacy Policy</Link>
        </p>
      </div>
    </LegalShell>
  );
}
