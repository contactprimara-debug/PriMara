import type { Guide } from "@/lib/guides";

// Pricing + comparison guides. Note: Primara does not publish its own fee (see
// app/pricing/page.tsx — scope is quoted after the audit). These pages quote
// MARKET ranges for what agencies in Florida charge, clearly framed as such,
// and point to /pricing for our own stance. Do not put a Primara price here.

export const guidesPartOne: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-medical-seo-cost",
    keyword: "how much does medical SEO cost",
    category: "Pricing",
    title: "How Much Does Medical SEO Cost in Florida?",
    metaTitle: "How Much Does Medical SEO Cost in Florida? (2026)",
    metaDescription:
      "Real 2026 ranges for medical SEO in Florida: monthly retainers, one-time projects, and what each tier actually buys. Call Primara at (561) 291-2681.",
    answer:
      "Medical SEO in Florida usually costs between one thousand five hundred and six thousand dollars a month on retainer, or eight thousand to twenty-five thousand dollars for a one-time project. What moves the number is competition in your city, how many locations you have, and whether the work includes content and review generation or only the Google Business Profile.",
    author: "Gio LaRoche",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 7,
    sections: [
      {
        type: "h2",
        text: "What the price actually covers",
      },
      {
        type: "p",
        text: "Medical SEO is not one product. When an agency quotes a monthly number, that number is paying for some combination of five distinct jobs, and the quotes you are comparing very likely do not include the same five. Before comparing prices, make each agency tell you which of these they are doing, how often, and who does it.",
      },
      {
        type: "ul",
        items: [
          "Google Business Profile management — categories, services, attributes, photos, posts, and question-and-answer monitoring. This is the single highest-leverage item for a practice that depends on map pack visibility.",
          "On-site content — service pages, location pages, and answer-style pages that give Google a reason to rank you for something other than your practice name.",
          "Technical and local signals — site speed, schema markup, citation consistency across directories, and making sure the name, address, and phone number match everywhere.",
          "Review generation and response — the part most practices skip, and the part that most reliably moves map pack position.",
          "Reporting — a rank grid, call and form tracking, and a monthly read of what changed and why.",
        ],
      },
      {
        type: "h2",
        text: "Typical 2026 price ranges in Florida",
      },
      {
        type: "p",
        text: "These are the ranges we see quoted to independent practices across South Florida, Tampa, Orlando, and Jacksonville. They are market observations, not Primara's fee. Anything meaningfully below the entry tier is almost always automated directory submissions sold as SEO.",
      },
      {
        type: "table",
        headers: ["Tier", "What it usually includes"],
        rows: [
          [
            "$500–$1,200/mo",
            "Profile housekeeping only. Occasional posts, a citation cleanup, a report. Rarely enough to move a competitive city.",
          ],
          [
            "$1,500–$3,000/mo",
            "Managed Google Business Profile, two to four content pages a month, review requests, basic rank reporting. The realistic entry point for a single-location practice in a mid-competition market.",
          ],
          [
            "$3,000–$6,000/mo",
            "Everything above plus a real content program, technical work on the site, structured data, conversion tracking, and a rank grid across the service area. What competing in Miami, Fort Lauderdale, or Tampa generally requires.",
          ],
          [
            "$8,000–$25,000 one-time",
            "A project build: new site or rebuild, full schema, location pages, GBP overhaul. Usually paired with a smaller ongoing retainer afterwards.",
          ],
          [
            "$150–$300/hr",
            "Consulting or audit-only work, where your team does the implementation.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Why the same work costs more in Miami than in Port St. Lucie",
      },
      {
        type: "p",
        text: "Local search is a relative game. You are not trying to hit an absolute quality bar; you are trying to be better than the three practices currently holding the map pack in your ZIP code. In Port St. Lucie that might mean a claimed profile, forty reviews, and eight decent pages. In Brickell or Coral Gables the incumbents may have six hundred reviews, a hospital system behind them, and a decade of content. The work required to pass them is several times larger, so the price is too.",
      },
      {
        type: "p",
        text: "Multi-location practices scale the same way. Each location needs its own profile, its own page, its own review flow, and its own reporting. Three locations is not three times the work, but it is not the same work as one either — budget roughly sixty to seventy percent more per additional location.",
      },
      {
        type: "h2",
        text: "Retainer or project: which one fits",
      },
      {
        type: "p",
        text: "Take the project if your site is genuinely broken, you have in-house help to keep things moving afterwards, and your market is not crowded. Take the retainer if map pack position is where your patients come from, because rankings decay. Reviews age, competitors post, Google changes how it weighs categories. A build with nobody maintaining it slides back within a few quarters.",
      },
      {
        type: "h2",
        text: "How to judge whether the price is worth it",
      },
      {
        type: "p",
        text: "Work the math backwards from one patient. Take your average new-patient value over the first twelve months, multiply by your close rate on inbound calls, and ask how many additional new patients per month the engagement has to produce to pay for itself. For most primary care, mental health, and men's health practices in Florida the answer is between one and three. If an agency cannot tell you what number they are aiming at, that is the problem, not the price.",
      },
      {
        type: "callout",
        text: "The number we hold ourselves to: one new private-pay patient per month should cover the entire engagement. If the math does not work for your market, we say so before you commit.",
      },
      {
        type: "h2",
        text: "Red flags in a medical SEO quote",
      },
      {
        type: "ul",
        items: [
          "A guaranteed number-one ranking. Google's own guidance is explicit that no one can guarantee ranking, and a promise like that usually means paid placement or nothing at all.",
          "A long contract with no exit. A three-month runway is fair because that is how long profile and review changes take to register. A twelve-month lock is not.",
          "No access to your own assets. You should own the Google Business Profile, the domain, the analytics property, and the ad accounts. Always.",
          "Reporting that shows traffic but never calls, forms, or booked appointments.",
          "Review gating — asking happy patients for a review and routing unhappy ones to a private form. The Federal Trade Commission's rule on consumer reviews treats that as a deceptive practice.",
        ],
      },
      {
        type: "h2",
        text: "What we do instead of publishing a flat rate",
      },
      {
        type: "p",
        text: "Primara quotes after an audit, because scope is the price. The audit shows the competitor set in your actual ZIP code, the review gap, the profile configuration, and what has to be true for you to enter the top three. Then there is a number. You can see how we think about that on our pricing page, and the audit itself is free.",
      },
    ],
    faqs: [
      {
        q: "How much does medical SEO cost per month in Florida?",
        a: "Most independent Florida practices pay between fifteen hundred and six thousand dollars a month. Single-location practices in mid-competition cities sit near the bottom of that band; multi-location practices, or anyone competing in Miami, Fort Lauderdale, or Tampa, sit near the top. Below about a thousand a month you are usually buying automated directory work, not SEO.",
      },
      {
        q: "How long before medical SEO pays for itself?",
        a: "Google Business Profile changes and review velocity typically show movement in thirty to sixty days. Content and authority work takes four to six months. Plan on three months before the first meaningful rank report and six to nine months before the engagement is clearly paying for itself in booked patients.",
      },
      {
        q: "Is medical SEO cheaper than Google Ads?",
        a: "Over a year, usually yes. Ads stop producing the day you stop paying, and healthcare clicks in Florida commonly run eight to thirty dollars. SEO costs more up front relative to results but the asset persists. Most practices we work with run both, with ads carrying demand while the organic work matures.",
      },
      {
        q: "Should I hire an in-house marketer instead?",
        a: "A full-time marketing coordinator in Florida costs roughly forty-eight to sixty-five thousand dollars a year before benefits, tools, and training, and you get generalist skills rather than healthcare local search specifically. For a single-location practice, an agency retainer is usually the better output per dollar. Above five locations, an in-house hire starts to make sense.",
      },
      {
        q: "What should never be included in the price?",
        a: "Buying reviews, gating reviews, creating duplicate Google Business Profiles, or any promise of guaranteed rankings. All three review practices can get a profile suspended, and the FTC's consumer review rule treats paid and gated reviews as deceptive. Walk away from any quote that includes them.",
      },
    ],
    citations: [
      {
        publisher: "Google",
        label: "Improve your local ranking on Google",
        href: "https://support.google.com/business/answer/7091",
      },
      {
        publisher: "Google Search Central",
        label: "How to choose an SEO",
        href: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
    ],
    links: [
      {
        href: "/services/local-seo-for-medical-practices",
        label: "Local SEO for Medical Practices",
        description: "The service this page is describing — what we actually do each month.",
      },
      {
        href: "/locations/medical-seo-west-palm-beach",
        label: "Medical SEO in West Palm Beach",
        description: "Competitor set, review benchmarks, and map pack reality for Palm Beach County.",
      },
      {
        href: "/locations/medical-seo-florida",
        label: "Medical SEO in Florida",
        description: "Statewide view — how pricing shifts between metro and secondary markets.",
      },
      {
        href: "/guides/therapist-marketing-pricing",
        label: "Therapist Marketing Pricing",
        description: "The same cost question for a solo or group mental health practice.",
      },
      {
        href: "/guides/medical-practice-website-cost",
        label: "What a Medical Practice Website Costs",
        description: "One-time build pricing and what actually drives it.",
      },
          {
        href: "/guides/get-a-medical-practice-into-ai-search-answers",
        label: "How to get a medical practice into AI search answers",
        description:
          "What makes ChatGPT, Perplexity and AI Overviews name a practice — entities, schema and citations.",
      },
      {
        href: "/guides/google-ads-cost-for-a-medical-practice",
        label: "Google Ads Cost for a Medical Practice",
        description: "The paid-media side of this same budgeting question.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "therapist-marketing-pricing",
    keyword: "therapist marketing pricing",
    category: "Pricing",
    title: "Therapist Marketing Pricing: What Private Practices Pay",
    metaTitle: "Therapist Marketing Pricing: What Practices Pay | Primara",
    metaDescription:
      "What solo therapists and group practices in Florida pay for marketing in 2026 — directories, SEO, ads, and what each one returns. (561) 291-2681.",
    answer:
      "A solo therapist in Florida typically spends three hundred to fifteen hundred dollars a month on marketing, and a group practice spends two thousand to five thousand. The cheapest option is a directory listing at roughly thirty dollars a month; the most durable is local SEO and a Google Business Profile, which costs more but keeps producing after you stop paying.",
    author: "Liam Costello",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 7,
    sections: [
      {
        type: "h2",
        text: "The four things therapists actually spend on",
      },
      {
        type: "table",
        headers: ["Channel", "Typical monthly cost and what you get"],
        rows: [
          [
            "Directory listing",
            "$30–$60 per clinician. Steady but shrinking referral volume, zero ownership, and you are listed next to every competitor in your ZIP code. Fine as a floor, poor as a strategy.",
          ],
          [
            "Google Business Profile + local SEO",
            "$800–$2,500 for a solo practice, $2,500–$5,000 for a group. Builds an asset you own. This is where 'therapist near me' searches land.",
          ],
          [
            "Google Ads",
            "$600–$3,000 in media plus management. Clicks for therapy terms in Florida commonly run six to twenty-five dollars. Immediate, but it stops the day the card stops.",
          ],
          [
            "Website build",
            "$2,500–$12,000 one-time for a real site with service pages, scheduling, and schema. A template site from a practice-management vendor is cheaper and ranks accordingly.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Why a directory is not a marketing plan",
      },
      {
        type: "p",
        text: "Directory listings work the way a phone book worked. You pay for placement in a list you do not control, next to everyone you compete with, and the moment you stop paying you disappear. They are worth keeping as a source of matched-insurance referrals. They are not worth being your only channel, because the practices that grow past full caseload are the ones that own the search result instead of renting a spot inside someone else's.",
      },
      {
        type: "p",
        text: "The alternative is not more expensive than people assume. A claimed, correctly categorized Google Business Profile with a steady trickle of reviews will out-produce a directory listing in most Florida cities within a year, and it costs nothing but the work.",
      },
      {
        type: "h2",
        text: "Solo practice versus group practice",
      },
      {
        type: "p",
        text: "A solo therapist has one problem: fill a caseload of roughly twenty to twenty-five clients and keep it filled. That is a small number, which means a small, cheap, well-aimed effort is usually enough. Claim the profile, publish six honest pages about the modalities you actually practice, collect reviews from clients who volunteer, and answer the phone. Eight hundred to fifteen hundred a month of managed work is a reasonable ceiling.",
      },
      {
        type: "p",
        text: "A group practice has a different problem: every new clinician needs a pipeline from day one or they leave. That means per-clinician pages, per-modality pages, intake capacity that can absorb the volume, and usually paid search to smooth the gaps. Two thousand five hundred to five thousand a month is the normal band, and the number that matters is cost per booked intake, not cost per click.",
      },
      {
        type: "h2",
        text: "What the money should buy in month one",
      },
      {
        type: "ol",
        items: [
          "A claimed and verified Google Business Profile with the correct primary category — usually Psychotherapist, Psychologist, Mental Health Clinic, or Counselor depending on license — and every applicable secondary category filled.",
          "Service pages for the modalities you genuinely practice, written in plain language. One page per modality, not one page listing twelve.",
          "A review request flow that asks every client who finishes, with no filtering by how happy they seem.",
          "Call and form tracking so you can tell which channel produced which intake.",
          "A page that answers insurance, sliding scale, telehealth, and waitlist questions, because those are the questions that decide whether someone calls.",
        ],
      },
      {
        type: "h2",
        text: "What to spend nothing on",
      },
      {
        type: "ul",
        items: [
          "Buying reviews or offering anything of value in exchange for one. The FTC's consumer review rule makes this a legal problem, not just a policy one.",
          "Screening clients before asking for a review. Review gating violates Google's policy and the same FTC rule.",
          "Naming or describing an identifiable client in marketing copy, even anonymized in a way a reader could reconstruct. HIPAA applies to your website the same way it applies to your files.",
          "Social media posting as a primary acquisition channel. It supports trust; it rarely fills a caseload.",
          "Outcome claims. 'Evidence-based treatment for anxiety' is fine. 'We cure anxiety' is not.",
        ],
      },
      {
        type: "h2",
        text: "A realistic first-year budget",
      },
      {
        type: "p",
        text: "For a solo therapist in a Florida metro: roughly three thousand for a website that is actually yours, then eight hundred to twelve hundred a month for profile and content work, and a directory listing kept as a backstop. That is around fifteen thousand in year one. At an average client value of well over a thousand dollars across an episode of care, the channel breaks even on a single steady client and everything after that is margin.",
      },
    ],
    faqs: [
      {
        q: "How much should a solo therapist spend on marketing per month?",
        a: "Between three hundred and fifteen hundred dollars, depending on whether you are doing the work or paying someone. A solo caseload is small enough that a claimed Google Business Profile, six honest service pages, and a steady review habit will usually fill it without paid media.",
      },
      {
        q: "Is Psychology Today worth it for a Florida therapist?",
        a: "As a floor, yes — it is inexpensive and produces matched referrals. As your only channel, no. You are renting placement in a list of competitors and own nothing at the end. Keep it, and build a profile and site alongside it.",
      },
      {
        q: "What does therapist SEO cost for a group practice?",
        a: "Two thousand five hundred to five thousand dollars a month is the normal band in Florida, because a group needs per-clinician and per-modality pages, multi-location profile management if you have more than one office, and enough content velocity to keep new hires busy.",
      },
      {
        q: "Can I ask clients for Google reviews as a therapist?",
        a: "You can ask, as long as you ask everyone, offer nothing in exchange, and never disclose who is a client. Do not screen for sentiment first. Many therapists prefer to add the request to discharge paperwork rather than raise it in session.",
      },
      {
        q: "How long until marketing fills a caseload?",
        a: "Profile and review work typically shows in thirty to sixty days. Content-driven ranking takes four to six months. Ads produce calls in days but stop when the budget stops. Most solo practices we see reach a full caseload within two to three quarters of consistent work.",
      },
    ],
    citations: [
      {
        publisher: "Google",
        label: "Prohibited and restricted content for Business Profiles",
        href: "https://support.google.com/contributionpolicy/answer/7400114",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
      {
        publisher: "U.S. Dept. of Health & Human Services",
        label: "HIPAA Privacy Rule — marketing and uses of PHI",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
      },
    ],
    links: [
      {
        href: "/mental-health",
        label: "Mental Health Practice Marketing",
        description: "What we build for therapists, psychologists, and group practices.",
      },
      {
        href: "/locations/west-palm-beach-therapist-marketing",
        label: "Therapist Marketing in West Palm Beach",
        description: "Local competitor and review benchmarks for Palm Beach County.",
      },
      {
        href: "/locations/miami-therapist-marketing",
        label: "Therapist Marketing in Miami",
        description: "What it takes to rank for therapy searches in a crowded metro.",
      },
      {
        href: "/guides/seo-vs-google-ads-for-a-therapy-practice",
        label: "SEO vs Google Ads for a Therapy Practice",
        description: "Which channel to fund first when the budget only covers one.",
      },
      {
        href: "/guides/how-much-does-medical-seo-cost",
        label: "How Much Does Medical SEO Cost",
        description: "The same pricing question across all medical verticals.",
      },
          {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description:
          "A reply template that never confirms anyone was a patient, plus when a review can be removed.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "seo-vs-google-ads-for-a-therapy-practice",
    keyword: "SEO vs Google Ads for a therapy practice",
    category: "Comparison",
    title: "SEO vs Google Ads for a Therapy Practice",
    metaTitle: "SEO vs Google Ads for a Therapy Practice | Primara",
    metaDescription:
      "Which fills a caseload faster, and which costs less over a year. A straight comparison for Florida therapy practices. Call (561) 291-2681.",
    answer:
      "Google Ads fills a caseload faster and local SEO costs less over time. If you need clients this month and can spend at least one thousand dollars in media, start with ads. If you can wait four to six months and want the channel to keep working after you stop paying, start with local SEO and a Google Business Profile.",
    author: "Gio LaRoche",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 6,
    sections: [
      {
        type: "h2",
        text: "The comparison in one table",
      },
      {
        type: "table",
        headers: ["Factor", "How the two compare"],
        rows: [
          ["Time to first client", "Ads: days. SEO: sixty days for profile-driven calls, four to six months for content."],
          ["Monthly cost in Florida", "Ads: $600–$3,000 media plus management. SEO: $800–$5,000 depending on practice size."],
          ["Cost per intake", "Ads: commonly $80–$250 for therapy terms. SEO: falls over time, often under $50 once ranking."],
          ["What happens when you stop", "Ads: calls stop the same day. SEO: rankings decay over quarters, not days."],
          ["Who it reaches", "Ads: people searching right now. SEO: the same people, plus everyone comparing later."],
          ["Control", "Ads: precise — budget, geography, hours, keyword. SEO: indirect, you influence rather than set."],
        ],
      },
      {
        type: "h2",
        text: "Why ads are harder for therapy than for other services",
      },
      {
        type: "p",
        text: "Mental health falls under Google's personalized advertising restrictions, which limit how you may target people based on inferred health status. In practice this means you cannot build an audience of people Google thinks are depressed, and you cannot use remarketing that implies you know something about a visitor's condition. You can still bid on what people type — 'anxiety therapist near me' — you just cannot profile them.",
      },
      {
        type: "p",
        text: "The second complication is tracking. Sending an ad platform data that ties a specific person to a specific health interest is exactly the kind of disclosure that health privacy rules exist to prevent. That shapes how conversion tracking has to be built, which is a real cost line and the thing most agencies get wrong.",
      },
      {
        type: "h2",
        text: "Why SEO is unusually effective for therapy practices",
      },
      {
        type: "p",
        text: "Therapy searches are specific. People do not search for 'therapy.' They search for 'EMDR therapist Fort Lauderdale,' 'couples counseling that takes Aetna,' 'postpartum anxiety therapist near me.' Each of those is a page you can write honestly and rank for, because most practices have not written it. The competitive field is thin in a way that it is not for, say, cosmetic dentistry.",
      },
      {
        type: "p",
        text: "The Google Business Profile compounds this. For any search with local intent, Google shows a three-result map pack above everything else. Getting into it is largely a function of correct categories, proximity, and review velocity — all three of which are work, not spend.",
      },
      {
        type: "h2",
        text: "How to decide, in three questions",
      },
      {
        type: "ol",
        items: [
          "Do you need clients within thirty days? If yes, ads. Nothing else moves that fast.",
          "Can you sustain at least a thousand dollars a month in media for three months? Ads below that in a Florida metro rarely gather enough data to optimize, and you end up paying for a learning phase you never finish.",
          "Will you still be in this practice in two years? If yes, fund SEO regardless of what you do about ads, because it is the only one of the two that accrues.",
        ],
      },
      {
        type: "h2",
        text: "The sequence we actually recommend",
      },
      {
        type: "p",
        text: "Most therapy practices should not choose. The workable order is: fix the Google Business Profile first because it is free and it is the highest-leverage hour you will spend; publish the six to ten pages that describe what you really treat; then, if the caseload still has gaps, run a tightly geo-fenced ad campaign on your highest-intent terms while the organic work matures. Twelve months in, the ads become optional rather than load-bearing.",
      },
      {
        type: "callout",
        text: "If your budget only covers one channel and you can survive a slow quarter, choose the Google Business Profile and local SEO. It is the only spend that is still working for you next year.",
      },
      {
        type: "h2",
        text: "What both channels need to work at all",
      },
      {
        type: "ul",
        items: [
          "Somebody who answers the phone during business hours. Both channels fail at the same place, and it is the phone.",
          "A booking path that takes under a minute — online scheduling, or a form with four fields.",
          "Call and form tracking that distinguishes ads from organic, without shipping health information to an ad platform.",
          "Pages that answer insurance, fee, telehealth, and availability before the visitor has to ask.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is cheaper for a therapy practice, SEO or Google Ads?",
        a: "Over a twelve-month horizon, SEO. Ads cost roughly eighty to two hundred fifty dollars per booked intake for therapy terms in Florida and that cost does not fall much. SEO costs more than it returns for the first four to six months and then keeps producing at a declining effective cost per intake.",
      },
      {
        q: "Can therapists run Google Ads legally?",
        a: "Yes. You may bid on what people search. What you may not do is target or remarket to people based on inferred mental health status — Google's personalized advertising policy restricts that — and you should not send anything that links an individual to a health interest into an ad platform.",
      },
      {
        q: "How much should a therapy practice budget for Google Ads?",
        a: "At least a thousand dollars a month in media for a Florida metro, plus management. Below that, campaigns rarely collect enough conversion data to optimize and you pay a premium for every click without ever exiting the learning phase.",
      },
      {
        q: "How long does SEO take for a therapy practice?",
        a: "Google Business Profile work typically produces calls within thirty to sixty days. Content-driven rankings for modality and insurance searches take four to six months. A full caseload from organic alone is usually a two-to-three-quarter project.",
      },
      {
        q: "Can I run both at once on a small budget?",
        a: "Yes, and it is usually right. Put the free and cheap work first — profile, categories, reviews, core pages — then add a narrow ad campaign on two or three highest-intent terms inside a ten-mile radius. Narrow beats broad at small budgets every time.",
      },
    ],
    citations: [
      {
        publisher: "Google Ads",
        label: "Personalized advertising policy — health in personalized advertising",
        href: "https://support.google.com/adspolicy/answer/143465",
      },
      {
        publisher: "Google",
        label: "Improve your local ranking on Google",
        href: "https://support.google.com/business/answer/7091",
      },
      {
        publisher: "U.S. Dept. of Health & Human Services, OCR",
        label: "Use of online tracking technologies by HIPAA covered entities",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      },
    ],
    links: [
      {
        href: "/services/google-ads",
        label: "Google Ads for Medical Practices",
        description: "How we structure and track healthcare search campaigns.",
      },
      {
        href: "/locations/miami-therapist-marketing",
        label: "Therapist Marketing in Miami",
        description: "Where paid usually has to carry the first quarter.",
      },
      {
        href: "/locations/tampa-therapist-marketing",
        label: "Therapist Marketing in Tampa",
        description: "A market where organic still gets there without heavy media.",
      },
      {
        href: "/guides/hipaa-safe-tracking-for-a-medical-website",
        label: "HIPAA-Safe Tracking for a Medical Website",
        description: "How to measure both channels without leaking health data.",
      },
      {
        href: "/guides/therapist-marketing-pricing",
        label: "Therapist Marketing Pricing",
        description: "What each channel actually costs a Florida practice.",
      },
          {
        href: "/guides/get-a-medical-practice-into-ai-search-answers",
        label: "How to get a medical practice into AI search answers",
        description:
          "What makes ChatGPT, Perplexity and AI Overviews name a practice — entities, schema and citations.",
      },
      {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description:
          "A reply template that never confirms anyone was a patient, plus when a review can be removed.",
      },
      {
        href: "/guides/google-ads-cost-for-a-medical-practice",
        label: "Google Ads Cost for a Medical Practice",
        description: "A closer look at the paid-media cost side of this same decision.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "medical-practice-website-cost",
    keyword: "how much does a medical practice website cost",
    category: "Pricing",
    title: "How Much Does a Medical Practice Website Cost?",
    metaTitle: "How Much Does a Medical Practice Website Cost? | Primara",
    metaDescription:
      "2026 pricing for a medical practice website — template, custom, and multi-location — and what actually drives the number. (561) 291-2681.",
    answer:
      "A medical practice website costs about two thousand to five thousand dollars on a template, eight thousand to twenty-five thousand custom, and twenty-five thousand or more for a multi-location or multi-provider build. Hosting and maintenance add roughly fifty to five hundred dollars a month. Content volume and integrations drive the number far more than design does.",
    author: "Gio LaRoche",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 6,
    sections: [
      {
        type: "h2",
        text: "What each tier buys",
      },
      {
        type: "table",
        headers: ["Build type", "Cost and what you get"],
        rows: [
          [
            "Practice-management template",
            "$0–$300/mo bundled with your PM or EHR vendor. Fast, and you own nothing. Shared code, shared templates, and usually no ability to add schema or real service pages.",
          ],
          [
            "Template build ($2,000–$5,000)",
            "A theme configured for you. Ten to fifteen pages, a contact form, mobile-responsive. Fine for a new solo practice that needs to exist online this month.",
          ],
          [
            "Custom build ($8,000–$25,000)",
            "Built around your services and your search targets: one page per service, location pages, structured data, fast load, accessible markup, tracking wired end to end.",
          ],
          [
            "Multi-location / multi-provider ($25,000+)",
            "Provider directory, per-location pages and profiles, scheduling integration, and a content system your staff can actually use.",
          ],
          [
            "Ongoing ($50–$500/mo)",
            "Hosting, SSL, platform and plugin updates, backups, accessibility fixes, and content changes.",
          ],
        ],
      },
      {
        type: "h2",
        text: "The four things that actually move the price",
      },
      {
        type: "ol",
        items: [
          "Page count. A twelve-page site and a sixty-page site are different projects. Every service you want to rank for is a page somebody has to write, and writing is the largest line item on most healthcare builds.",
          "Integrations. Online scheduling, patient portal links, insurance verification, and an EHR handoff each add real hours and real testing.",
          "Compliance work. Accessibility remediation, a privacy policy that matches what your site actually collects, cookie consent if you use anything beyond first-party analytics, and tracking configured so it does not send health information anywhere it should not go.",
          "Content. Whether you are supplying copy or paying for it. Expect three hundred to eight hundred dollars per professionally written service page in the healthcare space.",
        ],
      },
      {
        type: "h2",
        text: "Where practices waste money",
      },
      {
        type: "p",
        text: "The most common waste is a beautiful site with eight pages. Design does not rank. A site cannot appear for 'hormone therapy Boca Raton' if there is no page about hormone therapy, no matter how good the homepage looks. The second most common is a vendor-locked template that cannot accept structured data or custom page templates, which caps what any future SEO work can achieve and usually forces a rebuild within two years.",
      },
      {
        type: "p",
        text: "The third is paying for a redesign when the problem is content. If your site loads fast, works on a phone, and converts the visitors it gets, a redesign will not increase patient volume. More pages and better local signals will.",
      },
      {
        type: "h2",
        text: "What a medical site has to do that a normal site does not",
      },
      {
        type: "ul",
        items: [
          "Carry accurate, consistent name, address, and phone details that match the Google Business Profile exactly — a mismatch suppresses local ranking.",
          "Use MedicalBusiness or the applicable schema type, plus per-service and FAQ markup, so search engines and AI assistants can read what you treat.",
          "Meet accessibility expectations. The Department of Justice has been explicit that ADA obligations extend to the web, and healthcare sites are a frequent target of demand letters.",
          "Handle tracking carefully. Analytics and ad pixels on pages about specific conditions can disclose health information — OCR has published guidance on exactly this.",
          "Load fast on a phone on cellular. Most patient searches in Florida happen on mobile, and load time correlates directly with call volume.",
        ],
      },
      {
        type: "h2",
        text: "How to scope a build so it does not need redoing",
      },
      {
        type: "p",
        text: "Start from the searches you want to win, not from a sitemap template. List the twelve to twenty things patients type that you can honestly serve, and make each one a page. Then add the location pages for the cities you actually draw from. Then design. Scoped that way, a custom build in the ten-to-fifteen-thousand range covers most single-location practices and does not need to be redone when you add a service line.",
      },
      {
        type: "callout",
        text: "One rule that saves more money than any other: own the domain, the hosting account, the analytics property, and the source files. If a vendor will not hand those over, the price is not what they quoted.",
      },
    ],
    faqs: [
      {
        q: "Is a free website from my EHR vendor good enough?",
        a: "For existing patients looking up your hours, yes. For attracting new ones, rarely. Bundled templates usually share code across hundreds of practices, cannot accept custom service pages or structured data, and cannot be moved if you switch vendors. Treat it as a placeholder, not a strategy.",
      },
      {
        q: "How long does a medical practice website take to build?",
        a: "A template build takes two to four weeks. A custom single-location site takes six to ten weeks, most of which is content. Multi-location builds run three to five months. Content is almost always the critical path, so drafting it early is the single best way to shorten the project.",
      },
      {
        q: "Do I need to pay monthly for a website?",
        a: "You need hosting, SSL, and updates, which is fifty to a few hundred dollars a month. You do not need a monthly fee that bundles the site itself — that is a lease, and at the end of five years you own nothing.",
      },
      {
        q: "Will a new website improve my Google ranking?",
        a: "Only if it adds pages, speed, and structure the old one lacked. A visual redesign on the same twelve pages typically changes nothing. Ranking follows content depth and local signals far more than it follows design.",
      },
      {
        q: "What does accessibility remediation cost?",
        a: "Building accessibly from the start adds little. Fixing an existing site typically costs one thousand five hundred to six thousand dollars depending on size and how it was built. It is cheaper than the alternative, and healthcare sites receive a disproportionate share of ADA demand letters.",
      },
    ],
    citations: [
      {
        publisher: "Google Search Central",
        label: "Structured data general guidelines",
        href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      },
      {
        publisher: "U.S. Department of Justice",
        label: "Guidance on web accessibility and the ADA",
        href: "https://www.ada.gov/resources/web-guidance/",
      },
      {
        publisher: "U.S. Dept. of Health & Human Services, OCR",
        label: "Use of online tracking technologies by HIPAA covered entities",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      },
    ],
    links: [
      {
        href: "/services/medical-practice-website-design",
        label: "Medical Practice Website Design",
        description: "How we scope and build practice sites around search intent.",
      },
      {
        href: "/locations/medical-website-design-west-palm-beach",
        label: "Medical Website Design in West Palm Beach",
        description: "Local builds, local competitor context.",
      },
      {
        href: "/locations/medical-website-design-florida",
        label: "Medical Website Design in Florida",
        description: "Statewide view of what practice sites need to compete.",
      },
      {
        href: "/guides/hipaa-safe-tracking-for-a-medical-website",
        label: "HIPAA-Safe Tracking for a Medical Website",
        description: "The compliance work every build has to include.",
      },
      {
        href: "/guides/how-much-does-medical-seo-cost",
        label: "How Much Does Medical SEO Cost",
        description: "What the ongoing work costs after the site ships.",
      },
          {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description:
          "If the listing is gone from Maps, this is the reinstatement process step by step.",
      },
    ],
  },
];
