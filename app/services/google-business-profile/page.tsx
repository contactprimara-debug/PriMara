import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GBP Optimization for Medical Practices in Florida | Primara",
  description:
    "Primara manages Google Business Profiles for independent medical practices in Florida. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services/google-business-profile" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "GBP Optimization for Medical Practices in Florida | Primara",
    description:
      "Primara manages Google Business Profiles for independent medical practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/google-business-profile",
  },
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
      name: "Google Business Profile Management",
      item: "https://primara365.com/services/google-business-profile",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile Management",
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
    "Google Business Profile optimization and active management for independent medical practices in Florida.",
};

const bullets = [
  "8–10 GBP categories configured — most practices start with 1–2; we build out the full category set your practice qualifies for",
  "30+ services written in patient-search language (not clinical jargon), each one a potential ranking signal",
  "750-character GBP description optimized for your primary category and city",
  "52 weeks of Google Posts written and scheduled at onboarding via BrightLocal — 4 published per month",
  "20+ geotagged office photos uploaded at launch; 1 new photo added to GBP monthly from the archived session",
  "All insurance plans accepted added; every attribute filled — including telehealth, wheelchair access, and new patient availability",
  "HIPAA-compliant review responses within 48 hours — never confirming or denying a patient relationship",
  "Ongoing monitoring for unauthorized GBP edits and spam listings near your practice",
];

export default function GBPPage() {
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
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Google Business Profile</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="gbp-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="gbp-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Google Business Profile Management in Florida — Primara
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
            What is Google Business Profile Management?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Google Business Profile (formerly Google My Business) is the listing that powers the local "map pack" — the
            cluster of three business results that appears when a patient types "primary care doctor near me," "family
            physician Florida," or "doctor accepting new patients Florida." For an independent clinic
            in Florida — whether your office is on Okeechobee Boulevard, near the 45th Street medical corridor,
            or serves patients traveling in from Coral Gables, Boynton Beach, or Wellington — this listing is often the
            first contact a prospective patient has with your practice, before they visit your website or speak with
            anyone on your staff.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            A complete, actively managed profile displays accurate hours, current office photos, accepted insurance
            types, and professional responses to every patient review. An incomplete or unmonitored profile may steer
            prospective patients toward a competing clinic — even one that is farther away or less qualified.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches GBP Management
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Our approach begins with a full profile audit — reviewing your primary and secondary category selections,
            service area configuration, attributes (telehealth availability, wheelchair access, new patient acceptance),
            and NAP (Name, Address, Phone) formatting to confirm it matches your other directory listings exactly.
            Consistent NAP data across Google, Healthgrades, Zocdoc, WebMD, and Yelp is one of the foundational signals
            Google uses to verify a business&rsquo;s legitimacy and rank it accurately in local results.
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
            Our approach includes all of the above under a single flat engagement — no à la carte upsells, no annual contracts required. A 3-month minimum is recommended to see meaningful rank movement.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider GBP Management?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If your practice is not appearing in the local map pack for primary care searches in Florida, if
            your listing shows incorrect hours or an unclaimed status, or if patient reviews have gone without a
            professional response, GBP management may be one of the highest-leverage improvements available. This is
            particularly relevant for practices newer to Florida, clinics that have recently moved or
            rebranded, and independent practices whose Google listings may have been auto-generated and never formally
            claimed. Primara works exclusively with independent, physician-owned primary care clinics — not hospital
            systems, urgent care franchises, or dental chains.
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
            &ldquo;93% of consumers used the internet to find a local business in the last year.
            The businesses that appear in Google&rsquo;s local 3-pack capture the overwhelming majority
            of those clicks. For most independent practices, not ranking there is a fixable optimization
            problem — not a size or budget problem.&rdquo;
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
            — BrightLocal, Local Search Consumer Survey, 2023
          </cite>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }} aria-labelledby="gbp-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="gbp-cta"
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
