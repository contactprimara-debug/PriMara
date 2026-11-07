import Link from "next/link";

/* Consent line shown next to the submit button of every form that collects a
   phone number (website standard item 11, card #611). Static, no JS. */
export default function SmsConsentLine() {
  return (
    <p
      className="sms-consent"
      style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", lineHeight: 1.5, color: "var(--smoke)", margin: "0 0 12px" }}
    >
      By submitting, you agree Primara may call or text you about your request. Msg &amp; data rates may apply. Message
      frequency varies. Reply STOP to opt out, HELP for help. We never share mobile numbers for marketing.{" "}
      <Link prefetch={false} href="/sms-terms" style={{ color: "var(--gold)", textDecoration: "underline" }}>SMS Terms</Link>
      {" · "}
      <Link prefetch={false} href="/privacy" style={{ color: "var(--gold)", textDecoration: "underline" }}>Privacy</Link>
    </p>
  );
}
