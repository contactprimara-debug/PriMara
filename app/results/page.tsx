import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results for Independent Medical Practices in Florida | Primara",
  description:
    "See what independent primary care and mental health practices achieve with Primara — GBP rankings, review velocity, new patient growth in 90-180 days.",
  alternates: { canonical: "https://primara365.com/results" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Results for Independent Medical Practices in Florida | Primara",
    description:
      "See what independent primary care and mental health practices achieve with Primara — GBP rankings, review velocity, new patient growth in 90-180 days.",
    type: "website",
    url: "https://primara365.com/results",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primara365.com" },
    { "@type": "ListItem", "position": 2, "name": "Results", "item": "https://primara365.com/results" },
  ],
};

interface Milestone {
  period: string;
  heading: string;
  items: string[];
}

const milestones: Milestone[] = [
  {
    period: "30 Days",
    heading: "Foundation Is Live",
    items: [
      "GBP fully configured: 8–10 categories, 30+ patient-search-language services, all attributes set, photos uploaded.",
      "12-month posting calendar loaded via BrightLocal — weekly GBP posts publishing automatically from day one.",
      "Review generation system installed: NFC tap cards placed at checkout, waiting room, and exam rooms; QR codes on discharge paperwork.",
      "Local Falcon baseline grid completed — your starting rank position documented across a 7x7 geographic grid for your primary keyword.",
      "First monthly baseline report delivered: GBP completeness score, Maps position, review gap vs. named competitor, mobile speed score.",
    ],
  },
  {
    period: "60 Days",
    heading: "First Data Arrives",
    items: [
      "GBP impressions graph shows a measurable trend — the volume of searches in which your profile appeared, tracked week over week.",
      "Review velocity is established: most practices see 3–8 new Google reviews in the first 60 days as the tap card and QR system activates patient behavior.",
      "First rank movement typically visible on secondary keywords (condition-specific or neighborhood-specific searches) where competition is lower.",
      "Local Falcon comparison: 60-day grid overlaid on baseline — green cells show rank improvement, red cells show where work remains.",
      "NAP consistency confirmed across Google, Healthgrades, Zocdoc, and WebMD — conflicting signals corrected where found.",
    ],
  },
  {
    period: "90 Days",
    heading: "Measurable Momentum",
    items: [
      "Secondary keyword movement documented: practices entering moderately competitive markets typically see 2–6 rank position improvements on secondary terms.",
      "First competitive analysis vs. your named local competitor: side-by-side GBP completeness, review count, review velocity, and estimated Maps position.",
      "Review count gap closing: practices starting below 20 Google reviews typically reach 20–30 by the 90-day mark with consistent tap card usage.",
      "First call volume attribution attempt: GBP call tracking data and Google Search Console impressions begin showing whether ranking improvements are driving real patient inquiries.",
      "Primary keyword movement on low-competition markets may begin; highly competitive markets (Miami, Fort Lauderdale top terms) require additional months.",
    ],
  },
  {
    period: "180 Days",
    heading: "Compounding Results",
    items: [
      "Local Falcon grid at 180 days shows the clearest picture: practices in mid-competition markets typically show 3–8 rank position improvements on primary keywords; practices in lower-competition markets often reach the Local 3-Pack.",
      "GBP impression counts at 180 days are typically 40–120% higher than baseline — reflecting the compounding effect of review velocity, consistent posting, and profile completeness.",
      "Review velocity benchmark: practices maintaining 2–4 new reviews per month consistently outrank practices with higher total review counts but stagnant acquisition.",
      "Patient inquiry volume from GBP: the \"Calls\" metric in GBP Insights provides a direct count of calls initiated from your Maps listing — most practices see this number grow 20–60% between the 90-day and 180-day marks.",
      "Website organic traffic (Visibility Package clients): city- and condition-specific pages begin appearing in Google Search Console impressions data, with top-performing pages generating 50–200 monthly impressions on targeted local searches.",
    ],
  },
];

export default function ResultsPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ padding: "12px 24px" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8125rem", color: "var(--smoke)" }}>
              <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--chalk)" }}>Results</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem", maxWidth: "760px" }}>
            What Independent Practices Achieve With Primara
          </h1>

          <div style={{ maxWidth: "680px" }}>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              We don&apos;t promise specific numbers because every market is different. The review count threshold that defines the top of Miami&apos;s local pack is not the same as the one in Palm Beach Gardens. The time required to move from outside the local 3-Pack to inside it varies based on your starting review velocity, your competitor&apos;s GBP configuration, your website authority, and the volume of search traffic in your market. Anyone who promises you a specific rank position on a specific date is selling a guarantee they can&apos;t deliver.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8 }}>
              What we can tell you is what the consistent patterns look like across every engagement we run — what happens at 30 days, 60 days, 90 days, and 180 days for practices that follow the system. These timelines are grounded in real client data tracked via Local Falcon grid rankings, GBP Insights impression counts, review velocity numbers, and Google Search Console organic traffic. The milestones below are what you should hold us accountable to.
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Sections */}
      {milestones.map((milestone, idx) => (
        <section
          key={milestone.period}
          style={{
            backgroundColor: idx % 2 === 0 ? "var(--surface)" : "var(--void)",
            borderTop: "1px solid var(--wire)",
            padding: "clamp(40px, 6vw, 80px) 0",
          }}
        >
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ember)", fontWeight: 700 }}>
                {milestone.period}
              </span>
              <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
                {milestone.heading}
              </h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", maxWidth: "720px" }}>
              {milestone.items.map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.875rem" }}>▸</span>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--void)", borderTop: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 56px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
            Learn more about Primara
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/the-audit", label: "Get a Free Audit" },
              { href: "/primary-care", label: "Primary Care Marketing" },
              { href: "/mental-health", label: "Mental Health Marketing" },
              { href: "/services", label: "Our Services" },
              { href: "/faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: "0.875rem", color: "var(--ash)", border: "1px solid var(--wire)", borderRadius: "4px", padding: "6px 14px", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Get a free audit of your online presence — delivered in 3–5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
