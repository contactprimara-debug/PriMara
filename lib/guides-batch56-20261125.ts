// -- Guides batch 56 - 2026-11-25 (afternoon) --
// Six guides from the Command Center queue (rows 2130, 2131, 2132, 2133, 2134, 2135), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care and counseling practice owner audience only. Sources fetched and read
// before writing: CDC healthy weight page, the HHS/USDA Dietary Guidelines page (ODPHP), 45 CFR 164.524 (right of access),
// Medicare.gov second surgical opinions and long-term care pages, Apple Support (add a website to the Home Screen), Google
// Chrome Help (web apps), NHLBI how much sleep is enough and sleep deficiency pages, the NIA sleep and older adults page,
// the NHS anger page and the NIMH stress fact sheet. Plain practical guidance, no legal advice, no clinical claims, no
// outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const CDC_WEIGHT = {
  publisher: "Centers for Disease Control and Prevention",
  label: "Healthy Weight and Growth",
  href: "https://www.cdc.gov/healthy-weight-growth/about/index.html",
};
const DGA = {
  publisher: "Office of Disease Prevention and Health Promotion (HHS)",
  label: "Dietary Guidelines for Americans",
  href: "https://odphp.health.gov/our-work/nutrition-physical-activity/dietary-guidelines",
};
const CFR_ACCESS = {
  publisher: "Legal Information Institute, Cornell Law School",
  label: "45 CFR 164.524: Access of individuals to protected health information",
  href: "https://www.law.cornell.edu/cfr/text/45/164.524",
};
const MEDICARE_SECOND = {
  publisher: "Medicare.gov",
  label: "Second surgical opinions",
  href: "https://www.medicare.gov/coverage/second-surgical-opinions",
};
const APPLE_WEB = {
  publisher: "Apple Support",
  label: "Turn a website into an app in Safari on iPhone",
  href: "https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios",
};
const CHROME_WEB = {
  publisher: "Google Chrome Help",
  label: "Use web apps",
  href: "https://support.google.com/chrome/answer/9658361",
};
const NHLBI_SLEEP = {
  publisher: "National Heart, Lung, and Blood Institute",
  label: "How Much Sleep Is Enough?",
  href: "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep",
};
const NIA_SLEEP = {
  publisher: "National Institute on Aging",
  label: "Sleep and Older Adults",
  href: "https://www.nia.nih.gov/health/sleep/sleep-and-older-adults",
};
const NIMH_STRESS = {
  publisher: "National Institute of Mental Health",
  label: "I'm So Stressed Out! Fact Sheet",
  href: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet",
};
const NHS_ANGER = {
  publisher: "NHS (United Kingdom)",
  label: "Anger: get help with anger",
  href: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anger/",
};
const MEDICARE_LTC = {
  publisher: "Medicare.gov",
  label: "Long-term care",
  href: "https://www.medicare.gov/coverage/long-term-care",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };
const BHREF = { href: "/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims", label: "Behavioral Health Referral Page", description: "Connect primary care patients to counseling." };
const PHONE = { href: "/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website", label: "Phone Number Format and Click-to-Call Links", description: "One number, tappable everywhere." };

