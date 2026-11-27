// -- Guides batch 58 - 2026-11-27 --
// Ten guides from the Command Center queue (rows 2159, 2162, 2164, 2185-2191), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care and counseling practice owner audience only. Sources fetched and
// read before writing: AHRQ Questions Are the Answer, FTC medical identity theft, Medicare.gov medical nutrition therapy
// and advance care planning, ADA.gov effective communication, Digital.gov plain language, CDC Clear Communication Index,
// IndexNow.org documentation, Google Search Console Help links report, LinkedIn Help create a Page, NIMH children and
// mental health, Got Transition six core elements. Plain practical guidance, no legal advice, no clinical claims, no
// outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const AHRQ = {
  publisher: "Agency for Healthcare Research and Quality",
  label: "Questions Are the Answer",
  href: "https://www.ahrq.gov/questions/index.html",
};
const FTC_MED_ID = {
  publisher: "Federal Trade Commission",
  label: "What To Know About Medical Identity Theft",
  href: "https://consumer.ftc.gov/articles/what-know-about-medical-identity-theft",
};
const MEDICARE_MNT = {
  publisher: "Medicare.gov",
  label: "Medical nutrition therapy services",
  href: "https://www.medicare.gov/coverage/medical-nutrition-therapy-services",
};
const MEDICARE_ACP = {
  publisher: "Medicare.gov",
  label: "Advance care planning coverage",
  href: "https://www.medicare.gov/coverage/advance-care-planning",
};
const ADA_COMM = {
  publisher: "ADA.gov (U.S. Department of Justice)",
  label: "ADA Requirements: Effective Communication",
  href: "https://www.ada.gov/resources/effective-communication/",
};
const DIGITAL_PL = {
  publisher: "Digital.gov (General Services Administration)",
  label: "Plain language guide series",
  href: "https://www.plainlanguage.gov/about/definitions/",
};
const CDC_CCI = {
  publisher: "Centers for Disease Control and Prevention",
  label: "The CDC Clear Communication Index",
  href: "https://www.cdc.gov/ccindex/index.html",
};
const INDEXNOW = {
  publisher: "IndexNow.org",
  label: "IndexNow documentation",
  href: "https://www.indexnow.org/documentation",
};
const GSC_LINKS = {
  publisher: "Google Search Central",
  label: "Links report - Search Console Help",
  href: "https://support.google.com/webmasters/answer/9049606",
};
const LINKEDIN_PAGE = {
  publisher: "LinkedIn Help",
  label: "Create a LinkedIn Page",
  href: "https://www.linkedin.com/help/linkedin/answer/a543852",
};
const NIMH_KIDS = {
  publisher: "National Institute of Mental Health",
  label: "Children and Mental Health: Is This Just a Stage?",
  href: "https://www.nimh.nih.gov/health/publications/children-and-mental-health",
};
const GOT_TRANS = {
  publisher: "Got Transition (The National Alliance to Advance Adolescent Health)",
  label: "Six Core Elements of Health Care Transition",
  href: "https://gottransition.org/six-core-elements/",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty21: Guide[] = [
  // ---------------------------------------------------------------- 2159
  {
    slug: "pre-visit-questionnaire-page-for-a-primary-care-practice-that-explains-why-each-question-is-asked-and-what-stays-private",
    keyword: "a pre-visit questionnaire page for a primary care practice that explains why each question is asked and what stays private",
    category: "Checklist",
    title: "Pre-Visit Questionnaire Page That Explains Why Each Question Is Asked",
    metaTitle: "Pre-Visit Questionnaire Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain why each pre-visit question is asked and who sees the answers, in plain words and without promises. (561) 291-2681.",
    answer:
      "A pre-visit questionnaire page should say what the form is for, why each group of questions is asked, which ones can wait for the room, and where the answers go. Name your own privacy notice instead of paraphrasing it. Patients who understand the reason for a question answer it more often.",
    author: "Liam Costello",
    publishDate: "2026-11-27T15:00:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Why a questionnaire needs its own explanation"),
      p(
        "A long list of questions before a first visit can feel like an interrogation. Patients wonder why the office needs to know about their family, their habits or their mood, and some stop halfway through and call the front desk instead. The call costs staff time, and the half-finished form costs the clinician context at the start of the visit."
      ),
      p(
        "The fix is not a shorter form. It is a short page that sits next to the form and answers the unspoken question: why are you asking me this, and who will read it?"
      ),
      h2("What public sources say about preparing for a visit"),
      p(
        "The federal Agency for Healthcare Research and Quality publishes a short brochure called Questions Are the Answer, which it describes as tips to help patients be prepared before, during and after medical appointments. It also offers a question builder app. Your page can point patients to both, which tells them the practice wants them to ask questions in return."
      ),
      p(
        "The Federal Trade Commission gives patients the matching advice from the other direction. Before sharing an insurance number or health details, it says to ask why the information is needed, how it will be protected, and whether it will be shared and with whom. A good questionnaire page answers those three questions before the patient has to ask them."
      ),
      h2("A table that gives each section a reason"),
      table(
        ["Section of the form", "Plain reason to print beside it"],
        ["Contact and emergency contact", "So the office can reach you about the visit and reach someone you choose if it ever has to"],
        ["Medicines and allergies", "So the clinician starts from what you actually take, not from memory"],
        ["Past care and family background", "So the visit can focus on what matters to you instead of repeating basic questions"],
        ["Daily habits and sleep", "So the conversation starts where you are; you may skip any question and talk about it in the room"],
        ["Mood and stress questions", "Asked of every patient as part of a routine visit, not because of anything you wrote"]
      ),
      h3("Say which answers can wait"),
      p(
        "Mark a few questions as optional and say so in plain words. A patient who can skip a sensitive item without penalty is more likely to finish the rest. Add one line telling them the clinician will not read their answers aloud in front of others and that they can ask to talk about any item in private."
      ),
      h2("Where the answers go and who sees them"),
      p(
        "State only what your office really does. If answers go to the secure patient portal, say so and link to it. If a paper copy is handed over at the desk, say who will scan it. Link to your Notice of Privacy Practices by name rather than summarizing it, because a summary can drift away from the real document."
      ),
      ul(
        "Do not ask patients to email completed forms.",
        "Do not describe the answers as anonymous. They are part of the chart.",
        "Do not promise that no one outside the care team will ever see them. Say who may see them and point to the notice.",
        "Do tell patients how long the form takes, and that they can save it and return."
      ),
      h2("Keep the page short and reachable"),
      p(
        "Put the explanation above the link to the form, keep it to one screen on a phone, and add the office number as a tappable link for anyone who would rather answer by voice. A patient who cannot read small print or use a screen should have an obvious second path. Test it yourself on a phone before it goes live."
      ),
    ],
    faqs: [
      {
        q: "Should the page list every question on the form?",
        a: "No. Group them by section and give one reason for each group. A full list invites patients to answer by email and makes the page hard to keep in step with the form.",
      },
      {
        q: "Can a patient leave questions blank?",
        a: "Say yes for the sensitive ones and mark them optional, if that is your practice's rule. Tell the patient the clinician can raise anything important in the room.",
      },
      {
        q: "Do we promise the answers stay private?",
        a: "Avoid the word promise. Say who may see the answers, such as the care team members involved in the visit, and link to your Notice of Privacy Practices for the details.",
      },
      {
        q: "Where should the page link from?",
        a: "From the new patient page, the booking confirmation and the portal sign-in page, so a patient meets the explanation before the form.",
      },
      {
        q: "How long should the explanation be?",
        a: "One screen on a phone. A short table plus three or four lines of text is enough, with the phone number for anyone who wants to talk it through.",
      },
    ],
    citations: [AHRQ, FTC_MED_ID],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publish forms without exposing data." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What to Bring to a First Appointment", description: "The first-visit checklist." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Forms every patient can finish." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2162
  {
    slug: "dietitian-referral-page-for-a-primary-care-practice-without-outcome-claims",
    keyword: "a dietitian referral page for a primary care practice without outcome claims",
    category: "Checklist",
    title: "Dietitian Referral Page for a Primary Care Practice",
    metaTitle: "Dietitian Referral Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain a referral to a registered dietitian in plain words, with no outcome claims or coverage promises. (561) 291-2681.",
    answer:
      "A dietitian referral page should say who can refer, what the first contact looks like, that coverage depends on the plan, and where to call. Describe the service, not the result. Link to the plan's own rules instead of stating what insurance will pay.",
    author: "Gio LaRoche",
    publishDate: "2026-11-27T15:05:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Why patients search for this"),
      p(
        "Patients hear the word dietitian in a visit and leave the room without knowing what happens next. Who makes the call, who do I call, will my insurance cover it, will the dietitian be in your building. The front desk answers these by phone, one patient at a time."
      ),
      p(
        "A referral page does not replace that call. It makes the call shorter, because the patient already knows the shape of the process."
      ),
      h2("What a public source says about coverage"),
      p(
        "Medicare.gov describes medical nutrition therapy services as nutrition education covered under Part B. Its page says coverage applies to people who have diabetes or kidney disease, or who had a kidney transplant in the last 36 months, that a doctor must refer the patient, and that only a registered dietitian or a nutrition professional who meets certain requirements can provide the service."
      ),
      p(
        "That is one program with its own rules. Your page should not turn it into a promise for every patient. Quote the idea that a referral comes first, link to the Medicare page for patients on that plan, and tell everyone else to check with their own plan before the first appointment."
      ),
      h2("What the page should cover"),
      table(
        ["Question", "What the page says"],
        ["Who refers?", "The clinician at the visit, when they think it fits; patients may also ask whether it is right for them"],
        ["Who sees the patient?", "Say whether the dietitian is in your office, in a partner office or by video, using only facts that are true today"],
        ["What happens first?", "The office sends the referral and either the patient or the dietitian's office makes contact"],
        ["Does insurance cover it?", "It depends on the plan; call the plan before the first appointment, and link to Medicare for people on that plan"],
        ["What should I bring?", "A medicine list, the referral details, and any questions written down"]
      ),
      h3("Leave out the results"),
      p(
        "Do not write that a dietitian will help patients lose weight, lower a number or control a condition. Those are outcome claims, and the evidence for any one patient is the clinician's to discuss in the room. Describe the service as a conversation about food and eating habits that the clinician has asked for."
      ),
      h2("Keep the handoff clear"),
      p(
        "Tell patients who owns each step. The practice sends the referral and any records the dietitian needs. The patient confirms the appointment and checks coverage. The dietitian's office sends a note back to the practice, if that is how it works with your partners."
      ),
      ul(
        "Name the dietitian's office only if the relationship is real and current.",
        "Say how long the practice usually takes to send a referral, only if you track it.",
        "Give one phone number for questions about the referral itself.",
        "Link to your page about a nutrition and weight visit if you offer one."
      ),
      p(
        "Review the page whenever a partner changes. A referral page that names a closed office does more harm than none."
      ),
    ],
    faqs: [
      {
        q: "Can the page say insurance will cover a dietitian?",
        a: "No. Coverage depends on the plan and the reason for the referral. Link to the plan's own rules and tell patients to confirm before the first appointment.",
      },
      {
        q: "Should the page promise results?",
        a: "No. Describe what the service is and who provides it. Results differ by patient and belong in the conversation with the clinician.",
      },
      {
        q: "Do patients need a referral?",
        a: "For Medicare's medical nutrition therapy, the Medicare page says a doctor must refer. For other plans the rule varies, so tell patients to ask their plan.",
      },
      {
        q: "Can we name a specific dietitian?",
        a: "Only if the relationship is current and the dietitian has agreed to be listed. Otherwise describe the type of provider and give the office number.",
      },
      {
        q: "Where does this page link from?",
        a: "From the services page, the referral request page and any visit page where the clinician may raise nutrition.",
      },
    ],
    citations: [MEDICARE_MNT],
    links: [
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "How patients ask for a referral." },
      { href: "/guides/nutrition-and-weight-visit-page-for-a-primary-care-practice-that-describes-the-conversation-without-outcome-claims", label: "Nutrition and Weight Visit Page", description: "Describe the visit, not the result." },
      { href: "/guides/prior-authorization-and-referral-timelines-explained-on-a-primary-care-practice-website", label: "Prior Authorization and Referral Timelines", description: "Set honest expectations." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2164
  {
    slug: "large-print-and-plain-language-handout-request-page-for-a-primary-care-practice",
    keyword: "a large-print and plain-language handout request page for a primary care practice",
    category: "Checklist",
    title: "Large-Print and Plain-Language Handout Request Page",
    metaTitle: "Large-Print Handout Request Page for a Practice",
    metaDescription:
      "How a primary care practice can let patients ask for large print, audio or plainer wording on handouts, with one clear way to ask. (561) 291-2681.",
    answer:
      "A handout request page should list the formats the office can really supply, such as large print or a plain-language version, and give one phone number and one short form to ask. Do not ask the patient to explain a disability. Say how many days a request usually takes, if you track it.",
    author: "Liam Costello",
    publishDate: "2026-11-27T15:10:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("The handout is part of the visit"),
      p(
        "A patient who cannot read the after-visit handout has not really received it. Small type, long sentences and dense tables are barriers for many people, including older patients, patients with low vision, and anyone reading in a second language. Most of them will not complain. They will fold the page and not follow it."
      ),
      p(
        "A request page tells patients the office will give them the same information in a form they can use, and it tells them how to ask without having to explain why."
      ),
      h2("What the ADA page says about formats"),
      p(
        "The ADA.gov page on effective communication uses the term auxiliary aids and services. For people who are blind or have vision loss it lists a qualified reader, information in large print, Braille or electronic form for screen reading programs, and audio recordings of printed material. It also says a covered entity may ask for reasonable advance notice based on how long an aid takes to obtain, may not impose excessive notice requirements, and must honor walk-in requests to the extent possible."
      ),
      p(
        "Your page is not a legal document, and your adviser should review any statement about obligations. Its job is practical: list the formats you can supply, say how to ask, and avoid demanding notice you cannot justify."
      ),
      h2("What plain language means in practice"),
      p(
        "Digital.gov describes plain language as content that is clear and easy to understand, and points to the Plain Writing Act of 2010 as the federal requirement for public content. The CDC Clear Communication Index is a research-based tool with four introductory questions and 20 scored items, and its resources include a guide to everyday words that replace jargon. A practice does not need to score its handouts, but both sources give you the same habits to copy."
      ),
      ul(
        "Put the main message first, in one sentence.",
        "Use everyday words and say what a term means the first time it appears.",
        "Write in the active voice and address the patient as you.",
        "Keep each handout to one topic."
      ),
      h2("What to list on the request page"),
      table(
        ["Format", "Say this only if true"],
        ["Large print", "The office prints the handout in larger type on request"],
        ["Plain-language version", "A shorter version with everyday words is available for named handouts"],
        ["Electronic copy", "A file that works with a screen reader can be sent through the portal"],
        ["Audio or read-aloud", "A staff member can read the handout aloud at the visit"]
      ),
      h3("Make asking easy"),
      p(
        "Offer a tappable phone number and a short form with two fields: name and phone, plus which handout. Do not ask for a reason. Add one line saying patients can also ask at check-in, since many will ask in person."
      ),
      p(
        "Finish by checking the page yourself on a phone and with larger text settings turned on, because a request page that is itself hard to read defeats the purpose."
      ),
    ],
    faqs: [
      {
        q: "Do patients have to explain why they want large print?",
        a: "No. Ask for the handout name and a way to reach them. Asking for a reason discourages requests and adds nothing the office needs.",
      },
      {
        q: "Which formats must we offer?",
        a: "That is a legal question for your adviser. List only the formats you can supply today and say how patients can ask for others.",
      },
      {
        q: "How fast should we promise?",
        a: "Do not promise a number unless you track it. Say that walk-in requests are honored as far as possible and that others take a short time.",
      },
      {
        q: "Does plain language mean less accurate?",
        a: "No. It means clear wording at the right level. A clinician should still review any handout whose meaning could change.",
      },
      {
        q: "Should the page itself be in large print?",
        a: "It should use readable type and respond to larger text settings on a phone. Offer a larger-text option only if your site truly provides one.",
      },
    ],
    citations: [ADA_COMM, DIGITAL_PL, CDC_CCI],
    links: [
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language and Reading Level", description: "Write for the reader." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior-Friendly Website Layout", description: "Large text and caregiver access." },
      { href: "/guides/print-friendly-version-of-a-new-patient-information-page-so-a-primary-care-patient-can-print-directions-and-what-to-bring", label: "Print-Friendly Patient Page", description: "Pages that print well." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2185
  {
    slug: "photo-id-and-insurance-card-at-the-first-visit-page-for-a-primary-care-practice-that-explains-why-they-are-asked-for",
    keyword: "a photo ID and insurance card at the first visit page for a primary care practice that explains why they are asked for",
    category: "Checklist",
    title: "Photo ID and Insurance Card at the First Visit: A Practice Page",
    metaTitle: "Photo ID and Insurance Card at the First Visit Page",
    metaDescription:
      "How a primary care practice can explain why it asks for a photo ID and insurance card at the first visit, and what to do without them. (561) 291-2681.",
    answer:
      "A page about photo ID and insurance cards should give the real reason the office asks, say what happens to the copy, and say what to do if the patient has neither with them. Never ask patients to email scans of either. Invite questions by phone.",
    author: "Gio LaRoche",
    publishDate: "2026-11-27T15:15:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("The request that surprises people"),
      p(
        "Most patients expect to be asked for an insurance card. Fewer expect to be asked for a photo ID, and some wonder whether the request is routine or a sign something is wrong. A short page placed on the new patient page removes the surprise and cuts the number of calls that begin with why do you need my license."
      ),
      h2("What the Federal Trade Commission tells patients"),
      p(
        "The FTC's page on medical identity theft defines it as using someone's personal information, such as a name, Social Security number, or health insurance or Medicare number, to get medical care, prescriptions or devices, or to submit claims. Its advice to patients includes asking, before sharing an insurance number or health details, why it is needed, how it will be protected, and whether it will be shared and with whom. It also suggests asking whether a doctor's office can use a different identifier or only the last four digits of a Social Security number."
      ),
      p(
        "Those are fair questions, and the practice should expect them. Your page can answer them in advance, which also shows patients the office takes the subject seriously."
      ),
      h2("What the page should say"),
      table(
        ["Item", "What to tell the patient"],
        ["Why we ask for a photo ID", "State your office's real reason, such as matching the visit to the right chart; say it in one sentence"],
        ["Why we ask for an insurance card", "So the visit is billed to the right plan; the card also carries plan details the office may need"],
        ["What happens to the copy", "Say whether the office scans it, where it is stored, and who can see it; point to your privacy notice"],
        ["If you forgot one", "Call the office; say what the office does and do not promise it will be accepted later"],
        ["If you have neither", "Call before the visit and ask for help; do not turn patients away on the page"]
      ),
      h3("Say what you do not ask"),
      p(
        "Tell patients the office will never ask for a card number, an ID number or a photo by text or email. This pairs with your scam-message page, because a fraudulent message that pretends to be the practice often asks for exactly these items."
      ),
      h2("Wording that does not alarm"),
      p(
        "Keep the tone routine. Something like: we ask every new patient to bring a photo ID and the current insurance card, so we can match the visit to the right record and the right plan. Avoid fraud language on the request itself. Save the warning for the line about messages the practice will never send."
      ),
      ul(
        "Do not make claims about how your system prevents identity theft.",
        "Do not tell patients the practice is required by law to ask unless your adviser has confirmed it for your state.",
        "Do tell patients how to report a bill for care they did not receive, and point to the FTC page for what to do.",
        "Do give a phone number staffed during office hours."
      ),
      p(
        "Review the page when your registration process changes, for example if you add a kiosk or move to online check-in."
      ),
    ],
    faqs: [
      {
        q: "Must the page say the law requires a photo ID?",
        a: "Only if your adviser has confirmed it for your state and payers. Otherwise give the practice's own reason and leave the law out.",
      },
      {
        q: "Can patients send a scan ahead of time?",
        a: "Only through a secure channel you control, such as the patient portal. Do not invite scans by plain email or text.",
      },
      {
        q: "What if a patient has no insurance card?",
        a: "Tell them to call before the visit. Describe what the office can do, such as checking the plan by phone, without promising an outcome.",
      },
      {
        q: "Should the page mention identity theft?",
        a: "Briefly, and by pointing to the FTC page. Keep the main request wording calm and routine.",
      },
      {
        q: "Who should answer the phone questions?",
        a: "The front desk, using a short script that matches the page, so patients hear the same reason in both places.",
      },
    ],
    citations: [FTC_MED_ID],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What to Bring to a First Appointment", description: "The first-visit checklist." },
      { href: "/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients", label: "Scam Texts and Emails Notice", description: "What the practice will never send." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Which plans you take." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2186
  {
    slug: "bing-webmaster-tools-and-indexnow-for-a-medical-practice-website",
    keyword: "Bing Webmaster Tools and IndexNow for a medical practice website",
    category: "How-to",
    title: "Bing Webmaster Tools and IndexNow for a Medical Practice Website",
    metaTitle: "Bing Webmaster Tools and IndexNow for a Practice",
    metaDescription:
      "What IndexNow is, what Bing Webmaster Tools can show a practice owner, and whether a small medical practice website needs to do anything. (561) 291-2681.",
    answer:
      "IndexNow is a way for a website to tell participating search engines when pages are added, changed or deleted. A small practice may not need to set it up, since many website platforms handle it. Bing Webmaster Tools can show whether your site already sends those notices and whether Bing received them.",
    author: "Gio LaRoche",
    publishDate: "2026-11-27T15:20:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Why a practice owner would care"),
      p(
        "Most patients find a practice through Google, so most of the work in this area goes into Search Console and the Google Business Profile. Bing is smaller, but it feeds other tools and some patients use it, so a practice that has already covered the basics can spend a short afternoon on it. The question is what to do and what to skip."
      ),
      h2("What IndexNow is, in the protocol's own words"),
      p(
        "The IndexNow documentation describes a protocol for notifying search engines when URLs are added, updated or deleted. A site can submit one URL with a simple request or up to 10,000 URLs in one batch. The page says participating engines share submitted URLs with one another, and it does not name the engines. That matters: do not assume every search engine you care about takes part, and keep using Search Console for Google."
      ),
      p(
        "Bing's own start page says submitted URLs are generally prioritized for crawling over other known URLs, and also says it does not guarantee that a page will be crawled or indexed. The documentation makes the same point about the reply: an HTTP 200 only means the engine received the submission."
      ),
      h2("How the key file works"),
      ul(
        "You generate a key of 8 to 128 characters that proves you own the host.",
        "You host a UTF-8 text file containing that key. The documentation strongly recommends placing it at the root of the site.",
        "You submit URLs together with the key. Search engines fetch the file to check ownership.",
        "URLs that do not belong to the host, or a key that does not match, are rejected."
      ),
      p(
        "Bing adds that if your platform or a supported plugin or content delivery network already supports IndexNow, setup may be unnecessary or simpler. For most practices that is the answer: ask whoever hosts the site whether it already sends the notices."
      ),
      h2("What Bing Webmaster Tools is for here"),
      p(
        "Bing says you can use Bing Webmaster Tools to check whether your site already publishes URL changes through IndexNow and to verify that your submitted URLs were received. That makes it a read-back tool, which suits a practice owner who wants to confirm what the vendor says was set up."
      ),
      table(
        ["Question", "Where to look"],
        ["Does the site already send IndexNow notices?", "Bing Webmaster Tools, plus a question to the site host"],
        ["Was a changed page received?", "Bing Webmaster Tools submission view"],
        ["Is a page indexed on Google?", "Search Console, not IndexNow"],
        ["Where does the key file live?", "At the site root, as the documentation recommends"]
      ),
      h3("What to skip"),
      p(
        "Do not write your own submission script for a site of a few dozen pages. Do not pay for a tool that promises faster rankings from it. Do not treat a received notice as an index entry. Add the check to the monthly routine you already run and move on."
      ),
    ],
    faqs: [
      {
        q: "Does IndexNow make pages rank higher?",
        a: "No. It tells participating engines a page changed. Bing says it does not guarantee crawling or indexing, and ranking is a separate matter.",
      },
      {
        q: "Does Google use IndexNow?",
        a: "The IndexNow documentation does not name the participating engines, so do not rely on it for Google. Use Search Console for Google.",
      },
      {
        q: "Do we need a developer?",
        a: "Often not. If the platform or a plugin supports IndexNow, setup may be a setting. Ask the site host first.",
      },
      {
        q: "Is the key file a security risk?",
        a: "It only proves ownership of the host and is meant to be public. Do not reuse a password as a key.",
      },
      {
        q: "How often should we check?",
        a: "Once a month, with the other checks in your marketing routine. Look for received notices after you publish or remove a page.",
      },
    ],
    citations: [INDEXNOW],
    links: [
      { href: "/guides/apple-maps-and-bing-places-for-a-medical-practice", label: "Apple Maps and Bing Places", description: "Map listings beyond Google." },
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "XML Sitemaps and robots.txt", description: "What crawlers read first." },
      { href: "/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website", label: "Page Indexing Report Explained", description: "Read the Google side." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2187
  {
    slug: "linkedin-company-page-for-a-counseling-practice",
    keyword: "a LinkedIn company page for a counseling practice",
    category: "How-to",
    title: "LinkedIn Company Page for a Counseling Practice",
    metaTitle: "LinkedIn Company Page for a Counseling Practice",
    metaDescription:
      "Whether a counseling practice needs a LinkedIn Page, who should own it, and what to post and leave off so it supports referrals and hiring. (561) 291-2681.",
    answer:
      "A LinkedIn Page is a free, public profile for the practice that referral sources, employers and job candidates can find. It needs a personal account to create, and the creator becomes the super admin. Post practice news only. Never post anything about clients, and keep the details matching your website.",
    author: "Liam Costello",
    publishDate: "2026-11-27T15:25:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Who looks at a counseling practice on LinkedIn"),
      p(
        "Clients rarely start there. The audience is other professionals: physicians and school staff who refer, employers who hire a practice for workplace programs, and clinicians who want to join the team. When any of them hears your practice name, they search it. If a profile appears with the wrong address or no description, it reflects badly on the practice."
      ),
      h2("What LinkedIn's own help page says"),
      p(
        "LinkedIn Help states that creating a Page is free and helps represent an organization on LinkedIn. Pages can help members learn about your business, services and job opportunities. The page types are Company, Showcase and Educational institution, and a counseling practice is the Company type."
      ),
      p(
        "To create one you must have a LinkedIn account, and you must tick a box confirming you have the right to act on behalf of the organization. The creator becomes the super admin and can add other admins. The help page also says creating a Page is not supported on Android mobile devices, so use a computer or an iPhone."
      ),
      h2("Set it up so it stays correct"),
      table(
        ["Field", "What to do"],
        ["Name", "Use the exact practice name from your website and Google profile"],
        ["Website", "The main site address, not a booking widget"],
        ["Address and phone", "Match the website exactly so listings agree"],
        ["About text", "Two or three plain sentences about services and who you serve, with no outcome claims"],
        ["Admins", "Two people, so one absence does not lock the practice out"]
      ),
      h3("Choose the owner carefully"),
      p(
        "A page tied to one clinician's personal account becomes a problem when that clinician leaves. Make the practice owner or manager an admin with a role they will keep, add a second admin, and write the access in the same sheet that records your other accounts."
      ),
      h2("What to post and what to leave off"),
      ul(
        "Do post new clinicians joining, new office hours and community talks the practice gave.",
        "Do post job openings, using the same wording as your careers page.",
        "Do not post client stories, thank-you notes from clients or anything that could identify a client.",
        "Do not describe results or make promises about treatment.",
        "Do not post photos taken in the waiting room."
      ),
      p(
        "One short post a month is enough. A quiet page that is accurate is better than an active page that says something the website does not."
      ),
      p(
        "Link to the page from your website footer and email signature so referral sources can find it. Check it once a quarter against your website and Google profile."
      ),
    ],
    faqs: [
      {
        q: "Is a LinkedIn Page worth the time?",
        a: "For referrals and hiring, a basic accurate page is a small task. For finding clients directly, it matters much less than your Google profile and website.",
      },
      {
        q: "Should clinicians list the practice on their own profiles?",
        a: "Yes, if they are willing. Ask them to use the exact practice name so their profiles link to the Page.",
      },
      {
        q: "Can we pay to promote posts?",
        a: "That is an advertising decision with its own rules. Keep this page to the free profile and do not name clinical results in any ad.",
      },
      {
        q: "What if someone creates a duplicate page?",
        a: "Check for one before you create yours. If a duplicate exists, ask LinkedIn through its help pages how to claim or report it.",
      },
      {
        q: "Can we post about mental health awareness days?",
        a: "Yes, as practice news such as an open talk or a resource list, without client details or claims.",
      },
    ],
    citations: [LINKEDIN_PAGE],
    links: [
      { href: "/guides/introduction-letter-to-local-primary-care-offices-from-a-counseling-practice-without-patient-details", label: "Introduction Letter to Primary Care Offices", description: "Reach referral sources." },
      { href: "/guides/careers-page-and-job-posting-markup-for-a-medical-practice", label: "Careers Page and Job Posting Markup", description: "Make openings findable." },
      { href: "/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer", label: "Referral Source Page", description: "How doctors and schools refer." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2188
  {
    slug: "child-counseling-first-visit-page-for-parents-at-a-counseling-practice",
    keyword: "a child counseling first visit page for parents at a counseling practice",
    category: "Checklist",
    title: "Child Counseling First Visit Page for Parents",
    metaTitle: "Child Counseling First Visit Page for Parents",
    metaDescription:
      "How a counseling practice can explain a child's first visit to parents: who attends, what to bring and how to reach the office. (561) 291-2681.",
    answer:
      "A first visit page for parents should say who attends, what the clinician will ask, what to bring and how to reach the office, in plain words. Do not promise results or diagnose. Put the crisis numbers where a parent will see them before any form.",
    author: "Gio LaRoche",
    publishDate: "2026-11-27T15:30:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("The parent is the first visitor"),
      p(
        "When a child is the client, the person reading your website is a worried parent. They want to know what the first visit looks like, whether they stay in the room, and what the office will want from them. A page that answers those questions makes the first call easier."
      ),
      h2("What the National Institute of Mental Health says to parents"),
      p(
        "The NIMH publication Children and Mental Health: Is This Just a Stage? says parents should consider getting help if a child's behavior or emotions last for weeks or longer, or if they cause distress or interfere with school, home or friendships. It suggests starting with people who often interact with the child, such as a teacher, and then talking with the child's pediatrician or health care provider, who can offer a referral to a mental health professional who evaluates and treats children."
      ),
      p(
        "The same page says that if a child's behavior is unsafe, or the child talks about hurting themselves or someone else, parents should seek help immediately, call 911 in a life-threatening situation, and can call or text 988. Print that on your page near the top, in your own words."
      ),
      h2("What to put on the page"),
      table(
        ["Topic", "What the page says"],
        ["Who comes", "Whether a parent attends all of the first visit, part of it, or only the first few minutes; use your real practice"],
        ["What the clinician asks", "Questions about what the parent has seen, school and family; no promise of a diagnosis"],
        ["What to bring", "Notes on what you have observed, school reports if you have them, and any past records the parent chooses to share"],
        ["Consent", "Who must sign and who may bring the child; link to your consent page and have your adviser approve the wording"],
        ["How to reach us", "A tappable phone number and a short request form with name and phone only"]
      ),
      h3("Say what NIMH suggests to prepare"),
      p(
        "The NIMH page tells parents to describe their child's behavior and what they have observed, share what they have learned from others such as teachers, and be ready to discuss developmental history, relationships, interests and past treatment. It also suggests having questions ready for prospective providers. Turn those into a short list on your page and invite parents to ask."
      ),
      h2("Wording to avoid"),
      ul(
        "Do not name conditions or suggest that a visit will find or treat one.",
        "Do not promise that sessions will change a child's behavior.",
        "Do not describe a child client in any way that could identify them.",
        "Do not ask for symptoms in the request form."
      ),
      p(
        "Describe the first visit as a conversation to see whether the practice is a good fit for the family. Say what happens afterward in one line: the clinician talks with the parent about next steps."
      ),
    ],
    faqs: [
      {
        q: "Should the page say what ages the practice sees?",
        a: "Yes. State the age range plainly, and link to your ages-seen page if you have one. Parents ask this before anything else.",
      },
      {
        q: "Can the page say counseling helps children?",
        a: "Avoid outcome claims. Describe what happens at the visit and what the practice offers, and leave the effect to the clinician's conversation with the family.",
      },
      {
        q: "Do we ask for school records on the form?",
        a: "Mention that parents may bring them. Do not ask for uploads on the public page, and say how the practice receives documents securely.",
      },
      {
        q: "What if the parent is unsure counseling is right?",
        a: "Point them to the child's pediatrician, as the NIMH page does, and offer a short call with the office.",
      },
      {
        q: "Where do crisis numbers go?",
        a: "Near the top and again near the form. Use 988 and 911 wording that matches your emergency page.",
      },
    ],
    citations: [NIMH_KIDS],
    links: [
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page for Parents", description: "Consent and confidentiality." },
      { href: "/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims", label: "Parenting and Family Therapy Page", description: "Describe the service plainly." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What a new client needs to see." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2189
  {
    slug: "advance-care-planning-visit-page-for-a-primary-care-practice",
    keyword: "an advance care planning visit page for a primary care practice",
    category: "Checklist",
    title: "Advance Care Planning Visit Page for a Primary Care Practice",
    metaTitle: "Advance Care Planning Visit Page for a Practice",
    metaDescription:
      "How a primary care practice can explain an advance care planning visit, what to bring and where forms come from, with no legal advice. (561) 291-2681.",
    answer:
      "An advance care planning page should describe the conversation, say who to bring, and point to the state's own forms and to an attorney for legal questions. Do not interpret the law and do not tell anyone what to choose. Say that plans can be updated at any time.",
    author: "Liam Costello",
    publishDate: "2026-11-27T15:35:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("A conversation people put off"),
      p(
        "Patients and families often wait for a crisis before they talk about future care, and then the talk happens in a hallway. A calm page that says the practice is willing to have the conversation in an ordinary visit lowers the barrier. It also shows older patients and their adult children that the office will not rush them."
      ),
      h2("What Medicare.gov says"),
      p(
        "Medicare.gov describes advance care planning as discussing and preparing for the care you would get in the future if you need help making decisions for yourself. It says you may choose to complete an advance directive, a legal document that records your wishes about medical treatment if you cannot make decisions. It lists two parts: a health care proxy, sometimes called durable power of attorney, who is someone you trust to decide for you, and a living will, which describes treatments you do or do not want."
      ),
      p(
        "The same page says Part B covers voluntary advance care planning as part of the Welcome to Medicare visit and yearly Wellness visits, and that Medicare may also cover it as part of medical treatment. It says you can talk about an advance directive with an attorney or your health care provider, that you can update it at any time, and that you should think carefully about who you want to speak for you. Do not state cost or coverage terms on your own page. Link to Medicare for them."
      ),
      h2("What the page should cover"),
      table(
        ["Question", "What the page says"],
        ["What is the visit?", "A conversation about wishes for future care, at a regular or scheduled visit; the clinician does not make choices for the patient"],
        ["Who can come?", "A family member or the person the patient is considering as a proxy, if the patient wishes"],
        ["What should I bring?", "Any existing documents, the name of the person being considered, and questions"],
        ["Where do the forms come from?", "Forms and rules vary by state; say where your office sends patients, and suggest an attorney for legal questions"],
        ["Can I change my mind?", "Yes; plans can be updated at any time"]
      ),
      h3("Keep the law out of it"),
      p(
        "Do not explain what a document does legally in your state. Do not say a form is valid, and do not tell patients which to use. Name the conversation, name the kinds of document, and send them to the state resource or an attorney. Have your adviser read the page once."
      ),
      h2("Say how to start"),
      ul(
        "Give the phone number and say a patient can ask at any visit.",
        "Mention the yearly wellness visit page if you have one, since the Medicare page ties the topic to that visit.",
        "Tell patients to bring the person they have in mind as a proxy, if they are comfortable doing so.",
        "Say plainly that scheduling the conversation does not commit anyone to anything."
      ),
      p(
        "Use gentle wording and short sentences. Many readers are adult children looking on behalf of a parent, so address both."
      ),
    ],
    faqs: [
      {
        q: "Does the page tell patients what to put in a living will?",
        a: "No. It describes the conversation and points to state resources and an attorney. Choices are the patient's.",
      },
      {
        q: "Can we say Medicare covers this visit?",
        a: "Say that Medicare covers voluntary advance care planning in certain situations and link to the Medicare page. Leave cost and terms to Medicare.",
      },
      {
        q: "Should the page name a proxy form?",
        a: "Only if your state publishes one and your adviser approves the link. Otherwise send patients to the state health department or an attorney.",
      },
      {
        q: "Can a family member book it for a patient?",
        a: "Describe how your office handles that, using your caregiver communication policy, and link to it.",
      },
      {
        q: "Is this page only for older patients?",
        a: "It is most often searched by older patients and their families, but any adult may ask. Keep the wording open to everyone.",
      },
    ],
    citations: [MEDICARE_ACP],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "Describe the yearly visit." },
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Caregiver Communication Policy Page", description: "Who may speak for a patient." },
      { href: "/guides/care-coordinator-and-patient-navigator-page-for-a-primary-care-practice", label: "Care Coordinator Page", description: "Who helps with next steps." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2190
  {
    slug: "pediatric-to-adult-care-transition-page-for-a-family-medicine-practice",
    keyword: "a pediatric to adult care transition page for a family medicine practice",
    category: "Checklist",
    title: "Pediatric to Adult Care Transition Page for a Family Practice",
    metaTitle: "Pediatric to Adult Care Transition Page for a Practice",
    metaDescription:
      "How a family medicine practice can explain moving from a pediatrician to adult care, what records to bring and who to call. (561) 291-2681.",
    answer:
      "A transition page should say at what age the practice welcomes young adults, how a pediatric record arrives, and what the first adult visit covers. Use a published framework rather than inventing your own. Speak to both the young person and the parent.",
    author: "Gio LaRoche",
    publishDate: "2026-11-27T15:40:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Two readers on one page"),
      p(
        "A teenager turning eighteen and the parent who has managed every appointment both land on this page. One wants to know whether the new office will treat them as an adult. The other wants to know what happens to the records, the prescriptions and the relationship with the old pediatrician."
      ),
      p(
        "Family medicine practices are well placed to answer, because they often see the whole family. The page makes that strength visible."
      ),
      h2("A published framework to follow"),
      p(
        "Got Transition, a national program on health care transition, publishes the Six Core Elements of Health Care Transition. Its page lists them with age ranges: a transition policy and care guide for ages 12 to 14, tracking and monitoring, readiness assessment and planning for ages 14 to 18, transfer of care for ages 18 to 21, and confirming that the transfer is complete for ages 18 to 23."
      ),
      table(
        ["Element and age range on the page", "What a practice page can say"],
        ["Policy and guide, ages 12 to 14", "The practice's written approach to transition, shared with families"],
        ["Tracking and monitoring, ages 14 to 18", "That the office keeps track of where each young person is in the process"],
        ["Readiness, ages 14 to 18", "That the office asks about self-care skills and offers education on what comes up"],
        ["Planning, ages 14 to 18", "That a plan and a summary of the young person's health are prepared"],
        ["Transfer of care, ages 18 to 21", "How the first adult visit is booked and records move"],
        ["Completion, ages 18 to 23", "That the office confirms the transfer and asks for feedback"]
      ),
      p(
        "Use these only as far as your practice actually does them. A page that lists all six when the office does two is a promise it cannot keep."
      ),
      h2("What families need to know"),
      ul(
        "The age at which the practice welcomes new young adult patients, stated plainly.",
        "How to ask the pediatric office to send records, and whom to call at your practice to confirm they arrived.",
        "That a young adult may manage their own appointments, and how a parent can be involved if the young person agrees.",
        "That the first visit is an ordinary visit and a chance to ask questions."
      ),
      h3("Be honest about privacy"),
      p(
        "A parent may not receive the information they once did. Say that the practice follows its own caregiver communication policy and link to it. Do not describe legal rules in your own words, and let your adviser read the wording."
      ),
      h2("Make the next step obvious"),
      p(
        "Finish with a tappable phone number and a short request form asking only for name, phone and best time. Add the records request page link and the portal sign-in page, since young adults often create their own portal account at this point."
      ),
      p(
        "Review the page each year in the spring, before graduation season, when most families begin asking."
      ),
    ],
    faqs: [
      {
        q: "Should the page name an exact age?",
        a: "Name the age at which your practice takes new young adult patients, and say what happens before that if you see the teen already. Use only what is true.",
      },
      {
        q: "Do we need to follow the Six Core Elements?",
        a: "No. They are a published framework. Mention the ones your practice actually uses and link to the source.",
      },
      {
        q: "Who requests the pediatric records?",
        a: "Usually the patient, once an adult, signs a release. Explain your office's process and link to your records request page.",
      },
      {
        q: "Can parents stay involved?",
        a: "If the young adult agrees. Describe the practice's own policy and link to it rather than interpreting the law.",
      },
      {
        q: "Does this apply to special health needs?",
        a: "The framework covers all young people. Do not make claims about specific conditions on a public page. Invite families to call the office.",
      },
    ],
    citations: [GOT_TRANS],
    links: [
      { href: "/guides/ages-seen-and-pediatric-age-range-page-for-a-family-medicine-practice", label: "Ages Seen Page", description: "State the age range plainly." },
      { href: "/guides/adolescent-visit-and-parent-presence-page-for-a-family-medicine-practice-without-legal-advice", label: "Adolescent Visit and Parent Presence", description: "Teens and parents in the room." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Medical Records Request Page", description: "How records move." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2191
  {
    slug: "reading-the-search-console-links-report-to-see-which-sites-link-to-a-counseling-practice",
    keyword: "reading the Search Console links report to see which sites link to a counseling practice",
    category: "How-to",
    title: "Reading the Search Console Links Report for a Counseling Practice",
    metaTitle: "Reading the Search Console Links Report",
    metaDescription:
      "How a counseling practice owner can read the Search Console Links report to see which sites link to the website, and what its limits are. (561) 291-2681.",
    answer:
      "The Links report in Search Console lists the sites that link to yours, the pages they link to, and the anchor text, plus how your own pages link to each other. It is a sample, not a full list. Read it monthly for new directory and referral links, and for pages with no inbound links.",
    author: "Liam Costello",
    publishDate: "2026-11-27T15:45:00Z",
    dateModified: "2026-11-27",
    readMinutes: 5,
    sections: [
      h2("Why the report is worth ten minutes a month"),
      p(
        "Links from other sites are one way people and search engines find a practice. A counseling practice earns them from directories, from referral partners and from local organizations. The Links report is the free place to see which of those links Google has noticed, so an owner can tell whether the work of listing the practice is showing up."
      ),
      h2("What the report contains"),
      p(
        "Google's help page says the report has two parts. External links show backlinks from other sites, including top linked pages, top linking sites and top linking text. Internal links show links within your own site, including which pages are linked most often and which pages link to a given page."
      ),
      table(
        ["Section", "What an owner can learn"],
        ["Top linked pages", "Which of your pages other sites point to; often the home page"],
        ["Top linking sites", "Which sites link to you, such as directories and partner offices"],
        ["Top linking text", "The words other sites use for your practice; a name that differs from yours is worth fixing"],
        ["Internal links", "Which pages your own site links to most, and which pages have almost none"]
      ),
      h2("Know the limits before you act"),
      p(
        "Google lists the limits itself. Tables are capped at 1,000 rows. Duplicate links from the same source URL to the same target are combined. The report is not a comprehensive list of every link, but a sample, and it can include links that have since been removed or pages that no longer exist. It does not show whether a link is marked nofollow. Data is grouped by root domain and canonical URL."
      ),
      p(
        "That means a small number does not prove a problem and a long list does not prove success. Compare month to month instead of reading a single count."
      ),
      h3("A ten-minute routine"),
      ul(
        "Open the external links view and note any new linking site since last month.",
        "Check the top linking text for your practice name, and ask the linking site to fix a wrong one.",
        "Open the internal links view and look for important pages near the bottom of the list.",
        "Write the date and one line in your marketing change log."
      ),
      h2("What to do with what you find"),
      p(
        "If a directory lists an old address, fix it through the directory and your citation sheet. If a service page has almost no internal links, add a sentence linking to it from a related page, written as a real sentence rather than a list of links. If a link looks odd, do not rush to disavow it; note it and ask your SEO person."
      ),
      p(
        "Do not buy links to raise the count. Earn them by being listed, by speaking in the community and by being useful to the people who refer to you."
      ),
    ],
    faqs: [
      {
        q: "Does a link mean Google counts it?",
        a: "Not necessarily. The report does not say whether a link is nofollow, and it is a sample. Treat it as a view of what Google has noticed, not a score.",
      },
      {
        q: "Why do I see links to pages that no longer exist?",
        a: "Google says the report can include links that have been removed or to pages that no longer exist. Redirect old addresses that still get links.",
      },
      {
        q: "How many links should a counseling practice have?",
        a: "There is no right number. Look for steady, relevant additions such as directories and referral partners.",
      },
      {
        q: "Who should look at it?",
        a: "The practice owner or office manager, monthly, with the same login access level used for the other Search Console reports.",
      },
      {
        q: "Should we ask other sites for links?",
        a: "Ask partners and directories to list the practice correctly. Do not pay for links or trade them in bulk.",
      },
    ],
    citations: [GSC_LINKS],
    links: [
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "How to Read Google Search Console", description: "The other reports." },
      { href: "/guides/backlinks-for-a-medical-practice-safe-vs-penalized", label: "Backlinks: Safe vs Penalized", description: "What helps and what hurts." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking for a Practice Website", description: "Link your own pages." },
      LOC,
    ],
  },
];
