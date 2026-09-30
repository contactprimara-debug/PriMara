import { toJsonLd } from "@/lib/schema";

export type Faq = { q: string; a: string };

/**
 * Shared FAQ section: renders the visible Q&A block AND the FAQPage JSON-LD
 * derived from the SAME array, so schema can never drift from visible copy.
 *
 * The `faqs` content must be written per-page — this component only owns
 * layout/markup, never copy. See PAGE-STANDARD.md §2.
 */
export default function FaqSection({
  faqs,
  heading = "Common Questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" style={{ borderTop: "1px solid var(--wire)", background: "var(--void)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
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
          {heading}
        </p>
        <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
              <h3
                id={idx === 0 ? "faq-heading" : undefined}
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
  );
}
