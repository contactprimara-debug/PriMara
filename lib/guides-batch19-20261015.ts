// -- Guides batch 19 - 2026-10-15 --
// Guide/AEO pages from the Command Center queue (rows 955, 957, 961-963, 994-1003), built by the page factory to
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
const HHS_TRACKING = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Online tracking technologies guidance for HIPAA covered entities",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
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
const GA4_EVENTS = {
  publisher: "Google Analytics Help",
  label: "Set up events in Google Analytics 4",
  href: "https://support.google.com/analytics/answer/9322688",
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

export const guidesPartTwentyTwo: Guide[] = [
  // ---------------------------------------------------------------- 955
  {
    slug: "open-enrollment-season-update-for-a-medical-practice-insurance-pages-and-patient-messages",
    keyword: "open enrollment season update for a medical practice insurance pages and patient messages",
    category: "Checklist",
    title: "Open Enrollment Season Update for a Medical Practice: Insurance Pages and Patient Messages",
    metaTitle: "Open Enrollment Update for a Medical Practice",
    metaDescription:
      "A fall checklist for keeping a medical practice's insurance page, profile and patient messages accurate during open enrollment. Call (561) 291-2681.",
    answer:
      "During open enrollment, patients change plans and then search for who takes them. Update your accepted-insurance page with a visible last-checked date, make the Google profile and directory listings match, and give the front desk one approved script. Do not promise coverage for any specific plan; send patients to their insurer to confirm.",
    author: "Liam Costello",
    publishDate: "2026-10-15T09:00:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("Why this season changes your phone calls"),
      p(
        "Every fall, millions of people choose a new health plan or confirm an old one. Medicare's annual enrollment window runs from October 15 to December 7, and most Marketplace plans open for enrollment around November 1, though dates can shift from year to year. The weeks after those windows are when your front desk hears the same question over and over: do you take my new plan?"
      ),
      p(
        "A practice that has an accurate insurance page, a matching Google profile and a calm script turns those calls into booked visits. A practice that has three different answers in three different places turns them into frustration and a one-star review about billing."
      ),
      h2("A five-step update, in the order that matters"),
      ol(
        "Ask your billing lead which plans and networks you are contracted with as of today, in writing. Do not copy last year's list.",
        "Update the accepted-insurance page and put a plain last-checked date near the top.",
        "Make the Google Business Profile, Apple Maps, Bing Places and the main directories say the same thing.",
        "Give the front desk one approved sentence for plan questions and one for plans you do not accept.",
        "Set a calendar reminder to review everything again in mid-January, once the enrollment rush has settled."
      ),
      p(
        "The full method for building that page is in our guide on [how to build an accepted-insurance page for a medical practice](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice), and the steps for contract changes are in our checklist on [what to update when a practice joins or leaves an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network)."
      ),
      h2("What the page should say, and what it should not"),
      table(
        ["Say this", "Not this"],
        ["We are in network with these insurers. Last checked on the date shown.", "We accept all major insurance."],
        ["Plan names change every year. Please call your insurer to confirm we are in network for your plan.", "We take your plan. (Said before anyone has checked.)"],
        ["If your plan is not listed, call us and we will explain self-pay options.", "No exceptions. (Or any pressure to switch plans.)"],
        ["We cannot advise you on which plan to choose.", "Our practice recommends this plan."]
      ),
      p(
        "Naming a plan you have not verified is the quickest route to an angry patient and a billing dispute. If a plan family has several products with different networks, list the family and tell patients to confirm the specific product with their insurer."
      ),
      h3("Keep marketing and advice separate"),
      p(
        "A medical practice is not an insurance broker. Avoid telling people which plan to buy, and avoid comparing plans. Describe your own network status and nothing else. Our overview of [healthcare ad compliance](/guides/healthcare-ad-compliance-checklist) covers the line between informing patients and steering them."
      ),
      h2("The patient message for this season"),
      p(
        "A short note to existing patients, sent by email or posted on the website and the Google profile, is enough. Say that plans often change in the fall, that the accepted-insurance page was updated on a stated date, and that patients should confirm network status with their insurer before booking. Do not mention anyone's coverage, diagnosis or visit history, and send the same message to everyone."
      ),
      ul(
        "A one-line banner on the insurance page that links to the full list.",
        "A Google Business Profile post with the same wording and a link to the page.",
        "A front desk sheet with the approved answers beside the phone.",
        "An update to the profile's Q&A if a plan question already appears there."
      ),
      h2("Check what patients actually see"),
      p(
        "Search for your practice name plus the word insurance on a phone, as a new patient would. Look at the knowledge panel, the directory listings and the first result. Any listing that names a plan you dropped, or leaves out one you added, is the next fix."
      ),
    ],
    faqs: [
      {
        q: "When does open enrollment start?",
        a: "Medicare's annual enrollment period runs from October 15 to December 7. Most Marketplace plans open around November 1. Dates can change, so check the official sites each year before you publish anything.",
      },
      {
        q: "Should our insurance page list every plan we accept?",
        a: "List the insurers you have verified as in network and add a last-checked date. For insurers with many products, tell patients to confirm their specific plan with the insurer before booking.",
      },
      {
        q: "Can we tell patients which plan is best?",
        a: "No. A practice is not a broker. Describe your own network status and send plan-choice questions to the insurer, the Marketplace or an enrollment counselor.",
      },
      {
        q: "How do we tell patients that we dropped a plan?",
        a: "Say it plainly on the page, update the profile and directories on the same day, and give the front desk a script that mentions self-pay options and referral to the insurer for in-network choices.",
      },
      {
        q: "How often should the insurance page be reviewed?",
        a: "At least each fall and each time a contract starts or ends. Put a recurring review on the calendar, and update the visible last-checked date whenever the list is confirmed.",
      },
    ],
    citations: [
      { publisher: "Medicare.gov", label: "Medicare enrollment information", href: "https://www.medicare.gov/" },
      { publisher: "HealthCare.gov", label: "Health insurance Marketplace", href: "https://www.healthcare.gov/" },
      FTC_ADS,
    ],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted-Insurance Page", description: "Build the page patients look for first." },
      { href: "/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network", label: "Network Changes", description: "What to update when a contract starts or ends." },
      { href: "/guides/billing-and-payment-questions-page-for-a-medical-practice", label: "Billing Questions Page", description: "Answer payment questions before the call." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 957
  {
    slug: "patient-satisfaction-survey-invitation-for-a-medical-practice-without-collecting-health-details",
    keyword: "patient satisfaction survey invitation for a medical practice without collecting health details",
    category: "How-to",
    title: "Patient Satisfaction Survey Invitation for a Medical Practice Without Collecting Health Details",
    metaTitle: "Patient Survey Invitation Without Health Details",
    metaDescription:
      "How a medical practice can invite patients to a short satisfaction survey that asks about service, not health. Call (561) 291-2681.",
    answer:
      "A patient survey invitation should ask about the experience of the office, such as scheduling, waiting and courtesy, and never about conditions, treatments or results. Send the same invitation to every patient, keep the questions to five or fewer, and do not use survey answers to decide who is asked to leave a public review.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T09:20:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("What a survey is for, and what it is not for"),
      p(
        "A short survey tells a practice what it cannot see from the front desk: where the wait felt long, which step of booking confused people, whether the parking instructions made sense. That is operational feedback, and it improves the next visit. It is not a marketing screening tool and it is not a clinical questionnaire. A monthly [patient newsletter that carries no health details](/guides/patient-newsletter-for-a-medical-practice-without-health-details) is one more place to invite feedback, as long as the link goes to a short survey that collects no health information."
      ),
      p(
        "Keeping those two things apart is the whole job. The moment a survey asks how a patient feels about their treatment, you are collecting health information through a tool that may not be built for it. The moment it routes happy patients to a review site and unhappy patients to a private form, you are gating reviews."
      ),
      h2("Questions that are safe to ask"),
      ul(
        "How easy was it to book your appointment?",
        "Was the check-in process clear?",
        "How long did you wait compared to what you expected?",
        "Did the staff treat you with courtesy?",
        "Is there anything we could do to make the next visit easier?"
      ),
      p(
        "Every one of those can be answered without mentioning a condition. The last question is an open box, and that is where patients sometimes volunteer details. Add a line above it that says please do not include health information, and tell staff to move any such comment to a secure channel."
      ),
      h2("Questions to leave out"),
      table(
        ["Leave out", "Why"],
        ["Visit reason, diagnosis, medication or test names", "Turns a service survey into a health record."],
        ["Did your treatment work?", "Invites outcome claims and clinical detail."],
        ["Would you recommend us? Yes goes to Google, No goes to a private form", "Review gating, which Google and the FTC discourage."],
        ["Date of birth, insurance number or full name", "Identifies the patient and is not needed for service feedback."]
      ),
      h3("The invitation itself"),
      p(
        "Keep the message to three sentences. Thank the patient, say the survey takes about two minutes and covers the office experience only, and give a link. Add the front desk number for anyone who prefers to give feedback by phone. Do not mention the visit type in the message or the link text."
      ),
      h2("Handling the data responsibly"),
      p(
        "Check where the responses are stored and who can read them. If the survey tool will receive anything that could identify a patient together with their visit, talk to your compliance lead about whether a business associate agreement is needed, since HHS treats vendors that handle protected information on a practice's behalf as business associates. The simplest route is an anonymous survey with no names, no visit dates and no health fields."
      ),
      p(
        "Review results as a group once a month rather than reading single responses in isolation. Look for repeated themes, fix one thing, and tell patients what changed. A small, visible fix does more for retention than any rating."
      ),
      h2("How this connects to reviews"),
      p(
        "A survey and a review request are separate messages. If you also invite reviews, send that invitation to everyone, and read our guide on [getting more patient reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating) so the two programs never feed each other. Answer public reviews with the same care described in how to [respond to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review)."
      ),
      h2("A simple monthly routine"),
      p(
        "Pick one day each month to review the results with the practice manager and the front desk lead. Write down the two most common comments, choose one that can be fixed without cost, and assign it to a named person. When it is fixed, post a short note in the waiting room or on the website saying what changed. This closes the loop for patients, who rarely hear what happened to their feedback, and it gives staff a reason to take the survey seriously."
      ),
      p(
        "Archive each month's summary rather than the raw answers. A one-page summary with counts and themes is enough to show a trend over a year, and it keeps the amount of stored feedback small."
      ),
    ],
    faqs: [
      {
        q: "Is it okay to survey patients by email?",
        a: "Yes, if patients agreed to receive email from the practice and the message contains no health details. Keep the invitation generic, include an unsubscribe line and send it to every patient, not a chosen few.",
      },
      {
        q: "Do survey answers count as protected health information?",
        a: "They can, if they are linked to an identifiable patient and a visit. An anonymous survey about service, with no names or visit details, keeps the risk low. Ask your compliance lead when in doubt.",
      },
      {
        q: "How many questions should a survey have?",
        a: "Five or fewer. Short surveys get finished, and most practices only need to know about booking, check-in, waiting and staff courtesy.",
      },
      {
        q: "Can we send happy survey respondents to Google?",
        a: "No. Sending only satisfied patients to a public review page is review gating. Invite every patient to review in a separate message that does not depend on survey answers.",
      },
      {
        q: "How often should we run a survey?",
        a: "Many practices run a short one continuously and review the results monthly. A fixed quarterly burst also works. Whatever you choose, change something after each review so patients see that it matters.",
      },
    ],
    citations: [HHS_PRIVACY, FTC_REVIEWS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Patient Reviews", description: "Ask every patient, filter none." },
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Negative Reviews", description: "Reply without exposing patient details." },
      { href: "/guides/after-visit-follow-up-emails-for-a-primary-care-practice-without-health-details", label: "After-Visit Emails", description: "Follow-ups that stay free of health details." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 961
  {
    slug: "associate-and-pre-licensed-clinician-disclosure-page-for-a-counseling-practice",
    keyword: "associate and pre-licensed clinician disclosure page for a counseling practice",
    category: "Checklist",
    title: "Associate and Pre-Licensed Clinician Disclosure Page for a Counseling Practice",
    metaTitle: "Pre-Licensed Clinician Disclosure Page",
    metaDescription:
      "How a counseling practice can tell clients clearly when a clinician is pre-licensed and supervised, without inventing credentials. Call (561) 291-2681.",
    answer:
      "A disclosure page should say plainly which clinicians are fully licensed and which are pre-licensed or registered interns working under supervision, name the supervisor, state what title each person may use, and explain fees. Use only the titles each board allows, and never imply that a trainee holds a license they have not earned.",
    author: "Liam Costello",
    publishDate: "2026-10-15T09:40:00Z",
    dateModified: "2026-10-16",
    readMinutes: 6,
    sections: [
      h2("Why clients need to be told, and where"),
      p(
        "Many group practices see clients with a mix of licensed clinicians and pre-licensed ones who are completing supervised hours toward a license. Both are legitimate. What a client cannot do is choose well if they are not told which is which, and a website that blurs the difference creates a trust problem and, in some states, a compliance problem."
      ),
      p(
        "In Florida, for example, clinicians who have not yet reached full licensure in clinical social work, marriage and family therapy or mental health counseling practice as registered interns under a qualified supervisor. The state board that oversees those professions publishes its own rules, and your page should mirror them rather than paraphrase from memory. Counselors who serve veterans and military families can use [a respectful page for veterans and military families](/guides/veterans-and-military-families-page-for-a-counseling-practice-without-clinical-claims) to state their experience and coverage accurately."
      ),
      h2("What to put on the page"),
      ul(
        "A short, plain explanation of the difference between a licensed clinician and a pre-licensed or registered intern.",
        "Each clinician's name, the title the board allows them to use, and their license or registration status exactly as it appears in the state record.",
        "The name of the supervising clinician for each intern, and how the supervision works at a general level.",
        "The fee for each level of clinician, if fees differ, and whether insurance panels accept sessions with interns.",
        "A line telling clients they may ask any clinician about their training, and may ask to be seen by a licensed clinician instead."
      ),
      h3("Titles are not interchangeable"),
      p(
        "Copy the title from the licensing record, not from a résumé. A registered intern should not be introduced with a title that implies full licensure, and a bio page should not borrow words like therapist in a way that hides the status. When in doubt, add the word intern or pre-licensed beside the name, and link to the state verification page so a reader can check."
      ),
      h2("A simple layout that reads well"),
      table(
        ["Section", "What it contains"],
        ["Short introduction", "Two sentences on licensed versus pre-licensed clinicians."],
        ["Licensed clinicians", "Name, title, license type, link to the bio."],
        ["Pre-licensed clinicians", "Name, registration type, supervisor, link to the bio."],
        ["Fees and insurance", "A short table or link to the fees page."],
        ["Questions", "Phone number and a line inviting clients to ask about training."]
      ),
      p(
        "Put the clinicians first and the explanation second, as a client would expect. A person looking for a counselor wants to see faces and names before reading anything else. Our article on [what to put on a first-session page for a therapy practice](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) shows the same order of information."
      ),
      h2("Keep the rest of the site consistent"),
      p(
        "The disclosure only works if every other page agrees with it. Check the clinician bios, the Google Business Profile, directory profiles and any insurance-panel listings. A trainee who appears on a directory with no mention of supervision undoes the page's honesty. Our guide on [fees, sliding scale and superbills](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) explains how to describe price differences without sounding like a discount. A fees page is stronger when it links to [a plain-language good faith estimate page for self-pay clients](/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice), which tells uninsured clients how to ask for an estimate."
      ),
      p(
        "Review the page whenever someone is licensed, leaves, or changes supervisor, and remove the pre-licensed label only after the board record shows the change. The date of the last review belongs at the bottom of the page. Never promise results or compare levels of clinician quality; the honest difference is training stage and fee, nothing more."
      ),
      h2("Common mistakes to avoid"),
      ul(
        "Listing a trainee under a title copied from a licensed colleague.",
        "Leaving an intern on a directory profile with no mention of supervision.",
        "Publishing a supervisor's name without checking that they still supervise.",
        "Hiding the fee difference in a footnote instead of on the fees page.",
        "Updating the website but forgetting the insurance panel profile."
      ),
      p(
        "A quick audit once a quarter, comparing each clinician's website bio, Google profile, directory entries and the state record, catches nearly all of these. Assign the audit to one person and keep the checklist short enough to finish in an hour."
      ),
    ],
    faqs: [
      {
        q: "Are pre-licensed clinicians allowed to see clients?",
        a: "Yes, under supervision, according to each state's rules. The practice must follow its board's requirements and tell clients who is supervising and what the clinician's status is.",
      },
      {
        q: "Can we use the word therapist for an intern?",
        a: "Only if the board allows that usage for their registration. When in doubt, use the exact title from the licensing record and add intern or pre-licensed beside the name.",
      },
      {
        q: "Do insurance plans cover sessions with interns?",
        a: "It depends on the plan and the practice's contracts, so do not assume. State clearly on the page whether insurers are billed for intern sessions, and tell clients to ask their insurer.",
      },
      {
        q: "Should we publish the supervisor's name?",
        a: "Yes. Naming the supervising clinician is a plain way to show accountability, and it lets a client verify the supervisor's license in the state record.",
      },
      {
        q: "What if a client wants a licensed clinician instead?",
        a: "Say on the page that this is welcome. Offer to match them with a licensed clinician when the schedule allows and explain any fee difference openly.",
      },
    ],
    citations: [FL_MENTAL, { publisher: "American Psychological Association", label: "Ethical principles of psychologists and code of conduct", href: "https://www.apa.org/ethics/code" }, FTC_ADS],
    links: [
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First-Session Page", description: "What new clients want to know first." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Describe fees without confusion." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Clinician Bio Pages", description: "Bio pages that earn trust and rank." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 962
  {
    slug: "new-location-or-satellite-office-announcement-page-for-a-medical-practice",
    keyword: "new location or satellite office announcement page for a medical practice",
    category: "Checklist",
    title: "New Location or Satellite Office Announcement Page for a Medical Practice",
    metaTitle: "New Office Announcement Page for a Practice",
    metaDescription:
      "How a practice can announce a new or satellite office on its site, Google profile and directories. Call (561) 291-2681.",
    answer:
      "Announce a new office with its own page that gives the address, opening date, hours, phone, parking and which services are offered there. Create the Google profile only once staffed hours exist, keep the original office's details unchanged, and link the two pages to each other so patients and search engines can tell them apart.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T10:00:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("The announcement is a page, not just a post"),
      p(
        "When a practice opens a second office, the first instinct is a social post and a banner. Both fade within a week. The page is what remains: it is where a patient lands from a map, where Google reads the address, and where the front desk sends callers who ask where the new office is."
      ),
      p(
        "A good announcement page answers practical questions in the order a patient asks them. Where is it, when does it open, which doctors or clinicians are there, and is it different from the office I already know?"
      ),
      h2("What the page needs"),
      ul(
        "The full street address with suite, written exactly as it will appear on the Google profile.",
        "The opening date and the first day appointments are available, with a note on how to book before then.",
        "Hours, phone number and parking or entrance details, using the same wording you use for the original office.",
        "Which providers and services are offered at this office, and which are only offered at the original one.",
        "A link to the original office page and a short sentence explaining how the two offices relate."
      ),
      p(
        "Keep the original office untouched. Changing its name, address or number to make room for the new one is the most common way a second location damages the first. Treat the new office as its own entity from day one."
      ),
      h2("The Google profile comes second"),
      p(
        "A separate Google Business Profile for the new office is allowed only when the location is staffed during stated hours and can serve customers in person, according to Google's guidelines. A coming-soon location without a staffed address does not qualify, so wait for the opening week before you create it. Once it exists, verify it, add hours, categories and photos, and make sure the website link points to the new page rather than the home page."
      ),
      h3("A short timeline that works"),
      table(
        ["When", "What to do"],
        ["Two to four weeks before opening", "Publish the announcement page with an expected opening date and booking instructions."],
        ["Opening week", "Create and verify the Google profile, update directories and add the address to schema."],
        ["First month", "Post one photo update, add a Q&A about the new office and check that the phone number rings correctly."],
        ["After 90 days", "Review calls, direction requests and any confusion between the two offices."]
      ),
      h2("Schema, directories and consistency"),
      p(
        "Add structured data for the new office with its own name, address and phone number, and keep the original office's data separate. If you run several offices, the playbook in our guide on [multi-location medical practice SEO](/guides/multi-location-medical-practice-seo-playbook) explains how to structure the pages and profiles so they do not compete. Then run through the same list we use for a move: [update every listing and page](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page), but add the new details rather than replacing the old ones."
      ),
      p(
        "Tell your front desk about the change before the public hears. Staff should be able to say the new address, the opening date and what is different, in one breath. Update the phone menu if callers need to choose an office, and read [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) before you change it."
      ),
      h2("Questions the front desk should be ready for"),
      ul(
        "Is the new office part of the same practice, or a different one?",
        "Can I see my usual provider there, and on which days?",
        "Which services are offered at each office?",
        "Will the phone number or the patient portal change?",
        "Where do I park, and is the entrance accessible?"
      ),
      p(
        "Write the answers down before the announcement goes live and keep them beside the phone. If an answer depends on a decision not yet made, say that it will be shared once confirmed rather than guessing. Patients accept a promise to confirm far more readily than a wrong answer repeated by three different people."
      ),
    ],
    faqs: [
      {
        q: "Can we create the Google profile before the office opens?",
        a: "Google expects a business to be staffed during stated hours at the address. Wait until the office can serve patients in person, then create and verify the profile to avoid suspension or rejection.",
      },
      {
        q: "Should the new office share the main website?",
        a: "Usually yes. One site with a dedicated page for each office keeps the practice's authority in one place and makes it easier for patients to compare locations.",
      },
      {
        q: "What if only some services are offered at the new office?",
        a: "Say exactly which ones. A patient who drives to the wrong office for a service that is not offered there is a bigger problem than a shorter service list.",
      },
      {
        q: "Do we need a separate phone number?",
        a: "A separate local number makes tracking and routing simpler, but it is not required. Whichever you choose, use the same number on the page, the profile and the directories.",
      },
      {
        q: "How should we announce the office to existing patients?",
        a: "Send a short, general email or post with the address, opening date and page link. Do not include anything about individual patients, and send it to everyone on the list.",
      },
    ],
    citations: [GBP_GUIDELINES, { publisher: "Google Search Central", label: "Local business structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/local-business" }, FTC_ADS],
    links: [
      { href: "/guides/multi-location-medical-practice-seo-playbook", label: "Multi-Location Playbook", description: "Structure several offices without overlap." },
      { href: "/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page", label: "Office Move Checklist", description: "Every listing to update after a move." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone identical." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 963
  {
    slug: "wait-times-and-schedule-availability-messaging-on-a-medical-practice-website-without-promises",
    keyword: "wait times and schedule availability messaging on a medical practice website without promises",
    category: "How-to",
    title: "Wait Times and Schedule Availability Messaging on a Medical Practice Website Without Promises",
    metaTitle: "Wait Time and Availability Messaging Without Promises",
    metaDescription:
      "How a medical practice can describe appointment availability and typical waits honestly, without promises it cannot keep. Call (561) 291-2681.",
    answer:
      "Describe availability with measured, dated statements such as typical days to the next new-patient visit, not guarantees like same-day appointments always. Update the figure on a schedule, say how patients can get seen sooner, and avoid claims about waiting times that the office cannot support with its own schedule data.",
    author: "Liam Costello",
    publishDate: "2026-10-15T10:20:00Z",
    dateModified: "2026-10-19",
    readMinutes: 6,
    sections: [
      h2("Patients search for speed, and practices overpromise"),
      p(
        "Many searches that end in a booked visit include words like soon, today or this week. A practice that can answer honestly has an advantage, and a practice that answers with a promise it cannot keep earns a bad review and a lost patient. The skill is to say something useful without turning availability into a guarantee."
      ),
      p(
        "The Federal Trade Commission expects advertising claims to be truthful and backed by evidence. A line such as no waiting is an objective claim, and if the waiting room is full on Monday mornings it is a liability. Describing what usually happens, with a date, stays on the right side of that line."
      ),
      h2("Three kinds of statement, from safest to riskiest"),
      table(
        ["Kind of statement", "Example"],
        ["Process", "Call before 10 a.m. and we will tell you whether a same-day visit is open."],
        ["Measured and dated", "As of this month, new patients are usually seen within about two weeks."],
        ["Guarantee", "Same-day appointments always available. (Avoid.)"]
      ),
      p(
        "Use the first two and avoid the third. The first describes the steps, which rarely change. The second is a real figure from your own scheduling system that you refresh on a set day."
      ),
      h2("How to produce an honest number"),
      ol(
        "Pull the next-available date for a new-patient visit from your scheduling system on the same day each month.",
        "Calculate the median over the past month rather than the best day.",
        "Round to a simple range, such as one to two weeks, so small swings do not force a rewrite.",
        "Publish the range with the month and the words typically or usually.",
        "Reset the number whenever a provider joins, leaves or goes on leave."
      ),
      h3("Say how to be seen sooner"),
      p(
        "A wait is easier to accept when there is a next step. List the options a patient has: a cancellation list, a nurse practitioner or physician assistant visit, a telehealth slot, or a different office. Our guide on [getting found for same-day and walk-in visits](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) covers how to describe those options in a way that matches what happens in real life. Honest availability messaging works best alongside a page on [when to call the office versus 911 or urgent care](/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice), which tells patients where to go when waiting is not an option."
      ),
      h2("Where the message should appear"),
      p(
        "Put the main statement near the booking button and again on the contact page. Repeat a short version on the Google Business Profile in the description or a post, using the same wording, and have the phone greeting say nothing the page does not. If the number differs between places, patients trust none of them."
      ),
      ul(
        "Appointment page: the dated range and the call-first option.",
        "Contact page: hours, phone and the cancellation-list invitation.",
        "Google profile: one sentence, matching the website.",
        "Phone greeting: a short pointer to the website for the current estimate."
      ),
      h2("What to leave out"),
      p(
        "Skip live wait-time tickers unless your system truly updates them, skip words like instant and immediate, and never imply that a faster appointment means a better outcome. Our overview of [how to explain visit types and appointment lengths](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website) shows how to tell patients what to expect without promising anything about results."
      ),
      h2("A short monthly routine"),
      p(
        "Set a reminder for the first working day of each month. Check the next-available date for a new patient and for an established patient, compare it with last month, and edit the range on the page only if it has moved by more than a few days. Change the month beside the figure even if the range stays the same, so the page shows it was checked. Share the figure with the front desk so the answer on the phone and the answer online agree."
      ),
      p(
        "If reviews start to mention waits, treat them as information. A pattern of comments about Monday mornings is a reason to change the schedule or the message, not to argue with the comments."
      ),
    ],
    faqs: [
      {
        q: "Can we say we offer same-day appointments?",
        a: "Only if it is true most of the time and you describe it as availability, not a promise. For example, say that same-day visits are sometimes open and ask patients to call early in the day.",
      },
      {
        q: "How often should the wait figure be updated?",
        a: "Monthly is a good default, and also whenever staffing changes. Put the month beside the figure so a patient knows how fresh it is.",
      },
      {
        q: "Is it risky to publish an average wait in the waiting room?",
        a: "Publishing a typical figure is fine if it reflects your data. The risk comes from absolute claims or numbers you do not measure. Keep the wording measured and dated.",
      },
      {
        q: "Should the Google profile mention availability?",
        a: "A single sentence in the description or a post can, as long as it matches the website and does not guarantee anything. Avoid stuffing keywords such as urgent or emergency into the business name.",
      },
      {
        q: "What if our wait is long?",
        a: "Say so honestly and offer ways to be seen sooner. Patients forgive a long wait that is explained far more easily than a short one that was promised and missed.",
      },
    ],
    citations: [FTC_ADS, GOOGLE_HELPFUL, GBP_GUIDELINES],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Same-Day Visits", description: "Describe same-day options honestly." },
      { href: "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website", label: "Visit Types and Lengths", description: "Tell patients what to expect." },
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling", description: "Booking on your site and in search." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 994
  {
    slug: "responding-to-positive-google-reviews-without-confirming-someone-is-a-patient",
    keyword: "responding to positive google reviews without confirming someone is a patient",
    category: "How-to",
    title: "Responding to Positive Google Reviews Without Confirming Someone Is a Patient",
    metaTitle: "Replying to Positive Reviews Without Confirming Patients",
    metaDescription:
      "How a medical practice can thank a reviewer publicly without confirming they were a patient or revealing any health detail. Call (561) 291-2681.",
    answer:
      "Thank the reviewer in general terms, do not confirm that they were a patient, do not mention the visit, the provider's treatment or any health detail, and invite them to call the office for anything personal. A reply is public, and even a warm one can disclose protected information if it confirms who was seen.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T10:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("A happy review is still a privacy risk"),
      p(
        "Most advice about review replies focuses on angry reviewers. The quiet risk is the five-star review, because the temptation to answer warmly is strong. A reply that says we are so glad your knee feels better, or it was a pleasure to see you for your anxiety last Tuesday, has just told the world that this person was a patient and why."
      ),
      p(
        "The reviewer may have chosen to share their story. That does not give the practice permission to confirm it. Federal regulators have taken enforcement action against practices that answered online reviews with details of a patient's care, and the lesson from those cases is simple: the patient can talk about their visit, and the practice should not."
      ),
      h2("What a safe reply contains"),
      ul(
        "A thank-you that could be sent to anyone, with no reference to a visit, a date, a provider's work or a condition.",
        "Gratitude for the feedback itself, such as appreciating the time it took to write.",
        "An invitation to contact the office directly for anything personal, with a phone number.",
        "The practice name, not a staff member's personal account, as the sender."
      ),
      h3("Sample replies you can adapt"),
      p(
        "Thank you for taking the time to share your thoughts about our office. We appreciate hearing from the people who find us, and your kind words mean a lot to our team. If there is anything we can do, please call us at the number on our profile."
      ),
      p(
        "Notice what is missing: no thank you for trusting us with your care, no mention of the provider, no reference to returning. Those phrases all quietly assume the reviewer was a patient."
      ),
      h2("Say it, or leave it unsaid"),
      table(
        ["Do not write", "Write instead"],
        ["Glad we could help with your diagnosis.", "Thank you for your kind words."],
        ["We look forward to your next appointment.", "We appreciate you taking the time to write."],
        ["Dr. Smith loved treating you.", "We will share your comments with our team."],
        ["Thanks for choosing us for your child's care.", "Thank you for your feedback about our office."]
      ),
      p(
        "Train everyone who can post on the profile to use a short approved set of replies. A shared document with five templates is enough. The aim is a fast, consistent voice, so no one is tempted to improvise at the end of a long day."
      ),
      h2("Public reply, private follow-up"),
      p(
        "If a reviewer includes a question or a concern, keep the public reply general and move the conversation to a phone call. Never ask them to confirm identity in the public thread. Our guide on [how to respond to a negative patient review](/guides/how-to-respond-to-a-negative-patient-review) explains the same principle for harder cases, and the HHS guidance on marketing and privacy sets the rules your replies must follow."
      ),
      p(
        "Reply to positive reviews too. Google surfaces owner responses, and a steady record of calm, privacy-conscious replies tells readers the practice is attentive. If you ask patients for reviews at all, read how to do it without selecting who is asked in [getting more patient reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating). And do not offer anything in exchange for a review, which breaks Google's contribution policy. Praise and complaints belong in different places, and a [patient feedback and complaint page without health details](/guides/patient-feedback-and-complaint-contact-page-for-a-medical-practice-without-health-details) gives unhappy patients their own route."
      ),
      h2("A quick approval routine"),
      p(
        "Keep a short list of approved replies in a shared document, and assign one person to post them. For anything outside the list, such as a review that mentions a complaint, a name or a family member, pause and ask the practice manager before writing. Set a service level, such as replying within two business days, and track it in a simple log."
      ),
      p(
        "Consistent, privacy-conscious replies matter more than fast ones. A pause of an hour is cheap compared with a disclosure that cannot be taken back."
      ),
    ],
    faqs: [
      {
        q: "Can we thank a reviewer by name?",
        a: "Using the reviewer's public display name is generally fine as a greeting, but avoid any wording that confirms the person was a patient. Many practices skip the name entirely to stay on the safe side.",
      },
      {
        q: "What if the reviewer describes their own condition?",
        a: "The patient may share what they like, but the practice should not repeat, confirm or build on it. Keep the reply general and invite them to contact the office by phone.",
      },
      {
        q: "Should we reply to every positive review?",
        a: "It is a good habit, as long as each reply follows the same safe pattern. Rotate a handful of approved templates so replies read naturally rather than copy-pasted.",
      },
      {
        q: "Can staff reply from their own accounts?",
        a: "No. Replies should come from the business profile, written by someone who has been trained on the rules. A personal account can blur who is speaking for the practice.",
      },
      {
        q: "Is it okay to ask a happy patient to edit a review?",
        a: "Do not pressure anyone. If a patient volunteers that they would like to change a review, they can do it themselves. Pointing out what a reviewer should say crosses into manipulation.",
      },
    ],
    citations: [HHS_MARKETING, { publisher: "Google Maps contribution policy", label: "Prohibited and restricted content for reviews", href: "https://support.google.com/contributionpolicy/answer/7400114" }, FTC_REVIEWS],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Negative Reviews", description: "Reply without exposing patient details." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Patient Reviews", description: "Ask every patient, filter none." },
      { href: "/guides/google-review-vs-patient-testimonial-legal-difference", label: "Review vs Testimonial", description: "Where a review ends and an ad begins." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 995
  {
    slug: "thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it",
    keyword: "thank you page after a contact form on a medical practice website what to say and how to track it",
    category: "How-to",
    title: "Thank-You Page After a Contact Form on a Medical Practice Website: What to Say and How to Track It",
    metaTitle: "Contact Form Thank-You Page for a Practice",
    metaDescription:
      "What a medical practice's thank-you page should say, how to keep it free of health details and how to count it as a conversion. Call (561) 291-2681.",
    answer:
      "A thank-you page should confirm the request arrived, say when the practice will respond, give the phone number for urgent needs and the 911 line for emergencies, and contain no health details. It is also the best place to count a lead, because the page only loads after a form is actually submitted.",
    author: "Liam Costello",
    publishDate: "2026-10-15T11:00:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("The page most practices forget to build"),
      p(
        "When someone submits a contact form, many sites show a small green message and leave the visitor on the same page. That message is invisible to analytics, easy to miss and impossible to link to. A dedicated thank-you page fixes all three problems at once, and it takes less than an hour to build."
      ),
      p(
        "It also helps the visitor. A person who has just shared a phone number is slightly anxious. A calm page that says what happens next lowers that anxiety and cuts repeat submissions."
      ),
      h2("What the page should say"),
      ul(
        "A clear confirmation that the request was received, in one sentence.",
        "A realistic response time tied to office hours, such as the next business day.",
        "The front desk phone number for anything urgent.",
        "A plain reminder to call 911 for an emergency, and 988 for a mental health crisis if you serve counseling patients.",
        "One or two useful links, such as directions or what to bring to a first visit."
      ),
      p(
        "Do not echo what the visitor typed. Repeating a message, a reason for the visit or a name on screen can expose it to anyone looking over a shoulder or reading browser history. A generic confirmation is safer and just as reassuring."
      ),
      h3("Keep the URL clean"),
      p(
        "The page address should be simple, such as /thank-you, with no query string that carries a name, a phone number or a reason for contact. Personal data in a URL is stored in server logs, analytics and referrer headers. Our guide to [HIPAA-safe tracking for a medical website](/guides/hipaa-safe-tracking-for-a-medical-website) explains why that matters."
      ),
      h2("Count the page, not the button"),
      p(
        "A click on a submit button is not a lead. The visitor may have left a required field blank, or the form may have failed. The thank-you page loads only after a successful submission, so a conversion event fired from that page counts real leads."
      ),
      ol(
        "Create the thank-you page and make the form redirect to it after a successful submission.",
        "In Google Analytics 4, send a generate_lead event when that page loads, with no personal data in the event.",
        "Mark the event as a key event so it shows in conversion reports.",
        "If you run Google Ads, import that conversion rather than counting button clicks.",
        "Add noindex to the page so it does not appear in search results."
      ),
      h2("Test it like a visitor would"),
      p(
        "Submit the form yourself with a test name, and write TEST in the name field so the team knows to ignore it. Confirm the redirect happens, the event appears in the real-time report, and the page works on a phone. Then check that a reload of the thank-you page does not fire a second event; if it does, add a rule that fires the event only once per session."
      ),
      table(
        ["Check", "What good looks like"],
        ["Redirect", "Form success goes to /thank-you, and failure stays on the form."],
        ["Event", "One generate_lead per submission, with no name or phone."],
        ["Indexing", "The page carries noindex and is not in the sitemap."],
        ["Phone view", "The confirmation and phone number are visible without scrolling."]
      ),
      p(
        "For phone calls, set up a similar event on the tap of the phone link, as described in [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website). To keep junk submissions from inflating the count, see how to [stop spam and fake leads on a contact form](/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form)."
      ),
      h2("Small details that make the page work"),
      ul(
        "Give the page a clear title, such as Thank You with the practice name, so analytics can find it.",
        "Keep the phone number as a tap-to-call link, and track those taps separately.",
        "Avoid any pop-up, newsletter prompt or second form on the page.",
        "Open the page in a private window to confirm nothing personal is shown."
      ),
      p(
        "These details take minutes and prevent most of the common problems: a thank-you page that feels like a dead end, a conversion that is counted twice, or a page that exposes more than it should."
      ),
    ],
    faqs: [
      {
        q: "Should the thank-you page be indexed?",
        a: "No. It has no value in search and could attract visitors who never submitted a form. Add noindex and leave it out of the sitemap.",
      },
      {
        q: "Can the thank-you page show the visitor's name?",
        a: "It is better not to. A generic confirmation avoids exposing anything on screen and keeps personal details out of the URL and analytics.",
      },
      {
        q: "Why not just track the submit button?",
        a: "A button click happens whether or not the form succeeded. The thank-you page loads only after a real submission, so it counts actual leads and leaves out errors.",
      },
      {
        q: "How do I stop duplicate conversions on reload?",
        a: "Fire the event once per session, for example by storing a flag in session storage, or configure the tag to trigger only on the first page view of the thank-you page.",
      },
      {
        q: "What belongs on the page besides the confirmation?",
        a: "A response time, the phone number, an emergency reminder and a couple of helpful links, such as directions or what to bring. Avoid pop-ups and anything that asks for more information.",
      },
    ],
    citations: [GA4_EVENTS, HHS_TRACKING, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Measure results without exposing patients." },
      { href: "/guides/tracking-phone-calls-from-a-medical-website", label: "Phone Call Tracking", description: "Count calls from your site." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Stop Form Spam", description: "Keep fake leads out of your numbers." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 996
  {
    slug: "psychology-today-and-therapist-directory-profiles-for-a-counseling-practice",
    keyword: "psychology today and therapist directory profiles for a counseling practice",
    category: "How-to",
    title: "Psychology Today and Therapist Directory Profiles for a Counseling Practice",
    metaTitle: "Therapist Directory Profiles for a Counseling Practice",
    metaDescription:
      "How a counseling practice can set up therapist directory profiles that match its website and avoid outcome claims. Call (561) 291-2681.",
    answer:
      "Treat a therapist directory profile as a landing page you do not control. Use the same name, address, phone and license details as your website, write in plain words without outcome claims, link to a page on your own site and check the profile twice a year. Paid listings should earn their cost in calls or booked consults.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T11:20:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Why directories still matter for therapists"),
      p(
        "A large share of people looking for a therapist start on a directory rather than a practice website. They filter by location, insurance, specialty and whether a clinician offers telehealth. Psychology Today is the best-known of these, and others such as Open Path, TherapyDen and insurer provider lists serve similar searchers."
      ),
      p(
        "Directory pages also tend to rank for a clinician's name, which means a new client who searches for you may see the profile before your own site. That makes the profile part of your reputation, whether you wrote it carefully or not. Directory profiles often carry an affirming statement, and it should say the same thing as the practice's own [LGBTQ+ affirming counseling page](/guides/lgbtq-affirming-counseling-page-for-a-counseling-practice-without-clinical-claims) so a client sees one consistent welcome."
      ),
      h2("Make the profile match everything else"),
      p(
        "Search engines and people both compare. If the directory lists one address and Google lists another, you create doubt. Before writing anything, gather the exact practice name, address, phone number, license type and number as shown in the state record, and use them unchanged. Our guide on [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains what breaks and how to repair it."
      ),
      ul(
        "Use the title your license allows and the license number as the board issued it.",
        "Use the same practice name, address, suite and phone number as the website and Google profile.",
        "Link to a specific page on your site, such as a new-client page, instead of only the home page.",
        "Choose a clear, current photo; a professional headshot beats a logo.",
        "List the languages, ages and insurance you really accept, and update the list when it changes."
      ),
      h2("Write the statement for a reader, not for a search engine"),
      p(
        "The personal statement is the part clients read. Aim for a few short paragraphs: who you work with, what a first session is like, and how to start. Describe your approach in plain words and avoid promising results. The American Psychological Association's ethics code warns against misleading statements about services, and the same standard fits any licensed counselor."
      ),
      table(
        ["Avoid", "Use instead"],
        ["I will cure your anxiety.", "I work with adults who feel anxious, using talk therapy and practical skills."],
        ["The best therapist in the area.", "Licensed in Florida, with offices in West Palm Beach and sessions by video."],
        ["Guaranteed results in six sessions.", "Most clients meet with me weekly at first; we review how it is going together."],
        ["A long list of every condition.", "A short list of the concerns you actually see most often."]
      ),
      h3("Specialty lists need honesty"),
      p(
        "Directories invite you to tick many boxes. Choose the handful you have training and experience to serve, because a profile listing twenty specialties reads as generic. Our guide on [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) shows how to describe each area without clinical claims."
      ),
      h2("Measure what the listing is worth"),
      p(
        "A paid directory listing is a marketing expense, so treat it like one. Use a tagged link in the profile so analytics can separate directory visits from other traffic, and ask new clients how they found you. The method in [UTM links for profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice) works for this. After six months, compare the cost of the listing with the consultations it produced, and decide whether to renew."
      ),
      p(
        "Review each profile twice a year and any time you change your fees, hours, address or availability. A profile that says accepting new clients when the caseload is full wastes the time of people who needed help."
      ),
      h2("Updating and retiring profiles"),
      p(
        "Directories change their features and fees often, so assign one person to review each profile twice a year and write the date in a simple list. Look at the photo, the statement, the specialties, the fees and the availability. If a clinician leaves the practice, remove or update the profile right away, because a former clinician's page can keep sending calls to the wrong person for months."
      ),
      p(
        "Search for your own name now and then to see which profiles appear first, and ask any directory to correct inaccurate information that you did not provide."
      ),
    ],
    faqs: [
      {
        q: "Is Psychology Today worth it for a new practice?",
        a: "For many therapists it is a useful early source of inquiries, but results vary by market and specialty. Track consultations from the listing for several months and renew only if it pays for itself.",
      },
      {
        q: "Should we use the same bio on every directory?",
        a: "Keep the facts identical, but vary the wording a little so each profile reads naturally. Do not copy the whole text from your own website word for word, which creates duplicates.",
      },
      {
        q: "Can we list conditions we treat?",
        a: "List the concerns clients bring to you, within your training, and avoid claiming to cure or fix them. Describe the kind of support you offer instead of outcomes.",
      },
      {
        q: "What if our caseload is full?",
        a: "Mark the profile as not accepting new clients, or add a waitlist note, and keep the same status on your website. Out-of-date availability frustrates searchers and invites poor reviews.",
      },
      {
        q: "Do directory links help SEO?",
        a: "A link from a reputable directory can help a little, and the profile itself can rank for your name. The bigger benefit is being visible to people already searching for a therapist.",
      },
    ],
    citations: [{ publisher: "American Psychological Association", label: "Ethical principles of psychologists and code of conduct", href: "https://www.apa.org/ethics/code" }, FL_MENTAL, FTC_ADS],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone identical." },
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Specialty Pages", description: "Describe specialties without clinical claims." },
      { href: "/guides/local-citation-building-checklist-for-a-medical-practice", label: "Citation Checklist", description: "The directories worth your time." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 997
  {
    slug: "conversion-tracking-for-third-party-booking-widgets-on-a-medical-practice-website",
    keyword: "conversion tracking for third-party booking widgets on a medical practice website",
    category: "How-to",
    title: "Conversion Tracking for Third-Party Booking Widgets on a Medical Practice Website",
    metaTitle: "Tracking Booking Widget Conversions for a Practice",
    metaDescription:
      "How a practice can count appointments booked through a scheduling tool without sending health details to analytics. Call (561) 291-2681.",
    answer:
      "Track the click that opens the booking tool and, where the vendor allows it, the confirmation step, using events that carry no names or visit reasons. Many hosted schedulers limit what you can install, so check the vendor's documentation, keep a clean record of where bookings come from and never pass health details into analytics.",
    author: "Liam Costello",
    publishDate: "2026-10-15T11:40:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("The gap between a click and a booking"),
      p(
        "Most practices use a third-party scheduling tool, either embedded in a page or opened on the vendor's own domain. That is convenient for scheduling and awkward for analytics, because the part that matters, the confirmed appointment, happens somewhere your tracking code may not reach."
      ),
      p(
        "Without a plan, reports show visits to the booking page and nothing about whether anyone booked. Marketing decisions then rest on guesses. The goal is a trustworthy count of booking starts and, where possible, completions, with no personal details attached."
      ),
      h2("Three setups, and what you can measure"),
      table(
        ["Setup", "What you can usually track"],
        ["Link to the vendor's page", "The click on the booking button, plus any return to a confirmation page you control."],
        ["Embedded widget on your page", "Clicks, plus completion events if the vendor posts a message or lets you set a redirect."],
        ["Vendor-hosted page with its own tag field", "Whatever the vendor allows, often a Google tag or a post-booking redirect."]
      ),
      p(
        "Hosted platforms vary in what they let a practice install, so read the vendor's documentation or ask support before building anything. If the tool allows a redirect after booking, send patients to a confirmation page on your own site. That page then works like any other thank-you page; see our guide to a [contact form thank-you page](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it)."
      ),
      h2("A clean way to set it up"),
      ol(
        "Add a click event to every booking button, named something plain like book_click, with the page and button position as the only details.",
        "If the vendor supports a redirect or a post-booking message, fire a second event, book_complete, from your own confirmation page.",
        "If the booking tool lives on another domain, set up cross-domain measurement so a session is not split in two.",
        "Add UTM tags to links that lead into the booking tool from emails, profiles and directories.",
        "Check the numbers monthly against the schedule, which is the ground truth."
      ),
      h3("What never goes into an event"),
      p(
        "Do not send the appointment type, provider, reason for visit, insurance or any form answers. A booking for a specialist can reveal a condition on its own. HHS has warned that tracking technologies on pages where patients schedule care can disclose protected information, so keep the data to counts and page names. The principles are in our guide on [HIPAA-safe tracking](/guides/hipaa-safe-tracking-for-a-medical-website)."
      ),
      h2("Reconcile with the real schedule"),
      p(
        "Analytics will never match the schedule exactly. Some patients book by phone after reading the site, some complete the tool in a private window, and some tools block scripts. Treat the schedule as the truth and use analytics for direction. Add a how-did-you-hear question at booking, as described in [how did you hear about us](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing), to cross-check the channel."
      ),
      p(
        "If the numbers differ by a wide margin, look first for a broken redirect, a blocked script or a booking page opened in a new tab that lost its session. Fix the cause, then record the date of the fix so later trends are read in context."
      ),
      h2("A monthly reconciliation worth doing"),
      p(
        "Once a month, compare three numbers: booking button clicks in analytics, completed bookings in the scheduling system, and new patients reported at check-in. They will never match exactly, but the ratio between them should stay roughly stable. A sudden fall in clicks suggests a design or tracking problem; a fall in completions with steady clicks suggests the booking tool itself has become harder to use."
      ),
      p(
        "Write down what you find each month. The context matters more than the exact figures, and it makes next quarter's report much easier to read."
      ),
    ],
    faqs: [
      {
        q: "Can we track bookings if the vendor will not let us add code?",
        a: "Yes, partly. Track the click on your own booking button and use UTM tags on inbound links. If the vendor allows a redirect after booking, use that to count completions.",
      },
      {
        q: "Is it safe to send booking events to Google Analytics?",
        a: "It can be, if the events contain only counts and page names. Avoid appointment type, provider, reason for visit and any form answers, and check the vendor's own privacy terms.",
      },
      {
        q: "What is cross-domain measurement?",
        a: "It keeps a visitor's session intact when they move from your site to the booking tool's domain. Without it, analytics may show the booking as a new visit from a referral.",
      },
      {
        q: "Why do my analytics and schedule disagree?",
        a: "Phone bookings, blocked scripts and private browsing all cause gaps. Use the schedule as the real count and analytics to see which pages and sources lead into booking.",
      },
      {
        q: "Should booking clicks count as conversions?",
        a: "Count them as an earlier step, such as book_click, and count completed bookings as the main conversion when you can measure them. Do not treat a click as a finished appointment.",
      },
    ],
    citations: [GA4_EVENTS, HHS_TRACKING, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/online-appointment-scheduling-on-a-medical-practice-website-and-seo", label: "Online Scheduling", description: "Booking on your site and in search." },
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Measure results without exposing patients." },
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Set Up GA4", description: "A clean analytics setup for a practice." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 998
  {
    slug: "live-chat-and-chatbots-on-a-medical-practice-website-privacy-settings-and-what-to-avoid",
    keyword: "live chat and chatbots on a medical practice website privacy settings and what to avoid",
    category: "Checklist",
    title: "Live Chat and Chatbots on a Medical Practice Website: Privacy Settings and What to Avoid",
    metaTitle: "Live Chat and Chatbots on a Practice Website",
    metaDescription:
      "What a medical or counseling practice should check before adding live chat or a chatbot to its website. Call (561) 291-2681.",
    answer:
      "Before adding a chat widget, confirm the vendor will sign a business associate agreement if messages can contain patient information, show a clear notice that chat is not for emergencies or health questions, route crisis words to 988 or 911 information, and keep transcripts out of general analytics. If these steps are not possible, use a simple contact form instead.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T12:00:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("Chat is convenient, and it is a data collection tool"),
      p(
        "A chat bubble in the corner of a page promises quick answers. For a medical or counseling practice, it is also an open text box that a visitor may fill with a symptom, a name or something far more personal. Whatever the visitor types is data your practice, and your vendor, now hold."
      ),
      p(
        "That is not a reason to avoid chat entirely. It is a reason to decide on purpose what chat is for, set it up for that purpose, and check that the vendor can handle what will inevitably arrive."
      ),
      h2("Decide the job before choosing the tool"),
      ul(
        "Logistics only: hours, directions, parking, forms and how to book.",
        "Scheduling help: starting a booking or taking a call-back number.",
        "Not for health questions: no symptoms, no medication questions, no results."
      ),
      p(
        "Most practices should pick the first or second. A chat that tries to answer clinical questions creates risk and an expectation that someone qualified is watching all day."
      ),
      h2("A pre-launch checklist"),
      table(
        ["Check", "Why it matters"],
        ["Business associate agreement available", "A vendor that may receive patient information is a business associate under HIPAA."],
        ["Notice above the chat box", "Tells visitors not to share health details and to call 911 in an emergency."],
        ["Crisis response for counseling sites", "Words like suicide should trigger a message with 988 information, not a canned sales reply."],
        ["Transcript storage and retention", "Know where messages are kept, for how long and who can read them."],
        ["Analytics separated from chat", "Do not feed chat content into advertising or analytics tools."],
        ["Accessible design", "Keyboard use and screen readers should work with the widget."]
      ),
      h3("AI chatbots add a few more questions"),
      p(
        "If the chat is answered by an automated assistant, say so on screen. Limit its answers to a reviewed set of facts about the practice, and prevent it from giving medical advice. Test it with real questions a patient might ask, including awkward ones, and record the results. A chatbot that confidently invents a service or a price causes the same trouble as a wrong listing, as covered in [fixing wrong information in an AI chatbot answer](/guides/fix-wrong-information-about-your-practice-in-an-ai-chatbot-answer)."
      ),
      h2("Staffing and hours"),
      p(
        "A live chat that nobody answers is worse than none. Show the chat only during staffed hours, or switch it to a message form after hours with a clear promise of when someone will reply. Give staff a short script and tell them to move any personal detail to the phone or the secure portal. Our guide on [handling after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) covers the same idea for calls."
      ),
      p(
        "Check how the widget behaves with the rest of your tracking. A script that records sessions or captures typed text can undo the privacy work on the rest of the site. The warning in the [HIPAA-safe tracking guide](/guides/hipaa-safe-tracking-for-a-medical-website) applies to chat tools as well."
      ),
      h2("Review the setup after launch"),
      p(
        "Read the first two weeks of transcripts with the practice manager and look for what visitors actually ask. If many ask a question the website should answer, fix the website. If visitors regularly type health details despite the notice, make the notice more prominent or replace chat with a call-back form."
      ),
      p(
        "Plan to revisit the choice every six months, since vendors change their terms and features, and a tool that was acceptable at launch may not be a year later."
      ),
    ],
    faqs: [
      {
        q: "Do we need a business associate agreement for a chat vendor?",
        a: "If chat messages could include patient information, the vendor handles it for the practice and generally needs to sign one. If a vendor will not, do not use its chat on pages where patients are identified.",
      },
      {
        q: "What should the chat window say before a visitor types?",
        a: "Say that chat is for questions about hours, location and booking, that it is not for health information, and that emergencies should go to 911. Counseling sites should add 988 for crisis support.",
      },
      {
        q: "Can an AI chatbot answer patient questions?",
        a: "It can answer practical questions from approved content, if it is clearly labeled and blocked from giving medical advice. Test it often and correct any wrong answers right away.",
      },
      {
        q: "Should chat run after hours?",
        a: "Only if someone replies in a stated time. Otherwise switch to a message form and state when the practice will respond, so visitors are not left waiting in an empty window.",
      },
      {
        q: "Is a contact form safer than chat?",
        a: "A form is simpler to control, because you decide the fields and where results go. Chat can work, but it needs the extra checks above. When in doubt, start with a form.",
      },
    ],
    citations: [HHS_TRACKING, LIFELINE, { publisher: "ADA.gov", label: "Web accessibility guidance", href: "https://www.ada.gov/resources/web-guidance/" }],
    links: [
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "HIPAA-Safe Tracking", description: "Measure results without exposing patients." },
      { href: "/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form", label: "Contact Form Spam", description: "Keep the simple form clean." },
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Accessibility", description: "Make widgets usable for everyone." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 999
  {
    slug: "licensure-and-states-served-page-for-a-telehealth-counseling-practice",
    keyword: "licensure and states served page for a telehealth counseling practice",
    category: "Checklist",
    title: "Licensure and States Served Page for a Telehealth Counseling Practice",
    metaTitle: "Licensure and States Served Page for Telehealth",
    metaDescription:
      "How a telehealth counseling practice can tell clients where each clinician is licensed to see them. Call (561) 291-2681.",
    answer:
      "A states-served page lists each clinician, the state or states where they hold a license, how to verify it, and a plain rule that clients must be physically located in a licensed state during a session. Use only what the licensing record shows, and do not describe interstate compacts as available until the clinician is actually authorized under them.",
    author: "Liam Costello",
    publishDate: "2026-10-15T12:20:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Where the client sits matters more than where you sit"),
      p(
        "Telehealth lets a counselor in West Palm Beach talk with a client anywhere with an internet connection. The rules, however, usually attach to where the client is during the session, not just where the clinician practices. A clinician licensed in Florida generally cannot assume they can see a client who is sitting in another state."
      ),
      p(
        "A client who is traveling, moved away for college or lives part of the year elsewhere often does not know this. A clear page prevents awkward surprises, canceled sessions and, worse, a clinician practicing outside their license."
      ),
      h2("What the page should include"),
      ul(
        "A short plain-language rule: you must be physically in a state where your clinician is licensed during each session.",
        "A list of clinicians with the state or states where each is licensed, the license type and a verification link.",
        "What happens if a client travels or moves, with a phone number to call before booking.",
        "Which services are offered by video and which are in person only.",
        "A note that this page does not replace legal or licensing advice."
      ),
      p(
        "Copy details from the licensing board's public record, not from a bio or résumé. Florida's board publishes its own verification tools, and other states have their own, so link to each one a clinician uses."
      ),
      h2("What about interstate compacts?"),
      p(
        "Several compacts exist or are being developed to make multistate practice easier. The Psychology Interjurisdictional Compact, known as PSYPACT, lets eligible psychologists practice telepsychology across participating states. The Counseling Compact is a separate agreement for professional counselors, and its operation depends on each state joining and the system being in use. Both have eligibility rules and effective dates."
      ),
      table(
        ["Claim", "Safe wording"],
        ["Compact participation", "Dr. A is authorized to practice telepsychology in participating PSYPACT states. See the compact site for the list."],
        ["Counseling Compact", "We will update this page when our clinicians are authorized to practice under the compact."],
        ["Individual state license", "Licensed in Florida, number as shown on the state record."]
      ),
      p(
        "Do not mention a compact unless the clinician holds the authorization it requires. Saying we see clients in 40 states when only two have been confirmed is the sort of statement that attracts a licensing complaint."
      ),
      h3("Keep the page current"),
      p(
        "Review the page whenever a license is renewed, a clinician is added, or a state joins a compact. A stale page is worse than no page, and the date of the last review should be visible. If someone leaves, update this page along with the steps in [what to update when a provider joins or leaves a practice](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice)."
      ),
      h2("Link it to the rest of the telehealth experience"),
      p(
        "Mention the page on the telehealth visit instructions and on the consent page, and in booking confirmations. Our guides on [telehealth visit instructions](/guides/telehealth-visit-instructions-page-for-a-therapy-practice) and [telehealth consent and technology checks](/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice) show where it fits. For crisis information, include a pointer to the emergency section described in [emergency and crisis resources](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). Professionals who travel for work will check where you are licensed, so cross-reference it on a [counseling page for working professionals](/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims) that lists your video hours."
      ),
      h2("Make the rule easy to follow at booking"),
      p(
        "Add a short line to the booking form asking clients to confirm the state they will be in during their appointments, and train the front desk to ask the same question on the phone. If a client says they will be somewhere the clinician is not licensed, offer an in-person option, a referral to a clinician licensed there, or a pause until they return."
      ),
      p(
        "Note the conversation in the usual scheduling notes without clinical detail, so the next person who talks to the client does not have to ask again."
      ),
    ],
    faqs: [
      {
        q: "Can a Florida-licensed counselor see a client in another state?",
        a: "Generally the clinician needs authorization where the client is located during the session, through that state's license or a compact. Check the other state's board before booking, and do not assume.",
      },
      {
        q: "What is PSYPACT?",
        a: "PSYPACT is an agreement among participating states that lets eligible psychologists provide telepsychology across state lines. Clinicians must be authorized under it, and participating states change, so check the official site.",
      },
      {
        q: "Does the Counseling Compact apply to every counselor?",
        a: "No. It applies to eligible licensed professional counselors in states that have joined, and operation depends on implementation. Do not claim compact privileges until the clinician has them.",
      },
      {
        q: "What should clients do if they travel?",
        a: "Ask them to call the practice before the session, because the clinician may not be able to see them in that state. Offer to reschedule for when they return.",
      },
      {
        q: "Where should clients verify a license?",
        a: "Link to the licensing board's public lookup for each state. In Florida, the mental health professions board and the Department of Health provide the record for verification.",
      },
    ],
    citations: [FL_MENTAL, { publisher: "PSYPACT", label: "Psychology Interjurisdictional Compact", href: "https://psypact.gov/" }, { publisher: "Counseling Compact", label: "Counseling Compact information", href: "https://counselingcompact.org/" }],
    links: [
      { href: "/guides/telehealth-visit-instructions-page-for-a-therapy-practice", label: "Telehealth Visit Instructions", description: "Help clients join a video session." },
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent Page", description: "Consent and technology checks." },
      { href: "/guides/telehealth-marketing-playbook", label: "Telehealth Marketing Playbook", description: "Be found for video visits." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1000
  {
    slug: "pre-employment-dot-and-sports-physicals-page-for-a-primary-care-practice",
    keyword: "pre-employment dot and sports physicals page for a primary care practice",
    category: "Checklist",
    title: "Pre-Employment, DOT and Sports Physicals Page for a Primary Care Practice",
    metaTitle: "Physicals Page: Pre-Employment, DOT and Sports",
    metaDescription:
      "How a primary care practice can describe pre-employment, DOT and sports physicals clearly, without clinical claims. Call (561) 291-2681.",
    answer:
      "A physicals page should say which kinds of physicals the practice offers, what to bring, how long a visit takes, what it costs or how to ask, and whether the visit is billed to insurance. State clearly if the practice does not perform DOT exams, and never describe results or fitness decisions before a clinician has seen the patient.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T12:40:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("Physicals are a different search from a checkup"),
      p(
        "A person searching for a pre-employment physical, a DOT physical or a sports physical is not looking for general primary care. They have a form, a deadline and a specific question about whether your office does this at all. A page that answers those questions quickly wins the call."
      ),
      p(
        "These visits are often paid out of pocket or by an employer, rather than billed to health insurance. That makes the cost and the paperwork the center of the page."
      ),
      h2("Three types, three different pages of information"),
      table(
        ["Type", "What the page should say"],
        ["Pre-employment", "That the employer sets the requirements, what to bring from the employer, and how results are shared with the patient."],
        ["DOT (commercial driver)", "Whether the practice has an examiner listed on the FMCSA National Registry, and who."],
        ["Sports or school", "What forms are accepted, how far ahead to book and who can sign them."]
      ),
      p(
        "Federal rules require that a medical examiner for a commercial driver's certificate be listed on the National Registry of Certified Medical Examiners. If your practice has no such examiner, say so plainly and avoid listing DOT physicals in your services. If you do, name the examiner and link to the registry so drivers can check."
      ),
      h3("School and sports forms"),
      p(
        "Many schools and leagues have their own forms, and requirements differ by district and sport. Tell families to bring the form and to check the school's deadline before booking. Do not state which form a school will accept, because the school decides."
      ),
      h2("What to include on the page"),
      ul(
        "The visit types offered, in plain words, and the ones that are not offered.",
        "How to book and how far ahead to plan, given your real schedule.",
        "What to bring: photo identification, the form or employer instructions, and a list of current medications written on paper.",
        "Price or how to request one, and whether the visit is billed to insurance, to the employer or paid by the patient.",
        "How long the visit takes and where to park."
      ),
      p(
        "Keep the language about outcomes neutral. Do not say patients will pass, and do not promise that a physical will clear anyone. Say that a clinician completes the exam and the paperwork according to the requirements of the requester."
      ),
      h2("Link the page to the rest of the site"),
      p(
        "Connect the page to the services list, the pricing information and the booking page. Our guide on [how to publish self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) explains how to talk about cost, and [seasonal service pages for flu shots and school physicals](/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals) covers the school-year rush. Put the phone number high on the page and use a tap-to-call link, since many searchers are in a hurry. Employers who send several people for physicals will want to know how booking and billing work, which a separate [employer and workplace partnership page](/guides/employer-and-workplace-partnership-page-for-a-primary-care-practice) can explain."
      ),
      p(
        "Keep the details on the Google Business Profile in sync. Add the service names to the services list exactly as on the page, and see [Google Business Profile services list optimization](/guides/google-business-profile-services-list-optimization) for how to do it without stuffing. Test by calling the office as a stranger would and checking that the front desk gives the same answers the page does."
      ),
      h2("Common questions at the front desk"),
      ul(
        "Is this visit covered by my insurance, or do I pay today?",
        "Can my employer receive the form directly?",
        "How soon will the paperwork be ready?",
        "Does my child need a parent or guardian at the visit?"
      ),
      p(
        "Write short, consistent answers and keep them with the booking script. Where the answer depends on the requester's rules, say that the requester decides and invite the caller to share the form so the office can confirm what is needed."
      ),
    ],
    faqs: [
      {
        q: "Can any doctor do a DOT physical?",
        a: "No. The examiner must be listed on the FMCSA National Registry of Certified Medical Examiners. A practice without a listed examiner should not offer or advertise DOT physicals.",
      },
      {
        q: "Does insurance pay for these physicals?",
        a: "Often not. Pre-employment and many sports physicals are paid by the employer or the patient. State on the page how your practice bills, and tell patients to ask their insurer if unsure.",
      },
      {
        q: "What should patients bring to a sports physical?",
        a: "The school or league form, a photo ID if asked, and a list of current medications. A parent or guardian may need to sign for a minor. Check the school's requirements first.",
      },
      {
        q: "Can the page promise a patient will pass?",
        a: "No. A clinician makes decisions at the visit. Describe the process and the paperwork, and avoid any statement about results or clearance.",
      },
      {
        q: "How far ahead should patients book?",
        a: "Give a realistic range from your own schedule, and note that late summer and the start of a school season fill quickly. Update the range when your availability changes.",
      },
    ],
    citations: [{ publisher: "Federal Motor Carrier Safety Administration", label: "National Registry of Certified Medical Examiners", href: "https://nrcme.fmcsa.dot.gov/" }, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/seasonal-service-pages-for-a-medical-practice-flu-shots-and-school-physicals", label: "Seasonal Service Pages", description: "Flu shots and school physicals." },
      { href: "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website", label: "Self-Pay Prices", description: "Publish prices without surprises." },
      { href: "/guides/google-business-profile-services-list-optimization", label: "Services List", description: "List services the way patients search." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1001
  {
    slug: "therapist-bio-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "therapist bio page for a counseling practice without clinical claims",
    category: "How-to",
    title: "Therapist Bio Page for a Counseling Practice Without Clinical Claims",
    metaTitle: "Therapist Bio Page Without Clinical Claims",
    metaDescription:
      "How to write a therapist bio page that feels personal, shows real credentials and avoids outcome promises. Call (561) 291-2681.",
    answer:
      "A therapist bio should lead with a clear photo and a short, human introduction, then list the license as issued, the kinds of people the clinician sees, what a first session looks like, fees and how to book. Describe the approach in plain words and skip outcome promises, testimonials from clients and any credential the person does not hold.",
    author: "Liam Costello",
    publishDate: "2026-10-15T13:00:00Z",
    dateModified: "2026-10-20",
    readMinutes: 6,
    sections: [
      h2("The page people read before they call"),
      p(
        "Choosing a therapist is a personal decision, and the bio page is where most people make it. They are not scanning for keywords. They are asking quietly whether this person seems kind, competent and safe to talk to."
      ),
      p(
        "That makes a therapist bio different from a physician's profile, which leans on training and specialty. A counseling bio has to carry warmth and clarity at the same time, and it must do so without crossing into promises that licensing boards and advertising rules do not allow."
      ),
      h2("Put the person first"),
      ul(
        "A recent, natural photo at the top, with alt text that gives the name and role.",
        "A one- or two-sentence introduction in the first person or third person, used consistently.",
        "The license type and number as shown on the state record, with a verification link.",
        "The practical details a new client needs: ages seen, telehealth or in person, languages and fees."
      ),
      p(
        "Explanations of method and training come after that. A reader who has seen a friendly face and a clear start button will continue to read; a reader who meets a wall of credentials first often will not."
      ),
      h2("Describe the approach, not the cure"),
      table(
        ["Instead of", "Write"],
        ["I help clients overcome trauma for good.", "I work with adults who have experienced trauma, at a pace that feels manageable to them."],
        ["Proven to reduce depression.", "I use talk therapy and practical tools, and we check in regularly about how it is going."],
        ["Over 100 clients treated successfully.", "I have worked with individuals and couples for more than ten years. (Only if true.)"],
        ["Expert in everything.", "I see people about anxiety, grief, life changes and relationships."]
      ),
      p(
        "Outcome language is where bios get into trouble. The American Psychological Association's ethics code asks psychologists to avoid false or misleading statements about their services, and the same standard is a sensible guide for any licensed counselor. Our article on [specialty pages for a therapy practice](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) goes deeper on how to name concerns without clinical claims. Choose the therapist's photo with the same care as the text, following our [provider headshots and team photo guidelines for a medical practice website](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website) on consent, background and alt text."
      ),
      h3("Credentials: only what is true"),
      p(
        "List the degree, the license and any certifications exactly as they were earned. Do not use a title the board does not permit, and do not list an acronym without saying what it stands for. If the clinician is pre-licensed, say so, and name the supervisor; the details are in our guide to a [pre-licensed clinician disclosure page](/guides/associate-and-pre-licensed-clinician-disclosure-page-for-a-counseling-practice). If a clinician chooses to say they work with LGBTQ+ clients, the wording on their bio should match an honest [LGBTQ+ affirming counseling page](/guides/lgbtq-affirming-counseling-page-for-a-counseling-practice-without-clinical-claims) with no credentials the clinician does not hold."
      ),
      h2("Make it findable"),
      p(
        "Give each clinician a page of their own with a clear title that includes the name, the license type and the city. Add Person structured data that matches what the page says, and link the bio from the team page, the services pages and the Google Business Profile. The fundamentals are in [how to write a doctor bio page that ranks](/guides/how-to-write-a-doctor-bio-page-that-ranks), which applies equally to counselors."
      ),
      p(
        "Avoid client testimonials on the page. Many professional codes restrict them, and a reader can find real reviews on Google. End with a clear next step, such as a free fifteen-minute call if the clinician offers one, and read [what to say on a free consultation call page](/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid) before you promise it."
      ),
      h2("A quick checklist before publishing"),
      ul(
        "The photo is current and has alt text.",
        "The license type and number match the state record.",
        "There are no outcome promises, guarantees or client testimonials.",
        "Fees, telehealth and languages are stated plainly.",
        "A clear call to action and the phone number appear near the top on a phone."
      ),
      p(
        "Ask someone who has never met the clinician to read the page and say how they would feel about booking. Their first reaction is usually the most honest feedback you will get."
      ),
    ],
    faqs: [
      {
        q: "Should a therapist bio be written in first person?",
        a: "Either works if it is consistent. First person feels warmer and many clients prefer it. Pick one voice for the whole site and use it for every clinician.",
      },
      {
        q: "Can a bio list the conditions the therapist treats?",
        a: "It can name the concerns clients bring, within the clinician's training, in plain words. Avoid saying the clinician cures or fixes them, and keep the list short and honest.",
      },
      {
        q: "Are client testimonials allowed on a therapist's page?",
        a: "Many licensing codes discourage or restrict them for mental health professionals. Safer to leave them off and let public reviews on Google speak for themselves.",
      },
      {
        q: "What photo should we use?",
        a: "A recent, friendly, well-lit photo of the clinician alone. Avoid stock images, group shots and heavy filters, and add alt text with the person's name and role.",
      },
      {
        q: "How long should the bio be?",
        a: "Long enough to answer a new client's main questions, usually 300 to 500 words. Put the most useful facts first and let readers who want more continue below.",
      },
    ],
    citations: [{ publisher: "American Psychological Association", label: "Ethical principles of psychologists and code of conduct", href: "https://www.apa.org/ethics/code" }, FL_MENTAL, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Pages", description: "Bio pages that earn trust and rank." },
      { href: "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims", label: "Specialty Pages", description: "Describe specialties without clinical claims." },
      { href: "/guides/our-approach-page-for-a-therapy-practice-without-outcome-claims", label: "Our Approach Page", description: "Explain your method without outcome claims." },
      { href: "/mental-health", label: "Mental Health Marketing", description: "Our service for counseling practices." },
    ],
  },

  // ---------------------------------------------------------------- 1002
  {
    slug: "careers-page-and-job-posting-markup-for-a-medical-practice",
    keyword: "careers page and job posting markup for a medical practice",
    category: "How-to",
    title: "Careers Page and Job Posting Markup for a Medical Practice",
    metaTitle: "Careers Page and Job Posting Markup for a Practice",
    metaDescription:
      "How a medical practice can build a careers page and add job posting markup so open roles can appear in Google's job search. Call (561) 291-2681.",
    answer:
      "A practice careers page should list each open role on its own page with the title, location, duties, requirements, pay information where you can share it and a simple way to apply. Add JobPosting structured data to each role, remove it when the role is filled, and never ask applicants for health details.",
    author: "Gio LaRoche",
    publishDate: "2026-10-15T13:20:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("Hiring is a marketing channel too"),
      p(
        "A front desk coordinator, a medical assistant or a clinician who leaves is felt at once in the schedule. Many practices handle it by posting on a big job board and hoping. A clear careers page on your own site gives candidates a reliable place to look and lets the practice show what working there is like."
      ),
      p(
        "It also supports patient trust. A practice that is open about its team and values reads as established, and candidates often become patients or refer them."
      ),
      h2("Structure the careers section"),
      ul(
        "One careers page that lists current openings and links to a page for each role.",
        "A short, honest description of the practice and the team, with a photo if staff agree.",
        "One page per role, with its own address, so that each posting can be shared and found.",
        "A plain statement that the practice is an equal opportunity employer, if it is.",
        "A way to say no openings right now, with an option to send a general inquiry."
      ),
      p(
        "Avoid making a role page by editing a single page every time. A separate address per role lets you remove a filled job cleanly, instead of leaving an old posting to frustrate applicants."
      ),
      h2("What each role page should say"),
      table(
        ["Part", "Detail"],
        ["Title", "The real job title, not a slogan."],
        ["Location", "The office address, or remote if applicable."],
        ["Duties and requirements", "A short list of what the person will do and what is needed, such as licenses."],
        ["Pay and schedule", "A range or a statement of when it will be discussed, plus hours."],
        ["How to apply", "A form or email address, asking only for work history."]
      ),
      p(
        "Share pay information where you can. Candidates search for it, and some jurisdictions require it. Check the rules that apply to your state and employer size, or ask an employment lawyer, rather than relying on a blog."
      ),
      h3("Keep the application simple and clean"),
      p(
        "Ask for a résumé and contact details. Do not ask for health information, a photograph or details about family status. Treat applicant data with the same care you give patient data, store it where only the hiring manager can see it, and set a date to delete old applications."
      ),
      h2("Add JobPosting markup"),
      p(
        "Google can show eligible job postings in a special search experience if the page includes JobPosting structured data. The required fields include the title, description, date posted, hiring organization and job location, and Google documents the full list. The practice should also include a valid-through date when the posting has an end date."
      ),
      ol(
        "Add JobPosting JSON-LD to each role page, matching the visible text exactly.",
        "Use the practice's real name and address as the hiring organization and location.",
        "Test the page with Google's Rich Results Test before publishing.",
        "Update or remove the markup the day the role is filled.",
        "Submit the page to be recrawled using the sitemap, not by repeated manual requests."
      ),
      p(
        "Follow the general testing steps in [how to test and validate structured data](/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website). Link the careers page from the footer and the about page, and see [what to put on a medical practice about page](/guides/what-to-put-on-a-medical-practice-about-page) for how to describe the team honestly."
      ),
      h2("Keep postings honest and current"),
      p(
        "Review the careers page on the first of every month. Remove roles that are filled or on hold, correct the date posted when a role is reopened, and update the pay range if it changed. Candidates remember practices that respond, so set a standard for acknowledging applications and tell applicants when the role is filled."
      ),
      p(
        "Keep a simple record of where each hire came from. It shows whether your own page, a job board or a referral is worth the effort."
      ),
    ],
    faqs: [
      {
        q: "Does a small practice need a careers page?",
        a: "If you hire even once a year, yes. A simple page with current openings or a general inquiry form costs little and gives candidates a clear place to apply.",
      },
      {
        q: "What is JobPosting structured data?",
        a: "It is code on a job page that tells Google the role's title, employer, location, date posted and more, so the posting can appear in job search results when it meets Google's guidelines.",
      },
      {
        q: "Should we publish a salary range?",
        a: "Often it helps, because candidates look for it and some places require it. Check your state's rules or ask an employment lawyer, and keep the range honest.",
      },
      {
        q: "What happens when a job is filled?",
        a: "Remove the structured data, mark the page as closed or remove it, and update the careers list the same day. Leaving expired postings online frustrates candidates and can violate Google's guidelines.",
      },
      {
        q: "Can applicants upload documents on the site?",
        a: "Yes, if the form is secure and stored properly. Ask only for what is needed for hiring and keep applicant files separate from patient records.",
      },
    ],
    citations: [{ publisher: "Google Search Central", label: "Job posting structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/job-posting" }, { publisher: "U.S. Equal Employment Opportunity Commission", label: "Prohibited employment policies and practices", href: "https://www.eeoc.gov/prohibited-employment-policiespractices" }, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website", label: "Validate Structured Data", description: "Test markup before and after publishing." },
      { href: "/guides/what-to-put-on-a-medical-practice-about-page", label: "About Page", description: "Describe the practice and team honestly." },
      { href: "/guides/schema-markup-for-a-medical-practice-website-explained", label: "Schema Markup", description: "Structured data explained for practices." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },

  // ---------------------------------------------------------------- 1003
  {
    slug: "fixing-a-google-business-profile-marked-permanently-closed-for-an-open-practice",
    keyword: "fixing a google business profile marked permanently closed for an open practice",
    category: "How-to",
    title: "Fixing a Google Business Profile Marked Permanently Closed for an Open Practice",
    metaTitle: "Fix a Practice Marked Permanently Closed on Google",
    metaDescription:
      "What to do when Google shows an open medical or counseling practice as permanently closed, and how to prevent it. Call (561) 291-2681.",
    answer:
      "If Google shows your open practice as permanently closed, sign in to the profile as an owner and look for the option to mark it open again, check for a duplicate or old listing at the same address, and contact Google Business Profile support with proof if the option is missing. Then find out what triggered the change, so it does not recur.",
    author: "Liam Costello",
    publishDate: "2026-10-15T13:40:00Z",
    dateModified: "2026-10-15",
    readMinutes: 6,
    sections: [
      h2("A closed label costs calls immediately"),
      p(
        "When a practice's listing says permanently closed, patients searching on a phone see a red label, skip the listing and call someone else. Often the practice does not know for weeks, because nobody on staff searches for their own name. The first sign is a drop in calls and direction requests."
      ),
      p(
        "The cause is usually not a mystery. Someone suggested an edit, an old listing at the same address was merged in a way nobody noticed, or a moved practice's former address was marked closed and the profile got tangled with it."
      ),
      h2("Confirm what Google shows, then check the owner view"),
      ol(
        "Search for the practice name and city on a phone, signed out, and take a screenshot of what appears.",
        "Open the Business Profile manager signed in as an owner or manager and look at the status of the profile.",
        "Check for a prompt such as a button to mark the business as open, or a notice about a suggested change or verification.",
        "Look for a second listing for the same practice at the same address, which can be the one marked closed.",
        "Check that the hours and category are present; an empty profile is easier to mark closed."
      ),
      p(
        "If the profile is verified and shows an option to mark it open, use it, then confirm after a day or two that the public listing changed. The steps are the same for any edit on the profile, and our guide on [handling suggested edits](/guides/how-to-handle-google-business-profile-suggested-edits) explains how to review and reverse changes Google or the public has proposed."
      ),
      h2("When the option is missing"),
      table(
        ["Situation", "Next step"],
        ["Verified owner, no reopen option", "Contact Business Profile support through the help center and include proof of operation."],
        ["Listing not claimed by you", "Claim and verify it first, then request the change."],
        ["Duplicate at the same address", "Report the duplicate and ask for a merge; see the duplicate-listing guide."],
        ["Profile suspended", "Treat it as a suspension and follow the reinstatement process."]
      ),
      p(
        "Proof of operation can include a photo of the exterior sign, a recent utility bill or license, and the practice's business registration. Keep the request factual, attach clear images and avoid threats or repeated resubmissions, which slow things down. If the problem is tangled with a suspension, work through [fixing a suspended Google Business Profile](/guides/fix-a-suspended-google-business-profile), and if two listings exist, use [fixing duplicate Google Business Profile listings](/guides/fix-duplicate-google-business-profile-listings)."
      ),
      h3("If you moved recently"),
      p(
        "A practice that moved should update the existing profile's address rather than create a new one, and the old address should not carry a separate listing. Follow the [office move checklist](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) so you do not leave an old listing that could be marked closed."
      ),
      h2("Prevent it from happening again"),
      ul(
        "Turn on email notifications for the profile so suggested edits reach someone who will read them.",
        "Add a calendar reminder to search the practice name each month on a phone and check for red labels.",
        "Keep hours, categories and photos current, since active profiles are harder to challenge.",
        "Limit who has manager access, and remove departed staff the same day.",
        "Record the date of each fix and the evidence used, so a repeat is quick to handle."
      ),
      p(
        "Report the problem to the rest of the team too. A front desk that knows what to say when a patient mentions the closed label can reassure callers and tell you right away if it returns."
      ),
    ],
    faqs: [
      {
        q: "Why would Google mark an open practice as closed?",
        a: "Common causes include a suggested edit from a user, a merge with an old or duplicate listing, or an unclaimed profile at a former address. Sometimes it happens after a move or a long gap in updates.",
      },
      {
        q: "Can I fix it without verifying the profile?",
        a: "Usually not. You need to claim and verify the listing so Google knows you are authorized to change it. Verification can take days, so start as soon as you notice.",
      },
      {
        q: "How long does it take to reopen?",
        a: "Owner changes can appear within a day or two. Support requests take longer, often days. Follow up politely with the same case and avoid opening duplicate requests.",
      },
      {
        q: "Will it affect my ads or rankings?",
        a: "A closed label can reduce clicks and calls, and a profile in this state is not shown in the usual local results. Once it is reopened, normal visibility generally returns over time.",
      },
      {
        q: "Should we tell patients about it?",
        a: "A simple note on the website and a message on the phone greeting can help while it is fixed. Keep the wording factual, such as we are open and our hours are on our website.",
      },
    ],
    citations: [{ publisher: "Google Business Profile Help", label: "Business Profile help center", href: "https://support.google.com/business/answer/7091" }, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/fix-a-suspended-google-business-profile", label: "Suspended Profile", description: "Reinstate a suspended listing." },
      { href: "/guides/fix-duplicate-google-business-profile-listings", label: "Duplicate Listings", description: "Merge or remove duplicate profiles." },
      { href: "/guides/how-to-handle-google-business-profile-suggested-edits", label: "Suggested Edits", description: "Review and reverse public edits." },
      { href: "/primary-care", label: "Primary Care Marketing", description: "Our service for primary care practices." },
    ],
  },
];
