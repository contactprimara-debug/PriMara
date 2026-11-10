// -- Guides batch 34 - 2026-11-04 --
// Guide/AEO pages from the Command Center queue (rows 1489, 1490, 1492-1498 plus six rows planned 2026-11-04),
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
const HHS_EMAIL = {
  publisher: "U.S. Department of Health and Human Services",
  label: "Does HIPAA permit providers to use email to communicate with patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-communicate-with-patients/index.html",
};
const ACA_ETHICS = {
  publisher: "American Counseling Association",
  label: "ACA Code of Ethics",
  href: "https://www.counseling.org/resources/ethics",
};
const FL_BOM = {
  publisher: "Florida Board of Medicine",
  label: "Florida Board of Medicine",
  href: "https://flboardofmedicine.gov/",
};
const FL_NURSING = {
  publisher: "Florida Board of Nursing",
  label: "Florida Board of Nursing",
  href: "https://floridasnursing.gov/",
};
const GBP_X_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_X_GAINTERNAL = {
  publisher: "Google Analytics Help",
  label: "Filter out internal traffic",
  href: "https://support.google.com/analytics/answer/10104470",
};
const GBP_X_POSTS = {
  publisher: "Google Business Profile Help",
  label: "Create & manage posts on your Business Profile",
  href: "https://support.google.com/business/answer/7342169",
};
const GBP_X_REVMAN = {
  publisher: "Google Business Profile Help",
  label: "Manage customer reviews",
  href: "https://support.google.com/business/answer/3474050",
};
const GOOGLE_HELPFUL = {
  publisher: "Google Search Central",
  label: "Creating helpful, reliable, people-first content",
  href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const GOOGLE_FAQ = {
  publisher: "Google Search Central",
  label: "FAQPage structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
};
const GOOGLE_FAQ_CHANGE = {
  publisher: "Google Search Central Blog",
  label: "Changes to HowTo and FAQ rich results",
  href: "https://developers.google.com/search/blog/2023/08/howto-faq-changes",
};
const GOOGLE_CONSOLIDATE = {
  publisher: "Google Search Central",
  label: "What is URL canonicalization",
  href: "https://developers.google.com/search/docs/crawling-indexing/canonicalization",
};
const GOOGLE_BLOCK = {
  publisher: "Google Search Central",
  label: "Block search indexing with noindex",
  href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing",
};
const GOOGLE_ROBOTS = {
  publisher: "Google Search Central",
  label: "Introduction to robots.txt",
  href: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
};
const GOOGLE_PAGE_EXP = {
  publisher: "Google Search Central",
  label: "Understanding page experience in Google Search results",
  href: "https://developers.google.com/search/docs/appearance/page-experience",
};
const LLMS_TXT = {
  publisher: "llmstxt.org",
  label: "The /llms.txt file proposal",
  href: "https://llmstxt.org/",
};
const HEALTHCARE_PREVENTIVE = {
  publisher: "HealthCare.gov",
  label: "Preventive care benefits for adults",
  href: "https://www.healthcare.gov/coverage/preventive-care-benefits/",
};
const HEALTHCARE_PCP = {
  publisher: "HealthCare.gov",
  label: "Glossary: primary care provider",
  href: "https://www.healthcare.gov/glossary/primary-care-provider/",
};
const GOOGLE_ADS_HEALTH = {
  publisher: "Google Ads Policy Help",
  label: "Healthcare and medicines policy",
  href: "https://support.google.com/adspolicy/answer/176031",
};
const CDC_988 = {
  publisher: "988 Suicide & Crisis Lifeline",
  label: "988 Lifeline",
  href: "https://988lifeline.org/",
};

export const guidesPartThirtySeven: Guide[] = [
  // ---------------------------------------------------------------- 1489
  {
    slug: "nurse-visit-page-for-injections-and-blood-pressure-checks-at-a-primary-care-practice-without-clinical-claims",
    keyword: "nurse visit page for injections and blood pressure checks at a primary care practice without clinical claims",
    category: "How-to",
    title: "Nurse Visit Page For A Primary Care Practice",
    metaTitle: "Nurse Visit Page For A Primary Care Practice",
    metaDescription:
      "How a primary care practice can explain nurse visits for injections and blood pressure checks in plain words, with no clinical claims. Call (561) 291-2681.",
    answer:
      "A nurse visit page tells patients which quick services the nursing staff provide, whether an order or a prior provider visit is needed, how long it takes, how to book, and what it costs or how it is billed. It gives no medical advice and makes no promises about results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("Why quick visits need their own page"),
      p(
        "Some of the shortest appointments a primary care office offers are also the ones patients are most unsure about. Someone who was told to come back for a blood pressure check, or who has a standing injection schedule, does not want a full visit with a provider. They want to know whether they can walk in, whether they need to call first, and how long they will be in the building."
      ),
      p(
        "If your website has no answer, the front desk answers the same questions all day, and some patients give up and go to a pharmacy clinic. A single page that explains the nurse visit in plain words saves calls and keeps those patients inside your practice."
      ),
      h2("What belongs on the page"),
      table(
        ["Item", "What to write"],
        ["Services offered", "List only what your nurses do in the office today, in the words a patient would use, such as blood pressure check or scheduled injection."],
        ["Order needed", "Say plainly whether a provider must order the service first, and how a patient gets that order."],
        ["How to book", "Say whether walk-ins are welcome, whether the visit is by appointment only, and give a tap-to-call number."],
        ["Time and place", "Give a typical length, such as about fifteen minutes, with a note that waits vary, and say which office offers it."],
        ["Billing", "Explain that a nurse visit may be billed differently from a provider visit, and that the front desk can check coverage before the appointment."],
      ),
      h2("Wording that avoids clinical claims"),
      p(
        "Describe what happens, not what it means for someone's health. A sentence like nurses record your blood pressure and give you the reading to share with your provider is a description. A sentence that says the visit will keep your numbers under control is a promise about an outcome, and no web page can honestly make it."
      ),
      ul(
        "Do not tell visitors what a reading should be or when to worry. Say that results are reviewed by the provider.",
        "Do not name specific medicines on the page unless the practice stocks and gives them every week.",
        "Do not describe who should or should not have an injection. That decision belongs to the provider.",
        "Add one line for urgent symptoms: call 911, not this office. The page is for routine visits."
      ),
      h2("Make the booking step short"),
      p(
        "Put the phone number at the top as a tap-to-call link, because many people searching for a nurse visit are on a phone during a break. If online booking exists, give nurse visits their own appointment type so patients do not accidentally reserve a long provider slot. Our guide on [explaining visit types and appointment lengths](/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website) shows how to name the types so they match what the front desk schedules."
      ),
      h3("Say who performs the visit"),
      p(
        "Nursing titles carry legal meaning, and a patient reading registered nurse, licensed practical nurse or medical assistant will assume specific training. Use the title each staff member is actually licensed or certified under, and check scope questions with the [Florida Board of Nursing](https://floridasnursing.gov/) or your supervising physician. The wording in [a staff titles explained page](/guides/staff-titles-explained-page-for-a-primary-care-practice-md-do-np-pa-and-ma) can be reused here without repeating the whole table."
      ),
      h2("Keep Google and the page in agreement"),
      p(
        "If the nurse visit has set hours or is offered at only one office, say so on the page and in the Services list on your Google profile. A mismatch sends patients to a closed door. Review the wording against your [Google Business Profile services list](/guides/google-business-profile-services-list-optimization) whenever the schedule changes."
      ),
    ],
    faqs: [
      {
        q: "Do patients need an appointment for a nurse visit?",
        a: "That is the office's choice, but the page must say which it is. If walk-ins are welcome during certain hours, list them. If it is appointment only, say so and give a phone number. A vague line leads to calls and turned-away patients.",
      },
      {
        q: "Should the page list the vaccines or medicines given?",
        a: "Only list what the office actually stocks and gives routinely, and keep the list current. A short, accurate list is better than a long one that is wrong. Link to your vaccine availability page if you already have one.",
      },
      {
        q: "Can the page say that blood pressure checks are free?",
        a: "Only if that is true for every patient and every plan, which is rare. Billing depends on the visit and the coverage. A line saying the front desk can check coverage before the appointment is safer and more useful.",
      },
      {
        q: "Does the page need a medical disclaimer?",
        a: "A short note is enough: this page describes services and is not medical advice, and anyone with an emergency should call 911. Avoid long legal paragraphs. They are rarely read and do not replace accurate, plain descriptions.",
      },
      {
        q: "How do we know whether the page brings in calls?",
        a: "Use a tel link with tracking on the page, and count the calls and form requests that start there each month. A small monthly count shows whether patients are using the page or still phoning for the same answers.",
      },
    ],
    citations: [FL_NURSING, FL_BOM, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/immunization-and-vaccine-availability-page-for-a-primary-care-practice-without-clinical-claims", label: "Vaccine Availability Page", description: "List vaccines the office stocks without claims." },
      { href: "/guides/rescheduling-an-appointment-online-page-for-a-primary-care-practice", label: "Rescheduling Online", description: "Help patients move a short visit." },
      { href: "/guides/minor-procedures-offered-page-for-a-primary-care-practice-without-clinical-claims", label: "Minor Procedures Page", description: "The other in-office services to list." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1490
  {
    slug: "womens-health-visit-page-for-a-primary-care-practice-without-clinical-claims",
    keyword: "womens health visit page for a primary care practice without clinical claims",
    category: "How-to",
    title: "Women's Health Visit Page For Primary Care",
    metaTitle: "Women's Health Visit Page For Primary Care",
    metaDescription:
      "How a primary care practice can describe women's health visits in plain words, who provides them and how to book, with no clinical claims. (561) 291-2681",
    answer:
      "A women's health visit page names the routine visits your office offers, which provider performs them, how to book, what to bring, and what is referred elsewhere. It uses plain words, respects privacy, and makes no claims about outcomes or who needs which test.",
    author: "Liam Costello",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("What a patient is looking for"),
      p(
        "A woman searching for a primary care office that handles her annual visit is usually asking a practical question. Can I get this done with the provider who already knows me, or do I need a separate office? She may also be looking for a female clinician, an evening slot, or a place that will not make the visit feel awkward."
      ),
      p(
        "A page that answers those questions calmly turns a search into a phone call. A page that is silent, or that lists services the office does not really perform, sends her to a competitor or, worse, to a visit that ends in a referral she did not expect."
      ),
      h2("Start with what the office actually does"),
      p(
        "Ask each clinician which routine visits they perform in the office today, and which they send to a specialist. Scope differs between providers, and a page that says everything will lose trust the first time a patient is told otherwise. Questions about what a license allows can be confirmed with the [Florida Board of Medicine](https://flboardofmedicine.gov/)."
      ),
      table(
        ["Section", "What to write"],
        ["Visits offered", "Name the routine visits in plain terms, such as annual wellness visit or a visit to discuss a concern, without listing tests or conditions."],
        ["Who provides them", "Name the provider types who see patients for these visits, and say whether a patient may ask for a female clinician, if that is possible."],
        ["What is referred out", "One short line naming services that go to a specialist, so patients know before they book."],
        ["How to book", "A tap-to-call number, the online request form, and the typical wait for a routine visit."],
        ["Coverage", "A sentence explaining that many plans cover preventive visits, and that the front desk can check before the appointment."],
      ),
      h2("Privacy and tone"),
      p(
        "A women's health page is a sensitive page, and the tone matters more than the length. Use calm, direct sentences. Avoid euphemisms that make the topic feel embarrassing, and avoid clinical detail that belongs in the exam room. Never ask for health information in the form that books the visit. Name, phone number and preferred times are enough."
      ),
      ul(
        "Do not describe symptoms, conditions or screening schedules. Say that the provider discusses what is right for each patient.",
        "Do not use images of patients. Use office photos or none at all.",
        "Do not promise confidentiality beyond what the law and your policies say. Link to your privacy notice.",
        "Give the office phone number for questions instead of inviting details by email."
      ),
      h3("A line about preventive coverage"),
      p(
        "Federal guidance lists preventive services that many plans cover, and [HealthCare.gov](https://www.healthcare.gov/coverage/preventive-care-benefits/) explains the general categories. You do not need to copy the list. One sentence pointing patients to their plan and to your front desk is enough, and it avoids stating what any individual's plan will pay."
      ),
      h2("Link the page into the rest of the site"),
      p(
        "A patient on this page may next want the new-patient steps, a way to switch clinicians, or the insurance list. Link those pages in the text, not just in the menu. The guide to [establishing care as a new patient](/guides/establishing-care-visit-explained-page-for-a-primary-care-practice) and the page on [choosing a provider at a multi-provider practice](/guides/choosing-a-provider-at-a-multi-provider-primary-care-practice-page) are the two links most patients on this topic click."
      ),
    ],
    faqs: [
      {
        q: "Can the page promise a female clinician?",
        a: "Only if the schedule can honor it. If the office has a female clinician with open slots, say patients may ask for her by name. If availability varies, write that requests are accommodated when possible and name the wait.",
      },
      {
        q: "Should the page list the tests that are done?",
        a: "No. Test lists read as medical advice and go out of date. Say that the provider discusses recommended care with each patient, and let the visit decide the details. A short description of the visit type is enough.",
      },
      {
        q: "Is it safe to put a booking form on this page?",
        a: "Yes, if the form asks only for name, phone, preferred time and visit type. Do not ask for symptoms or conditions in a web form. Send the form to a monitored address and confirm by phone.",
      },
      {
        q: "Do we need a separate page for each visit type?",
        a: "Not at first. One clear page that covers the routine visits is enough. Add a separate page only when a visit type has its own booking steps, staff or scheduling rules that would crowd the main page.",
      },
      {
        q: "How long should the page be?",
        a: "Long enough to answer who, what, where, how to book and what it costs, which is usually 600 to 900 words including questions. Padding with general health information makes it less trustworthy and does not help patients decide.",
      },
    ],
    citations: [FL_BOM, HEALTHCARE_PREVENTIVE, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims", label: "Annual Wellness Visit Page", description: "The general annual visit page." },
      { href: "/guides/chaperone-policy-page-for-a-primary-care-practice", label: "Chaperone Policy Page", description: "A policy patients often look for." },
      { href: "/guides/establishing-care-visit-explained-page-for-a-primary-care-practice", label: "Establishing Care Visit", description: "What a first visit involves." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1492
  {
    slug: "new-baby-first-visit-scheduling-page-for-a-family-medicine-practice-without-clinical-claims",
    keyword: "new baby first visit scheduling page for a family medicine practice without clinical claims",
    category: "How-to",
    title: "New Baby First Visit Page For Family Medicine",
    metaTitle: "New Baby First Visit Page For Family Medicine",
    metaDescription:
      "How a family medicine practice can explain scheduling a newborn's first visit and what parents bring, with no clinical claims. Call (561) 291-2681.",
    answer:
      "A new baby first visit page tells parents how soon to call, what to bring, which providers see newborns, how to register a baby who has no insurance card yet, and who to call with urgent questions. It stays practical and gives no medical advice.",
    author: "Liam Costello",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("The parents' real question"),
      p(
        "New parents are tired and short of time, and one of the first practical jobs is finding a doctor for the baby. They search for words like newborn visit or baby doctor near me, often from a phone at night. If your family medicine office sees babies, the page they land on should tell them so in the first sentence."
      ),
      p(
        "The page is a logistics page. It answers how to schedule, what paperwork to have, and how the office handles a baby whose coverage has not been set up yet. It does not tell parents what their baby needs. That is the clinician's job at the visit."
      ),
      h2("What the page should cover"),
      table(
        ["Topic", "What to write"],
        ["Who sees newborns", "Name the provider types who see infants, and say the youngest age the office sees, if there is a limit."],
        ["When to call", "Say how early parents can call to arrange the first visit, including before the baby is born if the office allows it."],
        ["What to bring", "A short list: parent photo ID, insurance cards, the hospital paperwork, and a list of questions. Say that missing items do not stop the visit."],
        ["Coverage not ready", "Explain who to call when the baby's coverage has not started. The front desk can discuss options, so give the phone number."],
        ["After hours", "Say how to reach the on-call line, and that emergencies go to 911, not the office."],
      ),
      h2("Wording that stays out of medical advice"),
      p(
        "Do not describe a schedule of checkups, vaccines or screenings as the right one for every baby. Public health agencies publish recommended schedules and the clinician applies them to each child. A line saying the provider will explain what to expect at each visit is accurate and sufficient."
      ),
      ul(
        "Do not use words like normal, healthy or on track. They imply a judgment about an individual baby.",
        "Do not publish baby photos from patients without written permission, and prefer none.",
        "Do not ask parents for health history in a web form. Collect it at the visit.",
        "Put the phone number first. A tired parent will call before filling in a form."
      ),
      h3("Say how siblings and parents fit in"),
      p(
        "Many families want one place for the baby and the rest of the household. If the office can schedule back-to-back visits, say so and link to your page on [booking several family members in one visit](/guides/booking-several-family-members-in-one-visit-page-for-a-primary-care-practice). A parent who knows the whole family can be seen in one trip is more likely to choose your office."
      ),
      h2("Keep the page current and findable"),
      p(
        "Confirm the age range and provider names every few months, and update the page when a clinician leaves or starts. Link it from your [ages seen page](/guides/ages-seen-and-pediatric-age-range-page-for-a-family-medicine-practice) and from the [well-child checkup page](/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims) so a parent who finds either one can reach it. On your Google profile, add newborn visits to the Services list only if the office really offers them."
      ),
      h3("What the front desk should be ready for"),
      p(
        "Give the front desk a short script for calls from new parents: confirm the baby's date of birth and the parent's contact number, offer the earliest first-visit slot, explain what to bring, and say who to call after hours. Parents remember how the call felt more than any page, so a calm, unhurried first conversation is part of the same job as the page itself. Keep a note of how many new-baby calls arrive each month so you can see whether the page is working."
      ),
    ],
    faqs: [
      {
        q: "Should the page list the visit schedule for a baby's first year?",
        a: "No. Schedules are set by public health guidance and applied by the clinician, and they change. A page that copies one goes out of date and can be wrong for an individual child. Say the provider explains what to expect at each visit.",
      },
      {
        q: "Can parents book before the baby is born?",
        a: "That depends on the office. Some practices let expecting parents call for a meet-and-greet or to reserve a first visit. If yours does, say so with the number to call. If not, say how soon after birth to phone.",
      },
      {
        q: "What if the baby has no insurance card yet?",
        a: "Tell parents to call the front desk, who can explain how the practice handles a visit while coverage is being set up. Do not promise a billing outcome on the page. Give the phone number and invite the call.",
      },
      {
        q: "Is it fine to show photos of babies?",
        a: "Avoid it unless you have written permission from the parents, and even then use caution. Photos of your waiting room, exam room and team are safer, and they show parents where they will be going.",
      },
      {
        q: "How do we know the page is working?",
        a: "Count the calls and form requests that start on it each month. A small number of new-baby families is a meaningful result, because a family often stays with the practice for years.",
      },
    ],
    citations: [HEALTHCARE_PCP, FL_BOM, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/ages-seen-and-pediatric-age-range-page-for-a-family-medicine-practice", label: "Ages Seen Page", description: "State the age range plainly." },
      { href: "/guides/well-child-and-school-age-checkup-page-for-a-family-medicine-practice-without-clinical-claims", label: "Well-Child Checkup Page", description: "The next page parents look for." },
      { href: "/guides/new-patient-packet-and-what-to-expect-in-the-mail-page-for-a-primary-care-practice", label: "New Patient Packet Page", description: "Paperwork and what to expect." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1493
  {
    slug: "faq-schema-for-a-medical-practice-website-after-google-limited-faq-rich-results",
    keyword: "faq schema for a medical practice website after google limited faq rich results",
    category: "How-to",
    title: "FAQ Schema For A Medical Practice After Google's Change",
    metaTitle: "FAQ Schema For A Medical Practice After Google's Change",
    metaDescription:
      "Google now limits FAQ rich results to a few well-known sites. What a medical practice should still do with FAQ markup and content. Call (561) 291-2681.",
    answer:
      "Google stopped showing FAQ rich results for most sites in 2023, and keeps them for a small set of well-known government and health sites. A medical practice should still write visible FAQs and keep matching FAQ markup, but treat the markup as a clear label, not a way to win extra space in results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("What changed"),
      p(
        "In August 2023, Google announced that it would show FAQ rich results only for well-known, authoritative government and health websites, and that HowTo rich results would be limited to desktop and then removed. The practical result is that a typical medical practice website no longer gets the expandable question boxes that used to appear under its link."
      ),
      p(
        "Many practices read that as a reason to delete their FAQ sections. That is the wrong conclusion. The change affected how a result looks, not whether questions and answers help patients, and not whether search and AI tools can read your answers."
      ),
      h2("Why the questions still matter"),
      p(
        "Patients still ask questions in plain language, and answers that sit under a clear question heading are easy for a person to scan and easy for a machine to quote. The page you are reading follows that pattern. A question heading, a short direct answer and a few sentences of support is the shape that answer engines look for when they compose a reply."
      ),
      ul(
        "Keep the FAQ on the page that already covers the topic, so the answer sits next to the service.",
        "Write the question the way a patient would say it, not as a keyword.",
        "Start the answer with the answer, in one or two sentences, then add detail.",
        "Update the answer when a policy, price or hour changes. A wrong answer is worse than none."
      ),
      h2("What to do with the markup"),
      p(
        "FAQPage structured data is still valid, and Google's documentation still describes how to write it. The rules have not changed: the markup must match the visible text, each question needs a real answer, and the content must not be advertising. Leaving markup in place does no harm if it is accurate, and it labels the questions clearly for any system that reads it."
      ),
      table(
        ["Question", "Practical answer"],
        ["Keep existing FAQ markup?", "Yes, if it matches the visible text. Remove it only if it is out of date and you cannot update it."],
        ["Add markup to new pages?", "Yes, as a low-cost label, but do not expect a visible change in results."],
        ["Add FAQs just to fill a page?", "No. Add only questions patients actually ask your front desk."],
        ["Use one FAQ block on every page?", "No. Repeating the same questions across pages creates duplicate content."],
      ),
      h3("Check what is live"),
      p(
        "Use the Rich Results Test or the process in [testing structured data on a medical practice website](/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website) to confirm the markup parses and matches the page. If your Search Console shows an FAQ report with warnings, fix mismatches first. Do not be alarmed if the report shows pages with no impressions. That is expected after the change."
      ),
      h2("Where to get the questions"),
      p(
        "The best source is the front desk. Ask which five questions come in by phone each week, and answer those on the relevant page. Our guide on [writing patient FAQs that answer AI search](/guides/how-to-write-patient-faqs-that-answer-ai-search) goes through the wording, and [the schema markup overview](/guides/schema-markup-for-a-medical-practice-website-explained) shows how FAQ markup fits with the other types a practice uses."
      ),
    ],
    faqs: [
      {
        q: "Does a medical practice still get FAQ rich results?",
        a: "Almost never. Google says it shows them for well-known government and health sites. A private practice should not expect expandable questions under its result, and should not judge its markup by whether they appear.",
      },
      {
        q: "Should we remove FAQ schema from our site?",
        a: "Not if it is accurate. Valid markup that matches the visible text is harmless and labels your questions clearly. Remove it only if the answers are wrong and you cannot update them, and fix the visible text at the same time.",
      },
      {
        q: "Do FAQs help with AI answers?",
        a: "They can. A clear question followed by a direct answer is easy to quote. There is no guarantee that any assistant will cite a page, so write for patients first and treat quotation as a possible side benefit.",
      },
      {
        q: "How many FAQs should a page have?",
        a: "Four to six real questions is usually enough. More than that tends to repeat itself. Choose questions that patients ask by phone, and answer each in a few sentences without medical advice.",
      },
      {
        q: "Can the FAQ answers include links?",
        a: "Yes. A link inside an answer to the booking page or a policy page is useful to readers. Keep the visible text and the markup identical, including the link text, so there is no mismatch.",
      },
    ],
    citations: [GOOGLE_FAQ_CHANGE, GOOGLE_FAQ, GOOGLE_HELPFUL, HHS_PRIVACY],
    links: [
      { href: "/guides/how-to-write-patient-faqs-that-answer-ai-search", label: "Patient FAQs For AI Search", description: "How to word the questions." },
      { href: "/guides/schema-markup-for-a-medical-practice-website-explained", label: "Schema Markup Explained", description: "Where FAQ markup fits." },
      { href: "/guides/faq-page-for-a-primary-care-practice-questions-to-answer-without-medical-advice", label: "Primary Care FAQ Page", description: "Questions to answer on a primary care site." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1494
  {
    slug: "llms-txt-and-ai-readable-summaries-for-a-medical-practice-website",
    keyword: "llms.txt and ai-readable summaries for a medical practice website",
    category: "How-to",
    title: "llms.txt And AI-Readable Summaries For Practices",
    metaTitle: "llms.txt And AI-Readable Summaries For Practices",
    metaDescription:
      "What llms.txt is, whether a medical practice needs one, and the plain-language summary every site should have for AI tools to read. Call (561) 291-2681.",
    answer:
      "An llms.txt file is an optional text file listing a site's key pages for AI tools. Major search engines have not said they use it, so it is low priority for a practice. A clear services summary, accurate Google profile and plain page text matter more and take effect now.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("What llms.txt is"),
      p(
        "The llms.txt idea is a proposal published at llmstxt.org. A site places a plain-text file at its root that lists its most useful pages with a short description of each, so that an AI tool reading the site can find the important material without wading through menus and scripts. It is a convention proposed by the community, not a standard adopted by search engines."
      ),
      p(
        "Google has not said that it uses the file for search or for AI features, and the companies that build AI assistants have not committed to reading it. That does not make it harmful. It makes it a small, optional, unproven step, and not a substitute for the basics."
      ),
      h2("Should a medical practice add one"),
      p(
        "It costs little, but it is not where the value is. If you already have your hours, address, services and insurance in clear text on real pages, and an accurate Google profile, those do more for patients and for any tool that reads your site. If you add the file, keep it short and make sure every line is true."
      ),
      table(
        ["Option", "Effort and likely value"],
        ["Clear services and about pages", "Low effort, high value. Helps people and every tool."],
        ["Accurate Google Business Profile", "Low effort, high value. Widely used by maps and assistants."],
        ["Structured data that matches the page", "Medium effort, moderate value. Labels facts clearly."],
        ["An llms.txt file", "Low effort, unproven value. Optional."],
      ),
      h2("What the file would contain"),
      p(
        "A typical file starts with the practice name and one sentence describing what it does, then lists a handful of links with a short description each. For a practice, that is the home page, services, providers, insurance, new-patient steps, contact and hours. Do not add pages you do not want quoted, and never list anything that contains patient information."
      ),
      ul(
        "Use plain sentences. Skip adjectives like best or leading.",
        "Link only to public pages that are accurate today.",
        "Include the phone number and address exactly as they appear on your Google profile.",
        "Review the file when hours, providers or services change."
      ),
      h2("The summary that matters more"),
      p(
        "What helps most is a short, factual summary near the top of your home and about pages: who you are, where you are, who you see, what you treat or help with in general terms, and how to book. Write it for a patient, and it will also work for a machine. Add no clinical claims and no outcome promises."
      ),
      h3("Decide what AI crawlers may read"),
      p(
        "A separate question is whether you let AI crawlers read your site at all. That is controlled by robots.txt, and the trade-offs are explained in [allowing or blocking AI crawlers](/guides/should-a-medical-practice-allow-or-block-ai-crawlers). Settle that first, because a file that lists pages a crawler is blocked from reading does nothing."
      ),
      h2("Check how assistants describe you"),
      p(
        "The test of any of this is what an assistant says when someone asks about your practice. Follow the steps in [checking whether AI assistants mention your practice](/guides/how-to-check-if-ai-assistants-mention-your-medical-practice), note anything wrong, and fix the source page or listing rather than the file. If an answer is wrong, [correcting wrong information in an AI answer](/guides/fix-wrong-information-about-your-practice-in-an-ai-chatbot-answer) lays out how."
      ),
      h3("Keep it simple and honest"),
      p(
        "Whatever you add for machines should say the same thing your pages say for people. If the summary claims a service that no page explains, or the file lists an old address, the mismatch is the thing assistants are most likely to repeat. Put a date in your calendar to read the summary aloud twice a year and correct it."
      ),
    ],
    faqs: [
      {
        q: "Does Google use llms.txt?",
        a: "Google has not said it does. The proposal is a community convention. Treat it as optional, and do not expect a ranking or visibility change from adding it. Accurate pages and listings matter more.",
      },
      {
        q: "Could llms.txt cause harm?",
        a: "Not if it lists only public, accurate pages. The risk is a file that goes out of date, pointing tools at old hours or a provider who left. Put it on your review checklist like any other page.",
      },
      {
        q: "Can we put patient information in it?",
        a: "No. It is a public file, and it should contain nothing that identifies a patient. Keep it to public pages and the practice's own contact details.",
      },
      {
        q: "Who should write the summary?",
        a: "Someone who knows the practice and can verify each line, such as the practice manager. Keep it to a short paragraph. Then ask a clinician or owner to read it for accuracy before it goes live.",
      },
      {
        q: "Is this the same as schema markup?",
        a: "No. Structured data is code inside a page that labels facts, such as hours or organization name. An llms.txt file is a separate text file that lists pages. They can both exist, and neither replaces clear page text.",
      },
    ],
    citations: [LLMS_TXT, GOOGLE_ROBOTS, GOOGLE_HELPFUL, HHS_PRIVACY],
    links: [
      { href: "/guides/get-a-medical-practice-into-ai-search-answers", label: "Getting Into AI Search Answers", description: "The wider approach to AI visibility." },
      { href: "/guides/should-a-medical-practice-allow-or-block-ai-crawlers", label: "Allow Or Block AI Crawlers", description: "Decide this before adding a file." },
      { href: "/guides/how-to-check-if-ai-assistants-mention-your-medical-practice", label: "Checking AI Assistants", description: "A simple way to test results." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1495
  {
    slug: "two-pages-for-the-same-service-keyword-cannibalization-on-a-medical-practice-website",
    keyword: "two pages for the same service keyword cannibalization on a medical practice website",
    category: "Checklist",
    title: "Two Pages Competing For One Service Keyword",
    metaTitle: "Two Pages Competing For One Service Keyword",
    metaDescription:
      "What to do when two pages on a medical practice website target the same service search. How to spot it, pick a winner and merge. Call (561) 291-2681.",
    answer:
      "When two pages on your site answer the same search, Google may show one, swap between them, or show neither well. Find the overlap in Search Console, choose the stronger page, merge the useful text into it, redirect the other, and update internal links to point at the winner.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 6,
    sections: [
      h2("What the problem looks like"),
      p(
        "A practice writes a page about anxiety counseling, then two years later a new page about therapy for anxiety. Both mention the same services, both link to the same booking form, and both have a similar title. Neither is bad, but neither gets the attention one stronger page would. This is often called keyword cannibalization, though the page does not eat the other. It splits the signals."
      ),
      p(
        "The symptom is usually unsteady results. One week a page ranks, the next week the other one does, and neither settles near the top. Clicks and calls from that topic stay flat even though you keep adding content around it."
      ),
      h2("How to find it"),
      ol(
        "Open Search Console, go to Performance, and filter by the service phrase you care about.",
        "Switch to the Pages tab. If two or more of your own URLs show impressions for the same phrase, you have overlap.",
        "Search the phrase in a private window and see which of your pages appears. Note the one Google prefers.",
        "Read both pages. Ask whether a patient would see them as two different questions or as the same one."
      ),
      p(
        "Our guide to [reading Search Console for a medical practice](/guides/how-to-read-google-search-console-for-a-medical-practice-website) walks through the Performance report if you have not used it before."
      ),
      h2("Two pages are fine when the intent differs"),
      p(
        "Not every pair is a problem. A page about what a service is and a page about how to book it are different questions. A page for adults and a page for teens can coexist if each is written for its own reader. The test is the question the page answers, not the words it uses."
      ),
      table(
        ["Situation", "Usual decision"],
        ["Same question, near-identical text", "Merge into one page and redirect the weaker."],
        ["Same topic, different reader", "Keep both, sharpen each title and opening paragraph."],
        ["Old page, no traffic, outdated", "Redirect to the current page or remove it."],
        ["Two location pages for the same office", "Merge and redirect. One office, one page."],
      ),
      h2("How to merge safely"),
      p(
        "Pick the page that has more links, more history or better text, and keep its address. Copy any unique, accurate paragraphs from the other page into it, so no useful content is lost. Then set a permanent redirect from the old address to the new one, as described in [redirects when removing a service or provider page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website)."
      ),
      ul(
        "Update menus, footers and in-text links to point at the kept page, not at the redirect.",
        "Remove the old page from the sitemap and leave the redirect in place for a long time.",
        "Check that the canonical tag on the kept page points to itself.",
        "Update the Google profile website link if it pointed at the old page."
      ),
      h3("If you keep both pages"),
      p(
        "Give each page a different job. Change the title and opening paragraph so a reader can tell them apart, and link from each page to the other in a sentence that explains the difference. Make sure each canonical tag points to its own address, a point covered in [canonical tags and duplicate content](/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website)."
      ),
      h2("Prevent it next time"),
      p(
        "Before writing a new page, search your own site for the topic. Keep a simple list of pages and the question each answers, and check it before adding anything. The habit in [internal linking for a medical practice website](/guides/internal-linking-for-a-medical-practice-website) helps too, because a page that is clearly the main one for a topic collects the links. The same list helps when you pick what to feature on the home page, as described in [choosing the first two services for a primary care home page](/guides/choosing-the-first-two-services-to-feature-on-a-primary-care-practice-home-page)."
      ),
    ],
    faqs: [
      {
        q: "Is keyword cannibalization a Google penalty?",
        a: "No. Google does not penalize a site for having two similar pages. The cost is that signals are split, so neither page performs as well as one stronger page could. Merging is a clean-up, not a repair of a penalty.",
      },
      {
        q: "Should I delete the weaker page?",
        a: "Do not just delete it. Merge any useful text into the stronger page, then set a permanent redirect from the old address. Deleting without a redirect sends visitors and links to an error page.",
      },
      {
        q: "How long until results settle after a merge?",
        a: "It varies. Google needs to recrawl both addresses and process the redirect, which can take days or weeks. Do not change the pages again during that time, and check Search Console for the kept page.",
      },
      {
        q: "Can two location pages cover the same office?",
        a: "They should not. One office should have one page. If you have two for the same address, merge them, redirect the weaker and keep the address, hours and phone number consistent everywhere.",
      },
      {
        q: "How often should we check for overlap?",
        a: "Each quarter is enough for most practices, and before adding a batch of new pages. Filter Search Console by your main service phrases and look for more than one of your URLs appearing.",
      },
    ],
    citations: [GOOGLE_CONSOLIDATE, GOOGLE_HELPFUL, GBP_X_EDIT, HHS_PRIVACY],
    links: [
      { href: "/guides/canonical-tags-and-duplicate-content-on-a-medical-practice-website", label: "Canonical Tags", description: "Point each page at itself." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking", description: "Make the main page obvious." },
      { href: "/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website", label: "Redirects", description: "How to retire a page safely." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1496
  {
    slug: "google-business-profile-post-ideas-for-a-counseling-practice-that-avoid-clinical-claims",
    keyword: "google business profile post ideas for a counseling practice that avoid clinical claims",
    category: "Playbook",
    title: "Google Profile Post Ideas For A Counseling Practice",
    metaTitle: "Google Profile Post Ideas For A Counseling Practice",
    metaDescription:
      "Ten Google Business Profile post ideas a counseling practice can use that avoid clinical claims, client details and promises. Call (561) 291-2681.",
    answer:
      "A counseling practice can post about openings, hours, new clinicians, what a first session is like, insurance updates, telehealth, groups, workshops, community resources and holiday closures. Keep posts short, factual and free of client stories, diagnoses or outcome promises, and add a real photo.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("What a post is for"),
      p(
        "A Google Business Profile post is a small notice that appears on your listing. It will not fix a weak profile, but it shows that the practice is active and gives a person ready to call a reason to do so now. For a counseling practice, the risk is writing something that sounds clinical, so every idea below is built on facts about the practice, not about treatment."
      ),
      h2("Ten ideas that stay on the safe side"),
      table(
        ["Idea", "What to say"],
        ["New openings", "Say you are accepting new clients, which days have openings and how to ask. Do not say you can fix anything."],
        ["Hours change", "Share new evening or Saturday hours, with the dates they begin."],
        ["New clinician", "Name them, their license title and the days they see clients. No claims about results."],
        ["What a first session is like", "Describe the logistics: length, paperwork, how to join by video. Not the content."],
        ["Insurance update", "State which plans you accept now, as listed on your website, with a link."],
        ["Telehealth", "Explain who can use video sessions in which states, if you are licensed there."],
        ["Group or workshop", "Give the date, time, topic and sign-up link. Say it is not individual therapy."],
        ["Community resources", "Point to a local support line or a public resource, with the 988 line noted."],
        ["Holiday closure", "Say the dates closed and how to reach someone if needed, with the emergency note."],
        ["Awareness days", "Mention an awareness month and a service you offer, without a call to feel better."],
      ),
      h2("What never goes in a post"),
      p(
        "Posts are public, indexed and visible to anyone. Do not mention a client, even in disguise, and do not post a review quote as if it were a result. Avoid diagnoses, treatment names that imply outcomes, and phrases like we can help you overcome. The American Counseling Association's [code of ethics](https://www.counseling.org/resources/ethics) sets expectations about advertising and client privacy that apply here."
      ),
      ul(
        "No before-and-after language or promises of improvement.",
        "No client names, initials, stories or anything that could identify someone.",
        "No images of clients, and no stock photos that imply a clinical situation.",
        "No urgent-care wording. Direct anyone in crisis to 988 or 911."
      ),
      h2("Format that works"),
      p(
        "Keep the text to a few short sentences, lead with the useful fact, and include one clear action such as call or learn more. Add a real photo of the office, the waiting area or the team, because posts with a picture are more likely to be read. Our guide on [what to post on a Google Business Profile](/guides/what-to-post-on-google-business-profile-for-a-medical-practice) covers the general mechanics, including the offer and update post types."
      ),
      h3("Posting rhythm"),
      p(
        "A steady rhythm beats a burst. One or two posts a week is enough, and a short list of reusable ideas stops the weekly question of what to write. Posts expire from view after a time, so repeat a useful one, such as new openings, whenever it is true again. Tie your schedule to the [monthly profile maintenance checklist](/guides/monthly-google-business-profile-maintenance-checklist) so it does not slip."
      ),
      h2("Check the link and the number"),
      p(
        "Every post that has a button should send people to a page that answers the post's promise. If the post mentions a workshop, link to the workshop page, not the home page. Use tagged links as described in [UTM links for profile and directory clicks](/guides/utm-links-to-track-google-business-profile-and-directory-clicks-for-a-medical-practice) so you can count the visits."
      ),
    ],
    faqs: [
      {
        q: "Can a counseling practice post client testimonials?",
        a: "It is safer not to. Testimonials can imply results and may compromise privacy, and professional ethics codes limit them. Show trust with credentials, real photos and clear policies instead, and answer reviews carefully without confirming anyone is a client.",
      },
      {
        q: "How often should we post?",
        a: "One or two times a week is plenty. Consistency matters more than volume. Keep a short list of ideas and rotate them, and skip a week rather than publish something inaccurate.",
      },
      {
        q: "Should posts mention specific conditions?",
        a: "Avoid it. Naming a condition in a post can read as a clinical claim and may feel like targeting. Describe services in general terms, such as individual counseling for adults, and put detail on your website pages.",
      },
      {
        q: "Do posts help us rank?",
        a: "Google does not say that posts are a ranking factor. They help the profile look current and give people a reason to act. Treat any ranking effect as unproven, and judge them by calls and clicks.",
      },
      {
        q: "Do we need a photo on every post?",
        a: "A real photo is a good habit, and our standard is to include one. Use pictures of the office or team. Avoid stock images of distressed people, which can feel clinical or exploitative.",
      },
    ],
    citations: [GBP_X_POSTS, ACA_ETHICS, CDC_988, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/what-to-post-on-google-business-profile-for-a-medical-practice", label: "What To Post On A Profile", description: "General post guidance." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "Keep posting on a schedule." },
      { href: "/guides/online-workshop-and-webinar-page-with-event-markup-for-a-counseling-practice", label: "Workshop Page", description: "A page for a post to link to." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1497
  {
    slug: "weekly-review-monitoring-routine-for-a-counseling-practice-google-profile",
    keyword: "weekly review monitoring routine for a counseling practice google profile",
    category: "Checklist",
    title: "Weekly Review Routine For A Counseling Practice",
    metaTitle: "Weekly Review Routine For A Counseling Practice",
    metaDescription:
      "A ten-minute weekly routine for a counseling practice to watch new Google reviews, reply safely and spot problems early. Call (561) 291-2681.",
    answer:
      "Once a week, open the Google profile, read every new review, reply to each without confirming the person is a client, flag any that break Google's rules, and note the count. Ten minutes is enough, and a named person should own the task with a backup for vacations.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why weekly"),
      p(
        "A review that sits unanswered for a month looks like a practice that is not paying attention. For a counseling practice, a careless reply can do real harm, because even thanking someone by name can confirm that they were a client. A short weekly routine makes the replies quicker and the wording more careful."
      ),
      p(
        "It also catches problems early: a review that is clearly spam, a listing edit nobody approved, or a sudden change in the rating. Those are easy to fix in the first week and hard to explain after three months. A [free Google Alert on the practice name](/guides/setting-up-a-free-google-alert-for-the-practice-name-and-provider-names-to-catch-wrong-listings-and-impersonation) can add a second early signal for wrong listings and copied pages."
      ),
      h2("The ten-minute routine"),
      ol(
        "Open the Google profile while signed in as a manager, and go to the reviews section.",
        "Read every review that arrived since last week, including ones without text.",
        "Reply to each one using the approved wording, with no mention of treatment, dates or the person's name.",
        "Flag any review that looks fake, off-topic or abusive, and note it in a shared log.",
        "Write down the total number of reviews and the average rating in the log.",
        "Check the profile for suggested edits, new photos from the public and any message waiting."
      ),
      h2("Who does it"),
      p(
        "Name one person, and name a backup. Without a name the task drifts. The person should have manager access to the profile through the practice's own account, not a personal one that leaves with an employee, a point made in [who should own a practice's Google accounts](/guides/who-should-own-a-medical-practices-google-accounts-and-domain)."
      ),
      h2("Reply wording that protects privacy"),
      p(
        "Write replies that would be safe to read aloud in a waiting room. Thank the person for the feedback, say that you take comments seriously, and give a phone number for anyone who wants to talk offline. Do not say thank you for coming in, do not mention sessions, and do not respond to details a reviewer shares. The model in [responding to positive reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) applies equally to a counseling practice."
      ),
      table(
        ["Review type", "Weekly action"],
        ["Positive", "Short thank-you with no confirmation of care."],
        ["Negative, genuine", "Calm public reply, move the conversation to a phone call."],
        ["Appears fake or off-topic", "Report it through the profile and keep a note of the date."],
        ["Mentions a clinician who left", "Reply generally and follow your policy on staff changes."],
      ),
      h3("Keep a simple log"),
      p(
        "A shared sheet with the date, the review count, the average rating and any action taken is enough. After a few months it shows whether reviews are growing, whether replies are timely and when a problem began. It also gives the next person a place to start if the task changes hands."
      ),
      h2("Do not ask for reviews in the wrong way"),
      p(
        "Monitoring is a separate job from asking. When you ask clients for reviews, make the request open to everyone and never screen who gets it, as explained in [getting more reviews without review gating](/guides/getting-more-patient-reviews-without-review-gating). Keep the weekly check focused on reading and replying."
      ),
      h3("Handling a week with nothing new"),
      p(
        "Some weeks bring no reviews. Record the count anyway and use the time for the rest of the checklist: look at the profile photos, confirm the hours and holiday closures, and read the questions section. A quiet week in the log is useful, because it shows what normal looks like and makes a sudden change easier to notice. Once a month, add the [search terms from the profile's performance report](/guides/reading-the-google-business-profile-search-terms-report-each-month-to-see-how-patients-find-a-primary-care-practice) to the same log, so the sheet records what people typed as well as what they wrote in reviews."
      ),
    ],
    faqs: [
      {
        q: "How quickly should we reply to a review?",
        a: "Within about a week is a sensible target, and sooner for a negative one. The weekly routine makes that automatic. Quick, calm replies show that the practice pays attention, which readers notice.",
      },
      {
        q: "Can we reply to a negative review from a client?",
        a: "Yes, but carefully. Do not confirm the person was a client, do not discuss anything about care, and do not argue. Say you take feedback seriously and invite a phone call. Then handle the matter privately.",
      },
      {
        q: "What if we see a review we think is fake?",
        a: "Report it through the profile with the policy it breaks, keep a note of the date and do not accuse anyone in public. Removal takes days or longer, and a calm reply while you wait is reasonable.",
      },
      {
        q: "Should we turn on email alerts?",
        a: "Yes. Alerts for new reviews help you reply sooner, but they do not replace the weekly check. Alerts can land in an inbox nobody reads, so keep the review of the profile itself as a scheduled task.",
      },
      {
        q: "Who should have access to the profile?",
        a: "The owner and one or two named managers, using work accounts. Remove access the day someone leaves. A profile controlled through one person's private account is a common cause of lost listings.",
      },
    ],
    citations: [GBP_X_REVMAN, ACA_ETHICS, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-respond-to-a-negative-patient-review", label: "Responding To A Negative Review", description: "Wording for the hard ones." },
      { href: "/guides/how-to-handle-a-fake-google-review-on-a-medical-listing", label: "Handling A Fake Review", description: "What to report and how." },
      { href: "/guides/monthly-google-business-profile-maintenance-checklist", label: "Monthly Profile Checklist", description: "The longer monthly version." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- 1498
  {
    slug: "contact-form-confirmation-email-wording-for-a-primary-care-practice-without-health-details",
    keyword: "contact form confirmation email wording for a primary care practice without health details",
    category: "How-to",
    title: "Contact Form Confirmation Email For Primary Care",
    metaTitle: "Contact Form Confirmation Email For Primary Care",
    metaDescription:
      "Wording for the automatic email a primary care practice sends after a web form, with no health details and a clear next step. Call (561) 291-2681.",
    answer:
      "The confirmation email after a web form should say the office received the request, when someone will reply, how to call if it is urgent, and what to do in an emergency. It must not repeat what the person typed or mention health details, in the subject or the body.",
    author: "Liam Costello",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("Why this small email matters"),
      p(
        "After someone submits a form on your website, the first thing they see is a thank-you page. The second is an email. If that email is missing, people wonder whether the form worked and call again, or try a competitor. If it is careless, it can expose information in an inbox that someone else may read."
      ),
      p(
        "The rule is to confirm receipt and set expectations, nothing more. The email is not the place to repeat the person's message, give advice or discuss why they want to be seen."
      ),
      h2("A safe structure"),
      ol(
        "A neutral subject line, such as We received your request.",
        "One sentence confirming the office got it.",
        "One sentence saying when a staff member will reply, by phone or email.",
        "The office phone number for anything urgent, with office hours.",
        "A line that emergencies should go to 911, not this email."
      ),
      h2("Sample wording"),
      p(
        "Here is a version a front desk can adapt. Thank you for contacting our office. We received your request and a member of our team will reply within one business day. If you need to reach us sooner, call the number below during office hours. If this is an emergency, call 911. Please do not reply to this email with health information."
      ),
      p(
        "Read it for what it leaves out: no name of the service requested, no reason for visit, no provider, no date. A message that says we received your request for a visit about a particular condition could be read by anyone with access to the inbox or the lock screen."
      ),
      h2("What to leave out"),
      ul(
        "Do not copy the message from the form into the email.",
        "Do not name the provider, service or reason for the visit in the subject line.",
        "Do not include a link that signs the person into a portal unless it requires a login.",
        "Do not promise an appointment time. Say a staff member will follow up.",
        "Do not add a long disclaimer. One line asking people not to send health details by email is enough."
      ),
      h3("What HHS says about email"),
      p(
        "The U.S. Department of Health and Human Services states that HIPAA permits providers to use email with patients if reasonable safeguards are used, and that patients may choose it for themselves. A plain confirmation without health details is low risk, but check your practice's policy and [HHS guidance on email](https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-communicate-with-patients/index.html) when you design a message that goes further."
      ),
      h2("Make sure it arrives and gets counted"),
      p(
        "A confirmation that goes to spam is worse than none. Send it from a practice domain address and test delivery, using the steps in [contact form emails going to spam or never arriving](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website). Pair it with the [thank-you page that tracks the submission](/guides/thank-you-page-after-a-contact-form-on-a-medical-practice-website-what-to-say-and-how-to-track-it), so the count of requests matches the count of emails."
      ),
      h3("Review it twice a year"),
      p(
        "Read the email as a stranger would, on a phone lock screen and in a spam folder. Check that the hours and phone number are current, that the reply time is still true and that the sender name is one the person will recognize. Small details such as an old phone number in an automatic message are easy to miss because nobody opens the email after it is built."
      ),
    ],
    faqs: [
      {
        q: "Does the email need to come from a real person?",
        a: "It should come from a monitored practice address, not a no-reply address. If someone replies, a person should read it. A friendly, plain sender name such as the practice name works well.",
      },
      {
        q: "Should the confirmation say the reason the person contacted us?",
        a: "No. Repeating the reason puts health details into an email and a notification preview. Say that the request was received and when someone will follow up, and leave the details for the phone call.",
      },
      {
        q: "How fast should we promise a reply?",
        a: "Promise only what the front desk can deliver, such as one business day. A short promise that is kept builds more trust than a quick one that is missed. Check it against your response-time log.",
      },
      {
        q: "Can the email include a link to the new-patient forms?",
        a: "Yes, if the forms are on a secure page and do not display anyone's information. Put the link in a sentence that explains what it is. Do not attach filled forms to an email.",
      },
      {
        q: "What if the person writes back with health details?",
        a: "Have staff reply by phone or direct them to the patient portal, and do not continue the thread by email. The standard line asking people not to include health details in email reduces how often this happens.",
      },
    ],
    citations: [HHS_EMAIL, HHS_PRIVACY, GOOGLE_HELPFUL, FL_BOM],
    links: [
      { href: "/guides/new-patient-welcome-text-or-email-for-a-medical-practice", label: "New Patient Welcome Message", description: "The message that follows the booking." },
      { href: "/guides/online-appointment-request-form-fields-for-a-primary-care-practice-what-to-ask-and-what-to-leave-out", label: "Appointment Request Form Fields", description: "What the form should ask." },
      { href: "/guides/missed-call-text-back-message-for-a-primary-care-practice", label: "Missed Call Text Back", description: "A similar short message by text." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N1
  {
    slug: "excluding-staff-and-internal-traffic-from-google-analytics-4-on-a-medical-practice-website",
    keyword: "excluding staff and internal traffic from google analytics 4 on a medical practice website",
    category: "How-to",
    title: "Exclude Staff Visits From Google Analytics 4",
    metaTitle: "Exclude Staff Visits From Google Analytics 4",
    metaDescription:
      "How a practice can keep staff visits and test form submissions out of Google Analytics 4 so lead and call counts stay honest. Call (561) 291-2681.",
    answer:
      "Define the office network as internal traffic in Google Analytics 4, switch the internal-traffic filter from testing to active, and tag staff and test submissions so they never count as leads. Check the result a week later. Without this, a small practice's own visits can inflate its numbers.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 6,
    sections: [
      h2("Why a small site needs this"),
      p(
        "A medical practice website might get a few hundred visits a month. Staff open it to check hours, managers test the contact form, a marketer clicks around after each update. On a site that small, those visits are a visible share of the total, and a test form submission can show up as a lead that never was."
      ),
      p(
        "Inflated numbers cause bad decisions. A practice that believes it received eight form leads when five were tests may stop looking for the reason leads are low. Cleaning the data is a one-time task that makes every later report more trustworthy."
      ),
      h2("Step by step"),
      ol(
        "Find the office's public IP address. Search for what is my IP address from a computer on the office network. Note that the address can change.",
        "In Google Analytics, open Admin, then Data streams, choose the website stream, and select the option to configure tag settings.",
        "Choose Define internal traffic and create a rule with a name such as Office, matching that IP address.",
        "Go to Admin, then Data settings, then Data filters, and find the Internal Traffic filter. It starts in Testing mode.",
        "Check in the reports that the traffic is being labeled internal, then change the filter state to Active."
      ),
      p(
        "Google's own help pages describe the menus, which change from time to time, so use [Google's instructions for filtering out internal traffic](https://support.google.com/analytics/answer/10104470) for the current names. The structure stays the same: define the traffic, then filter it."
      ),
      h2("The limits of an IP filter"),
      p(
        "An IP filter only catches visits from the office network. Staff working from home, on a phone or on a mobile connection will still count. If your office IP address changes, which is common on residential-grade internet, the rule stops working until you update it."
      ),
      table(
        ["Source of noise", "Better fix"],
        ["Office computers", "IP-based internal traffic rule."],
        ["Staff at home", "Ask staff to visit through a bookmark with a test parameter, or browse in a profile with the Google Analytics opt-out extension."],
        ["Test form submissions", "Use a recognizable test name and email so they can be removed from counts."],
        ["Agency or developer visits", "Add their IP, or ask them to use the opt-out."],
      ),
      h3("Keep test leads out of the lead count"),
      p(
        "The most harmful noise is the test submission. Adopt a rule that any test uses a name beginning with TEST, and exclude those from the monthly count. That rule works with the habits in [a monthly lead count sheet](/guides/monthly-lead-count-sheet-for-a-primary-care-practice), where each lead is a real person asking for care."
      ),
      h2("Check it worked"),
      p(
        "A week after switching the filter to Active, open the Realtime report from the office and confirm your own visit does not appear in the filtered data. Then compare the month's sessions with the month before. A small drop is normal and means the cleaning worked. Our walkthrough of [setting up Google Analytics 4 for a medical practice](/guides/how-to-set-up-google-analytics-4-for-a-medical-practice) shows where this fits among the other setup steps. With the filter active, [the landing pages report](/guides/reading-the-google-analytics-landing-pages-report-to-see-which-pages-new-visitors-enter-on-at-a-counseling-practice) gives a cleaner view of which pages new visitors enter on."
      ),
      p(
        "Do not use the data to identify patients, and do not collect any personal details in analytics. The filter is about removing your own staff from the counts, nothing else."
      ),
    ],
    faqs: [
      {
        q: "Will the filter delete old data?",
        a: "No. An active internal traffic filter excludes matching events from the moment it is on. It does not remove data that was already collected, so earlier months will still contain staff visits. Note the date you switched it on.",
      },
      {
        q: "What if our office IP address changes?",
        a: "The rule stops matching, and staff visits come back into the data. Ask your internet provider whether the address is fixed, and review the rule when the router or provider changes. A quarterly check is enough.",
      },
      {
        q: "Should we filter test form submissions too?",
        a: "Yes, by process. Use a name that starts with TEST and exclude those from the lead count. If the form sends an email to the practice, warn the team before testing so the message is not mistaken for a real request.",
      },
      {
        q: "Does this affect Google Search Console numbers?",
        a: "No. Search Console counts clicks from Google search results and is separate from Analytics. Staff visits that arrive from a search result may still appear there, but they are usually a tiny share.",
      },
      {
        q: "Is this a privacy risk?",
        a: "Filtering your own office address is not. The risk to avoid is collecting personal or health information in analytics. Keep names, emails and form text out of tags, as covered in our guidance on privacy-safe tracking.",
      },
    ],
    citations: [GBP_X_GAINTERNAL, HHS_PRIVACY, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Setting Up GA4", description: "The full setup walk-through." },
      { href: "/guides/hipaa-safe-tracking-for-a-medical-website", label: "Privacy-Safe Tracking", description: "What not to send to analytics." },
      { href: "/guides/monthly-lead-count-sheet-for-a-primary-care-practice", label: "Monthly Lead Count Sheet", description: "A simple way to count real leads." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N2
  {
    slug: "toll-free-versus-local-phone-number-on-a-medical-practice-website-and-google-profile",
    keyword: "toll-free versus local phone number on a medical practice website and google profile",
    category: "Comparison",
    title: "Toll-Free Or Local Number For A Medical Practice",
    metaTitle: "Toll-Free Or Local Number For A Medical Practice",
    metaDescription:
      "Should a medical practice show a toll-free or a local phone number on its website and Google profile? Pros, cons, consistency. Call (561) 291-2681.",
    answer:
      "Use a local number as the main line on your website and Google profile, because patients and Google both tie it to your area. A toll-free number can sit beside it as a secondary line if you serve a wide area. Keep every listing consistent and tap-to-call.",
    author: "Liam Costello",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-09",
    readMinutes: 5,
    sections: [
      h2("The choice most practices face"),
      p(
        "Many practices own two numbers: the local line the front desk has used for years and a toll-free number set up for a billing service or a past marketing campaign. The question is which one belongs on the website, on the Google profile and in directories. The honest answer is one primary number, used the same way everywhere."
      ),
      h2("Local versus toll-free"),
      table(
        ["Factor", "Local number versus toll-free number"],
        ["Patient trust", "A local number signals a real office nearby. A toll-free number can read as a call center."],
        ["Google profile", "A local number matches the area and the address. A toll-free number is best listed as an additional number."],
        ["Calling from a mobile phone", "No difference for most plans."],
        ["Multi-state or telehealth", "A local number needs a note about where you serve. A toll-free number can suit a practice serving several states."],
        ["Consistency", "A local number is easy to repeat everywhere. Toll-free numbers often differ between listings."],
      ),
      p(
        "Patients searching for a nearby doctor expect a nearby number. A local number reinforces the sense that the office is where the map says it is. A toll-free number does not hurt on its own, but it can raise a question about whether the office is a real storefront."
      ),
      h2("What to do on the Google profile"),
      p(
        "Google's Business Profile guidelines let you list a primary phone number and additional numbers. Put the number that the front desk actually answers as the primary one, and add the other as additional if it rings the same office. The primary number should match your website. Questions about changing a number safely are covered in [call tracking numbers without changing the profile phone number](/guides/call-tracking-numbers-on-a-counseling-practice-website-without-changing-the-google-profile-phone-number)."
      ),
      ul(
        "Do not swap the profile's number for a tracking number without a plan for consistency.",
        "Do not list a number that rings a call center that cannot answer questions about the office.",
        "Do not leave a retired number on directories. Old numbers send patients to the wrong place.",
        "Do check that the number is not flagged as spam by mobile carriers."
      ),
      h2("Make the number easy to use"),
      p(
        "On a phone, the number should be a tap-to-call link at the top of every page, as described in [click-to-call buttons and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website). Write the number in text, too, because desktop visitors and printed pages need it. Use the same format everywhere, such as (561) 555-0100, to keep your citations tidy. To find every copy of the number, including ones sitting in images and downloadable forms, follow the steps in [phone number format and click-to-call links on every page](/guides/phone-number-format-and-click-to-call-links-on-every-page-of-a-medical-practice-website)."
      ),
      h3("If you serve more than one office"),
      p(
        "A practice with several offices should give each office its own local number on its own page, with one central number only if the front desk really routes calls from it. Our guide to the [NAP consistency problem](/guides/nap-consistency-what-breaks-it-and-how-to-fix-it) explains how a mismatch between listings makes a practice harder to find."
      ),
      h2("A simple decision rule"),
      p(
        "Choose the number that gets answered fastest by someone who knows the practice. Make it the primary number on the website and profile, keep any other number as a secondary line, and write down which number is used where. Then check for drift every quarter."
      ),
      h3("When you change numbers"),
      p(
        "If the practice moves to a new phone system or number, update the Google profile, the website header, the footer, the contact page and every directory in one sitting, and keep the old number forwarding for a long time. Patients keep old cards, old referral letters and old search results, and a number that suddenly rings nowhere costs real appointments. The [full list of places to check after a phone system or carrier change](/guides/what-to-check-on-the-website-and-google-profile-after-a-medical-practice-changes-its-phone-system-or-carrier) walks through the website, the Google profile and the test calls."
      ),
    ],
    faqs: [
      {
        q: "Can the Google profile show two numbers?",
        a: "Yes. A profile can list a primary number and additional numbers. Keep the primary one the same as on your website, and make sure every number listed rings the office, not an unrelated service.",
      },
      {
        q: "Is a toll-free number bad for SEO?",
        a: "Not by itself. The bigger issue is consistency. If your website, profile and directories show different numbers, it confuses both patients and search engines. A local primary number simply fits a single-area practice best.",
      },
      {
        q: "What about a practice with telehealth in several states?",
        a: "A toll-free number can make sense as an additional line, with a clear note about states served. Keep the local number for the office and say which license areas apply. Do not suggest you can see people where you are not licensed.",
      },
      {
        q: "Should the number be an image or text?",
        a: "Text, always, wrapped in a tap-to-call link. Images of numbers cannot be tapped, read by screen readers or copied, and search engines cannot read them. Text also lets you track taps on the link.",
      },
      {
        q: "How often should we check numbers across listings?",
        a: "Quarterly, and after any change of provider, move or phone system. Compare the website, Google profile, Apple and Bing listings and the main directories. Fix mismatches in the same sitting.",
      },
    ],
    citations: [GBP_X_EDIT, GOOGLE_HELPFUL, HHS_PRIVACY, FL_BOM],
    links: [
      { href: "/guides/nap-consistency-what-breaks-it-and-how-to-fix-it", label: "NAP Consistency", description: "Keep name, address and phone aligned." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call Layout", description: "Make the number tappable." },
      { href: "/guides/local-citation-building-checklist-for-a-medical-practice", label: "Local Citation Checklist", description: "Directories to keep consistent." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N3
  {
    slug: "pop-ups-banners-and-chat-widgets-on-the-mobile-page-of-a-medical-practice-website",
    keyword: "pop-ups banners and chat widgets on the mobile page of a medical practice website",
    category: "Checklist",
    title: "Pop-Ups And Banners On A Practice's Mobile Site",
    metaTitle: "Pop-Ups And Banners On A Practice's Mobile Site",
    metaDescription:
      "Pop-ups, cookie banners and chat widgets can hide the call button on a phone. A checklist for medical practice websites. Call (561) 291-2681.",
    answer:
      "On a phone, a pop-up, cookie banner or chat widget that covers the page can hide the call button and drive visitors away. Keep overlays small, delay them, make them easy to close, and test the page on a real phone to confirm the phone number and booking button stay visible.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 5,
    sections: [
      h2("Why overlays hurt on a phone"),
      p(
        "On a desktop screen a small banner is an annoyance. On a phone screen the same banner can cover half the page. A person searching for a doctor, often with one hand, lands on your page and sees a cookie notice, a chat bubble and a newsletter pop-up before they see a phone number. Many close the page instead of closing three boxes. A quick way to see whether an overlay is hiding your message is the five-second test in [what a new patient sees on a phone in the first five seconds](/guides/what-a-new-patient-sees-on-a-phone-in-the-first-five-seconds-of-a-primary-care-practice-home-page)."
      ),
      p(
        "Google has also said that intrusive interstitials, pop-ups that cover the main content right after a user arrives from search, can make a page harder to use and can affect how it is evaluated. You do not need to remove every overlay. You need to make sure they do not block what the visitor came for."
      ),
      h2("A mobile checklist"),
      table(
        ["Element", "Rule for a practice site"],
        ["Cookie or consent banner", "Keep it to a thin bar at the bottom, easy to dismiss, and never over the phone button."],
        ["Chat widget", "Place it so it does not cover the call or book buttons, and use it only if someone answers."],
        ["Newsletter pop-up", "Avoid on entry. If you use one, delay it and make the close button large."],
        ["Promotion bar", "One line, dismissible, not sticky over the main content."],
        ["Full-screen overlay", "Do not show one to people arriving from search."],
      ),
      h2("Check it on a real phone"),
      ol(
        "Open the home page and your top service page on your own phone, using mobile data, not office Wi-Fi.",
        "Count the taps needed to reach the phone number or booking button.",
        "Clear cookies or use a private window, because many banners show only on a first visit.",
        "Test in portrait and landscape, with the keyboard open on a form page.",
        "Ask someone who has never seen the site to find the phone number and time them."
      ),
      p(
        "If it takes more than one tap or five seconds, simplify. Layout fixes in [click-to-call buttons and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website) show how to keep the call button visible."
      ),
      h3("Chat widgets deserve special care"),
      p(
        "A chat box invites people to type, and people will type symptoms. Unless the tool is set up for protected health information and covered by an agreement, that is a risk. The privacy settings are covered in [live chat and chatbots on a medical practice website](/guides/live-chat-and-chatbots-on-a-medical-practice-website-privacy-settings-and-what-to-avoid). If nobody answers outside office hours, switch the widget off then, or say clearly when replies will come."
      ),
      h2("Cookie banners and consent"),
      p(
        "A consent banner is often required by tools you use, and the design is less important than that it works. Choose a compact one, make rejecting as easy as accepting, and do not load tracking before consent where your setup requires it. Whatever you choose, test that it does not cover the main call to action on a small screen."
      ),
      h2("Speed matters too"),
      p(
        "Each widget adds scripts, and scripts slow the page. After removing or shrinking an overlay, re-run a speed test and compare, using the approach in [the core web vitals checklist for a medical practice website](/guides/core-web-vitals-checklist-for-a-medical-practice-website). A faster page with fewer boxes is usually the one that earns the call. Before a web company adds another widget, [ask it these questions about speed, data and removal](/guides/what-to-ask-a-web-company-before-it-adds-a-new-plugin-or-script-to-a-medical-practice-website) and keep the answers in writing."
      ),
    ],
    faqs: [
      {
        q: "Are all pop-ups bad for a practice website?",
        a: "No. A small, dismissible notice for a closure or a new office is fine. The problem is an overlay that covers the main content on arrival or hides the phone number. Judge each one by whether it helps the visitor reach what they came for.",
      },
      {
        q: "Do we need a cookie banner?",
        a: "It depends on the tools you use and the laws that apply to your visitors. Your web developer or counsel can advise. If you need one, choose a compact design and test it on a phone.",
      },
      {
        q: "Should we use a chat widget at all?",
        a: "Only if a person answers during stated hours and the tool is configured for privacy. A bot that cannot answer or a chat nobody monitors frustrates patients. A visible phone number often does more.",
      },
      {
        q: "How do we test without a real phone?",
        a: "A browser's device mode is a start, but a real phone shows true behavior with its keyboard and cookies. Use both. Test on at least one iPhone and one Android phone if you can.",
      },
      {
        q: "Will removing a pop-up lower our email signups?",
        a: "It might lower the count, but the people who sign up under pressure are not always the most engaged. Move the signup to a simple form at the end of useful pages and compare sign-ups and calls after a month.",
      },
    ],
    citations: [GOOGLE_PAGE_EXP, GOOGLE_HELPFUL, HHS_PRIVACY],
    links: [
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-To-Call Layout", description: "Keep the call button visible." },
      { href: "/guides/live-chat-and-chatbots-on-a-medical-practice-website-privacy-settings-and-what-to-avoid", label: "Live Chat Privacy", description: "Settings and what to avoid." },
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Speed after the clean-up." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N4
  {
    slug: "blog-tag-category-and-archive-pages-on-a-medical-practice-website-index-or-noindex",
    keyword: "blog tag category and archive pages on a medical practice website index or noindex",
    category: "Checklist",
    title: "Blog Tag And Archive Pages: Index Or Noindex?",
    metaTitle: "Blog Tag And Archive Pages: Index Or Noindex?",
    metaDescription:
      "Tag, category and date archive pages can clutter a medical practice site's search presence. When to keep, merge or noindex them. Call (561) 291-2681.",
    answer:
      "Keep category pages that are curated and useful, and set noindex on tag, date and author archives that only repeat lists of posts. Leave them crawlable and linked so Google can still follow links, and check the Page indexing report after the change. Never block a page you want found.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("How archive pages pile up"),
      p(
        "Most blog systems create pages automatically. Every tag, every category, every month and every author gets a list page. A practice that publishes forty posts can end up with eighty list pages, most with a title, a short excerpt for each post and nothing else. Those pages are thin, and they look alike."
      ),
      p(
        "Having them is not a penalty. The cost is that search engines spend time on pages that help no one, and the pages that matter, your service and location pages, compete with a crowd of near-duplicates for attention."
      ),
      h2("What to keep, merge or hide"),
      table(
        ["Page type", "Usual decision"],
        ["Main blog or guides index", "Keep indexed. It is a real hub."],
        ["Category pages with an introduction", "Keep if each has a unique intro and a purpose."],
        ["Tag pages", "Noindex, or stop creating tags."],
        ["Date archives", "Noindex or disable."],
        ["Author archives (single author)", "Noindex, because it repeats the blog index."],
        ["Paginated pages 2, 3 and so on", "Keep crawlable, with a self-canonical tag."],
      ),
      h2("How to hide a page properly"),
      p(
        "The tool for this is the noindex robots meta tag, which asks search engines not to show the page in results. Google explains it in its page on [blocking indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing). Use noindex, not a robots.txt block, because a page blocked in robots.txt cannot be read, so Google may never see the noindex instruction."
      ),
      ul(
        "Add the tag in your site's settings or SEO plugin, not by hand on each page.",
        "Keep these pages out of the XML sitemap.",
        "Leave links on them followable so posts can still be discovered.",
        "Do not noindex a page you want people to find from search."
      ),
      h3("Do not break the pages that matter"),
      p(
        "Check which template you are changing before you save it. A setting meant for tag archives has occasionally been applied to the whole blog. After the change, open a service page and a post and confirm the tag is absent there. The [XML sitemaps and robots.txt guide](/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website) explains how to keep these files in step."
      ),
      h2("Check the result in Search Console"),
      p(
        "Give Google a few weeks to recrawl, then open the Page indexing report. Pages you marked should appear under excluded by noindex tag. That is the intended result, not an error. Our walkthrough of the [page indexing report](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website) explains the other labels you will see and which deserve action."
      ),
      p(
        "The goal is a tidy site: a few strong hub pages, clear categories, and no clutter around them. Fewer, better pages are easier for patients to use, too. If you keep the blog small and useful, [how often a practice should blog](/guides/should-a-medical-practice-blog-and-how-often) is the question to settle next."
      ),
      h3("Who should make the change"),
      p(
        "Make the change with whoever manages the website, and write down what was changed and on what date. If an SEO plugin is involved, take a copy of its settings first so you can undo a mistake. Archive settings are easy to apply too broadly, and a quick check of three or four important pages afterward is cheap insurance."
      ),
    ],
    faqs: [
      {
        q: "Will noindex remove the pages from my site?",
        a: "No. Visitors can still reach them. Noindex only asks search engines not to show them in results. If the pages serve no purpose for visitors either, consider removing them with a redirect to the main blog.",
      },
      {
        q: "Should I use robots.txt to block tag pages?",
        a: "Not as the main tool. A blocked page cannot be read, so Google cannot see a noindex tag on it, and the URL can still appear in results without a description. Use noindex and leave the page crawlable.",
      },
      {
        q: "Are category pages worth keeping?",
        a: "Yes, when each has an introduction that explains the topic and links to the most useful posts. A category page that is just a list is no better than a tag page. Treat the useful ones as small hub pages.",
      },
      {
        q: "How do we find all our archive pages?",
        a: "Look at your sitemap and run a crawl, or search Google for site:yourdomain.com/tag. Your blog platform's settings also list which archive types are enabled. Turn off the ones you do not want.",
      },
      {
        q: "Does noindex affect rankings of our posts?",
        a: "It should not harm them, because the posts remain indexable and linked. In practice, a cleaner set of indexed pages helps Google focus on the pages that matter. Check your top posts in Search Console after the change.",
      },
    ],
    citations: [GOOGLE_BLOCK, GOOGLE_ROBOTS, GOOGLE_CONSOLIDATE, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "Sitemaps And Robots.txt", description: "Keep both files in step." },
      { href: "/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website", label: "Page Indexing Report", description: "Read the labels correctly." },
      { href: "/guides/should-a-medical-practice-blog-and-how-often", label: "Should A Practice Blog", description: "Keep the blog small and useful." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N5
  {
    slug: "in-the-news-and-media-mentions-page-for-a-medical-practice-without-endorsement-claims",
    keyword: "in the news and media mentions page for a medical practice without endorsement claims",
    category: "How-to",
    title: "In The News Page For A Medical Practice",
    metaTitle: "In The News Page For A Medical Practice",
    metaDescription:
      "How a medical practice can publish a media mentions page with links, dates and permission, and no endorsement or outcome claims. Call (561) 291-2681.",
    answer:
      "An in-the-news page lists where the practice or its clinicians were quoted or featured, with the outlet, the date, a link and one neutral sentence. Get permission for logos, quote only what was published, and avoid implying an endorsement of the practice or its results.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-04",
    readMinutes: 5,
    sections: [
      h2("What the page is for"),
      p(
        "When a local newspaper, radio station or community site quotes a clinician, that is useful proof that the practice is part of the community. It is proof a patient can check, because the link goes to a source you do not control. A page that gathers those mentions gives visitors a reason to trust you, and it gives other publications a place to see what you have been asked about."
      ),
      p(
        "Many practices let these mentions sit in a social post that disappears. A tidy page keeps them findable and gives each one a stable web address."
      ),
      h2("What each entry should include"),
      table(
        ["Field", "What to write"],
        ["Outlet", "The name of the publication, show or site, exactly as it appears."],
        ["Date", "The date it was published or aired."],
        ["Link", "The direct link to the piece, opened in a way that is clear to the reader."],
        ["One neutral line", "What the piece was about and the clinician's part, such as was interviewed about school-year scheduling."],
        ["Format", "Article, radio, video or event. Add a transcript or captions for audio and video."],
      ),
      h2("Keep claims honest"),
      p(
        "A mention is not an endorsement. Do not write that a publication recommends the practice, ranked it, or called it the best unless that is what the piece said and you quote it exactly. Do not describe health outcomes the piece may have repeated. The Federal Trade Commission's guidance on endorsements makes clear that how you present third-party statements matters, and the same care applies here."
      ),
      ul(
        "Do not copy full articles. Link out and summarize in a sentence.",
        "Do not use an outlet's logo without permission. Plain text is enough.",
        "Do not quote anything about a patient or a case.",
        "Do not call something an award unless the group that gave it confirms the wording."
      ),
      h3("Ask before you list someone else"),
      p(
        "If a piece also quotes another professional or names a patient group, check that they are comfortable being linked to your page. For clinicians on your team, confirm they want the piece listed. A short written yes protects the relationship."
      ),
      h2("Make it work for search and AI"),
      p(
        "Each entry is a link to an outside source, which supports the idea that the practice is real and active. Link the page from your about page and the footer, and mention the strongest entries on the clinician's bio page, as suggested in [writing a doctor bio page that ranks](/guides/how-to-write-a-doctor-bio-page-that-ranks). For a practice that sponsors or hosts events, [local sponsorships and community events](/guides/local-sponsorships-and-community-events-for-a-medical-practice-and-the-links-they-earn) often lead to the coverage that fills this page."
      ),
      p(
        "Review the page every quarter. Remove links that no longer work and add new ones with the date. A short, current page is better than a long one full of broken links. You can also work toward more coverage with a [press release that helps SEO](/guides/press-release-for-a-medical-practice-that-helps-seo) when the practice has real news."
      ),
      h3("Where to start"),
      p(
        "If you have no coverage yet, start small. Offer a clinician as a source to a local paper or community newsletter on a seasonal topic such as the school year or the holidays, and keep the offer short and useful. One genuine mention is enough to start the page, and it is better to have three honest entries than a dozen vague ones."
      ),
    ],
    faqs: [
      {
        q: "Do we need permission to link to an article?",
        a: "Linking to a public article does not usually need permission. Using logos, copying text or implying a partnership is different. Use plain text for the outlet name and a short summary of your own, and avoid anything that looks like an endorsement.",
      },
      {
        q: "Can we call the page Featured In?",
        a: "Be careful. Featured In can suggest a major outlet endorsed you. In the news or media mentions is more accurate for local coverage. Pick the wording that describes what the entries really are.",
      },
      {
        q: "Should we include coverage that is years old?",
        a: "Yes, with the date, as long as the link works and the content is still accurate. Remove anything that mentions a provider who has left, an old address or a service you no longer offer.",
      },
      {
        q: "What if a piece quotes a clinician on a health topic?",
        a: "List it neutrally as an interview on that topic. Do not repeat clinical statements on your page. The outlet is responsible for its article, and your page only points to it.",
      },
      {
        q: "Does the page help SEO?",
        a: "It supports trust and gives people another way to verify the practice. Links to outside sites are not a ranking trick. Treat any SEO benefit as a side effect of a page that is useful to patients.",
      },
    ],
    citations: [GOOGLE_HELPFUL, HHS_PRIVACY, FL_BOM],
    links: [
      { href: "/guides/press-release-for-a-medical-practice-that-helps-seo", label: "Press Release Guide", description: "Create news worth covering." },
      { href: "/guides/how-to-write-a-doctor-bio-page-that-ranks", label: "Doctor Bio Page", description: "Where to mention coverage." },
      { href: "/guides/what-is-eeat-and-why-it-matters-for-medical-practices", label: "E-E-A-T For Practices", description: "Why third-party proof matters." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
  // ---------------------------------------------------------------- N6
  {
    slug: "splitting-a-small-monthly-marketing-budget-for-a-counseling-practice",
    keyword: "splitting a small monthly marketing budget for a counseling practice",
    category: "Playbook",
    title: "Splitting A Small Marketing Budget For Counseling",
    metaTitle: "Splitting A Small Marketing Budget For Counseling",
    metaDescription:
      "How a counseling practice with a small monthly budget can split it between the Google profile, website pages, directories and ads. Call (561) 291-2681.",
    answer:
      "With a small budget, fix the free and cheap foundations first: an accurate Google profile, clear service pages, one or two paid directories and a way to count inquiries. Add paid search only after those work and the practice can answer every inquiry quickly. Review the split every quarter.",
    author: "Gio LaRoche",
    publishDate: "2026-11-04T15:00:00Z",
    dateModified: "2026-11-10",
    readMinutes: 6,
    sections: [
      h2("Start with the order, not the amounts"),
      p(
        "A counseling practice with a small marketing budget often asks how to divide it. The better question is what order to spend in. Some steps cost mostly time and have the biggest effect on whether a person who finds the practice actually calls. Others cost money every month and only pay off once the earlier steps are working."
      ),
      p(
        "This guide gives an order and a way to split, not fixed dollar amounts, because the right numbers depend on caseload, location and how many openings the practice has. Any figure you see quoted as typical is a guess."
      ),
      h2("A sensible order"),
      table(
        ["Step", "What it is and what it costs"],
        ["1. Google profile", "Correct hours, services, categories, photos and a weekly review check. Costs time."],
        ["2. Core pages", "A clear home page, service pages and a contact page that works on a phone. Time or one-time cost."],
        ["3. Counting", "A way to count calls and form inquiries each month. Costs time."],
        ["4. Directories", "One or two respected therapist directories with accurate profiles. A monthly fee."],
        ["5. Paid search", "Ads for the services you most want to fill, with tight limits. Monthly spend."],
      ),
      h2("Why paid ads come last"),
      p(
        "Ads send people to your site. If the site is slow, vague or hard to use on a phone, the money is wasted. If the front desk cannot answer within a day, the inquiry goes elsewhere. Google also has special rules for health-related ads, described in its [healthcare and medicines policy](https://support.google.com/adspolicy/answer/176031), and an unprepared account can be limited or refused. Our guide to [what Google Ads costs a medical practice](/guides/google-ads-cost-for-a-medical-practice) explains the cost side."
      ),
      ul(
        "Do not start ads before the website has a working phone link and a form that sends to a monitored inbox.",
        "Do not mix several goals in one campaign. Pick the one service with open space.",
        "Set a monthly cap you can afford to lose while you learn.",
        "Never target or word ads in a way that implies knowing someone's health."
      ),
      h3("What to measure"),
      p(
        "Count real inquiries each month: calls from the profile and website, form requests, and how many became first sessions. A simple sheet is enough. The method in [how did you hear about us](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing) adds the answer straight from the client. Without counts, you cannot tell which money is working."
      ),
      h2("Reviewing the split"),
      p(
        "Every quarter, look at where inquiries came from and what each channel cost in money and time. Move spending toward what produces first sessions and away from what only produces clicks. If the schedule is full, pause paid spend and keep the foundations running. If openings are many, test a small paid campaign for the services with the most room. To make that comparison with real figures, [divide each channel's cost by the new inquiries it produced](/guides/working-out-the-cost-of-one-new-inquiry-from-the-website-compared-with-a-directory-listing-for-a-counseling-practice) over the same quarter."
      ),
      p(
        "A practice that wants help deciding can compare the choices in [SEO versus Google Ads for a therapy practice](/guides/seo-vs-google-ads-for-a-therapy-practice) and review the pricing context in [therapist marketing pricing](/guides/therapist-marketing-pricing). The aim is a budget that fits the caseload, not the largest budget possible."
      ),
      h3("Write the plan down"),
      p(
        "Put the split on one page: what is spent on each channel, who owns it, and what number tells you it is working. Share it with the owner and the person answering the phone. When everyone can see the plan, it is easier to resist a salesperson who promises fast results, and easier to notice when a channel has stopped earning its place. If the caseload fills up, see [what to pause in marketing when a counseling practice is full](/guides/what-to-pause-in-marketing-when-a-counseling-practice-has-a-full-caseload-and-a-waitlist) before you move money from one line to another."
      ),
    ],
    faqs: [
      {
        q: "How much should a counseling practice spend each month?",
        a: "There is no honest universal number. It depends on the number of open sessions, the value of a new client and what the practice can afford. Start with the free foundations, then add spending in small steps and review the results.",
      },
      {
        q: "Should we pay for a directory listing?",
        a: "One or two well-known therapist directories can be worth it if the profile is accurate and complete, and if you track the inquiries they send. Cancel any listing that sends none after a reasonable trial, such as three months.",
      },
      {
        q: "Are social media ads a good use of a small budget?",
        a: "Usually not first. Social ads show to people who are not searching for help, and health-related targeting is restricted. Search-based channels reach people who are actively looking. Add social later, if at all.",
      },
      {
        q: "What if our caseload is full?",
        a: "Pause paid spending and maintain the foundations, so a waitlist or a new clinician can fill quickly later. A waitlist page and honest availability wording help. Review in a quarter or when openings appear.",
      },
      {
        q: "How do we know the spend is working?",
        a: "Count first sessions, not clicks. Track where each new client says they found you, and compare against what each channel cost. Even a simple monthly tally is better than relying on impressions or traffic.",
      },
    ],
    citations: [GBP_X_EDIT, GOOGLE_ADS_HEALTH, ACA_ETHICS, GOOGLE_HELPFUL],
    links: [
      { href: "/guides/seo-vs-google-ads-for-a-therapy-practice", label: "SEO Or Google Ads", description: "Compare the two channels." },
      { href: "/guides/therapist-marketing-pricing", label: "Therapist Marketing Pricing", description: "What marketing help costs." },
      { href: "/guides/psychology-today-and-therapist-directory-profiles-for-a-counseling-practice", label: "Therapist Directory Profiles", description: "Choosing directories." },
      { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." },
    ],
  },
];
