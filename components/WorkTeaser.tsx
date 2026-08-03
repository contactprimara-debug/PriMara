import Link from "next/link";

// NOTE: only verified facts — no invented deliverables or results. See
// app/work/page.tsx for the full case-study copy these summarize.
const projects = [
  {
    client: "Ghalo Mental Health",
    type: "Mental Health · Houston, TX",
    services: ["SEO", "GBP", "Google Ads"],
    blurb:
      "An active engagement — Primara manages Google Business Profile, local SEO, and Google Ads for this Houston mental health practice.",
    href: "/work#ghalo",
    url: "https://ghalomh.com",
  },
  {
    client: "Family Life Counseling Center",
    type: "Counseling · Central Florida",
    services: ["SEO", "GBP", "Website Rebuild"],
    blurb:
      "A multi-location counseling practice across Lake, Polk, and Orange Counties — Primara manages local SEO and GBP across every location, with a new website in development.",
    href: "/work#family-life",
    url: "https://familylifecounselingcenter.com",
  },
];

export default function WorkTeaser() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        padding: "clamp(64px, 8vw, 100px) clamp(24px, 8vw, 120px)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "12px",
            }}
          >
            Recent Work
          </p>
          <h2
            id="work-heading"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Real Practices We Work With.
          </h2>
        </div>
        <Link
          href="/work"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 0,
          }}
        >
          See All Work →
        </Link>
      </div>

      {/* Project cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((p) => (
          <article
            key={p.client}
            style={{
              backgroundColor: "var(--void)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              padding: "clamp(28px, 3.5vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Service tags */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {p.services.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "2px",
                    padding: "3px 7px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Client name */}
            <h3
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 400,
                color: "var(--chalk)",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {p.client}
            </h3>

            {/* Type/location */}
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "var(--smoke)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {p.type}
            </p>

            {/* Blurb */}
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--ash)",
                lineHeight: 1.7,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {p.blurb}
            </p>

            {/* Footer links */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}>
              <Link
                href={p.href}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  textDecoration: "none",
                }}
              >
                Case Study →
              </Link>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ash)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Live Site
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
