import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO for Medical Practices — Get Found on Google | Primara",
  description:
    "Primara provides end-to-end SEO for independent primary care and mental health practices. Local SEO, on-page optimization, technical audits, and content strategy — no long-term contracts.",
  alternates: { canonical: "https://primara365.com/services/seo" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SEO for Medical Practices — Get Found on Google | Primara",
    description:
      "Primara provides end-to-end SEO for independent primary care and mental health practices. Local SEO, on-page optimization, and content strategy.",
    type: "website",
    url: "https://primara365.com/services/seo",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara365.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO for Medical Practices", item: "https://primara365.com/services/seo" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO for Medical Practices",
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
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Search Engine Optimization",
  description:
    "End-to-end SEO for independent primary care and mental health practices — local SEO, on-page optimization, technical audits, and content strategy.",
};

const pillars = [
  {
    title: "Local SEO & Google Maps",
    body: "Your Google Business Profile is the single highest-leverage asset in your digital presence. We fully configure it — categories, services, attributes, Q&A, and weekly posts — then build the citation footprint that signals geographic relevance to Google's local ranking algorithm.",
    items: [
      "Google Business Profile optimization: 8–10 categories, 30+ services, attributes, photo upload",
      "NAP consistency audit across Healthgrades, Zocdoc, WebMD, Yelp, and 40+ directories",
      "Local Falcon grid baseline and monthly rank tracking across your service area",
      "Review generation system: NFC tap cards, QR codes, and follow-up workflow",
      "Google Posts calendar: weekly posts scheduled 12 months in advance",
    ],
  },
  {
    title: "On-Page Optimization",
    body: "Every page of your website is a ranked asset or a missed opportunity. We audit and optimize title tags, meta descriptions, H1/H2 structure, internal linking, and body copy to align with the specific search queries your prospective patients use.",
    items: [
      "Title tag and meta description rewrite for every key page",
      "H1/H2/H3 structure aligned to primary and secondary keywords",
      "Internal linking strategy connecting service pages to location pages",
      "Schema markup: LocalBusiness, Physician, MedicalClinic, FAQPage, BreadcrumbList",
      "Image alt text and file naming for accessibility and crawlability",
    ],
  },
  {
    title: "Technical SEO",
    body: "Search engines need to be able to find, crawl, and index your site reliably before any ranking work pays off. We conduct a full technical audit and resolve every issue that might be suppressing your visibility.",
    items: [
      "Core Web Vitals: LCP, INP, and CLS measurement and remediation",
      "Mobile usability testing on real device viewports",
      "HTTPS configuration and mixed-content checks",
      "XML sitemap and robots.txt validation",
      "Canonical tags and duplicate content resolution",
      "Page speed optimization: image compression, lazy loading, font subsetting",
    ],
  },
  {
    title: "Content Strategy",
    body: "Rank for the searches that convert — condition queries, neighborhood searches, and insurance questions — not just your brand name. We build content that earns rankings and answers the questions patients are actually asking.",
    items: [
      "Keyword research mapped to patient intent: informational, navigational, transactional",
      "Condition and service pages targeting high-volume, low-competition search terms",
      "Location and neighborhood pages built where search volume justifies the investment",
      "Blog content calendar targeting question-based queries patients search before booking",
      "Google Search Console monitoring: impressions, clicks, and position by page",
    ],
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "For local SEO — Google Business Profile ranking and Maps visibility — most independent practices see measurable movement within 60–90 days. Organic website ranking for competitive keywords typically takes 4–6 months. Markets with lower competition (smaller cities, specific specialties) move faster.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No — and you should be skeptical of anyone who does. What we guarantee is full execution of a documented process: complete GBP configuration, clean citation footprint, technical SEO audit, and on-page optimization. We show you ranking movement via Local Falcon grids and Google Search Console every month, so progress is always visible.",
  },
  {
    q: "Do I need a new website to start SEO?",
    a: "No. We can optimize your existing website. That said, if your current site has serious technical issues (slow load, not mobile-responsive, no HTTPS), we'll flag them and recommend a rebuild through our Website service.",
  },
  {
    q: "Does SEO replace Google Ads?",
    a: "They serve different timelines. SEO builds organic visibility over months; Google Ads delivers immediate placement while SEO matures. For new practices or those adding a provider, running both simultaneously is often the most efficient path to a full schedule.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term contracts. Month-to-month after the initial 30-day setup period. If the work isn't delivering, you should be free to leave.",
  },
];

