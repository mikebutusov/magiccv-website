import type { ComparisonPage } from "./types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase",
    sub: "An honest comparison for consulting CV and proposal management.",
    whereCompetitorWins: [
      "Strong brand recognition in the market",
      "Polished, mature UX built over years",
      "Established enterprise customers and case studies",
      "Established proposal generation workflows",
    ],
    whereMagicCvDiffers: [
      "RFP-to-CV reasoning that starts from the brief, not a template",
      "Public, self-serve pricing - no demo gate to see cost",
      "Built for mid-market firms, not enterprise-first",
      "Live in about a week, not a quarter-long rollout",
      "EU-native: multilingual, GDPR-by-design, anonymization built in",
    ],
    rows: [
      { category: "Starting point", magiccv: "Reasons from the RFP brief", competitor: "Template-first CV formatting" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Demo-gated" },
      { category: "Target firm size", magiccv: "Mid-market (10-250 employees)", competitor: "Enterprise-leaning" },
      { category: "Typical time to live", magiccv: "About a week", competitor: "Longer, enterprise-style rollout" },
      { category: "Multilingual", magiccv: "5+ EU languages", competitor: "Varies" },
      { category: "Anonymization", magiccv: "Built in, one click", competitor: "Varies" },
    ],
    guidance:
      "Need procurement-grade enterprise contracts and a long implementation? Flowcase fits. Want to be live in a week and start from a real RFP? MagicCV.",
    faqs: [
      {
        question: "Is MagicCV a direct replacement for Flowcase?",
        answer:
          "For mid-market firms that want to move fast on proposal CVs without an enterprise-scale rollout, yes. Larger firms with more complex procurement needs may still prefer Flowcase's enterprise track record.",
      },
      {
        question: "Can I try MagicCV without a sales call?",
        answer: "Yes - pricing is public and there's a free plan (10 profiles, 30 CVs), so you can start without booking a demo.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase - honest comparison",
      description:
        "How MagicCV compares to Flowcase for consulting CV management: pricing, AI, implementation, EU compliance.",
      keywords: ["Flowcase alternative", "Flowcase vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cinode",
    competitorName: "Cinode",
    h1: "MagicCV vs Cinode",
    sub: "An honest comparison for consulting CV and resource management.",
    whereCompetitorWins: [
      "Broad suite: CV management, skills, sales, and resource planning in one platform",
      "Strong presence in the Nordics",
      "Sticky and deeply embedded once fully deployed",
    ],
    whereMagicCvDiffers: [
      "Sharper focus: CV-for-RFP done better than any one module of a broader suite",
      "Faster deployment",
      "Lower cost and lower switching cost",
      "Public, self-serve pricing",
    ],
    rows: [
      { category: "Scope", magiccv: "Focused: RFP-to-CV workflow", competitor: "Broad suite: CV + skills + sales + resourcing" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
      { category: "Deployment time", magiccv: "About a week", competitor: "Longer, suite-wide rollout" },
      { category: "Regional strength", magiccv: "EU-wide, multilingual", competitor: "Strong in the Nordics" },
      { category: "Switching cost", magiccv: "Low - narrow, additive tool", competitor: "Higher once fully embedded" },
    ],
    guidance:
      "Replacing your HRIS, CRM, and resource planning all at once? Cinode. Want to fix proposals first and keep your other tools? MagicCV.",
    faqs: [
      {
        question: "Does MagicCV replace resource planning or a CRM?",
        answer:
          "No - MagicCV is focused specifically on the RFP-to-CV workflow. If you need a broader suite covering resource planning and sales, Cinode's scope is wider.",
      },
      {
        question: "Can MagicCV and Cinode be used side by side?",
        answer:
          "Some firms use MagicCV for proposal CVs specifically while keeping a broader platform for resourcing - it depends on how much of the suite you're actually using today.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode - honest comparison",
      description: "How MagicCV compares to Cinode: focus, deployment speed, cost, and regional fit.",
      keywords: ["Cinode alternative", "Cinode vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv",
    competitorName: "Sprint CV",
    h1: "MagicCV vs Sprint CV",
    sub: "An honest comparison for consulting and staffing CV tools.",
    whereCompetitorWins: [
      "Consulting- and staffing-focused product",
      "Solid CV parsing and templates",
      "Strong presence in Iberia",
    ],
    whereMagicCvDiffers: [
      "AI-native architecture built around RFP reasoning, not just parsing",
      "Public pricing",
      "Faster iteration and roadmap velocity",
      "Broader EU language coverage",
    ],
    rows: [
      { category: "Core engine", magiccv: "AI-native RFP reasoning", competitor: "CV parsing and templates" },
      { category: "Regional strength", magiccv: "EU-wide", competitor: "Strong in Iberia" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
      { category: "Language coverage", magiccv: "5+ EU languages", competitor: "Varies" },
    ],
    guidance:
      "Primarily operating in Iberia? Sprint CV is a respectable choice. Want broader EU language support and AI-native RFP reasoning? MagicCV.",
    faqs: [
      {
        question: "Is Sprint CV a bad choice?",
        answer:
          "No - it's a solid, focused product, particularly for firms primarily operating in Iberia. MagicCV's edge is broader EU language coverage and RFP-to-CV reasoning rather than template parsing.",
      },
    ],
    related: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV - honest comparison",
      description: "How MagicCV compares to Sprint CV for consulting and staffing CV management.",
      keywords: ["Sprint CV alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cuvibox",
    competitorName: "CuViBox",
    h1: "MagicCV vs CuViBox",
    sub: "An honest comparison for consultant CV management.",
    whereCompetitorWins: ["Solid, established CV manager", "Mature template engine"],
    whereMagicCvDiffers: [
      "AI-native: reasons about the RFP first, rather than a template engine with AI added on top",
      "Mid-market, self-serve model",
    ],
    rows: [
      { category: "Approach", magiccv: "AI-native, reasons from the brief", competitor: "Template engine, AI as an add-on" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
      { category: "Target firm size", magiccv: "Mid-market (10-250 employees)", competitor: "Varies" },
    ],
    guidance:
      "Happy with a template-first workflow with some AI assistance layered in? CuViBox is an established option. Want the AI reasoning to be the starting point, not an add-on? MagicCV.",
    faqs: [
      {
        question: "What's the practical difference between 'AI-native' and 'AI-assisted'?",
        answer:
          "MagicCV starts from the RFP and reasons about which experience matters before touching a template. Template-first tools start from a CV format and use AI to help fill it in - the brief comes second.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox - honest comparison",
      description: "How MagicCV compares to CuViBox: template-first vs AI-native CV generation.",
      keywords: ["CuViBox alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "napta",
    competitorName: "Napta",
    h1: "MagicCV vs Napta",
    sub: "An honest comparison for consultant CV and resource management.",
    whereCompetitorWins: [
      "Broad resource-management and staffing platform",
      "CV generation is one module within a wider product",
    ],
    whereMagicCvDiffers: [
      "Sharp focus on CV-for-RFP specifically",
      "Faster to deploy",
      "AI-native RFP reasoning",
    ],
    rows: [
      { category: "Scope", magiccv: "Focused: CV-for-RFP", competitor: "Broad resource-management suite" },
      { category: "Deployment time", magiccv: "About a week", competitor: "Longer, platform-wide rollout" },
      { category: "Core engine", magiccv: "AI-native RFP reasoning", competitor: "Template-based" },
    ],
    guidance: "Need a full resource-management suite? Napta. Want to fix proposal CVs first, and ship in days, not months? MagicCV.",
    faqs: [
      {
        question: "Does MagicCV do resource planning like Napta?",
        answer:
          "No - MagicCV is focused on the RFP-to-CV workflow specifically. If you need broader resource management, Napta's scope is wider.",
      },
    ],
    related: [
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta - honest comparison",
      description: "How MagicCV compares to Napta: focused CV-for-RFP tool vs broad resource-management suite.",
      keywords: ["Napta alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sharepoint-word",
    competitorName: "SharePoint + Word",
    h1: "MagicCV vs SharePoint + Word",
    sub: "The real cost of doing nothing.",
    whereCompetitorWins: ["Zero direct software cost", "Zero learning curve", "Familiar to everyone on the team"],
    whereMagicCvDiffers: [
      "Removes the hidden hours-per-week cost of manual CV chasing and reformatting",
      "Consistent, on-brand output instead of drift between versions",
      "No more last-minute scrambles before a deadline",
      "Fewer untracked, lost RFPs from CVs that didn't make the deadline",
    ],
    rows: [
      { category: "Direct cost", magiccv: "Transparent monthly plan", competitor: "€0 direct cost" },
      { category: "Time per CV pack", magiccv: "About 15 minutes", competitor: "Hours per RFP, every time" },
      { category: "Consistency", magiccv: "Same brand template every time", competitor: "Drifts between whoever formats it" },
      { category: "Deadline risk", magiccv: "Built for fast turnaround", competitor: "Last-minute scrambles are common" },
    ],
    guidance:
      "SharePoint and Word cost nothing to license - but the hours spent chasing, reformatting, and scrambling before deadlines are a real, recurring cost. Use the calculator below to see what that's likely costing your team.",
    faqs: [
      {
        question: "Isn't 'free' always cheaper than a paid tool?",
        answer:
          "Only if you don't count the time cost. Hours spent per RFP chasing and reformatting CVs add up - often to more than a MagicCV plan costs per month. The ROI calculator on this page and on Pricing walks through the math with your own numbers.",
      },
      {
        question: "We already have a shared drive system that mostly works - why switch?",
        answer:
          "If it's genuinely working with no lost RFPs, inconsistency, or scrambling, you may not need to. Most teams that evaluate MagicCV are looking because at least one of those pains is already costing them time or bids.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "For Sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV vs SharePoint + Word - the real cost of doing nothing",
      description: "The hidden cost of managing consultant CVs in SharePoint and Word, and what it adds up to.",
      keywords: ["consultant CV SharePoint", "stop managing CVs in Word"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvgate",
    competitorName: "CVGate",
    h1: "MagicCV vs CVGate",
    sub: "An honest comparison for consulting CV and proposal management.",
    whereCompetitorWins: [
      "Focused on consulting/proposal CV management, a close use-case fit",
      "Transparent, public pricing tiers",
      "Skills-based search, CRM/contact management, and proposal tools in one place",
      "View/action analytics on shared CVs",
    ],
    whereMagicCvDiffers: [
      "AI-native: reshapes each CV around a brief or client, not just template formatting",
      "Anonymization and multilingual output built in for EU tenders",
      "Broader consultant-profile management as the single source of truth",
    ],
    rows: [
      { category: "Category", magiccv: "AI-native CV generation + management", competitor: "CV management + proposal tools" },
      { category: "Tailoring to a brief", magiccv: "Reasons from the brief", competitor: "Template-based" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Public tiers" },
      { category: "Anonymization", magiccv: "Built in, one click", competitor: "Varies" },
      { category: "Multilingual", magiccv: "5+ EU languages", competitor: "Varies" },
    ],
    guidance:
      "CVGate is a solid, transparently-priced choice for centralizing CVs and speeding up proposals. If you also want AI that reshapes each CV around the brief, plus built-in anonymization and multilingual output for EU tenders, MagicCV goes further.",
    faqs: [
      {
        question: "Is CVGate a fair alternative to MagicCV?",
        answer:
          "Yes - it's genuinely focused on consulting CV and proposal management with public pricing. The main difference is MagicCV's AI-native tailoring and its EU-native anonymization and multilingual output.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CVGate - honest comparison",
      description: "How MagicCV compares to CVGate for consulting CV management and proposals: AI tailoring, anonymization, multilingual, pricing.",
      keywords: ["CVGate alternative", "CVGate vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cv-transformer",
    competitorName: "CV-Transformer",
    h1: "MagicCV vs CV-Transformer",
    sub: "An honest comparison for CV formatting and management.",
    whereCompetitorWins: [
      "Strong at automatic CV formatting into branded, standardized templates",
      "CV anonymization and 14-language support",
      "ATS integrations (Greenhouse, JobAdder, Salesforce and more), EU-based storage",
      "Fast, high-volume reformatting for staffing and recruitment",
    ],
    whereMagicCvDiffers: [
      "Starts from the brief and reshapes which experience to foreground - not only reformatting",
      "Centralized, always-current consultant profiles as the source of truth",
      "Built around the consulting proposal workflow, with public self-serve pricing",
    ],
    rows: [
      { category: "Core job", magiccv: "Reasoning + generation + management", competitor: "Reformatting into a branded template" },
      { category: "Tailoring to a brief", magiccv: "Reasons from the brief", competitor: "Reformat, not re-emphasize" },
      { category: "Anonymization", magiccv: "Built in", competitor: "Built in" },
      { category: "Languages", magiccv: "5+ EU languages", competitor: "14 languages" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Credits / monthly (trial available)" },
    ],
    guidance:
      "If your main need is turning inbound candidate CVs into a consistent branded format at volume, CV-Transformer is strong and integrates with major ATSs. If you want the tool to reason about the brief and manage consultant profiles over time, that's MagicCV's focus.",
    faqs: [
      {
        question: "What's the core difference?",
        answer:
          "CV-Transformer excels at reformatting CVs into a standardized branded template. MagicCV adds RFP-to-CV reasoning and ongoing profile management on top of on-brand export.",
      },
    ],
    related: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV-Transformer - honest comparison",
      description: "How MagicCV compares to CV-Transformer: reformatting vs AI reasoning, anonymization, languages, and pricing.",
      keywords: ["CV-Transformer alternative", "CV Transformer vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvconverter",
    competitorName: "CV Converter",
    h1: "MagicCV vs CV Converter",
    sub: "An honest comparison for CV formatting tools.",
    whereCompetitorWins: [
      "Very simple: upload a Google Docs template, convert candidate CVs to match",
      "Transparent, low pay-as-you-go pricing with a free trial",
      "Preserves your template structure and branding, no vendor data storage",
      "Great for high-volume recruitment and RPO formatting",
    ],
    whereMagicCvDiffers: [
      "Does the reasoning, not just the formatting - reshapes CVs around a brief or client",
      "Centralized consultant profiles kept current over time",
      "Anonymization, multilingual output, and proposal packs for EU consulting bids",
    ],
    rows: [
      { category: "Scope", magiccv: "Manage, tailor, generate, export", competitor: "Format conversion only" },
      { category: "Source of truth", magiccv: "Structured profiles per consultant", competitor: "Per-file conversion" },
      { category: "Tailoring to a brief", magiccv: "Reasons from the brief", competitor: "Not the focus" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Public, per-conversion / monthly" },
    ],
    guidance:
      "CV Converter is a neat, cheap way to standardize CV formatting at volume. If formatting is genuinely all you need, it's hard to beat on simplicity. If you want profile management and brief-driven tailoring, MagicCV is the broader tool.",
    faqs: [
      {
        question: "Is CV Converter cheaper than MagicCV?",
        answer:
          "For pure per-file formatting, its pay-as-you-go pricing can be very low. MagicCV covers a broader workflow - profile management, tailoring, anonymization, multilingual packs - so the two solve different scopes.",
      },
    ],
    related: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Pricing", href: "/pricing" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV Converter - honest comparison",
      description: "How MagicCV compares to CV Converter: format-only conversion vs full CV management and AI tailoring.",
      keywords: ["CV Converter alternative", "cvconverter vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "muchskills",
    competitorName: "MuchSkills CV Inventory",
    h1: "MagicCV vs MuchSkills CV Inventory",
    sub: "An honest comparison for skills-driven consultant CVs.",
    whereCompetitorWins: [
      "Generates CVs from verified, live skills data in the MuchSkills database",
      "Strong version control and audit trails for every CV",
      "Manages internal staff and external consultants together",
      "Deep skills taxonomy (thousands of certifications, tech skills, capabilities)",
    ],
    whereMagicCvDiffers: [
      "Works from your existing profiles and CVs - no need to first adopt a separate skills-data product",
      "RFP-to-CV reasoning that re-emphasizes real experience for each brief",
      "EU-native anonymization and multilingual output for tenders, with public self-serve pricing",
    ],
    rows: [
      { category: "Data model", magiccv: "Structured profiles from your CVs/HRIS", competitor: "Skills-database-driven" },
      { category: "Tailoring to a brief", magiccv: "Reasons from the brief", competitor: "Matches on skills data" },
      { category: "Version control", magiccv: "Yes", competitor: "Yes, with audit trails" },
      { category: "Anonymization / multilingual", magiccv: "Built in", competitor: "Varies" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
    ],
    guidance:
      "If you already run (or want to adopt) MuchSkills as your skills system of record, its CV Inventory is a natural extension with excellent skills data. If you'd rather generate strong, brief-tailored CVs from the profiles and CVs you already have, MagicCV gets you there without standing up a separate skills platform first.",
    faqs: [
      {
        question: "Do I need a skills database to use MagicCV?",
        answer:
          "No. MagicCV builds structured profiles from your existing CVs (and HRIS on the roadmap). MuchSkills CV Inventory is built around its skills database, which is powerful if that's already your system of record.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs MuchSkills CV Inventory - honest comparison",
      description: "How MagicCV compares to MuchSkills CV Inventory: profile-driven vs skills-database-driven consultant CVs.",
      keywords: ["MuchSkills alternative", "CV Inventory vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv-manager",
    competitorName: "SprintCV Enterprise",
    h1: "MagicCV vs SprintCV Enterprise CV Manager",
    sub: "An honest comparison for enterprise consulting CV management.",
    whereCompetitorWins: [
      "Enterprise-grade CV management with solid parsing and templates",
      "Consulting- and staffing-focused, established in Iberia",
      "Mature admin and team-management features for larger firms",
    ],
    whereMagicCvDiffers: [
      "AI-native architecture built around RFP reasoning, not parsing and templates",
      "Public, self-serve pricing and fast time-to-value for mid-market firms",
      "Broader EU language coverage, anonymization built in",
    ],
    rows: [
      { category: "Core engine", magiccv: "AI-native RFP reasoning", competitor: "Parsing + templates" },
      { category: "Target firm size", magiccv: "Mid-market (10-250)", competitor: "Enterprise-leaning" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
      { category: "Regional strength", magiccv: "EU-wide", competitor: "Strong in Iberia" },
    ],
    guidance:
      "For a larger enterprise wanting a mature, admin-heavy CV manager, SprintCV's enterprise product is worth a look. For mid-market firms that want to be live in a week with AI-native tailoring and public pricing, MagicCV fits better.",
    faqs: [
      {
        question: "How is this different from your Sprint CV comparison?",
        answer:
          "It's the same vendor's enterprise CV-manager offering. The takeaways are similar: MagicCV's edge is AI-native reasoning, public pricing, and mid-market speed-to-value.",
      },
    ],
    related: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Pricing", href: "/pricing" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs SprintCV Enterprise CV Manager - honest comparison",
      description: "How MagicCV compares to SprintCV's enterprise CV manager: AI reasoning, pricing, EU languages.",
      keywords: ["SprintCV alternative", "Sprint CV enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "enhancv",
    competitorName: "Enhancv",
    h1: "MagicCV vs Enhancv",
    sub: "An honest comparison for CV/resume builders.",
    whereCompetitorWins: [
      "Excellent, polished resume builder with 40+ templates",
      "One-click import from LinkedIn/DOCX/PDF and job-description matching",
      "ATS-friendly output and a team library with custom branding",
      "Strong fit for recruitment, staffing, and career-coaching teams",
    ],
    whereMagicCvDiffers: [
      "Built for consulting proposals and engagements, not job-seeker resumes",
      "RFP-to-CV reasoning and proposal-ready CV packs, not single-resume ATS optimization",
      "EU-native: anonymization and multilingual output for tenders, GDPR-by-design",
    ],
    rows: [
      { category: "Primary use", magiccv: "Consultant CVs for bids/clients", competitor: "Candidate/job-seeker resumes" },
      { category: "Optimized for", magiccv: "The client brief", competitor: "ATS / job descriptions" },
      { category: "Proposal CV packs", magiccv: "Yes", competitor: "Not the focus" },
      { category: "Anonymization for tenders", magiccv: "Built in", competitor: "Not the focus" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Public" },
    ],
    guidance:
      "Enhancv is a great choice if you're producing candidate resumes - especially recruitment and outplacement work where ATS-friendliness matters. If your CVs go into consulting proposals and tenders, MagicCV is built for that job.",
    faqs: [
      {
        question: "Can Enhancv do consulting proposal CVs?",
        answer:
          "It can produce branded, ATS-friendly resumes at scale. MagicCV is purpose-built for consulting: brief-driven tailoring, proposal packs, anonymization, and multilingual output for EU bids.",
      },
    ],
    related: [
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Enhancv - honest comparison",
      description: "How MagicCV compares to Enhancv: consulting proposal CVs vs candidate/job-seeker resume building.",
      keywords: ["Enhancv alternative", "Enhancv vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "visualcv",
    competitorName: "VisualCV",
    h1: "MagicCV vs VisualCV",
    sub: "An honest comparison for CV/resume builders.",
    whereCompetitorWins: [
      "Established resume/CV builder with a business tier for teams",
      "Polished templates, hosted online CVs, and view analytics",
      "Good for consistent, branded resumes across a team",
    ],
    whereMagicCvDiffers: [
      "Consulting-specific: reshapes CVs around a client brief and assembles proposal packs",
      "Anonymization and multilingual output for EU tenders, GDPR-by-design",
      "Centralized consultant-profile management as the source of truth",
    ],
    rows: [
      { category: "Primary use", magiccv: "Consultant CVs for bids/clients", competitor: "Resumes / online CVs" },
      { category: "Tailoring to a brief", magiccv: "Reasons from the brief", competitor: "Template-based" },
      { category: "Proposal CV packs", magiccv: "Yes", competitor: "Not the focus" },
      { category: "Anonymization / multilingual", magiccv: "Built in", competitor: "Varies" },
    ],
    guidance:
      "VisualCV is a strong general resume/CV builder, including for teams that want consistent branded CVs. If your work is consulting proposals - tailoring to briefs, packs, tenders - MagicCV is the more specialized fit.",
    faqs: [
      {
        question: "Is VisualCV built for consulting proposals?",
        answer:
          "It's a general-purpose CV/resume builder with team features. MagicCV focuses specifically on the consulting proposal workflow and EU tender requirements.",
      },
    ],
    related: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs VisualCV - honest comparison",
      description: "How MagicCV compares to VisualCV: consulting proposal CVs vs general resume/CV building for teams.",
      keywords: ["VisualCV alternative", "VisualCV business vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "rezi",
    competitorName: "Rezi",
    h1: "MagicCV vs Rezi",
    sub: "An honest comparison for AI resume builders.",
    whereCompetitorWins: [
      "Mature AI resume builder with white-label deployment",
      "Strong ATS keyword targeting and review-management workflow",
      "SOC 2 Type II, SSO, and a large user base",
      "Great fit for universities, career centers, and resume-writing services",
    ],
    whereMagicCvDiffers: [
      "Consulting proposals, not job-seeker resumes or ATS optimization",
      "Brief-driven tailoring and proposal-ready CV packs for client submissions",
      "EU-native anonymization and multilingual output for tenders",
    ],
    rows: [
      { category: "Primary use", magiccv: "Consultant CVs for bids/clients", competitor: "Job-seeker resumes (white-label)" },
      { category: "Optimized for", magiccv: "The client brief", competitor: "ATS keywords" },
      { category: "Audience", magiccv: "Consulting & professional-services firms", competitor: "Universities, career centers, agencies" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Public (per-seat tiers)" },
    ],
    guidance:
      "Rezi is a strong pick if you're deploying a branded resume builder to job seekers and care about ATS optimization. For consulting firms producing client-facing CVs and proposal packs, MagicCV is the better-fit tool.",
    faqs: [
      {
        question: "Does MagicCV optimize CVs for ATS like Rezi?",
        answer:
          "No - ATS keyword optimization is a job-seeker concern. MagicCV optimizes consultant CVs for the client's brief and the demands of proposals and tenders.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Rezi - honest comparison",
      description: "How MagicCV compares to Rezi: consulting proposal CVs vs white-label ATS resume building.",
      keywords: ["Rezi alternative", "Rezi enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "neobrain",
    competitorName: "Neobrain",
    h1: "MagicCV vs Neobrain",
    sub: "A different category - skills & talent management vs proposal CVs.",
    whereCompetitorWins: [
      "Enterprise skills-based talent management: skills mapping, internal mobility, workforce planning",
      "Performance and career-development modules, HRIS integrations",
      "Strong fit for large HR organizations modernizing around skills",
    ],
    whereMagicCvDiffers: [
      "Produces client-facing consultant CVs and proposal packs - not internal HR planning",
      "Brief-driven tailoring, on-brand export, anonymization, multilingual for tenders",
      "Live in a week with public, self-serve pricing",
    ],
    rows: [
      { category: "Category", magiccv: "Client-facing CVs for proposals", competitor: "Internal skills & talent management" },
      { category: "Primary buyer", magiccv: "Bid / delivery / resourcing leads", competitor: "HR / people leadership" },
      { category: "Output", magiccv: "On-brand CVs & proposal packs", competitor: "Skills maps, mobility, planning" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
    ],
    guidance:
      "Neobrain and MagicCV solve different problems. If you need enterprise skills mapping and internal talent mobility, Neobrain is built for that. If you need to turn consultant profiles into client-ready CVs and proposal packs, that's MagicCV. Some firms use both.",
    faqs: [
      {
        question: "Is Neobrain a MagicCV competitor?",
        answer:
          "Only at the edges. Neobrain is a skills-based HR/talent platform; MagicCV produces client-facing CVs for proposals. They can be complementary rather than either/or.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "For HR / People Ops teams", href: "/solutions/hr" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Neobrain - honest comparison",
      description: "How MagicCV compares to Neobrain: client-facing proposal CVs vs enterprise skills and talent management.",
      keywords: ["Neobrain alternative", "Neobrain vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "techwolf",
    competitorName: "TechWolf",
    h1: "MagicCV vs TechWolf",
    sub: "A different category - skills intelligence vs proposal CVs.",
    whereCompetitorWins: [
      "Enterprise skills-intelligence infrastructure that infers skills from work signals",
      "Integrates with major HCMs (Workday, SAP SuccessFactors) at very large scale",
      "Best-in-class for continuous, automated skills data across huge workforces",
    ],
    whereMagicCvDiffers: [
      "Turns profiles into client-ready CVs and proposal packs - not internal skills data",
      "Brief-driven tailoring, on-brand export, anonymization, multilingual for EU tenders",
      "Mid-market friendly: live in a week, public self-serve pricing",
    ],
    rows: [
      { category: "Category", magiccv: "Client-facing CVs for proposals", competitor: "Internal skills intelligence" },
      { category: "Output", magiccv: "On-brand CVs & proposal packs", competitor: "Skills data in HR systems" },
      { category: "Scale", magiccv: "Mid-market consulting firms", competitor: "Very large enterprises (100k+ staff)" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Not public" },
    ],
    guidance:
      "TechWolf is a powerful skills-intelligence layer for large enterprises - a different job from MagicCV. If you want automated, continuous skills data across a huge workforce, TechWolf. If you want client-ready consultant CVs and proposal packs, MagicCV.",
    faqs: [
      {
        question: "Does MagicCV infer skills from work activity like TechWolf?",
        answer:
          "No - that's TechWolf's specialty. MagicCV works from consultant profiles and CVs to produce client-facing documents; the two operate in different layers of the stack.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - honest comparison",
      description: "How MagicCV compares to TechWolf: client-facing proposal CVs vs enterprise skills intelligence.",
      keywords: ["TechWolf alternative", "TechWolf vs MagicCV"],
    },
  },
];

export function getComparison(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug);
}
