import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Primara vs. DoctorLogic — An Honest Comparison | Primara",
  description:
    "Comparing Primara and DoctorLogic for independent medical practices: AI content vs. locally targeted SEO, platform automation vs. founder-managed strategy.",
  alternates: { canonical: "https://primara365.com/vs/doctorlogic" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Primara vs. DoctorLogic — An Honest Comparison | Primara",
    description:
      "DoctorLogic uses AI-powered content and templated websites. Primara builds market-specific strategy. An honest comparison for independent practices.",
    type: "website",
    url: "https://primara365.com/vs/doctorlogic",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Primara vs. DoctorLogic — An Honest Comparison",
  url: "https://primara365.com/vs/doctorlogic",
  description:
    "Honest comparison of Primara's locally targeted healthcare marketing against DoctorLogic's AI-powered platform approach.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://primara365.com/vs" },
      { "@type": "ListItem", position: 3, name: "vs. DoctorLogic", item: "https://primara365.com/vs/doctorlogic" },
    ],
  },
};

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

const tableRows = [
  ["Platform type", "Boutique agency — no software product", "Website + SEO platform for medical practices"],
  ["Content approach", "Custom, market-specific, founder-written", "AI-generated content at scale"],
  ["Website type", "Custom-built, client-owned, Next.js", "AI-powered templates within their platform"],
  ["Specialty coverage", "Primary care + mental health exclusively", "Wide range of medical specialties"],
  ["Local SEO strategy", "Competitor intelligence, market-specific, city-targeted", "Automated content generation, template SEO"],
  ["Who does the work", "Founders Liam & Gio directly", "Automated platform + account management"],
  ["GBP management", "Full optimization, 4 posts/mo, competitive monitoring", "Varies by plan; generally basic"],
  ["Review strategy", "NFC tap cards + HIPAA-compliant responses", "Automated review tools"],
  ["Reporting", "Local Falcon rank grids + rank movement vs. named competitor", "Platform analytics dashboard"],
  ["Contract terms", "Month-to-month after 3 months", "Annual contracts (typical)"],
  ["What you own at exit", "Website, content, GBP, review system — everything", "Limited; content tied to platform"],
];

export default function VsDoctorLogicPage() {
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>vs. DoctorLogic</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="dl-h1"
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
            Honest Comparison · DoctorLogic vs. Primara
          </div>
          <h1
            id="dl-h1"
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
            Primara vs. DoctorLogic —{" "}
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
            DoctorLogic and Primara are both healthcare marketing products, but they represent fundamentally different approaches to the same problem. Here&rsquo;s the honest comparison.
          </p>
        </div>
      </section>

      {/* What DoctorLogic Is */}
      <section
        aria-labelledby="dl-what"
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
            What DoctorLogic Is
          </div>
          <h2
            id="dl-what"
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
            A website and SEO platform with AI-powered content generation.
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
            DoctorLogic is a website and digital marketing platform for medical practices — not a specific specialty, but a wide range including cosmetic surgery, dermatology, orthopedics, primary care, and others. Their core product is an AI-powered content generation system that creates condition pages, procedure pages, and other SEO content automatically, combined with a templated website platform.
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
            The DoctorLogic model is designed for scale: a platform that can serve many practices across many specialties by automating the most labor-intensive parts of SEO content — writing, updating, and publishing medical information pages. Their websites are built on their own platform, and content is generated and managed through their system.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            Primara is a boutique agency with no software product and no automated content generation. We serve primary care and mental health practices exclusively — no cosmetic surgery, no orthopedics, no broad specialty coverage. Every page we write is written for a specific market, a specific competitor set, and a specific local search intent. That specificity is the product.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        aria-labelledby="dl-table"
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
            id="dl-table"
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
                  {["", "Primara", "DoctorLogic"].map((col, i) => (
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
                {tableRows.map(([criterion, primara, doctorlogic]) => (
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
                      {doctorlogic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Automation Problem */}
      <section
        aria-labelledby="dl-automation"
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
            The Automation Problem
          </div>
          <h2
            id="dl-automation"
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
            Why automated content doesn&rsquo;t win competitive local SEO.
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
            AI-generated content may satisfy Google&rsquo;s content quality threshold — that is, it may be unique enough not to be flagged as duplicate content and substantial enough not to be classified as thin content. But satisfying a quality threshold is not the same as producing the content signals that move local rankings in competitive urban markets.
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
            Local SEO in a competitive South Florida market requires knowing that Baptist Health acquired Boca Raton Regional Hospital and now competes directly with independent primary care practices in a specific geographic footprint. It requires knowing that Cleveland Clinic&rsquo;s Weston expansion changed the competitive landscape for practices in western Broward County. It requires knowing that the search landscape for primary care in Hialeah is defined by Cuban-American bilingual searches — and that a page written for that market should reflect the bilingual search intent that drives those clicks.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            None of that is produced by automated content generation. It requires someone who works this market specifically, monitors competitive movements as they happen, and writes for the actual search behavior of the people living in these neighborhoods — not for a generic medical practice audience. That&rsquo;s what Primara does. That&rsquo;s what DoctorLogic&rsquo;s platform cannot do at scale.
          </p>
        </div>
      </section>

      {/* Who each is right for */}
      <section
        aria-labelledby="dl-rightfor"
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
            id="dl-rightfor"
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
                DoctorLogic may work if:
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
                  "You need a broad specialty (cosmetic, ortho, derm) not served by Primara",
                  "Your market has low to moderate local search competition",
                  "You want AI-assisted content volume over market-specific depth",
                  "A platform product with account management fits your working style",
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
                  "You are a primary care or mental health practice",
                  "Your market has meaningful competition — Miami, Fort Lauderdale, Boca Raton, WPB",
                  "You want content written by people who know your market's competitive landscape",
                  "You want to rank above hospital-affiliated practices, not just appear in search",
                  "You want the founders managing your account end to end, not account coordinators",
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
            { href: "/services/local-seo-for-medical-practices", label: "Local SEO" },
            { href: "/services/medical-practice-website-design", label: "Website Design" },
            { href: "/vs/patientpop", label: "vs. PatientPop" },
            { href: "/vs/webpt", label: "vs. WebPT" },
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
      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Services"
        items={[
          { href: "/services/medical-practice-website-design", label: "Website Design", description: "Websites built around the local search terms that drive new patient bookings." },
          { href: "/services/seo", label: "SEO", description: "The full SEO service — technical, on-page, and content." },
          { href: "/services/google-business-profile", label: "Google Business Profile", description: "The highest-leverage lever for local visibility, done right." },
        ]}
      />
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
            See Your Market&rsquo;s Competitive Landscape — For Free
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            We research your specific market and competitors before recommending anything. The audit takes 3–5 business days.
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
