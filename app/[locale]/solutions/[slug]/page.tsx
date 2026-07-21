import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RolePageTemplate } from "@/components/templates/role-page-template";
import { IndustryPageTemplate } from "@/components/templates/industry-page-template";
import { roles as enRoles } from "@/lib/content/roles";
import { industries as enIndustries } from "@/lib/content/industries";
import { getLocalizedContent } from "@/lib/data-localized";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, OG_LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return [...enRoles.map((r) => ({ slug: r.slug })), ...enIndustries.map((i) => ({ slug: i.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { roles, industries } = await getLocalizedContent(locale);
  const doc = roles.find((r) => r.slug === slug) ?? industries.find((i) => i.slug === slug);
  if (!doc) return {};
  return buildMetadata({
    ...doc.seo,
    path: `/${locale}/solutions/${slug}`,
    languages: languagesFor(`/solutions/${slug}`),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { roles, industries } = await getLocalizedContent(locale);
  const role = roles.find((r) => r.slug === slug);
  if (role) return <RolePageTemplate role={role} locale={locale} />;
  const industry = industries.find((i) => i.slug === slug);
  if (industry) return <IndustryPageTemplate industry={industry} locale={locale} />;
  notFound();
}
