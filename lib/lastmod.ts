// Real per-URL <lastmod> for the sitemap.
//
// WHY (2026-09-21, indexing audit): app/sitemap.ts stamped one `new Date()` on
// all 266 URLs, so every fetch claimed the entire site had just changed. Google
// discounts a sitemap that behaves that way, and 41 of our URLs were sitting in
// "Discovered – currently not indexed". Dates below come from git (scripts/
// gen-lastmod.mjs writes lib/lastmod.json; committed so Vercel needs no history).
import lastmodMap from "@/lib/lastmod.json";
import slugMap from "@/lib/slug-lastmod.json";
import { SITE_URL } from "@/lib/schema";
import { primaryCareLocations } from "@/lib/locations-primary";
import { mentalHealthLocations } from "@/lib/locations-mental";

const map = lastmodMap as Record<string, string>;
// Per-slug dates for data-driven pages (guides, blog, case studies, city pages):
// the last commit that changed THAT slug's own object. Built by scripts/gen-lastmod.mjs.
// Do NOT map these URLs back to one shared file — that made all ~124 guides claim a
// change every day the page factory added a batch (2026-10-09).
const slugDates = slugMap as Record<string, string>;
const latestOf = (prefix: string): string | null => {
  let best: string | null = null;
  for (const [k, v] of Object.entries(slugDates)) {
    if (k.startsWith(prefix) && (!best || v > best)) best = v;
  }
  return best;
};

// A data-driven city page's content lives in its lib file, not in the shared
// template, so that file's commit date is the honest answer for all of them.
const SLUG_SOURCE: Record<string, string> = {};
const register = (locs: { slug: string }[], file: string) => {
  for (const loc of locs) SLUG_SOURCE[loc.slug] = file;
};
register(primaryCareLocations, "lib/locations-primary.ts");
register(mentalHealthLocations, "lib/locations-mental.ts");

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
  if (clean.startsWith("blog/")) return "lib/blog.ts"; // fallback only; perSlugIso wins
  // Same for guides — the copy lives in lib/guides-*.ts, not in the route file.
  if (clean.startsWith("guides/")) return "lib/guides.ts"; // fallback only; perSlugIso wins
  if (clean.startsWith("case-studies/")) return "lib/case-studies.ts";
  return `app/${clean}/page.tsx`;
}

/** ISO date (YYYY-MM-DD) for a full sitemap URL. Never throws. */
export function lastmodForUrl(url: string): Date {
  const path = url.startsWith(SITE_URL) ? url.slice(SITE_URL.length) : url;
  const clean = path.replace(/^\/+|\/+$/g, "");
  const iso = perSlugIso(clean);
  if (iso) return new Date(`${iso}T00:00:00.000Z`);
  return fileLastmod(path);
}

/** Per-slug (or hub = newest child) date for guides, blog, case studies, city pages. */
function perSlugIso(clean: string): string | null {
  for (const kind of ["guides", "blog", "case-studies"]) {
    if (clean === kind) return latestOf(`${kind}/`);
    if (clean.startsWith(`${kind}/`)) {
      let d = slugDates[clean] ?? null;
      if (kind === "blog") {
        const f = slugDates[`blog-faq/${clean.slice(5)}`];
        if (f && (!d || f > d)) d = f;
      }
      return d;
    }
  }
  if (clean.startsWith("locations/") && slugDates[clean]) return slugDates[clean];
  return null;
}

function fileLastmod(path: string): Date {
  const src = sourceFor(path);
  let iso = (src && map[src]) || FALLBACK;
  // Blog posts: the FAQ block lives in lib/blog-faqs.ts — take the later of the two sources.
  if (src === "lib/blog.ts") {
    const faqIso = map["lib/blog-faqs.ts"];
    if (faqIso && faqIso > iso) iso = faqIso;
  }
  return new Date(`${iso}T00:00:00.000Z`);
}
