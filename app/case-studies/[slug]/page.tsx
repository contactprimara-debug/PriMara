import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import { caseStudies, caseBySlug } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseBySlug(params.slug);
  if (!c) return {};
  const url = `${SITE_URL}/case-studies/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: c.title, description: c.description, type: "article", url, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  };
}

const h2 = { fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "18px" } as const;
const eyebrow = { fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "14px" } as const;
const body = { fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "700px" } as const;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = caseBySlug(params.slug);
  if (!c) notFound();
  const url = `${SITE_URL}/case-studies/${c.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.h1,
    description: c.description,
    url,
    mainEntityOfPage: url,
    datePublished: c.dataDate,
    dateModified: c.dataDate,
    author: { "@type": "Organization", name: "Primara", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Primara", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/primara-logo-square.png` } },
    about: { "@type": "Organization", name: c.name, url: c.url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: c.name, item: url },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const others = caseStudies.filter((o) => o.slug !== c.slug);

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/case-studies" style={{ color: "var(--ash)", textDecoration: "none" }}>Case Studies</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>{c.shortName}</li>
          </ol>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(36px, 6vw, 80px) 0 clamp(28px, 5vw, 56px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4.6vw, 3.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "820px", marginBottom: "18px" }}>
            {c.h1}
          </h1>
          <p style={{ ...body, fontSize: "1.0625rem", marginBottom: "14px" }}>{c.summary}</p>
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "22px" }}>
            Client site:{" "}
            <a href={c.url} style={{ color: "var(--gold)" }}>{c.anchor}</a>
            . Numbers read from our Command Center on {c.dataDate}.
          </p>
          <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem", marginRight: "12px", marginBottom: "8px" }}>
            Call (561) 291-2681
          </a>
          <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem", marginBottom: "8px" }}>
            Get a Free Audit
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(36px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={eyebrow}>The numbers</p>
          <h2 style={h2}>What we measured, and when</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px", fontSize: "0.9375rem" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "var(--smoke)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <th style={{ padding: "10px 12px 10px 0", borderBottom: "1px solid var(--wire)" }}>Measure</th>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid var(--wire)" }}>Before</th>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid var(--wire)" }}>Now</th>
                  <th style={{ padding: "10px 0 10px 12px", borderBottom: "1px solid var(--wire)" }}>Date range</th>
                </tr>
              </thead>
              <tbody>
                {c.results.map((r) => (
                  <tr key={r.metric} style={{ verticalAlign: "top" }}>
                    <td style={{ padding: "14px 12px 14px 0", borderBottom: "1px solid var(--wire)", color: "var(--chalk)" }}>
                      {r.metric}
                      {r.note && <div style={{ fontSize: "0.8125rem", color: "var(--smoke)", marginTop: "4px", lineHeight: 1.5 }}>{r.note}</div>}
                    </td>
                    <td style={{ padding: "14px 12px", borderBottom: "1px solid var(--wire)", color: "var(--ash)" }}>{r.before ?? "n/a"}</td>
                    <td style={{ padding: "14px 12px", borderBottom: "1px solid var(--wire)", color: "var(--gold)", fontWeight: 600 }}>{r.now}</td>
                    <td style={{ padding: "14px 0 14px 12px", borderBottom: "1px solid var(--wire)", color: "var(--ash)", fontSize: "0.875rem" }}>{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(36px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={eyebrow}>The client</p>
          <h2 style={h2}>Who they are</h2>
          {c.context.map((t) => (
            <p key={t} style={{ ...body, marginBottom: "16px" }}>{t}</p>
          ))}
          <p style={{ ...body, margin: 0 }}>
            You can visit them at{" "}
            <a href={c.url} style={{ color: "var(--gold)" }}>{c.anchor}</a>.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(36px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={eyebrow}>What we did</p>
          <h2 style={h2}>The work behind the numbers</h2>
          <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {c.did.map((d) => (
              <div key={d.title} style={{ border: "1px solid var(--wire)", borderRadius: "6px", padding: "20px", backgroundColor: "var(--void)" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.1875rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "10px", lineHeight: 1.3 }}>{d.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7, margin: 0 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(36px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={eyebrow}>The honest part</p>
          <h2 style={h2}>What has not moved yet</h2>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", maxWidth: "700px" }}>
            {c.notYet.map((t) => (
              <li key={t} style={{ ...body, marginBottom: "12px" }}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(36px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={eyebrow}>Questions</p>
          <div style={{ maxWidth: "720px" }}>
            {c.faqs.map((f) => (
              <div key={f.q} style={{ borderTop: "1px solid var(--wire)", padding: "20px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "10px", lineHeight: 1.3 }}>{f.q}</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
          <p style={{ ...body, marginTop: "24px", fontSize: "0.9375rem" }}>
            More examples: {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && " and "}
                <Link href={`/case-studies/${o.slug}`} style={{ color: "var(--gold)" }}>{o.shortName}</Link>
              </span>
            ))}
            . All of them are on the <Link href="/case-studies" style={{ color: "var(--gold)" }}>case studies page</Link>.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-14 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            See where your practice stands
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "1.75rem" }}>We start with a free audit of your Google presence, delivered in 3 to 5 business days.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none" }}>Call (561) 291-2681</a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none" }}>Get My Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
