"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { BlogPost } from "@/lib/blog-constants";
import { BLOG_CATEGORIES } from "@/lib/blog-constants";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () => (category === "All" ? posts : posts.filter((p) => p.frontmatter.category === category)),
    [posts, category],
  );

  const [featured, ...rest] = filtered;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts by category">
        {["All", ...BLOG_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={category === cat}
            onClick={() => setCategory(cat)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              category === cat
                ? "border-primary bg-primary-tint text-primary"
                : "border-border text-ink-soft hover:border-primary/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-ink-soft">No posts in this category yet.</p>
      ) : (
        <div className="mt-10">
          {featured && <FeaturedPostCard post={featured} />}
          {rest.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="grid gap-6 rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 md:grid-cols-[1.1fr_1fr] md:p-8"
    >
      <div className="order-2 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-border bg-paper text-xs text-muted md:order-1">
        {"{{IMAGE}}"}
      </div>
      <div className="order-1 flex flex-col justify-center md:order-2">
        <span className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
          {post.frontmatter.category}
        </span>
        <h2 className="mt-3 font-display text-2xl font-medium text-ink">{post.frontmatter.title}</h2>
        <p className="mt-2 text-ink-soft">{post.frontmatter.description}</p>
        <p className="mt-4 text-xs text-muted">
          {post.frontmatter.date} &middot; {post.readingTime}
        </p>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-border bg-paper text-xs text-muted">
        {"{{IMAGE}}"}
      </div>
      <span className="mt-4 w-fit rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-semibold text-primary">
        {post.frontmatter.category}
      </span>
      <h3 className="mt-3 text-lg font-medium text-ink">{post.frontmatter.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{post.frontmatter.description}</p>
      <p className="mt-4 text-xs text-muted">
        {post.frontmatter.date} &middot; {post.readingTime}
      </p>
    </Link>
  );
}
