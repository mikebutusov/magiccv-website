import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { features } from "@/lib/content/features";

export const metadata = buildMetadata({
  title: "MagicCV Features",
  description: "Everything you need to make CVs win work: RFP-to-CV reasoning, brand templates, anonymization, multilingual, and centralized profiles.",
  path: "/features",
});

export default function FeaturesHubPage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Everything you need to make CVs win work.</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">
          Five capabilities, one workflow -- from reading the brief to a submission-ready, on-brand CV pack.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-lg font-medium text-ink">{feature.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{feature.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <RelatedLinks
          title="Explore use cases"
          links={[
            { label: "Tailor CVs to every RFP", href: "/use-cases/tailor-cvs" },
            { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
            { label: "All use cases", href: "/use-cases" },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}
