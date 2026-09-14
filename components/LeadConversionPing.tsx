"use client";

import { useEffect } from "react";

/**
 * Fires the GA4 lead conversion event once when the /thank-you page mounts.
 * Every lead form redirects here on success (router.push("/thank-you")), so
 * this is the single point of conversion measurement. Marked as a key event
 * ("generate_lead") in GA4. Guarded against double-firing via sessionStorage.
 *
 * BUG FIXED 2026-09-14 (task #201) — why this is not a bare `if (window.gtag)`:
 * the gtag snippet in app/layout.tsx is wrapped in <AfterHydration>, which
 * renders null on the server and only mounts its children from its OWN
 * useEffect. next/script then injects the inline tag with
 * strategy="afterInteractive". Both of those happen strictly AFTER this
 * component's useEffect runs, so `window.gtag` was ALWAYS undefined at mount
 * and the event silently never fired. Worse, the old code set the
 * sessionStorage guard BEFORE the check, so the miss was latched for the whole
 * session and a later navigation could not recover it either.
 *
 * We deliberately do NOT just push onto window.dataLayer and call it done.
 * gtag.js replays its queue IN ORDER, so an event queued ahead of the
 * gtag('config', ...) calls has no configured destination yet and is dropped.
 * Waiting for window.gtag to exist is what guarantees correct ordering: the
 * inline snippet defines gtag() and runs all three config() calls in the same
 * synchronous script, so the moment window.gtag is a function the destinations
 * are already queued ahead of us.
 *
 GOOGLE ADS (added 2026-09-14, task #201): the account's pre-existing
 * SUBMIT_LEAD_FORM actions were all WEBPAGE_CODELESS, which carry no tag
 * snippet and therefore no label to fire deliberately. A snippet-based WEBPAGE
 * action was created on customer 7881408911 — "Website lead — primara365.com",
 * id 7767761259, category SUBMIT_LEAD_FORM, primary, ONE_PER_CLICK — and its
 * event snippet gives the send_to below. It rides the SAME wait-for-gtag path
 * as generate_lead, for the same ordering reason: AW-18204165915 is a
 * destination on the primary GT-PB6FNVRG tag, so the config() for it is only
 * queued once window.gtag exists.
 */
const GA_ID = "G-DYRL31NGRH";
const ADS_CONVERSION_SEND_TO = "AW-18204165915/YK5gCOvC-vccEJuOtuhD";
const RETRY_MS = 150;
const MAX_WAIT_MS = 15000;

export default function LeadConversionPing() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("primara_lead_pinged")) return;
    } catch {
      // storage unavailable (private mode) — fall through and still fire
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const deadline = Date.now() + MAX_WAIT_MS;

    const fire = () => {
      if (cancelled) return;

      if (typeof window.gtag !== "function") {
        if (Date.now() < deadline) {
          timer = setTimeout(fire, RETRY_MS);
        }
        return;
      }

      window.gtag("event", "generate_lead", {
        send_to: GA_ID,
        form_destination: "thank-you",
      });

      window.gtag("event", "conversion", {
        send_to: ADS_CONVERSION_SEND_TO,
      });

      // Only latch the guard once the event has actually been handed to gtag.
      try {
        sessionStorage.setItem("primara_lead_pinged", "1");
      } catch {
        // ignore
      }
    };

    fire();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  return null;
}
