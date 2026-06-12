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

    // ── Priority 0.4 — Legal / compliance pages ──────────────────────────
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/hipaa`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // ── Priority 0.6 — Geographic / neighborhood pages (add as built) ────
    // { url: `${SITE_URL}/medical-marketing-lake-worth`, ... },
  ];
}
