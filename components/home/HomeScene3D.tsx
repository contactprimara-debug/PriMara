'use client';

import { useEffect } from 'react';

/* Homepage 3D scene (Gio 2026-11-23: ringba-style object that turns and transforms with scroll).
   A gold wireframe surface (16x12 grid, ~190 vertices) that rotates with scroll and morphs between
   shapes as each section passes the middle of the screen: map pin -> phone -> globe -> twisted
   fibre -> ring -> pin. Plain 2D canvas with a hand-rolled perspective projection (no WebGL / 3D
   library, so zero added JS weight). Fixed canvas inserted after load, so no layout shift. Pauses
   when the tab is hidden, caps DPR, 30fps on phones, draws one static frame under
   prefers-reduced-motion. */
const U = 16, V = 12;
type F = (u: number, v: number) => [number, number, number];
const T = Math.PI * 2;
const shapes: F[] = [
  /* map pin */
  (u, v) => { const r = v < 0.4 ? 0.62 * Math.pow(v / 0.4, 0.9) : 0.62 * Math.sqrt(Math.max(0, 1 - Math.pow((v - 0.4) / 0.6, 2))); const a = u * T; return [Math.cos(a) * r, (v - 0.5) * 2.2, Math.sin(a) * r]; },
  /* phone (rounded slab) */
  (u, v) => { const a = u * T, c = Math.cos(a), s = Math.sin(a), n = 0.28; const x = 0.55 * Math.sign(c) * Math.pow(Math.abs(c), n), z = 0.1 * Math.sign(s) * Math.pow(Math.abs(s), n); return [x, (v - 0.5) * 2.0, z]; },
  /* globe */
  (u, v) => { const a = u * T, b = (v - 0.5) * Math.PI, r = 0.95; return [Math.cos(a) * Math.cos(b) * r, Math.sin(b) * r, Math.sin(a) * Math.cos(b) * r]; },
  /* twisted fibre */
  (u, v) => { const a = u * T, y = (v - 0.5) * 2.3, tw = y * 2.6, r = 0.38 + 0.12 * Math.sin(y * 4); return [Math.cos(a + tw) * r + Math.sin(y * 3) * 0.18, y, Math.sin(a + tw) * r]; },
  /* ring */
  (u, v) => { const a = u * T, b = v * T, R = 0.8, r = 0.3; return [(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b) * 1.0, (R + r * Math.cos(b)) * Math.sin(a)]; },
  /* pin again */
  (u, v) => shapes[0](u, v),
];
const SIDE = [0.84, 0.86, 0.5, 0.86, 0.84, 0.5];

