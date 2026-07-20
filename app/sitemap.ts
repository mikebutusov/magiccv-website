import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { site } from "@/lib/site";
import { features } from "@/lib/content/features";
import { useCases } from "@/lib/content/use-cases";
import { roles } from "@/lib/content/roles";
import { industries } from "@/lib/content/industries";
import { comparisons } from "@/lib/content/comparisons";

function blogSlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/pricing",
    "/demo",
    "/blog",
    "/features",
    "/use-cases",
    "/compare",
    "/trust",
    "/about",
    "/legal/privacy",
    "/legal/dpa",
    "/legal/terms",
  ];

  const dynamicRoutes = [
    ...blogSlugs().map((slug) => `/blog/${slug}`),
    ...features.map((f) => `/features/${f.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...roles.map((r) => `/solutions/${r.slug}`),
    ...industries.map((i) => `/solutions/${i.slug}`),
    ...comparisons.map((c) => `/compare/${c.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.6,
  }));
}
