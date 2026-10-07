// FAQ blocks for the /blog posts — added 2026-10-07 (page factory) so every post carries
// visible Q&A plus FAQPage markup. Keyed by blog slug; rendered by app/blog/[slug]/page.tsx.
// Answers stay inside what the post already says: no new statistics, no clinical or outcome
// claims, no promises of ranking.

export interface BlogFaq {
  q: string;
  a: string;
}

export const blogFaqs: Record<string, BlogFaq[]> = {
  "why-your-medical-practice-isnt-showing-up-on-google-maps": [
    {
      q: "Why doesn't my medical practice show up on Google Maps?",
      a: "Usually one or more of five fixable gaps: the profile is unclaimed or unverified, the categories are thin or wrong, new reviews have stopped arriving, your name, address and phone number differ across directories, or the website sends no local signals. Check them in that order, because an unverified profile blocks everything else.",
    },
    {
      q: "Should I create a new Google Business Profile if I can't find mine?",
      a: "Search for your practice at business.google.com first. Google often builds a listing on its own from directory mentions, so one probably exists. Claim and verify that listing. Creating a second profile for the same location splits your reviews and can cause both listings to be suppressed.",
    },
    {
      q: "How many categories should a practice use on Google Business Profile?",
      a: "Google allows one primary category plus additional ones, up to ten in total. Pick the primary category that best describes your main specialty, then add every other category that honestly describes services you offer. Do not add categories for services you do not provide, since Google can review and suspend mismatched profiles.",
    },
    {
      q: "What does NAP consistency mean for a medical practice?",
      a: "NAP stands for name, address and phone number. Google compares your profile against directories such as Healthgrades, Zocdoc, Vitals and Yelp. If the practice name, suite format or phone number differs between them, Google has less confidence in your location data. Fixing it means standardizing the exact same format everywhere.",
    },
    {
      q: "Do I need a new website to show up in the map pack?",
      a: "Not necessarily, but your website and profile work as one system. A site with specific service pages for the cities and conditions you serve, correct schema markup and fast mobile loading backs up your profile. A one-page brochure site gives Google little to confirm where you practice or what you treat.",
    },
  ],
  "gbp-categories-for-primary-care-doctors": [
    {
      q: "How many categories can a primary care practice have on Google?",
      a: "Google allows ten categories on a Business Profile: one primary and up to nine additional. Many independent practices use only one or two. Fill the slots that honestly describe what you offer, and leave the rest empty rather than adding categories for services you do not provide.",
    },
    {
      q: "Which category should be the primary one for a family practice?",
      a: "For a general family medicine practice, Family Medicine Physician is the usual primary choice. An internal medicine practice would lead with Internist or Internal Medicine Physician. Broad categories like Doctor or Medical Clinic work better as secondary categories because they do not tell Google your specialty.",
    },
    {
      q: "Can I add a category for a service I only offer occasionally?",
      a: "Only if it is a real, regular service your website and patients would recognize. Google compares categories against your website, reviews and third-party sources, and a mismatch can lead to a profile review or suspension. When in doubt, leave the category off.",
    },
    {
      q: "How do I change my categories?",
      a: "Sign in at business.google.com with the account that owns the profile, choose Edit profile, then Business category. Set the primary category first, add each additional category one at a time and save. Google may take a day or two to show the update in search.",
    },
    {
      q: "Do categories alone get a practice into the map pack?",
      a: "No. Categories are the foundation, because they tell Google which searches your practice matches. Reviews, website content, citation consistency and distance to the searcher all affect position too. Treat correct categories as table stakes and the starting point rather than a guarantee of ranking.",
    },
  ],
  "how-many-google-reviews-does-a-medical-practice-need": [
    {
      q: "How many Google reviews does a medical practice need?",
      a: "There is no fixed number. What matters is how your reviews compare to the practices already showing in the map pack for your search, and how steadily new ones arrive. Look at the top three listings in your area, note their totals and how recent their reviews are, and use that as your benchmark.",
    },
    {
      q: "What is review velocity?",
      a: "Review velocity is the pace at which new reviews arrive, such as a few per month. Google treats recent reviews as a freshness signal, so a practice that keeps earning reviews can pass one with a larger total whose reviews stopped coming in a long time ago.",
    },
    {
      q: "Is it HIPAA-compliant to ask patients for Google reviews?",
      a: "Asking is fine when the request contains no health information. A tap card or QR code that links to your public review page carries no patient data. An email should only thank the person for visiting and share the link, without mentioning the reason for the visit, a condition or a treatment.",
    },
    {
      q: "Can I offer patients a gift card or discount for a review?",
      a: "No. Google's policies prohibit offering incentives in exchange for reviews, and the FTC has rules on incentivized and fake reviews. Ask every patient the same way and let them decide. Selecting only patients you expect to be happy, often called review gating, also breaks Google's policies.",
    },
    {
      q: "Can I use a tablet at the front desk to collect reviews?",
      a: "It is risky. Several reviews submitted from the same device or network in a short window can look like a pattern to Google, and bulk reviews may be removed. Giving patients a tap card or QR code they use on their own phone spreads the activity out naturally.",
    },
  ],
  "psychology-today-vs-google-seo-for-therapists": [
    {
      q: "Is Psychology Today worth it for a private practice therapist?",
      a: "It can be a useful bridge early on, since a listing can produce inquiries quickly. The tradeoff is that you are renting space on someone else's site, and the listing stops working when you stop paying. Many therapists use it while they build a website and Google presence they own.",
    },
    {
      q: "What does a Psychology Today listing cost?",
      a: "The post prices the directory listing at roughly $29.95 per month, about $360 per year, but check Psychology Today's current pricing before you budget, since vendors change rates. The larger cost is structural: the authority you build belongs to their domain, not yours.",
    },
    {
      q: "Do I have to choose between Psychology Today and Google SEO?",
      a: "Not at first. Many practices keep a directory listing while they set up a Google Business Profile and a website with a page for each service and city. Over time the question becomes where to put your attention and budget, and owned assets tend to compound while rented ones do not.",
    },
    {
      q: "What does Google SEO for a therapist involve?",
      a: "A verified Google Business Profile with the right categories, a website with a page for each modality and population served, pages for the cities you work in, a HIPAA-conscious review system, regular Google Posts and schema markup so Google can classify your services. Each piece builds on the others.",
    },
    {
      q: "How long before Google SEO sends a therapist inquiries?",
      a: "It is slower than a directory listing. Local search work usually shows early movement on lower-competition terms first, and stronger results build over many months, with no guaranteed timeline. Ask any provider for the specific measures they will report on rather than a promised date.",
    },
  ],
  "what-is-local-seo-for-doctors": [
    {
      q: "What is local SEO for doctors?",
      a: "It is the work of making your practice appear when nearby patients search, such as family doctor near me. That means your Google Business Profile for the map pack and your website for the organic results below it. Both channels matter, and they reinforce each other.",
    },
    {
      q: "What are the three factors Google uses to rank local results?",
      a: "Relevance, distance and prominence. Relevance is how well your profile matches the search, distance is how close you are to the searcher, and prominence reflects how well known your practice is, based on reviews, photos, posts and website authority. You cannot change distance, but you can influence the other two.",
    },
    {
      q: "What is the difference between local SEO and Google Ads?",
      a: "Ads buy visibility immediately and stop the moment you stop paying. Local SEO takes longer but builds an asset, such as a verified profile, steady reviews and useful website pages, that keeps working. Many practices run both while SEO builds, then rely less on ads over time.",
    },
    {
      q: "What should a practice track to know local SEO is working?",
      a: "Track your rank across your service area rather than only at your address, profile impressions from discovery searches, calls and direction requests from the profile, new reviews and review pace, and organic website visits from Google Search Console. Review them monthly and compare to your starting baseline.",
    },
    {
      q: "Does the website matter if I already have a Google Business Profile?",
      a: "Yes. The website sends authority back to your profile and ranks on its own in organic results. Specific, locally relevant service pages, fast mobile performance and correct schema markup make your profile's information easier for Google to trust.",
    },
  ],
  "hipaa-compliant-google-review-responses": [
    {
      q: "Can a practice thank a patient by name for a Google review?",
      a: "Do not confirm that the reviewer is a patient. Even when they identified themselves in the review, confirming the relationship in a public reply can disclose protected health information. A generic thank-you that does not mention a visit, a date or a service is the safe default.",
    },
    {
      q: "How should a practice respond to a negative Google review?",
      a: "Keep it brief and generic: acknowledge the feedback, say you take concerns seriously and invite the person to call the office. Do not describe the visit, defend a clinical decision or correct the details in public. Take the conversation offline to your practice manager.",
    },
    {
      q: "What can't I say in a review response?",
      a: "Anything that confirms an appointment, a visit type, a procedure or a wait on a specific day. Phrases such as thank you for coming in last Tuesday or glad your procedure went well confirm care was provided. Stick to thanking them for sharing feedback and inviting contact.",
    },
    {
      q: "What if a review states something that is factually wrong?",
      a: "Still do not rebut it with specifics, since even denying details can disclose information. Post a calm, general response inviting the reviewer to contact you, and resolve it privately. You can also flag a review that violates Google's content policies, but that does not guarantee removal.",
    },
    {
      q: "How quickly should a practice respond to reviews?",
      a: "The post recommends within 48 hours. Turn on email notifications in your Google Business Profile, assign one person to own responses and give them approved templates. Review each response with practice leadership before it deviates from those templates. This is general guidance, not legal advice, so confirm policy with your compliance advisor.",
    },
  ],
  "how-long-does-local-seo-take-for-medical-practices": [
    {
      q: "How long does local SEO take for a medical practice?",
      a: "Expect foundation work in the first month, early movement on lower-competition searches in months two and three, and primary keywords beginning to appear around months four to six. Results compound after that if reviews and content continue. Competitive markets such as Miami take longer, and none of this is guaranteed.",
    },
    {
      q: "What happens in the first month?",
      a: "The profile is claimed, verified and fully configured with categories, services, attributes and photos, and a review system is installed. A rank baseline across your service area is recorded. You may see small early changes in Search Console impressions, but those are leading indicators, not results.",
    },
    {
      q: "Why is Miami slower than other South Florida markets?",
      a: "Competing practices there have had years of profile activity, large review counts and many local website pages. Breaking into the map pack for a competitive term requires building comparable accumulated weight, so the timeline is longer than in less saturated markets.",
    },
    {
      q: "Why not choose a vendor who promises page one in 30 days?",
      a: "Fast promises often rely on tactics that violate Google's guidelines, such as review manipulation, keyword stuffing or fake citations. If Google suspends the profile, the reviews and positions you built can be lost, and recovery can be slow. Durable ranking comes from steady, compliant work.",
    },
    {
      q: "What should I track month to month?",
      a: "Rank across your service area, profile discovery impressions, calls from the profile, new reviews and review pace, organic website sessions from non-branded searches and your position for a handful of target keywords. Run the same checks on the same day each month so months are comparable.",
    },
  ],
  "google-business-profile-for-mental-health-therapists": [
    {
      q: "Can a therapist who works only by telehealth have a Google Business Profile?",
      a: "Yes, but it is usually set up as a service-area business, which hides the street address and shows the areas you serve. Setup and ranking behavior differ from a location-based profile, so follow Google's current guidelines on eligibility before you start.",
    },
    {
      q: "Which categories should a therapist choose on Google?",
      a: "Psychotherapist is a common primary category for talk therapy. Depending on your practice, others may include Mental Health Service, Counselor, Psychologist if a psychologist is on staff, Marriage Counselor for couples work and Mental Health Clinic for group practices. Only claim categories that match your real scope.",
    },
    {
      q: "Should I list services using clinical terms or plain language?",
      a: "Use both. Clients often search for the problem, such as anxiety therapist or help with relationship issues, not the modality. Listing a service like Anxiety therapy (CBT) or EMDR for trauma uses their words and still names your approach, without making clinical or outcome promises.",
    },
    {
      q: "How should a therapist reply to a Google review?",
      a: "Treat every reply as public. Confirming that someone is a client discloses that they sought mental health care. A single general sentence thanking the person for sharing their experience is the safest default, and avoid any reference to sessions, progress or treatment. Check specifics with a compliance advisor.",
    },
    {
      q: "What can a therapist post on Google Posts?",
      a: "Practice updates such as new client openings, in-person and telehealth availability, office hours or a new service. Avoid anything that reads as clinical advice or implies a diagnosis or outcome. Posting at least monthly keeps the profile active, and the post suggests twice a month.",
    },
  ],
  "trt-clinics-vs-national-telehealth-brands-local-seo": [
    {
      q: "How can an independent TRT clinic compete with national telehealth brands?",
      a: "Not by outbidding them on ads. A clinic with a real address can appear in the local map pack, where a telehealth-only brand has no listing. A complete, well-reviewed Google Business Profile reaches patients who want an in-person relationship with a local physician.",
    },
    {
      q: "What should a men's health clinic's Google profile include?",
      a: "Every accurate category the clinic qualifies for, a service list written in the words patients search, professional clinical photos rather than stock images and attributes that signal discretion, such as appointment required. Everything on the profile should match what the clinic actually offers.",
    },
    {
      q: "Why do reviews matter more for this kind of clinic?",
      a: "Many men do not discuss this care with friends, so word-of-mouth is weaker and public reviews fill the gap. Patients can be reluctant to name their treatment publicly, so ask for feedback about the visit in general terms and never require the review to mention treatment.",
    },
    {
      q: "Is it HIPAA-safe to ask TRT patients for reviews?",
      a: "A tap card or QR code linking to your public review page contains no patient information, so the card itself is fine. Do not include health details in requests or in replies to reviews, and do not confirm that a reviewer is a patient. Confirm your process with a compliance advisor.",
    },
    {
      q: "Does a local profile replace paid ads?",
      a: "It does not have to. Many clinics use both. The point is that a strong local profile reaches searchers in the map pack at no cost per click, so you rely less on competing for expensive ad placements. Results depend on your market, and nothing here is guaranteed.",
    },
  ],
  "gbp-categories-for-mens-health-clinics": [
    {
      q: "Which Google categories fit a men's health clinic?",
      a: "Depending on services, a profile may draw from Men's Health Physician, Urologist, Weight Loss Service, Medical Clinic, Wellness Center and Doctor, plus a hormone-related category where one exists in your region. Claim only the categories that accurately describe what the clinic actually offers.",
    },
    {
      q: "How many categories can a men's health profile have?",
      a: "Google allows up to ten, with one primary and the rest additional. Many clinics use one, often Medical Clinic or Urologist. Review the full list available to you and add each accurate one rather than stopping at the first category you selected during setup.",
    },
    {
      q: "Why does the service list matter as much as categories?",
      a: "Categories say what type of business you are, while the service list says what you do in the words patients type. Entries such as testosterone replacement therapy or men's hormone optimization, where you offer them, give Google and patients more to match against.",
    },
    {
      q: "What are discretion attributes?",
      a: "Attributes are optional labels Google offers on a profile, such as appointment required, where supported. For a privacy-sensitive specialty, they tell a hesitant patient that you understand how they are researching. Availability varies by category and region, so set only the ones that truly apply.",
    },
    {
      q: "What happens if I pick a category that does not fit?",
      a: "Google can review the profile and, in some cases, suspend it. Categories are compared with your website, your reviews and other sources. Keep every category and service accurate, and avoid claims about treatment results anywhere on the profile.",
    },
  ],
  "how-men-search-for-trt-and-ed-treatment": [
    {
      q: "How do men research TRT and ED treatment online?",
      a: "Mostly alone, on a phone, and starting with symptoms in plain language rather than a clinic or treatment name. Searches tend to move from symptom questions toward treatment and provider terms later. A clinic website that covers only the late stage misses the earlier research.",
    },
    {
      q: "What should a men's health clinic website include?",
      a: "A separate page for each condition and treatment, content that answers early questions such as what a first visit involves, clear physician credentials on every page, and MedicalClinic schema markup. The tone should be clinical and measured, without exaggerated promises.",
    },
    {
      q: "Why do generic clinic websites lose these patients?",
      a: "Many pages read like a sales funnel, with bold claims and urgency language. A skeptical, research-minded patient trusts a clinic that comes across as physician-led and evidence-based, with clear information and real credentials, more than one that pushes a quick signup.",
    },
    {
      q: "Does page speed matter for this audience?",
      a: "Yes. Much of this research happens on a phone, often late at night, so a fast, mobile-first page keeps a private researcher from leaving. Speed also feeds Google's page experience signals, though it will not substitute for useful content.",
    },
    {
      q: "Can a clinic website promise treatment results?",
      a: "It should not. Outcome guarantees and exaggerated claims erode trust and can create regulatory problems. Describe what the clinic offers, who the physicians are and what a first visit involves, and let patients decide. Have a compliance or legal advisor review any claims before publishing.",
    },
  ],
};
