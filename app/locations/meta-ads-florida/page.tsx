import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/meta-ads-florida`;

export const metadata: Metadata = {
  title: "Meta Ads Management in Florida | Facebook & Instagram for Practices | Primara",
  description:
    "Facebook and Instagram ad management for independent practices, medspas and dental clinics across Florida — Miami to Jacksonville. Policy-aware creative, HIPAA-conscious tracking, no long-term contracts. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meta Ads Management in Florida | Primara",
    description:
      "Meta Ads for Florida practices, medspas and dental clinics — statewide management from a West Palm Beach agency.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Meta Ads Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads Management for Florida Practices",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Florida" },
  serviceType: "Facebook and Instagram Advertising Management",
  description:
    "Meta (Facebook and Instagram) advertising management for independent medical practices, medspas, and dental clinics across Florida — creative production, policy review, landing pages, and tracking built without protected health information.",
};

const faqs = [
  {
    q: "Is Florida a harder market for Meta Ads than other states?",
    a: "More expensive, not harder. Florida carries an unusual concentration of aesthetic clinics, cash-pay men's health practices, and implant-focused dental groups, and all of them are bidding for attention in the same feeds. That raises impression costs and shortens the life of any given creative — a concept that ran for six months in a smaller state may burn out here in six weeks. The practical consequence is that Florida accounts need a higher creative refresh rate than the national average, which is a production question more than a media-buying one.",
  },
  {
    q: "How does seasonality change a Florida ad account?",
    a: "Substantially, and it varies by region. South Florida gains a large seasonal population between roughly November and April, which lifts both demand and auction pressure; Central Florida moves more with tourism and year-round growth; the Panhandle and Northeast Florida are steadier. We plan budget against a practice's own booking history rather than against a generic calendar, and for elective categories we usually recommend front-loading spend into the window when the audience is physically in the market.",
  },
  {
    q: "Do you meet with Florida clients in person?",
    a: "We can, in South Florida. Primara is based in West Palm Beach, so Palm Beach, Broward, and Miami-Dade are an easy drive and we are happy to sit down — particularly for a creative shoot day. For Tampa, Orlando, and Jacksonville clients the relationship is run remotely, which is how most of our accounts operate regardless of geography. Nothing about the service changes either way.",
  },
  {
    q: "Which Florida practice types get the most out of Meta?",
    a: "Elective and cash-pay categories where the patient is not yet searching: medspas and aesthetic clinics, implant and cosmetic dentistry, men's health and hormone optimization, concierge and direct primary care memberships. Insurance-driven primary care and urgent care generally get more from search, because the demand already exists and only needs capturing. We will tell you which side of that line your practice falls on during the audit instead of selling you the channel we happen to be on.",
  },
  {
    q: "Can you advertise a Florida practice in multiple cities at once?",
    a: "Yes, and geography is one of the few targeting levers Meta still gives healthcare advertisers after the 2022 removal of health-related detailed targeting. Multi-location practices typically run one campaign per catchment with location-specific creative, because a Boca Raton audience and a Port St. Lucie audience respond to noticeably different framing. What does not work is one statewide radius blanket — it spends the budget where impressions are cheapest rather than where your chairs are.",
  },
  {
    q: "Are the ad policy rules different in Florida?",
    a: "No. Meta's advertising policies are platform-wide, so the Personal Attributes rule and the July 2026 shift to claims-based review of before-and-after imagery apply identically in Tallahassee and in Tampa. State-level advertising rules for licensed healthcare professionals do exist and are a matter for your own counsel and licensing board; what we control is that nothing we write for you makes a clinical guarantee or invents a credential.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const regions = [
  {
    name: "South Florida",
    body: "Miami, Fort Lauderdale, Boca Raton, West Palm Beach and the Treasure Coast. The densest aesthetic and cash-pay market in the state, a heavy seasonal population swing, and the highest impression costs in Florida — creative fatigue arrives fastest here.",
    example: { href: "/locations/meta-ads-west-palm-beach", label: "Meta Ads in West Palm Beach" },
  },
  {
    name: "Tampa Bay",
    body: "Tampa, St. Petersburg, Clearwater, Brandon, and Lakeland. Fast suburban growth and a large share of independent practices still buying almost nothing on paid social, which keeps auctions comparatively reasonable for now.",
    example: { href: "/locations/google-ads-management-lakeland", label: "Google Ads in Lakeland" },
  },
  {
    name: "Orlando & Central Florida",
    body: "Orlando, Kissimmee, Winter Park, Altamonte Springs, and Sanford. Constant in-migration means a steady flow of residents who have no established provider yet — the single best condition for demand-creation advertising.",
    example: { href: "/locations/orlando-fl", label: "Orlando practice marketing" },
  },
  {
    name: "Northeast Florida",
    body: "Jacksonville, Jacksonville Beach, St. Augustine, and Orange Park. A large metro with less paid-social sophistication than South Florida, which means a well-produced campaign stands out at a lower cost per result.",
    example: { href: "/locations/jacksonville-fl", label: "Jacksonville practice marketing" },
  },
];

export default function MetaAdsFloridaPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/locations" style={{ color: "var(--ash)", textDecoration: "none" }}>Locations</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>Meta Ads Florida</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px", padding: "5px 14px", marginBottom: "32px",
              fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "var(--gold)",
            }}
          >
            Statewide · Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "840px", marginBottom: "24px",
            }}
          >
            Meta Ads Management in Florida
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Facebook and Instagram advertising for independent practices, medspas, and
            dental clinics from Pensacola to Key West — run from West Palm Beach. Creative
            production, policy review before anything is submitted, and tracking configured
            so no patient information ever reaches the platform.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Audit
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · Month-to-month after setup
          </p>
        </div>
      </section>

      {/* Statewide context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              The Florida Picture
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              A state full of people who just moved here and have no doctor yet.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Florida&rsquo;s in-migration is the quiet reason paid social works so well here.
              A steady share of any Florida audience has arrived recently, has no established
              provider, and is not yet running the searches that would put them in front of a
              Google ad. They are, however, scrolling. Reaching that person with a specific
              offer before they start looking is cheaper than winning them in an auction
              afterwards, and it is the closest thing to an unfair advantage an independent
              practice has in this state.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The counterweight is competition. Florida has more aesthetic clinics, cash-pay
              hormone practices, and implant-focused dental groups per capita than almost
              anywhere, and their ads are in the same feeds. That does not make the channel
              unworkable — it makes creative quality and refresh rate the whole game, because
              the account that runs the same three videos all year is the one that gets
              expensive first.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            Markets We Run
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {regions.map((r, idx) => (
              <div key={r.name} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {r.name}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", marginBottom: "12px" }}>{r.body}</p>
                  <Link href={r.example.href} style={{ fontSize: "0.875rem", color: "var(--gold)", textDecoration: "none" }}>
                    {r.example.label} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "40px" }}>
            Common Questions
          </p>
          <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "12px", lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Locations"
        items={[
          { href: "/services/meta-ads", label: "Meta Ads", description: "The full service — pillars, planning benchmarks, and how tracking gets built." },
          { href: "/locations/meta-ads-west-palm-beach", label: "Meta Ads in West Palm Beach", description: "Our home market — the same service, run locally." },
          { href: "/locations/google-ads-management-florida", label: "Google Ads Management in Florida", description: "The demand-capture side of a Florida paid strategy." },
          { href: "/locations/medical-seo-florida", label: "Medical SEO in Florida", description: "The compounding channel that keeps working when ad spend pauses." },
          { href: "/locations/meta-ads-for-medspas", label: "Meta Ads for Medspas", description: "The vertical where paid social usually becomes the primary channel." },
          { href: "/locations/meta-ads-for-dental-practices", label: "Meta Ads for Dental Practices", description: "Implant, aligner, and cosmetic case acquisition." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready to Run Meta in Your Florida Market?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free review of your current account, creative, and tracking —
            delivered in 3&ndash;5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
