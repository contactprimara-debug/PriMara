import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "AI SEO (GEO) for Medical Practices | Primara",
  description:
    "Primara builds AI SEO / Generative Engine Optimization (GEO) for independent primary care and mental health practices — structured data, AI crawler access, and content built to be cited by ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: { canonical: "https://primara365.com/services/ai-seo" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI SEO (GEO) for Medical Practices | Primara",
    description:
      "AI SEO / GEO for independent primary care and mental health practices — structured data, AI crawler access, and answer-ready content.",
    type: "website",
    url: "https://primara365.com/services/ai-seo",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara365.com/services" },
    { "@type": "ListItem", position: 3, name: "AI SEO", item: "https://primara365.com/services/ai-seo" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI SEO for Medical Practices",
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
  serviceType: "Generative Engine Optimization",
  description:
    "Structured data, AI crawler access, and answer-ready content that helps AI systems like ChatGPT, Perplexity, and Google AI Overviews accurately find and cite independent medical practices.",
};

const pillars = [
  {
    label: "Structured Data & Schema Markup",
    tag: "Machine-Readable",
    body: "AI systems don't read a page the way a person does — they rely heavily on structured data to extract accurate facts instead of guessing from paragraphs of marketing copy. Missing or incomplete schema markup means an AI system either gets it wrong or skips your practice for one it can parse with confidence.",
    items: [
      "LocalBusiness, Service, and FAQPage schema markup on core pages",
      "Accurate name, address, phone, hours, and service area in structured format",
      "FAQ content marked up so AI engines can quote it directly, word for word",
      "Structured data reflects only what's real and verifiable — no fabricated ratings or review counts, which AI systems are increasingly trained to flag as untrustworthy",
    ],
  },
  {
    label: "AI Crawler Access",
    tag: "Foundational",
    body: "A site can be technically excellent and still be invisible to AI systems if their crawlers are accidentally blocked — a common problem with robots.txt files that were never updated for this new generation of bots, or with sites that render key content in a way older and newer crawlers alike can't read.",
    items: [
      "robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bingbot",
      "An llms.txt file — a plain-language summary of the practice written specifically for AI models to read",
      "Verification that no crawl-blocking rule is silently hiding key pages",
      "Server-rendered pages, so content is present in the initial HTML — not something a crawler has to execute JavaScript to see",
    ],
  },
  {
    label: "Answer-Ready Content",
    tag: "What Gets Cited",
    body: "AI systems tend to quote the sentence that most directly answers a question — not the sentence buried in the middle of a marketing paragraph. Content structured around real questions, with the answer stated plainly and early, is simply easier to cite correctly.",
    items: [
      "Direct-answer copy: the question gets answered in the first sentence, not the fifth",
      "FAQ sections built from real questions patients and practices actually ask",
      "Clear, specific service descriptions instead of vague positioning language",
      "Content kept current as services change, so AI systems aren't citing something outdated",
    ],
  },
];

const faqs = [
  {
    q: "What is AI SEO / GEO?",
    a: "AI SEO — also called Generative Engine Optimization (GEO) or Answer Engine Optimization (AEO) — is the practice of structuring a website so AI systems like ChatGPT, Perplexity, and Google AI Overviews can accurately find, understand, and cite it. It sits alongside traditional SEO rather than replacing it: the same technical foundation — fast pages, real content, structured data — helps with both.",
  },
  {
    q: "Can you guarantee my practice will show up in ChatGPT?",
    a: "No — and you should be skeptical of anyone who does. No one controls what an AI model decides to cite; these systems pull from many sources and their behavior changes as they're updated. What we can do is make sure your practice is technically ready to be found and accurately represented when it is — correct structured data, no accidental crawler blocks, and content written the way these systems actually quote it.",
  },
  {
    q: "Is this different from regular SEO?",
    a: "It builds on the same foundation rather than replacing it. Traditional SEO gets you found on Google's results page. AI SEO makes sure that same technical groundwork — structured data, crawlable content, direct answers — is also readable by the AI systems increasingly used to ask the same questions.",
  },
  {
    q: "Do you do this for your own website?",
    a: "Yes. Primara's own site runs the same setup we build for clients — schema markup, an llms.txt file, and explicit AI crawler access. It's live right now at primara365.com, not a theoretical service.",
  },
  {
    q: "Is there a separate cost for AI SEO?",
    a: "For most clients it's built into the SEO or Foundation/Visibility package rather than sold separately — the technical work overlaps heavily with what we already do for traditional SEO. We'll tell you plainly if your situation calls for additional scope.",
  },
];

