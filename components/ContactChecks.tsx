"use client";
import { useEffect } from "react";

/**
 * WEBSITE-STANDARD item 20: every form checks phone + email as typed.
 * Mounted once in the root layout so EVERY form (and any added later) is covered.
 * The validator is loaded lazily, only when a form with a phone/email field exists,
 * so pages without forms pay nothing (PSI-sensitive site).
 */
export default function ContactChecks() {
  useEffect(() => {
    let mod: typeof import("@/lib/contact-check") | null = null;
    let loading = false;
    let t: ReturnType<typeof setTimeout> | null = null;
    const run = () => {
      if (!document.querySelector("form")) return;
      if (mod) { mod.attachAll(); return; }
      if (loading) return;
      loading = true;
      import("@/lib/contact-check").then((m) => { mod = m; m.attachAll(); });
    };
    run();
    const mo = new MutationObserver(() => { if (t) clearTimeout(t); t = setTimeout(run, 150); });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { mo.disconnect(); if (t) clearTimeout(t); };
  }, []);
  // Marker in the server HTML so the sweep (CLIENT-STANDARD-CHECKS item 158) can see the checks are wired without a browser.
  return <span hidden data-primara-contact-check="v1" />;
}
