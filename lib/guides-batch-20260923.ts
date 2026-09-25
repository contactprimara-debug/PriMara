import type { Guide } from "@/lib/guides";

// ── Batch 2026-09-23: cost/comparison guides (content rows 272, 273) ──────
// Highest commercial-intent rows from the planned queue. Not city-templated.
// Sources: Google Ads Help, Google Business Profile Help, FTC consumer
// review rule. Do not clone with a city swap.

export const guidesPartFour: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "google-ads-cost-for-a-medical-practice",
    keyword: "how much do Google Ads cost for a medical practice",
    category: "Pricing",
    title: "How Much Do Google Ads Cost for a Medical Practice?",
    metaTitle: "Google Ads Cost for a Medical Practice in Florida (2026)",
    metaDescription:
      "Real Florida cost-per-click and monthly budget ranges for medical Google Ads, plus what drives the price. Call Primara at (561) 291-2681.",
    answer:
      "Google Ads for a Florida medical practice typically runs eight to thirty dollars per click, with most single-location practices spending fifteen hundred to five thousand dollars a month on media plus a management fee. The number that matters more than cost-per-click is cost per booked patient, which depends heavily on your landing page and phone tracking, not just the bid.",
    author: "Gio LaRoche",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      {
        type: "h2",
        text: "Why healthcare clicks cost more than almost any other industry",
      },
      {
        type: "p",
        text: "Google Ads runs an auction, and every advertiser bidding on a keyword like \"urgent care near me\" or \"med spa Botox\" is bidding against personal injury attorneys, hospital systems, and national telehealth brands with enormous budgets. That competition, combined with the high lifetime value of a new patient, pushes healthcare cost-per-click well above retail or local services. It is not a sign the platform is broken for you — it reflects what a new patient is actually worth to the businesses bidding against you.",
      },
      {
        type: "h2",
        text: "2026 cost-per-click ranges we see in Florida",
      },
      {
        type: "table",
        headers: ["Specialty", "Typical CPC range"],
        rows: [
          ["Primary care / family medicine", "$6–$16"],
          ["Urgent care", "$8–$20"],
          ["Dental", "$10–$25"],
          ["Med spa / aesthetics", "$12–$35"],
          ["Mental health / therapy", "$15–$40"],
          ["Concierge / DPC", "$20–$45"],
        ],
      },
      {
        type: "p",
        text: "These ranges move with your county. Miami-Dade, Broward, and Palm Beach run near the top of each band because of the sheer number of competing practices; Treasure Coast and North Florida markets often sit twenty to thirty percent lower for the same specialty. Branded searches for your own practice name cost a fraction of these numbers and should almost always be part of the plan, since a competitor can otherwise bid on your name.",
      },
      {
        type: "h2",
        text: "What a realistic monthly budget looks like",
      },
      {
        type: "ul",
        items: [
          "Media spend (what Google actually keeps): most single-location Florida practices run $1,000–$4,000/mo to generate a meaningful, consistent lead volume. Below about $800/mo the algorithm rarely gets enough data per week to optimize well.",
          "Management fee: agencies typically charge 10–20% of media spend or a flat $500–$1,500/mo, whichever is larger at small budgets.",
          "Landing page and tracking: a one-time build of $1,500–$4,000 if you do not already have a page built to convert paid traffic, separate from your main service pages.",
          "Call tracking: usually $20–$60/mo for a dynamic number pool, and it is the single most common missing piece — without it you are optimizing bids on guesses.",
        ],
      },
      {
        type: "h2",
        text: "Cost per click is the wrong number to optimize",
      },
      {
        type: "p",
        text: "A fourteen-dollar click that converts at eight percent beats a six-dollar click that converts at one percent. The number to actually track is cost per booked appointment, and you cannot see it without tying the ad campaign to a phone call and a form fill, not just a click. This is where most in-house attempts at Google Ads for a practice quietly fail: the ad account shows clicks and impressions, nobody connects them to what happened after the phone rang.",
      },
      {
        type: "h2",
        text: "Quality Score and why the same click can cost less for you than a competitor",
      },
      {
        type: "p",
        text: "Google grades every advertiser on expected click-through rate, ad relevance, and landing page experience, and that grade — Quality Score — is a real discount or penalty on what you pay per click. A practice with a fast, relevant, HIPAA-conscious landing page can pay meaningfully less than a competitor bidding on the same keyword with a slow generic homepage. This is the lever most agencies underuse because it is slower than just raising the bid.",
      },
      {
        type: "h2",
        text: "Healthcare-specific restrictions that change the setup",
      },
      {
        type: "p",
        text: "Google restricts or requires certification for ads related to certain healthcare content, including telehealth, prescription drugs, and some mental health services, and personalized advertising is limited on sensitive health categories. Building a campaign without accounting for these restrictions is the most common reason a healthcare ad account gets disapproved mid-launch, which stalls a new campaign for days while it is resolved.",
      },
      {
        type: "callout",
        text: "The math we hold ourselves to: if cost per booked patient is higher than the patient's first-visit value, we say so and change the plan — the campaign does not get to just keep spending.",
      },
      {
        type: "h2",
        text: "Google Ads or SEO first",
      },
      {
        type: "p",
        text: "Ads produce calls within days; SEO takes months but does not stop the moment you stop paying. For a new practice or a location launch, Ads carries the first two to three quarters of demand while organic and the Google Business Profile mature underneath it. For an established practice with a strong map pack presence already, Ads is usually best used narrowly — a specific new service line, or filling appointment gaps in a slow week — rather than as the primary channel.",
      },
    ],
    faqs: [
      {
        q: "How much should a medical practice budget for Google Ads per month?",
        a: "Most single-location Florida practices need $1,000–$4,000 a month in media spend to get consistent lead volume, plus a management fee of 10–20% of that spend. Multi-location practices scale roughly with location count, though shared branded-search budget means it is not a straight multiple.",
      },
      {
        q: "Why is cost-per-click so much higher for healthcare than other industries?",
        a: "Healthcare keywords are bid on by a wide field of high-value advertisers — attorneys, hospital systems, national telehealth brands — and the lifetime value of a new patient is high, so the auction price rises to match. It reflects competition and patient value, not a platform problem specific to your account.",
      },
      {
        q: "Does a higher bid guarantee a better ad position?",
        a: "No. Google's ad rank combines your bid with Quality Score — expected click-through rate, ad relevance, and landing page experience. A well-built, fast, relevant landing page can outrank a higher bidder with a weak page, and pay less per click doing it.",
      },
      {
        q: "Can I run Google Ads for mental health or telehealth services?",
        a: "Yes, but both categories carry extra restrictions and in some cases certification requirements under Google's healthcare and medicines policy. Campaigns built without accounting for this are the most common cause of a healthcare account getting disapproved shortly after launch.",
      },
      {
        q: "How do I know if my Google Ads spend is actually working?",
        a: "Track cost per booked appointment, not cost per click. That requires connecting ad clicks to phone calls (via a tracked number) and form submissions (via a conversion action), then following those through to an actual booked visit — not just watching the ads dashboard in isolation.",
      },
    ],
    citations: [
      {
        publisher: "Google Ads Help",
        label: "How the Ads auction works",
        href: "https://support.google.com/google-ads/answer/6297?hl=en",
      },
      {
        publisher: "Google Ads Help",
        label: "Healthcare and medicines advertising policy",
        href: "https://support.google.com/adspolicy/answer/176031",
      },
      {
        publisher: "Google Ads Help",
        label: "About Quality Score",
        href: "https://support.google.com/google-ads/answer/6167118",
      },
    ],
    links: [
      { href: "/guides/healthcare-ad-compliance-checklist", label: "Healthcare Ad Compliance Checklist", description: "The compliance requirements that apply before this ad spend goes live." },
      {
        href: "/services/local-seo-for-medical-practices",
        label: "Local SEO for Medical Practices",
        description: "What we run alongside Ads once the campaign is paying for itself.",
      },
      {
        href: "/guides/how-much-does-medical-seo-cost",
        label: "How Much Does Medical SEO Cost",
        description: "The organic-side cost comparison for the same budgeting decision.",
      },
      {
        href: "/guides/how-to-rank-a-med-spa-in-miami",
        label: "How to Rank a Med Spa in Miami",
        description: "Same channel-choice question, aimed at aesthetics practices specifically.",
      },
      {
        href: "/pricing",
        label: "Primara Pricing",
        description: "How we scope and quote a combined SEO and paid media engagement.",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "med-spa-marketing-cost",
    keyword: "med spa marketing cost",
    category: "Pricing",
    title: "How Much Does Med Spa Marketing Cost in Florida?",
    metaTitle: "Med Spa Marketing Cost in Florida (2026)",
    metaDescription:
      "Real 2026 pricing for med spa SEO, Google Business Profile, and ads in Florida, plus what actually drives new-client bookings. Call (561) 291-2681.",
    answer:
      "Med spa marketing in Florida typically costs between one thousand two hundred and five thousand dollars a month, split between Google Business Profile and SEO management, paid ads, and content covering the specific procedures you offer. Aesthetics is one of the most visually competitive categories on Google, so photo quality and review volume move results as much as budget does.",
    author: "Liam Costello",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      {
        type: "h2",
        text: "Why med spas spend differently than a typical medical practice",
      },
      {
        type: "p",
        text: "A med spa competes on two things a primary care office rarely has to: visible results and repeat purchase frequency. Prospective clients scroll photos before they read a word, and a client who books Botox once often becomes a filler, laser, and membership client within a year. That changes where the marketing dollar should go — photo and before/after content, and review volume specific to each procedure, carry more weight than they would for a family practice page.",
      },
      {
        type: "h2",
        text: "2026 monthly budget ranges in Florida",
      },
      {
        type: "table",
        headers: ["Tier", "What it typically includes"],
        rows: [
          [
            "$800–$1,500/mo",
            "Google Business Profile management only — posts, photo uploads, review responses, basic reporting. Enough to keep a profile healthy, rarely enough to grow it in a competitive metro.",
          ],
          [
            "$1,800–$3,500/mo",
            "Managed profile plus procedure-specific content pages, review generation, and light local SEO. The realistic entry point for a single-location spa in a mid-competition city.",
          ],
          [
            "$3,500–$6,000/mo",
            "Everything above plus paid ads (Google and often Meta), conversion tracking, and a content cadence covering new procedures and seasonal offers. What South Florida and Tampa metro spas generally need to hold a top-three map pack position.",
          ],
          [
            "$150–$300/hr",
            "Audit or consulting-only engagements where an in-house coordinator handles execution.",
          ],
        ],
      },
      {
        type: "h2",
        text: "The line item most quotes leave out: procedure-level content",
      },
      {
        type: "p",
        text: "A med spa offering Botox, filler, laser hair removal, and a membership program is really running four to six separate small businesses on one Google Business Profile. A quote that treats \"aesthetics\" as one keyword misses this. Each procedure needs its own page answering what it costs, how long it lasts, and who is a candidate, because that is what people actually search before booking a consult — and each page is a separate ranking opportunity a generic homepage cannot capture.",
      },
      {
        type: "h2",
        text: "Reviews move a med spa more than almost any other category",
      },
      {
        type: "p",
        text: "Aesthetics is a trust-heavy, visually judged purchase, and Google's map pack visibly weighs review count and recency alongside relevance and distance. Spas that ask every satisfied client for a review, consistently and without singling out only the happiest ones, build a compounding advantage competitors cannot buy in a month. Spas that only ask occasionally, or only ask clients who mention loving the result, are quietly violating the FTC's rule on consumer reviews and building a profile that will not hold up if it is ever challenged.",
      },
      {
        type: "h2",
        text: "Why review gating is not on this list of tactics",
      },
      {
        type: "p",
        text: "Some agencies still pitch a \"review funnel\" that routes happy clients to Google and unhappy ones to a private form. The FTC's rule on the use of consumer reviews and testimonials treats suppressing or diverting negative reviews as a deceptive practice, and Google's own policies prohibit incentivizing or gating reviews on a Business Profile. We do not build that funnel for any client, med spa included — every client gets the same request regardless of how the visit went.",
      },
      {
        type: "h2",
        text: "Ads or organic first for a new med spa",
      },
      {
        type: "p",
        text: "A newly opened location with zero reviews and a young profile should lean on ads for the first two to three months, because organic and map pack visibility take time to build and a new profile has nothing yet to compete with an established one. Once the profile has real review volume and procedure pages are indexed, spend typically shifts toward organic and ads narrow to specific promotions or new-service launches.",
      },
      {
        type: "callout",
        text: "What we quote after the audit: a plan built around your actual procedure mix and review gap versus the three spas currently holding your map pack — not a flat aesthetics-industry number.",
      },
    ],
    faqs: [
      {
        q: "How much does med spa SEO cost per month in Florida?",
        a: "Most single-location med spas in Florida spend $1,800–$3,500 a month on managed SEO and Google Business Profile work. Spas competing in Miami, Fort Lauderdale, or Tampa, or running paid ads alongside SEO, typically sit closer to $3,500–$6,000.",
      },
      {
        q: "Is paid advertising or SEO better for a med spa?",
        a: "Paid ads work faster for a new location with no review history yet; SEO and Google Business Profile visibility compound over time and keep working after you stop paying for clicks. Most established spas in competitive Florida metros run both, with ads narrowed to specific procedures or promotions.",
      },
      {
        q: "Why do I need a separate page for each procedure?",
        a: "Someone searching \"how much does filler cost\" and someone searching \"laser hair removal near me\" are different searches with different intent. A single generic aesthetics page cannot rank well for both. Procedure-specific pages each become their own ranking opportunity and answer the actual question a prospective client typed.",
      },
      {
        q: "Can I offer a discount for a Google review?",
        a: "No. Google's guidelines and the FTC's rule on consumer reviews both prohibit incentivizing reviews, and routing only happy clients toward the review request (review gating) is treated as a deceptive practice. Ask every client the same way, every time, regardless of outcome.",
      },
      {
        q: "How many reviews does a med spa need to compete in a Florida metro?",
        a: "There is no fixed number, but in Miami-Dade, Broward, and Palm Beach the map pack leaders in most aesthetics categories carry well over one hundred reviews. What matters more than the total is recency — a steady weekly trickle outperforms a large but stalled count.",
      },
    ],
    citations: [
      {
        publisher: "Google Business Profile Help",
        label: "Improve your local ranking on Google",
        href: "https://support.google.com/business/answer/7091",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
      {
        publisher: "Google Business Profile Help",
        label: "Prohibited and restricted content policy (reviews)",
        href: "https://support.google.com/contributionpolicy/answer/7400114",
      },
    ],
    links: [
      {
        href: "/services/local-seo-for-medical-practices",
        label: "Local SEO for Medical Practices",
        description: "The underlying service — Google Business Profile plus content plus reviews.",
      },
      {
        href: "/locations/west-palm-beach-medspa-marketing",
        label: "Med Spa Marketing in West Palm Beach",
        description: "The metro-level view of med spa competition and review benchmarks.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to Get More Patients from Google Business Profile",
        description: "The review-generation and profile playbook this page references.",
      },
      {
        href: "/guides/google-ads-cost-for-a-medical-practice",
        label: "Google Ads Cost for a Medical Practice",
        description: "The paid-media half of the same budgeting question.",
      },
    ],
  },
];
