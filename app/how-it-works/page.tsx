import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Primara Works — From First Call Through Month 6 | Primara",
  description:
    "See exactly what happens when you hire Primara: Week 1 audit delivery, GBP rebuild, NFC review cards, Local Falcon grids, and compounding organic growth for Florida medical practices.",
  alternates: { canonical: "https://primara365.com/how-it-works" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "How Primara Works — From First Call Through Month 6 | Primara",
    description:
      "See exactly what happens when you hire Primara: Week 1 audit delivery, GBP rebuild, NFC review cards, Local Falcon grids, and compounding organic growth for Florida medical practices.",
    type: "website",
    url: "https://primara365.com/how-it-works",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How Primara Works",
  description:
    "Step-by-step walkthrough of the Primara engagement: audit, GBP rebuild, review system, Local Falcon tracking, and compounding local SEO growth for independent medical practices in Florida.",
  url: "https://primara365.com/how-it-works",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Primara",
    url: "https://primara365.com",
    telephone: "+15612912681",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://primara365.com/how-it-works" },
    ],
  },
};

interface Phase {
  period: string;
  label: string;
  heading: string;
  items: string[];
  note?: string;
}

const phases: Phase[] = [
  {
    period: "Week 1",
    label: "Audit Delivered",
    heading: "You see exactly where you stand",
    items: [
      "Full Google Business Profile audit — categories, services, photos, Q&A, posts, and competitor gap analysis",
      "Citation health report — every directory listing that's wrong, duplicate, or missing",
      "Review velocity benchmarking against your 3 closest local competitors",
      "Website technical audit — Core Web Vitals, mobile usability, schema markup, canonical issues",
      "60-minute walkthrough call with Liam or Gio — no slides, just your data",
    ],
    note: "The audit is yours to keep regardless of what you decide.",
  },
  {
    period: "Weeks 2–4",
    label: "GBP Rebuilt",
    heading: "Your Google listing becomes your best front desk",
    items: [
      "Primary and secondary GBP categories corrected to maximally relevant options for your specialty",
      "Services section populated with every procedure patients actually search for",
      "Photo strategy executed — interior, exterior, staff, equipment (we coordinate with your team)",
      "GBP posts scheduled for the next 90 days — health observances, FAQs, seasonal content",
      "NFC review cards ordered and shipped to your practice",
    ],
    note:
      "NFC cards tap-to-review from any smartphone. No app, no login, no friction for the patient.",
  },
  {
    period: "Days 30–60",
    label: "Reviews Arriving",
    heading: "Organic social proof starts compounding",
    items: [
      "Review cards installed at checkout, exam rooms, and waiting area — placement strategy included",
      "First reviews arrive within 10–14 days of card deployment in most practices",
      "HIPAA-compliant response templates written and deployed for every star rating",
      "Citation corrections pushed across 60+ directories — NAP consistency locked",
      "First Local Falcon grid scan establishes your baseline map pack ranking by keyword",
    ],
  },
  {
    period: "Day 60–90",
    label: "First Report",
    heading: "You see movement in the data",
    items: [
      "Local Falcon before/after grid comparison — your rank at 45+ points around your practice",
      "Review velocity chart — new reviews per week vs. competitor pace",
      "GBP Insights report — searches, profile views, direction requests, call clicks",
      "Citation audit completion — percentage of directories corrected and live",
      "Recommendations for Month 3 based on what's moving fastest",
    ],
  },
  {
    period: "Month 3",
    label: "Full Monthly Reporting",
    heading: "Every dollar is accounted for",
    items: [
      "Keyword rank movement for your top 10–15 local search terms",
      "Map pack position changes across your city and surrounding zip codes",
      "Review count and average rating delta vs. prior month",
      "New patient attribution data where available (EMR integrations or tracking numbers)",
      "Priority action items for the next 30 days, written in plain English",
    ],
  },
  {
    period: "Months 4–6",
    label: "Compounding Phase",
    heading: "The gap between you and competitors widens",
    items: [
      "Secondary keywords begin ranking as domain authority builds from citation consistency",
      "Review volume accelerates — each new review lifts map pack signal cumulatively",
      "GBP engagement (calls, direction requests) typically 40–80% above baseline by Month 6",
      "Content strategy activates if applicable — blog posts targeting high-intent search terms your competitors miss",
      "Year 1 roadmap drafted — next expansion opportunities, new service pages, neighborhood targeting",
    ],
    note:
      "Local SEO is not a campaign. It's infrastructure. Month 6 is not the finish line — it's when the foundation is solid enough to accelerate.",
  },
];

const neverHaveToItems = [
  "Chase an account manager for a status update — you have a direct line to the person doing the work",
  "Sign a 12-month contract — Primara is month-to-month because the results speak for themselves",
  "Explain your specialty to someone who Googled it the night before your call",
  "Approve every GBP post individually — you set the voice once, we execute",
  "Attend weekly calls — monthly reporting unless you want more",
  "Decipher a 40-slide deck to understand what happened last month",
  "Worry about fake reviews or review gating — we don't do either",
];

