import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema"; // v2
import PackageInquiryForm from "@/components/PackageInquiryForm";

export const metadata: Metadata = {
  title: "Foundation Package — Healthcare Marketing in Florida | Primara",
  description:
    "$750/mo Foundation Package for independent primary care and mental health practices in Florida: Google Business Profile, Local SEO, reputation monitoring, and monthly reporting. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/packages/foundation" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Foundation Package — Healthcare Marketing in Florida | Primara",
    description:
      "$750/mo: GBP optimization, Local SEO, and monthly reporting for independent primary care and mental health practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/packages/foundation",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Packages", item: "https://primara365.com/packages/foundation" },
    { "@type": "ListItem", position: 3, name: "Foundation", item: "https://primara365.com/packages/foundation" },
  ],
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Foundation Package — Medical Practice Marketing",
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
    "Foundation Package for independent medical practices in Florida: Google Business Profile optimization, Local SEO, reputation monitoring, and monthly reporting.",
  offers: {
    "@type": "Offer",
    price: "750",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "750",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
};

const included = [
  {
    title: "Google Business Profile — Fully Optimized",
    detail:
      "8–10 GBP categories configured, 30+ services written in patient-search language, 750-character description, every attribute filled, all insurance plans listed. 4 Google Posts published per month; 1 new geotagged office photo uploaded monthly. GBP spam and unauthorized edit monitoring ongoing.",
  },
  {
    title: "2 Monthly SEO Content Pages",
    detail:
      "Two new SEO-optimized pages published each month, driven by your Local Falcon rank map. Topical pages (service, condition, FAQ) when relevance lags your top competitor; geographic pages (neighborhood, landmark) once it doesn't. Two pages per month compounds into measurable map pack movement.",
  },
  {
    title: "Review Management — All Platforms",
    detail:
      "HIPAA-compliant responses to every new review within 48 hours, across Google, Healthgrades, Zocdoc, WebMD, and Yelp. NFC tap cards and QR signs installed at onboarding to build review velocity ethically — no incentivized or purchased reviews, ever.",
  },
  {
    title: "NAP Consistency & Technical SEO",
    detail:
      "Monthly BrightLocal consistency check across 50+ directories — any drift fixed immediately. Google Search Console monitored for crawl errors and indexing issues each month.",
  },
  {
    title: "Monthly Report + Founder Access",
    detail:
      "Plain-English monthly report covering GBP impressions, Local Falcon rank movement, review velocity, and a clear next-step recommendation. Every engagement runs through Liam Costello or Gio LaRoche directly — no account coordinators, no handoffs.",
  },
];

export default function FoundationPackagePage() {
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>Foundation Package</li>
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
              "radial-gradient(ellipse 70vw 60vh at 10% 30%, rgba(27,110,110,0.14) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 90% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)",
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
            Package 01 · Foundation
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
            The{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Foundation
            </em>{" "}
            for showing up.
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
            For independent primary care and mental health practices in Florida that need the full digital foundation built and managed: a complete Google Business Profile, a new 30-page website, review generation, and monthly SEO content — all running within 30 days.
          </p>

          {/* Price block */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "6px",
              padding: "20px 28px",
              background: "var(--surface)",
              border: "1px solid var(--wire)",
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
              $750
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
              + $1,500 one-time setup
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
              Send My Package Inquiry →
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
              counterReset: "pkg-counter",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {included.map((item) => (
              <li
                key={item.title}
                style={{
                  counterIncrement: "pkg-counter",
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
            Solo practitioners and single-location primary care or mental health practices in
            Florida that are early in their digital marketing journey.
            Practices that have either never claimed their Google Business
            Profile, or have a partial profile with no active management.
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
            If your practice has open appointment capacity and you suspect
            prospective patients or clients are choosing competitors simply because they
            can&rsquo;t find or evaluate you online, this is where to start.
          </p>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "13px",
              color: "var(--smoke)",
              lineHeight: 1.6,
            }}
          >
            Need website rebuild, monthly content, or active review generation?
            See the{" "}
            <Link
              href="/packages/visibility"
              style={{
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gold)",
              }}
            >
              Visibility Package →
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
            Start the Foundation.
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
            business day with package details, onboarding timeline, and a brief
            audit of your current Google presence.
          </p>

          <PackageInquiryForm packageName="Foundation Package" />
        </div>
      </section>
    </main>
  );
}
