// -- Guides batch 37 - 2026-11-06 (afternoon run) --
// Guide/AEO pages from the Command Center queue (rows 1617, 1622-1626, planned 2026-11-06), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Plain practical guidance, no legal advice.
// Rows 1618 (file names) and 1621 (shared calendar) are too thin for a page; 1619, 1620 left planned (1620 overlaps the live
// response-time-target guide). Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const MDN_LINK = {
  publisher: "MDN Web Docs",
  label: "The anchor element, including linking to telephone numbers",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
};
const RFC_TEL = {
  publisher: "IETF",
  label: "RFC 3966: The tel URI for Telephone Numbers",
  href: "https://www.rfc-editor.org/rfc/rfc3966",
};
const WCAG_TARGET = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.5.8: Target Size (Minimum)",
  href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
};
const GOOGLE_LOCAL = {
  publisher: "Google Search Central",
  label: "Local business structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const NN_SECONDS = {
  publisher: "Nielsen Norman Group",
  label: "How long do users stay on web pages?",
  href: "https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/",
};
const DIGITAL_USABILITY = {
  publisher: "Digital.gov",
  label: "How to conduct a usability test",
  href: "https://digital.gov/resources/how-conduct-usability-test/",
};
const WEBDEV_LCP = {
  publisher: "web.dev",
  label: "Largest Contentful Paint (LCP)",
  href: "https://web.dev/articles/lcp",
};
const MDN_IFRAME = {
  publisher: "MDN Web Docs",
  label: "The inline frame element, including the sandbox attribute",
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe",
};
const WEBDEV_THIRD = {
  publisher: "web.dev",
  label: "Load third-party JavaScript",
  href: "https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript",
};
const NPPES = {
  publisher: "CMS",
  label: "National Plan and Provider Enumeration System (NPPES)",
  href: "https://nppes.cms.hhs.gov/",
};
const CAQH = {
  publisher: "CAQH",
  label: "CAQH, provider data and credentialing",
  href: "https://www.caqh.org/",
};
const SUNBIZ_FICTITIOUS = {
  publisher: "Florida Department of State, Division of Corporations",
  label: "Fictitious Name in Florida",
  href: "https://dos.fl.gov/sunbiz/forms/fictitious-name/",
};
const HIPAA_TRANSMISSION = {
  publisher: "Legal Information Institute (Cornell Law School)",
  label: "45 CFR 164.312, technical safeguards including transmission security",
  href: "https://www.law.cornell.edu/cfr/text/45/164.312",
};
const NIST_SMALL = {
  publisher: "National Institute of Standards and Technology",
  label: "Small Business Cybersecurity Corner",
  href: "https://www.nist.gov/itl/smallbusinesscyber",
};
const PLAIN_LANGUAGE = {
  publisher: "Digital.gov",
  label: "Plain language guide series",
  href: "https://www.plainlanguage.gov/guidelines/",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty: Guide[] = [
  // ---------------------------------------------------------------- 1622
  {
    slug: "phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website",
    keyword: "phone number format and click to call links on every page of a medical practice website",
    category: "Checklist",
    title: "Phone Number Format and Click-to-Call Links on Every Page",
    metaTitle: "Phone Number Format and Click-to-Call Links on Every Page",
    metaDescription:
      "How to write one phone number the same way and make it tap-to-call on every page of a medical practice website, with a page-by-page check. (561) 291-2681",
    answer:
      "Pick one phone number and one visible format, then make every copy of it a tap-to-call link written with the country code. Check every page type, not just the home page, including the footer, contact page, bios, thank-you page, PDFs and images, because a number that cannot be tapped loses calls.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T16:00:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("A number that cannot be tapped is a lost call"),
      p(
        "Most practices have a click-to-call button on the home page and assume the job is done. Then a patient lands on a bio page from a Google search, sees a phone number in the sentence, holds a thumb on it and nothing happens. The number was typed as plain text. On a phone, that patient now has to remember seven digits, switch apps and type them in, and many simply do not."
      ),
      p(
        "This page is about the whole site, not the button. It covers how to write the number once, in one format, and how to find every place it appears so each one dials. If you want the design side of the button itself, our guide to [the click-to-call button and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) covers size, placement and hours."
      ),
      h2("Write the number once, then copy it everywhere"),
      p(
        "Choose a single visible format and use it on every page, in the footer, in your email signature and on printed material. Patients and search engines both match numbers by looking for the same pattern, and a site that shows three different formats looks careless and is harder to check later. The behind-the-scenes link is a separate thing, and it is written differently from what the patient reads."
      ),
      table(
        ["Part", "How to write it"],
        ["What the patient sees", "One format, always. For example (555) 555-0142, with the area code first. Do not mix dots, dashes and spaces from page to page."],
        ["What the link contains", "The number with a plus sign and the country code and no spaces or punctuation, such as tel:+15555550142. Web standards define this link type so phones know to dial it."],
        ["The link text", "The number itself, or a short action such as Call the office. Avoid link text that says only click here."],
        ["Letters and extensions", "Do not use vanity letters in the link. If there is an extension, put it in the visible text and keep the main line as the link."],
      ),
      h3("Keep the number from breaking across two lines"),
      p(
        "On a narrow screen a long number can wrap so the last four digits drop to the next line. Keep the number together with a no-break style, and make the tap area large enough to hit. Accessibility guidance for small targets sets a minimum of 24 by 24 pixels, and a phone link in a sentence is allowed to be smaller, but a standalone button should be comfortably bigger than that."
      ),
      h2("Find every copy of the number"),
      p(
        "Do this once as a project, then again after any redesign or phone change. Open each page type on a real phone, because the template that builds your service pages is not the one that builds your blog or your location page."
      ),
      ol(
        "List the page types: home, service, provider bio, location, contact, blog or guide, thank-you page, error page, and the footer on all of them.",
        "On one page of each type, find every number and tap it. Mark each as dials, does not dial, or dials the wrong number.",
        "Search the site's page source for the number's last four digits to catch copies hidden in scripts, banners and pop-ups.",
        "Open your downloadable forms and brochures. A number inside a PDF may dial on a phone or may not, so add a web address beside it.",
        "Look for numbers inside images, such as a banner or a hero photo. Text in a picture can never be tapped and cannot be read by a screen reader, so replace it with real text."
      ),
      h2("Check the places people forget"),
      table(
        ["Place", "What to confirm"],
        ["Footer and header", "Same number, same format, link works on every page."],
        ["Contact page", "Number sits next to the form with the hours, and the form is not the only option."],
        ["Thank-you page", "The number is there for people who prefer to call after sending a form."],
        ["Structured data", "The telephone field in the page's markup matches the visible number, written with the country code."],
        ["Google profile and directories", "Same number as the site. Our guide to [toll-free versus local numbers](/guides/toll-free-versus-local-phone-number-on-a-medical-practice-website-and-google-profile) explains which to choose."],
      ),
      h2("Test it, then measure it"),
      p(
        "After the fix, tap the number on an iPhone and an Android phone and confirm the dial screen shows the right digits. Then confirm the tap is being counted. [Tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website) shows how to count taps without collecting anything about the caller. If you use a different number for tracking, read the guide on [call tracking numbers that leave the Google profile number alone](/guides/call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number) first so your listings do not drift apart."
      ),
      p(
        "When the main number changes, change it in one place if your site allows, search for the old number afterward, and update the Google profile, directories and printed pieces on the same day."
      ),
    ],
    faqs: [
      {
        q: "Should the phone link include the country code?",
        a: "Yes. Writing the link with a plus sign and the country code, with no spaces, works for callers anywhere and matches the standard format for these links. The visible text can stay in the format your patients expect.",
      },
      {
        q: "Does a phone link do anything on a desktop computer?",
        a: "It depends on the computer. Some open a calling app, some ask which app to use, and some do nothing. That is why the number should also be readable text, and why the hours should sit nearby.",
      },
      {
        q: "Is it fine to show the number as an image?",
        a: "No. An image cannot be tapped, copied or read aloud by a screen reader. Use real text for the number and a link around it.",
      },
      {
        q: "How often should we check every page?",
        a: "After any redesign, any phone number change and any new page template, and otherwise twice a year. A short test on a real phone takes less time than one missed new-patient call.",
      },
      {
        q: "Should every number on the page be a link?",
        a: "Every number a patient might want to call should be. A fax number should not be a call link, and it helps to label it clearly as a fax so nobody taps it by mistake.",
      },
    ],
    citations: [MDN_LINK, RFC_TEL, WCAG_TARGET, GOOGLE_LOCAL],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call Button Layout", description: "Size, placement and hours." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Count taps without patient details." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1617
  {
    slug: "what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page",
    keyword: "what a new patient sees on a phone in the first five seconds of a primary care practice home page",
    category: "How-to",
    title: "The First Five Seconds of a Practice Home Page on a Phone",
    metaTitle: "The First Five Seconds of a Practice Home Page on a Phone",
    metaDescription:
      "Run a simple five-second test on your primary care home page with real phones and real people, score what they remember, and fix the gaps. (561) 291-2681",
    answer:
      "Hand a phone to five people who do not know your practice, show your home page for five seconds, then take it away and ask what the practice does, where it is and how to book. Whatever they cannot say is what the first screen is failing to show, and that is your fix list.",
    author: "Liam Costello",
    publishDate: "2026-11-06T16:20:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("You already know what belongs on the first screen"),
      p(
        "Our guide to [what belongs above the fold on a primary care home page](/guides/homepage-above-the-fold-content-for-a-primary-care-practice-website) lists the items. This page is different. It is a test you run to find out what a stranger actually sees, because the list in your head and the screen in a patient's hand are rarely the same."
      ),
      p(
        "Research on how people read web pages has long found that many visitors leave within the first ten to twenty seconds unless the page makes its value clear quickly. A patient choosing a doctor from a phone while standing in a kitchen is a very fast reader. The test below shows you what they get in the time they give you."
      ),
      h2("Set up the test"),
      ol(
        "Find five people who have never seen your site. Friends of staff, neighbors or a local community group work. Avoid colleagues who know your practice.",
        "Use their own phones or a phone on a normal mobile connection, not the office wifi on a desktop.",
        "Clear the first-visit state, or use a private tab, so cookie banners and pop-ups appear the way they would for a new visitor.",
        "Open the home page, hand over the phone, and count five seconds out loud. Then take the phone back.",
        "Ask the same three questions of each person, and write down their words, not your summary."
      ),
      h3("The three questions"),
      ul(
        "What kind of practice is this, and who is it for?",
        "Where is it, roughly?",
        "If you wanted an appointment, what would you do next?"
      ),
      p(
        "The government usability guide on running a test recommends a short script, the same questions for every participant and a calm tone that makes clear the page is being tested, not the person. Use that approach and do not coach or explain. If someone says they are not sure, that is the result."
      ),
      h2("Score what you heard"),
      table(
        ["Answer", "What it tells you"],
        ["Named the kind of care in plain words", "The headline and first line are working."],
        ["Gave a wrong or vague answer, such as a clinic of some sort", "The first screen uses clinic language or a slogan instead of what you do."],
        ["Could not say where it is", "The city or area is missing from the first screen or is hidden by a banner."],
        ["Said they would scroll to find a button", "The booking or call action is below the first screen on this phone."],
        ["Mentioned a pop-up, slider or banner", "Something is covering or competing with the message."],
      ),
      p(
        "Three of five people getting any one answer wrong is a clear signal. You do not need statistics for this. You need to see where strangers stumble and fix that."
      ),
      h2("What usually goes wrong in the first five seconds"),
      ul(
        "A cookie notice or chat bubble fills a third of the screen before the headline.",
        "A large photo pushes the headline, the location and the call button below the fold.",
        "The headline is a welcome message or a slogan, with no mention of primary care or the town.",
        "The call button is small, or the number is plain text that cannot be tapped.",
        "A slow hero image or video leaves a blank space where the message should be."
      ),
      p(
        "Slow loading is a common cause. The Largest Contentful Paint measure from Google's web performance team describes how long the biggest visible element takes to appear, and a heavy hero image is the usual culprit. Our guide to [pop-ups, banners and chat widgets on the mobile page](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) covers the covering problem."
      ),
      h2("Fix one thing, then test again"),
      p(
        "Change the single biggest gap, such as moving the town into the headline or shrinking a hero photo, and run the test again with five different people. Keep a short note of the date, the changes and the answers so the next redesign does not undo what worked. Do not put any patient's name or health details in this note, and do not ask testers about their own health."
      ),
      p(
        "Repeat after any redesign, new theme or new banner. If your practice is a counseling practice rather than primary care, the same test works with the guide on [what a first-time visitor needs to see on a therapy practice home page](/guides/homepage-for-a-therapy-practice-what-a-first-time-visitor-needs-to-see) as your reference."
      ),
    ],
    faqs: [
      {
        q: "Why five seconds and not longer?",
        a: "Five seconds shows what the page communicates before a visitor starts reading. If people cannot say what you do after that, a longer visit is less likely to happen, so the first screen must carry the message on its own.",
      },
      {
        q: "Do we need to test on both iPhone and Android?",
        a: "Use whichever phones your testers own, and make sure you get a mix. Screen sizes and browser toolbars differ, and a button visible on one phone may be hidden on another.",
      },
      {
        q: "Can we test with our own patients?",
        a: "It is better to use people outside the practice. If you do ask patients, ask only about the website, not about their care, and do not record names or health details.",
      },
      {
        q: "Should we change the page after every test?",
        a: "Fix the biggest gap that three or more people missed, then test again. Changing many things at once makes it hard to see which change helped.",
      },
      {
        q: "Is this a ranking factor?",
        a: "The test itself is not. But a page that tells strangers quickly what you do and how to book tends to turn more visits into calls and forms, which is the result that matters.",
      },
    ],
    citations: [NN_SECONDS, DIGITAL_USABILITY, WEBDEV_LCP],
    links: [
      { href: "/guides/homepage-above-the-fold-content-for-a-primary-care-practice-website", label: "Above The Fold On A Home Page", description: "What belongs on the first screen." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call Button Layout", description: "Make the call action easy to hit." },
      { href: "/guides/mobile-first-indexing-explained-for-a-medical-practice-website", label: "Mobile-First Indexing", description: "Why the phone version counts most." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1625
  {
    slug: "embedding-an-appointment-widget-safely-on-the-contact-page-of-a-counseling-practice",
    keyword: "embedding an appointment widget safely on the contact page of a counseling practice",
    category: "Checklist",
    title: "Embedding an Appointment Widget on a Counseling Contact Page",
    metaTitle: "Embedding an Appointment Widget on a Counseling Contact Page",
    metaDescription:
      "What to check before embedding a scheduling widget on a counseling contact page: vendor terms, page speed and a phone fallback. (561) 291-2681",
    answer:
      "Before embedding a scheduling widget on a counseling contact page, confirm the vendor will sign a business associate agreement if it handles client information, keep the widget from slowing the page, show the phone number and a plain contact option beside it, and never rely on it as the only way to reach you.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T16:40:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("A widget is somebody else's code on your page"),
      p(
        "An appointment widget is a small block, usually loaded from your scheduling vendor, that lets a visitor pick a time without leaving your site. It is convenient, but it means a third party's code runs on a page where a person may be about to describe why they want counseling. That deserves a few checks that a plain contact form does not."
      ),
      p(
        "This page is practical guidance, not legal advice. Whether your vendor must sign a business associate agreement depends on what the widget collects and how your practice is set up, so ask your compliance advisor or attorney to confirm the answers below."
      ),
      h2("Ask the vendor before you embed"),
      table(
        ["Question", "Why it matters"],
        ["Will you sign a business associate agreement?", "If the tool stores or sends client information for your practice, federal privacy rules generally expect that agreement. A vendor that refuses is a vendor to avoid."],
        ["What does the widget collect, and where does it go?", "A name and phone number is very different from a free-text box. Pick the version that collects the least."],
        ["Does it load advertising or analytics scripts of its own?", "Some widgets bring extra trackers. Ask for the list and turn off anything you did not choose."],
        ["Can the free-text field be removed?", "A box that invites someone to describe symptoms invites private details into an email. Remove it or label it clearly."],
        ["Where do notifications go?", "Booking alerts should go to a shared office mailbox, not one person's personal inbox."],
      ),
      h2("Keep the page fast and the layout steady"),
      p(
        "Third-party code is a common reason a page feels slow. Google's web performance guidance explains that outside scripts compete with your own content for loading time, and recommends loading them in a way that does not block the page. Ask your web person to load the widget after the main content, and to set its height in advance so the page does not jump when it appears."
      ),
      p(
        "If the widget is placed inside a frame on the page, a technical attribute called sandbox can limit what the framed content is allowed to do, and a loading setting can delay it until the visitor scrolls near it. Your vendor's setup instructions may restrict these, so test after any change."
      ),
      h3("Check it on a phone"),
      ul(
        "Can you pick a time with one thumb, without pinching or sideways scrolling?",
        "Does the keyboard cover the field you are typing in?",
        "Does the confirmation message appear on the screen, or only after a redirect that might fail?",
        "Is anything that looks like a private question asked before the visitor chooses a time?"
      ),
      h2("Never let it be the only door"),
      p(
        "Some visitors are not ready to pick a slot. They want to ask a question first, or they prefer to call, or the widget fails to load on an older phone or a blocked connection. Put the phone number as a tap-to-call link, the hours and a short contact form beside or just above the widget. Our guide to [first-time client contact forms](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) covers what that form should and should not ask."
      ),
      p(
        "Write one line above the widget that tells people what happens next and what not to share, for example: Please choose a time only. Do not enter details about why you are seeking counseling here. We will cover that when we speak."
      ),
      h2("Count the bookings without private details"),
      p(
        "You will want to know whether the widget is producing appointments. The method in [conversion tracking for third-party booking widgets](/guides/conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website) shows how to count a click or a completed booking without sending a name, a reason for the visit or any other client detail to your analytics."
      ),
      p(
        "Finally, put the widget on your calendar. Check it monthly: does it load, does the time list match the real schedule, and do the notifications reach the right inbox. Test with a fake name and a number you control, and cancel the test booking."
      ),
    ],
    faqs: [
      {
        q: "Do we need a business associate agreement for a scheduling widget?",
        a: "If the tool creates, receives, stores or sends client information for your practice, federal privacy rules generally expect one. What counts depends on the setup, so ask your attorney or compliance advisor and get the answer in writing.",
      },
      {
        q: "Is it better to link to the scheduler or embed it?",
        a: "Linking is simpler and keeps the vendor's code off your page, but sends people away from your site. Embedding keeps people on your page but adds code you must monitor. Either way, keep a phone option visible.",
      },
      {
        q: "What should we do if the widget stops loading?",
        a: "Keep a plain contact form and phone number on the same page so a failed widget never leaves a visitor stuck. Check the page monthly so you catch the failure before a client does.",
      },
      {
        q: "Can the widget ask for the reason for the visit?",
        a: "It is safer not to. Collect only what is needed to hold a time, usually a name and a phone number, and leave the reasons for a conversation.",
      },
      {
        q: "Will the widget slow down the page?",
        a: "It can. Test the page speed with and without it, and ask your web person to load it after the main content and reserve its space on the page.",
      },
    ],
    citations: [MDN_IFRAME, WEBDEV_THIRD, NIST_SMALL],
    links: [
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Appointment Scheduling", description: "Booking tools and search." },
      { href: "/guides/conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website", label: "Booking Widget Tracking", description: "Count bookings without private details." },
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Contact Form", description: "What the form should and should not ask." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1626
  {
    slug: "practice-name-abbreviations-and-legal-name-consistency-across-insurance-directories-and-google-for-a-counseling-practice",
    keyword: "practice name abbreviations and legal name consistency across insurance directories and google for a counseling practice",
    category: "Checklist",
    title: "Practice Name Consistency Across Directories and Google",
    metaTitle: "Practice Name Consistency Across Directories and Google",
    metaDescription:
      "How a counseling practice can keep its legal name, public name and abbreviations matching across insurance directories and Google. (561) 291-2681",
    answer:
      "Write down your legal name, your public name and the short forms you allow, then use the same forms in each insurance directory, the provider registry, Google and your website. Fix mismatches in the records that feed others first, and never add keywords to a name to look more relevant.",
    author: "Liam Costello",
    publishDate: "2026-11-06T17:00:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("One practice, five different names"),
      p(
        "A counseling practice often has more names than anyone realizes. There is the legal name on the state filing, a public name on the sign and the website, the name a clinician used when they first enrolled with an insurance company, the shortened form someone typed into a directory, and the name on a Google profile created years ago. Each is a little different, and patients and insurers have to guess that they are all the same office."
      ),
      p(
        "Our guide to [what breaks NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) covers the name, address and phone problem in general. This page narrows to one piece of it: the practice name, the short forms people invent for it, and how to keep them under control across insurance directories."
      ),
      h2("Start with a one-page name sheet"),
      table(
        ["Line", "What goes here"],
        ["Legal name", "Exactly as it appears on your business registration, including punctuation and ending such as LLC or PLLC."],
        ["Public name", "The name patients see on the sign, website and Google profile. It may equal the legal name or be a registered fictitious name."],
        ["Allowed short forms", "At most two. For example, the name without the ending, and one common abbreviation. Write them out."],
        ["Never use", "Old names, nicknames and keyword-added names such as a city or specialty tacked on."],
        ["Individual clinicians", "Name, credentials as licensed and the practice name each is linked to."],
      ),
      p(
        "In Florida, a business operating under a name different from its legal name generally registers it as a fictitious name with the state, and the state's page explains how. Check the rules for your own state and ask your attorney or accountant which name should be your public one."
      ),
      h2("Where the names live"),
      p(
        "Different records feed different places. Fix the ones that others copy from first, or the wrong name will spread back after you correct it."
      ),
      ul(
        "The national provider registry holds each clinician's record and the practice location they list. Many directories read from it.",
        "The credentialing database your insurers use holds the practice and clinician details they display to members.",
        "Each insurer's own provider directory, which may take a request form or a portal change to update.",
        "Your Google Business Profile, which has its own rule about using the real-world name.",
        "Therapist directories and your website, including the footer, schema and contact page."
      ),
      h3("What to do about mismatches"),
      ol(
        "Pull up the name currently shown in each place and paste it into your sheet next to the right form.",
        "Mark each as match, short form allowed, or wrong.",
        "Fix the source records first: the provider registry, then the credentialing database, then each insurer directory.",
        "Update Google and the website last, so the corrected records support them.",
        "Check again in a month. Insurer directories often update slowly."
      ),
      h2("Abbreviations: allowed, but chosen"),
      p(
        "Abbreviations are a normal part of how people search, such as the name without its ending or a short form of a long name. They become a problem when each directory uses a different one. Choose the forms you allow and put them on the sheet. If an insurer's system limits the number of characters, use your allowed short form there, and note it so nobody undoes it later."
      ),
      p(
        "Do not add words to your Google profile name to look more relevant. Our guide to [the business name on a Google Business Profile](/guides/business-name-on-a-google-business-profile-for-a-medical-practice-legal-name-credentials-and-keywords) explains why a stuffed name risks a suspension, and the guide to [NPI and insurance directory data accuracy](/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice) gives the routine for the registry and credentialing records."
      ),
      h2("When the name changes"),
      p(
        "A rebrand, a merger or a new partner changes the sheet. Update the legal records first, then every directory, then Google and the website, in that order, and keep the old name on file as a secondary name where a directory allows it so returning clients can still find you. For mistakes by others, such as a nearby office with a similar name, read [when another practice has a similar name](/guides/when-another-practice-has-a-similar-name-keeping-patients-from-calling-the-wrong-office-for-a-medical-practice)."
      ),
    ],
    faqs: [
      {
        q: "Does the name have to match exactly everywhere?",
        a: "Aim for your public name to match everywhere patients see it, and for the legal name to match official records and insurers. Small punctuation differences are less important than using a different name altogether.",
      },
      {
        q: "Can I use an abbreviation on Google?",
        a: "Google asks for the real-world name your customers use. A well-known short form can be fine, but a name stuffed with keywords or locations is not. Follow Google's current guidelines for the name field.",
      },
      {
        q: "Which record should I fix first?",
        a: "Fix the provider registry and the credentialing database first, because insurer directories and many third-party listings copy from them. Google and your site are last.",
      },
      {
        q: "What if an insurer directory shows an old name?",
        a: "Send a correction through the insurer's provider portal or its directory update form, keep a record of the request, and recheck in a month. These updates can be slow.",
      },
      {
        q: "Who should own the name sheet?",
        a: "One named person, such as the practice manager, with the owner reviewing it twice a year. A sheet nobody owns goes out of date within months.",
      },
    ],
    citations: [NPPES, CAQH, SUNBIZ_FICTITIOUS],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      { href: "/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice", label: "Therapist Directory Profiles", description: "Setting up directory listings." },
      { href: "/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network", label: "Joining Or Leaving A Network", description: "What to update online." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1624
  {
    slug: "answering-a-prospective-client-who-asks-by-email-if-a-counselor-takes-their-insurance-without-sharing-private-details",
    keyword: "answering a prospective client who asks by email if a counselor takes their insurance without sharing private details",
    category: "How-to",
    title: "Replying to an Email Asking If a Counselor Takes Insurance",
    metaTitle: "Replying to an Email Asking If a Counselor Takes Insurance",
    metaDescription:
      "A plain way for a counseling practice to answer an insurance question by email without private details, with a template you can adapt. (561) 291-2681",
    answer:
      "Answer an insurance question with the same facts your website shows: which plans you are in network with, how to check benefits, and what self-pay looks like. Do not ask about symptoms, do not confirm that the writer is a client, and move the conversation to a phone call.",
    author: "Gio LaRoche",
    publishDate: "2026-11-06T17:20:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("The question is simple, the risk is in the reply"),
      p(
        "Someone emails: Do you take my insurance? It is one of the most common first messages a counseling practice receives, and it is an easy sale to lose. If the reply is slow, vague or full of questions, the person moves on to the next name on the list. If it is too chatty, it can drift into territory that should not be in an unsecured email."
      ),
      p(
        "This page is practical, not legal advice. Federal rules ask practices to protect health information sent electronically, and a regular email account is not a secure channel by default. Ask your compliance advisor to approve the template you use and to tell you when a secure portal is the better route."
      ),
      h2("What a good reply contains"),
      table(
        ["Part", "What to say"],
        ["A thank-you and a name", "Thank the person and sign with a real name and role, so they know a person is behind it."],
        ["The plain answer", "State which insurance plans you are in network with, using the same list as your website. If you are not in network for their plan, say so plainly."],
        ["How to check benefits", "Tell them to call the number on the back of their card and ask about outpatient mental health benefits, the deductible and the copay."],
        ["Other options", "Describe self-pay and, if you offer one, a superbill for out-of-network reimbursement. Keep this brief and do not guess at what their plan will pay."],
        ["The next step", "Offer a short call and give the phone number and the hours, or a link to the booking page."],
      ),
      h2("What to leave out"),
      ul(
        "Do not ask why they want counseling or what they are experiencing. A phone call or a secure form is the place for that.",
        "Do not confirm whether the person is already a client, and do not mention past visits or other people by name.",
        "Do not quote what their plan will pay. You do not know it, and a wrong number causes a billing dispute.",
        "Do not forward or copy the message to colleagues in a way that spreads the person's name and question around.",
        "Do not attach forms that ask for diagnosis, member numbers or other details."
      ),
      p(
        "If the writer volunteers private details anyway, do not repeat them in your reply. Thank them, answer only the insurance question and invite a call."
      ),
      h2("A template you can adapt"),
      p(
        "Hello, and thank you for reaching out to our practice. We are in network with the plans listed on our insurance page, and we are happy to talk through your options. To confirm your own benefits, please call the number on the back of your card and ask about outpatient mental health coverage, your deductible and your copay. If you would like to talk, you can reach us at the office number on our contact page during the hours listed there, or choose a time on our booking page. Warm regards, and then your name and role."
      ),
      p(
        "Keep your own version short and match it to your website's insurance page, because mismatched answers erode trust. Our guide to [building an accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) shows how to keep that page accurate, and the guide on [insurance verification and benefits check pages for a therapy practice](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice) explains how to set expectations."
      ),
      h2("Speed and the move to a call"),
      p(
        "Reply the same business day if you can. The [response time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) guide shows how to set a target and track it without reading private content. If you cannot answer in a day, set an automatic reply that says when to expect a response and gives the phone number."
      ),
      p(
        "Use a shared office mailbox, not a personal inbox, so a vacation does not leave a question unanswered. Where your email system supports encryption, use it for anything beyond the plain insurance answer, and offer the portal or a phone call for the rest."
      ),
      h3("If you are not in network"),
      p(
        "Say so kindly and give the options you offer, such as self-pay or an out-of-network receipt, and if your practice does so, a way to find an in-network colleague. A helpful no is remembered better than a silent one."
      ),
    ],
    faqs: [
      {
        q: "Is it safe to discuss insurance by regular email?",
        a: "General statements about which plans you accept contain no private health information, so they are low risk. Anything that identifies a person as a client or describes their reasons for care should move to a secure channel or a phone call. Ask your compliance advisor to confirm your approach.",
      },
      {
        q: "Should we ask for the member ID in the email?",
        a: "No. Member IDs belong in a secure form or a phone call. Asking for them by plain email puts private numbers in a place that is hard to control.",
      },
      {
        q: "What if the person only wants a price?",
        a: "Give your self-pay fee if it is published on your site, and explain how to check insurance benefits. If your fee is on a page, link to it rather than retyping it, so the numbers always match.",
      },
      {
        q: "How fast should we answer?",
        a: "The same business day is a good target. If that is not possible, an automatic reply that states when you will respond and gives your phone number keeps the person from going elsewhere.",
      },
      {
        q: "Should the reply come from a named person?",
        a: "Yes, from a shared office mailbox signed by a named staff member. It feels personal, and it means the thread is not lost if that person is away.",
      },
    ],
    citations: [HIPAA_TRANSMISSION, NIST_SMALL, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "Keep the list accurate." },
      { href: "/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice", label: "Auto-Reply After An Inquiry", description: "What the first automatic message says." },
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time Target", description: "Track speed without reading details." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1623
  {
    slug: "appointment-cards-and-brochures-that-match-the-website-for-a-primary-care-practice",
    keyword: "print materials such as appointment cards and brochures that match the website for a primary care practice",
    category: "Checklist",
    title: "Appointment Cards and Brochures That Match Your Website",
    metaTitle: "Appointment Cards and Brochures That Match Your Website",
    metaDescription:
      "How a primary care practice can keep appointment cards, brochures and flyers matching its website, with a printing checklist. (561) 291-2681",
    answer:
      "Treat print as part of the website. Before printing appointment cards or brochures, copy the practice name, address, phone number, hours and web address from one master sheet that matches the site, add a short link or QR code to a page that exists, and check the proof against the live website.",
    author: "Liam Costello",
    publishDate: "2026-11-06T17:40:00Z",
    dateModified: "2026-11-06",
    readMinutes: 6,
    sections: [
      h2("The card in the patient's wallet outlives the website page"),
      p(
        "An appointment card is the one piece of your marketing a patient looks at on purpose, often more than once. A brochure sits in a waiting room or goes home with a family member. If either shows an old phone number, a retired web address or a different practice name from the one on Google, it works against the effort you put into the website."
      ),
      p(
        "Printed materials are slow to change and cheap to forget about, which is why they drift. The fix is not better design. It is one master sheet that the website, the printed pieces and your listings all copy from."
      ),
      h2("The master sheet"),
      table(
        ["Item", "Where it must match"],
        ["Practice name", "Website header, Google profile and directories. Our guide on [practice name consistency](/guides/practice-name-abbreviations-and-legal-name-consistency-across-insurance-directories-and-google-for-a-counseling-practice) explains the sheet."],
        ["Address and suite", "Contact page and Google profile, written the same way."],
        ["Phone number", "The visible format used on the site, with the same number the Google profile shows."],
        ["Hours", "Website, Google profile and holiday notices. If hours change often, print the days and leave the details to the web address."],
        ["Web address", "A short address that goes to one real page. Check it every time you reprint."],
      ),
      p(
        "Take every line from the sheet, not from the last card you printed. Old files are exactly how last year's number reaches this year's order."
      ),
      h2("Use a web address that will still work"),
      p(
        "Printed addresses cannot be edited after the box arrives, so choose ones that last. Point a QR code or a short link to a stable page, such as your new patient page or contact page, not to a campaign page you may retire. Our guide to [QR codes and short links](/guides/qr-codes-and-short-links-for-review-requests-at-a-medical-practice) explains how to set them up so you can change the destination later, and [UTM links for profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice) shows how to tell visits from print apart in your reports."
      ),
      p(
        "Test every QR code on two different phones before sending the file to the printer, in the same light and at the same size as the printed result. A code printed too small, or with too little blank margin, fails in a waiting room."
      ),
      h3("What to write in plain words"),
      ul(
        "Write at a level most readers can take in quickly. Federal plain-language guidance recommends short sentences and common words.",
        "Print the phone number large enough to read without glasses, and show what to do if the office is closed.",
        "State the cancellation notice in one clear line that matches the written policy on your website.",
        "Do not print medical claims, results or comparisons to other practices.",
        "Leave patient names and health details off anything that is not given directly to that patient."
      ),
      h2("Proof it against the live site"),
      ol(
        "Open the live website on a phone and the printer's proof side by side.",
        "Check the name, address, phone, hours and web address line by line against the master sheet.",
        "Scan the QR code and confirm it lands on the intended page and that the page loads quickly.",
        "Have someone who did not write it read the card out loud and call the number on the proof to check it connects.",
        "Sign off in writing, with the date, and keep the file."
      ),
      h2("Keep print and listings in step"),
      p(
        "When the website changes, the master sheet changes first, then the site, the Google profile and the next print order. Keep a short list of what is in circulation: appointment cards in the front desk drawer, brochures in the waiting room, a flyer at a community partner. Replace old stock when the details change, rather than letting it run out. Ask the printer for a small first run whenever you are unsure, because a short reprint costs far less than a box of cards with the wrong number, and keep one signed proof with the order date so you can tell later which version is on the shelf. See the guide on [what to bring to a first appointment](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) for wording that works on both a page and a card."
      ),
    ],
    faqs: [
      {
        q: "How often should we reprint appointment cards?",
        a: "Only when something on them changes, but check the details against the website every time you order. Avoid ordering a very large supply of anything that carries hours or a web address that might change.",
      },
      {
        q: "Should we print our full web address or a short link?",
        a: "A short, easy address that points to one stable page works best. Make sure it does not break if you redesign the site, and test it before each print order.",
      },
      {
        q: "Do QR codes belong on appointment cards?",
        a: "They can help patients reach a page such as a portal or directions. Always print the web address in words beside the code, because not everyone scans.",
      },
      {
        q: "Can a brochure include patient stories?",
        a: "Be careful. Anything about a real patient needs written permission, and practices should not print outcome claims or promises. Ask your attorney before using any patient story in print.",
      },
      {
        q: "Who should approve the proof?",
        a: "Someone who did not write it, checking against the master sheet and the live website. A second pair of eyes catches the wrong digit that the author no longer sees.",
      },
    ],
    citations: [PLAIN_LANGUAGE, GOOGLE_LOCAL, WCAG_TARGET],
    links: [
      { href: "/guides/qr-codes-and-short-links-for-review-requests-at-a-medical-practice", label: "QR Codes And Short Links", description: "Set up codes you can change later." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "Wording for the first contact." },
      LOC,
    ],
  },
];
