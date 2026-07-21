import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/demo-form";
import { TestimonialBlock } from "@/components/testimonial-block";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { isLocale, languagesFor, localePrefix, OG_LOCALES } from "@/lib/i18n";
import { pageDictionaries } from "@/lib/i18n-pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = pageDictionaries[locale].demo;
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDesc,
    path: `/${locale}/demo`,
    languages: languagesFor("/demo"),
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = pageDictionaries[locale].demo;
  const testimonial = pageDictionaries[locale].testimonial;
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-4xl font-medium text-ink md:text-5xl">{t.h1}</h1>
            <p className="mt-4 max-w-measure text-lg text-ink-soft">{t.sub}</p>
            <ul className="mt-8 space-y-3">
              {t.expectations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm text-ink-soft">
                {t.preferPre}
                <Link
                  href={`${localePrefix(locale)}/pricing`}
                  className="font-semibold text-primary hover:text-primary-soft"
                >
                  {t.preferLink}
                </Link>
                {t.preferPost}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-muted">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                {t.gdprLine}
              </p>
            </div>
          </div>
          <DemoForm strings={t.form} />
        </div>
      </Section>
      <Section className="border-t border-border bg-surface">
        <TestimonialBlock override={testimonial} />
      </Section>
    </>
  );
}
