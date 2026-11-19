// -- Guides batch 50 - 2026-11-19 --
// Five website how-to guides from the Command Center queue (rows 1918, 1920, 1921, 1923, 1924), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is built from
// the W3C WAI WCAG 2.2 Understanding page(s) for its criterion, fetched and read before writing.
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
const WCAG_NRV = W("Understanding Success Criterion 4.1.2: Name, Role, Value", "name-role-value");
const WCAG_LIN = W("Understanding Success Criterion 2.5.3: Label in Name", "label-in-name");
const WCAG_AUTH = W("Understanding Success Criterion 3.3.8: Accessible Authentication (Minimum)", "accessible-authentication-minimum");
const WCAG_FNO = W("Understanding Success Criterion 2.4.11: Focus Not Obscured (Minimum)", "focus-not-obscured-minimum");
const WCAG_HOVER = W("Understanding Success Criterion 1.4.13: Content on Hover or Focus", "content-on-hover-or-focus");
const WCAG_SPACING = W("Understanding Success Criterion 1.4.12: Text Spacing", "text-spacing");

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty13: Guide[] = [
  // ---------------------------------------------------------------- 1918
  {
    slug: "phone-and-menu-icon-buttons-that-need-a-spoken-name-on-a-primary-care-practice-website",
    keyword: "icon-only buttons such as a phone icon or menu icon given a spoken name on a primary care practice website",
    category: "Checklist",
    title: "Giving a Phone Icon or Menu Icon a Spoken Name on a Practice Website",
    metaTitle: "Spoken Names for Phone and Menu Icons on a Practice Site",
    metaDescription:
      "A phone icon or menu icon with no spoken name is invisible to a screen reader and to voice control. Check yours in five minutes. (561) 291-2681",
    answer:
      "Every button made only of a picture, such as a phone handset or three lines for the menu, needs a name that a screen reader can say and a voice-control user can speak. Where words are printed beside the icon, the spoken name should start with those same words.",
    author: "Gio LaRoche",
    publishDate: "2026-11-19T15:00:00Z",
    dateModified: "2026-11-19",
    readMinutes: 5,
    sections: [
      h2("The button that says nothing"),
      p(
        "Most practice websites on a phone lean on small pictures. A handset icon stands for call us, three stacked lines stand for the menu, and an envelope stands for send a message. A sighted visitor reads those pictures at a glance. A person using a screen reader gets whatever name the code gives the button, and when the code gives it none, the reader may say only the word button, or the web address of the link."
      ),
      p(
        "That is more than a polish problem. The phone icon is often the most valuable control on the page, and a patient who cannot tell which button dials the office will call somewhere else or not call at all."
      ),
      h2("What the W3C says a control must have"),
      p(
        "The Name, Role, Value criterion, which we read in full before writing this guide, asks that for every interface component the name and role can be worked out by software. It adds that names may be visible or invisible. An icon button usually needs an invisible one, because no text is printed on it. The same page lists the failure we are describing: an interface control with no programmatically determined name, and an image that is the only content in a link with no accessible name."
      ),
      p(
        "The W3C also says standard controls already meet the criterion when used according to specification. In plain terms, a real button or a real link is the safe starting point, and the trouble tends to begin when a designer builds a custom control out of a styled box."
      ),
      h2("When words are printed next to the icon"),
      p(
        "The Label in Name criterion covers a neighboring case. If the screen shows the word Menu under the three lines, the name spoken for that control must contain the same word. Speech-input users move around by saying what they see, so a visible Menu paired with a hidden name such as navigation drawer leaves them unable to say anything that works. The W3C gives a best practice for this: put the visible text at the start of the name."
      ),
      table(
        ["What the visitor sees", "Spoken name that works, and one that fails"],
        ["Handset picture, no words", "Works: Call the office. Fails: nothing at all, or just button"],
        ["Three lines with the word Menu", "Works: Menu. Fails: Navigation drawer"],
        ["Envelope picture, no words", "Works: Send a message. Fails: icon-3"],
        ["Cross in the corner of a banner", "Works: Close notice. Fails: x"]
      ),
      h2("A five-minute check of your own icons"),
      ol(
        "Open your home page on a phone and list every control that has a picture and no printed words.",
        "Turn on the screen reader built into the phone and touch each one slowly, then write down what you hear.",
        "Next to each, mark whether the spoken name says what the button does.",
        "For any control that also shows printed words, say those exact words to the phone's voice control and see whether it responds.",
        "Send the list to whoever maintains the site, one plain sentence per icon."
      ),
      h3("What to ask for in the request"),
      p(
        "You do not need the code, only the wish. The W3C's own list of sufficient techniques includes using an attribute called aria-label when a visible label cannot be used, and using real HTML buttons and links. Ask your developer for a clear name on each icon-only control, matched to any visible text, and ask them to confirm the change by listening with a screen reader rather than just reading the code."
      ),
      h2("Keep the call button findable"),
      p(
        "A spoken name does not replace a good button. Keep the telephone control a real tel link so it dials in one tap, as described in our [click-to-call button and mobile layout guide](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website), and make sure it is large enough to hit. We do not give legal advice, and naming your icons does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does a title tooltip count as a name for an icon?",
        a: "Not reliably. Some screen readers announce it and others do not, and it never shows on a phone touch screen. The W3C's sufficient techniques name an aria-label or a real visible label instead. Ask your developer for a proper accessible name rather than relying on a tooltip.",
      },
      {
        q: "Should the spoken name be longer than the visible word?",
        a: "It can be, as long as it contains the visible word. The W3C gives the example of Search for a value beginning with the visible word Search. The safest habit is to put the printed word first, so a person who says it aloud is understood.",
      },
      {
        q: "Does our website builder handle this for us?",
        a: "Sometimes, but do not assume it. Many themes ship icon buttons with no name. The only reliable answer is to listen to your own pages with a screen reader, which takes about five minutes, and to note every icon that is announced as just a button.",
      },
      {
        q: "Which icons matter most on a practice site?",
        a: "Start with the phone icon, the menu button, any booking or message icon, and the close button on a banner or chat box. Those are the controls that lead to a call, a form or a way out of a window, so a missing name costs the most there.",
      },
      {
        q: "Will this bring in more calls?",
        a: "We cannot promise a number. It removes one reason a visitor who relies on a screen reader or voice control cannot find the call button. Counting calls from your phone link for a month before and after the change is the honest way to see the effect.",
      },
    ],
    citations: [WCAG_NRV, WCAG_LIN],
    links: [
      { href: "/guides/five-minute-screen-reader-test-of-the-contact-and-booking-pages-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Screen Reader Test", description: "Hear your pages the way a patient does." },
      { href: "/guides/tap-target-size-and-spacing-for-call-and-book-buttons-on-a-primary-care-practice-phone-page", label: "Tap Target Size for Call and Book Buttons", description: "Make the buttons easy to hit." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1920
  {
    slug: "patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website",
    keyword: "patient portal sign-in that allows a password manager and paste so a patient is not locked out by a puzzle",
    category: "How-to",
    title: "Patient Portal Sign-In That Allows a Password Manager and Paste",
    metaTitle: "Portal Sign-In That Allows Password Managers and Paste",
    metaDescription:
      "Check whether your patient portal sign-in blocks pasting or password managers, and what to ask your portal vendor to change. Call (561) 291-2681",
    answer:
      "A patient should be able to sign in by pasting a password or letting a password manager fill the fields. Sign-in pages that block pasting, split a code across single-digit boxes, or ask for the third letter of a password make some patients fail. Test yours, then tell the portal vendor.",
    author: "Liam Costello",
    publishDate: "2026-11-19T15:10:00Z",
    dateModified: "2026-11-19",
    readMinutes: 5,
    sections: [
      h2("Locked out at the front door"),
      p(
        "A patient portal is where people read visit summaries and send questions to the office, and the sign-in page decides whether they get that far. Most practices do not build the page themselves. It belongs to the portal vendor, and the practice only links to it. That does not make the problem someone else's, because a patient who cannot sign in phones your front desk."
      ),
      h2("What the W3C asks of a sign-in step"),
      p(
        "The Accessible Authentication (Minimum) criterion, which we read in full before writing, begins with a simple idea. Remembering a password, solving a puzzle or retyping a code is a mental task, and some people with cognitive disabilities cannot do it reliably. So no step of signing in should depend on such a task unless the page offers at least one of four things: another method that needs no such task, a tool that helps the person finish it, a test that only asks them to recognize objects, or one that asks them to identify their own uploaded content."
      ),
      p(
        "The page gives two examples of a helping tool: password managers filling in the fields, and copy and paste to avoid retyping. In its words, if every step needs a memory or typing task, a way through that avoids it has to exist."
      ),
      h3("Four things that break it"),
      ul(
        "A password box that refuses pasted text and shows a message telling the patient to type it by hand.",
        "A six-digit code split into six separate boxes, where pasting the whole code fills only the first box.",
        "A prompt that asks for the first, third and fifth character of a password instead of the whole thing.",
        "A script that stops the browser or a password manager from filling the fields."
      ),
      p(
        "The W3C names the same patterns as ways to fail and lists, among its failure examples, preventing a password or code from being entered in the same format that was copied."
      ),
      h2("A test you can run without signing in"),
      p(
        "You do not need a patient's account for this, and you should never use one. Open the portal sign-in page from your own website and stop short of pressing the final button."
      ),
      ol(
        "Copy any made-up word from a note on your computer.",
        "Paste it into the password box. The dots should appear. If nothing happens, or a message appears, write down the page address and what it said.",
        "Click into the username box and see whether your browser or password manager offers to fill it.",
        "If the portal sends a text code, ask the vendor to confirm that the code box accepts a pasted number.",
        "Repeat on a phone, where most patients sign in."
      ),
      h2("What to send the portal vendor"),
      p(
        "Write one short message naming the page, the blocked step and the date you tested. Ask whether pasting and password managers can be allowed on the sign-in and code pages, and whether there is another way in that needs no code typing. The W3C says an email-and-password form can meet the criterion when fields are properly named and not blocked, and it lists email link sign-in as one technique that works."
      ),
      h3("Keep the link easy to find"),
      p(
        "While you wait for the vendor, make sure your own site links to the sign-in page plainly. The guide on [making the patient portal login page findable and safe](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) covers placement, and the one on [accessible intake forms](/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website) covers the forms around it. We do not give legal advice, and this check does not by itself make a portal conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is the sign-in page our responsibility if the vendor runs it?",
        a: "The vendor controls the code, but patients experience it as part of your practice. You cannot change it, yet you can test it, report the exact blocked step in writing, and keep a plain phone number beside the link for anyone who is stuck.",
      },
      {
        q: "Why would a site block pasting at all?",
        a: "Some builders believe it protects accounts. The W3C takes the opposite view for people who rely on password managers and copy and paste, and says blocking them forces transcription. A blocked paste can lock out the patients who most need help.",
      },
      {
        q: "Do we have to remove the security code step?",
        a: "No. The criterion does not ask you to drop two-step sign-in. It asks that the code can be pasted or filled in, and that a method which avoids transcribing exists. Offering a choice of methods lets each patient pick the easiest one.",
      },
      {
        q: "Does this cover creating a new portal account?",
        a: "The W3C says the criterion focuses on existing users signing in, not on choosing login details or starting an account. The same fixes, such as allowing paste, tend to help account creation too, so it is worth asking for both.",
      },
      {
        q: "How do we confirm the fix afterward?",
        a: "Repeat the same paste and password manager test on a laptop and a phone once the vendor says it is done, and write the date down. A vendor note saying it is fixed is not the same as the page behaving that way.",
      },
    ],
    citations: [WCAG_AUTH],
    links: [
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Patient Portal Login Page", description: "Make it findable and safe." },
      { href: "/guides/accessible-intake-forms-for-patients-with-low-vision-or-limited-reading-skills-on-a-medical-practice-website", label: "Accessible Intake Forms", description: "Make forms easier to complete." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement and Barrier Reports", description: "Give patients a way to tell you." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1921
  {
    slug: "sticky-header-or-cookie-banner-covering-the-link-a-keyboard-user-just-reached-on-a-medical-practice-website",
    keyword: "sticky header or cookie banner covering the link a keyboard user has just reached on a medical practice website",
    category: "How-to",
    title: "When a Sticky Header or Cookie Banner Hides the Link a Keyboard User Reached",
    metaTitle: "Sticky Header Hiding Keyboard Focus on a Practice Site",
    metaDescription:
      "A sticky header or cookie banner can cover the button a keyboard user just reached. Test your pages and ask your web person for the fix. (561) 291-2681",
    answer:
      "Press Tab through your page with the sticky header and cookie banner showing. If the link or button you land on slides out of sight behind them, a keyboard user is lost. The fix is usually a small style change that leaves room around the fixed bars.",
    author: "Gio LaRoche",
    publishDate: "2026-11-19T15:20:00Z",
    dateModified: "2026-11-19",
    readMinutes: 5,
    sections: [
      h2("Tabbing into the dark"),
      p(
        "Some patients move around your site with the Tab key instead of a mouse. They may use a keyboard, a switch, or voice commands that act through the keyboard. Each press of Tab moves a highlight to the next link or button, and the person follows that highlight with their eyes. If the highlighted item scrolls up under a header that stays fixed to the top of the screen, the person is left looking at a page where nothing seems selected."
      ),
      p(
        "The W3C says as much in its Focus Not Obscured (Minimum) page, which we read in full before writing. Where people cannot see the item with focus, they may not know how to proceed or may think the page has stopped responding."
      ),
      h2("What the rule asks"),
      p(
        "The criterion says that when a component receives keyboard focus, it must not be entirely hidden by content the author created. At this level it can be partly covered. The W3C is clear that the more is covered, the harder it is to see, and that the best outcome, covered by a stricter level, is none of it hidden."
      ),
      p(
        "The page names the usual causes: sticky footers, sticky headers and non-modal dialogs. It gives a direct example for practices to note. A cookie banner built as sticky content fails the criterion if it entirely covers an item that receives focus."
      ),
      table(
        ["Fixed element", "Where it often goes wrong"],
        ["Header bar with a phone button", "A link scrolled to the top edge slides under the bar"],
        ["Cookie or consent banner at the bottom", "The submit button sits behind the banner when tabbed to"],
        ["Floating chat button", "It sits over the last field of a form"],
        ["Sticky call strip on a phone", "It covers the footer links reached by Tab"]
      ),
      h2("A ten-minute test with the fixed elements showing"),
      ol(
        "Open your home page in a private window so the cookie banner appears, and leave it showing.",
        "Click once on a blank part of the page, then keep pressing Tab and watch the highlight, not the page.",
        "Whenever the highlight vanishes, note the page address and which fixed bar covered it.",
        "Repeat on the contact page, going through every form field down to the submit button.",
        "Narrow the browser window to about the width of a phone and run the same pass, because bars take more space there."
      ),
      h3("Which fixes the W3C names"),
      p(
        "The page lists ways to pass. One is making the banner modal, so the visitor must deal with it before moving through the page. Another is adding space with a style setting called scroll padding, which keeps scrolled items clear of the fixed bar. A third is letting a notification close when focus leaves it. Its list of sufficient techniques is that one scroll padding method, and its failure example is a sticky header or footer completely hiding focused elements."
      ),
      h2("What to hand your web person"),
      p(
        "Send the list from your test with page addresses and a note on which bar caused each case. Ask for the fix to be checked again by tabbing through the same pages. Our guide on [keyboard focus outlines and tab order on the booking and contact pages](/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website) covers whether the highlight is visible at all, and the one on [pop-ups, banners and chat widgets on a phone page](/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website) covers the overlays themselves. We do not give legal advice, and this check does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Is it a failure if the item is only partly covered?",
        a: "At the AA level of the W3C criterion, partly covered is allowed, while entirely hidden is not. The page still advises designing so that little or none of the focused item is covered, because a half-hidden button is harder to follow.",
      },
      {
        q: "Does this apply to a menu a visitor opens on purpose?",
        a: "The W3C says content opened by the user may cover a focused item without failing, if the person can reveal the item without moving focus onward. A chat window left open that stays on top can still cause trouble, so test it too.",
      },
      {
        q: "Can a cookie banner be made to pass?",
        a: "Yes. The W3C says ways to pass include making the banner modal, so it must be dismissed first, or using scroll padding so it does not overlap other content. Banners that need no response can also close when focus moves away.",
      },
      {
        q: "Who should fix it, our web person or the plugin maker?",
        a: "Start with whoever manages the site, since many fixes are a single style rule. If the banner comes from a plugin or a vendor script, send the maker the page address and the step where the highlight disappears, and keep a copy of your note.",
      },
      {
        q: "Will fixing this help the practice get more bookings?",
        a: "We cannot promise a number. It removes one way a keyboard user loses their place before reaching the contact button. Count your submitted forms for a month before and after, and keep in mind that other things change at the same time.",
      },
    ],
    citations: [WCAG_FNO],
    links: [
      { href: "/guides/keyboard-focus-outline-and-tab-order-on-the-booking-and-contact-pages-of-a-counseling-practice-website", label: "Keyboard Focus Outline and Tab Order", description: "Make the highlight visible." },
      { href: "/guides/pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website", label: "Pop-Ups, Banners and Chat Widgets", description: "Keep overlays from hiding the call button." },
      { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "A no-tech check you can run." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1923
  {
    slug: "menus-and-tooltips-that-vanish-before-a-patient-can-read-them-on-a-counseling-practice-website",
    keyword: "menus and tooltips that vanish before a patient can read them on a counseling practice website",
    category: "Checklist",
    title: "Menus and Tooltips That Vanish Before a Client Can Read Them",
    metaTitle: "Menus and Tooltips That Vanish Too Fast on a Counseling Site",
    metaDescription:
      "Pop-up menus and tooltips that disappear when the mouse moves can lock out visitors who zoom in. A three-point check for your site. (561) 291-2681",
    answer:
      "Any pop-up that appears when someone hovers or tabs to something, such as a services submenu or an hours tooltip, should be easy to close with the Escape key, should stay open while the pointer moves onto it, and should stay until the visitor is done with it.",
    author: "Liam Costello",
    publishDate: "2026-11-19T15:30:00Z",
    dateModified: "2026-11-19",
    readMinutes: 5,
    sections: [
      h2("The hover box that runs away"),
      p(
        "Many counseling websites show a small box when the pointer rests on something. A services menu drops down, an insurance logo shows a note, or a provider photo reveals a short line. For a visitor who zooms the page to read it, the box can be the entire screen, and moving the mouse toward it can make it disappear."
      ),
      h2("What the W3C asks for"),
      p(
        "The Content on Hover or Focus criterion, which we read in full before writing this guide, applies where hover or keyboard focus makes extra content appear and then disappear. It sets three conditions, in its own labels: dismissible, hoverable and persistent."
      ),
      table(
        ["Condition", "In plain words"],
        ["Dismissible", "The visitor can close the box without moving the pointer or the keyboard focus, for example by pressing Escape"],
        ["Hoverable", "The pointer can travel onto the new box without the box vanishing"],
        ["Persistent", "The box stays until hover or focus is removed, the visitor closes it, or its information is no longer true"]
      ),
      p(
        "The W3C gives its reasons. People who use screen magnification see only a small part of the page, and the view follows the pointer or focus, so a box that cannot be dismissed can hide what they came to read. Large pointers set in system settings can also cover a good deal of a small box."
      ),
      h3("Cases the criterion leaves out"),
      ul(
        "Tooltips drawn by the browser itself from a plain title attribute, because the author does not control how they look.",
        "Boxes that deliver an input error message, which can stay in place.",
        "Extra content that covers nothing meaningful, such as blank space.",
        "Dialogs that take focus on purpose, which are covered by other rules."
      ),
      h2("Test every pop-up on three paths"),
      ol(
        "List each place where something appears on hover on your home page, services page and contact page.",
        "Pointer test: rest the mouse on the trigger, then slowly slide it onto the new box. It should not disappear on the way.",
        "Keyboard test: Tab to the same trigger. The same box should appear, and pressing Escape should close it while focus stays put.",
        "Patience test: leave the box alone for ten seconds. It should still be there.",
        "Zoom the browser to about two hundred percent and repeat the first three steps."
      ),
      h2("A simpler answer is often better"),
      p(
        "The W3C itself notes that there are usually more predictable ways to add content to a page. For a counseling practice, the plain option is to print the line in the page, such as the insurance note or the hours, rather than hiding it in a pop-up. A pop-up that holds only a repeated phone number or a short label adds risk with no benefit."
      ),
      p(
        "Where you do keep a dropdown menu, make sure it opens on keyboard focus as well as hover, and closes on Escape. The guide on [collapsible sections that stay readable by search engines and screen readers](/guides/collapsible-faq-and-accordion-sections-on-a-counseling-practice-page-that-stay-readable-by-search-engines-and-screen-readers) covers click-to-open content, which avoids most of these problems. We do not give legal advice, and this check does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Does a browser tooltip from a title attribute count?",
        a: "The W3C leaves out tooltips that the browser draws itself and the author does not change. A custom tooltip, submenu or popover that your site builds is covered. If you are unsure which kind you have, ask your developer to look.",
      },
      {
        q: "Why does it matter if the box can be dismissed?",
        a: "For a visitor using magnification, the box can cover the thing they were reading, and moving the pointer away to close it also moves the magnified view. Pressing Escape lets them clear the screen without losing their place.",
      },
      {
        q: "Does the same box need to appear for keyboard users?",
        a: "Yes. The W3C says content that appears on hover should also appear on keyboard focus, which is part of its separate keyboard criterion. Test with Tab as well as with the mouse, since the two paths are often built differently.",
      },
      {
        q: "Is a dropdown services menu a problem?",
        a: "Not by itself. It is covered by the three conditions, so check that it opens from the keyboard, lets the pointer cross onto the menu, and can be closed with Escape. Many menus built from standard parts already behave this way.",
      },
      {
        q: "What should we send our web person?",
        a: "One line per pop-up, with the page address, which of the three conditions failed, and how you saw it. Ask for a retest of the same steps afterward. A written list with dates gives you something to compare against later.",
      },
    ],
    citations: [WCAG_HOVER],
    links: [
      { href: "/guides/collapsible-faq-and-accordion-sections-on-a-counseling-practice-page-that-stay-readable-by-search-engines-and-screen-readers", label: "Collapsible FAQ and Accordion Sections", description: "Click-to-open content done safely." },
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Pages that survive zooming." },
      { href: "/guides/five-minute-keyboard-only-test-of-a-medical-practice-website-that-a-practice-owner-can-run-without-technical-skills", label: "Five-Minute Keyboard-Only Test", description: "A no-tech check you can run." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1924
  {
    slug: "text-spacing-and-line-height-that-survive-a-patients-larger-text-settings-on-a-practice-page",
    keyword: "text spacing and line height that survive a patient's own larger-text settings on a practice page",
    category: "Checklist",
    title: "Text Spacing That Survives a Patient's Own Reading Settings on a Practice Page",
    metaTitle: "Text Spacing a Patient Can Change on Your Practice Page",
    metaDescription:
      "Patients who stretch line and letter spacing for easier reading can lose text and buttons on some pages. Test yours in ten minutes. (561) 291-2681",
    answer:
      "Some patients stretch the space between lines, letters and words so a page is easier to read. Your page should keep every word and every button working when they do. Test it by applying the W3C's four spacing values and checking for cut-off or overlapping text.",
    author: "Gio LaRoche",
    publishDate: "2026-11-19T15:40:00Z",
    dateModified: "2026-11-19",
    readMinutes: 5,
    sections: [
      h2("When a reading setting breaks the page"),
      p(
        "Plenty of patients adjust how text looks so that it is easier to read. People with low vision or dyslexia, and anyone tired at the end of a long day, may set looser spacing in a browser extension or a custom style sheet. If the page was built with boxes that hold exactly the text it started with, extra spacing pushes words out of the box and the Book Now label gets chopped in half."
      ),
      h2("The four values to test against"),
      p(
        "The Text Spacing criterion, which we read in full before writing, names four settings. No content or function may be lost when all four are applied at once and nothing else is changed."
      ),
      table(
        ["Setting", "Minimum the page must survive"],
        ["Line height", "At least 1.5 times the font size"],
        ["Space after paragraphs", "At least 2 times the font size"],
        ["Letter spacing", "At least 0.12 times the font size"],
        ["Word spacing", "At least 0.16 times the font size"]
      ),
      p(
        "The W3C is careful on one point. Your page does not have to use these numbers itself. The requirement is that when a visitor overrides the spacing, nothing is lost. It also says users may choose to go beyond these values, and that the values are a floor, not a ceiling."
      ),
      h3("Parts of a practice page that tend to break"),
      ul(
        "Buttons with a fixed height, so the words Call Us or Request Appointment are cut at the bottom.",
        "Navigation bars where menu words overlap or wrap onto a second line behind the header.",
        "Boxes of provider details or hours with a fixed height that hide the last line.",
        "Forms where labels run over the fields beside them."
      ),
      p(
        "The W3C lists clipped or overlapped content when spacing is adjusted as its failure example for this criterion. Its advisory techniques include sizing text containers in relative units instead of fixed pixels."
      ),
      h2("A ten-minute test"),
      ol(
        "Install a text spacing extension or use a bookmarklet from a trusted accessibility source, one that sets the four values above. The W3C names user style sheets, bookmarklets, extensions and applications as ways people do this.",
        "Open the home page, the contact page and a service page with the spacing applied.",
        "Read each page from top to bottom, looking for words that are cut, boxes that overlap and buttons you can no longer read.",
        "Check the call button and the submit button first, since they carry the leads.",
        "Photograph or screenshot every problem with the page address."
      ),
      h2("What does not have to change"),
      p(
        "The W3C says images of text and captions burned into a video are not expected to adapt. A heading that is a picture will not respond to the setting, though that causes other problems for readers and for search. If a menu item gets shortened with an ellipsis after the change, the page can still pass as long as the full words remain available."
      ),
      p(
        "Hand the screenshots to your web person and ask for boxes that grow with their text. The guide on [zoomed text and phone reflow](/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways) covers the neighboring problem of enlarged text, and [checking text and background contrast](/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes) covers color. We do not give legal advice, and this check does not by itself make a site conform to any standard."
      ),
    ],
    faqs: [
      {
        q: "Do we have to set our own text to these values?",
        a: "No. The W3C says content is not required to use these values. The requirement is that if a visitor sets them, nothing is lost or broken. Your own design can stay as it is, as long as it bends instead of cutting text.",
      },
      {
        q: "Does this apply to the text in an image?",
        a: "The W3C says images of text are not expected to adapt to the setting. That is one more reason to keep headings and key details as real text, which also helps search engines read them, instead of putting them inside a picture.",
      },
      {
        q: "Which pages should we test first?",
        a: "Start with the pages where a visitor decides to call or book: the home page, the contact page and your top service page. Check the call button and the submit button before anything else, since a cut-off label there can end the visit.",
      },
      {
        q: "What if a text spacing extension itself fails?",
        a: "The W3C says a page does not fail just because the tool a visitor chose sets the spacing imperfectly, unless the page actively blocks the properties. Try a second tool before reporting a problem, and note which one you used.",
      },
      {
        q: "Will this raise bookings?",
        a: "We cannot promise a number. It keeps the call and form buttons usable for patients who change spacing to read comfortably. Count calls and forms for a month before and after, and treat the comparison as a rough guide only.",
      },
    ],
    citations: [WCAG_SPACING],
    links: [
      { href: "/guides/zoomed-text-and-phone-reflow-so-a-primary-care-practice-page-does-not-scroll-sideways", label: "Zoomed Text and Phone Reflow", description: "Pages that survive zooming." },
      { href: "/guides/checking-text-and-background-color-contrast-on-a-medical-practice-website-in-ten-minutes", label: "Checking Text and Background Contrast", description: "A ten-minute color check." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility for a Practice Site", description: "The wider accessibility picture." },
      LOC,
    ],
  },
];
