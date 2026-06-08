import type { Metadata } from "next";
import { aggregateRatingSchema, toJsonLd } from "@/lib/schema";

// ── Core layout ───────────────────────────────────────────────────────────
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
  title: "Digital Marketing for Independent Medical Practices in Florida | Primara",
  description:
    "Primara manages GBP optimization, local SEO, website design, and review generation for independent primary care practices in Florida. Liam Costello & Gio LaRoche. Call +1 (561) 291-2681.",
  alternates: {
    canonical: "https://primara365.com",
  },
  openGraph: {
    title: "Digital Marketing for Independent Medical Practices in Florida | Primara",
    description:
      "GBP optimization, local SEO, and website design for independent primary care practices in Florida. Call +1 (561) 291-2681.",
    type: "website",
    url: "https://primara365.com",
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

      {/* ── Reviews section ──────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── Scroll storytelling: services pin → h-scroll → stats ────────── */}
      <ServicesPinSection />
      <HorizontalScroll />
      <StatsCounter />

      {/* ── Social proof + editorial moment ─────────────────────────────── */}
      <PullQuote
        text="Most agencies are building for last year's Google. We're building for 18 months from now."
        cite="— Primara, on Google's April 2026 AskMaps update"
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
