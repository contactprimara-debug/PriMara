// -- Guides batch 35 - 2026-11-05 --
// Guide/AEO pages from the Command Center queue (rows 1537-1546, planned 2026-11-04), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only.
// Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_HOURS = {
  publisher: "Google Business Profile Help",
  label: "Edit your business hours",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_DUPLICATES = {
  publisher: "Google Business Profile Help",
  label: "Resolve duplicate profiles and ownership issues",
  href: "https://support.google.com/business/answer/12756178",
};
const GBP_PROHIBITED = {
  publisher: "Google Business Profile Help",
  label: "Prohibited and restricted content",
  href: "https://support.google.com/business/answer/7400114",
};
const HHS_PRIVACY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA Privacy Rule guidance",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
};
const HHS_BA = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Business associates under HIPAA",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html",
};
const HHS_MARKETING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA marketing guidance",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_SPAM = {
  publisher: "Google Search Central",
  label: "Spam policies for Google web search",
  href: "https://developers.google.com/search/docs/essentials/spam-policies",
};
const GSC_MANUAL_ACTIONS = {
  publisher: "Google Search Console Help",
  label: "Manual actions report",
  href: "https://support.google.com/webmasters/answer/9044175",
};
const GSC_INDEXING = {
  publisher: "Google Search Console Help",
  label: "Page indexing report",
  href: "https://support.google.com/webmasters/answer/7440203",
};
const GMAPS_EMBED = {
  publisher: "Google Maps Platform",
  label: "Maps Embed API overview",
  href: "https://developers.google.com/maps/documentation/embed/get-started",
};
const FCC_TEXTS = {
  publisher: "Federal Communications Commission",
  label: "Stop unwanted robocalls and texts",
  href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
};
const ADS_TRADEMARKS = {
  publisher: "Google Ads Help",
  label: "Trademarks (Advertising Policies)",
  href: "https://support.google.com/adspolicy/answer/6118",
};
const LIFELINE_988 = {
  publisher: "988 Suicide and Crisis Lifeline",
  label: "988 Suicide and Crisis Lifeline",
  href: "https://988lifeline.org/",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};

