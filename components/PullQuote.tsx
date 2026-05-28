/* ── PullQuote — reusable editorial moment ─────────────────────────────────
   Drop between any two sections for a full-width typographic statement.
   Entrance animation (word-by-word SplitText) is wired globally by
   TypeAnimations.tsx — no per-instance JS needed here.
*/

interface PullQuoteProps {
  /** The impactful statement — keep under 20 words for best visual weight */
  text: string;
  /** Attribution line, e.g. "— Dr. Name, Practice Name" */
  cite?: string;
}

export default function PullQuote({ text, cite }: PullQuoteProps) {
  return (
    <blockquote
      className="pull-quote"
      style={{
        margin: 0,
        padding: 'clamp(56px, 8vw, 96px) 10vw',
        textAlign: 'center',
        borderTop: '1px solid var(--wire)',
        borderBottom: '1px solid var(--wire)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative opening mark */}
      <span
        className="pq-mark"
        aria-hidden="true"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: '120px',
          color: 'var(--gold)',
          lineHeight: 0,
          display: 'block',
          marginBottom: '-20px',
          opacity: 0.4,
        }}
      >
        &#8220;
      </span>

      {/* Quote text — SplitText target */}
      <p
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 'clamp(22px, 3.5vw, 42px)',
          color: 'var(--chalk)',
          lineHeight: 1.35,
          fontStyle: 'italic',
          margin: '0 auto 28px',
          maxWidth: '900px',
        }}
      >
        {text}
      </p>

      {/* Attribution */}
      {cite && (
        <cite
          style={{
            display: 'block',
            fontFamily: 'system-ui, sans-serif',
            fontStyle: 'normal',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--smoke)',
            marginTop: '8px',
          }}
        >
          {cite}
        </cite>
      )}
    </blockquote>
  );
}
