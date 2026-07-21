import type { RolePage } from "./types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales / business-development leads who own proposal win-rate and pipeline velocity.",
    h1: "Win more of the proposals you submit.",
    sub: "Stop letting slow, generic CVs cost you bids. MagicCV gives sales teams RFP-ready consultant packs in minutes - tailored to each opportunity.",
    pain: {
      quote: "We lose RFPs we should win, and CV prep is always the bottleneck.",
      answer: "MagicCV gives you tailored, on-brand CV packs that match the brief, ready before the deadline.",
      proofPoints: [
        "Faster turnaround from brief to submission",
        "Higher win rate on tailored bids",
        "Consistent, on-brand quality across the whole team",
      ],
    },
    featureRows: [
      {
        title: "Match the right people to each brief automatically",
        body: "MagicCV reads the brief and surfaces the best-fit consultants from your bench.",
        screenshotAlt: "Consultant matching against an RFP brief",
      },
      {
        title: "Tailor every CV to the opportunity's win conditions",
        body: "Each CV foregrounds what this specific brief is evaluating on - not a generic summary.",
        screenshotAlt: "Tailored CV highlighting win-condition experience",
      },
      {
        title: "Never miss a deadline - a pack in 15 minutes",
        body: "Go from brief to a submission-ready CV pack fast enough to stop treating this as the bottleneck.",
        screenshotAlt: "Proposal CV pack generated quickly before a deadline",
      },
      {
        title: "Consistent, on-brand quality that reflects the firm",
        body: "Every submission looks like it came from the same firm, because it's built on the same brand template.",
        screenshotAlt: "Brand-consistent CV pack across multiple consultants",
      },
    ],
    stats: [
      { value: "1 day → 15 min", label: "per CV pack", isPlaceholder: true },
      { value: "+18%", label: "win rate on tailored bids" },
    ],
    includeRoiTeaser: true,
    related: [
      { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    ],
    seo: {
      title: "Bid Management Software for Consulting Sales Teams",
      description:
        "The CV side of bid management software: give sales teams tailored, RFP-ready consultant CV packs in minutes and stop letting slow, generic CVs cost you bids.",
      keywords: ["bid management software", "proposal CV tool for sales", "win more RFPs consulting"],
    },
  },
  {
    _type: "rolePage",
    slug: "recruitment",
    reader: "Recruitment / resourcing leads who maintain consultant profiles and respond to staffing/bid requests.",
    h1: "Turn your talent pool into proposal-ready profiles.",
    sub: "Keep every consultant CV current, searchable, and instantly formatted for any brief or bid.",
    pain: {
      quote: "I'm constantly chasing consultants for updated CVs and reformatting them by hand.",
      answer: "MagicCV gives every person one central, always-current profile - generate any format on demand.",
      proofPoints: [
        "No more chasing consultants for updates",
        "A single source of truth per person",
        "Fast onboarding of new hires' CVs",
      ],
    },
    featureRows: [
      {
        title: "Centralized, structured consultant profiles",
        body: "Every consultant's experience lives as structured data in one place, not scattered documents.",
        screenshotAlt: "Centralized consultant profile database",
      },
      {
        title: "One profile → many tailored outputs",
        body: "Generate whatever format a bid or client needs, straight from the current profile.",
        screenshotAlt: "Multiple CV outputs generated from one profile",
      },
      {
        title: "Import & enrich from LinkedIn/HRIS",
        body: "Bring existing CVs in today; LinkedIn and HRIS enrichment are on the roadmap.",
        screenshotAlt: "Profile enrichment import flow",
      },
      {
        title: "Find the right person fast",
        body: "Search by skills and experience across your whole bench to respond to a staffing request quickly.",
        screenshotAlt: "Skills-based search across consultant profiles",
      },
    ],
    stats: [
      { value: "6 hrs", label: "saved per week chasing updates" },
    ],
    related: [
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "Specialist staffing & talent agencies", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Candidate Database Software for Recruitment & Resourcing Teams",
      description:
        "Candidate database software that keeps every CV current, searchable, and instantly formatted for any brief or bid - one resume database for your whole talent pool.",
      keywords: ["candidate database software", "consultant CV database", "resume database", "resourcing CV tool"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "HR / People Ops - the data steward persona. Cares about clean data and no parallel systems.",
    h1: "One source of truth for every consultant CV.",
    sub: "Stop maintaining CVs in five places. MagicCV keeps profiles clean, consistent, and compliant - with no shadow IT.",
    pain: {
      quote: "CVs live in shared drives, inboxes, and people's laptops - the data is a mess.",
      answer: "MagicCV replaces that with structured, governed profiles and role-based access.",
      proofPoints: [
        "Clean, structured data instead of scattered files",
        "GDPR-by-design throughout",
        "No duplicate systems to maintain",
      ],
    },
    featureRows: [
      {
        title: "Structured profiles, no more freeform docs",
        body: "Every consultant's data lives as structured fields, not an unstructured Word document.",
        screenshotAlt: "Structured profile schema view",
      },
      {
        title: "Role-based access & governance",
        body: "Control who can see and edit what, with clear ownership over consultant data.",
        screenshotAlt: "Role-based access control settings",
      },
      {
        title: "HRIS integrations (roadmap)",
        body: "Personio, BambooHR, and HiBob integrations are on the roadmap to keep profiles current automatically.",
        screenshotAlt: "HRIS integration settings panel",
      },
      {
        title: "GDPR-by-design, EU data residency, audit logs",
        body: "Data handling is built around GDPR requirements from the ground up, with EU data residency and audit logs.",
        screenshotAlt: "Audit log and data residency settings",
      },
    ],
    stats: [],
    related: [
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV for HR & People Ops - Clean, compliant CV data",
      description:
        "Stop maintaining CVs in five places. MagicCV keeps profiles clean, consistent, and compliant.",
      keywords: ["GDPR CV management", "HR consultant CV system"],
    },
  },
  {
    _type: "rolePage",
    slug: "project-delivery",
    reader: "Delivery / engagement / practice leads who staff projects and need CVs for client-facing proposals and engagement kickoffs.",
    h1: "Put the right people in front of every client.",
    sub: "Generate engagement-ready, on-brand consultant CVs that match the client's requirements - without pulling delivery time onto admin.",
    pain: {
      quote: "Every new engagement means scrambling for current CVs in the right format for that client.",
      answer: "MagicCV gives you instant, client-tailored CV packs so delivery leads staff and pitch faster.",
      proofPoints: [
        "Faster mobilization onto new engagements",
        "Client-specific templates, including government/enterprise procurement formats",
        "Multilingual output for cross-border delivery",
      ],
    },
    featureRows: [
      {
        title: "Match consultants to project requirements",
        body: "Find the right people for an engagement based on the client's stated requirements.",
        screenshotAlt: "Consultant matching against project requirements",
      },
      {
        title: "Client- and template-specific exports",
        body: "Switch between your house style and a client's required format without extra manual work.",
        screenshotAlt: "Client-specific CV template export",
      },
      {
        title: "Multilingual for cross-border delivery",
        body: "Generate CVs in the languages your delivery teams and clients actually work in.",
        screenshotAlt: "Multilingual CV set for a cross-border engagement",
      },
      {
        title: "Anonymized profiles for blind/competitive submissions",
        body: "Use anonymization when an engagement or tender calls for it.",
        screenshotAlt: "Anonymized CV for a competitive engagement submission",
      },
    ],
    stats: [],
    related: [
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "MagicCV for Project Delivery & Engagement Teams",
      description:
        "Generate engagement-ready, on-brand consultant CVs that match the client's requirements.",
      keywords: ["project staffing CV tool", "engagement CV consulting"],
    },
  },
];

export function getRole(slug: string): RolePage | undefined {
  return roles.find((r) => r.slug === slug);
}
