import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import AfterHydration from "@/components/AfterHydration";
import GAPageViews from "@/components/GAPageViews";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { footerCities } from "@/lib/location-links";
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
    "Primara helps independent medical practices, medspas, and dental clinics dominate local search, run Meta Ads, fill their schedule, and grow. Call +1 (561) 291-2681.",
  // Explicit icon declaration — helps Google's crawler find and index the favicon faster
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon-192.png",
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
        {/* ── Early connections to the third-party origins every page load
              depends on (GTM, GA4, Google Ads remarketing, GSAP/Lenis CDN,
              Cloudflare). TBT is low here — the real cost is 5+ separate
              DNS+TLS handshakes stacking up before first paint. This starts
              those handshakes immediately instead of waiting for each
              script tag to be discovered in turn. Doesn't change what
              loads or when it fires, only how early the connection opens. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googleadservices.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* LocalBusiness schema — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(localBusinessSchema as Record<string, unknown>) }}
        />

        {/* ── Google tag (gtag.js) ─────────────────────────────────────────
              PERF (2026-09-11): the site was downloading TWO full gtag.js
              libraries on every page — one here for GT-PB6FNVRG (161 KB) and
              a second one for NEXT_PUBLIC_GA_ID (G-XLC2HTP5SF) via
              <GoogleAnalytics/> at the
              bottom of <body> (172 KB). PSI mobile attributed 403 ms of
              main-thread bootup to the first and 139 ms to the second in the
              same run; 204 KiB of the combined payload was unused.

              RESOLVED 2026-09-14: the second library is gone. <GoogleAnalytics/>
              was removed along with G-XLC2HTP5SF (an account we do not own);
              SPA page_views for our own property now ride this primary tag via
              components/GAPageViews.tsx.

              MEASURED AND REVERTED — do not retry this without re-measuring.
              Dropping this tag and letting <GoogleAnalytics/>'s library serve
              every ID looked like a free 161 KB. It is not: as a *primary*
              container this tag carries GT-PB6FNVRG and AW-18204165915 inside
              itself, and once it is gone gtag fetches a separate ~161 KB
              destination script for each of them. PSI mobile, same three URLs,
              before vs after: gtag payload 492 KB -> 649 KB, total page weight
              838 KB -> 970 KB, unused JS 204 KiB -> 316 KiB. Strictly worse.

              The other direction — keep this tag, drop <GoogleAnalytics/> —
              saves ~159 KB and is what we now do (2026-09-14). It used to cost
              the SPA route-change page_views; components/GAPageViews.tsx sends
              those directly to G-DYRL31NGRH instead, off this same library. */}
        {/* PERF (task #179): wrapped in <AfterHydration> ONLY to stop next/script
              from emitting <link rel="preload" as="script"> for the gtag
              libraries into the initial HTML — see components/AfterHydration.tsx.
              The tags below are otherwise untouched: same strategy, same ids,
              same order. */}
        <AfterHydration>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GT-PB6FNVRG" strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GT-PB6FNVRG');
  gtag('config', 'AW-18204165915');
  // GA4 property on the Primara Google account (552664101) — the one the
  // Command Center reads, and now our ONLY GA4 destination. This config call
  // sends the initial page_view; GAPageViews.tsx sends route changes.
  gtag('config', 'G-DYRL31NGRH');
`}</Script>
        </AfterHydration>

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
        <Footer cities={footerCities} />

        {/* ── Sticky mobile tap-to-call bar (md:hidden) ─────────────────── */}
        <MobileCTABar />

        {/* ── Animation infrastructure ──────────────────────────────────── */}
        <AnimationProvider />
        <InteractionEffects />
        <HashScroll />

        {/* ── GSAP + Lenis CDN ──────────────────────────────────────────
              strategy="lazyOnload" (not afterInteractive) on purpose.

              PSI mobile was bimodal: FCP landed on either ~1.82s or ~3.91s
              with nothing in between, and LCP tracked it (2.2s vs 7.2s —
              the 7.1s that opened this ticket). Server response was 5-6ms
              and network RTT ~0 in BOTH branches, so it was never the
              network. The difference was main-thread work: 1.2s in fast
              runs vs 1.7s in slow ones, which Lighthouse's 4x CPU throttle
              multiplies into the ~2.1s FCP jump. These four CDN scripts
              plus the Google tags are that work.

              Nothing here is needed before paint: the hero entrance is pure
              CSS, and both AnimationProvider and HeroAnimation already poll
              for window.gsap/window.Lenis for up to 6s before giving up, so
              arriving after load costs nothing functionally. Moving them off
              afterInteractive takes their parse+exec out of the pre-paint
              window entirely.

              (ordered: core → ScrollTrigger) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
        {/* SplitText was requested here and REMOVED 2026-09-11: the URL has
            always returned HTTP 404 ("Couldn't find the requested file
            /dist/SplitText.min.js in gsap") — SplitText is a paid GSAP Club
            plugin and is not in the public npm package. window.SplitText has
            therefore never been defined on this site, so every consumer
            already runs its no-SplitText path (AnimationProvider registers it
            conditionally, ServicePageAnimation and HeroAnimation guard on it,
            and TypeAnimations' effects have simply never fired). Deleting the
            tag removes a guaranteed-failing request and changes nothing that
            was ever working. If the split-type animations are wanted for
            real, the Club build has to be self-hosted — that is a separate
            decision, not a perf fix. */}

        {/* ── Lenis smooth scroll CDN ───────────────────────────────────── */}
        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"
          strategy="lazyOnload"
        />

        {/* ── SPA route-change page_views for G-DYRL31NGRH ──────────────
              Replaces <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID}/>, which was
              pointed at G-XLC2HTP5SF (a tag on an account none of our logins
              own — removed 2026-09-14) and which also injected a second full
              ~159 KB gtag.js library. Our property is already a destination on
              the primary GT-PB6FNVRG tag above, so only the route-change
              page_views needed replacing. See components/GAPageViews.tsx. */}
        <GAPageViews />

      </body>
    </html>
  );
}
