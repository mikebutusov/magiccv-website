import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { FeatureRowList } from "@/components/feature-row";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { heroShotFor } from "@/components/product-shots/hero-shot";
import { GenericUiShot } from "@/components/product-shots/generic-ui-shot";
import type { FeaturePage } from "@/lib/content/types";

export function FeaturePageTemplate({ feature }: { feature: FeaturePage }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Features", href: "/features" },
          { label: feature.name, href: `/features/${feature.slug}` },
        ]}
      />

      <Hero h1={feature.h1} sub={feature.sub} visual={heroShotFor("feature", feature.slug)} />

      <Section>
        <h2 className="text-2xl font-medium text-ink">What it does</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <p className="max-w-measure text-lg text-ink-soft">{feature.whatItDoesBody}</p>
          <GenericUiShot variant={1} />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">Why it matters</h2>
        <FeatureRowList items={feature.benefits} />
      </Section>

      {feature.connectsTo.length > 0 && (
        <Section className="border-t border-border">
          <h2 className="text-2xl font-medium text-ink">How this connects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {feature.connectsTo.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-border bg-surface">
        <FAQAccordion faqs={feature.faqs} />
      </Section>

      <Section className="border-t border-border">
        <RelatedLinks links={feature.related} />
      </Section>

      <CTASection />
    </>
  );
}
