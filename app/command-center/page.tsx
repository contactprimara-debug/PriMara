import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primara365 Command Center | Primara",
  description:
    "Primara365 Command Center is the internal platform Primara 365 LLC uses to manage and report on the Google accounts our clients authorise us to work on.",
  alternates: { canonical: "https://primara365.com/command-center" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const sectionStyle: React.CSSProperties = { marginBottom: "2.5rem" };

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

const strong = { color: "var(--chalk)" } as React.CSSProperties;

export default function CommandCenterPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding:
            "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 48px) clamp(60px, 8vw, 100px)",
        }}
      >
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
            <li>
              <Link href="/" style={{ color: "var(--smoke)", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li style={{ color: "var(--ash)" }}>Primara365 Command Center</li>
          </ol>
        </nav>

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
            Our platform
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
            Primara365 Command Center
          </h1>
          <p style={{ ...bodyStyle, color: "var(--smoke)" }}>
            The internal platform Primara 365 LLC uses to manage and report on the Google
            accounts our clients authorise us to work on.
          </p>
        </header>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What it is</h2>
          <p style={bodyStyle}>
            Primara365 Command Center is a private, internal application built and operated by
            Primara 365 LLC, a digital marketing agency serving medical and mental health
            practices. Our team uses it to run the marketing work our clients hire us for:
            monitoring how their practice performs in Google Search, Google Maps and Google Ads,
            producing their monthly reports, and making the campaign and profile changes we manage
            on their behalf.
          </p>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            It is not a product for sale, and it is not open to the public. There is no sign-up.
            Access is limited to Primara 365 LLC staff.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Which Google data it uses, and why</h2>
          <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
            When a client engages us, they grant Primara365 Command Center access to their own
            Google accounts through Google&apos;s standard OAuth consent screen. We request only
            what the work requires:
          </p>
          <ul style={listStyle}>
            <li>
              <strong style={strong}>Google Business Profile</strong> — to read and respond to
              patient reviews, keep business information accurate, publish posts, and report on
              calls, direction requests and profile views.
            </li>
            <li>
              <strong style={strong}>Google Ads</strong> — to report on campaign performance and to
              manage the campaigns we run for the client, including budgets, bids, keywords and ads.
            </li>
            <li>
              <strong style={strong}>Google Analytics</strong> — to report on website traffic and
              the enquiries a practice receives.
            </li>
            <li>
              <strong style={strong}>Google Search Console</strong> — to report on search
              impressions, clicks and rankings, and to submit pages for indexing.
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>How we handle it</h2>
          <ul style={listStyle}>
            <li>
              A client&apos;s data is used only to operate and report on that client&apos;s own
              accounts. It is never sold, never shared with third parties, and never combined
              across clients.
            </li>
            <li>
              Our clients are healthcare providers. No patient or end-user personal data is
              requested, stored, or sent to Google alongside marketing data.
            </li>
            <li>
              All Google API calls are made server-side. Access tokens are encrypted at rest and
              are never exposed to a browser.
            </li>
            <li>
              Clients own their accounts throughout. Access can be revoked by the client at any
              time from their Google account, and we remove our access when an engagement ends.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            Our use of information received from Google APIs adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              style={{ color: "var(--chalk)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. Full detail is in our{" "}
            <Link href="/privacy" style={{ color: "var(--chalk)" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Who operates it</h2>
          <p style={bodyStyle}>
            Primara 365 LLC, a Florida limited liability company. Questions about this application
            or about data we hold on your behalf can be sent to{" "}
            <a href="mailto:contactprimara@gmail.com" style={{ color: "var(--chalk)" }}>
              contactprimara@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
