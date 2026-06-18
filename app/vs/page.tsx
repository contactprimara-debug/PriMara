import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primara vs. Healthcare Marketing Platforms — Honest Comparisons | Primara",
  description:
    "Transparent comparisons between Primara and PatientPop, WebPT, and DoctorLogic — helping independent practices make informed decisions about their marketing.",
  alternates: { canonical: "https://primara365.com/vs" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Primara vs. Healthcare Marketing Platforms — Honest Comparisons | Primara",
    description:
      "Transparent comparisons between Primara and PatientPop, WebPT, and DoctorLogic — helping independent practices make informed decisions about their marketing.",
    type: "website",
    url: "https://primara365.com/vs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Primara vs. Healthcare Marketing Platforms",
  url: "https://primara365.com/vs",
  description:
    "Transparent comparisons between Primara and major healthcare marketing platforms to help independent practices make informed decisions.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://primara365.com/vs" },
    ],
  },
};

const comparisons = [
  {
    href: "/vs/patientpop",
    name: "Primara vs. PatientPop",
    description:
      "PatientPop is a software platform with templated websites and automated review features. We compare pricing model, website quality, who actually does the work, and local SEO depth — honestly.",
    tag: "Most Common Comparison",
    tagGold: true,
  },
  {
    href: "/vs/webpt",
    name: "Primara vs. WebPT",
    description:
      "WebPT is primarily a physical therapy EHR platform. If you're a primary care or mental health practice using WebPT for billing and evaluating their marketing add-on, here's what you need to know.",
    tag: "EHR Marketing Add-On",
    tagGold: false,
  },
  {
    href: "/vs/doctorlogic",
    name: "Primara vs. DoctorLogic",
    description:
      "DoctorLogic offers AI-powered content and templated websites for medical practices. We compare their automated content approach against locally targeted, competitive-intelligence-driven SEO.",
    tag: "AI Platform Comparison",
    tagGold: false,
  },
];

export default function VsIndexPage() {
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>Comparisons</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="vs-h1"
        style={{
          padding: "clamp(48px, 7vw, 100px) clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <h1
            id="vs-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(20px, 3vw, 32px)",
            }}
          >
            How Primara compares.
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.8,
              color: "var(--ash)",
              maxWidth: "58ch",
              marginBottom: "20px",
            }}
          >
            Independent practices evaluating their marketing options deserve an honest look at what&rsquo;s actually different between a boutique agency and a software platform with marketing features. We publish these comparisons because we believe the differences are real and consequential — and because practices that choose us after reading them are choosing us for the right reasons.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.8,
              color: "var(--ash)",
              maxWidth: "58ch",
            }}
          >
            These comparisons are not marketing documents. Each one includes an honest assessment of who the competing platform is right for — because some practices genuinely don&rsquo;t need what Primara offers.
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section
        aria-labelledby="vs-cards"
        style={{
          padding: "0 clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
          borderTop: "1px solid var(--wire)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            paddingTop: "clamp(40px, 6vw, 64px)",
          }}
        >
          {comparisons.map(({ href, name, description, tag, tagGold }) => (
            <Link
              key={href}
              href={href}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  padding: "36px",
                  border: tagGold ? "1px solid var(--gold)" : "1px solid var(--wire)",
                  borderRadius: "4px",
                  backgroundColor: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  height: "100%",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: tagGold ? "var(--gold)" : "var(--smoke)",
                    border: `1px solid ${tagGold ? "var(--gold)" : "var(--wire)"}`,
                    padding: "3px 8px",
                    borderRadius: "2px",
                    width: "fit-content",
                  }}
                >
                  {tag}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {name}
                </h2>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--ash)",
                    margin: 0,
                  }}
                >
                  {description}
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                    color: tagGold ? "var(--gold)" : "var(--ash)",
                  }}
                >
                  Read the comparison →
                </div>
              </article>
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
            Not Sure What You Need? Start With a Free Audit.
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            We&rsquo;ll assess your online presence and tell you honestly whether Primara is the right fit — or whether a platform solution might serve you better.
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
