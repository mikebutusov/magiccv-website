import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { PlaceholderBlock } from "@/components/ui/placeholder-block";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About MagicCV",
  description: "Why we built MagicCV, and what an AI-native, EU-native proposal-readiness platform means for mid-market consulting firms.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Why we built MagicCV.</h1>
        <div className="mt-6 max-w-measure space-y-5 text-lg text-ink-soft">
          <p>
            Consulting and professional-services firms win business through written proposals -- and lose hours of
            every bid to the same unglamorous problem: chasing consultants for current CVs, reformatting them by
            hand, and hoping the result reads as one consistent firm.
          </p>
          <p>
            That work doesn&rsquo;t require more headcount, and it doesn&rsquo;t require a template library. It requires
            starting from the brief -- understanding what a client&rsquo;s RFP is actually asking for -- and reasoning
            about which real experience answers it, before anything gets formatted at all.
          </p>
          <p>
            We also think being built for Europe is a feature, not a constraint. Multilingual output,
            GDPR-by-design data handling, and EU data residency aren&rsquo;t compliance checkboxes bolted on for a later
            market -- they&rsquo;re the starting requirements for the mid-market European firms we build for.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">A note from the founder</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <PlaceholderBlock label="{{FOUNDER_PHOTO}}" aspect="aspect-square" className="w-32" />
          <PlaceholderBlock label="{{FOUNDER_NOTE: personal message on why this problem, this market}}" aspect="aspect-auto" />
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-medium text-ink">Get in touch</h2>
        <p className="mt-3 text-ink-soft">
          Questions, feedback, or press inquiries -- reach us via{" "}
          <a href="/demo" className="font-medium text-primary hover:text-primary-soft">
            the demo request form
          </a>{" "}
          and we&rsquo;ll route it to the right person.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
