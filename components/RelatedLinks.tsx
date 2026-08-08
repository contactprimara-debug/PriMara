import Link from "next/link";

type RelatedLinkItem = {
  href: string;
  label: string;
  description: string;
};

export default function RelatedLinks({
  eyebrow = "Related",
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: RelatedLinkItem[];
}) {
  return (
    <section aria-labelledby="related-links-heading" style={{ borderTop: "1px solid var(--wire)" }}>
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "12px",
          }}
        >
          {eyebrow}
        </p>
        <h2
          id="related-links-heading"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "var(--chalk)",
            fontWeight: 400,
            marginBottom: "32px",
          }}
        >
          {heading}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {items.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--wire)",
                borderRadius: "6px",
                padding: "20px 22px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              className="related-link-card"
            >
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "var(--chalk)",
                  marginBottom: "6px",
                }}
              >
                {label} →
              </p>
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--ash)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
