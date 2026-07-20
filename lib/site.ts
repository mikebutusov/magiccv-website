export const site = {
  name: "MagicCV",
  tagline: "Win more proposals. Faster.",
  description:
    "MagicCV turns any RFP into the right consultants and tailored, on-brand CVs -- in any language, in minutes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magiccv.com",
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
        heading: "Product",
        items: [
          { label: "Features", href: "/features" },
          { label: "Use cases", href: "/use-cases" },
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
        heading: "Comparisons",
        items: [
          { label: "All comparisons", href: "/compare" },
          { label: "vs Flowcase", href: "/compare/flowcase" },
          { label: "vs Cinode", href: "/compare/cinode" },
          { label: "vs Sprint CV", href: "/compare/sprint-cv" },
          { label: "vs CuViBox", href: "/compare/cuvibox" },
          { label: "vs Napta", href: "/compare/napta" },
          { label: "vs SharePoint + Word", href: "/compare/sharepoint-word" },
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
    id: "starter",
    name: "Starter",
    priceMonthly: 49,
    priceAnnualMonthly: 39,
    firmSize: "10-25 employees",
    anchorValue: "Replace the chaos folder. Brand-consistent exports + anonymization.",
    cta: { label: "Start free trial", href: "/demo?plan=starter" },
    highlight: false,
    features: [
      "Up to 25 consultant profiles",
      "Brand-consistent PDF/DOCX exports",
      "One-click anonymization",
      "1 language (EN)",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceMonthly: 99,
    priceAnnualMonthly: 79,
    firmSize: "25-100 employees",
    anchorValue: "The full RFP-to-CV workflow.",
    cta: { label: "Start free trial", href: "/demo?plan=growth" },
    highlight: true,
    features: [
      "Everything in Starter",
      "RFP-to-CV reasoning",
      "Up to 100 consultant profiles",
      "5+ EU languages",
      "Centralized profile search",
      "Priority support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceMonthly: 499,
    priceAnnualMonthly: 399,
    firmSize: "100-250 employees",
    anchorValue: "Integrations, analytics, public pages, SSO.",
    cta: { label: "Talk to us", href: "/demo?plan=scale" },
    highlight: false,
    features: [
      "Everything in Growth",
      "Unlimited consultant profiles",
      "SSO & role-based access",
      "HRIS integrations",
      "Usage analytics & public profile pages",
      "Dedicated onboarding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: null,
    priceAnnualMonthly: null,
    firmSize: "250+ / regulated",
    anchorValue: "White-label, data residency, procurement-grade contracts.",
    cta: { label: "Talk to us", href: "/demo?plan=enterprise" },
    highlight: false,
    features: [
      "Everything in Scale",
      "White-label exports",
      "EU data residency guarantees",
      "Procurement-grade contracts & DPA",
      "Custom SLAs",
    ],
  },
] as const;
