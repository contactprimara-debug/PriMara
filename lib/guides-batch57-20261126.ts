// -- Guides batch 57 - 2026-11-26 (afternoon) --
// Five guides from the Command Center queue (rows 2161, 2163, 2166, 2167, 2168), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care and counseling practice owner audience only. Sources fetched and read
// before writing: MedlinePlus fasting for a blood test, DOJ/ADA.gov guidance for medical care providers on mobility
// disabilities, NIMH psychotherapies page, MedlinePlus talking with your doctor, CMS No Surprises Act understanding
// costs in advance. Plain practical guidance, no legal advice, no clinical claims, no outcome promises, no patient
// details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const MEDLINE_FAST = {
  publisher: "MedlinePlus (National Library of Medicine)",
  label: "Fasting for a Blood Test",
  href: "https://medlineplus.gov/lab-tests/fasting-for-a-blood-test/",
};
const ADA_MEDICAL = {
  publisher: "ADA.gov (U.S. Department of Justice)",
  label: "Access to Medical Care for Individuals with Mobility Disabilities",
  href: "https://www.ada.gov/resources/medical-care-mobility/",
};
const NIMH_PSYCH = {
  publisher: "National Institute of Mental Health",
  label: "Psychotherapies",
  href: "https://www.nimh.nih.gov/health/topics/psychotherapies",
};
const MEDLINE_TALK = {
  publisher: "MedlinePlus (National Library of Medicine)",
  label: "Talking With Your Doctor",
  href: "https://medlineplus.gov/talkingwithyourdoctor.html",
};
const CMS_GFE = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "Understanding costs in advance (No Surprises Act)",
  href: "https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const PHONE = { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Click-to-Call Links", description: "One number, tappable everywhere." };

