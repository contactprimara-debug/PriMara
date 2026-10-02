import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Healthcare Marketing | Primara",
  description:
    "Get answers about Primara's healthcare marketing services, timelines, HIPAA compliance, and results for independent practices.",
  alternates: { canonical: "https://primara365.com/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Frequently Asked Questions — Healthcare Marketing | Primara",
    description:
      "Get answers about Primara's healthcare marketing services, timelines, HIPAA compliance, and results for independent practices.",
    type: "website",
    url: "https://primara365.com/faq",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  { q: "How long does it take to rank on Google Maps?", a: "Google Business Profile optimization shows first movement on secondary keywords — think \"same-day sick visit [city]\" or \"Medicare primary care [city]\" — within 30 to 60 days of a full profile rebuild. Primary keywords like \"primary care doctor [city]\" or \"therapist [city]\" typically move at 90 to 180 days, depending on the competitive density of the local pack and your starting review count relative to competitors." },
  { q: "Do you require long-term contracts?", a: "No. Primara operates on a month-to-month basis after an initial three-month recommended minimum. The three-month minimum is not a lock-in — it is a practical reality of how local search works. GBP configuration changes take four to six weeks for Google to fully index and begin rewarding in rankings. Review velocity needs 60-plus days to establish a visible pattern that Google's algorithm registers." },
  { q: "What's included in the free audit?", a: "The free audit covers your Google review count against your named local competitor, your current Maps position for your primary keyword and city, a website diagnostic (mobile speed, NAP accuracy, schema markup, service page structure), a GBP completeness score (categories, services listed, post frequency, photos), a competitor gap analysis showing what the top-ranking practice in your area is doing differently, and your single fastest available win. Delivered in 3–5 business days, walked through personally by Liam or Gio — not a templated report." },
  { q: "Do you work with practices outside Florida?", a: "Primara currently serves South Florida (Miami-Dade, Broward, Palm Beach, Martin, and Indian River Counties), the Tampa Bay area (Hillsborough, Pinellas, and Polk Counties), Orlando Metro (Orange, Osceola, and Seminole Counties), and the Jacksonville area (Duval, St. Johns, Clay, and Nassau Counties). Our market coverage is a deliberate choice, not a capacity limitation." },
  { q: "What's the difference between your two packages?", a: "The Foundation Package covers GBP optimization, local SEO, and review management — the core infrastructure that drives your Google Maps ranking and your organic local search presence. It is designed for practices that already have a functional website and want to maximize their search visibility without rebuilding their entire digital presence. The Visibility Package adds a full website rebuild and Google Ads management — specifically Local Service Ads and targeted search campaigns — to the Foundation deliverables." },
  { q: "How do you handle HIPAA compliance in your marketing?", a: "All review response copy follows the HIPAA minimum-necessary rule: we never confirm or deny a patient relationship in a review response, never reference a specific visit or condition, and never use language that could imply the reviewer is a patient. Analytics and ad tracking are configured to log that a form was submitted or a call was made — never what a patient typed or said. Testimonials naming a condition are never published without specific written authorization, separate from a general intake form." },
  { q: "What does Primara actually do day to day for a practice?", a: "Ongoing work includes Google Business Profile posts and Q&A management on a set cadence, review response (not generation — see below), monthly reporting on calls, direction requests, and website clicks from the listing, local SEO content on the website, and — for Visibility Package clients — Google Ads management and website maintenance. Every client gets a monthly report showing what changed and why, not just a list of activities completed." },
  { q: "Can you help get more Google reviews, or just respond to the ones we have?", a: "Both, within FTC and Google policy limits. We help set up a compliant review-request process — asking every patient the same way, with no incentive and no filtering of who gets asked — and we respond to reviews that come in. What we don't do is review-gate (asking only satisfied patients) or offer any incentive for a review, both of which violate Google's platform policies." },
  { q: "What if I already have a website — do I need a new one?", a: "Not necessarily. The Foundation Package works with your existing site as long as it's reasonably fast, mobile-friendly, and has basic tracking in place — we'll tell you honestly in the free audit if it doesn't. A full rebuild only makes sense if the current site is actively working against you: slow load times, no mobile layout, or missing the schema and tracking a local SEO program depends on." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primara365.com" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://primara365.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ padding: "12px 24px" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8125rem", color: "var(--smoke)" }}>
              <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--chalk)" }}>FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 8vw, 96px) 0 clamp(32px, 5vw, 56px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", maxWidth: "600px", lineHeight: 1.75 }}>
            Answers about Primara's healthcare marketing services, timelines, HIPAA practices, and what results look like for independent practices. If you have a question that isn't here, <Link href="/contact" style={{ color: "var(--chalk)", textDecoration: "underline" }}>contact us directly</Link>.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section style={{ backgroundColor: "var(--void)", padding: "0 0 clamp(48px, 8vw, 96px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <dl style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map(({ q, a }, i, arr) => (
              <div key={q} style={{ padding: "clamp(20px, 3vw, 28px) 0", borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none" }}>
                <dt style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "var(--color-text)", fontWeight: 600, marginBottom: "8px" }}>
                  {q}
                </dt>
                <dd style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.75, margin: 0, maxWidth: "680px" }}>
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 56px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
            Learn more about Primara
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/the-audit", label: "Get a Free Audit" },
              { href: "/primary-care", label: "Primary Care Marketing" },
              { href: "/mental-health", label: "Mental Health Marketing" },
              { href: "/services", label: "Our Services" },
              { href: "/results", label: "Results" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: "0.875rem", color: "var(--ash)", border: "1px solid var(--wire)", borderRadius: "4px", padding: "6px 14px", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Get a free audit of your online presence — delivered in 3–5 business days.
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
