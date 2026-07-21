import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Database, FileCheck, Globe2, KeyRound, ScrollText, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, localePrefix, OG_LOCALES } from "@/lib/i18n";
import { pageDictionaries } from "@/lib/i18n-pages";
import { templateCtx } from "@/lib/template-locale";

const ICONS = [ShieldCheck, Globe2, KeyRound, ScrollText, FileCheck, Database];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = pageDictionaries[locale].trust;
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDesc,
    path: `/${locale}/trust`,
    languages: languagesFor("/trust"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = pageDictionaries[locale].trust;
  const ctx = templateCtx(locale);
  return (
    <>
      <Breadcrumbs items={[{ label: "Trust Center", href: `${localePrefix(locale)}/trust` }]} />
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{t.h1}</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{t.sub}</p>
      </Section>
      <Section className="border-t border-border bg-surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div key={card.title} className="rounded-2xl border border-border bg-paper p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h2 className="mt-3 text-lg font-medium text-ink">{card.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{card.body}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-medium text-ink">{t.certTitle}</h2>
          <p className="mt-2 max-w-measure text-ink-soft">
            <span className="font-medium text-ink">{t.certLead}</span>
            {t.certBody}
          </p>
        </div>
      </Section>
      <Section className="border-t border-border bg-surface">
        <div className="rounded-2xl border border-border bg-paper p-6">
          <h2 className="text-lg font-medium text-ink">{t.subprocTitle}</h2>
          <p className="mt-2 max-w-measure text-ink-soft">{t.subprocBody}</p>
        </div>
      </Section>
      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-medium text-ink">{t.secTitle}</h2>
        <p className="mx-auto mt-3 max-w-measure text-ink-soft">{t.secBody}</p>
        <div className="mt-6 flex justify-center">
          <Button href={`${localePrefix(locale)}/demo`}>{t.secCta}</Button>
        </div>
      </Section>
      <CTASection {...ctx.cta} />
    </>
  );
}
