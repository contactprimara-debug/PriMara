// -- Guides batch 18 - 2026-10-14 --
// Guide/AEO pages from the Command Center queue (rows 924-933), built by the page factory to
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
const PLAIN = {
  publisher: "PlainLanguage.gov",
  label: "Federal plain language guidelines",
  href: "https://www.plainlanguage.gov/",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};

export const guidesPartTwentyOne: Guide[] = [
  // ---------------------------------------------------------------- 924
  {
    slug: "after-visit-follow-up-emails-for-a-primary-care-practice-without-health-details",
    keyword: "after-visit follow-up emails for a primary care practice without health details",
    category: "How-to",
    title: "After-Visit Follow-Up Emails for a Primary Care Practice Without Health Details",
    metaTitle: "After-Visit Follow-Up Emails Without Health Details",
    metaDescription:
      "How a primary care practice can send a useful after-visit email that never mentions a diagnosis, test or treatment. Call (561) 291-2681.",
    answer:
      "An after-visit follow-up email from a primary care practice should say thank you, point to the secure portal for anything personal, give the front desk phone number, and ask for nothing sensitive in reply. Leave out the reason for the visit, test names and anything a stranger could learn by reading over a shoulder.",
    author: "Liam Costello",
    publishDate: "2026-10-14T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("What the follow-up email is for"),
      p(
        "Most practices send some message after a visit, and most of those messages are written by whoever had a free minute. The result is either silence or an email that says far more than it should. A good follow-up has a narrow job. It confirms the practice remembers the patient, tells them where the real information lives, and makes the next step obvious for the one patient in ten who has a question."
      ),
      p(
        "The email is also a quiet marketing asset. It is the moment a patient is most likely to leave a review, book a return visit or forward your number to a relative, so it is worth ten careful minutes once rather than a rushed paragraph every week."
      ),
      h2("Treat the inbox as a shared mailbox"),
      p(
        "Ordinary email is not a private channel. A family member may share the account, an employer may run the address, and a phone preview can show the first line on a lock screen. Write every follow-up as if the subject line and first sentence will be read by someone other than the patient."
      ),
      ul(
        "Do not name the reason for the visit, a test, a medication, a provider specialty that hints at a condition or a result.",
        "Do not include appointment details beyond what the patient already agreed to receive, such as a date and your office address.",
        "Do not attach summaries, bills with line items or forms that contain personal details.",
        "Do not ask the patient to reply with symptoms, photos or questions about their care.",
        "Do not add tracking pixels that tie an email open to a patient record without first reading our guide on [email marketing compliance for a medical practice](/guides/email-marketing-compliance-for-a-medical-practice)."
      ),
      h2("A four-part structure that stays safe"),
      ol(
        "A neutral subject line, such as a thank-you from the practice name, with no mention of the visit type.",
        "One sentence of thanks that could be sent to any patient on any day.",
        "A pointer to the secure portal for visit summaries, messages and bills, with a plain link and no health detail in the link text.",
        "The front desk phone number, office hours, and a single line telling the patient to call 911 for an emergency rather than reply."
      ),
      h3("Sample wording to adapt"),
      p(
        "Thank you for visiting us today. If you have a question about your visit, please sign in to the patient portal or call the front desk at the number below during office hours. If this is an emergency, call 911. We would be grateful if you would consider sharing your experience of our office on Google, and there is a link below. We cannot discuss personal health details by email. A practice can describe regular check-in visits safely by following [a follow-up visits page for ongoing care that avoids clinical claims](/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims), which keeps the focus on process instead of outcomes. Every follow-up message should also say where to go if something feels urgent, using the plain rule in our guide on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice). Patients who opt in to follow-up messages may also want practice news, which a [patient newsletter without health details](/guides/patient-newsletter-for-a-medical-practice-without-health-details) can provide on a schedule you control."
      ),
      h2("Where each part belongs"),
      table(
        ["Message part", "What a safe version looks like"],
        ["Subject line", "A thank-you with the practice name and nothing about the visit."],
        ["Opening sentence", "Gratitude that would read the same for every patient."],
        ["Details", "Portal link and phone number only, never results or summaries."],
        ["Review request", "A plain link to your Google profile, sent to everyone, not selected patients."],
        ["Closing line", "Emergency notice and a statement that email is not for health questions."]
      ),
      h2("Timing and who should receive it"),
      p(
        "Send the message the same afternoon or the next morning, when the visit is still fresh. Only send it to patients who gave an email address for this purpose, and keep an unsubscribe line even when the message is transactional, because people notice when they cannot stop a message."
      ),
      p(
        "If you also ask for a review, send the same invitation to every patient rather than choosing the happy ones, since Google's policy and the FTC's rules both frown on filtering. Our guide on [getting more patient reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating) explains the line in more detail."
      ),
      h2("How to tell whether it is working"),
      p(
        "Count outcomes at the practice level, not the patient level. Track how many follow-ups went out each week, how many review invitations were clicked, and how many calls to the front desk began with a question the email should have answered. If a particular question keeps arriving, add one sentence about it. If nobody ever clicks the portal link, move it higher."
      ),
      p(
        "Review the template every quarter with the person who answers the phone. Staff hear the confusion that analytics cannot see, and they will tell you which line patients misread."
      ),
    ],
    faqs: [
      {
        q: "Can a primary care practice email patients after a visit at all?",
        a: "Yes, for general messages the patient agreed to receive. Keep the content to thanks, contact details and a portal link, and send personal details only through a secure channel such as the portal.",
      },
      {
        q: "Should the email name the provider the patient saw?",
        a: "It can name the practice. Naming a provider is usually fine for a general practice, but avoid any provider title or specialty that would reveal why the patient came.",
      },
      {
        q: "Is it safe to include a review link in the email?",
        a: "Yes, if every patient receives the same invitation. Do not screen by satisfaction first, and do not offer a reward in return for a review.",
      },
      {
        q: "What if a patient replies with a health question?",
        a: "Have the mailbox send an automatic reply that says email is not monitored for health questions and gives the phone number and portal link. Staff should then move the conversation to a secure channel.",
      },
      {
        q: "How long should the email be?",
        a: "Short enough to read on a phone without scrolling much, usually under 100 words. One thank-you, one portal link, one phone number and one emergency line is plenty.",
      },
    ],
    citations: [HHS_PRIVACY, { publisher: "Federal Trade Commission", label: "Advertising and marketing guidance for businesses", href: "https://www.ftc.gov/business-guidance/advertising-marketing" }, PLAIN],
    links: [
      { href: "/guides/email-marketing-compliance-for-a-medical-practice", label: "Email Compliance", description: "Rules for marketing email in healthcare." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Patient Reviews", description: "Ask every patient, filter none." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New-Patient Forms", description: "Publish forms without exposing data." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 925
  {
    slug: "new-patient-welcome-text-or-email-for-a-medical-practice",
    keyword: "new patient welcome text or email for a medical practice",
    category: "How-to",
    title: "New Patient Welcome Text or Email for a Medical Practice",
    metaTitle: "New Patient Welcome Text or Email for a Practice",
    metaDescription:
      "What a medical practice should put in a welcome text or email to a new patient, and what to leave out. Call (561) 291-2681.",
    answer:
      "A new patient welcome message should confirm the date and time, give the address and parking, list what to bring, link to a secure forms page and say how to reach the front desk. It should not mention the reason for the visit, and a text version needs clear opt-in and a way to stop.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T09:20:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("The first message sets the tone"),
      p(
        "A new patient has just chosen your office from a list of nearly identical results. What they hear next decides whether they arrive calm and prepared or anxious and late. A welcome message is the cheapest way to make the first visit smoother, and it costs you nothing beyond the time to write it once."
      ),
      p(
        "The message has two readers. The patient wants to know where to go and what to bring. The practice wants fewer forgotten insurance cards and fewer calls asking for directions. Write for both by answering the questions your front desk already hears every morning."
      ),
      h2("Choose the channel before you write the words"),
      table(
        ["Channel", "What it suits"],
        ["Text message", "A short confirmation, a map link and a reminder, sent only after the patient opts in."],
        ["Email", "The fuller version with parking notes, forms link and what to bring."],
        ["Phone call", "Patients who gave no email, or who need help getting to the forms."],
        ["Printed card", "A handout at the desk that repeats the same details for the next visit."]
      ),
      p(
        "Texting carries extra duties. You need the patient's permission to send marketing or reminder texts, a message that identifies the practice, and a plain way to stop receiving them. Our guide on [text message marketing compliance for a medical practice](/guides/text-message-marketing-compliance-for-a-medical-practice) covers the consent wording in detail. Once the welcome message sets contact preferences, the reminders that follow should be just as careful, as our guide on [appointment reminder text and email wording without health details](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) shows. The welcome message is a good moment to ask whether a patient would like the practice's monthly update, using the opt-in rules in our guide to a [patient newsletter without health details](/guides/patient-newsletter-for-a-medical-practice-without-health-details). The welcome message works best when it matches what the scheduler said on the phone, so read it alongside the [new patient intake phone script](/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice) for the front desk."
      ),
      h2("What the email should contain"),
      ul(
        "The practice name, the street address and the suite or entrance, so nobody circles the building.",
        "The date, the time, and a request to arrive a little early, with the number of minutes your office actually wants.",
        "Where to park and whether the lot is shared with other tenants.",
        "A short list of what to bring, such as a photo ID, an insurance card and a list of current medications written on paper.",
        "A link to the forms page that opens on the practice's secure portal, not a form that collects health details by email.",
        "The front desk phone number and office hours, and a line that says to call 911 in an emergency."
      ),
      h3("Keep the reason for the visit out of it"),
      p(
        "Even a friendly line such as we look forward to talking about your knee can reveal health information to anyone who sees the screen. Greet the patient, not the condition. If you want to prepare the patient, tell them what to bring and where to log in, and leave the clinical conversation for the room."
      ),
      h2("Sample text message"),
      p(
        "Hello from the practice. Your first visit is confirmed for the date and time you gave us. Our address and parking details are at the link below, and please bring a photo ID and your insurance card. Reply STOP to end texts or call the front desk with questions. We cannot discuss health details by text. Genuine messages should be easy to tell from fakes, a point our guide on [scam texts and emails that impersonate a medical practice: what to tell patients](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients) makes in more detail. Practices that want to reach lapsed patients as well as new ones can use the same plain approach in a [patient reactivation letter for a primary care practice](/guides/patient-reactivation-letter-for-inactive-patients-of-a-primary-care-practice-without-health-details) sent by mail."
      ),
      p(
        "That is under 320 characters, so it will arrive as one or two messages. Resist adding an offer, a survey or a second link. A confirmation that does one job gets read."
      ),
      h2("When and how often to send"),
      p(
        "A sensible pattern is a confirmation at booking, a reminder a day or two before, and a brief thank-you afterward. More than that begins to feel like marketing. If the patient replies, make sure a person reads it within office hours, because an unanswered reply is the fastest way to turn a warm welcome cold."
      ),
      p(
        "Test the whole sequence yourself with a new phone number before you switch it on. Check that the map link opens, the forms link works on a phone, and the sender name is your practice rather than a string of digits."
      ),
      h2("Plan for replies, wrong numbers and no-shows"),
      p("Every welcome text produces a few surprises. Someone replies with a question, a number belongs to a family member, or a patient never opens the message at all. Decide in advance who reads replies, how quickly, and what the standard answer is. A shared inbox that nobody owns is where welcome messages go to die."),
      p("For patients who do not respond, a phone call the day before is still the most reliable reminder. Note on the schedule which patients have confirmed, and use the quiet moments in the front desk day to call the rest."),
    ],
    faqs: [
      {
        q: "Do I need permission before texting a new patient?",
        a: "Yes. Get the patient's consent to receive texts, identify the practice in the message and include a way to opt out. Ask for the consent on your intake or booking step, and record it.",
      },
      {
        q: "Can the welcome message include the appointment type?",
        a: "It is safer to leave it out. A visit type can hint at a health issue, and messages are easy for other people to read on a shared device.",
      },
      {
        q: "Should the welcome email contain the new patient forms as attachments?",
        a: "No. Link to a secure forms page instead. Attachments get forwarded, saved to shared folders and stored in places your practice does not control.",
      },
      {
        q: "How long before the visit should the welcome message go out?",
        a: "Send the first one at booking and a reminder a day or two before the visit. Patients who book weeks ahead may also appreciate a short note the week of the appointment.",
      },
      {
        q: "What should happen when a patient replies to the welcome text?",
        a: "A staff member should read it during office hours and answer logistics questions. For health questions, direct the patient to call or use the portal, and never continue the clinical conversation by text.",
      },
    ],
    citations: [HHS_PRIVACY, { publisher: "Federal Trade Commission", label: "Advertising and marketing guidance for businesses", href: "https://www.ftc.gov/business-guidance/advertising-marketing" }, PLAIN],
    links: [
      { href: "/guides/text-message-marketing-compliance-for-a-medical-practice", label: "Text Message Compliance", description: "Consent and opt-out for patient texts." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New-Patient Forms", description: "Publish forms without exposing data." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What to Bring", description: "A first-appointment page for primary care." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 926
  {
    slug: "late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice",
    keyword: "late arrival and missed appointment policy page for a primary care practice",
    category: "Checklist",
    title: "Late Arrival and Missed Appointment Policy Page for a Primary Care Practice",
    metaTitle: "Late Arrival and Missed Appointment Policy Page",
    metaDescription:
      "How a primary care practice can publish a fair, plain late-arrival and missed-appointment policy page. Call (561) 291-2681.",
    answer:
      "A late-arrival and missed-appointment page should state how many minutes late a patient can arrive, what happens after that, how to reschedule, and whether any fee applies. Publish only rules the office actually follows, write them in plain words, and keep the same wording on the website and in the Google profile.",
    author: "Liam Costello",
    publishDate: "2026-10-14T09:40:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("Why primary care needs its own version of this page"),
      p(
        "Primary care schedules run in short, back-to-back slots. One patient who arrives twenty minutes late can push every visit behind them, and the patients waiting in the room are the ones who feel it. A written policy turns that problem from an argument at the desk into a rule people knew in advance. To capture people who are switching practices, publish a page like the one described in [a page that explains how to transfer care from another doctor](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice) and link it from the new-patient pages. Patients with ongoing needs look for how follow-up visits work, and [a follow-up visits page for ongoing care that avoids clinical claims](/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims) shows how to explain it without medical claims. Every cancelled visit leaves a gap, and a written [cancellation list and same-day openings policy](/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice) lets the office offer that slot to a waiting patient fairly."
      ),
      p(
        "This is different from a counseling cancellation page. A therapy hour is a protected block with one person in it. A primary care day mixes new visits, follow-ups and same-day requests, so the policy has to explain what happens to a late patient in terms of the schedule, not just a fee."
      ),
      h2("Decide the rules before you write the page"),
      p(
        "The page can only describe what your office truly does. Sit down with the front desk lead and the practice manager and settle each of these points first, because the staff who enforce the rule need to agree with it."
      ),
      ul(
        "The grace window: how many minutes after the scheduled time the provider can still see the patient.",
        "What happens past that window: reschedule, shorten the visit, or move to the next open slot the same day.",
        "How the office records a missed visit and when it counts as a no-show.",
        "Whether any fee exists, who approves waiving it, and how a patient disputes it.",
        "How a patient cancels or reschedules, including after-hours options and the notice you want."
      ),
      h2("Write it in the order a patient needs it"),
      table(
        ["Section of the page", "What it should say"],
        ["If you are running late", "Call the front desk. State the grace window and what the office will try to do."],
        ["If you miss your visit", "Explain how to rebook and how soon the office usually contacts the patient."],
        ["If you need to cancel", "Say how much notice helps and give the phone number and portal option."],
        ["Fees, if any", "Name the amount, when it applies and who to contact, or state that there is none."],
        ["Exceptions", "Say that the office considers emergencies, illness and transport problems case by case."]
      ),
      h3("Say the quiet part kindly"),
      p(
        "Patients are late for reasons ranging from traffic to a sick child. Open with understanding, then state the rule. A page that sounds like a penalty notice drives people to leave a one-star review, while one that explains the effect on other patients gets nods."
      ),
      h2("Avoid three common mistakes"),
      p(
        "First, do not copy another practice's fee. If your office has never charged one, say there is no fee, and do not invent a number to appear serious. Second, do not promise flexibility the schedule cannot give, such as we always make time for late patients. Third, never imply that a missed visit will affect the patient's care, since that is a clinical claim the website cannot make. Patients who stopped coming after a missed visit can be invited back without any mention of the past, using the approach in our [reactivation letter for inactive patients](/guides/patient-reactivation-letter-for-inactive-patients-of-a-primary-care-practice-without-health-details)."
      ),
      p(
        "Check the page against your online booking tool and your reminders. If the reminder text says arrive ten minutes early and the page says five, patients will notice. Our guide on [online appointment scheduling and SEO](/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo) shows where to keep those details consistent. A policy works best when the reminder repeats it in one line, using the wording suggested in our guide to [appointment reminder text and email without health details](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details)."
      ),
      h2("Where to publish and link it"),
      p(
        "Give the policy its own page with a plain title, link it from the footer, the booking confirmation and the reminder messages, and mention it in your Google Business Profile's appointment link description where it fits. The same wording should appear in every place so a patient never sees two different rules."
      ),
      h2("Make sure staff say it the same way"),
      p("A policy is only as fair as its enforcement. If one receptionist waives the rule for regulars and another applies it to newcomers, patients will feel the difference and say so in reviews. Give the front desk a short script for each situation, covering what to say when a patient calls from the road, when they arrive past the window and when they ask for an exception."),
      p("Review the numbers at the practice level every month. Count how many visits were rescheduled for lateness, how many were missed and how many fees were waived. If the figures are climbing, the problem may be reminder timing or parking rather than patient behavior, and the page should change to match what you learn."),
      p("Finally, put a date of last review at the bottom of the page. It tells patients the rules are current, and it reminds your team to check them."),
      p("Offer a quick path to act, too. A reschedule link or a direct phone number placed beside the policy turns a rule into a solution, and patients who can fix a problem in one tap are far less likely to simply stop coming."),
    ],
    faqs: [
      {
        q: "How long should the grace period be?",
        a: "That is the practice's call. Many offices choose a short window tied to how long their visits last. Pick one you can enforce, write the exact number of minutes on the page and apply it the same way to everyone.",
      },
      {
        q: "Does a primary care practice have to charge a no-show fee?",
        a: "No. A fee is optional. If you charge one, state the amount and when it applies. If you do not, you can simply explain how to reschedule.",
      },
      {
        q: "What should the page say about same-day sick visits?",
        a: "Say how patients should call and what the office can offer, without promising a slot. Add the emergency notice telling patients to call 911 for urgent problems.",
      },
      {
        q: "Can the policy page mention how a missed visit affects care?",
        a: "Avoid it. Statements about health effects are clinical claims. Stick to scheduling facts, such as how to rebook and when the office will follow up.",
      },
      {
        q: "Where else should the policy appear?",
        a: "In booking confirmations, appointment reminders and your Google profile's appointment link, using the same words everywhere.",
      },
    ],
    citations: [HHS_PRIVACY, PLAIN, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling", description: "Booking pages that help SEO." },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types and Lengths", description: "Explain appointment types clearly." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Therapy Cancellation Policy", description: "The counseling version of this page." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 927
  {
    slug: "school-work-and-camp-note-requests-page-for-a-primary-care-practice",
    keyword: "school, work and camp note requests page for a primary care practice",
    category: "How-to",
    title: "School, Work and Camp Note Requests Page for a Primary Care Practice",
    metaTitle: "School, Work and Camp Note Requests Page Guide",
    metaDescription:
      "How a primary care practice can publish a clear page for school, work and camp note requests without exposing health details. Call (561) 291-2681.",
    answer:
      "A note-request page should say who can ask for a school, work or camp note, how to ask through the portal or phone, how long the office needs, and what the note will and will not contain. Never collect health details on the page itself, and explain that sending a note to a third party may need the patient's written permission.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T10:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Notes are small requests that fill a front desk"),
      p(
        "Every school year, and again before summer camps and new jobs, a primary care office fields the same set of calls. Can I get a note for the days I missed? Can you fill in this camp form? Does my employer need something signed? Each one is simple, and together they eat hours that could go to scheduling real visits. Work notes and forms often come through an employer, so keep the rules in one place and link a [workplace partnership page for a primary care practice](/guides/employer-and-workplace-partnership-page-for-a-primary-care-practice) for companies that book in groups."
      ),
      p(
        "A dedicated page answers most of those calls before they are made. It also helps the families who search for it, because a parent standing in a school office will type a question much like the title of this guide into their phone."
      ),
      h2("Say who can ask and how"),
      p(
        "Start with the people who can make a request. For an adult, it is the patient. For a minor, it is usually a parent or legal guardian. The details depend on the patient's age and on state law, so keep the wording general and have your compliance contact review it before it goes live."
      ),
      ol(
        "Tell the requester to sign in to the patient portal and use its request tool, or to call the front desk during office hours.",
        "List what to have ready: the patient's name and date of birth, the date of the visit the note refers to, and the name of the school, employer or camp.",
        "Explain that forms from a school or camp can be uploaded through the portal or dropped at the desk.",
        "State how many business days the office usually needs, as a range you can keep.",
        "Say how the finished note will be delivered, such as portal download, pickup or secure fax."
      ),
      h2("What the note covers, and what stays private"),
      p(
        "A visit note for school or work normally confirms that a person attended an appointment on a certain date. It does not have to explain why. Say on the page that the office shares only what the patient or guardian has agreed to share, and that anything further needs a signed authorization."
      ),
      table(
        ["Request", "What to tell the family"],
        ["Attendance note", "Confirms the visit date, with no reason given unless the patient asks."],
        ["Camp or sports form", "Bring the form with the sections the family fills in already completed."],
        ["Work letter", "Ask what the employer needs, since many accept a simple attendance note."],
        ["Anything sent to a third party", "May require a signed release, so ask the front desk before the visit."]
      ),
      h3("Do not collect details on the request page"),
      p(
        "Resist the urge to add a box labeled reason for the note. It invites a parent to type a diagnosis into a public web form. Use the secure portal for anything beyond name, date and recipient, and see our guide on [publishing new-patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) for the safer pattern."
      ),
      h2("Plan for the seasonal rush"),
      p(
        "Late summer and early fall bring the heaviest wave of requests. Mention the busy weeks on the page, suggest asking at the time of the visit rather than afterward, and update the turnaround estimate honestly. Pair the page with the seasonal reminders described in [our guide to seasonal service pages](/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals) so families find it before they call."
      ),
      p(
        "If your office charges for completing long forms, state that plainly with the amount. If it does not, saying so is a small reason for a family to choose you again."
      ),
      h2("Check that the page is doing its job"),
      p("After a month, compare the number of note-request calls with the number before the page existed. Ask the front desk which questions still arrive despite the page, and rewrite the relevant sentence. If families keep asking where to find the request tool, move the link higher or repeat it in your appointment reminders."),
      p("Also look at how people reach the page. If most arrive from a search for a school physical form, add a short pointer on that page. If most arrive from the portal, leave it alone. The goal is a short path from the question to the answer, with no clinical detail passing through the website at any point."),
      p("Keep the tone helpful rather than bureaucratic. Families asking for these notes are usually in the middle of a busy week, so short steps, a visible phone number and a clear turnaround estimate will be remembered far longer than any policy language."),
    ],
    faqs: [
      {
        q: "Can a parent request a note for their child?",
        a: "Usually yes, for a minor patient, but rules vary. State on the page that the parent or legal guardian may ask, and have your compliance contact check the wording.",
      },
      {
        q: "Does the note have to say why the patient was seen?",
        a: "No. An attendance note can confirm the visit date only. Anything more should be shared only with the patient's or guardian's agreement.",
      },
      {
        q: "How long should a practice say it takes to complete a note?",
        a: "Give a range of business days your office can reliably meet. It is better to promise three business days and deliver in two than to promise one and miss.",
      },
      {
        q: "Should the request page have a form?",
        a: "Only for logistics. Link to the secure portal request tool for anything else, and never add a free-text box where families may type health information.",
      },
      {
        q: "Can the practice charge for completing forms?",
        a: "Some do, for lengthy paperwork. If yours does, publish the amount and when it applies. If you do not charge, say so.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "U.S. Department of Health and Human Services", label: "HIPAA right of access guidance", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html" },
      PLAIN,
    ],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New-Patient Forms", description: "Publish forms without exposing data." },
      { href: "/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals", label: "Seasonal Service Pages", description: "Flu shots and school physicals." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Requests", description: "How patients ask for their records." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 928
  {
    slug: "specialist-referral-request-page-for-patients-of-a-primary-care-practice",
    keyword: "specialist referral request page for patients of a primary care practice",
    category: "How-to",
    title: "Specialist Referral Request Page for Patients of a Primary Care Practice",
    metaTitle: "Specialist Referral Request Page for Patients",
    metaDescription:
      "How a primary care practice can explain the specialist referral process to its own patients in plain words. Call (561) 291-2681.",
    answer:
      "A referral request page for patients should explain how to ask, which insurance plans need a referral, what to have ready, how long the office usually needs and how to check status. It should never ask for a diagnosis, and it should not promise approval, since the insurer decides.",
    author: "Liam Costello",
    publishDate: "2026-10-14T10:20:00Z",
    dateModified: "2026-10-14",
    readMinutes: 7,
    sections: [
      h2("A referral page is for your own patients"),
      p(
        "Most pages about referrals are written for other doctors who want to send patients to you. This one is the opposite. It is for your existing patients who need to see a specialist and have no idea how the process works. They want to know whether they can book directly, whether their plan needs paperwork, and who to call when nothing seems to be happening."
      ),
      p(
        "Without a page, those questions arrive as phone calls at the busiest hour of the day. With one, the front desk can send a link and spend the call on the part that needs a person."
      ),
      h2("Explain the three possible paths"),
      p(
        "Not every plan handles referrals the same way, so a page that assumes one path will mislead some of your patients. Give a short, honest explanation of the three common situations and tell patients to confirm theirs with their insurer."
      ),
      table(
        ["Situation", "What the patient should do"],
        ["Plan requires a referral", "Ask the office to send it, and wait for confirmation before booking."],
        ["Plan does not require one", "The patient may book directly, but the office can still send records."],
        ["Plan needs prior authorization", "The specialist or the office may need to ask the insurer, which takes time."]
      ),
      p(
        "Healthcare.gov's glossary describes a referral as a written order from a primary care doctor to see a specialist, which is a useful plain-language definition to echo. Link to it, then say that plan rules differ and that the insurance card has a member services number."
      ),
      h2("What the patient needs to bring to the request"),
      ul(
        "The name and phone number of the specialist or the facility they prefer, if they have a choice.",
        "Their insurance plan name and member number from the card.",
        "The best phone number and the best time of day to reach them.",
        "Whether they want the records sent to the specialist, which may need a signed authorization.",
        "A note about any deadline, such as a trip or a school schedule, without describing the health reason."
      ),
      h3("Keep clinical details off the page"),
      p(
        "A referral exists because of a health concern, which is exactly why the page must not ask for it. Do not provide a field called reason for referral. Patients who want to discuss their care should use the portal or call, and the clinical team will take it from there."
      ),
      h2("Set expectations without making promises"),
      p(
        "Give a range for how long the office needs to process the request, and be clear that the specialist's schedule and the insurer's review are outside your control. A line such as we send the request within a set number of business days, and the insurer or specialist's office may take longer is honest and rarely disappoints."
      ),
      p(
        "Tell patients how to check status. If your portal shows referral progress, say so. If it does not, give the phone number and the hours when someone can look up the request. Patients forgive delay far more readily than silence."
      ),
      h2("How the page helps your search presence"),
      p(
        "Patients search for phrases like how do I get a referral to a specialist with my doctor's name or office in the query. A clear page earns the click, and it supports the referral relationships described in our guide to a [referral partner page for a primary care practice](/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you). Link the two pages so each audience finds the right one."
      ),
      p(
        "Review the page with the staff member who handles referrals every day, and add the question they hear most that the page does not yet answer."
      ),
      h2("Give the front desk a short script"),
      p("The page works best when staff use it. Write a two-sentence script that begins with where the patient stands in the process and ends with the link. For example, the desk can say that the request has been submitted, that plans vary in how long they take, and that the page explains how to check progress. Patients who hear the same words they can read later trust both more."),
      p("Keep a list of the most common specialists your patients visit, with their phone numbers, and update it each quarter. When a specialist changes locations or stops accepting a plan, you will know before the patients do."),
    ],
    faqs: [
      {
        q: "Does every patient need a referral to see a specialist?",
        a: "No. It depends on the insurance plan. Some plans require one, some do not, and some need prior authorization. Patients should confirm with their insurer using the number on their card.",
      },
      {
        q: "Should the referral page ask why the patient needs a specialist?",
        a: "No. That is health information. Ask for logistics only, and direct patients to call or use the portal to discuss their care.",
      },
      {
        q: "How long does a referral take?",
        a: "It varies. Give patients a range for your office's own processing time and explain that the insurer and the specialist's schedule can add time.",
      },
      {
        q: "Can the practice guarantee an insurer will approve the referral?",
        a: "No, and the page should not imply it. The insurer decides coverage, so say the office will submit what is needed and let the patient know the outcome.",
      },
      {
        q: "How can patients check the status of a referral?",
        a: "Through the portal if it shows referrals, or by calling the front desk during office hours. Tell patients which option your office supports.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "HealthCare.gov", label: "Health insurance glossary: referral", href: "https://www.healthcare.gov/glossary/referral/" },
      PLAIN,
    ],
    links: [
      { href: "/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you", label: "Referral Partner Page", description: "How specialists find your practice." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Show which plans you take." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Requests", description: "How patients ask for their records." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 929
  {
    slug: "group-therapy-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "group therapy page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Group Therapy Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Group Therapy Page Without Clinical Claims",
    metaDescription:
      "How a counseling practice can describe a therapy group by schedule, format and ground rules, with no outcome claims. Call (561) 291-2681.",
    answer:
      "A group therapy page should describe the logistics: who leads it, how big it is, when it meets, how someone joins, what it costs and what the ground rules are. Leave out promises about results and avoid saying a group treats a condition. Explain how confidentiality works in a group and how to reach a crisis line.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T10:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 7,
    sections: [
      h2("People search for the format as well as the problem"),
      p(
        "Someone considering a group has usually already wondered what happens in the room. Will they have to speak? Who else will be there? Is it just people sitting in a circle? A page that answers those questions calmly will get read, and the person who reads it is already close to making contact."
      ),
      p(
        "The temptation in this niche is to explain what the group fixes. Resist it. Licensing boards and advertising rules both discourage outcome claims, and a promise of improvement is exactly the kind of sentence a regulator or a reviewer will notice. Describe the group, and let the clinician speak about fit in a conversation."
      ),
      h2("The facts the page should state"),
      ul(
        "The name of the group and the licensed clinician who leads it, with credentials copied exactly from the license.",
        "The format: open or closed membership, in person or by video, and the number of participants the group usually holds.",
        "The schedule: day, time, length of each session and how many weeks it runs, if it has an end date.",
        "How to join: a short screening call, a form on the secure portal or a call to the office.",
        "The fee per session, whether insurance can be billed and what happens when a member misses a meeting.",
        "The point of contact for questions and the hours when someone answers."
      ),
      h2("Explain how a session feels, not what it achieves"),
      p(
        "The most helpful paragraph on the page often describes the structure of a typical meeting. For example, the group may begin with a brief check-in, move to a topic chosen by the leader, and close with a few minutes for questions. State only what your clinician truly does, and say that members choose how much to share."
      ),
      table(
        ["Question a visitor has", "A safe way to answer it"],
        ["Do I have to talk?", "Say members decide how much to share and when."],
        ["Who else is in the group?", "Describe the format, never the individuals."],
        ["Is it private?", "Explain the confidentiality agreement and its limits in general terms."],
        ["How do I know it fits me?", "Offer a short call with the leader to talk about fit."]
      ),
      h3("Confidentiality needs special care"),
      p(
        "In a group, the clinician is bound by confidentiality, but the other members are not bound in the same way. A good page says so honestly and describes the ground rule the group asks everyone to follow. Have the clinician approve this paragraph word for word, and do not publish a promise that confidentiality is guaranteed."
      ),
      h2("Keep the sensitive parts out of the web form"),
      p(
        "A person who wants to join may be tempted to describe their situation in the contact form. Add a line that says please do not include personal or health details here, and send them to a phone call or secure form instead. Our guide on [what to put on a first session page for a therapy practice](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) shows how to set the same expectation before a one-to-one visit. Specialty pages on sensitive topics need extra care, and [an addiction counseling page that avoids clinical claims](/guides/addiction-counseling-services-page-for-a-counseling-practice-without-clinical-claims) shows the wording to use and the claims to leave out. Grief is one of the specialties people search for most, and [a grief counseling page written gently and without clinical claims](/guides/grief-counseling-page-for-a-counseling-practice-without-clinical-claims) explains how to write it gently and without promises. If you run a workshop or group for engaged couples, describe it separately and link a [premarital counseling page](/guides/premarital-counseling-page-for-a-counseling-practice-without-clinical-claims) so couples can choose between sessions and a group format."
      ),
      p(
        "End with the crisis notice that every counseling page should carry. If someone is in immediate danger they should call 911, and the 988 Suicide and Crisis Lifeline is available by call or text for those in distress. A practice that runs groups for young adults may also want a separate [college student counseling page without clinical claims](/guides/college-student-counseling-page-for-a-counseling-practice-without-clinical-claims) so students can find the right entry point quickly."
      ),
      h2("Have the leader approve every line"),
      p("Before the page goes live, the clinician who runs the group should read it aloud. Ask whether each sentence describes what really happens, and whether a participant would recognize it in the room. If the leader hesitates, the sentence is probably aspirational and should go."),
      p("Choose images carefully. A stock photo of people in a circle is harmless, but one that implies a certain kind of member or a certain problem is not. Plain photographs of the room, with no people in them, tell visitors what the space feels like without suggesting who attends."),
      p("When a group fills, say so and offer a way to join a waiting list. A page that stays open on a full group wastes visitors' time, and that is a quiet way to lose trust before the first session."),
      p("Keep the tone steady and unhurried throughout. A visitor reading about a group is often deciding whether they can face a room of strangers, so short sentences, plain words and a visible phone number do more to help than any description of the benefits ever could."),
    ],
    faqs: [
      {
        q: "Can a counseling practice say a group will help with a condition?",
        a: "It is safer not to. Outcome and treatment claims can break advertising and licensing rules. Describe the group's format and logistics, and invite people to talk with the clinician about fit.",
      },
      {
        q: "Should the page list the names of group members?",
        a: "Never. Not even first names or initials. Describe the format and size only.",
      },
      {
        q: "What should the page say about confidentiality in a group?",
        a: "Explain that the clinician keeps information confidential, that members are asked to respect each other's privacy, and that the practice cannot guarantee how other members behave. Have the clinician approve the wording.",
      },
      {
        q: "Can I show testimonials from group members?",
        a: "No. Testimonials in a mental health setting raise privacy and licensing concerns. Use neutral descriptions of the format instead.",
      },
      {
        q: "Does the page need a crisis notice?",
        a: "Yes. Include a line to call 911 in an emergency and mention the 988 Lifeline for people who are struggling.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "American Psychological Association", label: "Ethical Principles of Psychologists and Code of Conduct", href: "https://www.apa.org/ethics/code" },
      LIFELINE,
    ],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients want to know." },
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Therapy Specialty Pages", description: "Describe focus areas without clinical claims." },
      { href: "/guides/therapy-group-practice-marketing-playbook", label: "Group Practice Playbook", description: "Marketing a multi-clinician practice." },
      { href: "/mental-health", label: "Therapist Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 930
  {
    slug: "intake-paperwork-email-before-session-one-for-a-counseling-practice",
    keyword: "intake paperwork email before session one for a counseling practice",
    category: "How-to",
    title: "Intake Paperwork Email Before Session One for a Counseling Practice",
    metaTitle: "Intake Paperwork Email Before Session One",
    metaDescription:
      "How a counseling practice can email intake paperwork before the first session without exposing private details. Call (561) 291-2681.",
    answer:
      "The intake email should be short and neutral: link to the practice's secure forms portal, list the forms by name, say how long they take, include the session time and link, and give a phone number. Never attach questionnaires, never ask the client to reply with their history, and keep the subject line free of anything that describes why they are coming.",
    author: "Liam Costello",
    publishDate: "2026-10-14T11:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The email that decides how session one starts"),
      p(
        "A new therapy client who has booked an appointment often feels a mix of relief and nerves. The next message they receive from the practice is the first proof of what working with you is like. If it is clear, kind and short, they arrive ready. If it is a wall of text with a stack of attachments, the first fifteen minutes of the hour disappear into paperwork. For families searching about substance use, [an addiction counseling page that avoids clinical claims](/guides/addiction-counseling-services-page-for-a-counseling-practice-without-clinical-claims) explains how to describe counseling without promising recovery. If the counselor supports people after a loss, [a grief counseling page written gently and without clinical claims](/guides/grief-counseling-page-for-a-counseling-practice-without-clinical-claims) covers the tone, the details and the crisis line that belong on the page. Clients moving to a new clinician inside the practice should not have to repeat every form, and a [client transfer notice when a therapist leaves](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice) can explain what carries over."
      ),
      p(
        "Sending the paperwork ahead is also a privacy question. The forms ask for names, history and insurance information, so the way you deliver them matters as much as the forms themselves."
      ),
      h2("Send a link, never the forms"),
      p(
        "Attachments travel. They get forwarded, downloaded to shared computers and kept in inboxes for years. A link to the practice's secure portal or its HIPAA-compliant forms tool keeps the information where the practice can protect it. If your software cannot do that, ask the vendor about the secure option before you send a single client a form."
      ),
      p(
        "Our guide on [publishing new-patient forms online without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) describes how to check a form tool before you rely on it."
      ),
      h2("What to include in the email"),
      ol(
        "A neutral subject line, such as a message from the practice name about the upcoming appointment.",
        "The date, the time, the clinician's name and, for video sessions, the link to the secure session room.",
        "The list of forms to complete, named plainly: consent to treat, privacy notice, fee policy and insurance details.",
        "A realistic time estimate, such as fifteen minutes, and a request to finish them before the session.",
        "The cancellation policy in one sentence with a link to the full page.",
        "A phone number for help, and a final line with the 911 and 988 crisis information."
      ),
      h3("What the email should never contain"),
      ul(
        "The reason the client is seeking therapy, even in a friendly line.",
        "A clinical questionnaire or history form pasted into the body.",
        "A request to reply with their symptoms, medications or concerns.",
        "Other clients' names, even in the cc line."
      ),
      h2("Time the sequence"),
      table(
        ["When", "What goes out"],
        ["At booking", "A confirmation with the date, time and a link to the forms."],
        ["Two days before", "A short reminder that forms are still waiting, with the same link."],
        ["Day of the session", "The session link or address, with a line about arriving a few minutes early."],
        ["After forms are done", "A quiet thank-you that confirms receipt, with no detail about contents."]
      ),
      p(
        "If a client has not finished the forms by the evening before, a call is kinder than a third email. Some people struggle with the questions and need a chance to say so."
      ),
      h2("Keep the language gentle and plain"),
      p(
        "Write at a reading level that a tired person can follow on a phone. Our notes on [plain language for patient-facing content](/guides/plain-language-and-reading-level-for-patient-facing-web-content) apply directly. Avoid clinical terms, avoid the word patient if your practice says client, and avoid exclamation marks that might read as pressure."
      ),
      p(
        "Finally, test the whole flow as a new client would. Book a test appointment, open the email on a phone, click every link and complete the forms. Fix the first thing that annoys you."
      ),
      h2("Special cases: couples, minors and shared devices"),
      p("Some first sessions need more than one set of forms. For couples, say whether each person completes their own forms and whether the link goes to both addresses. For a minor, state who signs, since a parent or guardian is generally the one who consents, and the rules differ by state and by the age of the client. Keep these statements short and have the clinician confirm them."),
      p("Also consider shared devices. A client who uses a family computer may not want a message with the practice name in the subject line. Offer a choice of contact method at booking, and let the client pick text, email or phone, so the practice honors the preference from the first message."),
      p("Keep a copy of the final wording in a shared document and note the date of the last change. When the forms, the fee policy or the portal change, the email changes too, and a dated master copy makes sure nobody keeps sending last year's version to this year's clients."),
    ],
    faqs: [
      {
        q: "Can I attach the intake forms to the email?",
        a: "It is safer not to. Link to a secure portal or forms tool so personal information is not sitting in an inbox or on a shared device.",
      },
      {
        q: "What subject line should the email use?",
        a: "Something neutral, like a note from the practice name about the upcoming appointment. Do not mention therapy topics, diagnoses or the reason for the visit.",
      },
      {
        q: "How far ahead should intake paperwork be sent?",
        a: "At booking, with a reminder two days before. Longer lead times give clients space to finish at their own pace.",
      },
      {
        q: "What if the client does not finish the forms?",
        a: "Offer a few minutes at the start of the session, or a phone call before it. Some clients find the forms difficult, and a kind offer to help is better than another reminder.",
      },
      {
        q: "Should the email mention crisis resources?",
        a: "Yes. A short line telling clients to call 911 in an emergency and to use the 988 Lifeline if they are in distress is standard good practice.",
      },
    ],
    citations: [HHS_PRIVACY, PLAIN, LIFELINE],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New-Patient Forms", description: "Publish forms without exposing data." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy", description: "A fair policy page for a therapy practice." },
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Instructions", description: "Help clients join a video visit." },
      { href: "/mental-health", label: "Therapist Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 931
  {
    slug: "faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice",
    keyword: "FAQ page for a therapy practice: questions to answer without clinical advice",
    category: "Checklist",
    title: "FAQ Page for a Therapy Practice: Questions to Answer Without Clinical Advice",
    metaTitle: "FAQ Page for a Therapy Practice Without Advice",
    metaDescription:
      "Which questions a therapy practice's FAQ page can answer, and which to decline politely, with no clinical advice. Call (561) 291-2681.",
    answer:
      "A therapy practice FAQ should answer questions about logistics, fees, insurance, privacy, scheduling and how to start, in short plain answers of two to four sentences. It should politely decline questions that need clinical judgment, such as whether therapy will work for a person, and point those to a conversation with a clinician.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T11:20:00Z",
    dateModified: "2026-10-21",
    readMinutes: 7,
    sections: [
      h2("Why an FAQ page earns its place"),
      p(
        "People considering therapy often have a list of small worries that stop them from calling. They are not sure what it costs, whether their insurance covers it, or how long the first appointment lasts. A well-built FAQ removes those obstacles one at a time, and the same question-and-answer format is what search engines and AI assistants look for when they need a short, reliable reply. A page for service members should put the Veterans Crisis Line high on the page, which [a respectful page for veterans and military families](/guides/veterans-and-military-families-page-for-a-counseling-practice-without-clinical-claims) explains with example wording. Questions about how a doctor referral works are common enough to deserve an answer, and the outline for a [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) can serve as a model."
      ),
      p(
        "The risk is going too far. An FAQ that begins to advise visitors about their feelings or symptoms stops being a marketing page and becomes unlicensed clinical guidance on a public website."
      ),
      h2("Questions that belong on the page"),
      table(
        ["Topic", "Examples of questions to answer"],
        ["Getting started", "How do I book? How long until the first appointment? What happens in the first session?"],
        ["Cost", "What is the fee? Do you take insurance? Do you offer a sliding scale or superbills?"],
        ["Scheduling", "What are your hours? How do I cancel? Do you offer evenings or video visits?"],
        ["Privacy", "Who can see my records? How is my information stored? Can I use a nickname?"],
        ["Practicalities", "Where is the office? Where do I park? What if I am running late?"]
      ),
      p(
        "Each answer should be two to four sentences. Link out to the full page whenever one exists, such as the [fees and superbills page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) or the cancellation policy. Self-pay clients have the right to a good faith estimate, and [a plain-language good faith estimate page for self-pay clients](/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice) explains how a therapy practice can describe that on its site."
      ),
      h2("Questions to decline, and how"),
      p(
        "Some questions are natural but cannot be answered responsibly in public. A person asking can therapy cure my anxiety is looking for reassurance, and a web page that gives it makes a clinical promise. The same goes for medication, diagnosis, whether a child needs treatment or how long recovery takes."
      ),
      ul(
        "Will therapy work for me? Reply that every person is different and that the first conversation is the place to talk about fit.",
        "Do I have this condition? Reply that only a licensed clinician who has met the person can discuss that.",
        "Should I stop or change my medication? Reply that this is a question for the prescriber and never for a website.",
        "How long will it take? Reply that the length varies and that the clinician will talk about expectations after meeting.",
        "What should I do right now? Reply with the crisis lines and the office phone number."
      ),
      h3("Write the decline politely"),
      p(
        "A good decline still helps. Say what the practice can offer, such as a short consultation call, and give the next step. The visitor leaves with a path, not a closed door."
      ),
      h2("Structure it so search engines can read it"),
      p(
        "Use real questions as headings, put the answer directly beneath, and keep each answer short enough to be quoted. Add FAQPage structured data only for questions and answers that appear on the visible page, with identical wording, and test the markup with Google's rich results tool. Our guide on [writing patient FAQs that answer AI search](/guides/how-to-write-patient-faqs-that-answer-ai-search) covers the format in more depth."
      ),
      h2("Keep it current"),
      p(
        "An outdated FAQ is worse than none. Put a recurring reminder on the practice manager's calendar to read the page every quarter, check that every fee, hour and policy still matches the other pages, and add the question the front desk was asked most often that quarter."
      ),
      h2("A review checklist before you publish"),
      ul(
        "Every answer matches the fee, hour and policy pages, word for word where numbers are involved.",
        "No answer promises a result, names a condition as something the practice cures, or tells a reader what to do about their own symptoms.",
        "Every decline sentence offers a next step, such as a call or a first session.",
        "The crisis notice sits above the questions, not hidden at the bottom.",
        "The page works with a screen reader, with each question as a real heading and each answer as plain text."
      ),
      p("Ask someone who has never been to therapy to read it. If they can find the cost, the hours and the way to book within a minute, the page is working. If they stop at a word they do not know, replace it."),
      p("One more test is worth running. Read each answer aloud as if the visitor were sitting across from you, and ask whether you would say it to a stranger who might be in distress. Anything that sounds like advice should be shortened to a fact and a next step, and anything that sounds cold should be softened without adding a promise."),
    ],
    faqs: [
      {
        q: "How many questions should a therapy FAQ page have?",
        a: "Ten to fifteen well-chosen questions are plenty. Group them under a few headings so visitors can scan, and keep every answer short.",
      },
      {
        q: "Can the FAQ say that therapy helps with anxiety or depression?",
        a: "It is safer not to. Statements about outcomes are clinical claims. Describe what the practice offers and invite visitors to talk with a clinician about their situation.",
      },
      {
        q: "Should the FAQ discuss confidentiality?",
        a: "Yes, in general terms. Say that the practice keeps records private under the law, link to the privacy notice and avoid listing exceptions that need a clinician's explanation.",
      },
      {
        q: "Do I need FAQPage structured data?",
        a: "It is optional, but it helps machines read the page. Mark up only the questions and answers a visitor can see, and make the wording identical.",
      },
      {
        q: "How should the FAQ handle crisis situations?",
        a: "Put a short notice near the top that tells people to call 911 in an emergency and to call or text 988 if they are in distress, and repeat it on the contact page.",
      },
    ],
    citations: [GOOGLE_HELPFUL, LIFELINE, { publisher: "American Psychological Association", label: "Ethical Principles of Psychologists and Code of Conduct", href: "https://www.apa.org/ethics/code" }],
    links: [
      { href: "/guides/how-to-write-patient-faqs-that-answer-ai-search", label: "Patient FAQs for AI Search", description: "Write answers machines can quote." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale, out-of-network and superbills." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients want to know." },
      { href: "/mental-health", label: "Therapist Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 932
  {
    slug: "employee-assistance-program-page-for-a-counseling-practice",
    keyword: "employee assistance program page for a counseling practice",
    category: "How-to",
    title: "Employee Assistance Program Page for a Counseling Practice",
    metaTitle: "Employee Assistance Program Page for Counselors",
    metaDescription:
      "How a counseling practice can explain EAP sessions honestly, including what to check with the program first. Call (561) 291-2681.",
    answer:
      "An employee assistance program page should say whether the practice takes EAP referrals, which programs it works with if any, how a client gets an authorization, and what happens when the covered sessions end. Only name an EAP the practice has an agreement with, and tell clients to confirm limits with their program.",
    author: "Liam Costello",
    publishDate: "2026-10-14T11:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("What clients are really asking when they search for EAP"),
      p(
        "Someone who types counselor that accepts EAP into a search bar is usually trying to find out whether they can see a therapist without paying much or anything out of pocket. They may have a flyer from their employer, a phone number for the program, and no idea how the pieces connect. A clear page for that visitor can be the deciding factor in who they call."
      ),
      p(
        "An employee assistance program is a benefit that some employers offer. It often provides a limited number of confidential counseling sessions, though the details vary by employer and by program. That variation is the main reason the page has to be careful about what it states as fact. Practices that work with TRICARE or military families will find [a respectful page for veterans and military families](/guides/veterans-and-military-families-page-for-a-counseling-practice-without-clinical-claims) useful for describing it without implying a VA affiliation. Some people arrive through an employer plan and others want to stay private from it, and a [counseling page for working professionals](/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims) can explain both paths in plain words."
      ),
      h2("Only state what your practice has arranged"),
      p(
        "Being listed on a program's website is not the same as being contracted. Before the page names any program, confirm in writing that the practice is an active provider for it, and check the terms for how authorizations and payment work. A visitor who relies on a wrong claim will lose a day, and possibly a session, before finding out."
      ),
      ul(
        "Name an EAP only if the practice currently has an agreement and the program permits it to be named.",
        "Do not use a program's logo unless its brand rules allow providers to do so.",
        "Do not state the number of covered sessions, because that is set by the employer and the program.",
        "Do not list employer names, since a client's workplace is private information."
      ),
      h2("Explain the steps from the client's side"),
      ol(
        "Contact the EAP first, using the number on the employer's benefit materials, to ask about eligibility and to receive an authorization.",
        "Ask the program how many sessions are covered and what happens after they are used.",
        "Call the practice with the authorization details, or send them through the secure portal rather than by ordinary email.",
        "Book the first session and complete the intake forms as any new client would.",
        "Talk with the clinician early about what the practice can offer if more sessions are needed."
      ),
      h3("Be clear about privacy on both sides"),
      p(
        "Clients often wonder what their employer can see. The page should not guess. Say that the practice follows its privacy notice, link to it, and invite the client to ask their EAP how it shares information. Those are two separate relationships, and only the program can describe its own."
      ),
      h2("What happens when the covered sessions end"),
      table(
        ["Option", "How to describe it"],
        ["Continue with insurance", "If the practice bills the client's health plan, say so and link to the insurance page."],
        ["Continue as self-pay", "State the session fee or link to the fees page."],
        ["Transition elsewhere", "Say the clinician can talk through referrals if the practice is not the right fit."],
        ["Pause", "Remind clients they may return, and tell them how to rebook."]
      ),
      p(
        "Link this page to your [accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) and your fees page so clients can follow the path without calling."
      ),
      h2("Keep the page honest and current"),
      p(
        "Program relationships change. Assign someone to review the page every quarter, and remove a program's name the same week the agreement ends. Add the crisis line notice, since some visitors arrive through an EAP because they are having a hard time."
      ),
      h2("Mistakes to avoid"),
      ul(
        "Copying an EAP vendor's marketing language, which may make claims the practice cannot stand behind.",
        "Saying sessions are free, when the program, not the practice, decides what the client pays.",
        "Leaving a program's name on the page after the agreement has ended.",
        "Asking clients to send authorization numbers by ordinary email.",
        "Using the page to hint at which employers are common clients."
      ),
      p("Also keep a plain record of the date each program was last confirmed, because a name that was correct in spring may not be by autumn, and the front desk will be the first to hear about it from a frustrated client. A quarterly review keeps the page accurate. Put the review on the practice manager's calendar, and have the clinician who handles EAP referrals sign off each time."),
      p("Finally, test the page by calling your own front desk as a client would. Ask how to start with an EAP authorization and see whether the answer matches the page word for word. If the two differ, the page or the training needs fixing before a real client is confused by it."),
    ],
    faqs: [
      {
        q: "What is an employee assistance program?",
        a: "It is a benefit some employers offer that can include a limited number of counseling sessions. The details differ by employer and by program, so clients should ask their program directly.",
      },
      {
        q: "Can a counseling practice list the EAPs it works with?",
        a: "Only if it has a current agreement and the program allows the name to be shown. Check the terms before publishing, and remove the name when the agreement ends.",
      },
      {
        q: "Should the page say how many sessions an EAP covers?",
        a: "No. The employer and the program set that number. Tell clients to ask their program how many sessions they have.",
      },
      {
        q: "Does the employer know that an employee saw a counselor?",
        a: "The practice cannot answer for the program. Link to your privacy notice and invite clients to ask their EAP how it handles information.",
      },
      {
        q: "What should the page say about ongoing sessions?",
        a: "Describe the options in general terms: continue through insurance, pay the session fee, or discuss referrals, and link to the relevant pages.",
      },
    ],
    citations: [HHS_PRIVACY, { publisher: "SAMHSA", label: "Find help for mental health and substance use", href: "https://www.samhsa.gov/find-help" }, LIFELINE],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Show which plans you take." },
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Benefits Check Page", description: "Help clients check coverage." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale, out-of-network and superbills." },
      { href: "/mental-health", label: "Therapist Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 933
  {
    slug: "office-move-checklist-for-a-medical-practice-update-every-listing-and-page",
    keyword: "office move checklist for a medical practice: update every listing and page",
    category: "Checklist",
    title: "Office Move Checklist for a Medical Practice: Update Every Listing and Page",
    metaTitle: "Office Move Checklist: Update Every Listing",
    metaDescription:
      "A step-by-step checklist for a medical practice moving offices: Google, directories, insurers, website and patient messages. Call (561) 291-2681.",
    answer:
      "When a medical practice moves, change the address everywhere on the same day the new office opens: Google Business Profile, the website and its schema, insurance directories, the NPI record, Apple and Bing, health directories, reminders and signage. Keep the old address visible for a while, and re-check search results weekly until every listing agrees.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T12:00:00Z",
    dateModified: "2026-10-14",
    readMinutes: 7,
    sections: [
      h2("A move quietly breaks your local search results"),
      p(
        "Patients find a practice through a mix of maps, directories, insurer lists and old links. When the office moves, each of those sources updates at a different speed, and for a few weeks the internet will tell some patients to go to the wrong building. Every one of those patients is a missed appointment or an irritated review."
      ),
      p(
        "The way to limit the damage is a checklist with an owner and a date for every line. Do not leave it to whoever has a spare hour after the movers leave."
      ),
      h2("Before the move: prepare the changes"),
      ul(
        "Confirm the exact new address, suite number, entrance and parking instructions, and write them once in a shared document.",
        "Decide the first day of operations at the new site and the last day at the old one.",
        "Check that the phone number stays the same. If it changes, treat that as a second project.",
        "Gather logins for every listing and directory, and check who owns each account using our guide on [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain).",
        "Draft the patient message and the website banner so they are ready on the day."
      ),
      h2("Move day: change these first"),
      table(
        ["Where", "What to change"],
        ["Google Business Profile", "Edit the address, hours and map pin. Google may ask you to verify again."],
        ["Website", "Update the header, footer, contact page, location pages and structured data."],
        ["Phone greeting", "Add a short message with the new address for callers."],
        ["Appointment reminders", "Change the address in every template and test one."],
        ["Signs at the old office", "Post the new address and map for patients who arrive anyway."]
      ),
      p(
        "Google's help pages explain how to change a business address and when re-verification applies. If the pin looks wrong after the edit, follow the steps in our guide to [fixing a wrong map pin on a Google Business Profile](/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile)."
      ),
      h2("Within the first week: the quiet listings"),
      ol(
        "Update the NPI registry record for each provider and for the organization, since insurers and other systems read it.",
        "Send the new address to each insurance plan's provider directory through the credentialing channel, and check the CAQH profile if you use it.",
        "Edit Apple Business Connect, Bing Places and the major health directories.",
        "Correct your data aggregators and the general business directories.",
        "Update hospital and referral partner directories, and email the offices that send you patients.",
        "Fix the address on invoices, statements, email signatures and any printed materials."
      ),
      h3("Check consistency, not just edits"),
      p(
        "A listing that has been edited is not the same as a listing that has changed. Search for the practice name each week for a month and note any source that still shows the old address. Our guide on [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains why mismatches matter and how to fix stubborn ones."
      ),
      h2("Tell patients in two places"),
      p(
        "Patients need to hear it from you, not discover it. Send a short message by the channels they agreed to, put a banner on the website homepage and contact page for at least a few weeks, and have staff mention it on calls. Do not include health details in these messages, and keep the wording identical everywhere."
      ),
      p(
        "Keep the old location page live for a while with a clear note and a link to the new one, rather than deleting it, so people arriving from old links land somewhere useful."
      ),
      h2("Assign an owner and a date to every line"),
      p("The checklist only works when each line has a name and a due date beside it. Give the website items to whoever manages the site, the directory items to the practice manager, and the insurer items to the credentialing contact. Put the list in a shared document that the whole team can see."),
      p("Hold a short check-in a week after the move and again at one month. Look for patients who went to the wrong address, calls that began with a question about the old office, and listings that still disagree. Those are the lines to chase next, and they tell you what to add to the checklist for the next time."),
      p("Remember the small things that patients actually touch. Update the address on parking permits, building directories, delivery instructions for specimens or supplies, and the map link in every reminder, because a patient circling the wrong block is the experience that ends up in a review."),
    ],
    faqs: [
      {
        q: "How soon should I update Google after moving?",
        a: "Update it on the day the new office opens, or shortly before if your hours overlap. Changing it too early can send patients to a building that is not ready.",
      },
      {
        q: "Will Google make me verify again after an address change?",
        a: "Sometimes. A change of address can trigger a new verification, so plan for it and make sure someone can receive the code or video call at the new location.",
      },
      {
        q: "Do insurance directories update automatically?",
        a: "No. Each plan has its own process, usually through credentialing. Start these updates early and check each directory after the move.",
      },
      {
        q: "Should I delete the old location page?",
        a: "Not right away. Keep it with a clear note and a link to the new office so visitors from old links find the right page. Plan a redirect once the traffic fades.",
      },
      {
        q: "How do I know every listing has changed?",
        a: "Search for your practice name and phone number weekly for a month, and record any source that still shows the old address. Keep fixing until none remain.",
      },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Edit your business information", href: "https://support.google.com/business/answer/3039617" },
      { publisher: "CMS", label: "National Plan and Provider Enumeration System (NPPES)", href: "https://nppes.cms.hhs.gov/" },
      PLAIN,
    ],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone aligned." },
      { href: "/guides/how-to-fix-a-wrong-map-pin-or-location-on-a-google-business-profile", label: "Fix a Wrong Map Pin", description: "Correct the location on Google." },
      { href: "/guides/local-citation-building-checklist-for-a-medical-practice", label: "Citation Checklist", description: "Directories worth updating." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 954
  {
    slug: "holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting",
    keyword: "holiday and closure notices for a medical practice: website, Google profile and phone greeting",
    category: "Checklist",
    title: "Holiday and Closure Notices for a Medical Practice: Website, Google Profile and Phone Greeting",
    metaTitle: "Holiday and Closure Notices for a Medical Practice",
    metaDescription:
      "How a medical practice can announce holiday hours and closures on its website, Google profile and phone greeting. Call (561) 291-2681.",
    answer:
      "Announce a closure in three places on the same day: the Google Business Profile special hours, a short banner on the website, and the phone greeting. Use identical dates and wording, say what to do in an emergency, and remove the notice the day you reopen so patients are never misled.",
    author: "Liam Costello",
    publishDate: "2026-10-14T12:20:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("A closed door with no explanation costs you patients"),
      p(
        "Practices close for holidays, for training days, for a hurricane watch and sometimes for a burst pipe. Patients who find out at the front door are annoyed, and patients who find out from a wrong Google listing are worse off, because they believed something your office never said. A notice that appears in three places at once prevents most of that. A therapy practice has extra duties around planned absences, covered in our guide to [vacation and out-of-office coverage notices for a therapy practice](/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice), because clients may need to know who to call in a crisis. On days when only the advice line is staffed, point patients to a [nurse line and advice line page](/guides/nurse-line-and-advice-line-page-for-a-primary-care-practice-without-clinical-advice) that gives the number and the limits of the service."
      ),
      p(
        "The goal is not a clever announcement. It is a plain, consistent statement of dates, what the office can still do and what to do if something urgent happens while it is closed."
      ),
      h2("Write the notice once, then copy it"),
      p(
        "Draft a single version before you touch any system. Decide the first day closed, the first day open again, whether anyone answers the phone, and where urgent callers should go. Then every channel carries the same words, which stops the mismatches that make patients doubt the office."
      ),
      ul(
        "The dates, written out with the day of the week, so nobody has to count.",
        "Whether the phone is answered, goes to voicemail or forwards to an answering service.",
        "What happens to refill requests and messages in the portal while the office is closed.",
        "The emergency line: call 911 for an emergency, and the nearest urgent option your practice recommends.",
        "The date and time the office reopens and when staff will return messages."
      ),
      h2("Where to post it"),
      table(
        ["Place", "How to post it"],
        ["Google Business Profile", "Add special hours for each affected date so the listing shows closed."],
        ["Website", "Put a short banner on the home and contact pages, with a link to details."],
        ["Phone greeting", "Record a message that gives the dates and the emergency instruction."],
        ["Portal and email", "Set an automatic reply with the same dates and wording."],
        ["Door sign", "Post a printed copy with the phone number and the reopening date."]
      ),
      p(
        "Special hours on a Google listing are different from changing the regular hours. They apply only to the dates you choose and revert on their own, which is exactly what you want. Our guide on [Google Business Profile hours and closures during hurricane season](/guides/google-business-profile-hours-and-closures-during-hurricane-season) explains how to set them and how to mark a temporary closure."
      ),
      h3("Remember the voicemail and the answering service"),
      p(
        "The greeting is the notice patients hear most. Record it in a calm voice, keep it under thirty seconds, and test it by calling the office from a mobile phone. If an answering service takes calls, send them the notice in writing so their staff read the same words your recording uses."
      ),
      h2("Plan for unplanned closures"),
      p(
        "Keep a draft notice with blanks for the reason, the dates and the contact route. When something happens, someone can fill in the blanks within minutes instead of writing from scratch at the worst possible time. Decide ahead of time who is allowed to edit the Google listing and the website banner, and write the logins into your shared access document."
      ),
      p(
        "Agree on a single person who confirms the final wording. A notice that says one thing on the website and another on the phone message does more harm than silence."
      ),
      h2("Take the notice down on time"),
      p(
        "Put a reminder on the calendar for the morning you reopen. Remove the banner, restore the greeting and check that the Google listing shows open hours again. An out-of-date closure notice is one of the most common reasons a patient decides a practice has gone out of business, and it is entirely avoidable."
      ),
      p(
        "Afterward, spend five minutes noting what went wrong. Did patients still call asking if you were open? Did a refill request slip through? Add that line to the template for next time."
      ),
      h3("Keep a record and tell your vendors"),
      p("Keep a short record of each closure after it ends: the dates, where the notice was posted, who approved it and how many patients called anyway. After two or three closures, the pattern shows which channel patients actually read, and you can put the most effort there next time."),
      p("Do not forget the people who work outside the building. If a billing company, an answering service or a telehealth vendor depends on your hours, tell them the dates in writing, and ask them to confirm."),
      p("Test every channel after you post. Search for the practice on a phone and read the hours panel, call the main number and listen to the greeting, and open the website in a private window to see the banner as a visitor would. It takes five minutes and catches the mistakes that otherwise surface as angry calls on the first closed morning."),
    ],
    faqs: [
      {
        q: "Should a closure notice go on the Google listing or the website first?",
        a: "Do both on the same day. Set the Google special hours and publish the website banner together so patients do not see two different answers.",
      },
      {
        q: "Does a notice need to mention emergencies?",
        a: "Yes. A short line telling patients to call 911 for an emergency is standard, along with any urgent care route your practice recommends.",
      },
      {
        q: "What if the phone will not be answered at all?",
        a: "Say so clearly in the greeting and the notice, give the reopening date, and tell patients how portal messages and refill requests will be handled.",
      },
      {
        q: "How far ahead should a holiday closure be announced?",
        a: "Two weeks is a practical minimum for planned closures, with a reminder in the final week. Unplanned closures should be posted as soon as the decision is made.",
      },
      {
        q: "When should the notice come down?",
        a: "The morning the office reopens. Remove the banner, restore the greeting and confirm the Google listing shows normal hours.",
      },
    ],
    citations: [
      { publisher: "Google Business Profile Help", label: "Edit your business information", href: "https://support.google.com/business/answer/3039617" },
      HHS_PRIVACY,
      PLAIN,
    ],
    links: [
      { href: "/guides/google-business-profile-hours-and-closures-during-hurricane-season", label: "Hours and Closures", description: "Special hours during hurricane season." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls", description: "What patients hear when you are closed." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "Keep your listing accurate." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 956
  {
    slug: "telehealth-consent-and-technology-check-page-for-a-counseling-practice",
    keyword: "telehealth consent and technology check page for a counseling practice",
    category: "How-to",
    title: "Telehealth Consent and Technology Check Page for a Counseling Practice",
    metaTitle: "Telehealth Consent and Technology Check Page",
    metaDescription:
      "How a counseling practice can explain video-visit consent and a quick technology check before the first telehealth session. Call (561) 291-2681.",
    answer:
      "A telehealth consent and technology check page should explain what a video visit needs, how to test the connection before the session, what to do if it fails, and where the consent form lives. Keep the consent itself on the secure portal, and never ask clients to describe their reasons for therapy on the page.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T12:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 7,
    sections: [
      h2("Two jobs in one page: consent and readiness"),
      p(
        "Clients who choose video visits are asking for convenience, and the practice owes them two things in return. The first is a clear explanation of what telehealth involves and a way to agree to it. The second is a quick way to confirm the technology will work, so the first ten minutes of a session are not spent hunting for a microphone. New and expecting parents search in short windows, so [a perinatal and postpartum counseling page without clinical claims](/guides/perinatal-and-postpartum-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to put the practical answers first. The same structure carries over to medical offices, which can adapt it into a [virtual visits page for a primary care practice](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video) with their own consent and eligibility wording. Working professionals often choose video visits from a private space, so link this page from your [workplace stress counseling page for working professionals](/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims) with the times you offer."
      ),
      p(
        "Our guide to a [telehealth visit instructions page for a therapy practice](/guides/telehealth-visit-instructions-page-for-a-therapy-practice) covers the step-by-step joining instructions. This page deals with the earlier question: has the client agreed, and is their setup ready. Families searching for parent support need to know who attends sessions, which [a parenting and family therapy page that explains who attends and how consent works](/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims) explains in plain language."
      ),
      h2("What the consent section should explain"),
      p(
        "Your own consent form is written by the practice and reviewed by someone qualified in your state, since telehealth rules differ by location and by clinician license. The website page should not replace it. It should summarize what the form covers in plain language and link to the form on the secure portal."
      ),
      ul(
        "That sessions take place by secure video, and which platform the practice uses.",
        "That the client should be in a private place and the clinician will confirm their location at the start.",
        "That technology can fail, and what the plan is if it does, such as a phone call to a number on file.",
        "That the client agrees not to record the session unless the practice's policy says otherwise.",
        "Where to find the full consent form and how long it takes to complete."
      ),
      h3("Do not collect the signed form on the public page"),
      p(
        "A consent that names the client belongs on a secure system, not in a web form that emails the practice. Use the practice's portal or its forms tool, and check with the vendor that it supports the protections your practice needs under HIPAA. The same caution is described in our guide to [publishing forms online without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data)."
      ),
      h2("A five-minute technology check"),
      ol(
        "Use the device you will use for the session, not a different one.",
        "Open the practice's test link or a free camera test, and confirm that video and sound both work.",
        "Close other programs and, if you can, move closer to the router or switch from mobile data to Wi-Fi.",
        "Find a quiet room with a door, and consider headphones for privacy.",
        "Write down the office phone number so you can call if the video drops."
      ),
      table(
        ["Problem", "What to try first"],
        ["No picture", "Allow camera access in the browser settings and reload the page."],
        ["No sound", "Check the speaker or headphone choice inside the video tool."],
        ["Choppy video", "Close other apps, move closer to Wi-Fi or turn off video temporarily."],
        ["Cannot join", "Call the office and ask for a new link or a phone session."]
      ),
      h2("Privacy, in plain words"),
      p(
        "Tell clients what the practice does to protect a session and what they can do on their side. They can use a private room, avoid public Wi-Fi and keep the device updated. Avoid promises of perfect security, since no vendor can truthfully give one."
      ),
      p(
        "Finish with the crisis information: call 911 in an emergency, and call or text 988 for someone in distress. Because a telehealth client may be far from the office, ask them to share their location at the start of every session, as the clinician will explain."
      ),
      h2("Keep the page accessible"),
      p("Some clients will use a phone, some a tablet and some a shared computer. Write the instructions so that they work on any of them, avoid screenshots that cannot be read by a screen reader without text beside them, and offer a phone-only alternative for clients who cannot manage video. A client who cannot join is not a failed client; it is a signal that the process needs another door."),
      p("Ask a colleague who does not work in the office to follow the page from start to finish on their own device, and time how long each step takes. Replace any instruction that needs a phone call to understand."),
      p("Keep a short log of the technology problems that clients report. If three people struggle with the same step, the instruction is unclear rather than the clients being careless. Rewrite that step, test it again, and note the date of the change at the bottom of the page."),
    ],
    faqs: [
      {
        q: "Does a counseling practice need written consent for telehealth?",
        a: "Most practices collect one, and requirements differ by state and license. Have your compliance contact or attorney review the form, and keep the signed copy in a secure system.",
      },
      {
        q: "Can the consent form be an ordinary web form?",
        a: "Only if the tool is built to protect health information and the vendor will sign the agreement your practice needs. Otherwise, use the secure portal.",
      },
      {
        q: "What should the page say about recording sessions?",
        a: "State the practice's policy plainly. Many practices ask clients not to record, and the clinician will explain any exceptions in person.",
      },
      {
        q: "What if the video fails during a session?",
        a: "Say in advance that the clinician will call the number on file, so clients know what to expect and are not left waiting.",
      },
      {
        q: "Should the page promise that video visits are completely secure?",
        a: "No. Describe what the practice does and what the client can do, without guaranteeing absolute security.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "HHS Telehealth", label: "Telehealth for patients", href: "https://telehealth.hhs.gov/patients" },
      LIFELINE,
    ],
    links: [
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Instructions", description: "Help clients join a video visit." },
      { href: "/guides/telehealth-marketing-playbook", label: "Telehealth Marketing Playbook", description: "Marketing virtual care." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New-Patient Forms", description: "Publish forms without exposing data." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 958
  {
    slug: "couples-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "couples counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Couples Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Couples Counseling Page Without Clinical Claims",
    metaDescription:
      "How a counseling practice can describe couples sessions by format, scheduling and fees without promising outcomes. Call (561) 291-2681.",
    answer:
      "A couples counseling page should explain how sessions work, who attends, how long they run, how to book, what they cost and how the first call goes. It should not promise a stronger relationship, name problems it will fix or tell couples what is wrong. Describe the format and invite one conversation with the clinician.",
    author: "Liam Costello",
    publishDate: "2026-10-14T13:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Couples search with a different kind of nervousness"),
      p(
        "Someone looking for couples counseling is usually carrying two worries at once. They are unsure whether to seek help, and they are unsure how to ask their partner to do the same. A page that is calm, specific and free of judgment makes the decision to call a smaller one. Practices that see parents and children together can use [a parenting and family therapy page that explains who attends and how consent works](/guides/parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims) to explain consent, scheduling and what the practice does not do. Couples who are engaged and planning ahead have different questions from couples in difficulty, so give them their own [premarital counseling page](/guides/premarital-counseling-page-for-a-counseling-practice-without-clinical-claims) with its own fees and timing."
      ),
      p(
        "That same sensitivity is why the page needs discipline. The wrong sentence can sound like a diagnosis of a relationship, or a promise that sessions will save one. Neither is something a website can say responsibly."
      ),
      h2("Start with the format, not the conflict"),
      p(
        "Visitors want to know what happens before they decide to attend. Describe it the way you would describe it at a front desk, and keep every statement something the clinician actually does."
      ),
      ul(
        "Who attends: both partners together, with a note on whether individual sessions are ever offered.",
        "How long a session lasts and how often the practice usually meets with couples, with the schedule stated as typical and not guaranteed.",
        "How the first contact works, such as a short phone call with each partner or a first joint session.",
        "Where sessions take place: in the office, by video or both.",
        "What it costs, whether insurance can be used and what the cancellation policy says.",
        "How to book, including a phone number and a secure contact form."
      ),
      h3("Use neutral words about people"),
      p(
        "Write about couples and partners rather than husbands, wives or any assumption about who the visitors are. Let people describe their own relationships, and avoid examples that suggest a single typical problem."
      ),
      h2("What to leave out"),
      table(
        ["Avoid saying", "Say instead"],
        ["We will save your marriage", "Sessions are a place for partners to talk with a licensed clinician."],
        ["Fix communication problems", "The clinician will explain how sessions are structured."],
        ["Most couples improve", "Ask about fit during a short first call."],
        ["Struggling with affairs or abuse", "Call 911 or the national crisis lines if anyone is in danger."]
      ),
      p(
        "The last row matters. A couples page may be read by someone who is not safe at home. Add a clear line for emergencies and a link to the National Domestic Violence Hotline or 988, and make clear that the practice cannot respond to a crisis through a web form."
      ),
      h2("Be honest about privacy and the first call"),
      p(
        "Partners often worry about what the clinician will share with the other person. Your policy on this belongs in the clinician's own words, and the page can say that the practice will explain how it handles information at the first contact. Do not paraphrase a legal rule if you are unsure."
      ),
      p(
        "Mention that the form should not contain details about the relationship. Our guide on [writing a first session page for a therapy practice](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) shows how to prepare visitors for the first call without asking for anything private."
      ),
      p(
        "Photographs should be plain and welcoming. Avoid stock images of arguments, tears or perfect couples, since each suggests a story the clinician cannot promise."
      ),
      h2("Check the page against the clinician's own words"),
      p("The clinician who sees couples should read the final page aloud and mark any sentence that does not match how they actually work. If the page says the first session is joint but the clinician always starts with each partner separately, the page is wrong, not the clinician. Corrections made now prevent an awkward first meeting."),
      p("Then read it once as a skeptical partner would. Does any line sound like blame, or assume that one person is the problem? Rewrite it so both partners could read the page together and feel equally welcome."),
      p("Finally, link the page from your fees page and your contact page, so a couple can find the cost and the booking details without searching again. Review it every six months, and any time the clinician changes how they structure the first session."),
      h3("Small practical touches"),
      p("Consider a single paragraph about what to bring to the first call: a calendar of the partners' availability, the insurance card if coverage matters, and any questions about fees. This is practical, makes the first conversation shorter, and gives hesitant visitors something simple to do while they decide."),
      p("Mention too that the practice will not take sides in a booking call. Staff who answer the phone should be trained to schedule, explain fees and answer practical questions, and to leave the details of the relationship for the clinician. Saying so on the page lets a nervous partner call without rehearsing their story first."),
    ],
    faqs: [
      {
        q: "Can a couples counseling page say that therapy saves relationships?",
        a: "No. That is an outcome promise. Describe the format of sessions and invite visitors to talk with a clinician about whether counseling is a fit.",
      },
      {
        q: "Should both partners be named on the page?",
        a: "Never name clients or couples. Describe the service in general terms and do not use real stories.",
      },
      {
        q: "Does the page need a safety notice?",
        a: "Yes. A short line telling people to call 911 in danger, along with a crisis line, is important because some visitors may not be safe at home.",
      },
      {
        q: "Can the practice say it works with same-sex or unmarried couples?",
        a: "You can state who the practice welcomes if that is true and the clinicians agree. Keep it factual, such as welcoming all couples, without claims about outcomes.",
      },
      {
        q: "What should the page say about confidentiality between partners?",
        a: "Say that the clinician will explain how the practice handles information at the first contact. Do not paraphrase legal rules unless the clinician or your attorney has approved the wording.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "American Psychological Association", label: "Ethical Principles of Psychologists and Code of Conduct", href: "https://www.apa.org/ethics/code" },
      LIFELINE,
    ],
    links: [
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Therapy Specialty Pages", description: "Describe focus areas without clinical claims." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients want to know." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Sliding scale, out-of-network and superbills." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 959
  {
    slug: "introducing-a-new-provider-to-patients-online-for-a-primary-care-practice-without-clinical-claims",
    keyword: "introducing a new provider to patients online for a primary care practice without clinical claims",
    category: "Playbook",
    title: "Introducing a New Provider to Patients Online for a Primary Care Practice Without Clinical Claims",
    metaTitle: "Introduce a New Provider Online Without Claims",
    metaDescription:
      "How a primary care practice can announce a new provider on its website, Google profile and patient messages without clinical claims. Call (561) 291-2681.",
    answer:
      "Announce a new provider with a bio page, a short website notice, a Google profile update and one patient message. State training and licensure exactly as verified, describe the visit experience rather than outcomes, and avoid comparisons with other clinicians. Add the provider to every listing on the same day.",
    author: "Gio LaRoche",
    publishDate: "2026-10-14T13:20:00Z",
    dateModified: "2026-10-21",
    readMinutes: 7,
    sections: [
      h2("A new provider is a new reason for patients to come back"),
      p(
        "Adding a physician, nurse practitioner or physician assistant is good news for a practice, because it can open appointments that were full. But a new name on the schedule means nothing to patients until they hear about it, and nothing to search engines until the name appears consistently in many places."
      ),
      p(
        "The announcement has to be honest and calm. It is easy to reach for superlatives or promises about results, and those are exactly the phrases that create regulatory risk. Introduce the person, say how patients can book, and let their work speak for itself."
      ),
      h2("Gather the facts before you write a word"),
      ul(
        "Full name and credentials exactly as they appear on the license, with the license number kept in the practice's records.",
        "Education and training that has been verified, with names of institutions spelled correctly.",
        "The date the provider starts seeing patients and the days and hours they work.",
        "Whether they are accepting new patients and which insurance plans they are credentialed with.",
        "A recent professional photograph taken for this purpose and approved by the provider.",
        "Languages the provider speaks at the visit, if the practice lists them."
      ),
      h3("Never invent or round up a credential"),
      p(
        "Board certification, fellowships and awards are verifiable, and a wrong claim is serious. Include only what the provider confirms in writing and the practice has checked. Our guide to [writing a nurse practitioner or physician assistant bio page that ranks](/guides/np-pa-bio-page-that-ranks) covers how to phrase credentials correctly."
      ),
      h2("Where to announce"),
      table(
        ["Channel", "What to do"],
        ["Website bio page", "Publish a full page for the provider, linked from the team and home pages."],
        ["Home or news banner", "Add a short notice with the start date and how to book."],
        ["Google Business Profile", "Add the provider or update the profile, and add a post if it fits your cadence."],
        ["Directories and insurers", "Update health directories and send the new provider to each plan."],
        ["Patient message", "Send one email or text to the people who agreed to receive messages."]
      ),
      p(
        "Our guide on [what to update when a provider joins or leaves a medical practice](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice) lists every listing to touch, and it is worth following line by line. A line about hospital privileges has to be exact and current, so see [how to word a hospital affiliation or privileges statement](/guides/hospital-affiliation-and-admitting-privileges-statement-on-a-medical-practice-website) before publishing it."
      ),
      h2("How the visit is described"),
      p(
        "Patients choose a provider on fit more than credentials. Describe what a visit with the new provider is like in simple, factual terms: how long visits run, how appointments are booked and what the provider asks patients to bring. Avoid words like best, leading, or specialist in the treatment of anything."
      ),
      p(
        "Skip comparisons. Saying the new provider is more thorough than others implies something about colleagues, and it invites complaints."
      ),
      h2("Check the rollout a week later"),
      p(
        "Search for the provider's name and the practice. Confirm that the bio page appears, that the Google profile lists the right information and that the first appointments are being booked. Ask the front desk what patients are asking and add the answer to the page. If a directory still lacks the provider after two weeks, follow up with it directly."
      ),
      h2("Sample announcement wording"),
      p("We are pleased to welcome a new provider to the practice, who will begin seeing patients on the start date. The provider is accepting new patients and can be booked online or by calling the front desk. You can read about their training and background on their page, and you are welcome to ask any questions when you call."),
      p("That is all the announcement needs. It states a fact, gives a date, tells the reader how to act and invites questions. Resist adding a sentence about being excited about outcomes or the difference the provider will make in the community."),
      p("Adapt the wording to your own voice, and send it to the provider for approval before it goes anywhere public. A provider who has read the exact text will not be surprised when a patient mentions it."),
      h3("Consistency and follow-up"),
      p("Do not forget internal consistency. The name on the website should match the name on the Google listing, the insurer directories and the door sign, including middle initials and credentials. A provider who appears as three slightly different people across the web is hard for patients and for search engines to trust. Settle the exact spelling first, write it into the shared document, and have everyone copy it. Plan a short feature for the practice newsletter or social post as well, but keep it to the same facts as the announcement. The announcement should say which ages the new clinician sees, a point explained in our [family medicine versus internal medicine explainer](/guides/family-medicine-versus-internal-medicine-explainer-page-for-a-primary-care-practice) for a primary care practice."),
      p("After the first month, review the provider's page in Search Console. If it is getting impressions but few clicks, rewrite the title and the first paragraph in plainer words. If it is getting none, add a link from a page that is already indexed and busy, such as the team page, and give search engines a few weeks to find it."),
    ],
    faqs: [
      {
        q: "What should a new provider announcement include?",
        a: "The provider's name and verified credentials, the start date, how to book and whether new patients are accepted. Keep it factual and avoid claims about outcomes.",
      },
      {
        q: "Can the practice say a new provider is the best in the area?",
        a: "No. Superlatives are difficult to substantiate and can create advertising risk. Describe the provider's training and the visit experience instead.",
      },
      {
        q: "Should the provider have a Google Business Profile of their own?",
        a: "Sometimes, but not always. It depends on whether the provider qualifies for an individual listing, and duplicates cause confusion. Check Google's guidelines before creating one.",
      },
      {
        q: "How soon should the website be updated?",
        a: "Before or on the day the provider starts. Publish the bio page, update the team page and add the booking details at the same time.",
      },
      {
        q: "Who approves the bio text?",
        a: "The provider should approve every line, and the practice manager should check credentials against the license and certification records.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "CMS", label: "National Plan and Provider Enumeration System (NPPES)", href: "https://nppes.cms.hhs.gov/" },
      GOOGLE_HELPFUL,
    ],
    links: [
      { href: "/guides/np-pa-bio-page-that-ranks", label: "NP and PA Bio Page", description: "Credentials and bios that rank." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "Write a bio patients read." },
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "Provider Changes", description: "Everything to update when staff change." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 960
  {
    slug: "waiting-room-and-check-in-expectations-page-for-a-primary-care-practice",
    keyword: "waiting room and check-in expectations page for a primary care practice",
    category: "How-to",
    title: "Waiting Room and Check-In Expectations Page for a Primary Care Practice",
    metaTitle: "Waiting Room and Check-In Expectations Page",
    metaDescription:
      "How a primary care practice can explain check-in, the waiting room and what happens at arrival so patients know what to expect. Call (561) 291-2681.",
    answer:
      "A check-in page should explain how to arrive, where to enter, how to check in, what the front desk will ask for, how waiting works and what to do if the wait feels long. Keep it factual, avoid time promises you cannot keep, and never ask patients to describe their symptoms on the page.",
    author: "Liam Costello",
    publishDate: "2026-10-14T13:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The first five minutes shape the whole visit"),
      p(
        "Patients form a view of a practice before they ever see a provider. How easy it was to find the entrance, how the front desk greeted them and whether they knew what to do next all shape their trust. A page that walks them through arrival removes most of the small surprises that turn into unhappy reviews."
      ),
      p(
        "It is also useful for search. People type questions like what happens when I check in at a doctor's office, and a page that answers in your practice's own voice is a natural fit."
      ),
      h2("Describe the arrival in the order it happens"),
      ol(
        "Finding the building: the street address, the entrance to use, the floor or suite and where to park.",
        "Coming in: whether the door is open, if there is a buzzer, and how to find the front desk.",
        "Checking in: what the desk needs, such as a photo ID and insurance card, and whether forms are on a tablet, on paper or already done online.",
        "Waiting: where to sit, whether the practice calls patients by first name, and how a patient can tell the desk they need help.",
        "Being called back: who meets the patient, and what the first few minutes usually involve, described without medical detail."
      ),
      h3("Say what you do when the schedule runs behind"),
      p(
        "Every practice runs late occasionally. Rather than promising no waiting, tell patients what the office does when it happens, such as letting the desk update them or offering to reschedule. This is more credible than a vow of punctuality and sets a reasonable expectation."
      ),
      h2("Make the page practical"),
      table(
        ["Patient question", "What the page can say"],
        ["Where do I park?", "Name the lot, any fee and the best entrance to use."],
        ["Can someone come with me?", "State your guest policy in plain words."],
        ["Do I need forms ready?", "Link to the secure forms page and say how long they take."],
        ["Is there a place for a child to sit?", "Describe the space only if it is accurate."],
        ["How do I get help moving around?", "Mention accessible entrances and how to ask for assistance."]
      ),
      p(
        "The accessibility line deserves care. Check that what you say matches the building, and see our guide on [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) for how to describe it honestly. Patients who arrive by bus or ride service may be early or late for reasons outside their control, which is why a [page on transportation and ride assistance](/guides/transportation-and-ride-assistance-information-page-for-a-primary-care-practice) belongs beside your check-in guidance."
      ),
      h2("Protect privacy in the room"),
      p(
        "Some patients worry about being overheard at the desk. If the practice has a quiet check-in option, such as a form or a private window, mention it. Do not claim a level of privacy the layout cannot deliver, and instruct staff not to call out a patient's reason for coming."
      ),
      p(
        "Also mention the emergency instruction at the end: patients who feel very unwell should tell the desk right away, and in a true emergency, call 911."
      ),
      h2("Keep it linked and fresh"),
      p(
        "Link the page from your new-patient message and from your [what to bring to a first appointment page](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients). Walk through it yourself every few months. If the parking changes, the entrance moves or the forms switch to a tablet, the page changes the same week. A transfer page cuts down on phone calls about records and refills, as [a page that explains how to transfer care from another doctor](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice) explains."
      ),
      h2("Involve the people who work the front desk"),
      p("The staff who greet patients know which questions come up every day. Ask them for the five most common ones and make sure the page answers each. Let them read the final draft and tell you where it does not match what really happens, since a page that describes an ideal check-in rather than the real one will disappoint on the first visit."),
      p("Add a line about children, interpreters and patients who need extra time. Many families look for this information before they book, and a sentence that says how to ask for help can decide whether they come at all."),
      p("If your practice uses a texting system to say when a room is ready, explain it in one sentence and mention that patients may opt out. Remember that the message should never include the reason for the visit."),
      h3("Pictures and extra help"),
      p("Photographs help if they are honest. A clear picture of the entrance from the parking lot, and another of the front desk, can save a patient from walking past the door. Add descriptive text for each image so the page works for patients who use screen readers, and avoid pictures that show other patients or visible paperwork."),
      p("Finally, say who to ask for help. A patient who is anxious, in pain or unsure about the forms should know they can speak to the front desk first, and that a staff member will find a quiet place to talk. One warm sentence about this, placed near the top of the page, often matters more than a long list of rules. To set expectations for adult children and caregivers, the practice can publish [a page that explains who the office can speak with about a patient's care](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) and link it from the contact page."),
    ],
    faqs: [
      {
        q: "Should a primary care practice publish expected wait times?",
        a: "Be careful. Waits vary, and a published number can become a promise. Explain how the schedule works and what patients can do if they are waiting longer than expected.",
      },
      {
        q: "What should the page say about forms at check-in?",
        a: "Say whether forms are completed online beforehand or on arrival, link to the secure forms page and note how long they usually take.",
      },
      {
        q: "Can the page ask what the patient is coming in for?",
        a: "No. Keep health details off the page and out of web forms. The clinical team will ask in the exam room.",
      },
      {
        q: "How often should a check-in page be reviewed?",
        a: "Every few months, and whenever the entrance, parking, forms or front-desk process changes.",
      },
      {
        q: "Does this page help with local search?",
        a: "It can, because it answers common patient questions in your own words. Link it from the contact page and the new-patient message.",
      },
    ],
    citations: [
      HHS_PRIVACY,
      { publisher: "ADA.gov", label: "Web accessibility guidance for businesses", href: "https://www.ada.gov/resources/web-guidance/" },
      PLAIN,
    ],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What to Bring", description: "A first-appointment page for primary care." },
      { href: "/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile", label: "Parking and Accessibility", description: "Directions that help every patient." },
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "Contact Page Checklist", description: "Phone, address and hours done right." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },
];
