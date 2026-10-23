// -- Guides batch 23 - 2026-10-21 --
// Guide/AEO pages from the Command Center queue (rows 1141-1145 and 1176-1185), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides' body prose.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const HHS_PRIVACY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA Privacy Rule guidance",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
};
const HHS_MIN_NECESSARY = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA minimum necessary requirement",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html",
};
const HHS_TPO = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Uses and disclosures for treatment, payment and health care operations",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/disclosures-treatment-payment-health-care-operations/index.html",
};
const HHS_1557 = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Section 1557 nondiscrimination and language access",
  href: "https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html",
};
const UNITED_WAY_211 = { publisher: "211", label: "211.org community resource lookup", href: "https://www.211.org/" };
const MEDICARE_AWV = {
  publisher: "Medicare.gov",
  label: "Yearly wellness visits",
  href: "https://www.medicare.gov/coverage/yearly-wellness-visits",
};
const CMS_NOSURPRISES_HOME = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act overview",
  href: "https://www.cms.gov/nosurprises",
};
const FCC_TEXTS = {
  publisher: "Federal Communications Commission",
  label: "Stop unwanted robocalls and texts",
  href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_MOBILE = {
  publisher: "Google Search Central",
  label: "Mobile-first indexing best practices",
  href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
};
const GOOGLE_HTTP = {
  publisher: "Google Search Central",
  label: "HTTP status codes, network and DNS errors",
  href: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors",
};
const GOOGLE_SPAM = {
  publisher: "Google Search Central",
  label: "Spam policies for Google web search",
  href: "https://developers.google.com/search/docs/essentials/spam-policies",
};
const GOOGLE_LOCAL = {
  publisher: "Google Search Central",
  label: "Local business structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const GOOGLE_HREFLANG = {
  publisher: "Google Search Central",
  label: "Managing multi-regional and multilingual sites",
  href: "https://developers.google.com/search/docs/specialty/international/localized-versions",
};
const GBP_SERVICE_AREA = {
  publisher: "Google Business Profile Help",
  label: "Add or edit your service areas",
  href: "https://support.google.com/business/answer/9157481",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const WCAG_TARGET = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding target size (minimum)",
  href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
};
const CMS_NOSURPRISES = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act: understand costs in advance",
  href: "https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance",
};
const HEALTHCARE_PREVENTIVE = {
  publisher: "HealthCare.gov",
  label: "Preventive care benefits for adults",
  href: "https://www.healthcare.gov/preventive-care-benefits/",
};
const HRSA_FIND = {
  publisher: "Health Resources and Services Administration",
  label: "Find a health center",
  href: "https://findahealthcenter.hrsa.gov/",
};
const PCI = {
  publisher: "PCI Security Standards Council",
  label: "Payment card industry security standards",
  href: "https://www.pcisecuritystandards.org/",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};
const NAMI = { publisher: "National Alliance on Mental Illness", label: "NAMI", href: "https://www.nami.org/" };
const NIMH_HELP = {
  publisher: "National Institute of Mental Health",
  label: "Find help for mental illnesses",
  href: "https://www.nimh.nih.gov/health/find-help",
};
const SAMHSA = {
  publisher: "SAMHSA",
  label: "FindTreatment.gov and the National Helpline",
  href: "https://www.samhsa.gov/find-help/national-helpline",
};
const HEALTHFINDER = {
  publisher: "Office of Disease Prevention and Health Promotion",
  label: "MyHealthfinder",
  href: "https://health.gov/myhealthfinder",
};

