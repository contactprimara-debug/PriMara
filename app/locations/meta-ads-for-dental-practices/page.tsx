import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/meta-ads-for-dental-practices`;

export const metadata: Metadata = {
  title: "Meta Ads for Dental Practices | Implant & Invisalign Campaigns | Primara",
  description:
    "Facebook and Instagram advertising for independent dental clinics — implant, clear aligner and cosmetic case acquisition, financing-aware offers, and speed-to-lead follow-up that turns inquiries into consults. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meta Ads for Dental Practices | Implant & Invisalign Campaigns | Primara",
    description:
      "Meta Ads for independent dental clinics — high-value case acquisition for implants, aligners, and cosmetic work.",
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
    { "@type": "ListItem", position: 3, name: "Meta Ads for Dental Practices", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads for Dental Practices",
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
  serviceType: "Facebook and Instagram Advertising for Dental Practices",
  audience: { "@type": "Audience", audienceType: "Independent dental practices and cosmetic dental clinics" },
  description:
    "Meta (Facebook and Instagram) advertising management for independent dental practices — campaigns built around implants, clear aligners, and cosmetic cases, with financing-aware offers, dedicated consult landing pages, and tracking configured without protected health information.",
};

const faqs = [
  {
    q: "Which dental services are actually worth advertising on Meta?",
    a: "The ones people think about for months before they call. Full-arch and single-tooth implants, clear aligners, veneers and smile makeovers, and sedation dentistry for anxious patients all have a long consideration window, and Meta is where that window opens. What does not belong here is routine hygiene and emergency work — a broken tooth at 9pm is a Google search, and we will tell you to put that budget on search instead of pretending paid social can serve it.",
  },
  {
    q: "Why do implant leads from Facebook feel unqualified?",
    a: "Usually because the ad sold a price instead of a decision. A campaign built on a dollar figure attracts people comparing dollar figures, many of whom are not clinically candidates and will never be. We build around the consult: what the appointment involves, what gets assessed, what the range of treatment paths looks like. That produces fewer raw leads and a much higher share who show up and are treatable — and when we report, the number we report is consults attended, not form fills.",
  },
  {
    q: "How much does a dental practice need to spend for this to work?",
    a: "Meta optimizes on conversion volume, so a starved account never gets out of the learning phase. For most markets the floor is roughly $1,500 to $2,500 a month in ad spend for a single high-value service line, plus management and any creative production. Full-arch implant campaigns generally need the top of that range or above, because the audience is narrow and each conversion signal is expensive to buy. We quote management after seeing your market and current setup rather than off a rate card.",
  },
  {
    q: "Should the dentist appear in the ads?",
    a: "It helps more than almost anything else you could film. Someone weighing a five-figure implant case is really deciding whether to trust a stranger with their mouth, and thirty seconds of the treating dentist explaining how they plan a case does that work better than any stock footage or graphic. Patient stories can be powerful too, but they require written authorization and careful handling — we will not use a patient's image or story on a claim you cannot support, and we never imply an outcome is typical when it is not.",
  },
  {
    q: "How fast does our front desk have to respond to these leads?",
    a: "Fast enough that it is worth solving before you spend a dollar. A Meta lead was scrolling a minute ago and has not committed to anything; a callback the next morning reaches someone who has already moved on. We build the follow-up sequence with you — immediate text, a call attempt within minutes during business hours, a defined number of tries — and if the practice cannot staff that, we say so before launch rather than after the first disappointing month.",
  },
  {
    q: "Is it safe to run a Meta Pixel on a dental website?",
    a: "Only if it is configured deliberately. Meta signs no Business Associate Agreement, so nothing that identifies a patient alongside treatment information can reach it. The common failures are mundane — a pixel left running on an appointment confirmation URL that names the procedure, or on a patient portal sitting under the same domain. We keep tracking off intake and portal pages, configure events to record that a conversion occurred without describing it, and document the setup so your attorney or privacy officer can review it. We are not providing you legal advice.",
  },
  {
    q: "Can financing be part of the offer?",
    a: "Yes, and for implant and full-arch campaigns it usually should be, because affordability is the real objection behind most abandoned inquiries. What matters is how it is worded: we present financing as available and explained at the consult rather than advertising specific approval odds, monthly figures, or terms we cannot guarantee for a given applicant. Overpromising here creates both a compliance problem and a room full of disappointed consults.",
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
    title: "One Campaign Per High-Value Case Type",
    body: "Implants, clear aligners, and cosmetic work are different purchases made by different people for different reasons, and blending them into one ad set teaches Meta nothing useful. Each service line gets its own campaign, its own creative angle, and its own landing page, so performance is legible and budget can move toward whichever case type your chairs can actually absorb this quarter.",
  },
  {
    title: "Creative That Sells the Consult",
    body: "Scripts written for the treating dentist and delivered as a shot list you can film between patients. The angle is always the decision, not the discount — what the consult examines, what treatment paths exist, what the patient should expect. No guaranteed outcomes, no invented credentials, no claims your clinical team would not sign their name to.",
  },
  {
    title: "Landing Pages and a Follow-Up Path",
    body: "A dedicated page per offer on the same Next.js stack we use for website builds, plus the follow-up sequence behind it: immediate confirmation text, a defined call cadence, and a clear handoff to whoever at your practice owns the inquiry. A great ad and a slow front desk produce nothing.",
  },
  {
    title: "Tracking Without Treatment Detail",
    body: "Conversion events configured to count a booking without transmitting what it was for, kept entirely off portal and intake pages, and documented in writing. Meta's modeled attribution is then reconciled monthly against your practice management software so the reported number matches reality.",
  },
  {
    title: "Reporting in Cases, Not Clicks",
    body: "Every month: spend, consults booked, consults attended, and the case types they came from — reconciled against what your schedule shows rather than what the ad platform claims. If a campaign is producing inquiries that never become treatment, that shows up in the report instead of being buried under a good cost-per-lead.",
  },
];

export default function MetaAdsForDentalPracticesPage() {
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
            <li style={{ color: "var(--chalk)" }}>Meta Ads for Dental Practices</li>
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
            Meta Ads · Dental
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "880px", marginBottom: "24px",
            }}
          >
            Meta Ads for Dental Practices
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Implants, clear aligners, and cosmetic cases get researched for months before
            anyone picks up the phone. Facebook and Instagram are where that consideration
            starts. Primara builds one campaign per case type, writes creative that sells
            the consultation instead of a price, and reports in consults attended rather
            than form fills.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent practices, not DSOs · Month-to-month after setup
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
              Nobody searches for an implant the day they start thinking about one.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              A patient who eventually accepts a full-arch case usually spent months
              half-deciding first — avoiding certain foods, covering their mouth in photos,
              assuming it was unaffordable. By the time they type &ldquo;dental implants near
              me&rdquo; they have already narrowed the field, and the search auction for that
              phrase is one of the most expensive in local advertising. Meta reaches the same
              person eighteen months earlier, for a fraction of the cost per impression,
              while the decision is still open.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              That advantage disappears if the campaign is built like a search campaign.
              Demand-creation advertising needs a reason to stop scrolling, an offer that
              lowers the cost of the next step rather than the cost of the treatment, and a
              practice that answers quickly. Get those three right and dental is one of the
              strongest categories on the platform. Get them wrong and you buy a spreadsheet
              of names that never became patients.
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
            Dental Meta Ads — Common Questions
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
          { href: "/dental-practices", label: "Dental Practice Marketing", description: "Everything we do for dental clinics beyond paid social." },
          { href: "/locations/meta-ads-for-medspas", label: "Meta Ads for Medspas", description: "The other high-consideration vertical, and the one Meta polices hardest." },
          { href: "/locations/dental-practices-florida", label: "Dental Marketing in Florida", description: "The statewide picture for Florida dental practices." },
          { href: "/services/google-ads", label: "Google Ads", description: "Where emergency and routine demand belongs — the capture side of the split." },
          { href: "/hipaa", label: "HIPAA-Aware Marketing", description: "How we handle tracking, reviews, and ad data for covered entities." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Which Case Type Do You Want More Of?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit reviews your current ads, your consult follow-up, and what your
            tracking is sending — delivered in 3&ndash;5 business days.
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
