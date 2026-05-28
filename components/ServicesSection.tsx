import Link from "next/link";

/* ── ServicesSection ───────────────────────────────────────────────────────
   Full-detail services section — section 02.
   Editorial horizontal-list layout: visually distinct from the pinned
   2×2 card grid in ServicesPinSection (Phase 5).

   SEO rule: H3 text must exactly match the destination page H1.
   Anchor text must be the service name, not generic "Learn More".

   Animations:
   - H2 "split-reveal" → TypeAnimations (already global)
   - Service rows "reveal-stagger" → AnimationProvider (already global)
   - Explore links ".magnetic" → InteractionEffects (already global)
*/

interface Service {
  index: string;
  name: string;       // must match destination page H1
  href: string;
  tag: string;        // package/tier label
  description: string; // 2 sentences, factual, no outcome promises
}

const services: Service[] = [
  {
    index: "01",
    name: "GBP Optimization",
    href: "/services/google-business-profile",
    tag: "Local Search",
    description:
      "We configure 8–10 GBP categories (most practices have 1–2), write 30+ services in patient-search language, fill every attribute, and schedule 52 posts per year via BrightLocal. GBP is the single most important ranking factor for local search — we treat it that way.",
  },
  {
    index: "02",
    name: "Website Rebuild",
    href: "/services/medical-practice-website-design",
    tag: "Digital Presence",
    description:
      "We build a 30-page Core SEO structure mirroring your GBP categories, deployed on Vercel with all 7 GBP consistency signals verified at launch. Each page targets a specific local search term with MedicalOrganization schema markup from day one.",
  },
  {
    index: "03",
    name: "Review Generation",
    href: "/services/online-reputation-management",
    tag: "Reputation",
    description:
      "We program 10 NFC tap cards and install QR signs at checkout, waiting room, and exam rooms. Reviews rotate across Google, Yelp, and Healthgrades monthly. Every response is HIPAA-compliant and published within 48 hours.",
  },
  {
    index: "04",
    name: "Local SEO Content",
    href: "/services/local-seo-for-medical-practices",
    tag: "Content & Authority",
    description:
      "Each month we publish two pages driven by your Local Falcon rank map: a topical page when your Top 3% score lags your top competitor, a geographic page once it doesn't. Two pages per month compounds into measurable map pack movement.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-detail"
      aria-labelledby="services-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 120px) 0",
        background: "var(--void)",
        borderTop: "1px solid var(--wire)",
      }}
    >
      {/* ── Atmospheric blobs ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: [
            "radial-gradient(ellipse 55vw 50vh at 5% 50%, rgba(27,110,110,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 40vw 35vh at 95% 10%, rgba(201,168,76,0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Decorative section number ──────────────────────────────────────── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30px",
          right: "clamp(24px, 8vw, 120px)",
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "clamp(140px, 18vw, 220px)",
          lineHeight: 1,
          color: "var(--gold)",
          opacity: 0.025,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        02
      </span>

      {/* ── Inner container ───────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >

        {/* ── Section header ───────────────────────────────────────────────── */}
        <header style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "clamp(20px, 2.5vw, 32px)",
            }}
          >
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
            What We Offer
          </div>

          {/* H2 — TypeAnimations targets .split-reveal */}
          <h2
            id="services-heading"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 6vw, 88px)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: "20ch",
            }}
          >
            Digital Marketing for Medical Practices.
          </h2>
        </header>

        {/* ── Service list ─────────────────────────────────────────────────── */}
        {/* reveal-stagger: AnimationProvider staggers each row on scroll entry */}
        <div className="reveal-stagger services-list-grid">
          {services.map((svc) => (
            <div
              key={svc.index}
              className="service-row"
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr 1.5fr 180px",
                gap: "0 clamp(24px, 4vw, 56px)",
                alignItems: "start",
                padding: "clamp(28px, 3.5vw, 40px) 0",
                borderTop: "1px solid var(--wire)",
              }}
            >
              {/* Col 1: index */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "var(--gold)",
                  paddingTop: "6px",
                }}
              >
                {svc.index}
              </span>

              {/* Col 2: name + tag */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(20px, 2.2vw, 28px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 10px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.name}
                </h3>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    border: "1px solid var(--wire)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                  }}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Col 3: description */}
              <p
                style={{
                  fontFamily: "var(--font-ui), system-ui, sans-serif",
                  fontSize: "14px",
                  color: "var(--ash)",
                  lineHeight: 1.75,
                  margin: 0,
                  paddingTop: "4px",
                }}
              >
                {svc.description}
              </p>

              {/* Col 4: explore link — magnetic + svc-explore (existing hover wiring) */}
              <div style={{ paddingTop: "4px", textAlign: "right" }}>
                <Link
                  href={svc.href}
                  className="magnetic svc-explore"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                  }}
                >
                  Explore {svc.name}
                  <svg
                    className="card-arrow"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 5h12M8 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* Closing border under last row */}
          <div
            aria-hidden="true"
            style={{ borderTop: "1px solid var(--wire)", gridColumn: "1 / -1" }}
          />
        </div>

      </div>
    </section>
  );
}
