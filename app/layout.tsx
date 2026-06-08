import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",   // Required for env(safe-area-inset-top) on iOS notch/Dynamic Island
};

export const metadata: Metadata = {
  metadataBase: new URL("https://primara365.com"),
  title: {
    default: "Digital Marketing for Doctors in Florida | Primara",
    template: "%s",
  },
  description:
    "Primara helps independent medical practices in Florida dominate local search, fill their schedule, and grow. Call +1 (561) 291-2681.",
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

        {/* ── Google Tag Manager ────────────────────────────────────────── */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>

        {/* ── gtag config scaffold ──────────────────────────────────────── */}
        <Script id="gtag-config" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-CONVERSION_ID');
  `}
        </Script>

      </head>

      <body className={`${instrumentSerif.variable} ${syne.variable}`}>

        {/* ── GTM noscript fallback ─────────────────────────────────────── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ── Preloader — homepage only (Preloader.tsx checks pathname) ─── */}
        <Preloader />

        {/* ── Custom cursor ────────────────────────────────────────────── */}
        <div id="cursor-dot" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />

        {/* ── Page content ─────────────────────────────────────────────── */}
        <Header />
        {children}
        <Footer />

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

        {/* ── Google Ads (gtag.js) ──────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18204165915"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18204165915');
            `,
          }}
        />
      </body>
    </html>
  );
}
