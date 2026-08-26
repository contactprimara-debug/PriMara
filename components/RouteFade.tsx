"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ── RouteFade ─────────────────────────────────────────────────────────────
   Wraps page content so client-side navigation fades the new page in
   instead of hard-cutting to it. Keying the wrapper div on `pathname`
   forces React to remount it on every navigation, replaying the CSS
   animation defined in globals.css (`.page-fade`) — no animation library,
   no intercepted link clicks.

   The animation is skipped on the very first render of every page load
   (isFirstRender) — an opacity-0-to-1 animation delays when Chrome counts
   the largest element as "painted" for LCP, regardless of anything visually
   covering it (like the homepage preloader). That's a real cost on a metric
   this site is already tight on, and it buys nothing on a first paint —
   there's no previous page to transition from. It only turns on for
   navigations after that, which is the entire point of the effect anyway.

   `html.js` gates the animation in CSS so a page never renders invisible
   if the script fails to run; this component's only other JS job is adding
   that class once the first time it mounts.
*/
export default function RouteFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    isFirstRender.current = false;
  }, [pathname]);

  if (isFirstRender.current) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
