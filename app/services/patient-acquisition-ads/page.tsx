import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Patient Acquisition Ads for Doctors | Primara",
  description:
    "Primara runs targeted patient acquisition ad campaigns for independent medical practices. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services/patient-acquisition-ads" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Patient Acquisition Ads for Doctors | Primara",
    description:
      "Primara runs targeted patient acquisition ad campaigns for independent medical practices. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/patient-acquisition-ads",
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
      name: "Patient Acquisition Ads",
      item: "https://primara365.com/services/patient-acquisition-ads",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Patient Acquisition Advertising",
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
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Digital Marketing",
  description:
    "Targeted Google search and Local Service Ad campaigns for independent medical practices.",
};

const bullets = [
  "Google Local Service Ads (LSA) setup and verification for the healthcare vertical",
  "Google Search campaign structure built around new-patient intent keywords",
  "Geographic bid adjustments targeting specific ZIP codes and neighborhoods where your patients live",
  "Privacy-compliant call tracking and form-fill attribution to measure new patient inquiry volume",
  "Ad copy reviewed for compliance — no outcome promises, no superlatives that cannot be substantiated",
  "Monthly budget pacing and performance reporting with plain-English summaries",
];

export default function PatientAdsPage() {
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
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Patient Acquisition Ads</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="ads-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="ads-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Patient Acquisition Ads for Medical Practices — Primara
        </h1>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}
        >
          Liam Costello &amp; Gio LaRoche, Co-Founders · Primara
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
            What is Patient Acquisition Advertising?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Paid search advertising allows a primary care practice to appear at the top of Google&rsquo;s results for
            high-intent searches — immediately, rather than waiting for organic SEO rankings to develop over months.
            For independent practices competing against larger health systems with significant
            brand recognition and marketing budgets, targeted paid placement may provide a meaningful new-patient
            inquiry volume while longer-term SEO and Google Business Profile strategies mature.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            Patient acquisition ads for medical practices differ meaningfully from general business advertising.
            Healthcare ad campaigns must comply with Google&rsquo;s healthcare and medicines policy, avoid outcome
            promises, and use privacy-compliant conversion tracking that does not inadvertently capture protected
            health information. Primara builds every campaign with these requirements built in from the start.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches Patient Acquisition Ads
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Liam Costello and Gio LaRoche at Primara work with independent primary care clinics to build, launch, and
            manage search campaigns designed to bring qualified new-patient inquiries to your practice. Campaigns are
            structured around your specific patient profile and appointment capacity — not templated across multiple
            clinic accounts with the same keywords and copy.
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
            Our approach includes geographic bid adjustments targeting the ZIP codes and neighborhoods in Palm Beach
            County where your prospective patients are located — whether that&rsquo;s Wellington, Coral Gables, Boynton
            Beach, Palm Beach Gardens, or the neighborhoods immediately surrounding your practice on Okeechobee
            Boulevard or Congress Avenue.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider Patient Acquisition Ads?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If your practice has open appointment capacity but organic search, referrals, and walk-in volume are not
            filling it, paid search may help bridge the gap. This is particularly relevant for practices that have
            recently opened, expanded to a new location, or added a provider and need to build
            patient volume more quickly than organic strategies typically allow. Primara works exclusively with
            independent physician-owned primary care clinics.
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
            &ldquo;Acquiring a new patient through Google Ads costs between $300–$700 in most Florida
            primary care markets. Fewer than three new patients per month breaks even at a typical
            primary care billing rate — which is why we only introduce ads after your GBP and website
            foundation are already working.&rdquo;
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
            — Primara, on Google Ads timing for primary care practices
          </cite>
        </blockquote>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Resources"
        items={[
          { href: "/services/google-ads", label: "Google Ads", description: "Paid search and Maps ads for practices that want patients faster than organic SEO alone." },
          { href: "/services/medical-practice-website-design", label: "Website Design", description: "Websites built around the specific local search terms that drive new patient bookings." },
          { href: "/specialties/ed-treatment-clinics", label: "ED Treatment Clinics", description: "How independent ED treatment clinics compete with Hims/Roman on local search." },
        ]}
      />
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }} aria-labelledby="ads-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="ads-cta"
            className="font-serif font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Schedule — Call (561) 291-2681
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
            for independent primary care practices.
          </p>
        </div>
      </section>
    </main>
  );
}