export const guidesPartForty19: Guide[] = [
  // ---------------------------------------------------------------- 2130
  {
    slug: "nutrition-and-weight-visit-page-for-a-primary-care-practice-that-describes-the-conversation-without-outcome-claims",
    keyword: "a nutrition and weight visit page for a primary care practice without outcome claims",
    category: "Checklist",
    title: "A Nutrition and Weight Visit Page Without Outcome Claims",
    metaTitle: "Nutrition and Weight Visit Page, No Outcome Claims",
    metaDescription:
      "How a primary care practice can describe a nutrition and weight visit with respect and without promises. What to say, what to skip. (561) 291-2681.",
    answer:
      "A nutrition and weight visit page should describe the conversation, not a result. Say who the patient talks with, what the visit covers, what to bring and how to book. Leave out before-and-after pictures, pounds, timelines and guarantees, and keep the wording respectful of every body size.",
    author: "Liam Costello",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("Why this page is easy to get wrong"),
      p(
        "Weight is the topic patients feel most judged about, and it is also the topic where advertising language runs furthest ahead of what a medical practice can honestly say. A page that promises a number or a date puts the practice in a corner. A page that shows a thin stranger in a gym puts the patient in one, before they have even phoned."
      ),
      p(
        "The safer and kinder route is to describe the visit itself. A patient who has been putting off the call mostly wants to know whether they will be lectured, weighed in front of others, or sold something. Answer those worries plainly and the page does its job."
      ),
      h2("What public health sources actually say"),
      p(
        "The CDC's healthy weight page describes healthy growth and weight as including healthy eating, physical activity, sleep and stress reduction, and it lists a body mass index calculator as a screening tool. Notice the wording: a screening tool and a set of everyday habits, not a program with a guaranteed outcome."
      ),
      p(
        "The Dietary Guidelines for Americans are issued by the Department of Health and Human Services and the Department of Agriculture, and they are updated every five years. Linking to the current edition gives patients one neutral reference. It also keeps the practice from inventing its own food rules on a public page."
      ),
      h2("What the visit page should cover"),
      ol(
        "Who the patient sees, by title, such as the physician, nurse practitioner or physician assistant.",
        "How long the visit is booked for, if the practice has a standard length.",
        "What the conversation usually includes: eating habits, daily activity, sleep, stress, current medicines and the patient's own goals.",
        "What the patient is asked to bring, such as a medicine list and a few days of notes about meals if they are willing.",
        "Whether the patient will be weighed, and that they can ask to skip it or to face away from the scale.",
        "How to book, with the office phone number as a tappable link and an online request form."
      ),
      p(
        "Each item answers a question patients otherwise carry into the call. The weighing line in particular removes a barrier for people who have avoided clinics for years."
      ),
      h2("Wording that works and wording to skip"),
      table(
        ["Say this", "Not this"],
        ["Talk through eating, activity, sleep and stress with your clinician", "Lose weight fast with our program"],
        ["Set goals that fit your own life", "Reach your ideal weight in a set number of weeks"],
        ["You decide what we measure and what we leave alone", "Step on the scale to see where you stand"],
        ["Bring your medicine list so we can look at the whole picture", "Our plan works for everyone"],
        ["Call us to book a first visit", "Limited spots, start today"]
      ),
      h3("Pictures and numbers"),
      p(
        "Skip before-and-after photos, scale graphics and any figure that suggests a typical result. Use a plain photo of the building or the care team instead. If the practice refers patients to a dietitian or a community program, say that in a sentence and name the referral path, as in our guide to the [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims), which uses the same pattern for a different service."
      ),
      h2("Privacy on the booking form"),
      p(
        "The online request form should ask for a name, a phone number and a preferred time, nothing about weight, diet or conditions. A reason-for-visit box invites patients to type private details into a form that travels by email. Give them the phone number for anything personal, set up as a tappable link the way the guide to [click-to-call links](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website) describes."
      ),
      p(
        "This guide is practical wording advice for a practice owner. It is not clinical or legal advice, and the clinicians in your practice decide what the visit actually includes."
      ),
    ],
    faqs: [
      {
        q: "Can the page mention a medication used for weight?",
        a: "Better not to. Naming a product on a public page reads as advertising it and invites patients to arrive expecting a prescription. Describe the conversation and let the clinician discuss options in the room.",
      },
      {
        q: "Is it fine to say patients can skip being weighed?",
        a: "Yes, if that is your actual practice. Many people avoid visits because of the scale. State only what the clinicians will honor, and train the front desk to say the same thing on the phone.",
      },
      {
        q: "Should the page show a body mass index calculator?",
        a: "A calculator on your own page invites patients to self-judge and can feel clinical or harsh. Linking to the CDC's page lets the practice stay neutral while still pointing to a respected source.",
      },
      {
        q: "How long should the page be?",
        a: "Long enough to cover who, what, what to bring and how to book. Around 700 words with a short question list usually does it. Padding it with nutrition advice makes the practice responsible for that advice.",
      },
      {
        q: "Who should approve the wording?",
        a: "The lead clinician. They know what the visit really includes, and nothing should appear on the page that the clinicians would not say aloud to a patient.",
      },
    ],
    citations: [CDC_WEIGHT, DGA],
    links: [
      { href: "/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims", label: "Chronic Condition Follow-Up Visits Page", description: "Ongoing visits, described without claims." },
      { href: "/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website", label: "Preventive Versus Problem Visit", description: "Explain the difference to patients." },
      BHREF,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2131
  {
    slug: "second-opinion-and-outside-records-review-visit-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "a second-opinion and outside-records review visit page for a primary care practice",
    category: "Checklist",
    title: "Second-Opinion and Outside-Records Visit Page",
    metaTitle: "Second-Opinion and Outside-Records Visit Page",
    metaDescription:
      "How a primary care practice can explain a visit to review outside records and answer questions, with a clear records path. (561) 291-2681.",
    answer:
      "A second-opinion visit page should say what the clinician will do, which is read records from another office and talk through questions. Explain how records reach you, what the patient brings, and what you cannot promise, such as a different answer. Never imply the visit replaces the treating doctor.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("Patients search for this in their own words"),
      p(
        "People rarely type second opinion visit. They type things like can my regular doctor look at what the specialist told me, or who can explain my test results from another hospital. A short page that answers that plainly gives your practice a place in those searches and gives a worried patient somewhere to start."
      ),
      h2("What the visit is, in one honest paragraph"),
      p(
        "Say it as it is. The patient books a visit, the practice gathers the records from the other office, and a clinician reads them and talks the patient through questions. Then state the limits in the same paragraph. The clinician may agree with the earlier advice, may raise questions for the patient to take back to that doctor, or may suggest another specialist. The page promises none of those outcomes."
      ),
      h2("How records reach the practice"),
      p(
        "Most delays happen here, so spell it out. The federal rule on access to health information, 45 CFR 164.524, gives an individual the right to inspect and obtain a copy of their records held by a covered provider, with exceptions such as psychotherapy notes. The same rule says that when the individual directs the provider to send a copy straight to a person they name, the provider must send it there."
      ),
      p(
        "The rule also sets the clock. A provider must act on a request within 30 days, and may extend once by up to 30 more days if it gives the patient a written reason and a date. For the patient this means asking early. For your page it means a sentence such as: Ask the other office to send your records to us, or request a copy yourself and bring it. This is a plain-language summary, not legal advice, so have your compliance contact review any wording about timing."
      ),
      table(
        ["Route", "Who does the work, and what it suits"],
        ["The other office sends records to your practice", "The patient signs that office's release form; suits a full chart and imaging reports"],
        ["The patient requests a copy and brings it", "The patient; suits a quick start and small record sets"],
        ["Your practice requests records on the patient's behalf", "Your front desk, with the patient's signed permission; suits patients who find forms hard"]
      ),
      h2("What to bring to the visit"),
      ul(
        "A list of the patient's questions, written down, with the most important one first.",
        "Reports, test results and imaging reports from the other office, or a note that they are on the way.",
        "A current medicine list.",
        "The name and phone number of the doctor who gave the original advice.",
        "A family member or friend, if the patient wants a second set of ears."
      ),
      h2("What the page should not say"),
      p(
        "Do not say the visit will confirm or overturn a diagnosis. Do not criticize the other office, name a specialty or condition as a selling point, or suggest that a patient should delay treatment while waiting to see you. A line such as Please keep any scheduled appointments with your other doctors protects the patient and the practice."
      ),
      p(
        "For insurance, keep it general. Medicare.gov, for example, says Part B covers a second opinion for medically necessary, non-emergency surgery in some cases, and it says nothing about every kind of second opinion. Tell patients to check with their own plan before booking, and do not quote what a plan pays."
      ),
      h2("Booking"),
      p(
        "Give two ways to ask: a tappable office number and a short request form that collects only name, phone and best time. Ask for no medical details on the form. The records conversation can happen by phone once the patient is on the schedule."
      ),
    ],
    faqs: [
      {
        q: "Should we offer this visit to people who are not existing patients?",
        a: "That is the practice's decision. Whatever you choose, say it on the page. If new patients are welcome, link the page to your new patient steps so the first visit and the records request happen together.",
      },
      {
        q: "Does the page need to mention HIPAA?",
        a: "A short sentence that patients choose who receives their records is enough. Avoid explaining the law at length. Have your compliance contact approve the final wording.",
      },
      {
        q: "What if records never arrive before the visit?",
        a: "Decide the rule in advance and print it. Many practices keep the visit and use it to plan next steps, others reschedule. A rule the patient can read prevents an awkward front desk conversation.",
      },
      {
        q: "Can we mention that we do not perform surgery?",
        a: "Yes, and it helps. If patients are looking for a surgical second opinion, say the visit is with a primary care clinician and the practice can help them find the right specialist.",
      },
      {
        q: "Is a phone-only option needed?",
        a: "Yes. Patients juggling a new diagnosis often prefer to talk. Put the number at the top of the page and again beside the form.",
      },
    ],
    citations: [CFR_ACCESS, MEDICARE_SECOND],
    links: [
      { href: "/guides/transferring-care-from-another-doctor-page-for-a-primary-care-practice", label: "Transferring Care From Another Doctor", description: "Moving a patient's care to your practice." },
      { href: "/guides/specialist-referral-request-page-for-patients-of-a-primary-care-practice", label: "Specialist Referral Request Page", description: "Help patients reach the right specialist." },
      { href: "/guides/patients-who-move-out-of-the-area-records-transfer-and-referral-wording-for-a-primary-care-practice", label: "Records Transfer Wording", description: "Plain wording for records leaving your practice." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2132
  {
    slug: "saving-the-patient-portal-sign-in-page-to-a-phone-home-screen-with-a-short-instruction-card-for-a-medical-practice",
    keyword: "saving the patient portal sign-in page to a phone home screen with a short instruction card",
    category: "How-to",
    title: "Patient Portal Home Screen Shortcut Instruction Card",
    metaTitle: "Portal Home Screen Shortcut Card for Patients",
    metaDescription:
      "Patients lose the portal link between visits. A short instruction card for saving it to a phone home screen, with tests. (561) 291-2681.",
    answer:
      "Patients who can reach the portal with one tap are far more likely to use it, and a shortcut on the phone home screen does that. Publish a short instruction card with steps for iPhone and Android, aim it at the sign-in page, and test it on real phones before posting.",
    author: "Liam Costello",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("The problem is finding the door again"),
      p(
        "A patient signs in to the portal once to see a result, closes the browser, and three months later cannot remember the address. They search for the practice name, land on the home page, scroll for the portal link and give up. The front desk then takes a call that a saved shortcut would have prevented."
      ),
      p(
        "Phones can keep a website as an icon next to the other apps. Apple describes this for Safari as turning a website into an app, and Google Chrome Help describes web apps as websites you open through the launcher or home screen. Neither company promises that every site behaves the same way, so the instructions below say what to check."
      ),
      h2("What goes on the card"),
      p(
        "The card is a small block on the portal help page, short enough to read in one scroll on a phone. Keep it as real text, not a picture, so a screen reader and a translation tool can handle it. If you also offer a printable version, keep the text identical."
      ),
      h3("iPhone, Safari"),
      p(
        "Apple's steps, as published, are these. Open the Safari app and go to the website. Tap the Share button. Scroll down the list and tap Add to Home Screen. If it is not in the list, scroll to the bottom, tap Edit Actions and add it. Turn on Open as Web App if you see it, then tap Add. An icon appears on the Home Screen, and tapping it opens the site."
      ),
      h3("Android, Chrome"),
      p(
        "Google's help page describes installing a web app from the browser and then opening it from the launcher or home screen. The menu wording differs between phone makers and browser versions, so write the card from a phone you hold in your hand, in your own words, and note the browser name. Do not copy menu names from memory."
      ),
      table(
        ["Phone", "Where to look, and what to check before you publish"],
        ["iPhone with Safari", "Share, then Add to Home Screen; confirm the icon opens the sign-in page"],
        ["Android with Chrome", "Browser menu, then an Install or Add to Home screen option; confirm the icon opens the sign-in page"],
        ["Another browser", "Its own menu; say plainly that the steps may differ"]
      ),
      h2("Point the shortcut at the right page"),
      p(
        "Save the portal's sign-in page, never a page that appears after sign-in. The practice owner can open the sign-in address in a private browser window and confirm it loads without a session. Then confirm the address still works after portal updates, as covered in our guide to [checking links to the patient portal](/guides/checking-that-links-to-the-patient-portal-and-online-forms-still-work-after-the-portal-vendor-updates-its-software)."
      ),
      h2("Think about who else sees the phone"),
      p(
        "An icon on a shared or unlocked phone is visible to everyone who picks it up. For a counseling practice this matters: an icon labeled with the practice name can reveal more than the client wants. Offer a short note that the patient can rename the shortcut to something neutral, and verify on your own phone whether renaming works before you say so. Remind patients never to save their password in a shared device."
      ),
      h2("Test it"),
      ol(
        "Follow your own card on an iPhone, start to finish, and note anything that surprised you.",
        "Repeat on an Android phone with Chrome.",
        "Tap the finished shortcut and confirm it opens the sign-in page, not an error or the practice home page.",
        "Ask someone outside the office to try it using only the card.",
        "Recheck after the portal vendor changes the sign-in address."
      ),
      p(
        "Last, give the card a plain heading such as Put the patient portal on your phone, link to it from the portal help page, and add the office number as a tappable link for anyone who gets stuck."
      ),
    ],
    faqs: [
      {
        q: "Does this require patients to download an app?",
        a: "No. The shortcut is a saved link that looks like an app icon. Nothing is installed from an app store, which also means nothing needs updating.",
      },
      {
        q: "Will the shortcut send notifications?",
        a: "Apple notes that a website saved as a web app can receive notifications. Whether the portal sends any is up to the vendor, so do not promise reminders on the card unless the portal does.",
      },
      {
        q: "Should we include a picture of each step?",
        a: "Pictures help many patients, but add a text description with each one so a screen reader and a translation tool can follow along. Screenshots go out of date when phones update, so date them.",
      },
      {
        q: "What about patients with older phones?",
        a: "Keep a plain bookmark option on the card and the office phone number as a fallback. Not every phone offers the same menu options.",
      },
      {
        q: "Who updates the card?",
        a: "Put a yearly line in the website review checklist. Phone menus and portal addresses change, and a card that no longer matches the screen does more harm than no card.",
      },
    ],
    citations: [APPLE_WEB, CHROME_WEB],
    links: [
      { href: "/guides/portal-login-and-messaging-expectations-page-for-a-counseling-practice", label: "Portal Login and Messaging Expectations", description: "Set expectations for portal use." },
      { href: "/guides/patient-portal-sign-in-that-allows-a-password-manager-and-paste-on-a-medical-practice-website", label: "Portal Sign-In With Password Manager", description: "Make signing in easier." },
      { href: "/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access", label: "Senior-Friendly Website Layout", description: "Large text and caregiver access." },
      PHONE,
    ],
  },

  // ---------------------------------------------------------------- 2133
  {
    slug: "sleep-difficulties-counseling-page-for-a-counseling-practice-that-points-to-the-patients-own-doctor-without-clinical-claims",
    keyword: "a sleep difficulties counseling page for a counseling practice without clinical claims",
    category: "Checklist",
    title: "Sleep Difficulties Counseling Page Without Claims",
    metaTitle: "Sleep Difficulties Counseling Page, No Claims",
    metaDescription:
      "How a counseling practice can write a sleep difficulties page that explains what sessions cover and when to see a medical doctor. (561) 291-2681.",
    answer:
      "A sleep difficulties counseling page should say what counseling can talk through, such as worry, routine and stress, and say plainly that sleep problems can have medical causes, so the patient's own doctor should be involved. Promise no cure, no number of hours and no results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("Who reads this page, and what they need"),
      p(
        "Someone searching late at night for help with sleep is tired and often anxious about being tired. They want to know two things: whether a counselor is the right person to call, and whether anything else should be checked first. A good page answers both and does not pretend that counseling replaces a medical visit."
      ),
      h2("What the public sources say"),
      p(
        "The National Heart, Lung, and Blood Institute says experts recommend that adults sleep between 7 and 9 hours a night, and it advises talking with a doctor if you think you or your child sleeps too much or too little. That second part is the line your page should echo."
      ),
      p(
        "The National Institute on Aging describes insomnia as trouble falling asleep or staying asleep at least three nights a week, and notes that cognitive behavioral therapy, a type of counseling, can help. It also suggests keeping a sleep diary for a couple of weeks to bring to a doctor, and it says anyone who suspects sleep apnea should talk to a doctor. The National Institute of Mental Health lists loss of sleep among the symptoms that can come with stress and anxiety."
      ),
      p(
        "Your page can point to these sources without repeating their medical content. A counselor is not diagnosing anything here, and the page should not read as if they were."
      ),
      h2("What a counseling session can honestly cover"),
      ul(
        "Racing thoughts and worry that show up at bedtime.",
        "Stress from work, family or money that follows the person into the night.",
        "The evening routine, screen habits and the way the day ends.",
        "Grief, life changes or conflict that keep a person awake.",
        "A plan for how to talk to their doctor and what to bring."
      ),
      p(
        "Describe each of these as something the counselor talks through with the client, not something the counselor fixes. Verbs such as discuss, explore and plan are safe. Verbs such as cure, eliminate and restore are not."
      ),
      h2("The paragraph that protects everyone"),
      p(
        "Write a short paragraph, set apart on the page, along these lines: Sleep problems can have medical causes. If you snore loudly, wake gasping, feel unable to stay awake in the day, or take medicines that may affect sleep, please talk with your doctor as well. We are happy to coordinate with them if you ask us to. This is not a clinical statement, it is a pointer, and it keeps the counseling visit from becoming a substitute for a check-up. If the practice works alongside primary care, link to the [behavioral health referral page](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) so a doctor can send patients over, and patients can see how care is shared."
      ),
      table(
        ["Write this", "Not this"],
        ["Counseling for sleep difficulties linked to stress and worry", "Beat insomnia for good"],
        ["We talk through what is keeping you up", "Our method restores healthy sleep"],
        ["Please see your doctor about sleep problems too", "No medication needed"],
        ["Request a first session", "Start sleeping tonight"]
      ),
      h2("Safety and tone"),
      p(
        "Add the 988 Suicide and Crisis Lifeline and emergency services in the footer of every counseling page, because long sleeplessness can overlap with low mood. Keep the tone calm. Short paragraphs, no countdown timers, no pop-ups at night."
      ),
      p(
        "Booking should work at any hour, since this is when people search. A request form that confirms by the next business day, and an office number shown with its hours, is enough. This guide is practical wording advice, not clinical or legal advice."
      ),
    ],
    faqs: [
      {
        q: "Can we say counseling treats insomnia?",
        a: "It is safer to say counseling can help a person talk through what is affecting their sleep. Treating a named condition is a clinical claim, and each state licensing board sets its own rules about what counselors may say.",
      },
      {
        q: "Should the page include sleep tips?",
        a: "A short link to the NHLBI or NIA pages is enough. A list of tips from the practice becomes advice the practice is responsible for, and it dilutes the point of the page.",
      },
      {
        q: "What should clients bring to a first session?",
        a: "A sleep diary kept for a couple of weeks is helpful if they are willing, along with their questions. The NIA page lists what to note, such as bedtime, night wakings and caffeine.",
      },
      {
        q: "Do we need a separate page for teens?",
        a: "Teens sleep differently from adults, as the NHLBI table shows. If your practice sees them, write a short separate paragraph for parents instead of reusing the adult wording.",
      },
      {
        q: "How do we show we work with doctors?",
        a: "Say you coordinate care when a client asks you to and signs the release. Do not name specific physicians or imply a referral arrangement that does not exist.",
      },
    ],
    citations: [NHLBI_SLEEP, NIA_SLEEP, NIMH_STRESS],
    links: [
      { href: "/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims", label: "Workplace Stress Counseling Page", description: "Work stress, described without claims." },
      { href: "/guides/older-adult-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Older Adult Counseling Page", description: "Counseling for later life." },
      BHREF,
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2134
  {
    slug: "anger-and-emotional-regulation-counseling-page-for-a-counseling-practice-that-states-what-it-does-and-does-not-offer",
    keyword: "an anger and emotional regulation counseling page for a counseling practice without clinical claims",
    category: "Checklist",
    title: "Anger and Emotional Regulation Counseling Page",
    metaTitle: "Anger and Emotional Regulation Counseling Page",
    metaDescription:
      "How a counseling practice can write an anger and emotional regulation page that is calm, honest about what it offers, and safe. (561) 291-2681.",
    answer:
      "An anger counseling page should be calm, non-judging and specific about what the practice offers. Describe what sessions talk through, say plainly whether you provide court-ordered classes, include safety wording for anyone at risk of harming themselves or others, and promise no change.",
    author: "Liam Costello",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("A page people read with a clenched jaw"),
      p(
        "A person who searches for anger counseling is rarely in a good mood. Many have been told by someone else to look into it. The first thing they decide is whether the page is on their side or against them, and a heading like Do you have an anger problem answers that wrongly. Plain, even language lowers the temperature before the first call."
      ),
      h2("How the NHS describes it"),
      p(
        "The NHS page on anger is a useful model of tone. It begins by saying most people feel angry sometimes, and that if it is affecting your life there are things you can try. It lists physical signs such as a faster heartbeat and tense muscles, and changes in behavior such as shouting or breaking things. It then suggests ideas such as counting to 10, calming breathing, exercise and talking to someone, and it says to see a GP if self-help is not working or if you are acting in an abusive or violent way."
      ),
      p(
        "The NHS also explains that a typical anger management programme may involve one-to-one counselling and working in a group, and that most programmes include cognitive behavioural therapy. Your page does not need to repeat that. It does need to say which of those things your practice actually offers."
      ),
      h2("Say what you do and do not offer"),
      p(
        "This is the paragraph that saves the most phone calls. Decide, then print it. A practice that offers individual sessions about managing strong emotions should say so. A practice that does not run group programs, or does not issue certificates of completion for a court, a school or an employer, should say that too, in plain words."
      ),
      table(
        ["Question a visitor has", "Answer to write down"],
        ["Do you offer individual sessions?", "Yes or no, and for what ages"],
        ["Do you run group classes?", "Yes with a start date rule, or no"],
        ["Can you provide a certificate for a court or employer?", "Say yes or no; if unsure, say to ask the requesting body what it accepts"],
        ["Do you see couples or families about anger?", "Link to the couples page if you do"],
        ["Is telehealth available?", "State the states you serve"]
      ),
      h2("What sessions can honestly be described as"),
      ul(
        "Noticing early signs, such as tension or a racing heart, before a reaction.",
        "Looking at the situations and thoughts that tend to come before an outburst.",
        "Practicing ways to pause, breathe and respond.",
        "Talking through how anger has affected work and relationships.",
        "Setting small goals the client chooses."
      ),
      p(
        "Each line describes an activity, not an outcome. The NIMH fact sheet on stress makes the same distinction, noting that it may take trial and error to find what works for you."
      ),
      h2("Safety wording"),
      p(
        "A page about anger needs two lines of safety text. First, if someone is in immediate danger or thinking about harming themselves or another person, they should call 911, or call or text 988. Second, if someone is being hurt by a partner or family member, the page should point to the National Domestic Violence Hotline. Place both near the top of the page and again above the footer, in text, not in an image."
      ),
      p(
        "Do not build a screening quiz that scores anger and returns a label. It is a clinical tool in disguise, and the result can drive someone away. A short sentence is better: If anger is getting in the way of your relationships or work, we can talk it through."
      ),
      h2("A kinder call to action"),
      p(
        "Use a button such as Request a first session, and keep the form to name, phone and best time. Ask for no details about incidents. Link to the practice's [first session guide](/guides/behavioral-health-referral-page-for-a-primary-care-practice-without-clinical-claims) for referral partners, and show the office number as a tappable link. This guide offers wording advice only, not clinical or legal advice."
      ),
    ],
    faqs: [
      {
        q: "Is it safe to publish a page about anger?",
        a: "Yes, with safety wording and no promises. Many practice owners avoid the topic, which leaves people searching with only forum posts to read. A calm, honest page serves them better.",
      },
      {
        q: "Should the page use the phrase anger management?",
        a: "It is what people type, so use it once, then describe what you actually offer in plainer terms. If you do not run court-ordered programs, say so near the first mention to avoid false expectations.",
      },
      {
        q: "Can we show testimonials?",
        a: "No. Client stories on a counseling page raise privacy and licensing questions and can read as a promise of change. Use a short description of what a first session looks like instead.",
      },
      {
        q: "What about teens and children?",
        a: "Write a separate short section for parents, stating the ages you see and how a parent is involved. Do not reuse adult wording for a young person's care.",
      },
      {
        q: "Who should review the page?",
        a: "The clinical director or a licensed counselor on staff. They know the practice's real scope and the state board's advertising rules, and they should sign off before the page goes live.",
      },
    ],
    citations: [NHS_ANGER, NIMH_STRESS],
    links: [
      { href: "/guides/couples-counseling-page-for-a-counseling-practice-without-clinical-claims", label: "Couples Counseling Page", description: "Relationship counseling, described honestly." },
      { href: "/guides/workplace-stress-counseling-page-for-working-professionals-without-clinical-claims", label: "Workplace Stress Counseling Page", description: "Stress from work, no claims." },
      { href: "/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice", label: "Community Resources and Support Groups", description: "Where to send clients for more help." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 2135
  {
    slug: "coordinating-visits-for-a-patient-who-lives-in-an-assisted-living-facility-page-for-a-primary-care-practice",
    keyword: "coordinating visits for a patient who lives in an assisted living facility page for a primary care practice",
    category: "Checklist",
    title: "Page for Patients Living in Assisted Living",
    metaTitle: "Visit Coordination Page for Assisted Living Patients",
    metaDescription:
      "How a primary care practice can write a page that helps assisted living staff and families schedule and prepare visits. (561) 291-2681.",
    answer:
      "A page for patients in assisted living should speak to three readers: the patient, the family and the facility staff. State how visits are scheduled, who sends the medicine list and transport details, who may talk to the office, and how visit notes reach the facility with the patient's permission.",
    author: "Gio LaRoche",
    publishDate: "2026-11-25T21:00:00Z",
    dateModified: "2026-11-25",
    readMinutes: 5,
    sections: [
      h2("One patient, three people on the phone"),
      p(
        "When a patient lives in assisted living, the person who calls your office is often not the patient. It may be a daughter two states away, a facility nurse, or a staff member who handles transport. Each asks something different, and a front desk that has no written answer spends the call finding out who is authorized to hear what."
      ),
      p(
        "A single page that explains the routine for these patients cuts that guesswork. It also gives facilities, which pass practices along by word of mouth, a link to share."
      ),
      h2("Keep medical visits and facility care apart"),
      p(
        "It helps to say what your practice does not do. Medicare.gov explains that long-term care is mostly non-medical help with daily tasks and that Medicare does not pay for it, and it notes this kind of care can be received in an assisted living facility. Your practice provides medical visits. The facility provides daily support. One sentence on the page that draws that line saves confusion about who arranges a bath aide or a meal."
      ),
      h2("Decide and state how visits happen"),
      p(
        "Choose which of these applies and say so. If the practice does house calls to facilities, link to the [home visits page](/guides/home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims). If patients come to the office, say that and describe what the escort needs."
      ),
      table(
        ["Visit type", "What the page should say"],
        ["Patient comes to the office", "How transport is arranged and who stays with the patient"],
        ["Clinician visits the facility", "Which facilities you serve and how to ask"],
        ["Video visit from the facility", "Who sets up the device and the sign-in steps"],
        ["Phone check-in", "When the office calls and which number it uses"]
      ),
      h2("A short checklist for facility staff"),
      p(
        "A section headed For facility staff can be a plain list. Write it with a facility nurse or administrator reading over your shoulder, since they know what is realistic."
      ),
      ol(
        "Call the office or use the request form to book, and name the patient's preferred contact person.",
        "Send the current medicine list, as the facility keeps it, before the visit.",
        "Confirm who will travel with the patient and how long the visit usually takes.",
        "Bring the patient's insurance cards and photo identification.",
        "Tell us about mobility needs, hearing or vision needs, and the patient's preferred language.",
        "Ask for the visit summary to be sent to the facility, if the patient or their representative agrees."
      ),
      h2("Who may talk to the office"),
      p(
        "Say on the page that the office speaks with family members and facility staff according to the patient's wishes and the practice's permission form. Point to the [caregiver and family communication policy](/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice) for the full wording, and give one phone line for these calls. Do not list anyone's health details on the page, and do not post a facility's name without that facility's agreement."
      ),
      h2("Make the page easy to read on a phone"),
      p(
        "Facility staff often read it between tasks on a phone. Use large text, short sections, and a tappable number at the top, in line with the [senior-friendly layout](/guides/senior-friendly-website-layout-for-a-primary-care-practice-with-large-text-and-caregiver-access) guide. A one-page printable version in the same words lets the nurse station keep a copy by the phone."
      ),
      p(
        "This is wording advice, not legal or clinical advice. Have your compliance contact check anything about who may receive information."
      ),
    ],
    faqs: [
      {
        q: "Can we list the facilities we work with?",
        a: "Only with each facility's written agreement, and many practices skip the list. Instead, say to call the office to ask whether the practice serves a particular address.",
      },
      {
        q: "Does the page need a form for facilities?",
        a: "A short request form with a facility contact name, phone number and best time is enough. Keep patient health details off it and handle them by phone.",
      },
      {
        q: "What should the page say about billing?",
        a: "Keep it general: bring insurance cards, and the office can explain what a plan covers. Leave amounts and payer promises out of the page.",
      },
      {
        q: "Who is the patient's representative?",
        a: "That depends on paperwork the patient or family signs, which the practice defines in its own policy. Name the form on the page and link to it, but leave the legal meaning to your compliance contact.",
      },
      {
        q: "Should the page mention memory care?",
        a: "Only if the practice has a real process for it. Otherwise it can set an expectation you cannot meet. If you do, describe the logistics, such as escort and extra time, without health claims.",
      },
    ],
    citations: [MEDICARE_LTC],
    links: [
      { href: "/guides/home-visits-and-house-calls-page-for-a-primary-care-practice-without-clinical-claims", label: "Home Visits and House Calls Page", description: "Visits where the patient lives." },
      { href: "/guides/caregiver-and-family-member-communication-policy-page-for-a-medical-practice", label: "Caregiver and Family Communication Policy", description: "Who may speak with the office." },
      { href: "/guides/post-hospital-follow-up-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Post-Hospital Follow-Up Visit Page", description: "Visits after a hospital stay." },
      LOC,
    ],
  },
];
