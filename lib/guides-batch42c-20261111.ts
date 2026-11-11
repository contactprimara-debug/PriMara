// -- Guides batch 42c - 2026-11-11 --
// Guide/AEO pages from the Command Center queue (rows 1739, 1740, 1743, 1744, 1745, planned 2026-11-11), built by the page
// factory to ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Plain practical
// guidance, no legal advice, no outcome promises, no patient details.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const GBP_EDIT = {
  publisher: "Google Business Profile Help",
  label: "Edit your Business Profile",
  href: "https://support.google.com/business/answer/3039617",
};
const GBP_OWNERS = {
  publisher: "Google Business Profile Help",
  label: "Manage your Business Profile owners & managers",
  href: "https://support.google.com/business/answer/3403100",
};
const SC_PERMS = {
  publisher: "Search Console Help",
  label: "Managing owners, users, and permissions",
  href: "https://support.google.com/webmasters/answer/7687615",
};
const GA_ROLES = {
  publisher: "Analytics Help",
  label: "Access and data-restriction management",
  href: "https://support.google.com/analytics/answer/9305587",
};
const HC_DEDUCTIBLE = {
  publisher: "HealthCare.gov",
  label: "Glossary: Deductible",
  href: "https://www.healthcare.gov/glossary/deductible/",
};
const HC_COINSURANCE = {
  publisher: "HealthCare.gov",
  label: "Glossary: Coinsurance",
  href: "https://www.healthcare.gov/glossary/co-insurance/",
};
const HC_COPAY = {
  publisher: "HealthCare.gov",
  label: "Glossary: Copayment",
  href: "https://www.healthcare.gov/glossary/co-payment/",
};
const HC_ALLOWED = {
  publisher: "HealthCare.gov",
  label: "Glossary: Allowed amount",
  href: "https://www.healthcare.gov/glossary/allowed-amount/",
};
const HC_NETWORK = {
  publisher: "HealthCare.gov",
  label: "Glossary: Network",
  href: "https://www.healthcare.gov/glossary/network/",
};
const SCHEMA_FAX = {
  publisher: "Schema.org",
  label: "faxNumber property",
  href: "https://schema.org/faxNumber",
};
const GOOGLE_LOCAL_BUSINESS = {
  publisher: "Google Search Central",
  label: "Local Business (LocalBusiness) Structured Data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
};
const GOOGLE_DMARC = {
  publisher: "Google Workspace Admin Help",
  label: "Set up DMARC",
  href: "https://support.google.com/a/answer/2466580",
};
const GOOGLE_SPF = {
  publisher: "Google Workspace Admin Help",
  label: "Set up SPF",
  href: "https://support.google.com/a/answer/10685031",
};
const GMAIL_SENDER = {
  publisher: "Gmail Help",
  label: "Email sender guidelines",
  href: "https://support.google.com/a/answer/81126",
};
const HHS_PRIVACY = {
  publisher: "U.S. Department of Health & Human Services",
  label: "HIPAA Privacy Rule overview",
  href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
};
const HHS_EMAIL = {
  publisher: "U.S. Department of Health & Human Services",
  label: "Does HIPAA permit health care providers to use email to discuss health issues with patients?",
  href: "https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty5C: Guide[] = [
  // ---------------------------------------------------------------- 1739
  {
    slug: "fax-number-on-a-medical-practice-website-and-google-profile-whether-to-publish-it-and-what-to-tell-patients",
    keyword: "whether a medical practice should publish a fax number on its website and Google profile, and what to say to patients who ask to fax records",
    category: "How-to",
    title: "Should a Practice Publish a Fax Number Online?",
    metaTitle: "Should a Medical Practice Publish a Fax Number Online?",
    metaDescription:
      "Whether to list a fax number on a practice website and Google profile, who it is for and what to tell a patient who wants to fax records. (561) 291-2681",
    answer:
      "Publish a fax number only if referring offices and other providers need it, and label it for them. Keep it off the Google profile, where patients look for a phone number, and tell patients who ask to fax records to call first so staff can name the safest way to send them.",
    author: "Liam Costello",
    publishDate: "2026-11-11T16:00:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Who a fax number is for"),
      p(
        "Faxes are still common between medical offices, labs, pharmacies and hospitals. A patient rarely needs your fax number, but a referring doctor's office often does. Publishing one number for everyone, in the same place as your phone number, invites patients to fax things that may not reach the right desk."
      ),
      p(
        "So the question is not whether a fax number exists. It is who should see it and what you want them to do with it."
      ),
      h2("Where a fax number helps and where it does not"),
      table(
        ["Place", "Recommendation"],
        ["Google Business Profile", "Do not use the fax number as the main phone; keep the main phone for patients"],
        ["Contact page", "Optional, in a labelled line for referring offices"],
        ["Referral partner page", "Yes, with the referral instructions, kept separate from the patient phone"],
        ["Page footer", "Phone only; leave out the fax"],
        ["Page code (schema)", "Optional; a faxNumber field exists for it"]
      ),
      p(
        "Google's profile help makes the primary phone the number patients use to call; see the notes on [editing your Business Profile](https://support.google.com/business/answer/3039617). A fax number there can send callers to a machine."
      ),
      h2("How to label it"),
      p(
        "Use a plain heading such as 'For referring offices and other providers' and put the fax number under it, next to what to send and how long to expect a reply. Our guide on a [referral partner page for a primary care practice](/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you) shows where this fits."
      ),
      ul(
        "Say who the number is for: other providers and offices.",
        "Say what to send: referrals, records requested by the practice, orders.",
        "Say what not to send: patient requests for appointments or messages.",
        "Give the phone number for any question about whether something arrived."
      ),
      h2("What to tell a patient who wants to fax records"),
      p(
        "Staff should not simply give the number. They should ask the patient to call the office first, so someone can name what is needed, who it is for and the safest way to send it. A script could be: 'Thanks for asking. Please call the front desk so we can tell you the best way to send that and make sure it reaches the right person.'"
      ),
      p(
        "Faxes can be misdialed, and a paper copy can sit in a tray. The practice's privacy and security rules decide what is acceptable, so the front desk should follow the practice's written policy. The overview at [HHS on the HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html) is a starting point for the owner and compliance advisor, not a script for staff."
      ),
      h3("If you use an online fax service"),
      p(
        "Some practices receive faxes by email through a service. In that case the destination inbox matters as much as the number. Use a shared role address, not one person's mailbox, as discussed in our guide on a [shared role mailbox](/guides/shared-role-mailbox-instead-of-a-staff-members-inbox-for-website-forms-at-a-medical-practice)."
      ),
      h2("Keep the number accurate everywhere"),
      p(
        "If you publish a fax number, it belongs on your vendor contact sheet and in your yearly review. A wrong fax number sends referrals to a stranger. Our [one-page vendor contact sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile) is the natural home for it, and the [schema fax property](https://schema.org/faxNumber) can be added by your web provider if you use structured data."
      ),
    ],
    faqs: [
      {
        q: "Should a medical practice list a fax number on its website?",
        a: "Only if referring offices or other providers need it. Label it for them and keep it separate from the patient phone number.",
      },
      {
        q: "Should the fax number go on the Google Business Profile?",
        a: "It is better to keep the main phone number for patients. A fax number there can send callers to a machine.",
      },
      {
        q: "What should the front desk tell a patient who wants to fax records?",
        a: "Ask them to call first so staff can say what is needed and the safest way to send it. Follow the practice's written policy.",
      },
      {
        q: "Is it safe to receive faxes by email?",
        a: "That depends on the service and your security policy. Use a shared role mailbox and have your compliance advisor approve the setup.",
      },
      {
        q: "Does a fax number help search rankings?",
        a: "Not directly. It can be added to structured data, but it is for referring offices, not for rankings.",
      },
    ],
    citations: [GBP_EDIT, SCHEMA_FAX, HHS_PRIVACY],
    links: [
      { href: "/guides/referral-partner-page-for-a-primary-care-practice-how-specialists-and-hospitals-find-you", label: "Referral Partner Page", description: "How other offices find you." },
      { href: "/guides/what-to-put-on-a-medical-practice-contact-page", label: "What to Put on a Contact Page", description: "Phone, address and forms." },
      { href: "/guides/medical-records-request-page-for-a-practice-how-patients-ask-for-their-records", label: "Medical Records Request Page", description: "How patients ask for records." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1740
  {
    slug: "plain-words-glossary-of-insurance-terms-deductible-copay-coinsurance-network-and-allowed-amount-for-a-practice-billing-page",
    keyword: "a plain-words glossary of insurance terms such as deductible, copay, coinsurance, network and allowed amount for the billing page of a primary care or counseling practice",
    category: "How-to",
    title: "Plain-Words Insurance Glossary for a Practice Billing Page",
    metaTitle: "Insurance Terms Glossary for a Practice Billing Page",
    metaDescription:
      "Plain definitions of deductible, copay, coinsurance, network and allowed amount for a primary care or counseling billing page. (561) 291-2681",
    answer:
      "Put five terms in plain words on your billing page: deductible, copayment, coinsurance, network and allowed amount. Define each in one sentence from a trusted source, add what it means at your office without quoting prices, and tell patients to check their plan or call their insurer for their own numbers.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T16:10:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Why a glossary on the billing page helps"),
      p(
        "Most billing calls start with a word the patient does not understand. 'Why do I owe a deductible?' 'What is coinsurance?' If the billing page defines these terms, the front desk spends less time explaining the basics and more time helping with the specific question."
      ),
      p(
        "A glossary also earns trust. The page shows the practice is willing to explain, which matters to people who are nervous about the cost of care."
      ),
      h2("Five terms to define"),
      table(
        ["Term", "Plain definition"],
        ["Deductible", "What a patient pays for covered services before the plan starts to pay"],
        ["Copayment", "A fixed amount a patient pays for a covered service, set by the plan"],
        ["Coinsurance", "A percentage of the cost of a covered service the patient pays after the deductible"],
        ["Network", "The doctors and facilities the insurer has contracted with"],
        ["Allowed amount", "The most the plan will pay for a covered service"]
      ),
      p(
        "These definitions follow the government's consumer glossary. HealthCare.gov defines the [deductible](https://www.healthcare.gov/glossary/deductible/), [copayment](https://www.healthcare.gov/glossary/co-payment/), [coinsurance](https://www.healthcare.gov/glossary/co-insurance/), [network](https://www.healthcare.gov/glossary/network/) and [allowed amount](https://www.healthcare.gov/glossary/allowed-amount/); link to them as sources."
      ),
      h2("Add what each term means at your office"),
      p(
        "After each definition, add one practice-specific sentence that does not name a price. For example, under 'Network,' say which plans you are in network with by pointing to your accepted insurance page. Under 'Copayment,' say that the amount is set by the patient's plan and is often printed on the insurance card."
      ),
      ul(
        "Deductible: 'Your plan sets this. Your insurance card or insurer can tell you how much of it you have met.'",
        "Copayment: 'Your plan sets this amount. It is usually listed on your insurance card.'",
        "Coinsurance: 'Your plan decides the percentage. We can tell you what we bill, and your insurer decides what it covers.'",
        "Network: 'See our accepted insurance page, and confirm with your insurer before the first visit.'",
        "Allowed amount: 'This is the figure your plan sets, which may be lower than the amount billed.'"
      ),
      h3("What to leave out"),
      p(
        "Do not put your fees, example dollar amounts or promises such as 'insurance will cover this' on the page. Coverage is decided by the insurer. Our guide on the [accepted insurance page](/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice) shows how to keep that page accurate."
      ),
      h2("Where to place the glossary"),
      p(
        "Put it on the billing and payment questions page, with a short link from the accepted insurance page and the new-patient page. A counseling practice can also link it from its [fees page](/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained), and a primary care practice from its [billing and payment page](/guides/billing-and-payment-questions-page-for-a-medical-practice)."
      ),
      p(
        "Use a heading for each term so that a person scanning the page, or a voice assistant reading it, can find the definition. A short question-and-answer layout also helps people who search for 'what is a deductible' before they call."
      ),
      h2("Keep it in sync with your billing office"),
      p(
        "Ask the billing staff to read the page once, and to tell you which two terms patients ask about most. Add a sentence on those two. Review the glossary when you add or drop a plan; our guide on [updating pages when you join or leave an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network) lists the places that change."
      ),
    ],
    faqs: [
      {
        q: "What insurance terms should a practice billing page define?",
        a: "Deductible, copayment, coinsurance, network and allowed amount. These cause most billing questions, and plain definitions reduce calls.",
      },
      {
        q: "Should the glossary include dollar amounts?",
        a: "No. Amounts are set by each patient's plan. Tell patients to check their insurance card or call their insurer.",
      },
      {
        q: "Where do the definitions come from?",
        a: "Use a trusted source such as HealthCare.gov's glossary and link to it. Add one sentence about what the term means at your office.",
      },
      {
        q: "Can a counseling practice use the same glossary?",
        a: "Yes. Add the terms out-of-network and superbill if you provide them, using wording that matches your fees page.",
      },
      {
        q: "How often should the glossary be reviewed?",
        a: "When you join or leave a network and at least once a year. Ask billing staff which terms patients ask about most.",
      },
    ],
    citations: [HC_DEDUCTIBLE, HC_COPAY, HC_COINSURANCE, HC_NETWORK, HC_ALLOWED],
    links: [
      { href: "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice", label: "Insurance Verification Page", description: "How patients check benefits." },
      { href: "/guides/good-faith-estimate-and-no-surprises-act-notice-page-for-a-therapy-practice", label: "Good Faith Estimate Page", description: "Notice wording for therapy practices." },
      { href: "/guides/preventive-visit-versus-problem-visit-billing-explained-on-a-primary-care-practice-website", label: "Preventive vs Problem Visit Billing", description: "Why one visit can bill two ways." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1743
  {
    slug: "email-authentication-spf-dkim-and-dmarc-explained-for-a-practice-owner-so-reminders-and-form-replies-reach-the-inbox",
    keyword: "email authentication (SPF, DKIM, DMARC) explained for a practice owner so appointment reminders and form replies reach the inbox instead of spam",
    category: "How-to",
    title: "SPF, DKIM and DMARC Explained for a Practice Owner",
    metaTitle: "SPF, DKIM and DMARC Explained for a Practice Owner",
    metaDescription:
      "What SPF, DKIM and DMARC are, why they decide whether reminders and form replies reach the inbox, and what to ask your IT or web provider. (561) 291-2681",
    answer:
      "SPF, DKIM and DMARC are three settings on your domain that prove an email really came from your practice. Without them, appointment reminders and form replies are more likely to land in spam. Ask your web or IT provider to confirm all three are set, and to send you a test result.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T16:20:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("Why an owner should know three letters"),
      p(
        "When a patient fills out your contact form and the confirmation never arrives, or the reminder goes to junk, the cause is often not the message. It is that the receiving email service cannot tell whether your practice sent it. Anyone can put your domain in the 'from' line, so mail providers look for proof."
      ),
      p(
        "That proof is set on your domain, not in your inbox. Three settings do the work, and they are small enough to explain in a minute each."
      ),
      h2("The three settings in plain words"),
      table(
        ["Setting", "What it does"],
        ["SPF", "Lists the services that are allowed to send email for your domain"],
        ["DKIM", "Adds a signature to each message that shows it was not changed on the way"],
        ["DMARC", "Tells receivers what to do if a message fails, and sends you reports"]
      ),
      p(
        "Google explains the setup for each in its Workspace help: [SPF](https://support.google.com/a/answer/10685031) and [DMARC](https://support.google.com/a/answer/2466580). Its [email sender guidelines](https://support.google.com/a/answer/81126) list what a domain should have in place so that mail reaches Gmail users."
      ),
      h2("Where a practice usually has gaps"),
      ul(
        "The practice email is set up, but the website contact form sends from a different service that is not listed in SPF.",
        "A reminder or marketing tool sends mail 'from' the practice domain without a signature.",
        "A new vendor was added and nobody updated the list of senders.",
        "No DMARC record exists, so nobody receives reports of failures or of strangers using the domain."
      ),
      p(
        "Each place that sends mail for your practice should appear on your [vendor contact sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile). The list is also the answer to 'who else sends as us?'"
      ),
      h2("What to ask your provider"),
      ol(
        "Which services send email using our domain, including the website form, reminder tool and billing system?",
        "Are SPF and DKIM set for each of them?",
        "Do we have a DMARC record, and where do its reports go?",
        "Can you send a test message to a Gmail address and show me the result?",
        "Who updates these settings when we change a vendor?"
      ),
      h3("Start gently with DMARC"),
      p(
        "A DMARC record can begin in a monitoring mode that changes nothing about delivery while reports are collected. Google's sender guidelines note that the enforcement policy can start at none. Your provider can tighten it later, once you know every legitimate sender is covered."
      ),
      h2("Keep patient information out of the test"),
      p(
        "A test message should contain no names or health details. Use a plain line such as 'test message' and send it from the system you want to check. Our guide on [contact form emails going to spam or never arriving](/guides/contact-form-emails-going-to-spam-or-never-arriving-delivery-test-for-a-medical-practice-website) walks through the delivery test, and [professional domain email instead of Gmail](/guides/professional-domain-email-for-a-medical-practice-instead-of-gmail) explains why mail from a practice domain is trusted more than free addresses. Remember that these settings help delivery; they do not make email a safe place for health details, which the [HHS email FAQ](https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html) addresses."
      ),
      h2("Signs that something is wrong"),
      ul(
        "Patients say they never got a confirmation or reminder.",
        "Replies to your messages are slow because the first message landed in spam.",
        "Someone tells you they received an email that looked like it came from your practice and you did not send it.",
        "A vendor changed the form or reminder tool and nobody rechecked delivery."
      ),
      p(
        "Any one of these is a reason to ask your provider for a delivery test the same week."
      ),
    ],
    faqs: [
      {
        q: "What are SPF, DKIM and DMARC?",
        a: "They are three settings on your domain. SPF lists who may send for you, DKIM signs each message and DMARC says what to do when a message fails and sends you reports.",
      },
      {
        q: "Why do my appointment reminders go to spam?",
        a: "One common cause is that the sending service is not set up with these settings for your domain, so receivers cannot confirm the mail came from you.",
      },
      {
        q: "Who sets up SPF, DKIM and DMARC?",
        a: "Your IT or web provider, in the domain's settings. Ask them to confirm all three and to send you a test result.",
      },
      {
        q: "Will DMARC block my own email?",
        a: "Not if it starts in monitoring mode. Your provider can tighten it after confirming every legitimate sender is covered.",
      },
      {
        q: "Does email authentication make email safe for patient information?",
        a: "No. It improves delivery and reduces impersonation. Whether to send health details by email is a separate privacy decision for the practice.",
      },
    ],
    citations: [GOOGLE_SPF, GOOGLE_DMARC, GMAIL_SENDER, HHS_EMAIL],
    links: [
      { href: "/guides/email-signature-and-confidentiality-footer-for-medical-practice-staff", label: "Email Signature and Footer", description: "A consistent sign-off for staff." },
      { href: "/guides/email-marketing-compliance-for-a-medical-practice", label: "Email Marketing Compliance", description: "Rules for newsletters and reminders." },
      { href: "/guides/spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam", label: "Spam-Flagged Phone Numbers", description: "The phone-side version of this problem." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1744
  {
    slug: "reply-rule-for-facebook-and-instagram-messages-to-a-medical-practice-page-without-health-details",
    keyword: "a reply rule for Facebook and Instagram messages sent to a medical practice page that avoids health details and routes patients to the phone or portal",
    category: "Checklist",
    title: "A Reply Rule for Facebook and Instagram Messages",
    metaTitle: "Reply Rule for Facebook and Instagram Messages",
    metaDescription:
      "A short reply rule for messages to a practice's Facebook or Instagram page: who answers, what to say and how to move patients to the phone. (561) 291-2681",
    answer:
      "Decide who checks the practice's Facebook and Instagram messages and how often, then use one reply that thanks the sender, gives the phone number and portal link, and asks them not to share health details in the message. Staff never discuss symptoms, visits or records in a social media message.",
    author: "Liam Costello",
    publishDate: "2026-11-11T16:30:00Z",
    dateModified: "2026-11-11",
    readMinutes: 5,
    sections: [
      h2("The inbox nobody checks"),
      p(
        "A practice that has a Facebook or Instagram page has an inbox, whether it meant to or not. People use it to ask about hours, whether new patients are accepted and how to reach someone. Some will write something they should not, such as a symptom or a medication."
      ),
      p(
        "Without a rule, one of two things happens: nobody answers, which looks careless, or someone answers with more than they should. A short written rule prevents both."
      ),
      h2("Four parts of the rule"),
      h3("1. One person checks, on a schedule"),
      p(
        "Name one person and a backup. Pick times: for example, at opening and after lunch on workdays. Write the times on the page's profile so senders know what to expect, such as 'We reply during office hours. Please call for anything urgent.'"
      ),
      h3("2. One reply for most messages"),
      p(
        "Use the same wording each time, adjusted for the sender's question. 'Thanks for reaching out. For questions about appointments, please call us at the number on this page, or use our website. Please do not send health details in this message. If this is an emergency, call 911.'"
      ),
      h3("3. A list of what staff never do"),
      ul(
        "Discuss symptoms, medications, test results or visits.",
        "Confirm that someone is a patient.",
        "Reply to a review or comment with details about a visit.",
        "Ask for a date of birth or insurance number in a message."
      ),
      h3("4. A handoff to a safer channel"),
      p(
        "Every reply that needs more than a basic answer ends with the phone number or the patient portal link. Our guide on [the patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) explains how to make the portal easy to find from messages and the website."
      ),
      h2("Why the rule avoids health details"),
      p(
        "A social media message is not a protected place to discuss care. The U.S. Department of Health & Human Services has guidance on when electronic messages may be used with patients; see its FAQ on [email and health issues](https://www.hhs.gov/hipaa/for-professionals/faq/570/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html). A practice's own policy should be stricter on social platforms, where messages can be seen by platform staff and by anyone with access to the page."
      ),
      p(
        "The same caution applies to review replies. Our guide on [responding to positive Google reviews without confirming someone is a patient](/guides/responding-to-positive-google-reviews-without-confirming-someone-is-a-patient) uses the same principle: do not confirm who is a patient."
      ),
      h2("A weekly check"),
      table(
        ["Check", "How"],
        ["Unanswered messages", "None older than one business day"],
        ["Replies sent", "Each used the standard wording"],
        ["Health details received", "Moved to a phone call; the message is not discussed"],
        ["Page details", "Hours, phone and website link match the Google profile"]
      ),
      p(
        "The page itself should match your other listings. See [claiming Yelp and Facebook pages and keeping them consistent](/guides/yelp-and-facebook-pages-for-a-medical-practice-claiming-them-and-keeping-them-consistent) and the guide on [what to post and never post on social media](/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post)."
      ),
      h2("Three messages and how to answer them"),
      ul(
        "'Are you taking new patients?' Answer with the current status from your website and give the phone number to book.",
        "'What are your hours on Friday?' Give the hours exactly as written on your Google profile and website.",
        "A message that describes a symptom or a medication: do not respond to the content. Reply with the standard wording and the phone number, and tell the office manager."
      ),
      p(
        "Having these three examples at the front desk makes the rule easy to follow on a busy day. Add examples from the messages your page actually receives, with the names and details removed."
      ),
    ],
    faqs: [
      {
        q: "Who should answer Facebook and Instagram messages for a practice?",
        a: "One named staff member with a backup, checking at set times during office hours. Use one standard reply for most messages.",
      },
      {
        q: "What should the reply say?",
        a: "Thank the sender, give the phone number and portal link, ask them not to share health details in the message and say to call 911 in an emergency.",
      },
      {
        q: "Can staff discuss symptoms in a social media message?",
        a: "No. Move the conversation to a phone call or the patient portal and do not discuss care in the message.",
      },
      {
        q: "How fast should we reply?",
        a: "Within one business day is a reasonable target. State your reply times on the page so people know what to expect.",
      },
      {
        q: "Should we confirm that a sender is a patient?",
        a: "No. Do not confirm or deny that someone is a patient in a public or social channel.",
      },
    ],
    citations: [HHS_EMAIL, HHS_PRIVACY],
    links: [
      { href: "/guides/social-media-and-friend-request-policy-page-for-a-counseling-practice", label: "Social Media and Friend Requests", description: "A counseling practice's policy page." },
      { href: "/guides/missed-call-text-back-message-for-a-primary-care-practice", label: "Missed-Call Text-Back", description: "Another quick reply to standardize." },
      { href: "/guides/google-business-profile-messaging-for-a-medical-practice-should-you-turn-it-on", label: "Google Profile Messaging", description: "Should you turn it on?" },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1745
  {
    slug: "which-access-level-to-give-a-vendor-or-staff-member-on-google-business-profile-search-console-and-google-analytics",
    keyword: "which access level (owner, manager, administrator, viewer) to give a vendor or staff member on Google Business Profile, Search Console and Google Analytics for a medical practice",
    category: "Checklist",
    title: "Which Access Level to Give a Vendor on Google Tools",
    metaTitle: "Which Google Access Level to Give a Vendor or Staff",
    metaDescription:
      "Owner, manager or viewer? The lowest access level a vendor or staff member needs on Google profile, Search Console and Analytics. (561) 291-2681",
    answer:
      "Give each person the lowest level that does the job. On Google Business Profile, a vendor usually needs manager, not owner. On Search Console, a full user. On Google Analytics, viewer or analyst, with editor only for set-up work. The practice keeps the owner and administrator roles.",
    author: "Gio LaRoche",
    publishDate: "2026-11-11T16:40:00Z",
    dateModified: "2026-11-11",
    readMinutes: 6,
    sections: [
      h2("The rule: lowest level that works"),
      p(
        "When a vendor or new staff member says 'I need access,' the easy answer is the highest level. That is also the riskiest one. A person with full control can remove you, delete data or change settings you will not notice. The goal is to give each person only what the job needs, and to keep the top roles with the practice."
      ),
      p(
        "Each Google tool has its own role names. They look similar and mean different things, so here they are one tool at a time."
      ),
      h2("Google Business Profile"),
      p(
        "Google says an owner has full control of the profile, including adding and removing users and deleting the profile. A manager has nearly the same access but cannot add or remove users or remove the profile. A profile can have several owners but only one primary owner. Each person should have their own Google Account; see Google's help on [managing profile owners and managers](https://support.google.com/business/answer/3403100)."
      ),
      ul(
        "Practice owner or office manager: primary owner, plus one backup owner.",
        "Marketing vendor: manager.",
        "Front-desk lead who replies to reviews: manager.",
        "Anyone else: no access; use the practice's phone and posts routine instead."
      ),
      h2("Search Console"),
      p(
        "Search Console has owners, full users and restricted users. Owners can add and remove users and change settings; full users can see all data and take some actions; restricted users have simple view rights. Only an owner can grant permissions. The details are in Google's page on [owners, users and permissions](https://support.google.com/webmasters/answer/7687615)."
      ),
      ul(
        "The practice: at least one verified owner.",
        "Marketing vendor: full user.",
        "Staff who only read reports: restricted user."
      ),
      h2("Google Analytics"),
      p(
        "Google Analytics 4 offers five roles. Administrator has full control and manages users. Editor controls property settings but cannot manage users. Marketer can edit audiences, events and key events. Analyst can share explorations, and Viewer can see settings and data. Google lists them in its help on [access and data-restriction management](https://support.google.com/analytics/answer/9305587)."
      ),
      ul(
        "The practice: administrator, with a named backup.",
        "Vendor doing set-up work: editor for the weeks it takes, then back to analyst.",
        "Vendor doing monthly reporting: analyst or viewer.",
        "Staff who read numbers: viewer."
      ),
      h2("All three in one table"),
      table(
        ["Person", "Profile / Search Console / Analytics"],
        ["Owner or office manager", "Primary owner / Owner / Administrator"],
        ["Backup at the practice", "Owner / Owner / Administrator"],
        ["Marketing vendor", "Manager / Full user / Analyst or Editor"],
        ["Front-desk lead", "Manager / None / Viewer"],
        ["Other staff", "None / None / None"]
      ),
      h2("Review the list each quarter"),
      ol(
        "Open the user list of each tool.",
        "Remove anyone who no longer works with the practice.",
        "Lower any access that is higher than the person needs.",
        "Check that the practice holds the top role in each tool."
      ),
      p(
        "When someone leaves, follow [removing a former employee's access](/guides/removing-a-former-employees-access-to-google-website-and-email-accounts-at-a-medical-practice), and keep the list next to your [vendor contact sheet](/guides/one-page-vendor-contact-sheet-for-a-medical-practice-website-host-domain-phone-carrier-and-google-profile). If a vendor asks for owner rights, our guide on [who should own the practice's Google accounts](/guides/who-should-own-a-medical-practices-google-accounts-and-domain) explains why the answer should be no."
      ),
      h2("When a vendor asks for more access"),
      p(
        "Sometimes a vendor asks for a higher role for a specific task, such as owner access to transfer a profile or administrator access to link another account. Ask what the task is, how long it will take and whether you can do the step yourself while they watch. If a higher role is needed, grant it for the task, write the date in your change log and lower it afterward."
      ),
    ],
    faqs: [
      {
        q: "What access should a marketing vendor have on Google Business Profile?",
        a: "Manager is usually enough. Managers can edit the profile and respond to reviews but cannot add or remove users or delete the profile. The practice keeps the owner role.",
      },
      {
        q: "Can a vendor see Search Console without owner access?",
        a: "Yes. A full user can see all data and take some actions. Only an owner can add or remove users.",
      },
      {
        q: "Which Google Analytics role should a vendor have?",
        a: "Analyst or viewer for reporting, editor while they do set-up work. Keep the administrator role with the practice.",
      },
      {
        q: "How often should we review who has access?",
        a: "Once a quarter and whenever someone joins or leaves. Remove access that is no longer needed.",
      },
      {
        q: "Should staff share one Google login?",
        a: "No. Each person should use their own Google Account so access can be changed for one person without affecting the others.",
      },
    ],
    citations: [GBP_OWNERS, SC_PERMS, GA_ROLES],
    links: [
      { href: "/guides/handing-over-website-google-and-ads-accounts-when-a-marketing-vendor-relationship-ends", label: "When a Vendor Relationship Ends", description: "Hand over accounts cleanly." },
      { href: "/guides/how-to-set-up-and-verify-google-search-console-for-a-medical-practice-website", label: "Setting Up Search Console", description: "Verify the site and add users." },
      { href: "/guides/how-to-set-up-google-analytics-4-for-a-medical-practice", label: "Setting Up Google Analytics 4", description: "Roles and key events." },
      LOC,
    ],
  },
];
