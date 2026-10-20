// Extra body copy block for money pages (locations). Added 2026-10-20 by the page factory to lift
// thin /locations/ pages to the PAGE-STANDARD word floor with unique, service-specific copy.
// Same visual language as the surrounding sections; never more than 4 consecutive <p> (walls gate).

export type DepthBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export default function LocationDepth({
  eyebrow,
  heading,
  blocks,
}: {
  eyebrow: string;
  heading: string;
  blocks: DepthBlock[];
}) {
  return (
    <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderTop: "1px solid var(--wire)" }}>
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div style={{ maxWidth: "760px" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
            {eyebrow}
          </p>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
            {heading}
          </h2>
          {blocks.map((b, i) =>
            b.type === "h3" ? (
              <h3 key={i} style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.3, margin: "32px 0 12px" }}>
                {b.text}
              </h3>
            ) : b.type === "p" ? (
              <p key={i} style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
                {b.text}
              </p>
            ) : (
              <ul key={i} style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px", paddingLeft: "1.25rem", listStyle: "disc" }}>
                {b.items.map((it) => (
                  <li key={it} style={{ marginBottom: "8px" }}>{it}</li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </section>
  );
}
