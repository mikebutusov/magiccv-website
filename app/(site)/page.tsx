import Link from "next/link";
import { ArrowUpRight, FileText, Globe2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { FeatureRow } from "@/components/feature-row";
import { ROICalculator } from "@/components/roi-calculator";
import { CvGeneratorShot } from "@/components/product-shots/cv-generator-shot";
import { CvListShot } from "@/components/product-shots/cv-list-shot";
import { CvPreviewShot } from "@/components/product-shots/cv-preview-shot";
import { ImportShot } from "@/components/product-shots/import-shot";
import { TestimonialGrid } from "@/components/testimonial-block";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CV & Resume Management Software for Consulting Firms | MagicCV",
  absoluteTitle: true,
  description:
    "MagicCV is AI-native CV management software for consulting firms: one searchable resume database, tailored on-brand CVs in minutes, 5+ EU languages, GDPR-by-design. Free plan - no credit card.",
  path: "/",
  keywords: [
    "cv management software",
    "resume management software",
    "cv management",
    "cv management system",
    "resume management system",
    "cv database software",
    "resume database",
  ],
  languages: { en: "/", de: "/de", fr: "/fr", nl: "/nl", sv: "/sv", "x-default": "/" },
});

const HOW_IT_WORKS = [
  {
    title: "Import every CV you already have",
    body: "Drop in Word files, PDFs, or LinkedIn exports. MagicCV parses each one into a structured profile - skills, projects, certifications, languages - so the mess you have today becomes the database you search tomorrow. No retyping, no template migration project.",
    screenshotAlt: "Import screen parsing a Word CV into a structured profile",
  },
  {
    title: "Find the right people in seconds",
    body: "Search the whole bench like a skills matrix: React and German, PRINCE2 and public sector, whatever the brief asks for. Availability, seniority, and past projects sit on the same card - so staffing a bid is a query, not a call-around.",
    screenshotAlt: "CV list filtered by skills with availability badges",
  },
  {
    title: "Tailor to the brief, not from a blank page",
    body: "Paste the RFP or describe the client, and MagicCV reshapes each CV around the requirements - reordering projects, surfacing the relevant experience, and keeping every claim traceable to the consultant's real profile. Then refine it in chat.",
    screenshotAlt: "AI tailoring a CV against pasted RFP requirements",
  },
  {
    title: "Send a pack that looks like one firm",
    body: "Export to your brand template as PDF or Word - anonymized for blind submissions, translated for cross-border bids. Ten CVs, one visual standard, ready before the kickoff call.",
    screenshotAlt: "Export dialog with brand template, anonymization and language options",
  },
];

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "RFP-to-CV reasoning",
    body: "Paste the RFP and get CVs reshaped around its actual requirements - the right projects first, every claim traceable to the profile.",
    href: "/features/rfp-to-cv",
  },
  {
    icon: FileText,
    title: "Brand-consistent exports",
    body: "Your fonts, your layout, your rules - enforced automatically on every export, whoever hits the button.",
    href: "/features/brand-templates",
  },
  {
    icon: ShieldCheck,
    title: "Anonymization & GDPR",
    body: "One-click blind CVs for tenders and agency submissions, plus EU data residency and GDPR-by-design handling underneath.",
    href: "/features/anonymization",
  },
  {
    icon: Globe2,
    title: "Multilingual & translation",
    body: "Translate a CV without losing structure or layout. Bid in German on Monday, French on Wednesday, same profile.",
    href: "/features/multilingual",
  },
  {
    icon: Layers,
    title: "Centralized profiles & skills",
    body: "A searchable resume database and skills matrix for the whole team - import once, reuse for every client and bid.",
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
        eyebrow="AI-native CV management software for consulting firms"
        h1="Every consultant CV, on-brand and ready in minutes."
        sub="Stop rebuilding CVs in Word the night before a deadline. MagicCV keeps one structured profile per consultant and turns it into a tailored, on-brand CV for any client, bid, or language - in minutes, not evenings."
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
            Every firm has the same folder: seventeen versions of the same CV, none of them current, one of
            them called final_v3_edited.docx. When a bid lands, someone spends the evening chasing consultants
            for updates and reformatting Word files by hand - and the quality still drifts from one document
            to the next.
          </p>
          <p className="mt-4 text-lg text-ink-soft">
            MagicCV replaces the folder with one structured profile per person. The current version becomes
            the easy version - searchable, on-brand, and ready to tailor to whatever lands next.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              who: "If you run bids",
              pain: "The RFP names 3 roles and a 48-hour window. You need matched consultants and a consistent pack - not a formatting session.",
            },
            {
              who: "If you run resourcing",
              pain: "A client asks who's available with React and German. Today that answer lives in people's heads and out-of-date spreadsheets.",
            },
            {
              who: "If you run the firm",
              pain: "Every CV that goes out is your brand. Right now its quality depends on who happened to edit it last, and at what hour.",
            },
          ].map((c) => (
            <div key={c.who} className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.who}</p>
              <p className="mt-3 text-ink-soft">{c.pain}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-3xl font-medium text-ink">From scattered files to submission-ready, in four steps</h2>
        <div className="divide-y divide-border">
          <FeatureRow item={HOW_IT_WORKS[0]} visual={<ImportShot />} stepNumber={1} />
          <FeatureRow item={HOW_IT_WORKS[1]} reverse visual={<CvListShot />} stepNumber={2} />
          <FeatureRow item={HOW_IT_WORKS[2]} visual={<CvGeneratorShot />} stepNumber={3} />
          <FeatureRow item={HOW_IT_WORKS[3]} reverse visual={<CvPreviewShot />} stepNumber={4} />
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
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
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
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border" tabIndex={0} role="region" aria-label="Comparison of MagicCV with alternatives">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border-b border-border p-4 font-medium text-muted">
                  <span className="sr-only">Category</span>
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
        <TestimonialGrid
          title="Teams stopped losing evenings to CV formatting"
          subtitle="Early feedback from pilot teams. (Sample quotes - real customer stories are on the way.)"
        />
      </Section>

      <Section className="border-t border-border">
        <div className="max-w-measure">
          <h2 className="text-3xl font-medium text-ink">
            CV management software, built around how consulting actually works
          </h2>
          <div className="mt-5 space-y-4 text-lg text-ink-soft">
            <p>
              Most resume management software was built for recruiters screening thousands of applicants.
              MagicCV is different: it&rsquo;s a CV management system for the people you already employ - a
              searchable resume database where every consultant&rsquo;s skills, projects, and certifications
              live as structured data instead of stale Word files.
            </p>
            <p>
              That makes the hard parts of CV data management automatic. Import existing files and let CV
              parsing build the profile. Search your whole bench like a skills matrix. Generate a tailored,
              on-brand CV for any client, bid, or language in minutes - and keep the database as your single
              source of truth the entire time.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <FAQAccordion
            title="CV management software, explained"
            faqs={[
              {
                question: "What is CV management software?",
                answer:
                  "CV management software keeps your team's CVs and resumes in one structured, searchable database and generates polished, up-to-date documents on demand. Instead of chasing people for the latest Word file, you maintain one profile per person and export tailored, on-brand CVs for any client, proposal, or language.",
              },
              {
                question: "How is a CV database different from an ATS?",
                answer:
                  "An applicant tracking system (ATS) manages external candidates through a hiring pipeline. A CV database like MagicCV manages the people you already have - consultants and specialists whose CVs you present to clients - keeping their profiles current and instantly exportable in your firm's brand.",
              },
              {
                question: "Does MagicCV work as a resume management system for recruitment teams?",
                answer:
                  "Yes. Recruitment and resourcing teams use MagicCV as candidate database software: import CVs once, keep structured profiles current, search by skills or experience, and export client-ready, anonymized, or translated resumes in minutes.",
              },
              {
                question: "Can I search the resume database by skills?",
                answer:
                  "Yes - every profile is structured data, so it works like talent management software with resume search built in: filter your whole bench by skill, certification, language, or past project to staff the next brief in minutes.",
              },
              {
                question: "What happens to the CVs we already have in SharePoint?",
                answer:
                  "You import them. MagicCV parses Word files and PDFs into structured profiles automatically, so your existing CVs become the starting data rather than a migration problem. Most teams import their bench in an afternoon.",
              },
              {
                question: "Can we keep our existing CV template?",
                answer:
                  "Yes. Your brand template - fonts, layout, logo placement - is set up once and enforced on every export. Consultants and bid teams generate CVs that all look like they came from the same design team, because effectively they did.",
              },
              {
                question: "How much does CV management software cost?",
                answer:
                  "MagicCV is self-serve and public: Free covers 10 profiles and 30 generated CVs, Pro is $50/month for 200 profiles and 600 CVs, and Enterprise adds SSO, unlimited scale, and a DPA. No demo gate, no annual lock-in to see a price.",
              },
              {
                question: "Is our CV data safe - and are we GDPR-compliant using it?",
                answer:
                  "CV data is personal data, and MagicCV treats it that way: EU data residency, GDPR-by-design handling, audit logs, and one-click anonymization for blind submissions. The Trust Center documents the current security posture honestly, including what's still in progress.",
              },
            ]}
          />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
