import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import { caseStudies, CASE_DATA_DATE } from "@/lib/case-studies";
import FaqSection from "@/components/FaqSection";

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

const faqs = [
  {
    q: "Why do your case studies show dates on every number?",
    a: "A number without a date range cannot be checked. Each result shows the days it covers so a practice can read the same figure from its own Google Search Console, Google Analytics or review inbox and see whether it matches.",
  },
  {
    q: "Why do you count form requests but not impressions or clicks?",
    a: "Impressions and clicks show that a page was seen, not that a person asked for an appointment. A form request is a person reaching out, so it is the closest measure we have to a patient inquiry. We report calls separately and never add them to form requests.",
  },
  {
    q: "Do you promise a practice will see the same results?",
    a: "No. Every practice starts from a different site, a different city and a different amount of competition. These pages show what happened for three practices over a stated period, including what has not moved yet. They are not a forecast for anyone else.",
  },
  {
    q: "Do the case studies include patient information?",
    a: "No. We use no patient names, no case details and no clinical outcomes. The numbers are counts of requests, indexed pages and answered reviews, taken from our own records and from Google.",
  },
  {
    q: "What happens in the free audit?",
    a: "We review the practice's Google Business Profile, website, tracking and reviews, then send a written report in 3 to 5 business days. You decide afterwards whether you want help with any of it.",
  },
];

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

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(36px, 6vw, 72px) 0", borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "820px" }}>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "16px" }}>
            How to read these numbers
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "16px" }}>
            Each case study follows the same order. It says who the practice is using public facts only, lists what we did, shows the results with their dates, and ends with a short list of what has not moved. The last part matters most to us, because a page that only lists wins is hard to trust.
          </p>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "16px" }}>
            Search results take time. A new page often needs weeks before Google reads it, and longer before it earns visits. For that reason we show the start and end of the period, so a reader can see how long a change took and whether it has finished.
          </p>
          <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--chalk)", margin: "28px 0 12px" }}>
            What we count
          </h3>
          <ul style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, paddingLeft: "1.25rem", margin: "0 0 16px" }}>
            <li>Form requests: a person filled in the contact form on the practice website.</li>
            <li>Pages Google reports as indexed: pages that Google has read and can show in results.</li>
            <li>Reviews answered: Google reviews that now carry a reply from the practice.</li>
          </ul>
          <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--chalk)", margin: "28px 0 12px" }}>
            What we do not count as a result
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "16px" }}>
            We do not present impressions, clicks or call taps as results. They are useful signals, and we watch them, but they do not tell you whether a person asked for care. We also do not claim a ranking position as a win unless it is tied to something a practice can measure for itself.
          </p>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "16px" }}>
            If you want the method behind a number, ask. Every figure on these pages was read from a named source on the date shown, and we keep the source list so a figure can be checked again.
          </p>
          <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--chalk)", margin: "28px 0 12px" }}>
            Where to go next
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "16px" }}>
            If you run a therapy or counseling practice, our <Link href="/therapist-seo" style={{ color: "var(--gold)" }}>therapist SEO service</Link> page explains what we would do first. If you run a primary care or family medicine office, see our <Link href="/primary-care" style={{ color: "var(--gold)" }}>primary care marketing</Link> page. For a plain explanation of how to judge any marketing report, read our guide on <Link href="/guides/how-to-measure-roi-on-medical-practice-marketing" style={{ color: "var(--gold)" }}>measuring ROI on medical practice marketing</Link>.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} />

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
