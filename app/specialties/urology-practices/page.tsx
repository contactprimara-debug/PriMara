import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Digital Marketing for Urology Practices | Primara",
  description:
    "Primara helps independent urology practices rank higher on Google Maps, build patient trust, and grow their men's health service line. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/urology-practices" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Specialties", item: "https://primara365.com/specialties" },
    { "@type": "ListItem", position: 3, name: "Urology Practices", item: "https://primara365.com/specialties/urology-practices" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Urology Practices",
  provider: { "@type": "LocalBusiness", name: "Primara", telephone: "+15612912681" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Healthcare Digital Marketing",
  description:
    "Google Business Profile optimization, local SEO, website design, and review management for independent urology practices, with a focus on men's health service lines.",
};

const challenges = [
  {
    title: "Competing against hospital-affiliated urology groups",
    body: "Large hospital systems and multi-location urology groups dominate paid search and often outrank independent practices on Google Maps for the highest-volume search terms in the specialty.",
  },
  {
    title: "Men's health service lines get buried",
    body: "Most urology practice websites lead with general urology and bury specific, high-intent services — TRT, ED treatment, vasectomy — on generic pages that don't rank for the specific searches driving new patient volume in those service lines.",
  },
  {
    title: "Referral-dependent growth is slowing",
    body: "Urology has historically relied heavily on primary care referrals. That channel is still important, but more patients now search directly for symptom-specific care — \"urologist near me,\" \"low testosterone doctor\" — before ever asking their PCP for a referral.",
  },
  {
    title: "Reviews carry outsized weight in a sensitive specialty",
    body: "Patients researching urological care — particularly for men's health services — weigh reviews heavily as a trust signal before booking. A thin review profile is a direct barrier to new patient volume in this specialty more than in most.",
  },
];

const services = [
  "Google Business Profile optimization — Urologist and Men's Health Physician categories, a full service list covering both general urology and men's health services",
  "Dedicated local SEO content for high-intent service lines: 'TRT clinic [city],' 'vasectomy [city],' 'ED treatment [city]', alongside general urology terms",
  "Review generation system built to protect patient privacy in a sensitive specialty",
  "Website architecture that gives each men's health service line its own page, instead of burying it under general urology",
  "Competitor gap analysis against hospital-affiliated urology groups and local independent practices",
  "Monthly reporting with Maps rank tracking on your primary keyword and city",
];

export default function UrologyPracticesPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Urology Practices</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Men&rsquo;s Health · Nationwide
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Urology Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Independent urology practices compete against hospital-affiliated groups for general search
          visibility — while their highest-intent men&rsquo;s health service lines often go unmarketed
          entirely. Primara builds the local SEO presence and dedicated service pages that capture
          patients searching for TRT, ED treatment, and men&rsquo;s health care specifically.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Call (561) 291-2681
          </a>
          <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Get a Free Practice Audit
          </Link>
        </div>
      </section>

      {/* Challenges */}
      <section aria-labelledby="challenges-heading" style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="challenges-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "48px" }}>
            Why independent urology practices struggle online
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
            {challenges.map(({ title, body }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ width: "24px", height: "2px", background: "var(--ember)" }} />
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--chalk)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-heading" style={{ borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="services-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "12px" }}>
            What Primara does for urology practices
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Every engagement starts with a free audit using your real numbers and your named local competitor.
            From there, we build a strategy around the specific gaps we find — not a generic checklist.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {services.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path d="M4 10l4 4 8-8" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "40px", padding: "24px 28px", background: "var(--surface-2)", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: "var(--chalk)" }}>Primara works exclusively with independent, physician-owned practices.</strong>{" "}
              No hospital-employed groups. If you&rsquo;re an independent urology practice, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Specialties & Resources"
        items={[
          { href: "/specialties/ed-treatment-clinics", label: "ED Treatment Clinics", description: "How independent ED treatment clinics compete with Hims/Roman on local search." },
          { href: "/specialties/mens-wellness-clinics", label: "Men's Wellness Clinics", description: "Positioning strategy for men's wellness and vitality centers." },
          { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The core service behind ranking for '[specialty] [city]' searches on Google." },
        ]}
      />
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            Ready to see where your practice stands?
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            We&rsquo;ll research your practice, compare you to your top local competitor, and deliver a
            free custom audit within 3–5 business days. No obligation.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Request Free Audit
            </Link>
            <Link href="/mens-health" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              See Men&rsquo;s Health Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
