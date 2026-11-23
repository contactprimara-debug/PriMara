// -- Guides batch 47 - 2026-11-17 --
// Website how-to guides from the Command Center queue (rows 1854-1863, planned 2026-11-17), built by the page factory to
// ~/Primara-Clients/PAGE-STANDARD.md. Primary care + mental health practice owner audience only. Each guide is built from
// a primary source that was read before writing (Google Search Central, Open Graph protocol, W3C WAI/WCAG/ARIA, web.dev).
// Plain practical guidance, no legal advice, no outcome promises, no patient details, no prices.

import type { Guide, GuideSection } from "@/lib/guides";

const h2 = (text: string): GuideSection => ({ type: "h2", text });
const h3 = (text: string): GuideSection => ({ type: "h3", text });
const p = (text: string): GuideSection => ({ type: "p", text });
const ul = (...items: string[]): GuideSection => ({ type: "ul", items });
const ol = (...items: string[]): GuideSection => ({ type: "ol", items });
const table = (headers: [string, string], ...rows: [string, string][]): GuideSection => ({ type: "table", headers, rows });

const G_BREADCRUMB = {
  publisher: "Google Search Central",
  label: "Breadcrumb structured data",
  href: "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb",
};
const OGP = {
  publisher: "The Open Graph protocol",
  label: "Open Graph protocol",
  href: "https://ogp.me/",
};
const G_URL = {
  publisher: "Google Search Central",
  label: "URL structure best practices for Google Search",
  href: "https://developers.google.com/search/docs/crawling-indexing/url-structure",
};
const G_LINKS = {
  publisher: "Google Search Central",
  label: "SEO link best practices for Google",
  href: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
};
const G_FAVICON = {
  publisher: "Google Search Central",
  label: "Define a favicon to show in search results",
  href: "https://developers.google.com/search/docs/appearance/favicon-in-search",
};
const G_JS = {
  publisher: "Google Search Central",
  label: "JavaScript SEO basics",
  href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
};
const WCAG_BYPASS = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.4.1: Bypass Blocks",
  href: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
};
const WCAG_LINK = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Understanding Success Criterion 2.4.4: Link Purpose (In Context)",
  href: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html",
};
const WAI_DESIGN = {
  publisher: "W3C Web Accessibility Initiative",
  label: "Designing for Web Accessibility: tips for getting started",
  href: "https://www.w3.org/WAI/tips/designing/",
};
const APG_ACCORDION = {
  publisher: "W3C WAI ARIA Authoring Practices Guide",
  label: "Accordion pattern",
  href: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
};
const WEBDEV_IMAGES = {
  publisher: "web.dev",
  label: "Learn Images",
  href: "https://web.dev/learn/images",
};
const WEBDEV_LCP = {
  publisher: "web.dev",
  label: "Optimize Largest Contentful Paint",
  href: "https://web.dev/articles/optimize-lcp",
};

const LOC = { href: "/locations/medical-seo-west-palm-beach", label: "Medical SEO In West Palm Beach", description: "How we help practices get found." };

