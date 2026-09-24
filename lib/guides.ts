// ── Primara Guides ─────────────────────────────────────────────────────────
//
// Long-form, answer-first pages aimed at what Florida practice owners actually
// type into Google (and ask ChatGPT/Perplexity): what things cost, which
// channel to pick, and how to do the work themselves. Built to the standard in
// ~/Primara-Clients/PAGE-STANDARD.md — answer box in the first 40–60 words,
// FAQPage markup, Article/HowTo + Organization + BreadcrumbList schema, real
// outbound citations, and internal links to the matching service + two city
// pages.
//
// NOT city-templated. One page per intent, written once. Do not clone these
// with a city swap — the location system (lib/locations-*.ts) already covers
// geography and duplicating intent pages by city is exactly what got 41 URLs
// stuck in "Discovered – currently not indexed".
//
// Sitemap: app/sitemap.ts reads `guides` directly, and lib/lastmod.ts maps
// /guides/* to THIS file's commit date (guides are data, not one file per
// route) — same treatment as lib/blog.ts.

import { guidesPartOne } from "@/lib/guides-pricing";
import { guidesPartTwo } from "@/lib/guides-playbooks";
import { guidesPartThree } from "@/lib/guides-answers";
import { guidesPartFour } from "@/lib/guides-batch-20260923";
import { guidesPartFive } from "@/lib/guides-batch2-20260923";
import { guidesPartSix } from "@/lib/guides-batch3-20260924";

export type GuideSectionType = "h2" | "h3" | "p" | "ul" | "ol" | "table" | "callout";

export interface GuideSection {
  type: GuideSectionType;
  text?: string;
  items?: string[];
  headers?: [string, string];
  rows?: [string, string][];
}

export interface GuideFaq {
  q: string;
  a: string;
}

/** An outbound citation. Google, HHS/OCR, FTC, CDC — never a competitor. */
export interface GuideCitation {
  publisher: string;
  label: string;
  href: string;
}

export interface GuideLink {
  href: string;
  label: string;
  description: string;
}

export interface GuideHowTo {
  name: string;
  steps: { name: string; text: string }[];
}

export interface Guide {
  slug: string;
  /** Search intent this page owns. One page, one intent. */
  keyword: string;
  category: "Pricing" | "Comparison" | "How-to" | "Checklist" | "Playbook";
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** The answer box: 40–60 words, plain language, first thing on the page. */
  answer: string;
  author: "Gio LaRoche" | "Liam Costello";
  publishDate: string;
  dateModified: string;
  readMinutes: number;
  sections: GuideSection[];
  faqs: GuideFaq[];
  citations: GuideCitation[];
  /** Service hub + two city pages + sibling guides. */
  links: GuideLink[];
  howTo?: GuideHowTo;
}

export const guides: Guide[] = [
  ...guidesPartOne,
  ...guidesPartTwo,
  ...guidesPartThree,
  ...guidesPartFour,
  ...guidesPartFive,
  ...guidesPartSix,
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guideCategories: Guide["category"][] = [
  "Pricing",
  "Comparison",
  "How-to",
  "Checklist",
  "Playbook",
];
