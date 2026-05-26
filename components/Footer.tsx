import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "The Audit", href: "/the-audit" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Google Business Profile Management", href: "/services#google-business-profile" },
  { label: "Medical Practice Website Design", href: "/services#medical-practice-website-design" },
  { label: "Local SEO for Medical Practices", href: "/services#local-seo-for-medical-practices" },
  { label: "Online Reputation Management", href: "/services#online-reputation-management" },
  { label: "Patient Acquisition Ads", href: "/services#patient-acquisition-ads" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
    >
      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Column 1: NAP block — must match GBP character-for-character */}
          <div className="flex flex-col gap-4">
            <span
              className="font-serif font-bold"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "1.35rem",
                letterSpacing: "-0.01em",
              }}
            >
              PRIMARA
            </span>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
              Digital marketing for independent primary care practices in West Palm Beach, FL.
            </p>

            {/* NAP — character-for-character GBP match */}
            <address
              className="not-italic flex flex-col gap-1"
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}
            >
              {/* ⚠ Update street + ZIP to match GBP exactly before launch */}
              <span>Primara</span>
              <span>PLACEHOLDER — Add street address</span>
              <span>West Palm Beach, FL XXXXX</span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.url}
                className="transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {siteConfig.url}
              </a>
            </address>
          </div>

          {/* Column 2: Quick links */}
          <nav aria-label="Footer navigation">
            <p
              className="mb-4 text-xs uppercase tracking-widest font-medium"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)" }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Services */}
          <nav aria-label="Services navigation">
            <p
              className="mb-4 text-xs uppercase tracking-widest font-medium"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)" }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="mx-auto max-w-content px-6 lg:px-8 py-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}
        >
          <span>© {year} Primara. All rights reserved.</span>
          <span>
            Founded by{" "}
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              Liam Costello &amp; Gio LaRoche
            </span>{" "}
            · West Palm Beach, FL
          </span>
        </div>
      </div>
    </footer>
  );
}
