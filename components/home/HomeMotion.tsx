'use client';

import { useEffect } from 'react';

/* Homepage motion controller (card #846). One small client island:
   - animated "connections" canvas backdrop in brand colors (gold / teal / chalk)
   - scroll-in reveals (IntersectionObserver)
   - left rail section counter
   - pinned horizontal channel scroller (desktop); native snap scroll on phones
   - CTA click logging (gtag event, label = data-cta)
   Everything respects prefers-reduced-motion and starts after first paint. */
export default function HomeMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.querySelector('.rh') as HTMLElement | null;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    /* ── Reveals ─────────────────────────────────────────────────────── */
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-rv]'));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('rv-in'));
    } else {
      const io = new IntersectionObserver(
        (ents) =>
          ents.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('rv-in');
              io.unobserve(en.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      els.forEach((e) => io.observe(e));
      cleanups.push(() => io.disconnect());
    }

    /* ── Rail counter ────────────────────────────────────────────────── */
    const counter = root.querySelector<HTMLElement>('[data-rail-n]');
    const secs = Array.from(root.querySelectorAll<HTMLElement>('[data-sec]'));
    if (counter && 'IntersectionObserver' in window) {
      const io2 = new IntersectionObserver(
        (ents) =>
          ents.forEach((en) => {
            if (en.isIntersecting) counter.textContent = en.target.getAttribute('data-sec') || '01';
          }),
        { rootMargin: '-45% 0px -50% 0px' }
      );
      secs.forEach((s) => io2.observe(s));
      cleanups.push(() => io2.disconnect());
    }

    /* ── CTA click logging ───────────────────────────────────────────── */
    const onClick = (e: Event) => {
      const t = e.target as HTMLElement | null;
      const a = t && t.closest ? (t.closest('[data-cta]') as HTMLElement | null) : null;
      if (!a) return;
      try {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        w.gtag?.('event', 'cta_click', { cta_label: a.getAttribute('data-cta'), page_path: '/' });
      } catch {}
    };
    root.addEventListener('click', onClick, true);
    cleanups.push(() => root.removeEventListener('click', onClick, true));

    /* ── Pinned horizontal scroller (desktop only) ───────────────────── */
    const pin = root.querySelector<HTMLElement>('[data-hs]');
    const track = root.querySelector<HTMLElement>('[data-hs-track]');
    const bar = root.querySelector<HTMLElement>('[data-hs-bar]');
    const num = root.querySelector<HTMLElement>('[data-hs-n]');
    const mq = window.matchMedia('(min-width: 900px)');
    let raf = 0;
    const layoutHS = () => {
      if (!pin || !track) return;
      if (!mq.matches || reduce) {
        pin.style.height = '';
        track.style.transform = '';
        return;
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 120);
      pin.style.height = `${window.innerHeight + dist}px`;
      pin.dataset.dist = String(dist);
    };
    const tickHS = () => {
      raf = 0;
      if (!pin || !track || !mq.matches || reduce) return;
      const dist = Number(pin.dataset.dist || 0);
      const r = pin.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, dist)));
      track.style.transform = `translate3d(${-p * dist}px,0,0)`;
      if (bar) bar.style.transform = `scaleX(${p})`;
      if (num) {
        const n = track.children.length;
        num.textContent = String(Math.min(n, Math.floor(p * n * 0.999) + 1)).padStart(2, '0');
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tickHS);
    };
    layoutHS();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { layoutHS(); onScroll(); });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));


    /* ── Counters ────────────────────────────────────────────────────── */
    const cnt = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
    if (!reduce && 'IntersectionObserver' in window) {
      cnt.forEach((el) => { el.textContent = '0'; });
      const io3 = new IntersectionObserver((ents) => ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement; io3.unobserve(el);
        const to = Number(el.dataset.count || 0), t0 = performance.now();
        const step = (n: number) => {
          const k = Math.min(1, (n - t0) / 1600);
          el.textContent = String(Math.round((1 - Math.pow(1 - k, 3)) * to));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }), { threshold: 0.6 });
      cnt.forEach((e) => io3.observe(e));
      cleanups.push(() => io3.disconnect());
    }

    /* ── Parallax layers, thread draw, hero tilt (transform / stroke only) ── */
    const pars = Array.from(root.querySelectorAll<HTMLElement>('[data-par]'));
    const thread = root.querySelector<SVGPathElement>('[data-thread]');
    const tiltEl = root.querySelector<HTMLElement>('[data-tilt]');
    let tx = 0, ty = 0, cx = 0, cy = 0, sraf = 0;
    const frame = () => {
      sraf = 0;
      const vh = window.innerHeight;
      if (!reduce) {
        pars.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -100 || r.top > vh + 100) return;
          const k = Number(el.dataset.par || 0);
          el.style.setProperty('--py', `${((r.top + r.height / 2) - vh / 2) * k}px`);
        });
      }
      if (thread) {
        const max = document.documentElement.scrollHeight - vh;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        thread.style.strokeDashoffset = String(1 - p);
      }
      if (tiltEl && !reduce) {
        cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
        tiltEl.style.setProperty('--rx', `${cy * -8}deg`);
        tiltEl.style.setProperty('--ry', `${cx * 10}deg`);
        if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) sraf = requestAnimationFrame(frame);
      }
    };
    const kick = () => { if (!sraf) sraf = requestAnimationFrame(frame); };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5; ty = e.clientY / window.innerHeight - 0.5; kick();
    };
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    kick();
    cleanups.push(() => { window.removeEventListener('scroll', kick); window.removeEventListener('pointermove', onMove); });

    /* ── Magnetic buttons ────────────────────────────────────────────── */
    if (!reduce && window.matchMedia('(hover: hover)').matches) {
      root.querySelectorAll<HTMLElement>('.rh-btn').forEach((b) => {
        const mv = (e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          b.style.setProperty('--mx', `${(e.clientX - (r.left + r.width / 2)) * 0.25}px`);
          b.style.setProperty('--my', `${(e.clientY - (r.top + r.height / 2)) * 0.35}px`);
        };
        const lv = () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); };
        b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', lv);
      });
    }

    /* ── Backdrop canvas ─────────────────────────────────────────────── */
    const cv = root.querySelector<HTMLCanvasElement>('canvas[data-bg]');
    if (cv) {
      const ctx = cv.getContext('2d');
      if (ctx) {
        const small = window.innerWidth < 700;
        const N = small ? 26 : 56;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        let W = 0, H = 0;
        type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
        const cols = ['232,228,220', '197,165,114', '27,170,170'];
        let ps: P[] = [];
        let mx = 0.5, my = 0.5;
        const size = () => {
          W = window.innerWidth; H = window.innerHeight;
          cv.width = W * dpr; cv.height = H * dpr;
          cv.style.width = W + 'px'; cv.style.height = H + 'px';
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ps = Array.from({ length: N }, (_, i) => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
            r: Math.random() * 1.4 + 0.5, c: cols[i % 7 === 0 ? 1 : i % 11 === 0 ? 2 : 0],
          }));
        };
        const L = small ? 110 : 150;
        const draw = () => {
          ctx.clearRect(0, 0, W, H);
          for (const p of ps) {
            p.x += p.vx + (mx - 0.5) * 0.06; p.y += p.vy + (my - 0.5) * 0.06;
            if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
          }
          for (let i = 0; i < ps.length; i++) {
            const a = ps[i];
            for (let j = i + 1; j < ps.length; j++) {
              const b = ps[j];
              const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
              if (d < L * L) {
                ctx.strokeStyle = `rgba(197,165,114,${(1 - Math.sqrt(d) / L) * 0.16})`;
                ctx.lineWidth = 0.6;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
              }
            }
            ctx.fillStyle = `rgba(${a.c},0.7)`;
            ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill();
          }
        };
        size();
        draw();
        let run = !reduce;
        let id = 0;
        let last = 0;
        // ~30fps and started after load settles so it never competes with first paint / LCP
        const loop = (t: number) => { if (run) { if (t - last > 33) { last = t; draw(); } id = requestAnimationFrame(loop); } };
        let st = 0;
        if (run) st = window.setTimeout(() => { id = requestAnimationFrame(loop); }, 1800);
        cleanups.push(() => clearTimeout(st));
        const vis = () => {
          if (document.hidden) { run = false; cancelAnimationFrame(id); }
          else if (!reduce && !run) { run = true; id = requestAnimationFrame(loop); }
        };
        const mv = (e: PointerEvent) => { mx = e.clientX / W; my = e.clientY / H; };
        // fade the backdrop out after the hero so body text sits on clean ground
        const fade = () => { cv.style.opacity = String(Math.max(0.22, 1 - window.scrollY / (window.innerHeight * 0.9))); };
        let rt = 0;
        const rs = () => { clearTimeout(rt); rt = window.setTimeout(() => { size(); draw(); }, 200); };
        document.addEventListener('visibilitychange', vis);
        window.addEventListener('pointermove', mv, { passive: true });
        window.addEventListener('scroll', fade, { passive: true });
        window.addEventListener('resize', rs);
        fade();
        cleanups.push(() => {
          run = false; cancelAnimationFrame(id);
          document.removeEventListener('visibilitychange', vis);
          window.removeEventListener('pointermove', mv);
          window.removeEventListener('scroll', fade);
          window.removeEventListener('resize', rs);
        });
      }
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
