import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, mentalHealthSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing for Mental Health Practices in Florida | Primara",
  description:
    "Primara helps independent therapists, psychologists, and group mental health practices in Florida rank higher on Google, get found by the right clients, and grow without relying on Psychology Today or insurance directories. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/mental-health" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Digital Marketing for Mental Health Practices in Florida | Primara",
    description:
      "Primara helps independent therapists, psychologists, and group mental health practices in Florida rank higher on Google and grow without relying on Psychology Today. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/mental-health",
  },
};

const problemBlocks = [
  {
    heading: "Demand for therapy is at an all-time high. Supply of visible independent providers is not.",
    body: "Google searches for therapists, counselors, and psychologists have increased over 300% since 2020 (Google Health Trends, 2024). That demand is real — and most of it is going to Psychology Today, BetterHelp, and Zocdoc because they've built the SEO infrastructure independent practices haven't. A solo therapist or small group practice with a well-optimized local presence can capture clients that $100M platforms are currently intercepting.",
  },
  {
    heading: "Psychology Today is renting you your own audience",
    body: "Every client who finds you through Psychology Today is a client that platform owns — not you. If you stop paying the directory fee, you disappear. If they change their algorithm, your referrals drop. A practice with strong Google Maps visibility and a ranked website owns its client acquisition. The directory becomes optional.",
  },
  {
    heading: "Mental health GBP optimization is almost never done correctly",
    body: "Most therapy practices have a GBP with one category (\"Psychologist\" or \"Mental health service\"), no service list, and photos of a waiting room. A fully optimized mental health GBP carries 6–8 categories — \"Psychologist,\" \"Mental health clinic,\" \"Counselor,\" \"Child psychologist,\" \"Marriage or relationship counselor,\" \"Addiction treatment center\" where applicable — and 30+ services written in exact client-search language: \"anxiety therapy near me,\" \"couples counseling [city],\" \"EMDR therapist Florida.\"",
  },
  {
    heading: "Stigma is declining. Search intent is rising. Your window is now.",
    body: "The cohort that normalizes therapy is the same cohort that searches on Google before calling. Millennials and Gen Z — who represent the largest growing demographic seeking mental health services — start their provider search online, read reviews, visit websites, and make decisions before making contact. If your practice isn't visible and credible online, you don't exist for this demographic.",
  },
  {
    heading: "Insurance panel saturation is making direct-pay the growth model",
    body: "Independent practices moving toward out-of-network or hybrid pay models need a stronger direct acquisition channel than insurance directory listings. Local SEO and Google Maps visibility are the highest-leverage tools for reaching self-pay and out-of-network clients who are actively searching and ready to commit.",
  },
];

const services = [
  {
    num: "01",
    title: "GBP Optimization for Mental Health Practices",
    body: "We configure 6–8 categories specific to your practice model, write 30+ services in the exact language your prospective clients use — \"anxiety treatment,\" \"trauma therapy,\" \"ADHD counseling adults,\" \"telehealth therapy Florida,\" \"couples counseling near me\" — fill every attribute, load 52 posts at onboarding via BrightLocal, and install a review generation system. Every review response we write is warm, professional, and never references any clinical detail — because trust is the entire product.",
  },
  {
    num: "02",
    title: "Mental Health Practice Website Rebuild",
    body: "30 pages at launch. Every page targets a specific search a prospective client might type. Modality pages — \"CBT therapist [city],\" \"EMDR therapy [city],\" \"DBT therapist [city].\" Population pages — \"teen therapist [city],\" \"couples therapy [city],\" \"men's therapist [city].\" Condition pages — \"anxiety treatment [city],\" \"depression therapy [city],\" \"trauma counseling [city].\" Built in Next.js, deployed on Vercel, with MentalHealthClinic JSON-LD schema and all 7 GBP consistency signals verified. Designed to feel warm and trusted — because the website is the first impression a vulnerable person has of your practice.",
  },
  {
    num: "03",
    title: "Review Generation",
    body: "Mental health reviews require a different kind of management. Clients are less likely to leave reviews spontaneously — not because they're unhappy, but because the nature of the relationship feels private. Our NFC tap card and QR system prompts reviews at the right moment, in the right way. We manage every response with clinical discretion — never referencing a client's experience, condition, or any identifiable detail. Responses are warm, professional, and human.",
  },
  {
    num: "04",
    title: "Local SEO Content",
    body: "Two new pages per month, every month. Modality depth — a page for every therapeutic approach you practice. Population specificity — a page for every population you serve. Geographic expansion — a page for every city or neighborhood in your service area. Mental health SEO content compounds fast because the keyword competition from other independent practices is low. Most of your competitors have a homepage, an about page, and a contact form. You'll have 54 pages.",
  },
];

