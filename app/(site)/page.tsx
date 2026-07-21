import Link from "next/link";
import { ArrowUpRight, FileText, Globe2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { FeatureRow } from "@/components/feature-row";
import { ROICalculator } from "@/components/roi-calculator";
import { CvGeneratorShot } from "@/components/product-shots/cv-generator-shot";
import { CvListShot } from "@/components/product-shots/cv-list-shot";
import { ImportShot } from "@/components/product-shots/import-shot";
import { TestimonialBlock } from "@/components/testimonial-block";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MagicCV -- AI CV & Resume Platform for Consulting Firms",
  description:
    "Keep every consultant profile current and turn it into a tailored, on-brand CV -- for any client, bid, or language, in minutes. Multilingual, GDPR-ready, built for European consulting firms. Free plan -- no credit card.",
  path: "/",
  keywords: ["CV management for consulting", "consultant CV software", "consultant CV database"],
});

const HOW_IT_WORKS = [
  {
    title: "Import your consultants once",
    body: "Bring your existing CVs in to create structured, always-current profiles for your whole team -- one source of truth instead of files scattered across drives and inboxes.",
    screenshotAlt: "Consultant profile import",
  },
  {
    title: "Tailor to any client, brief, or format",
    body: "Pick a consultant and a purpose -- a client intro, a bid, a specific template -- and MagicCV reshapes their CV around it. Paste an RFP when you have one; it's one path, not the only one.",
    screenshotAlt: "Tailoring a CV to a brief",
  },
  {
    title: "Export an on-brand pack in any language",
    body: "Get a submission-ready CV or full pack in your firm's brand, anonymized if you need it, in the language you're working in.",
    screenshotAlt: "Generated on-brand CV pack",
  },
];

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "RFP-to-CV reasoning",
    body: "Starts from the brief, not a template.",
    href: "/features/rfp-to-cv",
  },
  {
    icon: FileText,
    title: "Brand-consistent exports",
    body: "Every CV, perfectly on-brand.",
    href: "/features/brand-templates",
  },
  {
    icon: ShieldCheck,
    title: "Anonymization & GDPR",
    body: "Built in, not bolted on.",
    href: "/features/anonymization",
  },
  {
    icon: Globe2,
    title: "Multilingual & translation",
    body: "Bid in every European language.",
    href: "/features/multilingual",
  },
  {
    icon: Layers,
    title: "Centralized profiles & skills",
    body: "One structured profile, endlessly reusable.",
    href: "/features/profiles-skills",
  },
];

const ROLE_LINKS = [
  { label: "Sales teams", href: "/solutions/sales" },
  { label: "Recruitment teams", href: "/solutions/recruitment" },
  { label: "HR / People Ops", href: "/solutions/hr" },
  { label: "Project delivery", href: "/solutions/project-delivery" },
];

const INDUSTRY_LINKS = [
  { label: "Software & IT consulting", href: "/solutions/it-consulting" },
  { label: "Strategy & management consulting", href: "/solutions/strategy-consulting" },
  { label: "Design & creative agencies", href: "/solutions/design-agencies" },
  { label: "Public-sector & tender-driven", href: "/solutions/public-sector" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="AI-native CV management for consulting firms"
        h1="Every consultant CV, on-brand and ready in minutes."
        sub="MagicCV keeps your team's profiles current and turns them into tailored, on-brand CVs -- for any client, bid, or language. One source of truth, minutes instead of evenings."
        visual={<CvGeneratorShot />}
        stats={[
          { value: "1 day → 15 min", label: "per CV pack" },
          { value: "5+", label: "EU languages" },
          { value: "GDPR-by-design", label: "built in from day one" },
        ]}
      />

      <LogoWall />

      <Section className="border-t border-border">
        <div className="max-w-measure">
          <h2 className="text-3xl font-medium text-ink">
            Consultant CVs shouldn&rsquo;t be this much work.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            CVs live in shared drives, inboxes, and laptops -- out of date the moment you need them. Every
            client intro, bid, or new engagement means chasing people for updates and reformatting by hand,
            and the quality drifts every time. MagicCV makes the current version the easy version.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-3xl font-medium text-ink">How it works</h2>
        <div className="divide-y divide-border">
          <FeatureRow item={HOW_IT_WORKS[0]} visual={<ImportShot />} />
          <FeatureRow item={HOW_IT_WORKS[1]} reverse visual={<CvListShot />} />
          <FeatureRow item={HOW_IT_WORKS[2]} visual={<CvGeneratorShot />} />
        </div>
      </Section>

      <Section className="border-t border-border" id="capabilities">
        <h2 className="text-3xl font-medium text-ink">Everything you need to make CVs win work</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.href}
              href={cap.href}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <cap.icon className="h-6 w-6 text-primary" aria-hidden />
              <p className="font-medium text-ink">{cap.title}</p>
              <p className="text-sm text-ink-soft">{cap.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-medium text-ink">Consistent quality, at any volume</h2>
            <p className="mt-4 max-w-measure text-lg text-ink-soft">
              For the COO or Managing Partner: scale proposal output without scaling headcount, and get
              visible ROI on every CV the team sends out.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft"
            >
              See full pricing & ROI breakdown <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ROICalculator title="What could this be costing your team?" />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-medium text-ink">Why MagicCV vs the alternatives</h2>
          <Link href="/compare" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft">
            See all comparisons <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  &nbsp;
                </th>
                <th scope="col" className="border-b border-border bg-primary-tint p-4 font-semibold text-primary">
                  MagicCV
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Template tools
                </th>
                <th scope="col" className="border-b border-border p-4 font-medium text-ink-soft">
                  Do nothing (SharePoint + Word)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-surface even:bg-paper">
                <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                  Starting point
                </th>
                <td className="border-b border-border bg-primary-tint/40 p-4 font-medium text-primary">Reasons from the RFP brief</td>
                <td className="border-b border-border p-4 text-ink-soft">A CV template</td>
                <td className="border-b border-border p-4 text-ink-soft">A blank document, every time</td>
              </tr>
              <tr className="odd:bg-surface even:bg-paper">
                <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                  Pricing
                </th>
                <td className="border-b border-border bg-primary-tint/40 p-4 font-medium text-primary">Public, self-serve</td>
                <td className="border-b border-border p-4 text-ink-soft">Often demo-gated</td>
                <td className="border-b border-border p-4 text-ink-soft">€0 direct cost</td>
              </tr>
              <tr className="odd:bg-surface even:bg-paper">
                <th scope="row" className="border-b border-border p-4 font-medium text-ink">
                  Time per CV pack
                </th>
                <td className="border-b border-border bg-primary-tint/40 p-4 font-medium text-primary">About 15 minutes</td>
                <td className="border-b border-border p-4 text-ink-soft">Faster than nothing, still manual</td>
                <td className="border-b border-border p-4 text-ink-soft">Hours, every time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface" id="solutions-by-role">
        <h2 className="text-3xl font-medium text-ink">Built for your team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROLE_LINKS.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className="rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {role.label}
            </Link>
          ))}
        </div>
        <h2 className="mt-12 text-3xl font-medium text-ink" id="solutions-by-industry">
          Built for your firm
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRY_LINKS.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="rounded-2xl border border-border bg-paper px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {industry.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-medium text-ink">Built on EU trust from day one</h2>
              <p className="mt-2 max-w-measure text-ink-soft">
                EU data residency, SSO, DPA templates, and GDPR-by-design data handling throughout.
              </p>
            </div>
            <Link href="/trust" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-soft">
              Visit the Trust Center <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <TestimonialBlock />
      </Section>

      <CTASection />
    </>
  );
}
