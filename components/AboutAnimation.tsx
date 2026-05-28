'use client';

import { useEffect } from 'react';

/* ── AboutAnimation ────────────────────────────────────────────────────────
   GSAP scroll entrance for the About section.
   - .about-photo slides in from the left
   - .about-text direct children stagger in from the right
   Both fire when .about enters the viewport at 80%.

   H2 "split-reveal" is handled globally by TypeAnimations.

   Wrapped in gsap.matchMedia() to respect prefers-reduced-motion.
*/

export default function AboutAnimation() {
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

      const section = document.querySelector('.about');
      if (!section) return;

      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // Photo — slides in from left
        g.from('.about-photo', {
          scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
          },
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });

        // Text children — stagger in from right
        g.from('.about-text > *', {
          scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
          },
          x: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
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
