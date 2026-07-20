import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { FeatureRowList } from "@/components/feature-row";
import { StatStrip } from "@/components/stat-strip";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import type { UseCasePage } from "@/lib/content/types";

export function UseCasePageTemplate({ useCase }: { useCase: UseCasePage }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Use cases", href: "/use-cases" },
          { label: useCase.h1, href: `/use-cases/${useCase.slug}` },
        ]}
      />

      <Hero h1={useCase.h1} sub={useCase.sub} visualAlt={useCase.job} />

      <Section>
        <h2 className="text-2xl font-medium text-ink">The problem today</h2>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{useCase.problemToday}</p>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">How MagicCV does it</h2>
        <FeatureRowList items={useCase.steps} />
      </Section>

      <Section className="border-t border-border">
        <h2 className="text-2xl font-medium text-ink">Outcome</h2>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">{useCase.outcome}</p>
        {useCase.outcomeStats.length > 0 && (
          <div className="mt-6 rounded-2xl border border-border bg-surface">
            <StatStrip stats={useCase.outcomeStats} />
          </div>
        )}
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={useCase.faqs} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks links={useCase.related} />
      </Section>

      <CTASection />
    </>
  );
}
