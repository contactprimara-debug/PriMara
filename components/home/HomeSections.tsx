import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/siteConfig";

/* Every figure here is read from lib/case-studies.ts (sourced from the Command Center, dated).
   Nothing is typed in by hand, so the page can never drift from the case study. */
function metric(slug: string, name: string) {
  const c = caseStudies.find((x) => x.slug === slug);
  const r = c?.results.find((x) => x.metric === name);
  return r ? { c: c!, r } : null;
}

export function ProofBand() {
  const items = [
    { slug: "family-life-counseling-center", name: "Form requests received", label: "form requests from the website", num: (n: string) => n },
    { slug: "family-life-counseling-center", name: "Google reviews answered", label: "Google reviews answered", num: (n: string) => n },
    { slug: "serenity-by-a-dr-sareen", name: "Pages Google reports as indexed", label: "pages Google can find, up from", num: (n: string) => n, useBefore: true },
  ]
    .map((it) => ({ ...it, m: metric(it.slug, it.name) }))
    .filter((it) => it.m);
  return (
    <section className="hm-proof" aria-labelledby="hm-proof-h">
      <div className="hm-wrap">
        <p className="hm-kicker">Real numbers, with dates</p>
        <h2 id="hm-proof-h" className="hm-h hm-h2">
          What it looks like when it works.
        </h2>
        <ol className="hm-proof-list">
          {items.map((it) => (
            <li key={it.name + it.slug} className="hm-proof-item">
              <span className="hm-num">{it.num(it.m!.r.now)}</span>
              <span className="hm-proof-label">
                {it.label}
                {it.useBefore && it.m!.r.before ? ` ${it.m!.r.before}` : ""}
              </span>
              <span className="hm-proof-src">
                {it.m!.c.shortName}, <span className="nw">{it.m!.r.range}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="hm-body hm-proof-note">
          Every case study also lists what has not moved yet.{" "}
          <Link prefetch={false} href="/case-studies" className="hm-link" data-cta="home-proof-cases">
            Read the case studies
          </Link>{" "}
          or see{" "}
          <Link prefetch={false} href="/work" className="hm-link">
            our work
          </Link>
          , including{" "}
          <Link prefetch={false} href="/case-studies/making-heaven-crowded" className="hm-link">
            Making Heaven Crowded
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export function WhoWeServe() {
  const rows = [
    { href: "/primary-care", t: "Primary care", s: "Family medicine, internal medicine, pediatrics" },
    { href: "/mental-health", t: "Mental health", s: "Counseling, therapy and psychiatry practices" },
    { href: "/specialties", t: "Specialties", s: "Geriatrics, concierge, direct primary care and more" },
  ];
  return (
    <section className="hm-serve" aria-labelledby="hm-serve-h">
      <div className="hm-wrap">
        <p className="hm-kicker">Who we work with</p>
        <h2 id="hm-serve-h" className="hm-h hm-h2">
          Independent practices. Only.
        </h2>
        <ul className="hm-rows">
          {rows.map((r) => (
            <li key={r.href}>
              <Link prefetch={false} href={r.href} className="hm-row">
                <span className="hm-row-t">{r.t}</span>
                <span className="hm-row-s">{r.s}</span>
                <span className="hm-row-a" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="hm-body">No hospital systems. No chains. If you own your practice and the schedule is not full, we should talk.</p>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const rows = [
    ["You talk to a co-founder.", "Liam and Gio run every account. Nobody hands you off after the first call."],
    ["You get real numbers every week.", "Calls, forms and where you show on the map. If something is not working, we say so and fix it."],
    ["Clear terms. No long contracts.", "You know what you are paying for before you pay."],
    ["We say no when it will not help.", "If a service is wrong for your practice, we tell you not to buy it."],
    ["Your patients come first too.", "Accurate words, respectful tone, no patient information in your ad accounts."],
    ["A little better every week.", "We test, measure and change what we do, every week."],
  ];
  return (
    <section className="hm-how" aria-labelledby="hm-how-h">
      <div className="hm-wrap hm-how-grid">
        <div>
          <p className="hm-kicker">How we work</p>
          <h2 id="hm-how-h" className="hm-h hm-h2">
            Your success first. Ours follows.
          </h2>
          <Link prefetch={false} href="/about" className="hm-link hm-how-more" data-cta="home-how-about">
            More about us
          </Link>
        </div>
        <ol className="hm-how-list">
          {rows.map(([t, b], i) => (
            <li key={t}>
              <span className="hm-how-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="hm-how-t">{t}</span>
              <span className="hm-how-b">{b}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Founders() {
  const f = [
    { slug: "liam", name: "Liam Costello" },
    { slug: "gio", name: "Gio LaRoche" },
  ];
  return (
    <section className="hm-founders" aria-labelledby="hm-f-h">
      <div className="hm-wrap hm-f-grid">
        <div className="hm-f-photos">
          {f.map((p) => (
            <figure key={p.slug} className="hm-f-fig">
              <picture>
                <source type="image/webp" srcSet={`/founders/${p.slug}-480.webp 480w, /founders/${p.slug}-800.webp 800w`} sizes="(max-width: 760px) 44vw, 340px" />
                <img src={`/founders/${p.slug}-800.jpg`} alt={`${p.name}, co-founder of Primara`} loading="lazy" decoding="async" width={800} height={1000} />
              </picture>
              <figcaption>{p.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="hm-f-copy">
          <p className="hm-kicker">The people doing the work</p>
          <h2 id="hm-f-h" className="hm-h hm-h2">
            Call us. We pick up.
          </h2>
          <p className="hm-body">We are two co-founders in West Palm Beach. We started Primara so independent practices get the same reach as the big hospital systems, without the agency layers.</p>
          <div className="hm-ctas">
            <a href={`tel:${siteConfig.phone}`} className="hm-btn hm-btn-gold" data-cta="home-founders-call">
              <span className="nw">Call {siteConfig.phoneDisplay}</span>
            </a>
            <Link prefetch={false} href="/contact#contact-form" className="hm-btn hm-btn-line" data-cta="home-founders-audit">
              Get my free audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatWeDo() {
  const rows = [
    ["/services/seo", "SEO and local search", "Be found when patients search"],
    ["/services/google-business-profile", "Google Business Profile", "Your listing, complete and active"],
    ["/services/meta-ads", "Meta Ads", "Facebook and Instagram, built for health policy"],
    ["/services/google-ads", "Google Ads", "Patients already looking, sent to you"],
    ["/services/online-reputation-management", "Reviews", "Every review answered"],
    ["/services/ai-seo", "AI search", "Show up in ChatGPT and Google AI"],
    ["/services/medical-practice-website-design", "Website", "Fast, clear, built to get the call"],
  ];
  return (
    <section className="hm-what" aria-labelledby="hm-what-h">
      <div className="hm-wrap">
        <p className="hm-kicker">What we do</p>
        <h2 id="hm-what-h" className="hm-h hm-h2">
          Seven ways to get found.
        </h2>
        <ul className="hm-rows">
          {rows.map(([href, t, s]) => (
            <li key={href}>
              <Link prefetch={false} href={href} className="hm-row">
                <span className="hm-row-t">{t}</span>
                <span className="hm-row-s">{s}</span>
                <span className="hm-row-a" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link prefetch={false} href="/services" className="hm-link">
          All services
        </Link>
      </div>
    </section>
  );
}
