import React from "react";

/* Static, decorative SVG scenes for the pinned channel gallery. Server component (no JS).
   Every moving part reads CSS vars set per panel by HomeScrollScenes:
   --in (0..1, how centred the panel is) and per-element --k (stagger). Without JS --in falls
   back to 1, so the finished drawing shows. Champagne gold + teal only. */
const k = (n: number): React.CSSProperties => ({ ["--k" as string]: n });

function Grid() {
  const cells: React.ReactNode[] = [];
  for (let j = 0; j < 5; j++)
    for (let i = 0; i < 5; i++) {
      if (i === 2 && j === 2) continue;
      const d = Math.hypot(i - 2, j - 2);
      cells.push(<circle key={`${i}${j}`} className="a-c" cx={70 + i * 55} cy={34 + j * 48} r={10} style={k(d * 1.4)} />);
    }
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <circle className="a-s a-r" cx="180" cy="130" r="58" />
      <circle className="a-s a-r a-r2" cx="180" cy="130" r="104" />
      {cells}
      <path className="a-pin" d="M180 100c-14 0-24 10-24 24 0 18 24 42 24 42s24-24 24-42c0-14-10-24-24-24z" />
      <circle cx="180" cy="124" r="8" fill="#050505" />
    </svg>
  );
}
function Ai() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect className="a-s a-d" pathLength={1} x="26" y="22" width="308" height="44" rx="10" style={k(0)} />
      <circle className="a-s a-d" pathLength={1} cx="52" cy="44" r="8" style={k(1)} />
      <path className="a-s a-d a-t" pathLength={1} d="M60 52l8 8M84 44h170" style={k(1)} />
      <rect className="a-s a-d" pathLength={1} x="26" y="86" width="308" height="166" rx="10" style={k(1)} />
      <path className="a-s a-d a-g" pathLength={1} d="M54 120h210M54 146h242M54 172h180" style={k(2)} />
      <path className="a-f a-d" pathLength={1} d="M54 120h120M54 146h160M54 172h96" style={k(3)} />
      {[0, 1, 2].map((i) => (
        <g key={i} className="a-pop" style={k(3 + i * 0.5)}>
          <rect x={54 + i * 70} y="204" width="58" height="24" rx="12" className="a-chip" />
          <circle cx={68 + i * 70} cy="216" r="4" fill="#E6D2A6" />
        </g>
      ))}
      <path className="a-spark" d="M300 120l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
    </svg>
  );
}
function Gbp() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect className="a-s a-d" pathLength={1} x="56" y="16" width="248" height="238" rx="12" style={k(0)} />
      <rect className="a-band" x="57" y="17" width="246" height="74" rx="11" />
      <path className="a-pin a-pin2" d="M92 102c-10 0-17 7-17 17 0 13 17 30 17 30s17-17 17-30c0-10-7-17-17-17z" />
      <path className="a-s a-d" pathLength={1} d="M120 114h128M120 134h86" style={k(1)} />
      {["Call", "Site", "Map"].map((t, i) => (
        <g key={t} className="a-pop" style={k(2 + i * 0.6)}>
          <rect x={72 + i * 76} y="164" width="64" height="30" rx="4" className={i === 0 ? "a-btn" : "a-chip"} />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} className="a-tile" x={72 + i * 76} y="208" width="64" height="32" rx="4" style={k(3 + i * 0.5)} />
      ))}
    </svg>
  );
}
function Meta() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect className="a-s a-d" pathLength={1} x="40" y="8" width="150" height="254" rx="22" style={k(0)} />
      <circle className="a-fill" cx="66" cy="40" r="10" />
      <path className="a-s a-d" pathLength={1} d="M84 36h70M84 48h44" style={k(1)} />
      <rect className="a-tile" x="58" y="68" width="114" height="92" rx="6" style={k(1.5)} />
      <path className="a-s a-d a-g" pathLength={1} d="M58 130l30-24 26 18 24-30 34 36" style={k(2)} />
      <path className="a-s a-d" pathLength={1} d="M58 176h96M58 190h66" style={k(2.5)} />
      <rect className="a-btn a-pop" x="58" y="212" width="114" height="28" rx="4" style={k(3)} />
      <path className="a-s a-d a-g" pathLength={1} d="M172 226C220 226 214 150 250 150" style={k(3)} />
      <rect className="a-s a-d" pathLength={1} x="250" y="104" width="86" height="104" rx="6" style={k(3.5)} />
      <path className="a-s a-d a-t" pathLength={1} d="M264 128h58M264 148h58M264 168h34" style={k(4)} />
      <circle className="a-chip a-pop" cx="312" cy="190" r="11" style={k(4)} />
      <path className="a-s a-d" pathLength={1} d="M306 190l4 4 8-9" style={k(4)} />
    </svg>
  );
}
function Gads() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect className="a-s a-d" pathLength={1} x="26" y="18" width="308" height="40" rx="20" style={k(0)} />
      <path className="a-s a-d a-t" pathLength={1} d="M54 38h150" style={k(1)} />
      <rect className="a-btn a-pop" x="50" y="76" width="34" height="18" rx="3" style={k(1)} />
      <path className="a-s a-d a-g" pathLength={1} d="M96 85h160M50 108h230" style={k(1.5)} />
      {[34, 52, 44, 72, 64, 92].map((h, i) => (
        <rect key={i} className="a-bar" x={54 + i * 46} y={250 - h * 1.5} width="28" height={h * 1.5} rx="2" style={k(i * 0.55)} />
      ))}
      <path className="a-s a-d a-g" pathLength={1} d="M30 252H334" style={k(0)} />
    </svg>
  );
}
function Site() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect className="a-s a-d" pathLength={1} x="24" y="14" width="312" height="238" rx="10" style={k(0)} />
      <path className="a-s a-d" pathLength={1} d="M24 46h312" style={k(0.5)} />
      {[0, 1, 2].map((i) => <circle key={i} className="a-fill" cx={44 + i * 16} cy="30" r="4" />)}
      <path className="a-s a-d a-g" pathLength={1} d="M52 82h150M52 104h118" style={k(1)} />
      <rect className="a-btn a-pop a-ping" x="52" y="132" width="116" height="34" rx="4" style={k(2)} />
      <path className="a-s a-d" pathLength={1} d="M52 192h130M52 210h96" style={k(2.5)} />
      <rect className="a-tile" x="214" y="70" width="98" height="150" rx="6" style={k(2)} />
      <path className="a-s a-d a-t" pathLength={1} d="M228 98h70M228 120h70M228 142h44" style={k(3)} />
      <rect className="a-chip a-pop" x="228" y="176" width="70" height="26" rx="4" style={k(3.5)} />
    </svg>
  );
}
function Reviews() {
  return (
    <svg viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <path className="a-s a-d" pathLength={1} d="M32 40h168a12 12 0 0112 12v76a12 12 0 01-12 12h-96l-28 24v-24H32a12 12 0 01-12-12V52a12 12 0 0112-12z" style={k(0)} />
      <path className="a-s a-d a-g" pathLength={1} d="M44 68h132M44 92h96" style={k(1)} />
      <rect className="a-chip a-pop" x="44" y="106" width="86" height="22" rx="11" style={k(1.5)} />
      <path className="a-s a-d a-g" pathLength={1} d="M214 90C262 90 252 170 290 170" style={k(2)} />
      <circle className="a-s a-d" pathLength={1} cx="304" cy="176" r="30" style={k(3)} />
      <path className="a-s a-d a-t" pathLength={1} d="M290 177l10 10 20-22" style={k(3.5)} />
      <path className="a-s a-d" pathLength={1} d="M52 206h140M52 226h96" style={k(2.5)} />
    </svg>
  );
}
const ARTS = [Grid, Ai, Gbp, Meta, Gads, Site, Reviews];
export default function ChannelArt({ i }: { i: number }) {
  const A = ARTS[i % ARTS.length];
  return <A />;
}
