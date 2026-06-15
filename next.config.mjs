/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── React StrictMode ────────────────────────────────────────────────────
  // Disabled in dev because StrictMode double-mounts useEffect, which
  // double-initialises GSAP/Lenis/ScrollTrigger and leaves the preloader
  // stuck + entrance animations locked at opacity:0. StrictMode is dev-only
  // anyway — production behaviour is unaffected by this flag.
  reactStrictMode: false,

  // ── Compression ─────────────────────────────────────────────────────────
  compress: true,

  // ── Remove X-Powered-By header (minor security + perf) ──────────────────
  poweredByHeader: false,

  // ── Image optimisation ───────────────────────────────────────────────────
  // next/image will serve AVIF first, then WebP, then the original format.
  // minimumCacheTTL: 1 year for optimised images.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // ── HTTP cache-control headers ───────────────────────────────────────────
  // /_next/static/ is already immutable-cached by Next.js/Vercel.
  // These rules add long-lived caching for user-uploaded assets once /public is used.
  async headers() {
    return [
      // Static image assets in /public
      {
        source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Font files in /public (next/font serves from /_next/static/ — already cached)
      {
        source: "/:path*\\.(woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // All pages: security + perf headers
      {
        source: "/(.*)",
        headers: [
          // Prevents MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Clickjacking protection
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Referrer policy — reduces third-party leakage
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy — disable unused browser APIs
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
