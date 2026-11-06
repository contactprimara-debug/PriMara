import type { Metadata } from "next";
import PgHero from "@/components/pg/PgHero";
import ContactSection from "@/components/ContactSection";
import BookingFunnelInfo from "@/components/BookingFunnelInfo";
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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(contactLocalBusinessSchema as Record<string, unknown>) }} />
      <PgHero
        id="contact-h1"
        page="contact"
        kicker="Free practice audit"
        h1="Contact Primara"
        sub="Liam Costello and Gio LaRoche respond within one business day. Tell us who you are and we look at where patients can find you today."
        primary={{ label: "Send us a message", href: "#contact-form" }}
        mark={false}
        compact
      />

      <ContactSection />

      <BookingFunnelInfo />
    </main>
  );
}
