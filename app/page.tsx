import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Primara",
  url: SITE_URL,
  telephone: "+15612912681",
  email: "liam.costello@primara365.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/primara",
  ],
};

// ── Core layout ─────────────────────────────────────────────────────────── v2
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

// ── Reviews section (rebuilt) ─────────────────────────────────────────────
import ReviewsSection from "@/components/ReviewsSection";

// ── Scroll storytelling sections (new) ───────────────────────────────────
import ServicesPinSection from "@/components/ServicesPinSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import StatsCounter from "@/components/StatsCounter";

// ── Editorial moments ─────────────────────────────────────────────────────
import PullQuote from "@/components/PullQuote";

// ── Rebuilt sections (02, 03) ────────────────────────────────────────────
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";

// ── Legacy sections (to be rebuilt) ──────────────────────────────────────
import TrustBar from "@/components/TrustBar";
import WhyPrimara from "@/components/WhyPrimara";
import ContactFinal from "@/components/ContactFinal";

// ── New sections ──────────────────────────────────────────────────────────
import AuditOfferStrip from "@/components/AuditOfferStrip";
import WorkTeaser from "@/components/WorkTeaser";

// ── Animation controllers ─────────────────────────────────────────────────
import TypeAnimations from "@/components/TypeAnimations";
import ScrollStorytelling from "@/components/ScrollStorytelling";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
  description:
    "Primara365 is a digital marketing agency managing SEO and Google Ads for independent primary care and mental health practices — founder-led, HIPAA-aware, no long-term contracts.",
  alternates: {
    canonical: "https://primara365.com",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
    description:
      "Primara365 is a digital marketing agency managing SEO and Google Ads for independent primary care and mental health practices — founder-led, HIPAA-aware, no long-term contracts.",
    type: "website",
    url: "https://primara365.com",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'], description: "Primara365 is a digital marketing agency managing SEO and Google Ads for independent primary care and mental health practices — founder-led, HIPAA-aware, no long-term contracts." },
};

export default function HomePage() {
  return (
    <main>
      {/* Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema as Record<string, unknown>) }}
      />
      {/* ── Above fold ─────────────────────────────────────────────────── */}
      <Hero />
      <AuditOfferStrip />
      <Marquee />

      {/* ── Vertical selector cards ───────────────────────────────────────── */}
      <section
        aria-label="Who we serve"
        style={{
          padding: "clamp(48px, 6vw, 80px) clamp(24px, 8vw, 120px)",
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
      >
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--smoke)",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        >
          Who We Serve
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <Link
            href="/mens-health"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "clamp(28px, 4vw, 40px)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              backgroundColor: "var(--void)",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            className="vertical-card"
          >
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "var(--chalk)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Men&rsquo;s Health
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--ash)",
                lineHeight: 1.6,
              }}
            >
              TRT clinics, men&rsquo;s wellness centers, urology practices
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                marginTop: "4px",
              }}
            >
              See How We Help →
            </span>
          </Link>
          <Link
            href="/primary-care"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "clamp(28px, 4vw, 40px)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              backgroundColor: "var(--void)",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            className="vertical-card"
          >
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "var(--chalk)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Primary Care
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--ash)",
                lineHeight: 1.6,
              }}
            >
              Family medicine, internal medicine, pediatrics, geriatrics, concierge
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                marginTop: "4px",
              }}
            >
              See How We Help →
            </span>
          </Link>
          <Link
            href="/mental-health"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "clamp(28px, 4vw, 40px)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              backgroundColor: "var(--void)",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            className="vertical-card"
          >
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "var(--chalk)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Mental Health
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--ash)",
                lineHeight: 1.6,
              }}
            >
              Independent therapists, psychologists, licensed counselors, group practices
            </span>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                marginTop: "4px",
              }}
            >
              See How We Help →
            </span>
          </Link>
        </div>
      </section>

      {/* ── Reviews section ──────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── Scroll storytelling: services pin → h-scroll → stats ────────── */}
      <ServicesPinSection />
      <HorizontalScroll />
      <StatsCounter />

      {/* ── Social proof + editorial moment ─────────────────────────────── */}
      <PullQuote
        text="Most agencies are building for last year's Google. We're building for 18 months from now."
      />

      {/* ── Services detail (section 02) ─────────────────────────────────── */}
      <ServicesSection />

      {/* ── Work / case studies ──────────────────────────────────────────── */}
      <WorkTeaser />

      {/* ── About / founders (section 03) ────────────────────────────────── */}
      <AboutSection />

      {/* ── Legacy sections (pending redesign) ──────────────────────────── */}
      <TrustBar />
      <WhyPrimara />
      <ContactFinal />

      {/* ── Animation controllers (client, no render output) ─────────────── */}
      <TypeAnimations />
      <ScrollStorytelling />
    </main>
  );
}
