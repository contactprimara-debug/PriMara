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
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
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

const DRY = process.env.LASTMOD_DRY === "1"; // scripts/check-lastmod.mjs: compute only, print slug dates as JSON
if (!DRY) {
  writeFileSync("lib/lastmod.json", JSON.stringify(out, null, 2) + "\n");
  console.log(`lastmod: ${Object.keys(out).length} files`);
}

// ── Per-slug dates for data-driven pages (guides, blog, case studies, city pages) ──
// WHY (2026-10-09): lib/lastmod.ts used to map every /guides/* URL to the single
// file lib/guides.ts, whose git date moves every day the page factory adds a batch,
// so all ~124 guides claimed to change daily (126 URLs @10-09, 106 @10-08). Honest
// rule (PAGE-STANDARD 14a.3): a page's lastmod is the last commit whose diff changed
// THAT slug's own object text (body, FAQ, an appended inbound-link sentence...).
// We walk history oldest-first, keep the last-seen text per slug (globally, so moving
// an object between files is not a change), and stamp the commit date on any change.
// Uncommitted edits to the working tree get today's date for the slugs they change.
const KINDS = [
  [/^lib\/guides(-[\w-]+)?\.ts$/, "guides"],
  [/^lib\/blog\.ts$/, "blog"],
  [/^lib\/blog-faqs\.ts$/, "blog-faq"], // keyed `"slug": [` — lastmod takes the later of blog + blog-faq
  [/^lib\/case-studies\.ts$/, "case-studies"],
  [/^lib\/locations-(primary|mental)\.ts$/, "locations"],
];
const kindOf = (f) => (KINDS.find(([re]) => re.test(f)) || [])[1];
const dataFiles = readdirSync("lib").map((n) => `lib/${n}`).filter(kindOf);

const segments = (text, kind) => {
  const re = kind === "blog-faq" ? /^  "([^"]+)": \[/gm : /["']?slug["']?:\s*"([^"]+)"/g;
  const hits = [];
  let m;
  while ((m = re.exec(text))) hits.push([m[1], m.index]);
  const res = {};
  hits.forEach(([slug, idx], i) => {
    const end = i + 1 < hits.length ? hits[i + 1][1] : text.length;
    res[slug] = text.slice(idx, end);
  });
  return res;
};
const git = (cmd) => execSync(cmd, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 });

const seen = {}; // `${kind}/${slug}` -> last text
const slugDates = {};
const apply = (file, text, date) => {
  const kind = kindOf(file);
  for (const [slug, seg] of Object.entries(segments(text, kind))) {
    const key = `${kind}/${slug}`;
    if (seen[key] !== seg) {
      seen[key] = seg;
      slugDates[key] = date;
    }
  }
};
const commits = git(`git log --reverse --no-merges --format=%H%x09%cI -- ${dataFiles.map((f) => `"${f}"`).join(" ")}`)
  .trim().split("\n").filter(Boolean);
for (const line of commits) {
  const [h, iso] = line.split("\t");
  const touched = git(`git diff-tree --no-commit-id --name-only -r --root ${h}`).split("\n").filter((f) => kindOf(f));
  for (const f of touched) {
    let text = "";
    try { text = git(`git show ${h}:"${f}"`); } catch { continue; }
    apply(f, text, iso.slice(0, 10));
  }
}
// Working-tree changes not yet committed -> today.
const today = new Date().toISOString().slice(0, 10);
for (const f of dataFiles) apply(f, readFileSync(f, "utf8"), today);

const sorted = Object.fromEntries(Object.entries(slugDates).sort(([a], [b]) => a.localeCompare(b)));
if (DRY) {
  console.log(JSON.stringify(sorted));
} else {
  writeFileSync("lib/slug-lastmod.json", JSON.stringify(sorted, null, 2) + "\n");
  console.log(`slug-lastmod: ${Object.keys(sorted).length} slugs`);
}
