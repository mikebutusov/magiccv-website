import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { PersonaPainCard } from "@/components/persona-pain-card";
import { FeatureRowList } from "@/components/feature-row";
import { StatStrip } from "@/components/stat-strip";
import { TestimonialBlock } from "@/components/testimonial-block";
import { ROICalculator } from "@/components/roi-calculator";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { heroShotFor } from "@/components/product-shots/hero-shot";
import type { RolePage } from "@/lib/content/types";
import type { AnyLocale } from "@/lib/i18n";
import { templateCtx } from "@/lib/template-locale";

export function RolePageTemplate({ role, locale = "en" }: { role: RolePage; locale?: AnyLocale }) {
  const ctx = templateCtx(locale);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: ctx.tpl.breadcrumbSolutions, href: ctx.px("/#solutions-by-role") },
          { label: role.h1, href: ctx.px(`/solutions/${role.slug}`) },
        ]}
      />

      <Hero h1={role.h1} sub={role.sub} visual={heroShotFor("role", role.slug)} {...ctx.heroCtas} />

      <Section>
        <PersonaPainCard pain={role.pain} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FeatureRowList items={role.featureRows} />
      </Section>

      {role.stats.length > 0 && (
        <Section className="border-t border-border">
          <div className="rounded-2xl border border-border bg-surface">
            <StatStrip stats={role.stats} />
          </div>
        </Section>
      )}

      {role.includeRoiTeaser && (
        <Section className="border-t border-border bg-surface">
          <ROICalculator title={ctx.tpl.roiTitle} />
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={role.seo.title.replace(/^MagicCV for /, "")} override={ctx.testimonial} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={role.faqs ?? []} title={ctx.tpl.faqTitle} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks
          links={role.related.map((l) => ({ ...l, href: ctx.px(l.href) }))}
          title={ctx.tpl.relatedTitle}
        />
      </Section>

      <CTASection {...ctx.cta} />
    </>
  );
}
