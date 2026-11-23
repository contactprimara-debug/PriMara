'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* Scroll layer for key templates (/services/*, /locations/*, /about), Gio 2026-11-23.
   Same language as the homepage: a layered gold/white star field behind the page (parallax with
   scroll + cursor), a light sweep across each section headline as it scrolls in, a hairline that
   draws across each section, and the page hero lifting away. Pointer-events none, fixed canvas
   inserted after load + idle (no layout shift, no LCP cost). transform/opacity only. Static under
   prefers-reduced-motion. Never touches forms, links or tracking. */
const MATCH = (p: string) => p === '/about' || p.startsWith('/services/') || p.startsWith('/locations/');

export default function TemplateScroll() {
  const path = usePathname() || '/';
  const on = MATCH(path);
  useEffect(() => {
    if (!on) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 700;
    const cleanups: Array<() => void> = [];
    let idle = 0, started = false;
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const start = () => {
      if (started) return; started = true;
      const main = document.querySelector('main');
      if (!main) return;
      /* ── sweep + hairline targets ── */
      const h2s = Array.from(main.querySelectorAll<HTMLElement>('h2')).slice(0, 30);
      h2s.forEach((h) => h.classList.add('tp-sweep'));
      const secs = Array.from(main.querySelectorAll<HTMLElement>(':scope > section, :scope > div > section')).slice(0, 24).filter((s) => getComputedStyle(s).position === 'static' || getComputedStyle(s).position === 'relative');
      secs.forEach((s) => { s.classList.add('tp-sec'); if (getComputedStyle(s).position === 'static') s.style.position = 'relative'; });
      const h1 = main.querySelector<HTMLElement>('h1');
      const heroBox = h1 ? (h1.closest('section') as HTMLElement | null) || h1.parentElement : null;

      /* ── stars ── */
      const cv = document.createElement('canvas');
      cv.className = 'tp-stars'; cv.setAttribute('aria-hidden', 'true');
      document.body.insertBefore(cv, document.body.firstChild);
      const ctx = cv.getContext('2d');
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      let W = 0, H = 0, sy = window.scrollY, tx = 0.5, ty = 0.5, mx = 0.5, my = 0.5, last = 0, id = 0, run = !reduce;
      type S = { x: number; y: number; z: number; r: number; ph: number; sp: number; c: string; vx: number; vy: number };
      let ss: S[] = [];
      const cols = ['245,242,236', '245,242,236', '245,242,236', '226,196,140', '197,165,114'];
      const PAR = [0.04, 0.1, 0.22];
      const size = () => {
        W = window.innerWidth; H = window.innerHeight; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
        const n = Math.round((W * H) / (small ? 5200 : 4200));
        ss = Array.from({ length: n }, (_, i) => { const z = i % 10 < 6 ? 0 : i % 10 < 9 ? 1 : 2; return { x: Math.random() * W, y: Math.random() * H, z, r: [0.55, 0.9, 1.4][z] * (0.7 + Math.random() * 0.6), ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.8, c: cols[(Math.random() * cols.length) | 0], vx: (Math.random() - 0.5) * [0.06, 0.12, 0.2][z] * 2, vy: (Math.random() - 0.5) * [0.05, 0.1, 0.16][z] * 2 - 0.02 }; });
      };
      const draw = (t: number, step: boolean) => {
        if (!ctx) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
        if (step) { mx += (tx - mx) * 0.05; my += (ty - my) * 0.05; }
        for (const s of ss) {
          if (step) { s.x += s.vx; s.y += s.vy; if (s.x < -4) s.x = W + 4; else if (s.x > W + 4) s.x = -4; if (s.y < -4) s.y = H + 4; else if (s.y > H + 4) s.y = -4; }
          const f = PAR[s.z];
          const x = s.x - (mx - 0.5) * f * 160, y = ((s.y - sy * f) % H + H) % H - (my - 0.5) * f * 120;
          const al = (s.z === 0 ? 0.5 : s.z === 1 ? 0.7 : 0.9) * (0.55 + 0.45 * Math.sin(t * 0.001 * s.sp + s.ph));
          ctx.fillStyle = `rgba(${s.c},${al.toFixed(3)})`; ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();
        }
      };
      size(); draw(0, false);
      const loop = (t: number) => { if (!run) return; if (t - last > (small ? 33 : 16)) { last = t; draw(t, true); } id = requestAnimationFrame(loop); };
      if (run) id = requestAnimationFrame(loop);

      /* ── scroll-driven bits ── */
      let sraf = 0;
      const upd = () => {
        sraf = 0; sy = window.scrollY; const v = window.innerHeight;
        h2s.forEach((h) => { const r = h.getBoundingClientRect(); h.style.setProperty('--hs', String(clamp((v * 0.95 - r.top) / (v * 0.7)))); });
        secs.forEach((s) => { const r = s.getBoundingClientRect(); s.style.setProperty('--sp', String(clamp(((v - r.top) / (v + r.height)) * 2.2))); });
        if (heroBox) { const p = clamp(sy / (v * 0.9)); heroBox.style.translate = `0 ${-p * 36}px`; heroBox.style.opacity = String(1 - p * 0.55); }
        if (reduce) draw(0, false);
      };
      const onS = () => { if (!sraf) sraf = requestAnimationFrame(upd); };
      const mv = (e: PointerEvent) => { tx = e.clientX / W; ty = e.clientY / H; };
      const vis = () => { if (document.hidden) { run = false; cancelAnimationFrame(id); } else if (!reduce && !run) { run = true; id = requestAnimationFrame(loop); } };
      const rs = () => { size(); draw(0, false); onS(); };
      window.addEventListener('scroll', onS, { passive: true });
      window.addEventListener('pointermove', mv, { passive: true });
      window.addEventListener('resize', rs);
      document.addEventListener('visibilitychange', vis);
      upd();
      cleanups.push(() => {
        run = false; cancelAnimationFrame(id); cancelAnimationFrame(sraf);
        window.removeEventListener('scroll', onS); window.removeEventListener('pointermove', mv); window.removeEventListener('resize', rs); document.removeEventListener('visibilitychange', vis);
        cv.remove(); h2s.forEach((h) => h.classList.remove('tp-sweep')); secs.forEach((s) => s.classList.remove('tp-sec'));
        if (heroBox) { heroBox.style.translate = ''; heroBox.style.opacity = ''; }
      });
    };
    const kick = () => {
      const ric = (window as unknown as { requestIdleCallback?: (f: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      idle = ric ? ric(start, { timeout: 3500 }) : window.setTimeout(start, 2200);
    };
    if (document.readyState === 'complete') kick(); else window.addEventListener('load', kick, { once: true });
    cleanups.push(() => { window.removeEventListener('load', kick); const c = (window as unknown as { cancelIdleCallback?: (n: number) => void }).cancelIdleCallback; if (c && idle) c(idle); });
    return () => cleanups.forEach((f) => f());
  }, [on, path]);
  return null;
}
