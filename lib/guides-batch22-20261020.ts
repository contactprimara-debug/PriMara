// -- Guides batch 22 - 2026-10-20 --
// Guide/AEO pages from the Command Center queue (rows 1116-1125 plus five rows planned 2026-10-20), built by the page
// factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound links are inline
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
const HHS_EMAIL = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Does HIPAA permit providers to use email to discuss health issues with patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html",
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
const FTC_REPORT = {
  publisher: "Federal Trade Commission",
  label: "ReportFraud.ftc.gov",
  href: "https://reportfraud.ftc.gov/",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_REVIEW_SNIPPET = {
  publisher: "Google Search Central",
  label: "Review snippet structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet",
};
const GOOGLE_IMAGES = {
  publisher: "Google Search Central",
  label: "Google Images best practices",
  href: "https://developers.google.com/search/docs/appearance/google-images",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_HOURS = {
  publisher: "Google Business Profile Help",
  label: "Edit your business hours",
  href: "https://support.google.com/business/answer/3039617",
};
const GOOGLE_REVIEW_POLICY = {
  publisher: "Google Maps Help",
  label: "Prohibited and restricted content for reviews",
  href: "https://support.google.com/local-guides/answer/7400114",
};
const GOOGLE_SENDER = {
  publisher: "Google Workspace Admin Help",
  label: "Email sender guidelines",
  href: "https://support.google.com/a/answer/81126",
};
const CISA_PHISHING = {
  publisher: "Cybersecurity and Infrastructure Security Agency",
  label: "Recognize and report phishing",
  href: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing",
};
const CISA_RANSOM = {
  publisher: "Cybersecurity and Infrastructure Security Agency",
  label: "StopRansomware",
  href: "https://www.cisa.gov/stopransomware",
};
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};
const NAMI = { publisher: "National Alliance on Mental Illness", label: "NAMI", href: "https://www.nami.org/" };
const UNITED_WAY_211 = { publisher: "211", label: "211.org community resource lookup", href: "https://www.211.org/" };
const FL_MENTAL = {
  publisher: "Florida Board of Clinical Social Work, Marriage & Family Therapy, and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics resources",
  href: "https://www.counseling.org/resources/ethics",
};
const APA_PSYCHOTHERAPY = {
  publisher: "American Psychological Association",
  label: "Understanding psychotherapy and how it works",
  href: "https://www.apa.org/topics/psychotherapy/understanding",
};
const SAMHSA = {
  publisher: "SAMHSA",
  label: "FindTreatment.gov and the National Helpline",
  href: "https://www.samhsa.gov/find-help/national-helpline",
};
const MEDICARE_TELE = {
  publisher: "Medicare.gov",
  label: "Telehealth coverage",
  href: "https://www.medicare.gov/coverage/telehealth",
};
const W3C_IMAGES = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Images tutorial",
  href: "https://www.w3.org/WAI/tutorials/images/",
};
const ADA_WEB = {
  publisher: "U.S. Department of Justice, ADA.gov",
  label: "Guidance on web accessibility and the ADA",
  href: "https://www.ada.gov/resources/web-guidance/",
};

const MEDICAID_NEMT = {
  publisher: "Medicaid.gov",
  label: "Non-emergency medical transportation",
  href: "https://www.medicaid.gov/medicaid/benefits/non-emergency-medical-transportation/index.html",
};
const ELDERCARE = {
  publisher: "Administration for Community Living",
  label: "Eldercare Locator",
  href: "https://eldercare.acl.gov/",
};
const ADA_TITLE_III = {
  publisher: "U.S. Department of Justice, ADA.gov",
  label: "ADA requirements for businesses open to the public",
  href: "https://www.ada.gov/resources/title-iii-primer/",
};
const GOOGLE_TITLES = {
  publisher: "Google Search Central",
  label: "Influence your title links in search results",
  href: "https://developers.google.com/search/docs/appearance/title-link",
};
const GOOGLE_MOBILE = {
  publisher: "Google Search Central",
  label: "Mobile-first indexing best practices",
  href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
};
const HHS_OCR_COMPLAINT = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Filing a complaint with the Office for Civil Rights",
  href: "https://www.hhs.gov/hipaa/filing-a-complaint/index.html",
};

