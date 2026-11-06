"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, STANDALONE_ROUTES } from "@/lib/siteConfig";

/* Full-width closer on every page (website standard item 6: no dead ends).
   Rendered once in the root layout, before the footer. It hides itself, in CSS, on
   pages that already end in their own closer or a lead form (see globals.css
   .pg-closer rules), so a page never gets two. */
export default function PageCloser() {
  const pathname = usePathname();
  if (STANDALONE_ROUTES.includes(pathname)) return null;
  return (
    <section className="pg-closer" aria-label="Get your free audit">
      <div className="hm-wrap pg-closer-in">
        <div>
          <h2 className="hm-h hm-h2">Be one of the three.</h2>
          <p className="hm-body">A co-founder looks at where you show on the map today and tells you what to fix first. Free. No contract.</p>
        </div>
        <div className="pg-closer-btns">
          <Link prefetch={false} href="/contact#contact-form" className="hm-btn hm-btn-navy" data-cta="closer-audit">
            Get my free audit
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="hm-btn hm-btn-line" data-cta="closer-call">
            <span className="nw">Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
