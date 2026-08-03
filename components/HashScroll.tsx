'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ── HashScroll ────────────────────────────────────────────────────────────
   Every #anchor CTA on the site (hero → /contact#contact-form, work teaser →
   /work#ghalo, package pages → #inquire, contact page's own "Send a
   Message" button → #contact-form) previously landed with an instant browser
   jump — jarring next to Lenis's eased scroll everywhere else on the site.

   This intercepts both cases and replays them as a Lenis-eased glide:
     1. Arriving at a page with a #hash already in the URL (cross-page nav —
        the browser/Next.js router jumps instantly before we can react, so we
        reset to top first and glide down, same as a same-page click would).
     2. Clicking a same-page `<a href="#id">` link — prevented outright and
        replaced with the Lenis scroll before any native jump happens.
*/

function scrollToHash(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.2 });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return true;
}

export default function HashScroll() {
  const pathname = usePathname();

  // ── Case 1: landed on a page with #hash already in the URL ──────────────
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));

    let cancelled = false;
    let attempts = 0;

    function run() {
      if (cancelled) return;
      if (!document.getElementById(id)) {
        if (attempts++ < 40) requestAnimationFrame(run);
        return;
      }
      // Neutralize whatever instant jump the browser/router already did so
      // every hash landing plays as one deliberate glide, not a snap-then-ease.
      window.scrollTo(0, 0);
      requestAnimationFrame(() => scrollToHash(id));
    }

    const t = setTimeout(run, 120);
    return () => { cancelled = true; clearTimeout(t); };
  }, [pathname]);

  // ── Case 2: clicking a same-page `#anchor` link ──────────────────────────
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      let url: URL;
      try {
        url = new URL(link.href, window.location.origin);
      } catch {
        return;
      }
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const id = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(id)) return;

      e.preventDefault();
      scrollToHash(id);
      history.pushState(null, '', url.hash);
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
