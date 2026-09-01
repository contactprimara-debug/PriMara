"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Fires the GA4 lead conversion event once when the /thank-you page mounts.
 * Every lead form redirects here on success, so this is the single point of
 * conversion measurement. Marked as a key event ("generate_lead") in GA4.
 * Guarded against double-firing within a session via sessionStorage.
 */
export default function LeadConversionPing() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("primara_lead_pinged")) return;
      sessionStorage.setItem("primara_lead_pinged", "1");
    } catch {
      // storage unavailable (private mode) — still fire the event
    }
    sendGAEvent("event", "generate_lead", {
      form_destination: "thank-you",
    });
  }, []);

  return null;
}
