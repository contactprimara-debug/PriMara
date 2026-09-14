import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Meta Ads for Medical Practices, Medspas & Dental Clinics | Primara",
  description:
    "Primara manages Facebook and Instagram ads for independent medical practices, medspas, and dental clinics. HIPAA-aware tracking, policy-safe creative, landing pages, and call tracking. No long-term contracts.",
  alternates: { canonical: "https://primara365.com/services/meta-ads" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meta Ads for Medical Practices, Medspas & Dental Clinics | Primara",
    description:
      "Facebook and Instagram ad management built for healthcare: policy-safe creative, HIPAA-aware conversion tracking, dedicated landing pages, and call tracking.",
    type: "website",
    url: "https://primara365.com/services/meta-ads",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://primara365.com/services" },
    { "@type": "ListItem", position: 3, name: "Meta Ads", item: "https://primara365.com/services/meta-ads" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads for Medical Practices, Medspas and Dental Clinics",
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
  serviceType: "Social Media Advertising",
  description:
    "Facebook and Instagram advertising management for independent medical practices, medspas, and dental clinics — audience strategy, policy-compliant creative, HIPAA-aware conversion tracking, landing pages, and call tracking.",
};

const pillars = [
  {
    label: "Audience & Account Structure",
    tag: "Targeting",
    body:
      "Meta removed health-related detailed targeting options in 2022, which broke the way most agencies still pitch this channel. You cannot buy an audience of \"people with low testosterone\" or \"people researching implants\" any more. What works now is a different build entirely: broad geographic targeting inside your real drive-time radius, first-party customer lists you already own, and lookalikes grown from people who actually booked — with the creative doing the qualifying that targeting used to do.",
    items: [
      "Drive-time and ZIP-level geo targeting matched to where your patients actually come from, not a lazy 25-mile radius",
      "Customer-list and lookalike audiences built from your booked-patient list, uploaded hashed — never raw",
      "Exclusion audiences so existing patients and recent bookers stop absorbing acquisition budget",
      "Campaign structure separated by offer and intent stage, so a consult request and a brand-awareness view never share a budget",
      "Placement strategy across Feed, Reels, and Stories — with creative cut for each, not one asset stretched to fit",
    ],
  },
  {
    label: "Creative Production & Testing",
    tag: "The Actual Lever",
    body:
      "On Meta, creative is the targeting. The ad has to stop a thumb, communicate who you are, and pre-qualify the wrong people out — in about two seconds. We build a creative library rather than an ad: multiple hooks, multiple formats, and a testing schedule that retires fatigued assets before performance quietly decays.",
    items: [
      "Founder- and provider-led video scripts shot on a phone — the format that consistently outperforms polished stock in healthcare",
      "Static and carousel concepts for practices that do not want a provider on camera",
      "Hook, offer, and proof variants tested independently so you learn which element is doing the work",
      "A refresh cadence tied to frequency and cost-per-result, not to a calendar reminder",
      "Every asset pre-checked against Meta's Personal Attributes and health policies before it is ever submitted",
    ],
  },
  {
    label: "HIPAA-Aware Tracking & Ad Compliance",
    tag: "Where Most Agencies Fail",
    body:
      "This is the part almost nobody gets right. Meta does not sign Business Associate Agreements, which means no protected health information may reach Meta — ever. A default Pixel install on a patient portal, a scheduling confirmation page, or a condition-specific URL can transmit exactly the kind of data that has driven a wave of healthcare tracking litigation. We configure this channel on the assumption that anything sent to Meta is public.",
    items: [
      "Pixel and Conversions API configured to fire event counts only — no URLs, form field contents, or condition identifiers",
      "Tracking deliberately excluded from patient portals, intake flows, and post-booking confirmation pages",
      "Lead form questions written to capture contact intent, never clinical detail or condition disclosure",
      "Ad copy reviewed against Meta's Personal Attributes policy — no ad may imply it knows a viewer's condition",
      "Before-and-after imagery judged against Meta's 2026 claims-based standard — and negative self-perception hooks and unrealistic-result claims killed at the script stage, not after a rejection",
      "A written record of what is and is not tracked, so your privacy policy and your ad account actually agree",
    ],
  },
  {
    label: "Landing Pages & Call Tracking",
    tag: "Where Spend Converts",
    body:
      "Sending paid social traffic to a homepage is the single most common way practices waste this budget. Meta traffic arrives cold — it was not searching for you — so the page has to do the convincing that a Google searcher had already done for themselves before clicking.",
    items: [
      "A dedicated landing page per offer, built on the same Next.js stack as our website work — not a page builder bolted onto your site",
      "One decision per page: book, call, or request a consult. No sitewide navigation competing with the CTA",
      "Mobile-first layout — the overwhelming majority of Meta traffic never sees a desktop version",
      "Call tracking that attributes inbound calls to campaign and creative without recording clinical conversation",
      "Form and call events reconciled monthly against what your front desk actually booked, so reported leads and real patients are the same number",
    ],
  },
];

const faqs = [
  {
    q: "Do Meta ads actually work for medical practices, or is this a Google-only game?",
    a: "They work for different jobs. Google captures people already searching for a provider — that is demand capture, and it is finite. Meta creates demand: it puts a specific, well-framed offer in front of people who fit your patient profile but were not searching today. For high-consideration, elective, and aesthetic services — implants, clear aligners, injectables, hormone optimization, concierge memberships — Meta is frequently the larger of the two channels because the audience is far bigger than the number of people typing a query this month. For urgent care or emergency dentistry, Google is still the primary channel and we will say so.",
  },
  {
    q: "Can you target people on Facebook by medical condition or treatment interest?",
    a: "No, and any agency telling you otherwise is either out of date or making it up. Meta removed detailed targeting options tied to health, causes, and other sensitive categories in 2022. Modern healthcare campaigns are built on geography, first-party customer lists, lookalike audiences, and — most importantly — creative that self-selects the right respondent. In practice this constraint is an advantage for well-run accounts, because it moves the competitive edge from audience selection, which anyone can buy, to creative and offer, which most practices never invest in.",
  },
  {
    q: "Is the Meta Pixel a HIPAA problem for my practice?",
    a: "It can be a serious one. Meta does not sign Business Associate Agreements, so protected health information must never be transmitted to it. A default Pixel installation that fires on a patient portal, an appointment confirmation URL, or a page whose address names a condition can send identifying data alongside health context — the pattern behind a large volume of healthcare tracking litigation in recent years. We configure tracking to count events without capturing their content, keep it off portal and intake pages entirely, and document what is collected. We are a marketing agency, not your legal counsel, and we expect your privacy officer or attorney to review the configuration we hand over.",
  },
  {
    q: "What is the difference between running Meta Ads and Google Ads?",
    a: "Intent and time horizon. A Google searcher has already decided they need care and is choosing a provider, so the click is expensive and converts quickly. A Meta viewer is scrolling and has decided nothing, so the impression is cheap, the conversion window is longer, and the creative carries nearly all of the weight. The reporting also differs: Meta attribution is modeled and privacy-constrained, so we reconcile it against booked appointments rather than treating the platform's number as truth. Most of our clients eventually run both, with Google defending existing demand and Meta building new demand.",
  },
  {
    q: "How much should a medspa or dental clinic budget for Meta Ads?",
    a: "Meta rewards volume of data, so under-funded accounts learn too slowly to optimize. In most markets the minimum effective ad spend is $1,000–$2,500 per month, plus Primara's management fee, plus creative production if you want us handling the shoot. High-ticket categories — full-arch implants, body contouring, surgical aesthetics — usually need the upper half of that range or more to gather enough conversion signal. We quote the management fee after the audit, once we have seen your market, your current tracking, and your offer.",
  },
  {
    q: "Do we need a videographer, or can you work with what we have?",
    a: "You do not need a production crew. The highest-performing healthcare creative on Meta is usually a provider talking straight into a phone camera in good light — it reads as real, which is exactly the signal a skeptical viewer is looking for. We write the scripts, give you a shot list you can film in under an hour, and edit. If nobody at the practice wants to be on camera, we build static and carousel concepts instead; that route works, it simply tends to need more creative volume to reach the same result.",
  },
  {
    q: "How fast do campaigns go live, and is there a long-term contract?",
    a: "No long-term contracts — month-to-month after setup. Setup runs about 10–14 days from signed agreement: account and Business Manager access, tracking build and verification, landing page, first creative batch, and policy review before anything is submitted. It is slower than our Google Ads launch on purpose, because the tracking and creative approval work is the part that cannot be retrofitted safely.",
  },
];

// Derived from `faqs` above — single source of truth, so the schema can
// never drift out of sync with the visible Q&A content on the page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const verticalAngles = [
  {
    name: "Medspas",
    href: "/medspas",
    body:
      "The most visual category in healthcare and the one Meta polices hardest. Since July 2026 the rule is claims-based: a before-and-after is no longer an automatic rejection, but attach a \"hate your wrinkles?\" hook or a guaranteed result and the ad — sometimes the account — comes down. Knowing exactly where that line sits is the work. Membership and package offers carry the economics.",
  },
  {
    name: "Dental Clinics",
    href: "/dental-practices",
    body:
      "Implants, clear aligners, and cosmetic work are researched for months before anyone calls. Meta is where that consideration window opens. Routine hygiene and emergency demand stay on Google — we do not pretend otherwise.",
  },
  {
    name: "Men's Health",
    href: "/mens-health",
    body:
      "A cash-pay category with clear lifetime value, and one where Meta's Personal Attributes policy bites hardest — an ad may not imply it knows the viewer's condition. Compliant copy here is a craft, and it is why accounts in this vertical get flagged so often.",
  },
  {
    name: "Primary Care & Mental Health",
    href: "/primary-care",
    body:
      "Best used for specific, nameable offers — a new provider accepting patients, a concierge membership, a group practice with same-week availability — rather than generic \"we're accepting new patients\" spend.",
  },
];

