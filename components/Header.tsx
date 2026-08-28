"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, STANDALONE_ROUTES } from "@/lib/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Motivation", href: "/motivation" },
  { label: "The Audit", href: "/the-audit" },
  { label: "Contact", href: "/contact" },
];

const WHO_WE_SERVE = [
  { label: "Men's Health", href: "/mens-health" },
  { label: "Primary Care", href: "/primary-care" },
  { label: "Mental Health", href: "/mental-health" },
];

const RESOURCES = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Results", href: "/results" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const resourcesCloseTimer = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWhoWeServeOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


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

  // Standalone landing pages ship their own minimal header — no sitewide nav.
  if (STANDALONE_ROUTES.includes(pathname)) return null;

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
          aria-label="Primara365 — home"
          className="magnetic"
          style={{
            display: "inline-block",
            marginRight: "clamp(16px, 2.2vw, 36px)",
          }}
        >
          <img
            src="/primara-logo.png"
            alt="Primara365"
            style={{ height: "28px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Center — desktop nav links */}
        {/* NOTE: no display in style prop — display is controlled by hidden/md:flex classes only */}
        <nav
          aria-label="Primary navigation"
          style={{
            alignItems: "center",
            gap: "clamp(16px, 2.2vw, 36px)",
          }}
          className="hidden md:flex"
        >
          {/* Home */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className="nav-link"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: pathname === "/" ? "var(--chalk)" : "var(--smoke)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Home
          </Link>

          {/* Who We Serve dropdown — opens on hover */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={() => { clearTimeout(closeTimer.current); setWhoWeServeOpen(true); }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setWhoWeServeOpen(false), 120); }}
          >
            <button
              onClick={() => setWhoWeServeOpen((o) => !o)}
              aria-expanded={whoWeServeOpen}
              aria-haspopup="true"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: (pathname === "/primary-care" || pathname === "/mental-health")
                  ? "var(--chalk)"
                  : whoWeServeOpen
                  ? "var(--chalk)"
                  : "var(--smoke)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
              }}
            >
              Who We Serve
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                aria-hidden="true"
                style={{
                  transition: "transform 0.2s",
                  transform: whoWeServeOpen ? "rotate(180deg)" : "none",
                }}
              >
                <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {whoWeServeOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(13,13,13,0.98)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "8px",
                  minWidth: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  zIndex: 1100,
                }}
              >
                {WHO_WE_SERVE.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setWhoWeServeOpen(false)}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: pathname === item.href ? "var(--gold)" : "var(--ash)",
                      textDecoration: "none",
                      padding: "10px 14px",
                      borderRadius: "2px",
                      transition: "color 0.15s, background 0.15s",
                      display: "block",
                      whiteSpace: "nowrap",
                    }}
                    className="dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations link */}
          <Link
            href="/locations"
            aria-current={pathname === "/locations" || pathname.startsWith("/locations/") ? "page" : undefined}
            className="nav-link"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              color: pathname.startsWith("/locations") ? "var(--chalk)" : "var(--smoke)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Locations
          </Link>

          {/* Resources dropdown */}
          <div
            ref={resourcesRef}
            style={{ position: "relative" }}
            onMouseEnter={() => { clearTimeout(resourcesCloseTimer.current); setResourcesOpen(true); }}
            onMouseLeave={() => { resourcesCloseTimer.current = setTimeout(() => setResourcesOpen(false), 120); }}
          >
            <button
              onClick={() => setResourcesOpen((o) => !o)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: RESOURCES.some((r) => pathname === r.href) ? "var(--chalk)" : resourcesOpen ? "var(--chalk)" : "var(--smoke)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
              }}
            >
              Resources
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true" style={{ transition: "transform 0.2s", transform: resourcesOpen ? "rotate(180deg)" : "none" }}>
                <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {resourcesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(13,13,13,0.98)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "8px",
                  minWidth: "140px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  zIndex: 1100,
                }}
              >
                {RESOURCES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setResourcesOpen(false)}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: pathname === item.href ? "var(--gold)" : "var(--ash)",
                      textDecoration: "none",
                      padding: "10px 14px",
                      borderRadius: "2px",
                      transition: "color 0.15s, background 0.15s",
                      display: "block",
                      whiteSpace: "nowrap",
                    }}
                    className="dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining nav links */}
          {navLinks.filter((l) => l.href !== "/").map((link) => {
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
            aria-label={`Call Primara365 at ${siteConfig.phoneDisplay}`}
            className="nav-phone"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "var(--smoke)",
              textDecoration: "none",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
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

          {/* Nav items */}
          <nav aria-label="Mobile navigation" style={{ width: "100%", maxWidth: "320px", padding: "0 24px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center", display: "flex", flexDirection: "column", gap: "clamp(14px, 2.5vh, 24px)" }}>
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(32px, 7vw, 56px)",
                    color: pathname === "/" ? "var(--gold)" : "var(--chalk)",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  Home
                </Link>
              </li>

              {/* Who We Serve — labeled group with full-size links */}
              <li>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "10px" }}>
                  Who We Serve
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {WHO_WE_SERVE.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "clamp(24px, 5vw, 40px)",
                        color: pathname === item.href ? "var(--gold)" : "var(--chalk)",
                        textDecoration: "none",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        display: "block",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Locations */}
              <li>
                <Link
                  href="/locations"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(32px, 7vw, 56px)",
                    color: pathname.startsWith("/locations") ? "var(--gold)" : "var(--chalk)",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  Locations
                </Link>
              </li>

              {/* Resources — labeled group */}
              <li>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "10px" }}>
                  Resources
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {RESOURCES.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "clamp(24px, 5vw, 40px)",
                        color: pathname === item.href ? "var(--gold)" : "var(--chalk)",
                        textDecoration: "none",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        display: "block",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Remaining nav links */}
              {navLinks.filter((l) => l.href !== "/").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(32px, 7vw, 56px)",
                      color: pathname === link.href ? "var(--gold)" : "var(--chalk)",
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
