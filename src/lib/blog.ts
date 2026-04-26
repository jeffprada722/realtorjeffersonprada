export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  tags: string[];
  keywords: string[];
  heroImage: string;
  heroAlt: string;
  readingTime: string;
  body: string; // HTML
  faq?: { q: string; a: string }[];
};

import { miamiMarketAnalysis2026 } from "@/content/blog/miami-market-analysis-2026";

export const posts: BlogPost[] = [miamiMarketAnalysis2026];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}
