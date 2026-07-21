import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ComparisonTable } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getComparisons } from "@/lib/data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "MagicCV vs alternatives - honest comparisons",
  description: "Fair, factual comparisons of MagicCV against Flowcase, Cinode, Sprint CV, CuViBox, Napta, and doing nothing.",
  path: "/compare",
  languages: languagesFor("/compare"),
});

const SUMMARY_ROWS = [
  { category: "Starting point", magiccv: "Reasons from the RFP brief", competitor: "Template-first, or no tool at all" },
  { category: "Pricing", magiccv: "Public, self-serve", competitor: "Often demo-gated" },
  { category: "Typical time to live", magiccv: "About a week", competitor: "Weeks to a quarter, or manual forever" },
  { category: "EU multilingual & anonymization", magiccv: "Built in", competitor: "Varies by vendor" },
];

export default async function CompareHubPage() {
  const comparisons = await getComparisons();
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">How MagicCV compares.</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">
          Fair, factual comparisons - including where the alternative genuinely wins.
        </p>
        <div className="mt-10">
          <ComparisonTable competitorName="Alternatives (summary)" rows={SUMMARY_ROWS} />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">Pick a comparison</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              vs {comparison.competitorName}
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
