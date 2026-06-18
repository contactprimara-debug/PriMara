import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primara vs. PatientPop — An Honest Comparison | Primara",
  description:
    "Comparing Primara and PatientPop for independent medical practices: pricing model, website quality, local SEO depth, contract terms, and who each is actually right for.",
  alternates: { canonical: "https://primara365.com/vs/patientpop" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Primara vs. PatientPop — An Honest Comparison | Primara",
    description:
      "Side-by-side comparison of Primara and PatientPop for independent medical practices in Florida. Pricing, website quality, local SEO, and contract terms.",
    type: "website",
    url: "https://primara365.com/vs/patientpop",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const faqItems = [
  {
    q: "Is PatientPop good for local SEO?",
    a: "PatientPop websites are built on a shared template infrastructure deployed across thousands of practices. Google's local search algorithm rewards geographic specificity — city- and neighborhood-specific content, domain authority built through local links, and GBP signals reinforced by a practice-specific website. A template shared across thousands of practices produces none of those signals. For basic web presence, PatientPop is functional. For competitive local SEO in a market like Miami, Fort Lauderdale, or Boca Raton, templated platforms consistently underperform custom, locally targeted builds.",
  },
  {
    q: "What does PatientPop cost?",
    a: "PatientPop pricing is not published publicly and varies by practice size and add-ons. Independent reviews and practice management forums cite monthly fees ranging from $299 to over $1,000 per month, plus additional fees for marketing add-ons. The platform fee structure combines software (website hosting, appointment booking, patient communication) with marketing features — making it difficult to isolate what you're paying for marketing versus software.",
  },
  {
    q: "Can I keep my website if I leave PatientPop?",
    a: "PatientPop websites are hosted on PatientPop's infrastructure and built on their proprietary platform. If you end your subscription, you lose access to the website. The domain may transfer, but the website itself — the content, the design, the structure — does not come with you. Primara builds websites on Next.js, deployed on Vercel, with client-owned GitHub repositories. You own the code, the content, and the hosting relationship. Leaving Primara means you keep everything.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Primara vs. PatientPop — An Honest Comparison",
  url: "https://primara365.com/vs/patientpop",
  description:
    "Side-by-side comparison of Primara and PatientPop for independent medical practices in Florida.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://primara365.com/vs" },
      { "@type": "ListItem", position: 3, name: "vs. PatientPop", item: "https://primara365.com/vs/patientpop" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

const tableRows = [
  ["Pricing model", "Single engagement fee (audit-scoped)", "Monthly platform fee + marketing add-on"],
  ["Contract terms", "Month-to-month after 3 months", "Annual platform contract (typically)"],
  ["Website quality", "Custom, locally targeted, client-owned", "Shared template library, platform-hosted"],
  ["Who does the work", "Founders Liam & Gio directly", "Automated systems + shared templates"],
  ["Healthcare specialization", "Primary care + mental health only", "Wide range of specialties (generalist)"],
  ["HIPAA awareness", "Built into every deliverable", "Platform-level compliance only"],
  ["Reporting transparency", "Local Falcon grids + rank movement data", "Dashboard with platform-specific metrics"],
  ["Local SEO depth", "Market and competitor-specific strategy", "Template SEO across all clients"],
  ["GBP management", "Full optimization, 4 posts/mo, active monitoring", "Automated review requests, basic presence"],
  ["Review strategy", "NFC tap cards + HIPAA-compliant responses", "Automated email requests"],
  ["What you own at exit", "Website, GBP, all content, review system", "Domain only; website stays on their platform"],
];

export default function VsPatientPopPage() {
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
          <li><Link href="/vs" className="breadcrumb-link" style={{ color: "var(--smoke)" }}>Comparisons</Link></li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>/</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>vs. PatientPop</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="pp-h1"
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
            background: "radial-gradient(ellipse 60vw 50vh at 15% 40%, rgba(201,168,76,0.09) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
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
            Honest Comparison · PatientPop vs. Primara
          </div>
          <h1
            id="pp-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(20px, 3vw, 32px)",
              maxWidth: "18ch",
            }}
          >
            Primara vs. PatientPop —{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              An Honest Comparison
            </em>
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.8,
              color: "var(--ash)",
              maxWidth: "58ch",
            }}
          >
            PatientPop is the most common alternative practices consider when evaluating Primara. We put both options side by side — including the cases where PatientPop is the better choice.
          </p>
        </div>
      </section>

      {/* What PatientPop Is */}
      <section
        aria-labelledby="pp-what"
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
            What PatientPop Is
          </div>
          <h2
            id="pp-what"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 36px)",
            }}
          >
            A software platform with marketing features added.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            PatientPop is a practice growth platform owned by Kareo (now Tebra), primarily a practice management and EHR software company. PatientPop&rsquo;s core product is a website builder and patient communication system — online scheduling, automated appointment reminders, and review request emails. Marketing features — SEO, Google Ads management, social media — are add-ons to the platform subscription.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            PatientPop&rsquo;s websites are built on a shared template library deployed across thousands of practices. Review requests are automated emails sent post-appointment. SEO is applied through on-page templates rather than through custom, market-specific strategy.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            Primara is a boutique agency with no software product and no EHR integration. We do one thing: local search dominance for independent primary care and mental health practices. Every deliverable is built for your specific market by Liam Costello or Gio LaRoche directly — not by automated systems or shared templates.
          </p>
        </div>
      </section>

      {/* Side-by-side table */}
      <section
        aria-labelledby="pp-table"
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
            Side by Side
          </div>
          <h2
            id="pp-table"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(32px, 5vw, 48px)",
            }}
          >
            The comparison, line by line.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr>
                  {["", "Primara", "PatientPop"].map((col, i) => (
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
                {tableRows.map(([criterion, primara, patientpop], i) => (
                  <tr key={criterion} style={{ borderBottom: "1px solid var(--wire)" }}>
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
                    <td style={{ padding: "14px 16px", color: "var(--smoke)", verticalAlign: "top" }}>
                      {patientpop}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why templated platforms underperform */}
      <section
        aria-labelledby="pp-template"
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
            The SEO Problem
          </div>
          <h2
            id="pp-template"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 36px)",
            }}
          >
            Why templated platform marketing underperforms for independent practices.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Google uses domain age, backlinks, content depth, and GBP signals to rank practices in local search. A templated website shared across thousands of practices — even with on-page SEO applied — does not produce the geographic specificity that moves rankings in competitive markets like Miami or Fort Lauderdale.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Local SEO requires knowing that the primary keyword in Coral Gables carries different competition density than the same keyword in Hialeah. It requires knowing that a practice entering the Brickell market needs a different content architecture than one entering Pinecrest. It requires building city pages, neighborhood pages, and condition-specific pages that signal to Google exactly what geographic area this practice serves — and that those signals reinforce what the GBP is already saying.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            PatientPop cannot build that specificity at scale. Their economic model requires a template that works well enough across many markets. &ldquo;Well enough across many markets&rdquo; and &ldquo;ranked above hospital systems in Miami&rdquo; are not the same thing.
          </p>
        </div>
      </section>

      {/* Who each is right for */}
      <section
        aria-labelledby="pp-rightfor"
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
            Honest Assessment
          </div>
          <h2
            id="pp-rightfor"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(32px, 5vw, 48px)",
            }}
          >
            Who each is actually right for.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                padding: "32px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface)",
              }}
            >
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--smoke)",
                  marginBottom: "16px",
                }}
              >
                PatientPop may work if:
              </p>
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
                  "You need a basic web presence and simple appointment booking only",
                  "You operate in a market with minimal local search competition",
                  "You also need the EHR/practice management features Kareo/Tebra provides",
                  "Automated review emails are sufficient for your review velocity goals",
                  "You are not competing against hospital-affiliated or chain practices",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--smoke)",
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: "1px", color: "var(--wire)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: "32px",
                border: "1px solid var(--gold)",
                borderRadius: "4px",
                backgroundColor: "var(--surface)",
              }}
            >
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Primara is right if:
              </p>
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
                  "You're a primary care or mental health practice in South Florida",
                  "Your market has meaningful local search competition (Miami, Fort Lauderdale, Boca Raton, WPB)",
                  "You want to rank above hospital-affiliated competitors in Google Maps",
                  "You want a website you own and take with you if you ever leave",
                  "You want your account handled by the same people, not handed to coordinators",
                  "You want Local Falcon grid rankings — not dashboard metrics — in your monthly report",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.6,
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="pp-faq"
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
            Common Questions
          </div>
          <h2
            id="pp-faq"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(32px, 5vw, 48px)",
            }}
          >
            Questions about this comparison.
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqItems.map(({ q, a }, i, arr) => (
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
      <section
        style={{
          backgroundColor: "var(--void)",
          borderTop: "1px solid var(--wire)",
          padding: "clamp(32px, 4vw, 56px) clamp(24px, 8vw, 120px)",
        }}
      >
        <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
          Related pages
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { href: "/the-audit", label: "Get a Free Audit" },
            { href: "/pricing", label: "Pricing" },
            { href: "/services/google-business-profile", label: "GBP Optimization" },
            { href: "/services/medical-practice-website-design", label: "Website Design" },
            { href: "/vs/webpt", label: "vs. WebPT" },
            { href: "/vs/doctorlogic", label: "vs. DoctorLogic" },
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
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--gold)" }}>
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
            See How Your Practice Stacks Up
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            The free audit shows your current Maps position vs. your named competitor — in real numbers, not platform estimates.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--gold)",
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
