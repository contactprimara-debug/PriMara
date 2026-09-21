// Generates lib/lastmod.json — the real last-modified date of every source file
// that backs a sitemap URL, taken from git (not the build clock).
//
// WHY (2026-09-21, indexing audit): app/sitemap.ts stamped `new Date()` on all
// 266 URLs, so every crawl saw all 266 change at once. That is noise, and Google
// treats a sitemap whose lastmod is always "now" as having no lastmod at all.
//
// Run via `npm run lastmod` (wired into `npm run check`) and COMMIT the JSON —
// Vercel builds must not depend on git history being present.
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "lib", "components"];
const files = [];
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|json)$/.test(e.name)) files.push(p);
  }
};
roots.forEach(walk);

const out = {};
for (const f of files) {
  let d = "";
  try {
    d = execSync(`git log -1 --format=%cI -- "${f}"`, { encoding: "utf8" }).trim();
  } catch {}
  if (!d) d = statSync(f).mtime.toISOString();
  out[f] = d.slice(0, 10);
}

writeFileSync("lib/lastmod.json", JSON.stringify(out, null, 2) + "\n");
console.log(`lastmod: ${Object.keys(out).length} files`);
