import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import { caseStudies, CASE_DATA_DATE } from "@/lib/case-studies";

const PAGE_URL = `${SITE_URL}/case-studies`;
const TITLE = "Case Studies: Real Client Numbers With Dates | Primara";
const DESC =
  "Three Primara client case studies with dated, sourced numbers: form requests, pages indexed, and Google reviews answered, including what has not moved yet.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESC, type: "website", url: PAGE_URL, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const headline: Record<string, { big: string; label: string }[]> = {
  "family-life-counseling-center": [
    { big: "190", label: "form requests, 2026-09-11 to 2026-10-08" },
    { big: "49 to 77", label: "pages Google reports indexed, 2026-09-08 to 2026-10-08" },
    { big: "191 of 191", label: "Google reviews answered, as of 2026-10-08" },
  ],
  "serenity-by-a-dr-sareen": [
    { big: "158 of 160", label: "pages confirmed indexed, 2026-10-08" },
    { big: "19", label: "form requests, 2026-09-11 to 2026-10-08" },
    { big: "263 of 265", label: "Google reviews answered, as of 2026-10-08" },
  ],
  "making-heaven-crowded": [
    { big: "6 to 31", label: "pages Google reports indexed, 2026-09-08 to 2026-10-08" },
    { big: "26 to 241", label: "search impressions, 28 days to 2026-09-08 vs 2026-10-08" },
    { big: "Early", label: "Google listing not yet verified; see the page" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: PAGE_URL },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Primara case studies",
  url: PAGE_URL,
  dateModified: CASE_DATA_DATE,
  publisher: { "@type": "Organization", name: "Primara", url: SITE_URL },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/case-studies/${c.slug}`,
      name: c.h1,
    })),
  },
};

export default function CaseStudiesHub() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(collectionSchema) }} />

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(40px, 7vw, 88px) 0 clamp(28px, 5vw, 56px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "20px" }}>
            Case studies, with the dates and the misses
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.7, maxWidth: "660px", marginBottom: "12px" }}>
            Three practices we work for, with numbers read from our own system on {CASE_DATA_DATE}. Each result shows its date range, and each page lists what has not moved yet.
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--smoke)", lineHeight: 1.7, maxWidth: "660px", margin: 0 }}>
            We count form requests, pages Google has indexed, and reviews answered. We do not count impressions, call taps or clicks as results, and we use no patient information.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(36px, 6vw, 72px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ display: "grid", gap: "20px" }}>
          {caseStudies.map((c) => (
            <article key={c.slug} style={{ border: "1px solid var(--wire)", borderRadius: "6px", padding: "clamp(20px, 3vw, 32px)", backgroundColor: "var(--void)" }}>
              <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.375rem, 2.6vw, 1.875rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "6px" }}>
                <Link href={`/case-studies/${c.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{c.name}</Link>
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "18px" }}>{c.kind}</p>
              <div style={{ display: "grid", gap: "14px", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", marginBottom: "18px" }}>
                {headline[c.slug].map((h) => (
                  <div key={h.label}>
                    <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.75rem", color: "var(--gold)", lineHeight: 1.1 }}>{h.big}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--ash)", lineHeight: 1.5, marginTop: "4px" }}>{h.label}</div>
                  </div>
                ))}
              </div>
              <Link href={`/case-studies/${c.slug}`} style={{ color: "var(--gold)", fontSize: "0.9375rem", fontWeight: 600 }}>
                Read the {c.shortName} case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-14 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Want numbers like these for your practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "1.75rem" }}>We start with a free audit, delivered in 3 to 5 business days.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none" }}>Call (561) 291-2681</a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none" }}>Get My Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
