// -- Guides batch 51 - 2026-11-23 --
// Eight website how-to guides from the Command Center queue (rows 1972, 1973, 1974, 1975, 1976, 1926, 1927, 1922), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is
// built from the W3C WAI WCAG Understanding page for its criterion (or the W3C WAI page-structure tutorial, or the Chrome for
// Developers Lighthouse scoring page), fetched and read before writing. Plain practical guidance, no legal advice, no outcome
// promises, no patient details, no prices.

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
const WCAG_BYPASS = W("Understanding Success Criterion 2.4.1: Bypass Blocks", "bypass-blocks");
const WCAG_NTC = W("Understanding Success Criterion 1.4.11: Non-text Contrast", "non-text-contrast");
const WCAG_POINTER = W("Understanding Success Criterion 2.5.2: Pointer Cancellation", "pointer-cancellation");
const WCAG_IMG = W("Understanding Success Criterion 1.4.5: Images of Text", "images-of-text");
const WCAG_ORIENT = W("Understanding Success Criterion 1.3.4: Orientation", "orientation");
const WCAG_DRAG = W("Understanding Success Criterion 2.5.7: Dragging Movements", "dragging-movements");
const WAI_STRUCTURE = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Page Structure Tutorial",
  href: "https://www.w3.org/WAI/tutorials/page-structure/",
};
const WAI_REGIONS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Page Structure Tutorial: Page Regions",
  href: "https://www.w3.org/WAI/tutorials/page-structure/regions/",
};
const LH_SCORE = {
  publisher: "Chrome for Developers",
  label: "Lighthouse accessibility score",
  href: "https://developer.chrome.com/docs/lighthouse/accessibility/scoring",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty14: Guide[] = [
  // ---------------------------------------------------------------- 1972
  {
    slug: "skip-link-at-the-top-of-a-medical-practice-page-so-a-keyboard-user-reaches-the-phone-number-and-contact-form",
    keyword: "skip link at the top of a medical practice page so a keyboard user reaches the phone number and contact form",
    category: "Checklist",
    title: "A Skip Link So Keyboard Users Reach Your Phone Number and Form",
    metaTitle: "Skip Link for a Medical Practice Website Page",
    metaDescription:
      "A skip link lets a keyboard user jump past your menu to the phone number and contact form. Test yours in two minutes. Call (561) 291-2681.",
    answer:
      "A skip link is a small link at the very top of the page that jumps straight to the main content. Without one, a person who navigates by keyboard must step through every menu item on every page before reaching your phone number or contact form.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("Why the menu gets in the way"),
      p(
        "Picture a patient who cannot use a mouse, because of a hand injury, a tremor or a screen reader they rely on. They reach your home page and press the Tab key to move from link to link. Before they get anywhere near the phone number, they pass the logo, the main menu, every dropdown under it and probably a banner. On the next page they do it all again."
      ),
      p(
        "The W3C describes the same problem in its Bypass Blocks criterion, which we read in full before writing this. Its own example is a news page where a keyboard user needs to tab through roughly 40 links to reach the main story, and a screen reader user has to listen to about 200 words first. A practice menu is shorter, but the principle is identical: repeated blocks sit in front of the thing the visitor came for."
      ),
      h2("What a skip link is and what it must do"),
      p(
        "The criterion asks for a mechanism to bypass blocks of content that repeat on several pages. The most common way to provide one is a link placed first in the page order, reading something like Skip to main content, that moves focus to the start of the main area. Many sites hide it until a keyboard user tabs to it, which is fine as long as it appears on screen when it receives focus."
      ),
      table(
        ["Check", "What good looks like"],
        ["First Tab press from a fresh page", "The skip link appears and is the first thing highlighted"],
        ["Press Enter on it", "Focus lands at the top of the main content, not back at the top of the page"],
        ["Second Tab press", "Focus goes to the first link or field inside the main content"],
        ["On every page", "Same link, same place, so the habit carries across the site"]
      ),
      h3("Where it should land on a practice site"),
      p(
        "The link should land at the start of the content that matters, which on most practice pages is the heading followed by the call button and the form. If your phone number lives in the header, consider adding a second skip target to the contact form, so a keyboard user can reach it in two key presses instead of twenty."
      ),
      h2("A two-minute test you can run yourself"),
      ol(
        "Open your home page in a desktop browser and click once on a blank part of the page.",
        "Press Tab one time and watch whether a link appears at the top of the screen.",
        "Press Enter and check where the highlight lands next.",
        "Repeat on your contact page and on one service page.",
        "Write down any page where the first Tab press goes straight into the menu."
      ),
      p(
        "Small repeated pieces do not count as blocks. The W3C notes that individual words, phrases or single links are not blocks for this purpose, so a lone phone link in the header does not need its own bypass. A menu with a dozen links and dropdowns does."
      ),
      h2("A cheap automated hint"),
      p(
        "The Chrome Lighthouse tool weighs this too. According to Chrome for Developers, its accessibility score includes an audit that the page contains a heading, skip link or landmark region, and another that skip links are focusable. Those audits pass for several reasons besides a real skip link, so treat a green result as a hint rather than proof. Our guide to a [five-minute keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills) shows the manual check in more detail."
      ),
      h3("What to ask your developer"),
      p(
        "Send one plain sentence: add a skip link as the first focusable item on every page, make it visible on focus, and point it at the main content area. Ask them to confirm by tabbing through the live page rather than by reading the code. We do not give legal advice, and a skip link by itself does not make a site conform to any standard."
      ),
      p(
        "If you would rather have someone check the whole path from search result to phone call on your site, our [free audit form](/contact#contact-form) is where to ask."
      ),
    ],
    faqs: [
      {
        q: "Does every practice website need a skip link?",
        a: "Any page with a repeated menu or header before the main content is a candidate. A very short page with only a few links may not need one. The W3C treats repeated blocks, not single links, as the trigger. If the Tab key takes ten or more presses to reach your content, add one.",
      },
      {
        q: "Should the skip link be visible to everyone?",
        a: "It can stay hidden until a keyboard user tabs to it, as long as it becomes visible on focus. Hiding it completely, so it never appears, defeats the point for sighted keyboard users who cannot see where focus went. Many practices keep it visible only on focus.",
      },
      {
        q: "Is a skip link the same as a table of contents?",
        a: "No. A table of contents links to sections inside one long page, such as a guide. A skip link sits at the very top of every page and jumps past the repeated menu to the main content. A practice site can reasonably have both, serving two different needs.",
      },
      {
        q: "Will a skip link change how my page looks?",
        a: "Not for mouse and touch visitors, since it stays out of sight until a keyboard user tabs to it. Ask your developer to style it so it does not cover the logo or the phone number when it appears, and to check it on a phone-width screen.",
      },
      {
        q: "Can my website builder add one for me?",
        a: "Some themes include one and many do not. Do not assume. Press Tab once on your live home page: if no link appears, ask the builder's support or your developer how to add one, and test again after the change.",
      },
    ],
    citations: [WCAG_BYPASS, LH_SCORE],
    links: [
      { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." },
      { href: "/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website", label: "Focus Outline and Tab Order", description: "Show where keyboard focus is." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1973
  {
    slug: "pale-form-field-borders-and-button-outlines-on-the-contact-form-of-a-medical-practice-website",
    keyword: "form field borders and button outlines so pale they vanish on a medical practice contact form",
    category: "Checklist",
    title: "Form Borders and Button Outlines That Do Not Vanish on a Contact Page",
    metaTitle: "Pale Form Borders on a Practice Contact Form",
    metaDescription:
      "Light grey form borders can make a contact form hard to find for low-vision visitors. Learn the 3 to 1 rule and test yours. Call (561) 291-2681.",
    answer:
      "Any border, outline or icon a visitor needs to find a form field or button should contrast with its surroundings at 3 to 1 or better. A faint grey box on a white page looks tidy to a designer, but a patient with low vision may not see the field exists.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The form that looks empty"),
      p(
        "Many contact forms are styled as a white page with fields outlined in a very light grey, and the Send button as a pale outline with no fill. On a good monitor in a dim room that looks calm. On a phone in sunlight, or for a visitor with low vision, the fields can fade into the page and the form looks like a heading with nothing under it."
      ),
      p(
        "That matters for a practice because the contact form is where a new patient tells you they exist. If they cannot see where to type, they do not type."
      ),
      h2("What the W3C asks for"),
      p(
        "The Non-text Contrast criterion, which we read in full, sets a floor of 3 to 1 between a visual cue and the colors next to it. It applies to the visual information a person needs to identify a control and know how to operate it, plus indicators of state, such as whether a box is checked or a field is focused. The W3C also says to treat the ratio as a threshold with no rounding, so a measured 2.999 to 1 does not pass."
      ),
      p(
        "Two useful clarifications from the same page. First, a control does not need a visible boundary if it has other visible content that makes it recognizable, such as a button with clear text. Second, inactive controls, such as a greyed-out Send button before the form is filled, are exempt."
      ),
      table(
        ["Part of the form", "Needs 3 to 1 against what is next to it?"],
        ["Border of an empty text field", "Yes, it is how a visitor finds the field"],
        ["Outline of a button that has dark text inside", "Usually no, the text identifies the control"],
        ["Outline of a button with no fill and pale text", "Yes, and the text needs its own text contrast"],
        ["Check mark inside a checkbox", "Yes, it shows state"],
        ["Focus ring on the field being typed in", "Yes, it shows state"]
      ),
      h2("Check your own form in five minutes"),
      ol(
        "Open your contact page on a phone and turn the screen brightness down to about half.",
        "Hold the phone at arm's length and ask whether you can still point to every field.",
        "In a desktop browser, right-click a field border, choose Inspect and look at the border color value.",
        "Paste that value and the page background value into a free contrast checker and read the ratio.",
        "Repeat for the button outline, the checkbox and the focus ring."
      ),
      h3("What to ask for if a border fails"),
      p(
        "You rarely need a redesign. Darken the border one or two shades, or give the field a faintly tinted background that stands apart from the page. The W3C adds that very thin lines can render fainter than their stated color because of anti-aliasing, so a slightly thicker border is a safer choice than a thin one."
      ),
      h2("Related checks that are easy to confuse"),
      p(
        "Text contrast is a separate rule from this one, covered in our [ten-minute color contrast check](/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes). The two share a tool, so you can run both in one sitting. Fields also need visible labels, as we explain in the guide to [accessible intake forms](/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website). This page does not give legal advice and no color change guarantees compliance."
      ),
    ],
    faqs: [
      {
        q: "Do placeholder words inside a field fix a faint border?",
        a: "No. Placeholder text disappears as soon as someone types and is often pale grey, which fails text contrast on its own. A visible border or background that stands out from the page tells a visitor the field exists, and a separate label above it says what to type.",
      },
      {
        q: "Does the 3 to 1 rule apply to a button with dark text on a light fill?",
        a: "The text still needs the normal text contrast. The button's own edge usually does not need 3 to 1 when the text inside identifies it as a button, because the W3C says a boundary is not required when other visible content makes the control recognizable.",
      },
      {
        q: "What color ratio is 3 to 1 in plain terms?",
        a: "It is a measured ratio between two colors, not a color name. Mid-grey on white is often close to the line, and darker greys pass comfortably. A free contrast checker takes two color values and prints the ratio, so you do not need to judge it by eye.",
      },
      {
        q: "Does a pale disabled button count against us?",
        a: "The W3C exempts controls that are inactive. A Send button that is greyed out until the required fields are filled falls under that exception. Once it becomes active, its identifying cues need to meet the ratio, so check the active state as well.",
      },
      {
        q: "Will darker borders hurt the look of the page?",
        a: "A one or two shade change is rarely noticeable to someone who sees well and makes a real difference to someone who does not. Show your designer both versions on a phone outdoors or at low brightness before deciding, and keep the version you can see.",
      },
    ],
    citations: [WCAG_NTC],
    links: [
      { href: "/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes", label: "Text and Background Contrast Check", description: "The companion test for words." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Make forms readable for low vision." },
      { href: "/guides/autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less", label: "Contact Form Autofill Settings", description: "Fewer keystrokes for a new patient." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1974
  {
    slug: "stray-touch-on-the-call-or-book-button-of-a-practice-phone-page-and-pointer-cancellation",
    keyword: "pointer cancellation so a stray touch on the Call or Book button of a phone page does not fire by accident",
    category: "Checklist",
    title: "Stopping an Accidental Tap on the Call or Book Button",
    metaTitle: "Accidental Taps on a Practice Call or Book Button",
    metaDescription:
      "A call or book button that fires on touch-down cannot be cancelled by sliding away. Learn what the W3C asks for and test yours. (561) 291-2681",
    answer:
      "A call or book button should act when a finger is lifted, not when it first lands. That way a person whose hand slips can slide away and cancel. Standard links and buttons already work this way. Custom scripts that react to the touch-down are the usual cause of trouble.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The wrong number dialed by accident"),
      p(
        "Imagine a visitor with a tremor holding a phone on a bus. Their thumb brushes the Call button while scrolling. If the page reacts the instant a finger lands, the phone is already dialing your front desk, and your staff answers a call from someone who never meant to ring. The same slip on a Book button can open a booking window the visitor now has to back out of."
      ),
      p(
        "The W3C Pointer Cancellation criterion, which we read in full, exists to make that kind of slip easy to recover from."
      ),
      h2("Down-event and up-event in plain words"),
      p(
        "A touch has two moments: the finger landing, called the down-event, and the finger lifting, called the up-event. The W3C calls activating on release the most accessible way to meet the criterion. When a control acts only on lift, the user gets a chance to abort: if they land on the wrong target, they slide away before lifting and nothing happens."
      ),
      p(
        "The criterion offers a few routes. The action fires on release; or the person can abort or undo it; or the release reverses what the touch started. Firing on the down-event is allowed only when that timing is essential, and the W3C's examples are things like an on-screen piano key or a keyboard on screen."
      ),
      table(
        ["Control on your page", "What to check"],
        ["Call button built as a tel link", "Normally acts on release through the browser, so usually fine"],
        ["Book button that opens a window", "Does the window open only after the finger lifts?"],
        ["Button wired to a custom script", "Is the script attached to click, or to touch-down?"],
        ["Slide-out menu or chat bubble", "Can a stray touch open it with no way to cancel?"]
      ),
      h3("Why custom code is where it goes wrong"),
      p(
        "The W3C points out that the ordinary click event in JavaScript runs on release of the primary mouse button, so it is an up-event even though its name suggests otherwise, and it works for touch and keyboard as well. Trouble tends to start when a developer attaches an action to a touch-start or mouse-down event instead."
      ),
      h2("How to test it on your own phone"),
      ol(
        "Open your home page and find the Call and Book buttons.",
        "Press and hold your finger on the Call button without lifting. Nothing should dial yet.",
        "While still holding, slide your finger off the button and lift. The phone should not dial.",
        "Repeat on every Book, Message and menu control a patient might brush.",
        "Note any control that acts while your finger is still down."
      ),
      p(
        "On some phones the dial prompt shows a confirmation before calling, which gives a second chance but does not replace the test. Check what happens on the first touch, and write down what you saw for your developer."
      ),
      h2("What to hand the developer"),
      p(
        "Ask that every call, book and message control act on the click event, or on the up-event, and that nothing important fires on touch-down. Our guide to [tap target size and spacing](/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page) covers the other half of the problem, which is buttons so close together that a stray touch lands on the wrong one. Keeping the number a real link, as in our [click-to-call guide](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website), is the safest base. This is practical guidance, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Does my tel link already meet this?",
        a: "A plain tel link normally dials on release, through the browser, so it usually behaves well. Custom buttons built from scripts are the ones to test. Press and hold, slide off, and lift: if nothing happens, the control lets a person cancel, which is what the W3C asks for.",
      },
      {
        q: "Is firing on touch-down ever acceptable?",
        a: "Only where the timing is essential. The W3C names an on-screen piano or a software keyboard as examples. A call button, a booking button or a menu is not essential in that sense, so these should act when the finger is lifted.",
      },
      {
        q: "What is the difference between this and tap target size?",
        a: "Target size is about how big and how far apart the buttons are, so a finger lands on the right one. Pointer cancellation is about what happens when it lands on the wrong one. A well-built phone page does both, and the two guides together cover them.",
      },
      {
        q: "Will fixing this change my call tracking?",
        a: "It should not. Click-based tracking already runs on release. Ask your developer to confirm that the phone-tap event still records after the change, and compare your tap count for a few weeks before and after to be sure nothing dropped.",
      },
      {
        q: "Who is helped by this beyond people with tremors?",
        a: "The W3C says it makes it easier for all users to recover from hitting the wrong target. Anyone using a phone while walking, holding a child or wearing gloves benefits, along with people who use head pointers or other adapted devices.",
      },
    ],
    citations: [WCAG_POINTER],
    links: [
      { href: "/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page", label: "Tap Target Size for Call and Book Buttons", description: "Make the buttons easy to hit." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call Button and Mobile Layout", description: "Keep the phone number one tap away." },
      { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Click-to-Call Links", description: "A real link on every page." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1975
  {
    slug: "text-baked-into-images-on-a-medical-practice-website-hero-banners-and-insurance-logo-strips",
    keyword: "text baked into images such as a hero banner or insurance logo strip on a medical practice website and why real text is better",
    category: "Checklist",
    title: "Words Baked Into Pictures on a Practice Website and Why Real Text Wins",
    metaTitle: "Text Baked Into Images on a Practice Website",
    metaDescription:
      "A hero banner or insurance strip with the words inside the picture cannot be resized or read aloud reliably. See what to replace. (561) 291-2681",
    answer:
      "When your phone number, hours or accepted insurance names exist only inside a picture, a visitor cannot resize them, recolor them or select them, and a screen reader depends on a written description. Use real text for words, and keep pictures for photos and logos.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The banner that cannot be read twice"),
      p(
        "A designer sends a handsome hero banner as a single image: a photo, a welcome line, the phone number and the words Now accepting new patients, all baked into one file. On your screen it looks perfect. On a phone the whole image shrinks, so the words become tiny. A visitor who enlarges the page sees blurry letters, and one who needs larger or higher-contrast text cannot change a thing."
      ),
      p(
        "The W3C Images of Text criterion, which we read in full, begins from that exact problem: people cannot alter how text looks in an image."
      ),
      h2("What the W3C says"),
      p(
        "The intent is that people who need a particular font size, color, font family, line spacing or alignment can adjust it. Where the same visual effect can be achieved with text, the W3C says to use text instead of an image. It also lists who benefits: people with low vision, people with visual tracking problems, and people with cognitive disabilities that affect reading."
      ),
      p(
        "There are exceptions, and they matter for a practice site. Logos and logotypes are allowed, as is text that is essential to what the image shows. An image of text is also fine when the same information appears as real text on the page too, because both are presented to the user."
      ),
      table(
        ["Item on a practice page", "Real text or picture?"],
        ["Phone number and hours", "Real text, always, and a real tel link"],
        ["Welcome line over the hero photo", "Real text laid over the photo with styling"],
        ["Practice logo", "Picture is fine, with a text alternative"],
        ["Insurance carrier logos", "Logos fine, plus the carrier names written out as text"],
        ["Headings and button labels", "Real text, styled by the site"],
        ["Screenshot of a patient portal", "Picture is fine, describe it in the caption"]
      ),
      h3("Why the insurance logo strip needs words beside it"),
      p(
        "A strip of carrier logos is a common way to show who you work with. The logos themselves are allowed, but a patient asking which plans you accept is really asking a question that text answers best. Put the plan names in a short written list near the strip, and keep it current. Our guide on [insurance carrier pages for a counseling practice](/guides/insurance-carrier-specific-pages-for-a-counseling-practice-accuracy-and-wording) covers accurate wording."
      ),
      h2("A five-minute way to find baked-in text"),
      ol(
        "On your home page, try to select the phone number with your mouse or finger. If it will not highlight, it is probably a picture.",
        "Press the browser zoom up to 200 percent and see whether any words turn blurry.",
        "Right-click any banner and see whether the browser offers to save it as an image.",
        "List every image that contains words that a patient needs, such as a number, an hour or a plan name.",
        "Ask your developer to rebuild each as real text over the picture."
      ),
      p(
        "Real text also reaches search engines as words on the page, while words inside a picture reach them only through the alternative text you write, so a banner whose only copy is a picture gives a search engine very little to read. Our guide on [lazy loading below-the-fold images](/guides/lazy-loading-images-below-the-fold-on-a-practice-page-without-delaying-the-top-picture) shows how to keep the pictures themselves fast. We do not give legal advice."
      ),
    ],
    faqs: [
      {
        q: "Can I keep my logo as an image with words in it?",
        a: "Yes. The W3C treats logos and logotypes as an accepted exception, because the look of the lettering is part of the identity. Give the image a text alternative with the practice name so a screen reader announces it, and keep the file sharp at phone width.",
      },
      {
        q: "What if my designer says text will not look the same?",
        a: "The W3C's rule applies where text can achieve the same visual effect. Modern styling handles custom fonts, shadows and overlays on photos in most cases. If a specific effect truly cannot be made in text, keep the image and also write the same words on the page.",
      },
      {
        q: "Is alt text enough for a banner full of words?",
        a: "It helps a screen reader, but the words still cannot be resized, recolored or selected by a sighted visitor with low vision. The W3C says images of text used together with the same information as real text is acceptable, so adding the text version is the stronger fix.",
      },
      {
        q: "Do PDF forms count as images of text?",
        a: "A scanned page saved as a PDF is a picture of words and cannot be read aloud or resized well. A form built as real text, or better a form on the page itself, works for far more patients. Check any scanned download linked from your intake page.",
      },
      {
        q: "How do I know this was fixed?",
        a: "Select the text with your mouse, zoom to 200 percent and listen with a screen reader on the live page. If the number highlights, stays sharp and is read aloud, the words are real text. Repeat on a phone, because mobile layouts sometimes swap in a different banner.",
      },
    ],
    citations: [WCAG_IMG],
    links: [
      { href: "/guides/lazy-loading-images-below-the-fold-on-a-practice-page-without-delaying-the-top-picture", label: "Lazy Loading Images Below the Fold", description: "Keep pictures fast on a phone." },
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Keep a page readable when enlarged." },
      { href: "/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes", label: "Text and Background Contrast Check", description: "Make sure words stand out." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1976
  {
    slug: "page-landmarks-for-a-counseling-practice-website-so-a-screen-reader-user-can-jump-to-the-contact-form",
    keyword: "page landmarks such as header, main and navigation so a screen reader user can jump to the contact form of a counseling practice site",
    category: "Checklist",
    title: "Page Landmarks So a Screen Reader User Can Jump to Your Contact Form",
    metaTitle: "Page Landmarks on a Counseling Practice Website",
    metaDescription:
      "Header, nav, main and footer landmarks let a screen reader user jump to your contact form. Check yours in five minutes. Call (561) 291-2681.",
    answer:
      "Landmarks are named regions of a page, such as header, navigation, main and footer. A screen reader can list them and jump between them. When they are missing, a visitor hears the page as one long stream and cannot skip straight to your contact form.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("What a landmark does for a visitor"),
      p(
        "A sighted visitor scans a counseling practice page and sees the logo up top, the menu beneath it, the main message in the middle and the address in the footer. A screen reader user cannot glance. They rely on regions that the code marks out, so they can say jump to main, or jump to navigation, and land there."
      ),
      p(
        "The W3C Page Structure tutorial, which we read in full, explains why this matters beyond screen readers. People with cognitive and learning disabilities find and prioritize content more easily, keyboard users avoid pressing Tab through every link, and mobile reading modes can show only the main content when it is marked up correctly. The tutorial adds that search engines can use the structure to index a page better."
      ),
      h2("The five regions to know"),
      table(
        ["Region", "What it holds on a practice site"],
        ["header", "Logo, practice name and often the phone number"],
        ["nav", "The main menu, and any second menu such as a footer menu"],
        ["main", "The one area holding what this page is about"],
        ["aside", "A side note or related-links box, separate from the main message"],
        ["footer", "Address, hours, privacy link and copyright"]
      ),
      p(
        "The tutorial shows these as plain HTML5 elements named header, nav, main, aside and footer. It adds one caution: a header or footer placed inside an article or section describes only that section, not the whole page. For best support it also advises using the matching WAI-ARIA role alongside the element."
      ),
      h3("Name each menu when there is more than one"),
      p(
        "A page can have any number of navigation menus, and the tutorial says to label each so visitors can tell them apart. A practice page might have a main menu and a second menu of service links in the footer. If both are announced simply as navigation, a screen reader user cannot tell which is which."
      ),
      h2("Check your landmarks in five minutes"),
      ol(
        "Turn on the screen reader built into your phone or computer and open your contact page.",
        "Use its landmarks or rotor feature to list the regions it finds.",
        "Confirm you hear exactly one main region, and that the contact form sits inside it.",
        "Confirm each menu has its own name, such as Main menu and Footer menu.",
        "Write down any page with no regions at all."
      ),
      p(
        "Chrome Lighthouse checks part of this too. Chrome for Developers lists an audit that a document should have one main landmark, and another that the page contains a heading, skip link or landmark region. A pass shows the basics are present, not that the structure helps a real visitor, so still do the listening test."
      ),
      h2("What to ask the developer"),
      p(
        "Request that every page has one main region wrapping the unique content, a header and footer for the whole page, and labeled menus. Pair this with a [skip link](/guides/skip-link-at-the-top-of-a-medical-practice-page-so-a-keyboard-user-reaches-the-phone-number-and-contact-form) so keyboard users can jump too. For a hands-on test, follow our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills). This is practical guidance, not legal advice, and landmarks alone do not make a site accessible."
      ),
    ],
    faqs: [
      {
        q: "How many main regions should a page have?",
        a: "One. The main region holds the content unique to that page. Repeated items such as the menu and footer sit outside it. Chrome Lighthouse includes a check that a document has one main landmark, so two of them, or none, will be flagged.",
      },
      {
        q: "Does my page builder add landmarks automatically?",
        a: "Often partly. Many themes produce a header and footer but leave the main area as a plain block. The only reliable test is to list the landmarks with a screen reader on the live page and see what it announces for your contact form.",
      },
      {
        q: "Do landmarks help search engines?",
        a: "The W3C tutorial notes that search engines can use well-structured content to index a page better. We cannot measure a ranking effect from landmarks alone, so treat that as a small side benefit and the real gain as a faster route for visitors who use assistive tools.",
      },
      {
        q: "What is the difference between landmarks and headings?",
        a: "Landmarks mark large regions of the page, such as the menu or main content. Headings label the sections inside them. A screen reader user often uses both: landmarks to reach the right area, then headings to move through it. A well-built page has a clear set of each.",
      },
      {
        q: "Should a short counseling page still be structured this way?",
        a: "Yes. The work is small on a short page and the contact form is the very thing a visitor wants. Structure also carries over to every new page built from the same template, so fixing the template once covers the whole site.",
      },
    ],
    citations: [WAI_STRUCTURE, WAI_REGIONS, LH_SCORE],
    links: [
      { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your pages the way a patient does." },
      { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement Page", description: "Tell visitors how to report a barrier." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1926
  {
    slug: "booking-page-of-a-medical-practice-that-still-works-when-a-patient-turns-the-phone-sideways",
    keyword: "booking page that still works when a patient turns the phone sideways",
    category: "Checklist",
    title: "A Booking Page That Still Works When the Phone Is Turned Sideways",
    metaTitle: "Booking Page That Works in Landscape on a Phone",
    metaDescription:
      "Some patients mount a device in one position and cannot rotate it. Check that your booking page works both ways up. Call (561) 291-2681.",
    answer:
      "A booking page should work in both portrait and landscape. Some patients have a phone or tablet fixed in one position, for example on a wheelchair arm, and cannot turn it. If your page locks to one orientation, that visitor may never reach the Book button.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("The page that insists on one way up"),
      p(
        "Most people hold a phone upright and never think about rotation. A few pages quietly insist on it. Rotate the phone and the page stays put, shows a message asking you to turn it back, or squeezes the booking widget into a sliver. For a patient whose device cannot turn, that is a closed door."
      ),
      p(
        "The W3C Orientation criterion, which we read in full, puts it plainly: some users have their devices mounted in a fixed orientation, for example on the arm of a power wheelchair, so sites need to support both orientations by not restricting them."
      ),
      h2("What the criterion does and does not ask"),
      p(
        "The goal is that content is not locked to portrait or to landscape. The W3C separates two things. A person may lock their own device to one orientation, and every page is expected to respect that choice. The author's job is only not to add a restriction of their own."
      ),
      p(
        "Changes of layout because of screen size are not covered. A page may rearrange itself to fit a wide or narrow screen. What it should not do is refuse to display, or demand a turn. The W3C allows a restriction only where one orientation is essential, with examples such as depositing a check by camera or an on-screen piano. A booking page is not one of those."
      ),
      table(
        ["Orientation test", "What good looks like"],
        ["Rotate to landscape", "Page rotates, Book button still visible and tappable"],
        ["Rotate back to portrait", "Nothing is lost, and any form entries stay in place"],
        ["Device locked in landscape", "Whole booking path still completes"],
        ["Embedded scheduling widget", "Same behavior as the rest of the page"]
      ),
      h3("The usual culprit is an embedded widget"),
      p(
        "Many practices use a scheduling tool that appears inside the page in a frame. The page around it may rotate perfectly while the tool inside does not. That is why the test below runs the whole booking path rather than just the page that links to it."
      ),
      h2("Test it with your own phone"),
      ol(
        "Switch off the rotation lock on your phone, then open your booking page upright.",
        "Turn the phone onto its side and watch whether the page follows.",
        "In landscape, try to pick a visit type, a day and a time, and read every button label.",
        "Fill one field, rotate back, and check that what you typed is still there.",
        "Repeat with the rotation lock on and the phone set to landscape in settings."
      ),
      p(
        "Landscape shows less of the page at once, so long headers and sticky banners can swallow the screen. If your header takes more than a third of the height sideways, ask for it to shrink in landscape. Our guides to [zoomed text and phone reflow](/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways) and [pop-ups and chat widgets on a phone](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) cover related traps. This is practical guidance, not legal advice."
      ),
    ],
    faqs: [
      {
        q: "Does this mean my page must look identical sideways?",
        a: "No. The W3C says layout changes due to screen size are not the concern. The page can rearrange itself, and should. What it must not do is lock to one orientation or refuse to show its content until the visitor turns the device.",
      },
      {
        q: "Who is helped when a page rotates freely?",
        a: "The W3C names people whose devices are mounted in a fixed position, such as on a wheelchair arm, and people with low vision who may prefer landscape to make text larger. Any patient holding a phone in a way that suits them benefits as well.",
      },
      {
        q: "Our scheduling tool is a third-party widget. Is that our problem?",
        a: "The visitor sees one page, so in practice it is yours to test. Ask the vendor whether the tool supports both orientations. If it does not, ask your developer about a plain booking form or a phone-call option next to it, and note the vendor's answer.",
      },
      {
        q: "How do I check it without a developer?",
        a: "Rotate your own phone with the rotation lock off, then on. Go through the whole booking path in both positions. The test takes about five minutes and tells you more than reading code, especially for the part inside an embedded scheduling frame.",
      },
      {
        q: "Is there ever a good reason to lock a booking page?",
        a: "The W3C allows it only where one orientation is essential to the function. Scheduling a visit is not. If a vendor says a lock is required, ask for the reason in writing, and consider a different tool, since patients cannot all turn their devices.",
      },
    ],
    citations: [WCAG_ORIENT],
    links: [
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Keep a page readable when enlarged." },
      { href: "/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website", label: "Pop-Ups and Chat Widgets on Mobile", description: "Keep the phone page usable." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call Button and Mobile Layout", description: "Keep the phone number one tap away." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1927
  {
    slug: "map-or-slider-on-the-contact-page-of-a-medical-practice-that-works-without-dragging",
    keyword: "a map or slider on the contact page of a medical practice that works without dragging",
    category: "Checklist",
    title: "A Map or Slider on Your Contact Page That Works Without Dragging",
    metaTitle: "Contact Page Map or Slider Without Dragging",
    metaDescription:
      "Not every patient can drag. Give your contact page map or slider a tap-only way to work, and test it in three minutes. Call (561) 291-2681.",
    answer:
      "Anything on your contact page that needs a finger to be pressed and dragged, such as panning a map or sliding a picture row, also needs a way to do the same job with single taps or clicks. A pair of plus and minus buttons, or arrows, is enough.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("When dragging is the only way in"),
      p(
        "A common contact page has an embedded map showing the office and, nearby, a row of photos that slides sideways. Both are built for dragging. A patient with a tremor, a head pointer, an eye-gaze tool or a trackball may not be able to press, hold and move at the same time, so the map stays stuck on the wrong street and the photo row never moves."
      ),
      p(
        "The W3C Dragging Movements criterion, which we read in full, was added in WCAG 2.2. Its goal is plain: do not rely on dragging for user actions, and offer a simple single-pointer alternative for anything that needs it."
      ),
      h2("What counts as an alternative"),
      p(
        "The W3C describes dragging as four separate steps: tap or click to start, press and hold, move the pointer, then release. Not everyone can do the middle two accurately. Its examples of alternatives include clicking or tapping anywhere on a slider track to move the thumb there, and a text box next to a slider where the person can type a value."
      ),
      p(
        "Two limits are worth knowing. First, keyboard support is not enough on its own, because a touchscreen user may not have a keyboard, so the alternative must work with a tap or click. Second, the alternative cannot rely only on swipes or flicks, since those are also path-based gestures."
      ),
      table(
        ["Contact page element", "A single-tap alternative"],
        ["Embedded map", "Zoom in and out buttons, plus the written address with a Get directions link"],
        ["Row of photos that slides", "Previous and Next arrow buttons"],
        ["Price or distance slider", "Click on the track, or a box to type a value"],
        ["Reorderable list", "Move up and Move down buttons"]
      ),
      h3("What the criterion does not cover"),
      p(
        "Ordinary page scrolling is the browser's job and is outside the criterion, as is scrolling inside a box made with standard styling. It applies when your own code takes over scrolling or panning and handles the drag itself."
      ),
      h2("Test it in three minutes"),
      ol(
        "Open your contact page on a phone and find anything that moves when you drag it.",
        "Try to use each one with taps only, without pressing and moving.",
        "If the map cannot be zoomed or recentered with a tap, note it.",
        "Check that the address is also written as text beside the map.",
        "Note any row or slider that has no arrows."
      ),
      p(
        "For a map, the written address and a link that opens directions in the visitor's own map app are the most reliable fallback. Our guide to [map embed and driving directions wording](/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice) covers how to word that safely, and the guide to [pausing carousels and sliders](/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website) covers the related pause control. This is practical guidance, not legal advice, and it does not by itself make a page conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is a plus and minus button pair enough for a map?",
        a: "Zoom buttons answer zooming. Panning to a different area is also a drag, so offer a way to recenter on the office, and show the written address with a directions link. For most contact pages the real need is finding the office, which the address and link already deliver.",
      },
      {
        q: "Does keyboard support satisfy this?",
        a: "Not on its own. The W3C says keyboard operation is a separate requirement, because people on touchscreens may not use a keyboard. The alternative has to work with single taps or clicks. Arrow keys can stay as an extra route alongside the buttons.",
      },
      {
        q: "Can a swipe be the alternative to a drag?",
        a: "No. A swipe or flick is itself a gesture that follows a path, so it fails for the same people. The W3C points to this overlap with its pointer gestures criterion. Use plain buttons or a tap on the track instead.",
      },
      {
        q: "Does ordinary page scrolling count as dragging?",
        a: "No. The W3C excludes scrolling and drag gestures provided by the browser itself, such as a swipe to scroll the page. The criterion applies when your own code replaces that behavior and handles the drag directly.",
      },
      {
        q: "Should we just remove the map?",
        a: "Not necessarily. A map is useful for finding an office. Keep it if it zooms with buttons, and always put the address in text too. If the map cannot be made operable by taps, a static image with the address and a directions link is a safe replacement.",
      },
    ],
    citations: [WCAG_DRAG],
    links: [
      { href: "/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice", label: "Map Embed and Driving Directions", description: "Word the contact page map safely." },
      { href: "/guides/pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website", label: "Pausing Carousels and Sliders", description: "Give a slider a pause button." },
      { href: "/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page", label: "Tap Target Size for Call and Book Buttons", description: "Make the buttons easy to hit." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1922
  {
    slug: "monthly-lighthouse-accessibility-check-of-five-key-pages-of-a-primary-care-practice-website",
    keyword: "a monthly Lighthouse accessibility check of five key pages of a primary care practice website and what to hand the designer",
    category: "Checklist",
    title: "A Monthly Lighthouse Accessibility Check of Five Key Pages",
    metaTitle: "Monthly Lighthouse Accessibility Check for a Practice",
    metaDescription:
      "Run Chrome Lighthouse on five key pages once a month and hand the designer a short list. A 20-minute routine for owners. Call (561) 291-2681.",
    answer:
      "Once a month, run Chrome's Lighthouse accessibility audit on five pages: home, contact, one service page, new-patient page and the page that gets most search visits. Log the score and failed audits in a table, and send the designer the failed list.",
    author: "Gio LaRoche",
    publishDate: "2026-11-23T15:00:00Z",
    dateModified: "2026-11-23",
    readMinutes: 5,
    sections: [
      h2("Why check every month"),
      p(
        "A practice website drifts. A new banner is added, a plug-in updates, someone uploads a photo with no description, and a page that was fine in spring now has an unnamed button. A short monthly routine catches that early, while the cause is still one change you remember."
      ),
      p(
        "Lighthouse is built into the Chrome browser's developer tools and needs no sign-up. According to Chrome for Developers, its accessibility score is a weighted average of many audits, and each audit is simply pass or fail. This guide turns that into a twenty-minute habit for a practice owner."
      ),
      h2("The five pages to test"),
      table(
        ["Page", "Why it earns a place"],
        ["Home", "First stop for most visitors"],
        ["Contact", "The form and phone number live here"],
        ["One service page", "Pick the one with the most visits, such as primary care or counseling"],
        ["New-patient page", "Where intake and booking start"],
        ["Top search landing page", "Find it in Search Console, under Pages"]
      ),
      h3("What the score means and does not mean"),
      p(
        "Chrome for Developers explains that a page gets no partial credit for an audit. If most buttons have accessible names but one does not, the whole buttons audit fails. The heavier audits, for example buttons without names, images without alt text and form fields without labels, move the score most. The same page also says manual audits are left out of the score, so a score of 100 does not mean a page is fully accessible."
      ),
      h2("The twenty-minute routine"),
      ol(
        "Open the page in Chrome, right-click, choose Inspect, then open the Lighthouse tab.",
        "Tick Accessibility only, pick Mobile, and press Analyze.",
        "Copy the score and the names of every failed audit into your log.",
        "Repeat for the other four pages, in the same order each month.",
        "Note anything that dropped since last month and what changed on the site."
      ),
      p(
        "A simple log keeps month-to-month comparison honest. Use the same five pages, the same device setting and the same time of day, since a different banner or a cached page can change a result."
      ),
      table(
        ["Column in your log", "What to write"],
        ["Month and page", "For example the date of the run and the word Contact"],
        ["Score", "The number Lighthouse shows for Accessibility"],
        ["Failed audits", "The audit names exactly as Lighthouse prints them"],
        ["Change since last month", "Anything on the site that was edited or added"]
      ),
      h2("What to hand the designer"),
      p(
        "Send a short list, not the report. For each failed audit give the page, the audit name exactly as Lighthouse shows it, and the element it points to. Ask for a fix and a recheck, and keep the list to one message. Pair it with the hands-on checks in our [five-minute keyboard-only test](/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills) and the [ADA web accessibility overview](/guides/ada-web-accessibility-for-a-medical-practice-website), because the tool cannot judge whether a page makes sense to a person. We do not give legal advice."
      ),
      p(
        "If you would like us to run the check and write the list for your site, ask through the [free audit form](/contact#contact-form)."
      ),
    ],
    faqs: [
      {
        q: "Is a Lighthouse score of 100 enough?",
        a: "No. Chrome for Developers says manual audits are not included in the score, and an automated tool cannot judge whether a page is understandable. Treat 100 as a clean automated baseline, then add a keyboard test and a screen reader test on the contact page.",
      },
      {
        q: "Why did my score change when I changed nothing?",
        a: "Third-party widgets, banners and cached copies can change between runs, and so can the device setting. Keep the settings the same each month, run the audit twice if a number looks odd, and record the date so a change can be traced to a site update.",
      },
      {
        q: "Which failed audits matter most?",
        a: "Chrome for Developers publishes the weight of each audit. Buttons, links and form fields without accessible names, images without alt text, and missing form labels carry the highest weights, so fix those first. Low-weight audits can wait until the main ones are clean.",
      },
      {
        q: "Do I need to be technical to do this?",
        a: "No. You open Chrome, run the audit and copy names into a table. The fixing belongs to your designer. If a failed audit name means nothing to you, paste it into your request exactly as written, and the developer will know where to look.",
      },
      {
        q: "Does a better score bring in more patients?",
        a: "We cannot promise that. A cleaner page is easier for more visitors to use, which removes one reason someone leaves. The honest measure is your own call and form counts before and after fixes, tracked over a few months rather than a week.",
      },
    ],
    citations: [LH_SCORE],
    links: [
      { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "Reach every button without a mouse." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "The speed side of the same tool." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },
];
