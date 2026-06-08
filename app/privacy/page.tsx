import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Primara",
  description: "How Primara collects, uses, and protects the information you share with us.",
  alternates: { canonical: "https://primara365.com/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 29, 2026";

const sectionStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display), Georgia, serif",
  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
  color: "var(--chalk)",
  fontWeight: 400,
  marginBottom: "0.75rem",
  paddingBottom: "0.5rem",
  borderBottom: "1px solid var(--wire)",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "system-ui, sans-serif",
  fontSize: "0.95rem",
  color: "var(--ash)",
  lineHeight: 1.85,
};

const listStyle: React.CSSProperties = {
  ...bodyStyle,
  paddingLeft: "1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 48px) clamp(60px, 8vw, 100px)",
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
          <ol
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.8rem",
              color: "var(--smoke)",
            }}
          >
            <li><Link href="/" style={{ color: "var(--smoke)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: "var(--ash)" }}>Privacy Policy</li>
          </ol>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "16px",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ ...bodyStyle, color: "var(--smoke)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </header>

        {/* Intro */}
        <div style={{ ...sectionStyle }}>
          <p style={bodyStyle}>
            Primara ("we," "us," or "our") operates the website primara365.com. This Privacy Policy
            explains what information we collect when you visit our site or contact us, how we use
            it, and your rights regarding that information. We take your privacy seriously.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Information We Collect</h2>
          <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
            We collect only what is necessary to respond to your inquiry:
          </p>
          <ul style={listStyle}>
            <li><strong style={{ color: "var(--chalk)" }}>Contact form submissions</strong> — your name, phone number, and reason for contacting us.</li>
            <li><strong style={{ color: "var(--chalk)" }}>Package inquiry forms</strong> — your name, email address, phone number, practice name, and any notes you provide.</li>
            <li><strong style={{ color: "var(--chalk)" }}>Communications</strong> — emails or calls you initiate with us.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            We do not collect payment information, medical records, or any protected health
            information (PHI) through this website.
          </p>
        </div>

        {/* 2. How We Use Your Information */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. How We Use Your Information</h2>
          <ul style={listStyle}>
            <li>To respond to your inquiry and schedule a consultation.</li>
            <li>To provide our digital marketing services if you become a client.</li>
            <li>To send you relevant updates about our services (you may opt out at any time).</li>
            <li>To improve our website and communications.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            We do not sell, rent, or trade your personal information to third parties for their
            marketing purposes.
          </p>
        </div>

        {/* 3. Third-Party Services */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Third-Party Services We Use</h2>
          <ul style={listStyle}>
            <li>
              <strong style={{ color: "var(--chalk)" }}>Resend</strong> — we use Resend to deliver
              email notifications when you submit a contact form. Your submission data is
              transmitted to Resend's servers to send us the notification. Resend's privacy
              policy is available at resend.com.
            </li>
            <li>
              <strong style={{ color: "var(--chalk)" }}>Vercel</strong> — our website is hosted
              on Vercel. Vercel may log standard server access data (IP address, browser type,
              pages visited) for security and performance purposes. Vercel's privacy policy
              is available at vercel.com.
            </li>
            <li>
              <strong style={{ color: "var(--chalk)" }}>Plausible Analytics</strong> — we use
              Plausible to understand how visitors use our site. Plausible is a privacy-respecting
              analytics tool that does not use cookies and does not collect personally identifiable
              information. No data is shared with advertising networks.
            </li>
          </ul>
        </div>

        {/* 4. Cookies */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Cookies</h2>
          <p style={bodyStyle}>
            This website does not use tracking or advertising cookies. Our analytics provider
            (Plausible) is cookieless by design. We do not run retargeting or cross-site
            tracking of any kind.
          </p>
        </div>

        {/* 5. Data Retention */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Data Retention</h2>
          <p style={bodyStyle}>
            We retain contact form submissions for as long as necessary to respond to your
            inquiry and, if applicable, to fulfill our service engagement with you. You may
            request deletion of your information at any time by contacting us at the address below.
          </p>
        </div>

        {/* 6. Your Rights */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Your Rights</h2>
          <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
            Depending on your location, you may have the right to:
          </p>
          <ul style={listStyle}>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:contactprimara@gmail.com" style={{ color: "var(--gold)" }}>
              contactprimara@gmail.com
            </a>
            . We will respond within 30 days.
          </p>
        </div>

        {/* 7. Children */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>7. Children's Privacy</h2>
          <p style={bodyStyle}>
            Our website is not directed to individuals under the age of 18. We do not
            knowingly collect personal information from minors.
          </p>
        </div>

        {/* 8. Changes */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>8. Changes to This Policy</h2>
          <p style={bodyStyle}>
            We may update this Privacy Policy from time to time. When we do, we will update
            the effective date at the top of this page. Continued use of our website after
            changes are posted constitutes your acceptance of the updated policy.
          </p>
        </div>

        {/* 9. Contact */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>9. Contact Us</h2>
          <p style={bodyStyle}>
            If you have questions about this Privacy Policy or how we handle your information,
            please contact us:
          </p>
          <address
            style={{
              fontStyle: "normal",
              marginTop: "1rem",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.95rem",
              color: "var(--ash)",
              lineHeight: 2,
            }}
          >
            Primara<br />
            West Palm Beach, FL 33401<br />
            <a href="mailto:contactprimara@gmail.com" style={{ color: "var(--gold)" }}>
              contactprimara@gmail.com
            </a>
            <br />
            <a href="tel:+15612912681" style={{ color: "var(--gold)" }}>
              +1 (561) 291-2681
            </a>
          </address>
        </div>

        {/* Back link */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--wire)" }}>
          <Link
            href="/"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
