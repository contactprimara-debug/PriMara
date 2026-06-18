import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import ServicePageAnimation from "@/components/ServicePageAnimation";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Digital Marketing for Independent Doctors Florida | Primara",
  description:
    "Primara helps independent medical practices in Florida compete online — local SEO, GBP, reputation, and patient acquisition ads. Call (561) 291-2681.",
  alternates: {
    canonical:
      "https://primara365.com/services/digital-marketing-for-independent-medical-practices",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Digital Marketing for Independent Doctors Florida | Primara",
    description:
      "Primara helps independent medical practices in Florida compete online. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/digital-marketing-for-independent-medical-practices",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digital Marketing for Independent Medical Practices",
      item: "https://primara365.com/services/digital-marketing-for-independent-medical-practices",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Independent Medical Practices",
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
  serviceType: "Digital Marketing",
  description:
    "Comprehensive digital marketing for independent physician-owned medical practices in Florida — local SEO, Google Business Profile management, reputation strategy, and patient acquisition advertising.",
};

export default function DigitalMarketingPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }}
      />

      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{ padding: "76px clamp(24px, 8vw, 120px) 0" }}
      >
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
            <Link href="/" className="breadcrumb-link">
              Home
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>
            /
          </li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>
            Digital Marketing
          </li>
        </ol>
      </nav>

      {/* ── Hero — 70vh atmospheric ───────────────────────────────────────── */}
      <section
        aria-labelledby="dm-h1"
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding:
            "clamp(48px, 6vw, 80px) clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
        }}
      >
        {/* Atmospheric blobs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(ellipse 70vw 65vh at 8% 35%, rgba(27,110,110,0.14) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 45vh at 92% 75%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          {/* Eyebrow */}
          <div
            className="sp-eyebrow"
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
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            Florida · Primara
          </div>

          {/* H1 — two-line display with gold italic word */}
          <h1
            id="dm-h1"
            className="sp-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(24px, 3vw, 40px)",
              maxWidth: "14ch",
            }}
          >
            Digital Marketing
            <br />
            for{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Independent
            </em>
            <br />
            Medicine.
          </h1>

          {/* Subheadline */}
          <p
            className="sp-sub"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.65,
              color: "var(--ash)",
              maxWidth: "54ch",
              margin: "0 0 clamp(32px, 4vw, 48px)",
            }}
          >
            Primara helps physician-owned practices in Florida compete with health
            systems and urgent care chains for the patients already searching for
            you — through local search, Google Business Profile, reputation
            management, and targeted patient acquisition.
          </p>

          {/* CTAs */}
          <div
            className="sp-ctas"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "var(--gold)",
                padding: "0 28px",
                height: "48px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/contact"
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
              Request a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── Wire divider ─────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          borderTop: "1px solid var(--wire)",
          margin: "0 clamp(24px, 8vw, 120px)",
        }}
      />

      {/* ── Section 2: What is Digital Marketing? ────────────────────────── */}
      <section
        aria-labelledby="dm-what"
        style={{
          padding:
            "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <h2
            id="dm-what"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            What is Digital Marketing
            <br />
            for Medical Practices?
          </h2>

          <div>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
                marginBottom: "20px",
              }}
            >
              Digital marketing for a medical practice is the set of strategies
              that determines whether a patient in Florida finds your practice — or a
              competitor — when they open Google and search for "primary care
              doctor near me," "internist Florida," or "family physician
              accepting new patients Coral Gables."
            </p>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
                marginBottom: "20px",
              }}
            >
              Independent physician-owned practices in Florida face a structural
              disadvantage in this competition. Health systems and urgent care
              chains invest substantial budgets in search optimization, paid
              placement, and brand awareness that individual clinics rarely have
              the time or internal expertise to match. The result is a visibility
              gap that directly affects appointment volume — not because your
              clinical quality is lower, but because the infrastructure connecting
              you to prospective patients is underdeveloped relative to your
              competitors.
            </p>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
              }}
            >
              Primara works exclusively with independent, physician-owned primary
              care practices to close that gap — through local SEO, active Google
              Business Profile management, reputation strategy, and targeted patient
              acquisition advertising where it is warranted by the practice&rsquo;s
              current position and growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Primara Approach ─────────────────────────────── */}
      <section
        aria-labelledby="dm-approach"
        style={{
          padding:
            "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <h2
            id="dm-approach"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            The Primara Approach.
          </h2>

          <div>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
                marginBottom: "20px",
              }}
            >
              Liam Costello and Gio LaRoche founded Primara to serve one market:
              independent primary care physicians in Florida who want to grow patient
              volume without surrendering the autonomy that makes independent
              practice worth preserving. Every engagement is managed directly by a
              co-founder — not assigned to junior coordinators after the initial
              call.
            </p>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
                marginBottom: "20px",
              }}
            >
              Our process begins with a full digital audit: your Google Business
              Profile completeness and ranking position across Florida ZIP
              codes, review volume and sentiment on Healthgrades, Zocdoc, WebMD, and
              Yelp, your website&rsquo;s Core Web Vitals scores, schema markup, on-page
              structure, and paid search exposure where applicable. We share the
              findings in plain language — no jargon, no upsell pressure.
            </p>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
              }}
            >
              From there we build an engagement around the specific constraints and
              goals of your practice — your patient profile, appointment capacity,
              geographic service area, and growth timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: When to Seek Digital Marketing ────────────────────── */}
      <section
        aria-labelledby="dm-when"
        style={{
          padding:
            "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <h2
            id="dm-when"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            When to Seek Digital Marketing.
          </h2>

          <div>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ash)",
                marginBottom: "32px",
              }}
            >
              Digital marketing investment is most likely to produce a measurable
              return when one or more of the following applies to your practice:
            </p>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "Your practice is not appearing in Google’s local map pack for primary care searches in Florida, despite serving patients in that area.",
                "You have open appointment capacity but referral volume, walk-ins, and organic search are not filling the schedule.",
                "Your Google Business Profile shows incorrect hours, unclaimed status, or unresponded patient reviews.",
                "Your practice recently opened, relocated to Florida, expanded to a new location, or added a provider and needs to build patient volume quickly.",
                "Competing practices with comparable clinical quality appear above yours in local search results because they have invested in visibility infrastructure you have not.",
                "You want to understand which digital activities are driving new patient inquiries — and which are not — so you can make informed budget decisions.",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--gold)",
                      fontFamily: "Georgia, serif",
                      fontSize: "22px",
                      lineHeight: 1.3,
                      flexShrink: 0,
                      marginTop: "1px",
                      userSelect: "none",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "var(--ash)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pull Quote ─────────────────────────────────────────── */}
      <PullQuote
        text="The first time a patient finds you on Google should not be an accident."
        cite="— Liam Costello, Co-Founder, Primara"
      />

      {/* ── Section 6: CTA — teal glow atmosphere ────────────────────────── */}
      <section
        aria-labelledby="dm-cta"
        style={{
          position: "relative",
          overflow: "hidden",
          padding:
            "clamp(88px, 12vw, 148px) clamp(24px, 8vw, 120px)",
          textAlign: "center",
          backgroundColor: "var(--void)",
        }}
      >
        {/* Teal glow atmosphere */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(ellipse 80vw 65vh at 50% 50%, rgba(27,110,110,0.20) 0%, transparent 65%)",
              "radial-gradient(ellipse 40vw 30vh at 15% 85%, rgba(201,168,76,0.07) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            id="dm-cta"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "var(--chalk)",
              fontWeight: 400,
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}
          >
            Schedule Digital Marketing
            <br />
            in Florida.
          </h2>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "var(--ash)",
              maxWidth: "44ch",
              margin: "0 auto clamp(36px, 5vw, 56px)",
            }}
          >
            Primara works exclusively with independent, physician-owned primary
            care practices in Florida.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "var(--gold)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/contact"
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
                padding: "0 32px",
                height: "52px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Request a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Animation controller — hero entrance only */}
      <ServicePageAnimation />
    </main>
  );
}
