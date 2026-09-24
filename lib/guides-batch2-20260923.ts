import type { Guide } from "@/lib/guides";

// ── Batch 2026-09-23 round 2: cost/comparison/how-to guides ───────────────
// Content rows 274, 276, 277, 278, 282, 285, 286, 287. Highest commercial-
// intent rows from the planned queue (page factory instruction: pick cost +
// comparison first). Not city-templated. Row 282 stays on the right side of
// FTC/Google review-gating policy — explains why Primara does not gate.

export const guidesPartFive: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "dental-practice-marketing-cost",
    keyword: "how much does dental practice marketing cost",
    category: "Pricing",
    title: "How Much Does Dental Practice Marketing Cost?",
    metaTitle: "Dental Practice Marketing Cost in Florida (2026)",
    metaDescription:
      "Real 2026 pricing for dental SEO, Google Business Profile, and ads in Florida, plus what actually drives new-patient bookings. Call (561) 291-2681.",
    answer:
      "Dental practice marketing in Florida typically runs one thousand to six thousand dollars a month, depending on whether you're maintaining an existing patient pipeline or trying to grow one in a competitive metro. General dentistry costs less to market than high-ticket services like implants or Invisalign, because the keywords are cheaper and the sales cycle is shorter.",
    author: "Gio LaRoche",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "Why dental marketing pricing splits by service line" },
      {
        type: "p",
        text: "A single dental practice usually sells several products at once: routine cleanings and checkups, cosmetic work, and high-value procedures like implants or full-mouth reconstruction. Each has a different customer journey. Cleanings are searched constantly and decided on quickly; implants are searched less often but researched for weeks before a call. A marketing budget that treats all three the same way underspends on the procedures that actually fund the practice.",
      },
      { type: "h2", text: "2026 monthly budget ranges in Florida" },
      {
        type: "table",
        headers: ["Tier", "What it typically includes"],
        rows: [
          ["$800–$1,500/mo", "Google Business Profile management and basic on-site SEO. Keeps a healthy practice visible; rarely enough to break into a crowded metro's map pack."],
          ["$1,500–$3,500/mo", "Full local SEO (GBP + service pages + citations + reviews) for a single location competing seriously in its city."],
          ["$3,000–$6,000/mo", "SEO plus paid ads targeting high-value procedures (implants, Invisalign, cosmetic), usually split roughly 60/40 between SEO retainer and ad media."],
          ["$5,000+/mo", "Multi-location groups, or a single location in Miami-Dade/Broward/Palm Beach chasing implant and sedation-dentistry keywords against well-funded DSOs."],
        ],
      },
      { type: "h2", text: "What drives the cost up or down" },
      {
        type: "ul",
        items: [
          "Competition density: a solo practice in a smaller Florida city competes with a handful of others; the same practice in Miami competes with dozens, including DSO-backed groups with in-house marketing teams.",
          "Service mix: implants, Invisalign, and sedation dentistry all carry higher cost-per-click and higher-value content requirements than routine care.",
          "Review count and recency: a practice with under 20 reviews needs a review-generation push before ads or SEO investment pays off — traffic without trust converts poorly.",
          "Website condition: a slow or outdated site raises the effective cost of every channel, since paid traffic and organic traffic both convert worse on it.",
        ],
      },
      { type: "h2", text: "SEO vs. ads for a dental practice" },
      {
        type: "p",
        text: "Ads produce new-patient calls within days and are the right first move for a new location or a slow month. SEO takes three to six months to build real map pack presence but keeps producing after you stop paying for clicks. Most established Florida practices run both — a modest, steady ad budget for high-value procedures, and an SEO program carrying the bulk of routine-care volume.",
      },
      { type: "h2", text: "What a realistic first 90 days looks like" },
      {
        type: "ol",
        items: [
          "Weeks 1–2: Google Business Profile audit and cleanup, service pages built or rewritten for the highest-value procedures, review-request system turned on.",
          "Weeks 3–8: local citations built, on-page SEO published across the site, ad campaigns launched if budget allows, call tracking wired to every phone number.",
          "Weeks 9–12: first ranking movement typically visible in the map pack for lower-competition terms; ad campaigns should already be producing tracked, bookable leads.",
        ],
      },
      {
        type: "callout",
        text: "If a proposal quotes one flat number regardless of your city or service mix, ask what it assumes about your competition — a Miami implant practice and a rural general-dentistry office should never get the same number.",
      },
    ],
    faqs: [
      { q: "What's a reasonable monthly marketing budget for a single dental office?", a: "$1,500–$3,500/mo for full local SEO in a competitively normal Florida market, more in Miami-Dade/Broward/Palm Beach or if you're chasing high-value procedures like implants alongside ads." },
      { q: "Is SEO or Google Ads better for a dental practice?", a: "Ads work faster and suit a new location or slow month; SEO costs less over time and keeps producing after you stop paying per click. Most established practices run a lighter version of both rather than picking one exclusively." },
      { q: "Why does implant marketing cost more than general dentistry marketing?", a: "Implant keywords have higher cost-per-click, a longer research phase, and require more detailed content (financing, sedation options, before/after cases) to convert — all of which raise both ad and content production cost." },
      { q: "How many reviews does a dental practice need before marketing pays off?", a: "There's no hard cutoff, but practices under roughly 20 reviews usually see weak conversion from paid and organic traffic alike until review volume catches up — trust-building often needs to run before or alongside the rest of the budget." },
      { q: "Do multi-location dental groups pay more per location or less?", a: "Usually less per location once past two or three, since Google Business Profile management, citation building, and content templates scale across locations — but each location still needs its own local SEO work, not a copy-pasted page." },
    ],
    citations: [
      { publisher: "Google Ads Help", label: "Healthcare and medicines advertising policy", href: "https://support.google.com/adspolicy/answer/176031" },
      { publisher: "Google Business Profile Help", label: "Improve your local ranking on Google", href: "https://support.google.com/business/answer/7091?hl=en" },
      { publisher: "Google Business Profile Help", label: "Guidelines for representing your business", href: "https://support.google.com/business/answer/3038177" },
    ],
    links: [
      { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The core service this budget range funds." },
      { href: "/guides/how-much-does-medical-seo-cost", label: "How Much Does Medical SEO Cost", description: "The same budgeting question for medical practices generally." },
      { href: "/guides/google-ads-cost-for-a-medical-practice", label: "Google Ads Cost for a Medical Practice", description: "The paid-media half of the same decision." },
      { href: "/pricing", label: "Primara Pricing", description: "How we scope and quote a dental SEO engagement." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "seo-vs-meta-ads-for-a-med-spa",
    keyword: "SEO vs Meta ads for a med spa",
    category: "Comparison",
    title: "SEO vs. Meta Ads for a Med Spa: Which Should You Run First?",
    metaTitle: "SEO vs Meta Ads for a Med Spa (2026 Comparison)",
    metaDescription:
      "Where SEO wins, where Meta (Facebook/Instagram) ads win, and how Florida med spas actually combine the two. Call Primara at (561) 291-2681.",
    answer:
      "SEO wins for people already searching for a specific med spa procedure and ready to book; Meta ads win for reaching people who haven't started searching yet but match the profile of a good client. Most Florida med spas that scale successfully run both — Meta to build initial demand and retarget, SEO and Google Business Profile to capture people once they start searching.",
    author: "Liam Costello",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "The core difference: intent vs. discovery" },
      {
        type: "p",
        text: "SEO and Google ads show up when someone types \"Botox near me\" — they've already decided they want the service and are choosing a provider. Meta ads interrupt someone scrolling Instagram who wasn't actively looking, using visual before/after content and audience targeting to create interest that didn't exist a minute earlier. Neither replaces the other; they solve different problems in the same funnel.",
      },
      { type: "h2", text: "Where SEO wins for a med spa" },
      {
        type: "ul",
        items: [
          "Someone actively searching a specific procedure — highest intent to book of any channel.",
          "Local map pack visibility, which drives the majority of \"near me\" med spa traffic on mobile.",
          "Compounding return: a page ranking well keeps producing bookings for years without an ongoing ad spend to sustain it.",
          "Trust signal: many prospective clients check reviews and rankings as a credibility check even after seeing an ad elsewhere.",
        ],
      },
      { type: "h2", text: "Where Meta ads win for a med spa" },
      {
        type: "ul",
        items: [
          "Launching a new procedure or a new location with zero existing search volume.",
          "Visual, before/after-driven content — Meta's format is built for exactly this kind of proof.",
          "Retargeting people who visited your site or Instagram but didn't book, at a much lower cost than a fresh search click.",
          "Speed: a Meta campaign can be live and generating leads within a day or two, far faster than SEO's multi-month build.",
        ],
      },
      { type: "h2", text: "Cost comparison, 2026 Florida ranges" },
      {
        type: "table",
        headers: ["Channel", "Typical monthly range"],
        rows: [
          ["SEO / GBP management", "$1,200–$3,500/mo (management fee, compounds over time)"],
          ["Meta ads (media + management)", "$1,000–$4,000/mo (media spend stops producing the moment you stop paying)"],
          ["Google Ads (comparison point)", "$1,500–$5,000/mo, highest intent but highest cost-per-click of the three"],
        ],
      },
      { type: "h2", text: "A realistic combined approach" },
      {
        type: "p",
        text: "Most Florida med spas that grow steadily run a heavier Meta budget in the first two to three months of a launch or new-service push, then shift weight toward SEO and Google Business Profile as organic rankings start to hold. Meta content — the same before/after photos and testimonials — should also live on the website and Google Business Profile, since duplicating creative across channels costs nothing extra once it exists.",
      },
      {
        type: "callout",
        text: "The one mistake we see most: running Meta ads that drive traffic to a homepage instead of a procedure-specific landing page. That single fix often improves conversion more than any budget increase.",
      },
      { type: "h2", text: "Compliance note for aesthetics advertising" },
      {
        type: "p",
        text: "Meta restricts advertising related to certain cosmetic and health claims, and before/after imagery has specific rules under Meta's health and wellness ad policies — a disapproved ad usually traces back to an implied guarantee or an unverified claim in the copy, not the photo itself.",
      },
    ],
    faqs: [
      { q: "Should a new med spa start with SEO or Meta ads?", a: "Meta ads, in most cases — a brand-new spa has no search history to rank on and needs to generate initial demand and awareness. SEO should start in parallel since it takes months to mature, but Meta typically produces the first bookings." },
      { q: "Can Meta ads and SEO work run at the same time?", a: "Yes, and for an established med spa this is usually the strongest setup — Meta creates and retargets demand, SEO and Google Business Profile capture the search traffic that results from it, including branded searches Meta ads generate." },
      { q: "Why do med spa Meta ads get disapproved?", a: "Most disapprovals trace to implied results guarantees or unverified claims in the ad copy, not the before/after image itself — Meta's health and wellness ad policies restrict certain cosmetic and medical claims specifically." },
      { q: "Is Meta ad spend or SEO cheaper long-term?", a: "SEO is cheaper over a multi-year horizon because a well-ranked page keeps producing bookings without ongoing media spend, while Meta traffic stops the moment the campaign pauses. SEO costs more time upfront before it produces results, though." },
      { q: "What Meta ad budget does a Florida med spa need to see results?", a: "Most single-location Florida med spas need at least $1,000/mo in media spend to gather enough data for Meta's algorithm to optimize delivery well; below that, campaigns often stay in a slow, expensive learning phase." },
    ],
    citations: [
      { publisher: "Google Ads Help", label: "Healthcare and medicines advertising policy", href: "https://support.google.com/adspolicy/answer/176031" },
      { publisher: "Google Business Profile Help", label: "Improve your local ranking on Google", href: "https://support.google.com/business/answer/7091?hl=en" },
      { publisher: "FTC Consumer Advice", label: "Advertising and marketing basics", href: "https://www.ftc.gov/business-guidance/advertising-marketing" },
    ],
    links: [
      { href: "/services/google-business-profile", label: "Google Business Profile Management", description: "The SEO-side service this comparison points to." },
      { href: "/guides/how-to-rank-a-med-spa-in-miami", label: "How to Rank a Med Spa in Miami", description: "The SEO playbook for the channel this page compares against Meta." },
      { href: "/guides/med-spa-marketing-cost", label: "Med Spa Marketing Cost", description: "The budget breakdown behind the numbers on this page." },
      { href: "/pricing", label: "Primara Pricing", description: "How we scope a combined SEO and paid-media engagement." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "in-house-marketer-vs-agency-for-a-medical-practice",
    keyword: "in-house marketer vs agency for a medical practice",
    category: "Comparison",
    title: "In-House Marketer vs. Agency: What's Right for Your Practice?",
    metaTitle: "In-House Marketer vs Agency for a Medical Practice (2026)",
    metaDescription:
      "Real cost and capability comparison between hiring in-house and hiring an agency for medical practice marketing. Call Primara at (561) 291-2681.",
    answer:
      "A full-time in-house marketer costs fifty to eighty thousand dollars a year in salary alone, plus tools and training, and typically covers one or two disciplines well. An agency costs one to six thousand dollars a month and brings a full team — SEO, ads, content, and GBP management — but knows your practice less personally than an employee who sits in your building every day.",
    author: "Gio LaRoche",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "The real cost comparison" },
      {
        type: "table",
        headers: ["Cost factor", "In-house marketer"],
        rows: [
          ["Base cost", "$50,000–$80,000/yr salary + benefits"],
          ["Tools", "$300–$1,000/mo (SEO tools, ad platforms, design software)"],
          ["Specialization", "One or two disciplines (often SEO or social, rarely both plus ads plus web)"],
          ["Ramp time", "1–3 months to learn the practice, then ongoing training as platforms change"],
        ],
      },
      {
        type: "table",
        headers: ["Cost factor", "Agency"],
        rows: [
          ["Base cost", "$1,000–$6,000/mo, scales with scope"],
          ["Tools", "Usually included in the fee"],
          ["Specialization", "Full team: SEO, ads, GBP, content, sometimes web development"],
          ["Ramp time", "Days to weeks — agency already runs current best practices across many accounts"],
        ],
      },
      { type: "h2", text: "Where an in-house hire genuinely wins" },
      {
        type: "ul",
        items: [
          "Deep, daily familiarity with your practice, providers, and patients — an employee absorbs context an outside team never fully will.",
          "Full availability for same-day requests, photo shoots, front-desk coordination, or in-person events.",
          "No account-management layer between decision and execution.",
          "Works well when the practice is large enough to fully occupy one person across social, events, and internal communications, not just growth marketing.",
        ],
      },
      { type: "h2", text: "Where an agency genuinely wins" },
      {
        type: "ul",
        items: [
          "Breadth: SEO, paid ads, Google Business Profile, and content all need different, current skill sets — very few individual hires are strong across all four.",
          "Pattern recognition from other practices: what worked and what didn't across dozens of similar accounts, not a single practice's history.",
          "No hiring risk, no sick days, no single point of failure if one person leaves.",
          "Lower cost for most single-location practices, since you're buying a fraction of a team's time rather than one full salary.",
        ],
      },
      { type: "h2", text: "The hybrid model most growing practices land on" },
      {
        type: "p",
        text: "A common, effective setup for a Florida practice with two to five locations: one in-house marketing coordinator who owns the phone, the front desk experience, internal comms, and day-to-day content gathering (photos, testimonials, provider updates), paired with an agency running SEO, ads, and Google Business Profile strategy. The coordinator feeds the agency real material; the agency turns it into ranking pages and campaigns. Neither role works as well alone as the two do together.",
      },
      { type: "h2", text: "Questions to ask before deciding" },
      {
        type: "ol",
        items: [
          "How many hours a week does marketing actually need right now — and is that closer to a full role or a fraction of one?",
          "Do you need one discipline done very well, or several done adequately at once?",
          "What happens to results if the one person handling this leaves?",
          "Can you evaluate quality of work without hiring a specialist to check the specialist?",
        ],
      },
      {
        type: "callout",
        text: "A useful gut-check: if you can't name the specific discipline (SEO, ads, content, GBP) the hire will own, you're probably better served by an agency's breadth first — and adding a dedicated in-house role once you know exactly which piece needs a full-time owner.",
      },
    ],
    faqs: [
      { q: "Is it cheaper to hire in-house or use an agency for medical marketing?", a: "For most single-location practices, an agency is cheaper — $1,000–$6,000/mo buys a fraction of a full team's time across several disciplines, versus $50,000–$80,000/yr plus tools and benefits for one in-house generalist." },
      { q: "Can one in-house marketer really cover SEO, ads, and content?", a: "Rarely well. Each discipline changes fast enough that staying current in all three, on top of day-to-day practice needs, is a heavy load for one person — most practices that try this end up strong in one area and weak in the others." },
      { q: "When does hiring in-house make more sense than an agency?", a: "When the role needs daily physical presence — coordinating photo shoots, managing front-desk experience, handling same-day requests — or when the practice is large enough to fully occupy one person's time on marketing alone." },
      { q: "Can a practice use both an in-house hire and an agency at once?", a: "Yes, and it's a common, effective setup: an in-house coordinator handles day-to-day content and front-desk coordination while an agency runs SEO, ads, and Google Business Profile strategy on top of what the coordinator gathers." },
      { q: "What should I check before signing with a marketing agency?", a: "Ask for specific, verifiable results from practices like yours, confirm who actually does the work (not just who sells it), and get clarity on reporting cadence and what's included versus billed separately." },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Guidelines for representing your business", href: "https://support.google.com/business/answer/3038177" },
      { publisher: "Google Ads Help", label: "Healthcare and medicines advertising policy", href: "https://support.google.com/adspolicy/answer/176031" },
      { publisher: "FTC Consumer Advice", label: "Advertising and marketing basics", href: "https://www.ftc.gov/business-guidance/advertising-marketing" },
    ],
    links: [
      { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The kind of scope an agency engagement typically covers." },
      { href: "/guides/how-much-does-medical-seo-cost", label: "How Much Does Medical SEO Cost", description: "The budget side of the build-vs-buy decision." },
      { href: "/guides/how-to-pick-a-healthcare-marketing-agency", label: "How to Pick a Healthcare Marketing Agency", description: "Once you decide agency over in-house, the questions that separate a good one from a bad one." },
      { href: "/pricing", label: "Primara Pricing", description: "What an agency engagement actually costs, scoped." },
      { href: "/about", label: "About Primara", description: "Who does the work when you hire an agency team." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "google-business-profile-vs-website-for-patient-acquisition",
    keyword: "Google Business Profile vs website for patient acquisition",
    category: "Comparison",
    title: "Google Business Profile vs. Website: Which Drives More New Patients?",
    metaTitle: "GBP vs Website for Patient Acquisition (2026)",
    metaDescription:
      "Which matters more for new patients — your Google Business Profile or your website — and why the real answer is both, in a specific order. Call (561) 291-2681.",
    answer:
      "For most Florida practices, Google Business Profile drives the first click and the website closes the decision — a searcher sees your profile in the map pack, checks your rating and photos, then either calls directly from the profile or clicks through to your site to confirm details before booking. Neglecting either one breaks the path a new patient actually takes.",
    author: "Liam Costello",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "What each one is actually for" },
      {
        type: "p",
        text: "Google Business Profile is your storefront inside Google Search and Maps — it's what shows up in the map pack for \"urgent care near me,\" complete with reviews, hours, photos, and a call button, before anyone ever reaches your website. Your website is where someone goes to verify you're legitimate, check a provider's background, see accepted insurance, or fill out a form. They serve different moments in the same decision, not competing purposes.",
      },
      { type: "h2", text: "The typical patient path" },
      {
        type: "ol",
        items: [
          "Search: \"pediatrician near me\" or a specific condition/procedure.",
          "Map pack scan: rating, review count, photos, and distance decide who gets considered — usually in under ten seconds.",
          "Either a direct call from the profile (fastest path, most common on mobile) or a click to the website for more detail.",
          "On the website: insurance, provider bios, and a working phone number or form decide whether the visit actually happens.",
        ],
      },
      { type: "h2", text: "Where Google Business Profile carries more weight" },
      {
        type: "ul",
        items: [
          "\"Near me\" and map-pack visible searches, which make up the majority of mobile local search behavior.",
          "First impression: rating and photo quality are evaluated before anyone reads a word of website copy.",
          "Direct-call conversions — many mobile searchers call straight from the profile and never visit the website at all.",
        ],
      },
      { type: "h2", text: "Where the website carries more weight" },
      {
        type: "ul",
        items: [
          "Trust verification: provider credentials, insurance accepted, and specific services offered live here, not on the profile.",
          "Higher-consideration decisions — a first-time surgery consult or a therapy practice search usually involves more research than a routine cleaning.",
          "Form-based leads and anyone who prefers to book online rather than call.",
          "SEO growth beyond the map pack — organic search results outside the three-pack still send meaningful traffic, and only a website can rank there.",
        ],
      },
      { type: "h2", text: "What happens when one is neglected" },
      {
        type: "table",
        headers: ["Neglected", "Typical result"],
        rows: [
          ["Google Business Profile (stale photos, few reviews, wrong hours)", "Lower map pack ranking, lower click-through even when ranked, lost direct calls"],
          ["Website (slow, outdated, missing insurance/provider info)", "Map pack traffic clicks through and leaves without calling — high map pack visibility, low booked-visit conversion"],
        ],
      },
      {
        type: "callout",
        text: "A common, fixable pattern: strong Google Business Profile ranking, weak conversion. If your map pack position is good but calls aren't matching it, the website is usually the leak, not the profile.",
      },
    ],
    faqs: [
      { q: "Do I need a website if my Google Business Profile is already ranking well?", a: "Yes. A profile alone can't show insurance details, provider credentials, or a full service list, and it can't rank in traditional organic search results outside the map pack — you'll lose higher-consideration patients who want to verify before calling." },
      { q: "Which should I invest in first, GBP or the website?", a: "If your profile has real gaps — few reviews, stale photos, wrong hours — start there; it's faster and cheaper to fix and usually has the bigger short-term impact on new-patient calls. A weak website matters more once the profile is already driving traffic that isn't converting." },
      { q: "Can a great website make up for a weak Google Business Profile?", a: "Not for map-pack visible searches. Most \"near me\" mobile searches never make it past the map pack results, so a strong website behind a poorly optimized profile often goes largely unseen for that traffic." },
      { q: "How do I know if my website or my GBP is the weak link?", a: "Compare map pack ranking/impressions (from GBP insights) against actual calls and form fills (from the website and call tracking). Good visibility with low conversion points to the website; low visibility points to the profile." },
      { q: "Does the website need to match the Google Business Profile exactly?", a: "Name, address, phone number, and hours should match exactly — mismatches confuse both patients and Google's ranking algorithm. Content depth (services, providers, insurance) should go further on the website than the profile allows." },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Improve your local ranking on Google", href: "https://support.google.com/business/answer/7091?hl=en" },
      { publisher: "Google Business Profile Help", label: "Guidelines for representing your business", href: "https://support.google.com/business/answer/3038177" },
      { publisher: "Google Search Central", label: "SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    links: [
      { href: "/services/google-business-profile", label: "Google Business Profile Management", description: "The service half of this comparison." },
      { href: "/services/medical-website-design", label: "Medical Website Design", description: "The website half of this comparison." },
      { href: "/guides/how-to-get-more-patients-from-google-business-profile", label: "How to Get More Patients from GBP", description: "The GBP-specific playbook this page points to." },
      { href: "/pricing", label: "Primara Pricing", description: "How we scope work across both channels together." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "getting-more-patient-reviews-without-review-gating",
    keyword: "how to get more patient reviews without review gating",
    category: "How-to",
    title: "How to Get More Patient Reviews Without Review Gating",
    metaTitle: "Get More Patient Reviews the Compliant Way (2026)",
    metaDescription:
      "Review gating is against Google and FTC policy. Here's the compliant, actually-effective way Florida practices grow review volume. Call (561) 291-2681.",
    answer:
      "Review gating — screening patients privately and only sending happy ones to a public review link — violates Google's review policies and the FTC's rule against suppressing negative reviews, and Google can suppress or remove reviews earned that way. The compliant alternative is simple: ask every patient the same way, at the same moment, and make leaving a review easy regardless of what they're likely to say.",
    author: "Gio LaRoche",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "Why Primara does not build review-gating systems" },
      {
        type: "p",
        text: "Review gating asks patients a screening question first — often \"how was your visit?\" with a star rating — and only routes the people who answer positively to a public review link, quietly redirecting unhappy patients to a private feedback form instead. Google's review policies prohibit \"providing different instructions for leaving positive or negative reviews,\" and the FTC's 2024 rule on fake and manipulated reviews specifically targets exactly this practice. It isn't a gray area; it's a named violation on both sides.",
      },
      { type: "h2", text: "What actually happens when a practice gates reviews" },
      {
        type: "ul",
        items: [
          "Google can detect gating patterns (review distribution and timing anomalies) and has suppressed or removed review volume from accounts that use it.",
          "The FTC rule (effective 2024) allows penalties for review suppression practices, including gating, that mislead consumers about a business's true reputation.",
          "It quietly filters out the exact feedback that would tell you about a real problem before it gets worse.",
          "A sudden drop in review growth after Google catches a gating pattern is harder to recover from than the slower, honest growth it was trying to shortcut.",
        ],
      },
      { type: "h2", text: "The compliant approach that actually works" },
      {
        type: "ol",
        items: [
          "Ask every patient the same way. One review request link, sent to everyone who had a visit — no pre-screening step, no routing based on predicted sentiment.",
          "Time it right. Send the request within a few hours of the visit while it's fresh, not days later when the moment has passed.",
          "Make it a one-click path. A direct link to your Google review form beats a general \"leave us a review\" request that makes the patient hunt for where to go.",
          "Respond to every review, good and bad. A thoughtful response to a negative review does more for trust than hiding it ever could — prospective patients read the response, not just the star.",
          "Ask consistently, not just after obviously great visits. Volume and consistency matter more to Google's ranking signals than a curated 5.0 average with almost no reviews.",
        ],
      },
      { type: "h2", text: "What to do when a negative review actually arrives" },
      {
        type: "p",
        text: "Respond promptly, acknowledge the specific concern without disclosing any patient health information, and offer to resolve it offline through your front desk or office manager. A calm, professional public response is itself marketing — it's often the deciding factor for a prospective patient reading through your reviews before calling.",
      },
      {
        type: "callout",
        text: "A 4.6 average built from 150 honestly collected reviews outperforms a curated 4.9 from 20 gated ones — both for Google's ranking algorithm and for a prospective patient's trust.",
      },
      { type: "h2", text: "Setting up a compliant request system" },
      {
        type: "p",
        text: "The mechanics are simple: a text or email sent after every visit with a direct link to your Google Business Profile review form, no pre-screening question in the message. Primara's own review-request system works exactly this way — every patient gets the same link, at the same point, regardless of how the visit likely went, which is both the compliant approach and, over time, the one that produces a review profile Google actually trusts and ranks well.",
      },
    ],
    faqs: [
      { q: "What is review gating and why is it against policy?", a: "Review gating pre-screens patients with a private rating question and only sends positive respondents to a public review link. Google's review policies ban giving different instructions based on expected sentiment, and the FTC's 2024 rule specifically targets review suppression practices like this." },
      { q: "Can Google detect and penalize review gating?", a: "Yes — Google can identify gating patterns through review distribution and timing anomalies, and accounts using it have had review volume suppressed or removed. It is a named, enforceable policy violation, not an informal guideline." },
      { q: "How should a practice actually ask for reviews?", a: "Send the same request, with a direct one-click link to your Google review form, to every patient after every visit — no pre-screening question, no routing based on predicted sentiment. Timing it within a few hours of the visit improves response rates." },
      { q: "What should we do if we get a negative review?", a: "Respond promptly and professionally, acknowledge the concern without sharing any patient health information publicly, and offer to resolve it offline. The public response is read by future prospective patients and matters more than the single star rating." },
      { q: "Does review volume or average rating matter more for ranking?", a: "Both factor in, but a larger volume of honestly collected reviews with a solid (not perfect) average generally signals more trust to Google's algorithm and to patients than a very high average built from very few reviews." },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Prohibited and restricted content — reviews", href: "https://support.google.com/business/answer/7412043" },
      { publisher: "FTC", label: "Rule on Fake Reviews and Testimonials", href: "https://www.ftc.gov/legal-library/browse/rules/rule-fake-reviews-testimonials" },
      { publisher: "Google Business Profile Help", label: "Read and reply to reviews", href: "https://support.google.com/business/answer/3474122" },
    ],
    links: [
      { href: "/services/reputation-management", label: "Reputation Management", description: "The compliant review-generation service this page describes." },
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "How to Respond to a Negative Patient Review", description: "The follow-on guide for handling what shows up once you stop gating." },
      { href: "/services/google-business-profile", label: "Google Business Profile Management", description: "Where reviews live and how they affect ranking." },
      { href: "/pricing", label: "Primara Pricing", description: "How review-request systems are scoped and priced." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "choosing-google-business-profile-categories-for-a-medical-practice",
    keyword: "how to choose Google Business Profile categories for a medical practice",
    category: "How-to",
    title: "How to Choose Google Business Profile Categories for a Medical Practice",
    metaTitle: "GBP Categories for Medical Practices (2026 Guide)",
    metaDescription:
      "How to pick a primary and secondary Google Business Profile category that actually matches what patients search for. Call Primara at (561) 291-2681.",
    answer:
      "Your Google Business Profile primary category should match the single service patients most associate with you — \"Family practice physician\" for a general practice, \"Dermatologist\" for a dermatology office — because it carries the most weight in Google's ranking for that term. Secondary categories (up to nine more) should cover other real services you offer, never terms you're hoping to rank for but don't actually provide.",
    author: "Liam Costello",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 6,
    sections: [
      { type: "h2", text: "Why category choice matters more than most practices realize" },
      {
        type: "p",
        text: "Google's local ranking algorithm weighs your primary category heavily when matching a search to nearby businesses — it's one of the strongest signals in the whole profile. A dermatology practice categorized as a generic \"Medical clinic\" is competing against every kind of clinic for map pack placement instead of specifically against other dermatologists, and it shows up less often for \"dermatologist near me\" as a result.",
      },
      { type: "h2", text: "How to pick your primary category" },
      {
        type: "ol",
        items: [
          "Write down the single service that brings in the most new patients today — not what you wish it were, what actually drives calls.",
          "Search Google's category list for the most specific match available (\"Obstetrician-gynecologist,\" not \"Women's health clinic,\" if that's genuinely what you are).",
          "Check what your closest well-ranked competitors use, as a sanity check — not to copy them, but to confirm you're in the right category family.",
          "If you offer several distinct specialties under one roof, the primary category should reflect whichever one is the practice's actual identity, with the rest handled as secondary categories.",
        ],
      },
      { type: "h2", text: "Using secondary categories correctly" },
      {
        type: "p",
        text: "Google allows up to nine secondary categories in addition to the primary. Each should represent a real, currently offered service — never an aspirational one. Adding \"Weight loss service\" because you're planning to launch a program next quarter, but haven't yet, risks a profile suspension for misrepresentation and won't help ranking for a service you can't actually deliver on when someone calls.",
      },
      { type: "h2", text: "Common category mistakes we see" },
      {
        type: "table",
        headers: ["Mistake", "Why it hurts"],
        rows: [
          ["Primary category too generic (\"Medical clinic\" instead of the actual specialty)", "Competes against every clinic type instead of true peers; weaker match for specific searches"],
          ["Secondary categories for services not actually offered", "Risk of suspension for misrepresentation; misleads patients who call expecting that service"],
          ["Using the same category as every competitor without checking fit", "Misses more specific categories that better match what you actually do"],
          ["Never revisiting categories after adding a new service", "Profile stays invisible for searches related to services you've offered for months or years"],
        ],
      },
      { type: "h2", text: "How to change your categories" },
      {
        type: "p",
        text: "In Google Business Profile Manager: Edit profile → Business information → the pencil icon next to Category. Changes to the primary category can take a short period to reflect in ranking, and Google occasionally requires re-verification after a significant category change — plan changes outside of a high-traffic period if possible.",
      },
      {
        type: "callout",
        text: "Review your categories any time you add, drop, or meaningfully change a service line — not just at initial setup. A category list frozen from when the profile was created is one of the most common, easiest-to-fix GBP gaps we find in an audit.",
      },
    ],
    faqs: [
      { q: "How many Google Business Profile categories can I have?", a: "One primary category plus up to nine secondary categories, for a total of ten. The primary carries significantly more ranking weight than any secondary." },
      { q: "What happens if I choose the wrong primary category?", a: "Your profile competes for map pack placement against businesses in that category rather than your true peers, which typically means weaker visibility for the searches that actually matter to your practice." },
      { q: "Can I add a category for a service I plan to offer soon?", a: "No — categories should reflect services you currently offer, not planned ones. Adding aspirational categories risks a profile suspension for misrepresentation and misleads anyone who calls expecting that service today." },
      { q: "How often should I review my GBP categories?", a: "Any time you add, drop, or meaningfully change a service line, and at minimum once a year as a check — not just when the profile was first set up." },
      { q: "Does changing my primary category affect my existing rankings?", a: "It can, temporarily — Google may take some time to re-evaluate ranking signals after a category change, and significant changes occasionally trigger a re-verification step. This is normal and not a sign something went wrong." },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Choose primary and secondary business categories", href: "https://support.google.com/business/answer/10688573" },
      { publisher: "Google Business Profile Help", label: "Guidelines for representing your business", href: "https://support.google.com/business/answer/3038177" },
      { publisher: "Google Business Profile Help", label: "Improve your local ranking on Google", href: "https://support.google.com/business/answer/7091?hl=en" },
    ],
    links: [
      { href: "/services/google-business-profile", label: "Google Business Profile Management", description: "The service that includes category audits like this one." },
      { href: "/guides/how-to-get-more-patients-from-google-business-profile", label: "How to Get More Patients from GBP", description: "The broader GBP optimization playbook this fits into." },
      { href: "/guides/fix-a-suspended-google-business-profile", label: "Fix a Suspended Google Business Profile", description: "What to do if a category change (or anything else) triggers a suspension." },
      { href: "/pricing", label: "Primara Pricing", description: "How GBP management is scoped and priced." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "tracking-phone-calls-from-a-medical-website",
    keyword: "how to track phone calls from a medical website",
    category: "How-to",
    title: "How to Track Phone Calls from a Medical Website",
    metaTitle: "Track Phone Calls from a Medical Website (2026 Guide)",
    metaDescription:
      "How Florida practices set up compliant call tracking — dynamic numbers, GA4 events, and Google Ads conversions — without touching PHI. Call (561) 291-2681.",
    answer:
      "Call tracking for a medical website means assigning a trackable phone number (or tracking your existing number's click events) so every call from your site, Google Business Profile, and ad campaigns can be tied back to the channel that produced it. Done correctly, it tracks that a call happened and where it came from — never the content of the conversation, which stays outside HIPAA's marketing-analytics concerns entirely.",
    author: "Gio LaRoche",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "Why untracked phone calls are the biggest blind spot in medical marketing" },
      {
        type: "p",
        text: "Most patients calling a practice from a mobile search never fill out a form — they tap the number and call directly, especially from the Google Business Profile map pack. Without call tracking, that entire conversion path is invisible to your analytics: you can see clicks and impressions, but not whether they turned into a booked patient. This is the single most common reason a practice's marketing looks like it isn't working when it actually is.",
      },
      { type: "h2", text: "Two ways to track calls, and when to use each" },
      {
        type: "table",
        headers: ["Method", "What it captures"],
        rows: [
          ["Dynamic Number Insertion (DNI)", "Swaps in a unique tracked number per visitor session/source, so you can attribute a call to the specific campaign, keyword, or even page that produced it"],
          ["Click-to-call event tracking", "Fires an analytics event when a visitor taps a tel: link, without changing the phone number displayed — simpler, but only proves a tap happened, not that the call connected or how long it lasted"],
        ],
      },
      {
        type: "p",
        text: "Most practices running any paid ads should use DNI for source-level attribution; a practice running SEO only, with no ad spend to attribute across, often gets enough signal from simple click-to-call event tracking alone.",
      },
      { type: "h2", text: "What NOT to do — the HIPAA line" },
      {
        type: "ul",
        items: [
          "Never record, transcribe, or analyze the content of a patient call for marketing purposes — that crosses from marketing analytics into PHI territory the moment health information is discussed.",
          "Never pass patient names, conditions, or appointment details into an analytics or ad platform, even indirectly through a form field mapped to a tracking parameter.",
          "Call tracking that only measures that a call occurred, its duration, and its source — never its content — stays outside PHI concerns and is what every reputable call-tracking platform is built to do by default.",
        ],
      },
      { type: "h2", text: "Wiring it into the rest of your tracking" },
      {
        type: "ol",
        items: [
          "Every tel: link on the site fires a phone_call event into GA4 the moment it's tapped, tagged with the page and source it came from.",
          "That GA4 event is mirrored as a Google Ads conversion action (marked Primary), so ad campaigns can optimize toward actual calls, not just clicks.",
          "Call tracking numbers are set up per major channel — organic, Google Business Profile, and each active ad campaign — so calls can be attributed at the source level, not just totaled.",
          "Reporting ties calls together with form submissions into one number: total tracked leads by source, not two separate half-pictures.",
        ],
      },
      {
        type: "callout",
        text: "A practice we commonly see: Google Ads reporting shows a high cost-per-click and \"no conversions,\" while the phones are actually ringing constantly — because every one of those calls came in untracked. Fixing tracking, not the ad campaign, was the real problem.",
      },
      { type: "h2", text: "Checking that it's actually working" },
      {
        type: "p",
        text: "Call your own tracked number from a phone, confirm the event fires in GA4 Realtime within a minute, and confirm it shows up as a conversion in Google Ads within 24 hours (Ads conversions aren't instant). Do this after any website redesign or CRM/analytics platform change — call tracking is one of the most common things silently broken by an unrelated update.",
      },
    ],
    faqs: [
      { q: "Does call tracking violate HIPAA?", a: "No, as long as it only records that a call happened, its duration, and the source it came from — never the content of the conversation or any patient-identifying information passed into the tracking or analytics platform." },
      { q: "What's the difference between Dynamic Number Insertion and click-to-call tracking?", a: "DNI swaps in a unique number per visitor source for full attribution down to the campaign or keyword; click-to-call tracking fires an event on tap without changing the number shown, which is simpler but gives less source-level detail." },
      { q: "How do I know if my phone calls are actually being tracked?", a: "Call your own tracked number and confirm a phone_call event appears in GA4 Realtime within about a minute, and that it shows as a conversion in Google Ads within about 24 hours. Do this check after any website or platform change." },
      { q: "Why do my Google Ads show no conversions even though the phone rings constantly?", a: "This is almost always a tracking gap, not an ad performance problem — calls happening outside a tracked number or without a phone_call event wired to a Google Ads conversion action are invisible to the ads dashboard entirely." },
      { q: "Do I need call tracking if I only run SEO, no paid ads?", a: "It's still valuable — you can't measure whether SEO is producing actual patient calls without it — but simple click-to-call event tracking, without full Dynamic Number Insertion, is usually sufficient when there's no ad spend to attribute across sources." },
    ],
    citations: [
      { publisher: "HHS.gov", label: "HIPAA Privacy Rule and marketing", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html" },
      { publisher: "Google Ads Help", label: "About call conversions", href: "https://support.google.com/google-ads/answer/6115398" },
      { publisher: "Google Analytics Help", label: "GA4 event tracking", href: "https://support.google.com/analytics/answer/9322688" },
    ],
    links: [
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking for a Medical Website", description: "The broader tracking-compliance guide this page's HIPAA section fits under." },
      { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The service this tracking setup measures the results of." },
      { href: "/services/medical-website-design", label: "Medical Website Design", description: "Where call tracking is wired in on every build." },
      { href: "/pricing", label: "Primara Pricing", description: "How tracking setup is scoped into an engagement." },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-write-a-medical-service-page-that-ranks",
    keyword: "how to write a medical service page that ranks",
    category: "How-to",
    title: "How to Write a Medical Service Page That Ranks",
    metaTitle: "Write a Medical Service Page That Ranks (2026 Guide)",
    metaDescription:
      "The structure, content, and schema a medical service page needs to rank and convert — not a generic SEO checklist. Call Primara at (561) 291-2681.",
    answer:
      "A medical service page that ranks answers the patient's actual question in the first two sentences, names the specific procedure or condition exactly how patients search for it, includes provider credentials and real practice details, and answers the two or three follow-up questions every patient has before booking. Generic \"we offer excellent care\" copy ranks poorly because it answers nothing a real search actually asked.",
    author: "Liam Costello",
    publishDate: "2026-09-23T09:00:00Z",
    dateModified: "2026-09-23",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "Start with the question, not the service name" },
      {
        type: "p",
        text: "Most medical service pages open with a paragraph about the practice's mission before ever mentioning what the page is actually about. A patient searching \"knee replacement recovery time\" or \"do I need a referral for a dermatologist\" wants that answer immediately, not after three paragraphs of brand introduction. The first 40 to 60 words on the page should directly answer the core question the page targets — the rest of the page supports and expands on that answer.",
      },
      { type: "h2", text: "The structure that consistently works" },
      {
        type: "ol",
        items: [
          "Answer box: 40–60 words, plain language, answers the primary question directly.",
          "What the service/procedure is: specific, not vague — name it exactly how patients search for it, including common alternate terms.",
          "Who it's for / when it's needed: the decision criteria a patient uses to know this applies to them.",
          "What to expect: process, timeline, recovery if applicable — the practical questions that come right after \"is this for me.\"",
          "Provider credentials: who actually performs or oversees the service, with real, verifiable credentials — never invented or exaggerated ones.",
          "FAQ section: 4–6 real follow-up questions, answered directly, marked up as FAQPage schema so Google and AI answer engines can surface them.",
          "Clear next step: a phone number and/or booking link, not buried at the bottom in small text.",
        ],
      },
      { type: "h2", text: "Keyword targeting without keyword stuffing" },
      {
        type: "p",
        text: "One page should own one primary intent — don't try to rank the same page for \"knee replacement,\" \"hip replacement,\" and \"joint pain treatment\" all at once; split them into separate pages if they're genuinely different searches. Use the exact patient phrasing naturally in the H1, the first paragraph, and at least one H2 — but the page should read like a person wrote it for a patient, not like it was built for an algorithm.",
      },
      { type: "h2", text: "Schema markup every service page needs" },
      {
        type: "table",
        headers: ["Schema type", "What it does"],
        rows: [
          ["MedicalProcedure or Service", "Tells search engines specifically what the page offers, beyond what the text alone conveys"],
          ["FAQPage", "Makes your FAQ answers eligible to appear directly in Google's rich results and AI-generated answers"],
          ["BreadcrumbList", "Shows the page's place in your site structure in search results, and helps Google understand site architecture"],
          ["Physician (where applicable)", "Attaches verified credentials to the provider performing the service, strengthening trust signals"],
        ],
      },
      { type: "h2", text: "Common mistakes that quietly kill rankings" },
      {
        type: "ul",
        items: [
          "Copying manufacturer or supplier boilerplate instead of writing original content — duplicate content across many practice websites ranks poorly for all of them.",
          "No internal links pointing to the page from other relevant pages on the site — an unlinked page is far harder for Google to find and trust.",
          "Missing or generic meta title/description, so the page doesn't stand out in search results even when it ranks.",
          "Stock photography with no real practice, provider, or facility images — a weak trust signal both for patients and for Google's quality evaluation.",
        ],
      },
      {
        type: "callout",
        text: "The fastest test of a service page: could a patient read only the first 60 words and know whether this service applies to them? If not, rewrite the opening before touching anything else on the page.",
      },
    ],
    faqs: [
      { q: "How long should a medical service page be?", a: "700–1,200 words of genuinely unique content is the sweet spot for most service pages — long enough to answer real follow-up questions and support FAQ schema, short enough that it doesn't bury the answer patients came for." },
      { q: "Should one page target multiple related procedures?", a: "No — split genuinely different search intents into separate pages. A page trying to rank for several distinct procedures at once usually ranks weakly for all of them instead of well for one." },
      { q: "What schema markup does a medical service page need?", a: "At minimum: Service or MedicalProcedure, FAQPage, and BreadcrumbList. Add Physician schema when a specific, credentialed provider is named as performing the service." },
      { q: "How many FAQs should a service page have?", a: "Four to six real questions patients actually ask, each answered directly in about 40–80 words, marked up with FAQPage schema so they're eligible for rich results and AI-generated answers." },
      { q: "Does provider information belong on the service page or a separate bio page?", a: "Both, ideally — a short credentials line on the service page builds immediate trust, linked out to a full provider bio page for anyone who wants more detail before booking." },
    ],
    citations: [
      { publisher: "Google Search Central", label: "SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { publisher: "Google Search Central", label: "FAQPage structured data guidelines", href: "https://developers.google.com/search/docs/appearance/structured-data/faqpage" },
      { publisher: "Google Search Central", label: "E-E-A-T and quality rater guidelines overview", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    links: [
      { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "The service that includes building pages to this standard." },
      { href: "/services/medical-website-design", label: "Medical Website Design", description: "Where service pages like this get built and hosted." },
      { href: "/guides/get-a-medical-practice-into-ai-search-answers", label: "Get a Medical Practice into AI Search Answers", description: "The AEO extension of the same page-structure discipline." },
      { href: "/pricing", label: "Primara Pricing", description: "How service-page content work is scoped." },
    ],
  },
];
