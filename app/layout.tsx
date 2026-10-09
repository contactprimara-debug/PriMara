import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import GAPageViews from "@/components/GAPageViews";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { footerCities } from "@/lib/location-links";
import AnimationProvider from "@/components/AnimationProvider";
import InteractionEffects from "@/components/InteractionEffects";
import HashScroll from "@/components/HashScroll";
import MobileCTABar from "@/components/MobileCTABar";
import AttributionCapture from "@/components/AttributionCapture";
import Preloader from "@/components/Preloader";
import RouteFade from "@/components/RouteFade";
import { localBusinessSchema, toJsonLd } from "@/lib/schema";

/* ── AFTER_PAINT — one inline loader for every non-critical third-party script ─
   WHY (card #190, 2026-10-08): PSI mobile LCP on the homepage was bimodal, 2.5s
   in one run and 9.1s in the next, with the same page. Measured in a local
   Lighthouse trace: the hero text really paints at ~0.5-2.0s in BOTH cases
   (observed LCP 2.0-2.3s), but Lighthouse's mobile score is a SIMULATION. It
   takes the observed LCP time and counts every script that STARTED loading
   before it (GTM 117 KB, gtag 3 x ~165 KB, GSAP, Lenis) as work the throttled
   phone must finish first. When the headless paint lands at ~2s those scripts
   start before it (simulated LCP 7-10s); when it lands at ~0.6s they start
   after it (LCP 2.5s). So the fix is to make "starts after the paint" true on
   every run: this script waits for the browser's own largest-contentful-paint
   entry, then loads everything. Real visitors get the same tags, a few hundred
   ms later than before; nothing is dropped.
   Fallbacks so tracking can never depend on a paint event: first user input,
   or 3s, whichever comes first.
   Kept as ONE literal inline script in the server HTML (not next/script) so the
   health checks that read raw HTML still see gtm.js?id=GTM-TFSRXGS6 and
   gtag(...) / gtag/js?id=GT-PB6FNVRG. window.gtag AND the js/config calls run
   immediately (they only queue into dataLayer), so a tel: click, the thank-you
   conversion or an SPA page_view that happens before the library arrives is
   queued behind the config in the right order, not lost. Do NOT move these back to
   afterInteractive/lazyOnload without re-measuring on PSI (3 runs, cache-busted). */
const AFTER_PAINT = `(function(w,d){
var q=[],fired=false;
function run(){if(fired)return;fired=true;for(var i=0;i<q.length;i++){try{q[i]()}catch(e){}}q=[]}
function after(f){if(fired)f();else q.push(f)}
function load(src,cb){var s=d.createElement('script');s.src=src;s.async=true;if(cb)s.onload=cb;d.head.appendChild(s)}
w.dataLayer=w.dataLayer||[];
w.gtag=function(){w.dataLayer.push(arguments)};
w.gtag('js',new Date());
w.gtag('config','GT-PB6FNVRG');
w.gtag('config','AW-18204165915');
w.gtag('config','G-DYRL31NGRH');
after(function(){
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(w,d,'script','dataLayer','GTM-TFSRXGS6');
load('https://www.googletagmanager.com/gtag/js?id=GT-PB6FNVRG');
load('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js',function(){load('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js')});
load('https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js');
});
try{new PerformanceObserver(function(l,o){if(l.getEntries().length){o.disconnect();run()}}).observe({type:'largest-contentful-paint',buffered:true})}catch(e){}
['pointerdown','keydown','touchstart','wheel'].forEach(function(t){w.addEventListener(t,run,{once:true,passive:true})});
setTimeout(run,3000);
})(window,document);`;

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
    "Primara helps independent primary care and mental health practices dominate local search, run Meta Ads, fill their schedule, and grow. Call +1 (561) 291-2681.",
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
        {/* ── Google Tag Manager (GTM-TFSRXGS6) ───────────────────────────
              Added 2026-09-30. Additive only — runs alongside the existing
              gtag.js container below (GT-PB6FNVRG) and the Ads/GA4 config it
              carries. Nothing below this block was touched. GTM is the
              single future place to add/change tags instead of per-page
              edits; it does not yet fire anything of its own (no tags
              configured in the container beyond defaults). Standard Google
              snippet pattern, via next/script afterInteractive to match how
              every other third-party script on this page already loads. */}
        {/* GTM + gtag + GSAP/Lenis now load from the single inline AFTER_PAINT script below (see its comment). */}

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
        {/* gtag.js (GT-PB6FNVRG -> AW-18204165915 + G-DYRL31NGRH): loaded by AFTER_PAINT, see its comment. Same ids, same config calls. */}
        <script id="after-paint-loader" dangerouslySetInnerHTML={{ __html: AFTER_PAINT }} />

      </head>

      <body className={`${instrumentSerif.variable} ${syne.variable}`}>

        {/* ── GTM noscript fallback — must be the first thing in <body> per
              Google's standard snippet (2026-09-30, additive, see <head>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFSRXGS6"
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
        <RouteFade>{children}</RouteFade>
        <Footer cities={footerCities} />

        {/* ── Sticky mobile tap-to-call bar (md:hidden) ─────────────────── */}
        <MobileCTABar />
        <AttributionCapture />

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


        {/* ── SPA route-change page_views for G-DYRL31NGRH ──────────────
              Replaces <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID}/>, which was
              pointed at G-XLC2HTP5SF (a tag on an account none of our logins
              own — removed 2026-09-14) and which also injected a second full
              ~159 KB gtag.js library. Our property is already a destination on
              the primary GT-PB6FNVRG tag above, so only the route-change
              page_views needed replacing. See components/GAPageViews.tsx. */}
        <GAPageViews />

        {/* ── phone_call events for every tel: link (2026-09-22, rewritten
              2026-09-23 for finding 218) ────────────────────────────────
              PAGE-STANDARD requires a phone_call handler on every page.
              This used to be components/PhoneCallTracking.tsx, a "use
              client" component whose listener only existed in the hydrated
              JS bundle — invisible to the site-health tracking-coverage
              crawler, which reads raw SSR HTML only (same class of bug
              fixed on ~/making-heaven-crowded in commit 1756dc9). This
              literal inline <script> renders straight into server HTML on
              every page, so the crawler (and any client with JS disabled
              before this fires) sees it directly. Same delegated
              document-level tel: listener, same destinations (GT-PB6FNVRG
              carries G-DYRL31NGRH + AW-18204165915 per the gtag config
              above), fails silently if gtag isn't loaded yet. */}
        <script
          id="phone-call-tracking"
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click',function(e){var t=e.target;if(!t||typeof t.closest!=='function')return;var l=t.closest('a[href^="tel:"]');if(!l)return;var n=(l.getAttribute('href')||'').replace(/^tel:/i,'').trim();try{window.gtag&&window.gtag('event','phone_call',{phone_number:n,page_path:window.location.pathname,link_url:l.getAttribute('href')||''});}catch(err){}},true);`,
          }}
        />

      </body>
    </html>
  );
}
