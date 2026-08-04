import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, mensHealthSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing for Men's Health Practices | Primara",
  description:
    "Primara helps independent men's health practices — TRT clinics, men's wellness centers, and urology practices — rank higher on Google, build patient trust, and grow without relying on national telehealth franchises. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/mens-health" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Digital Marketing for Men's Health Practices | Primara",
    description:
      "Primara helps independent men's health practices rank higher on Google and grow without relying on national telehealth franchises. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/mens-health",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const problemBlocks = [
  {
    heading: "National TRT telehealth franchises own the paid ads and the directories",
    body: "Search \"testosterone therapy near me\" in most cities and the first page is dominated by national telehealth brands with venture funding behind their ad spend. That doesn't mean the local clinic loses — it means the local clinic has to win a different way: organic Google Maps visibility, where a national telehealth-only brand often can't compete because it has no physical address to rank.",
  },
  {
    heading: "Stigma is declining. Search behavior is changing.",
    body: "Men researching testosterone therapy, ED treatment, or general men's wellness increasingly start that research privately, on Google, before ever calling a clinic. A practice that isn't visible at that research stage — GBP incomplete, no service-specific website pages, no reviews — simply isn't part of the decision by the time a man is ready to book.",
  },
  {
    heading: "Men's health GBP optimization is almost never done correctly",
    body: "Most independent men's health clinics have a GBP with one category — \"Medical Clinic\" or \"Urologist\" — and a handful of generic photos. A fully optimized profile carries multiple relevant categories (\"Men's Health Physician,\" \"Weight Loss Service,\" \"Urologist,\" \"Medical Clinic\" where applicable) and a service list written in the exact language patients search: \"TRT clinic near me,\" \"low testosterone doctor,\" \"ED treatment near me.\"",
  },
  {
    heading: "Referral-based growth doesn't scale in this category",
    body: "Word-of-mouth drives new patients in most medical specialties. It's a weaker channel here — men are simply less likely to bring up a TRT or ED clinic in casual conversation, even with friends. That makes a strong digital presence disproportionately important: for a lot of men, Google is the only place this research happens at all.",
  },
  {
    heading: "Direct-pay makes the marketing math favorable",
    body: "TRT, hormone optimization, and many men's wellness services are frequently cash-pay or self-pay, without the reimbursement lag of insurance billing. That changes the economics of patient acquisition: a single new patient on an ongoing treatment plan can be worth pursuing aggressively, because the lifetime value is clear and collected directly.",
  },
];

const services = [
  {
    num: "01",
    title: "GBP Optimization for Men's Health Practices",
    body: "We configure every relevant category for your practice model — Men's Health Physician, Urologist, Weight Loss Service, Medical Clinic — write a full service list in patient-search language (\"testosterone replacement therapy,\" \"low T treatment,\" \"ED treatment near me,\" \"men's hormone clinic\"), fill every attribute, load a full year of posts at onboarding, and install a review generation system. Review responses are professional and discreet by default — never confirming or referencing the nature of any patient's visit.",
  },
  {
    num: "02",
    title: "Men's Health Practice Website Rebuild",
    body: "A site built around the specific searches your prospective patients actually run. Service pages — \"testosterone replacement therapy [city],\" \"ED treatment [city],\" \"men's wellness clinic [city].\" Condition pages addressing the questions men research before calling: what low testosterone looks like, what a first visit involves, what's covered by cash-pay pricing. Built in Next.js, deployed on Vercel, with MedicalClinic JSON-LD schema and all core GBP consistency signals verified — designed to read as clinical and credible, not like a supplement ad.",
  },
  {
    num: "03",
    title: "Review Generation",
    body: "Men's health reviews carry the same privacy sensitivity as mental health reviews — a satisfied patient is often reluctant to leave a public review naming the service they received. Our NFC tap card and QR system prompts reviews at the right moment with language that doesn't require a patient to specify why they visited. Every response we write is professional and discreet, protecting patient privacy by default.",
  },
  {
    num: "04",
    title: "Local SEO Content",
    body: "New pages added on an ongoing schedule: one service page for every treatment you offer, one geographic page for every city or neighborhood in your service area. Men's health SEO content compounds quickly in most markets because independent competitors rarely go past a homepage and a contact form — while national telehealth brands have no local page to compete with at all.",
  },
];

const fits = [
  "Independent TRT, hormone optimization, or men's wellness clinic",
  "Urology practice with a men's health or low-T service line",
  "ED treatment or men's sexual health clinic",
  "Physician-owned, not a national telehealth franchise",
  "Cash-pay, insurance-based, or hybrid model",
];

const doesNotFit = [
  "National telehealth-only brands with no physical location",
  "Hospital-employed or health-system-owned practices",
  "Practices outside the United States",
  "Supplement or wellness retailers without a licensed clinical practice",
];

