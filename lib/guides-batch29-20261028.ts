// -- Guides batch 29 - 2026-10-28 (afternoon) --
// Guide/AEO pages from the Command Center queue (rows 1364, 1365, 1366, 1369, 1371), built by the page factory to
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
const HHS_INDIVIDUALS = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA information for individuals",
  href: "https://www.hhs.gov/hipaa/for-individuals/index.html",
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
const FL_MH_BOARD = {
  publisher: "Florida Board of Clinical Social Work, Marriage and Family Therapy and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const TELEHEALTH_HHS = {
  publisher: "Telehealth.HHS.gov",
  label: "Telehealth for patients",
  href: "https://telehealth.hhs.gov/patients",
};
const PLAIN_LANGUAGE = {
  publisher: "plainlanguage.gov",
  label: "Federal plain language guidelines",
  href: "https://www.plainlanguage.gov/",
};
const ADA_WEB = {
  publisher: "ADA.gov",
  label: "Web accessibility guidance",
  href: "https://www.ada.gov/resources/web-guidance/",
};
const ADA_EFFECTIVE = {
  publisher: "ADA.gov",
  label: "Effective communication",
  href: "https://www.ada.gov/resources/effective-communication/",
};
const FCC_TRS = {
  publisher: "Federal Communications Commission",
  label: "Telecommunications Relay Service",
  href: "https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};

export const guidesPartThirtyTwo: Guide[] = [
  // ---------------------------------------------------------------- 1365
  {
    slug: "client-location-confirmation-at-the-start-of-a-telehealth-session-page-for-a-counseling-practice",
    keyword: "client location confirmation at the start of a telehealth session page for a counseling practice",
    category: "How-to",
    title: "Client Location Confirmation at the Start of a Telehealth Session",
    metaTitle: "Telehealth Session Location Check Page for Counseling",
    metaDescription:
      "How a counseling practice can explain the location check at the start of a video session: wording, privacy and what to post. Call (561) 291-2681.",
    answer:
      "A location confirmation page tells clients that the counselor will ask where they are at the start of every video session, and why: the practice must know the state where the client sits and how to reach local help. It states the routine plainly and collects nothing on the page itself.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T15:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("Why the first minute of a video session sounds like paperwork"),
      p(
        "Clients who book a video session with a counselor are often surprised by the first question: where are you right now? It can sound like an interrogation or a privacy problem, when it is a routine step. A short page that explains the question ahead of time removes the surprise and saves the opening minutes of a paid hour for the conversation the client actually came to have."
      ),
      p(
        "The step exists for two practical reasons. A counselor's license generally follows the state where the client is sitting, not where the counselor is, so the practice needs to know the client's state for each session. The practice also needs a way to send local help if a session is interrupted and the client cannot be reached, which is a safety routine and not a comment on anyone."
      ),
      h2("What the page should explain"),
      table(
        ["Question a client has", "What the page can say"],
        ["Why do you ask where I am?", "Our counselors are licensed by state. We confirm the state where you are located so we can meet that rule and keep your session valid."],
        ["Do I have to give my street address?", "Say what the practice truly needs. Many practices ask for the city and state at every session and keep a street address on file from intake. State which one applies."],
        ["What if I am traveling?", "Ask clients to tell the office before a session if they will be outside Florida, because some sessions cannot be held across state lines."],
        ["What if I am in a car or at work?", "Explain that the counselor may ask clients to move somewhere private and quiet, and that a rescheduled session is better than a rushed one."],
        ["Who sees my answer?", "Say that it is noted in the client record under the practice's privacy policy and is not shared outside it."]
      ),
      h2("Wording that stays calm and non-clinical"),
      p(
        "Write the page as a description of how sessions begin, in the plain voice of a front desk. Avoid language that hints at risk, diagnosis or emergencies in connection with any one person. The same sentences should read naturally to someone booking a first session and to a long-time client who has simply never read the policy."
      ),
      ul(
        "Name the routine: at the start of each video session your counselor will ask where you are located.",
        "Give the reason in one line: counselors are licensed by state, and we need to know which state you are in.",
        "Describe what is recorded: the city and state you tell us, noted in your record.",
        "Offer an action: if you are traveling, tell us before your session so we can confirm we are able to meet.",
        "Point to the crisis route on the same page: call or text 988, or call 911 for an emergency."
      ),
      h3("Keep crisis information on the website, not in the session script"),
      p(
        "Put the 988 Lifeline and 911 on the page in a visible line, so a client reading it hears the same safety message every practice uses. Do not describe what the counselor does in a crisis, since that depends on each situation and on the clinician's judgment, and a website cannot promise it."
      ),
      h2("Where to link the page"),
      p(
        "Link it from the telehealth instructions, the booking confirmation message and the first-session reminder. Our guide to a [telehealth consent and technology check page](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice) covers the neighboring page where clients test their camera and sound, and the [licensure and states served page](/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice) explains which states your clinicians can see clients in. This page sits between them and answers the question the client is most likely to be asked."
      ),
      p(
        "Keep the wording consistent with the reminder messages you send, so the text a client receives the morning of the session uses the same sentence as the page. If the practice changes how it asks, update the page and the reminder in the same sitting."
      ),
      h2("Check it twice a year"),
      ul(
        "Read the page against your current intake form and consent document so the three agree.",
        "Confirm the states listed on the licensure page still match each clinician's license.",
        "Look at the first-session reminder text and make sure it links to this page.",
        "Ask a staff member who did not write it to read it as a new client and mark anything unclear."
      ),
    ],
    faqs: [
      {
        q: "Why does a counselor ask where I am at the start of a video session?",
        a: "Because licensure generally follows the state where the client is located during the session, and the practice needs that to make sure the session is allowed. It also lets the practice reach local help if a connection drops and the client cannot be reached.",
      },
      {
        q: "Does the page need to collect my location?",
        a: "No. The page explains the routine and collects nothing. The question is asked live at the start of the session and noted in the record under the practice's privacy policy.",
      },
      {
        q: "What if a client is traveling outside Florida?",
        a: "Ask clients to contact the office before the session. Whether a session can proceed depends on the clinician's license and the rules of the state where the client is, so the office decides with the clinician and does not guess on the page.",
      },
      {
        q: "Should the page say what happens in an emergency?",
        a: "Keep it short. Name 988 and 911 and stop. What a clinician does in a particular situation is a clinical decision, and a public page should not describe or promise it.",
      },
      {
        q: "Does this page help the practice show up in search?",
        a: "It answers a plain question clients actually type before a first video session, and it gives answer tools a clear statement to quote. Link it from the telehealth pages so it is easy to find.",
      },
    ],
    citations: [TELEHEALTH_HHS, FL_MH_BOARD, LIFELINE, ACA_ETHICS],
    links: [
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent And Tech Check", description: "The page before the session." },
      { href: "/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice", label: "Licensure And States Served", description: "Where clinicians can see clients." },
      { href: "/guides/google-business-profile-for-a-telehealth-only-counseling-practice-without-a-storefront", label: "Telehealth Only Business Profile", description: "Listing a practice with no office." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1366
  {
    slug: "paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice",
    keyword: "paper forms and phone registration option for patients without internet for a primary care practice",
    category: "How-to",
    title: "Paper Forms and Phone Registration for Patients Without Internet",
    metaTitle: "Paper Forms and Phone Registration Page for Patients",
    metaDescription:
      "How a primary care practice can offer paper forms and phone registration to patients without internet, and word the page clearly. Call (561) 291-2681.",
    answer:
      "A paper forms and phone registration page tells patients who cannot use the internet that they can register by calling the office, picking up forms at the front desk or receiving them by mail. It names the phone number, the hours and what to bring, and it never asks for personal details on the page.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T15:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("Not every patient starts online"),
      p(
        "Most new patient pages assume a phone, an email address and a steady connection. Plenty of real patients have none of those: an older adult who does not own a smartphone, a family sharing one data plan, a person whose connection drops in the middle of a form. If the only way in is a web form, those patients do not complain. They call another practice, or they never call."
      ),
      p(
        "A short page that offers a paper or phone route costs the practice almost nothing. It sends the right patients to the front desk, keeps the online forms for people who want them, and shows search engines and answer tools that the practice has a plain, human way to register."
      ),
      h2("The three routes to offer"),
      table(
        ["Route", "What the page should say"],
        ["Register by phone", "Call the office during the hours listed. A staff member will go through the registration questions with you and note your answers."],
        ["Pick up forms", "Forms are available at the front desk during office hours. A staff member can help you complete them while you are in the office."],
        ["Receive forms by mail", "Ask the office to mail the forms to the address you give. Return them by mail or bring them to your first visit."],
        ["Get help with the online forms", "A family member or friend may help you, and the front desk can walk through each question on the phone."]
      ),
      h2("What to say about timing and what to bring"),
      p(
        "Be specific about time. Tell patients how long the phone registration usually takes in your office, and when the office is best reached. A page that says to call during business hours without naming them forces another call to find out the hours."
      ),
      ul(
        "A photo ID and the insurance card, if the patient has one.",
        "A list of current medicines, written down or in the original bottles. Do not ask for a medical history on the page.",
        "The name and phone number of a person to contact, if the patient wishes to give one.",
        "Any pharmacy name the patient prefers.",
        "The previous doctor's name, if the patient wants records requested."
      ),
      h3("Make the paper route as private as the online one"),
      p(
        "Forms mailed to a home address can be seen by other people in the household, so mark the envelope with the practice's return address only and keep the practice name neutral. Tell patients that returned forms are handled under the same privacy rules as everything else, described in the [HIPAA information for individuals](https://www.hhs.gov/hipaa/for-individuals/index.html)."
      ),
      h2("Where to link the page"),
      p(
        "Place a plain link near the top of the new patient page, in the footer and on the contact page: Prefer paper or phone? The wording matters, since a patient who cannot use the internet may still be reading the page with a relative's help. Our guide to [new patient forms published without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) shows how to keep the online route safe, and this page is its offline counterpart."
      ),
      p(
        "Train the front desk on the same wording. A patient who calls after reading the page should hear the same three options from whoever answers, so they do not need to repeat their request."
      ),
      h2("Keep it from going stale"),
      ul(
        "Confirm every quarter that the phone number rings and the hours on the page match the listing.",
        "Check that the paper forms match the current online versions, down to the last question.",
        "Ask the front desk how many patients used the paper route, and adjust the page if the number is rising.",
        "Test the page with a screen reader and at a large text size, since many of these patients use both."
      ),
    ],
    faqs: [
      {
        q: "Does a practice have to offer paper forms?",
        a: "There is no single rule that applies to every practice, and some patients have a legal right to accommodations. Offering a paper or phone route is simple, kind and keeps new patients from dropping out, so most practices do it whether or not they are required to.",
      },
      {
        q: "Should the page include the registration form to print?",
        a: "Only if the form has no patient information filled in and matches your current version. Many practices prefer to hand out forms at the desk so they always give out the latest copy.",
      },
      {
        q: "Can the front desk take registration answers over the phone?",
        a: "Yes, with the same care as in person: confirm who is on the line, record only what the form asks for, and do not read details aloud where others can hear. Write the process down so every staff member does it the same way.",
      },
      {
        q: "What should the page not say?",
        a: "Do not describe medical conditions, promise appointment times or ask for any personal information. The page names the routes and the phone number, and nothing more.",
      },
      {
        q: "Does this page help with search?",
        a: "It answers questions patients actually type, such as how to register without internet or whether they can fill out forms in person. It also gives answer tools a clear, dated statement to quote.",
      },
    ],
    citations: [HHS_INDIVIDUALS, ADA_WEB, PLAIN_LANGUAGE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "The online route, kept safe." },
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "Front Desk Intake Phone Script", description: "What staff say on the call." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Forms for low vision and low literacy." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1369
  {
    slug: "after-visit-summary-explained-page-for-a-primary-care-practice-without-clinical-advice",
    keyword: "after visit summary explained page for a primary care practice without clinical advice",
    category: "How-to",
    title: "After Visit Summary Explained Page for a Primary Care Practice",
    metaTitle: "After Visit Summary Explained Page for Primary Care",
    metaDescription:
      "How a primary care practice can explain what an after visit summary is, where patients find it and who to call with questions. Call (561) 291-2681.",
    answer:
      "An after visit summary explained page tells patients what the summary is, where it appears in the portal or on paper, what sections it usually contains and who to call if something is unclear. It explains the document and its location and gives no advice about any patient's health.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T15:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("A document most patients receive and few understand"),
      p(
        "After many visits a patient is handed a printed page or sees a new item in the portal called an after visit summary. It is easy to lose, and it is easy to misread: the language is shorthand, the layout varies by system, and no one explains it at the door. Patients then call the front desk to ask what a section means, or they stop reading it at all."
      ),
      p(
        "A short explainer page answers the questions that fill the phone line without touching anything clinical. It describes the document in general, shows where to find it and says who to call, so the front desk can point to a link instead of repeating the same explanation all day."
      ),
      h2("What the page can safely describe"),
      table(
        ["Part of the summary", "How the page can describe it"],
        ["Visit information", "The date, the clinician and the location of the visit, so a patient can match the summary to the right appointment."],
        ["Medicine list", "A list of the medicines on file at the end of the visit. Tell patients to check it against what they take and to call the office about any difference."],
        ["Instructions", "Notes from the clinician for the patient to follow. Do not paraphrase or generalize them on the page; each patient's note is personal."],
        ["Follow-up and referrals", "Any next appointment, test or specialist visit the clinician arranged, and who at the practice to call about scheduling."],
        ["Contact information", "The office number and the portal messaging option, with the hours messages are read."]
      ),
      h2("Where patients find it"),
      p(
        "Give the exact path in your system, written as plain steps with the names patients will see on the screen. If you use a patient portal, name the menu where the summary appears and how long after the visit it is typically available. If you give a paper copy, say so, and say how to request another."
      ),
      ol(
        "Open the patient portal and sign in. Our guide to a [patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) covers how to make that step easy.",
        "Choose the visit history or documents area, whichever your system calls it.",
        "Select the visit by date and open the summary.",
        "If it is missing after the time you stated, call the office and give your name and the visit date."
      ),
      h3("Say what the page will not do"),
      p(
        "State plainly that the page explains the document and does not interpret anyone's results or instructions. A line such as: for questions about your own summary, message or call the care team, keeps the page honest and sends the patient to the person who can answer."
      ),
      h2("Wording that protects privacy"),
      p(
        "Do not show a sample summary with real or realistic patient detail. Use a clearly labeled blank layout with headings only, or describe the sections in words. Remind patients that a summary contains personal information and should be kept somewhere private, as described in the [HIPAA information for individuals](https://www.hhs.gov/hipaa/for-individuals/index.html)."
      ),
      p(
        "Our guide to [after visit follow up emails](/guides/after-visit-follow-up-emails-for-a-primary-care-practice-without-health-details) shows how to tell patients a summary is ready without putting health details in the message. The two pages work together: the email says it is ready, and this page explains it."
      ),
      h2("Keep the page useful"),
      ul(
        "Update the menu names whenever the portal vendor changes its screens.",
        "Ask the front desk which question about summaries they hear most and answer it on the page.",
        "Link the page from the portal login help, the follow-up email template and the contact page.",
        "Read it aloud once. If a sentence sounds like it is giving advice, rewrite it as a description."
      ),
    ],
    faqs: [
      {
        q: "What is an after visit summary?",
        a: "It is a document from the visit that usually lists the visit date, the medicines on file, notes from the clinician and any follow-up arranged. The exact contents depend on the practice and its records system.",
      },
      {
        q: "Where does a patient find it?",
        a: "Usually in the patient portal under visits or documents, or on paper at checkout. The page should name the exact menu in your system and say how to ask for another copy.",
      },
      {
        q: "Can the page explain what the instructions mean?",
        a: "No. Instructions are written for one patient by that patient's clinician. The page can explain the document and tell patients to message or call the care team about their own summary.",
      },
      {
        q: "Should the page show a sample summary?",
        a: "Only a blank layout or a description in words, never a realistic example with names, medicines or results. A sample that looks real can be mistaken for advice and can raise privacy questions.",
      },
      {
        q: "How does this page help the practice?",
        a: "It cuts repeat calls, answers a question patients type into search and gives answer tools a clear description of the document. It also gives the follow-up email a page to link to.",
      },
    ],
    citations: [HHS_INDIVIDUALS, HHS_PRIVACY, PLAIN_LANGUAGE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/after-visit-follow-up-emails-for-a-primary-care-practice-without-health-details", label: "After Visit Follow Up Emails", description: "Telling patients a summary is ready." },
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Patient Portal Login Page", description: "Making sign in easy to find." },
      { href: "/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims", label: "Follow Up Visits Page", description: "Describing follow up visits." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1371
  {
    slug: "deaf-and-hard-of-hearing-patient-access-page-for-a-primary-care-practice-without-clinical-advice",
    keyword: "deaf and hard of hearing patient access page for a primary care practice without clinical advice",
    category: "How-to",
    title: "Deaf and Hard of Hearing Patient Access Page for Primary Care",
    metaTitle: "Deaf and Hard of Hearing Patient Access Page",
    metaDescription:
      "How a primary care practice can post a page for deaf and hard of hearing patients: interpreter requests, relay calls and text contact. (561) 291-2681.",
    answer:
      "A deaf and hard of hearing patient access page tells patients how to book without a voice call, how to ask for a sign language interpreter or other communication aid, and how the office will communicate during the visit. It names real contact routes and makes no promises about any individual patient's care.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T15:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("A phone number alone does not serve every patient"),
      p(
        "Most practices list one phone number and expect a call to start every relationship. A patient who is deaf or hard of hearing may not be able to use it at all, and a patient who can use it with difficulty may dread the first call. When the website offers no other path, that patient has to guess how to book, how to ask for support and whether the office will understand the request."
      ),
      p(
        "A dedicated page replaces the guesswork with a clear set of routes. It tells patients, in words they can use right away, how to reach the office and what the practice will arrange for the visit. It also shows the practice takes communication seriously, which matters to patients and to the staff who answer their requests."
      ),
      h2("The routes the page should list"),
      table(
        ["Need", "What the page can say"],
        ["Book without calling", "Use the online appointment request form or send a text or email to the number and address listed. State the usual reply time."],
        ["Call through a relay service", "Patients may use a telecommunications relay service to call the office by dialing 711. Name the office number to give the operator."],
        ["Ask for an interpreter", "Tell us the language, the date of the visit and the type of support you prefer. We will confirm before the appointment."],
        ["Written communication", "Staff can type or write during the visit, and the clinician can use written notes if the patient prefers."],
        ["Video relay or captioning", "Say which of these the office can use. List only what the office has actually set up."]
      ),
      h2("Write what the office really offers"),
      p(
        "The most common failure of an access page is promising what the office has not arranged. Before you write a line, find out how the practice books interpreters, who pays and how much notice is needed. The federal guidance on [effective communication under the ADA](https://www.ada.gov/resources/effective-communication/) is the place to check what practices generally owe patients, and counsel can confirm the details for your own practice."
      ),
      ul(
        "Name the person or role who handles interpreter requests, with a direct phone number or inbox.",
        "State how many days of notice help the office, and say that short notice requests are still welcome.",
        "Say that family members are not expected to interpret, if that is the practice's policy, and that patients may bring a support person if they wish.",
        "Do not list a vendor's name unless the office has a current agreement with it."
      ),
      h3("Let the patient choose the method"),
      p(
        "Different patients use different communication methods, and preferences are personal. Word the page so the patient states what works, and the office confirms, rather than the office deciding for the patient. A question such as How would you like us to communicate at your visit? invites the answer and sets the right tone."
      ),
      h2("Make the website itself accessible"),
      p(
        "A page for deaf and hard of hearing patients should work for them first. Any video on the practice site needs accurate captions, and any audio message needs a transcript. Our guide to a [website accessibility statement](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) shows how to invite patients to report a barrier, and the guide to [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) covers the wider checks."
      ),
      p(
        "Link the page from the contact page, the footer and the booking page, using plain words such as Deaf and hard of hearing patients. Add the same information to the Google Business Profile description so someone searching on a phone sees it before they reach the site."
      ),
      h2("Review it with real feedback"),
      ul(
        "Test every contact route you list at least once a quarter, including the relay call.",
        "Ask the front desk to log how many requests arrive and how quickly they were answered.",
        "Invite patients to say what is missing, and read the replies with the same care as a complaint.",
        "Update the page the day an arrangement with an interpreter service changes."
      ),
    ],
    faqs: [
      {
        q: "What should a practice put on a deaf and hard of hearing patient access page?",
        a: "The routes to book without a voice call, how to request an interpreter or other communication aid, how the office will communicate during the visit and who handles requests. List only arrangements the office has actually made.",
      },
      {
        q: "Can patients call the office through a relay service?",
        a: "Yes. A telecommunications relay service connects a caller and the office through an operator or a text link, and patients can reach it by dialing 711. The page should give the office number to provide to the operator.",
      },
      {
        q: "Should the page promise an interpreter at every visit?",
        a: "Only if that is the practice's tested process. Otherwise say how to request one, how much notice helps and who will confirm. A promise the office cannot keep does more harm than a clear request process.",
      },
      {
        q: "Does the page need medical or clinical information?",
        a: "No. It describes communication access only. Anything about a patient's hearing or health is a conversation for the visit and the care team, not for a public page.",
      },
      {
        q: "How does this page help the practice be found?",
        a: "It answers questions patients and caregivers actually type, such as whether a doctor offers an interpreter, and it gives answer tools a plain statement to quote. It also helps the practice meet people it would otherwise not reach.",
      },
    ],
    citations: [ADA_EFFECTIVE, FCC_TRS, ADA_WEB, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice", label: "Accommodation Request Page", description: "Asking for support before a visit." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement", description: "Inviting patients to report a barrier." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility", description: "The wider website checks." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1364
  {
    slug: "emergency-contact-request-on-intake-for-a-counseling-practice-without-clinical-detail",
    keyword: "emergency contact request on intake for a counseling practice without clinical detail",
    category: "How-to",
    title: "Emergency Contact Request on Intake for a Counseling Practice",
    metaTitle: "Emergency Contact Request on Counseling Intake Forms",
    metaDescription:
      "How a counseling practice can ask for an emergency contact at intake: what to request, what to say about use and how to word it. Call (561) 291-2681.",
    answer:
      "An emergency contact request on intake asks the client for one person's name, relationship and phone number, and explains in a sentence when the practice would use it. The form collects no clinical detail, the client may decline or name someone else, and the contact is not told that the person is a client.",
    author: "Gio LaRoche",
    publishDate: "2026-10-28T15:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 5,
    sections: [
      h2("A small field that raises a large question"),
      p(
        "Almost every intake packet asks for an emergency contact, and many clients pause on it. Who would the counselor call, and what would they say? A person who is seeing a counselor privately may not want a parent, partner or roommate to know. If the form and the practice's website say nothing, clients fill in a name reluctantly, leave the field empty or ask the front desk and wait for an answer."
      ),
      p(
        "A short explanation next to the field answers the question before it is asked. It makes the request feel routine, it respects the client's privacy, and it gives the practice an accurate contact if a situation ever calls for one."
      ),
      h2("What the field should ask for"),
      table(
        ["Item on the form", "How to word it"],
        ["Name", "The full name of one person the client chooses. Say the client may name a friend, relative or anyone they trust."],
        ["Relationship", "A free text line, so the client is not forced into categories that do not fit."],
        ["Phone number", "The best number to reach that person. Add that the client should confirm the person is willing to be listed."],
        ["Permission statement", "A short line saying when the practice may contact the person and what it would say."],
        ["Option to decline", "A clear way to leave it blank, with a note that the practice will talk about it at the first session."]
      ),
      h2("Say plainly when the contact would be used"),
      p(
        "The wording is where the trust is built. Describe the situations in neutral terms: the practice would contact the person if there were a concern for the client's immediate safety and the client could not be reached, or if the client asked the practice to. Avoid describing symptoms or specific scenarios, which can alarm a reader and drift into clinical language on a page and form that should stay administrative."
      ),
      ul(
        "State what the practice would tell the contact, which is usually only that the practice needs to reach the client.",
        "State what it would not tell them, including that the person is a client, unless the client has agreed.",
        "Tell clients they can change or remove the contact at any time by notifying the office.",
        "Point to the crisis route: call or text 988, or call 911 for an emergency."
      ),
      h3("Match the form to the practice's consent and privacy documents"),
      p(
        "The sentence on the form must agree with the practice's written policy, which is shaped by clinicians' ethics codes and by [HIPAA privacy rules](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html). Ask the clinicians to read the final wording and confirm the practice can do exactly what it says. A promise on a form that staff cannot keep becomes a complaint."
      ),
      h2("Where the request appears"),
      p(
        "The same explanation should appear in the intake packet and on the page that describes the first session. Our guide to an [intake paperwork email before session one](/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice) shows how to prepare clients for the forms without putting private detail in the message, and the guide to a [first time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) covers the earlier step, where the website asks for far less."
      ),
      p(
        "Do not request an emergency contact on the public contact form. That form should collect the least it can to start a conversation, and the emergency contact belongs in the secure intake that follows."
      ),
      h2("Keep it current"),
      ul(
        "Ask the client to confirm the contact at the first session and once a year.",
        "Remove a contact promptly when a client asks, and note the change in the record.",
        "Review the wording whenever the practice updates its privacy notice or consent form.",
        "Have someone outside the practice read the page and form as a new client would and mark anything that feels intrusive."
      ),
    ],
    faqs: [
      {
        q: "Why does a counseling practice ask for an emergency contact?",
        a: "To have a way to reach a trusted person if there is a concern for the client's immediate safety and the client cannot be reached. The practice explains this in the form and in the first session, and the client chooses who is listed.",
      },
      {
        q: "Can a client refuse to name an emergency contact?",
        a: "Practices set their own policies, but a clear option to leave it blank and discuss it at the first session is a respectful default. The form should say what happens if the field is empty so no one is surprised.",
      },
      {
        q: "Will the emergency contact be told the person is a client?",
        a: "The form should say what the practice would and would not disclose. Many practices commit to sharing only that they need to reach the person, unless the client has agreed to more. State the practice's actual policy.",
      },
      {
        q: "Should the website describe crisis situations?",
        a: "No. Name 988 and 911 and stop. Descriptions of situations belong in clinical conversations, and a public page cannot judge any one person's circumstances.",
      },
      {
        q: "Where should the request appear?",
        a: "In the secure intake packet and the first-session page, not on the public contact form. Keep the public form short and collect this detail only after the client has chosen to begin.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, APA_ETHICS, LIFELINE],
    links: [
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "Preparing clients before session one." },
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First Time Client Contact Form", description: "What the website form should ask." },
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent Page", description: "The consent step for video sessions." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
