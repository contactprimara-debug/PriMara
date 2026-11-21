import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Primara",
  description:
    "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
  url: SITE_URL,
  telephone: "+15612912681",
  email: "liam.costello@primara365.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/primara",
  ],
};

import HomeMotion from "@/components/home/HomeMotion";
import "./home.css";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
  description:
    "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
  alternates: {
    canonical: "https://primara365.com",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Healthcare Marketing Agency for Independent Medical Practices | Primara365",
    description:
      "We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
    type: "website",
    url: "https://primara365.com",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'], description: "We help independent medical practices get more patients by optimizing their digital presence and running their ads." },
};

const CHANNELS = [
  { t: "Local SEO", d: "Show up in the map pack and in search for the care you provide.", h: "/services/local-seo-for-medical-practices" },
  { t: "AI search", d: "Pages and structure built so AI answers can find and cite your practice.", h: "/services/ai-seo" },
  { t: "Google Business Profile", d: "A complete, active profile: services, photos, posts and questions.", h: "/services/google-business-profile" },
  { t: "Meta Ads", d: "Policy-safe Facebook and Instagram ads with call and form tracking.", h: "/services/meta-ads" },
  { t: "Google Ads", d: "Search ads that land on pages built to turn visits into calls.", h: "/services/google-ads" },
  { t: "Website", d: "Fast, mobile-first pages with tap-to-call and a short form.", h: "/services/medical-practice-website-design" },
  { t: "Reviews", d: "An easy way for patients to leave a review. Request only.", h: "/services/online-reputation-management" },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function HomePage() {
  return (
    <main className="rh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema as Record<string, unknown>) }}
      />
      <canvas data-bg aria-hidden="true" className="rh-canvas" />
      <div className="rh-glow rh-glow-a" aria-hidden="true" />
      <div className="rh-glow rh-glow-b" aria-hidden="true" />
      <div className="rh-glow rh-glow-c" aria-hidden="true" />
      <svg className="rh-thread" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50 0 C 90 120, 10 220, 50 340 S 90 560, 50 680 S 10 880, 50 1000" pathLength="1" data-thread />
      </svg>
      <div className="rh-rail" aria-hidden="true">
        <span className="rh-rail-n" data-rail-n>01</span>
        <span className="rh-rail-t">More patients. Serving you first.</span>
        <span className="rh-rail-n">06</span>
      </div>

      {/* 01 Hero */}
      <section className="rh-hero" data-sec="01" aria-label="Primara365">
        <div className="rh-wrap rh-hero-grid">
          <div className="rh-hero-copy">
            <p className="rh-eyebrow rh-up" style={{ animationDelay: "0.05s" }}>Primara / Patient acquisition</p>
            <h1 className="rh-h1">
              {["We", "Put", "Independent", "Medical", "Practices", "on", "the"].map((w, i) => (
                <React.Fragment key={w + i}><span className="rh-w" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>{w}</span>{" "}</React.Fragment>
              ))}
              <span className="rh-w" style={{ animationDelay: "0.45s" }}><em>Map.</em></span>
            </h1>
            <p className="rh-lead rh-up" style={{ animationDelay: "0.22s" }}>
              More patient calls and forms from Google search, AI answers and your Google Business Profile. Healthcare practices only.
            </p>
            <div className="rh-cta-row rh-up" style={{ animationDelay: "0.32s" }}>
              <Link prefetch={false} href="/contact#contact-form" className="rh-btn" data-cta="home-hero-book">
                Book a call <span aria-hidden="true">↗</span>
              </Link>
              <a href="#how" className="rh-link" data-cta="home-hero-explore">
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="rh-visual" aria-hidden="true" data-tilt>
            <div className="rh-tilt" data-par="0.04">
            <svg className="rh-ribbons" viewBox="0 0 600 600" fill="none">
              <defs>
                <linearGradient id="rhg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#C9A84C" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#C9A84C" />
                  <stop offset="1" stopColor="#1B9A9A" />
                </linearGradient>
              </defs>
              <path className="rh-rib rh-rib1" d="M20 430 C 140 120, 330 560, 460 260 S 590 60, 590 60" stroke="url(#rhg)" strokeWidth="2" />
              <path className="rh-rib rh-rib2" d="M0 330 C 160 520, 300 120, 430 360 S 580 520, 590 470" stroke="url(#rhg)" strokeWidth="1.2" />
            </svg>
            <div className="rh-card rh-card-3"><i /><i /><i /></div>
            <div className="rh-card rh-card-2"><i /><i /><i /></div>
            <div className="rh-card rh-card-1">
              <div className="rh-card-top"><span className="rh-pin" />Your practice</div>
              <div className="rh-card-lines"><i /><i /></div>
              <div className="rh-card-btns"><b>Call</b><b>Website</b><b>Directions</b></div>
            </div>
            <svg className="rh-wires" viewBox="0 0 600 600" fill="none">
              <path pathLength="1" className="rh-wire w1" d="M300 300 C 380 240, 420 160, 500 90" />
              <path pathLength="1" className="rh-wire w2" d="M300 300 C 220 380, 160 430, 90 500" />
            </svg>
            <div className="rh-chip rh-chip-a"><span className="rh-dot" />Incoming call</div>
            <div className="rh-chip rh-chip-b"><span className="rh-dot rh-dot-t" />New patient form</div>
            </div>
          </div>
        </div>
        <a className="rh-scroll" href="#beneath" aria-label="Scroll down">Scroll to look inside ↓</a>
      </section>

      <div className="rh-marq" aria-hidden="true">
        <div className="rh-marq-t">
          {[0, 1].map((k) => (
            <span key={k}>Local SEO <i>/</i> AI search <i>/</i> Google Business Profile <i>/</i> Meta Ads <i>/</i> Google Ads <i>/</i> Websites <i>/</i> Reviews <i>/</i> Call tracking <i>/</i>&nbsp;</span>
          ))}
        </div>
      </div>

      {/* 02 Beneath the surface */}
      <section id="beneath" className="rh-sec" data-sec="02" aria-label="Where patients find you">
        <div className="rh-wrap rh-split">
          <div className="rh-sticky">
            <p className="rh-eyebrow" data-rv>01 / Where patients look</p>
            <h2 className="rh-h2" data-rv>Every search is a possible patient.</h2>
            <p className="rh-body" data-rv>Before anyone calls, they look. We make sure they find you, and that your phone and form are ready.</p>
            <ul className="rh-list" data-rv>
              <li><span>01</span><strong>Search</strong><em>Found for what you treat</em></li>
              <li><span>02</span><strong>Maps</strong><em>Seen in the map pack</em></li>
              <li><span>03</span><strong>AI answers</strong><em>Cited when patients ask</em></li>
            </ul>
            <Link prefetch={false} href="/services" className="rh-link" data-cta="home-services">All services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="rh-radar" aria-hidden="true" data-rv><div className="rh-radar-in" data-par="-0.06">
            <i className="rh-ring r1" /><i className="rh-ring r2" /><i className="rh-ring r3" />
            <span className="rh-core">Your<br />practice</span>
            <span className="rh-node n1">Search</span>
            <span className="rh-node n2">Maps</span>
            <span className="rh-node n3">AI answers</span>
          </div></div>
        </div>
      </section>

      {/* 03 Who we serve */}
      <section className="rh-sec rh-band" data-sec="03" aria-label="Who we serve">
        <div className="rh-wrap">
          <p className="rh-eyebrow" data-rv>02 / Who we serve</p>
          <h2 className="rh-h2" data-rv>The right practice. The right patient.</h2>
          <div className="rh-two">
            <Link prefetch={false} href="/primary-care" className="rh-big" data-rv data-cta="home-primary-care">
              <span className="rh-big-n">A</span>
              <strong>Primary Care</strong>
              <em>Family medicine, internal medicine, pediatrics, geriatrics, concierge</em>
              <span className="rh-link">See how we help <span aria-hidden="true">↗</span></span>
            </Link>
            <Link prefetch={false} href="/mental-health" className="rh-big" data-rv data-cta="home-mental-health">
              <span className="rh-big-n">B</span>
              <strong>Mental Health</strong>
              <em>Independent therapists, psychologists, licensed counselors, group practices</em>
              <span className="rh-link">See how we help <span aria-hidden="true">↗</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 Channels: pinned horizontal scroller */}
      <section className="rh-hs" data-hs data-sec="04" aria-label="What we run">
        <div className="rh-hs-stick">
          <div className="rh-wrap rh-hs-head">
            <p className="rh-eyebrow">03 / What we run</p>
            <h2 className="rh-h2">Every channel. One connection.</h2>
            <div className="rh-hs-meta" aria-hidden="true">
              <span data-hs-n>01</span><span>/ {String(CHANNELS.length).padStart(2, "0")}</span>
              <span className="rh-hs-line"><i data-hs-bar /></span>
            </div>
          </div>
          <div className="rh-hs-view">
            <div className="rh-hs-track" data-hs-track>
              {CHANNELS.map((c, i) => (
                <Link prefetch={false} key={c.h} href={c.h} className="rh-ch" data-cta={`home-channel-${i + 1}`}>
                  <span className="rh-ch-n">{pad(i)}</span>
                  <strong>{c.t}</strong>
                  <em>{c.d}</em>
                  <span className="rh-link">Explore <span aria-hidden="true">↗</span></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 How it works */}
      <section id="how" className="rh-sec" data-sec="05" aria-label="How it works">
        <div className="rh-wrap">
          <p className="rh-eyebrow" data-rv>04 / How it works</p>
          <h2 className="rh-h2" data-rv>Look. Fix. Track.</h2>
          <ol className="rh-steps">
            <li data-rv style={{ transitionDelay: "0s" }}><span>01</span><strong>Look</strong><em>We audit your Google profile, website and call tracking.</em></li>
            <li data-rv style={{ transitionDelay: ".12s" }}><span>02</span><strong>Fix</strong><em>We publish the profile, page and ad changes ourselves.</em></li>
            <li data-rv style={{ transitionDelay: ".24s" }}><span>03</span><strong>Track</strong><em>Every call and form is tracked back to where it came from.</em></li>
          </ol>
          <div className="rh-cta-row" data-rv>
            <Link prefetch={false} href="/the-audit" className="rh-btn" data-cta="home-how-audit">Get the audit <span aria-hidden="true">↗</span></Link>
            <Link prefetch={false} href="/how-it-works" className="rh-link" data-cta="home-how-more">The full process <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      {/* 06 Proof: real, dated numbers only */}
      <section className="rh-sec rh-band" data-sec="06" aria-label="Proof">
        <div className="rh-wrap">
          <p className="rh-eyebrow" data-rv>05 / Our clients</p>
          <h2 className="rh-h2" data-rv>Built around independent practices.</h2>
          <div className="rh-stats" data-rv>
            <div><b><span data-count="100">100</span>+</b><span>Physicians and clinicians across our clients</span></div>
            <div><b><span data-count="20">20</span>+</b><span>Patient locations across our client roster</span></div>
            <small>As of August 2026</small>
          </div>
          <div className="rh-cases">
            {caseStudies.map((c, ci) => (
              <Link prefetch={false} key={c.slug} href={`/case-studies/${c.slug}`} className="rh-case" data-rv style={{ transitionDelay: `${ci * 0.12}s` }} data-cta={`home-case-${c.slug}`}>
                <strong>{c.shortName}</strong>
                <em>{c.kind}</em>
                <span className="rh-link">Read the case study <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
          <Link prefetch={false} href="/case-studies" className="rh-link" data-cta="home-all-cases">All case studies <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      {/* Closer */}
      <section className="rh-close" aria-label="Book a call">
        <div className="rh-wrap">
          <p className="rh-eyebrow" data-rv>Your next patients start here</p>
          <h2 className="rh-h2 rh-h2-xl" data-rv>Let&rsquo;s put your practice on the map.</h2>
          <p className="rh-body" data-rv>Two founders. No account managers. Tell us about your practice and we will show you what we would fix first.</p>
          <div className="rh-cta-row" data-rv>
            <Link prefetch={false} href="/contact#contact-form" className="rh-btn" data-cta="home-close-book">Book a call <span aria-hidden="true">↗</span></Link>
            <a href={`tel:${siteConfig.phone}`} className="rh-link rh-nowrap" data-cta="home-close-call">Call {siteConfig.phoneDisplay.replace(/ /g, " ")}</a>
          </div>
        </div>
      </section>

      <HomeMotion />
    </main>
  );
}
