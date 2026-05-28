'use client';

import { useEffect } from 'react';

/* ── TypeAnimations ────────────────────────────────────────────────────────
   Wires all type-system animations globally for the page:
     1. `.split-reveal` → H2 character reveal (rotateX stagger)
     2. `.pull-quote p` → word-by-word reveal on scroll

   Add class="split-reveal" to any H2 element to opt into the animation.
   PullQuote.tsx uses `.pull-quote p` automatically.

   All animations wrapped in gsap.matchMedia() to respect
   prefers-reduced-motion. Users with that preference see content
   immediately without any transform/opacity changes.

   Requires: GSAP + ScrollTrigger + SplitText (loaded via CDN in layout.tsx)
*/

export default function TypeAnimations() {
  useEffect(() => {
    let attempts = 0;

    function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ST = (window as any).ScrollTrigger;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SplitText = (window as any).SplitText;

      if (!g || !ST || !SplitText) {
        if (attempts++ < 60) setTimeout(init, 100);
        return;
      }

      const mm = g.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // ── H2 split-reveal (chars + 3D rotate) ───────────────────────────
        document.querySelectorAll('.split-reveal').forEach((el) => {
          const split = new SplitText(el, { type: 'chars,words' });
          g.from(split.chars, {
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
            opacity: 0,
            y: 40,
            rotateX: -40,
            stagger: 0.025,
            duration: 0.5,
            ease: 'back.out(1.5)',
            transformOrigin: '0% 50%',
          });
        });

        // ── Pull quote word reveal ─────────────────────────────────────────
        g.utils.toArray('.pull-quote p').forEach((el: Element) => {
          const split = new SplitText(el, { type: 'words' });
          g.from(split.words, {
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
            },
            opacity: 0,
            y: 24,
            stagger: 0.04,
            duration: 0.6,
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
