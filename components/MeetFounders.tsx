import Link from "next/link";

// ── Pre-launch checklist ───────────────────────────────────────────────────
// □ Replace credential badges with real schools / certs / years of experience
// □ Replace bio paragraph placeholders with Liam & Gio's real philosophy
// □ Add real photos (WebP, fetchpriority="high" not needed here — below fold)
// □ Update /about page H1 to match the "Meet the Founders" heading
// ──────────────────────────────────────────────────────────────────────────

// Positioning badges
const badges = [
  "Independent Practices Only",
  "Direct Founder Access",
  "Florida",
] as const;

function FounderPhoto({
  name,
  slug,
}: {
  name: string;
  slug: "liam" | "gio";
}) {
  return (
    <figure
      className="flex flex-col items-center gap-3"
      style={{ margin: 0 }}
    >
      <div
        className="relative w-40 h-40 overflow-hidden"
        style={{
          border: "1px solid var(--wire)",
          borderRadius: "4px",
          background: "var(--surface-2)",
        }}
      >
        <img
          src={`/founders/${slug}-480.jpg`}
          srcSet={`/founders/${slug}-480.jpg 480w, /founders/${slug}-800.jpg 800w`}
          sizes="160px"
          alt={`${name} — Co-Founder, Primara`}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <figcaption
        className="text-center"
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--smoke)",
        }}
      >
        {name}
      </figcaption>
    </figure>
  );
}

export default function MeetFounders() {
  return (
    <section
      aria-labelledby="founders-heading"
      className="py-24 cv-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">

        {/* ── Eyebrow ── */}
        <p
          className="mb-3 text-xs uppercase tracking-widest font-medium text-center"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
        >
          The People Behind Primara
        </p>

        {/* ── Two-column layout: photos left, bio right ── */}
        {/* Mobile: bio first (order-2 → order-1), photos below */}
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── LEFT: photos ── */}
          <div
            className="flex justify-center gap-8 sm:gap-12"
            aria-label="Founders of Primara"
          >
            <FounderPhoto name="Liam Costello" slug="liam" />
            <FounderPhoto name="Gio LaRoche" slug="gio" />
          </div>

          {/* ── RIGHT: bio ── */}
          <div className="flex flex-col gap-6">

            {/* H2 */}
            <h2
              id="founders-heading"
              className="font-serif font-bold text-balance"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--color-text)",
                fontFamily: "var(--font-fraunces)",
              }}
            >
              Meet Liam Costello &amp; Gio LaRoche,
              Co-Founders of Primara
            </h2>

            {/* Credential sub-header */}
            <p
              className="font-semibold"
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Digital Marketing for Independent Medical Practices · Florida
            </p>

            {/* Credential badges */}
            <div
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Credentials"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  role="listitem"
                  style={{
                    border: "1.5px solid var(--color-primary)",
                    color: "var(--color-primary)",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p
              className="leading-relaxed"
              style={{ fontSize: "1rem", color: "var(--color-text-muted)" }}
            >
              Liam Costello and Gio LaRoche founded Primara in Florida after watching
              independent primary care physicians lose patients to larger health systems
              — not because of the quality of care they provided, but because of digital
              visibility. Primara exists to level that playing field for physician-owned
              clinics who deserve to compete on merit. Every engagement runs through a
              co-founder from kickoff to monthly reporting — no junior accounts team, no
              jargon, no handoffs.
            </p>

            {/* Link to /about */}
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "var(--color-primary)", fontSize: "0.95rem" }}
            >
              Meet Liam &amp; Gio in full
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
