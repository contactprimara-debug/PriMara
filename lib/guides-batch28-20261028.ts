// -- Guides batch 28 - 2026-10-28 --
// Guide/AEO pages from the Command Center queue (rows 1331-1340), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides' body prose.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const HHS_PRIVACY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA Privacy Rule guidance",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};
const SAMHSA_HELP = {
  publisher: "SAMHSA",
  label: "Find help",
  href: "https://www.samhsa.gov/find-help",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const APA_ETHICS = {
  publisher: "American Psychological Association",
  label: "Ethical Principles of Psychologists and Code of Conduct",
  href: "https://www.apa.org/ethics/code",
};
const FL_MH_BOARD = {
  publisher: "Florida Board of Clinical Social Work, Marriage and Family Therapy and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your business information",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_SERVICE_AREA = {
  publisher: "Google Business Profile Help",
  label: "Manage service areas on your profile",
  href: "https://support.google.com/business/answer/9157481",
};
const GBP_VERIFY = {
  publisher: "Google Business Profile Help",
  label: "Verify your business on Google",
  href: "https://support.google.com/business/answer/7107242",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_LOCAL = {
  publisher: "Google Search Central",
  label: "Local business structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const TELEHEALTH_HHS = {
  publisher: "Telehealth.HHS.gov",
  label: "Telehealth for patients",
  href: "https://telehealth.hhs.gov/patients",
};
const MEDICARE_TELEHEALTH = {
  publisher: "Medicare.gov",
  label: "Medicare telehealth coverage",
  href: "https://www.medicare.gov/coverage/telehealth",
};
const CMS_NOSURPRISES = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act: understanding costs in advance",
  href: "https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance",
};
const NPPES = {
  publisher: "CMS NPPES",
  label: "National Plan and Provider Enumeration System",
  href: "https://nppes.cms.hhs.gov/",
};
const PLAIN_LANGUAGE = {
  publisher: "plainlanguage.gov",
  label: "Federal plain language guidelines",
  href: "https://www.plainlanguage.gov/",
};
const AHRQ_COORD = {
  publisher: "Agency for Healthcare Research and Quality",
  label: "Care coordination",
  href: "https://www.ahrq.gov/ncepcr/care/coordination.html",
};
const HEALTHY_CHILDREN = {
  publisher: "American Academy of Pediatrics",
  label: "HealthyChildren.org",
  href: "https://www.healthychildren.org/",
};
const ADA_WEB = {
  publisher: "ADA.gov",
  label: "Web accessibility guidance",
  href: "https://www.ada.gov/resources/web-guidance/",
};

export const guidesPartThirtyOne: Guide[] = [
  // ---------------------------------------------------------------- 1335
  {
    slug: "provider-on-leave-notice-for-a-primary-care-practice-without-clinical-claims",
    keyword: "provider on leave notice for a primary care practice without clinical claims",
    category: "How-to",
    title: "Provider on Leave Notice for a Primary Care Practice",
    metaTitle: "Provider on Leave Notice Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can post a provider leave notice: who covers visits, refills and messages, and what to leave out. Call (561) 291-2681.",
    answer:
      "A provider on leave notice tells patients that one clinician is away, who will see them meanwhile, whether the return date is known, and how to reach the office for refills and messages. It gives no health reason for the absence and makes no promises about timing.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("Why a leave notice protects the front desk"),
      p(
        "When a clinician goes on leave, the phone rings with the same three questions all day: is my doctor out, who can I see instead, and what happens to my refill. If the answers live only in the heads of the front desk staff, each caller hears a slightly different version, and some patients quietly book with another practice because nobody gave them a clear plan."
      ),
      p(
        "One short notice, written once and reused, replaces those calls with a link. It also protects the practice, because it says the same thing in the same words to every patient, and it gives search engines and answer tools a dated statement to quote instead of an old team page that still lists someone who is away."
      ),
      h2("What the notice should say"),
      table(
        ["What the patient wants to know", "What the notice can say"],
        ["Is my clinician available?", "Dr. Example is away from the office starting the date shown. We will update this page when the schedule changes."],
        ["Who can I see instead?", "Name the covering clinician or say that any clinician at the practice can see established patients. Offer the booking link or phone number."],
        ["When will my clinician return?", "Give a date only if it is firm. Otherwise write that the return date is not set and that patients will be told here and by the office."],
        ["What about refills and messages?", "Refill requests and portal messages are handled by the care team during the absence. Point to the refill page and portal login."],
        ["What if I need care today?", "Call the office. For an emergency call 911. Link the page that explains when to call the office, urgent care or 911."]
      ),
      h2("Leave out the reason"),
      p(
        "The reason for a leave belongs to the clinician. It may be medical, family, training or something private, and a public page has no business guessing. Write that the provider is away and stop there. Never describe a health condition, a procedure or a family situation, and ask the clinician to read the final wording before it goes live."
      ),
      p(
        "The same restraint applies to patient details. A notice that says certain patients will be called about a condition would reveal protected information. Keep it general, and let clinical conversations happen privately, as covered by the [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html)."
      ),
      h2("Where the notice should appear"),
      ul(
        "A short banner or line on the home page and on the clinician's own bio page, linking to the full notice.",
        "The booking page, so a patient does not choose the absent provider by accident.",
        "The phone greeting, using the same sentences, as described in our guide to [after hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice).",
        "The patient portal message center and the automatic text or email reply, if you use one."
      ),
      h3("Keep Google and the directories in step"),
      p(
        "Your public listings can keep showing the absent clinician as available for months. Check the [updates a practice makes when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice), and decide whether this absence needs a listing change or only a note on the website. For a short absence a note is usually enough. For a long one, ask your marketing partner or whoever manages the profile to review it."
      ),
      h2("Plan the return"),
      p(
        "When the clinician returns, remove the banner the same week, move the notice to a dated archive or delete it, and update the booking page. An old leave notice that stays up becomes a trust problem: it tells a new patient that the practice does not keep its own site current."
      ),
      p(
        "If a leave becomes permanent, switch to a different page entirely. Our guide to a [client transfer notice](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice) shows how a counseling practice words that change, and the same structure works for primary care."
      ),
    ],
    faqs: [
      {
        q: "Should the notice name the clinician who is away?",
        a: "Yes, because patients search for and book by name. Use the name exactly as it appears on your team page. Do not name the reason, and do not name patients, appointments or departments affected beyond the schedule itself.",
      },
      {
        q: "Do we need a notice for a one week absence?",
        a: "Usually a line on the booking page and a phone greeting are enough. A full notice page earns its place when the absence lasts several weeks, when appointments are being moved, or when patients ask the same questions repeatedly.",
      },
      {
        q: "Can the notice promise that the covering clinician is equally available?",
        a: "Avoid comparisons and promises. Say who is covering and how to book, and let the schedule speak. Claims about quality or speed are hard to keep and invite complaints if a patient waits longer than expected.",
      },
      {
        q: "What if we do not know when the clinician will return?",
        a: "Say that the return date is not set and that patients will be told here and by the office. Do not guess a date. A missed date damages trust more than an honest statement that the date is open.",
      },
      {
        q: "Does a leave notice help the practice show up in search?",
        a: "It answers a question patients actually type, such as whether a named doctor is still seeing patients, and it gives answer engines a dated, plain statement. It works best as one page linked from the bio and booking pages.",
      },
    ],
    citations: [HHS_PRIVACY, AHRQ_COORD, GBP_GUIDELINES],
    links: [
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "Provider Joins Or Leaves", description: "What to update online." },
      { href: "/guides/introducing-a-new-provider-to-patients-online-for-a-primary-care-practice-without-clinical-claims", label: "Introducing A New Provider", description: "Announcing a clinician to patients." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Closure Notices", description: "Website, profile and phone greeting." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1331
  {
    slug: "google-business-profile-for-a-telehealth-only-counseling-practice-without-a-storefront",
    keyword: "google business profile for a telehealth only counseling practice without a storefront",
    category: "How-to",
    title: "Google Business Profile for a Telehealth Only Practice",
    metaTitle: "Google Business Profile for a Telehealth Only Practice",
    metaDescription:
      "Set up a Google Business Profile for a telehealth only counseling practice with no storefront: service area, hidden address, wording. Call (561) 291-2681.",
    answer:
      "A telehealth only counseling practice can use a Google Business Profile as a service area business: hide the home address, list the areas where clients are located during sessions, and describe video sessions in plain words. Google's guidelines decide eligibility, so read them before you apply.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("The problem with a profile and no office"),
      p(
        "A counselor who sees every client by video often works from a spare room. There is no door a client can walk through, no sign and no waiting room. Google still shows local results for people searching therapist near me, and a practice with no profile does not appear in them. The question is how to be listed without lying about a location that does not exist."
      ),
      p(
        "Google's rules draw the line. A business that serves customers at their location, or serves them remotely, can be listed as a service area business, and it should not publish a home address to the public. A practice that rents a real office and meets clients there is a storefront. Which one you are decides everything below."
      ),
      h2("Decide which kind of listing you qualify for"),
      table(
        ["Your situation", "What to expect"],
        ["All sessions by video, no client visits", "Ask Google whether a service area listing is open to you, read its eligibility rules first, and hide the address if one is required for verification."],
        ["Video sessions plus an office clients visit", "A storefront listing with the office address, plus telehealth listed as an option in the description."],
        ["Shared or virtual office address", "Read Google's rules on staffed hours and signage before using it. See our guide to a [shared or virtual office address](/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile)."],
        ["Home office, no client visits", "Hide the address from public view. Never publish a home address clients cannot visit."]
      ),
      h2("Set up the pieces that matter"),
      ol(
        "Use your real practice name as it appears on your website and license. Do not add city names or keywords to the name field.",
        "Choose the primary category that matches the service, such as counselor or mental health service, and check Google's current category list.",
        "Enter the service area as the places your clients live, not a list of every nearby town. Over-claiming areas can read as spam.",
        "Verify the profile the way Google offers, which may be a video call or a code. Keep the process private and do not share codes.",
        "Write the description in plain words: video sessions, who you see, how to book. Leave out outcomes and clinical promises."
      ),
      h3("Say it clearly on the website too"),
      p(
        "Your website should state, in the footer and on the contact page, that sessions are held by video and which states you can serve. Our guide to a [licensure and states served page](/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice) shows how to word that. Keep the name, phone number and service area identical across the site and the profile, since [name, address and phone consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) is what ties them together."
      ),
      h2("Wording that stays honest"),
      ul(
        "Say video sessions, not in person visits, and do not use a photo of a building that is not yours.",
        "Describe the service area as where clients are located during sessions, because licensure follows the client's location.",
        "Skip words such as best, leading and guaranteed. They are hard to defend and can trigger edits.",
        "Put crisis information, including the 988 Lifeline, on the website, because the profile is not the place for it."
      ),
      p(
        "Photos can be a headshot and a simple image of the video session setup with no client visible. Do not post stock images that suggest an office you do not have."
      ),
      h2("Check it every quarter"),
      ul(
        "Confirm the profile still shows the service area and hidden address you chose.",
        "Look for suggested edits that add an address or change the category, and decline anything inaccurate.",
        "Read your reviews and reply with care, never confirming that anyone was a client.",
        "Compare the profile with the website for name, phone number and hours."
      ),
      p(
        "Ten minutes each quarter is enough. A telehealth profile with no office is easier for an outsider to damage by suggesting a wrong address, so a regular look protects it."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling practice with no office have a Google Business Profile?",
        a: "Often yes, as a service area business, but eligibility is Google's decision. Read the current guidelines, apply honestly, and expect a verification step. Do not invent an address or use one you cannot defend.",
      },
      {
        q: "Should we hide the home address?",
        a: "If sessions never happen at your home, hide it from public view and use the service area setting. A home address on a public profile is a privacy risk for you and does not help clients, who cannot visit.",
      },
      {
        q: "What should the service area say for a video practice?",
        a: "List the areas where your clients are located during sessions, and only where your license allows you to practice. A short, accurate list is more credible than a long list of surrounding cities.",
      },
      {
        q: "Will a profile bring us video clients from outside Florida?",
        a: "Only if your clinicians are licensed or authorized in the state where the client sits. State this plainly on the site, and see the licensure guide before you list areas outside Florida.",
      },
      {
        q: "What if Google asks for a storefront?",
        a: "Do not invent one. If you do not qualify, you can still publish the website with local business schema, add listings in therapist directories, and ask Google through its support channel instead of listing a false address.",
      },
    ],
    citations: [GBP_GUIDELINES, GBP_SERVICE_AREA, GBP_VERIFY, FL_MH_BOARD],
    links: [
      { href: "/guides/service-area-vs-storefront-google-business-profile-for-a-medical-practice", label: "Service Area Vs Storefront", description: "Which listing type you qualify for." },
      { href: "/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile", label: "Shared Or Virtual Office Address", description: "What Google allows." },
      { href: "/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice", label: "Licensure And States Served", description: "The telehealth wording." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1336
  {
    slug: "suite-number-and-floor-on-google-business-profile-for-a-practice-in-a-medical-building",
    keyword: "suite number and floor on google business profile for a practice in a medical building",
    category: "How-to",
    title: "Suite Number and Floor on Google Business Profile",
    metaTitle: "Suite Number and Floor on Google Business Profile Listings",
    metaDescription:
      "How a practice in a shared medical building should write its suite and floor on Google Business Profile and its site so they match. Call (561) 291-2681.",
    answer:
      "Write the suite or floor on the second address line of the Google Business Profile, use the same abbreviation and order on your website and directories, and add a plain sentence that tells visitors which entrance and floor to use. Do not put the suite in the business name.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("Why the suite line causes more trouble than it seems"),
      p(
        "A practice in a large medical building has two addresses in practice: the building that Google can place on the map, and the suite where the patient actually needs to go. If the suite is missing, patients walk into the lobby of a building with fifty offices and call the front desk from the parking area. If it is written three different ways across the web, directories and data aggregators treat the listings as different businesses."
      ),
      p(
        "The fix is small. It is also one of the cheapest ways to reduce no-shows and late arrivals for new patients, because the first visit is when people are least sure where they are going."
      ),
      h2("Where each piece goes"),
      table(
        ["Field or page", "What to enter"],
        ["Profile address line 1", "The street address of the building, exactly as the postal service writes it."],
        ["Profile address line 2", "Suite or floor only, such as Suite 210. Use the same abbreviation everywhere."],
        ["Business name", "The practice name only. Never add the suite or floor to the name."],
        ["Website footer and contact page", "The same two lines in the same order, and a link that opens directions."],
        ["Directory listings", "Copy the exact text from your master record. Do not retype it."]
      ),
      h2("Choose one format and keep it"),
      p(
        "Decide whether the suite is written Suite 210, Ste 210 or #210, and use that choice everywhere. Our guide to [name, address and phone consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains why small differences split your listings. Write the choice down in the same document that holds your phone number and hours, so the next person who updates a directory copies it."
      ),
      h3("Handle a move inside the same building"),
      p(
        "When a practice changes suites, update the profile, the website, schema and each directory on the same day, and keep a short note on the contact page for a few months that says the office moved to a new suite in the same building. Ask people who can edit your listings to review [suggested edits](/guides/how-to-handle-google-business-profile-suggested-edits), because the old suite often comes back."
      ),
      h2("Tell visitors how to find the door"),
      ul(
        "Add a sentence on the contact page that names the entrance, the floor and where to check in, based on what you have verified in person.",
        "Mention elevator access and accessible parking only if you have confirmed them, and link the [accessibility information](https://www.ada.gov/resources/web-guidance/) you publish.",
        "If the building has a security desk or a directory, say so and tell patients what name to look for.",
        "Add a photo of the entrance and the suite door to the profile, with no patients visible."
      ),
      p(
        "Do not invent landmarks, highway exits or drive times. State only the address, the suite and the details someone from the practice has confirmed on site."
      ),
      h2("A fifteen minute audit"),
      ol(
        "Open your Google Business Profile and read the address exactly as it shows, including the second line.",
        "Open the website footer, the contact page and the schema markup and compare them with the profile, character by character.",
        "Search the practice name and phone number and note every directory result that shows a different suite or floor.",
        "Check the map pin by zooming in. If it points at the wrong side of the building, ask Google for a correction through the profile.",
        "Write the final text in your master record and send it to whoever updates the other listings."
      ),
      p(
        "Repeat the audit after any move, rename or change of building management. It rarely finds more than two or three wrong listings, and fixing them is faster than answering a day of calls from lost patients."
      ),
    ],
    faqs: [
      {
        q: "Should the suite number be part of the business name on Google?",
        a: "No. The name field is for the real practice name only. Adding a suite or floor to the name breaks Google's guidelines and can lead to the profile being suspended or the edit being reversed.",
      },
      {
        q: "What if our building has several floors and wings?",
        a: "Use the second address line for the suite number, and explain the wing or entrance in a sentence on the website. Keep the profile line short and put the longer directions on the page where people read them.",
      },
      {
        q: "Does the suite affect rankings?",
        a: "Not directly in a way anyone can measure. It supports consistent listings, which helps Google treat them as one business, and it gets patients to the right door, which cuts missed first visits.",
      },
      {
        q: "Should the suite appear in schema markup?",
        a: "Yes. Put the building address and the suite together in the street address field of your local business markup, in the same order as the visible text, so that page and profile agree.",
      },
      {
        q: "Who should own this task in the practice?",
        a: "One named person, usually the office manager, should hold the master record and approve every change. It takes about ten minutes a year and prevents the same wrong suite from returning from old data sources.",
      },
    ],
    citations: [GBP_EDIT, GBP_GUIDELINES, GOOGLE_LOCAL],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "What breaks it and how to fix it." },
      { href: "/guides/how-to-handle-google-business-profile-suggested-edits", label: "Suggested Edits", description: "Stop wrong edits from sticking." },
      { href: "/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile", label: "Shared Office Address", description: "Shared buildings and Google." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1340
  {
    slug: "medication-list-and-records-to-bring-to-a-first-telehealth-visit-page-for-a-primary-care-practice-without-clinical-advice",
    keyword: "medication list and records to bring to a first telehealth visit page for a primary care practice without clinical advice",
    category: "How-to",
    title: "First Telehealth Visit: What to Have Ready",
    metaTitle: "What to Have Ready for a First Telehealth Visit Page",
    metaDescription:
      "How a primary care practice can tell new patients what to have ready for a first video visit, including a medication list. Call (561) 291-2681.",
    answer:
      "A first telehealth visit page tells new patients what to gather before the video call: photo ID, insurance card, a current medication list, names of other clinicians, prior records they hold, and a quiet place with a working device. It gives no medical advice and links to the technology help page.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("A first video visit goes wrong in the first five minutes"),
      p(
        "A new patient joins a video visit with no medication list, a cracked phone and a toddler in the background. The clinician spends the first ten minutes asking for what could have been ready, and the real conversation starts late or gets rescheduled. A page that says exactly what to have ready is one of the quickest ways to save appointment time."
      ),
      p(
        "It is also a page that patients search for. People type what do I need for a telehealth visit, and a plain answer on your own site beats a general article from somewhere else."
      ),
      h2("What the checklist should contain"),
      table(
        ["Item to have ready", "What to tell the patient"],
        ["Photo ID and insurance card", "Have both within reach. Say whether the office needs photos uploaded through the portal before the visit."],
        ["Current medication list", "Write down every medicine, vitamin and supplement, with the dose as printed on the label. Or keep the bottles beside you."],
        ["Other clinicians and pharmacy", "Names of other doctors and the pharmacy you use, so the office can coordinate."],
        ["Records you already hold", "Any visit summaries or test results you have, uploaded ahead of time if the portal allows."],
        ["Device and connection", "A charged phone, tablet or computer with a camera and speaker, and a test of the visit link."],
        ["A quiet, private place", "Choose a room where you can talk freely, and tell the office if you need an interpreter."]
      ),
      h2("Keep the page to logistics"),
      p(
        "The page lists what to bring. It does not tell anyone what to take, what to change or what a symptom means. Add one sentence that says the clinician will review the medication list during the visit and that nobody should change a prescription because of a web page. If a patient has a health emergency, the page should say to call 911, not to join the video visit."
      ),
      p(
        "Link to the [telehealth visit instructions](/guides/telehealth-visit-instructions-page-for-a-primary-care-practice) for technical steps, and to the [first appointment checklist](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) for in-person visits so patients see one coherent set of instructions."
      ),
      h3("A simple way to write the medication line"),
      ul(
        "Ask for the name as written on the label, the strength and how the patient takes it.",
        "Tell patients that a photo of each label is fine if writing a list is hard.",
        "Include over the counter products, patches, inhalers and supplements.",
        "Say that the office does not need the list to book, only to prepare."
      ),
      h2("Make the page easy to use on a phone"),
      p(
        "Most patients read it on a phone while they are booking, so use short bullets, a tap-to-call number and a button to the portal. Keep the font large and the contrast high, as described in the [ADA web accessibility guidance](https://www.ada.gov/resources/web-guidance/). Offer a phone-only option for patients who cannot use video, and say what the office does if the video fails."
      ),
      p(
        "Send the same checklist in the reminder text for a first visit, ideally two days ahead, using the wording from your [new patient welcome message](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) so the experience feels like one conversation."
      ),
      h2("What the office does after the visit"),
      ul(
        "The office records the medication list the patient shared and confirms the pharmacy.",
        "Any records the patient holds are added to the chart if the patient agreed to share them.",
        "Patients receive a visit summary through the portal, if the practice provides one.",
        "A follow-up message explains how to reach the office with questions."
      ),
      p(
        "Telling patients what happens next lowers anxiety about the first video call. Keep these lines factual and do not promise timing the office cannot meet. If something changes, such as a delay in portal summaries, update the page instead of leaving patients to wonder."
      ),
    ],
    faqs: [
      {
        q: "Does the page need to explain how to prepare medically?",
        a: "No. Keep it to what to have ready and how to join. Any advice about conditions, tests or medicines belongs to the clinician during the visit. Say clearly that the page is logistics and not medical advice.",
      },
      {
        q: "Should patients upload their records before a visit?",
        a: "Only if your portal supports secure uploads. Do not ask patients to email records unless your office has a secure option. State plainly where to send them or to bring them to the visit.",
      },
      {
        q: "What if a patient does not know their medications?",
        a: "Tell them a photo of each label or the pharmacy's printed list works. The clinician and staff can review it together during the visit, and the office can confirm with the pharmacy if the patient allows it.",
      },
      {
        q: "How long should the checklist be?",
        a: "Six or seven items is enough. A long list makes patients skip it. Put the most important items first, which are ID, insurance and the medication list, and keep the rest in short lines.",
      },
      {
        q: "Should the page mention insurance coverage of telehealth?",
        a: "Only in general terms, and link to the payer's own guidance such as Medicare's telehealth page. Coverage varies by plan, so tell patients to call the office or their insurer to confirm before the visit.",
      },
    ],
    citations: [TELEHEALTH_HHS, MEDICARE_TELEHEALTH, ADA_WEB, HHS_PRIVACY],
    links: [
      { href: "/guides/telehealth-visit-instructions-page-for-a-primary-care-practice", label: "Telehealth Visit Instructions", description: "Joining a video visit." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "First Appointment Checklist", description: "What new patients bring." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "The first message a patient sees." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1337
  {
    slug: "fee-change-notice-letter-for-a-counseling-practice-without-legal-advice",
    keyword: "fee change notice letter for a counseling practice without legal advice",
    category: "How-to",
    title: "Fee Change Notice Letter for a Counseling Practice",
    metaTitle: "Fee Change Notice Letter for a Counseling Practice",
    metaDescription:
      "How a counseling practice can announce a session fee change to current clients: timing, plain wording and where to post it. Call (561) 291-2681.",
    answer:
      "A fee change notice tells current clients the new session fee, the date it starts, what stays the same, and who to call with questions. Send it in writing well before the date, post the same wording on your fees page, and have an attorney or your licensing board's rules checked first.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Money is the part of therapy clients ask about last"),
      p(
        "Clients rarely bring up cost during a session, but a raised fee with no warning can end a good therapy relationship in one email. A clear, early and respectful notice protects that relationship. It also protects you, because a client who learned about a change from the invoice may not believe it was planned."
      ),
      p(
        "This guide is about wording and placement, not about what you are allowed to do. Your signed consent forms, your insurance contracts and your licensing board's rules decide what notice you owe. Read them, then ask your attorney to review the final letter."
      ),
      h2("What the letter should contain"),
      table(
        ["Part of the letter", "Plain wording to aim for"],
        ["The change", "Starting on the date shown, the fee for a session of the usual length will be the new amount."],
        ["The date", "Give a firm start date and say the current fee applies until then."],
        ["What stays the same", "Session length, cancellation terms and scheduling are unchanged, unless they are."],
        ["Options", "Describe any sliding scale, reduced fee or payment plan the practice really offers, and how to ask."],
        ["Insurance clients", "If a plan sets your rate, say that this letter applies only to clients who pay out of pocket."],
        ["Questions", "Give a name, a phone number and a good time to call. Invite the client to talk before the date."]
      ),
      h2("Timing and delivery"),
      ol(
        "Decide the effective date first, then count back far enough to give clients real time to think. Your consent paperwork may set a minimum.",
        "Tell clients privately, by the method they already agreed to, rather than by a public post.",
        "Mention it at a session when possible, so the letter is a confirmation and not a surprise.",
        "Update the fees page on the date the change begins and keep a dated note of the change.",
        "Keep a copy of what was sent and when."
      ),
      h3("What to leave out"),
      p(
        "Skip long justifications about the cost of rent and training. One short sentence of context is enough. Do not mention a specific client, a diagnosis or a treatment plan, and do not suggest that results depend on the fee. Avoid wording that could read as pressure to keep attending."
      ),
      h2("Update the public page the same day"),
      p(
        "Your public fees page should match the letter on the day the new fee starts. Our guide to a [therapy fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) explains how to word sliding scale and out of network details. If you provide estimates to clients without insurance, the notice should match the [good faith estimate](/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice) the practice gives."
      ),
      p(
        "Check the same numbers in your booking tool, your intake form, your email signature and your Google Business Profile description, since an old figure in any of them will bring angry calls."
      ),
      h2("A sample outline in plain words"),
      ol(
        "Open with thanks for the client's time and a one-sentence statement of what is changing.",
        "State the new fee and the date it begins, and say that sessions before that date stay at the current fee.",
        "Explain in one sentence why the practice made the change, without detail.",
        "List the options you really offer and how to ask about them privately.",
        "Close with a name, a phone number and an invitation to talk before the date."
      ),
      p(
        "Keep the whole letter to a single page. Clients should be able to read it in under two minutes, and nothing in it should need a follow-up call to understand. After it goes out, track how many questions arrive and which sentence caused them, then improve the wording for next time."
      ),
    ],
    faqs: [
      {
        q: "How much notice should clients get?",
        a: "Your consent paperwork and licensing rules may set a minimum, so check them with an attorney. Beyond that, give enough time for a client to ask questions and decide, and tell people in writing and, if you can, in session.",
      },
      {
        q: "Should the letter apologize for the change?",
        a: "A short, calm statement is enough. Over-apologizing sounds uncertain, and over-explaining invites debate. Say what is changing, when it starts and what choices the client has, then invite a conversation.",
      },
      {
        q: "Can we publish the new fee only on the website?",
        a: "No. Current clients should hear it directly, by the method they agreed to. The website update confirms it for new clients and search engines, but is not a substitute for telling the people it affects.",
      },
      {
        q: "What if a client cannot afford the new fee?",
        a: "Say honestly what options exist, such as a reduced fee slot, a referral list or a payment plan, and do not promise any you cannot offer. Keep the conversation private and respectful of the client's situation.",
      },
      {
        q: "Does this apply to insurance clients?",
        a: "Usually the contract rate with the payer applies to those sessions, so the letter should say it covers self-pay clients. Check your payer agreements before wording this part, and have the contract reviewed if unsure.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, CMS_NOSURPRISES, FL_MH_BOARD],
    links: [
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale and superbills." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Notice", description: "The estimate page." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Related terms clients ask about." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1332
  {
    slug: "returning-client-after-a-long-break-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "returning client after a long break page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Returning to Counseling After a Long Break Page",
    metaTitle: "Returning to Counseling After a Break: Practice Page",
    metaDescription:
      "How a counseling practice can welcome a former client back after a long break: repeat paperwork, rebooking and honest wording. Call (561) 291-2681.",
    answer:
      "A returning client page tells former clients how to restart: contact the office, confirm whether the clinician is still taking clients, update intake and consent forms, and book a first visit. It makes no promise about the same pace or outcome and sends anyone in crisis to 988.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("The client who comes back often feels awkward"),
      p(
        "People leave counseling for many reasons: a move, a busy season, a change of insurance, or simply feeling done for now. When they think about returning, many hesitate because they are unsure whether the therapist will remember them, whether they must start over, or whether they will be judged for leaving. A single page can answer those worries before the call."
      ),
      p(
        "It is also a page people search for. Returning to therapy after a break is a common worry, and a practice that answers it plainly is easier to choose than one that says nothing."
      ),
      h2("What the page should explain"),
      table(
        ["Question a returning client has", "Plain answer to publish"],
        ["Can I go back to my old therapist?", "Contact the office. We will check whether that clinician is taking returning clients and offer other options if not."],
        ["Do I need new paperwork?", "Intake, consent and contact forms are updated each time, so please plan to complete them again."],
        ["Is the fee the same?", "Fees may have changed since your last visit. The current fees are on our fees page, and the office can answer questions."],
        ["Do I need a first-visit appointment?", "Many practices schedule a short returning-client visit to update information. Say what yours does."],
        ["What if my insurance changed?", "Tell us before the visit so the office can check benefits. Policies vary by plan."]
      ),
      h2("Be clear about what has changed"),
      p(
        "A practice changes over time. Hours, fees, locations, the telehealth platform and the people on the team may be different, and a client who last visited two years ago should learn that from the page and not from the first appointment. Add a line that says when the page was last reviewed and link the places that change most often."
      ),
      p(
        "If the client was formally discharged, point to your [discharge and termination policy](/guides/client-discharge-and-termination-policy-page-for-a-counseling-practice-without-clinical-claims) so they know whether a new intake is required. If the clinician has left the practice, link the [client transfer notice](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice) and offer a warm handoff to someone else."
      ),
      h3("How to write the welcome"),
      ul(
        "Use a warm, short opening such as: You are welcome to come back, and there is no need to explain why you stopped.",
        "Avoid words that imply failure or relapse, and never describe symptoms.",
        "Give a direct phone number, a booking link and the expected response time.",
        "Remind clients that the office can discuss the first step before booking."
      ),
      h2("Handle records and waitlists honestly"),
      p(
        "Say how long the practice keeps records and how a client can ask for them, using only what your policy states. If you keep a waitlist, link the [waitlist page](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) and say whether returning clients are seen first. Do not promise priority unless you give it."
      ),
      p(
        "Put the 988 Suicide and Crisis Lifeline and 911 at the bottom of the page. A person who writes to say they are coming back may be struggling right now, and the page should not leave them waiting for an appointment alone."
      ),
      h2("A checklist for the office"),
      ol(
        "Decide who answers returning-client calls and give them the same short script.",
        "Keep a current list of which clinicians are taking returning clients this month.",
        "Send updated forms by the secure method clients already use, and set a deadline before the visit.",
        "Tell the client the current fee and the cancellation terms before the first session back.",
        "Review the page each quarter and note the date at the bottom."
      ),
      p(
        "These five steps take less than an hour to set up, and they turn a nervous phone call into a routine one. A returning client who feels welcomed is also more likely to tell a friend, which is how counseling practices grow."
      ),
    ],
    faqs: [
      {
        q: "Should a returning client page promise the same therapist?",
        a: "No. The clinician may have a full schedule, a new role or have left. Say that the office will check availability and offer alternatives. Promising a specific person is an easy way to disappoint someone who is already nervous.",
      },
      {
        q: "Do returning clients need a new consent form?",
        a: "Most practices ask for updated forms because contact details, insurance and policies change. State what your office requires and let clients complete forms ahead of the visit if your system allows it.",
      },
      {
        q: "Can we show the page to clients who were discharged?",
        a: "Yes, as a general page on the website. Do not send individual notices that reveal a client's history to a shared inbox. Contact each person privately using the contact method they agreed to.",
      },
      {
        q: "Should we mention the reasons people leave therapy?",
        a: "Keep it light and non-judgmental. A sentence that says people leave for many reasons and are welcome back is enough. Avoid lists of causes or anything that sounds like a diagnosis or a clinical pattern.",
      },
      {
        q: "Where should the page be linked from?",
        a: "From the new client page, the contact page and the booking tool, plus the reminder emails to inactive clients if you send them. One page linked from three places works better than several copies.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, LIFELINE, SAMHSA_HELP],
    links: [
      { href: "/guides/client-discharge-and-termination-policy-page-for-a-counseling-practice-without-clinical-claims", label: "Discharge And Termination Policy", description: "How a counseling practice words it." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page", description: "When the caseload is full." },
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "Sending forms before session one." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1338
  {
    slug: "new-year-availability-announcement-for-a-counseling-practice",
    keyword: "new year availability announcement for a counseling practice",
    category: "How-to",
    title: "New Year Availability Announcement for Counseling",
    metaTitle: "New Year Availability Announcement for Counseling",
    metaDescription:
      "How a counseling practice can announce January openings: slots, waitlists, booking and honest wording, with no promises of results. Call (561) 291-2681.",
    answer:
      "A new year availability announcement tells prospective clients that the practice has openings, how to book, which days and formats are available, and what the waitlist looks like if it is full. It makes no promises about results and sends anyone in crisis to 988.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("January is when people start looking"),
      p(
        "Many people decide in the first weeks of a year to find support, and others return after the holidays. Therapists notice the phones filling up and then discover their schedule is not what the website says. An announcement posted in December, with real openings, gets ahead of that rush and sends people to the right place."
      ),
      p(
        "It also needs to be honest. A page that says openings available while every clinician is full costs trust, and a page that says nothing loses searches for therapist with openings near me."
      ),
      h2("What the announcement should say"),
      table(
        ["Part", "Example wording to adapt"],
        ["Openings", "We are accepting new clients beginning the first week of January, in person and by video."],
        ["Days and times", "List the days and general time windows the practice really has, such as weekday mornings or early evenings."],
        ["Who is open", "Name each clinician with openings, or say the office will match the client with an available clinician."],
        ["How to book", "A booking link, a phone number and the response time you can keep."],
        ["If full", "Say that a waitlist is open and describe how it works. Link the waitlist page."],
        ["Crisis", "If you are in crisis, call or text 988 or call 911. Do not wait for an appointment."]
      ),
      h2("Keep the numbers true and the dates real"),
      p(
        "Check the schedule with each clinician before you write anything. If the practice has two openings, say so, and update the page when they fill. Our guide to [wait times and schedule availability messaging](/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises) explains how to describe availability without guarantees, and the [waitlist page guide](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) covers what to do once slots fill."
      ),
      h3("Where to post it"),
      ul(
        "The home page and the new client page, with a date at the top.",
        "A Google Business Profile post, with a booking button and a photo of the practice or team.",
        "The email signature and the phone greeting, using the same wording.",
        "Remove or update the announcement as soon as the slots are gone."
      ),
      h2("What to avoid"),
      p(
        "Avoid resolutions language that promises change, such as a fresh start or a better you, and avoid language about specific problems. A neutral tone works better for a broad audience and keeps the page free of clinical claims. Do not offer discounts in a way that could pressure someone into starting."
      ),
      p(
        "Look at the page the way a first-time visitor would on a phone. The booking button should sit near the top, and the page should not hide the phone number behind a form. If your January schedule changes for the holidays, link the [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) so people understand when the office answers."
      ),
      h2("A short checklist before you publish"),
      ol(
        "Confirm each clinician's real openings for the first four weeks of the year and write down the days and time windows.",
        "Decide the exact date the announcement goes live and the date you will review it next.",
        "Check that the booking link works on a phone and that the confirmation message names the practice.",
        "Make sure the phone greeting, the home page and the profile post all say the same thing about availability.",
        "Ask one person outside the practice to read it and tell you what they think the next step is."
      ),
      p(
        "That last test catches most problems. If a reader cannot say in ten seconds how to book, the page needs another pass. Keep a copy of each version with its date so next year's announcement starts from something proven instead of a blank page."
      ),
    ],
    faqs: [
      {
        q: "When should the announcement go live?",
        a: "Two to four weeks before the first January slot opens, so people who search in December can find it. Set a reminder to review it weekly and remove or change it as soon as the information is out of date.",
      },
      {
        q: "Should we name how many openings we have?",
        a: "Only if the number is true and you will keep it current. A phrase such as a few openings is vague and invites confusion. When in doubt, describe the days and times and invite visitors to call.",
      },
      {
        q: "Can the announcement mention new year goals?",
        a: "Keep it neutral. Avoid promises about change, results or feeling better. Stick to the logistics of getting started, which is what a person ready to book actually needs.",
      },
      {
        q: "What if we have a waitlist only?",
        a: "Say so directly and explain how it works, including how people are contacted and roughly how often the list is reviewed. Do not give a wait time unless you can keep it, and link to other resources if you can.",
      },
      {
        q: "Does this also work for a primary care practice?",
        a: "The structure does, though the wording changes. A primary care version would speak about new patient appointments, annual visits and the booking process, and would follow the same rules about honesty and no health claims.",
      },
    ],
    citations: [LIFELINE, SAMHSA_HELP, GBP_GUIDELINES, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page", description: "When the caseload is full." },
      { href: "/guides/back-to-school-counseling-availability-announcement-for-a-counseling-practice", label: "Back To School Announcement", description: "The autumn version." },
      { href: "/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises", label: "Wait Times Messaging", description: "Availability without promises." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1333
  {
    slug: "children-in-the-waiting-room-policy-page-for-a-counseling-practice",
    keyword: "children in the waiting room policy page for a counseling practice",
    category: "How-to",
    title: "Children in the Waiting Room Policy for Counseling",
    metaTitle: "Children in the Waiting Room Policy Page for Counseling",
    metaDescription:
      "How a counseling practice can explain whether children may wait in the lobby, who supervises them, and what to do if childcare fails. (561) 291-2681",
    answer:
      "A children in the waiting room policy tells clients whether a child may wait in the lobby, that the adult is responsible for supervision, whether staff can watch children, and what to do if childcare falls through. It states the rule plainly and offers video sessions as an alternative.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("A question that arrives at the front desk"),
      p(
        "Parents who book counseling often ask the same thing on the phone: can I bring my child, and where do they sit? Without a written answer, front desk staff improvise, and clients hear different rules on different days. A single policy page replaces that guesswork and prevents awkward conversations in a lobby."
      ),
      p(
        "The page does not need to be long. It needs to say what is allowed, who is responsible, and what the practice cannot do. The tone should be kind, because the person reading may already be stretched thin."
      ),
      h2("Decide your actual rule first"),
      table(
        ["Option", "What the page can say"],
        ["Children may wait with an adult companion", "A second adult must stay with the child in the waiting room throughout the session."],
        ["Older children may wait alone", "State the minimum age only if the practice, its insurer and local rules allow it. Have it reviewed."],
        ["No children in the lobby", "Please arrange childcare. If that falls through, call us and we will offer a video session or a new time."],
        ["Child attends the session", "Describe it on a separate family or child therapy page, since that is a clinical service."]
      ),
      h2("Say who is responsible"),
      p(
        "The most important sentence on the page is about supervision. State that the staff are not able to supervise children, that an adult remains responsible for any child in the waiting room, and that the office is not a childcare service. This protects the practice and sets an expectation without blame. Ask your insurance carrier or attorney to review the exact wording."
      ),
      p(
        "Confirm the practical details on site before you publish them: whether there is a place to sit, whether toys or screens are provided, and whether the lobby is shared with other offices. Do not describe features you have not checked. If you list something such as books or a play area, make sure it is available and clean."
      ),
      h3("Offer an alternative"),
      ul(
        "Video sessions for clients who cannot arrange childcare, with a link to the [telehealth page](/guides/telehealth-visit-instructions-page-for-a-therapy-practice).",
        "A reschedule option with no extra fee when childcare falls through, if that is your policy.",
        "A list of community childcare resources, only if the practice maintains it.",
        "A clear sentence explaining how the policy links to the [cancellation and no-show policy](/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice)."
      ),
      h2("Connect the page to the rest of the visit"),
      p(
        "Link the policy from the first session page, the booking confirmation and the reminder text. Our guide to a [waiting room and check-in expectations page](/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice) shows how primary care practices word similar details, and the same structure works for counseling. Keep the language gentle and free of any comment on parenting."
      ),
      h2("Wording you can adapt"),
      ul(
        "Our waiting room is a quiet space shared with other clients. A child who waits here must be with an adult who stays for the whole session.",
        "Our staff are not able to watch children. If childcare falls through, call us and we will offer a video session or help you find a new time.",
        "Please let us know ahead of time if you plan to bring a child, so we can tell you what is available that day.",
        "If you need a space to feed or change a baby, ask at check-in and we will tell you what we can offer."
      ),
      p(
        "Read each line aloud with the front desk and change anything they would not say naturally. A policy that sounds like a warning drives families away, while one that sounds like a plan keeps them. Review it once a year, and update it the same day if the lobby, the lease or the insurance terms change."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling practice ban children from the waiting room?",
        a: "A practice can set its own policy within the rules that apply to it, such as its lease, insurance and local requirements. Have the wording reviewed, and always offer a workable alternative so families are not locked out of care.",
      },
      {
        q: "Should the page give an age limit?",
        a: "Only if your insurer or attorney has reviewed the age and you can enforce it. An age on a public page becomes a promise, and exceptions cause friction. Many practices simply require an adult with any child.",
      },
      {
        q: "What if a child becomes upset in the lobby?",
        a: "The responsible adult handles it. The page can say that staff will help find a quiet space if one exists, but cannot take responsibility. It should not say anything about the child's behavior or needs.",
      },
      {
        q: "Does this page matter for search?",
        a: "Parents do search for whether they can bring a child to counseling. A clear answer helps people book with confidence and can be quoted by answer engines. It works best as one short page linked from the new client page.",
      },
      {
        q: "Do we need a separate policy for video sessions?",
        a: "Video sessions have their own considerations, such as privacy at home. Keep this page about the physical waiting room and link to the telehealth page for the video rules, so each page stays focused.",
      },
    ],
    citations: [HEALTHY_CHILDREN, ADA_WEB, PLAIN_LANGUAGE, ACA_ETHICS],
    links: [
      { href: "/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice", label: "Waiting Room Expectations", description: "Check-in and lobby details." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Missed and late visits." },
      { href: "/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims", label: "Parenting And Family Therapy Page", description: "Sessions that include children." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1339
  {
    slug: "support-person-in-session-policy-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "support person in session policy page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Support Person in Session Policy for Counseling",
    metaTitle: "Support Person in Session Policy Page for Counseling",
    metaDescription:
      "How a counseling practice can explain when a friend, partner or family member may join a session, who decides, and what stays private. Call (561) 291-2681.",
    answer:
      "A support person in session policy tells clients whether a friend or relative may attend, who decides, how consent is recorded, and how privacy is handled. It describes the process, not the clinical reasons, and offers a clear way to ask before the appointment.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("Why clients ask before they book"),
      p(
        "Some clients want a spouse, a parent or a trusted friend in the room for part or all of a session. Others worry that the therapist will insist on it or refuse it. Without a written policy, the answer depends on who picks up the phone, and a client can leave the call unsure whether they were told yes, no or maybe."
      ),
      p(
        "A short policy page makes the process visible. It does not need to decide every case. It needs to say who makes the decision, how a client asks, and how privacy is protected for everyone in the room."
      ),
      h2("What the policy can explain"),
      table(
        ["Topic", "Plain wording to aim for"],
        ["Who may attend", "A support person may join a session when the client asks and the clinician agrees it fits the work."],
        ["Who decides", "The client and the clinician decide together, and the clinician has the final say on how a session runs."],
        ["Consent", "The client signs a written permission naming the person and what may be discussed. The client can end it at any time."],
        ["Privacy", "Anything shared in the session is covered by the practice's confidentiality rules. The support person agrees to keep it private."],
        ["Minors and guardians", "Different rules apply to children and to adults with a guardian. Call the office to discuss."],
        ["Video sessions", "Support persons may join a video session when the client is in a private place and consent is in place."]
      ),
      h2("Separate this from couples and family therapy"),
      p(
        "A support person attending a client's session is different from couples or family counseling, where more than one person is a client. The page should say so in one sentence and link to the relevant service pages, such as the [couples counseling page](/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims) and the [parenting and family therapy page](/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims). Mixing the two confuses clients and creates billing questions."
      ),
      h3("Keep the page free of clinical claims"),
      ul(
        "Do not say that a support person improves outcomes or that attending is recommended.",
        "Do not describe situations in which a support person is needed. That is a clinical judgment for the therapist.",
        "Use neutral words such as may, can and will be discussed.",
        "State plainly that the practice follows its professional ethics code and the confidentiality rules that apply, and link to them."
      ),
      h2("Make asking easy"),
      p(
        "Give a direct way to ask: a phone number, a secure message option and a short line on the booking form. Tell clients to ask before the appointment so that the clinician can prepare and the right form is ready. Our guide to the [caregiver and family member communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) covers the related question of who the office may speak to outside the session."
      ),
      p(
        "Link the page from the first session information so new clients see it before they arrive, and review the wording with your attorney or professional association yearly. Write it at a plain reading level, and test it on a phone."
      ),
      h2("What the front desk says on the phone"),
      ul(
        "Thank you for asking. A support person can sometimes join a session, and the therapist decides with you.",
        "There is a short form we ask you and the support person to sign before the session.",
        "Sessions work a little differently when more than one person attends, so we plan ahead. Let us know the person's name and how they will join.",
        "If you would prefer to talk it over with the therapist first, we can arrange a brief call."
      ),
      p(
        "Agreeing on these four sentences means every client hears the same answer. Put them in a short script at the front desk, and update the script whenever the policy page changes, so the page and the phone never disagree."
      ),
    ],
    faqs: [
      {
        q: "Does a support person have to sign anything?",
        a: "Many practices ask for a written permission and a confidentiality acknowledgement. Your forms should be reviewed by an attorney or your professional association. The page can say that paperwork is required without reproducing the form.",
      },
      {
        q: "Can the clinician refuse a support person?",
        a: "Yes, the clinician decides how a session runs. The policy can say that requests are considered case by case, and that if the answer is no, the clinician will explain how else the client can involve a trusted person.",
      },
      {
        q: "What about confidentiality for the support person?",
        a: "The support person is not the client, so the practice's privacy promises are for the client. The page can say that attendees are asked to keep what they hear private, and that the client controls what is shared.",
      },
      {
        q: "Is this the same as a family session?",
        a: "No. In a family or couples session several people are clients with their own records and fees. A support person attends for the client's benefit and does not become a client. Link both pages so readers see the difference.",
      },
      {
        q: "Should we publish this for minors?",
        a: "Handle minors on a separate page, since consent and guardianship rules differ by state and age. Tell readers to call the office to discuss a child's session instead of restating legal rules on the web.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, HHS_PRIVACY, FL_MH_BOARD],
    links: [
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Family Communication Policy", description: "Who the office may talk to." },
      { href: "/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Couples Counseling Page", description: "When more than one person is the client." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients should know." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1334
  {
    slug: "staff-titles-explained-page-for-a-primary-care-practice-md-do-np-pa-and-ma",
    keyword: "staff titles explained page for a primary care practice MD DO NP PA and MA",
    category: "How-to",
    title: "Staff Titles Explained for a Primary Care Practice",
    metaTitle: "Staff Titles Explained Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain MD, DO, NP, PA and MA titles in plain words, with accurate credentials and no claims. Call (561) 291-2681.",
    answer:
      "A staff titles page explains in plain words what MD, DO, NP, PA and MA mean on the team page, who a patient will see, and how to ask for a specific clinician. It uses each person's credentials exactly as licensed and makes no claim that one title is better than another.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Patients see letters and guess"),
      p(
        "A new patient looks at a team page and sees MD, DO, NP, PA-C and MA after the names. Many assume the first people listed are the real doctors and the rest are assistants, or they ask for a doctor when a nurse practitioner would see them sooner. A short page that explains the letters removes that confusion and sets honest expectations for who provides care."
      ),
      p(
        "It also helps search. People type what is the difference between an NP and a doctor, and an accurate answer on your own site can be quoted by answer engines. Keep it neutral, because the goal is understanding, not a ranking of titles."
      ),
      h2("A plain table of what each title means"),
      table(
        ["Title", "In plain words"],
        ["MD", "Doctor of Medicine. A physician who has completed medical school and is licensed to practice medicine."],
        ["DO", "Doctor of Osteopathic Medicine. A physician licensed to practice medicine, trained in osteopathic medical schools."],
        ["NP", "Nurse practitioner. A registered nurse with advanced training who is licensed to provide primary care within the scope set by state law."],
        ["PA or PA-C", "Physician assistant. A licensed clinician who practices with physician collaboration as state rules require. PA-C means certified."],
        ["MA", "Medical assistant. Supports the visit by taking vital signs, preparing rooms and handling tasks within their training. Not a licensed prescriber."]
      ),
      h2("Use credentials exactly as licensed"),
      p(
        "Every title on the page must match a real license. Check each clinician against the state license lookup and the national provider registry, and write the credential the way the board records it. Never add letters a person does not hold, and never shorten a title in a way that changes it. A practice that overstates a credential invites a complaint, and it harms every patient's trust."
      ),
      p(
        "Our guide to [therapist credentials and license titles](/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website) shows the same approach for counseling, and the [front desk and care team page](/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first) explains who patients meet first. The [CMS provider registry](https://nppes.cms.hhs.gov/) is a good public source to confirm names and credentials."
      ),
      h3("Say who the patient will see"),
      ul(
        "Explain that patients may see a physician, nurse practitioner or physician assistant depending on the visit and the schedule.",
        "Tell patients how to ask for a specific clinician, and what to expect if that person is booked.",
        "Say that the medical assistant will start the visit, and that the clinician will see the patient afterward.",
        "Avoid statements that one title provides better care. Patients with the same concern can be well served by any licensed clinician."
      ),
      h2("Keep it human and scannable"),
      p(
        "Pair the table with the team page so that each person's photo, name and credential sit together. Our guide to [choosing a provider at a multi-provider practice](/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page) explains how to help patients pick without implying a ranking."
      ),
      p(
        "Add the page link beside the team list and in the footer of the booking page. Review the wording when staff change, and remove anyone who has left."
      ),
      h2("Keeping the page current"),
      ul(
        "Review the list whenever someone joins, leaves or changes role, and remove people the same week.",
        "Re-check licenses once a year and note the date on your internal record.",
        "Match names and credentials on the team page, the Google Business Profile and any directory listing.",
        "Add new clinicians only after their start date, and never list someone whose license is pending as if it were active."
      ),
      p(
        "A page like this earns trust only if it stays accurate. A stale list that shows a departed clinician is worse than no list, so assign one person to own it and give them the license lookup links."
      ),
    ],
    faqs: [
      {
        q: "Is a nurse practitioner a doctor?",
        a: "A nurse practitioner is a licensed clinician with advanced training, not a physician, though many have a doctoral degree in nursing. The page should state each person's title exactly and avoid wording that blurs the difference.",
      },
      {
        q: "Can the page say which title is best for my concern?",
        a: "No. That is a clinical judgment and the answer depends on the visit. Say instead that patients are scheduled with the clinician best suited to the appointment, and that they can ask the office about options.",
      },
      {
        q: "Do we need to list the medical assistants?",
        a: "Listing them is optional, and many patients like to know who greets them. If you do, give their title accurately, and avoid suggesting that they provide care outside their training.",
      },
      {
        q: "How do we verify credentials before publishing?",
        a: "Check each person in the state license lookup and, where relevant, the national provider registry. Keep a dated copy of what you checked, and update it each year. Do not publish a credential you have not verified.",
      },
      {
        q: "Does this page help with AI answer engines?",
        a: "A plain, accurate definition list is easy to quote, and it shows who stands behind the practice. No one can guarantee a citation, but pages that state who does what are easier for answer engines to trust.",
      },
    ],
    citations: [NPPES, GOOGLE_HELPFUL, PLAIN_LANGUAGE, HHS_PRIVACY],
    links: [
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Front Desk And Care Team Page", description: "Who patients meet first." },
      { href: "/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website", label: "Therapist Credentials Explained", description: "The counseling version." },
      { href: "/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page", label: "Choosing A Provider", description: "Helping patients pick." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
