// Client-safe constants split from lib/blog.ts (which uses node:fs and can't be
// imported from Client Components).
export const BLOG_CATEGORIES = [
  "Proposal & bid ops",
  "CV management",
  "AI for consulting",
  "Comparisons & alternatives",
  "Product & company",
] as const;

export interface BlogFrontmatter {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  updated?: string;
  ogImage?: string;
  keywords?: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}
