import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO for Therapists in Florida — What Actually Works | Primara",
  description:
    "Therapist SEO for private practice in Florida: why Psychology Today underperforms, what search terms to target, how Google Maps beats directories for private-pay client acquisition.",
  alternates: { canonical: "https://primara365.com/therapist-seo" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SEO for Therapists in Florida — What Actually Works | Primara",
    description:
      "How Florida therapists in private practice can rank on Google, outperform Psychology Today listings, and attract private-pay clients through local SEO.",
    type: "website",
    url: "https://primara365.com/therapist-seo",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SEO for Therapists in Florida — What Actually Works",
  url: "https://primara365.com/therapist-seo",
  description:
    "Comprehensive guide to therapist SEO in Florida: why Psychology Today underperforms, what search terms drive private-pay clients, and how Google Business Profile beats directories.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Therapist SEO", item: "https://primara365.com/therapist-seo" },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO for Therapists",
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
  areaServed: { "@type": "State", name: "Florida" },
  description:
    "Local SEO and Google Business Profile optimization for therapists, psychologists, and licensed counselors in Florida private practice.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
  },
};

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

const searchTerms = [
  {
    category: "High-Urgency Searches",
    description: "People actively seeking immediate help — highest intent, highest conversion rate.",
    terms: [
      "therapist near me accepting new patients",
      "anxiety therapist [city]",
      "therapist same week appointment [city]",
      "depression therapist near me",
      "counselor accepting new clients [city]",
    ],
  },
  {
    category: "Specialty-Driven Searches",
    description: "Clients who know what they need — modality, population, or condition specific.",
    terms: [
      "EMDR therapist [city]",
      "CBT therapist [city]",
      "trauma therapist [city]",
      "couples counselor [city]",
      "teen therapist [city]",
      "ADHD therapist adults [city]",
      "grief therapist [city]",
    ],
  },
  {
    category: "Location-Driven Searches",
    description: "Geographic intent searches — neighborhood, landmark, or city-specific.",
    terms: [
      "therapist [neighborhood] [city]",
      "private practice therapist [city]",
      "licensed therapist [city] FL",
      "mental health counselor [city]",
      "psychologist near [city] FL",
    ],
  },
  {
    category: "Private-Pay Intent Searches",
    description: "Signals strong intent to pay out of pocket — your highest-value prospects.",
    terms: [
      "private pay therapist [city]",
      "therapist without insurance [city]",
      "out of network therapist [city]",
      "self pay therapy [city]",
      "cash pay therapist [city]",
    ],
  },
];

const milestones = [
  {
    period: "Days 1–30",
    heading: "Foundation Built",
    items: [
      "GBP claimed, verified, and fully optimized — 6–8 categories specific to your practice modalities and populations, 30+ services written in client-search language.",
      "12-month posting calendar loaded: weekly GBP posts publishing automatically from day one, covering modalities, populations, and local search queries.",
      "NFC tap cards placed in your office and QR codes on session end documentation for review generation.",
      "Local Falcon grid baseline run: your current rank position documented across a 7x7 grid for your primary keyword.",
      "NAP consistency verified across Psychology Today, Google, Healthgrades, Zocdoc, and the other directories that create conflicting signals.",
    ],
  },
  {
    period: "Days 30–60",
    heading: "First Data Arrives",
    items: [
      "GBP impression counts show a visible trend — the volume of searches in which your profile appeared, tracked week over week.",
      "First 3–8 new Google reviews typically arrive as the NFC tap card and QR system activates client behavior.",
      "First rank movement visible on specialty keywords (modality-specific, population-specific) where competition is lower.",
      "Local Falcon 60-day comparison: green cells show rank improvement; red cells show where work remains.",
    ],
  },
  {
    period: "Days 60–90",
    heading: "Measurable Momentum",
    items: [
      "First full monthly report: Local Falcon comparison, review velocity vs. named local competitor, GBP impression trend.",
      "Secondary keyword rank movement documented — specialty searches, neighborhood-specific searches.",
      "Review count gap closing: therapists starting below 15 reviews typically reach 20–25 by the 90-day mark.",
      "GBP call tracking data begins showing whether ranking improvements are driving actual client inquiries.",
      "Primary keyword movement (\"therapist [city]\") begins in low-to-moderate competition markets.",
    ],
  },
];

