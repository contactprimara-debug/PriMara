import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/gbp-optimization-florida`;

export const metadata: Metadata = {
  title: "Google Business Profile Optimization in Florida | Primara",
  description:
    "GBP optimization for Florida medical practices — categories, services, posts, reviews, and Maps rankings, managed by a Florida-based agency. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Google Business Profile Optimization in Florida | Primara",
    description:
      "GBP optimization for Florida medical practices — categories, services, posts, reviews, and Maps rankings, managed by a Florida-based agency.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "GBP Optimization Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile Optimization in Florida",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Florida" },
  serviceType: "Google Business Profile Optimization",
  description:
    "Complete Google Business Profile setup and ongoing management for independent medical practices across Florida — categories, services, attributes, posting cadence, review workflow, and Maps rank tracking.",
};

const faqs = [
  {
    q: "Why does my Google Business Profile matter more than my website?",
    a: "For local searches — 'doctor near me', 'therapist in [city]' — Google shows the Maps pack above the regular results. Your Business Profile is what appears there, and for many Florida patients it's the only thing they see before calling. A half-configured profile means invisible in the Maps pack, no matter how good your website is.",
  },
  {
    q: "What does GBP optimization actually involve?",
    a: "Full configuration: the right primary and secondary categories, a complete services list, attributes, business description, photos, hours (including holiday hours), and a consistent posting cadence. Then ongoing management — review responses, Q&A, new Google features as they roll out, and rank tracking across your real service area so you can see movement.",
  },
  {
    q: "Can you fix a suspended or duplicate Florida listing?",
    a: "Often, yes. Suspensions usually trace to category creep, address inconsistencies, or edits that tripped Google's automated checks. We audit the listing, correct the underlying problem, and file the reinstatement with documentation. Duplicate listings get identified and merged or removed so they stop splitting your reviews and rankings.",
  },
  {
    q: "Do you handle review responses for medical practices?",
    a: "Yes — with the compliance rules medicine requires. Responses never confirm someone is a patient and never reference clinical details, which keeps them consistent with HIPAA obligations. Review generation itself stays policy-compliant too: we ask every patient the same way, with no pre-screening or gating.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const steps = [
  {
    title: "Audit & Baseline",
    body: "We audit the existing listing — categories, services, photos, reviews, duplicates, suspension risk — and capture a Maps ranking baseline across your actual Florida service area, so every later change is measured against a real starting point.",
  },
  {
    title: "Full Configuration",
    body: "Primary and secondary categories chosen deliberately (category creep is a suspension risk, not a growth hack), complete services and attributes, accurate hours matched to your website, and a business description written for patients, not keyword stuffing.",
  },
  {
    title: "Ongoing Management",
    body: "A steady posting cadence with real photos, compliant review responses, Q&A monitoring, and holiday-hours updates ahead of every major holiday. Profiles decay without maintenance — this is a routine, not a one-time setup.",
  },
  {
    title: "Rank Tracking & Reporting",
    body: "Monthly Maps rank tracking across your service area plus profile performance data — calls, direction requests, website clicks — so you see exactly what the listing is producing.",
  },
];

export default function GbpOptimizationFloridaPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/locations" style={{ color: "var(--ash)", textDecoration: "none" }}>Locations</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>GBP Optimization Florida</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px", padding: "5px 14px", marginBottom: "32px",
              fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "var(--gold)",
            }}
          >
            Statewide · Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "820px", marginBottom: "24px",
            }}
          >
            Google Business Profile Optimization in Florida
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            The Maps pack is where Florida patients choose a practice. Primara builds and
            manages Google Business Profiles for independent medical practices across the
            state — categories, services, posts, reviews, and rank tracking — so your listing
            competes with the hospital systems instead of sitting behind them.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Audit
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · No long-term contracts
          </p>
        </div>
      </section>

      {/* Context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why This Is the Lever
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              Most Florida practice listings are half-built. That&rsquo;s the opportunity.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              A Google Business Profile with one category, no services list, stale photos, and
              unanswered reviews tells Google — and patients — that nobody is home. Yet that
              describes most independent practice listings in Florida. Google ranks Maps
              results on relevance, distance, and prominence, and a complete, active profile
              wins on relevance and prominence even against bigger names.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              This is also the fastest-moving part of local SEO: profile changes take effect in
              days, not months. That&rsquo;s why GBP work is the first thing we do for every
              client — in Florida or anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            How We Run It
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((s, idx) => (
              <div key={s.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "40px" }}>
            Common Questions
          </p>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "12px", lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Locations"
        items={[
          { href: "/services/google-business-profile", label: "Google Business Profile Service", description: "The full GBP service — what's included and how we manage it month to month." },
          { href: "/locations/medical-seo-florida", label: "Medical SEO for Florida Practices", description: "The statewide SEO picture GBP work fits into." },
          { href: "/locations/gbp-optimization-west-palm-beach", label: "GBP Optimization in West Palm Beach", description: "The same GBP work, focused on our home market." },
          { href: "/blog/why-your-medical-practice-isnt-showing-up-on-google-maps", label: "Why Your Practice Isn't Showing Up on Google Maps", description: "The most common Maps-pack problems and how to diagnose them." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready to Win the Maps Pack?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your current Google Business Profile — delivered in 3–5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
