import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/medical-website-design-florida`;

export const metadata: Metadata = {
  title: "Medical Website Design for Florida Practices | Primara",
  description:
    "Florida medical website design from a Florida-based agency — fast, HIPAA-aware, mobile-first practice websites built to convert new patients statewide. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical Website Design for Florida Practices | Primara",
    description:
      "Florida medical website design — fast, HIPAA-aware, mobile-first practice websites built to convert new patients statewide.",
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
    { "@type": "ListItem", position: 3, name: "Medical Website Design Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Website Design for Florida Practices",
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
  serviceType: "Website Design and Development for Medical Practices",
  description:
    "Website design and development for independent medical practices across Florida — mobile-first, performance-optimized, HIPAA-aware sites with schema markup, accessibility, and clear new-patient conversion paths.",
};

const faqs = [
  {
    "q": "Do you build websites for practices outside West Palm Beach?",
    "a": "Yes — we're based in West Palm Beach and build for independent practices across Florida. Website work doesn't require us to be down the street; the build, compliance review, and launch process is the same statewide."
  },
  {
    "q": "What does a Primara practice website include?",
    "a": "Mobile-first, performance-optimized development targeting Core Web Vitals; clear new-patient conversion paths (click-to-call, forms, optional Zocdoc); HIPAA-aware form configuration; Physician and MedicalClinic schema markup; WCAG 2.1 AA accessibility; and a real photography strategy instead of stock medical imagery."
  },
  {
    "q": "Why does HIPAA matter for a marketing website?",
    "a": "Because contact forms, intake tools, and even analytics pixels can capture protected health information if configured carelessly. A medical site must route those channels in a HIPAA-aware manner — something general business site builders rarely account for."
  },
  {
    "q": "When is a redesign actually worth it?",
    "a": "When your site fails Google's Mobile-Friendly test, loads in over three seconds on mobile, lacks HTTPS, has no clear new-patient action path, or was last updated more than three years ago — before Google's Core Web Vitals standards. If none of those apply, we'll tell you to keep what you have."
  },
  {
    "q": "Does the new site come with SEO?",
    "a": "The foundation does — every build includes title tags, meta descriptions, canonical URLs, structured data, and sitemap submission so search engines index it accurately from day one. Ongoing SEO campaigns and content are a separate service that the new site makes far more effective."
  }
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
    "title": "Performance Built for Mobile Florida Searches",
    "body": "Mobile-first development targeting Core Web Vitals — LCP under 2.5 seconds, CLS near zero — because most Florida patients find and judge a practice from their phone."
  },
  {
    "title": "Conversion Paths, Not Digital Brochures",
    "body": "Click-to-call, compliant contact forms, and optional Zocdoc integration on every build — each page moves a prospective patient one step closer to your front desk."
  },
  {
    "title": "HIPAA-Aware by Default",
    "body": "Contact form configurations assessed for compliance and no tracking pixels that may capture PHI — the compliance considerations a general web agency typically misses."
  },
  {
    "title": "Schema and SEO Foundation Included",
    "body": "Physician and MedicalClinic structured data, title tags, canonical URLs, and sitemap submission ship with every site, so it can rank accurately in your city from launch."
  },
  {
    "title": "Accessible, Honest Design",
    "body": "WCAG 2.1 AA accessibility and a real photography strategy — no stock medical imagery — with a content review process to confirm clinical descriptions are accurate before launch."
  }
];

export default function MedicalWebsiteDesignFloridaPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medical Website Design Florida</li>
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
            Medical Website Design for Florida Practices
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara builds websites for independent medical practices across Florida from our home base in West Palm Beach — fast, HIPAA-aware, mobile-first sites with clear new-patient conversion paths, backed by an SEO foundation that works from day one.
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
              Florida patients judge your practice by your website first.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Florida is one of the most competitive healthcare markets in the country — large hospital systems, heavy urgent-care density, and seasonal population swings. In that environment, a slow site with no clear way to book or call doesn&rsquo;t just look dated; it quietly hands new patients to whichever competitor made calling easier. Most practice sites fail the basics: mobile speed, clear insurance information, and an obvious next step.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Medical websites also carry compliance obligations general sites don&rsquo;t — HIPAA-aware forms and no tracking pixels that may capture protected health information. We build to that standard for practices statewide, from Miami and Fort Lauderdale up through Tampa, Orlando, and Jacksonville.
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
          {
                    "href": "/services/medical-practice-website-design",
                    "label": "Medical Practice Website Design Service",
                    "description": "The full website design service — what every build includes and when a redesign is worth it."
          },
          {
                    "href": "/locations/medical-website-design-west-palm-beach",
                    "label": "Medical Website Design in West Palm Beach",
                    "description": "The same service in our home market, where we can meet in person."
          },
          {
                    "href": "/locations/medical-seo-florida",
                    "label": "Medical SEO for Florida Practices",
                    "description": "The statewide SEO work a fast, well-structured site unlocks."
          }
]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready for a Practice Website That Works Statewide?
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
