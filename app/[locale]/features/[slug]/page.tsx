import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeaturePageTemplate } from "@/components/templates/feature-page-template";
import { features as enFeatures } from "@/lib/content/features";
import { getLocalizedContent } from "@/lib/data-localized";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, OG_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return enFeatures.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { features } = await getLocalizedContent(locale);
  const feature = features.find((f) => f.slug === slug);
  if (!feature) return {};
  return buildMetadata({
    ...feature.seo,
    path: `/${locale}/features/${slug}`,
    languages: languagesFor(`/features/${slug}`),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { features } = await getLocalizedContent(locale);
  const feature = features.find((f) => f.slug === slug);
  if (!feature) notFound();
  return <FeaturePageTemplate feature={feature} locale={locale} />;
}
