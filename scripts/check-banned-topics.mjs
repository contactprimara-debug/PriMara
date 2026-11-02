// Gio 2026-11-02: no LGBTQ+ pages or content, ever (PAGE-STANDARD.md section 4).
// Fails when banned terms appear in site source (lib, app, components).
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const re = /lgbt|\bgay\b|\bqueer\b|transgender|gender[- ]identity|gender-affirm|sexual orientation/i;
const hits = [];
function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (f === "node_modules" || f.startsWith(".")) continue;
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx|json|md|mdx)$/.test(f)) {
      readFileSync(p, "utf8").split("\n").forEach((l, i) => { if (re.test(l)) hits.push(`${p.replace(root, "")}:${i + 1}`); });
    }
  }
}
for (const d of ["lib", "app", "components"]) { try { walk(join(root, d)); } catch {} }
if (hits.length) { console.error("banned topic terms found:\n" + hits.join("\n")); process.exit(1); }
console.log("banned-topics check: 0 hits");
