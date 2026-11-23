// -- Guides batch 49 - 2026-11-18 (afternoon) --
// Two website how-to guides from the Command Center queue (rows 1919 and 1925), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is built from
// the W3C WAI WCAG 2.2 Understanding page for its criterion, fetched and read before writing.
// Plain practical guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const W = (label: string, page: string) => ({
  publisher: "W3C Web Accessibility Initiative",
  label,
  href: `https://www.w3.org/WAI/WCAG22/Understanding/${page}.html`,
});
const WCAG_REDUNDANT = W("Understanding Success Criterion 3.3.7: Redundant Entry", "redundant-entry");
const WCAG_STATUS = W("Understanding Success Criterion 4.1.3: Status Messages", "status-messages");

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty12: Guide[] = [
  // ---------------------------------------------------------------- 1919
  {
    slug: "not-asking-a-new-patient-to-type-the-same-details-twice-on-a-booking-or-contact-form-of-a-counseling-practice",
    keyword: "not asking a new client to type the same details twice on a booking or contact form of a counseling practice",
    category: "Checklist",
    title: "Not Asking a New Client to Type the Same Details Twice on a Counseling Practice Form",
    metaTitle: "Stop Asking Clients to Retype Details on Your Form",
    metaDescription:
      "Find the places your counseling practice's booking and contact forms ask for the same detail twice, and fix each one in a short checklist. (561) 291-2681",
    answer:
      "If a person has already given you a detail in one step of a form, do not make them type it again in a later step. Fill it in for them or let them pick it. The only normal exceptions are a new password, a security check, or a detail that is no longer valid.",
    author: "Liam Costello",
    publishDate: "2026-11-18T18:00:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Why retyping loses a first appointment"),
      p(
        "Reaching out to a counselor is rarely a light decision. Someone who has worked up the nerve to ask for a first session is also tired, distracted or anxious, and a form that asks for the same phone number three times gives them a reason to close the tab. Each repeated field is a small piece of homework that has nothing to do with getting help."
      ),
      p(
        "The W3C addresses this directly in its Redundant Entry criterion, which we read in full before writing this guide. Its plain summary is short: do not ask for the same information twice in the same activity. The reasoning is about memory. Some people with cognitive or learning disabilities find it hard to remember what they entered a moment ago, and everyone gets mentally tired as a multi-step process goes on."
      ),
      h2("What the rule actually requires"),
      p(
        "The criterion says information a person already entered, or that you already gave them, must not have to be entered again in the same process. You can meet it in two ways: fill the detail in automatically, or make it available to choose. The W3C also lists the cases where asking again is fine."
      ),
      table(
        ["Situation", "Is asking again acceptable?"],
        ["The person gave their phone number on step one and you ask for it on step three", "No. Show it again, filled in, and let them change it"],
        ["A new password has to be typed twice to catch typing mistakes", "Yes, a security measure the W3C allows"],
        ["The earlier answer is no longer valid, such as an email that bounced", "Yes, ask for a new one"],
        ["The person comes back tomorrow after closing the page", "The criterion does not require remembering across sessions"]
      ),
      p(
        "One detail from the W3C page matters for practices in particular. The browser's own autocomplete does not count as meeting the rule. It is the website that has to carry the earlier answer forward or avoid asking again."
      ),
      h2("Where counseling forms repeat themselves"),
      ul(
        "A booking tool that asks for name and phone, followed by a second intake page that asks for the same two details.",
        "A parent or guardian form for a young person that asks for the guardian's phone in the contact step and again in the consent step.",
        "An insurance step that asks for the subscriber's name and birth date after the person already gave their own, even when they are the same person.",
        "A confirmation screen that asks the person to retype their email before sending, instead of showing it so they can correct it.",
        "A telehealth form that asks for a home address in one section and again as the location to use if there is an emergency."
      ),
      h3("The fixes, in the order they usually pay off"),
      ol(
        "List every field in your booking and contact process from the first page to the confirmation. Mark any detail that appears more than once.",
        "For each repeat, pre-fill the later field from the earlier answer, or add a tick box such as the same as above, which the W3C names as an acceptable pattern.",
        "Keep the filled-in value visible and editable, so a person can correct it without starting over.",
        "If a repeat is truly needed, such as confirming a new password, write one sentence saying why.",
        "Test the whole path on a phone with a made-up name that starts with TEST, and stop before you submit anything real."
      ),
      h2("Privacy comes with the fix"),
      p(
        "The W3C adds a caution worth repeating for a counseling practice. The criterion has no privacy requirements of its own, but a careless way of carrying details forward can expose them. Keep any carried-over value inside the same form session, never in the address of the page, and never in an email subject line. The guide on [what to ask and what to leave out on an appointment request form](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) covers the question of which details belong on a first form in the first place."
      ),
      p(
        "Two neighboring guides help with the rest of the path. How to [set browser autofill and phone keyboard hints on the contact form](/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less) reduces typing inside each field, and the guide on [form error messages that say what went wrong without private details](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details) keeps what someone typed from being cleared when a mistake is found. We do not give legal advice, and fixing repeats does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does browser autofill count as fixing repeated entry?",
        a: "No. The W3C says autocomplete in the browser is not enough, because the website itself is what should supply the earlier answer or avoid asking again. Autofill is still a helpful extra for the person.",
      },
      {
        q: "Can we ask for an email twice to catch typing mistakes?",
        a: "The W3C allows re-entry for security, for example a new password that is hidden as it is typed. For an email address, a better choice is to show it plainly and let the person correct it, which avoids the repeat altogether.",
      },
      {
        q: "What if the booking tool belongs to another company?",
        a: "You cannot edit the vendor's code, but you can shorten the form you control, put your phone number beside the tool, and send the vendor a note naming the repeated field and the step where it appears.",
      },
      {
        q: "Does this apply when someone returns the next day?",
        a: "The W3C says the criterion does not add a requirement to store information between visits. It covers a single process. Keep what you carry forward inside that one session.",
      },
      {
        q: "Will fewer fields mean more completed requests?",
        a: "We cannot promise a number. Counting your submitted forms for a month before and a month after the change is the honest way to see whether it helped on your own site.",
      },
    ],
    citations: [WCAG_REDUNDANT],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "Fields, privacy notice and response time." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Make forms easier to complete." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1925
  {
    slug: "telling-a-screen-reader-user-that-a-contact-form-was-sent-without-moving-the-page-on-a-primary-care-practice-website",
    keyword: "telling a screen reader user that a contact form was sent without moving the page on a primary care practice website",
    category: "How-to",
    title: "Telling a Screen Reader User a Contact Form Was Sent, Without Moving the Page",
    metaTitle: "Form Sent Message for Screen Readers on a Practice Site",
    metaDescription:
      "When your contact form shows a sent message without a new page, a screen reader may stay silent. Here is how to check and what to ask for. (561) 291-2681",
    answer:
      "If your form shows a message such as Thank you, we got your request on the same page, a screen reader will only say it aloud when the message is marked as a status message. Ask your developer to add that mark, then test by listening with a screen reader.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T18:10:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("The silent success message"),
      p(
        "Many practice websites send a contact form without loading a new page. The person presses Send, a green line of text appears under the button, and a sighted visitor knows the request went through. A person using a screen reader may hear nothing at all, because the page did not move and the reader had no reason to speak. They are left wondering whether to press the button again or call the office."
      ),
      p(
        "That doubt costs the practice twice. Some people send the form three times and create duplicate requests for your front desk. Others assume it failed and leave without reaching you."
      ),
      h2("What the W3C asks for"),
      p(
        "The Status Messages criterion, which we read in full before writing this guide, covers exactly this case. In its own words, the goal is to let assistive technology notify users about status changes that do not take focus. A status message is text that tells the person about the success or results of an action, a waiting state, progress, or errors, and that appears without a change of context."
      ),
      p(
        "The W3C lists a form example that is almost your situation: after a user submits a form, text is added to the existing form reading that it was successfully submitted, and the screen reader announces the same message. It lists the error version too, such as text added to the form saying five errors were found."
      ),
      h3("When the rule does not apply"),
      ul(
        "If submitting loads a full thank-you page, the change of context already tells the screen reader something new has arrived, so the criterion does not need to be considered.",
        "If the message moves keyboard focus to itself, it is also not covered, since focus already makes the reader speak.",
        "A list of search results is not a status message, although a line such as 18 results returned is."
      ),
      h2("How a developer makes it speak"),
      p(
        "You do not need to write the code, but it helps to know the plain idea so you can describe the problem. The text area that will hold the message has to exist on the page before it fills with words, and it needs a role or property that tells assistive technology to announce changes. The W3C refers to roles and properties generally, and the common ones for this job are the status, alert and live-region settings. Ask your developer which one fits, because a calm confirmation and an urgent error should not sound the same."
      ),
      table(
        ["Message", "What the person should hear"],
        ["Your request was sent", "A polite announcement that waits for the reader to finish speaking"],
        ["Please add a phone number or email", "A clear, prompt announcement naming the field"],
        ["Sending...", "A short waiting message, and a sent message when it ends"]
      ),
      p(
        "The W3C also points out that when a waiting message simply vanishes, a blind user has no way to know it ended. So if your form shows Sending, make sure something is announced at the end, either the sent message or an error."
      ),
      h2("A ten-minute check you can run"),
      ol(
        "Turn on the screen reader that came with your computer. Our guide to the [five-minute screen reader test of the contact and booking pages](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills) explains how to start it.",
        "Open your contact form and fill it in with a made-up name that starts with TEST. Use a test mailbox, not a real patient or client address, and agree on the test with whoever receives the form first.",
        "Press Send and keep your hands off the keyboard. Listen for the sent message without moving.",
        "Repeat with a blank required field. You should hear the error spoken without having to hunt for it.",
        "Write down what you heard, and what you did not, and hand the note to your developer."
      ),
      p(
        "Keep the wording itself plain and free of health details, as covered in the guide on [what to say on the thank-you page after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it). If your form does load a separate thank-you page, that same page also keeps your lead tracking working, so do not replace it with an on-page message without checking with whoever manages your reports. We do not give legal advice, and one passing test does not by itself make a site conform to any standard. A [monthly Lighthouse check of five key pages](/guides/monthly-lighthouse-accessibility-check-of-five-key-pages-of-a-primary-care-practice-website) will not catch a missing status message, so keep this listening test in the routine."
      ),
    ],
    faqs: [
      {
        q: "Is a green message under the Send button enough?",
        a: "It is enough for people who can see it. For screen reader users, the message also has to be marked so the reader speaks it, which is what the W3C's Status Messages criterion describes.",
      },
      {
        q: "Does a separate thank-you page avoid this problem?",
        a: "Usually yes, because loading a new page is a change of context that screen readers already announce. The W3C treats messages that come with a change of context as outside this criterion.",
      },
      {
        q: "Should the message take keyboard focus instead?",
        a: "Moving focus works for some designs, but the W3C's point is that a status message should reach the person without taking focus, so they are not interrupted. Your developer can pick whichever fits the form.",
      },
      {
        q: "What should the sent message say?",
        a: "Keep it short and plain, such as that the request was received and when someone will reply. Leave out any health details, names of conditions or reasons for the visit.",
      },
      {
        q: "Can we test this on our live form?",
        a: "Only with a clearly marked test entry and a mailbox you control, agreed with whoever receives the form. Never use a real person's details, and never type anything about a health concern.",
      },
    ],
    citations: [WCAG_STATUS],
    links: [
      { href: "/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details", label: "Contact Form Confirmation Email Wording", description: "Plain wording without health details." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publish forms without exposing data." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },
];
