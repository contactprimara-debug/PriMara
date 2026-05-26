import Link from "next/link";

// ── Pre-launch checklist ───────────────────────────────────────────────────
// □ Replace credential badges with real schools / certs / years of experience
// □ Replace bio paragraph placeholders with Liam & Gio's real philosophy
// □ Add real photos (WebP, fetchpriority="high" not needed here — below fold)
// □ Update /about page H1 to match the "Meet the Founders" heading
// ──────────────────────────────────────────────────────────────────────────

// Credential badges — update with real credentials before launch
const badges = [
  "PLACEHOLDER — Add degree or cert",
  "PLACEHOLDER — Add certification",
  "West Palm Beach, FL",
] as const;

function PhotoPlaceholder({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-3"
      aria-label={`Photo placeholder for ${name}`}
    >
      <div
        className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "#e8e2d8",
          border: "3px solid var(--color-border)",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="18"
            r="8"
            stroke="var(--color-text-muted)"
            strokeWidth="1.75"
          />
          <path
            d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16"
            stroke="var(--color-text-muted)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
        {/* Replace with:
          <Image
            src="/photos/[name-slug].webp"
            alt="[Full name], Co-Founder — Digital Marketing for Medical Practices in West Palm Beach, FL"
            fill
            className="object-cover"
          />
        */}
      </div>
      <p
        className="text-xs text-center max-w-[160px]"
        style={{
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        PHOTO: {name}
        <br />
        {description}
      </p>
    </div>
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
            <PhotoPlaceholder
              name="Liam Costello"
              description="Warm, professional, West Palm Beach office"
            />
            <PhotoPlaceholder
              name="Gio LaRoche"
              description="Warm, professional, West Palm Beach office"
            />
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
              Digital Marketing for Independent Medical Practices · West Palm Beach, FL
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
              Liam Costello and Gio LaRoche founded Primara in West Palm Beach, FL
              after watching independent primary care physicians lose patients to larger
              health systems — not because of the quality of care they provided, but
              because of digital visibility. Primara exists to level that playing field
              for physician-owned clinics who deserve to compete on merit.{" "}
              {/* Replace the sentence below with Liam & Gio's real philosophy before launch */}
              <span style={{ color: "var(--color-border)" }}>
                [ADD: 1–2 sentences about your personal philosophy and approach — ask
                Liam and Gio directly.]
              </span>
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
