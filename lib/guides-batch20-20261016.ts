// -- Guides batch 20 - 2026-10-16 --
// Guide/AEO pages from the Command Center queue (rows 1004, 1005, 1016-1025, 1049-1051), built by the page factory to
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
const HHS_MARKETING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA and marketing communications",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/marketing/index.html",
};
const FTC_ADS = {
  publisher: "Federal Trade Commission",
  label: "Advertising and marketing guidance for businesses",
  href: "https://www.ftc.gov/business-guidance/advertising-marketing",
};
const FTC_REVIEWS = {
  publisher: "Federal Trade Commission",
  label: "Rule on consumer reviews and testimonials",
  href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};
const FL_MENTAL = {
  publisher: "Florida Board of Clinical Social Work, Marriage & Family Therapy, and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const SAMHSA = {
  publisher: "SAMHSA",
  label: "FindTreatment.gov and the National Helpline",
  href: "https://www.samhsa.gov/find-help/national-helpline",
};
const MEDICARE = { publisher: "Medicare.gov", label: "Medicare.gov", href: "https://www.medicare.gov/" };
const MEDICAID = { publisher: "Medicaid.gov", label: "Medicaid.gov", href: "https://www.medicaid.gov/" };
const CMS_NSA = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act: understanding costs in advance",
  href: "https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance",
};

