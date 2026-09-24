// ── Primara Guides — batch 3, 2026-09-24 ────────────────────────────────────
// Two AEO/how-to guides, built to ~/Primara-Clients/PAGE-STANDARD.md.
// Content rows 446 ("how to pick a healthcare marketing agency") and 448
// ("how to write a doctor bio page that ranks"). No location pages — that
// is a standing rule for this client (guides/AEO only).

import type { Guide } from "@/lib/guides";

export const guidesPartSix: Guide[] = [
  {
    slug: "how-to-pick-a-healthcare-marketing-agency",
    keyword: "how to pick a healthcare marketing agency",
    category: "How-to",
    title: "How to Pick a Healthcare Marketing Agency",
    metaTitle: "How to Pick a Healthcare Marketing Agency (2026)",
    metaDescription:
      "The five questions that actually separate a good healthcare marketing agency from a bad one. Call Primara at (561) 291-2681.",
    answer:
      "Pick a healthcare marketing agency by checking three things before price: do they show you real, verifiable results from other medical or dental practices (not generic case studies), do they understand HIPAA-safe tracking, and will they tell you exactly what they measure and how often. If an agency can't answer those three plainly, keep looking.",
    author: "Gio LaRoche",
    publishDate: "2026-09-24T09:00:00Z",
    dateModified: "2026-09-24",
    readMinutes: 7,
    sections: [
      { type: "h2", text: "Most practices pick an agency backwards" },
      {
        type: "p",
        text: "The usual process is: get three quotes, pick the cheapest one that seems competent on a sales call, sign a 12-month contract, find out six months in that nothing is actually being measured. That order is backwards. Price should be the last filter, not the first — a cheap agency that can't prove a single result costs more than an expensive one that can, because the practice pays for a year of marketing spend with no way to know if it worked.",
      },
      { type: "h2", text: "The five questions to ask before signing anything" },
      {
        type: "ol",
        items: [
          "Can you show me a specific result from another medical or dental practice — a real number, not a vague testimonial? A legitimate agency has this ready. One that hesitates or pivots to \"every practice is different\" is telling you something.",
          "How do you track a phone call or a form submission back to a specific channel? If the answer doesn't mention call tracking numbers, a conversion event in GA4, or something equivalent, they are not actually measuring anything — they are guessing.",
          "Do you understand HIPAA as it applies to advertising and analytics? Sending patient identifiers to Google or Meta ad platforms is a real compliance risk, and an agency that has never heard of this shouldn't be near a medical practice's ad account.",
          "What exactly do I get in month one versus month six? SEO and content take months to show up in rankings — an agency promising results in three weeks is either lying or planning to run only paid ads and calling it SEO.",
          "Who actually does the work — is it the person on this sales call, or does it get handed to a subcontractor or an offshore team the moment the contract is signed?",
        ],
      },
      { type: "h2", text: "Red flags that show up on the first call" },
      {
        type: "ul",
        items: [
          "Guaranteed rankings or guaranteed patient numbers — nobody controls Google's algorithm or a market's demand closely enough to guarantee either.",
          "A contract with no month-to-month exit option after the first term — a confident agency doesn't need to lock a practice in to keep the business.",
          "Reporting that only shows vanity metrics (impressions, followers, \"engagement\") with no line connecting the work to actual calls or booked patients.",
          "No mention of what happens to the website, content, or ad accounts if the practice leaves — some agencies build on platforms the practice doesn't own or control.",
        ],
      },
      { type: "h2", text: "In-house, agency, or a mix — which is actually right" },
      {
        type: "p",
        text: "A solo practice or small group almost never has the volume of work to justify a full-time marketing hire, so an agency is usually the more efficient option early on. Larger multi-location groups sometimes reach a size where a hybrid makes sense — an in-house person who manages the patient experience and reviews day-to-day, with an agency handling SEO, content, and paid media that need specialized, ongoing technical work. There's no universal answer; the deciding factor is whether the practice has enough marketing work to keep a full-time hire genuinely busy.",
      },
      {
        type: "table",
        headers: ["Situation", "Usually the better fit"],
        rows: [
          ["Single location, under 5 providers", "Agency — not enough volume to justify a full-time hire"],
          ["Multi-location group, active growth plan", "Hybrid — in-house for patient experience, agency for technical SEO/ads"],
          ["Large health system with a marketing department already", "In-house core team, agency for specialized overflow (technical SEO, paid media audits)"],
        ],
      },
      {
        type: "callout",
        text: "The single fastest filter: ask for one real number from one real practice. An agency that can't produce that in the first conversation isn't ready to be trusted with a medical practice's marketing budget.",
      },
      { type: "h2", text: "What a fair engagement actually looks like" },
      {
        type: "p",
        text: "A reasonable healthcare marketing engagement starts with an audit of the current site, listing, and tracking setup before any work begins — not a generic proposal built without ever looking at the practice's actual numbers. It includes a plain-language explanation of what gets measured and how often the practice will see those numbers, not just a monthly PDF of screenshots. And it should be cancelable on reasonable notice, because a contract that only works if the practice can't leave is a contract built around the wrong incentive.",
      },
    ],
    faqs: [
      { q: "How much should a healthcare marketing agency cost?", a: "It varies widely by scope, but for a single-location practice, ongoing SEO and content typically runs $1,500–$4,000/month, with paid ad management usually billed separately from ad spend. Anyone quoting far below that range for genuine, ongoing work is usually cutting corners somewhere." },
      { q: "Should I sign a 12-month contract with a marketing agency?", a: "Be cautious of any contract that locks in 12 months with no early exit — SEO and content work does take months to show results, but a confident agency will offer month-to-month terms after an initial 90-day setup period, not a full year with no way out." },
      { q: "What's the difference between a general marketing agency and a healthcare-specific one?", a: "A healthcare-specific agency understands HIPAA implications for tracking and advertising, knows how Google Business Profile categories and reviews work for medical listings specifically, and has actually dealt with the slower, more relationship-driven patient decision cycle — a general agency often has none of that context." },
      { q: "How do I know if an agency is actually doing the work versus just billing?", a: "Ask for specifics tied to dates — what pages were published, what changed on the Google Business Profile, what the tracking numbers showed that month. Vague monthly updates with no specific, dated actions are the clearest sign nothing concrete happened." },
      { q: "Can one agency handle both SEO and Google Business Profile management?", a: "Yes, and it's usually more efficient than splitting the two — SEO and Google Business Profile performance are closely linked for local medical practices, and having one team manage both means the strategy is coordinated instead of working at cross purposes." },
    ],
    citations: [
      { publisher: "FTC.gov", label: "Advertising and marketing basics for businesses", href: "https://www.ftc.gov/business-guidance/advertising-marketing" },
      { publisher: "HHS.gov", label: "HIPAA Privacy Rule and marketing", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html" },
      { publisher: "Google Search Central", label: "SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    links: [
      { href: "/guides/in-house-marketer-vs-agency-for-a-medical-practice", label: "In-House Marketer vs. Agency for a Medical Practice", description: "The staffing-vs-outsourcing question this guide's questions apply to directly." },
      { href: "/services/local-seo-for-medical-practices", label: "Local SEO for Medical Practices", description: "What a healthcare-specific agency should actually be able to show you results on." },
      { href: "/pricing", label: "Primara Pricing", description: "How we scope and price engagements — no locked-in annual contracts." },
      { href: "/the-audit", label: "The Free Audit", description: "See what an audit-first engagement looks like before committing to anything." },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-write-a-doctor-bio-page-that-ranks",
    keyword: "how to write a doctor bio page that ranks",
    category: "How-to",
    title: "How to Write a Doctor Bio Page That Ranks",
    metaTitle: "How to Write a Doctor Bio Page That Ranks (2026)",
    metaDescription:
      "The structure and real credentials a physician bio page needs to rank and build trust. No invented credentials, ever. Call (561) 291-2681.",
    answer:
      "A doctor bio page that ranks leads with the provider's full name, exact credentials, and specialty in the first sentence, lists real education and board certifications a patient can verify, names the conditions or procedures they actually treat using the terms patients search for, and includes a real photo and direct way to book — never invented awards or exaggerated claims.",
    author: "Liam Costello",
    publishDate: "2026-09-24T09:00:00Z",
    dateModified: "2026-09-24",
    readMinutes: 6,
    sections: [
      { type: "h2", text: "Why most bio pages rank poorly" },
      {
        type: "p",
        text: "Most physician bio pages read like a résumé written in the third person: a list of degrees, a stock photo, maybe a paragraph about \"compassionate care.\" That tells Google very little about what the provider actually does, and it tells a patient almost nothing useful for deciding whether to book. A bio page ranks and converts when it answers the two questions a patient actually has: is this the right kind of doctor for my problem, and can I trust their credentials.",
      },
      { type: "h2", text: "The structure that works" },
      {
        type: "ol",
        items: [
          "Full name and exact title in the first line — \"Dr. Maria Chen, MD, Board-Certified Family Medicine\" — not just a name with credentials buried further down the page.",
          "One sentence naming the specific conditions or procedures they treat, using the phrasing patients actually search for, not internal medical jargon.",
          "Education and board certification, listed plainly and only where verifiable — medical school, residency, fellowship if applicable, and the specific board certification body.",
          "Years in practice and any hospital affiliations, stated as fact, not as a marketing claim.",
          "A short, specific note on approach or philosophy — one or two sentences, not a paragraph of platitudes that could apply to any provider anywhere.",
          "A real, current photo — stock photos of \"doctors\" are an immediate trust problem for a page whose entire purpose is building trust in a specific person.",
          "A direct next step — a phone number and/or booking link, not just a generic \"contact us\" pointing elsewhere.",
        ],
      },
      { type: "h2", text: "Never invent or exaggerate a credential" },
      {
        type: "p",
        text: "This is non-negotiable, not a style preference. Every credential, title, and certification listed on a bio page must be exactly accurate and something the provider actually holds — a physician assistant is \"PA-C,\" not implied to be a physician; a nurse practitioner's certification is stated exactly as licensed. Beyond the ethical and legal exposure, inflated or vague credentials are also a trust signal search engines and patients both notice — specificity reads as credible, vagueness reads as evasive.",
      },
      {
        type: "table",
        headers: ["Element", "Why it matters"],
        rows: [
          ["Physician schema markup", "Lets search engines and AI answer engines attach verified credentials directly to the provider entity"],
          ["Exact credential wording", "Prevents both a compliance problem and a trust signal that reads as vague or inflated"],
          ["Named conditions/procedures treated", "Connects the provider to the actual searches patients run, not just their specialty title"],
          ["Real photo", "Stock photography on a page meant to build individual trust undercuts its own purpose"],
        ],
      },
      { type: "h2", text: "Linking the bio page into the rest of the site" },
      {
        type: "p",
        text: "A bio page that sits disconnected from the rest of the site — reachable only from a generic \"Our Team\" grid — rarely ranks well on its own. Link to it directly from the specific service pages the provider is most associated with (\"Dr. Chen sees most of our diabetes management patients\" linking to her bio from the diabetes management page), and link back from the bio to those same service pages. That two-way link is what tells Google the provider and the service are connected, not just co-located on the same site.",
      },
      {
        type: "callout",
        text: "Quick test: could a patient read only the first two sentences of the bio and know whether this provider treats their specific problem? If the answer is no, the structure needs to change before anything else on the page.",
      },
      { type: "h2", text: "What to leave off entirely" },
      {
        type: "ul",
        items: [
          "Any outcome or success-rate claim (\"98% patient satisfaction,\" specific recovery statistics) that can't be independently verified — these read as marketing, not medical fact, and create real liability.",
          "Awards or recognitions the provider didn't actually receive, or ones from pay-to-play \"best doctor\" lists that carry no real vetting.",
          "Generic stock language (\"passionate about patient care,\" \"treats every patient like family\") that appears, unedited, on hundreds of other practice websites — it signals templated content to both patients and search engines.",
        ],
      },
    ],
    faqs: [
      { q: "How long should a doctor bio page be?", a: "700–1,000 words is usually enough for a complete bio — full credentials, specific conditions treated, a short approach statement, and a real next step. Longer than that tends to bury the useful information a patient actually came for." },
      { q: "Should a bio page include patient reviews?", a: "A small number of real, unedited reviews can help, but never gate or filter which reviews appear — review gating (only asking happy patients to post publicly) violates FTC guidance and most platforms' terms of service." },
      { q: "What schema markup does a doctor bio page need?", a: "Physician schema naming the exact credentials, specialties, and affiliations, plus BreadcrumbList so search engines understand where the page sits in the site. Add MedicalOrganization/affiliation markup when the provider is tied to a specific practice location." },
      { q: "Can a nurse practitioner or physician assistant have a bio page built the same way?", a: "Yes — the same structure applies, with credentials stated exactly as licensed (PA-C, APRN, FNP-C, etc.), never implied or upgraded to sound like a physician's title." },
      { q: "How often should a bio page be updated?", a: "Whenever anything factual changes — new certification, new hospital affiliation, a change in the conditions treated — and at minimum reviewed once a year even if nothing changed, since a stale-looking page can itself read as a trust signal in the wrong direction." },
    ],
    citations: [
      { publisher: "Google Search Central", label: "E-E-A-T and quality rater guidelines overview", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { publisher: "FTC.gov", label: "Guidance on endorsements and testimonials", href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" },
      { publisher: "Google Search Central", label: "Physician structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery" },
    ],
    links: [
      { href: "/guides/how-to-write-a-medical-service-page-that-ranks", label: "How to Write a Medical Service Page That Ranks", description: "The sibling structure guide for the service pages a bio page should link to and from." },
      { href: "/guides/get-a-medical-practice-into-ai-search-answers", label: "Get a Medical Practice into AI Search Answers", description: "Why exact, verifiable credentials matter even more for AI-generated answers." },
      { href: "/services/medical-website-design", label: "Medical Website Design", description: "Where provider bio pages get structured and built to this standard." },
      { href: "/pricing", label: "Primara Pricing", description: "How bio and service page builds are scoped into a website engagement." },
    ],
  },
];
