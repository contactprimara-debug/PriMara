import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/dental-seo`;
const TITLE = "Dental SEO for Independent Dental Practices | Primara";
const DESC =
  "Dental SEO for independent practices: Google Business Profile, treatment pages, reviews and call tracking, reported monthly. Based in West Palm Beach. Call (561) 291-2681.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: PAGE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const faqs = [
  {
    q: "What is dental SEO?",
    a: "Dental SEO is the work of making a dental practice easy to find when someone near it searches for a dentist or a treatment. It covers the Google Business Profile, the practice website, reviews, and the tracking that shows which searches turned into calls and appointment requests.",
  },
  {
    q: "How is dental SEO different from running Meta or Google ads?",
    a: "Ads stop sending patients when the budget stops. SEO builds listings and pages that keep showing up, but it takes months to settle. Many practices run both, and we measure them separately so you can see what each one produced.",
  },
  {
    q: "How long does dental SEO take to show results?",
    a: "Google Business Profile fixes can change what shows on the map within weeks. New treatment pages usually need several months before they are indexed and ranking. We report the milestones we can measure, such as pages indexed and calls tracked, instead of promising a ranking date.",
  },
  {
    q: "Do you promise first-page rankings or a number of new patients?",
    a: "No. Nobody controls Google. We commit to the work, to honest monthly numbers, and to telling you when something is not working. Rankings and new-patient counts vary by city, competition and the practice itself.",
  },
  {
    q: "What do you need from our practice to start?",
    a: "Manager access to your Google Business Profile, a login or developer contact for the website, and a written list of the treatments you want to be found for. We only publish services, hours and insurance details the practice has confirmed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Dental Practices", item: `${SITE_URL}/dental-practices` },
    { "@type": "ListItem", position: 3, name: "Dental SEO", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental SEO",
  url: PAGE_URL,
  serviceType: "Search engine optimization for dental practices",
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL", addressCountry: "US" },
  },
  areaServed: { "@type": "Country", name: "United States" },
  description:
    "Search engine optimization for independent dental practices: Google Business Profile management, treatment and location pages, review requests, and call and form tracking with monthly reporting.",
};

const searchTypes = [
  {
    search: "Emergency dentist near me",
    answer: "A Google Business Profile with correct hours, a tap-to-call button and an emergency visit page that says what to expect.",
    measure: "Calls from the listing and from the page",
  },
  {
    search: "Dental implants cost",
    answer: "A treatment page that explains the steps, what changes the price, and how to book a consultation.",
    measure: "Form requests and calls from that page",
  },
  {
    search: "Invisalign or clear aligners in [city]",
    answer: "A city page for the treatment, tied to the office that actually offers it.",
    measure: "Map and page visits for the term",
  },
  {
    search: "Dentist accepting new patients",
    answer: "Profile services, an insurance and new-patient page, and review replies that match.",
    measure: "Calls and direction requests",
  },
];

const work = [
  {
    title: "Google Business Profile",
    body: "The right primary category, every service you offer, accurate hours and holiday hours, photos from the practice, and posts that give patients a reason to call. This is the part of dental SEO that most often decides who appears on the map.",
  },
  {
    title: "One page per treatment worth ranking for",
    body: "Implants, aligners, veneers, emergency care and general dentistry each get their own page, written from the practice's confirmed services. Each page answers the main question in the first lines and links to booking.",
  },
  {
    title: "Reviews, requested the right way",
    body: "We help you ask every patient for a Google review, with no screening of who gets the link and nothing clinical in the request. We also reply to each review in plain, privacy-safe wording.",
  },
  {
    title: "Tracking that counts real calls and forms",
    body: "Phone taps, calls from the listing and form requests are counted separately from page views. A test inquiry is submitted at the start to prove the whole path works.",
  },
  {
    title: "A monthly report you can read in two minutes",
    body: "Calls, form requests, pages indexed and map position for your main terms, with a short note on what we did and what we will do next. If a number fell, the report says so.",
  },
];

export default function DentalSeoPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/dental-practices" style={{ color: "var(--ash)", textDecoration: "none" }}>Dental Practices</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>Dental SEO</li>
          </ol>
        </div>
      </nav>

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(40px, 7vw, 88px) 0 clamp(32px, 5vw, 64px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "20px" }}>
            Dental SEO for independent practices
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "28px" }}>
            Dental SEO gets your practice found when people near you search for a dentist or a treatment. We run the Google Business Profile, the treatment pages, review requests and call tracking, and send one clear report each month.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Audit
            </Link>
          </div>
          <p style={{ marginTop: "18px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · West Palm Beach · No long-term contracts
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(40px, 6vw, 72px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>What patients search</p>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
            Four searches, and what answers each one
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", marginBottom: "28px" }}>
            Most dental searches fall into a few types. Each type needs a different asset, and each one has a number we can count.
          </p>
          <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {searchTypes.map((t) => (
              <div key={t.search} style={{ border: "1px solid var(--wire)", borderRadius: "6px", padding: "20px", backgroundColor: "var(--void)" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.125rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "10px", lineHeight: 1.3 }}>{t.search}</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.65, marginBottom: "10px" }}>{t.answer}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--gold)", margin: 0 }}>We count: {t.measure}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--void)", padding: "clamp(40px, 6vw, 72px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "32px" }}>What we do</p>
          {work.map((w, i) => (
            <div key={w.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(22px, 3vw, 36px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(16px, 4vw, 48px)" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{i + 1}</div>
              <div>
                <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "10px" }}>{w.title}</h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{w.body}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--wire)", paddingTop: "24px" }}>
            <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>
              This is the search half of our <Link href="/dental-practices" style={{ color: "var(--gold)" }}>work for dental practices</Link>. The profile work is described in detail on our <Link href="/services/google-business-profile" style={{ color: "var(--gold)" }}>Google Business Profile service page</Link>, and paid patient acquisition is covered under <Link href="/services/meta-ads" style={{ color: "var(--gold)" }}>Meta ads for dental clinics</Link>.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", borderBottom: "1px solid var(--wire)", padding: "clamp(40px, 6vw, 72px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "28px" }}>Common questions</p>
          <div style={{ maxWidth: "720px" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ borderTop: "1px solid var(--wire)", padding: "22px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "10px", lineHeight: 1.3 }}>{f.q}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related"
        heading="More for dental practices"
        items={[
          { href: "/dental-practices", label: "Marketing for Dental Practices", description: "How we work with independent dental practices overall." },
          { href: "/locations/dental-practices-florida", label: "Dental Practices in Florida", description: "Our dental work across Florida markets." },
          { href: "/services/seo", label: "SEO for Medical Practices", description: "The wider SEO service this page is part of." },
          { href: "/pricing", label: "Pricing", description: "What the packages include and cost." },
        ]}
      />

      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-14 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            See where your practice stands today
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "1.75rem", fontSize: "1rem" }}>
            We start with a free audit of your Google presence, delivered in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>Call (561) 291-2681</a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>Get My Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
