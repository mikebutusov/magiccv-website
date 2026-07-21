import { Database, FileCheck, Globe2, KeyRound, ScrollText, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/container";
import { languagesFor } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MagicCV Trust & Security - GDPR, data residency, SSO",
  description: "GDPR-by-design, EU data residency, SSO, audit logs, and a factual, current picture of MagicCV's security posture.",
  path: "/trust",
  languages: languagesFor("/trust"),
  keywords: ["GDPR CV tool", "consulting software data residency"],
});

const SECTIONS = [
  {
    icon: ShieldCheck,
    title: "GDPR-by-design",
    body: "Data handling is built around GDPR requirements from the ground up - not retrofitted. Anonymization, access control, and retention are core parts of how consultant data is stored and processed, not optional add-ons.",
  },
  {
    icon: Globe2,
    title: "EU data residency",
    body: "Consultant and firm data is stored in EU infrastructure, consistent with the data-residency expectations of European consulting and professional-services firms.",
  },
  {
    icon: KeyRound,
    title: "SSO & role-based access",
    body: "Available on Scale and Enterprise plans: single sign-on and role-based access control so firms can govern exactly who sees and edits consultant data.",
  },
  {
    icon: ScrollText,
    title: "Audit logs",
    body: "Track changes to consultant profiles and CV exports, so HR and People Ops teams have visibility into who changed what, and when.",
  },
  {
    icon: FileCheck,
    title: "DPA template",
    body: "A Data Processing Agreement template is available on request - reach out and we'll send the current version for your legal team to review.",
  },
  {
    icon: Database,
    title: "Data deletion & retention",
    body: "Consultant and firm data can be deleted on request, consistent with GDPR data-subject rights. Full retention-schedule documentation is available on request.",
  },
];

export default function TrustPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Trust Center", href: "/trust" }]} />

      <Section>
        <h1 className="text-4xl font-medium text-ink md:text-5xl">Trust & security, kept factual and current.</h1>
        <p className="mt-4 max-w-measure text-lg text-ink-soft">
          Built for the scrutiny European consulting firms bring to procurement. No overstated certifications -
          what&rsquo;s live is live, and what&rsquo;s roadmap is clearly marked as roadmap.
        </p>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-paper p-6">
              <section.icon className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="mt-3 text-lg font-medium text-ink">{section.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-medium text-ink">Certifications</h2>
          <p className="mt-2 max-w-measure text-ink-soft">
            <span className="font-medium text-ink">SOC 2 Type I &mdash; in progress (targeted).</span> It&rsquo;s on
            our roadmap, and this page will update the moment it&rsquo;s achieved. We won&rsquo;t claim a
            certification before it&rsquo;s real.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="rounded-2xl border border-border bg-paper p-6">
          <h2 className="text-lg font-medium text-ink">Subprocessors</h2>
          <p className="mt-2 max-w-measure text-ink-soft">
            Our current subprocessor list is available on request and will be published here. Ask us and
            we&rsquo;ll send the up-to-date list for your review.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-medium text-ink">Need a completed security questionnaire?</h2>
        <p className="mx-auto mt-3 max-w-measure text-ink-soft">
          We&rsquo;ll work through your IT/security team&rsquo;s questionnaire directly - no generic trust-center PDF required.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/demo">Request a security review</Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
