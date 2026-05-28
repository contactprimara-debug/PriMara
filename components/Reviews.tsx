import { siteConfig } from "@/lib/siteConfig";

// ── Swap these out once you have real Google reviews ──────────────────────────
const reviews: { quote: string; name: string }[] = [
  {
    quote:
      "PLACEHOLDER — paste your first real Google review here (2–4 sentences). Do not launch with this text.",
    name: "Reviewer A",
  },
  {
    quote:
      "PLACEHOLDER — paste your second real Google review here (2–4 sentences). Do not launch with this text.",
    name: "Reviewer B",
  },
  {
    quote:
      "PLACEHOLDER — paste your third real Google review here (2–4 sentences). Do not launch with this text.",
    name: "Reviewer C",
  },
];

// Replace with your actual Google Maps listing URL after claiming the profile
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Primara+West+Palm+Beach+FL";
// ─────────────────────────────────────────────────────────────────────────────

function FilledStar() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#F4B942"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.26 6.62l5.35-.78L10 1z" />
    </svg>
  );
}

function FiveStars() {
  return (
    <span className="flex gap-0.5" aria-label="Five out of five stars">
      {[...Array(5)].map((_, i) => (
        <FilledStar key={i} />
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
      role="img"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-24 cv-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* ── Heading ── */}
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="reviews-heading"
            className="font-serif font-bold text-balance"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-text)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            Real reviews from real medical practices in Florida.
          </p>
        </div>

        {/* ── Review cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="review-card flex flex-col gap-4 rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 hover-lift"
              style={{
                backgroundColor: "var(--color-card)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              {/* Stars */}
              <FiveStars />

              {/* Quote */}
              <blockquote
                className="flex-1 italic leading-relaxed"
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer
                className="flex items-center justify-between"
                style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}
              >
                <span>
                  <strong style={{ color: "var(--color-text)" }}>
                    {review.name}
                  </strong>
                  {" · "}Google Review
                </span>
                <GoogleG />
              </footer>
            </article>
          ))}
        </div>

        {/* ── Google Reviews widget placeholder ── */}
        {/* Live Google Reviews widget — connect after launch */}
        {/* min-height reserves space so the widget load doesn't cause CLS */}
        <div
          id="google-reviews"
          style={{ marginTop: "24px", minHeight: "1px" }}
          aria-hidden="true"
        />

        {/* ── See all reviews link ── */}
        <div className="mt-6 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
          >
            See all reviews on Google
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div
        className="mt-16"
        style={{ backgroundColor: "var(--color-primary)" }}
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
            Primara is now accepting new clients in{" "}
            {siteConfig.city}.
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
              <path d="M3 2.5h2.5L6.5 5.5l-1.5 1.5a8 8 0 003.5 3.5L10 9l3 1v2.5A1.5 1.5 0 0111.5 14C5.7 14 1 9.3 1 3.5A1.5 1.5 0 013 2z" fill="white"/>
            </svg>
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
