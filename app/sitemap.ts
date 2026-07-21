import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { LOCALES } from "@/lib/i18n";
import { getFeatures, getUseCases, getRoles, getIndustries, getComparisons } from "@/lib/data";
import { getBlogPosts } from "@/lib/data-blog";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const [features, useCases, roles, industries, comparisons, posts] = await Promise.all([
    getFeatures(),
    getUseCases(),
    getRoles(),
    getIndustries(),
    getComparisons(),
    getBlogPosts(),
  ]);

  const dynamicRoutes = [
    ...posts.map((p) => `/blog/${p.slug}`),
    ...features.map((f) => `/features/${f.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...roles.map((r) => `/solutions/${r.slug}`),
    ...industries.map((i) => `/solutions/${i.slug}`),
    ...comparisons.map((c) => `/compare/${c.slug}`),
  ];

  // Localized mirrors: every locale gets the full content tree (blog/legal stay EN-only).
  const localizable = [
    "",
    "/pricing",
    "/demo",
    "/features",
    "/use-cases",
    "/compare",
    "/trust",
    "/about",
    ...dynamicRoutes.filter((r) => !r.startsWith("/blog")),
  ];
  const localizedRoutes = LOCALES.flatMap((locale) => localizable.map((r) => `/${locale}${r}`));

  return [...staticRoutes, ...dynamicRoutes, ...localizedRoutes].map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.6,
  }));
}
