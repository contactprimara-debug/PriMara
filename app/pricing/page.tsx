import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency Pricing | Primara",
  description:
    "Honest explanation of Primara's pricing — why medical marketing cost depends on market, competition, and starting point. Two packages, no hidden fees. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/pricing" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Agency Pricing | Primara",
    description:
      "Honest explanation of Primara's pricing — why medical marketing cost depends on market, competition, and starting point. Two packages, no hidden fees.",
    type: "website",
    url: "https://primara365.com/pricing",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const pricingFaqs = [
  {
    q: "How much does medical practice marketing cost?",
    a: "Primara's engagement fees are structured around what your market actually requires — not a one-size number. Ranking in Pompano Beach costs less than ranking in Miami. A practice with 4 reviews needs different work than one with 140. The audit tells us what scope is required. Pricing is discussed on the walkthrough call. What we can say is this: a single new private-pay patient per month covers Primara's entire engagement fee. If the engagement doesn't produce at least that return, we'll say so before you commit.",
  },
  {
    q: "Why don't you publish exact prices on your website?",
    a: "Because pricing without context is meaningless for both sides. A practice entering a market with no credible competitors needs a different level of work than one competing against a Baptist Health-affiliated clinic that has 800 reviews and has held the local pack top spot for three years. Publishing a flat number would either underprice competitive engagements or overprice simple ones. The audit produces the information required to quote accurately.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. Primara operates month-to-month after a recommended three-month initial period. The three months is not a lock-in — it's the minimum time required for GBP algorithm changes to register, review velocity to establish a visible pattern, and a first meaningful rank report to be produced. You keep everything built: your optimized GBP, your review system, your website if applicable. No auto-renewals, no penalties.",
  },
  {
    q: "How does Primara compare on cost to hiring in-house?",
    a: "A full-time marketing coordinator costs $48,000–$65,000 annually in salary, plus benefits, tools, and training — and delivers generalist work, not healthcare SEO expertise. Primara's engagement fee is a fraction of that, with no hiring overhead, no tool costs, and founders who have worked healthcare local search exclusively. The comparison isn't close on output per dollar.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Healthcare Marketing Agency Pricing | Primara",
  url: "https://primara365.com/pricing",
  description:
    "Honest explanation of how Primara prices its healthcare marketing engagements — two packages, market-based scope, no hidden fees.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://primara365.com/pricing" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "76px clamp(24px, 8vw, 120px) 0" }}>
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--smoke)",
          }}
        >
          <li><Link href="/" className="breadcrumb-link">Home</Link></li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>/</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>Pricing</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="pricing-h1"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(48px, 7vw, 100px) clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(ellipse 70vw 60vh at 10% 30%, rgba(201,168,76,0.10) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 85% 75%, rgba(232,97,26,0.07) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              border: "1px solid var(--wire)",
              padding: "6px 14px",
              borderRadius: "2px",
              marginBottom: "clamp(28px, 4vw, 48px)",
            }}
          >
            Transparent Pricing · South Florida Healthcare Marketing
          </div>
          <h1
            id="pricing-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 40px)",
              maxWidth: "20ch",
            }}
          >
            What Primara Costs —{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              and Why an Audit Comes First
            </em>
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "var(--ash)",
              maxWidth: "60ch",
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Pricing a healthcare marketing engagement without knowing your market, your starting review count, and your competition is like quoting a construction project before seeing the building. The audit tells us what scope your situation requires. Pricing follows from that conversation.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "var(--ember)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get My Free Audit →
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--chalk)",
                backgroundColor: "transparent",
                border: "1px solid var(--wire)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>

      {/* The One-Patient Framing */}
      <section
        aria-labelledby="pricing-framing"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Frame
          </div>
          <h2
            id="pricing-framing"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(28px, 4vw, 40px)",
            }}
          >
            One new private-pay patient per month covers the engagement.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            A single new private-pay patient per month — whether primary care or mental health — typically covers Primara&rsquo;s entire monthly engagement fee. That&rsquo;s the bar we hold ourselves to before recommending an engagement. If the math doesn&rsquo;t work for your practice, we&rsquo;ll tell you that on the audit call.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            The economics of independent practice marketing are straightforward when the engagement is properly scoped: the cost of acquiring one new patient through local SEO is a fraction of what a single month of care generates in revenue. The question the audit answers is whether your market justifies the investment — and what the realistic timeline to positive ROI looks like.
          </p>
        </div>
      </section>

      {/* Two Package Cards */}
      <section
        aria-labelledby="pricing-packages"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Packages
          </div>
          <h2
            id="pricing-packages"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 56px)",
            }}
          >
            Two packages. Scope determined after the audit.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Foundation */}
            <div
              style={{
                padding: "40px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    marginBottom: "10px",
                  }}
                >
                  Package 01
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 8px",
                    lineHeight: 1.1,
                  }}
                >
                  Foundation
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "13px",
                    color: "var(--ash)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  For practices that already have a functional website and want to maximize search visibility.
                </p>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Google Business Profile — fully optimized (8–10 categories, 30+ services)",
                  "4 GBP posts per month + 1 geotagged photo monthly",
                  "2 SEO content pages published per month",
                  "Review management across Google, Healthgrades, Zocdoc, WebMD, Yelp",
                  "NFC tap cards + QR codes for review generation",
                  "Local Falcon rank grid baseline + monthly comparison",
                  "Monthly report by Liam or Gio directly — no account managers",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.55,
                      color: "var(--ash)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M2.5 7l3 3 6-6" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "11px",
                    color: "var(--smoke)",
                    fontStyle: "italic",
                    marginBottom: "16px",
                  }}
                >
                  Best if: your website was built after 2021, loads in under 3 seconds on mobile, and has city- or condition-specific pages.
                </p>
                <Link
                  href="/packages/foundation"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    color: "var(--chalk)",
                    border: "1px solid var(--wire)",
                    padding: "0 20px",
                    height: "40px",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  View Full Package Details →
                </Link>
              </div>
            </div>

            {/* Visibility */}
            <div
              style={{
                padding: "40px",
                border: "1px solid var(--gold)",
                borderRadius: "4px",
                backgroundColor: "var(--surface)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                }}
              >
                Full Coverage
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    marginBottom: "10px",
                  }}
                >
                  Package 02
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 8px",
                    lineHeight: 1.1,
                  }}
                >
                  Visibility
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "13px",
                    color: "var(--ash)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  For practices that need a website rebuild or want organic SEO plus Google Ads running together.
                </p>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Everything in the Foundation Package",
                  "Google Ads management — Local Service Ads + targeted search campaigns",
                  "Ads introduced at Month 3 after foundation is solid (not before)",
                  "You pay Google directly — Primara never touches your ad budget",
                  "Monthly ads performance report: impressions, clicks, cost per inquiry",
                  "Quarterly strategy review call included",
                  "You own the Google Ads account throughout",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.55,
                      color: "var(--ash)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M2.5 7l3 3 6-6" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "11px",
                    color: "var(--smoke)",
                    fontStyle: "italic",
                    marginBottom: "16px",
                  }}
                >
                  Best if: your website was built by your EHR vendor, is more than 3 years old, or has no locally targeted content pages.
                </p>
                <Link
                  href="/packages/visibility"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    color: "var(--gold)",
                    border: "1px solid var(--gold)",
                    padding: "0 20px",
                    height: "40px",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  View Full Package Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Don't Post Exact Pricing */}
      <section
        aria-labelledby="pricing-why"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Why No Flat Rate
          </div>
          <h2
            id="pricing-why"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(28px, 4vw, 40px)",
            }}
          >
            Why we don&rsquo;t post exact pricing.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {[
              {
                heading: "Market competitiveness varies — a lot.",
                body: "Ranking a primary care practice in Pompano Beach requires meaningfully different work than ranking one in Miami's Brickell neighborhood or Coral Gables. The number of credible competitors in the local pack, the review counts required to enter the top three positions, and the content depth required to support GBP authority differ by city, ZIP code, and even neighborhood. A flat price that works for a low-competition market underfunds a high-competition one.",
              },
              {
                heading: "Starting baseline determines how much work is required.",
                body: "A practice with 4 Google reviews, an unclaimed GBP, and a website built on a practice management system template requires substantially different effort than one with 80 reviews, a claimed and partially optimized profile, and a modern website. The audit gives us that starting picture. Without it, any price we quote is a guess — and we don't guess on scope.",
              },
              {
                heading: "Pricing without context is a promise we can't keep.",
                body: "Agencies that post flat rates are optimizing for conversions, not for fit. We'd rather quote you accurately after seeing your situation than close you on a number that doesn't reflect what your engagement actually requires. The audit produces the scope. The scope determines the price. That conversation happens on the walkthrough call — not on a pricing page.",
              },
            ].map(({ heading, body }, i, arr) => (
              <div
                key={heading}
                style={{
                  paddingBottom: "28px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(17px, 1.8vw, 20px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                  }}
                >
                  {heading}
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "var(--ash)",
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Primara vs In-House vs PatientPop/WebPT */}
      <section
        aria-labelledby="pricing-comparison"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            How We Compare
          </div>
          <h2
            id="pricing-comparison"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 56px)",
            }}
          >
            Primara vs. in-house vs. platform marketing.
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr>
                  {["", "Primara", "In-House Coordinator", "PatientPop / WebPT"].map((col, i) => (
                    <th
                      key={col + i}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        borderBottom: "2px solid var(--wire)",
                        color: i === 1 ? "var(--gold)" : "var(--chalk)",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        backgroundColor: i === 1 ? "rgba(201,168,76,0.06)" : "transparent",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Monthly cost", "Engagement fee", "$4,000–$5,400/mo (salary + benefits)", "Platform fee + add-on fee"],
                  ["Healthcare specialization", "Primary care + mental health only", "Generalist", "General healthcare (templated)"],
                  ["Who does the work", "Founders Liam & Gio", "1 junior coordinator", "Automated systems + shared templates"],
                  ["Website quality", "Custom, locally targeted", "Depends on vendor", "Shared theme library"],
                  ["GBP management", "Full optimization, 4 posts/mo", "Partial, inconsistent", "Basic automated posts"],
                  ["Review strategy", "NFC cards + compliant responses", "Manual, ad hoc", "Automated email requests"],
                  ["Local SEO depth", "Market-specific, competitive-intelligence-driven", "General best practices", "Templated across all clients"],
                  ["Reporting", "Local Falcon grids + rank movement", "Varies widely", "Dashboard with vanity metrics"],
                  ["Contract", "Month-to-month after Month 3", "Full-time employment", "Annual platform contract"],
                  ["HIPAA awareness", "Built into every deliverable", "Training-dependent", "Varies; not specialty-specific"],
                ].map(([criterion, primara, inHouse, platform], i) => (
                  <tr
                    key={criterion}
                    style={{ borderBottom: "1px solid var(--wire)" }}
                  >
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "var(--chalk)",
                        fontWeight: 500,
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {criterion}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "var(--ash)",
                        verticalAlign: "top",
                        backgroundColor: "rgba(201,168,76,0.04)",
                      }}
                    >
                      {primara}
                    </td>
                    <td style={{ padding: "14px 16px", color: "var(--smoke)", verticalAlign: "top" }}>{inHouse}</td>
                    <td style={{ padding: "14px 16px", color: "var(--smoke)", verticalAlign: "top" }}>{platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", marginTop: "16px", fontStyle: "italic" }}>
            PatientPop and WebPT detailed comparisons:{" "}
            <Link href="/vs/patientpop" style={{ color: "var(--ash)", textDecoration: "underline" }}>Primara vs. PatientPop</Link>
            {" · "}
            <Link href="/vs/webpt" style={{ color: "var(--ash)", textDecoration: "underline" }}>Primara vs. WebPT</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="pricing-faq"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Pricing Questions
          </div>
          <h2
            id="pricing-faq"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 56px)",
            }}
          >
            Common pricing questions.
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pricingFaqs.map(({ q, a }, i, arr) => (
              <div
                key={q}
                style={{
                  padding: "clamp(20px, 3vw, 28px) 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none",
                }}
              >
                <dt
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  {q}
                </dt>
                <dd
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--ash)",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "660px",
                  }}
                >
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ backgroundColor: "var(--void)", borderTop: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 56px) clamp(24px, 8vw, 120px)" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
          Related pages
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { href: "/the-audit", label: "Get a Free Audit" },
            { href: "/packages/foundation", label: "Foundation Package" },
            { href: "/packages/visibility", label: "Visibility Package" },
            { href: "/services", label: "Our Services" },
            { href: "/vs/patientpop", label: "vs. PatientPop" },
            { href: "/how-it-works", label: "How It Works" },
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
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--chalk)",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Start With the Audit — Pricing Follows From There
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            We research your market and your competition before quoting anything. The audit is free and delivered in 3–5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
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
              Get My Free Audit
            </Link>
            <a
              href="tel:+15612912681"
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
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