const fits = [
  "Solo therapist, psychologist, or licensed counselor in Florida",
  "Small group practice (2–8 clinicians)",
  "Private pay, insurance-based, or hybrid",
  "Independently owned, not a franchise or platform",
  "Building a waitlist or expanding to new clients",
];

const doesNotFit = [
  "Platform-employed therapists (BetterHelp, Talkspace, etc.)",
  "Hospital or health system behavioral health departments",
  "Practices outside Florida",
  "Purely telehealth with no physical location",
];

const sensitivityPrinciples = [
  {
    title: "No outcome language. Ever.",
    body: "We never write copy that promises symptom relief, healing, recovery, or cure. Not on your website. Not in your GBP posts. Not in ad copy. Every page we build is honest about what therapy offers: a professional, evidence-based relationship — not a guaranteed result. This protects your license and builds actual trust.",
  },
  {
    title: "Review responses that protect client privacy by default",
    body: "Every review response we write assumes the reviewer may be a current or former client. We never confirm, deny, or allude to a clinical relationship. Positive reviews get a warm, professional thank-you that reinforces trust. Negative reviews get an empathetic, offline resolution invitation — nothing clinical, nothing defensive.",
  },
  {
    title: "Website copy that meets clients where they are",
    body: "A person searching for an anxiety therapist at 11pm is not in the same mindset as someone shopping for a dentist. Our website copy is direct but warm, authoritative but human. It answers the question the client is actually asking — \"can this person help someone like me?\" — not just \"what are this practice's qualifications.\"",
  },
  {
    title: "Population-specific pages that feel seen, not clinical",
    body: "A page titled \"Therapy for Men in [City]\" is not a medical document — it's a landing page written for a man who has never gone to therapy and is quietly searching at midnight. The tone, the framing, and the language are calibrated for that moment. Every population page we write is built around the search intent and emotional state of the person typing that query.",
  },
];

