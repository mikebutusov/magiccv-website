import type { FeaturePage } from "./types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-to-CV reasoning",
    h1: "It starts with the RFP, not a template.",
    sub: "MagicCV reads the brief, understands the win conditions, and reshapes each CV to match -- the AI-native difference.",
    whatItDoesBody:
      "Template tools start from a CV and hope it fits the brief. MagicCV starts from the RFP: it reads the win conditions, identifies which experience is relevant, and re-emphasizes it in each consultant's CV. Every claim stays traceable to the source profile -- we don't fabricate, we re-emphasize. An optional conservative 'do-not-generate' mode is available for cases where a human should review before anything is written.",
    benefits: [
      {
        title: "Reads the brief like a proposal manager would",
        body: "MagicCV parses the RFP for win conditions, required skills, and evaluation criteria -- the same things an experienced bid manager looks for first.",
        screenshotAlt: "RFP-to-CV generation: brief analysis view",
      },
      {
        title: "Re-emphasizes, never fabricates",
        body: "Every sentence in a generated CV traces back to a fact in the consultant's source profile. Nothing is invented to fit the brief.",
        screenshotAlt: "RFP-to-CV generation: claim provenance view",
      },
      {
        title: "A conservative mode when you want a human in the loop",
        body: "Turn on do-not-generate mode to have MagicCV flag relevant experience for review rather than writing the CV outright.",
        screenshotAlt: "RFP-to-CV generation: conservative mode toggle",
      },
    ],
    connectsTo: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
    ],
    faqs: [
      {
        question: "Does MagicCV ever invent experience a consultant doesn't have?",
        answer:
          "No. RFP-to-CV reasoning only re-emphasizes and reorders real experience from a consultant's source profile. Every claim in a generated CV is traceable back to that profile.",
      },
      {
        question: "What if I want a person to check the output before it's used?",
        answer:
          "Turn on conservative ('do-not-generate') mode. MagicCV will surface the relevant experience and suggested emphasis for your review instead of producing a final CV automatically.",
      },
      {
        question: "What do I paste in -- the full RFP or a summary?",
        answer:
          "Paste the brief as you have it, whether that's a full RFP document, an evaluation criteria sheet, or a short summary. MagicCV extracts what it needs from whatever you provide.",
      },
    ],
    related: [
      { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "RFP-to-CV reasoning -- MagicCV's AI-native engine",
      description:
        "MagicCV reads the brief, understands the win conditions, and reshapes each consultant CV to match -- without fabricating experience.",
      keywords: ["AI CV for RFP", "RFP to CV tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Brand-consistent exports",
    h1: "Every CV, perfectly on-brand.",
    sub: "Your fonts, colors, and layout -- applied automatically to every consultant CV and proposal pack.",
    whatItDoesBody:
      "Set your brand once -- fonts, colors, logo placement, layout -- and every CV MagicCV generates uses it automatically. Export to PDF or DOCX, and switch to client- or tender-specific templates when a bid demands a particular format, without touching the underlying profile data.",
    benefits: [
      {
        title: "One brand template, applied everywhere",
        body: "Define your firm's visual identity once. Every consultant CV and every proposal pack inherits it automatically -- no manual formatting per bid.",
        screenshotAlt: "Brand template editor with firm logo and colors applied",
      },
      {
        title: "Client- and tender-specific formats on demand",
        body: "Keep your house style as the default, and switch to a client's required template or a government tender format without rebuilding anything by hand.",
        screenshotAlt: "Template picker showing house style vs. client-specific format",
      },
      {
        title: "Export to PDF or DOCX",
        body: "Generate submission-ready files in the format your proposal process actually needs.",
        screenshotAlt: "Export dialog showing PDF and DOCX output options",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Can we use a different template for a specific client or tender?",
        answer:
          "Yes. Set your house brand as the default and layer in client-specific or tender-specific templates whenever a bid requires it, without touching the underlying profile data.",
      },
      {
        question: "What export formats are supported?",
        answer: "PDF and DOCX today, both generated from the same on-brand template system.",
      },
    ],
    related: [
      { label: "Design & creative agencies", href: "/solutions/design-agencies" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Brand-consistent CV templates & exports -- MagicCV",
      description:
        "Your fonts, colors, and layout applied automatically to every consultant CV and proposal pack. PDF and DOCX export.",
      keywords: ["branded CV template tool", "consistent consultant CVs"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonymization & GDPR",
    h1: "Anonymization built in, not bolted on.",
    sub: "One-click blind CVs for tenders and competitive bids, with GDPR-by-design throughout.",
    whatItDoesBody:
      "Toggle anonymization on any CV to strip names, photos, and other identifying details according to rules you control -- consistently, across your whole team, every time. Built for blind evaluation processes and public tenders, and backed by GDPR-by-design data handling end to end. See the Trust Center for the full compliance picture.",
    benefits: [
      {
        title: "One-click anonymization",
        body: "Strip identifying details from any CV with a single toggle -- no manual redaction, no inconsistency between consultants.",
        screenshotAlt: "Anonymization toggle showing before/after CV comparison",
      },
      {
        title: "Rule control over what gets removed",
        body: "Configure exactly which fields count as identifying for your process, so anonymized CVs meet the specific tender or evaluation requirement.",
        screenshotAlt: "Anonymization rule configuration panel",
      },
      {
        title: "Consistent at scale",
        body: "Every anonymized CV follows the same rules, whether it's one submission or a full team pack for a public tender.",
        screenshotAlt: "Anonymized CV pack for a multi-consultant team",
      },
    ],
    connectsTo: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "What gets removed when a CV is anonymized?",
        answer:
          "Names, photos, and other identifying details are stripped according to rules you configure -- built to match blind-evaluation and public-tender requirements.",
      },
      {
        question: "Is this GDPR-compliant?",
        answer:
          "Anonymization is one part of MagicCV's GDPR-by-design approach. See the Trust Center for the full picture on data residency, retention, and processing.",
      },
    ],
    related: [
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "CV anonymization & GDPR -- MagicCV",
      description:
        "One-click blind CVs for tenders and competitive bids, with GDPR-by-design throughout.",
      keywords: ["CV anonymization", "GDPR CV tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Multilingual & translation",
    h1: "Bid in every European language.",
    sub: "Generate professional, on-brand CVs in EN, DE, FR, NL, ES and more from a single master profile.",
    whatItDoesBody:
      "Maintain one master profile per consultant, then generate accurate, on-brand CVs in any supported language on demand -- no retyping, no separate documents to keep in sync. Coverage today spans the core EU languages MagicCV's mid-market consulting customers bid in most, with more on the roadmap.",
    benefits: [
      {
        title: "One master profile, many languages",
        body: "Maintain a single source of truth per consultant. Generate a translated, on-brand CV in any supported language whenever a bid needs it.",
        screenshotAlt: "Language picker generating a CV in multiple EU languages",
      },
      {
        title: "Built for EU procurement",
        body: "Cross-border tenders and multilingual evaluation panels are the normal case for MagicCV's customers, not an edge case.",
        screenshotAlt: "Multilingual CV pack for a cross-border tender",
      },
      {
        title: "Consistent quality across languages",
        body: "The same brand template and the same underlying facts carry through every language version -- nothing drifts between translations.",
        screenshotAlt: "Side-by-side CV comparison across two languages",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Which languages are supported today?",
        answer:
          "EN, DE, FR, NL and ES are supported today, covering the core languages MagicCV's mid-market European customers bid in. More EU languages are on the roadmap.",
      },
      {
        question: "Do I need to maintain a separate profile per language?",
        answer:
          "No. Maintain one master profile per consultant and generate any supported language on demand -- there's nothing to keep manually in sync.",
      },
    ],
    related: [
      { label: "Translate CVs into any language", href: "/use-cases/translate-cvs" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Multilingual CVs & translation -- MagicCV",
      description:
        "Generate professional, on-brand CVs in EN, DE, FR, NL, ES and more from a single master profile.",
      keywords: ["multilingual CV tool", "CV in multiple languages"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Centralized profiles & skills intelligence",
    h1: "One structured profile per person -- endlessly reusable.",
    sub: "Import, enrich, and search your whole team by skills and experience; generate any output on demand.",
    whatItDoesBody:
      "Replace scattered CVs in shared drives and inboxes with one structured, always-current profile per consultant. Import from existing files today, with LinkedIn and HRIS enrichment on the roadmap, then search your whole bench by skill or experience and generate whatever output a bid requires -- on demand, from a single source of truth.",
    benefits: [
      {
        title: "Structured profiles, not freeform documents",
        body: "Each consultant's experience, skills, and certifications live as structured data -- searchable and reusable, not locked inside a Word file.",
        screenshotAlt: "Structured consultant profile editor",
      },
      {
        title: "Import and enrich",
        body: "Bring existing CVs in to start. LinkedIn and HRIS enrichment (Personio, BambooHR, HiBob) are on the roadmap to keep profiles current automatically.",
        screenshotAlt: "Profile import flow from existing CV files",
      },
      {
        title: "Find the right person fast",
        body: "Search your whole bench by skill, certification, or past project to staff the next brief in minutes, not a scramble through folders.",
        screenshotAlt: "Skills search across the consultant bench",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "How do I get existing CVs into MagicCV?",
        answer:
          "Import your existing CV files to create structured profiles. LinkedIn and HRIS enrichment (Personio, BambooHR, HiBob) are on the roadmap to keep them current with less manual upkeep.",
      },
      {
        question: "Can I search across all consultants by skill?",
        answer:
          "Yes. Every profile is structured data, so you can search your whole bench by skill, certification, or past project to staff a brief quickly.",
      },
    ],
    related: [
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "For HR / People Ops teams", href: "/solutions/hr" },
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Centralized consultant profiles & skills intelligence -- MagicCV",
      description:
        "Import, enrich, and search your whole team by skills and experience; generate any output on demand.",
      keywords: ["consultant skills database", "CV profile management"],
    },
  },
];

export function getFeature(slug: string): FeaturePage | undefined {
  return features.find((f) => f.slug === slug);
}
