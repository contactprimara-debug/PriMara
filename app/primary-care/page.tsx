import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, primaryCareSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing for Primary Care Practices in Florida | Primara",
  description:
    "Primara helps independent primary care physicians in Florida rank higher on Google Maps, fill their schedule, and outrank hospital systems — without a marketing department. GBP, local SEO, website. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/primary-care" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Digital Marketing for Primary Care Practices in Florida | Primara",
    description:
      "Primara helps independent primary care physicians in Florida rank higher on Google Maps, fill their schedule, and outrank hospital systems. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/primary-care",
  },
};

const problemBlocks = [
  {
    heading: "Hospital SEO budgets are not a fair fight",
    body: "AdventHealth, Baptist Health, and HCA have dedicated digital marketing teams optimizing their Google Business Profiles every week. They're adding photos, posting updates, collecting hundreds of reviews, and running Local Service Ads. Your GBP hasn't been touched since the day it was claimed. That gap is why patients drive past your practice to see a hospital-employed physician they've never met.",
  },
  {
    heading: "Your GBP is probably configured wrong",
    body: "The average independent primary care practice in Florida has 1–2 GBP categories selected and fewer than 15 services listed. A fully optimized profile has 8–10 categories and 30+ services written in exact patient-search language — \"accepting new patients,\" \"same-day sick visits,\" \"Medicare primary care\" — the phrases people type at 9pm when they're deciding who to call in the morning.",
  },
  {
    heading: "Your website is not built for local search",
    body: "Most practice websites are built for branding, not ranking. They have a homepage, an about page, and a contact form. Google's local algorithm rewards depth — specific pages for specific searches. \"Family doctor Boca Raton.\" \"Internal medicine Palm Beach Gardens accepting new patients.\" \"Geriatric care specialist Lake Worth.\" One generic page can't rank for all of them.",
  },
  {
    heading: "Reviews are a ranking signal, not just social proof",
    body: "Google's local algorithm weights review velocity — how consistently new reviews arrive — not just the total count. A practice that gets 3 reviews per month indefinitely outranks a practice that got 80 reviews two years ago and stopped. Most primary care physicians have no active system for generating reviews. Their competitors do.",
  },
];

const services = [
  {
    num: "01",
    title: "GBP Optimization",
    body: "We claim or recover your profile, configure 8–10 categories, write 30+ services in exact patient-search language, fill every attribute Google surfaces, load a year of posts at onboarding via BrightLocal, and install a review generation system using NFC tap cards and QR codes at checkout, waiting room, and exam rooms. Week one deliverable.",
  },
  {
    num: "02",
    title: "Website Rebuild",
    body: "30 pages at launch. Every page targets a specific local search term — condition, service line, or city. Built in Next.js, deployed on Vercel, with MedicalOrganization JSON-LD schema and all 7 GBP consistency signals verified before go-live. Mobile-first. Core Web Vitals green. Not a template — a local search instrument.",
  },
  {
    num: "03",
    title: "Review Generation",
    body: "10 NFC tap cards programmed and shipped. QR review signs installed. Google, Healthgrades, and Zocdoc rotation managed monthly. Every review response published within 48 hours — HIPAA-compliant, never confirming a patient relationship, always inviting offline resolution.",
  },
  {
    num: "04",
    title: "Local SEO Content",
    body: "Two new pages per month, every month, driven by your Local Falcon rank map. When your Top 3% score lags a competitor, we publish a topical page. When it doesn't, we go geographic — extending your footprint into the next ZIP code. Two pages per month compounds. By month 12, you have a 54-page website that ranks for searches your competitors can't touch.",
  },
];

const fits = [
  "Independent family medicine or internal medicine practice",
  "1–5 physicians, Florida-based",
  "Insurance-based or hybrid (not DPC-only)",
  "Physician-owned, not hospital-employed",
  "Schedule not full — or growing to a second location",
];

const doesNotFit = [
  "Hospital-affiliated or employed physicians",
  "Urgent care chains or franchise models",
  "Dental, dermatology, or other specialty groups",
  "Practices outside Florida",
];