export const guidesPartForty20: Guide[] = [
  // ---------------------------------------------------------------- 2161
  {
    slug: "fasting-blood-test-appointment-instructions-page-for-a-primary-care-practice-that-points-to-the-lab-written-instructions",
    keyword: "a fasting blood test appointment instructions page for a primary care practice that points to the lab written instructions",
    category: "Checklist",
    title: "Fasting Blood Test Instructions Page That Points to the Lab",
    metaTitle: "Fasting Blood Test Instructions Page for a Practice",
    metaDescription:
      "How a primary care practice can explain fasting before a blood test without guessing, by pointing to the lab's own written instructions. (561) 291-2681.",
    answer:
      "A fasting instructions page should explain the general idea in plain words and then send the patient to the written instructions from the lab or the ordering clinician. Do not publish your own hours or rules, because they change by test. Tell patients to call before they eat if they are unsure.",
    author: "Liam Costello",
    publishDate: "2026-11-26T21:00:00Z",
    dateModified: "2026-11-26",
    readMinutes: 5,
    sections: [
      h2("Why patients call about fasting"),
      p(
        "Fasting is a small instruction with a large cost when it goes wrong. A patient who drinks coffee on the way to the lab may be sent home and told to come back, which means a lost morning and a second trip. The questions arrive at the front desk before eight o'clock: can I take my pills, is water allowed, how long is long enough."
      ),
      p(
        "A short page answers the common version of those questions and, more importantly, tells the patient where the exact rules live. The practice does not need to be the author of the rules. It needs to be the place where the patient finds them."
      ),
      h2("What public health sources say in general"),
      p(
        "MedlinePlus explains that fasting before a blood test means avoiding food and drink other than plain water for several hours, and that you usually need to fast for 8 to 12 hours before a test. It adds that your provider gives the exact timing for your test. It also says plain water is allowed, and it points out that flavored or carbonated waters may contain sugar or sweeteners."
      ),
      p(
        "On medicines, the same page tells patients to ask their provider whether usual prescription and over-the-counter medicines are fine during the fast, and not to stop taking medicines unless the provider says to stop. If a patient eats or drinks by mistake, MedlinePlus says to tell the provider before the test, because the visit may need to be rescheduled so the results are accurate."
      ),
      h2("What your page should and should not do"),
      table(
        ["Do this", "Not this"],
        ["Say fasting rules depend on the test and link to the lab's written sheet", "Publish one fixed number of hours for every patient"],
        ["Say plain water is usually fine and to confirm with the office", "List foods and drinks as if the page were medical advice"],
        ["Tell patients to ask before changing any medicine", "Tell patients to skip or take a medicine"],
        ["Give the phone number as a tappable link", "Ask patients to type symptoms or results into a form"],
        ["Say what to do if they ate by mistake: call before the draw", "Promise that the lab will make an exception"]
      ),
      h3("Point to the lab, not around it"),
      p(
        "Most practices send blood work to a lab partner whose instruction sheets are written for each test. Link to that sheet, or tell patients the order slip carries it. A practice that rewrites the lab's rules on its own page owns every update, and when the lab changes a form the practice page is wrong without anyone noticing."
      ),
      h2("A simple page layout"),
      ol(
        "A one-sentence summary at the top: some blood tests need fasting and some do not, and your order tells you which.",
        "Where to find the written instructions: the order slip, the portal message or the lab's website.",
        "A short plain-water note with a reminder to check medicines with the office first.",
        "What to do after a mistake: call before the appointment, not after the draw.",
        "The lab's address and hours, linked from the lab partner page rather than copied.",
        "The office phone number as a tappable link."
      ),
      p(
        "Keep the language at a level a tired patient can read at six in the morning. Use real text, never a picture of a flyer, so phone screen readers and translation tools can handle it."
      ),
      h2("Keep it honest and private"),
      p(
        "Do not describe what any result means, and do not name conditions that a test is checking for. The page is about preparing, not interpreting. On any request form, ask only for name, phone and best time, because a free-text box invites patients to type private details into a form that travels by email."
      ),
      p(
        "This guide is practical wording advice for a practice owner. It is not clinical advice, and the clinicians in your practice and your lab decide the actual instructions for each test."
      ),
    ],
    faqs: [
      {
        q: "Should the page say how many hours to fast?",
        a: "Only as a general idea attributed to a public health source, and always with a line that the exact timing comes from the ordering clinician or the lab sheet. A single number on your page will be wrong for some tests.",
      },
      {
        q: "Can the page say patients may drink water?",
        a: "MedlinePlus says plain water is allowed during a fast. You can repeat that and add that patients should confirm with the office, because instructions for a specific test can differ.",
      },
      {
        q: "What about medicines during a fast?",
        a: "Do not give instructions. Tell patients to ask the office before changing any medicine, and not to stop a medicine unless their clinician tells them to.",
      },
      {
        q: "Should we list which tests need fasting?",
        a: "No. A list invites patients to decide for themselves and goes out of date. Say the order slip or the portal message states whether fasting is needed.",
      },
      {
        q: "Who should approve the wording?",
        a: "The lead clinician or the nurse who answers these calls, ideally alongside the lab partner's written sheet, so the page and the phone script say the same thing.",
      },
    ],
    citations: [MEDLINE_FAST],
    links: [
      { href: "/guides/pharmacy-and-lab-partner-information-page-for-a-primary-care-practice", label: "Pharmacy and Lab Partner Page", description: "Where patients go for blood work." },
      { href: "/guides/after-visit-summary-explained-page-for-a-primary-care-practice-without-clinical-advice", label: "After-Visit Summary Page", description: "Explain documents, not results." },
      PHONE,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2163
  {
    slug: "wheelchair-and-mobility-access-details-page-for-a-primary-care-practice-building-and-exam-rooms",
    keyword: "a wheelchair and mobility access details page for a primary care practice building and exam rooms",
    category: "Checklist",
    title: "Wheelchair and Mobility Access Details Page for a Practice",
    metaTitle: "Wheelchair and Mobility Access Page for a Practice",
    metaDescription:
      "How a primary care practice can describe building and exam room access for wheelchair users with measured facts, not promises. (561) 291-2681.",
    answer:
      "A mobility access page should state measured facts about the entrance, route, exam room, table and scale, and tell patients how to ask for help before the visit. Use only what you have checked in person. Do not promise full accessibility. Invite the patient to call so staff can prepare.",
    author: "Gio LaRoche",
    publishDate: "2026-11-26T21:00:00Z",
    dateModified: "2026-11-26",
    readMinutes: 5,
    sections: [
      h2("The patient is deciding whether to come at all"),
      p(
        "A patient who uses a wheelchair or a walker often asks the same silent question before booking: will I be able to get in and be examined properly here. If the website does not answer, many will not call to ask. They will book somewhere that states the answer, or they will skip care."
      ),
      p(
        "A page that gives plain, checked facts helps those patients and helps the practice, because the front desk stops improvising on the phone. It also forces the owner to walk the building once with a tape measure, which is worth doing for its own sake."
      ),
      h2("What the federal guidance looks at"),
      p(
        "The Department of Justice publishes guidance on access to medical care for people with mobility disabilities. It describes an accessible route to and through the exam room at least 36 inches wide, and an entry door with a clear opening of at least 32 inches when the door is open 90 degrees. It describes adjustable-height exam tables that lower to 17 to 19 inches from the floor, with clear floor space of at least 30 by 48 inches alongside the table."
      ),
      p(
        "The same guidance describes accessible scales with a platform large enough for a wheelchair, and it discusses transfers: some patients transfer on their own, some with a steadying hand or a transfer board, and some with a staff-operated lift. It says the provider should ask the patient whether they need help and how to help best, and not leave the patient unattended unless the patient says they do not need assistance."
      ),
      p(
        "This guide does not interpret the law. If you are unsure whether your building meets the requirements, ask a qualified accessibility consultant, and use your page only to report what is true today."
      ),
      h2("What to measure and write down"),
      table(
        ["Item", "What the page can state"],
        ["Parking and drop-off", "Where accessible spaces are, and how far to the entrance"],
        ["Entrance", "Whether the door opens automatically or by hand, and the clear width you measured"],
        ["Hallways and waiting room", "Route width, and whether chairs or carts are kept out of the way"],
        ["Restroom", "Whether one is reachable by wheelchair, and where it is"],
        ["Exam room", "Whether any room has space to turn and clear floor beside the table"],
        ["Exam table", "Whether the table lowers, and whether the practice has rails or positioning aids"],
        ["Scale", "Whether a wheelchair-accessible scale is available, and where"]
      ),
      h3("Say what you do not have"),
      p(
        "If the practice has no lowering table or no accessible scale, say so and say what the office does instead, such as arranging care at a partner location. A patient can plan around an honest limit. They cannot plan around a surprise at the door."
      ),
      h2("How to ask for help before the visit"),
      ol(
        "Give the office phone number as a tappable link at the top of the page.",
        "Say patients may tell the front desk what would help, and that they never have to explain a diagnosis to be accommodated.",
        "Say scheduled patients can ask for a room set up in advance.",
        "Offer a short request form that collects name, phone and best time only.",
        "Say who will answer, and the next business day as the longest wait for a reply."
      ),
      p(
        "Link this page from the contact page, the new patient page and the footer, and keep it consistent with the Google Business Profile accessibility attributes so the facts match everywhere."
      ),
      h2("Train the people behind the page"),
      p(
        "A page is only as good as the answer on the phone. Give the front desk the same facts, practice moving the equipment once, and keep hallways clear every day. Re-measure and update the page whenever the office is rearranged."
      ),
    ],
    faqs: [
      {
        q: "Should the page say the office is ADA compliant?",
        a: "Better not to. Compliance is a legal conclusion for a qualified professional. State the measured facts and invite the patient to call.",
      },
      {
        q: "Do we have to list every measurement?",
        a: "No. Entrance width, route, whether the exam table lowers and whether an accessible scale is available answer most patient questions. Add more only if you have measured it.",
      },
      {
        q: "What if only one exam room is accessible?",
        a: "Say so, and say patients can ask for that room when they book. Reserving it for scheduled patients who need it is a reasonable practice.",
      },
      {
        q: "Can the page ask patients about their disability?",
        a: "It should not. Ask what would help, not what the diagnosis is. Keep the request form to name, phone and best time.",
      },
      {
        q: "How often should we update it?",
        a: "Check it twice a year and any time the layout, parking or equipment changes. An out-of-date accessibility page is worse than none.",
      },
    ],
    citations: [ADA_MEDICAL],
    links: [
      { href: "/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice", label: "Accessibility Accommodation Request Page", description: "How patients ask for help." },
      { href: "/guides/office-tour-and-photos-page-for-new-primary-care-patients", label: "Office Tour and Photos Page", description: "Show the building before the visit." },
      { href: "/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice", label: "Accessibility Statement Page", description: "Let patients report a barrier." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2166
  {
    slug: "choosing-between-in-person-and-telehealth-sessions-page-for-a-counseling-practice",
    keyword: "choosing between in-person and telehealth sessions page for a counseling practice",
    category: "Checklist",
    title: "Choosing In-Person or Telehealth Sessions: A Counseling Practice Page",
    metaTitle: "In-Person or Telehealth Sessions: Counseling Page",
    metaDescription:
      "How a counseling practice can help a new client choose between in-person and video sessions, with plain wording and no promises. (561) 291-2681.",
    answer:
      "A choosing page should list what each format needs, such as travel and a private room for video, and let the client pick and change later. Do not claim one format works better. Say the clinician can talk it through at the first contact, and give a phone number and a short request form.",
    author: "Liam Costello",
    publishDate: "2026-11-26T21:00:00Z",
    dateModified: "2026-11-26",
    readMinutes: 5,
    sections: [
      h2("The question comes before the first booking"),
      p(
        "Many prospective clients cannot say which format they want until someone describes both. They wonder about the drive, about doing a session from their living room, about who might overhear, and about whether the practice treats video as a lesser option. A short page that sets the two side by side removes the guessing."
      ),
      h2("What a public mental health source says"),
      p(
        "The National Institute of Mental Health notes that a first conversation with a prospective therapist may happen in person, by phone, or virtually. The same page says rapport and trust are essential and that a preliminary conversation can show whether you feel at ease with the therapist. For your page, that supports one simple message: the format is a choice the client can discuss, and comfort matters."
      ),
      p(
        "NIMH also points readers to its own material on getting mental health support virtually, which covers benefits, drawbacks and factors to consider. Link there rather than writing your own claims about which format is better."
      ),
      h2("Set the two formats side by side"),
      table(
        ["Format", "What the client should know"],
        ["In person", "Travel to the office, a waiting area, and a private room provided by the practice"],
        ["Video", "A device, a steady connection and a private space at home or elsewhere that the client arranges"],
        ["Phone", "Offered only if the practice offers it; say so plainly"],
        ["Switching", "A client may change formats for a session or permanently by asking the front desk"]
      ),
      h3("Describe what the practice provides"),
      p(
        "Say what the practice supplies in each format: a quiet room and a secure sign-in link, for example. Say what the client supplies: a device, a place where they will not be interrupted and, for video, a way to be reached if the connection drops. Tell them in the same place that the clinician will ask where they are at the start of a video session, and link to your location confirmation page."
      ),
      h2("Questions a client can ask themselves"),
      ul(
        "Is there a private space I can use for an hour without interruption?",
        "Would the trip to the office make it harder to keep appointments?",
        "Do I feel more at ease talking in a room with the clinician, or from home?",
        "Do I have a device and connection I can rely on?",
        "Would I want to be able to switch between the two?"
      ),
      p(
        "Put these as questions, not advice. The clinician can help the client think them through at the first contact, and that offer belongs on the page."
      ),
      h2("What to leave off"),
      p(
        "Do not say video is just as effective or that in-person is better. Do not name conditions that suit one format. Do not promise a session will be private on the client's end. You control your platform and your room, not the client's household."
      ),
      p(
        "Finish with two ways to ask: a tappable office number and a short request form collecting name, phone and best time, with nothing about symptoms. If someone is in crisis, show the emergency line instructions the practice already uses."
      ),
    ],
    faqs: [
      {
        q: "Should the page say which format is more effective?",
        a: "No. That is a clinical claim the page cannot support. Describe the practical differences and leave the choice with the client and clinician.",
      },
      {
        q: "Can a client switch formats later?",
        a: "Say so only if your practice allows it. Many practices do, and clients are relieved to read that choosing now does not lock them in.",
      },
      {
        q: "Do we need to name the video platform?",
        a: "Name the kind of sign-in, such as a secure link sent by the practice, and link to your technology check page. Avoid listing software that you may change.",
      },
      {
        q: "What about clients in another state?",
        a: "Telehealth rules depend on where the client is and where the clinician is licensed. Link to your states served page and have your adviser approve the wording.",
      },
      {
        q: "Should in-person be shown first?",
        a: "Show them side by side in a table. Ranking one above the other implies a preference the practice may not hold.",
      },
    ],
    citations: [NIMH_PSYCH],
    links: [
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent and Technology Check", description: "What clients need for video." },
      { href: "/guides/session-length-and-frequency-explained-on-a-therapy-practice-website-without-promising-results", label: "Session Length and Frequency Page", description: "Scheduling facts, plainly." },
      { href: "/guides/client-location-confirmation-at-the-start-of-a-telehealth-session-page-for-a-counseling-practice", label: "Client Location Confirmation Page", description: "Where the client is at the start." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2167
  {
    slug: "bringing-a-family-member-or-friend-as-an-advocate-to-a-primary-care-visit-page",
    keyword: "bringing a family member or friend as an advocate to a primary care visit page",
    category: "Checklist",
    title: "Bringing a Family Member or Friend to a Visit: A Practice Page",
    metaTitle: "Bringing a Family Member or Friend to a Visit Page",
    metaDescription:
      "How a primary care practice can welcome a companion to a visit, explain how the patient stays in charge, and keep privacy clear. (561) 291-2681.",
    answer:
      "A companion page should say that patients are welcome to bring a trusted family member or friend, and that the patient decides what is shared. Explain how the companion can help, such as writing questions and taking notes. Say what the office needs, like the patient's permission, and give a phone number.",
    author: "Gio LaRoche",
    publishDate: "2026-11-26T21:00:00Z",
    dateModified: "2026-11-26",
    readMinutes: 5,
    sections: [
      h2("Many patients want a second set of ears"),
      p(
        "A new diagnosis, a long medicine list or a hard conversation is easier with someone beside you. Patients also worry about whether they are allowed to bring a person, whether the doctor will mind, and whether a companion will hear things the patient wanted private. A short page settles all three."
      ),
      h2("What a public health source suggests"),
      p(
        "MedlinePlus, in its guidance on talking with your doctor, suggests that patients make lists of their allergies and all medicines, herbs, vitamins and supplements, write down their questions and concerns, and describe their symptoms including when they started and what makes them better or worse. It also suggests asking a trusted friend or family member to come to the appointment, and taking notes during the visit, which the companion can do."
      ),
      p(
        "Your page can borrow that framing without adding medical advice. It tells the patient what to bring and what a companion is for, in the practice's own friendly words."
      ),
      h2("What the page should explain"),
      ol(
        "That companions are welcome, and whether any limits apply, such as space in the exam room or visit types where staff ask the companion to wait outside.",
        "That the patient decides who comes in and what is shared, and can ask the companion to step out at any point.",
        "How the companion can help: writing down questions beforehand, taking notes, and repeating back what they heard.",
        "What the practice needs from the patient, such as saying at check-in that the companion may stay.",
        "How a companion joins by phone or video if they cannot come in person."
      ),
      h3("Keep the patient in charge"),
      p(
        "Staff should address the patient directly, not the companion, and ask the patient before sharing anything in front of another person. Say that on the page. It reassures the patient who fears being talked over, and it protects the practice."
      ),
      h2("Wording that works"),
      table(
        ["Say this", "Not this"],
        ["You are welcome to bring someone you trust", "Only immediate family may attend"],
        ["You choose what we discuss in front of them", "Your companion will receive your results"],
        ["They can take notes while we talk", "They may speak for you"],
        ["Tell us when you check in that they will join you", "Companions must register in advance"]
      ),
      p(
        "Keep the difference clear between a companion at a visit and someone who is allowed to receive information afterward. The first is a courtesy in the room. The second is a decision recorded in the patient's chart, and your caregiver communication policy page is the place that explains it."
      ),
      h2("A short checklist for the patient"),
      ul(
        "Write your questions down with the most important one first.",
        "Bring your medicine list, including vitamins and supplements.",
        "Tell your companion what you want them to do: listen, write, or speak up if you forget something.",
        "Tell the front desk at check-in that they are with you."
      ),
      p(
        "Make the page easy to find from the booking page, and add the office phone number as a tappable link for patients who want to ask before the day. This guide is practical wording advice, not legal advice, and your compliance contact should approve the final text."
      ),
    ],
    faqs: [
      {
        q: "Does the companion need to sign a form?",
        a: "Being in the room at the patient's invitation is different from receiving information later. Your practice policy and your compliance contact decide what is needed, and the page should state it plainly.",
      },
      {
        q: "Can the page say companions are always allowed?",
        a: "Only if that is true. Some visits, such as parts of an exam, may be private. State the real rule, and say staff will explain at the visit.",
      },
      {
        q: "What about children as companions?",
        a: "Decide your policy for supervision and say it briefly. Many practices ask that children have an adult with them.",
      },
      {
        q: "Should we offer phone or video for a companion?",
        a: "If your practice can, say so and say how to arrange it. It helps families who live far away.",
      },
      {
        q: "Should the page mention an advocate by title?",
        a: "Use plain words such as family member or friend. Title words like advocate can sound formal or suggest a legal role that your practice cannot define.",
      },
    ],
    citations: [MEDLINE_TALK],
    links: [
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Caregiver and Family Communication Policy", description: "Who may receive information." },
      { href: "/guides/establishing-care-visit-explained-page-for-a-primary-care-practice", label: "Establishing Care Visit Page", description: "What a first visit covers." },
      { href: "/guides/booking-several-family-members-in-one-visit-page-for-a-primary-care-practice", label: "Booking Several Family Members Page", description: "One visit, more than one person." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2168
  {
    slug: "payment-plan-wording-page-for-a-counseling-practice-without-amounts",
    keyword: "payment plan wording page for a counseling practice without amounts",
    category: "Checklist",
    title: "Payment Plan Wording Page for a Counseling Practice",
    metaTitle: "Payment Plan Wording for a Counseling Practice",
    metaDescription:
      "How a counseling practice can describe payment plans respectfully, without amounts, and point self-pay clients to a good faith estimate. (561) 291-2681.",
    answer:
      "A payment plan page should say whether the practice offers plans, how a client asks, and when the arrangement is agreed, without publishing amounts or terms. Tell self-pay clients they may ask for a good faith estimate. Keep the tone respectful, and send the conversation to a private call.",
    author: "Liam Costello",
    publishDate: "2026-11-26T21:00:00Z",
    dateModified: "2026-11-26",
    readMinutes: 5,
    sections: [
      h2("Money is the question people are shy about"),
      p(
        "Many people postpone counseling because they are unsure what it will cost and embarrassed to ask. If the website says nothing about payment, they assume the worst and do not call. A page that explains how the practice handles payment, with kindness and no figures, brings those people to the phone."
      ),
      h2("Wording, not prices"),
      p(
        "Our rule is that prices stay off the website, and a payment plan page does not need them. What it needs is process: whether plans exist, who to ask, and what happens next. Amounts, due dates and fees belong in a written agreement the client reads and signs with the practice, not on a public page that goes stale."
      ),
      h2("What a federal source says about estimates"),
      p(
        "The Centers for Medicare and Medicaid Services explains that people who do not have or do not use health insurance can generally ask for a good faith estimate of what their care will cost, and that providers typically must give one if you ask or if you schedule care in advance, generally when services are scheduled at least 3 business days ahead. Your page can mention that right in a single sentence and link to the CMS page, leaving the details to the practice's own notice."
      ),
      p(
        "The National Institute of Mental Health also advises people looking for a therapist to ask about fees, whether the therapist accepts insurance and whether there is a sliding fee scale. A page that already answers those questions meets the client where they are."
      ),
      h2("What the page can say"),
      ul(
        "Whether the practice offers payment plans, in one sentence, yes or no.",
        "That the client can ask for one before the first session, in a private call or message.",
        "That a plan is agreed in writing between the client and the practice.",
        "That self-pay clients may ask for a good faith estimate, with the CMS link.",
        "That the practice will not change the terms without telling the client first."
      ),
      table(
        ["Say this", "Not this"],
        ["Ask us about payment options when you book", "Easy monthly payments from a low amount"],
        ["Any plan is agreed in writing before it starts", "No credit check, no questions"],
        ["Self-pay clients can ask for a good faith estimate", "Guaranteed lowest rate"],
        ["Call or message us and we will talk it through", "Fill out this form with your income"]
      ),
      h3("Keep the conversation private"),
      p(
        "Do not ask for income, bank or card details on a public form. Tell clients the conversation happens by phone or on the secure portal, and that front desk staff will not discuss it where others can hear. A short sentence about privacy builds more trust than any discount line."
      ),
      h2("Connect it to the rest of your billing pages"),
      p(
        "A payment plan note works best beside the pages that explain fees, card on file, insurance statements and fee changes, so a client who reads one finds the others. Agree on one wording with the person who sends invoices, and use the same words on the phone, on the website and in the intake packet."
      ),
      p(
        "This guide is plain wording advice, not legal advice. Have your adviser read the final text, especially the lines about estimates and written agreements."
      ),
    ],
    faqs: [
      {
        q: "Can we list the payment plan terms on the website?",
        a: "It is better not to. Terms change, and amounts invite comparison. Describe the process and put terms in a written agreement.",
      },
      {
        q: "Do we have to offer payment plans?",
        a: "That is a business decision. If you do not offer them, say so kindly and point to other options you have, such as a sliding fee note, so the client is not left guessing.",
      },
      {
        q: "Should the page mention the good faith estimate?",
        a: "For a practice that sees self-pay clients, one sentence and a link to the CMS page is enough. Let your own notice carry the details.",
      },
      {
        q: "What if a client falls behind?",
        a: "Do not put collections language on a public page. Handle it by phone, in the tone you used when the plan began, and follow your written agreement.",
      },
      {
        q: "Where should the link to this page go?",
        a: "From the fees page, the first-session page and the footer billing links, so a worried client can find it in one tap.",
      },
    ],
    citations: [CMS_GFE, NIMH_PSYCH],
    links: [
      { href: "/guides/payment-methods-and-card-on-file-policy-page-for-a-counseling-practice", label: "Payment Methods and Card on File Page", description: "How payment is taken." },
      { href: "/guides/sliding-scale-and-reduced-fee-note-for-a-primary-care-practice-without-discounting-claims", label: "Sliding Scale Note", description: "A fee note without discount claims." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Notice Page", description: "What self-pay clients can ask for." },
      LOC,
    ],
  },
];
