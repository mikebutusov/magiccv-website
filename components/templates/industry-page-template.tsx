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
import type { IndustryPage } from "@/lib/content/types";
import type { AnyLocale } from "@/lib/i18n";
import { templateCtx } from "@/lib/template-locale";

export function IndustryPageTemplate({ industry, locale = "en" }: { industry: IndustryPage; locale?: AnyLocale }) {
  const ctx = templateCtx(locale);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: ctx.tpl.breadcrumbSolutions, href: ctx.px("/#solutions-by-industry") },
          { label: industry.h1, href: ctx.px(`/solutions/${industry.slug}`) },
        ]}
      />

      <Hero h1={industry.h1} sub={industry.sub} visual={heroShotFor("industry", industry.slug)} {...ctx.heroCtas} />

      <Section>
        <p className="max-w-measure whitespace-pre-line text-lg text-ink-soft">{industry.angle}</p>
        {industry.note && (
          <p className="mt-4 max-w-measure rounded-xl border border-border bg-surface p-4 text-sm text-muted">
            {industry.note}
          </p>
        )}
      </Section>

      <Section className="border-t border-border bg-surface">
        <FeatureRowList items={industry.keyPoints} />
      </Section>

      {industry.stats.length > 0 && (
        <Section className="border-t border-border">
          <div className="rounded-2xl border border-border bg-surface">
            <StatStrip stats={industry.stats} />
          </div>
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={industry.seo.title.replace(/^MagicCV for /, "")} override={ctx.testimonial} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={industry.faqs} title={ctx.tpl.faqTitle} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks
          links={industry.related.map((l) => ({ ...l, href: ctx.px(l.href) }))}
          title={ctx.tpl.relatedTitle}
        />
      </Section>

      <CTASection {...ctx.cta} />
    </>
  );
}
