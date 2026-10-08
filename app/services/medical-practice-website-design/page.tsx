import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import { toJsonLd } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Medical Practice Website Design | Primara",
  description:
    "Primara designs fast, HIPAA-aware websites for independent medical practices. Liam Costello & Gio LaRoche accept new clients. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/services/medical-practice-website-design" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Medical Practice Website Design | Primara",
    description:
      "Primara designs fast, HIPAA-aware websites for independent medical practices. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/services/medical-practice-website-design",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara365.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medical Practice Website Design",
      item: "https://primara365.com/services/medical-practice-website-design",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Practice Website Design",
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Digital Marketing",
  description:
    "Fast, HIPAA-aware website design and development for independent medical practices.",
};

const bullets = [
  "Mobile-first, performance-optimized development (Core Web Vitals: LCP under 2.5s, CLS near zero)",
  "Clear new-patient conversion paths: click-to-call, contact forms, and optional Zocdoc integration",
  "HIPAA-aware design — no tracking pixels that may capture PHI, compliant contact form configuration",
  "Physician and MedicalClinic schema markup to support local search visibility from day one",
  "Accessibility (WCAG 2.1 AA): adequate color contrast, keyboard navigation, and proper ARIA labels",
  "Real photography strategy — no stock medical imagery",
];

const faqs = [
  { q: "How long does a website build take?", a: "Most practice websites are built and launched within 4–6 weeks from kickoff, depending on how much of your own content (provider bios, photos, service descriptions) is ready to go at the start. Sites with more custom pages or a larger provider roster take longer." },
  { q: "Will our new site be built with SEO in mind, or is that separate?", a: "SEO is built into the site from day one — proper heading structure, schema markup, page speed, and a URL structure designed around the service and location terms patients actually search — not bolted on after launch as a separate project." },
  { q: "Do you build HIPAA-compliant contact and intake forms?", a: "Yes. Forms are built to avoid collecting or transmitting protected health information through non-compliant channels, and analytics/ad tracking is configured to record that a lead occurred without capturing clinical details in Google or Meta’s systems — a compliance mistake in ad tracking is one of the more common, avoidable risks an independent practice takes on unknowingly." },
  { q: "Can we update the website ourselves after it launches?", a: "Yes — every site is built on a content management system your team can use directly for basic updates like hours, staff bios, or announcements, without needing to contact us for every small change. Larger structural changes or new pages remain part of ongoing service." },
  { q: "What happens to our current domain and email during the switch?", a: "Nothing changes that you don’t approve first. We migrate the new site to your existing domain with a planned cutover to avoid downtime, and email — if hosted separately from the website — is untouched by the migration entirely, since email and website hosting are handled as two completely separate systems in almost every practice's setup." },
];


