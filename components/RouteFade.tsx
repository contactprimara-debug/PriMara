"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* ── RouteFade ─────────────────────────────────────────────────────────────
   Wraps page content so client-side navigation fades the new page in
   instead of hard-cutting to it. Keying the wrapper div on `pathname`
   forces React to remount it on every navigation, replaying the CSS
   animation defined in globals.css (`.page-fade`) — no animation library,
   no intercepted link clicks.

   `html.js` gates the animation in CSS so a page never renders invisible
   if the script fails to run; this component's only JS job is adding that
   class once the first time it mounts.
*/
export default function RouteFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
