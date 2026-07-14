import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing for Direct Primary Care (DPC) Practices | Primara",
  description:
    "Primara helps independent Direct Primary Care practices rank online, explain the DPC model to new patients, and attract the self-employed and uninsured who are actively searching. Free audit. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/direct-primary-care" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Most patients have never heard of DPC",
    body: "Direct Primary Care is the fastest-growing model in independent medicine — but most people searching for care don't know it exists. A DPC practice must rank for both model-education searches ('what is direct primary care') and traditional care searches ('primary care near me') simultaneously.",
  },
  {
    title: "Overcoming the 'no insurance' misconception",
    body: "Patients often assume 'no insurance billing' means expensive or inaccessible. The opposite is true — but that message has to be clear, prominent, and convincing before a prospective patient ever reads past the headline.",
  },
  {
    title: "Florida's self-employed audience is large and underserved",
    body: "Florida has a large gig economy and small business owner population — the exact demographic most likely to pay out of pocket for quality primary care. These patients are searching for affordable options, and DPC is the answer they haven't found yet.",
  },
  {
    title: "Competing with traditional insurance-based practices",
    body: "A patient searching 'primary care near me' sees traditional practices first by default. A DPC practice needs strong local SEO, a clear value proposition, and targeted content to interrupt that search and explain why the flat-fee model is better for them.",
  },
];

const services = [
  "GBP optimization targeting 'direct primary care [city],' 'DPC doctor near me,' 'primary care no insurance [city],' and 'flat fee doctor'",
  "Website content that educates patients on the DPC model, addresses the cost misconception, and converts skeptics to members",
  "Local SEO strategy ranking for both model-specific searches and traditional 'primary care [city]' keywords",
  "Review generation calibrated for a membership model — patient loyalty stories and long-term relationship emphasis",
  "Competitor analysis comparing your DPC practice to both traditional primary care and other DPC practices in your market",
  "Content strategy for high-intent searches: self-employed healthcare options, uninsured primary care, and healthcare cost comparisons",
];

export default function DirectPrimaryCarePage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Direct Primary Care</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Direct Primary Care · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Marketing for Direct Primary Care Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Over 2,700 DPC practices exist nationwide — and Florida ranks in the top 4 states by practice count.
          The model is growing fast, but most patients still don&rsquo;t know it exists. Primara helps DPC
          practices rank for both education-driven searches and traditional care searches,
          so the right patients find you before they default to an insurance-based practice.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Call (561) 291-2681
          </a>
          <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Get a Free Practice Audit
          </Link>
        </div>
      </section>

      <section aria-labelledby="challenges-heading" style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="challenges-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "48px" }}>
            Why DPC practices face a unique marketing challenge
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
            {challenges.map(({ title, body }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ width: "24px", height: "2px", background: "var(--ember)" }} />
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--chalk)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" style={{ borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="services-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "12px" }}>
            How Primara helps DPC practices grow their membership
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            We audit where your DPC practice currently stands online, compare you to the top-ranking
            practice in your market, and build a strategy that makes your model visible — to the patients
            most likely to value it.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {services.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path d="M4 10l4 4 8-8" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "40px", padding: "24px 28px", background: "var(--surface-2)", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: "0 0 12px" }}>
              <strong style={{ color: "var(--chalk)" }}>The DPC market is projected to reach $90.6 billion by 2029.</strong>{" "}
              The practices that own local search now will own the market as awareness of the model grows.
              Primara builds that foundation for independent DPC practices.
            </p>
            <cite style={{ fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, fontStyle: "normal", display: "block" }}>
              — Allied Market Research, Direct Primary Care Market Report, 2022
            </cite>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            See where your DPC practice stands online
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            Free audit, custom-built for your DPC practice. We&rsquo;ll show you exactly what patients find
            when they search for the care you offer — and what to fix first.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Request Free Audit
            </Link>
            <Link href="/specialties" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              All Specialties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
