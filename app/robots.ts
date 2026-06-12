import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow internal Next.js paths and draft/preview routes if added later
      disallow: ["/api/", "/_next/", "/assessment/quiz", "/assessment/results", "/thank-you"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
