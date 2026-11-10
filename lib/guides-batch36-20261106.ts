// -- Guides batch 36 - 2026-11-06 --
// Guide/AEO pages from the Command Center queue (rows 1577-1586, planned 2026-11-05), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Plain practical guidance, no legal advice.
// Row 1584 (card on file) is NOT built: duplicate intent of payment-methods-and-card-on-file-policy-page-for-a-counseling-practice.
// Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const HHS_TERMINATION = {
  publisher: "Legal Information Institute (Cornell Law School)",
  label: "45 CFR 164.308, administrative safeguards including termination procedures",
  href: "https://www.law.cornell.edu/cfr/text/45/164.308",
};
const HHS_AUTH = {
  publisher: "Legal Information Institute (Cornell Law School)",
  label: "45 CFR 164.508, uses and disclosures requiring an authorization",
  href: "https://www.law.cornell.edu/cfr/text/45/164.508",
};
const HHS_ACCESS = {
  publisher: "Legal Information Institute (Cornell Law School)",
  label: "45 CFR 164.524, access of individuals to protected health information",
  href: "https://www.law.cornell.edu/cfr/text/45/164.524",
};
const NIST_SMALL = {
  publisher: "National Institute of Standards and Technology",
  label: "Small Business Cybersecurity Corner",
  href: "https://www.nist.gov/itl/smallbusinesscyber",
};
const CISA_PASSWORDS = {
  publisher: "Cybersecurity and Infrastructure Security Agency",
  label: "Use strong passwords",
  href: "https://www.cisa.gov/secure-our-world/use-strong-passwords",
};
const ICANN_ERRP = {
  publisher: "ICANN",
  label: "Expired Registration Recovery Policy",
  href: "https://www.icann.org/en/contracted-parties/consensus-policies/expired-registration-recovery-policy/expired-registration-recovery-policy-28-02-2013-en",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_DOWNTIME = {
  publisher: "Google Search Central Blog",
  label: "How to deal with planned site downtime",
  href: "https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime",
};
const GOOGLE_REMOVE = {
  publisher: "Google Search Central",
  label: "Remove information from Google",
  href: "https://developers.google.com/search/docs/crawling-indexing/remove-information",
};
const GOOGLE_BLOCK = {
  publisher: "Google Search Central",
  label: "Block search indexing with noindex",
  href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing",
};
const PLAIN_LANGUAGE = {
  publisher: "Digital.gov",
  label: "Plain language guide",
  href: "https://digital.gov/guides/plain-language",
};

export const guidesPartThirtyNine: Guide[] = [
  // ---------------------------------------------------------------- 1577
  {
    slug: "removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice",
    keyword: "removing a former employee's access to google, website and email accounts at a medical practice",
    category: "Checklist",
    title: "Removing a Former Employee's Access to Practice Accounts",
    metaTitle: "Removing a Former Employee's Access to Practice Accounts",
    metaDescription:
      "A same-day checklist for removing a departing employee from Google, website, email and form notices at a medical practice, in order. (561) 291-2681",
    answer:
      "When someone leaves a medical practice, remove their access to the practice's Google profile, website login, email, form notifications and shared passwords on the last day, in a set order, with a second person confirming. Keep a written list of every account so nothing is forgotten, and never share one login to avoid the work.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T09:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("The account list is the real problem"),
      p(
        "Most practices can name the obvious accounts: the email address, the practice management system and the building key. The ones that get missed are the quiet ones, such as the person who still gets every website form by email, the former front desk lead who is still listed as an owner on the Google Business Profile, or the marketing helper who still has the website login. Each of these keeps working long after the person has moved on, and each is a problem for patients if the account is ever misused."
      ),
      p(
        "Federal security rules for practices that handle patient information expect written steps for ending a workforce member's access to that information when the arrangement ends. A short written checklist is the practical way to meet that. This page covers only the website, Google and email side of the job, not the clinical systems, and it is not legal advice. Ask your compliance advisor how your own written procedure should read."
      ),
      h2("Remove access in this order"),
      table(
        ["Step", "What to do"],
        ["1. Google Business Profile", "Remove the person as a manager or owner. Make sure at least two current staff remain owners first, so the profile is never left without one."],
        ["2. Website login", "Delete or deactivate their account on the site builder, hosting and any plugin dashboards. Change the shared password if one existed."],
        ["3. Form notifications", "Take their address off the list that receives contact and appointment forms, and point it to a shared role mailbox instead."],
        ["4. Email", "Suspend the mailbox, set an automatic reply that names who to contact, and forward mail to a manager for a set period."],
        ["5. Other tools", "Analytics, Search Console, the domain registrar, social pages, texting platforms and review tools all have their own user lists."],
      ),
      h2("Do it on the last day, with two people"),
      p(
        "Make removal part of the exit meeting, not a task for next week. The practice manager works down the list while a second person, such as the clinician-owner, confirms each line by looking at the user list on the screen rather than taking anyone's word. Write the date and initials beside each account. If the departure is sudden, start with the Google profile and the website, because those are public and cannot be quickly reversed."
      ),
      h3("What not to do"),
      ul(
        "Do not let a departing person transfer ownership of an account to their personal email.",
        "Do not keep a former employee's login alive so that nobody has to learn the system.",
        "Do not delete their mailbox on day one. Suspend it, keep it for a set period, then remove it on a date you wrote down.",
        "Do not keep a single shared password for the website. Give each person their own sign-in so one removal is clean."
      ),
      h2("Make the next departure easy"),
      p(
        "Keep one page, stored somewhere two people can open, that lists every account, the practice-owned email that owns it, and who has access. Our guide on [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why the practice, not an individual, should be the account owner. Review the list twice a year, and whenever a role changes, not only when someone leaves. The same list is the starting point for the [day-one handoff for a new office manager](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts), which gives the next person only the access their job needs."
      ),
      p(
        "Pair that list with strong, unique passwords stored in a password manager and with a second sign-in step wherever it is offered. Federal cybersecurity guidance on strong passwords is a short read for the whole team, and it makes a removal day far less stressful because there are fewer shared secrets to change."
      ),
      h2("After the removal"),
      p(
        "Two weeks later, check the Google profile's user list, the website's user list and the form notification address again. Look for a login that quietly came back through a password reset, and for any form that still goes to the old address. A test message from the contact form should arrive in the shared mailbox and nowhere else. The same list works when an outside company leaves, and the [account handover checklist for ending a marketing vendor relationship](/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends) adds the exports and ownership checks that matter then."
      ),
    ],
    faqs: [
      {
        q: "Who should remove a departing employee's access?",
        a: "The practice manager or owner, with a second person confirming. Avoid leaving the job to the person who is leaving, and avoid leaving it to an outside vendor with no written list to follow.",
      },
      {
        q: "What if the former employee was the only owner of our Google profile?",
        a: "Ask them to add a practice-owned address as an owner before their last day. If that did not happen, Google offers an ownership request process in its help center, but it can take time. This is why two owners should always exist.",
      },
      {
        q: "Should we delete the person's email right away?",
        a: "No. Suspend sign-in the same day, keep the mailbox for a set period so important messages can be recovered, then delete it on a date written in your list.",
      },
      {
        q: "Do contractors and agencies need the same steps?",
        a: "Yes. An agency or freelancer who built or maintained the site should also be removed when the work ends. Give contractors their own sign-ins so removal never requires changing a shared password.",
      },
      {
        q: "Is this a legal requirement?",
        a: "Federal rules for patient information call for procedures to end access when an arrangement ends, but how your written procedure is worded is a question for your compliance advisor or attorney. This guide is practical, not legal advice.",
      },
    ],
    citations: [HHS_TERMINATION, NIST_SMALL, CISA_PASSWORDS],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns Your Accounts", description: "Why the practice should own them." },
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Website Maintenance", description: "Backups, monitoring and upkeep." },
      { href: "/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website", label: "Form Email Delivery Test", description: "Check that forms reach the right inbox." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1578
  {
    slug: "patient-photo-and-video-release-wording-for-images-on-a-medical-practice-website",
    keyword: "patient photo and video release wording for images on a medical practice website",
    category: "How-to",
    title: "Patient Photo and Video Release Wording for a Practice Site",
    metaTitle: "Patient Photo and Video Release Wording for a Practice",
    metaDescription:
      "Plain wording ideas for a patient photo and video release on a practice website, why it stays optional, and why your attorney reviews it. (561) 291-2681",
    answer:
      "A photo or video release is a signed, separate form in which a patient says what image may be used, where, for how long and how to take it back. Do not tuck it into intake paperwork, never make care depend on it, and have your attorney review the final wording before use.",
    author: "Liam Costello",
    publishDate: "2026-11-06T09:20:00Z",
    dateModified: "2026-11-06",
    readMinutes: 5,
    sections: [
      h2("Most practices do not need patient photos at all"),
      p(
        "Before writing a release, ask whether the website needs a patient in the picture. Team photos, the waiting room and the building usually do more for a first-time visitor than a stranger's face, and they carry no privacy risk. If your answer is still yes, because a counseling practice wants a client story or a primary care practice wants a community event photo, the release is the safeguard, and it has to be written carefully."
      ),
      p(
        "Federal privacy rules generally expect a signed authorization before a practice uses identifiable patient information, which can include an image, for marketing. The rules also set out what a valid authorization must contain. This page offers practical wording ideas only. It is not legal advice, and your attorney should review any release before a patient signs it."
      ),
      h2("What a release should say, in plain words"),
      table(
        ["Part", "Plain-language idea"],
        ["What is covered", "Name the exact photo or video and who appears in it. Avoid wording like any image, any time."],
        ["Where it may appear", "List the places: the practice website, the Google profile, social pages, printed material."],
        ["How long", "Give an end date or an event, such as until the patient withdraws it in writing."],
        ["Right to say no", "State that care, billing and appointments do not depend on signing."],
        ["Right to take it back", "Say how to withdraw permission, who receives the request, and that already-printed items may not be recalled."],
        ["Signature and date", "A separate signature line, with the patient's printed name and the date. Use a guardian line for a minor, if your attorney approves."],
      ),
      h2("Keep it separate and keep it voluntary"),
      p(
        "Put the release on its own page, away from the intake packet, with a plain title and no pre-checked boxes. A patient who is sitting in a waiting room with a clipboard and a nurse waiting can feel pressure to sign, so hand it over at a calm moment, say that it is optional and that saying no changes nothing. For a counseling practice, a release is rarely appropriate for a current client at all, and many practices simply do not use client images."
      ),
      h3("Wording to avoid"),
      ul(
        "Do not promise that the image will be removed from every place it has been copied.",
        "Do not pair a photo with a named condition, a treatment or a result.",
        "Do not add names to captions unless the patient agreed to that specifically.",
        "Do not offer a discount or gift in exchange for signing."
      ),
      h2("Handling the file after signing"),
      p(
        "Store signed releases with the patient record or in a clearly labeled folder, note which images they cover, and record the date of any withdrawal. Remove the image from the site, the Google profile and any scheduled social posts when permission ends. Our guide to [provider headshots and team photo guidelines](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website) covers the simpler case of staff images, and the [patient testimonial compliance checklist](/guides/patient-testimonial-compliance-checklist) covers words rather than pictures."
      ),
      p(
        "Image files also carry hidden location and device details. Strip that data before upload, use a file name that does not include a person's name, and add alt text that describes the scene without naming or diagnosing anyone."
      ),
    ],
    faqs: [
      {
        q: "Can a practice post a patient photo with a verbal okay?",
        a: "A written, signed release is the safer practice, and federal privacy rules generally look for a signed authorization for marketing uses. Ask your attorney what your state and your situation require before relying on anything verbal.",
      },
      {
        q: "Can a release be included in the new patient paperwork?",
        a: "It is better kept separate and optional. Bundling it with intake forms can make it look required, which undermines the idea that the patient freely agreed.",
      },
      {
        q: "What about photos where a patient is only in the background?",
        a: "Avoid them. A background face can still identify someone. Take photos in an empty room or crop and blur carefully, and when in doubt do not publish.",
      },
      {
        q: "How does a patient withdraw permission?",
        a: "The release should name a contact, such as the practice manager, and accept a written request. Remove the image where you control it and tell the patient plainly what you could and could not remove.",
      },
      {
        q: "Who writes the final wording?",
        a: "Your attorney. Use this page to prepare a draft that is short and clear, then have it reviewed so it reflects your state's requirements and your practice's situation.",
      },
    ],
    citations: [HHS_AUTH, GOOGLE_HELPFUL, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website", label: "Headshots And Team Photos", description: "Staff images for the website." },
      { href: "/guides/stock-photos-versus-real-photos-on-a-counseling-practice-website", label: "Stock Versus Real Photos", description: "What to show on a counseling site." },
      { href: "/guides/patient-testimonial-compliance-checklist", label: "Testimonial Checklist", description: "Words from patients, handled safely." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1579
  {
    slug: "domain-name-renewal-and-expiration-protection-for-a-medical-practice-website",
    keyword: "domain name renewal and expiration protection for a medical practice website",
    category: "Checklist",
    title: "Domain Name Renewal and Expiration Protection for a Practice",
    metaTitle: "Domain Renewal and Expiration Protection for a Practice",
    metaDescription:
      "How a medical practice keeps its domain from expiring: practice ownership, auto-renew, a shared billing email and calendar reminders. (561) 291-2681",
    answer:
      "A practice domain expires when the yearly fee is not paid, and the website and every email address on it then stop working. Prevent it with the practice as the registered owner, auto-renew on, a current card, a billing email that more than one person reads, and a calendar reminder sixty days out.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T09:40:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("The quietest way for a practice to disappear"),
      p(
        "A domain is rented, usually one year at a time or in multi-year blocks. When the term runs out and nobody pays, the website stops loading, the email addresses on that domain stop receiving mail, and in many cases the name can be picked up by someone else. For a primary care or counseling practice, that means patients cannot find the site, new inquiries bounce, and appointment emails go nowhere, often for days before anyone notices."
      ),
      p(
        "The usual cause is not neglect. The renewal notice went to a former employee, the card on file expired, or the domain was bought years ago by a web designer under their own account. Each is easy to prevent once somebody owns the job. A new office manager is a common point where that job gets dropped, so the renewal date and account email belong on a [day-one handoff page for the practice online accounts](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts)."
      ),
      h2("Six protections to set up this week"),
      table(
        ["Protection", "How to do it"],
        ["Practice-owned registration", "The registrant should be the practice, with an email address the practice controls, not a personal address."],
        ["Auto-renew", "Turn it on at the registrar, and confirm the setting by looking at the account, not by memory."],
        ["Current payment method", "Use a business card with a date well beyond the next renewal, and note when it expires."],
        ["Shared billing contact", "Send notices to a role address that two people read, so one departure does not silence them."],
        ["Registrar lock", "Ask for the transfer lock and, where offered, a second sign-in step on the account."],
        ["Calendar reminder", "Set one for sixty days before the expiry date and a second at fourteen days, assigned to a named person."],
      ),
      h2("Why the notice may never arrive"),
      p(
        "Registrars are required by ICANN policy to send expiration reminders to the registrant for generic top-level domains, one about a month before and one about a week before the date. Those messages only help if they reach a live inbox. If the contact is an old address on the very domain that is about to lapse, the warning goes to the mailbox that is about to stop working. Use an address on a different service for registrar notices."
      ),
      h3("Check three things today"),
      ul(
        "Look up the domain and read the registrant and expiry date.",
        "Open the registrar account and confirm who can sign in.",
        "Confirm the renewal card, the auto-renew switch and the billing email."
      ),
      h2("If the domain has already lapsed"),
      p(
        "Act the same day. Most registrars allow a grace period in which the owner can still renew, often at the normal price, and a later redemption period that costs more. Renew at the registrar that holds it, check that the site and email return, and then fix the cause. If a former vendor or employee holds the account, our guide on [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains how to move ownership to the practice. Put the renewal date, with a reminder well before it, on the [yearly check calendar](/guides/a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates) next to a named owner."
      ),
      p(
        "After any outage of this kind, run a basic check of the site, the forms and the email. The steps in [what a practice does when its website goes down](/guides/what-a-medical-practice-does-when-its-website-goes-down-during-office-hours) apply to a lapsed domain as well, and the guide on [professional domain email](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) shows why email on your own domain makes this protection even more important."
      ),
    ],
    faqs: [
      {
        q: "How long should a practice register a domain for?",
        a: "Two to five years reduces the number of renewal dates, but it does not replace the reminder. Pair a longer term with auto-renew and a shared billing contact.",
      },
      {
        q: "Who should be listed as the registrant?",
        a: "The practice, under its legal name, with a practice-controlled email. A personal name or a vendor's account makes recovery harder if the relationship ends.",
      },
      {
        q: "What happens to email if the domain expires?",
        a: "Mail sent to addresses on the domain stops arriving or bounces, and staff may lose sign-in to their mailboxes. Restoring the domain usually restores the service, but messages sent in between may be lost.",
      },
      {
        q: "Is a grace period guaranteed?",
        a: "Not by every registrar and not for every domain ending. Many offer one, but the length and price differ. Do not plan around it.",
      },
      {
        q: "Do we need to worry about similar-looking domains?",
        a: "Some practices register a few common misspellings or the matching dot-net name so that nobody else can use them. It is optional. Keep the main domain safe first.",
      },
    ],
    citations: [ICANN_ERRP, NIST_SMALL, CISA_PASSWORDS],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns Your Accounts", description: "Why the practice should own them." },
      { href: "/guides/how-to-choose-a-domain-name-for-a-medical-practice", label: "Choosing A Domain Name", description: "Picking a name that lasts." },
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Website Maintenance", description: "Backups, monitoring and upkeep." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1580
  {
    slug: "using-the-phrases-patients-say-on-calls-and-forms-to-choose-page-topics-for-a-counseling-practice",
    keyword: "using the phrases patients say on calls and forms to choose page topics for a counseling practice",
    category: "How-to",
    title: "Choosing Counseling Page Topics From What Clients Say",
    metaTitle: "Choosing Counseling Page Topics From What Clients Say",
    metaDescription:
      "How a counseling practice can tally the practical questions new clients ask, without private details, and turn them into pages. (561) 291-2681",
    answer:
      "Listen for the practical questions people ask when they first call or write, such as cost, insurance, availability and what a first visit is like. Tally them in a simple sheet with no names or personal details, then write one page per repeated question using the caller's own words.",
    author: "Liam Costello",
    publishDate: "2026-11-06T10:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Your front desk already knows the keywords"),
      p(
        "Keyword tools can tell a practice what people type into Google, but they cannot tell it what a worried person says out loud on the first call. The front desk hears the same handful of questions every week. Can I use my insurance? Do you see teenagers? Do you have evenings? How soon can someone see me? Each one is a page that a real person is already looking for, and each is better worded in the caller's own phrases than in a clinical term."
      ),
      p(
        "The goal is not to record anyone's story. It is to count practical questions. Nothing about why someone is seeking counseling belongs in the tally, and no name, phone number or date of birth should ever be copied into a marketing sheet."
      ),
      h2("A simple tally that protects privacy"),
      table(
        ["Column", "What to write"],
        ["Date", "Just the week, not the day."],
        ["Channel", "Phone, web form or email."],
        ["Question topic", "A short label: cost, insurance, evenings, telehealth, first visit, teens."],
        ["Their words", "A short practical phrase, such as how soon can I get in. Remove anything personal."],
        ["Answered on site?", "Yes or no. A no is a page waiting to be written."],
      ),
      h2("Turn repeated questions into pages"),
      p(
        "After four to six weeks, sort the sheet by topic. Any question that appears several times and has no clear answer on the website is a page candidate. Write the page title in the words callers used, put the answer in the first two sentences, and link it from your main service page. Our guide on [first-time client contact forms](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) shows which form fields to keep so the written questions stay practical."
      ),
      h3("Questions that make good pages"),
      ul(
        "Insurance and payment: what is accepted, how out-of-network works, what a first visit costs.",
        "Scheduling: evening hours, how soon someone can be seen, how to cancel.",
        "Format: in person or by video, how long a session lasts, what happens first.",
        "Fit: who the practice sees, such as teens, couples or adults, stated as a service and not as a promise of results."
      ),
      h2("What to leave out"),
      p(
        "Leave out anything clinical. If callers use words about symptoms or diagnoses, do not build pages around them as if the practice were making claims about treatment outcomes. Write about the service and the process. Google's guidance asks for content written for people, so the test is simple: would this page answer a question a real client asked?"
      ),
      p(
        "Also keep the tally away from recorded calls and call-tracking transcripts unless your policy and your attorney allow it. A handwritten tally of topics after the call is enough, and it avoids storing anything that could identify a person."
      ),
      h2("Check whether the new page works"),
      p(
        "A month after publishing, see whether the number of calls asking that question has dropped, and whether the page appears in Search Console. A page that answers a common call is working even if it earns few clicks, because it saves staff time. Our guide on [how to read Search Console](/guides/how-to-read-google-search-console-for-a-medical-practice-website) explains where to look. The search side of the same idea is covered in [reading the top Search Console queries each month](/guides/reading-the-top-search-console-queries-each-month-to-find-the-questions-new-clients-ask-a-counseling-practice), which sorts typed searches into questions, services and insurance words."
      ),
    ],
    faqs: [
      {
        q: "Can we record calls to find keywords?",
        a: "That depends on your state's recording rules and your own privacy policy, and it adds risk. A short handwritten tally of question topics after each call gives most of the benefit with none of the stored audio.",
      },
      {
        q: "How many entries do we need?",
        a: "Thirty to fifty entries over a month or two is enough to see which questions repeat. Do not wait for a perfect sample.",
      },
      {
        q: "Should the page title use the caller's exact words?",
        a: "Use their phrasing where it is accurate and professional, for example how soon can I see a counselor. Do not copy slang that makes a claim you cannot support.",
      },
      {
        q: "What if the same question is already answered on the site?",
        a: "Then the problem may be findability, not content. Move the answer higher, add a link from the page people land on, or rename the page with the caller's phrase.",
      },
      {
        q: "Who keeps the tally?",
        a: "Whoever answers the phone and checks the forms, with one person reviewing it monthly. Keep it in a shared sheet and never store names or reasons for seeking care.",
      },
    ],
    citations: [GOOGLE_HELPFUL, PLAIN_LANGUAGE, NIST_SMALL],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Form", description: "Fields that stay practical." },
      { href: "/guides/keyword-research-for-a-medical-practice-seo-campaign", label: "Keyword Research", description: "Finding the terms patients use." },
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "Reading Search Console", description: "Where to see what works." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1581
  {
    slug: "what-a-medical-practice-does-when-its-website-goes-down-during-office-hours",
    keyword: "what a medical practice does when its website goes down during office hours",
    category: "Playbook",
    title: "What to Do When a Practice Website Goes Down",
    metaTitle: "What to Do When a Medical Practice Website Goes Down",
    metaDescription:
      "A calm first-hour plan for a medical practice whose website stops loading: who to call, what to tell patients, what to check. (561) 291-2681",
    answer:
      "When the website stops loading, confirm it from a phone off your wifi, tell the front desk what to say, check the domain and hosting dashboards, and call your web host or developer with the exact error. Keep the phone number working, and do not post patient details anywhere while you fix it.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T10:20:00Z",
    dateModified: "2026-11-06",
    readMinutes: 5,
    sections: [
      h2("The first five minutes"),
      p(
        "A patient calls to say the website is not working, or an appointment form returns an error. Before anyone panics, confirm it. Open the site on a phone using mobile data, not the office wifi, and try the home page, the contact page and a form. Write down what you see: a blank page, an error number, a security warning or a slow load. That one sentence is the most useful thing you can give whoever fixes it."
      ),
      p(
        "While you check, tell the front desk what to say. The phone is the lifeline during an outage, so it matters more than the site. Give staff a single line they can use, such as our website is having a problem and we can help you by phone right now, and make sure nobody asks patients to send health details by email as a workaround."
      ),
      h2("Check these in order"),
      table(
        ["Check", "What it tells you"],
        ["Another device and network", "Whether the problem is your office connection or the site itself."],
        ["Domain status", "Whether the domain has expired or been locked. See the renewal checklist."],
        ["Hosting dashboard", "Whether the host reports an outage, a full disk or a suspended account."],
        ["Security warning", "An expired certificate shows a warning page, which is a different fix from an outage."],
        ["Recent changes", "A plugin update or edit made today is a common cause. Note who changed what and when."],
      ),
      h2("Who to call and what to say"),
      p(
        "Call the host or the developer named on your maintenance list, and give them the time it started, the exact message on screen, and what changed that day. Ask for an estimated time to fix and for a note when it returns. If a vendor is not answering, move to the next person on the list rather than waiting. Keep the list on paper at the front desk, not only on the website that is down."
      ),
      h3("Keep patients reachable"),
      ul(
        "Update the Google Business Profile with the phone number and hours if the outage will run long.",
        "Change the voicemail greeting to say the website is being repaired and give the number for urgent needs.",
        "Post a short notice on your social page, with no health information, if patients depend on it.",
        "For urgent medical needs the message should always point to 911 or the usual after-hours line."
      ),
      h2("What Google does with an outage"),
      p(
        "A short outage rarely harms search results. Google has explained that a server which tells crawlers the downtime is temporary, using a 503 response, is treated very differently from one that returns a not-found page or shows an error that looks like a normal page. Ask your host whether a maintenance page returns that response. The longer the outage, the more it matters."
      ),
      h2("After the site returns"),
      p(
        "Test the home page, one service page, the phone link, and a form submission that goes to your shared mailbox. Our [contact form email delivery test](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website) is a good checklist. Then write three lines in a log: what failed, how long it lasted and what will prevent a repeat. The [website backup and monitoring guide](/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice) explains which alerts would have caught it sooner."
      ),
    ],
    faqs: [
      {
        q: "Should we email patients that the website is down?",
        a: "Usually not. Keep the message on the phone greeting and the Google profile, and do not email appointment details. A broad email adds noise and can be mistaken for a scam message.",
      },
      {
        q: "Can patients still book during an outage?",
        a: "Often by phone. If the online booking tool is hosted by a separate vendor it may keep working. Check it directly, and tell the front desk which path is open.",
      },
      {
        q: "How do we know if the problem is the domain or the host?",
        a: "A domain problem usually shows up as a site that cannot be found at all, while a host problem often shows an error from the server. Your registrar and hosting dashboards each show their own status.",
      },
      {
        q: "Does downtime hurt our Google rankings?",
        a: "A brief outage generally does not. Google has said that signalling temporary downtime properly helps. A long outage or a site that returns normal-looking pages with errors is riskier.",
      },
      {
        q: "Who should have this plan?",
        a: "The practice manager, the front desk lead and whoever maintains the site, with a paper copy at the front desk that lists numbers for the host, the registrar and the developer.",
      },
    ],
    citations: [GOOGLE_DOWNTIME, NIST_SMALL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Website Maintenance", description: "Backups, monitoring and upkeep." },
      { href: "/guides/https-ssl-certificates-and-mixed-content-warnings-on-a-medical-practice-website", label: "SSL And Security Warnings", description: "When a certificate causes the error." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Closure Notices", description: "Telling patients about a change." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1582
  {
    slug: "patient-words-versus-clinical-terms-in-service-page-names-for-a-primary-care-practice",
    keyword: "patient words versus clinical terms in service page names for a primary care practice",
    category: "How-to",
    title: "Patient Words Versus Clinical Terms in Service Page Names",
    metaTitle: "Patient Words vs Clinical Terms in Service Page Names",
    metaDescription:
      "How a primary care practice can name service pages in the words patients actually use, and keeping the clinical term as support. (561) 291-2681",
    answer:
      "Name a service page with the words a patient would say, such as physical for work or high blood pressure checks, and put the clinical term in the first paragraph as a plain definition. Use one name per page, match it in the menu, title and heading, and avoid claims about results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T10:40:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Staff say one thing, patients type another"),
      p(
        "A practice menu often reads like a hospital directory: preventive medicine, chronic disease management, point-of-care testing. Patients rarely type those phrases. They type a yearly checkup, a sports physical, blood pressure check or a place to get a cough looked at. When the page name is the clinical term alone, the page can be correct and still miss the people it was written for."
      ),
      p(
        "The fix is not to drop the professional word. It is to lead with the patient's phrase and explain the clinical term in a sentence, so both audiences are served and the page stays accurate."
      ),
      h2("Examples of naming a page both ways"),
      table(
        ["Clinical term", "Patient-word page name"],
        ["Preventive health examination", "Yearly checkup for adults"],
        ["Hypertension monitoring", "Blood pressure checks"],
        ["Diabetes mellitus management", "Help with diabetes care and visits"],
        ["Pediatric well-child visit", "Child checkups and school forms"],
        ["Acute minor illness evaluation", "Same-day visits for colds and minor illness"],
      ),
      h2("A three-part test for every page name"),
      ul(
        "Would a patient type or say this phrase? If not, move the clinical term to the first paragraph.",
        "Is it accurate? A name should never promise a result or imply a service you do not provide.",
        "Is it the only page for that phrase? Two pages with the same aim compete with each other."
      ),
      p(
        "Plain language is not a lower standard. Federal plain language guidance exists because clear words are easier to act on for everyone, including patients with limited time or reading skills. Our guide on [plain language and reading level for patient-facing content](/guides/plain-language-and-reading-level-for-patient-facing-web-content) goes deeper on sentence length and word choice."
      ),
      h2("Keep the clinical term where it helps"),
      p(
        "The clinical word still belongs on the page. Put it in the first paragraph as a short definition, such as a checkup, which clinicians call a preventive visit, and in the page's schema and headings where accuracy matters. Referring physicians, insurers and some patients do search by the formal name, so one line of definition costs nothing and covers them."
      ),
      h3("Where the name must match"),
      p(
        "Use the same name in the menu, the page title, the main heading and the link text from other pages. A mismatch, such as a menu item that says primary care visits above a heading that says internal medicine consultations, confuses visitors and splits the signal. The [guide to writing a service page that ranks](/guides/how-to-write-a-medical-service-page-that-ranks) shows how the pieces fit together. The two services you feature on the home page are the first place to apply this, and [choosing the first two services to feature on a primary care home page](/guides/choosing-the-first-two-services-to-feature-on-a-primary-care-practice-home-page) shows how to pick them."
      ),
      h2("What to avoid"),
      p(
        "Avoid names that describe outcomes, such as cure your back pain, and avoid names that tell a patient what they have. A service name should describe what the practice does, not what the patient might be feeling. When two pages end up with nearly the same name, merge them or sharpen the difference, as explained in our guide on [two pages for the same service](/guides/two-pages-for-the-same-service-keyword-cannibalization-on-a-medical-practice-website)."
      ),
    ],
    faqs: [
      {
        q: "Should we remove clinical terms from the website?",
        a: "No. Keep them as a short definition in the first paragraph and where precision matters. The change is about what comes first in the page name, not about deleting professional language.",
      },
      {
        q: "How do we find the words patients use?",
        a: "Ask the front desk what callers say, read the search terms in Search Console, and look at how patients describe visits on the intake form. Our counseling guide on tallying questions works for primary care too.",
      },
      {
        q: "Does changing a page name affect rankings?",
        a: "It can. Change the title and heading together, keep the web address the same unless you set a redirect, and check Search Console a few weeks later.",
      },
      {
        q: "What about conditions in page names?",
        a: "Name the service, such as blood pressure checks, rather than telling a visitor they have a condition. Keep the page about what the practice offers and when to call.",
      },
      {
        q: "Who approves service names?",
        a: "A clinician should confirm each name is accurate and fits what the practice actually offers, then the page can be published.",
      },
    ],
    citations: [PLAIN_LANGUAGE, GOOGLE_HELPFUL, NIST_SMALL],
    links: [
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language Guide", description: "Clear words for patients." },
      { href: "/guides/how-to-write-a-medical-service-page-that-ranks", label: "Writing A Service Page", description: "Structure that ranks." },
      { href: "/guides/two-pages-for-the-same-service-keyword-cannibalization-on-a-medical-practice-website", label: "Two Pages, One Service", description: "Avoid pages competing." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1583
  {
    slug: "patients-who-move-out-of-the-area-records-transfer-and-referral-wording-for-a-primary-care-practice",
    keyword: "patients who move out of the area records transfer and referral wording for a primary care practice",
    category: "How-to",
    title: "Wording for Patients Who Move Out of the Area",
    metaTitle: "Wording for Primary Care Patients Who Move Away",
    metaDescription:
      "Plain wording for primary care patients who are moving: how to request records, find a new office and what the practice says. (561) 291-2681",
    answer:
      "A patient who is moving needs three things from the practice: a clear way to request records, the date their care here will end, and the patient's own choice of a new office. Say so in plain words, route records requests through one form, and let the patient pick the new practice.",
    author: "Liam Costello",
    publishDate: "2026-11-06T11:00:00Z",
    dateModified: "2026-11-06",
    readMinutes: 5,
    sections: [
      h2("Moving is a records question, not a goodbye"),
      p(
        "When a patient says they are moving out of state or out of the county, the front desk usually hears a sad news item. What the patient needs is practical: how to get their records to a new office, how long it takes and what to do about refills and open tests in the meantime. A short page and a short script prevent a week of phone tag."
      ),
      p(
        "This page covers practical wording only. How quickly records must be provided, what may be charged, and what a practice owes a departing patient are set by federal and state rules, so have your attorney or compliance advisor confirm your own timelines and your own forms."
      ),
      h2("What the notice or page should say"),
      table(
        ["Item", "Plain wording idea"],
        ["How to ask for records", "Point to one request form. Say who handles it and how long the office aims to take, stated as a goal, not a promise."],
        ["Who receives them", "The patient or a new practice named by the patient on a signed request."],
        ["Last day of care here", "State a clear date, so the patient knows when to have a new office in place."],
        ["Refills and open results", "Say that the clinician will tell the patient how open items are handled, without giving medical advice on the page."],
        ["Finding a new office", "Explain that the patient chooses the new practice. Offer a general directory, not a personal recommendation."],
      ),
      h2("Let the patient choose the new office"),
      p(
        "Avoid wording that steers a departing patient toward a particular practice unless that is a documented partnership. Say the practice can send records to any office the patient names, and suggest asking the new insurance plan for in-network offices. Federal rules give individuals a right to access their health information and to direct a copy to a person they designate, which is why the request should be simple to make."
      ),
      h3("Phrases to use"),
      ul(
        "We can send your records to the office you choose once we receive your signed request.",
        "Please tell us your last appointment date so we can plan with you.",
        "Our care here ends on the date we give you, so please arrange a new office before then.",
        "For urgent needs, call 911 or go to the nearest emergency room."
      ),
      h2("Link the right pages"),
      p(
        "Connect this notice to the [medical records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records) so patients land on one form, and to the [specialist referral request page](/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice) if the patient also has an open referral. A patient who moves may also change insurance, so the page on [prior authorization and referral timelines](/guides/prior-authorization-and-referral-timelines-explained-on-a-primary-care-practice-website) helps set expectations at the new office."
      ),
      h2("Keep it kind and brief"),
      p(
        "A farewell note can be warm without clinical detail. Thank the patient, give the three practical items, and give a phone number. Do not mention a diagnosis, a medication or a reason for the move. Keep a note in the record that the patient was told how to request their information."
      ),
    ],
    faqs: [
      {
        q: "How fast must records be sent?",
        a: "Federal rules set a deadline for responding to an access request, and state rules may differ. Ask your attorney or compliance advisor which applies to you and write that on your own form instead of guessing.",
      },
      {
        q: "Can we recommend a doctor in the new city?",
        a: "Avoid personal recommendations unless you have a documented relationship. Suggest the patient search their new insurance plan's directory and tell you the name of the office to send records to.",
      },
      {
        q: "What if the patient has unpaid balances?",
        a: "Handle billing through the usual process, and ask your attorney how it may or may not affect a records request. Do not put billing conditions on the public notice.",
      },
      {
        q: "Should we send records to the patient or to the new office?",
        a: "Either, depending on the signed request. Let the patient say which and confirm how the copy will be delivered, since a secure method matters more than speed.",
      },
      {
        q: "Does this apply to telehealth patients out of state?",
        a: "Practices have to follow the rules of the state where the clinician is licensed and the patient is located. Ask your compliance advisor before offering visits across state lines.",
      },
    ],
    citations: [HHS_ACCESS, PLAIN_LANGUAGE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Request Page", description: "How patients ask for records." },
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Referral Request Page", description: "Open referrals and next steps." },
      { href: "/guides/practice-closing-and-records-custodian-notice-for-a-counseling-practice-without-legal-advice", label: "Records Custodian Notice", description: "When records need a new home." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1585
  {
    slug: "shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice",
    keyword: "shared role mailbox instead of a staff member's inbox for website forms at a medical practice",
    category: "Checklist",
    title: "A Shared Role Mailbox for Website Forms at a Practice",
    metaTitle: "Shared Role Mailbox for Website Forms at a Practice",
    metaDescription:
      "Why a medical practice should send website form notices to a shared role mailbox, who watches it, and what never goes in the email. (561) 291-2681",
    answer:
      "Send website form notices to a shared role mailbox such as frontdesk@yourpractice.com, owned by the practice, read by at least two people, with a named person checking it each business day. Keep health details out of the notification and let the email only say that a message waits.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T11:20:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("The form that only one person can see"),
      p(
        "Many practice websites send every contact form to one person's inbox, often the office manager's. It works until that person is out sick, on vacation or gone. A new patient's request then sits unread for days, and the patient moves on to the next office. The form was working, the website was fine, and the practice still lost the inquiry."
      ),
      p(
        "A shared role mailbox fixes the structural problem. It is an address named for a job rather than a person, such as frontdesk@ or newpatients@, that belongs to the practice and that several people can open."
      ),
      h2("What a good setup looks like"),
      table(
        ["Part", "What to do"],
        ["Address", "Use the practice's own domain, named for the role, such as newpatients@."],
        ["Who can open it", "At least two current staff, each with their own sign-in. No shared password."],
        ["Who owns the check", "One named person each business day, with a named backup."],
        ["Reply rule", "A stated goal, such as one business day, written in the form's confirmation message."],
        ["Notification wording", "Say that a message is waiting, not what it says. Details stay in the secure system."],
      ),
      h2("Keep the email itself safe"),
      p(
        "A form notification travels through ordinary email. Set the form to send only a short alert, with the sender's name and a link to a protected inbox if your form tool supports one, and leave out anything about symptoms, conditions or visit reasons. Our guide on [contact form confirmation email wording](/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details) covers what the patient receives back, and the [spam and fake lead guide](/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form) shows how to keep junk out of the shared box."
      ),
      h3("Test it every quarter"),
      ul(
        "Submit a test message that clearly says it is a test and confirm the shared mailbox receives it.",
        "Check that it is not filtered into junk by looking in the spam folder.",
        "Confirm both people can open the mailbox and that a former employee cannot.",
        "Time how long it takes for the test to be answered."
      ),
      h2("Why it also helps your response time"),
      p(
        "Response speed is where a practice wins or loses a new patient. When two people can see the same inbox, a message that arrives at lunch gets answered by whoever is back first, and nobody has to forward anything. Add a simple rule that the first person to reply marks the message, such as a flag or a folder, so the patient never receives two answers and nothing is left waiting because each person thought the other had it."
      ),
      h2("When someone leaves or goes on leave"),
      p(
        "The point of the role address is that nothing changes when a person does. Remove the departing person from the mailbox's user list as part of the exit steps in our guide on [removing a former employee's access](/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice), add their replacement, and run the test again. During planned leave, confirm that the backup knows the box exists. The person who takes over the box should be added on their first day, as part of a [handoff map for a new office manager](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts)."
      ),
      p(
        "If forms do not arrive, follow the [form email delivery test](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website) before blaming the site. Most missing messages are caught by spam filters or sent to an address that no longer exists."
      ),
    ],
    faqs: [
      {
        q: "Is a shared mailbox the same as a shared password?",
        a: "No. A shared mailbox is one address that several people open with their own sign-ins. A shared password means everyone uses one login, which makes it impossible to remove one person cleanly.",
      },
      {
        q: "Does it cost extra?",
        a: "Often it does not. Many business email services offer shared mailboxes or group addresses without a separate paid seat. Check your provider's plan before paying for another user.",
      },
      {
        q: "Can the form tool send to more than one address?",
        a: "Most can. Still prefer one role address that forwards to people, so the practice controls the list in one place instead of in the form settings.",
      },
      {
        q: "What should the notification say?",
        a: "Something like: a new message was received from the website contact form. Do not include the message body if you can avoid it, and never copy health details into the subject line.",
      },
      {
        q: "How fast should we answer?",
        a: "State a goal on the form's confirmation message and meet it. Same business day for new patient requests is a strong standard for a practice that wants the call.",
      },
    ],
    citations: [NIST_SMALL, CISA_PASSWORDS, HHS_TERMINATION],
    links: [
      { href: "/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website", label: "Form Email Delivery Test", description: "Check forms reach the inbox." },
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Email On Your Own Domain", description: "Why the domain matters." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stopping Spam Leads", description: "Keep junk out of the inbox." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1586
  {
    slug: "retiring-old-pdf-forms-and-outdated-documents-still-indexed-on-a-medical-practice-website",
    keyword: "retiring old pdf forms and outdated documents still indexed on a medical practice website",
    category: "How-to",
    title: "Retiring Old PDF Forms Still Showing in Google",
    metaTitle: "Retiring Old PDF Forms Still Showing in Google Search",
    metaDescription:
      "How a medical practice finds old PDF forms still showing in Google, replaces them, and removes the outdated file the safe way. (561) 291-2681",
    answer:
      "To retire an old PDF form, publish the current version first, then redirect the old file's address to it or to the page that describes the form, and only remove the file once nothing links to it. Check Google for the old name afterwards. Never leave a form with outdated rules or phone numbers online.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T11:40:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Old forms keep working long after you stop using them"),
      p(
        "A practice changes its intake packet, its cancellation policy or its address. The new forms go on the site, but the old PDFs stay on the server, and Google keeps showing them. A patient searching for the new patient form lands on a version with a fax number nobody answers, or a policy that no longer applies. They fill it out, bring it in, and the front desk has to start over."
      ),
      p(
        "Old documents also cause quieter problems. They can show a phone number or address you changed, contain staff names of people who have left, and compete with the current page in search. The fix is a short routine, not a big project."
      ),
      h2("Find what is still out there"),
      ul(
        "Search Google for site:yourpractice.com filetype:pdf and list every result.",
        "Open the Pages report in Search Console and look for document addresses that end in .pdf or sit in an uploads folder.",
        "Scan the site's media library for files not linked from any current page.",
        "Search for an old phone number, fax number or address on your own domain."
      ),
      p(
        "Write each file in a sheet with the title, address, date, whether it is still correct and what should replace it. Our guide to [new patient forms online](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains how to publish the current forms safely, and it is worth keeping to one current version of each."
      ),
      h2("Choose the right fix for each file"),
      table(
        ["Situation", "What to do"],
        ["A newer version exists", "Redirect the old file's address to the new file or to the page that explains it, then update every link."],
        ["The form is no longer used", "Redirect to the most relevant page, such as the new patient page. If nothing fits, let it return a real not-found page."],
        ["The file is still valid but should not appear in search", "Keep it, and ask search engines not to show it using the methods Google documents."],
        ["The file contains something private", "Remove it at once, then ask Google to remove the cached copy using its removal tool."],
      ),
      h2("Do it in this order"),
      p(
        "Publish the replacement first, then redirect, then update the links, then delete the old file, and finally check search. Removing the file before the redirect is in place sends visitors to an error page. The [redirects guide for removing a service or provider page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website) shows how to choose the target, and the guide on [finding and fixing broken links](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) covers the cleanup afterwards."
      ),
      h3("What Google needs to hear"),
      p(
        "Google can take a while to drop an old file even after it is gone. For ordinary cleanups, a redirect or a not-found response is enough and the result fades over time. For anything private, use Google's removal tool as well as removing the file. Documents Google may not show can also carry a noindex instruction, which Google documents for files that are not web pages. Old blog posts need the same treatment, and a short guide on [whether to keep, update, merge or remove an old post](/guides/deciding-whether-to-keep-update-merge-or-remove-an-old-blog-post-on-a-medical-practice-website) covers when a redirect is the right answer."
      ),
      h2("Keep it from piling up again"),
      p(
        "Give every form a version date in its file name and a footer, store forms in one folder, and review the folder twice a year. When a policy changes, update the form on the same day and retire the old one the same day. Put it on the same calendar as your listing review. Add each file to the same [page inventory sheet as your web pages](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for) so a forgotten document is not missed at the next review."
      ),
    ],
    faqs: [
      {
        q: "Should we delete the old PDF right away?",
        a: "Not before you set a redirect or confirm nothing links to it. Deleting first sends visitors to an error page. Publish the new version, redirect, update links, then delete.",
      },
      {
        q: "Can we just hide the PDF from Google?",
        a: "You can ask search engines not to show a file, but anyone with the link can still open it. If the document is outdated or private, remove or replace it instead of hiding it.",
      },
      {
        q: "How long until Google stops showing the old file?",
        a: "It varies from days to weeks. A redirect or removal helps, and the removal tool speeds up urgent cases. Do not expect an instant change.",
      },
      {
        q: "Should forms be PDFs at all?",
        a: "Often a web page or online form is easier to keep current and easier on phones. Keep a downloadable version for patients who prefer paper and label it with its date.",
      },
      {
        q: "What about forms with patient information filled in?",
        a: "Completed forms should never be on the public website. If one is found there, remove it immediately, ask Google to remove the cached copy, and tell your privacy officer.",
      },
    ],
    citations: [GOOGLE_REMOVE, GOOGLE_BLOCK, NIST_SMALL],
    links: [
      { href: "/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website", label: "Redirects For Removed Pages", description: "Choosing the right target." },
      { href: "/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website", label: "Page Indexing Report", description: "See what Google has stored." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "Publishing Patient Forms", description: "Keep forms current and safe." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
