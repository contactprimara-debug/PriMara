import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/medspas-west-palm-beach`;

export const metadata: Metadata = {
  title: "Medspa Marketing in West Palm Beach, FL | Primara",
  description:
    "Marketing for independent medspas in West Palm Beach and Palm Beach County — map-pack visibility against a crowded corridor, in-person ad creative, and review systems that respect client discretion. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medspa Marketing in West Palm Beach, FL | Primara",
    description:
      "Local search, Meta Ads, and review generation for West Palm Beach medspas — from an agency based in the same market.",
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
    { "@type": "ListItem", position: 3, name: "Medspa Marketing West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medspa Marketing in West Palm Beach",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      postalCode: "33401",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "West Palm Beach",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  serviceType: "Digital Marketing for Medical Spas",
  audience: { "@type": "Audience", audienceType: "Independent medical spas in Palm Beach County" },
  description:
    "Digital marketing for independent medspas in West Palm Beach and Palm Beach County — Google Business Profile and map-pack optimization, Meta Ads with in-person creative production, review generation, and consultation-focused website work.",
};

const faqs = [
  {
    q: "How competitive is the West Palm Beach map pack for aesthetic searches?",
    a: "Crowded, and it thins out fast the moment you move a few miles. A search for injectables from downtown West Palm Beach returns a different set of clinics than the same search from Wellington or Palm Beach Gardens, because Google weights the searcher's physical position heavily in local results. That is why we measure position on a grid across your real catchment rather than from a single point — a clinic can look strong at its own address and be invisible three zip codes away, which is where most of its patients live.",
  },
  {
    q: "What does an agency down the road actually do that a remote one cannot?",
    a: "Film with you. Creative volume is the main constraint on paid social performance, and the difference between an agency that can be at your clinic on a Tuesday morning and one that cannot is the difference between a stocked content library and three videos running all year. We script the session in advance and shoot enough material in a morning to feed the account for months. Everything else — strategy, reporting, the actual account work — happens remotely and would whether we were local or not.",
  },
  {
    q: "Does the seasonal population really change how we should spend?",
    a: "For elective aesthetic work in Palm Beach County, yes. A meaningful share of the audience for treatment series and memberships is here between roughly November and April, and spending evenly across the year puts budget into months when those clients are not in town. We shape the plan around the clinic's own booking history rather than a generic seasonal rule, and use the quieter stretch for the compounding work — site content, review volume, profile depth — instead of paid reach.",
  },
  {
    q: "Our Google listing has photos and posts. Why are we still not in the top three?",
    a: "Posts and photos are not primary ranking factors — they help conversion once someone sees the listing, not whether they see it. Local pack position is driven mostly by primary category, proximity to the searcher, the relevance of the connected website, and review signals. In our experience the first thing worth checking in this category is the primary category itself, which is set incorrectly on a surprising share of medspa listings, followed by whether the website has a real page for each service the listing claims.",
  },
  {
    q: "How do you handle reviews for a category where clients want privacy?",
    a: "Carefully, and by request only. We send a short text asking for a review — name and phone, nothing clinical, no mention of what anyone had done — with no sentiment screening beforehand, because filtering for happy clients first breaks both FTC guidance and Google's rules. Review replies follow the same discipline: we never confirm, imply, or deny that a particular person was a client, and nothing in a reply describes treatment.",
  },
  {
    q: "Do you work with more than one medspa in West Palm Beach?",
    a: "Not in overlapping catchments. Two clinics competing for the same map grid cannot both be served honestly by the same agency, so we take one per area and say so up front. If your neighborhood is already spoken for we will tell you when you call rather than after a proposal.",
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

const deliverables = [
  {
    title: "Grid-Measured Local Visibility",
    body: "We map where your clinic actually ranks across Palm Beach County rather than from your own front door — Wellington, Palm Beach Gardens, Lake Worth, Jupiter, Royal Palm Beach — then work the levers that move those positions: primary category, service coverage on the site, profile completeness, and review velocity.",
  },
  {
    title: "Creative Days at Your Clinic",
    body: "Scripted in advance, filmed in a morning, edited into enough concepts to keep the ad account fresh for months. In a corridor this dense, creative fatigue arrives faster than the platform benchmarks predict, and a local production cadence is the cheapest defense against it.",
  },
  {
    title: "Consultation-Led Offers",
    body: "Palm Beach County clients are not short of options and rarely move on price alone. We build campaigns around a consultation, a membership, or a defined treatment plan so the person who responds is someone worth booking at your real rate — not someone comparing per-unit pricing across five clinics.",
  },
  {
    title: "A Site That Justifies the Price",
    body: "A real page per treatment, written to answer what a cautious first-time client actually wants to know — what it involves, who performs it, what recovery looks like, what it does not do. Vague service lists are why well-marketed clinics still lose the booking at the last step.",
  },
  {
    title: "Request-Only Review Generation",
    body: "A text-based review request system with no sentiment pre-screening and nothing clinical in the message, plus replies written so they never confirm anyone's client status. Slower than the shortcuts, and the only version that does not put the listing at risk.",
  },
];

export default function MedspasWestPalmBeachPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medspa Marketing West Palm Beach</li>
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
            Medspas · West Palm Beach
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "860px", marginBottom: "24px",
            }}
          >
            Medspa Marketing in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Primara is based in West Palm Beach and works with independent medspas in the
            same corridor we live in. Grid-measured local visibility across Palm Beach
            County, ad creative filmed at your clinic, and review systems built for clients
            who expect discretion.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · One clinic per catchment · No long-term contracts
          </p>
        </div>
      </section>

      {/* Local context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why It Matters Here
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              Your ranking is not one number — it is a map.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Google decides local results partly on where the person searching is standing,
              so a clinic on Clematis Street and a clinic in Palm Beach Gardens are not
              really competing for one ranking — they are competing zip code by zip code.
              Checking your position from your own office tells you almost nothing about what
              a prospective client in Wellington or Lake Worth sees. We measure across a grid
              covering the whole catchment, which usually explains a gap the clinic already
              felt but could not locate.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The second thing this corridor does is exhaust ad creative. Between Jupiter and
              Boca Raton there are enough aesthetic clinics advertising that a resident sees a
              lot of them, and a concept that would run for a year elsewhere gets tired here
              in a couple of months. That is a production problem, and it is the practical
              reason a local agency is worth more in this specific market than in most.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            What We Do
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {deliverables.map((d, idx) => (
              <div key={d.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {d.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{d.body}</p>
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
          { href: "/medspas", label: "Medspa Marketing", description: "The full vertical page — services, approach, packages, and who this is not for." },
          { href: "/locations/medspas-florida", label: "Medspa Marketing in Florida", description: "The statewide picture, region by region." },
          { href: "/locations/meta-ads-west-palm-beach", label: "Meta Ads in West Palm Beach", description: "The paid social side, including in-person creative days." },
          { href: "/locations/gbp-optimization-west-palm-beach", label: "GBP Optimization in West Palm Beach", description: "The listing work that moves map-pack position locally." },
          { href: "/locations/review-generation-west-palm-beach", label: "Review Generation in West Palm Beach", description: "Request-only review systems for local practices." },
          { href: "/locations/dental-practices-west-palm-beach", label: "Dental Marketing in West Palm Beach", description: "The other high-consideration vertical in our home market." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            See Your Map Across Palm Beach County
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit includes a grid scan of where your clinic ranks across your real
            catchment — delivered in 3&ndash;5 business days.
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
