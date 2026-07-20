import type { IndustryPage } from "./types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "IT services / software consultancies bidding for client and framework work; heavy on skills-matrix CVs.",
    angle:
      "Tech CVs must show the right stack, certifications, and project experience per bid. RFPs demand specific skills mapping.",
    h1: "CVs that prove your team can deliver the stack.",
    sub: "Match consultants by skills and tech experience, then generate RFP-ready CVs that speak the client's requirements -- in any language.",
    keyPoints: [
      {
        title: "Skills and tech matching to RFP requirements",
        body: "MagicCV maps consultants' stack experience directly against what the brief is asking for.",
        screenshotAlt: "Skills matrix matched against RFP tech requirements",
      },
      {
        title: "Certifications and project highlights surfaced automatically",
        body: "The certifications and project history that matter for this bid rise to the top of the CV.",
        screenshotAlt: "Certifications and project highlights on a tech CV",
      },
      {
        title: "Framework and tender formats",
        body: "Export in the specific format a framework agreement or tender requires.",
        screenshotAlt: "Framework agreement CV template export",
      },
      {
        title: "Multilingual for EU delivery",
        body: "Bid and deliver across borders without a separate translation process.",
        screenshotAlt: "Multilingual tech consultant CV set",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can MagicCV handle detailed skills-matrix CVs?",
        answer:
          "Yes -- MagicCV is built around matching consultants' skills and tech experience against RFP requirements, which is exactly what skills-matrix formats need.",
      },
      {
        question: "Does it support framework agreement formats?",
        answer:
          "Yes, you can export in your house brand or switch to a client- or framework-specific template when a bid requires it.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "For Sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV for Software & IT Consulting Firms",
      description:
        "Match consultants by skills and tech experience, then generate RFP-ready CVs -- in any language.",
      keywords: ["IT consulting CV management", "tech consultant CV for RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Strategy/management consultancies where partner and consultant credibility wins deals.",
    angle:
      "Proposals are won on the strength and relevance of the named team. CVs must foreground the most relevant engagements per pitch.",
    h1: "Show the most relevant team for every pitch.",
    sub: "MagicCV reasons about the brief and surfaces each consultant's most relevant experience -- on-brand, partner-ready, in minutes.",
    keyPoints: [
      {
        title: "Experience-relevance reasoning per brief",
        body: "Each consultant's CV foregrounds the engagements most relevant to this specific pitch.",
        screenshotAlt: "Consultant CV highlighting most relevant engagements for a pitch",
      },
      {
        title: "Consistent, premium brand presentation",
        body: "Every partner and team pack reflects the same polished, on-brand standard.",
        screenshotAlt: "Premium brand-consistent partner CV template",
      },
      {
        title: "Partner + team packs",
        body: "Assemble a complete, consistent pack across partners and the wider team for a single pitch.",
        screenshotAlt: "Combined partner and team CV pack",
      },
      {
        title: "Sector and competency tagging",
        body: "Tag experience by sector and competency so the most relevant work surfaces automatically.",
        screenshotAlt: "Sector and competency tags on a consultant profile",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Does this work for partner-level bios, not just consultant CVs?",
        answer:
          "Yes -- the same tailoring and brand-template system applies whether it's a consultant CV or a partner bio.",
      },
      {
        question: "How does MagicCV decide which engagements to foreground?",
        answer:
          "It reasons about the brief's stated requirements and surfaces the consultant's most relevant real experience -- it never invents engagements.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "For Sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV for Strategy & Management Consulting",
      description:
        "MagicCV reasons about the brief and surfaces each consultant's most relevant experience -- on-brand, partner-ready.",
      keywords: ["management consulting proposal CVs", "strategy consulting bid CV"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Design / creative / digital agencies pitching for projects and retainers; portfolio + team credentials matter.",
    angle:
      "Agencies pitch teams and creative credentials; CVs/bios must look on-brand and be tailored to each pitch quickly.",
    h1: "On-brand team bios for every pitch -- without the design time.",
    sub: "Generate beautifully consistent, tailored consultant and creative profiles that match your studio brand and the client brief.",
    keyPoints: [
      {
        title: "Brand-perfect templates",
        body: "Your studio's fonts, colors, and layout, applied automatically to every team bio.",
        screenshotAlt: "Studio-branded team bio template",
      },
      {
        title: "Tailored creative bios per pitch",
        body: "Highlight the team members and work most relevant to this specific pitch.",
        screenshotAlt: "Tailored creative team bio for a client pitch",
      },
      {
        title: "Multilingual for international clients",
        body: "Pitch cross-border clients in their language without a separate process.",
        screenshotAlt: "Multilingual creative team bios",
      },
      {
        title: "Centralized team profiles",
        body: "Keep every team member's credentials and past work in one current, structured place.",
        screenshotAlt: "Centralized creative team profile database",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can we keep our studio's exact visual identity?",
        answer:
          "Yes -- set your brand template once (fonts, colors, layout) and every generated bio inherits it automatically.",
      },
      {
        question: "Is this just for CVs, or team bios too?",
        answer: "The same tailoring and template system works for consultant CVs and creative team bios alike.",
      },
    ],
    related: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Tailor CVs to every RFP", href: "/use-cases/tailor-cvs" },
    ],
    seo: {
      title: "MagicCV for Design & Creative Agencies",
      description:
        "Generate beautifully consistent, tailored consultant and creative profiles that match your studio brand.",
      keywords: ["agency team bios tool", "creative agency proposal CV"],
    },
  },
  {
    _type: "industryPage",
    slug: "engineering-consulting",
    reader:
      "Civil/structural/MEP/environmental engineering consultancies -- extremely tender- and CV-heavy, especially for public procurement.",
    angle:
      "Public and private tenders require standardized, evidence-backed engineer CVs (qualifications, registrations, project references) in strict formats and often multiple languages.",
    h1: "Tender-ready engineer CVs in the exact format every bid demands.",
    sub: "Standardized, evidence-backed CVs with qualifications, registrations, and project references -- formatted for any tender, in any language.",
    keyPoints: [
      {
        title: "Strict tender and procurement formats",
        body: "Export in the exact structure a public or private tender requires.",
        screenshotAlt: "Engineering tender CV in a strict procurement format",
      },
      {
        title: "Project-reference matching to tender requirements",
        body: "Surface the project references most relevant to what this tender is asking for.",
        screenshotAlt: "Project references matched to tender requirements",
      },
      {
        title: "Registrations and certifications surfaced",
        body: "Professional registrations and certifications are presented clearly where evaluators expect to find them.",
        screenshotAlt: "Professional registrations on an engineer CV",
      },
      {
        title: "Multilingual and anonymization for public bids",
        body: "Meet language and blind-evaluation requirements common to public procurement.",
        screenshotAlt: "Anonymized multilingual engineer CV for a public bid",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Does MagicCV support the strict formats public tenders require?",
        answer:
          "Yes -- you can set up client- or tender-specific templates so CVs export in the exact structure a given tender requires.",
      },
      {
        question: "Can we anonymize engineer CVs for blind evaluation?",
        answer: "Yes, anonymization is built in and can be applied to any CV your public-tender process requires.",
      },
    ],
    related: [
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
    ],
    seo: {
      title: "MagicCV for Engineering & Technical Consulting Firms",
      description:
        "Standardized, evidence-backed engineer CVs with qualifications, registrations, and project references.",
      keywords: ["engineering tender CV", "consultant CV for public procurement"],
    },
  },
  {
    _type: "industryPage",
    slug: "audit-advisory",
    reader:
      "Mid-market audit/tax/advisory and accounting firms responding to RFPs and panel/framework submissions.",
    angle:
      "Advisory proposals require credentialed, compliant team CVs that highlight sector and regulatory experience; consistency and data governance matter.",
    h1: "Credentialed advisory CVs, consistent across every proposal.",
    sub: "Surface the right sector and regulatory experience for each engagement, with governance and consistency built in.",
    keyPoints: [
      {
        title: "Sector and credential tagging",
        body: "Tag experience by sector and professional credential so the right expertise surfaces per engagement.",
        screenshotAlt: "Sector and credential tags on an advisory CV",
      },
      {
        title: "Consistent firmwide presentation",
        body: "Every proposal reads as one firm, regardless of who assembled it.",
        screenshotAlt: "Firmwide brand-consistent advisory CV pack",
      },
      {
        title: "Governance and audit logs",
        body: "Track who changed what, with role-based access over consultant data.",
        screenshotAlt: "Governance and audit log view",
      },
      {
        title: "Multilingual for cross-border advisory",
        body: "Support regulatory and client requirements across markets.",
        screenshotAlt: "Multilingual advisory CV set",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can we tag consultants by regulatory credential and sector?",
        answer:
          "Yes -- tag profiles by sector and credential so the most relevant expertise surfaces automatically for each engagement.",
      },
      {
        question: "How is data governed across the firm?",
        answer:
          "Role-based access and audit logs give you visibility and control over who can see and edit consultant data.",
      },
    ],
    related: [
      { label: "For HR / People Ops teams", href: "/solutions/hr" },
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV for Audit, Tax & Advisory Firms",
      description:
        "Surface the right sector and regulatory experience for each engagement, with governance and consistency built in.",
      keywords: ["advisory firm proposal CV", "accounting consultant CV tool"],
    },
  },
  {
    _type: "industryPage",
    slug: "public-sector",
    reader: "Firms that bid heavily into EU/government tenders and framework agreements (any discipline).",
    angle:
      "Government procurement demands standardized CV templates, anonymization for blind evaluation, language localization, and airtight compliance. This is MagicCV's sharpest fit.",
    h1: "Built for the demands of public-sector tenders.",
    sub: "Standardized templates, anonymization, multilingual output, and GDPR-by-design -- everything EU and government procurement requires.",
    keyPoints: [
      {
        title: "Government and EU template compliance",
        body: "Export CVs in the standardized formats government and EU tenders require.",
        screenshotAlt: "Standardized government tender CV template",
      },
      {
        title: "Blind and anonymized submissions",
        body: "One-click anonymization built for blind evaluation processes.",
        screenshotAlt: "Anonymized CV for blind tender evaluation",
      },
      {
        title: "Multilingual localization",
        body: "Generate CVs in DE, FR, NL and more, from a single master profile.",
        screenshotAlt: "Localized multilingual public-sector CV set",
      },
      {
        title: "Data residency and GDPR for public buyers",
        body: "EU data residency and GDPR-by-design handling, built for the scrutiny public procurement demands.",
        screenshotAlt: "EU data residency settings for a public-sector tenant",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is MagicCV built for EU public procurement specifically?",
        answer:
          "Yes -- standardized templates, anonymization for blind evaluation, multilingual output, and GDPR-by-design data handling are core to how MagicCV is built, not an add-on.",
      },
      {
        question: "Where is our data stored?",
        answer: "See the Trust Center for the current, factual picture on EU data residency and data handling.",
      },
    ],
    related: [
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Trust Center", href: "/trust" },
      { label: "Engineering & technical consulting", href: "/solutions/engineering-consulting" },
    ],
    seo: {
      title: "MagicCV for Public-Sector & Tender-Driven Consulting",
      description:
        "Standardized templates, anonymization, multilingual output, and GDPR-by-design for EU and government procurement.",
      keywords: ["EU tender CV format", "government procurement CV tool", "anonymized CV for tenders"],
    },
  },
  {
    _type: "industryPage",
    slug: "staffing-agencies",
    reader:
      "Specialist (non-commodity) staffing/talent agencies placing professionals and submitting candidate CVs to clients.",
    angle:
      "Agencies live and die by fast, polished, client-formatted candidate CVs and anonymized profiles. Note: commodity recruitment is out of scope -- this page targets specialist/professional placement.",
    h1: "Polished, client-ready candidate CVs at agency speed.",
    sub: "Format, brand, and anonymize candidate profiles for every client submission -- in minutes, in any language.",
    keyPoints: [
      {
        title: "Fast, client-formatted submissions",
        body: "Generate a candidate CV in the exact format a client submission requires, quickly.",
        screenshotAlt: "Client-formatted candidate CV export",
      },
      {
        title: "Anonymized profiles for blind submission",
        body: "Apply anonymization when a client or process calls for blind evaluation.",
        screenshotAlt: "Anonymized candidate CV for blind submission",
      },
      {
        title: "Central candidate database",
        body: "Keep every candidate profile structured and current in one place.",
        screenshotAlt: "Central candidate profile database",
      },
      {
        title: "Multilingual",
        body: "Submit candidates in the language a client's process requires.",
        screenshotAlt: "Multilingual candidate CV set",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is MagicCV a fit for high-volume commodity recruitment?",
        answer:
          "No -- MagicCV is built for specialist and professional-services placement, where CV quality and tailoring per client matter, not high-volume commodity staffing.",
      },
      {
        question: "Can candidate CVs be anonymized for client submission?",
        answer: "Yes, the same one-click anonymization used across MagicCV applies to candidate profiles.",
      },
    ],
    note: "MagicCV is built for specialist and professional-services placement, not high-volume commodity recruitment.",
    related: [
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV for Specialist Staffing & Talent Agencies",
      description:
        "Format, brand, and anonymize candidate profiles for every client submission -- in minutes, in any language.",
      keywords: ["staffing agency CV formatting", "candidate CV anonymization tool"],
    },
  },
];

export function getIndustry(slug: string): IndustryPage | undefined {
  return industries.find((i) => i.slug === slug);
}
