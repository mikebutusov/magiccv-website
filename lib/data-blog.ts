import "server-only";
import type { PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery, blogPostBySlugQuery } from "@/sanity/lib/queries";
import type { BlogPost } from "@/lib/blog-constants";
import { getAllPosts as getLocalPosts, getPostBySlug as getLocalPost } from "@/lib/blog";

export type { BlogPost } from "@/lib/blog-constants";

/** Article detail is a discriminated union: Sanity posts carry portable-text
 *  `body`, local MDX posts carry a `content` string. The article page branches
 *  on `source` to pick the right renderer. */
export type BlogPostDetail =
  | (BlogPost & { source: "local"; body?: undefined })
  | (BlogPost & { source: "sanity"; body: PortableTextBlock[]; content: "" });

function readingTimeFrom(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

type SanityListRow = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  updated?: string;
  featured?: boolean;
  readingTimeSource?: string;
  ogImageUrl?: string;
  keywords?: string[];
};

function toBlogPost(row: SanityListRow): BlogPost {
  return {
    slug: row.slug,
    frontmatter: {
      title: row.title,
      description: row.description,
      category: row.category,
      author: row.author,
      date: row.date,
      updated: row.updated,
      ogImage: row.ogImageUrl,
      keywords: row.keywords,
    },
    content: "",
    readingTime: readingTimeFrom(row.readingTimeSource ?? ""),
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (client) {
    try {
      const rows = await client.fetch<SanityListRow[]>(blogPostsQuery, {}, { next: { revalidate: 60, tags: ["content"] } });
      if (rows && rows.length > 0) return rows.map(toBlogPost);
    } catch (err) {
      console.error("[sanity] blog list fetch failed, falling back to local:", err);
    }
  }
  return getLocalPosts();
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | undefined> {
  if (client) {
    try {
      const row = await client.fetch<(SanityListRow & { body: PortableTextBlock[] }) | null>(
        blogPostBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: ["content"] } },
      );
      if (row) {
        const base = toBlogPost(row);
        return { ...base, source: "sanity", body: row.body ?? [], content: "" };
      }
    } catch (err) {
      console.error("[sanity] blog post fetch failed, falling back to local:", err);
    }
  }
  const local = getLocalPost(slug);
  if (!local) return undefined;
  return { ...local, source: "local" };
}