const stats = [
  {
    value: "300%+",
    label: "Increase in Google searches for therapists and counselors since 2020",
    source: "Google Health Trends, 2024",
  },
  {
    value: "1 in 5",
    label: "Florida adults experiencing a mental health condition annually — the majority who seek care start their search online",
    source: "SAMHSA, 2023",
  },
  {
    value: "6–8",
    label: "GBP categories a fully optimized mental health practice carries. Most practices have 1.",
    source: null,
  },
  {
    value: "30",
    label: "Pages at launch. Modality pages, population pages, condition pages, city pages — the architecture independent practices almost never build.",
    source: null,
  },
];

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function MentalHealthPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(mentalHealthSchema as Record<string, unknown>) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>Mental Health</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="mh-h1"
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
          {/* Label */}
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
            Mental Health Practices · Florida · Independent Practices Only
          </div>

          {/* H1 */}
          <h1
            id="mh-h1"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(52px, 8vw, 104px)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(24px, 3vw, 40px)",
              maxWidth: "18ch",
            }}
          >
            Your ideal clients are searching for help right now.
            <br />
            Psychology Today is showing up.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Your practice isn&rsquo;t.
            </em>
          </h1>

          {/* Subhead */}
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
            Primara builds the digital presence independent mental health practices in Florida deserve — Google Business Profile, local SEO, website, and review systems built around how people search for therapy, counseling, and psychiatric care.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              className="magnetic"
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
              Request Your Free Practice Audit →
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
                backgroundColor: "transparent",
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

      {/* ── Section 01 — The Problem ─────────────────────────────────────── */}
      <section
        aria-labelledby="mh-problem"
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
            The Problem
          </div>
          <h2
            id="mh-problem"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(48px, 6vw, 72px)",
            }}
          >
            Independent mental health practices are the most searched, least visible providers in healthcare.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "clamp(32px, 4vw, 48px)",
            }}
          >
            {problemBlocks.map((block) => (
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

      {/* ── Section 02 — Services ────────────────────────────────────────── */}
      <section
        aria-labelledby="mh-services"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
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
            What We Build
          </div>
          <h2
            id="mh-services"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 12px",
            }}
          >
            Built around how people search for mental health support — not how they search for a dentist.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--ash)",
              maxWidth: "60ch",
              margin: "0 0 clamp(48px, 6vw, 64px)",
            }}
          >
            Mental health search intent is different. People search by symptom (&ldquo;anxiety therapist near me&rdquo;), modality (&ldquo;EMDR therapist Florida&rdquo;), population (&ldquo;teen therapist [city]&rdquo;), and insurance (&ldquo;therapist accepting Aetna [city]&rdquo;). We build your local presence around all of it.
          </p>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {services.map((svc) => (
              <li
                key={svc.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "20px",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--wire)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--gold)",
                    opacity: 0.5,
                    lineHeight: 1,
                    paddingTop: "4px",
                  }}
                >
                  {svc.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(19px, 2vw, 22px)",
                      color: "var(--chalk)",
                      fontWeight: 400,
                      margin: "0 0 10px",
                      lineHeight: 1.25,
                    }}
                  >
                    {svc.title}
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
                    {svc.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 03 — Who This Is For ─────────────────────────────────── */}
      <section
        aria-labelledby="mh-who"
        style={{
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
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
            Who We Work With
          </div>
          <h2
            id="mh-who"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(28px, 4vw, 40px)",
            }}
          >
            Independent mental health practices. Not the platforms competing with you.
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
            Primara works with solo therapists, psychologists, psychiatrists, licensed counselors, and small group mental health practices in Florida. Private pay, insurance-based, and hybrid models. We do not work with BetterHelp, Talkspace, or any platform-based or corporate-owned practice.
          </p>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--ash)",
              marginBottom: "clamp(36px, 5vw, 52px)",
            }}
          >
            The mental health practices we work with have one thing in common: they&rsquo;re building something of their own. A caseload they own. A reputation in their community. A practice that doesn&rsquo;t depend on a directory or a platform deciding their visibility next quarter. That&rsquo;s what good local SEO builds.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
            }}
          >
            <div
              style={{
                padding: "28px 32px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
              }}
            >
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                Fits
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {fits.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "system-ui, sans-serif", fontSize: "14px", lineHeight: 1.55, color: "var(--ash)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M2.5 7l3 3 6-6" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: "28px 32px",
                border: "1px solid var(--wire)",
                borderRadius: "4px",
                backgroundColor: "var(--surface-2)",
              }}
            >
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "20px" }}>
                Does Not Fit
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {doesNotFit.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "system-ui, sans-serif", fontSize: "14px", lineHeight: 1.55, color: "var(--smoke)" }}>
                    <span style={{ flexShrink: 0, marginTop: "1px", color: "var(--wire)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 04 — Sensitivity-First Approach ──────────────────────── */}
      <section
        aria-labelledby="mh-sensitivity"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
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
            Our Approach
          </div>
          <h2
            id="mh-sensitivity"
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
            Your clients are searching in a vulnerable moment. Everything we build reflects that.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {sensitivityPrinciples.map((principle, i, arr) => (
              <div
                key={principle.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.4fr",
                  gap: "clamp(24px, 4vw, 48px)",
                  padding: "clamp(28px, 4vw, 40px) 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--wire)" : "none",
                  alignItems: "start",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(17px, 1.8vw, 20px)",
                    color: "var(--chalk)",
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {principle.title}
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
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 05 — By the Numbers ──────────────────────────────────── */}
      <section
        aria-labelledby="mh-numbers"
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
            The Case
          </div>
          <h2
            id="mh-numbers"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(40px, 5vw, 60px)",
            }}
          >
            The market is there. The visibility is not.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.value} style={{ borderTop: "1px solid var(--wire)", paddingTop: "24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    color: "var(--gold)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {stat.value}
                </div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", lineHeight: 1.65, color: "var(--ash)", margin: 0 }}>
                  {stat.label}
                </p>
                {stat.source && (
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "var(--smoke)", margin: "6px 0 0", fontStyle: "italic" }}>
                    — {stat.source}
                  </p>
                )}
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "24px", margin: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "var(--chalk)",
                margin: 0,
              }}
            >
              &ldquo;A private-pay therapy practice with a $150/session fee that adds 4 new ongoing clients per month — against a $150 client acquisition cost — recovers marketing spend in the first session. Every subsequent session is pure margin.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 06 — Packages ────────────────────────────────────────── */}
      <section
        aria-labelledby="mh-packages"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
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
            Pricing
          </div>
          <h2
            id="mh-packages"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Two packages. No surprises.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            <div style={{ padding: "36px", border: "1px solid var(--wire)", borderRadius: "4px", backgroundColor: "var(--surface)", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "8px" }}>Package 01</p>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--chalk)", fontWeight: 400, margin: "0 0 4px", lineHeight: 1.1 }}>Foundation</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--smoke)", margin: 0 }}>$750/mo + $1,500 setup</p>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", lineHeight: 1.6, margin: 0 }}>GBP Optimization · Local SEO · Monthly Reporting</p>
              <Link href="/packages/foundation" style={{ display: "inline-flex", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.08em", fontWeight: 600, color: "var(--chalk)", border: "1px solid var(--wire)", padding: "0 20px", height: "40px", borderRadius: "2px", textDecoration: "none", width: "fit-content", marginTop: "auto" }}>
                View Package Details →
              </Link>
            </div>
            <div style={{ padding: "36px", border: "1px solid var(--gold)", borderRadius: "4px", backgroundColor: "var(--surface)", display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
              <div style={{ position: "absolute", top: "16px", right: "16px", fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid var(--gold)", padding: "3px 8px", borderRadius: "2px" }}>
                Full Coverage
              </div>
              <div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "8px" }}>Package 02</p>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--chalk)", fontWeight: 400, margin: "0 0 4px", lineHeight: 1.1 }}>Visibility</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--smoke)", margin: 0 }}>$1,800/mo + $1,500 setup</p>
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", lineHeight: 1.6, margin: 0 }}>GBP + Website + Reviews + SEO Content · Full Coverage</p>
              <Link href="/packages/visibility" style={{ display: "inline-flex", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.08em", fontWeight: 600, color: "var(--gold)", border: "1px solid var(--gold)", padding: "0 20px", height: "40px", borderRadius: "2px", textDecoration: "none", width: "fit-content", marginTop: "auto" }}>
                View Package Details →
              </Link>
            </div>
          </div>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", fontStyle: "italic" }}>
            Month-to-month. 3-month minimum recommended. Setup fee is the only negotiable line.
          </p>
        </div>
      </section>

      {/* ── Section 07 — CTA ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="mh-cta"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: sectionPad,
          borderTop: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 80vw 60vh at 50% 50%, rgba(27,110,110,0.14) 0%, transparent 65%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)" }}>
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Get Started
          </div>
          <h2
            id="mh-cta"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 20px",
            }}
          >
            See exactly where your practice stands — for free.
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", lineHeight: 1.8, color: "var(--ash)", marginBottom: "clamp(32px, 4vw, 44px)" }}>
            We&rsquo;ll audit your GBP, your website, your reviews, and your top local competitor. We&rsquo;ll show you what the top-ranked therapist in your area is doing that you&rsquo;re not — and what it would cost to close that gap. Free. No obligation. Liam or Gio will walk you through it directly.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/the-audit"
              className="magnetic"
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
              Request Your Free Practice Audit →
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
    </main>
  );
}
