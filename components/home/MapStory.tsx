"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/* The big idea for Primara: the map pack. When a patient searches "doctor near me",
   Google shows three practices. Everyone else is off the map.
   One sticky grid (a 7x7 rank scan around a practice, the same view our rank tracker
   gives) solves itself as the visitor scrolls the copy beside it.
   The grid is labelled Example everywhere. Numbers are illustrative, never a client result.
   Motion: text writes only, one rAF per scroll frame, off under prefers-reduced-motion
   (the grid then sits on its final state and the steps stack normally). */

const N = 7;
const CENTER = (N - 1) / 2;

function cellRank(ix: number, p: number) {
  const x = ix % N;
  const y = Math.floor(ix / N);
  const d = Math.hypot(x - CENTER, y - CENTER); // 0 .. ~4.2
  const start = 11 + d * 3.2; // today: buried
  const end = 1 + Math.max(0, d - 0.9) * 1.5; // after: top three close to the practice, 4 to 6 at the edge
  const e = p * p * (3 - 2 * p);
  return Math.max(1, Math.round(start + (end - start) * e));
}

function band(rank: number) {
  if (rank <= 3) return "top";
  if (rank <= 10) return "mid";
  return "low";
}

const STEPS = [
  {
    kicker: "Healthcare marketing for independent medical practices",
    h: "Be one of the three.",
    body: "A patient two miles away searches for a doctor. Google shows three practices on the map. Everyone else is a scroll away.",
    h1: true,
  },
  {
    kicker: "What we change",
    h: "We fix what Google reads.",
    list: [
      "Your Google profile: complete, posted to every week",
      "Your website: fast, and readable by Google and AI search",
      "Your reviews: every one answered, by us",
    ],
  },
  {
    kicker: "What you see",
    h: "Then you watch it move.",
    body: "We scan your map block by block and send the real numbers every week. Calls and booked visits first.",
    cta: true,
  },
];

export default function MapStory() {
  const wrap = useRef<HTMLElement>(null);
  const cells = useRef<(HTMLSpanElement | null)[]>([]);
  const status = useRef<HTMLParagraphElement>(null);
  const last = useRef(-1);

  useEffect(() => {
    const root = wrap.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const paint = (p: number) => {
      const q = Math.round(p * 100) / 100;
      if (q === last.current) return;
      last.current = q;
      let top = 0;
      cells.current.forEach((el, i) => {
        if (!el) return;
        const r = cellRank(i, p);
        el.textContent = r > 19 ? "20+" : String(r);
        const b = band(r);
        if (el.dataset.b !== b) el.dataset.b = b;
        if (r <= 3) top++;
      });
      if (status.current) {
        status.current.textContent =
          top === 0
            ? "Example scan: not in the top three anywhere nearby"
            : `Example scan: top three in ${top} of 49 blocks`;
      }
    };

    if (reduce) {
      root.classList.add("hm-static");
      paint(1);
      return;
    }
    paint(0);
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = root.getBoundingClientRect();
        const total = r.height - window.innerHeight * 0.7;
        const p = Math.min(1, Math.max(0, (-r.top + window.innerHeight * 0.05) / Math.max(1, total)));
        paint(p);
        root.style.setProperty("--p", String(p));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrap} className="hm-top" aria-label="How Primara gets a practice into the top three on the map">
      <div className="hm-top-grid">
        <div className="hm-board" aria-hidden="false">
          <div className="hm-board-head">
            <span className="hm-dot" aria-hidden="true" />
            <span>&ldquo;doctor near me&rdquo;</span>
            <span className="hm-example">Example</span>
          </div>
          <div className="hm-grid" role="img" aria-label="Example map scan. Numbers show where the practice ranks block by block. They start low and climb into the top three as the page scrolls.">
            {Array.from({ length: N * N }, (_, i) => (
              <span
                key={i}
                ref={(el) => {
                  cells.current[i] = el;
                }}
                className={i === (N * N - 1) / 2 ? "hm-cell hm-me" : "hm-cell"}
                data-b="low"
              >
                20+
              </span>
            ))}
          </div>
          <p ref={status} className="hm-status" aria-live="off">
            Example scan: not in the top three anywhere nearby
          </p>
        </div>

        <div className="hm-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="hm-step">
              <p className="hm-kicker">{s.kicker}</p>
              {s.h1 ? <h1 className="hm-h">{s.h}</h1> : <h2 className="hm-h hm-h2">{s.h}</h2>}
              {s.body && <p className="hm-body">{s.body}</p>}
              {s.list && (
                <ul className="hm-list">
                  {s.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
              {(i === 0 || s.cta) && (
                <div className="hm-ctas">
                  <Link
                    prefetch={false}
                    href="/contact#contact-form"
                    className="hm-btn hm-btn-gold"
                    data-cta={i === 0 ? "home-hero-audit" : "home-map-audit"}
                  >
                    Get my free audit
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hm-btn hm-btn-line"
                    data-cta={i === 0 ? "home-hero-call" : "home-map-call"}
                  >
                    <span className="nw">Call {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              )}
              {i === 0 && <p className="hm-fine">Free. Done by a co-founder, not an account manager.</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
