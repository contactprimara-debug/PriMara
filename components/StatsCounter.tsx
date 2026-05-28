/* ── StatsCounter ──────────────────────────────────────────────────────────
   Full-width section with animated counters. Numbers count up on scroll entry.
   Counter animation wired globally in ScrollStorytelling.tsx via
   .stat-num[data-target][data-suffix].

   data-target: the number to count to (supports decimals for ratings)
   data-suffix: character appended after the number ("+", "★", etc.)
*/

interface Stat {
  target: string; // string so decimals like "4.7" work
  suffix: string;
  label: string;
  initial: string; // what renders server-side / before animation
}

const stats: Stat[] = [
  {
    target: "77",
    suffix: "%",
    label: "Of patients search online before choosing a doctor — PatientPop, Patient Perspectives Survey, 2022",
    initial: "0%",
  },
  {
    target: "88",
    suffix: "%",
    label: "Trust online reviews as much as a personal recommendation — BrightLocal, Local Consumer Review Survey, 2023",
    initial: "0%",
  },
  {
    target: "75",
    suffix: "%",
    label: "Never scroll past Google's first page of results — Backlinko, Google CTR Research, 2023",
    initial: "0%",
  },
  {
    target: "50",
    suffix: "+",
    label: "Directories submitted and monitored per practice at onboarding — Primara onboarding protocol",
    initial: "0+",
  },
];

export default function StatsCounter() {
  return (
    <section
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)",
        borderTop: "1px solid var(--wire)",
        borderBottom: "1px solid var(--wire)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Primara by the numbers"
    >
      {/* Ghost background text */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily:
            "var(--font-display), Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "clamp(200px, 30vw, 400px)",
          color: "rgba(201,168,76,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-0.04em",
        }}
      >
        Results
      </span>

      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--smoke)",
          marginBottom: "clamp(48px, 6vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            display: "block",
            width: "32px",
            height: "1px",
            background: "var(--gold)",
          }}
        />
        By the Numbers
      </div>

      {/* Stats grid — .stats-grid handles responsive 4→2 col in globals.css */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Animated number — GSAP targets this element */}
            <div
              className="stat-num"
              data-target={stat.target}
              data-suffix={stat.suffix}
              style={{
                fontFamily:
                  "var(--font-display), Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(64px, 8vw, 120px)",
                color: "var(--chalk)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {stat.initial}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "24px",
                height: "1px",
                background: "var(--gold)",
              }}
            />

            {/* Label */}
            <div
              style={{
                fontFamily: "var(--font-ui), system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                lineHeight: 1.5,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
