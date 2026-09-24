import type { Guide } from "@/lib/guides";

// ── Answer-engine guides (batch 2026-09-22) ────────────────────────────────
//
// Three intent pages aimed at questions practice owners type in a panic or in
// planning: a suspended listing, a bad review, and being named by AI search.
// Built to ~/Primara-Clients/PAGE-STANDARD.md. Not city-templated — geography
// is already covered by lib/locations-*.ts. Do not clone these with a city
// swap.
//
// Word budget: PAGE-STANDARD section 1 caps body copy at 1,200 words. These
// three were trimmed on 2026-09-22 from ~1,650/1,570/1,675 to land inside the
// band. The cuts removed duplication between the HowTo steps and the prose
// sections — the steps are the actionable core, the sections carry the
// reasoning, and neither should restate the other. Keep it that way when
// editing: if a point appears in a step, an FAQ and a paragraph, two of those
// are padding.
//
// Sources cited are Google's own documentation, HHS Office for Civil Rights,
// and the Federal Trade Commission. Never a competitor agency.

export const guidesPartThree: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "fix-a-suspended-google-business-profile",
    keyword: "how to fix a suspended Google Business Profile",
    category: "How-to",
    title: "How to Fix a Suspended Google Business Profile",
    metaTitle: "Fix a Suspended Google Business Profile | Primara",
    metaDescription:
      "Suspended medical listing? What triggers it, how reinstatement actually works, and what to do while you wait. Call (561) 291-2681.",
    answer:
      "A suspended Google Business Profile comes back by fixing whatever broke the guidelines first, then filing one reinstatement request with evidence the business is real and eligible at that address. Do not create a second listing while you wait. Most medical suspensions trace to an unstaffed address, a keyword-stuffed business name, or a risky recent edit.",
    author: "Gio LaRoche",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 6,
    howTo: {
      name: "How to get a suspended Google Business Profile reinstated",
      steps: [
        {
          name: "Confirm which kind of suspension you have",
          text: "A soft suspension leaves the listing visible but strips your ability to manage it. A hard suspension removes it from Search and Maps entirely. Sign in at business.google.com and read the banner. A hard suspension means you are invisible today.",
        },
        {
          name: "Stop editing and do not create a second listing",
          text: "Every edit during a suspension is another signal to review, and a duplicate listing is its own violation that splits your reviews permanently. Freeze the profile. If staff already made a second one, disclose it in the appeal.",
        },
        {
          name: "Find the actual violation",
          text: "Check the profile against Google's guidelines for representing your business, starting with the five causes below. Medical suspensions are almost always one of them.",
        },
        {
          name: "Fix it before you appeal, not after",
          text: "Reinstatement reviews the profile as it stands right now. Strip the name back to your signage. Correct the address to somewhere a patient can walk into during stated hours. Remove categories you cannot back up.",
        },
        {
          name: "Gather evidence a reviewer can verify in one minute",
          text: "A photo of exterior signage showing the business name, the suite door and building directory, a utility bill or lease in the business name at that address, and the state licence. Clear photographs, not scans of scans.",
        },
        {
          name: "File one reinstatement request and then stop",
          text: "Use the reinstatement form in Google's Business Profile Help. State the real-world name, the address, what was wrong and what you changed. Attach the evidence. A second request filed while the first is open restarts the queue.",
        },
        {
          name: "Protect the rest of your visibility while you wait",
          text: "Reinstatement commonly takes days, sometimes weeks. Your website carries local searches meanwhile, so check name, address, phone and service pages there, and track calls from the site separately so you can see what the outage cost.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "What suspension actually means" },
      {
        type: "p",
        text: "Google suspends a Business Profile when something about it stops matching what Google believes the real-world business is. It is almost always an automated system reacting to a change — a new address, a name edit, a category added — and deciding the listing cannot be trusted until a human confirms it. So an appeal is not an argument. It is evidence that a real practice operates at that address under that name.",
      },
      { type: "h2", text: "The five things that suspend medical listings" },
      {
        type: "ul",
        items: [
          "Keywords in the business name. The name field is for the name on your signage, nothing else. This is the most common cause we see.",
          "An address nobody staffs — a virtual office, a mailbox, or a suite empty four days a week. If a patient cannot walk in during your posted hours, it is not eligible.",
          "Practitioner listings stacked on the practice listing. A solo provider gets one listing, not two.",
          "Categories the practice cannot back up. Adding a service no licensed provider delivers becomes a reinstatement problem later.",
          "A sudden edit after a long quiet period. Changing the address, name and phone in one session reliably trips review.",
        ],
      },
      { type: "h2", text: "Why the appeal gets denied the first time" },
      {
        type: "p",
        text: "Two reasons, both fixable. The first is appealing before fixing: the reviewer opens a profile that still breaks the guideline and denies it in seconds. The second is evidence that proves nothing. A screenshot of your own website is worthless, because you control the website. A photo of your sign, the suite door, and a utility bill are third-party facts.",
      },
      {
        type: "callout",
        text: "If the appeal is denied, you can appeal again — but only after changing something real. A second identical request is denied for the same reason as the first.",
      },
      { type: "h2", text: "What not to do" },
      {
        type: "ol",
        items: [
          "Do not create a replacement listing. It becomes a duplicate violation and splits your reviews.",
          "Do not buy a reinstatement service promising a fixed turnaround. Nobody outside Google controls the queue.",
          "Do not delete the suspended profile. It destroys the review history you would otherwise get back.",
          "Do not keep editing while the appeal is open. Every change restarts the review.",
        ],
      },
      { type: "h2", text: "After it comes back" },
      {
        type: "p",
        text: "Reinstated profiles usually return with reviews and photos intact, but ranking can lag for a few weeks while the listing re-earns trust. Do not answer that with aggressive changes. Post normally, keep asking every patient for a review, and let it settle. Then fix the reason it was flagged — usually that means one named person owns the profile.",
      },
    ],
    faqs: [
      {
        q: "How long does Google take to reinstate a suspended profile?",
        a: "There is no published service level. Most decisions land within a few days to about two weeks, and cases involving multiple listings or a disputed address take longer. Filing repeatedly can push you back in the queue, so file once with complete evidence.",
      },
      {
        q: "Will I lose my reviews if my profile is suspended?",
        a: "Usually no. Reviews are attached to the listing and normally come back with it on reinstatement. You lose them permanently if you delete the suspended profile, or build a duplicate and abandon the original. That is the main reason not to create a second one.",
      },
      {
        q: "Can I keep advertising while my Business Profile is suspended?",
        a: "Google Ads is a separate product and campaigns generally keep running, but location extensions tied to the suspended profile stop serving. If your ads lean on location or call assets, point them at a landing page with its own tracked number until the listing returns.",
      },
      {
        q: "My practice moved. How do I change the address without a suspension?",
        a: "Change one field at a time. Update the address first and leave the name, phone and categories alone for at least two weeks. Make sure the new address is already on your website and your state licence record before you edit.",
      },
      {
        q: "Do I need a separate listing for each doctor?",
        a: "Only where each doctor is a public-facing practitioner patients can contact directly. Google's guidelines allow a practitioner listing alongside the practice listing in that case. A solo provider gets one listing, not two, and duplicates are a common suspension cause in healthcare specifically.",
      },
      {
        q: "Is a virtual office or coworking address ever acceptable?",
        a: "Not for a location listing. Google's guidelines require an address staffed during your stated hours where a patient could be seen. With no public premises, the correct configuration is a service-area business with the address hidden, not a mailbox left visible.",
      },
    ],
    citations: [
      {
        publisher: "Google Business Profile Help",
        label: "Guidelines for representing your business on Google",
        href: "https://support.google.com/business/answer/3038177",
      },
      {
        publisher: "Google Business Profile Help",
        label: "Fix a suspended Business Profile",
        href: "https://support.google.com/business/answer/4569145",
      },
      {
        publisher: "Google Search Central",
        label: "Local ranking: relevance, distance and prominence",
        href: "https://developers.google.com/search/docs/appearance/google-business-profile",
      },
    ],
    links: [
      { href: "/guides/choosing-google-business-profile-categories-for-a-medical-practice", label: "Choosing GBP Categories", description: "A common cause of the kind of suspension this guide covers." },
      {
        href: "/services/google-business-profile",
        label: "Google Business Profile management",
        description: "What we do to a profile month to month — categories, services, posts, questions, reviews and tracking.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "The seven-step version for a profile that is healthy and simply under-configured.",
      },
      {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description: "A reply template that does not confirm anyone was a patient.",
      },
      {
        href: "/locations/gbp-optimization-florida",
        label: "Google Business Profile optimization in Florida",
        description: "How we work with Florida practices on local visibility.",
      },
      {
        href: "/locations/gbp-optimization-west-palm-beach",
        label: "Google Business Profile optimization in West Palm Beach",
        description: "Our home market, and the listings we work on most.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-respond-to-a-negative-patient-review",
    keyword: "how to respond to a negative patient review",
    category: "How-to",
    title: "How to Respond to a Negative Patient Review",
    metaTitle: "How to Respond to a Negative Patient Review | Primara",
    metaDescription:
      "Reply to a bad review without breaking HIPAA: a four-line template, what never to say, and when to flag it. Call (561) 291-2681.",
    answer:
      "Reply to a negative patient review within a few days, in public, without confirming the person was ever a patient. Thank them for the feedback, describe your standard of care in general terms, give a phone number or office email, and move the conversation offline. Confirming treatment in public is a disclosure of protected health information.",
    author: "Liam Costello",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 6,
    howTo: {
      name: "How to respond to a negative patient review",
      steps: [
        {
          name: "Wait a day, but not a week",
          text: "Do not answer while angry, and do not leave it sitting. Future patients read the most recent reviews and your replies. A considered response within two or three days reads as attentive.",
        },
        {
          name: "Decide whether it breaks the rules before you write",
          text: "Profanity, hate speech, an obvious competitor, a review about a different business, or purely promotional content can be reported. A review that is merely unfair cannot. Report the first kind, respond to the second.",
        },
        {
          name: "Write four lines and no more",
          text: "Thank them. Say what your practice aims to do, in general. Offer a phone number or office email, not a personal one. Sign it with a role. Keep it under seventy words.",
        },
        {
          name: "Say nothing that confirms a patient relationship",
          text: "No dates, no insurance detail, no missed appointments. Correcting the record in public is the single most common way a practice turns a bad review into a regulatory problem.",
        },
        {
          name: "Take it offline and actually answer there",
          text: "When they call, whoever answers should already know the review exists. Have one named person own review follow-up. A public invitation to call that lands on an unbriefed front desk is worse than not replying.",
        },
        {
          name: "Fix the thing if it is real",
          text: "Read three months of reviews together rather than one at a time. If four people mention the phone going unanswered at lunch, the review is a symptom and the phone is the problem.",
        },
        {
          name: "Outweigh it with new reviews, from everyone",
          text: "Ask every patient the same way every time, and never screen by expected sentiment. Volume is what makes a single bad review stop mattering.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "Why a public reply is a compliance question first" },
      {
        type: "p",
        text: "In most industries a review response is customer service. In healthcare it is a disclosure decision. The HHS Office for Civil Rights has taken enforcement action against practices that discussed patients' care in review replies, and the patient posting first does not waive the protection. You cannot confirm the timeline, the billing or the missed appointment — nor even offer a sympathetic line about their visit, because that acknowledges them as a patient.",
      },
      { type: "h2", text: "A template that stays inside the line" },
      {
        type: "callout",
        text: "Thank you for taking the time to share this. Our practice aims to give every person who walks through the door unhurried time and a clear explanation of their options, and when we fall short of that we want to know. Please call our office at (561) 291-2681 and ask for the practice manager so we can look into it properly. — Practice Manager",
      },
      {
        type: "p",
        text: "Notice what is absent. It never says the reviewer was seen, and never references a date, a service or a bill. It gives a real route to a real person, and it is short, because long replies read as defensive.",
      },
      { type: "h2", text: "What never to write" },
      {
        type: "ul",
        items: [
          "Any detail from the chart — dates, services, diagnoses, medications, balances. This carries real regulatory risk.",
          "Any confirmation that the person was a patient at all, however gently phrased.",
          "A denial of the facts. 'This never happened' invites the reviewer to prove it did, in public.",
          "Anything about the reviewer's character, tone or motives.",
          "A request to take the review down, or anything offered in exchange. The FTC's consumer review rule treats paying to suppress or alter reviews as deceptive.",
        ],
      },
      { type: "h2", text: "When you can get a review removed" },
      {
        type: "p",
        text: "Google removes reviews that break its prohibited and restricted content policy: spam, impersonation, off-topic content, harassment, hate speech, personal information, or a conflict of interest such as a competitor or former employee posting as a patient. Report it through the profile, name the policy in one sentence, and expect days rather than hours. Reviews that are simply negative are not removable.",
      },
      { type: "h2", text: "Never gate reviews to avoid this problem" },
      {
        type: "p",
        text: "The tempting shortcut is to survey patients, route the happy ones to Google and the unhappy ones to a private form. That is review gating. Google's policies prohibit it and the FTC's consumer review rule reaches it too, because suppressing negative feedback misrepresents what patients think. Ask everyone, the same way, every time.",
      },
      { type: "h2", text: "The maths that makes bad reviews survivable" },
      {
        type: "p",
        text: "A one-star review landing on a profile with ninety reviews barely moves the average. The same review on a profile with nine drops it by roughly half a star and sits at the top for months. Volume is the real defence, built in ordinary weeks.",
      },
    ],
    faqs: [
      {
        q: "Can I say the reviewer was never a patient here?",
        a: "Be careful. If the person genuinely has no record with your practice, you may say so and ask them to contact the office in case the review is about a different business. If they were a patient, saying so is the disclosure you are trying to avoid.",
      },
      {
        q: "Should I respond to every review or only the bad ones?",
        a: "Respond to all of them. A short line of thanks on a positive review takes seconds and makes your replies to criticism look like normal behaviour rather than damage control. Keep those replies general enough to avoid confirming any detail of care.",
      },
      {
        q: "How fast should I reply to a negative review?",
        a: "Within two or three days. That is long enough to cool down, check whether a real operational issue sits behind it, and agree who replies — but short enough that patients reading the profile see an attentive practice rather than an unanswered complaint.",
      },
      {
        q: "Can I offer a refund or a discount to fix a bad review?",
        a: "Do not make it conditional on the review. Resolving a genuine billing or service complaint is fine and often right. Offering money in exchange for removing, changing or softening a review is not, and the FTC's consumer review rule addresses exactly that.",
      },
      {
        q: "A former employee left a fake patient review. What now?",
        a: "Report it as a conflict of interest under Google's review policies rather than replying in detail. State in one sentence that the reviewer is a former employee, not a patient. Do not name them publicly or discuss their employment — that creates a separate problem.",
      },
      {
        q: "Does responding to reviews help my ranking?",
        a: "Google names reviews as part of prominence, one of the three local ranking factors, with count and recency mattering most. Responses are not a documented ranking factor on their own, but they raise conversion: more of the people who read your profile actually call.",
      },
    ],
    citations: [
      {
        publisher: "U.S. Department of Health and Human Services",
        label: "HIPAA Privacy Rule and disclosures of protected health information",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
      {
        publisher: "Google Business Profile Help",
        label: "Prohibited and restricted content for reviews",
        href: "https://support.google.com/contributionpolicy/answer/7400114",
      },
    ],
    links: [
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Get More Patient Reviews Without Review Gating", description: "The compliant review-generation approach this response strategy pairs with." },
      {
        href: "/services/online-reputation-management",
        label: "Online reputation management for practices",
        description: "Review generation, monitoring and compliant responses, run as a standing process.",
      },
      {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description: "The other profile emergency, and how reinstatement actually works.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "Where review velocity sits among the levers that actually move the map pack.",
      },
      {
        href: "/locations/review-generation-florida",
        label: "Review generation for Florida practices",
        description: "How we build review volume without gating or incentives.",
      },
      {
        href: "/locations/review-generation-west-palm-beach",
        label: "Review generation in West Palm Beach",
        description: "Our local market, and what review counts look like there.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "get-a-medical-practice-into-ai-search-answers",
    keyword: "how to get a medical practice into AI search answers",
    category: "How-to",
    title: "How to Get a Medical Practice Into AI Search Answers",
    metaTitle: "Get a Medical Practice Into AI Search Answers | Primara",
    metaDescription:
      "How ChatGPT, Perplexity and AI Overviews choose practices — entities, schema, citations and answer-first pages. Call (561) 291-2681.",
    answer:
      "AI search answers name practices that are described consistently across the open web, answer the question directly on the page, and carry clean structured data. To be cited, put a plain-language answer in your first fifty words, keep your name, address and phone identical everywhere, mark up services and questions with schema, and earn mentions on sources models trust.",
    author: "Gio LaRoche",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 6,
    howTo: {
      name: "How to make a medical practice citable by AI search",
      steps: [
        {
          name: "Pick the questions you want to be the answer to",
          text: "Write down the ten questions a patient asks before choosing a practice: what a visit costs, whether you take their insurance, how soon they can be seen. Those are the prompts, and one page owns one.",
        },
        {
          name: "Answer in the first fifty words",
          text: "Put a direct, plain-language answer at the top of the page, before the marketing. A page opening with a mission statement gives a model nothing to extract.",
        },
        {
          name: "Make the entity unambiguous",
          text: "Your practice name, address, phone number and provider names must be identical on your site, your Google Business Profile, your state licence record, your insurance directories and your hospital affiliations.",
        },
        {
          name: "Ship a real schema graph",
          text: "Each service page should carry LocalBusiness or MedicalBusiness, the specific Service or MedicalProcedure, FAQPage, BreadcrumbList, and a WebPage node declaring what the page is about — plus sameAs links so the entity joins up.",
        },
        {
          name: "Name providers with their real credentials",
          text: "Write 'Jane Ortiz, PA-C' and 'Michael Tran, MD' exactly as licensed, with a biography page each and a link to the public licence record. Never invent or upgrade a credential.",
        },
        {
          name: "Get mentioned somewhere other than your own website",
          text: "One accurate listing in a hospital directory, professional association or insurance directory a model already reads beats ten new pages on your own domain.",
        },
        {
          name: "Keep pages current and say when they changed",
          text: "Put a real last-updated date on the page and in the structured data, and make it true. Review each page on a schedule, changing something real when you do.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "What actually changed" },
      {
        type: "p",
        text: "A growing share of searches now end with an answer rather than a list of ten blue links, and in those surfaces there is no tenth place: either the answer names your practice or it does not. The work is not exotic, though. Google has been explicit that there is nothing fundamentally new to do for AI features. What changes is emphasis — extractability, entity clarity and corroboration now matter far more than keyword density.",
      },
      { type: "h2", text: "Extractability: write the answer, then the argument" },
      {
        type: "p",
        text: "Language models quote passages, and a passage is extractable when it answers a question without needing the paragraph before it. That is why the first fifty words of every page here are a direct answer. Three formats extract well: a short definition after the question, a numbered sequence for a how, and a two-column table for a comparison or a price.",
      },
      { type: "h2", text: "Entity clarity: one practice, described one way" },
      {
        type: "p",
        text: "A model builds its picture of your practice from every mention it has seen. If your name appears as 'Lakeside Family Medicine' on your site, 'Lakeside Family Medicine, PA' in an insurance directory and 'Lakeside Family Med' on the profile, that picture is blurred — and blurred entities get skipped.",
      },
      {
        type: "ul",
        items: [
          "One legal name everywhere, including punctuation and suffixes.",
          "One address format, matching your signage and profile exactly.",
          "One primary phone number, same format, everywhere.",
          "Provider names as licensed, on a biography page a citation can point at.",
          "Service names matching your Google Business Profile service items word for word.",
        ],
      },
      { type: "h2", text: "Structured data states facts machine-first" },
      {
        type: "p",
        text: "Schema markup does not make a page rank. It removes ambiguity about what the page says, which is precisely the problem an answer engine is trying to solve. Two rules keep it honest. The markup must describe what a visitor actually sees, because Google's structured data guidelines treat hidden or mismatched markup as spam. And aggregate ratings belong there only when they reflect real, countable reviews.",
      },
      { type: "h2", text: "Corroboration: your website is not enough on its own" },
      {
        type: "p",
        text: "A claim that appears only on your own domain is one a model cannot verify. The same claim in a hospital directory, an association listing and a local news story becomes a fact it will repeat. The sources that carry weight in healthcare are unglamorous: state licensing boards, the National Provider Identifier registry, hospital affiliation pages, insurer provider lookups.",
      },
      { type: "h2", text: "How to tell whether it is working" },
      {
        type: "p",
        text: "Rank tracking will not show you this, because there is no position to hold. Three checks are practical. Ask the assistants your ten questions monthly from a signed-out session and record whether you are named. Watch for referral traffic from them, which arrives in small volumes but converts well. And watch impressions against clicks in Search Console: impressions holding while clicks fall is what it looks like when your content answers without being clicked.",
      },
    ],
    faqs: [
      {
        q: "Is AI search optimisation different from SEO?",
        a: "Same foundation, different emphasis. Crawlable pages, accurate content and fast loading still matter. What gets weighted more is whether a passage answers a question on its own, whether your practice is described identically across the web, and whether outside sources corroborate it.",
      },
      {
        q: "Does schema markup make ChatGPT cite my practice?",
        a: "Not by itself. Schema removes ambiguity about what a page says and who offers what, which makes it cheaper for any machine to use, and it drives rich results in Google. Treat it as one of four inputs, alongside answer-first writing, entity consistency and outside corroboration.",
      },
      {
        q: "How long before a practice shows up in AI answers?",
        a: "Realistically a few months, because the engines must re-crawl your site, re-read the directories you corrected and rebuild their picture of your practice. Entity fixes show up first, being cheap to verify. Nobody can guarantee a citation in a specific engine.",
      },
      {
        q: "Should I block AI crawlers from my website?",
        a: "If you want to appear in AI answers, no: blocking those crawlers is how you guarantee you are not cited. Some publishers block them to protect content they sell, but a practice using its website to attract patients is in the opposite position entirely.",
      },
      {
        q: "Can I write these pages with AI?",
        a: "You can draft with it, but a licensed clinician must check every clinical statement before it publishes, and the page should not make outcome promises. Unreviewed generated healthcare copy is where invented credentials and imaginary statistics come from, and one costs more trust than the page earns.",
      },
      {
        q: "What is the single highest-value first step?",
        a: "Audit how your practice name, address, phone number and provider credentials appear across your website, your Google Business Profile, your state licence record and every insurance directory you are listed in, then make them identical. That resolves the ambiguity keeping models from naming you.",
      },
    ],
    citations: [
      {
        publisher: "Google Search Central",
        label: "AI features and your website",
        href: "https://developers.google.com/search/docs/appearance/ai-features",
      },
      {
        publisher: "Google Search Central",
        label: "Structured data general guidelines",
        href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      },
      {
        publisher: "Google Search Central",
        label: "Creating helpful, reliable, people-first content",
        href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
    links: [
      { href: "/guides/how-to-write-a-medical-service-page-that-ranks", label: "Write a Medical Service Page That Ranks", description: "The page structure this AI-search guide builds on." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "How to Write a Doctor Bio Page That Ranks", description: "Why exact, verifiable credentials matter even more once AI answer engines are reading the page." },
      {
        href: "/services/ai-seo",
        label: "AI SEO for medical practices",
        description: "The service version of this page — entity cleanup, schema, answer-first content, and monthly prompt checks.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "The profile side of entity clarity: categories, services, hours and reviews.",
      },
      {
        href: "/guides/hipaa-safe-tracking-for-a-medical-website",
        label: "HIPAA-safe tracking for a medical website",
        description: "How to measure any of this without putting patient data into an analytics tool.",
      },
      {
        href: "/locations/ai-seo-florida",
        label: "AI SEO for Florida practices",
        description: "How we run this work for practices across Florida.",
      },
      {
        href: "/locations/ai-seo-west-palm-beach",
        label: "AI SEO in West Palm Beach",
        description: "Our home market, and what the local search landscape looks like there.",
      },
    ],
  },
];
