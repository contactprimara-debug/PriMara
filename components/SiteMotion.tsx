'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { STANDALONE_ROUTES } from '@/lib/siteConfig';

/* Sitewide motion layer (card #846): carries the homepage's feel to every other
   template without touching their markup. Only transform / translate / opacity
   animate. Content is never hidden until JS runs, and only elements below the
   fold at load are pre-hidden, so there is no layout shift and no invisible text
   if the script fails. Honors prefers-reduced-motion. Homepage has its own motion. */
export default function SiteMotion() {
  const path = usePathname() || '/';
  const skip = path === '/' || path.startsWith('/command-center') || STANDALONE_ROUTES.includes(path);

  useEffect(() => {
    if (skip) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];
    const html = document.documentElement;
    html.classList.add('sm-on');
    cleanups.push(() => html.classList.remove('sm-on'));
    if (reduce) return () => cleanups.forEach((f) => f());

    const start = () => {
      /* reveals: below-the-fold headings, cards, list rows */
      const sel = 'main h2, main h3, main li, main blockquote, main figure, main table, main details, main [class*="card"], main form';
      const vh = window.innerHeight;
      const targets = Array.from(document.querySelectorAll<HTMLElement>(sel)).filter((el) => {
        if (el.closest('[data-rv],.reveal,.rh,[class*="pin"],[class*="scroll"]')) return false;
        if (el.style.opacity || el.closest('[style*="opacity"]')) return false;
        if (el.parentElement && el.parentElement.closest('.sm-pre')) return false; // nested: parent reveals it
        return el.getBoundingClientRect().top > vh * 0.95;
      });
      const io = new IntersectionObserver(
        (ents) => ents.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add('sm-in'); io.unobserve(en.target); }
        }),
        { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
      );
      targets.forEach((el, i) => {
        el.classList.add('sm-pre');
        el.style.setProperty('--smd', `${(i % 4) * 70}ms`);
        io.observe(el);
      });
      cleanups.push(() => { io.disconnect(); targets.forEach((el) => el.classList.remove('sm-pre', 'sm-in')); });

      /* shine + magnetic on gold / orange buttons */
      const isBtn = (el: HTMLElement) => {
        const c = getComputedStyle(el).backgroundColor;
        return c === 'rgb(201, 168, 76)' || c === 'rgb(201, 77, 12)';
      };
      const btns = Array.from(document.querySelectorAll<HTMLElement>('main a, main button')).filter(isBtn);
      const fine = window.matchMedia('(hover: hover)').matches;
      btns.forEach((b) => {
        b.classList.add('sm-btn');
        if (!fine) return;
        const mv = (e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          b.style.setProperty('--smx', `${(e.clientX - (r.left + r.width / 2)) * 0.2}px`);
          b.style.setProperty('--smy', `${(e.clientY - (r.top + r.height / 2)) * 0.3}px`);
        };
        const lv = () => { b.style.setProperty('--smx', '0px'); b.style.setProperty('--smy', '0px'); };
        b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', lv);
      });
    };
    const idle = (window as unknown as { requestIdleCallback?: (f: () => void) => number }).requestIdleCallback;
    const t = idle ? idle(start) : window.setTimeout(start, 300);
    cleanups.push(() => { if (!idle) clearTimeout(t); });

    /* scroll thread */
    const th = document.getElementById('sm-thread-p') as unknown as SVGPathElement | null;
    let raf = 0;
    const tick = () => {
      raf = 0;
      if (!th) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      th.style.strokeDashoffset = String(1 - (max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', on, { passive: true });
    on();
    cleanups.push(() => window.removeEventListener('scroll', on));

    return () => cleanups.forEach((f) => f());
  }, [skip, path]);

  if (skip) return null;
  return (
    <>
      <div className="sm-glow sm-glow-a" aria-hidden="true" />
      <div className="sm-glow sm-glow-b" aria-hidden="true" />
      <svg className="sm-thread" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
        <path id="sm-thread-p" d="M50 0 C 90 120, 10 220, 50 340 S 90 560, 50 680 S 10 880, 50 1000" pathLength="1" />
      </svg>
    </>
  );
}
