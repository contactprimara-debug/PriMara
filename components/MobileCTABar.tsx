"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig, STANDALONE_ROUTES } from "@/lib/siteConfig";

/* ── MobileCTABar ──────────────────────────────────────────────────────────
   Sticky tap-to-call bar, mobile only (md:hidden — desktop never renders it).

   Visibility rules:
   - Hidden until the visitor scrolls past the hero (~500px). Showing it
     immediately would cover the hero's own CTA on first paint.
   - Hidden again whenever a lead form is on screen — the bar exists to get
     people TO a form, so it must never sit on top of one.

   Form anchors watched: #contact (homepage ContactFinal), #contact-form
   (/contact ContactSection), #inquire (/packages/*). IDs are checked on
   every page; absent ones are simply skipped.

   Body gets `has-mobile-cta` so globals.css can pad the footer clear of the
   bar on small screens.
*/

const FORM_IDS = ["contact", "contact-form", "inquire"];
const SHOW_AFTER_PX = 500;

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("has-mobile-cta");
    return () => document.body.classList.remove("has-mobile-cta");
  }, []);

  useEffect(() => {
    // One scroll handler decides everything: past the hero, and not sitting
    // on top of a form. Deliberately not an IntersectionObserver — a single
    // code path is easier to reason about, and rect reads on ≤3 elements
    // after a scroll are cheap (layout is already clean at that point).
    const update = () => {
      const pastHero = window.scrollY > SHOW_AFTER_PX;
      const viewportH = window.innerHeight;
      const formOnScreen = FORM_IDS.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < viewportH && r.bottom > 0;
      });
      setVisible(pastHero && !formOnScreen);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Standalone landing pages ship their own CTAs — this bar would be redundant.
  if (STANDALONE_ROUTES.includes(pathname)) return null;

  return (
    <div
      role="complementary"
      aria-label="Quick contact bar"
      aria-hidden={!visible}
      className="md:hidden fixed left-0 right-0 flex"
      style={{
        bottom: 0,
        zIndex: 500,
        height: "calc(60px + env(safe-area-inset-bottom))",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.3s ease",
        // Non-interactive while hidden so it can't swallow taps off-screen.
        pointerEvents: visible ? "auto" : "none",
        willChange: "transform",
      }}
    >
      {/* LEFT 60% — tap-to-call */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center justify-center gap-2"
        style={{
          width: "60%",
          backgroundColor: "var(--ember)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textDecoration: "none",
        }}
        aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
        tabIndex={visible ? undefined : -1}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 2.5h2.5L6.5 5.5l-1.5 1.5a8 8 0 003.5 3.5L10 9l3 1v2.5A1.5 1.5 0 0111.5 14C5.7 14 1 9.3 1 3.5A1.5 1.5 0 013 2z"
            fill="currentColor"
          />
        </svg>
        Call {siteConfig.phoneDisplay}
      </a>

      {/* RIGHT 40% — straight to the form */}
      <a
        href="/contact#contact-form"
        className="flex items-center justify-center"
        style={{
          width: "40%",
          color: "var(--chalk)",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          borderLeft: "1px solid var(--wire)",
        }}
        tabIndex={visible ? undefined : -1}
      >
        Free Audit
      </a>
    </div>
  );
}
