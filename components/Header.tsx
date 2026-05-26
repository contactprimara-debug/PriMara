"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-[1000] bg-white"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 lg:px-8"
        style={{ maxWidth: "1080px", height: "64px" }}
      >
        {/* ── Logo / wordmark ── */}
        <Link
          href="/"
          aria-label="Primara — home"
          className="font-serif font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "1.35rem",
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
          }}
        >
          PRIMARA
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{
                color:
                  pathname === link.href
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop right: phone + CTA ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
            }}
            aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
          >
            {siteConfig.phoneDisplay}
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-5 font-bold text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-accent)",
              height: "40px",
              fontSize: "0.875rem",
            }}
          >
            Book a Call
          </Link>
        </div>

        {/* ── Mobile right: phone icon + hamburger ── */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label={`Call Primara at ${siteConfig.phoneDisplay}`}
            className="flex items-center justify-center rounded-lg transition-opacity hover:opacity-70"
            style={{
              width: "40px",
              height: "40px",
              color: "var(--color-accent)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3.5 3h3L7.5 6.5l-1.75 1.75a9.5 9.5 0 004 4L11.5 10.5 15 11.5v3A1.5 1.5 0 0113.5 16C7.149 16 2 10.851 2 4.5A1.5 1.5 0 013.5 3z" fill="currentColor" />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center rounded-lg transition-opacity hover:opacity-70"
            style={{ width: "40px", height: "40px", gap: "5px" }}
          >
            <span
              className="block rounded-full transition-all duration-200"
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-text)",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block rounded-full transition-all duration-200"
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-text)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block rounded-full transition-all duration-200"
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-text)",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "380px" : "0",
          borderTop: menuOpen ? "1px solid var(--color-border)" : "none",
          backgroundColor: "white",
        }}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-6 py-4 gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium transition-colors hover:opacity-70"
              style={{
                color:
                  pathname === link.href
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                fontSize: "1rem",
                borderBottom: "1px solid var(--color-border)",
              }}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-lg font-bold text-white"
            style={{
              backgroundColor: "var(--color-accent)",
              height: "48px",
              fontSize: "1rem",
            }}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
