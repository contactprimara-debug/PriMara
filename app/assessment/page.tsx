import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Practice Score Assessment | Primara — Medical Marketing Florida",
  description:
    "Answer 10 questions to find out why local patients can't find your practice online — and which fix will fill the most appointments fastest. Free, instant results. Created by Primara.",
  alternates: { canonical: "https://primara365.com/assessment" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const valueAreas = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="var(--gold)" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Google Maps & Local Visibility",
    body: "Where your practice ranks when patients search for care in your area — and what's holding you back.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2l2.39 4.84 5.35.78-3.87 3.77.91 5.32L11 13.27l-4.78 2.51.91-5.32L2.26 6.62l5.35-.78L11 2Z" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Online Reputation & Reviews",
    body: "Your review count, rating, and response rate compared to the practice patients are choosing instead of you.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="16" height="12" rx="2" stroke="var(--gold)" strokeWidth="1.5" />
        <path d="M7 18h8" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 16v2" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Website Patient-Conversion Power",
    body: "Whether your website is actually turning visitors into booked appointments — or sending them elsewhere.",
  },
];

const stats = [
  {
    number: "77%",
    label: "of patients search online before choosing a doctor",
    source: "PatientPop, Patient Perspectives Survey, 2022",
  },
  {
    number: "88%",
    label: "trust online reviews as much as a personal recommendation",
    source: "BrightLocal, Local Consumer Review Survey, 2023",
  },
  {
    number: "75%",
    label: "never scroll past Google's first page of results",
    source: "Backlinko, Google Organic CTR Research, 2023",
  },
];

export default function AssessmentLandingPage() {
  return (
    <main data-page="assessment" style={{ background: "var(--void)", minHeight: "100vh", paddingTop: 0 }}>

      {/* ── Logo bar ─────────────────────────────────────────────────────── */}
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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(60px, 10vw, 100px) clamp(24px, 8vw, 120px) clamp(60px, 8vw, 100px)",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        {/* Atmospheric glow */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70vw 60vh at 50% 0%, rgba(232,97,26,0.06) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(61,170,110,0.4)", background: "rgba(61,170,110,0.08)", borderRadius: "999px", padding: "8px 20px", marginBottom: "32px" }}>
            <span style={{ display: "block", width: "7px", height: "7px", borderRadius: "50%", background: "var(--color-success)", flexShrink: 0 }} />
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5ecb94", fontWeight: 600 }}>
              Free · Takes 3 Minutes · Instant Results
            </span>
          </div>

          {/* Frustration Hook */}
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "28px",
            }}
          >
            Feeling frustrated that your schedule isn&rsquo;t full — even though you&rsquo;re delivering excellent care every single day?
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: "var(--chalk)",
              lineHeight: 1.75,
              marginBottom: "48px",
              maxWidth: "620px",
              margin: "0 auto 48px",
              opacity: 0.8,
            }}
          >
            Answer 10 questions to find out exactly why local patients can&rsquo;t find your practice online — and which fix will fill the most appointments fastest.
          </p>

          {/* Primary CTA */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Link
              href="/assessment/quiz"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--ember)",
                color: "#ffffff",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "20px 48px",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(232,97,26,0.25)",
                transition: "opacity 0.2s",
              }}
            >
              Start Your Free Practice Score
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--chalk)", letterSpacing: "0.04em", opacity: 0.7 }}>
              No credit card · No commitment · Instant recommendations
            </p>
          </div>
        </div>
      </section>

      {/* ── Value Proposition ─────────────────────────────────────────────── */}
      <section aria-labelledby="value-heading" style={{ borderBottom: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "16px" }}>
              What the assessment measures
            </p>
            <h2
              id="value-heading"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--chalk)",
                fontWeight: 400,
                lineHeight: 1.1,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              15 questions. Three areas. One clear picture of where you stand.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
            {valueAreas.map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "clamp(24px, 3vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {icon}
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--chalk)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.8, margin: 0, opacity: 0.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credibility ───────────────────────────────────────────────────── */}
      <section aria-labelledby="credibility-heading" style={{ borderBottom: "1px solid var(--wire)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>

            {/* Left: bio */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "16px" }}>
                  Created by
                </p>
                <h2
                  id="credibility-heading"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: "20px",
                  }}
                >
                  Liam Costello &amp; Gio LaRoche
                </h2>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ash)" }}>
                  Co-Founders · Primara · West Palm Beach, FL
                </p>
              </div>

              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.85, margin: 0, opacity: 0.78 }}>
                Liam and Gio founded Primara after watching independent primary care physicians
                lose patients to larger health systems — not because of the quality of care, but
                because of digital invisibility. They built this assessment to give independent
                practices a clear, honest picture of where they stand online in under 3 minutes.
              </p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.85, margin: 0, opacity: 0.78 }}>
                Primara works exclusively with independent primary care practices in Florida.
                Every engagement is run by a co-founder from kickoff to monthly reporting —
                no account coordinators, no handoffs.
              </p>

              <div style={{ display: "flex", gap: "12px" }}>
                <a href="tel:+15612912681" style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.04em" }}>
                  +1 (561) 291-2681
                </a>
                <span style={{ color: "var(--wire)" }}>·</span>
                <a href="mailto:liam.costello@primara365.com" style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.04em" }}>
                  liam.costello@primara365.com
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "0" }}>
                Why this assessment matters
              </p>
              {stats.map(({ number, label, source }) => (
                <div key={number} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "clamp(52px, 7vw, 80px)",
                      color: "var(--chalk)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {number}
                  </div>
                  <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--chalk)", lineHeight: 1.6, margin: 0, opacity: 0.72 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, margin: 0, borderLeft: "1px solid var(--wire)", paddingLeft: "8px" }}>
                    {source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Are you ready to find out exactly where patients can&rsquo;t find you?
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "var(--chalk)", lineHeight: 1.8, marginBottom: "40px", opacity: 0.78 }}>
            Answer 10 questions. Get your Practice Score. Receive instant, specific recommendations
            on what to fix first — completely free, no obligation.
          </p>

          <Link
            href="/assessment/quiz"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--ember)",
              color: "#ffffff",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "20px 48px",
              borderRadius: "4px",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(232,97,26,0.2)",
              marginBottom: "16px",
            }}
          >
            Start the Free Assessment →
          </Link>

          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginTop: "20px" }}>
            {["Takes 3 minutes", "Completely free", "Instant recommendations"].map((item) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", letterSpacing: "0.04em" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
