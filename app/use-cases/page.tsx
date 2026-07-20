import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { useCases } from "@/lib/content/use-cases";

export const metadata = buildMetadata({
  title: "MagicCV Use Cases",
  description: "Whatever the job-to-be-done -- tailoring, packing, centralizing, anonymizing, or translating CVs -- see exactly how MagicCV does it.",
  path: "/use-cases",
});

export default function UseCasesHubPage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Whatever you need to do with a CV, MagicCV does it.</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">
          Five jobs-to-be-done, each with the same underlying reasoning and profile data.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-lg font-medium text-ink">{useCase.h1}</p>
              <p className="mt-2 text-sm text-ink-soft">{useCase.job}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <RelatedLinks
          title="Explore features"
          links={[
            { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
            { label: "All features", href: "/features" },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}
