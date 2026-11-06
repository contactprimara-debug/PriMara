import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";

/* One hero for every inner page (website standard items 1, 6, 7, 20, 21).
   The same big idea as the home page, in miniature: Google shows three practices,
   and the highlighted "your practice" row climbs into them as the visitor scrolls
   (CSS scroll-driven animation, no JS; static final state without support or with
   reduced motion). The rows are labelled Example and carry no numbers.
   Nothing sits behind the text. The h1 text stays whatever the page passed in,
   so existing SEO titles and headings are untouched. */

type Props = {
  id: string;
  kicker: string;
  h1: ReactNode;
  sub?: ReactNode;
  page: string; // label for cta_click, e.g. "pricing"
  primary?: { label: string; href: string };
  fine?: ReactNode;
  mark?: boolean;
  compact?: boolean;
  wide?: boolean; // align to legacy full-width sections (pricing)
};

export function PackMark() {
  const rows = ["Practice A", "Practice B", "Practice C"];
  return (
    <figure className="pgh-pack" aria-label="Example: a practice climbing into the top three on the map">
      <figcaption className="pgh-pack-head">
        <span className="hm-dot" aria-hidden="true" />
        “doctor near me”
        <span className="hm-example">Example</span>
      </figcaption>
      <ol className="pgh-pack-list" aria-hidden="true">
        {rows.map((r, i) => (
          <li key={r} className="pgh-pack-row" data-top={i + 1}>
            <span className="pgh-pack-n">{i + 1}</span>
            <span className="pgh-pack-t">{r}</span>
          </li>
        ))}
        <li className="pgh-pack-row pgh-pack-you">
          <span className="pgh-pack-n">3</span>
          <span className="pgh-pack-t">Your practice</span>
        </li>
      </ol>
    </figure>
  );
}

export default function PgHero({ id, kicker, h1, sub, page, primary, fine, mark = true, compact, wide }: Props) {
  const p = primary ?? { label: "Get my free audit", href: "/contact#contact-form" };
  return (
    <section className={`pgh${compact ? " pgh-compact" : ""}${wide ? " pgh-wide" : ""}`} aria-labelledby={id}>
      <div className={`hm-wrap pgh-grid${mark ? "" : " pgh-one"}`}>
        <div>
          <p className="hm-kicker">{kicker}</p>
          <h1 id={id} className="hm-h pgh-h">{h1}</h1>
          {sub ? <p className="hm-body">{sub}</p> : null}
          <div className="hm-ctas">
            <Link prefetch={false} href={p.href} className="hm-btn hm-btn-gold" data-cta={`${page}-hero-audit`}>
              {p.label}
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="hm-btn hm-btn-line" data-cta={`${page}-hero-call`}>
              <span className="nw">Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
          {fine ? <p className="hm-fine">{fine}</p> : null}
        </div>
        {mark ? <PackMark /> : null}
      </div>
    </section>
  );
}
