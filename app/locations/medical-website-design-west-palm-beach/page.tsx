import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/medical-website-design-west-palm-beach`;

export const metadata: Metadata = {
  title: "Medical Website Design in West Palm Beach, FL | Primara",
  description:
    "Medical website design for West Palm Beach practices — fast, HIPAA-aware, mobile-first sites built to convert new patients, from a local agency. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical Website Design in West Palm Beach, FL | Primara",
    description:
      "Medical website design for West Palm Beach practices — fast, HIPAA-aware, mobile-first sites built to convert new patients.",
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
    { "@type": "ListItem", position: 3, name: "Medical Website Design West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Website Design in West Palm Beach",
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
  serviceType: "Website Design and Development for Medical Practices",
  description:
    "Website design and development for independent medical practices in West Palm Beach, Florida — mobile-first, performance-optimized, HIPAA-aware sites with schema markup, accessibility, and clear new-patient conversion paths.",
};

const faqs = [
  {
    "q": "What makes a medical practice website different from a normal business site?",
    "a": "Two things: compliance and conversion. Contact forms, intake, and appointment tools must be configured in a HIPAA-aware manner so no protected health information flows through unassessed channels, and the whole site has to be organized around one job — getting a prospective patient to call or submit an inquiry. A general web designer usually optimizes for neither."
  },
  {
    "q": "How do I know if my current site needs a redesign?",
    "a": "If it fails Google's Mobile-Friendly test, takes more than three seconds to load on a mobile connection, lacks HTTPS, or has no clear action path for a new patient, a redesign is worth discussing. The same applies if it was last updated more than three years ago and predates Google's Core Web Vitals standards."
  },
  {
    "q": "Do you build the SEO in, or is that separate?",
    "a": "Built in. Every site ships with the SEO foundation — title tags, meta descriptions, canonical URLs, structured data markup, and sitemap submission — so it can be indexed and ranked accurately from day one. Ongoing SEO campaigns are a separate service, but the site itself is never the thing holding them back."
  },
  {
    "q": "Are you actually local to West Palm Beach?",
    "a": "Yes — Primara is based in West Palm Beach. We know the local landscape practices here compete in, from the Palm Beach Lakes Boulevard medical corridor to neighborhood clinics in Northwood and SoSo, and we can meet in person when it's useful."
  },
  {
    "q": "Who do you work with?",
    "a": "Independent, physician-owned practices — primary care, mental health, and men's health. We work with practices that want a site that actively brings in new patients, rather than one that simply exists as a digital brochure."
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
    "title": "Mobile-First, Performance-Optimized Builds",
    "body": "Every site targets Google's Core Web Vitals — LCP under 2.5 seconds and CLS near zero — so it loads fast on the mobile connections most West Palm Beach patients actually search from."
  },
  {
    "title": "Clear New-Patient Conversion Paths",
    "body": "Click-to-call, compliant contact forms, and optional Zocdoc integration — every page gives a prospective patient an obvious next step toward your front desk."
  },
  {
    "title": "HIPAA-Aware Design and Forms",
    "body": "No tracking pixels that may capture PHI, and contact form configurations assessed for compliance — so your marketing site never becomes a compliance liability."
  },
  {
    "title": "SEO Foundation From Day One",
    "body": "Physician and MedicalClinic schema markup, title tags, meta descriptions, canonical URLs, and sitemap submission ship with every build, so search engines can index and rank the new site accurately from launch."
  },
  {
    "title": "Accessibility and Real Photography",
    "body": "WCAG 2.1 AA accessibility — proper contrast, keyboard navigation, ARIA labels — plus a real photography strategy instead of the stock medical imagery patients see everywhere else."
  }
];

export default function MedicalWebsiteDesignWestPalmBeachPage() {
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
            <li style={{ color: "var(--chalk)" }}>Medical Website Design West Palm Beach</li>
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
            Medical Website Design in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara is a West Palm Beach medical marketing agency built for independent practices. We design and build fast, HIPAA-aware websites with clear paths for a prospective patient to call your front desk or submit a new-patient inquiry — built for patient conversion, not aesthetic awards.
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
              Your website is the first visit most patients ever make.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Whether your practice sits near Good Samaritan Medical Center on Palm Beach Lakes Boulevard, in an office park off Southern Boulevard, or in a neighborhood clinic in Northwood, a prospective patient almost always sees your website before they see your waiting room. That site has to load quickly on a mobile connection, present your credentials and accepted insurance clearly, and make calling your front desk effortless.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Medical sites also carry compliance considerations general business sites don&rsquo;t: contact forms and appointment tools must be configured in a HIPAA-aware manner, with no tracking pixels that may capture protected health information. We build that in from the start — from our home base here in West Palm Beach.
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
                    "href": "/locations/medical-website-design-florida",
                    "label": "Medical Website Design in Florida",
                    "description": "The same website design service for practices across the state."
          },
          {
                    "href": "/locations/medical-seo-west-palm-beach",
                    "label": "Medical SEO in West Palm Beach",
                    "description": "The ongoing SEO work that a fast, well-structured site makes possible."
          }
]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready for a Website That Brings In Patients?
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
