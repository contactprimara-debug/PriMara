// -- Guides batch 40 - 2026-11-10 --
// Guide/AEO pages from the Command Center queue (rows 1693, 1696, 1698, 1699, 1700, 1702, 1704, 1706, 1707, 1708, planned
// 2026-11-09), built by the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice-owner
// audience only. Plain practical guidance, no legal advice, no outcome promises, no patient details. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GBP_PERFORMANCE = {
  publisher: "Google Business Profile Help",
  label: "Understand your Business Profile performance and insights",
  href: "https://support.google.com/business/answer/9918094",
};
const GBP_REVIEWS = {
  publisher: "Google Business Profile Help",
  label: "Manage customer reviews",
  href: "https://support.google.com/business/answer/3474050",
};
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_RANKING = {
  publisher: "Google Business Profile Help",
  label: "Tips to improve your local ranking on Google",
  href: "https://support.google.com/business/answer/7091",
};
const GA_LANDING = {
  publisher: "Google Analytics Help",
  label: "[GA4] Landing page report",
  href: "https://support.google.com/analytics/answer/12931766",
};
const GA_KEY_EVENTS = {
  publisher: "Google Analytics Help",
  label: "About key events",
  href: "https://support.google.com/analytics/answer/9267568",
};
const GOOGLE_ALERTS = {
  publisher: "Google Search Help",
  label: "Create an alert",
  href: "https://support.google.com/websearch/answer/4815696",
};
const MAPS_POLICY = {
  publisher: "Google Maps contribution policy",
  label: "Prohibited and restricted content for reviews",
  href: "https://support.google.com/contributionpolicy/answer/7400114",
};
const GOOGLE_REDIRECTS = {
  publisher: "Google Search Central",
  label: "Redirects and Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
};
const GOOGLE_STATUS = {
  publisher: "Google Search Central",
  label: "How HTTP status codes affect Google's crawlers",
  href: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors",
};
const GOOGLE_CWV = {
  publisher: "Google Search Central",
  label: "Understanding Core Web Vitals and Google search results",
  href: "https://developers.google.com/search/docs/appearance/core-web-vitals",
};
const GSC_PERFORMANCE = {
  publisher: "Google Search Console Help",
  label: "Performance report (Search results): overview and basic setup",
  href: "https://support.google.com/webmasters/answer/7576553",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty3: Guide[] = [
  // ---------------------------------------------------------------- 1699
  {
    slug: "reading-the-google-business-profile-search-terms-report-each-month-to-see-how-patients-find-a-primary-care-practice",
    keyword: "reading the Google Business Profile search terms report each month to see how patients find a primary care practice",
    category: "How-to",
    title: "Reading Your Google Profile Search Terms Each Month",
    metaTitle: "Reading Your Google Profile Search Terms Each Month",
    metaDescription:
      "How a primary care office can read the monthly Google Business Profile searches report, spot what patients type, and act on it. (561) 291-2681",
    answer:
      "The Searches section of your Google Business Profile performance report lists the search terms people used before your profile appeared. Open it once a month after the new data arrives, copy the top terms into a sheet, sort them into name searches and need searches, and turn the gaps into one website or profile fix.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T14:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("What the report is, and what it is not"),
      p(
        "Google's performance report for a Business Profile includes a Searches metric. Google describes it as the search terms people used to find your business. It is not a list of patients, and it is not a ranking report. It only tells you which words were typed when your profile came up."
      ),
      p(
        "That makes it one of the few places a primary care office can see patient wording without guessing. A front desk hears 'do you take walk-ins' or 'is there a doctor near me for a physical'. The report shows the written version of the same thinking, across the month, in one place."
      ),
      h2("Know the limits before you read it"),
      p(
        "Google states that the searches metric is updated at the start of each month and can take up to five days to show up, so check it on the sixth or later. It also notes that performance data covers searches and actions from both organic results and Google Ads, that only metrics that apply to your business appear, and that you cannot directly manage the queries themselves."
      ),
      p(
        "Treat the list as a sample. Terms searched by very few people may not appear, so a short list does not mean patients only used those words."
      ),
      h2("A 20-minute monthly routine"),
      ol(
        "Sign in to the Google account that manages the profile and open the performance view for the last full month.",
        "Copy the listed search terms and counts into a sheet with one row per term. Keep the sheet, because the trend across months is more useful than any single month.",
        "Add a column called Type. Mark each term as a name search (the practice or a provider by name) or a need search (a service, a symptom-free request such as 'urgent care near me', or a location).",
        "Add a column called Where answered. Write the page or profile section that answers that term today, or leave it blank.",
        "Pick one blank row, and decide whether the fix is a profile edit, a website page or nothing."
      ),
      h2("How to sort what you find"),
      table(
        ["What you see", "What it usually means"],
        ["Your practice name and provider names", "People already know you and are looking for the profile, hours or phone number. Check those three first."],
        ["A service you offer, such as physicals or sick visits", "Patients find you for it. Confirm the service is listed on the profile and has its own website page."],
        ["A service you do not offer", "Searchers may be reaching you by mistake. Make the profile and site clear about what you do, so the phone does not fill with wrong-fit calls."],
        ["A nearby town or neighborhood", "Your service area matters to people there. Check that the address, service area and a location page agree."],
        ["Odd or unrelated terms", "Ignore them. One-off terms are noise, not a plan."]
      ),
      h2("Turn one row into one change"),
      p(
        "The point of reading the list is to change one thing a month, not to build a report. If 'same day appointment' shows up and your site only says 'call for availability', that is a page to write. If a service shows up that you offer but the profile does not list, add it through the profile editor. Google's help page on [editing your profile](https://support.google.com/business/answer/3039617) covers how services, hours and categories are changed."
      ),
      p(
        "Keep the wording plain and factual. Describe what you offer and how to reach you, and avoid promising results or comparing yourself with other offices. Our guide on [reading the top Search Console queries each month](/guides/reading-the-top-search-console-queries-each-month-to-find-the-questions-new-clients-ask-a-counseling-practice) uses the same idea for your website's own search data, and the two lists together show what patients type before and after they click."
      ),
      h3("What to avoid"),
      ul(
        "Reading a single month as a trend. Wait for three months before changing anything large.",
        "Chasing terms that mention a condition by writing treatment claims. Describe your services and visit types instead.",
        "Pasting patient emails or call notes into the sheet. The report needs search terms only."
      ),
      h2("Share it without making a meeting"),
      p(
        "Send the sheet to the practice owner with two lines: the one change you are making and the date it will be done. If someone wants more, the [monthly 30-minute agenda](/guides/monthly-30-minute-marketing-meeting-agenda-for-a-practice-owner-and-office-manager) gives a place to discuss it."
      ),
    ],
    faqs: [
      {
        q: "Where do I find the search terms for my Google Business Profile?",
        a: "Open the performance view for the profile while signed in to the managing Google account. Google lists the Searches metric there, and it updates at the start of each month, sometimes taking up to five days.",
      },
      {
        q: "Does the report show who searched?",
        a: "No. It shows search terms and counts, not names or contact details. That is why it is safe to review without handling anything private.",
      },
      {
        q: "Why is a term I expected missing?",
        a: "Google reports only the terms it shows for the month, and some low-volume searches may not appear. A missing term does not prove nobody searched it.",
      },
      {
        q: "How often should a primary care office read it?",
        a: "Once a month is enough, after the new month's data has arrived. Keep each month in the same sheet so you can compare.",
      },
      {
        q: "Can I change which searches show my profile?",
        a: "Not directly. Google says you cannot manage the queries themselves. You can improve the information on the profile and the website, which Google's ranking tips describe.",
      },
    ],
    citations: [GBP_PERFORMANCE, GBP_RANKING, GBP_EDIT],
    links: [
      { href: "/guides/weekly-review-monitoring-routine-for-a-counseling-practice-google-profile", label: "Weekly Profile Review Routine", description: "A short weekly look at the profile." },
      { href: "/guides/google-business-profile-call-history-and-missed-call-review-for-a-counseling-practice", label: "Profile Call History Review", description: "Find missed calls." },
      { href: "/guides/medical-practice-content-calendar-checklist", label: "Content Calendar Checklist", description: "Plan the page you add." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1693
  {
    slug: "replying-to-a-google-review-that-names-a-staff-member-without-confirming-anyone-is-a-patient",
    keyword: "replying to a Google review that names a staff member without confirming anyone is a patient",
    category: "How-to",
    title: "Replying to a Review That Names a Staff Member",
    metaTitle: "Replying to a Review That Names a Staff Member",
    metaDescription:
      "How a medical practice can answer a Google review that names a nurse or provider without confirming the reviewer is a patient. (561) 291-2681",
    answer:
      "Thank the reviewer in general terms, pass the kind words to the named person, and do not confirm that the reviewer was a patient or mention any visit. If the review has a complaint about a named staff member, invite the reviewer to call the office instead of discussing it in public.",
    author: "Liam Costello",
    publishDate: "2026-11-10T14:10:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why a named staff member changes the reply"),
      p(
        "Reviews often say things like 'Nurse Ana was wonderful' or 'Dr. Lee rushed me'. The kind note is easy to answer and the complaint is not. In both cases the office has the same problem: a public reply that says 'thank you for visiting us' or 'we are sorry about your appointment' tells the world the reviewer was a patient."
      ),
      p(
        "Our guide on [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) covers the base rule. This page adds what to do when a staff member is named, because the staff member, the office and the reviewer each need something different."
      ),
      h2("What Google does with your reply"),
      p(
        "Google's help page on managing reviews says your reply is checked against its content policies, is posted publicly under the review, and appears as if the business replied, without your personal name. It also says the reviewer is notified and can still edit the review afterwards. So write every reply as if the reviewer, a stranger and the named staff member will all read it."
      ),
      h2("Three starting points"),
      table(
        ["The review says", "Where your reply should go"],
        ["Praise for a named staff member", "Thank them for the kind words in general terms and say you will share them with the team."],
        ["A complaint about a named staff member", "Acknowledge in one sentence, give the office phone number or email, and do not discuss any detail of a visit."],
        ["A review that names a staff member and details that might identify someone else", "Reply briefly and generally. Consider whether the review breaks Google's content policy and should be reported."],
      ),
      h2("Sample wording for praise"),
      p(
        "'Thank you for taking the time to write this. We have shared your kind words with the whole team. If you ever need anything from our office, please call us at the number on this profile.'"
      ),
      p(
        "Notice what is missing: no 'we are glad you visited', no date, no service and no first name. The reply works for any reviewer, whether or not they were ever a patient."
      ),
      h2("Sample wording for a complaint"),
      p(
        "'Thank you for telling us. We take feedback about our team seriously and would like to hear more. Please call the office at the number on this profile and ask for the practice manager.'"
      ),
      p(
        "That is enough. Do not defend the named person, correct the facts or say what the record shows. Our guide on [responding to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review) explains why a calm, short reply works better in public than a detailed one."
      ),
      h2("Tell the staff member first, in private"),
      p(
        "Before replying, tell the named person that a review mentions them. Share praise as it is. For a complaint, give the practice manager the job of listening to the staff member and deciding if anything needs to change. Keep this off public channels and out of group chats."
      ),
      p(
        "Do not ask the person named to reply to the review themselves. Google's contribution policy treats content from people with a current or former employment connection as a conflict of interest, and the reply should come from the practice account anyway."
      ),
      h2("When the named person has left"),
      p(
        "A review may name a provider who no longer works at the office. The reply can stay general and point to the front desk. Our guide on [reviews that mention a provider who has left](/guides/google-reviews-that-mention-a-provider-who-has-left-a-medical-practice) has wording for that case."
      ),
      h2("A short checklist before you press Reply"),
      ul(
        "No confirmation that the reviewer was a patient, no date, no service, no provider decision.",
        "No details from the chart or the schedule, even if the reviewer shared them.",
        "A phone number or email for the office, not a personal address.",
        "The named staff member has been told in private.",
        "Someone other than the writer has read the reply once."
      ),
    ],
    faqs: [
      {
        q: "Can I thank a reviewer for visiting us?",
        a: "It is safer not to. Saying they visited confirms they were a patient. Thank them for the feedback and keep the reply the same for every reviewer.",
      },
      {
        q: "Should the named staff member reply to the review?",
        a: "No. The reply should come from the practice account. Google's policy also treats posts from people with a current or former work connection as a conflict of interest.",
      },
      {
        q: "What if the reviewer's story looks like it describes a real visit?",
        a: "Do not confirm or correct it in public. Invite them to call the office and handle the detail privately.",
      },
      {
        q: "Can I ask Google to remove a review that names an employee?",
        a: "Only if it breaks Google's content policies. A review that is simply unfair or negative does not qualify, and Google decides each report.",
      },
      {
        q: "How long should the reply be?",
        a: "Two to four sentences. Short replies are easier to keep free of detail and are less likely to be rejected for policy reasons.",
      },
    ],
    citations: [GBP_REVIEWS, MAPS_POLICY],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Respond To A Negative Review", description: "A calm public reply." },
      { href: "/guides/how-to-handle-a-fake-google-review-on-a-medical-listing", label: "Handling A Fake Review", description: "When to report one." },
      { href: "/guides/google-reviews-that-mention-a-provider-who-has-left-a-medical-practice", label: "Reviews Naming A Former Provider", description: "Wording when someone has left." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1707
  {
    slug: "setting-up-a-free-google-alert-for-the-practice-name-and-provider-names-to-catch-wrong-listings-and-impersonation",
    keyword: "setting up a free Google alert for the practice name and provider names to catch wrong listings and impersonation",
    category: "How-to",
    title: "Set Up a Free Google Alert for Your Practice Name",
    metaTitle: "Set Up a Free Google Alert for Your Practice Name",
    metaDescription:
      "Use a free Google Alert on your practice and provider names to catch wrong listings, copied pages and impersonation early. Call (561) 291-2681",
    answer:
      "Create a free Google Alert for your practice name in quotation marks, then one for each provider, and send them to a shared role mailbox. Google emails you when new search results match. Review each match in under a minute and act only on wrong listings, copied pages or impersonation.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T14:20:00Z",
    dateModified: "2026-11-10",
    readMinutes: 4,
    sections: [
      h2("What a Google Alert does for a small practice"),
      p(
        "Google's help page says you can get emails when new results for a topic show up in Google Search, for example mentions of your name. For a practice, that means you hear when a new page names the office or a provider, instead of finding it by accident months later."
      ),
      p(
        "It will not catch everything, and it is not a security system. It is a cheap, ten-minute habit that surfaces wrong listings, a copied website, a directory that has the old address and the occasional fake page using your name."
      ),
      h2("Set up the alerts"),
      ol(
        "Open Google Alerts while signed in to the account the practice uses for marketing, not a personal account.",
        "Type the practice name in quotation marks, for example the full legal or doing-business-as name, and click Show options.",
        "Set how often (as it happens, once a day or once a week), the types of sites, the language and region, and which account receives it. Google lists these as the settings you can change.",
        "Create the alert. Repeat for each provider's name, each common spelling or abbreviation, and the practice phone number.",
        "Send the emails to a shared role mailbox, so one person leaving does not end the alerts."
      ),
      p(
        "Our guide on [who should own the practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why the account behind the alerts should belong to the practice."
      ),
      h2("What to alert on"),
      table(
        ["Alert text", "What it catches"],
        ["The practice name in quotes", "New directories, news pages, copied pages and review sites that list the office."],
        ["Each provider's full name in quotes", "Directory profiles with old employers, wrong specialties or an address that is not yours."],
        ["The practice phone number", "Listings that still use the old number, or a page showing your number next to someone else's business."],
        ["The street address", "Duplicate listings and old pages that never updated after a move."],
      ),
      h2("What to do with each email"),
      p(
        "Give each match one minute. Most results will be fine. When one is not, sort it by what it is."
      ),
      ul(
        "A wrong address, phone number or hours on a directory: sign in to that directory, or use its correction form, and send the right details. Keep a record of the date.",
        "A duplicate or incorrect Google listing: use the profile's own edit and report options. Google's help page on [editing your profile](https://support.google.com/business/answer/3039617) explains how changes work.",
        "A page that copies your text or pretends to be your office: save the web address, take a dated screenshot and tell the practice owner before you reply to anyone.",
        "A scam message that cites your name: warn patients with the wording in our guide on [scam texts and emails that impersonate a medical practice](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients)."
      ),
      h2("Keep it from becoming noise"),
      p(
        "If the alert fires on common words, tighten it. Quotation marks help, and a once-a-week digest is plenty for most offices. Delete alerts you no longer need; Google's page explains how to edit or delete one."
      ),
      p(
        "Add a recurring line to the [weekly 15-minute marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) so someone opens the alert emails on a set day and clears them."
      ),
    ],
    faqs: [
      {
        q: "Are Google Alerts really free?",
        a: "Yes. Google's help page describes creating an alert with a Google account and getting emails when new results match, with no fee mentioned.",
      },
      {
        q: "Should I create alerts for each provider?",
        a: "Yes, one per provider using the full name in quotation marks. Providers are often the ones whose old addresses and specialties stay on directories.",
      },
      {
        q: "Will an alert tell me about a fake page right away?",
        a: "Not always. It depends on when Google finds the page, so treat it as an early signal, not a guarantee.",
      },
      {
        q: "Who should receive the alert emails?",
        a: "A shared role mailbox that two or more people read, so the alerts survive a staff change.",
      },
      {
        q: "Does this replace checking the Google profile?",
        a: "No. It supplements it. The profile still needs its own regular check for hours, phone number and reviews.",
      },
    ],
    citations: [GOOGLE_ALERTS, GBP_EDIT],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own The Accounts", description: "Owner roles that survive staff changes." },
      { href: "/guides/search-console-email-alerts-and-who-should-receive-them-at-a-medical-practice", label: "Search Console Email Alerts", description: "Who should get them." },
      { href: "/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients", label: "Scam Messages Using Your Name", description: "What to tell patients." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1704
  {
    slug: "working-out-the-cost-of-one-new-inquiry-from-the-website-compared-with-a-directory-listing-for-a-counseling-practice",
    keyword: "working out the cost of one new inquiry from the website compared with a directory listing for a counseling practice",
    category: "Comparison",
    title: "Cost of One New Inquiry: Website vs. Directory",
    metaTitle: "Cost of One New Inquiry: Website vs. Directory",
    metaDescription:
      "A simple way for a counseling practice to work out what one new inquiry costs from its website and from a directory listing. Call (561) 291-2681",
    answer:
      "Add up what you paid for a channel in a period, then divide by the number of real new inquiries it sent in that same period. Do the same for the website and for each directory. Count inquiries, not visits, and treat any result built on fewer than ten inquiries as a rough guide only.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T14:30:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("The one number worth comparing"),
      p(
        "A counseling practice that pays for a directory profile, a website and sometimes ads usually knows the monthly bills. It rarely knows what one new inquiry costs from each. Without that figure it is easy to renew the loudest vendor and underfund the channel that actually produces calls."
      ),
      p(
        "The calculation is basic division. The hard part is agreeing on what to count, so do that first."
      ),
      h2("Decide what counts as an inquiry"),
      ul(
        "A new person who calls and asks about starting care, or leaves a voicemail that asks.",
        "A website contact form from someone not already a client.",
        "A message or booking request from a directory profile, if the directory shows it.",
        "Not counted: existing clients, vendors, sales calls, spam and job seekers."
      ),
      p(
        "Our guide on [a response-time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) shows a simple log where each inquiry is tagged with how it arrived. That log is the source for every number below. Before comparing costs, read how [Psychology Today and therapist directory profiles for a counseling practice](/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice) should be set up and kept accurate."
      ),
      h2("Work it out in four steps"),
      ol(
        "Pick a period, such as the last three months. A single month is too noisy for a small practice.",
        "Add the full cost of each channel in that period: subscription or listing fees, the share of web hosting and maintenance you assign to the site, and any paid ads.",
        "Count the inquiries each channel produced from your log, using the same period.",
        "Divide cost by inquiries. Write both numbers next to the result, so nobody sees a figure without its count."
      ),
      h2("An example with invented round numbers"),
      p(
        "These numbers are made up to show the arithmetic only, not typical results."
      ),
      table(
        ["Channel", "Cost and inquiries over 3 months"],
        ["Directory listing", "$300 in fees and 6 inquiries comes to $50 per inquiry."],
        ["Website", "$450 for hosting and upkeep and 9 inquiries comes to $50 per inquiry."],
        ["Website plus a $150 one-time page update", "$600 and 9 inquiries comes to about $67 per inquiry for this period."]
      ),
      p(
        "Both channels look equal here, which is the point of writing it down. What differs is whether the next dollar belongs in a new page or a directory upgrade, and that is a judgment the numbers support but do not make for you."
      ),
      h2("What the number can and cannot tell you"),
      p(
        "An inquiry is not a booked first session. Add one more column in the log for inquiries that became a first appointment, and the same sum gives you cost per new client for each channel. Keep any client information out of the sheet and record only the channel and the date."
      ),
      p(
        "A website also helps a directory inquiry convert, because people often check the site before they call. If you can, add the question 'how did you hear about us?' on the intake call, as described in our guide on [how did you hear about us](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing). The answers will not be perfect but will show which source people name."
      ),
      h2("Measure website inquiries with care"),
      p(
        "In Google Analytics, a key event marks an action that matters to the business, such as a form submission. Google's help page defines a key event as an event that measures an action particularly important to the success of the business. Count real form submissions and phone calls from the log, not the raw event total, which can include repeats and tests."
      ),
      h3("Common mistakes"),
      ul(
        "Comparing visits on one side and inquiries on the other.",
        "Leaving out the staff time or the web maintenance share, which makes the website look cheaper than it is.",
        "Judging a channel on one month with two inquiries.",
        "Dropping a directory because of the sum alone without checking if it feeds the website."
      ),
      p(
        "Once you know the figures, [splitting a small monthly marketing budget](/guides/splitting-a-small-monthly-marketing-budget-for-a-counseling-practice) shows how to move money between channels in small steps."
      ),
    ],
    faqs: [
      {
        q: "What is a good cost per inquiry for a counseling practice?",
        a: "There is no single right figure, and we do not publish one. Compare your own channels over the same period and watch the direction over several months.",
      },
      {
        q: "How many inquiries do I need before trusting the number?",
        a: "Ten or more over the period makes it steadier. Below that, treat it as a rough guide and keep logging.",
      },
      {
        q: "Should I count calls that did not become clients?",
        a: "Yes, if the caller was a new person asking about starting care. Cost per inquiry and cost per new client are two separate numbers.",
      },
      {
        q: "How do I track which inquiries came from the directory?",
        a: "Use the directory's own message or call report where it exists and ask new callers how they found you. Record the answer in your log without any clinical detail.",
      },
      {
        q: "Does this work for a primary care practice?",
        a: "Yes. The same division works if you define an inquiry as a new-patient request instead.",
      },
    ],
    citations: [GA_KEY_EVENTS, GBP_PERFORMANCE],
    links: [
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time And Inquiry Log", description: "Where the counts come from." },
      { href: "/guides/splitting-a-small-monthly-marketing-budget-for-a-counseling-practice", label: "Splitting A Small Budget", description: "What to do with the result." },
      { href: "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing", label: "How Did You Hear About Us", description: "Ask at intake." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1698
  {
    slug: "comparing-two-marketing-reports-from-different-vendors-that-count-calls-and-forms-differently-for-a-practice-owner",
    keyword: "comparing two marketing reports from different vendors that count calls and forms differently for a practice owner",
    category: "Checklist",
    title: "Why Two Marketing Reports Disagree on Calls and Forms",
    metaTitle: "Why Two Marketing Reports Disagree on Calls and Forms",
    metaDescription:
      "Two vendors, two different call and form counts? A practice owner's checklist for comparing reports and finding the real number. (561) 291-2681",
    answer:
      "Reports disagree because vendors count different things: tapped phone links, answered calls, form views or form submissions, over different date ranges. Ask each vendor what exactly they count, for which dates and sources, then match both to your own call log and form inbox. The log is the tiebreaker.",
    author: "Liam Costello",
    publishDate: "2026-11-10T14:40:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Two reports, two numbers"),
      p(
        "A practice owner gets a monthly report from the web company that says 22 calls and 14 forms. The directory dashboard says 9 calls. The Google profile shows another figure. Nobody is lying, and nobody is wrong in a way that is easy to spot, because each tool counts a different action."
      ),
      p(
        "Your job is not to decide which vendor is right. It is to find what each number measures, then check it against something you control. Once the numbers line up, [checking a marketing vendor's monthly invoice against the work delivered](/guides/checking-a-marketing-vendors-monthly-invoice-against-the-work-actually-delivered-for-a-counseling-practice-owner) shows whether each charge has something behind it."
      ),
      h2("What each tool may be counting"),
      table(
        ["Source", "What the number may mean"],
        ["Website analytics", "Taps on a phone link or form submissions the site recorded. A tap is not a connected call."],
        ["Call tracking vendor", "Calls that came through a tracking number, often with a minimum length. Calls to the main line may be missed."],
        ["Google Business Profile", "Calls made from the profile's call button. Google's performance page notes only metrics that apply to your business appear."],
        ["Directory dashboard", "Clicks, profile views or messages inside that directory, which may include existing clients."],
        ["Ad platform", "Conversions that the platform assigns to ads, which can overlap with the other sources."]
      ),
      h2("Ask each vendor five questions"),
      ol(
        "What exactly is counted as a call and as a form? A tap, a connected call, a call above a set length, or a completed submission?",
        "What date range and time zone does the report use? A report running from the first to the 30th can differ from a calendar month.",
        "Are repeat contacts, existing clients, spam and test submissions removed, and how?",
        "Which traffic sources are included: Google search, ads, directories, direct visits?",
        "How would you check this number against the office's own records?"
      ),
      p(
        "Ask in writing and keep the replies. Google's help page on key events notes that any collected event can be marked as a key event, which is one reason two analytics set-ups on the same site can show different totals."
      ),
      h2("Build the tiebreaker: your own log"),
      p(
        "The most reliable source is the one the front desk keeps. Use the [response-time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) and the [front desk call log fields](/guides/front-desk-new-patient-call-log-fields-for-a-primary-care-practice), so each new inquiry gets a line with the date, the channel and whether it was a call or form."
      ),
      p(
        "At the end of the month, count the log lines and compare them to each report. You are looking for a pattern, not an exact match. A vendor that reports 22 calls when the log has 10 is probably counting taps or repeats. A vendor whose number is lower than the log may be missing a number or a form."
      ),
      h2("Lining the numbers up"),
      ul(
        "Put every report in one sheet with the same month in the first column.",
        "Write each vendor's definition in a note above its column.",
        "Add your log's count as the last column.",
        "Mark the gap between each report and the log, and ask the vendor about any gap over about a third."
      ),
      h2("What to do when they still disagree"),
      p(
        "Trust the log for decisions and use the reports for direction. If one vendor will not explain what it counts, that is useful to know before you renew. If you manage a form inbox, our guide on [a form-to-inbox check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager) fits into a weekly routine so the log stays current."
      ),
      p(
        "Never send a vendor a list of patient names to reconcile. Counts and dates are enough."
      ),
    ],
    faqs: [
      {
        q: "Why does my analytics report show more calls than my phone system?",
        a: "Analytics may record a tap on a phone link, which is not always a connected call. The phone system counts calls that were answered or rang through.",
      },
      {
        q: "Which number should I use to judge a vendor?",
        a: "Use the office's own log of new inquiries. Reports show direction, and the log shows what reached the desk.",
      },
      {
        q: "Should I tell a vendor their number is wrong?",
        a: "Ask what the number counts first. Most differences come from definitions, not mistakes.",
      },
      {
        q: "How big a gap is a problem?",
        a: "A gap that is a large share of the log's total, or one that keeps growing month to month, is worth a direct question.",
      },
      {
        q: "Can I share the log with a vendor?",
        a: "Share counts by date and channel only. Never share names, phone numbers or any health information.",
      },
    ],
    citations: [GA_KEY_EVENTS, GBP_PERFORMANCE],
    links: [
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time And Inquiry Log", description: "The office's own record." },
      { href: "/guides/front-desk-new-patient-call-log-fields-for-a-primary-care-practice", label: "Front Desk Call Log Fields", description: "What to write down." },
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly 15-Minute Check", description: "A repeating routine." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1702
  {
    slug: "reading-the-google-analytics-landing-pages-report-to-see-which-pages-new-visitors-enter-on-at-a-counseling-practice",
    keyword: "reading the Google Analytics landing pages report to see which pages new visitors enter on at a counseling practice",
    category: "How-to",
    title: "Reading the Google Analytics Landing Pages Report",
    metaTitle: "Reading the Google Analytics Landing Pages Report",
    metaDescription:
      "See which pages new visitors enter your counseling practice site on, and what to fix first, using the GA4 landing page report. (561) 291-2681",
    answer:
      "In Google Analytics 4, open Reports, then Engagement, then Landing page. The report lists the first page of each visit with sessions and key events. Sort by sessions, check that your top pages show the phone number and a contact option, and fix the busiest page that produces no inquiries first.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T14:50:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why the entry page matters more than the home page"),
      p(
        "Most owners picture a new client arriving at the home page. In practice, many visitors land on a service page, a therapist bio, an article or a directory-linked page, because a search sent them there. The page they land on is the page that has to do the work of a front door."
      ),
      p(
        "Google's help page describes the landing page dimension as the page path and query string of the first pageview in a session. In plain terms, it is the first page a visit saw."
      ),
      h2("Find the report"),
      ol(
        "Sign in to Google Analytics 4 for the practice site.",
        "Open Reports, then Engagement, then Landing page.",
        "Set the date range to the last 28 or 90 days.",
        "If the report is missing from the left menu, Google notes it may not be in your default view and someone with edit access can add it back."
      ),
      p(
        "If you are not sure the property is set up properly, start with our guide on [setting up Google Analytics 4 for a medical practice](/guides/how-to-set-up-google-analytics-4-for-a-medical-practice) and our note on [excluding staff traffic](/guides/excluding-staff-and-internal-traffic-from-google-analytics-4-on-a-medical-practice-website), which keeps your own visits from inflating the top pages."
      ),
      h2("The columns that matter"),
      table(
        ["Column", "How to use it"],
        ["Landing page", "The first page of the visit. Look at the top ten."],
        ["Sessions", "How many visits began on that page. This is your traffic ranking."],
        ["Engaged sessions or engagement time", "A rough sign of whether people stayed and read."],
        ["Key events", "Actions you marked as important, such as a form submission or a phone tap. A page with many sessions and no key events is your first fix."],
        ["New users", "Whether the page brings first-time visitors."]
      ),
      p(
        "Google lists average engagement time per session, active users, key events, new users, sessions and total revenue as the default metrics, and editors can add or remove columns. Add a secondary dimension of session source and medium to see whether a page is reached from search, a directory or direct visits."
      ),
      h2("Three questions for each top page"),
      ul(
        "Does the page answer what the visitor probably searched for in its first screen?",
        "Is the phone number tappable, and is there a clear contact or request option without scrolling far?",
        "Does the page tell a visitor what happens next: how fast you reply, whether you accept insurance, and where you are?"
      ),
      p(
        "Check each page on a phone, because that is where most first visits happen. Our guide on [what a new patient sees on a phone in the first five seconds](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page) lists what to look for."
      ),
      h2("Turn it into one fix per month"),
      p(
        "Pick the busiest landing page with the fewest key events. Change one thing: move the contact option up, rewrite the opening sentence to match the question people ask, or add a short FAQ. Write down the date, then look again after four to six weeks."
      ),
      p(
        "Do not treat a one-month change as proof. A small practice may have only a few dozen landing sessions per page, so small differences can be chance. Keep the notes in the same sheet as your monthly [Search Console query review](/guides/reading-the-top-search-console-queries-each-month-to-find-the-questions-new-clients-ask-a-counseling-practice) so you can see which questions lead to which pages."
      ),
      h3("What not to change because of this report"),
      ul(
        "Do not rewrite a page with many key events just because its engagement time is short. A fast, successful visit can look like a short one.",
        "Do not add clinical claims to raise engagement. Describe services and next steps plainly.",
        "Do not read individual people into the numbers. The report is a count, not a list of visitors."
      ),
    ],
    faqs: [
      {
        q: "What is a landing page in Google Analytics?",
        a: "It is the first page a visitor viewed in a session. Google describes the dimension as the page path and query string of the first pageview.",
      },
      {
        q: "Where is the landing page report in GA4?",
        a: "Under Reports, then Engagement, then Landing page. If it is missing, an editor can add it to the left navigation.",
      },
      {
        q: "Why do some pages have sessions but no key events?",
        a: "Visitors may not have found a next step, or the key event may not be set up for that action. Check the page and the tracking.",
      },
      {
        q: "Can I see where each landing page's visitors came from?",
        a: "Yes. Add session source and medium as a secondary dimension to split a page's visits by source.",
      },
      {
        q: "How often should I look?",
        a: "Once a month is enough for a small practice. Compare the same date range each time.",
      },
    ],
    citations: [GA_LANDING, GA_KEY_EVENTS, GSC_PERFORMANCE],
    links: [
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Set Up Google Analytics 4", description: "Start with a clean property." },
      { href: "/guides/excluding-staff-and-internal-traffic-from-google-analytics-4-on-a-medical-practice-website", label: "Exclude Staff Traffic", description: "Keep your own visits out." },
      { href: "/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page", label: "The First Five Seconds On A Phone", description: "What a visitor sees." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1708
  {
    slug: "a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates",
    keyword: "a yearly calendar of website, Google profile and phone checks for a primary care practice with named owners and dates",
    category: "Checklist",
    title: "Yearly Website, Google Profile and Phone Check Calendar",
    metaTitle: "Yearly Website, Google Profile and Phone Check Calendar",
    metaDescription:
      "A 12-month calendar of website, Google profile and phone checks for a primary care practice, with an owner and a date for each. (561) 291-2681",
    answer:
      "Put each check on a calendar with one named owner and one date: weekly profile and phone tests, monthly report reads, quarterly form and link tests, and yearly domain and content reviews. A check without a person and a date does not happen, so write both next to every line.",
    author: "Liam Costello",
    publishDate: "2026-11-10T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Checks that have no owner do not happen"),
      p(
        "Most practices know they should check the website, the Google profile and the phones. Few of them do it on a schedule. The first time anyone finds out the phone link is broken is when a patient mentions it, or when a quiet month turns out to have had no forms at all."
      ),
      p(
        "A calendar fixes that, as long as every line has a person's name and a date. The list below is built for a small primary care office and is deliberately short."
      ),
      h2("The calendar"),
      table(
        ["How often", "Check, with a suggested owner"],
        ["Every week", "Front desk lead: call the main number from a mobile phone, tap the number on the website, and read the Google profile card for hours and phone."],
        ["Every week", "Office manager: clear the website form inbox, answer the new Google reviews and check for new alerts."],
        ["Every month", "Office manager: read the Google profile performance report and the website analytics summary, and add the counts to the sheet."],
        ["Every quarter", "Practice owner or manager: send a test through each website form and open each portal and booking link."],
        ["Every quarter", "Front desk lead: check the holiday and closure hours on the website, the Google profile and the phone greeting."],
        ["Every year", "Practice owner: confirm the domain renewal date, who holds the owner role on every account, and who is a backup."],
        ["Every year", "Office manager and providers: review each provider's bio, services, accepted insurance and photos for accuracy."]
      ),
      h2("Name the owner and the backup"),
      p(
        "Put two names on each line: the person who does it and the person who does it when the first is out. Write the date it is next due. When a check is done, move the date forward by one period."
      ),
      p(
        "If you are not sure who should hold owner access to each account, [our guide on who should own a practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why the practice, not an employee, should be the owner."
      ),
      h2("Add the dates you already know"),
      ul(
        "The domain renewal date, and a reminder 60 days before it.",
        "Holidays the office closes, entered into the calendar at the start of the year so the website and profile are updated early.",
        "Provider start dates, leave dates and departures, with a task to update the website and profile on the same day.",
        "Insurance contract changes, with a task to update every accepted-insurance list."
      ),
      h2("What each check should look like"),
      h3("Weekly profile and phone test"),
      p(
        "Search the practice name on a phone. Read the Google profile card: hours, phone, website link and any notice. Call the number and confirm the right person or system answers. Google's help page on [editing your profile](https://support.google.com/business/answer/3039617) covers how hours and details are changed if something is wrong."
      ),
      h3("Quarterly form and link test"),
      p(
        "Tell the front desk, then submit one clearly marked test message through each website form and confirm it arrives where you expect. Open each portal, booking and payment link from the website. Never use real patient details in a test. Our guide on [finding and fixing broken links](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) shows what to do when one fails."
      ),
      h3("Yearly content review"),
      p(
        "Read each main page aloud. Check the hours, providers, services and insurance against what the office does today. The counseling version of this review is in our [annual website content review checklist](/guides/annual-website-content-review-checklist-for-a-counseling-practice), and most of it applies to primary care too."
      ),
      h2("Keep it on one page"),
      p(
        "Store the calendar in a shared place the whole team can open, with a line at the top that says when it was last reviewed. When something changes, update the calendar the same day."
      ),
    ],
    faqs: [
      {
        q: "Who should own each check?",
        a: "Whoever already touches that task daily. The front desk lead owns phone and hours checks, the office manager owns inboxes and reports, and the practice owner owns domain and account roles.",
      },
      {
        q: "How long does the whole calendar take?",
        a: "Weekly checks take about 10 to 15 minutes. Quarterly tests take under an hour. The yearly review takes a few hours spread over a week.",
      },
      {
        q: "What if a check finds a problem?",
        a: "Write the problem, the date and the person fixing it on the calendar, and confirm the fix at the next check.",
      },
      {
        q: "Do I need special software?",
        a: "No. A shared calendar and a sheet are enough. The value is in the named owner and the date.",
      },
      {
        q: "Does this cover patient privacy?",
        a: "It keeps tests free of real patient details. For rules about patient information, talk to your compliance adviser.",
      },
    ],
    citations: [GBP_EDIT, GBP_PERFORMANCE],
    links: [
      { href: "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager", label: "Weekly 15-Minute Check", description: "The weekly routine." },
      { href: "/guides/annual-website-content-review-checklist-for-a-counseling-practice", label: "Annual Content Review", description: "The yearly read-through." },
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own The Accounts", description: "Owner roles that last." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1696
  {
    slug: "checking-that-links-to-the-patient-portal-and-online-forms-still-work-after-the-portal-vendor-updates-its-software",
    keyword: "checking that links to the patient portal and online forms still work after the portal vendor updates its software",
    category: "Checklist",
    title: "Check Portal and Form Links After a Vendor Update",
    metaTitle: "Check Portal and Form Links After a Vendor Update",
    metaDescription:
      "After your portal vendor updates its software, test every portal and form link on your website. A short checklist for the front desk. (561) 291-2681",
    answer:
      "When a portal or forms vendor announces an update, list every link on your website that points to it, then open each one on a phone and a computer after the update. Look for error pages, redirects to a generic login, and forms that no longer submit. Fix broken links the same day.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T15:10:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why vendor updates break your links"),
      p(
        "Your website sends patients to a portal, a booking page or an intake form run by another company. When that company updates its software, a web address can change, a login page can move, or an old form link can stop working. Your website does not know. The link still looks fine on your page, and the patient hits an error."
      ),
      p(
        "Google's documentation on HTTP status codes explains how a missing page returns a 404 and a moved one should return a redirect. A patient does not see the code, only a page that does not work, so test the way a patient would."
      ),
      h2("Before the update: build the link list"),
      ol(
        "Open your website and note every link to the portal, booking page, payment page and online forms, including the footer, the contact page and each provider page.",
        "Add the links in the practice's own email signature, appointment reminders and text templates.",
        "Add the links on the Google Business Profile, such as the appointment link.",
        "Write them in one sheet with a column for where they appear and a column for the date last tested."
      ),
      p(
        "Ask the vendor when the update is happening and whether any addresses will change. Write the answer on the sheet."
      ),
      h2("After the update: the 10-minute test"),
      table(
        ["Test", "What to look for"],
        ["Open each link on a phone", "A working page, not an error, a blank screen or a different company's page."],
        ["Open each link on a computer", "The same result, and no browser warning."],
        ["Log in to the portal with a test account", "The login works and the page does not show another practice's name."],
        ["Submit one clearly marked test form", "The form accepts it and you see it arrive where you expect. Tell the front desk first and use no real patient details."],
        ["Open the link from the Google profile and an email template", "The same page as the website link."]
      ),
      h2("What to do when a link has moved"),
      p(
        "Get the new address from the vendor, not from a search result, and replace it everywhere on your list. If your website editor lets you, update the link text too, so it still describes the destination."
      ),
      p(
        "If an old address of your own page was removed, see Google's guidance on [redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects): a permanent move should send visitors and search engines to the new address. Our guide on [finding and fixing broken links](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) walks through the repair."
      ),
      h2("Give patients a fallback"),
      p(
        "While you fix a link, put the office phone number next to it. A line such as 'If the portal does not open, call us at the number above' keeps the patient from giving up. Our guide on [portal login and messaging expectations](/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice) has wording that sets expectations for patients."
      ),
      h3("If the form is embedded"),
      p(
        "Some forms are embedded on your own page. After an update they may load slowly, look different or stop submitting. Our guide on [embedding an appointment widget safely](/guides/embedding-an-appointment-widget-safely-on-the-contact-page-of-a-counseling-practice) covers what to check."
      ),
      h2("Make it a standing task"),
      p(
        "Add the link sheet to the quarterly checks on your calendar and ask each vendor to email you before changes. Name the person who tests and the person who fixes, and write the date of the last test on the sheet."
      ),
    ],
    faqs: [
      {
        q: "How do I know when a portal vendor is updating?",
        a: "Ask the vendor to add the office manager to its notice list, and check the vendor's status or news page. Many vendors announce changes by email.",
      },
      {
        q: "What counts as a broken link?",
        a: "Any link that shows an error, a blank page, the wrong company or a form that will not submit. A 404 error is one common version.",
      },
      {
        q: "Can I test a form with real patient information?",
        a: "No. Use a clearly marked test with made-up details, tell the front desk, and delete the test afterwards if the system allows.",
      },
      {
        q: "Who should do the test?",
        a: "Someone who does not build the website, such as the office manager, using a phone like a patient would.",
      },
      {
        q: "How often should we test links if no update is announced?",
        a: "Once a quarter. Vendors sometimes change things without a clear notice.",
      },
    ],
    citations: [GOOGLE_STATUS, GOOGLE_REDIRECTS],
    links: [
      { href: "/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website", label: "Find And Fix Broken Links", description: "The repair steps." },
      { href: "/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice", label: "Portal Login Expectations", description: "Tell patients what to expect." },
      { href: "/guides/embedding-an-appointment-widget-safely-on-the-contact-page-of-a-counseling-practice", label: "Embedding A Widget Safely", description: "When the form lives on your page." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1706
  {
    slug: "what-to-ask-a-web-company-before-it-adds-a-new-plugin-or-script-to-a-medical-practice-website",
    keyword: "what to ask a web company before it adds a new plugin or script to a medical practice website",
    category: "Checklist",
    title: "What to Ask Before a New Plugin or Script Is Added",
    metaTitle: "What to Ask Before a New Plugin or Script Is Added",
    metaDescription:
      "Eight questions a practice owner can ask a web company before it adds a plugin, widget or tracking script to the practice website. (561) 291-2681",
    answer:
      "Before a web company adds a plugin or script, ask what it does, who runs it, what data it collects and sends, how it affects page speed, how it is removed, and what it costs. Ask for the answers in writing. If the tool will sit on pages patients use, ask your compliance adviser first.",
    author: "Liam Costello",
    publishDate: "2026-11-10T15:20:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why one small add-on deserves questions"),
      p(
        "A plugin, widget or script is a piece of code that does a job for the website: a chat box, a review badge, an appointment widget, a map, a tracking tag. Each one is usually small. But each one is also another company's code running on your pages, and it can change how fast the site loads, what visitors are asked and what information leaves the site."
      ),
      p(
        "The practice owner does not have to understand the code. You only need to ask the questions below and keep the answers."
      ),
      h2("The eight questions"),
      ol(
        "What problem does this solve, and how will we know it worked? If there is no measurable result, ask whether it is needed.",
        "Who makes it and who runs it? Get the company name, a support contact and the date it was last updated.",
        "What information does it collect, and where does that information go? Ask for the vendor's privacy statement and read what it says it sends and keeps.",
        "Which pages will it appear on? A chat box on the home page is different from one on a page where patients enter details.",
        "Does it set cookies or use tracking, and does our consent notice cover it?",
        "How does it affect page speed on a phone? Ask the company to test before and after.",
        "How do we remove it, and what is left behind? Ask who will remove it if the vendor closes.",
        "What does it cost over a year, and who pays if the price changes?"
      ),
      h2("A speed check you can ask for"),
      p(
        "Google explains that Core Web Vitals measure real-world loading, interactivity and visual stability, and that they are used by its ranking systems. A new script is one of the common reasons a page gets slower, so ask the web company to compare the page before and after, on a phone."
      ),
      p(
        "Do not accept 'it is lightweight' as an answer. Ask for the numbers and the date they were measured."
      ),
      h2("The privacy question needs special care"),
      p(
        "Some tools send visitor information to another company, such as the page visited, the device and the time. For a medical practice, where a visit to a page can itself say something about a person, that is not a small point. Whether a particular tool is acceptable depends on the page, the data and the law that applies to your practice."
      ),
      p(
        "This guide does not give legal advice. Ask your compliance adviser or attorney before adding anything that sits on a page where patients log in, book or send information. Our guide on [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website) explains the background in plain language."
      ),
      h2("Ask for it in writing"),
      p(
        "Have the web company send you a short note with the answers, the pages it will appear on, the date it will go live and the person who approved it. File the note with the website records. The next time an owner or a manager changes, the reasons will still be there."
      ),
      h2("After it goes live"),
      ul(
        "Open each page where it appears on a phone and a computer and read it as a patient would.",
        "Check that the phone link and the contact form still work, and that the cookie notice still shows if you use one.",
        "Add the tool to the account map and the quarterly check list, using the guide on [what to hand a new office manager](/guides/what-to-hand-a-new-office-manager-on-day-one-about-the-practice-website-google-profile-and-marketing-accounts) as a model.",
        "Set a date six months out to ask whether it is still needed."
      ),
      p(
        "An unused plugin is a cost with no benefit. Remove what you do not use, and ask the web company to confirm what was taken out."
      ),
    ],
    faqs: [
      {
        q: "Do I need to approve every plugin?",
        a: "Yes. Ask the web company to tell you before adding any new code, and to send the answers to the eight questions in writing.",
      },
      {
        q: "Can a plugin slow down my website?",
        a: "It can. Ask the company to test the page speed on a phone before and after, and keep the numbers.",
      },
      {
        q: "Is a chat box safe to add?",
        a: "It depends on what it collects, where it appears and how it is configured. Ask the vendor and your compliance adviser before adding one to pages patients use.",
      },
      {
        q: "What if the web company has already added things I did not approve?",
        a: "Ask for a list of every plugin and script currently on the site, what each does and who set it up. Remove the ones nobody can explain.",
      },
      {
        q: "Who should keep the written answers?",
        a: "The practice owner or office manager, in the same shared place as the account map.",
      },
    ],
    citations: [GOOGLE_CWV, GA_KEY_EVENTS],
    links: [
      { href: "/guides/embedding-an-appointment-widget-safely-on-the-contact-page-of-a-counseling-practice", label: "Embedding A Widget Safely", description: "What to check before you embed." },
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own The Accounts", description: "Keep records with the practice." },
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Set Up Google Analytics 4", description: "One tracking tool, set up well." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1700
  {
    slug: "a-quarterly-secret-shopper-test-of-the-website-and-phone-line-for-a-counseling-practice-using-staff-and-no-real-patients",
    keyword: "a quarterly secret-shopper test of the website and phone line for a counseling practice using staff and no real patients",
    category: "Checklist",
    title: "Quarterly Website and Phone Test Using Staff Only",
    metaTitle: "Quarterly Website and Phone Test Using Staff Only",
    metaDescription:
      "A quarterly test for a counseling practice: staff play a new client, call and use the website form, and score what happens. Call (561) 291-2681",
    answer:
      "Once a quarter, have someone outside the front desk play a new client: find the practice on a phone, call, leave a voicemail and send the website form, using made-up details. Score how fast each is answered and how clear the next step is. Fix the weakest step before the next quarter.",
    author: "Liam Costello",
    publishDate: "2026-11-10T15:30:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Find out what a new client experiences"),
      p(
        "A person deciding whether to start counseling often reaches out once, quietly, sometimes late in the evening. If the call goes to a full voicemail or the form never gets a reply, they may not try a second practice's number twice, and the practice never learns it happened."
      ),
      p(
        "A quarterly test shows you what that person would see. It uses staff and made-up details only, so no real client is involved and nothing private is touched."
      ),
      h2("Set the rules first"),
      ul(
        "Use a staff member or trusted friend who does not work the front desk, so the desk does not recognise the call.",
        "Use a made-up first name and an invented reason such as 'asking about availability'. Never use a real person's details, and never describe symptoms or a crisis.",
        "Tell the practice owner and the manager the week before, so nobody reacts to a test as a real inquiry. Mark any test message as a test so it is not mistaken for a real one.",
        "If the office has a recorded line, remember that calls may be recorded. A test caller should end the call politely if asked for personal information."
      ),
      h2("The five steps of the test"),
      ol(
        "Search the practice name and a service phrase on a phone. Note which result appears and whether the Google profile card shows the right hours and phone number.",
        "Open the website on a phone. Count the seconds until you find the phone number and a way to ask for an appointment.",
        "Call during office hours and once after hours. Note how many rings, who answers, and what is said.",
        "Leave a voicemail with a made-up name and a call-back number the tester controls. Note when, and how, someone calls back.",
        "Send the website form with the same made-up details. Note whether an automatic reply arrives and how long a person takes to answer."
      ),
      h2("What to score"),
      table(
        ["Step", "What counts as a good result"],
        ["Google profile card", "Hours, phone and website link are right and match the website."],
        ["Website on a phone", "Phone number and contact option visible without hunting."],
        ["Call in hours", "Answered or sent to a clear voicemail within a few rings, with the practice name stated."],
        ["Call after hours", "A greeting that says when calls are returned, and gives a safe option for urgent needs, such as 988 in the United States."],
        ["Form reply", "An automatic acknowledgement, then a person's reply within the time your site promises."]
      ),
      p(
        "Our guide on [voicemail greeting scripts that protect privacy](/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy) has wording for the greeting, and the [response time target and inquiry log](/guides/response-time-target-and-inquiry-log-for-a-counseling-practice) shows how to set the time you promise."
      ),
      h2("Write down one fix, not ten"),
      p(
        "After the test, write what you saw in a few lines: the date, the tester, the time of each step and one thing that was unclear. Choose the weakest step and assign one fix and one owner. A common outcome is a missing after-hours greeting, a form that sends no reply or a phone number that is hard to find on a phone."
      ),
      p(
        "Keep the notes in the same folder as your [calendar of yearly checks](/guides/a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates) so you can compare quarter to quarter. If something is wrong with the Google profile, Google's help page on [editing your profile](https://support.google.com/business/answer/3039617) explains how to change it."
      ),
      h2("Be kind to the team"),
      p(
        "The test measures the system, not the person who answered. Share what worked first, then the one fix. Staff who think they are being graded will start to hide problems instead of reporting them."
      ),
    ],
    faqs: [
      {
        q: "Is it okay to call my own office as a test?",
        a: "Yes, with made-up details and a tester the desk does not know. Tell the owner and manager first, and keep the call short and non-clinical.",
      },
      {
        q: "How often should we run it?",
        a: "Once a quarter is enough. Run it again after a phone system change, a website update or a staff change at the front desk.",
      },
      {
        q: "Should the tester pretend to be in distress?",
        a: "No. Use a neutral reason such as asking about availability. A test must never imitate a crisis.",
      },
      {
        q: "What if the tester gets an answer that asks for private information?",
        a: "End the call politely and note it. A new inquiry call can collect a name and call-back number, and the rest can wait for intake.",
      },
      {
        q: "Can we use this for a primary care practice?",
        a: "Yes. Swap the voicemail and after-hours steps for your own, and keep every detail made up.",
      },
    ],
    citations: [GBP_EDIT, GBP_PERFORMANCE],
    links: [
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "Wording for the after-hours line." },
      { href: "/guides/response-time-target-and-inquiry-log-for-a-counseling-practice", label: "Response Time And Inquiry Log", description: "Set the time you promise." },
      { href: "/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice", label: "Auto-Reply After An Inquiry", description: "The form acknowledgement." },
      LOC,
    ],
  },
];
