import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/meta-ads-west-palm-beach`;

export const metadata: Metadata = {
  title: "Meta Ads Management in West Palm Beach, FL | Primara",
  description:
    "Facebook and Instagram ad management for West Palm Beach practices, medspas and dental clinics — from an agency based in West Palm Beach. Creative shoots in person, policy-aware copy, HIPAA-conscious tracking. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meta Ads Management in West Palm Beach, FL | Primara",
    description:
      "Meta Ads for West Palm Beach practices, medspas and dental clinics — run by a local agency that can film with you in person.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Meta Ads West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads Management in West Palm Beach",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      postalCode: "33401",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "West Palm Beach",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  serviceType: "Facebook and Instagram Advertising Management",
  description:
    "Meta (Facebook and Instagram) advertising management for practices, medspas, and dental clinics in West Palm Beach and Palm Beach County — in-person creative production, policy-compliant copy, consult landing pages, and tracking built without protected health information.",
};

const faqs = [
  {
    q: "What does being local actually change about running our ads?",
    a: "One thing, and it is the thing that matters most in paid social: creative. We can be at your office in Palm Beach County to film a provider properly — good light, a scripted set of angles, several months of raw material captured in a single morning — instead of coaching you through it over a video call. Creative volume is the single biggest lever on Meta performance, and being twenty minutes away is how accounts here stay stocked with it.",
  },
  {
    q: "Is Palm Beach County a competitive market for medspa and aesthetic ads?",
    a: "Among the most competitive in the country per capita. The corridor from Jupiter through West Palm Beach and Boca Raton is dense with aesthetic clinics, hormone practices, and cosmetic dental groups, most of them running paid social. Practically that means two things: impression costs are high, and creative burns out faster here than the platform benchmarks suggest. Accounts in this market need new concepts in rotation on a schedule, not only when results slip.",
  },
  {
    q: "How does the season affect a West Palm Beach ad budget?",
    a: "Considerably. The county's population swells from roughly November through April, and for elective and cash-pay services that is when the audience is physically here and able to book. We generally weight spend toward that window and pull back through late summer, using the practice's own booking history rather than a generic seasonal curve. Practices serving year-round residents — primary care, general dentistry — see far less of this swing and we budget them flat.",
  },
  {
    q: "Do you only work with West Palm Beach practices?",
    a: "No. We are based here and this is the market we know best, but Meta Ads management does not depend on proximity the way local SEO does — we run accounts for independent practices around the country. The West Palm Beach advantage is logistical: in-person shoots, occasional face-to-face strategy sessions, and genuine familiarity with who else is bidding in this corridor.",
  },
  {
    q: "Should a West Palm Beach practice run Meta or Google first?",
    a: "It depends entirely on whether your service is something people already search for. General dentistry, primary care, and urgent care have existing demand and belong on Google first. Aesthetics, implants, clear aligners, hormone optimization, and concierge memberships have to be created, and Meta does that far more efficiently. Most established practices here eventually run both — we just do not recommend starting both in the same month, because you learn nothing about either.",
  },
  {
    q: "What does the tracking setup look like for a local practice?",
    a: "The same as anywhere, because the risk is the same. Meta will not sign a Business Associate Agreement, so we configure conversion events to record that a booking happened without transmitting what it was for, keep tracking off portal and intake pages entirely, and write down what is collected so your privacy officer or attorney can review it. We then reconcile Meta's modeled numbers against your actual schedule each month rather than reporting the platform's figure as fact.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const deliverables = [
  {
    title: "In-Person Creative Days",
    body: "We come to your office in Palm Beach County, script the session in advance, and film enough raw material in a morning to feed the account for months. For medspas and cosmetic dental clinics this is usually the difference between an account that plateaus and one that keeps compounding, because Meta rewards fresh creative more reliably than it rewards clever bidding.",
  },
  {
    title: "Policy Review Before Submission",
    body: "Every concept goes through healthcare policy review before it is uploaded — Personal Attributes language, claim framing, and the claims-based standard Meta moved to for before-and-after imagery in July 2026. The goal is never to test the boundary. An account restriction in a market this competitive costs more than any single ad could earn.",
  },
  {
    title: "Offers Built for This Market",
    body: "Palm Beach County audiences are not short of options and are rarely moved by a discount. Campaigns here work better built on a consultation, a membership, or a defined treatment plan — something that qualifies the respondent rather than simply lowering the price of entry for anyone shopping around.",
  },
  {
    title: "Landing Pages and Follow-Up",
    body: "A dedicated page per offer on the same Next.js stack we use for website builds, mobile-first, one decision per page — plus the follow-up cadence behind it. Speed to first contact decides more of your conversion rate than the ad creative does, and we set that expectation with your front desk before launch.",
  },
  {
    title: "Monthly Reconciliation, Not Platform Screenshots",
    body: "Meta's attribution is modeled and privacy-constrained. Each month we compare what the account reports against what your schedule actually shows, and the reconciled number is the one in your report. Where those two figures disagree, we explain why.",
  },
];

export default function MetaAdsWestPalmBeachPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 flex-wrap" style={{ color: "var(--smoke)", fontSize: "0.8125rem" }}>
            <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li><Link href="/locations" style={{ color: "var(--ash)", textDecoration: "none" }}>Locations</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>Meta Ads West Palm Beach</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px", padding: "5px 14px", marginBottom: "32px",
              fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "var(--gold)",
            }}
          >
            West Palm Beach, Florida
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "840px", marginBottom: "24px",
            }}
          >
            Meta Ads Management in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Primara is based here, which changes one thing that matters more than any other
            on Facebook and Instagram: we can come film with you. Scripted creative days at
            your office, policy review before anything is submitted, and tracking that never
            carries a patient&rsquo;s health information.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Audit
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · Month-to-month after setup
          </p>
        </div>
      </section>

      {/* Local context */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why It Matters Here
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              In this corridor, creative burns out before the budget does.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Jupiter down through West Palm Beach and into Boca Raton is one of the densest
              aesthetic and cash-pay healthcare corridors in the United States. A resident
              here sees ads from a lot of clinics, which drives impression costs up and, more
              importantly, shortens the useful life of any single video. Accounts that ran one
              good concept for a year somewhere else will find it stops working in a couple of
              months here.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              That is a production problem before it is a media problem, and it is the reason
              being local is worth something. Filming a provider properly takes a morning when
              the agency can drive over; it takes weeks of back-and-forth when it cannot. We
              run this market from inside it, for independent practices, medspas, and dental
              clinics — not for the hospital systems or the franchise groups on the other side
              of the auction.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            What We Do
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {deliverables.map((d, idx) => (
              <div key={d.title} style={{ borderTop: "1px solid var(--wire)", padding: "clamp(28px, 4vw, 44px) 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 56px)" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--smoke)" }}>0{idx + 1}</div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "12px" }}>
                    {d.title}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "40px" }}>
            Common Questions
          </p>
          <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.0625rem", fontWeight: 400, color: "var(--chalk)", marginBottom: "12px", lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      <RelatedLinks
        eyebrow="Related"
        heading="Related Services & Locations"
        items={[
          { href: "/services/meta-ads", label: "Meta Ads", description: "The full service — pillars, planning benchmarks, and how tracking gets built." },
          { href: "/locations/meta-ads-florida", label: "Meta Ads Management in Florida", description: "The statewide picture, market by market." },
          { href: "/locations/google-ads-management-west-palm-beach", label: "Google Ads in West Palm Beach", description: "The capture side — search campaigns for our home market." },
          { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO in West Palm Beach", description: "The organic foundation underneath both ad channels." },
          { href: "/locations/medspas-west-palm-beach", label: "Medspa Marketing in West Palm Beach", description: "The full picture for aesthetic clinics in Palm Beach County." },
          { href: "/locations/dental-practices-west-palm-beach", label: "Dental Marketing in West Palm Beach", description: "The full picture for local dental practices." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Let&rsquo;s Book a Creative Day
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            Start with the free audit — your current account, creative, and tracking, reviewed
            in 3&ndash;5 business days.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid #fff", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
