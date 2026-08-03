import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Motivation | Primara",
  description:
    "Why Primara does what it does — our motivation, and what drives the work.",
  alternates: { canonical: "https://primara365.com/motivation" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Our Motivation | Primara",
    description: "Why Primara does what it does — our motivation, and what drives the work.",
    type: "website",
    url: "https://primara365.com/motivation",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function MotivationPage() {
  return (
    <main className="pt-16" style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.8rem",
            color: "var(--smoke)",
          }}
        >
          <li><Link href="/" style={{ color: "var(--smoke)", textDecoration: "none" }}>Home</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--ash)" }}>Our Motivation</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8" style={{ padding: "clamp(40px, 6vw, 64px) 24px clamp(80px, 10vw, 120px)" }}>
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "20px",
            }}
          >
            Why We Do This
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}
          >
            Our Motivation.
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "1.0625rem",
                color: "var(--ash)",
                lineHeight: 1.85,
              }}
            >
              Jesus is our motivation. Everything Primara does — every practice we help,
              every audit we deliver, every client relationship we build — we do to bring
              His kingdom forward.
            </p>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "1.0625rem",
                color: "var(--ash)",
                lineHeight: 1.85,
              }}
            >
              That&rsquo;s the standard behind the work: how we treat clients, how we do
              business, and why we show up each day.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid var(--wire)",
                color: "var(--chalk)",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "48px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Meet the Founders
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "48px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
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
