import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing for Internal Medicine Practices in Florida | Primara",
  description:
    "Primara helps independent internists in Florida rank higher for adult primary care searches, build patient reviews, and compete with hospital-affiliated practices. Free audit. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/internal-medicine" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Patients don't search for 'internist'",
    body: "Most adults have never heard the term. They search 'adult doctor,' 'primary care near me,' or 'doctor for diabetes.' If your website and GBP only say 'internal medicine,' you're invisible to the patients you serve best.",
  },
  {
    title: "Hospital affiliates dominate local results",
    body: "Health system-employed internists appear with the full weight of their institution's SEO budget behind them. An independent internist needs precise local optimization to hold the top Map positions.",
  },
  {
    title: "Chronic disease patients search by condition",
    body: "A patient managing hypertension, diabetes, or COPD often searches for their condition alongside their city — not a specialty name. Ranking for those condition-specific searches is where independent internists win.",
  },
  {
    title: "Florida's retiree pipeline",
    body: "South Florida and the Tampa Bay area have a large population of retirees transitioning from family physicians to internists for more complex chronic disease management. These patients are actively searching.",
  },
];

const services = [
  "GBP category optimization with 'Internal Medicine,' 'Adult Primary Care,' and condition-specific service listings",
  "Local SEO content targeting 'adult primary care [city],' 'internist near me,' and condition-management searches",
  "Website architecture built around the chronic conditions your practice treats — not just your specialty title",
  "Review generation to build Google rating and volume, with a strategy specific to adult patient behavior",
  "Competitor analysis against the top hospital-affiliated internist in your market",
  "Monthly rank tracking on your core adult primary care keywords in your city",
];

export default function InternalMedicinePage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Internal Medicine</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Internal Medicine · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Internal Medicine Practices in Florida
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Internists are the backbone of adult primary care — managing complex chronic conditions with a depth
          that urgent care can never match. The challenge is that most patients don&rsquo;t know what an internist is,
          and hospital systems outspend independent practices on local search by a wide margin.
          Primara bridges that gap.
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
            The unique SEO challenge for internists
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
            How Primara helps internists compete online
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            We start by auditing your current GBP, Maps position, and website against the practice patients
            are actually finding instead of you. Then we fix the gaps — in the right order.
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
              <strong style={{ color: "var(--chalk)" }}>30% of US adults reported having no primary care provider in 2022</strong>{" "}
              — up from 21% in 2013. Independent internists who rank well locally are positioned to absorb
              that demand as patients actively search for a new physician.
            </p>
            <cite style={{ fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, fontStyle: "normal", display: "block" }}>
              — Commonwealth Fund, 2022 Health Care Quality Survey
            </cite>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            See exactly where your practice stands
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            Free audit. Your real numbers. Your named competitor. Delivered within 3–5 business days
            by Liam or Gio — no obligation.
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
