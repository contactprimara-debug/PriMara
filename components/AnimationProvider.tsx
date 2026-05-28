'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    let attempts = 0;

    function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ST = (window as any).ScrollTrigger;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Lenis = (window as any).Lenis;

      if (!g || !ST || !Lenis) {
        if (attempts++ < 60) setTimeout(init, 100);
        return;
      }

      // ── Register plugins ───────────────────────────────────────────────
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SplitText = (window as any).SplitText;
      g.registerPlugin(ST, ...(SplitText ? [SplitText] : []));

      // ── Lenis smooth scroll — always init (functional, not decorative) ──
      // duration kept low (0.6) so smoothing doesn't fight scroll-triggered pins
      // and the page doesn't feel laggy on long scrolls.
      const lenis = new Lenis({
        duration: 0.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      });

      g.ticker.add((time: number) => { lenis.raf(time * 1000); });
      g.ticker.lagSmoothing(0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = lenis;

      // ── Custom cursor — always init position tracking (functional) ──────
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');

      if (dot && ring) {
        document.addEventListener('mousemove', (e) => {
          g.set(dot, { x: e.clientX - 4, y: e.clientY - 4 });
          g.to(ring, { duration: 0.15, x: e.clientX - 20, y: e.clientY - 20 });
        });
      }

      // ── All decorative animations — respects prefers-reduced-motion ──────
      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // Cursor hover effects (decorative scale/color changes)
        if (dot && ring) {
          document.querySelectorAll('a, button, [data-cursor="link"]').forEach(el => {
            el.addEventListener('mouseenter', () => {
              g.to(ring, { scale: 1.6, borderColor: 'var(--ember)', duration: 0.3 });
              g.to(dot, { scale: 0, duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
              g.to(ring, { scale: 1, borderColor: 'var(--gold)', duration: 0.3 });
              g.to(dot, { scale: 1, duration: 0.2 });
            });
          });

          document.querySelectorAll('p, [data-cursor="text"]').forEach(el => {
            el.addEventListener('mouseenter', () => {
              g.to(ring, { width: 3, height: 80, borderRadius: 2, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
              g.to(ring, { width: 40, height: 40, borderRadius: '50%', duration: 0.3 });
            });
          });
        }

        // .reveal: single-element scroll entrances
        g.utils.toArray('.reveal').forEach((el: Element) => {
          g.from(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          });
        });

        // .reveal-stagger: staggered children entrance
        g.utils.toArray('.reveal-stagger').forEach((container: Element) => {
          g.from(Array.from(container.children), {
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
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
