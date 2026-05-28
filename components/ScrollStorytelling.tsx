'use client';

import { useEffect } from 'react';

/* ── ScrollStorytelling ────────────────────────────────────────────────────
   GSAP animation controller for all scroll-driven storytelling sections:
     1. Services pin  — .services-pin + .svc-card sequential scrub
     2. Horizontal scroll — .h-scroll-wrap + .h-scroll-track
     3. Stats counters — .stat-num[data-target][data-suffix]
     4. Magnetic pull — .svc-explore links

   All scroll animations wrapped in gsap.matchMedia() to respect
   prefers-reduced-motion. Pin sections still function without animation
   (cards are visible at rest position) so layout is not broken.

   Requires GSAP + ScrollTrigger (loaded via CDN in layout.tsx).
   Waits for window.lenis (set by AnimationProvider) before initializing
   so the Lenis → ScrollTrigger sync is active before any pins are created.
*/

export default function ScrollStorytelling() {
  useEffect(() => {
    let attempts = 0;

    function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ST = (window as any).ScrollTrigger;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).lenis;

      // Require lenis to be ready — AnimationProvider sets window.lenis
      if (!g || !ST || !lenis) {
        if (attempts++ < 80) setTimeout(init, 100);
        return;
      }

      // ── Lenis → ScrollTrigger sync (critical for pinned sections) ────────
      lenis.on('scroll', () => ST.update());

      // ── Magnetic pull on service explore links (no motion change) ────────
      // These are cursor-position interactions, not decorative animation,
      // so they run outside the matchMedia block.
      document.querySelectorAll('.svc-card').forEach((card: Element) => {
        const link = card.querySelector('.svc-explore');
        if (!link) return;

        link.addEventListener('mousemove', (e: Event) => {
          const me = e as MouseEvent;
          const rect = (link as HTMLElement).getBoundingClientRect();
          const x = me.clientX - rect.left - rect.width / 2;
          const y = me.clientY - rect.top - rect.height / 2;
          g.to(link, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: 'power2.out' });
        });

        link.addEventListener('mouseleave', () => {
          g.to(link, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
        });
      });

      // ── All scroll-driven animations — respects prefers-reduced-motion ───
      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // ── 1. Services section — no entrance animation ───────────────────
        // Removed g.from() entrance: it set cards to opacity:0 immediately,
        // and if the ScrollTrigger didn't fire reliably (which happens in
        // this dev environment), cards stayed permanently invisible.
        // Cards now render statically at full opacity — robust and obvious.

        // ── 2. Horizontal scroll — desktop only (≥768px) ──────────────────
        // On mobile, .h-scroll-wrap becomes a native horizontal snap container
        // via CSS, so we skip the GSAP pin entirely to avoid jank on iOS.
        const track = document.querySelector('.h-scroll-track') as HTMLElement | null;
        if (track && window.innerWidth >= 768) {
          ST.refresh();
          const totalWidth = track.scrollWidth - window.innerWidth;

          g.to(track, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: '.h-scroll-wrap',
              start: 'top top',
              end: '+=' + totalWidth,
              pin: true,
              scrub: 0.3,
              anticipatePin: 1,
            },
          });
        }

        // ── 3. Stats counters ──────────────────────────────────────────────
        document.querySelectorAll('.stat-num').forEach((el) => {
          const htmlEl = el as HTMLElement;
          const rawTarget = htmlEl.dataset.target ?? '0';
          const target = parseFloat(rawTarget);
          const suffix = htmlEl.dataset.suffix ?? '';
          const isDecimal = rawTarget.includes('.');
          const obj = { val: 0 };

          g.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true,
            },
            onUpdate() {
              htmlEl.textContent = isDecimal
                ? obj.val.toFixed(1) + suffix
                : Math.round(obj.val) + suffix;
            },
          });
        });

      }); // end matchMedia no-preference
    }

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }
  }, []);

  return null;
}
