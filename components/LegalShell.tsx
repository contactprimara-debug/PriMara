import Link from "next/link";
import type { ReactNode } from "react";

/* Shared shell for Terms and SMS Terms (same look as /privacy). */
export const legalBody: React.CSSProperties = { fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", color: "var(--ash)", lineHeight: 1.85 };
export const legalH2: React.CSSProperties = {
  fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--chalk)",
  fontWeight: 400, margin: "0 0 0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--wire)",
};
export const legalList: React.CSSProperties = { ...legalBody, paddingLeft: "1.4rem", display: "flex", flexDirection: "column", gap: "0.4rem" };

export default function LegalShell({ title, effective, children }: { title: string; effective: string; children: ReactNode }) {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 48px) clamp(60px, 8vw, 100px)" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
          <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: "var(--smoke)" }}>
            <li><Link prefetch={false} href="/" style={{ color: "var(--smoke)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: "var(--ash)" }}>{title}</li>
          </ol>
        </nav>
        <header style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1rem" }}>{title}</h1>
          <p style={{ ...legalBody, color: "var(--smoke)" }}>Effective date: {effective}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
