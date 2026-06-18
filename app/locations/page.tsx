import type { Metadata } from "next";
import Link from "next/link";
import { primaryCareLocations } from "@/lib/locations-primary";
import { mentalHealthLocations } from "@/lib/locations-mental";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency Serving South Florida | Primara",
  description:
    "Primara serves independent primary care and mental health practices across South Florida — Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and more.",
  alternates: { canonical: "https://primara365.com/locations" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Agency Serving South Florida | Primara",
    description:
      "Primara serves independent primary care and mental health practices across South Florida — Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and more.",
    type: "website",
    url: "https://primara365.com/locations",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Primara",
  "url": "https://primara365.com",
  "telephone": "+15612912681",
  "areaServed": [
    { "@type": "City", "name": "Miami", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Fort Lauderdale", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Boca Raton", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "West Palm Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Palm Beach Gardens", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Delray Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Boynton Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Pompano Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Coral Springs", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Jupiter", "containedInPlace": { "@type": "State", "name": "Florida" } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primara365.com" },
    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://primara365.com/locations" },
  ],
};

export default function LocationsPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ padding: "12px 24px" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8125rem", color: "var(--smoke)" }}>
              <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--chalk)" }}>Locations</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            South Florida — Miami-Dade · Broward · Palm Beach
          </p>
          <h1 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem", maxWidth: "820px" }}>
            Serving Independent Practices Across South Florida
          </h1>

          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              South Florida is one of the most competitive healthcare markets in the United States. From Miami-Dade to Palm Beach County, independent physicians and mental health practitioners compete daily against hospital systems with nine-figure marketing budgets, urgent care chains opening on every corridor, and aggregator platforms that have turned patient acquisition into a pay-to-play environment. Local search visibility — specifically, what appears when a patient searches "primary care doctor near me" or "therapist West Palm Beach" — is no longer a nice-to-have for an independent practice. It is the primary driver of new patient volume.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Primara operates exclusively in South Florida because local search dominance requires deep market knowledge, not a templated playbook. The search landscape in Boca Raton is different from the one in Fort Lauderdale's Flagler Village. The review velocity benchmarks for the Miami local pack are different from those in Palm Beach Gardens. The hospital systems competing against an independent internist in Pompano Beach are different from the ones in Coral Springs, four miles away. We know these markets the way a practice owner knows their patient population — with the granular, neighborhood-level fluency that produces rankings instead of reports.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              We serve two verticals across every South Florida market: independent primary care practices — family medicine, internal medicine, geriatrics, and related primary care specialties — and independent mental health practices, from solo therapists and LMHCs to psychologists and small group practices. Both verticals face the same fundamental challenge: their best potential patients are searching Google right now, and those patients are finding a hospital-employed provider or a chain-owned clinic before they ever see the independent practitioner who could serve them better.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The pages below are organized by market. Each city page contains specific intelligence about the competitive landscape in that area — which hospital systems are competing against independent physicians, what the Psychology Today saturation looks like for therapists, what patients in that city actually search for, and what review count and velocity benchmarks define the local search leaderboard. Select your city to see how Primara approaches your specific market.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Care Markets */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>
              Primary Care
            </p>
            <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "8px" }}>
              Primary Care Markets
            </h2>
            <p style={{ color: "var(--ash)", fontSize: "1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              For independent family medicine, internal medicine, and primary care physicians competing against hospital-owned clinics and corporate urgent care chains.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {primaryCareLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                style={{
                  display: "block",
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "6px",
                  padding: "24px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "1.25rem", color: "var(--chalk)", marginBottom: "8px" }}>
                  {loc.city}, FL
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.6 }}>
                  {loc.intro.slice(0, 120)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Markets */}
      <section style={{ backgroundColor: "var(--void)", borderTop: "1px solid var(--wire)", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal)", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>
              Mental Health
            </p>
            <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "8px" }}>
              Mental Health Markets
            </h2>
            <p style={{ color: "var(--ash)", fontSize: "1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              For independent therapists, psychologists, LMHCs, and small group mental health practices competing against Psychology Today saturation and insurance panel directories.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {mentalHealthLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                style={{
                  display: "block",
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "6px",
                  padding: "24px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "1.25rem", color: "var(--chalk)", marginBottom: "8px" }}>
                  {loc.city}, FL
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.6 }}>
                  {loc.intro.slice(0, 120)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--gold)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Get a free audit of your online presence — delivered in 3–5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--gold)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
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
