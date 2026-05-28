'use client';

import { useEffect } from 'react';

export default function HeroAnimation() {
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SplitText = (window as any).SplitText;

      // No-op: hero entrance is handled by pure CSS animations in globals.css
      // (.hero-eyebrow, .hero-h1, .hero-sub, .hero-ctas all have staggered
      //  fade-up animations with delays matching the preloader exit at ~1.9s).
      // CSS is bulletproof — no GSAP timeline fragility, no tween conflicts.
      //
      // The nav was previously hidden by GSAP and revealed after the preloader;
      // nav now just renders normally (preloader covers it during the 1.8s).
      //
      // Reference SplitText import kept for future use:
      void SplitText;
      // (No GSAP scroll-parallax on the hero — it was causing the H1 to
      //  disappear as soon as the user scrolled. The hero stays visible until
      //  scrolled past, then naturally goes off-screen.)
    }

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }
  }, []);

  return null;
}
