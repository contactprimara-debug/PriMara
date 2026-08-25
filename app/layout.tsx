import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import InteractionEffects from "@/components/InteractionEffects";
import HashScroll from "@/components/HashScroll";
import MobileCTABar from "@/components/MobileCTABar";
import Preloader from "@/components/Preloader";
import RouteFade from "@/components/RouteFade";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",   // Required for env(safe-area-inset-top) on iOS notch/Dynamic Island
};

export const metadata: Metadata = {
  metadataBase: new URL("https://primara365.com"),
  title: {
    default: "Digital Marketing for Doctors | Primara",
    template: "%s",
  },
  description:
    "Primara helps independent medical practices dominate local search, fill their schedule, and grow. Call +1 (561) 291-2681.",
  // Explicit icon declaration — helps Google's crawler find and index the favicon faster
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    siteName: "Primara",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Primara — Digital Marketing for Independent Medical Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@primara",
  },
  verification: {
    google: "BxKli2T2XNID_mJZ99EraYxGqdkHAXMyeqz_1DWRwfw",
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

        {/* ── Google tag (gtag.js) ─────────────────────────────────────── */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GT-PB6FNVRG" strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GT-PB6FNVRG');
  gtag('config', 'AW-18204165915');
`}</Script>

      </head>

      <body className={`${instrumentSerif.variable} ${syne.variable}`}>

        {/* ── Preloader — homepage only (Preloader.tsx checks pathname) ─── */}
        <Preloader />

        {/* ── Custom cursor ────────────────────────────────────────────── */}
        <div id="cursor-dot" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />

        {/* ── Page content ─────────────────────────────────────────────── */}
        <Header />
        <RouteFade>{children}</RouteFade>
        <Footer />

        {/* ── Sticky mobile tap-to-call bar (md:hidden) ─────────────────── */}
        <MobileCTABar />

        {/* ── Animation infrastructure ──────────────────────────────────── */}
        <AnimationProvider />
        <InteractionEffects />
        <HashScroll />

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

        {/* ── Google Analytics 4 — set NEXT_PUBLIC_GA_ID (G-XXXXXXX) in env.
              Renders nothing when unset. Loads after hydration, tracks SPA
              route changes automatically. ─────────────────────────────────── */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

      </body>
    </html>
  );
}
