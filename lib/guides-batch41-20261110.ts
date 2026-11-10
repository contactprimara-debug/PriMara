// -- Guides batch 41 - 2026-11-10 (afternoon) --
// Guide/AEO pages from the Command Center queue (rows 1719, 1720, 1722, 1723, 1725, planned 2026-11-10), built by the page
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
const GBP_RANKING = {
  publisher: "Google Business Profile Help",
  label: "Tips to improve your local ranking on Google",
  href: "https://support.google.com/business/answer/7091",
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

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty4: Guide[] = [
  // ---------------------------------------------------------------- 1719
  {
    slug: "one-page-brief-to-give-a-new-web-designer-at-a-counseling-practice-services-insurance-hours-tone-and-what-not-to-say",
    keyword: "a one-page brief a counseling practice owner can give a new web designer covering services, accepted insurance, hours, tone and what the site must never say",
    category: "Checklist",
    title: "One-Page Brief for a New Web Designer",
    metaTitle: "One-Page Brief for a New Counseling Website Designer",
    metaDescription:
      "What a counseling practice owner puts on one page for a new web designer: services, insurance, hours, tone and what the site must not say. (561) 291-2681",
    answer:
      "Give a new web designer one page with six parts: the services you offer, the insurance you accept, your real hours and phone number, the tone you want, the words the site must never use, and who approves changes. A single sheet like this prevents most rework, wrong details and compliance mistakes.",
    author: "Liam Costello",
    publishDate: "2026-11-10T18:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why one page beats a long intake form"),
      p(
        "A new designer starts with questions you may not have answered yet. If you answer them in a meeting, the answers live in someone's memory. If you answer them on one page, they live on paper, and the designer, the copywriter and your office manager all read the same thing."
      ),
      p(
        "The page is not a design document. It does not say what color the buttons are. It says what is true about your practice and what the site is not allowed to say. Everything else is the designer's job."
      ),
      h2("The six parts of the brief"),
      h3("1. Services you offer, and the ones you do not"),
      p(
        "List each service in the words your own front desk uses, one line each. Then list two or three things people ask for that you do not offer. A counseling practice that does not do court-ordered evaluations, or a primary care office that does not do workers' compensation visits, loses time on calls it cannot help. Saying so on the site is kinder than a long phone call."
      ),
      h3("2. Accepted insurance"),
      p(
        "Name the plans you are in network with today, and name the date you last checked. Add the one sentence you want used for everyone else, such as whether you offer a receipt for out-of-network claims. Our guide on [building an accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) explains how to keep that page from going stale, which is worth handing to the designer alongside the brief."
      ),
      h3("3. Hours, phone number, address and how people reach you"),
      p(
        "Write the hours exactly as they should appear, including any split or lunch closure, and the one phone number that should appear everywhere. If the office has a separate number for a pharmacy, billing or a crisis line, say which one belongs on the site and which does not."
      ),
      h3("4. Tone"),
      p(
        "Pick three words, then pick three words you do not want. 'Warm, plain, respectful' against 'clinical, pushy, trendy' tells a designer more than a paragraph of adjectives. Add one example of a sentence you like from another site and one you do not."
      ),
      h3("5. What the site must never say"),
      p(
        "This section protects you. Healthcare sites have limits that other businesses do not, and a designer from outside the field may not know them."
      ),
      ul(
        "No promises of results, cure rates, or 'best' and 'leading' claims.",
        "No patient stories, photos or testimonials unless the practice owner has approved each one in writing.",
        "No clinical advice written as if it were a visit. Describe services and visit types, not what treatment will do.",
        "No names or details of any patient, even in an example.",
        "No pop-up, chat tool or form added without the owner knowing what data it collects."
      ),
      p(
        "The tracking limit deserves its own line. Our guide on [tracking and privacy on a medical website](/guides/hipaa-compliant-website-tracking-guide-for-medical-practices) explains why a designer should not add an ad pixel or a session recorder to pages that handle patient information, and the brief is the place to say that."
      ),
      h3("6. Who approves, and how"),
      p(
        "Name one person who can say yes, and the way they say it: an email reply, not a hallway comment. List what needs their yes: any change to hours, phone number, provider names, prices or insurance. That one line is what keeps a rushed Friday edit from putting the wrong number on every page."
      ),
      h2("A sample layout you can copy"),
      table(
        ["Section", "What goes in it"],
        ["Services", "One line per service, plus two things you do not offer"],
        ["Insurance", "Plans accepted, the date last checked, one sentence for everyone else"],
        ["Contact", "Hours as written, the one phone number, the address, the contact form owner"],
        ["Tone", "Three words wanted, three words not wanted, one sample sentence"],
        ["Never say", "Results claims, patient stories, clinical advice, patient details"],
        ["Approver", "Name, email, and the list of changes that need their yes"]
      ),
      h2("What to ask for back"),
      p(
        "Ask the designer to reply with a one-line restatement of each section before anything is built. If the restated insurance list or hours do not match the page, you have caught the error before a single page exists. Google's guidance on [creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) is a useful second standard: pages written for the people who need your services, with real facts, tend to match what the brief asks for."
      ),
      p(
        "Our list of [questions to ask a web designer before a redesign](/guides/questions-to-ask-a-web-designer-before-redesigning-a-medical-practice-website-so-rankings-are-not-lost) covers the other side: what the designer should tell you about redirects, page names and ranking."
      ),
    ],
    faqs: [
      {
        q: "How long should the brief for a web designer be?",
        a: "One page. If it runs longer, move the detail into a linked document and keep the page to the six parts so the designer reads all of it.",
      },
      {
        q: "Do I need to list every service?",
        a: "List the ones you want patients to find you for, in your own words, and two or three you do not offer. A complete list is less useful than an accurate one.",
      },
      {
        q: "Should the brief say what the site must never say?",
        a: "Yes. Designers from outside healthcare often do not know that results claims, testimonials and patient details are limited. Writing the limits down is faster than correcting pages later.",
      },
      {
        q: "Who should approve changes after the site launches?",
        a: "One named person, usually the owner or office manager, by email. Changes to hours, phone number, providers, prices and insurance should always need that approval.",
      },
      {
        q: "Does the brief replace a contract?",
        a: "No. It describes your practice and rules for the site. Deliverables, dates and ownership of accounts belong in the written agreement with the designer.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GBP_EDIT],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Should Own Your Accounts", description: "Keep the logins in the practice's name." },
      { href: "/guides/medical-website-launch-seo-checklist", label: "Website Launch SEO Checklist", description: "What to check before go-live." },
      { href: "/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises", label: "Reading a Marketing Proposal", description: "Spot promises you cannot verify." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1720
  {
    slug: "written-sign-off-before-a-marketing-vendor-changes-a-medical-practice-phone-number-hours-or-provider-list",
    keyword: "a written sign-off step so a marketing vendor cannot change the practice phone number, hours or provider list without the office manager approving it",
    category: "Checklist",
    title: "A Sign-Off Step for Vendor Changes to Phone, Hours and Providers",
    metaTitle: "Sign-Off Step for Vendor Changes to Phone and Hours",
    metaDescription:
      "A written sign-off so a marketing vendor cannot change your practice phone, hours or provider list without your office manager approving. (561) 291-2681",
    answer:
      "Put one rule in writing: the vendor may not change the phone number, hours, provider list, address or insurance list anywhere online until the office manager replies yes by email. Add a short change request, a named approver, a same-day check and a log, and a wrong detail rarely reaches patients.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T18:10:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("The details a vendor should never change alone"),
      p(
        "A marketing vendor with access to your website and Google profile can fix a typo in a minute. The same access can put a wrong phone number on every page in the same minute. Most vendors mean well, and most of these mistakes are copy-and-paste slips, not bad faith."
      ),
      p(
        "Five kinds of facts decide whether a patient reaches you, and each should need a yes before it changes."
      ),
      ul(
        "The phone number, including any number used for call tracking.",
        "Hours, closures and holiday notices.",
        "The provider list, names, titles and photos.",
        "The address, suite and service area.",
        "The accepted insurance list and any prices."
      ),
      h2("The four-line sign-off"),
      p(
        "The step can be a single email thread. You do not need a form tool or a ticket system. What matters is that it is written, has a name on it and happens before the change, not after."
      ),
      ol(
        "The vendor emails a change request: what will change, on which page or profile field, the old value and the new value.",
        "The office manager replies with the word 'approved' and the date, or with a correction. A reply of 'sounds good' to a different message does not count.",
        "The vendor makes the change and replies with the page link and a screenshot of the live result.",
        "The office manager opens that link, confirms it, and files the thread in one shared folder."
      ),
      h2("Make it part of the agreement"),
      p(
        "A rule in an email is easy to forget. A line in the written agreement is harder to forget. Ask for one sentence: 'The vendor will not change the practice phone number, hours, provider list, address or insurance list on any website, profile or directory without written approval from the practice.' If the vendor objects, that is useful information about how they work."
      ),
      p(
        "Our guide on [reading a marketing proposal](/guides/how-to-read-a-marketing-proposal-for-a-medical-practice-and-spot-guaranteed-ranking-promises) shows where a clause like this belongs, and [who should own the accounts](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) matters just as much: if the practice owns the logins, it can always see what changed."
      ),
      h2("Check after the change, not just before"),
      p(
        "Approval stops a bad change you can see in advance. It does not stop a tool that updates fields on its own, such as a directory sync or a plugin. So add a monthly look. Open the website footer, the contact page, the Google profile and one directory listing, and compare phone number, hours and address with your master sheet."
      ),
      p(
        "A [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change) gives you the history when something goes wrong: a new date in the log next to a drop in calls points you at the cause quickly."
      ),
      h2("What to do when a change slips through"),
      p(
        "If a wrong number or hour goes live without approval, fix the detail first and talk about process second. Correct the source of truth, ask the vendor to correct every place it appears, and check the Google profile too. Google explains how to [edit your Business Profile](https://support.google.com/business/answer/3039617), including hours and phone number, so the practice can correct it directly if the vendor is slow."
      ),
      p(
        "Then ask the vendor for one sentence: how did it happen, and what stops it next time? A vendor who answers specifically is usually worth keeping. One who answers vaguely has told you what you needed to know."
      ),
      h3("What the master sheet looks like"),
      table(
        ["Fact", "Where it lives"],
        ["Phone number", "Master sheet, website footer, contact page, Google profile, directories"],
        ["Hours and closures", "Master sheet, website, Google profile, phone greeting"],
        ["Provider list", "Master sheet, team page, Google profile, insurance directories"],
        ["Address and suite", "Master sheet, footer, Google profile, directories"],
        ["Insurance list", "Master sheet, insurance page, directories"]
      ),
    ],
    faqs: [
      {
        q: "Who should approve vendor changes at a small practice?",
        a: "The office manager or the owner, named in writing. One person is better than two, because two people can each assume the other one checked.",
      },
      {
        q: "Does a sign-off slow the vendor down?",
        a: "Slightly, by a few hours. The step only covers phone number, hours, providers, address and insurance, which change rarely, so most work is not affected.",
      },
      {
        q: "What counts as written approval?",
        a: "An email reply that says approved, with the date, in the same thread as the request. A spoken yes or a thumbs-up on a different message is easy to dispute.",
      },
      {
        q: "How often should we check that details still match?",
        a: "Once a month for the website, Google profile and one directory, plus a check the same day any approved change goes live.",
      },
      {
        q: "Can we fix the Google profile ourselves if the vendor is slow?",
        a: "Yes, if the practice owns the profile login. Google's help page on editing a Business Profile shows how to change hours and phone number directly.",
      },
    ],
    citations: [GBP_EDIT, GBP_RANKING],
    links: [
      { href: "/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends", label: "Handing Over Accounts", description: "What to get back when a vendor leaves." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "The monthly look at your profile." },
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "When a Provider Joins or Leaves", description: "Update every place." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1722
  {
    slug: "checking-the-website-and-google-profile-the-week-after-a-new-provider-joins-a-primary-care-practice",
    keyword: "checking the website and Google profile the week after a new provider joins a primary care practice with named steps for the office manager",
    category: "Checklist",
    title: "The Week-After Check When a New Provider Joins",
    metaTitle: "Week-After Check When a New Provider Joins a Practice",
    metaDescription:
      "A day-by-day check of the website and Google profile for the office manager in the week after a new provider joins a primary care practice. (561) 291-2681",
    answer:
      "In the week after a new provider joins, the office manager checks five places on set days: the team page, the Google profile, the booking path, insurance directories and the phone script. Each check takes about 10 minutes, and it catches missing names, wrong titles and stale listings before patients notice.",
    author: "Liam Costello",
    publishDate: "2026-11-10T18:20:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why the week after, and not the day of"),
      p(
        "The announcement and the first update usually happen in the first day or two. What goes wrong happens after: a directory that has not picked up the new name, a booking tool that still routes everyone to one provider, a Google profile that lists the old team. Those problems show up only if someone looks again."
      ),
      p(
        "This page is the follow-up check. It assumes the first round of updates is done, which our guide on [what to update when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice) lists in full. Here the question is whether the updates actually took."
      ),
      h2("Day 1: the team page and the provider page"),
      p(
        "Open the website on a phone and find the new provider from the home page without typing. Count the taps. Check the spelling of the name and credentials against the license or board document the provider gave you, not against the email signature. Confirm the photo matches the others in size and style."
      ),
      p(
        "If the provider is not yet seeing patients, the page should say a start date in plain words, not an empty schedule button."
      ),
      h2("Day 2: the Google profile"),
      p(
        "Open the business profile while signed in as the owner. Confirm that the practice's description, services and hours still match the website. If the practice uses individual provider listings, our guide on [practitioner versus practice listings](/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice) explains why a new provider should have a listing that points to the same phone number and website. Google's page on [editing a Business Profile](https://support.google.com/business/answer/3039617) shows where each field lives."
      ),
      h2("Day 3: the booking path"),
      p(
        "Call the office as if you were a new patient and ask for the new provider by name. Then try the online booking path. The call and the web form should land on the same answer. Test one more case: a patient who asks for 'the next available provider'."
      ),
      h2("Day 4: directories and insurance listings"),
      p(
        "Open the two directories patients use most in your area, and the insurance plans' provider search pages. Look for the new provider's name, specialty and the correct practice address. These pages are updated by the plan or the directory, not by you, so a missing name today often means a request needs to be filed. Our guide on [NPI registry and insurance directory accuracy](/guides/npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice) explains where that request goes."
      ),
      h2("Day 5: the phone script and the front desk"),
      p(
        "Read the new-patient phone script with the new provider in mind. Does it mention that provider? Does the front desk know the provider's title, start date and which visit types they see? A patient who asks and gets 'I'm not sure' will often call another office."
      ),
      h2("A one-page tracker"),
      table(
        ["Day and check", "Done when"],
        ["Day 1: team page and provider page on a phone", "Name, credentials and photo are correct and reachable in two taps"],
        ["Day 2: Google profile and any provider listing", "Hours, phone and website match; listing is claimed"],
        ["Day 3: phone call and online booking", "Both paths reach the same provider with the same answer"],
        ["Day 4: directories and insurance search pages", "Name appears, or a correction request is filed with a date"],
        ["Day 5: phone script and front desk", "Staff can say title, start date and visit types without checking"]
      ),
      h3("What to write down"),
      p(
        "Record three things for each check: the date, what you saw, and what you changed or asked someone to change. Keep it in the same place as your [monthly profile checklist](/guides/monthly-google-business-profile-maintenance-checklist), so the next provider's onboarding starts from a known routine."
      ),
      h2("What not to put on the page"),
      p(
        "Describe training and licenses only as the provider gave them to you and as a public record confirms. Avoid saying a new provider is the 'best' or 'most experienced', and avoid claims about outcomes. Those limits apply to every provider page, and our piece on [introducing a new provider without clinical claims](/guides/introducing-a-new-provider-to-patients-online-for-a-primary-care-practice-without-clinical-claims) shows wording that stays on the safe side."
      ),
    ],
    faqs: [
      {
        q: "Who should run the week-after check?",
        a: "The office manager, because they own the phone, the schedule and the update requests. The owner or the vendor can help, but one named person should sign off each day's step.",
      },
      {
        q: "How long does the check take?",
        a: "About 10 minutes per day for five days. The directory step may take longer if a correction request has to be filed.",
      },
      {
        q: "What if a directory still lacks the new provider after a week?",
        a: "File the correction with the directory or the insurance plan, write the date on your tracker and look again in two weeks. Those listings update on their schedule, not yours.",
      },
      {
        q: "Should the provider get their own Google listing?",
        a: "Sometimes. It depends on how the practice is set up, and a listing should use the practice phone number and website. Check Google's rules and the practitioner-versus-practice guide first.",
      },
      {
        q: "What should the front desk say before the provider starts?",
        a: "Give the start date and the visit types, and offer to book when the schedule opens. Do not describe results or compare the provider with anyone else.",
      },
    ],
    citations: [GBP_EDIT, GBP_RANKING],
    links: [
      { href: "/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website", label: "Provider Headshots and Team Photos", description: "Photos that match." },
      { href: "/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice", label: "New-Patient Phone Script", description: "What the front desk says." },
      { href: "/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page", label: "Choosing a Provider Page", description: "Help patients pick." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1723
  {
    slug: "what-a-primary-care-office-does-when-a-patient-finds-the-wrong-phone-number-for-the-practice-online",
    keyword: "what a primary care office should do when a patient says they found the wrong phone number for the practice online",
    category: "How-to",
    title: "When a Patient Finds a Wrong Practice Phone Number Online",
    metaTitle: "When a Patient Finds a Wrong Phone Number for a Practice",
    metaDescription:
      "What a primary care office does the same day a patient reports a wrong phone number online: find the source, fix it, and check every place. (561) 291-2681",
    answer:
      "Thank the patient, ask exactly where they saw the number, and write down the page and date. Then fix the source if you control it, request a correction if you do not, and check the website, Google profile and main directories the same day. Finally, add the place to your monthly check.",
    author: "Gio LaRoche",
    publishDate: "2026-11-10T18:30:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Treat it as a free alarm"),
      p(
        "A patient who tells you the number online was wrong did you a favor. For every patient who says so, others may have dialed it, reached a stranger or a dead line, and called somewhere else. One report is a sign that a wrong number is live today."
      ),
      p(
        "The answer is to find where it appears, not to argue about how they found it. Here is the order that works for a front desk or office manager."
      ),
      h2("Step 1: get the facts in 60 seconds"),
      p(
        "Ask three things, in plain words, and write them down: where did you see the number, what number was it, and when. A screenshot or a link is best. Do not ask for any detail about the patient's visit or health, because you do not need it to fix the number."
      ),
      h2("Step 2: find who controls that place"),
      table(
        ["Where the patient saw it", "Who can change it"],
        ["Your own website", "You or your web vendor; fix it the same day"],
        ["Your Google Business Profile", "The owner login; edit it directly"],
        ["A directory or listing site", "Claim the listing or submit its correction form"],
        ["An insurance plan's provider search", "The plan, through its provider update process"],
        ["An AI chatbot answer or a map app", "Fix your sources; ask the tool to refresh, see below"]
      ),
      h2("Step 3: fix what you control first"),
      p(
        "Start with your own website and your Google profile, because those are what other places copy from. Google's help page on [editing your Business Profile](https://support.google.com/business/answer/3039617) explains how to change the phone number. On the site, look in the footer, contact page, header button and any page that carries its own copy of the number. Our guide on [phone number format and click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) lists where numbers hide."
      ),
      p(
        "If the wrong number is one you recently changed, check whether a tracking number was added without being listed. Our guide on [call tracking numbers on a counseling practice website](/guides/call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number) explains how to use one without confusing Google."
      ),
      h2("Step 4: request corrections where you cannot edit"),
      p(
        "For directories and plans, claim the listing if you have not, and submit the correction with the right number and the practice address. Keep a screenshot of the old version, the date and the ticket number, because a correction can take days or weeks."
      ),
      p(
        "Some wrong numbers come from a different practice with a similar name. If that is the cause, our piece on [a similarly named practice and wrong-office calls](/guides/when-another-practice-has-a-similar-name-keeping-patients-from-calling-the-wrong-office-for-a-medical-practice) covers what to do."
      ),
      h2("Step 5: check that the fix took"),
      p(
        "Call the number shown online from a phone that is not the practice's. Search the practice name on a phone and tap the number in the result. Open the profile in a private window. Repeat the check the next morning, because some listings take time to refresh."
      ),
      h3("What to say back to the patient"),
      p(
        "A short note is enough: thank you for letting us know, the number is corrected, please call this one. If they ask how it happened, say you are checking the listings and do not guess about a cause."
      ),
      h2("Stop it from happening again"),
      ul(
        "Keep one master sheet with the correct number, address and hours, and update it first when anything changes.",
        "Add the place the patient reported to the monthly check in your [Google profile maintenance checklist](/guides/monthly-google-business-profile-maintenance-checklist).",
        "Record the report in a change log with the date, source and fix, so a pattern shows up if it repeats.",
        "If the number may have been flagged as spam by call-blocking tools, see our guide on [spam-flagged practice numbers](/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam)."
      ),
    ],
    faqs: [
      {
        q: "What should the front desk ask the patient?",
        a: "Where they saw the number, what number it was and when. Nothing about their visit or health is needed, and nothing about it should be written down.",
      },
      {
        q: "How fast should the wrong number be fixed?",
        a: "Your own website and Google profile the same day. Directories and plans depend on their process, so file the request that day and record the date.",
      },
      {
        q: "Can a wrong number come from a tool we do not control?",
        a: "Yes. Directories, plans, map apps and AI chatbot answers often copy data from other sources. Fix your own pages and profile first, then ask each outside source to update.",
      },
      {
        q: "How do we know the Google profile is correct?",
        a: "Open it while signed in as the owner and compare the phone number, hours and address with your master sheet. Then search your practice name on a phone and tap the number.",
      },
      {
        q: "Should we tell other patients about the wrong number?",
        a: "Usually not. Fix it and let the correct number appear. If a notice is needed, keep it to the correct number and the date, with no explanation of how it happened.",
      },
    ],
    citations: [GBP_EDIT, GBP_RANKING],
    links: [
      { href: "/guides/fix-wrong-information-about-your-practice-in-an-ai-chatbot-answer", label: "Fix Wrong Chatbot Answers", description: "When an AI answer is wrong." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls and Voicemail", description: "What callers hear." },
      { href: "/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change", label: "Marketing Change Log", description: "Trace a drop to a change." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1725
  {
    slug: "choosing-a-day-and-time-to-publish-website-changes-at-a-primary-care-practice-so-the-front-desk-is-not-caught-off-guard",
    keyword: "choosing a day and time to publish website changes so the front desk is not caught off guard at a primary care practice",
    category: "How-to",
    title: "Choosing a Day and Time to Publish Website Changes",
    metaTitle: "Choosing a Day and Time to Publish Website Changes",
    metaDescription:
      "How a primary care practice can pick a safe day and hour to publish website changes, tell the front desk first, and check the result. (561) 291-2681",
    answer:
      "Publish website changes mid-morning on a Tuesday or Wednesday, after the front desk has been told what changes and what patients may ask. Avoid Mondays, Fridays, the hour before closing and the day before a holiday, and check the live page within 15 minutes so a mistake is fixed while someone can help.",
    author: "Liam Costello",
    publishDate: "2026-11-10T18:40:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why the time of a change matters"),
      p(
        "A website edit looks private. To a front desk, it is not. A new phone menu, a changed hours line or a new booking button produces questions within minutes, and the person answering the phone may be the last to hear about it."
      ),
      p(
        "Picking the day and hour on purpose gives you two things: staff who are ready, and a time when someone is around to fix a mistake. This page is a short way to choose."
      ),
      h2("Days and hours to avoid"),
      table(
        ["Avoid", "Why"],
        ["Monday morning", "The phones are busiest and the office is catching up on the weekend."],
        ["Friday afternoon", "A mistake can sit unfixed all weekend with no one watching."],
        ["The hour before closing", "No time to check, and nobody to call if the form breaks."],
        ["The day before a holiday or closure", "Staff are thinking about the break, and a wrong detail lasts longer."],
        ["During a staff meeting or lunch closure", "The people who need to know are not at the desk."]
      ),
      p(
        "Mid-morning on Tuesday or Wednesday is usually the best window. The phones are steady, the owner and vendor are at work, and there are days left in the week to catch anything you missed."
      ),
      h2("A five-step routine"),
      ol(
        "Write the change in one sentence for the front desk: what is different, and what a patient might ask because of it.",
        "Tell the front desk the day before, in a short message or a minute at the morning huddle, and say what time the change goes live.",
        "Have one named person ready during the hour after the change, with the vendor or editor reachable.",
        "Publish, then open the live page on a phone within 15 minutes and look at the change itself and the page around it.",
        "Write the date and time in your [marketing change log](/guides/marketing-change-log-for-a-medical-practice-so-a-drop-can-be-traced-to-a-change), so a later drop in calls can be traced."
      ),
      h2("Changes that need extra care"),
      h3("Phone, hours and holiday notices"),
      p(
        "These changes should go live before the change takes effect, not on the same day. Our guides on [holiday and closure notices](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) and the [summer hours notice](/guides/summer-hours-and-schedule-change-notice-for-a-primary-care-practice) give timing and wording."
      ),
      h3("Forms and booking buttons"),
      p(
        "A form that stops working does not show an error to the patient. They just leave. After publishing, submit a test using your normal test method and confirm the message reaches the right inbox. Do not use a real person's details."
      ),
      h3("Page names and web addresses"),
      p(
        "If a change moves a page or renames a web address, the old address should send visitors to the new one. Google explains how to [set up redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects) so visitors and search engines land in the right place. Do these changes early in the week, when someone can check for broken links."
      ),
      h2("Have a way back"),
      p(
        "Before a larger change, save a copy of the page or ask the vendor how to restore the earlier version. Our guide on [backups, uptime monitoring and maintenance](/guides/website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice) explains what a practice should expect. If something goes wrong, restore first and investigate afterward."
      ),
      h2("What to tell the front desk"),
      p(
        "Keep the note to three lines: what changed, what patients may ask, and who to tell if something looks wrong. If a patient says they see something different from what staff see, ask for the page or a screenshot, and do not guess."
      ),
    ],
    faqs: [
      {
        q: "What is the best day to publish website changes at a medical practice?",
        a: "Tuesday or Wednesday mid-morning is usually safest. Staff are in, the phones are steady and there are working days left to catch problems.",
      },
      {
        q: "Should the front desk be told before every change?",
        a: "Tell them before any change patients can notice: hours, phone, providers, forms, prices or booking. Small typo fixes do not need an announcement.",
      },
      {
        q: "How soon should I check a change after publishing?",
        a: "Within 15 minutes, on a phone and on a computer. Look at the changed part and the page around it, and submit a test through any form that was touched.",
      },
      {
        q: "Is a weekend good for big website changes?",
        a: "Usually not for a practice with patients calling. If the change is large, a quiet evening can work only when someone is available the next morning to check it.",
      },
      {
        q: "What if a change goes wrong?",
        a: "Restore the previous version first, tell the front desk what patients may see, and then work out the cause. Write the incident in your change log.",
      },
    ],
    citations: [GOOGLE_REDIRECTS, GBP_EDIT],
    links: [
      { href: "/guides/medical-website-launch-seo-checklist", label: "Website Launch SEO Checklist", description: "Before a big go-live." },
      { href: "/guides/how-to-migrate-a-medical-practice-website-to-a-new-domain", label: "Migrating to a New Domain", description: "A bigger change, step by step." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call Button and Mobile Layout", description: "Check the phone view." },
      LOC,
    ],
  },
];
