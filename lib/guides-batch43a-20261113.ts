// -- Guides batch 43a - 2026-11-13 --
// Guide/AEO pages from the Command Center queue (rows 1746-1750, planned 2026-11-11), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details. Inbound links are inline [text](/guides/slug)
// sentences appended to existing indexed guides.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const SEO_STARTER = {
  publisher: "Google Search Central",
  label: "SEO Starter Guide: The Basics",
  href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
};
const PSI = {
  publisher: "PageSpeed Insights Documentation",
  label: "About PageSpeed Insights",
  href: "https://developers.google.com/speed/docs/insights/v5/about",
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
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty6A: Guide[] = [
  // ---------------------------------------------------------------- 1746
  {
    slug: "how-to-read-an-seo-score-from-a-free-website-audit-tool-for-a-medical-practice",
    keyword: "how a practice owner should read an SEO score from a free website audit tool and what to do with it",
    category: "How-to",
    title: "How to Read a Free SEO Audit Score for Your Practice",
    metaTitle: "How to Read a Free SEO Audit Score for a Practice",
    metaDescription:
      "A free website audit gives one big score and a long list. Here is how a practice owner reads it, what to ignore and what to fix first. (561) 291-2681",
    answer:
      "A free SEO audit score is a summary of automated checks, not a measure of how many patients you will get. Read the list under the score, fix anything that breaks the phone number, forms, mobile view or page indexing first, and treat the rest as optional until calls and forms are counted.",
    author: "Gio LaRoche",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("What the score is, and what it is not"),
      p(
        "Free audit tools crawl a page or a handful of pages and run a fixed list of automated checks: is there a title, is there a meta description, do images have alt text, does the page load quickly. The tool adds up the passes and failures and shows you one number, often with a red, orange or green color."
      ),
      p(
        "That number describes how well the pages match the tool's own checklist. It does not say how many new patients will find you, and two tools will give the same website two different scores because each has its own list and its own weighting. A score of 62 on one tool and 81 on another is not a contradiction. It is two checklists."
      ),
      h2("Read the list under the score, in this order"),
      p(
        "Skip the headline and go to the list of findings. Sort them by what it would cost you if the finding were true, not by the tool's color."
      ),
      table(
        ["Finding type", "What to do"],
        ["Phone number or form does not work, page will not load, page blocked from Google", "Fix first. These cost you patients directly."],
        ["Mobile view broken, text too small, buttons too close together", "Fix next. Most visitors arrive on a phone."],
        ["Missing title or description, duplicate titles, missing alt text", "Fix when you next edit the page. Low effort, small gain."],
        ["Word counts, keyword density, 'add more keywords'", "Ignore unless the page really is empty. Write for patients."],
        ["Backlink counts and 'domain authority' style numbers", "Do not chase. These are the tool's own estimates."]
      ),
      h2("Findings that are often wrong for a practice"),
      p(
        "Audit tools are built for every kind of website, so some advice does not fit a healthcare practice. A tool may tell you to add a chat widget, a pop-up or more tracking scripts. On a medical or counseling site those can collect information you did not intend to collect, so check [what to ask a web company before it adds a plugin or script](/guides/what-to-ask-a-web-company-before-it-adds-a-new-plugin-or-script-to-a-medical-practice-website) before accepting that kind of suggestion."
      ),
      p(
        "A tool may also flag a page as 'thin' because it has few words. A short page for the phone number, hours and address can be exactly right. Judge by whether a patient finds the answer, not by length alone."
      ),
      h3("Speed scores"),
      p(
        "Speed numbers come from lab tests that simulate a phone on a slower connection, so they swing from run to run. Google documents how its own tool works in the [PageSpeed Insights documentation](https://developers.google.com/speed/docs/insights/v5/about). Run it three times and look at the pattern, not one reading. Our [Core Web Vitals checklist for a medical practice website](/guides/core-web-vitals-checklist-for-a-medical-practice-website) lists the few fixes that usually matter."
      ),
      h2("Turn the report into a short to-do list"),
      ol(
        "Copy the findings that affect the phone number, forms, mobile layout or Google access into a list.",
        "Open the site on your own phone and confirm each one yourself.",
        "Give the confirmed ones to whoever manages the site, with a date.",
        "Put the low-effort items in the next scheduled edit.",
        "Write down the score and the date, then run the same tool again in a month."
      ),
      p(
        "Run the same tool each time. Comparing one tool's score from March with another tool's score from June tells you nothing. If you want something that reflects patients instead of checklists, count calls and forms each month on a [simple lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) and look at what [Search Console reports for your own site](/guides/how-to-read-google-search-console-for-a-medical-practice-website)."
      ),
      h2("When an audit arrives in your inbox uninvited"),
      p(
        "Some free audits are sent as a sales opener. The score is usually low on purpose. Treat it like any list of findings: confirm the high-impact items yourself, and ask the sender what exactly they would change and how you would see the result. A vendor who promises a ranking or a score is guessing, and our guide on [spotting guaranteed ranking promises in a proposal](/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises) explains why."
      ),
    ],
    faqs: [
      {
        q: "Is a high SEO score the same as ranking well on Google?",
        a: "No. The score only shows how many of the tool's automated checks passed. Rankings depend on many other things, including competition, the content itself and how patients search.",
      },
      {
        q: "Why do two free tools give my site different scores?",
        a: "Each tool uses its own checklist and its own weighting. Different lists produce different numbers for the same site, so only compare scores from the same tool over time.",
      },
      {
        q: "Which finding should I fix first?",
        a: "Anything that stops a patient from calling, submitting a form or loading the page, or that blocks Google from the page. Cosmetic and wording suggestions come after those.",
      },
      {
        q: "Should I pay for a tool because the free score was low?",
        a: "Not because of the score alone. Confirm the high-impact findings yourself first, then decide whether you need help fixing them. A low score from a sales email is not proof of a problem.",
      },
      {
        q: "How often should I run a free audit?",
        a: "Monthly or quarterly with the same tool is enough. Record the date and score, and look for findings that are new since the last run.",
      },
    ],
    citations: [SEO_STARTER, PSI],
    links: [
      { href: "/guides/how-to-run-a-local-seo-audit-for-a-medical-practice", label: "How to Run a Local SEO Audit", description: "A manual audit for a medical practice." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "The speed checks that matter." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Count calls and forms, not scores." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1747
  {
    slug: "five-minute-staff-huddle-after-a-website-change-so-the-front-desk-knows-what-patients-will-see",
    keyword: "a five-minute staff huddle after a website change so the front desk knows what patients will see",
    category: "Checklist",
    title: "Five-Minute Staff Huddle After a Website Change",
    metaTitle: "Five-Minute Staff Huddle After a Website Change",
    metaDescription:
      "A short huddle after a website change keeps the front desk ready for patient questions: a five-minute agenda, a one-line note and a check. (561) 291-2681",
    answer:
      "After any change to the practice website, hold a five-minute huddle: show the changed page on a phone, say in one sentence what is different, tell the front desk what patients may ask, and agree who fixes anything that looks wrong. A written one-line note afterward keeps everyone's answers the same.",
    author: "Liam Costello",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 4,
    sections: [
      h2("Why the front desk needs to know first"),
      p(
        "Patients rarely read a website change notice, but they do act on what the page says. If the hours, a provider, a form or a phone number changed and the front desk learns about it from a confused patient, the first answer is usually wrong or hesitant."
      ),
      p(
        "A short huddle fixes that. It takes less time than one phone call, and it turns the person answering the phone into the practice's best check that the page is right."
      ),
      h2("The five-minute agenda"),
      table(
        ["Minute", "What happens"],
        ["1", "Pull up the changed page on a phone and show it on the screen or pass the phone around."],
        ["2", "Say in one sentence what is different: for example, a new provider listed or a new form link."],
        ["3", "Name what a patient might ask because of it, and agree the answer."],
        ["4", "Ask what looks wrong, missing or confusing to the people who talk to patients all day."],
        ["5", "Agree who fixes anything raised and who tells the team when it is done."]
      ),
      p(
        "Hold it standing, at the start or end of a shift, with whoever is in. Do not wait for a full staff meeting. A change that goes live on Tuesday should be discussed by Tuesday afternoon."
      ),
      h2("What to show, depending on the change"),
      h3("A hours or holiday change"),
      p(
        "Read the hours exactly as the page and the Google profile state them, and confirm the phone greeting says the same thing. Mismatched hours are among the most common reasons a patient calls a closed office, and our guide on [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) covers where the wording must match."
      ),
      h3("A provider added or removed"),
      p(
        "Show the provider page and agree how the front desk describes who is accepting new patients. After a joiner, run through the [week-after checks of the website and Google profile](/guides/checking-the-website-and-google-profile-the-week-after-a-new-provider-joins-a-primary-care-practice) so the listing and the page agree."
      ),
      h3("A new form, button or phone number"),
      p(
        "Tap it on a phone while the team watches. If it is a phone number, call it from a desk line and confirm it rings where it should. If it is a form, confirm who receives the submissions and who answers them, using a [shared role mailbox](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice) instead of one person's inbox."
      ),
      h2("The one-line note afterward"),
      p(
        "Send one line to the team the same day: what changed, the date, the page link and the answer to the most likely patient question. Keep it in a shared folder or a pinned message so a new hire can read the last few months of changes in a minute."
      ),
      ul(
        "What changed: one sentence, no technical terms.",
        "Where to see it: the page link.",
        "What to tell a patient who asks: one or two sentences.",
        "Who to tell if something looks wrong: a name."
      ),
      p(
        "If your practice already keeps a [change log for marketing and website edits](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change), add the huddle date to the same entry. It makes a later drop in calls easier to trace to a cause."
      ),
    ],
    faqs: [
      {
        q: "Does a small website change really need a staff huddle?",
        a: "Not every small edit, but any change a patient could notice does: hours, providers, phone numbers, forms, insurance wording and new notices. Those are the ones that cause questions at the front desk.",
      },
      {
        q: "Who should lead the huddle?",
        a: "Whoever made or approved the change, usually the owner, the office manager or the person who manages the website. The goal is to show the page and listen, not to lecture.",
      },
      {
        q: "What if staff find a mistake during the huddle?",
        a: "Write it down, name one person to send the fix to whoever edits the site, and tell the team once it is corrected. Do not let patients be the first to find it.",
      },
      {
        q: "Should patient examples be used in the huddle?",
        a: "No. Talk about what a patient might ask in general terms. Never use a real patient's name or details when discussing a page change.",
      },
      {
        q: "How long should the written note be?",
        a: "Four short lines: what changed, where to see it, what to say if asked and who to tell if something looks off.",
      },
    ],
    citations: [GBP_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/website-change-request-form-for-staff-at-a-medical-practice-so-edits-to-hours-providers-and-notices-reach-the-right-person", label: "Website Change Request Form", description: "How staff ask for edits." },
      { href: "/guides/checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live", label: "Checking a Change in a Second Browser", description: "Test before telling the team." },
      { href: "/guides/choosing-a-day-and-time-to-publish-website-changes-at-a-primary-care-practice-so-the-front-desk-is-not-caught-off-guard", label: "Choosing When to Publish Changes", description: "Keep the front desk from being caught off guard." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1748
  {
    slug: "phone-answered-hours-versus-office-hours-on-a-medical-practice-website-and-google-profile",
    keyword: "phone-answered hours versus office hours on a medical practice website and Google profile when the front desk closes for lunch or after the last patient",
    category: "How-to",
    title: "Phone-Answered Hours vs Office Hours on Your Website",
    metaTitle: "Phone-Answered Hours vs Office Hours for a Practice",
    metaDescription:
      "Office open does not always mean phone answered. How to word both on your website and Google profile so patients know when to call. (561) 291-2681",
    answer:
      "Office hours say when patients can be seen. Phone-answered hours say when a person picks up. If they differ, because the front desk closes for lunch or stops answering after the last patient, publish both with plain labels on the website and say the same thing in the phone greeting so patients are not left guessing.",
    author: "Liam Costello",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("Two kinds of hours that get mixed up"),
      p(
        "Most practice websites list one set of hours. In real life there are often two. The office may see patients until five, while the front desk stops answering at four-thirty to finish check-outs. Or the doors may stay open at noon while the phones go to voicemail for an hour."
      ),
      p(
        "A patient who calls at twelve-fifteen and reaches voicemail on a line listed as open does not think 'lunch.' They think the practice is hard to reach. Publishing both kinds of hours removes that surprise."
      ),
      table(
        ["Kind of hours", "Means"],
        ["Office hours", "When the office is open and patients with appointments are seen."],
        ["Phone-answered hours", "When a staff member picks up the main number."],
        ["After-hours line", "What happens outside both: voicemail, an answering service or a nurse line."]
      ),
      h2("Wording that works on the website"),
      p(
        "Put the two lines next to each other on the contact page and in the footer, and keep the labels identical every time. For example: 'Office hours: Monday to Friday, 8:30 a.m. to 5 p.m.' and 'Phones answered: Monday to Friday, 8:30 a.m. to 12 p.m. and 1 p.m. to 4:30 p.m.' Use your own real times, not these."
      ),
      p(
        "Then add one sentence for what to do outside those times, such as leaving a voicemail and when it is returned. Do not promise a callback time you cannot meet. Our guide on [wait-time and availability messaging without promises](/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises) covers how to word that safely."
      ),
      h3("The emergency line"),
      p(
        "Whatever the hours, include a plain note that emergencies should be handled by calling 911 and that the website and voicemail are not monitored for urgent needs. The [office versus 911 page](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) has wording to adapt."
      ),
      h2("What to do on Google Business Profile"),
      p(
        "Google Business Profile has one hours field for the location, so it normally shows the hours the office is open. If the front desk closes for lunch and you want the lunch gap shown, see how [split hours and lunch closures](/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice) are entered. If the only difference is that phones stop before the doors close, keep the profile hours as the office hours and say the phone times in the business description or on the website page the profile links to."
      ),
      p(
        "Google's help page on [editing your Business Profile](https://support.google.com/business/answer/3039617) explains where hours are changed. Whichever you choose, the profile, website and voicemail greeting must agree."
      ),
      h2("Make the phone greeting match"),
      ol(
        "Record a greeting that states the phone-answered hours in the same words as the website.",
        "Say where the caller goes for an emergency.",
        "Say when voicemails are returned only if you can keep that promise.",
        "Re-record it whenever hours change, including holiday and seasonal changes."
      ),
      p(
        "Test it once a month by calling at an off-hours time from a personal phone and listening as a patient would. The same call can be added to your [monthly profile maintenance checklist](/guides/monthly-google-business-profile-maintenance-checklist)."
      ),
    ],
    faqs: [
      {
        q: "Should I list phone hours if they match office hours?",
        a: "No. If the phones are answered whenever the office is open, one set of hours is clearer. Add a second line only when the two differ.",
      },
      {
        q: "Can I show phone hours on my Google Business Profile?",
        a: "The profile has one hours field per location, so it usually shows when the office is open. State phone-answered times on your website and in the profile description if they differ.",
      },
      {
        q: "What should the after-hours message say?",
        a: "Say the hours the phone is answered, tell the caller to dial 911 for an emergency, and say whether voicemails are returned the next business day only if that is true.",
      },
      {
        q: "Does the lunch closure need to be on the website?",
        a: "Yes, if the front desk does not answer. A patient calling at that time needs to know it is a closure and when to call back.",
      },
      {
        q: "How do I keep all three versions the same?",
        a: "Write the hours once in a shared note, and copy them to the website, the Google profile and the voicemail greeting on the same day whenever they change.",
      },
    ],
    citations: [GBP_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice", label: "Split Hours and Lunch Closures", description: "Entering a lunch gap on Google." },
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "Wording for the after-hours message." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday and Closure Notices", description: "Keeping the website, profile and phone aligned." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1749
  {
    slug: "showing-a-last-updated-date-on-service-pages-of-a-medical-practice-website-and-when-it-helps-or-hurts",
    keyword: "showing a last-updated date on service pages of a medical practice website and when it helps or hurts",
    category: "How-to",
    title: "Last Updated Dates on a Medical Practice Website",
    metaTitle: "Last Updated Dates on a Medical Practice Website",
    metaDescription:
      "Should a service page show a last-updated date? When it builds trust, when it backfires and how a practice keeps the date honest. (561) 291-2681",
    answer:
      "Show a last-updated date on pages where information changes and patients rely on it, such as insurance, hours, policies and health-education pages. Skip it on pages that never change. Only change the date when the content actually changed, and make the visible date match the date in the page's markup.",
    author: "Gio LaRoche",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("What a date tells a patient and Google"),
      p(
        "A visible date answers a quiet question: is this still true? On a page about accepted insurance or visitor policy, 'Last updated November 2026' tells a patient the practice looked at it recently. On a page dated three years ago, the same patient may wonder whether to trust the phone number."
      ),
      p(
        "Google also reads dates. Its documentation on [dates in search results](https://developers.google.com/search/docs/appearance/publication-dates) says to show a clearly labeled visible date and to keep it consistent with the date in structured data. It also says not to use future dates or the date of an event the page describes."
      ),
      h2("Where a date helps"),
      table(
        ["Page type", "Show a date?"],
        ["Insurance accepted, fees policy wording, cancellation policy", "Yes. Patients check these before booking and the details change."],
        ["Hours, holiday and seasonal notices", "Yes, and remove the notice when it ends."],
        ["Educational articles and guides", "Yes. A reviewed date helps readers judge freshness."],
        ["Provider and team pages", "Usually no. Update the content, not a date line."],
        ["Contact page", "No. A stale date next to a correct phone number only adds doubt."]
      ),
      h2("Where a date hurts"),
      p(
        "A date hurts when it is older than the page deserves. A well-written explanation of what a first visit involves can stay accurate for years, but a date from 2022 makes it look abandoned. If the content is still correct, review it and honestly update the date rather than hiding the date."
      ),
      p(
        "It also hurts when it is fake. Changing the date on every page each month without changing the content does not help patients, and it is the sort of edit that looks like an attempt to trick the reader. Our guide on [how often to update old content](/guides/how-often-to-update-old-content-on-a-medical-practice-website) explains what counts as a real update."
      ),
      h2("How to keep the date honest"),
      ol(
        "Set a review schedule for pages that carry dates, for example every six months for insurance and policy pages.",
        "On review, read the page against the real current facts. Change only what is wrong.",
        "Update the visible date only if you reviewed or changed the page.",
        "Make sure the date in the page markup matches the visible date, so that Google and the patient see the same thing.",
        "Keep a note of who reviewed it. If a named clinician reviewed medical wording, say so only when it is true."
      ),
      p(
        "Our [annual website content review checklist](/guides/annual-website-content-review-checklist-for-a-counseling-practice) works well as the schedule for those reviews."
      ),
      h2("Wording and placement"),
      p(
        "Place the date near the top, under the title, in plain words: 'Last reviewed: November 2026.' Use 'Last reviewed' when you checked the page and changed nothing, and 'Last updated' when text changed. Do not add a date to a page you have not looked at."
      ),
      p(
        "On guides and articles, a clear author line goes well with the date, as covered in [author byline and editorial standards for a practice blog](/guides/author-byline-and-editorial-standards-page-for-a-medical-practice-blog). Together they show who stands behind the page and when."
      ),
    ],
    faqs: [
      {
        q: "Does a last-updated date improve my Google ranking?",
        a: "Not by itself. Google says it may use dates to show a byline date when useful, but an accurate date is for readers and consistency, not a ranking trick.",
      },
      {
        q: "Should every page on my practice website show a date?",
        a: "No. Show it on pages where patients depend on current information, like insurance, policies, hours and articles. Leave it off pages that rarely change, such as the contact page.",
      },
      {
        q: "What is the difference between reviewed and updated?",
        a: "Reviewed means someone checked the page and found it still correct. Updated means the content changed. Use whichever is true.",
      },
      {
        q: "Is it wrong to change the date without changing the page?",
        a: "Yes, it is misleading to readers. Only change the date when the page was reviewed or edited.",
      },
      {
        q: "How often should dated pages be reviewed?",
        a: "Insurance, fee and policy pages about every six months, and articles about once a year, or sooner when something relevant changes.",
      },
    ],
    citations: [
      { publisher: "Google Search Central", label: "Influencing your byline date in Google Search", href: "https://developers.google.com/search/docs/appearance/publication-dates" },
      GOOGLE_HELPFUL,
    ],
    links: [
      { href: "/guides/how-often-to-update-old-content-on-a-medical-practice-website", label: "How Often to Update Old Content", description: "What counts as a real update." },
      { href: "/guides/annual-website-content-review-checklist-for-a-counseling-practice", label: "Annual Content Review Checklist", description: "A yearly review schedule." },
      { href: "/guides/what-is-eeat-and-why-it-matters-for-medical-practices", label: "What Is E-E-A-T", description: "Why trust signals matter for medical pages." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1750
  {
    slug: "questions-to-ask-a-web-host-or-maintenance-provider-about-support-response-time-for-a-medical-practice-website",
    keyword: "questions to ask a web host or maintenance provider about support response time for a medical practice website",
    category: "Checklist",
    title: "Asking a Web Host About Support Response Time",
    metaTitle: "Asking a Web Host About Support Response Time",
    metaDescription:
      "What to ask a web host or maintenance provider about support response time, and what to write down, before your site has a problem. (561) 291-2681",
    answer:
      "Before a problem happens, ask your web host or maintenance provider how to report an issue, how fast they reply, what counts as urgent, who answers outside business hours and what they do first. Get the answers in writing, then test the process once with a harmless question.",
    author: "Gio LaRoche",
    publishDate: "2026-11-13T14:00:00Z",
    dateModified: "2026-11-13",
    readMinutes: 5,
    sections: [
      h2("Support speed matters most when the phone is not ringing"),
      p(
        "When a practice website goes down or a contact form stops sending, nothing announces it. Calls just stop, and the owner finds out days later. What the host does in the next hour decides how many patients were affected."
      ),
      p(
        "Most hosting and maintenance plans mention support, but few say how fast. Ask before you need it. The questions take ten minutes, and the answers also tell you whether this provider suits a medical practice."
      ),
      h2("Seven questions to ask"),
      h3("1. How do I report a problem, and which way is fastest?"),
      p(
        "Ask for the exact channel: a phone line, a ticket form, a chat or an email address. Some providers answer chat quickly but reply to email next day. Write down the channel meant for urgent issues."
      ),
      h3("2. How quickly will someone respond, in writing?"),
      p(
        "Ask for a time in hours, not 'as soon as possible,' and ask whether that is for a first reply or for a fix. A first reply in two hours and a fix in two days are different promises. Providers often publish this in a service agreement, so ask where."
      ),
      h3("3. What do you treat as urgent?"),
      p(
        "A site that is down, a form that does not send and a phone number that is wrong should all be on the urgent list. Make sure the provider agrees. Compare it with the steps in [what a practice does when its website goes down during office hours](/guides/what-a-medical-practice-does-when-its-website-goes-down-during-office-hours)."
      ),
      h3("4. Who answers outside business hours?"),
      p(
        "Ask whether there is any weekend or evening coverage, and whether the response time changes. If the answer is none, you need to know, and a backup plan matters more."
      ),
      h3("5. Do you monitor the site, or do I have to tell you?"),
      p(
        "Ask whether uptime is monitored and who is alerted. Our guide on [backups, uptime monitoring and maintenance](/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice) explains what to expect and what to ask for."
      ),
      h3("6. What are your first three steps when a site is down?"),
      p(
        "A good answer includes checking the host status, restoring from a recent backup if needed and confirming the contact form and phone link afterward. If they cannot say, they have not planned for it."
      ),
      h3("7. Who has access to our site, and how is it removed?"),
      p(
        "Ask who on their team can log in and how access ends when someone leaves. You should know that the provider also follows the practice's own [vendor access rules](/guides/which-access-level-to-give-a-vendor-or-staff-member-on-google-business-profile-search-console-and-google-analytics)."
      ),
      h2("Write the answers on one page"),
      table(
        ["Item", "Record"],
        ["Report channel", "Phone, ticket, chat or email, with the address or number"],
        ["Response time", "Hours for a first reply, and for urgent issues"],
        ["Urgent list", "Down, form not sending, wrong phone number"],
        ["After-hours coverage", "Yes or no, and how to reach it"],
        ["Monitoring", "Who watches the site and who gets alerts"],
        ["Escalation", "Name and number if the first contact does not reply"]
      ),
      p(
        "Keep this next to your [vendor contact sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile) so the office manager can find it when the owner is away."
      ),
      h2("Test it once"),
      p(
        "Send one harmless question through the urgent channel, such as asking where the latest backup is stored, and note how long a reply takes. If the answer comes in a day when they promised two hours, you have learned it cheaply."
      ),
    ],
    faqs: [
      {
        q: "What is a good support response time for a practice website?",
        a: "There is no single standard, but for urgent problems such as a down site or a form not sending, a first reply within a few business hours is a reasonable ask. Get whatever they promise in writing.",
      },
      {
        q: "Is a cheap host a problem for a medical practice?",
        a: "Not by price alone. What matters is whether support is reachable, backups exist and they respond to urgent problems. Ask the same questions of every provider.",
      },
      {
        q: "Who should have the support contact details at the practice?",
        a: "The owner and the office manager. Store them in a shared place, not in one person's email.",
      },
      {
        q: "What if the provider will not put response times in writing?",
        a: "Treat that as an answer. Plan for slower help, keep your own backup of important pages and consider whether another provider suits you better.",
      },
      {
        q: "Should the provider see patient information?",
        a: "No. The website provider should not need access to patient information, and form submissions should go to a mailbox the practice controls.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GA_KEY_EVENTS],
    links: [
      { href: "/guides/what-a-medical-practice-does-when-its-website-goes-down-during-office-hours", label: "When the Website Goes Down", description: "What to do in office hours." },
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Backups and Uptime Monitoring", description: "What to expect from maintenance." },
      { href: "/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile", label: "One-Page Vendor Contact Sheet", description: "Who to call for what." },
      LOC,
    ],
  },
];
