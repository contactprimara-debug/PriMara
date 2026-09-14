"use client";

import { useEffect } from "react";

/**
 * Fires the GA4 lead conversion event once when the /thank-you page mounts.
 * Every lead form redirects here on success, so this is the single point of
 * conversion measurement. Marked as a key event ("generate_lead") in GA4.
 * Guarded against double-firing within a session via sessionStorage.
 *
 * Uses window.gtag directly, NOT sendGAEvent from @next/third-parties:
 * sendGAEvent silently no-ops (console.warn, no event) unless <GoogleAnalytics/>
 * has rendered somewhere, and that component was removed 2026-09-14. gtag is
 * defined by the primary GT-PB6FNVRG tag in app/layout.tsx and routes the event
 * to both AW-18204165915 and G-DYRL31NGRH.
 */
export default function LeadConversionPing() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("primara_lead_pinged")) return;
      sessionStorage.setItem("primara_lead_pinged", "1");
    } catch {
      // storage unavailable (private mode) — still fire the event
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        form_destination: "thank-you",
      });
    }
  }, []);

  return null;
}
