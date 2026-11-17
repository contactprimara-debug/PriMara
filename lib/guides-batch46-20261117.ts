// -- Guides batch 46 - 2026-11-17 --
// Guide/AEO pages from the Command Center queue (rows 1840, 1841, 1844, 1846, 1848, planned 2026-11-16), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only.
// Plain practical guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const FTC_ADV = {
  publisher: "Federal Trade Commission",
  label: "Advertising and Marketing guidance for businesses",
  href: "https://www.ftc.gov/business-guidance/advertising-marketing",
};
const FTC_ENDORSE = {
  publisher: "Federal Trade Commission",
  label: "The FTC's Endorsement Guides: What People Are Asking",
  href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
};
const HHS_MARKETING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA Privacy Rule: Marketing",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html",
};
const HHS_EMAIL = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Does HIPAA permit health care providers to use email to discuss health issues with patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html",
};
const GA_KEY_EVENTS = {
  publisher: "Google Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const GBP_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const DIGITAL_GOV_PLAIN = {
  publisher: "Digital.gov",
  label: "Plain language guide series",
  href: "https://digital.gov/guides/plain-language",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty9: Guide[] = [
  // ---------------------------------------------------------------- 1840
  {
    slug: "community-flyer-or-bulletin-board-notice-for-a-counseling-practice-what-it-can-say-and-where-it-should-point",
    keyword: "a community flyer or bulletin-board notice for a counseling practice: what it can say and where it should point",
    category: "How-to",
    title: "Bulletin Board Flyer for a Counseling Practice",
    metaTitle: "Community Flyer for a Counseling Practice: What to Say",
    metaDescription:
      "What a counseling practice flyer or bulletin-board notice can say, what to leave off, and one web address it should point to. (561) 291-2681",
    answer:
      "A counseling practice flyer should name the practice, say in one plain line who it serves, and point to one web address and one phone number. Leave off promises of results, client stories and any language that could single out a person who takes a tear-off tab.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T14:00:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("What a flyer is for"),
      p(
        "A flyer on a library, church, school or community-center board has one job: make a person who already needs help remember your name and know the next step. It is read in a few seconds by someone walking past, often while other people are standing nearby."
      ),
      p(
        "That last point shapes everything. A person who takes a tear-off tab from a counseling flyer may not want a neighbor to see which phrase they tore. Wording that names a specific struggle can make the tab feel like an announcement. Keep the flyer about the practice and the next step, and let the website carry the detail."
      ),
      h2("The five lines a flyer needs"),
      ol(
        "The practice name, in the same wording used on your website and Google profile.",
        "One plain sentence on who you see, such as adults, couples, teens with a parent, or families, using the groups you actually serve.",
        "The town or area, so a reader knows it is local.",
        "One phone number, the same one that appears on your website.",
        "One short web address that lands on a page built for people arriving from a flyer."
      ),
      p(
        "Everything else is optional, and most of it makes the flyer worse. A crowded flyer is skipped. If a line does not help someone decide to call or visit, take it out."
      ),
      h2("What to leave off"),
      ul(
        "Promises about results, speed of relief or success rates. The FTC expects claims in advertising to be truthful and not misleading, and a flyer is advertising.",
        "Quotes or stories from clients. Our guide to [patient testimonial compliance checklist](/guides/patient-testimonial-compliance-checklist) explains why those need far more care than they seem to.",
        "Photographs of identifiable people who are not on your staff, and any image that implies a diagnosis.",
        "Words that sort people into labels. Speak to the situation a reader is in, not a condition you think they have.",
        "Crisis claims. If your office is not staffed around the clock, do not imply it is."
      ),
      h3("A line about emergencies belongs on the flyer"),
      p(
        "A short line telling a reader in crisis to call 911 or the 988 Suicide and Crisis Lifeline protects the reader and costs one line of space. It also keeps the flyer from implying your office answers emergencies when it does not."
      ),
      h2("Where it should point"),
      p(
        "Do not send readers to your home page and hope. Point the flyer to one page that opens with what a first call is like, how to reach you, and how long a reply takes. Our guide on a [first-time client contact form for a counseling practice](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) covers the form side of that page."
      ),
      p(
        "Use a short address that a person can type from memory or from a phone photo, with the page's tracking in place so that visits from the flyer are counted. The address should be plain text beneath any QR code, because many people will photograph the flyer and type it later."
      ),
      table(
        ["Flyer element", "Check before printing"],
        ["Phone number", "Matches the website and Google profile character for character"],
        ["Web address", "Opens on a phone, loads in a few seconds, shows the phone number at the top"],
        ["QR code, if used", "Scan it with two different phones and confirm it lands on the flyer page"],
        ["Tear-off tabs", "Show only the phone number or address, never a phrase about a problem"],
        ["Permission", "The board owner has said yes, and the flyer carries an end date"]
      ),
      h2("Placement and upkeep"),
      p(
        "Ask the board's owner before posting, and write the posting date on the back. A flyer that stays up for a year with an old phone number does more harm than no flyer. Put a reminder on your calendar to walk the route and replace or remove each one. If you also support local events, the guide on [local sponsorships and community events](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn) shows how to turn the same relationships into links."
      ),
      p(
        "Keep one master copy of the flyer wording in the same folder as your other printed pieces, such as the [appointment cards and brochures that match the website](/guides/appointment-cards-and-brochures-that-match-the-website-for-a-primary-care-practice). When the phone number or address changes, every printed item changes together."
      ),
    ],
    faqs: [
      {
        q: "Should a counseling flyer name the problems we help with?",
        a: "Keep it general. Say who you serve and where you are, and let the web page explain more. Naming a specific struggle can make a reader hesitate to take a tear-off tab in public.",
      },
      {
        q: "Is a QR code worth adding?",
        a: "Often yes, if it opens a page that works well on a phone. Print the web address in text beside it, and scan it with two phones before the flyer goes to the printer.",
      },
      {
        q: "Can the flyer include a quote from a past client?",
        a: "We recommend against it. Client stories raise privacy and advertising questions, and the FTC guidance on endorsements and testimonials applies to printed material too.",
      },
      {
        q: "How do I know whether a flyer brought anyone in?",
        a: "Send it to its own short web page and look at visits to that page in your analytics, and ask each new caller how they found you. Both are counts, not stories.",
      },
      {
        q: "How long should a flyer stay posted?",
        a: "Put an end date on it, commonly a few weeks to a few months, and replace it with a fresh copy. Old flyers with outdated details are worse than an empty board.",
      },
    ],
    citations: [FTC_ADV, FTC_ENDORSE],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "Fields, privacy notice and reply time." },
      { href: "/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn", label: "Local Sponsorships and Community Events", description: "Turn local ties into links." },
      { href: "/guides/appointment-cards-and-brochures-that-match-the-website-for-a-primary-care-practice", label: "Cards and Brochures That Match the Website", description: "Keep printed pieces consistent." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1841
  {
    slug: "follow-up-page-and-handout-after-a-practice-owner-speaks-to-a-community-group-without-patient-stories",
    keyword: "a follow-up page and handout after a practice owner speaks to a community group, without patient stories",
    category: "Playbook",
    title: "Follow-Up Page After You Speak to a Community Group",
    metaTitle: "Follow-Up Page After a Community Talk by a Practice",
    metaDescription:
      "Build a one-page handout and a matching web page after a practice owner speaks to a local group, with no patient stories. (561) 291-2681",
    answer:
      "After a talk, give the group a one-page handout with your practice name, three plain takeaways and one short web address. That address opens a matching page with the same takeaways, how to reach you, and nothing about any patient. It lets listeners find you later and lets you count visits.",
    author: "Liam Costello",
    publishDate: "2026-11-17T14:10:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("The talk ends, and then what"),
      p(
        "A practice owner who speaks to a parent group, a senior center or a business association usually leaves with a few kind words and nothing to measure. People in the room are interested for about a day. A handout and a follow-up page give that interest somewhere to go."
      ),
      p(
        "The goal is modest: someone who heard you speak can find the practice's phone number and a trustworthy page within a minute, and you can see whether they did. This is different from an event page announced beforehand, which our guide to a [health fair and community education event page](/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice) covers."
      ),
      h2("Build the handout first"),
      p(
        "Keep it to one side of one sheet. The handout is the thing people take home and the thing the web page must match, so write it first."
      ),
      ol(
        "A title that repeats the talk's topic in plain words, such as the question the group asked you to answer.",
        "Three takeaways, each one sentence, drawn from general public guidance and not from any one person's situation.",
        "The practice name, town, phone number and the short web address.",
        "One line saying the handout is general information and not a substitute for an appointment.",
        "A source line naming where the takeaways came from, such as a public health agency page."
      ),
      h3("Where the takeaways come from"),
      p(
        "Take them from published public sources, not from your caseload. The HHS marketing guidance for HIPAA is a good reminder of why: using a person's information to promote the practice is a line most owners do not want to approach, so build the handout so the question never comes up."
      ),
      h2("Then the matching web page"),
      p(
        "The page repeats the three takeaways, adds a little more explanation, and puts the phone number and the contact form above the fold. Give it its own short address, such as a page under your guides or events area, so visits are easy to count. Do not publish the group's name or the attendees' names unless the organizer has agreed in writing."
      ),
      table(
        ["Page element", "What it should hold"],
        ["Heading", "The same title as the handout"],
        ["Takeaways", "The three sentences, with one short paragraph under each"],
        ["Sources", "Links to the public pages the takeaways came from"],
        ["Next step", "Phone number, hours, and the contact form, with the reply time stated"],
        ["Not on the page", "Patient stories, photos of attendees, names of participants or any health detail about a person"]
      ),
      p(
        "Make sure the page is easy to read on a phone, because most people will open it from a photo of the handout or a QR code. The [first five seconds on a phone](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page) guide gives a quick way to check that."
      ),
      h2("Count what happens"),
      p(
        "Give the handout one address that is used nowhere else. Then you can read visits to that page in your analytics and see form submissions that came through it. Google's key events help page explains how to mark a form submission as a countable event. Write the results into your [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) so talks are compared with every other source."
      ),
      p(
        "Ask each new caller in the week after a talk where they heard of you, and log the answer. Our guide on the [how-did-you-hear question](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing) explains how to ask without making it awkward."
      ),
    ],
    faqs: [
      {
        q: "Do I need a separate page for each talk?",
        a: "A separate short page per talk makes counting easy, but one page that lists recent talks works if each handout uses a different short link. Choose what you can keep up to date.",
      },
      {
        q: "Can I thank the group by name on the page?",
        a: "Only if the organizer has agreed. A plain thank-you without names is safe, and the organizer can tell you whether naming the group is welcome.",
      },
      {
        q: "What if someone in the room asked me a personal question?",
        a: "Answer in general terms in the room, and never repeat or reference the question on the handout or page. Invite the person to call the office for an individual conversation.",
      },
      {
        q: "Should the handout include a coupon or offer?",
        a: "We recommend leaving offers off. A handout that sounds like a sales sheet loses the trust the talk built, and offers in health care raise rules a practice owner should avoid guessing about.",
      },
      {
        q: "How long should the page stay up?",
        a: "Keep it as long as the information is accurate. Review it with your other pages each year and remove it if the topic is out of date.",
      },
    ],
    citations: [HHS_MARKETING, GA_KEY_EVENTS],
    links: [
      { href: "/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice", label: "Health Fair and Education Event Page", description: "The page you publish before an event." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Track every source in one place." },
      { href: "/guides/online-workshop-and-webinar-page-with-event-markup-for-a-counseling-practice", label: "Workshop and Webinar Page", description: "A page for a live session." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1844
  {
    slug: "community-involvement-page-for-a-medical-practice-that-avoids-patient-stories-and-endorsements",
    keyword: "a community involvement page for a medical practice that avoids patient stories and endorsements",
    category: "How-to",
    title: "Community Involvement Page for a Medical Practice",
    metaTitle: "Community Involvement Page for a Medical Practice Site",
    metaDescription:
      "How a medical practice can show local involvement on its website without patient stories or endorsements, with a page outline. (561) 291-2681",
    answer:
      "A community involvement page lists what the practice does locally in plain facts: the organization, the date, and the practice's role. It names only people who agreed, shows no patient stories or testimonials, and ends with how to reach the office. Facts about the practice are safe; stories about patients are not.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T14:20:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("What the page is and why a practice has one"),
      p(
        "Patients choosing a new office often look for signs that the practice belongs to the town. A page about school screenings, a charity walk or a local board seat answers that without a single claim about care. It also gives other local sites something real to link to."
      ),
      p(
        "Google's guidance on helpful content asks whether a page shows first-hand experience and was written for readers first. A plain record of what your practice did, with dates, meets that test better than a vague paragraph about caring for the community."
      ),
      h2("The line to hold: facts, not stories"),
      p(
        "The page can say what the practice did. It should not say whom the practice helped. Any sentence about a patient's experience, even an unnamed one, drifts toward a testimonial, and health care testimonials come with advertising and privacy questions that are not worth the risk for a community page. The FTC treats endorsements and testimonials as advertising claims that must be truthful."
      ),
      table(
        ["Fine to publish", "Leave off"],
        ["The organization's name, the date and the practice's role", "A story about someone the event helped"],
        ["Photos of staff who agreed to appear", "Photos of attendees who did not sign a release"],
        ["A thank-you to the host organization", "Quotes from the host praising the practice, unless the host agrees in writing"],
        ["A link to the organizer's own page", "Language that implies the organizer endorses the practice"]
      ),
      h2("An outline that works"),
      ol(
        "A short opening paragraph saying how the practice takes part locally and where the office is.",
        "A list of recent activities, newest first, each with the organization, the month and year, and one sentence on what staff did.",
        "A short section on how an organization can contact the practice about a school, club or business visit.",
        "The office phone number, address and hours, matching the contact page.",
        "A line with the date the page was last reviewed."
      ),
      h3("Keep each entry factual"),
      p(
        "A good entry reads like this in structure: the organization, the month, the staff role, and a link to the organizer. It does not use adjectives about the event's success or claim any result for attendees."
      ),
      h2("Photos, names and permission"),
      p(
        "Ask each staff member before using a photo. Ask the host before naming them, especially if they are a school or a youth group, and never publish photographs of children. If you are unsure whether a person would want to appear, leave the image out. The page loses nothing by being plain."
      ),
      p(
        "Our guide to [local sponsorships and community events](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn) explains how to ask a host for a link back, and the [staff and team page guide](/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first) covers photo permission for your own team."
      ),
      h2("Where to link it and when to refresh it"),
      p(
        "Link the page from the About section and from the footer, and mention it in one sentence on pages that talk about your team. Add a line after each new activity and remove entries older than two or three years so the page stays current. If your practice also runs a patient education day, point to the separate [event page](/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice) from the list rather than repeating it."
      ),
    ],
    faqs: [
      {
        q: "Can we thank a local organization by name?",
        a: "Yes, a plain thank-you with the organization's name and the date is fine in most cases. Check with the organizer first, especially for schools and youth groups, and avoid wording that implies they endorse you.",
      },
      {
        q: "Is a donation worth listing?",
        a: "You can list that the practice supported an event. Keep it to a fact, with the organization and date, and do not publish amounts or claim the donation is why anyone should choose the practice.",
      },
      {
        q: "Should patients be invited to share how they helped?",
        a: "No. Keep patients out of the page entirely. Any invitation to share their stories turns the page into a collection of testimonials, which is the thing it is designed to avoid.",
      },
      {
        q: "How many entries should the page have?",
        a: "Three to six recent, real entries are plenty. A short accurate page is better than a long one with items nobody remembers.",
      },
      {
        q: "Does a community page help the practice rank in search?",
        a: "It can support local relevance and earn links from the organizations named, but it is one signal among many. We would build it because patients read it, not as a ranking shortcut.",
      },
    ],
    citations: [GBP_HELPFUL, FTC_ENDORSE],
    links: [
      { href: "/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn", label: "Local Sponsorships and Community Events", description: "Earn links from local ties." },
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Front Desk and Care Team Page", description: "Staff photos and names." },
      { href: "/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice", label: "Health Fair Event Page", description: "A page for a single event." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1846
  {
    slug: "ninety-day-review-of-a-new-practice-website-five-counts-a-counseling-practice-owner-can-read-without-technical-skills",
    keyword: "a ninety-day review of a new practice website: five counts a counseling practice owner can read without technical skills",
    category: "Checklist",
    title: "Ninety-Day Review of a New Practice Website",
    metaTitle: "90-Day Review of a New Counseling Practice Website",
    metaDescription:
      "Five counts a counseling practice owner can read after 90 days on a new website, with no technical skills and no health details. (561) 291-2681",
    answer:
      "Ninety days after a new website goes live, read five counts: form submissions, phone taps, pages Google has indexed, search clicks, and the share of visitors who reach the contact page. Compare each to the first month, write one sentence per count, and decide one change. No technical skill is needed.",
    author: "Liam Costello",
    publishDate: "2026-11-17T14:30:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Why ninety days"),
      p(
        "A new website tells you very little in its first week. Google has barely crawled it and few visitors have arrived. By day ninety there is enough to read, and early mistakes such as a broken form or a missing page are still cheap to fix."
      ),
      p(
        "This review is for a practice owner, not an analyst. It uses five numbers, each from a screen you can open in a few minutes, and it ends with one decision. Our [launch checklist for a medical website](/guides/medical-website-launch-seo-checklist) covers what should be in place on day one."
      ),
      h2("The five counts"),
      table(
        ["Count", "Where to read it"],
        ["Form submissions that reached the office", "Your office inbox or form log, counted by hand, compared with the analytics count"],
        ["Phone taps from the website", "The phone-tap event in your analytics, if tracking is set up"],
        ["Pages Google has indexed", "The Pages report in Search Console"],
        ["Search clicks and impressions", "The Performance report in Search Console for the last 28 days"],
        ["Visitors who reach the contact page", "Analytics page views on the contact page against total visits"]
      ),
      h3("Count one, form submissions"),
      p(
        "Count the real inquiries your office received in the last 90 days. Do not count test messages. Then check that analytics shows a matching number, using the key events help page as the guide to what a form submission should be marked as. If the two numbers differ by more than one or two, the tracking needs attention before you trust any other count."
      ),
      h3("Count two, phone taps"),
      p(
        "A tap on the phone number is a sign of interest, not a connected call, so read it as that. If it is zero on a site with steady visits, check that the number on every page is a link a phone can tap. The guide on [phone number format and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) shows what to look for."
      ),
      h3("Counts three and four, indexing and search"),
      p(
        "Open Search Console and read how many pages are indexed against how many you published. Then read search clicks for the last 28 days. Early on, impressions rise before clicks, so look at the direction rather than the total."
      ),
      h3("Count five, the contact page"),
      p(
        "Divide contact page views by total visits. You are not hunting for a magic percentage. You are looking for a very low number, which usually means the way to the contact page is hard to find on a phone."
      ),
      h2("Write one sentence per count"),
      p(
        "For each count, write what it was in the first month, what it is now, and one plain sentence on what it suggests. Keep the sentences factual. Our template for a [plain monthly note to a practice owner](/guides/plain-monthly-note-to-a-practice-owner-summarizing-calls-forms-and-one-change-made-without-technical-terms) shows the same style."
      ),
      h2("Choose one change"),
      p(
        "Pick the one count that looks weakest and decide one change to make before the next review. If forms are low, look at the form's length and where it sits. If indexing is low, add links from pages Google already knows. Make one change at a time so you can tell what helped, and write the date next to it."
      ),
      p(
        "Then book the next review for ninety days later, and add it to your [yearly calendar of website, Google profile and phone checks](/guides/a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates)."
      ),
    ],
    faqs: [
      {
        q: "What if the site has very few visitors at ninety days?",
        a: "Low early traffic is common for a new site. Focus on whether the pages are indexed and whether the form and phone link work, because those tell you if visitors would be able to reach you.",
      },
      {
        q: "Do I need an analyst to do this?",
        a: "No. Each count comes from a single screen or your own inbox. If you cannot find one, ask whoever built the site to show you where it is.",
      },
      {
        q: "Are phone taps the same as calls?",
        a: "No. A tap shows someone pressed the number. It does not show a call connected, so use it as a sign of interest and read your phone log for actual calls.",
      },
      {
        q: "Should I compare to other practices?",
        a: "Avoid it. Compare your site to its own first month. Other practices differ in size, town and history, so outside numbers can mislead.",
      },
      {
        q: "Can I do the review at sixty days instead?",
        a: "You can look earlier, but expect thinner numbers. Sixty days is fine for catching a broken form or tap link, and ninety days is better for judging search.",
      },
    ],
    citations: [GA_KEY_EVENTS, GBP_HELPFUL],
    links: [
      { href: "/guides/medical-website-launch-seo-checklist", label: "Medical Website Launch Checklist", description: "What should be in place on day one." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "A simple way to count inquiries." },
      { href: "/guides/setting-simple-monthly-goals-for-calls-and-forms-for-a-small-medical-practice-website", label: "Simple Monthly Goals for Calls and Forms", description: "Set a target you can read." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1848
  {
    slug: "what-we-can-and-cannot-do-by-email-notice-for-the-contact-page-of-a-primary-care-practice-that-never-discusses-health-details",
    keyword: "a one-page what-we-can-and-cannot-do-by-email notice for the contact page of a primary care practice that never discusses health details",
    category: "How-to",
    title: "What We Can Do By Email: Contact Page Notice",
    metaTitle: "What a Practice Can Do by Email: Contact Page Notice",
    metaDescription:
      "A short notice for a primary care contact page that says what email is for and what it is not, with no health details. (561) 291-2681",
    answer:
      "Put a short notice on the contact page that lists what email is for, such as office hours and appointment requests, and what it is not for, such as health questions or emergencies. Give a phone number for those, state a reply time, and invite people to leave health details out of messages.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T14:40:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Why a practice needs a short email notice"),
      p(
        "Patients will use whatever channel is easiest. If the contact page offers an email address with no guidance, some will write about symptoms, test results or medications, and expect a clinical answer. The office then faces messages it did not plan to receive, about matters that are not safe to handle that way."
      ),
      p(
        "A short notice sets expectations in advance. It protects the patient, because they are told where urgent things go, and it protects the front desk, because the page has already said what the inbox is for. HHS addresses email between providers and patients in its HIPAA FAQ, and the notice here is a plain-language version of the habit that guidance encourages: think about what you send and receive by email."
      ),
      h2("What the notice should say"),
      table(
        ["Email is for", "Email is not for"],
        ["Appointment requests and changes", "Anything urgent or that feels like an emergency"],
        ["Office hours, directions and parking questions", "Questions about symptoms, results or medicines"],
        ["Asking where to send forms or records requests", "Sending health details or photos of a condition"],
        ["Billing questions that do not include account details", "Sharing insurance card numbers or other identifiers"]
      ),
      p(
        "Write the notice in two short parts, one for each column, and keep each item to a few words. A person scanning on a phone should understand it in ten seconds."
      ),
      h3("The emergency line comes first"),
      p(
        "Put the emergency line at the top: if this is an emergency, call 911. Then give the office phone number for urgent questions during open hours and say plainly what to do after hours. Our guide to [after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) covers the voicemail side."
      ),
      h2("Wording you can adapt"),
      p(
        "Keep the tone friendly. A line such as 'To protect your privacy, please leave health details out of email, and call us for anything about symptoms or results' is clear and does not scold. Add a sentence that gives a reply time, such as one business day, only if the office can actually meet it."
      ),
      ul(
        "Say what a reply will and will not contain, for example that staff will answer scheduling questions and will call back about anything else.",
        "Say which address is monitored and when, so nobody writes to a mailbox that is checked once a week.",
        "Mention the secure patient portal if the practice has one, and make the link easy to find.",
        "Do not promise encryption or security the practice cannot confirm with its email provider."
      ),
      h2("Where the notice goes"),
      p(
        "Place it directly above or beside the email address on the contact page, in the same type size as the surrounding text, and repeat a one-line version under the contact form. The [contact page guide](/guides/what-to-put-on-a-medical-practice-contact-page) lists what else belongs on the page, and the [confirmation email wording guide](/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details) shows how the same message can carry into the automatic reply."
      ),
      p(
        "Staff email follows the same habit. Use the template in our [email signature and footer guide](/guides/email-signature-and-confidentiality-footer-for-medical-practice-staff) so every reply points back to the phone number and avoids health details."
      ),
      h2("Keep it honest and current"),
      p(
        "Review the notice when the office hours, the portal or the inbox owner changes. Ask the front desk once a quarter what kinds of email they receive that the notice should have prevented, and adjust the wording. This is practical guidance and not legal advice; ask a qualified adviser about your own obligations."
      ),
    ],
    faqs: [
      {
        q: "Is this notice required?",
        a: "We do not know of a rule that requires this exact notice. It is a practical habit that sets expectations, and your own adviser can say what your obligations are.",
      },
      {
        q: "Should the notice say email is secure?",
        a: "Only if your email provider confirms it and your practice has set it up that way. Otherwise leave security claims out and ask patients to leave health details out of messages.",
      },
      {
        q: "What reply time should we state?",
        a: "State the time the office can reliably meet, such as one business day. A longer honest time is better than a short promise that is often missed.",
      },
      {
        q: "What should the front desk do if a patient emails a symptom anyway?",
        a: "Call the patient back on the number on file, or follow the practice's own written process. Do not give clinical advice by reply, and do not forward the message beyond those who need it.",
      },
      {
        q: "Does the notice replace a patient portal?",
        a: "No. If the practice has a portal, point to it for messages that involve health matters, and keep the notice for explaining what ordinary email is for.",
      },
    ],
    citations: [HHS_EMAIL, DIGITAL_GOV_PLAIN],
    links: [
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "What to Put on a Contact Page", description: "The full contact page checklist." },
      { href: "/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details", label: "Contact Form Confirmation Wording", description: "The automatic reply patients see." },
      { href: "/guides/email-signature-and-confidentiality-footer-for-medical-practice-staff", label: "Email Signature and Footer", description: "A consistent staff signature." },
      LOC,
    ],
  },
];
