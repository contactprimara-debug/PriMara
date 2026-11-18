// -- Guides batch 45 - 2026-11-16 (afternoon run) --
// Guide/AEO pages from the Command Center queue (rows 1808, 1812, 1813, 1814, 1815, planned 2026-11-16), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only.
// Plain practical guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const W3C_EASY = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Easy Checks - A First Review of Web Accessibility",
  href: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
const W3C_LABELS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Labeling Controls in Forms Tutorial",
  href: "https://www.w3.org/WAI/tutorials/forms/labels/",
};
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const HHS_PRIVACY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA Privacy Rule guidance",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
};
const GA_KEY_EVENTS = {
  publisher: "Google Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const DIGITAL_GOV_PLAIN = {
  publisher: "Digital.gov",
  label: "Plain language guide series",
  href: "https://digital.gov/guides/plain-language",
};
const GMAPS_DIRECTIONS = {
  publisher: "Google Maps Help",
  label: "Get directions and show routes in Google Maps",
  href: "https://support.google.com/maps/answer/144339",
};
const APPLE_BUSINESS = {
  publisher: "Apple",
  label: "Apple Business",
  href: "https://business.apple.com/",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty8: Guide[] = [
  // ---------------------------------------------------------------- 1808
  {
    slug: "five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills",
    keyword: "a five-minute screen-reader test of the contact and booking pages that a practice owner can run without technical skills",
    category: "Checklist",
    title: "Five-Minute Screen Reader Test of Your Contact Page",
    metaTitle: "Five-Minute Screen Reader Test for a Practice Website",
    metaDescription:
      "Hear your contact and booking pages as a screen reader user does. A five-minute, no-tech test for practice owners, with what to note. (561) 291-2681",
    answer:
      "Turn on the screen reader already built into your phone or computer, then spend five minutes listening to your contact page and booking path with the screen turned away. Note every spot where the phone number, a form field or the booking button is unclear when read aloud, and hand that list to your web person.",
    author: "Liam Costello",
    publishDate: "2026-11-16T20:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("What this test is, and what it is not"),
      p(
        "A screen reader reads a page aloud and lets the listener move between headings, links and form fields with the keyboard or touch gestures. People who are blind or have low vision rely on one, and so do some people with reading difficulties. Listening to your own contact page this way for five minutes shows you what it sounds like when the layout does not help."
      ),
      p(
        "It is a spot check, not a full review. The W3C describes its own first-review checks as quick and not definitive, and the same is true here: a page can pass this test and still have barriers a specialist would find. Nothing in it is a legal opinion, and for the broader picture our guide to [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) is the place to start."
      ),
      h2("Before you start"),
      ul(
        "Pick one device: an iPhone or Mac with VoiceOver, an Android phone with TalkBack, or a Windows computer with the free NVDA reader.",
        "Open the contact page and the first page of your booking path in one tab or screen.",
        "Do not submit anything. Stop before the final button on every form, because live forms email your office.",
        "Tell the front desk you are testing, so nobody is alarmed by the voice coming from your office.",
        "Look away from the screen or lower the brightness. If you can see the layout, you will not hear the gaps."
      ),
      p(
        "Each device starts its reader from its accessibility settings. If you have never used one, spend a minute on the built-in practice mode first, because the gestures feel strange for the first few tries."
      ),
      h2("The five minutes, one minute at a time"),
      ol(
        "Minute one, the top of the page. Open the contact page and listen to the first thing read. It should name your practice and say what the page is for, not read out a row of menu items.",
        "Minute two, headings. Use the reader's heading shortcut to jump from heading to heading. You should hear a short outline: how to reach you, hours, address, and the form. If you hear nothing, or the same word repeated, the headings are missing or misused.",
        "Minute three, the phone number and links. The number should be announced as a link you can activate, with the digits read in a sensible order. Links should say where they go. A link read only as 'click here' or 'read more' tells the listener nothing.",
        "Minute four, the form fields. Move through each field. Every one should be announced with its name, such as 'first name', before the words that say it is an edit box. A field announced only as 'edit text' has no label.",
        "Minute five, the booking path. Move to the booking button or widget. The button should say what it does, you should be able to enter and leave any pop-up without getting stuck, and you should be able to get back to the page."
      ),
      h3("Write down what you heard"),
      table(
        ["What you heard", "What it usually means"],
        ["Only the word 'edit' or 'edit text' for a field", "The field has no label tied to it, so a listener cannot tell what to type"],
        ["'Link, click here' repeated", "Link text does not describe the destination"],
        ["Nothing when you jump by heading", "The page uses bold text instead of real headings"],
        ["Focus disappears after the booking button", "The widget opens something the reader cannot enter, or cannot leave"],
        ["Phone number read as one long number", "The digits are not grouped, or the number is an image with no text"]
      ),
      p(
        "The W3C forms tutorial explains why labels matter: a properly tied label gives assistive technology the right name for each field, and it also enlarges the area a sighted person can tap."
      ),
      h2("Hand the list to the right person"),
      p(
        "Write each finding as one plain sentence with the page name and what you heard. Your web person can usually fix labels, headings and link text quickly, but a third-party booking widget may need a message to the vendor. If a visitor tells you about a barrier, the wording in our [accessibility statement and barrier-reporting guide](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) gives them an easy way to reach you."
      ),
      p(
        "Forms deserve extra attention. Our guide to [accessible intake forms for patients with low vision or limited reading skills](/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website) covers labels, instructions and error messages in more depth. A screen reader can only switch to Spanish pronunciation if the page declares it, which [declaring the language of a page and of a Spanish phrase inside an English page](/guides/declaring-the-language-of-a-counseling-practice-page-and-of-a-spanish-phrase-inside-an-english-page) shows how to check."
      ),
      h2("Repeat it after any change"),
      p(
        "Run the five minutes again whenever the form, the booking widget or the contact page layout changes. Put it on the calendar next to your other routine checks, such as the [quarterly secret shopper test](/guides/a-quarterly-secret-shopper-test-of-the-website-and-phone-line-for-a-counseling-practice-using-staff-and-no-real-patients). Run the keyboard-only version as well, since our guide to [keyboard focus outline and tab order on booking and contact pages](/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website) shows how a person who cannot use a mouse moves through the same pages."
      ),
    ],
    faqs: [
      {
        q: "Do I need to buy software to run this test?",
        a: "No. iPhone, Mac and Android devices include a screen reader, and NVDA for Windows is free. The test only needs one of them and about five minutes.",
      },
      {
        q: "Will this tell me if my site meets the law?",
        a: "No. It is a quick listening check, not a legal review. For compliance questions, ask a qualified professional and use this test only to find obvious problems early.",
      },
      {
        q: "Is it safe to try the form while the screen reader is running?",
        a: "Move through the fields but stop before the submit button. A live form on your site emails your office, and a test message can be mistaken for a real inquiry.",
      },
      {
        q: "What if the booking widget belongs to another company?",
        a: "Write down exactly what you heard and send it to the vendor's support team, with the page address. You can also offer a phone number on the same page as another way to book.",
      },
      {
        q: "How often should I repeat it?",
        a: "Repeat it after any change to the contact page, the form or the booking path, and otherwise a few times a year with your other routine site checks.",
      },
    ],
    citations: [W3C_EASY, W3C_LABELS],
    links: [
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Medical Practice", description: "The wider picture on accessible sites." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement and Barrier Reporting", description: "Let visitors tell you about a barrier." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Labels, instructions and errors." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1812
  {
    slug: "who-answers-which-call-list-for-billing-referrals-records-and-scheduling-on-the-contact-page-of-a-primary-care-practice",
    keyword: "a who-answers-which-call list for billing, referrals, records and scheduling on the contact page of a primary care practice",
    category: "How-to",
    title: "Who-Answers-Which-Call List for a Contact Page",
    metaTitle: "Who Answers Which Call: Primary Care Contact Page List",
    metaDescription:
      "A short contact-page list that tells callers whether to reach scheduling, billing, records or referrals, with hours and no health details. (561) 291-2681",
    answer:
      "Add a short table to your contact page with one row each for scheduling, billing, medical records and referrals. Give each row the right number or email, the hours that person answers, and one plain sentence. Callers reach the right desk the first time, and no health details appear on the page.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T20:05:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Why callers get passed around"),
      p(
        "Most small practices publish one phone number and one email address. That works until a caller with a billing question reaches the scheduling line, or an outside office that needs records waits on hold behind new-patient calls. Each transfer costs the caller a minute and costs the front desk another interruption."
      ),
      p(
        "A short list on the contact page sends people to the right desk before they dial. It is different from a phone menu, which works after the call connects. Our guide to [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) covers that side, and the two work best together."
      ),
      h2("What the list looks like"),
      table(
        ["Caller needs", "What to publish"],
        ["Scheduling or rescheduling", "The main number, the hours it is answered, and the online request link if you have one"],
        ["Billing and payment questions", "The billing desk number or email and the days it is staffed"],
        ["Medical records requests", "The records email or fax line, and a link to the request form, never the details of a record"],
        ["Referrals from other offices", "A direct line or fax number for outside offices, separate from the new-patient line"],
        ["Anything else", "The main number and a one-line pointer to the contact form"]
      ),
      p(
        "Use only the rows that match how your office really works. If one person handles billing and records, say so with one row, not two."
      ),
      h3("A small practice can start with two rows"),
      p(
        "If your office has one front desk and one person who handles bills, start with two rows, scheduling and billing, and add the others only when callers actually ask for them. A short list that is always right beats a long one that drifts out of date."
      ),
      h2("Keep health details off the page"),
      p(
        "The list names departments, not conditions. Never write lines such as 'call here about a test result' or tie a number to a diagnosis. The federal HIPAA guidance linked below treats the details of a patient's care as protected, and a public contact page is the wrong place for them."
      ),
      p(
        "Be equally careful with email addresses. Use a shared role address such as billing at your domain, not a staff member's personal inbox. Our guide to a [shared role mailbox for website forms](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice) explains why."
      ),
      h2("Write each row so a caller can act on it"),
      ul(
        "Start with the reason in the caller's own words, such as 'a question about a bill'.",
        "Give the number or address once, as a tap-to-call link on a phone.",
        "State the hours that desk answers, which may be shorter than office hours.",
        "Say what happens if nobody answers, such as 'leave a message and we return calls by the next business day'.",
        "End the list with the main number so nobody is left without a path."
      ),
      p(
        "Hours matter more than most owners expect. If billing is staffed only in the mornings, the row should say so. The difference between when the building is open and when the phone is answered is covered in our guide to [phone-answered hours versus office hours](/guides/phone-answered-hours-versus-office-hours-on-a-medical-practice-website-and-google-profile)."
      ),
      h3("Match your Google profile"),
      p(
        "Your Google Business Profile has a primary phone number and room for the website address. Keep the main number on the profile identical to the main number on the list, and check the rest of the contact page against the list in our guide to [what to put on a medical practice contact page](/guides/what-to-put-on-a-medical-practice-contact-page)."
      ),
      h2("Keep the list true"),
      p(
        "A wrong number on a contact page is worse than none. Name one person who owns the list, and review it whenever a role changes or someone leaves. The [website change request form](/guides/website-change-request-form-for-staff-at-a-medical-practice-so-edits-to-hours-providers-and-notices-reach-the-right-person) gives staff a simple way to report a change before callers find it."
      ),
    ],
    faqs: [
      {
        q: "Should each department have its own phone number?",
        a: "Not necessarily. One main number with clear extensions or a menu is fine for a small office. Publish a separate direct line only if a real person answers it.",
      },
      {
        q: "Can I list a fax number on the contact page?",
        a: "Yes, if outside offices use it to send referrals or records requests. Label it plainly as a fax line so patients do not call it by mistake.",
      },
      {
        q: "Where should the list go on the page?",
        a: "Place it below the main phone number and hours, above the contact form, so a caller sees the simple options before deciding to write.",
      },
      {
        q: "Do I need a separate list for a counseling practice?",
        a: "The idea carries over. Use rows for new-client requests, scheduling, billing and records, and keep all clinical details off the page.",
      },
      {
        q: "How do I know the list is working?",
        a: "Count how many calls are transferred in a typical week before and after you publish it. Fewer transfers and shorter hold times mean callers are reaching the right desk.",
      },
    ],
    citations: [HHS_PRIVACY, GBP_EDIT],
    links: [
      { href: "/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients", label: "Phone Menus and Call Routing", description: "Route callers after the call connects." },
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "What to Put on a Contact Page", description: "The full contact page checklist." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing and Payment Questions Page", description: "Answer billing questions in advance." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1813
  {
    slug: "reading-a-monthly-call-report-from-a-tracking-number-for-a-medical-practice-without-recordings-or-caller-names",
    keyword: "reading a monthly call report from a tracking number for a medical practice without recordings or caller names",
    category: "How-to",
    title: "Reading a Monthly Call Report for a Medical Practice",
    metaTitle: "Reading a Monthly Call Report for a Medical Practice",
    metaDescription:
      "What each column of a tracking-number call report tells a practice owner, and what to ignore. No recordings or caller names needed. (561) 291-2681",
    answer:
      "A monthly call report from a tracking number is a table of when calls came in, how long they lasted, whether they were answered and which page or listing produced them. Read the totals, the answered rate and the sources. You do not need recordings or caller names to act on it.",
    author: "Liam Costello",
    publishDate: "2026-11-16T20:10:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("What the report is for"),
      p(
        "A tracking number is a phone number that forwards to your real line and counts each call along the way. The monthly report is the count. It answers three plain questions: how many people called, how many of those calls were answered, and where the callers found you."
      ),
      p(
        "It does not need to answer anything else. Reports from some vendors can include audio recordings and caller names, but a practice rarely needs them to make decisions, and recording a call brings consent and privacy questions best settled with your compliance contact first. Our guide to [call tracking numbers on a counseling practice website](/guides/call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number) explains how to set the numbers up without disturbing your Google listing."
      ),
      h2("The columns, and what each one tells you"),
      p(
        "Vendors label things differently, so match these to the names on your own report."
      ),
      table(
        ["Column", "What it tells you"],
        ["Date and time", "When callers reach out, which shows whether your hours fit their habits"],
        ["Duration", "Very short calls are often wrong numbers or hang-ups; longer ones are usually real conversations"],
        ["Answered or missed", "How many calls reached a person, which is the number most worth improving"],
        ["Source", "Which page, ad or listing the caller used, if the vendor tracks it"],
        ["Area code or city", "Whether callers are local, shown without names or any personal detail"]
      ),
      h2("Read it in this order"),
      ol(
        "Total calls this month against last month. Note the direction, not a single number.",
        "Answered against missed. A missed call from a new patient often becomes a call to another practice.",
        "Calls by time of day. Clusters of missed calls at lunch or after closing point to a coverage gap.",
        "Calls by source. Compare the website number with the Google listing number to see which brings more calls.",
        "Short calls under about thirty seconds. Treat them as a signal to check, not a verdict."
      ),
      h3("Fix missed calls first"),
      p(
        "The cheapest improvement is usually answering more of the calls you already get. A [missed-call text-back message](/guides/missed-call-text-back-message-for-a-primary-care-practice) and a tidy after-hours greeting recover some of them, and the [front desk call log](/guides/front-desk-new-patient-call-log-fields-for-a-primary-care-practice) shows who still slips through."
      ),
      h3("A simple example of reading the totals"),
      p(
        "Suppose a report shows a steady number of calls from the website number and far fewer from the Google listing number, with most missed calls landing between noon and one. That points to two jobs: check why the listing number is quiet, and cover the lunch hour. Neither needs a recording or a caller name."
      ),
      p(
        "Write the two findings in one sentence each and put them in the next staff meeting notes, with a date to look again. A report that is read and acted on every month is worth more than a detailed one that sits in an inbox."
      ),
      h2("Do not treat calls as the whole picture"),
      p(
        "Phone calls are one door. Patients also use forms and online requests, so add the form count from the same month before drawing a conclusion. A [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) keeps calls and forms side by side."
      ),
      p(
        "Reports from different tools rarely agree to the digit, because each counts a call differently. Our guide to [comparing two marketing reports](/guides/comparing-two-marketing-reports-from-different-vendors-that-count-calls-and-forms-differently-for-a-practice-owner) explains what to expect. If your site reports key events in Google Analytics, that page describes how those events are defined, and a click on a phone link there is a different thing from a call that connects."
      ),
      h2("Keep it private"),
      p(
        "Share the report only with people who need it. A count by hour or source contains no health information, but a log of who called and why can. If your vendor offers caller names or audio, ask what is stored and for how long before turning either on, and keep any such data out of email."
      ),
    ],
    faqs: [
      {
        q: "Do I need call recordings to use a call report?",
        a: "No. Counts, answered rates, times and sources are enough for nearly every decision a practice owner makes. Recordings add privacy and consent questions that most practices can skip.",
      },
      {
        q: "Why does my report show fewer calls than my phone bill?",
        a: "Tracking numbers only count calls made to that number. Callers who dial your main line, or who use a different listing, will not appear on the report.",
      },
      {
        q: "What counts as a missed call?",
        a: "Usually a call that rang with no answer or went to voicemail. Check how your vendor defines it, because some count a short voicemail as answered.",
      },
      {
        q: "How often should I read the report?",
        a: "Once a month is enough for trends. Look more often only if you have just changed your phone system, hours or website.",
      },
      {
        q: "Can I see which page a caller used?",
        a: "Only if the tracking vendor shows the source and the number is placed where that source can use it. Without that setup, the report will show total calls only.",
      },
    ],
    citations: [GA_KEY_EVENTS, HHS_PRIVACY],
    links: [
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls From a Medical Website", description: "How call tracking is set up." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Count calls and forms together." },
      { href: "/guides/google-business-profile-call-history-and-missed-call-review-for-a-counseling-practice", label: "Profile Call History and Missed Calls", description: "Review calls from your listing." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1814
  {
    slug: "how-to-say-the-practice-phone-number-address-and-website-aloud-in-a-voicemail-or-recorded-message-so-patients-can-write-them-down",
    keyword: "how to say the practice phone number, address and website aloud in a voicemail or recorded message so patients can write them down",
    category: "How-to",
    title: "Saying Your Number and Address Aloud in a Voicemail",
    metaTitle: "How to Say a Phone Number Aloud in a Practice Voicemail",
    metaDescription:
      "How to speak your phone number, address and website in a recorded message so callers can write them down the first time. Pace and order. (561) 291-2681",
    answer:
      "Say the phone number in groups of area code, three digits, four digits, with a pause between groups, and repeat it once. Give the street address in the same order a driver would read it, and say the website as one short word plus the ending. Keep the whole message under thirty seconds.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T20:15:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Why callers cannot write it down"),
      p(
        "A caller listening to a voicemail greeting is usually holding a phone, not a pen. If the number goes by in one breath, they hang up and search for it again, and some will call the next practice that comes up instead."
      ),
      p(
        "Reading a number aloud is a skill, and most of us do it too fast. The change is small: slow down, group the digits and say the number twice. The plain language guidance linked below puts the same idea simply, which is to write and speak for the listener and not for yourself."
      ),
      h2("Say the number in three beats"),
      ol(
        "Say the area code, then pause for a half second.",
        "Say the next three digits, then pause again.",
        "Say the last four digits as two pairs, such as 'one two, three four'.",
        "Repeat the whole number once, a little slower.",
        "Do not slide the digits together, and avoid the word 'oh' for zero if your callers are confused by it."
      ),
      p(
        "Here is the pattern with an example number, which is not a real one: the written form is (555) 010-0199, and it is spoken as three short groups with a beat between them, then once more at a slower pace. Use your own digits in the same rhythm."
      ),
      h2("Say the address the way a driver reads it"),
      p(
        "Give the street number and street name first, then the suite or building name, then the city. Skip the zip code unless your callers often use it for directions. If the entrance is hard to find, add one short sentence, such as the side of the building where visitors enter."
      ),
      p(
        "An address should match what your website and map listings show. If your practice has a long suite name, shorten it in the recording but keep the same order. Our guide to [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) covers wording for the entrance itself."
      ),
      h3("Say the website as one short word"),
      ul(
        "Say the name of the site and the ending, for example the practice word followed by dot com.",
        "Leave out 'www' and 'https' entirely.",
        "If the site name is long or has a hyphen, point to one page instead, such as the contact page.",
        "If spelling is unavoidable, spell only the unusual part."
      ),
      h2("A full message, in order"),
      p(
        "Open with the practice name and the hours the phone is answered. Then the number, the address and the website, then what to do next. For a message that follows a privacy-minded approach, our [voicemail greeting script for a counseling practice](/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy) is the model to start from."
      ),
      p(
        "If your practice treats emergencies by referral, end with a plain safety line, such as asking callers to dial 911 in an emergency or 988 for a mental health crisis in the United States. Put it where callers will hear it before they leave a message."
      ),
      h3("Words to avoid when speaking a number"),
      p(
        "Skip phrases such as 'if you have a touch-tone phone' and long welcomes before the number. Callers are listening for the number, so give it early. Avoid abbreviations for the street type, and say 'Street' or 'Avenue' in full so the address is clear to someone who is only hearing it."
      ),
      h2("Test it with fresh ears"),
      p(
        "Call your own line from a phone you do not normally use and try to write down the number the first time you hear it. Ask a colleague to do the same. Record the time of the test, and use the checklist in our guide to [handling after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) to review the rest of the greeting. Check the same details against your [website's tap-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) so the number a caller hears matches the number they see."
      ),
    ],
    faqs: [
      {
        q: "How long should the recorded message be?",
        a: "Under thirty seconds is a good target. Anything longer risks callers hanging up before the number, so put the practice name and number first and any extras after.",
      },
      {
        q: "Should I say the zip code?",
        a: "Only if it helps callers find you. Most drivers use the street number, street name and city, so the zip code can usually be left out.",
      },
      {
        q: "Is it better to spell the website or point to a page?",
        a: "If the site name is short and plain, say it once. If it is long or unusual, point callers to one simple page or let them search for your practice name.",
      },
      {
        q: "Do I need to repeat the phone number?",
        a: "Yes. Saying it twice gives callers a second chance to catch it, and the repeat costs about five seconds.",
      },
      {
        q: "Who should record the message?",
        a: "A calm, clear voice from your own office usually works best. Record it a few times and pick the take where the numbers are clearest.",
      },
    ],
    citations: [DIGITAL_GOV_PLAIN, GBP_EDIT],
    links: [
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "A privacy-minded greeting for counselors." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls and Voicemail", description: "Cover the hours the office is closed." },
      { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Click-to-Call", description: "Keep the number the same everywhere." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1815
  {
    slug: "checking-that-the-practice-entrance-pin-and-directions-work-in-google-maps-apple-maps-and-waze-for-a-medical-practice",
    keyword: "checking that the practice entrance pin and directions work in Google Maps, Apple Maps and Waze for a medical practice",
    category: "Checklist",
    title: "Check Your Practice Pin in Google, Apple Maps and Waze",
    metaTitle: "Check Your Practice Pin in Google, Apple Maps and Waze",
    metaDescription:
      "A short test that shows whether Google Maps, Apple Maps and Waze send patients to the right entrance, and where to report a problem. (561) 291-2681",
    answer:
      "Search your practice by name in Google Maps, Apple Maps and Waze, start directions from three places, and see where each one sends you. The pin should sit at the building you use and the route should end at the right driveway. Fix mistakes through each service's own listing tool.",
    author: "Liam Costello",
    publishDate: "2026-11-16T20:20:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Why one map being right is not enough"),
      p(
        "Patients do not all use the same app. One person follows Google Maps, another uses the iPhone's built-in Apple Maps, and a third drives with Waze. If one of them drops a pin at the back of the building or on the wrong side of a divided road, that patient arrives late or calls the office in a hurry."
      ),
      p(
        "You can find out in about ten minutes with a phone and a few starting points. The test checks what patients actually see, not just what your own listing says. If you have already fixed a bad location, the guide to [fixing a wrong map pin on a Google Business Profile](/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile) covers the repair, and this guide covers the check across apps."
      ),
      h2("Run the test in each app"),
      ol(
        "Search for your practice by its name, not its address, because that is how most patients look.",
        "Look at the pin. It should sit on the building where patients enter, not in the middle of a parking lot or on a neighbouring unit.",
        "Tap directions from your home, from a spot a few miles away and from a spot on the opposite side of town.",
        "Follow each route to the end on the screen. The final turn should lead to the driveway or street you want patients to use.",
        "Check that the name, phone number, website and hours shown match your website."
      ),
      table(
        ["Check", "A pass looks like"],
        ["Pin position", "On the entrance side of the building, within a few steps of the door"],
        ["End of the route", "Arrives at the public entrance or lot, not a loading dock or staff gate"],
        ["Name and phone", "Exactly the same as the website and Google listing"],
        ["Hours", "The hours shown are the hours you actually keep"],
        ["Shared building", "The suite or floor is part of the listing, or the listing explains how to find it"]
      ),
      h2("Where to report a problem"),
      p(
        "Each service has its own owner tool, and fixing one does not fix the others."
      ),
      ul(
        "Google Maps: edit the address and pin location on your Business Profile. The help page linked below explains the address and pin fields.",
        "Apple Maps: use Apple's business tool to claim the place and correct its details.",
        "Waze: use its in-app option or help center to report a map problem for the place."
      ),
      p(
        "Changes in each service take time, so repeat the test after a few days. If your listing is shared with another business, our guide on [keeping patients from calling the wrong office when another practice has a similar name](/guides/when-another-practice-has-a-similar-name-keeping-patients-from-calling-the-wrong-office-for-a-medical-practice) is also worth a read."
      ),
      h3("Pair the pin with plain directions"),
      p(
        "Even a correct pin works better with words beside it. Put one sentence on your contact page that names the street, the entrance side and the parking lot. Our guides to [parking, entrance and accessibility wording](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) and to [map embeds and driving directions on the contact page](/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice) show how."
      ),
      h3("What to do while you wait for a fix"),
      p(
        "While a correction is pending, protect patients with words. Add the entrance and parking sentence to your confirmation messages and voicemail greeting, and ask the front desk to mention the entrance when they book a new patient. These small steps cost nothing and prevent most late arrivals."
      ),
      h2("Make it a habit"),
      p(
        "Repeat the check after a move, a new suite number, construction near the entrance or a change in the parking lot. Add it to your routine checks, for example the [Apple Maps and Bing Places listing review](/guides/apple-maps-and-bing-places-for-a-medical-practice) you already keep. A pin that was right last year can be wrong after a road project, and a new patient's first impression is often the drive."
      ),
    ],
    faqs: [
      {
        q: "Who controls the pin in each map app?",
        a: "Each service keeps its own data. You control your listing in Google through your Business Profile and in Apple Maps through Apple's business tool, and you report problems to Waze through its own help options.",
      },
      {
        q: "How long do corrections take to appear?",
        a: "It varies by service and by the change. Check again after a few days and keep notes on what you reported and when.",
      },
      {
        q: "What if the pin is right but the route ends on the wrong street?",
        a: "Report the route problem in that app, and meanwhile add one plain sentence to your website and voicemail telling patients which street and entrance to use.",
      },
      {
        q: "Should I test on an iPhone and an Android phone?",
        a: "Yes if you can. Apple Maps is the default on iPhones and Google Maps is common on Android, and both are worth seeing on a real device.",
      },
      {
        q: "Is this check part of keeping my profile accurate?",
        a: "Yes. A correct name, phone number, hours and pin across services helps patients find you and reduces calls from people who are lost.",
      },
    ],
    citations: [GBP_EDIT, GMAPS_DIRECTIONS, APPLE_BUSINESS],
    links: [
      { href: "/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile", label: "Fix a Wrong Map Pin", description: "Repair the location on your profile." },
      { href: "/guides/apple-maps-and-bing-places-for-a-medical-practice", label: "Apple Maps and Bing Places", description: "Claim and maintain the other listings." },
      { href: "/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice", label: "Map Embed and Driving Directions", description: "Wording for the contact page." },
      LOC,
    ],
  },
];
