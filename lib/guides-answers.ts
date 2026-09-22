import type { Guide } from "@/lib/guides";

// ── Answer-engine guides (batch 2026-09-22) ────────────────────────────────
//
// Three intent pages aimed at questions practice owners type in a panic or in
// planning: a suspended listing, a bad review, and being named by AI search.
// Built to ~/Primara-Clients/PAGE-STANDARD.md. Not city-templated — geography
// is already covered by lib/locations-*.ts. Do not clone these with a city
// swap.
//
// Sources cited are Google's own documentation, HHS Office for Civil Rights,
// and the Federal Trade Commission. Never a competitor agency.

export const guidesPartThree: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "fix-a-suspended-google-business-profile",
    keyword: "how to fix a suspended Google Business Profile",
    category: "How-to",
    title: "How to Fix a Suspended Google Business Profile",
    metaTitle: "Fix a Suspended Google Business Profile | Primara",
    metaDescription:
      "Suspended medical listing? What triggers it, how reinstatement actually works, and what to do while you wait. Call (561) 291-2681.",
    answer:
      "A suspended Google Business Profile comes back by fixing whatever broke the guidelines first, then filing one reinstatement request with evidence the business is real and eligible at that address. Do not create a second listing while you wait. Most medical suspensions trace to an unstaffed address, a keyword-stuffed business name, or a risky recent edit.",
    author: "Gio LaRoche",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 8,
    howTo: {
      name: "How to get a suspended Google Business Profile reinstated",
      steps: [
        {
          name: "Confirm which kind of suspension you have",
          text: "A soft suspension leaves the listing visible but strips your ability to manage it. A hard suspension removes the listing from Search and Maps entirely. Sign in at business.google.com and read the banner. The two are appealed the same way, but a hard suspension also means you are invisible today, so treat it as urgent.",
        },
        {
          name: "Stop editing and do not create a second listing",
          text: "Every new edit during a suspension is another signal to review, and a duplicate listing is its own guideline violation that splits your reviews permanently. Freeze the profile. If someone on staff has already made a second one, note it — you will disclose it in the appeal rather than hide it.",
        },
        {
          name: "Find the actual violation",
          text: "Compare the profile against Google's guidelines for representing your business line by line. The four that catch medical practices are a business name with keywords in it, an address that is a virtual office or an unstaffed suite, a practitioner listing that duplicates the practice listing, and service categories the practice cannot legally provide.",
        },
        {
          name: "Fix it before you appeal, not after",
          text: "Reinstatement reviews the profile as it stands right now. Strip the name back to the real-world name on your signage. Correct the address to a location a patient can walk into during stated hours. Remove categories you cannot back up. Set hours that match the door.",
        },
        {
          name: "Gather evidence a reviewer can verify in one minute",
          text: "A photo of exterior signage showing the business name, a photo of the suite door and the building directory listing, a utility bill or lease in the business name at that address, and the state license or registration. Clear photographs, not scans of scans.",
        },
        {
          name: "File one reinstatement request and then stop",
          text: "Use the reinstatement form in Google's Business Profile Help. State the real-world name, the address, what was wrong, and what you changed, in that order and in a few sentences. Attach the evidence. Filing a second request while the first is open restarts the queue rather than speeding it up.",
        },
        {
          name: "Protect the rest of your visibility while you wait",
          text: "Reinstatement commonly takes days and sometimes weeks. During that window the website is the only thing carrying local searches, so make sure your service pages, name, address and phone are correct there, and that calls from the site are tracked separately so you can tell later what the outage actually cost.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "What suspension actually means" },
      {
        type: "p",
        text: "Google suspends a Business Profile when something about it stops matching what Google believes the real-world business is. It is not a punishment handed down by a person who reviewed your practice and disliked it. It is almost always an automated system reacting to a change — a new address, a name edit, a bulk update, a category added, a flood of reviews arriving in one week — and deciding the listing can no longer be trusted until a human confirms it.",
      },
      {
        type: "p",
        text: "That framing matters, because it tells you what an appeal is. You are not arguing. You are handing a reviewer enough evidence to re-establish that a real medical practice operates at that address under that name, and showing that whatever triggered the flag is gone.",
      },
      { type: "h2", text: "The five things that suspend medical listings" },
      {
        type: "ul",
        items: [
          "Keywords in the business name. 'Smith Family Medicine — Best Primary Care in Orlando' is a violation. The name field is for the name on your signage and nothing else. This is the single most common cause we see.",
          "An address nobody staffs. A registered agent address, a virtual office, a mailbox, or a suite that is empty four days a week. If a patient cannot walk in during your posted hours, Google's guidelines say it is not an eligible address.",
          "Practitioner listings stacked on the practice listing. A solo provider gets one listing, not two. A group practice may have a listing per practitioner only when each one is a public-facing provider with their own contact details, and the practice listing must stay distinct.",
          "Categories the practice cannot back up. Adding Weight Loss Service, Urologist or Medical Spa to widen reach, when no licensed provider on staff delivers it, is a reinstatement problem later even if it ranks for a while first.",
          "A sudden edit after a long quiet period. Changing the address, the name and the phone number in the same session on a profile that has not moved in three years reliably trips review.",
        ],
      },
      { type: "h2", text: "Why the appeal gets denied the first time" },
      {
        type: "p",
        text: "Two reasons, and they are both fixable. The first is appealing before fixing: the reviewer opens a profile that still says 'Best Primary Care in Orlando' and denies it in seconds. The second is evidence that does not prove the specific thing in question. A screenshot of your own website proves nothing — you control the website. A photograph of your sign on the building, the suite door with your name on it, and a utility bill at that address are third-party facts. Send those.",
      },
      {
        type: "callout",
        text: "If the appeal is denied, you can appeal again — but only after changing something real. A second identical request is denied for the same reason as the first.",
      },
      { type: "h2", text: "What a suspension costs while it lasts" },
      {
        type: "p",
        text: "For a practice that gets most of its new patients from local search, the profile is usually the largest single source of calls. A hard suspension removes it from the map pack entirely, so the calls stop the same day. That is worth measuring rather than guessing at: if calls from your website and from your profile are tracked separately, you can see the drop, see the recovery, and know what the profile is worth in normal weeks.",
      },
      {
        type: "p",
        text: "The practical defence is boring and it works. Keep the name identical to your signage. Keep one listing per real location and per public-facing provider. Make changes one at a time with weeks between them. Export a copy of your profile details, photos and review text twice a year so a rebuild never starts from nothing.",
      },
      { type: "h2", text: "What not to do" },
      {
        type: "ol",
        items: [
          "Do not create a replacement listing. It becomes a duplicate violation, splits your reviews, and makes reinstatement of the original harder.",
          "Do not buy a reinstatement service that promises a fixed turnaround. Nobody outside Google controls the queue.",
          "Do not delete the suspended profile. Deleting it does not release the address, and it destroys the review history you would otherwise get back.",
          "Do not keep editing while the appeal is open. Every change restarts the review.",
        ],
      },
      { type: "h2", text: "After it comes back" },
      {
        type: "p",
        text: "Reinstated profiles usually return with reviews and photos intact, but ranking can lag for a few weeks while the listing re-earns trust. Do not respond by making aggressive changes. Post normally, keep the review process running for every patient, answer questions on the profile, and let it settle. Then fix the underlying reason it was flagged so it does not repeat — in most cases that means writing down who is allowed to edit the profile and making sure it is one person, not four.",
      },
    ],
    faqs: [
      {
        q: "How long does Google take to reinstate a suspended profile?",
        a: "There is no published service level. In practice most reinstatement decisions land within a few days to about two weeks, and complex cases involving multiple listings or a disputed address take longer. Filing repeatedly does not accelerate it and can push you back in the queue, so file once with complete evidence and wait.",
      },
      {
        q: "Will I lose my reviews if my profile is suspended?",
        a: "Usually no. Reviews are attached to the listing and normally return with it when the profile is reinstated. You lose them permanently if you delete the suspended profile or if you build a duplicate listing and abandon the original, which is one of the main reasons not to create a second listing while you wait.",
      },
      {
        q: "Can I keep advertising while my Business Profile is suspended?",
        a: "Google Ads is a separate product and campaigns generally continue running, but location extensions tied to the suspended profile will stop serving. If your ads lean on location assets or call extensions from the profile, expect performance to change. Point ads at a working landing page with its own tracked phone number until the listing returns.",
      },
      {
        q: "My practice moved. How do I change the address without a suspension?",
        a: "Change one field at a time. Update the address first and leave the name, phone and categories alone for at least two weeks. Make sure the new address is already visible on your website and, ideally, on your state license record before you edit. Add exterior photos at the new location once the change is live.",
      },
      {
        q: "Do I need a separate listing for each doctor?",
        a: "Only when each doctor is a public-facing practitioner who patients can contact directly. Google's guidelines allow a practitioner listing alongside the practice listing in that case, but a solo provider gets one listing, not two, and duplicates are a common suspension cause in healthcare specifically.",
      },
      {
        q: "Is a virtual office or coworking address ever acceptable?",
        a: "Not for a location listing. Google's guidelines require an address staffed during your stated hours where a patient could be seen. If you genuinely have no public premises, the correct configuration is a service-area business with the address hidden — not a mailbox address left visible.",
      },
    ],
    citations: [
      {
        publisher: "Google Business Profile Help",
        label: "Guidelines for representing your business on Google",
        href: "https://support.google.com/business/answer/3038177",
      },
      {
        publisher: "Google Business Profile Help",
        label: "Fix a suspended Business Profile",
        href: "https://support.google.com/business/answer/4569145",
      },
      {
        publisher: "Google Search Central",
        label: "Local ranking: relevance, distance and prominence",
        href: "https://developers.google.com/search/docs/appearance/google-business-profile",
      },
    ],
    links: [
      {
        href: "/services/google-business-profile",
        label: "Google Business Profile management",
        description: "What we do to a profile month to month — categories, services, posts, questions, reviews and tracking.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "The seven-step version for a profile that is healthy and simply under-configured.",
      },
      {
        href: "/guides/how-to-respond-to-a-negative-patient-review",
        label: "How to respond to a negative patient review",
        description: "A reply template that does not confirm anyone was a patient.",
      },
      {
        href: "/locations/gbp-optimization-florida",
        label: "Google Business Profile optimization in Florida",
        description: "How we work with Florida practices on local visibility.",
      },
      {
        href: "/locations/gbp-optimization-west-palm-beach",
        label: "Google Business Profile optimization in West Palm Beach",
        description: "Our home market, and the listings we work on most.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-respond-to-a-negative-patient-review",
    keyword: "how to respond to a negative patient review",
    category: "How-to",
    title: "How to Respond to a Negative Patient Review",
    metaTitle: "How to Respond to a Negative Patient Review | Primara",
    metaDescription:
      "Reply to a bad review without breaking HIPAA: a four-line template, what never to say, and when to flag it. Call (561) 291-2681.",
    answer:
      "Reply to a negative patient review within a few days, in public, without confirming the person was ever a patient. Thank them for the feedback, describe your standard of care in general terms, give a phone number or office email, and move the conversation offline. Confirming treatment in public is a disclosure of protected health information even when the reviewer disclosed it first.",
    author: "Liam Costello",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 7,
    howTo: {
      name: "How to respond to a negative patient review",
      steps: [
        {
          name: "Wait a day, but not a week",
          text: "Do not answer while angry and do not leave it sitting. Future patients read the most recent reviews and your replies to them. A thoughtful response within two or three days reads as a practice that pays attention; silence reads as a practice that does not.",
        },
        {
          name: "Decide whether it breaks the rules before you write",
          text: "Profanity, hate speech, an obvious competitor, a review clearly about a different business, or content that is purely promotional can be reported for removal. A review that is merely unfair, wrong on the facts, or about wait times cannot. Report the first kind, respond to the second.",
        },
        {
          name: "Write four lines and no more",
          text: "Thank them. Say what your practice aims to do, in general. Offer a direct way to be contacted — a phone number or an office email address, not a personal one. Sign it with a role, such as Practice Manager. Keep it under about seventy words.",
        },
        {
          name: "Say nothing that confirms a patient relationship",
          text: "No 'we saw you on the fourteenth,' no 'your insurance did not cover that,' no 'you were late to two appointments.' None of that is permitted in public, and correcting the record is the single most common way practices turn a bad review into a regulatory problem.",
        },
        {
          name: "Take it offline and actually answer there",
          text: "When they call or email, the person who answers should already know the review exists. Have one named person own review follow-up. A public invitation to call that leads to a front desk with no context is worse than not replying.",
        },
        {
          name: "Fix the thing if it is real",
          text: "Read three months of reviews together rather than one at a time. If four people mention the phone going unanswered at lunch, the review is a symptom and the phone is the problem. Marketing cannot outrun an operational complaint that keeps repeating.",
        },
        {
          name: "Outweigh it with new reviews, from everyone",
          text: "One negative review inside a steady stream barely registers. The same review on a profile with eleven reviews defines the practice. Ask every patient the same way every time, and never screen by expected sentiment.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "Why a public reply is a compliance question first" },
      {
        type: "p",
        text: "In most industries a review response is a customer-service exercise. In healthcare it is a disclosure decision. The U.S. Department of Health and Human Services Office for Civil Rights has taken enforcement action against practices that responded to online reviews by discussing patients' care, and the fact that the patient posted first does not waive the protection. A reviewer can say whatever they want about their own treatment. You cannot confirm it.",
      },
      {
        type: "p",
        text: "That single rule shapes everything else. You cannot correct the timeline. You cannot explain that the billing was the insurer's decision. You cannot say the appointment was missed. Anything that acknowledges the person as a patient — including a sympathetic 'we are sorry your visit did not go well' — is a confirmation. Write in general terms about how the practice operates, and the problem disappears.",
      },
      { type: "h2", text: "A template that stays inside the line" },
      {
        type: "callout",
        text: "Thank you for taking the time to share this. Our practice aims to give every person who walks through the door unhurried time and a clear explanation of their options, and when we fall short of that we want to know. Please call our office at (561) 291-2681 and ask for the practice manager so we can look into it properly. — Practice Manager",
      },
      {
        type: "p",
        text: "Read it again and notice what is absent. It never says the reviewer was seen. It never references a date, a service, a diagnosis or a bill. It gives a real route to a real person. It is short, because long replies read as defensive and because the reader is scanning, not studying.",
      },
      { type: "h2", text: "What never to write" },
      {
        type: "ul",
        items: [
          "Any detail from the chart, including dates, services, diagnoses, medications or balances. This is the line that carries real regulatory risk.",
          "Any confirmation that the person was a patient at all, however gently phrased.",
          "A denial of the underlying facts. 'This never happened' invites the reviewer to prove it did, in public, with detail.",
          "Anything about the reviewer's character, tone, or motives.",
          "A request that they take the review down. It reads badly to every future reader and rarely works.",
          "An offer of anything in exchange for removal or revision. The Federal Trade Commission's rule on consumer reviews treats paying to suppress or alter reviews as deceptive.",
        ],
      },
      { type: "h2", text: "When you can get a review removed" },
      {
        type: "p",
        text: "Google removes reviews that violate its prohibited and restricted content policy — spam, impersonation, off-topic content, harassment, hate speech, personal information, or conflicts of interest such as a competitor or a former employee posting as a patient. Report it through the profile, state which policy it breaks in one sentence, and expect the process to take days. Reviews that are simply negative, inaccurate in your view, or about price are not removable, and the appeal will be declined.",
      },
      {
        type: "p",
        text: "If a review contains a patient's own identifying information, or a third party's, that is a stronger removal case under the personal-information policy. Report it rather than replying to it.",
      },
      { type: "h2", text: "Never gate reviews to avoid this problem" },
      {
        type: "p",
        text: "The tempting shortcut is to text patients a survey, route the happy ones to Google and the unhappy ones to a private form. That is review gating. Google's policies prohibit it and the Federal Trade Commission's consumer review rule reaches it as well, because suppressing negative feedback while soliciting positive feedback misrepresents what customers actually think. Ask everyone, the same way, every time. It is also simply better data.",
      },
      { type: "h2", text: "The maths that makes bad reviews survivable" },
      {
        type: "p",
        text: "A practice holding a four point eight average across ninety reviews absorbs a one-star review without the average moving in any way a patient notices. The same review on a profile with nine reviews drops the average by roughly half a star and sits at the top of the page for months. Review volume is therefore the real defence, and it is built in ordinary weeks rather than in the week after something goes wrong.",
      },
      {
        type: "p",
        text: "Replying to positives matters too. A profile where every review — good and bad — has a short, human reply from the practice reads very differently from one where only the complaints were answered. It also gives future patients a sense of the practice's voice before they ever call.",
      },
    ],
    faqs: [
      {
        q: "Can I say the reviewer was never a patient here?",
        a: "Be careful. If the person genuinely has no record with your practice, you may say you have no record of them as a patient and ask them to contact the office so you can check whether the review is about a different business. If they were a patient, saying so is the disclosure you are trying to avoid, and there is no safe halfway version.",
      },
      {
        q: "Should I respond to every review or only the bad ones?",
        a: "Respond to all of them. A short line of thanks on positive reviews takes seconds, signals an active practice to patients reading the profile, and makes your replies to criticism look like normal behaviour rather than damage control. Keep positive replies specific enough to sound human and general enough to avoid confirming details of care.",
      },
      {
        q: "How fast should I reply to a negative review?",
        a: "Within two or three days. That is long enough to cool down, check internally whether there is an operational issue behind it, and agree who is replying, but short enough that patients reading the profile see an attentive practice. Waiting weeks leaves the complaint sitting unanswered at the top of your profile.",
      },
      {
        q: "Can I offer a refund or a discount to fix a bad review?",
        a: "Do not make it conditional on the review. Resolving a genuine billing or service complaint is fine and often right. Offering money in exchange for removing, changing or softening a review is not, and the Federal Trade Commission's consumer review rule addresses exactly that kind of payment for review suppression.",
      },
      {
        q: "A former employee left a fake patient review. What now?",
        a: "Report it as a conflict of interest under Google's review policies rather than replying in detail. State in one sentence that the reviewer is a former employee and not a patient. Do not name them publicly and do not discuss their employment in the reply — that creates a separate problem for you.",
      },
      {
        q: "Does responding to reviews help my ranking?",
        a: "Google names reviews as part of prominence, one of the three local ranking factors, and review count and recency matter most. Responses are not a documented ranking factor on their own, but they raise conversion — more of the people who read your profile actually call — which is the outcome most practices actually want from ranking anyway.",
      },
    ],
    citations: [
      {
        publisher: "U.S. Department of Health and Human Services",
        label: "HIPAA Privacy Rule and disclosures of protected health information",
        href: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
      },
      {
        publisher: "Federal Trade Commission",
        label: "Rule on the Use of Consumer Reviews and Testimonials",
        href: "https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials",
      },
      {
        publisher: "Google Business Profile Help",
        label: "Prohibited and restricted content for reviews",
        href: "https://support.google.com/contributionpolicy/answer/7400114",
      },
    ],
    links: [
      {
        href: "/services/online-reputation-management",
        label: "Online reputation management for practices",
        description: "Review generation, monitoring and compliant responses, run as a standing process.",
      },
      {
        href: "/guides/fix-a-suspended-google-business-profile",
        label: "How to fix a suspended Google Business Profile",
        description: "The other profile emergency, and how reinstatement actually works.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "Where review velocity sits among the levers that actually move the map pack.",
      },
      {
        href: "/locations/review-generation-florida",
        label: "Review generation for Florida practices",
        description: "How we build review volume without gating or incentives.",
      },
      {
        href: "/locations/review-generation-west-palm-beach",
        label: "Review generation in West Palm Beach",
        description: "Our local market, and what review counts look like there.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "get-a-medical-practice-into-ai-search-answers",
    keyword: "how to get a medical practice into AI search answers",
    category: "How-to",
    title: "How to Get a Medical Practice Into AI Search Answers",
    metaTitle: "Get a Medical Practice Into AI Search Answers | Primara",
    metaDescription:
      "How ChatGPT, Perplexity and AI Overviews choose practices — entities, schema, citations and answer-first pages. Call (561) 291-2681.",
    answer:
      "AI search answers name practices that are described consistently across the open web, answer the question directly on the page, and carry clean structured data. To be cited, put a plain-language answer in your first fifty words, keep your name, address and phone identical everywhere, mark up services and questions with schema, and earn mentions on sources the models already trust.",
    author: "Gio LaRoche",
    publishDate: "2026-09-22T09:00:00Z",
    dateModified: "2026-09-22",
    readMinutes: 9,
    howTo: {
      name: "How to make a medical practice citable by AI search",
      steps: [
        {
          name: "Pick the questions you want to be the answer to",
          text: "Write down the ten questions a prospective patient asks before choosing a practice — what a visit costs, whether you take their insurance, how soon they can be seen, what a procedure involves, whether it hurts. Those are the prompts. One page owns one question.",
        },
        {
          name: "Answer in the first fifty words",
          text: "Put a direct, plain-language answer at the very top of the page, before the marketing. Answer engines quote passages, not whole pages. A page that opens with a mission statement gives the model nothing extractable; a page that opens with the answer gets quoted.",
        },
        {
          name: "Make the entity unambiguous",
          text: "Your practice name, address, phone number and provider names must be byte-identical on your site, your Google Business Profile, your state licence record, your insurance directory entries and your hospital affiliations. Inconsistency is why models hedge or name a competitor they can resolve cleanly.",
        },
        {
          name: "Ship a real schema graph, not a name and a phone number",
          text: "Each service page should carry LocalBusiness or MedicalBusiness, the specific Service or MedicalProcedure, FAQPage for the questions, BreadcrumbList, and a WebPage node that declares what the page is about. Include sameAs links to your profile and social accounts so the entity links up.",
        },
        {
          name: "Name providers with their real credentials",
          text: "Write 'Jane Ortiz, PA-C' and 'Michael Tran, MD', exactly as licensed, with a biography page each and links to the state licence record where one is public. Never invent or upgrade a credential. Models cross-check names against licence data, and a mismatch costs the citation.",
        },
        {
          name: "Get mentioned somewhere other than your own website",
          text: "Models weight sources they already trust: hospital and health-system directories, professional association listings, insurance directories, local news, and established medical publishers. One accurate listing in a directory a model already reads is worth more than ten new pages on your own domain.",
        },
        {
          name: "Keep pages current and say when they changed",
          text: "Put a real last-updated date on the page and in the structured data, and make it true. Stale healthcare content is deprioritised for exactly the reason you would expect. Review each page on a schedule and change something real when you do.",
        },
      ],
    },
    sections: [
      { type: "h2", text: "What actually changed" },
      {
        type: "p",
        text: "For twenty years, ranking meant appearing in a list of ten blue links and competing for the click. A growing share of searches now end with an answer instead of a list — Google's AI Overviews, ChatGPT and Perplexity answering directly, and assistants reading a single result aloud. In those surfaces there is no tenth place. Either the answer names your practice or it does not.",
      },
      {
        type: "p",
        text: "The useful news is that the underlying work is not exotic. Google has been explicit that there is nothing fundamentally new to do for AI features: the same people-first, well-structured, accurate content that ranks is what gets surfaced. What changes is emphasis. Extractability, entity clarity and corroboration matter far more than they did, and keyword density matters less than it ever has.",
      },
      { type: "h2", text: "Extractability: write the answer, then the argument" },
      {
        type: "p",
        text: "Language models quote passages. A passage is extractable when it answers a question completely without needing the paragraph before it. That is why the first fifty words of every page on this site are a direct answer, and why the questions are set as headings phrased the way a patient would say them rather than the way a marketer would.",
      },
      {
        type: "p",
        text: "Three formats extract particularly well: a short definition immediately after the question, a numbered sequence when the question is a how, and a two-column table when the question is a comparison or a price. Long undifferentiated prose extracts badly, no matter how good it is.",
      },
      { type: "h2", text: "Entity clarity: one practice, described one way" },
      {
        type: "p",
        text: "A model builds a picture of your practice from every mention of it that it has seen. If your name appears as 'Lakeside Family Medicine' on your site, 'Lakeside Family Medicine, PA' in the insurance directory, 'Lakeside Family Med' on the profile, and a former suite number lives on in three directories, that picture is blurred. Blurred entities get hedged answers or get skipped in favour of a practice the model can state confidently.",
      },
      {
        type: "ul",
        items: [
          "One legal name, used identically everywhere, including punctuation and suffixes.",
          "One address format, matching your signage and your Google Business Profile exactly.",
          "One phone number as the primary number, in the same format, everywhere.",
          "Provider names written as licensed, with credentials, on a biography page that a citation can point at.",
          "Service names matching the service items on your Google Business Profile word for word.",
        ],
      },
      { type: "h2", text: "Structured data is how you state facts machine-first" },
      {
        type: "p",
        text: "Schema markup does not make a page rank. What it does is remove ambiguity about what the page says, which is precisely the problem an answer engine is trying to solve. A page that declares itself a WebPage about a named Service, offered by a named MedicalBusiness with a verified phone number, and carrying a FAQPage of six questions with their answers, is far cheaper for a model to use than a page it has to infer all of that from.",
      },
      {
        type: "p",
        text: "Two rules keep this honest. The markup must describe what a visitor actually sees on the page — Google's structured data guidelines treat hidden or mismatched markup as spam. And aggregate ratings go in the markup only when they reflect real, countable reviews. Inventing them is both a policy violation and, for a medical practice, a much larger problem than a lost citation.",
      },
      { type: "h2", text: "Corroboration: your website is not enough on its own" },
      {
        type: "p",
        text: "A claim that appears only on your own domain is a claim a model has no way to verify. The same claim appearing in a hospital directory, a professional association listing, an insurance network page and a local news story becomes a fact it is willing to repeat. This is why getting listed accurately in the places that already exist usually beats publishing another page.",
      },
      {
        type: "p",
        text: "In healthcare specifically, the sources that carry weight are unglamorous: state licensing boards, the National Provider Identifier registry, hospital affiliation pages, specialty society directories, and insurer provider lookups. Auditing those for accuracy is dull, unbillable-feeling work that moves this more than anything clever.",
      },
      { type: "h2", text: "How to tell whether it is working" },
      {
        type: "p",
        text: "Traditional rank tracking will not show you this, because there is no position to hold. Three checks are practical. Ask the assistants your ten questions monthly, from a signed-out session, and record whether you are named. Watch for referral traffic from the assistants in analytics, which arrives in small volumes but converts unusually well. And watch impressions against clicks in Search Console — impressions holding while clicks fall is what it looks like when your content is being used to answer without being clicked.",
      },
      {
        type: "p",
        text: "Set expectations honestly. This is a compounding, months-long change in how a practice is described across the web, not a switch. We do not promise a citation in any particular engine, because no one controls what a model says. What is controllable is being the clearest, best-corroborated answer available — and that is the whole strategy.",
      },
    ],
    faqs: [
      {
        q: "Is AI search optimisation different from SEO?",
        a: "It is the same foundation with a different emphasis. Crawlable pages, accurate content and fast loading still matter. What gets weighted more is whether a passage answers a question on its own, whether your practice is described identically across the web, and whether independent sources corroborate what you claim. Keyword density matters less than it ever has.",
      },
      {
        q: "Does schema markup make ChatGPT cite my practice?",
        a: "Not by itself. Schema removes ambiguity about what a page says and who offers what, which makes a page cheaper for any machine to use, and it drives rich results in Google. Treat it as one of four inputs alongside answer-first writing, entity consistency and outside corroboration, not as the lever on its own.",
      },
      {
        q: "How long before a practice shows up in AI answers?",
        a: "Realistically a few months of consistent work, because the engines have to re-crawl your site, re-read the directories you corrected, and rebuild their picture of your practice. Entity fixes — name, address, provider credentials — tend to show up first because they are cheap for a model to verify. Nobody can guarantee a citation in a specific engine.",
      },
      {
        q: "Should I block AI crawlers from my website?",
        a: "If you want to appear in AI answers, no — blocking those crawlers is how you guarantee you are not cited. Some publishers block them to protect content they sell. A practice using its website to attract patients is in the opposite position and generally wants to be readable by everything that might recommend it.",
      },
      {
        q: "Can I write these pages with AI?",
        a: "You can draft with it, but a licensed clinician needs to check every clinical statement before it publishes, and the page should not make outcome promises. Unreviewed generated healthcare copy is where invented credentials, wrong dosing and imaginary statistics come from, and a single one of those found in the wild damages trust far more than the page earns.",
      },
      {
        q: "What is the single highest-value first step?",
        a: "Audit how your practice name, address, phone number and provider credentials appear across your website, your Google Business Profile, your state licence record and every insurance directory you are listed in, and make them identical. It is unglamorous, it takes an afternoon or two, and it resolves the ambiguity that keeps models from naming you.",
      },
    ],
    citations: [
      {
        publisher: "Google Search Central",
        label: "AI features and your website",
        href: "https://developers.google.com/search/docs/appearance/ai-features",
      },
      {
        publisher: "Google Search Central",
        label: "Structured data general guidelines",
        href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      },
      {
        publisher: "Google Search Central",
        label: "Creating helpful, reliable, people-first content",
        href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
    links: [
      {
        href: "/services/ai-seo",
        label: "AI SEO for medical practices",
        description: "The service version of this page — entity cleanup, schema, answer-first content, and monthly prompt checks.",
      },
      {
        href: "/guides/how-to-get-more-patients-from-google-business-profile",
        label: "How to get more patients from your Google Business Profile",
        description: "The profile side of entity clarity: categories, services, hours and reviews.",
      },
      {
        href: "/guides/hipaa-safe-tracking-for-a-medical-website",
        label: "HIPAA-safe tracking for a medical website",
        description: "How to measure any of this without putting patient data into an analytics tool.",
      },
      {
        href: "/locations/ai-seo-florida",
        label: "AI SEO for Florida practices",
        description: "How we run this work for practices across Florida.",
      },
      {
        href: "/locations/ai-seo-west-palm-beach",
        label: "AI SEO in West Palm Beach",
        description: "Our home market, and what the local search landscape looks like there.",
      },
    ],
  },
];
