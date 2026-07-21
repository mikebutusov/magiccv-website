import type { UseCasePage } from "./types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Adapt each consultant's CV to the specific brief, highlighting the most relevant experience and win conditions.",
    h1: "Tailor every CV to every brief - automatically.",
    sub: "MagicCV reasons about the RFP and reshapes each consultant's CV to foreground what matters for this opportunity.",
    problemToday:
      "Every RFP has its own win conditions, but most CVs are static documents. Bid teams end up manually re-reading and re-ordering each consultant's experience by hand, for every single brief - or they skip it, and submit a generic CV that undersells the fit.",
    steps: [
      {
        title: "Paste the RFP or brief",
        body: "Drop in the RFP document, an evaluation criteria sheet, or a short summary of what the client is looking for.",
        screenshotAlt: "RFP brief pasted into MagicCV",
      },
      {
        title: "MagicCV identifies and re-emphasizes relevant experience",
        body: "It never fabricates - every claim is traceable back to the consultant's source profile, just reordered and re-emphasized to match the brief.",
        screenshotAlt: "Relevant experience highlighted against brief requirements",
      },
      {
        title: "Review and export, on-brand",
        body: "Check the result, adjust if needed, and export in your firm's brand template.",
        screenshotAlt: "Tailored CV export in brand template",
      },
    ],
    outcome: "Higher relevance per brief, and a better shot at every bid you submit.",
    outcomeStats: [{ value: "+18%", label: "win rate on tailored bids" }],
    faqs: [
      {
        question: "Does this rewrite a consultant's actual experience?",
        answer:
          "No. MagicCV re-emphasizes and reorders real experience from the source profile to match the brief - it never invents experience that isn't there.",
      },
      {
        question: "How long does tailoring one CV take?",
        answer: "Typically a couple of minutes from pasting the brief to a reviewed, export-ready CV.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "For Sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Tailor consultant CVs to every brief - MagicCV",
      description:
        "MagicCV reasons about the RFP and reshapes each consultant's CV to foreground what matters for this opportunity.",
      keywords: ["tailor CV to RFP", "customize consultant CV"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Assemble a complete, consistent CV pack for a proposal or bid in one go.",
    h1: "From RFP to a complete CV pack in 15 minutes.",
    sub: "Select the team, generate tailored CVs for everyone, and export a single on-brand pack ready to submit.",
    problemToday:
      "Assembling a CV pack for a proposal means chasing several people for current CVs, reformatting each one by hand, and hoping the whole pack reads consistently. It's the classic Friday-night scramble before a deadline.",
    steps: [
      {
        title: "Pick the team",
        body: "Select the consultants for this bid yourself, or let MagicCV suggest the best-fit people from your bench.",
        screenshotAlt: "Team selection screen for a proposal",
      },
      {
        title: "Generate tailored CVs for everyone at once",
        body: "Every CV in the pack is tailored to the same brief, at the same time.",
        screenshotAlt: "Batch CV generation for a full proposal team",
      },
      {
        title: "Export a unified, on-brand, submission-ready pack",
        body: "One consistent document, ready to attach to the proposal.",
        screenshotAlt: "Exported CV pack combining multiple consultants",
      },
    ],
    outcome: "What used to take a day now takes about fifteen minutes - no last-minute scramble.",
    outcomeStats: [{ value: "1 day → 15 min", label: "per CV pack", isPlaceholder: true }],
    faqs: [
      {
        question: "Can MagicCV suggest who to include in the pack?",
        answer:
          "Yes. Based on the brief and your bench's skills and experience, MagicCV can suggest best-fit consultants, though you always have the final say.",
      },
      {
        question: "Does the whole pack stay consistent in formatting?",
        answer: "Yes - every CV in the pack uses the same brand template, so the pack reads as one document.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "For Sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Build a proposal-ready CV pack in minutes - MagicCV",
      description:
        "Select the team, generate tailored CVs for everyone, and export a single on-brand pack ready to submit.",
      keywords: ["proposal CV pack", "RFP CV bundle consulting"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Replace scattered shared-drive CVs with one structured, current source of truth.",
    h1: "One home for every consultant CV.",
    sub: "CV database software that ends the hunt through SharePoint: import once, keep every profile current, and generate any format on demand.",
    problemToday:
      "CVs live in shared drives, inboxes, and people's laptops - multiple versions of the same person's CV, none of them clearly the current one. That isn't CV data management; it's file archaeology, and it costs time every single time a CV is needed.",
    steps: [
      {
        title: "Import from existing files",
        body: "Bring in CVs you already have to create structured profiles. LinkedIn and HRIS import are on the roadmap.",
        screenshotAlt: "Bulk CV import screen",
      },
      {
        title: "Maintain structured profiles, always current",
        body: "One profile per person, kept up to date in one place instead of scattered documents.",
        screenshotAlt: "Structured profile list view",
      },
      {
        title: "Generate any output, any format, anytime",
        body: "Whatever a bid or request needs, generate it from the current profile - no hunting for the latest file.",
        screenshotAlt: "Output format picker from a single profile",
      },
    ],
    outcome: "A single source of truth, no duplicate data, faster everything downstream.",
    outcomeStats: [],
    faqs: [
      {
        question: "What happens to our existing CV files?",
        answer:
          "Import them to create structured profiles in MagicCV. From there, the structured profile becomes the current source of truth, not the original file.",
      },
      {
        question: "Do you integrate with our HRIS?",
        answer: "HRIS integrations (Personio, BambooHR, HiBob) are on our roadmap.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "For HR / People Ops teams", href: "/solutions/hr" },
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV Database Software - Centralize & Standardize CVs",
      description:
        "Resume database management software for consulting teams: import CVs once, keep one current profile per person, and generate any format on demand. Proper CV data management, no more SharePoint hunts.",
      keywords: [
        "cv database software",
        "resume database software",
        "cv data management",
        "resume database management software",
        "cv dataset management",
        "cv database",
      ],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Produce anonymized, blind CVs for competitive bids, public tenders, and bias-free submission.",
    h1: "Anonymized CVs in one click.",
    sub: "Strip identifying details for blind evaluation and public tenders - consistently, across your whole team.",
    problemToday:
      "Public tenders and blind-evaluation processes require anonymized CVs, and manual redaction is slow and inconsistent - one team member's idea of 'anonymized' rarely matches another's.",
    steps: [
      {
        title: "Generate a CV",
        body: "Start from a tailored or standard CV for the consultant.",
        screenshotAlt: "Standard CV before anonymization",
      },
      {
        title: "Toggle anonymization",
        body: "Names, photos, and other identifying details are removed per the rules you've configured.",
        screenshotAlt: "Anonymization toggle applied to a CV",
      },
      {
        title: "Export for blind or competitive submission",
        body: "The anonymized version is export-ready, consistent with every other anonymized CV your team produces.",
        screenshotAlt: "Anonymized CV ready for tender submission",
      },
    ],
    outcome: "Tender-compliant, bias-reduced submissions, produced fast and consistently.",
    outcomeStats: [],
    faqs: [
      {
        question: "What counts as an identifying detail?",
        answer:
          "You control the rules - typically name, photo, and any other details your evaluation process treats as identifying.",
      },
      {
        question: "Is anonymization consistent across the team?",
        answer: "Yes - every anonymized CV follows the same configured rules, regardless of who generates it.",
      },
    ],
    related: [
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Specialist staffing & talent agencies", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anonymised CVs in One Click - Blind CVs for Tenders & Hiring",
      description:
        "Create an anonymous CV for blind evaluation, public tenders, and bias-free submissions - consistently, across your whole team, in one click.",
      keywords: ["anonymised cv", "anonymous cv", "CV anonymization tool", "anonymized CV for tenders", "blind recruitment"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Produce accurate, on-brand CVs in multiple European languages for cross-border bids.",
    h1: "Every CV, in every language you bid in.",
    sub: "Generate accurate, professional CVs in EN, DE, FR, NL, ES and more - without retyping or re-formatting.",
    problemToday:
      "Cross-border bids and multilingual evaluation panels mean the same CV needs to exist in several languages, kept in sync as the consultant's profile changes. Manual translation is slow and drifts out of date.",
    steps: [
      {
        title: "Maintain one master profile",
        body: "Keep a single, current profile per consultant as the source of truth.",
        screenshotAlt: "Master consultant profile in one language",
      },
      {
        title: "Choose the target language(s)",
        body: "Pick whichever language or languages this bid requires.",
        screenshotAlt: "Language selection for CV generation",
      },
      {
        title: "Export tailored, translated, on-brand CVs",
        body: "Get a consistent, professional CV in each selected language, ready to submit.",
        screenshotAlt: "Translated CVs exported side by side",
      },
    ],
    outcome: "Instant multilingual packs for EU procurement and cross-border delivery.",
    outcomeStats: [],
    faqs: [
      {
        question: "Which languages can I generate today?",
        answer: "EN, DE, FR, NL, and ES today, with more EU languages on the roadmap.",
      },
      {
        question: "Do translated CVs stay in sync as the profile updates?",
        answer: "Yes - regenerate any language on demand from the current master profile.",
      },
    ],
    related: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Software & IT consulting", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Translate consultant CVs into any language - MagicCV",
      description:
        "Generate accurate, professional CVs in EN, DE, FR, NL, ES and more - without retyping or re-formatting.",
      keywords: ["multilingual CV generator", "CV translation tool consulting"],
    },
  },
];

export function getUseCase(slug: string): UseCasePage | undefined {
  return useCases.find((u) => u.slug === slug);
}
