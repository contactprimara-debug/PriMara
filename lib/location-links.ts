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
 * One location page per real city, in region order — but rotated across the
 * six verticals so no single vertical owns the sitewide footer.
 *
 * WHY ROTATION (2026-09-21, indexing audit): the previous rule took the first
 * vertical that had the city, in a fixed "search value" order, so primary care
 * won 33 of 35 footer slots and medspa / dental / meta-ads got ZERO sitewide
 * links. Those three verticals are the ones sitting at 7/33, 2/33 and 1/4
 * indexed. The city-per-slot budget is unchanged (still one link per city —
 * six verticals x 33 cities in a footer would be link spam); only WHICH
 * vertical fills each slot changed, so the same link equity is now spread
 * evenly instead of concentrated.
 *
 * Still derived, never hardcoded: a slug here always comes from a lib file, so
 * it cannot point at a page that does not exist, and a city added to any lib
 * file appears on the next build with no edit here.
 */
const VERTICALS: { name: string; locations: { slug: string; city: string }[] }[] = [
  { name: "Primary care", locations: primaryCareLocations },
  { name: "Mental health", locations: mentalHealthLocations },
  { name: "Men's health", locations: mensHealthLocations },
  { name: "Medspa", locations: medspaLocations },
  { name: "Dental", locations: dentalLocations },
  { name: "Meta Ads", locations: metaAdsLocations },
];

export const footerCities: {
  city: string;
  slug: string;
  region: string;
  vertical: string;
}[] = (() => {
  const ordered = REGIONS.flatMap((region) =>
    region.cities.map((city) => ({ city, region: region.name }))
  );
  // Per-vertical running count, so rotation self-corrects when a vertical has
  // no page for a city: we always pick the eligible vertical that currently
  // holds the FEWEST footer slots, tie-broken by the rotation offset. That
  // keeps the distribution flat even though coverage differs (33/27/23/33/33/33).
  const used = new Map<string, number>(VERTICALS.map((v) => [v.name, 0]));

  return ordered.flatMap(({ city, region }, i) => {
    const eligible = VERTICALS.map((v, vi) => ({
      v,
      vi,
      match: v.locations.find((loc) => loc.city === city),
    })).filter((e) => e.match);

    // A city in REGIONS with no page in any vertical yet — emit nothing rather
    // than a dead link.
    if (eligible.length === 0) return [];

    eligible.sort((a, b) => {
      const ua = used.get(a.v.name) ?? 0;
      const ub = used.get(b.v.name) ?? 0;
      if (ua !== ub) return ua - ub;
      // Rotation offset: shifts the starting vertical city by city so the
      // tie-break does not always fall to the same list.
      const ra = (a.vi - i + VERTICALS.length * 8) % VERTICALS.length;
      const rb = (b.vi - i + VERTICALS.length * 8) % VERTICALS.length;
      return ra - rb;
    });

    const pick = eligible[0];
    used.set(pick.v.name, (used.get(pick.v.name) ?? 0) + 1);
    return [
      { city, slug: pick.match!.slug, region, vertical: pick.v.name },
    ];
  });
})();

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
