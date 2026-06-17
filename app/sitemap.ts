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

    // ── Priority 0.9 — Vertical landing pages ───────────────────────────
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

    // ── Priority 0.8 — Pillar / category pages ───────────────────────────
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
    { url: `${SITE_URL}/blog/why-your-medical-practice-isnt-showing-up-on-google-maps`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/gbp-categories-for-primary-care-doctors`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/how-many-google-reviews-does-a-medical-practice-need`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/psychology-today-vs-google-seo-for-therapists`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/what-is-local-seo-for-doctors`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/hipaa-compliant-google-review-responses`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/how-long-does-local-seo-take-for-medical-practices`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog/google-business-profile-for-mental-health-therapists`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },

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
  ];
}
