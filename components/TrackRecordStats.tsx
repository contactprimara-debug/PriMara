'use client';

import { useEffect, useRef } from 'react';

/* ── TrackRecordStats ─────────────────────────────────────────────────────
   Primara's own real, current business-scale numbers — distinct from
   StatsCounter.tsx (third-party industry research, each stat individually
   cited). These are self-reported, so instead of a per-stat citation they
   carry one shared "as of" freshness date instead — update MONTH_YEAR and
   the stats below whenever the real numbers change. Never round up
   past what's actually true; these need to be defensible if a prospect
   or competitor ever asks.

   Locations = sum of patient locations across the current client roster
   (14 + 4 + 1 + 1 + 1 = 21 as of Aug 2026) — rounded DOWN to 20+, never up.

   Deliberately no client names — see reference_primara_files memory,
   "anonymized/aggregate only" per Gio's 2026-08-17 decision. Do not turn
   these into named case studies or attributed quotes without asking again.
*/

const MONTH_YEAR = "August 2026";

interface Stat {
  target: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    target: "100",
    suffix: "+",
    label: "Physicians & Clinicians Across Our Clients",
  },
  {
    target: "20",
    suffix: "+",
    label: "Patient Locations Across Our Client Roster",
  },
];

export default function TrackRecordStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateStat(el: HTMLElement) {
      const rawTarget = el.dataset.target ?? '0';
      const target = parseFloat(rawTarget);
      const suffix = el.dataset.suffix ?? '';

      if (prefersReduced) {
        el.textContent = Math.round(target) + suffix;
        return;
      }

      const duration = 1600;
      const startTime = performance.now();

      function step(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        el.textContent = Math.round(current) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          section.querySelectorAll<HTMLElement>('.track-record-stat-num').forEach(animateStat);
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
        padding: "clamp(64px, 8vw, 100px) clamp(24px, 8vw, 120px)",
        borderTop: "1px solid var(--wire)",
        borderBottom: "1px solid var(--wire)",
        backgroundColor: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Primara's current client roster, by the numbers"
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
          fontSize: "clamp(180px, 26vw, 360px)",
          color: "rgba(201,168,76,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-0.04em",
        }}
      >
        Scale
      </span>

      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--smoke)",
          marginBottom: "clamp(16px, 2vw, 24px)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)" }} />
        Who We Work With
      </div>

      <h2
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(28px, 4vw, 44px)",
          color: "var(--chalk)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "clamp(40px, 5vw, 64px)",
          maxWidth: "20ch",
        }}
      >
        Real practices, real scale, right now.
      </h2>

      {/* Stats grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              className="track-record-stat-num"
              data-target={stat.target}
              data-suffix={stat.suffix}
              style={{
                fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(56px, 7vw, 100px)",
                color: "var(--gold)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {stat.target}{stat.suffix}
            </div>
            <div style={{ width: "24px", height: "1px", background: "var(--wire)" }} />
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
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.06em",
          color: "var(--smoke)",
          marginTop: "clamp(32px, 4vw, 48px)",
        }}
      >
        Current client roster as of {MONTH_YEAR}.
      </p>
    </section>
  );
}
