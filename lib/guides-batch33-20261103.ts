// -- Guides batch 33 - 2026-11-03 --
// Guide/AEO pages from the Command Center queue (rows 1463, 1465-1472 plus six rows planned 2026-11-03),
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
const HHS_TRACKING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Use of online tracking technologies by HIPAA covered entities",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const FL_BOM = {
  publisher: "Florida Board of Medicine",
  label: "Florida Board of Medicine",
  href: "https://flboardofmedicine.gov/",
};
const GBP_X_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_X_GTMCREATE = {
  publisher: "Google Tag Manager Help",
  label: "Create an account and container",
  href: "https://support.google.com/tagmanager/answer/6103696",
};
const GBP_X_MAPSPOL = {
  publisher: "Google Maps User Generated Content Policy Help",
  label: "Prohibited & restricted content",
  href: "https://support.google.com/contributionpolicy/answer/7400114",
};
const GBP_X_REVTIPS = {
  publisher: "Google Business Profile Help",
  label: "Tips to get more reviews",
  href: "https://support.google.com/business/answer/3474122",
};
const GBP_LOCAL_RANK = {
  publisher: "Google Business Profile Help",
  label: "Tips to improve your local ranking on Google",
  href: "https://support.google.com/business/answer/7091",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_EVENT = {
  publisher: "Google Search Central",
  label: "Event structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/event",
};
const GOOGLE_REDIRECTS = {
  publisher: "Google Search Central",
  label: "Redirects and Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
};
const GOOGLE_IMAGES = {
  publisher: "Google Search Central",
  label: "Google Images best practices",
  href: "https://developers.google.com/search/docs/appearance/google-images",
};
const WCAG = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Web Content Accessibility Guidelines (WCAG) overview",
  href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
};
const WCAG_G201 = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Giving users advanced warning when opening a new window",
  href: "https://www.w3.org/WAI/WCAG22/Techniques/general/G201",
};
const MDN_NOOPENER = {
  publisher: "MDN Web Docs",
  label: "rel=noopener attribute",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener",
};
const NIMH_HELP = {
  publisher: "National Institute of Mental Health",
  label: "Find help for mental illnesses",
  href: "https://www.nimh.nih.gov/health/find-help",
};
const CDC_TRAVEL = {
  publisher: "Centers for Disease Control and Prevention",
  label: "CDC Travelers' Health",
  href: "https://wwwnc.cdc.gov/travel",
};
const HEALTHCARE_PCP = {
  publisher: "HealthCare.gov",
  label: "Glossary: primary care provider",
  href: "https://www.healthcare.gov/glossary/primary-care-provider/",
};
const SAMHSA = {
  publisher: "Substance Abuse and Mental Health Services Administration",
  label: "SAMHSA",
  href: "https://www.samhsa.gov/",
};
const OIG_AKS = {
  publisher: "HHS Office of Inspector General",
  label: "Fraud and abuse laws",
  href: "https://oig.hhs.gov/compliance/physician-education/fraud-abuse-laws/",
};
const CDC_988 = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};

