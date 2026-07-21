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
  const hub = pageDictionaries[locale].useCasesHub;
  return buildMetadata({
    title: hub.seoTitle,
    description: hub.seoDesc,
    path: `/${locale}/use-cases`,
    languages: languagesFor("/use-cases"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { useCases } = await getLocalizedContent(locale);
  const hub = pageDictionaries[locale].useCasesHub;
  const ctx = templateCtx(locale);
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{hub.title}</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{hub.sub}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={ctx.px(`/use-cases/${useCase.slug}`)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-lg font-medium text-ink">{useCase.h1}</p>
              <p className="mt-2 text-sm text-ink-soft">{useCase.job}</p>
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
