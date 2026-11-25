// -- Guides batch 53 - 2026-11-24 --
// Nine website how-to guides from the Command Center queue (rows 2057, 2058, 2060, 2061, 2062, 2063, 2064, 2065, 2066), built by
// the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide
// is built from sources fetched and read before writing: the W3C WCAG Understanding pages (use-of-color, labels-or-instructions,
// three-flashes-or-below-threshold, audio-control, name-role-value, on-input) and techniques G183 and F73 from the w3c/wcag
// repository, the W3C WAI Forms Tutorial pages (labels, instructions, grouping, multi-page) from the w3c/wai-tutorials repository,
// and the MDN reference pages for select, datalist and input type date. Plain practical guidance, no legal advice, no outcome
// promises, no patient details, no prices. Row 2059 (page title) was skipped as already covered by the live title tag and
// browser tab guides.

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
const WCAG_COLOR = W("Understanding Success Criterion 1.4.1: Use of Color", "use-of-color");
const WCAG_LABELS = W("Understanding Success Criterion 3.3.2: Labels or Instructions", "labels-or-instructions");
const WCAG_FLASH = W("Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold", "three-flashes-or-below-threshold");
const WCAG_AUDIO = W("Understanding Success Criterion 1.4.2: Audio Control", "audio-control");
const WCAG_NRV = W("Understanding Success Criterion 4.1.2: Name, Role, Value", "name-role-value");
const WCAG_ONINPUT = W("Understanding Success Criterion 3.2.2: On Input", "on-input");
const G183 = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Technique G183: Using a contrast ratio of at least 3:1 to distinguish inline text links from surrounding text",
  href: "https://www.w3.org/WAI/WCAG22/Techniques/general/G183",
};
const F73 = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Failure F73: Creating links that are not visually evident without color vision",
  href: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F73",
};
const WAI = (label: string, page: string) => ({
  publisher: "W3C Web Accessibility Initiative",
  label,
  href: `https://www.w3.org/WAI/tutorials/forms/${page}/`,
});
const WAI_LABELS = WAI("Forms Tutorial: Labeling Controls", "labels");
const WAI_INSTR = WAI("Forms Tutorial: Form Instructions", "instructions");
const WAI_GROUP = WAI("Forms Tutorial: Grouping Controls", "grouping");
const WAI_MULTI = WAI("Forms Tutorial: Multi-page Forms", "multi-page");
const MDN_SELECT = {
  publisher: "MDN Web Docs",
  label: "The HTML select element",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
};
const MDN_DATALIST = {
  publisher: "MDN Web Docs",
  label: "The HTML datalist element",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist",
};
const MDN_DATE = {
  publisher: "MDN Web Docs",
  label: "input type date",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const KB = { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." };
const ADA = { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." };
const SR = { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your contact page the way a patient does." };

export const guidesPartForty16: Guide[] = [
  // ---------------------------------------------------------------- 2057
  {
    slug: "links-inside-practice-page-text-that-stand-apart-by-more-than-color-for-patients-with-color-vision-difference",
    keyword: "links inside the body text of a practice page that stand apart by more than color so a visitor with color vision difference can find them",
    category: "Checklist",
    title: "Making Links in Practice Page Text Stand Out Beyond Color",
    metaTitle: "Links That Stand Apart by More Than Color",
    metaDescription:
      "If blue is the only sign that a word in a paragraph is a link, some patients cannot find it. A plain check and fix for a practice website. (561) 291-2681.",
    answer:
      "A link inside a paragraph should look different from the words around it in a way that does not depend on color alone. The simplest fix is an underline. The other route is a color that differs from the surrounding text in lightness by at least 3 to 1, which the W3C allows but also says is harder to see.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The link nobody can find"),
      p(
        "Many practice sites style the links in body paragraphs as a slightly different shade of blue or teal with no underline. To the designer on a bright monitor it looks clean. To a patient who sees color differently, or who is reading on a phone in sunlight, the paragraph looks like one block of gray text with no way to tell which words lead somewhere."
      ),
      p(
        "That matters most on the pages where a link is the next step: the paragraph that says you can request a visit, the sentence that points to the insurance page, the line that sends a new client to the intake form. If the link cannot be seen, the step is skipped."
      ),
      h2("What the W3C says"),
      p(
        "The Use of Color criterion says color must not be the only visual way to convey information, indicate an action or prompt a response. The W3C's failure example for links is blunt: removing the underline from a link in a sentence and leaving only a color difference is a failure, because links inside text are usually understood only from their own appearance."
      ),
      p(
        "The same failure page says a cue that shows only when the mouse hovers over the link or when the link receives keyboard focus still counts as a failure. A link that is a different color and also bold does not fail, because bold does not depend on color."
      ),
      h2("Three ways that pass, and one that does not"),
      table(
        ["How the link looks in a paragraph", "Does it stand apart without color?"],
        ["Underlined, any color", "Yes, the underline carries the meaning"],
        ["Different color and bold", "Yes, bold is not a color cue"],
        ["Different color only, with 3 to 1 lightness difference from the nearby text", "Passes the technique, but the W3C suggests also adding an underline or bold"],
        ["Different color only, similar lightness to the nearby text", "No"],
        ["Underline appears only when the mouse hovers or the link has focus", "No"]
      ),
      p(
        "The lightness rule comes from the W3C technique for inline text links. It measures the contrast between the link color and the plain text around it, which is a different number from the contrast of either one against the page background. Both numbers have to work: the link still needs the usual text contrast against the background, as our guide to [checking text and background color contrast](/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes) explains."
      ),
      h2("What to leave alone"),
      p(
        "Menus, buttons and footer link lists are understood from their position and design, so they do not need underlines. The W3C also says that a visited link color change is not the author's responsibility, so you do not have to engineer a second cue for visited links. The rule is about links sitting inside sentences."
      ),
      h2("A five-minute check"),
      ol(
        "Open a long page, such as a guide or a service page, on your phone.",
        "Turn on the grayscale or color filter in your phone's accessibility settings, or take a screenshot and convert it to black and white.",
        "Read one paragraph and point to every link without touching the screen.",
        "If you missed any, the links depend on color. Ask your web designer to underline links inside paragraphs.",
        "Tab through the page with a keyboard and confirm the same links are still visible while focused, using the steps in our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills)."
      ),
      h3("Send this to your designer"),
      p(
        "Links inside paragraphs and list items should be underlined all the time, not only on hover. Navigation and buttons can stay as designed. After the change, check that the link words still say where they lead, as covered in our guide to [descriptive link text](/guides/descriptive-link-text-instead-of-click-here-on-a-primary-care-practice-website-checked-in-five-minutes). We do not give legal advice, and underlining links does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does every link need an underline?",
        a: "Only links inside running text need a cue other than color. Menus, buttons and footer lists are recognized from where they sit. If a link sits inside a sentence and nothing but its shade sets it apart, add the underline.",
      },
      {
        q: "Is bold enough instead of an underline?",
        a: "The W3C failure page says a link that is a different color and also bold does not fail. Bold can look like emphasis, though, so patients may not guess it is a link. An underline is the more familiar signal.",
      },
      {
        q: "What does 3 to 1 mean here?",
        a: "It is the lightness difference between the link text and the plain text beside it. A mid blue next to black text can pass, while two mid tones next to each other usually do not. A free contrast checker will measure the two colors you name.",
      },
      {
        q: "Does this apply to visited links?",
        a: "No. The W3C explains that browsers limit what a page can know about visited links, so a color-only change between visited and unvisited links is not a failure. Your link text still has to meet the usual contrast against the page background.",
      },
      {
        q: "Will underlined links hurt the design?",
        a: "A thin, offset underline in the link color looks tidy on most practice sites. Many designers keep links underlined in body text and remove the underline in the menu. A test on your phone will tell you whether your own pages read well.",
      },
    ],
    citations: [WCAG_COLOR, G183, F73],
    links: [
      { href: "/guides/descriptive-link-text-instead-of-click-here-on-a-primary-care-practice-website-checked-in-five-minutes", label: "Descriptive Link Text", description: "Say where each link leads." },
      { href: "/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes", label: "Checking Color Contrast", description: "A ten-minute contrast check." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2058
  {
    slug: "visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears",
    keyword: "visible labels above every field on a contact form so a patient is not left guessing once a placeholder disappears",
    category: "Checklist",
    title: "Visible Labels Above Every Field on a Practice Contact Form",
    metaTitle: "Visible Form Labels Instead of Placeholder Text",
    metaDescription:
      "Placeholder text vanishes when a patient starts typing. Put a visible label above each field. A short check for a practice contact form. (561) 291-2681.",
    answer:
      "Give every field on a contact or booking form a visible label that stays on screen while the patient types. Placeholder text disappears as soon as typing starts, is often pale, and is not treated as a label by assistive technology, so use it only for a short example, never as the question itself.",
    author: "Liam Costello",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The form that forgets its own questions"),
      p(
        "A common contact form shows four gray boxes with the words Name, Phone, Email and Message printed inside them. It looks tidy. The moment a patient clicks into the second box and starts typing, the word Phone is gone. If they are interrupted, or glance back to check what they entered, nothing on screen says what the box is for."
      ),
      p(
        "The people most likely to be caught out are the ones a practice most wants to reach: someone typing slowly on a phone, an older patient, a person who is anxious about making the first call and is working up to it. A form that makes them guess is a small barrier in exactly the wrong place."
      ),
      h2("What the W3C says about labels"),
      p(
        "The Labels or Instructions criterion says users must be told what information to enter. It applies to every field, not only required ones, and the W3C stresses that labels need to be persistently available. The best way, it says, is usually to keep them visually persistent as part of the page."
      ),
      p(
        "The W3C Forms Tutorial is direct about placeholder text. It is shown inside a field that has not been edited and disappears when the user starts to type. It is usually lower in contrast, and the tutorial states that placeholder text is not a replacement for labels, because assistive technologies do not treat it as one."
      ),
      table(
        ["How the field is labeled", "Works for patients?"],
        ["A visible label above the box, tied to it in the page code", "Yes"],
        ["A visible label above the box and a short example inside", "Yes, if the label stays put"],
        ["Placeholder text only", "No, it vanishes and is not a real label"],
        ["Label hidden from view but present in the code", "Only for a field whose purpose is obvious, such as a search box"],
        ["Tooltip on hover only", "No, touch screens have no hover"]
      ),
      h2("What a good label does"),
      ul(
        "It names the field in plain words: Phone number, not Contact.",
        "It sits above or beside the box and stays there while typing.",
        "It is tied to its box in the code, so tapping the label puts the cursor in the field, a larger target than the box alone.",
        "It carries any format hint a patient needs, such as the phone number with area code, as covered by the W3C instructions page, which allows instructions inside the label.",
        "It says whether the field is optional or required, using the method in our guide to [required fields marked with more than red](/guides/required-fields-on-the-contact-form-of-a-counseling-practice-website-marked-with-more-than-a-red-color)."
      ),
      h3("Where a placeholder still helps"),
      p(
        "A short example, such as a sample phone format, can sit inside the box if the label above already names the field. The W3C tutorial also warns that disappearing instructions make it harder to check answers before sending, so keep anything essential in the label or in a line above the form."
      ),
      h2("A three-minute test"),
      ol(
        "Open your contact form on a phone and type one letter in every box.",
        "Look at the screen. Can you still tell what each box is for without scrolling up or guessing?",
        "Tap each label. The cursor should jump into the matching box.",
        "Run the [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills) on the same form and listen for the label before each field."
      ),
      p(
        "Labels are the first half of a form that works. The second half is what happens after a mistake, covered in our guide to [form error messages](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details). We do not give legal advice, and adding labels does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Can I keep the floating label style that moves above the box?",
        a: "Often yes, as long as the label stays visible after typing starts and is tied to the box in the code. Test it by typing one letter and checking the screen, then run a screen reader over it. If the label shrinks to a tiny pale size, make it larger.",
      },
      {
        q: "Is a hidden label ever fine?",
        a: "The W3C tutorial allows a label that is hidden from view but present in the code when the purpose is obvious from context, with a search box beside a Search button as its example. For a contact form with several fields, show every label.",
      },
      {
        q: "Does a label have to be above the box?",
        a: "No. Above is simplest on a phone because it leaves room for long answers. Beside the box works on a wide screen. What matters is that it stays visible and is connected to its field.",
      },
      {
        q: "Does a placeholder count as an instruction?",
        a: "It can carry a short example, but not an instruction a patient must still see after typing. The W3C tutorial notes that disappearing instructions make it harder to review answers before submitting.",
      },
      {
        q: "How do I know the label is tied to the field?",
        a: "Tap the label on a phone or click it on a computer. If the cursor lands in the matching box, the connection exists. A screen reader announcing the label as you reach the box is the second confirmation.",
      },
    ],
    citations: [WCAG_LABELS, WAI_LABELS, WAI_INSTR],
    links: [
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Forms for low-vision patients." },
      { href: "/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details", label: "Form Error Messages", description: "Say what went wrong in words." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2060
  {
    slug: "grouping-radio-buttons-and-checkboxes-under-one-question-on-an-intake-form-so-a-screen-reader-reads-the-question-with-each-choice",
    keyword: "grouping radio buttons and checkboxes under one question on an intake form so a screen reader reads the question with each choice",
    category: "How-to",
    title: "Grouping Radio Buttons and Checkboxes Under One Question",
    metaTitle: "Group Radio Buttons and Checkboxes on a Form",
    metaDescription:
      "A screen reader that only hears Phone, Text, Email does not know what is being asked. Group choices under one question. A plain guide. (561) 291-2681.",
    answer:
      "Wrap each set of radio buttons or checkboxes in a group whose question is coded as its legend. A screen reader then announces the question together with each choice, so a patient hears How should we contact you, then Phone, instead of a list of unexplained words.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("A choice with no question"),
      p(
        "Picture a booking form that asks how a patient would like to be reached. Visually, a sentence sits above three round buttons: Phone, Text message, Email. A sighted patient reads the sentence, then the choices, and understands."
      ),
      p(
        "A patient using a screen reader moves from control to control. If the sentence is only a paragraph above the buttons and is not connected to them, the screen reader announces Phone, radio button, one of three, then Text message, then Email. The question never comes up. The patient has to go back and hunt for it."
      ),
      h2("What the W3C recommends"),
      p(
        "The W3C Forms Tutorial says grouping related controls makes forms more understandable for everyone, and that grouping needs to be done both visually and in the page code. Its method is a fieldset, which is the container, and a legend, which is the question that acts as the group's heading. It says radio button sets should always be grouped this way."
      ),
      p(
        "The Labels or Instructions criterion adds the reason: each choice needs its own label, and when the choice labels do not explain what is being asked, an overall label, legend or instruction is needed. Phone, Text and Email alone do not tell a patient what they are choosing."
      ),
      table(
        ["Form element", "What the group needs"],
        ["How should we reach you? Phone, Text, Email", "A group with that question as its legend"],
        ["Which days work for a first visit? Mon, Tue, Wed and so on, as checkboxes", "A group with the question as its legend"],
        ["Mailing address fields and billing address fields with identical labels", "Two groups, so Street in one is told apart from Street in the other"],
        ["A single checkbox such as I agree to receive text reminders", "No group, because its own label is the whole question"]
      ),
      h2("Keep the legend short"),
      p(
        "The tutorial gives a practical warning. Depending on settings, some screen readers read the legend with every control in the group, some read it once, and rarely some skip it. Its two suggestions are to keep the legend as short as possible, and to make each choice label clear enough to stand alone without repeating the legend in every label."
      ),
      ul(
        "Good legend: Best way to reach you",
        "Too long: Please choose the way you would prefer our front desk staff to contact you about your visit request",
        "Good choice labels: Phone call, Text message, Email",
        "Too repetitive: Contact me by phone call, Contact me by text message"
      ),
      h3("Keep health details out of the choices"),
      p(
        "Choose group questions that are about logistics, such as contact method, preferred days or language, and never about conditions or symptoms. Our guide to [online appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) lists what to leave out of a first form."
      ),
      h2("How to check your own form"),
      ol(
        "Find every set of radio buttons or checkboxes on your contact, booking and intake forms.",
        "Open the page with a screen reader on, following our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills).",
        "Tab to the first choice in a set and listen. If you hear the question, the group works.",
        "If you only hear the choice, send your designer one line: put each set of radio buttons and checkboxes in a fieldset with a legend.",
        "Check again after the change, and test the text-opt-in box from our guide to [text message opt-in wording](/guides/text-message-opt-in-wording-on-web-forms-for-a-primary-care-practice) as a single checkbox, which needs no group."
      ),
      p(
        "The W3C also notes a code-based alternative, a group role with a reference to the question, for designs that a fieldset cannot style the way the designer wants. We do not give legal advice, and grouping controls does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "What is a legend in plain words?",
        a: "It is the question or heading that belongs to a set of choices, written so that assistive technology can read it with them. On screen it often looks like a normal heading above the radio buttons. Under the surface it is tied to every button in the set.",
      },
      {
        q: "Do dropdown menus need a group?",
        a: "A dropdown is one control, so it needs its own label rather than a group. The W3C tutorial does show a way to group options inside a dropdown with option group headings, which helps on long lists.",
      },
      {
        q: "Is a single checkbox a group?",
        a: "No. A lone checkbox, such as agreeing to text reminders, is understood from its own label. Groups are for two or more related choices that answer one question.",
      },
      {
        q: "Will grouping change how my form looks?",
        a: "Browsers draw a border around a fieldset by default, but a designer can remove it or restyle it. The grouping lives in the code, so the page can look the same as before.",
      },
      {
        q: "What if my form builder has no group option?",
        a: "Ask whether it can add a heading or description to a set of choices that is connected to them. If it cannot, a plain text question above the buttons is better than nothing, but the screen reader test will show whether patients hear it.",
      },
    ],
    citations: [WAI_GROUP, WCAG_LABELS],
    links: [
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "What to ask and what to leave out." },
      { href: "/guides/preferred-name-and-pronoun-fields-on-intake-forms-for-a-counseling-practice", label: "Preferred Name Fields", description: "Intake fields that respect clients." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2061
  {
    slug: "a-date-field-on-a-booking-form-that-accepts-typing-as-well-as-a-calendar-pop-up-on-a-primary-care-practice-website",
    keyword: "a date field on a booking form that accepts typing as well as a calendar pop-up",
    category: "How-to",
    title: "A Booking Form Date Field That Allows Typing and a Calendar",
    metaTitle: "Booking Form Date Field: Typing and Calendar",
    metaDescription:
      "A calendar pop-up alone can frustrate patients on phones, keyboards or screen readers. How to offer a typed date with a clear format. (561) 291-2681.",
    answer:
      "Let a patient type a date as well as pick one, and show the expected format right in the label, such as month, day, year. Use a native date field where possible, confirm it works on your own phone, and never make the date the only way to ask for a visit.",
    author: "Liam Costello",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("When the pop-up is the problem"),
      p(
        "Date pickers look helpful: a small calendar opens, the patient taps a day, done. For many people that is fine. For others it is slow or confusing. A patient with a keyboard and no mouse may find the grid hard to move through. A patient on a small phone may tap the wrong day. A custom picker built from scratch may not be announced at all by a screen reader."
      ),
      p(
        "A form that asks for a preferred first visit date is asking something a person often already knows: next Tuesday, the 15th. Typing that is quicker than opening a calendar and finding the month."
      ),
      h2("What the sources say"),
      p(
        "The W3C Labels or Instructions page gives an example that fits exactly: a single form field for entering a date has text instructions that state the expected format, such as month, day, year. The W3C Forms Tutorial adds that instructions can sit inside the label, so a patient sees Preferred date (MM/DD/YYYY) and knows what to type."
      ),
      p(
        "MDN's reference for the native date input explains that the appearance of its picker depends on the browser and the operating system, and that the value sent to the form is normalized to year, month, day no matter how it was shown. It also says the control generally does not let a person enter something that is not a date, and that minimum and maximum dates can be set so impossible days are disabled."
      ),
      table(
        ["Way of asking for a date", "What to watch"],
        ["Native date field, with a label that names the format", "Test it on your own phone and on a computer, since it looks different on each"],
        ["Plain text box, label shows the format, example in the label", "Patient can type freely, so tell them what format you expect"],
        ["Custom calendar widget from a plugin", "Confirm a person can use it with a keyboard and a screen reader before choosing it"],
        ["Three separate boxes for month, day and year", "Each needs its own label, grouped under one question"]
      ),
      h2("Make the date optional when you can"),
      p(
        "For a first request, many practices do better to ask for a preferred day or time of week and let staff confirm the actual slot. Our guide to [appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) explains why a short request form beats a full scheduler. If you do ask for a date, give the patient a way around it, such as a checkbox for any weekday or a line for notes."
      ),
      h3("Say what is not available"),
      p(
        "If the practice never sees patients on weekends, say so in a line above the field rather than only graying out days in a picker. A patient who cannot see why a date is disabled may think the form is broken. A short note in the label, such as Monday to Friday, solves it."
      ),
      h2("A five-minute test"),
      ol(
        "Open the booking form on your phone and tap the date field. Note whether you can type, pick, or both.",
        "Type a date in the format you expect. Try a different format on purpose, and see what the form does.",
        "On a computer, use only the Tab key to reach the field and enter a date without the mouse. Our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills) shows the steps.",
        "If the date is wrong, read the message. It should say what to fix in plain words, as described in our guide to [form error messages](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details)."
      ),
      p(
        "We do not give legal advice, and allowing a typed date does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Should I use the browser's built-in date field?",
        a: "It is a good starting point because the browser supplies a picker and keeps the format consistent. MDN notes that its look varies by browser and operating system, so test it on the devices your patients use before relying on it.",
      },
      {
        q: "Where should the format hint go?",
        a: "In the label or directly under it, so it is read with the field. The W3C tutorial allows instructions inside the label, such as the format in brackets, and notes that instructions kept outside the label are easier to miss.",
      },
      {
        q: "Do I need a date field at all?",
        a: "Often not for a first contact. Asking for a preferred day of the week and letting staff pick the slot keeps the form short. Add a date only when your scheduling really needs it.",
      },
      {
        q: "What about a date of birth?",
        a: "Ask for it only when the practice truly needs it at that step, and keep it out of tracking tools. If you do ask, a typed field is usually quicker than scrolling a calendar back through many years, which you can confirm by trying it yourself.",
      },
      {
        q: "How should the form respond to a wrong date?",
        a: "With words beside the field that say what is expected, such as use month, day, year. A red outline alone is not enough, as our guide to marking required fields with more than red explains.",
      },
    ],
    citations: [WCAG_LABELS, WAI_INSTR, MDN_DATE],
    links: [
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "What to ask and what to leave out." },
      { href: "/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice", label: "Cancellation List and Same-Day Openings", description: "Fill openings without a scheduler." },
      KB,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2062
  {
    slug: "a-progress-indicator-on-a-multi-step-new-patient-form-so-a-patient-knows-how-many-steps-remain-on-a-counseling-practice-website",
    keyword: "a progress indicator on a multi-step new patient form so a patient knows how many steps remain",
    category: "How-to",
    title: "A Progress Indicator on a Multi-Step New Patient Form",
    metaTitle: "Progress Indicator for a Multi-Step Patient Form",
    metaDescription:
      "A form split into steps should say how many steps there are and where the patient is. Four ways to show it. A plain guide for practices. (561) 291-2681.",
    answer:
      "If a new patient form runs over several screens, say how many steps there are at the start and show the current step on every screen, in the page title, the main heading or a step list. Patients, and especially anxious or low-vision ones, finish more readily when they can see the end.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The form with no visible end"),
      p(
        "A new client form that goes from Your details to Your insurance to Your preferences to Review looks reasonable to the person who built it. To the person filling it in on a phone, each screen is a surprise. They do not know whether there are two more screens or ten, so some stop at the second one."
      ),
      p(
        "A short sentence at the top, saying step 2 of 4, removes most of that doubt. It costs a practice nothing and it helps everyone, not only people who use assistive technology. Each step of such a form should also check its fields at a calm moment, which our guide to [checking a field while typing or after leaving it](/guides/checking-a-field-while-a-patient-types-versus-after-they-leave-it-on-a-practice-booking-or-contact-form) walks through."
      ),
      h2("What the W3C tutorial recommends"),
      p(
        "The W3C Forms Tutorial says to divide long forms into smaller steps where possible, because it makes forms less daunting for people who are less experienced with computers or who have cognitive disabilities. It also gives four principles for multi-step forms: repeat the overall instructions on every page, split the form into logical groups, make optional stages easy to recognize and skip, and avoid a time limit if possible."
      ),
      p(
        "On progress, the first step should explain how many steps follow, and each step should tell the user how far along they are. The tutorial names three ways: the page title, the main heading and the HTML progress element. It adds a fourth, a step-by-step indicator, for forms with a known number of steps."
      ),
      table(
        ["Where progress is shown", "Why it helps"],
        ["Browser page title, such as Step 2 of 4 first", "Screen reader users hear it first, and it appears on the tab"],
        ["Main heading, such as Insurance (Step 2 of 4)", "People scanning the page see it right away"],
        ["Progress bar", "Useful when the number of steps depends on answers; confirm it does not animate on its own"],
        ["Numbered step list with the current step marked", "Shows the full path, and can link back to completed steps"]
      ),
      h2("Details the tutorial flags"),
      ul(
        "Put the progress words at the front of the page title, before the step name, so they are heard first.",
        "If you use a list of steps, mark the current and completed steps in text as well as with color, as our guide to [marking required fields beyond red](/guides/required-fields-on-the-contact-form-of-a-counseling-practice-website-marked-with-more-than-a-red-color) explains for another case.",
        "Link back to completed steps if you can, and keep data already entered in the current step when the patient goes back.",
        "Check that a progress bar does not animate by itself, because the tutorial notes some operating systems animate it and an automatic animation needs a way to be stopped."
      ),
      h3("Keep the steps few"),
      p(
        "Progress words do not make a long form short. Before splitting a form, remove questions the front desk does not need yet. Our guides to [intake paperwork sent before the first session](/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice) and the [new patient packet](/guides/new-patient-packet-and-what-to-expect-in-the-mail-page-for-a-primary-care-practice) show how to move long paperwork to a later moment."
      ),
      h2("A five-minute check"),
      ol(
        "Open the first screen of your longest form on a phone. Does it say how many steps there are?",
        "Move to step two. Does the heading or tab name say where you are?",
        "Go back one step. Is what you typed still there?",
        "Leave the form open for a few minutes. If it times out, read our guide on [session timeouts](/guides/session-timeout-and-expiring-booking-page-on-a-counseling-practice-website-so-a-slow-typist-does-not-lose-the-form).",
        "Offer a phone option on the first screen for anyone who would rather not use the form, as in our guide on [paper forms and phone registration](/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice)."
      ),
      p(
        "We do not give legal advice, and adding step counts does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "How many steps is too many?",
        a: "The tutorial does not give a number, only that smaller logical steps are easier than one long form. If a form needs more than a handful of screens, check whether every question is needed at this stage.",
      },
      {
        q: "Should I show a percentage bar?",
        a: "A step count is clearer than a percentage for a fixed form, because step 2 of 4 means something a person can picture. A bar suits forms whose length depends on answers, the case the tutorial gives for the progress element.",
      },
      {
        q: "Is it fine to let patients skip optional steps?",
        a: "Yes. The tutorial recommends making optional stages easy to recognize and skip. Mark them in the heading and give a plain Skip this step link.",
      },
      {
        q: "Do I need to repeat instructions on each screen?",
        a: "The tutorial says to repeat the overall instructions on every page of a multi-step form. A single line such as fields marked required must be completed is enough.",
      },
      {
        q: "Does a progress indicator help my number of completed forms?",
        a: "We have not measured that on practice sites. What we can say is that it removes a source of doubt for the patient. Watch your own count of started and finished forms over a month after you add it.",
      },
    ],
    citations: [WAI_MULTI],
    links: [
      { href: "/guides/session-timeout-and-expiring-booking-page-on-a-counseling-practice-website-so-a-slow-typist-does-not-lose-the-form", label: "Session Timeouts", description: "Do not lose a slow typist's form." },
      { href: "/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice", label: "Paper Forms and Phone Registration", description: "A way around the online form." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2063
  {
    slug: "flashing-or-strobing-effects-in-a-welcome-video-or-animated-banner-on-a-practice-page-and-the-three-flashes-rule",
    keyword: "flashing or strobing effects in a welcome video or animated banner on a practice page and the three-flashes rule",
    category: "Checklist",
    title: "Flashing Effects in a Practice Welcome Video or Banner",
    metaTitle: "Flashing Effects on a Practice Page: Three-Flash Rule",
    metaDescription:
      "A welcome video or animated banner can flash fast enough to be a problem for some visitors. The W3C three-flashes rule in plain words. (561) 291-2681.",
    answer:
      "Keep welcome videos, animated banners and looping graphics on a practice page free of rapid flashing. The W3C limit is no more than three flashes in any one second, unless the flash is small or dim enough to fall under its thresholds. The safest plan is to have none at all.",
    author: "Liam Costello",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("Why a practice page should care"),
      p(
        "A practice that adds a welcome video or an animated banner usually wants the page to feel alive. A stock clip from a template, a looping graphic with a burst of light at the start, a quick-cut montage: any of these can include flashing nobody noticed when choosing it."
      ),
      p(
        "The W3C says why this matters. Flashing content can cause migraines, dizziness, nausea and seizures, and people with photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies. People are even more sensitive to red flashing than to other colors."
      ),
      h2("What the three-flashes rule says"),
      p(
        "The criterion asks that pages do not contain anything that flashes more than three times in any one second, or that the flash is below the general flash and red flash thresholds. The W3C's explanation of its thresholds is detailed, but the practical reading is short: a flash is a rapid pair of opposing changes in brightness, and it is only allowed in small or low-contrast amounts."
      ),
      p(
        "The W3C defines the area side of the threshold as a block of 341 by 256 CSS pixels, a size that scales across devices because a given picture takes up about the same share of a person's vision on a phone or a large screen. It also says content should be checked at the largest size a visitor might see it, such as a video played full screen, and that a looping clip, such as an animated image, should be analyzed while it loops."
      ),
      table(
        ["Content on a practice page", "What to ask"],
        ["Welcome video from a stock library", "Does any scene have strobe, camera flash or rapid light bursts?"],
        ["Looping animated banner or GIF", "Does the loop point flash when it restarts?"],
        ["Fast slideshow of staff photos", "Does it switch between very light and very dark pictures several times a second?"],
        ["Cookie or promo banner that pulses", "Does it blink on and off quickly?"],
        ["Button hover effect", "Does it flicker rather than fade?"]
      ),
      h2("Blinking is not the same as flashing"),
      p(
        "The W3C separates the two. Blinking is a distraction problem and may be allowed for a short time if it can be stopped, while flashing is a seizure risk that is not allowed even for a second. The page adds that turning flashing off is not enough as a fix, since a seizure can come faster than most visitors could react. A pause button does not solve it."
      ),
      h3("What to do in practice"),
      ul(
        "Choose calm media. Avoid strobe, rapid cuts and bursts of light in clips and loops.",
        "Ask any video or banner vendor in writing whether the work contains flashing more than three times in a second.",
        "Look at every clip yourself, full screen, all the way through, including the first and last seconds of a loop.",
        "Keep motion that is not flashing, such as scrolling effects, controllable, as in our guides to [pausing carousels and autoplay video](/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website) and [parallax and scroll animation](/guides/parallax-and-scroll-animation-on-the-home-page-of-a-primary-care-practice-that-a-motion-sensitive-patient-can-turn-off).",
        "If you cannot tell, remove the clip. A page does not need it."
      ),
      h2("A ten-minute review"),
      ol(
        "List every video, animated image and moving banner on your site, including ones from templates.",
        "Play each one at full screen. Watch for sudden bright and dark alternation.",
        "Record the answer for each in your page inventory, using the layout in our guide to a [page inventory spreadsheet](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for).",
        "Remove or replace anything doubtful, then re-check on a phone."
      ),
      p(
        "This guide reports what the W3C states and is not a medical or legal opinion. We do not give legal advice, and a review of this kind does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is a slow fade a flash?",
        a: "Not by the W3C description, which counts rapid pairs of opposing brightness changes. A gradual fade between pictures is not that. A fast on and off alternation between very light and very dark is the pattern to avoid.",
      },
      {
        q: "Does a pause button make a flashing clip acceptable?",
        a: "No. The W3C explains that a seizure can occur faster than most visitors could turn the content off, so the content itself must stay under the thresholds.",
      },
      {
        q: "My video came from a stock library. Is it safe?",
        a: "Do not assume so. Watch it in full at full screen and ask the seller whether it contains flashing. A stock clip made for another purpose may include camera flashes or strobe effects.",
      },
      {
        q: "Does this apply to a GIF in an email newsletter?",
        a: "The criterion is written for web content, but the same care is sensible for any animated image you send to patients. Review loops before using them.",
      },
      {
        q: "Is a removed clip a loss to my page?",
        a: "Usually not. A plain photograph and a clear sentence with the phone number serve a first-time visitor well, and our guide to [what a new patient sees in the first five seconds](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page) covers what matters at the top of a page.",
      },
    ],
    citations: [WCAG_FLASH],
    links: [
      { href: "/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website", label: "Pausing Carousels and Autoplay Video", description: "Moving content visitors can control." },
      { href: "/guides/patient-photo-and-video-release-wording-for-images-on-a-medical-practice-website", label: "Patient Photo and Video Release", description: "Wording for images and video." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2064
  {
    slug: "audio-that-starts-by-itself-on-a-practice-page-and-a-visible-control-to-stop-it-on-a-primary-care-website",
    keyword: "audio that starts by itself on a practice page and a visible control to stop it",
    category: "Checklist",
    title: "Audio That Starts by Itself on a Practice Page",
    metaTitle: "Autoplay Audio on a Practice Page: Stop Control",
    metaDescription:
      "Sound that begins on its own can drown out a screen reader and startle a visitor. What the W3C asks for and how to check your page. (561) 291-2681.",
    answer:
      "Do not start sound on a practice page without the visitor asking for it. If audio does play by itself for more than three seconds, give a visible control to pause or stop it, or to change its volume independently of the device volume. The simplest path is no automatic sound at all.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The page that talks first"),
      p(
        "A welcome message that begins when the home page loads, a calming background track, a video that plays its sound as soon as it appears: practices sometimes add these hoping to feel warm. A patient who opens the page in a waiting room, at work or beside a sleeping child hears something they did not choose."
      ),
      p(
        "For a patient using a screen reader the problem is bigger. The page speaks and the screen reader speaks over it, and the person has to find the control to stop it by listening."
      ),
      h2("What the W3C says"),
      p(
        "The Audio Control criterion says that if audio on a page plays automatically for more than three seconds, there must be a way to pause or stop it, or a way to control its volume independently of the overall system volume. The W3C explains the reason: people who use screen reading software can find it hard to hear speech output while other audio plays, especially when the screen reader shares the same volume control as the sound."
      ),
      p(
        "Two details are worth knowing. Muting the whole device is not counted as pausing or stopping the page's audio. And the W3C discourages automatic sound altogether, especially anything over three seconds, and encourages starting sound from an action the visitor takes after arriving, rather than making them stop it after they land."
      ),
      table(
        ["What the page does", "Verdict"],
        ["A play button the visitor presses to start a welcome message", "Fine, the visitor started it"],
        ["Background music starts on load and runs for 30 seconds", "Not fine unless a stop or volume control is present"],
        ["Video autoplays with sound and has no visible pause", "Not fine"],
        ["Video autoplays muted and shows a clear play button for sound", "Better, since sound is only on request"],
        ["A silent link at the top of the page that stops the audio", "Meets the idea, and the W3C lists it as an example"]
      ),
      h2("What a control must be"),
      ul(
        "Visible, not hidden in a menu or revealed on hover.",
        "Reachable by keyboard, which our [keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills) checks.",
        "Named in words a screen reader announces, such as Pause audio, as covered in our guide to [icon buttons that need a spoken name](/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website).",
        "Placed early in the page order, so a visitor finds it before the sound has been going long."
      ),
      h3("Keep voices out of the privacy problem"),
      p(
        "A recording of a clinician talking, or a message with a patient's voice, brings consent questions. Our guide to [patient photo and video release wording](/guides/patient-photo-and-video-release-wording-for-images-on-a-medical-practice-website) covers the wording a practice needs before publishing anyone's image or recording. Spoken content also needs a transcript, as our [accessibility statement guide](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) notes."
      ),
      h2("A five-minute test"),
      ol(
        "Open your home page in a new private window with your device volume turned up a little.",
        "Wait ten seconds. Does any sound begin?",
        "If it does, look for a stop or pause control without using the mouse. Can you reach it with the Tab key?",
        "Turn on a screen reader, following our [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills), and see whether you can still hear it over the sound.",
        "Check videos on interior pages the same way, since a template can add autoplay to any page."
      ),
      p(
        "We do not give legal advice, and removing automatic sound does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is a muted autoplay video allowed?",
        a: "The criterion is about audio that plays automatically for more than three seconds, so a muted video is a different question. If a visitor must press a control to hear sound, the sound starts by their own action, which the W3C encourages.",
      },
      {
        q: "Why does the W3C say three seconds?",
        a: "Because a very short sound, such as a click, is not a problem for hearing a screen reader. Anything that continues beyond three seconds needs a way to stop it.",
      },
      {
        q: "Does a volume slider alone satisfy the rule?",
        a: "It can, if it is separate from the device volume and can reduce the sound to zero. The W3C says the volume control must be independent of the overall system volume.",
      },
      {
        q: "What about hold music on a phone line?",
        a: "The criterion is about web pages and apps, not phone calls. This page is only about sound that starts on a web page.",
      },
      {
        q: "Does a video on a counseling page need sound at all?",
        a: "Often a short silent clip with a caption, or no video, serves a first-time visitor better. If you do use sound, let the visitor start it and offer a transcript.",
      },
    ],
    citations: [WCAG_AUDIO, WCAG_NRV],
    links: [
      { href: "/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website", label: "Pausing Carousels and Autoplay Video", description: "Moving content visitors can control." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement", description: "Invite patients to report a barrier." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2065
  {
    slug: "a-long-drop-down-list-of-insurance-carriers-or-states-on-a-practice-form-and-an-easier-way-to-choose",
    keyword: "a long drop-down list of insurance carriers or states on a form and an easier way to choose",
    category: "How-to",
    title: "Long Drop-Down Lists of Insurance Carriers on a Practice Form",
    metaTitle: "Long Drop-Down Lists on a Practice Form",
    metaDescription:
      "A 60-item drop-down is slow on a phone and hard with a keyboard. Shorter lists, grouped headings and a typed box with suggestions. (561) 291-2681.",
    answer:
      "Keep drop-down lists short. For a long list such as insurance carriers, group the options under headings, add a Not listed choice, or replace the list with a typed box that offers suggestions, and never let choosing an item send the visitor to another page without warning.",
    author: "Liam Costello",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The list that never ends"),
      p(
        "A practice form asks which insurance a patient has, and the answer is a drop-down with sixty carrier names in alphabetical order. On a phone the list scrolls inside a small window. A patient with a keyboard may need many key presses. A screen reader reads one name at a time. If the carrier is missing, the patient has nothing to choose."
      ),
      p(
        "Such a list can also give the wrong impression. A carrier appearing in a list on the practice's own form can read as if the practice accepts it. Our guide to [insurance company logos without implying network status](/guides/insurance-company-logos-on-a-medical-practice-website-without-implying-in-network-status-or-endorsement) explains the same risk for logos."
      ),
      h2("What the sources say about lists"),
      p(
        "The W3C Forms Tutorial lists drop-down menus among the controls that need a label, and it shows how the option group element can group options under a heading, which it says is especially useful for lists with many related options. MDN's page on the select element says the same thing about the option group element, and says a select should be connected to a visible label."
      ),
      p(
        "MDN's page on the datalist element describes a second choice: a text box with a list of suggested values. It notes that this is not a replacement for a select, since the box still accepts any value. It also lists accessibility cautions: the suggestion text does not zoom with the page, it cannot be styled for high contrast, and some screen reader and browser combinations do not announce the suggestions."
      ),
      table(
        ["Option and what it suits", "Watch for"],
        ["Short select with a Not listed choice, for ten or fewer choices", "Needs a visible label"],
        ["Select with grouped headings, for a longer list with natural groups", "Keep group names plain"],
        ["Typed box with suggestions, for a very long list", "Suggestions may not zoom or be announced, so the typed value must work on its own"],
        ["Plain text box, for insurance name, since carriers and plans change often", "Patient can type any wording, so staff check it"]
      ),
      h2("A better way to ask about insurance"),
      p(
        "For a first contact form, a plain text box labeled Insurance name, with a line saying that staff will confirm coverage and that it is fine to write Not sure or Self-pay, is often better than any list. It never goes out of date when a carrier changes its name, and it does not imply the practice accepts anyone. Our guide to [building an accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) shows where the real answer belongs."
      ),
      h3("Never act on choosing"),
      p(
        "The W3C On Input page says that changing a setting, which includes picking a different option in a list, should not cause a surprising change of context. A drop-down that jumps to a new page the moment an option is chosen disorients people. Put a button next to the list and let the patient press it when ready."
      ),
      h2("A five-minute check"),
      ol(
        "Count the options in each drop-down on your forms. Anything over about a dozen deserves a second look.",
        "On a phone, try to choose the last item in the list. Notice how long it takes.",
        "Tab to the list with a keyboard and type the first letter of an option. See whether it jumps there.",
        "Check that every list has a visible label, using our guide to [visible labels above every field](/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears).",
        "Try the [autofill settings](/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less) on address fields, which can remove the need for a state list in the first place."
      ),
      p(
        "We do not give legal advice, and shortening a list does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Should I list the carriers we accept in a drop-down?",
        a: "Not as a way to state what you accept. Keep acceptance on a dedicated page that your billing staff keep current, and let the form ask for the patient's insurance in their own words.",
      },
      {
        q: "Is a state list ever needed?",
        a: "Only if you collect a full mailing address at that stage. For a first contact, name, phone and a note are often enough, and autofill can supply the rest if you ask later.",
      },
      {
        q: "What does an option group look like?",
        a: "It shows a bold, unselectable heading inside the list, such as Commercial plans above a set of names. It is quick to add and helps people find their place.",
      },
      {
        q: "Are suggestions from a datalist safe for screen reader users?",
        a: "MDN notes that some screen reader and browser combinations do not announce the suggestions. Treat them as a convenience only and make sure typing the value by hand works.",
      },
      {
        q: "Who changes this on my site?",
        a: "Your web designer or the form plugin settings. Ask for a shorter list, grouped headings or a plain text box, and check it on a phone afterward.",
      },
    ],
    citations: [WAI_LABELS, WAI_GROUP, MDN_SELECT, MDN_DATALIST, WCAG_ONINPUT],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Building an Accepted Insurance Page", description: "Where the real answer belongs." },
      { href: "/guides/insurance-carrier-specific-pages-for-a-counseling-practice-accuracy-and-wording", label: "Insurance Carrier Pages", description: "Accuracy and wording." },
      KB,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2066
  {
    slug: "a-search-box-on-a-large-practice-website-with-a-visible-label-and-a-clear-button-name-for-a-screen-reader",
    keyword: "a search box on a large practice site with a visible label and a clear button name for a screen reader",
    category: "How-to",
    title: "A Search Box With a Clear Label and Button Name",
    metaTitle: "Practice Website Search Box: Label and Button Names",
    metaDescription:
      "A magnifying glass alone is not a name. How to label a search box and name its buttons so every patient can use site search. (561) 291-2681.",
    answer:
      "Give a site search box a visible cue that says what it is, a label in the page code, and a spoken name for every button in it, including the search button and any clear button. A magnifying glass picture with no name is invisible to a screen reader.",
    author: "Gio LaRoche",
    publishDate: "2026-11-24T14:00:00Z",
    dateModified: "2026-11-24",
    readMinutes: 5,
    sections: [
      h2("The icon with no name"),
      p(
        "A large practice site, one with dozens of guides, service pages and provider bios, benefits from a search box. Many are built as a thin text field with a magnifying glass icon, and sometimes an X that clears the text. To a sighted visitor the icons are plain. To a screen reader user, a button with no name is announced as button, and nothing more."
      ),
      p(
        "A patient who cannot find the insurance page through the menu may try search. If the box and its buttons are unnamed, that fallback fails for them."
      ),
      h2("What the sources say"),
      p(
        "The W3C Labels or Instructions page includes this very case. A website with a global search field in the header needs no instructions because any term can be entered, but the field needs a cue to communicate its purpose. Commonly the cue is a magnifying glass icon that serves as the visible label, often doubling as the search button."
      ),
      p(
        "The W3C Forms Tutorial shows the fix for the code side. A label can be hidden from view yet remain available to assistive technology, and its search example sits a text field beside a Search button. It also shows an accessible name on a button, applied through an attribute, and warns that this approach should be used only when the control's purpose is clear from the surrounding content, like that button. A title tooltip alone is called less reliable and not recommended."
      ),
      p(
        "The Name, Role, Value criterion requires a programmatically determinable name for all user interface components, and notes that names may be visible or invisible. An icon-only clear button is a user interface component, so it needs a name too, such as Clear search."
      ),
      table(
        ["Part of the search", "What it needs"],
        ["Text box", "A label in the code, hidden from view only if the button beside it makes the purpose obvious"],
        ["Search button with a magnifying glass icon", "The name Search"],
        ["Clear button shown as an X", "The name Clear search"],
        ["Results page heading", "Words such as Search results, so a screen reader user knows the search ran"],
        ["No results message", "A sentence that suggests another route, as in our guide to [site search and 404 pages](/guides/site-search-and-404-page-for-a-medical-practice-website)"]
      ),
      h2("Two details that cause trouble"),
      ul(
        "Button words and picture should match. If the button shows the word Search, its spoken name should contain the same word, so a patient who uses voice control can say it.",
        "A placeholder such as Search our site is not a label. The tutorial states that placeholder text is not a replacement for labels, which our guide to [visible labels](/guides/visible-labels-above-every-field-on-a-contact-form-so-a-patient-is-not-left-guessing-when-placeholder-text-disappears) explains."
      ),
      h3("Keep search words private"),
      p(
        "Patients type worries into search boxes. Check that your analytics setup does not send what they type to an ad platform. Our guide to [Google Tag Manager without sending patient data](/guides/google-tag-manager-setup-for-a-medical-practice-website-without-sending-patient-data) covers what to exclude."
      ),
      h2("A five-minute test"),
      ol(
        "Open your site with a screen reader on, as in our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills).",
        "Tab to the search area. Listen for a name before the text box, and a name for each button.",
        "Type a word and search. Check that the results page announces itself.",
        "Type text, then tab to the clear control. It should say what it does.",
        "Check the menu icons too, with our guide to [phone and menu icon buttons](/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website)."
      ),
      p(
        "We do not give legal advice, and naming search controls does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does a small site need a search box?",
        a: "Often not. A short, clear menu and a visible phone number serve a small practice site better. A search box earns its place on a site with many guides and pages.",
      },
      {
        q: "Can I rely on the magnifying glass as the label?",
        a: "The W3C accepts a magnifying glass as a visible cue for a search field, especially when it is also the search button. The code still needs a name for the button so a screen reader announces it.",
      },
      {
        q: "Is a tooltip enough to name a button?",
        a: "The W3C Forms Tutorial calls the title attribute less reliable and not recommended, because some assistive technologies do not treat it as a name. Use a proper name in the code.",
      },
      {
        q: "Who should name the buttons?",
        a: "Your web designer, or the search plugin settings if there are any. Send one line: every icon button in the search box needs a short spoken name such as Search and Clear search.",
      },
      {
        q: "How do I check that it worked?",
        a: "Repeat the screen reader test after the change. If each control is announced with a name, it worked. Write the date of the check in your page inventory.",
      },
    ],
    citations: [WCAG_LABELS, WAI_LABELS, WCAG_NRV],
    links: [
      { href: "/guides/site-search-and-404-page-for-a-medical-practice-website", label: "Site Search and 404 Page", description: "Help visitors who cannot find a page." },
      { href: "/guides/phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website", label: "Icon Buttons That Need a Name", description: "Phone and menu buttons." },
      SR,
      LOC,
    ],
  },
];
