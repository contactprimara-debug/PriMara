// -- Guides batch 42b - 2026-11-11 --
// Guide/AEO pages from the Command Center queue (rows 1726, 1727, 1728, 1741, 1742), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const MOBILE_FIRST = {
  publisher: "Google Search Central",
  label: "Mobile-first Indexing Best Practices",
  href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
};
const NOINDEX = {
  publisher: "Google Search Central",
  label: "Block Search Indexing with noindex",
  href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing",
};
const WCAG_KEYBOARD = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.1.1: Keyboard",
  href: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
};
const WCAG_FOCUS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.4.7: Focus Visible",
  href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
};
const WCAG_FOCUS_ORDER = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.4.3: Focus Order",
  href: "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html",
};
const SEO_STARTER = {
  publisher: "Google Search Central",
  label: "SEO Starter Guide: The Basics",
  href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty5B: Guide[] = [
  // ---------------------------------------------------------------- 1726
  {
    slug: "checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live",
    keyword: "checking a website change in a second browser and on an older phone before telling the team it is live for a medical practice",
    category: "Checklist",
    title: "Check a Website Change on a Second Browser and Older Phone",
    metaTitle: "Check a Website Change on a Second Browser and Phone",
    metaDescription:
      "A ten-minute check a practice manager can run on a second browser and an older phone before telling staff a website change is live. (561) 291-2681",
    answer:
      "Before you tell the team a website change is live, open the page on two browsers and on one older phone, tap the phone number, load the contact form without submitting it, and read the page top to bottom. Ten minutes catches most problems that a developer's own screen hides.",
    author: "Liam Costello",
    publishDate: "2026-11-11T15:00:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("A change that works on one screen can fail on another"),
      p(
        "A developer usually checks a change on a recent computer in one browser. Your patients arrive on phones of every age, on a different browser, sometimes on slow connections. A page that looks fine in the developer's window may push the phone number off the screen or hide a button on an older phone."
      ),
      p(
        "Google indexes the mobile version of most sites first, which is why the phone view matters even if your own staff mostly use computers; its [mobile-first indexing guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) says the mobile and desktop versions should carry the same content."
      ),
      h2("What you need"),
      ul(
        "The page address of the change.",
        "A second computer browser that is not the one you usually use.",
        "One phone that is at least three or four years old, if the practice has one, such as a spare or a staff member's phone.",
        "Ten minutes and the written change request, so you know what should have changed."
      ),
      h2("The ten-minute check"),
      h3("Step 1: Read the page as a patient"),
      p(
        "Start at the top and read every line aloud, including the phone number, hours and address. Compare each fact with your master sheet. Most live errors are not code problems; they are wrong words."
      ),
      h3("Step 2: Open it in a second browser"),
      p(
        "If you normally use Chrome, open the page in Safari or Edge. Look for text running outside its box, missing images, a menu that does not open and a layout that looks different from your first browser."
      ),
      h3("Step 3: Open it on an older phone"),
      p(
        "Hold the phone upright and look at the first screen without scrolling. The phone number, the main button and the practice name should be visible. Then turn the phone sideways and check again."
      ),
      h3("Step 4: Tap what a patient would tap"),
      ol(
        "Tap the phone number. The phone should offer to call the right number.",
        "Tap the main appointment or contact button. It should open the right page or form.",
        "Open the contact form and look at the fields, but do not submit it with real or fake information.",
        "Tap the menu and visit two other pages to make sure links still work."
      ),
      p(
        "If you need a form test, ask the vendor to run it with a clearly marked test entry and tell you when to expect it. Do not enter real names or health details to see what happens."
      ),
      h3("Step 5: Check for stray pop-ups"),
      p(
        "Look for banners, chat windows or cookie notices that cover the phone number on a small screen. Our guide on [pop-ups and chat widgets on the mobile page](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) explains what to watch for."
      ),
      h2("Write down what you saw"),
      table(
        ["Check", "Result to record"],
        ["Facts match master sheet", "Yes or no, with the wrong line if no"],
        ["Second browser", "Browser name and any layout difference"],
        ["Older phone", "Phone model, number and button visible without scrolling"],
        ["Phone number tap", "Offered the correct number: yes or no"],
        ["Form loads", "Fields visible: yes or no"],
        ["Pop-ups", "Anything covering the number or button"]
      ),
      p(
        "Send the record to the person who made the change, and only then tell the team the change is live. If you keep a [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change), add the date and what you checked. Our [guide on choosing a day and time to publish changes](/guides/choosing-a-day-and-time-to-publish-website-changes-at-a-primary-care-practice-so-the-front-desk-is-not-caught-off-guard) pairs well with this check."
      ),
    ],
    faqs: [
      {
        q: "Why check a website change on an older phone?",
        a: "Some patients use older phones with smaller screens or slower browsers. A page that looks right on a new phone can hide a button or the phone number on an older one.",
      },
      {
        q: "Should I submit the contact form to test it?",
        a: "Not with real or made-up personal details. Ask the vendor to run a clearly marked test entry, and confirm the form loads and shows its fields.",
      },
      {
        q: "How long should the check take?",
        a: "About ten minutes for one page. Check the pages the change touched, plus the home page and contact page.",
      },
      {
        q: "Who should run the check?",
        a: "Someone other than the person who made the change, such as the office manager or a front-desk lead. A second pair of eyes catches what the author stops seeing.",
      },
      {
        q: "What if the page looks wrong on one phone?",
        a: "Write down the phone model, the browser and a screenshot, send them to the person who made the change, and ask them to confirm the fix on the same device.",
      },
    ],
    citations: [MOBILE_FIRST, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call and Mobile Layout", description: "What a phone visitor needs to see first." },
      { href: "/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website", label: "When Calls Drop", description: "The first hour of checks." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Speed and stability on phones." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1727
  {
    slug: "answering-a-patient-who-asks-why-the-website-lists-a-different-provider-than-the-google-profile-at-a-primary-care-practice",
    keyword: "answering a patient who asks why the website lists a different provider than the Google profile at a primary care practice",
    category: "How-to",
    title: "When a Patient Asks Why the Website and Google Name Different Providers",
    metaTitle: "Website and Google Show Different Providers: Reply",
    metaDescription:
      "How a primary care front desk answers a patient who sees a different provider on Google than on the website, and how to fix the mismatch. (561) 291-2681",
    answer:
      "Thank the patient, tell them who currently sees patients at the practice, and offer to book with that provider. Then log the mismatch and fix the Google profile, directories and website the same week. The reply should name no health details and should never blame the patient or Google.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T15:10:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("What the patient is really asking"),
      p(
        "When a patient says 'Google lists Dr. A but your website says Dr. B,' they are asking one thing: am I calling the right place, and who will I see? The answer should be short, friendly and certain. The detail of why the listings differ can wait."
      ),
      p(
        "These mismatches are common. A provider leaves, another joins, the website is updated in a week and the Google profile and directories are not. For the patient, it looks like the practice does not know its own staff."
      ),
      h2("A reply the front desk can use"),
      p(
        "Give staff the wording and let them put it in their own voice. A phone version might be: 'Thanks for telling us. Dr. B is seeing patients here now. I can book you with Dr. B or tell you who else has openings. I will pass your note to our office manager so the other listing is corrected.'"
      ),
      ul(
        "Thank the patient for noticing.",
        "Say who is seeing patients now, by name.",
        "Offer an appointment or a second option.",
        "Say the listing will be corrected, without promising a date you do not control.",
        "Do not discuss why the provider left, where they went or anything about their patients."
      ),
      h3("A line for text or portal messages"),
      p(
        "'Thank you for letting us know. Dr. B is our provider here. Call us at the number on this message and we will help you book. We are updating the other listing.' Keep it to those lines: no health details and no reference to anyone's visit history."
      ),
      h2("Find where the mismatch lives"),
      p(
        "After the call, find out which sources still show the old provider. Check the places patients look, in this order."
      ),
      ol(
        "The Google Business Profile, including the practice description, services and any posts.",
        "The practice's own website, including the team page, footer and schema text.",
        "Insurance directories and hospital directories, such as those described in our guide on [getting listed in a hospital or health system provider directory](/guides/getting-listed-in-a-hospital-or-health-system-provider-directory).",
        "Review sites and healthcare listings such as the ones covered in [Healthgrades, Zocdoc and Vitals profiles](/guides/healthgrades-zocdoc-vitals-profiles-for-a-medical-practice).",
        "The national provider registry and insurer data, which our guide on [NPI registry and directory accuracy](/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice) explains."
      ),
      h2("Fix it the same week"),
      p(
        "Provider names on a Google Business Profile for the practice belong in the description and photos, while individual providers may have their own listings that must be updated or marked correctly. Google describes how to update details in its help on [editing your Business Profile](https://support.google.com/business/answer/3039617). Follow the process in our checklist for [what to update when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice)."
      ),
      p(
        "If a provider's own listing still shows the practice, the provider or the practice owner should follow Google's instructions to update or remove it. Do not ask a patient to report the listing for you."
      ),
      h3("Log it"),
      p(
        "Add a line to your change log: date, which source was wrong, who fixed it and the date it was corrected. If this keeps happening, add 'confirm every listing' to your monthly checks, using the routine in our guide on [monthly profile maintenance](/guides/monthly-google-business-profile-maintenance-checklist)."
      ),
    ],
    faqs: [
      {
        q: "What should we say when a patient notices a mismatch between Google and our website?",
        a: "Thank them, state who is seeing patients now, offer to book with that provider and say the listing will be corrected. Do not discuss why a provider left.",
      },
      {
        q: "Should we ask the patient to report the wrong Google listing?",
        a: "No. Fix it ourselves through the profile owner or the provider's own listing. Asking a patient to do it puts our work on them.",
      },
      {
        q: "Where do old provider names usually linger?",
        a: "On the Google profile, insurance and hospital directories, healthcare listing sites and the national provider registry, as well as old posts and PDF forms.",
      },
      {
        q: "How quickly should the mismatch be fixed?",
        a: "Aim for the same week for the website and Google profile. Directories can take longer, so track each one with a date on your change log.",
      },
      {
        q: "Can the front desk share why the provider is no longer at the practice?",
        a: "No. Say who is available now and offer to help. Reasons for a departure are not for the front desk to discuss.",
      },
    ],
    citations: [GBP_EDIT, GBP_GUIDELINES],
    links: [
      { href: "/guides/what-a-primary-care-office-does-when-a-patient-finds-the-wrong-phone-number-for-the-practice-online", label: "When a Patient Finds a Wrong Number", description: "The same approach for phone numbers." },
      { href: "/guides/google-reviews-that-mention-a-provider-who-has-left-a-medical-practice", label: "Reviews That Name a Departed Provider", description: "A related reply problem." },
      { href: "/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice", label: "Practitioner vs Practice Listing", description: "How Google separates them." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1728
  {
    slug: "reviewing-a-marketing-proposals-promised-deliverables-line-by-line-before-signing-for-a-counseling-practice-owner",
    keyword: "reviewing a marketing proposal's promised deliverables line by line before signing for a counseling practice owner",
    category: "Checklist",
    title: "Review a Marketing Proposal's Deliverables Line by Line",
    metaTitle: "Review a Marketing Proposal's Deliverables Line by Line",
    metaDescription:
      "A line-by-line way for a counseling practice owner to check what a marketing proposal actually delivers, how often and how you will see it. (561) 291-2681",
    answer:
      "For each line of a marketing proposal, write four things beside it: what is delivered, how often, how you will see it and who owns it afterward. Any line that cannot be answered, or that promises a ranking or a number of patients, goes back to the vendor in writing before you sign.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T15:20:00Z",
    dateModified: "2026-11-11",
    readMinutes: 6,
    sections: [
      h2("Read the deliverables, not the pitch"),
      p(
        "A proposal has two halves: the story about what will happen and the list of what will be done. Owners tend to read the story. The list is what you are paying for, and it is usually shorter and vaguer than the story."
      ),
      p(
        "Our guide on [reading a marketing proposal and spotting guaranteed ranking promises](/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises) covers the red flags. This guide is the second pass: a table you fill in for each line."
      ),
      h2("The four columns"),
      table(
        ["Column", "The question to answer"],
        ["What", "What exactly is delivered: a page, a report, a post, a fix?"],
        ["How often", "Once, weekly, monthly, or 'as needed'?"],
        ["How I see it", "A link, a file, a login or a meeting I can attend?"],
        ["Who owns it", "Does the finished work belong to the practice?"]
      ),
      p(
        "Number the lines of the proposal and write one row per line. A line like 'ongoing SEO optimization' will produce four empty cells, and that is the point: the blanks show what you are not being told."
      ),
      h2("Lines that need a rewrite"),
      h3("Words that hide the deliverable"),
      p(
        "'Optimization,' 'strategy,' 'management' and 'support' describe activity, not a product. Ask the vendor to turn each into a count or a thing: 'two new guide pages per month, each published at its own address,' or 'one monthly report with calls and forms.'"
      ),
      h3("Promises about results"),
      p(
        "No vendor controls Google. Any line that guarantees a ranking, a number of calls or a number of new clients should be struck or reworded as an activity. Google's own [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) is a fair standard: it describes what helps, not what is guaranteed."
      ),
      h3("Reports with no numbers you can verify"),
      p(
        "A report is a deliverable only if you can check the figures. Ask which calls, forms and key events it counts and where you can see them yourself, as discussed in our guide on [comparing marketing reports that count differently](/guides/comparing-two-marketing-reports-from-different-vendors-that-count-calls-and-forms-differently-for-a-practice-owner)."
      ),
      h3("Work that is not yours at the end"),
      p(
        "Ask whether the website, Google profile, analytics and any directory accounts will be in the practice's name, and what is handed over at the end. See [who should own the accounts](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) and [handing over accounts when a vendor relationship ends](/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends)."
      ),
      h2("A short list to send back"),
      ol(
        "Please replace each general phrase with a count or a named item.",
        "Please state how often each item is delivered.",
        "Please state where I can see each result without asking you.",
        "Please confirm in writing that the practice owns the accounts and the finished pages.",
        "Please remove any guarantee of rankings, calls or patients, or explain how it is measured."
      ),
      p(
        "A good vendor answers these in one email. A vendor who gets defensive is giving you information before you have signed anything."
      ),
      h2("What to keep after you sign"),
      p(
        "File the filled-in table with the contract. At each monthly check, take it out and mark what was delivered. Our [monthly 30-minute marketing meeting agenda](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) is a good place to use it, and a month with a blank column is a month to ask about."
      ),
    ],
    faqs: [
      {
        q: "How do I check what a marketing proposal actually delivers?",
        a: "Write one row per proposal line with four answers: what is delivered, how often, how you will see it and who owns it afterward. Send back any line you cannot fill in.",
      },
      {
        q: "Should a proposal guarantee rankings or new clients?",
        a: "No. No vendor controls Google or the choices clients make. Treat a guarantee as a reason to ask questions, not as a selling point.",
      },
      {
        q: "What does 'ongoing optimization' mean in a proposal?",
        a: "Nothing specific. Ask for the activity in countable terms, such as two new pages a month or one monthly report, and where you can see the result.",
      },
      {
        q: "Who should own the website and accounts?",
        a: "The practice should. Ask for the website, Google profile, analytics and directory accounts to be in the practice's name, with the owner as an administrator.",
      },
      {
        q: "Is this legal advice about the contract?",
        a: "No. It is a practical checklist to bring clear questions. A lawyer should review a contract that has legal terms you do not understand.",
      },
    ],
    citations: [SEO_STARTER, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-pick-a-healthcare-marketing-agency", label: "How to Pick a Healthcare Marketing Agency", description: "What to look for." },
      { href: "/guides/in-house-marketer-vs-agency-for-a-medical-practice", label: "In-House Marketer vs Agency", description: "Which fits a small practice." },
      { href: "/guides/healthcare-ad-compliance-checklist", label: "Healthcare Ad Compliance Checklist", description: "Check claims before they run." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1741
  {
    slug: "five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills",
    keyword: "a five-minute keyboard-only test of a medical practice website that a practice owner can run without technical skills",
    category: "Checklist",
    title: "A Five-Minute Keyboard-Only Test for a Practice Website",
    metaTitle: "Five-Minute Keyboard-Only Test for a Practice Website",
    metaDescription:
      "Put the mouse aside and use Tab, Enter and Shift+Tab to check that patients can reach your phone number, forms and menu. Five minutes. (561) 291-2681",
    answer:
      "Put the mouse away and press Tab to move through your website. You should see a visible outline on each item, reach the menu, phone number, contact form and submit button in a sensible order, and be able to press Enter to use them. If anything is skipped, trapped or invisible, tell your web provider.",
    author: "Liam Costello",
    publishDate: "2026-11-11T15:30:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Why test with only a keyboard"),
      p(
        "Some patients cannot use a mouse or touch screen. They may use a keyboard, a switch device or a screen reader, which move through a page in the same order as the Tab key. If a website works that way, it usually works better for everyone: people on slow connections, people with a hand injury and people who simply prefer a keyboard."
      ),
      p(
        "The W3C's accessibility guidelines say that everything on a page should be operable from a keyboard; see [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html). You do not need to know the standard to run the test."
      ),
      h2("The test"),
      p(
        "Use a computer. Open your home page. Click once on a blank part of the page, then put your hand on the keyboard and leave the mouse alone."
      ),
      ol(
        "Press Tab once. Something on the page should show an outline or highlight. If you cannot tell where you are, note it.",
        "Keep pressing Tab. The highlight should move through the menu, then the main content, in the order you would read the page.",
        "Reach the main menu and press Enter on an item. The page or submenu should open.",
        "Reach the phone number and the appointment or contact button. Press Enter on the button; it should open the right page.",
        "On the contact page, Tab through each form field. Each one should show where you are, and the labels should be readable.",
        "Press Shift+Tab to go backward. You should be able to return to any item.",
        "If a window or chat box opens, press Escape. It should close, and you should be able to continue."
      ),
      h2("What to write down"),
      table(
        ["What you see", "What it means"],
        ["No outline appears on items", "Keyboard users cannot tell where they are"],
        ["Focus jumps around the page", "The reading order is confusing"],
        ["A menu opens but you cannot leave it", "A keyboard trap; some visitors cannot move on"],
        ["A button cannot be reached", "Some visitors cannot use that feature at all"],
        ["A pop-up cannot be closed with Escape", "Keyboard users may be stuck behind it"]
      ),
      p(
        "W3C describes [focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) and [focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) in plain terms if your provider asks which standard you mean."
      ),
      h2("What to test on a practice site"),
      ul(
        "The home page and the page a first-time patient lands on.",
        "The contact page and any appointment request form.",
        "The patient portal link, which should be easy to reach.",
        "Any pop-up, cookie notice or chat window that appears."
      ),
      h2("What to do with the results"),
      p(
        "Send your notes to your web provider with the page address, the step that failed and a screenshot if you can. Ask for a fix and a retest. Our guide on [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) covers the wider picture, and the [accessibility statement guide](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) shows how to give patients a way to report a barrier."
      ),
      p(
        "This test is a quick check, not an audit. A pass does not prove the whole site is accessible, and it does not replace advice from an accessibility professional. It does catch the problems patients would run into first."
      ),
    ],
    faqs: [
      {
        q: "How do I test my practice website with only a keyboard?",
        a: "Press Tab to move forward and Shift+Tab to move back, and Enter to open a link or button. Check that you can see where you are and reach the menu, phone number and contact form.",
      },
      {
        q: "Does passing this test mean my website is ADA compliant?",
        a: "No. It is a quick check for one common barrier. Compliance involves many more items and should not be decided from one test.",
      },
      {
        q: "What is a keyboard trap?",
        a: "A place where the Tab key moves into an element and cannot move out again, such as a pop-up that cannot be closed. It stops keyboard-only visitors completely.",
      },
      {
        q: "Who can run the test?",
        a: "Anyone at the practice. It needs no technical skill, only a computer and about five minutes.",
      },
      {
        q: "How often should we repeat the test?",
        a: "After any redesign, new form, pop-up or chat tool, and once or twice a year otherwise.",
      },
    ],
    citations: [WCAG_KEYBOARD, WCAG_FOCUS, WCAG_FOCUS_ORDER],
    links: [
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Forms that more patients can finish." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior-Friendly Layout", description: "Large text and caregiver access." },
      { href: "/guides/deaf-and-hard-of-hearing-patient-access-page-for-a-primary-care-practice-without-clinical-advice", label: "Deaf and Hard of Hearing Access", description: "Ways to reach the practice." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1742
  {
    slug: "staging-copy-of-a-medical-practice-website-and-testing-changes-before-they-go-live",
    keyword: "what a staging or test copy of a medical practice website is and why a vendor should check changes there before they go live",
    category: "How-to",
    title: "Staging Copy of a Practice Website and Why It Matters",
    metaTitle: "Staging Copy of a Practice Website and Why It Matters",
    metaDescription:
      "What a staging (test) copy of a medical practice website is, why changes should be checked there first and how to keep it out of Google. (561) 291-2681",
    answer:
      "A staging copy is a private duplicate of your website where changes are tried before patients see them. Ask your vendor to test there, keep the copy out of Google search, and never put real patient information in it. It turns many live-site mistakes into harmless test-site mistakes.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T15:40:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("What a staging copy is"),
      p(
        "Think of a rehearsal room. A staging copy is a second version of your website, on a private address, that looks like the real site. A developer changes the copy, you look at it and the live site stays untouched until the change is right."
      ),
      p(
        "Without one, every edit happens in front of patients. A broken form, a missing phone number or a layout error is live the moment it is saved."
      ),
      h2("Why a practice should care"),
      ul(
        "A mistake in a rehearsal costs a few minutes. A mistake on the live site can cost calls and form requests until someone notices.",
        "You can approve a change before it is visible, which supports the sign-off step in our guide on [vendor changes to phone, hours and providers](/guides/written-sign-off-before-a-marketing-vendor-changes-a-medical-practice-phone-number-hours-or-provider-list).",
        "A redesign or plugin update can be tried safely, with a backup behind it."
      ),
      h2("Questions to ask your vendor"),
      table(
        ["Question", "A good answer"],
        ["Do we have a staging copy?", "Yes, at a private address, or the host offers one"],
        ["Is it hidden from Google?", "Yes, with a noindex setting or a password"],
        ["Who can open it?", "Named people at the practice and the vendor"],
        ["How does a change move to live?", "A deliberate step after your approval, with a backup first"],
        ["Does it hold real patient data?", "No; it should use dummy content only"]
      ),
      h2("Keep the copy out of Google"),
      p(
        "A test copy that Google finds can compete with your real site, show wrong details in results and confuse patients who land on it. Google describes two simple protections: a password, or a noindex tag, which tells search engines not to show the page. See its help on [blocking search indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)."
      ),
      p(
        "Ask the vendor which of these is used. If the staging address ever appears in a search for your practice name, ask for it to be fixed and removed. Our guide on [canonical tags and duplicate content](/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website) explains why duplicates cause trouble."
      ),
      h2("A staging copy must not hold patient information"),
      p(
        "The copy is not the place for real forms or real patient messages. It should use made-up text. Do not test a form with real names or health details, and do not let the vendor copy a real database of form entries onto it."
      ),
      h3("Check it like the live site"),
      p(
        "Open the staging page on your phone and a second browser, using the ten-minute routine in [checking a website change in a second browser and on an older phone](/guides/checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live). Then approve the change in writing."
      ),
      h2("When there is no staging copy"),
      p(
        "Some small sites have none. In that case ask for three things: a backup first, the change made outside office hours, and a check of the phone number, form and key pages right afterward. Our guide on [backups, uptime monitoring and maintenance](/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice) covers what a basic maintenance setup should include."
      ),
    ],
    faqs: [
      {
        q: "What is a staging site?",
        a: "A private copy of your website used to try changes before they go live. Patients do not see it, and the live site stays unchanged until the change is approved.",
      },
      {
        q: "Does a small practice website need a staging copy?",
        a: "It is helpful for any change that could affect the phone number, forms or layout. If the site is very small and has none, require a backup and an after-hours change with a check.",
      },
      {
        q: "Can Google show the staging site in search results?",
        a: "It can if it is not protected. A password or a noindex setting keeps it out. Ask your vendor which is used.",
      },
      {
        q: "Should real patient information be on a staging copy?",
        a: "No. Use dummy content, and never copy real form entries or messages onto a test site.",
      },
      {
        q: "Who approves a change on staging?",
        a: "One named person at the practice, in writing, before the vendor moves the change to the live site.",
      },
    ],
    citations: [NOINDEX, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-migrate-a-medical-practice-website-to-a-new-domain", label: "Migrating to a New Domain", description: "Plan big changes carefully." },
      { href: "/guides/medical-website-launch-seo-checklist", label: "Website Launch SEO Checklist", description: "What to check at go-live." },
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "Sitemaps and robots.txt", description: "What search engines are told." },
      LOC,
    ],
  },
];
