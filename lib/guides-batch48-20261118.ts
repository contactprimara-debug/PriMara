// -- Guides batch 48 - 2026-11-18 --
// Website how-to guides from the Command Center queue (rows 1894-1903 plus four rows planned 2026-11-18), built by the page
// factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is
// built from a primary source that was fetched and read before writing (W3C WAI WCAG 2.2 Understanding pages, web.dev).
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
const WCAG_CONTRAST = W("Understanding Success Criterion 1.4.3: Contrast (Minimum)", "contrast-minimum");
const WCAG_FOCUS_VISIBLE = W("Understanding Success Criterion 2.4.7: Focus Visible", "focus-visible");
const WCAG_FOCUS_ORDER = W("Understanding Success Criterion 2.4.3: Focus Order", "focus-order");
const WCAG_REFLOW = W("Understanding Success Criterion 1.4.10: Reflow", "reflow");
const WCAG_RESIZE = W("Understanding Success Criterion 1.4.4: Resize Text", "resize-text");
const WCAG_TARGET = W("Understanding Success Criterion 2.5.8: Target Size (Minimum)", "target-size-minimum");
const WCAG_PAUSE = W("Understanding Success Criterion 2.2.2: Pause, Stop, Hide", "pause-stop-hide");
const WCAG_LANG_PAGE = W("Understanding Success Criterion 3.1.1: Language of Page", "language-of-page");
const WCAG_LANG_PARTS = W("Understanding Success Criterion 3.1.2: Language of Parts", "language-of-parts");
const WCAG_ERROR = W("Understanding Success Criterion 3.3.1: Error Identification", "error-identification");
const WCAG_TIMING = W("Understanding Success Criterion 2.2.1: Timing Adjustable", "timing-adjustable");
const WCAG_INPUT_PURPOSE = W("Understanding Success Criterion 1.3.5: Identify Input Purpose", "identify-input-purpose");
const WCAG_HELP = W("Understanding Success Criterion 3.2.6: Consistent Help", "consistent-help");
const WEBDEV_CLS = { publisher: "web.dev", label: "Cumulative Layout Shift (CLS)", href: "https://web.dev/articles/cls" };
const WEBDEV_OPT_CLS = { publisher: "web.dev", label: "Optimize Cumulative Layout Shift", href: "https://web.dev/articles/optimize-cls" };
const WEBDEV_FONTS = { publisher: "web.dev", label: "Best practices for fonts", href: "https://web.dev/articles/font-best-practices" };
const WEBDEV_LAZY = { publisher: "web.dev", label: "Browser-level image lazy loading for the web", href: "https://web.dev/articles/browser-level-image-lazy-loading" };

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty11: Guide[] = [
  // ---------------------------------------------------------------- 1894
  {
    slug: "checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes",
    keyword: "text and background color contrast on a medical practice website, checked in ten minutes",
    category: "Checklist",
    title: "Checking Text and Background Color Contrast on a Practice Website in Ten Minutes",
    metaTitle: "Color Contrast Check for a Medical Practice Website",
    metaDescription:
      "Check text and background color contrast on your medical practice website in ten minutes, with the 4.5 to 1 rule and where it usually fails. (561) 291-2681",
    answer:
      "Body text should have a contrast ratio of at least 4.5 to 1 against its background, and large text at least 3 to 1. Check five places on a phone: body copy, the phone button, form labels, placeholder text and white text over a photo. Fix the faint ones first.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T14:00:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Why faint text costs a practice new patients"),
      p(
        "A patient who is squinting at gray text on a white background in a parking lot is not going to read your hours or find the phone number. Contrast is the difference in lightness between the text and whatever sits behind it. When it is too low, people with ordinary eyesight lose the words in glare, and people with low vision lose them entirely."
      ),
      p(
        "The World Wide Web Consortium sets a measurable target in its Contrast (Minimum) criterion, which we read in full before writing this guide. Text should have a contrast ratio of at least 4.5 to 1. Large text can drop to 3 to 1. Logos and purely decorative text have no requirement. The ratio is a number that any free checker will calculate for you, so nobody has to judge it by eye."
      ),
      h2("The two numbers to remember"),
      table(
        ["Kind of text", "Minimum ratio"],
        ["Normal body text, labels, links and button words", "4.5 to 1"],
        ["Large text: 18 point or larger, or 14 point bold or larger", "3 to 1"],
        ["Logo or brand name", "No requirement"],
        ["Text that is purely decorative", "No requirement"]
      ),
      p(
        "The W3C converts those point sizes for us: 18 point is about 24 pixels and 14 point bold is about 18.5 pixels. So a page heading in a thin, light font at 28 pixels can pass at 3 to 1, while the paragraph under it at 16 pixels has to reach 4.5 to 1. A very thin or unusual font is a special case, since it can look weaker than its size suggests."
      ),
      h2("The ten-minute check"),
      ol(
        "Open the page on your own phone, not a desktop monitor, and turn the screen brightness down to about half. Then walk outside or stand near a window. Anything you cannot read comfortably is a candidate.",
        "Open the same page on a laptop in Chrome, right-click a block of body text and choose Inspect. In the styles panel, click the small color square next to the text color. Chrome shows the contrast ratio and a pass or fail mark.",
        "Write down the text color and the background color for each of the five places listed below, then test them in any free contrast checker.",
        "Change only the colors that fail. Make the text darker or the background lighter until the ratio reaches the target, then look at the page again.",
        "Save the final color pairs in a short note for your web designer so the next page uses the same ones."
      ),
      h3("The five places that fail most often"),
      ul(
        "The phone button or the book-a-visit button, especially white words on a light brand color.",
        "Form labels and the small hint text under them, which designers often set in pale gray.",
        "Placeholder text inside empty form fields. It also disappears once someone starts typing, so do not rely on it for instructions.",
        "White or light text laid over a photo of the building or a smiling team. The photo changes from one corner to the next, so check the lightest part behind the words.",
        "Links inside paragraphs, and the footer, where hours and the address are often set in small gray type."
      ),
      h2("Color alone is not the fix"),
      p(
        "The W3C notes that contrast is calculated from lightness, not hue, because people with color vision differences still perceive light against dark. That means swapping a red for a green will not help if both are the same lightness. Pick the pair, then measure it."
      ),
      p(
        "It also helps to avoid using color as the only signal. A link that differs from the surrounding text only by color is hard to find for some readers, so keep the underline. Our guide to [descriptive link text on a primary care practice website](/guides/descriptive-link-text-instead-of-click-here-on-a-primary-care-practice-website-checked-in-five-minutes) covers the wording side of the same problem."
      ),
      h2("What to hand your web designer"),
      p(
        "Give your designer three things: the list of failing pairs, the target ratios from this guide, and a request to keep the brand colors where they pass and adjust them only where they do not. Brand blues and greens are often fine for large headings and fail for small text, so the usual fix is a darker shade for small text rather than a new logo color."
      ),
      p(
        "This check belongs in the same routine as the rest of your accessibility work. The wider picture is in [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website), and a spoken-aloud pass is described in the [five-minute screen reader test of the contact and booking pages](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills). We do not give legal advice, and passing this one check does not by itself make a site compliant."
      ),
    ],
    faqs: [
      {
        q: "What contrast ratio does body text need?",
        a: "At least 4.5 to 1 against its background, according to the W3C's Contrast (Minimum) criterion. Large text, meaning 18 point or 14 point bold and up, needs 3 to 1.",
      },
      {
        q: "Does the logo have to pass?",
        a: "No. The W3C exempts logos and brand names, as well as text that is purely decorative. The name of the practice written as a plain heading is not a logo, though, and should pass.",
      },
      {
        q: "Is a free contrast checker good enough?",
        a: "Yes, as long as it reports the ratio as a number. Chrome's built-in color picker does this, and many free web tools do too. Use the same checker each time so results compare.",
      },
      {
        q: "Does better contrast help our Google rankings?",
        a: "We cannot promise any ranking effect. The reason to do it is that more patients can read the page and find the phone number, which is the part that leads to a call.",
      },
      {
        q: "How often should we repeat the check?",
        a: "Run it when the site is redesigned, when a new button color or banner is added, and once a year with the rest of your website review. A new theme update can change colors without anyone noticing.",
      },
    ],
    citations: [WCAG_CONTRAST],
    links: [
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call Button and Mobile Layout", description: "Make the phone button easy to find." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement Page", description: "Tell visitors how to report a barrier." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1895
  {
    slug: "keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website",
    keyword: "keyboard focus outline and tab order on the booking and contact pages of a counseling practice website",
    category: "Checklist",
    title: "Keyboard Focus Outline and Tab Order on a Counseling Practice's Booking and Contact Pages",
    metaTitle: "Keyboard Focus and Tab Order on Practice Contact Pages",
    metaDescription:
      "Press Tab through your counseling practice's booking and contact pages to check the focus outline and tab order in five minutes. (561) 291-2681",
    answer:
      "Click once in the address bar, then press the Tab key repeatedly on your contact and booking pages. A visible outline should move from item to item in the same order you would read the page, and every button and field should be reachable. If the outline vanishes or jumps, ask your designer to fix it.",
    author: "Liam Costello",
    publishDate: "2026-11-18T14:10:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("What focus and tab order mean in plain words"),
      p(
        "Some people never use a mouse or a touch screen. They move through a page with the Tab key, press Enter to follow a link and the space bar to tick a box. The element that will react to the next key press has what developers call keyboard focus, and the browser shows it with an outline or a highlight."
      ),
      p(
        "On a counseling practice site this matters at the exact moment a prospective client is ready to reach out. If someone using a keyboard cannot see where they are on the contact form, or the Tab key jumps from the name field to the footer and back, they may give up before sending the message."
      ),
      h2("What the W3C says"),
      p(
        "We read two W3C pages before writing this. The Focus Visible criterion says any keyboard-operable page needs a mode where the focus indicator can be seen, and it must stay visible rather than disappear after a moment. The Focus Order criterion says that when the sequence matters to meaning or operation, items receive focus in an order that keeps both."
      ),
      ul(
        "The outline can be any clear shape, such as a border, a thick underline or a color change. The W3C does not demand one particular look.",
        "The order does not have to follow the visual layout exactly, but it must be logical. In a two-column page, finishing the left column and then the right is the usual expectation.",
        "Two failures the W3C lists by name are removing focus with a script when an item receives it, and styling outlines or borders so the focus mark becomes invisible."
      ),
      h2("The five-minute Tab test"),
      ol(
        "Open your contact page in Chrome. Click once on empty space, then press Tab. Do not touch the mouse again.",
        "Watch the first stop. On many sites the first item is a hidden skip link that appears at the top, which is a good sign.",
        "Keep pressing Tab and say each stop out loud: logo, menu items, phone link, name field, email field, message field, submit button. The order should match what you would read.",
        "At every stop, check that you can see the outline against the background, including on the colored buttons. Press Shift and Tab to move backward once to confirm it returns the same way.",
        "Open the booking widget or the form and use Tab, Enter and the space bar to fill it out and reach the submit button. Stop before you send anything real."
      ),
      h3("Common problems and what to tell your designer"),
      table(
        ["What you see", "What to ask for"],
        ["The outline disappears on buttons or links", "Show a clear outline on focus, using the browser's focus-visible styling"],
        ["Focus jumps to the footer, then back to the form", "Make the page order in the code match the reading order"],
        ["A menu or pop-up opens but Tab keeps going behind it", "Keep focus inside the pop-up until it is closed"],
        ["The phone number or Book button cannot be reached", "Make it a real link or button, not a styled box"]
      ),
      h2("Booking widgets from another company"),
      p(
        "Many counseling practices embed a scheduling or intake tool that lives inside a frame. Run the same Tab test through it. You cannot change the vendor's code, but you can report what you found, and you can place a plain phone link and a contact form beside it so there is always a keyboard-friendly way to reach the office."
      ),
      p(
        "When you find a problem, write down the page, the step where it happened, the browser you used and what you expected. That note is far more useful to a designer or vendor than the sentence that the form does not work. Our guide on the [website accessibility statement and how to report a barrier](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) shows where visitors can send their own reports, and the [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills) is the natural next check."
      ),
    ],
    faqs: [
      {
        q: "Why does my theme hide the outline?",
        a: "Many themes remove the browser's default outline because designers find it plain. The fix is to replace it with a styled outline rather than removing it and offering nothing, which the W3C lists as a failure.",
      },
      {
        q: "Does the order have to match the visual layout?",
        a: "Not exactly. The W3C says focus order must be logical and preserve meaning, but it can differ from the visual layout when the sections are independent. A form should still go from the first field to the submit button in order.",
      },
      {
        q: "Can we test this on a phone?",
        a: "Not the same way, since phones use touch. Use a laptop with a keyboard for this test, and use the phone for the tap-size and zoom checks covered in our other guides.",
      },
      {
        q: "Is this the same as a screen reader test?",
        a: "No. A screen reader reads the page aloud and uses its own commands, while this test checks that a sighted keyboard user can see where they are. Both are worth doing.",
      },
      {
        q: "Who should own this check?",
        a: "Whoever manages the website, with the practice manager signing off. Repeat it after any redesign, new form or new booking tool is added.",
      },
    ],
    citations: [WCAG_FOCUS_VISIBLE, WCAG_FOCUS_ORDER],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First-Time Client Contact Form", description: "What the form should ask." },
      { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "The next check to run." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility", description: "The wider picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1896
  {
    slug: "zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways",
    keyword: "zoomed text and phone reflow so a primary care practice page does not scroll sideways",
    category: "Checklist",
    title: "Zoomed Text and Phone Reflow: Keeping a Primary Care Practice Page From Scrolling Sideways",
    metaTitle: "Zoom and Phone Reflow for a Primary Care Practice Page",
    metaDescription:
      "Zoom a primary care practice page to 200 and 400 percent and check that text reflows without sideways scrolling on a phone. Call (561) 291-2681.",
    answer:
      "Zoom your page to 200 percent, then 400 percent, on a laptop. Text should wrap to fit the screen and the page should scroll only up and down. Wide tables and images are the usual culprits. Fix them so a patient who enlarges the text never has to scroll sideways to read a line.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T14:20:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Why patients zoom, and why sideways scrolling is a problem"),
      p(
        "Many patients enlarge text. Some are older, some have low vision, and some simply left their reading glasses at home. When a page is built well, enlarging the text just makes the lines wrap and the page gets longer. When it is built badly, a line runs off the right edge, and the reader has to drag the page left and right to follow each sentence."
      ),
      p(
        "The W3C's Reflow criterion describes this plainly: content should present without loss of information and without scrolling in two directions at a width equivalent to 320 CSS pixels. It explains that this width is what a 1280 pixel wide desktop window becomes at 400 percent zoom. People who need big text find it tiring and easy to lose their place if they must scroll to read long lines."
      ),
      h2("Check it yourself in two minutes"),
      ol(
        "Open the page on a laptop in Chrome in a normal window.",
        "Hold Control (or Command on a Mac) and press the plus key until the zoom reads 200 percent, then keep going to 400 percent.",
        "Scroll down the page. Text should wrap, the menu should fold into a button, and nothing should push the page wider than the window.",
        "Look for a horizontal scroll bar at the bottom. If one appears, note what is causing it: a table, an image, a form field or a button row.",
        "Press Control and zero to return to normal size."
      ),
      p(
        "Then repeat on a phone. Turn the phone sideways and back, and also raise the text size in the phone's accessibility settings. If the page still fits the screen width in all three, it is in good shape."
      ),
      h2("What usually breaks"),
      table(
        ["Cause", "Typical fix"],
        ["A wide table of hours or insurance plans", "Let the table scroll inside its own box, or restack each row as a short list on phones"],
        ["An image or banner with a fixed width", "Set the image to scale down to its container's width"],
        ["A long web address or email shown as text", "Allow it to break across lines"],
        ["Two columns that stay side by side", "Stack them in one column on narrow screens"],
        ["A pop-up or cookie banner wider than the screen", "Set it to fit the window and keep its close button reachable"]
      ),
      h3("Tables get a pass, but their cells do not"),
      p(
        "The W3C accepts two-directional scrolling for content that really needs it, such as data tables, maps and video. It adds that parts inside those, such as each table cell, still need to fit well. For a practice, that means a long insurance table can scroll sideways in its own frame, but the sentence above it must wrap normally. Better still, replace the table with a list if it has only two columns."
      ),
      h2("Resizing text without breaking the layout"),
      p(
        "A related criterion, Resize Text, asks that text can be enlarged to 200 percent without assistive technology and without losing content or function. Test that too by zooming the text alone through the browser settings. Buttons whose labels get cut off, or a phone number that overlaps the logo, are signs that the layout was built to a fixed height."
      ),
      p(
        "Hand your designer the list of broken spots with a screenshot at 400 percent. Ask for the fix on the template, so every page inherits it, rather than patching one page at a time. If the page also has trouble loading, our [mobile first indexing guide](/guides/mobile-first-indexing-explained-for-a-medical-practice-website) explains why the phone version is the one Google reads, and the [print-friendly version guide](/guides/print-friendly-version-of-a-new-patient-information-page-so-a-primary-care-patient-can-print-directions-and-what-to-bring) covers another layout worth checking."
      ),
    ],
    faqs: [
      {
        q: "What is 320 CSS pixels?",
        a: "It is the narrow width the W3C uses to test reflow. A desktop window 1280 pixels wide, zoomed to 400 percent, behaves like a 320 pixel screen, so zooming a laptop is a quick way to test.",
      },
      {
        q: "Do tables have to reflow?",
        a: "The W3C allows data tables to scroll in two directions when the layout is needed to understand them. Anything outside the table, including the surrounding sentences, should still wrap normally.",
      },
      {
        q: "Will fixing this help our rankings?",
        a: "We cannot promise that. A page that fits the screen is easier for patients to read, and Google reads the phone version first, so a broken phone layout is worth fixing either way.",
      },
      {
        q: "Does zooming the browser equal increasing the phone's text size?",
        a: "They are different settings, so test both. Browser zoom scales the whole page, while a phone's text size setting changes only the type, which can break fixed-height boxes.",
      },
      {
        q: "Who fixes a sideways scrolling page?",
        a: "Your web designer or the theme's support team. Give them the page address, the zoom level where it breaks and a screenshot, and ask for a template-level fix.",
      },
    ],
    citations: [WCAG_REFLOW, WCAG_RESIZE],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call Button and Mobile Layout", description: "Keep the phone button in reach." },
      { href: "/guides/mobile-first-indexing-explained-for-a-medical-practice-website", label: "Mobile First Indexing Explained", description: "Why the phone version matters." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Speed and stability checks." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1897
  {
    slug: "tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page",
    keyword: "tap target size and spacing for call and book buttons on a primary care practice phone page",
    category: "Checklist",
    title: "Tap Target Size and Spacing for Call and Book Buttons on a Primary Care Practice Phone Page",
    metaTitle: "Tap Size for Call and Book Buttons on a Practice Phone Page",
    metaDescription:
      "Make the call and book buttons on your primary care practice phone page big enough to tap: the 24 pixel minimum and a spacing check. (561) 291-2681",
    answer:
      "Every call, book and menu button should be at least 24 by 24 CSS pixels, or have enough empty space around it that a finger cannot hit its neighbor. The W3C also describes a stricter 44 pixel size. Aim for 44 pixels tall on the call button, and keep it away from other links.",
    author: "Liam Costello",
    publishDate: "2026-11-18T14:30:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("The patient with a thumb and a sore wrist"),
      p(
        "Picture a patient on a phone, in a waiting room, trying to tap Call Us. If the button is the size of a pencil eraser and sits next to a link to the privacy page, they tap the wrong thing and leave. For people with tremor, arthritis or a recent injury, a small target is more than annoying. It decides whether they can use the page at all."
      ),
      p(
        "The W3C's Target Size (Minimum) criterion gives the practical rule, and we read the page before writing this. Pointer targets should be at least 24 by 24 CSS pixels. If a target is smaller, the space around it must be large enough that a 24 pixel circle centered on it does not touch another target. The same page describes a larger level that uses 44 by 44 pixels."
      ),
      h2("When a smaller button is still allowed"),
      p(
        "The criterion lists exceptions. Knowing them stops you from over-fixing and from missing the real problems."
      ),
      ul(
        "Spacing: a small target is acceptable when its 24 pixel circle does not overlap any neighboring target.",
        "Inline: a link inside a sentence is exempt, because its size is set by the line of text around it.",
        "Equivalent: if another control on the same page does the same job at the right size, the small one may stay.",
        "User agent control: items the browser draws itself, such as a native checkbox, are left alone.",
        "Essential: a particular size that the information cannot do without."
      ),
      p(
        "The inline exception is why a link in a paragraph passes while a stack of footer links does not. Footer menus, with five links on five lines and almost no space between them, are the classic failure on practice sites."
      ),
      h2("Measure your own buttons in five minutes"),
      ol(
        "On a laptop, open the home page and the contact page in Chrome. Right-click the call button and choose Inspect.",
        "In the panel, hover the highlighted element. Chrome shows its width and height in pixels. Write them down.",
        "Do the same for the Book button, the menu button, the close button on any banner and each footer link.",
        "Mark anything under 24 pixels in either direction, then check whether it has empty space on all sides. If another link is close by, it fails.",
        "On your phone, try tapping each one with your thumb while holding the phone in one hand. Any you miss twice are worth fixing even if they measure well."
      ),
      h3("What to ask for"),
      table(
        ["Element", "Practical target"],
        ["Call button", "At least 44 pixels tall, full width of the screen on a phone"],
        ["Book or contact button", "At least 44 pixels tall with room above and below"],
        ["Footer links", "Padding that makes each row at least 24 pixels tall"],
        ["Close button on a banner", "At least 24 by 24 pixels, away from the call button"]
      ),
      h2("Make the call button the easiest thing on the page"),
      p(
        "A tap target is also a lead. If the phone number is plain text rather than a tappable link, there is no target at all. Use a real telephone link and make the whole button, not just the number, the tappable area. Our guide to the [click-to-call button and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) shows where to place it, and the one on [phone number format and click-to-call links on every page](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) explains the link itself."
      ),
      p(
        "Keep banners and chat bubbles from crowding the button. A floating chat icon parked directly over a Book button is a common cause of mis-taps, which our guide to [pop-ups, banners and chat widgets on the mobile page](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) discusses in more detail."
      ),
    ],
    faqs: [
      {
        q: "What is the minimum tap size?",
        a: "The W3C's Target Size (Minimum) criterion sets 24 by 24 CSS pixels, with an allowance for smaller targets that have enough space around them. Its enhanced level uses 44 by 44 pixels.",
      },
      {
        q: "Does a link inside a paragraph need to be 24 pixels tall?",
        a: "No. Links in a sentence fall under the inline exception, because their size is limited by the line height of the surrounding text. A separate list of links does not get that exception.",
      },
      {
        q: "Why choose 44 pixels for the call button?",
        a: "It is the larger size the W3C describes for its enhanced level, and it is comfortable for a thumb. The 24 pixel minimum is the floor, not the goal, for your most important button.",
      },
      {
        q: "Does this affect phone calls?",
        a: "We cannot promise a number. A button that is easy to tap removes one reason a visitor might fail to call, and you can watch your call report for any change over the next month.",
      },
      {
        q: "Can a plugin fix this?",
        a: "Sometimes, but a plugin that adds padding site-wide can disturb the layout. Ask your designer to change the button styles in the template and test on a real phone.",
      },
    ],
    citations: [WCAG_TARGET],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call Button and Mobile Layout", description: "Where the call button belongs." },
      { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Call Links", description: "Make every number tappable." },
      { href: "/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website", label: "Pop-Ups, Banners and Chat Widgets", description: "Keep them off the buttons." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1898
  {
    slug: "pausing-carousels-sliders-and-autoplay-video-on-the-home-page-of-a-counseling-practice-website",
    keyword: "pausing carousels, sliders and autoplay video on the home page of a counseling practice website",
    category: "Checklist",
    title: "Pausing Carousels, Sliders and Autoplay Video on a Counseling Practice Home Page",
    metaTitle: "Carousels and Autoplay Video on a Counseling Home Page",
    metaDescription:
      "Moving banners and autoplay video on a counseling practice home page need a pause button. Here is the five second rule and a simple check. (561) 291-2681",
    answer:
      "Anything on your home page that moves on its own for more than five seconds, such as a slider, rotating banner or autoplay video, needs a visible way to pause, stop or hide it. For a counseling practice, the simplest fix is a still image with the words and a Call button.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T14:40:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("A calm page for people who may not feel calm"),
      p(
        "A person looking for a counselor may be anxious, tired or distracted already. A home page where a banner slides away before they finish reading it, or a video starts playing with movement in the corner of the screen, asks more of them than it should. A still page that says who you help and how to call is kinder and, for many visitors, easier to use."
      ),
      p(
        "The W3C addresses this in its Pause, Stop, Hide criterion, which we read before writing. For moving, blinking or scrolling information that starts automatically, lasts more than five seconds and sits alongside other content, there must be a way to pause, stop or hide it. The reason it gives is that people with attention difficulties can find continuous movement distracting, and anyone who reads slowly can lose the text."
      ),
      h2("What counts as moving content"),
      ul(
        "A rotating banner or carousel of slides that changes by itself.",
        "A background video playing behind the headline.",
        "Scrolling text, such as a news ticker of announcements.",
        "Animated images that loop, including GIFs.",
        "Content that updates by itself on a timer, such as a rotating testimonial box."
      ),
      p(
        "The five-second rule has a small exception. An animation that stops by itself within five seconds does not need a button. Auto-updating content, such as a message that refreshes on a timer, needs a control regardless, because there is no five-second allowance for it."
      ),
      h2("Check your home page in three minutes"),
      ol(
        "Open the home page on a phone and on a laptop. Do not touch anything for ten seconds and watch what moves.",
        "For each moving item, look for a pause or stop button that you can reach by keyboard as well as by touch. Press Tab to confirm.",
        "Press the pause button and wait. The movement should stay stopped until the visitor chooses to start it again.",
        "Check that the first slide carries the essential message, because many visitors will never see slide two.",
        "Ask someone who has never seen the site to describe what the practice does after ten seconds. If they cannot, the moving parts are getting in the way."
      ),
      h3("Our simple recommendation for a counseling practice"),
      p(
        "Skip the carousel. Use one still photo or plain color block with a short headline, one sentence on who you see, and the Call and Request buttons. A carousel splits the visitor's attention across several messages, and slides after the first tend to go unseen. If you want to keep a video, start it paused with a play button, so the visitor decides whether to watch."
      ),
      h2("If you keep the movement"),
      p(
        "Give the pause button a clear label and enough size to tap; our guide on [tap target size for call and book buttons](/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page) gives the measurements. Keep it near the moving content, make sure the keyboard can reach it, and do not let the movement restart on its own after the visitor has stopped it."
      ),
      p(
        "Video belongs on its own page more often than on the home page, where captions and transcripts can be placed alongside it. See our guide to [video on a medical practice website](/guides/video-on-a-medical-practice-website-transcripts-captions-and-video-schema) for that, and [what a new patient sees on a phone in the first five seconds](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page) for what the top of the page should say."
      ),
    ],
    faqs: [
      {
        q: "How long can something move before it needs a pause button?",
        a: "The W3C sets five seconds. Movement that starts automatically, lasts longer than five seconds and appears next to other content needs a way to pause, stop or hide it.",
      },
      {
        q: "Does a carousel hurt a counseling site?",
        a: "We cannot promise a measured effect either way. We recommend a single still message because it is easier to read, loads faster and keeps the call button in view.",
      },
      {
        q: "Is a background video allowed?",
        a: "It is allowed if visitors can stop it. Our advice is to avoid it on a counseling home page, since it adds load time and can distract a reader who is already anxious.",
      },
      {
        q: "Does an animated GIF count?",
        a: "Yes, if it loops past five seconds beside other content. Replace it with a still image or give it a pause control.",
      },
      {
        q: "What should the one still image show?",
        a: "Your real office entrance or a calm room, shown with the headline and buttons. Avoid stock photos of people in distress, and never use a client's image without written permission.",
      },
    ],
    citations: [WCAG_PAUSE],
    links: [
      { href: "/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page", label: "The First Five Seconds on a Phone", description: "What the top of the page should say." },
      { href: "/guides/video-on-a-medical-practice-website-transcripts-captions-and-video-schema", label: "Video on a Practice Website", description: "Captions and transcripts." },
      { href: "/guides/trauma-informed-website-wording-for-a-counseling-practice-without-clinical-claims", label: "Trauma-Informed Website Wording", description: "Calm, plain wording." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1899
  {
    slug: "layout-shift-on-a-practice-page-that-jumps-while-loading-on-a-phone-fixed-with-image-sizes",
    keyword: "layout shift: a practice page that jumps while loading on a phone, fixed with image sizes",
    category: "How-to",
    title: "Layout Shift: Fixing a Practice Page That Jumps While Loading on a Phone",
    metaTitle: "Fix a Practice Page That Jumps While Loading on a Phone",
    metaDescription:
      "Why a medical practice page jumps as it loads on a phone and how to stop it with image sizes, reserved space and fonts. Call (561) 291-2681.",
    answer:
      "A page jumps when pictures, fonts or widgets arrive late and push the text down. Give every image a width and height, reserve space for embeds and banners, and load fonts early. Google calls the problem layout shift and treats a score of 0.1 or lower as good.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T14:50:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("The page that moves under your thumb"),
      p(
        "You are about to tap Request an Appointment and the page slides down because a photo finished loading above it. You tap the privacy link instead. This is layout shift, and it is more than a nuisance on a practice site. A patient who taps the wrong thing on a small screen may simply leave."
      ),
      p(
        "Google's web.dev team describes the cause in its Cumulative Layout Shift article, which we read before writing. Unexpected movement happens when images or videos have no set dimensions, when fonts render larger or smaller than their stand-ins, and when third-party ads or widgets resize themselves. It also notes that these problems are worse for real visitors than in a developer's test, because test images are often already in the browser's memory."
      ),
      h2("The number to know"),
      table(
        ["Cumulative Layout Shift score", "What Google's guidance calls it"],
        ["0.1 or lower", "Good"],
        ["Between 0.1 and 0.25", "Needs improvement"],
        ["Above 0.25", "Poor"]
      ),
      p(
        "web.dev recommends measuring the 75th percentile of real page loads, split by phone and desktop. In plain words, that means most of your visitors, not only the lucky ones on fast connections. Search Console's Core Web Vitals report shows these numbers for pages with enough traffic, and our [Core Web Vitals checklist](/guides/core-web-vitals-checklist-for-a-medical-practice-website) shows where to find them."
      ),
      h2("The four fixes that cover most practice sites"),
      ol(
        "Give every image width and height attributes. The web.dev guidance says to always include them on image and video elements, or reserve the space with the CSS aspect-ratio property, so the browser holds the right amount of room while the file downloads.",
        "Reserve space for anything that loads late: a map, a booking widget, a review feed or a cookie banner. A fixed-height box the same size as the finished item stops the content below from moving.",
        "Do not insert new content above what the visitor is already reading. A banner that slides in at the top pushes everything down, so place it in space that was already set aside or overlay it.",
        "Load fonts early and choose a fallback that is close in size, so the swap does not reflow the text. Our guide on [custom web fonts](/guides/loading-custom-web-fonts-on-a-medical-practice-website-without-slow-or-invisible-text-on-a-phone) goes through this."
      ),
      h3("Animation is a special case"),
      p(
        "web.dev explains that animations using transform, which slide or scale an element, do not push other elements around, so they do not count toward layout shift. Animations that change an element's height or position in the flow do count. If your theme animates a section opening, ask for a transform-based version."
      ),
      h2("Find which element is jumping"),
      ol(
        "Open the page in Chrome and right-click, then choose Inspect, and open the Lighthouse tab. Run a mobile report.",
        "Under diagnostics, look for the audits on images without dimensions and on layout shift elements. Each lists the offending items.",
        "Note that web.dev warns the listed elements are often the ones moved, not the one that caused the move. If a new box was added above, the items beneath it will appear in the list.",
        "Fix the top item, run the report again and compare. Record the before and after scores in your monthly notes."
      ),
      p(
        "Test on a real phone as well, on mobile data rather than office Wi-Fi. If the page is still moving, our guide on [lazy-loading images below the fold](/guides/lazy-loading-images-below-the-fold-on-a-practice-page-without-delaying-the-top-picture) and the one on [resizing photos before upload](/guides/resizing-and-compressing-office-and-staff-photos-before-upload-so-a-practice-page-loads-fast-on-a-phone) cover the remaining image causes."
      ),
    ],
    faqs: [
      {
        q: "What is a good layout shift score?",
        a: "web.dev says to aim for 0.1 or lower, measured at the 75th percentile of page loads on phone and desktop. Above 0.25 it counts as poor.",
      },
      {
        q: "Why do images need a width and height?",
        a: "Without them, the browser does not know how much room to leave until the file arrives, so everything under the picture jumps. With them, space is held in advance.",
      },
      {
        q: "Will fixing this raise our rankings?",
        a: "We cannot promise that. Layout stability is part of Google's Core Web Vitals, and a page that stays put is easier to use, which is reason enough to fix it.",
      },
      {
        q: "Does the cookie banner cause shifts?",
        a: "It can, if it pushes the page down when it appears. Overlay it at the bottom of the screen or reserve its space from the start.",
      },
      {
        q: "Where do I see real visitor data?",
        a: "In Search Console under Core Web Vitals, for pages with enough traffic. Smaller sites may see only lab results from a Lighthouse test.",
      },
    ],
    citations: [WEBDEV_CLS, WEBDEV_OPT_CLS],
    links: [
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Where to find your numbers." },
      { href: "/guides/resizing-and-compressing-office-and-staff-photos-before-upload-so-a-practice-page-loads-fast-on-a-phone", label: "Resizing Office and Staff Photos", description: "Smaller files load faster." },
      { href: "/guides/image-seo-and-alt-text-for-a-medical-practice-website", label: "Image SEO and Alt Text", description: "Describe each picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1900
  {
    slug: "loading-custom-web-fonts-on-a-medical-practice-website-without-slow-or-invisible-text-on-a-phone",
    keyword: "loading custom web fonts on a medical practice website without slow or invisible text on a phone",
    category: "How-to",
    title: "Loading Custom Web Fonts on a Practice Website Without Invisible Text on a Phone",
    metaTitle: "Web Fonts Without Invisible Text on a Practice Website",
    metaDescription:
      "Custom fonts can leave a practice page with blank text on a slow phone. Use fewer fonts, WOFF2 and font-display to keep words visible. (561) 291-2681",
    answer:
      "A custom font is a file the phone must download before it can show your words in your brand style. Use one or two font families, serve them as WOFF2, and tell the browser to show a plain stand-in while it waits. That keeps the phone number readable on a slow connection.",
    author: "Liam Costello",
    publishDate: "2026-11-18T15:00:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("When the words are not there yet"),
      p(
        "On a weak signal, some practice sites show a blank space where the headline should be, then the words appear a few seconds later. The page was waiting for a font file. For a visitor who wanted the office hours, those seconds are the difference between reading the page and pressing Back."
      ),
      p(
        "web.dev's guide to font best practices, which we read before writing, names two costs. If a web font has not loaded, browsers typically delay drawing the text, which can delay the first thing the visitor sees. And when the font swaps in, a stand-in font and the real one take up different space, which can make the page shift."
      ),
      h2("What browsers do by default"),
      p(
        "The same article states that Chromium-based browsers and Firefox block text rendering for up to three seconds when the font has not loaded, while Safari blocks text indefinitely. So the default experience differs by browser, and an iPhone can be the worst case. You control this with a setting called font-display."
      ),
      table(
        ["font-display value", "What the visitor sees, and the trade-off web.dev notes"],
        ["optional", "Plain text at once, and the web font is used only if it arrives very quickly. Best for speed and no font-swap shift, but a late font is skipped."],
        ["swap", "Plain text at once, then the web font replaces it. Words are never hidden, but a late swap can jar the layout."],
        ["block", "Blank text for a short time, then the web font. The brand look comes first, but text can be invisible while waiting."]
      ),
      h2("A short, safe checklist"),
      ol(
        "Count the fonts. Each family, weight and italic style is a separate file. Many practice themes load six or more when two would do.",
        "Serve them as WOFF2, the format web.dev recommends using on its own, because it compresses about 30 percent better than WOFF.",
        "Choose font-display swap for body text so the words appear immediately, or optional if you want the least movement.",
        "Declare the fonts early in the page's own style block so the browser finds them sooner, rather than behind a long chain of style files.",
        "If the fonts come from another company's server, ask your designer whether the connection is opened early. web.dev suggests a preconnect hint for that case."
      ),
      h3("Be careful with preloading"),
      p(
        "Preloading a font makes it discoverable sooner, but web.dev cautions that it takes browser resources from other files. Use it for the one or two fonts the top of the page needs, and not as a general fix. The article says that adjusting the stylesheets often addresses the root cause better."
      ),
      h2("How to see the problem yourself"),
      ol(
        "Open the page in Chrome, right-click and choose Inspect, then open the Network tab.",
        "Set throttling to a slow mobile profile and reload the page with the cache disabled.",
        "Watch the first few seconds. If the headline is blank, or the text visibly changes shape, you have a font-loading issue.",
        "Check the Network list for font files and count them. Note the total size and share it with your designer."
      ),
      p(
        "A plain system font is a perfectly respectable choice for body text, and it removes this whole problem. Keep any special font for the practice name and headings, and pair it with a stand-in of similar width to limit shifting. Our guide on [fixing a page that jumps while loading](/guides/layout-shift-on-a-practice-page-that-jumps-while-loading-on-a-phone-fixed-with-image-sizes) shows how to measure the result, and the [Core Web Vitals checklist](/guides/core-web-vitals-checklist-for-a-medical-practice-website) puts speed checks in one place."
      ),
    ],
    faqs: [
      {
        q: "What is font-display?",
        a: "It is a setting in the font's style rules that tells the browser what to show while the font file downloads. Values such as swap, optional and block trade speed against appearance.",
      },
      {
        q: "Which value should a practice choose?",
        a: "Swap is a good default for body text because words appear at once. Optional is the least likely to cause movement, at the cost of sometimes skipping the brand font.",
      },
      {
        q: "Is a Google Fonts link a problem?",
        a: "Not by itself. The page should load only the weights it needs and request them early. Count what the page actually downloads rather than assuming.",
      },
      {
        q: "Does this affect rankings?",
        a: "We cannot promise any ranking effect. Slow or invisible text hurts the visitor first, and it touches Google's speed measures, so it is a reasonable thing to tidy.",
      },
      {
        q: "Can we skip custom fonts entirely?",
        a: "Yes. System fonts need no download. Many practices keep a custom font for the heading only, which keeps the brand look and the speed.",
      },
    ],
    citations: [WEBDEV_FONTS],
    links: [
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Speed checks in one place." },
      { href: "/guides/layout-shift-on-a-practice-page-that-jumps-while-loading-on-a-phone-fixed-with-image-sizes", label: "Layout Shift on a Practice Page", description: "Stop the page from jumping." },
      { href: "/guides/mobile-first-indexing-explained-for-a-medical-practice-website", label: "Mobile First Indexing Explained", description: "Why the phone page matters." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1901
  {
    slug: "lazy-loading-images-below-the-fold-on-a-practice-page-without-delaying-the-top-picture",
    keyword: "lazy-loading images below the fold on a practice page without delaying the top picture",
    category: "How-to",
    title: "Lazy-Loading Images Below the Fold on a Practice Page Without Delaying the Top Picture",
    metaTitle: "Lazy-Loading Images on a Practice Page, Done Right",
    metaDescription:
      "Lazy-load pictures lower on a practice page to save phone data, but never the top photo. See the loading attribute and a quick check. (561) 291-2681",
    answer:
      "Lazy loading tells the browser to fetch a picture only when the visitor scrolls near it. Add loading=lazy to photos lower on the page, but leave the top picture alone so it appears at once. Always keep width and height on each image so the page does not jump.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T15:10:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Why picture weight matters on a phone"),
      p(
        "A practice page with a team photo, an office gallery, a map and a row of badges can quietly weigh more than the rest of the page together. On a phone with a weak signal, the visitor waits while pictures they have not scrolled to are downloaded. Lazy loading delays those pictures until they are needed."
      ),
      p(
        "web.dev's article on browser-level lazy loading, which we read before writing, notes that images are the most requested kind of file on most sites, and that at the 90th percentile sites send over 5 megabytes of images. Browsers now handle lazy loading themselves through a single attribute, with no extra script or library required."
      ),
      h2("The one attribute"),
      p(
        "The attribute is called loading. Set to lazy, it asks the browser to hold the picture until the visitor scrolls within a calculated distance. Set to eager, it is the normal behavior, and the same as leaving the attribute off. The article lists support in Chrome, Edge, Firefox and Safari. In its Chrome tests on 4G, 97.5 percent of lazy-loaded images had fully loaded within 10 milliseconds of becoming visible, so the visitor rarely sees a gap."
      ),
      table(
        ["Picture", "Lazy or not"],
        ["The top photo or banner that fills the first screen", "Not lazy. Load it normally so it appears at once"],
        ["Team photos and the office gallery lower down", "Lazy"],
        ["The map and review widget at the bottom", "Lazy, with a reserved box so nothing jumps"],
        ["Small icons in the first screen", "Not lazy"]
      ),
      h2("The mistake that makes a page slower"),
      p(
        "The article cautions against lazy-loading images likely to be in view when the page loads, and names the largest one on the first screen in particular. Delaying it works against you, because that picture is often the main item Google measures for loading speed. Some themes and plugins add lazy loading to every picture automatically, including the top one, so check."
      ),
      h3("Priority for the top picture"),
      p(
        "If the top picture is slow, web.dev says to raise its priority rather than make it lazy. The article describes an attribute called fetchpriority that can be set to high on that one image. Ask your designer to apply it only to the first large picture."
      ),
      h2("A five-minute check"),
      ol(
        "Open the page in Chrome, right-click and choose Inspect, then open the Elements panel and search for img.",
        "Look at the first large picture on the screen. It should not have loading=lazy. If it does, ask your designer to remove it.",
        "Look at a picture lower down. It should have loading=lazy, along with width and height numbers.",
        "In the Network tab, filter to Img and reload with throttling set to a slow phone. Lower pictures should appear in the list only after you scroll.",
        "Run a Lighthouse mobile report before and after, and write down the loading score and the largest-picture time."
      ),
      p(
        "Keep the dimensions on every picture, lazy or not. Without them the page jumps as each picture arrives, which our guide on [layout shift on a practice page](/guides/layout-shift-on-a-practice-page-that-jumps-while-loading-on-a-phone-fixed-with-image-sizes) explains. The article also says frames, such as an embedded map, can be lazy-loaded with the same attribute."
      ),
      p(
        "Before upload, shrink the files, as covered in our guide to [resizing and compressing office and staff photos](/guides/resizing-and-compressing-office-and-staff-photos-before-upload-so-a-practice-page-loads-fast-on-a-phone). Lazy loading is a second step, not a substitute for sending smaller pictures. Describe each picture too, as in the guide to [image SEO and alt text](/guides/image-seo-and-alt-text-for-a-medical-practice-website)."
      ),
    ],
    faqs: [
      {
        q: "What does loading=lazy do?",
        a: "It asks the browser to delay downloading a picture until the visitor scrolls near it, which saves data and speeds up the first screen.",
      },
      {
        q: "Should the top photo be lazy?",
        a: "No. web.dev says not to lazy-load images likely to be in view at load, especially the largest one on the first screen. Load it normally and, if needed, raise its priority.",
      },
      {
        q: "Does lazy loading work without JavaScript?",
        a: "The article says the loading attribute is handled by the browser, so images still load when JavaScript is off, though the delay only applies when JavaScript is on.",
      },
      {
        q: "Will lazy loading hide images from Google?",
        a: "Browser-level lazy loading is designed to load images as they come into view, so it should not. We still recommend viewing the live page in Search Console's inspection tool to confirm.",
      },
      {
        q: "Can I lazy-load an embedded map?",
        a: "Yes. The same attribute works on frames, so a map lower on the page can wait until the visitor scrolls to it. Reserve its space so the page does not jump.",
      },
    ],
    citations: [WEBDEV_LAZY],
    links: [
      { href: "/guides/resizing-and-compressing-office-and-staff-photos-before-upload-so-a-practice-page-loads-fast-on-a-phone", label: "Resizing Office and Staff Photos", description: "Send smaller files first." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Speed checks in one place." },
      { href: "/guides/image-seo-and-alt-text-for-a-medical-practice-website", label: "Image SEO and Alt Text", description: "Describe each picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1903
  {
    slug: "declaring-the-language-of-a-counseling-practice-page-and-of-a-spanish-phrase-inside-an-english-page",
    keyword: "declaring the language of a counseling practice page and of a Spanish phrase inside an English page",
    category: "How-to",
    title: "Declaring the Language of a Counseling Practice Page and of a Spanish Phrase Inside It",
    metaTitle: "Language Setting for a Counseling Page With Spanish Text",
    metaDescription:
      "Set the page language to English and mark a Spanish phrase inside it so screen readers pronounce each correctly. Plain steps. Call (561) 291-2681.",
    answer:
      "Every page should state its main language in the code, which is a lang value on the opening html tag. When a Spanish sentence, such as Hablamos español, sits inside an English page, wrap it with its own language marker so screen readers switch pronunciation. Check both in two minutes.",
    author: "Liam Costello",
    publishDate: "2026-11-18T15:20:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Why a language setting matters to a visitor"),
      p(
        "A screen reader needs to know which language it is speaking. If a page does not say, the reader may use the wrong voice, and an English sentence comes out mangled. The same thing happens in reverse when a Spanish phrase on an English page is read with English pronunciation, so a welcoming line becomes unintelligible to the person it was written for."
      ),
      p(
        "The W3C has two criteria for this, and we read both before writing. Language of Page says the default human language of each page can be determined by software. Language of Parts says the language of each passage or phrase can be determined too, except for proper names, technical terms, words of indeterminate language and words that have become part of the surrounding language."
      ),
      h2("Step one: the page language"),
      p(
        "The page language lives in the opening tag of the page code, written as html lang with a short code. English for the United States is en-US, or simply en. Most themes set this correctly, but sites built from templates sometimes carry another language code from a foreign-language demo, or no code at all."
      ),
      ol(
        "Open the page in Chrome, right-click and choose View page source.",
        "Look at the very first lines for the html tag. It should read lang with en or en-US.",
        "Repeat on a Spanish page, if you have one. It should read es, or a regional form of it.",
        "If the code is missing or wrong, give your web designer the page address and the correct value."
      ),
      h2("Step two: a Spanish phrase inside an English page"),
      p(
        "Many Florida counseling practices add a line such as Hablamos español beside a phone number, or a Spanish sentence on the contact page. The W3C says the language of such a phrase should be marked as well. In practice, your designer wraps it in a small container and gives it lang es."
      ),
      ul(
        "Mark whole sentences and short phrases, not only long passages. The W3C note says even a single word can need it unless an exception applies.",
        "Do not mark proper names, such as the name of the practice, or words readers already treat as English.",
        "A phrase that appears in an image needs the same words in the alt text, in the correct language."
      ),
      h3("What to do if you offer a full Spanish version"),
      p(
        "A complete Spanish page should have its own address and es declared on the page itself, as covered in our guides on [Spanish and English SEO for a Florida practice](/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice) and the [bilingual counseling page](/guides/bilingual-spanish-english-counseling-page-for-a-counseling-practice-without-clinical-claims). Part marking is for the occasional phrase inside an otherwise English page."
      ),
      h2("A two-minute test with a screen reader"),
      p(
        "Turn on the built-in screen reader on your phone or laptop, open the page and listen to the Spanish line. The voice should switch to Spanish pronunciation. If it reads in English, ask for the marker. Our [five-minute screen reader test](/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills) shows how to start the reader and move around a page."
      ),
      p(
        "Listing the languages your staff speaks is a separate task, covered in [how to list languages spoken and interpreter access](/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile). Do not claim a language unless a trained person is actually available to use it with clients."
      ),
    ],
    faqs: [
      {
        q: "What does the language setting look like?",
        a: "It is a lang value on the page's opening html tag, such as en-US. Visitors never see it, but screen readers, translation tools and some browsers use it.",
      },
      {
        q: "Do I have to mark every Spanish word?",
        a: "The W3C expects phrases and passages to be marked, with exceptions for proper names, technical terms and words that have become part of the surrounding language. When in doubt, mark the full phrase.",
      },
      {
        q: "Will this help Spanish-speaking patients find us?",
        a: "We cannot promise that. It makes the page read correctly for someone using a screen reader. Finding you in search depends on real Spanish pages, listings and reviews.",
      },
      {
        q: "Is the language setting the same as hreflang?",
        a: "No. The page language is for people and their software on that page. Hreflang tells search engines which language version of a page matches which audience.",
      },
      {
        q: "Who should make the change?",
        a: "Your web designer. Ask them to confirm the page language on the template and to mark the Spanish phrases, then listen to the result with a screen reader.",
      },
    ],
    citations: [WCAG_LANG_PAGE, WCAG_LANG_PARTS],
    links: [
      { href: "/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice", label: "Spanish and English SEO for a Florida Practice", description: "Real Spanish pages." },
      { href: "/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile", label: "Languages Spoken and Interpreter Access", description: "Say it honestly." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement Page", description: "Tell visitors how to report a barrier." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- new row A
  {
    slug: "form-error-messages-on-the-contact-and-booking-form-of-a-primary-care-practice-that-say-what-went-wrong-without-private-details",
    keyword: "form error messages on the contact and booking form of a primary care practice that say what went wrong without private details",
    category: "How-to",
    title: "Form Error Messages on a Primary Care Practice's Contact and Booking Form",
    metaTitle: "Contact Form Error Messages for a Primary Care Practice",
    metaDescription:
      "Write contact and booking form error messages that name the field and say what to fix, without asking for private details. Call (561) 291-2681.",
    answer:
      "When a patient submits the contact form with a mistake, the page should say in words which field is wrong and what to change, such as Phone number needs ten digits. Color alone is not enough. Keep the message short, put it next to the field, and never ask for health details to fix it.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T15:30:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("The form that says nothing"),
      p(
        "A new patient types a message, taps Send and the page reloads with the form empty or the same, and no explanation. Did it go through? Did it fail? Many practice forms behave this way when one field is wrong, and the visitor, unsure, closes the tab. A lead that was ready to call becomes silence."
      ),
      p(
        "The W3C's Error Identification criterion, which we read before writing, says that when an input error is detected automatically, the item in error is identified and the error is described in text. It adds that it is not enough to redisplay the form without a hint that the submission failed, and that color or text styling can be used as long as errors are also stated in text."
      ),
      h2("What a good message contains"),
      ul(
        "The name of the field, in the same words as its label, such as Email address.",
        "What is wrong, in plain terms: missing, too short, or not in the expected form.",
        "What to do next, in the same sentence where possible. The W3C notes that a message can meet both Error Identification and the separate Error Suggestion criterion at once, with an example like Email is not valid.",
        "A position next to the field, plus a short summary at the top for forms with several fields."
      ),
      table(
        ["Instead of", "Write"],
        ["Error", "Phone number needs ten digits, such as 561 555 0100"],
        ["Invalid input", "Email address is missing the @ sign"],
        ["Please correct the highlighted fields", "Two fields need attention: Name and Phone number"],
        ["Submission failed", "We could not send your message. Please call the office, or try again in a minute"]
      ),
      h2("Keep private details out of it"),
      p(
        "An error message should never ask for more than the form already needs, and it should never repeat what a patient typed in a message box. A contact form is not the place for symptoms or medical history. If your form allows a free-text message, add a note that the form is not for emergencies or health details, as covered in our guide on the [note under a contact form](/guides/what-happens-after-you-submit-note-under-a-medical-practice-contact-form-when-to-expect-a-reply-and-what-not-to-include)."
      ),
      h3("A failed send needs a phone number"),
      p(
        "Sometimes the problem is the website, not the patient. Show a clear failure message that includes the office phone number as a tappable link, so the visitor has another way to reach you. Then find out why the form failed, using the steps in [testing contact form emails that go to spam or never arrive](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website)."
      ),
      h2("Test it yourself without sending a real lead"),
      ol(
        "On a staging copy or with your web designer's help, open the form and leave the required fields empty before pressing Send.",
        "Read the messages aloud. Each should name a field and say what to do, without relying on a red border.",
        "Fill the email with a made-up bad address and check the message again.",
        "Use only a test setup. Never submit a live form to try it, because a real submission reaches the office inbox and your reports."
      ),
      p(
        "Finally, look at the form on a phone. The message should sit beside the field rather than at the top of a long page where it scrolls out of sight. Our guide to [online appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) helps decide which fields are needed at all, since fewer fields means fewer errors."
      ),
    ],
    faqs: [
      {
        q: "Is a red border enough to show an error?",
        a: "No. The W3C says errors must be described in text, though color can be used as an extra cue. A visitor who cannot see the color still needs the words.",
      },
      {
        q: "Where should the error message appear?",
        a: "Next to the field that has the problem, and also in a short summary near the top when several fields need attention. On a phone, make sure it is visible without scrolling.",
      },
      {
        q: "Should the message repeat what the patient typed?",
        a: "Not for free-text messages. It is safer to name the field and the problem, and leave out anything the patient wrote about their health.",
      },
      {
        q: "How do we test without sending a real lead?",
        a: "Use a staging copy or a test setup arranged with your web designer. Do not submit the live form to try it, since the real office inbox and reports would receive it.",
      },
      {
        q: "Does clearer error wording lead to more forms sent?",
        a: "We cannot promise a number. Compare the count of completed forms in your monthly report before and after the change, and keep the change if the count holds or rises.",
      },
    ],
    citations: [WCAG_ERROR],
    links: [
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "Ask for less." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stopping Spam on a Contact Form", description: "Keep real leads clean." },
      { href: "/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it", label: "Thank-You Page After a Contact Form", description: "Say what happens next." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- new row B
  {
    slug: "session-timeout-and-expiring-booking-page-on-a-counseling-practice-website-so-a-slow-typist-does-not-lose-the-form",
    keyword: "session timeout and expiring booking page on a counseling practice website so a slow typist does not lose the form",
    category: "How-to",
    title: "Session Timeouts on a Counseling Practice Booking Page: Do Not Lose the Form",
    metaTitle: "Booking Page Timeouts on a Counseling Practice Website",
    metaDescription:
      "A booking or intake page that expires too fast loses clients. See the W3C timing rule, how to warn and extend, and a quick test. (561) 291-2681",
    answer:
      "If a booking or intake page logs people out or clears a form after a set time, the visitor needs a way to turn that off, lengthen it, or get a warning of at least 20 seconds with an easy way to extend. Ask your vendor what the timer is, and test it slowly.",
    author: "Liam Costello",
    publishDate: "2026-11-18T15:40:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("The client who types slowly"),
      p(
        "Someone reaching out to a counselor for the first time may stop mid-form to think, to comfort a child or to find an insurance card. Some people also type slowly because of a disability, a tremor or a borrowed phone. If the page quietly expires after a few minutes and throws away what they typed, they have to start again, and many will not."
      ),
      p(
        "The W3C's Timing Adjustable criterion covers this, and we read it before writing. For each time limit the page sets, at least one thing must be true. The visitor can turn it off, adjust it over a wide range of at least ten times the default, or be warned before it ends and given at least 20 seconds to extend it with a simple action, at least ten times."
      ),
      h2("Where the timers hide"),
      ul(
        "Online scheduling widgets that hold a time slot for a few minutes while the form is completed.",
        "Intake forms inside a patient portal that sign the person out after inactivity.",
        "A contact form page that expires its security token and rejects the message on submit.",
        "A booking confirmation that disappears after a few seconds."
      ),
      p(
        "The criterion has exceptions: a real-time event such as an auction, a limit that is essential to the activity, and limits longer than 20 hours. A scheduling tool that holds a slot so nobody double-books is often essential, which is why the extend option matters there."
      ),
      h2("How to find out what your pages do"),
      ol(
        "List every page where a visitor types something: the contact form, the intake forms and the booking tool.",
        "Ask your web designer and each vendor in writing: is there a time limit, how long is it, and is the visitor warned before it ends?",
        "Open each page yourself, fill in half the form, then wait. Check at two minutes, five minutes and fifteen minutes.",
        "Press Send after the wait. Note whether you get a clear message or a blank form."
      ),
      h3("What a good warning looks like"),
      table(
        ["Part", "Good practice"],
        ["Timing of the warning", "Appears before time runs out, with at least 20 seconds left"],
        ["Wording", "Your session will end soon. Select Stay on this page to keep going"],
        ["Action", "One tap or key press to extend, repeatable"],
        ["If time does run out", "Keep what was typed, and say how to return to it"]
      ),
      h2("What to do when the vendor cannot change it"),
      p(
        "You cannot edit another company's booking tool, but you can offer a second route. Put the office phone number as a tappable link beside the tool, and say that the practice can schedule by phone at any time, as discussed in our guide on [paper forms and phone registration for patients without internet](/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice)."
      ),
      p(
        "Report the finding to the vendor with the page and the time at which it expired. For portal sign-in pages, see our guides on the [patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) and [first-time client contact forms](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time). Security timeouts on a portal that holds private records are legitimate, so the aim is a warning and an extension, not removing protection."
      ),
    ],
    faqs: [
      {
        q: "Is every timeout against the W3C rule?",
        a: "No. The criterion allows a timeout if the visitor can turn it off, adjust it, or extend it after a warning. It also has exceptions for essential limits and real-time events.",
      },
      {
        q: "Can a portal still sign people out for security?",
        a: "Yes. Protecting private records is legitimate. The aim is to warn people and let them extend the session, not to remove the timeout.",
      },
      {
        q: "How long should the warning give?",
        a: "At least 20 seconds, according to the W3C, with a simple action to extend, and the ability to extend at least ten times.",
      },
      {
        q: "What if our scheduling vendor will not change it?",
        a: "Add a phone number and a short contact form next to the tool, record the vendor's answer in your vendor sheet, and revisit the choice at renewal.",
      },
      {
        q: "How do we count lost forms?",
        a: "Compare form starts and completions if your tool reports both, and ask the vendor for the numbers. We cannot promise a figure for your site.",
      },
    ],
    citations: [WCAG_TIMING],
    links: [
      { href: "/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice", label: "Paper Forms and Phone Registration", description: "A second way in." },
      { href: "/guides/conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website", label: "Tracking Third-Party Booking Widgets", description: "Count what the tool does." },
      { href: "/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice", label: "Portal Login and Messaging Page", description: "Set expectations." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- new row C
  {
    slug: "autofill-and-phone-keyboard-settings-on-the-contact-form-of-a-medical-practice-website-so-a-new-patient-types-less",
    keyword: "autofill and phone keyboard settings on the contact form of a medical practice website so a new patient types less",
    category: "How-to",
    title: "Autofill and Phone Keyboard Settings on a Practice Contact Form So Patients Type Less",
    metaTitle: "Autofill and Keyboard Settings on a Practice Contact Form",
    metaDescription:
      "Add autocomplete labels and the right keyboard type to a practice contact form so phones fill in name, phone and email. Call (561) 291-2681.",
    answer:
      "Tell the phone what each box is for. Give the name, email and phone fields their autocomplete values and the right input type, and the phone offers saved details and shows the right keyboard. Fewer taps means fewer people give up before sending. Test it on an iPhone and an Android.",
    author: "Gio LaRoche",
    publishDate: "2026-11-18T15:50:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("Typing on a phone is the real cost of a form"),
      p(
        "Every extra tap on a small keyboard is a reason to quit. A contact form that makes a patient type a full name, an email address and a phone number from scratch, using the wrong keyboard for each, loses people who would have filled in a form that did it for them."
      ),
      p(
        "Phones can fill those boxes automatically, but only when the form says what each box is. The W3C's Identify Input Purpose criterion, which we read before writing, asks that the purpose of fields collecting information about the user can be determined by software. Its example is a contact form that names the purpose of name, street, city, telephone and email fields, which lets the browser fill them from saved values."
      ),
      h2("The attribute that does it"),
      p(
        "The attribute is called autocomplete, and it takes a fixed list of values. The W3C page shows several, including name, given-name, family-name and username. It explains that this is finer than the field's type, because it can say which kind of name is expected. Standard values also exist for email and for telephone numbers."
      ),
      table(
        ["Form box", "Autocomplete value and input type"],
        ["Full name", "autocomplete name, input type text"],
        ["Email", "autocomplete email, input type email"],
        ["Phone", "autocomplete tel, input type tel"],
        ["Message", "No autocomplete value needed, a plain multi-line text area"]
      ),
      p(
        "Input type is the second half. An email box with type email shows a keyboard with the @ sign handy, and a phone box with type tel opens the number pad. These two changes cost a designer a few minutes and spare the patient a lot of switching between keyboards."
      ),
      h2("What not to autofill"),
      ul(
        "Do not ask for date of birth, address or insurance numbers on a first contact form unless you truly need them. Fewer fields mean fewer taps.",
        "Do not turn autocomplete off on the name, email and phone boxes. Some themes disable it by default, which defeats the point.",
        "Do not add a field for health details. The form is a contact route, not an intake record."
      ),
      p(
        "Our guide on [online appointment request form fields](/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out) and the one for [counseling first contact forms](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) explain which boxes belong on the form."
      ),
      h2("A five-minute test on real phones"),
      ol(
        "Use a phone that has your own contact details saved in its browser or keyboard. Open the contact page.",
        "Tap the name box. The phone should offer to fill the name, and the email and phone boxes should follow.",
        "Tap the phone box and check that a number pad appears. Tap the email box and check for the at sign.",
        "Repeat on a second type of phone, since iPhones and Android phones offer different suggestions.",
        "Stop before pressing Send. Never submit the live form to test, as it would reach the office inbox."
      ),
      h3("If the boxes do not fill"),
      p(
        "Open the page source and look at the input tags. If the autocomplete value is missing, send your designer the table above. If it is present and the phone still does not fill, the phone's own saved details may be missing, which is a setting on the phone rather than your site."
      ),
      p(
        "Beyond autofill, make the labels readable, as covered in our guide on [accessible intake forms for patients with low vision](/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website), and keep the confirmation clear with a [thank-you page](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it) that your tracking can count."
      ),
    ],
    faqs: [
      {
        q: "What is autocomplete on a form?",
        a: "It is an attribute that tells the browser what kind of information a box expects, so the browser can offer saved details. It uses a fixed list of values such as name, email and tel.",
      },
      {
        q: "Does autofill share patient data with us?",
        a: "No. The browser fills the box from details the visitor saved on their own device. Nothing is sent to your site until the visitor presses Send.",
      },
      {
        q: "Why does the phone number need its own keyboard?",
        a: "A number pad avoids switching between letters and digits, which saves taps and mistakes. Setting the input type to tel opens it.",
      },
      {
        q: "Will this raise our number of form leads?",
        a: "We cannot promise a figure. Compare completed forms in your monthly report for the month before and after, and keep a note of any other change made that month.",
      },
      {
        q: "Does this affect accessibility?",
        a: "Yes. The W3C says declaring the purpose of each field helps people with certain cognitive disabilities, and assistive tools can show familiar icons beside the fields.",
      },
    ],
    citations: [WCAG_INPUT_PURPOSE],
    links: [
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "Which boxes belong." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Readable labels." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stopping Spam on a Contact Form", description: "Keep real leads clean." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- new row D
  {
    slug: "keeping-the-phone-number-and-contact-link-in-the-same-place-on-every-page-of-a-medical-practice-website",
    keyword: "keeping the phone number and contact link in the same place on every page of a medical practice website",
    category: "Checklist",
    title: "Keeping the Phone Number and Contact Link in the Same Place on Every Practice Page",
    metaTitle: "Same-Place Phone Number and Contact Link on Every Page",
    metaDescription:
      "Put the phone number and contact link in the same spot on every page of a practice website. A simple page-by-page check. Call (561) 291-2681.",
    answer:
      "Put the phone number and the contact link in the same position on every page, usually the header on a phone and the top right on a laptop. The W3C calls this Consistent Help. Check by opening five different pages and confirming the help sits in the same order each time.",
    author: "Liam Costello",
    publishDate: "2026-11-18T16:00:00Z",
    dateModified: "2026-11-18",
    readMinutes: 5,
    sections: [
      h2("A patient needs help at the moment they are stuck"),
      p(
        "Someone is partway through your new patient page and cannot find the answer. They want to call. If the phone number is in the header on the home page, in the footer on the services page and missing on the insurance page, they have to hunt. A visitor who hunts may leave."
      ),
      p(
        "The W3C's Consistent Help criterion, which we read before writing, says that when help is offered on multiple pages in a set of pages, it should appear in the same order relative to other page content. It names four kinds of help: human contact details, a human contact mechanism, a self-help option and a fully automated contact mechanism."
      ),
      h2("What counts as help on a practice site"),
      ul(
        "The office phone number, as text or as a tappable link.",
        "A link to the contact page or a request form.",
        "A link to the frequently asked questions page.",
        "A chat or text option, if you offer one."
      ),
      p(
        "The W3C's own example is a medical appointment scheduling form: when a patient cannot find the service they need, a consistently placed way to talk to a person helps them quickly. It adds that the help may sit directly on the page or be a direct link to a page that contains it."
      ),
      h2("The page-by-page check"),
      ol(
        "Pick five pages that differ: the home page, a service page, a provider page, a guide and the insurance page.",
        "Open each on a phone, then on a laptop. Note where the phone number and the contact link appear, using the order of items, for example header first, menu second.",
        "Write the positions down, one line per page. Every line should show the same position.",
        "If a page differs, ask your designer whether it uses a different template, and move the help into the shared header or footer.",
        "Repeat after any redesign, new page template or added plugin."
      ),
      p(
        "Write one line per page in your notes in this form: page name, then where the phone number sits, then where the contact link sits. Every line should read the same."
      ),
      h3("The W3C allows a change you cause yourself"),
      p(
        "The criterion looks at the same page variation. If a visitor zooms in or turns the phone sideways, the layout may change, and that is fine. What it checks is the relative order across pages shown the same way."
      ),
      h2("Where to put it"),
      p(
        "The simplest pattern is a header that stays the same on every page, with a Call button and a Contact link, and a footer that repeats the phone number, hours and address. Our guides on the [navigation menu and footer](/guides/navigation-menu-and-footer-for-a-medical-practice-website) and the [click-to-call button](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) show how to build both."
      ),
      p(
        "Make sure the number is written the same way everywhere, as in [phone number format and click-to-call links on every page](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website), and that your call tracking sees every tap. Do not stack extra help on top of it; a pop-up that covers the button defeats the purpose, as the guide on [pop-ups and chat widgets on the mobile page](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) explains."
      ),
    ],
    faqs: [
      {
        q: "What does Consistent Help require?",
        a: "If help such as a phone number, contact link, self-help page or automated contact is repeated on several pages, it must appear in the same order relative to other content on each page.",
      },
      {
        q: "Must the number be in the header?",
        a: "The criterion does not name a place. It asks for consistency. The header is the simplest choice because it appears on every page automatically.",
      },
      {
        q: "Do we need a chat tool?",
        a: "No. A phone number and a contact link meet the idea. If you add chat, place it in the same spot on every page.",
      },
      {
        q: "Will this increase calls?",
        a: "We cannot promise a number. It removes a reason a visitor may fail to call. Watch calls in your monthly report for the following month.",
      },
      {
        q: "Can the layout change on a phone?",
        a: "Yes. The W3C compares pages shown the same way, so a different mobile layout is fine as long as it is consistent across pages on that device.",
      },
    ],
    citations: [WCAG_HELP],
    links: [
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation Menu and Footer", description: "One header, one footer." },
      { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Call Links", description: "Write it the same everywhere." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Count every tap." },
      LOC,
    ],
  },
];
