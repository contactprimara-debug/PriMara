// ── Primara structured data ────────────────────────────────────────────────
//
// Schema type rationale:
//   Primara is a marketing agency — not a MedicalOrganization.
//   ProfessionalService is the most specific applicable schema.org type.
//
// AggregateRating: activated — 47 reviews / 5.0 stars (Google, verified).
// Person schema: activated — exported for /about page.
// geo: activated — West Palm Beach office coordinates.
// openingHours: activated — Mo–Th 08:00–17:00, Fr 08:00–13:00.
// ──────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://primara365.com";

// ── 1. Primary business schema — injected on every page ───────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Primara",
  url: SITE_URL,
  telephone: "+15612912681",
  email: "contactprimara@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "West Palm Beach, FL",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7153,
    longitude: -80.0534,
  },
  openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-13:00"],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      addressLocality: "Florida",
      addressRegion: "FL",
    },
    geoRadius: "50000",
  },
  description:
    "Primara is a digital marketing agency in Florida specializing in helping independent, physician-owned medical practices grow their patient base through honest, measurable, and HIPAA-aware digital marketing.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
  },
  founder: [
    {
      "@type": "Person",
      name: "Liam Costello",
      jobTitle: "Co-Founder",
      address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
    },
    {
      "@type": "Person",
      name: "Gio LaRoche",
      jobTitle: "Co-Founder",
      address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
    },
  ],
  knowsAbout: [
    "Medical Practice Marketing",
    "Google Business Profile Management",
    "Local SEO for Medical Practices",
    "Healthcare Digital Marketing",
    "Patient Acquisition",
  ],
};

// ── 2. AggregateRating — standalone block for homepage JSON-LD ─────────────
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "Primara",
    url: SITE_URL,
  },
  ratingValue: "5.0",
  reviewCount: "47",
  bestRating: "5",
};

// ── 3. Person schemas — injected on /about page ───────────────────────────
export const liamSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liam Costello",
  jobTitle: "Co-Founder",
  worksFor: { "@type": "LocalBusiness", name: "Primara", url: SITE_URL },
  address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
  knowsAbout: [
    "Digital Marketing",
    "Medical Practice Marketing",
    "Google Business Profile",
    "Local SEO",
  ],
};

export const gioSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gio LaRoche",
  jobTitle: "Co-Founder",
  worksFor: { "@type": "LocalBusiness", name: "Primara", url: SITE_URL },
  address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
  knowsAbout: [
    "Digital Marketing",
    "Medical Practice Marketing",
    "Google Business Profile",
    "Local SEO",
  ],
};

// ── 4. Primary Care vertical schema ─────────────────────────────────────
export const primaryCareSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "ProfessionalService"],
  name: "Primara — Primary Care Digital Marketing",
  url: `${SITE_URL}/primary-care`,
  telephone: "+15612912681",
  email: "contactprimara@gmail.com",
  medicalSpecialty: "PrimaryCare",
  areaServed: { "@type": "State", name: "Florida" },
  description:
    "Primara helps independent primary care physicians in Florida rank higher on Google Maps, fill their schedule, and outrank hospital systems — without a marketing department.",
  provider: {
    "@type": "ProfessionalService",
    name: "Primara",
    url: SITE_URL,
  },
};

// ── 5. Mental Health vertical schema ─────────────────────────────────────
export const mentalHealthSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "ProfessionalService"],
  name: "Primara — Mental Health Practice Digital Marketing",
  url: `${SITE_URL}/mental-health`,
  telephone: "+15612912681",
  email: "contactprimara@gmail.com",
  medicalSpecialty: "Psychiatric",
  areaServed: { "@type": "State", name: "Florida" },
  description:
    "Primara helps independent therapists, psychologists, and group mental health practices in Florida rank higher on Google and grow without relying on Psychology Today or insurance directories.",
  provider: {
    "@type": "ProfessionalService",
    name: "Primara",
    url: SITE_URL,
  },
};

// ── Helper: wrap any schema object as a JSON-LD string ───────────────────
export function toJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
