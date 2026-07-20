import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeaturePageTemplate } from "@/components/templates/feature-page-template";
import { features, getFeature } from "@/lib/content/features";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return buildMetadata({ ...feature.seo, path: `/features/${slug}` });
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();
  return <FeaturePageTemplate feature={feature} />;
}
