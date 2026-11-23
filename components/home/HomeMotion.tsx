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

    /* ── Backdrop: layered star field ────────────────────────────────────
       3 depth layers drifting at different speeds, twinkle, scroll + cursor parallax,
       occasional shooting streaks, constellation lines that form near the cursor.
       rAF, paused when tab hidden, DPR-capped, lighter on phones, static when
       prefers-reduced-motion. Starts after load settles (no LCP/CLS impact: fixed canvas). */
    const cv = root.querySelector<HTMLCanvasElement>('canvas[data-bg]');
    if (cv) {
      const ctx = cv.getContext('2d');
      if (ctx) {
        const small = window.innerWidth < 700;
        const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
        let W = 0, H = 0;
        type S = { x: number; y: number; z: number; r: number; ph: number; sp: number; c: string; vx: number; vy: number };
        type Sh = { x: number; y: number; vx: number; vy: number; life: number; max: number };
        const cols = ['245,242,236', '245,242,236', '245,242,236', '226,196,140', '197,165,114'];
        let ss: S[] = [];
        let shots: Sh[] = [];
        let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5, px = -999, py = -999, sy = window.scrollY, nextShot = 0;
        const size = () => {
          W = window.innerWidth; H = window.innerHeight;
          cv.width = W * dpr; cv.height = H * dpr;
          cv.style.width = W + 'px'; cv.style.height = H + 'px';
          const n = Math.round((W * H) / (small ? 4200 : 3600));
          ss = Array.from({ length: n }, (_, i) => {
            const z = i % 10 < 6 ? 0 : i % 10 < 9 ? 1 : 2; /* far, mid, near */
            return {
              x: Math.random() * W, y: Math.random() * H, z,
              r: [0.55, 0.9, 1.5][z] * (0.7 + Math.random() * 0.6),
              ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.8,
              c: cols[(Math.random() * cols.length) | 0],
              vx: (Math.random() - 0.5) * [0.06, 0.12, 0.22][z] * 2, vy: (Math.random() - 0.5) * [0.05, 0.1, 0.18][z] * 2 - 0.02,
            };
          });
        };
        const PAR = [0.04, 0.1, 0.22];
        const frame = (t: number, step: boolean) => {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, W, H);
          if (step) { mx += (tx - mx) * 0.05; my += (ty - my) * 0.05; }
          const near: S[] = [];
          const ox = (mx - 0.5), oy = (my - 0.5);
          for (const s of ss) {
            if (step) {
              s.x += s.vx; s.y += s.vy;
              if (s.x < -4) s.x = W + 4; else if (s.x > W + 4) s.x = -4;
              if (s.y < -4) s.y = H + 4; else if (s.y > H + 4) s.y = -4;
            }
            const f = PAR[s.z];
            let x = s.x - ox * f * 160;
            let y = ((s.y - sy * f) % H + H) % H - oy * f * 120;
            const tw = 0.55 + 0.45 * Math.sin(t * 0.001 * s.sp + s.ph);
            const al = (s.z === 0 ? 0.55 : s.z === 1 ? 0.75 : 0.95) * tw;
            ctx.fillStyle = `rgba(${s.c},${al.toFixed(3)})`;
            ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();
            if (s.z === 2 && s.r > 1.6) { ctx.fillStyle = `rgba(${s.c},${(al * 0.14).toFixed(3)})`; ctx.beginPath(); ctx.arc(x, y, s.r * 3.2, 0, 6.2832); ctx.fill(); }
            if (!small && s.z > 0) { const dx = x - px, dy = y - py; if (dx * dx + dy * dy < 19600) near.push({ ...s, x, y }); }
          }
          /* constellation lines form near the cursor (desktop) */
          if (near.length > 1) {
            ctx.lineWidth = 0.7;
            for (let i = 0; i < near.length; i++) for (let j = i + 1; j < near.length; j++) {
              const a = near[i], b = near[j]; const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
              if (d < 12100) {
                const m = (1 - Math.sqrt(d) / 110) * 0.5;
                ctx.strokeStyle = `rgba(226,196,140,${m.toFixed(3)})`;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
              }
            }
          }
          /* shooting streaks */
          if (step) {
            if (t > nextShot && shots.length < 2) {
              const ang = 0.35 + Math.random() * 0.5, sp = 7 + Math.random() * 6;
              shots.push({ x: Math.random() * W * 0.8, y: Math.random() * H * 0.45, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, life: 0, max: 42 + Math.random() * 24 });
              nextShot = t + (small ? 2600 : 1800) + Math.random() * 3200;
            }
            for (const q of shots) { q.x += q.vx; q.y += q.vy; q.life++; }
            shots = shots.filter((q) => q.life < q.max);
          }
          for (const q of shots) {
            const k = 1 - q.life / q.max, L = 14;
            const g = ctx.createLinearGradient(q.x, q.y, q.x - q.vx * L, q.y - q.vy * L);
            g.addColorStop(0, `rgba(255,244,222,${(0.9 * k).toFixed(3)})`); g.addColorStop(1, 'rgba(226,196,140,0)');
            ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(q.x - q.vx * L, q.y - q.vy * L); ctx.stroke();
          }
        };
        size();
        frame(0, false);
        let run = !reduce;
        let id = 0;
        let last = 0;
        const loop = (t: number) => { if (!run) return; if (t - last > (small ? 33 : 16)) { last = t; frame(t, true); } id = requestAnimationFrame(loop); };
        let st = 0;
        if (run) { nextShot = 2500; st = window.setTimeout(() => { id = requestAnimationFrame(loop); }, 1500); }
        cleanups.push(() => clearTimeout(st));
        const vis = () => {
          if (document.hidden) { run = false; cancelAnimationFrame(id); }
          else if (!reduce && !run) { run = true; id = requestAnimationFrame(loop); }
        };
        const mv = (e: PointerEvent) => { tx = e.clientX / W; ty = e.clientY / H; px = e.clientX; py = e.clientY; };
        const lv = () => { px = py = -999; };
        /* stars stay visible the whole way down (ambient), slightly calmer behind body text */
        const fade = () => { sy = window.scrollY; cv.style.opacity = String(Math.max(0.6, 1 - sy / (window.innerHeight * 1.6))); if (reduce) frame(0, false); };
        let rt = 0;
        const rs = () => { clearTimeout(rt); rt = window.setTimeout(() => { size(); frame(0, false); }, 200); };
        document.addEventListener('visibilitychange', vis);
        window.addEventListener('pointermove', mv, { passive: true });
        document.addEventListener('pointerleave', lv);
        window.addEventListener('scroll', fade, { passive: true });
        window.addEventListener('resize', rs);
        fade();
        cleanups.push(() => {
          run = false; cancelAnimationFrame(id);
          document.removeEventListener('visibilitychange', vis);
          window.removeEventListener('pointermove', mv);
          document.removeEventListener('pointerleave', lv);
          window.removeEventListener('scroll', fade);
          window.removeEventListener('resize', rs);
        });
      }
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
