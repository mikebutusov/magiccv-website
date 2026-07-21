import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePageTemplate } from "@/components/templates/compare-page-template";
import { comparisons as enComparisons } from "@/lib/content/comparisons";
import { getLocalizedContent } from "@/lib/data-localized";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, OG_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return enComparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { comparisons } = await getLocalizedContent(locale);
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return buildMetadata({
    ...comparison.seo,
    path: `/${locale}/compare/${slug}`,
    languages: languagesFor(`/compare/${slug}`),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { comparisons } = await getLocalizedContent(locale);
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();
  return <ComparePageTemplate comparison={comparison} locale={locale} />;
}
