import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "./blog-constants";

export type { BlogFrontmatter, BlogPost } from "./blog-constants";
export { BLOG_CATEGORIES } from "./blog-constants";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readingTimeFor(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
        readingTime: readingTimeFor(content),
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
