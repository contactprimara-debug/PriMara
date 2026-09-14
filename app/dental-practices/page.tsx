import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, dentalSchema } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";
import { dentalLocations } from "@/lib/locations-dental";

export const metadata: Metadata = {
  title: "Digital Marketing for Dental Practices | Primara",
  description:
    "Primara helps independent, dentist-owned practices outrank DSO-backed groups in the local map pack and reach implant, aligner, and cosmetic cases through Meta Ads. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/dental-practices" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Digital Marketing for Dental Practices | Primara",
    description:
      "Local search, Meta Ads, and review systems for independent dentist-owned practices competing with DSO-backed groups. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/dental-practices",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const problemBlocks = [
  {
    heading: "DSO-backed groups are outspending you and out-structuring you",
    body: "Consolidation has put a marketing department behind a growing share of the practices in your metro. They have centralized ad budgets, a call center answering after hours, and someone whose entire job is the Google Business Profile. What they usually do not have is a named dentist people can attach trust to, which is exactly the asset an independent practice owns and consistently fails to put anywhere a prospective patient will see it.",
  },
  {
    heading: "Two completely different kinds of demand, and most practices market to only one",
    body: "A broken molar at 9pm and a year of quietly thinking about implants are not the same customer. Urgent demand is captured on Google, in the map pack, in the first twenty minutes. High-value case demand — implants, full-arch, aligners, veneers — builds over months with nobody searching anything at all. Practices that run only search ads get the emergencies and the hygiene checks, and wonder why the big cases go to the practice with the Instagram presence.",
  },
  {
    heading: "The map pack is decided by fields most practices never filled in",
    body: "Dental GBP categories are unusually granular — Dentist, Cosmetic Dentist, Dental Implants Periodontist, Orthodontist, Emergency Dental Service, Pediatric Dentist — and the profile you have is probably using one of them. Add the service list, the attributes, the hours that are actually accurate, and the photos that are not stock, and you are ahead of most listings within a mile of you. This is the least glamorous and highest-return work in dental marketing.",
  },
  {
    heading: "Insurance and offer copy is where dental advertising gets practices in trouble",
    body: "Free-exam offers, new-patient specials, and insurance messaging are regulated far more tightly in dentistry than most owners expect. State dental boards impose their own advertising rules and several require specific disclosure language on discounted or complimentary services, and offering inducements to insured patients raises federal exposure that has nothing to do with marketing taste. We keep offers structured conservatively and route anything close to the line to your counsel — we are not the ones who should be making that call.",
  },
  {
    heading: "Reviews carry more weight here than almost anywhere in healthcare",
    body: "Dental anxiety is real and widespread, and it makes social proof disproportionately powerful — a prospective patient reads reviews looking for evidence that this will not hurt and that nobody was upsold. Volume matters, recency matters more, and a thoughtful public response to a negative review does more work than the ten positive ones above it. Dentists are covered entities, so every one of those responses has to stay HIPAA-safe, which is where most practices quietly slip.",
  },
];

const services = [
  {
    num: "01",
    title: "Google Business Profile and Map-Pack Visibility",
    body: "We set the primary category correctly and add every secondary that matches a service line you want cases from — cosmetic dentistry, implants, emergency service, orthodontics where applicable. The service list gets written in the language patients type, not the codes you bill: \"emergency dentist near me,\" \"dental implants [city],\" \"clear aligners consultation.\" Every attribute filled, real photos of the operatories and the team, a year of posts scheduled at onboarding, and a Local Falcon grid so you can see your actual position across your service area rather than guessing from your own phone.",
  },
  {
    num: "02",
    title: "Meta Ads for High-Value Case Acquisition",
    body: "Implants, full-arch, aligners, and cosmetic work are considered purchases with a long, quiet research window — and that window happens on Instagram and Facebook, not in a search box. We build the creative that opens it: the dentist explaining what the process actually involves, what it costs to find out, and why it is less frightening than people assume. Tracking is configured so no patient information reaches Meta, which does not sign Business Associate Agreements. Lead forms ask for contact intent and never for clinical detail.",
  },
  {
    num: "03",
    title: "Website Rebuild Around Procedures, Not Practice History",
    body: "One page per procedure you actually want more of, each written to answer what a patient researches before calling: what the appointment involves, how long it takes, what sedation options exist, how financing generally works in practice. A real bio for every dentist with the credentials you hold, stated exactly as you supply them. Built in Next.js on Vercel, fast on a phone in a parking lot, with booking and call buttons reachable from every page and dedicated landing pages for each paid-social offer.",
  },
  {
    num: "04",
    title: "Review Generation and HIPAA-Safe Responses",
    body: "NFC tap cards at the front desk and QR prompts in operatories, timed to the moment a patient is happiest rather than to a monthly email blast. Requests go to everyone in the cycle — no sentiment filtering, ever. We write and publish every response within 48 hours, and we never confirm that a reviewer is a patient or reference anything about their treatment, because a dental practice is a covered entity and a well-meant \"so glad your implant went well!\" is a disclosure.",
  },
  {
    num: "05",
    title: "Local SEO Content on a Schedule",
    body: "New pages added continuously: a procedure page for every treatment, a location page for every town in your draw area, and answer-style content for the questions people ask before they are ready to book. Dental SEO compounds well because most independent competitors have a homepage, a services page, and nothing else — while DSO group sites are often thin, templated, and identical across forty locations, which is a weakness you can exploit with genuinely local pages.",
  },
];

const fits = [
  "Independent, dentist-owned general practice — single or small multi-location",
  "Cosmetic, implant, or full-arch focused practice",
  "Practice with an orthodontic or clear-aligner service line",
  "Periodontics, endodontics, or oral surgery accepting direct patients",
  "Owners who want the practice known for a named dentist, not a brand",
];

const doesNotFit = [
  "DSO-owned or corporate-managed practices with centralized marketing",
  "Practices whose plan is winning on the lowest advertised new-patient special",
  "Dental-adjacent retailers without a licensed clinical practice",
  "Anyone wanting review gating, incentivized reviews, or written testimonials",
];

const principles = [
  {
    title: "Offer copy stays conservative, and the line calls go to your counsel",
    body: "Dental advertising sits under state dental board rules that vary considerably, and several states impose specific disclosure requirements on complimentary or discounted services. Offering inducements to insured patients carries federal exposure as well. Our position is simple: we structure offers conservatively by default, we flag anything that reads close to the line, and we send it to your attorney or state board guidance rather than guessing. We are a marketing agency and we do not give legal advice.",
  },
  {
    title: "No clinical claims, no outcome promises, no invented credentials",
    body: "We never write copy that promises a result, a healing time, a lifespan for a restoration, or a comparison to another practice's clinical work. We describe what an appointment involves and what a patient can expect procedurally — never how a treatment will turn out. Credentials, affiliations, and specialty designations appear exactly as you provide them and nowhere else; we will not round \"completed a continuum in implantology\" up to \"specialist.\"",
  },
  {
    title: "Patient data never reaches an ad platform",
    body: "Dental practices are covered entities. Our tracking counts conversion events without capturing what they were about: no procedure names in URLs passed to ad platforms, no pixel on booking confirmation or patient portal pages, no clinical questions inside lead forms, and no call recordings of clinical conversation. We hand over written documentation of exactly what is collected so your privacy officer can review it and your notice can be accurate.",
  },
  {
    title: "Reviews are earned, and responses assume the public is reading",
    body: "No gating by sentiment, no incentives, no written reviews from us — the FTC and Google both prohibit it, and a suspended review profile costs more than any campaign is worth. Every response we publish is written on the assumption that a stranger with no context is reading it, which means warm, professional, and never confirming or describing a clinical relationship.",
  },
];

const positioning = [
  {
    value: "Two Funnels",
    label: "Urgent demand is captured on Google; high-value case demand is created on Meta. Practices running only one leave the other on the table.",
  },
  {
    value: "High Ticket",
    label: "Implant and full-arch cases change the acquisition math entirely — the economics justify a real marketing budget in a way hygiene recalls never will.",
  },
  {
    value: "Thin Competition",
    label: "DSO group sites are templated across dozens of locations. Genuinely local pages outrank them more easily than owners expect.",
  },
  {
    value: "Trust-Led",
    label: "Dental anxiety makes reviews and a visible, named dentist the deciding factors — the exact assets an independent practice already has.",
  },
];

// Written to be directly quotable by answer engines — short, specific, and
// self-contained, so a model can lift one answer without needing the page.
const faqs = [
  {
    q: "How does an independent dental practice compete with a DSO-backed group?",
    a: "Not on spend — on specificity. Group practices deploy one website and one listing template across dozens of locations, which means their pages name no dentist, describe no particular case, and read identically in every city they operate. An independent can publish a real page per procedure with the treating dentist on it, and accumulate reviews naming an actual person. Google rewards that difference, and so does a patient deciding whether to trust someone with a five-figure case. The advantage is narrow and only works if it is worked consistently.",
  },
  {
    q: "Which dental marketing channel produces new patients fastest?",
    a: "Google Business Profile, by a wide margin, because emergency and 'dentist near me' searches are decided in the map pack within minutes of the search. Paid search is next and can produce calls the day it launches. Meta Ads take longer to stabilize but reach implant and aligner patients months before they would ever search. Organic rankings on competitive procedure terms are the slowest and the most durable. Most practices need the fast channels first and the durable ones running underneath.",
  },
  {
    q: "Why is our dental practice not in the Google map pack?",
    a: "Usually one of four causes. The primary category is wrong or too generic — dental categories are unusually granular and often set to 'Dentist' when a more specific one fits. The website has no genuine page for procedures the listing advertises, which Google reads as a mismatch. Review count and recency lag whoever currently holds the position. Or the searcher is simply far enough away that proximity outweighs everything else, which is why position should be measured on a grid across the catchment rather than from the office itself.",
  },
  {
    q: "Are dental implant leads from Facebook worth anything?",
    a: "They are worth what the campaign structure makes them worth. Ads built around a dollar figure attract people comparing dollar figures, many of whom are not clinical candidates. Ads built around the consultation — what the appointment assesses, what treatment paths exist, what happens next — produce fewer raw inquiries and a much higher share who attend and are treatable. The metric that matters is consults attended, not form fills, and any agency reporting only the latter is measuring the easy number.",
  },
  {
    q: "How much should a dental practice spend on ads each month?",
    a: "For a single high-value service line on Meta, most markets need roughly $1,500 to $2,500 per month in ad spend before the account has enough conversion signal to optimize, plus management and creative. Full-arch implant campaigns generally sit at the top of that range or above because the audience is narrow. Google Ads budgets vary far more, since cost per click on emergency and implant terms is market-specific — the audit gives you real local numbers rather than a national average.",
  },
  {
    q: "How fast does a practice need to respond to an online inquiry?",
    a: "Within minutes during business hours. A paid-social inquiry comes from someone who was scrolling a moment earlier and has committed to nothing; by the following morning they have usually moved on or booked with whoever answered first. Before launching we agree the follow-up path — immediate text, a call attempt inside the hour, a defined number of attempts, a named owner — and if the practice cannot staff that, the honest answer is to fix it before spending.",
  },
  {
    q: "Is it safe to run a Meta Pixel or Google tracking on a dental website?",
    a: "Only when configured deliberately. Meta signs no Business Associate Agreement, so nothing identifying a patient alongside treatment information may reach it. The common failures are mundane: tracking left running on a portal page, or on an appointment confirmation URL that names the procedure. Events should count that a conversion happened without describing it, stay off intake and portal pages, and be documented so counsel can review. That is our practice, not legal advice for your situation.",
  },
  {
    q: "Can you use patient photos or stories in dental advertising?",
    a: "Only with written authorization, and only where the claim around them is defensible. We do not present an individual result as typical, we do not imply guaranteed outcomes, and we do not invent or inflate credentials. In practice the strongest dental creative is usually the treating dentist explaining how they plan a case — it carries the trust signal a prospective implant patient is looking for without any of the exposure that patient imagery creates.",
  },
  {
    q: "How long does dental SEO take to work?",
    a: "Local map-pack movement from listing and category work often appears within four to eight weeks. Organic rankings for competitive procedure terms — dental implants, clear aligners, veneers in a given city — typically take four to six months of consistent content and technical work, longer in dense metros. We report grid positions and Search Console data monthly so progress is visible well before rankings arrive, and so is the absence of it.",
  },
  {
    q: "What kind of dental practice does Primara work with?",
    a: "Independent practices — single location or a small group, owner-operated, with a named dentist willing to appear in the marketing. We do not work with DSO-owned or franchise brands, and we take only one practice per catchment, because two practices competing for the same map grid cannot both be represented honestly.",
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

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function DentalPracticesPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(dentalSchema as Record<string, unknown>) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>Dental Practices</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="dp-h1"
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
              "radial-gradient(ellipse 70vw 60vh at 8% 32%, rgba(27,110,110,0.10) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 90% 72%, rgba(201,168,76,0.10) 0%, transparent 60%)",
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
            Dental Practices · Dentist-Owned Only · Nationwide
          </div>

          <h1
            id="dp-h1"
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
            The implant case took eight months to decide.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              You showed up in the last week.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "var(--ash)",
              maxWidth: "62ch",
              margin: "0 0 clamp(36px, 5vw, 52px)",
            }}
          >
            Primara builds the local presence independent dental practices need to win both kinds
            of demand — the emergency searching right now, and the implant or aligner case that has
            been thinking about it since spring. Google Business Profile, Meta Ads, website, and
            reviews, run by the two founders.
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
        aria-labelledby="dp-problem"
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
            id="dp-problem"
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
            Independent practices lose cases they should win — usually to worse dentistry with better visibility.
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
        aria-labelledby="dp-services"
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
            id="dp-services"
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
            One system for the emergency at 9pm. Another for the case that takes a year to decide.
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--ash)",
              maxWidth: "62ch",
              margin: "0 0 clamp(48px, 6vw, 64px)",
            }}
          >
            Local search handles the demand that already exists.{" "}
            <Link href="/services/meta-ads" style={{ color: "var(--gold)", textDecoration: "none" }}>Meta Ads</Link>{" "}
            opens the consideration window on the high-value work — implants, full-arch, aligners,
            cosmetic cases — long before anyone types a query. Most practices we audit are running
            one of the two.
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
        aria-labelledby="dp-who"
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
            id="dp-who"
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
            Dentist-owned practices. Not the group buying up the ones around you.
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
            Primara works with independent general, cosmetic, and implant-focused dental practices,
            plus specialty practices taking direct patients. Single location or a small local group.
            We do not work with DSO-owned or corporate-managed practices — their marketing is decided
            centrally, and we would be arguing with a spreadsheet instead of the person who owns the
            outcome.
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
            The practices that get the most out of this have a dentist willing to be visible — on the
            website, in the reviews, in a two-minute video explaining what an implant consultation
            actually involves. That is the one thing a consolidated group genuinely cannot copy, and
            it is usually sitting unused.
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

      {/* ── Section 04 — Our Approach ────────────────────────────────────── */}
      <section
        aria-labelledby="dp-approach"
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
            id="dp-approach"
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
            Dentistry is regulated, and advertising it is regulated twice.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {principles.map((principle, i, arr) => (
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
        aria-labelledby="dp-case"
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
            id="dp-case"
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
            The high-value cases are decided slowly, in a place most dental marketing never goes.
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
              &ldquo;Ask a dentist where their last three implant cases came from and the honest answer
              is usually &lsquo;they&rsquo;d been thinking about it for a while.&rsquo; That waiting
              period is the whole opportunity, and almost nobody is marketing into it.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 06 — Packages ────────────────────────────────────────── */}
      <section
        aria-labelledby="dp-packages"
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
            id="dp-packages"
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
            Two packages, plus Meta Ads management quoted after the audit.
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
            Month-to-month. 3-month minimum recommended. Meta Ads management is quoted separately once
            we have seen your market, your case mix, and your current tracking setup.
          </p>
        </div>
      </section>

      {/* ── Section 07 — FAQ (answer-engine oriented) ────────────────────── */}
      <section
        aria-labelledby="dp-faq"
        id="faq"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)", backgroundColor: "var(--surface)" }}
      >
        <div style={{ maxWidth: "820px" }}>
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
            Dental Marketing FAQ
          </div>
          <h2
            id="dp-faq"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--chalk)",
              fontWeight: 400,
              margin: "0 0 clamp(32px, 4vw, 48px)",
            }}
          >
            Straight answers about marketing a dental practice.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderTop: "1px solid var(--wire)", padding: "24px 0" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--chalk)",
                    margin: "0 0 12px",
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

      {/* ── Locations we serve ───────────────────────────────────────────── */}
      <section
        aria-labelledby="dp-locations"
        id="locations"
        style={{ padding: sectionPad, borderTop: "1px solid var(--wire)" }}
      >
        <div style={{ maxWidth: "980px" }}>
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
            Locations We Serve
          </div>
          <h2
            id="dp-locations"
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
            Dental Markets We Serve
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", lineHeight: 1.8, color: "var(--ash)", margin: "0 0 clamp(28px, 4vw, 40px)", maxWidth: "720px" }}>
            Every market below has its own page with the competitive picture for that city — which DSO-backed groups and implant centers dominate local search, what the review benchmark looks like, and how patients there actually search for implant, aligner, and cosmetic care.
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "10px 24px",
            }}
          >
            {dentalLocations.map((loc) => (
              <li key={loc.slug} style={{ borderTop: "1px solid var(--wire)", paddingTop: "10px" }}>
                <Link
                  href={`/locations/${loc.slug}`}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--ash)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {loc.city}, {loc.state} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Where to Go Next"
        items={[
          { href: "/locations/meta-ads-for-dental-practices", label: "Meta Ads for Dental Practices", description: "Implant, aligner, and cosmetic case acquisition, campaign by campaign." },
          { href: "/locations/dental-practices-florida", label: "Dental Marketing in Florida", description: "Statewide picture — Southeast Florida, Tampa Bay, Orlando, and Jacksonville." },
          { href: "/locations/dental-practices-west-palm-beach", label: "Dental Marketing in West Palm Beach", description: "Our home market, and the heaviest DSO presence in the state." },
          { href: "/services/meta-ads", label: "Meta Ads", description: "How we open the consideration window on implant, aligner, and cosmetic cases." },
          { href: "/services/google-business-profile", label: "Google Business Profile", description: "Dental categories are unusually granular — and unusually often wrong." },
          { href: "/services/local-seo-for-medical-practices", label: "Local SEO Content", description: "Procedure and location pages that outrank templated DSO group sites." },
          { href: "/services/online-reputation-management", label: "Review Generation", description: "Review velocity and HIPAA-safe responses for a covered entity." },
          { href: "/medspas", label: "Medspas", description: "The other visual, high-consideration vertical we build paid social for." },
          { href: "/the-audit", label: "The Free Audit", description: "Your map-pack position, your reviews, and your top local competitor — free." },
        ]}
      />

      {/* ── Section 07 — CTA ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="dp-cta"
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
            id="dp-cta"
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
            See exactly where your practice ranks — for free.
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", lineHeight: 1.8, color: "var(--ash)", marginBottom: "clamp(32px, 4vw, 44px)" }}>
            We audit your Google Business Profile categories, your map-pack position across your draw
            area, your review velocity, your website, and the practice currently beating you for
            implant and cosmetic searches. Free, no obligation, and Liam or Gio walks you through it
            directly.
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
