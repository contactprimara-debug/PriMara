import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Practice Audit for Independent Healthcare Practices | Primara",
  description:
    "Free audit for independent primary care and mental health practices in Florida. Real numbers, your named competitor, no obligation. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/the-audit" },
  openGraph: {
    title: "Free Practice Audit for Independent Healthcare Practices | Primara",
    description:
      "Free audit for independent primary care and mental health practices in Florida. Real numbers, your named competitor, no obligation. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/the-audit",
  },
};

export default function TheAuditPage() {
  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>The Audit</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 py-16" aria-labelledby="audit-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Free · No Obligation · HIPAA-Aware
        </div>

        <h1
          id="audit-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          See Exactly Where Your Practice Stands — For Free
        </h1>
        <p className="mt-5 text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
          We research your practice using real tools — not assumptions — and build a custom audit showing
          your Google Maps position, your review gap vs. your named local competitor, and your single fastest
          available win. Delivered in 3&ndash;5 days. Walked through personally by Liam or Gio. No templates.
          No obligation. If it doesn&rsquo;t make sense for your practice, we&rsquo;ll tell you that too.
        </p>

        {/* What's in the audit */}
        <div className="mt-16">
          <h2 className="font-serif font-bold mb-6" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.75rem" }}>
            What the Audit Shows You
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Your Google review count vs. your top local competitor — the gap in plain numbers",
              "Your current Maps position for your primary keyword + city",
              "Website diagnostic — mobile speed score, NAP accuracy, schema markup, and service page structure",
              "GBP completeness score — categories filled, services listed, posts active, and photos",
              "Competitor gap analysis — what the top-ranking practice in your area is doing that you aren't",
              "Your biggest digital weakness and the fastest available win",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl p-5" style={{ backgroundColor: "var(--color-card)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M4 10l4 4 8-8" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 flex gap-4 flex-wrap">
          <a
            href="tel:+15612912681"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem" }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", height: "52px", fontSize: "1rem" }}
          >
            Request My Free Audit Online
          </Link>
        </div>

        <p className="mt-4 text-sm" style={{ color: "var(--color-text-muted)" }}>
          No pricing shown here — Liam or Gio will walk you through options after the audit.{" "}
          <Link href="/services" className="underline hover:opacity-70">
            See our services
          </Link>{" "}
          for details on what we offer.
        </p>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="how-it-works-heading"
        style={{
          borderTop: "1px solid var(--wire)",
          background: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-20">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Process
          </div>

          <h2
            id="how-it-works-heading"
            className="font-serif font-bold mb-14"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)" }}
          >
            How the Audit Works
          </h2>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(24px, 4vw, 48px)",
            }}
          >
            {[
              {
                step: "01",
                title: "We research your practice",
                body: "We look up your Google Business Profile, Maps position, review count, website speed, and your named local competitor — using real tools, not assumptions.",
              },
              {
                step: "02",
                title: "We build a custom audit",
                body: "The audit uses your actual numbers and compares you directly to the top-ranking practice in your area. No templates. No generic findings.",
              },
              {
                step: "03",
                title: "We walk you through it",
                body: "Liam or Gio presents the findings in person or by video call. We tell you what the fastest available win is. No obligation — if it doesn't make sense, we'll say so.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    color: "var(--gold)",
                    opacity: 0.35,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                  aria-hidden="true"
                >
                  {step}
                </div>
                <div style={{ width: "24px", height: "1px", background: "var(--wire)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "1.1rem",
                    color: "var(--color-text)",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        style={{ borderTop: "1px solid var(--wire)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-20">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Common Questions
          </div>

          <h2
            id="faq-heading"
            className="font-serif font-bold mb-12"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)" }}
          >
            Frequently Asked Questions
          </h2>

          <dl
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              {
                q: "Is the audit really free?",
                a: "Yes. No credit card, no commitment. We do the research and deliver it at no cost.",
              },
              {
                q: "How long does it take?",
                a: "We typically deliver within 3–5 business days of your request.",
              },
              {
                q: "Do you work with all medical specialties?",
                a: "We work with independent primary care practices and mental health practices in Florida — family medicine, internal medicine, pediatrics, geriatrics, concierge medicine, direct primary care, solo therapists, psychologists, licensed counselors, and group practices.",
              },
              {
                q: "What happens after the audit?",
                a: "We walk you through the findings. If there's a fit, we'll explain what working with us looks like. If not, we'll tell you that too.",
              },
              {
                q: "Will you try to sell me something?",
                a: "We'll show you options if they make sense. We don't do hard sells — if there's a fit, we'll explain what working together looks like. If there isn't, we'll tell you that too.",
              },
            ].map(({ q, a }, i, arr) => (
              <div
                key={q}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "8px",
                  padding: "clamp(20px, 3vw, 28px) 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none",
                }}
              >
                <dt
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                  }}
                >
                  {q}
                </dt>
                <dd
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "680px",
                  }}
                >
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What Happens After ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="after-heading"
        style={{
          borderTop: "1px solid var(--wire)",
          background: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-20">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Next Steps
          </div>

          <h2
            id="after-heading"
            className="font-serif font-bold"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)", marginBottom: "24px" }}
          >
            What Happens After the Audit
          </h2>

          <p
            className="max-w-2xl"
            style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.85 }}
          >
            After the audit walkthrough, you&rsquo;ll have a clear picture of where your practice
            stands online and what the fastest available win is. If working together makes sense,
            we&rsquo;ll outline what that looks like. No pressure either way.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="tel:+15612912681"
              className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
              style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem" }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
              style={{ borderColor: "var(--ember)", color: "var(--ember)", height: "52px", fontSize: "1rem" }}
            >
              Get My Free Audit Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
