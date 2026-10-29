// -- Guides batch 24 - 2026-10-22 --
// Guide/AEO pages from the Command Center queue (rows 1210, 1212, 1214-1218), built by the page factory to
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
const HHS_MARKETING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA and marketing communications",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html",
};
const HHS_MIN_NECESSARY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA minimum necessary requirement",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const W3C_FORMS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms tutorial",
  href: "https://www.w3.org/WAI/tutorials/forms/",
};
const W3C_STATEMENTS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Developing an accessibility statement",
  href: "https://www.w3.org/WAI/planning/statements/",
};
const WCAG_QUICKREF = {
  publisher: "W3C Web Accessibility Initiative",
  label: "How to meet WCAG (quick reference)",
  href: "https://www.w3.org/WAI/WCAG21/quickref/",
};
const ADA_WEB = {
  publisher: "U.S. Department of Justice, ADA.gov",
  label: "Guidance on web accessibility and the ADA",
  href: "https://www.ada.gov/resources/web-guidance/",
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
const CDC_VACCINES = {
  publisher: "Centers for Disease Control and Prevention",
  label: "Vaccines and immunizations",
  href: "https://www.cdc.gov/vaccines/index.html",
};
const PLAIN_LANGUAGE = {
  publisher: "plainlanguage.gov",
  label: "Federal plain language guidelines",
  href: "https://www.plainlanguage.gov/",
};

export const guidesPartTwentySeven: Guide[] = [
  // ---------------------------------------------------------------- 1210
  {
    slug: "patient-reactivation-letter-for-inactive-patients-of-a-primary-care-practice-without-health-details",
    keyword: "patient reactivation letter for inactive patients of a primary care practice without health details",
    category: "How-to",
    title: "Patient Reactivation Letter for a Primary Care Practice, Without Health Details",
    metaTitle: "Patient Reactivation Letter for a Primary Care Practice",
    metaDescription:
      "How to write a letter to patients who have not visited in a while: plain wording, no health details, a clear way to book or opt out. Call (561) 291-2681.",
    answer:
      "A reactivation letter reminds patients who have not visited in a while that the practice is still open to them. Keep it short, address it only to the patient, leave out any health detail or reason for a past visit, give one way to book, and add a simple way to say no thanks.",
    author: "Liam Costello",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("Why a letter, and why be careful"),
      p(
        "Every primary care practice has patients who came in a few times and then stopped. Some moved, some switched doctors, and some simply let a year slip by. A short, friendly letter is a low-cost way to reach the ones who might come back."
      ),
      p(
        "The letter is also the one piece of marketing that goes to your own patient list, so the privacy rules matter more than the design. A postcard can be read by anyone who handles the mail, and an envelope can be opened by a spouse or a roommate. The letter should say nothing that would tell a stranger why this person was ever your patient."
      ),
      h2("Who counts as inactive"),
      p(
        "Choose a plain rule and apply it to everyone. A common one is no visit in the last two years, excluding patients who have been formally discharged, who asked to transfer their records, or who are known to have died. Ask the front desk to review the list before anything is printed, because sending a reminder to a family that just lost someone is a mistake you cannot take back."
      ),
      ul(
        "Include patients with no completed visit in your chosen period.",
        "Remove anyone who asked not to be contacted, anyone discharged, and anyone whose records were transferred out.",
        "Check addresses against the last returned mail and the most recent update on file.",
        "Keep the list inside your practice system. Do not upload it to a free mailing tool."
      ),
      h2("What the letter says"),
      table(
        ["Part of the letter", "What to write"],
        ["Greeting", "The patient's name, or Dear Neighbor if your system cannot merge names safely."],
        ["Opening line", "It has been a while since we saw you at the practice, and we wanted to say hello."],
        ["What is new", "Real facts only: new hours, a new provider, same-week appointments, a patient portal, or a new location."],
        ["The one action", "Call the office or use the booking page to schedule. Print your real number and keep it identical to your Google profile."],
        ["The way out", "If you would rather not hear from us, call or reply and we will update our list."]
      ),
      p(
        "Notice what is missing. There is no mention of a condition, a medication, a past visit or a test that is due. Reminders about specific care belong in a patient communication that the HHS guidance on [HIPAA and marketing](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html) treats differently, and a general reactivation letter should not drift into it."
      ),
      h2("Sample wording"),
      p(
        "Dear [Name], it has been a while since we last saw you, and we wanted to say hello. Our office has [same-week appointments / new evening hours / a new provider], and we would be glad to see you again. To book, call us or use the link below. If you would rather not receive letters from us, tell us and we will take you off the list."
      ),
      h2("Sending it and counting it"),
      p(
        "Mail is the safest channel for a first reactivation. Text and email need the patient's consent to be contacted that way, and our guide to [text message marketing compliance](/guides/text-message-marketing-compliance-for-a-medical-practice) explains what that means in practice. Whichever channel you choose, send a single wave and wait before sending anything else."
      ),
      p(
        "To know whether it worked, ask the front desk to note when a caller mentions the letter, and pair that with the question on your forms covered in our guide to [asking how a new patient heard about you](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing). Count returned visits and returned mail. Do not record anything about the patient's health in the tally."
      ),
      h3("Watch the response, not the volume"),
      p(
        "A hundred letters that bring back five patients is a fair result for a first try. Compare the cost of printing and postage to the value of five visits, and adjust the list or the wording before sending the next wave."
      ),
    ],
    faqs: [
      {
        q: "Can the letter say the patient is overdue for a checkup?",
        a: "Keep a general reactivation letter free of anything about a patient's care. A message about a specific test or visit is a different kind of communication with its own rules, so send it separately and have your privacy officer review it first.",
      },
      {
        q: "Is a postcard acceptable?",
        a: "It can be, if it contains only the practice name, a welcome line and a way to call. A sealed letter is the safer choice because nothing about the patient is visible to anyone handling the mail.",
      },
      {
        q: "How often should we send a reactivation letter?",
        a: "Once a year at most, and only to patients who still meet your inactive rule. Sending the same people repeated reminders feels like pressure and increases opt-outs.",
      },
      {
        q: "What if a patient asks us to stop contacting them?",
        a: "Record the request the same day and remove the patient from every outreach list, including text and email. Confirm the change to the patient only if they asked for a reply, and never ask them to explain.",
      },
      {
        q: "Can we mention insurance in the letter?",
        a: "Only general facts, such as the plans the practice accepts, and only if the list is current. Do not say what a particular patient's plan covers, because the practice cannot confirm that without checking benefits.",
      },
    ],
    citations: [HHS_MARKETING, HHS_MIN_NECESSARY, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "A first message that says nothing about health." },
      { href: "/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details", label: "Appointment Reminder Wording", description: "Reminders that are safe to read on a lock screen." },
      { href: "/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories", label: "Accepting New Patients Status", description: "Keep every listing telling the same story." },
      { href: "/locations/medical-seo-florida", label: "Medical SEO In Florida", description: "How we help practices get found." },
    ],
  },

  // ---------------------------------------------------------------- 1212
  {
    slug: "showing-trust-on-a-counseling-practice-website-without-client-testimonials",
    keyword: "showing trust on a counseling practice website without client testimonials",
    category: "Playbook",
    title: "Showing Trust on a Counseling Practice Website Without Client Testimonials",
    metaTitle: "Trust on a Counseling Website Without Testimonials",
    metaDescription:
      "Therapists can build trust without client testimonials: license lookups, clear fees, real photos and honest process pages. See how. Call (561) 291-2681.",
    answer:
      "A counseling website earns trust through proof a visitor can check, not through client quotes. Show your license and how to verify it, your fees, your process, a real photo and a plain privacy page. Let unprompted Google reviews stand on their own, and never ask a client to write one.",
    author: "Gio LaRoche",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why testimonials are a problem for therapists"),
      p(
        "Other businesses put customer quotes at the top of the page. A counseling practice usually cannot. The professional codes that guide therapists, such as the [ACA Code of Ethics](https://www.counseling.org/resources/ethics), caution against soliciting testimonials from current clients or from anyone who may feel pressure to say yes, and licensing boards in many states add their own limits."
      ),
      p(
        "There is a privacy problem too. A named client, a first name with a photo or a story about a life event can identify a person, and a counseling relationship is one where identification can cause real harm. The safe position is to leave client voices off the site and earn trust another way. Check the rules of your own license and state, because they differ."
      ),
      h2("What a visitor is really asking"),
      p(
        "Someone looking for a therapist is usually nervous and is asking four quiet questions. Is this person qualified? Will I be treated with respect? What will it cost? What happens if I get in touch? A page that answers those four needs no quotes."
      ),
      table(
        ["Visitor's question", "What to show instead of a testimonial"],
        ["Is this person qualified?", "License type, number and state, with a link to the state lookup where it can be checked."],
        ["Will I be treated with respect?", "A bio in the therapist's own voice, a real photo and a plain description of how sessions usually begin."],
        ["What will it cost?", "Fees, insurance accepted, and cancellation terms stated openly."],
        ["What happens when I reach out?", "A short note on who replies, how fast and what the first call or form involves."],
        ["Is my information safe?", "A privacy page in everyday language, and a contact form that asks only what it needs."]
      ),
      h2("Proof that does not involve a client"),
      h3("License and training"),
      p(
        "List credentials exactly as they appear on your license, and link to the official lookup. Do not invent or round up a credential, and do not list a training you did not complete. If you are an associate working under supervision, say so and name the supervisor, as our guide on [associate and pre-licensed clinician disclosure](/guides/associate-and-pre-licensed-clinician-disclosure-page-for-a-counseling-practice) explains. Practices that include faith in sessions should state the license and the setting first, and our guide to a [faith based counseling page](/guides/faith-based-and-spiritually-integrated-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to do that without outcome claims."
      ),
      h3("Process and fees"),
      p(
        "Describe the first session, how long it lasts and how often people usually meet, without promising an outcome. Publish your fee, your insurance panels or your superbill policy, and your cancellation terms. Openness about money is one of the strongest trust signals a practice can offer, and our guide to [therapy practice fees pages](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) shows how to word it."
      ),
      h3("Reviews you did not ask for"),
      p(
        "Google reviews that clients write on their own are allowed to exist. You may reply to them, but only in wording that never confirms the writer was a client. Do not request them, do not offer anything for them, and do not copy them onto your site as quotes. Our guide to [responding to Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) covers the wording. Trust also comes from clear boundaries, such as a published [social media and friend request policy for a counseling practice](/guides/social-media-and-friend-request-policy-page-for-a-counseling-practice) that explains how clients may and may not contact clinicians online."
      ),
      h2("Small signs that add up"),
      ul(
        "A phone number and address that match your Google profile exactly.",
        "A clear privacy page and a note on how you handle email and text.",
        "A crisis line such as 988 and a plain statement that the site is not for emergencies.",
        "Professional memberships you actually hold, with a link to the organization.",
        "A page that loads fast and reads well on a phone, with text large enough to read comfortably."
      ),
      p(
        "None of these is flashy. Together they tell a nervous visitor that a real, licensed person runs this practice and that contacting them is safe."
      ),
    ],
    faqs: [
      {
        q: "Can we show our own Google star rating on the site?",
        a: "Some practices do, if the rating comes from unprompted reviews and the display follows Google's rules and your board's. Never select only the best reviews, and never ask clients to leave one. When in doubt, link to the Google profile and let visitors read it there.",
      },
      {
        q: "Are quotes from other professionals allowed?",
        a: "A statement from a colleague about your professional work, such as a supervisor or a referral partner, is a different thing from a client testimonial. Keep it factual, get the person's written permission and check it against your own board's advertising rules.",
      },
      {
        q: "What about case examples or composite stories?",
        a: "Avoid them. A composite can still be recognized by someone who sees themselves in it, and it can read as a promise of results. Describe what you help with in general terms instead.",
      },
      {
        q: "Does leaving out testimonials hurt search rankings?",
        a: "No. Search engines look for pages that are helpful, accurate and written by people with real expertise. Clear credentials, honest fees and a useful bio support that far better than quotes would.",
      },
      {
        q: "How much should the bio say about the therapist personally?",
        a: "Enough to feel like a real person: where you trained, what you enjoy outside work, and how you like to work. Leave out anything you would not say to a new client in a first meeting.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "A bio that builds trust without claims." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "Tell nervous visitors what to expect." },
      { href: "/guides/google-review-vs-patient-testimonial-legal-difference", label: "Review Versus Testimonial", description: "Where the legal line sits." },
      { href: "/locations/gbp-optimization-florida", label: "Google Profile Optimization In Florida", description: "Make the listing match the site." },
    ],
  },

  // ---------------------------------------------------------------- 1214
  {
    slug: "online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out",
    keyword: "online appointment request form fields for a primary care practice what to ask and what to leave out",
    category: "Checklist",
    title: "Online Appointment Request Form Fields for a Primary Care Practice: What to Ask and What to Leave Out",
    metaTitle: "Appointment Request Form Fields for a Primary Care Site",
    metaDescription:
      "Which fields an online appointment request form needs, which to skip, and how to keep symptoms and health details out of it. Call (561) 291-2681.",
    answer:
      "An appointment request form should collect only what the front desk needs to call the patient back: name, phone, best time to call, new or returning, and insurance name. Leave out symptoms, reason for the visit and Social Security numbers. Fewer fields get more completed forms and expose less private information.",
    author: "Gio LaRoche",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("The form has one job"),
      p(
        "An appointment request form does not schedule a visit by itself. It starts a conversation, and a person on your staff finishes it by phone or portal. If you keep that in mind, deciding which fields to include becomes easy: ask for whatever lets someone call back and offer a time, and nothing more."
      ),
      p(
        "Every extra field costs completed forms, and some fields cost privacy. The HHS rule on the [minimum necessary requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) is written for how you use patient information, but it is also a good test for what a public web form should collect."
      ),
      h2("Fields to include and fields to leave out"),
      table(
        ["Field", "Decision"],
        ["Full name", "Include. Add a preferred name only if your system uses it."],
        ["Phone number", "Include. Make it required, and ask whether it is safe to leave a voicemail."],
        ["Email", "Optional. Many patients prefer a call, and a required email loses people."],
        ["Best time to call", "Include as a simple choice: morning, afternoon or evening."],
        ["New or returning patient", "Include. It tells the desk which script to use."],
        ["Insurance plan name", "Include as a name only. Never ask for member or group numbers on a web form."],
        ["Preferred location or provider", "Include if you have more than one."],
        ["Reason for the visit or symptoms", "Leave out. It invites health details into an unsecured form."],
        ["Date of birth", "Leave out until the call, unless your form is on a secure patient portal."],
        ["Social Security number or card details", "Never ask."]
      ),
      p(
        "If someone types health details into a free-text box anyway, those details become part of your records and may pass through email. That is why the form should have no free-text box for the visit at all, or a clearly marked box with a warning not to include health information."
      ),
      h2("Wording that protects the patient"),
      h3("A short notice above the button"),
      p(
        "Tell people what happens next and what not to send. For example: We will call you within one business day to find a time. Please do not include symptoms or medical details here. If this is an emergency, call 911. That sentence sets the expectation for speed, keeps the form clean and sends the urgent case somewhere safe."
      ),
      h3("Honest response times"),
      p(
        "Only promise a callback time your front desk can keep. A form that says we will call within the hour and then waits until tomorrow does more damage than a form that says one business day. Our guide on [what to put on a medical practice contact page](/guides/what-to-put-on-a-medical-practice-contact-page) covers how to set that expectation across the whole page."
      ),
      h2("Building it so it works"),
      ul(
        "Give every field a visible label, not only placeholder text, so screen readers and tired eyes can read it. The W3C forms tutorial explains the details.",
        "Make the form usable on a phone: large tap targets, the right keyboard for a phone number, and no fields hidden behind a scroll.",
        "Add spam protection that does not rely on a puzzle, such as a hidden field and server-side checks. Our guide to [stopping spam and fake leads on a contact form](/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form) explains the options.",
        "Send each submission to a secure inbox or system, and avoid putting the details of the request in an email subject line."
      ),
      h2("Tracking the form without private details"),
      p(
        "After a successful submission, send the visitor to a thank-you page and count visits to that page as the conversion. That records that a request happened and which page it came from, and nothing else. Our guide on [thank-you pages after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it) shows the setup."
      ),
    ],
    faqs: [
      {
        q: "How many fields is too many?",
        a: "For a first request, five to seven is usually plenty. If you find yourself asking for more, move that question to the phone call or to a secure intake form that the patient opens after the visit is booked.",
      },
      {
        q: "Can we ask which service the patient wants?",
        a: "A dropdown with general choices, such as new patient visit, annual physical or follow-up, is fine. It should not ask what is wrong or why they want to be seen.",
      },
      {
        q: "Should the form require a date of birth?",
        a: "Not on a public page. Collect it during the callback or inside a secure portal, where the staff member can verify the patient's identity properly.",
      },
      {
        q: "Does this form need a privacy notice?",
        a: "Yes, a short line near the button that links to your privacy page. It should say who receives the request and that the form is not for emergencies or medical details.",
      },
      {
        q: "Is it safe to use a form builder from a free plugin?",
        a: "Be careful. Ask where submissions are stored, who can read them and whether the vendor will sign the agreement your practice needs. If the answers are unclear, choose a different tool before launching.",
      },
    ],
    citations: [HHS_MIN_NECESSARY, W3C_FORMS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publish forms without exposing data." },
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling And SEO", description: "Booking tools and how search sees them." },
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Count requests without private details." },
      { href: "/locations/medical-website-design-florida", label: "Medical Website Design In Florida", description: "Forms that fit the whole site." },
    ],
  },

  // ---------------------------------------------------------------- 1215
  {
    slug: "first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time",
    keyword: "first-time client contact form for a counseling practice fields privacy notice and response time",
    category: "Checklist",
    title: "First-Time Client Contact Form for a Counseling Practice: Fields, Privacy Notice and Response Time",
    metaTitle: "First-Time Client Contact Form for a Counseling Practice",
    metaDescription:
      "What a counseling practice's first-contact form should ask, the privacy notice to place beside it, and how to set a response time. Call (561) 291-2681.",
    answer:
      "A first-time client form for a counseling practice should feel safe to fill in. Ask for a first name, a phone or email the person has marked as private, and a preferred contact time. Skip the story of why they are reaching out. Add a short privacy notice, a crisis line and an honest reply time.",
    author: "Liam Costello",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 6,
    sections: [
      h2("A different kind of form"),
      p(
        "Someone filling in a counseling contact form may have thought about it for weeks. They may be reaching out from a shared computer, and they may not want a partner, parent or employer to find out. The form has to make it feel safe to take that step."
      ),
      p(
        "That changes the design. A form for a primary care office can ask for a callback number and a visit type. A counseling form needs to ask how it is safe to reach this person, and it must not invite a description of what is going on, because a website form is not a private room."
      ),
      h2("The fields that belong"),
      ol(
        "First name, or the name the person wants to be called.",
        "A phone number, with a choice: it is fine to leave a voicemail, leave a message with only my first name, or please do not leave a message.",
        "An email address, optional, with a note that email is not a secure way to share personal details.",
        "A preferred way to be reached: call, text or email.",
        "Best time of day to be contacted.",
        "Whether they prefer in-person or video sessions, if you offer both.",
        "Whether they are looking for themselves, a child, a couple or a family, as a simple choice."
      ),
      p(
        "That is enough for a clinician or office manager to reply, offer a short call and find out whether the practice is a fit. It is deliberately silent about problems, symptoms and history. Those belong in a conversation or in secure intake paperwork after the person has chosen to become a client."
      ),
      h2("The notice that sits beside the button"),
      h3("Say what the form is and is not"),
      p(
        "Place three or four plain sentences beside the submit button. Say who reads the form, that it is not for emergencies, and where to call if the person is in crisis. For example: This form goes to our front office. It is not monitored around the clock. If you are in crisis, call or text 988 or call 911."
      ),
      h3("Say how the information is handled"),
      p(
        "Link to a privacy page written in everyday language. It should say what the practice keeps, who sees it, how long it is kept and how to ask for removal. Our guide to [emergency and crisis resources on a counseling site](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) explains how to word the crisis line without sounding alarming."
      ),
      h2("Set a response time you can keep"),
      p(
        "People who reach out to a counselor often feel it takes courage. Waiting days for a reply can feel like a rejection. Choose a time you can meet, such as one business day, say it above the button, and put a person in charge of checking the inbox. After the form is sent, an automatic reply should confirm receipt and state the reply time, as our guide to an [auto reply email after a new client inquiry](/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice) explains."
      ),
      table(
        ["If your practice", "A reasonable promise"],
        ["Has a front desk staffed daily", "We reply within one business day."],
        ["Is a solo clinician with set office hours", "We reply on the days the office is open, usually within two business days."],
        ["Has a waitlist", "We reply within two business days and share the expected wait for a first appointment."]
      ),
      p(
        "If you have a waiting list, say so. Our guide to [waitlist pages for a therapy practice](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) shows how to explain it without losing the visitor. Because the public contact form should stay short, leave the emergency contact off it and explain that step on an [emergency contact request on intake page](/guides/emergency-contact-request-on-intake-for-a-counseling-practice-without-clinical-detail) that clients read before the secure intake packet."
      ),
      h2("Behind the scenes"),
      ul(
        "Send submissions to a secure system with access limited to the people who need them, and avoid forwarding them to personal email.",
        "Count a visit to a thank-you page as the conversion, so analytics sees that a request happened and nothing about the person. See our guide to [HIPAA-safe tracking](/guides/hipaa-safe-tracking-for-a-medical-website).",
        "Make the form work with a screen reader and a keyboard, with a label on every field.",
        "Add spam protection that does not rely on collecting extra personal details."
      ),
    ],
    faqs: [
      {
        q: "Should the form ask what the person wants help with?",
        a: "Offer a short list of general categories at most, and make it optional. Do not give a free-text box, because people will fill it with details that should be shared in a private conversation.",
      },
      {
        q: "Is it all right to ask for a date of birth?",
        a: "Not on the first contact form. Collect it later in the secure intake paperwork, once the person has decided to start and the practice can verify identity properly.",
      },
      {
        q: "What should the confirmation message say?",
        a: "Thank the person, repeat the response time and give the crisis line again. Do not repeat what they typed, and do not reference the reason they gave for reaching out.",
      },
      {
        q: "Can a counseling practice use text messages to reply?",
        a: "Only if the person chose text on the form and understands that text is not a secure channel. Keep texts to scheduling and never include details about care.",
      },
      {
        q: "How do we keep the form from feeling cold?",
        a: "Use warm, plain wording, a real clinician name or photo near the form, and a sentence such as reaching out is a good first step. Keep the number of fields small so it feels easy to finish.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, W3C_FORMS],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What to tell a nervous visitor." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "A gentle way to start the conversation." },
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "Send forms without exposing details." },
      { href: "/locations/medical-seo-lakeland", label: "Medical SEO In Lakeland", description: "Help new clients find your practice." },
    ],
  },

  // ---------------------------------------------------------------- 1216
  {
    slug: "nurse-line-and-advice-line-page-for-a-primary-care-practice-without-clinical-advice",
    keyword: "nurse line and advice line page for a primary care practice without clinical advice",
    category: "How-to",
    title: "Nurse Line and Advice Line Page for a Primary Care Practice, Without Clinical Advice",
    metaTitle: "Nurse Line Page for a Primary Care Practice Website",
    metaDescription:
      "How to write a nurse line or after-hours page that gives hours, numbers and a clear emergency line without medical advice. Call (561) 291-2681.",
    answer:
      "A nurse line page tells patients when to call, what number to use and who answers, and it says plainly to call 911 in an emergency. It does not diagnose, name symptoms or suggest treatment. Keep the hours, the number and the limits of the line on one short, easy page.",
    author: "Gio LaRoche",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("What the page is for"),
      p(
        "Many primary care practices have a nurse line or an after-hours answering service, but patients cannot find it. They search, land on a general contact page and call the front desk number, which rings to a closed office. A short page that says exactly how the advice line works saves that wasted call."
      ),
      p(
        "The page is operational, not medical. It tells people which number to dial and what to expect when someone picks up. It does not tell anyone what to do about a symptom, because that advice belongs in a conversation with a licensed clinician who knows the patient."
      ),
      h2("What to put on it"),
      h3("The essentials, near the top"),
      ul(
        "The phone number, as a tap-to-call link, with the number also shown as text.",
        "The hours the line is staffed, and what happens outside those hours.",
        "Who answers: a nurse on staff, an answering service that passes messages to the on-call clinician, or voicemail. Say which one it is.",
        "How long a return call usually takes, only if the practice can keep that promise.",
        "A sentence that in an emergency the patient should call 911 and not wait for a call back."
      ),
      h3("The limits of the line"),
      p(
        "Say what the line does not do. It does not replace an emergency room, it does not refill medications at all hours, and it cannot discuss a patient's care with anyone who is not the patient or an authorized contact. Stating limits builds trust and cuts down on frustrated calls."
      ),
      h2("Wording that avoids clinical advice"),
      table(
        ["Instead of this", "Write this"],
        ["Call us if you have a fever over a certain number.", "Call the line to speak with a nurse about a health concern."],
        ["Chest pain? Take an aspirin and call.", "If you think you are having an emergency, call 911."],
        ["We can treat most problems over the phone.", "A nurse will listen, take a message for the clinician and tell you how to reach care."],
        ["Safe to wait until morning.", "Leave a message and the on-call team will call you back."]
      ),
      p(
        "Any sentence that names a symptom and then tells the reader what to do has crossed the line. Keep that kind of guidance out of your marketing pages and leave it to the clinical team."
      ),
      h2("Mental health and crisis"),
      p(
        "If your patients may also be struggling emotionally, add a line pointing to the 988 Suicide and Crisis Lifeline for anyone in distress. A primary care nurse line is rarely the right place for a mental health crisis, and the page should say where to turn instead."
      ),
      h2("Make it findable"),
      ul(
        "Link the page from the contact page, the footer and the patient portal page.",
        "Put the after-hours number in the voicemail greeting too. Our guide to [after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) covers the wording.",
        "Match the numbers and hours on your Google profile and in your directory listings.",
        "Count taps on the number so you can see whether patients are finding it. See our guide to [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website)."
      ),
      p(
        "Review the page every few months, and whenever the answering service, the hours or the staffing change. A wrong number on a page about urgent calls is worse than no page."
      ),
    ],
    faqs: [
      {
        q: "Does a nurse line page need a disclaimer?",
        a: "It should say plainly that the page is information about how to reach the line, not medical advice, and that anyone with an emergency should call 911. Keep it short and place it near the top, not buried in the footer.",
      },
      {
        q: "Can we list the name of the nurse who answers?",
        a: "Only if the person agrees and the staffing is stable enough to keep the page accurate. A role such as registered nurse is fine if it is true, but do not state credentials the practice has not confirmed.",
      },
      {
        q: "Should the page list conditions the line can help with?",
        a: "No. A list of conditions reads as clinical advice and invites patients to rely on the page. Describe the line in terms of what it does, such as taking messages and connecting to the on-call clinician.",
      },
      {
        q: "What if we only use an answering service?",
        a: "Say so. Tell patients that a person will take a message and pass it to the on-call clinician, and give an honest sense of how long a return call can take.",
      },
      {
        q: "How does this help search visibility?",
        a: "People search for terms like doctor after hours near me. A clear page with the number, hours and limits gives search engines and AI answer tools an accurate source, and it keeps patients from calling the wrong number.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients", label: "Phone Menus And Call Routing", description: "Keep patients from getting lost in a menu." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday And Closure Notices", description: "Say when the office is closed." },
      { href: "/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice", label: "Portal Message Expectations", description: "Set expectations for non-urgent messages." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "Help patients reach the right number." },
    ],
  },

  // ---------------------------------------------------------------- 1217
  {
    slug: "immunization-and-vaccine-availability-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "immunization and vaccine availability page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Immunization and Vaccine Availability Page for a Primary Care Practice, Without Clinical Claims",
    metaTitle: "Vaccine Availability Page for a Primary Care Practice",
    metaDescription:
      "How to publish which vaccines your primary care office offers, who can book, and how to confirm stock without making medical claims. Call (561) 291-2681.",
    answer:
      "A vaccine availability page tells patients which vaccines the office offers, which ages it serves, how to book and what to bring. It stays factual and avoids claims about safety, benefits or who needs a shot. Link to the CDC for medical information and say to call to confirm what is in stock.",
    author: "Liam Costello",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("The question patients are really asking"),
      p(
        "When someone searches for a vaccine near them, they usually do not need to be convinced. They want to know whether your office gives it, whether they can get an appointment and what it will cost. A page that answers those three questions will do more for them, and for your phone line, than a page full of health advice."
      ),
      p(
        "That is also the safer way to write it. Statements about what a vaccine does, who should get it or how safe it is are clinical claims. They change as guidance changes, and they belong to the clinical team and the public health agencies, not a marketing page."
      ),
      h2("What the page should list"),
      table(
        ["Item", "What to say"],
        ["Which vaccines you offer", "A list by name, confirmed by the clinical team, with a date the list was last checked."],
        ["Ages you serve", "The age ranges the office actually vaccinates, such as children, adults or both."],
        ["How to book", "Call, online request or walk-in, and how far ahead people should ask."],
        ["Cost and insurance", "Plans accepted and self-pay options, with a note to call about coverage."],
        ["What to bring", "A photo ID and insurance card, and past vaccine records if the patient has them."],
        ["Records requests", "How a patient asks for a copy of their immunization record, and who to call."],
        ["Stock and timing", "Availability can change, so call to confirm before coming in."]
      ),
      p(
        "Every row is a fact the front desk can check. If a row would need a clinician to approve the wording, do not include it on this page."
      ),
      h2("Leave out the medical claims"),
      h3("What to avoid"),
      ul(
        "Statements that a vaccine is safe, effective or necessary.",
        "Lists of diseases a vaccine prevents, with statistics.",
        "Advice about who should or should not receive a shot.",
        "Words such as recommended for you, which imply a judgment about an individual."
      ),
      h3("What to do instead"),
      p(
        "Give readers a link to the public health source and let it speak. The [CDC vaccine information](https://www.cdc.gov/vaccines/index.html) is maintained by people whose job is to update it, and linking to it keeps your page accurate without your staff having to monitor changes."
      ),
      h2("Keep stock and dates honest"),
      p(
        "A page that says flu shots are available every day will be wrong on the first day the supply runs out. Add a sentence such as call to confirm availability, and date-stamp the page with the month it was last checked. Our guide to [seasonal service pages for flu shots and school physicals](/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals) shows how to refresh a page each season without creating a new one."
      ),
      p(
        "If you do not offer a vaccine, say so and suggest where else to look, such as the pharmacy partners page or the county health department. Sending someone away helpfully is better than letting them drive over for nothing. Our guide to the [pharmacy and lab partner information page](/guides/pharmacy-and-lab-partner-information-page-for-a-primary-care-practice) shows how to list those options."
      ),
      h2("Make the page do its job"),
      ul(
        "Put a tap-to-call button near the top and again after the table.",
        "Use a short headline that matches the search, such as Vaccines at [Practice Name].",
        "Link from the services page, the new patient page and the Google profile.",
        "Track calls and booking requests without recording which vaccine anyone asked about."
      ),
    ],
    faqs: [
      {
        q: "Can the page say that the office is accepting walk-ins for vaccines?",
        a: "Only if it is true every day it is posted. If walk-ins depend on staffing, say that an appointment is the surest way to be seen and invite people to call to ask about walk-in times.",
      },
      {
        q: "Should we list prices?",
        a: "If you publish self-pay prices, keep them current and state what they include. Otherwise say that cost depends on insurance and invite patients to call. Our guide on publishing self-pay prices covers the wording.",
      },
      {
        q: "Can we mention that a vaccine is required for school or travel?",
        a: "Avoid stating requirements yourself, because they change. Link to the school district, county or public health page that sets the rule and let patients check it there.",
      },
      {
        q: "Do we need a separate page for each vaccine?",
        a: "Usually no. One clear page that lists every vaccine you offer is easier to keep accurate, and it avoids dozens of thin pages that repeat each other.",
      },
      {
        q: "How often should the page be reviewed?",
        a: "Check it at the start of each respiratory season and any time the office adds or stops offering a vaccine. Update the date on the page each time you review it.",
      },
    ],
    citations: [CDC_VACCINES, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "Another service page without clinical claims." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What To Bring Page", description: "Tell patients what to bring." },
      { href: "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website", label: "Self-Pay Prices", description: "Publish prices patients can trust." },
      { href: "/locations/gbp-optimization-west-palm-beach", label: "Google Profile Optimization In West Palm Beach", description: "Keep the listing and page in step." },
    ],
  },

  // ---------------------------------------------------------------- 1218
  {
    slug: "website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice",
    keyword: "website accessibility statement and how to report a barrier for a medical practice",
    category: "How-to",
    title: "Website Accessibility Statement and How to Report a Barrier for a Medical Practice",
    metaTitle: "Accessibility Statement for a Medical Practice Website",
    metaDescription:
      "What an accessibility statement should say, how patients can report a barrier, and how to answer each report without overclaiming. Call (561) 291-2681.",
    answer:
      "An accessibility statement tells visitors that the practice cares about access, names the standard it works toward, and gives a phone number and email to report a barrier. It should be honest about known gaps, offer another way to get the same information, and never claim the site is fully accessible.",
    author: "Gio LaRoche",
    publishDate: "2026-10-22T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("What the statement does"),
      p(
        "An accessibility statement is a short page that tells people with disabilities three things: that the practice wants its site to work for them, how to get help if it does not, and what to expect after they ask. It does not make a site accessible. Fixing the site does that."
      ),
      p(
        "It does give patients a respectful way to tell you about a problem before they give up or complain somewhere else. For a medical practice, where many patients have vision, hearing, movement or reading difficulties, that matters. The U.S. Department of Justice [web accessibility guidance](https://www.ada.gov/resources/web-guidance/) explains how the ADA applies to websites of businesses open to the public."
      ),
      h2("What to include"),
      ol(
        "A plain commitment, one or two sentences, in your own voice.",
        "The standard you work toward, such as the Web Content Accessibility Guidelines 2.1 Level AA, described as a goal and not as a guarantee.",
        "How to report a barrier: a phone number staffed during office hours, an email address that someone reads and, if you have one, a short form.",
        "What happens next: who replies, how soon, and what you will try to do.",
        "Other ways to get the same thing, such as booking by phone, a large-print form at the front desk or help completing paperwork.",
        "Known issues, if any, with a date for when you expect to fix them.",
        "The date the statement was last reviewed."
      ),
      h2("Wording to avoid"),
      table(
        ["Do not write", "Write this"],
        ["This website is fully accessible.", "We work to make this website usable by everyone, and we test it against WCAG 2.1 Level AA."],
        ["We comply with all laws.", "We want every patient to be able to use this site. Tell us if something does not work."],
        ["Contact our webmaster.", "Call the office or email the address below, and a staff member will reply within two business days."],
        ["Accessibility is not a problem.", "If you find a barrier, tell us and we will help you another way while we fix it."]
      ),
      p(
        "Overclaiming is the main risk. A statement that promises full accessibility becomes evidence against you the first time someone finds a problem. State your effort and your process, not a result you cannot prove."
      ),
      h2("How to handle a report"),
      h3("Acknowledge quickly"),
      p(
        "Reply the same or next business day, thank the person and ask what they were trying to do. Offer to finish the task by phone or in person so they are not stuck while the fix is being made."
      ),
      h3("Record and fix"),
      p(
        "Log each report with the date, the page, the problem and who owns the fix. Test the page again with a keyboard and a screen reader after the change, and write back to the person to say what was done. Our guide to [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) explains the most common problems to check first."
      ),
      h2("Placing and maintaining it"),
      ul(
        "Link the statement from the footer of every page so it can be found from anywhere.",
        "Use the same plain styling as the rest of the site, with large text and good contrast.",
        "Review it twice a year and after any major redesign, and update the date each time.",
        "Test the forms and the phone link as part of every review. See our guide to [accessibility and parking information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) for the physical side."
      ),
    ],
    faqs: [
      {
        q: "Is an accessibility statement required by law?",
        a: "There is no single rule that requires one for every business, and having a statement does not by itself protect a site that has barriers. Ask a qualified attorney about your obligations. A statement is still good practice because it gives patients a clear way to ask for help.",
      },
      {
        q: "Should we use an accessibility overlay widget?",
        a: "Be cautious. A widget does not fix problems in the underlying code, and some tools make things harder for people who use screen readers. Fix the site itself, and use a statement and a human contact in addition.",
      },
      {
        q: "Which standard should we name?",
        a: "Most organizations name WCAG 2.1 Level AA as their target. Say that you work toward it, and avoid saying you conform unless a qualified review has confirmed it.",
      },
      {
        q: "How fast should we promise to reply?",
        a: "Choose a time your staff can meet, such as two business days, and say it plainly. A reply that arrives sooner is a pleasant surprise, and one that arrives later is a broken promise.",
      },
      {
        q: "Does a statement help search visibility?",
        a: "Indirectly. The work behind it, such as clear headings, labeled forms and readable text, helps both patients and search engines understand the pages. The statement itself is mostly about trust.",
      },
    ],
    citations: [ADA_WEB, W3C_STATEMENTS, WCAG_QUICKREF],
    links: [
      { href: "/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice", label: "Accommodation Request Page", description: "A page for in-person accommodation requests." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Fast pages help everyone, including assistive tools." },
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation And Footer", description: "Where the statement link belongs." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "Sites built to be usable by everyone." },
    ],
  },
];
