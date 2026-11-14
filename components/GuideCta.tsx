import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/* In-content conversion block for /guides/*. Added 2026-11-14 (growth-hunter):
   guides earned the clicks but the only CTA sat below FAQ + Sources + Keep reading.
   variant "top"  = compact strip under the byline (above the fold, phone + desktop)
   variant "mid"  = full block after the opening sections
   Tel links are tracked by the global phone_call listener in app/layout.tsx.
   No prices, no clinical claims. */
export default function GuideCta({ variant }: { variant: "top" | "mid" }) {
  const phone = siteConfig.phoneDisplay.replace(/ /g, " ");
  const btn = {
    display: "inline-block",
    background: "var(--ember)",
    color: "#fff",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "14px 22px",
    borderRadius: "3px",
    textDecoration: "none",
    minHeight: "48px",
  };
  const call = { color: "var(--chalk)", whiteSpace: "nowrap" as const, fontWeight: 600 };

  if (variant === "top") {
    return (
      <div
        data-cta="guide-top"
        style={{ display: "flex", alignItems: "center", gap: "14px 20px", flexWrap: "wrap", marginTop: "1.25rem" }}
      >
        <Link prefetch={false} href="/contact#contact-form" style={btn}>
          Get my free audit
        </Link>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--smoke)" }}>
          or call <a href={`tel:${siteConfig.phone}`} style={call}>{phone}</a>
        </span>
      </div>
    );
  }

  return (
    <aside
      data-cta="guide-mid"
      style={{
        border: "1px solid var(--wire)",
        borderLeft: "3px solid var(--ember)",
        background: "var(--surface-2)",
        borderRadius: "0 8px 8px 0",
        padding: "1.25rem 1.5rem",
        margin: "2.25rem 0",
      }}
    >
      <p style={{ color: "var(--chalk)", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.4, margin: "0 0 0.4rem" }}>
        Want this handled for your practice?
      </p>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: "0 0 1rem" }}>
        We look at your Google profile, your site and your competitors, then send you a written plan. Free, no obligation.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px 20px", flexWrap: "wrap" }}>
        <Link prefetch={false} href="/contact#contact-form" style={btn}>
          Send me my free audit
        </Link>
        <a href={`tel:${siteConfig.phone}`} style={call}>Call {phone}</a>
      </div>
    </aside>
  );
}
