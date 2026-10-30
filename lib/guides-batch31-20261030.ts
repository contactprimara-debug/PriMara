// -- Guides batch 31 - 2026-10-30 --
// Guide/AEO pages from the Command Center queue (rows 1392-1401 plus five rows planned 2026-10-30),
// built by the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only.
// Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

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
const HHS_TELEHEALTH = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Telehealth.HHS.gov resources for providers",
  href: "https://telehealth.hhs.gov/providers",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const FL_MH_BOARD = {
  publisher: "Florida Board of Clinical Social Work, Marriage and Family Therapy and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_HOURS = {
  publisher: "Google Business Profile Help",
  label: "Edit your business hours",
  href: "https://support.google.com/business/answer/3039617",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const IRS_969 = {
  publisher: "Internal Revenue Service",
  label: "Publication 969: Health savings accounts and other tax-favored health plans",
  href: "https://www.irs.gov/publications/p969",
};
const CDC_HOME = { publisher: "Centers for Disease Control and Prevention", label: "CDC", href: "https://www.cdc.gov/" };
const NIH_HEALTH = {
  publisher: "National Institutes of Health",
  label: "NIH health information",
  href: "https://www.nih.gov/health-information",
};
const MEDLINEPLUS = {
  publisher: "National Library of Medicine",
  label: "MedlinePlus health topics",
  href: "https://medlineplus.gov/",
};
const GA_KEY_EVENTS = {
  publisher: "Google Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const GOOGLE_EMAIL_SENDERS = {
  publisher: "Google Workspace Admin Help",
  label: "Email sender guidelines",
  href: "https://support.google.com/a/answer/81126",
};
const GOOGLE_ANALYTICS_HELP = {
  publisher: "Google Analytics Help",
  label: "Google Analytics Help Center",
  href: "https://support.google.com/analytics",
};

export const guidesPartThirtyFour: Guide[] = [
  // ---------------------------------------------------------------- 1392
  {
    slug: "letters-and-documentation-requests-page-for-a-counseling-practice-without-legal-advice",
    keyword: "letters and documentation requests page for a counseling practice without legal advice",
    category: "How-to",
    title: "Letters and Documentation Requests Page for Counseling",
    metaTitle: "Letters and Documentation Requests Page for Counseling",
    metaDescription:
      "How a counseling practice can publish a clear page for letter and documentation requests, with timing and fees, and no legal advice. Call (561) 291-2681.",
    answer:
      "Publish one page that says which letters and documents your practice provides, how a client asks for them, how long they take, whether a fee applies and who signs them. Describe the process only. Leave out what a letter will accomplish, because that depends on the court, school or employer, not on your website.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Why these requests arrive as phone calls"),
      p(
        "Clients ask counselors for paperwork all the time: a note for an employer, a letter for a school, a confirmation of attendance, a form from an agency. When the website says nothing about it, every request becomes a phone call or a message to the clinician, and the front desk answers each one from memory. Callers get different answers depending on who picked up."
      ),
      p(
        "A short documentation page fixes that. It also catches a quiet group of searchers: people who type a question about getting a letter from a counselor before they have decided which practice to call. A clear page can be the first thing they read about you."
      ),
      h2("What the page should cover"),
      table(
        ["Section", "What to say"],
        ["Documents you provide", "List the plain types, such as attendance confirmation, a billing statement or a form the client brings. Name only what the practice really does."],
        ["How to ask", "One route: a secure message, a form or a phone call to the office. Say which, and say that requests are not made by text."],
        ["Turnaround", "Give a working-day range, and say that urgent deadlines should be mentioned in the request."],
        ["Fees", "State any fee in dollars, or say that there is none. Do not leave clients guessing."],
        ["Who signs", "Say that the treating clinician reviews and signs, and that the practice only writes what it can stand behind."],
        ["What you do not do", "Say plainly which items the practice does not write, so nobody waits for something that will not come."]
      ),
      h2("Keep it about process, not outcomes"),
      p(
        "The page should never promise that a letter will be accepted, will excuse an absence or will change a decision by anyone else. Those results belong to the school, employer, court or agency. A line such as \"Whether a letter is accepted is up to the organization that asked for it\" protects the practice and sets honest expectations."
      ),
      p(
        "If a request involves a court, a custody matter or a disability application, tell the reader to ask an attorney or the requesting agency what is needed, and have your own attorney approve the wording of that sentence. The page is not the place to explain rules. Our guide to a [medical records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records) shows the same plain-process approach for records."
      ),
      h3("Release forms come first"),
      p(
        "Anything that sends information to another party needs the client's written permission first. Link the release form from this page, state that the practice will not send a letter until the form is signed, and keep the sentence short. The HHS privacy guidance explains the general idea in plain terms."
      ),
      h2("Set up the request path"),
      ol(
        "Pick one intake route, such as a secure form, and put its link on the page and in the client portal.",
        "Write a two-line confirmation message that says the request was received and gives the turnaround.",
        "Give the front desk a one-page checklist: release on file, clinician review, fee collected, date sent.",
        "Log each request with the date received and the date sent, with no session details in the log."
      ),
      p(
        "Review the log each quarter. If most requests are the same kind, add a line about it to the page and to your [FAQ page for a therapy practice](/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice)."
      ),
    ],
    faqs: [
      {
        q: "Should a counseling practice list every document it provides?",
        a: "List the common ones in plain words, such as attendance confirmation or a billing statement, and add a line that other requests can be asked about by phone. A short, honest list is better than a long one that promises more than the practice will do.",
      },
      {
        q: "Can the page say a letter will be accepted by an employer or school?",
        a: "No. Acceptance is decided by the organization that receives the letter. The page can describe how long the letter takes and who signs it, but it should not promise what the letter will achieve.",
      },
      {
        q: "Is it fine to charge a fee for letters?",
        a: "Many practices do. Whatever your policy, state it on the page in dollars or say there is no charge, and keep it the same everywhere it appears. Ask your attorney or billing advisor about fee rules that apply to your situation.",
      },
      {
        q: "How should clients send the request?",
        a: "Choose one secure route, such as the client portal or a form on a protected page, and name it. Avoid ordinary text or email for anything that reveals why someone is in counseling.",
      },
      {
        q: "Does this page need a lawyer to review it?",
        a: "The process wording usually does not, but any sentence touching court, custody or disability matters should be read by your own attorney before it is published. This guide is marketing guidance, not legal advice.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, FL_MH_BOARD, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Medical Records Request Page", description: "A plain process for asking for records." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Another policy page worth publishing." },
      { href: "/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice", label: "Therapy Practice FAQ Page", description: "Questions to answer without advice." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1393
  {
    slug: "split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice",
    keyword: "split hours and lunch closures on google business profile for a primary care practice",
    category: "How-to",
    title: "Split Hours and Lunch Closures on a Google Profile",
    metaTitle: "Split Hours and Lunch Closures on Google Business Profile",
    metaDescription:
      "How a primary care practice can show a midday closure on Google with two time blocks, so callers and walk-ins are not misled. Call (561) 291-2681.",
    answer:
      "Enter each open period as its own time block on Google Business Profile, for example 8:00 to 12:00 and 1:00 to 5:00, instead of one long day. Match the same blocks on your website, your phone greeting and every directory, and recheck them after any schedule change.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("What goes wrong when the lunch hour is missing"),
      p(
        "Many primary care offices close the front desk for an hour at midday. If the Google profile shows a single block from 8:00 to 5:00, a patient who arrives at 12:30 finds a locked door, and one who calls hears a recording. That person often posts a review about it, and the review says the practice was closed during listed hours."
      ),
      p(
        "The fix is not to cut the lunch break. It is to tell Google the truth with split hours, so the profile shows the real open periods and the right \"open now\" or \"closed\" label at every minute of the day."
      ),
      h2("How to enter two blocks in one day"),
      ol(
        "Sign in to the profile and open the hours section in the business information.",
        "For each weekday, use the option to add another set of hours for the same day.",
        "Enter the morning block and the afternoon block as separate ranges, then save.",
        "Check the public view on a phone to confirm that the label changes at noon and again at one."
      ),
      p(
        "Google's own help page on editing hours describes the same steps. The edit can take a short while to appear, so look again the next day before assuming it failed."
      ),
      table(
        ["What you enter", "What a searcher sees"],
        ["One block, 8:00 to 5:00", "Open at 12:30, even though the desk is closed"],
        ["Two blocks, 8:00 to 12:00 and 1:00 to 5:00", "Closed at 12:30, opens at 1:00 PM"],
        ["Two blocks plus a phone-only note", "Closed at 12:30; the website explains that the line is monitored"]
      ),
      h2("Say what happens during the closure"),
      p(
        "Patients still wonder what to do at lunchtime. Add one sentence to the website hours section, such as \"Our front desk is closed from noon to 1:00 PM; messages left on the main line are returned after we reopen.\" If a nurse line stays open, say so. If you are an urgent same-day resource, our guide to [getting found for same-day and walk-in visits](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) explains how to keep the hours honest."
      ),
      h3("Keep every place the same"),
      ul(
        "The Google profile, including any secondary listing for a satellite office.",
        "The website footer and the contact page, in plain text rather than an image.",
        "The phone greeting, which should name both blocks.",
        "Apple Maps, Bing Places and the insurance directories that show hours."
      ),
      h2("When the schedule changes"),
      p(
        "Doctors rotate lunch hours, add Saturday mornings and take staff trainings. Use special hours for one-off dates and edit the regular blocks only when the change is permanent. The pattern in our guide to [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) works for single dates, and the monthly checklist catches drift before a patient does."
      ),
    ],
    faqs: [
      {
        q: "Can Google Business Profile show a lunch break?",
        a: "Yes. You can add more than one set of hours to the same day, so a morning block and an afternoon block show as separate periods and the profile reads closed in between.",
      },
      {
        q: "Should the phone line also close at lunch?",
        a: "That is your call. If the line stays on, say so in the greeting and on the site. If it goes to voicemail, record a greeting that names the reopening time and a callback promise you can keep.",
      },
      {
        q: "How long does an hours edit take to show?",
        a: "Often the same day, though some edits take longer. Check the public view on a phone the next day. If a suggested edit from the public overrides yours, remove it in the dashboard.",
      },
      {
        q: "Do special hours replace regular hours?",
        a: "Special hours apply only to the dates you set. After that date, the regular blocks return, so use special hours for one-time changes and edit regular hours for lasting ones.",
      },
      {
        q: "Does a lunch closure affect rankings?",
        a: "Hours alone are not a ranking trick. What matters is accuracy, because wrong hours lead to missed visits, bad reviews and callers who do not book. Honest split hours protect the patient experience.",
      },
    ],
    citations: [GBP_HOURS, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday And Closure Notices", description: "One-off dates on Google and the phone." },
      { href: "/guides/evening-and-weekend-hours-for-a-primary-care-practice-publishing-extended-hours-and-keeping-google-accurate", label: "Evening And Weekend Hours", description: "Extended hours on every listing." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "Catch drift before patients do." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1394
  {
    slug: "dropped-video-connection-and-technical-problems-policy-page-for-a-counseling-practice",
    keyword: "dropped video connection and technical problems policy page for a counseling practice",
    category: "How-to",
    title: "Dropped Video Connection Policy Page for Counseling",
    metaTitle: "Dropped Video Connection Policy for a Counseling Practice",
    metaDescription:
      "What a counseling practice should tell clients when a video session drops: reconnect steps, a phone fallback and fees, in plain words. Call (561) 291-2681.",
    answer:
      "Tell clients before the first session what happens if video fails: try to rejoin the link, then expect a call on the number on file, and say whether the time is billed or rescheduled. Publish it on one short page, link it from the booking confirmation, and keep the wording the same everywhere.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("The question clients ask in the first five minutes"),
      p(
        "A video session can freeze, the sound can cut out, or someone's internet can drop. Clients who have never done telehealth often worry in advance about what happens, and some quietly decide not to book because nobody has said. A page that answers it removes a small but real reason to hesitate before calling."
      ),
      p(
        "It also protects the clinician. When the rule is written down and linked in the confirmation message, a dropped connection is a known event with a known next step, not an argument about money after a stressful moment."
      ),
      h2("The four things the page must say"),
      table(
        ["Topic", "Plain wording to cover"],
        ["First step", "Close and reopen the session link once. If that fails, check the internet connection or switch from Wi-Fi to mobile data."],
        ["Backup contact", "State that the clinician will call the phone number on file within a few minutes. Ask clients to keep that phone nearby and the ringer on."],
        ["Time and fees", "Say whether the missed time is added back, rescheduled, or charged normally. Pick one rule and apply it to everyone."],
        ["Who to call", "Give the office number for scheduling questions after the session, not the clinician's personal phone."]
      ),
      h2("Keep the backup plan private and short"),
      p(
        "Never tell clients to switch to ordinary text or a consumer video app that the practice has not approved. The page should name only the tools your practice uses. The HHS telehealth resources for providers describe general privacy and technology considerations, and your own platform vendor's documentation covers the specifics of its product."
      ),
      p(
        "If a client is in distress when the connection drops, the clinician's usual safety steps apply and are covered in your consent paperwork, not on a marketing page. Link to the [emergency and crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) so a reader always has the 988 and 911 information in front of them."
      ),
      h3("Say when to reschedule instead"),
      ul(
        "If the connection returns within a few minutes, the session continues and ends at the scheduled time.",
        "If it cannot be restored after a stated number of minutes, the session moves to a phone call or is rescheduled.",
        "If the problem is on the practice's side, say that the client is not charged for the lost time."
      ),
      h2("Where the page should appear"),
      p(
        "Link it from the telehealth instructions, the booking confirmation and the intake email. Our guides on [telehealth visit instructions](/guides/telehealth-visit-instructions-page-for-a-therapy-practice) and the [technology check page](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice) show where it fits. A test link clients can open ahead of time cuts down on dropped sessions in the first place."
      ),
    ],
    faqs: [
      {
        q: "What should a client do first if the video freezes?",
        a: "Leave and rejoin the session link once, then check the internet connection or move from Wi-Fi to mobile data. If neither works, wait for the clinician to call the number on file.",
      },
      {
        q: "Should the practice charge for a session that dropped?",
        a: "That is the practice's decision. Many reconnect and finish the scheduled time, switch to a phone call or reschedule without a charge when the cause is technical. Choose one rule, write it down and apply it to everyone.",
      },
      {
        q: "Can the backup be a regular text conversation?",
        a: "Avoid it. A plain phone call to the number on file is simpler and keeps details out of unapproved apps. Name only the tools your practice has chosen and reviewed.",
      },
      {
        q: "Where should the policy be linked?",
        a: "From the telehealth instructions, the booking confirmation and the intake email. It should also be reachable from the main fees or policies page so existing clients can find it.",
      },
      {
        q: "Does this page need clinical wording?",
        a: "No. It is a logistics page. Anything about client safety during a session belongs in the signed consent paperwork, which your clinicians and attorney should write.",
      },
    ],
    citations: [HHS_TELEHEALTH, HHS_PRIVACY, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Visit Instructions", description: "What to tell clients before a video session." },
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Technology Check Page", description: "A short test before the first session." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "988 and 911 information on your site." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1395
  {
    slug: "meet-and-greet-visit-before-becoming-a-patient-page-for-a-primary-care-practice",
    keyword: "meet and greet visit before becoming a patient page for a primary care practice",
    category: "How-to",
    title: "Meet and Greet Visit Page for a Primary Care Practice",
    metaTitle: "Meet and Greet Visit Page for Primary Care Practices",
    metaDescription:
      "How a primary care practice can offer a short meet and greet before someone becomes a patient, and explain it clearly on its site. Call (561) 291-2681.",
    answer:
      "A meet and greet page tells people they can talk with the doctor or nurse practitioner, see the office and ask questions before choosing a primary care home. State the length, the cost, who attends, what it does not cover and how to request one, and keep any medical visit separate.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Why some people want to meet first"),
      p(
        "Choosing a primary care office is a long-term decision, and some people want to see the building and speak with the clinician before handing over their records. New to town, switching after a bad experience, or choosing for a parent: each is a reason to want a first conversation that is not a full appointment."
      ),
      p(
        "If you offer one, a page about it brings in searchers that comparison tools do not. If you do not offer it, a short note on your new patient page saying so is just as useful, because it stops calls that would end in a no."
      ),
      h2("Decide what the visit is before you write about it"),
      table(
        ["Decision", "Options to pick from"],
        ["Length", "Ten to fifteen minutes is common. State the number so no one expects an hour."],
        ["Format", "In person at the office, by phone or by video. Say which formats you offer."],
        ["Who attends", "The physician, the nurse practitioner or the practice manager. Name the role, not a promise of a specific person."],
        ["Cost", "Free, or a stated fee. Do not leave it for the caller to ask."],
        ["What is covered", "Introductions, office tour, how scheduling and messaging work, and which insurance plans you accept."],
        ["What is not covered", "Examining the person, reviewing symptoms, refilling medicines or giving advice about a health problem."]
      ),
      h2("Keep it a conversation, not a visit"),
      p(
        "The page should say clearly that a meet and greet is not an appointment for care. Anyone with a health concern should book a regular visit, and anyone with an emergency should call 911. A line near the top handles this without scaring people off."
      ),
      p(
        "Billing is the other trap. If an insurance company is charged for a meet and greet, it can create confusion later. Ask your billing advisor how your practice handles this, then say the same thing on the page that the front desk says on the phone."
      ),
      h3("What to ask the visitor to do"),
      ol(
        "Send a short request through the contact form or by phone with a name, a number and preferred times.",
        "Bring an insurance card if they want to confirm coverage on the spot.",
        "Skip medical history and records. Those come with a first visit, not a tour."
      ),
      h2("Connect the page to the rest of the site"),
      p(
        "Link it from the new patient page and from your [transfer of care page](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice). If you are not taking new patients right now, keep the page but explain the status, as our note on keeping [accepting new patients status accurate](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) describes. A short mention in the [new to the area page](/guides/new-to-the-area-page-for-a-primary-care-practice-for-relocating-families-students-and-seasonal-residents) helps people who have just moved."
      ),
    ],
    faqs: [
      {
        q: "Does a meet and greet count as a medical appointment?",
        a: "It should not. Describe it as an introduction with no examination, advice or prescriptions. Anyone who needs care should book a regular visit through the usual process.",
      },
      {
        q: "Should the practice charge for a meet and greet?",
        a: "That is up to the practice. Whatever you choose, publish the price or say there is none, and have your billing advisor confirm how the visit is recorded.",
      },
      {
        q: "How long should the visit be?",
        a: "Ten to fifteen minutes works for most offices. State the number on the page so visitors and the front desk share the same expectation.",
      },
      {
        q: "Can the visit be by phone or video?",
        a: "Yes, if you offer it. List each format you support, and note that an office tour requires an in-person visit.",
      },
      {
        q: "What if the practice is not accepting new patients?",
        a: "Say so on the page, offer a waitlist if you have one, and keep your Google profile and directories consistent with that status so people do not call for a visit you cannot give.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GBP_GUIDELINES, HHS_PRIVACY],
    links: [
      { href: "/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice", label: "Transferring Care Page", description: "Helping new patients switch doctors." },
      { href: "/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories", label: "New Patient Status", description: "Keep the open or closed message accurate." },
      { href: "/guides/new-to-the-area-page-for-a-primary-care-practice-for-relocating-families-students-and-seasonal-residents", label: "New To The Area Page", description: "A page for people who just moved." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1396
  {
    slug: "booking-several-family-members-in-one-visit-page-for-a-primary-care-practice",
    keyword: "booking several family members in one visit page for a primary care practice",
    category: "How-to",
    title: "Booking Several Family Members in One Visit",
    metaTitle: "Booking Several Family Members in One Visit Page",
    metaDescription:
      "How a primary care practice can explain booking back-to-back or same-day visits for a household, and how to take the request. Call (561) 291-2681.",
    answer:
      "Tell families how to ask for back-to-back appointments: one request listing each person's name and visit type, the time needed per person, and the chance that slots will be split across providers. Say how the practice decides, and never promise that everyone will be seen at the same hour.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Why families search for this"),
      p(
        "A parent with three kids who need school forms, or a couple who wants to schedule yearly visits together, would rather make one call than four. Many practices handle this quietly by phone and never mention it online, so searchers assume it is not possible and book somewhere that lists it."
      ),
      p(
        "A short page tells them it is possible, what you need from them and what to expect. It also trims the front desk's time, because the answer to the most common follow-up question is already written down."
      ),
      h2("What the request should collect"),
      table(
        ["Field", "Why it is needed"],
        ["Name and date of birth for each person", "To find each chart. Keep this on the secure form or phone, not in a plain email."],
        ["Visit type for each person", "A school physical, a follow-up and a new patient visit take different lengths of time."],
        ["Preferred days and times", "Gives the scheduler a window to fit people back to back."],
        ["Who will bring the children", "Helps staff confirm that a parent or guardian can consent."],
        ["Best phone number", "The scheduler will usually call to confirm."]
      ),
      p(
        "Do not ask for symptoms or health history in this request. Those belong in the visit itself. The pattern in our guide to [appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) explains what to leave out."
      ),
      h2("Be honest about what you can offer"),
      ul(
        "Back-to-back slots with the same provider when the schedule allows it.",
        "Side-by-side slots with different providers when it does not.",
        "A note that the first available block of consecutive times may be a few weeks out for several people.",
        "A statement that sick visits are handled separately and may not fit in a combined request."
      ),
      p(
        "Say who is allowed to book for whom. A parent can usually schedule for a child, but an adult booking for another adult may need that person's permission on file. Link your [caregiver and family communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) so the rule is in one place."
      ),
      h3("Use visit lengths to set expectations"),
      p(
        "A plain list of typical visit lengths helps families estimate how long to block off. Our note on [visit types and appointment lengths](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website) shows how to present it without promising a clock time."
      ),
      h2("Where to put the link"),
      p(
        "Place the page link under the booking button and on the pediatric, family and school physical pages, if you have them. If you use an online scheduling tool, check that the family option works, or add a line that says to call or use the request form instead. The [school and camp note requests page](/guides/school-work-and-camp-note-requests-page-for-a-primary-care-practice) is another place where families look."
      ),
    ],
    faqs: [
      {
        q: "Can a primary care practice promise back-to-back appointments?",
        a: "Only if the schedule truly allows it. The page should say that the practice will try, describe the alternatives and avoid guarantees.",
      },
      {
        q: "What information should the request form collect?",
        a: "Names, dates of birth, the visit type for each person, preferred days and a phone number. Leave out symptoms and health history, which belong in the visit.",
      },
      {
        q: "Who may book on behalf of a family member?",
        a: "Parents or guardians can usually book for children. For adults, check what permission is on file. Publish your rule on a communication policy page and link to it from the booking page.",
      },
      {
        q: "Should online scheduling support multiple people?",
        a: "If your tool allows it, say how to use it. If it does not, tell families to call or send the request form, so they do not book separate slots by accident.",
      },
      {
        q: "Does this page help the practice get found?",
        a: "It matches the way families actually search, such as booking several family members at the same practice. A clear, specific page can answer that search and turn it into a call or request.",
      },
    ],
    citations: [GOOGLE_HELPFUL, HHS_PRIVACY, GBP_GUIDELINES],
    links: [
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "What to ask and what to leave out." },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types And Lengths", description: "Set honest expectations on timing." },
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Family Communication Policy", description: "Who may book and receive information." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1397
  {
    slug: "hsa-and-fsa-card-payments-page-for-a-counseling-practice",
    keyword: "hsa and fsa card payments page for a counseling practice",
    category: "How-to",
    title: "HSA and FSA Card Payments Page for a Counseling Practice",
    metaTitle: "HSA and FSA Card Payments Page for Counseling Practices",
    metaDescription:
      "How a counseling practice can say it takes HSA and FSA cards, what receipts it gives, and what it cannot promise about eligibility. Call (561) 291-2681.",
    answer:
      "Say that the practice accepts HSA and FSA cards for session fees, name the receipt or statement you provide, and tell clients to confirm eligibility with their plan administrator. Do not promise that a card will be approved or that an expense qualifies, because that decision belongs to the plan, not to your practice.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("A payment question that decides whether someone books"),
      p(
        "People who pay out of pocket for counseling often hold a health savings or flexible spending card and want to use it. They search for the answer before calling, and a practice that says nothing looks like one that might not take them. A short payments section can turn a quiet hesitation into a call."
      ),
      p(
        "Keep the claim narrow. You are saying how the practice takes payment, not whether the plan will cover the service. The first is a fact about your office; the second is a decision made by the card's administrator under its own rules."
      ),
      h2("What to put on the page"),
      table(
        ["Item", "Wording to use"],
        ["Cards accepted", "\"We accept HSA and FSA debit cards for session fees.\" Add any cards you do not take."],
        ["Eligibility", "\"Please check with your plan administrator that counseling is an eligible expense under your plan.\""],
        ["Documentation", "Name what you give: a receipt after each payment, or a monthly statement on request, with the date and amount."],
        ["Letters of medical necessity", "Say whether your practice writes them. If it does, link the process; if not, say so."],
        ["Fees", "List the session fee or link the fees page, so the amount a card is charged is visible."]
      ),
      h2("What not to say"),
      ul(
        "Do not say that counseling \"is covered\" or \"is eligible.\" Plans differ and rules change.",
        "Do not give tax advice or tell someone how to report a payment.",
        "Do not describe the reason for a client's visit on a receipt unless the client asks you to.",
        "Do not promise reimbursement from insurance when a card is used."
      ),
      p(
        "The IRS publishes general information about health savings accounts and similar plans, and linking to it is enough. The page can say, \"For general information about eligible expenses, see the IRS guidance,\" and stop there."
      ),
      h3("Fit it with your other fee pages"),
      p(
        "A card line belongs next to the rest of the money story. Our guide to [fees, sliding scale and superbills](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) shows how to keep that page consistent, and the [good faith estimate notice page](/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice) covers the notice some clients are owed before a first session."
      ),
      h2("Check the mechanics before you publish"),
      ol(
        "Confirm with your payment processor that HSA and FSA cards work at your terminal and in your online payment tool.",
        "Run a small test charge with your own card and keep the receipt as a sample.",
        "Make sure the receipt shows the practice name, date, amount and a general service label.",
        "Tell the front desk the exact wording to use when a caller asks if a card is eligible."
      ),
      p(
        "Put the same sentence on the booking confirmation and in the payment link email. When wording differs across pages, clients ask the front desk to settle it."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling practice say it is HSA and FSA eligible?",
        a: "The practice can say it accepts HSA and FSA cards. Whether counseling is an eligible expense is decided by the client's plan, so the page should send clients to their plan administrator.",
      },
      {
        q: "What documentation should a practice offer?",
        a: "A dated receipt showing the practice name, amount and a general service label is the common minimum. Some practices offer monthly statements on request. Avoid putting a reason for the visit on it.",
      },
      {
        q: "Should the page mention insurance reimbursement?",
        a: "Only to say how your practice handles it, such as providing a statement a client can submit. Do not promise that insurance will reimburse a payment made with a card.",
      },
      {
        q: "Does the practice need to write letters for plan administrators?",
        a: "Not necessarily. If you do, describe the process and any fee. If you do not, say so, so clients can plan ahead. See our guide to a letters and documentation page for wording.",
      },
      {
        q: "Where should card information appear on the site?",
        a: "On the fees or payments page, in the booking confirmation, and in the payment link email. Keep the sentence the same everywhere.",
      },
    ],
    citations: [IRS_969, GOOGLE_HELPFUL, HHS_PRIVACY],
    links: [
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale, out of network and superbills." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Page", description: "The notice some clients are owed." },
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Benefits Check Page", description: "Helping clients check coverage." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1398
  {
    slug: "preferred-name-and-pronoun-fields-on-intake-forms-for-a-counseling-practice",
    keyword: "preferred name and pronoun fields on intake forms for a counseling practice",
    category: "Checklist",
    title: "Preferred Name and Pronoun Fields on Counseling Intake",
    metaTitle: "Preferred Name and Pronoun Fields on a Counseling Intake",
    metaDescription:
      "How a counseling practice can add preferred name and pronoun fields to its intake form, with plain labels and a privacy note. Call (561) 291-2681.",
    answer:
      "Add two optional fields near the top of the intake form: the name the person goes by, and their pronouns if they wish to share them. Explain in one line who sees the answers, keep the legal name field for billing, and use the preferred name in every message the practice sends.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Small fields that change the first impression"),
      p(
        "An intake form that only asks for a legal name can start the relationship with a small mistake. A new client who goes by a different name hears the wrong one at the front desk, in the reminder text and in the waiting room. Two optional fields at the start of the form prevent that."
      ),
      p(
        "This is a form design question, not a clinical one. The practice is asking how to address the person, nothing more."
      ),
      h2("The fields, with suggested labels"),
      table(
        ["Field", "Suggested label and note"],
        ["Legal name", "\"Legal name (for billing and insurance).\" Required if you bill insurance."],
        ["Preferred name", "\"Name you would like us to use.\" Optional, one line."],
        ["Pronouns", "\"Pronouns (optional).\" A free text box, not a fixed menu, so people can write their own."],
        ["How to reach you", "\"Is it okay to leave a voicemail or text under that name?\" A yes or no, which protects privacy."]
      ),
      p(
        "A free text box for pronouns avoids guessing every option in advance. If the form is built in a tool that only offers a menu, add an \"another\" choice with a text box."
      ),
      h2("Say who sees the answers"),
      p(
        "A single sentence under the fields is enough: \"We use this only to address you correctly in the office and in messages.\" Do not suggest that the answers go into a record beyond what is true. Your own forms and consent paperwork, written with your attorney, define how the information is stored."
      ),
      h3("Where the preferred name should appear"),
      ul(
        "The reminder text and email, using the name the client chose.",
        "The check-in screen or sign-in list, with no health details.",
        "The clinician's session notes view, so the name is right before the session starts.",
        "The portal greeting, if your system allows a display name."
      ),
      p(
        "Billing, insurance and legal documents keep using the legal name. State that on the form so no one assumes the preferred name will appear on a claim."
      ),
      h2("Keep the form honest and light"),
      p(
        "Do not make either field required, and do not ask why. Our guide to [publishing new patient forms without exposing data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains how to host the form on a secure page, and the note on [intake paperwork emails](/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice) shows how to send the link. The [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) can mention that the form includes a spot for the name you go by."
      ),
      p(
        "After you add the fields, test the whole path: fill the form with a sample preferred name and confirm that the reminder, the portal and the sign-in screen use it."
      ),
    ],
    faqs: [
      {
        q: "Should the preferred name and pronoun fields be required?",
        a: "No. Both are optional. Required legal name fields are fine for billing, but a person should be able to skip the others without any explanation.",
      },
      {
        q: "Is a drop-down list or a text box better for pronouns?",
        a: "A text box is better because it lets people write their own. If your tool only supports menus, include an option for another choice with a text field.",
      },
      {
        q: "Where do the answers go?",
        a: "Wherever your forms and records system sends other intake answers. Describe that accurately on the form, and have your attorney or compliance advisor confirm the wording.",
      },
      {
        q: "Does the preferred name replace the legal name?",
        a: "For day-to-day communication, yes. For billing, insurance claims and legal documents, the practice continues to use the legal name, and the form should say so.",
      },
      {
        q: "Does this affect how the practice shows up in search?",
        a: "Not directly. It improves the client's first experience, which shows up in reviews and referrals. Keep the language on your site consistent with the form.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "Publishing Intake Forms Safely", description: "Host forms without exposing data." },
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "Sending the form link before session one." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients need to know." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1399
  {
    slug: "specialty-and-focus-areas-wording-for-a-counseling-practice-training-versus-expertise",
    keyword: "specialty and focus areas wording for a counseling practice training versus expertise",
    category: "How-to",
    title: "Specialty and Focus Areas Wording for Counseling",
    metaTitle: "Specialty and Focus Areas Wording for a Counseling Site",
    metaDescription:
      "How a counseling practice can describe focus areas by training and experience, without claiming expertise it cannot prove. Call (561) 291-2681.",
    answer:
      "Describe each focus area by what you can document: the training completed, the years of experience and the kinds of clients seen. Avoid the words expert, specialist and leading unless a board or certifying body gives you that title. Let readers see the basis for every claim.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("The word that causes the trouble"),
      p(
        "Almost every counseling website has a section called Specialties. The word feels harmless, but it can imply a certification that does not exist. A clinician who completed a weekend training and a clinician with ten years of focused work both end up with the same heading, and a reader has no way to tell them apart."
      ),
      p(
        "Professional ethics codes ask counselors to describe their qualifications accurately, and licensing boards can act on misleading advertising. The practical fix is simple: say what you did, not what you are."
      ),
      h2("Training, experience and interest are different things"),
      table(
        ["Type of statement", "How to word it"],
        ["Completed a course or certification", "\"Completed a [named] training program in [year].\" Use the real name and the issuing organization."],
        ["Years of experience", "\"Has worked with adults in [setting] for [number] years.\" Give a number you can back up."],
        ["Population served", "\"Sees adults, couples and teens.\" Describe who, not what it will fix."],
        ["Personal interest", "\"Enjoys working with people navigating life transitions.\" Honest, and not a claim of skill."],
        ["Title from a certifying body", "Use the exact title only if the clinician holds it, and spell out the full name."]
      ),
      h2("Words to retire"),
      ul(
        "\"Expert in,\" \"leading,\" \"top\" and \"best\" unless an external body awarded the title.",
        "\"Specializes in\" without a stated basis such as training or years of practice.",
        "Any word that promises a result, such as \"cures,\" \"resolves\" or \"eliminates.\"",
        "Lists of every topic a clinician has ever touched, which dilute the page."
      ),
      p(
        "A page that lists fifteen focus areas for one clinician reads as a net cast wide for search, and readers notice. Three to five, each with a basis, is more believable and easier for answer tools to quote."
      ),
      h3("Let the basis sit next to the claim"),
      p(
        "On a bio page, put the training line directly under the focus area it supports. Our guide to [therapist bio pages without clinical claims](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) shows the layout, and the page on [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) explains how to write the longer topic page behind each focus area."
      ),
      h2("A review routine"),
      ol(
        "List every focus area on the site, the Google profile and any directory.",
        "Next to each, write the training, years or client group that supports it.",
        "Remove or reword anything you cannot support.",
        "Match the wording across all three places, and repeat the check each year."
      ),
      p(
        "Tie the approach statement to the same wording. The page on an [approach without outcome claims](/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims) is a good model, and your Florida board's advertising rules, linked below, are the final word."
      ),
    ],
    faqs: [
      {
        q: "Can a counselor call themselves a specialist?",
        a: "Only if the title is earned and permitted in your state. In most cases it is safer to describe training, experience and clients seen, and to leave out the word unless a certifying body grants it.",
      },
      {
        q: "How many focus areas should a clinician list?",
        a: "Three to five is a sensible range. Each should have something behind it, such as training, years of experience or the group of clients served.",
      },
      {
        q: "Is it fine to list an interest that has no certification?",
        a: "Yes, if it is described as an interest or area of focus and not as a credential. Honest framing builds more trust than a vague claim of expertise.",
      },
      {
        q: "Where do the same focus areas need to appear?",
        a: "On the bio page, the Google profile and any directory listing. Keeping the wording identical makes it easier for search and answer tools to trust it.",
      },
      {
        q: "Who should approve the wording?",
        a: "The clinician named, since the claim is theirs, and the practice owner. For anything unclear about advertising rules, check the Florida licensing board's guidance or ask an attorney.",
      },
    ],
    citations: [FL_MH_BOARD, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "A layout that keeps claims honest." },
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Specialty Pages", description: "Topic pages without clinical claims." },
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Approach Page", description: "Describe the work without promising results." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1400
  {
    slug: "by-appointment-only-hours-wording-for-a-counseling-practice-website-and-google-profile",
    keyword: "by appointment only hours wording for a counseling practice website and google profile",
    category: "How-to",
    title: "By Appointment Only Hours Wording for Counseling",
    metaTitle: "By Appointment Only Hours Wording for a Counseling Practice",
    metaDescription:
      "How an appointment-only counseling practice can word its hours on its website and Google profile so callers know what to expect. Call (561) 291-2681.",
    answer:
      "State on the website that sessions are by appointment only, list the days and times clinicians usually see clients, and give a phone number and form for requests. On Google, enter the real session days as hours, or mark the profile appointment only if the option fits, and keep every listing identical.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Appointment only does not mean hours do not matter"),
      p(
        "Most counseling offices have no walk-in service and no one at the door all day. Owners sometimes respond by leaving the hours blank, which makes the listing look unfinished or closed. Searchers want to know when they can reach a person and when sessions happen, and a profile that shows nothing loses the call."
      ),
      p(
        "There are two different sets of times to publish. One is when someone answers the phone or messages. The other is when clinicians see clients. They are rarely the same, and the wording should keep them apart."
      ),
      h2("Three ways to word it"),
      table(
        ["Practice style", "Wording that works"],
        ["Fixed office hours, no walk-ins", "\"Sessions by appointment only. Office hours Monday to Thursday, 9:00 AM to 6:00 PM.\""],
        ["Clinicians keep their own schedules", "\"Sessions by appointment only, with times varying by clinician. Call or request an appointment, and we reply within one business day.\""],
        ["Mostly telehealth", "\"Telehealth sessions by appointment, weekdays and some evenings. In-person visits by request at our office.\""]
      ),
      p(
        "Pick the line that is true for your practice and use it word for word on the contact page, the footer and the About text of the Google profile."
      ),
      h2("What to enter on Google"),
      ul(
        "If clinicians see clients on set days, enter those days and times as regular hours.",
        "If the schedule varies too much to list, follow Google's guidance for businesses that do not have set hours, and keep the description clear.",
        "If you work from a home office or a shared suite, review how addresses are shown, as in our notes on a [home-based therapist profile](/guides/google-business-profile-for-a-therapist-who-works-from-home) and a [shared or virtual office address](/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile).",
        "Add the appointment link to the profile so a visitor can request a time without calling."
      ),
      p(
        "Avoid hours that imply a walk-in clinic, since people may arrive unannounced and be turned away. A review that says \"nobody was there during the listed hours\" is hard to answer well."
      ),
      h3("Tell people when a human will answer"),
      p(
        "Callers care most about the reply time. A single sentence such as \"Calls and messages are answered Monday to Friday; we return messages within one business day\" sets that expectation. If the practice closes for a stretch, follow the approach in our guide to [out-of-office coverage notices](/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice)."
      ),
      h2("Keep the check simple"),
      ol(
        "Compare the website footer, contact page and Google profile hours side by side.",
        "Call the office number outside business hours and confirm the greeting matches the listed hours.",
        "Ask a friend to find the practice on a phone and report what the listing says.",
        "Repeat the check whenever a clinician's schedule changes."
      ),
    ],
    faqs: [
      {
        q: "Should a by appointment only practice leave hours blank on Google?",
        a: "No. Blank hours make a listing look incomplete. Enter the days and times when someone answers the phone or when clinicians see clients, and say that sessions are by appointment on the website.",
      },
      {
        q: "What if clinician schedules change every week?",
        a: "Publish the general pattern, such as weekday and some evening availability, and direct people to request an appointment. Keep the Google profile consistent with that wording.",
      },
      {
        q: "Is it better to list office hours or session hours?",
        a: "List the time a person can reach the office, and add a line about when sessions typically occur if that differs. Do not blend the two into one set of numbers.",
      },
      {
        q: "Should I add an appointment link?",
        a: "Yes. A request link on the profile lets people act when the office is closed, and it adds a trackable path to your inquiry form.",
      },
      {
        q: "How often should hours be rechecked?",
        a: "Whenever a schedule changes, and at least monthly as part of your profile checklist. A quick call after hours confirms the greeting matches what is published.",
      },
    ],
    citations: [GBP_HOURS, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/google-business-profile-for-a-therapist-who-works-from-home", label: "Home-Based Therapist Profile", description: "Handling address display on Google." },
      { href: "/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile", label: "Shared Office Address", description: "Listing a suite or shared space." },
      { href: "/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice", label: "Out-Of-Office Coverage Notices", description: "Tell clients when you are away." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1401
  {
    slug: "patient-education-resources-page-linking-to-cdc-and-nih-for-a-primary-care-practice",
    keyword: "patient education resources page linking to cdc and nih for a primary care practice",
    category: "How-to",
    title: "Patient Education Resources Page for Primary Care",
    metaTitle: "Patient Education Resources Page Linking to CDC and NIH",
    metaDescription:
      "How a primary care practice can build a patient resources page that links to CDC, NIH and MedlinePlus, without giving medical advice. Call (561) 291-2681.",
    answer:
      "Build a short resources page that links to trusted public sources such as the CDC, the NIH and MedlinePlus, grouped by plain headings, with a sentence that says the page is general information and not advice for any one person. Check the links each quarter and never summarize treatment.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Why send patients to public sources"),
      p(
        "Patients search for health information before and after a visit. A practice that points them to well-known public sources gives them something reliable to read and keeps the practice from writing medical content it would have to maintain. The page is a service to patients and a signal that the practice cares about good information."
      ),
      p(
        "It is also a safe way to cover topics without clinical claims. You are linking, not instructing. The reader gets the primary source, and your page stays a map."
      ),
      h2("Choose the sources and group them"),
      table(
        ["Group", "Where to link"],
        ["General health topics", "MedlinePlus, from the National Library of Medicine, for plain-language topic pages."],
        ["Prevention and vaccines", "The CDC's public pages for adults and children, linked to the main section rather than a deep page that may change."],
        ["Research and conditions", "NIH health information pages."],
        ["Mental health and crisis", "The 988 Lifeline for anyone in crisis, shown in the same place on every page."],
        ["Insurance and Medicare", "Medicare.gov and the state's official pages."]
      ),
      p(
        "Link to top-level pages that stay stable, such as a topic index, instead of a long article address that can move. A broken link on a health page looks careless."
      ),
      h2("Wording the page needs"),
      ul(
        "A top line: \"This page lists general information from public health agencies. It is not medical advice. Please talk with your clinician about your own situation.\"",
        "A reminder: \"For an emergency, call 911.\"",
        "A note on who maintains the page and the date it was last checked.",
        "No summaries of treatments, doses or what to do about symptoms."
      ),
      h3("Do not copy their text"),
      p(
        "Federal pages are public, but your page is better as a clean list with a few words of your own. Copying long passages makes your page a duplicate of theirs and does nothing for patients or search. Link, name the source and let the reader click."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Mention the page in visit follow-up messages, such as the ones in our guide to [annual wellness visit pages](/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims), and from the [chronic condition follow-up page](/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims). Keep the language at a comfortable level; our note on [plain language and reading level](/guides/plain-language-and-reading-level-for-patient-facing-web-content) gives a quick test."
      ),
      p(
        "Set a calendar reminder to click every link each quarter and replace anything that moved. Record the date on the page."
      ),
    ],
    faqs: [
      {
        q: "Is it safe for a practice to link to CDC and NIH pages?",
        a: "Yes. These are public sources, and linking to them is common. Keep the page general, add a line that it is not medical advice, and avoid summarizing treatment yourself.",
      },
      {
        q: "Should the page list specific diseases?",
        a: "A short list of broad topics is enough. Link to the agency's topic index rather than building a page for each condition, which would turn into content you have to keep current.",
      },
      {
        q: "How often should the links be checked?",
        a: "Quarterly is a sensible habit. Click each link, replace any that changed and update the date shown on the page.",
      },
      {
        q: "Can I copy text from a federal page?",
        a: "It is better not to. Link to the source and write a short description of your own. Duplicated text adds nothing for patients and weakens the page.",
      },
      {
        q: "Does this page help with search?",
        a: "It helps patients and can support trust signals, but it is not a ranking shortcut. Treat it as a service page and let your own visit pages carry the practice information.",
      },
    ],
    citations: [CDC_HOME, NIH_HEALTH, MEDLINEPLUS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "Explain the visit without clinical claims." },
      { href: "/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims", label: "Follow-Up Visits Page", description: "Describe ongoing care in plain words." },
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language Guide", description: "Keep patient pages easy to read." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1412
  {
    slug: "response-time-target-and-inquiry-log-for-a-counseling-practice",
    keyword: "response time target and inquiry log for a counseling practice",
    category: "Checklist",
    title: "Response Time Target and Inquiry Log for Counseling",
    metaTitle: "Response Time Target and Inquiry Log for Counseling",
    metaDescription:
      "How a counseling practice can set a reply-time target for new inquiries and keep a simple log so calls and forms become sessions. Call (561) 291-2681.",
    answer:
      "Pick one reply-time target for new inquiries, such as the same business day, and write down who answers calls, forms and messages. Log each inquiry with the date received, the date answered and the result, with no health details. Review the log weekly to see where inquiries are slipping away.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("The lead you paid for can go cold in a day"),
      p(
        "A person who reaches out to a counseling practice has usually been thinking about it for weeks. When they finally fill out a form or leave a voicemail, they often contact more than one office. The practice that answers first, kindly and clearly, tends to get the first conversation, and the slower reply is easy to forget."
      ),
      p(
        "That makes reply time one of the few parts of marketing that costs nothing to improve. It does not require a new page or a bigger budget. It requires a target and a way to see whether the office is meeting it."
      ),
      h2("Set one target the office can keep"),
      table(
        ["Channel", "A target many small practices can meet"],
        ["Phone during office hours", "Answered live or returned within two hours."],
        ["Phone after hours", "Voicemail returned by the end of the next business day."],
        ["Contact form", "First reply the same business day, or by the next morning for evening submissions."],
        ["Online booking request", "Confirmed or answered within one business day."]
      ),
      p(
        "Choose numbers you can keep during a busy week. A promise on the website that the office misses is worse than a longer one it meets. Our guide to the [first-time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) shows how to state the target to the visitor."
      ),
      h2("What the log needs"),
      ul(
        "Date and time the inquiry arrived, and the channel: call, form, message or booking request.",
        "Who answered, and the date and time of the first reply.",
        "The result: booked, waitlist, referred out, no reply from the person, or not a fit.",
        "A source note if the person mentions how they found you."
      ),
      p(
        "Leave out names, reasons for seeking counseling and anything clinical. A first name or initials and a phone ending are enough to match the entry to the schedule. Use a protected spreadsheet or your practice system, not a shared consumer document."
      ),
      h3("Read the log once a week"),
      ol(
        "Count inquiries received and inquiries answered inside the target.",
        "List the ones that missed it and note why: weekend, vacation, full inbox.",
        "Fix the cause, such as an auto-reply or a second person who covers Mondays.",
        "Write the weekly count in a place the owner sees every month."
      ),
      h2("Use the first reply to help the person"),
      p(
        "A fast reply that says nothing is only half the job. Answer the question they asked, give the next step and offer a time. The [auto-reply email after a new client inquiry](/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice) buys time overnight, and a short call from a person finishes the job. If your phone line is the bottleneck, see how to [handle after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice). Many practices also review the log next to their monthly [lead count](/guides/monthly-lead-count-sheet-for-a-primary-care-practice)."
      ),
    ],
    faqs: [
      {
        q: "How fast should a counseling practice answer a new inquiry?",
        a: "Same business day is a common and achievable target. After-hours inquiries can be answered by the end of the next business day. Choose a target you can keep, then track it.",
      },
      {
        q: "What should the inquiry log include?",
        a: "The date and channel of the inquiry, who answered and when, and the result. Leave out names beyond initials and any reason for seeking counseling.",
      },
      {
        q: "Where should the log be kept?",
        a: "In a protected spreadsheet or your practice management system with limited access. Avoid shared consumer documents and ordinary email threads.",
      },
      {
        q: "Does a reply-time target help the practice get more clients?",
        a: "It cannot create inquiries, but it protects the ones you already receive. Because many people contact more than one office, a prompt, clear reply gives the practice a better chance at the first conversation.",
      },
      {
        q: "What if the practice cannot staff the phone all day?",
        a: "Use a clear voicemail greeting, an auto-reply for forms and a named person who returns messages at set times. Publish the timing so callers know what to expect.",
      },
    ],
    citations: [HHS_PRIVACY, GOOGLE_HELPFUL, GA_KEY_EVENTS],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "State your reply time on the form." },
      { href: "/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice", label: "Auto-Reply Email", description: "Acknowledge inquiries overnight." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls", description: "Keep voicemail from losing clients." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1413
  {
    slug: "monthly-lead-count-sheet-for-a-primary-care-practice",
    keyword: "monthly lead count sheet for a primary care practice calls form requests and booked visits",
    category: "Checklist",
    title: "Monthly Lead Count Sheet for a Primary Care Practice",
    metaTitle: "Monthly Lead Count Sheet for a Primary Care Practice",
    metaDescription:
      "A one-page monthly sheet for a primary care practice to count new patient calls, form requests and booked visits, and see what works. Call (561) 291-2681.",
    answer:
      "Count three numbers every month: calls from new patients, online requests, and new patient visits actually booked. Add where each came from when you know it. One small sheet, filled in by the front desk and read by the owner, shows whether marketing is bringing in patients and where the leaks are.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Why clicks and rankings are not the number"),
      p(
        "Reports from marketing vendors tend to lead with impressions, clicks and positions. Those are signals, but a practice owner cares about a different thing: how many people who did not know the office before this month asked to become patients, and how many ended up on the schedule."
      ),
      p(
        "You do not need special software to see that. A single sheet, filled in the same way every month, gives a straight answer and makes any vendor report easier to judge."
      ),
      h2("The three counts"),
      table(
        ["Count", "How to get it"],
        ["Calls from possible new patients", "Front desk tally or the call log. Count the first call only, and leave out existing patients and vendors."],
        ["Online requests", "The number of contact or appointment request form submissions, minus spam and tests."],
        ["New patient visits booked", "From the schedule: first visits that were actually put on the calendar."]
      ),
      p(
        "Add one more column when you can: the source. Our guide to [asking how new patients heard about you](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing) shows a simple question that produces it. Do not guess the source, and leave it blank if the person did not say."
      ),
      h2("A sheet you can copy"),
      ul(
        "Rows: one for each week of the month, plus a total row.",
        "Columns: calls, online requests, booked visits, and a notes cell for anything unusual, such as a closed week.",
        "Below the table: three ratios, written as plain numbers: booked visits divided by calls plus requests.",
        "A last line for one change to try next month."
      ),
      h3("Keep the data clean"),
      p(
        "Remove spam and test submissions before counting, as our note on [stopping fake leads on a contact form](/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form) describes. Count a repeat caller once. If a form arrives and the person also calls, record one lead with both channels in the notes."
      ),
      h2("How to read it"),
      p(
        "If calls and requests are healthy but booked visits are low, the problem is after the inquiry: reply speed, insurance questions or open appointment slots. If inquiries are low, the problem sits earlier, in visibility or in the pages people land on. The rule of thumb is the same for any practice: fix the biggest drop first, and change one thing at a time."
      ),
      p(
        "Set aside fifteen minutes on the same day each month, perhaps as part of the [weekly marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) for the practice manager. Save each month's sheet in a folder so you can compare quarters. For the bigger picture of cost per patient, read our guide to [measuring return on marketing](/guides/how-to-measure-roi-on-medical-practice-marketing)."
      ),
    ],
    faqs: [
      {
        q: "What counts as a lead for a primary care practice?",
        a: "A person who is not yet a patient and who calls or sends an online request asking to be seen. Existing patients, vendors and spam do not count.",
      },
      {
        q: "How do I count calls without call-tracking software?",
        a: "Have the front desk keep a tally or a simple log, marking each first-time caller. It is not perfect, but a consistent count each month shows the trend.",
      },
      {
        q: "Should I count form submissions that turn out to be spam?",
        a: "No. Remove spam and test entries before you total the month, and note how many you removed so you can see whether spam is growing.",
      },
      {
        q: "Why track booked visits and not only inquiries?",
        a: "Inquiries show interest, but booked visits show patients. The gap between them points to problems such as slow replies, schedule gaps or insurance questions.",
      },
      {
        q: "How often should I review the sheet?",
        a: "Fill it weekly and review it monthly. Keep each month's sheet so you can compare quarters and see whether a change helped.",
      },
    ],
    citations: [GA_KEY_EVENTS, GOOGLE_ANALYTICS_HELP, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing", label: "How Did You Hear About Us", description: "Attribute new patients to a source." },
      { href: "/guides/how-to-measure-roi-on-medical-practice-marketing", label: "Measure Marketing Return", description: "From leads to cost per patient." },
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly Marketing Check", description: "Fifteen minutes a week for the manager." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1414
  {
    slug: "contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website",
    keyword: "contact form emails going to spam or never arriving delivery test for a medical practice website",
    category: "Checklist",
    title: "Contact Form Emails Going to Spam: A Delivery Test",
    metaTitle: "Contact Form Emails Going to Spam: Delivery Test",
    metaDescription:
      "A short test to confirm website contact form messages reach a medical practice's inbox, with fixes for spam folders and silent failures. Call (561) 291-2681.",
    answer:
      "Send a test message through your own contact form each month using a dummy name with no health details, and confirm it lands in the inbox of the person who handles inquiries. If it lands in spam or never arrives, check the sending address, the domain's email records and the form's notification setting, then test again.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("A form can look fine and still lose every message"),
      p(
        "The most expensive website problem is one nobody sees. A visitor fills out the form, sees a thank-you message and waits. If the notification email goes to a spam folder, an old address or nowhere, the practice never knows that person asked for help. The visitor assumes the office ignored them."
      ),
      p(
        "This happens after a site rebuild, an email provider change, a staff member leaving or a spam filter getting stricter. It is cheap to check and costly to miss."
      ),
      h2("The monthly delivery test"),
      ol(
        "Open the live contact page on a phone, not the editing view.",
        "Submit a test with a clearly fake name such as Test Delivery, a phone number you control and no health information.",
        "Note the time. Check the inbox of every person who should receive inquiries, including the spam and promotions folders.",
        "Confirm the confirmation message to the sender, if you use one, also arrives.",
        "Write down the result and the date, and who checked."
      ),
      p(
        "Use the test marker your website team has set up so the submission does not count as a real lead in your own reports. If the form goes straight to a client portal or customer system, check there as well."
      ),
      h2("If the message lands in spam or does not arrive"),
      table(
        ["Symptom", "Likely cause and fix"],
        ["Arrives in spam", "The sending address does not match your domain's email records. Ask your domain host or IT provider to check the sender authentication records."],
        ["Never arrives", "The notification address is wrong, full or retired. Open the form settings and confirm the recipient list."],
        ["Arrives late", "A queue or filter is delaying it. Check the form tool's log for send status."],
        ["Arrives without the details", "A field is not mapped in the email template. Open the template and compare it with the form."]
      ),
      p(
        "Google publishes sender guidelines that explain the technical records receiving mail servers expect. You do not need to understand them in detail, but the person who manages your domain should, and our note on [who should own your Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why that person must be someone you can reach."
      ),
      h3("Send to a practice address, not a personal one"),
      p(
        "Route notifications to a monitored shared mailbox on your own domain. A [professional domain email](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) is easier to authenticate than a personal inbox, and a shared box keeps messages from vanishing when a person is out. Do not include health details in the notification itself."
      ),
      h2("Write the safety net"),
      p(
        "Beyond the monthly test, add a second path: a visible phone number next to the form, and a line on the page saying that if no reply arrives in one business day, the visitor should call. Pair this with the spam steps in our guide on [what belongs on a contact page](/guides/what-to-put-on-a-medical-practice-contact-page)."
      ),
    ],
    faqs: [
      {
        q: "How often should we test the contact form?",
        a: "Monthly, and after any change to the website, the form tool, the email provider or the staff who receive inquiries. A test takes about five minutes.",
      },
      {
        q: "What should a test submission contain?",
        a: "A clearly fake name, a phone number you control and no health information. Use any test marker your website team has set up so it does not count as a real lead.",
      },
      {
        q: "Why would form emails land in spam?",
        a: "Often the message is sent from an address that does not match your domain's email authentication records, or the content looks like bulk mail. Your domain host or IT provider can check and correct this.",
      },
      {
        q: "Should the notification email include the message?",
        a: "Keep the notification short and free of health details. Many practices send a notice with a link to read the full message in a protected portal.",
      },
      {
        q: "What if the form never arrives at all?",
        a: "Check the recipient address in the form settings, then the form tool's send log. If you cannot find the cause, add a visible phone number beside the form while it is repaired.",
      },
    ],
    citations: [GOOGLE_EMAIL_SENDERS, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stop Spam Leads", description: "Keep fake leads out of your form." },
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "Contact Page Guide", description: "What a contact page needs." },
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Use your own domain for mail." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1415
  {
    slug: "call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number",
    keyword: "call tracking numbers on a counseling practice website without changing the google profile phone number",
    category: "How-to",
    title: "Call Tracking Numbers Without Changing Your Google Phone",
    metaTitle: "Call Tracking Numbers Without Changing Your Google Phone",
    metaDescription:
      "How a counseling practice can count calls from its website with a tracking number while keeping its main number as the one on Google. Call (561) 291-2681.",
    answer:
      "Keep your real main number as the primary phone on Google, directories and the footer. If you use a tracking number, show it only in limited places such as ad landing pages, list the main number on the profile, and make sure the tracking number forwards to the same office line and is never published as the practice's number elsewhere.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("Counting calls is useful; scattering numbers is not"),
      p(
        "A counseling practice that wants to know which marketing brings in phone calls may be offered a call-tracking number. It forwards to the office line and records the call source. That can answer an important question. It can also create a mess: a second number appears on the website, a directory scrapes it, and the practice ends up with two or three phone numbers in circulation."
      ),
      p(
        "Search engines and answer tools compare phone numbers across the web to confirm that a business is who it says it is. A tracking number in the wrong place weakens that match, and Google Business Profile has its own rules on which number belongs in the main field."
      ),
      h2("Where each number belongs"),
      table(
        ["Place", "Which number to use"],
        ["Google Business Profile primary phone", "The real main number of the practice."],
        ["Website footer, contact page and schema", "The real main number, so the name, address and phone match everywhere."],
        ["Directory and insurance listings", "The real main number."],
        ["Paid ad landing page", "A tracking number is acceptable here if it forwards to the office line."],
        ["Print flyers or a referral card", "A separate forwarding number can work, with the source named in your sheet."]
      ),
      p(
        "Our guide to [fixing inconsistent name, address and phone details](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains why one number per place matters. If a tracking number has to appear on the profile, Google lets you add it as an additional number, not the primary one."
      ),
      h2("Count calls without extra numbers"),
      ul(
        "Use the call button on the Google profile and read the monthly call counts in its performance report.",
        "Record a click on the phone link on your website as an event in Google Analytics.",
        "Add UTM tags to the website link on the profile, as our note on [UTM links for profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice) describes.",
        "Ask each new caller how they found you, and log the answer."
      ),
      p(
        "Many practices find that these methods give enough direction without a single tracking number. Clicks on a phone link do not equal calls that connect, so label them as taps in your reports. Our page on [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website) covers the options in more depth."
      ),
      h3("Questions to ask a tracking vendor"),
      ul(
        "Does the number forward to our existing line without changing our caller ID?",
        "Who owns the number if we leave, and can we keep it?",
        "Are calls recorded? If so, how is the client told, and where are recordings stored?",
        "Can the number be hidden from the Google profile and directories?"
      ),
      p(
        "Recording calls brings consent rules that differ by state, and a counseling practice should have an attorney review any recording plan before it starts. This guide is not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Can a tracking number be the primary phone on Google?",
        a: "It is better not to. Keep your real main number as the primary phone so it matches your website and directories. If a tracking number must be listed, add it as an additional number.",
      },
      {
        q: "Where is a tracking number safe to use?",
        a: "On a limited set of pages, such as a paid ad landing page, or on printed material, as long as it forwards to your office line and the main number stays everywhere else.",
      },
      {
        q: "Can I count calls without a tracking number?",
        a: "Partly. The Google profile reports call button taps, your website can record clicks on the phone link, and asking callers how they found you adds the human side.",
      },
      {
        q: "Should calls be recorded?",
        a: "Only after legal review. Recording laws vary by state, and a counseling practice carries added sensitivity. Ask your attorney before turning on any recording.",
      },
      {
        q: "What happens to the number if we change vendors?",
        a: "Ask before you sign. Some vendors keep ownership of the number. Your real main number should always be owned by the practice.",
      },
    ],
    citations: [GBP_GUIDELINES, GA_KEY_EVENTS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone identical." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Count calls from your site." },
      { href: "/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice", label: "UTM Links", description: "Tag profile and directory clicks." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1416
  {
    slug: "front-desk-new-patient-call-log-fields-for-a-primary-care-practice",
    keyword: "front desk new patient call log fields for a primary care practice",
    category: "Checklist",
    title: "Front Desk New Patient Call Log Fields for Primary Care",
    metaTitle: "Front Desk New Patient Call Log Fields for Primary Care",
    metaDescription:
      "What a primary care front desk should record on each new patient call, and what to leave out, so you can see which calls become visits. Call (561) 291-2681.",
    answer:
      "Record seven things on every new patient call: date and time, first name or initials, phone ending, how they found you, what they asked for in general terms, the outcome and the next step with a date. Leave out symptoms, diagnoses and insurance numbers so the log stays safe to review.",
    author: "Gio LaRoche",
    publishDate: "2026-10-30T15:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 5,
    sections: [
      h2("The call is where most new patients are won or lost"),
      p(
        "For a primary care office, the phone is still the main door. Someone searches, sees the number and calls. The next three minutes decide whether they book, call another office or give up. Yet most practices do not know how many first-time calls they get in a week, how many were answered live or how many ended in a booked visit."
      ),
      p(
        "A one-line log for each new patient call changes that. It takes under a minute per call once the fields are decided, and it gives the owner a number to work with at the end of the month."
      ),
      h2("The seven fields"),
      table(
        ["Field", "What to write"],
        ["Date and time", "When the call came in, so you can see busy and quiet hours."],
        ["Name", "First name or initials only. The full record belongs in the scheduling system."],
        ["Phone ending", "The last four digits, enough to match a callback."],
        ["Source", "How they found you: Google, a friend, a doctor, insurance directory, other. Ask once and record what they say."],
        ["Request, in general terms", "Wanting to become a patient, a sick visit, a transfer. A category, not a symptom."],
        ["Outcome", "Booked, waitlist, call back needed, not accepting their plan, wrong number."],
        ["Next step and date", "Who will do what, and by when."]
      ),
      p(
        "Our [new patient intake phone script](/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice) uses the same order, so the questions and the log line up."
      ),
      h2("What stays out of the log"),
      ul(
        "Symptoms, conditions, medicines and reasons for the visit.",
        "Insurance member numbers, birth dates and social security numbers.",
        "Any note about a person's mood or behavior beyond what is needed to call back.",
        "Personal opinions, which do not belong in a business record."
      ),
      p(
        "Keep the log in a system with restricted access and a record of who opened it. A printed sheet left at the desk is a privacy risk. If your practice management system already stores call notes, use it and add the source field."
      ),
      h3("Measure what the front desk can control"),
      p(
        "Two numbers from the log are worth watching: how many calls ended with a booked visit, and how many ended in call back needed. A high call-back count means staff cannot reach people or cannot book on the spot, which is a scheduling and staffing question. Review [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) that may send callers to voicemail and check whether the [front desk and care team page](/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first) sets the right expectations."
      ),
      h2("Turn the log into a monthly number"),
      ol(
        "Count new patient calls, booked visits and call-back needed outcomes.",
        "Group the source column and see which sources bring calls that book.",
        "Note any wrong-number or spam-flagged calls, and check the [phone number reputation](/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam).",
        "Copy the totals onto the monthly lead sheet."
      ),
    ],
    faqs: [
      {
        q: "What is the minimum a front desk should log?",
        a: "Date and time, first name or initials, how the person found you, the general request, the outcome and the next step. Everything else lives in the scheduling system.",
      },
      {
        q: "Should symptoms be written in the call log?",
        a: "No. The log is for business tracking. Record a category such as wants to become a patient or needs a sick visit, and keep clinical details in the proper record.",
      },
      {
        q: "How do we get the source without sounding pushy?",
        a: "Ask one friendly question near the end of the call, such as how they heard about the office, and record whatever they say. If they do not know, leave it blank.",
      },
      {
        q: "Who should be able to read the log?",
        a: "The practice manager, the owner and staff who handle scheduling. Use a system with access controls and avoid shared documents with open links.",
      },
      {
        q: "How does the call log connect to marketing?",
        a: "It supplies the count of new patient calls and their sources, which feed your monthly lead sheet and show whether marketing is bringing in patients who book.",
      },
    ],
    citations: [HHS_PRIVACY, GA_KEY_EVENTS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "New Patient Phone Script", description: "Questions in the same order as the log." },
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Front Desk And Care Team Page", description: "Set expectations before the call." },
      { href: "/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam", label: "Spam-Flagged Numbers", description: "Check your number's reputation." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
