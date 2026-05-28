import ReviewsAnimation from "./ReviewsAnimation";

/* ── ReviewsSection ────────────────────────────────────────────────────────
   Commitment / guarantee section. Communicates what clients can expect
   from Primara — no fabricated testimonials, no outcome promises.
*/

// ── Content ────────────────────────────────────────────────────────────────
const FEATURED = {
  text: "Independent practices in Florida lose patients every day — not because of the quality of care they provide, but because another practice's Google listing is more complete, more active, and more visible. That's the problem Primara was built to solve.",
  author: "Liam Costello & Gio LaRoche · Co-Founders, Primara",
};

const REVIEWS = [
  {
    text: "Every deliverable has a deadline. GBP fully configured in Week 1. Website live within 30 days. Review system installed at onboarding. You will always know what has been done and what is next.",
    author: "Our Commitment · Delivery",
  },
  {
    text: "You receive a plain-English monthly report showing your Maps ranking movement, review velocity, and website traffic. No agency jargon. No vanity metrics. If something isn't working, we tell you and we fix it.",
    author: "Our Commitment · Transparency",
  },
  {
    text: "Liam and Gio personally run every account — strategy, execution, and reporting. No junior coordinators, no offshore production, no handoffs after the sales call. The people you meet are the people doing the work.",
    author: "Our Commitment · Founder Access",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function StarIcon() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 0.5L12.39 6.26L18.72 6.92L14.1 11.09L15.45 17.32L10 14.15L4.55 17.32L5.9 11.09L1.28 6.92L7.61 6.26L10 0.5Z"
        fill="var(--gold)"
      />
    </svg>
  );
}

function FiveStars({ size = 15 }: { size?: number }) {
  return (
    <span
      style={{ display: "flex", gap: "3px", alignItems: "center" }}
      aria-label="5 out of 5 stars"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 19"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 0.5L12.39 6.26L18.72 6.92L14.1 11.09L15.45 17.32L10 14.15L4.55 17.32L5.9 11.09L1.28 6.92L7.61 6.26L10 0.5Z"
            fill="var(--gold)"
          />
        </svg>
      ))}
    </span>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 120px) 0 clamp(60px, 8vw, 100px)",
        background: "var(--void)",
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
            "radial-gradient(ellipse 50vw 45vh at 92% 4%, rgba(27,110,110,0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 45vw 40vh at 8% 96%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Decorative section number ──────────────────────────────────────── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
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
        01
      </span>

      {/* ── Inner content ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >

        {/* ── Section header ───────────────────────────────────────────────── */}
        <header style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>

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
            Our Commitment
          </div>

          {/* H2 — SplitText target */}
          <h2
            id="reviews-heading"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "clamp(24px, 2.5vw, 36px)",
              maxWidth: "14ch",
            }}
          >
            What We Guarantee.
          </h2>

          {/* Google stats row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                color: "var(--ash)",
                letterSpacing: "0.04em",
              }}
            >
              West Palm Beach, FL · Est. 2026 · Primary Care Only
            </span>
          </div>
        </header>

        {/* ── Featured review ───────────────────────────────────────────────── */}
        <div
          className="featured-review"
          style={{
            maxWidth: "800px",
            marginBottom: "clamp(56px, 7vw, 96px)",
          }}
        >
          {/* Large opening quote mark */}
          <span
            aria-hidden="true"
            style={{
              display: "block",
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontSize: "clamp(100px, 14vw, 180px)",
              lineHeight: 0.7,
              color: "var(--gold)",
              opacity: 0.2,
              marginBottom: "clamp(8px, 1vw, 16px)",
              userSelect: "none",
            }}
          >
            &#8220;
          </span>

          <blockquote
            style={{
              margin: 0,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.8vw, 34px)",
              color: "var(--chalk)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            {FEATURED.text}
          </blockquote>

          {/* Attribution */}
          <p
            className="review-attribution"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginTop: "clamp(20px, 2vw, 28px)",
            }}
          >
            — {FEATURED.author}
          </p>
        </div>

        {/* ── Three-card grid ───────────────────────────────────────────────── */}
        <div
          className="reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="review-card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                padding: "clamp(24px, 3vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gold quotation mark watermark — targeted by .review-card:hover CSS */}
              <span
                aria-hidden="true"
                className="review-quote-mark"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "20px",
                  fontFamily: "Georgia, serif",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "var(--gold)",
                  opacity: 0.15,
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "opacity 0.3s ease",
                }}
              >
                &#8220;
              </span>

              {/* Quote */}
              <blockquote
                cite="https://maps.google.com"
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "var(--chalk)",
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {review.text}
              </blockquote>

              {/* Divider */}
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "var(--wire)",
                }}
              />

              {/* Attribution */}
              <footer
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--smoke)",
                }}
              >
                {review.author}
              </footer>
            </article>
          ))}
        </div>

        {/* ── Google live reviews placeholder + link ────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Live Google Reviews widget — connect after launch */}
          <div id="google-reviews" aria-hidden="true" style={{ minHeight: "1px" }} />

          {/* hover handled by .reviews-link CSS — server component, no JS events */}
          <a
            href="/services"
            className="reviews-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "fit-content",
              paddingBottom: "2px",
            }}
          >
            Read about our service packages
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>

      {/* ── GSAP scroll animations for this section ────────────────────────── */}
      <ReviewsAnimation />
    </section>
  );
}
