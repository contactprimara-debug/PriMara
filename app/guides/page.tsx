import type { Metadata } from "next";
import Link from "next/link";
import { guides, guideCategories } from "@/lib/guides";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Practice Marketing Guides | Primara",
  description:
    "Straight answers on what medical marketing costs, which channel to fund, and how to rank a practice — written for independent practice owners.",
  alternates: { canonical: `${SITE_URL}/guides` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Practice Marketing Guides | Primara",
    description:
      "What it costs, which channel to fund, and how to rank a practice. No fluff, sources cited.",
    type: "website",
    url: `${SITE_URL}/guides`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const serif = "var(--font-fraunces), Georgia, serif";

export default function GuidesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/guides#page`,
        name: "Practice Marketing Guides",
        url: `${SITE_URL}/guides`,
        description:
          "Guides for independent practice owners on marketing cost, channel choice, Google Business Profile, compliant tracking, and ranking.",
        isPartOf: { "@type": "WebSite", name: "Primara", url: SITE_URL },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/guides#list`,
        itemListElement: guides.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.title,
          url: `${SITE_URL}/guides/${g.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        ],
      },
    ],
  };

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Guides</li>
        </ol>
      </nav>

      <header style={{ borderBottom: "1px solid var(--wire)", paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "820px" }}>
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
            <span aria-hidden="true" style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)" }} />
            Guides
          </div>
          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "var(--color-text)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Practice marketing guides
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, fontSize: "1.0625rem", margin: 0 }}>
            What things cost, which channel to fund first, and how the work is actually done — written for
            owners who would rather understand it than be sold it. Every guide answers the question in the
            first paragraph and cites its sources.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "900px" }}>
          {guideCategories.map((category) => {
            const inCategory = guides.filter((g) => g.category === category);
            if (inCategory.length === 0) return null;
            return (
              <div key={category} style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    marginBottom: "1rem",
                  }}
                >
                  {category}
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
                  {inCategory.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        style={{
                          display: "block",
                          border: "1px solid var(--wire)",
                          borderRadius: "8px",
                          padding: "18px 20px",
                          textDecoration: "none",
                          background: "var(--surface)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            fontFamily: serif,
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "var(--color-text)",
                            marginBottom: "6px",
                            lineHeight: 1.3,
                          }}
                        >
                          {g.title}
                        </span>
                        <span style={{ display: "block", color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                          {g.metaDescription}
                        </span>
                        <span
                          style={{
                            display: "block",
                            marginTop: "8px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            color: "var(--gold)",
                          }}
                        >
                          {g.readMinutes} min read
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

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
              Rather have us look at yours?
            </h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
              We audit your profile, your competitors, and your market, then tell you what it would take.
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
          </div>
        </div>
      </section>
    </main>
  );
}
