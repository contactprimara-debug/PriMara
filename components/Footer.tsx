import Link from "next/link";

/* ── Footer ────────────────────────────────────────────────────────────────
   Site-wide footer rendered in layout.tsx.

   NAP block (col 1) must match GBP character-for-character.
   Update street address and ZIP before launch.

   Three columns: Brand + NAP | Navigation | Services
   Bottom bar: copyright + legal links
*/

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "The Audit", href: "/the-audit" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "GBP Optimization", href: "/services/google-business-profile" },
  { label: "Website Rebuild", href: "/services/medical-practice-website-design" },
  { label: "Review Generation", href: "/services/online-reputation-management" },
  { label: "Local SEO Content", href: "/services/local-seo-for-medical-practices" },
  { label: "Patient Acquisition Ads", href: "/services/patient-acquisition-ads" },
];

const WHO_WE_SERVE_LINKS = [
  { label: "Primary Care", href: "/primary-care" },
  { label: "Mental Health", href: "/mental-health" },
];

const LOCATIONS_LINKS = [
  { label: "All Locations", href: "/locations" },
  { label: "Miami", href: "/locations/miami-fl" },
  { label: "Fort Lauderdale", href: "/locations/fort-lauderdale-fl" },
  { label: "Boca Raton", href: "/locations/boca-raton-fl" },
  { label: "West Palm Beach", href: "/locations/west-palm-beach-fl" },
  { label: "Palm Beach Gardens", href: "/locations/palm-beach-gardens-fl" },
  { label: "Delray Beach", href: "/locations/delray-beach-fl" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        padding: "clamp(32px, 5vw, 48px) 0 clamp(16px, 3vw, 24px)",
      }}
    >
      <div style={{ padding: "0 clamp(24px, 8vw, 120px)" }}>

        {/* ── Four-column grid ──────────────────────────────────────────────── */}
        <div className="footer-grid" style={{ marginBottom: "clamp(32px, 5vw, 48px)" }}>

          {/* Col 1: Brand + description + NAP ──────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Wordmark */}
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "var(--chalk)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              Primara
            </Link>

            {/* Description */}
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--smoke)",
                lineHeight: 1.75,
                maxWidth: "260px",
              }}
            >
              Primara is an independent digital marketing agency in Florida,
              exclusively serving independent healthcare practices.
            </p>

            {/* NAP block — character-for-character GBP match */}
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  color: "var(--ash)",
                  letterSpacing: "0.04em",
                }}
              >
                Primara
              </span>
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  color: "var(--ash)",
                  letterSpacing: "0.04em",
                }}
              >
                West Palm Beach, FL 33401
              </span>
              <a
                href="tel:+15612912681"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  color: "var(--gold)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  marginTop: "4px",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                +1 (561) 291-2681
              </a>
              <a
                href="mailto:liam.costello@primara365.com"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  color: "var(--gold)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                liam.costello@primara365.com
              </a>
            </address>
          </div>

          {/* Col 2: Navigation ──────────────────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Services ────────────────────────────────────────────────── */}
          <nav aria-label="Services navigation">
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "20px",
              }}
            >
              Services
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Who We Serve ─────────────────────────────────────────────── */}
          <nav aria-label="Who we serve navigation">
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "20px",
              }}
            >
              Who We Serve
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {WHO_WE_SERVE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 5: Locations ────────────────────────────────────────────────── */}
          <nav aria-label="Locations navigation">
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "20px",
              }}
            >
              Locations
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {LOCATIONS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 6: Resources ────────────────────────────────────────────────── */}
          <nav aria-label="Resources navigation">
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "20px",
              }}
            >
              Resources
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {RESOURCES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
        {/* end footer-grid */}

        {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid var(--wire)",
            paddingTop: "clamp(14px, 2vw, 20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Copyright */}
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              color: "var(--smoke)",
              letterSpacing: "0.06em",
            }}
          >
            © {year} Primara. All rights reserved.
          </span>

          {/* Legal links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Link
              href="/privacy"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                color: "var(--smoke)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
            >
              Privacy Policy
            </Link>
            <span
              aria-hidden="true"
              style={{ color: "var(--wire)", fontSize: "10px" }}
            >
              ·
            </span>
            <Link
              href="/hipaa"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                color: "var(--smoke)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
            >
              HIPAA Notice
            </Link>
            <span
              aria-hidden="true"
              style={{ color: "var(--wire)", fontSize: "10px" }}
            >
              ·
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                color: "var(--smoke)",
                letterSpacing: "0.06em",
              }}
            >
              HIPAA-Aware Agency
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
