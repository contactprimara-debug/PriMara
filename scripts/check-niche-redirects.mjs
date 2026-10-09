// Guard for the 2026-10-08 niche merge (primary care + mental health only).
// Fails (exit 1) when: a retired URL is still routable or in the sitemap; a
// redirect target is itself retired (chain) or not a real route; a redirect
// source/target is duplicated; a source file links internally to a retired URL
// (that link would be a 301 hop). Run via `npm run check`.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), "utf8");
const errors = [];
const reds = JSON.parse(read("lib/niche-redirects.json"));
const from = new Set(reds.map((r) => r.from_));
if (from.size !== reds.length) errors.push("duplicate redirect source");
const sitemap = read("app/sitemap.ts");
const routable = (p) => {
  const parts = p.replace(/^\//, "").split("/");
  return existsSync(join(root, "app", ...parts, "page.tsx"));
};
for (const r of reds) {
  if (from.has(r.to)) errors.push(`chain: ${r.from_} -> ${r.to} (target is retired)`);
  if (routable(r.from_)) errors.push(`${r.from_} still has a page.tsx`);
  if (sitemap.includes("${SITE_URL}" + r.from_ + "`")) errors.push(`${r.from_} still in sitemap.ts`);
  const dynamicOk = /^\/(locations|guides|blog|case-studies)\/[a-z0-9-]+$/.test(r.to) && !routable(r.to);
  if (!routable(r.to) && !dynamicOk && r.to !== "/") errors.push(`target not routable: ${r.to}`);
}
function walk(d, out = []) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (f === "node_modules" || f.startsWith(".")) continue;
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|json)$/.test(f) && !/niche-redirects|location-merges|lastmod/.test(f)) out.push(p);
  }
  return out;
}
for (const f of [...walk(join(root, "app")), ...walk(join(root, "components")), ...walk(join(root, "lib"))]) {
  const t = readFileSync(f, "utf8");
  for (const s of from) {
    const re = new RegExp("[\"'`(]" + s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\"'`)/#?]");
    if (re.test(t) && !f.endsWith("sitemap.ts")) errors.push(`${f.replace(root, "")} links to retired ${s}`);
  }
}
if (errors.length) { console.error("niche-redirects check FAILED:\n" + errors.join("\n")); process.exit(1); }
console.log(`niche-redirects: ${reds.length} redirects ok`);
