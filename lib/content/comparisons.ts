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
      "Public, self-serve pricing -- no demo gate to see cost",
      "Built for mid-market firms, not enterprise-first",
      "Live in about a week, not a quarter-long rollout",
      "EU-native: multilingual, GDPR-by-design, anonymization built in",
    ],
    rows: [
      { category: "Starting point", magiccv: "Reasons from the RFP brief", competitor: "Template-first CV formatting" },
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "Demo-gated" },
      { category: "Target firm size", magiccv: "Mid-market (10-250 employees)", competitor: "Enterprise-leaning" },
      { category: "Typical time to live", magiccv: "About a week", competitor: "Longer, enterprise-style rollout" },
      { category: "Multilingual", magiccv: "5+ EU languages", competitor: "{{VERIFY: language coverage}}" },
      { category: "Anonymization", magiccv: "Built in, one click", competitor: "{{VERIFY: anonymization support}}" },
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
        answer: "Yes -- pricing is public and you can start a 14-day free trial without booking a demo first.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase -- honest comparison",
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
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "{{VERIFY: pricing model}}" },
      { category: "Deployment time", magiccv: "About a week", competitor: "Longer, suite-wide rollout" },
      { category: "Regional strength", magiccv: "EU-wide, multilingual", competitor: "Strong in the Nordics" },
      { category: "Switching cost", magiccv: "Low -- narrow, additive tool", competitor: "Higher once fully embedded" },
    ],
    guidance:
      "Replacing your HRIS, CRM, and resource planning all at once? Cinode. Want to fix proposals first and keep your other tools? MagicCV.",
    faqs: [
      {
        question: "Does MagicCV replace resource planning or a CRM?",
        answer:
          "No -- MagicCV is focused specifically on the RFP-to-CV workflow. If you need a broader suite covering resource planning and sales, Cinode's scope is wider.",
      },
      {
        question: "Can MagicCV and Cinode be used side by side?",
        answer:
          "Some firms use MagicCV for proposal CVs specifically while keeping a broader platform for resourcing -- it depends on how much of the suite you're actually using today.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode -- honest comparison",
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
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "{{VERIFY: pricing model}}" },
      { category: "Language coverage", magiccv: "5+ EU languages", competitor: "{{VERIFY: language coverage}}" },
    ],
    guidance:
      "Primarily operating in Iberia? Sprint CV is a respectable choice. Want broader EU language support and AI-native RFP reasoning? MagicCV.",
    faqs: [
      {
        question: "Is Sprint CV a bad choice?",
        answer:
          "No -- it's a solid, focused product, particularly for firms primarily operating in Iberia. MagicCV's edge is broader EU language coverage and RFP-to-CV reasoning rather than template parsing.",
      },
    ],
    related: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV -- honest comparison",
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
      { category: "Pricing", magiccv: "Public, self-serve", competitor: "{{VERIFY: pricing model}}" },
      { category: "Target firm size", magiccv: "Mid-market (10-250 employees)", competitor: "{{VERIFY: target firm size}}" },
    ],
    guidance:
      "Happy with a template-first workflow with some AI assistance layered in? CuViBox is an established option. Want the AI reasoning to be the starting point, not an add-on? MagicCV.",
    faqs: [
      {
        question: "What's the practical difference between 'AI-native' and 'AI-assisted'?",
        answer:
          "MagicCV starts from the RFP and reasons about which experience matters before touching a template. Template-first tools start from a CV format and use AI to help fill it in -- the brief comes second.",
      },
    ],
    related: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox -- honest comparison",
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
      { category: "Core engine", magiccv: "AI-native RFP reasoning", competitor: "{{VERIFY: CV generation approach}}" },
    ],
    guidance: "Need a full resource-management suite? Napta. Want to fix proposal CVs first, and ship in days, not months? MagicCV.",
    faqs: [
      {
        question: "Does MagicCV do resource planning like Napta?",
        answer:
          "No -- MagicCV is focused on the RFP-to-CV workflow specifically. If you need broader resource management, Napta's scope is wider.",
      },
    ],
    related: [
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "Comparison hub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta -- honest comparison",
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
      "SharePoint and Word cost nothing to license -- but the hours spent chasing, reformatting, and scrambling before deadlines are a real, recurring cost. Use the calculator below to see what that's likely costing your team.",
    faqs: [
      {
        question: "Isn't 'free' always cheaper than a paid tool?",
        answer:
          "Only if you don't count the time cost. Hours spent per RFP chasing and reformatting CVs add up -- often to more than a MagicCV plan costs per month. The ROI calculator on this page and on Pricing walks through the math with your own numbers.",
      },
      {
        question: "We already have a shared drive system that mostly works -- why switch?",
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
      title: "MagicCV vs SharePoint + Word -- the real cost of doing nothing",
      description: "The hidden cost of managing consultant CVs in SharePoint and Word, and what it adds up to.",
      keywords: ["consultant CV SharePoint", "stop managing CVs in Word"],
    },
  },
];

export function getComparison(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug);
}
