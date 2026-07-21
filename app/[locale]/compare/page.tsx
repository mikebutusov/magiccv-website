import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { getLocalizedContent } from "@/lib/data-localized";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, OG_LOCALES } from "@/lib/i18n";
import { pageDictionaries } from "@/lib/i18n-pages";
import { templateCtx } from "@/lib/template-locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const hub = pageDictionaries[locale].compareHub;
  return buildMetadata({
    title: hub.seoTitle,
    description: hub.seoDesc,
    path: `/${locale}/compare`,
    languages: languagesFor("/compare"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { comparisons } = await getLocalizedContent(locale);
  const hub = pageDictionaries[locale].compareHub;
  const ctx = templateCtx(locale);
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{hub.title}</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{hub.sub}</p>
      </Section>
      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">{hub.pickTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={ctx.px(`/compare/${comparison.slug}`)}
              className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              vs {comparison.competitorName}
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>
      <CTASection {...ctx.cta} />
    </>
  );
}
