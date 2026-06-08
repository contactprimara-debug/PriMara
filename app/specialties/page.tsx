import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primary Care Marketing by Specialty | Primara Florida",
  description:
    "Primara provides digital marketing for independent primary care practices in Florida — family medicine, internal medicine, pediatrics, geriatrics, concierge, and direct primary care. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties" },
};

const specialties = [
  {
    href: "/specialties/family-medicine",
    eyebrow: "Most Common Specialty",
    title: "Family Medicine",
    description:
      "The broadest scope in primary care. Family physicians treat all ages and compete against urgent care chains, hospital systems, and insurance directories for local visibility.",
    stat: "Patients often choose based on Google Maps rank alone — most never click past the top 3 results.",
    source: "Backlinko, Google Organic CTR Research, 2023",
  },
  {
    href: "/specialties/internal-medicine",
    eyebrow: "Adult Primary Care",
    title: "Internal Medicine",
    description:
      "Internists manage complex chronic disease in adults. The specialty name itself is an SEO challenge — most patients search “adult doctor” or “primary care,” not “internist.”",
    stat: "30% of US adults reported having no primary care provider in 2022, up from 21% in 2013.",
    source: "Commonwealth Fund, 2022 Health Care Quality Survey",
  },
  {
    href: "/specialties/pediatrics",
    eyebrow: "Children & Adolescents",
    title: "Pediatrics",
    description:
      "Parents — not patients — do the searching. Reviews from other parents drive decisions. Florida’s high in-migration rate creates a constant stream of families urgently seeking a new pediatrician.",
    stat: "63% of health-related searches are made on smartphones — local Maps presence is critical.",
    source: "Think with Google, Health Micro-Moments Study, 2022",
  },
  {
    href: "/specialties/geriatrics",
    eyebrow: "Senior Care",
    title: "Geriatric Medicine",
    description:
      "Adult children search on behalf of their parents. Florida has the highest percentage of residents over 65 of any large state — and a severe geriatrician shortage that means minimal online competition.",
    stat: "Over 20% of Florida’s population is 65+. The geriatrician-to-patient ratio is among the worst in the US.",
    source: "U.S. Census Bureau, 2022 American Community Survey",
  },
  {
    href: "/specialties/concierge-medicine",
    eyebrow: "Membership-Based Care",
    title: "Concierge Medicine",
    description:
      "Premium positioning, smaller patient panels, and affluent audiences in high-income Florida markets. The marketing challenge is standing out from national concierge chains like MDVIP and One Medical.",
    stat: "Concierge medicine grew ~80% nationally from 2018–2023. Florida is a top-3 state by practice count.",
    source: "American Academy of Private Physicians (AAPP), Annual Membership Survey, 2023",
  },
  {
    href: "/specialties/direct-primary-care",
    eyebrow: "Subscription Model",
    title: "Direct Primary Care",
    description:
      "DPC practices must rank for both model-education searches and traditional care searches. Florida’s large self-employed and uninsured population is a natural audience for the flat-fee model.",
    stat: "Over 2,700 DPC practices nationwide. Florida ranks top 4 by DPC practice count.",
    source: "DPC Frontier, National DPC Practice Directory, 2024",
  },
];

export default function SpecialtiesPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Specialties</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--smoke)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Primary Care Marketing · Florida
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            color: "var(--chalk)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Digital Marketing for Independent Primary Care Practices in Florida
        </h1>

        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "1.0625rem",
            color: "var(--ash)",
            lineHeight: 1.8,
            maxWidth: "660px",
            marginBottom: "32px",
          }}
        >
          Primara works exclusively with independent primary care practices — not hospital systems,
          not urgent care chains. Every service we offer is built around the specific digital
          challenges your specialty faces. Choose your practice type below to see what that looks like.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="tel:+15612912681"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--ember)",
              color: "#fff",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "3px",
              textDecoration: "none",
            }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/the-audit"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--wire)",
              color: "var(--chalk)",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "3px",
              textDecoration: "none",
            }}
          >
            Get a Free Audit
          </Link>
        </div>
      </section>

      {/* Specialty cards */}
      <section
        aria-label="Primary care specialties"
        style={{ borderTop: "1px solid var(--wire)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1px",
              background: "var(--wire)",
              border: "1px solid var(--wire)",
            }}
          >
            {specialties.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  padding: "clamp(28px, 4vw, 40px)",
                  background: "var(--surface)",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                className="specialty-card"
              >
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ember)",
                  }}
                >
                  {s.eyebrow}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--ash)",
                    lineHeight: 1.7,
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {s.description}
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.78rem",
                      color: "var(--smoke)",
                      lineHeight: 1.5,
                      margin: "0 0 6px",
                      borderLeft: "2px solid var(--gold)",
                      paddingLeft: "10px",
                    }}
                  >
                    {s.stat}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.68rem",
                      color: "var(--smoke)",
                      opacity: 0.6,
                      lineHeight: 1.4,
                      margin: 0,
                      paddingLeft: "12px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    — {s.source}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  See how we help →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why specialization matters */}
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <div style={{ maxWidth: "680px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--chalk)",
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              Why specialty-specific marketing matters
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "A family medicine practice and a geriatric practice have different patients, different search terms, and different trust signals. Generic medical marketing treats them the same — and gets generic results.",
                "Primara builds every strategy around your specific specialty. The keywords we target, the way we position your GBP, the review strategy we implement — all of it is tuned to how your patients actually search for care.",
                "We work exclusively with independent primary care. That means we understand the difference between how a DPC patient searches versus how a Medicare patient finds a geriatrician. That specificity is the advantage.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--ash)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/the-audit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "var(--ember)",
                  color: "#fff",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
              >
                Get Your Free Practice Audit
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid var(--wire)",
                  color: "var(--chalk)",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
