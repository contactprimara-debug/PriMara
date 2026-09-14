import type { Metadata } from "next";
import Link from "next/link";
import { toJsonLd, medspaSchema } from "@/lib/schema";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Digital Marketing for Medspas | Primara",
  description:
    "Primara helps independent medspas win the local map pack, run Meta Ads that actually pass policy review, and build a review engine — without competing on discount-site pricing. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/medspas" },
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
    title: "Digital Marketing for Medspas | Primara",
    description:
      "Meta Ads, local map-pack visibility, and review generation for independent medspas — built around the platform rules this category actually lives under. Call (561) 291-2681.",
    type: "website",
    url: "https://primara365.com/medspas",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const problemBlocks = [
  {
    heading: "Every medspa within ten miles is selling the same units at nearly the same price",
    body: "Neuromodulators and fillers are commodity-priced in most metros, and the moment a practice starts advertising on price, a newer competitor undercuts it the same quarter. Discount-marketplace promotions accelerate the spiral — they fill chairs once with people who came for the coupon, not the provider. The escape route is not a better discount. It is being the practice people already recognize before they compare prices, which is a visibility and trust problem, not a pricing one.",
  },
  {
    heading: "Meta is your biggest channel and the one most likely to get your account restricted",
    body: "Aesthetics is an inherently visual, social-first category, so Facebook and Instagram drive a disproportionate share of new clients. It is also the category Meta polices hardest. Before-and-after images are prohibited in ads. So is copy that implies something about a viewer's appearance — the \"hate your wrinkles?\" formula that half this industry still runs. Most medspas discover these rules through a rejection, an account restriction, or an ad account they can no longer use.",
  },
  {
    heading: "The GBP primary category is wrong at a startling number of medspas",
    body: "We repeatedly find medspas listed under \"Beauty Salon\" or \"Skin Care Clinic\" as the primary Google Business Profile category. That single field is one of the strongest ranking inputs for the local map pack, and it is why a practice can be the best-reviewed injector in town and still lose \"med spa near me\" to a newer competitor. Primary category should be Medical Spa, with the secondary categories reflecting the service lines you actually want to be found for.",
  },
  {
    heading: "Review generation is harder here than in general medicine",
    body: "A patient thrilled with their results is often the least likely to post publicly about having had work done. Asking for a review the way a dentist would — naming the treatment — puts people in an awkward position and quietly suppresses your review velocity. The systems that work in aesthetics ask about the experience, the consultation, and the staff, and let the client decide how much to disclose.",
  },
  {
    heading: "Retention is the whole business, and most marketing ignores it",
    body: "Injectable clients return on a predictable cadence, and memberships or treatment packages turn a single visit into a year of revenue. Yet nearly all medspa marketing spend chases first-time bookings while the existing client list gets a monthly email blast at best. A segmented list, a membership offer with a clear reason to join, and exclusion audiences that stop paying to re-reach people who already book are worth more than most practices' entire new-client budget.",
  },
];

const services = [
  {
    num: "01",
    title: "Meta Ads Built for an Aesthetics Account That Survives Review",
    body: "This is the flagship for this vertical. We write and shoot creative that generates desire without a single before-and-after frame and without implying anything about the viewer's appearance — provider-led video, treatment-day walkthroughs, consultation explainers, and offer-led statics. Audience strategy leans on geography, your own client list, and lookalikes, because Meta removed health-related interest targeting years ago. Tracking is configured so no client information flows to a platform that will not sign a BAA. Every asset is checked against policy before submission, not after a rejection.",
  },
  {
    num: "02",
    title: "Google Business Profile Rebuilt for Medical Spa Search",
    body: "Primary category corrected to Medical Spa, with relevant secondaries configured for the service lines you want ranked. A full service list written the way clients actually search — \"lip filler near me,\" \"medspa consultation,\" \"laser hair removal [city]\" — rather than the clinical names on your price sheet. Every attribute completed, a year of posts loaded at onboarding, and photo strategy that shows the room, the team, and the equipment rather than stock imagery that looks like every other listing in the map pack.",
  },
  {
    num: "03",
    title: "Website Rebuild That Sells the Consultation, Not the Unit Price",
    body: "A service page for every treatment you offer, written to answer what people actually research before booking: what a first consultation involves, how long it takes, what recovery looks like, how you decide what to recommend. Provider bios that establish real credentials — the ones you actually hold, stated accurately. Built in Next.js and deployed on Vercel, fast on mobile, with a booking path that takes two taps from any page. Dedicated landing pages for paid-social offers so ad traffic never lands on a homepage.",
  },
  {
    num: "04",
    title: "Review Generation Designed for a Discreet Category",
    body: "NFC tap cards and QR prompts placed at checkout and in treatment rooms, with request language written so a client can leave a warm review without naming what they had done. Reviews rotate across Google and the platforms that matter in your market. Every response we publish is professional and protects client privacy by default — we never confirm, deny, or describe a treatment in a public reply, which is both the right instinct and the compliant one.",
  },
  {
    num: "05",
    title: "Retention Marketing and Membership Offers",
    body: "Segmented campaigns to the client list you already have: re-treatment reminders timed to the natural cadence of each service, membership and package offers with a reason to commit beyond a discount, and suppression lists so paid budget stops re-reaching people who book anyway. This is usually the fastest revenue we find in a medspa account, and it almost always exists untouched.",
  },
];

