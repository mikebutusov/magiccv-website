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
  const hub = pageDictionaries[locale].featuresHub;
  return buildMetadata({
    title: hub.seoTitle,
    description: hub.seoDesc,
    path: `/${locale}/features`,
    languages: languagesFor("/features"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { features } = await getLocalizedContent(locale);
  const hub = pageDictionaries[locale].featuresHub;
  const ctx = templateCtx(locale);
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{hub.title}</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{hub.sub}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={ctx.px(`/features/${feature.slug}`)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-lg font-medium text-ink">{feature.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{feature.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {ctx.tpl.learnMore} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection {...ctx.cta} />
    </>
  );
}
