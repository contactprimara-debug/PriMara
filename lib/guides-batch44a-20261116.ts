// -- Guides batch 44a - 2026-11-16 --
// Guide/AEO pages from the Command Center queue (rows 1780-1784, planned 2026-11-13 PM), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const W3C_FORMS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms Tutorial",
  href: "https://www.w3.org/WAI/tutorials/forms/",
};
const HHS_EMAIL = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Does HIPAA permit health care providers to use email to discuss health issues with patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html",
};
const FTC_ADV = {
  publisher: "Federal Trade Commission",
  label: "Advertising and marketing basics for businesses",
  href: "https://www.ftc.gov/business-guidance/advertising-marketing",
};
const GBP_OWNERS = {
  publisher: "Google Business Profile Help",
  label: "Manage your Business Profile owners & managers",
  href: "https://support.google.com/business/answer/3403100",
};
const NIST_SMB = {
  publisher: "NIST",
  label: "Small Business Cybersecurity Corner",
  href: "https://www.nist.gov/itl/smallbusinesscyber",
};
const GMAIL_SENDER = {
  publisher: "Gmail Help",
  label: "Email sender guidelines",
  href: "https://support.google.com/a/answer/81126",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty7A: Guide[] = [
  // ---------------------------------------------------------------- 1780
  {
    slug: "callback-request-button-versus-a-full-contact-form-for-a-counseling-practice-website-and-who-answers-it-within-one-business-day",
    keyword: "a callback-request button versus a full contact form for a counseling practice website and who answers it within one business day",
    category: "Comparison",
    title: "Callback Button or Full Contact Form for a Counseling Practice",
    metaTitle: "Callback Button vs Contact Form for a Counseling Practice",
    metaDescription:
      "A short callback request or a full contact form: which fits a counseling practice site, what each should ask, and who answers within a business day. (561) 291-2681",
    answer:
      "For most counseling practices a short callback request (name, phone, best time) gets more first contacts than a long form, because nothing private is asked up front. Use the longer form only when a clinician needs details before replying. Either way, name one person who answers within one business day.",
    author: "Liam Costello",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("The two options in plain terms"),
      p(
        "A callback request is a tiny form: first name, phone number and a best time to call. A full contact form adds email, reason for reaching out, insurance, preferred clinician and a message box. Both end in the same place, a staff member getting in touch, but they ask a very different amount of someone who may be nervous about writing to a counselor at all."
      ),
      p(
        "Neither is better in every case. The right choice depends on how your intake works, who sees the message and how fast someone can respond. A form that nobody answers for three days is worse than no form."
      ),
      h2("How the two compare for a counseling practice"),
      table(
        ["Point of comparison", "Callback request versus full form"],
        ["What it asks", "Callback: name, phone and best time. Full form: contact details, reason, insurance and a message."],
        ["Effort for the visitor", "Callback: under 30 seconds on a phone. Full form: several minutes of typing on a small screen."],
        ["Private details collected", "Callback: almost none. Full form: more, so the privacy notice matters more."],
        ["Best when", "Callback: intake is by phone and the office calls back the same day. Full form: a clinician must screen fit or insurance before the first call."],
        ["Main risk", "Callback: a missed call and no other way to reach the person. Full form: visitors abandoning a long form."]
      ),
      h2("Keep the private part out of the first message"),
      p(
        "Whichever you choose, do not invite details about symptoms or history in the first message. Email and web forms are not a private conversation, and the federal guidance on email with patients, linked below, treats the channel as something to handle carefully. Our guide to a [first-time client contact form for a counseling practice](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) goes field by field through what to ask and what to leave out."
      ),
      p(
        "A callback request has a built-in advantage here. The conversation that needs privacy happens on the phone, where staff can ask permission before saying anything sensitive."
      ),
      h2("Name the person who answers, and the clock"),
      p(
        "The button is only half the promise. The other half is the sentence under it: who responds and by when. Pick one owner, such as the intake coordinator or office manager, and one deadline, such as the end of the next business day. Write that deadline on the page only if you can keep it, and use the [response time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) to check it every week."
      ),
      ol(
        "Send callback and form messages to a shared mailbox, not one person's inbox.",
        "Give one person the job of checking it at fixed times each day.",
        "Log the time received and the time of the first attempt to reach the person.",
        "If the first call goes to voicemail, leave a message that gives only the practice name and number.",
        "Review misses at the monthly meeting and fix the cause."
      ),
      h3("Cover the days someone is out"),
      p(
        "A backup is part of the answer. Our [shared role mailbox guide](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice) explains how to keep requests from sitting in an absent person's inbox."
      ),
      h2("Count which one works for you"),
      p(
        "You do not have to guess. Run one version for a month, count the requests, then run the other and compare. Count real first contacts, not button clicks, and exclude your own test messages. A [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) keeps the tally simple. Many practices end up offering both: a callback button high on the page and the longer form for people who prefer to write."
      ),
    ],
    faqs: [
      {
        q: "Does a callback button replace the contact page?",
        a: "No. Keep the contact page with the address, phone number and hours. The button is a faster path for people who would rather be called than call.",
      },
      {
        q: "What should the callback request ask for?",
        a: "First name, a phone number and a best time of day. Add a short line saying it is safe to leave a message there, or not, so staff know how to return the call.",
      },
      {
        q: "Is a callback request safe to use for a counseling practice?",
        a: "It collects very little, which helps. Still ask your compliance contact how your form vendor handles stored submissions, and keep clinical details out of the fields.",
      },
      {
        q: "How fast should someone respond?",
        a: "By the end of the next business day is a common, keepable promise for a small office. Faster is better if staffing allows, but a promise you miss hurts more than a longer one you keep.",
      },
      {
        q: "Can I offer a callback button and a full form together?",
        a: "Yes, and many practices do. Make the short option the most visible one and label the long form for people who prefer to write or have questions about insurance.",
      },
    ],
    citations: [HHS_EMAIL, W3C_FORMS],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "Fields, privacy notice and response time." },
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time Target and Inquiry Log", description: "Check that every message gets an answer." },
      { href: "/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice", label: "Shared Role Mailbox", description: "Keep requests out of one person's inbox." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1781
  {
    slug: "insurance-company-logos-on-a-medical-practice-website-without-implying-in-network-status-or-endorsement",
    keyword: "insurance company logos on a medical practice website without implying in-network status or endorsement",
    category: "How-to",
    title: "Insurance Logos on a Medical Practice Website",
    metaTitle: "Insurance Logos on a Medical Practice Website, Done Right",
    metaDescription:
      "Showing insurer logos can imply you are in network or endorsed. How a medical practice can present plans accurately, with wording and a review habit. (561) 291-2681",
    answer:
      "Put an insurer's logo on your site only if you are confident the practice is in network today, and place it with plain wording such as the plan name and the date you last checked. A row of logos with no explanation can read as endorsement, or as a promise your billing office cannot keep.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("What a logo says to a patient"),
      p(
        "A strip of well-known insurance logos looks reassuring. To a patient it says one thing clearly: these plans are accepted here. If one of them is not accepted for every provider, every location or every service, the logo has already made the promise your front desk now has to break."
      ),
      p(
        "A logo can also suggest that the insurer vouches for the practice. Most of these companies have brand rules about who may display their marks and how, so a logo copied from a search result is not automatically yours to use. Check the insurer's provider materials or ask your contracting representative before you rely on one."
      ),
      h2("Text first, logos second"),
      p(
        "Plain text carries the real information and is also easier for patients using screen readers and for search engines to read. Start with a list of plan names, then decide whether logos add anything."
      ),
      table(
        ["Option", "Risk and the better version"],
        ["Row of logos, no words", "Risk: implies every plan is accepted for everyone. Better: plan names in text with a short note on what is accepted."],
        ["Logos linked to the insurer's site", "Risk: looks like an endorsement and sends visitors away. Better: plain text, no link, or a link to your own insurance page."],
        ["Old logos nobody updated", "Risk: shows plans you no longer accept. Better: a dated list reviewed on a schedule."],
        ["Logo with the word 'preferred' or 'partner'", "Risk: can claim a status you have not been given. Better: the plain phrase your contract supports, or leave it out."]
      ),
      h2("Wording that stays accurate"),
      p(
        "Say what you know and no more. Something like: 'We are in network with the plans listed below for the providers named on our team page. Plans and networks change, so please call us to confirm your coverage before your first visit.' Add a 'last checked' date."
      ),
      p(
        "The FTC's general advertising guidance, linked below, asks businesses to avoid claims that could mislead the people reading them. An unexplained logo is a small example of the kind of claim that can mislead without any false sentence on the page."
      ),
      h3("Where this belongs on the site"),
      p(
        "Put the full list on one [accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) and let other pages point to it. That gives you one place to update, which matters because a plan list scattered across the home page, the footer and three service pages will drift."
      ),
      h2("A short review habit"),
      ol(
        "Pick an owner for the insurance page, usually the billing lead.",
        "Every quarter, compare the page with your current payer contracts and the plans the front desk actually verifies.",
        "Remove any logo or plan that is paused, closed to new patients or not valid for every provider.",
        "Update the date and tell the front desk what changed.",
        "Check that the same list appears on the Google Business Profile and in directories. The guide on [NPI registry and insurance directory accuracy](/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice) shows where those lists live."
      ),
      p(
        "If a plan closes to new patients, follow the wording in our guide to [insurance panels closed to new clients](/guides/insurance-panel-closed-to-new-clients-wording-for-a-counseling-practice-website-and-google-profile) so the page and the phone answer agree."
      ),
    ],
    faqs: [
      {
        q: "Can I use an insurance company's logo on my website?",
        a: "Often only under that company's own brand rules. Ask your contracting representative or read the provider materials before using a mark, and prefer text when you are unsure.",
      },
      {
        q: "Does listing a plan mean I am in network?",
        a: "To a patient it does. Only list plans your billing office is confident about, and say how patients can confirm coverage before booking.",
      },
      {
        q: "Should logos link to the insurer's website?",
        a: "Usually not. A link can look like an endorsement and sends visitors away from your booking or contact page. Link to your own insurance page instead.",
      },
      {
        q: "How often should the plan list be checked?",
        a: "At least quarterly, and any time a contract changes, a provider joins or leaves, or a plan closes to new patients.",
      },
      {
        q: "Do I need to say I am out of network with some plans?",
        a: "You do not have to list every plan you do not take, but the page should not suggest more coverage than you have. A short line explaining how to ask about other plans helps.",
      },
    ],
    citations: [FTC_ADV, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "How to Build an Accepted Insurance Page", description: "One place for the plan list." },
      { href: "/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice", label: "NPI Registry and Directory Accuracy", description: "Keep outside listings in step." },
      { href: "/guides/insurance-panel-closed-to-new-clients-wording-for-a-counseling-practice-website-and-google-profile", label: "Insurance Panel Closed Wording", description: "What to say when a plan closes." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1782
  {
    slug: "named-backup-person-for-the-website-google-profile-and-phone-system-when-the-office-manager-is-out-for-a-week",
    keyword: "a named backup person for the website, Google profile and phone system when the office manager is out for a week",
    category: "Checklist",
    title: "Backup Person for the Website, Profile and Phones",
    metaTitle: "Backup Person for the Website, Google Profile and Phones",
    metaDescription:
      "When the office manager is out for a week, who fixes a wrong phone number or a locked login? A one-page backup plan for a medical practice. (561) 291-2681",
    answer:
      "Name one backup person for the website, the Google Business Profile and the phone system, give that person the access and a one-page note before the office manager leaves, and write down what they may change alone and what must wait. Without it, small problems sit unfixed for the whole week.",
    author: "Liam Costello",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Why a week out becomes a problem"),
      p(
        "In many small practices one person quietly owns the website login, the Google profile, the phone menu and the vendor emails. When that person is on vacation or out sick, nothing needs fixing, until something does. A wrong holiday notice, a phone line that rings to a dead extension or a form that stops sending can sit for days because nobody else knows where to look."
      ),
      p(
        "A backup plan does not need software. It needs a name, some access and half a page of instructions."
      ),
      h2("Pick the backup and set the limits"),
      p(
        "Choose someone who is in the office on the days the manager is away and who can follow a written checklist, often a lead medical assistant, a billing lead or the practice owner. Then decide what the backup may do alone. A good default is to let them fix things that are plainly wrong and to hold anything that changes how the practice presents itself."
      ),
      table(
        ["Backup may do alone", "Backup should hold for the manager"],
        ["Correct a wrong phone number, hours or holiday notice", "Change services, provider names or insurance wording"],
        ["Post a closure notice on the profile and phone greeting", "Publish new pages or edit existing page text"],
        ["Call the vendor to report a form, phone or site problem", "Change vendors, plans or billing details"],
        ["Reply to a review with the approved short wording", "Reply to a review that names a person or situation"]
      ),
      h2("What the backup needs on the one-page note"),
      ul(
        "Where the shared logins are kept, never the passwords themselves in the note.",
        "Who the website, domain, phone carrier and Google profile contacts are, from the [vendor contact sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile).",
        "How to change the phone greeting and where the after-hours line rings.",
        "The three daily checks below.",
        "Who to call, with a phone number, if something is outside their limits."
      ),
      h3("Access that is safe to share"),
      p(
        "Do not hand over the manager's personal login. Add the backup as a separate user with the right level, as Google explains in its help page on managing profile owners and managers, linked below. The guide on [which access level to give a vendor or staff member](/guides/which-access-level-to-give-a-vendor-or-staff-member-on-google-business-profile-search-console-and-google-analytics) covers the levels, and the NIST small business page is a good reminder to use individual accounts, not one shared password."
      ),
      h2("Three checks the backup runs each day"),
      ol(
        "Call the main phone number from a personal phone and listen to the greeting and menu.",
        "Open the website on a phone and confirm the phone number, hours and any notice are correct.",
        "Check the shared form mailbox and confirm last night's requests arrived and were answered."
      ),
      p(
        "Ten minutes a day is enough. If something fails, the backup follows the note, or calls the number on it. Our guide on [what to hand a new office manager on day one](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts) has a longer version of the same handoff, and the [monthly marketing meeting agenda](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) is a good place to review the plan once a quarter."
      ),
      h2("After the manager returns"),
      p(
        "Ask the backup what they noticed and what the note was missing, then fix the note. Remove any temporary access that is no longer needed."
      ),
    ],
    faqs: [
      {
        q: "Who should be the backup if the practice is very small?",
        a: "Often the owner or lead provider, with the office manager's written note. Pick whoever is reliably present and willing to follow a checklist.",
      },
      {
        q: "Should the backup get the office manager's password?",
        a: "No. Give the backup their own user account at the level the job needs, so every change is traceable and access can be removed cleanly later.",
      },
      {
        q: "How long should the handoff note be?",
        a: "One page. If it grows beyond that, people stop reading it. Link to longer guides instead of copying them into the note.",
      },
      {
        q: "What if the vendor only talks to the account holder?",
        a: "Ask the vendor to add the backup as an authorized contact in writing before the absence, and keep that confirmation with the note.",
      },
      {
        q: "How often should the plan be tested?",
        a: "Once a quarter, by having the backup run the three daily checks without the manager's help and reporting anything unclear.",
      },
    ],
    citations: [GBP_OWNERS, NIST_SMB],
    links: [
      { href: "/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile", label: "One-Page Vendor Contact Sheet", description: "Who to call for what." },
      { href: "/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts", label: "Handoff Note for a New Office Manager", description: "The longer version of this handoff." },
      { href: "/guides/which-access-level-to-give-a-vendor-or-staff-member-on-google-business-profile-search-console-and-google-analytics", label: "Which Access Level to Give", description: "Keep access to what each person needs." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1783
  {
    slug: "what-happens-after-you-submit-note-under-a-medical-practice-contact-form-when-to-expect-a-reply-and-what-not-to-include",
    keyword: "a short what-happens-after-you-submit note under a medical practice contact form so patients know when to expect a reply and what not to include",
    category: "How-to",
    title: "What-Happens-Next Note Under a Medical Contact Form",
    metaTitle: "What Happens Next Note Under a Medical Practice Form",
    metaDescription:
      "Three short lines under a contact form tell patients when to expect a reply and what to keep out of the message. Wording for a medical practice. (561) 291-2681",
    answer:
      "Put three short lines directly under the submit button: who will reply, by when, and what not to type into the form (symptoms, test results, anything urgent). Patients who know what happens next are less likely to submit twice, call upset or leave private details in a message box.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 4,
    sections: [
      h2("The moment after the button"),
      p(
        "A patient fills in a form, taps submit and then waits with no idea what happens. Some submit again. Some call the front desk to ask if it worked. Some assume nobody is coming and book somewhere else. One small note under the button answers all of that before the questions start."
      ),
      h2("The three lines that do the work"),
      ol(
        "Who replies: 'Our front desk team will contact you.'",
        "When: 'You can expect a reply by the end of the next business day.'",
        "What not to include: 'Please do not include symptoms, test results or other health details. If this is an emergency, call 911.'"
      ),
      p(
        "Each line is one sentence. Anything longer gets skipped on a phone. Use the same wording every place the form appears, and make sure the second line is a promise the practice can keep. The [response time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) shows how to measure it."
      ),
      h2("Placing the note"),
      table(
        ["Position", "Result"],
        ["Directly under the submit button", "Read at the moment of decision. Best spot."],
        ["Above the form in a banner", "Often skipped before anyone has a reason to care"],
        ["Only on the thank-you page", "Too late to stop private details being typed in"],
        ["Footer or privacy page only", "Almost never read"]
      ),
      h3("Repeat the promise on the thank-you page"),
      p(
        "After submission, the confirmation page should repeat the reply time and give the phone number for anything urgent. Our guide to the [thank-you page after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it) covers the wording and how to count it as a lead."
      ),
      h2("Why the warning matters"),
      p(
        "A web form is a message box, not an exam room. The HHS guidance on email with patients, linked below, explains that sending health information by unsecured email carries risk that patients should understand. You do not have to give a lecture. A single line tells people to leave health details for the phone call or the portal."
      ),
      p(
        "If your form vendor stores messages, the warning also keeps that stored text free of details you never wanted to hold."
      ),
      h2("Wording to avoid"),
      p(
        "Skip phrases that promise more than the office can deliver, such as 'immediately' or 'within minutes'. Also skip legal-sounding paragraphs. A patient on a phone will not read three sentences of fine print, but will read one friendly line that says a real person will respond and when."
      ),
      p(
        "Test the wording with someone outside the practice. Ask them what they think happens after they tap submit. If their answer matches your three lines, the note is working."
      ),
      h2("Match the confirmation email"),
      p(
        "If the form sends an automatic email, it should say the same three things. The wording in [contact form confirmation emails without health details](/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details) fits well. Then test the whole path: submit a clearly labeled test from a phone, confirm the note shows, the confirmation arrives and the message reaches the mailbox. If emails ever fail to arrive, the [contact form delivery test](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website) walks through it."
      ),
    ],
    faqs: [
      {
        q: "Does this note count as a HIPAA notice?",
        a: "No. It is plain-language guidance for the visitor, not legal text. Ask your compliance contact what your privacy notice and form vendor arrangement require.",
      },
      {
        q: "What reply time should I write?",
        a: "The one your office can meet on its worst day. End of the next business day is a common choice. Change the wording if staffing changes.",
      },
      {
        q: "Should I tell patients to call for urgent needs?",
        a: "Yes. Say plainly that the form is not for emergencies and give the instruction to call 911 or the practice's urgent line.",
      },
      {
        q: "Will the note lower the number of submissions?",
        a: "It is meant to reduce repeat and confused submissions, not honest first contacts. Compare your counted requests before and after, and keep only what helps.",
      },
      {
        q: "Where else should the same wording appear?",
        a: "On the thank-you page, in the automatic confirmation email and on the phone greeting if it mentions the form, so the answer is the same everywhere.",
      },
    ],
    citations: [HHS_EMAIL, W3C_FORMS],
    links: [
      { href: "/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it", label: "Thank-You Page After a Contact Form", description: "What to say and how to track it." },
      { href: "/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details", label: "Contact Form Confirmation Email", description: "Matching wording for the email." },
      { href: "/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website", label: "Form Email Delivery Test", description: "Confirm messages arrive." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1784
  {
    slug: "email-subject-line-and-sender-name-checklist-for-practice-emails-so-patients-recognize-them-and-spam-filters-do-not-hide-them",
    keyword: "an email subject line and sender name checklist for practice emails so patients recognize them and spam filters do not hide them, without health details",
    category: "Checklist",
    title: "Subject Line and Sender Name Checklist for Practice Emails",
    metaTitle: "Subject Line and Sender Name Checklist for Practice Email",
    metaDescription:
      "A practice email patients do not recognize gets ignored or filtered. A checklist for sender names and subject lines that avoids health details. (561) 291-2681",
    answer:
      "Send practice email from a name patients know, such as the practice name, and use a plain subject line that says what the message is without health details: 'Your appointment on Tuesday' or 'Message from Riverside Family Medicine'. Avoid all caps, urgency tricks and anything that reveals a diagnosis, visit reason or provider specialty.",
    author: "Liam Costello",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Two lines decide whether the email is read"),
      p(
        "Before a patient opens anything, they see a sender name and a subject line. If the sender looks unfamiliar, they delete it. If the subject looks like marketing, their email service may send it to spam. And if the subject mentions a condition or a visit reason, anyone glancing at the phone screen learns something private."
      ),
      p(
        "The aim is a recognizable sender and a boring, accurate subject. Boring works."
      ),
      h2("Sender name checklist"),
      ul(
        "Use the practice name patients actually say, the same one on the sign and the Google profile.",
        "Do not send from an individual's personal address or a free webmail account. A [professional domain email](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) looks more trustworthy and is easier to authenticate.",
        "Keep the sender name the same for every message type so patients learn it.",
        "Avoid names like 'Admin' or 'No Reply'. Patients cannot tell whether it is you.",
        "Use a reply-to address a person monitors, so a patient's answer does not vanish."
      ),
      h2("Subject line checklist"),
      table(
        ["Do", "Avoid"],
        ["Say what it is: 'Appointment reminder for Tuesday, June 3'", "Health details: any condition, medication, test or reason for the visit"],
        ["Keep it short enough to read on a phone", "ALL CAPS, many exclamation marks, 'URGENT' or 'Act now'"],
        ["Include the practice name when it helps recognition", "Vague or clickbait lines like 'You will want to see this'"],
        ["Match the content inside the email exactly", "Re: or Fwd: added to look like an earlier conversation"]
      ),
      p(
        "Our guide to [appointment reminder wording without health details](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) shows the same rule applied to the body of the message."
      ),
      h2("Help the filters trust you"),
      p(
        "Wording is only part of delivery. Mailbox providers also check that the sender is authenticated. Google's email sender guidelines, linked below, describe the technical requirements, and our explainer on [SPF, DKIM and DMARC for a practice owner](/guides/email-authentication-spf-dkim-and-dmarc-explained-for-a-practice-owner-so-reminders-and-form-replies-reach-the-inbox) puts them in plain words. If your reminders or form replies seem to disappear, check authentication before rewriting subject lines."
      ),
      h3("Test on a real phone"),
      ol(
        "Send the email to a personal address at two or three different providers.",
        "Look at the sender name and subject exactly as a patient would, on a locked phone screen.",
        "Confirm it landed in the inbox, not spam or promotions.",
        "Ask someone outside the practice whether they would recognize it.",
        "Keep a copy of the winning wording in a shared document."
      ),
      h2("What to do when patients still miss it"),
      p(
        "Even a well-named email gets overlooked. Tell patients, at booking and on the confirmation page, which sender name to look for and to check the spam folder once. Ask the front desk to note when a patient says they never received a message, so the pattern shows up at the monthly review instead of being forgotten."
      ),
      h2("Keep the same rules for staff email"),
      p(
        "Staff writing one-off emails should follow the same pattern. The [email signature and confidentiality footer](/guides/email-signature-and-confidentiality-footer-for-medical-practice-staff) guide gives staff a consistent signature, and the broader [email marketing compliance guide](/guides/email-marketing-compliance-for-a-medical-practice) covers newsletters and promotions."
      ),
    ],
    faqs: [
      {
        q: "Can the subject line include the patient's name?",
        a: "It is safer not to. A phone screen can show the subject to anyone nearby. Put the name inside the message, after the patient opens it, and keep the subject generic.",
      },
      {
        q: "Should reminders say the provider's specialty?",
        a: "Avoid it. A specialty can reveal the reason for the visit. 'Appointment reminder' with the date is enough.",
      },
      {
        q: "Why do my practice emails go to spam?",
        a: "Common causes are missing sender authentication, a free webmail sender, spam-like wording and a sudden jump in volume. Check authentication first, then wording.",
      },
      {
        q: "Is a no-reply address a problem?",
        a: "It can be. Patients cannot answer it and some filters trust it less. Use a monitored address for replies and say who answers.",
      },
      {
        q: "How often should we review email wording?",
        a: "Twice a year, or whenever delivery complaints rise. Keep the approved subject lines in one shared file so staff do not improvise.",
      },
    ],
    citations: [GMAIL_SENDER, HHS_EMAIL],
    links: [
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Why a practice domain beats webmail." },
      { href: "/guides/email-authentication-spf-dkim-and-dmarc-explained-for-a-practice-owner-so-reminders-and-form-replies-reach-the-inbox", label: "SPF, DKIM and DMARC Explained", description: "Authentication in plain words." },
      { href: "/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details", label: "Appointment Reminder Wording", description: "Reminders without health details." },
      LOC,
    ],
  },
];
