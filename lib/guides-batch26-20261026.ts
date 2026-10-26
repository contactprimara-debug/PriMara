// -- Guides batch 26 - 2026-10-26 --
// Guide/AEO pages from the Command Center queue (rows 1272-1281) plus five new in-niche rows, built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound
// links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

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
const NIMH_HELP = {
  publisher: "National Institute of Mental Health",
  label: "Help for mental illnesses",
  href: "https://www.nimh.nih.gov/health/find-help",
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
const GBP_HOURS = {
  publisher: "Google Business Profile Help",
  label: "Edit your business hours",
  href: "https://support.google.com/business/answer/3038177",
};
const DOL_FMLA = {
  publisher: "U.S. Department of Labor",
  label: "Family and Medical Leave Act (FMLA)",
  href: "https://www.dol.gov/agencies/whd/fmla",
};
const DOL_FMLA_FORMS = {
  publisher: "U.S. Department of Labor",
  label: "FMLA forms",
  href: "https://www.dol.gov/agencies/whd/fmla/forms",
};
const PCI = {
  publisher: "PCI Security Standards Council",
  label: "Payment card security standards",
  href: "https://www.pcisecuritystandards.org/",
};
const CMS_NOSURPRISES = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act and good faith estimates",
  href: "https://www.cms.gov/nosurprises",
};
const CDC_INFECTION = {
  publisher: "Centers for Disease Control and Prevention",
  label: "Infection control in healthcare settings",
  href: "https://www.cdc.gov/infection-control/",
};
const FL_HEALTH = {
  publisher: "Florida Department of Health",
  label: "Florida Department of Health",
  href: "https://www.floridahealth.gov/",
};
const MEDICARE_MH = {
  publisher: "Medicare.gov",
  label: "Mental health care (outpatient)",
  href: "https://www.medicare.gov/coverage/mental-health-care-outpatient",
};
const CHILD_WELFARE = {
  publisher: "Child Welfare Information Gateway",
  label: "Adoption and foster care resources",
  href: "https://www.childwelfare.gov/",
};
const FL_DCF = {
  publisher: "Florida Department of Children and Families",
  label: "Florida Department of Children and Families",
  href: "https://www.myflfamilies.com/",
};
const MEDICARE_WELCOME = {
  publisher: "Medicare.gov",
  label: "Welcome to Medicare preventive visit",
  href: "https://www.medicare.gov/coverage/welcome-to-medicare-preventive-visit",
};
const MEDICARE_WELLNESS = {
  publisher: "Medicare.gov",
  label: "Preventive visit and yearly wellness exams",
  href: "https://www.medicare.gov/coverage/preventive-visit-yearly-wellness-exams",
};
const AMA_PRIOR_AUTH = {
  publisher: "American Medical Association",
  label: "Prior authorization practice resources",
  href: "https://www.ama-assn.org/practice-management/prior-authorization",
};
const AHRQ_COORD = {
  publisher: "Agency for Healthcare Research and Quality",
  label: "Care coordination",
  href: "https://www.ahrq.gov/ncepcr/care/coordination.html",
};
const FCC_TEXTS = {
  publisher: "Federal Communications Commission",
  label: "Stop unwanted robocalls and texts",
  href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
};

