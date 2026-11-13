// -- Guides batch 32 - 2026-11-02 --
// Guide/AEO pages from the Command Center queue (rows 1417-1420, 1423, 1424 plus nine rows planned 2026-11-02),
// built by the page factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only.
// Inbound links are inline [text](/guides/slug) sentences appended to existing indexed guides' body prose.

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
const HHS_NOTICE = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Model Notices of Privacy Practices",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/model-notices-privacy-practices/index.html",
};
const HHS_TELEHEALTH = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Telehealth.HHS.gov resources for providers",
  href: "https://telehealth.hhs.gov/providers",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const FL_MH_BOARD = {
  publisher: "Florida Board of Clinical Social Work, Marriage and Family Therapy and Mental Health Counseling",
  label: "Florida mental health professions licensing",
  href: "https://floridasmentalhealthprofessions.gov/",
};
const FL_PSYCH_BOARD = {
  publisher: "Florida Board of Psychology",
  label: "Florida Board of Psychology",
  href: "https://floridaspsychology.gov/",
};
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business",
  href: "https://support.google.com/business/answer/3038177",
};
const GBP_X_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_X_PERF = {
  publisher: "Google Business Profile Help",
  label: "Understand your Business Profile performance & insights",
  href: "https://support.google.com/business/answer/9918094",
};
const GBP_X_PHOTOS = {
  publisher: "Google Business Profile Help",
  label: "Manage your Business Profile photos & videos",
  href: "https://support.google.com/business/answer/6103862",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GSC_INDEXING = {
  publisher: "Google Search Console Help",
  label: "Page indexing report",
  href: "https://support.google.com/webmasters/answer/7440203",
};
const WCAG = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Web Content Accessibility Guidelines (WCAG) overview",
  href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
};
const ADA_GOV = {
  publisher: "U.S. Department of Justice",
  label: "ADA.gov: Americans with Disabilities Act",
  href: "https://www.ada.gov/",
};
const NIMH_MEDS = {
  publisher: "National Institute of Mental Health",
  label: "Mental health medications",
  href: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
};
const CMS_MLN = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "Medicare Learning Network",
  href: "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts",
};
const CAQH = {
  publisher: "CAQH",
  label: "CAQH ProView provider data",
  href: "https://www.caqh.org/",
};
const SUNBIZ = {
  publisher: "Florida Department of State, Division of Corporations",
  label: "Sunbiz: Florida business records",
  href: "https://dos.fl.gov/sunbiz/",
};
const NO_SURPRISES = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "No Surprises Act overview",
  href: "https://www.cms.gov/nosurprises",
};
const OIG_AKS = {
  publisher: "HHS Office of Inspector General",
  label: "Fraud and abuse laws",
  href: "https://oig.hhs.gov/compliance/physician-education/fraud-abuse-laws/",
};
const CDC_988 = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};

