"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "The Audit", href: "/the-audit" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main nav bar ─────────────────────────────────────────────────── */}
      {/*
        Opacity intentionally NOT set here — GSAP (HeroAnimation.tsx) owns
        the opacity property and animates it in after the preloader exits.
        React only controls background/blur on scroll.
      */}
      <header
        id="main-nav"
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "calc(60px + env(safe-area-inset-top))",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: 0,
          paddingLeft: "clamp(24px, 5vw, 64px)",
          paddingRight: "clamp(24px, 5vw, 64px)",
          zIndex: 1000,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          background: scrolled ? "rgba(5,5,5,0.9)" : "rgba(5,5,5,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid var(--wire)" : "1px solid transparent",
          transition:
            "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Left — wordmark (magnetic pull wired by InteractionEffects) */}
        <Link
          href="/"
          aria-label="Primara — home"
          className="magnetic"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "18px",
            color: "var(--chalk)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            display: "inline-block",
          }}
        >
          Primara
        </Link>

        {/* Center — desktop nav links */}
        {/* NOTE: no display in style prop — display is controlled by hidden/md:flex classes only */}
        <nav
          aria-label="Primary navigation"
          style={{
            alignItems: "center",
            gap: "36px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="nav-link"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "11px",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: active ? "var(--chalk)" : "var(--smoke)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right — phone + CTA */}
        <div
          className="hidden md:flex"
          style={{
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "var(--smoke)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {siteConfig.phoneDisplay}
          </a>

          <Link
            href="/contact"
            className="magnetic"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--ember)",
              color: "#ffffff",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              padding: "10px 20px",
              borderRadius: "3px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Get My Free Audit
          </Link>
        </div>

        {/* Right — mobile hamburger */}
        <div
          className="flex md:hidden"
          style={{ justifyContent: "flex-end" }}
        >
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "var(--chalk)",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile menu — full-screen overlay ──────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--void)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(20px, 4vh, 36px)",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "18px",
              right: "24px",
              background: "none",
              border: "none",
              color: "var(--smoke)",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Close
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Nav items — large Instrument Serif */}
          <nav aria-label="Mobile navigation">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center", display: "flex", flexDirection: "column", gap: "clamp(16px, 3vh, 28px)" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(32px, 7vw, 56px)",
                      color:
                        pathname === link.href
                          ? "var(--gold)"
                          : "var(--chalk)",
                      textDecoration: "none",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "var(--ember)",
              color: "#ffffff",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "16px 40px",
              borderRadius: "3px",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            Get My Free Audit
          </Link>

          {/* Bottom contact line */}
          <a
            href={`tel:${siteConfig.phone}`}
            style={{
              position: "absolute",
              bottom: "40px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "var(--smoke)",
              textDecoration: "none",
            }}
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
    </>
  );
}
