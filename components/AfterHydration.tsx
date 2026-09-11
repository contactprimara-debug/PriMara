"use client";

import { useEffect, useState } from "react";

/**
 * Renders its children only after the client has hydrated — nothing is emitted
 * into the server-rendered HTML.
 *
 * WHY THIS EXISTS (perf, 2026-09-11, task #179):
 * next/script with strategy="afterInteractive" and a `src` unconditionally
 * calls ReactDOM.preload(src, { as: "script" }) — see
 * node_modules/next/dist/client/script.js, the `if (appDir)` block. There is no
 * prop to opt out. That put two `<link rel="preload" as="script">` hints for the
 * gtag libraries (GT-PB6FNVRG and G-XLC2HTP5SF, ~490 KB of third-party JS) into
 * the <head> of every page, at High priority, competing with the stylesheet and
 * the font files for first paint. That contention is the bimodal FCP stall:
 * PSI mobile lands on either ~0.9-1.7s or ~3.3-3.8s with nothing in between.
 *
 * The tags themselves are NOT changed: same <Script>, same strategy
 * ("afterInteractive"), same ids, same measurement IDs, same order. Because the
 * subtree renders to null on the server, React never emits the preload link;
 * after hydration the Script components mount exactly as before and load the
 * libraries — which is what afterInteractive already meant. Only the priority
 * hint in the initial HTML goes away.
 *
 * Do not "simplify" this back to bare <Script> tags in the server layout
 * without re-measuring — the preload links come straight back.
 */
export default function AfterHydration({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated ? <>{children}</> : null;
}
