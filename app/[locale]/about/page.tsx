import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { Avatar } from "@/components/product-shots/browser-frame";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, localePrefix, OG_LOCALES } from "@/lib/i18n";
import { pageDictionaries } from "@/lib/i18n-pages";
import { templateCtx } from "@/lib/template-locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = pageDictionaries[locale].about;
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDesc,
    path: `/${locale}/about`,
    languages: languagesFor("/about"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = pageDictionaries[locale].about;
  const ctx = templateCtx(locale);
  return (
    <>
      <Breadcrumbs items={[{ label: t.touchTitle, href: `${localePrefix(locale)}/about` }]} />
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{t.h1}</h1>
        <div className="mt-6 max-w-measure space-y-5 text-lg text-ink-soft">
          {t.paras.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>
      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">{t.noteTitle}</h2>
        <div className="mt-6 max-w-measure space-y-5 rounded-3xl border border-border bg-paper p-8 text-lg text-ink-soft">
          {t.noteParas.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <Avatar initials="MC" className="h-11 w-11 text-sm" />
            <div>
              <p className="text-sm font-semibold text-ink">{t.noteBy}</p>
              <p className="text-sm text-muted">{t.noteWhere}</p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-medium text-ink">{t.touchTitle}</h2>
        <p className="mt-3 text-ink-soft">
          {t.touchPre}
          <Link href={`${localePrefix(locale)}/demo`} className="font-medium text-primary hover:text-primary-soft">
            {t.touchLink}
          </Link>
          {t.touchPost}
        </p>
      </Section>
      <CTASection {...ctx.cta} />
    </>
  );
}
