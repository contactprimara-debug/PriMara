// -- Guides batch 43b - 2026-11-13 --
// Guide/AEO pages from the Command Center queue (rows 1751, 1752, 1753, 1755, 1766, planned 2026-11-11), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain
// practical guidance, no legal advice, no outcome promises, no patient details. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides.

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
const SC_PERFORMANCE = {
  publisher: "Search Console Help",
  label: "Performance report (Search results): Overview and basic setup",
  href: "https://support.google.com/webmasters/answer/7576553",
};
const GA_KEY_EVENTS = {
  publisher: "Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const NEXTDOOR_BIZ = {
  publisher: "Nextdoor for Business",
  label: "Nextdoor for Business",
  href: "https://business.nextdoor.com",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Suicide & Crisis Lifeline",
  href: "https://988lifeline.org",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty6B: Guide[] = [
  // ---------------------------------------------------------------- 1751
  {
    slug: "separate-business-phone-line-for-a-solo-therapist-instead-of-a-personal-cell-number-on-the-website-and-google-profile",
    keyword: "a separate business phone line for a solo therapist instead of a personal cell number on the website and Google profile",
    category: "How-to",
    title: "A Business Phone Line for a Solo Therapist",
    metaTitle: "A Business Phone Line for a Solo Therapist",
    metaDescription:
      "Why a solo therapist should publish a separate business number, not a personal cell, and how to switch it everywhere without missing calls. (561) 291-2681",
    answer:
      "A solo therapist who lists a personal cell number on the website and Google profile mixes private life with client contact and loses the number if the phone changes. A separate business line, forwarded or app-based, keeps personal contact private and can be changed everywhere in one planned sweep.",
    author: "Liam Costello",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("The problem with a personal cell on the website"),
      p(
        "Many solo practices start with the therapist's own cell number on the website, the Google profile and directory listings. It works at first. Then the number is posted in a dozen places, strangers have it, and the therapist is answering a call from an unknown caller during dinner."
      ),
      p(
        "There is a practical risk too. If the therapist changes carriers, loses the phone or leaves the practice, the number printed on the website, the directories and old intake forms may stop working or ring someone else."
      ),
      h2("What a separate business line gives you"),
      ul(
        "Privacy: your personal number stays personal.",
        "Control: the line can go to voicemail after hours without your own phone going dark.",
        "Continuity: the number stays with the practice if the device changes.",
        "Tracking: calls to one dedicated number are easy to count and compare month to month."
      ),
      h2("Ways to set one up"),
      table(
        ["Option", "Good to know"],
        ["Forwarding number", "Rings your cell but shows a business number to the caller. Simple, and the number can be redirected later."],
        ["Phone app with a second number", "A second line on the same device. Check what happens to voicemail and call records."],
        ["Office or virtual phone service", "Can route to different people and give call logs. Ask where voicemail is stored."],
        ["Landline", "Reliable, but harder to take with you."]
      ),
      p(
        "Whichever you choose, confirm the provider will let you move the number later. A number you cannot take with you creates the same problem again."
      ),
      h3("Privacy of voicemail"),
      p(
        "Voicemail can hold private details a caller chooses to leave, so confirm where messages are stored and who can hear them. The wording on the greeting matters as well; our [voicemail greeting script for a counseling practice](/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy) covers a privacy-aware version."
      ),
      h2("Switching it everywhere without losing calls"),
      p(
        "The risk in changing a number is missing a place. Search Google for your old number in quotes and write down every result. Then work through the list in order."
      ),
      ol(
        "Set up the new line and test that it rings and that voicemail works.",
        "Update the website: contact page, header, footer and every click-to-call link, using [the right link format](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website).",
        "Update the phone number on Google Business Profile, keeping the old number as an additional number for a while. Google explains the field in its [Business Profile help](https://support.google.com/business/answer/3039617).",
        "Update directories, insurance panels and professional listings so they match; see [what breaks consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it).",
        "Keep the old number forwarding for several months so that older paperwork still reaches you."
      ),
      p(
        "After a switch, run through [what to check when a phone system or carrier changes](/guides/what-to-check-on-the-website-and-google-profile-after-a-medical-practice-changes-its-phone-system-or-carrier) and make a test call from a different phone."
      ),
      h2("What to tell current clients"),
      p(
        "Current clients already have your personal number in their phone. Send them one short message with the new number and say the old one will stop working on a date you choose. Do not include any clinical details, and do not copy a group of clients on the same message."
      ),
    ],
    faqs: [
      {
        q: "Is it a problem to use my personal cell as my practice number?",
        a: "It is not forbidden, but it exposes a private number to anyone who sees your listings and ties the practice number to one device. A separate business line is easier to protect and to move.",
      },
      {
        q: "Can I keep my cell phone and still have a business number?",
        a: "Yes. A forwarding number or a second-line app rings on your own phone while showing a separate business number to callers.",
      },
      {
        q: "Will changing my number hurt my Google listing?",
        a: "Not if you update the website, the Google profile and directories to match. Add the old number as an additional number for a while and test by calling from another phone.",
      },
      {
        q: "Where should I check for my old number?",
        a: "Search Google for the old number in quotes, then check the website, Google profile, insurance directories, professional listings and printed forms.",
      },
      {
        q: "How do I count calls to the new number?",
        a: "Use the call log from the phone service and count taps on the phone link on the website as a key event in analytics. Taps show interest but do not confirm a connected call.",
      },
    ],
    citations: [GBP_EDIT, GA_KEY_EVENTS],
    links: [
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "A privacy-aware greeting." },
      { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Click-to-Call Links", description: "Phone links on every page." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matched." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1752
  {
    slug: "one-email-template-for-reporting-a-wrong-detail-on-the-practice-website-to-the-vendor-so-it-is-fixed-correctly-the-first-time",
    keyword: "a one-email template for reporting a wrong detail on the practice website to the vendor so it is fixed correctly the first time",
    category: "Checklist",
    title: "One-Email Template to Report a Wrong Website Detail",
    metaTitle: "Email Template to Report a Wrong Website Detail",
    metaDescription:
      "A copy-and-paste email that tells your web vendor exactly what is wrong, where it appears and what it should say, so it is fixed once. (561) 291-2681",
    answer:
      "To get a wrong website detail fixed the first time, send one email that gives the page link, what it says now, what it should say, where else it appears, how you want to see proof and the date it matters. No screenshots of private information, no guessing for the vendor.",
    author: "Liam Costello",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 4,
    sections: [
      h2("Why fixes take three emails instead of one"),
      p(
        "A message like 'the hours on the site are wrong' starts a chain of questions. Which page? Which hours? What are the right ones? The vendor guesses, changes one page, and the same wrong hours still appear in the footer."
      ),
      p(
        "A complete first email avoids the chain. It takes five minutes to write, and it protects your phone number, forms and hours from the quiet damage that half-fixes cause."
      ),
      h2("The template"),
      p(
        "Copy this into an email and fill in each line. Keep it plain text so nothing is lost when it is pasted into a ticket."
      ),
      table(
        ["Line", "What to write"],
        ["Subject", "Correction needed: [what], [page name]"],
        ["Page link", "The full address of the page where you saw it"],
        ["Says now", "The exact wrong text, copied and pasted"],
        ["Should say", "The exact correct text, copied from your approved source"],
        ["Other places", "Other pages, the footer or the Google profile where you have seen it"],
        ["Needed by", "A date, and why it matters, such as a holiday"],
        ["Proof", "Send me the page link and a screenshot after the change goes live"],
        ["Do not change", "Anything not listed here, including the phone number, forms and layout"]
      ),
      h2("Filling it in well"),
      h3("Copy, do not retype"),
      p(
        "Paste the wrong text and the right text. A retyped phone number or time is where a new mistake enters. If the right wording lives in a shared note, such as an [approved hours or details sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile), paste from there."
      ),
      h3("Name the other places"),
      p(
        "A wrong detail rarely lives in one spot. Hours might appear in the header, contact page, footer and structured data on the page. Searching the site for the wrong text before you write the email will find most of them. Our [page inventory spreadsheet guide](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for) helps if you keep a list of every page."
      ),
      h3("Keep private details out"),
      p(
        "Never include a patient's name or health information to illustrate a problem. If a patient told you about the error, describe the problem in general terms."
      ),
      h2("What the vendor reply should contain"),
      ul(
        "A confirmation of which pages were changed.",
        "The live page link for each one.",
        "A note on whether other pages carried the same text.",
        "A date and time the change went live."
      ),
      p(
        "When the reply arrives, open the link on your own phone and confirm the fix, the way we describe in [checking a change in a second browser and on an older phone](/guides/checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live). If something is still wrong, reply to the same email thread so the history stays together."
      ),
      h2("Keep a record"),
      p(
        "File the thread in a shared folder, or add a line to your [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change). If calls drop later, you can see exactly what was changed and when."
      ),
    ],
    faqs: [
      {
        q: "Should I send a screenshot or the page link?",
        a: "Send the page link first and the exact text pasted into the email. A screenshot helps as a backup, but never one that shows patient information.",
      },
      {
        q: "What if I do not know which pages have the wrong detail?",
        a: "Say so, and give the pages where you saw it. Ask the vendor to search the whole site for the same text and tell you every place they changed.",
      },
      {
        q: "Should I call or email the vendor?",
        a: "Email creates a record of what you asked for and what changed. For something urgent, such as a wrong phone number, call as well and then confirm by email.",
      },
      {
        q: "How soon should a simple text fix be done?",
        a: "Ask your vendor what they commit to. Our guide on [questions to ask a web host about support response time](/guides/questions-to-ask-a-web-host-or-maintenance-provider-about-support-response-time-for-a-medical-practice-website) lists what to ask before you need it.",
      },
      {
        q: "Who at the practice should send these emails?",
        a: "One named person, usually the owner or office manager, so the vendor never receives conflicting requests from different staff.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GBP_EDIT],
    links: [
      { href: "/guides/website-change-request-form-for-staff-at-a-medical-practice-so-edits-to-hours-providers-and-notices-reach-the-right-person", label: "Website Change Request Form", description: "How staff pass requests up." },
      { href: "/guides/questions-to-ask-a-freelance-web-developer-before-a-small-fix-on-a-medical-practice-website", label: "Questions for a Freelancer", description: "Before a small website fix." },
      { href: "/guides/written-sign-off-before-a-marketing-vendor-changes-a-medical-practice-phone-number-hours-or-provider-list", label: "Written Sign-Off for Vendor Changes", description: "Approval before phone, hours or provider changes." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1753
  {
    slug: "nextdoor-business-page-for-a-medical-practice-claiming-it-keeping-details-accurate-and-replying-to-neighbors-without-health-details",
    keyword: "a Nextdoor business page for a medical practice: claim it, keep details accurate and reply to neighbors without health details",
    category: "How-to",
    title: "Nextdoor Business Page for a Medical Practice",
    metaTitle: "Nextdoor Business Page for a Medical Practice",
    metaDescription:
      "How a practice claims a Nextdoor Business Page, keeps its details matched and answers neighbors without sharing health details. (561) 291-2681",
    answer:
      "Claim or create your Nextdoor Business Page with the same name, address, phone and hours as your Google profile, add a short plain description, and reply to neighbors without confirming who is a patient or discussing health. Check it monthly, because a page left unclaimed can show wrong details.",
    author: "Gio LaRoche",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("Why a practice should look at Nextdoor"),
      p(
        "Neighbors ask each other for recommendations on Nextdoor, including for doctors and counselors. If your practice has no page or a wrong one, those conversations still happen and the details people see are not yours."
      ),
      p(
        "Nextdoor describes Business Pages as a way to claim or create a presence, post updates for neighbors and receive neighbor recommendations. You can read its own overview at [Nextdoor for Business](https://business.nextdoor.com). Options inside the product change, so check the current steps in your account."
      ),
      h2("Claim or create the page"),
      ol(
        "Search Nextdoor for your practice name to see whether a page already exists.",
        "If one exists, follow the prompts to claim it. If not, create one.",
        "Use the practice's real, public business information only.",
        "Choose the business category that most closely matches how patients describe you, such as primary care or counseling.",
        "Write down which email address and person own the page, and store that in your list of accounts."
      ),
      p(
        "The account ownership step is easy to skip and costly later. Use a practice email, not a personal one, and keep it in mind when [removing a former employee's access](/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice) so nothing stays tied to a person who left."
      ),
      h2("Keep the details identical to everywhere else"),
      table(
        ["Detail", "Match it to"],
        ["Practice name", "Exactly as on your Google Business Profile and website"],
        ["Address and suite", "The same format used on Google and insurance directories"],
        ["Phone", "The same main number. See the guide on consistent details"],
        ["Hours", "The office hours on your website"],
        ["Website link", "The page your Google profile links to"]
      ),
      p(
        "Mismatched details are what confuse both patients and search engines, as described in [what breaks name, address and phone consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it). The same match-up applies to [Yelp and Facebook pages](/guides/yelp-and-facebook-pages-for-a-medical-practice-claiming-them-and-keeping-them-consistent)."
      ),
      h2("Replying to neighbors without health details"),
      p(
        "A neighbor may write that they had a good visit or ask whether you take a certain insurance. Treat every reply as public. Do not confirm that someone is a patient, mention a condition or refer to an appointment."
      ),
      h3("Safe reply patterns"),
      ul(
        "Thank them generally: 'Thank you for the kind words about our team.'",
        "Answer a general question: 'We are accepting new patients. Please call our office at the number on this page.'",
        "Move specifics offline: 'Please call us and we can help with scheduling questions.'"
      ),
      p(
        "The same rule applies to Google reviews; see [replying without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient). Never offer a gift or discount in exchange for a recommendation."
      ),
      h2("A ten-minute monthly check"),
      p(
        "Open the page, confirm the hours and phone, read new recommendations and replies, and remove any outdated post. Add the check to your [monthly profile maintenance routine](/guides/monthly-google-business-profile-maintenance-checklist) so it does not depend on memory."
      ),
    ],
    faqs: [
      {
        q: "Is Nextdoor worth the time for a medical practice?",
        a: "A claimed, accurate page costs little and keeps wrong details from circulating. Treat it as a small listing to keep correct, not a main source of patients.",
      },
      {
        q: "Can I reply to a neighbor who praises my practice?",
        a: "Yes, with a general thank-you. Do not confirm that they are a patient or mention any health detail, because the reply is public.",
      },
      {
        q: "What if a neighbor asks a medical question in a comment?",
        a: "Do not give medical advice online. Say you cannot discuss health questions here and invite them to call the office.",
      },
      {
        q: "Who should manage the page?",
        a: "One named person at the practice, using a practice email address that is recorded with your other account owners.",
      },
      {
        q: "What if the page has wrong information I did not enter?",
        a: "Claim the page and correct the details. Follow Nextdoor's current prompts in your account, because the steps change over time.",
      },
    ],
    citations: [NEXTDOOR_BIZ, GBP_EDIT],
    links: [
      { href: "/guides/yelp-and-facebook-pages-for-a-medical-practice-claiming-them-and-keeping-them-consistent", label: "Yelp and Facebook Pages", description: "Claiming and matching other listings." },
      { href: "/guides/local-citation-building-checklist-for-a-medical-practice", label: "Local Citation Checklist", description: "Where else the practice should be listed." },
      { href: "/guides/chamber-of-commerce-and-local-business-association-listings-for-a-medical-practice", label: "Chamber and Association Listings", description: "Local listings that earn links." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1755
  {
    slug: "checking-a-marketing-vendors-monthly-invoice-against-the-work-actually-delivered-for-a-counseling-practice-owner",
    keyword: "checking a marketing vendor's monthly invoice against the work actually delivered for a counseling practice owner",
    category: "Checklist",
    title: "Checking a Marketing Invoice Against Work Delivered",
    metaTitle: "Checking a Marketing Invoice Against the Work Done",
    metaDescription:
      "Five minutes a month: match each line on a marketing invoice to something you can see, then ask the vendor about any line you cannot. (561) 291-2681",
    answer:
      "Each month, match every line on the marketing invoice to something you can see: a page, a post, a report, a profile change or a counted result. Ask the vendor about any line with nothing to show for it. Keep the invoice and your notes together in one folder for the year.",
    author: "Gio LaRoche",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("Why check the invoice at all"),
      p(
        "A practice owner usually reviews the marketing invoice by checking that the amount is what was agreed. That is a start. It does not tell you whether the work listed on the invoice actually happened."
      ),
      p(
        "Most vendors do real work. A monthly check takes five minutes and gives you a record, so that a question later is about facts instead of memory. It also fits with the habit of reading a [proposal's promised deliverables line by line](/guides/reviewing-a-marketing-proposals-promised-deliverables-line-by-line-before-signing-for-a-counseling-practice-owner) before signing."
      ),
      h2("Match each line to something you can see"),
      table(
        ["Invoice line", "What you should be able to see"],
        ["Website updates", "The changed pages and dates, ideally from a change log"],
        ["New pages or articles", "The live links to each page"],
        ["Google profile management", "New posts, photos, answered reviews or corrected details on the profile"],
        ["Reporting", "The report itself, with calls and forms counted"],
        ["Ad management fee", "The ad account's own spend and results, viewed by you"],
        ["Ad spend", "The platform's billing for the same period"],
        ["Hosting or maintenance", "Backups, updates and an uptime note"]
      ),
      p(
        "If a line is vague, such as 'SEO services,' ask for the specific tasks done that month. A good vendor can answer in a few lines."
      ),
      h2("Questions to ask about a line you cannot match"),
      ul(
        "Which tasks were done under this line this month?",
        "Where can I see the result?",
        "Is this a monthly cost or a one-time cost, and does the agreement say so?",
        "Has anything changed from last month's invoice, and why?"
      ),
      p(
        "Ask in writing and file the reply. Asking is ordinary business, and a vendor should welcome it."
      ),
      h2("Check the numbers that matter to patients"),
      p(
        "Beyond the lines, look at the results the vendor reports. Compare the call and form counts with your own [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice). If two sources count differently, our guide on [comparing marketing reports that count differently](/guides/comparing-two-marketing-reports-from-different-vendors-that-count-calls-and-forms-differently-for-a-practice-owner) shows how to line them up."
      ),
      p(
        "Look at what Google itself reports as well. Search Console shows clicks and impressions for your site in its [Performance report](https://support.google.com/webmasters/answer/7576553), which is independent of any vendor's summary. Give the vendor viewer access so you both look at the same numbers."
      ),
      h2("Keep it simple and regular"),
      ol(
        "Open the invoice and the last change log or report.",
        "Tick each line you can match. Mark the ones you cannot.",
        "Send the questions the same day.",
        "File the invoice, your notes and the vendor's reply in one folder."
      ),
      p(
        "If the relationship ends, that folder and a [clean account handover](/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends) make the transition much easier."
      ),
    ],
    faqs: [
      {
        q: "Is it rude to question a marketing invoice?",
        a: "No. Asking what a line covers and where to see the result is ordinary. A reasonable vendor answers in a few sentences.",
      },
      {
        q: "What if the vendor cannot show what a line paid for?",
        a: "Ask them to list the tasks in writing. If they cannot, note it, ask again next month and consider whether the agreement needs clearer wording.",
      },
      {
        q: "How do I verify ad spend?",
        a: "Look at the ad platform's own billing for the same month, with viewer access to the account, and compare it with the amount on the invoice.",
      },
      {
        q: "Should results be part of the invoice check?",
        a: "Yes, in a simple way. Compare the calls and forms the vendor reports with your own count, and note any large gap.",
      },
      {
        q: "How long should I keep these records?",
        a: "Keep the folder at least for the year, and keep it as long as the agreement is active. Do not store patient information in it.",
      },
    ],
    citations: [SC_PERFORMANCE, GA_KEY_EVENTS],
    links: [
      { href: "/guides/reviewing-a-marketing-proposals-promised-deliverables-line-by-line-before-signing-for-a-counseling-practice-owner", label: "Reviewing Promised Deliverables", description: "Before signing a proposal." },
      { href: "/guides/comparing-two-marketing-reports-from-different-vendors-that-count-calls-and-forms-differently-for-a-practice-owner", label: "Comparing Two Marketing Reports", description: "When vendors count differently." },
      { href: "/guides/how-to-pick-a-healthcare-marketing-agency", label: "How to Pick a Marketing Agency", description: "Questions that matter before you hire." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1766
  {
    slug: "front-door-and-window-sign-wording-for-a-medical-or-counseling-practice-with-phone-hours-website-and-a-911-notice",
    keyword: "wording for the front-door and window sign of a medical or counseling practice so someone passing after hours can find the phone number, hours and website and knows to call 911 in an emergency",
    category: "Checklist",
    title: "Front-Door and Window Sign Wording for a Practice",
    metaTitle: "Front-Door and Window Sign Wording for a Practice",
    metaDescription:
      "What a practice puts on its front door or window so someone passing after hours finds the phone, hours, website and the 911 notice. (561) 291-2681",
    answer:
      "A front-door or window sign should carry the practice name, the main phone number, the office hours, the website address and one plain line telling anyone with an emergency to call 911. Use large simple type, match every detail to the website and Google profile, and check it whenever hours change.",
    author: "Liam Costello",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 4,
    sections: [
      h2("Who reads the sign, and when"),
      p(
        "The people who read the door sign are usually the ones who could not reach you any other way: someone who arrives after hours, a patient who came a day early, or a person walking past who may need care someday. In that moment the sign is the practice's front page."
      ),
      p(
        "A good sign answers three questions in a few seconds: how do I reach you, when are you open, and what do I do if this is an emergency."
      ),
      h2("What the sign should say"),
      table(
        ["Element", "Wording guidance"],
        ["Practice name", "The same name as on the website and Google profile"],
        ["Phone", "The main number, written the way patients dial it"],
        ["Hours", "The current office hours, with phone-answered hours if different"],
        ["Website", "A short address a person can type"],
        ["Emergency line", "'If this is an emergency, call 911.'"],
        ["Mental health crisis line", "For counseling practices, add the 988 Suicide & Crisis Lifeline"]
      ),
      h3("Example wording"),
      p(
        "'Practice name. Call (xxx) xxx-xxxx. Open Monday to Friday, 8:30 to 5. Website: address. If this is an emergency, call 911.' Replace each part with your real details and keep the sentence short."
      ),
      h2("The emergency line"),
      p(
        "Every practice sign should tell people not to wait for the office in an emergency. Counseling practices can also add that anyone in emotional crisis can call or text 988, the number for the [988 Suicide & Crisis Lifeline](https://988lifeline.org). Use only the wording the practice is comfortable with and keep it factual. Our guide on the [office versus 911 or urgent care page](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) has more on this wording for the website."
      ),
      h2("Design points that matter"),
      ul(
        "Large, high-contrast type that can be read from a few steps away.",
        "No small print, no long paragraphs and no health or treatment claims.",
        "The phone number as the biggest line after the name.",
        "A sign in a window should be readable from outside in both daylight and evening light.",
        "Weatherproof or inside the glass so it does not fade or peel."
      ),
      h2("Keep it matched to everything else"),
      p(
        "Hours on a sign go stale the quickest. When hours change for a season or a holiday, update the sign on the same day as the website and Google profile, as laid out in [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) and [summer hours and schedule changes](/guides/summer-hours-and-schedule-change-notice-for-a-primary-care-practice)."
      ),
      p(
        "If your practice moves or changes its number, the sign is one of the places to fix; the [office move checklist](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) lists the rest. Add a sign check to your [monthly profile maintenance routine](/guides/monthly-google-business-profile-maintenance-checklist) so it is read once a month."
      ),
    ],
    faqs: [
      {
        q: "What must a practice put on its front-door sign?",
        a: "At minimum the practice name, phone number, hours and website. Add a plain 911 line for emergencies. Local rules and building requirements may add more, so check with your landlord or local authority.",
      },
      {
        q: "Should a counseling practice add a crisis line to the sign?",
        a: "Many do. The 988 Suicide & Crisis Lifeline accepts calls and texts, so a short line naming it can help someone in crisis who finds a closed door.",
      },
      {
        q: "Should the sign list services?",
        a: "Keep it short. Name the type of practice, such as primary care or counseling, and leave detailed services to the website.",
      },
      {
        q: "How often should the sign be updated?",
        a: "Whenever hours, phone number or website address change, and checked once a month alongside the Google profile.",
      },
      {
        q: "Should the sign promise a return call time?",
        a: "No. Do not promise a response time on a sign unless you can always meet it. Say how to reach the office and what to do in an emergency.",
      },
    ],
    citations: [LIFELINE, GBP_EDIT],
    links: [
      { href: "/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice", label: "Office vs 911 Page", description: "Emergency wording for the website." },
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "The same message by phone." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday and Closure Notices", description: "Keeping signs and hours aligned." },
      LOC,
    ],
  },
];