export const guidesPartThirtySix: Guide[] = [
  // ---------------------------------------------------------------- 1463
  {
    slug: "online-workshop-and-webinar-page-with-event-markup-for-a-counseling-practice",
    keyword: "online workshop and webinar page with event markup for a counseling practice",
    category: "How-to",
    title: "Online Workshop Page With Event Markup For Counselors",
    metaTitle: "Online Workshop Page With Event Markup For Counselors",
    metaDescription:
      "How a counseling practice can publish an online workshop page with the date, sign-up steps and Event markup, no health details asked. Call (561) 291-2681.",
    answer:
      "An online workshop page needs the date and time with a time zone, who the session is for, how to join, what it costs, and a sign-up form that asks only for a name and email. Add Event markup so search engines can read the same facts. Never ask why someone wants to attend.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("Why a workshop deserves its own page"),
      p(
        "A one-hour online workshop on stress at work, parenting transitions or sleep habits is a low-pressure way for someone to meet a counselor before booking anything. If it only lives in a social post, it disappears in two days. A page with its own address can be found by search, linked from your homepage, and reused the next time you run the session."
      ),
      p(
        "The page also protects the practice. When the topic, audience and limits are written in one place, nobody mistakes a general-education session for therapy, and nobody shares personal details in a public chat expecting a private conversation."
      ),
      h2("What the page must say"),
      table(
        ["Item", "What to write"],
        ["Date and time", "Write the full date, start time and time zone, such as Thursday at 7:00 pm Eastern. Say how long it runs."],
        ["Who it is for", "Describe the audience by situation, such as working parents or new managers. Do not describe their symptoms."],
        ["How to join", "Name the video tool, say when the link arrives, and say whether the session is recorded."],
        ["Cost", "State the price or say free. If payment is taken, say what the refund rule is."],
        ["What it is not", "One plain sentence: this is general education, not therapy, and it does not create a counseling relationship."],
        ["Crisis note", "Give 988 and the office number, because a workshop attendee may be having a hard week."],
      ),
      h2("A sign-up form that stays small"),
      p(
        "Ask for a first name, an email address and nothing more. A free-text box labelled Why are you interested invites health details into an email inbox, and a form that stores them becomes something the practice has to protect. If you need a head count, a checkbox for accessibility needs is enough, with a line saying that it is optional."
      ),
      ul(
        "Say in one sentence what the practice will do with the email address, such as send the link and one reminder.",
        "Do not add attendees to a newsletter unless they tick a separate box.",
        "Send the confirmation from a practice address, with no topic in the subject line beyond the event title.",
        "Keep the attendee list out of any shared chat, and decide in advance who can see it."
      ),
      h2("Adding Event markup"),
      p(
        "Event structured data is a block of code that states the name, start date, end date, attendance mode and location of the session in a form that search engines can read. For an online workshop the attendance mode is online, and the location is a web address rather than a street. Google documents the required and recommended fields, and says that adding markup makes a page eligible for event features, not guaranteed to receive them."
      ),
      p(
        "Keep the markup identical to the visible page. If the page says 7:00 pm and the code says 6:00 pm, you have created a mismatch that Google may ignore. Update both when the date changes, and remove the page from the sitemap or mark the event as ended once it is over. You can check the result with the method in [testing structured data on a medical practice website](/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website)."
      ),
      h3("After the session"),
      p(
        "Do not delete the page. Change it to a short recap with the date it ran and a line saying when the next one is planned, or a button to ask to be told. A page that keeps a stable address collects links over time, and the next workshop can reuse it. If you hold sessions often, the habits in [a content calendar checklist for a medical practice](/guides/medical-practice-content-calendar-checklist) help you plan them."
      ),
      h2("Wording that stays honest"),
      p(
        "Describe what attendees will learn, not what will happen to them. A line like we will walk through three ways to plan a calmer week is a description of content. A line like you will stop feeling anxious is a promise about an outcome, which no practice can make. The same rule applies to the title: choose a topic name that a person can read aloud without embarrassment, and avoid naming a condition in the title if the audience is general."
      ),
      p(
        "If you want to see how much the page earns, use a tracked sign-up button and count form submissions, as described in [thank-you pages after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it). Sign-ups are a clearer signal than page views."
      ),
    ],
    faqs: [
      {
        q: "Is a workshop considered therapy?",
        a: "No, if it is a general-education session and says so. State that it is not counseling and creates no client relationship. Do not invite attendees to share personal situations in the chat, and give a number for one-to-one help for anyone who wants it.",
      },
      {
        q: "Does Event markup improve our ranking?",
        a: "Not directly. Markup helps search engines read the date, time and mode of the session, and it may make the page eligible for event features. Google does not promise those features, so write the page for people first and treat the markup as a clear label.",
      },
      {
        q: "Should we record the workshop?",
        a: "Only if you say so on the page before sign-up, and only if the format makes it safe. Recording can capture names and comments from attendees. Many practices record the presentation only and switch off attendee video, audio and chat in the recording.",
      },
      {
        q: "What should the form ask for?",
        a: "A first name and an email address. Anything else adds risk without helping you run the session. If you need to plan accessibility, offer an optional line for it, and say that the answer is used only to arrange the session.",
      },
      {
        q: "What do we do with the page when the date passes?",
        a: "Keep the address, change the status to ended in the markup, and turn the content into a short recap with the next date or a notify button. Deleting the page throws away any links it earned and sends visitors to an error.",
      },
    ],
    citations: [GOOGLE_EVENT, HHS_PRIVACY, CDC_988, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice", label: "Community Education Event Page", description: "The in-person version for a primary care practice." },
      { href: "/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website", label: "Testing Structured Data", description: "Check that the markup reads correctly." },
      { href: "/guides/mental-health-awareness-month-and-world-mental-health-day-content-for-a-counseling-practice", label: "Awareness Month Content", description: "Dates that suit a workshop." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1465
  {
    slug: "minor-procedures-offered-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "minor procedures offered page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Minor Procedures Page For A Primary Care Practice",
    metaTitle: "Minor Procedures Page For A Primary Care Practice",
    metaDescription:
      "How a primary care practice can list the minor procedures it offers in plain words, with no outcome claims, for patients. Call (561) 291-2681.",
    answer:
      "A minor procedures page lists only what your clinicians actually perform in the office, in plain words, with who performs it, how to ask about it, and what is sent elsewhere. It makes no promises about results and gives no medical advice. When in doubt, leave an item off.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("The question patients are really asking"),
      p(
        "A patient with a small problem wants to know one thing: can this office handle it, or will I be sent somewhere else and wait weeks? Typing a procedure name into a search box is how many people start. If your site has no page that answers, the visit goes to an urgent care center or a competitor that does."
      ),
      p(
        "The goal of the page is to remove that uncertainty honestly. It is a menu of what the office does, written so a patient can decide whether to book. It is not a place to explain who needs a procedure or how it will turn out. That belongs in the exam room."
      ),
      h2("Build the list from the clinicians, not from a template"),
      p(
        "Ask each provider which procedures they perform in the office today, not which ones they are trained to do. A procedure that one clinician offers one afternoon a month needs a note saying so. Your state licensing board sets the scope for each license type, and the [Florida Board of Medicine](https://flboardofmedicine.gov/) is the place to confirm questions about scope. When a clinician is unsure, leave the item off until they have confirmed it."
      ),
      table(
        ["Column", "What to put in it"],
        ["Procedure name", "The plain name a patient would say, with the formal name in brackets only if it helps."],
        ["Performed by", "The provider type, such as physician, nurse practitioner or physician assistant, as licensed."],
        ["How to ask", "Whether a patient can book it directly, or needs a visit first to decide."],
        ["Not offered here", "A short line naming what is referred out, so patients stop searching for it."],
      ),
      h2("Wording that avoids clinical claims"),
      p(
        "Describe the service, not the benefit. Writing that the office offers suture removal and joint injections is a statement of fact. Writing that a procedure is painless, quick or the best option is a claim about outcomes and about individual patients, and it is easy to get wrong. Leave out success rates, comparisons with other offices and promises about recovery."
      ),
      ul(
        "Do not use the words safe, painless or guaranteed.",
        "Do not describe who should or should not have a procedure. Say that the provider decides at the visit.",
        "Do not show photographs of patients or procedures. Use office photos or none at all.",
        "Do not list prices unless you can commit to them. If you publish them, follow the approach in [publishing self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website)."
      ),
      h2("Make the page easy to act on"),
      p(
        "Put the phone number as a tap-to-call link at the top and again after the table. Many people reading this page have a problem today, and a form that promises a reply in two days will lose them. Say whether the office takes same-day requests for procedures, and link to your [same-day appointment request](/guides/same-day-appointment-request-button-wording-for-a-primary-care-practice) route if it does."
      ),
      h3("Insurance and visit type"),
      p(
        "A procedure is often billed with a visit. A single sentence explaining that coverage depends on the plan and the visit, and that the front desk can check before the appointment, is more useful than a price list that may be wrong. Keep that sentence consistent with your [insurance information page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice)."
      ),
      h2("Keeping it current"),
      p(
        "Add the page to your quarterly review. Providers leave, equipment changes, and a procedure removed from the office should come off the page the same week. A page that offers something the office stopped doing produces angry calls and one-star reviews."
      ),
    ],
    faqs: [
      {
        q: "Should the page explain how each procedure works?",
        a: "No. A short description of what the service is called is enough. Detailed explanations drift into medical advice and need clinical review. Link to a trusted public source such as a government health site if you want patients to read more, and let the provider explain in person.",
      },
      {
        q: "Can we list procedures a provider performs only occasionally?",
        a: "Yes, if you say so plainly, for example available on selected days. A vague listing that suggests daily availability leads to disappointed patients. If the schedule changes often, ask the front desk to confirm the day before booking.",
      },
      {
        q: "Do we need one page per procedure?",
        a: "Usually not. One page with a clear table serves a small office. Give a procedure its own page only when many patients ask about it, you can write a full page about it without repeating the others, and a clinician has reviewed the wording.",
      },
      {
        q: "Can we mention results or satisfaction?",
        a: "Avoid it. Results differ between patients, and statements about outcomes are hard to support. Satisfaction claims also raise testimonial rules. Stick to what the office offers, who provides it and how to book.",
      },
      {
        q: "How do we handle procedures we refer out?",
        a: "Name them in a short list of what is referred, with a link to your specialist referral page. It keeps patients from guessing and saves calls. Do not name a particular outside practice unless the arrangement is real and current.",
      },
    ],
    citations: [FL_BOM, HEALTHCARE_PCP, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "Where referred-out procedures point." },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types And Appointment Lengths", description: "Explaining what each booking means." },
      { href: "/guides/how-to-write-a-medical-service-page-that-ranks", label: "Writing A Medical Service Page", description: "The structure behind a good service page." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1466
  {
    slug: "voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy",
    keyword: "voicemail greeting script for a counseling practice that protects privacy",
    category: "How-to",
    title: "Voicemail Greeting Script For A Counseling Practice",
    metaTitle: "Voicemail Greeting Script For A Counseling Practice",
    metaDescription:
      "A voicemail greeting script for a counseling practice that never confirms who is a client, states call-back times and gives 988. Call (561) 291-2681.",
    answer:
      "A counseling voicemail greeting should name the practice, state when calls are returned, say what to leave and what not to leave, and give 988 for emergencies. It must never confirm that a caller is a client or name a clinician in a way that reveals who is being seen.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("Why the greeting matters more than it looks"),
      p(
        "For many people the voicemail is the first contact with a counselor. They may have gathered courage for days, called after hours and reached a machine. What they hear in the next twenty seconds decides whether they leave a message or hang up and keep looking."
      ),
      p(
        "It is also a privacy moment. A caller may be in a car, at work or at home with others nearby, and a client may be playing the message on speaker. The greeting should say nothing that would let a listener work out who is being seen."
      ),
      h2("Say what to leave, and what to leave out"),
      p(
        "Ask for a name, a phone number and the best time to call back. Then say plainly that callers should not describe symptoms, history or anything sensitive in the message, because voicemail may not be private. This one sentence prevents most of the problems and costs nothing."
      ),
      table(
        ["Part of the greeting", "Example wording"],
        ["Practice name", "Thank you for calling the practice, a counseling office."],
        ["Return time", "Calls are returned within one business day, Monday through Friday."],
        ["What to leave", "Please leave your name, your number and a good time to reach you."],
        ["What not to leave", "Please do not leave details about your concerns. Voicemail may not be private."],
        ["Emergency line", "If you are in crisis or in danger, call or text 988, or call 911."],
      ),
      h2("A script you can adapt"),
      p(
        "Read it aloud and time it. It should run under thirty seconds, because longer messages lose callers who are already nervous. The text below is a starting point, not legal wording, and the practice owner should adjust it to the real call-back times."
      ),
      ol(
        "Thank you for calling. You have reached a counseling office.",
        "We are with clients or away from the phone, and we return calls within one business day.",
        "Please leave your name, your phone number and a good time to call back.",
        "Please do not leave details about your concerns, because voicemail may not be private.",
        "If you are in crisis, call or text 988 or call 911. Thank you."
      ),
      h2("What the greeting must never do"),
      ul(
        "Name a clinician in a way that implies a caller is a client, such as you have reached the voicemail of a client of Dr. Smith.",
        "Say that a caller is welcome back, or ask whether they are an existing client.",
        "Read out a schedule that reveals who is in session at a given time.",
        "Promise a same-day return that the office cannot keep."
      ),
      p(
        "On the return call, apply the same care. Staff should ask to speak to the person by name, leave a message with only a call-back number if someone else answers, and avoid naming the practice if the voicemail is not the caller's own. The wording for texts and calendar invites follows the same principle, as in [appointment reminder wording that protects client privacy](/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy)."
      ),
      h3("Check it like a caller would"),
      p(
        "Once a quarter, call the office from a mobile phone after hours. Listen for the pause before the beep, the volume, and whether the recording matches your current hours. Compare it with what the website and Google profile say, using the checks in [after-hours calls and voicemail at a medical practice](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice). A mismatch between the greeting and the profile is a small trust loss that is easy to fix."
      ),
      p(
        "Finally, decide who checks the mailbox and how often. A greeting that promises one business day is a promise to a person who may have been struggling that week, and a missed message is the costly part."
      ),
    ],
    faqs: [
      {
        q: "Should the greeting say the practice name?",
        a: "Yes, because callers need to know they reached the right place. Keep it general enough that a person overhearing a speaker phone learns little. A practice name that contains a condition or a service can be a privacy issue for a caller, so consider this when you choose the wording.",
      },
      {
        q: "Is it acceptable to ask callers whether they are existing clients?",
        a: "It is better not to. Asking invites a caller to confirm a relationship out loud on a recording. Ask only for a name and a number, and let staff sort out new versus existing clients on the return call, in private.",
      },
      {
        q: "How long should the message be?",
        a: "Under thirty seconds. Callers who are anxious often abandon long recordings, and the most useful details are the return time, what to leave and the emergency line. Put the crisis information last so it is not cut off by the beep.",
      },
      {
        q: "What if the practice cannot return calls within one business day?",
        a: "Then promise a longer time that you can keep, and say it. A realistic promise builds trust. If the caseload is full, say that on the message and point callers to resources, consistent with a waitlist page on your site.",
      },
      {
        q: "Should we mention 988 even if we are not a crisis service?",
        a: "Yes. Callers cannot always tell from the greeting how urgent their situation is, and a clear pointer to 988 costs a few seconds. It also shows that the practice has thought about safety, without implying it provides emergency care.",
      },
    ],
    citations: [HHS_PRIVACY, CDC_988, ACA_ETHICS],
    links: [
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "The same safety wording on your website." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page For A Full Caseload", description: "What to say when you cannot take new clients." },
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time Target And Inquiry Log", description: "Keeping the call-back promise." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1467
  {
    slug: "redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website",
    keyword: "redirects when removing a service or provider page on a medical practice website",
    category: "Checklist",
    title: "Redirects When Removing A Service Or Provider Page",
    metaTitle: "Redirects When Removing A Service Or Provider Page",
    metaDescription:
      "What to do with the old address when a practice removes a service or provider page: pick the closest page, use a 301 and test it. Call (561) 291-2681.",
    answer:
      "When you remove a service or provider page, send the old address with a 301 redirect to the closest live page that helps the same visitor, such as the service hub or the team page. Do not send everything to the homepage, and let a truly gone page return a clear not-found message.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("What happens to an address when a page is deleted"),
      p(
        "A page that is deleted does not disappear from the web. Its address is still in Google, in old emails, on directory profiles and in other sites that linked to it. The next person who clicks arrives at an error page and leaves, and search engines keep trying the address for weeks."
      ),
      p(
        "Practices create this when a provider retires, a service is dropped, or two pages are merged during a redesign. The fix is a decision made once, at the moment of removal, about where each old address should go."
      ),
      h2("Choose the destination for each page"),
      table(
        ["Situation", "Where the old address should go"],
        ["A provider has left", "The team or providers page, or the page of the provider who took over their patients."],
        ["A service is no longer offered", "The closest service page, or the services overview if none is close."],
        ["Two pages were merged", "The page that now holds the combined content."],
        ["A page was a duplicate", "The original page, with a canonical tag as a backup."],
        ["Nothing relevant exists", "Let it return a 404 or 410, with a helpful error page."],
      ),
      p(
        "The rule is relevance. A visitor looking for a retired physician wants to learn where to go next, not to be dropped on a homepage with no explanation. Google describes redirecting to an unrelated page as a poor experience, and may treat it as a soft error. Choose the nearest useful page, or no redirect at all."
      ),
      h2("Use a 301, and test it"),
      p(
        "A 301 is the permanent redirect. It tells browsers and search engines that the old address has moved for good. Google's documentation on redirects explains the types and when each fits. Ask your web developer to set the redirect on the server or in the website platform, and do not use a refresh tag or a script that sends visitors after the page loads."
      ),
      ol(
        "List every address you are removing, with its replacement beside it.",
        "Set the redirects live at the same time the page is removed.",
        "Open each old address on a phone and confirm it lands on the right page, in one step.",
        "Remove the old address from the sitemap and from internal links.",
        "Update the link on your Google profile, directory listings and email signature."
      ),
      h3("Avoid chains and loops"),
      p(
        "A chain happens when A goes to B and B later goes to C. Each hop slows the visit and weakens the signal. When you add a new redirect, update older ones to point straight to the final page. Use the crawl approach in [finding and fixing broken links and 404 errors](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) to find chains you already have."
      ),
      h2("Provider pages need a little more care"),
      p(
        "A departing provider's page often carries links from the hospital directory, a licensing profile and reviews. After you redirect it, work through the checklist in [what to update when a provider joins or leaves a medical practice](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice), because the redirect fixes only one of the places where the name appears."
      ),
      p(
        "If patients are being moved to another clinician, say so on the destination page in a sentence, with the phone number as a tap-to-call link. Keep the wording factual and kind, and avoid giving a reason for the departure unless the provider has agreed to it. Record the date of the removal and the redirect in a [one-page marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) so a later change in traffic can be matched to it."
      ),
      h2("Keep a record"),
      p(
        "Write the old address, the new address and the date in a simple sheet. Review it each year, because redirects rarely need to be removed, and a site migration is much easier when the list exists. The planning steps in [migrating a medical practice website to a new domain](/guides/how-to-migrate-a-medical-practice-website-to-a-new-domain) assume you have it. A redesign is the most common time to lose old addresses by accident, so the [questions to ask a web designer before a redesign](/guides/questions-to-ask-a-web-designer-before-redesigning-a-medical-practice-website-so-rankings-are-not-lost) include asking for the old-to-new list in writing."
      ),
    ],
    faqs: [
      {
        q: "Should every removed page redirect to the homepage?",
        a: "No. A redirect to an unrelated page confuses visitors and may be treated as a soft error by Google. Redirect to the closest relevant page. If there is no relevant page, a proper not-found response with links to your main pages is the better choice.",
      },
      {
        q: "How long should we keep a redirect?",
        a: "Indefinitely, for pages that earned links or were shared. Redirects are small and cost nothing to keep. Google suggests keeping them for at least a year, but old links keep arriving for much longer, so removing them usually helps no one.",
      },
      {
        q: "What is the difference between a 404 and a 410?",
        a: "A 404 says the page was not found, and a 410 says it is gone for good. Search engines treat them similarly. Either is fine for a page with no replacement. What matters is that the visitor sees a helpful message, not a blank screen.",
      },
      {
        q: "Will a redirect keep our rankings?",
        a: "A relevant 301 passes most of the value of the old address to the new one, but nothing is guaranteed. If the new page is weaker or different, the ranking may change. Make the destination genuinely helpful for the same search.",
      },
      {
        q: "Do we redirect pages for a provider who is on leave?",
        a: "No. A provider on leave is coming back, so keep the page and add a short notice. Redirect only when the provider has left the practice for good. See the leave notice guidance for wording that makes no health references.",
      },
    ],
    citations: [GOOGLE_REDIRECTS, GOOGLE_HELPFUL, GBP_X_EDIT],
    links: [
      { href: "/guides/provider-on-leave-notice-for-a-primary-care-practice-without-clinical-claims", label: "Provider On Leave Notice", description: "When the page should stay." },
      { href: "/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice", label: "Client Transfer Notice", description: "Telling clients where to go next." },
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "XML Sitemaps And Robots.txt", description: "Keeping removed pages out of the sitemap." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1468
  {
    slug: "google-reviews-that-mention-a-provider-who-has-left-a-medical-practice",
    keyword: "google reviews that mention a provider who has left a medical practice",
    category: "How-to",
    title: "Reviews That Mention A Provider Who Has Left",
    metaTitle: "Reviews That Mention A Provider Who Has Left",
    metaDescription:
      "What a practice can and cannot do about Google reviews that name a provider who has left, plus a privacy-safe reply template. Call (561) 291-2681.",
    answer:
      "You cannot remove a Google review just because the provider it names has left. Reply in a way that confirms nothing about the reviewer, say how patients can reach care now, and update the provider's profile. Ask Google to remove a review only when it breaks Google's content policy.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("A review about someone who is no longer there"),
      p(
        "A provider leaves, and the reviews stay. A new patient reads a glowing note about Dr. Lee, books, and learns on the phone that Dr. Lee moved on in the spring. Or a critical review about a former clinician sits at the top of the page and colors how people see the whole office."
      ),
      p(
        "Neither situation is a policy violation by itself. Reviews belong to the experience of the reviewer, and Google does not delete them because staffing changed. What a practice can do is reduce confusion and respond with care."
      ),
      h2("What Google will and will not remove"),
      p(
        "Google's content policy covers spam, fake engagement, off-topic content, conflict of interest, harassment and a few other categories. A review from a real patient about a real visit with a provider who has since left does not fall under any of them. Flagging it will not help, and repeated flags on valid reviews can waste your time. The steps in [handling a fake Google review on a medical listing](/guides/how-to-handle-a-fake-google-review-on-a-medical-listing) apply only when the review is truly not genuine."
      ),
      table(
        ["Situation", "What to do"],
        ["Genuine review, kind", "Thank the reviewer without confirming they are a patient, and mention that the practice has a new team."],
        ["Genuine review, critical", "Reply briefly and kindly, move the conversation offline, and do not discuss the visit."],
        ["Review that names staff and breaks policy", "Flag it with the specific policy category, such as harassment or conflict of interest."],
        ["Review from someone who was never a patient", "Flag as not based on a real experience, and keep a screenshot."],
      ),
      h2("A reply that protects privacy"),
      p(
        "Even when the reviewer has written about their own care, the practice must not confirm that they were a patient, mention the visit, or name the provider's role in their treatment. Reply in general terms that would apply to any reader. The principles in [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) cover this in detail."
      ),
      ul(
        "Thank the person for taking the time to write.",
        "Say that the practice has changed its team and welcomes new and returning patients.",
        "Give the phone number as the way to reach the office and ask who the right clinician is today.",
        "Do not state why the provider left or where they went, unless they have agreed to it in writing."
      ),
      h3("A template"),
      p(
        "Thank you for your review. Our team has changed since this was written, and we would be glad to help you find the right clinician today. Please call the office and the front desk will take it from there."
      ),
      h2("Fix what is within your control"),
      p(
        "The review stays, but the signals around it can change. Update the practice website team page, remove the provider from the profile's services and staff mentions, and correct the individual practitioner listing if one exists. The listing steps are covered in [practitioner listing versus practice listing on Google](/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice), and the broader list is in the provider-leaves checklist."
      ),
      p(
        "If the departing provider helped to collect those reviews, you may notice a drop in new ones. That is normal. Keep asking current patients for honest reviews through your regular process, without sorting who gets asked, and the overall picture will refresh. The approach in [getting more patient reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating) keeps the process within Google's rules."
      ),
      h2("Tell your front desk"),
      p(
        "Give the team one sentence to use when a patient asks for a clinician who has left. It should say who now sees those patients and how to book. A consistent answer on the phone does more to repair trust than any reply on the review page."
      ),
    ],
    faqs: [
      {
        q: "Can we ask Google to delete reviews of a former provider?",
        a: "Not for that reason alone. Google removes reviews that break its content policy, such as spam, fake engagement or harassment. A genuine review from a real patient stays, even if the provider has left. You can reply publicly and update your profile.",
      },
      {
        q: "Should the reply say the provider has left?",
        a: "Only if the provider and practice have agreed to say so, and in neutral words. A line saying the practice has a new team is enough. Do not explain why someone left, and never imply anything about the reviewer's own care.",
      },
      {
        q: "Will old reviews affect our new providers?",
        a: "The star average includes every review for the profile. That is why a steady flow of fresh, honest reviews matters. Reviews about a person who left will slowly count for less as new ones arrive, but they will not be removed.",
      },
      {
        q: "Can we pay or ask a reviewer to change a review?",
        a: "Never offer anything of value for a review change. You may politely invite a reviewer to update their review after their concern is resolved, as long as you do not pressure them. Google and the FTC both treat incentivized reviews as a problem.",
      },
      {
        q: "What if the review reveals the reviewer's health information?",
        a: "The reviewer chose to share it, and the practice cannot respond in kind. You may ask Google to review it if it contains someone else's private details. Reply with a general message and invite the person to call the office.",
      },
    ],
    citations: [GBP_X_MAPSPOL, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Responding To A Negative Patient Review", description: "A calm structure for hard replies." },
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "When A Provider Joins Or Leaves", description: "The full list of places to update." },
      { href: "/guides/how-to-ask-a-patient-to-update-or-remove-a-google-review-after-you-resolve-the-problem", label: "Asking A Patient To Update A Review", description: "The right way to follow up." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1469
  {
    slug: "google-tag-manager-setup-for-a-medical-practice-website-without-sending-patient-data",
    keyword: "google tag manager setup for a medical practice website without sending patient data",
    category: "Checklist",
    title: "Google Tag Manager For A Medical Practice Site",
    metaTitle: "Google Tag Manager For A Medical Practice Site",
    metaDescription:
      "A tag-by-tag checklist for setting up Google Tag Manager on a medical practice website so patient details never leave the site. Call (561) 291-2681.",
    answer:
      "Set up Tag Manager as a short, reviewed list: one container, a named owner, only the tags you can explain, no tags on portal or form-result pages, and no form field values, names or health terms passed in tags. Review the container every quarter and remove anything unused.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 6,
    sections: [
      h2("Tag Manager is a container, not a risk by itself"),
      p(
        "Google Tag Manager lets a practice add and change measurement code without editing the website each time. That is convenient, and it is also the reason problems pile up. Anyone with access can add a tag, and a pixel placed during a campaign three years ago may still be running on every page, including pages where patients log in or book."
      ),
      p(
        "The goal is a container that does the least it needs to, and that someone can read in ten minutes. Everything below is about keeping the container small and keeping patient details out of it."
      ),
      h2("Set the ground rules first"),
      ul(
        "Name one owner for the container. Everyone else gets read access or a limited role.",
        "Use the practice's own Google account to create it, not an employee's personal account or an agency login that will leave.",
        "Keep a one-page list of tags, with what each does, who asked for it and the date it was added.",
        "Test every change in preview mode and publish with a version note that says what changed and why."
      ),
      p(
        "Access control matters for the same reason it does for the domain and the Business Profile. The ownership questions in [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) apply to the container as well."
      ),
      h2("What belongs in the container"),
      table(
        ["Tag", "Keep it, and on what condition"],
        ["Google Analytics 4 configuration", "Yes, with IP and user-level advertising features set deliberately, and URLs checked for personal data."],
        ["Phone-tap and form-submit events", "Yes, as an event name only. No form values, no text typed by the visitor."],
        ["Google Ads conversion", "Only if you run ads. Fire on the thank-you page, which carries no personal data."],
        ["Advertising audience pixels", "Be cautious. Do not run on pages that reveal a condition, a booking or a login."],
        ["Chat or session-recording tags", "Usually no, because they can capture what visitors type."],
      ),
      h2("Keep patient data out of tags"),
      p(
        "Federal guidance from HHS on online tracking technologies says that tracking on pages where a visitor may be giving health information can raise privacy concerns, and that the details depend on the page and the data. A court later set aside part of that guidance, so the safest course is to talk to your own counsel and to keep tags away from sensitive pages. The practical steps are in [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website)."
      ),
      ol(
        "Exclude the patient portal, the intake forms and any page that shows a result or a booking detail from marketing tags.",
        "Check that page URLs and titles do not include names, dates of birth, conditions or appointment types.",
        "Strip query strings from the page address before they are sent, if they could hold personal details.",
        "Never send the value of a form field as a variable, and do not build triggers from text that a visitor typed.",
        "Review the data layer for anything that looks like a name, email or phone number."
      ),
      h3("Use the thank-you page"),
      p(
        "A page that appears after a form is sent can be the single place where the conversion tag fires, with nothing about the visitor in it. This keeps the count of leads accurate and avoids reading the form. The pattern is described in [thank-you pages after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it)."
      ),
      h2("A quarterly review"),
      p(
        "Once a quarter, open the container and go through each tag. Ask what it does, who uses the report, and what would happen if it were removed. Delete anything that fails the test. Then load the site with the browser's network panel open on a form page and a booking page, and look at which outside domains are contacted. If the list differs from your sheet, find out why before the next change."
      ),
      p(
        "Finish by checking that the container still matches the privacy page. If the site says it uses analytics but not advertising pixels, the container should say the same."
      ),
    ],
    faqs: [
      {
        q: "Is Google Tag Manager HIPAA compliant?",
        a: "Tag Manager itself is a tool, and compliance depends on what you put in it and where it runs. A container with only anonymous measurement on public pages is a lower risk than one with advertising pixels on login pages. Ask your counsel about your specific setup.",
      },
      {
        q: "Should we run tags on the patient portal?",
        a: "Generally no. A portal page can reveal that someone is a patient and may show health information in its content or address. Keep marketing and advertising tags off it, and ask the portal vendor what tracking it runs itself.",
      },
      {
        q: "Who should have access to the container?",
        a: "One owner on the practice's own Google account, and limited roles for anyone else. Remove access when a vendor or employee leaves. Many practices find an agency's container running years after the agency left, with nobody able to log in.",
      },
      {
        q: "Can we track form submissions without reading the form?",
        a: "Yes. Fire an event when the thank-you page loads, or when the form submits successfully, and send only the event name. That records that a form was sent without reading anything typed in it, which is all the lead count needs.",
      },
      {
        q: "How often should we audit the container?",
        a: "Quarterly is a sensible rhythm, and after any new campaign, website redesign or vendor change. Keep the list of tags and the version notes up to date so a review takes minutes, not an afternoon of guessing.",
      },
    ],
    citations: [GBP_X_GTMCREATE, HHS_TRACKING, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Setting Up Google Analytics 4", description: "The reporting side of the same setup." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Counting calls from the site." },
      { href: "/guides/conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website", label: "Booking Widget Conversion Tracking", description: "Tracking across an outside booking tool." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1470
  {
    slug: "establishing-care-visit-explained-page-for-a-primary-care-practice",
    keyword: "establishing care visit explained page for a primary care practice",
    category: "How-to",
    title: "Establishing Care Visit Page For Primary Care",
    metaTitle: "Establishing Care Visit Page For Primary Care",
    metaDescription:
      "How a primary care practice can explain the establishing care visit: what happens, how long it takes and what to bring. Call (561) 291-2681.",
    answer:
      "An establishing care visit is a first appointment where a new patient meets a primary care clinician, shares their history and medicines, and sets up ongoing care. Your page should say it is not for urgent problems, how long it takes, what to bring, and how to book.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("A phrase patients rarely use"),
      p(
        "Front desks say establishing care all day. Patients almost never do. They search for a new doctor, a primary care appointment or a doctor accepting patients. When they reach the booking step and see Establish Care as a choice, many are unsure whether it is the right one, and some book a sick visit instead."
      ),
      p(
        "A short page translates the term. It tells a new patient what this first visit is for, what it is not for, and how to get one scheduled, so the right slot is chosen the first time."
      ),
      h2("What the page should explain"),
      table(
        ["Question", "A plain answer"],
        ["What is it?", "A first visit to meet your clinician, go over your history and medicines, and agree how future care will work."],
        ["Is it for a problem today?", "Not usually. If you are sick now, ask about a sick visit, and say which one the office offers the same day."],
        ["How long does it take?", "State the booked length in minutes, and say the check-in time before it."],
        ["What should I bring?", "Photo ID, insurance card, a list of medicines and the contact details of your previous doctor."],
        ["Will I be examined?", "Say that the clinician decides what is needed, and that the visit may be mostly a conversation."],
      ),
      h2("Write the page in the patient's order"),
      p(
        "Start with the booking route, because someone who reached this page has probably decided. Put a button and the phone number first, then the explanation. Then answer the questions people ask in the order they ask them: what, how long, what to bring, what happens afterward."
      ),
      ul(
        "Say whether the visit can be done by video or must be in the office.",
        "Say if records from the previous doctor are needed before the visit, and how to send them. The steps are covered in [transferring care from another doctor](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice).",
        "Name what the clinician will not do at this visit, such as complete forms or refill controlled medicines, if that is your policy.",
        "Give the link to your new patient forms, using the privacy habits in [publishing new patient forms online without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data)."
      ),
      h2("Avoid clinical promises"),
      p(
        "The page can describe the structure of the visit without saying what the clinician will find or recommend. Avoid statements like we will make a plan to improve your health, which promise an outcome. Write we will talk through your history, your current medicines and the care you want to arrange. That is a description, not a guarantee."
      ),
      h3("Insurance and billing"),
      p(
        "Some plans bill a first visit differently from a follow-up, and some do not cover a visit that is only to meet a clinician. Add one honest sentence saying that coverage depends on the plan, and that the front desk will check your benefits if you call before the visit. Link to your insurance page rather than repeating the list."
      ),
      h2("How it fits with other first-visit pages"),
      p(
        "A practice may offer a meet-and-greet, a new patient visit and an annual wellness visit. They are different, and a patient should not have to guess. Put a short comparison on the page and link to each. If you offer a brief chat before becoming a patient, see [the meet-and-greet visit page](/guides/meet-and-greet-visit-before-becoming-a-patient-page-for-a-primary-care-practice). If the new patient is on Medicare, the [Welcome to Medicare visit](/guides/welcome-to-medicare-visit-page-for-a-primary-care-practice-without-clinical-claims) has its own rules."
      ),
      p(
        "Finally, make the phone script match. When someone calls and says they want a new doctor, the front desk should offer the same visit the page describes, with the same length and the same list of what to bring. Consistency between the page and the phone is what makes a new patient feel the office is organized."
      ),
    ],
    faqs: [
      {
        q: "Is an establishing care visit the same as a physical?",
        a: "Not necessarily. It is a first visit to set up care, and may include an exam if the clinician thinks it is needed. A physical or annual visit has its own purpose and billing. Explain the difference on the page so patients choose the right appointment.",
      },
      {
        q: "Can a patient with a current problem use this visit?",
        a: "It depends on the office. Some clinicians will address one concern, while others save the whole visit for history and planning. State your policy plainly, and tell patients with an urgent problem how to get a sick visit or where else to go.",
      },
      {
        q: "How far ahead should a patient book?",
        a: "Say what is true today, for example the next available is usually within a few weeks, and update it when it changes. Do not promise a window the schedule cannot keep. If the wait is long, link to your waitlist or cancellation list.",
      },
      {
        q: "Do patients need their old records first?",
        a: "Many offices ask for them, but a visit can often go ahead without them. Tell patients how to request them and how long the process takes, and say what happens if records have not arrived by the visit date.",
      },
      {
        q: "Should the page list the questions the clinician will ask?",
        a: "A short list of topics is fine, such as medicines, past care and family history, so patients can prepare. Do not publish a clinical questionnaire on the page, and keep any forms behind your secure portal or form system.",
      },
    ],
    citations: [HEALTHCARE_PCP, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What To Bring To A First Appointment", description: "The checklist patients keep." },
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "New Patient Intake Phone Script", description: "Matching the phone answer to the page." },
      { href: "/guides/not-accepting-new-patients-and-waitlist-page-for-a-primary-care-practice", label: "Not Accepting New Patients Page", description: "When the schedule is full." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1471
  {
    slug: "near-me-searches-and-how-a-primary-care-practice-shows-up-for-them",
    keyword: "near me searches and how a primary care practice shows up for them",
    category: "Playbook",
    title: "Near Me Searches For A Primary Care Practice",
    metaTitle: "Near Me Searches For A Primary Care Practice",
    metaDescription:
      "How doctor near me searches work and what a primary care practice controls: profile accuracy, categories, reviews and its site. Call (561) 291-2681.",
    answer:
      "A near me search is decided mostly by distance, relevance and prominence. A primary care practice cannot change where the searcher stands, but it controls relevance and prominence: an accurate Business Profile, the right category, consistent address details, honest reviews and a website that matches what the profile says.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 6,
    sections: [
      h2("What near me means to the searcher"),
      p(
        "Someone who types doctor near me is not browsing. They are standing somewhere, often holding a phone, and want a practice they can reach. Google answers by showing a map and a short list of nearby practices, then a list of websites underneath."
      ),
      p(
        "Because the result depends on where the person is, two people one mile apart can see different lists. That is why a practice cannot sensibly promise a position, and why a single rank check on your own phone tells you little. What a practice can do is make itself an easy answer."
      ),
      h2("The three factors Google names"),
      table(
        ["Factor", "What it means and what you control"],
        ["Distance", "How far the practice is from the searcher, or from the area they name. You control nothing here except keeping the address and service area correct."],
        ["Relevance", "How well the profile and website match what was searched. You control categories, services, description and page content."],
        ["Prominence", "How well known the practice is, online and offline. You control reviews, consistent listings, links and a useful website."],
      ),
      p(
        "Google explains these in its guidance on improving local ranking. It also says that businesses cannot pay to rank higher in the local results, and that the combination of the three factors decides the order. Treat anyone who sells guaranteed map positions with caution."
      ),
      h2("What to fix first"),
      ol(
        "Check that the practice is verified, with the exact name, address and phone number that appear on the website.",
        "Choose a primary category that matches what the practice is, such as family practice or internist, and add accurate secondary ones. See [choosing Google Business Profile categories](/guides/choosing-google-business-profile-categories-for-a-medical-practice).",
        "Keep the hours correct, including holidays, and the accepting new patients status. The upkeep is covered in [keeping accepting new patients accurate across Google, your website and directories](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories).",
        "Fill in the services list with the visit types you actually offer, using the names patients use.",
        "Make sure the website link on the profile goes to the page that fits the visit."
      ),
      h2("Make the website agree with the profile"),
      p(
        "Relevance comes from consistency. If the profile says family practice and the website calls the practice something else, or lists a different suite number, the signals conflict. Use the same name, address and phone number in the same format everywhere. The causes of drift, and how to fix them, are in [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it)."
      ),
      p(
        "Then write for the way people actually phrase the need. A page titled Primary Care that opens with the neighborhood, the visit types and a phone number serves a near me searcher better than a page built around a slogan."
      ),
      h3("Do not stuff the phrase"),
      p(
        "Putting near me on a page again and again does not help and reads badly. Google works out the location from the searcher and from your address. Name the town or neighborhood once where it is true, and spend the rest of the words on what a patient needs to know."
      ),
      h2("Measuring honestly"),
      p(
        "The Business Profile performance report shows calls, direction requests and website clicks, and the search query list shows the broad terms people used. Look at the monthly trend, not a single day, using the method in [reading Google Business Profile performance reports](/guides/how-to-read-google-business-profile-performance-reports-each-month). A practice that sees steady calls and direction requests is getting found, even if a rank check from the office desk looks unremarkable."
      ),
      p(
        "Last, ask whether the person who finds you can book. A strong listing that leads to a slow phone line or a form that is never answered wastes the work. Match the effort in search with the effort at the front desk."
      ),
    ],
    faqs: [
      {
        q: "Can a primary care practice rank number one for doctor near me?",
        a: "Not as a promise. The result changes with the searcher's location, so there is no single position. A practice can improve its odds by being accurate, well categorized, well reviewed and easy to reach, and by measuring calls rather than rank.",
      },
      {
        q: "Does the word near me need to appear on our website?",
        a: "No. Google reads the searcher's location itself. Name your town or neighborhood naturally where it is true, and write about the care you offer. Repeating the phrase makes the page worse for people and does not help it appear in these searches.",
      },
      {
        q: "Do reviews affect near me results?",
        a: "Google says that review count and score are part of prominence, and that more positive reviews can improve local ranking. Ask every patient in the same way, never choose who to ask, and respond to the reviews you receive.",
      },
      {
        q: "Should we pay for ads to appear for these searches?",
        a: "Ads are a separate choice, with their own cost and rules. They can place the practice above the map results, but they do not change organic map ranking. See the guide on local pack versus organic results versus Google Ads before you decide.",
      },
      {
        q: "How do we know if near me searches are reaching us?",
        a: "Read the Business Profile report for calls, directions and website clicks, and compare month to month. Add a call tracking number or tracked links where appropriate, and ask new patients how they found the office at the first call.",
      },
    ],
    citations: [GBP_LOCAL_RANK, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Same-Day And Walk-In Searches", description: "Being found when the need is today." },
      { href: "/guides/local-pack-vs-organic-results-vs-google-ads-for-a-medical-practice", label: "Local Pack Vs Organic Vs Ads", description: "Where each kind of result appears." },
      { href: "/guides/how-to-get-more-patients-from-google-business-profile", label: "More Patients From Google Business Profile", description: "Turning the listing into calls." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1472
  {
    slug: "external-link-and-new-tab-wording-on-a-medical-practice-website",
    keyword: "external link and new tab wording on a medical practice website",
    category: "How-to",
    title: "External Link And New Tab Wording For Practices",
    metaTitle: "External Link And New Tab Wording For Practices",
    metaDescription:
      "When a medical practice website should open links in a new tab, how to warn visitors and how to word outside links so no one is lost. Call (561) 291-2681.",
    answer:
      "Open outside links in the same tab by default. Use a new tab only for tasks where leaving would lose work, such as a form in progress, and tell visitors in the link text. Add rel noopener, write link text that says where it goes, and never hide a phone link behind vague words.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("A small choice that confuses real people"),
      p(
        "A link that opens in a new tab seems harmless until the visitor wants to go back. The back button on their phone does nothing, because the new tab has no history. Older patients and anyone using a screen reader are the most likely to be stranded, and some never realize a second tab is open."
      ),
      p(
        "Opening in the same tab has the opposite problem for forms: a visitor halfway through an intake page clicks a link to the privacy policy and loses their answers. The right choice depends on the task, and the wording of the link should tell people what will happen."
      ),
      h2("When to use a new tab"),
      table(
        ["Situation", "Same tab or new tab?"],
        ["A link inside a long form or booking flow", "New tab, with a warning in the link text, so the entered answers stay."],
        ["A link to a government or health source in an article", "Same tab. Readers use the back button."],
        ["A link to the patient portal", "Same tab, unless the portal sits on another site and the visitor will come back."],
        ["A document such as a PDF form", "New tab, labelled with the file type."],
        ["A phone number or email link", "Neither. Use tel: and mailto: links, which open the dialer or mail app."],
      ),
      p(
        "The W3C accessibility guidance on this topic suggests that you warn users before a link opens a new window, because the change in context can be disorienting. The warning does not have to be long."
      ),
      h2("Wording that works"),
      ul(
        "Put the warning inside the link text: Download the new patient form (PDF, opens in a new tab).",
        "Say where the link goes in plain words: Read the CDC guidance on handwashing, not Click here.",
        "Keep the label the same for the whole site, so a visitor learns what the little note means.",
        "Do not use an icon alone to signal a new tab, because screen readers and some visitors will miss it."
      ),
      p(
        "Link text is also read aloud by assistive tools, often as a list of links with no surrounding text. A list of ten items saying Click here or Learn more is useless. The same habit helps search engines, as explained in [internal linking for a medical practice website](/guides/internal-linking-for-a-medical-practice-website)."
      ),
      h2("The technical part"),
      p(
        "When a link opens a new tab, the code uses a target attribute. Add rel noopener to those links, so the new page cannot reach back and control the page that opened it. Modern browsers apply this by default, but it is still good practice and costs nothing. Ask your developer to add it to every outside link at once, not one by one."
      ),
      h3("What about nofollow?"),
      p(
        "A nofollow tag is a separate matter. Use it for links you do not vouch for, such as paid links, and leave it off honest citations to government and professional sources. Linking out to a trusted source does not hurt a page, and readers appreciate it."
      ),
      h2("A short review for your site"),
      ol(
        "Open the site on a phone and tap every outside link in the header, footer and top five pages.",
        "Note which ones open a new tab and whether the link text says so.",
        "Check that every document link names the file type.",
        "Confirm that phone and email links are real tel and mailto links, as described in [click-to-call buttons and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website).",
        "Run the page through an accessibility check, using the guidance in [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website)."
      ),
      p(
        "Once the rules are decided, write them on a single page for whoever edits the site, so each new post follows the same pattern."
      ),
    ],
    faqs: [
      {
        q: "Should all outside links open in a new tab?",
        a: "No. Most should open in the same tab, because the back button is the way people return. Use a new tab for documents and for links inside a task where leaving would lose entered information, and say so in the link text.",
      },
      {
        q: "Does opening a link in a new tab help our rankings?",
        a: "No. Search engines do not use it as a ranking signal. Choose based on what is easier for the visitor. A visitor who stays on your page longer is a side effect of good design, not a reason to force a new tab.",
      },
      {
        q: "What does rel noopener do?",
        a: "It stops the page that opens in the new tab from controlling the original page through the browser. Current browsers add this protection by default for new-tab links, but adding it in your code makes the intent clear and covers older browsers.",
      },
      {
        q: "How should we word a link to a PDF?",
        a: "Name the document and the file type, and say if it opens in a new tab, for example New patient form (PDF, opens in a new tab). Keep the file small and provide the same information on a page for anyone who cannot open the PDF.",
      },
      {
        q: "Is it fine to link out to other websites?",
        a: "Yes, when the source is trustworthy and useful, such as a government health site or a licensing board. Linking to good sources supports your content. Avoid linking to competitors or to pages you have not read.",
      },
    ],
    citations: [WCAG_G201, MDN_NOOPENER, WCAG],
    links: [
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement", description: "Telling visitors how to report a barrier." },
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation Menu And Footer", description: "Links that every page carries." },
      { href: "/guides/site-search-and-404-page-for-a-medical-practice-website", label: "Site Search And 404 Page", description: "Helping a visitor who is lost." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: not sure you need therapy
  {
    slug: "not-sure-you-need-therapy-first-step-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "not sure you need therapy first step page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Not Sure You Need Therapy? A First-Step Page",
    metaTitle: "Not Sure You Need Therapy? A First-Step Page",
    metaDescription:
      "How a counseling practice can write a gentle first-step page for people unsure about therapy, with no diagnosing or promises. Call (561) 291-2681.",
    answer:
      "A first-step page for people who are unsure about therapy should say that a first conversation is not a commitment, explain what happens in it, avoid diagnosing or listing symptoms, give a low-pressure way to ask a question, and show 988 for anyone in crisis. It invites; it does not persuade.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("The visitor who is not ready to book"),
      p(
        "Most people who search for counseling are not ready to choose a therapist. They are wondering whether what they feel is enough to justify calling, whether it will be awkward, and whether they will be told something is wrong with them. A page that answers those worries can be the reason they make the call a week later."
      ),
      p(
        "It is also an honest page. You are not trying to turn every reader into a client. You are showing that the practice is a calm, clear place to ask a question, which is what a person who is unsure needs most."
      ),
      h2("Say what a first conversation is"),
      p(
        "Describe the first step as it really works at your practice. It may be a short call, a form, or a first session with time to decide whether the fit is right. State who they will speak with, how long it takes, and that they can stop after it. If the first call is free, say so. If it is not, say the fee."
      ),
      table(
        ["Worry", "What the page can honestly say"],
        ["I do not know if it is serious enough", "Many people come to talk through everyday strain. You do not need a label or a crisis to ask for a first conversation."],
        ["I do not know what to say", "You do not have to prepare. Your clinician will ask where you would like to start."],
        ["What if it is not for me", "A first session is also a chance to see whether the fit is right. You can say no."],
        ["Will anyone find out", "Describe confidentiality and its limits in plain terms, and link to the full page."],
      ),
      h2("What to leave out"),
      p(
        "Do not include a list of signs that you might need therapy. Lists like that read as a screening tool, can scare readers or reassure them wrongly, and move the page into clinical territory. A visitor who recognises themselves in a list may also feel diagnosed by a website."
      ),
      ul(
        "No checklists of symptoms and no quizzes.",
        "No statements about who benefits or how much, and no promised results.",
        "No pressure words such as do not wait or you deserve better.",
        "No images of people in distress. Use calm photos of the real office or none."
      ),
      p(
        "The same discipline applies to the way you describe your methods. The advice in [writing an our approach page without outcome claims](/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims) shows how to describe what you do without promising what it will do."
      ),
      h2("Give a low-pressure way to ask"),
      p(
        "Offer a contact form with three fields and a short promise about when someone will reply. Offer the phone number beside it for those who would rather speak. Both routes should say that visitors do not need to share anything personal in the message. The form fields that work are laid out in [a first-time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time)."
      ),
      h3("Safety first, in plain view"),
      p(
        "Because some visitors will be in a worse place than they admit, put the crisis line in the same view as the contact options, not in the footer. If you or someone you know is in danger, call or text 988, or call 911. The wording in [an emergency and crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) can be copied across."
      ),
      h2("Where to link it from"),
      p(
        "Link the page from the homepage, from the services overview and from the contact page. Place one link near the form, as a gentle alternative for visitors who are not sure. The National Institute of Mental Health keeps a general help-finding page that you can cite for readers who want public information as well."
      ),
    ],
    faqs: [
      {
        q: "Should the page explain the signs that someone needs therapy?",
        a: "No. Lists of signs work like a screening tool and risk alarming or falsely reassuring a reader. Explain what a first conversation is and let a clinician talk about needs in person. Link to a public source if a reader wants general information.",
      },
      {
        q: "Is a free first call a good idea?",
        a: "It can lower the barrier, but only if it is staffed and honest about what it is. State the length and who takes it, and say it is not a counseling session. If you cannot offer one, say what the first appointment costs.",
      },
      {
        q: "How do we avoid sounding pushy?",
        a: "Write in the reader's voice, not a salesperson's. Use plain statements such as you can ask a question without committing to anything. Avoid urgency, scarcity and guilt, none of which belong on a counseling page.",
      },
      {
        q: "What if a visitor describes a crisis in the form?",
        a: "Make sure the form confirmation and the page both show 988 and 911, and decide who reads messages and how fast. A form that promises a reply in one business day is not a crisis service, and the page should say so.",
      },
      {
        q: "Does this page need a clinician's review?",
        a: "It is wise. A licensed clinician at the practice should read it for tone and for anything that sounds like advice or a promise. Do not add a reviewed-by line unless that person has actually reviewed it and agreed to be named.",
      },
    ],
    citations: [NIMH_HELP, CDC_988, ACA_ETHICS],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page For A Therapy Practice", description: "What happens after the first call." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "Writing the page for a free first call." },
      { href: "/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice", label: "Confidentiality And Its Limits", description: "The privacy page to link to." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: changing therapists
  {
    slug: "changing-therapists-request-page-for-a-counseling-practice",
    keyword: "changing therapists request page for a counseling practice",
    category: "How-to",
    title: "Changing Therapists Request Page For Counseling",
    metaTitle: "Changing Therapists Request Page For Counseling",
    metaDescription:
      "How a group counseling practice can publish a simple page for clients who want a different clinician, with no blame or forms. Call (561) 291-2681.",
    answer:
      "A changing-therapists page tells clients that asking for a different clinician is normal, shows how to ask, says whether a reason is required, and explains what happens to scheduling and records. It should make the request easy, never imply fault, and never ask a client to justify the change.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("A request that clients often swallow"),
      p(
        "Many clients who feel the fit is wrong never say it. They fear offending the therapist, being a bother, or being told the problem is theirs. Some quietly stop booking, which looks like a drop-out from the practice's side and a failed attempt from theirs."
      ),
      p(
        "A group practice has an advantage here, because another clinician is down the hall. A short page that normalizes the request can keep a client in care with the practice, and it signals that the office puts the person ahead of the schedule."
      ),
      h2("What the page should cover"),
      table(
        ["Topic", "What to write"],
        ["That it is allowed", "One sentence: you can ask to see a different clinician at any time."],
        ["How to ask", "Name the route: reply to a reminder, call the front desk, or use a short form. Say you may ask the front desk, not the current therapist."],
        ["Reasons", "Say a reason is optional. Offer, but do not require, a few words about what you would like in a new clinician."],
        ["What happens next", "Say who will reply, how soon, and whether the first meeting with the new clinician is billed as usual."],
        ["Records and notes", "Say that the practice will move records only with the client's written permission, and link to the records page."],
      ),
      h2("Keep the tone free of blame"),
      p(
        "Words matter. Fit with a clinician is about style, schedule, background and preference, not about anyone failing. Write that clients change clinicians for many reasons, and that the practice will help without asking for details. Do not use the word complaint on this page, because a complaint has a different process and a different page, such as the [patient feedback and complaint contact page](/guides/patient-feedback-and-complaint-contact-page-for-a-medical-practice-without-health-details)."
      ),
      ul(
        "Do not suggest that the client's goals will take longer to meet.",
        "Do not tell the client that the first clinician will be informed unless that is the rule, and say so if it is.",
        "Do not require a final session with the current therapist, though you may offer one.",
        "Do not describe clinician qualities in language that implies one is better than another."
      ),
      h2("Match the clinician, not just the slot"),
      p(
        "A client who asks to switch is giving you useful information about fit. The front desk should ask what would help, such as a different gender, an evening schedule, a particular focus or a different style, and offer one or two matches, not a list of every clinician. The structure behind that conversation is in [clinician matching for a group counseling practice](/guides/clinician-matching-page-for-a-group-counseling-practice-how-clients-choose-a-therapist)."
      ),
      h3("If the practice has no other fit"),
      p(
        "Say so honestly on the page: if we do not have a clinician who suits what you are looking for, we will say so and help you find another option. Connecting a client to the right care is the ethical choice, and it is consistent with the counseling profession's codes, such as the American Counseling Association's. The same spirit appears in [the client discharge and termination policy](/guides/client-discharge-and-termination-policy-page-for-a-counseling-practice-without-clinical-claims)."
      ),
      h2("Tell the team the same thing"),
      p(
        "A page is only as good as the answer on the phone. Give staff a short script: thank the client, ask what would help, offer a match, confirm the next step, and do not discuss the reason in front of anyone else. When a clinician hears a switch request second-hand, they should be told by the lead clinician and not by the front desk, with no detail beyond the fact of the request."
      ),
    ],
    faqs: [
      {
        q: "Will the first therapist know why a client switched?",
        a: "Only if the practice's rule says so and the client agrees. Tell clients plainly what is shared. A good default is that the first clinician is told the client has moved to another colleague, with no reasons passed on unless the client wishes it.",
      },
      {
        q: "Do clients have to attend a final session?",
        a: "No. You may offer one to close things well, but it should never be required. Some clients will not want it, and making it a condition turns a simple request into a hurdle that could end their care altogether.",
      },
      {
        q: "Does a switch affect fees or insurance?",
        a: "It might. A new clinician may be in a different network or charge a different rate. Say on the page that the front desk will confirm fees and coverage before the first meeting, and link to the fees and insurance pages for details.",
      },
      {
        q: "How soon should the practice reply?",
        a: "State a target you can meet, such as one business day. A client who has summoned the nerve to ask should not wait a week. Track these requests the same way you track new inquiries so none slip through.",
      },
      {
        q: "Is this page needed for a solo practice?",
        a: "Not in the same form. A solo clinician can offer a short note on referring a client to a colleague when the fit is wrong. The page for a group practice is about moving within the practice, which a solo therapist cannot do.",
      },
    ],
    citations: [ACA_ETHICS, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice", label: "Client Transfer Notice", description: "When the clinician is the one leaving." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Helping clients choose a clinician." },
      { href: "/guides/letters-and-documentation-requests-page-for-a-counseling-practice-without-legal-advice", label: "Records And Documentation Requests", description: "How clients ask for their records." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: travel health
  {
    slug: "travel-health-consultation-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "travel health consultation page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Travel Health Consultation Page For Primary Care",
    metaTitle: "Travel Health Consultation Page For Primary Care",
    metaDescription:
      "How a primary care practice can publish a travel health visit page that says what it offers, what it refers out and when to book. Call (561) 291-2681.",
    answer:
      "A travel health page tells patients whether the practice offers pre-trip visits, whether it gives travel vaccines or refers them, how far ahead to book, what to bring and who to call. It points to the CDC for destination advice and makes no promise that a visit prevents illness.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("A question with a deadline"),
      p(
        "Travel searches have a date attached. A patient who is flying in six weeks and asks whether the office does pre-travel visits will call the first place that gives a clear answer. If your site says nothing, they will drive to a pharmacy clinic or a dedicated travel clinic and may never come back."
      ),
      p(
        "A page that states what the practice does and does not do helps both groups: patients who can be served on site, and those who need to be pointed elsewhere without wasting a week."
      ),
      h2("Be exact about what you offer"),
      p(
        "Offices differ widely. Some give routine vaccines but not the full range. Some write prescriptions for common travel medicines. Many refer anything unusual to a travel clinic. List only what the practice does today, and say who performs it, and be just as clear about what you send elsewhere."
      ),
      table(
        ["Service", "How to describe it"],
        ["Pre-travel visit", "Say it exists, how long it is, and who sees the patient."],
        ["Vaccines", "Name the ones you stock, if any, or say that vaccines are given elsewhere and you will direct patients."],
        ["Prescriptions", "Say that the clinician decides at the visit. Do not name specific medicines or promise any."],
        ["Paperwork", "Say whether you complete forms for entry or fitness, and any fee."],
        ["Referral", "Say where patients go for services you do not offer, and link to your referral page."],
      ),
      h2("Timing is the useful part"),
      p(
        "The CDC advises travelers to see a health care provider ideally four to six weeks before leaving, because some vaccines need time to take effect. State that on your page and link to the CDC Travelers' Health site, where patients can look up their destination. This is public information you are pointing to, not advice you are giving, and it keeps the page on the safe side of clinical claims."
      ),
      ul(
        "Give the lead time you need to book, which may be longer than the CDC window.",
        "Say whether you take last-minute trips, and what happens if the trip is under two weeks away.",
        "Ask patients to bring the destination list, dates and any past vaccination records.",
        "Tell patients who are pregnant, immunocompromised or travelling with children to mention it when booking, so the right clinician is scheduled."
      ),
      h2("Write the page without clinical promises"),
      p(
        "Do not say the visit will keep patients safe or healthy. Say it is a chance to review your plans with a clinician. Avoid describing diseases at your destination, which is the CDC's job and changes often. The guidance in [writing a medical service page that ranks](/guides/how-to-write-a-medical-service-page-that-ranks) and in [seasonal service pages](/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals) shows how to give a service a page without giving advice."
      ),
      h3("Insurance and cost"),
      p(
        "Travel vaccines and visits are often not covered, or covered only in part. One honest sentence helps: coverage varies by plan, and the front desk will explain costs before you book. If you publish self-pay prices, keep them current, using the method in [publishing self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website)."
      ),
      h2("Make it findable"),
      p(
        "Add the service to your Business Profile services list, link it from the vaccines page and the services overview, and list it among your visit types. A short, well-placed page on the topic is enough. You do not need a page for every destination, and a page per country would be thin copy that adds nothing."
      ),
    ],
    faqs: [
      {
        q: "How far ahead should patients book a travel visit?",
        a: "The CDC suggests seeing a provider four to six weeks before travel, ideally. Say that on the page and tell patients your own booking lead time. If a trip is closer, invite them to call, since some options may still be available.",
      },
      {
        q: "Do we have to give travel vaccines to publish this page?",
        a: "No. A page can explain that the practice holds pre-travel visits and refers vaccines to another provider. What matters is that the page is accurate, so patients are not sent to an office that cannot give what the page seems to promise.",
      },
      {
        q: "Should the page list diseases at popular destinations?",
        a: "No. Those details change and belong with the CDC, whose destination pages are updated by specialists. Link to them. Repeating them on your page risks stale information and drifts into medical advice.",
      },
      {
        q: "Can we mention specific medicines?",
        a: "It is better not to. Which medicines are appropriate depends on the traveler and the clinician's judgment. Say that the clinician reviews options at the visit, and leave the details out of a public page.",
      },
      {
        q: "Is a page per destination worth building?",
        a: "Usually not. Pages that differ only by country name are thin and repeat each other. One strong page with a link to the CDC destination tool serves patients better and avoids the duplicate-content problems that stall indexing.",
      },
    ],
    citations: [CDC_TRAVEL, HEALTHCARE_PCP, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/immunization-and-vaccine-availability-page-for-a-primary-care-practice-without-clinical-claims", label: "Immunization And Vaccine Availability Page", description: "Listing the vaccines you stock." },
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "Where travel clinic referrals point." },
      { href: "/guides/google-business-profile-services-list-optimization", label: "Business Profile Services List", description: "Adding the service to your listing." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: stock photos
  {
    slug: "stock-photos-versus-real-photos-on-a-counseling-practice-website",
    keyword: "stock photos versus real photos on a counseling practice website",
    category: "Comparison",
    title: "Stock Photos Or Real Photos For A Counseling Site",
    metaTitle: "Stock Photos Or Real Photos For A Counseling Site",
    metaDescription:
      "When a counseling practice site should use stock photos, real office photos or none, and how to avoid images that mislead. Call (561) 291-2681.",
    answer:
      "Use real photos of the clinicians and office wherever possible, because visitors want to know who they will meet. Use licensed stock only for calm, non-human backgrounds, never as pictures that pass for clients, staff or testimonials. Add accurate alt text, and skip images of people in distress.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("What a photo is doing on a counseling page"),
      p(
        "Choosing to see a therapist is a trust decision made partly by looking. Visitors search for a face, a room and a feeling. They notice quickly whether a photo is of the person they would meet or a model who has never set foot in the building."
      ),
      p(
        "A stock photo is not wrong in itself. The problem arises when it makes a promise the practice did not make, such as a smiling couple that seems to be your clients, or a staged therapist who is not on your team."
      ),
      h2("A simple decision table"),
      table(
        ["Image", "Real, stock, or none?"],
        ["Clinician headshot", "Real. A stock face on a bio page is a misrepresentation."],
        ["Office and waiting room", "Real, if the space is calm and uncluttered. Otherwise none."],
        ["Hero image on the homepage", "Real or neutral stock such as light, plants or a window. Avoid people."],
        ["A person looking sad or alone", "None. It can alarm visitors and implies a diagnosis."],
        ["Couples or families together", "Avoid unless real and consented. Stock couples read as fake."],
        ["Icons and illustrations", "Fine. They claim nothing about real people."],
      ),
      h2("Why real photos win"),
      p(
        "A real photo of the clinician helps a nervous visitor picture the first session. Studies of other industries will not tell you much about therapy, so judge by the practical point: the face a visitor sees online should be the face in the room. If you need guidance on taking them, see [provider headshots and team photo guidelines](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website)."
      ),
      p(
        "Real office photos also reduce first-visit anxiety, which is the idea behind [an office tour and virtual tour page for a counseling practice](/guides/office-tour-and-virtual-tour-page-for-a-counseling-practice). Show the entrance, the waiting area and a session room with the door open. Do not show anything that might identify other clients, such as a schedule or a sign-in sheet."
      ),
      h2("If you use stock, use it honestly"),
      ul(
        "Check the license covers commercial and web use, and keep the receipt or license page.",
        "Avoid photos where models appear to be patients or clients, and never caption them as such.",
        "Do not pair a stock face with a quotation or a name, because that creates a fake testimonial.",
        "Prefer abstract or nature images that do not depict a person at all.",
        "Replace stock with real images as soon as you have them."
      ),
      p(
        "Image choices also sit under the practice's testimonial rules. Showing trust without client quotes is explained in [showing trust on a counseling practice website without client testimonials](/guides/showing-trust-on-a-counseling-practice-website-without-client-testimonials)."
      ),
      h3("Alt text and speed"),
      p(
        "Every meaningful image needs an alt text that describes what is shown in a short phrase, such as the waiting room with two armchairs and a window. Decorative images can have empty alt text. Compress files so pages stay fast on a phone, and use the habits in [image SEO and alt text for a medical practice website](/guides/image-seo-and-alt-text-for-a-medical-practice-website). Google's guidance on images also notes that descriptive file names and nearby text help it understand a picture."
      ),
      h2("When in doubt, use fewer images"),
      p(
        "A counseling site with clear writing, one honest headshot per clinician and a few office photos will usually serve visitors better than a page full of staged imagery. Whitespace is calming, and a page that loads quickly on a phone is more welcoming than any picture."
      ),
    ],
    faqs: [
      {
        q: "Is it misleading to use stock photos at all?",
        a: "Not if they are used for backgrounds, textures and scenes without people who could be taken for staff or clients. It becomes misleading when a model appears to be a clinician or a client. When in doubt, use an illustration or leave the space plain.",
      },
      {
        q: "Can we use photos of real clients?",
        a: "Only with written consent that is specific about the use, and even then it is rarely wise. A photo can identify a person as a client of a counseling practice, which is sensitive. Most practices simply avoid it.",
      },
      {
        q: "What makes a good headshot?",
        a: "Natural light, a plain background, a relaxed expression and a recent date. It should look like the person who will open the door. Update it every few years, and make sure it matches the photo on the Business Profile.",
      },
      {
        q: "Do images help the page rank?",
        a: "They help when they are real, relevant and described well, and they can slow the page when oversized. Google's guidance is to use good alt text, descriptive file names and compressed files. Images do not replace useful writing.",
      },
      {
        q: "Should alt text mention the practice name?",
        a: "Only when it is natural, for example the front entrance of the practice. Alt text is for people who cannot see the image, so describe what is there. Stuffing it with keywords is poor practice and can hurt accessibility.",
      },
    ],
    citations: [GOOGLE_IMAGES, WCAG, ACA_ETHICS],
    links: [
      { href: "/guides/google-business-profile-photos-checklist", label: "Business Profile Photos Checklist", description: "Which photos go on your listing." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Where the headshot lives." },
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language For Patient Content", description: "Keeping the words as clear as the pictures." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: trauma-informed wording
  {
    slug: "trauma-informed-website-wording-for-a-counseling-practice-without-clinical-claims",
    keyword: "trauma-informed website wording for a counseling practice without clinical claims",
    category: "Checklist",
    title: "Trauma-Informed Website Wording For Counselors",
    metaTitle: "Trauma-Informed Website Wording For Counselors",
    metaDescription:
      "A checklist for writing a gentle, predictable counseling practice website without clinical claims or graphic detail for visitors. Call (561) 291-2681.",
    answer:
      "Trauma-informed website wording is calm, predictable and gives choices. Name what happens next, avoid graphic descriptions and shock words, never pressure, explain how to ask for accommodations, and show a crisis line. It describes how the practice treats people, not what it can cure.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 6,
    sections: [
      h2("Writing for someone who may be on edge"),
      p(
        "A visitor to a counseling site may have been through something painful, and may be reading in a hurry, in secret, or in a bad week. They notice tone before content. Words that feel pushy, graphic or vague can end the visit before it starts."
      ),
      p(
        "Being trauma-informed on a website is not a claim about treatment. It is a writing and design habit: say clearly what will happen, offer choices, and avoid anything that surprises or pressures the reader. SAMHSA describes trauma-informed approaches in terms of safety, trust, choice and collaboration, and those same ideas translate directly to page copy."
      ),
      h2("Principles, translated into wording"),
      table(
        ["Idea", "What it looks like on a page"],
        ["Safety", "State confidentiality and its limits plainly, and show the crisis line in an easy place."],
        ["Predictability", "Say what happens after each button: who replies, when, and what they will ask."],
        ["Choice", "Offer phone, form or email, and say the client chooses the pace and what to share."],
        ["Transparency", "Show fees, cancellation rules and the first session format before anyone books."],
        ["Respect", "Use plain, kind language, not clinical labels or urgency."],
      ),
      h2("Words and images to avoid"),
      ul(
        "Graphic or detailed descriptions of harm, even when you intend to show understanding.",
        "Lists of experiences that read as a checklist of what has happened to the visitor.",
        "Urgent phrases such as do not suffer alone or you cannot wait.",
        "Autoplay video or sound, flashing banners and pop-ups that interrupt reading.",
        "Before and after language, success stories and promises of healing."
      ),
      p(
        "A page can say that the practice works with people who have lived through hard things, without naming particular events. Keep the specificity for the first conversation, where the visitor decides how much to say. The wording on specialty pages is covered in [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims)."
      ),
      h2("Design details that matter"),
      p(
        "Calm design is part of the message. Use readable type, generous spacing and muted colors, and let visitors leave quickly. Offer a clear way to exit, such as a visible link, and avoid trapping the reader in a pop-up. For people who need accommodations, say how to ask. The accessibility basics are in [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website)."
      ),
      h3("Forms and follow-up"),
      p(
        "Keep forms short, mark optional fields as optional and explain why you ask for anything personal. After submission, show a clear message about when a person will reply. The first reply should be warm, brief and free of detail, along the lines of [an auto-reply email after a new client inquiry](/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice)."
      ),
      h2("What to claim, and what not to"),
      p(
        "Do not describe the practice as a specialist in trauma unless the clinicians have the training and licensure to say so, and state it exactly. The page on [specialty and focus areas wording](/guides/specialty-and-focus-areas-wording-for-a-counseling-practice-training-versus-expertise) separates training from expertise, and that distinction applies here. Do not claim outcomes, and do not suggest that a visitor's experience is a diagnosis."
      ),
      p(
        "Have a licensed clinician at the practice read the final copy aloud. If any sentence would feel wrong to say to a nervous stranger in the same room, rewrite it."
      ),
    ],
    faqs: [
      {
        q: "Does trauma-informed wording mean we can claim to treat trauma?",
        a: "No. It describes how the page treats readers, not what treatments the practice provides. Claim a trauma specialty only if the clinicians hold the training and license to support it, and state it precisely and without outcome claims.",
      },
      {
        q: "Should we add content warnings?",
        a: "If a page discusses difficult subjects, a short note at the top that says what it covers lets readers choose. Keep pages free of graphic detail, so warnings are rarely needed. Do not use warnings as a reason to add more distressing material.",
      },
      {
        q: "Is it all right to use the word trauma on the site?",
        a: "Yes, where it is accurate and used calmly, such as on a page describing services. Avoid it in headlines meant to provoke feeling, and avoid listing events. The tone should inform, not press on a wound.",
      },
      {
        q: "How do we offer choices on the contact page?",
        a: "Provide a phone number, a short form and an email address, and say that the visitor can pick any of them. Add that they may share as little as they like. Offer an option for people who prefer text-only communication if the practice supports it.",
      },
      {
        q: "Who should review the copy?",
        a: "A licensed clinician at the practice, ideally one with relevant training. Ask them to read it for tone, accuracy and anything that sounds like advice or a promise. Add a reviewed-by line only if they agree to be named.",
      },
    ],
    citations: [SAMHSA, CDC_988, WCAG],
    links: [
      { href: "/guides/grief-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Grief Counseling Page", description: "Gentle wording on a sensitive topic." },
      { href: "/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice", label: "Confidentiality And Its Limits", description: "Saying what is private and what is not." },
      { href: "/guides/homepage-for-a-therapy-practice-what-a-first-time-visitor-needs-to-see", label: "Homepage For A Therapy Practice", description: "What a first-time visitor needs." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new row: referral thank-you
  {
    slug: "patient-referral-thank-you-wording-for-a-primary-care-practice-without-incentives",
    keyword: "patient referral thank-you wording for a primary care practice without incentives",
    category: "How-to",
    title: "Patient Referral Thank-You Wording Without Incentives",
    metaTitle: "Patient Referral Thank-You Wording Without Incentives",
    metaDescription:
      "How a primary care practice can thank patients who recommend it without gifts or rewards that raise legal or privacy problems. Call (561) 291-2681.",
    answer:
      "A primary care practice can thank a patient who recommends it with a short, genuine note that offers nothing of value and never confirms who referred whom. Do not run reward programs for referrals without advice from a healthcare attorney, and never discuss one patient with another.",
    author: "Gio LaRoche",
    publishDate: "2026-11-03T15:00:00Z",
    dateModified: "2026-11-03",
    readMinutes: 5,
    sections: [
      h2("The best new patients come from other patients"),
      p(
        "When a patient tells a neighbor that your office is easy to deal with, that neighbor arrives already trusting you. Most practices want more of that, and some reach for refer-a-friend programs from other industries without thinking about the rules that apply to healthcare."
      ),
      p(
        "The safest and most human way is a plain thank-you, with nothing attached. This page explains how to write it and where the line sits."
      ),
      h2("Where the legal line sits"),
      p(
        "Federal law restricts offering or giving anything of value to induce referrals of patients whose care is paid by federal health programs. The HHS Office of Inspector General explains the Anti-Kickback Statute in its guidance on fraud and abuse laws. A gift card, a discount or a free service for bringing in a patient can create exactly the kind of exchange that law is about. State rules and professional board rules may add more."
      ),
      p(
        "This is not legal advice, and the answer depends on the details. If the practice wants a program of any kind, it should ask a healthcare attorney before launching, not after. The safe default is not to offer anything in return."
      ),
      h2("What a thank-you can look like"),
      table(
        ["Do", "Do not"],
        ["Send a short, warm note: thank you for trusting us and for telling others.", "Offer a gift card, a credit, a discount or a prize."],
        ["Say it in general terms to anyone who mentions a recommendation.", "Name the new patient to the person who referred them."],
        ["Make it easy to leave an honest review.", "Reward or select who gets asked for a review."],
        ["Invite friends to call and give the phone number.", "Run a contest or a referral leaderboard."],
      ),
      p(
        "Privacy matters just as much. If a patient says they sent a friend, do not confirm or deny that the friend is a patient. Respond that you are glad they recommended the office and that anyone is welcome to call. The same discipline appears in [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient)."
      ),
      h2("Sample wording"),
      ul(
        "On a card: Thank you for trusting our office. If you ever know someone looking for a primary care home, we would be glad to hear from them.",
        "In a portal message: It means a lot when patients speak well of us. There is nothing you need to do, and nothing is expected in return.",
        "On the phone: We are glad you mentioned us. They can call this number to ask about booking."
      ),
      h3("Add a page, not a program"),
      p(
        "Give new patients a simple way to say how they found you, such as a how did you hear about us question, handled as described in [how did you hear about us attributing new patients](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing). Record the answer as a source, not as a person to be thanked in a way that reveals who referred whom."
      ),
      h2("Clinician referrals are a separate matter"),
      p(
        "Thanking other clinicians for referring patients to you follows its own rules, and involves different risks. The approach in [a referring doctor thank-you and feedback loop](/guides/referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice) keeps the contact professional and free of anything of value."
      ),
      p(
        "Whatever the practice does, write down the rule and train the front desk. A staff member who offers a free coffee card to a patient who brought a neighbor has just created a problem the practice did not choose."
      ),
    ],
    faqs: [
      {
        q: "Can we give a small gift to patients who refer someone?",
        a: "Be careful. Even small items of value can raise questions when federal health programs are involved. Ask a healthcare attorney before offering anything, and do not rely on advice from marketing vendors. The simplest policy is to offer a thank-you note and nothing else.",
      },
      {
        q: "Can we ask patients to recommend us?",
        a: "Yes. Inviting patients to tell others, with nothing offered in return, is ordinary good manners. Make it easy by having a clear phone number and website. Keep any request general, and do not single out particular patients to ask.",
      },
      {
        q: "Is a referral program for cash-pay patients allowed?",
        a: "Rules vary by state and by the details of the program, and a practice rarely treats only cash-pay patients. Treat this as a question for an attorney who knows your state, not something to decide from a blog post.",
      },
      {
        q: "May we tell a patient that their friend booked?",
        a: "No. Confirming that someone is a patient is a privacy issue. Thank the patient for the recommendation in general terms, without saying whether anyone called or booked. The new patient can tell their friend themselves.",
      },
      {
        q: "How do we know whether word of mouth is working?",
        a: "Ask every new patient how they heard about the practice, record the answer in a consistent list, and review it monthly. A referred by a friend answer is a source. You do not need to track who, and you should not.",
      },
    ],
    citations: [OIG_AKS, HHS_PRIVACY, GBP_X_REVTIPS],
    links: [
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Getting More Reviews Without Review Gating", description: "Asking every patient the same way." },
      { href: "/guides/patient-newsletter-for-a-medical-practice-without-health-details", label: "Patient Newsletter Without Health Details", description: "Staying in touch in a privacy-safe way." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "The first thank-you a new patient sees." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
