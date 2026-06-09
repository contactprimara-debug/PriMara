import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import PackageInquiryForm from "@/components/PackageInquiryForm";

export const metadata: Metadata = {
  title: "Visibility Package — Foundation + Google Ads | Primara",
  description:
    "$1,800/mo Visibility Package: everything in the Foundation Package plus Google Ads management for independent healthcare practices in Florida. You pay Google directly. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/packages/visibility" },
  openGraph: {
    title: "Visibility Package — Foundation + Google Ads | Primara",
    description:
      "$1,800/mo: Foundation Package + Google Ads management for independent healthcare practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/packages/visibility",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Packages", item: "https://primara365.com/packages/visibility" },
    { "@type": "ListItem", position: 3, name: "Visibility", item: "https://primara365.com/packages/visibility" },
  ],
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visibility Package — Medical Practice Marketing",
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Florida" },
  description:
    "Visibility Package for independent healthcare practices in Florida: full Google Business Profile management, website rebuild, review generation system, monthly SEO content, and comprehensive reporting.",
  offers: {
    "@type": "Offer",
    price: "1800",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1800",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
};

const included = [
  {
    title: "Everything in the Foundation Package",
    detail:
      "GBP optimization (8–10 categories, 30+ services, 4 posts/month, 1 photo/month), 2 monthly SEO content pages, review management across all platforms, NAP consistency monitoring, technical SEO, and monthly performance reports. Founder access throughout.",
  },
  {
    title: "Google Ads Management",
    detail:
      "Keyword research targeting new patient acquisition in your local area. We write all ad copy, build and optimize landing pages, manage bids and negative keywords monthly, and A/B test ad variations. Quarterly strategy review call included.",
  },
  {
    title: "Ads Transparency — You Own the Account",
    detail:
      "You pay Google ad spend directly to Google. Primara never touches your ad budget and never marks it up. You own the Google Ads account; we manage it as an authorized user. Typical client ad spend: $300–$600/month directly to Google.",
  },
  {
    title: "Ads Performance Reporting",
    detail:
      "Monthly ads performance report included alongside your standard Foundation report — impressions, clicks, cost per new-patient inquiry, and a clear budget recommendation for the following month.",
  },
  {
    title: "Timing: Month 3+ Only",
    detail:
      "Google Ads on a weak GBP or unoptimized website is wasted spend. We introduce ads only after your GBP and website foundation are solid — typically at the start of Month 3. The first two months are foundation-building.",
  },
  {
    title: "Founder Access Throughout",
    detail:
      "Liam Costello or Gio LaRoche runs your account end to end — strategy, ads setup, content, and reporting. No account coordinators, no handoffs after the sales call.",
  },
];

export default function VisibilityPackagePage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(offerSchema) }} />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={{ padding: "76px clamp(24px, 8vw, 120px) 0" }}>
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--smoke)",
          }}
        >
          <li>
            <Link href="/" className="breadcrumb-link">Home</Link>
          </li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>/</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>Visibility Package</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="pkg-h1"
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "clamp(48px, 6vw, 80px) clamp(24px, 8vw, 120px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(ellipse 70vw 60vh at 10% 30%, rgba(232,97,26,0.10) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 90% 80%, rgba(201,168,76,0.10) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              border: "1px solid var(--wire)",
              padding: "6px 14px",
              borderRadius: "2px",
              marginBottom: "clamp(28px, 4vw, 40px)",
            }}
          >
            Package 02 · Visibility
          </div>

          <h1
            id="pkg-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 40px)",
              maxWidth: "14ch",
            }}
          >
            Total{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Visibility
            </em>
            , end to end.
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.65,
              color: "var(--ash)",
              maxWidth: "56ch",
              margin: "0 0 clamp(32px, 4vw, 48px)",
            }}
          >
            Everything in the Foundation Package, plus active Google Ads management. We write the ads, manage the bids, and report on cost per new-patient inquiry every month. You pay Google directly &mdash; we never touch your ad budget.
          </p>

          {/* Price block */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "6px",
              padding: "20px 28px",
              background: "var(--surface)",
              border: "1px solid var(--gold)",
              borderRadius: "4px",
              marginBottom: "clamp(32px, 4vw, 48px)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(48px, 6vw, 72px)",
                color: "var(--chalk)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              $1,800
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontStyle: "normal",
                  fontSize: "13px",
                  color: "var(--smoke)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginLeft: "12px",
                }}
              >
                / month
              </span>
            </div>
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                color: "var(--gold)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              + $1,500 one-time setup · website rebuild included
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#inquire"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "var(--ember)",
                padding: "0 28px",
                height: "48px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Request Package Details
            </a>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                fontWeight: 600,
                color: "var(--chalk)",
                backgroundColor: "transparent",
                border: "1px solid var(--wire)",
                padding: "0 28px",
                height: "48px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        style={{ borderTop: "1px solid var(--wire)", margin: "0 clamp(24px, 8vw, 120px)" }}
      />

      {/* ── What's included ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="pkg-included"
        style={{ padding: "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <h2
            id="pkg-included"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 56px)",
            }}
          >
            What you get every month.
          </h2>

          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {included.map((item) => (
              <li
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "20px",
                  padding: "24px 0",
                  borderBottom: "1px solid var(--wire)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "32px",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  ✓
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(20px, 2vw, 24px)",
                      color: "var(--chalk)",
                      fontWeight: 400,
                      margin: "0 0 10px",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.75,
                      color: "var(--ash)",
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="pkg-for"
        style={{
          padding: "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <h2
            id="pkg-for"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(28px, 4vw, 44px)",
            }}
          >
            Best fit for.
          </h2>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Primary care and mental health practices in Florida with open appointment capacity
            who want to run paid search alongside organic SEO — and want a
            single team managing both rather than splitting accountability
            across vendors.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "32px",
            }}
          >
            Best suited for Month 3+, after the GBP and website foundation are
            solid. Google Ads on a weak foundation is wasted spend. We&rsquo;ll
            tell you when you&rsquo;re ready.
          </p>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "13px",
              color: "var(--smoke)",
              lineHeight: 1.6,
            }}
          >
            Just need to fix the basics first?{" "}
            <Link
              href="/packages/foundation"
              style={{
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gold)",
              }}
            >
              ← See the Foundation Package
            </Link>
          </p>
        </div>
      </section>

      {/* ── Inquiry form ─────────────────────────────────────────────────── */}
      <section
        id="inquire"
        aria-labelledby="pkg-inquire"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80vw 60vh at 50% 50%, rgba(27,110,110,0.16) 0%, transparent 65%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <h2
            id="pkg-inquire"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 16px",
              textAlign: "center",
            }}
          >
            Request the Visibility Package.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "var(--ash)",
              margin: "0 auto clamp(40px, 5vw, 56px)",
              maxWidth: "48ch",
              textAlign: "center",
            }}
          >
            Tell us about your practice. A co-founder will follow up within one
            business day with full package details, a custom onboarding
            timeline, and a brief audit of your current digital presence.
          </p>

          <PackageInquiryForm packageName="Visibility Package" />
        </div>
      </section>
    </main>
  );
}
