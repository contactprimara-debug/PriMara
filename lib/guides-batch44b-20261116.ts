// -- Guides batch 44b - 2026-11-16 --
// Guide/AEO pages from the Command Center queue (rows 1785-1789, planned 2026-11-13 PM), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const SITE_MOVE = {
  publisher: "Google Search Central",
  label: "Changing your web hosting and SEO",
  href: "https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes",
};
const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_TIPS = {
  publisher: "Google Business Profile Help",
  label: "Tips to improve your local ranking on Google",
  href: "https://support.google.com/business/answer/7091",
};
const NPPES = {
  publisher: "CMS",
  label: "National Plan and Provider Enumeration System (NPPES)",
  href: "https://nppes.cms.hhs.gov/",
};
const FL_HEALTH = {
  publisher: "Florida Department of Health",
  label: "Florida Department of Health",
  href: "https://www.floridahealth.gov/",
};
const HC_PCP = {
  publisher: "HealthCare.gov",
  label: "Primary care provider (glossary)",
  href: "https://www.healthcare.gov/glossary/primary-care-provider/",
};
const W3C_FORMS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Forms Tutorial",
  href: "https://www.w3.org/WAI/tutorials/forms/",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty7B: Guide[] = [
  // ---------------------------------------------------------------- 1785
  {
    slug: "one-page-checklist-for-the-day-a-medical-practice-website-changes-hosting-company-so-email-forms-and-the-phone-link-keep-working",
    keyword: "a one-page checklist for the day a medical practice website changes hosting company so email, forms and the phone link keep working",
    category: "Checklist",
    title: "Checklist for the Day Your Practice Website Changes Hosts",
    metaTitle: "Checklist for Changing Website Hosts at a Medical Practice",
    metaDescription:
      "Moving a practice website to a new host can break email, forms and the phone link. A one-page checklist for before, during and after the switch. (561) 291-2681",
    answer:
      "Before a medical practice website changes hosting companies, write down every email address, form and phone link, move email separately from the website, lower the domain's cache time ahead of the switch, and test calls, forms and email within the hour after it goes live. Keep the old host running until the checks pass.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 6,
    sections: [
      h2("Why a host change is riskier than it sounds"),
      p(
        "A hosting company stores the website files and often handles more than the owner realizes: the practice email, the code that sends form messages and sometimes the domain itself. Move the website and any of those can stop without a visible error. The page still loads, but the contact form goes nowhere or staff email stops arriving."
      ),
      p(
        "Google's guidance on changing hosting, linked below, makes the same point from the search side: keep addresses the same and make the change in a controlled order. This checklist covers the practice side."
      ),
      h2("One week before"),
      ol(
        "List every email address that uses the domain and where each one is actually hosted.",
        "List every form on the site and where its messages are sent.",
        "Screenshot the phone number links, the hours and the contact page on a phone.",
        "Confirm who controls the domain name and its login, using the [domain renewal and expiration guide](/guides/domain-name-renewal-and-expiration-protection-for-a-medical-practice-website) as a guide.",
        "Ask the new host in writing how long the move takes and what they will not move for you."
      ),
      h3("Ask who handles email"),
      p(
        "If email lives with the old host, it needs its own plan. Moving it later, on purpose, is safer than losing it by accident. A separate [professional domain email](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) service keeps it independent of the website host."
      ),
      h2("On the day"),
      table(
        ["Step", "Why"],
        ["Pick a quiet time, not Monday morning", "Fewer patients notice if something is briefly wrong. See [choosing a day to publish changes](/guides/choosing-a-day-and-time-to-publish-website-changes-at-a-primary-care-practice-so-the-front-desk-is-not-caught-off-guard)."],
        ["Keep the old host active", "A fast way back if something fails"],
        ["Switch the domain pointers only after the new site is checked", "The new site can be tested before patients see it"],
        ["Tell the front desk", "A [five-minute staff huddle](/guides/five-minute-staff-huddle-after-a-website-change-so-the-front-desk-knows-what-patients-will-see) covers what to expect"]
      ),
      h2("The first hour after"),
      ul(
        "Tap the phone number on a phone and confirm it dials the right line.",
        "Send a clearly labeled test through every form and confirm the message arrives in the real mailbox.",
        "Send an email to and from a practice address.",
        "Open ten key pages and check that none show an error or an old design.",
        "Check that the secure padlock shows and no page warns about security."
      ),
      p(
        "Then look at the part patients do not see. Confirm the site is still open to Google, that redirects still work and that nothing is blocked, using the [page indexing report](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website) in Search Console over the following days."
      ),
      h2("The first week after"),
      p(
        "Watch the calls and form requests against a normal week. A sudden drop is a signal to run the checks above again; the guide on [what to check in the first hour when calls or traffic drop](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) is the next step. Only cancel the old host once everything has worked for a full week and you have a backup copy of the old site."
      ),
    ],
    faqs: [
      {
        q: "Will changing hosts hurt my Google rankings?",
        a: "It should not if page addresses stay the same and the site stays reachable. Problems come from downtime, blocked crawling or changed addresses without redirects.",
      },
      {
        q: "Do I need to tell patients about the switch?",
        a: "Usually not. Tell staff, since they will hear about any problem first. Post a notice only if the site or phone will be unavailable for a known period.",
      },
      {
        q: "Who should be present during the switch?",
        a: "Someone who can make phone calls and submit forms from a phone, plus whoever holds the domain login. The new host's support contact should be reachable.",
      },
      {
        q: "How long should I keep the old host?",
        a: "At least a week of normal operation, longer if email was involved. Download a full copy of the old site before canceling.",
      },
      {
        q: "Can I move email and the website at once?",
        a: "You can, but it doubles the places something can fail. Moving them on different days makes problems easier to trace.",
      },
    ],
    citations: [SITE_MOVE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/domain-name-renewal-and-expiration-protection-for-a-medical-practice-website", label: "Domain Renewal Protection", description: "Know who controls the domain." },
      { href: "/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice", label: "Backups and Uptime Monitoring", description: "Keep a copy before any move." },
      { href: "/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website", label: "First Hour When Calls Drop", description: "What to check after a change." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1786
  {
    slug: "closed-for-a-staff-training-day-wording-on-the-website-google-profile-and-phone-greeting-of-a-medical-or-counseling-practice",
    keyword: "closed-for-a-staff-training-day wording on the website, Google profile and phone greeting of a medical or counseling practice",
    category: "How-to",
    title: "Staff Training Day Closure Wording for a Practice",
    metaTitle: "Staff Training Day Closure Wording for a Practice",
    metaDescription:
      "Closing for a staff training day? Short wording for the website, Google profile and phone greeting that tells patients what to do. (561) 291-2681",
    answer:
      "For a staff training day, state the date, say the office is closed, and tell patients exactly what to do instead: who to call for urgent needs and when you reopen. Put the same wording on the website, the Google Business Profile special hours and the phone greeting, and remove all three the next morning.",
    author: "Liam Costello",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 4,
    sections: [
      h2("A closure that is not a holiday"),
      p(
        "Holidays are expected. A training day is not. Patients may find the door locked or the phone unanswered with no explanation, and the easy assumption is that something is wrong. Short, specific wording prevents that."
      ),
      p(
        "Our guide to [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) covers the general pattern. A training day has a few differences worth calling out."
      ),
      h2("The four facts every notice needs"),
      ol(
        "The date, with the weekday.",
        "That the office is closed, without a long reason.",
        "What to do for an urgent need, including 911 for emergencies and the practice's after-hours instructions if you have them.",
        "The date and time you reopen."
      ),
      h2("Sample wording"),
      table(
        ["Where", "Wording"],
        ["Website banner", "Our office will be closed Friday, March 14 for a staff training day. We reopen Monday, March 17 at 8:30 a.m. For an emergency, call 911."],
        ["Google profile special hours", "Mark the date as closed. Add a short update if your posts allow it, with the same reopening date."],
        ["Phone greeting", "Thank you for calling the practice. We are closed today for a staff training day and will return your message when we reopen on Monday. For an emergency, please hang up and call 911."]
      ),
      p(
        "Keep the reason simple. 'Staff training day' is enough. Do not describe what the training covers, since that invites questions the front desk does not need."
      ),
      h3("Counseling practices"),
      p(
        "A counseling practice may have clients in distress who rely on a scheduled session. If a session is affected, contact scheduled clients directly through the channel they agreed to, and give them a number for urgent needs, such as the 988 Suicide and Crisis Lifeline in the United States, in addition to 911. Our guide to [vacation and out-of-office coverage notices for a therapy practice](/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice) has the same approach."
      ),
      h2("Set it up in the right order"),
      ol(
        "Add special hours on the Google profile at least a week ahead, as described in Google's help page on editing your profile, linked below.",
        "Post the website notice once the date is final.",
        "Record the new phone greeting the afternoon before.",
        "Tell staff who will check messages when the office reopens."
      ),
      p(
        "The [split hours and lunch closures guide](/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice) shows how special hours behave in Google, and the [phone-answered hours versus office hours guide](/guides/phone-answered-hours-versus-office-hours-on-a-medical-practice-website-and-google-profile) helps if phones are staffed differently from the office."
      ),
      h2("Take it down the next morning"),
      p(
        "A stale closure banner confuses patients as much as a missing one. Put the removal on the calendar the same day you publish the notice: website banner off, greeting back to normal and a quick call to confirm the line answers. Then check the Google profile shows the regular hours again."
      ),
    ],
    faqs: [
      {
        q: "Should I say why the office is closed?",
        a: "Keep it brief: 'staff training day' is enough. You do not need to explain what the training is about.",
      },
      {
        q: "How far ahead should I post the notice?",
        a: "Put special hours on Google about a week ahead and the website notice as soon as the date is final. Patients who book in advance will see it.",
      },
      {
        q: "What if a patient has an urgent need on that day?",
        a: "Give them a clear instruction: 911 for emergencies and your urgent or after-hours option for anything else. For counseling, also include the 988 Suicide and Crisis Lifeline.",
      },
      {
        q: "Does a closed day affect my Google ranking?",
        a: "Accurate hours matter more than the closure itself. Marking the day closed in advance is better than leaving wrong hours that frustrate visitors.",
      },
      {
        q: "Who removes the notice afterward?",
        a: "Name one person when you post it and put the removal date on the same calendar entry, so it does not stay up for weeks.",
      },
    ],
    citations: [GBP_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday and Closure Notices", description: "The general pattern for any closure." },
      { href: "/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice", label: "Split Hours on Google", description: "How special hours behave." },
      { href: "/guides/voicemail-greeting-script-for-a-counseling-practice-that-protects-privacy", label: "Voicemail Greeting Script", description: "A greeting that protects privacy." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1787
  {
    slug: "which-page-a-learn-more-link-on-a-google-business-profile-post-should-open-for-a-medical-practice",
    keyword: "which page a Learn more link on a Google Business Profile post should open for a medical practice",
    category: "How-to",
    title: "Where a Google Profile Post Learn More Link Should Go",
    metaTitle: "Where a Google Profile Post Learn More Link Should Go",
    metaDescription:
      "A Learn more button on a Google Business Profile post should open the one page that answers the post. How a medical practice chooses it. (561) 291-2681",
    answer:
      "A Learn more link on a Google Business Profile post should open the single page that finishes what the post started: a specific service page, hours notice or new provider page, not the home page. The test is simple. A patient who taps it should see the answer without searching your site.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 4,
    sections: [
      h2("The button is a promise"),
      p(
        "When a Google Business Profile post carries a Learn more button, the post makes a small promise: tap here and you will see more about this. Sending that tap to the home page breaks the promise, because the patient now has to find the thing the post mentioned."
      ),
      p(
        "Most taps happen on a phone, often with one hand and little patience. The page they land on needs to answer the post in the first screen."
      ),
      h2("Match the post to the page"),
      table(
        ["Post is about", "Link to"],
        ["A closure or schedule change", "The page or banner that states the dates and what to do instead"],
        ["A new provider joining", "That provider's own page, once it is live and accurate"],
        ["A service the practice offers", "The one page for that service, not the full services list"],
        ["Extended or seasonal hours", "The hours section of the contact page"],
        ["A general health-awareness reminder", "A plain page of practice information with the phone number visible"]
      ),
      p(
        "If the right page does not exist, build it before the post, or change what the post says. A post about something you cannot back up on your own site is a weak post."
      ),
      h2("Check the page before you post"),
      ol(
        "Open the link on a phone, not a computer.",
        "Confirm the phone number is visible and tappable without scrolling.",
        "Confirm the page loads quickly and shows nothing outdated.",
        "Check that the page does not open with a pop-up covering the answer.",
        "Make sure the page can be reached from the rest of your site, so it does not sit alone."
      ),
      h3("Keep health claims off the landing page"),
      p(
        "A post that implies medical results or compares outcomes puts that claim on the page too. The [post ideas for a counseling practice](/guides/google-business-profile-post-ideas-for-a-counseling-practice-that-avoid-clinical-claims) show what to post without clinical claims, and the same restraint belongs on the page it links to."
      ),
      h2("Tag the link so you can count taps"),
      p(
        "A tagged link lets your analytics show how many visits came from the post. Keep the tag free of any patient information, and see our guide on [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website) before adding anything beyond a simple source label. Then read the numbers monthly alongside the [profile maintenance checklist](/guides/monthly-google-business-profile-maintenance-checklist)."
      ),
      h2("When a post should not have a link at all"),
      p(
        "Some posts are complete on their own: a one-line closure, a changed phone line, a reminder to call for urgent needs. Adding a button there only sends patients away from information they already have. If the post says everything, let it stand, and keep the button for posts where the page adds something real, such as hours, a provider page or a service explanation."
      ),
      h2("Retire or update old posts"),
      p(
        "A post can outlive the page it points to. Each quarter, click through every active post link. If a page was removed or moved, the [redirects guide](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website) explains how to keep the old address working. Google's local ranking tips, linked below, are a reminder that accurate, complete profile information supports how the practice shows up."
      ),
    ],
    faqs: [
      {
        q: "Can the Learn more link go to the home page?",
        a: "It can, but it usually should not. The home page makes the patient look for what the post promised. Link to the specific page when one exists.",
      },
      {
        q: "Should I link every post?",
        a: "Link a post when there is a page that adds something. A simple notice with all details in the text may not need a button.",
      },
      {
        q: "Does the link affect how the post shows?",
        a: "The button gives patients a next step. How Google displays posts can change, so judge by what visitors do once they arrive, using your own analytics.",
      },
      {
        q: "What if the page I want is slow on mobile?",
        a: "Fix the page first or choose a lighter one. A slow landing page wastes the tap.",
      },
      {
        q: "How often should I check post links?",
        a: "Quarterly, and any time you remove, rename or redesign a page.",
      },
    ],
    citations: [GBP_TIPS, GBP_EDIT],
    links: [
      { href: "/guides/google-business-profile-post-ideas-for-a-counseling-practice-that-avoid-clinical-claims", label: "Profile Post Ideas Without Clinical Claims", description: "What to post and what to avoid." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Maintenance Checklist", description: "A routine for the whole profile." },
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Count visits without patient data." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1788
  {
    slug: "annual-check-of-provider-names-titles-and-license-details-on-a-primary-care-practice-website-against-the-state-licensing-lookup",
    keyword: "an annual check of provider names, titles and license details on the website against the state licensing lookup for a primary care practice",
    category: "Checklist",
    title: "Annual Check of Provider Names and Licenses on Your Website",
    metaTitle: "Yearly Check of Provider Names and License Details",
    metaDescription:
      "Once a year, compare each provider's name, title and license on your website with the state licensing lookup and NPI record. A short checklist. (561) 291-2681",
    answer:
      "Once a year, compare each provider's name, title and license details on the practice website with the state licensing lookup and the federal NPI record. Fix any mismatch in spelling, title or status the same week, and have each provider confirm their own entry. Never add a credential the lookup does not show.",
    author: "Liam Costello",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Why check at all"),
      p(
        "Provider details drift. A name changes, a title is updated, a license renews with a new date or a certification lapses. The website often keeps showing the old version for years. That is an accuracy problem for patients and it makes your profile and directories disagree, which is the kind of inconsistency that confuses people comparing options."
      ),
      p(
        "The check is simple and takes about fifteen minutes per provider. The goal is that what the site says matches what an official source says."
      ),
      h2("What to compare"),
      table(
        ["On your website", "Check against"],
        ["Full name and spelling", "The state licensing lookup and the NPI record"],
        ["Title (MD, DO, NP, PA and so on)", "The license type shown in the lookup"],
        ["License status", "Active status in the state lookup"],
        ["Specialty or board wording", "What the provider can document, confirmed by the provider"],
        ["Practice address and phone", "The NPI record and your Google profile"]
      ),
      p(
        "Use the state's own lookup, reached from the Florida Department of Health site for Florida practices, and the federal NPPES search, both linked below. The [NPI registry and directory accuracy guide](/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice) explains why the NPI record is worth keeping current."
      ),
      h2("Step by step"),
      ol(
        "List every provider named anywhere on the site, including the team page, bios, blog bylines and schema or footer text.",
        "Look up each one in the state lookup and the NPI record, and note any difference.",
        "Send each provider their own entry to confirm or correct. They know their title best.",
        "Update the website, then the Google profile and directories so all agree.",
        "Record the date of the check and the person who did it."
      ),
      h3("Do not add what the lookup does not show"),
      p(
        "If a provider mentions a certification or a title the lookup does not list, ask them to supply documentation before it goes on the site. A claim you cannot back up is worse than a short bio. The same caution applies to what [staff titles are explained on the site](/guides/staff-titles-explained-page-for-a-primary-care-practice-md-do-np-pa-and-ma)."
      ),
      h2("Pair it with other changes"),
      p(
        "Run the check every year on a fixed date and also whenever someone joins, leaves or changes status. The [checklist for the week after a new provider joins](/guides/checking-the-website-and-google-profile-the-week-after-a-new-provider-joins-a-primary-care-practice) covers the arrival case, and the [yearly calendar of website, profile and phone checks](/guides/a-yearly-calendar-of-website-google-profile-and-phone-checks-for-a-primary-care-practice-with-named-owners-and-dates) is the place to put this one."
      ),
      h2("What to do when you find a mismatch"),
      p(
        "Most mismatches are small: a middle initial, an old title or a renewal date. Fix the website first, then the places that copy it. If a provider's name differs because of a recent change, ask the provider which version they use professionally and make every listing match it, including the Google profile, the NPI record and insurance directories."
      ),
      p(
        "Keep a short log of what changed and when. It makes next year's check faster and gives you a record if a patient or a directory ever asks why a detail was updated."
      ),
      p(
        "This is an accuracy habit, not legal advice. For questions about what a license permits or how titles may be used, ask the licensing board or your attorney."
      ),
    ],
    faqs: [
      {
        q: "Where do I look up a provider's license?",
        a: "Use the state licensing agency's public lookup. For Florida practices that is linked from the Florida Department of Health website. Also check the federal NPI record.",
      },
      {
        q: "Should license numbers appear on the website?",
        a: "That depends on your state's rules and your own policy. Ask the licensing board or counsel. If you show them, copy them exactly from the lookup.",
      },
      {
        q: "Who should do the check?",
        a: "Usually the office manager or credentialing lead, with each provider confirming their own entry afterward.",
      },
      {
        q: "What if the lookup and the website disagree?",
        a: "Do not guess. Ask the provider, and if the lookup seems wrong, contact the licensing agency. Meanwhile show only what you can support.",
      },
      {
        q: "How often should we repeat it?",
        a: "Once a year on a fixed date, and any time a provider joins, leaves, renews or changes a title.",
      },
    ],
    citations: [NPPES, FL_HEALTH],
    links: [
      { href: "/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice", label: "NPI Registry and Directory Accuracy", description: "Keep federal and directory records current." },
      { href: "/guides/staff-titles-explained-page-for-a-primary-care-practice-md-do-np-pa-and-ma", label: "Staff Titles Explained", description: "Explain MD, DO, NP, PA and MA." },
      { href: "/guides/checking-the-website-and-google-profile-the-week-after-a-new-provider-joins-a-primary-care-practice", label: "After a New Provider Joins", description: "A first-week checklist." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1789
  {
    slug: "separate-contact-paths-for-new-and-existing-patients-on-a-primary-care-practice-website",
    keyword: "separate contact paths for new and existing patients on a primary care practice website",
    category: "How-to",
    title: "Separate Contact Paths for New and Existing Patients",
    metaTitle: "Separate Contact Paths for New and Existing Patients",
    metaDescription:
      "New and existing patients want different things from a primary care site. How to give each a clear path so calls reach the right desk. (561) 291-2681",
    answer:
      "Give a primary care website two clearly labeled paths: one for new patients who want to become patients, and one for existing patients who need refills, records or a portal login. Each path needs its own button, its own phone option and its own answer on the page. Mixed paths send the wrong callers to the wrong desk.",
    author: "Gio LaRoche",
    publishDate: "2026-11-16T14:00:00Z",
    dateModified: "2026-11-16",
    readMinutes: 5,
    sections: [
      h2("Two audiences on one contact page"),
      p(
        "A new patient asks whether you are taking patients, whether you take their insurance and how to book. An existing patient wants to reach the portal, request a refill or ask the office a question. A single contact page that treats them the same slows both down and sends both callers to the same busy line."
      ),
      p(
        "Splitting the paths helps the patient and the front desk. New-patient calls, which are the ones that grow the practice, reach the person ready to schedule them."
      ),
      h2("What each path needs"),
      table(
        ["Point of comparison", "New patients versus existing patients"],
        ["Main action", "New: request an appointment or call to schedule. Existing: portal login, refill request or a message to the office."],
        ["Questions answered", "New: accepting patients, insurance, what to bring, what the first visit is. Existing: portal help, records, billing questions, after-hours instructions."],
        ["Where it rings", "New: the scheduling or intake desk. Existing: the clinical or general office line."],
        ["Page wording", "New: welcoming and specific about next steps. Existing: brisk, with a clear portal link."]
      ),
      h2("How to lay it out"),
      p(
        "Near the top of the contact page, place two plain choices side by side on a computer and stacked on a phone: 'I am a new patient' and 'I am a current patient'. Label them with words people use, and keep the phone number visible beside each."
      ),
      ul(
        "New patient path: a short request form or phone number, the insurance page, and a link to what to expect at the first visit.",
        "Current patient path: the portal link, how to request a refill, and the number for office questions.",
        "A shared line for emergencies that tells everyone to call 911 for an emergency."
      ),
      h3("Cover both in the phone menu"),
      p(
        "The same split should work on the phone. A short menu that begins with a new patient option makes sure those calls are answered by someone who can schedule. Our [new patient intake phone script](/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice) shows what that person should say, and the [call log fields](/guides/front-desk-new-patient-call-log-fields-for-a-primary-care-practice) show what to record."
      ),
      h2("Keep the details consistent"),
      p(
        "If the practice is closed to new patients, say so honestly and give a waitlist option, as described in the guide on a [not accepting new patients and waitlist page](/guides/not-accepting-new-patients-and-waitlist-page-for-a-primary-care-practice). Make sure the Google profile and directories match. HealthCare.gov's glossary entry on a primary care provider, linked below, is a useful plain definition for the page's explanatory text."
      ),
      h2("Check that it works"),
      ol(
        "Pretend to be a new patient on your phone and try to book, noting each tap.",
        "Pretend to be an existing patient and try to reach the portal or request a refill.",
        "Call the main line and pick each option from the menu.",
        "Count new-patient requests monthly with the [lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) to see whether the split helps."
      ),
      p(
        "Make forms easy to complete on a phone, following the W3C forms guidance, and keep any form for current patients free of requests for health details."
      ),
    ],
    faqs: [
      {
        q: "Do I need two separate pages for new and existing patients?",
        a: "Not always. Two clearly labeled sections on one contact page can work. A separate page makes sense when each audience needs a lot of detail.",
      },
      {
        q: "Where should the portal link go?",
        a: "On the current-patient path and in the site header or footer, so existing patients find it without scrolling the new-patient content.",
      },
      {
        q: "Should the two paths use different phone numbers?",
        a: "They can, or one number with a menu. What matters is that new-patient calls reach someone who can schedule them quickly.",
      },
      {
        q: "What if I am not accepting new patients?",
        a: "Say so plainly on the new-patient path and offer a waitlist or a referral suggestion. Keep the existing-patient path unchanged.",
      },
      {
        q: "How do I know the split is working?",
        a: "Count new-patient calls and requests each month, and check how many reach scheduling on the first try. Compare against the months before the change.",
      },
    ],
    citations: [HC_PCP, W3C_FORMS],
    links: [
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "New Patient Intake Phone Script", description: "What the front desk says." },
      { href: "/guides/not-accepting-new-patients-and-waitlist-page-for-a-primary-care-practice", label: "Not Accepting New Patients Page", description: "Honest wording and a waitlist." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "Count calls and forms." },
      LOC,
    ],
  },
];
