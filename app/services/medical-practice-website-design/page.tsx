import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medical Practice Website Design in Florida | Primara",
  description:
    "Primara designs fast, HIPAA-aware websites for independent medical practices in Florida. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services/medical-practice-website-design" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical Practice Website Design in Florida | Primara",
    description:
      "Primara designs fast, HIPAA-aware websites for independent medical practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/medical-practice-website-design",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara365.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medical Practice Website Design",
      item: "https://primara365.com/services/medical-practice-website-design",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Practice Website Design",
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
  serviceType: "Digital Marketing",
  description:
    "Fast, HIPAA-aware website design and development for independent medical practices in Florida.",
};

const bullets = [
  "Mobile-first, performance-optimized development (Core Web Vitals: LCP under 2.5s, CLS near zero)",
  "Clear new-patient conversion paths: click-to-call, contact forms, and optional Zocdoc integration",
  "HIPAA-aware design — no tracking pixels that may capture PHI, compliant contact form configuration",
  "Physician and MedicalClinic schema markup to support local search visibility from day one",
  "Accessibility (WCAG 2.1 AA): adequate color contrast, keyboard navigation, and proper ARIA labels",
  "Real photography strategy — no stock medical imagery",
];

export default function WebsiteDesignPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Website Design</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="web-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="web-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Medical Practice Website Design in Florida — Primara
        </h1>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}
        >
          Liam Costello &amp; Gio LaRoche, Co-Founders · Florida
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="tel:+15612912681"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--color-accent)", height: "48px", fontSize: "1rem" }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/the-audit"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
            style={{ borderColor: "var(--ember)", color: "var(--ember)", height: "48px", fontSize: "1rem" }}
          >
            Request a Free Audit
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <div className="max-w-prose">
          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            What is Medical Practice Website Design?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            A medical practice website serves a fundamentally different purpose than a general business site. For a
            physician in Florida — whether your practice is near Good Samaritan Medical Center on Palm Beach
            Lakes Boulevard, in an office park off Southern Boulevard, or in a neighborhood clinic in the Northwood
            or SoSo district — your site must load quickly on a mobile connection, present your credentials and
            accepted insurance clearly, and make it easy for a prospective patient to call your front desk or submit
            a new patient inquiry.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            Medical practice websites also carry compliance considerations that general business sites do not. Contact
            forms, online patient intake, and appointment request tools must be configured in a HIPAA-aware manner —
            meaning no form fields should capture protected health information through channels that have not been
            properly assessed for compliance.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches Website Design
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Liam Costello and Gio LaRoche at Primara work with independent physician-owned primary care clinics to
            design and build websites that are built for patient conversion, not aesthetic awards. Every site we build
            is accompanied by SEO foundation work — title tags, meta descriptions, canonical URLs, structured data
            markup, and sitemap submission — so search engines can index and rank it accurately from day one.
          </p>
          <ul className="mb-6 space-y-3" style={{ color: "var(--color-text-muted)" }}>
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                >
                  <path
                    d="M3 9l4 4 8-8"
                    stroke="var(--color-success)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span style={{ fontSize: "0.9375rem" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            We work with practices that want a site that actively brings in new patients, rather than simply existing
            as a digital brochure. Our approach includes guidance on patient photography and a content review process
            to confirm all clinical descriptions are accurate and compliant before launch.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider a New Website?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If your current site fails Google&rsquo;s Mobile-Friendly test, loads in more than three seconds on a mobile
            connection, lacks HTTPS, or has no clear action path for a prospective new patient, a redesign may be
            worth discussing. The same applies if your site was last updated more than three years ago and predates
            Google&rsquo;s Core Web Vitals standards. Primara works exclusively with independent, physician-owned
            primary care clinics in Florida.
          </p>
        </div>
      </section>

      {/* Industry stat */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <blockquote
          className="p-8 rounded-xl max-w-prose"
          style={{
            backgroundColor: "var(--color-card)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            borderLeft: "4px solid var(--color-gold)",
          }}
        >
          <p className="leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-text)", fontStyle: "italic" }}>
            &ldquo;75% of users never scroll past the first page of Google results. If your practice
            website isn&rsquo;t ranking on page one for your primary search terms, it may as well not
            exist — from a new-patient discovery standpoint.&rdquo;
          </p>
          <cite
            className="block mt-4"
            style={{
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              fontStyle: "normal",
              fontFamily: "var(--font-mono)",
            }}
          >
            — Backlinko, Google Organic CTR Research, 2023
          </cite>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }} aria-labelledby="web-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="web-cta"
            className="font-serif font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Schedule in Florida — Call (561) 291-2681
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+15612912681"
              className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
              style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem" }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 font-bold text-white"
              style={{ height: "52px", fontSize: "1rem" }}
            >
              Request Your Free Audit
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Part of our{" "}
            <Link href="/services" className="underline hover:opacity-80 text-white">
              digital marketing services
            </Link>{" "}
            for independent primary care practices in Florida.
          </p>
        </div>
      </section>
    </main>
  );
}
