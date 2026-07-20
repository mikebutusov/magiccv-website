import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { FeatureRowList } from "@/components/feature-row";
import { StatStrip } from "@/components/stat-strip";
import { TestimonialBlock } from "@/components/testimonial-block";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import type { IndustryPage } from "@/lib/content/types";

export function IndustryPageTemplate({ industry }: { industry: IndustryPage }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/#solutions-by-industry" },
          { label: industry.h1, href: `/solutions/${industry.slug}` },
        ]}
      />

      <Hero h1={industry.h1} sub={industry.sub} visualAlt={industry.reader} />

      <Section>
        <p className="max-w-measure text-lg text-ink-soft">{industry.angle}</p>
        {industry.note && (
          <p className="mt-4 max-w-measure rounded-md border border-border bg-surface p-4 text-sm text-muted">
            {industry.note}
          </p>
        )}
      </Section>

      <Section className="border-t border-border bg-surface">
        <FeatureRowList items={industry.keyPoints} />
      </Section>

      {industry.stats.length > 0 && (
        <Section className="border-t border-border">
          <div className="rounded-lg border border-border bg-surface">
            <StatStrip stats={industry.stats} />
          </div>
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={industry.reader} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={industry.faqs} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks links={industry.related} />
      </Section>

      <CTASection />
    </>
  );
}
