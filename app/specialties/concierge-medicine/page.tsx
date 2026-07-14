import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing for Concierge Medicine Practices | Primara",
  description:
    "Primara helps independent concierge medicine practices attract the right membership patients, stand out from MDVIP and One Medical, and build a premium digital presence. Free audit. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/concierge-medicine" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Competing with national concierge chains",
    body: "MDVIP, One Medical, and Atria have large marketing budgets and brand recognition. An independent concierge physician has one advantage they don't — a genuinely personal relationship with every patient. That story has to be told online before a prospective member ever picks up the phone.",
  },
  {
    title: "Smaller patient panel means every lead matters",
    body: "A concierge practice may serve 150–600 patients instead of the typical 2,000+. The economics of membership mean that filling 20 open slots is the difference between a full practice and one operating below capacity. Wasted marketing spend is painful at this volume.",
  },
  {
    title: "Educating prospective patients on the model",
    body: "Many prospective members have never heard of concierge medicine or don't fully understand the value proposition. Ranking for 'what is concierge medicine' and 'MDVIP alternative [city]' captures educated, high-intent searchers before they commit to a national chain.",
  },
  {
    title: "Florida's high-income markets are concentrated",
    body: "Miami, Palm Beach, Naples, Sarasota, and Tampa Bay are natural markets for concierge medicine — affluent, often retired, with strong preferences for personalized care. A practice that dominates local search in those markets captures the highest-intent audience in the state.",
  },
];

const services = [
  "GBP positioning for 'concierge medicine [city],' 'concierge doctor near me,' 'membership-based primary care,' and 'private doctor [city]'",
  "Website content that explains the concierge model, communicates premium positioning, and converts prospective members",
  "Review strategy for a smaller, more selective patient base — volume is secondary to content quality and physician response",
  "Local SEO targeting model-education searches and direct competitor terms like 'MDVIP alternative [city]'",
  "Competitor analysis comparing your online presence to both national chains and local independent concierge practices",
  "Content strategy addressing high-intent searches: membership pricing comparisons, what's included, and why independent beats corporate",
];

export default function ConciergeMedicinePage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Concierge Medicine</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Concierge Medicine · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Marketing for Concierge Medicine Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "8px" }}>
          Concierge medicine grew approximately 80% nationally from 2018 to 2023 — and Florida is a top-3 state
          by practice count. The market is growing, but so is the competition from national chains.
          Independent concierge physicians who establish a premium digital presence now will own the
          patient relationships that define long-term practice health.
        </p>
        <cite style={{ display: "block", fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, fontStyle: "normal", marginBottom: "32px" }}>
          — American Academy of Private Physicians (AAPP), Annual Membership Survey, 2023
        </cite>
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
            What makes concierge medicine marketing unique
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
            How Primara builds a premium digital presence for concierge practices
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Concierge medicine marketing is about quality and positioning, not just search volume. We build
            your online presence to attract the members who are right for your practice and convert them
            before the national chains do.
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
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            Find out what prospective members find when they search
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            We&rsquo;ll audit your concierge practice online, compare you to your top local competitor and
            the nearest national chain, and deliver a free custom report in 3–5 business days.
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