export default function TherapistSEOPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "76px clamp(24px, 8vw, 120px) 0" }}>
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--smoke)",
          }}
        >
          <li><Link href="/" className="breadcrumb-link">Home</Link></li>
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>/</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>Therapist SEO</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="tseo-h1"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(48px, 7vw, 100px) clamp(24px, 8vw, 120px) clamp(72px, 10vw, 120px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: [
              "radial-gradient(ellipse 70vw 60vh at 10% 30%, rgba(27,110,110,0.14) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 85% 75%, rgba(201,168,76,0.07) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              border: "1px solid var(--wire)",
              padding: "6px 14px",
              borderRadius: "2px",
              marginBottom: "clamp(28px, 4vw, 48px)",
            }}
          >
            Therapist SEO · Florida · Private Practice Only
          </div>
          <h1
            id="tseo-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 40px)",
              maxWidth: "20ch",
            }}
          >
            SEO for Therapists in Florida —{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              What Actually Works
            </em>
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "var(--ash)",
              maxWidth: "60ch",
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Most therapist marketing advice treats therapy like any other service business. It isn&rsquo;t. Here&rsquo;s what actually drives private-pay client acquisition for independent therapists in Florida — and why the directory approach is costing you clients you don&rsquo;t know about.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "var(--ember)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get My Free Practice Audit →
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--chalk)",
                border: "1px solid var(--wire)",
                padding: "0 32px",
                height: "52px",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>

      {/* Why therapist SEO is different */}
      <section
        aria-labelledby="tseo-different"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            What Makes It Different
          </div>
          <h2
            id="tseo-different"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(48px, 6vw, 64px)",
            }}
          >
            Why therapist SEO is different from general healthcare SEO.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "clamp(32px, 4vw, 48px)",
            }}
          >
            {[
              {
                heading: "HIPAA constraints eliminate your best SEO assets.",
                body: "Most service businesses build credibility through case studies, testimonials, and detailed before/after stories. Therapists can't. HIPAA prohibits using patient information in marketing without explicit authorization — and most clients won't provide it, nor should they be asked. Therapist SEO must generate trust and authority without the primary tools most businesses use.",
              },
              {
                heading: "Therapy clients search differently than primary care patients.",
                body: "A person searching for a primary care doctor uses straightforward intent signals: \"primary care doctor near me.\" A person searching for a therapist uses symptom-based, modality-based, and population-based queries: \"anxiety therapist,\" \"EMDR therapist,\" \"therapist for men Miami.\" Your SEO architecture must match this search behavior, not the search behavior of a general medical practice.",
              },
              {
                heading: "Directories dominate therapist search results.",
                body: "Psychology Today, Zocdoc, TherapyDen, and BetterHelp have invested tens of millions in SEO to capture therapy-related searches. They rank above individual practice websites for almost every therapist keyword. Individual SEO for therapists must be built around the channels where directories have less dominance: Google Business Profile (Maps), local search with geographic specificity, and long-tail modality and population queries.",
              },
              {
                heading: "Private-pay vs. insurance intent changes the search landscape.",
                body: "Clients seeking private-pay therapy use different search terms than clients looking for insurance coverage. \"Private pay therapist Miami,\" \"out of network therapist Boca Raton,\" and \"cash pay therapy near me\" are low-competition, high-intent queries that individual practice websites can rank for when directories are chasing broader terms. Your SEO strategy should explicitly target private-pay intent if that's your practice model.",
              },
            ].map((block) => (
              <div key={block.heading}>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(17px, 1.8vw, 20px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                  }}
                >
                  {block.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "var(--ash)",
                    margin: 0,
                  }}
                >
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Directory Trap */}
      <section
        aria-labelledby="tseo-directory"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            The Directory Trap
          </div>
          <h2
            id="tseo-directory"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 36px)",
            }}
          >
            Psychology Today ranks. Your listing doesn&rsquo;t.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Psychology Today ranks for therapist searches because of its domain authority — 20+ years of SEO investment, millions of inbound links, and thousands of therapist profile pages that create a content depth Google rewards. When someone searches &ldquo;anxiety therapist Miami,&rdquo; Psychology Today appears at the top of organic results not because your listing is there, but because their domain is stronger than your practice&rsquo;s website.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            The problem is structural: Psychology Today captures the client, not your practice. A prospective client who lands on Psychology Today searches for therapists near them, compares 12 profiles, and may or may not click yours. If they do, they&rsquo;re still on Psychology Today&rsquo;s website. Their relationship is with the directory, not with you. The moment you stop paying the directory fee, that client acquisition channel disappears entirely.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            As the therapist directory space has become more crowded — Psychology Today now lists tens of thousands of therapists — individual listings within the directory are increasingly invisible. Being on page 3 of a Psychology Today therapist search is not meaningfully different from not being on Psychology Today at all.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            Google Maps and Google SEO operate differently. When a therapist has a fully optimized Google Business Profile with consistent review velocity, category specificity, and weekly GBP posts, they appear in the Local 3-Pack for high-intent searches — often above directory listings. A client who clicks your GBP listing goes directly to your practice profile, not a directory where you compete with 40 other therapists. That&rsquo;s the acquisition model worth building.
          </p>
          <p style={{ marginTop: "16px" }}>
            <Link
              href="/blog/psychology-today-vs-google-seo-for-therapists"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--ash)",
                textDecoration: "underline",
              }}
            >
              Read the full breakdown: Psychology Today vs. Google SEO for Therapists →
            </Link>
          </p>
        </div>
      </section>

      {/* Search Terms */}
      <section
        aria-labelledby="tseo-terms"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Target Keywords
          </div>
          <h2
            id="tseo-terms"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 16px",
            }}
          >
            Search terms Florida therapists should be targeting.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--ash)",
              maxWidth: "60ch",
              marginBottom: "clamp(32px, 5vw, 52px)",
            }}
          >
            Organized by intent type — not all searches are equal. High-urgency searches convert at higher rates; specialty and location searches build authority and drive long-term traffic.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {searchTerms.map(({ category, description, terms }) => (
              <div
                key={category}
                style={{
                  padding: "28px 32px",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  backgroundColor: "var(--surface-2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "8px",
                  }}
                >
                  {category}
                </p>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "12px",
                    color: "var(--smoke)",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                  }}
                >
                  {description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {terms.map((term) => (
                    <li
                      key={term}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        color: "var(--ash)",
                      }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, fontSize: "11px", marginTop: "2px" }}>▸</span>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GBP for Therapists */}
      <section
        aria-labelledby="tseo-gbp"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Google Business Profile
          </div>
          <h2
            id="tseo-gbp"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 36px)",
            }}
          >
            Your GBP is your #1 client acquisition channel — and almost no therapist has it right.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Google Maps ranks above Psychology Today listings for high-intent local searches. When a potential client searches &ldquo;anxiety therapist near me&rdquo; on their phone, the Local 3-Pack — the three Google Maps results that appear before anything else — is where the highest-intent, highest-conversion traffic goes. A practice in that 3-Pack captures clients that a Psychology Today listing never reaches.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "20px",
            }}
          >
            Most therapy GBPs are dramatically underoptimized. The typical therapy practice has one category (&ldquo;Psychologist&rdquo; or &ldquo;Mental health service&rdquo;), no service list, and photos of a waiting room. A fully optimized therapy GBP carries 6–8 relevant categories — &ldquo;Psychologist,&rdquo; &ldquo;Mental health clinic,&rdquo; &ldquo;Counselor,&rdquo; &ldquo;Child psychologist,&rdquo; &ldquo;Marriage or relationship counselor,&rdquo; and others based on your practice model — with 30+ services written in exact client-search language, weekly posts, consistent review velocity, and every attribute completed.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
            }}
          >
            The gap between the average therapy GBP and a fully optimized one is large enough that even in moderately competitive markets, a properly configured profile can move from outside the local pack to inside it within 90 days. That is the fastest client acquisition win available to most private practice therapists.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section
        aria-labelledby="tseo-timeline"
        style={{ borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ padding: sectionPad }}>
          <div style={{ maxWidth: "880px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
              }}
            >
              <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
              What to Expect
            </div>
            <h2
              id="tseo-timeline"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--chalk)",
                fontWeight: 400,
                margin: "0 0 clamp(36px, 5vw, 56px)",
              }}
            >
              Realistic timeline for a therapist starting from scratch.
            </h2>

            {milestones.map((milestone, idx) => (
              <div
                key={milestone.period}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "16px",
                  marginBottom: idx < milestones.length - 1 ? "0" : "0",
                  paddingBottom: "clamp(32px, 5vw, 48px)",
                  paddingTop: idx > 0 ? "clamp(32px, 5vw, 48px)" : "0",
                  borderBottom: idx < milestones.length - 1 ? "1px solid var(--wire)" : "none",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ minWidth: "120px", flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                      fontWeight: 700,
                    }}
                  >
                    {milestone.period}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(18px, 2vw, 22px)",
                      color: "var(--chalk)",
                      fontWeight: 400,
                      margin: "6px 0 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {milestone.heading}
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: 1,
                    minWidth: "260px",
                  }}
                >
                  {milestone.items.map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px", fontSize: "0.875rem" }}>▸</span>
                      <p
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: "0.9375rem",
                          color: "var(--ash)",
                          lineHeight: 1.75,
                          margin: 0,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section
        style={{
          backgroundColor: "var(--void)",
          borderTop: "1px solid var(--wire)",
          padding: "clamp(32px, 4vw, 56px) clamp(24px, 8vw, 120px)",
        }}
      >
        <p style={{ fontSize: "0.875rem", color: "var(--smoke)", marginBottom: "16px", fontFamily: "system-ui, sans-serif" }}>
          Related pages
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { href: "/mental-health", label: "Mental Health Marketing" },
            { href: "/locations/miami-therapist-marketing", label: "Miami Therapist Marketing" },
            { href: "/locations/fort-lauderdale-therapist-marketing", label: "Fort Lauderdale Therapist Marketing" },
            { href: "/blog/psychology-today-vs-google-seo-for-therapists", label: "Psychology Today vs. Google SEO" },
            { href: "/the-audit", label: "Get a Free Audit" },
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
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)", borderTop: "3px solid var(--ember)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--chalk)",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            See Where You Stand in Your Market — For Free
          </h2>
          <p style={{ color: "var(--ash)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            We audit your GBP, your website, your reviews, and your top local competitor. We&rsquo;ll show you exactly what it would take to move into the Local 3-Pack.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
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
              Get My Free Audit
            </Link>
            <a
              href="tel:+15612912681"
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
              Call (561) 291-2681
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