export const guidesPartTwentyNine: Guide[] = [
  // ---------------------------------------------------------------- 1272
  {
    slug: "holiday-season-scheduling-and-availability-announcement-for-a-counseling-practice",
    keyword: "holiday season scheduling and availability announcement for a counseling practice",
    category: "How-to",
    title: "Holiday Season Scheduling Announcement for a Counseling Practice",
    metaTitle: "Holiday Season Scheduling Notice for a Counseling Practice",
    metaDescription:
      "What a counseling practice should announce before the holidays: closed days, booking options, crisis resources and return dates. Call (561) 291-2681.",
    answer:
      "A holiday season announcement for a counseling practice names the closed days, explains how clients can still book or move a session, says what to do if they need help while the office is closed, and gives the date regular hours return. Post it two to three weeks ahead and always include crisis resources.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T09:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why the holidays need their own announcement"),
      p(
        "Between Thanksgiving and the first week of January, almost every client's calendar changes. Clinicians travel, offices close for a day or a week, and families shift their routines. A client who shows up to a locked door, or who wonders for days whether a message was read, is a client who may not come back."
      ),
      p(
        "A short, early announcement solves most of this. It also helps new visitors. Someone who finds your practice in late December and cannot tell whether anyone is working will usually call the next listing on the page."
      ),
      h2("What the announcement must say"),
      table(
        ["Item", "Plain wording"],
        ["Closed days", "The office is closed on Thursday, November 26 and Friday, November 27, and again from December 24 through January 1."],
        ["Who is still working", "Some clinicians keep a few sessions on certain days. Ask your clinician about your own schedule."],
        ["How to book or move a session", "Call or use the contact form by December 10 so we can find a time before the break."],
        ["Reply times", "Messages sent during the closure are answered on the first business day we are back."],
        ["If you need help sooner", "Call or text 988 for the Suicide and Crisis Lifeline, or call 911 in an emergency."],
        ["Regular hours return", "Normal hours start again on Monday, January 4."]
      ),
      h2("Put it everywhere a client might look"),
      ul(
        "A banner or short notice at the top of the home page and the contact page, removed the week hours return.",
        "The special hours section of the Google Business Profile, set ahead of time. The Google help page on [editing business hours](https://support.google.com/business/answer/3038177) explains how.",
        "The phone greeting and voicemail, so a caller hears the closed dates before leaving a message.",
        "A short email or portal message to current clients, sent once, two to three weeks before the first closed day."
      ),
      p(
        "Our guide to [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) covers the profile and phone steps in detail, and the same wording rules apply to a counseling office."
      ),
      h2("Keep sessions steady, not busier"),
      p(
        "Some clients find this season stressful, and some ask for extra sessions. You do not need to promise anything. Say that clinicians can talk with each client about whether to schedule extra sessions before the break, or a visit soon after it, and that openings are limited."
      ),
      p(
        "If your caseload is full, point to your [waitlist page](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) so new visitors know what happens when they reach out. If clinicians cover for one another while away, say so in general terms, as described in our guide to [vacation and out of office coverage notices](/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice)."
      ),
      h2("Always include crisis resources"),
      p(
        "A closed office should never be a dead end for a person in distress. Repeat the 988 Suicide and Crisis Lifeline, 911 for emergencies and your local crisis line in the announcement itself, not only on another page. Our [crisis resources section guide](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) has wording you can reuse."
      ),
      h2("Take it down on time"),
      p(
        "Set a reminder to remove the banner and special hours the day regular hours return. An announcement that stays up into February makes the site look neglected, and special hours left on a profile can show the practice as closed when it is open."
      ),
      h3("Plan for the first week back"),
      p(
        "The first week of January is often busy. Clients who paused in December ask to return, and new visitors reach out as the calendar turns. Decide before the break how openings will be offered, whether through a short waitlist, a callback list or limited extra sessions, and tell the front desk what to say. A line on the announcement saying that messages are answered in the order received, starting the first day back, sets a fair expectation and cuts down on repeat calls."
      ),
    ],
    faqs: [
      {
        q: "How far ahead should we post a holiday schedule?",
        a: "Two to three weeks before the first closed day is a good rule. That gives clients time to book a session before the break and gives the front desk time to answer questions without a rush in the last few days.",
      },
      {
        q: "Should we mention that the holidays can be hard for some people?",
        a: "You can say that some clients prefer extra support at this time of year and that clinicians are glad to talk about scheduling. Avoid statements about how many people struggle or what the season does to mood. That wording keeps the focus on scheduling and avoids any suggestion about how clients should feel.",
      },
      {
        q: "Do we need to set special hours on Google if we are closed one day?",
        a: "Yes. Google shows regular hours unless you add special hours, so a one day closure can send a visitor to a locked door. Add the date early and remove it after the day passes. Special hours also show on Maps and in search, so one missed date can mislead many people.",
      },
      {
        q: "What if a client messages us during the closure?",
        a: "Set an automatic reply that says when the office reopens, repeats the crisis numbers and asks the client not to send urgent or health details by email or text. Staff answer on the first business day. Keep the automatic reply short, and review it after the break so no message goes unanswered.",
      },
      {
        q: "Can we offer telehealth sessions during the break?",
        a: "Only if clinicians are actually working and licensed for the client's location. Say which days video sessions are offered, and link to your telehealth consent page so clients know what to expect. Telehealth rules depend on where the client is during the session, so confirm that with each clinician first.",
      },
    ],
    citations: [GBP_HOURS, LIFELINE, ACA_ETHICS],
    links: [
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday And Closure Notices", description: "Profile, site and phone steps." },
      { href: "/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice", label: "Out Of Office Coverage Notices", description: "Cover for clinicians who are away." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Crisis wording every counseling site needs." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1273
  {
    slug: "fmla-and-disability-paperwork-request-page-for-a-primary-care-practice-without-clinical-details",
    keyword: "FMLA and disability paperwork request page for a primary care practice without clinical details",
    category: "How-to",
    title: "FMLA and Disability Paperwork Request Page for Primary Care",
    metaTitle: "FMLA and Disability Paperwork Request Page for Primary Care",
    metaDescription:
      "How a primary care practice can explain FMLA and disability form requests: steps, timing, fees and privacy, with no clinical detail. Call (561) 291-2681.",
    answer:
      "An FMLA and disability paperwork page tells patients how to request forms, who completes them, how long the practice needs, what it costs and how to send the forms safely. It never states a diagnosis or promises approval, because the employer or insurer decides eligibility, not the practice.",
    author: "Liam Costello",
    publishDate: "2026-10-26T09:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why patients search for this"),
      p(
        "People usually look for this page at a stressful moment. An employer or insurance company has handed them a form, there is a deadline, and they do not know whether to call, message the portal or book a visit. If your site does not answer, they call the front desk, and every one of those calls takes staff time."
      ),
      p(
        "A clear page cuts those calls and sets honest expectations. It should describe the process, not the medicine, and it should never imply that signing a form is automatic."
      ),
      h2("What the page should explain"),
      ol(
        "How to ask: through the patient portal, by phone or in person, and what to include, such as the form itself, the deadline and where it must be sent.",
        "Whether a visit is needed: many practices ask for a recent visit before completing leave or disability forms. State your rule in one sentence.",
        "Who completes it: the clinician who knows the patient, not the front desk. Staff may fill in dates and contact details.",
        "How long it takes: give a range in business days, and ask for the form well before the employer's deadline.",
        "What it costs: say whether there is a fee, how much and how to pay. Publish it plainly, as our guide to [self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) recommends for other fees.",
        "How it is returned: to the patient, to the employer or by secure fax, according to the patient's written permission."
      ),
      h2("Keep clinical detail out of the page"),
      p(
        "The page is about process. It should not mention any condition, symptom or treatment, and it should not say what a clinician will certify. Eligibility for leave or benefits is decided by the employer or insurer under the rules that apply to them, and the practice only answers the questions on the form that its clinician can truthfully answer."
      ),
      p(
        "The U.S. Department of Labor explains how [FMLA certification](https://www.dol.gov/agencies/whd/fmla) works for employers and employees, and it publishes the standard forms. Link to that page so patients can read the rules from the source instead of asking the front desk to interpret them."
      ),
      h2("Protect privacy in every step"),
      p(
        "Forms contain sensitive details, so the page should say how to send them securely. Direct patients to upload through the portal, hand them over in person or use a secure fax, and ask them not to send forms by ordinary email or by the website contact form. Our guide to [publishing patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains the same boundary."
      ),
      p(
        "Also say that the practice shares information with an employer only as the patient authorizes in writing and as the form requires, in line with the HHS summary of the [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html)."
      ),
      h2("Match it to your other request pages"),
      p(
        "Patients who need work, school or camp notes should find a similar page. Our guide to [school, work and camp note requests](/guides/school-work-and-camp-note-requests-page-for-a-primary-care-practice) covers short notes, while this page covers longer forms. Link the two so a patient lands on the right process the first time."
      ),
      h3("Train the front desk to answer in one voice"),
      p(
        "Even a good page cannot answer every question, so give the front desk a short script. It should say that forms go to the clinician, that the page lists the usual turnaround, and that staff cannot promise approval or discuss the reason for leave over the phone. A caller who hears different answers from two staff members will assume the practice is disorganized. A one page internal checklist also helps the office track each request from receipt to return, so no form is lost near a deadline."
      ),
    ],
    faqs: [
      {
        q: "Should the page say the practice will complete any form?",
        a: "No. Say that clinicians review each request and complete only what they can truthfully answer. Avoid any wording that sounds like a promise of approval, since the employer or insurer makes the final decision. Clear wording here also protects the practice if a patient expects a form to be signed automatically.",
      },
      {
        q: "Can patients email the form to the office?",
        a: "Ask them to use the portal, bring it in person or use a secure fax. Ordinary email and website forms are not a safe place for sensitive paperwork, so say clearly that they should not be used. Staff can explain the secure option over the phone, which is usually quicker than a failed upload.",
      },
      {
        q: "How long should we say it takes?",
        a: "Give a realistic range, such as five to ten business days, and ask for the form well before the deadline. If a request is urgent, tell patients to call so staff can explain what is possible. A range also gives staff room to prioritize forms with the nearest deadlines.",
      },
      {
        q: "Is it fine to charge a fee for forms?",
        a: "Many practices do, because completing forms takes clinician time that visits do not cover. If you charge, publish the amount, explain when it is due and make clear that it is not a charge for approval. The fee should be the same for every patient and listed in the same place as other service fees.",
      },
      {
        q: "Does the page need legal review?",
        a: "Have an attorney or your compliance advisor review wording about leave rights, fees and privacy. Keep the page to practice process and link to the Department of Labor for the rules. Review the page again whenever employer forms, fees or your records policy change, since those details move often.",
      },
    ],
    citations: [DOL_FMLA, DOL_FMLA_FORMS, HHS_PRIVACY],
    links: [
      { href: "/guides/school-work-and-camp-note-requests-page-for-a-primary-care-practice", label: "School, Work And Camp Notes", description: "Short note requests for primary care." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Medical Records Request Page", description: "How patients ask for their records." },
      { href: "/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice", label: "Portal Message Expectations", description: "Reply times and what to send." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1274
  {
    slug: "payment-methods-and-card-on-file-policy-page-for-a-counseling-practice",
    keyword: "payment methods and card-on-file policy page for a counseling practice",
    category: "How-to",
    title: "Payment Methods and Card on File Policy Page for Counseling",
    metaTitle: "Payment and Card on File Page for a Counseling Practice",
    metaDescription:
      "Explain accepted payments, card on file rules, late fees and refunds on a counseling website in plain words. Call (561) 291-2681.",
    answer:
      "A payment and card on file page tells clients which payment methods the practice accepts, when a card is charged, what happens with late cancellations or declined cards, and how to update a card safely. Put the rules in writing before the first session, in plain words, and never ask for card numbers on a web form.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T10:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why a counseling practice needs this page"),
      p(
        "Billing surprises are one of the quickest ways to damage a relationship that is built on trust. A client who learns about a card on file only when a charge appears may feel ambushed, even if the agreement mentioned it. A page that explains the policy up front lets clients decide with full information."
      ),
      p(
        "It also helps the practice. When the rules are written and easy to find, the front desk spends less time explaining and more time scheduling."
      ),
      h2("What to put on the page"),
      table(
        ["Topic", "What to say"],
        ["Accepted methods", "List the cards, HSA or FSA cards, checks or other methods you take. Do not list one you do not accept."],
        ["Card on file", "Say that a card is kept with a secure payment processor, and what it is used for."],
        ["When it is charged", "Name the situations: the session fee, a copay, a late cancellation or a missed visit."],
        ["Declined cards", "Explain how the practice will contact the client and how long they have to update it."],
        ["Receipts and statements", "Say how clients get a receipt or a statement for insurance or tax purposes."],
        ["Questions", "Give a phone number and a contact link for billing questions."]
      ),
      h2("Write the rule, then link the details"),
      p(
        "Use one sentence for each rule. For example, the card is charged for the session fee after each visit, and for a late cancellation as described in the cancellation policy. Link to your [cancellation and no show policy page](/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice) for the details instead of repeating them in three places, so the numbers never disagree."
      ),
      p(
        "If clients use insurance, explain that a copay or deductible is collected at the visit, and link to your [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained). Clients who pay privately should also be told about the Good Faith Estimate they are entitled to receive; the CMS page on the [No Surprises Act](https://www.cms.gov/nosurprises) explains the rule."
      ),
      h2("Keep card details off the website"),
      p(
        "The page should say how to update a card, and the answer should never be to type the number into a contact form or an email. Use the payment processor's secure link, the client portal or a phone call to the front desk, and keep card numbers out of text messages. The PCI Security Standards Council publishes the [standards for handling card data](https://www.pcisecuritystandards.org/) that your processor follows."
      ),
      p(
        "Our guide to [text to pay and online bill pay pages](/guides/text-to-pay-and-online-bill-pay-page-for-a-medical-practice) shows how to point to a secure payment link without collecting anything yourself."
      ),
      h2("Say it kindly"),
      p(
        "Policies about money can read as cold. Open with a sentence that says the goal is to keep the practice running and sessions available, and close with an invitation to talk to the office if a client's situation is changing. A client who is struggling to pay is better served by a conversation than by a late fee."
      ),
      h3("Read it as a new client would"),
      p(
        "Before publishing, read the page on a phone, as someone who knows nothing about how your practice bills. Ask whether each sentence answers a question a client would really have, and whether any rule could surprise them. Ask a colleague outside the field to do the same. Every confusing sentence you remove now is a billing conversation you will not have later, and it shows clients that the practice respects their time and their budget."
      ),
    ],
    faqs: [
      {
        q: "Do we need a card on file for every client?",
        a: "Not necessarily. Some practices require one for all clients, some only for late cancellations. Whichever you choose, state it plainly before the first session and have clients agree in writing. Choose the rule that fits your practice, and apply it the same way to every client without exceptions.",
      },
      {
        q: "Can we store card numbers ourselves?",
        a: "Avoid it. Use a payment processor that stores the card securely and gives you only a token. Keeping numbers in a spreadsheet, a note or an email creates risk for you and for clients. Your payment processor can usually provide a secure link or portal so staff never need to handle the number.",
      },
      {
        q: "What should the page say about a declined card?",
        a: "Say that the office will contact the client by phone or the portal, give a reasonable number of days to update the card and explain whether sessions continue in the meantime. Keep the tone respectful. If the card stays declined, a phone call from a real person works better than another automatic message.",
      },
      {
        q: "Should we list refund rules?",
        a: "Yes, briefly. Say whether fees for sessions that did not take place are refunded, and under what conditions. If you are unsure of the wording, ask your attorney or billing advisor to review it. Writing the rule down once, and linking to it, keeps refunds consistent from one client to the next.",
      },
      {
        q: "Where should the page link from?",
        a: "Link it from the fees page, the new client forms and the first session page, so clients see the policy before their first visit and again whenever they ask about billing. Also add it to your confirmation emails so clients meet the same policy at several points before the first visit.",
      },
    ],
    citations: [PCI, CMS_NOSURPRISES, HHS_PRIVACY],
    links: [
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Questions Page", description: "Common billing questions answered." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Late and missed session rules." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Notice", description: "The notice private pay clients receive." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1275
  {
    slug: "sick-visit-and-infection-control-expectations-page-for-a-primary-care-practice-without-clinical-advice",
    keyword: "sick visit and infection-control expectations page for a primary care practice without clinical advice",
    category: "How-to",
    title: "Sick Visit and Infection Control Expectations Page for Primary Care",
    metaTitle: "Sick Visit and Infection Control Page for Primary Care",
    metaDescription:
      "Tell patients how sick visits work: booking, masks, waiting room steps and when to call first, without medical advice. Call (561) 291-2681.",
    answer:
      "A sick visit page tells patients how to book a same day visit, what the practice asks of people with symptoms, such as calling first or wearing a mask, and where to go in an emergency. It describes how the office works and stays out of diagnosis, treatment and advice about any illness.",
    author: "Liam Costello",
    publishDate: "2026-10-26T11:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why the page helps patients and staff"),
      p(
        "When someone wakes up feeling unwell, they want two answers: can I be seen today, and what do I need to do when I arrive. If the website does not say, they call, and the phone lines fill up at the busiest time of the morning. Patients with symptoms may also walk into a waiting room without knowing the office has a separate entrance or a request to wear a mask."
      ),
      p(
        "A page that explains the process protects other patients, reduces calls and makes the visit smoother. It must stay about logistics. Anything that sounds like medical guidance belongs with a clinician."
      ),
      h2("What to include"),
      table(
        ["Question", "What to say"],
        ["Can I be seen today?", "Same day sick visits are held when openings exist. Call when the office opens, or use the booking link to see times."],
        ["Who sees me?", "A clinician from the practice, which may not be your usual one. State this plainly."],
        ["What should I do before I come?", "Call first so staff can tell you where to go, and bring your insurance card and a list of your medicines."],
        ["Is there a mask rule?", "Say whether masks are requested for patients with symptoms, and that the office provides them."],
        ["Where do I wait?", "Describe any separate door, room or check in step for patients with symptoms."],
        ["What if it is an emergency?", "Call 911. The office cannot assess emergencies by phone or website."]
      ),
      h2("Explain infection control in everyday words"),
      p(
        "Patients do not need a policy manual. They need to know what to expect and why. A short paragraph can say that the office cleans exam rooms between patients, keeps hand sanitizer at the door and asks people with certain symptoms to follow extra steps so others stay safe. The CDC's overview of [infection control in healthcare settings](https://www.cdc.gov/infection-control/) is a good source to cite for the practice's general approach."
      ),
      p(
        "Avoid listing symptoms that require a visit or telling patients how to treat themselves. If the page names specific illnesses, it begins to read like advice, and advice on a marketing page can go out of date or mislead."
      ),
      h2("Link to the pages patients need next"),
      ul(
        "How to book quickly: our guide to [cancellation lists and same day openings](/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice) explains how to tell patients where to look.",
        "When to go elsewhere: use the guidance in our guide on [calling the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice).",
        "What check in looks like: link to your [waiting room and check in page](/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice).",
        "Video options: if you offer them, describe them on a [virtual visits page](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video)."
      ),
      h2("Keep the page current"),
      p(
        "Procedures change when guidance changes. Review the page each season, and whenever the office alters its entrance, mask request or phone hours. Add the review date at the bottom so patients and Google can see that it is maintained."
      ),
      h3("Make sure staff match the page"),
      p(
        "A page promises nothing if the front desk does something different. Walk through a sick visit from the first phone call to checkout and compare each step with what the website says. If staff greet patients with symptoms at a separate door, the page should say so. If masks are optional in practice, the page should not say they are required. Small mismatches show up in reviews, so settle them before patients find them."
      ),
    ],
    faqs: [
      {
        q: "Should the page tell patients what to do for a fever or cough?",
        a: "No. The page explains how the office works. Anything about symptoms or treatment should come from a clinician in person or by phone. Say that staff will ask a few questions when patients call, and that is all. If a patient describes something urgent, staff should follow the office's own protocol and direct them to 911 when needed.",
      },
      {
        q: "Can we require a mask?",
        a: "That is your practice's decision. Whatever you choose, say it plainly, explain that masks are provided and apply the rule the same way to everyone. Update the wording if the policy changes. If you are unsure, ask your clinical lead to approve the wording before it goes live and review it each season.",
      },
      {
        q: "Should the page mention specific illnesses?",
        a: "It is safer not to. Naming illnesses can seem to offer a diagnosis and can go out of date. Use general words such as symptoms of an infectious illness and let staff give details by phone. The same plain approach works for any illness, and it keeps the page useful for years without constant edits.",
      },
      {
        q: "How do we handle patients who walk in sick?",
        a: "Train the front desk to greet them kindly, offer a mask and move them to the right area quickly. Describe that process on the page so patients know it will happen. Role play the first thirty seconds with staff, because the greeting matters as much as the written policy does.",
      },
      {
        q: "Does this page need schema?",
        a: "An FAQ block can use FAQPage markup, and the page can sit under your main site navigation. Do not mark up claims about outcomes. Keep the schema to what the page actually states. Keep the schema matched to visible text, and confirm it validates before you publish the page.",
      },
    ],
    citations: [CDC_INFECTION, FL_HEALTH, HHS_PRIVACY],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Getting Found For Same Day Visits", description: "Show same day options in search." },
      { href: "/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice", label: "Office Versus 911 Page", description: "Where to go and when." },
      { href: "/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice", label: "Waiting Room Expectations", description: "What check in looks like." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1276
  {
    slug: "evening-and-weekend-appointment-availability-page-for-a-counseling-practice-serving-working-adults",
    keyword: "evening and weekend appointment availability page for a counseling practice serving working adults",
    category: "How-to",
    title: "Evening and Weekend Appointment Page for a Counseling Practice",
    metaTitle: "Evening and Weekend Counseling Page for Working Adults",
    metaDescription:
      "Show working adults when you offer evening and weekend counseling, how to book and how to keep hours accurate on Google. Call (561) 291-2681.",
    answer:
      "An evening and weekend availability page for a counseling practice states which days and times clinicians see clients outside business hours, how to book them, and how video sessions fit. Keep it honest: list real openings, say when they fill, and match the hours on Google exactly.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T11:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Who searches for evening and weekend counseling"),
      p(
        "Working adults often cannot leave a job for a midday session. They look for words like evening, after work and Saturday. If your site only says the office is open nine to five, those visitors assume you cannot help and move on, even if two clinicians have late slots."
      ),
      p(
        "This page speaks to that search. It does not promise availability. It shows what exists and how to get it."
      ),
      h2("What the page should show"),
      table(
        ["Element", "Example"],
        ["Which clinicians", "Name each clinician who sees clients in the evening or on weekends, with a link to their bio."],
        ["Days and times", "Monday and Wednesday evenings until 8 pm, and Saturday mornings from 9 am to 1 pm."],
        ["In person or video", "Say which slots are in the office and which are by video, and the states you can serve."],
        ["How to book", "Call, use the online request form or the booking link, and say how quickly staff reply."],
        ["How fast openings fill", "Say that these times are limited and that a waitlist exists if none are open."],
        ["Last updated", "Add the month so visitors know the page is current."]
      ),
      h2("Keep Google and the website in step"),
      p(
        "If the office is not open to the public in the evening, the Google profile should not show evening hours for the front desk. Many practices solve this by listing the main hours on Google and describing clinician evening availability on the website instead. Whichever you choose, the two must agree; our guide to [evening and weekend hours for a primary care practice](/guides/evening-and-weekend-hours-for-a-primary-care-practice-publishing-extended-hours-and-keeping-google-accurate) explains how to set them without confusing patients, and the Google help page on [business hours](https://support.google.com/business/answer/3038177) lists the options."
      ),
      h2("Make booking fit a busy day"),
      p(
        "People who ask for evening appointments often reach out in the evening themselves. Offer a booking form that works at any hour, set an automatic reply that says when someone will respond, and consider a short text confirmation. Keep wording discreet and free of health details, as our guide to [appointment reminder wording](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) shows."
      ),
      h3("Say what to expect from a video session"),
      p(
        "Many working adults prefer video from home or a parked car. If you offer it, link to your [telehealth consent and technology check page](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice) and note that clients should choose a private place."
      ),
      h2("Do not stretch clinicians too thin"),
      p(
        "Extended hours are valuable only if clinicians can sustain them. Publish the evening openings that actually exist and trim the page when a clinician's schedule changes. A visitor who finds a Saturday slot that was removed a month ago will trust the practice less than one who finds no Saturday slot at all."
      ),
      h3("Make the page easy to find"),
      p(
        "A good availability page does nothing if visitors cannot reach it. Link it from your contact page, your clinician bios and your services list, and mention it in your profile description so people searching for evening counseling land on it. Use the words working adults use, such as after work and Saturday, in headings and links. Then watch your search reports for those phrases and adjust the wording if people use different ones."
      ),
    ],
    faqs: [
      {
        q: "Do we need a separate page for evening and weekend counseling?",
        a: "If a meaningful share of your sessions fall outside business hours, yes. It gives people a clear answer to a common search and gives you a page to link from your contact, services and clinician bios. Mention the clinicians by name if possible, since people often choose a time by choosing the person they will see.",
      },
      {
        q: "Should we list weekend hours on Google if only some clinicians work them?",
        a: "Usually not, because the profile hours describe when the office or phone is answered. Describe clinician specific availability on your website, and keep Google to times you can honor for everyone who calls. Whichever approach you take, check the hours again each quarter so Google, the website and the phone greeting match.",
      },
      {
        q: "How do we handle demand if evening openings fill up?",
        a: "Say that they are limited, offer a waitlist or a first available option and update the page when openings change. Honest wording protects trust more than a long list of times that are already taken. Update the page promptly when slots fill, so visitors are never sent toward times that no longer exist.",
      },
      {
        q: "Can we promise a first appointment within a set number of days?",
        a: "Avoid promises about speed, because availability changes. State your typical reply time to a request and let staff discuss real openings when they call back. A reply time such as one business day is useful and honest, and staff can then meet it reliably.",
      },
      {
        q: "Does this page need crisis information?",
        a: "Yes. Evening and weekend visitors may be reaching out in a difficult moment. Include the 988 Lifeline and 911 for emergencies, and say that the practice is not a crisis service. The same note is wise on any page that invites someone to contact the practice during difficult hours.",
      },
    ],
    citations: [GBP_HOURS, LIFELINE, ACA_ETHICS],
    links: [
      { href: "/guides/evening-and-weekend-hours-for-a-primary-care-practice-publishing-extended-hours-and-keeping-google-accurate", label: "Evening And Weekend Hours", description: "Publishing extended hours accurately." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page", description: "What to say when openings are full." },
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent Page", description: "Video session expectations." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1277
  {
    slug: "faith-based-and-spiritually-integrated-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "faith-based and spiritually integrated counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Faith Based Counseling Page for a Counseling Practice",
    metaTitle: "Faith Based and Spiritually Integrated Counseling Page",
    metaDescription:
      "How to describe faith based or spiritually integrated counseling honestly: who it is for, licenses, boundaries and no outcome claims. Call (561) 291-2681.",
    answer:
      "A faith based counseling page says plainly whether clinicians are licensed, how faith is included only when the client wants it, which beliefs are welcome and what the practice does not do. It makes no promises about results and does not suggest that faith replaces professional care or that anyone must share a belief.",
    author: "Liam Costello",
    publishDate: "2026-10-26T12:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why clarity matters on this page"),
      p(
        "People who search for faith based counseling usually want one of two things. Some want a licensed counselor who will respect their beliefs and, if they ask, bring prayer or scripture into the conversation. Others want a pastoral or ministry setting. The words overlap, and a visitor who cannot tell which one you offer will either call and ask or leave."
      ),
      p(
        "The page has to be honest about the difference. Trust is the point, and trust fails fast if the wording hides something."
      ),
      h2("Start with the license and the setting"),
      p(
        "State in the first screen whether your clinicians are licensed mental health professionals, what licenses they hold and where they practice. A licensed clinician who is also a person of faith offers something different from a pastoral counselor, and clients deserve to know which they are choosing. Our guide to [credentials and license titles](/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website) shows how to write this plainly."
      ),
      table(
        ["Question a visitor has", "What the page should say"],
        ["Are you licensed?", "Name the licenses and link to the state lookup. Do not use a title you do not hold."],
        ["Is faith part of every session?", "No. It is included only when the client asks."],
        ["Do I need to share your beliefs?", "No. Clients of any faith or none are welcome."],
        ["Do you pray with clients?", "Only if the client asks and the clinician is comfortable."],
        ["Is this ministry or therapy?", "State which. If it is therapy, say it is provided by a licensed clinician."]
      ),
      h2("Follow the ethics codes"),
      p(
        "Professional codes ask counselors to respect the client's values and not to impose their own. The [ACA Code of Ethics](https://www.counseling.org/resources/ethics) says so directly, and the same principle appears in the codes for psychologists and family therapists. Say on the page that the practice follows its professional code, and let that be the promise, rather than stating a particular belief as the practice's treatment."
      ),
      h2("What to avoid saying"),
      ul(
        "Promises that faith will heal, fix or cure a problem, or that counseling will restore a marriage or a family.",
        "Suggestions that medication or other professional care is unnecessary or unfaithful.",
        "Language that makes people of another belief feel unwelcome or judged.",
        "Quotations that sound like advice to a particular reader, such as telling a visitor what scripture says about their situation."
      ),
      p(
        "A short statement of the practice's values is fine. Keep it a statement about how the practice treats people, and keep any instructions to the reader out of it."
      ),
      h2("Link the page into the rest of the site"),
      p(
        "Connect it to your [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice), your [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) and your [crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). Visitors who are comparing practices want the same practical answers whatever the faith or lack of it."
      ),
      h3("Read it as a skeptical visitor would"),
      p(
        "Ask someone of a different faith, and someone with none, to read the page. Do they feel welcome, and do they understand what to expect? Visitors who are unsure about faith in counseling will leave quickly if the page feels like an invitation to convert. A short, calm explanation of who is welcome and what is optional is often the most persuasive sentence on the page, and it protects the practice's standing with colleagues and referral sources."
      ),
    ],
    faqs: [
      {
        q: "Can a licensed counselor include prayer in sessions?",
        a: "Many do, when a client asks and the counselor is comfortable and trained to do so. The page should say that faith is included only at the client's request and that clients of any belief are welcome. Do not describe which methods a clinician uses unless that clinician is trained in them and agrees to the wording.",
      },
      {
        q: "What is the difference between pastoral and licensed counseling?",
        a: "Pastoral counseling is offered through a faith community and may not require a state license. Licensed counseling is provided by clinicians who hold a state license. Your page should make clear which one you offer. If your practice is a church ministry rather than a clinic, say so plainly so visitors can choose correctly.",
      },
      {
        q: "Can we mention scripture on the page?",
        a: "A short, general reference to the practice's values is fine. Avoid quoting scripture as advice for a reader's situation, and do not suggest that any belief is required to benefit from counseling. If a client asks for scripture or prayer, the clinician can respond to that request without turning it into a rule for everyone.",
      },
      {
        q: "Should we say we treat specific conditions with faith based methods?",
        a: "No. Naming conditions with a promised method sounds like a clinical claim. Describe the setting and the values, list the concerns clients bring and leave treatment decisions to the clinician and client. Clients choose their own path, and the clinician respects it.",
      },
      {
        q: "Does insurance cover faith based counseling?",
        a: "Coverage depends on the client's plan and the clinician's network status, as with any counseling. Faith is not a billing category, so explain the practice's insurance and fee options on the page and offer them the same way to every client.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, AAMFT_ETHICS],
    links: [
      { href: "/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website", label: "Credentials And License Titles", description: "Write licenses plainly." },
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Our Approach Page", description: "Describe how you work without outcome claims." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What happens at the first visit." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1278
  {
    slug: "first-responders-and-healthcare-workers-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "first responders and healthcare workers counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "First Responders and Healthcare Workers Counseling Page",
    metaTitle: "Counseling Page for First Responders and Healthcare Workers",
    metaDescription:
      "Write a counseling page for first responders and healthcare workers: shift friendly hours, employer privacy and crisis help. Call (561) 291-2681.",
    answer:
      "A page for first responders and healthcare workers explains shift friendly scheduling, how the practice protects privacy from employers, what the clinicians understand about the work, and where to get urgent help. It uses respectful, plain language and avoids claims about trauma, burnout or results.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T13:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("What this audience wants to know first"),
      p(
        "Police officers, firefighters, paramedics, nurses and physicians share a few habits when they look for counseling. They tend to be practical, they work unusual hours and they worry about who might find out. Many have also spent years being the person who helps, and asking for help can feel unfamiliar."
      ),
      p(
        "The page should answer their practical questions quickly. Warm language matters, but specifics matter more."
      ),
      h2("Answer the practical questions"),
      table(
        ["Question", "What to say"],
        ["Can I be seen around my shifts?", "Describe early morning, evening and weekend options, and video sessions for those who cannot travel."],
        ["Will my employer know?", "Explain who can see records, and that the practice does not share information with an employer without written permission."],
        ["Do you understand the job?", "Say what is true. If a clinician has worked with first responders or in healthcare, say that, and no more."],
        ["Can I pay privately?", "Explain private pay and insurance options, and that some clients choose to keep sessions off their insurance."],
        ["What if I need help right now?", "Show 988, 911 and any local crisis line on the page itself."]
      ),
      h2("Be careful with experience claims"),
      p(
        "A clinician who has grown up in a fire family or worked in an emergency room can say so, and it helps. A practice that has never worked with these groups should not suggest otherwise. Do not write that your clinicians specialize in trauma, post traumatic stress or burnout unless a clinician holds a training you can name and verify. Our guide to [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) shows how to describe the concerns people bring without making clinical promises."
      ),
      h2("Explain privacy in terms of the job"),
      p(
        "This audience worries about fitness for duty, licensing questions and reputation. You cannot give legal or employment advice, and the page should say so. It can explain how confidentiality works and where its limits are, as our guide to the [confidentiality and its limits page](/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice) describes. Some employer or licensing forms ask about counseling, and the page can suggest that clients ask their board, union or an attorney how to answer them."
      ),
      h3("Peer support is not a replacement"),
      p(
        "Many agencies and hospitals run peer support or employee assistance programs. Mention them respectfully and explain how your practice differs, for example that you are an independent practice outside the employer. Our guide to an [employee assistance program page](/guides/employee-assistance-program-page-for-a-counseling-practice) explains how to describe referrals from those programs."
      ),
      h2("Put urgent help where people can see it"),
      p(
        "Place the 988 Suicide and Crisis Lifeline, 911 and your local crisis line near the top of the page and on the contact form. Our [crisis resources section guide](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) gives wording you can use. Never imply that your practice is available around the clock unless it is."
      ),
      h3("Reach this audience where they already look"),
      p(
        "Many first responders and healthcare workers find counselors through colleagues, association newsletters and employee assistance referrals, not only through search. Make the page easy to share with a clear title and a short link, and let referral partners know it exists. Our guide to a [referral source page for a counseling practice](/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer) explains how to describe your practice to the people who refer."
      ),
    ],
    faqs: [
      {
        q: "Should the page name professions or just say people who help others?",
        a: "Name the professions you want to reach, such as firefighters, paramedics, nurses and physicians. Specific words match what people search for, and they show that you thought about this audience and did not write a generic page. Specific words match real searches, and they show readers that the page was written for them.",
      },
      {
        q: "Can we promise that sessions will stay private from an employer?",
        a: "Promise what you control: the practice does not share information without written permission, except as described in your confidentiality policy. Do not promise outcomes at work, and avoid advice about reporting duties. Keep the confidentiality statement identical to your signed agreement so the page and the paperwork never disagree.",
      },
      {
        q: "Is it fine to say we treat trauma or burnout?",
        a: "Be careful. Those words describe clinical conditions. A safer route is to describe concerns clients bring, such as stress from shift work or difficult days at work, and leave diagnosis to the clinician. Use the words a person would use themselves, such as stress after long shifts, and leave labels to the clinician.",
      },
      {
        q: "Should we offer discounted sessions for this group?",
        a: "Only if the practice can sustain it and the offer is made the same way to everyone who qualifies. State the terms clearly, and check any discount rules with your billing advisor and payers. Offer it only if the practice can keep it going without lowering the quality of sessions or pressuring clinicians.",
      },
      {
        q: "What about veterans who are also first responders?",
        a: "Link to your veterans and military families page for related information, and mention the Veterans Crisis Line in your crisis resources. Keep the pages distinct so each one answers its own search. Keep the crisis information the same on both pages so a veteran sees the same lines wherever they land.",
      },
    ],
    citations: [LIFELINE, SAMHSA_HELP, ACA_ETHICS],
    links: [
      { href: "/guides/veterans-and-military-families-page-for-a-counseling-practice-without-clinical-claims", label: "Veterans And Military Families Page", description: "A related audience page." },
      { href: "/guides/employee-assistance-program-page-for-a-counseling-practice", label: "Employee Assistance Program Page", description: "How EAP referrals work." },
      { href: "/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims", label: "Workplace Stress Counseling Page", description: "Counseling for working professionals." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1279
  {
    slug: "older-adult-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "older adult counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Older Adult Counseling Page for a Counseling Practice",
    metaTitle: "Older Adult Counseling Page for a Counseling Practice",
    metaDescription:
      "Build a counseling page for older adults and families: Medicare, easy access, family consent and respect. Call (561) 291-2681.",
    answer:
      "An older adult counseling page explains who the practice sees, how Medicare and other coverage work, how clients can attend in person or by video, how family members can take part with consent, and where to find urgent help. It is easy to read, free of clinical claims and respectful of the client's independence.",
    author: "Liam Costello",
    publishDate: "2026-10-26T13:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Two readers, one page"),
      p(
        "Searches for older adult counseling come from two groups. Some are older adults looking for themselves, and some are adult children searching for a parent. The page should speak to both without talking about the older person as though they were not in the room. Address the client directly, and give family members their own short section."
      ),
      p(
        "Respect is the tone to keep. Older adults are often experienced, capable people facing a change, and the page should read that way."
      ),
      h2("Make the practical questions easy"),
      table(
        ["Question", "What to say"],
        ["Is it covered?", "Explain that Medicare covers outpatient mental health care from eligible providers, and say whether you are one. Link to Medicare.gov."],
        ["Do I have to travel?", "Describe office visits, video sessions and any phone options, and the support available to set them up."],
        ["Can my family come?", "Family members may attend with the client's permission, in session or in a separate conversation."],
        ["Is the office easy to reach?", "Mention parking, an accessible entrance and seating, as in our guide to [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile)."],
        ["How do I start?", "Give a phone number staff will answer, not only an online form."]
      ),
      h2("Medicare and coverage in plain words"),
      p(
        "Medicare.gov explains what it covers for [outpatient mental health care](https://www.medicare.gov/coverage/mental-health-care-outpatient), including when a provider must accept Medicare. State on your page whether you accept Medicare, Medicare Advantage plans or private pay only. Our guide to [Medicare and Medicaid acceptance wording](/guides/medicare-and-medicaid-acceptance-wording-on-a-medical-practice-website) shows how to word it without promising coverage for any individual."
      ),
      h2("Design for easy reading"),
      ul(
        "Use large text, strong contrast and short paragraphs. Our [senior friendly layout guide](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access) has the details.",
        "Put the phone number at the top and make it a tap to call link.",
        "Avoid jargon and abbreviations, and spell out words such as Medicare Advantage.",
        "Offer to complete intake over the phone or on paper."
      ),
      h2("Involve family only with permission"),
      p(
        "Families often want to help, and clients decide what they share. Say that the practice speaks with a family member only with the client's written permission, and describe how to give it. Our guide to a [caregiver and family communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) explains how to put this in writing. If a family member needs support of their own, point to your [caregiver support counseling page](/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims)."
      ),
      h2("What the page should not say"),
      p(
        "Do not list conditions of aging or suggest that counseling treats memory loss or other medical problems. Do not imply that a visit can assess whether someone can live alone or manage money. Say that clinicians work with older adults on concerns they bring, and that medical questions belong with their physician."
      ),
      h3("Plan for hearing and vision"),
      p(
        "Some older clients have trouble hearing a phone call or reading small print. Offer to repeat information, to send a printed copy of appointment details and to adjust the font on any digital form. Tell clients that a family member or aide may accompany them to the first visit with their permission. These small details signal respect more than a headline can, and they cost the practice almost nothing to provide."
      ),
    ],
    faqs: [
      {
        q: "Should the page mention grief and loss?",
        a: "You can say that clients bring concerns such as loss of a spouse, a move or changes in health. Link to your grief counseling page for more. Avoid statements about how common these experiences are or what counseling will do.",
      },
      {
        q: "Can a family member make the first appointment?",
        a: "Often yes, but the client must agree to counseling and sign their own paperwork. Say that staff will speak with the client directly before the first session and that family involvement requires their written permission. Staff should speak with the client directly before anything is scheduled, to confirm that the request is theirs.",
      },
      {
        q: "Does the page need to mention memory concerns?",
        a: "Only to say that the practice does not diagnose or treat medical conditions and that concerns about memory should be discussed with a physician. Do not describe screening or assessment unless a qualified clinician offers it. Staff can share a short list of local resources if a family asks.",
      },
      {
        q: "How do we handle clients who are not comfortable with technology?",
        a: "Offer in person sessions and phone options where allowed, and describe how staff can help set up video visits. Explain this in one short paragraph and link to your telehealth instructions page. A caller who prefers the phone should always be able to do everything by phone, with no website step required.",
      },
      {
        q: "Is a separate page better than a section on a services page?",
        a: "A separate page answers a distinct search and lets you speak to both older adults and families. Keep the content unique, and link it from your services, caregiver and grief pages. Internal links from related pages help visitors find it, and they help Google understand how your pages fit together.",
      },
    ],
    citations: [MEDICARE_MH, NIMH_HELP, LIFELINE],
    links: [
      { href: "/guides/grief-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Grief Counseling Page", description: "Describing support after a loss." },
      { href: "/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Caregiver Support Page", description: "A page for family caregivers." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior Friendly Layout", description: "Large text and easy access." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1280
  {
    slug: "life-transitions-counseling-page-for-job-loss-relocation-and-retirement-without-clinical-claims",
    keyword: "life transitions counseling page for job loss relocation and retirement without clinical claims",
    category: "How-to",
    title: "Life Transitions Counseling Page for Job Loss, Moves and Retirement",
    metaTitle: "Life Transitions Counseling Page for Job Loss and Retirement",
    metaDescription:
      "Write a life transitions counseling page that names job loss, moving and retirement honestly, with no clinical claims. Call (561) 291-2681.",
    answer:
      "A life transitions counseling page names the changes people bring, such as job loss, a move or retirement, describes how sessions work and how to start, and avoids diagnoses or promised results. It speaks in plain words about uncertainty and change, lists coverage and fee options and shows where to get urgent help.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T14:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why a page about change works"),
      p(
        "Many people who search for counseling do not have a label for what they are feeling. They know that something changed. A job ended, they moved to a new city, a child left home, or they retired and found the days longer than expected. Searching for a diagnosis does not fit their situation, so they search for the change instead."
      ),
      p(
        "A life transitions page meets them there. It names common changes in everyday words and shows that counseling is a place to talk through them."
      ),
      h2("Name the changes people actually search for"),
      ul(
        "Losing or changing a job, including layoffs and career changes.",
        "Moving to a new city or state, or arriving from another country.",
        "Retirement and the change in daily routine that follows.",
        "A child leaving home, a new baby or a change in family roles.",
        "A change in health or independence for the client or a loved one.",
        "A separation or the end of a relationship, linked to your page on that topic."
      ),
      p(
        "Use the words people use. Phrases such as starting over, feeling stuck and not sure what comes next read as human and match real searches, while clinical labels do not."
      ),
      h2("Describe what sessions are, not what they fix"),
      p(
        "Say that sessions offer a place to talk, to sort through choices and to notice what matters. Avoid promising that counseling will bring clarity, confidence or a new job. The clinician and client decide together what to work on, and the page should say so. Our guide to [session length and frequency](/guides/session-length-and-frequency-explained-on-a-therapy-practice-website-without-promising-results) shows how to explain the routine without implying results."
      ),
      table(
        ["Section", "Purpose"],
        ["Opening", "Name the changes and welcome the reader in two or three sentences."],
        ["What sessions are", "Talk, reflect and plan, led by a licensed clinician."],
        ["Who it is for", "Adults at any stage, with details on teens or couples linked elsewhere."],
        ["Practical details", "Hours, video or office, fees, insurance and a sliding scale if available."],
        ["Getting started", "A phone number, a contact form and a note on reply times."]
      ),
      h2("Cover cost honestly"),
      p(
        "Job loss often means lost insurance, and that is exactly when cost worries peak. If you offer a reduced fee, say who qualifies and how to ask. Our guide to a [fees page with sliding scale and out of network options](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) explains how to write this without discounting claims. Mention that clients with a new plan can ask staff to check benefits, as described in our [insurance verification page guide](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice)."
      ),
      h2("Link to the next step and to help"),
      p(
        "Show what happens at the first visit by linking to your [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice), and place crisis resources on the page. A person facing a large change may be in distress, and the page should never leave them without a number to call."
      ),
      h3("Keep the tone steady"),
      p(
        "People facing a change are often tired of being told to stay positive. Avoid slogans about fresh starts or new chapters, and write as you would speak to a neighbor: this is a lot, and you do not have to sort it out alone. Short sentences and a calm pace tell the reader that the practice will not rush them. Test the page by reading it aloud, and trim anything that sounds like a greeting card."
      ),
    ],
    faqs: [
      {
        q: "Is life transitions counseling a clinical service?",
        a: "It is a way of describing the concerns clients bring, not a diagnosis. A licensed clinician decides what is appropriate for each person, and your page should say that sessions are tailored and that results are not promised. The page should repeat that the clinician and client set goals together, and that no particular result can be promised.",
      },
      {
        q: "Can we mention career coaching?",
        a: "Only if you actually offer it and are licensed to. Counseling and coaching are different services. If the practice does not provide career coaching, say that clearly and point to your counseling services. If a clinician has a separate coaching credential, describe it on their bio page and keep the counseling page focused.",
      },
      {
        q: "Should we create separate pages for job loss, moving and retirement?",
        a: "Only if each has enough unique, useful content. A single strong page that names each change often serves visitors better than three thin pages with the same text and a different title. Merge pages that would repeat the same advice, and keep separate ones only when the search and the content truly differ.",
      },
      {
        q: "What do we say about people in a crisis?",
        a: "Say that the practice is not a crisis service and list the 988 Lifeline and 911. Place the line near the top of the page and near the contact form so it is easy to find. If the practice has extended hours or video sessions, mention them here, since a person in transition may not be free during office hours.",
      },
      {
        q: "How do we mention cost without scaring people off?",
        a: "State fees plainly, mention any reduced fee options and offer help checking benefits. A visitor who sees a clear number and a way to ask about options is more likely to call than one who sees nothing. A clear fee table or a line about reduced rates removes much of that worry before anyone has to call.",
      },
    ],
    citations: [SAMHSA_HELP, LIFELINE, ACA_ETHICS],
    links: [
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Specialty Pages For Therapy", description: "Describe concerns without clinical claims." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale and out of network options." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What happens at the first visit." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1281
  {
    slug: "adoption-and-foster-family-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "adoption and foster family counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Adoption and Foster Family Counseling Page for a Counseling Practice",
    metaTitle: "Adoption and Foster Family Counseling Page",
    metaDescription:
      "How to write a counseling page for adoptive and foster families: who attends, agency coordination, privacy and no clinical claims. Call (561) 291-2681.",
    answer:
      "An adoption and foster family counseling page explains who the practice serves, how parents, children and caseworkers fit in, what the clinicians have actually trained in, how privacy and consent work, and how to get started. It avoids claims about attachment or behavior, and it shows crisis help clearly.",
    author: "Liam Costello",
    publishDate: "2026-10-26T15:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Who looks for this page"),
      p(
        "Adoptive parents, foster parents, relatives raising a child and young adults who were adopted all search for counseling, and they ask different questions. Parents often want to know whether you understand the child welfare system. Older children and adults want to know whether they will be listened to without judgment."
      ),
      p(
        "The page cannot answer everything. It should show who you serve, what you do and how to begin, and make each reader feel included."
      ),
      h2("Be honest about experience"),
      p(
        "Do not claim a specialty the practice has not earned. If a clinician has worked with foster or adoptive families, or has completed named training, say so and describe it in one sentence. If the practice is new to this work, say that clinicians are glad to learn about each family's situation. Overstated expertise is the quickest way to lose the trust of families who have already been through a lot."
      ),
      p(
        "Our guide to [credentials and license titles](/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website) explains how to name training accurately."
      ),
      h2("Explain who takes part"),
      table(
        ["Person", "Role in counseling"],
        ["Child or teen", "Takes part in sessions as appropriate for their age and consent rules."],
        ["Parents or guardians", "May attend, give consent and take part in separate meetings."],
        ["Caseworker or agency", "Contact only with the legal guardian's written permission and as the agency requires."],
        ["Other family", "Siblings or relatives may join when the clinician and guardian agree."],
        ["Adult adoptees", "Can see a clinician on their own, without a parent."]
      ),
      h2("Handle consent and privacy carefully"),
      p(
        "Foster care and adoption involve legal guardians, agencies and sometimes courts, and the rules about who may consent to counseling differ by situation. The page should not interpret them. Say that staff will ask about legal guardianship at the first call and explain what paperwork is needed. Our guide on the [teen therapy page for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims) shows how to explain consent for minors in general terms."
      ),
      p(
        "Never ask for case details through the website form. Ask for a name, phone number and preferred time, and collect the rest by phone. Our guide to the [first time contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) lists fields to keep and fields to leave out."
      ),
      h2("Point to trusted outside resources"),
      p(
        "Families often need more than counseling. The Child Welfare Information Gateway publishes [adoption and foster care resources](https://www.childwelfare.gov/), and the [Florida Department of Children and Families](https://www.myflfamilies.com/) lists state services. Link to them as helpful reading, not as endorsements, and never imply that the practice is part of an agency."
      ),
      h3("Say what the first call looks like"),
      p(
        "Families are often tired of retelling their story. Tell them what the first call includes: a few questions about who is in the family, who holds legal consent and what schedule works, followed by a description of the clinician who may be a fit. Say that case details are shared in session, not with a front desk by phone. Knowing this in advance lets a worn out parent decide to call."
      ),
      h2("Keep the tone warm and the claims small"),
      ul(
        "Avoid labels for children, and avoid describing behavior as a diagnosis.",
        "Do not promise that counseling will strengthen a bond or improve behavior.",
        "Use people first language and welcome many kinds of families.",
        "Add crisis resources, and say the practice is not an emergency service."
      ),
    ],
    faqs: [
      {
        q: "Should we say we are trauma informed?",
        a: "Only if the clinicians have specific training you can name. Otherwise describe how you work with families in plain words, such as listening, moving at the family's pace and explaining each step. Do not use the phrase as marketing. Naming specific training also helps families compare practices honestly and ask staff informed questions.",
      },
      {
        q: "Who can consent to counseling for a foster child?",
        a: "That depends on the child's legal situation, and the agency or court may be involved. The page should not state a rule. Say that staff will ask about guardianship and the paperwork needed when families call. Staff can describe what documents are usually requested, such as a court order or a letter from the agency, without interpreting them.",
      },
      {
        q: "Can we work with a caseworker?",
        a: "Often yes, with the legal guardian's written permission and within the agency's requirements. Say in general terms that the practice coordinates only with permission, and explain how families can request it. The release should be specific about who may talk to whom, and families can withdraw it later in writing.",
      },
      {
        q: "Should the page mention open adoption or birth family contact?",
        a: "Only briefly, as one of the topics families bring. Avoid advice about what any family should do, and let clinicians explore each situation with the people involved. If a family wants to explore this in depth, the clinician can do so with them in session, at their own pace and with respect.",
      },
      {
        q: "Can adult adoptees be a focus of the page?",
        a: "Yes, with their own short section. Say that adult adoptees can see a clinician independently and that privacy rules apply as for any adult client. Keep the section separate from the parent information. Adult adoptees should never feel that a parent or agency will be told about their sessions without their permission.",
      },
    ],
    citations: [CHILD_WELFARE, FL_DCF, ACA_ETHICS],
    links: [
      { href: "/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims", label: "Parenting And Family Therapy Page", description: "Describing family counseling." },
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page", description: "Consent and confidentiality for teens." },
      { href: "/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice", label: "Community Resources Page", description: "Outside help families can use." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new A
  {
    slug: "divorce-and-separation-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "divorce and separation counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Divorce and Separation Counseling Page for a Counseling Practice",
    metaTitle: "Divorce and Separation Counseling Page for a Practice",
    metaDescription:
      "Write a divorce and separation counseling page that is kind and clear: who it helps, what it is not, privacy and cost. Call (561) 291-2681.",
    answer:
      "A divorce and separation counseling page says who the practice helps, such as individuals, co parents and families, makes clear that counseling is not legal advice or a custody evaluation, explains privacy, fees and how to start, and offers crisis resources. It names the situation honestly and promises no outcome.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T15:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("The searches behind this page"),
      p(
        "People rarely type the word divorce into a search box on a calm day. They search after a hard conversation, a move out or a legal letter. Some want counseling for themselves, some want help with how to talk to their children, and some are trying to decide whether to separate at all. Each of those needs a different first sentence."
      ),
      p(
        "A good page greets each of them without taking sides. It does not push toward staying together or toward leaving."
      ),
      h2("Name the people you help"),
      ul(
        "An individual coping with a separation or divorce, at any stage.",
        "A person deciding what to do next, who wants a place to think aloud.",
        "Parents who want to talk through how to share news and routines with children.",
        "Co parents who want help with day to day communication.",
        "Adult children whose parents are separating."
      ),
      p(
        "If the practice also offers marriage or couples work, link to your [couples counseling page](/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims) and say that couples sessions are a different service from sessions for one person."
      ),
      h2("Say plainly what counseling is not"),
      table(
        ["Counseling is", "Counseling is not"],
        ["A confidential place to talk through feelings and choices", "Legal advice about property, support or parenting plans"],
        ["Support for you or your family", "A custody evaluation or a report for the court"],
        ["Led by a licensed clinician", "A substitute for an attorney or a mediator"],
        ["Voluntary and your choice", "A way to take a side or decide who is right"]
      ),
      p(
        "That table does real work. It prevents mistaken expectations and protects the clinician from being pulled into a legal fight. If the practice does not provide court related reports, say so, and add that records are released only as the law allows, as described in our guide to the [confidentiality and its limits page](/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice)."
      ),
      h2("Handle children with care"),
      p(
        "Clinicians who see a child during a separation need consent from the people who hold it, and both parents may have a say. The page should not state rules. It can say that staff will ask about who may consent and what paperwork is needed. Our guide to the [parenting and family therapy page](/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims) explains how to describe this kindly."
      ),
      h3("Do not make the page about the other person"),
      p(
        "Visitors may be hurt or angry, and the page should not echo that. Avoid words that cast one person as the problem, and do not promise help in winning an argument. Say instead that counseling gives each person room to think clearly about what they want and how they will cope. This keeps the page honest, and it keeps the practice out of disputes that belong with attorneys and courts."
      ),
      h2("Be open about cost and scheduling"),
      p(
        "Separation often strains finances, so say what a session costs, whether a reduced fee is available and how to pay. Link to your [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained). Offer evening or video times if you have them, and keep the contact form short and free of case details."
      ),
      p(
        "Add crisis resources near the top, because a separation can be a moment of real distress. The 988 Suicide and Crisis Lifeline and 911 should be easy to find."
      ),
    ],
    faqs: [
      {
        q: "Should the page promise to save a marriage?",
        a: "No. Counseling cannot promise any outcome, and a page that suggests it can will mislead readers. Describe sessions as a place to talk and think, and let each person decide what they want. A page that stays modest about results is more believable to readers who have already been disappointed.",
      },
      {
        q: "Can the practice give a letter for court?",
        a: "That depends on the clinician and the situation. Your page should not promise it. Say that the practice follows the law and its ethics code about records and reports, and that questions should go to staff before the first session.",
      },
      {
        q: "Do we need separate pages for individual and co parent counseling?",
        a: "Only if each has enough different content to be useful. One well organized page with clear sections for each reader often serves visitors better than two pages with mostly the same words. If the clinician does both, the page should still describe them as separate services with separate fees and rules.",
      },
      {
        q: "Is it fine to name divorce on the page?",
        a: "Yes. It matches what people search and helps them find you. Use gentle language, avoid dramatic phrases and keep the focus on support and choices rather than on the legal process. Avoid headlines that sound like legal filings, since visitors are looking for support, not procedure.",
      },
      {
        q: "How do we word privacy for someone who has not told their spouse?",
        a: "Explain that sessions are confidential, how reminders are worded and what the billing statement shows. Our guide to reminder wording for counseling practices covers discreet messages, and clients can choose how they are contacted. If clients have not told family members about counseling, staff should ask how they prefer to be reached.",
      },
    ],
    citations: [AAMFT_ETHICS, ACA_ETHICS, LIFELINE],
    links: [
      { href: "/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Couples Counseling Page", description: "Describing relationship counseling." },
      { href: "/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims", label: "Parenting And Family Therapy Page", description: "Describing family counseling." },
      { href: "/guides/premarital-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Premarital Counseling Page", description: "A related relationship page." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new B
  {
    slug: "welcome-to-medicare-visit-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "welcome to Medicare visit page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Welcome to Medicare Visit Page for a Primary Care Practice",
    metaTitle: "Welcome to Medicare Visit Page for Primary Care",
    metaDescription:
      "Explain the Welcome to Medicare visit on a primary care website: who it is for, how to book and what it is not. Call (561) 291-2681.",
    answer:
      "A Welcome to Medicare visit page tells new Medicare enrollees that the practice offers a one time preventive visit, who may qualify, how to book it and what to bring. It points to Medicare.gov for eligibility and cost, and it never promises coverage or lists medical findings.",
    author: "Liam Costello",
    publishDate: "2026-10-26T16:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("A search that peaks in Florida"),
      p(
        "Florida has more people turning sixty five than most states, and many of them start by searching for a doctor who accepts Medicare. They hear about a Welcome to Medicare visit from a mailer, a friend or the Medicare website. A practice that answers the question directly gives them a reason to call."
      ),
      p(
        "The page should be short, friendly and exact about what it knows. Medicare sets the rules, and the practice describes how it carries them out."
      ),
      h2("What the visit is, in plain terms"),
      p(
        "Medicare.gov describes the [Welcome to Medicare preventive visit](https://www.medicare.gov/coverage/welcome-to-medicare-preventive-visit) as a one time visit available during the first year a person has Medicare Part B. Medicare, not the practice, decides who qualifies and what is covered. Your page should link to that source and say that patients can confirm their own eligibility with Medicare or their plan."
      ),
      table(
        ["Topic", "What your page can say"],
        ["Who it is for", "People who recently enrolled in Medicare Part B. Confirm your own date with Medicare."],
        ["What happens", "A visit with a clinician to review your history and plan next steps. Do not list tests or findings."],
        ["Cost", "Medicare.gov explains what is covered. We can check your coverage when you call."],
        ["How to book", "Call, use the booking link or ask for a Welcome to Medicare visit by name."],
        ["What to bring", "Medicare card, a photo ID, a list of medicines and the names of your other doctors."]
      ),
      h2("Keep it separate from the yearly wellness visit"),
      p(
        "Patients confuse these two visits constantly. The Welcome to Medicare visit is the first one, and the yearly wellness visit comes later. Medicare.gov explains the difference under its page on [preventive visits and yearly wellness exams](https://www.medicare.gov/coverage/preventive-visit-yearly-wellness-exams). Link your page to our guide on the [annual wellness visit page](/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims) so each patient lands in the right place."
      ),
      p(
        "Our guide to [preventive and problem visit billing](/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website) also explains why a patient may be billed differently if a problem is discussed at a preventive visit, which is worth a short sentence on your page."
      ),
      h2("Medicare wording that stays safe"),
      ul(
        "Say whether you accept Medicare and Medicare Advantage plans, and name the plans if you can. Our guide to [Medicare and Medicaid acceptance wording](/guides/medicare-and-medicaid-acceptance-wording-on-a-medical-practice-website) shows how.",
        "Do not promise that the visit will be free for every person. Say that Medicare explains cost and eligibility.",
        "Do not describe what a visit will find or prevent.",
        "Do not use the Medicare logo or imply that the practice is endorsed by the government."
      ),
      h2("Make it easy for people who are new to all of this"),
      p(
        "A person who is new to Medicare may not know their enrollment date, and they may be confused about plans. Offer a phone number staff will answer, and let patients know that the front desk can help them find the date on their card or in their account. Our [senior friendly layout guide](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access) has more on large text and simple pages."
      ),
      h3("Check it each autumn"),
      p(
        "Medicare rules and plan details change each year, so review the page every autumn when open enrollment begins. Confirm that the plans listed still apply, that the booking steps still work and that the links lead to current pages on Medicare.gov. Update the date at the bottom, and tell the front desk what changed so callers hear the same answer. A page that is accurate each season earns more trust than one that was written once and forgotten."
      ),
    ],
    faqs: [
      {
        q: "Can we say the visit is free?",
        a: "Avoid it. Coverage depends on the person's plan and on the practice accepting Medicare. Say that Medicare explains what is covered, and that staff can check a patient's coverage when they call. Staff can also explain that cost and coverage vary by plan, so no two patients should assume the same result.",
      },
      {
        q: "Should the page list what the visit includes?",
        a: "Only in general terms, and with a link to Medicare.gov. Listing tests, screenings or findings can read as a medical claim and may not match what each clinician does at the visit. A short sentence that the clinician decides what is appropriate at each visit keeps the page accurate.",
      },
      {
        q: "Do we need a separate page for Medicare Advantage?",
        a: "Usually not. One page can say which plans you accept and note that patients with a Medicare Advantage plan should check their own plan's benefits. Link to your insurance page for plan names. Patients who are unsure of their plan can bring the card to the office and ask staff to read it with them.",
      },
      {
        q: "How is this different from an annual wellness page?",
        a: "The Welcome to Medicare visit is the first preventive visit for new enrollees. The annual wellness visit is a yearly visit afterward. Keep two pages so each audience finds the right answer, and link them. Both visits can appear in a single linked set of pages so the right door is easy to find from search.",
      },
      {
        q: "Where should the page link from?",
        a: "Link it from your new patient page, your insurance page and the annual wellness page, and mention it in your Google Business Profile services if it matches a real service you offer. Add a link from your homepage services list too, because many patients start there and some never open a menu.",
      },
    ],
    citations: [MEDICARE_WELCOME, MEDICARE_WELLNESS, HHS_PRIVACY],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "The yearly visit after the first." },
      { href: "/guides/medicare-and-medicaid-acceptance-wording-on-a-medical-practice-website", label: "Medicare And Medicaid Wording", description: "Say what you accept, safely." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Listing the plans you take." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new C
  {
    slug: "prior-authorization-and-referral-timelines-explained-on-a-primary-care-practice-website",
    keyword: "prior authorization and referral timelines explained on a primary care practice website",
    category: "How-to",
    title: "Prior Authorization and Referral Timelines on a Primary Care Website",
    metaTitle: "Prior Authorization and Referral Timelines for Primary Care",
    metaDescription:
      "Explain prior authorization and referral timelines to patients: who does what, how long it can take and who to call. Call (561) 291-2681.",
    answer:
      "A prior authorization page tells patients that some tests, medicines and specialist visits need approval from their insurer before they happen, that the practice sends the request, that the plan decides and that timing varies. It explains who to call and what to expect, and it never promises approval or a date.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T17:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("The question behind many phone calls"),
      p(
        "A patient is told they need a test or a specialist visit, and then nothing seems to happen. They call the practice, the practice says it is waiting on the insurance company, and the patient feels they are being brushed off. A short page that explains the steps changes how that waiting feels."
      ),
      p(
        "The page also protects staff. When a patient knows who does what, calls become shorter and kinder."
      ),
      h2("Explain the steps in order"),
      ol(
        "The clinician orders a test, a procedure or a visit to a specialist.",
        "The practice checks whether the patient's plan requires approval, which is called prior authorization or a referral.",
        "If it does, the practice sends the request to the insurance plan with the information the plan asks for.",
        "The plan reviews it and decides. The practice cannot approve its own request.",
        "The practice tells the patient the result and helps schedule the visit or test.",
        "If the plan says no, the patient and the practice talk about options, including an appeal."
      ),
      h2("Be honest about timing"),
      p(
        "Timing depends on the plan, the service and how complete the paperwork is. Do not promise a number of days unless you can keep it. A more honest approach is to say that most requests take some days, that urgent requests are handled differently and that the patient can call the office for an update after a stated number of business days. The American Medical Association publishes [prior authorization resources](https://www.ama-assn.org/practice-management/prior-authorization) that describe why delays happen and what practices can do."
      ),
      table(
        ["Who", "What they do"],
        ["Patient", "Keeps the insurance card current, answers staff calls and checks their plan's rules."],
        ["Practice", "Sends the request, follows up and keeps the patient informed."],
        ["Insurance plan", "Reviews the request and makes the decision."],
        ["Specialist or test center", "Confirms the approval and schedules the visit."]
      ),
      h2("Tell patients how to help"),
      ul(
        "Bring or upload a photo of the current insurance card, front and back, at every visit.",
        "Tell the office right away about a new plan or a change in coverage.",
        "Answer calls from the office or the plan, since they may ask for details.",
        "Call the number on the insurance card to ask about coverage, because only the plan knows a person's benefits."
      ),
      p(
        "Keep health details out of web forms and email. Our guide to [specialist referral request pages](/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice) explains how to point patients to the portal or phone for anything about their care."
      ),
      h2("Say what happens if the answer is no"),
      p(
        "A denial is frustrating, and a page that mentions it kindly earns trust. Say that the practice will talk with the patient about next steps, which may include a different test, more information for the plan or an appeal. Do not predict the outcome. Link to your [insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) so patients know which plans you work with."
      ),
      h3("Give staff a status script"),
      p(
        "When patients call for an update, staff should be able to say three things: what was sent and when, what the plan has said so far and what will happen next. Keep a simple log for each request so any team member can answer. A patient who hears specifics feels cared for, even when the news is slow, and a patient who hears only that the request is pending will call back."
      ),
    ],
    faqs: [
      {
        q: "Should the page list services that need prior authorization?",
        a: "No. Requirements differ by plan and change often, so a list would soon be wrong. Say that some services need approval and that staff will check the patient's plan when a clinician orders one. If a patient needs a test or visit urgently, they should tell the clinician, who can decide how to proceed.",
      },
      {
        q: "Can we give a typical turnaround time?",
        a: "Only in general terms, such as some days, and ask patients to call for an update after a stated number of business days. Avoid exact promises, because the plan controls the timeline. If a plan changes its rules, the office updates its process, and the page needs no edit.",
      },
      {
        q: "Who should patients call for an update?",
        a: "Name one number, ideally for a referral coordinator or the front desk. Say the hours and what to have ready, such as the patient's name and date of birth, and explain that staff will call back with news. The number should reach a person during stated hours, and voicemail should promise a call back within a stated time.",
      },
      {
        q: "What if the patient has an urgent need?",
        a: "Tell them to speak with the clinician or call 911 in an emergency. Say that urgent requests are handled differently, and that the office cannot assess emergencies through the website. Offer to explain to a patient how to reach their plan's own member line, which can answer benefits questions.",
      },
      {
        q: "Does a referral always need prior authorization?",
        a: "No. Some plans require a referral, some require approval and some require neither. Say that rules depend on the plan, and let staff check. This avoids giving patients wrong expectations. If you are unsure of a plan's rule, say so and let staff check with the plan before the patient leaves.",
      },
    ],
    citations: [AMA_PRIOR_AUTH, MEDICARE_WELCOME, HHS_PRIVACY],
    links: [
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "How patients ask for a referral." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Listing the plans you take." },
      { href: "/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you", label: "Referral Partner Page", description: "How specialists find you." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new D
  {
    slug: "care-coordinator-and-patient-navigator-page-for-a-primary-care-practice",
    keyword: "care coordinator and patient navigator page for a primary care practice",
    category: "How-to",
    title: "Care Coordinator and Patient Navigator Page for Primary Care",
    metaTitle: "Care Coordinator and Patient Navigator Page for Primary Care",
    metaDescription:
      "Introduce a care coordinator or patient navigator on your primary care website: what they do, how to reach them and what they do not. Call (561) 291-2681.",
    answer:
      "A care coordinator page explains that one named person helps patients keep track of referrals, tests, paperwork and follow up between visits. It says how to reach them, what they handle, what they cannot do, such as give medical advice, and how health details are shared safely.",
    author: "Liam Costello",
    publishDate: "2026-10-26T17:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("What a care coordinator is for"),
      p(
        "Patients see a primary care clinician for a short visit and then walk into a maze of referrals, test centers and phone calls. A care coordinator, sometimes called a patient navigator, is the person who helps them find their way. The Agency for Healthcare Research and Quality describes [care coordination](https://www.ahrq.gov/ncepcr/care/coordination.html) as organizing care activities so that the right information gets to the right people at the right time."
      ),
      p(
        "Even a small practice may have someone who does this work. Naming the role on the website makes it real for patients and gives them a place to start."
      ),
      h2("What the page should explain"),
      table(
        ["Topic", "Plain wording"],
        ["Who it is", "Name and photo of the coordinator, with a short, true description of their role."],
        ["What they help with", "Referrals, scheduling tests, sending records and checking on paperwork."],
        ["What they cannot do", "Give medical advice or change a clinician's plan. Questions about care go to a clinician."],
        ["How to reach them", "A direct phone number or portal message, with hours and reply times."],
        ["Who can use the service", "All patients, or a defined group. Say which."]
      ),
      h2("Describe real tasks, not promises"),
      p(
        "List what the coordinator actually does today. Help with a referral, a call to a specialist's office to confirm a date, a reminder that a test is due or a check that records arrived are all concrete. Avoid claims that care coordination will improve health or reduce hospital visits, because those are outcome claims the practice cannot prove on a website."
      ),
      ul(
        "Following up on specialist and imaging referrals, as our guide to [specialist referral request pages](/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice) describes.",
        "Helping with forms and records requests, linked to your [records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records).",
        "Checking on appointments after a hospital stay, as in our [post hospital follow up page guide](/guides/post-hospital-follow-up-visit-page-for-a-primary-care-practice-without-clinical-claims).",
        "Explaining how insurance approvals work, as in our guide to [prior authorization and referral timelines](/guides/prior-authorization-and-referral-timelines-explained-on-a-primary-care-practice-website)."
      ),
      h2("Protect privacy when you introduce a person"),
      p(
        "A page about a coordinator should never ask patients to send health details through a form. Say that patients contact the coordinator by phone or through the portal for anything about their care, and that the office shares information with other providers only as the law and the patient's permission allow. Our guide to [publishing patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) covers this boundary."
      ),
      h2("Show the person behind the title"),
      p(
        "A photo and a two sentence introduction go a long way. Keep credentials accurate, and list a title only if the person holds it. Our [front desk and care team page guide](/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first) explains how to present staff warmly, and the [provider headshots guide](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website) covers the photo."
      ),
      h3("Learn whether it helps"),
      p(
        "After the page is live, track how many patients use the coordinator's number, how many calls the front desk handles about referrals, and what patients say in reviews and surveys. Use those counts to adjust hours and wording. Do not publish them as claims about outcomes. They are simply a way to learn whether the page makes work easier for patients and staff, which is the only reason to have it."
      ),
    ],
    faqs: [
      {
        q: "Is a care coordinator the same as a nurse?",
        a: "Not necessarily. The title describes a role, and the person may be a nurse, a medical assistant or an administrator. State their real background on the page and avoid titles they do not hold. If the coordinator is a nurse or other licensed person, say which license, and keep the information current.",
      },
      {
        q: "Can the coordinator answer medical questions?",
        a: "No. They can route questions to a clinician and help with logistics. Say so on the page, so patients do not expect medical advice from the coordinator or send details they should send to a clinician. Clinicians remain responsible for medical decisions, and the coordinator should send those questions to them promptly.",
      },
      {
        q: "Should every practice have this page?",
        a: "Only practices that actually have someone doing the work. A page that describes a service the practice does not provide misleads patients. If tasks are shared among staff, describe the team and the number to call. If tasks are shared, a short line naming who handles referrals and who handles forms is better than a new title.",
      },
      {
        q: "How do we handle reply times?",
        a: "State a realistic window, such as one business day, and what to do if the matter is urgent. Staff should meet the time stated, and the page should change if staffing changes. Staff should be trained to meet the time stated, and the page should be updated if staffing changes.",
      },
      {
        q: "Does the page need schema?",
        a: "FAQPage and Person markup are fine if they match visible text. Do not add medical claims. Keep it to the person's name, role and the practice they work for, and make sure it is accurate. Check the markup with the Rich Results Test and make sure nothing in it describes a result or an outcome.",
      },
    ],
    citations: [AHRQ_COORD, HHS_PRIVACY, FL_HEALTH],
    links: [
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Front Desk And Care Team Page", description: "Present your staff warmly." },
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "How patients ask for a referral." },
      { href: "/guides/post-hospital-follow-up-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Post Hospital Follow Up Page", description: "Visits after a hospital stay." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- new E
  {
    slug: "appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy",
    keyword: "appointment reminder wording for a counseling practice that protects client privacy",
    category: "Checklist",
    title: "Appointment Reminder Wording for a Counseling Practice",
    metaTitle: "Appointment Reminder Wording for a Counseling Practice",
    metaDescription:
      "Write counseling appointment reminders that protect privacy: sender name, opt in, lock screen safe wording and cancellation notes. Call (561) 291-2681.",
    answer:
      "Counseling reminders should say as little as possible: the time, the clinician's first name and a way to confirm or change, sent only to a number the client chose and with an easy opt out. Leave out the words therapy, counseling and diagnosis, because a lock screen or a shared phone may show the message to someone else.",
    author: "Gio LaRoche",
    publishDate: "2026-10-26T18:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why a reminder is a privacy decision"),
      p(
        "A reminder is the most common message a counseling practice sends, and it travels to a place the practice does not control: a phone that may sit face up on a table, a shared tablet or an email inbox a spouse can open. The client may not want anyone to know they see a counselor. Wording that works for a dental office can cause real trouble here."
      ),
      p(
        "Our guide to [appointment reminder wording for a primary care practice](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) covers the general rules. This page adds the extra care a counseling office needs."
      ),
      h2("Let the client choose"),
      ol(
        "Ask at intake whether the client wants reminders, by text, email, phone call or not at all.",
        "Record the number or address they choose, and ask whether it is safe to leave a voicemail.",
        "Explain in the intake paperwork what a reminder will say, so there are no surprises.",
        "Give a simple way to change the choice at any time, such as telling the front desk.",
        "Honor a request to stop immediately, and confirm it."
      ),
      h2("Wording that protects privacy"),
      table(
        ["Instead of", "Write"],
        ["Reminder: your therapy session with Dr. Lopez is tomorrow at 3 pm", "Reminder: you have an appointment tomorrow at 3 pm. Reply C to confirm."],
        ["Your counseling appointment at Bright Path Counseling", "Appointment reminder from the office for tomorrow at 3 pm."],
        ["Please complete your anxiety questionnaire before the visit", "Please check your portal before tomorrow."],
        ["You missed your session", "We missed you today. Please call the office when you have a moment."]
      ),
      p(
        "Name the sender in a way that reveals little. A text that arrives from the practice's full name tells anyone who sees it where the client is going. Where the system allows it, use a short, neutral sender name or a number the client has saved under a name they chose."
      ),
      h2("Handle cancellations and late arrivals kindly"),
      p(
        "A reminder is also the moment a practice mentions its cancellation rules. Keep the message short, and put the details in the policy. Link clients to your [cancellation and no show policy](/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice) once, at intake, instead of repeating fees in every text. Our [intake paperwork email guide](/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice) shows where that link belongs."
      ),
      h3("Follow the texting rules"),
      p(
        "Marketing and appointment texts are covered by rules on consent and opt out, and your texting vendor should record both. Our guide to [text message marketing compliance](/guides/text-message-marketing-compliance-for-a-medical-practice) explains the rules, and the FCC publishes a guide to [unwanted texts and calls](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts). Never include a clinical detail, a diagnosis or a medicine in a reminder."
      ),
      h2("Test the message before it goes out"),
      p(
        "Send a reminder to your own phone with the screen locked and see what appears. If you would not want a stranger at the next table to read it, change it. Review the wording each time the vendor or the template changes."
      ),
      h3("Write down what never goes in a message"),
      p(
        "Give staff a short list of things that never appear in a reminder: the reason for the visit, a diagnosis, a medicine, a clinician's specialty or any detail from a past session. Add a rule that if a client replies with anything personal, staff answer by phone or portal, not by text. A written list is easier to follow than judgment in the moment, and it protects clients and staff when a message goes out in a hurry."
      ),
    ],
    faqs: [
      {
        q: "Can a reminder say that the appointment is with a counselor?",
        a: "It is safer not to. Use the word appointment and the time. Clients who want more detail can choose it, but the default should reveal as little as possible on a lock screen or shared device. Clients can choose to see more detail in their reminders, but make that an opt in choice that staff record.",
      },
      {
        q: "Do we need written consent for text reminders?",
        a: "Get the client's agreement in writing at intake and record it. Explain how to stop messages and honor the request at once. Ask your attorney or compliance advisor to review your consent and opt out wording. A signed consent form and a record of opt outs also help if a client or a carrier ever questions the practice's texting.",
      },
      {
        q: "Should reminders include a link to the portal?",
        a: "A link is fine if it goes to a secure login and the text reveals nothing. Avoid links to forms that ask for health details, and never send a link that opens a client record without a login. Prefer the portal's own notification, which can say that a message is waiting without describing what it contains.",
      },
      {
        q: "What about voicemail reminders?",
        a: "Leave a message only if the client said it is safe. Say your first name and a call back number, not the practice type or the reason for the call. Respect any request for no voicemail. If a client prefers no voicemail, record that in their chart so every staff member follows it.",
      },
      {
        q: "How often should we review our templates?",
        a: "At least once a year and whenever you change software, add a clinician or alter your cancellation rules. Include reminder wording in your annual website and policy review. A calendar reminder each January works well, and so does assigning the review to one named person.",
      },
    ],
    citations: [HHS_PRIVACY, FCC_TEXTS, ACA_ETHICS],
    links: [
      { href: "/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details", label: "Reminder Wording For Primary Care", description: "The primary care version." },
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "What to send before session one." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation And No Show Policy", description: "Late and missed session rules." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
