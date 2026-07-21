import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeaturePageTemplate } from "@/components/templates/feature-page-template";
import { getFeature, getFeatures } from "@/lib/data";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const features = await getFeatures();
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = await getFeature(slug);
  if (!feature) return {};
  return buildMetadata({ ...feature.seo, path: `/features/${slug}`, languages: languagesFor(`/features/${slug}`) });
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = await getFeature(slug);
  if (!feature) notFound();
  return <FeaturePageTemplate feature={feature} />;
}
