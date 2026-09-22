import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { guides, getGuide } from "@/lib/guides";
import type { Guide, GuideSection } from "@/lib/guides";
import { SITE_URL, localBusinessSchema } from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      url,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

// ── Schema graph: Article (or HowTo) + FAQPage + BreadcrumbList + Organization
function buildSchema(guide: Guide) {
  const url = `${SITE_URL}/guides/${guide.slug}`;

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    about: guide.keyword,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: guide.publishDate,
    dateModified: `${guide.dateModified}T00:00:00Z`,
    author: {
      "@type": "Person",
      name: guide.author,
      worksFor: { "@type": "Organization", name: "Primara", url: SITE_URL },
    },
    publisher: {
      "@type": "Organization",
      name: "Primara",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/primara-logo-square.png`,
      },
    },
    citation: guide.citations.map((c) => ({
      "@type": "CreativeWork",
      name: c.label,
      publisher: { "@type": "Organization", name: c.publisher },
      url: c.href,
    })),
  };

  const graph: Record<string, unknown>[] = [
    article,
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
    // Organization entity — same business facts as the sitewide LocalBusiness,
    // repeated here so the page's graph stands alone for answer engines.
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}#organization`,
      name: "Primara",
      url: SITE_URL,
      logo: `${SITE_URL}/primara-logo-square.png`,
      telephone: localBusinessSchema.telephone,
      email: localBusinessSchema.email,
      address: localBusinessSchema.address,
      knowsAbout: localBusinessSchema.knowsAbout,
      sameAs: ORGANIZATION_SAME_AS,
    },
    // Service the guide is about — lets an answer engine connect the topic to
    // something we actually sell, rather than inferring it from prose.
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: guide.keyword,
      serviceType: guide.keyword,
      category: guide.category,
      description: guide.answer,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: [
        { "@type": "State", name: "Florida" },
        { "@type": "Country", name: "United States" },
      ],
    },
    // WebPage node — declares what this URL is about and what it mentions, so
    // the page's entities are stated rather than guessed at.
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: guide.metaTitle,
      description: guide.metaDescription,
      inLanguage: "en-US",
      datePublished: guide.publishDate,
      dateModified: `${guide.dateModified}T00:00:00Z`,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, url: SITE_URL, name: "Primara" },
      about: {
        "@type": "Thing",
        name: guide.keyword,
        description: guide.answer,
      },
      mentions: [
        { "@id": `${SITE_URL}#organization` },
        { "@id": `${url}#service` },
        ...guide.sections
          .filter((s) => s.type === "h2" && s.text)
          .map((s) => ({ "@type": "Thing", name: s.text as string })),
      ],
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` },
      breadcrumb: { "@id": `${url}#breadcrumbs` },
      mainEntity: { "@id": `${url}#faq` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[data-answer-box]"],
      },
    },
  ];

  if (guide.howTo) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: guide.howTo.name,
      description: guide.answer,
      step: guide.howTo.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${url}#step-${i + 1}`,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// Public profiles for the Primara entity. Keep in sync with app/page.tsx.
// Only URLs we have actually verified go here — no guessed Maps/CID links.
const ORGANIZATION_SAME_AS = [
  "https://www.linkedin.com/company/primara",
];

const serif = "var(--font-fraunces), Georgia, serif";