export const guidesPartThirtyEight: Guide[] = [
  // ---------------------------------------------------------------- 1537
  {
    slug: "google-reviews-disappeared-or-review-count-dropped-on-a-medical-practice-profile-what-to-check",
    keyword: "google reviews disappeared or review count dropped on a medical practice profile what to check",
    category: "Checklist",
    title: "Google Reviews Disappeared From a Practice Profile",
    metaTitle: "Google Reviews Disappeared From a Practice Profile",
    metaDescription:
      "Review count dropped on your Google profile? Check filters, removals and the profile itself, in order, with no patient details. (561) 291-2681",
    answer:
      "When reviews seem to vanish from a practice profile, check the filter and sort settings first, then whether you are looking at the right profile, then whether a reviewer or Google removed a review, then whether the profile was edited or merged. Record the count and dates, and never ask a patient to repost.",
    author: "Liam Costello",
    publishDate: "2026-11-05T09:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Why the number on your profile can change"),
      p(
        "A front desk manager notices that the profile showed forty-one reviews last month and shows thirty-eight today. Nobody on staff deleted anything, so the first reaction is worry. In most cases the cause is ordinary and fixable, and the order in which you check matters, because the first few checks take two minutes and rule out the most common explanations."
      ),
      p(
        "Reviews are written by patients and owned by the people who wrote them. A practice can reply to a review and report one that breaks the rules, but it cannot edit, hide or restore a review. That is why the useful question is not how to get it back but which of five things happened."
      ),
      h2("Check these in order"),
      table(
        ["Check", "What to look for"],
        ["Which profile is open", "Practices with more than one office or a past duplicate can have two listings. Confirm the name, address and phone match the one you counted before."],
        ["Filters and sort", "Maps lets a visitor sort and search inside reviews. A sort or keyword left in place can make the visible list look shorter."],
        ["Reviewer deleted it", "A reviewer can remove their own review at any time, or lose their account. The practice is not told."],
        ["Google removed it", "Reviews that break Google's content rules can be taken down, including ones that look genuine to staff."],
        ["Profile changed or merged", "A new address, a changed name, a merge with a duplicate, or a suspension and reinstatement can all change what is shown."],
      ),
      h2("What you can and cannot do"),
      p(
        "If a single review disappears, there is usually nothing to do except note the date. Do not contact the patient, and do not ask anyone to post again. Asking a specific person to repost can turn a quiet drop into a policy problem, and it can also reveal that you know who wrote the review, which is its own privacy concern."
      ),
      p(
        "If many reviews vanish at once, look at the profile itself. A suspension, a duplicate merge or an address change often shows up first in the Business Profile dashboard. Our guide to [fixing a suspended Google Business Profile](/guides/fix-a-suspended-google-business-profile) lists what Google asks for, and the walkthrough on [fixing duplicate Google Business Profile listings](/guides/fix-duplicate-google-business-profile-listings) explains how a merge changes the count."
      ),
      h3("Keep a simple monthly record"),
      p(
        "A drop is only a drop if you know the starting number. Once a month, write down the review count, the star average and the date, and keep it with the rest of your profile upkeep. The [monthly Google Business Profile maintenance checklist](/guides/monthly-google-business-profile-maintenance-checklist) already has a place for this, and the record makes it much easier to tell Google support exactly when the change happened."
      ),
      ul(
        "Write the count and average on the same day each month.",
        "Screenshot the top of the profile, not the individual reviews.",
        "Note any change to the practice name, address, hours or categories made that month.",
        "Do not store reviewer names alongside appointment information."
      ),
      h2("Wording when a patient asks about it"),
      p(
        "A patient may say they wrote a review and cannot find it. Reply by phone, not in public, and never confirm that the person is a patient or discuss a visit. The safe line is that reviews are managed by Google and that the office cannot see or change them. The same limits apply to public replies, as explained in our guide on [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient)."
      ),
      h2("When to ask Google for help"),
      p(
        "If the count dropped sharply, the profile shows a warning, or a review you believe is genuine was removed, contact Business Profile support through the Help Center with the profile name, the dates and your monthly record. Support cannot promise a restore, but a clear timeline helps them find what changed. Keep the request free of patient information. If the fall is in calls or website visits and not only in reviews, run through the [first-hour checklist for a sudden drop in calls or traffic](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) before you change anything on the profile."
      ),
    ],
    faqs: [
      {
        q: "Can a practice get a deleted review back?",
        a: "No. If the reviewer deleted it, only that person can post again. If Google removed it for a policy reason, the practice can ask support to look, but there is no promise of a restore. Do not ask the patient to repost.",
      },
      {
        q: "Why did the star average change without a visible drop?",
        a: "The average moves when any review is added, edited or removed. A reviewer who changes a five-star review to four stars, or deletes an old one, shifts the number without any obvious loss in the count. Compare against your monthly record.",
      },
      {
        q: "Should we tell patients that reviews went missing?",
        a: "No. A public notice draws attention to a problem and can pressure people to post. Keep the focus on making it easy to leave an honest review in the ordinary way, with a link or QR code, and never in exchange for anything.",
      },
      {
        q: "Does a profile edit cause reviews to disappear?",
        a: "Large edits, such as a new name or address, can trigger a review of the listing, and a merge with another listing can change the visible reviews. Make big edits one at a time and note the date so any change can be traced.",
      },
      {
        q: "Who should check this each month?",
        a: "One named person, usually the office manager. The check takes about five minutes and belongs with the other monthly profile tasks. Put the count in a shared sheet so it survives staff changes.",
      },
    ],
    citations: [GBP_PROHIBITED, GBP_DUPLICATES, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-handle-a-fake-google-review-on-a-medical-listing", label: "Handling A Fake Review", description: "What to do when a review is not real." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Asking For Reviews Safely", description: "Ways to ask without gating or incentives." },
      { href: "/guides/showing-google-reviews-on-a-medical-practice-website-widgets-schema-and-rules", label: "Showing Reviews On Your Site", description: "Widgets, schema and the rules." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1538
  {
    slug: "map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice",
    keyword: "map embed and driving directions wording on the contact page of a primary care practice",
    category: "How-to",
    title: "Map Embed and Directions Wording on a Contact Page",
    metaTitle: "Map Embed and Directions Wording on a Contact Page",
    metaDescription:
      "How a primary care practice can add a map and plain driving directions to its contact page so patients arrive on time and find parking. (561) 291-2681",
    answer:
      "A contact page map should sit below the address and phone number, load quickly, and be paired with written directions from the main roads, parking and entrance notes, and a Get Directions link. The text matters more than the picture, because it is what voice search, screen readers and slow phones can use.",
    author: "Gio LaRoche",
    publishDate: "2026-11-05T09:20:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("The map is not the directions"),
      p(
        "Most contact pages carry a map and stop there. The map is useful to someone who already knows roughly where the office is. It is much less useful to a patient who is driving from another county, arriving by bus, or helping a parent who does not read a map well. Written directions fill the gap, and they are the part search engines and screen readers can actually read."
      ),
      p(
        "A map is also heavy. An embedded map loads scripts and tiles from another site, which can slow a phone on a weak signal at the exact moment a patient is deciding whether to call. Plan the page so the address, phone and written directions appear first and the map arrives after them."
      ),
      h2("What to put above the map"),
      table(
        ["Item", "What to write"],
        ["Street address", "Written as text, with the suite or floor, exactly as it appears on your Google profile."],
        ["Phone", "A tap-to-call link, with the hours the line is answered."],
        ["Written directions", "Two or three sentences from the nearest main road or exit, using landmarks that will not change soon."],
        ["Parking and entrance", "Where to park, which door to use and whether there is a cost. Link to the fuller page if you have one."],
        ["Get Directions link", "A link to the maps app, so a phone opens navigation instead of making the patient copy the address."],
      ),
      h2("Writing directions that hold up"),
      p(
        "Write directions as a patient would say them out loud. Start from the road people know, give one turn at a time, and end at the door. Avoid directions that depend on a business that may close, such as turn left at the old pharmacy. Add one line for people arriving by bus or ride service if that applies."
      ),
      ul(
        "Name roads and exits by the signs a driver sees.",
        "Say which side of the street the building is on.",
        "Mention the building name and the suite, since many offices share an address.",
        "Give a rough drive time from a nearby town, labeled as an estimate."
      ),
      h3("Keep it consistent with Google"),
      p(
        "The address, suite and phone number on the page must match the Business Profile character for character, or the two read as different places. If a pin is wrong, fix it at the source, as our guide to [fixing a wrong map pin on a Google Business Profile](/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile) explains, and then check that the page still agrees."
      ),
      h2("Embedding the map without slowing the page"),
      p(
        "Use the embed option from the maps provider and set it to load lazily, so it only loads when a visitor scrolls near it. Give the frame a title that describes it, such as map showing the location of the office, so screen readers announce it clearly. Keep the frame responsive, so it does not force sideways scrolling on a phone. The embed documentation from [Google Maps Platform](https://developers.google.com/maps/documentation/embed/get-started) covers the options."
      ),
      p(
        "Finally, link the page to the rest of the visit information. A patient reading directions may need the parking and entrance details next, and the fuller [contact page checklist](/guides/what-to-put-on-a-medical-practice-contact-page) lists what else belongs beside the map."
      ),
    ],
    faqs: [
      {
        q: "Do we need a map on the contact page at all?",
        a: "It helps, but it is not the most important part. Patients can open navigation from a link. If you must choose, keep the written address, phone and directions, and add the map after them. A page with a map and no text is weaker.",
      },
      {
        q: "Should the directions mention the competitor next door?",
        a: "No. Use landmarks that will not change and that are not other practices. If a nearby pharmacy or building is the clearest landmark, use the building name only and recheck it each year.",
      },
      {
        q: "How do we make the map work for screen readers?",
        a: "Give the embedded frame a clear title and make sure the same information appears as text on the page. The text is the accessible version. Do not rely on the map to carry the address or directions.",
      },
      {
        q: "Can the page show drive times?",
        a: "Only as rough estimates from a named starting point, and say that traffic varies. A drive time that is wrong in the afternoon rush will make patients late and leave them with a poor first impression.",
      },
      {
        q: "How often should the directions be checked?",
        a: "Twice a year, and whenever a road, building entrance or parking arrangement changes. Put it on the same list as the hours check, and ask a new patient to follow the directions and report anything unclear.",
      },
    ],
    citations: [GMAPS_EMBED, GBP_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile", label: "Parking And Entrance Details", description: "The fuller arrival information." },
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "Contact Page Checklist", description: "Everything else that belongs on the page." },
      { href: "/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile", label: "Fixing A Wrong Map Pin", description: "When the pin sends patients to the wrong spot." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1539
  {
    slug: "year-end-marketing-results-summary-for-the-owner-of-a-counseling-practice",
    keyword: "year-end marketing results summary for the owner of a counseling practice",
    category: "Playbook",
    title: "Year-End Marketing Results Summary for a Counseling Practice",
    metaTitle: "Year-End Marketing Summary for a Counseling Practice",
    metaDescription:
      "A one-page year-end summary for a counseling practice owner: which numbers to count, which to ignore, and what to change next year. (561) 291-2681",
    answer:
      "A year-end marketing summary for a counseling practice should fit on one page and answer four questions: how many new clients asked to book, where they came from, what each channel cost, and what to change next year. Count requests and calls, not page views, and keep client details out of it.",
    author: "Liam Costello",
    publishDate: "2026-11-05T09:40:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Why a one-page summary beats a folder of reports"),
      p(
        "By December, most practice owners have a stack of monthly reports they have not read. The point of a year-end summary is not to repeat them. It is to decide what to keep, what to stop and what to try next, using the few numbers that actually relate to a full caseload."
      ),
      p(
        "Keep it to one page that an owner can read in five minutes. If a number does not change a decision, leave it out. A chart of page views rarely changes anything, while a count of how many people asked to book usually does."
      ),
      h2("The four numbers to count"),
      table(
        ["Number", "How to get it"],
        ["Booking requests", "Add up the contact form submissions and tracked calls for the year, month by month, as a plain count."],
        ["Where they came from", "Use the how-did-you-hear answer from the form and the intake call, next to the analytics source, and say which is which."],
        ["Cost per channel", "Add what was spent on ads, directories and any agency, then divide by requests from that channel."],
        ["Requests that became first sessions", "Ask the front desk for the count, without names. This is the number that shows whether the pages bring the right people."],
      ),
      h3("What to leave out"),
      p(
        "Leave out client names, diagnoses, session notes and anything else from the clinical record. The summary is a marketing document, and it should be possible to share it with a bookkeeper or a consultant without a privacy review. Our guide to [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website) explains how to count calls without recording what was said."
      ),
      h2("Reading the year in three comparisons"),
      p(
        "First, compare the first half of the year with the second half, not December with January, because therapy practices swing with the school year and holidays. Second, compare each channel with its own cost, so a free source and a paid source are not judged on the same scale. Third, compare requests with first sessions, since a rise in requests that does not turn into sessions points at the page or the phone process, not at the traffic."
      ),
      ul(
        "Note any month with a site change, a Google profile change or a closure.",
        "Mark months when the practice was full and not taking new clients, because requests then mean little.",
        "Write one sentence about anything unusual instead of explaining it away in the chart."
      ),
      h2("Turning it into next year's plan"),
      p(
        "End the page with three decisions: one thing to keep, one thing to stop and one thing to try. A small budget goes further when it follows what worked, and the guide to [splitting a small monthly marketing budget for a counseling practice](/guides/splitting-a-small-monthly-marketing-budget-for-a-counseling-practice) shows one way to divide it. Pair the plan with the [annual website content review](/guides/annual-website-content-review-checklist-for-a-counseling-practice) so the pages that need updating are scheduled, not forgotten. Write next year's goals as [simple monthly goals for calls and forms](/guides/setting-simple-monthly-goals-for-calls-and-forms-for-a-small-medical-practice-website) based on the last three months, not as a single large number."
      ),
      p(
        "Finally, date the page and store it with the rest of the practice's business records. Next year's summary will be easier because the starting numbers are already written down, and a comparison with the previous year is the strongest evidence of whether the work is paying off. The notes from a [monthly 30-minute marketing meeting](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) make the year-end page much easier to write, because each month already has a direction and one action."
      ),
    ],
    faqs: [
      {
        q: "Should the summary include website traffic?",
        a: "Only as context. Traffic tells you whether people found the site, but it does not tell you whether they booked. Put requests and first sessions at the top, and mention traffic in one line if it explains a change.",
      },
      {
        q: "What if we do not track where clients come from?",
        a: "Start now with one question on the contact form and one on the intake call. A rough answer from most people is better than nothing. Next year's summary will then show the sources, and this year's can say plainly that the data is incomplete.",
      },
      {
        q: "Can we share the summary with an outside marketer?",
        a: "Yes, because it contains counts and costs, not client information. Before sharing, read it once to make sure no names or details slipped in, and ask the marketer to sign a confidentiality agreement.",
      },
      {
        q: "How should we treat months when the caseload was full?",
        a: "Mark them and set them aside when judging performance. If the practice could not take new clients, requests in those months reflect demand, not the website. Use a waitlist page and track those requests separately.",
      },
      {
        q: "When in the year should this be done?",
        a: "In the first two weeks of January, once December's numbers are in. Put the date on the calendar in November so it is not skipped, and keep the same page layout every year so comparisons are simple.",
      },
    ],
    citations: [HHS_PRIVACY, GOOGLE_HELPFUL, ACA_ETHICS],
    links: [
      { href: "/guides/how-to-read-google-analytics-4-reports-each-month-for-a-medical-practice", label: "Reading Monthly Analytics", description: "The monthly numbers behind the summary." },
      { href: "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing", label: "How Did You Hear About Us", description: "Counting where new clients come from." },
      { href: "/guides/new-year-availability-announcement-for-a-counseling-practice", label: "New Year Availability Notice", description: "What to publish once the plan is set." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1540
  {
    slug: "hiring-a-freelance-writer-for-a-medical-practice-blog-without-sharing-patient-information",
    keyword: "hiring a freelance writer for a medical practice blog without sharing patient information",
    category: "How-to",
    title: "Hiring a Freelance Writer for a Practice Blog",
    metaTitle: "Hiring a Freelance Writer for a Practice Blog",
    metaDescription:
      "How a medical practice can hire a freelance blog writer without sharing patient information: the brief, access rules and review. (561) 291-2681",
    answer:
      "A practice can hire a freelance writer for its blog safely by giving the writer topics and published facts only, never patient information or records, by using a written agreement, and by having a licensed clinician review every post before it is published. Keep the writer out of the practice's systems.",
    author: "Gio LaRoche",
    publishDate: "2026-11-05T10:00:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("Start with what the writer never needs"),
      p(
        "Practices often hesitate to hire a writer because they worry about privacy. The worry is reasonable, and it has a simple answer: a blog writer does not need any patient information at all. The posts explain general topics, office policies and how to use the practice, and every fact needed for them is already public or can be written by the staff."
      ),
      p(
        "If a writer asks for patient stories, charts, photos, review details or access to the scheduling system, the answer is no. A writer who needs those things is writing a different kind of content, and the risk is not worth the post."
      ),
      h2("What to give the writer instead"),
      table(
        ["Give", "Do not give"],
        ["A topic list and the question each post answers", "Names, stories or examples drawn from real patients"],
        ["Published pages, hours, services and policies", "Logins to the website, email, scheduling or the patient portal"],
        ["A style note: plain words, short sentences, no promises", "Screenshots of messages, reviews or the schedule"],
        ["Names of clinicians who may be quoted, with their approval", "Clinician credentials the writer has not verified from a public source"],
      ),
      h2("Put the rules in writing"),
      p(
        "Use a short written agreement. It should say that the writer will not request or receive patient information, that the practice owns the finished text, that the writer will not reuse it elsewhere, and that sources must be named. If there is any chance the writer will see protected health information, the practice needs to treat the writer as a business associate and have the proper agreement in place, as the [HHS guidance on business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) explains. The easier path is to design the work so that never happens."
      ),
      ul(
        "Ask for an outline before the draft, and approve it.",
        "Ask for every claim to be tied to a named source, with the link.",
        "Forbid outcome promises, comparisons with other practices and testimonial language.",
        "Ask the writer to say whether any text was produced with an AI tool."
      ),
      h3("Who reviews what"),
      p(
        "Every post gets two reviews before it goes live. A clinician checks that the content is accurate and does not give individual medical advice. The office manager checks that hours, services and policies match the site. For posts that mention a clinician or a credential, follow the approach in our guide to [medically reviewed by labels on a practice website](/guides/medically-reviewed-by-labels-on-a-medical-practice-website), so the label is true."
      ),
      h2("Judging the first draft"),
      p(
        "Read the first draft for plain words and for honest claims, not for length. A good post answers one question completely, in language a patient would use. The advice in [plain language and reading level for patient-facing web content](/guides/plain-language-and-reading-level-for-patient-facing-web-content) is a useful yardstick. Reject any draft that sounds like it was written for search engines, with repeated phrases and no practical detail."
      ),
      p(
        "Start with one paid trial post before agreeing to a monthly arrangement. If you are unsure how many posts the site needs, [how often a medical practice should blog](/guides/should-a-medical-practice-blog-and-how-often) gives a realistic pace for a small office."
      ),
    ],
    faqs: [
      {
        q: "Can a freelance writer use patient stories as examples?",
        a: "No. Even with names removed, a real story can identify a patient, especially in a small community. Use invented, clearly general examples, such as a person who needs to reschedule, and say they are examples.",
      },
      {
        q: "Does the practice need a business associate agreement with a blog writer?",
        a: "Not if the writer never receives protected health information. That is the goal. If the work ever requires access to patient information, stop and review the arrangement with a healthcare attorney first.",
      },
      {
        q: "Who owns the posts after they are paid for?",
        a: "The agreement should say the practice owns them. Without a written statement, ownership of freelance work can be unclear. Ask for a clause that the writer will not resell or republish the text.",
      },
      {
        q: "Should the writer's name appear on the post?",
        a: "It is usually better to publish under the practice or a reviewing clinician's name, with the review date. Patients want to know who stands behind the advice. Only name a clinician who has actually read and approved the post.",
      },
      {
        q: "How do we check a draft for copied text?",
        a: "Run a few distinctive sentences through a search engine, and ask the writer to name sources. A writer who cannot explain where a fact came from should not be trusted with health-related content.",
      },
    ],
    citations: [HHS_BA, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/should-a-medical-practice-blog-and-how-often", label: "How Often To Blog", description: "A realistic pace for a small office." },
      { href: "/guides/patient-testimonial-compliance-checklist", label: "Testimonial Compliance", description: "Why stories and quotes need care." },
      { href: "/guides/in-house-marketer-vs-agency-for-a-medical-practice", label: "In-House Or Agency", description: "Who should own the content work." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1541
  {
    slug: "search-console-email-alerts-and-who-should-receive-them-at-a-medical-practice",
    keyword: "search console email alerts and who should receive them at a medical practice",
    category: "Checklist",
    title: "Search Console Email Alerts: Who Should Get Them",
    metaTitle: "Search Console Email Alerts: Who Should Get Them",
    metaDescription:
      "Which Search Console emails a practice should act on, who should receive them, and how to avoid missing a security or indexing warning. (561) 291-2681",
    answer:
      "Search Console emails go to the owners and users on the property, so a practice should make sure at least two accountable people receive them, one of them with authority to approve fixes. Read security and manual action notices the same day, indexing and coverage notices weekly, and ignore nothing from an address no one checks.",
    author: "Liam Costello",
    publishDate: "2026-11-05T10:20:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why the inbox matters more than the dashboard"),
      p(
        "Most practices set up Search Console once and never open it again. The service then sends email when something needs attention, but only to the addresses on the property. If that address belonged to a former web developer, a staff member who left, or a shared mailbox nobody reads, the warning goes nowhere and the first sign of trouble is a drop in calls."
      ),
      p(
        "The fix is simple and takes ten minutes: decide who should receive the emails, confirm they do, and write down what each type means and who acts on it."
      ),
      h2("Who should receive them"),
      table(
        ["Person", "Why"],
        ["Owner or practice administrator", "Holds the Google account and can approve spending, access changes and any request to Google."],
        ["Office manager or marketing lead", "Reads the notices weekly and passes technical items to whoever maintains the site."],
        ["Website developer or agency, as a user", "Can fix problems directly, but should not be the only recipient."],
      ),
      p(
        "Use named people on an address the practice controls. A shared inbox is acceptable only if one person is responsible for checking it. The guide to [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why ownership should stay with the practice. When a new manager starts, add their address to the alerts as part of the [first-day account handoff](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts) so the warnings keep reaching someone."
      ),
      h2("What to do with each kind of email"),
      ul(
        "Security issues and manual actions: read the same day, call whoever maintains the site, and keep a record of what was changed.",
        "Indexing and coverage notices: review weekly. Many are routine, but a new error on an important page needs a fix.",
        "Enhancement and structured data notices: check monthly, and compare with the pages that carry the markup.",
        "New owner or user added: confirm that the person is known. An unexpected owner is a red flag."
      ),
      h3("Do not act on the email alone"),
      p(
        "Open the property and look at the page named in the email before changing anything. The coverage report can show a large number for a harmless reason, such as old redirected URLs. Our explanation of the [page indexing report in Search Console](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website) shows how to tell the difference between a real problem and normal housekeeping."
      ),
      h2("Setting it up"),
      p(
        "In the property's settings, open the users and permissions list, confirm each owner and full user, and remove anyone who no longer works with the practice. Then check the notification preferences in the account's settings so that email is on. If the property was never verified in the first place, the walkthrough on [setting up and verifying Google Search Console](/guides/how-to-set-up-and-verify-google-search-console-for-a-medical-practice-website) covers it step by step. Add this user review to a [yearly calendar of checks](/guides/a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates) with a named owner, so it does not slip."
      ),
      p(
        "Finish by adding a recurring weekly reminder to read the dashboard summary, so the practice is not relying on email alone. The routine described in [how to read Google Search Console for a practice website](/guides/how-to-read-google-search-console-for-a-medical-practice-website) takes about fifteen minutes and fits into a regular admin hour. Add a monthly look at the top queries to that same hour, following the [query-reading routine for counseling practices](/guides/reading-the-top-search-console-queries-each-month-to-find-the-questions-new-clients-ask-a-counseling-practice). A free [Google Alert for the practice and provider names](/guides/setting-up-a-free-google-alert-for-the-practice-name-and-provider-names-to-catch-wrong-listings-and-impersonation) adds one more early signal, sent to the same shared mailbox, about wrong listings and copied pages."
      ),
    ],
    faqs: [
      {
        q: "Why did we never get an email about a problem?",
        a: "Either the address on the property is not one you read, the email went to spam, or the issue was below the level that triggers a message. Check the user list, search the spam folder, and then look at the reports directly.",
      },
      {
        q: "Should patients ever see these emails?",
        a: "No. They are technical messages for staff and the site maintainer. They contain no patient information, but they do not belong in any patient-facing channel and do not need a reply to Google.",
      },
      {
        q: "Is it safe to click links in a Search Console email?",
        a: "Be careful. Scammers imitate these emails. Open Search Console by typing the address or using your own bookmark, and check the same notice there. Never enter a password through a link in the email.",
      },
      {
        q: "What counts as an urgent notice?",
        a: "Anything about security issues, hacked content or a manual action. These can remove pages from search results and need same-day attention. Most other messages can wait for the weekly read.",
      },
      {
        q: "Can the agency be the only recipient?",
        a: "It is better not to. Agencies change and staff leave. Keep at least one person from the practice on the property as an owner so warnings still reach you if the relationship ends.",
      },
    ],
    citations: [GSC_MANUAL_ACTIONS, GSC_INDEXING, GOOGLE_SPAM, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "Reading Search Console", description: "A weekly routine for the dashboard." },
      { href: "/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website", label: "Page Indexing Report", description: "What the coverage numbers mean." },
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns The Accounts", description: "Keeping access with the practice." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1542
  {
    slug: "insurance-panel-closed-to-new-clients-wording-for-a-counseling-practice-website-and-google-profile",
    keyword: "insurance panel closed to new clients wording for a counseling practice website and google profile",
    category: "How-to",
    title: "Insurance Panel Closed to New Clients: Wording",
    metaTitle: "Insurance Panel Closed to New Clients: Wording",
    metaDescription:
      "How a counseling practice can say an insurance plan is closed to new clients, on its site and Google profile, in plain words. (561) 291-2681",
    answer:
      "When an insurance panel is closed to new clients, say so plainly on the insurance page and the Google profile: name the plan, give the date checked, say that existing clients are unaffected if that is true, and offer a next step such as self-pay options or a referral. Do not leave a closed plan listed as accepted.",
    author: "Liam Costello",
    publishDate: "2026-11-05T10:40:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("What callers need to hear"),
      p(
        "A person looking for a therapist often starts with a plan name. If your site still lists a plan the practice has stopped taking for new clients, they call, learn the truth on the phone and feel misled. Some give up on the search entirely. Clear wording protects them and protects the front desk from repeating the same bad news all day."
      ),
      p(
        "A closed panel is not the same as ending a contract. The plan may still cover existing clients, and the panel may reopen. The wording has to separate those cases without making legal or billing promises."
      ),
      h2("Three situations, three sentences"),
      table(
        ["Situation", "Wording"],
        ["Panel closed to new clients, existing clients continue", "We are not currently accepting new clients under this plan. Current clients are not affected. Checked on the date shown."],
        ["Panel closed, no longer in network", "We are no longer in network with this plan. Call to ask about self-pay rates or a superbill, which some plans may reimburse."],
        ["Panel full for now, may reopen", "We have no openings under this plan right now. Call to ask to be added to the waitlist."],
      ),
      p(
        "Avoid words such as never or permanently, and avoid describing what a plan covers, since coverage depends on the member's policy. The page on [insurance carrier pages for a counseling practice](/guides/insurance-carrier-specific-pages-for-a-counseling-practice-accuracy-and-wording) explains why each plan should be named exactly as the plan names itself."
      ),
      h2("Where the wording must appear"),
      ul(
        "The insurance page, with the plan listed as closed rather than deleted.",
        "The Google profile description or the Q&A, if insurance is mentioned there.",
        "Directory profiles that list accepted plans.",
        "The phone greeting or the front desk script, so callers hear the same answer."
      ),
      h3("Keep a date on every statement"),
      p(
        "Panels change quarterly or faster. Put a checked-on date beside the list and review it on a schedule. Our guide to [updating listings when a practice joins or leaves an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network) lists every place that may need a change, and it fits the same review."
      ),
      h2("Give the caller somewhere to go"),
      p(
        "Never end the message at no. Offer a next step that is true: a waitlist, a sliding scale if the practice has one, a way to request a superbill, or a referral list the practice keeps. If the practice has a waitlist, link to the [waitlist page for a therapy practice with a full caseload](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) so the request is captured. For anyone in crisis, the page should point to 988 or 911, not to a waitlist."
      ),
      p(
        "Finally, tell the front desk before the page changes. If the site says closed and the phone says we can fit you in, trust is lost quickly. One short script, shared by everyone who answers calls, prevents it."
      ),
    ],
    faqs: [
      {
        q: "Should we remove the plan from the site entirely?",
        a: "No. Removing it can leave visitors guessing, and search engines may still show an older snapshot. List it as closed to new clients, with a date, until you are sure it will not come back.",
      },
      {
        q: "Can we promise that a plan will reimburse out-of-network visits?",
        a: "No. Reimbursement depends on the member's policy. Say that some plans may reimburse part of the cost and that the member should ask the plan. Offer a superbill only if the practice provides one.",
      },
      {
        q: "Do we have to tell existing clients?",
        a: "Existing clients should hear directly, not through the website. If the change affects their coverage, contact them by the usual private method and keep the message free of clinical detail.",
      },
      {
        q: "How should the Google profile reflect this?",
        a: "Update any text on the profile that names the plan, and check the Q&A. The profile has no required insurance field for every category, so the safest approach is to keep the description and the site consistent.",
      },
      {
        q: "What if the panel reopens?",
        a: "Change the line and the date, and tell the front desk the same day. Do not announce a reopening in advance. Keep the closed wording until the plan confirms new clients can be added.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE_988, ACA_ETHICS, GBP_EDIT],
    links: [
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Insurance Verification Page", description: "How callers check their own benefits." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "The page this wording belongs on." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page", description: "Capture the request when you are full." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1543
  {
    slug: "text-message-opt-in-wording-on-web-forms-for-a-primary-care-practice",
    keyword: "text message opt-in wording on web forms for a primary care practice",
    category: "How-to",
    title: "Text Message Opt-In Wording on Practice Web Forms",
    metaTitle: "Text Message Opt-In Wording on Practice Web Forms",
    metaDescription:
      "How a primary care practice can word the text opt-in on web forms: separate consent, plain disclosure, STOP and no health details. (561) 291-2681",
    answer:
      "A text opt-in on a web form should be a separate, unchecked box that names the practice, says what kinds of messages will be sent and how often, mentions that message and data rates may apply, explains how to stop, and is not required to submit the form. Keep health details out of every message.",
    author: "Gio LaRoche",
    publishDate: "2026-11-05T11:00:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("The checkbox is a promise"),
      p(
        "A web form that collects a mobile number often adds a line saying that by submitting, the visitor agrees to texts. That wording is weak. A person who only wanted to request an appointment has not clearly chosen to receive messages, and the practice cannot show later that they did. A separate box, with its own words, is clearer for the patient and easier to defend."
      ),
      p(
        "This guide covers wording only. The rules that decide whether a practice may text at all are explained in our summary of [text message marketing compliance for a medical practice](/guides/text-message-marketing-compliance-for-a-medical-practice), and a healthcare attorney should confirm the final language."
      ),
      h2("What the wording should contain"),
      table(
        ["Part", "Plain-language example"],
        ["Who is texting", "The practice name, written in full."],
        ["What kind of messages", "Appointment reminders and scheduling messages, if that is all you send."],
        ["How often", "A realistic range, such as a few messages around each appointment."],
        ["Cost", "Message and data rates may apply."],
        ["How to stop and get help", "Reply STOP to stop, HELP for help."],
        ["Not required", "Agreeing to texts is not required to request an appointment."],
      ),
      h2("Rules for the box itself"),
      ul(
        "Leave it unchecked by default. A pre-checked box is not a clear choice.",
        "Put it next to the phone number field, not at the bottom of a long page.",
        "Keep the consent text short enough to read on a phone without scrolling inside the box.",
        "Link to the privacy notice and to the terms for texting in the same line."
      ),
      h3("Keep reminders separate from marketing"),
      p(
        "Reminders about a booked appointment and promotional texts are different kinds of messages. If the practice only wants to send reminders, say so and do not add marketing language. If it wants to send both, use two boxes. For the wording of the reminders themselves, see our guide to [appointment reminder text and email wording](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details)."
      ),
      h2("Record the consent"),
      p(
        "Store the date, time, the form it came from and the exact wording shown when the person agreed. Without that record, the checkbox proves little. Log it in the system that sends the messages, and do not copy it into the clinical chart. The form fields themselves should stay minimal, in line with the guidance on [what to ask and what to leave out on an appointment request form](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out)."
      ),
      p(
        "Test the form before launch with a number you control. Submit once with the box checked and once without, and confirm that only the first creates a text subscription. Then reply STOP and confirm that the messages end the same day."
      ),
    ],
    faqs: [
      {
        q: "Can the opt-in be required to submit the form?",
        a: "It should not be. A patient who wants an appointment should be able to request one without agreeing to texts. Making consent a condition of the request weakens it and can create problems.",
      },
      {
        q: "May a text mention the reason for a visit?",
        a: "No. Keep messages to the time, place and a way to reschedule. Text is not a secure channel, and a message can be read on a lock screen by someone else. Leave diagnoses, results and visit reasons out entirely.",
      },
      {
        q: "Does a patient who calls the office count as having opted in?",
        a: "Do not assume so. Ask and record the answer. A verbal yes, noted with the date and the person who asked, is a better record than none, but a written form is easier to show later.",
      },
      {
        q: "How long should the consent text be?",
        a: "Short enough to read in a few seconds, with a link to the fuller terms. Long legal paragraphs next to a box are rarely read, so put the main points up front in plain words.",
      },
      {
        q: "What if someone replies STOP and then fills the form again?",
        a: "Treat the new box check as a new choice, but make sure the system records it and keeps the earlier stop on file. When in doubt, ask the person by phone before turning messages back on.",
      },
    ],
    citations: [FCC_TEXTS, HHS_MARKETING, HHS_PRIVACY],
    links: [
      { href: "/guides/text-message-marketing-compliance-for-a-medical-practice", label: "Text Message Compliance", description: "The rules behind the wording." },
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Contact Form", description: "Form fields and privacy notice." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stopping Spam Leads", description: "Keep fake numbers out of your list." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1544
  {
    slug: "competitor-bidding-on-your-practice-name-in-google-ads-what-a-medical-practice-can-do",
    keyword: "competitor bidding on your practice name in google ads what a medical practice can do",
    category: "Playbook",
    title: "When a Competitor Bids on Your Practice Name",
    metaTitle: "When a Competitor Bids on Your Practice Name",
    metaDescription:
      "Another office is advertising on your practice name in Google. What a practice can check, report and do, without a bidding war. (561) 291-2681",
    answer:
      "If another office advertises on your practice name, first confirm it is not a lookalike or directory. Then make sure your own listing ranks first, consider a small brand ad, and report any ad that uses your trademarked name in its text through Google's process. Do not bid on theirs in return.",
    author: "Liam Costello",
    publishDate: "2026-11-05T11:20:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("First, check what is really happening"),
      p(
        "A staff member searches the practice name and sees someone else's ad above the listing. It feels like theft. Before reacting, work out what kind of ad it is, because the answer decides whether anything can be done."
      ),
      table(
        ["What you see", "What it usually is"],
        ["A directory or lead site ad", "A paid listing site buying your name. Common, and usually allowed."],
        ["A competing office's ad that does not use your name in its text", "Allowed in most cases. Bidding on a name as a keyword is generally permitted."],
        ["An ad that uses your practice name in the headline or text", "May break Google's trademark policy if the name is a registered mark and you file a complaint."],
        ["An ad that looks like yours and sends calls elsewhere", "Possible impersonation. Treat it as urgent and report it."],
      ),
      p(
        "Search from a clean browser and a phone, not only from the office computer, because ads vary by location and device. Take screenshots with the date and time."
      ),
      h2("Make sure your own result is strong"),
      p(
        "The best defense is that your name search shows your practice clearly. Check the Google profile, the site title and the knowledge panel. Our guide to a [brand search audit](/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit) lists what patients see and what to fix. If your organic result and your profile already fill the top of the page, a competitor's ad takes only a small share of the clicks."
      ),
      h3("Consider a small brand ad"),
      p(
        "A low-budget search ad on your own name keeps the top spot, and it usually costs little because few other advertisers compete for it and relevance is high. It is worth it only when the competitor is actually taking clicks. The explanation of [Google Ads quality score](/guides/google-ads-quality-score-explained-for-a-medical-practice) shows why brand terms are often cheap, and the [negative keywords checklist](/guides/google-ads-negative-keywords-checklist-for-a-medical-practice) keeps the ad from showing for unrelated searches."
      ),
      h2("When to report an ad"),
      p(
        "Google lets a trademark owner complain about ads that use the mark in the ad text. The process is found in the Google Ads Help Center, and it works best with a registered mark and clear screenshots. It does not usually stop another advertiser from buying your name as a keyword. A practice without a registered mark has fewer options, and a lawyer should be asked before any threat is sent."
      ),
      ul(
        "Keep dated screenshots of the search and the ad.",
        "Note the advertiser's name from the ad's information panel.",
        "Do not click the ad, since the advertiser pays for each click.",
        "Do not call the competitor in anger; one calm written note is the most you should send, and only after advice."
      ),
      h2("What not to do"),
      p(
        "Do not bid on the competitor's name in return. It starts a cost race that helps neither office, and it can attract the same complaint. Do not mention the competitor on your site. Instead, strengthen what only you can show: real hours, clinicians, services and a clear way to call. How a paid ad fits beside organic results is covered in [local pack, organic results and Google Ads](/guides/local-pack-vs-organic-results-vs-google-ads-for-a-medical-practice)."
      ),
    ],
    faqs: [
      {
        q: "Is it legal for a competitor to bid on our practice name?",
        a: "In most cases, buying a name as a keyword is permitted by Google, and the law varies. Using your name in the ad text is a different matter. Ask a lawyer before taking action, and do not make threats yourself.",
      },
      {
        q: "Should we click the competitor's ad to see where it goes?",
        a: "No. Each click costs the advertiser money, and repeated clicks can look like click fraud. Use a screenshot and the ad information panel, or view the landing page by typing the address shown.",
      },
      {
        q: "Do we need a brand ad if we rank first already?",
        a: "Not always. If the competitor takes few clicks, you may not need one. Check your call and click data first. A small brand ad is a cheap option when your name is often searched and the competitor ad appears often.",
      },
      {
        q: "How does Google decide which ad shows?",
        a: "By bid, relevance of the ad and landing page, and other factors, not only price. A relevant brand ad often earns a high position at a low cost, which is why many practices run one.",
      },
      {
        q: "Can we ask patients to search differently?",
        a: "You can put the full web address and phone number on printed material, so patients can go straight to the site or call. A clear card in the office is more reliable than hoping they will type the right name.",
      },
    ],
    citations: [ADS_TRADEMARKS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit", label: "Brand Search Audit", description: "What patients see for your name." },
      { href: "/guides/google-ads-cost-for-a-medical-practice", label: "Google Ads Cost", description: "What a small campaign costs." },
      { href: "/guides/seo-vs-google-ads-for-a-therapy-practice", label: "SEO Or Ads", description: "How the two fit together." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1545
  {
    slug: "summer-hours-and-schedule-change-notice-for-a-primary-care-practice",
    keyword: "summer hours and schedule change notice for a primary care practice",
    category: "How-to",
    title: "Summer Hours and Schedule Change Notice",
    metaTitle: "Summer Hours and Schedule Change Notice",
    metaDescription:
      "How a primary care practice can announce summer hours on its site, Google profile and phones, and keep every place matching on the same day. (561) 291-2681",
    answer:
      "A summer hours notice should give the dates the schedule applies, the new hours for each day, which services or providers change, and who to call for anything urgent. Publish it on the site, set it as special hours on the Google profile, and update the phone greeting on the same day.",
    author: "Gio LaRoche",
    publishDate: "2026-11-05T11:40:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("Seasonal changes confuse more patients than holidays"),
      p(
        "A holiday closure is a single day, and most patients expect it. A seasonal schedule runs for weeks. A school-year office that closes early on Fridays in summer, or a practice that moves one provider to a different office for two months, creates dozens of small misunderstandings: the patient who drives over on a Friday afternoon, the parent who waits for a call back that is not coming."
      ),
      p(
        "A clear notice, placed where patients look first, prevents most of them. It should be short, dated and repeated in the same words everywhere."
      ),
      h2("What the notice must say"),
      table(
        ["Part", "What to write"],
        ["Dates", "The first and last day of the schedule, with the weekday, such as Monday, June 2 through Friday, August 15."],
        ["Hours by day", "A simple list or table, one line per day, including closed days."],
        ["What changes", "Which provider, office or service is affected, and which are not."],
        ["How to book", "The phone number, the online request link and whether same-day visits are offered."],
        ["Urgent needs", "A line telling patients to call 911 for an emergency, and where to go for urgent care."],
      ),
      h3("Keep clinical wording out"),
      p(
        "The notice describes the schedule, not anyone's health. Do not tell patients to delay care or promise that a condition can wait. Say that patients who are unsure should call the office. Our page on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) gives wording that can be linked from the notice."
      ),
      h2("Update every place on the same day"),
      ul(
        "The website: a banner on the home and contact pages, and the hours on the footer and the contact page.",
        "The Google profile: add the dates as special hours rather than changing the regular hours, so they revert on their own.",
        "The phone greeting and the voicemail, using the same dates.",
        "Directory listings and the online booking page, if they show hours.",
        "Appointment reminders, so patients booked in the period know."
      ),
      p(
        "The profile steps for temporary hours are in the Google Business Profile Help Center, and the approach in [Google Business Profile hours and closures during hurricane season](/guides/google-business-profile-hours-and-closures-during-hurricane-season) works just as well for planned seasonal changes. For the website side, see [how to message wait times and schedule availability without promises](/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises)."
      ),
      h2("When a provider is away"),
      p(
        "If a provider will be away for part of the summer, name the coverage plan in the same notice: who sees their patients, and how to reach them. The patient-facing approach to longer absences is described in the guide to a [provider on leave notice](/guides/provider-on-leave-notice-for-a-primary-care-practice-without-clinical-claims). Remove the notice the day the schedule ends, and set a calendar reminder for that date, because stale seasonal notices look careless."
      ),
    ],
    faqs: [
      {
        q: "Should summer hours be set as special hours on Google?",
        a: "Yes, if the change lasts a limited time. Special hours override the regular hours on the dates you set and then end automatically. Changing the regular hours risks leaving the wrong ones in place after the season.",
      },
      {
        q: "How far ahead should we announce the change?",
        a: "At least two to four weeks before, and again the week before. Patients book ahead, so tell those already scheduled during the period by reminder, not only on the website.",
      },
      {
        q: "Do we need a separate page for it?",
        a: "Usually a banner and a short section on the contact page are enough. A separate page helps only if the change is complicated, such as different offices or providers. Keep one place as the source of truth.",
      },
      {
        q: "Can the notice say we will see urgent concerns the same day?",
        a: "Only if that is true for the whole period. Avoid promises you may not keep. A safer line says patients with concerns should call, and that staff will advise on the next step.",
      },
      {
        q: "What if the schedule changes again mid-summer?",
        a: "Update all places on the same day and keep the original dates visible, with an updated-on date. A visible date shows patients the notice is current, and it helps staff confirm nothing was missed.",
      },
    ],
    citations: [GBP_HOURS, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday Closure Notices", description: "The one-day version of this notice." },
      { href: "/guides/evening-and-weekend-hours-for-a-primary-care-practice-publishing-extended-hours-and-keeping-google-accurate", label: "Extended Hours", description: "Publishing hours that stay accurate." },
      { href: "/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice", label: "Out-Of-Office Coverage", description: "Coverage wording for absences." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1546
  {
    slug: "chamber-of-commerce-and-local-business-association-listings-for-a-medical-practice",
    keyword: "chamber of commerce and local business association listings for a medical practice",
    category: "Playbook",
    title: "Chamber of Commerce Listings for a Medical Practice",
    metaTitle: "Chamber of Commerce Listings for a Medical Practice",
    metaDescription:
      "Is a chamber of commerce listing worth it for a medical practice? What it earns, what it costs and how to fill the entry in correctly. (561) 291-2681",
    answer:
      "A chamber of commerce or local business association listing can give a medical practice a legitimate local link and a trustworthy citation, if the membership is real and the details match the Google profile exactly. It is a small, slow benefit, so treat it as a community expense, not a ranking tactic.",
    author: "Liam Costello",
    publishDate: "2026-11-05T12:00:00Z",
    dateModified: "2026-11-05",
    readMinutes: 5,
    sections: [
      h2("What a chamber listing actually does"),
      p(
        "Chambers and business associations publish member directories, and most link to each member's site. That link comes from a local organization that real people join, which makes it a normal and acceptable kind of link. It will not move a practice up search results on its own, but it adds a consistent citation of the name, address and phone number and shows the practice is part of the community."
      ),
      p(
        "The benefit is modest and takes time to show. Think of the membership as support for local business life that also happens to produce a listing."
      ),
      h2("Is it worth the fee?"),
      table(
        ["Question", "Why it matters"],
        ["Does the listing link to your site?", "Some directories use a plain link, some use none. A link is the main reason to care."],
        ["Is the membership real?", "Pay-to-list sites that look like chambers but have no members are not worth it."],
        ["What does it cost per year?", "Compare with what the practice gets: events, referrals, a directory page, a ribbon cutting."],
        ["Can you edit the entry?", "You need control over the name, address, phone, hours and description."],
      ),
      p(
        "Ask the chamber what the directory page looks like and how many people use it before paying. A real chamber will be glad to answer."
      ),
      h2("How to fill the listing in"),
      ul(
        "Copy the name, address and phone number exactly from the Google profile, including the suite.",
        "Link to the home page or the contact page, not a deep page that may change.",
        "Write a two-sentence description in plain words, with no outcome claims or rankings.",
        "Choose a category that matches the practice, such as health care, not a general one.",
        "Add the tracking parameter described in the guide on [UTM links for profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice) if you want to see visits."
      ),
      h3("Keep it consistent"),
      p(
        "A mismatch between a directory and the Google profile is the main risk. After any address, phone or name change, update the chamber entry along with the others, as the [office move checklist](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) describes."
      ),
      h2("Where it fits among other local links"),
      p(
        "A chamber listing belongs with sponsorships and community events as part of a local presence. The guide to [local sponsorships and community events for a medical practice](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn) covers those, and the article on [safe versus penalized backlinks](/guides/backlinks-for-a-medical-practice-safe-vs-penalized) explains which kinds to avoid. Buying a batch of links is against Google's spam policies, but joining a local group is ordinary business."
      ),
      p(
        "Review the listing once a year when the membership renews. If the directory has gone stale, the link no longer works, or the fee is not justified by events and referrals, drop it."
      ),
    ],
    faqs: [
      {
        q: "Does a chamber link help rankings?",
        a: "A little, and slowly. It is one of many signals that the business is real and local. Do not expect a jump. The steadier benefit is an accurate citation and the connections that come with membership.",
      },
      {
        q: "Should a mental health practice join?",
        a: "It can. Keep the description plain and free of clinical claims, and consider whether a public directory entry suits the practice's privacy approach. Many counselors list only the business name and general category.",
      },
      {
        q: "Can we list more than one location?",
        a: "Yes, if each office is a real location with its own address and phone. Use a separate entry for each, matching its own Google profile, and never list an office that has no staff or hours.",
      },
      {
        q: "What if the chamber changes our listing?",
        a: "Check it each year. If it shows the wrong phone or address, ask for a correction right away and keep a screenshot. Wrong details in a directory can confuse patients and weaken the consistency of your listings.",
      },
      {
        q: "Are association listings from a professional body different?",
        a: "They can be stronger, because they relate directly to your field. Check what each requires, and only list credentials that are verified. Do not claim membership you do not hold.",
      },
    ],
    citations: [GOOGLE_SPAM, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn", label: "Sponsorships And Events", description: "Other local links worth earning." },
      { href: "/guides/backlinks-for-a-medical-practice-safe-vs-penalized", label: "Safe Backlinks", description: "Which links help and which hurt." },
      { href: "/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice", label: "Therapist Directory Profiles", description: "Professional directories for counselors." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
