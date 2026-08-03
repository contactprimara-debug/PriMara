import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Work — Real Practices We Work With | Primara",
  description:
    "Real independent practices Primara works with — SEO, Google Business Profile management, Google Ads, and website work for primary care and mental health clients.",
  alternates: { canonical: "https://primara365.com/work" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Client Work — Real Practices We Work With | Primara",
    description:
      "Real independent practices Primara works with — SEO, GBP, Google Ads, and website work.",
    type: "website",
    url: "https://primara365.com/work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://primara365.com/work" },
  ],
};

// NOTE: only verified facts appear here — no invented deliverable counts,
// no fabricated results. Both engagements are ongoing; copy is written in
// present tense and does not claim a finished "before/after" outcome.
const projects = [
  {
    client: "Family Life Counseling Center",
    type: "Counseling Practice · Multiple Locations",
    location: "Lake, Polk & Orange Counties, FL",
    slug: "family-life",
    services: ["SEO", "GBP Optimization", "Website Rebuild"],
    practice:
      "Family Life Counseling Center is a counseling practice with multiple locations across Lake, Polk, and Orange Counties, Florida.",
    engagement:
      "Primara manages local SEO and Google Business Profile across the practice's locations, with a new website currently in development.",
    what: [
      "Local SEO",
      "Google Business Profile management across multiple locations",
      "Website rebuild — in progress",
    ],
    url: "https://familylifecounselingcenter.com",
  },
  {
    client: "Ghalo Mental Health",
    type: "Mental Health Practice",
    location: "Houston, TX",
    slug: "ghalo",
    services: ["SEO", "Google Ads", "GBP Optimization"],
    practice:
      "Ghalo Mental Health is a mental health practice based in Houston, TX.",
    engagement:
      "Primara manages Google Business Profile optimization, local SEO, and Google Ads for the practice — an active, ongoing engagement.",
    what: [
      "Google Business Profile optimization",
      "Local SEO",
      "Google Ads campaign management",
    ],
    url: "https://ghalomh.com",
  },
];

export default function WorkPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>Work</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--void)",
          padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 64px)",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "20px",
            }}
          >
            Client Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "720px",
              marginBottom: "20px",
            }}
          >
            Real Practices We Work With.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--ash)",
              lineHeight: 1.75,
              maxWidth: "600px",
            }}
          >
            Two independent practices Primara actively manages — SEO, Google Business Profile, Google Ads, and website work. Both engagements are ongoing.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, idx) => (
        <section
          key={project.slug}
          style={{
            backgroundColor: idx % 2 === 0 ? "var(--surface)" : "var(--void)",
            borderBottom: "1px solid var(--wire)",
            padding: "clamp(48px, 7vw, 80px) 0",
          }}
        >
          <div className="mx-auto max-w-content px-6 lg:px-8">
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--smoke)",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  {project.services.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        borderRadius: "2px",
                        padding: "3px 8px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    lineHeight: 1.1,
                    marginBottom: "6px",
                  }}
                >
                  {project.client}
                </h2>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--smoke)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {project.type} · {project.location}
                </p>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ash)",
                  border: "1px solid var(--wire)",
                  borderRadius: "3px",
                  padding: "8px 16px",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                Visit Website
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Body grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(32px, 5vw, 80px)",
              }}
              className="work-detail-grid"
            >
              {/* Left: summary + result */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <p
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--smoke)",
                      marginBottom: "10px",
                    }}
                  >
                    The Practice
                  </p>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75 }}>
                    {project.practice}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--smoke)",
                      marginBottom: "10px",
                    }}
                  >
                    The Engagement
                  </p>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75 }}>
                    {project.engagement}
                  </p>
                </div>
              </div>

              {/* Right: services */}
              <div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    marginBottom: "16px",
                  }}
                >
                  What We&rsquo;re Doing
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {project.what.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.8rem" }}>▸</span>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              marginBottom: "1rem",
            }}
          >
            Your practice should be next.
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            Start with a free GBP audit — delivered in 48 hours.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
