import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Healthcare Marketing | Primara",
  description:
    "Get answers about Primara's healthcare marketing services, timelines, HIPAA compliance, and results for independent practices.",
  alternates: { canonical: "https://primara365.com/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Frequently Asked Questions — Healthcare Marketing | Primara",
    description:
      "Get answers about Primara's healthcare marketing services, timelines, HIPAA compliance, and results for independent practices.",
    type: "website",
    url: "https://primara365.com/faq",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "How long does it take to rank on Google Maps?",
    a: "Google Business Profile optimization shows first movement on secondary keywords — think \"same-day sick visit [city]\" or \"Medicare primary care [city]\" — within 30 to 60 days of a full profile rebuild. Primary keywords like \"primary care doctor [city]\" or \"therapist [city]\" typically move at 90 to 180 days, depending on the competitive density of the local pack and your starting review count relative to competitors. Full competitive displacement of hospital-system or chain-owned profiles — overtaking a Baptist Health or an HCA-affiliated practice that has held the top spot for years — can take 6 to 12 months of consistent review velocity and GBP content. The factors that determine speed: how many relevant GBP categories are configured, how frequently posts are published, how consistently new reviews arrive each month, and whether your website carries city- and condition-specific pages that reinforce the geographic authority your GBP is signaling. Primara delivers a Local Falcon grid baseline at the start of every engagement and a monthly rank comparison so you can see exact movement — not estimates.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Primara operates on a month-to-month basis after an initial three-month recommended minimum. The three-month minimum is not a lock-in — it is a practical reality of how local search works. GBP configuration changes take four to six weeks for Google to fully index and begin rewarding in rankings. Review velocity needs 60-plus days to establish a visible pattern that Google's algorithm registers. A meaningful first ranking report — one with enough data to see what's moving and what isn't — can't be produced until the 90-day mark. Clients who evaluate the engagement before 90 days are evaluating incomplete data. There are no auto-renewals. If you want to continue after the three-month period, we continue. If you don't, we part ways without penalty and you keep everything we built — your optimized GBP, your review system, your website if applicable.",
  },
  {
    q: "What's included in the free audit?",
    a: "The free audit covers six specific areas of your current online presence. First, a GBP completeness score: we evaluate your category count, services listed, photo count, post frequency, and attribute configuration against what a fully optimized profile in your market looks like. Second, Maps position: we run a Local Falcon grid showing where your practice currently ranks for your primary keyword across a 7x7 or 9x9 grid of your service area — so you can see not just your average rank but the geographic shape of your visibility. Third, a review gap analysis: we pull your current review count and monthly velocity and compare it directly against the top-ranked practice in your local pack. Fourth, your website's mobile speed score via Google PageSpeed Insights. Fifth, NAP consistency: we check whether your practice name, address, and phone number appear identically across Google, Healthgrades, Zocdoc, and the other directories that create conflicting signals. Sixth, we identify the single fastest available win — the one change that would produce the most visible improvement in the shortest time. The audit is delivered in 3 to 5 business days and walked through personally by Liam or Gio — not a junior analyst, not a PDF with no explanation.",
  },
  {
    q: "Do you work with practices outside Florida?",
    a: "Currently, Primara serves South Florida exclusively — specifically Miami-Dade, Broward, Palm Beach, Martin, and Indian River Counties. This is a deliberate choice, not a capacity limitation. Local search dominance requires the kind of market-specific knowledge that cannot be templated: the specific hospital systems competing against your practice in each city, the review count benchmarks for the local pack in each ZIP code, the search intent patterns particular to each neighborhood, and the local directory and citation landscape in each market. We only take on cities where we can answer those questions without research, because hesitation on competitive intelligence is a tell that the agency doesn't actually know your market. We are evaluating an expansion into additional Florida markets — Tampa, Jacksonville, Orlando — in 2027, but we will not take on markets where we can't deliver that depth.",
  },
  {
    q: "What's the difference between your two packages?",
    a: "The Foundation Package covers GBP optimization, local SEO, and review management — the core infrastructure that drives your Google Maps ranking and your organic local search presence. It is designed for practices that already have a functional website and want to maximize their search visibility without rebuilding their entire digital presence. The Visibility Package adds a full website rebuild and Google Ads management — specifically Local Service Ads and targeted search campaigns — to the Foundation deliverables. It is designed for practices that either don't have a website, have a website more than three years old, or want to accelerate patient volume faster than organic SEO alone allows. A simple rule of thumb: if you have a website that loads quickly on mobile and was built after 2021, start with Foundation. If your website was built by your EHR vendor, hasn't been updated in years, or has no city- or condition-specific pages, the Visibility Package produces faster and more durable results.",
  },
  {
    q: "How do you handle HIPAA compliance in your marketing?",
    a: "Primara follows three specific practices to keep your marketing program HIPAA-aware. First, all review response copy follows the HIPAA minimum-necessary rule: we never confirm or deny a patient relationship in a review response, never reference a specific visit or condition, and never use language that could constitute an implicit acknowledgment that the reviewer is your patient. Second, all contact forms on Primara-built websites are designed to collect only the minimum necessary information — name, phone number, and preferred callback time — and never prompt users to enter symptoms, diagnoses, medications, or any protected health information. Third, Google Ads copy never references specific conditions, diagnoses, or treatment histories. It is important to understand the distinction between 'HIPAA-aware' marketing — which describes practices designed to minimize PHI exposure and avoid common compliance pitfalls — and 'HIPAA-compliant,' which is a legal certification that requires a formal assessment and ongoing compliance program. Primara delivers the former; the latter is the responsibility of your practice's compliance officer.",
  },
  {
    q: "What does 'founder-led' actually mean?",
    a: "It means that Liam Costello and Gio LaRoche personally handle every client engagement from onboarding through monthly reporting. There are no account coordinators who relay messages between you and the strategist. There are no offshore content writers producing your GBP posts and website copy. There are no junior analysts delivering your monthly reports. When you call Primara's number, you reach a founder. When your GBP strategy is built, it is built by the person who will be accountable for its results. When your monthly report is written and delivered, it is written by the person who designed your campaign. Primara maintains a maximum of 10 active clients at any given time specifically to make this model sustainable. We have turned down clients when the waitlist would have required us to exceed that number, because the thing that makes the engagement work — the direct, no-intermediary relationship between founder and client — disappears the moment we scale past what two people can personally manage.",
  },
  {
    q: "How do you generate reviews without violating Google's guidelines?",
    a: "Primara uses three compliant methods, all of which are patient-initiated and involve no incentivization. The first is NFC tap cards: physical cards placed at your checkout counter, in each exam room, and in your waiting room. When a patient taps the card with their smartphone, Google's review submission screen opens directly on their device — no app download, no login required. The patient writes and submits the review entirely on their own phone. The second method is a QR code printed on your discharge paperwork or after-visit summary: patients who scan it land on the same Google review submission page. The third is a 24- to 48-hour post-visit email follow-up for patients who have consented to communications, sent only to patients whose visit has concluded positively. We never offer incentives in exchange for reviews, which violates Google's review policies and can result in profile suspension. We never gate negative reviews — filtering feedback so that only positive patients reach the Google form — which violates both Google's policies and the FTC's endorsement guidelines. Every patient who receives a review request could leave any rating they choose.",
  },
  {
    q: "What results can I expect in the first 90 days?",
    a: "We track specific milestones at each phase. Days 1 through 7: your GBP is fully configured — all categories selected, all services written in patient-search language, photos uploaded, attributes set, and a 12-month posting calendar loaded via BrightLocal. Days 8 through 30: your review generation system is live — NFC tap cards shipped and installed, QR codes placed on discharge documentation, and the first 3 to 5 new reviews typically arrive within the first month as the system activates. Day 60: your GBP impression graph shows a baseline trend, your review velocity is established at a target of 2 to 3 new reviews per month, and your Local Falcon grid shows the geographic shape of your current rankings. Day 90: you receive your first meaningful monthly report — a full Local Falcon comparison showing rank movement since baseline, a review count comparison against your named local competitor, and documentation of any secondary keyword movement observed in the first 90-day window. Primary keyword movement on competitive terms typically requires more time, but secondary keyword movement — and the call volume it generates — is often visible within the first 90 days for practices entering markets where competitors have neglected their GBPs.",
  },
  {
    q: "Do I need a new website to work with you?",
    a: "No. The Foundation Package is designed to work with your existing website, regardless of what platform it was built on. GBP optimization and review management are independent of your website platform and produce measurable results on their own. If your existing website is more than three years old, loads in more than three seconds on mobile, or consists primarily of a homepage and contact page with no city- or condition-specific content, we will discuss whether a website rebuild makes sense as part of your engagement — but we will never require it as a condition of starting. The Visibility Package includes a website rebuild because the combination of a fully optimized GBP and a locally targeted website produces significantly faster and more durable results than either does independently. But if your website is recent, fast, and locally relevant, a rebuild adds cost without proportional benefit, and we'll tell you that.",
  },
  {
    q: "How is Primara different from PatientPop or WebPT?",
    a: "PatientPop and WebPT are software platforms with marketing features added as a revenue layer on top of their core practice management or physical therapy EHR products. Their marketing offerings are bundled into platform subscriptions and delivered via templated websites and automated review request emails that look nearly identical across every client in their network. Primara is a boutique agency with no software product, no EHR integration, and no platform subscription fee. We do one thing — local search dominance for independent healthcare practices — and we do it without the competing priorities that come with being primarily a software company. A direct comparison on deliverables: PatientPop charges a monthly platform fee plus a marketing add-on fee, and delivers a templated website from a shared theme library. Primara charges a single flat engagement fee and delivers a custom strategy built for your specific market. We are independent of your EHR, your billing system, and your patient portal — which means we are never competing with another product line for your attention or your budget.",
  },
  {
    q: "Can you manage my Google Ads if I'm already running campaigns?",
    a: "Yes. Google Ads management — both Local Service Ads and traditional search campaigns — is included in Primara's Visibility Package. If you are currently running campaigns independently or through another agency, we audit your current spend and conversion rate as part of our free audit. The most common problem we find is not insufficient budget — it is configuration errors that result in the budget being spent on the wrong searches, wrong geographic area, or wrong match types. We have audited practices spending $1,200 per month on Google Ads and generating two to three patient inquiries per month from that spend. That is not a budget problem; it is a configuration problem. A properly structured Local Service Ads campaign for a primary care practice or therapy practice, managed to the correct bid strategy and geographic targeting, typically produces a cost per lead of $35 to $90 — significantly lower than what poorly configured traditional search campaigns achieve at similar spend levels.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primara365.com" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://primara365.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ padding: "12px 24px" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8125rem", color: "var(--smoke)" }}>
              <li><Link href="/" style={{ color: "var(--ash)", textDecoration: "none" }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--chalk)" }}>FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 8vw, 96px) 0 clamp(32px, 5vw, 56px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <h1 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--ash)", maxWidth: "600px", lineHeight: 1.75 }}>
            Answers about Primara's healthcare marketing services, timelines, HIPAA practices, and what results look like for independent practices. If you have a question that isn't here, <Link href="/contact" style={{ color: "var(--chalk)", textDecoration: "underline" }}>contact us directly</Link>.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section style={{ backgroundColor: "var(--void)", padding: "0 0 clamp(48px, 8vw, 96px)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <dl style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map(({ q, a }, i, arr) => (
              <div key={q} style={{ padding: "clamp(20px, 3vw, 28px) 0", borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none" }}>
                <dt style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "var(--color-text)", fontWeight: 600, marginBottom: "8px" }}>
                  {q}
                </dt>
                <dd style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.75, margin: 0, maxWidth: "680px" }}>
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 56px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
            Learn more about Primara
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/the-audit", label: "Get a Free Audit" },
              { href: "/primary-care", label: "Primary Care Marketing" },
              { href: "/mental-health", label: "Mental Health Marketing" },
              { href: "/services", label: "Our Services" },
              { href: "/results", label: "Results" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: "0.875rem", color: "var(--ash)", border: "1px solid var(--wire)", borderRadius: "4px", padding: "6px 14px", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--chalk)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Get a free audit of your online presence — delivered in 3–5 business days.
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
