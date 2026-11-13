// -- Guides batch 39 - 2026-11-09 (afternoon) --
// Guide/AEO pages from the Command Center queue (rows 1689, 1690, 1691, 1695, 1697, planned 2026-11-09), built by the
// page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice-owner audience only.
// Plain practical guidance, no legal advice, no outcome promises, no patient details. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GBP_OWNERS = {
  publisher: "Google Business Profile Help",
  label: "Manage your Business Profile owners and managers",
  href: "https://support.google.com/business/answer/3403100",
};
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GSC_USERS = {
  publisher: "Google Search Console Help",
  label: "Managing owners, users, and permissions",
  href: "https://support.google.com/webmasters/answer/7687615",
};
const GSC_PERFORMANCE = {
  publisher: "Google Search Console Help",
  label: "Performance report (Search results): overview and basic setup",
  href: "https://support.google.com/webmasters/answer/7576553",
};
const GA_USERS = {
  publisher: "Google Analytics Help",
  label: "Add, edit, and delete Analytics users and user groups",
  href: "https://support.google.com/analytics/answer/9305788",
};
const GOOGLE_LOCALBUSINESS = {
  publisher: "Google Search Central",
  label: "Local business structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const GOOGLE_REDIRECTS = {
  publisher: "Google Search Central",
  label: "Redirects and Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
};
const GOOGLE_CANONICAL = {
  publisher: "Google Search Central",
  label: "How to specify a canonical with rel=\"canonical\" and other methods",
  href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
};
const GOOGLE_SITEMAPS = {
  publisher: "Google Search Central",
  label: "Learn about sitemaps",
  href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const LIFELINE_988 = {
  publisher: "SAMHSA",
  label: "988 Suicide and Crisis Lifeline",
  href: "https://www.samhsa.gov/find-help/988",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty2: Guide[] = [
  // ---------------------------------------------------------------- 1689
  {
    slug: "what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts",
    keyword: "what to hand a new office manager on day one about the practice website, Google profile and marketing accounts",
    category: "Checklist",
    title: "Day-One Handoff for a New Practice Office Manager",
    metaTitle: "Day-One Handoff for a New Practice Office Manager",
    metaDescription:
      "A one-page handoff for a new office manager: where the website, Google profile and analytics live, who owns each, and who to call. (561) 291-2681",
    answer:
      "On day one, give a new office manager a one-page map of where the website, Google Business Profile, Search Console, analytics, domain and form inbox live, who holds the owner role on each, what to check weekly, and who to call when something breaks. Give them their own login on each tool, never a shared password.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T19:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Give the new hire a map, not a password"),
      p(
        "A new office manager usually inherits the practice's online presence by accident. Someone says the login is on a sticky note, or that a former employee set it up. Three weeks later a form stops emailing the front desk, or the Google profile shows the wrong holiday hours, and nobody knows who can fix it."
      ),
      p(
        "The fix is cheap and takes under an hour. Write a single page that says where each piece lives, who owns it and what the new manager is expected to do with it. Then add them to each tool under their own name. The map is what makes the next handoff easy too."
      ),
      h2("The one-page map"),
      p(
        "Fill in one row per account. The \"owner\" column is the person or role who can add and remove people, not the person who does the weekly check."
      ),
      table(
        ["Account or tool", "What the new manager needs to know"],
        ["Website editor", "Where to log in, who built it, who to call for a broken page, and which pages the office may edit itself (hours, staff list, notices)."],
        ["Google Business Profile", "Hours, phone number, holiday closures and review replies live here. Give them manager access, and keep owner access with the practice owner."],
        ["Search Console", "Shows how patients find the site. Read-only is enough for most office managers."],
        ["Google Analytics", "Counts visits, calls tapped and forms sent. A viewer or analyst role is enough to read it."],
        ["Domain registrar", "Controls the web address and email. The renewal date and the account email belong on the map, but the login stays with the owner."],
        ["Form inbox", "The shared mailbox that receives website messages. Confirm the new manager is on it, and who checks it when they are away."],
      ),
      h2("Set up their access the right way"),
      p(
        "Each tool has its own roles, and Google documents them. On a Business Profile, an owner can add and remove users and even delete the profile, while a manager has most of the same access but cannot add or remove users or remove the profile. Google also notes a profile can have several owners but only one primary owner, and that groups cannot be added as owners or managers, so each person needs their own Google account."
      ),
      p(
        "Search Console works the same way: owners and full or restricted users, and the owner is the one who can add or remove others. Analytics has its own roles, and a practice that only reads reports can stay at the lowest role that still shows them."
      ),
      h3("Do this in order"),
      ol(
        "Ask the new manager for the email address they will use for work, and confirm it is a Google account they control.",
        "Have the practice owner add that address to the Business Profile as a manager, to Search Console as a full or restricted user, and to analytics as a viewer or analyst.",
        "Add them to the form inbox and the shared role mailbox. Our page on [a shared role mailbox instead of one person's inbox](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice) explains why this matters when someone leaves.",
        "Confirm each login works while you are standing there, then write the date on the map.",
      ),
      h2("What to ask them to do in week one"),
      p(
        "Keep the first week small. The goal is that the new manager has looked at each tool once and knows what normal looks like."
      ),
      ul(
        "Open the home page on a phone and tap the phone number. It should dial the front desk.",
        "Search the practice name and read the Google profile card: hours, phone, website link and any banner.",
        "Send one clearly marked test through the contact form, after telling the front desk, and confirm it arrives.",
        "Read the last month in analytics and Search Console with the practice owner, so they see the usual numbers.",
        "Add the next domain renewal date and the next holiday closure to the shared calendar."
      ),
      p(
        "From there, the [weekly 15-minute marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) gives the new manager a repeating routine, and the [monthly 30-minute meeting agenda](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) gives the two of you a place to compare notes."
      ),
      h2("What not to hand over"),
      ul(
        "The only owner login to the domain or the Google profile. Owner access should always sit with at least two people.",
        "Passwords sent by text or pasted into a group chat. Use each tool's own invite feature instead.",
        "Anything that contains patient information. The map lists tools and roles only, never patients.",
        "A shared Gmail address that three people log in to. It cannot be traced and breaks when one person leaves."
      ),
      p(
        "When someone leaves, the reverse applies. Our guide on [removing a former employee's access](/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice) covers that checklist, and the map from day one is what makes it quick."
      ),
    ],
    faqs: [
      {
        q: "Should a new office manager be an owner of the Google Business Profile?",
        a: "Usually a manager role is enough. Google says managers have most of the same access as owners but cannot add or remove users or remove the profile. Keep owner access with the practice owner and one backup.",
      },
      {
        q: "What if nobody knows who owns the domain or the profile?",
        a: "Start with the billing and renewal emails, the original web company's invoices, and Google's own ownership request flow on the profile. Our guide on who should own a practice's Google accounts and domain covers the steps.",
      },
      {
        q: "Does the new manager need access to the website editor?",
        a: "Only if the office updates hours, notices or the staff list itself. If your web company handles every change, give the manager their contact details and a short list of what to ask for.",
      },
      {
        q: "How often should the map be updated?",
        a: "Whenever someone is added or removed, and at least once a year. Put the review date on the page so it does not go stale.",
      },
      {
        q: "Can this one page include patient or staff details?",
        a: "No. List tools, roles, renewal dates and who to call. Keep personal and patient information out of anything that is emailed or stored in a shared folder.",
      },
    ],
    citations: [GBP_OWNERS, GSC_USERS, GA_USERS],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own the Accounts", description: "Owner roles that survive staff changes." },
      { href: "/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice", label: "Removing Former Employee Access", description: "The reverse checklist." },
      { href: "/guides/domain-name-renewal-and-expiration-protection-for-a-medical-practice-website", label: "Domain Renewal Protection", description: "Never lose the web address." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1690
  {
    slug: "what-to-check-on-the-website-and-google-profile-after-a-medical-practice-changes-its-phone-system-or-carrier",
    keyword: "what to check on the website and Google profile after a medical practice changes its phone system or carrier",
    category: "Checklist",
    title: "Checklist After a Practice Changes Its Phone System",
    metaTitle: "Checklist After a Practice Changes Its Phone System",
    metaDescription:
      "Switching phone carriers or systems? Where the number lives on your website and Google profile, and how to test every call. (561) 291-2681",
    answer:
      "After a phone system or carrier change, list every place your number appears, then test each one by calling it from a mobile phone. If the number stays the same, check that website phone links, the Google profile and call routing still reach the front desk. If the number changes, update every listing and keep the old number forwarding.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T19:10:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Start with one question: does the number change?"),
      p(
        "Switching carriers or moving to a new phone system sounds like an internal task, and the office treats it that way. Patients only see the outcome: either the number they have always dialed still rings, or it does not. Before anything else, find out which case you are in."
      ),
      table(
        ["Situation", "What it means for the website and profile"],
        ["Same number, new system or carrier (ported)", "Nothing should need editing, but every phone link and the call routing must still be tested."],
        ["New number, old number kept as a forward", "Update every listing to the new number, and keep the old number answering for as long as your carrier allows."],
        ["New number, old number dropped", "Highest risk. Patients with the old number in their phone will reach a stranger or a dead line. Avoid it if you can."],
      ),
      p(
        "Ask the carrier for the date of the change and a written note of which numbers move. Then write that date on the calendar for the check below."
      ),
      h2("Make a list of every place the number appears"),
      p(
        "Most practices underestimate this list. The number is not only in the website header. Walk through each item and mark it done."
      ),
      ul(
        "Website header, footer, contact page, every location or provider page, and every tap-to-call link.",
        "Automatic emails and text reminders that print the office number.",
        "Google Business Profile, plus other directories and insurance listings.",
        "Online booking, patient portal and intake form pages.",
        "Email signatures, voicemail greetings and printed material such as cards and appointment slips.",
        "Ads or call tracking numbers, if you use them."
      ),
      p(
        "Our page on [phone number format and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) shows what a correct link looks like, and [how to keep the name, address and phone consistent](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) covers the directory side. Tell the front desk about the new number the same day with a [five-minute huddle after a website change](/guides/five-minute-staff-huddle-after-a-website-change-so-the-front-desk-knows-what-patients-will-see) so everyone gives patients the same answer."
      ),
      h2("Update the Google profile"),
      p(
        "Google's help page explains how to edit a profile's phone numbers. Change the primary number if it changed, and consider adding the old one as an additional number during the transition, so people who search for it can still find you. Do not stack extra numbers permanently; the main number should be the one the front desk answers. A solo therapist moving off a personal cell number can follow a [separate business phone line for a solo therapist](/guides/separate-business-phone-line-for-a-solo-therapist-instead-of-a-personal-cell-number-on-the-website-and-google-profile) before running these checks."
      ),
      p(
        "If your website carries structured data with a telephone number, update that too. Google documents the telephone field for local business markup, and a mismatch between the page, the markup and the profile is the kind of inconsistency that causes confusion later."
      ),
      h2("Test it the way a patient would"),
      p(
        "Do not rely on the carrier's assurance or the vendor's test screen. Place real calls from a mobile phone that is not on the office network."
      ),
      ol(
        "Tap the phone link on the home page, a location page and the contact page, on a phone. Confirm the dial screen shows the right digits.",
        "Call the number from the Google profile card and confirm the front desk answers.",
        "Call during open hours and again after hours, to confirm each greeting, menu option and voicemail box is the right one. See [phone menus and call routing that do not lose new patients](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients).",
        "Press each menu option once and confirm it reaches a person or the right voicemail.",
        "Check that fax and any separate billing or refill line still work, if the practice uses them.",
        "Ask the front desk to log any caller who says they could not get through."
      ),
      h3("Watch for a spam flag on a new number"),
      p(
        "A brand-new number can be marked as a suspected scam by call-screening apps, which makes patients decline the callback. If staff report that patients are not picking up, read our guide on [checking and fixing a spam-flagged practice number](/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam)."
      ),
      h2("Check again after a week"),
      p(
        "Put a reminder in the calendar for seven days after the change. Compare calls and form messages to a normal week using the [first-hour checklist for calls dropping](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) as a guide. Note the dates in your [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) so a dip can be traced to the switch."
      ),
    ],
    faqs: [
      {
        q: "Will changing phone carriers hurt my Google ranking?",
        a: "Not by itself. What causes harm is a wrong or inconsistent number across your website, profile and directories, or a line that does not ring. Keep the number consistent and test it.",
      },
      {
        q: "Should I keep the old number after a change?",
        a: "Yes, if you can. Many patients have it saved. Ask your carrier how long they will forward it, and keep the old number answering at least until calls to it become rare.",
      },
      {
        q: "Do I have to change the number in the Google profile myself?",
        a: "Someone with owner or manager access does. Google's help page describes editing phone numbers. After the edit, search your practice name on a phone and call the number shown.",
      },
      {
        q: "What if I use a call tracking number?",
        a: "Keep the main practice number on the Google profile and use the tracking number only where it is intended. Check that the tracking service forwards to the new line, and test it.",
      },
      {
        q: "Who should do the testing?",
        a: "Someone who does not normally use the phone system, such as the office manager or a family member, calling from a personal mobile phone while a front desk person watches the line.",
      },
    ],
    citations: [GBP_EDIT, GOOGLE_LOCALBUSINESS],
    links: [
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Count taps without patient details." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls", description: "Voicemail that keeps new patients." },
      { href: "/guides/toll-free-versus-local-phone-number-on-a-medical-practice-website-and-google-profile", label: "Toll-Free vs Local Number", description: "Which number to publish." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1691
  {
    slug: "reading-the-top-search-console-queries-each-month-to-find-the-questions-new-clients-ask-a-counseling-practice",
    keyword: "reading the top Search Console queries each month to find the questions new clients ask a counseling practice",
    category: "How-to",
    title: "Use Search Console Queries to Find Client Questions",
    metaTitle: "Use Search Console Queries to Find Client Questions",
    metaDescription:
      "A 20-minute monthly routine for a counseling practice: read top Search Console queries, sort them into questions, pick a page to improve. (561) 291-2681",
    answer:
      "Once a month, open the Queries table in Search Console's Performance report, sort by impressions, and read the top 50. Sort what you see into questions, services, insurance and location words, then pick one page to improve or one question to answer. The list shows what people typed, not who they are.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T19:20:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("What the queries table tells a counseling practice"),
      p(
        "Search Console shows the words people typed into Google right before your site appeared in their results. For a counseling practice, that is a free list of the questions new clients bring to a first search: whether you take their insurance, whether you offer evening sessions, how a first appointment works."
      ),
      p(
        "It is also easy to over-read. The table is aggregate counts of search words, not a list of people. Treat it as a way to hear the market, never as a way to identify anyone, and never copy a query into a case note."
      ),
      h2("A 20-minute monthly routine"),
      ol(
        "Open the Performance report and set the date range to the last three months, so a quiet month does not distort the picture.",
        "Select the Queries tab and sort by impressions, highest first.",
        "Read down the first 50 rows. Note anything that looks like a question or a need, not a brand search.",
        "Click one interesting query to filter the table, then open the Pages tab to see which page is showing for it.",
        "Write one action in the log: improve a page, add an answer, or do nothing this month."
      ),
      p(
        "Google's own help page explains that the report groups data by dimension and that average position is the position of your topmost result, which is why a result can look different when you search it yourself. Use the numbers to find direction, not to prove anything about a single visit."
      ),
      h2("Sort the queries into five piles"),
      table(
        ["Kind of query", "What to do with it"],
        ["Questions (how, what, can, do you)", "Check whether a page answers it in the first two sentences. If not, add a short answer or a new FAQ."],
        ["Service or concern words", "Make sure one page clearly covers it in plain language, without clinical claims or outcome promises."],
        ["Insurance, cost and scheduling words", "Link them to your fees, insurance and first-visit pages, and keep those pages current."],
        ["Location and \"near me\" words", "Check the Google profile, the contact page and any location page match the wording."],
        ["Your own practice or therapist names", "These are brand searches. Check the profile and the home page show the right hours and phone."],
      ),
      p(
        "Our page on [using the phrases clients say on calls and forms to choose page topics](/guides/using-the-phrases-patients-say-on-calls-and-forms-to-choose-page-topics-for-a-counseling-practice) is the other half of this: search words show what people typed, while calls show what they actually asked."
      ),
      h2("Where to look first for a quick win"),
      p(
        "Search for queries where your page appears often but the average position is below the first page. These are pages Google already finds relevant. A clearer opening answer, a plain heading and a link from a related page can help more than writing something new. Our [guide to reading Search Console](/guides/how-to-read-google-search-console-for-a-medical-practice-website) explains the screens."
      ),
      h3("Questions that deserve a careful answer"),
      p(
        "Some queries will sound urgent or personal. Do not write advice for them. Make sure your site has a clear note on how to reach the office, what to do in an emergency, and the 988 Suicide and Crisis Lifeline for someone in crisis. The SAMHSA page is the official reference for 988."
      ),
      h2("Keep a one-line log"),
      p(
        "A shared sheet with five columns is enough. Do not add anything about individual clients, since queries are not about individuals."
      ),
      ul(
        "Month and date range checked",
        "The query or group of queries",
        "Impressions, clicks and average position",
        "The page that appeared",
        "The action taken and the date it was made"
      ),
      p(
        "Next month, look at the same group again. If you improved a page, note whether impressions or clicks changed. If nothing moved, wait another month before deciding, and add the change to your [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change)."
      ),
    ],
    faqs: [
      {
        q: "Does Search Console show who searched?",
        a: "No. It shows search words and counts, grouped by page, country, device and date. It does not identify any person, and your notes should not try to.",
      },
      {
        q: "How many months of data should I read?",
        a: "Three months is a good default for a small practice. One month can be too thin to show a pattern, and Google's Performance report lets you pick the range.",
      },
      {
        q: "What if a query is about a clinical topic?",
        a: "Do not write medical or treatment advice in response. Keep the page descriptive: what the practice offers, who provides it, how to book, and where to go in an emergency.",
      },
      {
        q: "Why does my page rank differently when I search it myself?",
        a: "Google notes search results depend on time, place, device and search history. Average position in the report is the topmost result across many searches, so one search will not match it.",
      },
      {
        q: "Who in the practice should do this?",
        a: "The office manager or a marketing contact, with the practice owner reading the one-line log. It needs read access to Search Console, not owner access.",
      },
    ],
    citations: [GSC_PERFORMANCE, GOOGLE_HELPFUL, LIFELINE_988],
    links: [
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "Reading Search Console", description: "The screens in plain language." },
      { href: "/guides/using-the-phrases-patients-say-on-calls-and-forms-to-choose-page-topics-for-a-counseling-practice", label: "Using Caller Phrases", description: "Choose topics from real calls." },
      { href: "/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice", label: "Therapy Practice FAQ Page", description: "Answer without clinical advice." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1695
  {
    slug: "a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for",
    keyword: "a page inventory spreadsheet listing every page on a medical practice website and what each page is for",
    category: "Checklist",
    title: "Page Inventory Spreadsheet for a Medical Website",
    metaTitle: "Page Inventory Spreadsheet for a Medical Website",
    metaDescription:
      "Build a simple spreadsheet of every page on your practice website, what each is for and who owns it, so nothing is forgotten. (561) 291-2681",
    answer:
      "A page inventory is a spreadsheet with one row per page: its address, its title, one sentence on who it is for and what action it should lead to, who owns it, when it was last checked, and whether to keep, update, merge or remove it. Build it from your sitemap, then review it twice a year.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T19:30:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("Why a practice website needs a page list"),
      p(
        "Most practice sites grow by accident. A provider joins and gets a page. A service is added, a form is replaced, a blog goes quiet. Years later nobody can say how many pages exist, which ones still matter, or which two say the same thing in slightly different words."
      ),
      p(
        "A page inventory fixes that with a single sheet. It does not need software, and it does not need to be perfect. It needs to be complete enough that someone new can answer: what is this page for, and who looks after it?"
      ),
      h2("Get the list of pages first"),
      p(
        "Start with a source that does the counting for you, so you do not miss pages that are not in the menu."
      ),
      ul(
        "The XML sitemap. Google describes sitemaps as a file that lists the pages you want crawled; for most sites it is at your address followed by /sitemap.xml. Our page on [sitemaps and robots.txt](/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website) explains it.",
        "The page list in your website editor, including drafts and hidden pages.",
        "The Pages tab of the Search Console Performance report, to see which pages Google has shown to searchers.",
        "The page indexing report, which shows pages Google knows about that are not on your list. Read [that report explained](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website) if the labels are unfamiliar."
      ),
      p(
        "Paste every address into one column. Remove obvious duplicates such as the same page with and without a trailing slash, and note any address that redirects to another."
      ),
      h2("The columns that matter"),
      table(
        ["Column", "What goes in it"],
        ["Address (URL)", "The full web address exactly as it appears in the browser."],
        ["Page title", "The title patients see at the top of the tab."],
        ["Purpose", "One sentence: who it is for and what they should do next, such as call, book or read."],
        ["Type", "Service, provider, location, information, policy, blog or tool."],
        ["Owner", "A role, not a name, such as front desk or practice manager."],
        ["Last checked", "The date someone confirmed hours, phone, names and links are still right."],
        ["Visits and calls or forms", "From analytics, if the page is a main entry point. Leave blank if unknown."],
        ["Decision", "Keep, update, merge or remove."],
      ),
      h2("Writing the purpose column"),
      p(
        "This is the column that does the real work. If you cannot write the purpose in one sentence, the page is probably trying to do too much, or nothing at all."
      ),
      h3("Examples of good purpose lines"),
      ul(
        "Contact page: lets a new patient find the phone number, address and form in one place.",
        "Provider page: tells a visitor who the clinician is, what they see patients for, and how to book.",
        "Insurance page: lists accepted plans, with the date it was last verified."
      ),
      p(
        "When two pages have the same purpose line, you have found a duplicate. Google's guidance on duplicates explains that you can point a weaker page to a stronger one with a redirect or a canonical, and that redirects are the choice when you are removing the duplicate for good."
      ),
      h2("Use it twice a year"),
      p(
        "Schedule two review sessions a year, and put them on the calendar so they happen. Sort by the Last checked column and start with the oldest. Look first at anything that includes hours, names, fees or phone numbers, since those go stale fastest."
      ),
      ol(
        "Open the oldest ten rows and check each page against reality.",
        "Fix what is wrong, then update the Last checked date.",
        "For pages marked merge or remove, follow [redirects when removing a service or provider page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website) before deleting anything.",
        "Add any new page to the sheet the same day it is published."
      ),
      p(
        "The sheet also makes handoffs easy. When a new manager starts, it sits next to the [day-one handoff map](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts) and answers most of what they will ask."
      ),
    ],
    faqs: [
      {
        q: "How many pages should a small practice website have?",
        a: "There is no right number. Every page should have a purpose you can state in a sentence. A small practice may have a few dozen pages and still be well organized.",
      },
      {
        q: "Do I need special software for this?",
        a: "No. A shared spreadsheet is enough. Many website editors can export a page list, and the sitemap gives you the addresses.",
      },
      {
        q: "Should patient names ever appear in the inventory?",
        a: "No. Keep it to page addresses, titles, purposes and owners. Provider names that already appear publicly on the site are fine, but nothing about patients.",
      },
      {
        q: "What should I do with pages nobody can explain?",
        a: "Mark them to review. If a page has no clear purpose, no visits and no links in, it is a candidate to merge or remove, using a redirect where there is a relevant replacement.",
      },
      {
        q: "Who should own the sheet?",
        a: "The office manager or marketing contact. The practice owner should have view access and read it at the twice-yearly review.",
      },
    ],
    citations: [GOOGLE_SITEMAPS, GOOGLE_CANONICAL, GSC_PERFORMANCE],
    links: [
      { href: "/guides/how-often-to-update-old-content-on-a-medical-practice-website", label: "Updating Old Content", description: "How often to refresh pages." },
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "Sitemaps and Robots.txt", description: "How Google gets the page list." },
      { href: "/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website", label: "Canonical Tags and Duplicates", description: "Handle near-identical pages." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1697
  {
    slug: "deciding-whether-to-keep-update-merge-or-remove-an-old-blog-post-on-a-medical-practice-website",
    keyword: "deciding whether to keep, update, merge or remove an old blog post on a medical practice website",
    category: "Checklist",
    title: "Keep, Update, Merge or Remove an Old Blog Post",
    metaTitle: "Keep, Update, Merge or Remove an Old Blog Post",
    metaDescription:
      "Five questions to decide what to do with an old blog post on a practice website, and how to redirect or retire it cleanly. (561) 291-2681",
    answer:
      "For each old blog post, ask five questions: is it still accurate, does anyone read it, does it repeat another post, does it have links in, and could it mislead a patient today. Keep it if the answers are good, update it if it is still wanted, merge it with a stronger post with a redirect, or remove it.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T19:40:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("Old posts are not all a problem, and not all an asset"),
      p(
        "A practice blog that has run for a few years usually contains a mix. A few posts still bring in visitors. Several repeat each other. Some mention a provider who left, a fee that changed or a health topic that has moved on. Deleting everything old is a mistake, and so is leaving everything alone."
      ),
      p(
        "Google's own guidance on helpful content asks whether content is accurate, original and made for people. Those three questions are a good filter for an old post as well: if it fails them, it is not helping the practice, and it may be misleading someone."
      ),
      h2("Five questions for each post"),
      ol(
        "Is it still accurate? Check hours, names, fees, insurance and any health or medical statement against what is true today.",
        "Does anyone read it? Open Search Console and look at clicks and impressions for that page over the last 12 months.",
        "Does it repeat another post? Search your own site for the same topic.",
        "Do other pages link to it? Check the site or ask your web person for a link list.",
        "Could it mislead a patient or damage trust? An out-of-date warning, an old policy or a clinical claim nobody has reviewed is the most important reason to act."
      ),
      p(
        "Our [guide on how often to update old content](/guides/how-often-to-update-old-content-on-a-medical-practice-website) gives a schedule for reviewing, and this page covers what to decide once a post comes up."
      ),
      h2("The four decisions"),
      table(
        ["Decision", "When it fits"],
        ["Keep", "Accurate, gets visits or has useful links in, and says something no other post does."],
        ["Update", "Still wanted by readers, but a fact, name, fee or link is out of date. Fix it, change the date shown only if the content really changed."],
        ["Merge", "Two or three posts cover the same ground. Move the best parts into the strongest one and redirect the others to it."],
        ["Remove", "No visits, no useful links in, nothing worth keeping, or content that cannot be corrected."],
      ),
      h3("Merging without losing visitors"),
      p(
        "When you merge, do the work in this order. Copy anything worth keeping into the stronger post. Check the stronger post still reads clearly. Then set up a permanent redirect from the weaker address to the stronger one. Google explains that a permanent redirect tells search engines the new address is the one to show, and that you should use it when removing a duplicate for good."
      ),
      h3("Removing a post cleanly"),
      p(
        "If there is no close replacement, do not redirect to the home page by default; a visitor looking for one topic should not land on a general page. Redirect to the closest related page, or let the old address return a not-found page and make sure your 404 page offers a way to reach the office. Our page on [site search and a helpful 404 page](/guides/site-search-and-404-page-for-a-medical-practice-website) covers the second case."
      ),
      h2("Special care for health content"),
      p(
        "A post that makes a health statement is the one most likely to age badly. A practice should not leave an unreviewed medical claim on the site simply because it was true when written. If you cannot get it reviewed by the clinician who is responsible for the site, it is safer to remove it than to keep it unchanged."
      ),
      ul(
        "Do not add new clinical claims while updating. Keep updates descriptive: who you are, what you offer, how to book.",
        "Do not name or describe any patient, even in an old success story.",
        "If a post names a clinician who has left, update the page or retire it, and check the link to their page."
      ),
      p(
        "Keep a record of what you decided and the date. The [page inventory spreadsheet](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for) is the right place, and the [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) will help explain any traffic change that follows."
      ),
    ],
    faqs: [
      {
        q: "Will deleting old posts hurt my Google rankings?",
        a: "Removing posts nobody reads rarely harms a site, but removing a post that has visits or links in can. Check Search Console and link sources first, and redirect to a close replacement when there is one.",
      },
      {
        q: "Should I change the publish date after updating a post?",
        a: "Only when the content really changed. Showing a new date on an unchanged post misleads readers. If you made a real update, say so on the page.",
      },
      {
        q: "What if I cannot tell whether a post is still accurate?",
        a: "Ask the person responsible for the topic to review it. For health content, that means the clinician. If nobody can confirm it, retire it rather than leaving a claim nobody stands behind.",
      },
      {
        q: "Is a 301 redirect better than a 404 for a removed post?",
        a: "Use a redirect when there is a relevant replacement page. If there is none, a clear not-found page is fine, and it is better than sending visitors to an unrelated page.",
      },
      {
        q: "How often should we do this?",
        a: "Twice a year is enough for most practices, tied to the same review as your page inventory. Start with the posts that mention fees, names or hours.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GOOGLE_REDIRECTS, GOOGLE_CANONICAL],
    links: [
      { href: "/guides/how-often-to-update-old-content-on-a-medical-practice-website", label: "Updating Old Content", description: "A review schedule." },
      { href: "/guides/should-a-medical-practice-blog-and-how-often", label: "Should a Practice Blog", description: "Decide whether and how often." },
      { href: "/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website", label: "Redirects When Removing Pages", description: "Retire pages without losing visitors." },
      LOC,
    ],
  },
];
