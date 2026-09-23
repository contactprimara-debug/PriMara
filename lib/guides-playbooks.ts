import type { Guide } from "@/lib/guides";

// How-to guides, checklists, and vertical playbooks. Every step-by-step page
// here carries a `howTo` block, which app/guides/[slug]/page.tsx emits as
// HowTo schema alongside Article + FAQPage + BreadcrumbList.

export const guidesPartTwo: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-get-more-patients-from-google-business-profile",
    keyword: "how to get more patients from Google Business Profile",
    category: "How-to",
    title: "How to Get More Patients From Your Google Business Profile",
    metaTitle: "Get More Patients From Google Business Profile | Primara",
    metaDescription:
      "Seven steps that move a medical practice into the Google map pack — categories, reviews, photos, posts, and tracking. (561) 291-2681.",
    answer:
      "To get more patients from a Google Business Profile, claim and verify it, set the most specific primary category, fill every applicable secondary category, add your services and hours, collect reviews steadily from every patient, post and add photos monthly, and track calls. Categories and review velocity move ranking more than anything else on the profile.",
    author: "Liam Costello",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 8,
    howTo: {
      name: "How to get more patients from a Google Business Profile",
      steps: [
        {
          name: "Claim and verify the profile",
          text: "Search your practice name at business.google.com and claim the existing listing rather than creating a new one. A duplicate splits your reviews and suppresses both. Verification is by video call, postcard, or phone depending on category.",
        },
        {
          name: "Set the most specific primary category",
          text: "Choose the narrowest category that describes your practice — Internist rather than Doctor, Psychotherapist rather than Mental Health Service. Primary category is the strongest single ranking input on the profile.",
        },
        {
          name: "Fill every applicable secondary category",
          text: "You get up to nine additional categories. Each one is a set of searches you become eligible for. Add only categories you genuinely serve; irrelevant ones risk suspension and dilute relevance.",
        },
        {
          name: "Complete services, attributes, hours and description",
          text: "List each service with its own short description. Set holiday hours. Add attributes patients filter on — wheelchair accessible entrance, online appointments, languages spoken, new patients accepted.",
        },
        {
          name: "Build review velocity",
          text: "Ask every patient, in the same way, every time. Google weighs recency, so three reviews a month beats two hundred collected years ago. Never filter by expected sentiment and never offer anything in exchange.",
        },
        {
          name: "Post and add photos monthly",
          text: "Upload real photos of the office, staff, and exterior every month, and publish two to four posts. Fresh media correlates with profile engagement, and the exterior photo helps patients find your door.",
        },
        {
          name: "Track what the profile produces",
          text: "Add UTM parameters to the website link and route the profile's call button through tracking so you know how many calls and bookings it produced. Untracked profile work cannot be improved.",
        },
      ],
    },
    sections: [
      {
        type: "h2",
        text: "Why the profile matters more than your website",
      },
      {
        type: "p",
        text: "For any search with local intent — 'primary care doctor near me,' 'dermatologist Boca Raton' — Google shows a three-result map pack above the normal results. Those three listings take the overwhelming majority of clicks and calls. Your website competes below them. That is why an afternoon spent on the profile usually outperforms a month spent on the site.",
      },
      {
        type: "p",
        text: "Google's own documentation on local ranking names three factors: relevance, distance, and prominence. You cannot change distance. Relevance is categories, services, and description. Prominence is reviews, links, and how well known your practice is. So the levers are categories and reviews, in that order.",
      },
      {
        type: "h2",
        text: "Categories: the most underused lever in healthcare",
      },
      {
        type: "p",
        text: "Most practices set one category and stop. That leaves nine slots empty, and each slot is a set of searches you are choosing not to appear for. A fully configured primary care profile might carry Family Medicine Physician, Internist, General Practitioner, Medical Clinic, Doctor, Walk-in Clinic where applicable, and Physician. A men's health clinic might carry Medical Clinic, Men's Health Physician, Endocrinologist where a licensed one practices, and Urologist where applicable.",
      },
      {
        type: "callout",
        text: "Add only categories your practice truly serves. A category you cannot back up is a suspension risk, and suspensions take weeks to reverse.",
      },
      {
        type: "h2",
        text: "Reviews: velocity beats volume",
      },
      {
        type: "p",
        text: "A practice with forty-five reviews receiving four new ones a month typically outranks a practice with two hundred reviews and nothing in eighteen months. Recency is the signal. The practical version of this is a standing process — a card at checkout, a text after the visit, a line in the discharge summary — applied to every patient rather than the ones you expect to be happy.",
      },
      {
        type: "p",
        text: "Two hard rules. Do not offer anything of value for a review; the Federal Trade Commission's consumer review rule treats incentivized reviews as deceptive when the incentive is undisclosed or conditioned on sentiment. Do not screen patients before asking — sending happy ones to Google and unhappy ones to a private form is review gating, prohibited by Google and covered by the same FTC rule.",
      },
      {
        type: "p",
        text: "Respond to everything within a few days. For a negative review, respond without confirming the person was ever a patient. Acknowledging care publicly is a HIPAA disclosure even if the reviewer disclosed it first.",
      },
      {
        type: "h2",
        text: "The questions section nobody watches",
      },
      {
        type: "p",
        text: "Anyone can ask a question on your profile and anyone can answer it. Unmonitored, this is where wrong insurance information and out-of-date hours live. Seed it yourself with the eight questions your front desk answers all day — which insurance you take, whether you see new patients, parking, telehealth, walk-ins, pediatric ages, languages — and answer them from the business account.",
      },
      {
        type: "h2",
        text: "What to do in the first month",
      },
      {
        type: "ol",
        items: [
          "Week one: claim, verify, fix name, address, phone, hours. Make them match your website exactly, character for character.",
          "Week two: categories, services with descriptions, attributes, and a description that names the conditions you treat in plain language.",
          "Week three: twenty photos — exterior, waiting room, staff, equipment — and the first two posts.",
          "Week four: switch on the review process for every patient, seed eight questions and answers, and confirm call tracking is recording profile calls separately.",
        ],
      },
      {
        type: "h2",
        text: "What will not work",
      },
      {
        type: "ul",
        items: [
          "Keyword-stuffing the business name. 'Smith Family Medicine — Best Doctor Miami' is a policy violation and a common cause of suspension.",
          "Creating a second profile for a second specialty at the same address, unless you genuinely have a separate practitioner with separate hours.",
          "A virtual office address. Google requires staffed premises during stated hours.",
          "Buying reviews. Google filters them, competitors report them, and the FTC rule now carries penalties.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to rank in the Google map pack?",
        a: "Category and profile changes are usually reflected within two to six weeks. Review velocity shows over sixty to ninety days. Moving into the top three in a competitive Florida city typically takes three to six months of consistent work, less in a smaller market.",
      },
      {
        q: "How many Google Business Profile categories should a medical practice use?",
        a: "One primary and as many secondary categories as genuinely apply, up to the limit of nine additional. Most practices we audit are using one or two and leaving the rest empty, which is the single cheapest ranking gain available to them.",
      },
      {
        q: "Can I respond to a negative patient review?",
        a: "Yes, but never confirm that the reviewer was a patient and never discuss any clinical detail. A safe response thanks them for the feedback, states your general service standard, and provides an office number to discuss it privately. Confirming treatment publicly is a HIPAA disclosure.",
      },
      {
        q: "Do Google Posts affect ranking?",
        a: "Posts are not a strong direct ranking factor, but they occupy space on your profile, answer questions before a patient calls, and correlate with engagement signals. Two to four a month with a real photo is the right cadence. Text-only posts are wasted space.",
      },
      {
        q: "Should each provider have their own profile?",
        a: "Only a practitioner who is separately contactable at the location with their own hours may have a practitioner profile alongside the practice profile. Creating one per provider at a single-doctor practice creates duplicates, splits reviews, and usually ends in a suspension.",
      },
    ],
    citations: [
      {
        publisher: "Google",
        label: "Improve your local ranking on Google",
        href: "https://support.google.com/business/answer/7091",
      },
      {
        publisher: "Google",
        label: "Guidelines for representing your business on Google",
        href: "https://support.google.com/business/answer/3038177",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
    ],
    links: [
      {
        href: "/services/google-business-profile",
        label: "Google Business Profile Management",
        description: "The managed version of everything on this page.",
      },
      {
        href: "/locations/gbp-optimization-west-palm-beach",
        label: "GBP Optimization in West Palm Beach",
        description: "Local map pack benchmarks for Palm Beach County practices.",
      },
      {
        href: "/locations/gbp-optimization-florida",
        label: "GBP Optimization in Florida",
        description: "How map pack competition differs across Florida metros.",
      },
      {
        href: "/guides/new-practice-marketing-checklist",
        label: "New Practice Marketing Checklist",
        description: "The first ninety days for a practice opening its doors.",
      },
      {
        href: "/guides/how-to-rank-a-med-spa-in-miami",
        label: "How to Rank a Med Spa in Miami",
        description: "The same playbook in the hardest local market in Florida.",
      },
          {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description:
          "If the listing is gone from Maps, this is the reinstatement process step by step.",
      },
      {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description:
          "A reply template that never confirms anyone was a patient, plus when a review can be removed.",
      },
      {
        href: "/guides/med-spa-marketing-cost",
        label: "Med Spa Marketing Cost in Florida",
        description: "The budgeting question that comes right after the profile is optimized.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "hipaa-safe-tracking-for-a-medical-website",
    keyword: "HIPAA-safe tracking for a medical website",
    category: "How-to",
    title: "HIPAA-Safe Tracking for a Medical Website",
    metaTitle: "HIPAA-Safe Tracking for a Medical Website | Primara",
    metaDescription:
      "How to measure calls, forms, and ad performance on a medical site without disclosing protected health information. (561) 291-2681.",
    answer:
      "To track a medical website safely, keep analytics and ad pixels off pages and events that reveal a condition, never send names, emails, phone numbers, or URL parameters containing health details to an ad platform, send conversions server-side with no identifiers, and sign business associate agreements with any vendor that could receive protected health information.",
    author: "Gio LaRoche",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 8,
    howTo: {
      name: "How to set up HIPAA-safe tracking on a medical website",
      steps: [
        {
          name: "Inventory every tag on the site",
          text: "List every analytics, advertising, chat, heatmap, and scheduling script currently loading. Most practices find tags nobody remembers installing. Anything you cannot account for comes off.",
        },
        {
          name: "Classify your pages by sensitivity",
          text: "Separate general pages — home, about, contact, hours — from condition-specific pages such as a hormone therapy or addiction treatment page. Visiting a condition page plus an identifier is the combination that creates protected health information.",
        },
        {
          name: "Strip identifiers out of URLs and forms",
          text: "No names, emails, phone numbers, appointment reasons, or condition names in query strings. Turn off automatic form-field collection in analytics and disable any feature that captures typed input.",
        },
        {
          name: "Move conversions server-side with no personal data",
          text: "Send a conversion event from your server with a random event identifier and no name, email, phone, or IP-derived identity. The ad platform learns that a conversion happened, not who it was.",
        },
        {
          name: "Turn off enhanced and automatic data collection",
          text: "Disable enhanced conversions, automatic hashed email collection, remarketing lists built from condition pages, and any personalized-advertising feature that segments by inferred health status.",
        },
        {
          name: "Get the paperwork right",
          text: "Sign a business associate agreement with every vendor that could receive protected health information — call tracking, scheduling, chat, CRM. Most advertising platforms will not sign one, which is precisely why identifiers must never reach them.",
        },
        {
          name: "Verify what is actually leaving the browser",
          text: "Open the network tab on a condition page, submit a test form, and read every outbound request. If you see an email address, a phone number, or a condition name in any payload, the setup is not finished.",
        },
      ],
    },
    sections: [
      {
        type: "h2",
        text: "Why this became urgent",
      },
      {
        type: "p",
        text: "In 2022 the Office for Civil Rights published guidance stating that information collected by online tracking technologies on a covered entity's website can be protected health information, including when the only facts are an IP address and the page visited. The reasoning is simple: an IP address plus a page about a specific condition is enough to indicate that an identifiable person sought care for that condition. Enforcement actions and class actions followed, and healthcare sites are now a standing target.",
      },
      {
        type: "p",
        text: "The practical consequence is not that you must stop measuring. It is that the identity of the visitor and the health meaning of the page must never travel together to a vendor who has not signed a business associate agreement.",
      },
      {
        type: "h2",
        text: "What counts as an identifier",
      },
      {
        type: "ul",
        items: [
          "Name, email address, phone number, date of birth, and full address — the obvious ones.",
          "IP address. OCR's guidance is explicit that an IP address can be an identifier in this context, which is what makes ordinary analytics risky on condition pages.",
          "Advertising cookies and device identifiers that persist across visits.",
          "A precise appointment time combined with a location.",
          "Free-text form fields where a patient describes why they are calling. This is the most common leak we find.",
        ],
      },
      {
        type: "h2",
        text: "A configuration that works",
      },
      {
        type: "ol",
        items: [
          "General pages: standard analytics is acceptable, with IP anonymization on and no advertising features enabled.",
          "Condition pages: no advertising pixels at all. If you need page-level counts, use a server log or a privacy-preserving analytics tool that stores no personal data.",
          "Forms: collect the minimum. Name, phone, and a reason field limited to fixed choices such as 'new patient' or 'existing patient' — never free text describing symptoms.",
          "Thank-you page: fire the conversion here, but keep the URL generic. A thank-you URL containing the service name puts the condition into the referrer of every downstream request.",
          "Calls: route the tel: link through a tracking number from a vendor who signs a business associate agreement, and turn recording off or keep recordings inside that agreement.",
          "Ads: import conversions from the server with no personal data attached, and keep personalized-advertising features off.",
        ],
      },
      {
        type: "callout",
        text: "The test that catches almost everything: submit a real test form on your most sensitive page with the browser network tab open. If a name, phone number, email, or condition word appears in any request going to a third-party domain, stop and fix it.",
      },
      {
        type: "h2",
        text: "Things practices get wrong",
      },
      {
        type: "ul",
        items: [
          "A Meta pixel on a page about a specific treatment. This is the fact pattern in most of the health-tracking litigation of the last three years.",
          "Google Ads enhanced conversions left on, quietly hashing and transmitting patient email addresses.",
          "A chat widget that stores transcripts with no business associate agreement in place.",
          "Session-replay tools recording form input on an intake page.",
          "A cookie banner that says consent was obtained when the tags fire before anyone clicks anything.",
          "Appointment confirmation URLs containing the service name, the provider, and a booking identifier.",
        ],
      },
      {
        type: "h2",
        text: "You can still measure what matters",
      },
      {
        type: "p",
        text: "Practices assume compliance means flying blind. It does not. You can still know how many calls came from the Google Business Profile versus organic search versus ads, how many forms each channel produced, which pages produce contacts, and what a booked patient costs by channel. What you give up is the ability to tie a specific human to a specific condition inside an advertising platform — which was never something a practice needed in order to run marketing well.",
      },
    ],
    faqs: [
      {
        q: "Is Google Analytics HIPAA compliant?",
        a: "Google does not sign business associate agreements for Analytics, so it is not compliant for anything that could be protected health information. It can be used on general pages with advertising features and identifiers off. It should not be used on pages that reveal a specific condition a visitor is seeking care for.",
      },
      {
        q: "Can a medical practice use the Meta pixel?",
        a: "Only on pages with no health meaning, and never with identifiers. Placing a Meta pixel on condition-specific pages is the exact pattern behind most health tracking lawsuits since 2022. For most practices the safe answer is to keep it off the site entirely and use server-side conversions instead.",
      },
      {
        q: "Does an IP address count as protected health information?",
        a: "OCR's guidance says it can. An IP address paired with a visit to a page about a specific condition may indicate that an identifiable individual sought care for that condition, which brings it inside the definition. That is why condition pages need different treatment from your homepage.",
      },
      {
        q: "What is server-side conversion tracking?",
        a: "Your server, rather than the visitor's browser, tells the ad platform a conversion happened. Because you control the payload, you can send a random event identifier and a value with no name, email, phone, or address. The platform can optimize; it learns nothing about the individual.",
      },
      {
        q: "Do I need a business associate agreement with my call tracking vendor?",
        a: "Yes, if the vendor could receive protected health information — and a tracked call to a medical practice usually qualifies, especially with recording or transcription enabled. Several call tracking vendors sign one. Use one that does, and disable recording if you do not need it.",
      },
    ],
    citations: [
      {
        publisher: "U.S. Dept. of Health & Human Services, OCR",
        label: "Use of online tracking technologies by HIPAA covered entities",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      },
      {
        publisher: "U.S. Dept. of Health & Human Services",
        label: "Business associate contracts",
        href: "https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Health Breach Notification Rule",
        href: "https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule",
      },
    ],
    links: [
      {
        href: "/hipaa",
        label: "HIPAA-Aware Marketing",
        description: "How Primara handles compliance across every client engagement.",
      },
      {
        href: "/services/medical-practice-website-design",
        label: "Medical Practice Website Design",
        description: "Builds where tracking is configured correctly from day one.",
      },
      {
        href: "/locations/medical-seo-florida",
        label: "Medical SEO in Florida",
        description: "The measurement layer under every Florida engagement.",
      },
      {
        href: "/locations/medical-website-design-west-palm-beach",
        label: "Medical Website Design in West Palm Beach",
        description: "Local builds with compliant analytics and call tracking.",
      },
      {
        href: "/guides/seo-vs-google-ads-for-a-therapy-practice",
        label: "SEO vs Google Ads for a Therapy Practice",
        description: "Choosing a channel when health targeting is restricted.",
      },
          {
        href: "/guides/get-a-medical-practice-into-ai-search-answers",
        label: "How to get a medical practice into AI search answers",
        description:
          "What makes ChatGPT, Perplexity and AI Overviews name a practice — entities, schema and citations.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-rank-a-med-spa-in-miami",
    keyword: "how to rank a med spa in Miami",
    category: "How-to",
    title: "How to Rank a Med Spa in Miami",
    metaTitle: "How to Rank a Med Spa in Miami | Primara",
    metaDescription:
      "What it actually takes to reach the Miami map pack for injectables, laser, and body contouring — reviews, categories, pages, and ads. (561) 291-2681.",
    answer:
      "Ranking a med spa in Miami takes a neighborhood-level strategy, not a city-level one. Target Brickell, Coral Gables, Wynwood, and Doral separately, set treatment-specific Google Business Profile categories, build review velocity of eight or more per month, publish one page per treatment, and keep Meta ads compliant with before-and-after restrictions.",
    author: "Liam Costello",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 8,
    howTo: {
      name: "How to rank a med spa in Miami",
      steps: [
        {
          name: "Pick the neighborhood you can actually win",
          text: "Miami is not one market. Ranking for 'med spa Miami' means competing citywide; ranking for 'Botox Brickell' means competing with the practices within about a mile. Start with your own neighborhood and expand outward.",
        },
        {
          name: "Set treatment-level categories",
          text: "Primary category Medical Spa, then add the applicable secondary categories — Skin Care Clinic, Laser Hair Removal Service, Facial Spa, Weight Loss Service — only where you genuinely offer the treatment.",
        },
        {
          name: "Get review velocity above eight per month",
          text: "Miami map pack incumbents commonly hold three hundred or more reviews. You do not need to match the total, but you need a higher rate. Ask at checkout, every client, every time, with no filtering.",
        },
        {
          name: "Publish one page per treatment",
          text: "Separate pages for neurotoxin, dermal filler, laser resurfacing, body contouring, and medical weight management. Each names the technology, the provider type who performs it, pricing structure, and downtime.",
        },
        {
          name: "Add neighborhood pages where you have real presence",
          text: "A page for the neighborhoods you actually draw from, with real landmarks, parking, and travel context. Do not clone the same page across twenty ZIP codes — Google discounts that and it dilutes the ones that matter.",
        },
        {
          name: "Run compliant Meta ads",
          text: "Meta prohibits ads implying knowledge of a personal attribute and restricts unexpected before-and-after imagery. Lead with the treatment and the offer rather than a close-up of a body part, and keep targeting broad.",
        },
        {
          name: "Track consultations booked, not clicks",
          text: "Med spa economics live on consultation-to-treatment conversion. Measure booked consultations by channel and cost per consultation; a five-dollar click that never books is more expensive than a twenty-dollar click that does.",
        },
      ],
    },
    sections: [
      {
        type: "h2",
        text: "Miami is a neighborhood market wearing a city's name",
      },
      {
        type: "p",
        text: "The map pack is heavily proximity-weighted, and Miami's density means a searcher in Brickell and a searcher in Doral see almost entirely different results even though both typed 'med spa near me.' A single practice cannot rank across all of it. The practices that win pick a core neighborhood, dominate it, then extend into the adjacent one.",
      },
      {
        type: "p",
        text: "Pick your core by where your existing clients actually come from. Pull a month of appointments, map the ZIP codes, and target the densest cluster first. That is where your reviews already are, which is the strongest head start available.",
      },
      {
        type: "h2",
        text: "What the competitive bar looks like",
      },
      {
        type: "table",
        headers: ["Signal", "What Miami incumbents typically hold"],
        rows: [
          ["Review count", "250–800 on established Brickell and Coral Gables profiles"],
          ["Review velocity", "10–30 new reviews per month"],
          ["Categories", "4–8 filled, with treatment-specific secondaries"],
          ["Photos", "Hundreds, refreshed continually"],
          ["Site pages", "20–50, one per treatment plus neighborhood pages"],
          ["Paid", "Meta plus Google, usually with a consultation offer"],
        ],
      },
      {
        type: "p",
        text: "You do not have to match the totals. Velocity, completeness, and proximity are what you can change this quarter, and a profile that is fully configured with a rising review rate can enter a top three in a specific neighborhood in a few months even against much older listings.",
      },
      {
        type: "h2",
        text: "Treatment pages are where the money is",
      },
      {
        type: "p",
        text: "A med spa homepage listing fourteen treatments ranks for none of them. Searches are specific — 'lip filler Coral Gables,' 'CoolSculpting Brickell,' 'semaglutide clinic Miami' — and each needs a page that names the treatment, what the appointment involves, who performs it and under what supervision, realistic downtime, and how pricing is structured. That last one matters more than practices expect; a page that refuses to discuss cost loses the visitor to one that does.",
      },
      {
        type: "p",
        text: "Write in the language Miami clients actually use, and publish the page in Spanish as well where it will be read. A genuinely translated treatment page is one of the cheapest competitive advantages available in this market, and machine-translating it is worse than not doing it.",
      },
      {
        type: "h2",
        text: "Advertising rules that catch med spas out",
      },
      {
        type: "ul",
        items: [
          "Meta restricts ads that imply knowledge of a personal attribute — 'tired of your double chin?' is the phrasing that gets accounts flagged. Describe the treatment, not the viewer.",
          "Before-and-after images are restricted on Meta and frequently rejected. Where you do use them, they must be truthful, unretouched, and consented in writing.",
          "Google Ads treats cosmetic and weight-loss claims carefully; unverifiable outcome claims get disapproved.",
          "The FTC requires that endorsements and testimonials reflect typical results and that any material connection with the endorser is disclosed. Influencer posts for a med spa need a clear disclosure.",
          "Florida requires appropriate physician oversight for medical treatments delivered in a spa setting. Marketing copy should never describe a treatment in a way that misstates who performs it.",
        ],
      },
      {
        type: "h2",
        text: "A ninety-day plan",
      },
      {
        type: "ol",
        items: [
          "Days one to fifteen: audit the profile, fix categories, add every service with a description, upload fifty real photos, and start the checkout review ask.",
          "Days sixteen to forty-five: publish the top six treatment pages with schema and pricing structure, and wire consultation tracking.",
          "Days forty-six to seventy-five: add the core neighborhood page plus the two adjacent ones, and begin weekly posts with real photos.",
          "Days seventy-six to ninety: read the rank grid, see which neighborhood moved, and put the paid budget behind the treatments where organic is already close.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to rank a med spa in Miami?",
        a: "Three to six months to enter a top three in a single neighborhood with consistent review velocity and complete profile work. Citywide visibility for a competitive term such as 'med spa Miami' generally takes a year or more, and is rarely the right first goal.",
      },
      {
        q: "How many reviews does a Miami med spa need?",
        a: "Less than people fear in absolute terms, more than they expect in rate. Eight to fifteen new reviews a month will outpace most incumbents' velocity even if they hold several hundred in total. Recency and rate are what the local algorithm rewards.",
      },
      {
        q: "Should a med spa run Meta ads or Google Ads first?",
        a: "Google for treatments people search by name — Botox, filler, laser hair removal — because that demand already exists. Meta for new service lines and for offers, where you are creating demand rather than capturing it. Most Miami med spas end up running both.",
      },
      {
        q: "Can a med spa post before-and-after photos?",
        a: "On your own website, yes, with written consent and no retouching. On Meta, before-and-after imagery is restricted and frequently rejected, so build ad creative around the treatment and the offer instead, and keep the gallery on your site.",
      },
      {
        q: "Do I need pages for every Miami neighborhood?",
        a: "No, and cloning one page across twenty ZIP codes will hurt you. Build pages only for neighborhoods where you have genuine presence and real detail to write — parking, landmarks, travel time, clients you actually serve there.",
      },
    ],
    citations: [
      {
        publisher: "Google",
        label: "Improve your local ranking on Google",
        href: "https://support.google.com/business/answer/7091",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Guides concerning the use of endorsements and testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/guides-concerning-use-endorsements-testimonials-advertising",
      },
      {
        publisher: "Meta",
        label: "Advertising standards — personal health and appearance",
        href: "https://transparency.meta.com/policies/ad-standards/",
      },
    ],
    links: [
      {
        href: "/medspas",
        label: "Medspa Marketing",
        description: "What we run for physician- and nurse-led medspas.",
      },
      {
        href: "/locations/miami-medspa-marketing",
        label: "Medspa Marketing in Miami",
        description: "Neighborhood-level competitive picture for Miami-Dade.",
      },
      {
        href: "/locations/fort-lauderdale-medspa-marketing",
        label: "Medspa Marketing in Fort Lauderdale",
        description: "The adjacent market, and a cheaper place to start ranking.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "Get More Patients From Google Business Profile",
        description: "The profile mechanics this playbook depends on.",
      },
      {
        href: "/guides/mens-health-clinic-marketing-playbook",
        label: "Men's Health Clinic Marketing Playbook",
        description: "The same structure for a cash-pay men's clinic.",
      },
          {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description:
          "If the listing is gone from Maps, this is the reinstatement process step by step.",
      },
      {
        href: "/guides/get-a-medical-practice-into-ai-search-answers",
        label: "How to get a medical practice into AI search answers",
        description:
          "What makes ChatGPT, Perplexity and AI Overviews name a practice — entities, schema and citations.",
      },
      {
        href: "/guides/med-spa-marketing-cost",
        label: "Med Spa Marketing Cost in Florida",
        description: "What this playbook costs to actually run, by budget tier.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "new-practice-marketing-checklist",
    keyword: "new medical practice marketing checklist",
    category: "Checklist",
    title: "New Medical Practice Marketing Checklist (First 90 Days)",
    metaTitle: "New Medical Practice Marketing Checklist | Primara",
    metaDescription:
      "The first ninety days for a new Florida practice — profile, site, reviews, tracking, and referrals, in the order that matters. (561) 291-2681.",
    answer:
      "In the first ninety days a new practice should claim and verify its Google Business Profile, secure a domain and a site with one page per service, set up call and form tracking, start asking every patient for a review, and make direct contact with the referring practices nearby. Profile first, site second, ads last.",
    author: "Liam Costello",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 7,
    howTo: {
      name: "New medical practice marketing checklist for the first 90 days",
      steps: [
        {
          name: "Days 1–14: claim the ground",
          text: "Register the domain and a practice email on it. Create and verify the Google Business Profile with the most specific primary category. Set consistent name, address, and phone details everywhere they appear.",
        },
        {
          name: "Days 15–30: publish a site that can rank",
          text: "Ship a site with a homepage, an about page with real credentials, one page per service, an insurance page, a contact page with a map, and a privacy policy that matches what you actually collect.",
        },
        {
          name: "Days 31–45: make measurement real",
          text: "Install analytics with identifiers and advertising features off, route the phone through a tracking number from a vendor that signs a business associate agreement, and confirm a form submission produces a recorded conversion.",
        },
        {
          name: "Days 46–60: start the review engine",
          text: "Give the front desk a fixed script and a short link. Ask every patient, without filtering. Three to five reviews a month from month two is a stronger position than most established competitors hold.",
        },
        {
          name: "Days 61–75: build local relationships",
          text: "Visit the referring practices, urgent cares, and pharmacies within a few miles. Claim the major directory and insurance-panel listings so your details match everywhere Google looks.",
        },
        {
          name: "Days 76–90: add paid only where there is a gap",
          text: "Read what the first ten weeks produced. Where organic is close, push content. Where the schedule is empty, run a narrow geo-fenced search campaign on the two or three terms closest to a booking.",
        },
      ],
    },
    sections: [
      {
        type: "h2",
        text: "The order matters more than the list",
      },
      {
        type: "p",
        text: "Almost every new practice does these tasks eventually. The ones that fill faster do them in this order, because each step makes the next cheaper. A verified profile costs nothing and produces calls in weeks. A site without a profile is invisible to the map pack. Ads run before either are in place pay to send traffic to something that cannot convert it.",
      },
      {
        type: "h2",
        text: "Week one: the things that cannot be undone cheaply",
      },
      {
        type: "ul",
        items: [
          "Register the domain in the practice's name, not a vendor's. Check that the exact practice name is not already trademarked in your specialty.",
          "Create the Google Business Profile at the real, staffed address. If you are pre-opening, wait until you can receive patients — an unstaffed address is a suspension risk.",
          "Set the primary category as narrowly as is truthful. Changing it later is possible but resets some of the profile's momentum.",
          "Choose a phone number you will keep. Changing the main number after citations are built is one of the most expensive small mistakes in local SEO.",
          "Open analytics and Search Console properties on accounts the practice owns, not an agency's.",
        ],
      },
      {
        type: "h2",
        text: "The site: eight pages that actually matter",
      },
      {
        type: "ol",
        items: [
          "Homepage that names the specialty and the city in the first sentence a visitor reads.",
          "About page with real names, real credentials as licensed, and a photograph. This page does more trust work than any other.",
          "One page per service you want to be found for. Not a list — a page.",
          "Insurance and fees page. This is consistently among the most visited pages on a practice site.",
          "New patient page: what to bring, how long the first visit takes, forms.",
          "Contact page with an embedded map, parking detail, and a phone number that is a real tel: link.",
          "Privacy policy and notice of privacy practices that match what your site and forms actually do.",
          "An accessibility statement, and a site that genuinely meets the standard it claims.",
        ],
      },
      {
        type: "callout",
        text: "Eight good pages beat forty thin ones. Every page should answer one question a patient genuinely asks before booking.",
      },
      {
        type: "h2",
        text: "What new practices consistently skip",
      },
      {
        type: "ul",
        items: [
          "Tracking. Without it, month four is a guess and you cannot tell which channel deserves the budget.",
          "Reviews from day one. A practice that starts asking in month two enters month twelve with a moat. One that starts in month ten does not.",
          "Referral relationships. In most Florida markets the nearby urgent care and the three primary care offices within two miles are worth more than any ad campaign in year one.",
          "Answering the phone. A missed call is a lost patient, and new practices miss a lot of them. If nobody can answer, forward to a service.",
          "Insurance panel and directory listings, which feed the name, address, and phone consistency Google checks.",
        ],
      },
      {
        type: "h2",
        text: "What to expect by day ninety",
      },
      {
        type: "p",
        text: "A correctly executed first quarter in a mid-competition Florida city usually produces a verified profile appearing for branded and a handful of neighborhood searches, ten to twenty reviews, a site indexed with eight to twelve pages, and a measurable trickle of calls from the profile. That is not a full schedule. It is the foundation that makes months four through nine produce one, and it is roughly a two-to-three-quarter path to a steady flow of new patients from search.",
      },
    ],
    faqs: [
      {
        q: "What should a new medical practice do first for marketing?",
        a: "Claim and verify the Google Business Profile. It is free, it is the highest-leverage hour available, and for local searches it sits above every website in the results. Everything else — site, content, ads — works better once that exists.",
      },
      {
        q: "How much should a new practice budget for marketing in year one?",
        a: "Plan roughly eight to twenty thousand dollars for the site and initial setup, then one to three thousand a month for ongoing work in a typical Florida metro. Ads are optional in the first quarter and useful from the second once tracking can show what they produced.",
      },
      {
        q: "Can I create a Google Business Profile before the practice opens?",
        a: "You can create it, but do not publish an address you cannot staff during the hours you post. Google requires premises staffed during stated hours, and a profile verified at an empty office risks suspension. Add the opening date and publish when you can see patients.",
      },
      {
        q: "How many reviews does a new practice need to compete?",
        a: "Twenty to forty in the first year puts most single-location Florida practices in a competitive position, provided they arrive steadily. Rate matters more than total — four a month for a year beats forty-eight collected in one push.",
      },
      {
        q: "Should a new practice run ads immediately?",
        a: "Usually not in the first thirty days, because there is nothing to send traffic to and no tracking to read. From about day sixty, a narrow campaign on two or three high-intent terms inside a tight radius is a reasonable way to fill early schedule gaps while the organic work matures.",
      },
    ],
    citations: [
      {
        publisher: "Google",
        label: "Guidelines for representing your business on Google",
        href: "https://support.google.com/business/answer/3038177",
      },
      {
        publisher: "U.S. Department of Justice",
        label: "Guidance on web accessibility and the ADA",
        href: "https://www.ada.gov/resources/web-guidance/",
      },
      {
        publisher: "U.S. Dept. of Health & Human Services",
        label: "HIPAA for professionals — privacy",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
      },
    ],
    links: [
      {
        href: "/services/digital-marketing-for-independent-medical-practices",
        label: "Digital Marketing for Independent Practices",
        description: "The full engagement this checklist is a subset of.",
      },
      {
        href: "/locations/west-palm-beach-fl",
        label: "Practice Marketing in West Palm Beach",
        description: "What a new practice faces in Palm Beach County.",
      },
      {
        href: "/locations/orlando-fl",
        label: "Practice Marketing in Orlando",
        description: "A mid-competition market where a good first quarter shows fast.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "Get More Patients From Google Business Profile",
        description: "Step one of this checklist, in full detail.",
      },
      {
        href: "/guides/medical-practice-website-cost",
        label: "What a Medical Practice Website Costs",
        description: "Budgeting the build in days fifteen to thirty.",
      },
          {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description:
          "If the listing is gone from Maps, this is the reinstatement process step by step.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "mens-health-clinic-marketing-playbook",
    keyword: "men's health clinic marketing",
    category: "Playbook",
    title: "Men's Health Clinic Marketing Playbook",
    metaTitle: "Men's Health Clinic Marketing Playbook | Primara",
    metaDescription:
      "How independent TRT and men's health clinics in Florida win search against national franchises — categories, pages, ads, and privacy. (561) 291-2681.",
    answer:
      "An independent men's health clinic wins on specificity and privacy. Set clinic-level Google Business Profile categories, publish one page per protocol with real pricing structure, keep advertising free of any language implying knowledge of a personal condition, and make the first contact feel discreet — because that is what the national franchises do badly.",
    author: "Gio LaRoche",
    publishDate: "2026-09-21T09:00:00Z",
    dateModified: "2026-09-21",
    readMinutes: 7,
    sections: [
      {
        type: "h2",
        text: "Who you are actually competing with",
      },
      {
        type: "p",
        text: "In most Florida metros the men's health search results are held by two groups: national telehealth brands with enormous ad budgets, and franchise clinics with several local addresses. Neither ranks well on specifics. They run broad, generic pages because they operate in forty markets. That is the opening. A single clinic that publishes genuinely local, genuinely specific pages and holds a real map pack position beats a national brand on every search with local intent.",
      },
      {
        type: "h2",
        text: "The profile setup that works",
      },
      {
        type: "ul",
        items: [
          "Primary category: Medical Clinic, or the more specific option where a licensed provider backs it — Endocrinologist and Urologist are only appropriate where one actually practices there.",
          "Secondary categories covering what you truly deliver: Men's Health Physician, Weight Loss Service where medical weight management is offered, Medical Spa where aesthetics are.",
          "Services listed individually with short descriptions. Vague service lists are the most common gap we find on men's clinic profiles.",
          "Attributes patients quietly check: online appointments, same-day visits, private entrance if you have one, languages spoken.",
          "Photos of the actual office. Stock imagery is visible from a mile away in this category and it costs trust.",
        ],
      },
      {
        type: "h2",
        text: "Pages: one per protocol, with the money question answered",
      },
      {
        type: "p",
        text: "Men researching hormone therapy, erectile dysfunction treatment, or medical weight management read carefully and compare quietly before they call. They want to know what the first visit involves, what labs are drawn, who prescribes, how follow-up works, and what it costs per month. A page that answers all five converts several times better than one that ends with a consultation form and no numbers.",
      },
      {
        type: "p",
        text: "Write one page per protocol rather than a combined services page. Name the provider type who supervises, describe monitoring honestly, and describe eligibility plainly — including who is not a candidate. Being straightforward about exclusions reads as credibility in a category crowded with brands that promise everyone everything.",
      },
      {
        type: "callout",
        text: "Say nothing you cannot support. No outcome promises, no performance claims, no before-and-after implications. This category draws regulatory attention precisely because so many advertisers overreach in it.",
      },
      {
        type: "h2",
        text: "Advertising in a restricted category",
      },
      {
        type: "ol",
        items: [
          "Google's personalized advertising policy restricts targeting based on inferred health status, including sexual health. You may bid on what people search; you may not build audiences around what you think they have.",
          "Remarketing from a condition page to a display ad is the classic mistake here. It is restricted, and it is also the fastest way to make a patient feel surveilled.",
          "Ad copy should describe the service, never the reader. 'Testosterone therapy with in-house labs' is fine. Copy that addresses the reader's presumed condition is not.",
          "Keep conversions server-side with no identifiers, for the reasons covered in our tracking guide.",
          "Prescription drug advertising rules apply if you name a specific medication. In most cases, describe the category of treatment rather than the brand.",
        ],
      },
      {
        type: "h2",
        text: "Reviews in a category where nobody wants to be named",
      },
      {
        type: "p",
        text: "Men's health clinics collect far fewer reviews than dermatology or dentistry, for obvious reasons. That is an advantage: the bar in the map pack is low. Ask everyone anyway, make it easy, and accept that many will decline. Two to four a month is often enough to lead the category locally. Respond to every review without confirming that the reviewer was a patient — in this category that discipline matters more than anywhere else.",
      },
      {
        type: "h2",
        text: "The first ninety days",
      },
      {
        type: "ol",
        items: [
          "Weeks one and two: profile audit, categories, services, attributes, real photos, and consistent name, address, and phone details.",
          "Weeks three to six: publish the four core protocol pages with pricing structure and FAQ markup.",
          "Weeks seven to nine: add the neighborhood pages for the cities you genuinely draw from, and start the review ask.",
          "Weeks ten to thirteen: launch a narrow search campaign on the two highest-intent protocol terms, with server-side conversions and no personalized audiences.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a TRT clinic advertise on Google?",
        a: "Yes, on search, bidding on what people type. What is restricted is personalized advertising based on inferred health status, including sexual and reproductive health, and remarketing that implies knowledge of a condition. Naming a specific prescription medication also brings additional requirements, so describe the treatment category instead.",
      },
      {
        q: "Should a men's health clinic publish prices?",
        a: "Publish the pricing structure even if you cannot publish a single number — what the initial visit and labs cost, whether the protocol is billed monthly, and what follow-up includes. Pages that answer cost convert substantially better in a category where patients compare quietly and rarely call to ask.",
      },
      {
        q: "How does an independent clinic beat a national telehealth brand?",
        a: "On local intent. National brands run generic pages across dozens of markets and hold no map pack position in your city. A fully configured profile, real reviews, and specific local pages will outrank them for every 'near me' and city search, which is where the in-person patient is.",
      },
      {
        q: "What categories should a men's health clinic use on Google?",
        a: "Medical Clinic as a safe primary for most, with Men's Health Physician and other specialties added only where a licensed provider genuinely practices there. Adding Urologist or Endocrinologist without one is a suspension risk and, in Florida, a licensing problem.",
      },
      {
        q: "How many reviews does a men's health clinic need?",
        a: "Fewer than most categories, because patients rarely review here. Twenty to forty total, arriving at two to four a month, often leads the local map pack. The discipline that matters is asking everyone and never confirming in a public reply that a reviewer was a patient.",
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
        label: "Guidelines for representing your business on Google",
        href: "https://support.google.com/business/answer/3038177",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Health products compliance guidance",
        href: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance",
      },
    ],
    links: [
      {
        href: "/mens-health",
        label: "Men's Health Practice Marketing",
        description: "The engagement this playbook describes.",
      },
      {
        href: "/locations/west-palm-beach-mens-health-marketing",
        label: "Men's Health Marketing in West Palm Beach",
        description: "Palm Beach County competitive picture.",
      },
      {
        href: "/locations/miami-mens-health-marketing",
        label: "Men's Health Marketing in Miami",
        description: "Where the national brands spend hardest.",
      },
      {
        href: "/guides/hipaa-safe-tracking-for-a-medical-website",
        label: "HIPAA-Safe Tracking for a Medical Website",
        description: "How to measure this category without leaking anything.",
      },
      {
        href: "/guides/how-to-rank-a-med-spa-in-miami",
        label: "How to Rank a Med Spa in Miami",
        description: "The neighborhood-level ranking method, in detail.",
      },
          {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description:
          "A reply template that never confirms anyone was a patient, plus when a review can be removed.",
      },
    ],
  },
];