const stats = [
  {
    value: "77%",
    label: "Of patients search online before choosing a primary care physician",
    source: "PatientPop, Patient Perspectives Survey",
  },
  {
    value: "8–10",
    label: "GBP categories a fully optimized primary care profile carries. Most practices have 1–2.",
    source: null,
  },
  {
    value: "30",
    label: "Pages at launch. Every one targets a specific search term your competitors aren't ranking for.",
    source: null,
  },
];

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function PrimaryCarePage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(primaryCareSchema as Record<string, unknown>) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={{ padding: "76px clamp(24px, 8vw, 120px) 0" }}>
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
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
          <li><Link href="/" className="breadcrumb-link">Home</Link></li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>›</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>Primary Care</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="pc-h1"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(48px, 7vw, 100px) clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
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
              "radial-gradient(ellipse 50vw 40vh at 85% 75%, rgba(201,168,76,0.07) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          {/* Label */}
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
              marginBottom: "clamp(28px, 4vw, 48px)",
            }}
          >
            Primary Care · Florida · Independent Practices Only
          </div>

          {/* H1 */}
          <h1
            id="pc-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(52px, 8vw, 104px)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 40px)",
              maxWidth: "18ch",
            }}
          >
            Your patients are searching.
            <br />
            The hospital system down the street is showing up.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              You&rsquo;re not.
            </em>
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "var(--ash)",
              maxWidth: "60ch",
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Primara builds the digital presence independent primary care physicians in Florida
            should have had from day one — Google Business Profile, local SEO, website, and
            review systems built around how patients actually search for a doctor.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              className="magnetic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "var(--ember)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get My Free Practice Audit →
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--chalk)",
                backgroundColor: "transparent",
                border: "1px solid var(--wire)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 01 — The Problem ─────────────────────────────────────── */}
      <section
        aria-labelledby="pc-problem"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Problem
          </div>
          <h2
            id="pc-problem"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(48px, 6vw, 72px)",
            }}
          >
            Independent primary care is losing the local search war. Here&rsquo;s why.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "clamp(32px, 4vw, 48px)",
            }}
          >
            {problemBlocks.map((block) => (
              <div key={block.heading}>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(17px, 1.8vw, 20px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                  }}
                >
                  {block.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "var(--ash)",
                    margin: 0,
                  }}
                >
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 02 — Services ────────────────────────────────────────── */}
      <section
        aria-labelledby="pc-services"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            What We Build
          </div>
          <h2
            id="pc-services"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 12px",
            }}
          >
            Four systems. One integrated strategy.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--ash)",
              maxWidth: "60ch",
              margin: "0 0 clamp(48px, 6vw, 64px)",
            }}
          >
            Every Primara engagement includes all four. They work together — GBP feeds the website, reviews feed the GBP, content feeds both. Buying one without the others is like running one cylinder.
          </p>
          <ol
            style={{
              listStyle: "none",
              counterReset: "svc-counter",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {services.map((svc) => (
              <li
                key={svc.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "20px",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--wire)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--gold)",
                    opacity: 0.5,
                    lineHeight: 1,
                    paddingTop: "4px",
                  }}
                >
                  {svc.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(19px, 2vw, 22px)",
                      color: "var(--chalk)",
                      fontWeight: 400,
                      margin: "0 0 10px",
                      lineHeight: 1.25,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "var(--ash)",
                      margin: 0,
                    }}
                  >
                    {svc.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 03 — Who This Is For ─────────────────────────────────── */}
      <section
        aria-labelledby="pc-who"
        style={{
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Who We Work With
          </div>
          <h2
            id="pc-who"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(28px, 4vw, 40px)",
            }}
          >
            We work with one type of practice. We know it deeply.
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
            Primara works exclusively with independent, physician-owned primary care practices in Florida — family medicine, internal medicine, geriatrics, pediatrics, concierge medicine, and direct primary care. Insurance-based, 1–5 physicians, not hospital-affiliated.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "clamp(36px, 5vw, 52px)",
            }}
          >
            We do not work with dental chains, urgent care franchises, hospital systems, or multi-specialty groups. That specificity is the product. We know the exact GBP categories that move primary care rankings. We know the review response rules that protect you from HIPAA exposure. We know which local keywords drive new patient calls versus tire-kickers. A generalist agency doesn&rsquo;t — and you pay for that gap every month.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
            }}
          >
            {/* Fits */}
            <div
              style={{
                padding: "28px 32px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
              }}
            >
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "20px",
                }}
              >
                Fits
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {fits.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--ash)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M2.5 7l3 3 6-6" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not Fit */}
            <div
              style={{
                padding: "28px 32px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
              }}
            >
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--smoke)",
                  marginBottom: "20px",
                }}
              >
                Does Not Fit
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {doesNotFit.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--smoke)",
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: "1px", color: "var(--wire)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 04 — By the Numbers ──────────────────────────────────── */}
      <section
        aria-labelledby="pc-numbers"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Case
          </div>
          <h2
            id="pc-numbers"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(40px, 5vw, 60px)",
            }}
          >
            Why this matters financially.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.value} style={{ borderTop: "1px solid var(--wire)", paddingTop: "24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    color: "var(--gold)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {stat.value}
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "var(--ash)",
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
                {stat.source && (
                  <p
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "11px",
                      color: "var(--smoke)",
                      margin: "6px 0 0",
                      fontStyle: "italic",
                    }}
                  >
                    — {stat.source}
                  </p>
                )}
              </div>
            ))}
          </div>

          <blockquote
            style={{
              borderLeft: "3px solid var(--gold)",
              paddingLeft: "24px",
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "var(--chalk)",
                margin: 0,
              }}
            >
              &ldquo;The math in primary care works differently than most industries. A new patient isn&rsquo;t a one-time transaction &mdash; it&rsquo;s annual physicals, chronic condition management, specialist referrals, and years of recurring visits. That changes how practices should think about marketing investment.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 05 — Packages ────────────────────────────────────────── */}
      <section
        aria-labelledby="pc-packages"
        style={{
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Pricing
          </div>
          <h2
            id="pc-packages"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Two packages. No surprises.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            {/* Foundation */}
            <div
              style={{
                padding: "36px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "8px" }}>
                  Package 01
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  Foundation
                </h3>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", lineHeight: 1.6, margin: 0 }}>
                GBP Optimization · Local SEO · Monthly Reporting
              </p>
              <Link
                href="/packages/foundation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  color: "var(--chalk)",
                  border: "1px solid var(--wire)",
                  padding: "0 20px",
                  height: "40px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  width: "fit-content",
                  marginTop: "auto",
                }}
              >
                View Package Details →
              </Link>
            </div>

            {/* Visibility */}
            <div
              style={{
                padding: "36px",
                border: "1px solid var(--gold)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                }}
              >
                Full Coverage
              </div>
              <div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "8px" }}>
                  Package 02
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  Visibility
                </h3>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", lineHeight: 1.6, margin: 0 }}>
                GBP + Website + Reviews + SEO Content · Full Coverage
              </p>
              <Link
                href="/packages/visibility"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "0 20px",
                  height: "40px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  width: "fit-content",
                  marginTop: "auto",
                }}
              >
                View Package Details →
              </Link>
            </div>
          </div>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "12px",
              color: "var(--smoke)",
              fontStyle: "italic",
            }}
          >
            Month-to-month. 3-month minimum recommended. Setup fee is the only negotiable line.
          </p>
        </div>
      </section>

      {/* ── Section 06 — CTA ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="pc-cta"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 80vw 60vh at 50% 50%, rgba(27,110,110,0.14) 0%, transparent 65%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Get Started
          </div>
          <h2
            id="pc-cta"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 20px",
            }}
          >
            Let&rsquo;s see where your practice stands.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "clamp(32px, 4vw, 44px)",
            }}
          >
            We&rsquo;ll research your GBP, your website, your reviews, and your top local competitor. We&rsquo;ll deliver a free custom audit within 3&ndash;5 business days — showing you exactly what&rsquo;s holding your ranking back and what fixing it would cost. No obligation. Liam or Gio will walk you through it directly, not a salesperson.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              className="magnetic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "var(--ember)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get My Free Practice Audit →
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--chalk)",
                border: "1px solid var(--wire)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
