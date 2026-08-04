import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing by Specialty — Men's Health & Primary Care | Primara",
  description:
    "Primara provides digital marketing for independent men's health, primary care, and mental health practices — TRT clinics, urology, family medicine, geriatrics, and more. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const mensHealthSpecialties = [
  {
    href: "/specialties/trt-clinics",
    eyebrow: "Hormone Optimization",
    title: "TRT Clinics",
    description:
      "Testosterone replacement therapy clinics compete against venture-funded national telehealth brands on paid search — and win on local Google Maps visibility, a channel those brands structurally can't access.",
    stat: "Direct-pay, recurring treatment plans make TRT one of the clearest lifetime-value calculations in independent medicine.",
    source: null,
  },
  {
    href: "/specialties/mens-wellness-clinics",
    eyebrow: "Longevity & Vitality",
    title: "Men's Wellness Clinics",
    description:
      "A broad category — hormone health, weight management, vitality care — that most clinics market with one generic page instead of the dedicated service pages Google needs to rank each offering.",
    stat: "Recurring membership and treatment-plan models reward the clinics that invest in dedicated, service-specific local SEO.",
    source: null,
  },
  {
    href: "/specialties/urology-practices",
    eyebrow: "Men's Health Service Lines",
    title: "Urology Practices",
    description:
      "Independent urology practices often bury their highest-intent men's health services — TRT, ED treatment, vasectomy — on generic pages that don't rank for the specific searches driving new patients.",
    stat: "Patients increasingly search directly for symptom-specific care before ever asking a primary care physician for a referral.",
    source: null,
  },
  {
    href: "/specialties/ed-treatment-clinics",
    eyebrow: "Most Privacy-Sensitive Category",
    title: "ED Treatment Clinics",
    description:
      "The category where national telehealth apps have made the deepest inroads. An independent clinic wins by being the discreet, clinically credible local alternative — not an afterthought on a general services page.",
    stat: "Trust has to be established before the first click — a website that reads like a telehealth funnel loses to the real telehealth apps.",
    source: null,
  },
];

const primaryCareSpecialties = [
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
      "Parents — not patients — do the searching. Reviews from other parents drive decisions. High rates of relocation nationwide create a constant stream of families urgently seeking a new pediatrician.",
    stat: "63% of health-related searches are made on smartphones — local Maps presence is critical.",
    source: "Think with Google, Health Micro-Moments Study, 2022",
  },
  {
    href: "/specialties/geriatrics",
    eyebrow: "Senior Care",
    title: "Geriatric Medicine",
    description:
      "Adult children search on behalf of their parents. Many regions face a severe geriatrician shortage relative to their senior population — meaning minimal online competition for practices that show up.",
    stat: "The geriatrician-to-patient ratio is among the worst of any medical specialty in the US.",
    source: null,
  },
  {
    href: "/specialties/concierge-medicine",
    eyebrow: "Membership-Based Care",
    title: "Concierge Medicine",
    description:
      "Premium positioning, smaller patient panels, and affluent audiences in high-income markets nationwide. The marketing challenge is standing out from national concierge chains like MDVIP and One Medical.",
    stat: "Concierge medicine grew approximately 80% nationally from 2018–2023.",
    source: "American Academy of Private Physicians (AAPP), Annual Membership Survey, 2023",
  },
  {
    href: "/specialties/direct-primary-care",
    eyebrow: "Subscription Model",
    title: "Direct Primary Care",
    description:
      "DPC practices must rank for both model-education searches and traditional care searches. A large, growing self-employed and uninsured population nationwide is a natural audience for the flat-fee model.",
    stat: "Over 2,700 DPC practices operate nationwide, and the model continues to grow.",
    source: "DPC Frontier, National DPC Practice Directory, 2024",
  },
];

interface SpecialtyCard {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  stat: string;
  source: string | null;
}

function SpecialtyGrid({ items }: { items: SpecialtyCard[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1px",
        background: "var(--wire)",
        border: "1px solid var(--wire)",
      }}
    >
      {items.map((s) => (
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
            {s.source && (
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
            )}
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
  );
}

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
          Marketing by Specialty · Nationwide
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
          Digital Marketing for Independent Men&rsquo;s Health &amp; Primary Care Practices
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
          Primara works exclusively with independent practices — not hospital systems, not national
          telehealth franchises, not urgent care chains. Every service we offer is built around the
          specific digital challenges your specialty faces. Choose your practice type below to see
          what that looks like.
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

      {/* Men's Health specialty cards */}
      <section
        aria-labelledby="mens-health-specialties-heading"
        style={{ borderTop: "1px solid var(--wire)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>
              Men&rsquo;s Health
            </p>
            <h2
              id="mens-health-specialties-heading"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 400 }}
            >
              Men&rsquo;s Health Specialties
            </h2>
          </div>
          <SpecialtyGrid items={mensHealthSpecialties} />
        </div>
      </section>

      {/* Primary Care specialty cards */}
      <section
        aria-labelledby="primary-care-specialties-heading"
        style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ember)", marginBottom: "12px" }}>
              Primary Care
            </p>
            <h2
              id="primary-care-specialties-heading"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 400 }}
            >
              Primary Care Specialties
            </h2>
          </div>
          <SpecialtyGrid items={primaryCareSpecialties} />
        </div>
      </section>

      {/* Why specialization matters */}
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--void)" }}>
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
                "We work exclusively with independent practices. That means we understand the difference between how a DPC patient searches, how a Medicare patient finds a geriatrician, and how a man researches TRT privately at midnight. That specificity is the advantage.",
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
