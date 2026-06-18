import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primara vs. WebPT Marketing — An Honest Comparison | Primara",
  description:
    "Comparing Primara and WebPT's marketing features for primary care and mental health practices. WebPT is a PT EHR — here's what that means for your marketing.",
  alternates: { canonical: "https://primara365.com/vs/webpt" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Primara vs. WebPT Marketing — An Honest Comparison | Primara",
    description:
      "WebPT is primarily a physical therapy EHR. If you're a primary care or mental health practice evaluating their marketing add-on, here's an honest comparison.",
    type: "website",
    url: "https://primara365.com/vs/webpt",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Primara vs. WebPT — An Honest Comparison",
  url: "https://primara365.com/vs/webpt",
  description:
    "Honest comparison of Primara's dedicated healthcare marketing against WebPT's marketing add-on features, for primary care and mental health practices.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://primara365.com/vs" },
      { "@type": "ListItem", position: 3, name: "vs. WebPT", item: "https://primara365.com/vs/webpt" },
    ],
  },
};

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

const tableRows = [
  ["Primary product", "Healthcare marketing agency", "Physical therapy EHR/practice management software"],
  ["Marketing type", "Dedicated — the only thing we do", "Add-on to EHR subscription"],
  ["Pricing model", "Single engagement fee (audit-scoped)", "EHR subscription + marketing module add-on"],
  ["Who does the work", "Founders Liam & Gio directly", "Automated tools within the platform"],
  ["Specialty focus", "Primary care + mental health only", "Physical therapy (primary); add-on targets PT practices"],
  ["Website quality", "Custom, locally targeted, client-owned", "Templated within WebPT's platform"],
  ["GBP management", "Full optimization, 4 posts/mo, competitive monitoring", "Basic presence features"],
  ["Review strategy", "NFC tap cards + HIPAA-compliant responses", "Automated patient engagement emails"],
  ["Local SEO depth", "Market and competitor-specific strategy", "Template SEO, not specialty or market specific"],
  ["Contract terms", "Month-to-month after 3 months", "Tied to EHR subscription terms"],
  ["Reporting", "Local Falcon rank grids + rank movement", "Platform analytics dashboard"],
];

export default function VsWebPTPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

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
          <li aria-current="page" style={{ color: "var(--ash)" }}>vs. WebPT</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="webpt-h1"
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
            background: "radial-gradient(ellipse 60vw 50vh at 15% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)",
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
            Honest Comparison · WebPT vs. Primara
          </div>
          <h1
            id="webpt-h1"
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
            Primara vs. WebPT —{" "}
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
              maxWidth: "60ch",
            }}
          >
            An important clarification before this comparison goes any further.
          </p>
        </div>
      </section>

      {/* Important Framing */}
      <section
        aria-labelledby="webpt-framing"
        style={{
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
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
            Read First
          </div>
          <h2
            id="webpt-framing"
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
            Primara does not serve physical therapy practices. Full stop.
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
            WebPT is a physical therapy EHR and practice management platform. Primara serves independent primary care and mental health practices exclusively. We do not work with PT practices — not because we can&rsquo;t, but because our expertise is specific and we don&rsquo;t stretch it.
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
            <strong style={{ color: "var(--chalk)", fontWeight: 600 }}>If you are a physical therapy practice looking for marketing help, this comparison is not for you.</strong> We are not the right fit, and we&rsquo;d encourage you to find an agency that specializes in PT practice marketing.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            <strong style={{ color: "var(--chalk)", fontWeight: 600 }}>If you are a primary care or mental health practice that uses WebPT for billing</strong> and is evaluating their marketing add-on features as an additional purchase — this comparison is for you.
          </p>
        </div>
      </section>

      {/* What WebPT's marketing features are */}
      <section
        aria-labelledby="webpt-what"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
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
            What WebPT Offers
          </div>
          <h2
            id="webpt-what"
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
            Marketing features as a bolt-on to EHR software.
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
            WebPT&rsquo;s core product is practice management and clinical documentation software for physical therapists. Their marketing features — online scheduling, patient engagement tools, basic review management, and web presence tools — are add-ons to the EHR subscription. They are not a marketing agency; they are a software company that offers marketing tools to their existing practice management customers.
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
            The marketing features WebPT offers include: templated patient engagement emails, automated appointment reminders, basic online scheduling, and a web presence management tool. These are not designed for competitive local SEO. They are convenience features built for practices that want to manage communications from within their EHR platform.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            They do not include: competitive local SEO, GBP category optimization, Local Falcon rank tracking, NFC tap card review generation, HIPAA-aware review response management, or monthly strategic reporting against named competitors. These are the things that actually move your practice in local search rankings.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        aria-labelledby="webpt-table"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
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
            id="webpt-table"
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
                  {["", "Primara", "WebPT Marketing"].map((col, i) => (
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
                {tableRows.map(([criterion, primara, webpt]) => (
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
                      {webpt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Software company with marketing bolt-on */}
      <section
        aria-labelledby="webpt-core-arg"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
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
            The Core Argument
          </div>
          <h2
            id="webpt-core-arg"
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
            Marketing is not a feature. It&rsquo;s a practice.
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
            A company whose primary revenue is EHR software has fundamentally different incentives than a company whose entire business is producing patient growth for healthcare practices. WebPT&rsquo;s growth is driven by EHR subscriptions, implementation fees, and platform add-ons. Their marketing tools are a retention feature — something that keeps you in their ecosystem — not a competitive marketing product built to rank your practice above hospital systems in Google Maps.
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
            Primara exists entirely to produce local search results for independent primary care and mental health practices. Every product decision, every deliverable, every monthly report is designed around one question: did this practice&rsquo;s ranking improve and did that improvement produce new patient inquiries? That&rsquo;s not a question a software company asks about its marketing add-on.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            There is nothing wrong with WebPT as an EHR. It may be exactly right for your billing and documentation needs. But using their marketing add-on instead of a dedicated marketing agency is using a convenience feature to try to compete against practices with purpose-built local SEO programs — and in a market like South Florida, that gap is not small.
          </p>
        </div>
      </section>

      {/* Who each is right for */}
      <section
        aria-labelledby="webpt-rightfor"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
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
            id="webpt-rightfor"
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
                backgroundColor: "var(--surface-2)",
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
                WebPT marketing add-on may be sufficient if:
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
                  "You only need basic appointment reminders and patient communication",
                  "You are already using WebPT for EHR and want everything in one platform",
                  "Your market has very low local search competition",
                  "You are not actively trying to rank above competitors in Google Maps",
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
                backgroundColor: "var(--surface-2)",
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
                  "You are a primary care or mental health practice (not PT) in South Florida",
                  "You want to rank above hospital-affiliated competitors in Google Maps",
                  "You need your marketing handled by people who work healthcare local SEO exclusively",
                  "You want monthly reports with Local Falcon grid comparisons — not platform dashboards",
                  "You want your website and review system to be yours, not platform-dependent",
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
            { href: "/primary-care", label: "Primary Care Marketing" },
            { href: "/mental-health", label: "Mental Health Marketing" },
            { href: "/vs/patientpop", label: "vs. PatientPop" },
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
            Ready to See What Dedicated Healthcare Marketing Looks Like?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            The free audit takes 3–5 days and shows exactly where your practice stands — and what it would take to move.
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
