import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { toJsonLd, SITE_URL } from "@/lib/schema";

const contactLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Primara",
  url: SITE_URL,
  logo: `${SITE_URL}/primara-logo-square.png`,
  image: `${SITE_URL}/primara-logo.png`,
  telephone: "+15612912681",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
};

export const metadata: Metadata = {
  title: "Contact Primara — Healthcare Marketing for Independent Practices | Primara",
  description:
    "Contact Primara. Request a free practice audit for your independent primary care or mental health practice — anywhere in the US. Call (561) 291-2681. We respond within 24 hours.",
  alternates: { canonical: "https://primara365.com/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Primara — Healthcare Marketing for Independent Practices | Primara",
    description:
      "Request a free practice audit from Primara. Primary care and mental health practices nationwide. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/contact",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(contactLocalBusinessSchema as Record<string, unknown>) }} />
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
          Contact Primara
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
