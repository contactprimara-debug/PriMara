"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the bar when the contact form section is in the viewport.
    // Gracefully no-ops on pages that don't have #contact-form.
    const form = document.getElementById("contact-form");
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
        backgroundColor: "var(--color-primary)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        // Slide off-screen when contact form is visible
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      {/* LEFT 60% — tap-to-call */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center justify-center gap-2 font-bold text-white"
        style={{
          width: "60%",
          backgroundColor: "var(--color-accent)",
          fontSize: "15px",
          minHeight: "60px",
        }}
        aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
      >
        📞 Call {siteConfig.phoneDisplay}
      </a>

      {/* RIGHT 40% — get a quote */}
      <a
        href="/contact"
        className="flex items-center justify-center text-white"
        style={{
          width: "40%",
          fontSize: "13px",
          opacity: 0.8,
          minHeight: "60px",
        }}
      >
        Get a Quote →
      </a>
    </div>
  );
}
