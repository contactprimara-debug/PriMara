// Internal-linking sources for the location system.
//
// WHY THIS EXISTS (SEO, 2026-09-17, site-health #186):
// 153 of 266 sitemap URLs were not indexed. Two measured causes, both about
// internal links, both fixed from this file:
//
//   1. Only SIX location pages were linked from every page (the Footer's
//      hardcoded Locations column). The /locations hub does link 182 of them,
//      so the city pages were depth-2, not orphaned — but the whole 205-page
//      set funnelled through one hub page. `footerCities` widens that to one
//      link per real city, site-wide, at depth 1.
//
//   2. The 23 service+city pages under app/locations/* were TRUE ORPHANS:
//      present in sitemap.xml, linked from nowhere. Verified by diffing
//      sitemap.xml against every href on the live /locations hub. They are
//      hand-built page directories with no data file behind them, so the hub's
//      data-driven grid could never have found them. `SERVICE_CITY_PAGES`
//      gives them their first inbound links.
//
// Keep both lists derived or explicit — never let them drift from what is
// actually routable. A link here that 404s is worse than no link.

import { REGIONS } from "@/lib/locations-regions";
import { primaryCareLocations } from "@/lib/locations-primary";
import { mentalHealthLocations } from "@/lib/locations-mental";
import { mensHealthLocations } from "@/lib/locations-mens-health";
import { medspaLocations } from "@/lib/locations-medspas";
import { dentalLocations } from "@/lib/locations-dental";
import { metaAdsLocations } from "@/lib/locations-meta-ads";

/**
 * One location page per real city, in region order.
 *
 * Derived, not hardcoded: for each city in REGIONS we take the first vertical
 * that actually has a page for it, in descending search-value order (primary
 * care and mental health are the highest-volume verticals we publish). So this
 * list can never point at a slug that no longer exists, and a city added to a
 * lib file shows up in the footer on the next build with no edit here.
 *
 * Deliberately ONE page per city: the point is crawl reach across cities, not
 * volume of links. Six verticals x 33 cities in a footer would be link spam.
 */
const VERTICALS_BY_SEARCH_VALUE: { slug: string; city: string }[][] = [
  primaryCareLocations,
  mentalHealthLocations,
  mensHealthLocations,
  medspaLocations,
  dentalLocations,
  metaAdsLocations,
];

export const footerCities: { city: string; slug: string; region: string }[] =
  REGIONS.flatMap((region) =>
    region.cities.flatMap((city) => {
      for (const vertical of VERTICALS_BY_SEARCH_VALUE) {
        const match = vertical.find((loc) => loc.city === city);
        if (match) return [{ city, slug: match.slug, region: region.name }];
      }
      // A city in REGIONS with no page in any vertical yet — emit nothing
      // rather than a dead link.
      return [];
    })
  );

/**
 * The 23 service+city pages under app/locations/*, grouped by service.
 *
 * Explicit rather than derived because these are hand-built page directories
 * with no data file to read. Every slug below was taken from `ls app/locations`
 * and cross-checked against sitemap.xml — if a page here is ever deleted, the
 * hub renders a dead link, so delete the entry in the same commit.
 */
export const SERVICE_CITY_PAGES: { service: string; pages: { label: string; slug: string }[] }[] = [
  {
    service: "Medical SEO",
    pages: [
      { label: "Florida", slug: "medical-seo-florida" },
      { label: "West Palm Beach", slug: "medical-seo-west-palm-beach" },
      { label: "Lakeland", slug: "medical-seo-lakeland" },
    ],
  },
  {
    service: "Google Business Profile",
    pages: [
      { label: "Florida", slug: "gbp-optimization-florida" },
      { label: "West Palm Beach", slug: "gbp-optimization-west-palm-beach" },
      { label: "Lakeland", slug: "gbp-optimization-lakeland" },
    ],
  },
  {
    service: "Google Ads Management",
    pages: [
      { label: "Florida", slug: "google-ads-management-florida" },
      { label: "West Palm Beach", slug: "google-ads-management-west-palm-beach" },
      { label: "Lakeland", slug: "google-ads-management-lakeland" },
    ],
  },
  {
    service: "Meta Ads",
    pages: [
      { label: "Florida", slug: "meta-ads-florida" },
      { label: "West Palm Beach", slug: "meta-ads-west-palm-beach" },
      { label: "For Medspas", slug: "meta-ads-for-medspas" },
      { label: "For Dental Practices", slug: "meta-ads-for-dental-practices" },
    ],
  },
  {
    service: "Website Design",
    pages: [
      { label: "Florida", slug: "medical-website-design-florida" },
      { label: "West Palm Beach", slug: "medical-website-design-west-palm-beach" },
    ],
  },
  {
    service: "Review Generation",
    pages: [
      { label: "Florida", slug: "review-generation-florida" },
      { label: "West Palm Beach", slug: "review-generation-west-palm-beach" },
    ],
  },
  {
    service: "AI SEO",
    pages: [
      { label: "Florida", slug: "ai-seo-florida" },
      { label: "West Palm Beach", slug: "ai-seo-west-palm-beach" },
    ],
  },
  {
    service: "By Practice Type",
    pages: [
      { label: "Medspas in Florida", slug: "medspas-florida" },
      { label: "Medspas in West Palm Beach", slug: "medspas-west-palm-beach" },
      { label: "Dental in Florida", slug: "dental-practices-florida" },
      { label: "Dental in West Palm Beach", slug: "dental-practices-west-palm-beach" },
    ],
  },
];
