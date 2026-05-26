import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Local SEO for Medical Practices in West Palm Beach, FL | Primara",
  description:
    "Primara provides local SEO for independent primary care practices in West Palm Beach, FL. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara.com/services/local-seo-for-medical-practices" },
  openGraph: {
    title: "Local SEO for Medical Practices in West Palm Beach, FL | Primara",
    description:
      "Primara provides local SEO for independent primary care practices in West Palm Beach, FL. Call (561) 291-2681.",
    type: "website",
    url: "https://primara.com/services/local-seo-for-medical-practices",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Local SEO for Medical Practices",
      item: "https://primara.com/services/local-seo-for-medical-practices",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for Medical Practices",
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
  areaServed: { "@type": "City", name: "West Palm Beach" },
  serviceType: "Digital Marketing",
  description:
    "Local SEO for independent primary care practices in West Palm Beach, FL — on-page optimization, citation audits, schema markup, and monthly rank tracking.",
};

const bullets = [
  "On-page optimization: title tags, meta descriptions, H1/H2 structure, and internal linking",
  "NAP consistency audit across Healthgrades, Zocdoc, WebMD, Yelp, and local directories",
  "Schema markup for LocalBusiness, Physician, and MedicalClinic",
  "Technical SEO audit: page speed, mobile usability, Core Web Vitals, and crawlability",
  "Monthly Local Falcon grid reports to track ranking movement across Palm Beach County ZIP codes",
  "Neighborhood and service-area content strategy (built only where search volume justifies it)",
];

export default function LocalSEOPage() {
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
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Local SEO</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="seo-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="seo-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Local SEO for Medical Practices in West Palm Beach — Primara
        </h1>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}
        >
          Liam Costello &amp; Gio LaRoche, Co-Founders · West Palm Beach, FL · Primary Care Specialists
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
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", height: "48px", fontSize: "1rem" }}
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
            What is Local SEO for Medical Practices?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Local SEO (Search Engine Optimization) is the process of improving a medical practice&rsquo;s visibility in
            geographically relevant search results. When a patient in West Palm Beach types "primary care doctor near
            me," "internist Palm Beach County," or "physician accepting new patients Lake Worth," Google returns a
            combination of map pack results and organic website listings — and local SEO directly influences both.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            For an independent primary care clinic in West Palm Beach — whether your practice is in the Northwood
            neighborhood, near Belvedere Road, along Congress Avenue, or in a medical office building closer to
            Wellington — local SEO determines whether a prospective patient finds your name above or below practices
            operated by larger health systems and urgent care chains that typically invest heavily in digital marketing.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches Local SEO
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Our approach includes on-page optimization — ensuring each page of your website has a clear title tag, meta
            description, properly structured headings, and body copy that accurately reflects the services you provide
            and the West Palm Beach neighborhoods you serve. We work with clients to identify the search terms most
            likely to bring qualified new patients to their specific practice — not generic national healthcare keywords,
            but the phrases patients in Palm Beach County are actually using when they need a primary care physician.
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
            Every SEO engagement also includes a technical health audit of your existing website — checking page load
            speed on mobile, Core Web Vitals scores, HTTPS configuration, crawlability, and sitemap integrity — so
            search engines can reliably index and rank your pages.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider Local SEO?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If patients within a few miles of your clinic are consistently finding and booking at competing practices
            rather than yours, local SEO may help address that visibility gap. This is especially relevant for
            independent physician-owned clinics competing against larger health system brands that carry significant
            domain authority from corporate parent websites. Primara works exclusively with independent, physician-owned
            primary care clinics — not hospital systems, urgent care franchises, or dental chains — on a month-to-month
            basis with no long-term contract required.
          </p>
        </div>
      </section>

      {/* Review placeholder */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <blockquote
          className="p-8 rounded-xl max-w-prose"
          style={{
            backgroundColor: "var(--color-card)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            borderLeft: "4px solid var(--color-gold)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff3cd",
              color: "#856404",
              padding: "4px 10px",
              borderRadius: "4px",
              fontSize: "0.75rem",
              display: "inline-block",
              marginBottom: "12px",
              fontFamily: "var(--font-mono)",
            }}
          >
            ⚠ PRE-LAUNCH: Replace with a real client review before publishing.
          </div>
          <p className="leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-text)", fontStyle: "italic" }}>
            &ldquo;…&rdquo;
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
            — [Client Name], [Practice Name], West Palm Beach, FL
          </cite>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="seo-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="seo-cta"
            className="font-serif font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Schedule in West Palm Beach — Call (561) 291-2681
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
              Schedule an Appointment
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Part of our{" "}
            <Link href="/services" className="underline hover:opacity-80 text-white">
              digital marketing services
            </Link>{" "}
            for independent primary care practices in West Palm Beach.
          </p>
        </div>
      </section>
    </main>
  );
}
