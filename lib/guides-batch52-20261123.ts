// -- Guides batch 52 - 2026-11-23 (afternoon run) --
// Seven website how-to guides from the Command Center queue (rows 2024, 2025, 2027, 2028, 2029, 2031, 2032), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is
// built from the W3C WAI WCAG Understanding page for its criterion (or the W3C WAI tables tutorial, the W3C CAPTCHA note, or
// the Chrome for Developers Lighthouse scoring page), fetched and read before writing. Plain practical guidance, no legal
// advice, no outcome promises, no patient details, no prices. Rows 2023, 2026 and 2030 were skipped as already covered by live guides.

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
const WCAG_INFO = W("Understanding Success Criterion 1.3.1: Info and Relationships", "info-and-relationships");
const WCAG_NAV = W("Understanding Success Criterion 3.2.3: Consistent Navigation", "consistent-navigation");
const WCAG_SEQ = W("Understanding Success Criterion 1.3.2: Meaningful Sequence", "meaningful-sequence");
const WCAG_MOTION = W("Understanding Success Criterion 2.3.3: Animation from Interactions", "animation-from-interactions");
const WCAG_AUTH = W("Understanding Success Criterion 3.3.8: Accessible Authentication (Minimum)", "accessible-authentication-minimum");
const WCAG_RESIZE = W("Understanding Success Criterion 1.4.4: Resize Text", "resize-text");
const W3C_CAPTCHA = {
  publisher: "W3C Accessible Platform Architectures Working Group",
  label: "Inaccessibility of CAPTCHA (Group Draft Note)",
  href: "https://www.w3.org/TR/turingtest/",
};
const WAI_TABLES = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Tables Tutorial",
  href: "https://www.w3.org/WAI/tutorials/tables/",
};
const WAI_TABLES_IRREGULAR = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Tables with Irregular Headers",
  href: "https://www.w3.org/WAI/tutorials/tables/irregular/",
};
const LH_SCORE = {
  publisher: "Chrome for Developers",
  label: "Lighthouse accessibility score",
  href: "https://developer.chrome.com/docs/lighthouse/accessibility/scoring",
};
const AXE_VIEWPORT = {
  publisher: "Deque Systems",
  label: "axe rule: Zooming and scaling must not be disabled",
  href: "https://dequeuniversity.com/rules/axe/4.10/meta-viewport",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const KB = { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." };
const ADA = { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." };
const SR = { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your contact page the way a patient does." };

export const guidesPartForty15: Guide[] = [
  // ---------------------------------------------------------------- 2024
  {
    slug: "required-fields-on-the-contact-form-of-a-counseling-practice-website-marked-with-more-than-a-red-color",
    keyword: "required fields on a contact form marked by more than a red color so every patient can tell",
    category: "Checklist",
    title: "Marking Required Fields With More Than Red on a Contact Form",
    metaTitle: "Required Form Fields Marked Beyond Red Color",
    metaDescription:
      "If red is the only sign a field is required, some visitors miss it. Four plain ways to mark required fields on a practice form. Call (561) 291-2681.",
    answer:
      "Do not let red be the only sign that a field is required. Add a word or symbol in the label, explain the symbol once above the form, and mark the field in the page code too, so patients who cannot tell red from grey, or who use a screen reader, still know what to fill in.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The red asterisk problem"),
      p(
        "A common contact form shows a small red star beside the name and phone fields and nothing else. A visitor who sees colors differently, or who is using a phone in bright sun, may see two grey marks and no difference between a required field and an optional one. They send the form, get an error, and some of them give up."
      ),
      p(
        "On a counseling or primary care page that is a lost first contact. The person who reaches your form is often already hesitant to call, so a form that scolds them for something they could not see is a poor start."
      ),
      h2("What the W3C says about color"),
      p(
        "The Use of Color criterion, which we read in full before writing this, says color must not be the only visual way to convey information, indicate an action or prompt a response. Its own examples include a form where required fields are shown in red, and highlighting a field to show it was left blank. The goal it states is simple: not everyone sees colors, or sees them the same way."
      ),
      p(
        "The same page adds two useful details. A pair of colors that also differ clearly in lightness, with a contrast ratio of at least 3 to 1, counts as an added visual cue. But if a field relies on a person telling one particular color from another, such as a green outline for valid and a red outline for invalid, a second indicator is needed regardless of the ratio."
      ),
      table(
        ["How the field is marked", "Enough on its own?"],
        ["Red label text only", "No, the only cue is color"],
        ["Red asterisk, and the form never says what the asterisk means", "No, a symbol with no explanation is easy to misread"],
        ["The word Required in the label, any color", "Yes"],
        ["Asterisk plus a line above the form saying asterisk means required", "Yes"],
        ["Optional fields labeled Optional, required fields left plain", "Yes, if the form says so near the top"]
      ),
      h2("Four ways to do it, from simplest"),
      ol(
        "Write the word in the label: Phone number (required). It is the clearest option for a short form.",
        "Use an asterisk and say so once: place a line such as All fields marked with an asterisk are required directly above the first field.",
        "Mark optional fields instead, when most of the form is required, with the word Optional.",
        "Ask your developer to mark required fields in the code as well as on screen, so assistive technology announces them."
      ),
      p(
        "The W3C's Info and Relationships page gives almost the same example: a text note such as all required fields are marked with an asterisk, placed near the information it describes. It also says that where the technology supports it, relationships should be marked in the code and not only described in words."
      ),
      h3("What a short practice form needs"),
      p(
        "Most practice forms should ask for very little. Name and phone are enough for a callback, as our guide to [first-time client contact forms](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) explains. Fewer required fields means fewer places for a patient to trip, and no color rule to worry about on the fields you removed."
      ),
      h2("A five-minute test"),
      ol(
        "Open your contact form and take a screenshot.",
        "Turn the screenshot to black and white, which most phone photo editors can do.",
        "Look at it for ten seconds and write down which fields are required.",
        "Compare with what you meant. Any mismatch means color is carrying the message.",
        "Repeat with a screen reader, following our [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills), and listen for the word required."
      ),
      p(
        "Once the marking works, check what happens after a mistake: our guide to [form error messages](/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details) covers wording that says what went wrong. We do not give legal advice, and marking fields clearly does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is a red asterisk ever acceptable?",
        a: "Yes, when it is paired with something else. An asterisk that is explained in a line above the form passes the idea behind the W3C criterion, because the meaning is in text. Red can stay as decoration. The problem is only when red is the sole way a person can tell.",
      },
      {
        q: "Should I use the word Required or Optional?",
        a: "Pick whichever label applies to fewer fields. If a form has two required fields and three optional ones, mark the two. Whichever you choose, say it once near the top of the form so a visitor does not have to guess the rule.",
      },
      {
        q: "Does the placeholder text inside the box count as marking?",
        a: "No. Placeholder text vanishes when someone starts typing and is often pale grey. Put the word in the visible label above the box, where it stays on screen for the whole time the person fills in the field.",
      },
      {
        q: "Does this also apply to the error state?",
        a: "Yes. A field that turns red after a mistake needs words beside it saying what to fix, not only a red border. The W3C uses a highlighted field for a blank required entry as one of its examples of color used alone.",
      },
      {
        q: "Who should make the change on my site?",
        a: "Your web designer or the form plugin settings can do it in a few minutes. Send them one sentence: required fields must be marked with text or a symbol that the form explains, and also in the page code. Then retest with the black and white screenshot.",
      },
    ],
    citations: [WCAG_COLOR, WCAG_INFO],
    links: [
      { href: "/guides/form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details", label: "Form Error Messages", description: "Say what went wrong in words." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Forms for low-vision patients." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2025
  {
    slug: "same-menu-order-on-every-page-of-a-counseling-practice-website-so-a-returning-visitor-finds-the-contact-link",
    keyword: "the same menu order on every page of a counseling practice website so a returning visitor finds the contact link in the same place",
    category: "Checklist",
    title: "Keeping the Menu in the Same Order on Every Practice Page",
    metaTitle: "Same Menu Order on Every Practice Website Page",
    metaDescription:
      "When the menu reorders from page to page, returning visitors lose the contact link. A four-step check for a counseling practice site. (561) 291-2681.",
    answer:
      "Repeated menus should list their items in the same relative order on every page. A returning visitor, a person using screen magnification and a person using a screen reader all learn where the Contact link sits, and a menu that reshuffles from page to page takes that learning away.",
    author: "Liam Costello",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The menu that moves"),
      p(
        "Practice sites grow in layers. The home page was built by one designer, the blog by a plugin, the insurance page by a second designer, and the contact page by whoever was available that week. Each layer can bring its own menu. The result is a site where Contact is last on one page, second on another, and missing from a third."
      ),
      p(
        "A returning visitor, such as a client who is looking for the office phone number on a hard day, expects the link where it was last time. When it has moved, they hunt, and some do not hunt for long."
      ),
      h2("What the W3C asks for"),
      p(
        "The Consistent Navigation criterion, which we read in full, says navigation that repeats across pages in a set must keep the same relative order each time, unless the visitor initiates a change. The W3C explains why: people with low vision who use screen magnification see only a small portion of the screen and rely on visual cues and page boundaries to find repeated content. People who use spatial memory, and blind visitors who move through a page one item at a time, benefit from the same predictability."
      ),
      p(
        "The page is also clear about what is allowed. Same order does not forbid sub-menus or secondary navigation. A menu can expand to show sub-items. What it should not do is present the same links in a different relative order from one page to the next. The W3C lists presenting navigation links in a different relative order on different pages as a known failure of this criterion."
      ),
      h2("Audit it in four steps"),
      ol(
        "List the page types on your site: home, a service page, a team page, a guide or blog post, the insurance page and the contact page.",
        "Open one page of each type in a desktop browser and write down the main menu items left to right.",
        "Repeat on a phone, where the menu is usually behind a button, and write the order again.",
        "Compare the lists. Items can be added or hidden in the phone menu, but the items that remain should keep their relative order."
      ),
      table(
        ["Page type and menu order found", "Matches the home page?"],
        ["Home: Services, About, Insurance, Contact", "Reference"],
        ["Service page: Services, About, Insurance, Contact", "Yes"],
        ["Blog post from a plugin: Contact, Services, Blog", "No, Contact moved to the front"],
        ["Contact page: Services, Contact, About", "No, order changed"]
      ),
      h3("The example table is made up"),
      p(
        "The rows above show the shape of a result, not a real practice. Fill in your own pages and look for any row that says No."
      ),
      h2("Fixes that hold"),
      ul(
        "Use one shared menu in the site template, so every page draws it from the same place rather than each having its own copy.",
        "When a plugin or page builder adds a second menu, set it to use the same menu location instead of its default.",
        "If a landing page for a campaign shows a shorter menu, keep the remaining links in the same relative order and keep the Contact link where it sits elsewhere.",
        "Write the order into your site notes, so the next person who adds a page knows the order is a rule."
      ),
      p(
        "Our guide to the [navigation menu and footer](/guides/navigation-menu-and-footer-for-a-medical-practice-website) covers which items belong in a practice menu at all. The companion guide on [keeping the phone number in the same place](/guides/keeping-the-phone-number-and-contact-link-in-the-same-place-on-every-page-of-a-medical-practice-website) deals with the call button rather than the menu order. We do not give legal advice, and a consistent menu does not alone make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does the menu have to look identical on every page?",
        a: "No. The W3C asks for the same relative order, not identical styling. A menu may expand, collapse into a button on a phone or highlight the current page. What matters is that the links which appear keep the same sequence from page to page.",
      },
      {
        q: "Can I add a new menu item later?",
        a: "Yes, and the new item should appear in the same spot on every page where the menu appears. Adding it to the home page only, or only to new pages, is the usual way menus drift out of order over a few months.",
      },
      {
        q: "What about the footer links?",
        a: "The same idea applies to any repeated block, including the footer. The footer links should keep one order across the site as well. Check them in the same pass as the main menu, since they are often edited by a different person.",
      },
      {
        q: "Is it all right to change the menu for a short campaign page?",
        a: "A shorter menu on a campaign page is a judgment call. The safest approach is to keep the links that remain in the same relative order, keep Contact in its usual position and make sure the page still has a way back to the main site.",
      },
      {
        q: "How often should I check this?",
        a: "Check after any redesign, plugin update or new section. A five-minute pass across six page types is enough. Put it on the calendar next to your other site checks, so it happens even when nobody remembers to look.",
      },
    ],
    citations: [WCAG_NAV],
    links: [
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation Menu and Footer", description: "What belongs in a practice menu." },
      { href: "/guides/keeping-the-phone-number-and-contact-link-in-the-same-place-on-every-page-of-a-medical-practice-website", label: "Phone Number in the Same Place", description: "The call button on every page." },
      KB,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2027
  {
    slug: "reading-order-of-a-counseling-practice-contact-page-when-the-phone-layout-moves-the-form-above-the-address",
    keyword: "reading order of a contact page that still makes sense when the phone layout moves the form above the address",
    category: "Checklist",
    title: "Reading Order on a Contact Page When the Phone Layout Moves Things",
    metaTitle: "Contact Page Reading Order on Phone Layouts",
    metaDescription:
      "A phone layout can show the form first while a screen reader still reads the address first. How to check the order on a practice page. (561) 291-2681.",
    answer:
      "The order a screen reader reads a page comes from the page code, not from how it looks. When the phone layout rearranges the contact page visually, check that the reading and Tab order still makes sense: heading, then how to reach you, then the form.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("Two orders on one page"),
      p(
        "Every web page has two orders. One is the order a sighted visitor sees, from the top of the screen down. The other is the order in the page code, which is what a screen reader reads aloud and what the Tab key follows. Usually they agree. On a phone layout built with style rules that move boxes around, they can drift apart."
      ),
      p(
        "A typical case is a contact page with the address and map on the left and the form on the right on a desktop. On a phone, a designer stacks them with the form first. If the page code still lists the address first, a visitor who tabs through the page lands in the address block, jumps down to the form, then climbs back. The picture says form first, the keyboard says address first."
      ),
      h2("What the W3C requires"),
      p(
        "The Meaningful Sequence criterion, which we read in full, says that when the order of content affects its meaning, a correct reading order must be available to software. Two points from the same page matter for a practice site. First, a particular order is required only where it affects meaning, so a sidebar and a main block can swap without harm. Second, more than one order can be correct, and only one correct order needs to be provided."
      ),
      p(
        "The listed techniques include making the order in the code match the visual order, and the listed failures include changing the meaning of content by positioning it with style rules. In plain terms: if the sequence is part of the meaning, the code order should be right."
      ),
      h2("Where meaning depends on order on a contact page"),
      table(
        ["Part of the page", "Does order matter?"],
        ["Heading, then the line telling a visitor how to reach you", "Yes, the heading introduces what follows"],
        ["Form labels and the fields under them", "Yes, a label must sit next to its own field"],
        ["Steps such as Fill in the form, then We call you within one business day", "Yes, the steps are a sequence"],
        ["Map and a block of parking notes", "Rarely, either can come first"]
      ),
      h2("Check it without a developer"),
      ol(
        "Open the contact page on a desktop and shrink the browser window narrow until the phone layout appears.",
        "Click a blank spot at the top of the page and press Tab repeatedly.",
        "Watch the highlight. It should travel down the screen in the order your eyes would read.",
        "Any jump back up the screen means the code order and the visual order disagree.",
        "Repeat after turning on a screen reader, following our [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills), and listen to whether the page makes sense heard in sequence."
      ),
      h3("What usually causes it and how to fix it"),
      p(
        "The usual cause is a style rule that reorders boxes visually on small screens without changing the page code. The fix belongs to your designer: move the blocks in the code itself, so one order serves both views, and test the result by tabbing rather than by reading the code. If both orders are equally sensible, a visual reorder is fine."
      ),
      p(
        "Related checks are in our guide to [zoomed text and phone reflow](/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways) and the [focus outline and tab order guide](/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website). We do not give legal advice, and a matching reading order does not alone make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Will a visitor ever notice the order in the code?",
        a: "Yes, if they use a screen reader, tab through the page or use a tool that restyles it. Visitors who only look at the screen will never see it, which is why the problem hides for years. A two-minute Tab test shows it at once.",
      },
      {
        q: "Does this apply only to the contact page?",
        a: "No. Any page that moves blocks around on a phone can have the same gap, including service pages with a side panel and the new patient page. The contact page matters most because it carries the form and the phone number.",
      },
      {
        q: "Can the form really come before the address?",
        a: "Yes. The W3C says only one correct order needs to exist and that sections that do not change each other's meaning may swap. The point is to keep the code and the screen telling the same story, whichever order you choose.",
      },
      {
        q: "Is the DOM order the same as the page code order?",
        a: "Close enough for this guide. The browser builds the page from the code, and assistive technology reads that structure. When your developer says the order of the DOM matches the visual order, they mean what we describe here.",
      },
      {
        q: "What should I ask my web designer?",
        a: "Ask one question: does the order of the blocks in the code match the order on the phone screen, and can you show me by tabbing through the live page? If they answer yes, you are done. If not, ask them to move the blocks in the code.",
      },
    ],
    citations: [WCAG_SEQ],
    links: [
      { href: "/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website", label: "Focus Outline and Tab Order", description: "Show where keyboard focus is." },
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Pages that do not scroll sideways." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2028
  {
    slug: "parallax-and-scroll-animation-on-the-home-page-of-a-primary-care-practice-that-a-motion-sensitive-patient-can-turn-off",
    keyword: "parallax and scroll animation on a practice home page that a patient sensitive to motion can turn off",
    category: "Checklist",
    title: "Parallax and Scroll Animation a Motion-Sensitive Patient Can Turn Off",
    metaTitle: "Parallax and Scroll Animation on a Practice Site",
    metaDescription:
      "Scroll effects can make some visitors dizzy or sick. How a practice home page can respect the reduce motion setting and stay calm. Call (561) 291-2681.",
    answer:
      "Scroll effects that slide, fade or drift elements as a visitor scrolls can cause dizziness or nausea for people with vestibular disorders. A practice page should either skip the extra motion or switch it off when a visitor has turned on Reduce Motion in their phone or computer settings.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("When a pretty effect makes someone ill"),
      p(
        "Many practice home pages use scroll effects: a background that drifts at a different speed from the text, headings that slide in from the side, photos that zoom as you move down the page. A designer sees polish. A visitor with a vestibular disorder, which affects balance and the inner ear, can feel dizzy or sick after a few seconds of it."
      ),
      p(
        "For a counseling or primary care practice the harm is double. The page is meant to feel safe and calm, and the people most likely to reach it are those already having a hard time."
      ),
      h2("What the W3C says"),
      p(
        "The Animation from Interactions criterion, which we read in full, says motion animation triggered by interaction can be disabled, unless the animation is essential to the function or the information. Its own explanation names scrolling effects directly: if scrolling a page makes elements move beyond the essential movement of scrolling, it can trigger vestibular reactions, and parallax scrolling is given as a common non-essential example. The reactions it lists include dizziness, nausea and headaches, and it notes the impact can be quite severe."
      ),
      p(
        "One honest point. This criterion is Level AAA, the highest and most demanding level, so it is not part of the usual targets for most sites. We still recommend it for practice pages, because the cost is low and the people affected are real. The W3C also says that movement caused by the visitor scrolling is allowed, and moving new content into view is the essential part of scrolling."
      ),
      h2("Three ways to stay safe"),
      ul(
        "Avoid unnecessary animation. A page with no parallax needs nothing else.",
        "Respect the setting a visitor has already chosen. The W3C lists the CSS reduced motion query as a sufficient technique, so when the visitor's device says Reduce Motion, the page turns the effects off.",
        "Offer a control on the page that turns non-essential animation off for the whole site."
      ),
      table(
        ["Effect on the home page", "Safer choice"],
        ["Background image moves slower than the text", "Fix the background in place or use a still image"],
        ["Headings slide in from the side while scrolling", "Show them in place, or fade without movement"],
        ["Photos zoom as they enter view", "Show the photo at its final size"],
        ["Counters that spin up as you scroll", "Show the final number"]
      ),
      h2("Test it in five minutes"),
      ol(
        "Open your home page on your phone and scroll slowly from the top to the footer. Note every element that moves other than the page itself.",
        "Turn on Reduce Motion in the phone's accessibility settings. The W3C page links to the instructions for iPhone, Mac and Windows.",
        "Reload the page and scroll again.",
        "Anything that still glides, slides or zooms is movement your page did not switch off."
      ),
      h3("What to tell your designer"),
      p(
        "Ask them to wrap decorative motion in the reduced motion style rule, and to confirm by switching the setting on and scrolling the live page. Related guides cover [pausing sliders and autoplay video](/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website) and [menus and tooltips that vanish](/guides/menus-and-tooltips-that-vanish-before-a-patient-can-read-them-on-a-counseling-practice-website). We do not give clinical or legal advice, and switching off motion does not guarantee any outcome for a visitor."
      ),
    ],
    faqs: [
      {
        q: "Is this the same as pausing a carousel?",
        a: "No. Pausing handles motion that starts by itself, such as an auto-advancing slider. This guide covers motion that a visitor's own scrolling or clicking sets off. The W3C treats the two as separate criteria, and a single effect can fail both.",
      },
      {
        q: "Does turning off motion make the site look plain?",
        a: "Not if the layout is good. The text, photos and buttons stay exactly where they are. Only the travel between positions goes away. Many designers find a still page loads faster and reads more clearly, which helps every visitor.",
      },
      {
        q: "How would a visitor turn it off?",
        a: "Most phones and computers have a Reduce Motion setting in their accessibility menu. A page that respects it needs no extra button. A page with a visible on-page switch also works, as long as the switch is easy to find and remembers the choice.",
      },
      {
        q: "Do the animated icons on my page count?",
        a: "Small effects such as a button gently changing color are rarely a problem. The concern is large movement across the screen, such as sliding, zooming or background drift. If you are unsure, test with Reduce Motion on and see whether the item still moves.",
      },
      {
        q: "Is this a legal requirement?",
        a: "We cannot say, and we do not give legal advice. The criterion is Level AAA, which many standards do not require. We recommend it because it is a low-cost kindness to visitors who are already unwell, not because a particular rule demands it.",
      },
    ],
    citations: [WCAG_MOTION],
    links: [
      { href: "/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website", label: "Pausing Carousels and Autoplay Video", description: "Stop motion that starts by itself." },
      { href: "/guides/trauma-informed-website-wording-for-a-counseling-practice-without-clinical-claims", label: "Trauma-Informed Website Wording", description: "A calm page, in words." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2029
  {
    slug: "stopping-contact-form-spam-on-a-medical-practice-website-without-a-puzzle-captcha-that-locks-out-a-patient",
    keyword: "stopping contact form spam without a puzzle CAPTCHA that locks out a patient who cannot solve it",
    category: "How-to",
    title: "Stopping Contact Form Spam Without a Puzzle That Locks Patients Out",
    metaTitle: "Contact Form Spam Without a Puzzle CAPTCHA",
    metaDescription:
      "Picture puzzles lock out patients with low vision or learning difficulties. Quieter ways to stop spam on a practice contact form. Call (561) 291-2681.",
    answer:
      "Start with defenses a patient never sees: a hidden trap field, server-side spam filtering and sensible limits. Add an interactive challenge only if spam keeps getting through, and then prefer one that does not ask the visitor to solve a puzzle or retype distorted text.",
    author: "Liam Costello",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 6,
    sections: [
      h2("The cost of a puzzle on a contact form"),
      p(
        "A spam-filled inbox is a real nuisance, and the usual cure is a challenge in front of the Send button: pick the traffic lights, type the wobbly letters. For a practice that cure has a price. A visitor with low vision, a learning difference, a tremor or a bad day may fail the puzzle three times and close the page. You never see that lead, because it never arrived."
      ),
      p(
        "The W3C's own note on the subject opens with this problem. It says interactive approaches ask people to do a task believed easy for humans and hard for robots, and that the nature of the task excludes many people with disabilities."
      ),
      h2("What the W3C note recommends first"),
      p(
        "That note, Inaccessibility of CAPTCHA, which we read before writing, describes non-interactive alternatives that put no demand on the visitor. Four of them suit a small practice form."
      ),
      table(
        ["Method", "What the W3C note says in short"],
        ["Spam filtering", "Flags suspicious content on the server; properly tuned systems can match a visual CAPTCHA without burdening the user"],
        ["Honeypot field", "A field hidden from people so only robots fill it; easy to add even by hand and worth considering"],
        ["Heuristics", "Look for robot patterns such as speed or repeated requests; needs careful examination of your own site data"],
        ["Limits", "Slow or restrict repeated use; needs testing so real visitors are not caught"]
      ),
      p(
        "Its conclusion is direct: users should not be forced beyond what is strictly necessary to keep a site secure, and if a honeypot suffices, use a honeypot until evidence of robotic attacks dictates something else."
      ),
      h2("How to hide a trap field properly"),
      p(
        "A honeypot has one risk of its own. If the extra field is visible to a screen reader or reachable with the Tab key, a patient may fill it in by honest mistake, and the form silently throws their message away. Ask your developer to hide it from view and from assistive technology, remove it from the Tab order and test with a real submission that leaves it blank."
      ),
      h3("A sensible order to try"),
      ol(
        "Hidden trap field plus a minimum time-to-submit check on the server.",
        "Filtering of message text for links and known spam phrases, with questionable messages sent to a review folder rather than deleted.",
        "A limit on how many submissions one address can make in an hour.",
        "Only if spam still gets through: an interactive challenge that runs in the background for most people, with a plain alternative route for anyone it blocks."
      ),
      h2("Where the sign-in rule fits"),
      p(
        "A practice that has a patient portal should know the related W3C rule. Accessible Authentication (Minimum) says a cognitive function test, such as remembering a password or solving a puzzle, must not be required to sign in unless there is another method, a helper or one of two narrow exceptions. That rule is written about logging in to an existing account. A contact form is not authentication, so it does not strictly apply, but the reasoning carries over: do not make a person solve something to reach you."
      ),
      p(
        "We cover the portal side separately in our guide to a [portal sign-in that allows a password manager and paste](/guides/patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website). For delivery problems after a form is sent, see the [spam and delivery test](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website). We do not give legal or security advice, so confirm the setup with your web developer."
      ),
    ],
    faqs: [
      {
        q: "Will removing the puzzle flood my inbox?",
        a: "It might at first, which is why the quiet layers matter. A hidden field, server-side filtering and limits stop most automated submissions without any visitor effort. Watch your inbox for two weeks, and add a stronger measure only if the numbers call for it.",
      },
      {
        q: "Are newer checkbox or background challenges safe for accessibility?",
        a: "They vary. The W3C note says some current non-interactive approaches have their own drawbacks, including privacy concerns. If you choose one, test it with a keyboard and a screen reader and confirm a patient who is blocked has another way to reach you, such as a phone number beside the form.",
      },
      {
        q: "Does the sign-in rule require me to remove the challenge on my contact form?",
        a: "Not as written, because that rule covers authentication of existing accounts. We recommend following its spirit anyway. A new patient is not a bot suspect, and a form that blocks them costs you a lead.",
      },
      {
        q: "What should the form say if a message is blocked?",
        a: "Say it plainly and give another way: Your message did not send. Please call the office. Show the phone number as a tap-to-call link. Never say only that the form failed, since a hesitant patient may not try again.",
      },
      {
        q: "Who sets this up?",
        a: "Your web developer or the form plugin's settings. Send them the list in this guide in order, and ask them to prove a blank trap field passes and a filled one is rejected. Then submit one real test message of your own.",
      },
    ],
    citations: [W3C_CAPTCHA, WCAG_AUTH],
    links: [
      { href: "/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website", label: "Contact Form Spam and Delivery Test", description: "Make sure messages arrive." },
      { href: "/guides/patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website", label: "Portal Sign-In With Password Manager", description: "No retyping to log in." },
      ADA,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2031
  {
    slug: "office-hours-and-insurance-tables-on-a-medical-practice-website-built-with-real-header-cells-for-screen-readers",
    keyword: "office hours and insurance tables on a practice website built with real header cells so a screen reader reads each row correctly",
    category: "Checklist",
    title: "Office Hours and Insurance Tables With Real Header Cells",
    metaTitle: "Hours and Insurance Tables With Header Cells",
    metaDescription:
      "A hours or insurance table that only looks like a table reads as a pile of words to a screen reader. How to check the header cells. Call (561) 291-2681.",
    answer:
      "A table of hours or accepted insurance must mark its top row and first column as header cells in the page code. Then a screen reader can say Tuesday, opens 9 or Plan name, accepted, instead of reading a list of unlabeled words with no connection between them.",
    author: "Liam Costello",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("A table that only looks like one"),
      p(
        "Hours and insurance lists are the two tables a practice site most needs. Many are built by making cells bold or shaded, and nothing in the page code says which cell is a heading. To a sighted visitor the layout does the work. To a screen reader, the page is a string of cells, and a visitor hears something like Monday nine five Tuesday nine five with no sense of which time is opening and which is closing."
      ),
      p(
        "That matters most for the facts patients check before they call: when are you open and does the practice take my plan."
      ),
      h2("What the W3C tutorial says"),
      p(
        "The W3C Tables Tutorial, which we read, states the rule briefly: header cells must be marked with the th element and data cells with the td element to make a table accessible. It adds that for more complex tables, explicit links between headers and cells may be needed through the scope, id and headers attributes. The reason it gives is that screen readers speak one cell at a time and use the associated headers so the listener does not lose context."
      ),
      p(
        "The Info and Relationships criterion says the same in general terms: when information is shown by rows and columns, the relationship of each cell to its row and column header must be available to software, not only visible."
      ),
      table(
        ["Table type", "What to mark"],
        ["Hours: days down the side, open and close across the top", "Both the top row and the day names as headers, using the scope attribute"],
        ["Insurance: plan name down the side, one column for accepted", "Top row as column headers, plan names as row headers"],
        ["Hours with a lunch closure split into two rows", "Treat as an irregular table and check with the W3C page on irregular headers"],
        ["A layout grid used only to place pictures", "Not a data table; use ordinary styling instead"]
      ),
      h2("Check your own tables"),
      ol(
        "Open the hours page and right-click the table, then choose Inspect.",
        "Look for th tags in the first row. If every cell shows td, no cell is marked as a header.",
        "Look at the first column. If days or plan names are td, they are not row headers either.",
        "Turn on a screen reader and move through a row, following our [screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills), and listen for the column name before each time.",
        "Repeat for the insurance table and any fee-free schedule tables on service pages."
      ),
      h3("Tables with two header levels"),
      p(
        "If your hours table has a header that spans several columns, such as Morning and Afternoon over two sub-columns, the W3C irregular tables page shows how to set a range with colgroup and the scope attribute. Ask your developer to follow that example and to test it by listening, not by reading code."
      ),
      p(
        "Accuracy comes first, whatever the markup. Our guide to [split hours and lunch closures](/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice) explains how to word the schedule, and the guide on a [clear accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) covers what the table should say. We do not give legal advice, and correct header cells alone do not make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Can I just use bold text for the headings?",
        a: "Bold is a visual change only. A screen reader does not know bold text is a heading. The cell has to be marked as a header in the code. Most page builders have a Header row option in the table settings that does it for you.",
      },
      {
        q: "Should I use a list instead of a table for hours?",
        a: "A short list of days and times also works well, especially on a phone, and the W3C describes tables as meant for data in a grid. If you keep a table, mark the headers. If your hours are simple, a list is often easier to build correctly.",
      },
      {
        q: "What is the scope attribute?",
        a: "It is a small tag on a header cell that tells software whether the header applies to a column or a row. For a plain table with one header row and one header column, it removes any doubt about direction. Your developer will know it by name.",
      },
      {
        q: "Does my website builder do this automatically?",
        a: "Some do and some do not. Do not assume. Inspect your live table, as in the steps above, and look for th tags. If you only see td, ask the builder's support how to turn on header cells for that table.",
      },
      {
        q: "Does this help search engines too?",
        a: "We cannot promise a ranking effect. Clear structure makes a page easier for software of every kind to read, but the reason to fix it is that a patient who uses a screen reader can then hear your hours correctly.",
      },
    ],
    citations: [WAI_TABLES, WAI_TABLES_IRREGULAR, WCAG_INFO],
    links: [
      { href: "/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice", label: "Split Hours and Lunch Closures", description: "Word a schedule with a gap." },
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "What the insurance table should say." },
      SR,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2032
  {
    slug: "pinch-zoom-blocked-on-a-medical-practice-website-phone-page-and-why-lighthouse-flags-it",
    keyword: "a practice website that blocks pinch zoom on a phone and why Lighthouse flags it",
    category: "Checklist",
    title: "Pinch Zoom Blocked on a Practice Phone Page and Why Lighthouse Flags It",
    metaTitle: "Pinch Zoom Blocked on a Practice Phone Page",
    metaDescription:
      "A page that blocks pinch zoom stops low-vision patients from enlarging text. How to find the setting, fix it and recheck. Call (561) 291-2681.",
    answer:
      "If your page cannot be pinched larger on a phone, the viewport setting in the page code is probably telling the browser to disable zoom. Remove that restriction. Patients with low vision rely on zoom to read hours and phone numbers, and Lighthouse and axe both flag its removal.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T20:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The one-line setting that blocks zoom"),
      p(
        "Every mobile page carries a small line in its code called the viewport tag. It tells the phone browser how wide to draw the page. Some templates add extra words to it that switch off pinch zoom, usually to stop the screen jumping when a visitor double-taps. The side effect is that a patient with low vision cannot enlarge your phone number or your hours."
      ),
      p(
        "That is a quiet failure. The page looks fine to everyone who can read it at normal size, and the people it shuts out do not complain; they leave."
      ),
      h2("What the standards and tools say"),
      p(
        "The W3C Resize Text criterion, which we read, asks that text can be resized without assistive technology up to 200 percent without loss of content or function. It says scaling is mainly the browser's job, and the author's job is to avoid preventing the browser from scaling the content. It lists a test rule named Meta viewport allows for zoom."
      ),
      p(
        "Two tools check the same thing. Chrome's Lighthouse accessibility score includes an audit that user-scalable is not set to no in the viewport tag and that the maximum scale is not less than 5, with a weight of 10, which is among its higher weights. The axe-core rule from Deque, titled Zooming and scaling must not be disabled, is stricter in a different way: it requires that the maximum scale is not less than 2, and it rates the user impact as critical, naming low vision as the group affected."
      ),
      table(
        ["Viewport setting", "Zoom allowed?"],
        ["width=device-width, initial-scale=1", "Yes, nothing blocks it"],
        ["Adds user-scalable=no", "No, flagged by Lighthouse and axe"],
        ["Adds maximum-scale=1", "No, the page cannot be enlarged"],
        ["Adds maximum-scale=5 or larger", "Yes, passes the Lighthouse limit"]
      ),
      h2("How to check and fix it"),
      ol(
        "On your phone, open your home page and spread two fingers on the text. It should grow.",
        "On a desktop, open the page in Chrome, right-click and choose View page source, then search for viewport.",
        "Read the line. If it contains user-scalable=no or a maximum-scale below 5, zoom is limited.",
        "Ask your developer or theme settings to remove those words and keep only the width and initial scale parts.",
        "Re-test on the phone, then run the Lighthouse accessibility audit and confirm the viewport item passes."
      ),
      h3("If the page jumps when zoomed"),
      p(
        "Usually a designer blocks zoom because the layout breaks when enlarged. The right fix is the layout, not the block. Our guide to [zoomed text and phone reflow](/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways) shows how to make a page behave when it is enlarged, and the guide to [tap target size](/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page) covers the call button."
      ),
      p(
        "Lighthouse is a good routine check, and we describe a monthly version in the [Lighthouse accessibility check guide](/guides/monthly-lighthouse-accessibility-check-of-five-key-pages-of-a-primary-care-practice-website). A passing audit is a hint, not proof, and we do not give legal advice."
      ),
    ],
    faqs: [
      {
        q: "Why would a designer block zoom on purpose?",
        a: "Usually to prevent a layout jump on double-tap, or because a page looked broken when enlarged. Neither is a good reason to remove zoom for everyone. The better fix is a layout that holds up when enlarged, which a developer can test in minutes.",
      },
      {
        q: "Can a patient turn zoom back on?",
        a: "Some phones let a visitor force zoom through accessibility settings, but a visitor should not need to know that. The W3C says the author's job is to avoid preventing the browser from scaling. Treat the page as the problem, not the visitor.",
      },
      {
        q: "Why does Lighthouse say 5 and axe say 2?",
        a: "They are different tools with different thresholds. Lighthouse lists a maximum scale of not less than 5, and the axe rule asks for not less than 2. The simplest path is to remove the maximum-scale and user-scalable words entirely, which satisfies both.",
      },
      {
        q: "Does allowing zoom hurt how the page loads?",
        a: "No. The viewport tag only governs how a visitor can scale the page after it loads. Removing the restriction has no effect on speed. It does expose any layout that cannot cope with being enlarged, which is worth knowing.",
      },
      {
        q: "How often should I check this?",
        a: "Check after any theme change or redesign, since a new theme can reintroduce the setting. A ten-second two-finger test on your phone, repeated on the home page, the contact page and one service page, is enough.",
      },
    ],
    citations: [WCAG_RESIZE, LH_SCORE, AXE_VIEWPORT],
    links: [
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Pages that survive enlargement." },
      { href: "/guides/monthly-lighthouse-accessibility-check-of-five-key-pages-of-a-primary-care-practice-website", label: "Monthly Lighthouse Check", description: "A routine accessibility audit." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior-Friendly Layout", description: "Large text and caregiver access." },
      LOC,
    ],
  },
];