export const guidesPartTwentyFive: Guide[] = [
  // ---------------------------------------------------------------- 1116
  {
    slug: "transportation-and-ride-assistance-information-page-for-a-primary-care-practice",
    keyword: "transportation and ride assistance information page for a primary care practice",
    category: "How-to",
    title: "Transportation and Ride Assistance Information Page for a Primary Care Practice",
    metaTitle: "Ride Assistance Info Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain bus routes, Medicaid ride benefits and drop-off spots so patients reach their visits. Call (561) 291-2681.",
    answer:
      "A transportation page for a primary care practice should list how to reach the office by car, bus and ride service, say where to be dropped off, and point patients to the ride benefits their plan may offer. It should promise no rides the office does not provide, and it should tell patients to ask about a ride before the visit date.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-23",
    readMinutes: 6,
    sections: [
      h2("Why getting there is part of the visit"),
      p(
        "A missed appointment is often a missed ride, not a missed intention. The patient who has no car, who depends on a relative with a work shift, or who cannot manage two bus transfers with a cane will quietly cancel or simply not show. Front desks see this every week and rarely have a page they can point people to."
      ),
      p(
        "A short, honest transportation page does that job. It answers the question people type into a phone while standing at a bus stop, and it gives the front desk one link to text instead of reciting directions from memory."
      ),
      h2("What belongs on the page"),
      ul(
        "The street address, the suite or entrance letter, and a map link that opens in the phone's own map app.",
        "The nearest bus routes and stops by name, with the walking distance written as minutes and not guessed in blocks.",
        "Where a ride service or family member should stop to let someone out, and whether that spot is covered and level.",
        "Whether the office offers any ride help at all. Most do not, and saying so plainly is better than leaving it vague.",
        "Who to call about ride benefits, with the office phone number as a tap-to-call link.",
        "How early to arrive when a ride is uncertain, and what to do if a ride falls through on the day."
      ),
      p(
        "Check each route and stop yourself within the last month. Transit agencies change schedules, and a page that sends someone to a stop that no longer exists costs more trust than having no page. Add a line at the bottom with the month the directions were last checked."
      ),
      h2("Ride benefits patients may already have"),
      p(
        "Many patients do not know they may be entitled to a ride. State Medicaid programs must make sure eligible members can get to covered medical visits, and the federal program describes this as non-emergency medical transportation. Some Medicare Advantage plans and some commercial plans add ride benefits too, though the details vary by plan and by year."
      ),
      p(
        "The page should not try to explain every plan. Instead, tell patients to look on the back of the insurance card for a member services number and to ask whether rides to doctor visits are covered, how many days ahead to book, and whether a companion may come along. Linking to the federal explanation of [non-emergency medical transportation](https://www.medicaid.gov/medicaid/benefits/non-emergency-medical-transportation/index.html) keeps the page accurate without the office interpreting coverage. Show patients where the drop-off point and the main door are with pictures on an [office tour and photos page for new primary care patients](/guides/office-tour-and-photos-page-for-new-primary-care-patients)."
      ),
      table(
        ["Patient situation", "What the page can say"],
        ["No car and a bus route nearby", "List the routes, stops and walking time, and the last time the directions were checked."],
        ["Plan may cover rides", "Call member services on the insurance card and ask about rides to doctor visits well before the appointment date."],
        ["Uses a wheelchair or walker", "Say where the accessible entrance is and where a vehicle can pull up; our page on [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) covers that wording."],
        ["Relies on family for rides", "Offer morning and late-day times when you have them and say how to reschedule without a penalty."],
        ["Needs a local ride program", "Point to 211 or the Eldercare Locator for senior and community ride programs near the patient."]
      ),
      h2("Keep it consistent everywhere"),
      p(
        "Directions live in more places than the website. The Google Business Profile, Apple Maps, the confirmation text and the voicemail greeting all carry some version of them. When the entrance or parking changes, update every one in the same week, using the checklist in our guide to an [office move](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) as a model."
      ),
      h3("Words to avoid"),
      ul(
        "We provide transportation, unless the office truly runs a vehicle and a written policy.",
        "Free rides, unless a program actually makes them free for the patient reading the page.",
        "Any promise that a ride will arrive on time, because the office does not control the ride service."
      ),
      h3("Tie it into the visit"),
      p(
        "Add one sentence to the appointment reminder pointing to the page, such as: need help getting here, see the directions and ride information on our website. If your reminders are texts, our wording ideas for [appointment reminders without health details](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) show how to include a link without naming the reason for the visit."
      ),
      p(
        "Finally, count what happens. If a handful of patients each month tell the front desk they nearly missed a visit for lack of a ride, the page is worth keeping current. If nobody ever mentions it, shorten it rather than let it go stale."
      ),
    ],
    faqs: [
      {
        q: "Should a primary care practice offer rides itself?",
        a: "That is a business decision with insurance and liability questions, so talk to your insurer before promising anything. Most practices are better served by an accurate page that points patients to the ride benefits their plan or community already has.",
      },
      {
        q: "Can the page say that Medicaid covers rides?",
        a: "It can say that state Medicaid programs offer help with rides to covered medical visits and link to the federal description. It should not say that a specific patient qualifies, because coverage depends on the plan, the state and the visit.",
      },
      {
        q: "How often should the directions be checked?",
        a: "At least quarterly, and any time the transit agency announces route changes or the building changes parking or entrances. Put the last-checked month on the page so patients and staff can see how current it is.",
      },
      {
        q: "Do we need a separate page for each bus route?",
        a: "No. One page with a short table of routes is easier to keep accurate and stronger for search than several thin pages that repeat the same address and the same advice.",
      },
      {
        q: "What if a patient arrives late because the ride was delayed?",
        a: "Say on the page and in the reminder that patients should call as soon as they know a ride is delayed. Your late-arrival policy then applies as written, and the front desk can decide whether the visit can still happen.",
      },
    ],
    citations: [MEDICAID_NEMT, ELDERCARE, UNITED_WAY_211],
    links: [
      { href: "/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile", label: "Parking And Accessibility Info", description: "Where to stop, park and enter." },
      { href: "/guides/late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice", label: "Late Arrival Policy", description: "What happens when a ride runs late." },
      { href: "/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page", label: "Office Move Checklist", description: "Keep directions the same everywhere." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1117
  {
    slug: "caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "caregiver support counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Caregiver Support Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Caregiver Support Counseling Page for a Therapy Practice",
    metaDescription:
      "How a counseling practice can write a caregiver support page that is warm, practical and free of clinical claims or outcome promises. Call (561) 291-2681.",
    answer:
      "A caregiver support counseling page should speak to the person caring for a parent, spouse or child, say who the practice sees and when, explain fees and privacy, and point to local and national caregiver resources. It should describe the kind of support offered without promising relief, naming diagnoses or implying results.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The reader is tired, not browsing"),
      p(
        "Someone searching for counseling because they are caring for a relative is usually short on time and energy. They are reading after the other person is asleep, on a phone, and they will leave quickly if the page sounds like a brochure. Open with their situation in one plain sentence and move straight to what is possible."
      ),
      p(
        "A good opening line names the role and not a condition: you are looking after someone, and you also need somewhere to talk. That is enough. It does not diagnose the caregiver, and it does not describe the person being cared for."
      ),
      h2("What the page needs to answer"),
      ol(
        "Who you see: adult children, spouses, parents of children with long-term needs, and any age range you do not see.",
        "How a session fits a caregiver's day, including evening times, video visits and whether a short appointment is possible.",
        "What it costs, whether you take insurance, and the out-of-pocket fee for someone paying alone.",
        "What stays private, including that the person being cared for is not told and does not need to be involved.",
        "What the first call looks like and how long it takes to hear back.",
        "Where to go for help that is not counseling, such as respite care, adult day programs and benefit counselors."
      ),
      p(
        "Number five matters more than it looks. A caregiver who leaves a message and hears nothing for three days has already added one more thing to a list. Say how quickly you return calls, and then do it."
      ),
      h2("Say what you offer in plain terms"),
      p(
        "It is safe to describe the setting and the topics people bring, such as feeling stretched thin, family disagreements about care, grief that starts before a loss, or trouble finding time for yourself. It is not safe to say that counseling reduces caregiver burnout, lowers depression or improves health. Those are clinical claims, and the page does not need them."
      ),
      table(
        ["Instead of this", "Say this"],
        ["Counseling cures caregiver burnout", "A place to talk through the weight of caring for someone, at a pace that suits you."],
        ["Proven to reduce stress", "Many caregivers tell us they simply need someone to listen. We can start there."],
        ["Treatment for depression in caregivers", "Support for people looking after a family member, including sessions by video."],
        ["Guaranteed to help you cope", "No promises about results. We will talk about what you want from the first visit."]
      ),
      p(
        "The same discipline applies to testimonials. Do not post quotes from clients, and do not describe a composite caregiver as if they were a real one. Our guide to [writing about your approach without outcome claims](/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims) gives wording that stays on the right side of that line."
      ),
      h2("Link to real help outside the practice"),
      p(
        "Caregivers often need more than counseling, and a page that says so earns trust. Link to the Eldercare Locator for services for older adults, to 211 for local programs, and to NAMI if the family is dealing with a mental health condition. Add the 988 Lifeline for anyone in crisis and say clearly that the office is not an emergency service."
      ),
      h3("Handling the person being cared for"),
      p(
        "Some counselors also see the family member. If you do, keep it on a separate page or a clearly separate section, because the privacy rules differ and a caregiver should not wonder whether a session about them will be shared. If you do not, say that you see the caregiver only."
      ),
      h3("Make it easy to act"),
      p(
        "Put a tap-to-call number at the top and again at the bottom. If you take messages by form, keep the form to a name, a phone number and a preferred time to call, and tell people not to describe symptoms there. Our page on [free consultation calls](/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid) explains how to word the short first call so it feels low pressure."
      ),
      p(
        "Review the page every six months. Programs listed under community help close or change their hours, and a dead link on a caregiver page tells a worn-out reader that nobody is paying attention."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling page say that it helps with caregiver stress?",
        a: "It can say that you offer support for people who care for family members and list the everyday pressures they bring. It should not claim to reduce stress or burnout, because that is an outcome claim you cannot guarantee.",
      },
      {
        q: "Should the page mention dementia or specific illnesses?",
        a: "Only in neutral language, such as caring for a parent with a long-term illness. Naming conditions invites clinical claims and may make a reader feel labelled, so keep the focus on the role of the caregiver.",
      },
      {
        q: "Do we need a separate page for each type of caregiver?",
        a: "Usually one page is stronger. Spouses, adult children and parents share most of the same questions, so split the page only if you run a distinct service with its own fees, hours or group.",
      },
      {
        q: "Can we offer evening or weekend sessions on the page?",
        a: "Yes, but only if those times truly exist. State the real days and hours, and update the page the moment they change, because a caregiver who arranges cover for an evening visit and finds nobody there will not come back.",
      },
      {
        q: "Is it fine to link to other organizations?",
        a: "Yes, and it helps. Links to the Eldercare Locator, 211 and NAMI show that your goal is the reader's wellbeing, and they give caregivers somewhere to go if your caseload is full.",
      },
    ],
    citations: [ELDERCARE, NAMI, LIFELINE],
    links: [
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Our Approach Page", description: "Describe your style without outcome claims." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "Word the first short call." },
      { href: "/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice", label: "Community Resources Page", description: "Link out to real local help." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1118
  {
    slug: "workplace-stress-counseling-page-for-working-professionals-without-clinical-claims",
    keyword: "workplace stress counseling page for working professionals without clinical claims",
    category: "How-to",
    title: "Workplace Stress Counseling Page for Working Professionals Without Clinical Claims",
    metaTitle: "Workplace Stress Counseling Page for Working Professionals",
    metaDescription:
      "How a counseling practice can write a page for working professionals with after-hours times, fees and privacy, no clinical claims. Call (561) 291-2681.",
    answer:
      "A workplace stress counseling page should speak to a busy professional in plain words, show early morning, evening or video appointment options, state fees and privacy, and explain what happens if an employer plan or insurance is involved. It should describe pressure at work as a life topic, not promise relief or name a diagnosis.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Start with the schedule problem"),
      p(
        "The working professional rarely lacks interest in counseling. What they lack is a gap in the day. They check the page at lunch or on the train, they want to know whether a 7 a.m. or 6 p.m. slot exists, and they are quietly worried that anyone at their job will find out."
      ),
      p(
        "So the first screen should answer three things in the order the reader worries about them: when can I come, will anyone know, and what does it cost. Everything else, including your training and your approach, can sit lower."
      ),
      h2("What to put on the page"),
      ul(
        "Real appointment windows, such as before work, over lunch, evenings and video visits from a private space.",
        "A plain statement that the office does not contact employers and that sessions stay private except where the law requires otherwise.",
        "Fees, accepted insurance, and the self-pay rate for someone who would rather not use a plan at all.",
        "How an employee assistance program works if you take them, with a link to your page on that topic.",
        "A short note on documentation: what you can and cannot provide if a workplace asks for a letter.",
        "A tap-to-call number and a form that asks for a name, a phone number and the best time to reach them."
      ),
      p(
        "The documentation point is the one most pages skip, and it causes friction later. Say that the office writes letters only with the client's written consent, only about attendance and logistics, and that questions about leave or workplace accommodations are separate from counseling."
      ),
      h2("Talk about work without making clinical claims"),
      p(
        "It is natural to name deadlines, long hours, difficult managers, career changes and the pull between work and family. It is not safe to claim that counseling prevents burnout, treats anxiety caused by work, or improves performance. A page can say what the conversation covers without saying what it fixes."
      ),
      table(
        ["Avoid", "Use"],
        ["Beat burnout in six sessions", "Space to talk through pressure at work, with sessions scheduled around your day."],
        ["Boost your performance", "Support for people balancing demanding jobs and home life."],
        ["Stop work anxiety", "Whatever is weighing on you about work, you can bring it up at the first visit."],
        ["Confidential, guaranteed", "Private by default, with the limits explained in writing before you begin."]
      ),
      p(
        "Resist the urge to build the page around keywords such as anxiety and depression. A professional comparing options will read a list of conditions as a sign that the practice sees everything and specialises in nothing. A focused, honest page ranks better for the plain searches people use, such as therapist evenings near me, and converts better too."
      ),
      h2("Employers, benefits and the third-party question"),
      p(
        "Some visitors arrive because an employer plan pays for a number of sessions. Others are afraid the employer will see a claim. Explain, in two sentences at most, that insurance and employer programs have their own rules about what they receive, and that the person should ask the plan before the first visit. Our guide on an [employee assistance program page](/guides/employee-assistance-program-page-for-a-counseling-practice) covers the wording in more detail."
      ),
      h3("If you also work with employers"),
      p(
        "Some practices offer talks or consultations to companies. Keep that on a separate page for employers so the page for individuals does not look like a sales pitch. Never mention any client or company by name without written permission."
      ),
      h3("A last check before publishing"),
      p(
        "Read the page aloud as a manager would. Does it name any condition, promise any result or imply that the practice reports to an employer? Remove it. Then call the office at lunchtime and confirm that someone answers or that the voicemail promises a same-day return. A professional who reaches a full mailbox at 12:15 p.m. will not try twice."
      ),
      p(
        "For the technical side, add the page to your sitemap, link it from your services page and keep the Google Business Profile services list consistent with it, as our guide on the [services list](/guides/google-business-profile-services-list-optimization) describes."
      ),
    ],
    faqs: [
      {
        q: "Is it acceptable to say counseling can reduce work stress?",
        a: "It is better not to. Say that you offer a place to talk about pressure at work, and describe how sessions are scheduled. Promising a reduction in stress is an outcome claim that cannot be guaranteed and can mislead.",
      },
      {
        q: "Should the page mention employee assistance programs?",
        a: "Only if you actually accept them, and then in a short line with a link to a fuller page. If you do not, leave it out rather than send people to call about a benefit you cannot honor.",
      },
      {
        q: "Can we offer early morning or evening sessions on the page?",
        a: "Yes, as long as those hours are real and staffed. State the days and times exactly, and keep the Google Business Profile hours the same so no one drives to a dark office.",
      },
      {
        q: "How do we handle a request for a work letter?",
        a: "Say that letters are provided only with the client's signed consent and cover attendance and scheduling, not what was discussed. Keeping that on the page prevents awkward phone calls later.",
      },
      {
        q: "Do we need a separate page for each profession?",
        a: "No. Pages for nurses, lawyers and teachers that repeat the same advice look thin to search engines and read thin to people. Mention professions in a sentence on one strong page instead.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, APA_PSYCHOTHERAPY],
    links: [
      { href: "/guides/employee-assistance-program-page-for-a-counseling-practice", label: "EAP Page", description: "Explain employer-paid sessions plainly." },
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Visit Instructions", description: "Help clients set up a private video visit." },
      { href: "/guides/google-business-profile-services-list-optimization", label: "Services List", description: "Keep the profile consistent with the page." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1119
  {
    slug: "lgbtq-affirming-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "LGBTQ+ affirming counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "LGBTQ+ Affirming Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "LGBTQ+ Affirming Counseling Page for a Therapy Practice",
    metaDescription:
      "How a counseling practice can say it welcomes LGBTQ+ clients in a way that is honest, specific and free of clinical claims. Call (561) 291-2681.",
    answer:
      "An LGBTQ+ affirming counseling page should say plainly that the practice welcomes LGBTQ+ clients, show what that means in practice through intake forms, names, pronouns and staff training, and keep its promises small and true. It should not claim expertise or credentials the clinicians do not hold, or promise specific outcomes.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("A welcome has to be believable"),
      p(
        "Anyone who has been turned away, lectured or misnamed by a provider reads an affirming page closely. A banner and a rainbow icon are not enough, and a vague line such as everyone is welcome tells that reader nothing. What persuades is detail: how the first form handles names, what the office does with pronouns, and who they will actually meet."
      ),
      p(
        "That also means the page cannot claim more than the practice can deliver. If only two of five clinicians have worked with LGBTQ+ clients, say so, and say which ones, rather than implying every clinician is a specialist."
      ),
      h2("What makes the page specific"),
      ul(
        "A short, direct statement that LGBTQ+ people are welcome, written by the practice in its own words.",
        "How intake works: whether forms ask for a chosen name, pronouns and a name that matches insurance, and who sees each.",
        "Which clinicians choose to be listed as working with LGBTQ+ clients, and what training or experience they will honestly state.",
        "Plain information about bathrooms, waiting areas and the way staff address people at the front desk.",
        "Privacy: no outing, no mailings or voicemails that reveal visits, and a way to choose how the office contacts you.",
        "Fees, insurance and the video option for clients who are not out where they live."
      ),
      p(
        "The privacy item deserves its own short section. Many readers worry less about the session than about a text reminder arriving on a shared phone or an insurance statement going to a parent. Offer a choice of reminder method and explain, briefly, what an insurance statement may show."
      ),
      h2("Claims to avoid"),
      p(
        "Do not describe any therapy as able to change a person's orientation or identity, and do not use the word cure in any context. Do not claim a clinician is certified in a specialty unless they hold a credential you can name and verify. If a clinician has finished a course, name the course and the year and avoid the word expert."
      ),
      table(
        ["Risky wording", "Safer wording"],
        ["Our experts treat LGBTQ+ issues", "Several of our clinicians work with LGBTQ+ clients; each profile says what they would like you to know."],
        ["Safe space guaranteed", "We use chosen names and pronouns from your first call and we do not share your information without your written consent."],
        ["Proven to improve mental health", "We offer a respectful place to talk, with no promises about results."],
        ["Certified affirming practice", "State the actual training, the provider and the year, or leave the line out."]
      ),
      p(
        "Check any badge or logo you use. Some are issued by directories after a self-reported form and do not mean an outside body reviewed the practice. If you display one, say who issued it and what it means, and do not call it an accreditation."
      ),
      h2("Make the clinician pages match"),
      p(
        "A welcoming service page that links to bare clinician profiles undoes its own work. Each profile should describe the clinician in their own voice, including whether they choose to list LGBTQ+ work, and should follow the advice in our guide to a [therapist bio page without clinical claims](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims)."
      ),
      h3("Directories and the profile"),
      p(
        "Tell the Google Business Profile the same story. Use the attribute that says the business identifies as LGBTQ+ friendly only if the practice means it, because Google shows it to searchers. Directory listings such as those covered in our guide to [Psychology Today and therapist directories](/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice) should match the page word for word on names, fees and clinicians."
      ),
      h3("Crisis information"),
      p(
        "Include the 988 Lifeline and say that the office is not an emergency service. Where a clinician or the practice supports a local community organization, name it only with that organization's agreement."
      ),
    ],
    faqs: [
      {
        q: "Is it acceptable to call a practice LGBTQ+ affirming?",
        a: "Yes, if the practice acts that way and can describe how. Back the phrase with specifics about forms, names, pronouns, privacy and clinician experience, and avoid wording that implies a credential nobody holds.",
      },
      {
        q: "Do we need a separate page for transgender clients?",
        a: "Usually one clear page is better than several thin ones. If you offer a distinct service, such as letters for a medical provider, it earns its own page with its own policies and fees. Otherwise a section is enough.",
      },
      {
        q: "Can we name the clinicians who work with LGBTQ+ clients?",
        a: "Yes, with each clinician's agreement. Some prefer not to be listed for personal or safety reasons, so ask rather than assume, and let them decide what their profile says.",
      },
      {
        q: "Should we show photos of clients?",
        a: "No. Real client photos raise consent and privacy problems, and stock photos of couples or groups can feel staged. A photo of the waiting room or the front entrance is more honest and more useful.",
      },
      {
        q: "What about the Google Business Profile attribute?",
        a: "Turn on the LGBTQ+ friendly attribute only if it is accurate for the whole practice. It appears publicly, so it should match the page, the forms and what the front desk does on a Monday morning.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, GBP_GUIDELINES],
    links: [
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Let each clinician describe their work honestly." },
      { href: "/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice", label: "Therapist Directory Profiles", description: "Keep listings and the page identical." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Wording for a safety block." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1120
  {
    slug: "premarital-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "premarital counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Premarital Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Premarital Counseling Page for a Therapy Practice",
    metaDescription:
      "How a counseling practice can write a premarital counseling page covering format, cost and scheduling with no clinical claims. Call (561) 291-2681.",
    answer:
      "A premarital counseling page should explain what the sessions look like, how many couples typically book, what each session costs, how long before a wedding to start, and what the office will not do. It should describe the format and topics couples discuss, and make no promise about marriage success or lasting results.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Couples are shopping for logistics first"),
      p(
        "Engaged couples searching for premarital counseling are rarely in distress. They are planning, and they are comparing a short list of offices by price, availability and whether the person on the other end seems easy to work with. A page that is clear about those three things will beat a longer page that talks about the importance of communication."
      ),
      p(
        "This is also a service where families, religious leaders and venues sometimes send people to you. A concise page that a pastor or planner can link to has more value than one that reads like a sermon."
      ),
      h2("Spell out the format"),
      table(
        ["Question couples ask", "What the page should state"],
        ["How many sessions?", "A range, such as four to six, with a note that the number depends on the couple and is decided together."],
        ["How long and how often?", "Session length in minutes and a typical weekly or every-other-week rhythm."],
        ["How early should we start?", "A suggested window before the wedding date, and what to do if the date is close."],
        ["What does it cost?", "A per-session fee or a package price, and what is and is not included."],
        ["Can we do it online?", "Whether video visits are available and the states you are licensed in."],
        ["Is it religious?", "Whether the approach is secular, faith-informed or can be adapted, said honestly."]
      ),
      p(
        "If your office uses a questionnaire or a published inventory, name it and say what it is for, without implying that it predicts the future of the relationship. The honest description is that it gives the couple a structured way to start conversations."
      ),
      h2("What the sessions can cover"),
      p(
        "It is fine to list everyday topics: how each partner thinks about money, household roles, family expectations, children, communication habits and handling disagreements. Describe them as subjects couples talk through, not problems that will be solved."
      ),
      ul(
        "Money: shared accounts, debts, saving and spending habits.",
        "Family and in-laws: holidays, boundaries and expectations.",
        "Home life: chores, schedules, where to live and work.",
        "Children and timing, if the couple wants to discuss them.",
        "Intimacy and affection, described respectfully and without detail.",
        "Communication when each of you is tired, busy or upset."
      ),
      p(
        "Avoid statements such as couples who complete premarital counseling are less likely to divorce. Studies exist, but they do not guarantee anything for a particular couple, and a practice that repeats them as a promise invites a complaint. If you want to reference research, link to the original source and describe it neutrally."
      ),
      h2("What the page should not do"),
      ul(
        "Promise a successful marriage or a lasting relationship.",
        "Imply that a couple with doubts should go ahead, or that doubts mean they should not.",
        "Ask for detailed relationship history in a web form.",
        "Use real couples' photos or quotes without written permission, which is best avoided altogether."
      ),
      h3("Link it to the rest of the site"),
      p(
        "Connect the page to the couples page described in our guide on a [couples counseling page](/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims), but keep the two distinct: premarital work is about preparing, while the couples page covers couples already in difficulty. Use different headings and different examples so the pages do not read alike."
      ),
      h3("Make booking simple"),
      p(
        "Offer a short call for the couple to ask questions, and use the approach in our page on a [free consultation call](/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid). Add the wedding season to your scheduling note, since spring and autumn dates fill early, but only if that is true for your calendar."
      ),
      p(
        "Finally, tell couples what the office will do if one partner changes their mind midway: sessions can be paused, fees are not refunded for sessions already held, and each partner can speak to the clinician alone if needed. That small paragraph prevents the most common misunderstanding."
      ),
    ],
    faqs: [
      {
        q: "Can a premarital counseling page say it improves marriages?",
        a: "It should not. Say what the sessions cover and how they run, and leave outcomes out. Research on the topic exists, but it does not guarantee a result for any one couple, and a page that implies otherwise makes a promise the office cannot keep.",
      },
      {
        q: "How far ahead of the wedding should the page suggest starting?",
        a: "Give a suggestion, such as several months, and note that shorter timelines are possible. State it as a convenience for scheduling and not as a rule, because many couples find the office only weeks before the date.",
      },
      {
        q: "Do we need separate pages for religious and secular counseling?",
        a: "One page is usually enough if it states plainly which approaches you offer. Split it only when you run two distinct programs with different clinicians, fees or materials.",
      },
      {
        q: "Should the page include a price?",
        a: "Yes, if you can. Couples are comparison shopping, and a clear fee or package range lowers the number of calls that end at price. If fees vary, give a range and say what changes it.",
      },
      {
        q: "Can venues and officiants link to the page?",
        a: "Yes, and it is a good source of local links. Offer a short, factual description they can use, and avoid paying for links or asking for them in exchange for referrals.",
      },
    ],
    citations: [APA_PSYCHOTHERAPY, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Couples Counseling Page", description: "For couples already in difficulty." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "Low-pressure first contact." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "State fees clearly." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1121
  {
    slug: "cancellation-list-and-same-day-openings-for-a-primary-care-practice",
    keyword: "cancellation list and same-day openings for a primary care practice",
    category: "How-to",
    title: "Cancellation List and Same-Day Openings for a Primary Care Practice",
    metaTitle: "Cancellation List and Same-Day Openings for Primary Care",
    metaDescription:
      "How a primary care practice can run a cancellation list and publish same-day openings honestly, without promising visits. Call (561) 291-2681.",
    answer:
      "A primary care practice can run a cancellation list by telling patients how to join, how they are contacted, how fast they must answer, and what order openings are offered in. Publish same-day availability only if it is real, say it can change, and never promise that a patient will be seen on a given day.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("An empty slot is a patient you did not reach"),
      p(
        "Every cancelled visit leaves a gap, and every gap is a chance for someone who has been waiting to be seen sooner. Most practices fill those gaps by whoever happens to be on the phone, which is fair to nobody. A written cancellation list changes that into a system patients can understand."
      ),
      p(
        "It also gives the website something concrete to say to the visitor who finds a three-week wait and is about to book elsewhere: you can ask to be called if something sooner opens."
      ),
      h2("Decide the rules before you publish"),
      ol(
        "Who may join: new patients, established patients, or both, and for which kinds of visit.",
        "How a patient joins: by phone or at the desk, and what the office needs to record, which should be a name, a phone number and a preferred window.",
        "How the office reaches them: a call, a text with no health information, or both, and which phone number is used.",
        "How long a patient has to answer before the slot goes to the next name on the list.",
        "The order openings are offered in: first come, first served, or by the urgency a nurse has assessed.",
        "What happens when a patient says yes: the original appointment is released so someone else can take it."
      ),
      p(
        "Keep the order rule simple. Offering a slot by how long someone has waited is easy to explain and hard to argue with. If a nurse needs to prioritize by clinical need, say that on the page in neutral words and note that urgent concerns should not wait on a list at all."
      ),
      h2("Wording for the page"),
      table(
        ["Section", "Sample wording"],
        ["How it works", "Call the office and ask to be added. We will offer openings by phone in the order people joined."],
        ["Response time", "We hold an opening for a short time, usually minutes, so please answer if you can come in."],
        ["What we cannot promise", "Joining the list does not guarantee an earlier visit. Your scheduled appointment stays in place until you accept a new time."],
        ["If this is urgent", "Do not wait for an opening. Call the office or, in an emergency, call 911."]
      ),
      p(
        "That last line matters. The page must make clear that the list is for convenience, and that anyone with a pressing concern should call the office right away. Our page on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice) has wording you can link to."
      ),
      h2("Same-day openings, published carefully"),
      p(
        "Some practices post same-day availability on the site or the Google Business Profile. That can win patients who would otherwise go to an urgent care center, but only when it is accurate. A note that says same-day visits are often available is fine if it is true most days; a banner that says appointments open today is not fine if the schedule is full by nine."
      ),
      p(
        "Our guide to [getting found for same-day and walk-in visits](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) explains how to word the profile. If you use an online scheduler, set it to hide slots that cannot be booked rather than leaving fake gaps."
      ),
      h3("Tracking what happens"),
      p(
        "Count three numbers for a month: how many people joined the list, how many openings were offered, and how many were accepted. If fewer than a third of offers are accepted, check whether the calls go to voicemail or whether the response window is too short."
      ),
      h3("Keep health details out of the message"),
      p(
        "A text that says a spot opened tomorrow at 10:30 with the practice name is enough. Do not include the reason for the visit, the provider's specialty beyond the name, or anything else that reveals health information. Our guide on [reminder wording](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) covers this in detail."
      ),
    ],
    faqs: [
      {
        q: "Does a cancellation list guarantee a sooner appointment?",
        a: "No, and the page should say so. A list only lets the office offer openings in an order that can be explained. Whether any slot opens depends on cancellations, so describe it as a courtesy, not a promise.",
      },
      {
        q: "Should patients join by form or by phone?",
        a: "Phone is simpler and avoids collecting information through a web form. If you do use a form, limit it to a name, a phone number and a preferred time window, and tell visitors not to describe symptoms.",
      },
      {
        q: "How long should a patient have to answer an offer?",
        a: "Long enough to be fair, short enough to be useful, often a matter of minutes for same-day slots and a few hours for next-day ones. State your own window on the page so no one is surprised.",
      },
      {
        q: "Can we advertise same-day appointments on Google?",
        a: "Only if they truly exist most days. Misstating availability frustrates patients and draws negative reviews. Use plain wording such as call to ask about same-day openings, and keep the hours on the profile accurate.",
      },
      {
        q: "What if a patient on the list needs urgent care?",
        a: "A list is not a triage system. Tell patients that urgent concerns should be raised with the office directly, and that emergencies need 911. Staff should know to move such calls out of the list.",
      },
    ],
    citations: [HHS_EMAIL, GBP_HOURS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Same-Day And Walk-In Visits", description: "Word availability honestly on the profile." },
      { href: "/guides/late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice", label: "Late Arrival Policy", description: "Reduce the gaps in the first place." },
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling", description: "Set up booking that matches the schedule." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1122
  {
    slug: "faq-page-for-a-primary-care-practice-questions-to-answer-without-medical-advice",
    keyword: "FAQ page for a primary care practice: questions to answer without medical advice",
    category: "Checklist",
    title: "FAQ Page for a Primary Care Practice: Questions to Answer Without Medical Advice",
    metaTitle: "Primary Care FAQ Page: Answers Without Medical Advice",
    metaDescription:
      "Which questions a primary care practice should answer on its FAQ page, in what order, and how to avoid giving medical advice. Call (561) 291-2681.",
    answer:
      "A primary care FAQ page should answer the practical questions patients ask the front desk: hours, new patients, insurance, referrals, forms, refills, portal use and what to do in an emergency. It should leave out diagnosis, treatment and symptom advice, and send those questions to a clinician or to 911 when urgent.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Mine the phone log, not your imagination"),
      p(
        "The best FAQ pages are written from what people actually ask. Ask the front desk to keep a tally for two weeks. The same ten or twelve questions will account for most of the calls, and they are almost never the questions a marketing team would have guessed."
      ),
      p(
        "Those calls are also the ones that cost the practice time. Each question answered on the website is one fewer rushed call, and one fewer patient left on hold. Search engines and AI assistants favour pages that answer concrete questions in plain sentences, so the same work helps visibility."
      ),
      h2("Questions that belong on the page"),
      ul(
        "Are you accepting new patients, and how do I become one?",
        "Which insurance plans do you accept, and what if mine is not listed?",
        "What are your hours, and are any days different?",
        "How do I request a refill, a form or a copy of my records?",
        "How do I get a referral to a specialist?",
        "How do I use the patient portal, and what if I forget my password?",
        "What should I bring to my first visit?",
        "What happens if I am late or need to cancel?"
      ),
      p(
        "Give each question its own short heading and a direct answer of two to four sentences. Link to the longer page for anyone who wants detail, for example your guide on a [prescription refill request page](/guides/prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice) or on [what to bring to a first appointment](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients)."
      ),
      h2("Questions that do not belong on it"),
      table(
        ["Question type", "What the page does instead"],
        ["Is this symptom serious?", "Say that the office cannot assess symptoms online and give the phone number and the 911 line."],
        ["Which medicine should I take?", "Say that medication questions go to the care team by phone or through the portal."],
        ["Will you treat this condition?", "Invite the patient to call and describe what they need help with to the front desk."],
        ["Is this test normal?", "Explain how results are shared and how long to wait, with a link to the lab results page."]
      ),
      p(
        "A page that tries to answer symptom questions can slide into medical advice, and advice given to a stranger without an exam is a liability. Keep the tone helpful and procedural. Where a question touches health, the answer is how to reach a clinician, not what to do."
      ),
      h2("Mark it up so machines can read it"),
      p(
        "Use the question as a heading and the answer as the paragraph under it, and add FAQ structured data that matches the visible text exactly. Google has narrowed which sites show FAQ rich results, so do not build the page for the markup. Build it for the people who call, and treat the markup as a tidy bonus; our guide to [writing patient FAQs that answer AI search](/guides/how-to-write-patient-faqs-that-answer-ai-search) covers the details."
      ),
      h3("Keep answers current"),
      p(
        "An FAQ that lists last year's insurance plans or an old phone number is worse than none. Set a calendar reminder each quarter to read the page against the front desk's current answers, and update the date at the bottom. When insurance changes, follow the steps in our guide to [updating when you join or leave a network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network)."
      ),
      h3("Where to link it from"),
      p(
        "Link the FAQ from the contact page, the new-patient page and the footer. Do not repeat all the answers across those pages. A link plus one sentence is enough, and it keeps each page distinct. If your practice also sees patients for counseling, keep that FAQ separate."
      ),
    ],
    faqs: [
      {
        q: "How many questions should a primary care FAQ page have?",
        a: "Eight to fifteen is a good range for one page. Fewer than that looks thin, and many more is hard to scan. If you have more questions than that, group them under headings or move detailed topics to their own pages.",
      },
      {
        q: "Can the page answer general health questions?",
        a: "It is safer not to. General information can read as advice to a patient with a particular condition. Stick to how the practice works, and send health questions to a clinician or, if urgent, to 911.",
      },
      {
        q: "Should the FAQ include FAQPage markup?",
        a: "It helps machines read the page, but only if every marked-up question appears on the page with the same answer. Do not hide questions in the markup, and do not expect a rich result in search.",
      },
      {
        q: "Where do the questions come from?",
        a: "From the front desk's real calls and the portal messages that ask about administrative matters. Keep a two-week tally and use the top questions, because they match what patients actually type into Google.",
      },
      {
        q: "How often should it be updated?",
        a: "At least every quarter and any time hours, insurance, providers or the portal change. Assign one person to own it so that updates happen even when the practice is busy.",
      },
    ],
    citations: [GOOGLE_HELPFUL, HHS_EMAIL, FTC_ADS],
    links: [
      { href: "/guides/how-to-write-patient-faqs-that-answer-ai-search", label: "Patient FAQs For AI Search", description: "Write answers machines can quote." },
      { href: "/guides/prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice", label: "Refill Request Page", description: "A procedural answer for refills." },
      { href: "/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice", label: "Lab Results And Portal Page", description: "Set expectations for results." },
      { href: "/locations/medical-seo-florida", label: "Medical SEO In Florida", description: "How we help practices get found statewide." },
    ],
  },

  // ---------------------------------------------------------------- 1123
  {
    slug: "patient-newsletter-for-a-medical-practice-without-health-details",
    keyword: "patient newsletter for a medical practice without health details",
    category: "How-to",
    title: "Patient Newsletter for a Medical Practice Without Health Details",
    metaTitle: "Patient Newsletter for a Medical Practice: No Health Details",
    metaDescription:
      "How a medical practice can send a patient newsletter that builds trust without health details, using consent and a clear unsubscribe. Call (561) 291-2681.",
    answer:
      "A patient newsletter for a medical practice should carry practice news, hours, new providers, seasonal reminders and community notes, and nothing about any one patient's health. Send it only to people who agreed to receive it, include a working unsubscribe link and the practice address, and use a sender address on the practice's own domain.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("A newsletter is a relationship, not a broadcast"),
      p(
        "Most practices that start a newsletter stop after three issues. The usual reason is that nobody decided what it was for. A newsletter that tries to educate, advertise and thank everyone at once ends up as a long email nobody finishes."
      ),
      p(
        "Pick one job: keep established patients informed about things that affect them. That means changes to hours, a new provider, a holiday closure, flu shot dates and how to reach the office. It does not mean health tips written for an unknown audience."
      ),
      h2("What can go in, and what cannot"),
      table(
        ["Fine to include", "Leave out"],
        ["New provider joining and when they start seeing patients", "Anything that reveals a patient has a particular condition"],
        ["Holiday hours and closures", "Lists or stories of real patients, even without names"],
        ["Reminder that flu shots or school forms are available, with dates", "Specific treatment recommendations for a condition"],
        ["How to use the portal or update insurance", "Promises of results from a service"],
        ["Community events the practice sponsors", "Photos of patients without written permission"]
      ),
      p(
        "The reason to keep health content general is not only privacy law. A message that says it is time for your diabetes check, sent to a list, tells everyone on it who has diabetes. Even a name and a topic together can disclose health information. Keep the list segmented by what the reader agreed to, and keep the content the same for every segment."
      ),
      h2("Consent and the legal basics"),
      ul(
        "Collect email addresses with a clear opt-in, such as a checkbox on a form that is not pre-checked.",
        "Write what the reader will receive and how often, in the sentence beside the checkbox.",
        "Put a working unsubscribe link and the practice's physical address in every issue, which commercial email rules require.",
        "Honor unsubscribe requests promptly, and keep a record of who asked.",
        "Do not add patients automatically from the chart. Using protected information to market to patients can require written authorization.",
        "Send from a domain you control, with the sender authentication your email provider recommends."
      ),
      p(
        "The federal marketing rules are worth a read before the first send. Our guide on [email marketing compliance for a medical practice](/guides/email-marketing-compliance-for-a-medical-practice) summarises them, and the federal guidance on marketing communications is linked below. If in doubt, ask a healthcare attorney to review the opt-in text once."
      ),
      h2("A simple monthly shape"),
      ol(
        "A short note from a named person at the practice, three sentences at most.",
        "One practical item: hours, a closure, a new service or how to book a visit.",
        "One community or team item, such as a welcome to a new nurse practitioner.",
        "A link to the portal and the phone number.",
        "The unsubscribe link and address."
      ),
      p(
        "Stay under five hundred words. Measure two numbers each month, the share of people who open it and the number who unsubscribe, and do not worry about clicks on individual links. If unsubscribes climb after an issue, you probably sent something that read like an advertisement."
      ),
      h3("Tie it to the website"),
      p(
        "Give each issue an archive page on the site only if you will keep it up; stale archives look neglected. A link from the newsletter to your [new patient welcome message](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) or your [holiday closure notice](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) keeps readers on pages that already exist."
      ),
      h3("Who writes it"),
      p(
        "Choose one writer and one reviewer, and keep a one-page checklist beside the draft: no names, no conditions, no promises, unsubscribe present. A tidy checklist is the cheapest compliance tool a practice can own."
      ),
    ],
    faqs: [
      {
        q: "Can we email our whole patient list?",
        a: "Not without care. Patients should opt in to marketing email, and using protected health information for marketing can require written authorization. Build your list from sign-ups instead of exporting the chart.",
      },
      {
        q: "How often should a practice send a newsletter?",
        a: "Once a month is plenty, and once a quarter is acceptable if each issue has real news. Consistency matters more than frequency, so choose a schedule you can keep.",
      },
      {
        q: "May a newsletter mention flu shot season?",
        a: "Yes, if the message is the same for everyone and simply says that flu shots are available and how to book. Do not target it at people because of a condition or age group without checking the rules first.",
      },
      {
        q: "Do we need an unsubscribe link in every issue?",
        a: "Yes. Commercial email rules require a clear way to opt out and a valid physical address. Honor opt-outs within days, and never ask a person to log in to leave the list.",
      },
      {
        q: "Should patient stories be included?",
        a: "No. Even anonymized stories can identify a person in a small community, and testimonials carry consent and advertising rules. Tell the practice's story through staff and services instead.",
      },
    ],
    citations: [HHS_MARKETING, FTC_ADS, GOOGLE_SENDER],
    links: [
      { href: "/guides/email-marketing-compliance-for-a-medical-practice", label: "Email Marketing Compliance", description: "Rules for sending email as a practice." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "A first email that builds trust." },
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Send from your own domain." },
      { href: "/locations/medical-seo-florida", label: "Medical SEO In Florida", description: "How we help practices get found statewide." },
    ],
  },

  // ---------------------------------------------------------------- 1124
  {
    slug: "client-transfer-notice-when-a-therapist-leaves-a-counseling-practice",
    keyword: "client transfer notice when a therapist leaves a counseling practice",
    category: "How-to",
    title: "Client Transfer Notice When a Therapist Leaves a Counseling Practice",
    metaTitle: "Client Transfer Notice When a Therapist Leaves a Practice",
    metaDescription:
      "How a counseling practice can notify clients and update its site and listings when a therapist leaves, protecting privacy. Call (561) 291-2681.",
    answer:
      "When a therapist leaves a counseling practice, clients need a clear notice with the last day of service, their options for staying or moving, how to get their records and who to call. The practice should tell clients directly before changing public pages, then update the website and listings and avoid saying where the therapist went without permission.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Clients hear it first, the website hears it second"),
      p(
        "A therapist leaving is one of the more delicate announcements a counseling practice makes. Clients have a personal relationship with that person, and many will feel the news before they have a plan. The notice has to come to them before any public change, not after a client finds the bio missing."
      ),
      p(
        "Decide the order of operations in advance: tell clients, then update the scheduling system, then change the website and listings. Doing it the other way round leaves a client reading about a departure on Google before anyone has called them."
      ),
      h2("What the client notice must say"),
      ol(
        "The last date the therapist will see clients, stated plainly.",
        "That the client can stay with the practice and meet another clinician, move with the therapist if they are continuing elsewhere, or choose a different provider.",
        "How to request a copy of their records, and who handles the request.",
        "How the practice will help with the handoff, such as a short transition visit, without promising a specific outcome.",
        "Who to call at the office with questions, with a phone number and hours.",
        "What the client should do in a crisis before their next appointment, including the 988 Lifeline."
      ),
      p(
        "Mention where the therapist is going only if the therapist has agreed and the licensing board's and practice's rules allow it. If a clinician is moving to a private practice and wants to tell clients, the notice can say that the clinician will contact clients directly, which also respects client choice."
      ),
      h2("Wording that stays kind and neutral"),
      table(
        ["Avoid", "Use"],
        ["We are sorry to inform you that your therapist has abandoned the practice", "Your therapist's last day with the practice will be November 14."],
        ["Your treatment will continue seamlessly", "We would like to help you decide what comes next, including meeting another clinician here."],
        ["All records are automatically transferred", "You may ask us to send your records to a new provider with your written authorization."],
        ["Contact the therapist at her new office", "She may contact you directly if she is able to, and you may choose whoever you like."]
      ),
      p(
        "Records need special care. Clients have rights to their records, and a practice should have a written process for authorization and delivery. Our guide on a [medical records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records) shows how to describe it, and the federal privacy guidance linked below sets the baseline."
      ),
      h2("Update the public side"),
      ul(
        "Remove or archive the therapist's bio page with a redirect to the team page, not a dead link.",
        "Mark the departure in the scheduling system so no one books a future visit with that person.",
        "Update the Google Business Profile, Psychology Today and other directory listings within a week.",
        "Check the structured data on the team page so a departed clinician is no longer listed.",
        "Tell insurers and credentialing bodies according to your contracts."
      ),
      p(
        "Our checklist for [what to update when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice) covers the full list, and the page on [directory profiles](/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice) explains how to retire a listing."
      ),
      h3("Do not mention the reason"),
      p(
        "Why a therapist left is private for the therapist and the practice. A neutral line such as is moving on is enough. If the departure is due to something sensitive, ask counsel for wording before anything goes out."
      ),
      h3("Give clients a person, not a form"),
      p(
        "Name one staff member who will answer calls about the transition, and give that person a script. Ten calm phone conversations are worth more than a polished letter."
      ),
    ],
    faqs: [
      {
        q: "Should the website announce that a therapist is leaving?",
        a: "Not before clients have been told directly. After that, a brief neutral note is fine, though many practices simply remove the bio, redirect the page to the team listing and leave it at that.",
      },
      {
        q: "Can the practice tell clients where the therapist is going?",
        a: "Only if the therapist agrees and any contract or board rule allows it. Otherwise say that the clinician may contact clients directly, and make sure clients know they can choose any provider they like.",
      },
      {
        q: "What happens to the departing therapist's bio page?",
        a: "Redirect it to the team page with a permanent redirect so old links and search listings do not break, remove the clinician from structured data and update the sitemap. Do not leave a live page for someone who no longer works there.",
      },
      {
        q: "How do clients get their records?",
        a: "By written request or authorization, following the practice's records process. Describe it on the site and in the notice, and respond within the time the law allows.",
      },
      {
        q: "Is a letter or an email better for the notice?",
        a: "Use the contact method each client chose, and avoid sending anything revealing to an address or phone the client has not approved. A call from the practice before the written notice is kind, and a short secure message follows.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, FL_MENTAL],
    links: [
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "Provider Joins Or Leaves", description: "Everything to update online." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Request Page", description: "Let clients ask for their records." },
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "Write and retire bios properly." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1125
  {
    slug: "employer-and-workplace-partnership-page-for-a-primary-care-practice",
    keyword: "employer and workplace partnership page for a primary care practice",
    category: "How-to",
    title: "Employer and Workplace Partnership Page for a Primary Care Practice",
    metaTitle: "Employer Partnership Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can build an employer page for physicals, onsite events and scheduling without exposing patient data. Call (561) 291-2681.",
    answer:
      "An employer partnership page for a primary care practice should say which services the practice offers to local employers, such as pre-employment physicals, onsite flu shot days and drug-screen coordination, how scheduling and billing work, and what the employer will never receive. Employers get dates and invoices, never any employee's health information.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("A different reader with a different question"),
      p(
        "The person visiting this page is an office manager, an HR coordinator or a small business owner. They are not asking about their own health. They want to know how many employees can be seen in a day, what it costs, how to book, and what they will get back. They have probably been burnt by a vendor who was slow to send paperwork."
      ),
      p(
        "A page for them should read like a service sheet: short sections, a table, a phone number for a named person. It should not read like the patient pages, and it should not borrow their wording."
      ),
      h2("Services worth listing, and how to state them"),
      table(
        ["Service", "What to state"],
        ["Pre-employment physicals", "What the visit covers in general terms, how long it takes, how an employer sends the request, and the fee."],
        ["Onsite vaccine or flu shot days", "Group size, dates, space the office needs, and how consent forms are handled."],
        ["Work-related paperwork", "What forms the practice completes and the turnaround time."],
        ["Drug-screen coordination", "Whether the office collects specimens or refers to a lab, said plainly."],
        ["Employee new-patient access", "How employees can become patients on their own, as a separate matter from the employer arrangement."]
      ),
      p(
        "List only what the practice truly does. If you offer pre-employment physicals but not commercial driver exams, say so, and point to the page on [pre-employment, DOT and sports physicals](/guides/pre-employment-dot-and-sports-physicals-page-for-a-primary-care-practice) for what is covered."
      ),
      h2("The privacy paragraph is the most important one"),
      p(
        "Employers sometimes expect to be told what a physician found. In general, a practice cannot give an employer an employee's health information without the employee's written authorization, and what an employer may lawfully ask for is limited by law. State the practice's rule in one clear paragraph: the employer receives confirmation that a visit occurred and whatever the employee has authorized in writing, and nothing else."
      ),
      ul(
        "No diagnoses, test results or notes go to an employer without written authorization from the employee.",
        "The employer receives an invoice that lists the service and date, not the reason.",
        "Employees sign the practice's forms themselves, not the employer's.",
        "Scheduling lists shared with employers show names and times only."
      ),
      p(
        "Do not promise that employees will pass or that the visit is quick. Say how long a typical visit takes and what the employee should bring. Our page on [what to bring to a first appointment](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) offers wording you can adapt."
      ),
      h2("Getting started"),
      ol(
        "The employer calls or sends a short request with the number of employees and the service.",
        "The practice replies with availability, price and a list of what the employer must send.",
        "Employees book their own slots or the practice offers a block of times.",
        "The practice sends one invoice and a confirmation of completed visits.",
        "Everything else stays with the employee."
      ),
      h3("Billing and contracts"),
      p(
        "Be clear about who pays. Some employers pay directly, others reimburse the employee, and some benefit plans cover the visit. A one-page agreement signed by the employer reduces disputes; ask an attorney to review the template before it goes on the site."
      ),
      h3("Finding employers and showing up locally"),
      p(
        "Employers search for phrases like occupational health near me and employee physicals. Link the page from your services menu and add it to the Google Business Profile services list. Sponsoring a local business group or a chamber of commerce event, as discussed in our guide on [local sponsorships and community events](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn), can lead to links and introductions that are hard to buy."
      ),
    ],
    faqs: [
      {
        q: "Can an employer see the results of a pre-employment physical?",
        a: "Only what the employee authorizes in writing, within what the law allows an employer to ask. Say clearly on the page that results and notes go to the employee, and that the employer sees confirmation of the visit and any authorized information.",
      },
      {
        q: "Should the page list prices?",
        a: "A starting price or range per service helps employers decide. If pricing depends on group size or tests, say what changes it. A visible price reduces the number of calls that end at cost.",
      },
      {
        q: "Do we need a separate page for onsite events?",
        a: "Usually one page is enough. Create a separate page only if you run a distinct, regularly booked program with its own fees, staffing and paperwork.",
      },
      {
        q: "Can the practice name employer clients?",
        a: "Only with the employer's written permission, and never in a way that suggests which employees are patients. Many practices simply say they serve local businesses of all sizes.",
      },
      {
        q: "Does this page replace the patient pages?",
        a: "No. Employees who want to become patients should still be pointed to the new-patient page, and the two pages should be linked but kept separate so each speaks to its own reader.",
      },
    ],
    citations: [HHS_PRIVACY, FTC_ADS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/pre-employment-dot-and-sports-physicals-page-for-a-primary-care-practice", label: "Pre-Employment And DOT Physicals", description: "The physicals page for individuals." },
      { href: "/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn", label: "Local Sponsorships", description: "Earn links and introductions locally." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Page", description: "Explain who pays and when." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },

  // ---------------------------------------------------------------- 1136
  {
    slug: "homepage-above-the-fold-content-for-a-primary-care-practice-website",
    keyword: "homepage above-the-fold content for a primary care practice website",
    category: "Checklist",
    title: "Homepage Above-the-Fold Content for a Primary Care Practice Website",
    metaTitle: "Primary Care Homepage: What Goes Above the Fold",
    metaDescription:
      "What a primary care practice homepage should show in the first screen on a phone: location, phone, hours and a clear next step. Call (561) 291-2681.",
    answer:
      "The first screen of a primary care homepage should show the practice name, the town or neighborhood, a tap-to-call number, today's hours, whether it is accepting new patients, and one clear button to book or ask a question. Anything that pushes those down the page, such as a slideshow or a long welcome, costs calls.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Look at your homepage on a phone first"),
      p(
        "Most people who find a primary care practice on Google are holding a phone. They see about six hundred pixels of height before they scroll, and they decide in a few seconds whether this is the right office. Open your homepage on a real phone, not a desktop window made narrow, and look only at the first screen."
      ),
      p(
        "Ask three questions of what you see. Can I tell what this practice is and where? Can I call without hunting for a number? Can I tell whether it is open now and taking new patients? If the answer to any is no, you have found the first thing to fix."
      ),
      h2("The six things that belong in the first screen"),
      ol(
        "The practice name and what it is, such as family medicine or internal medicine, with the town it serves.",
        "A phone number that is a tap-to-call link, large enough to press with a thumb.",
        "Today's hours or a line such as open until 5 p.m. today, pulled from the same source as the Google Business Profile.",
        "A clear statement about new patients, such as accepting new patients or call to ask about availability.",
        "One main button, for example Request an Appointment, that leads to a short form or the scheduler.",
        "A real photograph of the building or the care team, compressed so it does not slow the page."
      ),
      p(
        "Everything else can wait. Insurance logos, the doctor's full biography, awards and a mission statement are all useful, but a patient who cannot find the phone number will not scroll to read them."
      ),
      table(
        ["Common homepage habit", "What it costs and the better choice"],
        ["Rotating slideshow at the top", "It slows the page and hides the number. Use one still photo and a headline."],
        ["Long welcome paragraph", "It pushes hours and buttons off screen. Use one sentence, then the details."],
        ["Phone number as an image", "It cannot be tapped or read by search engines. Use a text link that dials."],
        ["Five competing buttons", "There is no clear next step. Use one main action and one quiet secondary link."]
      ),
      h2("Say what you are in the words patients use"),
      p(
        "The headline is where a practice can state what it does in the phrases people search. Family doctor in Wellington is clearer than your mission, and it tells Google what the page is about. Keep the claim honest: describe the services and the place, and leave out words such as best or leading, which you cannot prove."
      ),
      p(
        "Our guide to [writing title tags](/guides/how-to-write-title-tags-for-a-medical-practice-website) covers how the same phrase should appear in the page title, and the page on [heading structure](/guides/heading-structure-h1-to-h3-for-a-medical-practice-web-page) explains why the headline should be the single H1."
      ),
      h2("Speed and stability matter here too"),
      p(
        "A first screen that jumps as it loads, because an image or font arrives late, makes a patient press the wrong thing. Set the dimensions of the hero photo, avoid text that depends on a custom font to be readable, and test with the checklist for [Core Web Vitals](/guides/core-web-vitals-checklist-for-a-medical-practice-website)."
      ),
      h3("Tracking the first screen"),
      p(
        "Make sure the tap-to-call link and the main button both report to analytics, so you can tell which one patients use. Our guide on [tracking phone calls](/guides/tracking-phone-calls-from-a-medical-website) explains the setup without exposing patient information."
      ),
      h3("A quick test"),
      p(
        "Hand your phone to someone who has never seen the site and ask them to find the number, the hours and how to book. Time them. If it takes more than ten seconds, simplify the first screen before changing anything else on the page."
      ),
    ],
    faqs: [
      {
        q: "Should the doctor's photo be on the first screen?",
        a: "It can be, if it is a clear, friendly photograph and does not push the phone number and hours off the screen. Many patients choose a practice partly by who they will meet, so a real photo helps when it is sized well.",
      },
      {
        q: "Is it better to show a phone number or a booking button?",
        a: "Show both, but make one primary. Patients who prefer to call need the number, while those who like to book online need the button. Track which gets used and promote that one.",
      },
      {
        q: "Do we need a welcome message?",
        a: "A short one is fine. A single sentence that says who you are and who you serve is enough. Long welcome text pushes the useful details below the first screen, where fewer people reach them.",
      },
      {
        q: "How do we show hours that change on holidays?",
        a: "Pull today's hours from one source and update it for holidays. Our holiday notice guide explains how to keep the site, the Google profile and the phone greeting aligned.",
      },
      {
        q: "Does the first screen affect search rankings?",
        a: "Not directly, but it affects whether visitors stay and act. A page that loads quickly and shows what people need keeps visitors, and clear headings help search engines understand the page.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GOOGLE_MOBILE, W3C_IMAGES],
    links: [
      { href: "/guides/how-to-write-title-tags-for-a-medical-practice-website", label: "Title Tags", description: "Use the same phrase in the page title." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Keep the first screen fast and stable." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Phone Call Tracking", description: "Measure taps on the number." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "How we design practice sites." },
    ],
  },

  // ---------------------------------------------------------------- 1137
  {
    slug: "homepage-for-a-therapy-practice-what-a-first-time-visitor-needs-to-see",
    keyword: "homepage for a therapy practice: what a first-time visitor needs to see",
    category: "Checklist",
    title: "Homepage for a Therapy Practice: What a First-Time Visitor Needs to See",
    metaTitle: "Therapy Practice Homepage: What First-Time Visitors Need",
    metaDescription:
      "What a therapy practice homepage should show a nervous first-time visitor: who you see, fees, how to start and privacy. Call (561) 291-2681.",
    answer:
      "A therapy practice homepage should tell a nervous first-time visitor who the clinicians are, who they see, what a first contact looks like, what it costs, and how privacy works. It should use calm, plain words, one clear way to reach out, and no promises about outcomes or lists of diagnoses.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The visitor is deciding whether it is safe to call"),
      p(
        "A person arriving on a therapist's homepage has often thought about it for weeks. They are not comparing features. They are deciding whether the person behind this page will be kind, whether it will be expensive, and whether anyone they know will find out. The page has a few seconds to say yes to each."
      ),
      p(
        "That reframes the job of the homepage. It is less a brochure than a reassurance: here is who we are, here is who we see, here is how to start, and here is what happens to your information."
      ),
      h2("What the page needs, in order"),
      ol(
        "A one-sentence welcome that states who you see, such as adults and teens in a named town.",
        "A photo of the clinician or the office room, real and warm, with their name and license.",
        "How to begin: a phone number, a short message form and a promise about reply time.",
        "Fees and insurance in a short block, with a link to the full fees page.",
        "Session formats: in person, video or both, and the days and times you offer.",
        "A short privacy line and a link to the fuller policy.",
        "A crisis note with the 988 Lifeline and a statement that the office is not an emergency service."
      ),
      p(
        "Notice what is missing: a list of conditions. Pages that list every condition from anxiety to trauma read as generic, and they tempt a practice into clinical claims. A short, human description of who you work with is stronger and safer."
      ),
      table(
        ["A visitor wonders", "Where the homepage answers it"],
        ["Will this person understand me?", "Warm photo and a short note in the clinician's own voice."],
        ["Can I afford it?", "Fee block near the top and a clear note on insurance or self-pay."],
        ["Will it be awkward to start?", "A short first-contact description and a form that asks for little."],
        ["Is this private?", "A plain privacy line and a link to the notice."],
        ["What if I am in crisis?", "A visible 988 note and a statement about emergencies."]
      ),
      h2("Words that help and words that hurt"),
      p(
        "Use ordinary language: talk, support, work together, sessions. Avoid clinical jargon, promises such as heal or fix, and anything that sounds like a transaction. Do not state that therapy works, because that is an outcome claim; describe how you work instead, as in our guide to an [our approach page without outcome claims](/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims)."
      ),
      h3("Link out to the pages that carry detail"),
      p(
        "The homepage should be short, and the detail should live on pages built for it: a [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice), a [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) and a [telehealth instructions page](/guides/telehealth-visit-instructions-page-for-a-therapy-practice). Each link should sit in a sentence that tells the reader what they will find."
      ),
      h3("Keep it accessible"),
      p(
        "A person in distress may be reading on a small screen with the sun on it. Use high-contrast text, large buttons and descriptive alt text on photos, and keep the contact form short. Our guide on [web accessibility for a medical practice](/guides/ada-web-accessibility-for-a-medical-practice-website) gives the checks."
      ),
      p(
        "Finally, test the page on a phone by calling the number on it, as a first-time visitor would. If the call goes to a mailbox with no name, add a greeting that states the practice name and the callback time. That first voice is part of the homepage."
      ),
    ],
    faqs: [
      {
        q: "Should a therapy homepage list the conditions we treat?",
        a: "It is better not to. A long list reads as generic and invites clinical claims. Describe who you see, such as adults, teens or couples, and let the first conversation cover specifics.",
      },
      {
        q: "Is it fine to show the clinician's photo?",
        a: "Yes, a real and friendly photo helps a nervous visitor, especially with the clinician's name and license. Avoid stock photos of people that suggest real clients, and avoid photos of clients altogether.",
      },
      {
        q: "How much should the homepage say about fees?",
        a: "Enough to remove surprise: a self-pay range or per-session fee, whether you take insurance, and a link to the full fees page. Hiding fees until a call turns away people who are already anxious about asking.",
      },
      {
        q: "Should the homepage include a contact form?",
        a: "A short one, yes, as one option beside the phone number. Ask for a name, a phone number and a good time to call, and tell visitors not to describe symptoms in the message.",
      },
      {
        q: "Does a calm design really matter?",
        a: "Yes. Visitors judge a therapist's office by how the site feels. Plain layout, gentle colors, readable type and few pop-ups tell a stressed visitor that the practice will be careful with them.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, ADA_WEB],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What happens at the first appointment." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "State fees clearly." },
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Instructions", description: "Help clients set up a video visit." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1138
  {
    slug: "navigation-menu-and-footer-for-a-medical-practice-website",
    keyword: "navigation menu and footer for a medical practice website",
    category: "Checklist",
    title: "Navigation Menu and Footer for a Medical Practice Website",
    metaTitle: "Navigation Menu and Footer for a Medical Practice Site",
    metaDescription:
      "How to structure the menu and footer of a medical practice website so patients and Google find hours, phone and key pages. Call (561) 291-2681.",
    answer:
      "A medical practice website menu should have five to seven plain-language items, such as Services, Providers, New Patients, Insurance, Locations and Contact, plus a visible phone number. The footer should repeat the practice name, address, phone, hours and the pages every visitor needs, using the same details as the Google Business Profile.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The menu is a map, not a sales pitch"),
      p(
        "Patients use the menu to answer a handful of questions: what do you treat, who are the doctors, how do I become a patient, do you take my insurance, and how do I reach you. A menu built around those questions works. A menu built around internal departments or clever labels does not."
      ),
      p(
        "The same structure also tells Google how the site is organized. Items that are plainly labelled and linked from every page signal which pages matter, which is one of the cheapest forms of internal linking a practice has."
      ),
      h2("A menu that works"),
      table(
        ["Menu item", "What sits behind it, and why it earns a place"],
        ["Services", "A list of services, each with its own page, matching what people search for."],
        ["Providers", "A team page and one page per clinician, because patients choose people."],
        ["New Patients", "Forms, what to bring and how to book, moving visitors toward a booking."],
        ["Insurance", "Accepted plans and self-pay options, answering the first practical question."],
        ["Locations", "Address, hours, parking and directions, supporting local search."],
        ["Contact", "Phone, form and hours, the last stop for everyone."]
      ),
      p(
        "Keep the labels literal. Care instead of Services, or Our Story instead of About, may feel warmer, but a visitor scanning in two seconds benefits from words they expect. Aim for no more than seven top-level items, and put a tap-to-call button beside the menu on phones."
      ),
      h2("Menus on a phone"),
      ul(
        "Make the menu button large enough to press, and label it with the word Menu, not just three lines.",
        "Open submenus with a tap rather than hover, which does not exist on a phone.",
        "Keep the phone number visible in the header so it never disappears into the menu.",
        "Check that the menu can be used with a keyboard and a screen reader.",
        "Avoid dropdowns more than one level deep."
      ),
      p(
        "Google indexes the mobile version first, so a menu that hides links on phones hides them from search too. The guidance on [mobile-first indexing](/guides/mobile-first-indexing-explained-for-a-medical-practice-website) explains why the phone version must carry the same links as the desktop version."
      ),
      h2("What the footer is for"),
      p(
        "The footer is where people look when they cannot find something else. It should carry the practice name, full address, phone number, hours, a link to the privacy notice and the accessibility statement, and links to the main service and provider pages. It is also a good place for the 988 Lifeline and 911 notice on a counseling site."
      ),
      ul(
        "Name, address and phone exactly as they appear on your Google Business Profile.",
        "Hours, or a link to a page that always shows them.",
        "Links to the privacy notice, terms and accessibility information.",
        "Social links only to accounts the practice actively keeps up.",
        "A copyright line with the current year, updated by the site and not by hand."
      ),
      p(
        "Consistency of the name, address and phone number matters more than people think; our guide to [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) shows what breaks it. A footer that still shows an old suite number is one of the commonest causes."
      ),
      h3("Do not stuff the footer with links"),
      p(
        "A footer holding sixty links to every city and service looks like an attempt to manipulate search and makes the real links harder to see. Include the pages a patient needs, link to a hub page for the rest, and let body content carry the deeper internal links, as described in our guide to [internal linking](/guides/internal-linking-for-a-medical-practice-website)."
      ),
      h3("Test it"),
      p(
        "Choose five tasks, such as book a visit, find the insurance list and read about a provider. Ask three people to do them on a phone and count the taps. More than three for any task means the structure needs work."
      ),
    ],
    faqs: [
      {
        q: "How many items should the main menu have?",
        a: "Five to seven. More than that makes patients scan and choose slowly, and it often shows that the site has grown without a plan. Group related pages under one item instead of adding another top-level link.",
      },
      {
        q: "Should the phone number be in the menu?",
        a: "It should be in the header beside the menu, not hidden inside it. On a phone, a tap-to-call button that stays visible is one of the most useful elements a practice site can have.",
      },
      {
        q: "Is a mega menu a good idea for a medical site?",
        a: "Rarely. Mega menus work on large retail sites. A medical practice with a modest number of pages is better served by a simple menu and clear landing pages that link to the detail.",
      },
      {
        q: "What belongs in the footer?",
        a: "Name, address, phone, hours, the privacy notice, accessibility information and links to the main service and provider pages. Keep these identical to the Google Business Profile, and leave out long lists of keywords.",
      },
      {
        q: "Does the menu affect search rankings?",
        a: "Yes, indirectly. Links in the menu appear on every page, so they tell Google which pages are important, and a clear structure helps both crawlers and patients find content.",
      },
    ],
    citations: [GOOGLE_MOBILE, W3C_IMAGES, ADA_WEB],
    links: [
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking", description: "Link pages in ways patients and Google understand." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone identical." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "Web Accessibility", description: "Make menus work for everyone." },
      { href: "/locations/medical-website-design-west-palm-beach", label: "Medical Website Design In West Palm Beach", description: "How we design practice sites." },
    ],
  },

  // ---------------------------------------------------------------- 1139
  {
    slug: "service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice",
    keyword: "service animal and accessibility accommodation request page for a medical practice",
    category: "How-to",
    title: "Service Animal and Accessibility Accommodation Request Page for a Medical Practice",
    metaTitle: "Accommodation Request and Service Animal Page for a Practice",
    metaDescription:
      "How a medical practice can explain its service animal policy and accommodation requests without asking for health details. Call (561) 291-2681.",
    answer:
      "A service animal and accommodation page should state that service dogs are welcome, say what staff may ask, explain how to request an interpreter, a wheelchair-accessible room or extra time, and give a phone number and email for requests. It should never ask patients to describe their disability or condition on the page or in a form.",
    author: "Liam Costello",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("Make the request easy before the visit"),
      p(
        "A patient who uses a wheelchair, who is deaf or hard of hearing, or who relies on a service dog often wonders how the visit will go before they arrive. Some stay away rather than ask. A page that says what the practice provides, and how to ask for more, removes the first and biggest barrier."
      ),
      p(
        "It also helps staff. When the answer is written down, the front desk gives the same answer every time, instead of improvising on a busy morning."
      ),
      h2("What the page should state"),
      ul(
        "That service animals are welcome in all areas patients are allowed, in line with the ADA.",
        "What staff may ask when it is not obvious: whether the animal is required because of a disability and what task it has been trained to do. Staff do not ask for proof or a demonstration.",
        "That emotional support animals are not the same as service animals under the ADA, and how the practice handles them, stated kindly.",
        "How to request a sign language or spoken-language interpreter, and how far ahead to ask.",
        "How to ask for a wheelchair-accessible exam room, a longer appointment, large-print forms or help with paperwork.",
        "Who to contact, with a phone number, an email and the hours someone answers."
      ),
      p(
        "Write it in the practice's own voice and keep sentences short. A patient reading this may be seeking reassurance, and a legalistic page will not provide it."
      ),
      table(
        ["Patient need", "Wording that helps"],
        ["Service dog", "Service dogs are welcome. If it is not obvious, our staff may ask two questions: is the dog required because of a disability, and what task is it trained to perform."],
        ["Interpreter", "Tell us when you book and we will arrange an interpreter at no cost to you."],
        ["Mobility", "Our exam rooms on the ground floor are accessible. Tell us if you need extra help or a longer visit."],
        ["Vision", "Ask for large-print or screen-reader friendly forms, or for staff to read them with you."],
        ["Anything else", "Call or email and tell us what would make the visit easier. You do not need to explain why."]
      ),
      h2("Do not ask for health details"),
      p(
        "The most important rule on the page is the one about what not to ask. A request form should ask for a name, a phone number, the date of the appointment and the kind of help wanted. It should not ask for a diagnosis, and staff should not ask visitors to explain a disability. State that on the page."
      ),
      p(
        "Because the form could be read as revealing a disability, keep it off third-party tools that collect data you do not control, and do not run advertising pixels on the page. Our guide on [HIPAA-safe tracking](/guides/hipaa-safe-tracking-for-a-medical-website) explains how to keep sensitive pages clean."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Link this page from the contact page, the new-patient page and the footer. Pair it with the practice's guidance on [parking, entrance and accessibility](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) and with the page on [languages spoken and interpreter access](/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile), so a patient who needs several things finds them all."
      ),
      h3("Train the front desk"),
      p(
        "A page is only as good as the people behind the phone. Spend ten minutes at a staff meeting reading it aloud and agreeing on who handles interpreter bookings, who confirms room changes and what to say about service animals. Put the answers on a card by the phone."
      ),
      h3("Website accessibility is part of the answer"),
      p(
        "A patient who cannot use the site cannot ask for help. Make sure the page itself works with a screen reader, has text that can be enlarged, and that the form can be completed by keyboard. The guidance on [web accessibility for medical practices](/guides/ada-web-accessibility-for-a-medical-practice-website) lists the basics. A matching [website accessibility statement that explains how to report a barrier](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) lets patients ask for help with the site as easily as with the building."
      ),
    ],
    faqs: [
      {
        q: "What can staff ask about a service animal?",
        a: "When the need is not obvious, staff may ask whether the animal is required because of a disability and what work or task it has been trained to do. They may not ask for documentation, require a special vest or ask for a demonstration.",
      },
      {
        q: "Are emotional support animals the same as service animals?",
        a: "Under the ADA they are different. The law treats trained service dogs differently from emotional support animals, so a practice can set its own policy for the latter. Explain your approach kindly and in plain words.",
      },
      {
        q: "Who pays for an interpreter?",
        a: "Practices covered by the ADA generally must provide effective communication, and cannot charge the patient for an interpreter. Ask a healthcare attorney how your practice should arrange and document it.",
      },
      {
        q: "Should the request form ask what the disability is?",
        a: "No. Ask only what help is needed. Asking for a diagnosis on a web form collects sensitive information unnecessarily and can discourage the people the page is meant to help.",
      },
      {
        q: "Can a service animal be asked to leave?",
        a: "Only in narrow cases, such as when the animal is out of control and its handler does not take effective action, or it is not housebroken. Staff should know the exceptions and handle them calmly.",
      },
    ],
    citations: [ADA_TITLE_III, ADA_WEB, HHS_OCR_COMPLAINT],
    links: [
      { href: "/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile", label: "Parking And Accessibility Info", description: "Where to enter and park." },
      { href: "/guides/how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile", label: "Languages And Interpreters", description: "List interpreter access." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "Web Accessibility", description: "Make the site usable by everyone." },
      { href: "/locations/medical-website-design-florida", label: "Medical Website Design In Florida", description: "How we design practice sites." },
    ],
  },

  // ---------------------------------------------------------------- 1140
  {
    slug: "patient-feedback-and-complaint-contact-page-for-a-medical-practice-without-health-details",
    keyword: "patient feedback and complaint contact page for a medical practice without health details",
    category: "How-to",
    title: "Patient Feedback and Complaint Contact Page for a Medical Practice Without Health Details",
    metaTitle: "Patient Feedback and Complaint Page for a Medical Practice",
    metaDescription:
      "How a medical practice can set up a feedback and complaint page that invites concerns privately and keeps health details out. Call (561) 291-2681.",
    answer:
      "A patient feedback and complaint page should tell patients who to contact, by phone or a short form, how quickly the practice replies, and what happens next, while asking them not to include health details. It should accept concerns privately before they become public reviews, and never discourage patients from posting honest reviews.",
    author: "Gio LaRoche",
    publishDate: "2026-10-20T09:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Give unhappy patients a door that is not Google"),
      p(
        "Most patients who are unhappy would rather be heard than post. They write a public review when they cannot find a way to reach someone. A clearly marked feedback page gives them that way, and gives the practice a chance to put things right before the story is told in public."
      ),
      p(
        "It has to be honest about its purpose. The page invites concerns, and it never tries to keep a patient from leaving a review. Google and the Federal Trade Commission both warn against steering unhappy patients away from review sites while sending happy ones in."
      ),
      h2("What the page should include"),
      ol(
        "A short sentence welcoming praise, questions and concerns, in the practice manager's voice.",
        "A name and role for the person who reads feedback, with a phone number and an email address.",
        "A promise about response time, such as within two business days, that the practice can actually keep.",
        "A short form with a name, a phone number or email, and a message box, with a clear note not to include health information.",
        "What happens next: who reviews it, whether the patient will get a call, and what the practice will and will not tell them.",
        "A statement that patients are free to share their experience publicly, and where to find the practice's profiles."
      ),
      p(
        "Include one more paragraph for the patient who needs to file a formal complaint with a regulator or the Office for Civil Rights. Naming those outlets signals that the practice has nothing to hide, and it is required in some privacy notices."
      ),
      table(
        ["Do", "Do not"],
        ["Ask patients to keep health details out of the form and speak by phone instead.", "Ask the patient to describe symptoms, a diagnosis or a treatment in the message."],
        ["Reply within the time you promised, in a neutral tone.", "Argue the facts of a case in writing or by email."],
        ["Thank people for raising concerns.", "Ask patients to remove or change a public review in exchange for something."],
        ["Log the feedback and review it monthly.", "Treat feedback as a marketing list."]
      ),
      h2("Handle the reply with care"),
      p(
        "Staff replying to a complaint must not confirm that the person is a patient in any public place, and must not discuss care by email. A good reply says thank you, offers a call from a named person and gives a number. The same discipline applies when a complaint turns up as a public review; see our guide on [responding to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review)."
      ),
      p(
        "If the patient later agrees that the problem was resolved, you may kindly ask whether they would consider updating the review. Our page on [asking a patient to update or remove a review](/guides/how-to-ask-a-patient-to-update-or-remove-a-google-review-after-you-resolve-the-problem) describes how to do that without pressure."
      ),
      h3("Count and learn"),
      p(
        "Keep a simple log with the date, the topic, such as wait time, billing or phone access, and the outcome. Do not record health details in it. After three months, read the topics together. Patterns usually point to one or two fixable processes, and a billing page or a refund procedure often removes half of them."
      ),
      h3("Where to link it"),
      p(
        "Link the page from the contact page, the footer and the confirmation email after a visit. Do not link it from the Google profile as the only place to reach the practice, and do not hide the profile's review link. Our guide on [patient satisfaction survey invitations](/guides/patient-satisfaction-survey-invitation-for-a-medical-practice-without-collecting-health-details) covers the survey side."
      ),
    ],
    faqs: [
      {
        q: "Will a feedback page stop negative reviews?",
        a: "No, and it should not try to. It gives unhappy patients a private route and can resolve some concerns early, but patients stay free to post honest reviews wherever they like. Steering people away from reviews violates platform rules.",
      },
      {
        q: "Should the form ask what happened?",
        a: "Ask for a short message about the experience, such as scheduling, billing or waiting time, and tell patients not to include health information. Offer a phone call for anything involving care.",
      },
      {
        q: "How fast should the practice respond?",
        a: "Choose a time you can meet, such as two business days, and publish it. A reply that arrives within that window matters more than a promise of an instant answer that is not kept.",
      },
      {
        q: "Can the page include patient testimonials?",
        a: "Keep praise and complaints separate. Testimonials have their own advertising and privacy considerations, so handle them on a different page and follow the rules in our testimonial checklist.",
      },
      {
        q: "Who should read the feedback?",
        a: "A practice manager or owner, not the person the feedback is about. Make sure the reader is trained in privacy so that replies never confirm that someone is a patient in a public place.",
      },
    ],
    citations: [FTC_REVIEWS, GOOGLE_REVIEW_POLICY, HHS_OCR_COMPLAINT],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Respond To A Negative Review", description: "Reply publicly without confirming care." },
      { href: "/guides/patient-testimonial-compliance-checklist", label: "Testimonial Compliance", description: "Rules for using patient praise." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing And Payment Page", description: "Answer the commonest complaint." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found nearby." },
    ],
  },
];
