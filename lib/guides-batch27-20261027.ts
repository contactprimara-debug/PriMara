// -- Guides batch 27 - 2026-10-27 --
// Guide/AEO pages from the Command Center queue (rows 1306-1310) plus ten new in-niche rows (1321-1330), built by
// the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound
// links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

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
const LIFELINE = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};
const SAMHSA_HELP = {
  publisher: "SAMHSA",
  label: "Find help",
  href: "https://www.samhsa.gov/find-help",
};
const NIMH_HELP = {
  publisher: "National Institute of Mental Health",
  label: "Help for mental illnesses",
  href: "https://www.nimh.nih.gov/health/find-help",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const APA_ETHICS = {
  publisher: "American Psychological Association",
  label: "Ethical Principles of Psychologists and Code of Conduct",
  href: "https://www.apa.org/ethics/code",
};
const NASW_ETHICS = {
  publisher: "National Association of Social Workers",
  label: "NASW Code of Ethics",
  href: "https://www.socialworkers.org/About/Ethics/Code-of-Ethics",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business on Google",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_VERIFY = {
  publisher: "Google Business Profile Help",
  label: "Verify your business on Google",
  href: "https://support.google.com/business/answer/7107242",
};
const FTC_REPORT = {
  publisher: "Federal Trade Commission",
  label: "ReportFraud.ftc.gov",
  href: "https://reportfraud.ftc.gov/",
};
const IC3 = {
  publisher: "FBI Internet Crime Complaint Center",
  label: "IC3 online crime reporting",
  href: "https://www.ic3.gov/",
};
const AMA_CHAPERONE = {
  publisher: "American Medical Association",
  label: "Code of Medical Ethics: use of chaperones",
  href: "https://code-medical-ethics.ama-assn.org/ethics-opinions/use-chaperones",
};
const HEALTHY_CHILDREN = {
  publisher: "American Academy of Pediatrics",
  label: "HealthyChildren.org ages and stages",
  href: "https://www.healthychildren.org/English/ages-stages/Pages/default.aspx",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_ARTICLE = {
  publisher: "Google Search Central",
  label: "Article structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/article",
};
const GOOGLE_LOCAL = {
  publisher: "Google Search Central",
  label: "Local business structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const FCC_TEXTS = {
  publisher: "Federal Communications Commission",
  label: "Stop unwanted robocalls and texts",
  href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
};
const MEDICARE_COMPARE = {
  publisher: "Medicare.gov",
  label: "Care Compare: find providers",
  href: "https://www.medicare.gov/care-compare/",
};
const HEALTHIT = {
  publisher: "HealthIT.gov",
  label: "Health IT resources for providers",
  href: "https://www.healthit.gov/",
};

export const guidesPartThirty: Guide[] = [
  // ---------------------------------------------------------------- 1306
  {
    slug: "adolescent-visit-and-parent-presence-page-for-a-family-medicine-practice-without-legal-advice",
    keyword: "adolescent visit and parent presence page for a family medicine practice",
    category: "How-to",
    title: "Adolescent Visit and Parent Presence for Family Medicine",
    metaTitle: "Teen Visits and Parent Presence Page for Family Medicine",
    metaDescription:
      "How a family medicine practice can explain teen visits, who stays in the room and what parents are told, without legal advice. Call (561) 291-2681.",
    answer:
      "An adolescent visit page tells parents and teens, in plain words, who comes into the room, when a teen may be seen alone for part of the visit, what the practice shares with a parent, and who to ask about consent rules. It sets expectations without giving legal advice or clinical detail.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Why teen visits need their own page"),
      p(
        "A parent booking a visit for a thirteen year old and the teenager who will sit in the exam room often want different things from the same appointment. The parent wants to be present and informed. The teen may want a few minutes to talk without a parent listening. A practice that never says how it handles this leaves both sides guessing, and the first surprise usually happens at the front desk."
      ),
      p(
        "A short page set up in advance replaces that surprise with a routine. It also helps search, because parents type questions such as who stays in the room during a teen physical, and a clear answer on your own site is easier to find than a vague line buried in a policy packet."
      ),
      h2("What the page should explain"),
      table(
        ["Question a family asks", "Plain answer to publish"],
        ["Can a parent stay for the whole visit?", "Parents are welcome for most of the visit. Clinicians may also ask to spend part of it with the teen alone, as a normal routine for this age group."],
        ["Why might my teen be seen alone for a few minutes?", "It lets teens practice speaking for themselves about their own care. It is offered as a routine step, not because anything is wrong."],
        ["What will you tell me afterward?", "The clinician explains the visit and next steps. Some information is handled under consent and privacy rules that depend on the teen's age and the type of care. Ask us about your situation."],
        ["Who signs the forms?", "A parent or legal guardian signs consent for minors in most cases. Bring any custody or guardianship papers if someone other than a parent brings the teen."],
        ["Who gets the bill and the insurance statements?", "Statements usually go to the policyholder. Ask the front desk how your plan sends statements and what choices you have."]
      ),
      h2("Keep it free of legal advice"),
      p(
        "Rules about who may consent to care, which services a teen may request without a parent and what a parent may see in the record differ by state and by type of care. A practice page should not try to summarize them. Say that the office follows federal and Florida requirements, that the clinician can explain how they apply to a given visit, and that questions go to the front desk. Have your attorney or compliance advisor read the final wording once."
      ),
      p(
        "The HHS summary of the [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html) is a safe place to point readers who want the federal baseline, and it keeps your own page from restating rules that may change."
      ),
      h2("Wording that works for parents and teens"),
      ul(
        "Address both audiences with two short headings, one for parents and one for teens, so each person finds their answer in a few seconds.",
        "Use the word routine. Parents who hear that time alone is routine for this age group are less likely to feel singled out.",
        "Avoid phrases that describe any clinical subject a teen might raise. The page is about how visits work, not about health topics.",
        "Give the phone number as a tap-to-call link and say that the front desk can explain the process before the booking."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Link the page from the online booking flow and from the family visit pages. Our guide to a [well-child and school-age checkup page](/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims) shows where the link belongs for younger children, and the [caregiver and family member communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) covers adults who come with a patient."
      ),
      p(
        "If your counseling or behavioral health partner also sees teens, point to their version of the same explanation, such as a [teen therapy page for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims), so families hear one consistent story."
      ),
      h3("Train the front desk to match the page"),
      p(
        "A page that promises one thing while the phone staff say another does more harm than no page. Read the wording aloud with the front desk, agree on the three questions they will hear most, and give them a single sentence to say when a parent asks about privacy: the clinician will explain how it works at the visit, and the practice follows federal and Florida requirements."
      ),
    ],
    faqs: [
      {
        q: "Should the page say a teen will always be seen alone?",
        a: "No. Say that time alone may be offered as a routine part of visits for this age group, and that parents are welcome for the rest. A promise that applies to every visit is hard to keep and can worry parents who are new to the practice.",
      },
      {
        q: "Can we state the age at which teens are seen without a parent?",
        a: "Avoid publishing an age or a list of services. Rules differ by type of care and can change. Tell readers to ask the office how the rules apply to a specific visit, and have an attorney review any specific statement before it goes live.",
      },
      {
        q: "What if parents disagree about who attends?",
        a: "The page can say that the office needs the consent signature of a parent or guardian with authority to consent, and that families with custody questions should call before the visit. Do not describe a family's situation or take a side in writing.",
      },
      {
        q: "Does this page help the practice show up in search?",
        a: "It answers a question parents actually search for, and it gives AI answer engines a clear, sourced explanation to quote. It works best as one page linked from your booking and family visit pages rather than repeated in several places.",
      },
      {
        q: "Should we mention confidential care for teens at all?",
        a: "Only in general terms. Say that some care is handled under special privacy rules and that the clinician will explain them. Naming specific services on a public page invites misunderstanding and may need legal review.",
      },
    ],
    citations: [HHS_PRIVACY, HEALTHY_CHILDREN, SAMHSA_HELP],
    links: [
      { href: "/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims", label: "Well-Child Checkup Page", description: "Younger children and school age visits." },
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Family Communication Policy", description: "Who the office may talk to." },
      { href: "/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims", label: "Teen Therapy Page For Parents", description: "The counseling version." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1307
  {
    slug: "seasonal-resident-and-snowbird-counseling-page-for-a-florida-counseling-practice-without-clinical-claims",
    keyword: "seasonal resident and snowbird counseling page for a Florida counseling practice",
    category: "How-to",
    title: "Seasonal Resident and Snowbird Counseling Page for Florida",
    metaTitle: "Snowbird and Seasonal Resident Counseling Page for Florida",
    metaDescription:
      "How a Florida counseling practice can serve seasonal residents: licensure limits, telehealth, scheduling and a clear page. Call (561) 291-2681.",
    answer:
      "A seasonal resident counseling page for a Florida practice says who the practice can see while a client is in the state, what happens when the client is elsewhere, how scheduling works across months, and which licensure limits apply. It makes no promises about outcomes and sends anyone in crisis to 988.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Who this page is for"),
      p(
        "From late fall to spring, Florida fills with people who live in other states for part of the year. Some already see a therapist back home and want to keep going. Others arrive, find the winter harder than expected and look for help close to where they are staying. Both groups search in the same way: counseling for snowbirds, therapist for winter residents, therapist who takes part year clients."
      ),
      p(
        "Most practices have no page for them, so the question gets answered by phone, one caller at a time. A single clear page saves that time and lets the right people book."
      ),
      h2("Be exact about licensure"),
      p(
        "The most important sentence on the page is about where the clinician may legally practice. In general, a counselor is licensed by a state and sees clients who are physically located in that state during the session, although some states have compact or temporary practice arrangements. Do not guess. State only what your clinicians' licenses and your attorney or licensing board confirm."
      ),
      p(
        "Our guide to a [licensure and states served page](/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice) explains how to word this, including what to say about clients who travel."
      ),
      table(
        ["Situation", "What the page can say"],
        ["Client is in Florida this winter", "Sessions can be held in the office or by video while the client is in Florida. Tell us your dates when you book."],
        ["Client goes home for the summer", "Whether sessions can continue by video depends on where the client is and on each clinician's license. We will confirm before the first session."],
        ["Client wants to keep a therapist from home", "Continuing with a current therapist is a choice for that therapist and client. We can see you only while you are in Florida."],
        ["Client is new to counseling", "Say how to request a first session and how the first week works, in the same words as the main first session page."]
      ),
      h2("Scheduling that fits a part year client"),
      ul(
        "Say how far ahead winter appointments can be booked and whether a standing weekly time can be held.",
        "Explain what happens to a standing time when the client leaves for the summer, and whether returning clients get priority.",
        "Describe how paperwork carries over so a returning client does not start over each October.",
        "Link the [waitlist page](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) if winter openings fill quickly."
      ),
      h2("Insurance and payment from out of state"),
      p(
        "Many seasonal residents carry insurance from another state. Say whether you take it, whether you provide a receipt that a client can submit to the plan, and where to read your fee details. The [fees page guide](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) shows how to word out of network and superbill options without guaranteeing reimbursement."
      ),
      h2("Crisis resources and honest limits"),
      p(
        "A person staying temporarily far from home may not know the local crisis options. Put the 988 Suicide and Crisis Lifeline, 911 and your local crisis line on the page itself, as described in the [crisis resources section guide](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). Do not suggest that counseling will fix a winter low mood or loneliness, and do not describe symptoms."
      ),
      h3("Make the page easy to find in season"),
      p(
        "Add a short link from the services menu and the contact page, and mention the page in your Google Business Profile description during the winter months. Keep the wording identical on both so that your phone number, hours and service area stay consistent."
      ),
    ],
    faqs: [
      {
        q: "Can we see a client by video after they return to their home state?",
        a: "Only if each clinician is licensed or otherwise authorized in the state where the client sits during the session. Rules vary, so the page should not promise it. State that the practice confirms eligibility before the first video session.",
      },
      {
        q: "Should the page say the winter months are hard for some people?",
        a: "Avoid general claims about mood or how many people struggle. Describe scheduling and eligibility instead. A visitor who wants support will see that you take part year clients without being told how they feel.",
      },
      {
        q: "Do we need a separate page for each Florida city we serve?",
        a: "No. One page on how part year clients are served is enough, with your service area and office listed once. Creating a copy for every town produces near duplicate pages that rarely rank and read poorly.",
      },
      {
        q: "What should be on the booking form for seasonal clients?",
        a: "Ask only what scheduling needs: the dates the client expects to be in Florida and a phone number. Keep health details off the form, and say that the clinician will discuss goals at the first session.",
      },
      {
        q: "How do we handle a client who leaves mid course of care?",
        a: "Describe a general process: the clinician talks with the client about options, which may include a referral to a clinician where the client will be. Avoid naming outcomes or timelines, and leave the specifics to the clinician.",
      },
    ],
    citations: [LIFELINE, SAMHSA_HELP, ACA_ETHICS],
    links: [
      { href: "/guides/licensure-and-states-served-page-for-a-telehealth-counseling-practice", label: "Licensure And States Served", description: "Wording for where you may practice." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist Page For A Full Caseload", description: "When winter openings fill up." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Out of network and superbills." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1308
  {
    slug: "home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "home visits and house calls page for a primary care practice",
    category: "How-to",
    title: "Home Visits and House Calls Page for a Primary Care Practice",
    metaTitle: "Home Visit and House Call Page for Primary Care",
    metaDescription:
      "How a primary care practice can explain home visits: who qualifies, how to ask, what to expect and what it does not cover. Call (561) 291-2681.",
    answer:
      "A home visits page for a primary care practice states whether the practice makes house calls, who may ask, how to request one, which areas and days are covered, how insurance and fees work, and what to do in an emergency. It avoids clinical claims and sends urgent needs to 911.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Why families search for this"),
      p(
        "People look for home visits when getting to the office is hard: an older parent who no longer drives, a family caring for someone who is homebound, a person recovering at home who cannot manage the trip. They often search in plain words, such as doctor who makes house calls near me, and then call the first practice that answers the question."
      ),
      p(
        "If your practice offers visits at home, even rarely or for existing patients only, say so on one clear page. If it does not, a short honest page that says so and points to alternatives is still useful, because it ends a call the front desk would otherwise take."
      ),
      h2("Decide and publish the rules"),
      table(
        ["Item", "Say it plainly"],
        ["Who is eligible", "Existing patients only, or new patients too. State any limit on age or mobility in neutral words, such as patients who cannot travel to the office."],
        ["Where the practice goes", "Name the towns or a mileage limit. Do not publish a home address list or any patient detail."],
        ["How to ask", "Call the office. Say what the front desk will ask: name, date of birth, address for the visit and a callback number."],
        ["What a visit includes", "Describe the type of visit in general terms and say the clinician decides what can be done at home."],
        ["Cost and insurance", "Say that coverage for home visits depends on the plan and the visit type, and that the office can explain before scheduling."],
        ["Emergencies", "A home visit is scheduled care. Call 911 for an emergency."]
      ),
      h2("Keep clinical promises out"),
      p(
        "Do not list conditions the practice treats at home, do not say a home visit is better or faster and do not describe tests or equipment you bring. Those lines read as clinical claims and may not hold for every visit. Describe the service and its limits, and let the clinician speak to individual care."
      ),
      p(
        "If a household has more than one person receiving care, use the same wording as your [caregiver and family communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice), which explains who the office may speak with and what it needs on file."
      ),
      h2("Say what to do when home visits are not an option"),
      ul(
        "Offer a [virtual visit](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video) when it fits, with the technology steps in plain words.",
        "List [transportation and ride assistance](/guides/transportation-and-ride-assistance-information-page-for-a-primary-care-practice) options, including the building entrance and parking notes.",
        "Point to the nurse or advice line page if you offer one, and always repeat the 911 rule.",
        "Mention the [senior friendly layout](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access) of your site so a caregiver can read the page on a phone."
      ),
      h2("Make the request easy to complete"),
      p(
        "A caregiver reading this page is often busy and anxious. Put the phone number at the top as a tap-to-call link, repeat it at the bottom and keep any online form short, with name, callback number and a preferred time. Do not ask for a medical reason on a web form, and say in one line that the staff will return calls during business hours."
      ),
      h3("Check the page against Google"),
      p(
        "Add the service to your [Google Business Profile services list](/guides/google-business-profile-services-list-optimization) only if you truly provide it, and keep the hours and service area consistent with the page. A profile that advertises house calls the office does not make creates complaints and reviews that are hard to answer."
      ),
    ],
    faqs: [
      {
        q: "Should a practice that does not do home visits publish a page anyway?",
        a: "A short page can help if many callers ask. State that the practice does not make house calls, then list virtual visits, transportation help and the number to call. It saves staff time and tells searchers where to look next.",
      },
      {
        q: "Can the page list the conditions we handle at home?",
        a: "It is better not to. A list reads as a clinical claim and may not match every visit. Describe the type of visit in general terms and let the clinician decide what can be done in the home.",
      },
      {
        q: "How do we handle address privacy on the page?",
        a: "Never publish a patient's address or a route list. Say only which towns or what distance the practice covers, and collect the visit address by phone or through a secure form, not on the public page.",
      },
      {
        q: "Does insurance usually pay for home visits?",
        a: "Coverage depends on the plan and the visit type, so the page should not promise it. Say that the office can explain coverage before scheduling and link to your billing and insurance pages for more detail.",
      },
      {
        q: "Where should the page link from?",
        a: "Link it from the services menu, the virtual visits page, the senior and caregiver pages and the FAQ. Each of those readers may be searching for a way to get care without traveling, and a clear path avoids repeat calls.",
      },
    ],
    citations: [MEDICARE_COMPARE, HHS_PRIVACY, GBP_GUIDELINES],
    links: [
      { href: "/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video", label: "Virtual Visits Page", description: "What can and cannot be done by video." },
      { href: "/guides/transportation-and-ride-assistance-information-page-for-a-primary-care-practice", label: "Transportation Page", description: "Rides and parking information." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior Friendly Layout", description: "Large text and caregiver access." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1309
  {
    slug: "teachers-and-school-staff-counseling-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "teachers and school staff counseling page for a counseling practice",
    category: "How-to",
    title: "Teachers and School Staff Counseling Page for a Practice",
    metaTitle: "Counseling Page for Teachers and School Staff",
    metaDescription:
      "How a counseling practice can reach teachers and school staff with a clear page: after school hours, privacy, fees and next steps. Call (561) 291-2681.",
    answer:
      "A page for teachers and school staff tells them when the practice has after school and early appointments, how privacy works, what fees and insurance options exist, and how to book without taking time off. It describes access and logistics, not symptoms, and sends anyone in crisis to 988.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("A group with real scheduling limits"),
      p(
        "Teachers, aides, bus drivers, counselors and office staff share one scheduling problem: their day is fixed by bells and class times. They cannot step out at two in the afternoon for an appointment, and a lunch break is rarely long enough to travel to an office and back."
      ),
      p(
        "That makes them a group worth a dedicated page. The page does not need to argue that they deserve help or describe what their work is like. It needs to show, quickly, that your practice has times that fit their day."
      ),
      h2("What the page should cover"),
      table(
        ["Topic", "What to publish"],
        ["Appointment times", "List the early morning, after school and evening slots you really offer, and the last start time of the day."],
        ["Telehealth", "Say whether video sessions are available, and how a client can join from a private room at home."],
        ["Privacy", "Explain in two sentences that sessions are confidential within the limits set by law and ethics, and link to your confidentiality page."],
        ["Fees and insurance", "Link the insurance page and the fees page. Mention any employee assistance program that school district employees may have."],
        ["Booking", "Give a phone number and a short form that asks for a name, a callback number and preferred times."]
      ),
      h2("Wording to avoid"),
      p(
        "Skip phrases about burnout, exhaustion, the pressure of the job or how many educators are struggling. They read as statements about a group's health, they are hard to support and they can sound presumptuous to the reader. Describe schedule, privacy and price, then let people decide for themselves."
      ),
      p(
        "Do not use a school's name, a district logo or a photo of a classroom unless you have written permission, and do not suggest an endorsement from any school or union."
      ),
      h2("Link to the pages that answer the next question"),
      ul(
        "The [evening and weekend availability page](/guides/evening-and-weekend-appointment-availability-page-for-a-counseling-practice-serving-working-adults) for the times you really offer.",
        "The [employee assistance program page](/guides/employee-assistance-program-page-for-a-counseling-practice) if district staff can use one.",
        "The [confidentiality and its limits page](/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice) for privacy questions.",
        "The [workplace stress counseling page](/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims), which covers working professionals more broadly."
      ),
      h2("Reaching teachers where they search"),
      p(
        "Staff search on their phones, often at night or on a weekend. Make sure the page loads quickly, the booking button is visible without scrolling and the phone number is a tap-to-call link. Keep the headings as the questions people type: do you have evening appointments, is it private, what does it cost."
      ),
      p(
        "A short note near the top of the page that the office is closed on certain school breaks, and that appointments in the first weeks of a school year fill quickly, helps staff plan without implying anything about their health."
      ),
      h3("Check your Google Business Profile hours"),
      p(
        "If the page promises evening hours, the profile must show them too. A teacher who finds late appointments on your site and a five o'clock closing time on Google will assume one of them is wrong and call a different practice."
      ),
    ],
    faqs: [
      {
        q: "Should the page mention the stress of teaching?",
        a: "It is better to leave it out. Statements about stress or burnout in a group sound like health claims and may not match a reader's experience. Focus on times, privacy, cost and how to book, and let visitors set their own reasons.",
      },
      {
        q: "Can we offer a discount for teachers?",
        a: "Only if it is a real, written policy that you apply the same way to everyone who qualifies, and only after checking how it interacts with insurance contracts. Describe it plainly or leave it off the page. Never imply one is available.",
      },
      {
        q: "Is it okay to promote through schools or districts?",
        a: "Ask first. Many districts have rules about outside vendors. A page on your site is safe. Flyers, staff emails or lounge posts need approval, and an employee assistance program may be the proper route.",
      },
      {
        q: "What if a teacher worries about running into students or parents?",
        a: "The page can say that the practice keeps sessions confidential and describes its waiting area and check in process on the office page. Avoid promising that no one will ever see a client, because that cannot be guaranteed.",
      },
      {
        q: "Should this be a page or a blog post?",
        a: "A page. A permanent page can be updated each year when hours change and linked from navigation. A dated blog post fades from view and invites the same question again at the start of every school year.",
      },
    ],
    citations: [LIFELINE, NIMH_HELP, ACA_ETHICS],
    links: [
      { href: "/guides/evening-and-weekend-appointment-availability-page-for-a-counseling-practice-serving-working-adults", label: "Evening And Weekend Availability", description: "Times for working adults." },
      { href: "/guides/employee-assistance-program-page-for-a-counseling-practice", label: "Employee Assistance Program Page", description: "How EAP sessions work." },
      { href: "/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice", label: "Confidentiality And Its Limits", description: "Plain privacy wording." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1310
  {
    slug: "practice-closing-and-records-custodian-notice-for-a-counseling-practice-without-legal-advice",
    keyword: "practice closing and records custodian notice for a counseling practice",
    category: "Checklist",
    title: "Practice Closing and Records Custodian Notice for Counseling",
    metaTitle: "Practice Closing and Records Custodian Notice Guide",
    metaDescription:
      "What a counseling practice should post when it closes: the date, who holds records, how clients request them and what to update. Call (561) 291-2681.",
    answer:
      "A practice closing notice for a counseling practice gives the closing date, names who will hold client records and how to reach them, explains how clients can request records or a referral, and lists crisis resources. It also updates the website, Google profile and phone greeting so no one is left guessing.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 7,
    sections: [
      h2("The notice clients need most"),
      p(
        "When a counseling practice closes, retires or merges, clients have three urgent questions: when can I still be seen, where will my records be, and who can help me continue. A notice that answers those three in plain words prevents most of the distress and most of the angry phone calls that follow a closing."
      ),
      p(
        "This guide covers the web and listing side of a closing: what to publish and what to update. Rules on how long records must be kept, who may serve as a custodian and what clients must be told in writing come from your licensing board, your professional association and state law. Ask your attorney or board before you finalize the wording."
      ),
      h2("What the notice should say"),
      table(
        ["Item", "Plain wording"],
        ["Closing date", "The practice will see clients through Friday, March 12. After that date the office will be closed."],
        ["Who holds records", "Records will be kept securely by [name and role], who can be reached at [phone and address]."],
        ["How to ask for records", "Send a written request to the custodian, or ask your clinician at your next session. Identification is needed to protect your privacy."],
        ["How to continue care", "Your clinician will talk with you about options and can provide referrals. You can also search the directories listed below."],
        ["If you need help now", "Call or text 988 for the Suicide and Crisis Lifeline, or call 911 in an emergency."]
      ),
      h2("Name the custodian clearly"),
      p(
        "Choose the custodian before the notice goes live, and give a real phone number and mailing address that will still work after the closing. A voicemail that is full or a number tied to the office line leaves clients stuck. Our guide to a [medical records request page](/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records) shows how to word a request process, and the same structure works for counseling records."
      ),
      h2("Update every place a client might look"),
      ul(
        "Replace the home page banner and the contact page with the closing notice, and keep the page live for as long as clients may need the custodian's details.",
        "Edit the Google Business Profile: mark it permanently closed only after the final day, and put the custodian contact in the description until then. See the [permanently closed profile guide](/guides/fixing-a-google-business-profile-marked-permanently-closed-for-an-open-practice) for the opposite mistake to avoid.",
        "Change the voicemail greeting to the closing message and custodian number.",
        "Update directory listings, including [therapist directories](/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice), so they do not keep sending new inquiries.",
        "Send each current client the notice by their preferred, privacy safe channel."
      ),
      h2("Help clients transfer"),
      p(
        "A closing is also a transfer for every client. Our guide to a [client transfer notice](/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice) covers wording for a single clinician leaving, and the same principles apply: say where to go, say who can help and never list names of other clients."
      ),
      p(
        "Offer to talk with each client about a referral, and give general directories such as the SAMHSA treatment locator rather than naming a competitor. Do not ask clients to sign anything new on the website."
      ),
      h3("Keep the domain and email working"),
      p(
        "Renew the domain and keep a monitored email address for at least as long as the custodian handles requests. Our guide on [protecting your online presence when a practice changes hands](/guides/protecting-your-online-presence-when-a-medical-practice-changes-hands-or-a-provider-retires) covers accounts, logins and who should own them."
      ),
    ],
    faqs: [
      {
        q: "How far ahead should a closing be announced?",
        a: "As early as the practice can, and in line with your licensing board's guidance. Give clients time to schedule a final session, arrange a transfer and request records. Ask your board or attorney whether a minimum notice period applies.",
      },
      {
        q: "Can the notice name the clinician who will hold the records?",
        a: "Yes, if that clinician agrees and has accepted the role. Give a name or a company, a phone number and a mailing address. Never include any client information on the public page.",
      },
      {
        q: "Should we mark the Google profile closed right away?",
        a: "No. Keep it open until the final day, with an updated description and hours. Marking it closed early sends new clients to other listings and can confuse existing ones. Mark it permanently closed after the last appointment.",
      },
      {
        q: "What if we cannot reach a former client?",
        a: "Follow your board's guidance and keep a record of your attempts. The public notice helps because a client who visits the site will find the custodian's contact details, but it does not replace direct notice where the rules require it.",
      },
      {
        q: "Do we need to keep the website live after we close?",
        a: "Keep at least the closing notice live for as long as clients may ask for records. Many practices keep a one page site with the custodian's details for a year or more. Confirm the period with your attorney or board.",
      },
    ],
    citations: [HHS_PRIVACY, LIFELINE, SAMHSA_HELP],
    links: [
      { href: "/guides/client-transfer-notice-when-a-therapist-leaves-a-counseling-practice", label: "Client Transfer Notice", description: "When a therapist leaves a practice." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Records Request Page", description: "How clients ask for records." },
      { href: "/guides/protecting-your-online-presence-when-a-medical-practice-changes-hands-or-a-provider-retires", label: "When A Practice Changes Hands", description: "Accounts, logins and listings." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1321
  {
    slug: "copycat-website-or-fake-social-profile-impersonating-a-medical-practice-what-to-do",
    keyword: "copycat website or fake social profile impersonating a medical practice",
    category: "Checklist",
    title: "Copycat Website or Fake Profile Impersonating a Practice",
    metaTitle: "Copycat Website or Fake Profile Impersonating Your Practice",
    metaDescription:
      "What to do when a copycat website or fake social profile imitates your medical practice: document it, report it and tell patients. Call (561) 291-2681.",
    answer:
      "If a copycat website or fake social profile imitates your medical practice, document it with dated screenshots and web addresses, report it to the host, platform and the FTC, tell patients how to reach the real office, and keep your own listings accurate. Do not contact the operator or share any patient information.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 7,
    sections: [
      h2("What a copycat looks like"),
      p(
        "A copycat can be a website that copies your logo and wording under a slightly different domain, a social media page that uses your photos and name, or a listing on a map or directory that points to a phone number that is not yours. Some exist to collect payments, some to collect personal details and some only to capture calls that should have reached you."
      ),
      p(
        "Practices usually learn about one from a patient who says they paid a bill that the office never sent, or from a staff member who searches the practice name and notices an unfamiliar result. Treat the first report as a signal to look, not as proof, and write down who said what and when."
      ),
      h2("Document before you do anything else"),
      ol(
        "Open each page in a private browser window and take a full screenshot that shows the web address and the date on your device.",
        "Copy the exact address, the phone number, the email address and any payment instructions shown on the page.",
        "Save the page to a PDF if your browser allows it, and note the time.",
        "Look up the domain's registrar and host through a public lookup service and note the abuse contact it lists.",
        "Store everything in one folder that only the practice owner and practice manager can open."
      ),
      p(
        "Do not enter anything on the copycat site, do not call its number and do not message the operator. If a patient received a suspicious message, ask them to forward it to the office rather than sharing details by text."
      ),
      h2("Report it in the right places"),
      table(
        ["Where", "What to do"],
        ["The web host and domain registrar", "Send the abuse contact the screenshots, the addresses and a plain statement that the site imitates your practice."],
        ["The social platform", "Use the platform's report option for impersonation. Keep the confirmation."],
        ["Google", "If a fake appears in Maps or search, use the report tools in the Business Profile and search feedback links. Our guide to the [Google Business Profile suggested edits process](/guides/how-to-handle-google-business-profile-suggested-edits) explains how edits are reviewed."],
        ["The FTC", "File a report at ReportFraud.ftc.gov if money or personal information was requested."],
        ["The FBI IC3", "File at ic3.gov if patients lost money or if the activity looks like organized fraud."],
        ["Your attorney", "Ask whether a takedown letter or other step is appropriate. This guide does not give legal advice."]
      ),
      h2("Tell patients without alarming them"),
      p(
        "Publish a short notice on the real site and give the front desk a script. It should say how the office really contacts patients, what it never asks for and which web address and phone number are correct. Our guide to [scam texts and emails that impersonate a practice](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients) gives wording that fits here as well."
      ),
      p(
        "Never describe an individual patient's experience, and do not name anyone who reported the problem. If a patient may have given a card number or password to the fake, tell them to contact their bank and to report it, and ask your privacy officer to document the contact."
      ),
      h2("Strengthen your real presence"),
      ul(
        "Claim and [verify your Google Business Profile](/guides/how-to-verify-a-google-business-profile-for-a-medical-practice) and keep the address, phone and website exact.",
        "Run a [brand search audit](/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit) each quarter and look at what appears for your name.",
        "Claim your name on the main social platforms even if you do not post, so no one else can.",
        "Make sure the practice owns its domain and renewals, as covered in our guide to [who should own a practice's Google accounts and domain](/guides/who-should-own-a-medical-practices-google-accounts-and-domain)."
      ),
      h3("Keep a log"),
      p(
        "Record each report, the date, the contact and the reply. Takedowns can take days, and a log lets you follow up without starting over and gives your attorney a clean record."
      ),
    ],
    faqs: [
      {
        q: "Should we contact the person running the copycat site?",
        a: "No. Contacting the operator can warn them, lead them to move the content and expose your staff to harassment. Report to the host, the platform and the authorities instead, and let your attorney decide whether any direct step is wise.",
      },
      {
        q: "Will Google remove a fake listing quickly?",
        a: "Timing varies, and no one can promise a date. Submit the report with clear evidence, keep your own profile accurate and check back. Our guide on suggested edits explains the review process and what to document.",
      },
      {
        q: "What should the front desk say when a patient calls about it?",
        a: "Thank the caller, confirm the office's real phone number and web address, explain what the office never asks for and offer to note the report. Do not discuss other patients or confirm what the caller says they paid without checking the account.",
      },
      {
        q: "Does a copycat hurt our search rankings?",
        a: "A copycat can take attention in brand searches, but copied pages rarely outrank the original on their own. The larger risk is patient trust, which is why a clear notice and accurate listings matter more than any ranking tactic.",
      },
      {
        q: "Do we have to notify patients?",
        a: "That depends on the facts, including whether any patient data was involved, and the answer comes from your privacy officer and attorney. A plain public notice about the copycat is a good practice in any case and takes little effort.",
      },
    ],
    citations: [FTC_REPORT, IC3, GBP_GUIDELINES],
    links: [
      { href: "/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients", label: "Scam Texts And Emails", description: "What to tell patients." },
      { href: "/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit", label: "Brand Search Audit", description: "What shows when someone searches your name." },
      { href: "/guides/who-should-own-a-medical-practices-google-accounts-and-domain", label: "Who Owns The Accounts", description: "Domain and Google ownership." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1322
  {
    slug: "email-signature-and-confidentiality-footer-for-medical-practice-staff",
    keyword: "email signature and confidentiality footer for medical practice staff",
    category: "How-to",
    title: "Email Signature and Confidentiality Footer for Staff",
    metaTitle: "Email Signature and Confidentiality Footer for Staff",
    metaDescription:
      "What belongs in a medical practice staff email signature and confidentiality footer, what to leave out and how to keep it consistent. Call (561) 291-2681.",
    answer:
      "A practice staff email signature should show a name, role, practice name, phone number, website and address in a consistent format, plus a short confidentiality footer that says the message may be private and asks a mistaken recipient to notify the sender. A footer is not a safeguard by itself, and it should never replace secure messaging for health information.",
    author: "Liam Costello",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Why the signature matters"),
      p(
        "Staff emails reach patients, referring offices, vendors and insurers every day. The signature at the bottom is often the only place where a stranger sees the practice's exact name, phone number and web address. If those lines differ from person to person, the inconsistency shows up in more than email: people copy them into directories and notes, and mismatched details can find their way onto listings."
      ),
      p(
        "A standard, short signature also builds trust. A message that ends with a full name, a role and a direct phone number looks more like the practice than one that ends with a first name and a mobile number."
      ),
      h2("What to include"),
      table(
        ["Line", "Guidance"],
        ["Name and role", "Full name and job title. List licenses or credentials only as they actually appear on the license, and only for clinicians who hold them."],
        ["Practice name", "Use the exact name on your Google Business Profile and your website."],
        ["Phone", "The main office number, with a direct line only if staff actually answer it."],
        ["Website and address", "One web address, no tracking codes, and the street address if you want patients to find the office."],
        ["Hours", "Optional. If included, keep it identical to the Google profile and update it for holidays."],
        ["Reporting line", "A sentence that tells readers how to report a suspicious message pretending to be from the office."]
      ),
      h2("A short confidentiality footer"),
      p(
        "A footer can say that the message is intended for the named recipient, may contain private information, and should be deleted if it reached someone by mistake, with a request that the recipient let the sender know. Keep it to two or three sentences. Long legal blocks are rarely read and often get trimmed or break on a phone."
      ),
      p(
        "Remember what a footer cannot do. It does not make an unsecured message safe, it does not replace consent and it does not satisfy any legal requirement on its own. Ask your compliance advisor or attorney to approve the exact words, and read the HHS [HIPAA guidance for professionals](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html) for the rules that apply to your office."
      ),
      h2("What to leave out"),
      ul(
        "Anything about a patient, a diagnosis, an appointment type or a visit reason.",
        "Quotes, slogans, personal social media links and images larger than a small logo.",
        "Claims such as best, top rated or award winning that you cannot support.",
        "A scanned image of the signature block. Screen readers cannot read it, and some email programs block it.",
        "Appointment links that open a form asking for health details."
      ),
      h2("Set it up once and keep it current"),
      p(
        "Create one template and have each staff member paste it into their email program, or set it centrally if your email system allows. Our guide to [professional domain email for a practice](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) explains why every address should use the practice's own domain, which is what makes the signature credible."
      ),
      p(
        "Review the template when you change a phone number, move offices or update hours, using the same checklist you use for the rest of your listings. Our [office move checklist](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) and [NAP consistency guide](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) show what else must change at the same time."
      ),
      h3("Keep health information out of ordinary email"),
      p(
        "Tell staff in writing that patient details go through the secure portal or another approved channel, and that a mistaken email is reported to the privacy officer the same day. The signature should support that habit with a line pointing patients to the portal for private questions."
      ),
    ],
    faqs: [
      {
        q: "Does a confidentiality footer make an email HIPAA compliant?",
        a: "No. A footer is a courtesy notice. Compliance depends on how the message is sent, what it contains and the safeguards the office has in place. Use secure messaging for health information and ask a compliance advisor to review your policies.",
      },
      {
        q: "Should clinicians list every credential after their name?",
        a: "List only credentials the clinician actually holds and in the form the license uses. Do not add abbreviations that suggest more than the person has earned. When in doubt, use the title shown on the state license lookup.",
      },
      {
        q: "Can the signature include a link to book an appointment?",
        a: "Yes, if the link opens a simple scheduling page that does not ask for health details. Avoid tracking parameters in the visible text, and test the link on a phone before rolling it out to everyone.",
      },
      {
        q: "How long should the footer be?",
        a: "Two or three short sentences. A long block is skipped by readers and can push the actual message out of preview. Put the longer policy on a page of your website and link to it if you need to.",
      },
      {
        q: "Who owns the template?",
        a: "Name one person, usually the practice manager, who approves changes and sends the new version to staff. A named owner prevents the old phone number or hours from lingering in a few mailboxes for years.",
      },
    ],
    citations: [HHS_PRIVACY, HEALTHIT, FTC_REPORT],
    links: [
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Why every address should use your domain." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone identical." },
      { href: "/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page", label: "Office Move Checklist", description: "Everything to update at once." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1323
  {
    slug: "texting-between-sessions-policy-page-for-a-counseling-practice",
    keyword: "texting between sessions policy page for a counseling practice",
    category: "How-to",
    title: "Texting Between Sessions Policy for a Counseling Practice",
    metaTitle: "Texting Between Sessions Policy for a Counseling Practice",
    metaDescription:
      "How a counseling practice can explain what clients may text between sessions, response times and crisis steps in plain words. Call (561) 291-2681.",
    answer:
      "A texting between sessions policy page says which texts the practice accepts, such as scheduling, tells clients to keep clinical content out of text messages, gives realistic response times, explains how to use the secure portal, and states that texting is not for emergencies. It includes consent and opt out wording and the 988 number.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Why clients text, and why the practice needs a policy"),
      p(
        "Most clients are used to texting their dentist, their hair stylist and their friends. When they join a counseling practice, many assume the same habit works there. Some send a long message after a hard day. Some send a cancellation at midnight and expect an answer. Without a stated policy, each clinician handles it differently, and clients hear mixed messages."
      ),
      p(
        "A clear page does not make the practice cold. It makes the practice dependable, because clients learn what will be answered, when and how."
      ),
      h2("What the policy should state"),
      table(
        ["Topic", "Plain wording"],
        ["What you may text", "Scheduling, running late, confirming a time and asking the office to call you."],
        ["What not to text", "Details about your health, feelings, medications or events in your life. Use the portal or bring it to your session."],
        ["Response time", "Texts are checked during business hours and answered on the next business day. Weekends and holidays may take longer."],
        ["Emergencies", "Texting the office is not for emergencies. Call or text 988 for the Suicide and Crisis Lifeline, or call 911."],
        ["Consent", "Texting is optional. You can ask the office to stop at any time by replying STOP or telling your clinician."]
      ),
      h2("Make the boundaries kind and specific"),
      p(
        "Policies read better when they explain the reason in a sentence. Say that text messages are not private in the way a session is, that phones are shared, left on tables and read on lock screens, and that clinicians cannot respond to a clinical message in real time. A client who understands the reason is likelier to follow the rule."
      ),
      p(
        "Our guide to [appointment reminder wording for a counseling practice](/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy) covers what the office sends to clients, and this page covers what clients send back. The two should use matching language."
      ),
      h2("Point to the right channel"),
      ul(
        "The secure portal for questions about forms, billing and paperwork, as explained on the [portal login and messaging page](/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice).",
        "The office phone for changes to a session within the next 24 hours.",
        "The crisis line for any urgent need, repeated in bold at the top of the policy.",
        "The [cancellation and no show policy](/guides/cancellation-and-no-show-policy-page-for-a-therapy-practice) for what a late text means for fees."
      ),
      h2("Follow the texting rules"),
      p(
        "Texts from a business are covered by rules on consent and opt out, and your texting vendor should keep the records. The FCC explains how to [stop unwanted texts and calls](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts), and our guide to [text message marketing compliance](/guides/text-message-marketing-compliance-for-a-medical-practice) explains how consent works for practices. Ask your attorney to review the final wording."
      ),
      h3("Tell staff what to do when a client breaks the rule"),
      p(
        "Clients will sometimes text something clinical anyway. Write one short reply that every staff member can send: thank you for reaching out, text messages are not private or monitored all day, please call the office or bring this to your next session, and call 988 if you need help right now. Review any message that suggests risk with the clinician right away, and document how it was handled in the way your policies require."
      ),
    ],
    faqs: [
      {
        q: "Should clinicians text clients from personal phones?",
        a: "The safer approach is a practice-controlled number or an approved messaging tool, so records, consent and opt out are managed in one place. Ask your compliance advisor and your licensing board's guidance before allowing any personal phone use.",
      },
      {
        q: "Can the policy page promise a same-day answer?",
        a: "Avoid it. A promise of a fast reply can create a duty the office cannot keep, especially after hours. State business-hours checking and next business day replies, and make the emergency instructions impossible to miss.",
      },
      {
        q: "Do we need written consent for text messages?",
        a: "Get the client's agreement in writing at intake and record it, explain how to stop messages and honor the request promptly. Have your attorney or compliance advisor check the wording against current rules and your vendor's terms.",
      },
      {
        q: "What about group or family texts?",
        a: "Do not use group texts for clinical or scheduling matters involving more than one client. Each person should receive their own message so nobody sees another's information, and the policy can say so in one line.",
      },
      {
        q: "Where should this policy be linked?",
        a: "Link it from the new client forms, the first session page, the portal page and the footer of reminder emails. Clients are likelier to read it when the link appears at the moment they might text for the first time.",
      },
    ],
    citations: [FCC_TEXTS, HHS_PRIVACY, LIFELINE],
    links: [
      { href: "/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy", label: "Reminder Wording For Counseling", description: "What the office sends to clients." },
      { href: "/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice", label: "Portal And Messaging Expectations", description: "Secure messaging for clients." },
      { href: "/guides/text-message-marketing-compliance-for-a-medical-practice", label: "Text Message Compliance", description: "Consent and opt out basics." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1324
  {
    slug: "chaperone-policy-page-for-a-primary-care-practice",
    keyword: "chaperone policy page for a primary care practice",
    category: "How-to",
    title: "Chaperone Policy Page for a Primary Care Practice",
    metaTitle: "Chaperone Policy Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can post a clear chaperone policy: who may serve, how patients ask or decline, and what to expect. Call (561) 291-2681.",
    answer:
      "A chaperone policy page tells patients that a trained staff member is available during sensitive exams on request, that they may also bring a trusted person, how to ask for or decline a chaperone, and who to talk to with concerns. It describes the practice's process in plain words and gives no clinical advice.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("A policy patients should not have to ask about"),
      p(
        "Patients who are about to have a sensitive exam often wonder if they may ask for another person to be in the room, whether they have to accept one and who that person would be. Many feel awkward bringing it up. A page that answers in advance tells them the practice has thought about it and that the question is welcome."
      ),
      p(
        "It also protects staff and clinicians, because a written, consistent process is easier to follow than one made up at the door of the exam room."
      ),
      h2("What the page should say"),
      table(
        ["Question", "Plain answer"],
        ["Can I ask for a chaperone?", "Yes. You can ask at scheduling, at check in or at any point during the visit."],
        ["Who acts as a chaperone?", "A member of the practice's clinical team who has been trained for this role. Describe the role without naming people."],
        ["Can I bring my own person?", "Yes. You may bring a family member or friend. That person does not replace the practice's chaperone if you want one."],
        ["Can I decline one?", "Yes. If you prefer no chaperone, tell the clinician. The clinician may discuss options with you."],
        ["What if I am uncomfortable at any time?", "Say so. You can pause the exam, ask questions or ask for a different clinician when one is available."],
        ["Who do I tell if I have a concern?", "Tell the practice manager or use the contact form on the complaint page. We take every concern seriously."]
      ),
      h2("Ground it in published professional guidance"),
      p(
        "The American Medical Association's [Code of Medical Ethics opinion on chaperones](https://code-medical-ethics.ama-assn.org/ethics-opinions/use-chaperones) is a helpful public reference for the principles behind a policy. Do not quote it at length or claim that your practice meets a standard you have not checked. Ask your medical director, attorney or malpractice carrier to review the final policy before it is posted."
      ),
      h2("Keep it separate from clinical talk"),
      ul(
        "Do not list exams or conditions on the page. Describe the policy for any exam where a patient may want another person present.",
        "Do not describe what happens during an exam or imply that a chaperone is required for safety.",
        "Use calm, neutral language. Words like abuse or misconduct do not belong on a policy page.",
        "Make the page readable on a phone, with the key answers in a short table."
      ),
      h2("Where to link it"),
      p(
        "Link the page from your [what to bring to a first appointment page](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients), the new patient forms and the [patient rights and complaint process page](/guides/patient-rights-and-complaint-process-page-for-a-primary-care-practice). Patients often look in all three places."
      ),
      p(
        "If a patient has a service animal or another accommodation request, the [accommodation request page](/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice) explains how to ask, and the two pages can point to each other."
      ),
      h3("Train and document"),
      p(
        "A policy page only works if the team follows it. Hold a short staff meeting to read it aloud, agree on how a patient is offered a chaperone at check in and decide where the offer is documented, using your own record procedures. Review the wording once a year, with the rest of your patient-facing pages."
      ),
    ],
    faqs: [
      {
        q: "Does every exam need a chaperone?",
        a: "The page should not say that. It should say that a chaperone is available on request and that clinicians may offer one. Your practice's medical director and attorney decide what your internal rule is, and the public page stays simple.",
      },
      {
        q: "Should the page name the staff who serve as chaperones?",
        a: "No. Describe the role, such as a trained member of the clinical team. Names change, and naming staff on a public page raises privacy and safety concerns for them without helping the patient.",
      },
      {
        q: "Can a patient refuse a chaperone and still be seen?",
        a: "State the practice's actual rule in neutral terms, such as the clinician will talk through options with you. Have your attorney review how the policy treats a refusal before posting, and make sure staff say the same thing.",
      },
      {
        q: "Does a chaperone policy page help with search?",
        a: "It answers a real question that patients search for and gives AI answer engines a clear, sourced description of your process. It also builds trust, which matters for a decision as personal as choosing a clinician.",
      },
      {
        q: "Should the policy appear in the patient forms too?",
        a: "Yes, a short version with a link to the page. Patients who read it at check in know the choice is theirs. Keep the form wording identical to the page so staff and patients hear the same message.",
      },
    ],
    citations: [AMA_CHAPERONE, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What To Bring To A First Appointment", description: "A page for new patients." },
      { href: "/guides/patient-rights-and-complaint-process-page-for-a-primary-care-practice", label: "Patient Rights And Complaints", description: "How to raise a concern." },
      { href: "/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice", label: "Accommodation Request Page", description: "How patients ask for help." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1325
  {
    slug: "medical-student-and-trainee-observer-notice-page-for-a-primary-care-practice",
    keyword: "medical student and trainee observer notice page for a primary care practice",
    category: "How-to",
    title: "Medical Student and Trainee Observer Notice for Primary Care",
    metaTitle: "Student and Trainee Observer Notice for Primary Care",
    metaDescription:
      "How a primary care practice can tell patients about students or trainees who observe visits, and how patients can say no. Call (561) 291-2681.",
    answer:
      "A student and trainee observer notice tells patients that a student or trainee may sometimes observe a visit, that the person is introduced and bound by the practice's privacy rules, and that a patient can say no at any time without affecting care. It gives a way to ask questions before the visit.",
    author: "Liam Costello",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Surprises are the problem, not the students"),
      p(
        "Many primary care practices host students, residents, shadowing volunteers or other trainees at some point. Patients are generally fine with it when they are told clearly and asked. They are not fine when a stranger walks into the room and sits down."
      ),
      p(
        "A short page, a line on the new patient form and a verbal check from the clinician together make the process routine. The page is the part that is visible to search engines and to patients who want to know before they come."
      ),
      h2("What to publish"),
      table(
        ["Point", "Plain wording"],
        ["That it happens", "From time to time, students or trainees observe visits in our office as part of their training."],
        ["How it is handled", "The clinician introduces the person and asks for your permission before they come into the room."],
        ["Your choice", "You can say no, or ask the person to leave, at any time. Saying no will not change the care you receive."],
        ["Privacy", "Anyone who observes is required to follow the practice's privacy rules and is not permitted to share what they see or hear."],
        ["Questions", "Call the office before your visit or ask the front desk at check in."]
      ),
      h2("Be careful with names and affiliations"),
      p(
        "Do not mention a school, hospital or residency program unless the practice has an actual agreement and permission to name it, and do not imply that being a teaching site makes the practice better. Do not publish photos of trainees, and do not give names. A general statement is accurate, stable and easy to maintain."
      ),
      p(
        "The same rule applies to the clinician biography pages. If a clinician teaches or supervises trainees, say so in one factual sentence, as described in our [doctor bio page guide](/guides/how-to-write-a-doctor-bio-page-that-ranks), with no claims about outcomes."
      ),
      h2("Connect the notice to your privacy process"),
      ul(
        "Add a short line to the new patient forms and the check in checklist so patients see the notice at the right moment.",
        "Link the page from the [patient rights and complaint process page](/guides/patient-rights-and-complaint-process-page-for-a-primary-care-practice).",
        "Explain how your office handles [new patient forms online](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) so patients know where consent is recorded.",
        "Give the front desk a one sentence script and make sure they know a patient can decline at the desk."
      ),
      h2("Say what you do and do not require"),
      p(
        "Ask your attorney and privacy officer to approve the wording, particularly any line about permission, confidentiality agreements for visitors and how the practice documents a patient's choice. Federal privacy guidance, summarized in the HHS [HIPAA Privacy Rule overview](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html), is the baseline the notice should be consistent with."
      ),
      p(
        "Keep the language friendly. People are more willing to say yes when they feel a no is easy."
      ),
      h3("Review the notice each year"),
      p(
        "Programs come and go. Put a yearly reminder in your calendar to check whether the practice still hosts trainees and whether the page still describes what actually happens. If the practice stops hosting, remove the page and redirect it to your patient rights page so older links do not lead nowhere."
      ),
    ],
    faqs: [
      {
        q: "Is a posted notice enough, or do we need to ask each time?",
        a: "A page is not a substitute for asking at the visit. The clinician should still introduce the person and ask for permission. Ask your attorney and compliance advisor how your practice should document the patient's choice.",
      },
      {
        q: "Should we name the school that sends students?",
        a: "Only with the school's written agreement and permission. A general statement avoids the need to update the page when programs change and avoids implying an endorsement the practice cannot back up.",
      },
      {
        q: "Can patients decline without penalty?",
        a: "State the practice's actual policy plainly. The strongest wording is that declining does not change the care the patient receives. Make sure that is true in practice before you publish it, and tell staff to follow it.",
      },
      {
        q: "What if a patient does not want a trainee in a particular visit?",
        a: "The clinician simply continues without the observer. The page can say that patients may ask for this at any time, and that the office will respect the request without asking for a reason.",
      },
      {
        q: "Should shadowing by high school or college students be handled the same way?",
        a: "Yes. Anyone who observes is treated the same way under the practice's privacy rules. Ask your compliance advisor whether non-clinical visitors need separate forms and describe the process in the same plain terms.",
      },
    ],
    citations: [HHS_PRIVACY, AMA_CHAPERONE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/patient-rights-and-complaint-process-page-for-a-primary-care-practice", label: "Patient Rights And Complaints", description: "How to raise a concern." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "How to write one that ranks." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publish forms without exposing data." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1326
  {
    slug: "ages-seen-and-pediatric-age-range-page-for-a-family-medicine-practice",
    keyword: "ages seen and pediatric age range page for a family medicine practice",
    category: "How-to",
    title: "Ages Seen and Pediatric Age Range Page for Family Medicine",
    metaTitle: "Ages Seen and Pediatric Age Range Page for Family Medicine",
    metaDescription:
      "How a family medicine practice can state the ages it sees, from newborns to older adults, and handle the move to adult care. Call (561) 291-2681.",
    answer:
      "An ages seen page for a family medicine practice states plainly the youngest and oldest patients the practice accepts, explains how families with several ages book together, describes how a young person moves to adult care and says what to do if the practice is not the right fit. It makes no clinical claims.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("The first question many parents ask"),
      p(
        "Before a parent asks about insurance or hours, they ask whether the practice sees children, and how young. Family medicine is a broad label. One office sees newborns and grandparents on the same afternoon. Another begins at school age. A third sees adults only and prefers to say so up front. Without a clear line on the site, each of those callers uses the front desk to find out."
      ),
      p(
        "A single page that answers the question helps parents decide, helps adults who want to bring a teenager, and gives search and answer engines a precise statement to quote."
      ),
      h2("State the range and the exceptions"),
      table(
        ["Item", "What to publish"],
        ["Youngest patients", "The youngest age you accept. If newborn visits are accepted only for children of existing patients, say so."],
        ["Oldest patients", "State that adults of all ages are welcome, or the real limit if there is one."],
        ["Families", "Whether parents and children can book back to back, and whether one visit can include a sibling."],
        ["Teens and young adults", "How the practice handles the move from a pediatric approach to adult care, and at what age forms change."],
        ["Not the right fit", "Where to look when the practice cannot see a patient, with a link to a general directory."]
      ),
      h2("Do not turn age into a clinical claim"),
      p(
        "The page should say who the practice sees, not what it does for each age group. Avoid statements such as we treat childhood illnesses or we manage the health needs of older adults. Those read as service claims that should live on reviewed service pages, not on a logistics page."
      ),
      p(
        "For general information on child development, link to a trusted public source such as the American Academy of Pediatrics' [HealthyChildren.org ages and stages](https://www.healthychildren.org/English/ages-stages/Pages/default.aspx) pages, rather than writing your own guidance."
      ),
      h2("Explain the move to adult care"),
      ul(
        "Say at what age a young person is asked to sign their own forms, and when a parent's access to information changes.",
        "Explain how a teen can schedule a first visit on their own if the practice allows it.",
        "Point parents to the [adolescent visit and parent presence page](/guides/adolescent-visit-and-parent-presence-page-for-a-family-medicine-practice-without-legal-advice) for how time in the room works.",
        "Link the [family medicine versus internal medicine explainer](/guides/family-medicine-versus-internal-medicine-explainer-page-for-a-primary-care-practice) for visitors who are unsure which kind of doctor they need."
      ),
      h2("Make it work for scheduling"),
      p(
        "Link the page from the booking button and the new patient information page. The [visit types and appointment lengths guide](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website) shows how to describe family block visits, and the [well-child checkup page guide](/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims) covers younger children in more detail."
      ),
      p(
        "Repeat the age range in your Google Business Profile description in one short sentence, and keep it identical to the page. Mismatched age statements are a common reason for wasted phone calls."
      ),
      h3("Check the other directories"),
      p(
        "Healthgrades, insurance directories and hospital provider listings often carry their own age filters. Review each one when you update the page, and correct anything that no longer matches what the practice does."
      ),
    ],
    faqs: [
      {
        q: "Should we publish a youngest age if we make exceptions?",
        a: "Publish the usual rule and say that the office can discuss exceptions. A page that reads as flexible but gives a clear default saves calls. Avoid listing the circumstances that qualify, since they change and invite arguments.",
      },
      {
        q: "Do we need separate pages for children and adults?",
        a: "One ages seen page plus your service pages is enough for most practices. Duplicating the statement across many pages leads to inconsistencies. Keep one page as the source of truth and link to it.",
      },
      {
        q: "Can a young adult stay with the family's doctor?",
        a: "State your actual policy. Many family medicine practices see young people into adulthood. The page should say whether that is true here and describe what changes, such as who signs forms, without giving legal advice.",
      },
      {
        q: "What should the page say for patients over a certain age?",
        a: "If there is no upper limit, say that adults of all ages are welcome. Avoid phrases that group older adults by condition. Link to your senior friendly information if you have it, without describing health needs.",
      },
      {
        q: "Does the page need schema markup?",
        a: "Mark the page up as a normal web page with a breadcrumb and a FAQ section. The ages you accept are better placed in plain text than in custom structured data, which can fall out of date.",
      },
    ],
    citations: [HEALTHY_CHILDREN, GOOGLE_LOCAL, HHS_PRIVACY],
    links: [
      { href: "/guides/family-medicine-versus-internal-medicine-explainer-page-for-a-primary-care-practice", label: "Family Medicine Versus Internal Medicine", description: "Which kind of doctor?" },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types And Lengths", description: "Describe visits clearly." },
      { href: "/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims", label: "Well-Child Checkup Page", description: "Younger children and school age visits." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1327
  {
    slug: "social-media-and-friend-request-policy-page-for-a-counseling-practice",
    keyword: "social media and friend request policy page for a counseling practice",
    category: "How-to",
    title: "Social Media and Friend Request Policy for Counseling",
    metaTitle: "Social Media and Friend Request Policy for Therapists",
    metaDescription:
      "How a counseling practice can explain its social media policy: friend requests, reviews, direct messages and privacy, in plain words. Call (561) 291-2681.",
    answer:
      "A social media policy page for a counseling practice tells clients that clinicians do not accept friend or follow requests, why, how the practice handles direct messages and reviews, and what to do instead. It protects privacy for both sides and includes crisis resources, without legal advice.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Clients will look for their therapist online"),
      p(
        "It is natural for a client to search for a clinician's name, find an account and send a request, often without any wish to cross a line. Clinicians then face an awkward choice: ignore it and risk hurting feelings, or explain the policy one conversation at a time."
      ),
      p(
        "A short written policy shared at intake turns this into a known rule instead of a personal decision. Professional codes encourage clinicians to think carefully about online contact with clients, and a published policy shows that the practice has done so."
      ),
      h2("What the policy should cover"),
      table(
        ["Topic", "Plain wording"],
        ["Friend and follow requests", "Clinicians do not accept personal social media requests from current or former clients. This protects your privacy and the working relationship."],
        ["Direct messages", "The practice does not use social media messaging for client contact. Please use the office phone or the secure portal."],
        ["The practice's own pages", "You are welcome to follow the practice's page. Following is public, so consider your own privacy before you do."],
        ["Reviews", "Clients may write reviews if they choose. The practice does not ask for reviews in session and will not confirm or deny that anyone is a client."],
        ["Searching online", "If a clinician comes across a client's profile, they will not look further and will not bring it up unless the client does."]
      ),
      h2("Explain the reason, not just the rule"),
      p(
        "Clients accept a boundary more easily when it is explained. Say that following or friending could reveal that a person is in therapy, that social media can blur the roles of clinician and client, and that private messages cannot be monitored all day. Avoid any hint that the client did something wrong by asking."
      ),
      p(
        "The ACA and APA publish ethics codes that clinicians follow, including guidance on technology and social media. Link to the [ACA Code of Ethics](https://www.counseling.org/resources/ethics) or the relevant code for your profession, and ask your own board or association what it expects."
      ),
      h2("Handle reviews with care"),
      ul(
        "Never ask a client in session to post a review, and never offer anything in return.",
        "Reply to reviews without confirming the writer is a client, using the approach in our guide to [responding to positive reviews](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient).",
        "Do not respond to a negative review with any detail of care, as covered in the [negative review guide](/guides/how-to-respond-to-a-negative-patient-review).",
        "Keep clinicians' personal accounts private and separate from the practice page."
      ),
      h2("Where the policy should appear"),
      p(
        "Include a short paragraph in the intake packet and a link to a full page from the first session page, the portal page and the footer. The [texting policy page](/guides/texting-between-sessions-policy-page-for-a-counseling-practice) and this page should use the same tone, so clients learn all of the practice's boundaries in one consistent voice."
      ),
      p(
        "If your practice runs a public page, our guide to [social media accounts for a medical practice](/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post) explains what to post and what never to post."
      ),
      h3("Include a crisis line"),
      p(
        "A social media policy should not leave a distressed client without direction. Add one line saying that social media is not monitored for emergencies and that anyone in crisis should call or text 988 or call 911."
      ),
    ],
    faqs: [
      {
        q: "Should clinicians block clients on social media?",
        a: "Clinicians can decline requests and use privacy settings, and the policy can say so kindly. Blocking is a personal decision, and the page does not need to describe it. Ask your licensing board or association about its expectations.",
      },
      {
        q: "Can the practice message clients through social media?",
        a: "It is safer not to. Social platforms are not private in the way a secure portal is, and messages may be missed. State that the practice does not use social media for client contact and name the channels it does use.",
      },
      {
        q: "Is it okay for clinicians to have a professional page?",
        a: "Many do. A professional page should be separate from personal accounts, should not name clients and should follow the same privacy rules as the practice site. Describe it once in the policy and link to it.",
      },
      {
        q: "What if a client leaves a public comment on the practice page?",
        a: "Do not reply in a way that confirms a treatment relationship. A neutral thank you or a note to call the office is enough. Consider turning off comments or reviewing them regularly, and keep a record of how they are handled.",
      },
      {
        q: "How often should the policy be reviewed?",
        a: "Once a year and when a platform changes its features. Add a review date to your annual website checklist, along with your other client policies, and tell staff about any updates.",
      },
    ],
    citations: [ACA_ETHICS, APA_ETHICS, LIFELINE],
    links: [
      { href: "/guides/texting-between-sessions-policy-page-for-a-counseling-practice", label: "Texting Between Sessions", description: "What clients may text." },
      { href: "/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient", label: "Responding To Positive Reviews", description: "Without confirming a client." },
      { href: "/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post", label: "Social Media For A Practice", description: "What to post and what never to." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1328
  {
    slug: "session-recording-policy-page-for-a-counseling-practice",
    keyword: "session recording policy page for a counseling practice",
    category: "How-to",
    title: "Session Recording Policy Page for a Counseling Practice",
    metaTitle: "Session Recording Policy Page for a Counseling Practice",
    metaDescription:
      "How a counseling practice can state its policy on audio or video recording of sessions, whether by clients or by the practice. Call (561) 291-2681.",
    answer:
      "A session recording policy page tells clients whether they may record sessions, whether the practice ever records, what consent is required, how any recording is stored, and how to ask questions. It sets one clear rule for in-person and video sessions without giving legal advice.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("Two different questions, one policy"),
      p(
        "Clients ask about recording in two directions. Some want to record a session to listen again later. Others worry that the practice might record them, especially when sessions happen by video. A policy that answers both, in the same place, spares clients the worry and gives clinicians a written rule to point to."
      ),
      p(
        "Recording rules are tied to privacy, ethics and state law, and they can be complicated when a session crosses state lines. This guide covers how to word the page. Your attorney and licensing board decide the actual rule."
      ),
      h2("Decide the rule first"),
      table(
        ["Situation", "Common approaches to choose from"],
        ["Client wants to record", "Not allowed. Allowed with the clinician's agreement. Allowed for personal use only, with written consent."],
        ["Practice records for supervision or training", "Never. Only with written, informed consent and a clear purpose."],
        ["Video sessions", "State that the practice does not record and ask that clients do not record either."],
        ["Storage and deletion", "If recordings are ever made, say where they are kept, who can hear them and when they are deleted."],
        ["Written notes", "Clarify that clinical notes are kept in the client record and are not recordings."]
      ),
      h2("Write it plainly"),
      p(
        "A sample structure is a heading for each situation followed by one or two sentences. Start with the practice's own conduct, since that is what clients worry about most: the practice does not record sessions unless the client has given written permission for a specific purpose. Then explain what clients may do."
      ),
      p(
        "Give the reason in a sentence. Recordings can be copied, shared or stored on devices that others use, and they may change the way a session feels for the client or the clinician. If the policy forbids client recording, say it respectfully and offer an alternative such as taking notes at the end of a session or asking the clinician to summarize."
      ),
      h2("Cover video sessions"),
      ul(
        "State that the platform used for video sessions is configured not to record, and ask the client to confirm the setting if they are unsure.",
        "Ask clients to join from a private place, as described in the [telehealth consent and technology check page](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice).",
        "Explain that screenshots and screen recordings are covered by the same rule.",
        "Add a line to the [telehealth visit instructions](/guides/telehealth-visit-instructions-page-for-a-therapy-practice) so the rule appears at the moment a client logs in."
      ),
      h2("Link the policy to the rest of your paperwork"),
      p(
        "The intake packet should include a short version with a link to the full page. Our guide to the [confidentiality and its limits page](/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice) covers how to explain privacy in general, and the [first session page guide](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) shows where policy links belong."
      ),
      p(
        "Check the wording against the ethics code your clinicians follow, such as the [APA ethics code](https://www.apa.org/ethics/code), and ask your attorney to review it, especially if you serve clients in other states."
      ),
      h3("Train clinicians to answer in one sentence"),
      p(
        "A client who asks in session should hear the same answer from every clinician. Agree on a sentence, such as: our practice does not record sessions, and we ask that clients do not either, but I am glad to summarize what we covered at the end. Revisit the policy yearly."
      ),
    ],
    faqs: [
      {
        q: "Can the policy forbid clients from recording?",
        a: "Many practices do, and the page should say so kindly. Ask your attorney whether any state rule affects the wording, particularly for video sessions with clients in other states, and make sure every clinician applies it the same way.",
      },
      {
        q: "Do we need consent to record for supervision?",
        a: "Practices that record for supervision or training generally need informed written consent that names the purpose, storage and deletion. Many choose never to record. Whatever the rule, the page should match what the practice really does.",
      },
      {
        q: "What if a client says they are recording secretly?",
        a: "The clinician can restate the policy and discuss it. Document what happened according to your own procedures and ask your attorney how to respond. The public page should not describe such cases.",
      },
      {
        q: "Does the policy cover phone calls with the office?",
        a: "Be separate about this. If the office records calls for quality or training, the greeting should say so. If it does not, say that too. Keep the session policy focused on sessions.",
      },
      {
        q: "Where should we link the policy?",
        a: "From the intake forms, the telehealth page, the first session page and the footer of your appointment emails. Short links at those points make it likely that clients read the policy before their first video session.",
      },
    ],
    citations: [APA_ETHICS, ACA_ETHICS, HHS_PRIVACY],
    links: [
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent And Technology", description: "Before the first video session." },
      { href: "/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice", label: "Confidentiality And Its Limits", description: "Plain privacy wording." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page", description: "What new clients need." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1329
  {
    slug: "not-accepting-new-patients-and-waitlist-page-for-a-primary-care-practice",
    keyword: "not accepting new patients and waitlist page for a primary care practice",
    category: "How-to",
    title: "Not Accepting New Patients and Waitlist Page, Primary Care",
    metaTitle: "Closed to New Patients: Waitlist Page for Primary Care",
    metaDescription:
      "What a primary care practice should publish when its panel is full: a clear status, a fair waitlist and accurate listings. Call (561) 291-2681.",
    answer:
      "A not accepting new patients page says the practice's panel is full right now, explains how the waitlist works and what the practice will do when a spot opens, lists other ways to find care, and keeps the status the same on Google and every directory. It makes no promises about timing.",
    author: "Liam Costello",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 6,
    sections: [
      h2("A full panel still needs a page"),
      p(
        "Some primary care practices close to new patients for a while, either entirely or for certain plans. The usual result is a stream of callers who found the practice online, were told no by the front desk and left annoyed. A simple page tells those searchers the truth before they call and gives the practice a place to describe what it can still offer."
      ),
      p(
        "The page should not read as a rejection. It should read as an honest status with a path forward."
      ),
      h2("What the page should say"),
      table(
        ["Element", "Plain wording"],
        ["Current status", "We are not accepting new patients at this time. This page was last updated on [date]."],
        ["Who this affects", "Say whether it applies to everyone or only to certain plans or ages."],
        ["The waitlist", "Describe how to join, what information is collected and that joining does not guarantee a spot."],
        ["When we will contact you", "Spots open without warning. We call people in the order they joined."],
        ["Other options", "A virtual visit option if you offer one, the insurer's find a doctor tool, and the Medicare provider directory."],
        ["Current patients", "Existing patients are not affected. Call to book as usual."]
      ),
      h2("Run the waitlist fairly and keep it short"),
      p(
        "A waitlist form should ask for a name, a phone number and a preferred way to be contacted. Do not ask about health concerns or request insurance details in an open form. If you must confirm coverage, do it by phone when the spot opens."
      ),
      p(
        "Decide the rule for calling people and write it down. First in, first called is the simplest and the easiest to explain. If a family is a priority, such as a parent of an existing patient, say so in the policy rather than letting staff decide each time. Our guide to a [waitlist page for a therapy practice](/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload) covers the same mechanics for counseling."
      ),
      h2("Keep every listing in line with the page"),
      ul(
        "Update the accepting new patients attribute and the description on your Google Business Profile the day the status changes. Our guide to [keeping the status accurate across Google and directories](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) lists the places to check.",
        "Review Healthgrades, insurer directories and hospital listings, which often carry their own status.",
        "Turn off or redirect any online booking button that sends new patients to a dead end.",
        "Change the phone greeting so callers hear the status before they wait on hold."
      ),
      h2("Offer a way to get care in the meantime"),
      p(
        "Link to the [virtual visits page](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video) if you offer video visits to existing patients, and to the Medicare.gov [Care Compare tool](https://www.medicare.gov/care-compare/) for people who need to look elsewhere. Do not name competitors or recommend one practice over another."
      ),
      p(
        "For emergencies, urgent needs and after hours, repeat the 911 and urgent care guidance used on your [when to call the office versus 911 or urgent care page](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice)."
      ),
      h3("Set a date to reopen or review"),
      p(
        "A closed panel is rarely permanent. Put a monthly reminder on the practice manager's calendar to review the status, and update the date on the page each time, even when nothing changes. A page that says it was updated last spring tells visitors it may be out of date."
      ),
    ],
    faqs: [
      {
        q: "Should we remove the page when we reopen?",
        a: "Replace the content with your regular new patient information, or redirect the URL to your new patient page. A page that still says the practice is closed after it reopens costs real appointments, so schedule the change in advance.",
      },
      {
        q: "Can we accept some new patients while the panel is closed?",
        a: "Yes. Describe the exception plainly, such as newborn children of existing patients or specific plans, and keep the Google profile consistent. Avoid wording that sounds like a way around the rule.",
      },
      {
        q: "Does a closed status hurt our search visibility?",
        a: "Not directly. A clear page can prevent frustrated calls and poor reviews that come from mismatched information. The more important issue is that Google, your site and directories all say the same thing.",
      },
      {
        q: "Should we collect insurance information on the waitlist?",
        a: "Ask for it by phone when a spot opens. Keep the web form to contact details, and do not collect health information. A short form completes more often and carries less privacy risk.",
      },
      {
        q: "What if someone is in urgent need of care?",
        a: "The page should say that anyone with an urgent need should call 911 or visit urgent care, and should not wait for a waitlist call. Repeat the instruction in the phone greeting and at the top of the form.",
      },
    ],
    citations: [MEDICARE_COMPARE, GBP_GUIDELINES, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories", label: "Keep New Patient Status Accurate", description: "Across Google and directories." },
      { href: "/guides/waitlist-page-for-a-therapy-practice-with-a-full-caseload", label: "Waitlist For A Therapy Practice", description: "The counseling version." },
      { href: "/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video", label: "Virtual Visits Page", description: "What can and cannot be done by video." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1330
  {
    slug: "author-byline-and-editorial-standards-page-for-a-medical-practice-blog",
    keyword: "author byline and editorial standards page for a medical practice blog",
    category: "How-to",
    title: "Author Byline and Editorial Standards for a Practice Blog",
    metaTitle: "Author Byline and Editorial Standards Page for Blogs",
    metaDescription:
      "How a medical practice blog can show who wrote each article, how it is reviewed and updated, and what it will not claim. Call (561) 291-2681.",
    answer:
      "An author byline and editorial standards page tells readers who writes and reviews the practice's articles, how sources are chosen, how often content is updated, and what the blog will not do, such as give individual medical advice. It supports trust, search quality and answer engines without making credential claims the practice cannot prove.",
    author: "Gio LaRoche",
    publishDate: "2026-10-27T09:00:00Z",
    dateModified: "2026-10-27",
    readMinutes: 7,
    sections: [
      h2("Readers and search engines both look for who wrote it"),
      p(
        "Health content is held to a higher standard than most subjects. Readers want to know who is speaking and why they should believe it, and Google's guidance on helpful content asks publishers to show who created a page and how. A practice blog with no names and no explanation of how articles are made leaves both audiences guessing."
      ),
      p(
        "Two small additions solve most of this: a short byline on each article and one page that explains the practice's editorial standards. Neither needs to be long."
      ),
      h2("What belongs in a byline"),
      table(
        ["Part", "Guidance"],
        ["Author name", "A real person on the team, linked to a short bio page."],
        ["Role", "State the author's actual role at the practice. Do not imply clinical authority for someone who writes about marketing or operations."],
        ["Published and updated dates", "Show both, and change the update date only when the content really changed."],
        ["Reviewer", "Name a reviewing clinician only if one actually reviewed that article, and say what was reviewed. See our guide to [medically reviewed labels](/guides/medically-reviewed-by-labels-on-a-medical-practice-website)."],
        ["Sources", "List the main sources at the end, and link to them."]
      ),
      h2("What the editorial standards page should say"),
      ol(
        "Who writes: staff, clinicians or outside writers, and how they are chosen.",
        "How articles are checked: by whom, against which sources and how corrections are handled.",
        "How often content is reviewed, and what triggers an update.",
        "What the blog does not do: it does not give individual medical advice, diagnose or replace a visit.",
        "How readers can report an error, with an email address or form that someone monitors."
      ),
      p(
        "Be honest about the process. A page that describes a rigorous review that never happens is worse than a modest page that says what actually occurs. If articles are reviewed by one clinician once a year, say that."
      ),
      h2("Do not invent credentials"),
      p(
        "Only list degrees, licenses and affiliations that the person actually holds, spelled the way the license shows them. Do not add awards, rankings or association memberships you cannot document. Our [E-E-A-T guide](/guides/what-is-eeat-and-why-it-matters-for-medical-practices) explains why unverifiable claims do more harm than good, and the [doctor bio page guide](/guides/how-to-write-a-doctor-bio-page-that-ranks) shows how to word bios."
      ),
      h2("Mark it up and link it"),
      ul(
        "Add Article structured data with the author and dates, following Google's [Article markup documentation](https://developers.google.com/search/docs/appearance/structured-data/article).",
        "Link every byline to its bio page and every article to the editorial standards page in the footer or beneath the byline.",
        "Include the page in your site navigation under About, near the [about page](/guides/what-to-put-on-a-medical-practice-about-page) content.",
        "Review the page each year with your other [content update schedule](/guides/how-often-to-update-old-content-on-a-medical-practice-website)."
      ),
      h3("Handle corrections in the open"),
      p(
        "When an article contains a mistake, fix it, change the update date and add a short correction note at the bottom saying what changed. A visible correction process is one of the clearest signs that a practice takes accuracy seriously."
      ),
    ],
    faqs: [
      {
        q: "Does every blog post need a clinician reviewer?",
        a: "Not every one, but any article that touches health topics should be reviewed by a qualified person, and the byline should say so accurately. For operations or marketing articles, a staff author and a plain description of the author's role is enough.",
      },
      {
        q: "Should the practice publish a list of its sources?",
        a: "Yes, a short list at the end of each article and a general statement of source types on the standards page. Prefer government agencies, professional societies and primary sources, and avoid linking to competitors.",
      },
      {
        q: "Can we use a pen name or a team byline?",
        a: "A named person is better for trust. If the practice prefers a team byline, explain who is on the team on the editorial page. Avoid made up authors, which break trust the moment someone searches for the name.",
      },
      {
        q: "How often should dates be updated?",
        a: "Only when the content changes in a way that matters to a reader. Changing a date without a real edit misleads readers and search engines. Keep a record of what changed so you can show it if asked.",
      },
      {
        q: "Does this help with AI answer engines?",
        a: "Clear authorship, dates and sources make it easier for answer engines to judge and cite a page. No one can guarantee a citation, but pages that show who wrote them and how are easier to trust and quote.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GOOGLE_ARTICLE, HHS_PRIVACY],
    links: [
      { href: "/guides/medically-reviewed-by-labels-on-a-medical-practice-website", label: "Medically Reviewed Labels", description: "Using review labels honestly." },
      { href: "/guides/what-is-eeat-and-why-it-matters-for-medical-practices", label: "What Is E-E-A-T", description: "Why trust signals matter." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "How to write one that ranks." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