const fits = [
  "Independent medspa with a physician, NP, or PA-led clinical team",
  "Aesthetic practice with an injectables, laser, or body-contouring service line",
  "Dermatology or plastic surgery practice with a medspa arm",
  "Owner-operated single location or a small local group",
  "Membership, package, or à la carte pricing models",
];

const doesNotFit = [
  "Non-medical beauty salons with no clinical oversight",
  "Practices whose growth plan is undercutting local pricing",
  "Supplement, device, or MLM sellers without a licensed clinical practice",
  "Businesses wanting before-and-after ad creative that violates platform policy",
];

const principles = [
  {
    title: "No before-and-after creative. No appearance-shaming hooks.",
    body: "Meta prohibits before-and-after imagery in ads and prohibits copy that implies knowledge of a viewer's personal attributes — including their appearance. We do not write \"tired of looking tired\" hooks, and we do not submit split-screen result shots. Practices that push past these rules get ad accounts restricted, and an ad account restriction in this category can take a quarter to unwind. Building desire inside the rules is a creative constraint, and constraints are where the interesting work is.",
  },
  {
    title: "No outcome claims, no invented credentials, no clinical promises",
    body: "We do not write copy that promises a specific result, a duration, a number of units, or a comparison to another product. We do not describe how a treatment works clinically — that is your team's expertise and your liability, not our copy's. And we state only the credentials you actually hold, verbatim, exactly as you supply them. If a claim needs a provider's sign-off before it runs, it does not run until it has one.",
  },
  {
    title: "Client data does not leave for a platform that will not sign a BAA",
    body: "Medspas frequently sit inside a covered entity, and even when they do not, aesthetic treatment information is exactly the kind of data clients expect to stay private. Our tracking counts events without capturing what they were about: no treatment names in URLs sent to ad platforms, no tracking on booking confirmation or intake pages, no clinical questions inside lead forms. We hand over written documentation of what is and is not collected so your privacy policy can be accurate.",
  },
  {
    title: "Reviews are earned, never bought, filtered, or fabricated",
    body: "We do not gate review requests by sentiment, we do not write reviews, and we do not incentivize them. Every client in a request cycle gets the same ask. That is the FTC's position and Google's, and it is also the only approach that survives contact with a platform audit — a medspa with a suspended review profile has lost the asset that took two years to build.",
  },
];

const positioning = [
  {
    value: "Visual-First",
    label: "The one healthcare category where paid social is routinely the largest new-client channel, not a supporting one.",
  },
  {
    value: "Recurring Revenue",
    label: "Injectable and membership clients return on a predictable cadence — acquisition cost is recovered over a relationship, not a visit.",
  },
  {
    value: "Category Chaos",
    label: "Wrong GBP primary categories are endemic in this vertical, which leaves the map pack winnable for whoever fixes theirs first.",
  },
  {
    value: "Policy Moat",
    label: "Most competitors run creative that violates Meta policy. Knowing the rules is a durable advantage, not a limitation.",
  },
];

const sectionPad = "clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)";

