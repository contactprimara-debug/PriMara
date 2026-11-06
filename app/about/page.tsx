import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { HowWeWork } from "@/components/home/HomeSections";
import { toJsonLd, liamSchema, gioSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Primara — Healthcare Marketing Agency for Independent Practices | Primara",
  description:
    "Meet Liam Costello & Gio LaRoche, co-founders of Primara. We help independent medical practices get more patients by optimizing their digital presence and running their ads.",
  alternates: { canonical: "https://primara365.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Primara — Healthcare Marketing Agency for Independent Practices | Primara",
    description:
      "Meet Liam Costello & Gio LaRoche, co-founders of Primara — digital marketing for independent primary care and mental health practices. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/about",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(liamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(gioSchema) }} />

      <section className="ab-hero" aria-labelledby="about-h1">
        <div className="hm-wrap ab-hero-grid">
          <div>
            <p className="hm-kicker">About Primara</p>
            <h1 id="about-h1" className="hm-h">Meet Liam Costello and Gio LaRoche.</h1>
            <p className="hm-body">{siteConfig.why}</p>
            <div className="hm-ctas">
              <a href={`tel:${siteConfig.phone}`} className="hm-btn hm-btn-gold" data-cta="about-hero-call">
                <span className="nw">Call {siteConfig.phoneDisplay}</span>
              </a>
              <Link prefetch={false} href="/contact#contact-form" className="hm-btn hm-btn-line" data-cta="about-hero-audit">
                Get my free audit
              </Link>
            </div>
            <p className="hm-fine">{siteConfig.tagline}</p>
          </div>
          <div className="ab-photos">
            {[
              { slug: "liam", name: "Liam Costello" },
              { slug: "gio", name: "Gio LaRoche" },
            ].map((p) => (
              <figure key={p.slug} className="hm-f-fig">
                <picture>
                  <source type="image/webp" srcSet={`/founders/${p.slug}-480.webp 480w, /founders/${p.slug}-800.webp 800w`} sizes="(max-width: 760px) 44vw, 300px" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/founders/${p.slug}-800.jpg`} alt={`${p.name}, co-founder of Primara`} width={800} height={1000} decoding="async" />
                </picture>
                <figcaption>{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-story" aria-labelledby="about-why">
        <div className="hm-wrap ab-story-grid">
          <div>
            <p className="hm-kicker">Why we started</p>
            <h2 id="about-why" className="hm-h hm-h2">Good doctors were losing patients to a bad listing.</h2>
          </div>
          <div>
            <p className="hm-body">
              We watched independent primary care physicians across Florida lose patients to larger health systems. Not because of the care. Because of a Google listing nobody had touched in three years.
            </p>
            <p className="hm-body">
              A hospital has a marketing department. A three-doctor practice has patients to see. Primara closes that gap: Google Business Profile, local SEO, website and reviews, built with the same care for privacy and ethics your practice works under every day.
            </p>
            <p className="hm-body">
              In 2026 we opened the same door for independent mental health practices, who lose clients to directories that should be sending them to you.
            </p>
          </div>
        </div>
      </section>

      <HowWeWork />

      <section className="ab-who" aria-labelledby="about-who">
        <div className="hm-wrap">
          <p className="hm-kicker">Who we work with</p>
          <h2 id="about-who" className="hm-h hm-h2">Independent medicine, done well.</h2>
          <p className="hm-body">
            Physician-owned primary care and mental health practices. Not hospital systems. Not chains.{" "}
            <Link prefetch={false} href="/motivation" className="hm-link">Read what motivates the work.</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
