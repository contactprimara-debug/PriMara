// -- Guides batch 42a - 2026-11-11 --
// Guide/AEO pages from the Command Center queue (rows 1694, 1701, 1705, 1721, 1724, planned 2026-11-09/10), built by the page
// factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details. Inbound links are inline [text](/guides/slug) sentences
// appended to existing indexed guides.

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
const GBP_OWNERS = {
  publisher: "Google Business Profile Help",
  label: "Manage your Business Profile owners & managers",
  href: "https://support.google.com/business/answer/3403100",
};
const SC_PERMS = {
  publisher: "Search Console Help",
  label: "Managing owners, users, and permissions",
  href: "https://support.google.com/webmasters/answer/7687615",
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
const SEO_STARTER = {
  publisher: "Google Search Central",
  label: "SEO Starter Guide: The Basics",
  href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_REDIRECTS = {
  publisher: "Google Search Central",
  label: "Redirects and Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
};
const MOBILE_FIRST = {
  publisher: "Google Search Central",
  label: "Mobile-first Indexing Best Practices",
  href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty5A: Guide[] = [
  // ---------------------------------------------------------------- 1694
  {
    slug: "questions-to-ask-a-freelance-web-developer-before-a-small-fix-on-a-medical-practice-website",
    keyword: "questions to ask a freelance web developer before a small fix on a medical practice website",
    category: "Checklist",
    title: "Questions to Ask a Freelancer Before a Small Website Fix",
    metaTitle: "Questions to Ask a Freelancer Before a Small Site Fix",
    metaDescription:
      "Eight questions a practice owner asks a freelancer before a small website fix: access, backups, testing, scope and who to call. (561) 291-2681",
    answer:
      "Before a freelancer touches your practice website, ask who will have access, whether a backup is taken first, where the change is tested, what exactly will change, what could break, how you will see the result, and who answers if something goes wrong afterward. Eight plain answers in writing protect your phone number, forms and tracking.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T14:00:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Small fixes are where the damage usually happens"),
      p(
        "A large redesign gets a contract, a schedule and a kickoff call. A small fix, like moving a button, adding a provider or swapping a banner, gets a text message and a login. That is exactly why small fixes cause so many problems: nobody asks the questions that a big project forces."
      ),
      p(
        "The questions below take about ten minutes. You do not need to understand the answers technically. You need to hear that the freelancer has an answer, and to write it down."
      ),
      h2("Eight questions, and what a good answer sounds like"),
      h3("1. Who will have access to the website, and for how long?"),
      p(
        "A good answer names one person and a time frame, and says the login will be removed afterward. A poor answer is 'just send me the admin password.' Ask for a separate user account instead of sharing yours, so you can see what was changed and switch it off the day the work ends."
      ),
      h3("2. Will you take a backup first, and where does it go?"),
      p(
        "The answer should be yes, with the copy stored somewhere you can reach, not only on the freelancer's laptop. If the fix goes wrong, a backup turns a bad afternoon into a five-minute restore."
      ),
      h3("3. Where will you test the change before it goes live?"),
      p(
        "The best answer is a private test copy of the site. Our guide on [what a staging copy is and why changes go there first](/guides/staging-copy-of-a-medical-practice-website-and-testing-changes-before-they-go-live) explains it in plain words. If there is no test copy, ask for the change to be made outside office hours and checked right away."
      ),
      h3("4. What exactly will change, and what will not?"),
      p(
        "Ask for the change in one sentence and the pages it touches. Then ask what will stay the same: the phone number, the contact form, the booking link and the hours. This keeps a 'quick fix' from quietly turning into a rebuild of the header on every page."
      ),
      h3("5. What could break, and how will you check it?"),
      p(
        "A careful freelancer will name specific things: the contact form still sends, the phone number is still a tap-to-call link, the page loads on a phone. Compare that list with our guide on [checking a change in a second browser and on an older phone](/guides/checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live)."
      ),
      h3("6. Will you add any plugin, script or tracking tool?"),
      p(
        "On a healthcare site this needs a clear no, or a clear request for your approval first. A chat widget, ad pixel or session recorder can collect information you did not intend to collect. The reasoning is covered in [what to ask a web company before it adds a plugin or script](/guides/what-to-ask-a-web-company-before-it-adds-a-new-plugin-or-script-to-a-medical-practice-website)."
      ),
      h3("7. How will I see the finished result?"),
      p(
        "Ask for the page link and a screenshot of the live page, not a message saying 'done.' You open the link on your own phone and confirm it."
      ),
      h3("8. Who do I call if something is wrong next week?"),
      p(
        "You want a name, a way to reach them and a rough response time for a problem caused by the fix. A freelancer who answers 'just message me' without a time frame is telling you something about how a problem will go."
      ),
      h2("Put the answers in one email"),
      table(
        ["Question", "Write down"],
        ["Access", "One user account, end date, who removes it"],
        ["Backup", "Taken before the change, stored where you can reach it"],
        ["Testing", "Test copy or after-hours check, and by whom"],
        ["Scope", "One sentence on what changes and what stays"],
        ["Risk list", "Form, phone link, booking link, mobile view"],
        ["Add-ons", "No new plugin, script or tracker without your yes"],
        ["Proof", "Page link plus screenshot of the live result"],
        ["Support", "Name, contact method, response time"]
      ),
      p(
        "Email the table back to the freelancer and ask them to reply 'agreed.' Keep the thread in a shared folder. If the same freelancer helps again next year, the thread is your starting point, and your [list of who owns each account](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) keeps the practice in control of the logins either way."
      ),
    ],
    faqs: [
      {
        q: "Do I need a written agreement for a small website fix?",
        a: "A short email thread is usually enough for a small fix, as long as it names the change, the access, the backup and the support contact. For anything larger, ask for a written agreement.",
      },
      {
        q: "Should a freelancer have my website administrator login?",
        a: "Ask for a separate user account for the freelancer instead of sharing your own. You can then see what changed and turn the account off when the work is finished.",
      },
      {
        q: "What if the freelancer says a backup is not needed for a small change?",
        a: "Ask for one anyway. A backup takes minutes, and a small change that goes wrong on a live site is far harder to fix without one.",
      },
      {
        q: "How do I check the fix myself without technical skills?",
        a: "Open the page link on your own phone, tap the phone number, and submit nothing real. Then ask a staff member to look on a different phone or browser.",
      },
      {
        q: "Who should approve the fix before it is called finished?",
        a: "One named person at the practice, usually the owner or office manager, by email. The freelancer should not decide alone that a change is complete.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GOOGLE_REDIRECTS],
    links: [
      { href: "/guides/questions-to-ask-a-web-designer-before-redesigning-a-medical-practice-website-so-rankings-are-not-lost", label: "Questions Before a Redesign", description: "The larger version of these questions." },
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Backups and Maintenance", description: "What to expect from a maintenance plan." },
      { href: "/guides/medical-practice-website-cost", label: "Medical Practice Website Costs", description: "What drives the work behind a site." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1701
  {
    slug: "website-change-request-form-for-staff-at-a-medical-practice-so-edits-to-hours-providers-and-notices-reach-the-right-person",
    keyword: "a website change-request form for staff so edits to hours, providers and notices reach the right person at a medical practice",
    category: "Checklist",
    title: "A Staff Form for Website Change Requests",
    metaTitle: "Website Change Request Form for Staff at a Practice",
    metaDescription:
      "A short change-request form for front-desk staff so edits to hours, providers and notices reach one person and get done once, correctly. (561) 291-2681",
    answer:
      "Give staff one short change-request form with six fields: what to change, which page, the old wording, the new wording, the date it should take effect and who asked. Send every form to one person. That single inbox stops edits from getting lost in hallway talk and keeps the website, Google profile and phone greeting matching.",
    author: "Liam Costello",
    publishDate: "2026-11-11T14:10:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Why edits get lost inside a practice"),
      p(
        "Staff notice website problems before anyone else does. The receptionist sees that Friday hours are wrong because a patient says so at the window. The nurse sees that a provider's photo is out of date. Without a place to send the observation, it becomes a comment at lunch, and nothing changes for weeks."
      ),
      p(
        "The fix is not a ticketing system. It is a short form, one inbox and one person who reads it. Everything in this guide can live in a shared email address and a document."
      ),
      h2("The six fields"),
      ol(
        "What needs to change, in one sentence.",
        "Where it appears: the web page address, or 'Google profile,' or 'voicemail.'",
        "The words now: copy exactly what is there today.",
        "The words it should say: type the new wording, including the date and time format.",
        "The date it should take effect, and whether it ends on a date.",
        "Who is asking, and the best way to reach them with a question."
      ),
      p(
        "The 'words now' field matters more than it looks. It stops a vendor from fixing the wrong page and gives the reviewer a quick way to confirm that the request matches what is live."
      ),
      h2("Choose one receiver"),
      p(
        "Pick one person, with one backup, to read every request. This is usually the office manager. Use a shared role address such as a website-changes mailbox rather than a person's own inbox; our guide on a [shared role mailbox for website forms](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice) explains why the address should outlive any one employee."
      ),
      p(
        "The receiver does three things with each form: confirms it is correct, sends it to whoever edits the site, and replies to the staff member with the date it was done."
      ),
      h3("What needs a second yes"),
      p(
        "Some changes should need the owner's approval as well, not just the receiver's. Phone numbers, provider names, accepted insurance and anything that sounds like a promise belong on that list. Our guide on [a written sign-off step for vendor changes](/guides/written-sign-off-before-a-marketing-vendor-changes-a-medical-practice-phone-number-hours-or-provider-list) shows how to keep that approval short."
      ),
      h2("What happens after the form is sent"),
      ul(
        "Same day: the receiver confirms the request is complete and replies with 'received.'",
        "Within the week: the change is made and the editor sends the page link.",
        "Same day as the change: the receiver opens the link and checks it on a phone.",
        "End of the month: the receiver files each form with the date done."
      ),
      p(
        "Filing the forms gives you a history. When calls dip after a change, a dated list is the first thing you want; see our guide on a [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) for how to read it."
      ),
      h2("Keep the form short enough that staff use it"),
      p(
        "If the form takes more than two minutes, it will be skipped. Cut anything that is not on the six-field list. Staff do not need to know which page template is involved, who edits the site or what the page is called internally; they only need to describe what a patient would see."
      ),
      p(
        "Google also says that profile details such as hours and phone number can be edited by owners and managers directly; see Google's help on [editing your Business Profile](https://support.google.com/business/answer/3039617). The same form works for those requests: the receiver, not each staff member, is the one who makes the edit."
      ),
    ],
    faqs: [
      {
        q: "Do we need special software for a website change request?",
        a: "No. A shared document, a form tool or even an email template with the six fields works. What matters is that every request goes to one person.",
      },
      {
        q: "Who should receive website change requests?",
        a: "One named person, usually the office manager, plus a backup. Use a shared role address so requests do not depend on one person's inbox.",
      },
      {
        q: "Which changes should the owner approve?",
        a: "Phone numbers, provider names and titles, accepted insurance and any wording that sounds like a promise. Routine notices like a holiday closure can be approved by the receiver.",
      },
      {
        q: "How fast should a change be made?",
        a: "Set targets by type. A wrong phone number or hours error should be fixed the same day; wording and photo updates can wait for a weekly batch.",
      },
      {
        q: "Should staff include patient details in a change request?",
        a: "No. Describe what the website should say, never a patient's name or situation. The form is a business record and should contain no health information.",
      },
    ],
    citations: [GBP_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "When a Provider Joins or Leaves", description: "A checklist of every place to update." },
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday and Closure Notices", description: "Keep hours consistent." },
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "A Weekly 15-Minute Check", description: "A routine for the office manager." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1705
  {
    slug: "one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile",
    keyword: "a one-page vendor contact sheet for a medical practice listing who to call for the website host, domain, phone carrier and Google profile",
    category: "Checklist",
    title: "A One-Page Vendor Contact Sheet for a Practice",
    metaTitle: "One-Page Vendor Contact Sheet for a Medical Practice",
    metaDescription:
      "A one-page sheet listing who to call for the website host, domain, phone carrier and Google profile, so a problem at 8 a.m. gets fixed. (561) 291-2681",
    answer:
      "Keep one page listing each service your practice depends on: website host, domain registrar, email, phone carrier, Google profile, and patient portal. For each, write the company, the account owner, the login email, the support number, the renewal date and who at the practice may call. Store it where two people can find it.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T14:20:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("The morning the phones stop"),
      p(
        "A practice usually discovers that nobody knows who runs the website on a bad morning: the site is down, the phone line is dead or the Google profile shows 'permanently closed.' The person who set it up left two years ago. The invoice goes to an email nobody reads."
      ),
      p(
        "A single page, printed and saved, answers the first five minutes of any of these. It is the cheapest protection a practice can build."
      ),
      h2("What the sheet lists"),
      p(
        "One row per service. Keep it to the services that would hurt on a bad day."
      ),
      table(
        ["Service", "What to write down"],
        ["Website host", "Company, account email, support number, renewal date"],
        ["Domain registrar", "Company, account email, expiry date, auto-renew on or off"],
        ["Practice email", "Who runs it, how to reset a staff password, support number"],
        ["Phone carrier or system", "Company, account owner, support number, how to reroute calls"],
        ["Google Business Profile", "Primary owner's Google account, one backup owner"],
        ["Patient portal and forms", "Vendor, practice administrator, support contact"],
        ["Website maintenance contact", "Person or company that fixes the site, response time"]
      ),
      h2("Fields that save the most time"),
      h3("The account owner, not just the company"),
      p(
        "Support lines ask for the name and email on the account before they will do anything. If the account was opened by a former employee or an old vendor, you need that fact now, not when the site is down. Our guide on [who should own the practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) covers how to fix that ahead of time."
      ),
      h3("Renewal dates"),
      p(
        "Domain names and hosting expire. Put each date in a shared calendar with a reminder a month ahead; see [domain renewal and expiration protection](/guides/domain-name-renewal-and-expiration-protection-for-a-medical-practice-website) for the details."
      ),
      h3("Who at the practice may call"),
      p(
        "Name the people allowed to call each vendor. Support teams often refuse requests from anyone not listed on the account, and it is better to know that before the emergency."
      ),
      h2("Do not put passwords on the sheet"),
      p(
        "The sheet lists where logins live and who can reset them. It never contains the passwords themselves. Use a password manager for those, and list on the sheet which manager holds them and who can open it."
      ),
      p(
        "Google's help on [owners and managers for a Business Profile](https://support.google.com/business/answer/3403100) explains that a profile has one primary owner and that each person should use their own Google Account instead of a shared login. Note the primary owner and a backup owner on the sheet."
      ),
      h2("Keep it current in two minutes a quarter"),
      ol(
        "Open the sheet at the start of each quarter.",
        "Call or log in to each service and confirm the renewal date.",
        "Check that every person listed still works at the practice.",
        "Replace the dated copy in the shared folder and the printed copy at the front desk."
      ),
      p(
        "A new office manager should receive this page on day one; our list of [what to hand a new office manager](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts) puts it first."
      ),
    ],
    faqs: [
      {
        q: "What should a vendor contact sheet for a medical practice include?",
        a: "For each service: the company, the account owner and login email, the support number, the renewal date and who at the practice may call. Include the website host, domain, email, phone carrier, Google profile and patient portal.",
      },
      {
        q: "Should passwords be on the vendor contact sheet?",
        a: "No. List where the logins are stored and who can open that storage. Keep the passwords themselves in a password manager.",
      },
      {
        q: "Where should the sheet be kept?",
        a: "In a shared folder that at least two people can open, plus a printed copy at the front desk for days when email or the internet is down.",
      },
      {
        q: "How often should the sheet be updated?",
        a: "Once a quarter, and any time a vendor, owner or staff member changes. A stale sheet is worse than none, because people trust it.",
      },
      {
        q: "Who should own the vendor contact sheet?",
        a: "The office manager or practice owner, with one named backup. The point is that more than one person knows it exists.",
      },
    ],
    citations: [GBP_OWNERS, GBP_EDIT],
    links: [
      { href: "/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice", label: "Removing a Former Employee's Access", description: "Close the door when staff leave." },
      { href: "/guides/what-to-check-on-the-website-and-google-profile-after-a-medical-practice-changes-its-phone-system-or-carrier", label: "After a Phone System Change", description: "What to check on the website and profile." },
      { href: "/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends", label: "When a Marketing Vendor Leaves", description: "Hand over accounts cleanly." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1721
  {
    slug: "plain-glossary-of-website-and-google-terms-for-a-practice-owner-meeting-a-marketing-vendor-for-the-first-time",
    keyword: "a one-page glossary of website and Google terms such as SEO, profile, key event and directory listing for a practice owner meeting a marketing vendor for the first time",
    category: "How-to",
    title: "Plain Glossary of Website and Google Terms for Practice Owners",
    metaTitle: "Website and Google Terms Glossary for Practice Owners",
    metaDescription:
      "Plain-language definitions of SEO, Google profile, key event, directory listing and more, for a practice owner meeting a marketing vendor. (561) 291-2681",
    answer:
      "A practice owner needs about twelve terms to follow a marketing vendor: SEO, Google Business Profile, directory listing, citation, key event, impression, click, ranking, landing page, schema, backlink and indexing. Each has a one-sentence meaning below, plus the question to ask when a vendor uses it.",
    author: "Liam Costello",
    publishDate: "2026-11-11T14:30:00Z",
    dateModified: "2026-11-11",
    readMinutes: 6,
    sections: [
      h2("Why a short glossary helps in the first meeting"),
      p(
        "Marketing vendors use shortcuts. A practice owner who nods along without knowing the words cannot tell a good report from a vague one. You do not need to learn the field. You need to know twelve words well enough to ask a follow-up question."
      ),
      h2("The terms, one sentence each"),
      h3("Search and findability"),
      table(
        ["Term", "What it means"],
        ["SEO", "Work that helps your website show up when people search Google for what you offer"],
        ["Ranking", "Where your page appears in the results for a search; position 1 is the top"],
        ["Impression", "One time your page or profile appeared in someone's search results"],
        ["Click", "One time someone chose your result and visited your page"],
        ["Indexing", "Google saving a copy of a page so it can show it in results"]
      ),
      p(
        "Impressions and clicks come from the report Google gives site owners. Google describes how to read them in its help for the [Search Console performance report](https://support.google.com/webmasters/answer/7576553). Impressions alone do not mean a patient called, so ask what the vendor counts as a result."
      ),
      h3("Your Google presence"),
      table(
        ["Term", "What it means"],
        ["Google Business Profile", "The free listing with your hours, phone number and reviews that appears on Google Search and Maps"],
        ["Directory listing", "Your practice details on another site, such as an insurer's provider search or a therapist directory"],
        ["Citation", "Any online mention of your practice name, address and phone number, with or without a link"],
        ["Backlink", "A link to your website from another website"]
      ),
      p(
        "Directory listings and citations should all show the same name, address and phone number. When they do not, patients and Google both get confused. Our guide on [keeping those details consistent](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains where it breaks."
      ),
      h3("Your website and tracking"),
      table(
        ["Term", "What it means"],
        ["Landing page", "The first page a visitor sees after clicking a result or link"],
        ["Key event", "An action you care about in Google Analytics, such as a form submission or a call tap"],
        ["Schema", "Extra labels in a page's code that tell search engines what the page is about"]
      ),
      p(
        "A key event is the closest thing to a result a report can show. Google explains how they work in its help on [key events in Analytics](https://support.google.com/analytics/answer/9267568). A vendor who cannot tell you which key events are set up on your site is not measuring leads."
      ),
      h2("Questions to ask when a term shows up"),
      ul(
        "Ranking: for which search, from which location, and compared with when?",
        "Impressions or clicks: how many of those turned into calls or forms?",
        "Key event: which action does it count, and where can I see it myself?",
        "Citation: who owns the login for each listing you are building?",
        "Backlink: where does each link come from, and would a patient trust that site?"
      ),
      h2("What to do with the glossary"),
      p(
        "Print it and bring it to the meeting. When a term comes up, circle it and ask the question. If an answer is a longer word, ask for a shorter one. Our guide on [reading a marketing proposal](/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises) shows what to watch for in the written version."
      ),
      p(
        "Google's own [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) is also readable by a non-technical owner and is a fair check on whether a vendor's explanation matches what Google publishes."
      ),
    ],
    faqs: [
      {
        q: "What does SEO mean for a medical practice?",
        a: "Search engine optimization: work that helps your website and Google profile appear when people search for the care you offer, such as a primary care office or counselor in your area.",
      },
      {
        q: "What is a key event in Google Analytics?",
        a: "A key event is an action you mark as important, such as submitting a contact form or tapping the phone number. It is the closest measure a website report has to a lead.",
      },
      {
        q: "What is the difference between a Google Business Profile and a directory listing?",
        a: "The profile is your own free listing on Google. A directory listing is your practice information on another site, such as an insurance directory.",
      },
      {
        q: "Are impressions the same as patients finding us?",
        a: "No. An impression means your result appeared on someone's screen. A click means they visited, and only a call or form means they tried to reach you.",
      },
      {
        q: "What should I ask a vendor who uses a term I do not know?",
        a: "Ask what it means in one sentence, what number it will change and where you can check that number yourself.",
      },
    ],
    citations: [SEO_STARTER, SC_PERFORMANCE, GA_KEY_EVENTS],
    links: [
      { href: "/guides/how-to-pick-a-healthcare-marketing-agency", label: "How to Pick a Healthcare Marketing Agency", description: "Questions to ask before you sign." },
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "Reading Search Console", description: "What the numbers mean." },
      { href: "/guides/how-to-read-google-analytics-4-reports-each-month-for-a-medical-practice", label: "Reading Google Analytics 4", description: "A monthly look at visits and key events." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1724
  {
    slug: "plain-monthly-note-to-a-practice-owner-summarizing-calls-forms-and-one-change-made-without-technical-terms",
    keyword: "a plain monthly note to the practice owner summarizing calls, forms and one change made, without technical terms",
    category: "Checklist",
    title: "A Plain Monthly Note to the Practice Owner",
    metaTitle: "A Plain Monthly Marketing Note for a Practice Owner",
    metaDescription:
      "A short monthly note format for a practice owner: calls, forms, one change made and one next step, in plain words and no jargon. (561) 291-2681",
    answer:
      "A good monthly note fits on half a page: how many calls and forms came from the website, how many came from the Google profile, the one change made this month, the one change planned next month, and one thing the owner needs to decide. No charts, no terms, and every number can be checked in a named place.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T14:40:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Why a short note beats a long report"),
      p(
        "A fifteen-page report gets filed. A half-page note gets read, and a note that gets read is the one that leads to a decision. Practice owners are busy, and the question they have is simple: are more people reaching us, and what are you doing about it?"
      ),
      p(
        "The format below works whether you write it yourself, your office manager does or a vendor sends it. If a vendor's report cannot be boiled down to this, ask why."
      ),
      h2("The five parts of the note"),
      h3("1. People who reached you"),
      p(
        "Give three numbers: contact form submissions, taps on the phone number from the website and calls from the Google profile. Put last month beside this month. Say where each number came from, in a few words, so the owner can check."
      ),
      h3("2. Where they came from"),
      p(
        "One sentence is enough: most visitors arrived from Google search, a few from the Google profile and a few from other places. Do not list every source."
      ),
      h3("3. One change made"),
      p(
        "Name the single most important change, such as fixing hours on a directory, adding a page for a service patients asked about or repairing a broken form. Say what it was in the words the front desk would use."
      ),
      h3("4. One change planned"),
      p(
        "Name the next step and when it should be done. One item keeps the note honest; a list of ten promises is hard to hold anyone to."
      ),
      h3("5. One decision needed"),
      p(
        "End with the one thing you need from the owner, or write 'nothing needed.' This turns a report into a working conversation."
      ),
      h2("A sample note"),
      table(
        ["Part", "Example wording"],
        ["Reached us", "Forms: 6 (last month 4). Phone taps from the website: 11 (9). Calls from the Google profile: 14 (12)."],
        ["From where", "Mostly Google search; a few from the Google profile."],
        ["Change made", "Fixed the Friday hours on two directories so they match the website."],
        ["Planned", "Add a page that explains what to bring to a first visit, by the 20th."],
        ["Decision", "Approve the new wording for the first-visit page."]
      ),
      h2("Where each number comes from"),
      p(
        "Every figure should come from a place the owner could look. Form submissions come from the practice's own form inbox. Phone taps come from the website's analytics, set up as a key event as described in Google's help on [key events in Analytics](https://support.google.com/analytics/answer/9267568). Profile calls come from the Google Business Profile performance screen, which our guide on [reading the monthly profile report](/guides/how-to-read-google-business-profile-performance-reports-each-month) walks through."
      ),
      p(
        "A phone tap is not a connected call, and a form submission is not a new patient. Say so in one line at the bottom, so nobody reads the note as a count of appointments."
      ),
      h2("What to leave out"),
      ul(
        "Technical terms such as bounce rate, crawl budget or domain authority.",
        "Rankings for words nobody searches.",
        "Any patient name, health detail or message text from a form.",
        "Comparisons with other practices you cannot verify."
      ),
      p(
        "If you want a longer version for yourself, our [monthly 30-minute marketing meeting agenda](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) is the place for the detail; the note is only the summary."
      ),
    ],
    faqs: [
      {
        q: "What should a monthly marketing note to a practice owner include?",
        a: "Calls and form submissions compared with last month, one change made, one change planned and one decision needed. Keep it to half a page without technical terms.",
      },
      {
        q: "How do I count calls from the website?",
        a: "Count taps on the phone number as a key event in website analytics, and count calls from the Google profile separately. A tap shows interest but is not a connected call.",
      },
      {
        q: "Should the note include patient messages from forms?",
        a: "No. Report only how many forms arrived. Do not copy names, health details or message text into the note.",
      },
      {
        q: "Who should write the monthly note?",
        a: "Whoever manages the website and profile: a vendor, the office manager or the owner. The format stays the same.",
      },
      {
        q: "What if the numbers go down one month?",
        a: "Say so plainly, name the most likely cause you can check, such as a closure or a change made, and write what you will look at next month.",
      },
    ],
    citations: [GA_KEY_EVENTS, SC_PERFORMANCE],
    links: [
      { href: "/guides/year-end-marketing-results-summary-for-the-owner-of-a-counseling-practice", label: "Year-End Results Summary", description: "The yearly version of this note." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Where the numbers are recorded." },
      { href: "/guides/setting-simple-monthly-goals-for-calls-and-forms-for-a-small-medical-practice-website", label: "Setting Simple Monthly Goals", description: "Targets for calls and forms." },
      LOC,
    ],
  },
];
