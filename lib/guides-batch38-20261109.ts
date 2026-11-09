// -- Guides batch 38 - 2026-11-09 --
// Guide/AEO pages from the Command Center queue (rows 1636-1645, planned 2026-11-06 PM), built by the page factory
// to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice-owner audience only. Plain practical
// guidance, no legal advice, no outcome promises. Each page reads the nearest live guide first and takes a different
// intent. Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GOOGLE_DEBUG = {
  publisher: "Google Search Central",
  label: "Debugging drops in Google Search traffic",
  href: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops",
};
const GOOGLE_HIRE_SEO = {
  publisher: "Google Search Central",
  label: "Do you need an SEO? Tips for hiring an SEO",
  href: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo",
};
const GOOGLE_SITE_MOVE = {
  publisher: "Google Search Central",
  label: "How to move a site",
  href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
};
const GOOGLE_REDIRECTS = {
  publisher: "Google Search Central",
  label: "Redirects and Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
};
const GOOGLE_STARTER = {
  publisher: "Google Search Central",
  label: "SEO Starter Guide: The Basics",
  href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GSC_MANUAL = {
  publisher: "Google Search Console Help",
  label: "Manual actions report",
  href: "https://support.google.com/webmasters/answer/9044175",
};
const GSC_PERFORMANCE = {
  publisher: "Google Search Console Help",
  label: "Performance report (Search results): overview and basic setup",
  href: "https://support.google.com/webmasters/answer/7576553",
};
const GSC_USERS = {
  publisher: "Google Search Console Help",
  label: "Managing owners, users, and permissions",
  href: "https://support.google.com/webmasters/answer/7687615",
};
const GA_REALTIME = {
  publisher: "Google Analytics Help",
  label: "Realtime report",
  href: "https://support.google.com/analytics/answer/9271392",
};
const GA_KEY_EVENTS = {
  publisher: "Google Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const GA_USERS = {
  publisher: "Google Analytics Help",
  label: "Add, edit, and delete Analytics users and user groups",
  href: "https://support.google.com/analytics/answer/9305788",
};
const GBP_SUSPENDED = {
  publisher: "Google Business Profile Help",
  label: "Fix suspended or disabled profiles",
  href: "https://support.google.com/business/answer/4569145",
};
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
const LIFELINE_988 = {
  publisher: "SAMHSA",
  label: "988 Suicide and Crisis Lifeline",
  href: "https://www.samhsa.gov/find-help/988",
};
const NN_HOMEPAGE = {
  publisher: "Nielsen Norman Group",
  label: "Homepage design: 5 fundamental principles",
  href: "https://www.nngroup.com/articles/homepage-design-principles/",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty1: Guide[] = [
  // ---------------------------------------------------------------- 1636
  {
    slug: "what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website",
    keyword: "what to do in the first hour when a medical practice website's calls or traffic suddenly drop",
    category: "Checklist",
    title: "First Hour Checklist When Practice Calls or Traffic Drop",
    metaTitle: "First Hour Checklist When Practice Calls or Traffic Drop",
    metaDescription:
      "Calls or visits suddenly down? A one-hour order of checks for a practice owner: site, phone link, Google profile, then Search Console. (561) 291-2681",
    answer:
      "When calls or website visits suddenly drop, check in this order before changing anything: can a patient reach you, is the Google profile live, did anything change recently, and is the drop real or only a reporting gap. Write down what you find. Most drops trace to one of those four.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("Do not change anything yet"),
      p(
        "A bad Monday feels like an emergency, and the urge is to fix something right away: rewrite the home page, pause the ads, call the web company. Resist it for one hour. Google's own guidance on traffic drops notes that small shifts in position come and go on their own, and it recommends avoiding radical changes to pages that were performing well."
      ),
      p(
        "The goal of the first hour is narrow. You are finding out whether something is broken, and writing down what you saw, so that whoever fixes it starts from facts instead of a guess."
      ),
      h2("Minutes 0 to 15: can a patient reach you?"),
      p(
        "Everything else matters less than this. A practice can lose a week of new patients to a phone link that stopped dialing, and nobody inside the office would notice because they never use the website to call themselves."
      ),
      ol(
        "Open your home page on a phone using mobile data, not the office wifi, and confirm it loads without a security warning.",
        "Tap the phone number. Confirm the dial screen shows the right digits. Our guide to [phone number format and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) shows what a working link looks like.",
        "Send yourself one message through the contact form, using a made-up name and the word TEST, and tell the front desk first so nobody treats it as a real request. Confirm it arrives in the inbox that is supposed to receive it, and check the spam folder too.",
        "If you use an online booking or portal button, click it and confirm it opens the right page.",
        "Ask the front desk whether the main phone line is ringing normally and whether voicemail is full."
      ),
      p(
        "If any of these fail, stop here and fix that first. A site that is down, a certificate that expired or a form that no longer emails the office explains a drop by itself."
      ),
      h2("Minutes 15 to 30: is the Google profile still live?"),
      p(
        "Search your practice name on a phone, then search a plain request such as primary care near your address. Look at the profile card. Confirm it shows your hours, your phone number and your website, and that no banner says the profile is suspended or needs verification. A profile that was suspended or disabled stops sending calls and direction requests at once, and Google publishes the steps for fixing it."
      ),
      p(
        "Also glance at the reviews. If the count or the star rating moved, our page on [what to check when Google reviews disappear](/guides/google-reviews-disappeared-or-review-count-dropped-on-a-medical-practice-profile-what-to-check) explains the usual reasons, none of which require panic."
      ),
      h2("Minutes 30 to 45: match what you see to the likely cause"),
      p(
        "Different drops point to different places. Use the pattern, not a hunch."
      ),
      table(
        ["What you see", "Where to look first"],
        ["Site will not load, or shows a warning", "Hosting and domain renewal, certificate expiry, a recent site update. Call your host or web person with the exact message."],
        ["Visits normal, calls down", "The phone link and the number on the profile. A changed or broken number is the usual cause."],
        ["Visits normal, forms down", "The form's email delivery, the spam folder, and whether the form still submits. Check the form, not the report."],
        ["Visits from Google down sharply, starting on one date", "Search Console: manual actions, security issues, the page indexing report, and any recent change to the site."],
        ["Only the report dropped, the phones feel the same", "The tracking tag, a new cookie banner or a changed consent setting. Ask the front desk how many calls they actually took."],
      ),
      h3("Open Search Console for five minutes"),
      p(
        "In the Performance report, compare the last 7 days to the 7 days before and look at clicks, impressions and average position. Then open the Manual actions report and the Security issues report, which should both say no issues. Google's guide describes how the shape of the graph helps: a sudden cliff points to a technical, security or spam cause, while a slow slide often means seasonality or changing interest. Our page on [reading the page indexing report](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website) covers the indexing screen."
      ),
      h2("Minutes 45 to 60: write it down and decide who acts"),
      p(
        "Make a short note with the time, what you checked and what you saw, including screenshots of the Performance graph and the profile card. Add the date of anything that changed lately: a new theme, a plugin update, a phone system switch, new ads, a staff member editing the profile. If you keep a [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change), this is the moment it pays for itself."
      ),
      p(
        "Then decide who acts. If something is broken, send the note to whoever owns that piece with the exact symptom and ask for a fix and a time. If nothing is broken and the drop is small, put a reminder to look again in a week and keep the Monday habit from [the weekly 15-minute marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) going. A real drop that persists is worth a longer look; a dip that comes back on its own is not."
      ),
    ],
    faqs: [
      {
        q: "How big a drop is worth worrying about?",
        a: "A drop in calls or forms that lasts more than a few days, or that follows a clear change on a known date, deserves a proper look. A single slow week, especially around holidays or school breaks, is normal. Compare against the same weeks in earlier months before deciding.",
      },
      {
        q: "Should I pause my ads when traffic drops?",
        a: "Not before you know the cause. If the site or phone link is broken, ads will keep sending people to a dead end, so pausing for an hour while you check is reasonable. If the problem is elsewhere, pausing only removes a source of patients.",
      },
      {
        q: "Could a Google update be the cause?",
        a: "It can be. Google lists notable ranking updates on its own page, and a drop that starts the same week is worth noting. Google says there may be nothing wrong with your content after an update, so avoid rewriting pages in a hurry.",
      },
      {
        q: "Who should I call first?",
        a: "Whoever owns the broken piece: the host for a down site, the phone company for a dead line, the person who manages your Google profile for a suspension. If you are not sure, send your note to your marketing contact and ask them to reply with what they checked.",
      },
      {
        q: "Should the front desk be told?",
        a: "Yes. Ask them to tell you right away if patients mention trouble reaching the office or using the website. Callers who cannot get through often say so on the next try.",
      },
    ],
    citations: [GOOGLE_DEBUG, GSC_MANUAL, GBP_SUSPENDED, GSC_PERFORMANCE],
    links: [
      { href: "/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change", label: "Marketing Change Log", description: "Trace a drop to a dated change." },
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly 15-Minute Check", description: "A short routine that catches problems early." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Tracking Phone Calls", description: "Count taps without patient details." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1637
  {
    slug: "questions-to-ask-a-web-designer-before-redesigning-a-medical-practice-website-so-rankings-are-not-lost",
    keyword: "questions to ask a web designer before redesigning a medical practice website so search rankings are not lost",
    category: "Checklist",
    title: "Questions to Ask Before a Medical Website Redesign",
    metaTitle: "Questions to Ask Before a Medical Website Redesign",
    metaDescription:
      "Twelve plain questions to put to a web designer before a medical practice redesign, so the pages that bring in patients keep their rankings. (561) 291-2681",
    answer:
      "Before a redesign starts, ask the designer which pages bring in patients today, whether every old address will redirect to a new one, who handles the tracking and forms, and what is checked before launch. A designer who cannot answer in writing is a risk to your search traffic.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:10:00Z",
    dateModified: "2026-11-09",
    readMinutes: 7,
    sections: [
      h2("A redesign can quietly delete your best pages"),
      p(
        "A new design is the one moment when a practice website can lose years of Google standing in a single afternoon. The new site goes live looking better, the old page addresses stop working, and the pages that brought in patients vanish from search. Nobody notices for weeks because the home page still looks fine."
      ),
      p(
        "You do not need to understand the technology to prevent this. You need to ask the right questions before signing, and to get the answers in writing. This page is that list. If you are changing your name or address as well, read the [rebrand checklist](/guides/medical-practice-rebrand-seo-checklist) alongside it, and if the address of the whole site is changing, read about [moving a site to a new domain](/guides/how-to-migrate-a-medical-practice-website-to-a-new-domain)."
      ),
      h2("Questions about what already works"),
      ol(
        "Which of my current pages get visits from Google, and how will you find out? A good designer opens Search Console and Analytics before drawing anything, and sends you the list of pages that matter.",
        "Will every page that brings in visits or calls keep its content? Google ranks the words on a page. If a service page that has been ranking for years is cut to two sentences and a photo, the ranking usually goes with the words.",
        "Will my page addresses stay the same? The simplest answer is yes, wherever possible. Every address that changes is a risk, so ask for a reason for each change.",
        "What happens to an old address that must change? The answer should be a permanent redirect to the closest matching new page, set up before launch, with a spreadsheet mapping old to new. Google describes this mapping as the core of moving any site, and notes that permanent redirects do not cause a loss of link credit."
      ),
      h2("Questions about what patients do on the site"),
      ol(
        "Will the phone number stay tap-to-call on every page, and who tests that on a real phone? See [the click-to-call guide](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) for what to expect.",
        "Where do forms send their messages, and who confirms they arrive? Ask that a test submission, with a made-up name, is sent from every form before launch.",
        "How will you carry over the Google Analytics tag and the call and form tracking, and who checks it after launch? A new site that drops the tag leaves you blind exactly when you need data.",
        "Is there any patient information in the forms, and how is it handled? Ask how the form tool stores and sends messages, and ask that your attorney or privacy officer is shown the setup. A designer should not promise legal compliance on their own."
      ),
      h2("Questions about launch and the weeks after"),
      ol(
        "Will you build and test on a private copy first, and block that copy from Google? A test site that Google can read creates duplicate pages.",
        "What is on the launch-day checklist? It should include the redirects, the sitemap, the robots file, page titles and descriptions, the tracking tag and a test of every form and phone link.",
        "How will you watch the first month? Google says to expect temporary ranking changes during a move and to monitor traffic on old and new addresses. Ask who will look at Search Console, how often, and who tells you what they find.",
        "Can you leave the old site available if we need to roll back? You want a plan for the day something goes wrong.",
        "Who owns the finished site, the domain and the logins? Our page on [who should own your Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why this belongs in the contract."
      ),
      h2("How to read the answers"),
      table(
        ["Answer you hear", "What it usually means"],
        ["We will check traffic and keep the pages that matter, and here is the list.", "A designer who has done this before. Ask for the list in writing."],
        ["Do not worry, SEO takes care of itself.", "No plan for redirects or tracking. Ask the redirect question again, plainly."],
        ["We will fix rankings after launch.", "A fix after launch is slower and harder than a plan before it. Ask what is checked before the switch."],
        ["Every page will be new, so no mapping is needed.", "Old addresses still exist in Google. They need somewhere to go."],
      ),
      p(
        "Ask for the answers by email so they can be found later. Google suggests changing only one big thing at a time when moving a site, so if the designer also wants a new domain, a new platform and a new layout in the same weekend, ask why those cannot be staged. Our guide on [redirects when removing a service or provider page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website) covers the smaller case of a single page that goes away."
      ),
    ],
    faqs: [
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "It can, and it does not have to. Rankings are usually protected when the pages that bring in visits keep their content, old addresses redirect to matching new ones, and the tracking and sitemap carry over. Expect some temporary movement for a few weeks even with good planning.",
      },
      {
        q: "How long should I wait before judging the new site?",
        a: "Give it a few weeks of data, and compare against the same weeks before launch rather than the week before. Google notes that for a medium-sized site it can take a few weeks or more for the new addresses to replace the old ones in results.",
      },
      {
        q: "Should I hire an SEO before the redesign or after?",
        a: "Before is better. Google itself says a redesign is a great time to bring in an SEO, the earlier the better, so the site is built search-friendly from the start. Ask for the review of pages and redirects to be done before the design is approved.",
      },
      {
        q: "Is it fine to change every page title at once?",
        a: "It is usually better not to. Change what has a reason to change, and keep titles for pages that already perform. Changing everything at once makes it hard to tell what helped and what hurt.",
      },
      {
        q: "What should I keep from the old site?",
        a: "A copy of every page's text, the list of page addresses, the analytics and Search Console access, and the login for the domain. Keep them somewhere the designer does not control.",
      },
    ],
    citations: [GOOGLE_SITE_MOVE, GOOGLE_REDIRECTS, GOOGLE_HIRE_SEO, GOOGLE_STARTER],
    links: [
      { href: "/guides/medical-practice-rebrand-seo-checklist", label: "Rebrand SEO Checklist", description: "Name, address and logo changes." },
      { href: "/guides/how-to-migrate-a-medical-practice-website-to-a-new-domain", label: "Moving To A New Domain", description: "The step-by-step version." },
      { href: "/guides/medical-website-launch-seo-checklist", label: "Website Launch SEO Checklist", description: "What to verify on launch day." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1638
  {
    slug: "how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises",
    keyword: "how to read a marketing proposal for a medical practice and spot guaranteed ranking promises",
    category: "Checklist",
    title: "How to Read a Marketing Proposal and Spot Ranking Promises",
    metaTitle: "How to Read a Marketing Proposal and Spot Ranking Promises",
    metaDescription:
      "How a practice owner can read a marketing proposal line by line: what to look for, which promises to doubt, and what to ask before signing. (561) 291-2681",
    answer:
      "Read a marketing proposal for four things: what exactly will be done each month, what you will receive as proof, who owns the accounts, and how you can leave. Be wary of any guarantee of a number one ranking, because Google says no one can promise that.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:20:00Z",
    dateModified: "2026-11-09",
    readMinutes: 7,
    sections: [
      h2("A proposal is a list of promises, so read it like one"),
      p(
        "Most proposals open with a confident summary and bury the real terms on page six. The summary is a sales pitch. The scope, the reporting and the exit terms are the contract. A practice owner without a marketing background can still read a proposal well by looking for specific, checkable things and ignoring the adjectives."
      ),
      p(
        "This page is about reading what is already in front of you. If you are still choosing between companies, start with [how to pick a healthcare marketing agency](/guides/how-to-pick-a-healthcare-marketing-agency), then come back with the proposals in hand."
      ),
      h2("Start with the promises that should make you stop"),
      p(
        "Google's own advice on hiring an SEO is blunt. No one can guarantee a number one ranking on Google, and anyone who guarantees it, claims a special relationship with Google, or advertises a priority submission to Google is a company to walk away from. Google also warns that you remain responsible for what a company does on your behalf, and that an SEO who creates deceptive content for you could get your site removed from the index."
      ),
      table(
        ["If the proposal says", "Why to doubt it"],
        ["Guaranteed first page or number one ranking", "Nobody controls Google's results. A guarantee is either a lie or a narrow promise about an obscure phrase nobody searches."],
        ["A special relationship with Google, or an inside track", "Google says it never accepts money to include or rank sites in organic results."],
        ["Submit your site to thousands of search engines", "Google calls this type of exercise useless for ranking in the major engines."],
        ["Hundreds of backlinks per month", "Bought or mass-produced links can violate Google's spam policies and put the site at risk."],
        ["Results in 30 days, guaranteed", "Local search work usually takes months to show. See [how long local SEO takes](/guides/how-long-does-local-seo-take-for-a-medical-practice)."],
        ["Proprietary secret method, no details", "Google suggests being careful with a company that is secretive or will not explain what it intends to do."],
      ),
      h2("Then read what the money actually buys"),
      p(
        "A fair proposal names the work in plain words, and the work is something you could verify. Compare each line against this test: could I look at the website or Google profile next month and see whether it happened?"
      ),
      ul(
        "Deliverables listed by number and type, such as the pages to be written or improved, the profile updates, the review-reply routine and the technical fixes.",
        "A start date, a monthly rhythm, and who does the work. If it is outsourced, the proposal should say so.",
        "A reporting section that says what you will receive and when, and which numbers matter to a practice: calls, form requests and visits from Google. Rankings and impressions alone are not patients.",
        "A plain statement of what is not included, such as ad spend, photography, review gathering or a new website."
      ),
      h3("Check what the report will count"),
      p(
        "Ask how calls and forms are measured, and whether the numbers will come from your own Google Analytics and Search Console accounts that you can open yourself. The [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) shows a simple way to keep your own count, which is also the best check on any agency's report."
      ),
      h2("Read the fine print on ownership and exit"),
      p(
        "This is the part most owners skip and most regret. Look for who owns the website, the domain, the Google Business Profile, Analytics and any ad account. Everything should be in your name, with the vendor added as a user. Look for the minimum term, the notice period, auto-renewal language and any fee to leave. Look for what happens to the content they wrote for you when the contract ends. Our guide on [who should own your Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) goes into the reasons."
      ),
      p(
        "Also check how the proposal handles patient information. A vendor should not need to see patient messages or records to do marketing work, and a proposal that asks for access to your patient system or the contents of forms is a reason to ask your attorney or privacy officer before signing."
      ),
      h2("Questions to send back before you sign"),
      ol(
        "What exactly will you do in the first 30 days, and what will I see when it is done?",
        "Which of these results can you control, and which depend on Google?",
        "Will every account be created in my name, with you as a user?",
        "How do I leave, what does it cost, and what do I get on the way out?",
        "Can I speak with a practice similar to mine that has worked with you for more than a year?"
      ),
      p(
        "A company that welcomes these questions is usually one worth hiring. If the answers come back vague, defensive or late, that is the information you were looking for."
      ),
    ],
    faqs: [
      {
        q: "Is it ever fine for a proposal to include a ranking goal?",
        a: "A goal is fine; a guarantee is not. A proposal can say it will work toward better visibility for a stated list of searches. It should not promise a specific position, because Google controls the results and no agency can.",
      },
      {
        q: "How long should a contract run?",
        a: "Local search work takes months, so a first term of several months can be reasonable, but a long lock-in with a heavy penalty to leave is a warning sign. Look for a clear way out with notice, and for monthly work you can see.",
      },
      {
        q: "What should I do if I already signed a proposal with a ranking guarantee?",
        a: "Ask in writing what the guarantee covers and what happens if it is missed. Make sure you hold the logins to your accounts. Google notes that in the United States the Federal Trade Commission handles complaints about deceptive or unfair business practices.",
      },
      {
        q: "Should an agency need access to my Search Console?",
        a: "Read access is usually enough at the start. Google suggests granting only read access to Search Console while an SEO is auditing your site, and holding back write access until you are comfortable.",
      },
      {
        q: "Are lower prices a red flag?",
        a: "Not by themselves. Look at what is promised for the price. A very cheap plan that promises dramatic results is a mismatch, and a fair price tied to specific work you can verify is a better sign.",
      },
    ],
    citations: [GOOGLE_HIRE_SEO, GOOGLE_STARTER, GA_KEY_EVENTS],
    links: [
      { href: "/guides/how-to-pick-a-healthcare-marketing-agency", label: "Picking A Marketing Agency", description: "Choosing between companies." },
      { href: "/guides/how-to-measure-roi-on-medical-practice-marketing", label: "Measuring Marketing ROI", description: "Count what matters to a practice." },
      { href: "/guides/in-house-marketer-vs-agency-for-a-medical-practice", label: "In-House Or Agency", description: "Which fits a small practice." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1639
  {
    slug: "what-a-practice-owner-should-see-in-the-first-30-days-of-local-seo-work",
    keyword: "what a practice owner should expect to see in the first 30 days of local SEO work",
    category: "How-to",
    title: "What to Expect in the First 30 Days of Local SEO",
    metaTitle: "What to Expect in the First 30 Days of Local SEO",
    metaDescription:
      "A week-by-week look at what a practice owner should be shown in the first 30 days of local SEO work, and what not to expect yet. (561) 291-2681",
    answer:
      "In the first 30 days of local SEO you should see setup and fixes, not rankings: access to your accounts, a baseline of calls, forms and visits, a list of problems found, and the first changes made. Ranking movement usually takes longer, so judge month one by work shown and checked.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:30:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("Month one is setup, not results"),
      p(
        "Owners often expect new patients by the end of the first month, and then feel let down when the phone does not change. That is not the fault of the work. A search engine needs time to find changes, and Google itself says that some changes take effect in days while others can take several months. What you can fairly expect in month one is evidence that the right work started."
      ),
      p(
        "This page gives a week-by-week picture of what a decent engagement should show you. It is not about how long results take overall, which our page on [how long local SEO takes](/guides/how-long-does-local-seo-take-for-a-medical-practice) covers. It is a checklist for the first four weeks, so you know whether the work is on track."
      ),
      h2("Week one: access and a starting line"),
      p(
        "Before any change is made, the work should record where you are today. Without a starting line, no later number means anything."
      ),
      ul(
        "Accounts are set up in your name: Google Business Profile, Search Console and Analytics, with the vendor added as a user.",
        "A baseline is written down: calls, form requests, visits from Google, and your current Google profile views if you can see them. The [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) is a simple place to keep it.",
        "Tracking is tested: a tap on the phone number and a test form submission, using a made-up name, both show up in the reports.",
        "You are told who your contact is and how often you will hear from them."
      ),
      h2("Week two: the audit and the problem list"),
      p(
        "By now you should have a short written list of what is wrong and what matters most. A good audit is specific. It names pages, profile fields and technical issues, in order of importance, and says what will be fixed first. Our page on [running a local SEO audit](/guides/how-to-run-a-local-seo-audit-for-a-medical-practice) shows what one covers."
      ),
      table(
        ["Area", "What a useful week-two finding looks like"],
        ["Google profile", "Categories, hours, services, description and photos reviewed, with the exact items to change."],
        ["Website", "Pages that are missing, thin or duplicated, titles that repeat, and anything broken on a phone."],
        ["Accuracy", "Name, address and phone compared across the site, the profile and major directories."],
        ["Tracking", "Whether calls and forms are counted, and what is missing."],
      ),
      h2("Week three: the first fixes go live"),
      p(
        "Expect real changes now, and expect to be told what they were. That could be corrected profile details, a fixed phone link, a rewritten service page, a page that answers a question patients ask, or a cleaned-up set of listings. Each change should be named, dated and visible to you, so you can open the page or profile and see it."
      ),
      p(
        "Keep your own note of what changed and when. A [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) makes it easy to see later which change lined up with which result."
      ),
      h2("Week four: a first report and a plan"),
      p(
        "The first report is a starting report, not a victory lap. It should show the baseline from week one, the work done, what is planned for month two, and any early movement in plain terms. Movement in impressions or in the number of searches where you appear is a reasonable early sign. Calls and forms may or may not have changed yet, and a good report says so honestly."
      ),
      h3("What you should not expect yet"),
      ul(
        "A first-page ranking for a competitive search. Nobody can promise it, and Google says no one can guarantee a number one result.",
        "A flood of new patients. Local patients come when the profile, site and reviews have all improved and Google has had time to notice.",
        "Perfect reports. Early numbers are small and noisy, so look at direction over several weeks."
      ),
      h2("Signs the first month went well"),
      p(
        "You can name what was done. You can open the things that changed. You know your baseline for calls, forms and visits. You have a plan for month two with specific items. And nobody asked you to give up ownership of anything, or promised a result they cannot control. If that is not what you have after 30 days, ask for it in writing, and read [how to read a marketing proposal](/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises) again with the contract beside it."
      ),
    ],
    faqs: [
      {
        q: "Should I see more calls after 30 days?",
        a: "Maybe, maybe not. Small gains can appear early if something was clearly broken, such as a dead phone link or an incomplete Google profile. Judge month one on work done and tracking set up, and judge results over three to six months.",
      },
      {
        q: "What if I hear nothing for the first two weeks?",
        a: "Ask for the week-one baseline and the audit list. Silence in the first month often means setup is slow or that nobody is tracking the work. A short written update every week or two is a fair expectation.",
      },
      {
        q: "Can month-one changes make things worse?",
        a: "Sometimes pages move up or down while Google reprocesses changes. That is why a baseline and a dated list of changes matter. Avoid judging on a single week.",
      },
      {
        q: "Is it normal to wait for approvals from me?",
        a: "Yes. Photos, service lists, bios and facts about the practice need your review, and delays on your side can slow the work. Reply within a few days and ask for a short list of what is waiting on you.",
      },
      {
        q: "How do I know the work is real?",
        a: "You can open it. Every change should be a page, a profile field or a setting you can look at, with a date next to it. If you cannot find something that was reported as done, ask to be shown.",
      },
    ],
    citations: [GOOGLE_DEBUG, GOOGLE_STARTER, GOOGLE_HIRE_SEO, GA_KEY_EVENTS],
    links: [
      { href: "/guides/how-long-does-local-seo-take-for-a-medical-practice", label: "How Long Local SEO Takes", description: "The longer timeline." },
      { href: "/guides/how-to-run-a-local-seo-audit-for-a-medical-practice", label: "Local SEO Audit", description: "What a first audit covers." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "A simple baseline to keep." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1640
  {
    slug: "marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change",
    keyword: "a one page marketing change log for a medical practice so a drop can be traced to a change",
    category: "Checklist",
    title: "A One-Page Marketing Change Log for a Medical Practice",
    metaTitle: "A One-Page Marketing Change Log for a Medical Practice",
    metaDescription:
      "Keep a one-page log of every website, Google profile and ads change, with a date and a name, so a drop in calls can be traced to its cause. (561) 291-2681",
    answer:
      "A marketing change log is one shared page with a row for every change to the website, Google profile, ads, phone system or tracking: the date, what changed, who did it and why. When calls or visits move, you read back to the date and see what changed first.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:40:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Why a drop is hard to explain without dates"),
      p(
        "When calls fall, the first question is always what changed. Without a record, the honest answer is a shrug. The web person says they did nothing, the office manager remembers editing something on the profile, the ad company adjusted a budget, and the phone company moved the line last Thursday. Each fact is small and none was written down."
      ),
      p(
        "A change log fixes that for almost no cost. It is a single page that anyone who touches your online presence adds one line to, every time. It does not prevent problems. It makes them findable in minutes instead of days, which is the first thing the [first-hour checklist for a drop](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) asks for."
      ),
      h2("What goes in it"),
      p(
        "Keep it as a shared spreadsheet or a simple document. Use one row per change, with these columns."
      ),
      table(
        ["Column", "What to write"],
        ["Date and time", "The day the change went live, not the day it was planned. If it was a few days apart, write both."],
        ["Where", "Website page, Google profile, ads, phone line, booking tool, tracking or domain and hosting."],
        ["What changed", "One plain sentence, with the page or setting named. For example, changed the new patient phone number on the contact page."],
        ["Who did it", "A name, not a company. Whoever made the change is the person to ask about it."],
        ["Why", "A short reason, such as a new provider joined or the hours changed for summer."],
        ["Checked", "Who confirmed afterward that it worked, and on which phone or browser."],
      ),
      h3("What counts as a change"),
      ul(
        "Any edit to a page's text, title, photos, forms, buttons or menu.",
        "A new theme, a plugin or app update, a new booking or chat widget, or a cookie banner change.",
        "Any edit to the Google profile: hours, categories, services, phone, website link, photos or a new location.",
        "Ads started, paused, budget changed, or a landing page changed.",
        "A new phone number, call forwarding, a phone system or tracking number change.",
        "Anything about the domain, hosting, email provider or tracking tag.",
        "A provider joining or leaving, a new accepted insurance, a closed day, or any fact the website states."
      ),
      h2("How to keep it going"),
      p(
        "A log only works if people use it, so make it small and put it where they already work. Share the page with your web person, your marketing contact, the front desk lead and whoever manages the Google profile. Ask each to add a line the moment they finish a change, and make it part of their routine. Your [weekly 15-minute marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) is a natural moment to glance at last week's rows."
      ),
      p(
        "Ask outside vendors to send you a one-line note for every change they make, and paste it in. The reason is practical. Google's advice on hiring an SEO says you are responsible for the actions of the companies you hire, so you should be able to see what they did."
      ),
      h2("How to use it when something drops"),
      ol(
        "Find the date the numbers changed in Search Console, Analytics or your call log. Google's own guide suggests comparing a period before and after the date.",
        "Open the log and read every row from a few days before that date through the day of the drop.",
        "Pick the changes that touch the thing that fell. If calls dropped, start with phone, profile and page changes. If visits from Google dropped, start with titles, page removals, redirects and anything about the site's hosting.",
        "Ask the person named on that row to check it, and write down what they find in the log as a new row."
      ),
      p(
        "Sometimes the log shows nothing near the date, which is also useful: it points toward something outside your control, such as a ranking update, a competitor, or the season. Do not assume a cause from a log alone. It narrows the search; it does not replace testing. If the date lines up with a site move or redesign, the planning questions in [what to ask a web designer before a redesign](/guides/questions-to-ask-a-web-designer-before-redesigning-a-medical-practice-website-so-rankings-are-not-lost) are the ones to revisit."
      ),
      h2("Keep patient details out of it"),
      p(
        "A change log records what changed on the website and accounts. It never needs patient names, appointment details or the contents of messages. If a change was triggered by a patient complaint, write the topic, such as hours listed wrongly, and leave out who complained."
      ),
    ],
    faqs: [
      {
        q: "Does a small practice really need this?",
        a: "A small practice benefits the most, because there are fewer people and the memory of who did what fades quickly. It takes about a minute per change and can save hours when something goes wrong.",
      },
      {
        q: "Where should we keep it?",
        a: "In a shared spreadsheet or document in an account the practice owns, not in one person's email or notebook. The owner and the office manager should both be able to open it.",
      },
      {
        q: "How far back should it go?",
        a: "Start today. If you know of big past changes, such as a redesign date or a phone number change, add them as a few rows at the top, marked as recalled.",
      },
      {
        q: "What if a vendor will not share their changes?",
        a: "Ask them to, in writing, and note the answer. Google's advice on hiring an SEO says an SEO with access to your server should be willing to explain all the changes it makes. If a vendor refuses, that is information about the vendor.",
      },
      {
        q: "Can the log prove why a drop happened?",
        a: "No. It shows what changed near the date. Confirming the cause still takes checking the page, the profile or the setting, and sometimes more than one change played a part.",
      },
    ],
    citations: [GOOGLE_DEBUG, GOOGLE_HIRE_SEO, GSC_PERFORMANCE],
    links: [
      { href: "/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website", label: "First Hour When Calls Drop", description: "What to check in what order." },
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly 15-Minute Check", description: "A routine that catches problems early." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "Keeping the Google profile current." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1641
  {
    slug: "monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager",
    keyword: "monthly 30 minute marketing meeting agenda for a practice owner and office manager",
    category: "Checklist",
    title: "A Monthly 30-Minute Marketing Meeting for a Practice",
    metaTitle: "A Monthly 30-Minute Marketing Meeting for a Practice",
    metaDescription:
      "A timed agenda for a monthly marketing meeting between a practice owner and office manager: numbers, changes, problems and one decision. (561) 291-2681",
    answer:
      "Hold one 30-minute marketing meeting a month with a fixed order: five minutes on the numbers, five on what changed, ten on what patients and the front desk are saying, five on problems, and five to pick one action with a name and a date. Send a two-line summary afterward.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T14:50:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("A short meeting that actually happens"),
      p(
        "Marketing reviews that run an hour and cover everything tend to be the first thing cancelled on a busy clinic day. A fixed 30-minute meeting once a month, with the same agenda every time, is more likely to survive. It is for the owner and the person who runs the office day to day, because those two people can actually decide and act."
      ),
      p(
        "This is different from the [weekly 15-minute check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager), which watches for things that broke. The monthly meeting looks at direction: what is working, what is not, and the one thing to do next."
      ),
      h2("Before the meeting: ten minutes of prep"),
      p(
        "The office manager brings a one-page summary, so no meeting time is spent hunting for numbers. Use the same page every month so changes are easy to see."
      ),
      ul(
        "Calls, form requests and new patient inquiries for the month, from your own count. The [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) is one way to keep it.",
        "Visits from Google and the top pages, from Search Console or Analytics.",
        "New Google reviews and whether each was answered.",
        "Rows from your change log for the month.",
        "Two or three notes from the front desk about what new patients said, such as how they found you."
      ),
      h2("The agenda, minute by minute"),
      table(
        ["Time", "Topic and the question to answer"],
        ["0 to 5 min", "The numbers. Are calls and forms up, flat or down compared to last month and to the same month last year? Say the direction first and the reason second."],
        ["5 to 10 min", "What changed. Read the change log for the month. Did anything we changed line up with a move in the numbers? Mark it as maybe, not as proven."],
        ["10 to 20 min", "What people are saying. What did new patients mention? What do the reviews say about getting an appointment, the phone, the wait and the website? What did the front desk hear?"],
        ["20 to 25 min", "Problems. Anything broken, slow or confusing: phone link, form, hours, a page that is wrong, an unanswered review."],
        ["25 to 30 min", "One decision. Choose one action for the coming month, write who does it and by when."],
      ),
      h3("Keep the discussion on what you can change"),
      p(
        "It is easy to spend the whole meeting on a ranking that moved. Rankings are a signal, not a goal. Keep coming back to calls and forms, and to the things the practice controls: the accuracy of the profile and site, the speed of replies, the clarity of the pages. If the numbers dropped, use the [first-hour checklist](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) rather than guessing in the meeting."
      ),
      h2("Choose one action, not five"),
      p(
        "A list of ten actions with no owners turns into nothing. End each meeting with one action that has a name next to it and a date. Examples that fit a small practice: fix the phone link on the provider pages, answer the three unanswered reviews, add the new accepted insurance to the profile, update the summer hours on the site and profile, write down the three questions new patients asked on the phone and draft a page that answers them."
      ),
      p(
        "Open the next meeting by asking whether last month's action happened. If it did not, ask why before adding anything new."
      ),
      h2("After the meeting: a two-line summary"),
      p(
        "Send a short note to yourselves and to any outside vendor involved. Line one: the direction of calls and forms and the most likely reason. Line two: the one action, who owns it and the date. Save the note in the same folder every month and you will have a year-end story for free, which the [year-end results summary](/guides/year-end-marketing-results-summary-for-the-owner-of-a-counseling-practice) can draw from."
      ),
    ],
    faqs: [
      {
        q: "Should an outside marketing company join?",
        a: "Sometimes. It can help to have them join once a quarter and send a short written update in the other months. Keep the monthly meeting as the owner and office manager so decisions are made by the people who run the practice.",
      },
      {
        q: "What if the numbers are too small to mean anything?",
        a: "Small practices often see a handful of calls and forms a month, and that is fine. Watch the direction over three months rather than reacting to one. Write the numbers down anyway, because a record is what makes later comparison possible.",
      },
      {
        q: "Do we review patient messages in this meeting?",
        a: "No. The meeting looks at counts and themes, never at names, messages or any details about individual patients. If a patient issue needs follow-up, handle it through the practice's usual process.",
      },
      {
        q: "How long before the meeting is worth it?",
        a: "Give it three months. The first meeting sets the baseline, the second shows a direction, and the third usually shows whether the monthly action is paying off.",
      },
      {
        q: "What if the meeting always runs long?",
        a: "Cut topics, not the time. If every meeting runs over, prep was missing. Send the summary page the day before and start with the numbers, so the first five minutes are about decisions.",
      },
    ],
    citations: [GSC_PERFORMANCE, GA_KEY_EVENTS, GOOGLE_STARTER],
    links: [
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly 15-Minute Check", description: "The weekly routine." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Keep your own count." },
      { href: "/guides/how-to-read-google-business-profile-performance-reports-each-month", label: "Reading Profile Reports", description: "What the monthly numbers mean." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1642
  {
    slug: "what-to-pause-in-marketing-when-a-counseling-practice-has-a-full-caseload-and-a-waitlist",
    keyword: "what to pause in marketing when a counseling practice has a full caseload and a waitlist",
    category: "How-to",
    title: "What to Pause When a Counseling Practice Is Full",
    metaTitle: "What to Pause When a Counseling Practice Is Full",
    metaDescription:
      "Full caseload and a waitlist? What a counseling practice can pause, keep and change in marketing so the profile stays honest. (561) 291-2681",
    answer:
      "When a counseling practice is full, pause paid ads and any page or offer that promises openings, keep the Google profile and site accurate, and add a clear waitlist path so people are not left waiting for a reply. Keep the foundation running so inquiries are ready when openings return.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("A full practice still needs a front door"),
      p(
        "A full caseload is good news and also a marketing problem. Ads keep paying for clicks that cannot be seen, the site still says new clients welcome, and people who call or fill out a form wait days for an answer that is no. Each of those costs money or goodwill. But shutting everything off is also a mistake, because it is slow and expensive to restart."
      ),
      p(
        "This page is about what to pause, what to keep and what to change while the practice is full. If you only need the page itself, our guide to a [waitlist page for a therapy practice with a full caseload](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) shows how to write it."
      ),
      h2("What to pause"),
      table(
        ["Pause or turn down", "Why"],
        ["Paid search ads that send people to a new-client form", "You are paying for clicks you cannot serve. If the budget is steady, redirect it toward a waitlist form or pause it until an opening is near."],
        ["Social posts or emails promising openings", "They promise something you cannot deliver."],
        ["Directory upgrades and paid listings you renew automatically", "Check whether they bring inquiries you can actually serve before renewing."],
        ["New page launches for services you cannot schedule", "A new page for a service with no openings sends people to a dead end."],
      ),
      p(
        "Pause by time and write down the date in your [change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change), so when you restart you know what stopped and when. Look at your budget plan too. [Splitting a small monthly marketing budget](/guides/splitting-a-small-monthly-marketing-budget-for-a-counseling-practice) can help you choose what to keep."
      ),
      h2("What to keep"),
      ul(
        "The Google Business Profile with accurate hours, address, phone and services. It also answers people who search your name, including existing clients.",
        "Review replies. A person reading a review from a previous client is a prospective client for whenever you open again.",
        "The site pages that explain who you work with and how, and the contact information. These are what referral sources and clients check.",
        "Tracking. Measure how many people ask for appointments during the full period. That number tells you how much demand you are turning away.",
        "Basic upkeep of titles, speed, mobile layout and links, so the site does not decay while you are not looking."
      ),
      h2("What to change"),
      p(
        "Tell people the truth about availability, in the same words everywhere. If the website says you are accepting new clients while the profile says you are full, you create the same confusion as a wrong phone number."
      ),
      ol(
        "Update the website's contact page and any new-client page to say the current status in one plain sentence, and link to the waitlist or to other options.",
        "Add a waitlist form that asks only what is needed to reply: name, preferred way to be reached and a short, non-clinical note. Do not ask about symptoms or details of what someone is going through in a web form.",
        "Set an automatic reply that says when to expect a message and gives a general crisis resource, for example the 988 Suicide and Crisis Lifeline, for anyone who needs help right away.",
        "Check the Google profile so hours, the website link and any appointment link match the new status. Remove an appointment link that implies instant booking if there are no slots.",
        "Prepare a short list of other practices or community resources you are comfortable recommending, so you can answer with something helpful instead of a plain no."
      ),
      h3("Watch for the signs to restart"),
      p(
        "Marketing takes time to warm up. Decide in advance the number of open slots, or the waitlist length, at which you will restart. Many practices begin again when the waitlist drops under a set number of people, not when the schedule is already empty. Our page on [not accepting new patients and the waitlist page](/guides/not-accepting-new-patients-and-waitlist-page-for-a-primary-care-practice) is the primary care version of the same idea."
      ),
      h2("Keep the waitlist honest and moving"),
      p(
        "A waitlist helps only if someone reads it. Pick one person to check it every week, reply to each new entry within a day or two, and remove or update people who have found care elsewhere. Do not promise a date you cannot meet. A short, kind reply that says what you know is better than silence, and it keeps the practice's reviews and reputation in good shape for the day the caseload opens up."
      ),
    ],
    faqs: [
      {
        q: "Should I turn off my Google profile when I am full?",
        a: "No. People still search for the practice name, and existing clients use it. Keep it accurate, and use the profile's description and website link to say how people can reach you or join the waitlist.",
      },
      {
        q: "Is it fine to keep running ads at a low level?",
        a: "Only if the landing page honestly describes the situation and offers the waitlist. Ads that promise new openings when there are none waste money and disappoint people at a hard moment.",
      },
      {
        q: "Will pausing hurt my search rankings?",
        a: "Pausing paid ads does not affect organic results. Keeping the site accurate and the profile maintained matters more, and Google notes that paying for ads has no effect on how a site shows in organic results.",
      },
      {
        q: "What should the waitlist form ask?",
        a: "A name, a phone or email, preferred contact times and perhaps the general type of service wanted. Avoid asking about symptoms, history or anything clinical in a web form, and say that the form is not for emergencies.",
      },
      {
        q: "How long should I wait before restarting marketing?",
        a: "Decide the trigger in advance, such as the waitlist falling below a set number, and restart a few weeks before you expect openings, because profile and page changes take time to be noticed.",
      },
    ],
    citations: [GOOGLE_HIRE_SEO, GBP_EDIT, LIFELINE_988],
    links: [
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page For Therapy", description: "How to write the page." },
      { href: "/guides/splitting-a-small-monthly-marketing-budget-for-a-counseling-practice", label: "Splitting A Small Budget", description: "What to fund first." },
      { href: "/guides/weekly-review-monitoring-routine-for-a-counseling-practice-google-profile", label: "Weekly Profile Monitoring", description: "Keep the profile current." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1643
  {
    slug: "handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends",
    keyword: "handing over website, Google and ads accounts when a marketing vendor relationship ends for a medical practice",
    category: "Checklist",
    title: "Ending With a Marketing Vendor: Account Handover Checklist",
    metaTitle: "Ending With a Marketing Vendor: Account Handover Checklist",
    metaDescription:
      "Leaving a marketing company? A practice handover checklist: website, domain, Google profile, Analytics, Search Console and ads. (561) 291-2681",
    answer:
      "When a marketing vendor relationship ends, confirm in writing that you own and can log in to the domain, website, Google Business Profile, Analytics, Search Console and any ads account, then remove the vendor's access last, after everything has been tested and exported. Do it before the final payment.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T15:10:00Z",
    dateModified: "2026-11-09",
    readMinutes: 7,
    sections: [
      h2("Leaving well protects the practice"),
      p(
        "Most marketing relationships end for ordinary reasons: the budget changed, the needs changed, or the fit was not there. The danger is not the goodbye. It is finding out afterward that the domain was registered to the vendor, the Google profile sits under the vendor's email, or the ad account cannot be moved. Then leaving becomes a negotiation with someone who has no reason to hurry."
      ),
      p(
        "This page is a checklist for the end of a relationship, whoever ends it. If you are at the start of one, our page on [who should own your Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains how to set it up so the end is easy, and our guide to [removing a former employee's access](/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice) covers the same job for a person on your own team."
      ),
      h2("Step one: take inventory before telling anyone"),
      p(
        "Make a list of every account and who is listed as its owner. You are looking for anything that is in the vendor's name rather than yours."
      ),
      table(
        ["Account", "What to confirm and where to look"],
        ["Domain name", "Registered to the practice, with the practice's email as the contact. Look in: the registrar account, or a public domain lookup."],
        ["Website and hosting", "You hold an admin login, and know where the site is hosted and who pays. Look in: the site's admin screen and the hosting bill."],
        ["Google Business Profile", "The practice is a primary owner, not only the vendor. Look in: people and access in the profile settings."],
        ["Google Analytics", "You hold an administrator role. Look in: admin, then account access management."],
        ["Search Console", "You are a verified owner, not just a user. Look in: settings, then users and permissions."],
        ["Ad accounts", "The ad account and the payment method are in the practice's name. Look in: the ads account billing and access screens."],
        ["Other tools", "Call tracking, review tools, email, scheduling, listings. Look in: ask the vendor for the full list, in writing."],
      ),
      p(
        "Google's own help pages spell out the roles. In a Business Profile, an owner can add and remove users and a manager cannot, and a profile can have several owners but only one primary owner. In Search Console, a property needs at least one verified owner, or no one has access. If you are only a user in any of these, you have a gap to close."
      ),
      h2("Step two: ask for the handover in writing"),
      p(
        "Send a short, calm email that names the end date and asks for specific things. A clear request works better than a general complaint."
      ),
      ol(
        "Transfer or confirm ownership of every item on the inventory, and add the practice's own Google account as an owner or administrator where it is not.",
        "Send the logins and recovery details for anything not tied to a Google account, through a password manager or a secure method rather than a plain email.",
        "Export what the practice paid for: page text, images, a copy of the site files and database if the vendor hosts it, and the list of page addresses.",
        "Send final reports with the raw numbers for calls, forms and visits, so there is a baseline for whoever comes next.",
        "Name the person on the vendor's side who will answer questions for 30 days after the end date."
      ),
      h3("Check ownership of what was written for you"),
      p(
        "Read the contract for what happens to the content, photos and designs made during the relationship. Some agreements give the practice full ownership on payment. Others license it. If the wording is unclear, ask your attorney, because the answer decides whether you can keep using your own pages."
      ),
      h2("Step three: test everything, then remove their access"),
      p(
        "Do not remove the vendor's access first. Log in as yourself to each item and confirm you can do the things that matter, like editing the profile, publishing a page, reading Analytics and pausing an ad. Make the website changes in a copy if possible. Then remove the vendor's access, one account at a time, and write each removal in your [change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change)."
      ),
      ul(
        "Remove the vendor from the Google Business Profile, Analytics, Search Console and the ad account.",
        "Change the website admin passwords and delete the vendor's user account.",
        "Change the passwords on shared tools and turn on two-step sign-in where it exists.",
        "Check that any forms and phone numbers they set up still go to the practice, and that nothing routes through a vendor-owned number or email.",
        "Ask for the vendor's tracking numbers to be released, or note the date the old ones will stop."
      ),
      h2("Step four: watch the first month"),
      p(
        "After the vendor is out, check calls, forms and visits weekly for a month. A tracking number that stopped forwarding, an ad that kept running on the old card or a plugin that quietly expired can each cause a quiet drop. If something falls, use the [first-hour checklist](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website). When you hire the next company, ask for everything in your name from day one."
      ),
    ],
    faqs: [
      {
        q: "What if the vendor owns the domain?",
        a: "Ask for a transfer in writing and keep the request polite and specific. Domain registrars have a standard transfer process, and the vendor usually needs to unlock the domain and give you the authorization code. If they refuse, speak with your attorney.",
      },
      {
        q: "Can I remove a vendor from my Google Business Profile myself?",
        a: "If you are an owner you can remove users. If the vendor is the only owner, you need to ask for ownership first. Google's help page explains owners, managers and the primary owner, and the steps to transfer primary ownership.",
      },
      {
        q: "Should I stop paying before the handover is complete?",
        a: "Check the contract first, since withholding payment can bring a dispute. Better is to ask that the handover be finished before the final invoice is paid, and to set that expectation in writing from the start.",
      },
      {
        q: "What should the handover include for Search Console?",
        a: "Make sure the practice is a verified owner, which Google notes is the role that has full control, or add the practice as an owner before removing anyone. Without an owner, no one has access to the property.",
      },
      {
        q: "Do I need to tell patients anything?",
        a: "Usually not. If a phone number, tracking number or web address changes, make sure the old one forwards or redirects, and update the site and profile on the same day.",
      },
    ],
    citations: [GBP_OWNERS, GSC_USERS, GA_USERS, GOOGLE_HIRE_SEO],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own The Accounts", description: "Set it up right from the start." },
      { href: "/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice", label: "Removing Former Employee Access", description: "The same job for staff." },
      { href: "/guides/in-house-marketer-vs-agency-for-a-medical-practice", label: "In-House Or Agency", description: "Which fits a small practice." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1644
  {
    slug: "choosing-the-first-two-services-to-feature-on-a-primary-care-practice-home-page",
    keyword: "choosing the first two services to feature on a primary care practice home page",
    category: "How-to",
    title: "Choosing the First Two Services for Your Home Page",
    metaTitle: "Choosing the First Two Services for Your Home Page",
    metaDescription:
      "How a primary care practice can pick the first two services for its home page, using patient calls, search data and capacity. (561) 291-2681",
    answer:
      "Feature the two services that patients ask about most and your practice is glad to schedule. Pick them from your own phone log, front desk notes and Search Console, not from guesswork, and write them in the words patients use. Link each to its own page and keep everything else one click away.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T15:20:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("A home page cannot say everything"),
      p(
        "A primary care practice does a lot: checkups, sick visits, chronic condition follow-up, vaccines, screenings, forms and more. The temptation is to list it all on the home page, and the result is a crowded wall of tiles where nothing stands out. Research on homepages from the Nielsen Norman Group says people judge a home page quickly, and that it should say plainly who you are and what you do, with a clear next step."
      ),
      p(
        "The fix is to choose two services to lead with, give each a clear place near the top, and let the menu and sub-pages carry the rest. This guide is about how to choose. It is not about the full home page; for that, see [what a new patient sees in the first five seconds](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page)."
      ),
      h2("Gather evidence before choosing"),
      p(
        "Use three sources and look for the services that show up in more than one."
      ),
      ol(
        "The front desk. Ask which request types come up most on the phone this month and which questions new patients ask. A tally on a sheet of paper for two weeks is enough. Count topics only, never patient names or details.",
        "Search Console. Open the Performance report, filter to the home page or look at the queries across the site, and note which service-related searches already bring impressions. Google's help page for the report explains how to read it.",
        "The practice itself. Which services are you glad to schedule right now? A service with a six-week wait should not lead the home page, and a service that fills the schedule well and suits the providers is a good candidate."
      ),
      table(
        ["Source", "What it tells you and what to watch for"],
        ["Phone and desk tally", "What patients actually want today. Watch out: only reflects people who already know you."],
        ["Search Console", "What strangers search for before they find you. Watch out: small numbers. Look for direction, not exact counts."],
        ["Practice capacity", "What you can serve well. Watch out: do not feature a service you cannot schedule soon."],
      ),
      h2("Test the shortlist"),
      p(
        "From the evidence, write a shortlist of three or four services. Then ask four questions of each. Would a patient search for this? Do we want more of it? Can we schedule it within a reasonable time? Does it have its own page that is complete and accurate? A candidate that fails the last question is not ready to feature. Build the page first, using the guidance in [how to write a service page that ranks](/guides/how-to-write-a-medical-service-page-that-ranks)."
      ),
      h3("Use the patient's words"),
      p(
        "Name each service the way patients say it. Annual physical or checkup is clearer than comprehensive preventive evaluation. Our page on [patient words versus clinical terms in service page names](/guides/patient-words-versus-clinical-terms-in-service-page-names-for-a-primary-care-practice) explains how to do this without being vague. Keep claims plain: describe what the visit is, who it is for and how to book it, and avoid promises about outcomes."
      ),
      h2("How to feature the two services"),
      ul(
        "Place them above the fold on a phone, each with a short heading, one or two sentences and a link or button to its page.",
        "Put the phone number and the booking action next to them, so a patient who is ready can act without scrolling.",
        "Keep every other service in the menu and on a full services page, and mention the rest in a single sentence on the home page.",
        "Make sure each featured service's page links back to the home page and to a related service, so visitors can keep moving.",
        "Use real photos of your own office and team where you can, in line with the practice's photo consent practices."
      ),
      p(
        "Do not duplicate pages to feature the same service twice. Two pages competing for one search can split the strength of both, which [two pages for the same service](/guides/two-pages-for-the-same-service-keyword-cannibalization-on-a-medical-practice-website) explains."
      ),
      h2("Review the choice every quarter"),
      p(
        "Services change with the seasons and with your own schedule. Check the desk tally and Search Console every three months and swap a featured service when the evidence says so, writing the change in your change log. If calls for the featured services rise after a swap, that is a hint, not proof. Look at the numbers for a few weeks before deciding."
      ),
    ],
    faqs: [
      {
        q: "Why only two services?",
        a: "Two is enough to show focus without hiding the rest. More than that on the first screen of a phone tends to blur the message. You can mention other services in a short sentence and in the menu.",
      },
      {
        q: "What if our most profitable service is not what patients ask about?",
        a: "Feature what patients ask about first, because that is what gets them to the site and the phone. You can still give a profitable service its own page and a link from the home page, and build it up over time.",
      },
      {
        q: "Should we feature a seasonal service like flu shots?",
        a: "It can work as a short-term banner, but keep your two main services in place. A seasonal link can sit beside them for a few weeks and then come down.",
      },
      {
        q: "Does it matter which service is first?",
        a: "Lead with the one that is most requested and easiest to schedule. On a phone, the first one gets the most attention, so choose with care.",
      },
      {
        q: "How do we know if the change helped?",
        a: "Compare calls and form requests for the featured services over several weeks before and after, using your own count. Small numbers move around, so wait for a pattern.",
      },
    ],
    citations: [NN_HOMEPAGE, GSC_PERFORMANCE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page", label: "First Five Seconds On A Phone", description: "Testing the home page." },
      { href: "/guides/how-to-write-a-medical-service-page-that-ranks", label: "Writing A Service Page", description: "Build the page first." },
      { href: "/guides/patient-words-versus-clinical-terms-in-service-page-names-for-a-primary-care-practice", label: "Patient Words In Page Names", description: "Name services the way patients say them." },
      LOC,
    ],
  },
  // ---------------------------------------------------------------- 1645
  {
    slug: "setting-simple-monthly-goals-for-calls-and-forms-for-a-small-medical-practice-website",
    keyword: "setting simple monthly goals for calls and forms for a small medical practice website",
    category: "How-to",
    title: "Setting Simple Monthly Goals for Calls and Forms",
    metaTitle: "Setting Simple Monthly Goals for Calls and Forms",
    metaDescription:
      "How a small practice can set a realistic monthly goal for calls and form requests from a three-month baseline, and adjust it. (561) 291-2681",
    answer:
      "Set a monthly goal for calls and forms by averaging the last three months of your own count, then aim for a modest step above it, such as one or two more a month. Keep one goal per number, review it monthly, and change the goal only when the baseline changes.",
    author: "Gio LaRoche",
    publishDate: "2026-11-09T15:30:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("A goal needs a starting line"),
      p(
        "Many practices either have no goal, so every month feels the same, or an invented one, such as 30 new patient calls a month, with nothing behind it. A made-up target does harm. If it is too high the team stops believing in it, and if it is too low it proves nothing. A useful goal starts from your own numbers."
      ),
      p(
        "This guide assumes you already count calls and form requests. If not, start with the [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) and come back after you have three months of data. Goals sit on top of the count; they do not replace it."
      ),
      h2("Step one: pick the numbers that matter"),
      p(
        "Choose a small set. For most practices that is two: calls from new patients and form requests. Visits and rankings are useful signals, but they are not what keeps the schedule full, so keep them as supporting numbers rather than the goal."
      ),
      ul(
        "New patient calls: phone calls from people who are not yet patients, counted by the front desk or by a call log, not only by taps on the website. A tap is click intent, not a conversation.",
        "Form requests: contact, new patient and appointment forms that arrive from real people, with your own tests and obvious spam removed.",
        "Optional supporting numbers: visits from Google, and key events in Analytics, which are the actions you have marked as important to the practice."
      ),
      h2("Step two: write the baseline"),
      p(
        "Add up each number for the last three full months and divide by three. Write the result as a range rather than a single number, because small counts move around. If calls were 11, 14 and 9, the baseline is about 11 a month, with a normal range of 9 to 14."
      ),
      table(
        ["Month", "New patient calls and form requests"],
        ["Three months ago", "11 calls, 4 forms"],
        ["Two months ago", "14 calls, 3 forms"],
        ["Last month", "9 calls, 6 forms"],
        ["Baseline (average)", "11 calls, 4 forms"],
      ),
      p(
        "These numbers are an example of how to lay out the sheet, not a target for any practice. Use your own."
      ),
      h2("Step three: set a modest step"),
      p(
        "Aim a little above the baseline, such as one or two more a month, and name the one or two things you will do to get there. A goal without a plan is a wish. Examples of plans that fit a small practice: fix a phone link that does not dial, add the contact number to every service page, answer reviews within two days, or build the page that answers the question callers keep asking."
      ),
      p(
        "Resist the urge to set a big jump. Search work often moves numbers slowly, and a goal of doubling in a month leads to the wrong kind of pressure. If a plan is working, the baseline will rise on its own and the next goal will rise with it."
      ),
      h3("Goals must not push the team toward the wrong behavior"),
      p(
        "A target for calls or forms is a measure of interest in the practice. It is not a quota to hit by any means. Never count test submissions, never ask patients to submit forms to raise a number, and never offer anything to inflate a count. Leave out clinical outcomes and patient details from the sheet altogether."
      ),
      h2("Step four: review it monthly and adjust"),
      p(
        "Look at the goal in your [monthly marketing meeting](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager). Write the actual count beside the goal. If you missed it, check the likely causes in order: a broken phone link or form, a profile problem, a seasonal dip, or fewer visits. The [first-hour checklist](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) lists them. If you hit it, keep the goal for another month before raising it, so the baseline has time to settle."
      ),
      p(
        "Reset the baseline each quarter using the latest three months, and write down any big change, such as a new provider or a closed month, so a future reader can understand the numbers."
      ),
    ],
    faqs: [
      {
        q: "What if my numbers are very small?",
        a: "Small counts are normal for a small practice. Use a three-month average, and treat one or two a month as meaningful. Avoid percentages with such small counts, because a single call can look like a big swing.",
      },
      {
        q: "Should the goal be about new patients booked?",
        a: "Booked appointments are the real outcome, but they are harder to attribute to the website. Start with calls and forms, then add a simple question at booking, such as how did you hear about us, to connect the two.",
      },
      {
        q: "Should phone taps on the website count as calls?",
        a: "Count them as a signal, not as calls. A tap shows interest, and it is not proof that a conversation happened. Your front desk or phone system count is the more reliable measure.",
      },
      {
        q: "How do I handle a month with a holiday or a closure?",
        a: "Note it next to the month. Compare with the same month a year ago when you have it, and do not read too much into one short month.",
      },
      {
        q: "Can I set a goal for Google rankings?",
        a: "You can watch them, but a ranking goal is a weak one. Rankings can move without any change in calls, and no one can promise a position. Keep the goal on calls and forms, the numbers that fill the schedule.",
      },
    ],
    citations: [GA_KEY_EVENTS, GSC_PERFORMANCE, GOOGLE_HIRE_SEO],
    links: [
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Keep the baseline." },
      { href: "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing", label: "How Did You Hear About Us", description: "Connect bookings to marketing." },
      { href: "/guides/how-to-measure-roi-on-medical-practice-marketing", label: "Measuring Marketing ROI", description: "Count what matters to a practice." },
      LOC,
    ],
  },
];