function Section({ section }: { section: GuideSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          style={{
            fontFamily: serif,
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "var(--color-text)",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: "2.5rem 0 1rem",
          }}
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{
            fontFamily: serif,
            fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
            color: "var(--color-text)",
            fontWeight: 700,
            lineHeight: 1.25,
            margin: "2rem 0 0.75rem",
          }}
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p
          style={{
            color: "var(--color-text-muted)",
            lineHeight: 1.8,
            fontSize: "1.0625rem",
            marginBottom: "1.25rem",
          }}
        >
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "10px" }}>
          {section.items?.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "1.0625rem" }}>
              <span
                aria-hidden="true"
                style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "0.55em" }}
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ margin: "0 0 1.5rem", padding: 0, listStyle: "none", counterReset: "step", display: "flex", flexDirection: "column", gap: "12px" }}>
          {section.items?.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "14px", color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "1.0625rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  minWidth: "26px",
                  height: "26px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "0.15em",
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div style={{ overflowX: "auto", margin: "0 0 1.75rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem", minWidth: "520px" }}>
            <thead>
              <tr>
                {section.headers?.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderBottom: "1px solid var(--wire)",
                      color: "var(--chalk)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      borderBottom: "1px solid var(--wire)",
                      color: "var(--chalk)",
                      fontWeight: 600,
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row[0]}
                  </th>
                  <td style={{ padding: "12px", borderBottom: "1px solid var(--wire)", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <aside
          style={{
            borderLeft: "3px solid var(--gold)",
            background: "var(--surface-2)",
            borderRadius: "0 6px 6px 0",
            padding: "1.25rem 1.5rem",
            margin: "2rem 0",
            color: "var(--chalk)",
            lineHeight: 1.75,
            fontSize: "1.0625rem",
          }}
        >
          {section.text}
        </aside>
      );
    default:
      return null;
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const schema = buildSchema(guide);

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/guides" className="hover:underline">Guides</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>{guide.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <header style={{ borderBottom: "1px solid var(--wire)", paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "780px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span aria-hidden="true" style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            {guide.category} Guide
          </div>

          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "var(--color-text)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            {guide.title}
          </h1>

          {/* Answer box — first 40–60 words, plain language (AEO) */}
          <div
            style={{
              border: "1px solid var(--wire)",
              borderLeft: "3px solid var(--gold)",
              background: "var(--surface)",
              borderRadius: "0 8px 8px 0",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
            data-answer-box=""
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                margin: "0 0 0.6rem",
              }}
            >
              Short answer
            </p>
            <p style={{ color: "var(--chalk)", lineHeight: 1.75, fontSize: "1.0625rem", margin: 0 }}>{guide.answer}</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--smoke)",
            }}
          >
            <span>By <span style={{ color: "var(--ash)" }}>{guide.author}</span></span>
            <span aria-hidden="true">·</span>
            <span>Updated <time dateTime={guide.dateModified} style={{ color: "var(--ash)" }}>{guide.dateModified}</time></span>
            <span aria-hidden="true">·</span>
            <span>{guide.readMinutes} min read</span>
          </div>
        </div>
      </header>

      <article style={{ paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "780px" }}>
          {guide.sections.map((s, i) => (
            <Section key={i} section={s} />
          ))}

          {/* Steps (HowTo) */}
          {guide.howTo && (
            <>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--color-text)", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
                {guide.howTo.name}
              </h2>
              <ol style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "18px" }}>
                {guide.howTo.steps.map((step, i) => (
                  <li key={i} id={`step-${i + 1}`} style={{ borderLeft: "1px solid var(--wire)", paddingLeft: "18px" }}>
                    <h3
                      style={{
                        fontFamily: serif,
                        fontSize: "1.15rem",
                        color: "var(--color-text)",
                        fontWeight: 700,
                        margin: "0 0 0.4rem",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--gold)", marginRight: "10px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.name}
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, fontSize: "1.0625rem", margin: 0 }}>{step.text}</p>
                  </li>
                ))}
              </ol>
            </>
          )}

          {/* FAQ */}
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--color-text)", fontWeight: 700, margin: "2.75rem 0 1rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "2.5rem" }}>
            {guide.faqs.map((faq, i) => (
              <div key={i} style={{ border: "1px solid var(--wire)", borderRadius: "8px", padding: "1.15rem 1.35rem", background: "var(--surface)" }}>
                <h3 style={{ fontFamily: serif, fontSize: "1.1rem", color: "var(--color-text)", fontWeight: 700, margin: "0 0 0.55rem" }}>{faq.q}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, fontSize: "1.0125rem", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Sources */}
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 2vw, 1.6rem)", color: "var(--color-text)", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
            Sources
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {guide.citations.map((c, i) => (
              <li key={i} style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                <span style={{ color: "var(--smoke)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>{c.publisher}</span>
                {" — "}
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold)", textDecoration: "underline" }}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Internal links */}
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 2vw, 1.6rem)", color: "var(--color-text)", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
            Keep reading
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "grid", gap: "12px" }}>
            {guide.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    display: "block",
                    border: "1px solid var(--wire)",
                    borderRadius: "8px",
                    padding: "14px 16px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ display: "block", color: "var(--gold)", fontWeight: 600, marginBottom: "4px" }}>{l.label}</span>
                  <span style={{ display: "block", color: "var(--color-text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>{l.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            style={{
              border: "1px solid var(--wire)",
              borderRadius: "10px",
              padding: "1.75rem",
              background: "var(--surface-2)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontFamily: serif, fontSize: "1.5rem", color: "var(--color-text)", fontWeight: 700, margin: "0 0 0.6rem" }}>
              Want this done for your practice?
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
              We audit your profile, your competitors, and your market first — then tell you what it would take. No obligation.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "#0A0A0A",
                fontWeight: 700,
                padding: "13px 26px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Get a free audit
            </Link>
            <p style={{ color: "var(--smoke)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", marginTop: "1rem", marginBottom: 0 }}>
              or call{" "}
              <a href="tel:+15612912681" style={{ color: "var(--ash)" }}>
                (561) 291-2681
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
