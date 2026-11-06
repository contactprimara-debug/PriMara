"use client";

import { useEffect, useRef, useState } from "react";

/* ── ConsentBanner (card #598 A15, 2026-11-06) ─────────────────────────────
   Google Consent Mode v2. app/layout.tsx sets every consent signal to DENIED
   before any Google tag is configured (and restores a saved "yes" at once), so
   until a visitor accepts, the tags set no cookies and read no identifiers.
   Pings are cookieless; the lead event on /thank-you and tel: taps are still
   counted, so measurement of real enquiries is kept.
   A browser Global Privacy Control signal counts as "no" and never shows the
   banner. The choice lives in localStorage ("p365_consent") for 365 days.
   The footer's "Privacy choices" button re-opens this banner. */

const KEY = "p365_consent";
const TTL = 365 * 864e5;
type Gtag = (...a: unknown[]) => void;

function readChoice(): boolean | null {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "null");
    if (v && typeof v.a === "boolean" && v.t && Date.now() - v.t < TTL) return v.a;
  } catch {
    /* storage blocked: treat as no choice yet */
  }
  return null;
}

function apply(granted: boolean) {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g !== "function") return;
  const v = granted ? "granted" : "denied";
  g("consent", "update", { analytics_storage: v, ad_storage: v, ad_user_data: v, ad_personalization: v });
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const firstBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const gpc = !!(navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl;
    const c = readChoice();
    if (gpc) {
      try { localStorage.setItem(KEY, JSON.stringify({ a: false, t: Date.now(), v: 1 })); } catch { /* ignore */ }
      apply(false);
    } else if (c === null) {
      setOpen(true);
    }
    const reopen = () => setOpen(true);
    window.addEventListener("p365-consent-open", reopen);
    return () => window.removeEventListener("p365-consent-open", reopen);
  }, []);

  useEffect(() => {
    if (open) firstBtn.current?.focus({ preventScroll: true });
  }, [open]);

  function choose(granted: boolean) {
    try { localStorage.setItem(KEY, JSON.stringify({ a: granted, t: Date.now(), v: 1 })); } catch { /* ignore */ }
    apply(granted);
    setOpen(false);
  }

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-label="Privacy choice"
      className="fixed z-[60] left-3 right-3 md:left-6 md:right-auto md:max-w-[440px]"
      style={{
        bottom: "calc(72px + env(safe-area-inset-bottom))",
        background: "var(--surface)",
        border: "1px solid var(--wire)",
        color: "var(--chalk)",
        padding: "16px 18px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ fontSize: 14, lineHeight: 1.5, margin: "0 0 12px" }}>
        We measure how this site is used only if you say yes. Say no and nothing is stored on your device.{" "}
        <a href="/privacy" style={{ color: "var(--gold)", textDecoration: "underline" }}>Privacy Policy</a>
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          ref={firstBtn}
          type="button"
          onClick={() => choose(true)}
          style={{ background: "var(--gold)", color: "#050505", fontWeight: 600, fontSize: 14, padding: "12px 18px", minHeight: 44, border: 0, cursor: "pointer" }}
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          style={{ background: "transparent", color: "var(--chalk)", fontSize: 14, padding: "12px 18px", minHeight: 44, border: "1px solid var(--wire)", cursor: "pointer" }}
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
