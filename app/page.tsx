import type { Metadata } from "next";
import { toJsonLd, SITE_URL } from "@/lib/schema";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Primara",
  description:
    "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
  url: SITE_URL,
  telephone: "+15612912681",
  email: "liam.costello@primara365.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/primara",
  ],
};

import MapStory from "@/components/home/MapStory";
import { ProofBand, WhoWeServe, HowWeWork, Founders, WhatWeDo } from "@/components/home/HomeSections";
import AuditOfferStrip from "@/components/AuditOfferStrip";
import ContactFinal from "@/components/ContactFinal";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
  description:
    "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
  alternates: {
    canonical: "https://primara365.com",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
    description:
      "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
    type: "website",
    url: "https://primara365.com",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'], description: "We help independent medical practices get more patients by optimizing their digital presence and running their ads." },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema as Record<string, unknown>) }}
      />
      <MapStory />
      <ProofBand />
      <WhoWeServe />
      <HowWeWork />
      <Founders />
      <WhatWeDo />
      <AuditOfferStrip />
      <ContactFinal />
    </main>
  );
}
