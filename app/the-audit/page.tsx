import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Google Business Profile Audit for Doctors | Primara",
  description:
    "Request a free practice audit from Primara in West Palm Beach, FL. We review your GBP, Maps position, website, and reviews — built for your specific practice, not a template. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/the-audit" },
  openGraph: {
    title: "Free Google Business Profile Audit for Doctors | Primara",
    description:
      "Free audit for independent medical practices in Florida. Real numbers, your named competitor, no obligation. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/the-audit",
  },
};

export default function TheAuditPage() {
  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>The Audit</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-content px-6 lg:px-8 py-16" aria-labelledby="audit-h1">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6"
          style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
        >
          ✓ Free — No Obligation
        </div>

        <h1
          id="audit-h1"
          className="font-serif font-bold text-balance"
          style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
        >
          Free Practice Marketing Audit in Florida — Primara
        </h1>
        <p className="mt-5 text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
          Liam Costello and Gio LaRoche at Primara research your practice and build a custom audit using your real numbers and your named local competitor — not a generic template. We deliver it in person or by email and walk through it with you. No obligation. If it doesn&rsquo;t make sense for your practice, we&rsquo;ll say so.
        </p>

        {/* What's in the audit */}
        <div className="mt-16">
          <h2 className="font-serif font-bold mb-6" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.75rem" }}>
            What the Audit Shows You
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Your Google review count vs. your top local competitor — the gap in plain numbers",
              "Your current Maps position for your primary keyword + city",
              "Website diagnostic — mobile speed score, NAP accuracy, schema markup, and service page structure",
              "GBP completeness score — categories filled, services listed, posts active, and photos",
              "Competitor gap analysis — what the top-ranking practice in your area is doing that you aren't",
              "Your biggest digital weakness and the fastest available win",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl p-5" style={{ backgroundColor: "var(--color-card)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M4 10l4 4 8-8" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 flex gap-4 flex-wrap">
          <a
            href="tel:+15612912681"
            className="inline-flex items-center gap-2 rounded-lg px-6 font-bold text-white"
            style={{ backgroundColor: "var(--color-accent)", height: "52px", fontSize: "1rem" }}
          >
            Call (561) 291-2681
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 font-bold"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", height: "52px", fontSize: "1rem" }}
          >
            Request the Audit Online
          </Link>
        </div>

        <p className="mt-4 text-sm" style={{ color: "var(--color-text-muted)" }}>
          No pricing shown here — Liam or Gio will walk you through options after the audit.{" "}
          <Link href="/services" className="underline hover:opacity-70">
            See our services
          </Link>{" "}
          for details on what we offer.
        </p>
      </section>
    </main>
  );
}
