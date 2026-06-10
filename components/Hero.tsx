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
        aria-label="Primara — Digital Marketing for Independent Medical Practices in Florida"
        style={{
          height: "100svh",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
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
          }}
        >
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
            Healthcare Practices Only · HIPAA-Aware · No Account Managers · Florida
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
            Independent practices in Florida deserve to be{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
              }}
            >
              found.
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
            Primara builds the digital presence independent primary care physicians and mental health practices in Florida should have had from day one &mdash; Google Business Profile, local SEO, website, and review systems that fill schedules without depending on directories, referrals, or word of mouth.
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
              href="/the-audit"
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
              Get My Free Practice Audit →
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
