import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Primara",
  description: "We received your message and will be in touch within 24 hours.",
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10l4 4 8-8" stroke="#3DAA6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "We review your request",
    body: "Liam or Gio personally reads every submission — usually within a few hours.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 3.5h2.5L6.5 7 5 8.5a8 8 0 003.5 3.5L10 10.5l3 1v2.5A1.5 1.5 0 0111.5 15C5.7 15 1 10.3 1 4.5A1.5 1.5 0 013 3z" fill="var(--gold)" />
      </svg>
    ),
    label: "We call you within 24 hours",
    body: "You'll hear from us directly — no scheduling tools, no assistant, no runaround.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="var(--ember)" strokeWidth="1.5" />
        <path d="M6 9h8M6 12h5" stroke="var(--ember)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "We get to work",
    body: "If it's a fit, most engagements begin within the first week.",
  },
];

const facts = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="8" r="3.5" stroke="var(--gold)" strokeWidth="1.5" />
        <path d="M4 19c0-3.5 3.13-6.5 7-6.5s7 3 7 6.5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    headline: "Founder-Led, Always",
    body: "Every client works directly with Liam Costello or Gio LaRoche — from the first call through monthly reporting. No junior account managers, no handoffs, no middlemen. You get the people who built the strategy.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L13.545 7.91L20 8.727L15.5 13.273L16.727 20L11 16.91L5.273 20L6.5 13.273L2 8.727L8.455 7.91L11 2Z" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Independent Primary Care Only",
    body: "We don't work with hospital systems, urgent care chains, or dental groups. Our entire focus is independent primary care in Florida — family medicine, internal medicine, pediatrics, and more. Specialization is the advantage.",
  },
];

export default function ThankYouPage() {
  return (
    <main data-page="thank-you" style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* Logo bar only — no nav */}
      <div style={{ padding: "20px clamp(24px, 6vw, 80px)", borderBottom: "1px solid var(--wire)" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontStyle: "italic",
            fontSize: "20px",
            color: "var(--chalk)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Primara
        </Link>
      </div>

      {/* Confirmation */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) clamp(24px, 8vw, 80px)", borderBottom: "1px solid var(--wire)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* Success badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(61,170,110,0.4)", background: "rgba(61,170,110,0.08)", borderRadius: "999px", padding: "8px 20px", marginBottom: "32px" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7l4 4 6-6" stroke="#3DAA6E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5ecb94", fontWeight: 600 }}>
              Message Received
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            We got your message.
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "var(--chalk)",
              lineHeight: 1.75,
              opacity: 0.75,
            }}
          >
            We&rsquo;ll be in touch within 24 hours. In the meantime, here&rsquo;s exactly what happens next.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section
        aria-labelledby="steps-heading"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)", padding: "clamp(56px, 8vw, 88px) clamp(24px, 8vw, 80px)" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "40px" }}>
            What happens next
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(24px, 4vw, 48px)" }}>
            {steps.map(({ icon, label, body }, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {icon}
                  <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--chalk)" }}>
                    {label}
                  </span>
                </div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--chalk)", lineHeight: 1.75, margin: 0, opacity: 0.65 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Primara */}
      <section
        aria-labelledby="about-heading"
        style={{ borderBottom: "1px solid var(--wire)", padding: "clamp(56px, 8vw, 88px) clamp(24px, 8vw, 80px)" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "40px" }}>
            Who you&rsquo;re working with
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(20px, 3vw, 36px)" }}>
            {facts.map(({ icon, headline, body }) => (
              <div
                key={headline}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--wire)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: "4px",
                  padding: "clamp(24px, 3vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {icon}
                <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: "var(--chalk)", fontWeight: 400, margin: 0, lineHeight: 1.2 }}>
                  {headline}
                </h2>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.8, margin: 0, opacity: 0.72 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single soft CTA */}
      <section style={{ padding: "clamp(56px, 8vw, 88px) clamp(24px, 8vw, 80px)", textAlign: "center" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.75, opacity: 0.65, marginBottom: "32px" }}>
            While you wait, take a look at what we do and the practices we work with.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--wire)",
              color: "var(--chalk)",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: "3px",
              textDecoration: "none",
            }}
          >
            Back to Primara
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
