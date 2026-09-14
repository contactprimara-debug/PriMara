import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/meta-ads-for-medspas`;

export const metadata: Metadata = {
  title: "Meta Ads for Medspas | Facebook & Instagram Advertising | Primara",
  description:
    "Facebook and Instagram advertising built for independent medspas — creative that clears Meta's policy review, offers priced above the discount sites, and tracking that never carries client health data. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meta Ads for Medspas | Facebook & Instagram Advertising | Primara",
    description:
      "Meta Ads for independent medspas — policy-aware creative, membership and package offers, and consult-booking landing pages.",
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
    { "@type": "ListItem", position: 3, name: "Meta Ads for Medspas", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads for Medspas",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Primara",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Facebook and Instagram Advertising for Medical Spas",
  audience: { "@type": "Audience", audienceType: "Independent medical spas and aesthetic clinics" },
  description:
    "Meta (Facebook and Instagram) advertising management for independent medspas — creative production, policy-compliant copy, offer and membership structuring, consult landing pages, and tracking configured without protected health information.",
};

const faqs = [
  {
    q: "Can a medspa still run before-and-after photos on Meta?",
    a: "Sometimes, and the rule changed recently enough that most advice online is wrong. Meta moved to claims-based enforcement in July 2026: a before-and-after is no longer an automatic rejection on its own. What gets an ad pulled is the claim wrapped around it — a guaranteed result, an implied ideal body, a hook that tells the viewer something is wrong with them. Certain formats stay banned outright regardless of copy, including pinched-fat and skin-grab shots and anything framed to shock. We build creative on the safe side of that line and keep a written record of what was approved, because the account is the asset you cannot rebuild.",
  },
  {
    q: "Why does our cost per lead look fine but our revenue does not?",
    a: "Almost always because the offer is doing the selling and the offer is priced to lose. A $99 Botox promotion will produce cheap leads all day and fill your schedule with people who will not return at your real price. We would rather spend more per lead and advertise the consultation — a membership, a package, a treatment plan — because the number that matters is what a client is worth over two years, not what the first click cost. If your current ads are already busy and unprofitable, that is a pricing and offer problem, and no amount of bid tuning fixes it.",
  },
  {
    q: "Instagram or Facebook — where should a medspa actually spend?",
    a: "Both, in one campaign, and let delivery decide. Aesthetics is the one healthcare category where Instagram Reels and Stories genuinely carry their weight, and the same creative often performs differently across placements for reasons no one can predict in advance. Splitting budget by platform up front starves the learning phase. The more useful split is by offer and by audience stage, not by app icon.",
  },
  {
    q: "What creative do you need from our medspa to launch?",
    a: "Less than most clinics expect. A phone shot in decent light of your injector explaining one treatment out-loud outperforms a polished brand film more often than not, because it reads as a real person in a real room. We write the scripts and hand you a shot list you can film in an afternoon between appointments. If nobody on staff wants to be on camera, we go with static and carousel concepts — that works, it just needs more creative volume to get to the same place.",
  },
  {
    q: "Does the Meta Pixel put a medspa at risk?",
    a: "A default install can. Meta will not sign a Business Associate Agreement, so nothing identifying a client alongside a treatment can be allowed to reach it. The dangerous patterns are ordinary ones — a pixel left firing on an intake form, a confirmation URL that names the procedure, a portal page inside the tracked domain. We configure events to count that something happened without carrying what it was, keep tracking off intake and portal pages entirely, and document the whole configuration so your attorney can review it. We are your marketing agency, not your counsel.",
  },
  {
    q: "How long before a medspa account is producing consistently?",
    a: "Setup is roughly 10 to 14 days — Business Manager access, tracking build and verification, landing page, first creative batch, policy review. From launch, expect three to four weeks of learning before the numbers stabilize, and a first honest read at about 60 days once there is enough conversion data to compare creative against creative. Everything is month-to-month after the setup period; we do not hold clients in contracts while an account underperforms.",
  },
  {
    q: "Do you work with medspas outside Florida?",
    a: "Yes. Primara is based in West Palm Beach and a good share of our client work is in Florida, but Meta Ads management is not geographically constrained the way local SEO is — we run accounts for independent medspas anywhere in the United States. What we do not take is chains, franchise groups, or practices that want us to advertise a service the clinic cannot actually staff.",
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
    title: "Creative Built for a Category Meta Polices Hardest",
    body: "Aesthetics draws more automated enforcement than any other healthcare vertical, and the rules moved in July 2026 from format bans to claims-based review. We script and produce ad creative that stays clearly on the safe side of Personal Attributes and health-claim policy, run it through review before anything is submitted, and keep enough concepts in rotation that a single disapproval never takes the account dark.",
  },
  {
    title: "Offers That Survive Contact With Your Price List",
    body: "The discount aggregators have trained your market to wait for a deal. We build the campaign around a consultation, a membership, or a treatment package instead of a unit price — so the person who responds is someone you want on the book at your real rate, not someone shopping for the cheapest syringe in the county.",
  },
  {
    title: "Consult Landing Pages, Not Your Homepage",
    body: "Each offer gets its own page on the same Next.js stack we use for website builds: one decision, no competing navigation, mobile-first because nearly all Meta traffic is. The page explains the treatment honestly, sets the expectation for the consult, and makes booking a single tap.",
  },
  {
    title: "Tracking That Counts Without Carrying Health Data",
    body: "Conversion events configured to record that a booking happened without transmitting what it was for, kept off intake and portal pages entirely, and documented so your privacy officer can review exactly what is collected. Meta's reported numbers are then reconciled monthly against what your front desk actually booked.",
  },
  {
    title: "Monthly Reporting Against Booked Treatments",
    body: "Platform attribution on Meta is modeled and privacy-constrained — treating it as truth is how agencies report leads that never became clients. Every month we compare what the account claims to what your calendar shows, and we report the reconciled number.",
  },
];

export default function MetaAdsForMedspasPage() {
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
            <li style={{ color: "var(--chalk)" }}>Meta Ads for Medspas</li>
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
            Meta Ads · Medspas
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "860px", marginBottom: "24px",
            }}
          >
            Meta Ads for Medspas
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Facebook and Instagram are where aesthetic demand is created rather than
            captured — nobody wakes up searching for a treatment they have not heard of.
            Primara runs Meta for independent medspas: creative that clears policy review,
            offers priced to bring in clients worth keeping, and tracking that never
            carries a client&rsquo;s health information.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--ember)", color: "#fff", fontWeight: 700, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Call (561) 291-2681
            </a>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "2px solid var(--wire)", color: "var(--chalk)", fontWeight: 600, padding: "0 1.5rem", height: "52px", borderRadius: "6px", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Ad Account Review
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8125rem", color: "var(--smoke)" }}>
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent medspas only · Month-to-month after setup
          </p>
        </div>
      </section>

      {/* Why this combination */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "24px" }}>
              Why This Pairing
            </p>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", lineHeight: 1.2, marginBottom: "24px" }}>
              A medspa&rsquo;s best clients were not searching for you.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Search advertising only reaches the small slice of your market that already
              decided it wants a treatment and is now choosing a provider. In aesthetics
              that slice is tiny compared to the number of people who would book if the
              right offer reached them at the right moment. That is the whole argument for
              paid social in this category, and it is why most established medspas end up
              with Meta as their largest acquisition channel rather than their second one.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The catch is that Meta enforces harder here than anywhere else in healthcare.
              Personal-attribute policy means an ad may not imply it knows something about
              the viewer&rsquo;s appearance, and the July 2026 shift to claims-based review
              of before-and-after imagery gave clinics more room while making the remaining
              boundaries less obvious. Running this channel well is less about media buying
              than about knowing precisely where those lines sit — and building creative
              that never has to test them.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "48px" }}>
            What We Run
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
            Medspa Meta Ads — Common Questions
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
        heading="Related Services & Verticals"
        items={[
          { href: "/services/meta-ads", label: "Meta Ads", description: "The full service page — pillars, planning benchmarks, and how tracking is built." },
          { href: "/medspas", label: "Medspa Marketing", description: "Everything we do for medspas, not just paid social — map pack, reviews, and site." },
          { href: "/locations/meta-ads-for-dental-practices", label: "Meta Ads for Dental Practices", description: "The same channel applied to implants, aligners, and cosmetic dentistry." },
          { href: "/locations/medspas-florida", label: "Medspa Marketing in Florida", description: "The statewide picture for Florida aesthetic clinics." },
          { href: "/locations/meta-ads-florida", label: "Meta Ads Management in Florida", description: "Paid social management for Florida practices across every vertical." },
          { href: "/hipaa", label: "HIPAA-Aware Marketing", description: "How we handle tracking, reviews, and ad data for covered entities." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Let&rsquo;s Look at Your Current Ad Account
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit covers your creative, your offer structure, and what your Pixel is
            currently sending — whether or not you run ads with us.
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
