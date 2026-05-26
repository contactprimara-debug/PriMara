import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Primara — Medical Marketing West Palm Beach | Primara",
  description:
    "Contact Primara in West Palm Beach, FL. Request a free practice audit or call (561) 291-2681. We respond within one business day.",
  alternates: { canonical: "https://primara.com/contact" },
  openGraph: {
    title: "Contact Primara — Medical Marketing West Palm Beach | Primara",
    description:
      "Contact Primara in West Palm Beach, FL. Request a free practice audit or call (561) 291-2681.",
    type: "website",
    url: "https://primara.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>Contact</li>
        </ol>
      </nav>

      {/* Page H1 */}
      <div className="mx-auto max-w-content px-6 lg:px-8 pt-8 pb-4">
        <h1
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-text)" }}
        >
          Contact Primara in West Palm Beach
        </h1>
        <p className="mt-3 text-lg" style={{ color: "var(--color-text-muted)" }}>
          Liam Costello and Gio LaRoche respond within one business day.{" "}
          <a href="tel:+15612912681" className="underline hover:opacity-70" style={{ color: "var(--color-accent)" }}>
            (561) 291-2681
          </a>
        </p>
      </div>

      {/* Reuse the homepage contact section (CTA banner + form) */}
      <ContactSection />
    </main>
  );
}
