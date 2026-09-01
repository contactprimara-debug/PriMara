import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/medical-seo-florida`;

export const metadata: Metadata = {
  title: "Medical SEO for Florida Practices | Primara",
  description:
    "Florida medical SEO from a Florida-based agency. Local SEO, Google Business Profile, and content strategy for independent practices from Miami to Jacksonville. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical SEO for Florida Practices | Primara",
    description:
      "Florida medical SEO from a Florida-based agency — local SEO, GBP, and content strategy for independent practices statewide.",
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
    { "@type": "ListItem", position: 3, name: "Medical SEO Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical SEO for Florida Practices",
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
  serviceType: "Search Engine Optimization for Medical Practices",
  description:
    "Local and organic SEO for independent medical practices across Florida — Google Business Profile optimization, on-page optimization, technical SEO, and content strategy for practices from South Florida to Jacksonville.",
};

const faqs = [
  {
    q: "Which Florida markets do you cover?",
    a: "All of them. We're based in West Palm Beach and publish dedicated marketing pages for markets across South Florida, Tampa Bay, Orlando, and Northeast Florida — from Miami and Fort Lauderdale up to Jacksonville and St. Augustine. The process is the same statewide; the competitive landscape is what changes city to city.",
  },
  {
    q: "Does SEO work differently in Florida than elsewhere?",
    a: "The mechanics are identical, but Florida is one of the most competitive healthcare markets in the country — large hospital systems, heavy urgent-care density, and seasonal population swings that shift search volume. That makes disciplined local SEO more valuable here, not less: the practices that do the work stand out faster against competitors who rely on brand recognition alone.",
  },
  {
    q: "What kinds of practices do you work with?",
    a: "Independent practices only — primary care (family medicine, internal medicine, pediatrics, concierge and direct primary care), mental health therapists and group practices, and men's health clinics. We don't take hospital systems, urgent care chains, or dental groups.",
  },
  {
    q: "What does Florida medical SEO cost?",
    a: "It depends on scope — market competitiveness, number of locations, and the state of your current website. Every engagement starts with a free audit of your existing Google presence, and everything is month-to-month after the initial setup period. No long-term contracts.",
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
    body: "Miami, Fort Lauderdale, Boca Raton, West Palm Beach and the surrounding Palm Beach, Broward, and Miami-Dade markets — the densest, most competitive healthcare region in the state.",
    example: { href: "/locations/miami-fl", label: "Miami primary care marketing" },
  },
  {
    name: "Tampa Bay",
    body: "Tampa, St. Petersburg, Clearwater, Brandon, and Lakeland — fast-growing suburbs where independent practices can still claim local search territory before the systems lock it up.",
    example: { href: "/locations/tampa-fl", label: "Tampa primary care marketing" },
  },
  {
    name: "Orlando & Central Florida",
    body: "Orlando, Kissimmee, Winter Park, Altamonte Springs, and Sanford — high population growth means a constant stream of new patients searching for a doctor for the first time.",
    example: { href: "/locations/orlando-fl", label: "Orlando primary care marketing" },
  },
  {
    name: "Northeast Florida",
    body: "Jacksonville, Jacksonville Beach, St. Augustine, and Orange Park — a large metro with comparatively less local-SEO sophistication, which is exactly the opening an independent practice needs.",
    example: { href: "/locations/jacksonville-fl", label: "Jacksonville primary care marketing" },
  },
];

export default function MedicalSeoFloridaPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medical SEO Florida</li>
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
              maxWidth: "800px", marginBottom: "24px",
            }}
          >
            Medical SEO for Florida Practices
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara is a Florida-based medical marketing agency serving independent practices
            across the state — from Miami to Jacksonville. We run the full SEO stack: Google
            Business Profile, local rankings, on-page optimization, technical health, and
            content strategy, market by market.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · No long-term contracts
          </p>
        </div>
      </section>

      {/* Florida context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              The Florida Reality
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              Florida is where independent practices face the heaviest competition — and the biggest local-search opening.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Between the hospital systems, the urgent-care chains, and the constant influx of
              new residents searching for a doctor for the first time, Florida healthcare search
              is crowded. But most of that competition runs on brand recognition, not on
              disciplined local SEO — profiles sit half-configured, service pages don&rsquo;t
              exist, and reviews go unanswered.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              That is the opening. An independent practice that does the fundamentals properly —
              a complete Google Business Profile, pages that match real patient searches, and a
              technically healthy website — can outrank much larger organizations in its own
              neighborhood. That is the entire premise of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            Markets We Cover
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "var(--wire)", border: "1px solid var(--wire)", borderRadius: "4px", overflow: "hidden" }}>
            {regions.map((r) => (
              <div key={r.name} style={{ backgroundColor: "var(--void)", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--chalk)", margin: 0 }}>{r.name}</h2>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
                <Link href={r.example.href} style={{ fontSize: "0.8125rem", color: "var(--gold)", textDecoration: "none" }}>
                  {r.example.label} →
                </Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontSize: "0.875rem", color: "var(--smoke)" }}>
            Browse all city pages on the <Link href="/locations" style={{ color: "var(--ash)" }}>locations hub</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "40px" }}>
            Common Questions
          </p>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column" }}>
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
          { href: "/services/seo", label: "SEO for Medical Practices", description: "The full SEO service — what's included, timelines, and how we report progress." },
          { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO in West Palm Beach", description: "Our home market — medical SEO for West Palm Beach practices." },
          { href: "/locations/gbp-optimization-florida", label: "GBP Optimization in Florida", description: "How we build and manage Google Business Profiles for Florida practices." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready to Get Found Across Florida?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your current Google presence — delivered in 3–5 business days.
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
