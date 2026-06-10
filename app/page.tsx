import type { Metadata } from "next";
import Link from "next/link";
import { aggregateRatingSchema, toJsonLd } from "@/lib/schema";

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

// ── Animation controllers ─────────────────────────────────────────────────
import TypeAnimations from "@/components/TypeAnimations";
import ScrollStorytelling from "@/components/ScrollStorytelling";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency Florida — Primary Care & Mental Health | Primara",
  description:
    "Independent primary care and mental health practices in Florida get found faster, rank higher on Google Maps, and fill their schedule with Primara — founder-led, HIPAA-aware, no long-term contracts.",
  alternates: {
    canonical: "https://primara365.com",
  },
  openGraph: {
    title: "Healthcare Marketing Agency Florida — Primary Care & Mental Health | Primara",
    description:
      "Independent primary care and mental health practices in Florida get found faster, rank higher on Google Maps, and fill their schedule with Primara — founder-led, HIPAA-aware, no long-term contracts.",
    type: "website",
    url: "https://primara365.com",
  },
  twitter: {
    description:
      "Independent primary care and mental health practices in Florida get found faster, rank higher on Google Maps, and fill their schedule with Primara — founder-led, HIPAA-aware, no long-term contracts.",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* AggregateRating schema — homepage only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(aggregateRatingSchema as Record<string, unknown>) }}
      />
      {/* ── Above fold ─────────────────────────────────────────────────── */}
      <Hero />
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
              Solo therapists, psychologists, licensed counselors, group practices
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
