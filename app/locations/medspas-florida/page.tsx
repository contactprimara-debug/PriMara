import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/medspas-florida`;

export const metadata: Metadata = {
  title: "Medspa Marketing in Florida | Primara",
  description:
    "Marketing for independent Florida medspas — map-pack visibility, Meta Ads that clear policy review, and review systems built for a discretion-sensitive category. Miami to Jacksonville. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medspa Marketing in Florida | Primara",
    description:
      "Local visibility, Meta Ads, and review generation for independent medspas across Florida — from a West Palm Beach agency.",
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
    { "@type": "ListItem", position: 3, name: "Medspa Marketing Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medspa Marketing for Florida Clinics",
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
  serviceType: "Digital Marketing for Medical Spas",
  audience: { "@type": "Audience", audienceType: "Independent medical spas and aesthetic clinics in Florida" },
  description:
    "Digital marketing for independent medspas across Florida — Google Business Profile and local map-pack visibility, Meta Ads creative and policy management, review generation, and website work built around consultations rather than unit pricing.",
};

const faqs = [
  {
    q: "Why is Florida such a crowded market for medspas?",
    a: "Because the demographics and the licensing environment both favor it. Florida combines a large population with disposable income, a year-round emphasis on appearance, and steady in-migration, which has drawn an unusual density of aesthetic clinics — heaviest along the southeast coast and around Tampa and Orlando. The practical effect is that visibility is contested at every level: the map pack has more competitors per search, and paid social impressions cost more. Neither is a reason to skip the market; both are reasons not to do this halfway.",
  },
  {
    q: "What is the single most common mistake we see on Florida medspa listings?",
    a: "The primary Google Business Profile category. A large share of clinics are set to something like 'Spa' or 'Beauty Salon' when they should be 'Medical Spa', or the reverse for a clinic whose licensed provider justifies a medical category. Primary category is the strongest single relevance signal in local ranking, and changing it can move a listing in weeks with no other work. It is the first thing we look at, and it is free to fix.",
  },
  {
    q: "How do seasonal residents change the marketing plan?",
    a: "In South Florida, materially. The population rises from roughly November through April, and for elective aesthetic treatment that is when a large share of your addressable audience is actually in town and able to book a series. We weight paid budget toward that window and use the quieter months for the work that compounds — content, site structure, review volume — rather than spending into a thinner audience. Central and North Florida clinics see a much flatter curve and we plan them accordingly.",
  },
  {
    q: "Can we advertise injectables and lasers in Florida on Meta?",
    a: "Yes, within Meta's platform rules, which apply identically in every state. The constraints that bite are Personal Attributes — an ad may not imply it knows something about the viewer's appearance — and the claims-based standard Meta adopted in July 2026 for before-and-after imagery, where the surrounding claim rather than the photo itself determines whether an ad stands. Separately, Florida has its own rules for how licensed healthcare professionals may advertise; that is a question for your counsel and your board, and we write nothing that guarantees a clinical outcome or invents a credential.",
  },
  {
    q: "Do you help Florida medspas get more reviews?",
    a: "Yes, through a request-only system: name and phone, a text asking for a review, no sentiment pre-screening and nothing clinical in the message. That is a deliberate constraint — filtering for happy clients before asking violates both FTC guidance and Google's policies, and it is exactly the shortcut that gets a listing's reviews wiped. We also never write, buy, or incentivize a review, and we do not reply to reviews in a way that confirms someone was a client.",
  },
  {
    q: "What size Florida medspa is a good fit for Primara?",
    a: "Independent clinics, typically one to three locations, with a licensed medical director and services they can actually staff. We do not work with franchise groups, national chains, or clinics whose plan is to win on price — that last one is not a values position, it is that our approach raises cost per lead deliberately in exchange for better clients, and it does not work for a discount model.",
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
    name: "Southeast Florida",
    body: "Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and the Treasure Coast. The densest aesthetic corridor in the state — high search volume, high ad costs, and a seasonal audience that concentrates elective bookings into roughly half the year.",
    example: { href: "/locations/medspas-west-palm-beach", label: "Medspa marketing in West Palm Beach" },
  },
  {
    name: "Tampa Bay",
    body: "Tampa, St. Petersburg, Clearwater, Brandon, and Lakeland. Newer clinics opening quickly into growing suburbs, and enough independents still neglecting their Google Business Profile that map-pack position is genuinely winnable.",
    example: { href: "/locations/gbp-optimization-lakeland", label: "GBP optimization in Lakeland" },
  },
  {
    name: "Orlando & Central Florida",
    body: "Orlando, Winter Park, Kissimmee, Altamonte Springs, and Sanford. Continuous in-migration means a constant supply of residents with no existing provider — the best possible conditions for demand-creation advertising.",
    example: { href: "/locations/orlando-fl", label: "Orlando practice marketing" },
  },
  {
    name: "Northeast Florida",
    body: "Jacksonville, Jacksonville Beach, St. Augustine, and Orange Park. A large metro with comparatively less marketing sophistication among independents, which keeps both local SEO and paid social cheaper than they are further south.",
    example: { href: "/locations/jacksonville-fl", label: "Jacksonville practice marketing" },
  },
];

export default function MedspasFloridaPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medspa Marketing Florida</li>
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
            Medspas · Statewide Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "840px", marginBottom: "24px",
            }}
          >
            Medspa Marketing in Florida
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Florida has more aesthetic clinics per capita than almost any state, which means
            visibility is contested at every level — the map pack, the feed, and the review
            count. Primara runs local search, Meta Ads, and review generation for independent
            Florida medspas, built around consultations instead of unit pricing.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · Independent clinics only
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
              The race to the bottom on price already happened here.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Deal sites and per-unit advertising trained a generation of Florida aesthetic
              clients to wait for a promotion, and plenty of clinics in this state are now
              busy and unprofitable because of it. A schedule full of one-time discount
              clients is not the same asset as a smaller book of members and package holders,
              and no amount of advertising skill converts the first into the second. The
              offer has to change.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Everything we run for Florida medspas points at that: a Google Business Profile
              configured so the right people find you at all, ads that sell a consultation
              rather than a syringe, a site that explains treatments well enough to justify a
              real price, and a review engine that makes the choice feel safe. The competitive
              density here is a reason to be deliberate, not a reason to discount.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            Markets We Serve
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
          { href: "/medspas", label: "Medspa Marketing", description: "The full vertical page — services, approach, packages, and who this is not for." },
          { href: "/locations/medspas-west-palm-beach", label: "Medspa Marketing in West Palm Beach", description: "Our home market, and the densest aesthetic corridor in the state." },
          { href: "/locations/meta-ads-for-medspas", label: "Meta Ads for Medspas", description: "The channel that usually does the most work in this vertical." },
          { href: "/locations/gbp-optimization-florida", label: "GBP Optimization in Florida", description: "Fixing the primary category most medspa listings have set wrong." },
          { href: "/locations/review-generation-florida", label: "Review Generation in Florida", description: "Request-only review systems for a discretion-sensitive category." },
          { href: "/locations/dental-practices-florida", label: "Dental Marketing in Florida", description: "The other high-consideration vertical we serve statewide." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Find Out Where Your Clinic Actually Ranks
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit covers your Google Business Profile, your current ads, and your
            review position against local competitors — delivered in 3&ndash;5 business days.
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
