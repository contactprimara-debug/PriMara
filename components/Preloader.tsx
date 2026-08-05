'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/* ── Preloader ──────────────────────────────────────────────────────────────
   Letters-fall animation shown only on the homepage.
   Uses React state (not a raw DOM script) to unmount cleanly at 1.35s,
   after the CSS preloader-exit animation completes at ~1.25s.
   On all other pages the component renders nothing immediately.

   Kept intentionally short — see the timing comment in globals.css. This
   opaque overlay directly delays Largest Contentful Paint for as long as
   it covers the hero; don't lengthen it without re-measuring on PageSpeed
   Insights (mobile).
*/
export default function Preloader() {
  const pathname = usePathname();
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Unmount after CSS exit animation completes (0.85s start + 0.4s duration + buffer)
    const timer = setTimeout(() => setActive(false), 1350);
    return () => clearTimeout(timer);
  }, []);

  if (pathname !== '/' || !active) return null;

  return (
    <div id="preloader" aria-hidden="true">
      <div id="preloader-text">
        {'Primara'.split('').map((char, i) => (
          <span
            key={i}
            className="preloader-letter"
            style={{ animationDelay: `${0.04 * i}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div id="preloader-bar">
        <div id="preloader-fill" />
      </div>
    </div>
  );
}
