export const site = {
  name: "MagicCV",
  tagline: "Every consultant CV, on-brand and ready in minutes.",
  description:
    "MagicCV keeps your consultants' profiles current and turns them into tailored, on-brand CVs -- for any client, bid, or language, in minutes. GDPR-ready, built for European consulting firms.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magiccv.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.magiccv.com",
  ogImage: "/og/default.png",
  social: {
    linkedin: "https://www.linkedin.com/company/magiccv",
  },
  locales: {
    default: "en",
    supported: ["en"],
    roadmap: ["de", "fr", "nl", "sv"],
  },
} as const;

export const primaryNav = [
  {
    label: "Product",
    groups: [
      {
        heading: "Features",
        items: [
          { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
          { label: "Brand-consistent exports", href: "/features/brand-templates" },
          { label: "Anonymization & GDPR", href: "/features/anonymization" },
          { label: "Multilingual & translation", href: "/features/multilingual" },
          { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
          { label: "All features", href: "/features" },
        ],
      },
    ],
  },
  {
    label: "Use cases",
    groups: [
      {
        heading: "Use cases",
        items: [
          { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
          { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
          { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
          { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
          { label: "Translate CVs into any language", href: "/use-cases/translate-cvs" },
          { label: "All use cases", href: "/use-cases" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        heading: "By role",
        items: [
          { label: "Sales teams", href: "/solutions/sales" },
          { label: "Recruitment teams", href: "/solutions/recruitment" },
          { label: "HR / People Ops", href: "/solutions/hr" },
          { label: "Project delivery", href: "/solutions/project-delivery" },
        ],
      },
      {
        heading: "By company type",
        items: [
          { label: "Software & IT consulting", href: "/solutions/it-consulting" },
          { label: "Strategy & management consulting", href: "/solutions/strategy-consulting" },
          { label: "Design & creative agencies", href: "/solutions/design-agencies" },
          { label: "Engineering & technical", href: "/solutions/engineering-consulting" },
          { label: "Audit, tax & advisory", href: "/solutions/audit-advisory" },
          { label: "Public-sector & tender-driven", href: "/solutions/public-sector" },
          { label: "Specialist staffing & talent", href: "/solutions/staffing-agencies" },
        ],
      },
    ],
  },
  {
    label: "Comparisons",
    groups: [
      {
        heading: "Popular comparisons",
        items: [
          { label: "vs Flowcase", href: "/compare/flowcase" },
          { label: "vs Cinode", href: "/compare/cinode" },
          { label: "vs Napta", href: "/compare/napta" },
          { label: "vs CV Converter", href: "/compare/cvconverter" },
          { label: "vs MuchSkills", href: "/compare/muchskills" },
          { label: "vs SharePoint + Word", href: "/compare/sharepoint-word" },
          { label: "All comparisons", href: "/compare" },
        ],
      },
    ],
  },
] as const;

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Use cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { label: "Sales teams", href: "/solutions/sales" },
    { label: "Recruitment teams", href: "/solutions/recruitment" },
    { label: "HR / People Ops", href: "/solutions/hr" },
    { label: "Project delivery", href: "/solutions/project-delivery" },
    { label: "IT consulting", href: "/solutions/it-consulting" },
    { label: "Strategy consulting", href: "/solutions/strategy-consulting" },
  ],
  comparisons: [
    { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    { label: "MagicCV vs Cinode", href: "/compare/cinode" },
    { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    { label: "All comparisons", href: "/compare" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Trust Center", href: "/trust" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/demo" },
  ],
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "DPA", href: "/legal/dpa" },
    { label: "Terms", href: "/legal/terms" },
    { label: "GDPR", href: "/trust" },
  ],
} as const;

export const pricingTiers = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    limits: "10 candidate profiles · 30 CVs (total)",
    anchorValue: "Try the full workflow on your own team -- no credit card, no clock.",
    cta: { label: "Get started free", href: "https://app.magiccv.com" },
    highlight: false,
    features: [
      "10 candidate profiles (total)",
      "30 CVs (total)",
      "AI CV generation & chat editing",
      "Brand templates & PDF export",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 50,
    limits: "200 candidate profiles · 600 CVs",
    anchorValue: "The full CV workflow for a working consulting team.",
    cta: { label: "Get started free", href: "https://app.magiccv.com" },
    highlight: true,
    features: [
      "Everything in Free",
      "200 candidate profiles",
      "600 CVs",
      "Anonymization & multilingual output",
      "Centralized profile search & tags",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: null,
    limits: "Unlimited profiles & CVs",
    anchorValue: "Unlimited scale, SSO, data residency, procurement-grade contracts.",
    cta: { label: "Talk to us", href: "/demo?plan=enterprise" },
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited profiles & CVs",
      "SSO & role-based access",
      "EU data residency guarantees",
      "DPA & custom contracts",
      "Dedicated onboarding & SLAs",
    ],
  },
] as const;
