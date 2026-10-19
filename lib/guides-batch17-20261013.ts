// -- Guides batch 17 - 2026-10-13 --
// Guide/AEO pages from the Command Center queue (rows 877, 880, 881, 882, 885, 897-906), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health audience only. Inbound links are inline
// [text](/guides/slug) sentences appended to existing indexed guides' body prose.

import type { Guide } from "@/lib/guides";

export const guidesPartTwenty: Guide[] = [
  {
    "slug": "patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe",
    "keyword": "patient portal login page for a medical practice: how to make it findable and safe",
    "category": "How-to",
    "title": "Patient Portal Login Page for a Medical Practice: How to Make It Findable and Safe",
    "metaTitle": "Patient Portal Login Page for a Medical Practice",
    "metaDescription": "How a medical practice can publish a patient portal login page that patients find fast and that never asks for health details. Call (561) 291-2681.",
    "answer": "A patient portal login page should link to the real portal sign-in in one tap, explain who can use it and who to call for a locked account, and collect nothing itself. Keep the sign-in on the portal vendor's secure site, never on your own contact form, and add a short note for emergencies.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T09:00:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Why patients search for the portal login"
      },
      {
        "type": "p",
        "text": "A large share of the people who visit a practice website are not new. They are existing patients trying to reach a portal to read a message, request a refill or look at a bill. If the login is buried three menus deep, they type the practice name plus the word portal into Google and click whatever comes first. Sometimes that is a vendor's generic help page, and sometimes it is a stranger's lookalike. Pair the login page with a [pharmacy and lab partner information page for a primary care practice](/guides/pharmacy-and-lab-partner-information-page-for-a-primary-care-practice) so patients find where prescriptions and lab orders are sent."
      },
      {
        "type": "p",
        "text": "A short, plain login page fixes both problems. It gives search engines one clear page to rank for the portal question, and it gives patients a button that goes to the right place."
      },
      {
        "type": "h2",
        "text": "What the page should contain"
      },
      {
        "type": "p",
        "text": "Keep it to the things a patient needs in the first ten seconds. Put the sign-in button first, then the small print."
      },
      {
        "type": "ul",
        "items": [
          "A large button or link labeled with the portal's real name, such as the sign-in link for the portal your practice actually uses.",
          "One sentence on who the portal is for: established patients of the practice, and a parent or guardian where your office allows proxy access.",
          "What patients can do there, limited to what your office really offers, such as viewing visit summaries, sending a non-urgent message or paying a bill.",
          "How to get an account: a phone number and, if true, a note that the front desk sends an invitation by email or text.",
          "How to fix a locked account or forgotten password, ideally pointing to the vendor's reset link and your office phone for anything else.",
          "A one-line emergency notice telling patients to call 911 rather than send a portal message."
        ]
      },
      {
        "type": "h2",
        "text": "Keep the sign-in on the vendor's secure site"
      },
      {
        "type": "p",
        "text": "The login page on your website is a signpost, not a door. The actual username and password fields should live on the portal vendor's secure address, so your website never handles credentials. Do not embed a login form on your own pages unless the vendor specifically supports it and your web developer has confirmed the page is served over HTTPS with no third-party scripts reading the form fields."
      },
      {
        "type": "p",
        "text": "Link to the portal with a normal link and open it in the same tab so the back button works. If your portal has a separate mobile app, add the two app store links beneath the main button and say which version of the app your portal uses."
      },
      {
        "type": "h3",
        "text": "Do not ask for health details here"
      },
      {
        "type": "p",
        "text": "A page about the portal is a magnet for people with questions, and some of them will want to type those questions into any form they find. Say plainly that the website cannot receive health information and that portal messages are the right place for it. Our guide on [publishing new-patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) covers the same boundary for intake forms."
      },
      {
        "type": "h2",
        "text": "Make it findable"
      },
      {
        "type": "p",
        "text": "Use the words patients use. A title such as Patient Portal Login with your practice name is enough, with a matching H1. Link to the page from the header or footer on every page, from the contact page, from appointment reminder texts and from the website link in your Google Business Profile. A patient who finds your listing on a phone should be able to reach the login in two taps. Add a short warning on the login page that the office never asks for a password by text, as our guide on [scam texts and emails that impersonate a medical practice](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients) recommends."
      },
      {
        "type": "table",
        "headers": [
          "Where to link it",
          "Why it helps"
        ],
        "rows": [
          [
            "Main navigation or utility bar",
            "Existing patients look for it in the top corner first."
          ],
          [
            "Footer on every page",
            "A reliable fallback when the header is crowded."
          ],
          [
            "Contact page",
            "Patients who arrive to call often really want the portal."
          ],
          [
            "Appointment reminders",
            "Cuts calls that begin with how do I log in."
          ],
          [
            "Google Business Profile",
            "Lets the listing's link or a post point to the right page."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Safety checks before you publish"
      },
      {
        "type": "p",
        "text": "Open the page on a phone and tap the button yourself. Confirm that it goes to the vendor's address you expect, that the address begins with https, and that the page does not trigger a browser warning. Check it again after any website redesign, because portal links break when menus are rebuilt."
      },
      {
        "type": "p",
        "text": "Finally, keep tracking light. A simple click event on the sign-in button is fine for counting, but do not send patient identifiers, names or account numbers to analytics. If you read our guide on [keeping a medical practice's analytics clean](/guides/how-to-read-google-analytics-4-reports-each-month-for-a-medical-practice), apply the same rule here: count clicks, never people."
      }
    ],
    "faqs": [
      {
        "q": "What should a patient portal login page include?",
        "a": "A clear sign-in button that goes to the portal vendor's secure site, a sentence on who can use the portal, how to get an account, how to reset a password, a phone number for the front desk and an emergency notice. Nothing on the page should collect health details."
      },
      {
        "q": "Should the login form be on my own website?",
        "a": "Usually no. Send patients to the portal vendor's secure address so your website never handles passwords. Only embed a form if the vendor supports it and your developer has confirmed the page is secure."
      },
      {
        "q": "Can patients send health questions through the website contact form?",
        "a": "They should not. Ordinary web forms and email are not designed for health information. Tell patients to use the portal's secure messaging or to call the office."
      },
      {
        "q": "How do I stop fake portal pages from outranking mine?",
        "a": "Publish your own clearly named login page, link it from every page and from your Google Business Profile, and check search results for your practice name and the word portal now and then."
      },
      {
        "q": "Where should the page be linked?",
        "a": "From the main navigation or footer, the contact page, appointment reminders and your Google Business Profile website link, so an existing patient can reach it in one or two taps from a phone."
      }
    ],
    "citations": [
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      },
      {
        "publisher": "HealthIT.gov",
        "label": "What is a patient portal?",
        "href": "https://www.healthit.gov/faq/what-patient-portal"
      }
    ],
    "links": [
      {
        "href": "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data",
        "label": "New-Patient Forms Online",
        "description": "Publish forms without exposing patient data."
      },
      {
        "href": "/guides/what-to-put-on-a-medical-practice-contact-page",
        "label": "Contact Page Checklist",
        "description": "Phone, address and hours done right."
      },
      {
        "href": "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice",
        "label": "After-Hours Calls",
        "description": "What patients hear when you are closed."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "how-to-list-languages-spoken-and-interpreter-access-on-a-medical-practice-website-and-profile",
    "keyword": "how to list languages spoken and interpreter access on a medical practice website and profile",
    "category": "How-to",
    "title": "How to List Languages Spoken and Interpreter Access on a Medical Practice Website and Profile",
    "metaTitle": "Languages Spoken and Interpreter Access Guide",
    "metaDescription": "How a medical practice can state languages spoken and interpreter access honestly on its website and Google profile. Call (561) 291-2681.",
    "answer": "List the languages your clinicians and staff actually speak at the visit, say how interpreter help is arranged for others, and keep the wording identical on your website, Google Business Profile and directories. Never list a language that no one on site can use, and never charge patients for interpreter help.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T09:20:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Why language information matters to a new patient"
      },
      {
        "type": "p",
        "text": "Many families choose a doctor or therapist partly on whether they can be understood. In South Florida that often means Spanish or Haitian Creole, and sometimes Portuguese. A patient who cannot tell from your website whether anyone speaks their language will usually call the next listing instead of calling you."
      },
      {
        "type": "p",
        "text": "The information also feeds search. People type phrases such as a Spanish speaking doctor near me, and listings and pages that state the language plainly are the ones that can match the question."
      },
      {
        "type": "h2",
        "text": "Be exact about what you mean"
      },
      {
        "type": "p",
        "text": "The most common mistake is a vague line such as we speak many languages. Patients cannot act on it, and if it overstates what the office can do it creates a bad first visit. Separate three different things and describe each one honestly."
      },
      {
        "type": "table",
        "headers": [
          "What you can say",
          "What it must mean in real life"
        ],
        "rows": [
          [
            "The clinician speaks the language",
            "The clinician can conduct the visit in that language, not just greet patients."
          ],
          [
            "Some staff speak the language",
            "Say which roles, such as front desk or medical assistants, and whether they are on site every day."
          ],
          [
            "Interpreter services are available",
            "Say how: phone or video interpreter, how to ask, and that the service is free to the patient."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Interpreter access and the law"
      },
      {
        "type": "p",
        "text": "Practices that receive federal funds, including Medicare and Medicaid payments, have obligations to give people with limited English proficiency meaningful access. The federal site LEP.gov explains the expectations in plain terms, and the HHS Office for Civil Rights covers the health-specific rules. Your compliance advisor can tell you which apply to you. For the website, the practical point is simple: if you offer interpreter help, say so, and say it costs the patient nothing."
      },
      {
        "type": "p",
        "text": "Do not ask a patient to bring a family member or a child to interpret as a default. If a patient chooses to, record that it was their choice, but the standing offer on your page should be a qualified interpreter."
      },
      {
        "type": "h2",
        "text": "Where to say it"
      },
      {
        "type": "ul",
        "items": [
          "The new-patients or about page, in one short paragraph or list.",
          "Each provider's bio, listing only the languages that provider can use in a visit.",
          "Your Google Business Profile, using the languages field where it is available for your category, and the description if it is not.",
          "Healthcare directories, so the wording matches. Our guide on [Healthgrades, Zocdoc and Vitals profiles](/guides/healthgrades-zocdoc-vitals-profiles-for-a-medical-practice) explains how to keep those entries consistent.",
          "Appointment reminders and the phone greeting, if your phone system can offer a language choice."
        ]
      },
      {
        "type": "h2",
        "text": "Translated pages are a separate decision"
      },
      {
        "type": "p",
        "text": "Listing a language and translating the website are not the same thing. If you publish pages in Spanish, have a fluent person who understands healthcare vocabulary write or review them rather than relying only on automatic translation, and give each translated page its own address with a clear language tag. Our guide on [bilingual Spanish and English SEO for a Florida medical practice](/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice) covers that setup."
      },
      {
        "type": "p",
        "text": "If you do not have translated pages, a single plain sentence in the other language at the top of the contact page, giving the phone number and saying that help is available, is a kind and useful minimum. Keep it short and have it checked."
      },
      {
        "type": "h2",
        "text": "Wording you can adapt"
      },
      {
        "type": "p",
        "text": "Plain statements work better than marketing language. Adapt these to what your office really does, and delete any line that is not true for you."
      },
      {
        "type": "ul",
        "items": [
          "Dr. Rivera sees patients in English and Spanish. Our front desk also speaks Spanish on weekdays.",
          "If you prefer another language, tell us when you book and we will arrange a free interpreter by phone or video for your visit.",
          "We do not ask patients to bring a family member to interpret.",
          "For help in another language, call the office and say the name of your language."
        ]
      },
      {
        "type": "p",
        "text": "Replace the example names with your own staff, and repeat the exact same wording on your Google profile so the two sources agree."
      },
      {
        "type": "h2",
        "text": "Keep it true over time"
      },
      {
        "type": "p",
        "text": "Staff change. When a bilingual team member leaves, update the page and the profile that week, not at the next redesign. Add the languages line to your regular review checklist, the same one you use for hours and for accepting new patients. A page that promises a language no one speaks costs more goodwill than a page that said nothing."
      }
    ],
    "faqs": [
      {
        "q": "Which languages should a medical practice list?",
        "a": "Only those a clinician or staff member can really use in a visit during normal hours. Name the language, who speaks it and when. If help is by interpreter, say that instead."
      },
      {
        "q": "Do we have to offer interpreters?",
        "a": "Practices that take federal funding, including Medicare and Medicaid payments, have obligations to give meaningful access to people with limited English proficiency. Ask your compliance advisor which rules apply to your practice."
      },
      {
        "q": "Should patients pay for an interpreter?",
        "a": "No. State on your page that interpreter help is free to the patient if that is how your office operates, and confirm it with your billing lead before you publish."
      },
      {
        "q": "Does listing languages help on Google?",
        "a": "It helps patients decide, and it gives your profile and pages a clear way to match searches that name a language. It does not replace honest, accurate information."
      },
      {
        "q": "Is automatic translation enough for Spanish pages?",
        "a": "Not by itself. Healthcare vocabulary and tone matter, so have a fluent reviewer check any translated page before it goes live."
      }
    ],
    "citations": [
      {
        "publisher": "LEP.gov",
        "label": "Federal interagency site on language access",
        "href": "https://www.lep.gov/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      }
    ],
    "links": [
      {
        "href": "/guides/bilingual-spanish-english-seo-for-a-florida-medical-practice",
        "label": "Bilingual SEO",
        "description": "Spanish and English pages done right."
      },
      {
        "href": "/guides/healthgrades-zocdoc-vitals-profiles-for-a-medical-practice",
        "label": "Directory Profiles",
        "description": "Keep third-party profiles consistent."
      },
      {
        "href": "/guides/plain-language-and-reading-level-for-patient-facing-web-content",
        "label": "Plain Language",
        "description": "Write for the patient, not the chart."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "google-business-profile-messaging-for-a-medical-practice-should-you-turn-it-on",
    "keyword": "Google Business Profile messaging for a medical practice: should you turn it on",
    "category": "How-to",
    "title": "Google Business Profile Messaging for a Medical Practice: Should You Turn It On?",
    "metaTitle": "Google Business Profile Messaging for a Medical Practice",
    "metaDescription": "Should a medical practice turn on chat or messaging on its Google profile? The risks, the rules and a safe setup. Call (561) 291-2681.",
    "answer": "For most medical and counseling practices the safe answer is to leave profile messaging off unless someone can answer within minutes, the replies stay free of health details, and an auto-reply tells patients to call 911 in an emergency and to use the portal for care questions. A missed or careless message does more harm than no chat button.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T09:40:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "What profile messaging is"
      },
      {
        "type": "p",
        "text": "Where Google offers it for a category and country, a Business Profile can show a chat button that lets a searcher send a text-style message to the business. The practice answers from an app or a dashboard. It looks convenient, and for a plumber or a restaurant it often is."
      },
      {
        "type": "p",
        "text": "A medical practice is different, because the person typing may be describing a symptom, a medication or a crisis. Everything about the setup should assume that will happen."
      },
      {
        "type": "h2",
        "text": "The risks specific to healthcare"
      },
      {
        "type": "ul",
        "items": [
          "Patients may share health details in a channel that is not built to hold them. A general consumer messaging tool is not a patient portal.",
          "A message can sit unanswered overnight or over a weekend while the sender is unwell, and the patient may read the silence as a decision.",
          "Staff who reply from a personal phone mix patient contact with a personal account.",
          "Replies can drift into advice. A front desk person who answers a question about a symptom is giving clinical guidance without meaning to.",
          "For a counseling practice, the sender may be in distress, and a slow reply to a crisis message is the worst outcome of all."
        ]
      },
      {
        "type": "p",
        "text": "None of these is a reason to panic. They are reasons to decide on purpose rather than click the default."
      },
      {
        "type": "h2",
        "text": "When it can make sense"
      },
      {
        "type": "p",
        "text": "Messaging can work for a practice that has a staffed front desk, a written reply script and a person assigned to the inbox during open hours. It tends to suit simple logistics questions such as do you take new patients, what are your hours or where do I park. It is a poor fit for anything clinical, and a poor fit for a solo practice where the clinician is in session most of the day."
      },
      {
        "type": "table",
        "headers": [
          "Question to ask",
          "Turn it on only if the answer is yes"
        ],
        "rows": [
          [
            "Can someone reply within minutes in open hours?",
            "A named person is assigned and covered when they are out."
          ],
          [
            "Do we have an automatic greeting?",
            "It tells patients to call 911 in an emergency and to use the portal or phone for care questions."
          ],
          [
            "Do replies stay on logistics?",
            "A short script lists what staff may and may not say."
          ],
          [
            "Is the inbox on a work device?",
            "Staff do not use personal phones for patient chat."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "A safe setup if you do use it"
      },
      {
        "type": "ol",
        "items": [
          "Write the automatic welcome message first: office hours, the phone number, the emergency line, and a sentence that the chat cannot be used for health information.",
          "Limit the hours the chat is on to the hours when someone is actually watching it.",
          "Give the script to the staff who will reply and review it with whoever handles your privacy policy.",
          "Answer with facts that appear on your website, so the chat never says something the site does not.",
          "Move the conversation to a phone call or the portal as soon as it turns to care."
        ]
      },
      {
        "type": "h2",
        "text": "What to do with messages that arrive anyway"
      },
      {
        "type": "p",
        "text": "Even if you have turned messaging off, some patients will find other ways to send health details: a comment on a post, a direct message on social media, or an email to a staff address. The same rule applies everywhere. Reply with a short, kind note that gives the phone number, says the channel is not for health information, and points to the portal. Do not repeat or confirm any detail the patient wrote, and do not copy it into other systems. Record who answered and when, so a missed message can be traced."
      },
      {
        "type": "p",
        "text": "If a message suggests the person is in danger, the reply should say to call 911 or, for emotional distress, to call or text 988, and then a staff member should follow your written escalation steps."
      },
      {
        "type": "h2",
        "text": "The alternative most practices should prefer"
      },
      {
        "type": "p",
        "text": "A tap-to-call button and a clear booking link do the same job with less risk, and calls are the lead source you can track. Our guide on [adding an appointment or booking link to a Google Business Profile](/guides/how-to-add-an-appointment-or-booking-link-to-a-google-business-profile) shows the setup, and the piece on [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) explains how to make sure the call is answered."
      },
      {
        "type": "p",
        "text": "If you decide against messaging, check that it is actually off after any profile change, because ownership transfers and category changes can alter what is available. Add it to the monthly profile check you already do."
      }
    ],
    "faqs": [
      {
        "q": "Should a medical practice turn on Google Business Profile messaging?",
        "a": "Only if someone can reply within minutes during open hours, replies stay on logistics, and an automatic greeting directs emergencies to 911 and care questions to the portal or phone. Otherwise leave it off."
      },
      {
        "q": "Is profile messaging a secure place for health information?",
        "a": "No. It is a general consumer channel. Tell patients not to share health details there and to use your portal or call the office."
      },
      {
        "q": "What should the automatic reply say?",
        "a": "Your hours, the office phone number, an instruction to call 911 in an emergency, and a sentence that the chat is for scheduling and general questions only."
      },
      {
        "q": "Can a counseling practice use it?",
        "a": "It carries more risk because senders may be in distress. Most counseling practices are better served by a phone number, a booking link and a visible crisis-resources notice."
      },
      {
        "q": "What happens if we ignore the messages?",
        "a": "Google may reduce the feature for slow responders, and patients who wrote to you get no answer. If you cannot cover the inbox, turn messaging off."
      }
    ],
    "citations": [
      {
        "publisher": "Google",
        "label": "Google Business Profile Help",
        "href": "https://support.google.com/business/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "988 Suicide & Crisis Lifeline",
        "label": "988 Lifeline",
        "href": "https://988lifeline.org/"
      }
    ],
    "links": [
      {
        "href": "/guides/how-to-add-an-appointment-or-booking-link-to-a-google-business-profile",
        "label": "Booking Link on Your Profile",
        "description": "Add one the right way."
      },
      {
        "href": "/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients",
        "label": "Call Routing",
        "description": "Phone menus that do not lose patients."
      },
      {
        "href": "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website",
        "label": "Crisis Resources Section",
        "description": "What a counseling site should say."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "spam-flagged-practice-phone-numbers-how-to-check-and-fix-a-number-marked-as-scam",
    "keyword": "spam-flagged practice phone numbers: how to check and fix a number marked as scam",
    "category": "How-to",
    "title": "Spam-Flagged Practice Phone Numbers: How to Check and Fix a Number Marked as Scam",
    "metaTitle": "Spam-Flagged Practice Phone Number: How to Check and Fix It",
    "metaDescription": "Patients not answering because your practice calls show Scam Likely? How to check the label and get it fixed. Call (561) 291-2681.",
    "answer": "If patients do not answer reminder or callback calls, your practice number may be labeled Spam Likely by phone carriers or call-blocking apps. Check the number on your carrier's tools, ask your phone provider to register it, and request a review through each carrier's reputation program. Fixes take days, so test and record before and after.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T10:00:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "How a practice number gets labeled as spam"
      },
      {
        "type": "p",
        "text": "Phone carriers and call-blocking apps score every number that places calls. A number that makes many short outbound calls, reaches voicemail often, or gets reported by recipients can pick up a label such as Spam Likely or Scam Likely. Practices are caught more often than they expect: appointment reminders sent in a batch, a billing office calling dozens of patients in an afternoon, or a number recycled from a previous owner."
      },
      {
        "type": "p",
        "text": "The patient sees only the label. They decline the call, you leave a voicemail they never hear, and the visit is missed. The first sign is often a front desk comment that nobody ever picks up."
      },
      {
        "type": "h2",
        "text": "Signs it is happening to you"
      },
      {
        "type": "ul",
        "items": [
          "Confirmation and reminder calls have a sudden drop in answers, but texts are fine.",
          "A staff member calls their own mobile from the office line and sees a warning label or a name that is not yours.",
          "Patients tell you they saw your number marked as a scam.",
          "Your office number shows an unfamiliar business name or a spam flag when searched on a call-identification app."
        ]
      },
      {
        "type": "h2",
        "text": "How to check the number"
      },
      {
        "type": "ol",
        "items": [
          "Call a few phones on different carriers from the practice line, and write down what each screen shows, with the date.",
          "Search the number in two or three public call-identification apps and note any reports or labels.",
          "Ask your phone provider whether the number is registered for outbound calling and whether the calls are signed under the industry anti-spoofing system called STIR/SHAKEN.",
          "Check that the number on your Google Business Profile and website is the same number patients see when you call, since mismatches make a legitimate call look odd."
        ]
      },
      {
        "type": "p",
        "text": "Save the results in one place. You will want a before and after, and the carrier forms ask for details."
      },
      {
        "type": "h2",
        "text": "How to fix it"
      },
      {
        "type": "p",
        "text": "There is no single switch. The fix is a set of small steps, and the order matters."
      },
      {
        "type": "table",
        "headers": [
          "Step",
          "What it does"
        ],
        "rows": [
          [
            "Ask your phone provider to register the number and display your practice name",
            "Gives carriers a verified identity to show instead of a bare number."
          ],
          [
            "Submit a review request through each major carrier's or analytics company's reputation program",
            "Asks them to re-score the number. Providers can tell you which programs they use."
          ],
          [
            "Slow down batch calling",
            "Spreading reminders across the day and using a dedicated reminder line keeps the main office number clean."
          ],
          [
            "Switch reminders to text or the portal where your policy allows",
            "Reduces outbound call volume from the main line."
          ],
          [
            "Replace the number only as a last resort",
            "Changing a number breaks your Google listing, directories and patient memory."
          ]
        ]
      },
      {
        "type": "p",
        "text": "The Federal Communications Commission explains caller ID spoofing and the call-signing rules on its consumer pages, which is a useful reference when you speak to a provider."
      },
      {
        "type": "h2",
        "text": "What to tell patients while it is being fixed"
      },
      {
        "type": "p",
        "text": "Reviews take days, and in the meantime reminders still need to land. Add a line to your appointment confirmation text and your voicemail greeting that names the number you will call from, so patients recognize it. Ask the front desk to send a text first when a call matters, such as a callback about a referral, and to note on the chart when a patient says they could not tell it was you. Keep the wording non-clinical: the message is about a call, never about the reason for the visit."
      },
      {
        "type": "p",
        "text": "If a patient reports a scam warning, thank them, ask which app showed it, and add that detail to your dated notes. It tells you which carrier to ask your provider about first."
      },
      {
        "type": "h2",
        "text": "Keep the number healthy afterward"
      },
      {
        "type": "p",
        "text": "Once the label clears, protect it. Keep outbound reminders on a separate line from the one printed on your website. Answer or return missed calls, because a number that is never picked up looks worse to scoring systems. Review the setup when you change phone vendors, and add a quarterly test call to the routine in our [weekly 15-minute marketing check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager)."
      },
      {
        "type": "p",
        "text": "If you track calls with a tracking number, check that one too. Call tracking numbers are newer and have no history, so they are sometimes flagged more readily than an established line. Our guide on [phone menus and call routing](/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients) covers how to set up lines so every one of them is answered. Patients may also receive scam texts that imitate the practice, which our guide on [scam texts and emails that impersonate a medical practice](/guides/scam-texts-and-emails-that-impersonate-a-medical-practice-what-to-tell-patients) tells you how to answer."
      },
      {
        "type": "h3",
        "text": "Keep a dated record"
      },
      {
        "type": "ul",
        "items": [
          "Write down the date, carrier and label shown for each test call.",
          "Save screenshots of any app labels with the date.",
          "Note which line placed each batch of reminder calls.",
          "Record the date each review request was submitted."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Why does my practice number show as Spam Likely?",
        "a": "Carriers and call-blocking apps score numbers by behavior, such as many short outbound calls, low answer rates or recipient reports. A practice that sends batches of reminder calls can trigger that score."
      },
      {
        "q": "Can I remove the spam label myself?",
        "a": "Not directly. Your phone provider can register the number and submit it for review with the carriers and analytics companies that apply the labels. Results usually take several days."
      },
      {
        "q": "Should I get a new phone number?",
        "a": "Only as a last resort. A new number breaks your Google listing, directory entries and the number patients already know, and it can be flagged again if calling habits do not change."
      },
      {
        "q": "Does call spoofing cause this?",
        "a": "It can. If someone spoofs your number to make scam calls, recipients may report it. Tell your provider and keep a record of what you find."
      },
      {
        "q": "How do I know when it is fixed?",
        "a": "Repeat your test calls on several carriers, compare with your dated notes, and watch your reminder answer rate for a couple of weeks."
      }
    ],
    "citations": [
      {
        "publisher": "Federal Communications Commission",
        "label": "Caller ID spoofing",
        "href": "https://www.fcc.gov/spoofing"
      },
      {
        "publisher": "Google",
        "label": "Google Business Profile Help",
        "href": "https://support.google.com/business/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ],
    "links": [
      {
        "href": "/guides/phone-menus-and-call-routing-for-a-medical-practice-that-do-not-lose-new-patients",
        "label": "Call Routing",
        "description": "Phone menus that do not lose patients."
      },
      {
        "href": "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager",
        "label": "Weekly 15-Minute Check",
        "description": "A routine for the practice manager."
      },
      {
        "href": "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice",
        "label": "After-Hours Calls",
        "description": "What patients hear when you are closed."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "front-desk-and-care-team-page-for-a-medical-practice-who-patients-meet-first",
    "keyword": "front desk and care team page for a medical practice: who patients meet first",
    "category": "How-to",
    "title": "Front Desk and Care Team Page for a Medical Practice: Who Patients Meet First",
    "metaTitle": "Front Desk and Care Team Page for a Medical Practice",
    "metaDescription": "How a primary care practice can build a care team page that introduces the front desk and clinical staff without invented claims. (561) 291-2681.",
    "answer": "A care team page introduces the people a new patient will meet in order: front desk, medical assistants, nurses and clinicians. Use real names, roles and photos with permission, one plain sentence each, and credentials only if the person confirms them. Leave out outcomes, rankings and anything you cannot document.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T10:20:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "The people patients meet first are not the doctor"
      },
      {
        "type": "p",
        "text": "A patient's experience of a practice begins at the phone and the front desk, then the medical assistant who takes them back, and only then the clinician. A provider bio covers the last step. A care team page covers the rest, and it answers the nervous question a new patient has: who will I see when I walk in?"
      },
      {
        "type": "p",
        "text": "It also adds something search engines and answer tools value, which is clear evidence that real people work at a real address. Pages with named staff and honest descriptions read as more trustworthy than pages that say only our dedicated team."
      },
      {
        "type": "h2",
        "text": "What to include for each person"
      },
      {
        "type": "ul",
        "items": [
          "Full name as the person uses it professionally, and a role such as front desk coordinator, medical assistant or practice manager.",
          "A clear photo taken against a plain background, used only with written permission from the person.",
          "One or two plain sentences about what that person does for patients, for example scheduling visits, checking in new patients or answering insurance questions.",
          "Credentials, license numbers or certifications only when the person has confirmed them and they can be verified. Do not guess.",
          "Languages spoken in a visit, if true and if you list them elsewhere as well."
        ]
      },
      {
        "type": "h2",
        "text": "Order the page the way a visit unfolds"
      },
      {
        "type": "p",
        "text": "Patients scan, so let the page match the sequence of a visit. Group people under three short headings instead of one long wall of names."
      },
      {
        "type": "table",
        "headers": [
          "Section",
          "Who belongs in it"
        ],
        "rows": [
          [
            "At the front desk",
            "Receptionists, schedulers and billing contacts who answer the phone and check patients in."
          ],
          [
            "In the exam room",
            "Medical assistants, nurses and techs who take history and vitals before the visit."
          ],
          [
            "Your clinicians",
            "Physicians, nurse practitioners and physician assistants, each linking to their own bio page."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Write like a person, not a brochure"
      },
      {
        "type": "p",
        "text": "The best team pages read like a friendly introduction. One sentence about what the person does, and optionally one about something they enjoy outside work, if they want it shared. Avoid superlatives such as the best in the area, avoid promises about wait times, and never write that anyone treats or cures a condition on a page about staff."
      },
      {
        "type": "p",
        "text": "Keep the tone consistent with the rest of the website. Our guide on [plain-language and reading level for patient-facing content](/guides/plain-language-and-reading-level-for-patient-facing-web-content) shows how to keep sentences short and clear."
      },
      {
        "type": "h2",
        "text": "Privacy and consent"
      },
      {
        "type": "p",
        "text": "Get written permission before using a name, photo or personal detail, and keep a note of it. Do not publish staff home details, personal social accounts or family information. Make it easy to remove someone when they leave the practice, which is covered in our guide to [what to update when a provider joins or leaves](/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice). And never include a patient photo or testimonial naming a patient on this page."
      },
      {
        "type": "h2",
        "text": "A short example you can adapt"
      },
      {
        "type": "p",
        "text": "Here is how a single entry might read on the page, with invented details you should replace. Maria Lopez, front desk coordinator: Maria books your visit, checks you in and answers questions about forms and paperwork. She speaks English and Spanish. Notice what is missing. There is no claim about being the best, no promise about wait times and no mention of any condition. It tells the patient who to look for and what that person helps with, and that is the whole job of the page."
      },
      {
        "type": "p",
        "text": "Write the clinician entries the same way, then link to the full bio for credentials and background."
      },
      {
        "type": "h2",
        "text": "Link it so it gets seen"
      },
      {
        "type": "p",
        "text": "Link the team page from the about page, the new-patients page and each provider bio. Add a short sentence on the contact page, such as who answers the phone and in which hours. In your Google Business Profile, a team photo uploaded as a normal photo reinforces the same message. Keep names, roles and photos identical in all those places so a patient sees one practice, not three versions."
      },
      {
        "type": "h3",
        "text": "Before you publish the team page"
      },
      {
        "type": "ul",
        "items": [
          "Every name, role and photo has written permission on file.",
          "Credentials appear only where the person has confirmed them.",
          "Roles match what appears on your Google Business Profile and directories.",
          "Each clinician links to a full bio page.",
          "The page contains no outcome claims, rankings or patient names.",
          "Someone is assigned to review it each quarter and when staff change."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is a care team page?",
        "a": "A page that introduces the front desk, medical assistants, nurses and clinicians a patient will meet, with names, roles and short plain descriptions. It sits alongside individual provider bios."
      },
      {
        "q": "Do I need permission to post staff photos?",
        "a": "Yes. Get written permission from each person, keep it on file, and remove the photo promptly when the person leaves or asks."
      },
      {
        "q": "Should staff credentials be listed?",
        "a": "Only credentials the person has confirmed and that can be verified. Never list a credential or title on an assumption."
      },
      {
        "q": "Can the page mention patient results or reviews?",
        "a": "Keep it about people and roles. Do not add outcome claims, and do not name patients. Reviews belong on their own area with the platform's rules respected."
      },
      {
        "q": "Where should the care team page be linked?",
        "a": "From the about page, the new-patients page, each provider bio and the contact page. Keep names and roles identical on your Google listing and directories."
      }
    ],
    "citations": [
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "Plain Language Action and Information Network",
        "label": "Federal plain language guidelines",
        "href": "https://www.plainlanguage.gov/"
      }
    ],
    "links": [
      {
        "href": "/guides/what-to-update-when-a-provider-joins-or-leaves-a-medical-practice",
        "label": "Provider Joins or Leaves",
        "description": "What to update online."
      },
      {
        "href": "/guides/plain-language-and-reading-level-for-patient-facing-web-content",
        "label": "Plain Language",
        "description": "Write for the patient, not the chart."
      },
      {
        "href": "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients",
        "label": "First Appointment Page",
        "description": "What new patients should bring."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website",
    "keyword": "how to explain visit types and appointment lengths on a primary care practice website",
    "category": "How-to",
    "title": "How to Explain Visit Types and Appointment Lengths on a Primary Care Practice Website",
    "metaTitle": "Visit Types and Appointment Lengths on a Primary Care Site",
    "metaDescription": "How a primary care practice can explain new patient, follow-up, sick and annual visits and how long each takes. Call (561) 291-2681.",
    "answer": "A visit types page lists each kind of appointment your practice books, such as new patient, follow-up, sick visit and annual wellness, with a plain one-line purpose and a typical length. Say lengths are scheduling blocks, not promises, and tell patients which type to ask for when they call.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T11:00:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Why patients get the visit type wrong"
      },
      {
        "type": "p",
        "text": "When someone calls to book, the first question from the front desk is often what kind of visit do you need. Many patients do not know the answer, so they guess. A person with a new problem asks for a physical. A person who needs a long conversation books a short slot. The visit runs over, the schedule backs up, and everyone is frustrated."
      },
      {
        "type": "p",
        "text": "A single page that explains the visit types in everyday language lets patients pick the right one before they call. It also gives search engines a page that can answer questions such as how long is a new patient visit."
      },
      {
        "type": "h2",
        "text": "List each visit type once, in the same format"
      },
      {
        "type": "p",
        "text": "Use the names your scheduling system uses, because that is what the front desk will say on the phone. Keep each entry the same shape so patients can compare them at a glance."
      },
      {
        "type": "table",
        "headers": [
          "Visit type",
          "What it is for and a typical block"
        ],
        "rows": [
          [
            "New patient visit",
            "A first appointment to meet the clinician and set up your record. Often a longer block, such as 40 to 60 minutes."
          ],
          [
            "Follow-up visit",
            "A return visit to review a plan already started. Often a shorter block, such as 15 to 30 minutes."
          ],
          [
            "Sick visit",
            "A visit for a new, short-term concern. Often 15 to 20 minutes, and some offices keep same-day slots."
          ],
          [
            "Annual wellness visit",
            "A yearly planned visit. Length varies, and coverage rules are set by the plan, so check with your insurer."
          ],
          [
            "Telehealth visit",
            "A video or phone visit where the clinician judges it suitable. Say how to join and what to have ready."
          ]
        ]
      },
      {
        "type": "p",
        "text": "The lengths above are examples only. Publish the numbers your office really uses, and say that they are scheduling blocks that can run shorter or longer."
      },
      {
        "type": "h2",
        "text": "Say which type to ask for"
      },
      {
        "type": "p",
        "text": "Add a short list that starts with the patient's goal instead of your terminology. For example: I am new to the practice, ask for a new patient visit. I was told to come back, ask for a follow-up. I have something new that cannot wait for a physical, ask for a sick visit. If the patient is unsure, tell them the front desk will help them choose, and that they should not describe symptoms in a web form."
      },
      {
        "type": "h3",
        "text": "One topic per visit"
      },
      {
        "type": "p",
        "text": "Many offices ask patients to bring one or two main concerns to each visit so there is time to do them well. If your office has that rule, state it kindly and explain what happens when a patient has more: a follow-up can be booked. Do not make the rule sound like a penalty."
      },
      {
        "type": "h2",
        "text": "What to leave off"
      },
      {
        "type": "ul",
        "items": [
          "Medical advice or any guidance on which symptoms need which visit. That decision belongs to clinical staff.",
          "Guarantees about being seen the same day, unless your office reliably does that.",
          "Insurance coverage promises. Say that coverage depends on the plan and link to your insurance page.",
          "Pricing for individual visits, unless you publish self-pay fees on purpose. Our guide on [publishing self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) covers how to do that without confusion."
        ]
      },
      {
        "type": "h2",
        "text": "A worked example of the wording"
      },
      {
        "type": "p",
        "text": "Here is how one entry might read, with invented numbers to replace with your own. New patient visit: this is your first appointment with us. We set up your record, review your history together and plan next steps. We book 40 minutes, and arriving 15 minutes early for forms helps. Notice the three parts: what it is, what happens, and how long it is booked. Repeat that three-part shape for every visit type so patients learn to read the page quickly."
      },
      {
        "type": "p",
        "text": "If your office books by clinician rather than by visit type, say so, and list which clinicians offer which visits. A nurse practitioner may keep different blocks than a physician, and patients deserve to know before they choose."
      },
      {
        "type": "h2",
        "text": "Where to put it and how to link it"
      },
      {
        "type": "p",
        "text": "Put the page under a plain heading such as Appointments or Visit Types and link it from the booking page, the contact page and the new-patients area. If you use online scheduling, repeat the same names in the booking tool so the words match. Our guides on the [annual wellness visit page](/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims) and [same-day and walk-in visits](/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice) show how to describe those two visit types in more detail."
      },
      {
        "type": "p",
        "text": "Review the page every time you change the schedule template. A page that says 20 minutes when the book has changed to 30 teaches patients that your website cannot be trusted."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "Visit names match the scheduling system exactly.",
          "Lengths are stated as typical scheduling blocks.",
          "No sentence offers advice about which symptoms need which visit.",
          "The booking page and phone script use the same names."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What visit types should a primary care website list?",
        "a": "Whichever your office schedules, commonly new patient, follow-up, sick, annual wellness and telehealth visits. Use the same names as your scheduling system so the phone and web match."
      },
      {
        "q": "Should I publish appointment lengths?",
        "a": "Yes, as typical scheduling blocks, with a note that visits can run shorter or longer. Publish only the numbers your office uses."
      },
      {
        "q": "How do I tell patients which visit to book?",
        "a": "Start from the patient's goal. Say if you are new, ask for a new patient visit. Say if the front desk can help choose, and do not ask patients to describe symptoms in a form."
      },
      {
        "q": "Can the page say what insurance covers?",
        "a": "Not in specifics. Coverage depends on the plan. Say that and link to your insurance page or tell patients to check with their plan."
      },
      {
        "q": "How often should the page be updated?",
        "a": "Whenever your schedule template, visit names or lengths change, and during your regular monthly website check."
      }
    ],
    "citations": [
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      },
      {
        "publisher": "Plain Language Action and Information Network",
        "label": "Federal plain language guidelines",
        "href": "https://www.plainlanguage.gov/"
      }
    ],
    "links": [
      {
        "href": "/guides/annual-wellness-visit-page-for-a-primary-care-practice-without-clinical-claims",
        "label": "Annual Wellness Visit Page",
        "description": "Describe it without clinical claims."
      },
      {
        "href": "/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice",
        "label": "Same-Day Visits",
        "description": "Get found for walk-in and same-day care."
      },
      {
        "href": "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients",
        "label": "First Appointment Page",
        "description": "What new patients should bring."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "waitlist-page-for-a-therapy-practice-with-a-full-caseload",
    "keyword": "waitlist page for a therapy practice with a full caseload",
    "category": "How-to",
    "title": "Waitlist Page for a Therapy Practice With a Full Caseload",
    "metaTitle": "Waitlist Page for a Therapy Practice With a Full Caseload",
    "metaDescription": "What a full therapy practice can put on a waitlist page: honest timing, a safe way to join and crisis resources. Call (561) 291-2681.",
    "answer": "A waitlist page tells a prospective client that the practice is full, how the list works, what information is collected to join it, and where to turn meanwhile. Be honest about timing, collect only name and contact details, and always show crisis resources and a referral option.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T11:20:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "A full caseload still needs a website page"
      },
      {
        "type": "p",
        "text": "Many good therapists are full for months. If the website still reads as though new clients are welcome, callers leave voicemails that go unanswered and feel brushed off. If the website simply says nothing, people assume the practice has closed. A short, honest waitlist page turns both outcomes into something respectful."
      },
      {
        "type": "p",
        "text": "It also protects the practice. A clear page means fewer calls to the front desk or the clinician's own phone, and it sets a boundary in advance rather than in a stressful conversation."
      },
      {
        "type": "h2",
        "text": "What the page should say"
      },
      {
        "type": "ul",
        "items": [
          "A plain first sentence: this practice is not currently taking new clients, or is taking them only for certain days or times.",
          "How the waitlist works: first come first served, or reviewed by fit and availability. Say which, so no one is surprised.",
          "A realistic range for the wait only if you can honestly give one. If you cannot, say that waits are unpredictable.",
          "How to join: a phone call or a short form asking only for name, phone or email and the best time to reach them.",
          "Whether joining costs anything. It should not.",
          "What happens next: you will be contacted when an opening matches, and what to do if circumstances change."
        ]
      },
      {
        "type": "h2",
        "text": "Keep the form tiny"
      },
      {
        "type": "p",
        "text": "A waitlist form is not an intake. It should not ask why the person wants therapy, what symptoms they have or anything about their history. Names and contact details are enough, and the page should say so out loud: please do not include health details in this form. Our guide on [the form spam and fake leads problem](/guides/how-to-stop-spam-and-fake-leads-on-a-medical-practice-contact-form) explains how to keep even a simple form clean. Clients on a waitlist are the most likely to worry about silence during a closure, so use the dates and coverage wording in our guide on [vacation and out-of-office coverage notices for a therapy practice](/guides/vacation-and-out-of-office-coverage-notices-for-a-therapy-practice)."
      },
      {
        "type": "p",
        "text": "Tell people how their details will be used and that you will not share them. Link your privacy policy, and delete entries when the list is cleared."
      },
      {
        "type": "h2",
        "text": "Put kindness and safety first"
      },
      {
        "type": "p",
        "text": "The person reading a waitlist page may be waiting at a hard moment. Put a short, visible block above or beside the form that says what to do in a crisis, and keep it consistent with the rest of your site. Our guide on [emergency and crisis resources for a counseling website](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website) explains the wording. The 988 Suicide and Crisis Lifeline can be reached by call or text, and 911 is for emergencies. While clients wait for an opening, a [community resources and support groups referral page for a counseling practice](/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice) gives them reliable places to turn in the meantime."
      },
      {
        "type": "h3",
        "text": "Offer somewhere to go"
      },
      {
        "type": "p",
        "text": "If you know trusted colleagues or an organization that may have openings, say so, and link to a general directory rather than naming individuals you have not asked. Mention that the person is welcome to look for another provider and does not need to wait for you."
      },
      {
        "type": "h2",
        "text": "Waitlist and first-contact timing"
      },
      {
        "type": "p",
        "text": "If your practice calls people back in the order they joined, say that, and say how soon after a cancellation you reach out. Avoid language such as spots open soon unless you know it is true. A single sentence that separates a waitlist from a general inquiry also helps: if someone just has a question, they can call or email, and joining the list is only for people who want to start when there is room."
      },
      {
        "type": "h2",
        "text": "Keep it from going stale"
      },
      {
        "type": "p",
        "text": "The worst waitlist page is one that is still up after the practice opens again. Put a review date on your calendar, update the page when the status changes, and make sure your Google Business Profile, your directory profiles and the new-clients line on your homepage all match. The same reasoning applies to the status flag in our guide on [keeping accepting new patients accurate across Google and directories](/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories)."
      },
      {
        "type": "h3",
        "text": "Search and AEO"
      },
      {
        "type": "p",
        "text": "Give the page a clear title such as Waitlist and your city or practice name. Use the word waitlist in the first paragraph, and add a short question and answer on how the list works. Answer tools often quote that kind of passage."
      }
    ],
    "faqs": [
      {
        "q": "Should a full therapy practice have a waitlist page?",
        "a": "Yes. A short honest page sets expectations, reduces unanswered voicemails and gives people options while they wait."
      },
      {
        "q": "What should the waitlist form ask?",
        "a": "Only a name, a way to reach the person and a good time to call. Do not ask about symptoms, history or reasons for therapy, and say so on the page."
      },
      {
        "q": "Should I promise a wait time?",
        "a": "Only if you can give an honest range. If waits vary, say they are unpredictable and invite the person to look elsewhere if they need care sooner."
      },
      {
        "q": "What crisis information belongs on the page?",
        "a": "A visible note that 911 is for emergencies and that people in emotional distress can call or text 988, matching the wording elsewhere on your site."
      },
      {
        "q": "How do I keep the status accurate?",
        "a": "Review it on a set date, update the page when the caseload changes and make sure Google, directories and your homepage say the same thing."
      }
    ],
    "citations": [
      {
        "publisher": "988 Suicide & Crisis Lifeline",
        "label": "988 Lifeline",
        "href": "https://988lifeline.org/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "SAMHSA",
        "label": "Behavioral health treatment services locator",
        "href": "https://www.samhsa.gov/"
      }
    ],
    "links": [
      {
        "href": "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website",
        "label": "Crisis Resources Section",
        "description": "What a counseling site should say."
      },
      {
        "href": "/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories",
        "label": "Accepting New Patients",
        "description": "Keep the status accurate everywhere."
      },
      {
        "href": "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice",
        "label": "First Session Page",
        "description": "Tell new clients what to expect."
      },
      {
        "href": "/therapist-seo",
        "label": "Therapist Marketing",
        "description": "Our service for therapy and counseling practices."
      }
    ]
  },
  {
    "slug": "free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid",
    "keyword": "free consultation call page for a therapy practice: what to say and what to avoid",
    "category": "How-to",
    "title": "Free Consultation Call Page for a Therapy Practice: What to Say and What to Avoid",
    "metaTitle": "Free Consultation Call Page for a Therapy Practice",
    "metaDescription": "How a therapy practice can describe a free consultation call honestly: purpose, length, privacy and what not to promise. (561) 291-2681.",
    "answer": "A free consultation page explains that the call is a short introduction to see whether the practice is a fit, how long it lasts, how to book it, and that it is not therapy and no health details are needed beforehand. Avoid promises about results and avoid collecting symptoms in the booking form.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T11:40:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "What a consultation call is for"
      },
      {
        "type": "p",
        "text": "Many therapists offer a brief call before a first session. For the client it is a low-pressure way to hear the clinician's voice and ask practical questions. For the clinician it is a chance to check basics such as availability, fees and whether the practice is the right kind of service. It is not a session, and the page should say so."
      },
      {
        "type": "p",
        "text": "Search interest is real. People type phrases such as free consultation therapist near me, and a clear page can answer them. The risk is that vague copy invites the wrong expectations, so write it carefully."
      },
      {
        "type": "h2",
        "text": "The facts to state"
      },
      {
        "type": "table",
        "headers": [
          "Fact",
          "Say it plainly"
        ],
        "rows": [
          [
            "Length",
            "For example, about 15 minutes. Use your real number."
          ],
          [
            "Cost",
            "Free, or the fee if there is one. Do not call something free that has conditions."
          ],
          [
            "Format",
            "Phone or video, and how the client will be contacted."
          ],
          [
            "Purpose",
            "To talk about availability, fees, insurance and fit. Not therapy."
          ],
          [
            "Next step",
            "What happens after: booking a first session, a referral to someone else or no obligation."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Add the hours when calls are offered and how quickly you reply to a request. If you cannot promise a time, do not."
      },
      {
        "type": "h2",
        "text": "Say what the call is not"
      },
      {
        "type": "p",
        "text": "A short boundary statement protects both sides. Tell the reader that the call does not create a therapy relationship, that it is not the place to describe a crisis, and that if they need immediate help they should call 911 or call or text 988. Link your crisis resources section so the same words appear in both places."
      },
      {
        "type": "h3",
        "text": "Do not ask for details in advance"
      },
      {
        "type": "p",
        "text": "The booking form for a consultation should be as small as the one on a waitlist page: name, phone or email, preferred time. If a client begins to share their story on the call, a good clinician gently steers back to logistics. Your page can set that expectation with one sentence: we will save the details for your first session. The clinician's own page is where most people decide to book that call, so write it with the help of our [therapist bio page guide](/guides/therapist-bio-page-for-a-counseling-practice-without-clinical-claims). Callers who are not a fit should leave with somewhere to go, which is why a [community resources and support groups referral page for a counseling practice](/guides/community-resources-and-support-groups-referral-page-for-a-counseling-practice) is worth linking from this page."
      },
      {
        "type": "h2",
        "text": "What to avoid"
      },
      {
        "type": "ul",
        "items": [
          "Promises about outcomes, speed or cures. A consultation page is not a place for results claims.",
          "Wording that suggests pressure, such as limited slots or book now before it is too late.",
          "The word free if a card is required or fees apply after a time limit.",
          "Labeling the call as an assessment or diagnosis when it is not.",
          "Listing symptoms in a way that reads as a self-diagnosis checklist."
        ]
      },
      {
        "type": "p",
        "text": "Professional ethics codes for counselors and psychologists also address how services are described, and many state boards publish rules on advertising. Your own license board is the final word on what you may say, so check the page against its guidance before you publish."
      },
      {
        "type": "h2",
        "text": "Consider who is reading"
      },
      {
        "type": "p",
        "text": "Some callers are comparing several therapists in one evening. Others are a parent looking on behalf of a teenager, or a partner nudging a spouse. Write for the tired reader: short sentences, one clear button, and no jargon about modalities. If the page makes the call feel easy and safe, it has done its job, and the first session can do the rest."
      },
      {
        "type": "p",
        "text": "Offer a way to reach you by text or email if phone calls are hard for the client, and say when you check them. Many people find a first call harder than a first session, and a quiet option widens who feels able to reach out."
      },
      {
        "type": "h2",
        "text": "Tracking and linking"
      },
      {
        "type": "p",
        "text": "Treat the booking button as a conversion and count clicks and completed requests, never the content of the form. The setup is the same one we describe in our guide on [attributing new patients to marketing at intake](/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing). Link the consultation page from your first session page, your contact page and your fees page, and mention it in your Google Business Profile description if it is a regular offer."
      },
      {
        "type": "p",
        "text": "If you already publish a [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice), keep the two pages consistent: the consultation is the step before the first session, so each should link to the other in one plain sentence."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "The length, cost and format of the call are stated in numbers.",
          "The page says plainly that the call is not therapy.",
          "A crisis notice with 911 and 988 is visible without scrolling.",
          "The form asks only for a name, contact details and a time.",
          "No sentence promises or implies a result.",
          "The wording has been checked against your licensing board's advertising rules."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is a free consultation call with a therapist?",
        "a": "A short introductory call, usually 10 to 20 minutes, to cover availability, fees, insurance and fit. It is not therapy, and the page should say that."
      },
      {
        "q": "Should I describe my symptoms on the booking form?",
        "a": "No. Keep the form to name, contact details and a preferred time, and save the details for the first session."
      },
      {
        "q": "Can I promise results on the page?",
        "a": "No. Avoid outcome claims and pressure language. Check advertising rules with your licensing board."
      },
      {
        "q": "Is it okay to call it free?",
        "a": "Only if it is truly free with no conditions. If a fee applies or a card is needed, say so."
      },
      {
        "q": "How do I measure whether the page works?",
        "a": "Count clicks on the booking button and completed requests, not the content of any message, and compare month to month."
      }
    ],
    "citations": [
      {
        "publisher": "American Psychological Association",
        "label": "Ethical Principles of Psychologists and Code of Conduct",
        "href": "https://www.apa.org/ethics/code"
      },
      {
        "publisher": "988 Suicide & Crisis Lifeline",
        "label": "988 Lifeline",
        "href": "https://988lifeline.org/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ],
    "links": [
      {
        "href": "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice",
        "label": "First Session Page",
        "description": "Tell new clients what to expect."
      },
      {
        "href": "/guides/how-did-you-hear-about-us-attributing-new-patients-to-marketing",
        "label": "Attributing New Patients",
        "description": "Count where clients come from."
      },
      {
        "href": "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained",
        "label": "Fees Page",
        "description": "Explain sliding scale and superbills."
      },
      {
        "href": "/therapist-seo",
        "label": "Therapist Marketing",
        "description": "Our service for therapy and counseling practices."
      }
    ]
  },
  {
    "slug": "medical-records-request-page-for-a-practice-how-patients-ask-for-their-records",
    "keyword": "medical records request page for a practice: how patients ask for their records",
    "category": "How-to",
    "title": "Medical Records Request Page for a Practice: How Patients Ask for Their Records",
    "metaTitle": "Medical Records Request Page for a Practice",
    "metaDescription": "How a medical or counseling practice can publish a records request page that explains how patients get their records. (561) 291-2681.",
    "answer": "A records request page explains how a patient asks for their own records: who to contact, what the request needs, how identity is checked, how long the office takes, and any permitted fee. Link to a request form that does not ask for health details, and give a phone number for help.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T12:00:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Patients have a right to ask, and they search for how"
      },
      {
        "type": "p",
        "text": "Under HIPAA, patients generally have a right to see and get a copy of their health records. The federal Department of Health and Human Services publishes guidance on how that right of access works. Patients do not read guidance, though. They search for how to get my medical records, then call the practice. A clear page saves those calls and helps patients reach the right person."
      },
      {
        "type": "p",
        "text": "Practices of every kind receive these requests: a primary care office when a patient moves, and a therapy practice when a client changes providers. The page below suits both."
      },
      {
        "type": "h2",
        "text": "What the page should include"
      },
      {
        "type": "ol",
        "items": [
          "Who to contact: a named role and a phone number, plus a postal or secure way to send the request.",
          "What a request needs: the patient's name, date of birth, a signature and what is being asked for. Say which items are required and which are optional.",
          "How identity is checked, in one sentence, without asking for sensitive documents by email.",
          "How the patient can receive the records: paper, a portable disk, a portal download or secure transfer to another provider.",
          "How long the office usually takes, as an honest range, and a note that the law sets limits you will follow.",
          "Any fee, described as the reasonable, cost-based amount your office charges, with a link to the details."
        ]
      },
      {
        "type": "h2",
        "text": "Link a form, but keep it clean"
      },
      {
        "type": "p",
        "text": "Offer a downloadable request form or a short online form that asks for identity and contact details only. It must not ask the patient to list conditions, medications or reasons. Say so plainly and tell patients they can bring or send the signed form by the method you name. For anything that includes health details, use the portal or a secure method your office supports, as covered in our guide on [publishing new-patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data)."
      },
      {
        "type": "h3",
        "text": "Records for someone else"
      },
      {
        "type": "p",
        "text": "Patients often ask on behalf of a child, a parent or a partner. Add a short paragraph on who may request records for another person and what proof is needed, and refer unusual cases to the front desk. Do not try to explain the legal rules for every situation on the page."
      },
      {
        "type": "h2",
        "text": "Counseling notes are different"
      },
      {
        "type": "p",
        "text": "Therapy practices keep different kinds of notes, and the rules about what a client may see can differ. Rather than explain these on the page, state the process: clients request records in writing, the clinician reviews the request, and the office replies within the timeline the law and the license board require. Refer questions to your attorney or professional association for wording."
      },
      {
        "type": "h2",
        "text": "Test the request yourself"
      },
      {
        "type": "p",
        "text": "Once a year, put in a request as if you were a patient. Call the number on the page, fill in the form, and note how long it takes for a person to respond and whether the staff member knows the process. A page that promises a response in thirty days while the front desk has never heard of it is worse than a page that says call us. Fix the gap in training or in the wording before the next patient finds it."
      },
      {
        "type": "h2",
        "text": "Make it easy to find"
      },
      {
        "type": "p",
        "text": "Link the page from the footer, the contact page, the patient portal page and any location page. Use plain wording in the title, such as Request Your Medical Records, and put the phone number high on the page. A patient who moves is not going to read a long policy to find that number."
      },
      {
        "type": "p",
        "text": "Check the page once a year against your actual process. If you change vendors or release-of-information handling, update the page that week. This belongs on the same annual list as the policy pages we describe in [what to update when a practice changes hands](/guides/protecting-your-online-presence-when-a-medical-practice-changes-hands-or-a-provider-retires)."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "The contact person, phone number and mailing method are current.",
          "The form asks for identity and contact details only.",
          "The fee, if any, has been confirmed by your compliance advisor.",
          "The turnaround you state is one the office really meets."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a records request page include?",
        "a": "Who to contact, what the request needs, how identity is checked, how records can be received, the usual turnaround and any permitted fee, plus a phone number for help."
      },
      {
        "q": "Can the request form collect health information?",
        "a": "It should not. Ask for identity and contact details and what records are wanted, and use a secure channel for anything more."
      },
      {
        "q": "Can a practice charge for records?",
        "a": "The law allows a reasonable, cost-based fee in some cases. State your fee honestly and have your compliance advisor confirm it."
      },
      {
        "q": "How long can a practice take to respond?",
        "a": "The law sets limits, and some states set their own. Publish your usual range and follow the shorter of the applicable rules."
      },
      {
        "q": "Is the process the same for counseling records?",
        "a": "Not always. Describe the process, route special questions to the clinician and have your attorney confirm the wording."
      }
    ],
    "citations": [
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "Individuals' right under HIPAA to access their health information",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      }
    ],
    "links": [
      {
        "href": "/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data",
        "label": "New-Patient Forms Online",
        "description": "Publish forms without exposing patient data."
      },
      {
        "href": "/guides/protecting-your-online-presence-when-a-medical-practice-changes-hands-or-a-provider-retires",
        "label": "Practice Changes Hands",
        "description": "Protect your online presence."
      },
      {
        "href": "/guides/what-to-put-on-a-medical-practice-contact-page",
        "label": "Contact Page Checklist",
        "description": "Phone, address and hours done right."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "insurance-verification-and-benefits-check-page-for-a-therapy-practice",
    "keyword": "insurance verification and benefits check page for a therapy practice",
    "category": "How-to",
    "title": "Insurance Verification and Benefits Check Page for a Therapy Practice",
    "metaTitle": "Insurance Verification Page for a Therapy Practice",
    "metaDescription": "How a therapy practice can explain insurance verification: what the office checks, what clients should ask their plan, and what to avoid. (561) 291-2681.",
    "answer": "An insurance verification page explains which plans the practice takes, what the office checks before a first session, what clients should ask their own plan, and that a benefits check is an estimate, not a guarantee. Collect no health details, and link to your fees and out-of-network pages.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T12:20:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "The question behind most first calls"
      },
      {
        "type": "p",
        "text": "For many clients, the real first question is not about therapy at all. It is: will my insurance cover this? A therapy practice that answers on its website, in plain language, saves the front desk time and loses fewer callers who give up. It also gives clients a clear list of what to have ready."
      },
      {
        "type": "p",
        "text": "The page should be honest about a hard fact: a benefits check is a snapshot, and a plan can change its answer later. Explaining that kindly is better than letting a client discover it from a bill."
      },
      {
        "type": "h2",
        "text": "What to state on the page"
      },
      {
        "type": "ul",
        "items": [
          "The plans you are in network with, listed by name, with the date the list was last confirmed.",
          "What the office does for you, such as checking eligibility and basic mental health benefits before the first session, and what it does not do.",
          "What the client should ask their plan, in a short list they can read from their phone.",
          "What happens if you are out of network, with a link to the page that explains superbills and reimbursement.",
          "What a verification covers and how long it usually takes, as a range."
        ]
      },
      {
        "type": "h2",
        "text": "A short list for the client to ask their plan"
      },
      {
        "type": "p",
        "text": "Clients often do not know the right words. Give them a few questions they can copy, and keep the list short so it is used."
      },
      {
        "type": "table",
        "headers": [
          "Ask your plan",
          "Why it matters"
        ],
        "rows": [
          [
            "Do I have outpatient mental health benefits, and is a visit with a licensed counselor covered?",
            "Confirms coverage exists for this kind of care."
          ],
          [
            "What is my copay or coinsurance per session?",
            "Sets the cost for each visit."
          ],
          [
            "Is there a deductible and how much is left?",
            "A deductible can mean paying the full rate first."
          ],
          [
            "Is prior authorization or a referral required?",
            "Some plans require approval before coverage starts."
          ],
          [
            "Is a visit by telehealth covered the same way?",
            "Telehealth rules can differ by plan."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Be careful with promises"
      },
      {
        "type": "p",
        "text": "Never say that insurance will cover sessions, only that the office will check and report what the plan says. Add one line on the page: a benefits check is based on information from the plan on the day we check and is not a guarantee of payment. The federal No Surprises Act also gives clients with no insurance or who choose not to use it a right to a good faith estimate of costs, which your fees page should address."
      },
      {
        "type": "h3",
        "text": "Keep the form small"
      },
      {
        "type": "p",
        "text": "If you let clients submit insurance details online, ask for plan name, member ID, date of birth and a phone number, and state that you do not need to know why they are seeking care. Use a secure form or a phone call for member IDs where possible, and do not accept them by ordinary email. Our guide on [new-patient forms online without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) covers the setup."
      },
      {
        "type": "h2",
        "text": "What a good verification note looks like"
      },
      {
        "type": "p",
        "text": "When the office finishes a check, the client should receive a short, plain summary rather than a screen of codes. For example: your plan lists a copay for outpatient visits, a deductible that is partly met, and no referral requirement. Remember this is an estimate from today. Writing the summary the same way every time makes it easy to train new staff, and it keeps the conversation focused on what the client needs to know. Store the note in your practice management system, not in an email thread."
      },
      {
        "type": "p",
        "text": "If a plan cannot be reached the same day, tell the client so and give a realistic window. Silence while you wait for a phone tree is the thing clients remember."
      },
      {
        "type": "h2",
        "text": "Keep it matched with the rest of your site"
      },
      {
        "type": "p",
        "text": "The plan list on this page should agree with your Google Business Profile, your directory entries and your fees page. When a plan leaves your network or joins it, update all of them, as explained in our guide on [what to update online when you join or leave an insurance network](/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network). A mismatched list is the fastest way to create angry callers."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "The plan list shows the date it was last confirmed with each insurer.",
          "The page says a benefits check is an estimate and not a guarantee.",
          "Out-of-network clients are pointed to the fees and superbill page.",
          "The form asks for plan details only and never for the reason for therapy.",
          "Member IDs are never requested by ordinary email.",
          "The same plan list appears on Google and your directory profiles."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a therapy practice's insurance page say?",
        "a": "Which plans are in network, what the office checks before a first session, what clients should ask their plan, and that a benefits check is an estimate rather than a guarantee."
      },
      {
        "q": "Should the page promise that insurance will pay?",
        "a": "No. Say the office will check benefits and report what the plan says, and that final payment depends on the plan."
      },
      {
        "q": "What if I am out of network?",
        "a": "Link to a page that explains superbills and reimbursement, and state your self-pay rate."
      },
      {
        "q": "Can clients submit insurance information online?",
        "a": "Yes, if the form is secure and asks for plan details only. Do not ask why they want therapy, and do not take member IDs by ordinary email."
      },
      {
        "q": "How often should the plan list be updated?",
        "a": "Whenever a contract changes, and check it at least monthly alongside your Google profile and directories."
      }
    ],
    "citations": [
      {
        "publisher": "Centers for Medicare & Medicaid Services",
        "label": "No Surprises Act overview",
        "href": "https://www.cms.gov/nosurprises"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      }
    ],
    "links": [
      {
        "href": "/guides/what-to-update-online-when-your-medical-practice-joins-or-leaves-an-insurance-network",
        "label": "Insurance Network Changes",
        "description": "Update every listing together."
      },
      {
        "href": "/guides/therapy-practice-fees-page-sliding-scale-out-of-network-and-superbills-explained",
        "label": "Fees Page",
        "description": "Explain sliding scale and superbills."
      },
      {
        "href": "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website",
        "label": "Self-Pay Prices",
        "description": "Publish prices without confusion."
      },
      {
        "href": "/therapist-seo",
        "label": "Therapist Marketing",
        "description": "Our service for therapy and counseling practices."
      }
    ]
  },
  {
    "slug": "prescription-refill-request-page-for-a-primary-care-practice-without-clinical-advice",
    "keyword": "prescription refill request page for a primary care practice without clinical advice",
    "category": "How-to",
    "title": "Prescription Refill Request Page for a Primary Care Practice Without Clinical Advice",
    "metaTitle": "Prescription Refill Request Page for a Primary Care Practice",
    "metaDescription": "How a primary care practice can publish a refill request page that explains the process without giving clinical advice. (561) 291-2681.",
    "answer": "A refill request page explains how patients ask for a refill, how much notice the office needs, how to name their pharmacy and what happens next. It stays about process: no medication guidance, no dosing and no advice on missed doses. Point patients to the portal or phone, and to 911 for emergencies.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T13:00:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Refills are one of the most common reasons to call"
      },
      {
        "type": "p",
        "text": "Ask any front desk what takes up the phone line and refills will be near the top. Patients call to ask how to request one, how long it takes, and whether the pharmacy has been told. A page that answers these questions in plain language can cut the volume of those calls and make the answers consistent no matter who picks up."
      },
      {
        "type": "p",
        "text": "The page must stay on the right side of one line: it explains the office process, and it never tells a patient what to do with a medicine. Anything clinical is for the clinician."
      },
      {
        "type": "h2",
        "text": "What the page should cover"
      },
      {
        "type": "ol",
        "items": [
          "How to ask: through the patient portal, by calling the office, or through the pharmacy's request, whichever your practice really uses.",
          "How much notice to give, as a number of business days your office asks for, and a note that requests on a weekend or holiday take longer.",
          "What to have ready: the patient's name, date of birth, the pharmacy name and location, and the name of the item as printed on the pharmacy label.",
          "What the office checks: whether the patient has had a recent visit, and whether the clinician needs to review the request.",
          "What happens next: how the patient is told when it is done, and who to call if the pharmacy says it has not received it.",
          "A closing line pointing to the visit types page if an appointment is needed first."
        ]
      },
      {
        "type": "h2",
        "text": "Say what the page cannot do"
      },
      {
        "type": "p",
        "text": "Make it clear that the page is not for questions about how to take a medicine, side effects, running out and not knowing what to do, or anything that feels urgent. Tell patients to call the office during open hours, and to call 911 in an emergency or contact the Poison Help line for a possible overdose or poisoning. This is a safety message, not medical advice."
      },
      {
        "type": "ul",
        "items": [
          "Do not list medicines, doses or example regimens on the page.",
          "Do not tell patients to skip, double or change a dose.",
          "Do not say anything is safe to take with something else.",
          "Do not describe controlled substance rules in a way that sounds like advice. Link to a plain statement of your office policy and let the clinician explain."
        ]
      },
      {
        "type": "h2",
        "text": "Keep the form safe"
      },
      {
        "type": "p",
        "text": "If you add a request form, ask for the minimum: name, date of birth, phone, pharmacy and a free-text field with a clear warning not to include health details. An ordinary web form is not a secure channel for a medication list, so prefer a link to the portal where the patient can send the request. Our guide on [publishing new-patient forms without exposing patient data](/guides/new-patient-forms-online-how-to-publish-them-without-exposing-patient-data) explains the boundary."
      },
      {
        "type": "h3",
        "text": "Hours and holidays"
      },
      {
        "type": "p",
        "text": "Spell out what happens on weekends and holidays and during hurricane closures. If the office closes, tell patients how to reach the on-call line and how the pharmacy can contact the practice. The [after-hours calls guide](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice) explains how to set that message up. Patients also ask which pharmacy the office uses, which a [pharmacy and lab partner information page for a primary care practice](/guides/pharmacy-and-lab-partner-information-page-for-a-primary-care-practice) can answer without recommending anyone."
      },
      {
        "type": "h2",
        "text": "Link it and keep it current"
      },
      {
        "type": "p",
        "text": "Link the page from the patient portal page, the contact page, the footer and the voicemail greeting if it can be spoken in a sentence. Update the notice period and process whenever your electronic record system or pharmacy workflow changes. Test the page once a quarter by following its own instructions, as described in our [weekly 15-minute check](/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager)."
      },
      {
        "type": "p",
        "text": "Keep the language plain. A page that is easy to scan on a phone, with the notice period in the first two lines, will do more than a long policy that no one reads."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "The notice period is stated in business days that match your real process.",
          "The page names the portal, phone and any other route that actually works.",
          "No medicine, dose or instruction appears anywhere on the page.",
          "An emergency notice mentions 911 and the Poison Help line.",
          "Weekend, holiday and storm-closure handling is explained.",
          "The page has been tested by following its own steps."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a prescription refill request page say?",
        "a": "How to request a refill, how much notice the office needs, what to have ready, what happens next and how to reach the office. It should not give medication advice."
      },
      {
        "q": "Can patients request refills through the website form?",
        "a": "Prefer the patient portal, which is built for it. If a form is used, ask for the minimum and warn patients not to include health details."
      },
      {
        "q": "How much notice should the page ask for?",
        "a": "State the number of business days your office actually needs, and add that weekends and holidays take longer."
      },
      {
        "q": "What should the page say about urgent situations?",
        "a": "Tell patients to call the office during open hours, call 911 in an emergency and use the Poison Help line if they think someone has taken too much of a medicine."
      },
      {
        "q": "Should the page list medications?",
        "a": "No. Naming medicines or doses moves the page toward clinical advice. Keep it about the process."
      }
    ],
    "citations": [
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      },
      {
        "publisher": "Plain Language Action and Information Network",
        "label": "Federal plain language guidelines",
        "href": "https://www.plainlanguage.gov/"
      }
    ],
    "links": [
      {
        "href": "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice",
        "label": "After-Hours Calls",
        "description": "What patients hear when you are closed."
      },
      {
        "href": "/guides/a-weekly-15-minute-marketing-check-for-a-medical-practice-manager",
        "label": "Weekly 15-Minute Check",
        "description": "A routine for the practice manager."
      },
      {
        "href": "/guides/how-to-explain-visit-types-and-appointment-lengths-on-a-primary-care-practice-website",
        "label": "Visit Types",
        "description": "Explain appointments in plain words."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "billing-and-payment-questions-page-for-a-medical-practice",
    "keyword": "billing and payment questions page for a medical practice",
    "category": "How-to",
    "title": "Billing and Payment Questions Page for a Medical Practice",
    "metaTitle": "Billing and Payment Questions Page for a Medical Practice",
    "metaDescription": "What a billing questions page should say: how to read a statement, how to pay, who to call and what you may ask. Call (561) 291-2681.",
    "answer": "A billing questions page tells patients how to read a statement, the ways they can pay, who to call about a charge, how payment plans work and what to bring to a conversation. Use plain words, never take card numbers by email or form, and avoid promises about what insurance will pay.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T13:20:00Z",
    "dateModified": "2026-10-13",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Billing is the page patients look for when they are worried"
      },
      {
        "type": "p",
        "text": "A patient opens a billing page when something has arrived in the mail that they do not understand. They are often confused, sometimes upset, and rarely in the mood to read a policy. That makes a good billing page one of the kindest things on a website, and one of the fastest ways to cut repeated calls."
      },
      {
        "type": "p",
        "text": "Write it for that person. Short sections, plain words, one phone number at the top."
      },
      {
        "type": "h2",
        "text": "Answer these five questions first"
      },
      {
        "type": "table",
        "headers": [
          "Question",
          "What to say"
        ],
        "rows": [
          [
            "How do I read my statement?",
            "Explain the main lines in plain language: charges, insurance payments, adjustments and the amount the patient owes."
          ],
          [
            "How can I pay?",
            "List the ways your office accepts: portal, phone, mail, in person. Say which are secure."
          ],
          [
            "Who do I call about a charge?",
            "Give a named role, a number and the hours."
          ],
          [
            "Can I set up a payment plan?",
            "Say whether the practice offers one and how to ask."
          ],
          [
            "What if I disagree with a bill?",
            "Describe how to ask for a review, and what documents help."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Keep the page free of dollar amounts for specific services unless you publish self-pay prices on purpose. If you do, our guide on [publishing self-pay prices](/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website) explains the right format."
      },
      {
        "type": "h2",
        "text": "Keep payments safe"
      },
      {
        "type": "ul",
        "items": [
          "Never ask patients to send card numbers by email or through an ordinary contact form.",
          "Send patients to a payment page on a secure, named payment provider, and say that the web address begins with https.",
          "Tell patients that your office will not ask for card numbers by text message. Scam texts that imitate healthcare billing are common.",
          "Do not display patient names, account numbers or balances on any public page."
        ]
      },
      {
        "type": "h2",
        "text": "Insurance, estimates and honesty"
      },
      {
        "type": "p",
        "text": "Say clearly that the amount a patient owes depends on the plan and on the date the insurer processed the claim. Never say insurance will pay. A good billing page explains the sequence: the office sends the claim, the plan responds, and the patient receives a statement for the balance. Patients who have no insurance, or who choose not to use it, have a right under the No Surprises Act to ask for a good faith estimate, which your page can mention with a link to the federal overview."
      },
      {
        "type": "h3",
        "text": "Keep clinical talk out"
      },
      {
        "type": "p",
        "text": "The page is about money, not care. Do not discuss a diagnosis or reason for a visit when explaining a charge, and do not ask patients to describe them. If a question needs the chart, ask the patient to call so a staff member can verify identity first."
      },
      {
        "type": "h2",
        "text": "When the call is the right answer"
      },
      {
        "type": "p",
        "text": "Some billing questions cannot be settled on a web page: a denied claim, a duplicate charge, a balance after a change of plan. Say so, and tell the patient what to have in hand when they call, such as the statement, the date of the visit and the name of their plan. Staff who are told in advance that the caller is prepared can resolve the problem in one conversation instead of three."
      },
      {
        "type": "p",
        "text": "Add the hours when the billing line is staffed, and how voicemails are handled. A patient who leaves a message and hears nothing for a week assumes the practice is ignoring them."
      },
      {
        "type": "h2",
        "text": "Make it findable"
      },
      {
        "type": "p",
        "text": "Link the page from the footer, the patient portal page, statement envelopes and email receipts if you use them. Include the same phone number and hours as your contact page and Google Business Profile, because a billing question is a common reason for a call at the end of the month. Our guide on [what to put on a medical practice contact page](/guides/what-to-put-on-a-medical-practice-contact-page) shows how to keep the details aligned."
      },
      {
        "type": "p",
        "text": "Review the page twice a year, and after any change of billing vendor. If staff change the payment portal, update the page the same day. A broken link on a billing page is the quickest way to produce an angry caller."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "Every payment link goes to a secure address that begins with https.",
          "No page, form or message asks patients for a card number by email or text.",
          "The billing phone number and hours match the contact page.",
          "The page does not discuss any diagnosis or reason for a visit.",
          "Any mention of a good faith estimate links to the federal overview.",
          "Someone reviews the page after each change of billing vendor.",
          "Staff know which questions to answer on the phone and which to pass to the billing lead.",
          "The page loads quickly and reads well on a phone."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a medical billing questions page include?",
        "a": "How to read a statement, ways to pay, who to call about a charge, whether payment plans exist and how to dispute a bill, all in plain language."
      },
      {
        "q": "Can patients pay by email or form?",
        "a": "No. Use a secure payment provider with an https address, and never ask patients to send card numbers by email or text."
      },
      {
        "q": "Should the page promise what insurance will pay?",
        "a": "No. State that the patient's share depends on the plan and on how the insurer processes the claim."
      },
      {
        "q": "Can I publish prices for services?",
        "a": "Only if you do it deliberately and keep them accurate. Otherwise say how patients can ask for an estimate."
      },
      {
        "q": "How often should the page be reviewed?",
        "a": "At least twice a year and whenever the payment vendor, hours or phone number change."
      }
    ],
    "citations": [
      {
        "publisher": "Centers for Medicare & Medicaid Services",
        "label": "No Surprises Act overview",
        "href": "https://www.cms.gov/nosurprises"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "Plain Language Action and Information Network",
        "label": "Federal plain language guidelines",
        "href": "https://www.plainlanguage.gov/"
      }
    ],
    "links": [
      {
        "href": "/guides/how-to-publish-self-pay-prices-on-a-medical-practice-website",
        "label": "Self-Pay Prices",
        "description": "Publish prices without confusion."
      },
      {
        "href": "/guides/what-to-put-on-a-medical-practice-contact-page",
        "label": "Contact Page Checklist",
        "description": "Phone, address and hours done right."
      },
      {
        "href": "/guides/insurance-verification-and-benefits-check-page-for-a-therapy-practice",
        "label": "Insurance Verification",
        "description": "Explain a benefits check honestly."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "teen-therapy-page-for-parents-consent-confidentiality-and-logistics-without-clinical-claims",
    "keyword": "teen therapy page for parents: consent, confidentiality and logistics without clinical claims",
    "category": "How-to",
    "title": "Teen Therapy Page for Parents: Consent, Confidentiality and Logistics Without Clinical Claims",
    "metaTitle": "Teen Therapy Page for Parents: Consent and Logistics",
    "metaDescription": "How a therapy practice can write a teen therapy page for parents covering consent, confidentiality and scheduling without clinical claims. (561) 291-2681.",
    "answer": "A teen therapy page for parents explains who the practice sees, how consent works, how confidentiality is handled in plain terms, how parents are involved, scheduling and fees. It avoids clinical claims, outcomes and diagnostic lists. Have your attorney or licensing board confirm the consent and confidentiality wording before it goes live.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T13:40:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "The reader is usually the parent"
      },
      {
        "type": "p",
        "text": "When a family looks for therapy for a teenager, the person typing into Google is usually a parent or guardian. They are worried, short on time and unsure what the process involves. They also want to know what happens to what their child says. A teen therapy page is where those questions get answered before the first call."
      },
      {
        "type": "p",
        "text": "It also has to speak, a little, to the teen. Many teens read the page too, and a respectful tone toward them signals the kind of practice you are."
      },
      {
        "type": "h2",
        "text": "What the page should cover"
      },
      {
        "type": "ul",
        "items": [
          "Who you see: the age range, and whether you work with individual teens, families or both.",
          "How consent works: who must sign, what documents are needed and how custody arrangements are handled.",
          "How confidentiality works in everyday terms, and the limits that apply.",
          "How parents are involved: whether you meet them separately, how often and what they will and will not be told.",
          "Logistics: session length, scheduling around school, telehealth options, and how to reach the office.",
          "Fees, insurance and cancellation, with links to the full pages."
        ]
      },
      {
        "type": "h2",
        "text": "Handle consent and confidentiality with care"
      },
      {
        "type": "p",
        "text": "This is the part of the page where wording matters most, and the rules depend on state law, the clinician's license and the situation. Do not paraphrase the law from memory. State the practice's own approach in plain words, such as: we explain to families at the first visit what stays private and what we may need to share, and we do this in writing. Then ask your attorney or licensing board to confirm the wording."
      },
      {
        "type": "p",
        "text": "The HHS site explains how HIPAA treats parents and minors, and it is a good reference for staff, but it is not a substitute for state-specific advice."
      },
      {
        "type": "h3",
        "text": "Parents and teens need different assurances"
      },
      {
        "type": "p",
        "text": "Parents want to know they will not be shut out. Teens want to know their words will not be repeated lightly. A single honest paragraph can say both: the clinician works with the teen and the family, shares what is needed for safety and for care, and explains the limits before the work begins."
      },
      {
        "type": "h2",
        "text": "Avoid clinical claims"
      },
      {
        "type": "ul",
        "items": [
          "Do not list symptoms or conditions as a checklist for parents to match against their child.",
          "Do not promise outcomes such as improved grades, fewer conflicts or better mood.",
          "Do not use fear in headlines about teen mental health statistics.",
          "Do not offer advice on how to handle a crisis at home. Link your crisis resources instead."
        ]
      },
      {
        "type": "h2",
        "text": "Scheduling, school and privacy at home"
      },
      {
        "type": "p",
        "text": "Teens live around school, sports and family transport, so scheduling is a real barrier. Say when you offer late afternoon or evening sessions, whether telehealth is available and where a teen can take a call privately. Some families do not have a quiet room, so mention that a parked car or a library room sometimes works for video sessions, and that you are happy to talk through options with them."
      },
      {
        "type": "p",
        "text": "Describe how sessions are billed, who receives statements and who handles insurance paperwork. If a teen is on a parent's plan, the plan may send explanations of benefits to the policyholder, which is worth a short, factual note so no one is surprised."
      },
      {
        "type": "h2",
        "text": "Crisis resources and tone"
      },
      {
        "type": "p",
        "text": "A parent may arrive in the middle of a hard night. Put a short, visible notice on the page: for an emergency call 911, and for a mental health crisis call or text 988. Match it to the crisis section described in our guide to [emergency and crisis resources for a counseling website](/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website). Practices that also see young adults can give college students their own page, as our guide on a [college student counseling page without clinical claims](/guides/college-student-counseling-page-for-a-counseling-practice-without-clinical-claims) explains, because an adult student's privacy rules differ from a teenager's."
      },
      {
        "type": "h2",
        "text": "Make the first step small"
      },
      {
        "type": "p",
        "text": "End with one clear next step, such as a free consultation call or a short contact form that asks for a parent's name and number and a preferred time, never for details about the teen's concerns. Our [consultation call guide](/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid) explains how to describe it. Keep the page consistent with your [first session page](/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice) so families see the same story at each stage."
      }
    ],
    "faqs": [
      {
        "q": "What should a teen therapy page for parents include?",
        "a": "The age range you see, how consent works, how confidentiality works in plain terms, how parents are involved, logistics and fees, plus a visible crisis notice."
      },
      {
        "q": "Should the page explain state law on minors?",
        "a": "Not in detail. State your practice's approach and have an attorney or your licensing board confirm the wording."
      },
      {
        "q": "Can the page list signs parents should look for?",
        "a": "Avoid symptom checklists. They can read as self-diagnosis and move the page toward clinical claims."
      },
      {
        "q": "What contact form is appropriate?",
        "a": "A parent's name, phone or email and a preferred time. Do not ask about the teen's concerns."
      },
      {
        "q": "What crisis information belongs on the page?",
        "a": "A visible note to call 911 in an emergency and call or text 988 for a mental health crisis, matching the rest of your site."
      }
    ],
    "citations": [
      {
        "publisher": "988 Suicide & Crisis Lifeline",
        "label": "988 Lifeline",
        "href": "https://988lifeline.org/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "American Psychological Association",
        "label": "Ethical Principles of Psychologists and Code of Conduct",
        "href": "https://www.apa.org/ethics/code"
      }
    ],
    "links": [
      {
        "href": "/guides/emergency-and-crisis-resources-section-for-a-counseling-practice-website",
        "label": "Crisis Resources Section",
        "description": "What a counseling site should say."
      },
      {
        "href": "/guides/free-consultation-call-page-for-a-therapy-practice-what-to-say-and-what-to-avoid",
        "label": "Consultation Call Page",
        "description": "Describe a free call honestly."
      },
      {
        "href": "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims",
        "label": "Specialty Pages",
        "description": "Write them without clinical claims."
      },
      {
        "href": "/therapist-seo",
        "label": "Therapist Marketing",
        "description": "Our service for therapy and counseling practices."
      }
    ]
  },
  {
    "slug": "lab-results-and-portal-message-expectations-page-for-a-primary-care-practice",
    "keyword": "lab results and portal message expectations page for a primary care practice",
    "category": "How-to",
    "title": "Lab Results and Portal Message Expectations Page for a Primary Care Practice",
    "metaTitle": "Lab Results and Portal Message Expectations Page",
    "metaDescription": "How a primary care practice can tell patients when results post and how fast portal messages are answered, without clinical advice. (561) 291-2681.",
    "answer": "A results and messages page tells patients how test results reach them, that results may appear in the portal before a clinician has reviewed them, how long portal messages usually take to answer, and where to call if they are worried. It gives no interpretation of any result and always shows an emergency notice.",
    "author": "Liam Costello",
    "publishDate": "2026-10-13T14:00:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "Patients now see results before the doctor does"
      },
      {
        "type": "p",
        "text": "Federal information blocking rules push practices to release results to patients promptly, which often means a result appears in the portal before the clinician has had time to review it. That is good for access, but it can be alarming. A patient who sees an unfamiliar number at nine at night and cannot reach anyone will search the web, and they may land on a page that explains nothing. Link the results page to a [pharmacy and lab partner information page for a primary care practice](/guides/pharmacy-and-lab-partner-information-page-for-a-primary-care-practice) so patients can find a draw site and see how results reach them."
      },
      {
        "type": "p",
        "text": "A short expectations page, written in plain language, tells patients what to expect and who to contact. It is about process, not interpretation."
      },
      {
        "type": "h2",
        "text": "What to explain"
      },
      {
        "type": "ol",
        "items": [
          "How results are shared: through the portal, by phone, by mail, or a mix, depending on your office.",
          "That results may be released to the portal as soon as they are ready, which can be before a clinician has reviewed them.",
          "Roughly how long a clinician takes to review and respond, as an honest range in business days.",
          "How to ask a question: through portal messages, by phone, or at the next visit.",
          "What portal messages are for, and how long they usually take to answer.",
          "What to do if something feels urgent."
        ]
      },
      {
        "type": "h2",
        "text": "What a portal message is not for"
      },
      {
        "type": "ul",
        "items": [
          "Emergencies or anything that cannot wait. Patients should call 911.",
          "Same-day clinical concerns. These need a phone call so staff can respond quickly.",
          "Requests that need an appointment, which should go to the scheduling line.",
          "Anything sensitive that the patient would prefer to discuss in person."
        ]
      },
      {
        "type": "p",
        "text": "Say this kindly and clearly. Patients who understand the purpose of the channel use it better."
      },
      {
        "type": "h2",
        "text": "Never interpret results on the page"
      },
      {
        "type": "p",
        "text": "The page must not explain what a number means, say what is normal, or reassure patients that no news is good news. Those are clinical statements. Instead, it can say that a clinician reviews each result in the context of the patient's history and will explain what it means. That sentence does a lot of work and carries no clinical claim."
      },
      {
        "type": "h3",
        "text": "What about unusual results"
      },
      {
        "type": "p",
        "text": "Some patients will worry about a result that arrives at a bad moment. The page can acknowledge it: if a result is upsetting, you can call us and we will help you reach the right person. Give the phone number high on the page and the hours when someone is there."
      },
      {
        "type": "h2",
        "text": "Tell patients how to prepare"
      },
      {
        "type": "p",
        "text": "A little preparation lowers anxiety. Suggest that patients write their questions down before they call, note the date a test was done, and have their portal login ready. Remind them that a clinician cannot discuss results with anyone else unless the patient has given permission, and describe how a family member can be added if they want that. Keep it short, since a long list will not be read."
      },
      {
        "type": "p",
        "text": "If you offer results by appointment for certain tests, say so and explain how to book. Patients prefer knowing in advance that a conversation is planned over discovering it after a worrying message."
      },
      {
        "type": "h2",
        "text": "Set realistic response times"
      },
      {
        "type": "table",
        "headers": [
          "Channel",
          "What to publish"
        ],
        "rows": [
          [
            "Portal message",
            "Usually answered within a stated number of business days. Do not promise faster than you can deliver."
          ],
          [
            "Phone call",
            "Hours the line is staffed and what happens to voicemail."
          ],
          [
            "After hours",
            "How to reach the on-call service and when to go to urgent care or call 911."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Be careful with numbers. If your office says one business day but often takes three, the page will do harm. Track your real response time for a month before you publish a promise."
      },
      {
        "type": "h2",
        "text": "Link it where it helps"
      },
      {
        "type": "p",
        "text": "Link the page from the patient portal page, the contact page, the appointment reminder and the footer. Put one line about it in the portal's welcome message if your system allows. It pairs naturally with the [patient portal login page](/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe) and the [after-hours calls guide](/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice)."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "Response times come from a month of real measurements, not hopes.",
          "No sentence explains what a result means or what is normal.",
          "An emergency notice tells patients to call 911 and not to use messages.",
          "The phone number and hours sit near the top.",
          "The page explains how a family member can be added with the patient's permission.",
          "It is linked from the portal page and from appointment reminders.",
          "Front desk staff have read it and give the same answers on the phone.",
          "The page loads quickly and reads well on a phone."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a lab results expectations page say?",
        "a": "How results are shared, that they may appear in the portal before a clinician reviews them, the usual review time, how to ask questions and what to do if something feels urgent."
      },
      {
        "q": "Should the page explain what results mean?",
        "a": "No. Interpretation is clinical. Say a clinician will review and explain, and give a phone number."
      },
      {
        "q": "How fast should portal messages be answered?",
        "a": "Publish an honest range based on your real response time and avoid promising more than staff can deliver."
      },
      {
        "q": "What belongs in an emergency notice?",
        "a": "Tell patients to call 911 for emergencies and not to use portal messages for urgent concerns."
      },
      {
        "q": "Where should the page be linked?",
        "a": "From the patient portal page, the contact page, appointment reminders and the footer."
      }
    ],
    "citations": [
      {
        "publisher": "HealthIT.gov",
        "label": "Information blocking",
        "href": "https://www.healthit.gov/topic/information-blocking"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "publisher": "ADA.gov",
        "label": "Web accessibility guidance for businesses",
        "href": "https://www.ada.gov/resources/web-guidance/"
      }
    ],
    "links": [
      {
        "href": "/guides/patient-portal-login-page-for-a-medical-practice-how-to-make-it-findable-and-safe",
        "label": "Patient Portal Login Page",
        "description": "Make it findable and safe."
      },
      {
        "href": "/guides/how-to-handle-after-hours-calls-and-voicemail-at-a-medical-practice",
        "label": "After-Hours Calls",
        "description": "What patients hear when you are closed."
      },
      {
        "href": "/guides/plain-language-and-reading-level-for-patient-facing-web-content",
        "label": "Plain Language",
        "description": "Write for the patient, not the chart."
      },
      {
        "href": "/primary-care",
        "label": "Primary Care Marketing",
        "description": "Our service for primary care practices."
      }
    ]
  },
  {
    "slug": "our-approach-page-for-a-therapy-practice-without-outcome-claims",
    "keyword": "our approach page for a therapy practice without outcome claims",
    "category": "How-to",
    "title": "Our Approach Page for a Therapy Practice Without Outcome Claims",
    "metaTitle": "Our Approach Page for a Therapy Practice Without Claims",
    "metaDescription": "How a therapy practice can describe its approach, style and what sessions are like without outcome claims or invented credentials. (561) 291-2681.",
    "answer": "An approach page for a therapy practice describes how the clinician works, what sessions are like and what a client can expect to do, in plain words. It states training and licensure only as verified, names methods without promising results, and avoids before-and-after language. Add a short crisis notice and a clear next step.",
    "author": "Gio LaRoche",
    "publishDate": "2026-10-13T14:20:00Z",
    "dateModified": "2026-10-19",
    "readMinutes": 6,
    "sections": [
      {
        "type": "h2",
        "text": "What clients want to know before they call"
      },
      {
        "type": "p",
        "text": "People choosing a therapist want to know what working with you will feel like. They are not looking for a technical lecture. They want to know whether you listen, whether you give homework, whether you talk or mostly ask questions, and whether they will feel judged. An approach page answers those questions in your own voice."
      },
      {
        "type": "p",
        "text": "It is also one of the most useful pages for answer engines. A paragraph that begins with how I work, written plainly, is the type of passage they quote."
      },
      {
        "type": "h2",
        "text": "What belongs on the page"
      },
      {
        "type": "ul",
        "items": [
          "A short statement of how sessions run, such as how long they are and what the first few look like.",
          "The methods you use, named in plain words, with a sentence on what each means in practice.",
          "Your role and the client's role: what you do, and what you ask of them.",
          "What you do not do, such as prescribe, if that applies to your license.",
          "Your licensure and training, only as verified, with the license type stated correctly.",
          "A link to your first session page and your contact page."
        ]
      },
      {
        "type": "h2",
        "text": "Write about what you do, not what will happen"
      },
      {
        "type": "p",
        "text": "The central rule is to describe your process and never promise a result. The sentence we work together to set goals is a process. The sentence you will feel better in six weeks is a promise. Advertising rules and professional ethics codes both warn against guarantees, testimonials that imply outcomes and before-and-after language. Your licensing board is the final authority."
      },
      {
        "type": "table",
        "headers": [
          "Say this",
          "Not this"
        ],
        "rows": [
          [
            "We start by talking about what brought you in and what you hope to change.",
            "You will overcome your anxiety in a few sessions."
          ],
          [
            "I use cognitive behavioral techniques, and we practice skills together.",
            "The proven method that fixes your problem."
          ],
          [
            "Many clients find it helpful to...",
            "Clients always see results."
          ],
          [
            "I have training in trauma-informed care.",
            "The leading trauma specialist in the city."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Methods in plain words"
      },
      {
        "type": "p",
        "text": "If you name a method, explain it in a sentence a stranger can follow, and say whether you are trained in it, certified in it or simply use some of its techniques. These are different claims. Do not list a long string of acronyms to appear more qualified. Clients are not impressed by acronyms, but regulators notice them."
      },
      {
        "type": "h2",
        "text": "Voice and tone"
      },
      {
        "type": "p",
        "text": "Write in the first person if you are a solo clinician and in we if you are a group. Keep sentences short, and avoid the jargon you use with colleagues. Our guide on [plain language and reading level](/guides/plain-language-and-reading-level-for-patient-facing-web-content) offers a quick test: read the page aloud, and if you stumble, rewrite the sentence."
      },
      {
        "type": "h2",
        "text": "An example of a first paragraph"
      },
      {
        "type": "p",
        "text": "Here is a first paragraph written in this spirit, with invented details to replace. In our first few sessions we talk about what brought you in, what you want to be different and how you like to work. Sessions are 50 minutes. Between sessions I may suggest small practices you can try, and we review together how they went. You set the pace. Notice that nothing here predicts an outcome and every sentence describes something that actually happens in the room."
      },
      {
        "type": "p",
        "text": "Follow it with a paragraph about what you ask of the client, such as attending regularly and giving feedback when something is not working. Clients appreciate being treated as partners, and it signals the kind of relationship you offer."
      },
      {
        "type": "h2",
        "text": "Connect it to the rest of the site"
      },
      {
        "type": "p",
        "text": "Link from the approach page to your [specialty pages](/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims), your first session page and your fees page. Include a short notice that the website is not a substitute for care and that people in crisis should call 911 or call or text 988. Then end with a single next step, such as a consultation call or a contact form with only a name and phone number. Describing how often clients meet is part of describing how you work, and our guide on [session length and frequency explained without promising results](/guides/session-length-and-frequency-explained-on-a-therapy-practice-website-without-promising-results) shows how to word it."
      },
      {
        "type": "p",
        "text": "Review the page every year and whenever you complete new training or change how you practice. A page that describes a method you no longer use is a small but real misstatement."
      },
      {
        "type": "h3",
        "text": "Check the page before you publish"
      },
      {
        "type": "ul",
        "items": [
          "Every credential is one you hold and can verify, with the correct license type.",
          "Methods are named in plain words and described honestly as trained, certified or used.",
          "No sentence promises or predicts an outcome.",
          "A crisis notice with 911 and 988 is easy to find.",
          "The next step is one clear button that leads to a simple form.",
          "A date is set to review the page after any new training."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should a therapy practice's approach page include?",
        "a": "How sessions run, the methods used in plain words, the client's role, verified licensure and training, and a clear next step."
      },
      {
        "q": "Can the page promise results?",
        "a": "No. Describe the process, not the outcome. Avoid guarantees, before-and-after language and implied results."
      },
      {
        "q": "How should I describe a therapy method?",
        "a": "Name it, explain it in a sentence and say honestly whether you are trained, certified or simply use some of its techniques."
      },
      {
        "q": "Can I list my credentials?",
        "a": "Only those you hold and can verify, with the license type and state stated correctly."
      },
      {
        "q": "Does an approach page help with AI search?",
        "a": "Yes. A plain paragraph on how you work is a natural passage for answer engines to quote."
      }
    ],
    "citations": [
      {
        "publisher": "American Psychological Association",
        "label": "Ethical Principles of Psychologists and Code of Conduct",
        "href": "https://www.apa.org/ethics/code"
      },
      {
        "publisher": "988 Suicide & Crisis Lifeline",
        "label": "988 Lifeline",
        "href": "https://988lifeline.org/"
      },
      {
        "publisher": "U.S. Department of Health and Human Services",
        "label": "HIPAA Privacy Rule guidance",
        "href": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ],
    "links": [
      {
        "href": "/guides/specialty-pages-for-a-therapy-practice-anxiety-trauma-couples-without-clinical-claims",
        "label": "Specialty Pages",
        "description": "Write them without clinical claims."
      },
      {
        "href": "/guides/what-to-put-on-a-first-session-page-for-a-therapy-practice",
        "label": "First Session Page",
        "description": "Tell new clients what to expect."
      },
      {
        "href": "/guides/telehealth-visit-instructions-page-for-a-therapy-practice",
        "label": "Telehealth Instructions",
        "description": "Help clients join a video session."
      },
      {
        "href": "/therapist-seo",
        "label": "Therapist Marketing",
        "description": "Our service for therapy and counseling practices."
      }
    ]
  }
];
