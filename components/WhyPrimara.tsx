// ── Pre-launch checklist ───────────────────────────────────────────────────
// □ Update credential badges with real certifications (Google Partner, etc.)
// □ Add any platform certifications Liam & Gio hold
// ──────────────────────────────────────────────────────────────────────────

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="var(--ember)" strokeWidth="1.75" />
        <path d="M5 24c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Independent Healthcare Practices Only.",
    body: "Primara works exclusively with independently owned primary care practices and mental health practices. No hospital systems, no corporate chains, no PE-backed groups. We serve two niches and know both deeply — because serving everyone poorly is not a business model.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="18" rx="2.5" stroke="var(--ember)" strokeWidth="1.75" />
        <path d="M4 12h20" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M9 4v4M19 4v4" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M9 17h4M15 17h4" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Deadlines, Not Timelines.",
    body: "Every deliverable has a deadline. GBP fully configured in Week 1. Website live within 30 days. Review system installed at onboarding. You will always know what has been done and what is next.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7.5v7c0 6.5 4.5 12.5 10 14 5.5-1.5 10-7.5 10-14v-7L14 3z" stroke="var(--ember)" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M9.5 14l3 3 6-6" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Plain-English Reporting.",
    body: "You receive a plain-English monthly report showing your Maps ranking movement, review velocity, and website traffic. No agency jargon. No vanity metrics. If something isn't working, we tell you and we fix it.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="var(--ember)" strokeWidth="1.75" />
        <path d="M9 14l3.5 3.5L20 10" stroke="var(--ember)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Founder-Led, Every Engagement.",
    body: "Liam and Gio personally run every account. No junior coordinators, no offshore production, no handoffs after the sales call. The people you meet are the people doing the work.",
  },
] as const;

const badges = [
  "Liam Costello, Co-Founder",
  "Gio LaRoche, Co-Founder",
  "West Palm Beach, FL",
  "Primary Care & Mental Health",
] as const;

export default function WhyPrimara() {
  return (
    <section
      aria-labelledby="why-primara-heading"
      className="py-24 cv-auto"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest font-medium"
            style={{ color: "var(--ember)", fontFamily: "var(--font-mono)" }}
          >
            Why Practices Choose Us
          </p>
          <h2
            id="why-primara-heading"
            className="font-serif font-bold text-balance"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-text)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Why Independent Practices Choose Primara
          </h2>
        </div>

        {/* ── 2×2 Card Grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col gap-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover-lift"
              style={{
                backgroundColor: "var(--color-card)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0"
                style={{ backgroundColor: "rgba(232,97,26,0.1)" }}
                aria-hidden="true"
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="font-serif font-bold leading-snug"
                style={{
                  fontSize: "1.15rem",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className="leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)" }}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>

        {/* ── Credential Badges ── */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-3"
          role="list"
          aria-label="Credentials and identifiers"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              role="listitem"
              className="text-sm font-medium"
              style={{
                border: "1.5px solid var(--color-primary)",
                color: "var(--color-primary)",
                borderRadius: "999px",
                padding: "10px 20px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.03em",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
