// Real per-URL <lastmod> for the sitemap.
//
// WHY (2026-09-21, indexing audit): app/sitemap.ts stamped one `new Date()` on
// all 266 URLs, so every fetch claimed the entire site had just changed. Google
// discounts a sitemap that behaves that way, and 41 of our URLs were sitting in
// "Discovered – currently not indexed". Dates below come from git (scripts/
// gen-lastmod.mjs writes lib/lastmod.json; committed so Vercel needs no history).
import lastmodMap from "@/lib/lastmod.json";
import { SITE_URL } from "@/lib/schema";
import { primaryCareLocations } from "@/lib/locations-primary";
import { mentalHealthLocations } from "@/lib/locations-mental";
import { mensHealthLocations } from "@/lib/locations-mens-health";
import { medspaLocations } from "@/lib/locations-medspas";
import { dentalLocations } from "@/lib/locations-dental";
import { metaAdsLocations } from "@/lib/locations-meta-ads";

const map = lastmodMap as Record<string, string>;

// A data-driven city page's content lives in its lib file, not in the shared
// template, so that file's commit date is the honest answer for all of them.
const SLUG_SOURCE: Record<string, string> = {};
const register = (locs: { slug: string }[], file: string) => {
  for (const loc of locs) SLUG_SOURCE[loc.slug] = file;
};
register(primaryCareLocations, "lib/locations-primary.ts");
register(mentalHealthLocations, "lib/locations-mental.ts");
register(mensHealthLocations, "lib/locations-mens-health.ts");
register(medspaLocations, "lib/locations-medspas.ts");
register(dentalLocations, "lib/locations-dental.ts");
register(metaAdsLocations, "lib/locations-meta-ads.ts");

const FALLBACK = map["app/sitemap.ts"] ?? "2026-09-21";

/** Source file that actually backs a sitemap URL, or null if we can't tell. */
function sourceFor(path: string): string | null {
  if (path === "" || path === "/") return "app/page.tsx";
  const clean = path.replace(/^\/+|\/+$/g, "");
  const locMatch = clean.match(/^locations\/(.+)$/);
  if (locMatch) {
    const slug = locMatch[1];
    if (SLUG_SOURCE[slug]) return SLUG_SOURCE[slug];
    return `app/locations/${slug}/page.tsx`;
  }
  // Blog posts are data in lib/blog.ts, not one file per route.
  if (clean.startsWith("blog/")) return "lib/blog.ts";
  return `app/${clean}/page.tsx`;
}

/** ISO date (YYYY-MM-DD) for a full sitemap URL. Never throws. */
export function lastmodForUrl(url: string): Date {
  const path = url.startsWith(SITE_URL) ? url.slice(SITE_URL.length) : url;
  const src = sourceFor(path);
  const iso = (src && map[src]) || FALLBACK;
  return new Date(`${iso}T00:00:00.000Z`);
}
