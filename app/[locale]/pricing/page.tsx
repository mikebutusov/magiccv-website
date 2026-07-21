import type { Metadata } from "next";
import { Fragment } from "react";
import { PricingTable, type PricingTier } from "@/components/pricing-table";
import { ROICalculator } from "@/components/roi-calculator";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata, JsonLd, productJsonLd } from "@/lib/seo";
import { pricingTiers, site } from "@/lib/site";
import { dictionaries, isLocale, type Locale } from "@/lib/i18n";

const OG_LOCALES: Record<Locale, string> = { de: "de_DE", fr: "fr_FR", nl: "nl_NL", sv: "sv_SE" };
const PRICING_LANGUAGES = {
  en: "/pricing",
  de: "/de/pricing",
  fr: "/fr/pricing",
  nl: "/nl/pricing",
  sv: "/sv/pricing",
  "x-default": "/pricing",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaries[locale].pricing;
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDesc,
    path: `/${locale}/pricing`,
    languages: PRICING_LANGUAGES,
    ogLocale: OG_LOCALES[locale],
  });
}

export default async function LocalizedPricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale];
  const t = dict.pricing;

  // Prices/links/highlight come from the canonical tier data; copy from the dictionary.
  const tiers: PricingTier[] = (["free", "pro", "enterprise"] as const).map((id) => {
    const base = pricingTiers.find((tier) => tier.id === id)!;
    const copy = t.tiers[id];
    return {
      id,
      name: copy.name,
      priceMonthly: base.priceMonthly,
      limits: copy.limits,
      anchorValue: copy.anchor,
      cta: { label: copy.cta, href: base.cta.href },
      highlight: base.highlight,
      features: copy.features,
    };
  });

  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl font-medium text-ink md:text-5xl">{t.h1}</h1>
        <p className="mx-auto mt-4 max-w-measure text-lg text-ink-soft">{t.sub}</p>
        <PricingTable tiers={tiers} strings={{ mostPopular: t.mostPopular, custom: t.custom, perMonth: "/mo" }} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">{t.matrixTitle}</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-paper">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  {t.featureCol}
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  {t.tiers.free.name}
                </th>
                <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
                  {t.tiers.pro.name}
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  {t.tiers.enterprise.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.matrix.map((group) => (
                <Fragment key={group.group}>
                  <tr className="bg-paper/60">
                    <th
                      colSpan={4}
                      scope="colgroup"
                      className="border-b border-border p-3 text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      {group.group}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature} className="odd:bg-surface even:bg-paper">
                      <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                        {row.feature}
                      </th>
                      <td className="border-b border-border p-4 text-ink-soft">{row.free}</td>
                      <td className="border-b border-border bg-primary-tint/30 p-4 font-medium text-primary">
                        {row.pro}
                      </td>
                      <td className="border-b border-border p-4 text-ink-soft">{row.enterprise}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-border">
        <h2 className="text-2xl font-medium text-ink">{t.roiTitle}</h2>
        <div className="mt-6">
          <ROICalculator title={t.roiTitle} />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-4 rounded-3xl border border-border bg-paper p-6 text-sm text-ink-soft sm:grid-cols-2 lg:grid-cols-4">
          {t.strip.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <FAQAccordion faqs={t.faqs} title={t.faqsTitle} />
      </Section>

      <CTASection
        headline={dict.cta.headline}
        body={dict.cta.body}
        primaryCta={{ label: dict.nav.getStarted, href: site.signUpUrl }}
        secondaryCta={{ label: dict.nav.bookDemo, href: "/demo" }}
      />
      <JsonLd data={productJsonLd()} />
    </>
  );
}
