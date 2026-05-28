'use client';

import { useEffect } from 'react';

/* ── ReviewsAnimation ──────────────────────────────────────────────────────
   Client-only GSAP entrance for the reviews section.
   - Featured review blockquote: fades up on scroll entry
   - H2 "Trusted by Florida." is handled globally by TypeAnimations (.split-reveal)
   - Card grid is handled globally by AnimationProvider (.reveal-stagger)

   Wrapped in gsap.matchMedia() to respect prefers-reduced-motion.
*/

export default function ReviewsAnimation() {
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

      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // Featured review blockquote
        const featured = document.querySelector('.featured-review blockquote');
        if (featured) {
          g.from(featured, {
            scrollTrigger: {
              trigger: '.featured-review',
              start: 'top 80%',
            },
            opacity: 0,
            y: 48,
            duration: 1,
            ease: 'power3.out',
          });
        }

        // Featured review attribution — slight delay after the quote
        const attribution = document.querySelector('.featured-review .review-attribution');
        if (attribution) {
          g.from(attribution, {
            scrollTrigger: {
              trigger: '.featured-review',
              start: 'top 75%',
            },
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.3,
          });
        }

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
