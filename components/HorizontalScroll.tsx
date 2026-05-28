import Link from "next/link";

/* ── HorizontalScroll ──────────────────────────────────────────────────────
   Converts vertical scroll to horizontal movement via GSAP + ScrollTrigger.
   Animation is wired in ScrollStorytelling.tsx — this is structural/visual only.

   Track layout: 5 items × 60vw + 4vw gap.
   GSAP translates the track from x:0 to x:-totalWidth as user scrolls.

   Items with `href` render as Link wrappers — Foundation and Visibility
   package cards each link to their detail page.
*/

interface Item {
  eyebrow: string;
  headline: string;
  subline: string;
  detail?: string;
  accent?: string; // optional large bg character
  href?: string;
}

const items: Item[] = [
  {
    eyebrow: "Foundation Package",
    headline: "$750",
    subline: "per month",
    detail:
      "$1,500 one-time setup · GBP Optimization · Local SEO · Monthly Reporting",
    accent: "01",
    href: "/packages/foundation",
  },
  {
    eyebrow: "Visibility Package",
    headline: "$1,800",
    subline: "per month",
    detail:
      "$1,500 one-time setup · GBP + Website + Reviews + SEO Content · Full Coverage",
    accent: "02",
    href: "/packages/visibility",
  },
  {
    eyebrow: "GBP Optimization",
    headline: "8–10",
    subline: "categories configured",
    detail:
      "Most practices start with 1–2 GBP categories. We build to 8–10, add 30+ services in patient-search language, and schedule 52 posts at onboarding.",
    accent: "↑",
  },
  {
    eyebrow: "Website Rebuild",
    headline: "30",
    subline: "pages at launch",
    detail:
      "Core 30 SEO architecture — every page targets a specific local search term. All 7 GBP consistency signals verified. Google Search Console submitted day one.",
    accent: "✦",
  },
  {
    eyebrow: "Local SEO",
    headline: "2",
    subline: "new pages per month",
    detail:
      "Each month we publish two pages driven by your Local Falcon rank map: topical pages build relevance, geographic pages extend your radius. Two compounds faster.",
    accent: "03",
  },
];

function CardBody({ item }: { item: Item }) {
  return (
    <>
      {/* Ghost accent character */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "24px",
          fontFamily:
            "var(--font-display), Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "clamp(120px, 16vw, 200px)",
          color: "rgba(201,168,76,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {item.accent}
      </span>

      {/* Top: eyebrow + (link cue if clickable) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          borderBottom: "1px solid var(--wire)",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--smoke)",
          }}
        >
          {item.eyebrow}
        </span>
        {item.href && (
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            View details →
          </span>
        )}
      </div>

      {/* Center: main stat / price */}
      <div>
        <div
          style={{
            fontFamily:
              "var(--font-display), Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(56px, 9vw, 120px)",
            color: "var(--chalk)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}
        >
          {item.headline}
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "13px",
            color: "var(--gold)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {item.subline}
        </div>
      </div>

      {/* Bottom: detail */}
      <p
        style={{
          fontFamily: "var(--font-ui), system-ui, sans-serif",
          fontSize: "13px",
          color: "var(--ash)",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "380px",
          borderTop: "1px solid var(--wire)",
          paddingTop: "20px",
        }}
      >
        {item.detail}
      </p>
    </>
  );
}

export default function HorizontalScroll() {
  return (
    <section
      className="h-scroll-wrap"
      aria-label="Packages and results"
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Section label — fixed left, out of flow visually */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "clamp(24px, 4vw, 48px)",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "left center",
          fontFamily: "system-ui, sans-serif",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--smoke)",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Packages &amp; Results
      </div>

      {/* Scrolling track — GSAP translates this horizontally */}
      <div
        className="h-scroll-track"
        style={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          paddingLeft: "clamp(80px, 10vw, 160px)",
          paddingRight: "10vw",
          gap: "4vw",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => {
          const cardStyle = {
            width: "60vw",
            height: "70vh",
            flexShrink: 0,
            background: i % 2 === 0 ? "var(--surface)" : "var(--surface-2)",
            border: item.href ? "1px solid var(--gold)" : "1px solid var(--wire)",
            borderRadius: "4px",
            padding: "clamp(32px, 4vw, 56px)",
            display: "flex",
            flexDirection: "column" as const,
            justifyContent: "space-between" as const,
            position: "relative" as const,
            overflow: "hidden" as const,
            textDecoration: "none" as const,
            color: "inherit",
            transition: "border-color 0.3s ease",
          };

          if (item.href) {
            return (
              <Link
                key={i}
                href={item.href}
                className="h-scroll-item h-scroll-card-link"
                style={cardStyle}
              >
                <CardBody item={item} />
              </Link>
            );
          }

          return (
            <div key={i} className="h-scroll-item" style={cardStyle}>
              <CardBody item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
