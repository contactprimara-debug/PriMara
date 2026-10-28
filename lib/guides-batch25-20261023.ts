// -- Guides batch 25 - 2026-10-23 --
// Guide/AEO pages from the Command Center queue (rows 1211, 1213, 1219, 1251-1253, 1255-1257 plus six new
// in-niche topics), built by the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental
// health audience only. Inbound links are inline [text](/guides/slug) sentences appended to existing indexed
// guides' body prose.

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
const W3C_FORMS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms tutorial",
  href: "https://www.w3.org/WAI/tutorials/forms/",
};
const W3C_OLDER = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Web accessibility for older users",
  href: "https://www.w3.org/WAI/older-users/",
};
const W3C_DESIGN_TIPS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Tips for designing for web accessibility",
  href: "https://www.w3.org/WAI/tips/designing/",
};
const WCAG_QUICKREF = {
  publisher: "W3C Web Accessibility Initiative",
  label: "How to meet WCAG (quick reference)",
  href: "https://www.w3.org/WAI/WCAG21/quickref/",
};
const PLAIN_LANGUAGE = {
  publisher: "plainlanguage.gov",
  label: "Federal plain language guidelines",
  href: "https://www.plainlanguage.gov/",
};
const NIA_ONLINE = {
  publisher: "National Institute on Aging",
  label: "Online health information: is it reliable?",
  href: "https://www.nia.nih.gov/health/online-health-information",
};
const READY_HURRICANES = {
  publisher: "Ready.gov",
  label: "Hurricanes: prepare, stay safe",
  href: "https://www.ready.gov/hurricanes",
};
const NWS_HURRICANE = {
  publisher: "National Weather Service",
  label: "Hurricane safety",
  href: "https://www.weather.gov/safety/hurricane",
};
const GBP_HOURS = {
  publisher: "Google Business Profile Help",
  label: "Edit your business hours",
  href: "https://support.google.com/business/answer/3038177",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
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
const AAMFT_ETHICS = {
  publisher: "American Association for Marriage and Family Therapy",
  label: "AAMFT Code of Ethics",
  href: "https://www.aamft.org/Legal_Ethics/Code_of_Ethics.aspx",
};
const NASW_ETHICS = {
  publisher: "National Association of Social Workers",
  label: "NASW Code of Ethics",
  href: "https://www.socialworkers.org/About/Ethics/Code-of-Ethics",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GBP_PHOTOS = {
  publisher: "Google Business Profile Help",
  label: "Photo and video guidelines",
  href: "https://support.google.com/business/answer/6103862",
};
const MEDICARE_TELEHEALTH = {
  publisher: "Medicare.gov",
  label: "Telehealth services",
  href: "https://www.medicare.gov/coverage/telehealth",
};
const FL_LICENSE = {
  publisher: "Florida Department of Health",
  label: "License verification search",
  href: "https://mqa-internet.doh.state.fl.us/MQASearchServices/Home",
};
const FL_MENTAL_BOARD = {
  publisher: "Florida Board of Clinical Social Work, Marriage and Family Therapy, and Mental Health Counseling",
  label: "Florida mental health professions boards",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const FL_PATIENT_RIGHTS = {
  publisher: "Florida Legislature",
  label: "Florida Statutes section 381.026, Florida Patient's Bill of Rights and Responsibilities",
  href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0381/Sections/0381.026.html",
};
const FL_HEALTH = {
  publisher: "Florida Department of Health",
  label: "Florida Department of Health",
  href: "https://www.floridahealth.gov/",
};
const CMS_TCM = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "Transitional care management services (MLN booklet)",
  href: "https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf",
};
const AAP_BRIGHT = {
  publisher: "American Academy of Pediatrics",
  label: "Bright Futures",
  href: "https://www.aap.org/en/practice-management/bright-futures/",
};
const HEALTHY_CHILDREN = {
  publisher: "American Academy of Pediatrics",
  label: "HealthyChildren.org",
  href: "https://www.healthychildren.org/",
};
const SAMHSA_HELP = {
  publisher: "SAMHSA",
  label: "Find help",
  href: "https://www.samhsa.gov/find-help",
};

export const guidesPartTwentyEight: Guide[] = [
  // ---------------------------------------------------------------- 1211
  {
    slug: "accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website",
    keyword: "accessible intake and form design for patients with low vision or limited reading skills on a medical practice website",
    category: "Checklist",
    title: "Accessible Intake Forms for Low Vision or Limited Reading Skills",
    metaTitle: "Accessible Intake Forms for Low Vision or Limited Reading",
    metaDescription:
      "Design intake forms that patients with low vision or limited reading skills can finish: large text, plain labels, a phone option. Call (561) 291-2681.",
    answer:
      "An accessible intake form uses large text, one question per label, plain words and clear error messages, works with a screen reader and a keyboard, and always offers a phone option. Ask only what the first visit needs. A patient who cannot finish the form online should be able to finish it by calling.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Who gets stuck on a typical intake form"),
      p(
        "Most practice forms are built for a person with good eyesight, a large screen and a high comfort level with reading. A lot of patients are not that person. Some have low vision or cataracts, some read slowly in English because it is their second language, and some left school early and avoid long forms because they feel embarrassed. Others are simply tired, in pain or holding a phone in one hand."
      ),
      p(
        "When a form defeats these patients, they do not complain. They close the page and call another practice. The fix is mostly a matter of removing friction, and almost all of it costs nothing once the form is being built."
      ),
      h2("Make the text and layout easy to see"),
      ul(
        "Use body text of at least 16 pixels and let it grow when the browser text size is raised. Never lock the size.",
        "Keep strong contrast between text and background. Gray text on a white background is the most common failure.",
        "Put each label above its field, not inside it. A label that disappears when the patient starts typing is a trap for people with memory or vision problems.",
        "Give every tap target room. Small checkboxes next to tight text are hard to hit with a shaking hand.",
        "Do not rely on color alone. If a field has an error, say so in words and place the message next to the field."
      ),
      p(
        "The W3C [forms tutorial](https://www.w3.org/WAI/tutorials/forms/) shows how labels, instructions and error messages should be connected in the code so a screen reader announces them in the right order. Ask your web designer to confirm that each field has a real label tied to it."
      ),
      h2("Use words a ten-year-old could read"),
      p(
        "Reading level matters as much as font size. Replace phrases like date of birth as it appears on your insurance card with simple prompts such as Your birth date. Use short labels, short instructions and one idea per sentence. Our guide to [plain language and reading level](/guides/plain-language-and-reading-level-for-patient-facing-web-content) covers how to test this on your own pages."
      ),
      table(
        ["Instead of", "Write"],
        ["Please provide the primary telephone number at which you can be reached", "Best phone number"],
        ["Indicate the reason for your visit", "What would you like help with? (a few words is fine)"],
        ["Submit your completed demographic information", "Send"],
        ["Field required", "We need this to book your visit"]
      ),
      h2("Ask for less"),
      p(
        "The easiest form to finish is a short one. For a first request, name, phone number, preferred time and a few words about what the patient wants are usually enough, and the front desk can collect the rest on the phone. Our guide to [online appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) lists what to ask and what to leave out, including health details that should never be typed into a web form."
      ),
      h2("Always give a way that is not a form"),
      p(
        "Place the office phone number at the top of every form page as a tap-to-call link, and say who will answer and when. Offer to complete the paperwork by phone, by mail or at the front desk on arrival, and mention that staff can read the questions aloud. This single line removes the biggest barrier for patients who cannot see the screen well. Patients who cannot use online forms at all should still have a route in, and a [paper forms and phone registration option for patients without internet](/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice) describes how a primary care practice can offer one without adding risk."
      ),
      h3("Test it the way a patient would"),
      ol(
        "Set your browser to 200 percent zoom and try to finish the form without scrolling sideways.",
        "Fill it in using only the keyboard, with the Tab key and Enter.",
        "Turn on a screen reader such as VoiceOver or NVDA and listen to the first five fields.",
        "Ask someone who is not on your staff, ideally an older relative, to complete it while you watch quietly."
      ),
    ],
    faqs: [
      {
        q: "What is a good minimum font size for a patient form?",
        a: "Sixteen pixels is a common floor for body text, and larger is kinder. More important than the number is that the page respects the visitor's own browser settings, so a patient who enlarges the text does not break the layout.",
      },
      {
        q: "Do we need a separate large-print version of the form?",
        a: "Usually not, if the web form scales properly. It is still helpful to offer a printed large-print copy at the front desk and to say so on the page, because some patients prefer paper.",
      },
      {
        q: "Should the form explain why we ask each question?",
        a: "Yes, briefly. One short line under a sensitive field, such as why you need a phone number, builds trust and reduces abandoned forms. Keep it to one sentence and avoid legal wording.",
      },
      {
        q: "Can patients with limited reading skills use a voice option?",
        a: "Offer a phone call back. Many patients prefer to say the answers aloud, and a staff member can type them in. Do not promise a voice tool on the site unless you have tested it with real users.",
      },
      {
        q: "Does an accessible form help with Google rankings?",
        a: "Indirectly. Clear labels, headings and fast pages help visitors finish, and Google's people-first guidance rewards pages that serve visitors well. The reason to do it is the patients, not the ranking.",
      },
    ],
    citations: [W3C_FORMS, WCAG_QUICKREF, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility", description: "The wider accessibility checklist for a practice site." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publish forms without exposing patient data." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement", description: "Tell patients how to report a barrier." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "Sites built to be usable by everyone." },
    ],
  },

  // ---------------------------------------------------------------- 1213
  {
    slug: "senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access",
    keyword: "senior-friendly website layout for a primary care practice with large text and caregiver access",
    category: "Checklist",
    title: "Senior-Friendly Website Layout for a Primary Care Practice",
    metaTitle: "Senior-Friendly Website Layout for a Primary Care Practice",
    metaDescription:
      "A senior-friendly primary care site needs large text, a short menu, big buttons and a caregiver page. See the layout checklist. Call (561) 291-2681.",
    answer:
      "A senior-friendly primary care website has large readable text, a short menu, big buttons, one obvious phone number and a plain page for the family members and caregivers who often use the site on a patient's behalf. Fewer choices on each screen matter more than any special feature.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Older patients and their families use the site together"),
      p(
        "In many Florida practices the person looking at the website is not the patient. It is a daughter checking hours, a husband looking for the portal, or a neighbor who offered to help. Older patients also use the web, often on a phone or a tablet, but they tend to leave quickly when text is small or the page asks them to guess where to tap."
      ),
      p(
        "Designing for this group does not mean a different site. It means choosing the clearest version of each ordinary page element, which also makes the site easier for every other visitor. The W3C guidance on [web accessibility for older users](https://www.w3.org/WAI/older-users/) is a useful reference for your designer."
      ),
      h2("The layout checklist"),
      table(
        ["Element", "What works"],
        ["Text size", "At least 18 pixels for body copy on phones, headings noticeably larger, and no text that stays small when the visitor enlarges it."],
        ["Contrast", "Dark text on a plain light background. Avoid thin fonts, gray text and text over photos."],
        ["Menu", "Five or six plain words: Visits, Insurance, Patient Portal, About, Contact. Avoid icons without labels."],
        ["Buttons", "Large, well spaced, with words on them such as Call the office or Request a visit."],
        ["Phone number", "At the top of every page as a tap-to-call link, and written out in the page text."],
        ["Motion", "No auto-playing video, rotating banners or pop-ups that cover the page."]
      ),
      h2("Keep each page to one job"),
      p(
        "A page that explains visits, insurance, the portal and parking all at once overwhelms anyone. Give each of those its own page and link between them with plain sentences. Put the answer to the page question in the first few lines, then the details below. Our guide to [navigation menus and footers](/guides/navigation-menu-and-footer-for-a-medical-practice-website) shows how to keep the top menu short."
      ),
      h3("Say what happens next"),
      p(
        "After every action, tell the visitor what will happen. A request form should end on a page that says someone will call back within a stated time, and give the office number in case they would rather call now. Our guide to the [thank-you page after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it) explains how to write it."
      ),
      h2("A page for family members and caregivers"),
      p(
        "Create one clear page for caregivers that explains how a family member can help a patient book visits, what the office needs to see before it can speak with them, and how a patient can name someone they trust. Keep the wording general and let the front desk handle the details by phone, since consent and permissions depend on the individual patient. Our guide to [caregiver and family communication policies](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) covers what to say and what to avoid. Caregivers who search for a doctor who makes house calls need a clear answer too, and our guide to a [home visits and house calls page](/guides/home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims) shows what to include."
      ),
      ul(
        "State plainly that the practice will not discuss a patient's care with others without the patient's permission, and explain how the patient gives it.",
        "Give the phone number for caregivers who are arranging a ride, a wheelchair-accessible entrance or an interpreter.",
        "Link to the portal page and describe who can log in. Do not ask for any health details on the page.",
        "Offer printed information at the front desk for patients who prefer paper."
      ),
      h2("Check it on a real phone"),
      p(
        "Open the site on an ordinary phone in bright light, with your arm extended, and try to find the phone number, the hours and the portal in under ten seconds each. If you struggle, an older patient will too. Then ask an older relative to do the same and watch where they hesitate, without helping."
      ),
    ],
    faqs: [
      {
        q: "Is there a legal standard for senior-friendly websites?",
        a: "There is no separate standard for age. The broader accessibility guidelines, such as WCAG 2.1 Level AA, cover many of the same needs, including contrast, resizable text and keyboard use. Ask a qualified attorney about your specific obligations.",
      },
      {
        q: "Should we add a button that makes the text bigger?",
        a: "It can help, but the page should already work when the visitor enlarges text in their own browser or phone settings. A built-in button is an extra, not a substitute for sound design.",
      },
      {
        q: "How big should buttons be on a phone?",
        a: "Large enough to tap with a thumb without hitting something else, with clear space around them. Many designers use a height of at least 44 pixels, and a little more is better for older hands.",
      },
      {
        q: "Do we need a separate page for caregivers?",
        a: "One short page is worth having. It answers a question the front desk hears every week, and it gives family members a clear next step instead of leaving them to guess what the office requires.",
      },
      {
        q: "What about patients who do not use the web at all?",
        a: "Keep every important task possible by phone and in person, and say so on the website. A good site supports the front desk. It does not replace the phone for patients who prefer it.",
      },
    ],
    citations: [W3C_OLDER, NIA_ONLINE, W3C_DESIGN_TIPS],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call And Mobile Layout", description: "Make the phone number easy to tap." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility", description: "The wider accessibility checklist." },
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Patient Portal Login Page", description: "Help patients find the portal." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "Sites built to be usable by everyone." },
    ],
  },

  // ---------------------------------------------------------------- 1219
  {
    slug: "hurricane-and-severe-weather-patient-notice-page-for-a-primary-care-practice",
    keyword: "hurricane and severe weather patient notice page for a primary care practice",
    category: "Playbook",
    title: "Hurricane and Severe Weather Patient Notice Page for a Primary Care Practice",
    metaTitle: "Hurricane Patient Notice Page for a Primary Care Practice",
    metaDescription:
      "What to put on a primary care hurricane notice page: status, how to reach staff, rescheduling and records, with no medical advice. Call (561) 291-2681.",
    answer:
      "A severe weather notice page tells patients in plain words whether the office is open, how to reach staff, how visits will be rescheduled and where to find official storm information. Keep one permanent page, update the status line at the top, and leave medical advice out of it.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Why a practice needs a permanent storm page"),
      p(
        "When a storm is in the forecast, patients check three places: Google, the practice website and the phone. If the website still shows last month's news, patients call, the line jams and the front desk spends the day answering the same question. A permanent notice page lets one update reach all three places."
      ),
      p(
        "This guide is about the page patients read, not the Google listing. The setting-by-setting steps for hours on the profile are in our guide to [Google Business Profile hours and closures during hurricane season](/guides/google-business-profile-hours-and-closures-during-hurricane-season). Use the two together, and make sure they say the same thing."
      ),
      h2("What goes at the top"),
      p(
        "Start with a status box that anyone can read in two seconds, and keep it as the first thing on the page. Put the date and time of the last update next to it so visitors know it is current."
      ),
      table(
        ["Status", "Example wording"],
        ["Open as usual", "The office is open normal hours today. Updated Tuesday 8:00 a.m."],
        ["Open with changes", "The office will close at noon today. Visits after noon will be rescheduled by phone."],
        ["Closed", "The office is closed today and tomorrow. We will call patients with scheduled visits. Updated Wednesday 2:00 p.m."],
        ["Reopening", "We plan to reopen Friday at 9:00 a.m. Check this page before you travel."]
      ),
      h2("What patients need below the status"),
      ul(
        "How to reach the office, with the main number and any backup number or email that works if the lines are down.",
        "How rescheduling works: who will call, how soon, and where to book online once the office reopens.",
        "How to get prescriptions: tell patients to contact their pharmacy first and the office second, and to do it before a storm if they can.",
        "How to request records if they are evacuating, with a link to your records request page.",
        "Where to find official storm information, such as the National Weather Service and the state emergency management site."
      ),
      p(
        "Do not tell patients what to do about a medical problem on this page. Send them to 911 for an emergency and to the usual phone line for anything else. See our guide to the [office versus 911 or urgent care page](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) for wording that stays on the right side of that line."
      ),
      h2("Keep the page, retire the news"),
      p(
        "After the storm, change the status back to open as usual and keep the page live with the checklist underneath. Remove dated claims from the top, such as a closure for a storm that has passed, because stale closures confuse visitors and can look like an error to Google. Add the page to the footer so it is easy to find the next time. A planned absence of one clinician is a smaller version of the same problem, and a [leave notice for a primary care practice](/guides/provider-on-leave-notice-for-a-primary-care-practice-without-clinical-claims) uses the same dated status line idea for a single provider."
      ),
      h3("Match the other places"),
      ol(
        "Update the status box on the page first.",
        "Change special hours or a temporary closure on the Google profile to match.",
        "Change the phone greeting and the voicemail message.",
        "Post the same sentence on any social account the practice uses.",
        "Write down the time of each update so the next person knows what was changed."
      ),
      h2("Plan the page before the season starts"),
      p(
        "Build the page in May, before the season opens, and test it. Decide who is allowed to change the status line, where the login is kept and how that person will edit it from a phone if the office has no power. Write the template wording ahead of time for each status in the table, so that during a storm the only task is picking a status and typing a time."
      ),
      p(
        "Also decide what the front desk will say when someone calls while the office is closed. The recorded greeting should repeat the page's status in one sentence, give the website address and remind callers to dial 911 for an emergency."
      ),
    ],
    faqs: [
      {
        q: "Should the page give advice about storm preparation?",
        a: "Link to official sources instead of writing your own. Ready.gov, the National Weather Service and the state emergency management office update their guidance as conditions change, and a practice page can fall out of date.",
      },
      {
        q: "Can we mention telehealth visits during a closure?",
        a: "Only if the practice actually offers them and staff will be available. Say what will be offered, how to book it and what it cannot handle, and link to your virtual visits page for the details.",
      },
      {
        q: "What if the power or internet is down at the office?",
        a: "Choose someone who can update the page from home or a phone, and keep the login in a place at least two people know about. Plan this before storm season, not during the storm.",
      },
      {
        q: "Should we ask patients to tell us where they evacuated?",
        a: "No. Do not collect locations or health information through a web page. Ask patients to call the office if they need help, and let staff handle it by phone.",
      },
      {
        q: "How often should we update the page during a storm?",
        a: "Update it whenever the plan changes and at least once a day, and always show the time of the last update. A page with no date makes patients assume the information may be stale.",
      },
    ],
    citations: [READY_HURRICANES, NWS_HURRICANE, GBP_HOURS],
    links: [
      { href: "/guides/google-business-profile-hours-and-closures-during-hurricane-season", label: "Hurricane Hours On Google", description: "Set temporary hours and closures on the listing." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Closure Notices", description: "Holiday and closure notices across every channel." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls And Voicemail", description: "What callers hear when the office is closed." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1251
  {
    slug: "client-discharge-and-termination-policy-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "client discharge and termination policy page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Client Discharge and Termination Policy Page for a Counseling Practice",
    metaTitle: "Discharge and Termination Policy Page for Counseling",
    metaDescription:
      "How a counseling practice can explain when and how therapy ends: client choice, notice, referrals and returning, in plain words. Call (561) 291-2681.",
    answer:
      "A discharge policy page tells clients, before they start, how therapy can end: when they decide it is done, when the practice cannot be the right fit, or after a long gap. State the notice you give, the referrals you offer and how clients can return. Keep it calm and free of clinical claims.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Why publish how therapy ends"),
      p(
        "Most counseling websites explain how to begin and say little about how care ends. That gap causes misunderstandings. A client who stops coming wonders if they are still on the schedule. A clinician who sends a closing letter after eight weeks of silence can look abrupt. A short public page sets expectations early and gives the practice something clear to point to."
      ),
      p(
        "Professional ethics codes, including the [ACA Code of Ethics](https://www.counseling.org/resources/ethics), address ending a professional relationship and avoiding abandonment. Use your own license board's rules and your attorney's advice to write the policy, then use the website page to explain it in everyday language."
      ),
      h2("The ways therapy can end"),
      table(
        ["How it ends", "What the page can say"],
        ["The client decides", "Clients may stop at any time. We welcome a final session to review next steps, but it is never required."],
        ["The goals are met", "When the client and clinician agree that sessions are no longer needed, we will plan a closing session together."],
        ["Not the right fit", "If we believe another provider could serve you better, we will explain why and give you several referral options."],
        ["Long gap", "If we have not heard from you in a set number of weeks, we will send one letter or call and then close the file."],
        ["Policy reasons", "Repeated missed payments or unsafe conduct toward staff may end care. We will give notice and referrals whenever we can."]
      ),
      p(
        "Choose your own time frame for the long-gap rule, state it as a number of weeks, and apply it to everyone in the same way. Do not promise outcomes such as feeling better by the end. The page should describe the process, not the result."
      ),
      h2("What the practice commits to"),
      ul(
        "Reasonable notice before the practice ends care, except where safety makes that impossible.",
        "Referrals to other qualified providers, including how to find them through the state license lookup and national directories.",
        "Information about the 988 Suicide and Crisis Lifeline and local emergency services for anyone in crisis, because a closed file never means the end of support.",
        "Records handling: how long files are kept and how a former client can request a copy. Link to your records page if you have one."
      ),
      h2("How a former client comes back"),
      p(
        "Say plainly that former clients are welcome to return and explain how: call the office, or use the contact form. State whether a new intake is required after a long break, and whether the same clinician may be available. This one paragraph removes the awkwardness that stops many people from reaching out again. A separate page for people who stopped for a while, such as a [returning to counseling after a long break page](/guides/returning-client-after-a-long-break-page-for-a-counseling-practice-without-clinical-claims), can explain what paperwork repeats and how to rebook."
      ),
      h3("What to leave off the page"),
      ul(
        "Reasons a specific person was discharged, which is private and never belongs on a public site.",
        "Language that sounds like a threat, such as warnings written in capital letters.",
        "Legal terms you cannot explain. If you need them, add a link to the signed agreement clients receive at intake.",
        "Any statement that therapy always works or that clients who finish improve."
      ),
      p(
        "Link the page from your fees and cancellation pages and from the intake paperwork email, so clients meet the same wording in every place. Our guide to the [client transfer notice when a therapist leaves](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice) shows a related situation where the tone matters just as much."
      ),
      p(
        "Review the page once a year with the same care as the signed agreement. If the intake paperwork changes the notice period or the long-gap rule, change the page the same day, so clients never read one promise on the website and a different one in their paperwork."
      ),
    ],
    faqs: [
      {
        q: "Is a discharge policy page required?",
        a: "There is no single website requirement. Your license board and ethics code may require that clients be told the terms of care at the start, and a public page is a convenient place to repeat them. Ask your attorney or board what applies to you.",
      },
      {
        q: "How long a gap should trigger closing a client file?",
        a: "Practices commonly choose a number of weeks or months and write it into the intake agreement. The right number depends on your caseload and your license rules, so pick one you can apply consistently and state it clearly.",
      },
      {
        q: "Should the page name a clinical reason for discharge?",
        a: "No. Describe the categories in general terms only. Individual reasons belong in the private record and in a direct conversation with the client, never on a public page.",
      },
      {
        q: "Do we offer referrals to every discharged client?",
        a: "Practices usually commit to offering referrals when care ends for fit or policy reasons, and to giving crisis resources to anyone in distress. Write what your clinicians will really do so the page matches practice.",
      },
      {
        q: "Can clients return after being discharged?",
        a: "State your actual policy. Many practices welcome former clients back and ask them to complete a short update before scheduling. If some situations are different, say so in general terms.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, LIFELINE],
    links: [
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation And No-Show Policy", description: "The policy that sits next to this one." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Crisis wording every counseling site needs." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "How therapy begins, as a companion." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1252
  {
    slug: "telehealth-visit-instructions-page-for-a-primary-care-practice",
    keyword: "telehealth visit instructions page for a primary care practice",
    category: "How-to",
    title: "Telehealth Visit Instructions Page for a Primary Care Practice",
    metaTitle: "Telehealth Visit Instructions Page for Primary Care",
    metaDescription:
      "What belongs on a primary care telehealth instructions page: how to join, what to have ready, a dropped call and when to come in. Call (561) 291-2681.",
    answer:
      "A telehealth instructions page for a primary care practice shows patients how to join the video visit, what to have ready, what to do if the connection fails and which concerns need an in-person visit or 911. Write it as numbered steps a patient can follow from a phone.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("What this page is for"),
      p(
        "A telehealth instructions page is a how-to for patients who already have a video visit booked. It is different from a page that explains which visits can be done by video, and our guide to the [virtual visits page for a primary care practice](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video) covers that question. This page answers the practical one: how do I actually get on the call."
      ),
      p(
        "Without clear instructions, the first ten minutes of a video visit go to troubleshooting, the provider runs behind and the patient feels foolish. A good page prevents most of that, and it is one of the most useful pages a practice can publish for older patients and caregivers."
      ),
      h2("Before the visit"),
      ol(
        "Check the confirmation message for the link or the app name, and open it a few minutes early rather than at the start time.",
        "Use a phone, tablet or computer with a working camera and microphone. Say which browsers and apps the practice supports.",
        "Sit somewhere private and quiet with good light on your face. Tell family members the visit is private.",
        "Charge the device or plug it in, and connect to wifi if you can, since video uses a lot of mobile data.",
        "Have your photo ID, insurance card and a list of current medications and pharmacy name within reach."
      ),
      h2("How to join"),
      p(
        "Give step-by-step instructions for the one tool your practice uses, with a screenshot of each screen if your designer can add them with descriptive alt text. Name the exact button to tap and what the patient will see next, such as a waiting room message while the provider finishes the previous visit."
      ),
      table(
        ["If this happens", "Do this"],
        ["The link does not open", "Try a different browser, then call the office. Staff can send the link again."],
        ["No picture or sound", "Check the camera and microphone permissions on your device, then refresh the page."],
        ["The call drops", "Rejoin with the same link. If you cannot, the provider or staff will call the phone number on file."],
        ["You are not sure it worked", "Call the office number on this page and a staff member will help you connect."]
      ),
      h2("What to say about limits"),
      p(
        "Be honest about what a video visit cannot do. Some concerns need an exam, a test or a procedure in person, and the provider will decide that during the visit. Say that the provider may ask the patient to come in, and do not promise any specific result from a video appointment."
      ),
      p(
        "Include a short safety line near the top of the page: if it is an emergency, hang up and call 911, and do not wait for a video visit. Link to your page on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) for the longer version."
      ),
      h3("Privacy and consent"),
      ul(
        "Tell patients not to record the visit unless the practice policy allows it.",
        "Explain that the practice uses a video tool built for healthcare and not a public app, but only if that is true. Check with your vendor.",
        "State where the patient should be located in the state during the visit, since licensing rules may require it.",
        "Point to the consent step if the platform asks for it."
      ),
      p(
        "Finally, tell patients what happens after the visit: whether the provider will send a summary through the portal, how prescriptions are handled and how to book a follow-up. The Medicare page on [telehealth services](https://www.medicare.gov/coverage/telehealth) is a useful neutral reference for patients who ask what is covered. Patients also ask what to gather before the call, which a [first telehealth visit page about the medication list and records to have ready](/guides/medication-list-and-records-to-bring-to-a-first-telehealth-visit-page-for-a-primary-care-practice-without-clinical-advice) answers in a short checklist."
      ),
    ],
    faqs: [
      {
        q: "Which device works best for a video visit?",
        a: "Any device with a working camera, microphone and a stable connection can work. Many patients find a phone or tablet easiest. Tell patients which browsers and apps the practice supports and test the page on each before publishing it.",
      },
      {
        q: "What if the patient has no smartphone or internet?",
        a: "Offer an in-person visit or ask the provider whether a phone-only visit is possible for that concern. Do not promise phone-only visits on the page unless the practice offers them.",
      },
      {
        q: "Can a family member join the video visit?",
        a: "Often yes, with the patient's permission. Explain how: the patient can invite them by telling staff beforehand or by having them sit nearby. Keep the wording general and let staff confirm details by phone.",
      },
      {
        q: "Should the page list prices for telehealth visits?",
        a: "If the practice has a self-pay price, link to the page that lists it. Insurance coverage varies, so avoid specific claims about what a plan will pay and invite patients to call and ask.",
      },
      {
        q: "How often should we test the instructions?",
        a: "Test them whenever the video tool, link format or app version changes, and at least twice a year. Ask a staff member who does not use the tool daily to follow the page exactly as written.",
      },
    ],
    citations: [MEDICARE_TELEHEALTH, W3C_DESIGN_TIPS, HHS_PRIVACY],
    links: [
      { href: "/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video", label: "Virtual Visits Page", description: "What can and cannot be done by video." },
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Instructions For Therapy", description: "The same idea for a counseling practice." },
      { href: "/guides/telehealth-marketing-playbook", label: "Telehealth Marketing Playbook", description: "How to promote video visits." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1253
  {
    slug: "annual-website-content-review-checklist-for-a-counseling-practice",
    keyword: "annual website content review checklist for a counseling practice",
    category: "Checklist",
    title: "Annual Website Content Review Checklist for a Counseling Practice",
    metaTitle: "Annual Website Content Review Checklist for Counseling",
    metaDescription:
      "A yearly checklist for a counseling practice website: clinicians, licenses, fees, forms, crisis resources, links and Google. Call (561) 291-2681.",
    answer:
      "Once a year, read every page of your counseling website as a new client would. Check clinicians and licenses, fees and insurance, forms and policies, crisis resources, phone numbers, links and the Google profile, and fix whatever has drifted. Write the date of the review so the next one is easy.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Why a counseling site drifts out of date"),
      p(
        "A counseling practice changes quietly. A clinician goes part-time, a fee rises, the insurance panels shift, the office moves a suite number, a link to a resource stops working. Each change is small, and nobody updates every page. After a year the site tells a prospective client something that is no longer true, and the first conversation starts with a correction."
      ),
      p(
        "A yearly review fixes that, and the end of the year is a natural time to do it. Pick a month, block two hours and work through this list in order. For ongoing upkeep between reviews, our guide to [how often to update old content](/guides/how-often-to-update-old-content-on-a-medical-practice-website) explains what to touch more often."
      ),
      h2("The checklist"),
      table(
        ["Area", "What to check"],
        ["Clinicians", "Each person on the team page still works here, their license type and number of years are accurate, and photos are recent."],
        ["Licenses", "Every clinician's license is active. Look each one up on the state license search and note the date."],
        ["Fees and insurance", "Session fees, sliding-scale wording, accepted plans and out-of-network notes match what the front desk says."],
        ["Availability", "The page says whether you are accepting clients or keeping a waitlist, and it is correct today."],
        ["Policies", "Cancellation, late arrival and discharge wording match the signed agreement clients receive."],
        ["Crisis resources", "The 988 Lifeline and local emergency information appear where clients will see them."],
        ["Contact details", "Phone, address, suite, hours and email are identical on the site, Google and directories."],
        ["Forms and portal", "Every form opens, sends and arrives in the right inbox. The portal link works."],
        ["Links", "Run a broken link check and fix or remove every dead outbound link."]
      ),
      h2("Wording that tends to age badly"),
      ul(
        "Years of experience that were accurate in the year they were written.",
        "A telehealth statement that no longer matches your offering or the states where you can see clients.",
        "Phrases that promise results or describe a treatment as effective for a condition. Remove them whenever you find them.",
        "Seasonal notes such as a back-to-school schedule that remain after the season ends.",
        "Copyright years, terms and privacy dates in the footer."
      ),
      p(
        "While you are reading, look for sentences that a client could take as a guarantee. Counselors are cautioned by their ethics codes to avoid misleading claims, and the [ACA Code of Ethics](https://www.counseling.org/resources/ethics) is a good reference to keep next to you. If a sentence sounds like a promise, rewrite it as a description of what you do."
      ),
      h2("Check the places outside your site"),
      p(
        "A site review is incomplete without the places clients actually see you first. Compare the Google Business Profile, Psychology Today, your insurance directory listings and your social profiles against the website, and note every difference. Our guide to [fixing NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) shows how to find and correct mismatched names, addresses and phone numbers."
      ),
      h3("Close the loop"),
      ol(
        "Write down each change you made and the date.",
        "Update the dateModified on any page where the content really changed, and leave it alone on pages you only read.",
        "Test the contact form and the phone number once, from a phone.",
        "Put the next review date on your calendar before you close the document."
      ),
      h2("Make the review a habit"),
      p(
        "Choose the same month every year and assign each row of the table to a named person. Keep the finished checklist in a shared folder with the date, so you can see what changed from one year to the next. A practice that reviews its site once a year rarely needs a panic rewrite, and new clients meet a site that matches the front desk."
      ),
      p(
        "If you change a lot, such as a new clinician or a new fee schedule, republish the affected pages together and check the sitemap and Google profile the same day."
      ),
    ],
    faqs: [
      {
        q: "How long does an annual review take?",
        a: "A small solo practice can finish in about two hours. A group practice with many clinicians may need half a day. Keep the checklist in a shared document so each person can take their own section.",
      },
      {
        q: "Who should do the review?",
        a: "Ideally the person who answers client questions at the front desk, along with one clinician. The front desk knows which parts of the site cause confusion, and a clinician can judge the wording.",
      },
      {
        q: "Should we change dates on pages we did not edit?",
        a: "No. Only update the modified date on pages whose content truly changed. Updating dates without changes does not help readers and can make the site look careless if someone notices.",
      },
      {
        q: "What if a clinician's license information is wrong?",
        a: "Correct it the same day and check the license lookup for the exact title and status. Never display a credential that you cannot confirm on the state license search.",
      },
      {
        q: "Do we need a review more often than once a year?",
        a: "Check contact details, availability and fees whenever they change, and run a lighter quarterly check of links and forms. The yearly review is the full read-through that catches everything else.",
      },
    ],
    citations: [ACA_ETHICS, FL_LICENSE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/medical-practice-content-calendar-checklist", label: "Content Calendar Checklist", description: "Plan the year of updates." },
      { href: "/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website", label: "Broken Links And 404 Errors", description: "Find and fix dead links." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Keep clinician pages accurate." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1255
  {
    slug: "portal-login-and-messaging-expectations-page-for-a-counseling-practice",
    keyword: "portal login and messaging expectations page for a counseling practice",
    category: "How-to",
    title: "Portal Login and Messaging Expectations Page for a Counseling Practice",
    metaTitle: "Portal Login and Messaging Page for a Counseling Practice",
    metaDescription:
      "Explain how clients log in to the portal and what to expect from messages: reply times, scheduling and no crisis use. Call us at (561) 291-2681.",
    answer:
      "A portal page for a counseling practice should tell clients where to log in, what the portal is for, how fast messages are answered and what never to send there. State a reply window, send crisis messages to 988 and 911, and keep clinical conversation for the session.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Why clients need this page"),
      p(
        "Counseling clients often assume a portal message works like a text to a friend. They write at midnight and expect an answer by morning. If the clinician only checks messages twice a week, that gap becomes frustration, and in a few cases it becomes a safety problem. Setting expectations on a public page, then repeating them inside the portal, protects clients and clinicians."
      ),
      p(
        "This page is different from the login page for a general medical practice described in our guide to the [patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe), and from the primary care guide to [lab results and portal message expectations](/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice). A counseling portal carries different messages and different risks."
      ),
      h2("What the page should cover"),
      table(
        ["Section", "What to write"],
        ["Where to log in", "A large button that opens the portal in the same window, with the practice name beside it and no other links competing."],
        ["First-time login", "Where the invitation email comes from, how long the link lasts and who to call if it does not arrive."],
        ["What the portal is for", "Scheduling, billing questions, signing forms and sending documents. Not for ongoing therapy conversation."],
        ["How fast we reply", "Messages are read during office hours on weekdays, and replies usually come within one business day."],
        ["What not to send", "Emergencies, thoughts of harming yourself or others, or anything that cannot wait for a reply."]
      ),
      h2("Say the crisis line clearly"),
      p(
        "Put the safety message in plain sight, above the login button and again near the message instructions. Something like: If you are in crisis or worried about your safety, do not use the portal. Call or text 988, or call 911 for an emergency. Link to the [988 Suicide and Crisis Lifeline](https://988lifeline.org/) and repeat the same line in the portal itself and in the automatic reply."
      ),
      h2("Set a response promise you can keep"),
      p(
        "Choose a window that your clinicians can meet on their busiest week. One business day is realistic for many practices, and some choose two. A promise you cannot keep teaches clients to stop trusting the page. If response time differs by clinician, say whether you answer messages for them or they answer their own."
      ),
      ul(
        "State your office hours and the days messages are checked.",
        "Say who reads the messages: the clinician, the front desk or both.",
        "Explain that scheduling changes made by portal message are not confirmed until the office replies.",
        "Mention that a late-night message will not be read until the next business day."
      ),
      h3("Privacy reminders"),
      p(
        "Remind clients to log out on shared devices, to avoid using a work computer or a work email address for therapy messages, and to call the office if they suspect someone else has their password. Do not display any client names, appointment times or screenshots of real messages on the public page."
      ),
      p(
        "Keep the portal link on its own page rather than inside a long policy document, and link to it from the footer and contact page. If a client forgets their login, the page should tell them which phone number to call and who will answer. Tell clients which messages belong in the portal and which may be texted, using the structure in our [texting between sessions policy page](/guides/texting-between-sessions-policy-page-for-a-counseling-practice) guide."
      ),
      h2("Test the page like a new client"),
      p(
        "Ask someone outside your staff to find the portal login from the home page on a phone and to read the page aloud. Note where they hesitate. If they cannot tell what the portal is for or how long a reply will take, rewrite that sentence. Repeat the test whenever the portal vendor changes the login screen. Clients sometimes ask about changing their emergency contact by portal message, which an [emergency contact request on intake page for a counseling practice](/guides/emergency-contact-request-on-intake-for-a-counseling-practice-without-clinical-detail) can answer in advance."
      ),
    ],
    faqs: [
      {
        q: "Should a counseling practice allow clinical messages in the portal?",
        a: "That is a policy choice for the practice and its clinicians. Many practices limit the portal to logistics and keep therapy conversation for the session. Whatever you choose, state it plainly so clients know before they write.",
      },
      {
        q: "What should the automatic reply say?",
        a: "Confirm that the message arrived, give the normal reply time and repeat the crisis line: call or text 988, or call 911 in an emergency. Keep it short, and do not include any detail about the client.",
      },
      {
        q: "How do we handle a message that suggests a crisis?",
        a: "Have a written procedure that every staff member knows, based on your clinical protocols and your license board's rules. The web page should only tell clients what to do and not describe the internal steps.",
      },
      {
        q: "Can clients send documents like insurance cards?",
        a: "Only through the secure portal, never by ordinary email or text. Say which documents are welcome, such as a photo of an insurance card, and what the front desk will do with them.",
      },
      {
        q: "Should the portal link open in a new tab?",
        a: "Opening it in the same window is usually easier for older clients and screen reader users. Whatever you choose, label the link clearly, for example Client Portal Login, so nobody has to guess.",
      },
    ],
    citations: [LIFELINE, HHS_PRIVACY, ACA_ETHICS],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "Set expectations from the first message." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Crisis wording every counseling site needs." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls And Voicemail", description: "What callers hear when the office is closed." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "Sites built to be usable by everyone." },
    ],
  },

  // ---------------------------------------------------------------- 1256
  {
    slug: "patient-rights-and-complaint-process-page-for-a-primary-care-practice",
    keyword: "patient rights and complaint process page for a primary care practice",
    category: "How-to",
    title: "Patient Rights and Complaint Process Page for a Primary Care Practice",
    metaTitle: "Patient Rights and Complaint Process Page for Primary Care",
    metaDescription:
      "How a primary care practice can publish patient rights and a clear complaint process: who to contact and outside agencies. Call (561) 291-2681.",
    answer:
      "A patient rights and complaint page links to the rights notice the practice already gives patients, explains in plain steps how to raise a concern with the office, and names the outside agencies a patient may also contact. Keep it short, calm and free of legal advice.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("What this page does"),
      p(
        "Patients who are unhappy often do not know where to take the concern. If the website offers no path, they go to a public review site or an outside agency first. A page that explains patients' rights and how to raise a problem with the practice gives them a calmer first step and shows that the office takes concerns seriously."
      ),
      p(
        "It is a different page from the feedback and contact page described in our guide to [patient feedback and complaint contact pages](/guides/patient-feedback-and-complaint-contact-page-for-a-medical-practice-without-health-details). That guide is about the form and inbox that receives comments. This one is about publishing the rights and the process behind them."
      ),
      h2("Start with the rights the practice already shares"),
      p(
        "Florida practices operate under state law that sets out patient rights and responsibilities, and the statute is public on the [Florida Legislature website](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0381/Sections/0381.026.html). Practices also give patients a notice of privacy practices under HIPAA. Do not paraphrase either document in a way that changes its meaning. Link to the official source or to the practice's own notice, and add a short plain summary beside it."
      ),
      ul(
        "Say where patients can read or request a printed copy of the practice's rights and privacy notices.",
        "Describe in a sentence or two, in your own words, topics such as respectful care, privacy and access to records. Use the notice itself for exact wording.",
        "Have your attorney or compliance contact review the summary before it goes live.",
        "Avoid claims such as we always follow every law. State what you do and where the official documents are."
      ),
      h2("How to raise a concern with the office"),
      ol(
        "Tell the patient who to contact first, by role such as practice manager, and give a direct phone number and a monitored email.",
        "Explain that a concern can be raised in person, by phone or in writing, and that staff will help anyone who has trouble writing.",
        "Say how quickly the practice will acknowledge the concern, for example within two business days.",
        "Say who reviews the concern and that the patient will hear back about the outcome when appropriate.",
        "State that raising a concern will not affect the patient's care."
      ),
      h2("Outside agencies, listed neutrally"),
      p(
        "Patients may also contact outside bodies, and saying so openly builds trust. A practice might list the Florida Department of Health, the Florida Agency for Health Care Administration and, for privacy concerns, the Office for Civil Rights at the U.S. Department of Health and Human Services. Link to each agency's own contact page and do not describe their processes or predict results."
      ),
      table(
        ["Concern", "Where to look"],
        ["Care or conduct of a licensed professional", "Florida Department of Health licensing and enforcement information"],
        ["Facility or administrative issues", "Florida Agency for Health Care Administration"],
        ["Privacy of health information", "HHS Office for Civil Rights, which accepts HIPAA complaints"]
      ),
      h3("Keep the tone human"),
      p(
        "Write as one person to another. Avoid wording that sounds defensive and avoid threats. Do not discuss any individual patient or incident, and never reply to a public review on this page. Our guide on [responding to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review) covers the public side. Many practices also publish a [chaperone policy page](/guides/chaperone-policy-page-for-a-primary-care-practice) so patients know they may ask for another person to be present during a sensitive exam."
      ),
      h2("Keep the page honest and current"),
      p(
        "Review the page every year and whenever the practice changes its notices, contacts or process. Test every phone number and email address on it, and check that the outside links still open. A complaint page with a dead number is worse than none, because it tells patients that nobody is listening."
      ),
    ],
    faqs: [
      {
        q: "Does a practice have to publish a complaint process on its website?",
        a: "There is no single website rule that applies to every practice. Requirements depend on the practice type, payers and state, so ask your attorney or compliance contact. Publishing a process is still good practice because it gives patients a clear path.",
      },
      {
        q: "Should the page list a specific person by name?",
        a: "A role is safer than a name, since people change jobs. Use a title such as practice manager, with a main number and a shared inbox that more than one person checks.",
      },
      {
        q: "Can patients file a complaint anonymously?",
        a: "Decide your own policy and state it. Some practices accept anonymous concerns but explain that they cannot reply or investigate as fully. Others ask for contact details so they can follow up.",
      },
      {
        q: "What if a concern involves a clinical judgment?",
        a: "The page should route it to a manager or medical director for review and should not defend or discuss clinical decisions. Details belong in a private conversation with the patient, not on a public page.",
      },
      {
        q: "Should we mention that patients can leave an online review?",
        a: "You can say patients are welcome to share their experience anywhere, but do not tie complaints to reviews or ask unhappy patients to stay away from review sites. Review gating is prohibited by Google.",
      },
    ],
    citations: [FL_PATIENT_RIGHTS, FL_HEALTH, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Responding To A Negative Review", description: "The public side of a complaint." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Reviews Without Gating", description: "Ask for reviews the compliant way." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing Questions Page", description: "Another page that heads off complaints." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1257
  {
    slug: "office-tour-and-photos-page-for-new-primary-care-patients",
    keyword: "office tour and photos page for new primary care patients",
    category: "How-to",
    title: "Office Tour and Photos Page for New Primary Care Patients",
    metaTitle: "Office Tour and Photos Page for New Primary Care Patients",
    metaDescription:
      "Build an office tour page for new primary care patients: real photos, helpful captions, alt text and privacy rules, step by step. Call (561) 291-2681.",
    answer:
      "An office tour page shows a new patient what the visit will look like: the entrance, parking, waiting room, check-in desk and exam area, in real photos with plain captions. Use no patients in the pictures, add descriptive alt text, and match the images to your Google profile.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("What a tour page does for a new patient"),
      p(
        "Walking into a new doctor's office is a small worry for many people. They wonder where to park, which door to use and what the waiting room feels like. A tour page answers those questions before the visit and turns an unknown place into a familiar one. It is especially useful for older patients, anxious patients and anyone bringing a child."
      ),
      p(
        "It is not a gallery of decor. Each photo should answer a question a patient has, and each caption should say what the patient will do there. Our guide to [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) covers the access details in depth, and this page shows them in pictures."
      ),
      h2("The shot list"),
      table(
        ["Photo", "Caption that helps"],
        ["Street view of the building", "Our office is in the white building with the green awning, next to the pharmacy."],
        ["Parking and the main door", "Free parking is in the lot behind the building. The main door is automatic and has no step."],
        ["Reception desk", "Check in here. Please bring your photo ID and insurance card."],
        ["Waiting room", "Seating includes chairs with arms and a space for wheelchairs and strollers."],
        ["Hallway to exam rooms", "A medical assistant will bring you back and check your height and weight."],
        ["Exam room", "Each room is private. You may have a family member with you."]
      ),
      p(
        "Replace the captions above with true descriptions of your own office. Do not describe features the office does not have, and revisit the captions whenever something changes."
      ),
      h2("Privacy and respect rules"),
      ul(
        "Take photos when no patients are in the building, or crop so no one can be identified.",
        "Check screens, charts, whiteboards and sign-in sheets for names or information before publishing.",
        "Get written permission before showing any staff member's face.",
        "Do not show lab equipment or medication storage in ways that reveal patient details."
      ),
      h2("Make the photos work for search"),
      p(
        "Name image files with plain words such as waiting-room.jpg instead of a camera number. Write alt text that describes what the picture shows in one sentence, for example the waiting room with armchairs and a children's table. Compress photos so the page loads quickly on a phone. Our guide to [image SEO and alt text](/guides/image-seo-and-alt-text-for-a-medical-practice-website) covers the details."
      ),
      h3("Use the same photos in other places"),
      p(
        "Upload a few of the same images to the Google Business Profile, following Google's [photo and video guidelines](https://support.google.com/business/answer/6103862), so patients see the same entrance and waiting room on Maps that they see on the website. Keep the number of images modest, and replace them when the office changes."
      ),
      p(
        "Add a short written walk-through under the photos for patients who cannot see them or who use screen readers. Three or four sentences that describe the route from the parking lot to the reception desk are enough."
      ),
      h2("What to avoid in the photos"),
      ul(
        "Heavy filters, wide-angle distortion or editing that makes rooms look larger than they are.",
        "Stock images mixed in with real ones, which make patients wonder what is real.",
        "Text laid over photos, which is hard to read and invisible to screen readers.",
        "Rooms with clutter, personal items or visible paperwork."
      ),
      h2("Keep the page current"),
      p(
        "Add a calendar reminder to retake photos when the office is repainted, moved, renovated or when signs change. Check the page at your yearly website review, and compare it with the images on the Google profile. If a patient mentions that the building did not look like the photo, treat it as a bug and fix it that week."
      ),
    ],
    faqs: [
      {
        q: "How many photos should an office tour page have?",
        a: "Six to ten is usually enough: the building, parking, entrance, reception, waiting area and a typical exam room. More than that rarely helps, and every extra photo slows the page, especially on a phone.",
      },
      {
        q: "Should we use stock photos instead of our own?",
        a: "Use your own. Patients are checking that the place they will visit is the place in the picture, and stock photos can mislead. Google also asks that business photos represent the real location.",
      },
      {
        q: "Can we include a video tour?",
        a: "Yes, if it has captions and a transcript and does not play automatically. Our guide to video on a medical practice website explains how. A short written walk-through is still needed for people who cannot watch.",
      },
      {
        q: "Do staff need to consent to appear in photos?",
        a: "Get written permission before publishing any identifiable photo of staff, and remove the photo promptly if they ask. Photos without people avoid the question entirely.",
      },
      {
        q: "How often should the photos be updated?",
        a: "Update them whenever the entrance, parking, signage or waiting room changes in a way a patient would notice, and check them at your annual website review. Old photos that no longer match the office create confusion on arrival.",
      },
    ],
    citations: [GBP_PHOTOS, W3C_DESIGN_TIPS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice", label: "Waiting Room And Check-In Page", description: "What patients do after they arrive." },
      { href: "/guides/google-business-profile-photos-checklist", label: "Google Profile Photos Checklist", description: "Which photos to upload and how." },
      { href: "/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website", label: "Provider Headshots And Team Photos", description: "Photo rules for people." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "Sites built to be usable by everyone." },
    ],
  },

  // ---------------------------------------------------------------- new A
  {
    slug: "confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice",
    keyword: "confidentiality and its limits page for a counseling practice without legal advice",
    category: "How-to",
    title: "Confidentiality and Its Limits Page for a Counseling Practice",
    metaTitle: "Confidentiality and Its Limits on a Counseling Website",
    metaDescription:
      "How to explain confidentiality on a counseling website: what stays private, the limits and who to ask, with no legal advice. Call (561) 291-2681.",
    answer:
      "A confidentiality page tells prospective clients that what they share is private, then states honestly the few situations where the law or safety requires a clinician to share information. Use plain words, link to the full signed agreement, and leave legal interpretation to an attorney and your license board.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Why people look for this before they call"),
      p(
        "Many people hesitate to start counseling because they are afraid of who will find out. They wonder whether a spouse, an employer, a school or an insurance company will learn what they say. A page that answers this directly, in a calm voice, removes one of the biggest reasons people delay calling."
      ),
      p(
        "It also protects the practice. Clients who read the limits of confidentiality before the first session are less surprised if a limit ever applies. The page should never replace the written agreement clients sign. It is a readable preview of it."
      ),
      h2("The structure that works"),
      table(
        ["Section", "What to say"],
        ["The promise", "What you share in sessions is private. We do not tell others that you are a client without your written permission."],
        ["The limits", "In a few situations the law or safety requires us to share information. We explain them at your first visit."],
        ["Who sees records", "Staff who need records to schedule or bill, and the practice's billing service under written agreements."],
        ["Insurance", "If you use insurance, the plan receives limited information needed to pay claims, such as a diagnosis code."],
        ["Your choices", "You can ask what has been shared, ask for a copy of your records and give or withdraw permission in writing."]
      ),
      h2("Describe the limits in general terms"),
      p(
        "State the categories without legal detail. Clinicians in most states must act when someone is at serious risk of harming themselves or another person, when a child, an older adult or a person with a disability may be abused or neglected, or when a court orders the release of records. The exact rules differ by state and by license, so write the list with your attorney, then describe it in everyday words."
      ),
      ul(
        "Safety: serious risk of harm to the client or to someone else.",
        "Protection: suspected abuse or neglect of a child or vulnerable adult.",
        "Legal: a valid court order or a legal requirement.",
        "Permission: anything the client has agreed to in writing, such as speaking with a physician."
      ),
      p(
        "Do not give examples that read like instructions for avoiding a report, and do not predict what a clinician would do in a particular situation. Say that the clinician will talk through the limits with every client at the start."
      ),
      h2("Say how privacy works in the real world"),
      p(
        "Clients also worry about everyday privacy: a waiting room, a text on a lock screen, a bill that arrives at a shared address. Explain what the practice does about each of these, such as how appointment reminders are worded and how sessions are held, and link to the practice's [portal and messaging page](/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice) and [first-time contact form guide](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time)."
      ),
      h3("Teens and families"),
      p(
        "If the practice sees minors, say that confidentiality for teens and the role of parents depend on the situation and the law, and refer readers to the page that explains consent in more detail, such as our guide to the [teen therapy page for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims). Avoid promising a teen that nothing will ever be shared."
      ),
      p(
        "Check the wording against the HHS explanation of how the [HIPAA Privacy Rule treats health information](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html), and with your own counsel, before you publish."
      ),
      h2("Keep the page and the agreement in step"),
      p(
        "Whenever the signed agreement changes, update the page the same day, and keep a note of what changed. The page should always be a plain-language preview of the document clients sign, never a different version of the story."
      ),
    ],
    faqs: [
      {
        q: "Is a confidentiality page the same as a privacy notice?",
        a: "No. A privacy notice is a formal document that HIPAA-covered practices give to patients. A confidentiality page is a plain-language explanation on the website that helps visitors decide to call. Link from one to the other.",
      },
      {
        q: "Should the page mention mandatory reporting?",
        a: "Describe it in general terms, because clients deserve to know before they speak. Do not cite specific statutes unless your attorney reviews the page, since the rules differ by state and license.",
      },
      {
        q: "Can we promise that nothing will ever be shared?",
        a: "No. Promise privacy, and then state the limits honestly. A promise of absolute secrecy is inaccurate for almost every licensed clinician and can damage trust if a limit ever applies.",
      },
      {
        q: "What does insurance see?",
        a: "Say in general terms that a plan receives the limited information it needs to pay a claim. Explain that clients who prefer not to use insurance can pay privately, and link to your fees page.",
      },
      {
        q: "Who should review this page before it is published?",
        a: "The clinicians who will deliver the policy, the practice owner and an attorney familiar with your state's rules. A short review now is much cheaper than correcting a misleading statement later.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, HHS_PRIVACY],
    links: [
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page", description: "Consent and confidentiality for teens." },
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Insurance Verification Page", description: "How benefits checks work." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What happens at the first visit." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new B
  {
    slug: "therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website",
    keyword: "therapist credentials and license titles explained on a counseling practice website",
    category: "Checklist",
    title: "Therapist Credentials and License Titles Explained on a Counseling Website",
    metaTitle: "Therapist License Titles Explained on a Counseling Website",
    metaDescription:
      "Explain LMFT, LCSW, LMHC and other license titles on a counseling website, with a license lookup link and no invented credentials. Call (561) 291-2681.",
    answer:
      "Explain each clinician's license title in one plain sentence, show the full title as the state issues it, and link to the state license lookup so visitors can verify it. Never abbreviate in a way that suggests a higher credential, and never list a title you cannot confirm.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("Why the letters confuse visitors"),
      p(
        "A visitor searching for therapy meets a stack of abbreviations: LMHC, LMFT, LCSW, PhD, PsyD. Most people do not know what they mean, and some assume the longest string of letters means the best provider. That is not true, and a website that leaves the letters unexplained makes visitors feel excluded at the exact moment they are trying to feel welcome."
      ),
      p(
        "A short explanation next to each clinician fixes that. It also protects the practice, because titles are regulated. States control who may use them, and a wrong title can lead to a complaint with the licensing board."
      ),
      h2("Say it the way the state does"),
      p(
        "Use the exact title on the clinician's license. Spell it out the first time and add the abbreviation, for example Licensed Mental Health Counselor (LMHC). In Florida the licenses for these three professions are issued through the Department of Health, and the boards publish information on their own website at [floridasmentalhealthprofessions.gov](https://floridasmentalhealthprofessions.gov/). Check which titles apply to your clinicians, and describe only what is true for them. Primary care teams face the same confusion with MD, DO, NP and PA, and the guide to [staff titles explained for a primary care practice](/guides/staff-titles-explained-page-for-a-primary-care-practice-md-do-np-pa-and-ma) shows how to word each one."
      ),
      table(
        ["Title", "A plain sentence a visitor can read"],
        ["Licensed Mental Health Counselor (LMHC)", "A counselor licensed by the state to provide mental health counseling."],
        ["Licensed Marriage and Family Therapist (LMFT)", "A therapist licensed by the state with training in working with couples, families and individuals."],
        ["Licensed Clinical Social Worker (LCSW)", "A social worker licensed by the state to provide clinical counseling."],
        ["Psychologist", "A licensed psychologist, who holds a doctoral degree and a state license."],
        ["Registered intern or associate", "A clinician working toward a license under the supervision of a licensed professional."]
      ),
      p(
        "Adjust the wording to your own clinicians and have each of them read their sentence. If your practice employs registered interns or associates, our guide to the [associate and pre-licensed clinician disclosure page](/guides/associate-and-pre-licensed-clinician-disclosure-page-for-a-counseling-practice) explains how to label them clearly."
      ),
      h2("Link to the proof"),
      ul(
        "Add a Verify this license link beside each clinician that opens the state license lookup, such as the [Florida Department of Health search](https://mqa-internet.doh.state.fl.us/MQASearchServices/Home).",
        "Show the license type and, if you choose, the license number, exactly as it appears on the state record.",
        "Check each license on the lookup every year and note the date. See our annual review checklist for counseling practices.",
        "Remove a title the same day if a license lapses or changes."
      ),
      h2("What not to do"),
      ul(
        "Do not use a title the clinician is still working toward, or add letters from a certificate that is not a license.",
        "Do not describe a clinician as a doctor unless they hold a doctoral degree in the field, and say which degree.",
        "Do not suggest that one title is better than another. Each has different training, and a good fit matters more than letters.",
        "Do not claim specialties as expertise unless the clinician's training supports it."
      ),
      h3("Where to put the explanation"),
      p(
        "Put the plain-language sentence on each clinician's bio page and a short glossary on a single credentials page that the bios link to. That way the team page stays clean, and visitors who want the full picture can get it. The same wording should match what appears on Psychology Today and your Google profile."
      ),
      p(
        "Our guide to the [therapist bio page](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) shows how to fit these lines into a full bio without clinical claims."
      ),
      p(
        "Finally, ask each clinician to read their own title and sentence once a year and confirm both. People change names, move states or add licenses, and the website is often the last place to hear about it."
      ),
    ],
    faqs: [
      {
        q: "Should we list degrees as well as licenses?",
        a: "Yes, if they are accurate. Name the degree, the field and the school, then the license. The license is what allows the clinician to practice, so lead with it and let the degree follow.",
      },
      {
        q: "Can we use the term therapist for any of these?",
        a: "The word therapist is general and is used by many professions, and rules on who may use it vary. Pair it with the actual license title so visitors know exactly who they are meeting.",
      },
      {
        q: "Is it acceptable to show a license number?",
        a: "Many clinicians and states allow it, and it helps visitors verify the license. Check your board's rules and the clinician's preference, and make sure the number matches the state record exactly.",
      },
      {
        q: "What about certifications like EMDR trained?",
        a: "Describe additional training truthfully, name the organization that issued it and avoid wording that suggests the clinician is licensed in a specialty. Do not promise a result from any method.",
      },
      {
        q: "How do we handle a clinician who is newly licensed?",
        a: "Update the title the day the license is issued and verify it on the state lookup first. Keep the associate wording until the state record shows the new license, so the page never runs ahead of the record.",
      },
    ],
    citations: [FL_LICENSE, FL_MENTAL_BOARD, AAMFT_ETHICS],
    links: [
      { href: "/guides/np-pa-bio-page-that-ranks", label: "NP And PA Bio Page", description: "The primary care version of a credentials page." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "Write a bio that helps patients and ranks." },
      { href: "/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice", label: "Psychology Today And Directory Profiles", description: "Keep credentials the same everywhere." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new C
  {
    slug: "clinician-matching-page-for-a-group-counseling-practice-how-clients-choose-a-therapist",
    keyword: "clinician matching page for a group counseling practice how clients choose a therapist",
    category: "Playbook",
    title: "Clinician Matching Page for a Group Counseling Practice",
    metaTitle: "Clinician Matching Page for a Group Counseling Practice",
    metaDescription:
      "How a group counseling practice can explain matching clients with a therapist: a short call, availability, fit and switching. Call (561) 291-2681.",
    answer:
      "A clinician matching page tells new clients how the practice pairs them with a therapist: a short intake call about preferences and availability, a recommendation, and an easy way to switch if it is not a fit. It needs no quiz, no clinical language and no promise of results.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("The problem with a wall of bios"),
      p(
        "A group practice often shows ten clinician photos and invites the visitor to pick one. Most people cannot. They do not know the difference between the titles, cannot tell who has openings and are worried about choosing wrong. The result is a long scroll and a bounce, or a call that starts with I do not know who I should see."
      ),
      p(
        "A matching page replaces the guessing with a process. It tells visitors that choosing is not their job alone, and it shows exactly what happens after they reach out. It sits well beside the bios rather than replacing them, and it works for any group practice with more than two clinicians."
      ),
      h2("Explain the steps"),
      ol(
        "The visitor requests a first call through the form or by phone, and a staff member replies within the time the page states.",
        "In a short intake call, staff ask about scheduling, location or telehealth, insurance or fees, and any preferences about a clinician, such as gender, language or age group.",
        "Staff recommend one or two clinicians who have openings and whose training fits the request, and send a link to their bios.",
        "The client books a first session with the clinician they prefer.",
        "After the first session or two, the client can ask to switch, and the practice will help without judgment."
      ),
      p(
        "Make sure the steps match what the front desk truly does. A page that promises a matching call within one business day must be backed by someone who makes it."
      ),
      h2("What the intake call should not do"),
      ul(
        "Collect clinical details such as symptoms, histories or diagnoses by web form or text. Those belong in a private conversation with a clinician.",
        "Promise that a certain clinician can resolve a certain problem.",
        "Rank clinicians by experience in a way that makes some seem second best.",
        "Pressure a client to decide on the call."
      ),
      p(
        "Our guide to the [first-time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) lists the fields that are safe to ask online. Keep the matching conversation for the phone."
      ),
      h2("What preferences can staff match on"),
      table(
        ["Preference", "How to describe it"],
        ["Days and times", "Evening, weekend or daytime openings, shown as an honest range."],
        ["Location or video", "Which office or whether sessions are online, and the states where each clinician can see clients."],
        ["Payment", "Which clinicians accept which plans and who offers a reduced fee."],
        ["Language", "Languages spoken, written exactly as in your bilingual page."],
        ["Clinician background", "License type and listed areas of focus, in neutral wording."]
      ),
      h3("Make switching easy"),
      p(
        "Say plainly that a client may ask to change clinicians and that the practice will help with the move, without needing to explain. This sentence matters. It lowers the pressure of the first choice and shows that the practice cares about fit. See our guide to the [waitlist page for a therapy practice with a full caseload](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) for how to handle a time when nobody has openings."
      ),
      h2("Measure whether matching works"),
      p(
        "Track two simple numbers without recording anything about a client's care: how many first calls turn into booked first sessions, and how many clients ask to switch clinicians in the first month. If few calls convert, the page or the callback is too slow. If many ask to switch, revise the questions staff ask on the call."
      ),
      p(
        "Keep the numbers in the practice's own system and review them every quarter with the people who answer the phone. They know which questions help."
      ),
    ],
    faqs: [
      {
        q: "Should the page include a matching quiz?",
        a: "A short call is usually better. A quiz can feel clinical, may collect information you do not want on a web form and tends to give the impression that a program can make a clinical choice. A person can listen and ask follow-up questions.",
      },
      {
        q: "Can clients request a specific clinician?",
        a: "Yes, and the page should say so. If that clinician has no openings, explain the wait or offer to suggest a colleague. Do not hide the request behind the matching process.",
      },
      {
        q: "Who should make the match?",
        a: "Someone trained to listen and to know every clinician's availability and background, often a patient coordinator or the clinical director. Give them a short written guide so matches stay consistent from week to week.",
      },
      {
        q: "How do we avoid sounding like we promise results?",
        a: "Describe a good fit as one the client feels comfortable with and can schedule. Avoid saying a match will produce progress or recovery, and stay with words about comfort, availability and preferences.",
      },
      {
        q: "What if a client wants to switch after several sessions?",
        a: "Welcome the request, help with a warm handoff if the client agrees and respect their pace. Your page can simply say that clients may ask to change clinicians at any time.",
      },
    ],
    citations: [ACA_ETHICS, GOOGLE_HELPFUL, NASW_ETHICS],
    links: [
      { href: "/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page", label: "Choosing A Provider At A Multi-Provider Practice", description: "The primary care version of the same problem." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "How to describe a first call." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Bios that help clients choose." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new D
  {
    slug: "post-hospital-follow-up-visit-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "post-hospital follow-up visit page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Post-Hospital Follow-Up Visit Page for a Primary Care Practice",
    metaTitle: "Post-Hospital Follow-Up Visit Page for Primary Care",
    metaDescription:
      "How a primary care practice can explain follow-up visits after a hospital stay: how to book, what to bring and who to call. Call (561) 291-2681.",
    answer:
      "A post-hospital follow-up page tells patients and families how to book a visit soon after a hospital stay, what to bring, who to call and what the office will do with the discharge paperwork. Keep it practical, avoid medical advice and send emergencies to 911.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("A visit people search for in a hurry"),
      p(
        "A hospital discharge is a stressful time. A patient or relative is often holding a stack of papers, a list of new instructions and a general message to follow up with the primary care doctor. They search for the practice's website that evening and want to know one thing: how do I book that visit, and how soon can it happen."
      ),
      p(
        "A short page answers the logistics. It does not explain medical care, and it should not suggest what the visit will accomplish. Its job is to remove obstacles to getting an appointment quickly, which is a service the practice can describe honestly."
      ),
      h2("What the page should cover"),
      table(
        ["Topic", "What to say"],
        ["Who this is for", "Patients of the practice who have recently left a hospital or rehabilitation facility, and their family members."],
        ["How to book", "Call the office and say you were recently discharged. Staff will offer the earliest suitable time."],
        ["How soon", "State your real practice, for example that you try to offer a visit within a set number of days when possible. Do not promise a time you cannot meet."],
        ["What to bring", "Discharge papers, the medication list from the hospital, current medicines in their bottles, insurance card and photo ID."],
        ["Records", "How the office obtains the hospital's records, and how the patient can help by signing a release if needed."]
      ),
      h2("Explain what the office does"),
      p(
        "Describe, in a sentence each, the steps the office takes without making clinical statements: the office requests discharge records, a staff member may call the patient after discharge, and the provider reviews the paperwork at the visit. Medicare describes follow-up services of this kind as [transitional care management](https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf), but you do not need billing terms on a patient page. Say what happens, not how it is coded."
      ),
      h3("Keep medical advice off the page"),
      ul(
        "Do not tell patients how to take a medicine or what symptoms to watch for.",
        "Do not list conditions or procedures, and do not suggest a visit will prevent a return to the hospital.",
        "Send emergencies to 911, and refer questions about the hospital's instructions to the hospital or to the office by phone.",
        "Link to your page on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice)."
      ),
      h2("Speak to the family member"),
      p(
        "Often the person on the website is a spouse or adult child. Say who may call on the patient's behalf and what the office will need, such as the patient's date of birth and, for sharing information, the patient's permission. Link to your page on [caregiver and family communication](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) for the rules."
      ),
      p(
        "Finally, tell patients how to reach the office after hours if the instructions are unclear, and point them to the nurse or advice line only if the practice has one. Keep the number and the hours at the top and bottom of the page."
      ),
      h2("Make the phone call easy"),
      p(
        "Tell the front desk to expect these calls and give them a short script: ask whether the patient was recently discharged, ask for the discharge date, offer the earliest suitable visit and remind the caller what to bring. Add the same script to your internal handbook and review it with new staff. A page that promises quick help and a phone line that puts the caller on hold works against itself. After a hospital stay patients may be handed several documents, and a short [explainer about the after visit summary](/guides/after-visit-summary-explained-page-for-a-primary-care-practice-without-clinical-advice) helps them find the one from your office and know who to call about it."
      ),
    ],
    faqs: [
      {
        q: "Can the page promise a visit within a certain number of days?",
        a: "Only if the practice can reliably do it. Many practices aim to see recently discharged patients quickly, but the commitment must be one the schedule supports. A softer line such as we try to see you as soon as we can is honest and safe.",
      },
      {
        q: "Should we mention Medicare billing codes?",
        a: "Not on the patient page. Patients need to know what happens and how to book. Billing details belong in a separate explanation or in a conversation with the billing staff when asked.",
      },
      {
        q: "What if the patient was not previously a patient here?",
        a: "Say whether the practice accepts new patients for this kind of visit. If so, link to the new patient page. If not, suggest the patient call and ask for help finding a practice, without promising one.",
      },
      {
        q: "How do we handle hospital records?",
        a: "Explain that the office will request records from the hospital and that the patient may need to sign a release. Do not post a records form that collects health details on the page itself.",
      },
      {
        q: "Can this page mention rehabilitation or skilled nursing facilities?",
        a: "Yes, as places a patient may be discharged from, in the same logistical terms. Keep it general and avoid describing any care provided at those facilities.",
      },
    ],
    citations: [CMS_TCM, FL_HEALTH, HHS_PRIVACY],
    links: [
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "Front Desk Intake Phone Script", description: "What staff say when a patient calls." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Medical Records Request Page", description: "How patients ask for records." },
      { href: "/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice", label: "Cancellation List And Same-Day Openings", description: "Open earlier slots to patients who need them." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new E
  {
    slug: "well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims",
    keyword: "well-child and school-age checkup page for a family medicine practice without clinical claims",
    category: "How-to",
    title: "Well-Child and School-Age Checkup Page for a Family Medicine Practice",
    metaTitle: "Well-Child and School-Age Checkup Page for Family Medicine",
    metaDescription:
      "Explain well-child and school-age checkups on a family medicine site: who can book, what to bring, and how school forms work. Call (561) 291-2681.",
    answer:
      "A well-child checkup page explains which ages the family medicine practice sees, how to book a routine checkup, what to bring and how school forms are handled. Point parents to the American Academy of Pediatrics for the recommended schedule instead of writing your own medical guidance.",
    author: "Gio LaRoche",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("What parents are looking for"),
      p(
        "Parents of children search for a family doctor for three reasons: they have moved, they have a new baby, or a school form is due. They want to know whether the practice sees children, what ages, how to book a checkup and what to bring. They are not looking for a lesson on child health, and a practice that tries to give one risks saying something that is not accurate for a particular child."
      ),
      p(
        "A good page treats the checkup as an appointment, not as a medical topic. It covers who, when, how and what to bring, and it points to trusted sources for everything clinical."
      ),
      h2("Who the practice sees"),
      p(
        "State the age range plainly, for example that the practice sees children from a stated age to adulthood, or that it sees only patients above a certain age. If the practice refers younger children to a pediatrician, say so and describe how a parent can find one. A family medicine practice that sees all ages should say that a whole family can have the same provider, but not make promises about outcomes."
      ),
      table(
        ["Question a parent has", "Where to answer it"],
        ["Do you see my child?", "The ages the practice sees, in the first lines of the page."],
        ["How do I book?", "Phone number, online request link and the hours for scheduling."],
        ["What do I bring?", "Insurance card, immunization record if you have one, school or camp forms, a list of medicines and questions."],
        ["How long is the visit?", "A realistic range, with a note that school forms may add time."],
        ["Who needs to attend?", "A parent or legal guardian, and the practice's rule about older teens."]
      ),
      h2("Point to the national schedule"),
      p(
        "The American Academy of Pediatrics publishes recommendations for the timing of routine visits through its [Bright Futures](https://www.aap.org/en/practice-management/bright-futures/) program, and its parent site [HealthyChildren.org](https://www.healthychildren.org/) explains them for families. Link to these instead of listing your own schedule, and add a sentence that the provider will recommend visits for each child. This keeps the page accurate as recommendations change."
      ),
      h2("School and camp forms"),
      ul(
        "Say whether the practice completes school, sports and camp forms during the visit or on request, and whether there is a fee.",
        "Tell parents to bring the form, with the child's section filled in, rather than asking staff to find it.",
        "Give a realistic turnaround and a way to ask about the status.",
        "Link to the page for [school, work and camp note requests](/guides/school-work-and-camp-note-requests-page-for-a-primary-care-practice) and the guide to [seasonal school physical pages](/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals)."
      ),
      h3("Vaccines and records"),
      p(
        "If the practice offers childhood immunizations, link to your own immunization page rather than describing them here. Our guide to the [immunization and vaccine availability page](/guides/immunization-and-vaccine-availability-page-for-a-primary-care-practice-without-clinical-claims) shows how to explain availability without clinical claims. Remind parents to bring any record they have."
      ),
      p(
        "Finish with a calm note on what to do if the child is sick, which is a different appointment: call the office and ask for a sick visit, or visit urgent care or call 911 in an emergency."
      ),
      h2("Keep the page friendly"),
      p(
        "Use warm, direct wording and a photo of the real waiting room if you have one. Parents book faster when they can picture the visit. Add the office hours, the languages staff speak and whether the practice offers extended hours for school pickups, so a working parent can see at once whether the schedule fits."
      ),
      p(
        "Check the page before the school year starts and again before sports season, since that is when form requests increase."
      ),
    ],
    faqs: [
      {
        q: "Does a family medicine practice see babies?",
        a: "Some do and some do not. State the youngest age the practice sees on the page, and if newborns go to a pediatrician, say so and invite parents to call for suggestions.",
      },
      {
        q: "How often should children have a checkup?",
        a: "Follow the schedule from the American Academy of Pediatrics, and let the provider recommend visits for each child. Write that sentence on the page and link to the national resource instead of printing your own list.",
      },
      {
        q: "Can the page say that checkups prevent illness?",
        a: "Avoid claims about outcomes. Describe a checkup as a routine visit where the provider talks with the family, completes needed forms and reviews records. Let the provider explain the medical purpose in the room.",
      },
      {
        q: "What should be said about older teens?",
        a: "State your practice's rule about who attends, and refer to your privacy and consent information. Avoid promising a teen that nothing will be shared, since rules depend on the situation and state law.",
      },
      {
        q: "Should we list prices for a checkup?",
        a: "If the practice has a self-pay price, link to the page that lists it. Otherwise say that insurance coverage varies and invite parents to call, and avoid quoting what a plan will pay.",
      },
    ],
    citations: [AAP_BRIGHT, HEALTHY_CHILDREN, FL_HEALTH],
    links: [
      { href: "/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website", label: "Preventive Versus Problem Visit", description: "Explain the two visit types." },
      { href: "/guides/pre-employment-dot-and-sports-physicals-page-for-a-primary-care-practice", label: "Sports And Pre-Employment Physicals", description: "Another form-driven visit." },
      { href: "/guides/family-medicine-versus-internal-medicine-explainer-page-for-a-primary-care-practice", label: "Family Versus Internal Medicine", description: "Who sees which patients." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new F
  {
    slug: "referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer",
    keyword: "referral source page for a counseling practice how doctors schools and clients refer",
    category: "Playbook",
    title: "Referral Page for a Counseling Practice: How Doctors and Schools Refer",
    metaTitle: "Referral Page for a Counseling Practice: Doctors and Schools",
    metaDescription:
      "How a counseling practice can publish a referral page for doctors, schools and clients: who you see, how to refer and privacy. Call (561) 291-2681.",
    answer:
      "A referral page for a counseling practice tells doctors, school staff and clients who the practice serves, how to send a referral, what information is needed and how the referrer will hear back. Ask for the minimum, never post names, and obtain the client's written permission before sharing anything.",
    author: "Liam Costello",
    publishDate: "2026-10-23T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Who uses this page"),
      p(
        "Counseling practices receive referrals from primary care offices, school counselors, pediatricians, clergy, human resources departments and from current clients who want to recommend a friend. Each of them is deciding whether to send someone to you, and a vague website makes them hesitate. They want to know who you see, how fast you can respond and how the process works."
      ),
      p(
        "The primary care side of this exchange is covered in our guide to the [behavioral health referral page for a primary care practice](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims). This page is the counseling practice's own entrance for people who want to send someone to you."
      ),
      h2("What the page should state"),
      table(
        ["Topic", "What to write"],
        ["Who you see", "Ages, languages, formats such as in person or video, and the states where you can see clients."],
        ["What you do not offer", "For example, no emergency services, no court-ordered evaluations or no prescribing, if that is true."],
        ["How to refer", "A phone number and a form for professionals, or a person to contact."],
        ["What you need", "The person's name and phone number, and a note that they have agreed to be contacted."],
        ["What happens next", "How soon you will contact the person and whether you will confirm to the referrer, with consent."]
      ),
      h2("Protect the person being referred"),
      p(
        "The referral form must not collect clinical details. Ask for the minimum needed to make contact, and tell professionals not to send diagnoses, notes or anything sensitive through the form or by regular email. Under HIPAA, sharing information about a client with a referrer generally requires the client's permission, so the page should say that you will confirm with the referrer only if the client agrees in writing. See the HHS [HIPAA Privacy Rule guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html)."
      ),
      ul(
        "Add a plain line: Do not send health information through this form.",
        "Ask the referrer to confirm that the person knows about and agrees to the referral.",
        "Give an alternative way to send documents securely, and explain how it works when asked.",
        "Do not publish any names, quotes or thank-you notes from referrers or clients."
      ),
      h2("Different readers, different short sections"),
      h3("For physicians and clinics"),
      p(
        "Explain how quickly you respond, how your intake works and how you handle an urgent request. Say that you cannot take emergencies and name the 988 Lifeline and 911 as the right route for anyone in crisis. Link to your page on [community resources](/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice) if you list other options."
      ),
      h3("For schools and employers"),
      p(
        "Describe the practice's hours, ages seen and how a student or employee can reach you directly. Explain that you cannot share information without written permission, even with the school or the employer who made the referral."
      ),
      h3("For current clients"),
      p(
        "Offer a simple line: if a friend or family member might benefit from counseling, they are welcome to call us. Avoid rewards, discounts or gifts for referrals, which may violate rules for your profession. Check your license board and ethics code first."
      ),
      h2("Respond fast and keep it simple"),
      p(
        "Referrers remember how quickly they heard back. Decide who checks the referral inbox each business day, how quickly that person will reach the prospective client and what to say if the practice has no openings. Write the answers down and put the first two on the page, so a doctor's office or a school counselor knows what to expect before they send anyone."
      ),
    ],
    faqs: [
      {
        q: "Can we send a thank-you to a referring doctor?",
        a: "A general thank-you that does not mention the client is fine. Confirming that someone became a client requires their written permission. Our guide to the referring doctor feedback loop explains how to do this without sharing private information.",
      },
      {
        q: "Should the page mention insurance?",
        a: "Yes, briefly. Referrers often ask whether you accept a certain plan. State the plans you take and the payment options, and link to your fees page for detail.",
      },
      {
        q: "Is a referral fee or gift allowed?",
        a: "Rules vary by profession and state, and many ethics codes limit payments for referrals. Do not offer rewards without checking with your license board and an attorney.",
      },
      {
        q: "How do we handle a referral for a minor?",
        a: "Ask that a parent or guardian contact the practice, and explain your consent rules in general terms. Link to your page for parents of teens if you have one.",
      },
      {
        q: "What if we cannot take the referral?",
        a: "Say so quickly and offer two or three other places to look, such as the state license lookup or a national directory. A fast and kind decline protects the relationship with the referrer.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, SAMHSA_HELP],
    links: [
      { href: "/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you", label: "Referral Partner Page For Primary Care", description: "The primary care version." },
      { href: "/guides/referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice", label: "Referring Doctor Feedback Loop", description: "Thank referrers without sharing private details." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Crisis wording every counseling site needs." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
