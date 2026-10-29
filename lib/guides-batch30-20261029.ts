// -- Guides batch 30 - 2026-10-29 --
// Guide/AEO pages from the Command Center queue (rows 1362, 1363, 1367, 1368, 1370 plus ten rows planned 2026-10-29),
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
const HHS_INDIVIDUALS = {
  publisher: "U.S. Department of Health and Human Services",
  label: "HIPAA information for individuals",
  href: "https://www.hhs.gov/hipaa/for-individuals/index.html",
};
const LIFELINE = { publisher: "988 Suicide & Crisis Lifeline", label: "988 Lifeline", href: "https://988lifeline.org/" };
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
const GBP_GUIDELINES = {
  publisher: "Google Business Profile Help",
  label: "Guidelines for representing your business",
  href: "https://support.google.com/business/answer/3038177",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const FTC_ADVERTISING = {
  publisher: "Federal Trade Commission",
  label: "Advertising and marketing guidance for business",
  href: "https://www.ftc.gov/business-guidance/advertising-marketing",
};
const FCC_TEXTS = {
  publisher: "Federal Communications Commission",
  label: "Stop unwanted robocalls and texts",
  href: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
};
const NPPES = {
  publisher: "Centers for Medicare & Medicaid Services",
  label: "National Plan and Provider Enumeration System (NPPES)",
  href: "https://nppes.cms.hhs.gov/",
};
const CAQH = { publisher: "CAQH", label: "CAQH provider data", href: "https://www.caqh.org/" };
const MEDICARE_CCM = {
  publisher: "Medicare.gov",
  label: "Chronic care management services",
  href: "https://www.medicare.gov/coverage/chronic-care-management-services",
};
const MHA_MONTH = {
  publisher: "Mental Health America",
  label: "Mental Health Month",
  href: "https://www.mhanational.org/mental-health-month",
};
const WHO_DAY = {
  publisher: "World Health Organization",
  label: "World Mental Health Day",
  href: "https://www.who.int/campaigns/world-mental-health-day",
};
const GBP_RANK = {
  publisher: "Google Business Profile Help",
  label: "Improve your local ranking on Google",
  href: "https://support.google.com/business/answer/7091",
};
const SITE_NAMES = {
  publisher: "Google Search Central",
  label: "Provide a site name to Google Search",
  href: "https://developers.google.com/search/docs/appearance/site-names",
};
const PLAIN_LANGUAGE = { publisher: "plainlanguage.gov", label: "Federal plain language guidelines", href: "https://www.plainlanguage.gov/" };
const NAMI = { publisher: "National Alliance on Mental Illness", label: "NAMI", href: "https://www.nami.org/" };

export const guidesPartThirtyThree: Guide[] = [
  // ---------------------------------------------------------------- 1362
  {
    slug: "clinician-pronouns-and-name-display-on-a-counseling-practice-website-without-clinical-claims",
    keyword: "clinician pronouns and name display on a counseling practice website without clinical claims",
    category: "How-to",
    title: "Clinician Pronouns and Name Display on a Counseling Website",
    metaTitle: "Clinician Pronouns and Name Display for a Counseling Site",
    metaDescription:
      "How a counseling practice can show clinician names, pronouns and license titles the same way on its site, profile and directories. Call (561) 291-2681.",
    answer:
      "Show each clinician's name, pronouns and license title the way that clinician chooses to present them, then repeat it exactly on the bio page, the Google profile and every directory. Pronouns are the clinician's own statement, license titles must match the license, and none of it should imply anything about treatment.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Two kinds of facts on a clinician line"),
      p(
        "A single line under a clinician's photo can carry four different things: the name they go by, their pronouns, their license title and their role at the practice. They look alike on the page, but they are different kinds of fact. The name and the pronouns belong to the clinician, who decides how to present them. The license title belongs to the state, and it has to match what the license says."
      ),
      p(
        "Keeping those two apart solves most of the awkward questions a practice owner runs into. Nobody on the marketing side decides a clinician's pronouns, and nobody on the clinician's side gets to shorten a license title because it is long. Each fact has an owner, and the page simply repeats what its owner said."
      ),
      h2("Who decides what appears"),
      table(
        ["Element", "Who decides, and how to display it"],
        ["Name used with clients", "The clinician. Use the same version on the bio page, the booking page, the reminder messages and the Google profile."],
        ["Pronouns", "The clinician, and only if they want them shown. Place them after the name in plain text, such as (she/her), and leave the field off when a clinician prefers not to list it."],
        ["License title", "The license itself. Spell out the title as the state issued it and look it up on the licensing board site before publishing."],
        ["Role at the practice", "The practice owner. Use one consistent label such as therapist, associate or clinical director."],
        ["Former or legal name", "Private unless the clinician chooses to share it. Ask once whether an older name appears on directories that should be updated."]
      ),
      h2("Keep the display consistent everywhere"),
      p(
        "Search engines and answer tools compare the clinician name on your site against the same name on your Google profile and in directories. When one place says Jamie R. and another says James Robert, the match is weaker and clients may wonder if they have the right person. Pick a single display name per clinician and write it down in a shared sheet that the front desk and whoever updates the website both use."
      ),
      ul(
        "Use the same display name in the page title, the H1, the schema name field and the image alt text on the bio page.",
        "Match the Google profile and directory listings to that name, following each platform's own naming guidelines.",
        "Put pronouns in visible page text, not hidden in an image, so screen readers and answer tools can read them.",
        "Keep the spelling of the license title identical on the bio page and the licensing board record."
      ),
      h3("Leave pronouns out of structured data unless a field exists for them"),
      p(
        "There is no standard schema property that is meant for pronouns, so do not stuff them into the name field. A name field that reads Alex Rivera (they/them), LMHC will not match the name on the license or the directory. Keep the schema name clean and let the visible page show the pronouns."
      ),
      h2("Wording that stays out of clinical territory"),
      p(
        "Listing pronouns is a courtesy about how to address a person. It is not a statement about treatment, a specialty or an identity-based service. If the practice also welcomes a particular community, say that on its own page, as our guide to an [LGBTQ+ affirming counseling page](/guides/lgbtq-affirming-counseling-page-for-a-counseling-practice-without-clinical-claims) explains, and keep claims about expertise tied to training the clinician can document."
      ),
      p(
        "On the bio page, put the name line first, then the license title, then a short sentence about who the clinician sees. The pattern in our [therapist bio page guide](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims) works well, and the page on [credentials and license titles](/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website) shows how to spell the titles out."
      ),
      h2("A short setup routine for a group practice"),
      ol(
        "Send each clinician a one-line form asking for the display name, whether to list pronouns, and the license title exactly as issued.",
        "Check each title against the Florida licensing board lookup and note the license number in a private file.",
        "Update the bio page, then the Google profile, then each directory, in that order.",
        "Recheck the three places each January and whenever a clinician changes a name or title."
      ),
    ],
    faqs: [
      {
        q: "Should every clinician list pronouns on the website?",
        a: "No. Listing pronouns is the clinician's choice. A practice can offer the option to everyone and leave the field off for anyone who prefers not to include it, which keeps the pages consistent without requiring anything of staff.",
      },
      {
        q: "Where should pronouns appear on a bio page?",
        a: "Put them in plain text right after the name, such as in parentheses, so they are easy to read aloud and easy for screen readers and answer tools to pick up. Avoid placing them only inside an image or a hover label.",
      },
      {
        q: "Can the license title be shortened on the page?",
        a: "Use the title the way the state issued it. Abbreviations are fine after the full title appears once, but never use a title the clinician does not hold. A quick lookup on the Florida licensing board site confirms the exact wording.",
      },
      {
        q: "What if a clinician changes their name?",
        a: "Update the bio page first, then the Google profile and directories, and keep the old name in the page text or a redirect only if the clinician wants it there. Ask before publishing any earlier name.",
      },
      {
        q: "Does listing pronouns help the practice in search?",
        a: "It will not rank a page by itself. What helps is a consistent, accurate name across the site, the profile and directories, which gives search engines and answer tools one clear entity to match. Pronouns simply tell clients how to address the person.",
      },
    ],
    citations: [FL_MH_BOARD, GBP_GUIDELINES, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims", label: "Therapist Bio Page", description: "What each clinician page should hold." },
      { href: "/guides/therapist-credentials-and-license-titles-explained-on-a-counseling-practice-website", label: "License Titles Explained", description: "Spelling titles as the state issued them." },
      { href: "/guides/practitioner-listing-vs-practice-listing-on-google-for-a-multi-provider-practice", label: "Practitioner Vs Practice Listing", description: "Naming people on Google." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1363
  {
    slug: "balance-due-and-statement-reminder-wording-for-a-counseling-practice-without-legal-advice",
    keyword: "balance due and statement reminder wording for a counseling practice without legal advice",
    category: "How-to",
    title: "Balance Due and Statement Reminder Wording for Counseling",
    metaTitle: "Balance Due Reminder Wording for a Counseling Practice",
    metaDescription:
      "How a counseling practice can word balance due reminders and statements so they are clear, private and calm, without legal advice. Call (561) 291-2681.",
    answer:
      "A balance due reminder should say who it is from, the amount, the date it was due, how to pay and who to call with questions, in a calm tone and without any session details. Keep the message about money only, send it by the channel the client agreed to, and leave collection and legal wording to your attorney.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Why reminders deserve their own wording"),
      p(
        "Most counseling practices write a good cancellation policy and a clear fees page, then improvise the message that asks for an unpaid balance. That message is often the first awkward contact after a session, written in a hurry by whoever notices the open item. A short, standard wording keeps the tone steady, protects privacy, and gets the question answered faster."
      ),
      p(
        "This page covers plain communication wording only. It is not legal advice and does not cover fees for late or missed sessions, interest, collection agencies or the rules around them. Those rules vary, so have an attorney review anything that mentions late fees or collections before you send it."
      ),
      h2("What every reminder should contain"),
      table(
        ["Part of the message", "How to word it"],
        ["Who it is from", "The practice name and the billing contact, so the client knows the message is real and not a scam."],
        ["The amount and date", "State the balance and the date it was due in one sentence, and nothing about what the session covered."],
        ["How to pay", "Name the options the practice truly offers, such as the payment portal, card on file or phone, and link to the payment page."],
        ["Who to contact", "Give a billing phone number and an email, with the office hours when someone answers."],
        ["Room to talk", "Invite the client to call if the amount looks wrong or if they need to discuss a payment arrangement."]
      ),
      h2("Wording that protects privacy"),
      p(
        "A reminder can sit on a lock screen or in a family inbox. Keep clinical words out of it entirely: no diagnosis, no service names that hint at a reason for care, and no provider names if the practice is small enough that the name gives it away. The practice name and the word account are usually enough. If you are unsure which channel the client agreed to, follow the contact preferences in the file, as covered in our guide to [appointment reminder wording that protects client privacy](/guides/appointment-reminder-wording-for-a-counseling-practice-that-protects-client-privacy)."
      ),
      h3("Sample structure for a first reminder"),
      ul(
        "Open with the practice name and a greeting that uses only the first name.",
        "Say that the account shows a balance of a stated amount that was due on a stated date.",
        "Point to the payment page or the phone number and give the billing hours.",
        "Close by inviting questions and thanking the client."
      ),
      h2("Setting a rhythm that feels respectful"),
      p(
        "Decide ahead of time how many reminders a client gets and how far apart they are, and write that rhythm into the fee policy the client signed. A single friendly first reminder, a second a couple of weeks later, and then a phone call from a person is easy to explain and easy to follow. Whatever your schedule, apply it the same way to every client, so no one is treated differently without a reason."
      ),
      p(
        "Make the stop rules just as clear. If a client has asked for a payment arrangement, pause the automatic reminders until the arrangement is recorded, so a client who is cooperating does not get a message that sounds like they are not. Our guide to a [fee change notice letter](/guides/fee-change-notice-letter-for-a-counseling-practice-without-legal-advice) uses the same plain approach for the other money message clients dread."
      ),
      h3("Where billing information lives on the website"),
      p(
        "Point reminders at one billing page that explains the options, the hours and how to reach a person. Our page on [payment methods and the card on file policy](/guides/payment-methods-and-card-on-file-policy-page-for-a-counseling-practice) shows what that page can hold. A single destination keeps the reminder short and gives search engines a clear page to match to questions about paying a counselor."
      ),
    ],
    faqs: [
      {
        q: "Should a reminder mention what the session was for?",
        a: "No. Keep the message to the amount, the due date, how to pay and who to contact. Naming a service or a provider can reveal why someone sought care if the message is seen by another person, so billing messages should stay generic.",
      },
      {
        q: "How many reminders should a practice send?",
        a: "That is the practice's policy decision. Many keep it simple with a first reminder, a second a couple of weeks later and then a call from a staff member. Write the schedule into the fee policy and apply it the same way to everyone.",
      },
      {
        q: "Can a reminder mention late fees or collections?",
        a: "Only if your attorney has reviewed the wording and the fee policy already told the client. Rules on late fees and collections vary, and this page does not give legal advice, so get that language checked before it goes out.",
      },
      {
        q: "Should reminders be sent by text or email?",
        a: "Use the channel the client agreed to in writing, and keep the message free of clinical detail either way. If there is no recorded preference, a phone call or a letter to the address on file is safer than a text.",
      },
      {
        q: "What should the reminder say when a client disputes the amount?",
        a: "Invite them to call the billing contact and review the statement together. Pause reminders while the question is open, correct any error promptly, and send an updated statement so the client has a clear record of the right amount.",
      },
    ],
    citations: [HHS_PRIVACY, FTC_ADVERTISING, FCC_TEXTS, ACA_ETHICS],
    links: [
      { href: "/guides/payment-methods-and-card-on-file-policy-page-for-a-counseling-practice", label: "Payment Methods And Card On File", description: "The billing page reminders point to." },
      { href: "/guides/fee-change-notice-letter-for-a-counseling-practice-without-legal-advice", label: "Fee Change Notice Letter", description: "The other money message clients read closely." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Explaining fees before the first session." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1367
  {
    slug: "gift-and-thank-you-policy-page-for-a-counseling-practice",
    keyword: "gift and thank you policy page for a counseling practice",
    category: "How-to",
    title: "Gift and Thank You Policy Page for a Counseling Practice",
    metaTitle: "Gift and Thank You Policy Page for a Counseling Practice",
    metaDescription:
      "How a counseling practice can explain what it does when a client offers a gift or a thank you, in kind words and clear limits. Call (561) 291-2681.",
    answer:
      "A gift and thank you policy page tells clients, in kind words, that a sincere thank you is always welcome and that the practice generally does not accept gifts of value, and why. It states what is fine, such as a card, explains who to ask, and keeps the tone warm instead of rule-heavy.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("A policy that clients feel in a moment"),
      p(
        "Gift situations are small and emotional. A client finishes work with a counselor and arrives with a plant, a baked loaf or a gift card. If the counselor says no with no warning, it can sting. If the practice has explained its approach ahead of time, the same moment becomes easy for both people, because the client already knew."
      ),
      p(
        "That is the whole reason to publish the policy. It is not about suspicion. It is about preparing the client for a conversation that will probably happen, and about showing in advance that the practice has thought through boundaries. Many families also read these pages before they choose a counselor, and a thoughtful one signals a careful office."
      ),
      h2("What the page should cover"),
      table(
        ["Question", "What a clear policy says"],
        ["Can I say thank you?", "Yes. Kind words, a card or a note are always welcome and often valued."],
        ["Can I bring a gift?", "State the practice's own rule. Many counselors decline gifts of more than a small value, and some decline all gifts, so say which applies here."],
        ["Why the limit?", "Keeping the relationship about the client's goals and avoiding any sense of obligation. Link to the professional code your clinicians follow."],
        ["What about a group or holiday gift?", "Say whether the office accepts shared food for the staff room, which is different from a gift to one counselor."],
        ["Who can I ask?", "Give the office phone and the front desk, so a client can check before bringing anything."]
      ),
      h2("Wording that is kind and not stiff"),
      p(
        "Write the page the way a good front desk speaks. Open by saying that thank-you notes mean a great deal to the team. Then explain the limits in a sentence or two, with a reason a client can accept. Avoid language like violation, prohibited or strictly forbidden. Those words turn a warm situation into a scolding one."
      ),
      ul(
        "Start with thanks, then state the limit, then offer an easy alternative.",
        "Use we and our so the policy sounds like the practice, not a rulebook.",
        "Name the alternative: a written note, a kind review the client writes in their own words, or a donation to a community group of the client's choosing.",
        "Avoid any suggestion that a client should leave a review in return for care."
      ),
      h3("Be careful with reviews as a thank you"),
      p(
        "Clients often ask whether the best way to thank a counselor is a Google review. The practice may say that reviews are welcome and optional, never expected, and that the practice does not offer anything in return. Our guide to [getting more patient reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating) covers the rules for asking, and the answer should always be voluntary."
      ),
      h2("Where the policy should live"),
      p(
        "Link it from the frequently asked questions page and from the policies section that already holds cancellation and communication rules. Our page on [social media and friend request policy](/guides/social-media-and-friend-request-policy-page-for-a-counseling-practice) is a close neighbor, since both pages describe how the relationship stays professional. Keep each short, and cross-link them so a curious client can read both."
      ),
      p(
        "Remind clinicians of the policy in staff meetings, and agree on a single sentence to use when a gift is offered. A consistent script spares clients from hearing a different answer from each counselor, which is often what makes the situation uncomfortable."
      ),
    ],
    faqs: [
      {
        q: "Does a counseling practice have to publish a gift policy?",
        a: "No law requires a public page, and the right policy depends on each clinician's professional code and the practice's choice. A public page simply sets expectations early, which makes the moment a client offers a gift easier for everyone involved.",
      },
      {
        q: "What counts as a small gift?",
        a: "Practices define this differently, so state your own rule instead of copying another office. Some accept a card or a small token, while others accept nothing at all. Whatever you choose, apply it the same way to every client.",
      },
      {
        q: "Can the policy mention professional ethics codes?",
        a: "Yes. A short line pointing to the code your clinicians follow, such as the American Counseling Association code, shows the policy is grounded in professional standards. Link the code and avoid quoting it in ways that sound like legal advice.",
      },
      {
        q: "What should staff say when a client offers a gift?",
        a: "Thank the client sincerely, explain the practice's approach in one calm sentence, and suggest an alternative such as a note. Agree on the wording in advance so every clinician and the front desk give the same answer.",
      },
      {
        q: "Will this page help clients find the practice?",
        a: "It answers a question some families really do type before choosing a counselor, and it shows care in how the practice handles boundaries. It is a supporting page, so link it from the policies and frequently asked questions pages.",
      },
    ],
    citations: [ACA_ETHICS, FL_MH_BOARD, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/social-media-and-friend-request-policy-page-for-a-counseling-practice", label: "Social Media And Friend Request Policy", description: "Another page on professional boundaries." },
      { href: "/guides/getting-more-patient-reviews-without-review-gating", label: "Reviews Without Gating", description: "Asking for reviews the right way." },
      { href: "/guides/client-discharge-and-termination-policy-page-for-a-counseling-practice-without-clinical-claims", label: "Discharge And Termination Policy", description: "How the relationship ends." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1368
  {
    slug: "therapy-animal-in-the-office-notice-page-for-a-counseling-practice-with-allergy-and-consent-wording",
    keyword: "therapy animal in the office notice page for a counseling practice with allergy and consent wording",
    category: "How-to",
    title: "Therapy Animal in the Office Notice Page for a Counseling Practice",
    metaTitle: "Therapy Animal in the Office Notice for a Counseling Site",
    metaDescription:
      "How a counseling practice with an office animal can post a notice on allergies, fears and opting out, without clinical claims. Call (561) 291-2681.",
    answer:
      "A therapy animal notice page tells clients that an animal is sometimes in the office, which days, and how to ask for an animal-free session if they have allergies, fears or other concerns. It explains the animal is part of the office environment, makes no promises about treatment, and is not the same as a service animal.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Tell clients before they open the door"),
      p(
        "Some counseling practices keep a dog or another animal in the office. Many clients enjoy it. Others have an allergy, a fear, a cultural reason to avoid animals, or simply do not want one in the room. The worst way to learn the difference is at the front door on the day of a first session, so the notice belongs on the website and in the booking confirmation."
      ),
      p(
        "The notice also works as a trust signal. A client who reads a calm, specific description of how the animal is handled sees a practice that has thought about every kind of person who might walk in. Clear opt-out wording matters more than any description of how much the animal is loved."
      ),
      h2("What the notice should say"),
      table(
        ["Topic", "What to put on the page"],
        ["Which animal and when", "Name the kind of animal and the days or times it is in the office, or say it is present only with a clinician who works with it."],
        ["Where it stays", "Say whether the animal is in the waiting room, in certain sessions only, or kept in a separate area."],
        ["How to opt out", "Explain that any client may ask for a session without the animal, and give the phone number to call before the visit."],
        ["Allergies and fears", "Invite clients to mention allergies or fears when booking, and say the practice will arrange a different room or time where it can."],
        ["Care and handling", "State that the animal is cared for by a named staff member and has a current vet visit record, only if that is true."]
      ),
      h2("Keep the wording factual, not clinical"),
      p(
        "The page should describe the office, not promise anything about care. Avoid sentences about the animal reducing anxiety, building trust or improving outcomes, since a practice website cannot back those up for each client. Say what the animal is and where it is. Let clients decide whether it suits them."
      ),
      ul(
        "Do say: our office dog is sometimes in the waiting room on Tuesdays and Thursdays.",
        "Do say: tell us when you book if you would like a session without the animal, and we will arrange it.",
        "Do not say: our therapy dog helps clients feel calm or heal faster.",
        "Do not call the animal a service animal unless it meets the federal definition."
      ),
      h3("Therapy animals and service animals are not the same"),
      p(
        "Under the Americans with Disabilities Act, a service animal is a dog trained to do specific work or tasks for a person with a disability, and the rules for service animals do not automatically cover therapy animals. If a client arrives with a service dog, the practice's policy for office animals does not change how it welcomes them. Our page on [service animal and accessibility accommodation requests](/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice) covers that side of the question."
      ),
      h2("Consent and the first-session routine"),
      p(
        "Add one question to the intake or booking flow: any allergies or concerns about animals in the office? Keep it as a simple yes-or-no with an optional comment, not a clinical history. Store the answer where the front desk can see it and arrange the schedule before the client arrives. When the practice sends the first-session email, use the same sentence as the website, as our guide to the [intake paperwork email before session one](/guides/intake-paperwork-email-before-session-one-for-a-counseling-practice) suggests for other pre-visit details."
      ),
      p(
        "If the animal is present in telehealth sessions, mention that too. Some clients find an animal wandering across a video call distracting, and a quick line that the clinician will keep the animal out of view on request is courteous."
      ),
    ],
    faqs: [
      {
        q: "Does an office animal need a notice on the website?",
        a: "No rule requires it, but a short notice avoids surprises for clients with allergies or fears and gives them a way to opt out. It also shows search engines and answer tools a clear, specific statement about the office environment.",
      },
      {
        q: "Is a therapy animal the same as a service animal?",
        a: "No. Under the Americans with Disabilities Act, a service animal is a dog trained to do specific tasks for a person with a disability. An office therapy animal is part of the practice's environment, and the rules for the two are different.",
      },
      {
        q: "What should the opt-out wording say?",
        a: "Say that any client may request a session without the animal and give a phone number to call before the visit. Keep the request simple, ask for no explanation, and arrange the schedule so the client is not asked again at the door.",
      },
      {
        q: "Can the page say the animal helps clients?",
        a: "Avoid it. A practice website cannot promise that an animal reduces anxiety or improves outcomes for any individual client. Describe where the animal is and how it is handled, and let clients decide whether they want to be in the room.",
      },
      {
        q: "Should the notice appear in booking emails?",
        a: "Yes. Repeat the same sentence in the booking confirmation and the first-session email, so a client with an allergy sees it before the visit and not only on a page they may never have read.",
      },
    ],
    citations: [
      { publisher: "ADA.gov", label: "Service animals", href: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
      ACA_ETHICS,
      HHS_PRIVACY,
      GOOGLE_HELPFUL,
    ],
    links: [
      { href: "/guides/service-animal-and-accessibility-accommodation-request-page-for-a-medical-practice", label: "Service Animal And Accommodation Requests", description: "Welcoming clients with service animals." },
      { href: "/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice", label: "Waiting Room And Check In", description: "Setting expectations for the visit." },
      { href: "/guides/children-in-the-waiting-room-policy-page-for-a-counseling-practice", label: "Children In The Waiting Room", description: "Another front-door policy page." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1370
  {
    slug: "office-move-within-the-same-city-notice-for-a-counseling-practice",
    keyword: "office move within the same city notice for a counseling practice",
    category: "How-to",
    title: "Office Move Within the Same City Notice for a Counseling Practice",
    metaTitle: "Office Move Notice for a Counseling Practice, Same City",
    metaDescription:
      "How a counseling practice moving across town can tell clients the new address, the date and what stays the same, without losing calls. Call (561) 291-2681.",
    answer:
      "An office move notice tells clients the new address, the first day sessions happen there, what stays the same, such as the phone number and telehealth, and where to call with questions. Post it on the website and send it to existing clients before the move, then update the Google profile on the move date.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("A short move can still lose clients"),
      p(
        "Moving a few miles across the same city sounds minor. For a counseling practice it creates a quiet risk: a client heads to the old address for a standing appointment, or a new client finds a stale listing and calls a different office. The notice is the cheapest protection, and it also gives you one clear page to point everyone at."
      ),
      p(
        "This guide is about the message to clients and the page that carries it. The back-office work of updating every directory is covered separately in our [office move checklist for a medical practice](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page), so use the two together."
      ),
      h2("What the notice should contain"),
      table(
        ["Item", "What to write"],
        ["New address", "Full street address with suite, written the way it will appear on your Google profile and listings."],
        ["Move date", "The first day of sessions at the new office, and the last day at the old one."],
        ["What stays the same", "Phone number, clinicians, fees and policies, if they are truly unchanged."],
        ["Telehealth", "State whether video sessions continue as usual, especially around the move date."],
        ["Entrance and access", "Only what you can verify at the new building, such as the suite number and accessibility features you have confirmed."],
        ["Who to call", "The office phone and the hours someone answers, for clients with questions about getting to the new office."]
      ),
      h2("Timing the message"),
      ol(
        "Four to six weeks before: add a short banner to the website and the booking page with the new address and date.",
        "Two to three weeks before: send the notice to current clients by the contact method each agreed to, with no clinical detail.",
        "The week before: add the reminder to appointment confirmations for sessions falling on or after the move date.",
        "The move date: update the Google profile, directories and website footer, and keep the old address visible on the notice for a few weeks."
      ),
      h3("Keep the old address findable for a while"),
      p(
        "Leave a line on the notice saying the practice was previously at the old address. People who search the old address, or who have an old card or letter, will land on the page that explains where to go. That one line can spare clients and your front desk a round of confused calls."
      ),
      h2("Update the places search engines and answer tools read"),
      p(
        "Change the address on the contact page, the footer, the schema, the Google profile and each directory on the same day, using the exact same formatting. Our guide on [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains why one old directory can undo the rest. After the move, watch the Google profile for suggested edits that try to revert the address, which our page on [handling Google Business Profile suggested edits](/guides/how-to-handle-google-business-profile-suggested-edits) walks through."
      ),
      p(
        "If the new office changes how clients reach you, add the details to the page. Our guide on [parking, entrance and accessibility information](/guides/parking-entrance-and-accessibility-information-on-a-medical-practice-website-and-profile) shows how to say only what you have confirmed. Avoid describing the neighborhood or drive times unless you have measured them yourself."
      ),
    ],
    faqs: [
      {
        q: "How far in advance should clients be told about a move?",
        a: "A month or more is a good target, with a reminder in appointment confirmations the week of the move. Clients with standing weekly sessions deserve the earliest notice because they are the most likely to head to the old address out of habit.",
      },
      {
        q: "Should the notice stay on the website after the move?",
        a: "Yes, for a few weeks at least. Keep a short line saying the practice was previously at the old address, so people with an old card, a letter or an outdated listing find the explanation when they search the old address.",
      },
      {
        q: "When should the Google profile address change?",
        a: "On the move date, or the day the first session takes place at the new office. Changing it earlier sends new clients to a location that is not ready, and changing it later leaves them at the old one.",
      },
      {
        q: "Does the phone number need to change with the move?",
        a: "Not necessarily, and keeping it makes the move easier on clients and on call tracking. Say so on the notice if the number is the same, so clients know they can keep using it.",
      },
      {
        q: "Should the notice mention telehealth?",
        a: "Yes. State whether video sessions continue as usual during the move week. Some clients prefer to switch to video for a session or two, and the notice is the natural place to tell them that option is open.",
      },
    ],
    citations: [GBP_GUIDELINES, HHS_PRIVACY, GOOGLE_HELPFUL, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page", label: "Office Move Checklist", description: "Every listing and page to update." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      { href: "/guides/new-location-or-satellite-office-announcement-page-for-a-medical-practice", label: "New Location Announcement", description: "Announcing a second office." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1382
  {
    slug: "when-another-practice-has-a-similar-name-keeping-patients-from-calling-the-wrong-office-for-a-medical-practice",
    keyword: "when another practice has a similar name keeping patients from calling the wrong office for a medical practice",
    category: "How-to",
    title: "When Another Practice Has a Similar Name: Keeping Calls Yours",
    metaTitle: "Similar Practice Name: Stop Calls to the Wrong Office",
    metaDescription:
      "What a medical practice can do when another office has a nearly identical name and patients call or review the wrong one. Call (561) 291-2681.",
    answer:
      "When another practice has a nearly identical name, make your own identity unmistakable instead of fighting theirs: add your city, address and provider names wherever your name appears, check your Google profile and structured data, and ask new callers which office they meant. Never copy their name, and never describe them negatively.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("How a name twin costs a practice real calls"),
      p(
        "Two offices called Family Care of the Palm Beaches and Palm Beaches Family Care can live on opposite sides of a county and still share search results, map pins and review pages. Patients phone the wrong number, fill in the wrong contact form and sometimes post a review on the wrong listing. The practice owner sees it as a few odd calls. In the numbers it shows up as appointment requests that never arrive and reviews that belong elsewhere."
      ),
      p(
        "The cause is rarely anyone's mistake. Names that sound natural for a medical practice repeat constantly, and Google has to guess which one a person means. Your job is to make the guess easy by giving search engines and patients more than the name to hold on to."
      ),
      h2("First, measure how often it happens"),
      p(
        "Before changing anything, count. Ask the front desk to tally wrong-office calls for two weeks, and note what the caller said. Search your practice name on a phone and on a desktop, from your city and from outside it, and screenshot the results. Our guide to a [brand search audit](/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit) walks through exactly what to record. The tally tells you whether this is a rare annoyance or a steady leak."
      ),
      h2("What to change on your own properties"),
      table(
        ["Where", "What to do"],
        ["Website title and header", "Add the city or a short descriptor next to the name, such as the town and the primary service."],
        ["Schema markup", "Use your exact name, full address and phone in the organization data, and add sameAs links to your own Google, Facebook and directory profiles."],
        ["Site name", "Set a site name with structured data so Google knows which name belongs to your domain."],
        ["Google profile", "Keep the name as it appears on your signage, since Google's guidelines tell you not to add extra words, and make the address, phone and categories exact."],
        ["Voicemail and phone greeting", "Say the practice name plus the city, so a caller who reached the wrong office realizes it at once."]
      ),
      h3("Do not stuff the Google name field"),
      p(
        "It is tempting to add the town or a service to the business name field on Google to stand out from the twin. Google's guidelines say the name should reflect how the business presents itself in the real world, and extra words can lead to a suspended profile. Fix the difference on your website, in your signage if you can, and in the other fields of the profile."
      ),
      h2("Handle the wrong calls and wrong reviews politely"),
      p(
        "When a caller reaches you by mistake, give the other office's name only if you are sure of it, and invite the caller to check the address on the website they were using. Never say anything unkind about the other practice. If a review for the other office lands on your profile, reply politely without confirming anyone is a patient, then use the platform's tools to flag it as being for another business. Our guide on [responding to reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) shows safe wording."
      ),
      ul(
        "Do add your address and city to the footer and contact page of every page.",
        "Do not copy the other practice's name, logo or wording.",
        "Do not buy ads on the other practice's name.",
        "Do keep a simple log of wrong-office calls and recheck it every month."
      ),
      h2("When it may be more than coincidence"),
      p(
        "A near-identical name with a copied logo or site text is a different problem. If someone appears to be impersonating the practice, read our page on [copycat websites and fake social profiles](/guides/copycat-website-or-fake-social-profile-impersonating-a-medical-practice-what-to-do) and talk to an attorney before sending any notice. A true name twin with a different address is a naming coincidence, and the fix is clarity on your side."
      ),
    ],
    faqs: [
      {
        q: "Can a medical practice make another office change its name?",
        a: "Usually not. Business names often overlap, and any claim would depend on registered names and trademarks, which is a question for an attorney. In most cases the quicker and cheaper fix is making your own city, address and providers obvious everywhere your name appears.",
      },
      {
        q: "Should I add my city to the Google business name?",
        a: "Not unless the city is part of the name on your signage and legal paperwork. Google's guidelines call for the real-world name, and added keywords can cause a suspension. Show the city in your address, your website and your other profile fields instead.",
      },
      {
        q: "What should staff say to a caller who reached the wrong office?",
        a: "Tell them kindly that this is your practice by name and city, and suggest they check the address on the website they were using. Avoid commenting on the other office, and share its details only if you are certain they are correct.",
      },
      {
        q: "How do I handle a review that belongs to the other practice?",
        a: "Reply politely and briefly, without confirming that the writer was ever a patient, and use the platform's flag tool to report that it appears to be about another business. Do not argue in public, and keep the reply free of any health details.",
      },
      {
        q: "Does schema markup actually help with a similar name?",
        a: "It helps search engines connect your name to your exact address, phone number and official profiles, which makes matching clearer. It is one of several signals and will not fix confusion alone, so pair it with consistent details across your site and listings.",
      },
    ],
    citations: [GBP_GUIDELINES, SITE_NAMES, GBP_RANK, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit", label: "Brand Search Audit", description: "What patients see when they search your name." },
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      { href: "/guides/fix-duplicate-google-business-profile-listings", label: "Fix Duplicate Listings", description: "When two profiles compete." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1383
  {
    slug: "call-to-action-button-wording-on-a-counseling-practice-website-book-request-or-contact",
    keyword: "call to action button wording on a counseling practice website book request or contact",
    category: "How-to",
    title: "Call to Action Button Wording for a Counseling Practice Site",
    metaTitle: "Call to Action Button Wording for a Counseling Website",
    metaDescription:
      "How a counseling practice can choose button wording such as book, request or call so it matches what happens next on the page. Call (561) 291-2681.",
    answer:
      "Choose button wording that matches exactly what happens when the visitor clicks. If a click books a time, say book. If a person must review the request first, say request. If it opens a phone call or message, say call or send a message. Honest wording gets more completed forms than vague phrases like get started.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("The button is the last sentence a visitor reads"),
      p(
        "A person who has decided to look for a counselor often arrives at a website already uncertain. They read a little, scan for the person who will see them, and look for the way in. The button wording is the final promise the page makes before they commit a name, a phone number or a minute of nerve. If the wording promises one thing and the next screen does another, many visitors simply leave."
      ),
      p(
        "That is why button text deserves a deliberate choice instead of a default. This guide compares the common options and shows how to pick the one that matches your actual process."
      ),
      h2("Match the words to what happens next"),
      table(
        ["Button wording", "Use it when"],
        ["Book a session", "The visitor picks a real time and receives a confirmation straight away."],
        ["Request an appointment", "The office reviews the request, checks fit and replies with times."],
        ["Schedule a consultation call", "The first step is a short phone call before any session, and you describe its length and cost honestly."],
        ["Call (561) 291-2681", "A person answers during the hours you list, and the number is a tap-to-call link on phones."],
        ["Send a message", "The visitor writes a few lines and a staff member replies, and the page states the reply time."],
        ["Get started", "Avoid it on its own. Add the action, for example get started with a request form."]
      ),
      h2("Wording that lowers the stakes"),
      p(
        "Visitors considering counseling often worry that one click commits them to something. Short, specific phrases that say what happens next help. Under the button, add a line such as We reply within one business day, or No payment is taken on this page. Make sure each line is true, and keep it consistent with the confirmation message that follows."
      ),
      ul(
        "Say what happens: Request an appointment, then add a note about the reply time.",
        "Keep it short: two to four words fit comfortably on a phone screen.",
        "Avoid pressure language like act now or limited spots unless it is literally true.",
        "Never use free unless the first call or session is genuinely free, and say its length."
      ),
      h3("Keep the phone number visible beside the button"),
      p(
        "Some visitors would rather speak than type. Put the phone number as a tap-to-call link next to the main button on mobile, as our guide to the [click-to-call button and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) describes, and make sure each tap is tracked so you can see how many calls the page produces."
      ),
      h2("Test one change at a time"),
      p(
        "Changing the button, the headline and the form all at once tells you nothing. Pick one page, write down the current wording and the number of calls and form submissions over the last four weeks, change only the button text, and compare the next four weeks. Seasonal swings are large for counseling, so look at the same weeks last year when you can. Do not expect a fixed improvement, since results depend on traffic and the rest of the page."
      ),
      p(
        "Check what the button leads to as well. A request button that lands on a long intake packet works against itself, so read our page on the [first-time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) for fields to keep and fields to leave out. The page after the click should confirm what happens next, as covered in the guide to a [thank-you page after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it)."
      ),
    ],
    faqs: [
      {
        q: "What is the best wording for a counseling practice button?",
        a: "The best wording describes what actually happens next. Book a session fits instant scheduling, request an appointment fits a reviewed request, and call fits a staffed phone line. The honest match matters more than any one phrase, because mismatched promises cause visitors to abandon the next page.",
      },
      {
        q: "Is get started a bad button label?",
        a: "On its own it is vague, since the visitor cannot tell what the next step is. It can work when a line beneath it explains the action, such as a short request form with a stated reply time. Specific verbs usually serve nervous visitors better.",
      },
      {
        q: "Should every page have the same button wording?",
        a: "Keep the primary action consistent across the site so visitors learn it, and vary supporting text by page. A page about couples work can still use the same request button with a sentence that speaks to that audience.",
      },
      {
        q: "How long should I test a new button label?",
        a: "Run it for at least four weeks and compare calls and form submissions against the prior four. Counseling traffic shifts with school terms and holidays, so compare the same weeks from last year where you have them, and change only the button during the test.",
      },
      {
        q: "Does button wording affect search rankings?",
        a: "Not directly. It affects what visitors do after they arrive, which matters for leads. Clear page headings and a visible phone number help both people and search engines, but a button label alone will not move a page up the results.",
      },
    ],
    citations: [GOOGLE_HELPFUL, PLAIN_LANGUAGE, HHS_PRIVACY, FTC_ADVERTISING],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click To Call Button", description: "Phone taps on mobile." },
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First Time Client Contact Form", description: "What happens after the click." },
      { href: "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid", label: "Free Consultation Call Page", description: "Wording a consult offer honestly." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1384
  {
    slug: "missed-call-text-back-message-for-a-primary-care-practice",
    keyword: "missed call text back message for a primary care practice",
    category: "How-to",
    title: "Missed Call Text Back Message for a Primary Care Practice",
    metaTitle: "Missed Call Text Back Message for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can send one short, private text after a missed call and win back new patient calls, no health details. Call (561) 291-2681.",
    answer:
      "A missed call text back is one short automatic text sent to a caller the office could not answer. It names the practice, offers a way to reach a person or book, keeps health details out, includes opt-out wording and avoids emergencies. Set it up with a vendor that signs a business associate agreement, and have counsel review it.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Where new patient calls actually get lost"),
      p(
        "Primary care front desks are busy at the exact moments people phone: opening time, lunch and the end of the day. A caller who reaches voicemail and hears a long greeting often hangs up and tries the next practice on the map. For a practice that depends on search and map traffic, each missed call from a new patient is a lead that cost real marketing effort to earn."
      ),
      p(
        "A missed call text back is a small safety net. Within a minute of an unanswered call, the caller receives one text from the practice's number that says who it is and how to get help. It does not replace answering the phone. It rescues the calls that slip through."
      ),
      h2("What the message should say"),
      table(
        ["Part", "Wording guidance"],
        ["Who it is", "Practice name and city, so the person recognizes the number that texted."],
        ["Why they got it", "We missed your call, and we are sorry. This keeps the tone human."],
        ["What to do next", "Reply with a good time to call back, or use the link to request an appointment."],
        ["When someone answers", "State the hours the office returns calls."],
        ["Emergencies", "If this is an emergency, call 911. Never route urgent needs to a text."],
        ["Opt out", "Reply STOP to stop messages, as the carrier and regulators expect."]
      ),
      h3("A sample message"),
      p(
        "Hello, this is the front desk at the practice, in the city. We missed your call. Reply with a good time for us to call you back, or request an appointment at the link. If this is an emergency, call 911. Reply STOP to opt out. Replace the placeholders with your own details, keep it under two short texts and never mention symptoms, medications or conditions."
      ),
      h2("Keep it private and compliant"),
      p(
        "The fact that a person called a doctor's office can itself be sensitive, so treat this like any patient communication. Send the message from a platform whose vendor will sign a business associate agreement, keep the text itself free of health details, and do not send it to numbers that have asked to stop. Our guide to [text message marketing compliance](/guides/text-message-marketing-compliance-for-a-medical-practice) explains consent, opt-out and recordkeeping, and the rules from the FCC apply to automated texts."
      ),
      ul(
        "Send only to the number that called, once per missed call, and not to everyone who ever phoned.",
        "Skip it during closed hours if your voicemail already explains when you return calls.",
        "Honor STOP replies immediately and keep a record of them.",
        "Let a person, not software, reply to anything that mentions symptoms or urgency."
      ),
      p(
        "This page is not legal advice. Texting rules and consent standards change, and healthcare adds privacy obligations, so have an attorney review the final wording and the vendor agreement before turning it on."
      ),
      h2("Measure whether it earns its keep"),
      p(
        "Log how many missed-call texts go out each week and how many produce a reply or a booked visit. If you already track calls from your website and your Google profile, as described in the guide to [tracking phone calls from a medical website](/guides/tracking-phone-calls-from-a-medical-website), compare the share of calls answered before and after. A practice that answers most calls live may find the text back barely used, and that is fine."
      ),
      p(
        "Fix the cause too. If missed calls cluster at one time of day, a schedule change or a [phone menu that does not lose new patients](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) will do more than any text. Treat the text back as the safety net and staffing as the answer."
      ),
    ],
    faqs: [
      {
        q: "Is a missed call text back allowed for a medical practice?",
        a: "Often yes, but the details matter. Automated texts fall under federal rules on consent and opt-out, and a healthcare practice must also protect patient privacy. Use a compliant vendor, keep health details out of the text and have an attorney review the wording.",
      },
      {
        q: "Should the text include the patient's name?",
        a: "No. A first name from caller ID could be wrong, and the message may be read by someone else. Use a general greeting, name the practice and offer a way to reach a person. Personal details belong in a live conversation.",
      },
      {
        q: "Can the text offer appointment booking?",
        a: "Yes, a link to an appointment request page is a good option, as long as the page itself collects only what the booking needs. Keep the link short and make sure the page loads quickly on a phone.",
      },
      {
        q: "What if the caller replies with a symptom?",
        a: "Have a staff member read replies and call the person back. The automatic text should never answer medical questions, and your message should tell anyone with an emergency to call 911 instead of replying.",
      },
      {
        q: "Will this replace answering the phone?",
        a: "No. It recovers some of the calls the office cannot take at busy moments. Staffing, call routing and clear voicemail do the heavy lifting, and the text back is a safety net behind them.",
      },
    ],
    citations: [FCC_TEXTS, HHS_PRIVACY, FTC_ADVERTISING, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/text-message-marketing-compliance-for-a-medical-practice", label: "Text Message Compliance", description: "Consent and opt-out rules for texts." },
      { href: "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice", label: "After Hours Calls And Voicemail", description: "Covering calls outside office hours." },
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "The message after booking." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1385
  {
    slug: "insurance-carrier-specific-pages-for-a-counseling-practice-accuracy-and-wording",
    keyword: "insurance carrier specific pages for a counseling practice accuracy and wording",
    category: "How-to",
    title: "Insurance Carrier Pages for a Counseling Practice: Accuracy",
    metaTitle: "Insurance Carrier Pages for a Counseling Practice",
    metaDescription:
      "When a counseling practice should build a page for a specific insurance plan, how to word it accurately and what to leave out. Call (561) 291-2681.",
    answer:
      "Build a page for a specific insurance carrier only when your clinicians have a signed contract with it, and say exactly which clinicians and plan types it covers, how to check benefits, and what you cannot promise. Skip carriers you are not contracted with, and never copy carrier logos or claim coverage amounts.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Why carrier pages tempt every practice"),
      p(
        "People often search for a counselor by insurance name: a carrier plus the word therapist plus a city. A page that answers that exact search can bring in the people most ready to book, because they have already narrowed their choice to a plan they hold. That is why practice owners ask whether to build one page per carrier."
      ),
      p(
        "The answer is sometimes, and carefully. A carrier page is an accuracy promise. If it is wrong, a person books, pays a deposit of time and hope, and discovers the plan is not accepted. That costs the practice a review and the client some trust, so the bar for these pages is higher than for most."
      ),
      h2("When a carrier page makes sense"),
      ul(
        "Your clinicians hold a signed contract with the carrier and appear in its provider directory.",
        "Enough of your clients use the plan that a visitor would reasonably search for it.",
        "You can write more than the name: which clinicians accept it, which plan types, and how a client confirms benefits.",
        "You will keep it current when a contract changes or a clinician joins or leaves."
      ),
      p(
        "If a carrier fails any of these, a line in your accepted insurance list is enough. A thin page for every carrier name creates near-duplicates and reads like a doorway page, which Google's guidance warns against. Our guide to [building an accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) covers the main list that every carrier page should link back to."
      ),
      h2("What an accurate page contains"),
      table(
        ["Section", "What to write"],
        ["Plain statement", "Which clinicians are in network with the carrier, and since when, if you track it."],
        ["Plan types", "Name only the plan types your contract covers. Carriers run several networks, and not every plan is in each one."],
        ["Checking benefits", "Tell clients to call the number on their card and ask about outpatient mental health coverage, and offer your own benefits check."],
        ["What you cannot say", "Copay, deductible and number of covered sessions depend on the client's plan, so state that you cannot promise them."],
        ["If the plan is not accepted", "Explain the alternatives: private pay, a superbill for out-of-network reimbursement, or a referral."]
      ),
      h3("Use the carrier's name, but not its branding"),
      p(
        "Writing the carrier name in text to state a fact is fine. Using its logo, colors or wording in a way that suggests an endorsement is not. Say that your clinicians are contracted with the carrier and leave it there. If the carrier supplies approved language for providers, follow it."
      ),
      h2("Keep it honest as contracts change"),
      p(
        "Contracts end, networks change names and directories lag behind reality. Put each carrier page on the same review calendar as your main insurance page, and check it against the carrier's own provider directory each quarter. Our page on [what to update when a practice joins or leaves an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network) lists every place to correct."
      ),
      p(
        "Link the carrier page from the benefits check page, as covered in our guide to [insurance verification and benefits checks for a therapy practice](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice), so clients can move from I think I am covered to a confirmed answer. Add the page to your navigation only if you have more than a few carriers, and otherwise reach it from the main insurance list."
      ),
    ],
    faqs: [
      {
        q: "Should I make a page for every insurance plan I accept?",
        a: "Usually not. Build one only for carriers that bring meaningful search interest and where you can write real detail about which clinicians accept it. For the rest, a clear name in your accepted insurance list is enough and avoids thin, near-identical pages.",
      },
      {
        q: "Can I say we are in network with a carrier?",
        a: "Only if your clinicians hold a signed contract with that carrier and appear in its directory. State it plainly, name the plan types covered if you know them, and tell clients to confirm benefits with the number on their card.",
      },
      {
        q: "Can a carrier page state the copay?",
        a: "Avoid it. Copays, deductibles and covered session counts vary by each client's plan and can change yearly. Explain how to find out, offer a benefits check and say plainly that the practice cannot promise a specific amount.",
      },
      {
        q: "Is it okay to use the carrier's logo?",
        a: "Generally no, unless the carrier gives providers approved branding with rules for its use. A text mention of the carrier name stating a fact is safer. Do not imply that the carrier endorses or recommends your practice.",
      },
      {
        q: "How often should carrier pages be checked?",
        a: "Check them each quarter against the carrier's provider directory, and any time a clinician joins or leaves or a contract changes. Put the dates on a shared calendar so an out-of-date page does not stay live by default.",
      },
    ],
    citations: [GOOGLE_HELPFUL, GBP_GUIDELINES, FTC_ADVERTISING, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice", label: "Accepted Insurance Page", description: "The main list every carrier page links to." },
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Benefits Check Page", description: "Helping clients confirm coverage." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Out-of-network and superbill options." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1386
  {
    slug: "npi-registry-and-insurance-directory-data-accuracy-for-a-medical-practice",
    keyword: "npi registry and insurance directory data accuracy for a medical practice",
    category: "Checklist",
    title: "NPI Registry and Insurance Directory Accuracy Checklist",
    metaTitle: "NPI Registry and Insurance Directory Accuracy Checklist",
    metaDescription:
      "A checklist for keeping a medical practice's NPI registry record, CAQH profile and insurance directory listings accurate. Call (561) 291-2681.",
    answer:
      "Keep the practice's NPI registry record, CAQH profile and each insurer's provider directory matching the address, phone and name on your website and Google profile. Update them whenever something changes, review CAQH on its re-attestation schedule, and check each directory every quarter, since errors there send patients elsewhere.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("The records you never see patients read"),
      p(
        "A practice owner thinks about the website and the Google profile. Patients, though, also meet the practice through places the owner rarely opens: the federal NPI registry, insurers' provider directories and the databases that feed health apps and hospital systems. When the address in those places is out of date, a patient calls a disconnected number or shows up at the old suite, and the practice never learns why the appointment did not happen."
      ),
      p(
        "Directory data matters to search as well. Many third-party sites copy their information from these sources, so one stale record can spread an old address across dozens of listings. Fixing the source is more effective than correcting copies one at a time."
      ),
      h2("Where the data lives"),
      table(
        ["Record", "What it is and what to check"],
        ["NPI registry (NPPES)", "The federal registry of National Provider Identifier records. Each clinician and organization has a record with practice location and phone, and the information is public."],
        ["CAQH profile", "A shared profile many insurers use to credential clinicians. Providers re-attest to its accuracy on a regular schedule set by CAQH."],
        ["Insurer directories", "Each carrier lists in-network clinicians with address, phone and whether they accept new patients."],
        ["Hospital and health system directories", "Listings that referring doctors and patients use to find a clinician after a discharge or referral."]
      ),
      h3("What federal rules say about updates"),
      p(
        "Covered providers are expected to keep their NPPES information current, and the rule calls for reporting changes within thirty days. Check the CMS site for the current wording. For the CAQH profile, log in to the account on its re-attestation date, review each section and confirm the practice location, phone and hours."
      ),
      h2("A quarterly accuracy routine"),
      ol(
        "Pull a master sheet of the practice's exact name, address with suite, phone, hours and website as they should appear everywhere.",
        "Search each clinician's name in the NPI registry and compare the location and phone to the sheet.",
        "Log in to CAQH, review the practice location and hours, and re-attest if it is due.",
        "Look up each clinician in every contracted insurer's directory and note any mismatch, including the accepting new patients status.",
        "Send corrections through each carrier's provider portal, and keep a dated record of what you submitted."
      ),
      p(
        "Directories are slower to change than websites, so allow time and recheck a few weeks later. Our guide on [keeping accepting new patients status accurate](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories) covers the status field, which is one of the most common mismatches."
      ),
      h2("Tie the routine to events that change data"),
      p(
        "Quarterly checks catch drift, but certain events should trigger an update at once. A move, a phone change, a new clinician or a departure each change several records together. Our checklists for [an office move](/guides/office-move-checklist-for-a-medical-practice-update-every-listing-and-page) and for [a provider joining or leaving](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice) list the web pages and profiles, and this checklist adds the registries behind them."
      ),
      ul(
        "Use the same punctuation for suite numbers everywhere, since small differences confuse matching.",
        "Do not publish a clinician's personal contact details in any directory.",
        "Keep login credentials for CAQH and carrier portals with the practice owner or manager, not on a former employee's account.",
        "Record who is responsible for each record so an update is never nobody's job."
      ),
      p(
        "Finally, compare the results with what a patient sees. Search the practice name and address on a phone and check that the Google profile, website and the top directories agree. The pattern behind most mismatches is covered in our guide to [NAP consistency](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it)."
      ),
    ],
    faqs: [
      {
        q: "What is the NPI registry and does my practice have a record?",
        a: "The registry holds public National Provider Identifier records for clinicians and organizations. If your clinicians bill insurers, each has an NPI, and the record lists practice location and phone. Search your own name and check that the details match your current office.",
      },
      {
        q: "How soon must NPI information be updated after a change?",
        a: "The federal rule expects changes to be reported within thirty days. Check the CMS site for current wording, and update the record as soon as an address, phone or other detail changes so it never lags behind your website and Google profile.",
      },
      {
        q: "What is CAQH and who updates it?",
        a: "CAQH holds a shared provider profile that many insurers use for credentialing. The clinician or a designated staff member keeps it current and re-attests on the schedule CAQH sets. Out-of-date data there can delay or disrupt insurer directory updates.",
      },
      {
        q: "Why do insurer directories show an old address?",
        a: "Carriers update directories from the data providers submit, often through a portal or CAQH, and changes take time to appear. If a listing is wrong, submit the correction through the carrier's provider channel and recheck after a few weeks.",
      },
      {
        q: "Does fixing these records help search visibility?",
        a: "Indirectly. Many directories and apps copy from these sources, so correcting them keeps one old address from spreading. Consistent name, address and phone data across sources also helps search engines match the practice to the right listing.",
      },
    ],
    citations: [NPPES, CAQH, GBP_GUIDELINES, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keeping name, address and phone matching." },
      { href: "/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network", label: "Joining Or Leaving An Insurance Network", description: "What to update online." },
      { href: "/guides/getting-listed-in-a-hospital-or-health-system-provider-directory", label: "Hospital Provider Directories", description: "Getting listed where referrals look." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1387
  {
    slug: "opening-date-and-coming-soon-page-for-a-new-counseling-practice-on-google",
    keyword: "opening date and coming soon page for a new counseling practice on google",
    category: "Checklist",
    title: "Opening Date and Coming Soon Page for a New Counseling Practice",
    metaTitle: "Opening Date and Coming Soon Page for a Counseling Practice",
    metaDescription:
      "How a new counseling practice can set an opening date on Google and publish a coming soon page before the first session. Call (561) 291-2681.",
    answer:
      "A new counseling practice can show its opening date on its Google Business Profile once the listing is verified, and publish a coming soon page that states the opening date, the address, how to join a contact list and what is not yet available. Never accept clients, advertise services or list credentials before licensure is in place.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("The weeks before the first session"),
      p(
        "A new counseling practice has a quiet stretch between signing a lease or finishing licensure and seeing the first client. Most owners spend it on furniture and paperwork, and the website sits empty. That is a lost opportunity, because search engines and the people nearby have no idea the practice is coming, and the first weeks after opening are when the profile and site start building history."
      ),
      p(
        "A short coming soon page and a correctly set opening date let you begin that history honestly. They tell the public when you open, collect a contact list, and avoid the confusing impression of a practice that exists but cannot take calls."
      ),
      h2("What the coming soon page should hold"),
      table(
        ["Element", "What to write"],
        ["Practice name and city", "The legal name you will use, with the town, so it matches the Google profile."],
        ["Opening date", "A real date, with the month spelled out. If the date might move, say so and promise an update."],
        ["Address", "The office address if it is final and public. Leave it out if the lease is not signed."],
        ["Who will be there", "Clinician names and license titles, only as issued, and only when the licenses are in place."],
        ["Contact option", "A phone number that reaches voicemail with an honest greeting, or a simple form that asks for a name and contact preference."],
        ["Crisis information", "A line pointing to 988 and 911, so no visitor mistakes the page for a service that can respond."]
      ),
      h3("Collect a contact list without collecting health information"),
      p(
        "A coming soon form should ask for a name and an email or phone number only. Do not ask why someone wants counseling, and do not promise a spot. Say that you will email when appointments open. Keep the privacy notice short and plain, as the guide on a [first-time client contact form](/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time) explains."
      ),
      h2("Setting the opening date on Google"),
      p(
        "Google lets a business enter an opening date in the profile information, and the profile still has to be verified through Google's usual process before it shows publicly. Follow Google's guidelines for eligible businesses: a staffed address or a defined service area, and no virtual office pretending to be a storefront. Our page on [shared or virtual office addresses for a therapy practice](/guides/shared-or-virtual-office-address-for-a-therapy-practice-on-google-business-profile) shows where the lines are."
      ),
      ol(
        "Create the profile with the exact name that will appear on your signage and license paperwork.",
        "Enter the category, address or service area, phone and website, matching the coming soon page word for word.",
        "Add the opening date in the profile information once verification is complete.",
        "Update hours on the actual opening day and replace the coming soon page with the full site."
      ),
      h2("Rules to respect while you are not yet open"),
      p(
        "Do not advertise services or accept payment before the clinicians are licensed and ready to see clients. Do not post a testimonial or review you did not earn, and do not copy another practice's text. Our guide to the [new practice marketing checklist](/guides/new-practice-marketing-checklist) sets the order of the larger tasks, and this page covers the opening-date step within it."
      ),
      p(
        "On the opening day, publish the full home page and the first-session page, remove the coming soon notice and request your first reviews only from people who were actually seen. Reviews cannot be collected before then, so do not ask friends or family to post them."
      ),
    ],
    faqs: [
      {
        q: "Can a new practice add an opening date to Google?",
        a: "Yes. Google Business Profile has a field for an opening date, and the profile still has to be verified through Google's process before it appears publicly. Enter a real date and update the profile and website on the opening day.",
      },
      {
        q: "Should a coming soon page be indexed?",
        a: "Yes, it should be a normal page so search engines learn about the practice early. Keep it short, accurate and linked from the home page, then replace it with the full site content at launch rather than creating a new address.",
      },
      {
        q: "Can the coming soon page take appointment requests?",
        a: "Only if clinicians are licensed and the office can respond. Otherwise collect a name and a contact preference for an opening announcement and say that appointments are not yet available. Do not ask about reasons for seeking counseling.",
      },
      {
        q: "What should the voicemail say before opening?",
        a: "Give the practice name, the opening date, how to leave a name and number, and that the office cannot take clients yet. Include 988 and 911 for emergencies. Keep it short, and check the voicemail daily.",
      },
      {
        q: "Can friends and family leave the first reviews?",
        a: "No. Reviews should come from people who actually used the service, and Google's guidelines discourage fake or conflicted reviews. Wait for real clients, then invite reviews in a neutral way, without offering anything in return.",
      },
    ],
    citations: [GBP_GUIDELINES, FL_MH_BOARD, LIFELINE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/new-practice-marketing-checklist", label: "New Practice Marketing Checklist", description: "The order of tasks for a new practice." },
      { href: "/guides/how-to-verify-a-google-business-profile-for-a-medical-practice", label: "Verify A Google Profile", description: "Getting the listing live." },
      { href: "/guides/google-business-profile-for-a-therapist-who-works-from-home", label: "Profile For A Home Based Therapist", description: "Listing without a storefront." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1388
  {
    slug: "insurance-statements-and-billing-privacy-page-for-a-counseling-practice-what-the-policyholder-may-see",
    keyword: "insurance statements and billing privacy page for a counseling practice what the policyholder may see",
    category: "How-to",
    title: "Insurance Statements and Billing Privacy for Counseling Clients",
    metaTitle: "Insurance Statements and Billing Privacy for Counseling",
    metaDescription:
      "How a counseling practice can explain what insurance statements may show a policyholder and what a client can ask for or choose. Call (561) 291-2681.",
    answer:
      "A billing privacy page explains that when a client uses insurance, the plan may send statements to the policyholder, which can be someone other than the client, and that clients may ask the practice and the plan for confidential communications or choose to pay privately. It describes options and never promises that nothing will be seen.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("The question people ask before booking"),
      p(
        "Many people considering counseling worry about one thing before they worry about the first session: who will find out. An adult covered under a parent's or spouse's plan may wonder whether a statement will arrive at the family mailbox. A teenager may wonder who sees the bill. A short, honest page that answers this ahead of time removes a reason to hesitate and shows that the practice takes privacy seriously."
      ),
      p(
        "This page is general information, not legal advice. Plans behave differently, and the practice cannot control what an insurer mails. The page should say that plainly and explain the choices a client has."
      ),
      h2("What the page should explain"),
      table(
        ["Question", "A careful answer"],
        ["Who gets statements?", "When insurance is used, the plan may send statements or explanation of benefits notices to the policyholder, who may not be the client."],
        ["What might a statement show?", "Statements can list the provider, dates of service and amounts. The practice cannot control the format a plan uses."],
        ["Can I ask for something different?", "Clients may ask their plan to send communications to a different address or by another method. Plans have their own request process."],
        ["Does the practice have options?", "The practice can send its own billing messages by the contact method the client chooses, and can keep wording free of clinical detail."],
        ["Is private pay possible?", "Yes. A client may choose to pay the practice directly instead of using insurance, and the fees page explains the rates."]
      ),
      h3("Say what you do not control"),
      p(
        "Never write that insurance is completely private or that nothing will arrive at home. A practice does not run the plan's mailings. What the page can do is explain what is likely, point the client to the plan's member services number, and describe the practice's own privacy habits."
      ),
      h2("What federal privacy rules allow"),
      p(
        "Under the HIPAA Privacy Rule, patients can ask a provider to communicate with them by alternative means or at alternative locations, and providers must accommodate reasonable requests. Health plans must accommodate such requests when the person says that disclosure could put them in danger. HHS publishes plain-language information for individuals on the topic, and the page can link to it instead of paraphrasing legal details."
      ),
      ul(
        "Ask clients at intake how they prefer to receive billing messages, and record the answer.",
        "Keep billing messages short and free of diagnosis, service names or provider details that hint at care.",
        "Give a direct phone number so a client with a concern can talk with a person rather than write.",
        "Review the page with your biller so it matches what actually happens."
      ),
      h2("Where to link the page"),
      p(
        "Link it from the insurance page, the fees page and the first-session page, since those are where the worry arises. Our guide to [insurance verification and benefits checks for a therapy practice](/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice) shows the benefits check; this page adds the privacy side. For clients who prefer to avoid insurance, the [fees page with sliding scale, out-of-network and superbill options](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained) covers private payment."
      ),
      p(
        "Because teenagers and adults on a family plan are the readers most affected, check the page against the practice's policy on minors. The explanation in our guide to [teen therapy for parents](/guides/teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims) describes how to speak about confidentiality and logistics carefully."
      ),
    ],
    faqs: [
      {
        q: "Can insurance statements be seen by someone other than the client?",
        a: "They can be. Plans often send statements or explanation of benefits notices to the policyholder, who may be a parent or spouse. The practice cannot control the plan's mailings, so the page should explain this plainly and describe the client's options.",
      },
      {
        q: "Can a client ask the plan to send mail somewhere else?",
        a: "Often yes. Clients can contact the plan's member services and ask about confidential communications. Federal rules require plans to honor such requests when the person says disclosure could endanger them, and many plans have a form for it.",
      },
      {
        q: "What can the practice do about billing privacy?",
        a: "The practice can send its own billing messages by the method the client chooses, keep them free of clinical detail and explain the private-pay option. It can also tell clients how to contact their plan to ask about confidential communications.",
      },
      {
        q: "Should the page promise confidentiality?",
        a: "No. It should describe what the practice does and what it cannot control. Promises that nothing will be seen could be untrue, and the page is stronger when it explains the choices instead of making a guarantee.",
      },
      {
        q: "Does this page help new clients find the practice?",
        a: "It answers a worry many people have before booking and gives answer tools a clear, careful explanation to quote. Link it from the insurance, fees and first-session pages so people considering counseling meet it at the right moment.",
      },
    ],
    citations: [HHS_PRIVACY, HHS_INDIVIDUALS, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Benefits Check Page", description: "Helping clients confirm coverage." },
      { href: "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained", label: "Therapy Fees Page", description: "Private pay and superbills." },
      { href: "/guides/confidentiality-and-its-limits-page-for-a-counseling-practice-without-legal-advice", label: "Confidentiality And Its Limits", description: "What a client can expect." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1389
  {
    slug: "mental-health-awareness-month-and-world-mental-health-day-content-for-a-counseling-practice",
    keyword: "mental health awareness month and world mental health day content for a counseling practice",
    category: "Checklist",
    title: "Awareness Month and World Mental Health Day Content Plan",
    metaTitle: "Mental Health Awareness Content Plan for Counseling",
    metaDescription:
      "A content plan for a counseling practice around Mental Health Awareness Month in May and World Mental Health Day in October. Call (561) 291-2681.",
    answer:
      "Plan a few useful, non-clinical items around Mental Health Awareness Month in May and World Mental Health Day on October 10: one page of local resources, a Google profile post or two, an office hours or community talk announcement and a short email. Cite the sponsoring organizations, avoid statistics you cannot source, and promise no outcomes.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("Two dates that people already search for"),
      p(
        "Mental Health Awareness Month runs through May, a tradition led in the United States by Mental Health America. World Mental Health Day falls on October 10, a date promoted by the World Health Organization and partner organizations. Around both, more people than usual read about mental health, talk about it with family and look up local help. A counseling practice that publishes something genuinely useful at those moments can be found by people who are already paying attention."
      ),
      p(
        "The risk is the opposite of silence: a flurry of generic posts that say nothing. This plan keeps the output small, useful and honest, so the practice looks like what it is, a local office that answers questions."
      ),
      h2("A small plan that fits a busy practice"),
      table(
        ["Item", "What to publish"],
        ["Resources page", "A page of local and national resources with the practice's contact information, the 988 Lifeline and community groups, reviewed for accuracy."],
        ["Google profile post", "One or two short posts with an image that point to the resources page or announce a community event."],
        ["Community event", "An open talk or office hours at a library or community room, announced with a date, place and registration link."],
        ["Email to your list", "A short note with the resources link, sent only to people who asked to hear from you."],
        ["Social post", "One post that shares the resources page and credits the organization that runs the awareness effort."]
      ),
      h3("Resource pages are the part that lasts"),
      p(
        "Posts disappear from feeds within days, but a resources page stays useful all year and can be linked from other pages. Build it the way our guide to [community resources and support groups referral pages](/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice) describes, and keep the crisis information in a visible spot, as the guide on an [emergency and crisis resources section](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) recommends."
      ),
      h2("Keep it honest and non-clinical"),
      p(
        "Awareness content invites broad claims, and broad claims are where practices get into trouble. Do not quote prevalence figures without a source link, do not tell readers that counseling will fix a problem, and do not use client stories or testimonials. Share events and resources, and let the practice's clinicians speak about their own work only in terms they can document."
      ),
      ul(
        "Credit the organization behind the awareness effort, and link to its page instead of copying its materials.",
        "Check the usage terms before reusing a logo or campaign graphic.",
        "Keep every post free of diagnosis language and outcome promises.",
        "Include a line pointing people in crisis to 988 or 911."
      ),
      h2("A calendar you can reuse"),
      ol(
        "Six weeks before: choose the event, book the room and draft the resources page.",
        "Four weeks before: publish the resources page and announce the event on the website and Google profile.",
        "Two weeks before: send the email to the practice's list and post a reminder.",
        "The week of: share the resources page once and attend the event, and note the number of calls and forms that follow.",
        "Two weeks after: record what you saw and keep the page for next year."
      ),
      p(
        "Fold these dates into your regular plan, such as the one in our guide to a [medical practice content calendar](/guides/medical-practice-content-calendar-checklist). Seasonal pages for other times of year, like the [back to school availability announcement](/guides/back-to-school-counseling-availability-announcement-for-a-counseling-practice), follow the same short, useful pattern."
      ),
    ],
    faqs: [
      {
        q: "When is Mental Health Awareness Month?",
        a: "In the United States it is observed in May, an effort long led by Mental Health America. Many organizations share toolkits each year. A practice can link to the sponsor's own page and use its themes without copying materials it does not have permission to reuse.",
      },
      {
        q: "When is World Mental Health Day?",
        a: "It is observed each year on October 10, and the World Health Organization and partner groups promote a theme annually. A practice can post a short resource list or event announcement that week and link to the organization's page.",
      },
      {
        q: "Can a practice post statistics about mental health?",
        a: "Only with a named source and a link you have checked. Avoid statistics you cannot verify, and never imply that figures predict outcomes for an individual visitor. A resources page with clear links is safer and usually more useful.",
      },
      {
        q: "Should the practice share client stories?",
        a: "No. Client stories and testimonials raise privacy and advertising concerns for counseling. Share resources, event details and general information, and let any reviews that clients choose to post on their own speak without the practice reposting them.",
      },
      {
        q: "How do I know if the effort produced leads?",
        a: "Compare calls and form submissions in the weeks before, during and after the event using your analytics and call tracking, and note which page the contact came from. Record the result, because next year's plan should build on it.",
      },
    ],
    citations: [MHA_MONTH, WHO_DAY, LIFELINE, NAMI],
    links: [
      { href: "/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice", label: "Community Resources Referral Page", description: "A resource page that stays useful." },
      { href: "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website", label: "Crisis Resources Section", description: "Putting 988 where visitors can see it." },
      { href: "/guides/medical-practice-content-calendar-checklist", label: "Content Calendar Checklist", description: "Planning the year of posts." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1390
  {
    slug: "chronic-care-management-program-explained-on-a-primary-care-practice-website",
    keyword: "chronic care management program explained on a primary care practice website",
    category: "How-to",
    title: "Chronic Care Management Explained on a Primary Care Website",
    metaTitle: "Chronic Care Management Page for a Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain a Medicare chronic care management program on its website: consent, costs and who to call. Call (561) 291-2681.",
    answer:
      "A chronic care management page explains, in plain words, that the practice offers an optional monthly service of care coordination between visits for Medicare patients with multiple ongoing conditions, that the patient must agree to take part, that cost sharing may apply, and that only one practice can bill for it per month. Say who to call and promise no health results.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("A program patients hear about from a bill first"),
      p(
        "Chronic care management is a Medicare service in which a practice coordinates a patient's care between office visits for people who live with more than one ongoing health condition. Many patients first hear of it in a phone call from the office or see a line on a statement they do not understand. That is the worst order to learn about something that may carry a cost."
      ),
      p(
        "A short page on the practice website changes the order. It describes the service in plain words before anyone is asked to join, shows that the practice explains costs openly, and gives search engines and answer tools a clear statement to quote when someone searches for what the program means."
      ),
      h2("What the page should explain"),
      table(
        ["Question", "A careful answer"],
        ["What is it?", "An optional service in which the care team coordinates care and keeps in touch between visits for Medicare patients with two or more ongoing conditions."],
        ["Who may qualify?", "Medicare sets the criteria, and the office confirms eligibility. The page should not tell a reader that they qualify."],
        ["Do I have to join?", "No. It is voluntary, and the patient must agree before it starts. The practice records the agreement."],
        ["Does it cost anything?", "Medicare cost sharing may apply, such as a coinsurance, and supplemental coverage may change that. Ask the office or the plan."],
        ["Can two practices provide it?", "Only one practitioner can bill for the service in a given month, so tell the office if another practice already provides it."],
        ["Can I stop?", "Yes. Patients can stop the service, and the office explains when it ends."]
      ),
      h3("Link to Medicare, not to a paraphrase"),
      p(
        "Medicare's own page on chronic care management lists the requirements, so link to it and keep the practice page short. If Medicare changes a rule, the linked page updates and yours stays correct. Add the date you last checked the information at the bottom of the page."
      ),
      h2("Wording rules for a healthcare page"),
      ul(
        "Describe the service, not clinical results. Do not say it keeps patients healthier or out of the hospital.",
        "Do not name conditions as qualifying unless Medicare's own page does.",
        "State that cost sharing may apply, and avoid quoting amounts that vary by plan.",
        "Use plain language and short sentences, as the federal plain language guidelines recommend."
      ),
      p(
        "Keep the page free of patient stories and photos of real patients. If the practice shares a staff member's name as the main contact, confirm the person agrees and that the role is accurate."
      ),
      h2("Connect it to the rest of the site"),
      p(
        "Link the page from the Medicare visit pages and from the page on follow-up care. Our guides on the [welcome to Medicare visit](/guides/welcome-to-medicare-visit-page-for-a-primary-care-practice-without-clinical-claims) and on [chronic condition follow-up visits](/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims) cover the pages patients are likely to read first. A [care coordinator and patient navigator page](/guides/care-coordinator-and-patient-navigator-page-for-a-primary-care-practice) can introduce the people behind the program."
      ),
      p(
        "Make sure the number on the page rings a person who knows the program. A patient who calls with a question about a charge should reach someone able to explain it, because a confusing answer at that moment is what turns a useful service into a complaint."
      ),
    ],
    faqs: [
      {
        q: "What is chronic care management?",
        a: "It is a Medicare service in which a practice coordinates care between visits for patients with multiple ongoing conditions. It is optional, requires the patient's agreement, and may involve cost sharing. The practice's website page should describe it in plain words and link to Medicare's own explanation.",
      },
      {
        q: "Can the page say who qualifies?",
        a: "It can describe Medicare's general criteria and link to its page, but the office should confirm eligibility patient by patient. Avoid language that tells a reader they qualify, because eligibility depends on details the website cannot check.",
      },
      {
        q: "Should the page list the cost?",
        a: "State that cost sharing may apply and that it depends on the patient's coverage, and invite readers to call. Quoted amounts can be wrong for a given plan, so the page is safer pointing to the office and to Medicare for specifics.",
      },
      {
        q: "Does joining require consent?",
        a: "Yes. The patient has to agree before the service starts, and the practice documents the agreement. The page should say that joining is voluntary and that a patient can stop. Explain how to reach the office to do either.",
      },
      {
        q: "Can the page promise better health?",
        a: "No. A practice website cannot promise results for any individual. Describe what the care team does between visits, such as coordination and check-in calls, and leave health outcomes to the patient's own clinician and conversation.",
      },
    ],
    citations: [MEDICARE_CCM, HHS_PRIVACY, PLAIN_LANGUAGE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/chronic-condition-follow-up-visits-page-for-a-primary-care-practice-without-clinical-claims", label: "Chronic Condition Follow Up Visits", description: "Explaining ongoing visits." },
      { href: "/guides/care-coordinator-and-patient-navigator-page-for-a-primary-care-practice", label: "Care Coordinator Page", description: "Introducing who coordinates care." },
      { href: "/guides/welcome-to-medicare-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Welcome To Medicare Visit", description: "Page for new Medicare patients." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1391
  {
    slug: "auto-reply-email-after-a-new-client-inquiry-for-a-counseling-practice",
    keyword: "auto reply email after a new client inquiry for a counseling practice",
    category: "How-to",
    title: "Auto Reply Email After a New Client Inquiry for Counseling",
    metaTitle: "Auto Reply Email After a New Client Inquiry for Counseling",
    metaDescription:
      "How a counseling practice can word an automatic reply to a new inquiry: what to promise, what to leave out and what to include. Call (561) 291-2681.",
    answer:
      "An auto reply to a new client inquiry should confirm the message arrived, say who will answer and when, give the office phone number, point to 988 and 911 for emergencies and ask for no health details. Send it from a real practice address, keep it short and only promise the reply time you reliably meet.",
    author: "Gio LaRoche",
    publishDate: "2026-10-29T15:00:00Z",
    dateModified: "2026-10-29",
    readMinutes: 5,
    sections: [
      h2("The minute after someone presses send"),
      p(
        "A person who fills out a counseling inquiry form has just done something hard. They typed a few lines, pressed send, and now they wait. Silence in that moment feels like rejection. A short automatic reply that says the message arrived, who reads it and what happens next turns the wait into a known quantity, and many people will not search for another counselor while they wait."
      ),
      p(
        "The reply is also the first piece of writing from the practice that the person owns. It sets the tone for the voice of the office, so it should sound like a human at the front desk and not like a ticket system."
      ),
      h2("What belongs in the message"),
      table(
        ["Part", "What to write"],
        ["Subject line", "A plain subject such as We received your message, with the practice name. Avoid words that hint at the reason for the inquiry."],
        ["Confirmation", "A sentence saying that the message arrived."],
        ["Who and when", "Who reads inquiries and the reply time you reliably meet, such as one business day. Do not promise faster than you can keep."],
        ["Phone option", "The office number and the hours someone answers, for people who would rather call."],
        ["Safety line", "If you are in crisis, call or text 988, or call 911 for an emergency."],
        ["Privacy reminder", "A request not to reply with health details, since email is not the right place for them."]
      ),
      h3("A sample structure"),
      p(
        "Thank you for contacting the practice. We received your message and a member of our team will reply within one business day. If you would rather talk, call the office during its listed hours. Please do not send health details by email. If you are in crisis, call or text 988, or call 911. Adapt the wording to your office, keep it brief and make sure every sentence is true."
      ),
      h2("Mistakes that cost inquiries"),
      ul(
        "Sending from a no-reply address, which blocks the person who wants to add a detail.",
        "Promising a reply in an hour and then answering in two days.",
        "Asking for a diagnosis, medication or symptoms in a return email.",
        "Using a long legal footer that is longer than the message itself.",
        "Including a marketing offer or newsletter signup in a transactional reply."
      ),
      p(
        "The reply is a transactional message sent because the person wrote to you, which differs from marketing email. Our guide to [email marketing compliance for a medical practice](/guides/email-marketing-compliance-for-a-medical-practice) explains the line between the two, and the same page covers when consent and an unsubscribe link are required."
      ),
      h2("Make the reply match the rest of the experience"),
      p(
        "The wording should agree with the page the person saw after submitting, as described in our guide to a [thank-you page after a contact form](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it), and with the fields on the form itself. Use the same reply time in both places, or visitors notice."
      ),
      p(
        "Send the message from your own domain, using the approach in the guide on [professional domain email](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail), so it lands in the inbox and not in spam. Then test it: submit a test inquiry marked as a test, check how the email looks on a phone, and make sure the reply-to address reaches a monitored inbox. Check the delivery path every quarter, since a form that stops sending silently costs real inquiries."
      ),
    ],
    faqs: [
      {
        q: "Should an auto reply promise a response time?",
        a: "Yes, if you reliably meet it. A stated time such as one business day sets expectations and reduces anxiety. Promise only what the team actually delivers, and review the number if the office changes how it handles inquiries.",
      },
      {
        q: "Can the auto reply ask about the reason for counseling?",
        a: "No. Email is not the right place for health details, and an automatic message should not request them. Ask only for contact preferences, and tell the person to share more during a call or through the practice's secure channel.",
      },
      {
        q: "Is the auto reply a marketing email?",
        a: "Usually it is a transactional message sent because the person wrote to the practice. Keep it free of promotions and newsletter signups. If you add marketing content, the rules for commercial email apply, so have it reviewed.",
      },
      {
        q: "Should the message come from a no-reply address?",
        a: "Avoid it. A real practice address lets a person add a detail or change a contact preference by replying. Make sure someone monitors the inbox, and keep the sender name recognizable as the practice.",
      },
      {
        q: "How do I check that the auto reply works?",
        a: "Submit a clearly marked test inquiry, check that the message arrives in an inbox and not spam, and view it on a phone. Repeat the test every quarter and after any change to the form, email service or domain settings.",
      },
    ],
    citations: [FTC_ADVERTISING, HHS_PRIVACY, LIFELINE, PLAIN_LANGUAGE],
    links: [
      { href: "/guides/first-time-client-contact-form-for-a-counseling-practice-fields-privacy-notice-and-response-time", label: "First Time Client Contact Form", description: "The form before the auto reply." },
      { href: "/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it", label: "Thank You Page After A Form", description: "What the visitor sees on screen." },
      { href: "/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail", label: "Professional Domain Email", description: "Sending from your own domain." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
