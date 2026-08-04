import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing for Men's Wellness Clinics | Primara",
  description:
    "Primara helps independent men's wellness and longevity clinics rank higher on Google Maps, build patient trust, and grow without relying on national wellness franchises. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/mens-wellness-clinics" },
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
    { "@type": "ListItem", position: 3, name: "Men's Wellness Clinics", item: "https://primara365.com/specialties/mens-wellness-clinics" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Men's Wellness Clinics",
  provider: { "@type": "LocalBusiness", name: "Primara", telephone: "+15612912681" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Healthcare Digital Marketing",
  description:
    "Google Business Profile optimization, local SEO, website design, and review management for independent men's wellness and longevity clinics.",
};

const challenges = [
  {
    title: "Category confusion hurts search visibility",
    body: "\"Men's wellness\" spans hormone optimization, weight management, IV therapy, and general vitality services — a scope broad enough that most clinics never build the specific service pages Google needs to rank them for any of it.",
  },
  {
    title: "Competing against a crowded field of wellness marketing",
    body: "Med spas, supplement brands, and national wellness franchises all fight for the same broad search terms. A clinic that doesn't differentiate with physician-led, clinical positioning gets lost in a sea of lifestyle-brand marketing.",
  },
  {
    title: "Patients research heavily before committing",
    body: "Wellness services are often elective and out-of-pocket, which means patients compare multiple providers and read reviews carefully before booking. A thin or outdated Google Business Profile loses that comparison before a patient ever calls.",
  },
  {
    title: "Repeat, recurring patients change the acquisition math",
    body: "Men's wellness programs are frequently ongoing memberships or ongoing treatment plans rather than one-time visits — which means the lifetime value of a single well-acquired patient can justify meaningfully more marketing investment than a typical single-visit specialty.",
  },
];

const services = [
  "Google Business Profile optimization — category configuration spanning your full service scope, 20+ services in patient-search language, a year of posts scheduled at onboarding",
  "Local SEO content targeting 'men's wellness clinic [city],' 'men's health clinic near me,' and service-specific terms for each program you offer",
  "Review generation system built for an elective, comparison-shopped patient base",
  "Website rebuild with dedicated pages for each program — hormone optimization, weight management, vitality care — instead of one generic services page",
  "Competitor gap analysis against local clinics, med spas, and national wellness brands",
  "Monthly reporting with Maps rank tracking on your primary keyword and city",
];

export default function MensWellnessClinicsPage() {
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
          <li style={{ color: "var(--color-text)" }}>Men&rsquo;s Wellness Clinics</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Men&rsquo;s Health · Nationwide
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Men&rsquo;s Wellness Clinics
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Men&rsquo;s wellness clinics compete against med spas, supplement brands, and national wellness
          franchises for the same broad search terms. Primara builds the local Google presence and
          service-specific content that positions your clinic as the clinical, physician-led option —
          not another lifestyle brand in a crowded feed.
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
            Why men&rsquo;s wellness clinics struggle to stand out online
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
            What Primara does for men&rsquo;s wellness clinics
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
              <strong style={{ color: "var(--chalk)" }}>Primara works exclusively with independent, physician-led practices.</strong>{" "}
              No national wellness franchises. If you&rsquo;re a physician-owned men&rsquo;s wellness clinic, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            Ready to see where your clinic stands?
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            We&rsquo;ll research your clinic, compare you to your top local competitor, and deliver a
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