const neverDoesItems = [
  {
    heading: "Fake reviews",
    body: "We never manufacture reviews, pay patients, or use review pods. Every review that comes through our system is from a real patient who had a real visit. Google's spam filters are getting sharper every quarter — fake reviews are a liability, not an asset.",
  },
  {
    heading: "Review gating",
    body: "We never pre-screen patients before asking for reviews. Gating (only sending happy patients to Google) violates Google's review policies and the FTC's endorsement guidelines. We deploy universal ask systems and let your actual patient experience determine your rating.",
  },
  {
    heading: "Keyword stuffing",
    body: "We don't stuff your GBP description, service names, or website copy with keywords in ways that read unnaturally. Google's local algorithm rewards relevance and authority — not density.",
  },
  {
    heading: "Tactics we can't explain",
    body: "Every action we take, we can describe in plain language at your monthly call. If we wouldn't be comfortable saying it out loud to a Google representative, we don't do it.",
  },
  {
    heading: "Guaranteed rankings",
    body: "No ethical agency guarantees a specific map pack position — search results are dynamic and Google's algorithm is not for sale. We guarantee consistent effort, transparent reporting, and a measurable improvement trajectory.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--void)",
          borderBottom: "1px solid var(--wire)",
          paddingTop: "80px",
          paddingBottom: "64px",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "720px" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "16px",
              }}
            >
              The Engagement
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
                color: "var(--chalk)",
                marginBottom: "24px",
              }}
            >
              How Primara Works — From First Call Through Month&nbsp;6
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "var(--ash)",
                marginBottom: "32px",
              }}
            >
              Most medical marketing agencies send you a proposal, take your credit card, and disappear behind a client portal. Here is exactly what happens when you work with Primara — week by week, deliverable by deliverable, with no ambiguity about what you're getting.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/the-audit"
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--gold)",
                  color: "#fff",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Start with a Free Audit
              </Link>
              <Link
                href="/results"
                style={{
                  display: "inline-block",
                  border: "1px solid var(--wire)",
                  color: "var(--ash)",
                  padding: "14px 28px",
                  fontSize: "15px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                See Client Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect callout ────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--wire)",
          padding: "40px 0",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              { label: "Week 1", value: "Audit delivered" },
              { label: "Weeks 2–4", value: "GBP rebuilt" },
              { label: "Days 30–60", value: "Reviews arriving" },
              { label: "Day 60–90", value: "First Local Falcon grid" },
              { label: "Month 3+", value: "Full monthly reporting" },
              { label: "Months 4–6", value: "Compounding growth" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: "14px", color: "var(--chalk)", fontWeight: 500 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline phases ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--void)", padding: "80px 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {phases.map((phase, idx) => (
              <div
                key={phase.period}
                style={{
                  borderLeft: "2px solid var(--wire)",
                  paddingLeft: "32px",
                  paddingBottom: idx < phases.length - 1 ? "56px" : "0",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-7px",
                    top: "4px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "var(--gold)",
                    border: "2px solid var(--void)",
                  }}
                />

                <div style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginRight: "12px",
                    }}
                  >
                    {phase.period}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--smoke)",
                    }}
                  >
                    {phase.label}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 3vw, 28px)",
                    color: "var(--chalk)",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  {phase.heading}
                </h2>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "20px" }}>
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        color: "var(--ash)",
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--gold)",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {phase.note && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--smoke)",
                      borderLeft: "2px solid var(--gold)",
                      paddingLeft: "16px",
                      lineHeight: 1.6,
                    }}
                  >
                    {phase.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── You never have to ────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--wire)",
          borderBottom: "1px solid var(--wire)",
          padding: "80px 0",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                What you never have to do
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 4vw, 38px)",
                  color: "var(--chalk)",
                  lineHeight: 1.2,
                  marginBottom: "32px",
                }}
              >
                Working with Primara should feel like hiring someone you trust, not managing a vendor you don't
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {neverHaveToItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                      color: "var(--ash)",
                      fontSize: "15px",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        fontWeight: 700,
                        flexShrink: 0,
                        fontSize: "18px",
                        lineHeight: 1.3,
                      }}
                    >
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Primara never does ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--void)", padding: "80px 0" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "12px",
              }}
            >
              Our commitments
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 38px)",
                color: "var(--chalk)",
                lineHeight: 1.2,
                marginBottom: "48px",
              }}
            >
              What Primara never does
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {neverDoesItems.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    borderBottom: "1px solid var(--wire)",
                    paddingBottom: "32px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "20px",
                      color: "var(--chalk)",
                      marginBottom: "10px",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p style={{ color: "var(--ash)", fontSize: "15px", lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal links / learn more ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--wire)",
          borderBottom: "1px solid var(--wire)",
          padding: "64px 0",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Go deeper
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 3vw, 32px)",
              color: "var(--chalk)",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {[
              {
                href: "/services",
                label: "What&apos;s included",
                desc: "Full service breakdown — GBP, citations, reviews, local SEO",
              },
              {
                href: "/results",
                label: "Client results",
                desc: "Real outcomes from Florida medical practices at 90 and 180 days",
              },
              {
                href: "/pricing",
                label: "Pricing",
                desc: "Foundation vs. Visibility — what each package costs and what you get",
              },
              {
                href: "/faq",
                label: "FAQ",
                desc: "Common questions about contracts, timelines, and what we actually do",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "20px",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  backgroundColor: "var(--void)",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--chalk)",
                    marginBottom: "6px",
                  }}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
                <p style={{ fontSize: "13px", color: "var(--smoke)", lineHeight: 1.5 }}>
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--void)",
          borderTop: "3px solid var(--gold)",
          padding: "80px 0",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 text-center">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "16px",
            }}
          >
            Ready to start?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--chalk)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Week 1 starts with your free audit
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--ash)",
              marginBottom: "40px",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Request the audit and you&apos;ll have your full Google Business Profile, citation, and competitive analysis within 5 business days — no commitment required.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/the-audit"
              style={{
                display: "inline-block",
                backgroundColor: "var(--gold)",
                color: "#fff",
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                letterSpacing: "0.02em",
              }}
            >
              Get My Free Audit
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-block",
                border: "2px solid var(--wire)",
                color: "var(--ash)",
                padding: "16px 36px",
                fontSize: "16px",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
