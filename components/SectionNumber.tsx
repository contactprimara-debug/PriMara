/* ── SectionNumber — oversized editorial detail ────────────────────────────
   Usage: place inside any section that has position:relative.
   <SectionNumber n="01" />

   The number sits behind content (z-index: 0) and is non-interactive.
   Designed to be used when sections are rebuilt with the new design system.
*/

interface SectionNumberProps {
  /** Zero-padded number string: "01", "02", "03", "04" */
  n: string;
  /** Side: default "right". Pass "left" for alternate placement. */
  side?: 'left' | 'right';
}

export default function SectionNumber({ n, side = 'right' }: SectionNumberProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '16px',
        [side]: '5vw',
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(120px, 14vw, 180px)',
        color: 'rgba(201, 168, 76, 0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
        display: 'block',
      }}
    >
      {n}
    </span>
  );
}
