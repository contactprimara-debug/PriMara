// -- Guides batch 55 - 2026-11-25 --
// Eight guides from the Command Center queue (rows 2093, 2094, 2095, 2097, 2126, 2127, 2128, 2129), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care and counseling practice owner audience only. Sources fetched and read
// before writing: W3C WCAG technique PDF10 and Understanding pages (Name Role Value, Error Identification), the W3C WAI Forms
// Tutorial on validating input, MDN reference pages for input type tel and input type password, the CDC page on quitlines for
// clinicians, the AAFP policy on shared medical appointments, the NIMH publication on chronic illness and mental health, and
// HHS FAQ 198 on leaving messages for patients. Plain practical guidance, no legal advice, no clinical claims, no outcome
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
const PDF10 = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Technique PDF10: Providing labels for interactive form controls in PDF documents",
  href: "https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF10.html",
};
const WCAG_NRV = W("Understanding Success Criterion 4.1.2: Name, Role, Value", "name-role-value");
const WCAG_ERR = W("Understanding Success Criterion 3.3.1: Error Identification", "error-identification");
const WAI_VALID = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms Tutorial: Validating Input",
  href: "https://www.w3.org/WAI/tutorials/forms/validation/",
};
const MDN_TEL = {
  publisher: "MDN Web Docs",
  label: "The HTML input type tel",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel",
};
const MDN_PASSWORD = {
  publisher: "MDN Web Docs",
  label: "The HTML input type password",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password",
};
const CDC_QUIT = {
  publisher: "Centers for Disease Control and Prevention",
  label: "Quitlines and Other Resources for Health Care Providers",
  href: "https://www.cdc.gov/tobacco/hcp/patient-care/quitlines-and-other-resources.html",
};
const AAFP_SMA = {
  publisher: "American Academy of Family Physicians",
  label: "Shared Medical Appointments/Group Visits (policy)",
  href: "https://www.aafp.org/about/policies/shared-medical-appointments",
};
const NIMH_CHRONIC = {
  publisher: "National Institute of Mental Health",
  label: "Chronic Illness and Mental Health: Recognizing and Treating Depression",
  href: "https://www.nimh.nih.gov/health/publications/chronic-illness-mental-health",
};
const HHS_198 = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA FAQ 198: May health care providers leave messages for patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html",
};
const HBR = {
  publisher: "Harvard Business Review (via BYU ScholarsArchive)",
  label: "The Short Life of Online Sales Leads",
  href: "https://scholarsarchive.byu.edu/facpub/9711",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const KB = { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." };
const ADA = { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." };
const SR = { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your contact page the way a patient does." };
const ERR = { href: "/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details", label: "Form Error Messages", description: "Say what went wrong, without private details." };
const LABELS = { href: "/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears", label: "Visible Labels Above Every Field", description: "Keep the question on screen while a patient types." };
const CTA = { href: "/guides/call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact", label: "Call-to-Action Button Wording", description: "Book, request or contact." };
const BHREF = { href: "/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims", label: "Behavioral Health Referral Page", description: "Connect primary care patients to counseling." };
const PHONE = { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Click-to-Call Links", description: "One number, tappable everywhere." };

export const guidesPartForty18: Guide[] = [
  // ---------------------------------------------------------------- 2093
  {
    slug: "downloadable-pdf-new-patient-form-that-a-screen-reader-can-read-with-an-online-or-phone-alternative-for-a-primary-care-practice",
    keyword: "a downloadable PDF new patient form that a screen reader can read, with an online or phone alternative",
    category: "Checklist",
    title: "A New Patient PDF Form a Screen Reader Can Read",
    metaTitle: "New Patient PDF Form a Screen Reader Can Read",
    metaDescription:
      "A scanned PDF form is a picture. How to label PDF fields, test the file and offer an online or phone option for every patient. (561) 291-2681.",
    answer:
      "A downloadable new patient form works for a screen reader user only if every fillable field has a label the software can read. Add a tooltip to each field, never post a scan of a paper form, and always offer an online form or a phone call as another way in.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("A form that looks fine and says nothing"),
      p(
        "Many practices still post a new patient packet as a PDF. On screen it looks tidy: names, dates and boxes in neat rows. A patient who uses a screen reader may hear only the word edit, over and over, with no hint of which box asks for a name and which asks for an address. The labels are on the page, but the software has no way to tie each label to its box."
      ),
      p(
        "The worst version is a scan. When someone photographs or scans a paper form and saves it as a PDF, the file is one picture. There are no fields to fill in and no text to read, so a patient has to print it, write by hand and bring it in, which defeats the purpose of posting it."
      ),
      h2("What the W3C technique asks for"),
      p(
        "The W3C's technique for labeling PDF form controls says each interactive control needs a label that is programmatically associated with it, so assistive technology can identify it. A visible text label alone is not enough. In a PDF the programmatic label is the tooltip entry on the field."
      ),
      p(
        "The W3C notes that assistive technology may fall back to nearby text when a field has no tooltip, but it still recommends adding a tooltip to every field. It also points out that labels created in an authoring tool and then converted to PDF are often tied to the field only visually, so they need tooltips as well."
      ),
      h2("How the label is added"),
      p(
        "The W3C lists the steps in Adobe Acrobat Pro. Whoever prepares the file can follow them, or you can hand the list to your web company or your office software vendor."
      ),
      ol(
        "Open the file and select the Prepare Form tool.",
        "Right-click one field and open Properties.",
        "On the General tab, type a short description in the Tooltip box, such as Patient first name.",
        "Repeat for every field, including date, phone and checkbox fields.",
        "Save the file and open it again to confirm the tooltips are still there."
      ),
      p(
        "Make each tooltip match the printed label. If the page says Date of birth, the tooltip says Date of birth, not DOB field 3. For a format that matters, add it, as in Date of birth, month, day, year."
      ),
      h2("Test it before you post it"),
      p(
        "The W3C's own test has two parts. Look at the file to confirm each label sits in the right place next to its control, then confirm the name is associated with the control, either by opening the file in a tool that shows control names or by checking through an accessibility API. If you do not have such a tool, the practical version is to listen. Open the form with a screen reader and tab through it, as in our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills). Each field should announce its own question."
      ),
      table(
        ["What you post", "What a screen reader user gets"],
        ["Scan or photo of a paper form saved as a PDF", "One picture with no fields, nothing to read"],
        ["Fillable PDF with no tooltips", "Boxes announced as edit, with no question"],
        ["Fillable PDF with a tooltip on every field", "Each box announces its question"],
        ["Online form built with real labels", "The most dependable path for most patients"]
      ),
      h2("Always offer another way"),
      p(
        "Even a well-built PDF will not suit everyone. Some patients open it on a phone that cannot fill PDFs, and some prefer to talk. Put two other choices right beside the download link: an online form, and the office phone number as a tappable link, written the way our guide to [phone numbers and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) describes. A line such as Prefer not to download? Fill in the form online or call the office keeps the door open."
      ),
      p(
        "Keep the online version short and do not publish anything that exposes patient data, as covered in [publishing new patient forms online](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data). When a newer form replaces an old PDF, retire the old file so it stops showing in Google, using the steps in [retiring old PDF forms](/guides/retiring-old-pdf-forms-and-outdated-documents-still-indexed-on-a-medical-practice-website). This guide is a practical check, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Is a scanned paper form accessible?",
        a: "No. A scan is a single picture with no fields and no readable text, so a screen reader has nothing to announce. Rebuild the form as a fillable file with labeled fields, or move it to an online form, and keep a phone option beside it.",
      },
      {
        q: "What is a tooltip in a PDF form?",
        a: "It is a short description stored with each field. The W3C treats it as the programmatic label that assistive technology reads. Someone preparing the file with Acrobat Pro adds it under the field's General properties.",
      },
      {
        q: "Do I need both a PDF and an online form?",
        a: "Not always, but offering at least two ways in is wise. An online form with real labels works for most patients, and a phone number covers the rest. If you keep the PDF, label every field.",
      },
      {
        q: "How can I check the file without special software?",
        a: "Open it with a screen reader and press Tab through each field. Every box should announce its own question. If you hear only the word edit, the labels are missing and the file needs tooltips added.",
      },
      {
        q: "Who should fix the file?",
        a: "Whoever created it, or your web company. Give them the W3C technique page and the steps in this guide. Ask them to send you the finished file so you can run the tab-through test yourself.",
      },
    ],
    citations: [PDF10, WCAG_NRV],
    links: [
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "Publishing New Patient Forms Online", description: "Keep patient data off the page." },
      { href: "/guides/retiring-old-pdf-forms-and-outdated-documents-still-indexed-on-a-medical-practice-website", label: "Retiring Old PDF Forms", description: "Remove outdated files from Google." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2094
  {
    slug: "show-password-toggle-on-a-patient-portal-sign-in-with-a-clear-name-and-state-for-a-medical-practice-website",
    keyword: "a show-password toggle on a patient portal sign-in with a clear name and state",
    category: "Checklist",
    title: "A Show-Password Toggle on a Patient Portal Sign-In",
    metaTitle: "Show-Password Toggle on a Patient Portal Sign-In",
    metaDescription:
      "A show password button helps a patient on a phone check what they typed. How to name it, announce its state and test it. (561) 291-2681.",
    answer:
      "A show password button lets a patient check what they typed, which is hard on a phone. Give the button a plain name such as Show password, make sure a screen reader announces whether the password is now shown or hidden, and keep it reachable with the Tab key.",
    author: "Liam Costello",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("Why the little eye icon matters"),
      p(
        "A patient trying to reach lab results or send a message through your portal types a password into a field that shows only dots. On a phone, with small keys and autocorrect nearby, one slip locks them out and they call the office. A show password button solves that by letting them see what they typed before they press Sign in."
      ),
      p(
        "MDN's reference for the password field notes the same thing. Typed characters are hidden, usually replaced by a symbol, and some browsers show the last character briefly while others let the user switch plain text on and off. MDN says both approaches help people check what they typed, which can be particularly difficult on mobile devices."
      ),
      h2("Where these buttons go wrong"),
      p(
        "Most portals are built by a software vendor, so your control over the code is limited. You can still check what patients meet. The usual problems are small and easy to describe to the vendor."
      ),
      ul(
        "The button is only an eye picture, and a screen reader announces it as button with no name.",
        "The picture changes but nothing tells a screen reader user whether the password is now visible.",
        "The button cannot be reached with the Tab key, or it sits after the Sign in button.",
        "The button is so small that a thumb taps the wrong thing."
      ),
      h2("Give it a name and a state"),
      p(
        "The W3C's Name, Role, Value criterion says the name and role of each interface component must be programmatically determinable, and that custom toggles and similar controls should convey their current state and value through HTML and ARIA. A show password button is exactly that: a custom toggle with two states."
      ),
      table(
        ["What the button does", "What a screen reader should say"],
        ["Password hidden, button offers to reveal it", "Show password, toggle button, not pressed"],
        ["Password visible, button offers to hide it", "Show password, toggle button, pressed"],
        ["Eye icon with no text name", "Button, with nothing to say what it does"]
      ),
      p(
        "There are two accepted ways to build it. One keeps the same name, Show password, and changes the pressed state. The other swaps the name between Show password and Hide password. Either works if the announcement always matches what the button will do or what has happened. Do not mix them, because a button named Hide password that also announces pressed confuses people."
      ),
      h2("Keep the sign-in field friendly too"),
      p(
        "A toggle helps only if the field itself is set up well. MDN lists the autocomplete values for password fields: current-password lets a browser or password manager fill in the saved password, and new-password is for create-account and change-password forms. MDN also says the value off is often ignored because it harms safe password habits. Our guide to [portal sign-in that allows a password manager and paste](/guides/patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website) covers that side."
      ),
      h2("A five-minute test"),
      ol(
        "Open the sign-in page on your phone and tap the show password button. Confirm the text appears and the button's look changes.",
        "On a computer, press Tab until the focus ring lands on the button. It should be reachable and visible, as in our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills).",
        "Turn on a screen reader and move to the button. Listen for a name and, after pressing it, a changed state.",
        "Tap the button with your thumb while holding the phone in one hand. If you miss it, it is too small, so see the [tap target guide](/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page)."
      ),
      p(
        "If the portal belongs to a vendor, send them the table above and ask for the name and state to be fixed. Most vendors can change a label faster than a layout. This is a practical check, not legal advice, and no password or patient detail should ever be shared while testing."
      ),
    ],
    faqs: [
      {
        q: "Is a show password button safe for patients?",
        a: "It lets the patient see what they typed, so it helps most when they are alone, as on a personal phone. The patient chooses when to reveal it, and it hides again on request. The sign-in page must still load over a secure connection.",
      },
      {
        q: "Should the button say Show password or Hide password?",
        a: "Either works if you stay consistent. One approach keeps the name Show password and announces a pressed state. The other swaps the name each time. What fails is an icon with no name, because a screen reader user cannot tell what it does.",
      },
      {
        q: "Does a show password button replace a password manager?",
        a: "No. They solve different problems. The toggle checks typing, while a password manager fills the field. Set the field to current-password so managers can work, and offer the toggle for patients who type by hand.",
      },
      {
        q: "Who changes this if our portal belongs to a vendor?",
        a: "The vendor does. Send them the name and state table and ask for a date. Ask a second person to test it on a phone and with a screen reader after the change, so the fix is confirmed.",
      },
      {
        q: "Can I test this without special software?",
        a: "Yes. Tap the button on a phone and press Tab on a computer. Phones and computers include a built-in screen reader, so you can also listen for the name and the changed state with no download.",
      },
    ],
    citations: [MDN_PASSWORD, WCAG_NRV],
    links: [
      { href: "/guides/patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website", label: "Portal Sign-In With Password Manager and Paste", description: "Let the browser help the patient." },
      { href: "/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website", label: "Icon Buttons That Need a Spoken Name", description: "Give icons a text name." },
      KB,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2095
  {
    slug: "phone-number-field-that-accepts-spaces-dashes-and-parentheses-as-the-patient-types-them-on-a-practice-contact-form",
    keyword: "a phone number field that accepts spaces, dashes and parentheses as the patient types them",
    category: "Checklist",
    title: "A Phone Field That Accepts Spaces, Dashes and Parentheses",
    metaTitle: "Phone Field That Accepts Dashes and Parentheses",
    metaDescription:
      "A strict phone box that rejects (561) 555-0100 loses callers. How to set the field so patients type their number their own way. (561) 291-2681.",
    answer:
      "Let a patient type a phone number the way they write it, with spaces, dashes or parentheses. Use a telephone field, do not force one format, clean the number after the form is sent, and show a plain example under the label so nobody is rejected for punctuation.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("The number that gets bounced"),
      p(
        "A new patient types their number as (561) 555-0100 and the form answers with an error: please enter a valid phone number. They try again with dashes, then without anything, and by the third try some of them close the page. The number was correct every time. The form simply expected only one way of writing it."
      ),
      p(
        "This is a quiet leak on a contact or booking page. A patient who gave up never calls and never appears in your inquiry log. It is cheap to fix, because the cause is usually one setting in the form."
      ),
      h2("What MDN says about telephone fields"),
      p(
        "MDN's reference for the telephone input says the value is not automatically checked against any format, because telephone formats vary worldwide. The only built-in check is required, which marks an empty field as invalid. A pattern can be added to demand a specific shape, and MDN's own example accepts 865-555-6502 but rejects 41-323-421."
      ),
      p(
        "MDN also warns that a single validation rule for phone numbers is impractical. Requirements should be set per site, and a pattern such as three digits, three digits, four digits is useful only for certain locales. It adds that checking in the page is no substitute for checking on the server, since people can alter the page or send data directly."
      ),
      p(
        "The W3C's forms tutorial makes a matching point. Validation should accept different input formats, and it gives the example of a number-only field causing trouble for postal codes that contain letters. A phone number typed with spaces or parentheses is the same kind of case."
      ),
      h2("What to ask your web company to do"),
      ol(
        "Use the telephone field type, so phones can show a number keypad. MDN says mobile browsers may present a keypad optimized for phone numbers.",
        "Remove any pattern that allows only digits and dashes. If a pattern stays, it must allow spaces, parentheses, dashes and dots.",
        "Do not cut the field off at ten characters. A number written with punctuation is longer than ten.",
        "After the form is sent, strip the punctuation on the server and store clean digits, so your office list stays tidy.",
        "Show a plain example under the label, such as 561 555 0100, so patients know any style is welcome."
      ),
      table(
        ["How a patient types it", "What the form should do"],
        ["(561) 555-0100", "Accept it"],
        ["561-555-0100", "Accept it"],
        ["561 555 0100", "Accept it"],
        ["5615550100", "Accept it"],
        ["555-0100", "Ask for the area code, in words, and say why"]
      ),
      h2("When a number really is wrong"),
      p(
        "A form should still catch a number that cannot work, such as one with too few digits. Do it in words, naming the field and what is missing, as our guide to [form error messages](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details) explains. A good message says Please add your area code, not Invalid input. Keep the visible label above the box too, as in [visible labels above every field](/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears)."
      ),
      h3("Test it yourself"),
      p(
        "Open your contact form and type the same number five ways, using the table above. If any style is refused, send the list to whoever maintains the form. Then try it on a phone to confirm the number keypad appears. The related settings for names and addresses are in our guide to [autofill and phone keyboard settings](/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less). This is practical guidance, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Should a phone field allow only digits?",
        a: "No. Patients type spaces, dashes and parentheses out of habit. Accept them, then strip the punctuation after the form is sent. Rejecting a correct number because of punctuation costs you a person who was trying to reach you.",
      },
      {
        q: "Does a telephone field check the number?",
        a: "Not by default. MDN says phone formats vary worldwide, so the field only blocks an empty entry when it is marked required. Any format rule has to be added on purpose, and it should stay loose.",
      },
      {
        q: "Why check on the server as well?",
        a: "MDN notes that a check in the page is no substitute for a check on the server, since people can alter the page or send data directly. The server step also cleans the number for your records.",
      },
      {
        q: "What about patients outside the United States?",
        a: "A strict pattern that expects ten digits will reject them. Keep the rule loose or let the number through with a country code, and let the office confirm it when it calls back.",
      },
      {
        q: "Should I show an example number?",
        a: "Yes, a short one under the label, such as 561 555 0100, tells patients any style is welcome. Use a made-up sample, never a real patient's number, and keep it as visible text, not only placeholder text.",
      },
    ],
    citations: [MDN_TEL, WAI_VALID],
    links: [
      PHONE,
      { href: "/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less", label: "Autofill and Phone Keyboard Settings", description: "Let a new patient type less." },
      ERR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2097
  {
    slug: "checking-a-field-while-a-patient-types-versus-after-they-leave-it-on-a-practice-booking-or-contact-form",
    keyword: "inline error checking while a patient types versus after they leave the field",
    category: "Checklist",
    title: "Checking a Form Field While Typing or After Leaving It",
    metaTitle: "Check a Form Field While Typing or After Leaving",
    metaDescription:
      "An error that pops up on the first letter feels like scolding. When to check a field, how to say what is wrong, and how to test it. (561) 291-2681.",
    answer:
      "Check a field after the patient finishes it, not on the first letter. Say in plain text which field is wrong and what to change, keep the message beside the field, and check again on the Send button so nothing slips through.",
    author: "Liam Costello",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("The red message that shows up too soon"),
      p(
        "A patient starts typing an email address, and after one letter the form shouts that it is not a valid email. Of course it is not valid yet. They have not finished. Some patients ignore it, some feel scolded, and a screen reader may announce the error after every keystroke, which makes the field almost impossible to use."
      ),
      p(
        "The opposite habit has its own cost. If the form says nothing until the Send button is pressed, a patient on a phone may scroll back through a long page to find what went wrong. Both extremes lose people on a booking or contact form, where one abandoned form is one lost inquiry."
      ),
      h2("What the standards ask for"),
      p(
        "The W3C's criterion on error identification says that when an input error is detected automatically, the field in error must be identified and the error described to the user in text. Color can be added, but it cannot be the only signal. Its examples include a phone field with letters or parentheses and a birth date in the future."
      ),
      p(
        "The W3C's forms tutorial adds that validation helps users avoid mistakes, that required fields should be clearly identified with labels, and that users should be able to check and correct their answers where possible. It also notes that client-side validation alone does not ensure security, so the server must check as well."
      ),
      p(
        "Neither source tells you to check on every keystroke. The timing is a design choice, and the practical rule is to match it to how a patient fills the form."
      ),
      h2("A simple rule for timing"),
      table(
        ["Moment", "Use it for"],
        ["After the patient leaves the field", "Email, phone, date and any field with a format"],
        ["As they type, only after a fix", "Clearing an old error as soon as the entry is correct"],
        ["On the Send button", "A final check of every field, with a summary at the top"],
        ["On every keystroke", "Rarely. Only for helpful counts, such as characters left in a message box"]
      ),
      p(
        "The key idea is to show an error late and remove it early. Wait until the patient has moved on before saying something is wrong, but the moment they fix it, take the message away. That keeps the form calm and still quick."
      ),
      h2("Make the message do its job"),
      ul(
        "Name the field: The email address is missing an at sign.",
        "Say what to do, not only what is wrong: Add your area code to the phone number.",
        "Put the message directly beside or under the field, in text, not only in red.",
        "Avoid private details in the message and never repeat what the patient typed back in a way that exposes health information.",
        "Tell a screen reader user too. Our guide to [telling a screen reader user that a form was sent](/guides/telling-a-screen-reader-user-that-a-contact-form-was-sent-without-moving-the-page-on-a-primary-care-practice-website) shows how a message can be announced without moving the page."
      ),
      p(
        "More wording ideas are in our guide to [form error messages](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details)."
      ),
      h2("Test the timing yourself"),
      ol(
        "Open your booking form and type slowly into the email field. Watch whether an error appears before you finish.",
        "Enter a clearly wrong phone number, tab to the next field and note how the error is worded.",
        "Fix it and confirm the message disappears at once.",
        "Leave a required field empty, press Send and see whether you land on a summary of every problem.",
        "Repeat with a screen reader on, as in our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills)."
      ),
      p(
        "Pass the notes to your web company. If the form blocks Send until everything is correct, also read [a grayed-out submit button](/guides/submit-button-grayed-out-until-a-form-is-complete-on-a-practice-website-and-how-to-tell-the-patient-why). This is practical guidance, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Should I validate on every keystroke?",
        a: "Rarely. A message after the first letter of an email feels like scolding, and a screen reader may repeat it. Check a field once the patient leaves it, then clear the message the moment the entry is fixed.",
      },
      {
        q: "Is a red border enough to show an error?",
        a: "No. The W3C says the error must be described in text, and color may be added but cannot be the only signal. Add a short sentence beside the field that names the problem and what to change.",
      },
      {
        q: "Do I still need a check when the patient presses Send?",
        a: "Yes. A final check catches anything skipped, and the server must check too, because the W3C notes that client-side validation alone does not ensure security. Show a short summary of every problem near the top.",
      },
      {
        q: "What should the error message say?",
        a: "Name the field and the fix, such as Add your area code. Keep it free of health details, and place it beside the field. Plain wording helps patients who are nervous or in a hurry.",
      },
      {
        q: "How do I know the form is better after the change?",
        a: "Test it with the steps above, then watch your inquiry log. A form that accepts correct entries on the first try should show fewer half-finished submissions over the following weeks, though other factors also move that number.",
      },
    ],
    citations: [WCAG_ERR, WAI_VALID],
    links: [
      ERR,
      LABELS,
      { href: "/guides/submit-button-grayed-out-until-a-form-is-complete-on-a-practice-website-and-how-to-tell-the-patient-why", label: "A Grayed-Out Submit Button", description: "Tell the patient what is missing." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2126
  {
    slug: "tobacco-quitting-support-visit-page-for-a-primary-care-practice-that-points-to-the-free-state-quitline-without-clinical-claims",
    keyword: "a tobacco quitting support visit page for a primary care practice that points to the free state quitline",
    category: "How-to",
    title: "A Quit-Tobacco Support Page for a Primary Care Practice",
    metaTitle: "Quit-Tobacco Support Page for Primary Care",
    metaDescription:
      "How a primary care practice can describe quit-tobacco visits and point patients to the free state quitline, without health claims. (561) 291-2681.",
    answer:
      "A quit-tobacco page should say plainly that patients can book a visit to talk about quitting, and that 1-800-QUIT-NOW connects anyone to a free, confidential state quitline. Describe what happens at the visit, make no promises about results, and keep the booking button close.",
    author: "Liam Costello",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 6,
    sections: [
      h2("Why a practice would write this page"),
      p(
        "Patients who want to stop using tobacco often start by asking their regular doctor. A short page on your site tells them the question is welcome, how to book it and where free help exists. It also gives a primary care practice a clear answer for people who search for help quitting near them."
      ),
      p(
        "The page is about access, not treatment claims. You are telling patients that a conversation is available and showing them free resources, which keeps the wording simple and honest."
      ),
      h2("What the CDC says about quitlines"),
      p(
        "The CDC's page for clinicians describes quitlines as free, confidential, telephone-based cessation resources. Services include counseling, practical quit information, referrals to other cessation resources and self-help materials mailed to callers. Some quitlines also offer web and text support, and some state quitlines offer free cessation medications or vouchers and discounts."
      ),
      p(
        "It adds that quitlines operate in every U.S. state, the District of Columbia, Puerto Rico and Guam, and that calling 1-800-QUIT-NOW transfers a caller to their state quitline. Other nationwide numbers include 1-855-DEJELO-YA for Spanish. In most states any resident qualifies, though many states ask that callers want to quit within the next 30 days. Because programs differ by state, tell patients to ask the quitline about its own terms."
      ),
      h2("What the page should contain"),
      ol(
        "A first sentence that answers the question: Yes, you can book a visit with us to talk about quitting tobacco.",
        "A short description of the visit in plain words, such as a conversation about your goals and the support available, with no promise about results.",
        "The free quitline number, 1-800-QUIT-NOW, as a tappable link, with a note that it connects you to your state's program.",
        "Your own office phone number and booking button, written the same way on every page, as in our guide to [phone numbers and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website).",
        "A line that the visit can be combined with other care, with a link to your [preventive visit explainer](/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website) so patients understand how it is booked."
      ),
      h2("Two ways your office can refer"),
      p(
        "The CDC describes two options for clinicians. A provider can use the state's quitline referral system, in which the quitline calls the patient directly, and referrals can typically be sent by fax, email, web form or electronic health record. Or the provider can hand the patient the 1-800-QUIT-NOW number so the patient makes the first call. You do not need to describe your internal referral process on the page. What matters is that the front desk knows which one your office uses and can say so on the phone."
      ),
      table(
        ["Do say", "Do not say"],
        ["Book a visit to talk about quitting tobacco", "We will help you quit for good"],
        ["Free state quitlines are available at 1-800-QUIT-NOW", "Our program works better than a quitline"],
        ["Ask the quitline about the services in your state", "Free medicine is guaranteed"],
        ["Call the office if you have questions before booking", "Any numbers about success rates"]
      ),
      h2("Keep the tone kind"),
      p(
        "Patients who ask about quitting may have tried before. Avoid shaming words and avoid scare images. A sentence such as Many people try more than once, and we are glad to help you plan is warm without making a medical claim. If your practice also offers mental health referrals, link to your [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims), because some patients want support for stress as they quit."
      ),
      p(
        "Put the visit and the quitline in the same short section, and keep the whole page under a few hundred words of body text. Test the quitline link on a phone before you publish. This guide is practical suggestion, not medical or legal advice, and your clinicians decide what is said about care."
      ),
    ],
    faqs: [
      {
        q: "What is 1-800-QUIT-NOW?",
        a: "The CDC says calling it transfers the caller to their state quitline, a free and confidential telephone service. Services vary by state but commonly include counseling and referrals to other resources. Patients can call without a referral from your office.",
      },
      {
        q: "Can the page say the visit will help a patient quit?",
        a: "Avoid promising results. Describe what the visit is, a conversation about goals and available support, and point to free resources. Outcome claims belong to your clinicians in person, not on a marketing page.",
      },
      {
        q: "Should we list the free medicines some quitlines offer?",
        a: "Only in general terms. The CDC says some state quitlines offer free medications or vouchers, but programs differ. Tell patients to ask the quitline about services in their state rather than naming specific products or amounts.",
      },
      {
        q: "Do we need a Spanish number on the page?",
        a: "If your practice serves Spanish-speaking patients, yes. The CDC lists 1-855-DEJELO-YA as a nationwide Spanish line. Match your site's language settings and keep both numbers as tappable links.",
      },
      {
        q: "Where should this page link from?",
        a: "Link it from your services or preventive care page and from any page about visit types. Add one sentence in a related guide that explains when a patient might book this visit, and keep the phone number consistent.",
      },
    ],
    citations: [CDC_QUIT],
    links: [
      { href: "/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website", label: "Preventive Visit Versus Problem Visit", description: "Explain how each visit is booked." },
      BHREF,
      PHONE,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2127
  {
    slug: "group-visit-shared-medical-appointment-page-for-a-primary-care-practice-that-explains-how-a-group-visit-works-without-clinical-claims",
    keyword: "a group visit (shared medical appointment) page for a primary care practice that explains how a group visit works without clinical claims",
    category: "How-to",
    title: "A Group Visit Page for a Primary Care Practice",
    metaTitle: "Group Visit Page for a Primary Care Practice",
    metaDescription:
      "How to explain a shared medical appointment to patients: who it is for, what happens, privacy and booking, without health claims. (561) 291-2681.",
    answer:
      "A group visit page should explain, in plain words, that several patients meet together with a clinician, that joining is voluntary, and that each patient still gets individual attention. Say who the group is for, how privacy is handled, how long it lasts and how to sign up.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 6,
    sections: [
      h2("A visit type patients may not have heard of"),
      p(
        "Most patients picture a doctor's visit as one person in one room. A group visit, also called a shared medical appointment, is different, and a patient who sees the words on a flyer may feel unsure. Will others hear my problems? Do I still see the doctor myself? A short page on your site answers those questions before a patient has to ask."
      ),
      p(
        "If your practice runs or plans such a visit, the page also helps patients find it. Someone searching for a group visit near them is looking for exactly what you are offering."
      ),
      h2("What the AAFP says a group visit is"),
      p(
        "The American Academy of Family Physicians' policy describes a shared medical appointment as a visit in which multiple patients are seen as a group, often for follow-up care or chronic condition management. Participation is voluntary. Each visit includes an individual evaluation and management of each patient plus counseling with the group, and the individual part may happen separately or within the group."
      ),
      p(
        "The policy also says patients can get counseling from other team members, such as a behaviorist, nutritionist or health educator, and can share experiences and advice with one another. It says each patient's record should document the individual services and the group services provided. The AAFP calls group visits a proven, effective method for enhancing self-care and patient satisfaction. That is the AAFP's position. Your page does not need to repeat it, and should not promise any result of its own."
      ),
      h2("What the page should answer"),
      table(
        ["Patient question", "A plain answer on the page"],
        ["Is it required?", "No. Joining is voluntary, and patients can keep one-on-one visits."],
        ["Will I still see a clinician about me?", "Yes. Each patient receives an individual part of the visit."],
        ["Who else is there?", "Other patients and our team. Describe the group size you actually use."],
        ["Is it private?", "Explain your confidentiality steps and ask patients to respect each other's privacy."],
        ["How long does it take?", "Give the real session length and the number of sessions."],
        ["How do I join?", "Call the office or use the booking button."]
      ),
      h2("Privacy wording that stays honest"),
      p(
        "The AAFP policy does not spell out confidentiality, so write only what your own practice does. If patients sign a consent or confidentiality agreement before the first session, say so in one sentence. If they may choose to share only what they wish, say that. Do not name any condition a group is for in a way that identifies individuals, and never post photos of a session."
      ),
      h2("What not to claim"),
      ul(
        "No promised outcomes, fewer hospital visits, or better health numbers.",
        "No statements about cost or payment on the page. Billing is handled by your office, and rules vary by insurance.",
        "No names of patients, no quotes from past participants.",
        "No topic you do not actually offer. A page for a group that has not been scheduled helps nobody."
      ),
      h2("Where it fits on your site"),
      p(
        "Link the page from your visit types explainer, from your [chronic condition follow-up visits page](/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims) and from the program page described in our guide to [chronic care management](/guides/chronic-care-management-program-explained-on-a-primary-care-practice-website). Families who book together may find the [booking several family members](/guides/booking-several-family-members-in-one-visit-page-for-a-primary-care-practice) guide useful too."
      ),
      p(
        "Put the office phone number and one clear button for signing up near the top, and test both on a phone. Keep the visit description in short paragraphs, using headings that read like patient questions. This guide is practical suggestion, not clinical or legal advice, and your clinicians decide how a group visit is run."
      ),
    ],
    faqs: [
      {
        q: "What is a group visit?",
        a: "The AAFP describes a shared medical appointment as a visit where multiple patients are seen as a group, often for follow-up care or chronic condition management. Each patient also receives an individual evaluation, either separately or within the group.",
      },
      {
        q: "Is a group visit required?",
        a: "No. The AAFP policy says participation is voluntary. Your page should say that patients can keep their usual one-on-one visits and can ask the office any questions before deciding whether to join.",
      },
      {
        q: "Can the page say group visits improve health?",
        a: "Avoid it. The AAFP states its own position, but a practice page that promises results makes a clinical claim. Describe what happens and who the visit is for, and leave outcomes to the clinician in conversation.",
      },
      {
        q: "How should the page describe privacy?",
        a: "Write only what your practice really does, such as a consent signed before the first session. The AAFP policy does not specify confidentiality steps, so do not borrow wording that does not match your process.",
      },
      {
        q: "Should the page list a price or insurance details?",
        a: "No. Leave billing to the office and say patients can call with questions. Rules differ by insurance, and a page that guesses about payment can mislead patients and cause calls to the front desk.",
      },
    ],
    citations: [AAFP_SMA],
    links: [
      { href: "/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims", label: "Chronic Condition Follow-Up Visits Page", description: "Describe ongoing visits plainly." },
      { href: "/guides/chronic-care-management-program-explained-on-a-primary-care-practice-website", label: "Chronic Care Management Explained", description: "Explain the program on your site." },
      { href: "/guides/booking-several-family-members-in-one-visit-page-for-a-primary-care-practice", label: "Booking Several Family Members", description: "One call for the whole family." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2128
  {
    slug: "counseling-page-for-adjusting-to-a-long-term-health-condition-that-names-when-to-involve-the-patients-own-doctor-without-clinical-claims",
    keyword: "a counseling page for adjusting to a long-term health condition that names when to involve the patient's own doctor",
    category: "How-to",
    title: "Counseling Page for Adjusting to a Long-Term Condition",
    metaTitle: "Counseling Page for a Long-Term Health Condition",
    metaDescription:
      "How a counseling practice can write a page for people living with a long-term illness, without diagnosis or health claims. (561) 291-2681.",
    answer:
      "A counseling page for people living with a long-term health condition should describe support with the stress and changes that come with it, say that counseling works alongside the patient's own doctor, name 988 for crises, and avoid diagnosing or promising any health result.",
    author: "Liam Costello",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 6,
    sections: [
      h2("Who searches for this page"),
      p(
        "A person with a long-term condition often carries more than the symptoms. There are appointments, treatments, money worries and a changed picture of the future. Some look for a counselor who understands that. A page that speaks to them gently, and that does not pretend to treat the illness, gives them a reason to call."
      ),
      p(
        "The goal of the page is to show that your practice offers a place to talk about the stress and adjustment around a health condition. It is not a page about the condition itself."
      ),
      h2("What the NIMH says"),
      p(
        "The National Institute of Mental Health describes a chronic disease as one that lasts at least one year and requires ongoing medical attention, limits daily activities, or both. It lists diabetes, cancer, heart disease and pain among its examples. It says people with a chronic disease have a higher risk of depression, with possible triggers such as stress or other challenges from the illness."
      ),
      p(
        "It also says that if symptoms persist, a person should talk to a health care provider, and that a primary care provider can refer to a psychologist, psychiatrist or clinical social worker. For crisis support it names 988, by call, text or chat, and 911 for life-threatening situations. These points shape what your page should say, and they are better quoted by link than copied into your own claims."
      ),
      h2("A page outline that stays in your lane"),
      ol(
        "Open with the person, not the diagnosis: Living with a long-term health condition can change how you feel about daily life, and you do not have to carry that alone.",
        "Describe what counseling can be, such as a space to talk about stress, routines, relationships and worries, with no promise that a symptom will change.",
        "Say that counseling works alongside the patient's own doctor and does not replace medical care.",
        "Explain who the visit is for, how to book it and whether you offer telehealth.",
        "Close with a plain crisis line: If you are in crisis, call or text 988, or call 911 in an emergency."
      ),
      table(
        ["Write this", "Avoid this"],
        ["Counseling for the stress and changes that come with a long-term condition", "Treatment for diabetes, cancer or any illness"],
        ["We work alongside your own doctor", "We can reduce your symptoms"],
        ["Talk to your health care provider about how you are feeling", "You probably have depression"],
        ["Call or text 988 in a crisis", "No mention of a crisis option"]
      ),
      h2("Where the page should link"),
      p(
        "If your practice works with local primary care offices, link to your [referral page for doctors](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) so a physician's office can see how to send someone to you. Families often search too, so a link to [caregiver support counseling](/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims) is a natural next step. A patient whose stress is mostly about work may prefer the [workplace stress page](/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims)."
      ),
      h3("A caution on names of conditions"),
      p(
        "Naming a condition on the page can help people find it, but listing many diagnoses begins to sound like a medical service. Use one or two general examples taken from a public source such as the NIMH and avoid listing every illness. Never use patient stories."
      ),
      p(
        "Show your clinicians' credentials exactly as licensed and keep the phone number and booking button the same on every page. Test the 988 link and the booking button on a phone before you publish. This guide is practical suggestion, not clinical or legal advice."
      ),
    ],
    faqs: [
      {
        q: "Can the page say counseling treats the condition?",
        a: "No. Counseling does not treat a medical illness, and saying so is a clinical claim. Describe support with the stress and changes around the condition, and say it works alongside the patient's own doctor.",
      },
      {
        q: "Should we tell patients to talk to their doctor?",
        a: "Yes, gently. The NIMH advises that people with persistent symptoms talk to a health care provider and that a primary care provider can refer to a mental health professional. A line to that effect keeps your page safe and kind.",
      },
      {
        q: "Do we need to mention 988?",
        a: "Yes. The NIMH names 988 for crisis support by call, text or chat, and 911 for life-threatening situations. Put the line on the page in plain text and make the number tappable on phones.",
      },
      {
        q: "Can we list the conditions we support?",
        a: "Keep it short. Use a general phrase and one or two examples from a public source. A long list reads like a medical service and can imply expertise the page cannot prove.",
      },
      {
        q: "Is it fine to include a client story?",
        a: "No. Stories can identify people and imply results. Use plain descriptions of what a first visit is like, and let the clinician speak for themselves in their own words.",
      },
    ],
    citations: [NIMH_CHRONIC],
    links: [
      BHREF,
      { href: "/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Caregiver Support Counseling Page", description: "For families supporting someone ill." },
      { href: "/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims", label: "Workplace Stress Counseling Page", description: "Support for working professionals." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2129
  {
    slug: "second-attempt-follow-up-when-a-new-patient-inquiry-does-not-answer-the-callback-for-a-primary-care-practice",
    keyword: "second attempt follow-up when a new patient inquiry does not answer the callback",
    category: "Playbook",
    title: "Second Attempt Follow-Up When a New Patient Does Not Answer",
    metaTitle: "Second-Attempt Follow-Up for an Unanswered Inquiry",
    metaDescription:
      "A patient filled in your form, then missed your call. When to try again, what to say in a voicemail, and when to stop. (561) 291-2681.",
    answer:
      "When a new patient inquiry does not answer your callback, try once more the same day by a different method, leave a short voicemail with only the practice name and number, send a brief email, and stop after a set number of tries. Log every attempt.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T20:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 6,
    sections: [
      h2("The inquiry that goes quiet"),
      p(
        "A new patient fills in your contact form at lunchtime. The front desk calls back within the hour and gets voicemail. Then the day gets busy, and nobody tries again. The patient, meanwhile, assumed the call would come and may have booked elsewhere by evening. This gap is common and fixable, and it costs nothing but a written routine."
      ),
      p(
        "The Harvard Business Review article The Short Life of Online Sales Leads reports that most companies are not responding nearly fast enough. It studies businesses in general, not medical offices, so treat it as a reminder that speed matters, not as a number to promise anyone."
      ),
      h2("A second-attempt routine you can write on one page"),
      ol(
        "Log the inquiry the moment it arrives, with the date and time, using the fields in your [front desk call log](/guides/front-desk-new-patient-call-log-fields-for-a-primary-care-practice).",
        "Make the first call as soon as someone is free. If there is no answer, leave a short voicemail.",
        "Within a few hours, send a brief email or text only if the patient agreed to it on the form, as covered in [text message opt-in wording](/guides/text-message-opt-in-wording-on-web-forms-for-a-primary-care-practice).",
        "Try the phone again at a different time of day, because the patient may be at work during the first call.",
        "After your chosen number of attempts, stop and record that you stopped. Do not keep calling."
      ),
      table(
        ["Attempt and method", "Purpose"],
        ["1. Phone call, voicemail if no answer", "Reach the patient while the inquiry is fresh"],
        ["2. Email or opted-in text a few hours later", "Offer an easy way to reply or book online"],
        ["3. Phone call at a different time of day", "Catch someone who was at work"],
        ["Stop. Note the date and close the inquiry", "Respect the patient's silence"]
      ),
      h2("What a voicemail should and should not say"),
      p(
        "HHS says in its FAQ on leaving messages that the Privacy Rule does not prohibit leaving messages for patients on answering machines. HHS also advises limiting what is said, suggesting only the practice name and number and what is needed to confirm an appointment, or a request to call back. It adds that a message may be left with a family member who answers, using professional judgment about what to disclose, and that if a patient asks for confidential communications, the practice must accommodate a reasonable request."
      ),
      p(
        "Because a new inquiry is not yet a patient, the safest voicemail leaves out everything about why they contacted you. A script such as the following is enough: Hello, this is the front desk at your practice name calling for first name. Please call us back at your number. We are open until closing time."
      ),
      ul(
        "Do not mention a symptom, a condition or a service by name.",
        "Do not say the patient filled in a form about a specific problem.",
        "Do not leave messages with other people about the reason for the call.",
        "Say the phone number slowly, and repeat it once, as in our guide to [saying the number aloud in a voicemail](/guides/how-to-say-the-practice-phone-number-address-and-website-aloud-in-a-voicemail-or-recorded-message-so-patients-can-write-them-down)."
      ),
      h2("Make replying easy"),
      p(
        "The second attempt works best when the patient can answer without a phone call. Include a link to your booking page and the office number as a tappable link. If your form offered a choice of how to be reached, follow it. Our guide to a [callback request button](/guides/callback-request-button-versus-a-full-contact-form-for-a-counseling-practice-website-and-who-answers-it-within-one-business-day) shows how to set expectations on the form itself."
      ),
      p(
        "Review the log each week. Count inquiries, reached, booked and stopped. The comparison helps you see whether the routine is working, and the [inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) guide shows a simple layout. This guide is practical suggestion, not legal advice, and your compliance contact should approve final wording."
      ),
    ],
    faqs: [
      {
        q: "How many times should we try to reach a new inquiry?",
        a: "Choose a number and write it down, such as three attempts over two days by different methods. Then stop and note it. A fixed limit keeps the routine respectful and makes sure no inquiry is forgotten.",
      },
      {
        q: "Can we leave a voicemail?",
        a: "HHS says the Privacy Rule does not prohibit leaving messages on answering machines, and it suggests limiting content to the practice name and number or a request to call back. Leave out the reason for the inquiry.",
      },
      {
        q: "Can we text the patient?",
        a: "Only if they agreed to texts on your form. Keep the message short, with the practice name and a link to book or a number to call. Without clear permission, use a call or an email instead.",
      },
      {
        q: "How fast should the first call happen?",
        a: "As soon as someone can make it. The Harvard Business Review article says most companies respond too slowly, though it is not a study of medical offices. Set your own target and measure it in your inquiry log.",
      },
      {
        q: "What if the patient asks us to stop contacting them?",
        a: "Stop and record the request in the log. HHS notes that a practice must accommodate a reasonable request for confidential communications, and a plain request to stop is one to honor at once.",
      },
    ],
    citations: [HHS_198, HBR],
    links: [
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time Target and Inquiry Log", description: "Track every inquiry to a result." },
      { href: "/guides/missed-call-text-back-message-for-a-primary-care-practice", label: "Missed-Call Text-Back Message", description: "Reply to the call you could not take." },
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "New Patient Intake Phone Script", description: "What the front desk says." },
      LOC,
    ],
  },
];
