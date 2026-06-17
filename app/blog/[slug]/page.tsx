import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import type { BlogSection } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://primara365.com/blog/${post.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url: `https://primara365.com/blog/${post.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Replace plain-text mentions of Primara service pages with <Link> elements.
 *  Returns a React node — either a plain string or an array of strings/links. */
function linkifyText(text: string): React.ReactNode {
  const replacements: Array<{ pattern: RegExp; href: string; label?: string }> = [
    {
      pattern: /Google Business Profile optimization(?: service)?/gi,
      href: "/services/google-business-profile",
    },
    {
      pattern: /local SEO for (?:medical practices|doctors)/gi,
      href: "/services/local-seo-for-medical-practices",
    },
    {
      pattern: /online reputation management(?: service)?/gi,
      href: "/services/online-reputation-management",
    },
    {
      pattern: /free (?:online presence |)audit/gi,
      href: "/the-audit",
    },
    {
      pattern: /primary care(?: practice)? marketing/gi,
      href: "/primary-care",
    },
    {
      pattern: /mental health(?: practice)? marketing/gi,
      href: "/mental-health",
    },
  ];

  // Build segments by progressively splitting on each pattern
  type Segment = { text: string; href?: string };
  let segments: Segment[] = [{ text }];

  for (const { pattern, href } of replacements) {
    const next: Segment[] = [];
    for (const seg of segments) {
      if (seg.href) {
        // Already a link — don't re-process
        next.push(seg);
        continue;
      }
      const parts = seg.text.split(pattern);
      const matches = seg.text.match(pattern) ?? [];
      parts.forEach((part, i) => {
        if (part) next.push({ text: part });
        if (i < matches.length) next.push({ text: matches[i], href });
      });
    }
    segments = next;
  }

  if (segments.length === 1 && !segments[0].href) {
    return segments[0].text;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.href ? (
          <Link
            key={i}
            href={seg.href}
            style={{ color: "var(--gold)", textDecoration: "underline" }}
          >
            {seg.text}
          </Link>
        ) : (
          seg.text
        )
      )}
    </>
  );
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "var(--color-text)",
            fontWeight: 700,
            marginBottom: "1rem",
            marginTop: "2.5rem",
            lineHeight: 1.2,
          }}
        >
          {section.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
            color: "var(--color-text)",
            fontWeight: 700,
            marginBottom: "0.75rem",
            marginTop: "2rem",
            lineHeight: 1.25,
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
            marginBottom: "1.25rem",
            fontSize: "1.0625rem",
          }}
        >
          {section.text ? linkifyText(section.text) : null}
        </p>
      );

    case "ul":
      return (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {section.items?.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                fontSize: "1.0625rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  flexShrink: 0,
                  marginTop: "0.55em",
                }}
                aria-hidden="true"
              />
              {linkifyText(item)}
            </li>
          ))}
        </ul>
      );

    case "blockquote":
      return (
        <blockquote
          style={{
            borderLeft: "3px solid var(--gold)",
            paddingLeft: "1.5rem",
            margin: "2rem 0",
            backgroundColor: "var(--surface-2)",
            borderRadius: "0 6px 6px 0",
            padding: "1.25rem 1.5rem",
          }}
        >
          <p
            style={{
              color: "var(--chalk)",
              lineHeight: 1.75,
              fontSize: "1.0625rem",
              fontStyle: "italic",
              margin: 0,
              marginBottom: section.cite ? "0.75rem" : 0,
            }}
          >
            {section.text}
          </p>
          {section.cite && (
            <cite
              style={{
                display: "block",
                color: "var(--smoke)",
                fontSize: "0.8rem",
                fontStyle: "normal",
                fontFamily: "var(--font-mono)",
              }}
            >
              — {section.cite}
            </cite>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author,
      worksFor: { "@type": "Organization", name: "Primara" },
    },
    publisher: {
      "@type": "Organization",
      name: "Primara",
      url: "https://primara365.com",
    },
    datePublished: post.publishDate,
    url: `https://primara365.com/blog/${post.slug}`,
  };

  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Post header */}
      <header
        style={{
          borderBottom: "1px solid var(--wire)",
          paddingTop: "clamp(40px, 5vw, 64px)",
          paddingBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "780px" }}>
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
            Healthcare Marketing
          </div>

          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          {/* Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--smoke)",
            }}
          >
            <span>
              By{" "}
              <span style={{ color: "var(--ash)" }}>{post.author}</span>
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishDate} style={{ color: "var(--ash)" }}>
              {formatDate(post.publishDate)}
            </time>
          </div>
        </div>
      </header>

      {/* Post body */}
      <article style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
        <div
          className="mx-auto max-w-content px-6 lg:px-8"
          style={{ maxWidth: "780px" }}
        >
          {post.sections.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}

          {/* Back link */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--wire)" }}>
            <Link
              href="/blog"
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
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

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
        </div>
      </section>
    </main>
  );
}
