import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

// Every named rule below allows the exact same paths as the wildcard rule —
// a named user-agent block replaces the wildcard for that bot rather than
// adding to it, so each entry must repeat the same allow/disallow to avoid
// accidentally granting (or blocking) more than intended. Named explicitly
// so intent is unambiguous to AI/answer-engine crawlers specifically:
// GPTBot/ChatGPT-User (OpenAI), ClaudeBot (Anthropic), PerplexityBot,
// Google-Extended (Gemini/AI Overviews training use), Applebot-Extended
// (Apple Intelligence), Bingbot (Copilot).
const ALLOW = "/";
const DISALLOW = ["/api/", "/_next/", "/assessment/results", "/thank-you"];

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ALLOW,
        disallow: DISALLOW,
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: ALLOW,
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
