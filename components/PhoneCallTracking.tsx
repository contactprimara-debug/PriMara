"use client";

import { useEffect } from "react";

/**
 * Sitewide `phone_call` tracking for every tel: link.
 *
 * WHY (2026-09-22): PAGE-STANDARD.md requires both tracking legs on every page
 * — a form that fires the conversion snippet, and tel: links that fire a
 * phone_call event. The form leg has existed since generate_lead was wired on
 * /thank-you; the phone leg did not exist anywhere on this site, so every call
 * placed from a page was invisible in GA4.
 *
 * Implementation notes:
 * - One delegated listener on document, capture phase, so it covers tel: links
 *   rendered by any page, including ones added after hydration. No per-link
 *   wiring and nothing added to the server HTML.
 * - Fires to the same destinations already configured in app/layout.tsx
 *   (GT-PB6FNVRG carries G-DYRL31NGRH and AW-18204165915). No new tag, no new
 *   library, no extra network weight.
 * - Fails silently when gtag is not yet loaded. A dropped analytics event must
 *   never interfere with the user actually placing the call, so there is no
 *   retry loop and no preventDefault anywhere in this file.
 * - No PHI: only the page path and the dialed number (our own) are sent.
 */
export default function PhoneCallTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      const number = (link.getAttribute("href") || "").replace(/^tel:/i, "").trim();

      try {
        window.gtag?.("event", "phone_call", {
          phone_number: number,
          page_path: window.location.pathname,
          link_text: (link.textContent || "").trim().slice(0, 60),
        });
      } catch {
        // Analytics must never break a phone call.
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
