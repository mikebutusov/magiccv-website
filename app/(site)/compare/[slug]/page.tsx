import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePageTemplate } from "@/components/templates/compare-page-template";
import { getComparison, getComparisons } from "@/lib/data";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const comparisons = await getComparisons();
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = await getComparison(slug);
  if (!comparison) return {};
  return buildMetadata({ ...comparison.seo, path: `/compare/${slug}`, languages: languagesFor(`/compare/${slug}`) });
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = await getComparison(slug);
  if (!comparison) notFound();
  return <ComparePageTemplate comparison={comparison} />;
}
