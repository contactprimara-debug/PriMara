'use client';

import { useEffect } from 'react';

/* Homepage scroll storytelling (Gio 2026-11-23: ringba-level scroll). One smoothed scroll
   progress drives scenes per section. Only the individual transform properties
   (translate / rotate / scale) and opacity are written, so they compose with the existing CSS
   animations and never trigger layout. No continuous loop: rAF runs only while the smoothed
   value is still catching up to the scroll position. Starts after load + idle (no LCP/TBT hit).
   Skipped entirely under prefers-reduced-motion.
   Scenes: hero card disassembles into its layers and recedes; radar orbits with scroll while
   the labels stay upright; section hairlines draw in; big A/B numerals and channel numerals
   parallax at depth; channel cards scale/fade by distance from centre; stats lift; closer
   glow swells and the closing line scales in. */
export default function HomeScrollScenes() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.querySelector('.rh') as HTMLElement | null;
    if (!root) return;
    const q = <T extends HTMLElement>(s: string) => Array.from(root.querySelectorAll<T>(s));
    let started = false, idleId = 0, raf = 0, cur = window.scrollY, tgt = cur;
    const cleanups: Array<() => void> = [];
    const small = window.innerWidth < 700;
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const start = () => {
      if (started) return; started = true;
      const vh = () => window.innerHeight;
      const hero = root.querySelector<HTMLElement>('.rh-hero');
      const copy = root.querySelector<HTMLElement>('.rh-hero-copy');
      const vis = root.querySelector<HTMLElement>('.rh-visual');
      const c2 = root.querySelector<HTMLElement>('.rh-card-2');
      const c3 = root.querySelector<HTMLElement>('.rh-card-3');
      const rib = root.querySelector<HTMLElement>('.rh-ribbons');
      const chips = q('.rh-chip');
      const radar = root.querySelector<HTMLElement>('.rh-radar');
      const radarIn = root.querySelector<HTMLElement>('.rh-radar-in');
      const rings = q('.rh-ring');
      const nodes = q('.rh-node');
      const core = root.querySelector<HTMLElement>('.rh-core');
      const secs = q('.rh-sec, .rh-close');
      const bigN = q('.rh-big-n');
      const bigs = q('.rh-big');
      const chN = q('.rh-ch-n');
      const chs = q('.rh-ch');
      const stats = q('.rh-stats > div');
      const close = root.querySelector<HTMLElement>('.rh-close');
      const closeH = close?.querySelector<HTMLElement>('.rh-h2');
      const dash = root.querySelector<HTMLElement>('[data-dash]');
      const dps = q('[data-dp]');
      const bars = dash ? Array.from(dash.querySelectorAll<HTMLElement>('[data-bar]')) : [];
      const cells = dash ? Array.from(dash.querySelectorAll<HTMLElement>('[data-cell]')) : [];
      const line = dash?.querySelector<SVGPathElement>('[data-line]') || null;
      const h2s = q('.rh-h2');
      secs.forEach((s) => s.classList.add('sc-on'));
      if (close) close.classList.add('sc-glow');

      const frame = () => {
        const v = vh();
        /* hero: 0 at top, 1 when scrolled one viewport */
        const hp = clamp(cur / (hero ? Math.max(hero.offsetHeight, v * 0.8) : v));
        if (copy) { copy.style.translate = `0 ${-hp * 70}px`; copy.style.opacity = String(1 - hp * 0.9); }
        if (vis) { vis.style.translate = `0 ${hp * 50}px`; vis.style.scale = String(1 - hp * 0.1); vis.style.opacity = String(1 - hp * 0.75); }
        if (c2) c2.style.translate = `${hp * 70}px ${-hp * 40}px`;
        if (c3) c3.style.translate = `${hp * 140}px ${-hp * 80}px`;
        if (rib) rib.style.rotate = `${hp * 14}deg`;
        chips.forEach((c, i) => { c.style.translate = `${(i ? -1 : 1) * hp * 40}px ${(i ? 1 : -1) * hp * 50}px`; });

        const prog = (el: Element) => { const r = el.getBoundingClientRect(); return clamp((v - r.top) / (v + r.height)); };
        const centre = (el: Element) => { const r = el.getBoundingClientRect(); return (r.top + r.height / 2 - v / 2) / v; };

        if (radar && radarIn) {
          const p = prog(radar); const a = (p - 0.5) * 110;
          radarIn.style.rotate = `${a}deg`;
          nodes.forEach((n) => { n.style.rotate = `${-a}deg`; });
          if (core) core.style.rotate = `${-a}deg`;
          rings.forEach((r, i) => { r.style.scale = String(0.88 + p * (0.12 + i * 0.06)); });
        }
        secs.forEach((s) => { s.style.setProperty('--sp', String(clamp(prog(s) * 2.2))); });
        bigN.forEach((n) => { const c = centre(n); n.style.translate = `0 ${c * -46}px`; n.style.scale = String(1 + clamp(1 - Math.abs(c) * 1.4) * 0.9); n.style.transformOrigin = 'left center'; });
        bigs.forEach((b) => { const c = centre(b); b.style.setProperty('--lift', `${clamp(c, -1, 1) * 18}px`); });
        chN.forEach((n) => { const r = n.getBoundingClientRect(); const c = (r.left + r.width / 2 - window.innerWidth / 2) / window.innerWidth; n.style.translate = `${c * -34}px 0`; });
        chs.forEach((el) => { const r = el.getBoundingClientRect(); const c = Math.abs((r.left + r.width / 2 - window.innerWidth / 2) / window.innerWidth); el.style.setProperty('--cd', String(clamp(1 - c * 0.9, 0.55, 1))); });
        stats.forEach((s) => { const c = prog(s); s.style.translate = `0 ${(0.5 - c) * 36}px`; });
        if (dash) {
          const r = dash.getBoundingClientRect(); const dp = clamp(-r.top / Math.max(1, r.height - v));
          dps.forEach((el, i) => { const a = clamp((dp - i * 0.13) / 0.2); el.style.opacity = String(a); el.style.translate = `0 ${(1 - a) * 40}px`; el.style.scale = String(0.94 + a * 0.06); });
          bars.forEach((b, i) => { const a = clamp((dp - 0.1 - i * 0.03) / 0.25); b.style.scale = `1 ${a}`; });
          cells.forEach((c, i) => { const a = clamp((dp - 0.35 - i * 0.012) / 0.1); c.style.opacity = String(0.15 + a * 0.85); c.style.scale = String(0.6 + a * 0.4); });
          if (line) line.style.strokeDashoffset = String(1 - clamp((dp - 0.2) / 0.35));
        }
        h2s.forEach((h) => { const r = h.getBoundingClientRect(); h.style.setProperty('--hs', String(clamp((v * 0.95 - r.top) / (v * 0.7)))); });
        if (close) {
          const p = prog(close); close.style.setProperty('--cg', String(0.25 + clamp((p - 0.15) * 1.6) * 0.75));
          if (closeH) closeH.style.scale = String(0.92 + clamp((p - 0.1) * 2) * 0.08);
        }
      };

      const tick = () => {
        cur += (tgt - cur) * (small ? 0.2 : 0.12);
        if (Math.abs(tgt - cur) < 0.4) cur = tgt;
        frame();
        raf = cur === tgt ? 0 : requestAnimationFrame(tick);
      };
      const onScroll = () => { tgt = window.scrollY; if (!raf) raf = requestAnimationFrame(tick); };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      cleanups.push(() => {
        window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll);
        cancelAnimationFrame(raf);
        [copy, vis, c2, c3, rib, radarIn, core, ...chips, ...nodes, ...rings, ...bigN, ...chN, ...stats, closeH, ...dps, ...bars, ...cells].forEach((e) => { if (e) { e.style.translate = ''; e.style.scale = ''; e.style.rotate = ''; e.style.opacity = ''; } });
      });
      tgt = window.scrollY; cur = tgt; frame();
    };

    const kick = () => {
      const ric = (window as unknown as { requestIdleCallback?: (f: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      idleId = ric ? ric(start, { timeout: 3000 }) : window.setTimeout(start, 1500);
    };
    if (document.readyState === 'complete') kick(); else window.addEventListener('load', kick, { once: true });
    cleanups.push(() => { window.removeEventListener('load', kick); const c = (window as unknown as { cancelIdleCallback?: (n: number) => void }).cancelIdleCallback; if (c && idleId) c(idleId); });
    return () => cleanups.forEach((f) => f());
  }, []);
  return null;
}
