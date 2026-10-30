// -- Guides batch 21 - 2026-10-19 --
// Guide/AEO pages from the Command Center queue (rows 1086-1095 plus five rows planned 2026-10-19), built by the page
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

export const guidesPartTwentyFour: Guide[] = [
  // ---------------------------------------------------------------- 1086
  {
    slug: "college-student-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "college student counseling page for a counseling practice without clinical claims",
    category: "How-to",
    title: "College Student Counseling Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "College Student Counseling Page for a Therapy Practice",
    metaDescription:
      "How a counseling practice can build a clear page for college students and their parents without clinical claims. Call (561) 291-2681.",
    answer:
      "A college student counseling page should tell a student and a parent who the practice sees, how scheduling works around classes and breaks, what it costs, and how privacy works for an adult child, without promising outcomes or describing treatment. Keep it short, practical and honest about what the office can and cannot do.",
    author: "Liam Costello",
    publishDate: "2026-10-19T09:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 6,
    sections: [
      h2("Who is actually reading this page"),
      p(
        "Two different people land on a college counseling page. The student is usually looking at a phone between classes, wants to know whether an appointment is possible this week, and is wary of anything that sounds like a lecture. The parent is often the one who found the practice, is worried, and has the insurance card."
      ),
      p(
        "Both questions deserve an answer on the same page, but in different places. Put the student-facing logistics first, and put a short parent section lower down that explains what the office can share, which is nothing without the student's written permission once the student is an adult."
      ),
      h2("What the page should cover"),
      ul(
        "Who you see, such as undergraduate and graduate students and young adults, and the ages you work with, stated plainly.",
        "How to book, including a phone number that is tap-to-call on a phone and a form that does not ask for symptoms.",
        "Session times that work around classes, such as late afternoon or evening slots, only if you actually offer them.",
        "Whether you offer video visits for students who are away from the office, and the states where you are licensed.",
        "Fees, accepted insurance and what a student can do if they are on a parent's plan.",
        "How privacy works, in two or three sentences, with no guarantees beyond what the law and your own policies allow."
      ),
      p(
        "Resist the urge to list conditions. A page that names anxiety, depression and other struggles in a long run of keywords reads as a sales pitch and invites clinical claims you do not need. Say that you support students with the pressures of school and life, and let the first conversation do the rest. Another group with fixed daily schedules is school staff, and our guide to a [teachers and school staff counseling page](/guides/teachers-and-school-staff-counseling-page-for-a-counseling-practice-without-clinical-claims) shows how to describe after school and evening appointments."
      ),
      h2("Handling the parent question honestly"),
      p(
        "Parents will ask whether they can call to check in. For an adult student, the answer is that the practice can talk with a parent about scheduling or billing only if the student has agreed in writing, and cannot confirm whether the student is a client at all without that permission. Say this once, in plain words, near the bottom of the page. Students on a parent's plan often wonder who sees insurance statements, so link to an [insurance statements and billing privacy page](/guides/insurance-statements-and-billing-privacy-page-for-a-counseling-practice-what-the-policyholder-may-see) that explains the options without promising secrecy."
      ),
      table(
        ["Parent asks", "A safe answer for the page"],
        ["Can I find out if my son or daughter has an appointment?", "Only with a signed release from the student. We cannot confirm or deny that someone is a client."],
        ["Can I pay for sessions?", "Yes. A parent can be the paying party and still have no access to what is discussed."],
        ["Will you tell me what was said?", "No. Session content is private unless the student chooses to share it or safety requires otherwise."],
        ["What if my student is under 18?", "Different rules apply for minors; call the office and we will explain consent."]
      ),
      p(
        "The wording about safety is worth getting right. Link to the 988 Lifeline for anyone in crisis, and state that the office is not an emergency service. Our guide on an [emergency and crisis resources section for a counseling practice](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) shows how to word that block without alarming a first-time visitor."
      ),
      h2("Make it findable without keyword stuffing"),
      p(
        "Students search with plain phrases, such as therapist near my college or counseling for students. Use those words once in the heading and once in the first paragraph, name the schools or neighborhoods you are close to only if they are true, and keep the Google Business Profile services list consistent with the page, as our guide on the [services list on Google Business Profile](/guides/google-business-profile-services-list-optimization) explains. Students returning in the fall look for openings quickly, so a short [back-to-school availability announcement](/guides/back-to-school-counseling-availability-announcement-for-a-counseling-practice) on the page and the Google profile saves them a phone call."
      ),
      h3("What not to put on the page"),
      ul(
        "Phrases such as you will feel better, fast results or guaranteed relief.",
        "Photos of students that imply a real client, unless they are licensed stock and clearly not patients.",
        "Testimonials from students, which carry privacy and consent problems of their own.",
        "Any description of a technique as a cure."
      ),
      h3("Before you publish"),
      p(
        "Ask a clinician who already sees students to read the page before it goes live and to flag any sentence that sounds like a promise. Then call the office as a student would and see whether the phone answer matches the page: the same fees, the same hours and the same privacy explanation. A mismatch between the page and the phone is the quickest way to lose a nervous first-time caller, so fix it before anyone else sees it."
      ),
    ],
    faqs: [
      {
        q: "Should a college counseling page name the specific colleges nearby?",
        a: "Only if the office is genuinely near them or sees many of their students. Naming a school you have no connection to looks like keyword stuffing and can mislead. A short line such as we see students from area colleges is honest and enough.",
      },
      {
        q: "Can a parent book an appointment for an adult student?",
        a: "A parent can help find the office and pay, but the adult student normally has to agree to the visit and complete their own paperwork. Say that clearly so parents do not call expecting to arrange everything alone.",
      },
      {
        q: "Do we need a separate page for graduate students?",
        a: "Usually not. One page that mentions undergraduate and graduate students covers both, and a single stronger page is easier to keep accurate than two thin ones. Split it only if you offer a distinct program with its own fees and hours.",
      },
      {
        q: "Is it fine to mention exam stress or homesickness?",
        a: "Naming everyday pressures such as exams, deadlines and moving away is fine because it describes life, not a diagnosis. Avoid linking those pressures to a promised result, and avoid naming conditions you are not ready to explain.",
      },
      {
        q: "What should the call to action say?",
        a: "Use a plain line such as call or send a message to ask about openings. Do not ask a student to describe symptoms in a web form, because a form is not a private channel and nothing health-related should be collected there.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, ACA_ETHICS],
    links: [
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Wording for a safety block on a counseling site." },
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page", description: "Consent and confidentiality for parents." },
      { href: "/guides/google-business-profile-services-list-optimization", label: "Services List", description: "Keep the profile consistent with the page." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1087
  {
    slug: "virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video",
    keyword: "virtual visits page for a primary care practice: what can and cannot be done by video",
    category: "How-to",
    title: "Virtual Visits Page for a Primary Care Practice: What Can and Cannot Be Done by Video",
    metaTitle: "Virtual Visits Page for a Primary Care Practice",
    metaDescription:
      "How to write a virtual visits page for a primary care practice that is clear about video limits and avoids clinical promises. Call (561) 291-2681.",
    answer:
      "A virtual visits page for a primary care practice should say who can book a video visit, how to join, what the practice will and will not handle by video, and when a patient must come in or call 911 instead. Keep the list of eligible visit types short and let the clinician decide the rest.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T09:20:00Z",
    dateModified: "2026-10-30",
    readMinutes: 6,
    sections: [
      h2("The page patients are trying to find"),
      p(
        "Patients rarely search for telemedicine. They search for a doctor visit by video, or ask whether the office does virtual appointments. The page that answers that question quickly, with a booking link and a plain list of what to expect, tends to beat a long essay about the benefits of remote care. For patients who cannot easily travel, explain the video option here and also publish [ride and transportation information](/guides/transportation-and-ride-assistance-information-page-for-a-primary-care-practice) for the visits that must happen in the office."
      ),
      p(
        "Open with the answer: yes or no, how to book, and the first thing a patient needs to join. Everything else, including policies and limits, sits underneath for the patient who wants it."
      ),
      h2("Say what video is good for, without clinical promises"),
      p(
        "The page can describe categories of visits without claiming outcomes. A practice might list follow-up conversations, reviewing results already in the portal, medication questions that do not need an exam, and paperwork discussions, but only if the clinicians actually do them by video. If you are unsure whether a visit type belongs on the list, leave it off and let the front desk answer by phone. If a video visit fails partway through, patients should already know the next step, which our guide to a [dropped video connection policy page](/guides/dropped-video-connection-and-technical-problems-policy-page-for-a-counseling-practice) lays out in plain logistics wording."
      ),
      table(
        ["Visit type", "How to describe it on the page"],
        ["Follow-up conversation", "Often possible by video when the clinician agrees it is suitable."],
        ["New patient first visit", "Policy varies; state your rule, such as an in-person first visit."],
        ["Visit that needs an exam, vitals or a test", "Scheduled in the office."],
        ["Urgent or emergency symptoms", "Not a video visit. Call 911 or go to the nearest emergency room."]
      ),
      p(
        "Do not tell patients which symptoms can be handled by video. That is a clinical judgment made one patient at a time. Let the clinician or scheduler decide, and say so on the page."
      ),
      h2("Technology, privacy and location"),
      ul(
        "Name the platform and say whether patients need an app or can join from a browser.",
        "Tell patients to join from a private place and to have their phone number ready in case the call drops.",
        "State the states where the clinician is licensed to see patients, because a patient must usually be physically in that state during the visit.",
        "Explain the backup plan, such as a phone call from the office if video fails.",
        "Link to the consent step, if you require one, instead of burying it in a form."
      ),
      p(
        "Our guide for counseling offices on a [telehealth consent and technology check page](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice) is written for therapy, but the same structure works for a primary care practice with its own wording."
      ),
      h3("Insurance and cost"),
      p(
        "Coverage for video visits differs by plan and changes over time, so the page should say to check with the insurer and offer to verify before the visit. For Medicare patients, link to the official Medicare telehealth page rather than quoting rules that may change. Once a visit is booked, patients also need step-by-step help joining, which our guide to a [telehealth visit instructions page for a primary care practice](/guides/telehealth-visit-instructions-page-for-a-primary-care-practice) provides."
      ),
      h2("Keep Google and the page in step"),
      p(
        "If the practice offers video visits, say so in the Google Business Profile description and add a booking link that goes to the virtual visits page, as shown in our guide to [adding an appointment or booking link to a Google Business Profile](/guides/how-to-add-an-appointment-or-booking-link-to-a-google-business-profile). If the service is paused, remove it everywhere on the same day so patients do not book something that does not exist."
      ),
      p(
        "Finally, treat the virtual visits page as a living page. When the platform, the eligible visit types or the licensure statement changes, update the page and the profile together, and change the dateModified so the update is honest."
      ),
      h3("Check it from the patient's side"),
      p(
        "Once a quarter, book a test video visit as a patient would, from a phone, using the link on the page. Note how many taps it takes, whether the instructions match what appears on screen, and whether the backup phone number works. Small gaps, such as an old platform name or a dead link, are common, and each one costs the front desk a phone call and costs the patient some trust. Patients who are deaf or hard of hearing may need captioning or an interpreter for a video visit, and the [deaf and hard of hearing patient access page](/guides/deaf-and-hard-of-hearing-patient-access-page-for-a-primary-care-practice-without-clinical-advice) is where the practice should say what it offers."
      ),
    ],
    faqs: [
      {
        q: "Does every primary care practice need a virtual visits page?",
        a: "Only if the practice offers video visits. A page for a service you do not provide misleads patients and wastes their time. If you offer phone visits only, say that instead and describe how they work.",
      },
      {
        q: "Can the page list conditions treated by video?",
        a: "It is safer not to. Listing conditions turns a logistics page into a clinical claim. Describe visit types in general terms and say the clinician decides whether a video visit is appropriate for each patient.",
      },
      {
        q: "What should the page say about emergencies?",
        a: "Say plainly that video visits are not for emergencies and that anyone with an emergency should call 911 or go to the nearest emergency room. Put that sentence near the top, not in the footer.",
      },
      {
        q: "Do we have to say where the clinician is licensed?",
        a: "It helps patients and reduces mismatched bookings. A patient typically needs to be in a state where the clinician is licensed during the visit, so a single line listing the states is useful and honest.",
      },
      {
        q: "How do we track bookings from this page?",
        a: "Use a booking link with UTM tags and the same conversion tracking as other booking links. Our guide on tracking third-party booking widgets explains how to count the click without capturing any health information.",
      },
    ],
    citations: [MEDICARE_TELE, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent Page", description: "Consent and technology checks for video visits." },
      { href: "/guides/telehealth-marketing-playbook", label: "Telehealth Marketing Playbook", description: "Positioning video visits." },
      { href: "/guides/conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website", label: "Booking Widget Tracking", description: "Count booking clicks safely." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1088
  {
    slug: "vacation-and-out-of-office-coverage-notices-for-a-therapy-practice",
    keyword: "vacation and out-of-office coverage notices for a therapy practice",
    category: "Checklist",
    title: "Vacation and Out-of-Office Coverage Notices for a Therapy Practice",
    metaTitle: "Vacation and Out-of-Office Notices for a Therapy Practice",
    metaDescription:
      "A checklist for telling clients about vacations and absences, with coverage and crisis information. Call (561) 291-2681.",
    answer:
      "A therapy practice should tell clients about a planned absence in advance, on the website, the voicemail and the Google profile, and every notice should name the return date, who covers urgent needs, and the 988 Lifeline. Do not post clients' names, reasons for the absence or any clinical detail.",
    author: "Liam Costello",
    publishDate: "2026-10-19T09:40:00Z",
    dateModified: "2026-10-30",
    readMinutes: 6,
    sections: [
      h2("Why an absence notice is a continuity issue, not a marketing task"),
      p(
        "A client who calls on a Tuesday and hears nothing for ten days may assume the office has closed. A new client who finds a profile that says open, but cannot reach anyone, may leave a review that says the practice never answers. A clear notice prevents both and protects the clients who most need to know where to turn."
      ),
      p(
        "Professional codes of ethics for counselors ask practitioners to plan for interruptions of service, so the notice is also part of good practice. The details of the plan belong to the clinician and their licensing board, and the website only needs to tell the truth about the dates and the options. Clients should also know which days someone answers the phone, and our guide to [appointment only hours wording on the website and Google profile](/guides/by-appointment-only-hours-wording-for-a-counseling-practice-website-and-google-profile) separates office hours from session times."
      ),
      h2("What every notice should include"),
      ol(
        "The dates the office is closed or the clinician is away, with the first day sessions resume.",
        "Whether the office phone is monitored, and how long a return call usually takes.",
        "Who covers urgent matters, if anyone, or a plain statement that no coverage is offered.",
        "The 988 Suicide & Crisis Lifeline and 911 for emergencies, written as numbers a person can tap.",
        "Where to reschedule, such as a number or a booking link."
      ),
      p(
        "Never say that the practice is a crisis service if it is not. Write that the office does not provide emergency care, and give the real options."
      ),
      h2("Put the notice in all four places"),
      table(
        ["Place", "What to change"],
        ["Website banner and contact page", "A short banner with dates and a link to a longer notice."],
        ["Voicemail greeting", "Dates, return call timing, 988 and 911. Record it a few days early."],
        ["Google Business Profile", "Special hours for each closed day, as our guide on holiday and closure notices explains."],
        ["Email signature and reminders", "One line with the dates for the weeks before and after."]
      ),
      p(
        "The same pattern applies to office-wide events, which our guide to [holiday and closure notices for a medical practice](/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting) covers in more detail. A therapy practice should pay extra attention to the voicemail, because that is where a client in distress is most likely to land."
      ),
      h3("What to leave out"),
      ul(
        "The reason for the absence, unless the clinician chooses to share it.",
        "Any mention of specific clients or groups.",
        "Promises about being reachable that the clinician cannot keep.",
        "Emoji-heavy or jokey wording that reads badly to someone having a hard week."
      ),
      h2("Reduce the number of calls you receive"),
      p(
        "A notice posted two weeks ahead lets clients move appointments early and leaves the office with fewer missed sessions. Mention the absence at the last session before it, in person or in the reminder text, and keep the message short and free of health detail. Our wording guide for [appointment reminders without health details](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) shows the principle, and it applies equally to therapy offices."
      ),
      p(
        "When the clinician returns, remove the banner, reset the voicemail and clear the special hours. An out-of-date notice that still says closed is as damaging as no notice at all. The same planning applies to an office wide break, and our guide to a [holiday season scheduling announcement for a counseling practice](/guides/holiday-season-scheduling-and-availability-announcement-for-a-counseling-practice) explains how to word closed days and crisis resources for clients."
      ),
      h3("Make it a habit, not a scramble"),
      p(
        "Keep a one-page template for absence notices with blanks for dates and coverage, plus a reminder on the calendar three weeks before any planned leave. When the notice is a template, the practice posts it on time even in a busy month, and every notice reads the same way. Store the template where the front desk can find it, and have the clinician approve the wording once a year."
      ),
    ],
    faqs: [
      {
        q: "How far in advance should we post an absence notice?",
        a: "Two weeks is a practical minimum for a planned absence, and longer for an extended leave. Earlier notice gives clients time to reschedule and lowers the chance of missed sessions or alarmed calls.",
      },
      {
        q: "Do we have to arrange coverage?",
        a: "Practices handle this differently, and the rules depend on the clinician's license and ethics code. Some arrange a covering colleague, others do not. Whichever applies, the notice should state it plainly and give the 988 Lifeline for emergencies.",
      },
      {
        q: "Should the Google profile show special hours for a vacation?",
        a: "Yes. Set special hours or mark the days closed so the profile stops saying open when nobody is there. Remember to remove or edit them when the clinician returns so the hours stay accurate.",
      },
      {
        q: "Can we mention why the clinician is away?",
        a: "The reason is the clinician's choice and not required. Giving no reason is the safest default and keeps the notice short. Dates and what clients should do are the only things a client needs to read.",
      },
      {
        q: "What should the voicemail say?",
        a: "State the practice name, the dates the office is away, when messages will be returned, and that anyone in crisis should call 988 or 911. Keep it under thirty seconds and avoid naming any client or clinical subject.",
      },
    ],
    citations: [ACA_ETHICS, LIFELINE, GBP_HOURS],
    links: [
      { href: "/guides/holiday-and-closure-notices-for-a-medical-practice-website-google-profile-and-phone-greeting", label: "Holiday and Closure Notices", description: "Update every place patients look." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls and Voicemail", description: "A voicemail that does not lose new patients." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Wording for a safety block." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1089
  {
    slug: "provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website",
    keyword: "provider headshots and team photo guidelines for a medical practice website",
    category: "Checklist",
    title: "Provider Headshots and Team Photo Guidelines for a Medical Practice Website",
    metaTitle: "Provider Headshots and Team Photos for a Practice Website",
    metaDescription:
      "A checklist for provider headshots and team photos on a medical practice website: size, alt text, consent and privacy. Call (561) 291-2681.",
    answer:
      "Provider headshots and team photos should be recent, consistent in style, taken with each person's agreement, compressed for fast loading and given plain alt text with the person's name and role. Check the background for patient information, and replace photos when a person leaves or looks noticeably different.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T10:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Why a headshot matters more than most pages admit"),
      p(
        "A patient choosing a new doctor or therapist is choosing a person, and a clear photo is often the first thing they look at on a bio page. A missing photo, a grey placeholder or a photo that is ten years old makes the practice look careless, while a warm, current headshot sets expectations for the visit."
      ),
      p(
        "Photos also affect the site's performance. Large uncompressed files slow a page, and slow pages lose visitors on a phone. A tidy photo workflow fixes both problems at once."
      ),
      h2("Shooting the photos"),
      ul(
        "Use the same background, lighting and framing for every provider so the team page looks like one practice.",
        "Take them in a quiet room, not in a patient area, so no chart, screen, sign-in sheet or other person can appear behind anyone.",
        "Ask each person for agreement and keep it in writing, including permission to use the photo on the website, Google profile and directories.",
        "Shoot a square or four-by-five crop plus a wider version, so one session covers the bio page, the team grid and the profile.",
        "Keep clothing and credentials honest. A white coat is fine for a clinician who wears one, and a title in the caption should match the license exactly."
      ),
      p(
        "Group photos on the team page are friendly but go stale quickly. Treat them as a seasonal asset and update them when the staff changes."
      ),
      h2("Preparing the files for the web"),
      table(
        ["Step", "Practical guidance"],
        ["File name", "Use a plain name such as dr-first-last-primary-care.jpg, not IMG_2231.jpg."],
        ["Size", "Export no wider than the largest size it appears on the page; a bio headshot rarely needs more than about 1,000 pixels."],
        ["Format and weight", "Use modern compressed formats and aim for the smallest file that still looks sharp."],
        ["Alt text", "Write the person's name and role, such as Dr. First Last, family medicine physician. Skip phrases like picture of."],
        ["Dimensions in code", "Set width and height so the page does not jump while loading."]
      ),
      p(
        "Our guide on [image SEO and alt text for a medical practice website](/guides/image-seo-and-alt-text-for-a-medical-practice-website) walks through the wording, and the W3C images tutorial explains why a decorative image and an informative one need different treatment."
      ),
      h3("Keep the profile, the website and the bio in step"),
      p(
        "Use the same photo on the practice's bio page, its Google Business Profile and any provider directories. When a clinician looks different from the photo, patients feel misled before the visit starts. Our guide on a [therapist bio page without clinical claims](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) shows how the photo and the text should work together. Photos work best when each one sits on a consistent card, and our guide to [choosing a provider on a multi-provider page](/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page) shows which facts belong beside the picture."
      ),
      h2("When someone joins, leaves or changes"),
      ol(
        "Add the new photo to the bio page, the team grid and the profile on the same day the person starts.",
        "Remove the departing provider's photo and bio from all pages, and redirect their bio URL to the team page, as our guide on what to update when a provider joins or leaves explains.",
        "Replace photos every two to three years, or sooner if the person's appearance has changed.",
        "Review the alt text each time, so it still matches the person's current title.",
        "Store the original files and the signed agreements together, so any future question has an answer."
      ),
      p(
        "One last point on accessibility: a headshot should never carry information that is not also written in text, because screen reader users and search engines read the words, not the picture."
      ),
      h3("A simple standard to write down"),
      p(
        "Put the rules on one page the whole team can see: the background, the crop sizes, the maximum file size, the naming pattern and who approves a new photo. When a new provider starts, the practice manager follows the page instead of improvising, and the team page stays consistent for years. It also makes redoing the photos in two or three years much faster, because the standard is already written."
      ),
    ],
    faqs: [
      {
        q: "Do we need a professional photographer?",
        a: "Not always, but consistency matters more than gear. A trained photographer gives the best result, and a good phone camera in even light against a plain wall can work for a small team if every person is shot the same way in one session.",
      },
      {
        q: "Can we use a staff photo from social media?",
        a: "Only with that person's agreement for this specific use, and only if the image quality and background suit the website. Casual photos with other people, patients or screens in the frame should not be used.",
      },
      {
        q: "What should the alt text say?",
        a: "Use the person's name and role in a short phrase, such as Dr. First Last, family medicine physician. Keep it under about one hundred characters and do not stuff in keywords like the city or the service.",
      },
      {
        q: "How big should the image file be?",
        a: "Size it to the largest display width on the page and compress it until it still looks sharp. A few hundred kilobytes per photo is a reasonable target, though the exact figure depends on the layout.",
      },
      {
        q: "What if a provider does not want a photo posted?",
        a: "Respect that. Use a neutral, consistent placeholder such as the practice logo and say nothing negative about it. A person's choice about their image should never be a barrier to listing their credentials.",
      },
    ],
    citations: [GOOGLE_IMAGES, W3C_IMAGES, ADA_WEB],
    links: [
      { href: "/guides/image-seo-and-alt-text-for-a-medical-practice-website", label: "Image SEO and Alt Text", description: "Name, size and describe images." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "Write a bio page that earns trust." },
      { href: "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice", label: "Provider Joins or Leaves", description: "Update every page and profile." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1090
  {
    slug: "appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details",
    keyword: "appointment reminder text and email wording for a primary care practice without health details",
    category: "Checklist",
    title: "Appointment Reminder Text and Email Wording for a Primary Care Practice Without Health Details",
    metaTitle: "Appointment Reminder Wording for a Primary Care Practice",
    metaDescription:
      "Sample appointment reminder text and email wording that leaves out health details and reduces no-shows. Call (561) 291-2681.",
    answer:
      "An appointment reminder should name the practice, the date and time, the location or video link and how to confirm or reschedule, and should leave out the reason for the visit, the clinician's specialty detail and anything about a diagnosis. Send reminders to the contact method the patient chose, with a clear way to opt out.",
    author: "Liam Costello",
    publishDate: "2026-10-19T10:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("What a reminder is for"),
      p(
        "A reminder has one job: get the patient to the visit, or free the slot early if they cannot come. Everything else is a risk. A text can be read by someone else holding the phone, an email can land in a shared inbox, and a message that names a test or a condition has turned a scheduling note into a disclosure."
      ),
      p(
        "Federal privacy rules permit appointment reminders, but they also expect reasonable care about what the message reveals. The easiest policy for a front desk is also the safest: say when and where, never why. If you also want to win back patients who have not visited in a while, our guide to a [reactivation letter that leaves out health details](/guides/patient-reactivation-letter-for-inactive-patients-of-a-primary-care-practice-without-health-details) covers the wording and the rules for building the list."
      ),
      h2("What belongs in the message"),
      ul(
        "The practice name, exactly as patients know it.",
        "The date, the day of the week and the time.",
        "The office address or the video visit link, with a one-line parking or arrival note if useful.",
        "A phone number to call, and a simple reply word to confirm or cancel.",
        "A short line about what to bring that is the same for every patient, such as insurance card and photo ID."
      ),
      h3("Sample text message"),
      p(
        "Reminder from Palm Family Care: you have an appointment on Tuesday, Oct 21 at 2:30 PM at 100 Main St. Reply C to confirm or call (555) 555-0100 to change it. Reply STOP to opt out."
      ),
      p(
        "That message names no clinician specialty, no reason, no test and no condition, and it works the same for every patient. Replace the example name, address and phone with the practice's own."
      ),
      h2("What to leave out, and why"),
      table(
        ["Leave out", "Reason"],
        ["The reason for the visit, a test, a prep instruction or a diagnosis", "It turns a reminder into a disclosure if anyone else sees the screen."],
        ["The clinician's specialty when it points to a condition", "A specialty can reveal the reason for the visit."],
        ["Any balance owed or collections language", "Billing questions belong in a private call or the portal."],
        ["Links that open a chart without a login", "A link that works for anyone is an access problem."],
        ["Marketing offers in the same message", "A reminder mixed with promotion can change how the message is treated."]
      ),
      p(
        "If preparation instructions are needed, such as fasting for labs, send a short message that says prepare for your visit and points to the portal or asks the patient to call. The details stay behind a login."
      ),
      h2("Consent, timing and opt-out"),
      ol(
        "Ask each new patient which contact method they prefer and record the answer, as our guide on a new patient welcome message describes.",
        "Send the first reminder two to three days ahead and a second one the day before; more than that feels like pressure.",
        "Include an easy opt-out for texts and honor it immediately.",
        "Keep texts and emails separate from marketing, and follow the rules in our guide to [text message marketing compliance](/guides/text-message-marketing-compliance-for-a-medical-practice).",
        "Review your templates twice a year and have one person approve every change."
      ),
      p(
        "A reminder system can also feed your measurement. If patients confirm or cancel by reply, the front desk gets a cleaner schedule, and the practice can see how many visits are saved by early cancellations. Do not store the text of replies longer than needed."
      ),
      p(
        "Finally, write reminders in plain, friendly language at a low reading level. Our guide on [plain language for patient-facing web content](/guides/plain-language-and-reading-level-for-patient-facing-web-content) gives a simple test, and it works as well for a forty-word text as for a web page."
      ),
      h3("Test the message before it goes out"),
      p(
        "Send each template to two staff phones and one email account first, and read it on a locked screen the way a stranger might. Check what shows in the preview, what the sender name is and whether the opt-out works. Many practices find that a harmless-looking message reveals more in the lock-screen preview than anyone intended, and a two-minute test catches it. Counseling practices need even more discretion, and our guide to [appointment reminder wording for a counseling practice](/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy) shows the changes to make."
      ),
    ],
    faqs: [
      {
        q: "Can a reminder text include the doctor's name?",
        a: "Often yes, because many patients have a single primary care doctor and the name reveals little. If the practice has clinicians whose specialty points to a condition, leave the name off. When in doubt, say the practice name only.",
      },
      {
        q: "Is it fine to text appointment reminders at all?",
        a: "Privacy rules generally allow appointment reminders, but practices should confirm that the patient gave a phone number for that use and honor opt-outs. Our wording guidance and your own compliance advisor set the final rules for your office.",
      },
      {
        q: "How many reminders should we send?",
        a: "Two is usually enough: a few days before and the day before. A third on the morning of the visit can feel pushy and generates unnecessary opt-outs. Offer an easy reschedule option in each one.",
      },
      {
        q: "Should reminders include a link?",
        a: "A link to a generic page, such as directions or the portal login, is fine. Do not send a link that opens a form or chart without asking the patient to log in, because anyone with the message could use it.",
      },
      {
        q: "What about reminders for therapy sessions?",
        a: "The same principle applies, and the stakes are higher. Use the practice name and time only, never the clinician's specialty or session type, and ask clients which method they want before sending anything.",
      },
    ],
    citations: [HHS_MARKETING, HHS_EMAIL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "Set contact preferences from day one." },
      { href: "/guides/text-message-marketing-compliance-for-a-medical-practice", label: "Text Message Compliance", description: "Rules for texting patients." },
      { href: "/guides/late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice", label: "Missed Appointment Policy", description: "Reduce no-shows fairly." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1091
  {
    slug: "pharmacy-and-lab-partner-information-page-for-a-primary-care-practice",
    keyword: "pharmacy and lab partner information page for a primary care practice",
    category: "How-to",
    title: "Pharmacy and Lab Partner Information Page for a Primary Care Practice",
    metaTitle: "Pharmacy and Lab Partner Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can publish its pharmacy and lab information clearly without endorsing or collecting health data. Call (561) 291-2681.",
    answer:
      "A pharmacy and lab partner page tells patients where the office sends prescriptions and lab orders, how to pick a different location, and how to get results, without recommending a product or collecting health information. List locations factually, state that patients may choose their own, and keep the page free of ads and conflicts of interest.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T10:40:00Z",
    dateModified: "2026-10-22",
    readMinutes: 6,
    sections: [
      h2("Why patients look for this page"),
      p(
        "After a visit, patients have two practical questions: where is my prescription going, and where do I go for blood work. Offices answer both many times a day by phone. A short, accurate page removes most of those calls and gives a new patient the confidence that the practice works with places they can reach."
      ),
      p(
        "The page also helps search. People type pharmacy near a doctor's office or lab near me, and a clear page that names the practice and its usual partners gives search engines and AI assistants a factual answer to point to. When a patient needs a vaccine your office does not stock, a [vaccine availability page for a primary care practice](/guides/immunization-and-vaccine-availability-page-for-a-primary-care-practice-without-clinical-claims) can point them to the pharmacy partners you list here."
      ),
      h2("What to include"),
      table(
        ["Section", "What goes in it"],
        ["Pharmacies the office commonly uses", "Names, street addresses, phone numbers and hours as the pharmacy publishes them."],
        ["Lab locations", "The lab company, the nearest draw sites, whether appointments are needed, and a link to the lab's own scheduling page."],
        ["How to change your pharmacy", "A plain instruction, such as call the office or update it in the portal."],
        ["Mail-order and 90-day supplies", "A general line that the office can send prescriptions to a mail-order pharmacy when a plan requires it."],
        ["Getting results", "Where results appear, such as the portal, and how long the office usually takes to respond."]
      ),
      p(
        "Link to each partner's own website rather than copying their details beyond the basics, so that hours and addresses are always current. Check each link every quarter."
      ),
      h2("Keep it honest and neutral"),
      p(
        "Patients are free to choose their pharmacy and lab, and the page should say so in the first paragraph. Do not imply that a particular pharmacy is better, cheaper or required. If the practice has a financial relationship with any partner, such as shared ownership or a referral fee, get advice on how it must be disclosed before naming them at all."
      ),
      ul(
        "Say that patients may use any pharmacy or lab their plan allows.",
        "Avoid words like best, preferred or recommended unless a compliance advisor has cleared them.",
        "Never list medications, conditions or test names as a service.",
        "Do not accept sponsored placements on the page.",
        "Add a line telling patients that insurance rules may require a specific lab or pharmacy."
      ),
      h3("What the page must not collect"),
      p(
        "Do not build a form on this page that asks for a medication name, a test or a condition. Anything of that kind belongs in the portal or on a phone call with the office. A page that asks for health details on an ordinary web form creates a privacy problem and a tracking problem at the same time. Our guide on [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website) explains how to keep analytics away from sensitive pages."
      ),
      h2("Make it useful to the front desk"),
      p(
        "Ask the front desk which five questions they answer most about prescriptions and lab work, and answer exactly those on the page. Typical examples are what to do when a pharmacy says it has no prescription, how long a lab takes to return results and what to bring to a draw. Keep each answer to a couple of sentences and avoid advice about any specific medicine."
      ),
      p(
        "Connect the page to the rest of the site. A link from the patient portal page, from the new patient information page and from the prescription refill page lets patients find it at the moment they need it. Our guide to a [prescription refill request page without clinical advice](/guides/prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice) covers the related wording, and the [lab results and portal message expectations page](/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice) covers timing. Patients without a car often plan the pharmacy or lab stop around a bus route, so pair this with a [transportation and ride assistance page for a primary care practice](/guides/transportation-and-ride-assistance-information-page-for-a-primary-care-practice) that lists routes and drop-off spots. Offices you work with every week, including labs and pharmacies, deserve the same follow-up routine described in our guide to a [referring doctor thank-you and feedback loop](/guides/referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice)."
      ),
      h3("Test the page the way a patient would"),
      p(
        "Ask a colleague who does not work at the office to find their pharmacy and a lab on the page and to say how to change a pharmacy. If they hesitate, rewrite that part. Keep the page short, put the most common action first and keep the language free of jargon, because most patients reading it have just left a visit and want an answer in seconds."
      ),
    ],
    faqs: [
      {
        q: "Can we list the pharmacies we work with most?",
        a: "Yes, as a factual list with a clear statement that patients may choose any pharmacy their plan allows. Avoid ranking or recommending them, and disclose any financial relationship with a partner after getting advice from a compliance professional.",
      },
      {
        q: "Should the page show lab test names?",
        a: "No. Listing tests turns a logistics page into a clinical page and can look like a recommendation. Describe the lab and where to go, and leave the choice of tests to the clinician and the patient.",
      },
      {
        q: "How often should we update the page?",
        a: "Check it each quarter and whenever a partner closes, moves or changes hours. An outdated address sends a patient to the wrong place, which costs them time and costs the practice a phone call.",
      },
      {
        q: "Can patients submit a prescription request here?",
        a: "Use a secure portal or a phone call for that. A general web form is not a private channel for medication information, so the page should point to the portal login or the office number instead.",
      },
      {
        q: "Do we need to mention insurance requirements?",
        a: "Yes, one sentence is enough. Many plans require a specific lab or pharmacy network, and patients appreciate a reminder to check theirs. Offer to help the patient find a covered location by calling the office.",
      },
    ],
    citations: [HHS_PRIVACY, GOOGLE_HELPFUL, GBP_GUIDELINES],
    links: [
      { href: "/guides/prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice", label: "Refill Request Page", description: "Wording for refills without clinical advice." },
      { href: "/guides/lab-results-and-portal-message-expectations-page-for-a-primary-care-practice", label: "Lab Results Expectations", description: "Set result timing honestly." },
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Keep analytics off sensitive pages." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1092
  {
    slug: "community-resources-and-support-groups-referral-page-for-a-counseling-practice",
    keyword: "community resources and support groups referral page for a counseling practice",
    category: "How-to",
    title: "Community Resources and Support Groups Referral Page for a Counseling Practice",
    metaTitle: "Community Resources Referral Page for a Counseling Practice",
    metaDescription:
      "How a counseling practice can publish a trustworthy community resources and support groups page without endorsing or promising. Call (561) 291-2681.",
    answer:
      "A community resources page for a counseling practice lists trusted outside services such as crisis lines, support groups and social services, states plainly that the practice does not run or endorse them, and keeps the list short and current. Put the crisis numbers first and review every link on a schedule.",
    author: "Liam Costello",
    publishDate: "2026-10-19T11:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 6,
    sections: [
      h2("Why this page earns its place"),
      p(
        "Not everyone who finds a counseling practice is ready for therapy, can afford it or needs it first. A short list of reliable outside resources helps those visitors, and it tells everyone else that the practice cares about the whole person rather than only the intake form. It also gives the site a useful page that other local organizations may choose to link to. A resources page also gives the practice something useful to share during Mental Health Awareness Month, as our [content plan for awareness month and World Mental Health Day](/guides/mental-health-awareness-month-and-world-mental-health-day-content-for-a-counseling-practice) suggests."
      ),
      p(
        "The page is a service to the reader, not an advertisement. Treat it like a reference sheet that a careful colleague would hand to a client."
      ),
      h2("Order the page by urgency"),
      ol(
        "Immediate help: the 988 Suicide & Crisis Lifeline by call or text, and 911 for emergencies.",
        "National helplines: SAMHSA's National Helpline for treatment referral and information.",
        "Peer support: NAMI chapters and local family and peer groups.",
        "Basic needs: 211 for food, housing, utilities and other local services.",
        "Specific support: groups for grief, caregivers or recovery that operate in the area."
      ),
      p(
        "Make the crisis numbers visible without scrolling, and write them as tap-to-call links. Do not tuck them into a footer or a long paragraph."
      ),
      h2("How to choose what to list"),
      table(
        ["Check", "What to confirm"],
        ["Who runs it", "A recognized national or local nonprofit, a public agency or a licensed provider."],
        ["Is it free or paid", "Say so. Never send a client to a paid program without telling them."],
        ["Is it current", "Open the website and call once. Remove anything that is out of date."],
        ["Does it make promises", "Skip groups that promise cures or results."],
        ["Conflict of interest", "Do not list a program that pays the practice or a clinician."]
      ),
      p(
        "Keep the list short enough to maintain. Ten well-checked resources beat fifty that nobody reviews, and a broken link on a crisis page does real harm."
      ),
      h3("What the page should say about itself"),
      p(
        "Add two sentences near the top: the practice provides this list as information, does not operate or endorse these services, and cannot guarantee their availability. Add that a client should tell their clinician if they are using an outside resource, if they wish to. This avoids implying a referral relationship that does not exist. Peer support lines for first responders and healthcare workers are a good example of a resource to list, as described in our guide to a [first responders and healthcare workers counseling page](/guides/first-responders-and-healthcare-workers-counseling-page-for-a-counseling-practice-without-clinical-claims)."
      ),
      h2("Link it into the rest of the site"),
      p(
        "Connect the page to the places where people look for help. Link it from the contact page, from the page that describes your first session, and from your fees page for people who cannot afford sessions right now. Our guide to a [fees page with sliding scale, out-of-network and superbill options](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) shows how to be honest about cost while pointing to alternatives. Many people who reach this page are looking after a relative, and a [caregiver support counseling page](/guides/caregiver-support-counseling-page-for-a-counseling-practice-without-clinical-claims) is the right place to send them for sessions of their own. A primary care office that sends patients your way may want a clear [referral route between primary care and counseling](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) to point to, so keep your intake details on one page."
      ),
      p(
        "The safety block should match the one on every other page. Our guide on an [emergency and crisis resources section for a counseling practice](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) provides the wording, and the community page extends it with ongoing support rather than replacing it."
      ),
      ul(
        "Review every link at the start of each quarter and note the date on the page.",
        "Add a way for visitors to tell the office about a broken link, such as a phone number, not a long form.",
        "Do not collect names or messages on this page.",
        "Mark any outbound link to a paid service as such."
      ),
      h3("Treat the list like a living document"),
      p(
        "Assign one person to own the list, keep a simple log of when each link and number was last checked and what changed, and ask clinicians once a year whether they would add or remove anything. A clinician may know that a group has closed or that a new one is worth listing. Keeping that knowledge flowing into the page is what makes it worth trusting."
      ),
    ],
    faqs: [
      {
        q: "Is it okay to refer to outside groups on a counseling website?",
        a: "Yes, as information. State that the practice does not run or endorse them and keep the list factual. Avoid wording that suggests a clinical referral unless the clinician actually makes one during care.",
      },
      {
        q: "How many resources should we list?",
        a: "A short, well-checked list is best, often eight to twelve. More than that becomes hard to maintain and hard to read, and a stale list is worse than a short one because someone in a hard moment may rely on it.",
      },
      {
        q: "Do we need the 988 Lifeline on this page?",
        a: "Yes. Place it first, with 911 for emergencies, and make the numbers tap-to-call on phones. It should appear on every important page, so the community page repeats it rather than replacing the crisis block.",
      },
      {
        q: "Can we list a support group that one of our clinicians leads?",
        a: "Only if it is described as the practice's own program, with its fees and enrollment rules, and listed separately from independent outside resources. Mixing the two blurs who is responsible for what.",
      },
      {
        q: "How do we keep the page from going stale?",
        a: "Put a quarterly review on the calendar, test each link and phone number, and show the last-checked date on the page. Remove anything that no longer works rather than leaving a broken link.",
      },
    ],
    citations: [LIFELINE, SAMHSA, NAMI, UNITED_WAY_211],
    links: [
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Wording for a safety block." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Be honest about cost and alternatives." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "Set expectations before the first visit." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1093
  {
    slug: "when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice",
    keyword: "when to call the office versus 911 or urgent care page for a primary care practice",
    category: "How-to",
    title: "When to Call the Office Versus 911 or Urgent Care: A Page for a Primary Care Practice",
    metaTitle: "Office vs 911 vs Urgent Care Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain when to call the office, urgent care or 911 without giving medical advice. Call (561) 291-2681.",
    answer:
      "A page on when to call the office, go to urgent care or call 911 should give patients a clear, non-diagnostic rule: emergencies go to 911, anything else that cannot wait goes to the office or an urgent care, and routine needs go to the schedule. It must not list symptoms as medical advice or replace a clinician's judgment.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T11:20:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("The line a patient is trying to draw"),
      p(
        "Patients rarely know where to go when something feels wrong outside the schedule. They call the office at five-thirty, they search for urgent care while sitting in a waiting room, or they wait too long because they did not want to bother anyone. A page that explains the three doors in plain language saves time and phone calls, and it is one of the most useful pages a practice can publish."
      ),
      p(
        "It is also one of the riskiest, because it sits close to medical advice. The safest approach is to describe who to contact and when, not what a symptom means."
      ),
      h2("Three doors, three plain rules"),
      table(
        ["Door", "What the page can say"],
        ["911 or the nearest emergency room", "Use for any situation the patient believes is an emergency. If in doubt, call 911."],
        ["Urgent care", "For needs that cannot wait for an appointment but are not emergencies; list the nearby centers and hours."],
        ["The office", "For routine visits, questions about care, refills and paperwork during office hours."]
      ),
      p(
        "Begin the page with the first row, in large type, with the number as a tap-to-call link. A patient who is frightened should never have to read a paragraph to find it."
      ),
      h2("What the page must not do"),
      ul(
        "List symptoms and say which door each belongs to, because that is triage, and triage belongs to clinicians.",
        "Promise that someone will answer after hours if the office does not staff a line.",
        "Suggest that a patient wait to see if something improves.",
        "Use a form or chat box for urgent matters.",
        "Make claims about how quickly the office can see sick patients."
      ),
      p(
        "If the practice offers same-day sick visits, describe the process for requesting one, such as call at opening time, and avoid promising a slot. Our guide on [getting found for same-day and walk-in visits as a primary care practice](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) covers how to describe availability honestly. A companion page on [sick visit and infection control expectations](/guides/sick-visit-and-infection-control-expectations-page-for-a-primary-care-practice-without-clinical-advice) explains the practical steps once a patient has decided to come in. A home visit is scheduled care and never a response to an emergency, a point made clearly in our guide to a [home visits and house calls page for a primary care practice](/guides/home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims)."
      ),
      h3("Mental health crises"),
      p(
        "Add a short block for emotional crises: call or text 988 for the Suicide & Crisis Lifeline, or call 911 if someone is in immediate danger. Say this plainly and without clinical language."
      ),
      h2("After-hours information"),
      p(
        "State the office hours and what a caller reaches after them, whether an answering service, a recorded message or nothing. Our guide on [handling after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) explains how to record a message that points callers to the right place without losing new patients."
      ),
      ol(
        "Write the three rules in one short paragraph and place them above the fold.",
        "List two or three urgent care centers near the office, with links to their own pages, and note that patients may use any facility their plan allows.",
        "Repeat the emergency instruction in the footer of every page and on the voicemail.",
        "Have a clinician review the page and sign off in writing before it goes live.",
        "Review the page each year and whenever the office hours or after-hours arrangement change."
      ),
      p(
        "Finally, keep the Google Business Profile in step. If the profile promises extended hours the office does not keep, patients will arrive at a locked door. Update the profile whenever the page changes."
      ),
      h3("Have a clinician read it aloud"),
      p(
        "Before the page goes live, have a physician read it aloud to the front desk and ask what a worried caller would still be unsure about. Add or reword until the answer is nothing. Then print the three rules on a card for the front desk to use on the phone, so the website, the voicemail and the people all say the same thing."
      ),
    ],
    faqs: [
      {
        q: "Can the page list symptoms that mean call 911?",
        a: "It is safer not to. Symptom lists amount to medical advice and can be incomplete. Use the general rule that anyone who believes they are in an emergency should call 911, and let clinicians and public health sources handle the specifics.",
      },
      {
        q: "Should we name specific urgent care centers?",
        a: "You can list nearby centers factually, with their own links, as long as you state that patients may use any facility and that you receive nothing for listing them. Avoid ranking them or calling any of them preferred.",
      },
      {
        q: "What if the office has no after-hours line?",
        a: "Say so honestly: the office is closed outside posted hours and a caller reaches a recorded message. Then point to 911 for emergencies and the urgent care list for needs that cannot wait. Honest limits beat vague promises.",
      },
      {
        q: "Does this page need clinician approval?",
        a: "Yes. A physician or the practice's medical director should read and approve the wording, because it describes how patients seek care. Keep a dated record of the approval with the page's source file.",
      },
      {
        q: "Where should the link to this page go?",
        a: "Place it in the footer, the contact page, the new patient page and the patient portal login, so it is reachable from anywhere a worried patient might be looking. The emergency sentence itself should appear on every page.",
      },
    ],
    citations: [LIFELINE, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Same-Day and Walk-In Visits", description: "Describe availability honestly." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls", description: "A voicemail that points to the right place." },
      { href: "/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises", label: "Wait Time Messaging", description: "Talk about availability without promises." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1094
  {
    slug: "session-length-and-frequency-explained-on-a-therapy-practice-website-without-promising-results",
    keyword: "session length and frequency explained on a therapy practice website without promising results",
    category: "How-to",
    title: "Session Length and Frequency Explained on a Therapy Practice Website Without Promising Results",
    metaTitle: "Therapy Session Length and Frequency on Your Website",
    metaDescription:
      "How a therapy practice can explain session length and how often clients meet, without promising results. Call (561) 291-2681.",
    answer:
      "A therapy practice website should say how long a typical session lasts, how often clients usually meet at the start, who decides the schedule, and what the practice does not promise. State the facts as the practice's own policy and leave outcomes, timelines for improvement and duration of treatment to the conversation with the clinician.",
    author: "Liam Costello",
    publishDate: "2026-10-19T11:40:00Z",
    dateModified: "2026-10-26",
    readMinutes: 6,
    sections: [
      h2("The question every new client is too polite to ask"),
      p(
        "Before they book, many people want to know how long a session lasts, how often they would come and how long this will go on. The last one is the dangerous one. A page that answers it with a number of weeks or a promised result steps from information into a clinical claim."
      ),
      p(
        "The solution is to split the question. Session length and starting frequency are scheduling facts the practice controls. How long someone will need therapy is a clinical judgment that depends on the person, and it is decided together with the clinician after the first meetings."
      ),
      h2("Facts the page can state"),
      table(
        ["Topic", "How to word it"],
        ["Session length", "State the standard length the practice uses, such as fifty minutes, and the length of the first intake session if different."],
        ["Starting frequency", "Say what clients usually begin with, such as weekly or every other week, as the practice's usual approach, not a rule."],
        ["Who decides", "The schedule is agreed between client and clinician and can change."],
        ["Late arrivals", "Link to the late and missed session policy."],
        ["Longer or shorter visits", "Mention them only if the practice offers them, with their fees."]
      ),
      p(
        "Use the practice's real numbers and avoid ranges you do not follow. If every clinician in the office works differently, say that sessions vary by clinician and invite visitors to ask when they call. Clients going through a separation often ask how long counseling will last, which our guide to a [divorce and separation counseling page](/guides/divorce-and-separation-counseling-page-for-a-counseling-practice-without-clinical-claims) addresses without promising results."
      ),
      h2("Words to avoid"),
      ul(
        "A number of sessions or weeks after which clients feel better.",
        "Phrases like fast, quick, lasting or permanent.",
        "Comparisons with other practices or other kinds of treatment.",
        "Any mention of results, success rates or cure.",
        "Pressure language such as the sooner the better."
      ),
      p(
        "Professional bodies describe therapy as a collaborative process whose pace differs from person to person. The American Psychological Association's plain-language overview is a good source to cite, and a link to it lets the page rest on a neutral explanation rather than the practice's own promise."
      ),
      h3("What about cost?"),
      p(
        "Frequency affects what clients pay, so connect the explanation to the fees page and be clear that the practice does not require a minimum number of sessions, if that is true. Our guide to a [fees page with sliding scale, out-of-network and superbill options](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) explains how to present cost without pressure. A short course before a wedding follows a different rhythm from open-ended therapy, and a [premarital counseling page](/guides/premarital-counseling-page-for-a-counseling-practice-without-clinical-claims) can state a typical range of sessions without promising results."
      ),
      h2("Where to put the information"),
      p(
        "The best home is the first session page, where a new client is already looking for what to expect, with a short version in the page's FAQ. Our guide on [what to put on a first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) shows the layout, and the [our approach page without outcome claims](/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims) covers the tone to use when describing how the practice works."
      ),
      ol(
        "Confirm the real session length and starting frequency with each clinician.",
        "Write one short paragraph and one FAQ answer, in plain language.",
        "Add a sentence that the schedule can change and is decided together.",
        "Have the clinical director or the clinician approve the wording in writing.",
        "Review the page whenever fees, session length or policies change."
      ),
      p(
        "Finally, make sure the same facts appear on the Google Business Profile services text, on intake paperwork and on the phone script, so a caller hears the same answer the website gives."
      ),
      h3("Check that every document agrees"),
      p(
        "Compare the website, the intake packet, the fee schedule, the consent form and the phone script for session length and frequency. If any one says something different, patients will notice and ask which is right. Choose the correct figures with the clinicians, fix every document at once and record the date, so the next change is easy to apply everywhere."
      ),
    ],
    faqs: [
      {
        q: "Can the website say how many sessions someone will need?",
        a: "It should not. The number depends on the person and is a clinical decision made with a clinician. The page can explain how scheduling works and say the clinician will discuss it after the first meetings.",
      },
      {
        q: "Is it fine to say sessions are fifty minutes?",
        a: "Yes, if that is the practice's real standard. State it as the usual length and mention exceptions, such as a longer intake. Match the number to your fee schedule and intake paperwork so nothing contradicts it.",
      },
      {
        q: "Should the page recommend weekly sessions?",
        a: "Describe weekly as the practice's usual starting point if that is true, but avoid telling people what they should do. Say the clinician and client agree the schedule, and that it may change as things go on.",
      },
      {
        q: "Can we link to an outside explanation of therapy?",
        a: "Yes. A neutral source such as the American Psychological Association gives readers a plain explanation and keeps the practice's own page free of claims. Link to it once, in the body, with a short description.",
      },
      {
        q: "What if different clinicians work differently?",
        a: "Say that sessions vary by clinician and list each clinician's usual length on their bio page, if they are willing. That is more honest than a single general statement that does not fit everyone.",
      },
    ],
    citations: [APA_PSYCHOTHERAPY, ACA_ETHICS, FL_MENTAL],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "Set expectations before the first visit." },
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Our Approach Page", description: "Describe how you work without outcome claims." },
      { href: "/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice", label: "Cancellation Policy Page", description: "Explain missed-session rules." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1095
  {
    slug: "evening-and-weekend-hours-for-a-primary-care-practice-publishing-extended-hours-and-keeping-google-accurate",
    keyword: "evening and weekend hours for a primary care practice: publishing extended hours and keeping Google accurate",
    category: "Checklist",
    title: "Evening and Weekend Hours for a Primary Care Practice: Publishing Extended Hours and Keeping Google Accurate",
    metaTitle: "Evening and Weekend Hours: Keep Google Accurate",
    metaDescription:
      "How a primary care practice can publish evening and weekend hours and keep Google, the website and the phone greeting in agreement. Call (561) 291-2681.",
    answer:
      "A primary care practice that offers evening or weekend hours should publish them in the same words on its website, Google Business Profile, directories and phone greeting, say who is seen at those times, and update all of them when the schedule changes. Wrong hours on Google are one of the quickest ways to lose a patient's trust.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T12:00:00Z",
    dateModified: "2026-10-30",
    readMinutes: 6,
    sections: [
      h2("Hours are the most-checked fact about your practice"),
      p(
        "Open now is one of the most common local searches, and patients decide where to call based on what Google shows. A profile that says open until eight when the doors lock at five produces a wasted trip, a frustrated patient and often a one-star review about something that is not about care at all."
      ),
      p(
        "Extended hours make the risk larger because they are often partial. One clinician may stay late on Tuesdays, Saturday mornings may be for established patients only, and a holiday weekend may change everything. Each of those details needs a place."
      ),
      h2("Decide what extended hours really mean"),
      table(
        ["Question", "Why it matters"],
        ["Who can book these slots", "New patients, established patients only, or both."],
        ["What services are available", "Full visits, sick visits only, or labs and nurse visits."],
        ["Is the front desk open", "Phones and doors can open at different times."],
        ["Is it every week", "A rotating Saturday needs a published calendar, not a blanket listing."]
      ),
      p(
        "If the answer differs by day, say so. A line such as Saturday 8 to noon for established patients is more useful, and more honest, than a bare time range."
      ),
      h2("Update every place hours appear"),
      ol(
        "Google Business Profile: set regular hours and add special hours for holidays, using the steps in Google's help article.",
        "Website: the footer, the contact page and the location page should all show the same hours and notes.",
        "Directories and listings: check the main ones every quarter, as our guide on NAP consistency explains.",
        "Phone greeting: record the hours and the after-hours instructions.",
        "Booking tool and patient portal: make sure the available slots match what the website says.",
        "Social profiles and email signature: update the same words."
      ),
      p(
        "Our guide to [Google Business Profile hours and closures during hurricane season](/guides/google-business-profile-hours-and-closures-during-hurricane-season) shows how to use special hours for disruptions, and the same approach works for any change in the schedule. Whatever extended hours you publish, an office that pauses at midday still needs two time blocks, which our guide to [split hours and lunch closures on Google](/guides/split-hours-and-lunch-closures-on-google-business-profile-for-a-primary-care-practice) explains step by step."
      ),
      h3("Use structured data carefully"),
      p(
        "If the site uses opening hours in its structured data, generate it from one source of truth so that the markup, the visible text and the profile cannot drift apart. Mismatched hours in markup are a common cause of conflicting information in search results."
      ),
      h2("Keep it accurate over time"),
      ul(
        "Assign one person to own hours and give them a calendar reminder each month.",
        "Check Google for suggested edits from the public, which can change hours without notice, as our guide on suggested edits describes.",
        "Look at the profile from a phone while logged out to see what patients see.",
        "Record the date of each change in a simple log.",
        "When a clinician who covers evening hours leaves, remove the hours the same day."
      ),
      p(
        "Finally, tell patients about new hours in a way they will notice. A short banner on the website, a mention in appointment reminders and a line on the voicemail help patients who already know the practice. Our guide on [wait times and schedule availability messaging](/guides/wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises) covers how to describe availability without making promises the office cannot keep."
      ),
      h3("A quick monthly audit"),
      p(
        "On the first of each month, look up the practice on Google from a phone, read the hours aloud and compare them to the website and the schedule at the front desk. Then call the main number outside business hours and listen to the greeting. It takes five minutes and catches most errors before a patient does, including hours changed by a public edit or a holiday that was never cleared."
      ),
    ],
    faqs: [
      {
        q: "Should evening hours appear on Google if only some clinicians work them?",
        a: "Only if the office is actually open and staffed at those times. If the extended hours are limited to certain services or patients, say that in the profile description and on the website instead of implying a full day.",
      },
      {
        q: "How do we show a rotating Saturday schedule?",
        a: "Use special hours on the specific Saturdays the office is open and keep regular hours as Monday to Friday. Publish a short calendar on the website so patients can see the dates. Do not list every Saturday as open.",
      },
      {
        q: "What happens if Google shows the wrong hours?",
        a: "Log in to the profile, correct the hours and check for pending suggested edits from the public. Then confirm the website, directories and phone greeting match. Changes can take a day to appear.",
      },
      {
        q: "Do extended hours help the practice rank?",
        a: "Hours are one input among many, and accuracy matters more than length. Open now searches can favor a practice that is actually open, but a wrong listing causes harm that outweighs any benefit.",
      },
      {
        q: "Who should own the hours?",
        a: "One named person, usually the practice manager, with a backup. Hours change for many reasons, and a shared responsibility means no one updates the profile when the schedule changes.",
      },
    ],
    citations: [GBP_HOURS, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/google-business-profile-hours-and-closures-during-hurricane-season", label: "Hours and Closures", description: "Use special hours for disruptions." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone aligned." },
      { href: "/guides/how-to-handle-google-business-profile-suggested-edits", label: "Suggested Edits", description: "Stop public edits changing your hours." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- new row A
  {
    slug: "showing-google-reviews-on-a-medical-practice-website-widgets-schema-and-rules",
    keyword: "showing Google reviews on a medical practice website: widgets, schema and rules",
    category: "How-to",
    title: "Showing Google Reviews on a Medical Practice Website: Widgets, Schema and Rules",
    metaTitle: "Show Google Reviews on a Medical Practice Website",
    metaDescription:
      "How to display Google reviews on a medical practice website without breaking review rules, schema guidelines or patient privacy. Call (561) 291-2681.",
    answer:
      "A medical practice can show its Google reviews on its own website if it displays them faithfully, does not pick only the good ones, does not add its own review markup for them and does not reply or edit in a way that identifies a patient. Use a reputable widget or a link to the profile and keep the display current.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T12:20:00Z",
    dateModified: "2026-10-19",
    readMinutes: 6,
    sections: [
      h2("Why practices want reviews on their own site"),
      p(
        "Patients trust other patients, and a practice's own pages are where many of them make the final decision. Showing real Google reviews near the booking button can help, and it saves the visitor a trip to another site. The risk is doing it in ways that break rules written to stop fake or filtered review displays."
      ),
      p(
        "Three sets of rules apply at once: the review platform's own policies, the Federal Trade Commission's rule on consumer reviews and testimonials, and the privacy rules a healthcare practice already follows. A good display respects all three."
      ),
      h2("Three ways to show them"),
      table(
        ["Method", "What to know"],
        ["A link or button to your Google reviews", "The simplest option. It sends visitors to the real source and carries no markup risk."],
        ["A widget from a review-display vendor", "Shows live reviews on the page. Check what the widget loads, whether it sets cookies and whether it filters reviews."],
        ["Reviews copied onto the page by hand", "Highest risk. Copied text goes stale, can be edited by accident and can look curated."]
      ),
      p(
        "If a widget is used, read what it sends to a third party. Scripts that load on a page where a patient is booking or reading about a condition should be reviewed with the same care as any tracking tag, as our guide on [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website) explains."
      ),
      h2("Rules that matter"),
      ul(
        "Show the real star rating and review count from the profile, not a rounded or edited number.",
        "Do not hide, delete or suppress negative reviews from the display and show the rest, since the FTC rule targets review suppression.",
        "Do not offer rewards for positive reviews, and never gate who is asked, as our guide on getting more reviews without review gating describes.",
        "Do not reply to a review in a way that confirms the reviewer is a patient.",
        "Date the display or keep it live, so visitors know it is current."
      ),
      h3("Be careful with schema"),
      p(
        "Google's structured data guidelines say that review markup for a business's own reviews of itself, often called self-serving reviews, is not eligible for star results in search. Do not add Review or AggregateRating markup to your own pages for reviews of your own practice just to chase stars, because it can lead to a manual action. Display the reviews visibly and leave the markup out."
      ),
      h2("Make it look right and load fast"),
      p(
        "A review block should sit near the call to action, not above the information the visitor came for. Limit it to a few recent reviews with a link to read more, so the page stays quick on a phone and does not become a wall of quotes. Test the display at a narrow width and in dark mode, and load the widget after the main content so it never delays the page."
      ),
      ol(
        "Decide whether a link, a widget or nothing is right for the practice.",
        "If a widget, review its privacy behavior and keep it off pages that discuss specific conditions.",
        "Show the true rating and count, and let the widget show recent reviews as they come.",
        "Leave out review structured data for your own practice.",
        "Check the display each month and after any change to the Google profile."
      ),
      p(
        "Finally, read our guide on the [difference between a Google review and a patient testimonial](/guides/google-review-vs-patient-testimonial-legal-difference) before quoting any patient words outside the platform. A review shown by a widget is on the platform's terms. A quote you copy into a brochure or page is a testimonial with its own consent requirements."
      ),
      h3("Look at the page as a visitor"),
      p(
        "Open the page on a phone with the review block in place and scroll as a patient would. Ask whether the reviews help the visitor decide, or whether they push the booking button off the screen. A small, quiet block with the real rating and a link to read more usually works better than a long carousel, and it keeps the page quick."
      ),
    ],
    faqs: [
      {
        q: "Can we show only our five-star reviews?",
        a: "Showing only selected positive reviews risks being misleading, and the FTC rule on reviews targets suppression of negative ones. A live display of recent reviews, or a link to the full profile, is the safer approach.",
      },
      {
        q: "Should we add star markup to our pages?",
        a: "No. Google does not show star results for a business's reviews of itself, and adding such markup can trigger a manual action. Show the reviews visibly and rely on the Google profile for stars in local results.",
      },
      {
        q: "Is a review widget safe on a medical site?",
        a: "It depends on what the script loads and sets. Review the vendor's privacy behavior, keep it away from pages with sensitive content or forms, and consider a simple link if you cannot confirm what it sends.",
      },
      {
        q: "Can we quote a review in an ad or flyer?",
        a: "A quote taken out of the platform becomes a testimonial and may need written permission and disclosures. Check the guide on review versus testimonial before using any patient's words outside Google.",
      },
      {
        q: "How often should the display update?",
        a: "A live widget updates itself. If you use a link or a static line, review it monthly so the count and rating stay accurate. An out-of-date number looks careless and can be seen as misleading.",
      },
    ],
    citations: [FTC_REVIEWS, GOOGLE_REVIEW_SNIPPET, GOOGLE_REVIEW_POLICY],
    links: [
      { href: "/guides/google-review-vs-patient-testimonial-legal-difference", label: "Review vs Testimonial", description: "Know which rules apply to which words." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Reviews Without Gating", description: "Ask for reviews the right way." },
      { href: "/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient", label: "Replying to Positive Reviews", description: "Reply without confirming a patient." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- new row B
  {
    slug: "professional-domain-email-for-a-medical-practice-instead-of-gmail",
    keyword: "professional domain email for a medical practice instead of Gmail",
    category: "How-to",
    title: "Professional Domain Email for a Medical Practice Instead of Gmail",
    metaTitle: "Professional Domain Email for a Medical Practice",
    metaDescription:
      "Why a medical practice should use email on its own domain, and how to set it up so messages are delivered and data stays protected. Call (561) 291-2681.",
    answer:
      "A medical practice should use email addresses on its own domain, such as name@practice.com, set up through a business email service with SPF, DKIM and DMARC records, and should avoid putting patient health details in ordinary email at all. A personal Gmail address looks less trustworthy and gives the practice no control when someone leaves.",
    author: "Liam Costello",
    publishDate: "2026-10-19T12:40:00Z",
    dateModified: "2026-10-30",
    readMinutes: 6,
    sections: [
      h2("What patients and Google see in an email address"),
      p(
        "A patient who gets a message from a free personal address can reasonably wonder whether it is real. Phishing messages pretending to be from doctors' offices are common, and an address on the practice's own domain, matching the website, is the simplest signal that a message is genuine."
      ),
      p(
        "The same address also belongs on the website, the Google Business Profile and the directories, so that name, address, phone and email agree everywhere. Mixed personal and business addresses are a small but real source of confusion. Once every address uses your domain, give staff one standard [email signature and confidentiality footer](/guides/email-signature-and-confidentiality-footer-for-medical-practice-staff) so name, phone and website match everywhere. Mail sent from your own domain is also easier to authenticate, which helps when you run the [contact form delivery test for a medical practice website](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website) after any change."
      ),
      h2("What a domain-based setup gives the practice"),
      ul(
        "Control: when a staff member leaves, the practice disables the account instead of asking for a password.",
        "Trust: messages from the practice's own domain look consistent with its website.",
        "Deliverability: with proper records, messages are less likely to land in spam.",
        "Roles: shared addresses such as info@ or billing@ can route to the right person without sharing a login.",
        "Records: the practice owns its mail history, which matters for audits and disputes."
      ),
      p(
        "Our guide on [who should own a medical practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) covers the ownership side: the domain should be registered to the practice, not to a web designer or a former employee."
      ),
      h2("The three records that make mail trusted"),
      table(
        ["Record", "What it does"],
        ["SPF", "Lists the servers allowed to send mail for your domain."],
        ["DKIM", "Adds a digital signature so receivers can tell the message was not altered."],
        ["DMARC", "Tells receivers what to do with mail that fails the first two checks, and sends you reports."]
      ),
      p(
        "Mail providers publish instructions for each record, and Google's sender guidelines explain what large receivers expect. Set all three before sending any bulk messages, and test by sending to a few outside addresses."
      ),
      h3("Choose a service built for business"),
      p(
        "Pick a mainstream business email service that will sign a business associate agreement if the practice will handle any protected health information in email. Confirm the agreement is in place and that the right plan is selected, because the agreement usually covers only specific paid plans."
      ),
      h2("Keep patient information out of ordinary email"),
      p(
        "HHS guidance says providers may email patients when the patient is told of the risk and agrees, and the practice uses reasonable safeguards. In practice, many offices use a secure portal for anything clinical and keep ordinary email for scheduling and general questions. Our guide to [new patient forms online](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains the same principle for forms."
      ),
      ol(
        "Register or confirm the domain in the practice's own name.",
        "Choose a business email service and sign the agreement if protected information will be handled.",
        "Create named accounts for staff and role accounts for shared inboxes.",
        "Add the SPF, DKIM and DMARC records and test delivery.",
        "Turn on two-step sign-in for every account.",
        "Write a short policy on what may and may not be sent by email, and train staff on it."
      ),
      p(
        "Also set up forwarding rules carefully. An automatic forward to a personal address can quietly move patient information outside the practice's control."
      ),
      h3("Plan the switch from Gmail"),
      p(
        "If staff already use personal addresses, move them over in a planned week: create the new accounts, set up forwarding from the old addresses for a limited time, update the website, the Google profile, directories and email signatures, and tell patients and vendors. Then close the old forwarding so nothing keeps flowing to personal inboxes, and keep a note of what was changed and when."
      ),
    ],
    faqs: [
      {
        q: "Is it wrong to use Gmail for a practice?",
        a: "A free personal address is not forbidden, but it looks less trustworthy and gives the practice no control when staff change. A domain-based address through a business service is a better default, and essential if patient information is ever handled by email.",
      },
      {
        q: "Do we need a business associate agreement for email?",
        a: "If the email service will store or transmit protected health information for the practice, a business associate agreement is generally expected. Confirm with the provider which plans it covers and keep a signed copy.",
      },
      {
        q: "What are SPF, DKIM and DMARC for?",
        a: "They are three records that prove your messages come from you. Together they reduce the chance that your mail is marked as spam and make it harder for someone to send fake messages that look like they came from your practice.",
      },
      {
        q: "Can we email patients their results?",
        a: "Federal guidance allows providers to email patients if they have been told of the risks and agree, and safeguards are in place. Many practices prefer a secure portal for results and use email only to say that something is waiting.",
      },
      {
        q: "Should the email address be on the website?",
        a: "A role address such as info@ can be listed, though a form or phone number is often better for new patients. Avoid listing individual clinician addresses publicly, since they attract spam and phishing.",
      },
    ],
    citations: [HHS_EMAIL, GOOGLE_SENDER, CISA_PHISHING],
    links: [
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns the Accounts", description: "Keep the domain and logins with the practice." },
      { href: "/guides/email-marketing-compliance-for-a-medical-practice", label: "Email Marketing Compliance", description: "Rules for marketing email." },
      { href: "/guides/how-to-choose-a-domain-name-for-a-medical-practice", label: "Choosing a Domain Name", description: "Pick a domain that lasts." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- new row C
  {
    slug: "local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn",
    keyword: "local sponsorships and community events for a medical practice and the links they earn",
    category: "Playbook",
    title: "Local Sponsorships and Community Events for a Medical Practice and the Links They Earn",
    metaTitle: "Local Sponsorships and Links for a Medical Practice",
    metaDescription:
      "How a medical practice can sponsor local events and earn honest links from schools, teams and charities without buying links. Call (561) 291-2681.",
    answer:
      "A medical practice can earn real local links by sponsoring a school team, a charity run or a community event, as long as it asks for an honest mention on the organizer's own page, never buys links on a site that sells them, and never uses a patient's story or photo. Choose causes the practice would support anyway.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T13:00:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("Why local links come from local things"),
      p(
        "Search engines treat a link as a vote of confidence from one site to another. For a medical practice, the votes that matter most come from local organizations that exist in the real world: schools, teams, charities, chambers of commerce and community groups. They are hard to fake, which is why they carry weight. Business groups and chambers of commerce are a natural place to meet employers, and an [employer partnership page for a primary care practice](/guides/employer-and-workplace-partnership-page-for-a-primary-care-practice) gives them something to link to. Give each event its own dated page, using the layout in our guide to a [health fair and community education event page](/guides/health-fair-and-community-education-event-page-for-a-primary-care-practice), so partners have something specific to link to."
      ),
      p(
        "They are also earned in a different way from the links a marketing vendor sells. A sponsorship, a donation or a volunteer day is a real act, and the link to the practice's website is a natural thank-you."
      ),
      h2("Where a practice can show up"),
      table(
        ["Opportunity", "What the link usually looks like"],
        ["A youth team or school event", "A sponsor logo and link on the team or school page."],
        ["A charity run, walk or fundraiser", "A sponsor list on the event website."],
        ["A chamber of commerce or business association", "A member directory entry linking to the practice."],
        ["A community health fair", "A participant list on the organizer's page."],
        ["A local newspaper or newsletter", "A short item or sponsor mention."]
      ),
      p(
        "Choose by fit, not by the strength of the link. A practice that supports a cause it believes in produces better stories and more honest links than one that scans a list for high-authority sites."
      ),
      h2("How to ask for the link properly"),
      ol(
        "Contact the organizer and agree the sponsorship in writing.",
        "Ask whether sponsors are listed on the organization's own website and, if so, with a link.",
        "Provide the exact practice name, address, phone and web address so the listing matches everywhere else.",
        "Send a short sentence the organizer can use, written in plain language, with no health claims.",
        "Check the page after it goes live and thank the organizer."
      ),
      p(
        "Match the listing to the Google profile, as our guide on [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains, so that a sponsor page strengthens the practice's identity instead of adding another variation."
      ),
      h3("What never to do"),
      ul(
        "Buy a link from a site that sells sponsored posts for any payer.",
        "Trade sponsorship for a promise of a certain anchor text or a ranking.",
        "Use a patient's name, photo or story at an event or in a post without written authorization.",
        "Hand out anything that implies a result or a free service that has strings attached.",
        "Ask staff to post about the event in ways that reveal who is a patient."
      ),
      p(
        "Our guide on [backlinks for a medical practice, safe versus penalized](/guides/backlinks-for-a-medical-practice-safe-vs-penalized) explains which tactics risk a penalty. Real sponsorships sit on the safe side of that line, provided the practice is not paying specifically for links."
      ),
      h2("Measure and keep the benefit"),
      p(
        "Track a sponsorship by what it brings: referral visits in analytics, calls that mention the event and the listing's presence over time. Do not expect a jump in rankings from one link. The value is steady and local, and it grows as the practice appears on more real community pages."
      ),
      p(
        "Add the event to the practice's own site as a short, honest news item with photos of staff and the public setting, never patients, and link to the organizer. That helps visitors see the practice as part of the community, and it gives the organizer a reason to link back. Our guide on [press releases for a medical practice](/guides/press-release-for-a-medical-practice-that-helps-seo) covers how to write the announcement."
      ),
      h3("Keep a simple sponsorship log"),
      p(
        "Record each sponsorship with the date, the amount, who agreed it, the contact at the organization, what they promised in return and the address of the page where the practice is listed. At the end of the year, review which ones brought visits, calls or goodwill and which did not. The log makes next year's decisions easy and keeps the listings accurate if the practice ever moves or changes its name."
      ),
    ],
    faqs: [
      {
        q: "Is a sponsorship link considered paid?",
        a: "Search engines look at links bought mainly to influence rankings. A genuine sponsorship of a real event, where the listing is a thank-you, is different, but never ask for specific anchor text or pay a site that sells sponsored placements to anyone.",
      },
      {
        q: "Which organizations are best to sponsor?",
        a: "Those the practice would support anyway and whose audience includes its local patients: school teams, charity events, community centers and local associations. Fit and sincerity matter more than the size of the organizer's website.",
      },
      {
        q: "Can staff wear practice shirts at an event?",
        a: "Yes, and a booth or banner with the practice name is normal. Do not photograph patients or ask people for health information. Offer general materials and a phone number, not screenings or advice, unless the practice has planned those properly.",
      },
      {
        q: "How many links should we expect?",
        a: "Usually one per sponsorship, sometimes none. Treat the link as a bonus, not a guarantee, and judge the sponsorship by whether the practice is glad to have supported the cause.",
      },
      {
        q: "Should we post about it on Google Business Profile?",
        a: "A short update post with a real photo of staff at the event is fine. Keep it free of patient information and clinical claims, and use the same practice name and address that appear everywhere else.",
      },
    ],
    citations: [GOOGLE_HELPFUL, FTC_ADS, HHS_MARKETING],
    links: [
      { href: "/guides/backlinks-for-a-medical-practice-safe-vs-penalized", label: "Safe Backlinks", description: "Which link tactics risk a penalty." },
      { href: "/guides/press-release-for-a-medical-practice-that-helps-seo", label: "Press Releases", description: "Announce community news honestly." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep listings matching." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- new row D
  {
    slug: "website-backups-uptime-monitoring-and-maintenance-for-a-medical-practice",
    keyword: "website backups, uptime monitoring and maintenance for a medical practice",
    category: "Checklist",
    title: "Website Backups, Uptime Monitoring and Maintenance for a Medical Practice",
    metaTitle: "Website Backups and Uptime for a Medical Practice",
    metaDescription:
      "A checklist for medical practice website backups, uptime monitoring, updates and recovery so the site stays online. Call (561) 291-2681.",
    answer:
      "A medical practice website needs automatic backups stored away from the site itself, monitoring that alerts someone within minutes if the site goes down, a regular schedule for updates, and a written recovery plan with a named owner. Test the backup by restoring it, because an untested backup is only a hope.",
    author: "Liam Costello",
    publishDate: "2026-10-19T13:20:00Z",
    dateModified: "2026-10-19",
    readMinutes: 6,
    sections: [
      h2("When the site is down, patients assume the office is"),
      p(
        "A website that returns an error at nine on a Monday morning is not just a technical problem. Patients who cannot find the phone number or the booking link call someone else. Search engines that find the site unreachable repeatedly can reduce how often they visit it, and a hacked site that shows spam can trigger warnings in browsers."
      ),
      p(
        "Most outages are dull: an expired domain, a certificate that lapsed, a plugin update that broke a page, a host that had a bad hour. A small amount of routine care prevents nearly all of them."
      ),
      h2("Backups that actually help"),
      ul(
        "Automatic daily backups of files and database, with a longer weekly and monthly history.",
        "Stored in a different place from the host, so a failure at the host does not take the backups with it.",
        "Retained long enough to go back before a problem began, often thirty days.",
        "Encrypted, with access limited to named people.",
        "Tested at least twice a year by restoring to a staging copy and checking that forms, phone links and pages work."
      ),
      p(
        "If the site is built on a managed platform or a modern static host, much of this is built in. Confirm what the platform keeps and for how long, and keep your own copy of the source files and content."
      ),
      h2("Monitoring and alerts"),
      table(
        ["Check", "What to set up"],
        ["Uptime", "A monitor that tests the home page and the contact page every few minutes and alerts a phone or email."],
        ["Certificate", "Alerts at thirty and ten days before expiry."],
        ["Domain renewal", "Auto-renew on, and a calendar reminder under the practice's own account."],
        ["Forms", "A scheduled test of the contact path, using clearly marked test data, never real patient information."],
        ["Phone links", "A periodic check that the tap-to-call link still works on a phone."]
      ),
      p(
        "Our guide on [HTTPS, SSL certificates and mixed content warnings](/guides/https-ssl-certificates-and-mixed-content-warnings-on-a-medical-practice-website) explains the certificate side, and the one on [finding and fixing broken links and 404 errors](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) covers the quieter failures that monitoring does not catch."
      ),
      h3("Updates and security basics"),
      p(
        "Apply updates to the platform, themes and plugins on a schedule, not only when something breaks. Remove plugins that are not needed, use unique strong passwords, turn on two-step sign-in and limit who can publish changes. Federal cybersecurity guidance on ransomware stresses offline backups and tested recovery as the main protection."
      ),
      h2("Write the recovery plan"),
      ol(
        "Name who is called first, who has the logins and who decides to take the site offline.",
        "Keep the list of accounts, such as domain registrar, host, email and analytics, in a secure place under practice control.",
        "Write the steps to restore from backup and who performs them.",
        "Prepare a simple maintenance page with the phone number, in case the site must be offline for a while.",
        "Review the plan each year and after any staff change."
      ),
      p(
        "Remember the other surfaces too. If the site is down, the Google Business Profile still shows the website link, so make sure the phone number and hours are right there. Our guide on [who owns a practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) helps prevent the most common recovery failure, which is nobody knowing who holds the logins."
      ),
      h3("Rehearse once a year"),
      p(
        "Once a year, run a recovery drill: pretend the site is gone, restore it to a test address from the latest backup and time how long it takes. Note what was missing, such as a form setting or a login nobody could find, and fix it. A practice that has rehearsed recovery once will handle a real outage in an hour instead of a week."
      ),
    ],
    faqs: [
      {
        q: "How often should a practice site be backed up?",
        a: "Daily is a good default for a site that changes, with weekly and monthly copies kept longer. A mostly static site can use less frequent backups, but the copies must be stored away from the host and tested by restoring them.",
      },
      {
        q: "What does uptime monitoring cost?",
        a: "Basic monitoring is inexpensive or free at small scale. The cost that matters is attention: choose a service that alerts a real person by phone or email, and check that alert goes to someone who will act on it.",
      },
      {
        q: "Do we need to worry about the domain expiring?",
        a: "Yes. An expired domain takes the site and email down together. Turn on auto-renew, register the domain in the practice's own account, keep the billing card current and set a reminder ninety days before the renewal date.",
      },
      {
        q: "Who should have admin access to the site?",
        a: "As few people as possible, each with their own login and two-step sign-in, plus the practice owner as a backstop. Remove access the day someone leaves, and keep a record of who can publish.",
      },
      {
        q: "Is a patient form safe to test?",
        a: "Test it with clearly marked test data and never with real patient information. Make sure test submissions are flagged so they do not reach the practice as real leads or distort tracking.",
      },
    ],
    citations: [CISA_RANSOM, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/https-ssl-certificates-and-mixed-content-warnings-on-a-medical-practice-website", label: "HTTPS and SSL", description: "Keep the certificate valid." },
      { href: "/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website", label: "Broken Links and 404s", description: "Catch the quiet failures." },
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns the Accounts", description: "Keep logins under practice control." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- new row E
  {
    slug: "scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients",
    keyword: "scam texts and emails that impersonate a medical practice: what to tell patients",
    category: "Checklist",
    title: "Scam Texts and Emails That Impersonate a Medical Practice: What to Tell Patients",
    metaTitle: "Scam Texts That Impersonate a Medical Practice",
    metaDescription:
      "What a medical practice should say when scammers imitate it by text or email, and how to protect patients and your reputation. Call (561) 291-2681.",
    answer:
      "When scammers imitate a medical practice by text or email, the practice should tell patients in plain words how it really contacts them, what it will never ask for, and where to report a suspicious message, without describing any individual patient's situation. Post the notice on the website and voicemail and keep it short.",
    author: "Gio LaRoche",
    publishDate: "2026-10-19T13:40:00Z",
    dateModified: "2026-10-21",
    readMinutes: 6,
    sections: [
      h2("The problem patients will blame on you"),
      p(
        "Scammers often send messages that look like they come from a doctor's office: a bill that must be paid now, a portal link that asks for a login, a lab result that needs a code. A patient who falls for one may blame the practice, even though the practice did nothing wrong, and a report that the office leaked their number can spread quickly."
      ),
      p(
        "The practice cannot stop strangers from sending text messages, but it can make its real behavior easy to recognize, and it can respond calmly and quickly when patients report one."
      ),
      h2("Say how you really contact patients"),
      ul(
        "State which channels the office uses, such as phone calls, appointment reminder texts from a specific number and portal notifications.",
        "State what the office will never do, for example ask for a card number by text, ask for a password or ask for a payment by gift card.",
        "Tell patients to hang up and call the office on the number on the website if they are unsure.",
        "Give the office phone number as a tap-to-call link at the top of the notice.",
        "Say where to report a scam, such as the FTC's ReportFraud site."
      ),
      p(
        "Keep the notice to one short paragraph and one list. A long warning teaches patients to skip it."
      ),
      h2("Where to put the notice"),
      table(
        ["Place", "What to add"],
        ["Website banner and contact page", "A short line linking to the full notice."],
        ["Patient portal login page", "A reminder that the office never asks for a password by text or email."],
        ["Voicemail greeting", "One sentence for callers who ask about suspicious messages."],
        ["Reminder texts", "A short footer line, such as we will never ask for payment by text."],
        ["Social profiles", "A pinned post with the same wording."]
      ),
      p(
        "Our guide on [appointment reminder wording](/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details) shows how to keep real reminders recognizable, which is the best defense, since a patient who knows what a genuine message looks like spots a fake faster. Patients should also know what a genuine payment text looks like, which we cover in our guide to a [text-to-pay and online bill pay page](/guides/text-to-pay-and-online-bill-pay-page-for-a-medical-practice) for a medical practice."
      ),
      h3("When a patient reports a message"),
      ol(
        "Thank them and ask them not to click or reply.",
        "Ask them to forward a screenshot or the sender details to a designated office address, not to share the contents in a public comment.",
        "Check whether the message could have come from the office, and confirm with the vendor that sends your reminders.",
        "Report the scam to the FTC and, if appropriate, to the mobile carrier or email provider.",
        "Record the date and number of reports so you can see a pattern."
      ),
      p(
        "Do not confirm in public that a particular person is a patient, even when thanking them for the report. The same discipline applies to online comments, as our guide on [responding to positive reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) explains."
      ),
      h2("Protect the practice's own accounts"),
      p(
        "Sometimes a scam reflects a real problem, such as a compromised email account or a leaked contact list. Review who has access to the reminder system, turn on two-step sign-in for email and the patient portal, and check that your domain's mail records are set up so others cannot easily send fake mail in your name. Our guide on [professional domain email for a medical practice](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) covers the records to set. Government guidance on recognizing and reporting phishing is a good thing to link for patients. When the scam is a full copycat site or fake profile rather than a single message, our guide to [copycat websites and fake social profiles that impersonate a practice](/guides/copycat-website-or-fake-social-profile-impersonating-a-medical-practice-what-to-do) lists the reports to file."
      ),
      h3("Keep the notice honest and current"),
      p(
        "Review the wording twice a year and after any change in how the office contacts patients, such as a new reminder service or a new portal. If the real messages change, the notice must change too, or it will mislead the patients it is meant to protect. Date the notice, keep the previous version in a file and have the practice manager approve each update."
      ),
    ],
    faqs: [
      {
        q: "Does a scam message mean the practice was hacked?",
        a: "Not necessarily. Scammers guess at phone numbers and imitate well-known businesses without any access to the practice. Still, review account access, turn on two-step sign-in and check with your reminder vendor, so you can rule out a real leak.",
      },
      {
        q: "What should the notice say exactly?",
        a: "Say how the office really contacts patients, what it will never ask for by text or email, how to verify a message by calling the number on the website, and where to report scams. Keep it to a short paragraph and a list.",
      },
      {
        q: "Should we name the scam in public?",
        a: "A general notice is better than describing a specific message, which can teach scammers what works. Avoid mentioning any patient who reported it, and keep the wording factual and calm rather than alarming.",
      },
      {
        q: "Who should patients report a scam to?",
        a: "They can report it to the Federal Trade Commission through its fraud reporting site and to their phone carrier or email provider. Patients who shared a password or payment details should contact the relevant company right away.",
      },
      {
        q: "Can we use a banner on the portal login?",
        a: "Yes, and it is one of the best places for it. A single line reminding patients that the office never asks for a password by text or email protects them at the moment they are most likely to be tricked.",
      },
    ],
    citations: [FTC_REPORT, CISA_PHISHING, HHS_PRIVACY],
    links: [
      { href: "/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details", label: "Appointment Reminder Wording", description: "Make real messages recognizable." },
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Set up mail that is hard to fake." },
      { href: "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe", label: "Patient Portal Login Page", description: "Make the login findable and safe." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },
];
