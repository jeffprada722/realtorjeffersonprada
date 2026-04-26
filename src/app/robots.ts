import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtorjeffersonprada.com";

/**
 * AI/LLM crawlers explicitly blocked from MLS listing pages and API routes.
 *
 * Required by Miami Realtors / SEFMLS IDX agreement:
 *   - III.B.4: data may NOT be used for AI/ML/chatbot training
 *   - III.B.18: no robots/crawlers/scrapers may collect MLS data
 *
 * We block these user agents from /api/listings, /search, and
 * /featured-listings since those surfaces include licensed MLS data.
 * Other pages (homepage, blog, about, etc.) remain crawlable for SEO.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bytespider",
  "CCBot",
  "FacebookBot",
  "meta-externalagent",
  "Applebot-Extended",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
  "Bytedance",
  "TikTokSpider",
  "DuckAssistBot",
  "AmazonBot",
];

export default function robots(): MetadataRoute.Robots {
  const aiBlockRules = AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    disallow: ["/api/", "/search/", "/featured-listings/"],
  }));

  return {
    rules: [
      // General crawlers (Google, Bing, etc.) — allow everything except API + admin.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      // AI/LLM crawlers — blocked from MLS surfaces per IDX agreement.
      ...aiBlockRules,
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