// Derived from `faqs` above — single source of truth, so the schema can
// never drift out of sync with the visible Q&A content on the page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SEOServicePage() {
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
            <li><Link href="/services" style={{ color: "var(--ash)", textDecoration: "none" }}>Services</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>SEO</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--void)",
          padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px",
              padding: "5px 14px",
              marginBottom: "32px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--gold)",
            }}
          >
            Now Accepting New Clients
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
              marginBottom: "24px",
            }}
          >
            SEO for Independent Medical Practices
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--ash)",
              lineHeight: 1.75,
              maxWidth: "640px",
              marginBottom: "40px",
            }}
          >
            Most independent practices are invisible on Google — not because they don&rsquo;t
            deserve patients, but because nobody has ever done the work. Primara handles the
            full SEO stack: Google Business Profile, local rankings, on-page optimization,
            technical health, and content strategy.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid var(--wire)",
                color: "var(--chalk)",
                fontWeight: 600,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get a Free Audit
            </Link>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.8125rem",
              color: "var(--smoke)",
            }}
          >
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent practices only · No long-term contracts
          </p>
        </div>
      </section>

      {/* What SEO means for a practice */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "24px",
              }}
            >
              What It Actually Means
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
                color: "var(--chalk)",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              SEO is the difference between patients finding you or finding the hospital system two miles away.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              When a patient searches &ldquo;primary care doctor near me&rdquo; or &ldquo;therapist accepting new
              patients,&rdquo; Google makes a real-time decision about which practices to show. That decision is based
              on three things: the completeness and activity of your Google Business Profile, the authority and
              relevance of your website, and the consistency of your business information across the web.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Independent practices lose this contest by default — not because patients don&rsquo;t want to find them,
              but because hospital systems and venture-backed urgent care chains have dedicated marketing teams running
              this infrastructure daily. Primara levels that field without charging hospital-system rates.
            </p>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "48px",
            }}
          >
            What We Do
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "clamp(32px, 5vw, 56px) 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(32px, 5vw, 80px)",
                }}
                className="seo-pillar-grid"
              >
                {/* Left: title + body */}
                <div>
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      color: "var(--smoke)",
                      marginBottom: "12px",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                      fontWeight: 400,
                      color: "var(--chalk)",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                    }}
                  >
                    {pillar.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75 }}>
                    {pillar.body}
                  </p>
                </div>

                {/* Right: deliverables */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.875rem" }}>▸</span>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", borderBottom: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "32px",
            }}
          >
            What to Expect
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.2,
              marginBottom: "48px",
              maxWidth: "600px",
            }}
          >
            Honest timelines. No surprises.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--wire)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {[
              { period: "Week 1", heading: "Foundation", body: "GBP fully configured. Citation audit complete. Technical SEO issues identified and prioritized." },
              { period: "30 Days", heading: "On-Page Live", body: "All title tags, meta descriptions, H1s, and schema markup updated. Content calendar loaded." },
              { period: "60 Days", heading: "First Data", body: "GBP impressions trending up. Local Falcon grid shows first rank movement on secondary keywords." },
              { period: "90 Days", heading: "Momentum", body: "Primary keyword movement visible. Review velocity established. Monthly reporting routine in place." },
              { period: "6 Months", heading: "Compounding", body: "Google Search Console shows organic traffic growth. Top-performing pages ranked on first page for targeted queries." },
            ].map((step) => (
              <div
                key={step.period}
                style={{
                  backgroundColor: "var(--void)",
                  padding: "clamp(20px, 3vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase" as const,
                    color: "var(--ember)",
                    fontWeight: 700,
                  }}
                >
                  {step.period}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.0625rem",
                    color: "var(--chalk)",
                    fontWeight: 400,
                  }}
                >
                  {step.heading}
                </span>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "var(--ash)", lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "40px",
            }}
          >
            Common Questions
          </p>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "24px 0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 48px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px" }}>
            Related services
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/services/google-ads", label: "Google Ads for Medical Practices" },
              { href: "/services/google-business-profile", label: "Google Business Profile" },
              { href: "/services/medical-practice-website-design", label: "Website Design" },
              { href: "/services/online-reputation-management", label: "Reputation Management" },
              { href: "/results", label: "See the Results" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "6px 14px",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              marginBottom: "1rem",
            }}
          >
            Ready to Get Found on Google?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your current Google presence — delivered in 3–5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get My Free Audit
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Independent primary care &amp; mental health practices only · No long-term contracts ·{" "}
            <Link href="/services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
              All Services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
