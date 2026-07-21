import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RelatedLinks } from "@/components/related-links";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getUseCases } from "@/lib/data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "CV & Resume Management Use Cases",
  description: "CV management in practice: centralize a resume database, tailor CVs to every brief, build proposal packs, anonymize for tenders, and translate into any language.",
  path: "/use-cases",
  languages: languagesFor("/use-cases"),
});

export default async function UseCasesHubPage() {
  const useCases = await getUseCases();
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
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
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
