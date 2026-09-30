import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { toJsonLd } from "@/lib/schema";
import AuditLandingForm from "./AuditLandingForm";
import FaqSection from "@/components/FaqSection";
import styles from "./landing.module.css";

export const metadata: Metadata = {
  title: "Free Practice Audit for Mental Health Practices | Primara",
  description:
    "Free GBP audit for independent mental health practices — therapists, psychologists, and counselors. Real numbers, your named competitor, no obligation. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/mental-health-audit" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Practice Audit for Mental Health Practices | Primara",
    description:
      "Free GBP audit for independent mental health practices — therapists, psychologists, and counselors. Real numbers, your named competitor, no obligation.",
    type: "website",
    url: "https://primara365.com/mental-health-audit",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const faqs = [
  {
    q: "What exactly do I get in the free audit?",
    a: "A full review of your Google Business Profile score, a comparison against your named local competitor, and a 5-point action plan you can use whether or not you ever work with Primara. It's delivered by Liam or Gio personally, not generated automatically.",
  },
  {
    q: "How long does it take to receive my audit?",
    a: "Most audits are delivered within 48 hours of your request. We research your practice, pull your actual Google Business Profile and website data, and identify your top local competitor before the call — nothing generic, no waiting weeks for a templated report.",
  },
  {
    q: "Is this only for practices already working with an agency?",
    a: "No — it's built for independent therapists, psychologists, and counselors at any stage, whether you've never touched your Google Business Profile or you're already doing some marketing and want a second opinion on what's missing.",
  },
  {
    q: "Will I get a sales pitch, or an actual audit?",
    a: "You'll get the audit regardless of whether you ever become a client. Liam or Gio walks you through the findings directly, and you leave with specific, usable recommendations — working with us afterward is entirely your call, with no pressure.",
  },
  {
    q: "Do you work with telehealth-only practices, or only in-person ones?",
    a: "Both. Purely telehealth mental health practices are one of our core client types — the audit and the underlying strategy (Google Business Profile, local SEO, review generation) is built for the states and cities you actually serve, even without a physical office.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Free Mental Health Practice Audit", item: "https://primara365.com/mental-health-audit" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Practice Audit for Mental Health Practices",
  url: "https://primara365.com/mental-health-audit",
  about: {
    "@type": "Service",
    name: "Free Practice Audit",
    provider: { "@type": "LocalBusiness", name: "Primara", telephone: "+15612912681" },
  },
  mentions: [
    { "@type": "Thing", name: "Google Business Profile" },
    { "@type": "Thing", name: "Local SEO" },
  ],
};

export default function MentalHealthAuditPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(webPageSchema) }} />
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.headerInner}`}>
          <Link href="/" className={styles.logoText} aria-label="Primara365 — home">
            Primara365
          </Link>
          <div className={styles.headerRight}>
            <a href={`tel:${siteConfig.phone}`} className={styles.phoneLink}>
              {siteConfig.phoneDisplay}
            </a>
            <a href="#assessment-form" className={styles.btnOrange}>
              Get My Free Audit
            </a>
          </div>
        </div>
      </header>

      <section className={styles.hero} style={{ borderTop: "none" }}>
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div>
            <div className={styles.badge}>Mental Health Practices &middot; Nationwide &middot; Independent Only</div>
            <h1 className={`${styles.serif} ${styles.h1}`}>
              Your ideal clients are searching right now. Is your practice showing up
              <span className={styles.goldItalic}>?</span>
            </h1>
            <p className={styles.heroSub}>
              Primara builds the digital presence independent mental health practices deserve. Google Business
              Profile, local SEO, and review systems built around how people actually search for therapy and
              counseling.
            </p>
            <div className={styles.heroCtas}>
              <a href="#assessment-form" className={styles.btnOrange}>
                Get My Free Practice Audit &rarr;
              </a>
              <a href={`tel:${siteConfig.phone}`} className={styles.btnOutline}>
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
            <p className={styles.heroFine}>
              Free. No obligation. Liam or Gio will walk you through it directly &mdash; not a template, not an
              intern.
            </p>

            <div className={styles.proofRow}>
              <div className={styles.proofStat}>
                <div className={styles.num}>300%+</div>
                <div className={styles.label}>increase in Google searches for therapists since 2020</div>
              </div>
              <div className={styles.proofStat}>
                <div className={styles.num}>100+</div>
                <div className={styles.label}>physicians &amp; clinicians across our clients</div>
              </div>
              <div className={styles.proofStat}>
                <div className={styles.num}>20+</div>
                <div className={styles.label}>patient locations across our client roster</div>
              </div>
            </div>
          </div>

          <div className={styles.formCard} id="assessment-form">
            <div className={styles.formEyebrow}>Free &mdash; No Obligation</div>
            <h2 className={styles.serif}>Get your free practice audit.</h2>
            <p className={styles.formSub}>
              GBP score, competitor gap, and a 5-point plan &mdash; delivered by Liam or Gio directly.
            </p>
            <div className={styles.founderTrust}>
              <picture>
                <source type="image/webp" srcSet="/founders/liam-480.webp" />
                {/* eslint-disable-next-line @next/next/no-img-element -- static export-friendly, matches AboutSection.tsx pattern */}
                <img src="/founders/liam-480.jpg" alt="Liam Costello, Co-Founder of Primara" loading="lazy" decoding="async" />
              </picture>
              <span>
                Reviewed personally by <strong>Liam Costello</strong>, Co-Founder &mdash; every request, every time.
              </span>
            </div>
            <AuditLandingForm />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.eyebrowBlock}>Who We Work With</div>
          <h2 className={`${styles.serif} ${styles.sectionTitle}`}>Is this a fit for your practice?</h2>
          <p className={styles.sectionSub}>
            We work with a specific type of practice owner. Here&rsquo;s how to know if that&rsquo;s you.
          </p>
          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}>
              <h3>Fits</h3>
              <ul>
                <li>Independent therapist, psychologist, or licensed counselor</li>
                <li>Small group practice (2&ndash;8 clinicians)</li>
                <li>Private pay, insurance-based, or hybrid</li>
                <li>Independently owned, not a franchise or platform</li>
                <li>Building a waitlist or expanding to new clients</li>
                <li>Purely telehealth, no physical location required</li>
              </ul>
            </div>
            <div className={`${styles.fitCard} ${styles.fitCardNo}`}>
              <h3>Does Not Fit</h3>
              <ul>
                <li>Platform-employed therapists (BetterHelp, Talkspace, etc.)</li>
                <li>Hospital or health system behavioral health departments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.eyebrowBlock}>Get Started</div>
          <h2 className={`${styles.serif} ${styles.sectionTitle}`}>What happens after you request your audit</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <h4>We review your online presence</h4>
              <p>GBP, website, reviews, and your top local competitor &mdash; what they&rsquo;re doing that you&rsquo;re not.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <h4>You get a short call</h4>
              <p>Liam or Gio walks you through it directly. No sales pressure, no account coordinators.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h4>You get a clear next step</h4>
              <p>Whether that&rsquo;s working with us or not, you&rsquo;ll leave with specific, useful recommendations.</p>
            </div>
          </div>
          <p className={styles.sources}>Sources: Google Health Trends, 2024 &middot; SAMHSA, 2023</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.eyebrowBlock}>Why Now</div>
          <h2 className={`${styles.serif} ${styles.sectionTitle}`}>Why this matters right now for mental health practices</h2>
          <p className={styles.sectionSub} style={{ marginBottom: "20px" }}>
            Searches for therapists and mental health counselors on Google have grown more than 300% since 2020, and
            that demand hasn&rsquo;t slowed &mdash; more people are actively looking for a provider on their phone,
            right now, than at any point before. The practices capturing that demand aren&rsquo;t necessarily the
            best clinicians in a given market; they&rsquo;re the ones whose Google Business Profile is complete,
            whose reviews are current, and whose website actually answers what a prospective client is searching for.
          </p>
          <p className={styles.sectionSub}>
            Most independent mental health practices lose that visibility by default &mdash; not because the care
            they provide is worse, but because nobody on staff has the time to keep a Google Business Profile fully
            built out, request reviews consistently, or track which local competitor is out-ranking them. That&rsquo;s
            the gap the free audit is built to find: a clear, specific picture of where your practice stands today
            and what&rsquo;s actually costing you visibility, before you spend a dollar on any marketing.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <div className={styles.finalCta}>
        <div className={styles.wrap}>
          <h2 className={styles.serif}>See exactly where your practice stands &mdash; for free.</h2>
          <p>Free. No obligation. Delivered in 48 hours.</p>
          <a href="#assessment-form" className={styles.btnOrange}>
            Get My Free Practice Audit &rarr;
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.fname}>{siteConfig.motto}</span>
        Primara365 &middot; West Palm Beach, FL &middot; {siteConfig.phoneDisplay} &middot; &copy; 2026 Primara365. All
        rights reserved.
      </footer>
    </div>
  );
}
