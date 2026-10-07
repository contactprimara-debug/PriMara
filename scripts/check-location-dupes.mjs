// Build-time guard: no two /locations/ pages may target the same service + city.
//
// WHY (2026-10-07): the hand-built pages under app/locations/<service>-<city>/
// and the data-driven city matrix (lib/locations-*.ts -> app/locations/[slug])
// were authored separately and only checked for SLUG collisions. The slugs
// differ (medspas-west-palm-beach vs west-palm-beach-medspa-marketing), so
// three service+city pairs shipped twice, two with an identical <title>.
// This compares what the pages are ABOUT (service + city) and their titles.
//
// Fails (exit 1) on: duplicate <title> across location pages; two routable
// pages with the same service+city; a merged "from" slug that is still
// routable, in the sitemap, or linked internally; a merged "to" that is not
// routable or not in the sitemap. Run via `npm run check`.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), "utf8");
const errors = [];

const merges = JSON.parse(read("lib/location-merges.json"));
const mergedFrom = new Set(merges.map((m) => m.from));

// ---- data-driven pages: slug + metaTitle from lib/locations-*.ts
const pages = []; // { slug, title, src }
for (const f of readdirSync(join(root, "lib")).filter((f) => /^locations-.*\.ts$/.test(f))) {
  const s = read(`lib/${f}`);
  const re = /slug:\s*"([^"]+)",[\s\S]*?metaTitle:\s*(?:\n\s*)?"([^"]+)"/g;
  let m;
  while ((m = re.exec(s))) pages.push({ slug: m[1], title: m[2], src: `lib/${f}` });
}
// ---- hand-built pages: app/locations/<dir>/page.tsx
for (const d of readdirSync(join(root, "app/locations"))) {
  const p = join(root, "app/locations", d, "page.tsx");
  if (d.startsWith("[") || !statSync(join(root, "app/locations", d)).isDirectory() || !existsSync(p)) continue;
  const t = /title:\s*\n?\s*"([^"]+)"/.exec(readFileSync(p, "utf8"));
  pages.push({ slug: d, title: t ? t[1] : "", src: `app/locations/${d}` });
}

// duplicate slugs
const bySlug = new Map();
for (const p of pages) bySlug.set(p.slug, [...(bySlug.get(p.slug) || []), p.src]);
for (const [slug, srcs] of bySlug) if (srcs.length > 1) errors.push(`slug "${slug}" defined twice: ${srcs.join(", ")}`);

// duplicate titles
const byTitle = new Map();
for (const p of pages) if (p.title) byTitle.set(p.title, [...(byTitle.get(p.title) || []), p.slug]);
for (const [t, slugs] of byTitle) if (slugs.length > 1) errors.push(`duplicate <title> "${t}": ${slugs.join(", ")}`);

// same service + city
const SERVICE_ALIASES = { medspa: "medspas", medspas: "medspas", dental: "dental", "dental-practices": "dental", "meta-ads": "meta-ads" };
const cityList = [...new Set(pages.map((p) => /^(.+)-(?:medspa|dental|meta-ads)-marketing$/.exec(p.slug)?.[1]).filter(Boolean))];
const byKey = new Map();
for (const p of pages) {
  let svc, city;
  let m = /^(.+)-(medspa|dental|meta-ads)-marketing$/.exec(p.slug);
  if (m) { city = m[1]; svc = m[2]; }
  else {
    m = /^(medspas|dental-practices|meta-ads)-(.+)$/.exec(p.slug);
    if (m && cityList.includes(m[2])) { svc = m[1]; city = m[2]; }
  }
  if (!svc) continue;
  const key = `${SERVICE_ALIASES[svc]} + ${city}`;
  byKey.set(key, [...(byKey.get(key) || []), p.slug]);
}
for (const [k, slugs] of byKey) if (slugs.length > 1) errors.push(`same service+city (${k}) served by: ${slugs.join(", ")}`);

// merges
const sitemap = read("app/sitemap.ts");
const slugSet = new Set(pages.map((p) => p.slug));
for (const m of merges) {
  if (slugSet.has(m.from)) errors.push(`merged slug "${m.from}" is still routable`);
  if (sitemap.includes(`/locations/${m.from}\``)) errors.push(`merged slug "${m.from}" is still in sitemap.ts`);
  if (!slugSet.has(m.to)) errors.push(`merge target "${m.to}" is not a routable page`);
  if (!sitemap.includes(`/locations/${m.to}\``)) errors.push(`merge target "${m.to}" missing from sitemap.ts`);
}
// no internal links to merged slugs
function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|mdx?)$/.test(e)) out.push(p);
  }
  return out;
}
for (const d of ["app", "lib", "components"]) {
  for (const f of walk(join(root, d))) {
    const s = readFileSync(f, "utf8");
    for (const from of mergedFrom) if (s.includes(`/locations/${from}`) && !f.endsWith("sitemap.ts")) errors.push(`${f.replace(root, "")} links to merged slug ${from}`);
  }
}

if (errors.length) {
  console.error("check-location-dupes FAILED:\n - " + errors.join("\n - "));
  process.exit(1);
}
console.log(`check-location-dupes OK: ${pages.length} location pages, ${byKey.size} service+city keys, ${merges.length} merges`);