const sensitivityPrinciples = [
  {
    title: "No outcome language. No exaggerated claims.",
    body: "We never write copy that promises specific results — testosterone levels, physical changes, or performance outcomes. Men's health marketing is an area regulators and platforms scrutinize closely, and for good reason: overpromising results erodes exactly the trust a new patient needs to feel before booking. Every page we build is honest about what treatment offers — a clinical evaluation and an evidence-based plan, not a guaranteed transformation.",
  },
  {
    title: "Review responses that protect patient privacy by default",
    body: "Every review response we write assumes the reviewer may not want their specific treatment named publicly. We keep responses warm and professional without confirming, denying, or describing any clinical relationship — the same discretion we'd apply to any sensitive specialty.",
  },
  {
    title: "Website copy that's clinical, not like a supplement ad",
    body: "Men's health marketing has a stigma problem: a lot of it looks and reads like a subscription supplement funnel. We write the opposite — direct, credible, physician-led language that a skeptical, research-oriented patient trusts on sight. The goal is a website that could sit next to a cardiology practice's site without looking out of place.",
  },
  {
    title: "Ad and platform compliance handled correctly the first time",
    body: "Google and Meta apply specific, strict policies to men's health, hormone therapy, and sexual health advertising. We build campaigns and page content that comply from the start — avoiding the disapprovals and account flags that come from treating this like a normal healthcare vertical.",
  },
];

const positioning = [
  {
    value: "Direct-Pay",
    label: "The dominant payment model for TRT and men's wellness — clear, collectible lifetime value per patient.",
  },
  {
    value: "Local vs. National",
    label: "Independent clinics compete against telehealth-only brands with no physical GBP listing to rank against you.",
  },
  {
    value: "Low Competition",
    label: "Most local competitors stop at a homepage and a contact form — service and city pages compound fast here.",
  },
  {
    value: "High Intent",
    label: "A man searching \"TRT clinic near me\" or \"ED treatment near me\" has already decided to seek treatment — he's choosing a provider, not shopping for whether to start.",
  },
];

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function MensHealthPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(mensHealthSchema as Record<string, unknown>) }}
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
          <li aria-hidden="true" style={{ color: "var(--wire)", fontSize: "12px" }}>›</li>
          <li aria-current="page" style={{ color: "var(--ash)" }}>Men&rsquo;s Health</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="mh2-h1"
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
              "radial-gradient(ellipse 70vw 60vh at 10% 30%, rgba(201,168,76,0.14) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 85% 75%, rgba(27,110,110,0.07) 0%, transparent 60%)",
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
            Men&rsquo;s Health Practices · Independent Practices Only · Nationwide
          </div>

          {/* H1 */}
          <h1
            id="mh2-h1"
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
            Men are searching for testosterone therapy right now.
            <br />
            A telehealth franchise is showing up.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Your clinic isn&rsquo;t.
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
            Primara builds the digital presence independent men&rsquo;s health practices need — Google Business Profile, local SEO, website, and review systems built around how men actually search for TRT, hormone therapy, and men&rsquo;s wellness care.
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
        aria-labelledby="mh2-problem"
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
            id="mh2-problem"
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
            Independent men&rsquo;s health practices compete against national telehealth ad budgets — and win on local trust.
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
        aria-labelledby="mh2-services"
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
            id="mh2-services"
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
            Built around how men actually search for this care — clinical, direct, and credible.
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
            Men&rsquo;s health search intent is specific and high-commitment. People search by treatment (&ldquo;TRT clinic near me&rdquo;), condition (&ldquo;low testosterone doctor&rdquo;), and urgency (&ldquo;same week appointment men&rsquo;s health&rdquo;). We build your local presence around all of it.
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
        aria-labelledby="mh2-who"
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
            id="mh2-who"
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
            Independent men&rsquo;s health practices. Not the franchises competing with you.
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
            Primara works with independent TRT clinics, men&rsquo;s wellness centers, and urology practices with a men&rsquo;s health service line. Cash-pay, insurance-based, and hybrid models. We do not work with national telehealth-only franchises or hospital-employed practices.
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
            The men&rsquo;s health practices we work with have one thing in common: a physician who wants to build a real, local, physician-led practice — not compete purely on national ad spend against a subscription telehealth brand. That&rsquo;s what strong local SEO makes possible.
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

      {/* ── Section 04 — Discretion-First Approach ──────────────────────── */}
      <section
        aria-labelledby="mh2-sensitivity"
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
            id="mh2-sensitivity"
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
            This category has a credibility problem. Everything we build fixes that, not adds to it.
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

      {/* ── Section 05 — The Case ────────────────────────────────────────── */}
      <section
        aria-labelledby="mh2-numbers"
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
            id="mh2-numbers"
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
            The demand is direct-pay and high-intent. The local visibility is wide open.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            {positioning.map((item) => (
              <div key={item.value} style={{ borderTop: "1px solid var(--wire)", paddingTop: "24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    color: "var(--gold)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                  }}
                >
                  {item.value}
                </div>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", lineHeight: 1.65, color: "var(--ash)", margin: 0 }}>
                  {item.label}
                </p>
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
              &ldquo;A cash-pay men&rsquo;s health patient on an ongoing treatment plan is one of the clearest lifetime-value calculations in independent medicine. Marketing spend recovers fast when the patient stays for months, not one visit — and most independent clinics in this category are barely visible to the men already searching for exactly what they offer.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 06 — Packages ────────────────────────────────────────── */}
      <section
        aria-labelledby="mh2-packages"
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
            id="mh2-packages"
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
        aria-labelledby="mh2-cta"
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
            background: "radial-gradient(ellipse 80vw 60vh at 50% 50%, rgba(201,168,76,0.14) 0%, transparent 65%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)" }}>
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            Get Started
          </div>
          <h2
            id="mh2-cta"
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
            We&rsquo;ll audit your GBP, your website, your reviews, and your top local competitor. We&rsquo;ll show you what the top-ranked men&rsquo;s health practice in your area is doing that you&rsquo;re not — and what it would cost to close that gap. Free. No obligation. Liam or Gio will walk you through it directly.
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
    </main>
  );
}
