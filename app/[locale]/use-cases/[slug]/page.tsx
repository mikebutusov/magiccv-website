import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePageTemplate } from "@/components/templates/use-case-page-template";
import { useCases as enUseCases } from "@/lib/content/use-cases";
import { getLocalizedContent } from "@/lib/data-localized";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, OG_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return enUseCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { useCases } = await getLocalizedContent(locale);
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) return {};
  return buildMetadata({
    ...useCase.seo,
    path: `/${locale}/use-cases/${slug}`,
    languages: languagesFor(`/use-cases/${slug}`),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { useCases } = await getLocalizedContent(locale);
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) notFound();
  return <UseCasePageTemplate useCase={useCase} locale={locale} />;
}
