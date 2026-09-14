import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, SITE_URL } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

const PAGE_URL = `${SITE_URL}/locations/dental-practices-west-palm-beach`;

export const metadata: Metadata = {
  title: "Dental Marketing in West Palm Beach, FL | Primara",
  description:
    "Marketing for independent dental practices in West Palm Beach and Palm Beach County — map-pack visibility against DSO-backed groups, implant and aligner campaigns, and review systems. Call (561) 291-2681.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dental Marketing in West Palm Beach, FL | Primara",
    description:
      "Local search, case-driven ad campaigns, and review generation for independent West Palm Beach dental practices.",
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
    { "@type": "ListItem", position: 3, name: "Dental Marketing West Palm Beach", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Practice Marketing in West Palm Beach",
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
  serviceType: "Digital Marketing for Dental Practices",
  audience: { "@type": "Audience", audienceType: "Independent dental practices in Palm Beach County" },
  description:
    "Digital marketing for independent dental practices in West Palm Beach and Palm Beach County — Google Business Profile and map-pack optimization, implant and clear aligner campaigns, review generation, and website work that supports high-value case acquisition.",
};

const faqs = [
  {
    q: "There is a group practice on every corner here. Where is the opening?",
    a: "In the specifics they cannot publish. A group running thirty Florida locations writes one implant page and deploys it everywhere, which means it names no dentist, describes no local case, and reads the same from Jupiter to Miami. An independent West Palm Beach practice can put the treating dentist on the page, explain how this office plans a case, and collect reviews naming a real person. Google rewards that difference and so do patients weighing a five-figure decision — but only if the practice actually publishes it rather than copying the group's tone.",
  },
  {
    q: "Why do we rank well at our address but not in Wellington or Jupiter?",
    a: "Because local ranking is calculated relative to where the searcher is standing, so your position is a map rather than a number. Practices routinely check from the front desk, see themselves at the top, and cannot explain why patients from ten minutes away never appear. We scan a grid across the real catchment — Wellington, Royal Palm Beach, Lake Worth, Palm Beach Gardens, Jupiter — and the gaps that turn up usually point at a fixable cause: a thin service page, a wrong category, or simply far fewer reviews than whoever is winning that corner.",
  },
  {
    q: "Which is worth more here, implants or aligners?",
    a: "In Palm Beach County, usually implants and full-arch work, because the local age profile skews toward restorative need — but that is a generalization and your own chart data beats it. The right answer comes from what your practice can staff and what your chairs can absorb. We would rather run one well-funded campaign for the case type you actually want more of than split a small budget across both and produce enough signal for neither.",
  },
  {
    q: "How fast does our front desk need to answer an ad inquiry?",
    a: "Minutes, during business hours. A paid-social inquiry comes from someone who was scrolling a moment ago and has committed to nothing; by the next morning they have moved on or called the group practice that answered. Before we launch we agree the follow-up path with you — immediate text, a call attempt inside the hour, a defined number of tries — and if the practice cannot staff it, we say so then rather than explaining a bad month later.",
  },
  {
    q: "Do you take more than one dental practice in the same area?",
    a: "No. Two practices competing for the same map grid cannot both be represented honestly, so we work with one per catchment and tell you on the first call if yours is already taken. This is also why we do not work with DSO-owned or franchise groups at all.",
  },
  {
    q: "What about reviews — can you get more of them?",
    a: "Yes, through a request-only text system: name and phone, a short ask, a link. No sentiment screening before the request, because asking only the patients you expect to be happy violates FTC guidance and Google's policies, and no clinical detail in the message. We reply to reviews under the same discipline — never confirming or denying that someone was a patient, and never describing treatment in a public reply.",
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
    title: "Grid-Measured Map Pack Position",
    body: "We scan where your practice ranks across Palm Beach County rather than from your own address, then work the causes behind the weak squares: primary category, a real page for every service the listing claims, profile completeness, and review velocity relative to whoever currently owns that corner.",
  },
  {
    title: "Pages a Group Practice Cannot Copy",
    body: "A genuine page per high-value service, naming the dentist who performs it and describing how this office plans and sequences a case. This is the one asset a multi-location template structurally cannot produce, and it is the difference in both search results and consult conversion.",
  },
  {
    title: "One Campaign Per Case Type",
    body: "Implants, clear aligners, and cosmetic work get separate campaigns with their own creative and landing pages, funded according to which chairs you actually want to fill. Emergency and routine demand stays on search, where the intent already exists — we do not run paid social at problems Google solves better.",
  },
  {
    title: "A Follow-Up Path That Holds",
    body: "Immediate confirmation text, a defined call cadence, and a named owner for every inquiry, agreed with your front desk before a campaign goes live. The most common reason dental ad spend underperforms in this market has nothing to do with the ads.",
  },
  {
    title: "Reporting in Consults, Not Leads",
    body: "Monthly: spend, inquiries, consults booked, consults attended, and which case types produced them — reconciled against your practice management system rather than the ad platform's modeled attribution. A good cost per lead sitting on top of consults that never happened shows up as what it is.",
  },
];

export default function DentalPracticesWestPalmBeachPage() {
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
            <li style={{ color: "var(--chalk)" }}>Dental Marketing West Palm Beach</li>
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
            Dental · West Palm Beach
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400,
              color: "var(--chalk)", lineHeight: 1.1, letterSpacing: "-0.02em",
              maxWidth: "860px", marginBottom: "24px",
            }}
          >
            Dental Marketing in West Palm Beach
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "660px", marginBottom: "40px" }}>
            Palm Beach County has one of the heaviest concentrations of group-backed dental
            practices in Florida, all running the same templated pages. Primara works with
            one independent practice per catchment — grid-measured local visibility, case-type
            campaigns, and a follow-up path that actually converts the inquiry.
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
            Liam Costello &amp; Gio LaRoche, Co-Founders · Based in West Palm Beach · One practice per catchment
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
              The groups outspend you. They cannot out-specify you.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Drive from downtown West Palm Beach out to Wellington and count the practices
              with a corporate parent. Their marketing is competent and heavily funded, and it
              is also identical across every location they own — one implant page, one bio-free
              about section, one set of stock photos. A patient researching a full-arch case
              for the third week in a row can feel that, even if they could not name it.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              An independent practice here has the opposite constraint and the opposite
              advantage: a smaller budget, and the ability to publish something true and
              particular. A named dentist explaining how they sequence a case, a page that
              admits what a treatment does not fix, reviews that mention a person rather than
              a brand. That is the entire strategy in this market, and it works precisely
              because the well-funded competition structurally cannot copy it.
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
          { href: "/dental-practices", label: "Dental Practice Marketing", description: "The full vertical page — services, approach, packages, and who this is not for." },
          { href: "/locations/dental-practices-florida", label: "Dental Marketing in Florida", description: "The statewide picture, region by region." },
          { href: "/locations/meta-ads-for-dental-practices", label: "Meta Ads for Dental Practices", description: "How implant and aligner cases get acquired on Facebook and Instagram." },
          { href: "/locations/google-ads-management-west-palm-beach", label: "Google Ads in West Palm Beach", description: "Where emergency and routine demand belongs locally." },
          { href: "/locations/gbp-optimization-west-palm-beach", label: "GBP Optimization in West Palm Beach", description: "The listing work behind local map-pack position." },
          { href: "/locations/medspas-west-palm-beach", label: "Medspa Marketing in West Palm Beach", description: "The other high-consideration vertical in our home market." },
        ]}
      />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--chalk)", marginBottom: "1rem" }}>
            Is Your Catchment Still Open?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            We work with one independent dental practice per area. Start with the free audit —
            your listing, your site, and your grid position, in 3&ndash;5 business days.
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
