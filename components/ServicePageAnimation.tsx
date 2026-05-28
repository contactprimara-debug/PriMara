'use client';

import { useEffect } from 'react';

/* ── ServicePageAnimation ──────────────────────────────────────────────────
   Reusable hero entrance for all service / topical sub-pages.
   Targets the following class names — apply them to the hero section:
     .sp-eyebrow  — eyebrow label
     .sp-h1       — page H1
     .sp-sub      — subheadline paragraph
     .sp-ctas     — CTA button row wrapper

   The global systems handle everything else on the page:
     TypeAnimations  → .split-reveal on H2s
     AnimationProvider → .reveal and .reveal-stagger on content blocks
     InteractionEffects → .magnetic on buttons

   Wrapped in gsap.matchMedia() — no animation under prefers-reduced-motion.
*/

export default function ServicePageAnimation() {
  useEffect(() => {
    let attempts = 0;

    function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ST = (window as any).ScrollTrigger;
      if (!g || !ST) {
        if (attempts++ < 60) setTimeout(init, 100);
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SplitText = (window as any).SplitText;

      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        const tl = g.timeline({ delay: 0.15 });

        // Eyebrow
        tl.from('.sp-eyebrow', {
          y: 16,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        });

        // H1 — line-by-line if SplitText available
        const h1El = document.querySelector('.sp-h1');
        if (h1El && SplitText) {
          const split = new SplitText(h1El, { type: 'lines' });
          tl.from(
            split.lines,
            { y: 64, opacity: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out' },
            '-=0.2'
          );
        } else if (h1El) {
          tl.from('.sp-h1', { y: 64, opacity: 0, duration: 0.75, ease: 'power3.out' }, '-=0.2');
        }

        // Subheadline
        tl.from('.sp-sub', {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.35');

        // CTA pair
        tl.from('.sp-ctas', {
          y: 16,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.25');

      }); // end matchMedia
    }

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }
  }, []);

  return null;
}
