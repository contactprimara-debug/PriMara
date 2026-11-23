'use client';

import { useEffect } from 'react';
import { revealSplitHeadings } from '@/lib/motion-split';

/* Homepage motion, round 3 (Gio 2026-11-23: "more movement"). Runs only after the
   page has loaded and the browser is idle, so it can never touch LCP / TBT.
   Everything animates transform or opacity (or a stroke offset), nothing changes layout.
   - cursor-reactive mesh behind the hero (autodrifts on phones / no pointer)
   - live event feed inside the hero card, looping
   - hero card breathes on its own when there is no pointer
   - word-by-word heading reveal
   - scroll-pinned "Look. Fix. Track." with a connector that draws between steps
   - marquee rows that speed up with scroll velocity
   All of it is skipped under prefers-reduced-motion. */
export default function HomeMotionPlus() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.querySelector('.rh') as HTMLElement | null;
    if (!root || reduce) return;
    const cleanups: Array<() => void> = [];
    let started = false;
    let idleId = 0;

    const start = () => {
      if (started) return;
      started = true;
      const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      /* ── heading word stagger ─────────────────────────────────────── */
      cleanups.push(revealSplitHeadings(Array.from(root.querySelectorAll<HTMLElement>('[data-split]'))));

      /* ── hero mesh: follows the cursor, drifts by itself otherwise ─── */
      const mesh = root.querySelector<HTMLElement>('[data-mesh]');
      const feed = root.querySelector<HTMLElement>('[data-feed]');
      const tilt = root.querySelector<HTMLElement>('[data-tilt]');
      let px = 0.5, py = 0.5, tx = 0.5, ty = 0.5, mraf = 0, lastMove = 0;
      let heroVisible = true;
      if (mesh) {
        const io = new IntersectionObserver((e) => { heroVisible = e[0].isIntersecting; if (heroVisible && !mraf) mraf = requestAnimationFrame(meshTick); }, { threshold: 0 });
        io.observe(mesh);
        cleanups.push(() => io.disconnect());
      }
      const meshTick = (t: number) => {
        mraf = 0;
        if (!heroVisible || document.hidden) return;
        if (!document.documentElement.classList.contains('amb') && t - lastMove > 2500 && lastMove === 0) { mraf = requestAnimationFrame(meshTick); return; }
        const idle = t - lastMove > 2500;
        if (idle) { tx = 0.5 + Math.sin(t / 3600) * 0.28; ty = 0.5 + Math.cos(t / 4700) * 0.22; }
        px += (tx - px) * 0.06; py += (ty - py) * 0.06;
        if (mesh) { mesh.style.setProperty('--mx', String(px)); mesh.style.setProperty('--my', String(py)); }
        /* when there is no pointer (phones, idle desktop) the hero card breathes by itself */
        if (tilt && (idle || !fine)) {
          tilt.style.setProperty('--ry', `${(px - 0.5) * 16}deg`);
          tilt.style.setProperty('--rx', `${(py - 0.5) * -12}deg`);
        }
        mraf = requestAnimationFrame(meshTick);
      };
      const onMove = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        const h = mesh ? mesh.getBoundingClientRect() : null;
        if (h && e.clientY > h.bottom) return;
        lastMove = performance.now();
        tx = e.clientX / window.innerWidth; ty = h ? Math.min(1, Math.max(0, (e.clientY - h.top) / h.height)) : 0.5;
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(mraf); });
      mraf = requestAnimationFrame(meshTick);

      /* ── live event feed (hero card) ──────────────────────────────── */
      if (feed) {
        const rows = Array.from(feed.querySelectorAll<HTMLElement>('.rh-ev'));
        const order = ['0', '1', '2', '3', 'n'];
        let k = 0;
        const step = () => {
          if (document.hidden || !heroVisible) return;
          k = (k + 1) % order.length;
          rows.forEach((r, i) => { r.dataset.s = order[(i + k) % order.length]; });
        };
        const id = window.setInterval(step, 2400);
        cleanups.push(() => clearInterval(id));
      }

      /* ── marquee speed follows scroll velocity ────────────────────── */
      const mq = Array.from(root.querySelectorAll<HTMLElement>('.rh-marq-t'));
      const anims = mq.map((m) => (m.getAnimations ? m.getAnimations()[0] : undefined)).filter(Boolean) as Animation[];
      if (anims.length) {
        let lastY = window.scrollY, lastT = performance.now(), rate = 1, target = 1, vraf = 0;
        const vtick = () => {
          vraf = 0;
          rate += (target - rate) * 0.08;
          target += (1 - target) * 0.05;
          anims.forEach((a) => { a.playbackRate = rate; });
          if (Math.abs(rate - 1) > 0.02 || Math.abs(target - 1) > 0.02) vraf = requestAnimationFrame(vtick);
          else anims.forEach((a) => { a.playbackRate = 1; });
        };
        const onS = () => {
          const now = performance.now(), dy = Math.abs(window.scrollY - lastY);
          const v = dy / Math.max(1, now - lastT);
          lastY = window.scrollY; lastT = now;
          target = Math.min(7, Math.max(target, 1 + v * 3.2));
          if (!vraf) vraf = requestAnimationFrame(vtick);
        };
        window.addEventListener('scroll', onS, { passive: true });
        cleanups.push(() => { window.removeEventListener('scroll', onS); cancelAnimationFrame(vraf); });
      }

      /* ── pinned "Look. Fix. Track." + connector ───────────────────── */
      const sec = root.querySelector<HTMLElement>('[data-pin]');
      const wrap = root.querySelector<HTMLElement>('[data-steps]');
      const line = root.querySelector<HTMLElement>('[data-conn]');
      const dot = root.querySelector<HTMLElement>('[data-conn-dot]');
      if (sec && wrap && line) {
        const lis = Array.from(wrap.querySelectorAll<HTMLElement>('li'));
        const pinMQ = window.matchMedia('(min-width: 900px) and (min-height: 620px)');
        let pinned = false, sraf = 0;
        const onScroll = () => { if (!sraf) sraf = requestAnimationFrame(tick); };
        const layout = () => {
          const want = pinMQ.matches;
          if (want === pinned && (!want || sec.style.height)) return;
          pinned = want;
          sec.classList.toggle('is-pinned', pinned);
          sec.style.height = pinned ? `${Math.round(window.innerHeight * 2.3)}px` : '';
          onScroll();
        };
        const apply = (p: number, active: number) => {
          line.style.transform = `scaleY(${p})`;
          if (dot) dot.style.transform = `translate3d(0,${p * wrap.offsetHeight}px,0)`;
          lis.forEach((li, i) => li.classList.toggle('is-on', i <= active));
        };
        const tick = () => {
          sraf = 0;
          const vh = window.innerHeight;
          if (pinned) {
            const r = sec.getBoundingClientRect();
            const total = Math.max(1, sec.offsetHeight - vh);
            const p = Math.min(1, Math.max(0, -r.top / total));
            const q = Math.min(1, p * 1.12);
            apply(q, Math.min(lis.length - 1, Math.floor(q * lis.length * 0.999)));
          } else {
            const r = wrap.getBoundingClientRect();
            const p = Math.min(1, Math.max(0, (vh * 0.72 - r.top) / Math.max(1, r.height)));
            const act = lis.reduce((a, li, i) => (li.getBoundingClientRect().top < vh * 0.7 ? i : a), 0);
            apply(p, act);
          }
        };
        const onResize = () => { layout(); onScroll(); };
        layout();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        cleanups.push(() => {
          window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize);
          cancelAnimationFrame(sraf); sec.style.height = ''; sec.classList.remove('is-pinned');
        });
        onScroll();
      }
    };

    /* after the load event AND the browser is idle: never competes with LCP */
    const kick = () => {
      const ric = (window as unknown as { requestIdleCallback?: (f: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      idleId = ric ? ric(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
    };
    if (document.readyState === 'complete') kick();
    else window.addEventListener('load', kick, { once: true });
    cleanups.push(() => window.removeEventListener('load', kick));

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