export default function MetaAdsPage() {
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
            <li><Link href="/services" style={{ color: "var(--ash)", textDecoration: "none" }}>Services</Link></li>
            <li aria-hidden="true" style={{ color: "var(--wire)" }}>/</li>
            <li style={{ color: "var(--chalk)" }}>Meta Ads</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--void)",
          padding: "clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "3px",
              padding: "5px 14px",
              marginBottom: "32px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--gold)",
            }}
          >
            Flagship Service · Facebook &amp; Instagram
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "860px",
              marginBottom: "24px",
            }}
          >
            Meta Ads for Medical Practices, Medspas, and Dental Clinics
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--ash)",
              lineHeight: 1.75,
              maxWidth: "660px",
              marginBottom: "40px",
            }}
          >
            Search finds the patients who are already looking for you. Facebook and Instagram
            reach the far larger group who would choose you — and have not started looking.
            Primara runs the whole stack: audience strategy, creative production, HIPAA-aware
            tracking, landing pages, and call attribution.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid var(--wire)",
                color: "var(--chalk)",
                fontWeight: 600,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get a Free Audit
            </Link>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.8125rem",
              color: "var(--smoke)",
            }}
          >
            Liam Costello &amp; Gio LaRoche, Co-Founders · Independent practices only · No long-term contracts
          </p>
        </div>
      </section>

      {/* Why Meta */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "780px" }}>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "24px",
              }}
            >
              Why It Works
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
                color: "var(--chalk)",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Google has a ceiling. It is the number of people searching. Meta does not have that ceiling.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Every practice that runs search ads eventually hits the same wall: you can own every
              relevant keyword in your market and still be capped by how many people typed them this
              month. That ceiling is especially low for elective and high-consideration care. Nobody
              searches &ldquo;full-arch dental implants near me&rdquo; the day they start thinking
              about it — they think about it for months first, and that entire stretch happens
              somewhere other than a search box.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "20px" }}>
              Meta is where that stretch happens. It is also the only major channel where a small
              independent practice can beat a much larger competitor on creative alone, because the
              auction rewards the ad people actually watch — not the one with the biggest budget
              behind it. A medspa with a good hook and an honest offer genuinely outperforms a
              chain with ten times the spend, and we have built this service around that fact.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
              The catch is that healthcare is the hardest category to run on this platform. Health
              targeting was removed. Ads may not imply they know anything about a viewer&rsquo;s
              condition or appearance. Before-and-after imagery moved to claims-based review in
              July 2026 — no longer an automatic rejection, but still the fastest way to lose an
              account when it is paired with the wrong claim. And the tracking most agencies
              install by reflex can push protected health information to a company that will not
              sign a Business Associate Agreement. Most agencies learn these rules by getting an
              account restricted. We build around them from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Planning benchmarks */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(40px, 6vw, 64px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "28px",
            }}
          >
            Planning Benchmarks
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--wire)",
              border: "1px solid var(--wire)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {[
              { stat: "$1,000–$2,500", label: "Minimum effective monthly ad\nspend in most markets" },
              { stat: "10–14 days", label: "Setup: tracking, landing page,\ncreative, and policy review" },
              { stat: "4–8 assets", label: "Creative variants live at once,\nrefreshed on fatigue signals" },
              { stat: "Zero", label: "Protected health information\nsent to Meta, by design" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "clamp(24px, 3.5vw, 40px)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "var(--gold)",
                    lineHeight: 1.1,
                    marginBottom: "10px",
                  }}
                >
                  {stat}
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--ash)",
                    lineHeight: 1.6,
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.8125rem", color: "var(--smoke)", marginTop: "16px", fontStyle: "italic" }}>
            Planning assumptions we budget against — not projections, and not a promise of results.
            Your market, offer, and current tracking all move these numbers.
          </p>
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "48px",
            }}
          >
            What We Build
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.label}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "clamp(32px, 5vw, 56px) 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(32px, 5vw, 80px)",
                }}
                className="seo-pillar-grid"
              >
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "var(--smoke)",
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "var(--gold)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        borderRadius: "2px",
                        padding: "3px 8px",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                      fontWeight: 400,
                      color: "var(--chalk)",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                    }}
                  >
                    {pillar.label}
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75 }}>
                    {pillar.body}
                  </p>
                </div>

                {/* Right */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.875rem" }}>▸</span>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By vertical */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(48px, 7vw, 80px) 0", borderTop: "1px solid var(--wire)", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "24px",
            }}
          >
            How It Changes By Vertical
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.2,
              marginBottom: "clamp(32px, 4vw, 48px)",
              maxWidth: "700px",
            }}
          >
            The same platform behaves like four different channels depending on who you treat.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(20px, 3vw, 28px)",
            }}
          >
            {verticalAngles.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="related-link-card"
                style={{
                  display: "block",
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "6px",
                  padding: "26px 28px",
                  textDecoration: "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    marginBottom: "12px",
                    lineHeight: 1.2,
                  }}
                >
                  {v.name}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.7, margin: 0 }}>
                  {v.body}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  See the vertical →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ backgroundColor: "var(--void)", borderBottom: "1px solid var(--wire)", padding: "clamp(40px, 6vw, 64px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <blockquote style={{ maxWidth: "740px" }}>
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "var(--chalk)",
                lineHeight: 1.5,
                marginBottom: "16px",
              }}
            >
              &ldquo;The first thing we do on a Meta account is audit what the old Pixel was sending.
              More than once we have found a practice quietly transmitting appointment-confirmation
              URLs to a company that will never sign a BAA. Turning that off is worth more than any
              campaign we could launch on top of it.&rdquo;
            </p>
            <cite
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "var(--smoke)",
                fontStyle: "normal",
              }}
            >
              — Liam Costello &amp; Gio LaRoche, Co-Founders, Primara
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Pricing on request */}
      <section style={{ backgroundColor: "var(--surface)", padding: "clamp(40px, 6vw, 64px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "20px",
            }}
          >
            Pricing
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Quoted after the audit, not before it.
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, marginBottom: "16px" }}>
            Management fee depends on how many offers you are running, whether we are producing
            creative, and how much tracking remediation your current setup needs. We will not quote
            a number before looking at the account, because the honest answer changes a great deal
            between a single-location dental practice running one implant offer and a three-location
            medspa with a membership program.
          </p>
          <p style={{ fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8 }}>
            Ad spend is paid by you directly to Meta and is never marked up by us. Month-to-month
            after setup. Founder-led — Liam or Gio is on your account, not an account coordinator.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--void)", padding: "clamp(48px, 7vw, 80px) 0", borderBottom: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "40px",
            }}
          >
            Common Questions
          </p>
          <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: "1px solid var(--wire)",
                  padding: "24px 0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--wire)" }} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--wire)", padding: "clamp(32px, 4vw, 48px) 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px" }}>
            Related services
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { href: "/services/seo", label: "SEO for Medical Practices" },
              { href: "/services/google-ads", label: "Google Ads" },
              { href: "/services/patient-acquisition-ads", label: "Patient Acquisition Ads" },
              { href: "/services/medical-practice-website-design", label: "Website Design" },
              { href: "/services/online-reputation-management", label: "Reputation Management" },
              { href: "/services", label: "All Services" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "6px 14px",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Where Meta Ads Fit"
        items={[
          { href: "/medspas", label: "Medspa Marketing", description: "The vertical where paid social is the primary acquisition channel — and the most heavily policed." },
          { href: "/dental-practices", label: "Dental Practice Marketing", description: "Implants, aligners, and cosmetic cases have a months-long consideration window Meta is built for." },
          { href: "/services/google-ads", label: "Google Ads", description: "Demand capture: the patients already searching for a provider today." },
          { href: "/services/seo", label: "SEO", description: "The compounding channel underneath both ad platforms — and the one that keeps working when spend pauses." },
          { href: "/the-audit", label: "The Free Audit", description: "What we look at before recommending any ad spend, including your current tracking setup." },
          { href: "/hipaa", label: "HIPAA-Aware Marketing", description: "How we handle tracking, reviews, and ad data for covered entities." },
        ]}
      />

      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              marginBottom: "1rem",
            }}
          >
            Let&rsquo;s See What Your Account Is Actually Sending
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1rem" }}>
            The free audit includes a review of your existing Pixel and tracking setup — whether or
            not you end up running ads with us.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get My Free Audit
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Independent practices, medspas &amp; dental clinics · No long-term contracts ·{" "}
            <Link href="/services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
              All Services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
