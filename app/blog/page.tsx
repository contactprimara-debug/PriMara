import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Healthcare Marketing Blog — Tips for Independent Practices in Florida | Primara",
  description:
    "Practical healthcare marketing advice for independent primary care and mental health practices in Florida. GBP, local SEO, reviews, and more.",
  alternates: { canonical: "https://primara365.com/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Blog — Tips for Independent Practices in Florida | Primara",
    description:
      "Practical healthcare marketing advice for independent primary care and mental health practices in Florida. GBP, local SEO, reviews, and more.",
    type: "website",
    url: "https://primara365.com/blog",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Primara Healthcare Marketing Blog",
  url: "https://primara365.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Primara",
    url: "https://primara365.com",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          }}
        >
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>
            Blog
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        style={{
          borderBottom: "1px solid var(--wire)",
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          {/* Section label */}
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
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
            Insights &amp; Guides
          </div>

          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "2rem",
              maxWidth: "800px",
            }}
          >
            Healthcare Marketing Insights for Independent Practices in Florida
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontSize: "1.0625rem",
              maxWidth: "680px",
            }}
          >
            Independent primary care physicians and private practice therapists in Florida face a
            specific set of marketing challenges — hospital system competition, Google Maps ranking
            complexity, HIPAA constraints on review generation, and the slow compounding timeline of
            local SEO. Every post on this blog is written to address those challenges directly, with
            specific numbers and actionable steps rather than generic advice.
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontSize: "1.0625rem",
              maxWidth: "680px",
            }}
          >
            Liam Costello and Gio LaRoche, the founders of Primara, write from the field. We
            manage Google Business Profiles, local SEO campaigns, and online reputation for
            independent practices across West Palm Beach, Fort Lauderdale, Boca Raton, and Miami.
            The benchmarks, timelines, and tactics we publish here reflect what we observe in live
            campaigns — not recycled industry generalities.
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: 0,
              fontSize: "1.0625rem",
              maxWidth: "680px",
            }}
          >
            If you want to apply what you read here to your own practice, our{" "}
            <Link
              href="/the-audit"
              style={{ color: "var(--gold)", textDecoration: "underline" }}
            >
              free online presence audit
            </Link>{" "}
            is a good starting point — it maps your current Google Maps rank position, GBP
            configuration gaps, and review velocity relative to your top three competitors.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ paddingTop: "clamp(48px, 6vw, 72px)", paddingBottom: "clamp(64px, 8vw, 96px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "6px",
                  padding: "clamp(24px, 3vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--smoke)",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{post.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                    color: "var(--color-text)",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    color: "var(--ash)",
                    lineHeight: 1.7,
                    fontSize: "0.9375rem",
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* CTA link */}
                <div style={{ marginTop: "4px" }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: "var(--gold)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    className="hover:underline"
                  >
                    Read Post →
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Get a free audit of your online presence — delivered in 3–5 business days.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+15612912681"
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
        </div>
      </section>
    </main>
  );
}
