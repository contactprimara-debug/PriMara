import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/dental-practices-florida`;

export const metadata: Metadata = {
  title: "Dental Marketing in Florida | Independent Practices | Primara",
  description:
    "Marketing for independent Florida dental practices competing against DSO-backed groups — local search visibility, implant and aligner campaigns, and review systems. Miami to Jacksonville. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dental Marketing in Florida | Independent Practices | Primara",
    description:
      "Local SEO, Meta and Google Ads, and review generation for independent dental practices across Florida.",
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
    { "@type": "ListItem", position: 3, name: "Dental Marketing Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Marketing for Florida Clinics",
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
  serviceType: "Digital Marketing for Dental Practices",
  audience: { "@type": "Audience", audienceType: "Independent dental practices in Florida" },
  description:
    "Digital marketing for independent dental practices across Florida — local search and Google Business Profile visibility, implant and clear aligner campaigns on Meta and Google, review generation, and website work that supports high-value case acquisition.",
};

const faqs = [
  {
    q: "How do we compete with DSO-backed practices in Florida?",
    a: "Not on budget, and not on volume. Group-backed practices in this state run centralized marketing with spend an independent cannot match, but they carry two structural weaknesses: their websites and listings are templated across dozens of locations, and the named dentist is rarely the marketing story. An independent can publish genuinely specific pages, show an actual clinician, and accumulate reviews that name a real person. That is a narrow advantage, and working it consistently is the entire strategy.",
  },
  {
    q: "Which dental searches matter most in a Florida market?",
    a: "Two very different sets. Emergency and routine terms — 'emergency dentist near me', 'dentist accepting new patients' — are high-intent, proximity-driven, and decided in the map pack within minutes. High-value terms like implants, full-arch, veneers, and clear aligners are researched over months and decided by trust signals: a real page explaining the procedure, a visible clinician, and credible reviews. Most Florida practices need both, and they need different tactics; treating them as one keyword list is the common mistake.",
  },
  {
    q: "Does Florida's retiree population change the strategy?",
    a: "It shifts the mix. Florida skews older than the national average in many markets, which raises demand for implants, dentures, and full-arch restoration relative to a younger metro elsewhere. It also means a meaningful share of the audience is not on Instagram — Facebook reaches this group far better, and search and Google Business Profile carry more weight than they would for an aligner-focused practice. We plan the channel split around who actually lives in your catchment, not around what is fashionable.",
  },
  {
    q: "What do you do about our Google Business Profile?",
    a: "Configure it properly and then keep it fed. That means the correct primary category, every service the practice actually performs listed as a service, attributes and hours right, photos current, and a posting cadence that does not stop after month two. For multi-dentist practices we also make sure the site has a genuine page per service the listing claims — a listing promising implants that points at a site with no implant page is a mismatch Google can see.",
  },
  {
    q: "How do you handle patient reviews for a dental practice?",
    a: "Request-only, over text, with no sentiment screening beforehand — asking only the patients you expect to be happy is against both FTC guidance and Google's policies, and it is the shortcut that gets review sets removed. The request carries a name and a link, nothing clinical. Replies follow the same rule: we never confirm or deny that a reviewer was a patient, and no reply describes treatment.",
  },
  {
    q: "Do you only work with dental practices in Florida?",
    a: "No. We are based in West Palm Beach and a good share of our work is in-state, but the service is not geographically limited — we work with independent dental practices nationwide. What we do not take is DSO-owned groups or franchise brands, because the independent's advantage is specificity and we cannot build that inside someone else's template.",
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
    body: "Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and the Treasure Coast. Heavy DSO presence, high cost per click on implant terms, and a large retiree population that makes full-arch and restorative work the dominant high-value category.",
    example: { href: "/locations/dental-practices-west-palm-beach", label: "Dental marketing in West Palm Beach" },
  },
  {
    name: "Tampa Bay",
    body: "Tampa, St. Petersburg, Clearwater, Brandon, and Lakeland. Rapid suburban growth produces households actively looking for a first local dentist — the cheapest new patients available anywhere in the funnel.",
    example: { href: "/locations/medical-seo-lakeland", label: "Medical SEO in Lakeland" },
  },
  {
    name: "Orlando & Central Florida",
    body: "Orlando, Winter Park, Kissimmee, Altamonte Springs, and Sanford. A younger demographic mix than the coasts, which tends to shift the high-value opportunity toward clear aligners and cosmetic work rather than full-arch restoration.",
    example: { href: "/locations/orlando-fl", label: "Orlando practice marketing" },
  },
  {
    name: "Northeast Florida",
    body: "Jacksonville, Jacksonville Beach, St. Augustine, and Orange Park. A large metro where independent practices still hold real ground and local search competition is lighter than in the southeast corridor.",
    example: { href: "/locations/jacksonville-fl", label: "Jacksonville practice marketing" },
  },
];

export default function DentalPracticesFloridaPage() {
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
            <li style={{ color: "var(--chalk)" }}>Dental Marketing Florida</li>
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
            Dental · Statewide Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "840px", marginBottom: "24px",
            }}
          >
            Dental Marketing in Florida
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Independent Florida practices are competing against group-backed clinics with
            centralized marketing budgets — and beating them on the one thing a template
            cannot produce: specificity. We run local search, implant and aligner campaigns,
            and review systems for practices from Pensacola to the Keys.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent practices, not DSOs · No long-term contracts
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
              Two different practices live inside every dental practice.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              One of them fills the hygiene schedule and handles the broken molar on a Friday
              afternoon. That business is won in the map pack, in minutes, by whoever is
              closest and looks credible — which makes Google Business Profile configuration
              and review volume the levers that matter. The other practice does the implant
              consults and the aligner cases that actually change a year&rsquo;s revenue, and
              those are decided over months by patients who are quietly researching before
              they ever call.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Florida sharpens both. The state&rsquo;s older-than-average population in many
              markets drives unusual demand for restorative and full-arch work, while steady
              in-migration keeps producing households who need a first local dentist. Group
              practices here spend heavily against both, but they do it from templates — the
              same site copy across thirty locations, the same generic listing. Independents
              win by being unmistakably specific, and that is what we build.
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
          { href: "/dental-practices", label: "Dental Practice Marketing", description: "The full vertical page — services, approach, packages, and who this is not for." },
          { href: "/locations/dental-practices-west-palm-beach", label: "Dental Marketing in West Palm Beach", description: "Our home market, and the heaviest DSO presence in the state." },
          { href: "/locations/meta-ads-for-dental-practices", label: "Meta Ads for Dental Practices", description: "Implant, aligner, and cosmetic case acquisition on Facebook and Instagram." },
          { href: "/locations/google-ads-management-florida", label: "Google Ads Management in Florida", description: "Where emergency and routine demand belongs — statewide search campaigns." },
          { href: "/locations/gbp-optimization-florida", label: "GBP Optimization in Florida", description: "The listing work that decides map-pack position for local dental searches." },
          { href: "/locations/medspas-florida", label: "Medspa Marketing in Florida", description: "The other high-consideration vertical we serve statewide." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            See Where You Stand Against the Groups
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit compares your listing, site, and review position against the
            practices ranking above you — delivered in 3&ndash;5 business days.
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
