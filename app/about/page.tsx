import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, liamSchema, gioSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Primara — Healthcare Marketing Agency for Independent Practices | Primara",
  description:
    "Meet Liam Costello & Gio LaRoche, co-founders of Primara — digital marketing for independent primary care and mental health practices. Call (561) 291-2681.",
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
    <main className="pt-16">
      {/* Person schema for founders */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(liamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(gioSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>About</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 py-16" aria-labelledby="about-h1">
        <h1
          id="about-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Meet Liam Costello &amp; Gio LaRoche — Primara
        </h1>
        <p className="mt-5 text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
          Digital marketing for independent primary care and mental health practices in Florida.
        </p>
        <p className="mt-2 text-base max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
          Primary care physicians and mental health practices &mdash; founder-led, Florida-based.
        </p>

        <div className="mt-12 max-w-2xl">
          <h2 className="font-serif font-bold mb-4" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem" }}>
            Why We Started Primara
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Liam Costello and Gio LaRoche founded Primara after watching independent primary care physicians
            across Florida lose patients to larger health systems &mdash; not because of the care they provided,
            but because of a Google listing that hadn&rsquo;t been touched in three years.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            The problem isn&rsquo;t the quality of independent medicine in Florida. It&rsquo;s visibility. A
            hospital system has a full marketing department managing its digital presence. An independent
            physician running a 3-doctor practice has none of that &mdash; and no time to build it between
            patients.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Primara exists to close that gap. We build and manage the digital infrastructure &mdash; Google
            Business Profile, local SEO, website, review system &mdash; that independent practices need to
            compete on their local search results page. We do it with the same attention to HIPAA compliance,
            patient privacy, and ethical marketing that your practice operates under every day.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            We expanded in 2026 to serve independent mental health practices in Florida for the same reason:
            demand for therapy is rising faster than independent therapists can acquire clients through
            directories alone. Psychology Today and BetterHelp intercept searches that should be reaching
            independent practitioners directly. We build the local presence that makes those directories
            optional.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Every engagement is managed directly by Liam and Gio. No account coordinators. No offshore writing
            teams. No handoffs. When you have a question about your ranking or your report, you speak with the
            person who built the strategy and wrote the content &mdash; because that&rsquo;s us.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            We work exclusively with independent, physician-owned primary care practices and privately owned
            mental health practices in Florida. Not dental chains. Not urgent care franchises. Not hospital
            systems. Two models, done well.
          </p>
        </div>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="tel:+15612912681"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--color-accent)", height: "48px", fontSize: "1rem" }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/the-audit"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", height: "48px", fontSize: "1rem" }}
          >
            Get My Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
