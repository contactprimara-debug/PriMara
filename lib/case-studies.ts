/* Case studies: every number below was read from the Command Center on
   2026-10-08 and is listed with its source in
   ~/Primara-Clients/primara365/case-study-sources-2026-10-08.md.
   Do not edit a number without re-reading it and updating that file. */

export type CaseResult = {
  metric: string;
  before?: string;
  now: string;
  range: string; // date range, always shown
  note?: string;
};

export type CaseStudy = {
  slug: string;
  name: string; // client name as it should be linked
  shortName: string;
  url: string; // followed backlink target
  anchor: string; // descriptive anchor text
  kind: string; // one-line descriptor
  title: string; // <title>
  description: string; // meta description
  h1: string;
  summary: string; // answer box, 40-60 words
  context: string[]; // who they are (public facts only)
  did: { title: string; body: string }[];
  results: CaseResult[];
  notYet: string[]; // honest "what has not moved"
  faqs: { q: string; a: string }[];
  dataDate: string;
};

export const CASE_DATA_DATE = "2026-10-08";

export const caseStudies: CaseStudy[] = [
  {
    slug: "family-life-counseling-center",
    name: "Family Life Counseling Center",
    shortName: "Family Life Counseling Center",
    url: "https://familylifecounselingcenter.com/",
    anchor: "Family Life Counseling Center in Clermont, FL",
    kind: "Counseling practice with offices in Lake, Orange and Polk counties",
    title: "Case Study: Family Life Counseling Center | Primara",
    description:
      "What Primara did for Family Life Counseling Center, with dated numbers: 190 form requests in 28 days, indexed pages 49 to 77, and 191 of 191 Google reviews answered.",
    h1: "Case study: Family Life Counseling Center",
    summary:
      "Family Life Counseling Center is a Clermont, Florida counseling practice. Between 2026-09-08 and 2026-10-08 we published 85 pages for it, Google reported indexed pages rising from 49 to 77, and its form delivered 190 requests to the practice inbox. Search clicks stayed roughly flat, and we say so below.",
    context: [
      "Family Life Counseling Center has served families in Central Florida since 2004 and offers marriage, family, individual and teen counseling, in person across Lake, Orange and Polk counties and by telehealth. Primara manages its search work and its Google listings.",
      "The practice lists nine Google Business Profile listings under one brand, which makes consistent hours, phone numbers and review replies a daily job rather than a one-time setup.",
    ],
    did: [
      {
        title: "Service and location pages",
        body: "We published 85 pages through our content ledger between 2026-09-08 and 2026-10-08. Each page covers one service in one town and uses only services and details the practice confirmed in writing.",
      },
      {
        title: "Google Business Profile management",
        body: "We manage the practice's Google listings, including categories, services, hours and posts, and we check rankings on a map grid for its main town and service terms.",
      },
      {
        title: "Replies to every Google review",
        body: "Each new review gets a reply written in privacy-safe wording. The reply never confirms that the reviewer was a patient and never mentions treatment.",
      },
      {
        title: "Form tracking that reaches the practice",
        body: "Every submission from the appointment form is stored in our system and delivered to the practice's inbox. Test, spam, duplicate and click rows are excluded from every count on this page.",
      },
    ],
    results: [
      {
        metric: "Form requests received",
        now: "190",
        range: "2026-09-11 to 2026-10-08",
        note: "All 190 were delivered to the practice inbox. Earlier submissions were imported in bulk, so counts before 2026-09-11 are not comparable.",
      },
      {
        metric: "Pages Google reports as indexed",
        before: "49",
        now: "77",
        range: "2026-09-08 to 2026-10-08",
        note: "Google Search Console figure.",
      },
      {
        metric: "Pages published by Primara",
        before: "0",
        now: "85",
        range: "2026-09-08 to 2026-10-08",
      },
      {
        metric: "Google reviews answered",
        now: "191 of 191",
        range: "all reviews, as of 2026-10-08",
        note: "Across nine listings.",
      },
      {
        metric: "Reviews posted and replied to since 2026-09-01",
        now: "10 of 10, median 12.4 hours to reply",
        range: "2026-09-01 to 2026-10-08",
        note: "Hours from the review's posting time to the reply's update time.",
      },
      {
        metric: "Search impressions, 28 days",
        before: "22,921",
        now: "25,742",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
        note: "Up 12.3%.",
      },
      {
        metric: "Search clicks, 28 days",
        before: "1,168",
        now: "1,223",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
        note: "Up 4.7%.",
      },
    ],
    notYet: [
      "Only 59 of the 149 pages in the sitemap were confirmed on Google when we inspected every URL on 2026-10-07 (39.6%). Most of the rest are not yet read by Google, and getting them read is the current priority.",
      "Average search position moved from 19.4 to 25.5 over the same period, because the site now appears for many more searches, including weak ones.",
      "We cannot yet tell which page or channel produces each form request, because the form did not record a source before this month.",
    ],
    faqs: [
      {
        q: "Does the 190 include phone calls?",
        a: "No. It counts form submissions only. Phone taps and Google call-button taps are tracked separately and are never added to this number.",
      },
      {
        q: "Why compare 2026-09-08 with 2026-10-08?",
        a: "That is when our daily results history for this practice begins, so both ends of every before-and-after pair come from the same source and method.",
      },
      {
        q: "Are any patient details used on this page?",
        a: "No. We use counts only. We do not read or publish form contents, and nothing on this page describes treatment or outcomes.",
      },
    ],
    dataDate: CASE_DATA_DATE,
  },
  {
    slug: "serenity-by-a-dr-sareen",
    name: "Serenity By A Dr. Sareen",
    shortName: "Serenity By A Dr. Sareen",
    url: "https://serenitybyadrsareen.com/",
    anchor: "Serenity By A Dr. Sareen, a primary care practice in Palm Beach County",
    kind: "Primary care practice with offices in Loxahatchee, West Palm Beach, Port St. Lucie and Belle Glade",
    title: "Case Study: Serenity By A Dr. Sareen | Primara",
    description:
      "What Primara did for Serenity By A Dr. Sareen, with dated numbers: 158 of 160 pages indexed, 19 form requests in 28 days, and 263 of 265 Google reviews answered.",
    h1: "Case study: Serenity By A Dr. Sareen",
    summary:
      "Serenity By A Dr. Sareen is a Florida primary care practice with several offices. Between 2026-09-08 and 2026-10-08 we grew its published pages from 29 to 140, and Google reported indexed pages rising from 87 to 166. The practice received 19 form requests in 28 days, and 263 of 265 reviews are answered.",
    context: [
      "Serenity By A Dr. Sareen is a primary care practice led by Dr. Gurpreet Singh Sareen, with offices in Loxahatchee, West Palm Beach, Port St. Lucie and Belle Glade, Florida. Primara runs its website search work and its Google Business Profile listings.",
      "Most patients reach the practice by phone, so the form count on this page understates demand. Google reports its own call-button taps separately, and we do not add them to form requests.",
    ],
    did: [
      {
        title: "Page rebuild and growth",
        body: "We published 111 additional pages between 2026-09-08 and 2026-10-08, covering each office and the services it offers. Stub and near-duplicate pages are being rebuilt rather than left live.",
      },
      {
        title: "Indexing first",
        body: "Before adding more pages we check how many Google has actually read. We inspect every sitemap URL and fix links for the pages Google skipped, which is why the index figure below is high.",
      },
      {
        title: "Listings, categories and posts",
        body: "We manage the practice's Google listings, correct categories where they were wrong, and publish posts.",
      },
      {
        title: "Review replies",
        body: "New reviews are answered within hours, in privacy-safe wording that never confirms a visit or mentions care.",
      },
    ],
    results: [
      {
        metric: "Pages confirmed indexed by Google",
        now: "158 of 160 (98.8%)",
        range: "inspection of every sitemap URL, 2026-10-08",
      },
      {
        metric: "Pages Google reports as indexed",
        before: "87",
        now: "166",
        range: "2026-09-08 to 2026-10-08",
        note: "Google Search Console figure.",
      },
      {
        metric: "Pages published by Primara",
        before: "29",
        now: "140",
        range: "2026-09-08 to 2026-10-08",
      },
      {
        metric: "Form requests received",
        now: "19",
        range: "2026-09-11 to 2026-10-08",
        note: "Five spam submissions were excluded. All 19 were delivered to the practice inbox.",
      },
      {
        metric: "Google reviews answered",
        now: "263 of 265",
        range: "all reviews, as of 2026-10-08",
        note: "The two open ones were posted on 2026-10-08, inside our 72-hour window.",
      },
      {
        metric: "Reviews posted since 2026-09-01 that have a reply",
        now: "56 of 58, median 5.6 hours to reply",
        range: "2026-09-01 to 2026-10-08",
        note: "Hours from the review's posting time to the reply's update time.",
      },
      {
        metric: "Search impressions, 28 days",
        before: "3,657",
        now: "7,842",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
        note: "More than doubled (+114%).",
      },
      {
        metric: "Search clicks, 28 days",
        before: "199",
        now: "333",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
        note: "Up 67%.",
      },
    ],
    notYet: [
      "Most search clicks still come from people who already know the doctors' names. Searches for general terms such as primary care in a town are not yet in the top three on the map at any point on our grid.",
      "Average search position moved from 7.5 to 9.7 as the site appeared for more searches.",
      "Phone calls are the practice's main source of new patients, and we cannot yet say how many of Google's call-button taps become booked visits.",
    ],
    faqs: [
      {
        q: "Why is the form number so small next to the review count?",
        a: "Patients of a primary care office mostly call. A form is one path among several, so we report it separately from calls and never add the two together.",
      },
      {
        q: "What does 158 of 160 mean?",
        a: "We asked Google about every URL in the sitemap on 2026-10-08. 158 were in its index. Two had not yet been read.",
      },
      {
        q: "Does this page use any patient information?",
        a: "No. Reviews are counted and timed, never quoted, and we do not read or publish form contents.",
      },
    ],
    dataDate: CASE_DATA_DATE,
  },
  {
    slug: "making-heaven-crowded",
    name: "Making Heaven Crowded",
    shortName: "Making Heaven Crowded",
    url: "https://makingheavencrowdedfl.com/",
    anchor: "Making Heaven Crowded, a Christian outreach ministry in Tampa and Gainesville",
    kind: "Christian outreach nonprofit in Tampa and Gainesville, Florida",
    title: "Case Study: Making Heaven Crowded | Primara",
    description:
      "What Primara did for Making Heaven Crowded, with dated numbers: indexed pages 6 to 31, search impressions 26 to 241 in 28 days, and an honest list of what has not moved yet.",
    h1: "Case study: Making Heaven Crowded",
    summary:
      "Making Heaven Crowded is a Christian outreach ministry in Tampa and Gainesville. Between 2026-09-08 and 2026-10-08 we published 45 more pages for its new site, Google reported indexed pages rising from 6 to 31, and monthly search impressions rose from 26 to 241. It is early, the numbers are small, and the Google listing is not yet verified.",
    context: [
      "Making Heaven Crowded was founded in October 2025 in Tampa and has a branch in Gainesville. It serves people through street outreach and college ministry and recruits volunteers through its website. It is a nonprofit, and Primara builds and runs its website search work.",
      "This is the smallest of our three examples and the youngest. We include it because the numbers show what the first month of search work looks like when a site starts from almost nothing.",
    ],
    did: [
      {
        title: "A site that explains the work",
        body: "We built pages for each outreach, each city and the ways to volunteer, written in the ministry's own voice from details the ministry supplied.",
      },
      {
        title: "Pacing against what Google reads",
        body: "Google had read only part of the new site, so we slowed publishing to match and added links from pages that are already indexed to pages that are not.",
      },
      {
        title: "Tracking",
        body: "Visits and button clicks are measured in analytics. Volunteer sign-ups happen on a separate form, so we do not count them here.",
      },
    ],
    results: [
      {
        metric: "Pages Google reports as indexed",
        before: "6",
        now: "31",
        range: "2026-09-08 to 2026-10-08",
        note: "Google Search Console figure.",
      },
      {
        metric: "Pages confirmed indexed by inspection",
        now: "38 of 58 (65.5%)",
        range: "inspection of every sitemap URL, 2026-10-07",
      },
      {
        metric: "Pages published by Primara",
        before: "13",
        now: "58",
        range: "2026-09-08 to 2026-10-08",
      },
      {
        metric: "Search impressions, 28 days",
        before: "26",
        now: "241",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
      },
      {
        metric: "Search clicks, 28 days",
        before: "16",
        now: "21",
        range: "28 days ending 2026-09-08 vs 28 days ending 2026-10-08",
        note: "Small numbers. Treat a change of a few clicks as noise.",
      },
    ],
    notYet: [
      "Average search position fell from 1.8 to 14.6. Early on, almost every search was for the ministry's name; now the site also appears for broader searches where it ranks lower.",
      "The Google Business Profile has not been verified, so there are no Google reviews, no listing performance data and no map ranking yet. Verification needs the ministry's own confirmation.",
      "We report no form-request count for this ministry, because its volunteer sign-up form is separate and we do not have a reliable count to publish.",
    ],
    faqs: [
      {
        q: "Why publish a case study with such small numbers?",
        a: "Because they are the real numbers, with their dates. A first month that goes from 26 to 241 impressions is a start, and we would rather show it plainly than round it up.",
      },
      {
        q: "Why did the average position get worse?",
        a: "Position averages every search the site appears for. In September almost all of them were the ministry's name. Now there are many more, and most rank lower.",
      },
      {
        q: "What happens next for this site?",
        a: "Get the unread pages indexed, verify the Google listing with the ministry, and shift new pages toward searches from people who want to volunteer or give.",
      },
    ],
    dataDate: CASE_DATA_DATE,
  },
];

export const caseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
