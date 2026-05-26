// ── Primara structured data ────────────────────────────────────────────────
//
// Pre-launch checklist:
// □ Replace STREET_ADDRESS with the exact GBP street address
// □ Replace ZIP_CODE with the real ZIP
// □ Replace LATITUDE / LONGITUDE with real coordinates from Google Maps
// □ Replace OPENING_HOURS with real hours (e.g. "Mo-Fr 09:00-17:00")
// □ Add AggregateRating block to homepageSchema once real verified reviews exist
// □ Add Person schema to /about page once that page is built
//
// Schema type rationale:
//   Primara is a marketing agency — not a MedicalOrganization.
//   ProfessionalService is the most specific applicable schema.org type.
// ──────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://primara.com";

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
    // ⚠ Replace with exact GBP values before launch
    streetAddress: "PLACEHOLDER — add street address",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "PLACEHOLDER — add ZIP",
    addressCountry: "US",
  },
  // ⚠ Replace with real coordinates before launch — omitting geo until confirmed
  // geo: {
  //   "@type": "GeoCoordinates",
  //   latitude: 26.7153,
  //   longitude: -80.0534,
  // },
  // ⚠ Replace with real hours before launch
  // openingHours: ["Mo-Fr 09:00-17:00"],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
    },
    geoRadius: "50000",
  },
  description:
    "Primara is a digital marketing agency in West Palm Beach, FL specializing in helping independent, physician-owned primary care practices grow their patient base through honest, measurable, and HIPAA-aware digital marketing.",
  founder: [
    { "@type": "Person", name: "Liam Costello" },
    { "@type": "Person", name: "Gio LaRoche" },
  ],
  knowsAbout: [
    "Medical Practice Marketing",
    "Google Business Profile Management",
    "Local SEO for Medical Practices",
    "Healthcare Digital Marketing",
    "Patient Acquisition",
  ],
};

// ── 2. AggregateRating — DO NOT add until real verified reviews exist ──────
// export const aggregateRatingSchema = {
//   "@context": "https://schema.org",
//   "@type": "AggregateRating",
//   itemReviewed: { "@type": "LocalBusiness", name: "Primara" },
//   ratingValue: "X.X",      // ← replace with real average
//   reviewCount: "XX",        // ← replace with real count
//   bestRating: "5",
// };

// ── 3. Person schema — add to /about page once built ─────────────────────
// export const liamSchema = {
//   "@context": "https://schema.org",
//   "@type": "Person",
//   name: "Liam Costello",
//   jobTitle: "Co-Founder",
//   worksFor: { "@type": "LocalBusiness", name: "Primara" },
//   address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
// };
// export const gioSchema = {
//   "@context": "https://schema.org",
//   "@type": "Person",
//   name: "Gio LaRoche",
//   jobTitle: "Co-Founder",
//   worksFor: { "@type": "LocalBusiness", name: "Primara" },
//   address: { "@type": "PostalAddress", addressLocality: "West Palm Beach", addressRegion: "FL" },
// };

// ── Helper: wrap any schema object as a JSON-LD string ───────────────────
export function toJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
