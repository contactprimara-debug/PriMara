import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";
import LocationDepth from "@/components/LocationDepth";

const PAGE_URL = `${SITE_URL}/locations/medical-seo-west-palm-beach`;

export const metadata: Metadata = {
  title: "Medical SEO in West Palm Beach, FL | Primara",
  description:
    "Medical SEO for West Palm Beach practices from an agency based in town: Google Business Profile, local rankings and site fixes. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical SEO in West Palm Beach, FL | Primara",
    description:
      "Medical SEO for independent practices in West Palm Beach — GBP optimization, local rankings, on-page and technical SEO from a West Palm Beach agency.",
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
    { "@type": "ListItem", position: 3, name: "Medical SEO West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical SEO in West Palm Beach",
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
  serviceType: "Search Engine Optimization for Medical Practices",
  description:
    "Local and organic SEO for independent medical practices in West Palm Beach, Florida — Google Business Profile optimization, on-page optimization, technical SEO, and content strategy.",
};

const faqs = [
  { q: "Do you actually work with practices in West Palm Beach?", a: "Yes. Our office is in West Palm Beach, so this is the market we know first-hand. We know which systems your practice competes against and how patients describe where they live. We go through those details with each new practice by name." },
  {
    q: "What does medical SEO include for a West Palm Beach practice?",
    a: "Four things: a fully built Google Business Profile, a technical and on-page clean-up of the website, new pages written around real local searches, and a monthly report with rankings, Search Console numbers and calls. The scope is written down before work starts.",
  },
  {
    q: "How is this different from hiring a national SEO agency?",
    a: "We take only independent primary care and mental health practices, never hospital systems or chains, and the two founders handle the work themselves. There is no account manager in between, and the agreement runs month to month.",
  },
  { q: "How long until a West Palm Beach practice sees SEO results?", a: "Local visibility (Google Maps and Business Profile) usually moves within 60–90 days. Competitive organic keywords take longer — typically 4–6 months. We show progress monthly through rank grids and Google Search Console, so movement is always visible. We're happy to go deeper on this for your specific market during a free audit." },
  { q: "Can we meet in person?", a: "Yes. Because we are based in West Palm Beach, an in-person meeting is possible if you prefer it, and the audit call can also be done by phone or video." },
  { q: "Do you only work with practices in West Palm Beach?", a: "No. We serve independent practices across Florida and beyond, but this page covers the work as it applies to this market." },
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
    title: "Google Business Profile, Fully Built",
    body: "Searchers near the coast see the Maps pack before anything else, so the listing has to be complete: the right primary category, a real services list, accurate hours and a steady stream of genuine photos and posts. We set that up and keep it current, so the practice stands next to the clinic chains instead of below them.",
  },
  {
    title: "On-Page & Technical SEO",
    body: "We crawl the whole site and fix what gets in the way: unclear titles, missing headings, broken links, slow mobile pages and absent structured data. The goal is simple. Every page should be easy for a search engine to read and fast for a patient on a phone.",
  },
  {
    title: "Local Content That Matches Patient Searches",
    body: "People here look for a doctor by insurance, by the service they need and by the part of the county they live in, almost never by the practice name. We write pages for those searches, using only what your front desk confirms, with no clinical promises.",
  },
  {
    title: "Transparent Monthly Reporting",
    body: "Rank tracking across your service area plus Google Search Console and GA4 data every month. You see exactly which keywords moved and what we did — no vanity metrics.",
  },
];

export default function MedicalSeoWestPalmBeachPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medical SEO West Palm Beach</li>
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
            West Palm Beach, Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "800px", marginBottom: "24px",
            }}
          >
            Medical SEO in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara is a West Palm Beach medical marketing agency built for independent
            practices. We handle the full SEO stack — Google Business Profile, local
            rankings, on-page optimization, technical health, and content — so patients
            searching in this market find your practice instead of the hospital system.
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

      {/* Local context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why It Matters Here
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              West Palm Beach patients pick whoever Google shows them first.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              A person typing &ldquo;primary care doctor near me&rdquo; or &ldquo;therapist
              accepting new patients&rdquo; in West Palm Beach rarely scrolls past the first few
              results. Which practices fill those spots comes down to three things Google can
              measure: how complete and active the Business Profile is, how well the website
              answers the question, and whether the practice&rsquo;s name, address and phone read
              the same everywhere online. The hospital systems here employ people whose daily
              job is that work, which is why a small practice that does it badly simply
              disappears.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The gap closes with steady, unglamorous work, and that is what we do from an office
              in town. Our clients are independent primary care and mental health practices, and
              the method is the one we use everywhere, adjusted for the neighborhoods and seasons
              of this county.
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

      <LocationDepth
        eyebrow="Working From Here"
        heading="What it means that the agency and the practice are in the same market."
        blocks={[{"type": "p", "text": "Most agencies that sell medical SEO in West Palm Beach manage it from somewhere else. We are here, and the difference shows up in small ways that rarely appear in a proposal."}, {"type": "h3", "text": "Local facts we can check ourselves"}, {"type": "p", "text": "We can drive past the office, look at the signage and the parking, and confirm that the map pin sits on the right building. We know which parts of the county people mean when they search for a doctor near the coast and which parts they mean inland, and we can build pages that name the neighborhoods your patients actually come from, not the whole county."}, {"type": "h3", "text": "Seasonal patterns"}, {"type": "p", "text": "Palm Beach County has seasonal residents and a hurricane season. Both affect search and both affect the listing. Hours and closures need to be accurate when a storm closes the office, and a practice that serves winter residents may want its page on accepting new patients to be current before the season starts. We plan these dates into the calendar, not after the fact."}, {"type": "h3", "text": "What stays the same everywhere"}, {"type": "p", "text": "The work itself is the same as for any practice we serve: a complete profile, a technically healthy site, pages that match real searches, and monthly reporting that shows what moved. What a local base adds is speed on the things that need a person to check something in the real world."}, {"type": "p", "text": "We work with primary care and mental health practices only, and we do not take hospital systems or chains. That focus is why the advice here is specific to the way those practices are found."}, {"type": "pl", "parts": ["Two other layers sit on top of the site work, ", {"href": "/locations/gbp-optimization-west-palm-beach", "text": "Google Business Profile optimization"}, " and ", {"href": "/locations/google-ads-management-west-palm-beach", "text": "Google Ads management"}, ", and both are written up for West Palm Beach practices."]}]}
      />

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
          { href: "/locations/gbp-optimization-florida", label: "GBP Optimization in Florida", description: "How we build and manage Google Business Profiles for Florida practices." },
          { href: "/locations/west-palm-beach-fl", label: "Primary Care Marketing — West Palm Beach", description: "Our full marketing service for West Palm Beach primary care practices." },
          { href: "/locations/google-ads-management-west-palm-beach", label: "Google Ads Management in West Palm Beach", description: "The paid side — search campaigns and Local Service Ads for our home market." },
          { href: "/locations/ai-seo-west-palm-beach", label: "AI SEO in West Palm Beach", description: "Getting cited by ChatGPT and AI Overviews — the next layer on the SEO foundation." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready to Get Found in West Palm Beach?
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
