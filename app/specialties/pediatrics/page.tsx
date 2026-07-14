import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing for Pediatric Practices | Primara",
  description:
    "Primara helps independent pediatricians rank higher on Google Maps, earn parent trust through reviews, and stay visible to relocating families. Free audit. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/pediatrics" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Parents — not patients — do the searching",
    body: "The decision-maker and the patient are different people. Parents search with urgency ('best pediatrician near me accepting new patients') and place enormous weight on Google reviews from other parents. Generic medical marketing misses this entirely.",
  },
  {
    title: "Florida's in-migration creates constant demand",
    body: "Families relocating from the Northeast and Midwest arrive needing a pediatrician immediately. These new-mover families are actively searching — and if your practice doesn't rank, a competitor captures them on day one.",
  },
  {
    title: "Seasonal search spikes require a ready presence",
    body: "Back-to-school physicals and immunization season drive major search volume spikes every summer and fall. A practice with a complete, well-optimized GBP captures those patients. An incomplete listing loses them to urgent care.",
  },
  {
    title: "Mobile-first parent searches",
    body: "63% of health-related searches come from smartphones. Parents searching for a pediatrician at 9pm on their phone need to see your hours, your phone number, your reviews, and your directions instantly — or they move on.",
    source: "Think with Google, Health Micro-Moments Study, 2022",
  },
];

const services = [
  "GBP optimization with pediatric-specific categories, services listed in parent-search language, and active post schedule",
  "Review generation strategy calibrated for parent decision-making — timing, messaging, and volume",
  "Local SEO targeting 'pediatrician near me,' 'pediatrician accepting new patients [city],' 'best pediatrician [city],' and 'newborn pediatrician'",
  "Website design and structure built around the questions parents actually ask before choosing a pediatrician",
  "Competitor gap analysis — what the top-ranked pediatric practice in your area has that you don't",
  "Seasonal content strategy for school physicals, immunizations, and new patient onboarding spikes",
];

export default function PediatricsPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Pediatrics</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Pediatrics · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Pediatric Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Parents choose a pediatrician the way they choose a school — carefully, based on reputation, reviews,
          and trust signals. Florida&rsquo;s high in-migration rate means a constant stream of families arriving
          with urgent need for a new pediatrician. Primara makes sure your practice is what they find.
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
            What makes pediatric marketing different
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
            {challenges.map(({ title, body, ...rest }) => {
              const source = (rest as { source?: string }).source;
              return (
                <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ width: "24px", height: "2px", background: "var(--ember)" }} />
                  <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--chalk)", margin: 0 }}>{title}</h3>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{body}</p>
                  {source && (
                    <cite style={{ fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, fontStyle: "normal", borderLeft: "1px solid var(--wire)", paddingLeft: "8px" }}>
                      {source}
                    </cite>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" style={{ borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="services-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "12px" }}>
            How Primara helps pediatric practices grow
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            We research your pediatric practice against the top-ranking competitor in your area and build a
            strategy around the gaps — so the next family moving to your zip code finds you, not them.
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
            Find out what parents are seeing before they find you
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            We&rsquo;ll audit your GBP, Maps position, and review profile against your top local competitor.
            Free, custom, delivered in 3–5 business days.
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
