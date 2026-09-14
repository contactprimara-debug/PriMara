"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * SPA route-change page_views for our GA4 property (G-DYRL31NGRH, 552664101).
 *
 * WHY THIS EXISTS (2026-09-14):
 * This used to be <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID}/> from
 * @next/third-parties. That env var held G-XLC2HTP5SF — a tag on a Google
 * account none of our logins own (verified in the GA UI) — so it was removed.
 *
 * We did NOT simply re-point <GoogleAnalytics/> at G-DYRL31NGRH, because that
 * component injects a SECOND full gtag.js library (~159 KB) on every page load
 * on top of the GT-PB6FNVRG primary tag in app/layout.tsx. G-DYRL31NGRH is
 * already a configured destination on that primary tag, so the extra library
 * bought nothing except SPA page_views — which is all this ~30 lines does.
 *
 * The initial page_view is sent by gtag('config','G-DYRL31NGRH') in the layout,
 * so the first render here is deliberately skipped to avoid a double count.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-DYRL31NGRH";

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      // gtag('config', GA_ID) already counted this one.
      first.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    window.gtag("event", "page_view", {
      send_to: GA_ID,
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function GAPageViews() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
