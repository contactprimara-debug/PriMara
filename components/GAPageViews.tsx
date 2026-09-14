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
 *
 * HARDENED 2026-09-14 (task #201): this used to `return` when window.gtag was
 * not yet defined. The gtag snippet lives inside <AfterHydration> with
 * next/script strategy="afterInteractive", so on a fast client-side navigation
 * the effect can run before gtag exists and that page_view was dropped with no
 * way to recover it. Same fix as LeadConversionPing: poll for window.gtag up to
 * MAX_WAIT_MS instead of bailing, and cancel on unmount/route change so a
 * pending retry never fires the wrong path.
 */
const RETRY_MS = 150;
const MAX_WAIT_MS = 15000;
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
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    const href = window.location.href;
    const title = document.title;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const deadline = Date.now() + MAX_WAIT_MS;

    const send = () => {
      if (cancelled) return;
      if (typeof window.gtag !== "function") {
        if (Date.now() < deadline) timer = setTimeout(send, RETRY_MS);
        return;
      }
      window.gtag("event", "page_view", {
        send_to: GA_ID,
        page_path: path,
        page_location: href,
        page_title: title,
      });
    };

    send();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
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
