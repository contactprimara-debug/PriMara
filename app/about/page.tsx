import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, liamSchema, gioSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medical Marketing Agency Florida | About Primara",
  description:
    "Meet Liam Costello & Gio LaRoche, co-founders of Primara — digital marketing for independent medical practices in Florida. Call (561) 291-2681.",
  alternates: { canonical: "https://primara.com/about" },
  openGraph: {
    title: "Medical Marketing Agency Florida | About Primara",
    description:
      "Meet the founders of Primara — digital marketing for independent medical practices in Florida. Call (561) 291-2681.",
    type: "website",
    url: "https://primara.com/about",
  },
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
          Digital marketing for independent primary care practices in Florida.
        </p>

        <div className="mt-12 max-w-2xl">
          <h2 className="font-serif font-bold mb-4" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.5rem" }}>
            Why We Started Primara
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Liam Costello and Gio LaRoche founded Primara in Florida after watching
            independent primary care physicians lose patients to larger health systems — not because
            of the quality of care they provided, but because of digital visibility.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Primara's approach is built around one premise: independent primary care physicians deserve the
            same digital infrastructure that hospital systems fund with dedicated marketing departments.
            That means a fully optimized Google Business Profile, a website engineered around local search,
            a consistent review system, and a strategy that accounts for how Google's local ranking signals
            actually work — not how they worked two years ago.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
            Both founders run every client account directly. There are no account coordinators, no offshore
            production teams, and no handoffs after the sales call. If you have a question about your
            ranking, your report, or your next content page, you speak with Liam or Gio — because they are
            the ones who built it.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Primara works exclusively with independent, physician-owned primary care clinics — not dental chains,
            urgent care franchises, or hospital systems.
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
            Request a Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
