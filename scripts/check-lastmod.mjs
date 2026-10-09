// Guard for sitemap <lastmod> honesty (added 2026-10-09; see lib/lastmod.ts header).
// Fails when:
//  1. any data-driven page (guide/blog/case study/city) has no per-slug date, or its
//     committed date differs from what git history says by more than 1 day
//     (a day of slack covers UTC-vs-local commit dates) -- i.e. a page is claiming a
//     change that did not happen, or the JSON is stale: run `npm run lastmod`.
//  2. with >50 sitemap URLs, a single lastmod date covers more than 40% of them
//     (the 2026-10-09 defect: 126 of 254 URLs stamped "today").
import { execSync } from "node:child_process";
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const fail = [];
const fresh = JSON.parse(execSync("node scripts/gen-lastmod.mjs", { encoding: "utf8", env: { ...process.env, LASTMOD_DRY: "1" }, maxBuffer: 64 * 1024 * 1024 }));
const committed = JSON.parse(readFileSync("lib/slug-lastmod.json", "utf8"));
const day = (d) => Date.parse(d + "T00:00:00Z") / 86400000;
for (const [k, v] of Object.entries(fresh)) {
  if (!committed[k]) fail.push(`${k}: no entry in lib/slug-lastmod.json (run npm run lastmod)`);
  else if (Math.abs(day(committed[k]) - day(v)) > 1) fail.push(`${k}: committed ${committed[k]} but git history says ${v} (run npm run lastmod)`);
}

// Distribution of the real sitemap, evaluated through tsx.
const probe = join(process.cwd(), ".lastmod-probe.ts");
writeFileSync(probe, `import sitemap from "./app/sitemap";\nconsole.log(JSON.stringify(sitemap().map((e) => [e.url, new Date(e.lastModified as Date).toISOString().slice(0, 10)])));\n`);
let rows;
try {
  rows = JSON.parse(execSync(`npx -y tsx ${probe}`, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim().split("\n").pop());
} finally {
  try { execSync(`rm -f ${probe}`); } catch {}
}
const counts = {};
for (const [, d] of rows) counts[d] = (counts[d] || 0) + 1;
if (rows.length > 50) {
  for (const [d, n] of Object.entries(counts)) {
    if (n / rows.length > 0.4) fail.push(`${n}/${rows.length} sitemap URLs (${Math.round((100 * n) / rows.length)}%) share lastmod ${d} (limit 40%)`);
  }
}
console.log(`check-lastmod: ${rows.length} URLs, distribution ${JSON.stringify(counts)}`);
if (fail.length) {
  console.error("check-lastmod FAILED:\n  " + fail.join("\n  "));
  process.exit(1);
}
console.log("check-lastmod: ok");