export default function WebsiteDesignPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Website Design</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-12" aria-labelledby="web-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Now Accepting New Clients
        </div>
        <h1
          id="web-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Medical Practice Website Design — Primara
        </h1>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}
        >
          Liam Costello &amp; Gio LaRoche, Co-Founders · Primara
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="tel:+15612912681"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--color-accent)", height: "48px", fontSize: "1rem" }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/the-audit"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
            style={{ borderColor: "var(--ember)", color: "var(--ember)", height: "48px", fontSize: "1rem" }}
          >
            Request a Free Audit
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <div className="max-w-prose">
          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            What is Medical Practice Website Design?
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            A medical practice website serves a fundamentally different purpose than a general business site. For a
            physician — whether your practice is near Good Samaritan Medical Center on Palm Beach
            Lakes Boulevard, in an office park off Southern Boulevard, or in a neighborhood clinic in the Northwood
            or SoSo district — your site must load quickly on a mobile connection, present your credentials and
            accepted insurance clearly, and make it easy for a prospective patient to call your front desk or submit
            a new patient inquiry.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            Medical practice websites also carry compliance considerations that general business sites do not. Contact
            forms, online patient intake, and appointment request tools must be configured in a HIPAA-aware manner —
            meaning no form fields should capture protected health information through channels that have not been
            properly assessed for compliance.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How Primara Approaches Website Design
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Liam Costello and Gio LaRoche at Primara work with independent physician-owned primary care clinics to
            design and build websites that are built for patient conversion, not aesthetic awards. Every site we build
            is accompanied by SEO foundation work — title tags, meta descriptions, canonical URLs, structured data
            markup, and sitemap submission — so search engines can index and rank it accurately from day one.
          </p>
          <ul className="mb-6 space-y-3" style={{ color: "var(--color-text-muted)" }}>
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                >
                  <path
                    d="M3 9l4 4 8-8"
                    stroke="var(--color-success)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span style={{ fontSize: "0.9375rem" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mb-12" style={{ color: "var(--color-text-muted)" }}>
            We work with practices that want a site that actively brings in new patients, rather than simply existing
            as a digital brochure. Our approach includes guidance on patient photography and a content review process
            to confirm all clinical descriptions are accurate and compliant before launch.
          </p>

          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            When to Consider a New Website?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            If your current site fails Google&rsquo;s Mobile-Friendly test, loads in more than three seconds on a mobile
            connection, lacks HTTPS, or has no clear action path for a prospective new patient, a redesign may be
            worth discussing. The same applies if your site was last updated more than three years ago and predates
            Google&rsquo;s Core Web Vitals standards. Primara works with independent practices, including primary
            care, mental health, dental and medspa.
          </p>
        </div>
      </section>

      {/* How a build runs */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <div className="max-w-prose">
          <h2
            className="font-serif font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem", color: "var(--color-text)" }}
          >
            How a Practice Website Build Runs
          </h2>
          <p className="leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
            A typical build takes four to six weeks, depending on how quickly the practice returns content. These are the five stages, and what you can check at the end of each.
          </p>
          <div className="mb-5">
            <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>1. Content inventory (week 1)</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>We list every page, provider bio, service and photo the practice already has, and mark what is missing. The practice confirms services, insurance plans and hours in writing, and only confirmed facts go on the site.</p>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>2. Page plan and first-screen design (weeks 1-2)</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>Each page gets one job. On a phone, the first screen carries the practice name, the city, a tap-to-call button and a request-an-appointment button, so no one scrolls to find how to reach you.</p>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>3. Build and forms (weeks 2-4)</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>We build on a content system your staff can edit. Forms collect a name, a phone number and a short reason, and never ask for symptoms, diagnoses or anything clinical.</p>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>4. Pre-launch tests (week 4-5)</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>We load every page on a real phone and in Lighthouse, tap every phone number, and submit a test inquiry to confirm it reaches the right inbox. We also check that every old URL has a redirect to its new page.</p>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold mb-1" style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>5. Launch and first month</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>After the domain cutover we submit the sitemap, watch Search Console for crawl errors, and check that calls and form leads are being counted. You get a short written note on what we found.</p>
          </div>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Ongoing ranking work then continues under <Link href="/services/seo" style={{ color: "var(--color-gold)" }}>medical practice SEO</Link>, and the site feeds your <Link href="/services/google-business-profile" style={{ color: "var(--color-gold)" }}>Google Business Profile</Link>.
          </p>
        </div>
      </section>

      {/* Industry stat */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pb-16">
        <blockquote
          className="p-8 rounded-xl max-w-prose"
          style={{
            backgroundColor: "var(--color-card)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            borderLeft: "4px solid var(--color-gold)",
          }}
        >
          <p className="leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-text)", fontStyle: "italic" }}>
            &ldquo;75% of users never scroll past the first page of Google results. If your practice
            website isn&rsquo;t ranking on page one for your primary search terms, it may as well not
            exist — from a new-patient discovery standpoint.&rdquo;
          </p>
          <cite
            className="block mt-4"
            style={{
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              fontStyle: "normal",
              fontFamily: "var(--font-mono)",
            }}
          >
            — Backlinko, Google Organic CTR Research, 2023
          </cite>
        </blockquote>
      </section>

      {/* Related links (contextual internal linking) */}
      <FaqSection faqs={faqs} />

      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Resources"
        items={[
          { href: "/services/seo", label: "SEO", description: "The full SEO service — technical, on-page, and content — behind every specialty page like this one." },
          { href: "/services/patient-acquisition-ads", label: "Patient Acquisition Ads", description: "Paid search and Maps ads for practices that want patients faster than organic SEO alone." },
          { href: "/specialties/pediatrics", label: "Pediatrics", description: "Marketing for pediatric practices — a different search pattern than adult primary care." },
          { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design in West Palm Beach", description: "The same website design work, for practices in our home market." },
          { href: "/locations/medical-website-design-florida", label: "Medical Website Design in Florida", description: "Practice website design for independent practices across the state." },
        ]}
      />
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }} aria-labelledby="web-cta">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            id="web-cta"
            className="font-serif font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Schedule — Call (561) 291-2681
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+15612912681"
              className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
              style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem" }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 font-bold text-white"
              style={{ height: "52px", fontSize: "1rem" }}
            >
              Request Your Free Audit
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Part of our{" "}
            <Link href="/services" className="underline hover:opacity-80 text-white">
              digital marketing services
            </Link>{" "}
            for independent primary care practices.
          </p>
        </div>
      </section>
    </main>
  );
}