export const guidesPartTwentySix: Guide[] = [
  // ---------------------------------------------------------------- 1141
  {
    slug: "click-to-call-button-and-mobile-layout-for-a-medical-practice-website",
    keyword: "click-to-call button and mobile layout for a medical practice website",
    category: "How-to",
    title: "Click-to-Call Button and Mobile Layout for a Medical Practice Website",
    metaTitle: "Click-to-Call Button and Mobile Layout for a Practice Site",
    metaDescription:
      "How to place a tap-to-call button, size it for thumbs and keep the page fast on phones so new patients can reach your front desk. Call (561) 291-2681.",
    answer:
      "A click-to-call button is a link that starts with tel: and shows the real phone number. Put one at the top of every page and again after the main content, make it at least 44 pixels tall, and keep the number as visible text too. Then count taps so you know the button is working.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("The phone is still the front door"),
      p(
        "Most people who search for a doctor or a counselor do it on a phone, and many of them would rather talk to a person than fill in a form. If the number is buried in the footer, or shown as a picture, or typed as plain text that cannot be tapped, the visitor has to memorize seven digits, switch apps and type them in. Some will not bother. Older visitors benefit most from a large, clearly labeled call button, a point we expand on in our guide to a [senior-friendly website layout with large text and caregiver access](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access)."
      ),
      p(
        "A tap-to-call button removes that work. It is also one of the cheapest changes a practice can make, because it needs no new content, only a link and a little care about where it sits."
      ),
      h2("How the link is written"),
      p(
        "A tap-to-call link is an ordinary link whose address starts with tel: followed by the number in international form, with no spaces or dashes, for example tel:+15612912681. The words people see can be anything, but the safest choice is the number itself, because a desktop visitor cannot tap anything and needs to read the digits."
      ),
      ul(
        "Use the same number everywhere, matching your Google Business Profile exactly.",
        "Show the number as text inside the button, such as Call (561) 291-2681, and not only a phone icon.",
        "Add a short accessible label if the button has an icon, so a screen reader announces a call to the office and not just a link.",
        "Never put the number inside an image, because it cannot be tapped, copied or read aloud."
      ),
      h2("Where to put it"),
      table(
        ["Spot on the page", "What to do"],
        ["Top of the page on a phone", "A button or a bar in the header that stays visible while scrolling, without covering the text."],
        ["After the answer box or intro", "A second button right where a reader decides to act."],
        ["End of every long page", "A final button above the footer with the office hours beside it."],
        ["Contact and location pages", "The button, the address, the hours and a map link together, so nothing needs a second tap."],
        ["Thank-you and confirmation pages", "A line saying where to call if the visit needs to change."]
      ),
      p(
        "Do not put four buttons in the first screen. One clear button plus the number in the header is enough, and a crowded top of page pushes the actual answer below the fold."
      ),
      h3("Size and spacing"),
      p(
        "Fingers are bigger than cursors. The accessibility guidance on [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) sets a floor of 24 CSS pixels, and most designers aim for 44 by 44 or larger on the main call button. Leave space around it so a tap near the edge does not land on a neighboring link."
      ),
      h3("Hours and after-hours"),
      p(
        "A button that rings an empty office at night teaches visitors that calling does not work. Show the hours next to it, and make sure the voicemail or phone menu does the right thing when the office is closed. Our guide to [after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) covers what the greeting should say, and our piece on [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) explains how to avoid losing a new patient in a menu."
      ),
      h2("Keep the page quick"),
      p(
        "The button only helps if the page loads before the visitor gives up. Compress images, avoid heavy sliders above the fold and check the page on a real phone over a mobile connection, not only on office wifi. Google indexes the mobile version first, so the mobile layout is the one that counts, as the guidance on [mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) explains."
      ),
      h2("Count the taps"),
      p(
        "Set up your analytics to record a tap on any tel: link as an event, then compare the count to the calls the front desk actually receives. Do not record the caller's number or anything about the visit. If you use a call-tracking number, make sure the number on the website, the Google profile and the directories is handled the way your analytics provider documents, so the public listing stays consistent."
      ),
      p(
        "Review the numbers monthly. A page with many visitors and no taps may be hiding the button, or may answer the question so well that nobody needs to call. Both are worth knowing."
      ),
    ],
    faqs: [
      {
        q: "Does a click-to-call button work on a computer?",
        a: "On most desktops it opens a calling app if one is installed, or nothing at all. That is why the number should also appear as readable text next to or inside the button, so a visitor on a laptop can still see it and dial from their phone.",
      },
      {
        q: "Should the button say Call Now or show the number?",
        a: "Show the number. A label such as Call (561) 291-2681 tells the visitor what will happen, works for a desktop reader, and avoids the pressure that Call Now can carry on a medical page. You can add a short hint such as Call us to book.",
      },
      {
        q: "Is a floating call bar a good idea?",
        a: "A slim bar fixed to the bottom of a phone screen can work if it is small, does not cover text or form fields, and can be dismissed. Test it on several phone sizes, because a bar that hides the page content costs more than it earns.",
      },
      {
        q: "Can the button be tracked without collecting patient information?",
        a: "Yes. Record only that a tap happened and which page it came from, never the caller or the reason. Keep tracking tags off pages that collect health details, and follow the privacy guidance for your analytics tools.",
      },
      {
        q: "How many call buttons should a page have?",
        a: "Usually two or three on a long page: one near the top, one after the main answer and one at the end. On a short page, one near the top and one at the bottom is enough. More than that becomes noise.",
      },
    ],
    citations: [WCAG_TARGET, GOOGLE_MOBILE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls", description: "What the voicemail should say." },
      { href: "/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients", label: "Phone Menus And Call Routing", description: "Keep new patients from dropping out." },
      { href: "/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam", label: "Spam-Flagged Numbers", description: "Check that callers see a real office." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1142
  {
    slug: "behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "behavioral health referral partner page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Behavioral Health Referral Page for a Primary Care Practice Without Clinical Claims",
    metaTitle: "Behavioral Health Referral Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain its referral route to counseling and behavioral health partners without clinical claims. Call (561) 291-2681.",
    answer:
      "A behavioral health referral page tells patients how the practice connects them with counseling or psychiatry: who asks for the referral, how long it usually takes, what insurance may require and where to go in a crisis. It names partners only with their permission and makes no promise about results.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Patients ask, and then they stall"),
      p(
        "A primary care visit is often where a person first says out loud that they are not doing well. The doctor suggests talking to someone, hands over a name, and the patient goes home. Whether the call ever gets made depends on how easy the next step feels."
      ),
      p(
        "A referral page does not replace the conversation in the exam room. It gives the patient something to read at home, at their own pace, so the suggestion turns into a phone call."
      ),
      h2("What the page should explain"),
      ol(
        "How a referral starts: the patient asks, the clinician suggests it, or the patient may contact a counselor directly without one.",
        "Who in the office handles it, and the number to call with questions.",
        "Whether the insurance plan needs a referral or an approval before the first visit, and where to check.",
        "How long the office usually takes to send the paperwork, stated as a range you can keep.",
        "What the patient should expect to hear from the counseling office, and who to call if nothing arrives.",
        "Where to turn right away if the situation feels unsafe, with the 988 Lifeline and 911."
      ),
      p(
        "Keep the language about the process, not the person. The page should read the same whether the reader is worried about sleep, grief or work stress. It should never describe symptoms or suggest a diagnosis."
      ),
      h2("Partners: who you can name"),
      p(
        "Listing outside counselors is helpful, but it carries obligations. Get the partner's written agreement to be listed, use their name and contact details exactly as they publish them, and do not describe their results or quality. Say that the practice has a working relationship with them, if it does, and that patients may choose anyone."
      ),
      table(
        ["If you want to say", "A safer way to say it"],
        ["Our counselors will fix your anxiety", "We can send a referral to a counseling office that sees adults. You choose who to see."],
        ["Best therapists in the area", "These local offices have agreed to be listed. We do not rank them."],
        ["Same-week appointments guaranteed", "Many offices can schedule within a few weeks, but availability changes. Call to ask."],
        ["Free counseling through our office", "Ask your insurance plan whether counseling visits are covered and what they cost."]
      ),
      h3("Privacy on the page"),
      p(
        "Referral details are sensitive. The page should say that the office shares only the information needed for the referral, which matches the idea behind the [minimum necessary rule](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html), and that patients can ask what was sent. Do not put a referral request form on the page unless it is on a secure, privacy-reviewed system. A phone number is safer than a form that asks about feelings. Counseling practices that receive these referrals can publish the other side of the exchange on a [referral page for a counseling practice](/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer) with the same privacy limits."
      ),
      h3("The loop back to the practice"),
      p(
        "Tell patients how to let the office know they have started, if they wish to. Some patients want their primary care team in the loop and some do not. Offer the choice plainly. A related page, our guide to a [caregiver and family member communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice), shows how to word consent about who may be told what."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Link the referral page from the services page, the visit-types page and the specialist referral page. If the practice also takes referrals in, our article on a [referral partner page](/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you) explains that direction, and the page for [patients who need a specialist](/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice) covers the medical side. Keep behavioral health on its own page so a patient does not have to scroll past cardiology to find it."
      ),
      p(
        "Check every outside link and phone number every quarter. A counseling office that moved or closed is a dead end for the one visitor who finally decided to reach out."
      ),
    ],
    faqs: [
      {
        q: "Can the page list local counselors by name?",
        a: "Yes, with their agreement. Use the name, address and phone number the office publishes, say that patients may choose anyone, and do not rank or praise them. Review the list every quarter and remove anyone who has moved or stopped taking new clients.",
      },
      {
        q: "Should the page say the practice offers counseling?",
        a: "Only if it truly does, with licensed clinicians who are named on the site. If counseling happens elsewhere, say the practice refers to outside offices. Blurring the two creates confusion about who is responsible for the care.",
      },
      {
        q: "Is a referral form safe to put online?",
        a: "Only on a secure system the practice has reviewed for privacy. A public contact form that asks about feelings or symptoms invites patients to type health details into a place that may not protect them. A phone number is the safer default.",
      },
      {
        q: "What should the page say about emergencies?",
        a: "State that the office is not a crisis service. Give the 988 Suicide and Crisis Lifeline by call or text, and 911 for immediate danger, near the top of the page where it cannot be missed, not in small print at the bottom.",
      },
      {
        q: "Does a primary care practice need a separate page for mental health?",
        a: "If patients ask about it often, yes. A single page that explains the referral route is easier to keep accurate than scattered mentions, and it gives search engines and voice assistants one clear place to point.",
      },
    ],
    citations: [HHS_MIN_NECESSARY, LIFELINE, NIMH_HELP],
    links: [
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Page", description: "The medical referral route." },
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Family Communication Policy", description: "Who may be told what." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "How to word emergency help." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1143
  {
    slug: "back-to-school-counseling-availability-announcement-for-a-counseling-practice",
    keyword: "back-to-school counseling availability announcement for a counseling practice",
    category: "Playbook",
    title: "Back-to-School Counseling Availability Announcement for a Counseling Practice",
    metaTitle: "Back-to-School Counseling Availability Announcement",
    metaDescription:
      "How a counseling practice can announce after-school and evening openings each fall on its site and Google profile without promises. Call (561) 291-2681.",
    answer:
      "A back-to-school announcement tells parents and students which after-school, evening and video times are open this term, how to ask for them and what to expect on the first call. Post it on the website and Google profile, date it, update it as slots fill, and keep clinical promises out of the wording.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Why the fall calendar matters"),
      p(
        "Families rebuild their routines in August and September. School start times, practice schedules and carpools decide which hours are possible, and a parent searching for a counselor at that point is asking a practical question: when can my child come, and how soon. A short announcement that answers it gets read."
      ),
      p(
        "It also helps the practice. Late afternoon slots fill first, and saying so early sends the families who can only come at 4:00 to a waitlist instead of leaving them to guess."
      ),
      h2("What to put in the announcement"),
      ul(
        "The term it covers, for example this fall, with the date you last updated it.",
        "The days and times set aside for school-age clients, and whether video sessions are available.",
        "Which ages the clinicians see and which they do not, in plain words.",
        "How a parent starts: phone, request form or the free consultation call.",
        "How long a first reply takes and what the first call includes.",
        "What happens when the openings are full, including the waitlist."
      ),
      p(
        "Resist the urge to describe problems students face. The announcement is about logistics. Words about stress, anxiety or school refusal read like a clinical claim and are not necessary for a parent to decide whether to call."
      ),
      h2("Where it should live"),
      table(
        ["Place", "What to post"],
        ["A dedicated page or a dated section on the services page", "The full version, with times, ages and how to start."],
        ["Google Business Profile post", "Two sentences, a photo of the office and a call button. Never delete older posts; add a new one when it changes."],
        ["Appointment confirmation text", "One line pointing to the page for families who need after-school times."],
        ["Email to your own client list", "A short note that only mentions availability, never anything about a client's care."],
        ["Voicemail greeting", "A single sentence about new openings and where to find details."]
      ),
      h3("Parents and consent"),
      p(
        "A parent calling about a minor needs to know early who can consent and how privacy works for older teens. Link the announcement to your page on [teen therapy for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims) so those questions are answered before the first call, and to the page about [college student counseling](/guides/college-student-counseling-page-for-a-counseling-practice-without-clinical-claims) if you see older students."
      ),
      h3("Keep it honest as it fills"),
      p(
        "An announcement that still says openings available in November looks careless. Assign one person to update it every week or two, or take down the specific times and say to call for current availability. Our guide to a [waitlist page](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) shows how to word the full-caseload version without making families feel turned away."
      ),
      h2("What to leave out"),
      ul(
        "Promises about grades, behavior or mood.",
        "Photos of children, even with permission, unless a lawyer has reviewed the release.",
        "Words that single out a school, a teacher or a student.",
        "Crisis language that suggests the office can respond to an emergency."
      ),
      p(
        "Include the 988 Lifeline and a line saying the office is not an emergency service. A parent reading late at night may need that more than they need a Tuesday opening."
      ),
      p(
        "After the term settles, archive the page by changing its date and wording instead of deleting it. Next fall you can refresh the same URL, which keeps the history and avoids creating a new thin page each year."
      ),
    ],
    faqs: [
      {
        q: "Should the announcement mention specific times?",
        a: "Only if you can keep them accurate. Real times help families decide, but a stale list damages trust. If openings change faster than you can edit, name the days and say to call for the current times.",
      },
      {
        q: "Can we post it on social media?",
        a: "Yes, as a plain availability notice. Do not tag schools or students, do not show clients, and do not reply to comments with anything that could confirm someone is a client. Move any conversation to the phone.",
      },
      {
        q: "Do we need a new page every year?",
        a: "No. Refresh one page with the new term and date. A single address that is updated builds more search value than a new thin page each August, and old links keep working.",
      },
      {
        q: "How do we describe the ages we see?",
        a: "State them as numbers, such as ages 12 and up, and say whether a parent attends the first visit. Do not describe who is a good fit based on a problem, because that edges into clinical advice.",
      },
      {
        q: "What if a parent says it is urgent?",
        a: "Give the 988 Lifeline and 911 on the page and in the voicemail, and tell the front desk to give the same information on the phone. The office is not a crisis service and should say so clearly without alarming the caller.",
      },
    ],
    citations: [LIFELINE, NIMH_HELP, SAMHSA],
    links: [
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page", description: "Consent and privacy for parents." },
      { href: "/guides/college-student-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "College Student Counseling", description: "A page for older students." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page", description: "What to say when you are full." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1144
  {
    slug: "site-search-and-404-page-for-a-medical-practice-website",
    keyword: "site search and 404 page for a medical practice website",
    category: "How-to",
    title: "Site Search and 404 Page for a Medical Practice Website",
    metaTitle: "Site Search and 404 Page for a Medical Practice Website",
    metaDescription:
      "How to set up a small site search box and a helpful 404 page so patients who land on a missing page still find hours and the phone. Call (561) 291-2681.",
    answer:
      "A helpful 404 page tells the visitor the page is gone, links to the home page, services, locations and the phone number, and still returns a 404 status code. A site search box is optional for a small practice, but if added it should search only public pages and never record what patients type.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Two small features, two different jobs"),
      p(
        "Most small practice websites have fewer than fifty pages, so a search box is rarely essential. A good 404 page, on the other hand, matters on every site, because old links live forever in directories, emails and bookmarks."
      ),
      p(
        "This guide covers both, with the 404 page first because it fixes a problem every practice has."
      ),
      h2("The 404 page that helps"),
      p(
        "When a visitor follows a dead link, they see whatever your site shows for a missing page. The default is a blank error that sends them back to Google. A custom page keeps them on your site and gets them to a phone number."
      ),
      ol(
        "Say plainly that the page was not found, in the first line, so nobody wonders whether the site is broken.",
        "Offer the three or four things people want most: services, locations or directions, hours and how to call.",
        "Put a tap-to-call button with the number written out beside it.",
        "Link to the home page and the contact page.",
        "If you have a search box, show it here.",
        "Leave out jokes and cartoons. A patient who is looking for an office does not need cleverness."
      ),
      h3("The status code matters"),
      p(
        "The page must return the HTTP status 404, not 200. A missing page that returns 200 is called a soft 404, and it confuses Google about which pages exist. Google's documentation on [HTTP status codes](https://developers.google.com/search/docs/crawling-indexing/http-network-errors) explains the difference. You can check yours by opening a made-up address and looking at the status in the browser's developer tools."
      ),
      p(
        "For pages that moved, use a redirect, not a 404. Our walkthrough of [finding and fixing broken links](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) shows how to find the old addresses people still use."
      ),
      h2("Do you need site search?"),
      table(
        ["Practice size", "Search box?"],
        ["Under 30 pages", "Probably not. A clear menu and a good 404 page cover it."],
        ["30 to 100 pages, with many guides", "Useful. Patients looking for forms, billing or a specific service benefit."],
        ["Over 100 pages", "Yes, and test it monthly, because poor results are worse than none."]
      ),
      p(
        "If you add one, search only public pages. Never connect it to the patient portal, forms or any area behind a login."
      ),
      h2("Privacy and tracking"),
      p(
        "A search box invites patients to type what is on their mind, and that may include a condition or a medication. Those words should not be sent to a third-party analytics tool. Turn off any setting that records search terms, or strip them from the page address, and follow the guidance in the [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html) for pages where patients may share health details."
      ),
      h3("Add a hint, not a diagnosis"),
      p(
        "The search placeholder should say something neutral, such as Search forms, hours or services. Do not suggest symptoms or conditions in the hint text."
      ),
      h2("Test it like a patient"),
      ul(
        "Type a made-up address and confirm the 404 page appears with the right status.",
        "Try the five questions patients ask the front desk most, and see if the search finds the right page.",
        "Open the 404 page on a phone and tap every link.",
        "Check that the phone button works and the number matches your Google profile.",
        "Repeat after every redesign or migration."
      ),
      p(
        "Also compare against the list in our guide on [internal linking](/guides/internal-linking-for-a-medical-practice-website), because the pages you point to from a 404 should be the same ones your site treats as most important."
      ),
    ],
    faqs: [
      {
        q: "What is a soft 404 and why does it matter?",
        a: "A soft 404 is a missing page that still returns a success code, so Google thinks it is real. It wastes crawl effort and can hurt how the rest of the site is understood. The fix is to return a true 404 status with a helpful message.",
      },
      {
        q: "Should the 404 page redirect to the home page?",
        a: "No. Sending every missing address to the home page hides the error from Google and confuses visitors who expected something specific. Redirect a moved page to its replacement, and show the 404 page for pages that are truly gone.",
      },
      {
        q: "Can a free search plugin be used on a practice site?",
        a: "It can, if it searches only public pages, does not send queries to an outside company and does not log what visitors type. Read the plugin's data policy before installing it, and test it on a phone.",
      },
      {
        q: "How often should we check for 404 errors?",
        a: "Monthly is enough for most practices. Google Search Console lists pages it could not find, and a quick scan shows whether an old link needs a redirect. Check right after any change to page addresses.",
      },
      {
        q: "Does a 404 page hurt search rankings?",
        a: "Having some 404 pages is normal and does not hurt a site. Problems come when important pages return errors by accident, or when many soft 404s are reported. A helpful custom page also keeps visitors from leaving.",
      },
    ],
    citations: [GOOGLE_HTTP, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website", label: "Find And Fix Broken Links", description: "Redirect the old addresses." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking", description: "Which pages to point to." },
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation Menu And Footer", description: "Help patients find things." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1145
  {
    slug: "sliding-scale-and-reduced-fee-note-for-a-primary-care-practice-without-discounting-claims",
    keyword: "sliding-scale and reduced-fee note for a primary care practice without discounting claims",
    category: "How-to",
    title: "Sliding-Scale and Reduced-Fee Note for a Primary Care Practice Without Discounting Claims",
    metaTitle: "Sliding-Scale and Reduced-Fee Note for a Primary Care Site",
    metaDescription:
      "How a primary care practice can write a short note about reduced fees and payment help without discount promises or misleading claims. Call (561) 291-2681.",
    answer:
      "A reduced-fee note should say what the practice actually offers, who asks for it, what the office needs to decide and where to find other low-cost care. It should avoid words like discount, free or guaranteed, never imply the offer applies to insured patients, and be reviewed before it goes live.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("A note, not an advertisement"),
      p(
        "Some primary care practices have a way to lower the cost of a visit for a patient who cannot afford the full fee. It may be a payment plan, a reduced self-pay rate or a case-by-case decision by the owner. Patients rarely ask for it because they do not know it exists, and the front desk cannot always explain it the same way twice."
      ),
      p(
        "A short note on the website fixes that. It is not a marketing page. It is a plain statement that help may be available and a description of how to ask."
      ),
      h2("Decide the policy before you write"),
      p(
        "The wording only works if the practice has a real, consistent policy behind it. Settle these questions first, in writing, and have an advisor look at them if insurance contracts are involved."
      ),
      ol(
        "Who is eligible: self-pay patients only, or others? The practice should check how any reduced fee interacts with its insurance contracts.",
        "How a patient asks: a call, a form at check-in, a conversation with the manager?",
        "What the office may ask for to decide, and what it will not.",
        "Who decides, how quickly, and whether the decision is the same for everyone in the same situation.",
        "What the reduced fee covers: visits only, or labs and procedures too?"
      ),
      p(
        "Consistency matters for fairness. If two patients with the same circumstances get different answers, the note will read as a promise that was not kept."
      ),
      h2("Words to use and words to avoid"),
      table(
        ["Avoid", "Use"],
        ["Discount visits for everyone", "Help with the cost of a visit may be available. Ask the office how it works."],
        ["Free care if you cannot pay", "We cannot promise free care, but we will talk through options with you."],
        ["Lowest prices in town", "Describe your own prices and leave comparisons out."],
        ["Guaranteed approval", "The office reviews each request and tells you what it can offer."],
        ["Special rate for the uninsured", "Self-pay patients can ask about the self-pay fee and payment plans."]
      ),
      p(
        "Keep the note short, about a hundred to one hundred fifty words, and place it on the billing page with a link from the new patient page. Our guide to [publishing self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) explains how to show a price list, and the [billing and payment questions page](/guides/billing-and-payment-questions-page-for-a-medical-practice) is the natural neighbor."
      ),
      h3("Estimates for self-pay patients"),
      p(
        "Federal rules give uninsured and self-pay patients the right to ask for a good faith estimate of the expected cost before a scheduled visit. The CMS page on [understanding costs in advance](https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance) describes the process. If your practice follows it, one sentence on the note saying so is useful. If your practice has not set it up, fix that before mentioning it."
      ),
      h3("Point to other low-cost care"),
      p(
        "A fair note admits that the office cannot help everyone. Link the HRSA tool for [finding a health center](https://findahealthcenter.hrsa.gov/), which lists federally supported centers that offer care on a sliding fee scale based on income, and mention 211 for local assistance. Patients who are turned away with nowhere to go remember it."
      ),
      h2("Privacy and dignity"),
      p(
        "Do not ask for income documents through a web form or email. Decide what must be provided, collect it in person or by a secure method, and keep it out of the medical chart. Train the front desk to explain the process in private, not across a crowded waiting room."
      ),
      p(
        "Review the note yearly with the fee schedule. When prices change, update it the same day, since an old number on a billing page becomes an argument at the desk."
      ),
    ],
    faqs: [
      {
        q: "Can the practice use the phrase sliding scale?",
        a: "Only if the practice really adjusts fees by income using a defined method. If help is decided case by case, say reduced-fee options may be available instead. Using a term that sounds formal without a method behind it sets the wrong expectation.",
      },
      {
        q: "Does a reduced fee affect insurance billing?",
        a: "It can. Contracts and payer rules may restrict how a practice discounts what it charges insured patients. Have your billing advisor check the policy and say on the page that the note applies to self-pay patients unless told otherwise.",
      },
      {
        q: "Should the note list a price?",
        a: "If the practice has a standard self-pay price, list it on the billing page and link to it. Do not put a reduced price on the note unless it is fixed, because a figure that varies by person is a promise someone will quote back.",
      },
      {
        q: "Is it appropriate to mention community health centers?",
        a: "Yes. Pointing to the HRSA health center finder and 211 shows that you care about access and gives patients a next step if your office cannot help. Keep the language neutral and do not rank or compare the centers.",
      },
      {
        q: "Who should answer when a patient asks about it?",
        a: "Choose one or two trained people, usually the practice manager and a billing lead, so every patient hears the same explanation. Write a short script, keep the conversation private and record the decision in the billing system, not the clinical chart.",
      },
    ],
    citations: [CMS_NOSURPRISES, HRSA_FIND, UNITED_WAY_211],
    links: [
      { href: "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website", label: "Publishing Self-Pay Prices", description: "Show a price list the right way." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Page", description: "Answer the common questions." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "The counseling version." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1176
  {
    slug: "bilingual-spanish-english-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "bilingual Spanish-English counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Bilingual Spanish-English Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Bilingual Spanish-English Counseling Page for a Practice",
    metaDescription:
      "How a counseling practice can publish an honest Spanish and English page: who speaks Spanish, what is offered and how to call. Call (561) 291-2681.",
    answer:
      "A bilingual counseling page should say which clinicians conduct sessions in Spanish, whether paperwork and reminders are also in Spanish, and how to book. Write the Spanish version by a fluent person, not by machine translation alone, and claim only the language ability the clinician actually has.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Language is part of access"),
      p(
        "A person who is more comfortable in Spanish may search in Spanish, call a practice and hang up when the greeting is only in English, or arrive for a first session and discover that the intake forms are all English. Each step loses someone who wanted to come."
      ),
      p(
        "A bilingual page cannot fix every step, but it tells the reader early that the practice is reachable in their language and shows exactly how far that goes."
      ),
      h2("Say exactly what you offer"),
      p(
        "Language ability varies. One clinician may conduct full sessions in Spanish while another can only greet clients and rely on an interpreter. The page must reflect the true situation for each person and each service. Overstating it is both an honesty problem and a care problem, since a client in a vulnerable moment needs to be understood."
      ),
      table(
        ["Part of the visit", "What to say honestly"],
        ["Sessions", "Name which clinicians conduct sessions fully in Spanish and for which ages."],
        ["Phone and front desk", "Say whether a Spanish speaker answers or whether a call-back is needed, and the hours."],
        ["Forms and consent", "State which documents exist in Spanish and which are English only."],
        ["Reminders", "Offer texts and emails in the client's preferred language if your system can send them."],
        ["Billing", "Say whether statements and the insurance help are available in Spanish."]
      ),
      p(
        "If something is not available, say so and say what you do instead. A page that says we can do the first call in Spanish and will arrange an interpreter for forms is better than a page that implies everything is translated."
      ),
      h2("Writing the Spanish"),
      ol(
        "Have a fluent writer prepare the Spanish text, ideally someone familiar with the local community, since word choices differ across regions.",
        "Use plain, warm Spanish at a reading level near an eighth-grade level, and avoid clinical or legal language.",
        "Do not paste in machine translation without a human check, especially on consent and privacy statements.",
        "Keep the English and Spanish versions equal in meaning, with the same phone number, fees and hours.",
        "Use the formal usted unless your community guidance says otherwise."
      ),
      h3("Page structure for search"),
      p(
        "Give the Spanish version its own address, such as a page under the counseling section, and label the language in the code. Google's overview of [multilingual sites](https://developers.google.com/search/docs/specialty/international/localized-versions) explains how to connect the two versions so each is shown to the right reader. Do not auto-redirect visitors by browser language, because some people prefer the other version."
      ),
      p(
        "Our article on [bilingual SEO for a Florida medical practice](/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice) covers the technical side across a whole site, and the guide to [listing languages spoken and interpreter access](/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile) explains how to show the same facts on Google."
      ),
      h3("Interpreters and rights"),
      p(
        "Practices that receive federal funds have duties around language access under Section 1557, summarized on the HHS page about [nondiscrimination and language access](https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html). Have a lawyer or compliance advisor tell you what applies to you. Do not ask a client's family member or child to interpret."
      ),
      h2("Crisis information in both languages"),
      p(
        "The 988 Lifeline offers support in Spanish, and the page should state how to reach it in both versions. Keep the crisis box at the top of the Spanish page where it is as prominent as on the English one."
      ),
      p(
        "Check the Spanish page whenever the English one changes. Pages drift apart quietly, and a Spanish hours line that is a month out of date sends a person to a locked door."
      ),
    ],
    faqs: [
      {
        q: "Can the page say the practice is bilingual?",
        a: "Only if clients can actually receive services in Spanish. Name the clinicians and the services in each language. If only some sessions are in Spanish, say that clearly, rather than describing the whole practice as bilingual.",
      },
      {
        q: "Is machine translation good enough?",
        a: "It can help a draft, but a fluent person should always review the result. Errors in consent, privacy or fee language create real problems, and awkward text tells readers the practice did not care enough to check.",
      },
      {
        q: "Should the Spanish page be a separate address?",
        a: "Yes. A separate page with its own address, title and description lets search engines show it to Spanish speakers, and lets you update it independently. Link the two versions to each other so readers can switch.",
      },
      {
        q: "Do we need Spanish forms?",
        a: "If you tell clients that paperwork is available in Spanish, yes. If the forms are English only, say that and explain how the office helps with them, for example by reading them aloud with a qualified interpreter or bilingual staff member.",
      },
      {
        q: "How do we handle interpreters for sessions?",
        a: "Use a qualified interpreter rather than a relative, and state the practice's approach on the page. Ask a compliance advisor about requirements that apply to your funding and your state, and describe any cost to the client clearly.",
      },
    ],
    citations: [HHS_1557, GOOGLE_HREFLANG, LIFELINE],
    links: [
      { href: "/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice", label: "Bilingual SEO", description: "Technical setup across a whole site." },
      { href: "/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile", label: "Languages Spoken", description: "Show interpreter access on Google." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Where each clinician's languages go." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1177
  {
    slug: "introducing-a-new-clinician-to-clients-for-a-counseling-practice",
    keyword: "introducing a new clinician to clients for a counseling practice",
    category: "Playbook",
    title: "Introducing a New Clinician to Clients for a Counseling Practice",
    metaTitle: "Introducing a New Clinician to Counseling Practice Clients",
    metaDescription:
      "A step-by-step plan for announcing a new therapist: the bio page, the client note, listing updates and what to leave out. Call (561) 291-2681.",
    answer:
      "To introduce a new clinician, confirm their license first, publish a bio page and update the practice listings, then tell current clients through a short note that explains who joined, what ages and topics they see and how to book. Never claim results, rankings or credentials the clinician does not hold.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("A new face is news, but not a promise"),
      p(
        "When a counseling practice adds a clinician, three groups need to know: people looking for a therapist who might book with them, current clients who may wonder what changes, and the other clinicians who will get questions. One short sequence handles all three."
      ),
      h2("Before you announce anything"),
      ul(
        "Verify the license on the state lookup and write the credential exactly as the license reads.",
        "Check whether the clinician is licensed, pre-licensed or registered, and state it, along with who supervises, if applicable.",
        "Confirm which insurance plans credential the clinician and from what date. Do not list a plan before credentialing is complete.",
        "Collect a current photo, with consent, and a short bio that the clinician approves.",
        "Decide the start date and the first available appointment times."
      ),
      p(
        "Skipping the credentialing check is the most common mistake. A client booked under a plan that does not yet cover the clinician receives a bill they did not expect, and the practice owns that conversation."
      ),
      h2("The sequence"),
      ol(
        "Publish the bio page first. Our guide to the [therapist bio page](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) shows what to include and what to leave out.",
        "Add the clinician to the team page, the services pages they will cover and the practice schema.",
        "Update the Google Business Profile and any directory listings, using the steps in our checklist for [when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice).",
        "Send the note to current clients, once the page is live.",
        "Post a brief announcement on the profile and social accounts.",
        "Tell the front desk what to say, in writing, so everyone gives the same answer."
      ),
      h2("The note to current clients"),
      p(
        "Keep it to a few sentences. Say who is joining, what their role is, that nothing changes for existing clients, and who to contact with questions. If the new clinician is taking over part of a departing therapist's caseload, that is a different message, covered in our page on a [client transfer notice](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice)."
      ),
      table(
        ["Include", "Leave out"],
        ["Name, credential and role", "Claims about success rates or specialties not on the license"],
        ["Ages and topics they see, in plain words", "Words like expert, leading or best"],
        ["Start date and how to book", "Details of any client's care"],
        ["Hours, video availability and fees", "A promise of fast scheduling you cannot keep"],
        ["Contact for questions", "Photos of clients or testimonials"]
      ),
      h3("Reassure without promising"),
      p(
        "Current clients often worry that a new hire means their own therapist is leaving. If that is not true, say so in a sentence. If you do not know a future change, do not speculate."
      ),
      h3("What goes on Google"),
      p(
        "A multi-clinician practice can create individual listings for each therapist, but only when each person meets Google's conditions. The explanation in [practitioner versus practice listings](/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice) helps you decide, and the rules at [Google's guidelines](https://support.google.com/business/answer/3038177) apply either way."
      ),
      h2("After the first month"),
      p(
        "Look at whether the bio page gets visitors, whether calls mention the new clinician, and whether the front desk fields repeat questions. Fix gaps by editing the page. Add the clinician's availability to your waitlist and consultation pages so referrals land correctly."
      ),
      p(
        "Finally, file the announcement text and the checklist so the next hire repeats the same steps."
      ),
    ],
    faqs: [
      {
        q: "When should a new clinician appear on the website?",
        a: "After the license is verified and the start date is confirmed. Publishing early can lead to bookings the practice cannot honor. A short coming soon line on the team page is fine if the date is firm, but keep the bio and booking links for the start date.",
      },
      {
        q: "Should we announce credentialing with insurance plans?",
        a: "Only plans that have completed credentialing, with the effective date. If a plan is pending, say so on the call, not on the page. Listing a plan too early leads to unexpected bills and unhappy clients.",
      },
      {
        q: "Can the announcement mention specialties?",
        a: "It can describe the kinds of concerns the clinician welcomes, as long as the wording matches their training and the practice does not claim expertise it cannot back up. Avoid superlatives and avoid diagnoses.",
      },
      {
        q: "Do we need a separate Google listing for the new clinician?",
        a: "Not necessarily. Many practices use one listing for the office and list clinicians on the website. An individual listing needs a real practitioner presence and must follow Google's rules, so check eligibility before creating one.",
      },
      {
        q: "What if a client wants to switch to the new clinician?",
        a: "Handle it through the front desk with the same process you use for any change. Avoid pushing clients to switch and avoid comparisons, and make sure records and consent paperwork are updated properly.",
      },
    ],
    citations: [GBP_GUIDELINES, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "What to publish about the new hire." },
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "When A Provider Joins Or Leaves", description: "The full update checklist." },
      { href: "/guides/associate-and-pre-licensed-clinician-disclosure-page-for-a-counseling-practice", label: "Pre-Licensed Clinician Disclosure", description: "How to state a supervised role." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1178
  {
    slug: "preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website",
    keyword: "preventive visit versus problem visit billing explained on a primary care practice website",
    category: "How-to",
    title: "Preventive Visit Versus Problem Visit Billing Explained on a Primary Care Practice Website",
    metaTitle: "Preventive vs Problem Visit Billing for a Primary Care Site",
    metaDescription:
      "How a primary care practice can explain why a checkup can turn into two charges when a new concern comes up, in plain words. Call (561) 291-2681.",
    answer:
      "A preventive visit and a problem visit are billed differently. If a new concern is addressed during a checkup, the office may bill both, and the patient may owe a copay or deductible for the second part. A short, plain explanation on the website and at scheduling keeps this from surprising anyone.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("The surprise at the end of a checkup"),
      p(
        "A patient comes in for an annual physical, mentions a sore shoulder, and a few weeks later receives a statement with two lines instead of one. They feel misled, call the office and are told the visit was split. The practice did nothing wrong, but nobody explained it in advance."
      ),
      p(
        "A short page can explain how this works, so the explanation does not depend on a front desk employee who is busy that day."
      ),
      h2("Two kinds of visits, in plain terms"),
      table(
        ["Visit type", "What it is for and how coverage often works"],
        ["Preventive", "A scheduled checkup that screens for problems and updates routine care. Many plans cover recommended preventive services with no copay when delivered as the plan defines them."],
        ["Problem-focused", "Looking at a new or ongoing concern, such as pain or a symptom that has changed. Usually subject to a copay, deductible or coinsurance under the plan."]
      ),
      p(
        "The table is a general picture, not a promise. Plans differ, and what counts as preventive is defined by the plan. The page should say so and send patients to their insurer for details. The healthcare.gov list of [preventive care benefits](https://www.healthcare.gov/preventive-care-benefits/) is a useful neutral reference for the services plans must cover."
      ),
      h2("When one appointment becomes two charges"),
      p(
        "If the clinician spends meaningful time on a new concern during a checkup, the practice may bill that work as a separate problem visit on the same day. The reason is that the preventive visit and the problem visit are different services with different rules. Explain this in the practice's own words and avoid blaming the insurer."
      ),
      h3("What patients can do"),
      ul(
        "Tell the scheduler if there is a specific concern, so a separate appointment can be offered.",
        "Ask at check-in whether a new concern might change the billing.",
        "Call the member services number on the insurance card to learn what the plan treats as preventive.",
        "Ask the billing office for an itemized statement if something looks unclear."
      ),
      h3("What the practice can do"),
      p(
        "Offer to book a separate problem visit when a concern is known in advance, and set expectations when the schedule is tight. Our guide to [explaining visit types and appointment lengths](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website) shows how to describe the options, and the page for [annual wellness visits](/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims) covers the Medicare version. Routine checkups for children follow the same logic, and our guide to a [well-child and school-age checkup page](/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims) shows how to explain them to parents."
      ),
      h2("Wording that stays honest"),
      p(
        "Avoid promising that a checkup is free. Say that many plans cover preventive services at no cost to the patient, that coverage depends on the plan, and that additional services may be billed. Do not quote billing codes or dollar amounts unless they are fixed and current. Keep any statement about prices consistent with the [billing and payment questions page](/guides/billing-and-payment-questions-page-for-a-medical-practice)."
      ),
      table(
        ["Instead of", "Say"],
        ["Your annual visit is free", "Many plans cover recommended preventive services at no cost. Check your plan."],
        ["You will not be charged for extras", "If we address a new concern, that part may be billed separately."],
        ["We handle all insurance questions", "We can explain our charges. For coverage rules, contact your plan."]
      ),
      p(
        "Review the page when the office changes its visit structure or when a large insurer changes its rules, and add the date it was last reviewed so staff know it is current."
      ),
    ],
    faqs: [
      {
        q: "Why was my checkup billed as two visits?",
        a: "When a new concern is evaluated during a checkup, the office may bill that work as a separate problem visit. The two services are billed under different rules, and the second may be subject to a copay, deductible or coinsurance under your plan.",
      },
      {
        q: "Can I avoid the second charge?",
        a: "Sometimes. If you know about a concern in advance, ask the office whether it should be scheduled as its own visit. Billing decisions depend on what is done during the appointment, so the office cannot promise a result before the visit.",
      },
      {
        q: "Does every plan cover preventive visits at no cost?",
        a: "No. Many plans do for services they define as preventive, but some plans, older plans and specific services differ. Call the member services number on your card to confirm what your plan covers and when.",
      },
      {
        q: "Should the website list billing codes?",
        a: "Generally no. Codes are technical, change over time and are easy to misquote. Describe the visit types in everyday words and let the billing office explain codes when a patient asks about a specific statement.",
      },
      {
        q: "Who explains this to new patients?",
        a: "The scheduler should mention it when booking a checkup, the page should repeat it, and the check-in staff should know the answer. A single script used by all three keeps the explanation consistent and avoids contradictions.",
      },
    ],
    citations: [HEALTHCARE_PREVENTIVE, MEDICARE_AWV, CMS_NOSURPRISES_HOME],
    links: [
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types And Lengths", description: "Describe each appointment clearly." },
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "The Medicare checkup version." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Page", description: "Answer statement questions." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1179
  {
    slug: "choosing-a-provider-at-a-multi-provider-primary-care-practice-page",
    keyword: "choosing a provider at a multi-provider primary care practice page",
    category: "How-to",
    title: "Choosing a Provider at a Multi-Provider Primary Care Practice Page",
    metaTitle: "Choosing a Provider at a Multi-Provider Primary Care Site",
    metaDescription:
      "How to help new patients choose among several clinicians on your site with fair, factual profiles and a simple matching guide. Call (561) 291-2681.",
    answer:
      "A provider-choice page lists each clinician with the same facts: role, languages, ages seen, location, new-patient status and booking link. It lets patients filter by what matters to them, avoids ranking or praising anyone, and keeps availability current so no one books with a clinician who is full.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("More choice can feel like more work"),
      p(
        "A new patient looking at a practice with six clinicians sees six photos and six short bios. If the bios are all written differently, the patient cannot compare them, so they pick the first one or the nicest photo or give up and call. A consistent format helps."
      ),
      h2("Give every clinician the same card"),
      ul(
        "Name and the credential exactly as licensed.",
        "Role, such as physician, nurse practitioner or physician assistant.",
        "Ages seen, for example adults only or all ages.",
        "Languages spoken in visits.",
        "Office location and days worked at each.",
        "Whether new patients are being accepted right now, and the date that was last checked.",
        "A booking link or phone number."
      ),
      p(
        "Using the same fields for everyone is both fair and practical. It prevents the page from becoming a popularity contest, and it makes the information easy to turn into structured data that search engines can read."
      ),
      h2("Optional filters that help"),
      table(
        ["Filter", "Why patients use it"],
        ["Location", "Travel time is the biggest practical factor."],
        ["Language", "Understanding the clinician matters more than anything else on the list."],
        ["Ages seen", "Families want to know who sees children and who sees adults only."],
        ["Accepting new patients", "Saves a phone call that ends in no."],
        ["Gender of clinician", "Some patients request this for comfort. Offer it only if you can honor the request."],
        ["Insurance accepted", "Link to the insurance page instead of listing plans on each card."]
      ),
      p(
        "A filter is only worth adding if the data behind it is kept up to date. With six clinicians, a plain table with the same columns is often better than a script-heavy interface."
      ),
      h2("What to avoid"),
      p(
        "Do not rank, rate or describe clinicians as the best, the most experienced or the most popular. Do not copy outside review scores into the bio. Do not suggest that one clinician is better for a condition than another unless that reflects licensing and scope, and even then use plain language. Patients choose on fit, not on claims."
      ),
      h3("The matching help box"),
      p(
        "A short box at the top of the page can help: if you want to see someone close to home, filter by location; if you want a visit in Spanish, filter by language; if you do not mind who you see, call and the scheduler will find the next opening. This turns a wall of faces into a decision."
      ),
      h3("Keep availability honest"),
      p(
        "A card that says accepting new patients when the clinician is full is worse than no card. Assign someone to review the status monthly, and add the month it was checked. Our guide to [keeping accepting-new-patients status accurate](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) lists the places the status must match."
      ),
      h2("Link it all together"),
      p(
        "Each card should link to the clinician's own page, which follows the format in our guide to the [front desk and care team page](/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first) and the advice on [provider headshots](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website). The practice listing on Google and the individual profiles should agree, as explained in [practitioner versus practice listings](/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice)."
      ),
      p(
        "Once a quarter, compare the page with the schedule and the insurance contracts. Mismatches show up first as confused callers."
      ),
    ],
    faqs: [
      {
        q: "Should clinicians be listed alphabetically or by role?",
        a: "Group by role if patients commonly choose by role, such as physicians first and then nurse practitioners. Otherwise list alphabetically by last name. Avoid putting anyone first because they are the owner or the busiest unless you say why.",
      },
      {
        q: "Can the page say who is best for a particular condition?",
        a: "No. Describing one clinician as better for a condition is a claim about outcomes and can be misleading. Describe each person's role and the ages they see, and let the patient or the scheduler match the visit type.",
      },
      {
        q: "Is it okay to let patients choose by gender?",
        a: "If the practice can honor requests, a filter is helpful for patients who care. If not, do not offer it. Describe how the scheduler handles requests so expectations are clear before the patient books.",
      },
      {
        q: "What if only one clinician is accepting new patients?",
        a: "Say so plainly and offer the waitlist for the others. A short sentence explaining that availability changes helps patients understand, and the front desk can offer the next opening at the practice.",
      },
      {
        q: "Do we need schema markup for each provider?",
        a: "It helps search engines understand who works at the practice. Use accurate details that match the page and the licensing record, and test the markup. Never include ratings in the markup unless they are real and displayed.",
      },
    ],
    citations: [GBP_GUIDELINES, GOOGLE_LOCAL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Care Team Page", description: "Introduce the people patients meet." },
      { href: "/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website", label: "Provider Headshots", description: "Photos that match the cards." },
      { href: "/guides/introducing-a-new-provider-to-patients-online-for-a-primary-care-practice-without-clinical-claims", label: "Introducing A New Provider", description: "When someone joins the list." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1180
  {
    slug: "text-to-pay-and-online-bill-pay-page-for-a-medical-practice",
    keyword: "text-to-pay and online bill pay page for a medical practice",
    category: "How-to",
    title: "Text-to-Pay and Online Bill Pay Page for a Medical Practice",
    metaTitle: "Text-to-Pay and Online Bill Pay Page for a Medical Practice",
    metaDescription:
      "How to explain online payment and text-to-pay to patients: what the link looks like, how to spot scams and what never goes in a text. Call (561) 291-2681.",
    answer:
      "A bill pay page should show patients how to pay online, what a genuine text-to-pay message looks like, which payment methods are accepted and what the office will never ask for by text. It should link to a secure payment processor, never collect card numbers on the practice website itself.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Paying should be the easy part"),
      p(
        "Patients are used to paying for most things with a phone. When a medical practice offers only a mailed check or a call to the front desk, bills go unpaid for reasons that have nothing to do with willingness. Text-to-pay and online bill pay fix that, but they also create something new to explain."
      ),
      h2("What the page should cover"),
      ol(
        "How to pay: online portal, text link, phone or in person.",
        "What a genuine message from the office looks like, including the sender number and what the text says.",
        "Which payment methods are accepted, and whether a processing fee applies.",
        "How to set up a payment plan, and who to call.",
        "What the practice will never ask for by text or email.",
        "How to get a receipt and an itemized statement."
      ),
      p(
        "Number five protects patients. Scammers copy the look of billing texts, so telling patients what your messages never contain makes a fake easier to spot."
      ),
      h2("What the practice should say about security"),
      table(
        ["Topic", "What to say"],
        ["Where payment happens", "On a secure page run by the payment company, not on the practice website."],
        ["Card numbers", "We never ask for a full card number by text, email or voicemail."],
        ["Links", "Our texts come from this number and link to this domain only."],
        ["Suspicious message", "Do not click. Call the office at the number on this page."],
        ["Health details", "Billing texts do not describe your visit or condition."]
      ),
      p(
        "The page should not collect card numbers itself. Use a payment processor that follows the [PCI security standards](https://www.pcisecuritystandards.org/) and link to it. Ask your processor and your IT advisor to confirm how the service stores data."
      ),
      h3("Texting rules"),
      p(
        "Billing messages are still text messages, and the FCC has guidance on texting rules, summarized in its [guide to unwanted calls and texts](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts). Get permission before sending text messages, offer a clear way to stop them and keep messages short and free of health details. Have a compliance advisor review your consent wording."
      ),
      h3("Fees and plans"),
      p(
        "If the processor charges a convenience fee, show it before the patient pays. If the practice offers payment plans, describe how a plan starts and what happens if a payment is missed, in plain words. Our guide to the [billing and payment questions page](/guides/billing-and-payment-questions-page-for-a-medical-practice) covers the general layout, and the note on [reduced fees](/guides/sliding-scale-and-reduced-fee-note-for-a-primary-care-practice-without-discounting-claims) covers help for patients who cannot pay in full."
      ),
      h2("Warn patients about fakes"),
      p(
        "Phishing texts that imitate medical offices are common. Our article on [scam texts and emails that impersonate a practice](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients) has wording you can reuse, and the CISA page on [recognizing phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing) is a reliable outside source."
      ),
      p(
        "Put a sample of a real message on the page with the amount and name blurred, so patients can compare. Update it if the wording changes."
      ),
      h2("Test it as a patient"),
      ul(
        "Send yourself a payment link and follow it on a phone.",
        "Confirm the sender, the domain and the receipt.",
        "Check that the page loads quickly and the tap-to-call number works.",
        "Review the process every quarter and after any vendor change."
      ),
      p(
        "If a payment problem happens, give the patient a human to call. The best online system still needs a person who can fix what the system cannot."
      ),
    ],
    faqs: [
      {
        q: "Is text-to-pay safe for patients?",
        a: "It can be, if the link goes to a secure page run by a reputable payment company, the message contains no health details and patients are told how to recognize genuine messages. The office should also tell patients what it will never ask for.",
      },
      {
        q: "Should the practice website take card payments directly?",
        a: "Usually not. Linking to a payment company's secure page keeps card numbers off the practice site and reduces the practice's security burden. Ask the processor how the link works and what they store.",
      },
      {
        q: "Can billing texts mention the type of visit?",
        a: "Avoid it. A text can be read by someone else or seen on a lock screen. Say that a balance is available and send the patient to a secure page, where details can be shown after they log in.",
      },
      {
        q: "Do we need patient permission before texting a bill?",
        a: "Texting rules require consent in many situations, and the details depend on the type of message. Collect permission in writing at registration, offer a clear opt-out, and ask a compliance advisor to review your wording.",
      },
      {
        q: "How do we help patients who cannot use the phone link?",
        a: "Keep other options open: pay by phone with the billing office, pay in person, or by mail. Say so on the page so nobody feels forced into a method. A patient who can't pay online should not be penalized.",
      },
    ],
    citations: [PCI, FCC_TEXTS, HHS_PRIVACY],
    links: [
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Page", description: "The general billing layout." },
      { href: "/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients", label: "Scam Texts And Emails", description: "What to tell patients." },
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Patient Portal Login Page", description: "Make the login easy to find." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1181
  {
    slug: "service-area-and-neighborhoods-served-section-for-a-medical-practice-without-doorway-pages",
    keyword: "service area and neighborhoods served section for a medical practice without doorway pages",
    category: "How-to",
    title: "Service Area and Neighborhoods Served Section for a Medical Practice Without Doorway Pages",
    metaTitle: "Service Area and Neighborhoods Served Without Doorway Pages",
    metaDescription:
      "How a medical practice can say which towns and neighborhoods it serves on one honest page, without creating thin doorway pages. Call (561) 291-2681.",
    answer:
      "Add one service-area section to your location page that names the towns and neighborhoods patients actually travel from, with real drive times and landmarks. Do not create a separate near-identical page for every town. Google treats those as doorway pages, and they rarely help a patient or a ranking.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Where patients come from is useful information"),
      p(
        "A patient in a neighboring town wants to know whether your office is a reasonable drive. A short section that says which areas you serve answers that and tells search engines what part of the map you care about. The temptation is to turn each town into a page. That is where trouble begins."
      ),
      h2("Why one page beats ten"),
      p(
        "A doorway page is a page made to rank for a place, offering little that is unique. Google's spam policies on [doorway pages](https://developers.google.com/search/docs/essentials/spam-policies) describe them as pages that funnel visitors to the same destination. Ten pages that differ only by the town name are the classic case, and they dilute rather than help."
      ),
      table(
        ["Approach", "Result"],
        ["One service-area section with real detail", "Helpful to patients and clear to Google."],
        ["Ten town pages with swapped names", "Thin, repetitive and risky. May be ignored or demoted."],
        ["A town page with unique, useful content", "Acceptable only if the practice truly has a presence or distinct service there."]
      ),
      p(
        "Our own research on [this site](/locations/medical-seo-west-palm-beach) follows the same rule: location pages exist only where there is something specific to say."
      ),
      h2("What to include in the section"),
      ul(
        "The towns and neighborhoods patients actually come from, based on the front desk's own knowledge.",
        "Typical drive times from each, stated as ranges and checked off-peak and at rush hour.",
        "Landmarks and major roads that help someone orient.",
        "Parking, public transit and ride options, with a link to the detail page.",
        "Telehealth coverage, if you see patients by video, and the states or areas it applies to.",
        "A sentence saying that patients outside the area are welcome to call."
      ),
      p(
        "Keep it factual. Do not list twenty towns to catch searches when only a handful of patients come from them. Listing places you do not serve is misleading."
      ),
      h3("What Google Business Profile allows"),
      p(
        "A practice with a staffed office is usually a storefront listing, not a service-area listing, and should show the office address. Google's help on [service areas](https://support.google.com/business/answer/9157481) explains who may list one. Do not add a service area to a profile for a business that does not travel to patients."
      ),
      p(
        "The comparison between the two listing types is in our guide to [service-area versus storefront profiles](/guides/service-area-vs-storefront-google-business-profile-for-a-medical-practice)."
      ),
      h3("Structured data"),
      p(
        "The LocalBusiness markup can include an areaServed property. Use real place names, keep it short and match the page. The Google documentation on [local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) lists the supported properties."
      ),
      h2("When a second page is justified"),
      ol(
        "The practice has a second office in that town, with its own address, hours and clinicians.",
        "The page contains facts that cannot be copied to another town, such as directions from that area, local partners or the office's own entrance.",
        "You can maintain it, with its own Google profile and reviews.",
        "A real person would find it useful if they landed there first."
      ),
      p(
        "If none of those apply, use the section. Our article on a [new location or satellite office](/guides/new-location-or-satellite-office-announcement-page-for-a-medical-practice) shows how to do the second office properly."
      ),
      p(
        "Review the list yearly against where new patients actually live, and delete places that no longer appear."
      ),
    ],
    faqs: [
      {
        q: "What is a doorway page?",
        a: "A doorway page exists to rank for a specific search and then pass the visitor to the same place as every other such page. Several pages that differ mainly by town name are the typical example, and Google's spam policies warn against them.",
      },
      {
        q: "Can we list the towns we serve in the footer?",
        a: "A very long list of towns in the footer looks like keyword stuffing. Put a short, accurate section on the location page instead, and keep the footer for the address, phone number and hours.",
      },
      {
        q: "Should the service area match the Google profile?",
        a: "They should not contradict each other. A storefront profile shows the office address, and the website section describes who comes. If the profile has a service area, the website should describe the same places.",
      },
      {
        q: "Do drive times need to be exact?",
        a: "No, but they should be reasonable. Use ranges, check them in a map app at different times of day and update them if a road project changes the route. An honest range beats a flattering minimum.",
      },
      {
        q: "How do we serve patients in towns where we have no office?",
        a: "Through the one location page, plus telehealth if offered. Say what can be done by video and what needs an in-person visit. Do not imply a local presence that does not exist.",
      },
    ],
    citations: [GOOGLE_SPAM, GBP_SERVICE_AREA, GOOGLE_LOCAL],
    links: [
      { href: "/guides/service-area-vs-storefront-google-business-profile-for-a-medical-practice", label: "Service Area Or Storefront", description: "Pick the right profile type." },
      { href: "/guides/new-location-or-satellite-office-announcement-page-for-a-medical-practice", label: "New Location Announcement", description: "When a second page is justified." },
      { href: "/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile", label: "Parking And Entrance", description: "Directions that help." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1182
  {
    slug: "health-fair-and-community-education-event-page-for-a-primary-care-practice",
    keyword: "health fair and community education event page for a primary care practice",
    category: "Playbook",
    title: "Health Fair and Community Education Event Page for a Primary Care Practice",
    metaTitle: "Health Fair and Event Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can post a health fair or education event: dates, location, what attendees get and privacy rules. Call (561) 291-2681.",
    answer:
      "An event page for a health fair or community talk should list the date, time, address, cost, who is welcome, what happens there and how to register. Keep health information general and sourced, collect no medical details at sign-up, and update the page after the event so it does not go stale.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("A way to meet the neighborhood"),
      p(
        "Community events such as a library talk, a senior center visit or a booth at a local health fair put the practice in front of people who may never have searched for it. The event page is where they land when they look up the name afterward."
      ),
      p(
        "It also serves as a record. A dated, specific page shows that the practice is part of the community and gives local organizers something to link to."
      ),
      h2("The facts the page needs"),
      table(
        ["Item", "Detail"],
        ["Date and time", "Written out with the weekday and the time zone if people travel."],
        ["Place", "Full address, entrance, parking and accessibility notes."],
        ["Cost", "Free, ticketed or donation, stated plainly."],
        ["Who it is for", "Adults, families, seniors, anyone. No eligibility based on health status."],
        ["What happens", "A short agenda: a talk, a table, screenings by named partners, handouts."],
        ["Registration", "Phone number or a simple form that asks only for name and contact."]
      ),
      p(
        "If other organizations are involved, name them and link to their pages with permission. If a partner provides screenings, say that they do and who they are, and do not imply the practice performs them unless it does."
      ),
      h2("Keep the health information general"),
      p(
        "A talk about staying active or preparing for a checkup is general education. The page should describe the topic and point to a reliable source, such as [MyHealthfinder](https://health.gov/myhealthfinder), instead of making its own claims about prevention or outcomes. Avoid words like prevent, cure, reduce risk or detect early unless a citation supports exactly that and a clinician has reviewed it."
      ),
      h3("What not to collect"),
      ul(
        "Do not ask attendees about their conditions, medications or reasons for attending.",
        "Do not collect insurance details at sign-up for an event.",
        "Do not photograph attendees without a signed release, and avoid photographing children.",
        "Do not take sign-in sheets that list health topics."
      ),
      p(
        "A name and a phone number is enough. Our guide to the [new patient forms](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains why even routine forms should be handled carefully."
      ),
      h2("Before the event"),
      ol(
        "Publish the page at least three weeks ahead and add the date to the practice's Google Business Profile as an event post.",
        "Tell the front desk, so they can answer questions with the same details.",
        "Share the page with the host organization so they can link to it.",
        "Prepare a handout with the practice's address and phone number and no health claims.",
        "Decide in advance who will answer questions that sound like medical advice and what they will say."
      ),
      p(
        "The last point matters. At a table, people ask personal questions. A friendly sentence such as the best step is to call the office and make an appointment keeps everyone safe."
      ),
      h2("After the event"),
      p(
        "Change the page to a short recap with the date, the topic and a thank-you to the host. Do not delete it. Link future events from it. Our article on [local sponsorships and community events](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn) explains how event pages and partner links add up over time."
      ),
      p(
        "If you want to post photos, use the guidance in the piece on [social media accounts](/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post) so nothing reveals who is a patient."
      ),
    ],
    faqs: [
      {
        q: "Can the practice offer free screenings at an event?",
        a: "Only if it has the licensing, supplies and staff to do so safely and has checked the rules. Many practices partner with an organization that handles screenings. The page should say clearly who provides each service.",
      },
      {
        q: "Should we ask people to register?",
        a: "Registration helps with planning, but keep it minimal: name, phone or email and the number attending. Do not ask why they are coming. Offer a phone option so people without internet can sign up.",
      },
      {
        q: "Can the event page claim the talk will improve health?",
        a: "No. Describe the topic and the speaker and cite a reliable source for any general statement. Avoid promising benefits or outcomes. Let attendees decide what they take from it.",
      },
      {
        q: "Is it fine to post photos from the event?",
        a: "With signed releases from identifiable people and not of children without a parent's written permission. A photo of the table, the signage or the speaker with permission is safer than pictures of attendees.",
      },
      {
        q: "How long should the page stay up?",
        a: "Keep it. After the date passes, convert it to a recap and link to your next event. The address, links and history have value, and deleting the page causes broken links on partner sites.",
      },
    ],
    citations: [HEALTHFINDER, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn", label: "Local Sponsorships And Events", description: "The links events can earn." },
      { href: "/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post", label: "Social Media Do And Don't", description: "What to post from an event." },
      { href: "/guides/what-to-post-on-google-business-profile-for-a-medical-practice", label: "Google Business Profile Posts", description: "Announce the event on your profile." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1183
  {
    slug: "new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice",
    keyword: "new patient intake phone script for the front desk of a primary care practice",
    category: "Checklist",
    title: "New Patient Intake Phone Script for the Front Desk of a Primary Care Practice",
    metaTitle: "New Patient Phone Script for a Primary Care Front Desk",
    metaDescription:
      "A front desk phone script for new patient calls: what to ask, what to skip, how to stay private and how to log the call. Call (561) 291-2681.",
    answer:
      "A good new patient phone script greets the caller by the practice name, asks only what is needed to book, such as name, phone, insurance and preferred times, explains what to bring and what happens next, and avoids asking about symptoms. Review it quarterly and keep a log of why calls do not end in a booking.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("The first call decides a lot"),
      p(
        "A new patient who calls is often comparing two or three practices at once. The one that answers kindly, asks clear questions and explains the next step tends to win. A script is not a robot. It is a short outline so that the caller always gets the same good experience, even on a busy morning."
      ),
      h2("The outline"),
      ol(
        "Greet with the practice name, your first name and an offer to help.",
        "Ask whether they are looking to become a new patient, and for whom.",
        "Take a name and the best phone number first, in case the call drops.",
        "Ask for insurance carrier and plan name, and tell them you will verify it, not promise coverage.",
        "Offer the next two or three openings and book the best fit.",
        "Explain what to bring, how early to arrive and how to complete forms.",
        "Repeat the date, time, place and parking information, then confirm the phone number for reminders.",
        "Close warmly, and ask if they have any questions."
      ),
      p(
        "Each step has a reason. Name and number come first because a dropped call is easier to recover. Insurance comes before the booking because a surprise later hurts trust."
      ),
      h2("Questions to leave out"),
      table(
        ["Do not ask", "Why, and what to say instead"],
        ["What is wrong?", "It invites health details on a line that may be overheard. Ask whether they would like a general new patient visit or a visit for a specific concern."],
        ["What medications are you on?", "That belongs in the chart, not a phone call. Say: we will go through your history at the visit, so please bring a list."],
        ["Social Security number", "Rarely needed to book. Say: we will explain what we need at check-in."],
        ["Are you in pain?", "It is a clinical question for a clinician. Say: if this is an emergency, please hang up and call 911."]
      ),
      p(
        "The idea matches the HIPAA principle of asking for the minimum needed. The [minimum necessary guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) is aimed at uses and disclosures of health information, but it is a useful habit even before a caller becomes a patient."
      ),
      h3("The urgent caller"),
      p(
        "Train everyone to recognize words that mean the caller needs emergency help, and to say the same short line every time: if this is an emergency, please hang up and dial 911. Post the line at every desk. Our page on [when to call the office versus 911](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) gives wording that matches what the website says."
      ),
      h3("The caller who is not a fit"),
      p(
        "Sometimes the practice cannot take the person, because of age range, insurance or capacity. Give a kind answer and a next step, such as the number for the insurance directory or another type of care. Do not leave the caller guessing."
      ),
      h2("After the call"),
      ul(
        "Write the outcome in the call log: booked, call-back, declined, not a fit.",
        "Note how the caller heard of the practice, with the question from our guide to [how did you hear about us](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing).",
        "Send the welcome message from the template in the [new patient welcome text or email](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) guide.",
        "Flag calls that ended without a booking and review them weekly."
      ),
      p(
        "Role-play the script in a staff meeting once a quarter. People find the weak spots quickly when they hear themselves say it."
      ),
      p(
        "Keep the script short enough to fit on one page, and update it when anything changes, such as hours, insurance or the forms process."
      ),
    ],
    faqs: [
      {
        q: "Should staff read the script word for word?",
        a: "No. Use it as an outline so that every caller gets the same information in the same order. Staff should speak naturally, but make sure the essential items such as insurance, what to bring and emergency wording are always covered.",
      },
      {
        q: "How much insurance information should we take on the phone?",
        a: "The carrier name and plan type are usually enough to book. Collect the member ID and date of birth in a secure way, either in person or through a secure form. Say you will verify coverage and that the call is not a guarantee.",
      },
      {
        q: "What if a caller starts describing symptoms?",
        a: "Gently stop them and offer to book a visit or connect them with a nurse if the practice has one. If it sounds like an emergency, give the 911 line. Do not give medical advice from the front desk.",
      },
      {
        q: "How do we record calls that do not end in a booking?",
        a: "Use a simple log with a few reasons: price, insurance, timing, location, other. Review it weekly. The pattern shows what to fix, whether in the script, the website or the schedule.",
      },
      {
        q: "Should the script mention the website?",
        a: "Yes. Tell callers they can find the forms, directions and hours on the website, and spell the address slowly. It saves a second call and shows the site is part of the practice's service.",
      },
    ],
    citations: [HHS_MIN_NECESSARY, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice", label: "Office Versus 911", description: "Consistent emergency wording." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "What to send after booking." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What To Bring", description: "The list to read to callers." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1184
  {
    slug: "referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice",
    keyword: "referring doctor thank-you and feedback loop for a primary care practice",
    category: "Playbook",
    title: "Referring Doctor Thank-You and Feedback Loop for a Primary Care Practice",
    metaTitle: "Referring Doctor Thank-You Loop for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can thank referring doctors and close the loop on referrals without oversharing health information. Call (561) 291-2681.",
    answer:
      "A referral thank-you loop acknowledges each referral quickly, confirms that the patient was seen, shares only the information the referring doctor needs for treatment, and asks one question about how the process worked. Keep it short, keep it private and send it through a secure channel, not plain email.",
    author: "Liam Costello",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Referrals are relationships"),
      p(
        "When another doctor, a counselor or a hospital team sends a patient to a primary care practice, they are lending their reputation. A quick acknowledgment tells them the patient landed safely and makes the next referral more likely. Silence does the opposite. Counseling practices can welcome referrals from doctors and schools on a dedicated [referral page for a counseling practice](/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer) that explains how to send one."
      ),
      p(
        "The practices that earn steady referrals are rarely the flashiest. They are the ones that confirm, follow up and are easy to reach."
      ),
      h2("The three touches"),
      ol(
        "Acknowledge: within one business day of receiving a referral, confirm that it arrived and say when the patient is scheduled.",
        "Close the loop: after the patient is seen, send what the referring clinician needs for continuing care, through a secure channel.",
        "Ask: once a quarter, send a brief note asking what could make the process easier."
      ),
      p(
        "The second touch is covered by clinical and privacy rules, not by marketing. Sharing information for treatment is allowed under HIPAA, as explained in the HHS guidance on [uses and disclosures for treatment](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/disclosures-treatment-payment-health-care-operations/index.html). Have your privacy officer confirm what your office sends and how."
      ),
      h2("What goes in a thank-you"),
      table(
        ["Do", "Do not"],
        ["Say thank you for the referral and confirm the date received.", "Name the patient or the reason in an unsecured email or text."],
        ["State the practice's phone and the best person to call.", "Offer gifts, meals or anything of value in exchange for referrals."],
        ["Mention changes that help, such as new hours or a new clinician.", "Compare the referring doctor's practice with others."],
        ["Link to your referral information page.", "Promise outcomes or turnaround times you cannot keep."]
      ),
      p(
        "Be careful with gifts. Laws about referrals and kickbacks are strict, and a thank-you should be words only unless a compliance advisor approves something else."
      ),
      h3("The referral information page"),
      p(
        "Give referring offices a page that lists how to send a referral, which fax or secure address to use, which insurance plans are accepted and who to call. Our guide to the [referral partner page](/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you) explains what to include, and the page that handles the patient side is the [specialist referral request page](/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice)."
      ),
      h3("Track it simply"),
      p(
        "A spreadsheet is enough: referring office, date received, date seen, date thanked, notes on any problem. Do not record clinical details. Review it monthly to see which offices send patients and which referrals stall."
      ),
      h2("Ask for feedback the right way"),
      p(
        "A short question works better than a survey: what would make it easier for you to send patients to us? Send it by the channel the office prefers and log the answer. Fix the thing people mention first, and tell them you did."
      ),
      p(
        "If a referring clinician mentions a complaint, treat it as private and route it to the practice manager. Do not discuss it in public reviews or on social media, and do not confirm a patient relationship in any public place."
      ),
      p(
        "Review the process once a year. Referral sources change, secure channels get replaced, and the best script from three years ago may no longer fit."
      ),
    ],
    faqs: [
      {
        q: "Can we email a referring doctor about the patient?",
        a: "Only through a secure method your privacy officer has approved. Plain email is not a safe place for patient details. For a simple thank-you, send a message with no patient name or condition, and use the secure channel for anything clinical.",
      },
      {
        q: "Is it okay to send gifts or lunch to referring offices?",
        a: "Be very careful. Rules about anything of value connected to referrals are strict, and rules differ by payer. Do not send gifts without written advice from a healthcare compliance attorney. A sincere note is always safe.",
      },
      {
        q: "How fast should we acknowledge a referral?",
        a: "Within one business day is a good target, and a rule you can keep matters more than a number that sounds impressive. State the target on your referral page and track whether you meet it.",
      },
      {
        q: "What belongs on the referral page for other doctors?",
        a: "Contact details, accepted insurance, how to send records, the types of patients the practice sees, and a person to call. Skip marketing language and results. Referring doctors want to know what happens when they send someone.",
      },
      {
        q: "Should we ask referring offices for reviews or testimonials?",
        a: "Be cautious. Professional endorsements can raise ethics and advertising questions. Ask for feedback on the process, not a public statement, and check with a compliance advisor before publishing anything from a colleague.",
      },
    ],
    citations: [HHS_TPO, HHS_PRIVACY, HHS_MIN_NECESSARY],
    links: [
      { href: "/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you", label: "Referral Partner Page", description: "How other offices find you." },
      { href: "/guides/getting-listed-in-a-hospital-or-health-system-provider-directory", label: "Hospital Provider Directories", description: "Be easy to find for referrals." },
      { href: "/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims", label: "Behavioral Health Referral Page", description: "The outgoing counseling route." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1185
  {
    slug: "family-medicine-versus-internal-medicine-explainer-page-for-a-primary-care-practice",
    keyword: "family medicine versus internal medicine explainer page for a primary care practice",
    category: "Comparison",
    title: "Family Medicine Versus Internal Medicine Explainer Page for a Primary Care Practice",
    metaTitle: "Family vs Internal Medicine Explainer Page for a Practice",
    metaDescription:
      "How to write a page that explains family medicine versus internal medicine fairly, so patients pick the right primary care visit. Call (561) 291-2681.",
    answer:
      "Family medicine physicians typically care for patients of all ages, including children, while internal medicine physicians typically care for adults. Both provide primary care. An explainer page should state which ages your practice sees, avoid calling either better, and let patients choose based on who is in their household.",
    author: "Gio LaRoche",
    publishDate: "2026-10-21T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("A question the front desk hears weekly"),
      p(
        "Patients searching for a new doctor often type some version of the same question: should I see a family doctor or an internist. The answer is short, and a practice that gives it plainly earns trust before the patient has made a call."
      ),
      h2("The plain difference"),
      table(
        ["Point of comparison", "Family medicine versus internal medicine"],
        ["Ages usually seen", "Family medicine: all ages, from infants to older adults. Internal medicine: adults, usually 18 and older."],
        ["Training focus", "Family medicine: broad care across the whole family. Internal medicine: adult medicine, including managing several conditions together."],
        ["Good fit when", "Family medicine: parents and children want one office. Internal medicine: an adult wants a doctor who focuses on adult care."],
        ["What both can do", "Provide checkups, manage ongoing conditions and refer to specialists."]
      ),
      p(
        "This is a general picture. Individual physicians vary, and many family physicians and internists have similar day-to-day practices. The page should not try to settle which is better because the answer depends on the patient. Practices that see children search and are searched for in a different way, which our page on [digital marketing for pediatric practices](/specialties/pediatrics) explains."
      ),
      h2("What your practice should add"),
      ul(
        "The ages each clinician sees, stated by name, since that is what the patient cares about.",
        "Whether you see newborns, teens and older adults, and any age cut-offs.",
        "Whether the practice has both kinds of physicians and how patients are matched.",
        "Whether a family can book with one office, even if members see different clinicians.",
        "Which of your clinicians are physicians and which are nurse practitioners or physician assistants, with credentials as licensed."
      ),
      p(
        "A page that ends with we see all ages is less useful than a page that says which clinician sees which ages and who is accepting new patients."
      ),
      h3("Keep claims in check"),
      p(
        "Avoid statements like internists are better at complex conditions or family doctors know the whole family best. Those are opinions presented as facts, and they can mislead. Stick to ages, scope and how your office works."
      ),
      h3("Board certification"),
      p(
        "If you mention board certification, make sure it is true and current, and name the board exactly. Verify through the certifying board and the state license lookup, and do not paraphrase. Our piece on [medically reviewed-by labels](/guides/medically-reviewed-by-labels-on-a-medical-practice-website) covers a related honesty rule."
      ),
      h2("Where the page fits"),
      p(
        "Link the explainer from the new patient page, the visit-types page and the care team page. It should appear for searches such as family doctor or internist near me, but do not stuff those words in. Use them once in the opening and once in a heading where they belong, then write for people."
      ),
      p(
        "Related reading includes our guide to [choosing a provider at a multi-provider practice](/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page) and the page on [transferring care from another doctor](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice), since people who ask this question are often changing doctors."
      ),
      h2("Keep it fair and current"),
      p(
        "Ask a physician at the practice to review the page for accuracy, and put the review date on it only if someone really did the review. Revisit it when the clinician roster changes."
      ),
      p(
        "If a patient's situation is unusual, such as a teen close to 18 or an older adult with several conditions, tell them to call and talk it through. The front desk can then explain who is taking new patients."
      ),
    ],
    faqs: [
      {
        q: "Is family medicine or internal medicine better?",
        a: "Neither is better in general. Both provide primary care. Family medicine usually covers all ages, and internal medicine usually focuses on adults. The right choice depends on who needs care, and on the clinician and the office.",
      },
      {
        q: "Can an internist treat my children?",
        a: "Internists typically care for adults, so most do not see young children. Some see older teens. Ask the practice, since each office sets its own age range and the page should state it.",
      },
      {
        q: "Do both types of doctors refer to specialists?",
        a: "Yes. Both provide primary care and refer when a problem needs a specialist. Referral rules depend on the insurance plan, so patients should check with their plan about whether a referral is needed before booking.",
      },
      {
        q: "Should our page say which doctors are board certified?",
        a: "Only if it is accurate and current, using the board's exact name and verifying through the board. If you cannot verify it, leave it out. An unverified credential is worse than none.",
      },
      {
        q: "How do we help a family where members have different needs?",
        a: "Explain how the office books related patients, such as back-to-back times or one clinician for everyone, and note the ages each clinician sees. The front desk can then arrange the best match when the family calls.",
      },
    ],
    citations: [HEALTHCARE_PREVENTIVE, MEDICARE_AWV, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page", label: "Choosing A Provider", description: "Show clinicians fairly." },
      { href: "/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice", label: "Transferring Care", description: "Help patients who are switching." },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types And Lengths", description: "Describe each appointment." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },
];