export const guidesPartTwentyThree: Guide[] = [
  // ---------------------------------------------------------------- 1004
  {
    slug: "social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post",
    keyword: "social media accounts for a medical practice: what to post and what never to post",
    category: "Checklist",
    title: "Social Media Accounts for a Medical Practice: What to Post and What Never to Post",
    metaTitle: "Medical Practice Social Media: Post and Never Post",
    metaDescription:
      "A plain checklist of what a medical practice can safely post on social media and what to never publish. Call (561) 291-2681.",
    answer:
      "A medical practice's social accounts should share office news, hours, team introductions and general wellness reminders, and should never show a patient's name, photo, story or reply to a comment that confirms someone is a patient. Pick one or two platforms, name one owner, and write down the rules before the first post goes live.",
    author: "Liam Costello",
    publishDate: "2026-10-16T09:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Start with one owner and one or two platforms"),
      p(
        "Most practices do not need five social accounts. A Facebook page and an Instagram account cover the places local patients actually look, and a thin page that has not posted in a year does more harm than no page at all, because it suggests the office is closed or careless."
      ),
      p(
        "Name one person who owns the logins, one person who approves posts, and a backup for both. Put the account recovery email and phone number under practice control, not a personal address, so a departing employee cannot take the page with them."
      ),
      h2("What is safe to post"),
      ul(
        "Hours, holiday closures and new-location or new-provider announcements.",
        "A short introduction to a team member with a photo they agreed to share.",
        "General reminders that are true for everyone, such as when the office offers flu shots or school forms.",
        "Links back to your own guides and pages, so the post sends someone to a page you control.",
        "Community news, such as a local event the office is attending."
      ),
      p(
        "A good test is to ask whether the post would still make sense if no patient had ever visited. If it does, it is almost always safe. If it depends on a specific person's visit, story or result, it is not."
      ),
      h2("What never to post"),
      table(
        ["Never post this", "Why it is a problem"],
        ["A patient's name, photo, video or testimonial without a signed written authorization", "Identifying a person as a patient is itself protected information under the HIPAA Privacy Rule."],
        ["A reply that says thank you for coming in, or confirms an appointment", "It confirms the person is a patient, in public."],
        ["Before and after images or claims about results", "Outcome claims invite complaints and cannot be promised."],
        ["A staff photo that shows a screen, chart or sign-in sheet in the background", "Background details can expose patient information by accident."],
        ["A reply to a negative comment that explains what happened in the visit", "You cannot discuss care in public, even when the patient has already done so."]
      ),
      p(
        "The same discipline applies to reviews, which our guide on [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) explains in detail. Social comments follow the same rule. If someone creates a fake page in your name, follow our guide on a [copycat website or fake social profile impersonating a practice](/guides/copycat-website-or-fake-social-profile-impersonating-a-medical-practice-what-to-do) to document it, report it and tell patients."
      ),
      h3("How to answer a comment or private message"),
      p(
        "Reply once, in general terms, and move the conversation offline. A sentence such as we take this seriously, please call the office at your convenience, shares nothing about anyone's care. Never ask for symptoms, medications or insurance details in a direct message, because social platforms are not a secure channel for health information. For a booth or a talk, post the details from the [health fair and community event page](/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice) and keep photos free of anything that shows who is a patient."
      ),
      h2("Turn on the settings that protect you"),
      ol(
        "Turn off auto-tagging of the practice in patient photos unless you review each tag first.",
        "Keep the account recovery details on practice-owned email and a practice phone line.",
        "Hide or disable direct messages if no one will check them daily, and say so in the profile.",
        "Use the practice's real name, address and phone exactly as they appear on Google, so the profile matches the rest of the web.",
        "Set a reminder to review followers, admins and connected apps every quarter."
      ),
      p(
        "A short written policy, one page, kept at the front desk, is enough. It should list who posts, what is allowed, what is never allowed and who to call if something goes wrong."
      ),
    ],
    faqs: [
      {
        q: "Does a medical practice need social media at all?",
        a: "No. A website and a well-kept Google Business Profile matter far more for finding new patients. Social accounts are optional, and an inactive one is worse than none. Start with one platform and post only what the office can keep doing.",
      },
      {
        q: "Can we post a patient's thank-you message?",
        a: "Only with a signed written authorization from that patient, kept on file, that names the use. Without one, do not repost, quote or screenshot it. A general thank-you to the community is fine and shares no one's information.",
      },
      {
        q: "Is it safe to post staff photos?",
        a: "Yes, with each person's agreement, and after checking the background for screens, charts, sign-in sheets or anything with a patient's name on it. Take photos in a part of the office where no patient is present.",
      },
      {
        q: "Should we answer comments that ask medical questions?",
        a: "Do not give medical advice in comments. Reply with a general line that the office cannot discuss care publicly and invite the person to call. If it sounds like an emergency, point them to 911 or the 988 Lifeline.",
      },
      {
        q: "How often should a practice post?",
        a: "Once or twice a week is enough, and a steady monthly rhythm beats a burst followed by silence. Our content calendar checklist helps plan what to post without inventing topics each week.",
      },
    ],
    citations: [HHS_PRIVACY, HHS_MARKETING, FTC_ADS],
    links: [
      { href: "/guides/what-to-post-on-google-business-profile-for-a-medical-practice", label: "Google Business Profile Posts", description: "What to post where patients search." },
      { href: "/guides/medical-practice-content-calendar-checklist", label: "Content Calendar Checklist", description: "Plan a steady rhythm of posts." },
      { href: "/guides/patient-testimonial-compliance-checklist", label: "Testimonial Compliance", description: "What a testimonial needs before it is public." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1005
  {
    slug: "shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile",
    keyword: "shared or virtual office address for a therapy practice on Google Business Profile",
    category: "How-to",
    title: "Shared or Virtual Office Address for a Therapy Practice on Google Business Profile",
    metaTitle: "Shared or Virtual Office Address on Google Business Profile",
    metaDescription:
      "How a therapy practice in a shared or sublet office can list an address on Google Business Profile without suspension risk. Call (561) 291-2681.",
    answer:
      "A therapy practice can list a shared or sublet office on Google Business Profile if clients can actually be met there at the listed hours, and the practice has signage or a staffed entrance. A mailbox, a virtual address or a coworking desk where no one sees clients does not qualify and risks suspension.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T09:20:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("The rule Google actually applies"),
      p(
        "Google's guidelines separate a business that serves customers at a location from one that only receives mail there. A listing is for a place where the business is staffed during the hours shown and where customers can be met in person. A mailbox store, a registered-agent address or a virtual office that no one visits does not meet that standard, however professional the street address looks."
      ),
      p(
        "Therapists run into this because many practices rent a room by the day, sublet from a colleague or share a suite with other clinicians. Those arrangements can qualify, but only if the room is genuinely where clients come for sessions."
      ),
      h2("Which setups qualify"),
      table(
        ["Setup", "Listing as a storefront?"],
        ["A suite you lease with your own door sign", "Yes, with your practice name on the sign."],
        ["A room you sublet that is used for sessions at stated hours", "Usually yes, if clients are seen there and the hours match."],
        ["A room you rent only a few hours a week", "Show only those hours, and make sure they are accurate."],
        ["A coworking desk or a virtual office with a mail address", "No. Treat it as a mailing address only."],
        ["Your home, where you see no clients", "No. Hide the address and use a service area."]
      ),
      p(
        "If you share a building with other practices, expect Google to check whether more than one listing uses the same suite. Our guide on [practitioner versus practice listings for a multi-provider practice](/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice) explains when each clinician may have their own profile. Telehealth patients in nearby towns can be addressed in a short [service area and neighborhoods served section](/guides/service-area-and-neighborhoods-served-section-for-a-medical-practice-without-doorway-pages) on the main location page, without creating thin pages for each place. If you share a building, the second address line matters even more, and our guide to writing the [suite number and floor on your Google Business Profile](/guides/suite-number-and-floor-on-google-business-profile-for-a-practice-in-a-medical-building) shows where each piece goes."
      ),
      h2("What to do if you have no visitable office"),
      ul(
        "Choose the service-area setup and hide the address, as described in [service area versus storefront profiles](/guides/service-area-vs-storefront-google-business-profile-for-a-medical-practice).",
        "If you see clients only by video, say so in the description and list the states where you are licensed.",
        "Keep your website contact page honest about where sessions happen, and list the mailing address separately.",
        "Never invent a suite number or borrow another business's address."
      ),
      p(
        "For a therapist who works from home, the steps are covered in [Google Business Profile for a therapist who works from home](/guides/google-business-profile-for-a-therapist-who-works-from-home)."
      ),
      h3("Evidence to keep on file"),
      p(
        "Save a photo of the door sign, a copy of the lease or sublease and a dated photo of the entrance. Google may ask for a short video that shows the signage, the office and proof you can enter. A practice that keeps these ready answers a verification request in a day instead of losing the listing for weeks."
      ),
      h2("Keep every other listing consistent"),
      p(
        "Whatever you decide, use the same name, address and phone number on the website, directories and social profiles. A shared suite with different suite numbers on different sites is one of the most common causes of a mismatch, and the fix is covered in our guide to [name, address and phone consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it)."
      ),
    ],
    faqs: [
      {
        q: "Can I use a virtual office address for my therapy practice?",
        a: "Not as a public location. Google wants a place where clients can be met in person during the hours listed. A virtual address can be your mailing address, but it should not appear as the practice's visitable location.",
      },
      {
        q: "What if I sublet a room from another therapist?",
        a: "It can qualify if sessions really happen there. Show only the hours you use the room, and be ready to show a lease or sublease and a photo of the entrance if Google asks for proof.",
      },
      {
        q: "Should I hide my address if I see clients at home?",
        a: "If clients visit your home office, you may show the address, but many therapists prefer the service-area setup to keep the street address private. If you see no clients at home, hide it.",
      },
      {
        q: "What happens if Google suspends the listing?",
        a: "You will need to fix the cause and submit a reinstatement request with evidence. Our suspended-profile guide walks through that process. Expect days to weeks, and keep your photos and documents ready before you start.",
      },
      {
        q: "Can two clinicians in one suite each have a profile?",
        a: "Individual practitioners may have their own listing if they are public-facing and not just staff. Each listing must use a distinct profile name and category, and the practice listing should not be duplicated.",
      },
    ],
    citations: [GBP_GUIDELINES, FL_MENTAL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/fix-a-suspended-google-business-profile", label: "Fix a Suspended Profile", description: "Reinstatement steps and evidence." },
      { href: "/guides/how-to-verify-a-google-business-profile-for-a-medical-practice", label: "Verify Your Profile", description: "How Google checks a location." },
      { href: "/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network", label: "Keep Listings Current", description: "What to update when something changes." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1016
  {
    slug: "yelp-and-facebook-pages-for-a-medical-practice-claiming-them-and-keeping-them-consistent",
    keyword: "Yelp and Facebook pages for a medical practice: claiming them and keeping them consistent",
    category: "Checklist",
    title: "Yelp and Facebook Pages for a Medical Practice: Claiming Them and Keeping Them Consistent",
    metaTitle: "Claim Yelp and Facebook Pages for a Medical Practice",
    metaDescription:
      "How to claim and correct the Yelp and Facebook pages that already exist for a medical practice. Call (561) 291-2681.",
    answer:
      "Yelp and Facebook often hold a page for your practice that you never created. Search both, claim the existing page, correct the name, address, phone and hours to match Google exactly, and remove duplicates. Do not ask patients to post reviews on Yelp, because Yelp's policy discourages review solicitation.",
    author: "Liam Costello",
    publishDate: "2026-10-16T09:40:00Z",
    dateModified: "2026-10-16",
    readMinutes: 6,
    sections: [
      h2("Why these two pages matter even if you never use them"),
      p(
        "Both sites create pages from public data, so a patient searching your name may already find a Yelp listing with an old phone number or a Facebook page with the wrong hours. Search engines read those pages, and so do map apps and assistants. An unclaimed page you do not control can undercut an otherwise careful profile."
      ),
      p(
        "Claiming is not the same as using. You can claim, correct and then leave a page quiet, as long as the details are right and someone checks it each quarter."
      ),
      h2("A six-step claim and clean-up"),
      ol(
        "Search the practice name, each provider's name and the old address on Yelp and Facebook. Note every page you find, including duplicates and closed-business pages.",
        "Claim the correct page using a practice-owned email, not a personal one.",
        "Match the name, address, phone and website to your Google Business Profile exactly, including suite numbers and punctuation.",
        "Set the hours, add a current photo of the building and choose the closest category.",
        "Report duplicates and pages for locations you no longer use, using each site's tools.",
        "Add both pages to your quarterly checklist so changes of phone number, provider or hours reach them."
      ),
      p(
        "The wider job of keeping every listing alike is covered in our [local citation building checklist](/guides/local-citation-building-checklist-for-a-medical-practice), and the habit of finding mismatches is explained in [name, address and phone consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it)."
      ),
      h2("Handling reviews on each site"),
      table(
        ["Site", "What to do"],
        ["Yelp", "Do not ask patients to post. Yelp's recommendation software can hide solicited reviews. Reply to reviews that appear, in general terms."],
        ["Facebook", "Recommendations appear on the page. Reply in general terms and never confirm someone is a patient."],
        ["Both", "Report reviews that break the site's rules through its own tool, and keep a note of what you sent."]
      ),
      p(
        "Replies on either site follow the same privacy rule as Google. Our guide on [responding to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review) gives wording that does not confirm anyone's care."
      ),
      h3("Facebook page basics"),
      ul(
        "Use the practice's real name as the page name, not a keyword string.",
        "Add the phone number with a click-to-call link and the website to the About section.",
        "Pin a short post with hours, address and how to book.",
        "Turn off or monitor messages, and state in the About section that the page is not for health questions."
      ),
      h2("Check the result a patient would see"),
      p(
        "Search the practice name on a phone. Open each result and compare it line by line with the website footer. Any difference in phone, suite number or hours is the next correction. Repeat after a move, a provider change or an area-code change."
      ),
    ],
    faqs: [
      {
        q: "Do we need a Yelp page for a medical practice?",
        a: "You do not need to be active there, but Yelp likely already has a page. Claim it, fix the details and monitor it. Leaving wrong information live can send patients to the wrong number or address.",
      },
      {
        q: "Can we ask patients to review us on Yelp?",
        a: "Yelp discourages asking for reviews and may filter them. Review requests belong on Google, sent to every patient without screening who is asked. Check each platform's current policy before inviting reviews anywhere else.",
      },
      {
        q: "What if there are two pages for the same practice?",
        a: "Claim the correct one, then use the site's duplicate or closed-business report for the other. Keep the same name, address and phone on the surviving page so it matches Google.",
      },
      {
        q: "Should the practice use a personal Facebook profile to manage the page?",
        a: "Admin access is tied to personal accounts on Facebook, so use staff members who are likely to stay and list more than one admin. Review the admin list each quarter and remove anyone who has left.",
      },
      {
        q: "How often should these pages be checked?",
        a: "Quarterly, and any time the phone, address, hours or providers change. Put it on the same calendar as your Google Business Profile review so none of them are forgotten.",
      },
    ],
    citations: [
      { publisher: "Yelp", label: "Yelp's recommendation software and review policies", href: "https://www.yelp-support.com/article/What-is-Yelps-recommendation-software" },
      { publisher: "Meta Business Help Center", label: "Facebook page information and settings", href: "https://www.facebook.com/business/help" },
      GBP_GUIDELINES,
    ],
    links: [
      { href: "/guides/healthgrades-zocdoc-vitals-profiles-for-a-medical-practice", label: "Healthgrades and Zocdoc", description: "Other profiles patients see." },
      { href: "/guides/apple-maps-and-bing-places-for-a-medical-practice", label: "Apple Maps and Bing", description: "Two more listings to claim." },
      { href: "/guides/google-business-profile-vs-website-for-patient-acquisition", label: "Profile vs Website", description: "Where patients decide first." },
      { href: "/services/online-reputation-management", label: "Reputation Management", description: "Our review and listing service." },
    ],
  },

  // ---------------------------------------------------------------- 1017
  {
    slug: "medicare-and-medicaid-acceptance-wording-on-a-medical-practice-website",
    keyword: "Medicare and Medicaid acceptance wording on a medical practice website",
    category: "Checklist",
    title: "Medicare and Medicaid Acceptance Wording on a Medical Practice Website",
    metaTitle: "Medicare and Medicaid Wording on a Practice Website",
    metaDescription:
      "How a medical practice should word Medicare and Medicaid acceptance on its website so patients are not misled. Call (561) 291-2681.",
    answer:
      "State exactly which Medicare and Medicaid programs the practice participates in, name the managed-care plans separately, and add a last-checked date. Do not write that you accept all Medicare, because Medicare Advantage and Medicaid managed-care plans each have their own networks that the practice must confirm one by one.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T10:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why the word accept is too vague"),
      p(
        "Patients on Medicare or Medicaid ask a narrow question: will this office see me, and will I be billed? The phrase we accept Medicare answers neither. Original Medicare, Medicare Advantage plans, and Medicaid managed-care plans are different products, and a practice can participate in one and not another."
      ),
      p(
        "A page that overpromises sends someone to an appointment that the front desk then has to cancel. That produces a missed visit, an angry call and often a public review about billing, none of which the website was meant to cause."
      ),
      h2("Say what you actually do, in separate lines"),
      table(
        ["Program", "Wording that stays accurate"],
        ["Original Medicare (Parts A and B)", "We are enrolled in Medicare and bill it directly. Call us to confirm before you book."],
        ["Medicare Advantage plans", "We are in network with the plans listed below. Plan names change each year, so confirm with your plan."],
        ["Medicaid (fee for service)", "State whether you accept Florida Medicaid directly, and for which services."],
        ["Medicaid managed-care plans", "List each plan by name, and add a last-checked date."],
        ["Plans you do not accept", "Say so plainly, and give your self-pay or referral option."]
      ),
      p(
        "Each line should come from the billing lead in writing, not from memory. If you have not verified a plan this quarter, take it off the list until you have."
      ),
      h2("Wording to avoid"),
      ul(
        "We accept all major insurance, or any phrase that implies every plan.",
        "Medicare logos or the words approved by Medicare, which can suggest a government endorsement.",
        "Promising that a visit or service will be covered, since coverage is decided by the plan.",
        "Different lists on different pages, which is the quickest way to contradict yourself."
      ),
      h3("Keep the date visible"),
      p(
        "A line such as insurance list last checked on October 16 tells a reader how much to trust the list, and tells your staff when the next review is due. Pair it with a plain request to call the insurer to confirm network status for a specific plan."
      ),
      h2("Connect the page to everything else"),
      p(
        "Use the same wording on the Google Business Profile, in the directories and on the phone greeting. Our guide on [building an accepted-insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) covers the layout, and [what to update when a practice joins or leaves a network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network) lists the places to change after a contract moves. Wording about insurance acceptance pairs well with a short explanation of [why a checkup can become two charges](/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website) when a new concern comes up during the visit. Counseling pages for older adults depend on this wording, and our guide to an [older adult counseling page](/guides/older-adult-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to place it next to easy to read contact steps."
      ),
      p(
        "Questions about coverage turn into billing questions, so link the page to your [billing and payment questions page](/guides/billing-and-payment-questions-page-for-a-medical-practice). This page is general information, not legal advice, and a compliance adviser should review the final wording."
      ),
      p(
        "A short staff script helps too. When a patient asks whether the office takes their plan, the front desk can say which programs the practice participates in, offer to check the specific plan and point the caller to the insurer for a final answer. Using one script on the phone, in messages and on the page keeps every answer identical."
      ),
    ],
    faqs: [
      {
        q: "Is it wrong to say we accept Medicare?",
        a: "It is not wrong, but it is incomplete. Say whether you bill Original Medicare, which Medicare Advantage plans you are in network with, and ask patients to confirm with their plan before booking.",
      },
      {
        q: "Do we have to list every Medicaid plan?",
        a: "List the managed-care plans you have confirmed, by name, with a last-checked date. If you are not sure about a plan, leave it off and invite the patient to call the office.",
      },
      {
        q: "Can we use the Medicare logo on our website?",
        a: "Avoid it. Using a government logo can suggest the practice is endorsed or run by the program. Use plain text to describe participation instead.",
      },
      {
        q: "How often should the wording be reviewed?",
        a: "At least each fall, when Medicare Advantage plans change, and any time a contract starts or ends. Update the last-checked date whenever the billing lead confirms the list.",
      },
      {
        q: "What should the page say to a patient we cannot take?",
        a: "Say it plainly and kindly, explain any self-pay option, and point them to their plan's provider directory or to Medicare.gov or the state Medicaid office for in-network choices.",
      },
    ],
    citations: [MEDICARE, MEDICAID, FTC_ADS],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted-Insurance Page", description: "Build the page patients look for first." },
      { href: "/guides/open-enrollment-season-update-for-a-medical-practice-insurance-pages-and-patient-messages", label: "Open Enrollment Update", description: "A fall checklist for plan changes." },
      { href: "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website", label: "Self-Pay Prices", description: "What to say when insurance is not an option." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1018
  {
    slug: "caregiver-and-family-member-communication-policy-page-for-a-medical-practice",
    keyword: "caregiver and family member communication policy page for a medical practice",
    category: "How-to",
    title: "Caregiver and Family Member Communication Policy Page for a Medical Practice",
    metaTitle: "Caregiver and Family Communication Policy Page",
    metaDescription:
      "How to explain on your website who the office can speak with and how a patient sets that up. Call (561) 291-2681.",
    answer:
      "A caregiver communication page tells patients and their families that the office speaks about a patient's care only with people the patient has authorized in writing, explains how to name someone, and says what staff can do without that permission. It sets expectations before an anxious phone call, without sharing anything about any patient.",
    author: "Liam Costello",
    publishDate: "2026-10-16T10:20:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("What families call to ask"),
      p(
        "Adult children manage a parent's appointments. A spouse calls about a bill. A friend drives a patient and wants to know what happens next. Front-desk staff hear these calls every day, and without a clear policy each one becomes a judgment call made under pressure."
      ),
      p(
        "A public page does not change the rules, which come from the HIPAA Privacy Rule and the practice's own forms. It simply states them before the call, so the answer sounds like a policy and not a refusal."
      ),
      h2("What the page should explain"),
      ul(
        "The office shares information about a patient's care only with people the patient has named, usually through a signed form.",
        "How a patient names a family member or caregiver, and where the form is available.",
        "That a patient can change or remove that person at any time.",
        "What the office can do without authorization, such as scheduling, taking a message or confirming that a form was received without describing the patient's care.",
        "What happens when a patient cannot make decisions, which follows legal documents the office reviews with the patient or the representative."
      ),
      p(
        "Keep each point to a sentence or two. The page is not the place for legal detail, and a link to the actual form does more than a long explanation."
      ),
      h2("A simple layout that people can scan"),
      table(
        ["Question a caller has", "Short answer on the page"],
        ["Can I speak to the office about my parent?", "Yes, if your parent has named you on a signed form. If not, we can take a message."],
        ["How do I get added?", "The patient signs the authorization form at a visit or through the secure portal."],
        ["Can I get the patient's results?", "Only if authorized, and results are shared through the portal or in a conversation with the patient."],
        ["What if the patient cannot sign?", "Please call the office. A legal representative can act for the patient with the proper documents."]
      ),
      h3("Keep the tone kind"),
      p(
        "People call because they are worried. Begin with an acknowledgment that caring for a family member is hard, then give the process. A page that reads as a wall of refusals sends caregivers to a one-star review. Foster and adoptive families raise a version of the same question, and our guide to an [adoption and foster family counseling page](/guides/adoption-and-foster-family-counseling-page-for-a-counseling-practice-without-clinical-claims) explains how to describe who may consent and who may be contacted."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Link the page from the contact page, the new-patient forms page and the portal login page. Our guides on [new patient forms published without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) and the [patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) show how to place those links safely. Referral paperwork raises the same consent questions, and a [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) for a primary care practice shows how to explain what is shared and with whom. For adults who attend a client's counseling session, a [support person in session policy page for a counseling practice](/guides/support-person-in-session-policy-page-for-a-counseling-practice-without-clinical-claims) explains consent and privacy."
      ),
      p(
        "Train the front desk to use the same words as the page. Consistency matters more than detail, and a staff member who can say it is our policy to speak only with people the patient has named, and here is how to be added, protects both the patient and the office. This page is general information, and counsel or a compliance officer should review the final text. Family members who arrange care often start on the website, so see how to lay it out for them in our guide to a [senior-friendly website layout for a primary care practice](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access). When a parent brings a teenager to the visit, the [adolescent visit and parent presence page](/guides/adolescent-visit-and-parent-presence-page-for-a-family-medicine-practice-without-legal-advice) shows how to explain time in the room and what the office shares with a parent."
      ),
    ],
    faqs: [
      {
        q: "Can the office tell a family member that someone is a patient?",
        a: "Do not confirm or deny that a person is a patient to anyone who is not authorized. A safe phrase is that the office cannot share information about anyone, and can take a message if the caller leaves a number.",
      },
      {
        q: "How does a patient add a caregiver?",
        a: "Usually by signing a written authorization naming the person and what may be shared. The page should say where to get the form, and the office should file it in the patient's record.",
      },
      {
        q: "What about parents of a minor?",
        a: "Rules on minors vary by situation and by state law, so the page should state the general policy and invite parents to call. The practice's compliance adviser should set the exact language.",
      },
      {
        q: "Can staff schedule an appointment for someone who is not their patient?",
        a: "Scheduling an appointment is usually fine, because it does not reveal care information. Staff can book a time, give the address and confirm what to bring without discussing the reason for the visit.",
      },
      {
        q: "Should the policy appear on the Google Business Profile too?",
        a: "A short line with a link to the page is enough. Keep details off the profile, and use the same wording as the website so callers hear a single answer.",
      },
    ],
    citations: [HHS_PRIVACY, GOOGLE_HELPFUL, FTC_ADS],
    links: [
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "Contact Page", description: "Where callers look first." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Requests", description: "How patients ask for their own records." },
      { href: "/guides/front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first", label: "Front Desk and Care Team", description: "Who patients meet first." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1019
  {
    slug: "addiction-counseling-services-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "addiction counseling services page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Addiction Counseling Services Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Addiction Counseling Page Without Clinical Claims",
    metaDescription:
      "How a counseling practice can write an addiction counseling page that helps families find it without promising results. Call (561) 291-2681.",
    answer:
      "An addiction counseling page should say who the practice sees, what a first session involves, which licensed clinician provides it, and where to go for emergencies or higher levels of care. It should not promise recovery, claim cure rates, or describe treatment as a guaranteed result, and it should point to SAMHSA and 988 for urgent needs.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T10:40:00Z",
    dateModified: "2026-10-16",
    readMinutes: 7,
    sections: [
      h2("Who searches for this page, and in what state"),
      p(
        "People who search for addiction counseling are often a worried family member, a person who has just had a hard week, or someone who was told by a doctor to find a counselor. They read quickly and they are looking for two things: is this the right kind of help, and what happens if I call."
      ),
      p(
        "A page that answers those two questions plainly, without stigma and without hype, does more than a page that lists every substance by name. It also protects the practice, because addiction is an area where promises of results and of rapid recovery attract complaints."
      ),
      h2("What an honest services page includes"),
      ul(
        "The kinds of counseling offered, such as individual or family sessions, in the words your licensed clinician actually uses.",
        "Who is seen, by age group, and whether the practice sees people who are also working with a doctor or program.",
        "What the first session is for, such as a conversation about concerns and goals, and what the client does not need to bring.",
        "How sessions are held and how long they last, how fees work and whether the practice is in network.",
        "The clinician's name and license as the state shows it, and nothing more."
      ),
      p(
        "Describe a counseling session, not an outcome. A sentence such as sessions are a place to talk about what is going on and plan next steps is honest. A sentence that implies the client will stop using, or will be fixed, is a claim the practice cannot support."
      ),
      h2("What a counseling practice should say about its limits"),
      table(
        ["Situation", "What the page should say"],
        ["Someone needs medical help to stop using safely", "Counseling is not medical detox. Talk to a physician or call the SAMHSA helpline for options."],
        ["The practice does not offer an intensive or residential program", "Say so, and describe how to find those services through a doctor or SAMHSA."],
        ["There is an emergency or an overdose", "Call 911. For emotional crisis, call or text 988."],
        ["A client wants a certain outcome", "We cannot promise results. We can offer a place to work on this together."]
      ),
      p(
        "That honesty is a trust signal, not a weakness. Families who see a practice that knows where its work ends are more likely to call."
      ),
      h3("Words to choose with care"),
      p(
        "Prefer person-first language, such as a person with a substance use disorder, and avoid labels like addict or clean. Avoid brand names of medications, and do not discuss prescribing unless the practice has a prescriber and a policy. Use the terms your licensing board uses for the clinician."
      ),
      h2("Privacy and tracking"),
      p(
        "Pages about substance use are sensitive, so use the same careful settings as any health page. Do not send page names, form text or phone numbers to advertising platforms, and follow the steps in [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website). Keep a link to your [emergency and crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) on the page so help is one click away."
      ),
      p(
        "Finally, build the page in the same style as your other specialty pages, which our guide on [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) explains, and link it from the services menu."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling page say it treats addiction?",
        a: "Use only language that matches the clinician's license and scope. Counselors provide counseling. Do not claim to treat, cure or guarantee recovery, and do not imply medical care you do not provide.",
      },
      {
        q: "Should the page list every substance?",
        a: "Usually not. A long list reads like a keyword block and can feel clinical. Describe the concerns people bring in plain words and invite them to call or write if their situation is not described.",
      },
      {
        q: "What crisis information belongs on the page?",
        a: "Include 911 for emergencies, 988 for emotional crisis and the SAMHSA National Helpline for finding treatment. Place the line near the top or in a clear box, not at the bottom of the page.",
      },
      {
        q: "Can the practice share client stories or testimonials?",
        a: "No. Substance use information is especially sensitive, and a testimonial can identify a person. Do not publish stories, initials or composite cases presented as real.",
      },
      {
        q: "Is it fine to say we accept insurance?",
        a: "Only for plans you have verified. Say which plans, add a last-checked date, and explain fees and self-pay options. Never imply coverage will apply to a specific service before the plan confirms it.",
      },
    ],
    citations: [SAMHSA, LIFELINE, FL_MENTAL],
    links: [
      { href: "/guides/group-therapy-page-for-a-counseling-practice-without-clinical-claims", label: "Group Therapy Page", description: "Describe groups without promising results." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Consultation Call Page", description: "Let families ask before booking." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What to expect at the first visit." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1020
  {
    slug: "grief-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "grief counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Grief Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Grief Counseling Page Without Clinical Claims",
    metaDescription:
      "How to write a grief counseling page that is gentle, searchable and free of clinical promises. Call (561) 291-2681.",
    answer:
      "A grief counseling page should speak gently, say who the counselor is and how sessions work, and describe the support as a place to talk, not a way to fix or end grief. It should avoid timelines, stages presented as rules, and claims of healing, and it should include crisis resources for someone in distress.",
    author: "Liam Costello",
    publishDate: "2026-10-16T11:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Begin where the reader is"),
      p(
        "Someone who searches for grief counseling may have lost a parent last week or a spouse last year. They are tired and often reading late at night on a phone. The first lines of the page should acknowledge the loss in plain words and tell them they do not have to be ready to start."
      ),
      p(
        "That tone is not decoration. It is the difference between a page that sounds like a person and one that sounds like a brochure, and it is what makes a grieving reader pick up the phone."
      ),
      h2("What belongs on the page"),
      ol(
        "A short opening that names the kinds of loss the counselor sees, such as the death of a family member, a friend or a pet, without ranking them.",
        "A paragraph on what sessions are like, how often they usually meet and that clients decide the pace.",
        "The counselor's name, license and a line on their approach in their own words.",
        "Practical details, including fees, insurance, in-person and video options and how to book.",
        "A clear line on what to do in a crisis."
      ),
      p(
        "Write each step as the reader would ask it. How do I begin, who will I talk to, what will it cost, what if I cannot talk yet?"
      ),
      h2("Claims to leave out"),
      table(
        ["Avoid", "Say this instead"],
        ["You will heal in six sessions.", "Grief has no schedule. We go at your pace."],
        ["The five stages of grief explained as a path everyone follows.", "People experience loss in many ways. We start with what is true for you."],
        ["Our approach cures complicated grief.", "Our counselor offers support for people finding it hard to carry a loss."],
        ["A story about a former client.", "No client stories. Describe the service, not a person."]
      ),
      p(
        "Stage models and timelines can make people feel they are doing grief wrong. Leaving them out is kinder and it avoids a clinical claim the practice cannot back."
      ),
      h3("Link to related support, not just to booking"),
      p(
        "Some visitors are not ready to book, so offer a path that does not require it. A short list of community resources, such as a local hospice bereavement program or a support group, gives them somewhere to go, and it builds trust with referral sources. Our guide on [group therapy pages](/guides/group-therapy-page-for-a-counseling-practice-without-clinical-claims) explains how to describe a group without promising outcomes. Many grieving clients are older adults, and our guide to an [older adult counseling page](/guides/older-adult-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to write for them and for the family members who call on their behalf."
      ),
      h2("Crisis and safety information"),
      p(
        "Grief can bring thoughts of self-harm. Place a visible line near the top that says if you are in crisis call or text 988, and if there is an emergency call 911. The wording and placement are covered in our guide to an [emergency and crisis resources section for a counseling practice](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website)."
      ),
      p(
        "Finish with a booking path that is easy to find, such as a phone number and a short form, as described in our guide on [what to put on a first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice). Keep it low pressure: a call or a message is the first step, and nobody has to commit to a series of sessions."
      ),
    ],
    faqs: [
      {
        q: "How long does grief counseling take?",
        a: "There is no standard length, and a page should not promise one. The honest answer is that clients and the counselor decide the pace and frequency together, and sessions continue only as long as the client wants them to.",
      },
      {
        q: "Should the page list the stages of grief?",
        a: "It is better not to. Stage models can feel like a checklist and may suggest that someone is grieving incorrectly. Describe how the counselor listens and supports instead of describing how grief should go.",
      },
      {
        q: "Can we say we help people heal?",
        a: "Healing implies an outcome the practice cannot promise. Use words like support, listen and work together, and let the counselor describe their approach in their own words without claims of results.",
      },
      {
        q: "What about grief related to a pet?",
        a: "If the counselor sees clients for it, say so. People search for it, and acknowledging it plainly is respectful. Keep the language as gentle as for any other loss.",
      },
      {
        q: "Do we need crisis information on a grief page?",
        a: "Yes. Include 988 for emotional crisis and 911 for emergencies, in a place a tired reader will see. It costs nothing and may matter a great deal.",
      },
    ],
    citations: [LIFELINE, FL_MENTAL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Our Approach Page", description: "Describe how you work without outcome claims." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Introduce the counselor honestly." },
      { href: "/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice", label: "Therapy FAQ Page", description: "Questions to answer without advice." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1021
  {
    slug: "parenting-and-family-therapy-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "parenting and family therapy page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Parenting and Family Therapy Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Parenting and Family Therapy Page Without Claims",
    metaDescription:
      "How to write a parenting and family therapy page that explains who attends and how sessions work. Call (561) 291-2681.",
    answer:
      "A parenting and family therapy page should explain who comes to sessions, how consent works when a child is involved, how often the family meets and how scheduling works. It should describe the counselor's approach in plain words, avoid promises about behavior or family outcomes, and say clearly what the practice does not do, such as custody evaluations.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T11:20:00Z",
    dateModified: "2026-10-28",
    readMinutes: 7,
    sections: [
      h2("Parents search with a particular question"),
      p(
        "A parent who types parent coaching or family therapy near me usually has a concrete worry: a child who will not talk, a household in constant conflict, or a big change such as a move or a divorce. They want to know whether the counselor sees families together, whether they must bring the child and what a session looks like."
      ),
      p(
        "Answer those directly. A page that talks only in terms of family systems and modalities leaves the parent guessing."
      ),
      h2("Explain who attends and how"),
      table(
        ["Question", "What the page can say"],
        ["Do we all come together?", "It depends on the family. Many begin with parents, and the counselor then decides with you who joins."],
        ["Can a teen come alone?", "Say what the practice allows, and link to the page that covers consent and confidentiality."],
        ["Do you see younger children?", "State the age range the counselor works with, honestly."],
        ["Can we meet by video?", "Say which sessions can be held online and which cannot."]
      ),
      p(
        "Consent for a minor is set by state law and by the practice's own policy, so the page should state the practice's approach and link to the longer explanation in our guide on [teen therapy pages for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims)."
      ),
      h2("Describe the work without promising results"),
      ul(
        "Say sessions are a place to talk about patterns at home and to plan changes together.",
        "Describe the counselor's training and license as the board lists them, in a sentence.",
        "Avoid words like fix, cure or improve behavior, and avoid timelines.",
        "Do not suggest that therapy will prevent a diagnosis or repair a relationship."
      ),
      p(
        "A parent should finish the page knowing what they will do, not what will happen to their child."
      ),
      h3("State what the practice does not do"),
      p(
        "Be plain that the practice does not provide custody evaluations, court testimony or a written opinion for a legal dispute, if that is the policy. Families in a divorce often ask, and a clear answer prevents a hard conversation later. Point them to the licensed professionals who do those evaluations. Adoptive and foster families have their own questions about consent and agencies, and our guide to an [adoption and foster family counseling page](/guides/adoption-and-foster-family-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to answer them. Families who also see a family medicine office for a teenager may want that office to explain how visits work, as described in our guide to the [adolescent visit and parent presence page](/guides/adolescent-visit-and-parent-presence-page-for-a-family-medicine-practice-without-legal-advice)."
      ),
      h2("Practical details that reduce drop-off"),
      p(
        "Families have to coordinate schedules, so list the hours the counselor sees families, how to change an appointment and how the cancellation policy works. Our guides on [cancellation and no-show policy pages](/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice) and on a [waitlist page for a therapy practice with a full caseload](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) show how to word them kindly. Parents also ask whether a child can wait in the lobby during their own session, which a [children in the waiting room policy page for a counseling practice](/guides/children-in-the-waiting-room-policy-page-for-a-counseling-practice) answers."
      ),
      p(
        "Include fees, insurance in plain terms and a crisis line, as covered in the guide on [emergency and crisis resources](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). End with a single way to begin, such as a call or a short contact form that does not ask for details about anyone's struggles. Families with an LGBTQ+ teen or parent look for specific signs of welcome, and a clear [LGBTQ+ affirming counseling page](/guides/lgbtq-affirming-counseling-page-for-a-counseling-practice-without-clinical-claims) is a better answer than a generic line about everyone being welcome."
      ),
      p(
        "Review the page once a year, and again whenever the counselor's schedule, fees or policies change. Families rely on the details, and a page that still lists last year's hours or a former counselor undermines the trust the rest of the page worked to build."
      ),
    ],
    faqs: [
      {
        q: "Does a family have to bring the child to the first session?",
        a: "It depends on the counselor. Many begin with the parents to talk about concerns. The page should say how the practice handles it and invite parents to call with questions before booking.",
      },
      {
        q: "Can the page say therapy will improve behavior?",
        a: "No. Behavior outcomes cannot be promised. Describe what sessions are, such as a place to talk and plan, and let the family and counselor decide goals together.",
      },
      {
        q: "Should the page mention custody or court?",
        a: "Yes, briefly, if families often ask. State clearly whether the practice provides evaluations or testimony. Most counseling practices do not, and saying so early avoids confusion.",
      },
      {
        q: "How do we describe confidentiality with minors?",
        a: "State the general policy in a sentence and link to the fuller explanation. Rules vary by age and by state, so have the clinician and the practice's adviser approve the wording.",
      },
      {
        q: "What belongs in the contact form?",
        a: "Name, phone and preferred time. Do not ask for a child's name, diagnosis or the details of the problem. Those belong in a conversation or a secure intake after the first call.",
      },
    ],
    citations: [FL_MENTAL, LIFELINE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Couples Counseling Page", description: "Another relationship service page." },
      { href: "/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice", label: "Intake Paperwork Email", description: "What to send before the first session." },
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Instructions", description: "Prepare families for video sessions." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1022
  {
    slug: "perinatal-and-postpartum-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "perinatal and postpartum counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Perinatal and Postpartum Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Perinatal and Postpartum Counseling Page Guide",
    metaDescription:
      "How to write a perinatal and postpartum counseling page that is warm, accurate and free of clinical claims. Call (561) 291-2681.",
    answer:
      "A perinatal counseling page should speak to expecting and new parents in plain words, describe the counselor's training as the license shows it, explain how sessions work and whether babies may attend, and show crisis lines prominently. It should not diagnose, promise recovery or imply that counseling replaces medical care from an obstetrician or doctor.",
    author: "Liam Costello",
    publishDate: "2026-10-16T11:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 7,
    sections: [
      h2("Who reads this page and what they need first"),
      p(
        "The reader might be seven months pregnant and anxious, or six weeks after a birth and exhausted. They often read in short windows, holding a baby. A good page makes the next step obvious in the first screen, and it does not require them to understand terminology."
      ),
      p(
        "It also needs to be honest about what counseling can do. Many people in this period need a doctor, and a page that blurs the two puts readers at risk."
      ),
      h2("Open with practical answers"),
      table(
        ["What parents ask", "What the page can answer"],
        ["Can I bring my baby?", "State your policy for infants in session, and whether video sessions fit a feeding schedule."],
        ["Do I need a referral?", "Most counseling does not need one, but say whether your insurance requires it."],
        ["Do you see partners?", "Say whether partners or both parents can attend."],
        ["How soon can I begin?", "Give your real scheduling picture, or link to the waitlist page."],
        ["Is evening or video available?", "List hours and the online option."]
      ),
      p(
        "Practical details lower the barrier to calling, and they cost the practice nothing to publish."
      ),
      h2("Say what counseling is and is not"),
      ul(
        "Counseling is a place to talk about the transition to parenthood, worries, sleep, relationships and feelings.",
        "It is not emergency care and it is not medical care. Parents who have concerns about their health should talk to their doctor or midwife.",
        "The page does not diagnose, and it should not list symptoms as a self-test.",
        "No outcome language. Avoid recover, cure and prevent."
      ),
      p(
        "A short statement of this kind builds trust, and it keeps the page in line with how the licensing board expects counselors to describe their work."
      ),
      h3("Crisis information near the top"),
      p(
        "Perinatal distress can include thoughts of self-harm or of harming a baby, so crisis resources must be visible without scrolling. Include 988 and 911, and the National Maternal Mental Health Hotline, which offers confidential help by phone or text at all hours."
      ),
      h2("Training and credentials, stated honestly"),
      p(
        "Name the counselor and the license as the state lists it. If the counselor has completed additional training in perinatal mental health, say so with the name of the program, and only if it is documented. Never imply a certification the practice cannot show. Our guide on [therapist bio pages](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) explains how to write that paragraph. New parents who are also caring for an older relative carry a double load, and our guide to a [caregiver support counseling page](/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to speak to them honestly."
      ),
      p(
        "Link the page to your [telehealth instructions](/guides/telehealth-visit-instructions-page-for-a-therapy-practice) and to your [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained), since new parents will want to know both before they call."
      ),
      p(
        "Finally, consider the hours new parents can actually keep. Evening or early-morning slots and short video visits can matter more than any wording on the page, so say plainly what the schedule allows. If the practice cannot see someone soon, a clear note about the waitlist and a list of community supports is kinder than silence, and it keeps the page honest about what the practice can offer right now. Families who are growing through adoption or foster care need a page of their own, as our guide to an [adoption and foster family counseling page](/guides/adoption-and-foster-family-counseling-page-for-a-counseling-practice-without-clinical-claims) explains."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling page say it treats postpartum depression?",
        a: "Use language that matches the clinician's license and scope. Describe the support offered and avoid claiming to treat or cure a condition. Let the clinician approve any diagnostic term before it appears.",
      },
      {
        q: "Should the page list symptoms?",
        a: "Avoid checklists that read like a self-diagnosis. Describe what people often come to talk about and invite anyone worried about their health to contact a doctor or the helpline.",
      },
      {
        q: "What crisis resources should be on the page?",
        a: "988 for emotional crisis, 911 for an emergency, and the National Maternal Mental Health Hotline, which offers confidential support at all hours. Put them near the top in a visible box.",
      },
      {
        q: "Can the baby come to the session?",
        a: "That is the practice's decision. State the policy plainly, mention feeding and nap needs for video sessions, and tell parents they do not have to arrange childcare before calling.",
      },
      {
        q: "Do we need a medical review of the page?",
        a: "Counselors should check the wording against their license. If the page mentions medical topics, a physician or midwife may review it, and the page must not name any reviewer who has not actually done so.",
      },
    ],
    citations: [
      { publisher: "HRSA", label: "National Maternal Mental Health Hotline", href: "https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline" },
      LIFELINE,
      FL_MENTAL,
    ],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "Explain the first visit." },
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Insurance Verification Page", description: "Help clients check benefits." },
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Specialty Pages", description: "Write specialty pages without claims." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1023
  {
    slug: "transferring-care-from-another-doctor-page-for-a-primary-care-practice",
    keyword: "transferring care from another doctor page for a primary care practice",
    category: "How-to",
    title: "Transferring Care From Another Doctor: A Page for a Primary Care Practice",
    metaTitle: "Transferring Care to a New Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain on its website how a patient transfers care from another doctor. Call (561) 291-2681.",
    answer:
      "A transfer-of-care page tells a new patient the steps for moving from another doctor: sign a records release, bring a medication list, book a first visit and keep seeing the current doctor until the new visit happens. It should explain how long records take to arrive and never promise a specific appointment date or outcome.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T12:00:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Why people search for this"),
      p(
        "Patients change doctors because they moved, their insurance changed, their doctor retired or they simply want a different fit. Many worry about gaps in care, so they search for how to switch doctors and look for a practice that explains the steps without asking them to figure it out."
      ),
      p(
        "A page that lays out the process in order reduces phone calls and signals that the practice is organized. It is also the page most likely to turn a search into a booked first visit."
      ),
      h2("The steps, in the order a patient does them"),
      ol(
        "Check that the practice is accepting new patients and takes your insurance.",
        "Book a first visit, and tell the office you are transferring from another doctor.",
        "Sign a records release so your previous office can send your records here. The new office usually provides the form.",
        "Make a list of current medications, allergies and other doctors, and bring your insurance card and photo ID.",
        "Keep seeing your current doctor, and refill prescriptions there, until you have been seen at the new practice."
      ),
      p(
        "Write each step as a sentence the patient could read aloud to a family member. Keep clinical advice out of it. The page explains the process, and the doctor handles the care."
      ),
      h2("What to tell patients about records"),
      table(
        ["Topic", "Plain statement"],
        ["Who requests the records", "Our office can request them once you sign a release."],
        ["How long it takes", "It varies by office. Give a range you have seen, and say it can be longer."],
        ["Cost", "Say whether there is a fee, and that fees for records are set by the sending office and by law."],
        ["Imaging and test results", "Ask the old office to send those too, or bring a copy."]
      ),
      p(
        "Link the page to your [records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records) so patients who want to request their own copy can do so."
      ),
      h3("What not to say"),
      p(
        "Do not promise that the first visit will be quick, that all medications will continue or that the new doctor will agree with the old one. Do not criticize other practices. A transfer page should be neutral, and the new practice proves itself at the first visit."
      ),
      h2("Make the first visit easy to book"),
      p(
        "End the page with a booking path and a phone number. Our guides on [what to bring to a first appointment](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) and on [keeping the accepting-new-patients status accurate](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) support this page directly, and the [new-patient welcome message](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) is the follow-up that continues it."
      ),
      p(
        "Staff should know the page as well as patients do. When the front desk can say the same steps in the same order, a caller who has not read the page gets the same answer, and the booking happens on the first call instead of the third. A named care coordinator can help new patients gather records and referrals, and our guide to a [care coordinator and patient navigator page](/guides/care-coordinator-and-patient-navigator-page-for-a-primary-care-practice) shows how to introduce that person. Patients who need their records when a practice shuts down will look for the custodian, which our guide to a [practice closing and records custodian notice](/guides/practice-closing-and-records-custodian-notice-for-a-counseling-practice-without-legal-advice) explains how to name and publish."
      ),
    ],
    faqs: [
      {
        q: "Do I need to tell my old doctor I am leaving?",
        a: "You do not need a reason, but you do need to sign a release so records can be sent. The new office can usually send the request for you, and your old doctor does not need to approve the move.",
      },
      {
        q: "How long do records take to arrive?",
        a: "It varies by office, from days to several weeks. Give your first visit a few weeks after you sign the release if you can, and bring a list of medications in case the records are late.",
      },
      {
        q: "Will I lose my refills if I switch?",
        a: "Do not stop any medication on your own. Keep refilling with your current doctor until you are seen at the new practice, and ask the new doctor how they will handle prescriptions.",
      },
      {
        q: "Can a practice refuse a transfer?",
        a: "A practice may not be accepting new patients, or may not take your insurance. Check both before you book, and ask the office what it can offer if it cannot take you.",
      },
      {
        q: "What should I bring to the first visit?",
        a: "Photo ID, your insurance card, a medication and allergy list, names of your other doctors and any records you already have. Arrive a few minutes early to finish forms.",
      },
    ],
    citations: [
      { publisher: "U.S. Department of Health and Human Services", label: "Individuals' right under HIPAA to access their health information", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html" },
      MEDICARE,
      GOOGLE_HELPFUL,
    ],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted-Insurance Page", description: "Tell new patients which plans you take." },
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling", description: "Let new patients book online." },
      { href: "/guides/primary-care-patient-acquisition-playbook", label: "Primary Care Acquisition Playbook", description: "How primary care practices find new patients." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1024
  {
    slug: "chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "chronic condition follow-up visits page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Chronic Condition Follow-Up Visits Page for a Primary Care Practice Without Clinical Claims",
    metaTitle: "Chronic Condition Follow-Up Visits Page Guide",
    metaDescription:
      "How a primary care practice can describe follow-up visits for ongoing conditions without clinical claims. Call (561) 291-2681.",
    answer:
      "A follow-up visits page tells patients with ongoing health needs how the practice schedules regular visits, what to bring, how refills and lab appointments fit in, and how to reach the office between visits. It describes the process, not the medicine, and never promises that a condition will be controlled, reversed or improved.",
    author: "Liam Costello",
    publishDate: "2026-10-16T12:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Who this page is for"),
      p(
        "Patients who live with an ongoing condition do not search for a miracle. They want to know how often they will be seen, how to get a refill without a crisis and who to call if something changes. Practices that answer those questions in advance reduce calls and missed appointments. Many practices assign a coordinator to help with referrals and paperwork between visits, as our guide to a [care coordinator and patient navigator page](/guides/care-coordinator-and-patient-navigator-page-for-a-primary-care-practice) explains."
      ),
      p(
        "This is a process page. It sits alongside your annual wellness page and your visit-types page, and it must stay on the right side of the line between describing a service and making a medical claim."
      ),
      h2("What the page should cover"),
      ul(
        "How follow-up visits are scheduled, such as booked before the patient leaves or by a reminder from the office.",
        "How long a follow-up usually lasts, and how it differs from a new-patient visit.",
        "What to bring, such as the medication list, home readings the patient has been asked to keep and questions written down.",
        "How lab work and test results fit in, and where results are shared.",
        "How refills are requested, and how far ahead to ask."
      ),
      p(
        "Keep the wording general. The doctor and patient decide what is monitored and how often. The page should never list targets, numbers or expected improvements."
      ),
      h2("A simple layout patients can scan"),
      table(
        ["A patient wonders", "The page can say"],
        ["How often do I come in?", "Your doctor will set a schedule with you. Many people are seen on a regular rhythm."],
        ["Can I do a visit by video?", "Say which follow-ups can be done by video and which need an in-person visit."],
        ["What if I run low on a prescription?", "Request a refill through the portal several days ahead. Do not wait until the last day."],
        ["Who do I call if something changes?", "Call the office. For an emergency, call 911."]
      ),
      p(
        "Link the refill line to your [prescription refill request page](/guides/prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice) and the results line to the guide on [lab results and portal message expectations](/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice)."
      ),
      h3("Wording to avoid"),
      p(
        "Do not write that the practice manages, controls or reverses a condition. Do not name a condition as a service line with a promise attached, and do not publish a list of conditions as if they were a menu. Describe the kind of visit, such as ongoing care visits, and let the doctor discuss specifics in the exam room."
      ),
      h2("Make it findable and kind"),
      p(
        "Patients may search for ongoing care without a condition name, so use the phrases they use, such as follow-up visits and regular check-ins. Add the page to your services menu and mention it from your [visit types and appointment lengths page](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website). Include the practice phone and a plain line on how to reach the office after hours, as set out in our guide on [after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice). Patients who have just left a hospital search for a different kind of follow-up, covered in our guide to a [post-hospital follow-up visit page for a primary care practice](/guides/post-hospital-follow-up-visit-page-for-a-primary-care-practice-without-clinical-claims). Patients who cannot easily travel to follow up visits may ask about house calls, which our guide to a [home visits and house calls page](/guides/home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims) explains how to answer plainly."
      ),
    ],
    faqs: [
      {
        q: "Can the page list the conditions the practice manages?",
        a: "Listing conditions risks implying outcomes and can read as a medical claim. Describe the visit type instead, and let the doctor discuss the patient's own health in the visit. If you list any, keep it factual and unpromising.",
      },
      {
        q: "Should it say how often patients are seen?",
        a: "Say that the doctor sets the schedule with each patient, and give a general idea of how scheduling works. Do not set a fixed interval that might not fit a patient's needs.",
      },
      {
        q: "Can follow-ups be done by video?",
        a: "Some can. State which ones, in plain terms, and say that the doctor decides whether a video visit is appropriate. Link to the telehealth instructions if the practice offers them.",
      },
      {
        q: "How should refills be described?",
        a: "Say how to ask, such as through the portal or a call, and how many days ahead. Add that the office cannot always refill without a recent visit, if that is the policy.",
      },
      {
        q: "What belongs in the medical disclaimer?",
        a: "A short line that the page is general information, is not medical advice and that patients should call the office or, in an emergency, 911. Keep it brief and do not use it as a substitute for careful wording.",
      },
    ],
    citations: [HHS_PRIVACY, FTC_ADS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Page", description: "Describe the yearly visit honestly." },
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Page", description: "How referrals work." },
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Portal Login Page", description: "Make the portal easy to find." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1025
  {
    slug: "hospital-affiliation-and-admitting-privileges-statement-on-a-medical-practice-website",
    keyword: "hospital affiliation and admitting privileges statement on a medical practice website",
    category: "Checklist",
    title: "Hospital Affiliation and Admitting Privileges Statement on a Medical Practice Website",
    metaTitle: "Hospital Affiliation Statement on a Practice Website",
    metaDescription:
      "How to word a hospital affiliation or admitting privileges statement on a medical practice website so it stays accurate. Call (561) 291-2681.",
    answer:
      "A hospital affiliation statement should name the hospital only if a provider holds current privileges there, say which provider, and carry a last-checked date. It should not say the practice is part of or owned by the hospital unless that is true, and it should be removed the day privileges end.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T12:40:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Why the wording matters"),
      p(
        "Patients care about which hospital a doctor sends people to. They search for a doctor and a hospital name together, and a practice that states the connection clearly can win that search. A practice that states it loosely invites a complaint from the hospital, from a patient who expected something different or from a regulator."
      ),
      p(
        "The terms mean different things. Privileges are permission for an individual provider to practice at a facility. An affiliation can mean anything from privileges to a referral relationship to ownership. Readers do not know the difference, so the page must not blur it."
      ),
      h2("What each phrase can honestly mean"),
      table(
        ["Phrase", "Use it only when"],
        ["Dr. Smith has privileges at Example Hospital", "The provider currently holds privileges there, confirmed by the hospital's credentialing office."],
        ["We refer patients to Example Hospital", "The practice sends patients there, which is a statement about practice, not about privileges."],
        ["Part of Example Health System", "The practice is owned by or employed through that system."],
        ["Affiliated with Example Hospital", "Avoid unless you can explain exactly what it means in a sentence."]
      ),
      p(
        "If you cannot define the word in one plain sentence, do not use it. Name the relationship instead."
      ),
      h2("Build the statement in four steps"),
      ol(
        "Ask each provider for written confirmation of current privileges, and keep it on file.",
        "List only the providers who hold them, by name, with the facility's exact name.",
        "Add a last-checked date, and set a yearly reminder, plus one whenever a provider joins or leaves.",
        "Match the wording on the Google Business Profile, in directories and on the provider bio pages."
      ),
      p(
        "Hospital logos are another trap. Do not use a hospital's name in a way that suggests endorsement, and do not use its logo without written permission."
      ),
      h3("When privileges end"),
      p(
        "Remove the statement the day privileges end, and update every page and profile that repeats it. A stale claim is the most common problem, because a provider changes hospitals and nobody revisits the website. Our guide on [what to update when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice) gives a checklist."
      ),
      h2("Connect it to your referral and directory work"),
      p(
        "A hospital relationship is useful to patients and to other doctors who look for referral partners. Our guides on [getting listed in a hospital or health-system provider directory](/guides/getting-listed-in-a-hospital-or-health-system-provider-directory) and on the [referral partner page for a primary care practice](/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you) show how to make it findable. Check each doctor's [bio page](/guides/how-to-write-a-doctor-bio-page-that-ranks) for the same wording. Hospital teams who send patients appreciate a prompt acknowledgment, and a simple [thank-you and feedback loop for referring doctors](/guides/referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice) keeps that relationship active."
      ),
      p(
        "A short internal review each year keeps the statement true. Ask the office manager to compare the website, the Google profile and each provider bio against the credentialing records, note the date and fix any difference at once. Treat the statement as a living fact about the practice, never as copy that is written once and forgotten."
      ),
      p(
        "This page is general information and not legal advice. Have the practice's adviser review the final wording, especially where a system's branding rules apply."
      ),
    ],
    faqs: [
      {
        q: "What is the difference between privileges and an affiliation?",
        a: "Privileges are permission for one provider to practice at a facility. Affiliation is a loose word that can mean privileges, referrals or ownership. Use privileges when that is what you mean, and avoid the vague word.",
      },
      {
        q: "Can we use the hospital's logo?",
        a: "Only with written permission from the hospital. A logo can suggest endorsement or ownership. Use the hospital's name in plain text and say exactly what the relationship is.",
      },
      {
        q: "How do we confirm privileges?",
        a: "Ask the provider for a letter or a current confirmation from the hospital's medical staff office, and keep it on file with the date. Do not rely on memory or an old brochure.",
      },
      {
        q: "What if a provider has privileges at more than one hospital?",
        a: "List each facility by its exact name, under that provider's name. Do not generalize to the practice, because privileges belong to individuals and may differ from doctor to doctor.",
      },
      {
        q: "Does the Google Business Profile need the same wording?",
        a: "Yes, if you mention it at all. Use the same exact words and the same date logic so that patients and search engines see one consistent statement.",
      },
    ],
    citations: [FTC_ADS, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/np-pa-bio-page-that-ranks", label: "NP and PA Bio Pages", description: "Describe advanced practice providers honestly." },
      { href: "/guides/what-is-eeat-and-why-it-matters-for-medical-practices", label: "E-E-A-T for Medical Practices", description: "Why accurate credentials matter." },
      { href: "/guides/medically-reviewed-by-labels-on-a-medical-practice-website", label: "Medically Reviewed Labels", description: "Use review labels only when real." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1049
  {
    slug: "good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice",
    keyword: "good faith estimate and No Surprises Act notice page for a therapy practice",
    category: "How-to",
    title: "Good Faith Estimate and No Surprises Act Notice Page for a Therapy Practice",
    metaTitle: "Good Faith Estimate Notice Page for a Therapy Practice",
    metaDescription:
      "How a therapy practice can explain the good faith estimate on its website in plain language. Call (561) 291-2681.",
    answer:
      "A good faith estimate page tells self-pay and uninsured clients that they have the right to receive an estimate of expected charges before care, explains how to ask for one and when the practice provides it, and links to the federal notice. It gives general information and must be checked by a compliance adviser before publishing.",
    author: "Liam Costello",
    publishDate: "2026-10-16T13:00:00Z",
    dateModified: "2026-10-28",
    readMinutes: 6,
    sections: [
      h2("What the rule asks of a practice"),
      p(
        "Under the federal No Surprises Act, health care providers must give a good faith estimate of expected charges to people who do not have insurance or who choose not to use it for a service. Many therapy practices have a number of self-pay clients, so this applies often, and a web page can help clients understand the right before a first call."
      ),
      p(
        "The rule has timing requirements. In general, when a service is scheduled at least three business days ahead, the estimate is due within one business day of scheduling, and when it is scheduled at least ten business days ahead, within three business days. Clients may also ask for an estimate before they schedule. Confirm the current requirements with CMS and with your adviser."
      ),
      h2("What a plain-language page can say"),
      ul(
        "That self-pay and uninsured clients have the right to a good faith estimate of expected charges.",
        "How to ask, such as by phone or message, and what the practice will include in the estimate.",
        "When the estimate is provided, in the practice's own words and in line with the rule.",
        "That the estimate is an estimate, and that the practice will explain if charges change.",
        "A link to the federal notice, so clients can read the official text."
      ),
      p(
        "Keep the language short and free of legal terms. The page is not the estimate, and it should never be used in place of the document the rule requires."
      ),
      h2("Connect it to the fee information you already publish"),
      table(
        ["Page", "What it covers"],
        ["Fees page", "Session fees, sliding scale if offered, out-of-network and superbills."],
        ["Good faith estimate page", "The client's right to an estimate and how to request it."],
        ["Insurance page", "Which plans you are in network with, and how to check benefits."],
        ["Cancellation page", "What happens when a session is missed or moved."]
      ),
      p(
        "Our guides on [therapy practice fees, sliding scale and superbills](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained), [insurance verification and benefits checks](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice) and [self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) describe how the pieces fit. If the practice raises its fee, the estimate and the public page both need to match, and a [fee change notice letter for a counseling practice](/guides/fee-change-notice-letter-for-a-counseling-practice-without-legal-advice) covers how to tell current clients first."
      ),
      h3("Do not publish the estimate itself"),
      p(
        "An estimate belongs to one client and is delivered privately. Never post a sample that uses a real person's details, and do not ask clients to send health details through the website form to receive one. Collect the minimum, usually a name and a way to reach the person, and carry on by phone or a secure message."
      ),
      h2("Review before you publish"),
      p(
        "Have the practice's adviser or compliance resource read the final text, because the rule changes and has details for different kinds of services. Put a last-reviewed date on the page and set a reminder to check it each year. Link it from the fees page and the contact page so clients find it when they are asking about cost. Patients who ask about the estimate are often asking whether help with the cost exists, so link the notice to a plain [reduced-fee note](/guides/sliding-scale-and-reduced-fee-note-for-a-primary-care-practice-without-discounting-claims) if your office offers one."
      ),
      p(
        "Train the front desk to answer the first question in the same words every time. A caller who asks what a session will cost should hear the fee, hear that a written estimate is available on request and be told how to ask, with no pressure and no guessing about figures the practice has not yet confirmed."
      ),
    ],
    faqs: [
      {
        q: "Who is entitled to a good faith estimate?",
        a: "In general, people who are uninsured or who choose not to use insurance for a service. The federal rule sets the details, so the practice should confirm with CMS or its adviser which clients are covered.",
      },
      {
        q: "When must the estimate be provided?",
        a: "The rule has timing requirements tied to how far ahead a service is scheduled, and clients may also request one before booking. Check the current rule with CMS before you state timing on the page.",
      },
      {
        q: "Is the web page the estimate?",
        a: "No. The page explains the right and how to ask. The estimate is a separate document given to the client with the information the rule requires.",
      },
      {
        q: "Can we post sample estimates?",
        a: "Do not use a real client's estimate. If you show an example, make it clearly invented, remove every personal detail and label it as an illustration.",
      },
      {
        q: "Does this page replace legal review?",
        a: "No. It is general information. The practice should have its adviser confirm the wording and the process, since requirements can change and may differ by service.",
      },
    ],
    citations: [CMS_NSA, HHS_PRIVACY, FL_MENTAL],
    links: [
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing Questions Page", description: "Answer payment questions before the call." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Explain fees for missed sessions." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What to expect at session one." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1051
  {
    slug: "veterans-and-military-families-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "veterans and military families page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Veterans and Military Families Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Veterans and Military Families Counseling Page",
    metaDescription:
      "How a counseling practice can write a page for veterans and military families that is accurate and respectful. Call (561) 291-2681.",
    answer:
      "A page for veterans and military families should state who the counselor sees, which insurance such as TRICARE the practice is verified with, how sessions work, and where to go in a crisis, including the Veterans Crisis Line. It should not claim a military background the counselor lacks, promise outcomes or use service imagery without permission.",
    author: "Gio LaRoche",
    publishDate: "2026-10-16T13:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("What this reader looks for first"),
      p(
        "A veteran or a military spouse searching for counseling wants to know three things quickly. Will this person understand what service life involves, will my coverage work and where do I go if things get bad. They are practical readers, and they tend to distrust a page that sounds like a recruiting poster. Spouses and parents who care for a service member or veteran at home may want support for themselves, which a separate [page for caregivers seeking counseling](/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims) can address without clinical claims."
      ),
      p(
        "The honest version of this page is plain. It states what the practice offers, says what it does not, and gives real information on coverage and crisis support."
      ),
      h2("Be exact about experience and credentials"),
      table(
        ["Say this", "Only if it is true"],
        ["Our counselor has experience with veteran and military families", "The counselor can describe that experience in a sentence, such as years of work or training."],
        ["Our counselor is a veteran", "The counselor chooses to share it, and it can be verified."],
        ["We work with TRICARE", "The practice is credentialed with the plan, confirmed in writing."],
        ["We accept Community Care referrals", "The practice participates in the VA program, confirmed in writing."]
      ),
      p(
        "Never imply a military background, special certification or VA affiliation that the practice cannot document. Readers in this community check, and a false claim ends trust at once."
      ),
      h2("Coverage and fees in plain terms"),
      ul(
        "Name each plan the practice has verified, with a last-checked date.",
        "Say clearly if the practice is not in network, and describe the self-pay or superbill option.",
        "Explain how a referral works if one is required.",
        "Link to the fees and good faith estimate information for people paying out of pocket."
      ),
      p(
        "The same discipline used for any insurance page applies here. Our guide on [insurance verification and benefits check pages](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice) and the [accepted-insurance page guide](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) cover the layout."
      ),
      h3("Describe sessions without promising outcomes"),
      p(
        "Say what a session is, such as a conversation about stress, transitions, relationships or whatever the client brings, and avoid naming conditions as a service promise. Do not write that counseling resolves post-traumatic stress, because that claims a clinical result. A sentence about working at the client's pace is enough."
      ),
      h2("Crisis resources belong high on the page"),
      p(
        "The Veterans Crisis Line can be reached by dialing 988 and pressing 1, by texting 838255 or by chat, at any hour. Put it near the top with 911, and link to your [emergency and crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). Finally, keep images respectful: do not use uniforms, insignia or logos of any service branch without permission, and avoid stock photos that suggest a particular outcome."
      ),
      p(
        "Link the page from your services menu and from the [specialty pages](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) section so it can be found by people searching for this kind of support."
      ),
      p(
        "Read the page aloud before it goes live. If any sentence would sound like a recruiting slogan to a service member, rewrite it in plainer words, and ask a veteran or a military spouse you know to read it too. Their reaction will tell you faster than any checklist whether the tone is respectful and the information is useful. Many veterans also work as first responders or in healthcare, and our guide to a [first responders and healthcare workers counseling page](/guides/first-responders-and-healthcare-workers-counseling-page-for-a-counseling-practice-without-clinical-claims) covers that overlapping audience without clinical claims."
      ),
    ],
    faqs: [
      {
        q: "Can the page say the counselor specializes in PTSD?",
        a: "Use language that matches the counselor's license and scope, and avoid claiming to treat a condition. Describe the support offered in plain words, and let the clinician approve any clinical term before it appears.",
      },
      {
        q: "How should the page mention TRICARE?",
        a: "Only if the practice is credentialed with the plan. State it plainly with a last-checked date, and tell clients to confirm benefits with their plan before booking, since coverage depends on the plan.",
      },
      {
        q: "Is it fine to use military imagery?",
        a: "Avoid uniforms, insignia and service logos unless you have permission, because they can suggest an affiliation or endorsement. Use a clear photo of the office or the counselor instead.",
      },
      {
        q: "What crisis information should appear?",
        a: "The Veterans Crisis Line, reached by dialing 988 and pressing 1, texting 838255 or chatting online, and 911 for emergencies. Put them near the top where a tired reader will see them.",
      },
      {
        q: "Can the practice offer sessions to family members?",
        a: "If it does, say so plainly, and say who can attend and how consent and fees work. Spouses and children are often looking for support too, and the page should speak to them.",
      },
    ],
    citations: [
      { publisher: "U.S. Department of Veterans Affairs", label: "Veterans Crisis Line", href: "https://www.veteranscrisisline.net/" },
      { publisher: "TRICARE", label: "TRICARE health plans", href: "https://tricare.mil/" },
      FL_MENTAL,
    ],
    links: [
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent Page", description: "Prepare clients for video sessions." },
      { href: "/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice", label: "States Served Page", description: "Say where you can see clients." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Introduce the counselor honestly." },
      { href: "/mental-health", label: "Mental Health Practice Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- NEW-TO-AREA
  {
    slug: "new-to-the-area-page-for-a-primary-care-practice-for-relocating-families-students-and-seasonal-residents",
    keyword: "new to the area page for a primary care practice for relocating families, students and seasonal residents",
    category: "How-to",
    title: "New to the Area Page for a Primary Care Practice: Relocating Families, Students and Seasonal Residents",
    metaTitle: "New to the Area Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can write a new-to-the-area page for movers, students and seasonal residents. Call (561) 291-2681.",
    answer:
      "A new-to-the-area page helps people who just moved, attend college nearby or live part of the year in Florida find a primary care practice. It explains how to become a patient, what to bring, how records transfer and how seasonal visits work, and it never promises appointment dates or care outcomes.",
    author: "Liam Costello",
    publishDate: "2026-10-16T13:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("Three groups who search the same way"),
      p(
        "Families who just moved, students who arrive each fall and seasonal residents who spend the winter in Florida all search for a doctor near me, and none of them has a doctor yet. Each group has a different question, and one short page can answer all three. Counseling offices on the coast that serve winter residents can pair this with a [seasonal resident and snowbird counseling page](/guides/seasonal-resident-and-snowbird-counseling-page-for-a-florida-counseling-practice-without-clinical-claims) that explains licensure limits and part year scheduling."
      ),
      p(
        "Searches like this peak when people arrive, so the page is best ready before the busy season, and it should say honestly whether the practice is accepting new patients."
      ),
      h2("Answer each group in its own short section"),
      table(
        ["Group", "What they want to know"],
        ["Relocating families", "How to switch care, move records and book a visit for several family members."],
        ["College students", "Whether the practice sees young adults, takes out-of-state insurance and offers short-notice visits."],
        ["Seasonal residents", "Whether the practice sees patients for part of the year and how records and refills are handled."]
      ),
      p(
        "Use the group's own words as headings, such as moving to the area and here for the winter. Keep each section to a few sentences and a clear next step."
      ),
      h2("What every new resident needs to hear"),
      ul(
        "Whether the practice is accepting new patients today, with a last-checked date.",
        "Which insurance plans are verified, including plans from other states, and how to confirm network status.",
        "What to bring, such as ID, the insurance card, a medication list and the name of the previous doctor.",
        "How the old doctor's records reach the practice, with a link to the transfer page.",
        "How to book, with a phone number and the online booking link."
      ),
      p(
        "These are the same steps a patient would find on a transfer page, so link to our guide on [transferring care from another doctor](/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice) and keep the new-to-the-area page focused on the situations that are special to movers."
      ),
      h3("Seasonal residents and short stays"),
      p(
        "Say honestly whether the practice can manage care for a patient who is away for months, how refills work across states and how the office will talk to a doctor elsewhere. Do not promise continuity you cannot provide, and do not suggest that the practice will prescribe for a person it has not examined."
      ),
      h2("Make it findable and consistent"),
      p(
        "Add the page to your location page and the services menu, and use the neighborhood and city names a newcomer would type. Check that your [Google Business Profile attributes](/guides/google-business-profile-attributes-for-a-medical-practice) and hours match, and that the [new-patient status is accurate](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) everywhere. A [new-patient welcome message](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) closes the loop after the first booking. Counseling practices see the same wave of newcomers, and our guide to a [life transitions counseling page](/guides/life-transitions-counseling-page-for-job-loss-relocation-and-retirement-without-clinical-claims) shows how to write for people who have just moved, lost a job or retired."
      ),
      p(
        "Review the page each fall and again in early spring, because the people it serves change with the calendar. Students arrive in August and winter residents arrive in November, so update the hours, the new-patient status and the insurance lines before each wave, and note the date you checked on the page itself."
      ),
    ],
    faqs: [
      {
        q: "Do college students need a local primary care doctor?",
        a: "Many do, for short-notice visits and forms, and they may be on a parent's out-of-state plan. A page should say whether the practice sees young adults and how out-of-state insurance is handled.",
      },
      {
        q: "Can a seasonal resident become a patient for a few months?",
        a: "It depends on the practice. Say plainly whether you see seasonal residents, how records are handled and what you can and cannot do for a person who is away for most of the year.",
      },
      {
        q: "How do I move my records to a new area?",
        a: "Sign a release so your previous office can send them, and ask the new practice to request them. It can take days to weeks, so book your first visit with a medication list in hand.",
      },
      {
        q: "Should the page list neighborhoods?",
        a: "Name the city and the nearby areas people actually search, in a sentence or two. Do not build a list of place names to catch searches, because it reads as filler and adds nothing for a reader.",
      },
      {
        q: "Does out-of-state insurance work?",
        a: "Some plans cover care in other states and some do not. The page should tell people to call their plan to confirm, and list the plans the practice has verified, with a last-checked date.",
      },
    ],
    citations: [
      { publisher: "Medicare.gov", label: "Medicare.gov", href: "https://www.medicare.gov/" },
      { publisher: "HealthCare.gov", label: "Health insurance Marketplace", href: "https://www.healthcare.gov/" },
      GOOGLE_HELPFUL,
    ],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted-Insurance Page", description: "Tell new patients which plans you take." },
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Same-Day Visits", description: "Get found for short-notice visits." },
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "First Appointment Page", description: "What new patients should bring." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },
];