export default function HomeScene3D() {
  useEffect(() => {
    const root = document.querySelector('.rh') as HTMLElement | null;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 700;
    let cv: HTMLCanvasElement | null = null, id = 0, idle = 0, run = false, last = 0;
    const cleanups: Array<() => void> = [];
    const pts = shapes.map((f) => { const a: number[][] = []; for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) a.push(f(i / U, j / (V - 1))); return a; });
    const sm = (x: number) => x * x * (3 - 2 * x);

    const start = () => {
      if (cv) return;
      cv = document.createElement('canvas');
      cv.className = 'rh-scene'; cv.setAttribute('aria-hidden', 'true');
      root.insertBefore(cv, root.firstChild);
      const ctx = cv.getContext('2d'); if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      let W = 0, H = 0;
      const size = () => { W = window.innerWidth; H = window.innerHeight; cv!.width = W * dpr; cv!.height = H * dpr; cv!.style.width = W + 'px'; cv!.style.height = H + 'px'; };
      size();
      const secs = Array.from(root.querySelectorAll<HTMLElement>('.rh-sec, .rh-hs, .rh-close')).slice(0, 6);
      const proj = new Float32Array(U * V * 3);
      const draw = (t: number) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
        const sy = window.scrollY, vc = H / 2;
        /* which section pair is at the screen middle, and how far between them */
        let k = 0, frac = 0;
        const cs = secs.map((s) => { const r = s.getBoundingClientRect(); return r.top + r.height / 2; });
        if (cs.length) {
          if (vc <= cs[0]) { k = 0; frac = 0; }
          else if (vc >= cs[cs.length - 1]) { k = cs.length - 1; frac = 0; }
          else { for (let i = 0; i < cs.length - 1; i++) if (vc >= cs[i] && vc < cs[i + 1]) { k = i; frac = (vc - cs[i]) / (cs[i + 1] - cs[i]); break; } }
        }
        const m = sm(Math.min(1, Math.max(0, (frac - 0.3) / 0.4)));
        const A = pts[Math.min(k, pts.length - 1)], B = pts[Math.min(k + 1, pts.length - 1)];
        const sx = SIDE[Math.min(k, SIDE.length - 1)] * (1 - m) + SIDE[Math.min(k + 1, SIDE.length - 1)] * m;
        const cx = small ? W * (0.5 + (sx - 0.5) * 0.3) : W * sx, cy = H * 0.5;
        const sc = Math.min(W, H) * (small ? 0.3 : 0.4);
        const ry = sy * 0.0022 + t * 0.00018, rx = 0.38 + Math.sin(sy * 0.0011) * 0.22;
        const cyaw = Math.cos(ry), syaw = Math.sin(ry), cp = Math.cos(rx), sp = Math.sin(rx);
        const vis = Math.min(1, sy / (H * 0.5)) * (small ? 0.4 : 0.62);
        if (vis <= 0.01) return;
        for (let n = 0; n < U * V; n++) {
          const x = A[n][0] + (B[n][0] - A[n][0]) * m, y = A[n][1] + (B[n][1] - A[n][1]) * m, z = A[n][2] + (B[n][2] - A[n][2]) * m;
          const x1 = x * cyaw + z * syaw, z1 = -x * syaw + z * cyaw;
          const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
          const p = 3.2 / (3.2 + z2);
          proj[n * 3] = cx + x1 * sc * p; proj[n * 3 + 1] = cy - y2 * sc * p; proj[n * 3 + 2] = z2;
        }
        ctx.lineWidth = 0.8;
        const line = (a: number, b: number) => {
          const d = (proj[a * 3 + 2] + proj[b * 3 + 2]) / 2; const al = vis * (0.55 - d * 0.28);
          if (al <= 0.02) return;
          ctx.strokeStyle = `rgba(226,196,140,${al.toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(proj[a * 3], proj[a * 3 + 1]); ctx.lineTo(proj[b * 3], proj[b * 3 + 1]); ctx.stroke();
        };
        for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) {
          const n = j * U + i; line(n, j * U + ((i + 1) % U)); if (j < V - 1) line(n, n + U);
        }
        for (let n = 0; n < U * V; n++) {
          const al = vis * (0.9 - proj[n * 3 + 2] * 0.3); if (al <= 0.03) continue;
          ctx.fillStyle = `rgba(255,240,210,${al.toFixed(3)})`;
          ctx.beginPath(); ctx.arc(proj[n * 3], proj[n * 3 + 1], 1.3, 0, T); ctx.fill();
        }
      };
      draw(0);
      const loop = (t: number) => { if (!run) return; if (t - last > (small ? 33 : 16)) { last = t; draw(t); } id = requestAnimationFrame(loop); };
      if (!reduce) { run = true; id = requestAnimationFrame(loop); }
      const onS = () => { if (reduce) draw(0); };
      const vis = () => { if (document.hidden) { run = false; cancelAnimationFrame(id); } else if (!reduce && !run) { run = true; id = requestAnimationFrame(loop); } };
      const rs = () => { size(); draw(0); };
      document.addEventListener('visibilitychange', vis);
      window.addEventListener('scroll', onS, { passive: true });
      window.addEventListener('resize', rs);
      cleanups.push(() => { run = false; cancelAnimationFrame(id); document.removeEventListener('visibilitychange', vis); window.removeEventListener('scroll', onS); window.removeEventListener('resize', rs); cv?.remove(); });
    };
    const kick = () => {
      const ric = (window as unknown as { requestIdleCallback?: (f: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      idle = ric ? ric(start, { timeout: 3500 }) : window.setTimeout(start, 2200);
    };
    if (document.readyState === 'complete') kick(); else window.addEventListener('load', kick, { once: true });
    cleanups.push(() => { window.removeEventListener('load', kick); const c = (window as unknown as { cancelIdleCallback?: (n: number) => void }).cancelIdleCallback; if (c && idle) c(idle); });
    return () => cleanups.forEach((f) => f());
  }, []);
  return null;
}
