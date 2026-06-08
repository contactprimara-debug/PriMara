import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

// ── Service cards ─────────────────────────────────────────────────────────
// H3 titles must match the H1 of each service section on /services
// Slugs become anchor IDs on the /services page: /services#[slug]
const services = [
  {
    slug: "google-business-profile",
    title: "Google Business Profile Management",
    description:
      "We configure 8–10 GBP categories, write 30+ services in patient-search language, schedule 52 posts per year, and upload geotagged office photos. GBP is the single most important local ranking factor — we treat it that way.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="16" r="7" stroke="var(--color-primary)" strokeWidth="1.75" />
        <path d="M18 23v8" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="18" cy="16" r="2.5" fill="var(--color-primary)" />
        <path d="M10 30c1.8-3.5 4.5-5 8-5s6.2 1.5 8 5" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "medical-practice-website-design",
    title: "Medical Practice Website Design",
    description:
      "A 30-page Core SEO website built around your GBP categories and deployed on Vercel. Every page targets a specific local search term. All 7 GBP consistency signals verified at launch. Google Search Console submitted day one.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="28" height="20" rx="3" stroke="var(--color-primary)" strokeWidth="1.75" />
        <path d="M4 12h28" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M12 30h12M18 26v4" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M10 17h6M10 21h10" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "local-seo-for-medical-practices",
    title: "Local SEO for Medical Practices",
    description:
      "Two new SEO pages per month, driven by your Local Falcon rank map. Topical pages build relevance; geographic pages extend your radius. NAP consistency monitored across 50+ directories. Technical SEO checked in Google Search Console monthly.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="var(--color-primary)" strokeWidth="1.75" />
        <path d="M24 24l7 7" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M12 16h8M16 12v8" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    description:
      "NFC tap cards and QR signs installed at checkout, waiting room, and exam rooms to collect authentic patient reviews. Platforms rotated monthly across Google, Yelp, and Healthgrades. Every response HIPAA-compliant and within 48 hours.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 4l3.5 7.5 8 1.2-5.8 5.6 1.4 8L18 22.5 10.9 26.3l1.4-8L6.5 12.7l8-1.2L18 4z" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "patient-acquisition-ads",
    title: "Patient Acquisition Ads",
    description:
      "Google Search and Local Service Ad campaigns for independent primary care practices. We write the ads, manage the bids, and report on cost per new-patient inquiry. You pay Google directly — we never touch your ad spend. Offered in Month 3+ only.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 28l6-8 6 4 6-10 6 6" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="20" r="2" fill="var(--color-primary)" />
        <path d="M6 28h24" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-24 cv-auto"
      style={{ backgroundColor: "white" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest font-medium"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-serif font-bold text-balance"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-text)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Digital Marketing Services for Medical Practices in Florida
          </h2>
          <p
            className="mt-3 text-base max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Comprehensive digital marketing built for independent primary care clinics —
            Liam Costello &amp; Gio LaRoche, Primara.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col gap-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover-lift"
              style={{
                backgroundColor: "var(--color-card)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              {/* Icon */}
              <div aria-hidden="true">{service.icon}</div>

              {/* Title */}
              <h3
                className="font-serif font-bold leading-snug"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="flex-1 leading-relaxed"
                style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}
              >
                {service.description}
              </p>

              {/* CTA link */}
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 mt-auto"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
              >
                Learn About {service.title}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div
        className="mt-16"
        style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p
            className="font-serif font-semibold text-balance"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "white",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Now accepting new clients in {siteConfig.city} —
            GBP optimized and review system live within Week 1.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg px-6 font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-accent)",
              minHeight: "48px",
              fontSize: "1rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 2.5h2.5L6.5 5.5l-1.5 1.5a8 8 0 003.5 3.5L10 9l3 1v2.5A1.5 1.5 0 0111.5 14C5.7 14 1 9.3 1 3.5A1.5 1.5 0 013 2z" fill="white" />
            </svg>
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
