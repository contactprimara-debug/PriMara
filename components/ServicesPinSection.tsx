import Link from "next/link";

const services = [
  {
    index: "01",
    name: "GBP Optimization",
    description:
      "Full Google Business Profile buildout, categories, services, 52-week posts, photo session, and review system installation.",
    href: "/services/google-business-profile",
  },
  {
    index: "02",
    name: "Website Rebuild",
    description:
      "Core 30 SEO architecture, built in Lovable, deployed on Vercel. Mobile-first, fast, and designed to rank.",
    href: "/services/medical-practice-website-design",
  },
  {
    index: "03",
    name: "Review Generation",
    description:
      "NFC tap cards, QR signs, and HIPAA-compliant response management. Systems that get reviews on autopilot.",
    href: "/services/online-reputation-management",
  },
  {
    index: "04",
    name: "Monthly SEO Content",
    description:
      "Two new pages per month driven by your Local Falcon rank map. Topical authority that compounds over 12 months.",
    href: "/services/local-seo-for-medical-practices",
  },
];

export default function ServicesPinSection() {
  return (
    <section
      className="services-pin"
      id="services"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="services-pin-inner"
        style={{
          width: "100%",
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >
        {/* Section label */}
        <div
          className="services-label"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--smoke)",
            border: "1px solid var(--wire)",
            display: "inline-block",
            padding: "5px 12px",
            borderRadius: "2px",
            marginBottom: "clamp(32px, 4vw, 52px)",
          }}
        >
          Our Services
        </div>

        {/* Service cards grid */}
        <div
          className="services-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.index}
              className="svc-card"
              data-index={svc.index}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--wire)",
                padding: "32px",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Ghost index number — .card-num targeted by hover CSS */}
              <span
                aria-hidden="true"
                className="card-num"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "20px",
                  fontFamily:
                    "var(--font-display), Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "rgba(201,168,76,0.08)",
                  opacity: 0.04,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {svc.index}
              </span>

              {/* Service name */}
              <h3
                style={{
                  fontFamily:
                    "var(--font-display), Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  color: "var(--chalk)",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {svc.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-ui), system-ui, sans-serif",
                  fontSize: "14px",
                  color: "var(--ash)",
                  lineHeight: 1.7,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {svc.description}
              </p>

              {/* CTA — magnetic pull wired by ScrollStorytelling.tsx */}
              <Link
                href={svc.href}
                className="svc-explore"
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
                  marginTop: "8px",
                  width: "fit-content",
                }}
              >
                Explore
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
          ))}
        </div>
      </div>
    </section>
  );
}
