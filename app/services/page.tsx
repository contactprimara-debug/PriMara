import type { Metadata } from "next";
import Link from "next/link";
import PgHero from "@/components/pg/PgHero";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Doctors | Primara",
  description:
    "Primara offers digital marketing services for independent primary care and mental health practices. Meta Ads, Google Business Profile, SEO, website design & more. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Digital Marketing Services for Doctors | Primara",
    description:
      "Primara offers digital marketing services for independent medical practices. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const services = [
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising for primary care and mental health practices — policy-safe creative, HIPAA-aware conversion tracking, dedicated landing pages, and call attribution.",
  },
  {
    id: "google-business-profile",
    slug: "google-business-profile",
    title: "Google Business Profile Management",
    description:
      "We claim, verify, and actively manage your practice's Google Business Profile — the single highest-leverage tool for local patient discovery.",
  },
  {
    id: "medical-practice-website-design",
    slug: "medical-practice-website-design",
    title: "Medical Practice Website Design",
    description:
      "A fast, HIPAA-aware website built specifically for independent primary care and mental health practices. Every page is designed to convert visitors into new-patient inquiries.",
  },
  {
    id: "local-seo-for-medical-practices",
    slug: "local-seo-for-medical-practices",
    title: "Local SEO for Medical Practices",
    description:
      "We optimize your website and online presence to rank above competing practices for the searches your future patients are typing.",
  },
  {
    id: "online-reputation-management",
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    description:
      "We monitor, respond to, and grow your practice's Google reviews — the biggest factor in whether a prospective patient calls you or the clinic down the street.",
  },
  {
    id: "patient-acquisition-ads",
    slug: "patient-acquisition-ads",
    title: "Patient Acquisition Ads",
    description:
      "Targeted Google Search and Local Service Ad campaigns designed to fill open appointment slots with the types of patients your practice wants to see.",
  },
  {
    id: "ai-seo",
    slug: "ai-seo",
    title: "AI SEO",
    description:
      "Structured data, AI crawler access, and answer-ready content so ChatGPT, Perplexity, and Google AI Overviews can find and accurately describe your practice.",
  },
  {
    id: "digital-marketing-for-independent-medical-practices",
    slug: "digital-marketing-for-independent-medical-practices",
    title: "Digital Marketing for Independent Practices",
    description:
      "The full picture for a practice that is not part of a hospital group — how the website, Google Business Profile, SEO, ads, and reviews work together instead of as separate line items.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PgHero
        id="services-h1"
        page="services"
        kicker="Services"
        h1="Digital Marketing Services for Medical Practices"
        sub="Digital marketing for independent primary care and mental health practices, built by Liam Costello and Gio LaRoche with HIPAA awareness built in."
        primary={{ label: "Get my free audit", href: "/the-audit" }}
      />

      {/* Mid-page CTA — "Not sure where to start?" */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-10">
        <div
          className="rounded-xl p-8 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--wire)" }}
        >
          <div className="flex-1">
            <p
              className="font-serif font-bold mb-2"
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.25rem", color: "var(--color-text)" }}
            >
              Not sure where to start?
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
              We audit your practice for free — GBP, Maps ranking, website, and reviews. No templates. Delivered in 3&ndash;5 days.
            </p>
          </div>
          <Link prefetch={false}
            href="/the-audit"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--ember)", height: "48px", fontSize: "0.9375rem", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Get My Free Practice Audit →
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="flex flex-col gap-3 rounded-xl p-8"
              style={{ backgroundColor: "var(--color-card)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderRadius: "12px" }}
            >
              <h2
                className="font-serif font-bold"
                style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.1rem", color: "var(--color-text)" }}
              >
                {s.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>{s.description}</p>
              <Link prefetch={false}
                href={`/services/${s.slug}`}
                className="mt-auto text-sm font-semibold"
                style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>
      {/* Bottom CTA */}
      <section
        aria-labelledby="services-bottom-cta"
        style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-20">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Get Started
          </div>

          <h2
            id="services-bottom-cta"
            className="font-serif font-bold"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)", marginBottom: "24px" }}
          >
            Every service starts with a free audit.
          </h2>

          <p
            className="max-w-2xl"
            style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--color-text-muted)", lineHeight: 1.85 }}
          >
            Liam or Gio will research your practice and walk you through the findings personally. No obligation.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link prefetch={false}
              href="/the-audit"
              className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
              style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem", textDecoration: "none" }}
            >
              Start My Free Audit →
            </Link>
            <a
              href="tel:+15612912681"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
              style={{ borderColor: "var(--ember)", color: "var(--gold)", height: "52px", fontSize: "1rem" }}
            >
              (561) 291-2681
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
