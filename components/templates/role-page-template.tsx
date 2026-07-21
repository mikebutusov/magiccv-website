import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { PersonaPainCard } from "@/components/persona-pain-card";
import { FeatureRowList } from "@/components/feature-row";
import { StatStrip } from "@/components/stat-strip";
import { TestimonialBlock } from "@/components/testimonial-block";
import { ROICalculator } from "@/components/roi-calculator";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { heroShotFor } from "@/components/product-shots/hero-shot";
import type { RolePage } from "@/lib/content/types";

export function RolePageTemplate({ role }: { role: RolePage }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions-by-role" }, { label: role.h1, href: `/solutions/${role.slug}` }]} />

      <Hero h1={role.h1} sub={role.sub} visual={heroShotFor("role", role.slug)} />

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
          <ROICalculator />
        </Section>
      )}

      <Section className="border-t border-border">
        <TestimonialBlock context={role.seo.title.replace(/^MagicCV for /, "")} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <RelatedLinks links={role.related} />
      </Section>

      <CTASection />
    </>
  );
}
