'use client';

import { useEffect } from 'react';

/* ── InteractionEffects ────────────────────────────────────────────────────
   Global GSAP interaction layer — runs on every page via layout.tsx.

   1. Page transition overlay (#page-transition)
      - On mount: if navigating from a previous page, animate the overlay out
      - On internal link click: animate overlay in, then navigate via window.location.href

   2. Magnetic pull (.magnetic)
      - CTA buttons, nav wordmark — pull toward cursor, spring back on leave

   3. Service card interactions (.svc-card)
      - mouseenter/leave: GSAP y-lift (avoids conflict with ScrollTrigger's
        xPercent tween which writes to the same CSS transform matrix)
      - .card-arrow child slides 6px right on enter, resets on leave
*/

export default function InteractionEffects() {
  useEffect(() => {
    let attempts = 0;

    function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).gsap;
      if (!g) {
        if (attempts++ < 60) setTimeout(init, 100);
        return;
      }

      // ── 1. Page transition ───────────────────────────────────────────────
      const ptDiv = document.getElementById('page-transition');
      if (ptDiv) {
        // If we just navigated here from an internal link, slide the overlay out
        if (sessionStorage.getItem('pt') === '1') {
          sessionStorage.removeItem('pt');
          g.set(ptDiv, { scaleY: 1, transformOrigin: 'bottom', pointerEvents: 'none' });
          g.to(ptDiv, {
            scaleY: 0,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.1,
          });
        }

        // Intercept all internal anchor clicks
        document.addEventListener('click', (e: MouseEvent) => {
          const anchor = (e.target as Element).closest('a');
          if (!anchor) return;

          const href = anchor.getAttribute('href');
          // Skip: external, mailto/tel, hash-only, or new-tab links
          if (
            !href ||
            href.startsWith('http') ||
            href.startsWith('//') ||
            href.startsWith('mailto') ||
            href.startsWith('tel') ||
            href.startsWith('#') ||
            anchor.target === '_blank'
          ) return;

          e.preventDefault();
          sessionStorage.setItem('pt', '1');
          g.set(ptDiv, { scaleY: 0, transformOrigin: 'top', pointerEvents: 'all' });
          g.to(ptDiv, {
            scaleY: 1,
            duration: 0.4,
            ease: 'power3.in',
            onComplete() {
              window.location.href = href;
            },
          });
        });
      }

      // ── 2. Magnetic pull ─────────────────────────────────────────────────
      document.querySelectorAll('.magnetic').forEach((el) => {
        el.addEventListener('mousemove', (e: Event) => {
          const me = e as MouseEvent;
          const rect = (el as HTMLElement).getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (me.clientX - centerX) * 0.3;
          const deltaY = (me.clientY - centerY) * 0.3;
          g.to(el, { x: deltaX, y: deltaY, duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          g.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
      });

      // ── 3. Service card hover ────────────────────────────────────────────
      // y-lift via GSAP (not CSS transform) avoids conflict with ScrollTrigger's
      // xPercent scrub which already owns the transform matrix on .svc-card
      document.querySelectorAll('.svc-card').forEach((card) => {
        const arrow = card.querySelector('.card-arrow');

        card.addEventListener('mouseenter', () => {
          g.to(card, { y: -4, duration: 0.3, ease: 'power2.out' });
          if (arrow) g.to(arrow, { x: 6, duration: 0.25, ease: 'power2.out' });
        });

        card.addEventListener('mouseleave', () => {
          g.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
          if (arrow) g.to(arrow, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    }

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }
  }, []);

  return null;
}
