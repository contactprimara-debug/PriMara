'use client';

import { useEffect, useRef } from 'react';

/* ── StatsCounter ──────────────────────────────────────────────────────────
   Counts up when the section scrolls into view.
   Uses IntersectionObserver + requestAnimationFrame — no GSAP / CDN dependency.
   Respects prefers-reduced-motion: shows final numbers instantly if set.
*/

interface Stat {
  target: string;
  suffix: string;
  label: string;
  source: string;
}

const stats: Stat[] = [
  {
    target: "77",
    suffix: "%",
    label: "Of patients search online before choosing a doctor",
    source: "PatientPop, Patient Perspectives Survey",
  },
  {
    target: "88",
    suffix: "%",
    label: "Trust online reviews as much as a personal recommendation",
    source: "BrightLocal, Local Consumer Review Survey",
  },
  {
    target: "75",
    suffix: "%",
    label: "Never scroll past Google's first page of results",
    source: "Backlinko, Google CTR Study",
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateStat(el: HTMLElement) {
      const rawTarget = el.dataset.target ?? '0';
      const target = parseFloat(rawTarget);
      const suffix = el.dataset.suffix ?? '';
      const isDecimal = rawTarget.includes('.');

      if (prefersReduced) {
        el.textContent = isDecimal
          ? target.toFixed(1) + suffix
          : Math.round(target) + suffix;
        return;
      }

      const duration = 2000;
      const startTime = performance.now();

      function step(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = eased * target;
        el.textContent = isDecimal
          ? current.toFixed(1) + suffix
          : Math.round(current) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          section.querySelectorAll<HTMLElement>('.stat-num').forEach(animateStat);
          observer.disconnect();
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
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

      {/* Stats grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Number — starts at final value; JS counts up from 0 on scroll */}
            <div
              className="stat-num"
              data-target={stat.target}
              data-suffix={stat.suffix}
              style={{
                fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(64px, 8vw, 120px)",
                color: "var(--chalk)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {stat.target}{stat.suffix}
            </div>

            {/* Divider */}
            <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />

            {/* Label */}
            <div
              style={{
                fontFamily: "var(--font-ui), system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ash)",
                lineHeight: 1.5,
              }}
            >
              {stat.label}
            </div>

            {/* Source citation */}
            <div
              style={{
                fontFamily: "var(--font-mono), 'Courier New', monospace",
                fontSize: "9px",
                letterSpacing: "0.06em",
                color: "var(--smoke)",
                lineHeight: 1.4,
                borderLeft: "1px solid var(--wire)",
                paddingLeft: "8px",
              }}
            >
              {stat.source}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
