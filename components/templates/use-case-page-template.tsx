import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { FeatureRowList } from "@/components/feature-row";
import { StatStrip } from "@/components/stat-strip";
import { TestimonialBlock } from "@/components/testimonial-block";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { heroShotFor } from "@/components/product-shots/hero-shot";
import type { UseCasePage } from "@/lib/content/types";
import type { AnyLocale } from "@/lib/i18n";
import { templateCtx } from "@/lib/template-locale";

export function UseCasePageTemplate({ useCase, locale = "en" }: { useCase: UseCasePage; locale?: AnyLocale }) {
  const ctx = templateCtx(locale);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: ctx.tpl.breadcrumbUseCases, href: ctx.px("/use-cases") },
          { label: useCase.h1, href: ctx.px(`/use-cases/${useCase.slug}`) },
        ]}
      />

      <Hero h1={useCase.h1} sub={useCase.sub} visual={heroShotFor("useCase", useCase.slug)} {...ctx.heroCtas} />

      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{ctx.tpl.problemToday}</p>
        <p className="mt-4 max-w-measure whitespace-pre-line text-lg text-ink-soft">{useCase.problemToday}</p>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-3xl font-medium text-ink">{ctx.tpl.howMagiccvDoesIt}</h2>
        <FeatureRowList items={useCase.steps} numbered />
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl bg-primary-tint/50 p-8 md:p-12">
          <h2 className="text-3xl font-medium text-ink">{ctx.tpl.outcome}</h2>
          <p className="mt-4 max-w-measure whitespace-pre-line text-lg text-ink-soft">{useCase.outcome}</p>
          {useCase.outcomeStats.length > 0 && (
            <div className="mt-8 rounded-2xl border border-border bg-surface">
              <StatStrip stats={useCase.outcomeStats} />
            </div>
          )}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <TestimonialBlock context={`usecase-${useCase.slug}`} override={ctx.testimonial} />
      </Section>

      <Section className="border-t border-border">
        <FAQAccordion faqs={useCase.faqs} title={ctx.tpl.faqTitle} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <RelatedLinks
          links={useCase.related.map((l) => ({ ...l, href: ctx.px(l.href) }))}
          title={ctx.tpl.relatedTitle}
        />
      </Section>

      <CTASection {...ctx.cta} />
    </>
  );
}
