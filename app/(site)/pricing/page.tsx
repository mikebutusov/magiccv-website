import { Fragment } from "react";
import { PricingTable } from "@/components/pricing-table";
import { ROICalculator } from "@/components/roi-calculator";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata, JsonLd, productJsonLd } from "@/lib/seo";
import { pricingFaqs, pricingFeatureMatrix } from "@/lib/content/pricing-faqs";

export const metadata = buildMetadata({
  title: "Pricing - Free plan, Pro at $50/mo",
  description:
    "Transparent pricing for consulting CV management. Start free (10 profiles, 30 CVs - no credit card), Pro at $50/mo, custom Enterprise.",
  path: "/pricing",
  keywords: ["MagicCV pricing", "consultant CV software pricing"],
  languages: { en: "/pricing", de: "/de/pricing", fr: "/fr/pricing", nl: "/nl/pricing", sv: "/sv/pricing", "x-default": "/pricing" },
});

export default function PricingPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Simple, public pricing.</h1>
        <p className="mx-auto mt-4 max-w-measure text-lg text-ink-soft">
          No demo gate. No surprises. Start free, upgrade when you grow.
        </p>
        <PricingTable />
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">Compare every feature by plan</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border" tabIndex={0} role="region" aria-label="Plan comparison">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-paper">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  Feature
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Free
                </th>
                <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
                  Pro
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingFeatureMatrix.map((group) => (
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
        <h2 className="text-2xl font-medium text-ink">What is the status quo costing you?</h2>
        <div className="mt-6">
          <ROICalculator />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-4 rounded-3xl border border-border bg-paper p-6 text-sm text-ink-soft sm:grid-cols-2 lg:grid-cols-4">
          <p>Free plan - no credit card, no expiry.</p>
          <p>Pro is month-to-month; cancel anytime.</p>
          <p>Payment by card (Stripe); invoicing on Enterprise.</p>
          <p>Custom contracts &amp; DPA on Enterprise.</p>
        </div>
      </Section>

      <Section className="border-t border-border">
        <FAQAccordion faqs={pricingFaqs} />
      </Section>

      <CTASection />
      <JsonLd data={productJsonLd()} />
    </>
  );
}
