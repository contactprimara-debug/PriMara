import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reputation Management for Doctors in Florida | Primara",
  description:
    "Primara manages online reviews and reputation for independent medical practices in Florida. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services/online-reputation-management" },
  openGraph: {
    title: "Reputation Management for Doctors in Florida | Primara",
    description:
      "Primara manages online reviews and reputation for independent medical practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/online-reputation-management",
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
      name: "Online Reputation Management",
      item: "https://primara365.com/services/online-reputation-management",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Reputation Management for Medical Practices",
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
    "Online reputation management and review strategy for independent medical practices in Florida.",
};

const bullets = [
  "Full review audit across Google, Healthgrades, Zocdoc, WebMD, and Yelp",
  "HIPAA-compliant response strategy — professional replies that never confirm or deny a patient relationship",
  "Ethical review generation process aligned with Google's guidelines (no incentivized or purchased reviews)",
  "Monthly review volume and sentiment tracking across all active platforms",
  "Duplicate and unverified listing identification and cleanup",
  "Escalation protocol for reviews that may involve genuine operational concerns",
];

export default function ReputationPage() {
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
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Reputation Management</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="rep-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="rep-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Online Reputation Management for Medical Practices in Florida — Primara
        </h1>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}
        >
          Liam Costello &amp; Gio LaRoche, Co-Founders · Florida · Primary Care Specialists
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
            What is Online Reputation Management?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            For a primary care physician in Florida, your review profile across Google, Healthgrades, Zocdoc,
            and Yelp shapes patient decisions before any personal contact is made. Patients searching for a new
            primary care doctor in Florida regularly consult online reviews as part of their selection
            process — and practices with fewer, older, or unresponded reviews may lose prospective patients to
            competitors with more active profiles, even when clinical quality is comparable.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            Online reputation management for medical practices involves monitoring these platforms, developing a
            strategy for responding to all reviews in a professional and HIPAA-compliant manner, and building a
            systematic approach to collecting authentic, unsolicited patient feedback that accurately reflects the
            care your practice provides.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches Reputation Management
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Our approach begins with a full review audit — inventorying your current rating and review volume across
            every active platform, and identifying any duplicate or unverified listings that may be diluting your
            profile or displaying incorrect information. We then develop professional response templates for positive
            reviews and a HIPAA-compliant response framework for critical feedback that protects your practice while
            demonstrating care and professionalism to prospective patients reading the exchange.
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
            We work with practices to build review velocity over time through ethical outreach — not by gaming the
            system. The goal is a review profile that accurately reflects the quality of care your practice provides,
            and that gives prospective patients the confidence to call.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider Reputation Management?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If your practice&rsquo;s average rating is below 4.0 stars on Google, your review volume is significantly
            lower than competing practices in Florida, or you have critical reviews that have gone without a
            professional response, reputation management may help stabilize your online presence. This is particularly
            relevant for practices competing in high-density corridors like Palm Beach Lakes Boulevard or the medical
            office cluster near Palm Beach International Airport, where prospective patients have many visible
            alternatives within a short drive. Primara works exclusively with independent, physician-owned primary
            care practices.
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
            &ldquo;88% of consumers trust online reviews as much as a personal recommendation. For a
            primary care practice, a review profile with fewer than 10 reviews — or unanswered negative
            reviews — is a visible liability to every prospective patient who finds you on Google.&rdquo;
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
            — BrightLocal Consumer Review Survey, 2023
          </cite>
        </blockquote>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="rep-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="rep-cta"
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
