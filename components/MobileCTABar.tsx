"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the bar when the contact form section is in the viewport.
    // Gracefully no-ops on pages that don't have #contact.
    const form = document.getElementById("contact");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    // md:hidden — desktop never sees this element
    <div
      role="complementary"
      aria-label="Quick contact bar"
      className="md:hidden fixed left-0 right-0 z-[500] flex transition-transform duration-300"
      style={{
        bottom: 0,
        height: "calc(60px + env(safe-area-inset-bottom))",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      {/* LEFT 60% — tap-to-call */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center justify-center gap-2 font-bold"
        style={{
          width: "60%",
          backgroundColor: "var(--ember)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          minHeight: "60px",
          textDecoration: "none",
        }}
        aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
      >
        Call {siteConfig.phoneDisplay}
      </a>

      {/* RIGHT 40% — get a quote */}
      <a
        href="/contact"
        className="flex items-center justify-center"
        style={{
          width: "40%",
          color: "var(--smoke)",
          fontFamily: "system-ui, sans-serif",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          minHeight: "60px",
          textDecoration: "none",
        }}
      >
        Get a Quote
      </a>
    </div>
  );
}
