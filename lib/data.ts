import "server-only";
import { client } from "@/sanity/lib/client";
import {
  featuresQuery,
  featureBySlugQuery,
  useCasesQuery,
  useCaseBySlugQuery,
  rolesQuery,
  roleBySlugQuery,
  industriesQuery,
  industryBySlugQuery,
  comparisonsQuery,
  comparisonBySlugQuery,
} from "@/sanity/lib/queries";
import type {
  FeaturePage,
  UseCasePage,
  RolePage,
  IndustryPage,
  ComparisonPage,
} from "@/lib/content/types";
import { features as localFeatures } from "@/lib/content/features";
import { useCases as localUseCases } from "@/lib/content/use-cases";
import { roles as localRoles } from "@/lib/content/roles";
import { industries as localIndustries } from "@/lib/content/industries";
import { comparisons as localComparisons } from "@/lib/content/comparisons";

/**
 * Each getter tries Sanity first and falls back to the in-repo TS content
 * whenever Sanity is unconfigured, errors, or returns nothing. This keeps the
 * site rendering identically before and during the content migration, and
 * resilient if the CMS is ever unreachable at build time.
 */
async function fromSanity<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!client) return null;
  try {
    const result = await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60, tags: ["content"] },
    });
    return result ?? null;
  } catch (err) {
    console.error("[sanity] fetch failed, falling back to local content:", err);
    return null;
  }
}

function nonEmpty<T>(arr: T[] | null): arr is T[] {
  return Array.isArray(arr) && arr.length > 0;
}

// -- Features ----------------------------------------------------------
export async function getFeatures(): Promise<FeaturePage[]> {
  const remote = await fromSanity<FeaturePage[]>(featuresQuery);
  return nonEmpty(remote) ? remote : localFeatures;
}
export async function getFeature(slug: string): Promise<FeaturePage | undefined> {
  const remote = await fromSanity<FeaturePage>(featureBySlugQuery, { slug });
  return remote ?? localFeatures.find((f) => f.slug === slug);
}

// -- Use cases ---------------------------------------------------------
export async function getUseCases(): Promise<UseCasePage[]> {
  const remote = await fromSanity<UseCasePage[]>(useCasesQuery);
  return nonEmpty(remote) ? remote : localUseCases;
}
export async function getUseCase(slug: string): Promise<UseCasePage | undefined> {
  const remote = await fromSanity<UseCasePage>(useCaseBySlugQuery, { slug });
  return remote ?? localUseCases.find((u) => u.slug === slug);
}

// -- Roles -------------------------------------------------------------
export async function getRoles(): Promise<RolePage[]> {
  const remote = await fromSanity<RolePage[]>(rolesQuery);
  return nonEmpty(remote) ? remote : localRoles;
}
export async function getRole(slug: string): Promise<RolePage | undefined> {
  const remote = await fromSanity<RolePage>(roleBySlugQuery, { slug });
  return remote ?? localRoles.find((r) => r.slug === slug);
}

// -- Industries --------------------------------------------------------
export async function getIndustries(): Promise<IndustryPage[]> {
  const remote = await fromSanity<IndustryPage[]>(industriesQuery);
  return nonEmpty(remote) ? remote : localIndustries;
}
export async function getIndustry(slug: string): Promise<IndustryPage | undefined> {
  const remote = await fromSanity<IndustryPage>(industryBySlugQuery, { slug });
  return remote ?? localIndustries.find((i) => i.slug === slug);
}

// -- Comparisons -------------------------------------------------------
export async function getComparisons(): Promise<ComparisonPage[]> {
  const remote = await fromSanity<ComparisonPage[]>(comparisonsQuery);
  return nonEmpty(remote) ? remote : localComparisons;
}
export async function getComparison(slug: string): Promise<ComparisonPage | undefined> {
  const remote = await fromSanity<ComparisonPage>(comparisonBySlugQuery, { slug });
  return remote ?? localComparisons.find((c) => c.slug === slug);
}
