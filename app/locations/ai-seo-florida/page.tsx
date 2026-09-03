import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/ai-seo-florida`;

export const metadata: Metadata = {
  title: "AI SEO for Florida Medical Practices | Primara",
  description:
    "AI SEO (GEO) for Florida medical practices — structured data, AI crawler access, and content built to be cited by ChatGPT and AI Overviews, statewide. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI SEO for Florida Medical Practices | Primara",
    description:
      "AI SEO (GEO) for Florida medical practices — structured data, AI crawler access, and content built to be cited by AI search.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "AI SEO Florida", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI SEO for Florida Practices",
  url: PAGE_URL,
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
  areaServed: { "@type": "State", name: "Florida" },
  serviceType: "Generative Engine Optimization for Medical Practices",
  description:
    "AI SEO (Generative Engine Optimization) for independent medical practices across Florida — structured data, AI crawler access, and content structured so AI systems like ChatGPT and Google AI Overviews can accurately find and cite the practice.",
};

const faqs = [
  {
    "q": "What is AI SEO / GEO?",
    "a": "AI SEO — also called Generative Engine Optimization (GEO) or Answer Engine Optimization (AEO) — is the practice of structuring a website so AI systems like ChatGPT, Perplexity, and Google AI Overviews can accurately find, understand, and cite it. It sits alongside traditional SEO rather than replacing it: the same technical foundation — fast pages, real content, structured data — helps with both."
  },
  {
    "q": "Does AI SEO matter outside the big Florida metros?",
    "a": "Yes — arguably more. In smaller Florida markets there are fewer well-structured practice sites for AI systems to draw on, so a practice that does the technical work correctly can become the answer for its area faster than it could in Miami or Tampa."
  },
  {
    "q": "Can you guarantee my practice will show up in ChatGPT?",
    "a": "No — and you should be skeptical of anyone who does. No one controls what an AI model decides to cite; these systems pull from many sources and their behavior changes as they're updated. What we can do is make sure your practice is technically ready to be found and accurately represented when it is — correct structured data, no accidental crawler blocks, and content written the way these systems actually quote it."
  },
  {
    "q": "Do you do this for your own website?",
    "a": "Yes. Primara's own site runs the same setup we build for clients — schema markup, an llms.txt file, and explicit AI crawler access. It's live right now at primara365.com, not a theoretical service."
  },
  {
    "q": "Is there a separate cost for AI SEO?",
    "a": "For most clients it's built into the SEO or Foundation/Visibility package rather than sold separately — the technical work overlaps heavily with what we already do for traditional SEO. We'll tell you plainly if your situation calls for additional scope."
  }
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

const deliverables = [
  {
    "title": "Structured Data AI Systems Can Read",
    "body": "LocalBusiness, Service, and FAQ schema on every page that matters, so AI systems and search engines can identify who you are, what you treat, and which Florida market you serve."
  },
  {
    "title": "AI Crawler Access, Deliberately Configured",
    "body": "Many sites block AI crawlers by accident through old robots.txt rules or firewall settings. We audit and configure crawler access — including an llms.txt file — so the systems patients actually ask can read your site."
  },
  {
    "title": "Content Written the Way AI Quotes It",
    "body": "Direct answers to real patient questions, structured as questions and answers — the format AI systems lift citations from. Grounded in what your practice actually offers, never invented claims."
  },
  {
    "title": "Built on the Traditional SEO Foundation",
    "body": "AI SEO isn't a separate universe — fast pages, clean structure, and real content help both. We run it alongside the same local SEO and GBP work that gets Florida practices found on Google today."
  }
];

export default function AiSeoFloridaPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/locations" style={{ color: "var(--ash)", textDecoration: "none" }}>Locations</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>AI SEO Florida</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px", padding: "5px 14px", marginBottom: "32px",
              fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "var(--gold)",
            }}
          >
            Statewide · Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "800px", marginBottom: "24px",
            }}
          >
            AI SEO for Florida Practices
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Primara structures Florida practice websites so AI systems — ChatGPT, Perplexity, Google AI Overviews — can accurately find, understand, and cite them when patients anywhere in the state ask for a recommendation. Based in West Palm Beach, working statewide.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Audit
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · No long-term contracts
          </p>
        </div>
      </section>

      {/* Local context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why It Matters Here
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              Florida patients are asking AI for doctors — statewide.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              From Miami to Jacksonville, the question &ldquo;who’s a good doctor near me?&rdquo; is increasingly asked to ChatGPT and answered by Google’s AI Overviews before a patient ever sees a traditional results page. Those systems can only recommend practices they can read: clean structured data, open crawler access, and content that answers questions directly. Most Florida practice websites have none of the three.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The technical work overlaps heavily with traditional SEO — fast pages, real content, structured data help both — so it runs alongside the local SEO and GBP work rather than replacing it. And we run the same setup on our own site, so it’s a practiced service, not a theoretical one.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            What We Do
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {deliverables.map((d, idx) => (
              <div key={d.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {d.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "40px" }}>
            Common Questions
          </p>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "12px", lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Locations"
        items={[
          {
                    "href": "/services/ai-seo",
                    "label": "AI SEO (GEO) Service",
                    "description": "The full AI SEO service — what it is, what it includes, and what we won't promise."
          },
          {
                    "href": "/locations/ai-seo-west-palm-beach",
                    "label": "AI SEO in West Palm Beach",
                    "description": "The same service in our home market of West Palm Beach."
          },
          {
                    "href": "/locations/medical-seo-florida",
                    "label": "Medical SEO for Florida Practices",
                    "description": "The traditional SEO foundation AI SEO builds on, statewide."
          }
]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Ready to Be the Answer Across Florida?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your current Google presence — delivered in 3–5 business days.
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
