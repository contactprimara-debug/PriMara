'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/* ── Preloader ──────────────────────────────────────────────────────────────
   Letters-fall animation shown only on the homepage.
   Uses React state (not a raw DOM script) to unmount cleanly at 2.6s,
   after the CSS preloader-exit animation completes at ~2.5s.
   On all other pages the component renders nothing immediately.
*/
export default function Preloader() {
  const pathname = usePathname();
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Unmount after CSS exit animation completes (1.8s start + 0.7s duration + buffer)
    const timer = setTimeout(() => setActive(false), 2600);
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
            style={{ animationDelay: `${0.08 * i}s` }}
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
