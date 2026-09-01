import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

// Add new pages here as they are built.
// Geographic and service sub-pages go at the bottom with lower priority.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // ── Priority 1.0 — Homepage ──────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Priority 0.9 — Vertical landing pages (Men's Health first) ───────
    {
      url: `${SITE_URL}/mens-health`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/primary-care`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/mental-health`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },

    // ── Priority 0.9 — Core action pages ────────────────────────────────
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/the-audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/mental-health-audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Priority 0.8 — Pillar / category pages ───────────────────────────
    {
      url: `${SITE_URL}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/motivation`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // ── Priority 0.9 — Main service pages (SEO + Ads + AI SEO) ───────────
    { url: `${SITE_URL}/services/seo`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/services/google-ads`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/services/ai-seo`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },

    // ── Priority 0.7 — Service cluster pages ────────────────────────────
    {
      url: `${SITE_URL}/services/google-business-profile`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/medical-practice-website-design`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/local-seo-for-medical-practices`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/online-reputation-management`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/patient-acquisition-ads`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/digital-marketing-for-independent-medical-practices`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Priority 0.8 — Package detail pages (high-intent conversion) ─────
    {
      url: `${SITE_URL}/packages/foundation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/packages/visibility`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Priority 0.9 — Assessment landing (lead gen) ─────────────────────
    {
      url: `${SITE_URL}/assessment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Priority 0.75 — Specialty hub ────────────────────────────────────
    {
      url: `${SITE_URL}/specialties`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Priority 0.7 — Men's health specialty pages ───────────────────────
    {
      url: `${SITE_URL}/specialties/trt-clinics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/mens-wellness-clinics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/urology-practices`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/ed-treatment-clinics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Priority 0.7 — Specialty landing pages ────────────────────────────
    {
      url: `${SITE_URL}/specialties/family-medicine`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/internal-medicine`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/pediatrics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/geriatrics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/concierge-medicine`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/specialties/direct-primary-care`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Priority 0.9 — Hub pages (blog, locations, faq, results) ────────
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/results`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },

    // ── Priority 0.8 — Blog posts ────────────────────────────────────────
    { url: `${SITE_URL}/blog/trt-clinics-vs-national-telehealth-brands-local-seo`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/gbp-categories-for-mens-health-clinics`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/how-men-search-for-trt-and-ed-treatment`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/why-your-medical-practice-isnt-showing-up-on-google-maps`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/gbp-categories-for-primary-care-doctors`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/how-many-google-reviews-does-a-medical-practice-need`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/psychology-today-vs-google-seo-for-therapists`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/what-is-local-seo-for-doctors`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/hipaa-compliant-google-review-responses`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/how-long-does-local-seo-take-for-medical-practices`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/google-business-profile-for-mental-health-therapists`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },

    // ── Priority 0.9 — Men's health city pages ────────────────────────────
    { url: `${SITE_URL}/locations/miami-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fort-lauderdale-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/boca-raton-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/west-palm-beach-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/palm-beach-gardens-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/delray-beach-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/coral-gables-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/aventura-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/tampa-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-petersburg-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/clearwater-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/brandon-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/lakeland-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orlando-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/kissimmee-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/winter-park-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/altamonte-springs-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/sanford-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-beach-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-augustine-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orange-park-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fernandina-beach-mens-health-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },

    // ── Priority 0.9 — Primary care city pages ───────────────────────────
    { url: `${SITE_URL}/locations/miami-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fort-lauderdale-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/boca-raton-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/west-palm-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/palm-beach-gardens-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/delray-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/boynton-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/pompano-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/coral-springs-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jupiter-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/hialeah-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/doral-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/kendall-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/aventura-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/pembroke-pines-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/hollywood-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/port-st-lucie-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/stuart-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/tampa-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-petersburg-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/clearwater-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/brandon-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/lakeland-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orlando-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/kissimmee-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/winter-park-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/altamonte-springs-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/sanford-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-augustine-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orange-park-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fernandina-beach-fl`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },

    // ── Priority 0.9 — Mental health city pages ──────────────────────────
    { url: `${SITE_URL}/locations/miami-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fort-lauderdale-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/boca-raton-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/west-palm-beach-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/palm-beach-gardens-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/delray-beach-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/miami-beach-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/coral-gables-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/aventura-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/pembroke-pines-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/hollywood-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/port-st-lucie-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/tampa-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-petersburg-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/clearwater-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/brandon-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/lakeland-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orlando-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/kissimmee-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/winter-park-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/altamonte-springs-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/sanford-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/jacksonville-beach-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/st-augustine-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/orange-park-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/locations/fernandina-beach-therapist-marketing`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },

    // ── Priority 0.8 — Service × location pages (content matrix) ─────────
    { url: `${SITE_URL}/locations/medical-seo-west-palm-beach`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/locations/medical-seo-florida`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/locations/gbp-optimization-florida`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },

    // ── Priority 0.8 — High-intent keyword pages ─────────────────────────
    { url: `${SITE_URL}/pricing`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/therapist-seo`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },

    // ── Priority 0.3 — Trust/legal pages ─────────────────────────────────
    { url: `${SITE_URL}/hipaa`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },

    // ── Priority 0.7 — Process + comparison pages ────────────────────────
    { url: `${SITE_URL}/how-it-works`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/vs`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/vs/patientpop`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/vs/webpt`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/vs/doctorlogic`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
  ];
}
