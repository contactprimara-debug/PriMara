'use client';

import { useRef } from 'react';
import styles from './Marquee.module.css';

/* ── Content items ─────────────────────────────────────────────────────────
   The inner belt renders 12 repetitions (2 halves of 6).
   CSS animates from 0 → -50%, so the second half is identical to the
   first, creating a seamless infinite loop at any viewport width.
*/
const ITEMS = [
  'HIPAA-Aware Strategy',
  'Founder-Led — No Account Managers',
  'West Palm Beach, FL',
  'Independent Practices Only',
  'Free Audit — No Obligation',
  'GBP · SEO · Website · Reviews',
  'Response Within 1 Business Day',
];

const textStyle: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontStyle: 'italic',
  fontSize: '14px',
  color: 'var(--smoke)',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap',
};

const dotStyle: React.CSSProperties = {
  color: 'var(--gold)',
  margin: '0 20px',
  fontSize: '14px',
  lineHeight: 1,
  flexShrink: 0,
};

/** One full set of items — rendered 12 times for seamless loop */
function ItemSet({ id }: { id: number }) {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={`${id}-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span style={textStyle}>{item}</span>
          <span style={dotStyle} aria-hidden="true">·</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  const innerRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (innerRef.current) innerRef.current.style.animationPlayState = 'paused';
  };
  const play = () => {
    if (innerRef.current) innerRef.current.style.animationPlayState = 'running';
  };

  return (
    <div
      className={styles.outer}
      role="marquee"
      aria-label="Primara — local SEO, GBP optimization, website builds, and review management for independent medical practices in Florida"
    >
      <div
        ref={innerRef}
        className={styles.inner}
        onMouseEnter={pause}
        onMouseLeave={play}
      >
        {/* 12 repetitions = 2 identical halves of 6 → -50% loops seamlessly */}
        {[...Array(12)].map((_, i) => (
          <ItemSet key={i} id={i} />
        ))}
      </div>
    </div>
  );
}
