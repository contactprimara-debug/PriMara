import Link from "next/link";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <>
      {/* ── Atmosphere layer (fixed, behind all content) ────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background: [
            "radial-gradient(ellipse 60vw 60vh at 15% 20%, rgba(27,110,110,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 50vw 50vh at 85% 80%, rgba(201,168,76,0.07) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Hero section ─────────────────────────────────────────────────── */}
      <section
        className="hero"
        aria-label="Primara — Digital Marketing for Independent Medical Practices"
        style={{
          height: "100svh",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          // Top-anchored, not centered: the content stack was already
          // running close to (or past) full viewport height on common
          // screens, so centering it silently clipped the TOP under the
          // fixed header — that's what was hiding the eyebrow badge before,
          // and what made the motto (added below it) float disconnected
          // from the rest of the stack instead of reading as part of it.
          // Anchoring to a fixed top offset means motto → eyebrow → H1 always
          // sit at the same, predictable distance from each other and from
          // the header, on every screen. Only downside: on unusually short
          // viewports the bottom (scroll indicator) can get clipped instead
          // of the top — an acceptable trade, since the top is what matters.
          alignItems: "flex-start",
        }}
      >
        {/* Content stack */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            padding: "0 clamp(24px, 8vw, 120px)",
            paddingTop: "calc(60px + env(safe-area-inset-top) + 28px)",
          }}
        >
          {/* Motto */}
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "var(--gold)",
              letterSpacing: "0.01em",
              margin: "0 0 clamp(16px, 2vw, 20px)",
            }}
          >
            Praise God.
          </p>

          {/* Eyebrow label */}
          <div
            className="hero-eyebrow"
            style={{
              display: "inline-block",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              border: "1px solid var(--wire)",
              padding: "6px 14px",
              borderRadius: "2px",
              marginBottom: "clamp(28px, 4vw, 48px)",
            }}
          >
            Healthcare Practices Only · HIPAA-Aware · No Account Managers · Nationwide
          </div>

          {/* H1 — three-line display, SplitText target */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(72px, 11vw, 148px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(24px, 3vw, 44px)",
              maxWidth: "16ch",
            }}
          >
            We Put Independent Medical Practices on the{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
              }}
            >
              Map.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--ash)",
              letterSpacing: "0.04em",
              maxWidth: "480px",
              marginBottom: "clamp(32px, 4vw, 52px)",
            }}
          >
            SEO, Google Ads, Google Business Profile, and review systems — built exclusively for independent primary care and mental health practices. Founder-led, no account managers, month-to-month.
          </p>

          {/* CTA pair */}
          <div
            className="hero-ctas"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Link
              href="/contact#contact-form"
              className="magnetic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--ember)",
                color: "#ffffff",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: "3px",
                minHeight: "52px",
                textDecoration: "none",
              }}
            >
              Get My Free GBP Audit →
            </Link>

            <Link
              href="/services"
              className="magnetic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--chalk)",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.08em",
                padding: "14px 32px",
                borderRadius: "3px",
                border: "1px solid var(--wire)",
                minHeight: "52px",
                textDecoration: "none",
              }}
            >
              See How It Works ↓
            </Link>
          </div>

          {/* Offer micro-copy */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "var(--smoke)",
              marginTop: "20px",
            }}
          >
            Free GBP audit delivered in 48 hours — completeness score, rank gap vs. top 3 competitors, 5-point action plan. No sales call required.
          </p>
        </div>

        {/* Scroll indicator — pinned to bottom center */}
        <div
          className="scroll-indicator"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            Scroll
          </span>
          <svg
            className="scroll-line"
            width="1"
            height="32"
            viewBox="0 0 1 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="32"
              stroke="var(--smoke)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      {/* Hero-specific GSAP animations */}
      <HeroAnimation />
    </>
  );
}