export const guidesPartForty10: Guide[] = [
  // ---------------------------------------------------------------- 1854
  {
    slug: "breadcrumb-trails-on-a-medical-practice-website-wording-structure-and-checking-they-match-page-titles",
    keyword: "breadcrumb trails on a medical practice website: wording, structure and checking they match the page titles",
    category: "How-to",
    title: "Breadcrumb Trails on a Medical Practice Website",
    metaTitle: "Breadcrumb Trails for a Medical Practice Website",
    metaDescription:
      "How to write, structure and check breadcrumb trails on a medical practice website so they match page titles. (561) 291-2681",
    answer:
      "A breadcrumb trail is the short path near the top of a page, such as Home, Services, then the page name. Use the same words as your menu and page titles, keep it to three or four steps, and make sure the markup behind it matches what a visitor sees.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T17:00:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("What a breadcrumb trail does for a patient"),
      p(
        "A breadcrumb trail is a thin line of links, usually just above the page heading, that shows where the page sits in the site. On a phone it gives a new patient one tap back to the services page without reaching for the menu. For a search engine, the same trail written as structured data describes where the page belongs."
      ),
      p(
        "Most practice sites get breadcrumbs from the theme, and nobody ever reads them. That is how a trail ends up saying Home, Blog, Post while the page itself is a services page. The words are wrong, the structure is wrong, and nobody noticed."
      ),
      h2("What Google's documentation asks for"),
      p(
        "Google's breadcrumb documentation lists a short set of requirements. We read the page directly before writing this guide, and these are the points that matter to a practice owner."
      ),
      ul(
        "The trail is a list with at least two items. Each item has a name that visitors see and a position number, where position one is the start of the trail.",
        "Each item except the last carries the address of its page. The last item may leave the address out, in which case Google uses the address of the page it is on.",
        "The trail should show a typical path a visitor would take to reach the page, rather than copying the folders in the web address.",
        "The old data-vocabulary.org format is no longer eligible for rich results, so a theme that still uses it needs updating.",
        "Markup that breaks Google's guidelines can lead to a manual action, which means the structured data is ignored even though the page can still appear in results."
      ),
      h2("Wording and structure that work for a practice"),
      p(
        "Keep the labels identical to the labels in your menu. If the menu says Our Services, the trail should not say Treatments. Our guide to the [navigation menu and footer for a medical practice website](/guides/navigation-menu-and-footer-for-a-medical-practice-website) covers choosing those labels once."
      ),
      table(
        ["Trail step", "What to write"],
        ["First step", "Home, linking to the home page"],
        ["Middle step", "The section the page lives in, such as Services or Guides, linking to that hub"],
        ["Last step", "A short version of the page's own title, as plain text with no link needed"],
        ["Total length", "Two to four steps; a longer trail wraps on a phone"]
      ),
      h3("When a page can be reached two ways"),
      p(
        "A single page can sit under two sections, such as an anxiety counseling page reached from both Services and a conditions index. Google's documentation allows more than one trail for such a page. Choose the trail most visitors would follow and show only that one on the page, because a visible line with two paths confuses a reader."
      ),
      h2("A five-step check you can do without a developer"),
      ol(
        "Open three pages on your phone, one from each section, and read the trail aloud. Each label should match the menu and the page heading.",
        "Tap every step in the trail. Each one should open the page it names, with no redirect and no error.",
        "Compare the last step to the page's title tag. They do not need to be word for word, but they should clearly be the same page.",
        "Paste the page address into Google's Rich Results Test, the tool the documentation recommends, and fix any critical errors it reports. Our guide on [testing structured data](/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website) shows how to read its output.",
        "After the first rollout, wait several days and look at the rich results reports in Search Console for breadcrumb warnings."
      ),
      h2("Slips we see most often"),
      ul(
        "A trail that appears on the page but has no matching markup, or markup with no visible trail.",
        "Labels that differ from the menu, such as Home, Blog, Post on a services page.",
        "A trail whose middle step links to a page that redirects.",
        "A current-page step written as a long sentence that wraps over three lines on a phone."
      ),
      p(
        "A trail is part of how pages link to each other, so it belongs in the same monthly look as your other links. See [internal linking for a medical practice website](/guides/internal-linking-for-a-medical-practice-website) for the rest of that picture, and [schema markup explained for a medical practice](/guides/schema-markup-for-a-medical-practice-website-explained) for where breadcrumb data fits among the other types."
      ),
    ],
    faqs: [
      {
        q: "Do breadcrumbs help a practice rank higher?",
        a: "We cannot promise a ranking effect. Google describes breadcrumb data as a way to understand a page's place in the site, and the visible trail helps patients move around. Treat both as housekeeping.",
      },
      {
        q: "Should the trail copy the folders in the web address?",
        a: "Not necessarily. Google's page says the trail should show a typical path a user would take, so a page can sit at a short address while its trail shows the section a visitor would normally come through.",
      },
      {
        q: "Does the last step need to be a link?",
        a: "No. Google allows the last item to omit its address, and many sites show it as plain text since the visitor is already there.",
      },
      {
        q: "Does our theme or plugin already do this?",
        a: "Often it does, but check. Open a page's trail, then run the address through the Rich Results Test and confirm the labels and order match what you see.",
      },
      {
        q: "How long before Google shows a change?",
        a: "Google's documentation says to allow several days for crawling and indexing after publishing, so do not judge a change on the first morning.",
      },
    ],
    citations: [G_BREADCRUMB],
    links: [
      { href: "/guides/navigation-menu-and-footer-for-a-medical-practice-website", label: "Navigation Menu and Footer", description: "Choose labels once and reuse them." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking for a Practice Site", description: "How pages should point to each other." },
      { href: "/guides/how-to-test-and-validate-structured-data-on-a-medical-practice-website", label: "Testing Structured Data", description: "Read the results without a developer." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1855
  {
    slug: "link-preview-text-and-image-when-a-primary-care-practice-page-is-shared-by-text-message-or-social-post",
    keyword: "the link preview text and image that appear when a primary care practice page is shared by text message or social post",
    category: "How-to",
    title: "Link Preview Text and Image for a Practice Page",
    metaTitle: "Link Preview Text and Image for a Practice Page",
    metaDescription:
      "Control the title, description and image that show when a primary care practice page is texted or shared, using Open Graph tags. (561) 291-2681",
    answer:
      "When someone texts or posts a link to your practice page, the card that appears usually comes from Open Graph tags in the page's head. Set a title, a short description, a real image with a text description, and the page's own address, then send the link to a staff phone and look.",
    author: "Liam Costello",
    publishDate: "2026-11-17T17:10:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("The card that appears when a link is shared"),
      p(
        "A patient texts your new-patient page to a spouse. A neighbor posts your link in a community group. In both cases the app usually shows a small card with a title, a line of text and a picture, and that card decides whether anyone taps. If your page has no preview settings, the card can come out blank, cropped badly or showing the wrong image."
      ),
      p(
        "The settings behind the card are called Open Graph tags. They sit in the page's head, where visitors never see them. The Open Graph protocol, which defines them, is short and readable, and the points below come straight from it."
      ),
      h2("The four tags every page needs"),
      table(
        ["Tag", "What it holds for a practice page"],
        ["og:title", "The page's title as it should appear on the card, written for a person"],
        ["og:type", "The kind of thing the page is; for most practice pages the plain website value fits"],
        ["og:image", "The address of the picture the card should show"],
        ["og:url", "The page's canonical address, which acts as its permanent identity"]
      ),
      p(
        "The protocol also recommends og:description, one or two sentences, and og:site_name, the name of the whole website. If a page specifies an image, it should also specify og:image:alt, a description of what the image shows. That text is a description, not a caption."
      ),
      h2("Choosing the words"),
      p(
        "Write the title and description for the person receiving the text, not for a search results page. A mother receiving a link from a friend needs to know in one glance whose practice it is and what the page offers. Our guide to [meta descriptions that get clicks](/guides/meta-descriptions-that-get-clicks-for-a-medical-practice) covers the same plain style."
      ),
      ul(
        "Name the practice and the page's purpose, such as Becoming a New Patient or Counseling for Teens and Parents.",
        "Use one or two plain sentences in the description. No promises of results, no urgency words.",
        "Match the page itself. A preview that says one thing and a page that says another costs trust.",
        "Leave patient details out of every field. A preview is public text."
      ),
      h2("Choosing the picture"),
      p(
        "Use a real, current photo of the building, the front entrance or the team, with permission from anyone who appears, or the practice logo on a plain background. Avoid pictures with small lettering, because the card is displayed small. Write the image's text description in one plain sentence, as you would for any other image. The [image and alt text guide for a medical practice](/guides/image-seo-and-alt-text-for-a-medical-practice-website) explains how to write those."
      ),
      p(
        "The protocol lets a page declare an image's type, width and height as extra properties, and it lets a page list several images, with the first tag from the top taking precedence if values conflict. A page with several image tags should have the one you want listed first."
      ),
      h3("One image for every page is a quiet trap"),
      p(
        "Some themes use a single image for every page's card. A visitor then sees the same picture beside a services page, a guide and a contact page. Where you can, give the main pages their own images."
      ),
      h2("Test it the way a patient would see it"),
      ol(
        "Send the page's link by text to two staff phones, one Apple and one Android, and look at the card.",
        "Post the link in a private message on the social platform your practice uses and check the card there.",
        "Read the title and description aloud. If a stranger could not tell who you are, rewrite them.",
        "View the page source, search for og:image, and confirm the address opens the picture you chose.",
        "If the card still shows an old image after you changed it, test again later and ask your web person before assuming the change failed."
      ),
      p(
        "If you print a short address on a flyer or a review card, the preview matters even more because people will paste that link into messages. See [QR codes and short links for review requests](/guides/qr-codes-and-short-links-for-review-requests-at-a-medical-practice) and [what to post and what never to post on a practice's social accounts](/guides/social-media-accounts-for-a-medical-practice-what-to-post-and-what-never-to-post)."
      ),
    ],
    faqs: [
      {
        q: "Are Open Graph tags the same as the page title and meta description?",
        a: "No. The title tag and meta description are read by search engines, while Open Graph tags are read by messaging and social apps. Many sites set both, and the wording can be similar.",
      },
      {
        q: "Which image should a counseling practice use?",
        a: "A calm photo of the building entrance, a waiting area with no people, or the logo. Avoid stock images that imply a condition or a diagnosis.",
      },
      {
        q: "Can I use a picture of a staff member?",
        a: "Yes, if that person agreed. Pick a clear head-and-shoulders photo and describe it in the image text with the person's name and role.",
      },
      {
        q: "What does the page address tag do?",
        a: "It names the page's canonical address as its permanent identity in the Open Graph system, so shares of slightly different links point to one page.",
      },
      {
        q: "Who sets this up?",
        a: "Usually your web person or a plugin. Ask them to show you the four required tags for three of your pages, then run the staff-phone test yourself.",
      },
    ],
    citations: [OGP],
    links: [
      { href: "/guides/meta-descriptions-that-get-clicks-for-a-medical-practice", label: "Meta Descriptions That Get Clicks", description: "Plain wording for short descriptions." },
      { href: "/guides/image-seo-and-alt-text-for-a-medical-practice-website", label: "Image SEO and Alt Text", description: "Describe pictures for every reader." },
      { href: "/guides/qr-codes-and-short-links-for-review-requests-at-a-medical-practice", label: "QR Codes and Short Links", description: "Links that people actually share." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1856
  {
    slug: "short-clean-url-slugs-for-new-pages-of-a-counseling-practice-website-and-what-to-do-before-changing-an-old-one",
    keyword: "choosing short, clean URL slugs for new pages of a counseling practice website and what to do before changing an existing one",
    category: "Checklist",
    title: "Clean URL Slugs for a Counseling Practice Website",
    metaTitle: "Clean URL Slugs for a Counseling Practice Website",
    metaDescription:
      "How to choose short, readable web addresses for new counseling practice pages, and what to check before changing an old one. (561) 291-2681",
    answer:
      "Choose a readable web address made of plain words separated by hyphens, such as a short phrase naming the page. Avoid ID numbers, underscores and mixed capitals. Before changing an address that already exists, list every place that links to it, because each one has to be updated or redirected.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T17:20:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("The last part of the address is the slug"),
      p(
        "The slug is the part of a web address after the site name, such as the words after the slash on a page about couples counseling. It appears in search results, in texts, on printed cards and in the address bar. When you add a page, someone has to type those words, and the choice is easy to make badly under time pressure."
      ),
      h2("What Google's URL guidance says"),
      p(
        "Google's page on URL structure is short. These are the points that apply to a practice site, as we read them."
      ),
      ul(
        "Use readable words rather than long ID numbers, in the language your audience searches in.",
        "Separate words with hyphens. Google says hyphens clearly signal a word boundary, while underscores tend to join terms, and running words together with no separator is advised against.",
        "Paths are case sensitive for Google, so two spellings that differ only in capitals count as two addresses. If your server answers both, choose one case and use it everywhere.",
        "Characters outside basic English letters, such as accented letters, should be percent-encoded in links.",
        "Remove parameters that do not change the page's content, and keep session IDs out of addresses."
      ),
      h2("A simple pattern for new pages"),
      table(
        ["Avoid", "Use instead"],
        ["page_id=482", "A short phrase naming the page, in hyphenated words"],
        ["Services_New/Anxiety_Page2", "services with the topic after it, in lowercase"],
        ["A whole sentence of twelve words", "The two to five words a patient would search"],
        ["A staff member's name that may change", "The service or topic, with the person's name inside the page"],
        ["A year or a month in the address", "No date, so the page can be updated without changing its address"]
      ),
      p(
        "Keep the address aligned with the title and the page heading. A person who reads the address aloud should be able to say what the page is about. That makes a printed address, a spoken address on a podcast and a texted address all more reliable, and it pairs well with careful [title tags for a medical practice website](/guides/how-to-write-title-tags-for-a-medical-practice-website)."
      ),
      h3("Write the address before building the page"),
      p(
        "Decide the slug when you plan the page, and write it in your page inventory next to the title. Changing it after the page is published is possible, but it creates work."
      ),
      h2("Before you change an address that already exists"),
      p(
        "Google's page on URL structure does not discuss redirects, so do not assume a changed address looks after itself. Treat every change as a small project."
      ),
      ol(
        "Write down the old address and the new one.",
        "Search your own site for links to the old address, including menus, footer links, buttons and sentences inside other pages.",
        "Check the sitemap, the website link on your Google Business Profile and any directory listings that name the old address.",
        "Check printed materials and signatures that carry the old address, because those cannot be edited.",
        "Set up a permanent redirect from the old address to the new one, following the steps in our guide on [redirects when removing a page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website).",
        "Update the links you control so they point straight at the new address, and update the [sitemap and robots file](/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website).",
        "After the change, click every old link you can find and confirm it lands on the new page with no error."
      ),
      p(
        "When a page's current address is working and indexed, ask whether the change is worth it. A slightly awkward address that people already use is often better left alone than renamed. If you do rename a page, run the [broken link check](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website) afterward."
      ),
    ],
    faqs: [
      {
        q: "Should the slug contain the city name?",
        a: "Only when the page is actually about that place. For a general service page, the service words alone are shorter and keep working if the practice opens a second office.",
      },
      {
        q: "Is there a best length?",
        a: "Google does not give one. Aim for the few words a patient would use to describe the page, short enough to read aloud or print on a card.",
      },
      {
        q: "Do capital letters matter?",
        a: "Yes. Google treats paths as case sensitive, so choose one style and use it for every page. Lowercase is the simplest habit to keep.",
      },
      {
        q: "Will changing an address lose the page's standing?",
        a: "We cannot promise either way. A permanent redirect from the old address and updated links are the steps that give the change the best chance of going smoothly.",
      },
      {
        q: "Who should approve a new address?",
        a: "The person who owns the page inventory, usually the practice manager. One approver prevents two staff members from creating two addresses for one topic.",
      },
    ],
    citations: [G_URL],
    links: [
      { href: "/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website", label: "Redirects When Removing a Page", description: "Send old addresses to the right place." },
      { href: "/guides/how-to-write-title-tags-for-a-medical-practice-website", label: "How to Write Title Tags", description: "Keep title and address in step." },
      { href: "/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website", label: "XML Sitemaps and Robots.txt", description: "Keep the sitemap current." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1857
  {
    slug: "print-friendly-version-of-a-new-patient-information-page-so-a-primary-care-patient-can-print-directions-and-what-to-bring",
    keyword: "a print-friendly version of a new patient information page so a primary care patient can print directions and what to bring",
    category: "How-to",
    title: "Print-Friendly New Patient Information Page",
    metaTitle: "Print-Friendly New Patient Page for a Primary Care Practice",
    metaDescription:
      "How to make a new patient information page print cleanly on one sheet with directions and what to bring. (561) 291-2681",
    answer:
      "A print-friendly new patient page prints on one sheet with the practice name, address, phone number, hours and the what-to-bring list in plain black text. Menus, chat boxes and large images stay off the paper. Test it by printing to a file from a phone and a computer.",
    author: "Liam Costello",
    publishDate: "2026-11-17T17:30:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Why a patient prints the page at all"),
      p(
        "A first visit comes with small worries: where to park the car, which door to use, what to bring, how early to come. Some patients, often older adults, want those answers on paper beside the phone or in a bag. Others forward the page to a family member who will drive them. If the page prints badly, they give up."
      ),
      p(
        "A web page that looks tidy on screen can print as six sheets, with the menu on every one, a chat bubble across the address and the phone number cut off at the margin. A print-friendly version avoids all of that."
      ),
      h2("What goes on the sheet"),
      ol(
        "The practice's full name, in the wording used on its Google profile.",
        "The street address and phone number, as plain text, not inside a picture.",
        "Office hours that match the website and the profile.",
        "The what-to-bring list, ending with a line to call if anything on the list is a problem.",
        "A short line on arriving, using only details the practice has verified, such as the entrance and where to check in.",
        "A date line saying when the page was last reviewed, so a printed copy can be recognized as old."
      ),
      p(
        "Everything else on the page, such as the staff gallery, the long introduction and the related guides, can stay on screen only. If your page has a map, print the written directions, since a printed map from a web page often loses its details. Our guides on [what to bring to a first appointment](/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients) and [map embeds and driving directions wording](/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice) cover the content that belongs on the sheet."
      ),
      h2("What the W3C accessibility tips add"),
      p(
        "The W3C's design tips for accessibility do not mention print, and we do not claim they do. Several of their points still carry over to paper, because a person reading on paper has the same needs as one reading on a screen."
      ),
      ul(
        "Contrast matters: text needs enough contrast against its background, so print dark text on white and drop colored backgrounds.",
        "Headings, spacing and grouping help people scan, so keep short headings and clear gaps between the address block and the list.",
        "Interactive elements should be easy to identify on screen, but on paper a link is just words, so write the address out when it matters.",
        "A layout that rearranges for different screen sizes, with text sized for reading, is the same habit that makes a printed single column readable."
      ),
      h2("How a web person makes the print version"),
      p(
        "The usual method is a print stylesheet, a small set of rules the browser applies only when the page is printed. Ask your web person for these results, in plain terms."
      ),
      table(
        ["Result on paper", "What to ask for"],
        ["No menu, footer or chat button", "Hide navigation and widgets when printing"],
        ["Dark text on white", "Remove background colors and shadows when printing"],
        ["One sheet if possible", "Remove large images and fit the list to the page width"],
        ["Link addresses where they matter", "Show the full web address after key links"],
        ["Page does not cut through a list item", "Avoid page breaks inside the what-to-bring list"]
      ),
      h3("Offer a PDF only if you will keep it current"),
      p(
        "A separate PDF of the page doubles your upkeep, and an old copy can sit in search results for years. If you do offer one, follow the advice in our guide on [retiring old PDF forms and outdated documents](/guides/retiring-old-pdf-forms-and-outdated-documents-still-indexed-on-a-medical-practice-website). Otherwise, a print-friendly page beats a PDF because it is always the current version."
      ),
      h2("Test it on a phone and a computer"),
      ul(
        "On a computer, open print preview and count the pages. Aim for one, and never more than two.",
        "On a phone, use the share or print option and save to a file, then open the result.",
        "Read the printed text at arm's length. The address and phone number should be legible without squinting.",
        "Ask a staff member who has not seen the page to find the hours and the what-to-bring list on the printout in under fifteen seconds."
      ),
      p(
        "Because the sheet repeats details that appear elsewhere, review it each time hours or the address change. Our [accessibility guide for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) and the guide on [waiting room and check-in expectations](/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice) give you the rest of the checklist."
      ),
    ],
    faqs: [
      {
        q: "Does every page need a print version?",
        a: "No. Do it for pages patients are likely to hold in their hands, such as the new patient page, directions and the what-to-bring list. Marketing pages do not need it.",
      },
      {
        q: "Should the printed page include the patient portal link?",
        a: "Only if a patient would type it from paper. A short, plain address works. Long links with codes belong online, not on paper.",
      },
      {
        q: "Can the sheet include forms to fill out?",
        a: "Keep forms separate. A printed information sheet should not become a place where patient details are written and left lying around.",
      },
      {
        q: "How often should we review the sheet?",
        a: "Every time the address, phone number, hours or what-to-bring list changes, and once a year even if nothing seems to have changed.",
      },
      {
        q: "What if the page is built with a page builder?",
        a: "Most builders allow extra print rules. Ask your web person to test the result in print preview and send you the one-page printout before you approve it.",
      },
    ],
    citations: [WAI_DESIGN],
    links: [
      { href: "/guides/what-to-bring-to-a-first-appointment-page-for-new-primary-care-patients", label: "What to Bring to a First Appointment", description: "The list that belongs on the sheet." },
      { href: "/guides/map-embed-and-driving-directions-wording-on-the-contact-page-of-a-primary-care-practice", label: "Map and Directions Wording", description: "Directions that print clearly." },
      { href: "/guides/waiting-room-and-check-in-expectations-page-for-a-primary-care-practice", label: "Waiting Room and Check-In Page", description: "What happens on arrival." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1858
  {
    slug: "table-of-contents-and-jump-links-on-a-long-guide-page-of-a-practice-website-for-phone-readers",
    keyword: "a table of contents and jump links on a long guide page of a practice website for phone readers",
    category: "How-to",
    title: "Table of Contents on a Long Practice Guide Page",
    metaTitle: "Table of Contents and Jump Links for Long Pages",
    metaDescription:
      "When and how to add a table of contents with jump links to a long guide page on a practice website, with a phone test. (561) 291-2681",
    answer:
      "On a long page, a short list of links near the top that jump to each section lets a phone reader skip to the part they need. Use the section headings as the link words, add one link per section, and test that each tap lands on the right heading.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T17:40:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("A long page on a small screen"),
      p(
        "A guide that fits on one desktop screen takes many thumb-swipes on a phone. A patient who wants the part about billing questions, or a spouse who wants the directions, should not have to scroll through everything else first. A short list of links at the top solves that."
      ),
      p(
        "This is the same idea a web accessibility standard has described for years. The W3C's explanation of the bypass blocks criterion, Success Criterion 2.4.1, is about letting people reach the main content without moving through repeated material first. Its techniques include links at the top of the page to each content area, and headings at the beginning of each section."
      ),
      h2("When a table of contents is worth adding"),
      ul(
        "The page has five or more headed sections.",
        "A reader is likely to want only one part, such as hours, what to bring or insurance questions.",
        "The page is long enough that a phone shows the first section and nothing else for many swipes.",
        "Do not add one to a short page; a list of links longer than the text it points to is clutter."
      ),
      h2("How to build it"),
      ol(
        "Write clear section headings first. If a heading is vague, the link will be too.",
        "Give each heading an anchor, which is a name the link can point to. Your web person or editor can do this with an id on each heading.",
        "Place the list after the first answer paragraph, not above it. The reader should still see the answer first.",
        "Use the heading text itself, or a shortened version, as the link text, one link per section.",
        "Make every link big enough to tap with a thumb, with space between lines."
      ),
      table(
        ["Do", "Avoid"],
        ["Short labels that match the headings", "Labels such as Section 3 or Next part"],
        ["One link per heading, in page order", "Links to every sub-heading, which turns the list into a second page"],
        ["A visible list in the page text", "A hidden list that only opens on a script event"],
        ["Links that scroll to the heading and show it", "Links that leave the heading hidden under a fixed header bar"]
      ),
      h3("Check the heading is not hidden after the jump"),
      p(
        "A fixed bar across the top of a phone page can cover the heading a jump link scrolls to. Tap each link on a real phone and confirm the heading is visible, not tucked under the bar. If it is covered, your web person can add space above each heading for the jump."
      ),
      h2("Why the headings come first"),
      p(
        "A table of contents is only as good as the outline it reflects, so fix the headings before adding links. Our guide to [heading structure from H1 to H3](/guides/heading-structure-h1-to-h3-for-a-medical-practice-web-page) shows how to keep a clean outline, and the guide on [plain language and reading level](/guides/plain-language-and-reading-level-for-patient-facing-web-content) helps with the words themselves."
      ),
      p(
        "Because Google indexes the mobile version first, what a phone reader sees is what a search engine reads. See [mobile-first indexing explained for a medical practice website](/guides/mobile-first-indexing-explained-for-a-medical-practice-website). A table of contents is also a natural companion to the [click-to-call button and mobile layout](/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website), since both put the next step within reach."
      ),
      h2("A two-minute phone test"),
      ul(
        "Open the page on a phone and count how many swipes it takes to reach the last section without the list.",
        "Tap the third link and watch where the page lands.",
        "Turn on a screen reader or ask a staff member who uses one to find the list. It should be announced as a list of links before the sections begin.",
        "Tap the browser's back button after a jump. It should return to a sensible place."
      ),
    ],
    faqs: [
      {
        q: "Does a table of contents improve search rankings?",
        a: "We cannot promise that. Its job is to help readers, especially on phones, get to the part they need, and that benefit stands on its own.",
      },
      {
        q: "Should it be at the very top?",
        a: "Put it after the answer to the page's main question. The reader should see the answer first, then the list for anything else.",
      },
      {
        q: "How many items is too many?",
        a: "If the list is longer than about seven items, the page may be trying to do too much. Consider splitting it into two guides.",
      },
      {
        q: "Can the list collapse on a phone?",
        a: "It can, but an open list is simpler to use and to read aloud. If it collapses, label the button plainly and make sure it works with a keyboard.",
      },
      {
        q: "Who adds the anchors?",
        a: "Your editor or web person. Many page builders add them automatically; ask to see the list working on a phone before you approve it.",
      },
    ],
    citations: [WCAG_BYPASS],
    links: [
      { href: "/guides/heading-structure-h1-to-h3-for-a-medical-practice-web-page", label: "Heading Structure H1 to H3", description: "Clean outlines for every page." },
      { href: "/guides/plain-language-and-reading-level-for-patient-facing-web-content", label: "Plain Language for Patient Content", description: "Words readers understand." },
      { href: "/guides/click-to-call-button-and-mobile-layout-for-a-medical-practice-website", label: "Click-to-Call and Mobile Layout", description: "Next steps within thumb reach." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1859
  {
    slug: "resizing-and-compressing-office-and-staff-photos-before-upload-so-a-practice-page-loads-fast-on-a-phone",
    keyword: "resizing and compressing office and staff photos before upload so a practice page loads fast on a phone",
    category: "How-to",
    title: "Resize and Compress Office and Staff Photos",
    metaTitle: "Resize and Compress Practice Photos Before Upload",
    metaDescription:
      "Resize and compress office and staff photos before upload so a practice page loads fast on a phone. Steps from web.dev. (561) 291-2681",
    answer:
      "Before uploading a photo, resize it to roughly the space it fills on the page, with extra room for sharp phone screens, and save it with sensible compression. A phone straight out of a camera roll can produce a file far larger than the page needs.",
    author: "Liam Costello",
    publishDate: "2026-11-17T17:50:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("The camera roll problem"),
      p(
        "A phone camera produces very large pictures. A front-desk team member takes a nice photo of the waiting room, uploads it as it came, and the page that looked fine on the office computer takes a long time on a patient's phone in a parking lot. The patient does not wait, and the page that took an afternoon to write is abandoned in seconds."
      ),
      p(
        "The fix is not a better web host. It is a two-minute step before the photo is ever uploaded, and the guidance behind it comes from web.dev, Google's web developer site."
      ),
      h2("What web.dev says about image size"),
      ul(
        "Match the source image to the space it will occupy on the page, and avoid upscaling, because an enlarged picture looks blurry and grainy.",
        "A source image larger than the biggest layout needs is downloaded by small-screen users too, which web.dev calls no tangible benefit.",
        "Screens with more pixels per inch need more image pixels. A source about twice the displayed width renders sharply on such a screen, for example an 800 pixel source shown at 400 pixels wide.",
        "Use a web-friendly format and sensible compression to save bandwidth.",
        "For the main image at the top of the page, web.dev's loading guide names AVIF and WebP, an appropriately sized image and compression as ways to cut file size."
      ),
      h2("A five-step routine for a new photo"),
      ol(
        "Ask your web person what width the photo will be displayed at on a phone and on a desktop. Write the larger number down.",
        "Resize the photo to about twice that width, and do not enlarge a small photo to reach it.",
        "Export it with compression, in a web-friendly format, and compare it with the original. If you cannot see a difference at normal size, keep the smaller file.",
        "Name the file with plain words, such as the front entrance or the waiting area, not a camera number.",
        "Write the image's text description before uploading, as described in our [image and alt text guide](/guides/image-seo-and-alt-text-for-a-medical-practice-website)."
      ),
      table(
        ["Photo and where it appears", "Habit to follow"],
        ["Provider headshot, on the about and provider pages", "Crop tightly, resize to the display width with room for sharp screens"],
        ["Waiting room or entrance, on the office tour or new patient page", "One or two good photos beat a gallery of ten"],
        ["Team photo, on the about page", "Resize to the page column width, not the full screen width"],
        ["Large top-of-page image, on the home or service page", "Compress it, size it correctly and do not delay its loading"]
      ),
      h3("The top-of-page image is the one that counts most"),
      p(
        "The web.dev guide to Largest Contentful Paint says a good result is 2.5 seconds or less for at least three quarters of visits. When the biggest item is an image, the guide advises serving an appropriately sized, compressed image, putting it in the page's own HTML so it is found early, and not lazy-loading it. It also says to give high fetch priority to only one or two images. Ask your web person to confirm this for the top image on your home page."
      ),
      h2("How to check the result"),
      p(
        "Open the page on a phone using mobile data, not office Wi-Fi, and count how long until the top picture appears. Then look at the page with Google's free PageSpeed Insights tool and read the opportunities it lists for images. Our [Core Web Vitals checklist for a medical practice website](/guides/core-web-vitals-checklist-for-a-medical-practice-website) explains how to read those results."
      ),
      p(
        "Real photos are worth the trouble. Patients respond to the actual office and the actual people, as our guides on [provider headshots and team photos](/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website), the [office tour and photos page](/guides/office-tour-and-photos-page-for-new-primary-care-patients) and [stock photos versus real photos](/guides/stock-photos-versus-real-photos-on-a-counseling-practice-website) describe. Prepare each one properly before it is uploaded."
      ),
    ],
    faqs: [
      {
        q: "Does the page still look sharp after resizing?",
        a: "Yes, if the new size is about twice the space the photo fills. That extra room keeps the picture crisp on phones with very sharp screens.",
      },
      {
        q: "Should staff do this or the web person?",
        a: "Either. A written rule such as resize first, then compress, then upload makes the habit easy for anyone who adds a photo.",
      },
      {
        q: "Is a smaller file always better?",
        a: "Smaller loads faster, but compress until the picture still looks good at normal size, and no further. Faces and signs should stay clear.",
      },
      {
        q: "Which format should we use?",
        a: "web.dev names AVIF and WebP as modern formats for reducing size. Ask your web person which your site supports, and keep a standard format as a fallback.",
      },
      {
        q: "What about photos already on the site?",
        a: "Start with the home page and the five most visited pages. Replace the largest images first and check each page again on a phone.",
      },
    ],
    citations: [WEBDEV_IMAGES, WEBDEV_LCP],
    links: [
      { href: "/guides/core-web-vitals-checklist-for-a-medical-practice-website", label: "Core Web Vitals Checklist", description: "Check speed on real phones." },
      { href: "/guides/provider-headshots-and-team-photo-guidelines-for-a-medical-practice-website", label: "Provider Headshots and Team Photos", description: "Choose photos that fit the page." },
      { href: "/guides/office-tour-and-photos-page-for-new-primary-care-patients", label: "Office Tour and Photos Page", description: "Show the real office." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1860
  {
    slug: "monthly-orphan-page-and-click-depth-check-so-every-page-of-a-counseling-practice-website-is-reachable-from-another-page",
    keyword: "a monthly orphan-page and click-depth check so every page of a counseling practice website is reachable from another page",
    category: "Checklist",
    title: "Monthly Orphan-Page and Click-Depth Check",
    metaTitle: "Monthly Orphan Page and Click-Depth Check for a Practice",
    metaDescription:
      "A monthly check that every counseling practice page has a link from another page and is a few clicks from home. (561) 291-2681",
    answer:
      "An orphan page is a page that no other page links to. Once a month, list every page, count the links pointing to each, and note how many clicks each is from the home page. Add a link from a relevant page to any orphan and to any page buried too deep.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T18:00:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Pages nobody links to"),
      p(
        "Practices add pages over time: a new service, a page for a new provider, a guide written for one season. Menus get redesigned, a link is deleted from a sentence, and one page after another ends up with no way in. Patients cannot find it and, in practice, a search engine has a harder time too."
      ),
      p(
        "Google's guidance on crawlable links says it plainly: every page you care about should have at least one link from another page on your site. The same page also says Google can generally follow only links built as an anchor element with a real address, so a button that works only through a script may not count as a link at all."
      ),
      h2("Two numbers to track for every page"),
      table(
        ["Number and what it means", "What to aim for"],
        ["Inbound links: how many other pages on your site link to this one", "At least one, and several for the pages that bring in patients"],
        ["Click depth: how many clicks it takes to reach the page from the home page", "Important pages within three clicks"]
      ),
      p(
        "Three clicks is a working habit rather than a Google rule. We use it because a patient who has to click four times to find your insurance page usually will not."
      ),
      h2("The monthly check, step by step"),
      ol(
        "Get the list. Use your page inventory, or the sitemap file, as the master list of pages. Our guide to a [page inventory spreadsheet](/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for) shows how to build one.",
        "Count inbound links. A free site crawler, or your web person's report, lists which pages link to which. For a small site, searching the site for the page's name also finds many links.",
        "Mark every page with zero inbound links. These are the orphans.",
        "Mark every page that takes more than three clicks to reach.",
        "For each one, decide the relevant page that should link to it, and write the sentence.",
        "Add the sentence, then check again next month to confirm the page now has at least one link."
      ),
      h3("Write links into sentences, not only into lists"),
      p(
        "A footer full of links is easy to add and easy to ignore. A sentence that explains why a reader should visit the page is more useful to a person and gives Google context. Google's page also says surrounding words give context to a link and that many links stacked side by side are not helpful. Our [internal linking guide for a medical practice website](/guides/internal-linking-for-a-medical-practice-website) explains the approach."
      ),
      h2("What to do with each orphan"),
      ul(
        "If the page is still useful, add links from two or three related pages and from its section hub.",
        "If it is out of date, update it or retire it, and set up a redirect as in our guide to [redirects when removing a page](/guides/redirects-when-removing-a-service-or-provider-page-on-a-medical-practice-website).",
        "If it is a thin duplicate of another page, merge it into the stronger page.",
        "If it is meant to be private, such as a thank-you page, leave it alone and make sure it is not in the sitemap."
      ),
      h2("Check what Google has done with them"),
      p(
        "A page without links can still appear in your sitemap, and Google may know about it. Look at the indexing report in Search Console, as explained in our guide to the [page indexing report](/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website), and compare it against the sitemap described in the guide on [XML sitemaps and robots.txt](/guides/xml-sitemaps-and-robots-txt-for-a-medical-practice-website). A page in the sitemap that has no links pointing to it is the first one to fix."
      ),
      p(
        "Write the date of each check on the inventory, with how many orphans you found and fixed. A count that falls to zero and stays there is a result you can report to the practice owner. Pair the check with the [broken link and 404 check](/guides/how-to-find-and-fix-broken-links-and-404-errors-on-a-medical-practice-website), because a link that points at a missing page leaves its target just as lost."
      ),
    ],
    faqs: [
      {
        q: "Is a page in the sitemap but with no links a problem?",
        a: "It can be. The sitemap tells Google the page exists, but links from other pages show it matters to the site. Add at least one relevant link to it.",
      },
      {
        q: "Does the menu count as a link?",
        a: "Yes, if the menu items are real links with real addresses. Menus that open through scripts only may not be followed, so test with a crawler or ask your web person.",
      },
      {
        q: "How deep is too deep?",
        a: "Google gives no number. We use three clicks from the home page for pages a patient needs, and treat anything deeper as a reason to add a link from a closer page.",
      },
      {
        q: "Can I do this without software?",
        a: "On a small site, yes. Take the page list, search the site for each page's name and check the main menu by hand. A crawler is faster once the site grows.",
      },
      {
        q: "How often should we repeat it?",
        a: "Once a month, and again right after any page is added, removed or renamed. It takes about twenty minutes on a site of this size.",
      },
    ],
    citations: [G_LINKS],
    links: [
      { href: "/guides/a-page-inventory-spreadsheet-listing-every-page-on-a-medical-practice-website-and-what-each-page-is-for", label: "Page Inventory Spreadsheet", description: "The master list for the check." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking Guide", description: "Write links into sentences." },
      { href: "/guides/page-indexing-report-in-google-search-console-explained-for-a-medical-practice-website", label: "Page Indexing Report", description: "See what Google has indexed." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1861
  {
    slug: "favicon-and-browser-tab-name-for-a-medical-practice-website-so-patients-with-many-tabs-find-it-again",
    keyword: "a favicon and browser tab name for a medical practice website so patients with many tabs find it again",
    category: "How-to",
    title: "Favicon and Browser Tab Name for a Practice Site",
    metaTitle: "Favicon and Tab Name for a Medical Practice Website",
    metaDescription:
      "Set a clear favicon and browser tab name so a patient with many tabs open can find your practice website again. (561) 291-2681",
    answer:
      "A favicon is the small square icon beside the page name on a browser tab. Use a simple square version of the practice logo that stays readable when tiny, keep its address stable, and make the tab name start with the practice or page name so it can be found among many tabs.",
    author: "Liam Costello",
    publishDate: "2026-11-17T18:10:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("The patient with fourteen tabs"),
      p(
        "A person comparing counselors or looking for a primary care office often has many tabs open: reviews, a map, insurance pages, three different practices. When they come back to yours, all they have is a tiny icon and a few words. If the icon is a grey default globe and the name is cut off after the word Welcome, they may never find the tab again."
      ),
      p(
        "Two small settings fix this: the favicon, which is the icon, and the tab name, which is the page's title text. Both take minutes to set and are rarely checked."
      ),
      h2("What Google says about favicons"),
      p(
        "Google also uses favicons in search results on some surfaces, and its documentation lists clear requirements. We read it before writing this guide."
      ),
      ul(
        "Add a link tag for the icon to the head of the home page.",
        "The image must be square, with a one to one ratio, at least 8 by 8 pixels. Google recommends one larger than 48 by 48 pixels so it displays well in different places.",
        "Accepted file formats include ICO, PNG, GIF, JPEG, BMP, PPM and TIFF.",
        "Keep the favicon's web address stable. Changing it often is discouraged.",
        "Google must be allowed to crawl both the home page and the icon file. Neither may be blocked by a robots file.",
        "Only one favicon is supported per hostname, and subfolders on the same host share it.",
        "After a change, Google must recrawl the home page, which can take several days to a few weeks, and showing a favicon is never guaranteed."
      ),
      h2("Designing an icon that survives being small"),
      ol(
        "Start from the logo, but use only its simplest part: a single letter or a single shape, not the whole name.",
        "Choose high contrast. A dark shape on a light background, or the reverse, reads at a glance.",
        "Keep it square with some space around the shape so it is not cropped.",
        "Look at it at actual size in a real browser tab, next to other tabs, before you approve it.",
        "Avoid imagery that suggests a diagnosis, a body part or a symbol that could confuse a reader."
      ),
      h3("The same icon everywhere"),
      p(
        "Use the same icon on every page and the same image on your Google profile so people link the two. If the practice changes its logo, our [rebrand SEO checklist for a medical practice](/guides/medical-practice-rebrand-seo-checklist) lists the other places that need updating."
      ),
      h2("Writing the tab name"),
      p(
        "The tab name is the page's title. A tab shows only the first few words, so put the words that identify the page first. For a home page, that is usually the practice name. For inner pages, many sites put the page topic first and the practice name after it. Which order suits you depends on whether patients recognize your name or the topic more quickly, so test with real tabs."
      ),
      table(
        ["Tab name", "Why it works or fails"],
        ["Welcome | Home", "Fails: nothing identifies the practice"],
        ["Practice name, then the city or specialty", "Works: the identifying words come first"],
        ["A long keyword list", "Fails: cut off on the tab and unreadable in search"],
        ["Topic first, short practice name last", "Works on inner pages, as long as the topic words are short"]
      ),
      p(
        "Search engines use the same title text for the headline of a result, so the tab name is not a separate project. Follow our guide on [how to write title tags for a medical practice website](/guides/how-to-write-title-tags-for-a-medical-practice-website) for length and wording, and keep each page's title different."
      ),
      h2("Check it, then check what a patient sees"),
      ul(
        "Open the site in two browsers and on a phone, with ten other tabs open, and see whether yours is easy to spot. Our guide on [checking a change in a second browser and on an older phone](/guides/checking-a-website-change-in-a-second-browser-and-on-an-older-phone-before-telling-the-team-it-is-live) gives the steps.",
        "Open the icon's address directly and confirm it loads.",
        "Look at what a search for your practice name shows, using the [brand search audit](/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit).",
        "Wait the weeks Google says it needs before judging a change."
      ),
    ],
    faqs: [
      {
        q: "Will a favicon help us rank?",
        a: "We cannot say it will. Its job is recognition: patients spot your tab and your result more easily, and Google may show it beside your listing.",
      },
      {
        q: "How big should the file be?",
        a: "Google says square and larger than 48 by 48 pixels is recommended. Ask your web person for a clean square file and test how it looks at very small sizes.",
      },
      {
        q: "Why does our old icon still show in search?",
        a: "Google must recrawl the home page and process the new icon, which its documentation says can take several days to several weeks.",
      },
      {
        q: "Can each page have its own icon?",
        a: "Google supports one favicon per hostname, so use one icon sitewide. Subfolders on the same host share it.",
      },
      {
        q: "What if our logo is a long name?",
        a: "Use the first letter or the single shape from the logo instead. A long name cannot be read at that size.",
      },
    ],
    citations: [G_FAVICON],
    links: [
      { href: "/guides/medical-practice-rebrand-seo-checklist", label: "Rebrand SEO Checklist", description: "Update every place a logo appears." },
      { href: "/guides/how-to-write-title-tags-for-a-medical-practice-website", label: "How to Write Title Tags", description: "Tab names double as titles." },
      { href: "/guides/what-patients-see-when-they-search-your-practice-name-a-brand-search-audit", label: "Brand Search Audit", description: "See your name the way patients do." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1862
  {
    slug: "descriptive-link-text-instead-of-click-here-on-a-primary-care-practice-website-checked-in-five-minutes",
    keyword: "descriptive link text instead of click here on a primary care practice website, checked in five minutes",
    category: "Checklist",
    title: "Descriptive Link Text Instead of Click Here",
    metaTitle: "Descriptive Link Text Instead of Click Here",
    metaDescription:
      "Replace click here with descriptive link text on a primary care practice site, with a five-minute check. (561) 291-2681",
    answer:
      "Link text should say where the link goes, such as the name of the page, so it makes sense on its own. Search your site for click here, read more and learn more, then rewrite each one. The whole check takes about five minutes.",
    author: "Gio LaRoche",
    publishDate: "2026-11-17T18:20:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Why generic links fail patients"),
      p(
        "A link that says click here tells nobody where it leads. A person using a screen reader can pull up a list of every link on the page, and a list reading click here, click here, read more is useless. A person skimming on a phone sees the same thing. Two sources agree on this, and we read both."
      ),
      h2("What the two sources say"),
      h3("W3C, Link Purpose (In Context)"),
      ul(
        "Users should understand what a link does so they can decide whether to follow it. Where possible, the link text should identify the purpose on its own.",
        "When the text alone is not enough, put the extra context in the same sentence, paragraph, list item or table cell, ideally before the link, since text after a link can confuse people who listen from top to bottom.",
        "Links to the same destination should use the same text, and links to different destinations should use different text.",
        "Assistive technology can list the links on a page, so meaningful link text lets people choose without extra effort."
      ),
      h3("Google, links that can be crawled"),
      ul(
        "Anchor text should be descriptive, reasonably concise and relevant to the page it points to. A useful test is whether it makes sense read alone.",
        "Phrases like click here and read more do not describe the destination.",
        "Do not stack many links side by side, and do not stuff keywords into link text.",
        "For an image used as a link, Google uses the image's alt text, so write that text with care."
      ),
      h2("Weak links and their fixes"),
      table(
        ["Weak", "Better"],
        ["Click here to book", "Book a new patient appointment"],
        ["Read more", "Read how we handle test results"],
        ["Learn more about us", "Meet our providers"],
        ["Here", "The accepted insurance list"],
        ["Download", "Download the new patient forms (PDF)"]
      ),
      p(
        "Notice that the better version names the thing and, when it applies, the file type. A sentence that carries the context before the link, such as the list of accepted insurance plans is on our insurance page, reads well both on screen and aloud."
      ),
      h2("The five-minute check"),
      ol(
        "Open your three busiest pages, usually the home page, a service page and the contact page.",
        "Use the browser's find tool to search for each of these phrases: click here, read more, learn more, more, here, and this link. Note every match that is a link.",
        "Look at buttons as well. A button reading Submit or Go leads nowhere on its own, so name the action, such as Request an appointment.",
        "Check image links. Each one needs a text description of where it goes, not of how it looks.",
        "Rewrite each weak link so it still makes sense read alone, and check links that point to the same page use the same words.",
        "Read the page aloud, saying only the link text. If it sounds like nonsense, keep editing."
      ),
      h2("Where this sits in the bigger job"),
      p(
        "Descriptive links serve accessibility and clarity first. Our guide to [ADA web accessibility for a medical practice website](/guides/ada-web-accessibility-for-a-medical-practice-website) puts them among the other basics. They also help search engines, as covered in [internal linking for a medical practice website](/guides/internal-linking-for-a-medical-practice-website)."
      ),
      p(
        "If a link opens a new tab or a document, say so in the text. Our guide on [external link and new tab wording](/guides/external-link-and-new-tab-wording-on-a-medical-practice-website) shows how, and the [website accessibility statement guide](/guides/website-accessibility-statement-and-how-to-report-a-barrier-for-a-medical-practice) explains how to invite a patient to report a link that confuses them."
      ),
    ],
    faqs: [
      {
        q: "Is the phrase click here ever acceptable?",
        a: "Not as the link text. A sentence can still tell a reader to click, but the link itself should name what it leads to, so it makes sense read alone.",
      },
      {
        q: "How long should link text be?",
        a: "Reasonably concise. W3C describes meaningful link text of under 125 characters, but a few words that name the page are usually enough.",
      },
      {
        q: "Do buttons count as links?",
        a: "A button that takes a visitor to another page behaves like a link, so give it a name that says what happens, not Submit or Go.",
      },
      {
        q: "Does this affect search results?",
        a: "Google's documentation asks for descriptive anchor text, so it helps. We cannot promise a ranking change, but it also improves the page for patients.",
      },
      {
        q: "What if the page has hundreds of links?",
        a: "Start with the home page, the contact page and the five pages that get the most visits. Fix those first and work outward over a few weeks.",
      },
    ],
    citations: [WCAG_LINK, G_LINKS],
    links: [
      { href: "/guides/ada-web-accessibility-for-a-medical-practice-website", label: "ADA Web Accessibility", description: "The accessibility basics in one place." },
      { href: "/guides/external-link-and-new-tab-wording-on-a-medical-practice-website", label: "External Link and New Tab Wording", description: "Say where a link goes." },
      { href: "/guides/internal-linking-for-a-medical-practice-website", label: "Internal Linking Guide", description: "Links that help readers and search." },
      LOC,
    ],
  },

  // ---------------------------------------------------------------- 1863
  {
    slug: "collapsible-faq-and-accordion-sections-on-a-counseling-practice-page-that-stay-readable-by-search-engines-and-screen-readers",
    keyword: "collapsible FAQ and accordion sections on a counseling practice page that stay readable by search engines and screen readers",
    category: "How-to",
    title: "Collapsible FAQ and Accordion Sections",
    metaTitle: "Collapsible FAQ Sections for a Counseling Practice Page",
    metaDescription:
      "Build collapsible FAQ sections on a counseling practice page that search engines and screen readers can still read. (561) 291-2681",
    answer:
      "A collapsible FAQ should put each question in a real heading with a button inside, show whether the answer is open or closed, and keep the answer text in the page's HTML. Then people using a keyboard or screen reader, and search engines, can all read it.",
    author: "Liam Costello",
    publishDate: "2026-11-17T18:25:00Z",
    dateModified: "2026-11-17",
    readMinutes: 5,
    sections: [
      h2("Why practices use collapsible questions"),
      p(
        "A counseling practice page with eight questions and answers can run to a full screen of text on a phone. Collapsing the answers keeps the page short, so a visitor sees the questions first and opens only the ones they care about. That is a sensible choice, as long as the collapsing is built so that nobody is locked out."
      ),
      p(
        "Two groups can be locked out by a badly built accordion. One is people who use a keyboard or a screen reader. The other is search engines, which read the page's code, not its appearance. This guide covers both, using two primary sources that we read directly. The same logic applies to the page itself, where [named header, menu and main regions](/guides/page-landmarks-for-a-counseling-practice-website-so-a-screen-reader-user-can-jump-to-the-contact-form) let a screen reader jump to the part of the page a visitor needs."
      ),
      h2("What the W3C accordion pattern requires"),
      p(
        "The W3C's ARIA Authoring Practices Guide describes an accordion as a stack of headings that show and hide their panels. The pattern has a short list of rules."
      ),
      ul(
        "Each title is a button, and that button sits inside a heading element. The button must be the only thing inside the heading, with other items kept outside it.",
        "The heading's level should fit the page's outline. A native heading element can supply this.",
        "The button carries aria-expanded, set to true when its panel is showing and false when it is hidden.",
        "The button carries aria-controls, naming the panel it opens.",
        "Enter or Space opens a closed panel and closes an open one. Tab and Shift plus Tab move between the controls in the normal order.",
        "A region role on each panel is optional, and the guide advises skipping it when many panels can be open at once, around six or more, so a screen reader does not announce too many landmarks."
      ),
      h2("What Google can and cannot see"),
      p(
        "Google's JavaScript basics page explains that Google renders the page and indexes the rendered HTML, and that content missing from that rendered HTML cannot be indexed. That page does not mention accordions by name, so we do not claim it does. The practical lesson is to check what Google actually sees."
      ),
      ol(
        "Prefer an accordion that keeps every answer in the page's HTML and only hides it visually until opened.",
        "Be careful with versions that fetch an answer only after a click. If the text is never in the rendered HTML, a search engine may never read it.",
        "Check with Google's URL Inspection tool or the Rich Results Test, as the page recommends, and look at the rendered HTML for a sentence from a closed answer."
      ),
      h3("Markup and visible text must tell the same story"),
      p(
        "If you add FAQ markup, the questions and answers in it should be the same as the visible ones. Our guide on [FAQ schema after Google limited FAQ rich results](/guides/faq-schema-for-a-medical-practice-website-after-google-limited-faq-rich-results) explains what the markup can and cannot do now."
      ),
      h2("What the answers should say"),
      p(
        "On a counseling page, answers should describe how the practice works: how to book, how long a first visit lasts, what to bring, how fees are handled and what to do in an emergency. They should not make clinical claims or promise results. See our guides to an [FAQ page for a therapy practice](/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice) and [how to write patient FAQs that answer AI search](/guides/how-to-write-patient-faqs-that-answer-ai-search)."
      ),
      table(
        ["Check", "How to test it"],
        ["Keyboard", "Press Tab until a question is focused, then Enter or Space. The answer should open and close"],
        ["Screen reader", "Ask a staff member or tester to listen; each question should be announced as a button that is expanded or collapsed"],
        ["Phone", "Each question is easy to tap with a thumb and the open answer does not run off the screen"],
        ["Search engine", "A sentence from a closed answer appears in the rendered HTML in the inspection tool"],
        ["Emergency line", "The crisis wording stays visible and is never hidden inside a collapsed panel"]
      ),
      h2("Do not hide the most important answer"),
      p(
        "A patient in distress needs to see how to reach help right away. Put the emergency and crisis wording in plain view on the page, outside any panel. Keep the first one or two questions open by default if the page has only a few, and let the rest collapse."
      ),
      p(
        "If your page has fewer than five questions, consider skipping the accordion altogether. Plain headings and short answers are the simplest format for every reader and every crawler. Whatever you choose, pop-up menus and tooltips that vanish when the pointer moves have their own rules, covered in our guide on [menus and tooltips that vanish before a client can read them](/guides/menus-and-tooltips-that-vanish-before-a-patient-can-read-them-on-a-counseling-practice-website)."
      ),
    ],
    faqs: [
      {
        q: "Does Google ignore text inside a collapsed panel?",
        a: "Google's documentation says it indexes the rendered HTML, so what matters is whether the answer is present there. Check a closed answer with the URL Inspection tool.",
      },
      {
        q: "Is a plain list of questions safer than an accordion?",
        a: "For a short list, yes. It has no controls to get wrong. Use an accordion when the list is long enough that scrolling becomes a burden.",
      },
      {
        q: "Does the W3C pattern require arrow keys?",
        a: "The pattern page we read describes Enter, Space and Tab. It does not describe arrow keys as part of the pattern, so do not rely on them.",
      },
      {
        q: "Can the whole page be one accordion?",
        a: "We advise against it. Keep the main content open and use panels only for secondary questions.",
      },
      {
        q: "Who can check this for us?",
        a: "Your web person, with the keyboard and rendered-HTML tests above. You can repeat the keyboard test yourself in about two minutes.",
      },
    ],
    citations: [APG_ACCORDION, G_JS],
    links: [
      { href: "/guides/faq-page-for-a-therapy-practice-questions-to-answer-without-clinical-advice", label: "FAQ Page for a Therapy Practice", description: "Questions that are safe to answer." },
      { href: "/guides/how-to-write-patient-faqs-that-answer-ai-search", label: "Patient FAQs for AI Search", description: "Short answers that get quoted." },
      { href: "/guides/faq-schema-for-a-medical-practice-website-after-google-limited-faq-rich-results", label: "FAQ Schema After Google's Change", description: "What markup still does." },
      LOC,
    ],
  },
];
