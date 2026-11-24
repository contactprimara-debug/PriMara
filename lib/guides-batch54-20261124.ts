// -- Guides batch 54 - 2026-11-24 (afternoon top-up) --
// Six website how-to guides from the Command Center queue (rows 2089, 2090, 2091, 2092, 2096, 2098), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is built from
// sources fetched and read before writing: the W3C WCAG Understanding pages for Sensory Characteristics, No Keyboard Trap,
// Error Prevention (Legal, Financial, Data) and Consistent Identification, the W3C WAI Forms Tutorial pages on validation and
// instructions, and the MDN reference pages for textarea and button. Plain practical guidance, no legal advice, no outcome
// promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const W = (label: string, page: string) => ({
  publisher: "W3C Web Accessibility Initiative",
  label,
  href: `https://www.w3.org/WAI/WCAG22/Understanding/${page}.html`,
});
const WCAG_SENSORY = W("Understanding Success Criterion 1.3.3: Sensory Characteristics", "sensory-characteristics");
const WCAG_TRAP = W("Understanding Success Criterion 2.1.2: No Keyboard Trap", "no-keyboard-trap");
const WCAG_PREVENT = W("Understanding Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data)", "error-prevention-legal-financial-data");
const WCAG_CONSISTENT = W("Understanding Success Criterion 3.2.6: Consistent Identification", "consistent-identification");
const WAI_VALID = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms Tutorial: Validating Input",
  href: "https://www.w3.org/WAI/tutorials/forms/validation/",
};
const WAI_INSTR = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms Tutorial: Form Instructions",
  href: "https://www.w3.org/WAI/tutorials/forms/instructions/",
};
const MDN_TEXTAREA = {
  publisher: "MDN Web Docs",
  label: "The HTML textarea element",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea",
};
const MDN_BUTTON = {
  publisher: "MDN Web Docs",
  label: "The HTML button element",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const KB = { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." };
const ADA = { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." };
const SR = { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your contact page the way a patient does." };
const ERR = { href: "/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details", label: "Form Error Messages", description: "Say what went wrong, without private details." };
const LABELS = { href: "/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears", label: "Visible Labels Above Every Field", description: "Keep the question on screen while a patient types." };
const CTA = { href: "/guides/call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact", label: "Call-to-Action Button Wording", description: "Book, request or contact." };

export const guidesPartForty17: Guide[] = [
  // ---------------------------------------------------------------- 2089
  {
    slug: "instructions-that-name-a-button-by-color-or-position-on-a-booking-page-of-a-practice-website-so-every-patient-can-follow-them",
    keyword: "instructions that name a button by color or position, such as click the green button on the right, on a booking page so every patient can follow them",
    category: "Checklist",
    title: "Booking Page Instructions That Name the Button, Not Its Color or Position",
    metaTitle: "Name the Button, Not Its Color or Position",
    metaDescription:
      "Click the green button on the right means nothing to a patient who cannot see it. How to reword booking page instructions. (561) 291-2681.",
    answer:
      "When a booking page tells a patient to click the green button on the right, anyone who cannot see color or layout has no way to follow it. Name the button by its words instead, such as Request a visit, and keep the color or position as an extra hint only.",
    author: "Liam Costello",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The sentence that only works if you can see the page"),
      p(
        "Look at the line above your booking button. Many practice pages say something like click the green button on the right to choose a time. The writer could see a green button on the right, so the sentence felt clear. A patient using a screen reader hears neither green nor right, and a patient whose phone stacks everything in one column may find no button on the right at all."
      ),
      p(
        "The same trap shows up in welcome messages, intake instructions and confirmation emails. Anywhere a sentence points at a shape, a shade or a spot on the screen, it works for some patients and fails for others, and it often fails exactly at the step where you want them to book."
      ),
      h2("What the W3C says"),
      p(
        "The Sensory Characteristics criterion says instructions for understanding and operating content must not rely solely on sensory characteristics of components, such as shape, color, size, visual location, orientation or sound. The W3C gives round button and button to the right as examples of wording that fails people who cannot perceive shape or position through their assistive technology."
      ),
      p(
        "It also says cues like shape and position are effective for many people, including people with cognitive limitations, so you do not have to remove them. The requirement is that the same instruction also be given another way, which in practice means the button's name."
      ),
      h2("Reword it in three steps"),
      table(
        ["Instruction as written", "Reworded so anyone can follow it"],
        ["Click the green button on the right", "Select the button labeled Request a visit"],
        ["Use the round icon below to call us", "Select Call the office, the phone button below this line"],
        ["Fill in the boxes marked in red", "Fill in the fields marked required"],
        ["See the link in the top corner", "Select Patient forms in the main menu"]
      ),
      p(
        "The W3C's own passing example for a survey shows the pattern. The instruction says to select the green arrow icon labeled Next in the lower right corner, which mixes color and position with the label. Because the label is in the sentence, the instruction does not rely on sensory characteristics alone and it passes."
      ),
      h2("Why the button's name has to match"),
      p(
        "Naming the button only helps if the name in your sentence is the name on the button. If the page says Request a visit in the instruction and the button says Get started, a screen reader user will search for words that do not exist. Keep the wording identical, as our guide to [button wording for a counseling practice](/guides/call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact) describes, and see the companion piece on using [the same button words on every page](/guides/the-same-button-words-for-the-same-action-on-every-page-of-a-practice-website-such-as-request-a-visit)."
      ),
      h2("A ten-minute sweep of your own pages"),
      ol(
        "Open the booking page, the contact page and the new patient page.",
        "Search each page with your browser's find tool for the words green, red, blue, right, left, above, below, round and corner.",
        "For every hit inside an instruction, add the exact words on the button or field.",
        "Check the confirmation email and any text message template for the same phrases.",
        "Listen to the page once with a screen reader, using the steps in our [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills), and confirm each instruction can be followed by ear."
      ),
      h3("A note for your designer"),
      p(
        "Position words like above and below can be fine when the content really does sit in that order in the page's reading sequence. The risk is a layout that shifts on a phone. This guide is practical suggestion only, and it is not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Do I have to stop mentioning button colors?",
        a: "No. The W3C says color and position cues help many people and need not be removed. They just cannot be the only way the instruction is given. Add the button's name and the sentence works for everyone.",
      },
      {
        q: "Does the word below count as a position?",
        a: "It can. The W3C notes that in many languages below and above are understood to mean later or earlier in the content. If the item really follows the sentence in the reading order and the reference is clear, that wording is acceptable.",
      },
      {
        q: "Where do these sentences usually hide?",
        a: "Booking pages, intake forms, welcome emails, appointment reminder texts and printed handouts that mirror the site. Search all of them, not only the web page.",
      },
      {
        q: "What if the button only has an icon?",
        a: "Give the icon a text name that screen readers announce, and use that same name in the instruction. Our guide to icon buttons that need a spoken name covers the check.",
      },
      {
        q: "How long does the fix take?",
        a: "Rewording a handful of sentences is usually a short editing session. Changing a layout is a designer task and takes longer, which is why the wording fix comes first.",
      },
    ],
    citations: [WCAG_SENSORY],
    links: [
      CTA,
      { href: "/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website", label: "Icon Buttons That Need a Spoken Name", description: "Give icons a text name." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2090
  {
    slug: "pop-up-chat-window-or-menu-on-a-practice-page-that-traps-keyboard-focus-and-closing-it-with-the-escape-key",
    keyword: "a pop-up, chat window or menu on a practice page that traps keyboard focus, and closing it with the Escape key",
    category: "Checklist",
    title: "A Pop-Up or Chat Window That Traps Keyboard Focus on a Practice Page",
    metaTitle: "Pop-Up or Chat Window Traps Keyboard Focus",
    metaDescription:
      "If a keyboard user opens your chat or pop-up and cannot get out, the page is stuck. A short test and fix for a practice site. (561) 291-2681.",
    answer:
      "A chat window, pop-up or menu must let a keyboard user leave it. Open each one, press Tab until you cycle around, then press Escape. If the window closes and focus returns to the button that opened it, you are fine. If nothing happens, the patient is trapped.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The window that will not let go"),
      p(
        "A patient who uses a keyboard, a switch device or a screen reader reaches your page and opens the chat bubble in the corner. Now the Tab key walks around inside the chat box and never reaches anything else. There is no visible close button they can reach, and the page behind it is locked out. The only way out is to close the browser tab, and a patient who was about to call the office is gone."
      ),
      p(
        "Chat widgets, appointment pop-ups, cookie notices and mobile menus are all added by plug-ins, and nobody tests them without a mouse. The trap is easy to create and easy to miss."
      ),
      h2("What the W3C actually requires"),
      p(
        "The No Keyboard Trap criterion says that if keyboard focus can be moved into a component, it must be possible to move it out again using only the keyboard. If leaving needs more than unmodified arrow or Tab keys or other standard exit methods, the user must be told how."
      ),
      p(
        "The W3C is also clear that a pop-up is allowed to hold focus on purpose. A modal dialog that keeps Tab cycling between its own Cancel and OK buttons does not fail, as long as the user can leave it. In its modal dialog example the dialog closes by activating Cancel, activating OK or pressing the Esc key, and the W3C describes Esc as a commonly used standard exit method."
      ),
      table(
        ["What happens on your page", "Result"],
        ["Pop-up holds focus, and Escape or a reachable Close button closes it", "Fine"],
        ["Pop-up holds focus, and the only close button cannot be reached with Tab", "Trap"],
        ["Chat window swallows Tab and Escape, and the page cannot be reached again", "Trap"],
        ["Chat window needs a special key to exit, and the page says which key", "Allowed, because the user is told"],
        ["Menu opens on Enter and closes on Escape, returning focus to the menu button", "Fine"]
      ),
      h2("A three-minute test"),
      ol(
        "Open your home page and click somewhere neutral, then press Tab to start moving through the page.",
        "When you reach the chat bubble, the menu button or any pop-up trigger, press Enter to open it.",
        "Press Tab ten times. Watch the highlight: does it stay inside the window, or does it escape?",
        "Press Escape. The window should close, and the highlight should land back on the trigger that opened it.",
        "If Escape does nothing, try Shift and Tab together to move backwards, and look for a close button you can reach.",
        "Repeat on a phone page with an external keyboard if you can, and read the steps in our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills) for the rest of the page."
      ),
      h3("What to ask your web designer or the plug-in provider"),
      p(
        "Ask for three things in plain words: the window can be closed with the Escape key, a visible Close button can be reached with Tab, and focus goes back to the trigger afterward. If a third-party chat provider cannot do this, turn off its pop-up behavior or choose another provider. This is not legal advice, only a practical check."
      ),
      p(
        "While you are testing, also confirm that the pop-up does not hide the number a patient needs. A sticky bar or banner that blocks the next link is a separate problem, which we cover in [sticky headers and cookie banners that cover a keyboard user's link](/guides/sticky-header-or-cookie-banner-covering-the-link-a-keyboard-user-just-reached-on-a-medical-practice-website)."
      ),
    ],
    faqs: [
      {
        q: "Is a pop-up that holds focus always a failure?",
        a: "No. The W3C says restricting focus to a dialog is acceptable as long as the user knows how to leave it. The failure is a window with no keyboard exit.",
      },
      {
        q: "Is Escape the only exit key?",
        a: "The W3C calls Esc a commonly used standard exit method but says the exact methods depend on the hardware, browser and operating system. A reachable Close or Cancel button covers the rest.",
      },
      {
        q: "Who is most affected by a trap?",
        a: "The W3C names people who rely on a keyboard, including people who are blind and people with physical disabilities. A patient with a tremor who navigates by keyboard is as stuck as a screen reader user.",
      },
      {
        q: "Does this apply to the mobile menu?",
        a: "Yes. A menu that opens with a button should close with Escape or its own Close button, and focus should return to the menu button. Test it the same way as a chat window.",
      },
      {
        q: "What if the chat is from an outside provider?",
        a: "Test it and send the provider the three requests in this guide. If they cannot meet them, switching off the pop-up and offering a phone number and form is the safer choice for patients.",
      },
    ],
    citations: [WCAG_TRAP],
    links: [
      KB,
      { href: "/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website", label: "Keyboard Focus Outline and Tab Order", description: "See where focus is." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2091
  {
    slug: "review-your-answers-step-before-a-new-patient-form-is-sent-so-a-patient-can-correct-a-mistake",
    keyword: "a review-your-answers step before a new patient form is sent so a patient can correct a mistake",
    category: "Checklist",
    title: "A Review-Your-Answers Step Before a New Patient Form Is Sent",
    metaTitle: "Review Your Answers Before a Form Is Sent",
    metaDescription:
      "A phone number with one wrong digit means nobody calls the patient back. Add a review step before a form is sent. (561) 291-2681.",
    answer:
      "Before a new patient or contact form is sent, show the patient what they typed and let them change it. A wrong digit in a phone number or email quietly ends the request. A short review screen costs the patient seconds and saves the office a lost inquiry.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The mistake nobody sees until it is too late"),
      p(
        "A patient fills in a form on a phone, taps send, and moves on. One digit in the phone number is wrong. The office calls back, reaches a stranger, and logs the request as unreachable. The patient never learns anything went wrong and assumes the practice ignored them."
      ),
      p(
        "People transpose digits, hit the wrong key on a small screen, or let autocorrect change a word. The patients more likely to slip are the ones the practice most wants to help: older patients, people with motor difficulty and people who are distracted or upset while filling the form in."
      ),
      h2("What the W3C says"),
      p(
        "The Error Prevention criterion, Success Criterion 3.3.4, applies to pages that cause legal commitments or financial transactions, that modify or delete data a user can control, or that submit test responses. For those it asks that at least one of three things is true: the submission can be reversed, the data is checked and the user can correct it, or there is a way to review, confirm and correct before finalizing."
      ),
      p(
        "A plain contact form is usually not one of those cases, so this guide is not claiming the criterion requires a review step on every inquiry. Treat it as a good habit on the forms where a mistake is costly, such as a form that books a visit or collects insurance details, and as a safeguard the W3C describes in its forms tutorial."
      ),
      p(
        "That tutorial says that where possible users should be able to check their input and correct it, and that this is most important for permanent or critical actions or when the data cannot be checked automatically. Its example is letting a shopper check a postal address before a purchase completes."
      ),
      h2("What a review step looks like"),
      table(
        ["Form type", "Is a review step worth it?"],
        ["One-line callback request with a phone number", "A single confirmed phone field may be enough"],
        ["Booking request with date, time and phone", "Yes, show a summary before sending"],
        ["Multi-page new patient form", "Yes, one last page with every answer and an Edit link for each"],
        ["Form that uploads a document", "Yes, show the file name before sending"]
      ),
      p(
        "A good review screen is plain. It lists each question with the patient's answer beside it, puts an Edit link or button next to each line, and has one clear Send button at the bottom. It does not need new wording about health. Keep the review free of clinical detail, and ask only for what the first contact needs, as our guide to [form error messages without private details](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details) recommends."
      ),
      h2("Checks that catch mistakes before the review screen"),
      ul(
        "Use the right field type for phone and email so the phone keyboard and browser checks help.",
        "Be forgiving about format: accept spaces, dashes and brackets in a phone number rather than rejecting them.",
        "Offer a short message such as Please check your phone number when something looks off, and say which field.",
        "Read the number back on the thank-you page so a patient can spot a wrong digit even after sending."
      ),
      h3("Add a way back"),
      p(
        "If the form sends right away, a thank-you page that shows what was received and the office phone number gives the patient a second chance to notice a mistake. This is general website guidance and not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Does a contact form legally need a review step?",
        a: "This guide does not give legal advice. The W3C criterion on error prevention is written for legal commitments, financial transactions and changes to user data, and a simple inquiry form is generally outside that. A review step is still a sensible safeguard for booking forms.",
      },
      {
        q: "Will a review step lower the number of completed forms?",
        a: "We have not measured that and will not promise either way. Keep the screen short, show only what the patient typed, and make Send the obvious next action.",
      },
      {
        q: "Should the review show everything on a long intake form?",
        a: "Show the answers a mistake would hurt most, such as name, phone, email and requested date, and let the patient open the rest if they want to. Avoid displaying more than the first contact needs.",
      },
      {
        q: "What about a patient on a screen reader?",
        a: "Use real headings and a list or table on the review page, with Edit links that name the question they change, so the screen reader says which answer an Edit link belongs to.",
      },
      {
        q: "Can the confirmation email do the same job?",
        a: "It helps as a backup, but it arrives after sending. Keep the email free of health details, as covered in our guide to confirmation email wording, and show the key details before sending as well.",
      },
    ],
    citations: [WCAG_PREVENT, WAI_VALID],
    links: [
      ERR,
      { href: "/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less", label: "Autofill and Phone Keyboard Settings", description: "Fewer keystrokes, fewer typos." },
      { href: "/guides/contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details", label: "Contact Form Confirmation Email Wording", description: "Confirm without health details." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2092
  {
    slug: "the-same-button-words-for-the-same-action-on-every-page-of-a-practice-website-such-as-request-a-visit",
    keyword: "the same button words for the same action on every page of a practice site, such as Request a visit",
    category: "Checklist",
    title: "The Same Button Words for the Same Action on Every Practice Page",
    metaTitle: "Same Button Words on Every Page of a Practice Site",
    metaDescription:
      "Book now, Get started and Schedule all do the same thing. Pick one set of words for a practice site and keep it. (561) 291-2681.",
    answer:
      "If the header says Book now, the home page says Get started and the footer says Schedule, a patient has to wonder whether they lead to the same place. Choose one phrase per action, such as Request a visit, and use it on every page where that action appears.",
    author: "Liam Costello",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("Three buttons, one destination, three names"),
      p(
        "Open your site and count the ways it asks for an appointment. It is common to find Book now in the header, Get started on the home page, Schedule a consult on the services page and Contact us in the footer, all going to the same form. The designer added each one at a different time and each felt right in its own spot."
      ),
      p(
        "A patient moving through the site does not know they are the same. A visitor who learned that Request a visit opens the form will not necessarily guess that Get started does, and a patient using a screen reader hears each button name on its own with no picture to help."
      ),
      h2("What the W3C says"),
      p(
        "The Consistent Identification criterion says components that have the same functionality within a set of pages must be identified consistently. The W3C's stated aim is that people can apply what they learned on one page to another, and it points to global navigation links, search controls, account controls and footer links as the recurring components where this matters most."
      ),
      p(
        "It also says identification does not have to be identical word for word in every case, and that using the same identification for the same function is encouraged. It gives a careful limit: a Contact us link in the footer and a Contact our support team link inside a policy page's text are not repeated instances of one component, so they are not required to match."
      ),
      table(
        ["Where the button sits", "Should it match?"],
        ["Header button on every page", "Yes, same words everywhere"],
        ["Sticky bar or mobile call bar", "Yes, same words as the header"],
        ["Footer link to the same form", "Yes, if it is the same repeated link"],
        ["A sentence in a guide that mentions the form", "Context may differ, but keep the key phrase"],
        ["A button for a different action, such as Call the office", "No, a different action needs different words"]
      ),
      h2("Make a short vocabulary list"),
      p(
        "Write down the three or four actions patients can take on your site and give each one a name. A typical list is Request a visit, Call the office, Send a message and Patient forms. Stick it where whoever edits the site can see it. Our guide to [wording for the same-day request button](/guides/same-day-appointment-request-button-wording-for-a-primary-care-practice) and the [book, request or contact comparison](/guides/call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact) help you choose the words."
      ),
      h3("Sweep your own site"),
      ol(
        "Open your home page, one service page, one guide and the contact page in four tabs.",
        "Write down the exact words on every button and link that leads to your form or phone.",
        "Mark any that do the same thing under different names.",
        "Pick one phrase for each action and edit the rest to match, including the sticky mobile bar and the footer.",
        "Check that the accessible name a screen reader speaks matches the visible words, as in our [icon button guide](/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website)."
      ),
      p(
        "Phone numbers deserve the same treatment: show the number the same way each time and keep the label as Call the office. Consistency is a usability habit and not a legal claim, and we do not give legal advice."
      ),
    ],
    faqs: [
      {
        q: "Must every button have exactly the same words?",
        a: "The W3C says identification does not have to be identical in every case, but it encourages using the same identification for the same function. For the buttons that repeat on every page, use one phrase.",
      },
      {
        q: "Does Book now versus Request a visit matter?",
        a: "It matters if both appear on the same site and lead to the same form. Pick one. If you cannot confirm a time in real time, Request a visit is the more accurate promise.",
      },
      {
        q: "What about the footer link to the contact page?",
        a: "A footer link that repeats on every page is the kind of recurring component the W3C describes. Use the same name as the header unless it truly leads somewhere different.",
      },
      {
        q: "Does this affect Google?",
        a: "We make no claim that button words change rankings. The benefit is patients recognizing the control and acting on it, which is what the guide is about.",
      },
      {
        q: "Where do I start?",
        a: "Start with the header, the sticky mobile bar and the home page. Those are the places most patients see first, and they are quick to edit.",
      },
    ],
    citations: [WCAG_CONSISTENT],
    links: [
      CTA,
      { href: "/guides/same-day-appointment-request-button-wording-for-a-primary-care-practice", label: "Same-Day Request Button Wording", description: "Words for a same-day button." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2096
  {
    slug: "submit-button-grayed-out-until-a-form-is-complete-on-a-practice-website-and-how-to-tell-the-patient-why",
    keyword: "a submit button that stays grayed out until the form is complete and how to tell the patient why",
    category: "Checklist",
    title: "A Grayed-Out Submit Button and How to Tell the Patient Why",
    metaTitle: "Grayed-Out Submit Button on a Practice Form",
    metaDescription:
      "A Send button that stays gray leaves a patient guessing what is missing. Why it confuses people and what to do instead. (561) 291-2681.",
    answer:
      "A Send button that stays gray until every field is right tells the patient something is wrong but not what. Leave the button active, and when they press it, say which field needs attention. A patient can fix a named problem; they cannot fix a silent one.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The button that will not answer"),
      p(
        "Picture a patient who has filled in a request form on a phone. The Send button is gray. They tap it and nothing happens. They scroll up, scroll down, look for a mistake, and cannot see one. Maybe the form wants a phone number in another format, or a box farther down is still empty. After a minute they close the page."
      ),
      p(
        "The disabled button is meant to prevent bad input. For the patient it behaves like a locked door with no sign explaining why."
      ),
      h2("What a disabled button actually does"),
      p(
        "The MDN reference for the button element says the disabled attribute prevents the user from interacting with the button: it cannot be pressed or focused. For a patient using the keyboard or a screen reader, that means the Tab key skips it. They may not even learn that a Send button exists, let alone why it is off."
      ),
      p(
        "The W3C Forms Tutorial describes a gentler approach. It recommends marking required fields with a label such as required, adding the required attribute so the browser itself reports missing input, and being forgiving of different input formats. Telephone numbers, it notes, are written with different separators and digit groupings, so a form that can read several notations is easier to use."
      ),
      table(
        ["Approach", "What the patient experiences"],
        ["Button disabled with no message", "A dead button and no reason"],
        ["Button disabled with a line above it naming what is missing", "Better, but keyboard users cannot reach the button"],
        ["Button always active, errors shown after pressing it", "The patient is told which field to fix"],
        ["Required fields marked in the label, plus browser checks", "The patient sees the rule before they start"]
      ),
      h2("What to do instead"),
      ol(
        "Mark required fields in the label itself, with the word required, not only a star or a color.",
        "Keep Send active at all times.",
        "When the patient presses Send with something missing, stop and show a short message at the top, such as Please add your phone number, and place the cursor in that field.",
        "Name each problem field in the message, and repeat the message next to the field, in the manner described in our guide to [form error messages without private details](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details).",
        "Accept spaces, dashes and brackets in phone numbers rather than rejecting them."
      ),
      h3("If your designer insists on a disabled button"),
      p(
        "Some forms really do need it, for example while a file finishes uploading. In that case place a visible line of text right above the button saying what the patient is waiting for, keep it readable by a screen reader, and remove the block the moment the condition is met. For the field labels that make all this work, see [visible labels above every field](/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears)."
      ),
      p(
        "Test the result with the steps in our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills): fill the form half way, press Send, and see whether the page tells you what to fix. This is practical guidance, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Why do forms disable the button at all?",
        a: "Usually to stop incomplete forms from being sent. The same goal can be met by checking when Send is pressed and naming what is missing, without leaving the patient stuck.",
      },
      {
        q: "Can a keyboard user reach a disabled button?",
        a: "MDN states that a disabled button cannot be pressed or focused, so the Tab key skips it. That is why a message explaining the wait is not enough on its own.",
      },
      {
        q: "Is color a good enough signal for a disabled state?",
        a: "No. A gray button can be invisible to a patient with low vision or reading in sunlight. Words that say what is missing are clearer than a shade.",
      },
      {
        q: "Should I validate while the patient types?",
        a: "That is a separate choice, with its own trade-offs. Whichever you choose, tell the patient what to fix in words and place the message next to the field.",
      },
      {
        q: "Does the browser do any of this for free?",
        a: "Yes. The W3C tutorial notes that the HTML required attribute lets the browser report missing input in its own standard dialog, which respects the visitor's font and color settings.",
      },
    ],
    citations: [MDN_BUTTON, WAI_VALID, WAI_INSTR],
    links: [
      ERR,
      LABELS,
      KB,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2098
  {
    slug: "message-box-on-a-practice-contact-form-large-enough-to-show-what-a-patient-typed",
    keyword: "a message box on a contact form that is large enough to show what a patient typed",
    category: "Checklist",
    title: "A Message Box on a Practice Contact Form Large Enough to Show What Was Typed",
    metaTitle: "A Contact Form Message Box Big Enough to Read",
    metaDescription:
      "A one-line message box hides what a patient wrote. Size, label and length settings for a practice contact form. (561) 291-2681.",
    answer:
      "Give the message box on a contact form enough height to show several lines at once, a visible label above it, and no hidden character limit. A patient who can see and reread what they wrote is more likely to finish and send the message.",
    author: "Liam Costello",
    publishDate: "2026-11-24T20:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("A box that shows one line at a time"),
      p(
        "Many contact forms show a message field a single line tall. A patient types two sentences, the text scrolls out of sight, and they cannot reread what they wrote without scrolling inside a tiny box. On a phone, with the keyboard covering half the screen, the problem is worse."
      ),
      p(
        "A message box is where a patient explains what they need. If it is awkward to use, they shorten the message, skip the details that would help the office call back, or give up."
      ),
      h2("What MDN says about the textarea"),
      p(
        "The MDN reference describes the textarea element as a multi-line plain-text control for a sizeable amount of free-form text. It lets you set rows and cols, and MDN recommends setting them for consistency because browser defaults can differ. If cols is not given, the default width is 20 average characters."
      ),
      p(
        "MDN also says to connect the box to a label with matching id and for values, and that placeholder text should only show an example of what to type and is not a substitute for a proper label. If no maximum length is set, the user can enter an unlimited number of characters. A maxlength, if you add one, caps what can be typed."
      ),
      table(
        ["Setting", "What it does for the patient"],
        ["Four to six visible rows", "Several lines show at once, so the patient can reread"],
        ["Full width on a phone", "The box fits the screen with no sideways scrolling"],
        ["Label above the box", "The question stays on screen while typing"],
        ["No maximum length, or a generous one stated in the label", "No message is cut off silently"],
        ["Placeholder used for a short example only", "Helpful hint that does not replace the label"]
      ),
      h2("A short checklist for your form"),
      ol(
        "Check that the message field is a multi-line box and not a single-line input.",
        "Make it at least four rows tall on a desktop and a phone.",
        "Make it the same width as the other fields, with no sideways scrolling on a phone.",
        "Put a visible label above it, such as How can we help, as described in our guide to [visible labels above every field](/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears).",
        "If you limit the length, say the limit in plain words before the patient starts typing.",
        "Type a long test message on your phone and confirm the whole message is still readable and that Send is reachable."
      ),
      h3("Say what not to include"),
      p(
        "Under the box, a short line such as Please do not include private health details in this message keeps patients from putting sensitive information in an unsecured form. Our guide to the [note under a contact form](/guides/what-happens-after-you-submit-note-under-a-medical-practice-contact-form-when-to-expect-a-reply-and-what-not-to-include) covers the wording."
      ),
      p(
        "Last, make sure the error text is helpful if the message is required but empty, as in the [form error messages guide](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details). This is practical website guidance and not legal advice."
      ),
    ],
    faqs: [
      {
        q: "How many rows should the box have?",
        a: "MDN does not name a number. Four to six rows is a practical size that shows a few sentences at once. Test on your own phone and adjust to what you can read comfortably.",
      },
      {
        q: "Should I set a character limit?",
        a: "Only if your system needs one. Without maxlength the user can enter unlimited text per MDN. If you add a limit, tell the patient before they start so nothing is cut off silently.",
      },
      {
        q: "Can the box grow as the patient types?",
        a: "Some designs do this. It works if it stays inside the screen and the Send button remains reachable, so test it on a phone before you keep it.",
      },
      {
        q: "Is placeholder text enough as a label?",
        a: "No. MDN says placeholders are only for an example of the data and are not a substitute for a label tied to the field.",
      },
      {
        q: "Should the message be required?",
        a: "Often a phone number or email is the required part, and the message is optional. Decide what your office needs to call back, and mark exactly those fields.",
      },
    ],
    citations: [MDN_TEXTAREA, WAI_INSTR],
    links: [
      LABELS,
      ERR,
      { href: "/guides/what-happens-after-you-submit-note-under-a-medical-practice-contact-form-when-to-expect-a-reply-and-what-not-to-include", label: "What Happens After You Submit Note", description: "Set expectations under the form." },
      LOC,
    ],
  },
];
