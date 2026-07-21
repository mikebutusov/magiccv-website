import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { Avatar } from "@/components/product-shots/browser-frame";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About MagicCV",
  description: "Why we built MagicCV, and what an AI-native, EU-native proposal-readiness platform means for mid-market consulting firms.",
  path: "/about",
  languages: languagesFor("/about"),
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Why we built MagicCV.</h1>
        <div className="mt-6 max-w-measure space-y-5 text-lg text-ink-soft">
          <p>
            Consulting and professional-services firms win business through written proposals - and lose hours of
            every bid to the same unglamorous problem: chasing consultants for current CVs, reformatting them by
            hand, and hoping the result reads as one consistent firm.
          </p>
          <p>
            That work doesn&rsquo;t require more headcount, and it doesn&rsquo;t require a template library. It requires
            starting from the brief - understanding what a client&rsquo;s RFP is actually asking for - and reasoning
            about which real experience answers it, before anything gets formatted at all.
          </p>
          <p>
            We also think being built for Europe is a feature, not a constraint. Multilingual output,
            GDPR-by-design data handling, and EU data residency aren&rsquo;t compliance checkboxes bolted on for a later
            market - they&rsquo;re the starting requirements for the mid-market European firms we build for.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium text-ink">A note from the founding team</h2>
        <div className="mt-6 max-w-measure space-y-5 rounded-3xl border border-border bg-paper p-8 text-lg text-ink-soft">
          <p>
            We spent years inside consulting and professional-services teams, and the proposal crunch was always
            the same: the strategy was strong, the people were right, and then a full evening disappeared into
            chasing and reformatting CVs before the deadline.
          </p>
          <p>
            MagicCV is the tool we wished we&rsquo;d had - one that starts from the brief, respects the truth of
            each person&rsquo;s experience, and gives the time back to the work that actually wins bids. Building it
            for Europe first, with GDPR and multiple languages at the core, isn&rsquo;t a constraint to us. It&rsquo;s
            the whole point.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Avatar initials="MC" className="h-11 w-11 text-sm" />
            <div>
              <p className="text-sm font-semibold text-ink">The MagicCV founding team</p>
              <p className="text-sm text-muted">Amsterdam &amp; Lviv</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-medium text-ink">Get in touch</h2>
        <p className="mt-3 text-ink-soft">
          Questions, feedback, or press inquiries - reach us via{" "}
          <Link href="/demo" className="font-medium text-primary hover:text-primary-soft">
            the demo request form
          </Link>{" "}
          and we&rsquo;ll route it to the right person.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
