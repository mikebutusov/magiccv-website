import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Globe2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { FeatureRow } from "@/components/feature-row";
import { ROICalculator } from "@/components/roi-calculator";
import { CvGeneratorShot } from "@/components/product-shots/cv-generator-shot";
import { CvListShot } from "@/components/product-shots/cv-list-shot";
import { ImportShot } from "@/components/product-shots/import-shot";
import { TestimonialBlock } from "@/components/testimonial-block";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { dictionaries, isLocale, type Locale } from "@/lib/i18n";

const OG_LOCALES: Record<Locale, string> = { de: "de_DE", fr: "fr_FR", nl: "nl_NL", sv: "sv_SE" };
const HOME_LANGUAGES = { en: "/", de: "/de", fr: "/fr", nl: "/nl", sv: "/sv", "x-default": "/" };

const CAP_ICONS = [Sparkles, FileText, ShieldCheck, Globe2, Layers];
const CAP_HREFS = [
  "/features/rfp-to-cv",
  "/features/brand-templates",
  "/features/anonymization",
  "/features/multilingual",
  "/features/profiles-skills",
];
const TEAM_HREFS = ["/solutions/sales", "/solutions/recruitment", "/solutions/hr", "/solutions/project-delivery"];
const FIRM_HREFS = [
  "/solutions/it-consulting",
  "/solutions/strategy-consulting",
  "/solutions/design-agencies",
  "/solutions/public-sector",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaries[locale].home;
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDesc,
    path: `/${locale}`,
    languages: HOME_LANGUAGES,
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale];
  const t = dict.home;

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        h1={t.h1}
        sub={t.sub}
        primaryCta={{ label: dict.nav.getStarted, href: site.signUpUrl }}
        secondaryCta={{ label: dict.nav.bookDemo, href: "/demo" }}
        visual={<CvGeneratorShot />}
        stats={t.stats}
      />

      <LogoWall label={t.logoWall} />

      <Section className="border-t border-border">
        <div className="max-w-measure">
          <h2 className="text-3xl font-medium text-ink">{t.problemH2}</h2>
          <p className="mt-4 text-lg text-ink-soft">{t.problemP}</p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-3xl font-medium text-ink">{t.howTitle}</h2>
        <div className="divide-y divide-border">
          <FeatureRow item={{ ...t.how[0], screenshotAlt: "" }} visual={<ImportShot />} />
          <FeatureRow item={{ ...t.how[1], screenshotAlt: "" }} reverse visual={<CvListShot />} />
          <FeatureRow item={{ ...t.how[2], screenshotAlt: "" }} visual={<CvGeneratorShot />} />
        </div>
      </Section>

      <Section className="border-t border-border" id="capabilities">
        <h2 className="text-3xl font-medium text-ink">{t.capsTitle}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.caps.map((cap, i) => {
            const Icon = CAP_ICONS[i];
            return (
              <Link
                key={cap.title}
                href={CAP_HREFS[i]}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
              >
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <p className="font-medium text-ink">{cap.title}</p>
                <p className="text-sm text-ink-soft">{cap.body}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-medium text-ink">{t.valueTitle}</h2>
            <p className="mt-4 max-w-measure text-lg text-ink-soft">{t.valueP}</p>
            <Link
              href={`/${locale}/pricing`}
              className="mt-6 inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft"
            >
              {t.valueLink} <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ROICalculator title={t.roiTitle} />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-medium text-ink">{t.vsTitle}</h2>
          <Link href="/compare" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft">
            {t.vsSeeAll} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  &nbsp;
                </th>
                <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
                  {t.vsCols.magiccv}
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  {t.vsCols.template}
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  {t.vsCols.nothing}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.vsRows.map((row) => (
                <tr key={row.label} className="odd:bg-surface even:bg-paper">
                  <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="border-b border-border bg-primary-tint/40 p-4 font-medium text-primary">{row.a}</td>
                  <td className="border-b border-border p-4 text-ink-soft">{row.b}</td>
                  <td className="border-b border-border p-4 text-ink-soft">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-3xl font-medium text-ink">{t.teamTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.teamLinks.map((label, i) => (
            <Link
              key={label}
              href={TEAM_HREFS[i]}
              className="rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
        <h2 className="mt-12 text-3xl font-medium text-ink">{t.firmTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.firmLinks.map((label, i) => (
            <Link
              key={label}
              href={FIRM_HREFS[i]}
              className="rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-medium text-ink">{t.trustTitle}</h2>
              <p className="mt-2 max-w-measure text-ink-soft">{t.trustP}</p>
            </div>
            <Link href="/trust" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft">
              {t.trustLink} <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <TestimonialBlock context={`home-${locale}`} />
      </Section>

      <CTASection
        headline={dict.cta.headline}
        body={dict.cta.body}
        primaryCta={{ label: dict.nav.getStarted, href: site.signUpUrl }}
        secondaryCta={{ label: dict.nav.bookDemo, href: "/demo" }}
      />
    </>
  );
}
