import type { Metadata } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import AnimationProvider from "@/components/AnimationProvider";
import InteractionEffects from "@/components/InteractionEffects";
import Preloader from "@/components/Preloader";
import { localBusinessSchema, toJsonLd } from "@/lib/schema";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primara365.com"),
  title: {
    default: "Digital Marketing for Doctors in Florida | Primara",
    template: "%s",
  },
  description:
    "Primara helps independent medical practices in Florida dominate local search, fill their schedule, and grow. Call +1 (561) 291-2681.",
  openGraph: {
    siteName: "Primara",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@primara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness schema — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(localBusinessSchema as Record<string, unknown>) }}
        />

      </head>

      <body className={`${instrumentSerif.variable} ${syne.variable}`}>

        {/* ── Grain overlay ───────────────────────────────────────────── */}
        <svg
          id="grain-overlay"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>

        {/* ── Preloader — homepage only (Preloader.tsx checks pathname) ─── */}
        <Preloader />

        {/* ── Custom cursor ────────────────────────────────────────────── */}
        <div id="cursor-dot" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />

        {/* ── Page content ─────────────────────────────────────────────── */}
        <Header />
        {children}
        <Footer />
        <MobileCTABar />

        {/* ── Page transition overlay ───────────────────────────────────── */}
        {/* Starts at scaleY:0 (invisible). On internal link click, GSAP in  */}
        {/* InteractionEffects scales it to 1, navigates, then scales it to  */}
        {/* 0 on the next page load. z-index sits below preloader (10000).   */}
        <div id="page-transition" aria-hidden="true" />

        {/* ── Animation infrastructure ──────────────────────────────────── */}
        <AnimationProvider />
        <InteractionEffects />

        {/* ── GSAP CDN (ordered: core → ScrollTrigger → SplitText) ─────── */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/SplitText.min.js"
          strategy="afterInteractive"
        />

        {/* ── Lenis smooth scroll CDN ───────────────────────────────────── */}
        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
