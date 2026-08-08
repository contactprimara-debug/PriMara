import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Digital Marketing for Geriatric Medicine Practices | Primara",
  description:
    "Primara helps independent geriatric medicine practices reach senior patients and their families online. Florida's 65+ population is the largest in the nation — and the competition online is minimal. Free audit. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/geriatrics" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Adult children do the searching",
    body: "The searcher is often a son or daughter looking for care for an aging parent. They search 'doctor for elderly parent,' 'senior care doctor near me,' or 'Medicare primary care physician.' Marketing that ignores this dual audience misses most of the available traffic.",
  },
  {
    title: "GBP categories don't cleanly fit geriatrics",
    body: "Google Business Profile doesn't have a perfect 'geriatrician' category. Without knowing how to correctly set and layer categories, geriatric practices default to generic classifications that bury them in search results.",
  },
  {
    title: "A geriatrician shortage means low online competition",
    body: "The US was projected short ~27,000 geriatricians by 2025. Florida's ratio of geriatricians to seniors is among the worst in the country. Any independent geriatric practice with strong local SEO faces minimal online competition for a large, underserved population.",
  },
  {
    title: "Trust signals matter more than volume",
    body: "Families choosing care for a vulnerable senior weigh trust signals heavily — Google rating, review content, website professionalism, and physician biography. A practice with 15 detailed reviews often beats one with 80 generic ones.",
  },
];

const services = [
  "GBP category strategy optimized for geriatric medicine, elder care, and Medicare primary care searches",
  "Local SEO targeting 'geriatric doctor [city],' 'doctor for elderly parent [city],' 'Medicare primary care physician,' and 'senior care physician near me'",
  "Review generation strategy built for family-decision contexts — messaging, timing, and response templates",
  "Website content addressing the trust signals families look for: physician credentials, care philosophy, and accessibility information",
  "Competitor analysis — what the top-ranked senior care practice in your area is doing online",
  "Content strategy for high-intent searches: Medicare annual wellness visits, memory care, polypharmacy management, and fall prevention",
];

export default function GeriatricsPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Geriatrics</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Geriatric Medicine · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Geriatric Medicine Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Florida has the highest percentage of residents over 65 of any large state, a severe geriatrician
          shortage, and an online competitive landscape that is largely uncontested. Independent geriatric
          medicine practices that invest in local SEO now will own their market for years.
          Primara builds that presence.
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
            The geriatric medicine marketing landscape
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
            How Primara helps geriatric practices reach families online
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            We audit your current online presence, identify exactly why adult children searching for senior care
            are landing on someone else, and build the strategy to change that — starting with the fastest available win.
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
              <strong style={{ color: "var(--chalk)" }}>Over 20% of Florida residents are 65+</strong> — the highest share of any large state.
              The geriatrician shortage is severe. A well-optimized independent geriatric practice
              faces minimal online competition and enormous demand.
            </p>
            <cite style={{ fontFamily: "var(--font-mono, 'Courier New', monospace)", fontSize: "9px", letterSpacing: "0.06em", color: "var(--smoke)", lineHeight: 1.4, fontStyle: "normal", display: "block" }}>
              — U.S. Census Bureau, 2022 American Community Survey
            </cite>
          </div>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Specialties & Resources"
        items={[
          { href: "/specialties/internal-medicine", label: "Internal Medicine", description: "Marketing built around adult chronic-disease management and long-term patient relationships." },
          { href: "/specialties/direct-primary-care", label: "Direct Primary Care", description: "The membership-model playbook — different economics, different marketing." },
          { href: "/services/online-reputation-management", label: "Online Reputation Management", description: "Review generation and response systems that outpace corporate competitors." },
        ]}
      />
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            See what families find when they search for you
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            Free audit using your real numbers and your named local competitor — delivered in 3–5 business days.
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