// Derived from `faqs` above — single source of truth, so the schema can
// never drift out of sync with the visible Q&A content on the page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AiSeoPage() {
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
            <li><Link href="/services" style={{ color: "var(--ash)", textDecoration: "none" }}>Services</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>AI SEO</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--void)",
          padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px",
              padding: "5px 14px",
              marginBottom: "32px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--gold)",
            }}
          >
            Now Accepting New Clients
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
              marginBottom: "24px",
            }}
          >
            AI SEO for Independent Medical Practices
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--ash)",
              lineHeight: 1.75,
              maxWidth: "640px",
              marginBottom: "40px",
            }}
          >
            Patients are starting more of their searches inside ChatGPT, Perplexity, and Google&rsquo;s
            AI Overviews — not just a traditional search results page. Primara builds the technical
            foundation — structured data, AI crawler access, and answer-ready content — that determines
            whether these systems can find your practice and describe it accurately.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid var(--wire)",
                color: "var(--chalk)",
                fontWeight: 600,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get a Free Audit
            </Link>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.8125rem",
              color: "var(--smoke)",
            }}
          >
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent practices only · No long-term contracts
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "24px",
              }}
            >
              Why It Matters
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
                color: "var(--chalk)",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              The same technical work that gets you found on Google now determines whether AI systems can find you too.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Search behavior is shifting. A growing share of health-related questions now start inside
              an AI assistant instead of a traditional search bar — someone asks ChatGPT to recommend a
              therapist, or asks Perplexity what a mental health practice near them treats. These systems
              answer using whatever they can read and trust: structured data, clearly written content,
              and pages that aren&rsquo;t accidentally blocked from their crawlers.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              Most medical practice websites were never built with this in mind. Missing schema markup
              means an AI system has to guess at basic facts. A robots.txt file copied from a template
              years ago might be silently blocking the exact crawlers these systems use today. Primara
              treats AI readiness as part of the same technical foundation as traditional SEO — not a
              separate, speculative add-on.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "48px",
            }}
          >
            What We Build
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.label}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "clamp(32px, 5vw, 56px) 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(32px, 5vw, 80px)",
                }}
                className="seo-pillar-grid"
              >
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "var(--smoke)",
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "var(--gold)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        borderRadius: "2px",
                        padding: "3px 8px",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                      fontWeight: 400,
                      color: "var(--chalk)",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                    }}
                  >
                    {pillar.label}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75 }}>
                    {pillar.body}
                  </p>
                </div>

                {/* Right */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.8rem" }}>▸</span>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "40px",
            }}
          >
            Common Questions
          </p>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "24px 0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--void)", borderBottom: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 48px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px" }}>
            Related services
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/services/seo", label: "SEO for Medical Practices" },
              { href: "/services/google-ads", label: "Google Ads for Medical Practices" },
              { href: "/services/google-business-profile", label: "Google Business Profile" },
              { href: "/services/local-seo-for-medical-practices", label: "Local SEO" },
              { href: "/results", label: "See the Results" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "6px 14px",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Resources"
        items={[
          { href: "/services/seo", label: "SEO", description: "The full SEO service — technical, on-page, and content — behind every specialty page like this one." },
          { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The core service behind ranking for '[specialty] [city]' searches on Google." },
          { href: "/blog/what-is-local-seo-for-doctors", label: "What Is Local SEO for Doctors?", description: "A plain-English guide to what local SEO actually means for a medical practice." },
          { href: "/locations/ai-seo-west-palm-beach", label: "AI SEO in West Palm Beach", description: "The same AI SEO work, for practices in our home market." },
          { href: "/locations/ai-seo-florida", label: "AI SEO for Florida Practices", description: "AI SEO for independent practices across Florida, from Miami to Jacksonville." },
        ]}
      />
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              marginBottom: "1rem",
            }}
          >
            Ready to Be Found by AI Search?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We start with a free audit of your Google presence — AI readiness included.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
