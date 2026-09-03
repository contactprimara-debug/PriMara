import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/review-generation-west-palm-beach`;

export const metadata: Metadata = {
  title: "Review Generation in West Palm Beach, FL | Primara",
  description:
    "Ethical review generation for West Palm Beach medical practices — Google-guideline-compliant outreach, HIPAA-compliant responses, and review monitoring. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Review Generation in West Palm Beach, FL | Primara",
    description:
      "Ethical review generation for West Palm Beach medical practices — compliant outreach, HIPAA-safe responses, and monitoring.",
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
    { "@type": "ListItem", position: 3, name: "Review Generation West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Generation in West Palm Beach",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      postalCode: "33401",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "West Palm Beach",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  serviceType: "Review Generation and Reputation Management for Medical Practices",
  description:
    "Ethical review generation and reputation management for independent medical practices in West Palm Beach, Florida — review audits, Google-guideline-compliant outreach, HIPAA-compliant response frameworks, and monthly monitoring.",
};

const faqs = [
  {
    "q": "Do you buy or incentivize reviews?",
    "a": "No. Our review generation process is aligned with Google's guidelines — no purchased or incentivized reviews. We build velocity through ethical outreach to real patients, so the profile that results accurately reflects the care your practice provides."
  },
  {
    "q": "Why do reviews matter so much in West Palm Beach specifically?",
    "a": "Density. In corridors like Palm Beach Lakes Boulevard or the medical cluster near the airport, a prospective patient has many visible alternatives within a short drive. When everything else looks similar, the practice with a stronger, more active review profile gets the call."
  },
  {
    "q": "How do you respond to negative reviews without violating HIPAA?",
    "a": "With a response framework that never confirms or denies a patient relationship. Replies stay professional and general, address the concern without discussing any care, and invite the conversation offline. Done right, a well-handled negative review reassures the prospective patients reading it."
  },
  {
    "q": "Which platforms do you cover?",
    "a": "Google first — it drives the most patient decisions — plus Healthgrades, Zocdoc, WebMD, and Yelp. The audit also catches duplicate and unverified listings on those platforms that may be splitting your reviews or showing incorrect information."
  },
  {
    "q": "When does a practice actually need this?",
    "a": "If your average Google rating is below 4.0, your review volume is significantly lower than competing practices nearby, or critical reviews are sitting without a professional response. Any one of those is a visible liability to every prospective patient who finds you."
  }
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

const deliverables = [
  {
    "title": "Full Review Audit",
    "body": "We inventory your current rating and review volume across Google, Healthgrades, Zocdoc, WebMD, and Yelp, and identify duplicate or unverified listings diluting your profile or displaying wrong information."
  },
  {
    "title": "Ethical Review Generation",
    "body": "A systematic process for collecting authentic, unsolicited patient feedback, aligned with Google's guidelines — no incentivized or purchased reviews, ever. The goal is review velocity that accurately reflects your care."
  },
  {
    "title": "HIPAA-Compliant Response Strategy",
    "body": "Professional response templates for positive reviews and a compliant framework for critical ones — replies that never confirm or deny a patient relationship, and that show prospective patients reading the exchange how your practice handles feedback."
  },
  {
    "title": "Monitoring and Escalation",
    "body": "Monthly review volume and sentiment tracking across all active platforms, plus an escalation protocol for reviews that may point to genuine operational concerns worth fixing inside the practice."
  }
];

export default function ReviewGenerationWestPalmBeachPage() {
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
            <li style={{ color: "var(--chalk)" }}>Review Generation West Palm Beach</li>
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
            West Palm Beach, Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "800px", marginBottom: "24px",
            }}
          >
            Review Generation in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara is a West Palm Beach medical marketing agency built for independent practices. We build steady, ethical review velocity — outreach aligned with Google&rsquo;s guidelines, HIPAA-compliant responses, and monitoring across the platforms patients actually check.
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

      {/* Local context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why It Matters Here
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              Patients read your reviews before they ever call.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              A prospective patient comparing practices along Palm Beach Lakes Boulevard or the medical cluster near Palm Beach International Airport sees your Google rating before your website, your credentials, or your front desk. Practices with fewer, older, or unresponded reviews lose those patients to competitors with more active profiles — even when the clinical quality is comparable.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The fix isn&rsquo;t buying reviews — Google penalizes that, and it&rsquo;s the fastest way to torch trust. It&rsquo;s a systematic, ethical process for collecting authentic patient feedback and responding to every review in a professional, HIPAA-compliant way. That&rsquo;s the work we do, from right here in West Palm Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            What We Do
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {deliverables.map((d, idx) => (
              <div key={d.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {d.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{d.body}</p>
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
          {
                    "href": "/services/online-reputation-management",
                    "label": "Reputation Management Service",
                    "description": "The full review and reputation service — audits, response strategy, and ethical review generation."
          },
          {
                    "href": "/locations/review-generation-florida",
                    "label": "Review Generation in Florida",
                    "description": "The same review generation service for practices across the state."
          },
          {
                    "href": "/locations/gbp-optimization-west-palm-beach",
                    "label": "GBP Optimization in West Palm Beach",
                    "description": "The Business Profile your reviews live on — optimized for the local Maps pack."
          }
]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready for a Review Profile That Wins the Comparison?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your current Google presence — delivered in 3–5 business days.
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
