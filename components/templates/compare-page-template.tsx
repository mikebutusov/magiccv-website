import { CheckCircle2, XCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ComparisonTable } from "@/components/comparison-table";
import { ROICalculator } from "@/components/roi-calculator";
import { TestimonialBlock } from "@/components/testimonial-block";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { heroShotFor } from "@/components/product-shots/hero-shot";
import type { ComparisonPage } from "@/lib/content/types";
import type { AnyLocale } from "@/lib/i18n";
import { templateCtx } from "@/lib/template-locale";

export function ComparePageTemplate({ comparison, locale = "en" }: { comparison: ComparisonPage; locale?: AnyLocale }) {
  const ctx = templateCtx(locale);
  const heroCtas =
    locale === "en"
      ? { primaryCta: { label: "Get started free", href: "/pricing" } }
      : ctx.heroCtas;
  return (
    <>
      <Breadcrumbs
        items={[
          { label: ctx.tpl.breadcrumbComparisons, href: ctx.px("/compare") },
          { label: comparison.h1, href: ctx.px(`/compare/${comparison.slug}`) },
        ]}
      />

      <Hero
        h1={comparison.h1}
        sub={comparison.sub}
        visual={heroShotFor("comparison", comparison.slug)}
        {...heroCtas}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-medium text-ink">
              <XCircle className="h-5 w-5 text-muted" aria-hidden />
              {ctx.tpl.whereStrong.replace("{x}", comparison.competitorName)}
            </h2>
            <ul className="mt-4 space-y-2">
              {comparison.whereCompetitorWins.map((point) => (
                <li key={point} className="text-ink-soft">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-medium text-primary">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
              {ctx.tpl.whereDiffers}
            </h2>
            <ul className="mt-4 space-y-2">
              {comparison.whereMagicCvDiffers.map((point) => (
                <li key={point} className="text-ink-soft">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">{ctx.tpl.sideBySide}</h2>
        <div className="mt-6">
          <ComparisonTable competitorName={comparison.competitorName} rows={comparison.rows} />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-medium text-ink">{ctx.tpl.whoShouldChoose}</h2>
          <p className="mt-3 max-w-measure text-ink-soft">{comparison.guidance}</p>
        </div>
      </Section>

      {comparison.slug === "sharepoint-word" && (
        <Section className="border-t border-border bg-surface">
          <ROICalculator title={ctx.tpl.roiTitle} />
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={`evaluating ${comparison.competitorName}`} override={ctx.testimonial} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={comparison.faqs} title={ctx.tpl.faqTitle} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks
          links={comparison.related.map((l) => ({ ...l, href: ctx.px(l.href) }))}
          title={ctx.tpl.relatedTitle}
        />
      </Section>

      <CTASection {...ctx.cta} />
    </>
  );
}
