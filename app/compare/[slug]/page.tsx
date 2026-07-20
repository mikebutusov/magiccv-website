import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePageTemplate } from "@/components/templates/compare-page-template";
import { comparisons, getComparison } from "@/lib/content/comparisons";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return buildMetadata({ ...comparison.seo, path: `/compare/${slug}` });
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  return <ComparePageTemplate comparison={comparison} />;
}
