import { Fragment } from "react";
import { PricingTable } from "@/components/pricing-table";
import { ROICalculator } from "@/components/roi-calculator";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata, JsonLd, productJsonLd } from "@/lib/seo";
import { pricingFaqs, pricingFeatureMatrix } from "@/lib/content/pricing-faqs";

export const metadata = buildMetadata({
  title: "Pricing -- Plans from EUR49/mo",
  description:
    "Transparent pricing for consulting CV management. Starter, Growth, Scale, Enterprise. 14-day free trial, no credit card.",
  path: "/pricing",
  keywords: ["MagicCV pricing", "consultant CV software pricing"],
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
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-paper">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  Feature
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Starter
                </th>
                <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
                  Growth
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Scale
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
                      colSpan={5}
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
                      <td className="border-b border-border p-4 text-ink-soft">{row.starter}</td>
                      <td className="border-b border-border bg-primary-tint/30 p-4 font-medium text-primary">
                        {row.growth}
                      </td>
                      <td className="border-b border-border p-4 text-ink-soft">{row.scale}</td>
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
          <p>14-day free trial, no credit card required.</p>
          <p>30-day money-back guarantee on all paid plans.</p>
          <p>Annual prepay: 20% off the monthly price.</p>
          <p>Card (Stripe), SEPA, or invoice (Scale and above).</p>
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
