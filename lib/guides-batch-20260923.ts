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
        text: "These ranges move with your county. Miami-Dade, Broward, and Palm Beach run near the top of each band because of the sheer number of competing practices; Treasure Coast and North Florida markets often sit twenty to thirty percent lower for the same specialty. Branded searches for your own practice name cost a fraction of these numbers and should almost always be part of the plan, since a competitor can otherwise bid on your name. Before setting a budget, compare channels in [local pack vs organic results vs Google Ads for a medical practice](/guides/local-pack-vs-organic-results-vs-google-ads-for-a-medical-practice).",
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
      { q: "Can I run Google Ads for mental health or telehealth services?", a: "Yes, but both categories carry extra restrictions and in some cases certification requirements under Google's healthcare and medicines policy. Campaigns built without accounting for this are the most common cause of a healthcare account getting disapproved shortly after launch. We put this in writing before you commit to anything, so there are no surprises later." },
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
      { href: "/guides/google-ads-negative-keywords-checklist-for-a-medical-practice", label: "Google Ads Negative Keywords Checklist", description: "The cheapest lever to improve what this budget actually buys." },
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
        href: "/pricing",
        label: "Primara Pricing",
        description: "How we scope and quote a combined SEO and paid media engagement.",
      },
      {
        href: "/guides/google-ads-quality-score-explained-for-a-medical-practice",
        label: "Google Ads Quality Score, Explained for a Medical Practice",
        description: "The diagnostic score that directly moves the cost figures on this page.",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
];
