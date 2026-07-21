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

export function ComparePageTemplate({ comparison }: { comparison: ComparisonPage }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Comparisons", href: "/compare" }, { label: comparison.h1, href: `/compare/${comparison.slug}` }]} />

      <Hero
        h1={comparison.h1}
        sub={comparison.sub}
        visual={heroShotFor("comparison", comparison.slug)}
        primaryCta={{ label: "Start free trial", href: "/pricing" }}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-medium text-ink">
              <XCircle className="h-5 w-5 text-muted" aria-hidden />
              Where {comparison.competitorName} is strong
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
              Where MagicCV is different
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
        <h2 className="text-2xl font-medium text-ink">Side by side</h2>
        <div className="mt-6">
          <ComparisonTable competitorName={comparison.competitorName} rows={comparison.rows} />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-medium text-ink">Who should choose which</h2>
          <p className="mt-3 max-w-measure text-ink-soft">{comparison.guidance}</p>
        </div>
      </Section>

      {comparison.slug === "sharepoint-word" && (
        <Section className="border-t border-border bg-surface">
          <ROICalculator />
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={`bid manager evaluating ${comparison.competitorName}`} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={comparison.faqs} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks links={comparison.related} />
      </Section>

      <CTASection />
    </>
  );
}