export default function MedspasPage() {
  return (
    <main style={{ backgroundColor: "var(--void)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(medspaSchema as Record<string, unknown>) }}
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
          <li aria-current="page" style={{ color: "var(--ash)" }}>Medspas</li>
        </ol>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="ms-h1"
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
              "radial-gradient(ellipse 70vw 60vh at 12% 28%, rgba(201,168,76,0.14) 0%, transparent 60%)",
              "radial-gradient(ellipse 50vw 40vh at 88% 78%, rgba(27,110,110,0.07) 0%, transparent 60%)",
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
            Medspas &amp; Aesthetic Practices · Independent Only · Nationwide
          </div>

          <h1
            id="ms-h1"
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
            Your best clients found you on Instagram.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              So did your competitor&rsquo;s.
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
            Primara runs Meta Ads, local search, and review systems for independent medspas —
            built around the rules this category actually lives under. No before-and-after
            creative, no appearance-shaming hooks, no discount race. Just a practice people
            recognize before they start comparing prices.
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
        aria-labelledby="ms-problem"
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
            id="ms-problem"
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
            Aesthetics is the most competitive local category in healthcare — and the most badly marketed.
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
        aria-labelledby="ms-services"
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
            id="ms-services"
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
            Paid social leads this vertical. Everything else is built to convert what it sends.
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
            For most medspas, <Link href="/services/meta-ads" style={{ color: "var(--gold)", textDecoration: "none" }}>Meta Ads</Link>{" "}
            is the primary acquisition channel — the audience is on Instagram, the category is visual, and
            demand is created rather than searched for. Local search and reviews are what turn that attention
            into a booked consultation instead of a follow.
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
        aria-labelledby="ms-who"
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
            id="ms-who"
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
            Independent, clinically-led medspas. Not discount chains.
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
            Primara works with owner-operated medspas and aesthetic practices with real clinical
            oversight — a physician, nurse practitioner, or PA leading treatment. Dermatology and
            plastic surgery practices with a medspa arm fit here too. We do not work with non-medical
            salons or with practices whose entire strategy is being the cheapest option in the metro.
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
            The practices that do well with us have something specific to be known for — a provider
            with a following, a technique they are genuinely good at, a service line nobody nearby
            offers. Marketing can make that visible quickly. It cannot manufacture it, and we will
            tell you honestly on the audit call if we think that is what you are asking for.
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
        aria-labelledby="ms-approach"
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
            id="ms-approach"
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
            The rules in this category are not suggestions. We treat them as the brief.
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
        aria-labelledby="ms-case"
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
            id="ms-case"
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
            Crowded market, sloppy execution. That combination is an opening.
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
              &ldquo;Almost every medspa we audit is doing two things at once: running ad creative that
              breaks Meta&rsquo;s policy, and sitting on a client list it has never marketed to properly.
              Fixing both is unglamorous work, and it is usually worth more than the new campaign the
              owner called us about.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 06 — Packages ────────────────────────────────────────── */}
      <section
        aria-labelledby="ms-packages"
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
            id="ms-packages"
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
            we have seen your account, your offers, and your current tracking setup.
          </p>
        </div>
      </section>

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Where to Go Next"
        items={[
          { href: "/services/meta-ads", label: "Meta Ads", description: "The flagship channel for this vertical — creative, targeting, and HIPAA-aware tracking." },
          { href: "/services/google-business-profile", label: "Google Business Profile", description: "Fixing the primary category most medspas have set incorrectly." },
          { href: "/services/online-reputation-management", label: "Review Generation", description: "Review systems written for a category where clients want discretion." },
          { href: "/services/medical-practice-website-design", label: "Website Rebuild", description: "Service pages and landing pages that sell the consultation, not the unit price." },
          { href: "/dental-practices", label: "Dental Practices", description: "The other high-consideration vertical where Meta Ads opens the buying window." },
          { href: "/the-audit", label: "The Free Audit", description: "What we review before recommending anything — including your current ad creative." },
        ]}
      />

      {/* ── Section 07 — CTA ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="ms-cta"
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
            id="ms-cta"
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
            We will tell you which of your ads would fail policy review.
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", lineHeight: 1.8, color: "var(--ash)", marginBottom: "clamp(32px, 4vw, 44px)" }}>
            The free audit covers your Google Business Profile categories, your map-pack position
            against the top medspa in your area, your review velocity, and a read of your current
            Meta creative and tracking setup. No obligation. Liam or Gio walks you through it directly.
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