export const guidesPartThirtyFive: Guide[] = [
  // ---------------------------------------------------------------- 1417
  {
    slug: "rescheduling-an-appointment-online-page-for-a-primary-care-practice",
    keyword: "rescheduling an appointment online page for a primary care practice",
    category: "How-to",
    title: "Rescheduling an Appointment Online: Primary Care Page",
    metaTitle: "Rescheduling an Appointment Online: Primary Care Page",
    metaDescription:
      "How a primary care practice can publish a one-screen page for moving an appointment, with notice rules and a phone fallback. Call (561) 291-2681.",
    answer:
      "A rescheduling page tells patients exactly how to move a visit: the fastest route, how much notice you need, what happens to a late change, and who to call when the online tool fails. Keep it to one screen, put the phone number beside the button, and never ask patients why they are moving.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 5,
    sections: [
      h2("Why a rescheduling page is worth having"),
      p(
        "Patients who need to move a visit rarely call first. They search the practice name plus the word reschedule, or they hunt through the menu. When they cannot find a route, many simply do not show up, and the slot sits empty with nobody able to fill it. A short page gives them a way to change the time and gives the front desk a chance to offer the opening to someone else."
      ),
      p(
        "It also takes pressure off the phone. Calls that are only about changing a time tie up the same line that new patients use to ask whether you are taking patients, so a clear page protects the calls that matter most."
      ),
      h2("What belongs on the page"),
      table(
        ["Item", "What to say"],
        ["Fastest route", "Name the portal link or online tool first, then the phone number, in the order most patients will actually use them."],
        ["Notice needed", "State the notice in plain units, such as at least one business day, and use the same words as your cancellation policy."],
        ["Late changes", "Say whether a change inside the notice window counts as a missed visit, and link to the policy page instead of repeating it."],
        ["New and established patients", "Say if a first visit can be moved online or only by phone, because first visits often need a person."],
        ["If the tool fails", "Give the office number and hours as a tap-to-call link, so a patient on a phone is one tap from a person."],
      ),
      h2("Wording that works on a phone"),
      p(
        "Lead with the verb. A button that says Change my appointment time is clearer than one that says Appointment modification. Put the button above the explanation, because someone standing in a parking lot wants the button first and the rules second."
      ),
      ul(
        "Use one label for the main route and keep it the same in the portal, the confirmation message and the footer link.",
        "Show the office phone number as a tap-to-call link, not as plain text that has to be copied.",
        "Do not add a reason field. Why someone is moving a visit can reveal health details, and the form does not need it.",
        "Describe the confirmation without naming the visit type, for example: you will receive a message with your new date and time."
      ),
      h2("Connecting it to the rest of the site"),
      p(
        "Link the page from the footer and from the booking confirmation. Cross-link it to your [cancellation list and same-day openings](/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice) page, so a patient who cannot make a slot can ask for an earlier one, and use the identical notice window in your [late arrival and missed appointment policy](/guides/late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice)."
      ),
      h3("Count the taps"),
      p(
        "A tap on the phone number from this page is worth counting. If your call tracking is set up as described in [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website), you can see how many patients choose the phone over the online tool and adjust which route comes first."
      ),
      h2("A short script for the front desk"),
      p(
        "The page and the phone should say the same thing. Give the front desk four lines to follow, so a patient who calls gets the answer the page promised."
      ),
      ol(
        "Offer the first openings in the next two weeks before asking what suits the patient.",
        "Read the new date and time back, and say how the confirmation will arrive.",
        "Mention the notice window once, kindly, as information and not as a warning.",
        "Do not ask why the visit is moving unless the patient chooses to explain."
      ),
      p(
        "Review the script whenever the policy page changes. A page that promises one thing and a front desk that does another is worse than having no page at all."
      ),
    ],
    faqs: [
      {
        q: "Should a primary care practice let patients reschedule online?",
        a: "If your scheduling system supports it safely, yes. It saves calls and gives patients a route at any hour of the day. If it does not, publish the page anyway and make the phone route obvious. The clarity of the page matters more than the tool behind it.",
      },
      {
        q: "How much notice should the page ask for?",
        a: "Whatever your cancellation policy already says. The page should repeat the same wording and link to the policy, so a patient never sees two different notice windows on one website. Check both pages together whenever either one changes, so they never drift apart.",
      },
      {
        q: "Do we need to ask why the patient is moving the visit?",
        a: "No. A reason field invites health details into a web form, where they are stored and often emailed. If staff need context, they can ask on the phone, where the conversation is not saved in a form submission and the patient can choose what to share.",
      },
      {
        q: "Can patients reschedule a first visit online?",
        a: "Only if your team is comfortable with it. First visits often involve insurance or records steps, so many practices keep them phone-only. Say which applies on the page, so that new patients are not sent through an online tool that cannot actually help them.",
      },
      {
        q: "Where should the page link from?",
        a: "The footer, the booking confirmation and the appointment reminder. Those are the places a patient looks the moment a plan changes. A link buried inside a policy document is a link most patients never find, and they will phone instead or not come at all.",
      },
    ],
    citations: [HHS_PRIVACY, WCAG, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice", label: "Cancellation List And Same-Day Openings", description: "Offering freed-up slots to waiting patients." },
      { href: "/guides/late-arrival-and-missed-appointment-policy-page-for-a-primary-care-practice", label: "Late Arrival And Missed Appointment Policy", description: "One notice window, stated once." },
      { href: "/guides/appointment-reminder-text-and-email-wording-for-a-primary-care-practice-without-health-details", label: "Appointment Reminder Wording", description: "Reminders that carry no health details." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1418
  {
    slug: "office-tour-and-virtual-tour-page-for-a-counseling-practice",
    keyword: "office tour and virtual tour page for a counseling practice",
    category: "How-to",
    title: "Office Tour and Virtual Tour Page for a Counseling Practice",
    metaTitle: "Office Tour and Virtual Tour Page for a Counseling Practice",
    metaDescription:
      "How a counseling practice can show its office with photos or a short video, without showing clients or private files. Call Primara at (561) 291-2681.",
    answer:
      "An office tour page for a counseling practice shows the entrance, waiting area and a therapy room with nobody in the frame, so a nervous first-time client knows what to expect. Use real photos or a short captioned video, hide anything private, and point to the same images on your Google profile.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 5,
    sections: [
      h2("What a first-time client is really asking"),
      p(
        "Walking into a counselor's office for the first time carries a particular worry: who will see me, and where do I wait? A tour page answers those questions before the client has to ask. It shows where the door is, what the waiting area looks like and what the room feels like, and that quiet reassurance can be the difference between booking and closing the tab."
      ),
      p(
        "This is different from a medical office tour, where patients mostly want to know about parking and check-in. For counseling, privacy is the point of the page, so the pictures and the words should both say that the space was set up with it in mind."
      ),
      h2("What to photograph, and what to check first"),
      table(
        ["Photo", "Why it helps, and the privacy check"],
        ["Building entrance", "Helps a client recognize the door on arrival. Check: No signage that names a client or another business's patients."],
        ["Waiting area", "Shows how clients wait and whether they are seen by others. Check: Empty room only, with no sign-in sheet or screen visible."],
        ["Therapy room", "The image clients look at longest. Check: No files, notes, whiteboards or monitors in view."],
        ["Restroom and exit", "Answers practical questions without asking. Check: Nothing identifying a staff member's personal items."],
      ),
      p(
        "Take the pictures when the office is empty, in daylight, at normal height. Real photos beat stock images every time, because a client can tell, and a stock waiting room on a counseling site reads as a place that has something to hide."
      ),
      h2("Adding a virtual tour"),
      p(
        "A virtual tour can be as simple as a 60 to 90 second walk-through video with captions, or a set of 360-degree photos. If the practice is telehealth-only, show the other half of the experience instead: what the video session looks like on a phone, how to join, and what the clinician sees. Either way, give the video a text transcript so it can be read and so it works with the sound off."
      ),
      h3("Accessibility notes that belong on the page"),
      ul(
        "Write alt text for every photo that says what it shows, such as the front entrance with a step-free approach.",
        "State the facts a client with a mobility need would ask for: step-free entry, elevator, accessible restroom and parking.",
        "Caption the video and publish the transcript beneath it."
      ),
      h2("Keep the page and the Google profile in step"),
      p(
        "Upload the same interior and exterior photos to the practice's Google Business Profile, as covered in the [Google Business Profile photos checklist](/guides/google-business-profile-photos-checklist), so a client sees the same space in both places. If the office ever moves, update the tour on the same day, as described in the [office move notice guide](/guides/office-move-within-the-same-city-notice-for-a-counseling-practice). Link the page from your [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice)."
      ),
      h2("Words to put beside the photos"),
      p(
        "Captions do as much as the pictures. Say what is true and useful: where the entrance is, what the waiting area is like and what a session room looks like. A caption such as sound machine outside the door belongs only where the room really has one."
      ),
      ul(
        "Describe the arrival: where to park, which door to use and how to let the office know you are there.",
        "Say whether clients wait in the room or can wait elsewhere, if the practice offers that choice.",
        "Mention what is in the room, such as seating, tissues and natural light, without suggesting what will happen in it.",
        "End with the phone number and the booking link so the page leads somewhere."
      ),
    ],
    faqs: [
      {
        q: "Is it safe to publish photos of a counseling office?",
        a: "Yes, if you photograph an empty room and check every frame for files, screens, sign-in sheets and anything that identifies a client. Photos of the space itself are not protected health information, but anything personal visible in the frame could create a privacy problem.",
      },
      {
        q: "Should clinicians appear in the office photos?",
        a: "Only with their agreement, and never in a way that suggests a client is nearby. Most practices keep the tour page free of people and show the team on a separate page with proper headshots, where each clinician has chosen how they appear.",
      },
      {
        q: "Do we need a video, or are photos enough?",
        a: "Photos are enough. A short captioned video adds reassurance for anxious first-timers, but a poor video is worse than none. If you make one, keep it brief, steady and quiet, publish a transcript, and check that the sound is not recording a conversation behind a door.",
      },
      {
        q: "What if our practice is telehealth only?",
        a: "Replace the office tour with a how a session works page. Show the join screen, explain what to prepare and say what the client will see. The same worry exists for online clients, and an honest walk-through of the first minute answers it just as well.",
      },
      {
        q: "How often should the tour be refreshed?",
        a: "Whenever the space changes, and at least once a year. Out-of-date photos of a room that has since been repainted or rearranged tell a client the page is not looked after, and that undermines trust before the first session has even started.",
      },
    ],
    citations: [ADA_GOV, WCAG, GBP_X_PHOTOS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/office-tour-and-photos-page-for-new-primary-care-patients", label: "Office Tour Page For Primary Care", description: "The medical-office version of this page." },
      { href: "/guides/google-business-profile-photos-checklist", label: "Google Business Profile Photos Checklist", description: "Which photos to upload and how." },
      { href: "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice", label: "First Session Page For A Therapy Practice", description: "What a new client wants to read." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1419
  {
    slug: "first-week-follow-up-check-in-after-the-first-session-wording-for-a-counseling-practice",
    keyword: "first week follow up check in after the first session wording for a counseling practice",
    category: "How-to",
    title: "First-Week Check-In Wording After a First Counseling Session",
    metaTitle: "First-Week Check-In Wording After a First Counseling Session",
    metaDescription:
      "Plain wording for a counseling practice's check-in after the first session: scheduling help only, no clinical content. Call Primara at (561) 291-2681.",
    answer:
      "A first-week check-in after a counseling intake should cover logistics only: thanks for coming, how to book the next session, how to send a non-urgent message, and what to do in a crisis. Leave out anything clinical. Send it once within a business day, and once more if no visit is booked.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("Why the first week matters to a practice"),
      p(
        "The days after a first session are when a new client decides whether to come back. The office rarely hears from clients who quietly drift away, and a short, warm message that makes booking easy is one of the few things the practice controls at that point. It costs a minute to send and says the practice noticed."
      ),
      p(
        "The risk is in the other direction: a message that asks how someone is feeling, refers to what was discussed or names the type of counseling can expose private information if it lands on a shared phone or a work email. So the rule for this message is simple. It is about scheduling, not about the person."
      ),
      h2("What the message may contain"),
      table(
        ["Part", "Safe wording example"],
        ["Thanks", "Thank you for coming in. We were glad to meet you."],
        ["Next step", "If you would like to book your next visit, use this link or call the office."],
        ["Non-urgent contact", "For scheduling or billing questions, message us through the portal or call during office hours."],
        ["Crisis line", "If you need help right away, call or text 988 or call 911."],
        ["Opt-out", "Reply STOP to end texts. You can switch to calls or portal messages at any time."],
      ),
      h2("Timing and a second nudge"),
      ol(
        "Send the first message within one business day of the session, by the channel the client chose at intake.",
        "If no next visit is booked after five to seven days, send one short reminder with the booking link.",
        "If there is still no booking, stop. A third message starts to feel like pressure, and some clients are choosing a different counselor, which is their right."
      ),
      h2("What to leave out"),
      ul(
        "Anything about what was discussed, the reason for the visit or how the client seemed.",
        "The clinician's specialty or the word therapy in a text preview, when the client has not agreed to it.",
        "Questions that invite a clinical reply by text, such as asking how the week went.",
        "Promises about how quickly sessions will help."
      ),
      p(
        "Ask at intake how each client wants to be reached, and record the answer. The channel preference matters more than the exact words, and it ties back to your [auto-reply after a new client inquiry](/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice) and your [texting policy](/guides/texting-between-sessions-policy-page-for-a-counseling-practice)."
      ),
      h2("A sample message you can adapt"),
      p(
        "Hello, this is the front desk at [Practice name]. Thank you for coming in on [day]. To book your next visit, use [link] or call [number]. For an emergency, call 911, or call or text 988. Reply STOP to end texts."
      ),
      p(
        "That is the whole message. It names no service, no clinician and no reason. If the client chose email, use the same words with a subject line that is just the practice name, and add the portal link for non-urgent questions."
      ),
      p(
        "Read it as if you were a roommate glancing at the lock screen. If anything in it would tell you why someone is in treatment, take it out and send the plainer version."
      ),

      { type: "h3", text: "Check how the message arrives" },
      { type: "p", text: "Send the sample to a staff phone and read the lock screen preview. Confirm that the practice name alone does not reveal the kind of care, that the booking link opens properly on a phone and that a STOP reply is honored. Then, once a month, count how many first-session clients booked a second visit within two weeks, using your own sheet with no client names. The [monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice) is a good place to keep the number." },
    ],
    faqs: [
      { q: "Should the message include the clinician's name?", a: "Usually not in a text, because a name and a practice type can reveal care on a shared screen. Ask at intake what each client prefers, record it and follow it." },
      {
        q: "Is it appropriate for a practice to follow up after a first session?",
        a: "Yes, when the message is about scheduling and contact options only and the client agreed to be contacted that way. The follow-up should read like a courtesy from the front desk, not an outreach from the clinician about the client's situation or progress.",
      },
      {
        q: "Should the clinician or the front desk send it?",
        a: "The front desk, or an automated message the practice controls, is usually safest. That keeps clinical content out of the message and makes the wording consistent from one client to the next, so no one has to decide in the moment what is safe to say.",
      },
      {
        q: "Can the message be sent by text?",
        a: "Only if the client agreed to texts at intake and understands the privacy trade-offs. Keep the message free of the practice's specialty and of any clinical wording. If a client prefers email or a phone call, follow that choice and record it in the chart.",
      },
      {
        q: "How many follow-ups are too many?",
        a: "Two is a reasonable limit: one thank-you and one reminder. After that, a client who has not rebooked has made a choice, and further messages can feel like pressure rather than care. Respect that choice, and leave the door open for them to return.",
      },
      {
        q: "Does this wording replace a policy page?",
        a: "No. It supports one. The message should link to your contact options, and your website should explain the same rules, so the client is not surprised by anything in the follow-up. Keep the message and the policy pages in agreement whenever either one is edited.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, CDC_988, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice", label: "Auto-Reply After A New Client Inquiry", description: "The message that comes before this one." },
      { href: "/guides/texting-between-sessions-policy-page-for-a-counseling-practice", label: "Texting Between Sessions Policy", description: "What texts are for, and what they are not." },
      { href: "/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy", label: "Appointment Reminder Wording", description: "Reminders that protect privacy." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1420
  {
    slug: "new-patient-packet-and-what-to-expect-in-the-mail-page-for-a-primary-care-practice",
    keyword: "new patient packet and what to expect in the mail page for a primary care practice",
    category: "How-to",
    title: "New Patient Packet by Mail: Primary Care Page",
    metaTitle: "New Patient Packet by Mail: Primary Care Page",
    metaDescription:
      "How a primary care practice can explain the new patient packet it mails: what is inside, when it arrives and how to return it. Call (561) 291-2681.",
    answer:
      "If your primary care practice mails a new patient packet, say so on one page: what is inside, when it should arrive, what to fill in, and how to return it. Offer a download or pick-up option, ask for only what you need, and explain in plain words how the practice protects what patients send back.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Who still wants paper"),
      p(
        "Plenty of new patients prefer an envelope to an online form. Some are older and not comfortable typing health details into a website, some do not have reliable internet, and some simply want to read everything at the kitchen table first. A page that describes the packet respects that choice and gives them a reason to call."
      ),
      p(
        "The same page helps patients who do plan to use the online forms. They can see what will be asked of them before they start, which makes it easier to gather an insurance card or a medication list in advance. For patients who choose online forms, a [welcome text or email a few days before the first visit](/guides/new-patient-welcome-text-or-email-for-a-medical-practice) can carry the link."
      ),
      h2("What the page should list"),
      table(
        ["Item", "What to tell the patient"],
        ["Contents", "List each piece in plain words: registration form, insurance information sheet, practice policies, the privacy notice and a map."],
        ["Arrival", "Say how many business days the packet usually takes to arrive, and what to do if it has not come."],
        ["What to fill in", "Say which pages must be completed before the first visit and which can be done at check-in."],
        ["How to return it", "Give every option: bring it in, mail it back with the enclosed envelope, or hand it over at the front desk."],
        ["What not to send", "Ask patients not to email or text photos of forms, and say why."],
      ),
      h2("The privacy notice belongs in the packet"),
      p(
        "Practices covered by HIPAA must give new patients their notice of privacy practices and ask for acknowledgment of receipt. The packet is a natural place to do it. HHS publishes model notices that practices can adapt, and the page can link to the practice's own notice so patients can read it before the visit."
      ),
      h3("Ask for only what you need"),
      ul(
        "Do not request a full Social Security number on a first form unless the practice needs it for a stated reason.",
        "Use a plain outer envelope with the practice's return address only, and no note about the specialty or reason for the visit.",
        "Tell patients where their completed forms will be kept and who sees them."
      ),
      h2("Give patients a way around the mail"),
      p(
        "Not everyone can wait for a packet. Offer printable versions of the forms and a pick-up option at the front desk, as described in [paper forms and phone registration for patients without internet](/guides/paper-forms-and-phone-registration-option-for-patients-without-internet-page-for-a-primary-care-practice). Link the packet page from your [what to bring to a first appointment page](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) so both pages tell the same story."
      ),
      h2("Check the packet as a patient would"),
      ol(
        "Ask someone outside the practice to open the packet cold and fill it in, and time how long it takes.",
        "Check that the type is large enough to read comfortably, since many readers are older.",
        "Confirm the return envelope is addressed correctly and the practice phone number is on every page.",
        "Make sure the packet matches the page: the same list of contents, the same return options and the same name for the office."
      ),
      p(
        "Review it each year, and whenever a form changes. An old packet with an old phone number is a quiet way to lose a new patient."
      ),
    ],
    faqs: [
      {
        q: "Do we need a page for the packet if we also have online forms?",
        a: "It helps. Some patients choose paper even when online forms exist, and the page tells them exactly what to expect. It also lets online patients see what is asked before they begin, which reduces abandoned forms and calls asking what to bring.",
      },
      {
        q: "What should go in a new patient packet?",
        a: "A registration form, an insurance sheet, the practice's policies, the notice of privacy practices and a map. Add a short welcome note with the office phone number. Keep it as short as your real process allows, because every extra page is one more reason to put it off.",
      },
      {
        q: "Can patients return forms by email?",
        a: "Ordinary email is a poor channel for health information. Offer in-person drop-off, the enclosed mail-back envelope, or a secure portal instead, and say plainly on the page which of those you support, so patients do not default to photographing forms and sending them.",
      },
      {
        q: "How long should the packet take to arrive?",
        a: "State the usual number of business days based on your own mailing routine, and tell patients who to call if it has not arrived. Do not guess; use the time your front desk actually observes, and update the page if your mailing process changes.",
      },
      {
        q: "Is the privacy notice required in the packet?",
        a: "Covered practices must provide the notice to new patients and make a good-faith effort to obtain a written acknowledgment. Including it in the packet is a convenient way to do both. Confirm the exact requirements with your compliance advisor before you rely on this page.",
      },
      {
        q: "Should the packet include the privacy notice?",
        a: "Practices covered by HIPAA must give new patients their notice of privacy practices and ask for acknowledgment of receipt, and a mailed packet is a natural place to do it. Ask your compliance adviser how the practice records the acknowledgment.",
      },
    ],
    citations: [HHS_NOTICE, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What To Bring To A First Appointment", description: "A checklist for new patients." },
      { href: "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data", label: "New Patient Forms Online", description: "Publishing forms without exposing data." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Text Or Email", description: "The first message a patient receives." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1423
  {
    slug: "same-day-appointment-request-button-wording-for-a-primary-care-practice",
    keyword: "same day appointment request button wording for a primary care practice",
    category: "How-to",
    title: "Same-Day Appointment Request Button Wording for Primary Care",
    metaTitle: "Same-Day Appointment Request Button Wording for Primary Care",
    metaDescription:
      "Button and microcopy wording for a primary care practice's same-day visit request, with cutoff times and an emergency line. Call (561) 291-2681.",
    answer:
      "A same-day appointment button should say what it does, such as Request a same-day visit, and promise only a reply, not a slot. State the daily cutoff time, show the office phone beside it, and place a short line that emergencies go to 911. Ask for contact details only, never symptoms.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 6,
    sections: [
      h2("A button that promises too much creates a problem"),
      p(
        "When someone is unwell and wants to be seen today, they read a button closely. If the label says Book now and the system then asks them to wait for a callback, the practice has just disappointed a patient at the worst moment. The wording has to match what actually happens behind it."
      ),
      p(
        "For most primary care offices, a same-day request starts a process: staff review it, check the schedule and call back. That is a request, not a booking, and the button should say so. When a patient calls instead of using the button, the front desk can follow the [new patient intake phone script for a primary care practice](/guides/new-patient-intake-phone-script-for-the-front-desk-of-a-primary-care-practice)."
      ),
      h2("Label options compared"),
      table(
        ["Label", "How it reads, and when to use it"],
        ["Request a same-day visit", "Honest and specific; promises a reply only. Use when: staff review requests before confirming."],
        ["See today's openings", "Promises a view of the schedule. Use when: your system shows live same-day slots."],
        ["Call for a same-day visit", "Sends the patient to the phone. Use when: same-day visits are phone-only."],
        ["Book now", "Vague; sounds like an instant confirmation. Avoid for same-day requests."],
      ),
      h2("The microcopy around the button"),
      ul(
        "State the cutoff: Requests received before 2 p.m. are answered the same day, using your own real time.",
        "Say who replies and how: our front desk will call the number you give us.",
        "Add the safety line near the button: If this is an emergency, call 911.",
        "Show the office phone number as a tap-to-call link beside the button, not below the fold."
      ),
      p(
        "The form behind the button should ask for a name, a phone number and a preferred callback time, and nothing about symptoms. If a patient types health details into a box, they are stored in your form system and sent through email. Keep the request neutral and let the conversation happen by phone."
      ),
      h2("Test the wording with your own numbers"),
      ol(
        "Pick two labels from the table and run each for four weeks, one at a time, so the weeks can be compared.",
        "Count button clicks, completed requests and phone taps for each period from your analytics.",
        "Keep the label that produces more completed requests, not just more clicks, and note any change in how the front desk feels about the volume.",
        "Review again each quarter, because patient habits and your schedule change."
      ),
      p(
        "This works best when the page fits the rest of your same-day messaging. Pair it with the advice in [getting found for same-day and walk-in visits](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) and your [cancellation list guide](/guides/cancellation-list-and-same-day-openings-for-a-primary-care-practice), and use the same tone as your [call-to-action wording](/guides/call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact) elsewhere."
      ),
      h2("Where the button should sit"),
      ul(
        "At the top of the home page on a phone, above the first paragraph.",
        "In the header on every page, so it is one tap away wherever the patient lands.",
        "On the contact page and the page about being seen today.",
        "Never directly beside an emergency notice, where the two could be confused."
      ),
      p(
        "After the request is sent, show a thank-you page that repeats the cutoff and the phone number. That page is also where you count completed requests, which is a better measure than button clicks alone."
      ),
    ],
    faqs: [
      {
        q: "What is the best label for a same-day visit button?",
        a: "Request a same-day visit is the safest when staff confirm each request, because it tells the patient what happens next. If your system shows live openings, See today's openings is better. Choose the label that matches your real process, not the one that sounds most urgent.",
      },
      {
        q: "Should the form ask what is wrong?",
        a: "No. Ask for name, phone number and a good time to call. Symptoms typed into a form end up in email and form storage. Let a staff member or nurse ask clinical questions by phone, where it is appropriate and where the conversation is not saved as text.",
      },
      {
        q: "Do we need to say the cutoff time?",
        a: "Yes. It sets expectations and reduces calls asking whether a late request will be seen today. Use the real time your staff stop reviewing requests, and update the page if your schedule changes, so the promise on the button is always one you can keep.",
      },
      {
        q: "Where do we mention emergencies?",
        a: "Directly beside the button, in one short line. Someone in real trouble should see it before they fill anything in. Your page on when to call the office versus 911 can carry the longer explanation, and the button area only needs the short reminder.",
      },
      {
        q: "Can we track whether the button works?",
        a: "Yes. Count clicks, completed requests and phone taps. Track the request on a thank-you page rather than the click alone, so you measure people who finished the request, not people who gave up halfway, and compare each label over the same length of time.",
      },
    ],
    citations: [HHS_PRIVACY, WCAG, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice", label: "Getting Found For Same-Day Visits", description: "How same-day searchers find a practice." },
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "What to ask and what to leave out." },
      { href: "/guides/when-to-call-the-office-versus-911-or-urgent-care-page-for-a-primary-care-practice", label: "Office Versus 911 Page", description: "A plain safety page for patients." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1424
  {
    slug: "google-business-profile-call-history-and-missed-call-review-for-a-counseling-practice",
    keyword: "google business profile call history and missed call review for a counseling practice",
    category: "Checklist",
    title: "Google Profile Call Counts and Missed Calls for Counseling",
    metaTitle: "Google Profile Call Counts and Missed Calls for Counseling",
    metaDescription:
      "A weekly ten-minute review for a counseling practice: compare Google profile call taps with answered calls, without logging names. Call (561) 291-2681.",
    answer:
      "Once a week, compare how many people tapped Call on your Google Business Profile with how many calls your office actually answered. A gap points to missed calls, wrong hours or a busy line. Count only numbers and times, never caller names, because who calls a counselor is private.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("What the profile can and cannot tell you"),
      p(
        "Your Google Business Profile reports how many people tapped the Call button. It does not tell you whether the phone was answered, and it does not tell you who called. Google has changed which call reports it offers over the years, so look at what your own dashboard shows today rather than assuming a feature exists."
      ),
      p(
        "That is enough for a useful check. If the profile shows twelve call taps last week and your phone system shows eight answered calls, four people tried to reach you and did not get through, or tapped and hung up."
      ),
      h2("A ten-minute weekly routine"),
      ol(
        "Open the performance section of your profile and note the call taps for the last seven days, as explained in [how to read Google Business Profile performance reports](/guides/how-to-read-google-business-profile-performance-reports-each-month).",
        "Open your phone system's call log for the same days and count answered, missed and voicemail calls.",
        "Write the three numbers in one row of a simple sheet, with the date, and nothing else.",
        "Look for the days and hours when missed calls cluster.",
        "Check that those hours match the hours shown on the profile and the website."
      ),
      h2("Reading the gap"),
      table(
        ["What you see", "What it often means, and what to check"],
        ["Taps well above answered calls", "Calls arriving when the office is busy or closed. Check: hours on the profile, voicemail greeting, overflow line."],
        ["Missed calls at the same hour daily", "A lunch gap or a session block with nobody on the phone. Check: who covers the phone at that hour."],
        ["Taps close to answered calls", "The phone is working as intended. Check: keep the routine monthly instead of weekly."],
        ["Very few taps at all", "The profile may be hard to find or the number is hidden. Check: profile completeness and category choice."],
      ),
      h2("Keep the privacy line clear"),
      p(
        "A counseling practice should log counts and time windows only. Do not copy caller numbers or names into a marketing sheet, and do not note why anyone called. The sheet exists to show where the phone line fails, not to track people."
      ),
      h3("Fix the cause, not the number"),
      ul(
        "If missed calls cluster at lunch, set a rotation rather than adding a hold message.",
        "If they cluster after hours, make sure the voicemail says when you return calls, as described in [handling after-hours calls and voicemail](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice).",
        "Consider a [missed-call text-back message](/guides/missed-call-text-back-message-for-a-primary-care-practice) only if the client has agreed to texts."
      ),
      h2("What to do with the result"),
      ol(
        "Pick one cause from the table and change one thing, such as a lunch rotation or a clearer voicemail.",
        "Write the change and the date beside the weekly row, so you can see its effect later.",
        "Run the same count for four more weeks and compare the gap between taps and answered calls.",
        "Keep the change if the gap shrinks. If it does not, try the next cause."
      ),
      p(
        "Google's counts and your phone logs are measured differently, so expect them not to match exactly. Look at the trend over weeks, not the difference on a single day. The monthly [search terms report on the same profile](/guides/reading-the-google-business-profile-search-terms-report-each-month-to-see-how-patients-find-a-primary-care-practice) shows what people typed before they tapped, which can help you read a rise or fall in call taps."
      ),
    ],
    faqs: [
      {
        q: "Does Google show missed calls on a Business Profile?",
        a: "It shows call-button taps in its performance reports, not whether you answered them. The reports Google offers have changed over time, so check what your own dashboard shows today. Your own phone system remains the source for answered and missed calls.",
      },
      {
        q: "Is it a privacy problem to review calls?",
        a: "Counting calls is fine. Recording callers' names, numbers or reasons in a marketing sheet is not a good idea for a counseling practice. Keep the review to totals and time windows, and keep the phone log itself with the people who need it for their work.",
      },
      {
        q: "How often should we run this check?",
        a: "Weekly for the first month, to learn the pattern, then monthly. If you change hours, staff or phone systems, go back to weekly for a few weeks so you can see whether the change helped, and write down what you changed on the day you changed it.",
      },
      {
        q: "What if call taps are low?",
        a: "Look at how complete your profile is, whether the phone number is shown and whether you are in the right category. Low taps often mean low visibility, which is a different problem from missed calls and is fixed in the profile and website, not at the front desk.",
      },
      {
        q: "Should we add call tracking numbers?",
        a: "Be careful. Changing the phone number on the profile can create mismatches across the web. If you want call tracking, follow the approach in our guide on call tracking numbers that leaves the profile number unchanged, and test that callers still reach the same line.",
      },
    ],
    citations: [GBP_X_PERF, GBP_GUIDELINES, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-read-google-business-profile-performance-reports-each-month", label: "Reading Profile Performance Reports", description: "What each monthly number means." },
      { href: "/guides/call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number", label: "Call Tracking Numbers Without Changing The Profile", description: "Tracking calls safely." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After-Hours Calls And Voicemail", description: "What callers hear when you are closed." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new A
  {
    slug: "business-name-on-a-google-business-profile-for-a-medical-practice-legal-name-credentials-and-keywords",
    keyword: "business name on a google business profile for a medical practice",
    category: "How-to",
    title: "Business Name on a Google Profile for a Medical Practice",
    metaTitle: "Business Name on a Google Profile for a Medical Practice",
    metaDescription:
      "What name to use on a medical practice's Google Business Profile: the real-world name, no keywords, and how to avoid a suspension. Call (561) 291-2681.",
    answer:
      "Use the name your practice uses in the real world: the same name on your sign, website, letterhead and state records. Do not add keywords, cities, taglines or services to rank higher. Google's rules treat that as misrepresentation, and a profile with a stuffed name can be suspended.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-06",
    readMinutes: 5,
    sections: [
      h2("The rule in one sentence"),
      p(
        "Google asks that a profile name reflect the business's real-world name, as customers know it from signage, stationery and the website. Anything added to help the listing rank is outside that rule. Read Google's current guidelines before you edit, because the wording is updated from time to time, and this guide is a plain-language summary rather than a replacement for them."
      ),
      p(
        "Medical practices feel the temptation more than most. A name like Smith Family Medicine looks short next to competitors who write Best Primary Care Doctor West Palm Beach Walk-Ins. Copying that is the fast way to a suspension, and the profile that wins the fight is usually the one that stays."
      ),
      h2("What usually belongs in the name, and what does not"),
      table(
        ["Element", "Usually fine, and usually a problem"],
        ["Legal or doing-business-as name", "Fine: The name on your sign and state record. Problem: A name you only use online."],
        ["Practice type", "Fine: Part of the real name, such as Family Medicine. Problem: Added only as a keyword."],
        ["City or neighborhood", "Fine: Only if it is part of the registered name. Problem: Added to rank for a location."],
        ["Taglines and hours", "Fine: Never needed. Problem: Same-day visits, open now, 24 hours."],
        ["Provider credentials", "Fine: Follow Google's current wording and your signage. Problem: Stacking degrees to add keywords."],
      ),
      h2("Check your name against four records"),
      ol(
        "The name on the building sign and the front door.",
        "The name on the website header, footer and contact page.",
        "The name on your state business record, which for Florida you can search on Sunbiz.",
        "The name on insurance directories and your NPI record."
      ),
      p(
        "If these disagree, pick the real one and bring the others into line. That is the same consistency work described in [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it), and it helps patients as much as it helps Google. The same sheet should list your legal name, public name and the short forms you allow, as set out in [practice name consistency across insurance directories and Google](/guides/practice-name-abbreviations-and-legal-name-consistency-across-insurance-directories-and-google-for-a-counseling-practice)."
      ),
      h2("If you already have a stuffed name"),
      p(
        "Change it back to the real name yourself, in the profile, rather than waiting for a competitor to report it. Then check that the profile still shows correctly and that no suggested edits are pending, as covered in [handling suggested edits](/guides/how-to-handle-google-business-profile-suggested-edits). If the profile has already been suspended, work through [fixing a suspended Google Business Profile](/guides/fix-a-suspended-google-business-profile). Choose categories carefully instead, as set out in the [categories guide](/guides/choosing-google-business-profile-categories-for-a-medical-practice), because categories are the legitimate way to tell Google what you do."
      ),
      h2("A quick audit you can do today"),
      ol(
        "Search your practice name on Google and note exactly what the profile shows.",
        "Stand outside, or look at a photo of your sign, and compare the wording letter for letter.",
        "Open the profile and check whether any extra words have crept into the name field.",
        "Take a screenshot of the profile before you change anything, so you can show what it looked like."
      ),
      p(
        "If the names match, you are done. If they do not, fix the profile, and make a note of who made the original edit so it does not happen again."
      ),
    ],
    faqs: [
      {
        q: "Can we put our specialty in the Google Business Profile name?",
        a: "Only if it is part of the practice's actual name, as it appears on your sign and records. If it is not, use categories and services to describe the specialty. Adding it to the name only to rank breaks Google's guidelines and puts the listing at risk.",
      },
      {
        q: "Can the name include Dr. or MD?",
        a: "That depends on Google's current wording for practitioner listings and on how the provider is named in the real world. Check the guidelines linked below before you edit, and keep the profile consistent with the sign, the website and your state records.",
      },
      {
        q: "Will changing the name hurt rankings?",
        a: "A change from a stuffed name to the real one may cost some visibility for terms that were in the name. It also removes the risk of suspension, which would cost far more. Categories, reviews and a complete profile are the safer ways to rank.",
      },
      {
        q: "What if our legal name is long?",
        a: "Use the short name the public knows, as long as it is the name on your sign and website. Your legal name can stay on state and insurance records. The key is that the public-facing name is the same everywhere a patient might see it.",
      },
      {
        q: "Who should be allowed to edit the profile name?",
        a: "Only the owner or a trusted manager. Well-meaning staff and agencies sometimes add keywords. Keep a written note of the approved name and check it whenever someone edits the profile, and remove access for anyone who no longer needs it.",
      },
    ],
    citations: [GBP_GUIDELINES, SUNBIZ, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone aligned." },
      { href: "/guides/choosing-google-business-profile-categories-for-a-medical-practice", label: "Choosing Profile Categories", description: "The honest way to describe what you do." },
      { href: "/guides/fix-a-suspended-google-business-profile", label: "Fix A Suspended Profile", description: "Steps if the profile has been suspended." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new B
  {
    slug: "which-page-to-use-as-the-website-link-on-a-google-business-profile-for-a-medical-practice",
    keyword: "which page to use as the website link on a google business profile for a medical practice",
    category: "How-to",
    title: "Which Page to Link From a Medical Practice's Google Profile",
    metaTitle: "Which Page to Link From a Medical Practice's Google Profile",
    metaDescription:
      "Home page, location page or provider page? How a medical practice should choose the website link on each Google Business Profile. Call (561) 291-2681.",
    answer:
      "Link each Google Business Profile to the page that best answers the person tapping it. A single-office practice can use the home page. A practice with several offices should link each profile to its own location page, and each provider listing to that provider's page. Keep booking links in the separate appointment field.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 5,
    sections: [
      h2("A small field with real consequences"),
      p(
        "The website field on a Google Business Profile is one of the most-tapped buttons on the listing. Where it lands decides whether a patient finds the phone number, the hours and the next step, or has to dig through a menu on a small screen. Most practices set it once, to the home page, and never think about it again."
      ),
      p(
        "That is fine for a one-office practice with a clear home page. It is a problem for a practice with two offices, where the profile for one office sends people to a page that talks about both."
      ),
      h2("Which link for which listing"),
      table(
        ["Listing", "Best link, and why"],
        ["Single-office practice", "The home page, if it shows address, phone and hours at the top. Simple, and the home page carries the most links."],
        ["One of several offices", "That office's own location page. The visitor sees the right address and hours at once."],
        ["Individual provider listing", "The provider's bio page. The listing is about a person, so the landing page should be too."],
        ["Telehealth-only practice", "A page that explains how sessions work. Visitors need to know how to start, not where to park."],
      ),
      h2("Check the landing page before you save"),
      ul(
        "Open the link on a phone. The phone number and hours should be visible without scrolling.",
        "Make sure the page loads over https and does not redirect more than once.",
        "Confirm the page's canonical address is the same as the one in the field.",
        "Check that the name, address and phone on the page match the profile exactly.",
        "Avoid linking straight to an intake form, which asks a stranger for details before they know you."
      ),
      h2("Keep booking and website separate"),
      p(
        "Use the appointment link field for scheduling and the website field for information. Mixing them leaves some patients on a booking tool they did not want. The steps for the second link are in [adding an appointment or booking link to a Google Business Profile](/guides/how-to-add-an-appointment-or-booking-link-to-a-google-business-profile)."
      ),
      h3("Measure what the link does"),
      p(
        "Add tagged links so that visits from the profile show up separately in your analytics, following [UTM links for Google Business Profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice). After a month, compare how many profile visitors reach the contact page or call, and change the landing page only if the numbers justify it. For a practice with several offices, the structure described in the [multi-location playbook](/guides/multi-location-medical-practice-seo-playbook) explains why each office should have its own page."
      ),
      h2("A worked example"),
      p(
        "Picture a practice with two offices and four providers, where each provider has a listing. That makes seven listings to set. The practice listing for each office should link to that office's location page. Each provider's listing should link to that provider's bio page. Nothing in that list should point at a page that talks about both offices."
      ),
      ul(
        "Office listings: one location page each, with address, phone and hours at the top.",
        "Provider listings: one bio page each, with a clear way to call the office they work in.",
        "A practice with only one office: the home page, as long as it passes the phone check above."
      ),
    ],
    faqs: [
      {
        q: "Should a Google Business Profile link to the home page?",
        a: "For a single-office practice with a clear home page, yes. For a practice with multiple offices or individual provider listings, link each profile to the page that matches it, so the visitor sees the right address and contact details the moment the page loads.",
      },
      {
        q: "Will changing the link affect rankings?",
        a: "It can change which page Google associates with the listing. A good landing page that matches the profile is generally helpful, but changes can take time to settle. Change one profile first, watch for a few weeks, and then roll out the change to the others.",
      },
      {
        q: "Can I use a tracking-tagged link?",
        a: "Yes. Tagged links let you separate profile visits from other traffic in your analytics. Use a consistent pattern, keep it simple, and check that the page still loads at its canonical address without extra redirects, so the tag does not create a duplicate page.",
      },
      {
        q: "What about the appointment link?",
        a: "Use the dedicated appointment field for scheduling. That keeps the website field for information and gives patients two clear choices instead of one confusing button. Test both links on a phone after you change them to be sure each one lands where you expect.",
      },
      {
        q: "Should each provider have their own profile link?",
        a: "If the provider has an individual listing, link it to their bio page. If they do not, the practice profile should link to the practice page. Never point two different listings at the same thin page, since it gives visitors and Google no way to tell them apart.",
      },
    ],
    citations: [GBP_GUIDELINES, GBP_X_EDIT, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice", label: "Practitioner Listing Versus Practice Listing", description: "When a provider needs a separate listing." },
      { href: "/guides/how-to-add-an-appointment-or-booking-link-to-a-google-business-profile", label: "Add A Booking Link To A Profile", description: "Keeping booking separate from the website." },
      { href: "/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice", label: "UTM Links For Profile Clicks", description: "Measuring visits from the profile." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new C
  {
    slug: "calendar-invite-wording-for-a-counseling-practice-that-protects-client-privacy",
    keyword: "calendar invite wording for a counseling practice that protects client privacy",
    category: "Checklist",
    title: "Calendar Invite Wording for a Counseling Practice",
    metaTitle: "Calendar Invite Wording for a Counseling Practice",
    metaDescription:
      "How a counseling practice can send calendar invites that keep client details private: neutral titles, safe settings and consent. Call (561) 291-2681.",
    answer:
      "Calendar invites should carry the time and a neutral title such as Appointment, never the client's name, the clinician's specialty or the word therapy. Ask each client whether they want an invite at all, use the telehealth link only, and check that staff calendars are not shared more widely than intended.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 5,
    sections: [
      h2("Why invites leak more than reminders"),
      p(
        "A reminder text goes to one phone. A calendar invite goes into a calendar that may sync to a shared family tablet, a work account or a smartwatch, and it often shows a preview on the lock screen. If the title says Therapy with Dr. Lee, everyone who glances at that screen learns something the client may not have told them."
      ),
      p(
        "Staff calendars have the same problem in reverse. A shared practice calendar with client names in event titles can be seen by anyone with access, including people who have no reason to know who is in treatment."
      ),
      h2("Neutral wording that still works"),
      table(
        ["Part of the invite", "Safer choice, and what to avoid"],
        ["Title", "Appointment, or the practice's short name. Avoid: Client name, therapy, counseling, clinician specialty."],
        ["Description", "Time, and the video link for a telehealth visit. Avoid: Reason for the visit, notes, forms, diagnosis."],
        ["Location", "The office address only if the client asked for it. Avoid: Suite names that reveal the type of practice."],
        ["Organizer name", "The practice's front-desk name. Avoid: A personal clinician name tied to a specialty."],
        ["Attachments", "None. Avoid: Intake forms, ICS files with extra detail."],
      ),
      h2("Consent comes first"),
      ol(
        "Ask at intake whether the client wants invites, and which email they want them sent to.",
        "Record the answer in the chart, not in a marketing list.",
        "Never send an invite to a work or shared email unless the client chose that address.",
        "Review the choice whenever the client changes their contact details."
      ),
      h2("Check your own settings"),
      ul(
        "Set staff calendars to show busy or free only to anyone who is not the owner.",
        "Turn off automatic add-to-calendar for incoming invites on shared devices where you can.",
        "Use a telehealth platform that generates a link without placing the client's name in the title.",
        "Test one invite yourself and read what appears on a phone lock screen."
      ),
      p(
        "These steps sit beside your [appointment reminder wording](/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy) and your [portal and messaging expectations](/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice). This is practical marketing and operations guidance, not legal advice, so ask your compliance advisor to check anything involving HIPAA."
      ),
      h2("Wording to use at intake"),
      p(
        "Ask the question in plain language on the intake form: May we send calendar invites for your appointments? If yes, which email address should we use? Invites will say Appointment and show only the time."
      ),
      p(
        "Record the answer where the front desk will see it before sending. Ask again once a year, and whenever a client mentions a new device, a new job or a change in who they live with, because any of those can change who sees the screen."
      ),
      h3("When a client says no to invites"),
      p(
        "Some clients will prefer a paper card, a phone call or nothing at all. That is a complete answer. Note it in the chart, send the reminder they chose, and do not ask again until they bring it up or the yearly check comes round."
      ),
      p(
        "A client who declines invites is not declining care. Make the alternative as easy as the invite would have been."
      ),
    ],
    faqs: [
      {
        q: "Should a counseling practice send calendar invites at all?",
        a: "Only to clients who ask for them. Some clients find invites useful, and others do not want any trace of the visit on a shared device. Ask at intake, record the choice in the chart, and review it again when the client's circumstances change.",
      },
      {
        q: "What should the title of the invite say?",
        a: "Something neutral, such as Appointment or the practice's short name. Leave out the client's name, the clinician's specialty and any word that reveals the type of care. If the client prefers no invite at all, respect that and use the reminder they chose.",
      },
      {
        q: "Is it safe to include the video link?",
        a: "Yes, if it is a unique link from a secure telehealth platform and the description says nothing else. Do not paste passwords or notes into the same field, and do not reuse one link for many clients, since anyone holding the link could join the wrong session.",
      },
      {
        q: "What about the practice's own staff calendar?",
        a: "Set it so people without a reason to see details see only busy blocks. Titles should not carry client names, and access should follow job role, not convenience. Review who can open each calendar when staff join or leave the practice.",
      },
      {
        q: "Does this guarantee HIPAA compliance?",
        a: "No. It reduces common exposure risks. Compliance depends on your platform agreements, your policies and how your team actually works. Review this guidance with your own compliance advisor before you change how invites are sent, and write down the final procedure.",
      },
    ],
    citations: [HHS_PRIVACY, ACA_ETHICS, HHS_TELEHEALTH],
    links: [
      { href: "/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy", label: "Appointment Reminder Wording", description: "Reminders that protect privacy." },
      { href: "/guides/telehealth-consent-and-technology-check-page-for-a-counseling-practice", label: "Telehealth Consent And Technology Check", description: "Setting expectations for video sessions." },
      { href: "/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice", label: "Portal Login And Messaging Expectations", description: "Where messages should go." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new D
  {
    slug: "psychological-testing-and-evaluation-page-for-a-counseling-practice-without-clinical-claims",
    keyword: "psychological testing and evaluation page for a counseling practice",
    category: "How-to",
    title: "Psychological Testing and Evaluation Page for a Practice",
    metaTitle: "Psychological Testing and Evaluation Page for a Practice",
    metaDescription:
      "How a practice can describe psychological testing and evaluation honestly: who performs it, the steps, fees and limits. Call Primara at (561) 291-2681.",
    answer:
      "A testing page should name who performs the evaluation, because in Florida that is a licensed psychologist, then list the steps from intake to feedback, the usual fee approach and what a report can and cannot do. Do not promise a diagnosis, do not list outcomes, and do not claim the report will be accepted anywhere.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 6,
    sections: [
      h2("People search for this one with a purpose"),
      p(
        "Someone looking for a psychological evaluation usually has a reason beyond curiosity: a school asked, an employer asked, or a family wants answers. They are comparing practices on a few questions. Who does the testing, how long does it take, what does it cost, and will it be useful? A testing page that answers those plainly stands out from the many that list conditions and nothing else."
      ),
      p(
        "It is also a page where overreach is easy. A practice must not describe testing it is not licensed to provide, so the first job of the page is to say who the licensed examiner is."
      ),
      h2("Who the page must name"),
      p(
        "In Florida, psychological testing is carried out by a licensed psychologist, and the Florida Board of Psychology lists the rules. If your counseling practice employs a psychologist, name them with their license type as it appears on their license. If you refer testing out, say so, and name the type of professional you refer to instead of implying the service is yours."
      ),
      h2("Steps to describe"),
      table(
        ["Step", "What to say on the page"],
        ["First contact", "How to ask about an evaluation, and what the office will ask on the phone."],
        ["Intake interview", "A conversation with the psychologist about the reason for the evaluation, usually before testing begins."],
        ["Testing sessions", "That testing usually takes more than one visit, and the psychologist will explain the plan."],
        ["Scoring and report", "That scoring and writing take time after the last session, with a date range your office can honor."],
        ["Feedback visit", "A meeting to go over the findings and what to do with the written report."],
      ),
      h2("Fees, insurance and limits"),
      ul(
        "State whether evaluations are self-pay, insurance-billed or a mix, and give the fee range if you can.",
        "Say plainly that coverage varies by plan and that the client should check with their insurer.",
        "Explain that the practice cannot promise a particular diagnosis or that a school, employer or agency will accept the report.",
        "List what clients should bring, such as prior reports, in a way that does not ask them to email records."
      ),
      p(
        "Link the page from your [specialty pages](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims) and your [credentials explainer](/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website), so a reader understands the difference between a counselor and a psychologist. Match the fee wording with your [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained)."
      ),
      h2("Questions the page can answer without clinical claims"),
      ul(
        "How do I start? Give the phone number and the first step, such as a short call with the office.",
        "Who will see the report? Say that it goes to the client or the person the client names in writing, according to the practice's release process.",
        "What should I bring? List prior reports in general terms and say how to deliver them safely.",
        "How long until I have a date? Give the honest range your office can keep, or say that the office will tell you when you call."
      ),
      p(
        "Each answer is about the process. None of them says what the evaluation will find, and none promises that it will help."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling practice offer psychological testing?",
        a: "Only through a licensed professional who is permitted to perform it, which in Florida means a psychologist. If your practice does not have one, say that you refer testing to a licensed psychologist rather than describing the service as your own, and name the type of professional.",
      },
      {
        q: "Should the page list the tests used?",
        a: "It is usually better not to. Test names and details are for the professional to explain, and listing them invites confusion and sometimes misuse. Describe the process in plain steps and let the psychologist explain the specifics at the intake interview.",
      },
      {
        q: "How long does an evaluation take?",
        a: "It varies by the reason for the evaluation and by the person. Say that testing usually takes more than one visit and that the psychologist will give a plan at intake, and avoid promising a fixed number of hours or a fixed date for the report.",
      },
      {
        q: "Will a school or employer accept the report?",
        a: "That is up to the organization receiving it. The page should say you cannot promise acceptance, and suggest clients ask the organization what it requires before booking. A short line like that prevents disappointment and protects the practice's reputation. It also saves the front desk a difficult call later.",
      },
      {
        q: "Can the page say the evaluation will provide a diagnosis?",
        a: "No. Say the evaluation gathers information and the psychologist shares conclusions in a feedback visit. A promise of a diagnosis, or of a particular answer, is a clinical claim, and it does not belong on a marketing website for any practice.",
      },
    ],
    citations: [FL_PSYCH_BOARD, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website", label: "Credentials And License Titles Explained", description: "Counselor, therapist or psychologist." },
      { href: "/guides/specialty-and-focus-areas-wording-for-a-counseling-practice-training-versus-expertise", label: "Specialty And Focus Area Wording", description: "Training versus expertise." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Practice Fees Page", description: "Explaining fees and superbills." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new E
  {
    slug: "medication-management-visits-page-for-a-mental-health-practice-without-clinical-claims",
    keyword: "medication management visits page for a mental health practice",
    category: "How-to",
    title: "Medication Management Visits Page for Mental Health",
    metaTitle: "Medication Management Visits Page for Mental Health",
    metaDescription:
      "How a mental health practice can explain medication management visits: who prescribes, what to bring and what stays out. Call Primara at (561) 291-2681.",
    answer:
      "A medication management page names the licensed prescriber, explains in plain words that these visits are about reviewing and prescribing medication, and says how they differ from therapy sessions. Describe the process and the practice's refill rules. Leave out drug names, effectiveness claims and any promise about results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 6,
    sections: [
      h2("A page that helps people understand a visit type"),
      p(
        "Many people searching for medication management are not sure who offers it or how it differs from therapy. A practice that employs a psychiatrist or a psychiatric nurse practitioner can answer that in a few paragraphs. The page is also where the practice sets honest expectations: what the visit is for, how often it tends to happen and what the office needs from the patient beforehand."
      ),
      p(
        "The danger is giving advice. A page that lists medications, suggests which condition needs which kind, or hints that a visit will fix a problem is practicing marketing as medicine. Keep the page on logistics and let the prescriber handle everything clinical."
      ),
      h2("What the page should include"),
      table(
        ["Item", "What to say"],
        ["Who prescribes", "The prescriber's name and license as it appears on their license, such as physician or advanced practice nurse."],
        ["What the visit is", "A conversation with the prescriber about current medication and whether any change is needed."],
        ["How it differs from therapy", "Therapy is talk-based sessions with a counselor. Medication visits are with the prescriber, and some patients have both."],
        ["Before the first visit", "What to bring, such as a current medication list and the pharmacy name, delivered in person or through the portal."],
        ["Refills", "How to request them, how much notice the office needs and what happens after hours."],
      ),
      h2("Say the policy facts plainly"),
      ul(
        "State whether the practice prescribes controlled medications, or that decisions are made by the prescriber visit by visit, using your own real policy.",
        "Explain that follow-up visits are part of safe prescribing and give a general expectation of how often, without promising a schedule.",
        "Give the crisis line, 988, and say that emergencies go to 911, not to the portal.",
        "Say that no medication decision is made through the website or a form."
      ),
      h2("What to leave off the page"),
      p(
        "Do not name specific drugs or brands, compare medications, describe expected benefits or side effects, or say that anyone will feel better. Link to a trusted public source, such as the National Institute of Mental Health's medication overview, if you want patients to read general information, and say plainly that the prescriber will talk about their individual situation."
      ),
      p(
        "Cross-link the page from your [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) if you work with primary care offices, and from your [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) so a new client knows both kinds of visit exist."
      ),
      h2("Writing the first-visit paragraph"),
      p(
        "Tell new patients what to prepare: the name of their pharmacy, a list of everything they currently take, including supplements, and any questions they want to ask. Say that the first visit may be longer than later ones only if that is true for your office."
      ),
      ul(
        "Say how the list should reach the office: bring it, or send it through the portal, not by ordinary email.",
        "Say who to call if the patient has an urgent question about a prescription before the visit.",
        "Say what happens if the patient needs to cancel, and link to the cancellation policy."
      ),
    ],
    faqs: [
      {
        q: "Is a medication management page the same as a psychiatry page?",
        a: "Not exactly. Medication management is one type of visit a prescriber offers. A psychiatry page may describe more, such as evaluations. Be specific about which visits your prescriber actually provides, and do not describe services they do not offer or are not licensed to perform.",
      },
      {
        q: "Should the page list the medications you prescribe?",
        a: "No. Listing drugs invites claims about benefits and risks, which belong in a conversation with the prescriber. Describe the visit and the process, and link to a public source such as NIMH for general information, with a reminder that advice is individual.",
      },
      {
        q: "Can we explain when medication might be recommended?",
        a: "That is a clinical judgment for the prescriber, so the page should not predict it. You can say that the prescriber discusses options with the patient at the visit and that no decision is made in advance, and that therapy and medication are separate choices.",
      },
      {
        q: "How do we handle refill requests on the website?",
        a: "Describe the route, such as the portal or a phone call, how much notice you need and what happens outside office hours. Do not ask patients to type medication names into an ordinary web form, where the information is stored and often emailed.",
      },
      {
        q: "Does the page need a crisis line?",
        a: "Yes. Include 988 and 911 clearly. People searching for mental health services can be in distress, and the page should never leave them without a safe place to go. Put the line near the top and again near the phone number.",
      },
    ],
    citations: [NIMH_MEDS, CDC_988, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims", label: "Behavioral Health Referral Page", description: "Working with primary care offices." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Emergency And Crisis Resources Section", description: "What to show near every contact point." },
      { href: "/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website", label: "Credentials And License Titles", description: "Naming each professional correctly." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new F
  {
    slug: "remote-patient-monitoring-program-explained-on-a-primary-care-practice-website",
    keyword: "remote patient monitoring program explained on a primary care practice website",
    category: "How-to",
    title: "Remote Patient Monitoring Explained for Primary Care",
    metaTitle: "Remote Patient Monitoring Explained for Primary Care",
    metaDescription:
      "How a primary care practice can explain a home monitoring program: devices, who sees the data and costs, no outcome claims. Call (561) 291-2681.",
    answer:
      "A remote patient monitoring page explains that patients use a device at home, such as a blood pressure cuff, that sends readings to the practice. Say who it is offered to, what the patient needs, who reviews the data and how fast, what it may cost, and that emergencies go to 911, not the device.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 6,
    sections: [
      h2("A program patients hear about but rarely understand"),
      p(
        "Patients who are offered a home monitoring device often have questions the clinician did not have time to answer: Who is watching these numbers? Will someone call me? Is this covered? A page on your website lets them read the answers on their own time, and lets caregivers read them too."
      ),
      p(
        "The page should describe how the program works, not what it will do for anyone's health. Promises about prevented hospital stays or controlled numbers are outcome claims, and they belong nowhere on a practice website."
      ),
      h2("The parts of the program to explain"),
      table(
        ["Part", "What patients need to know"],
        ["Who it is offered to", "That the clinician decides whether the program fits a patient, and that it is not a service anyone can sign up for online."],
        ["The device", "What it measures, how it is delivered, how to set it up and who to call about problems."],
        ["The data", "That readings are sent to the practice or a vendor, who can see them, and how that information is protected."],
        ["Review", "How often staff review readings, in general terms, and that the program does not replace calling the office."],
        ["Returning the device", "What happens if the patient stops the program or moves."],
      ),
      h2("Cost, consent and privacy"),
      p(
        "Some insurers, including Medicare in certain cases, cover monitoring under specific rules, and patients may still owe a share. Do not state what is covered. Say that coverage and costs depend on the plan and that the office can check before a patient enrolls. The Centers for Medicare and Medicaid Services publishes educational materials for providers, and your biller should confirm what applies to your practice."
      ),
      ul(
        "Say that enrollment needs the patient's consent, and that they can leave the program.",
        "Name the device vendor if patients will create an account with it, and link to the vendor's privacy policy.",
        "Explain that a monitoring device is not a way to reach a clinician in an emergency.",
        "Describe what a patient with no smartphone or home internet can do, if the program offers an option."
      ),
      h2("Where the page fits on the site"),
      p(
        "Link it from your [chronic care management explainer](/guides/chronic-care-management-program-explained-on-a-primary-care-practice-website) and from your [virtual visits page](/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video), so patients find the related programs together. Use [plain language](/guides/plain-language-and-reading-level-for-patient-facing-web-content), because many people reading this page are older adults or their children. Put the phone number beside the explanation, as the call is the next step for most readers."
      ),
      h2("Questions to settle before you publish"),
      ul(
        "Who reviews readings, and what does the office do when one looks out of range? Decide this internally, then describe it in general terms.",
        "What happens on weekends and holidays? Say plainly that readings are not watched around the clock, if that is true.",
        "Who owns the data if the patient leaves the program? State it, or say the office will explain at enrollment.",
        "Who do patients call when the device stops working?"
      ),
      p(
        "A page that leaves these unanswered creates calls. A page that answers them, and does not promise more than the office can deliver, prevents them."
      ),
    ],
    faqs: [
      {
        q: "What is remote patient monitoring in plain language?",
        a: "It is a program where a patient uses a device at home, such as a blood pressure cuff or scale, that sends readings to the practice. The care team can review them between visits. It is offered when the clinician thinks the program suits the patient.",
      },
      {
        q: "Should the page list the conditions it is for?",
        a: "Keep it general. Say that the clinician decides who is offered the program. Listing conditions edges toward medical advice and can make people believe they qualify when they do not, which leads to disappointed calls and unrealistic expectations at the front desk.",
      },
      {
        q: "Can the page say monitoring improves health?",
        a: "No. Outcome claims are not appropriate on a practice website. Describe what the program involves and what patients should expect from the office, and leave discussion of results to the care team's conversations with each patient, where the facts of the case are known.",
      },
      {
        q: "How do we explain costs?",
        a: "Say that coverage and costs depend on the patient's plan, that some patients may owe a share, and that the office will check before enrolling. Do not quote coverage rules you have not confirmed with your biller, because plan rules differ and change.",
      },
      {
        q: "What privacy points belong on the page?",
        a: "Who sees the readings, what the device vendor collects, how to leave the program and how to ask for data to be deleted where that is possible. Link to the vendor's policy and to your own notice of privacy practices so patients can read both.",
      },
    ],
    citations: [CMS_MLN, HHS_TELEHEALTH, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/chronic-care-management-program-explained-on-a-primary-care-practice-website", label: "Chronic Care Management Explained", description: "Another program patients ask about." },
      { href: "/guides/virtual-visits-page-for-a-primary-care-practice-what-can-and-cannot-be-done-by-video", label: "Virtual Visits Page", description: "What video visits can and cannot do." },
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language For Patient Content", description: "Writing for every reading level." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new G
  {
    slug: "introduction-letter-to-local-primary-care-offices-from-a-counseling-practice-without-patient-details",
    keyword: "introduction letter to local primary care offices from a counseling practice",
    category: "How-to",
    title: "Introduction Letter to Local Primary Care Offices",
    metaTitle: "Introduction Letter to Local Primary Care Offices",
    metaDescription:
      "How a counseling practice can write a one-page introduction to local primary care offices, with no patient details. Call Primara at (561) 291-2681.",
    answer:
      "An introduction letter to local primary care offices should fit on one page: who you are, who you see, which insurances you accept, how to refer, and how quickly you can usually respond. Name a real contact person. Include nothing about any patient, and offer nothing of value in return for referrals.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 6,
    sections: [
      h2("Why primary care offices need to hear from you"),
      p(
        "A family doctor who sees a patient struggling with stress or low mood wants a counselor to hand them to, and wants to be sure the counselor is taking new clients. If your practice never introduces itself, the doctor's office refers to whoever it already knows. A short letter, followed by a call, can put your name on that list."
      ),
      p(
        "This is outreach to a business, not to patients, and it should read that way. The tone is that of a colleague explaining how to reach you, not a pitch."
      ),
      h2("What fits on one page"),
      ol(
        "Who you are: practice name, location and the licenses of your clinicians as they appear on their licenses.",
        "Who you see: ages and general focus areas, in words your own clinicians would approve.",
        "How to refer: a phone number, an email or portal route that is safe for referrals, and the name of one contact.",
        "Insurance and fees: the plans you accept right now and whether you offer self-pay options.",
        "Availability: your honest typical wait for a first visit, or a line saying you will tell them when you have openings.",
        "Next step: an offer to answer questions by phone or to send a one-page summary for their staff."
      ),
      h2("Rules to keep it safe"),
      table(
        ["Do", "Do not"],
        ["Write to the practice manager as well as the doctor.", "Mention any patient, even without a name."],
        ["Offer a short call to explain how to refer.", "Offer gifts, meals or favors in return for referrals."],
        ["Ask how the office prefers to receive referrals.", "Promise results or compare yourself with other counselors."],
        ["Keep the clinical wording modest and accurate.", "Use the letter to advertise a specialty you do not have."],
      ),
      p(
        "Federal and state rules limit what anyone may offer to those who refer patients. This guide is marketing guidance and not legal advice, so ask your attorney before adding anything beyond information. The HHS Office of Inspector General explains the basics of the fraud and abuse rules."
      ),
      h2("After the letter"),
      p(
        "Follow up by phone within a week or two, then keep in touch quarterly with a short update on openings. Record where new clients say they heard about you, using a simple question at intake as described in [how did you hear about us](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing). Back the letter up with a [referral source page](/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer) on your website, so a busy office can find the details without calling."
      ),
      h2("A sample opening paragraph"),
      p(
        "Dear [Name], I am writing to introduce [Practice name], a counseling practice in [city]. We are accepting new clients ages [range], and our clinicians are licensed in Florida as [licenses]. If a patient of yours would benefit from a conversation with a counselor, you can reach [contact name] at [phone] to ask how we work."
      ),
      p(
        "Notice what the paragraph leaves out: no patient, no pricing promise and no claim about results. Keep every line you add to the same standard, and have a clinician read the final draft before it is mailed."
      ),
    ],
    faqs: [
      {
        q: "Is it appropriate for a counseling practice to write to doctors' offices?",
        a: "Yes, as long as the letter shares information about your practice and nothing about any patient. It is ordinary professional networking. Keep it factual, avoid anything that looks like an exchange for referrals, and check with your attorney if you are unsure.",
      },
      {
        q: "Who should receive the letter?",
        a: "Address it to the practice manager and to the physician or nurse practitioner who is likely to refer. The manager often decides how the office handles referrals, so including them can help the letter reach the right person and answer questions about forms and timing.",
      },
      {
        q: "Should we mention our specialties?",
        a: "Yes, briefly and accurately. Use the wording your clinicians would stand behind, based on their training and licensure. Do not claim a specialty the practice does not hold, and do not promise outcomes, since a physician's office will remember an overstatement.",
      },
      {
        q: "How often should we follow up?",
        a: "Once by phone soon after the letter, then a short update every quarter. More than that tends to feel like a sales campaign. Update the office whenever your insurance panels or openings change, because that is the information they actually need.",
      },
      {
        q: "Can we send the letter by email?",
        a: "Yes, if the office accepts it, but a printed letter often reaches the practice manager more reliably. Never send anything involving a specific patient by ordinary email, and keep the letter generic so that it would be safe if it were forwarded.",
      },
    ],
    citations: [OIG_AKS, HHS_PRIVACY, FL_MH_BOARD, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/referral-source-page-for-a-counseling-practice-how-doctors-schools-and-clients-refer", label: "Referral Source Page For Counseling", description: "How doctors and schools refer." },
      { href: "/guides/referring-doctor-thank-you-and-feedback-loop-for-a-primary-care-practice", label: "Referring Doctor Thank-You And Feedback Loop", description: "Keeping referral partners informed." },
      { href: "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing", label: "How Did You Hear About Us", description: "Attributing new clients to marketing." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new H
  {
    slug: "insurance-credentialing-in-progress-wording-for-a-new-counseling-practice-website",
    keyword: "insurance credentialing in progress wording for a new counseling practice",
    category: "How-to",
    title: "Insurance Credentialing in Progress: New Practice Wording",
    metaTitle: "Insurance Credentialing in Progress: New Practice Wording",
    metaDescription:
      "Honest wording for a new counseling practice still waiting on insurance panels, with no promised dates and a self-pay option. Call (561) 291-2681.",
    answer:
      "While insurance credentialing is in progress, say exactly that: the practice has applied to named plans, is not yet in network, cannot promise a date, and offers self-pay with a superbill meanwhile. Do not list a plan as accepted until the contract is confirmed in writing, and update every listing the day that changes.",
    author: "Liam Costello",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-02",
    readMinutes: 5,
    sections: [
      h2("The gap between opening and being in network"),
      p(
        "A new counseling practice often opens its doors long before insurance contracts are finished. Credentialing is handled plan by plan, and timelines vary, sometimes taking months. During that gap, clients ask the same question: do you take my insurance? The website needs an honest answer that does not overpromise."
      ),
      p(
        "The temptation is to list every plan the practice has applied to. That creates a worse problem than silence. A client who books because the site said accepted, and then finds the clinician is out of network, feels misled, and that feeling travels fast in reviews."
      ),
      h2("Wording by status"),
      table(
        ["Status", "Honest wording"],
        ["Contract confirmed in writing", "We are in network with this plan as of the date on the confirmation. Check your benefits to confirm."],
        ["Application submitted", "We have applied to this plan. We are not in network yet and cannot say when that will happen."],
        ["Not applied", "We are not in network with this plan. Self-pay and a receipt for out-of-network claims are available."],
        ["Plan declined or closed to new providers", "This plan is not accepting new providers at the moment, so we do not take it."],
      ),
      h2("What to offer in the meantime"),
      ul(
        "Self-pay sessions with a clear fee and a receipt, often called a superbill, that a client may submit to their plan.",
        "A note that out-of-network reimbursement depends on the client's plan and is not something the practice can promise.",
        "A way to ask to be told when a plan is added, with permission to contact them, kept in a simple list.",
        "A pointer to the good faith estimate rules for clients who are not using insurance."
      ),
      h2("Keep records and listings in step"),
      p(
        "Providers usually keep their data in a credentialing system such as CAQH ProView, and plans ask them to re-attest on a regular schedule, so check the current requirement on the CAQH site. Put the date you last verified each plan on a private note, and refresh the website, the Google profile and the directories on the day a status changes, as explained in [what to update when you join or leave an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network)."
      ),
      p(
        "Back the wording with a clear [insurance verification page](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice) and a [fees page that explains superbills](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained), so clients can see their options without calling."
      ),
      h2("A line for the phone script and contact form"),
      p(
        "Give the front desk one sentence to use: We have applied to that plan and are not in network yet, so we cannot say when that will change. We can offer self-pay sessions and a receipt you may submit for out-of-network benefits, depending on your plan."
      ),
      ul(
        "Use the same sentence in the website FAQ so callers and readers hear the same answer.",
        "Offer to note the caller's interest and say you will contact them if the plan is added, but only with their permission.",
        "Never suggest that a plan will definitely cover the visit."
      ),
    ],
    faqs: [
      {
        q: "Can we list a plan as accepted while credentialing is pending?",
        a: "No. List a plan as accepted only after you have written confirmation of the contract and its start date. Before that, say you have applied and are not yet in network, so clients can make a decision with accurate information and are not surprised by a bill.",
      },
      {
        q: "How long does credentialing take?",
        a: "It varies by plan and by the completeness of the application, and it can take months. Do not publish a date on the website. Say that you will update the page when a plan is confirmed, and keep your application records current so delays are not caused by missing details.",
      },
      {
        q: "What can clients do in the meantime?",
        a: "They can pay for sessions themselves and ask for a receipt that may be submitted to their plan for out-of-network benefits. The practice cannot promise reimbursement, so the page should tell clients to check with their insurer before relying on it.",
      },
      {
        q: "Should the Google profile mention insurance?",
        a: "Only what is confirmed. Many practices leave insurance details to the website and keep the profile limited to what is certain. Whatever you decide, make sure the website, the profile and the directory listings never contradict each other about the plans you take.",
      },
      {
        q: "Who should keep the status list up to date?",
        a: "One named person, such as the practice manager or the owner. Keep the list with dates, and review it monthly. A stale insurance list is one of the quickest ways to lose a client's trust, and it is easy to prevent with a short routine.",
      },
    ],
    citations: [CAQH, NO_SURPRISES, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Insurance Verification And Benefits Check", description: "Helping clients check their own coverage." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Notice Page", description: "For clients not using insurance." },
      { href: "/guides/opening-date-and-coming-soon-page-for-a-new-counseling-practice-on-google", label: "Opening Date And Coming Soon Page", description: "Announcing a new practice honestly." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- new I
  {
    slug: "page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website",
    keyword: "page indexing report in google search console explained for a medical practice website",
    category: "Checklist",
    title: "Search Console Page Indexing Report Explained",
    metaTitle: "Search Console Page Indexing Report Explained",
    metaDescription:
      "What each Search Console page indexing status means for a medical practice website, and which ones need action. Call Primara at (561) 291-2681.",
    answer:
      "The page indexing report in Google Search Console lists why some of your pages are not in Google. Most reasons are normal, such as redirects or duplicate pages. The ones to act on are not found errors, accidental noindex tags, and good pages stuck in Crawled or Discovered, which usually need better links and content.",
    author: "Gio LaRoche",
    publishDate: "2026-11-02T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("A report that looks worse than it is"),
      p(
        "Open the page indexing report and you will see a grey bar of pages that are not indexed. Practice owners often read that as a failure. It is not. A site naturally has pages Google should not index, such as old URLs that redirect or a thank-you page that you want kept out. The job is to sort the list into normal and not normal."
      ),
      p(
        "Google does not promise to index every page it finds, and the report does not show a way to force it. It shows reasons. Learning to read those reasons tells you where to spend an hour."
      ),
      h2("The statuses you will actually see"),
      table(
        ["Status", "What it usually means and what to do"],
        ["Page with redirect", "The URL sends people elsewhere. Normal for old addresses. Check only that the destination is the right page."],
        ["Excluded by noindex tag", "You asked Google to skip it. Normal for thank-you pages, a problem if a service page shows here by mistake."],
        ["Alternate page with proper canonical tag", "Google found a copy and followed your canonical to the main page. Normal unless the canonical points to the wrong page."],
        ["Duplicate without user-selected canonical", "Google sees near-copies and chose one. Add a self-referencing canonical and make the pages different enough to deserve their own place."],
        ["Not found (404)", "The page is gone. Redirect it if it had value, or let it stay gone if it did not."],
        ["Crawled, currently not indexed", "Google read it and chose not to include it. Improve the content and add internal links from pages that are already indexed."],
        ["Discovered, currently not indexed", "Google knows the URL but has not visited. Add links from indexed pages and keep the sitemap clean."],
      ),
      h2("A one-hour routine"),
      ol(
        "Open the report and read each reason, starting with the one containing the most pages.",
        "For every page that should be indexed, open it in the URL inspection tool and look at the canonical Google chose.",
        "Fix real errors first: broken pages, wrong canonicals and accidental noindex tags.",
        "For good pages stuck in Crawled or Discovered, add a few links to them from indexed pages, in sentences a person would read.",
        "Leave the redirect and noindex lists alone unless a page appears there that should not."
      ),
      h3("What not to do"),
      ul(
        "Do not submit the same URL again and again. Requests are limited, and repeating them does not change the decision.",
        "Do not delete thin pages in a panic. Improve or merge them first.",
        "Do not publish many near-identical pages. Google tends to leave them out."
      ),
      p(
        "For the basics of the tool itself, start with [how to read Google Search Console for a medical practice website](/guides/how-to-read-google-search-console-for-a-medical-practice-website) and [setting up and verifying Search Console](/guides/how-to-set-up-and-verify-google-search-console-for-a-medical-practice-website). The links that move pages out of Discovered are covered in [internal linking for a medical practice website](/guides/internal-linking-for-a-medical-practice-website), and the canonical points above in [canonical tags and duplicate content](/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website)."
      ),
      h2("A worked example"),
      p(
        "Suppose the report shows forty pages as Crawled, currently not indexed, and twelve of them are service guides you care about. Open three of the twelve in the inspection tool. If they are thin, expand them. If they are good, find three indexed pages that naturally mention the topic and add a real sentence with a link to each."
      ),
      p(
        "Then wait. Google revisits at its own pace, often within weeks. Check the report again next month, and compare the count of the twelve, not the whole list. If your clicks from Google fell suddenly and you suspect an indexing change, the [first-hour checklist for a sudden drop in calls or traffic](/guides/what-to-check-in-the-first-hour-when-calls-or-traffic-drop-on-a-medical-practice-website) shows where this report fits among the other checks. Pairing the report with a [page inventory spreadsheet](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for) makes it easier to see which listed pages have no clear purpose and are worth merging."
      ),
    ],
    faqs: [
      {
        q: "Is it bad to have non-indexed pages?",
        a: "No. Every site has some, such as redirects, thank-you pages and duplicates. What matters is that your important pages, like services, providers and locations, are indexed. Sort the list by importance before reacting to any total, and ignore the groups that are expected.",
      },
      {
        q: "What does Crawled, currently not indexed mean?",
        a: "Google visited the page and chose not to include it for now. It is usually a sign that the page needs stronger content or more links from pages Google already trusts. Improving the page and linking to it is more effective than resubmitting it again.",
      },
      {
        q: "What does Discovered, currently not indexed mean?",
        a: "Google found the URL, often in your sitemap, but has not yet visited it. Add links from indexed pages and be patient. A new page with no links pointing to it may wait a long time to be read, no matter how good it is.",
      },
      {
        q: "Should we request indexing for every new page?",
        a: "Not as a routine. A sitemap and good internal links are the normal route, and manual requests are limited. Reserve them for pages that matter and have been waiting for a reasonable time, and never use them as a substitute for fixing the page.",
      },
      {
        q: "How often should we check this report?",
        a: "Monthly is enough for most practices, and after any large change to the site, such as a redesign or domain move. Look at trends over several weeks, not single numbers, and keep a short note of what you changed so you can link cause and effect.",
      },
    ],
    citations: [GSC_INDEXING, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-read-google-search-console-for-a-medical-practice-website", label: "Reading Google Search Console", description: "A tour of the main reports." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking For A Medical Practice", description: "Links that help pages get found." },
      { href: "/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website", label: "Canonical Tags And Duplicate Content", description: "Telling Google which page is the original." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
