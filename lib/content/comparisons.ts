import type { ComparisonPage } from "./types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase: which fits how your team bids?",
    sub: "Both tools manage consultant CVs for proposals. The real differences are who they're built for, how fast you're live, and what the AI actually does with an RFP.",
    whereCompetitorWins: [
      "The category leader by recognition: if your procurement team asks for references, Flowcase has years of enterprise case studies to point at",
      "A mature, polished product refined across a large customer base since the CV Partner days",
      "Deeper enterprise proposal workflows, including established processes for large bid teams with formal review stages",
      "A better fit if you need a vendor who has already passed security review at firms your size, many times",
    ],
    whereMagicCvDiffers: [
      "Starts from the RFP: paste the brief and the AI reshapes each CV around its requirements, instead of you deciding what to emphasize inside a template",
      "Chat-based editing: 'shorten the last two roles, lead with the banking work' instead of clicking through form fields",
      "Pricing on the website: Free plan (10 profiles, 30 CVs), Pro at $50/month (200 profiles, 600 CVs). No demo call to find out the cost",
      "Time-to-value measured in a day, not an implementation project: import your existing Word and PDF CVs and export the first branded CV the same afternoon",
      "One-click anonymization and translation that keeps your layout, built in for EU tenders and framework agreements",
    ],
    rows: [
      { category: "Where tailoring starts", magiccv: "From the RFP text: AI reads the brief and re-emphasizes each CV", competitor: "From the CV: you pick highlights inside master-profile templates" },
      { category: "How you edit", magiccv: "Chat instructions plus direct edits", competitor: "Structured forms and template fields" },
      { category: "Pricing model", magiccv: "Public: Free, $50/mo Pro, custom Enterprise", competitor: "Quote-based, typically via a sales and demo process" },
      { category: "Who it's built for", magiccv: "Mid-market firms, 10-250 consultants", competitor: "Positioned toward larger enterprise firms" },
      { category: "Getting started", magiccv: "Self-serve: import CVs, first export same day", competitor: "Typically an onboarding and implementation phase" },
      { category: "Anonymization for tenders", magiccv: "One click, blind CVs in your template", competitor: "Available; setup varies by configuration" },
    ],
    guidance:
      "If you're a 500-person firm with a procurement process, a security team, and budget for an implementation partner, Flowcase's track record is a real asset. If you're a 15-150 person firm losing evenings to CV reformatting and you want to fix it this week without a sales cycle, MagicCV is built for exactly that. Try the free plan on one live bid and compare the output.",
    faqs: [
      {
        question: "Can we migrate from Flowcase to MagicCV?",
        answer:
          "Yes. Export your CVs from Flowcase as Word or PDF, drag them into MagicCV, and the AI parses each one into a structured profile. There's no migration project - a 50-person team's CVs are typically imported in an afternoon.",
      },
      {
        question: "Is MagicCV a full replacement for Flowcase?",
        answer:
          "For the core job - keeping consultant CVs current, tailoring them per bid, and exporting on-brand documents - yes. Flowcase goes deeper on enterprise proposal workflows and has a longer enterprise track record, which matters more the larger your firm is.",
      },
      {
        question: "How does MagicCV's pricing compare to Flowcase's?",
        answer:
          "MagicCV publishes pricing: Free (10 profiles, 30 CVs), Pro at $50/month (200 profiles, 600 CVs), and a custom Enterprise plan with SSO. Flowcase pricing is typically quote-based, so a like-for-like comparison requires their sales process.",
      },
      {
        question: "How long does rollout take compared to Flowcase?",
        answer:
          "MagicCV is self-serve: most teams import their existing CVs and export the first branded CV the same day. Enterprise platforms typically run an onboarding phase with template setup and training - reasonable at enterprise scale, but overkill for a 30-person firm.",
      },
      {
        question: "We work on EU tenders. How do the two compare on compliance?",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, audit logs, and one-click blind CVs for anonymized submissions. SOC 2 is in progress. Flowcase also serves European firms; verify their current certifications directly for your procurement checklist.",
      },
      {
        question: "Can I try MagicCV without talking to sales?",
        answer:
          "Yes. Sign up at getmagic.cv, import a handful of CVs on the free plan, and run one real RFP through it. If the tailored output isn't better than what you produce by hand, you've lost an hour, not a quarter.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "RFP-to-CV tailoring", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Cinode: focused CV tool or full consulting suite?",
    sub: "Cinode is a business platform for consultancies. MagicCV does one job - proposal-ready CVs - and does it in a day. Which you need depends on what's actually broken.",
    whereCompetitorWins: [
      "Genuine suite breadth: CVs, skills management, sales pipeline, subcontractor networks, and resource planning in one platform",
      "Strong footprint among Nordic consultancies, with an established partner network in that market",
      "One vendor, one login, one data model across sales, staffing, and delivery once fully adopted",
      "A better fit if your firm has decided to run the whole business on a single consultancy platform",
    ],
    whereMagicCvDiffers: [
      "Does the one job most suites do least well: reading an RFP and reshaping consultant CVs around it, with AI that starts from the brief",
      "No suite-wide rollout: import your existing CVs and export the first branded document the same day, while your CRM and planning tools stay untouched",
      "Pro plan at $50/month with pricing on the website - no scoping call to learn what a module costs",
      "Chat editing and one-click anonymization and translation for EU tenders, built into the CV workflow rather than spread across modules",
    ],
    rows: [
      { category: "Scope", magiccv: "One workflow: profiles, RFP tailoring, branded export", competitor: "Business suite: CVs, skills, sales, resourcing, partners" },
      { category: "What you replace", magiccv: "The SharePoint folder and Tuesday-night formatting", competitor: "Potentially your CRM, staffing grid, and CV process at once" },
      { category: "Time to first CV out", magiccv: "Same day, self-serve", competitor: "Typically a phased, suite-wide implementation" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Quote-based, typically per module and seat" },
      { category: "Switching cost later", magiccv: "Low: export your CVs and profiles, walk away", competitor: "Higher once sales and staffing data live in the suite" },
      { category: "RFP tailoring", magiccv: "AI reads the brief and reshapes each CV", competitor: "CV module with templates; tailoring is largely manual" },
    ],
    guidance:
      "If your firm is consolidating sales, staffing, and skills onto one platform - and you have the appetite for that project - Cinode is a credible suite with real Nordic pedigree. If the acute pain is proposal CVs and you don't want to re-platform your business to fix it, MagicCV solves that one problem this week. Plenty of teams fix CVs first and make the suite decision later, with better information.",
    faqs: [
      {
        question: "Does MagicCV replace Cinode's resource planning or sales pipeline?",
        answer:
          "No. MagicCV covers consultant profiles, RFP tailoring, and branded CV export. If you need utilization planning, sales pipeline, or subcontractor management, that's suite territory - Cinode's scope is genuinely wider.",
      },
      {
        question: "Can we use MagicCV alongside Cinode?",
        answer:
          "Yes, and some teams do: the suite for staffing and pipeline, MagicCV for the CVs that go into bids. Since MagicCV imports any Word or PDF CV, there's no integration project to make them coexist.",
      },
      {
        question: "Can we migrate CVs from Cinode into MagicCV?",
        answer:
          "Yes. Export CVs from Cinode as Word or PDF and import them into MagicCV; the AI parses each into a structured, searchable profile. No field mapping, no migration consultant.",
      },
      {
        question: "How do the costs compare?",
        answer:
          "MagicCV publishes pricing: Free (10 profiles, 30 CVs), $50/month Pro (200 profiles, 600 CVs), custom Enterprise. Cinode pricing is typically quoted per module and seat count, so total cost depends on how much of the suite you take.",
      },
      {
        question: "We're a Nordic consultancy - isn't Cinode the default choice?",
        answer:
          "It's a strong regional choice, especially if you want the whole suite. But if your evaluation is really about proposal CVs, compare the specific workflow: paste a brief into MagicCV, tailor three CVs, and time it against your current process before committing to a platform.",
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
    h1: "MagicCV vs Sprint CV: two takes on consulting CV automation",
    sub: "Both target consulting and staffing firms tired of manual CV formatting. The difference is what the automation does: fill templates fast, or reason about the brief first.",
    whereCompetitorWins: [
      "Built specifically for consulting and staffing, so the CV structures match how IT services firms actually present people",
      "Solid CV parsing and template generation that has been in production at consultancies for years",
      "Strong presence in Portugal and Spain, with reference customers in the Iberian IT services market",
      "A straightforward, proven workflow if template-based generation is all you need",
    ],
    whereMagicCvDiffers: [
      "AI-native tailoring: paste the RFP or client brief and the CV is reshaped around its requirements - which projects lead, what gets trimmed - not just re-rendered in a template",
      "Chat editing on top of structured profiles: 'emphasize the Azure migration work' beats re-editing a generated document by hand",
      "Translation into any language that keeps your layout, plus one-click anonymization for blind submissions",
      "Public pricing with a free plan, so you can benchmark output quality on a real bid before spending anything",
    ],
    rows: [
      { category: "Core engine", magiccv: "AI reads the brief, then reshapes the CV", competitor: "Parses CVs and generates from templates" },
      { category: "Tailoring per bid", magiccv: "Automatic re-emphasis from the RFP text", competitor: "Typically manual selection within the template" },
      { category: "Editing", magiccv: "Chat instructions plus direct edits", competitor: "Template and form-based editing" },
      { category: "Languages", magiccv: "Translate any CV, layout preserved", competitor: "Multilingual support; coverage varies" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Typically quote-based" },
      { category: "Regional strength", magiccv: "EU-wide, GDPR-by-design, EU data residency", competitor: "Strongest in Iberia" },
    ],
    guidance:
      "If you're an Iberian consultancy that wants proven template-based CV generation from a vendor with local references, Sprint CV is a respectable choice. If the part you want automated is the thinking - which experience to foreground for this specific brief - that's what MagicCV's RFP-to-CV engine does. Run the same RFP through both and compare the drafts.",
    faqs: [
      {
        question: "Can we switch from Sprint CV to MagicCV?",
        answer:
          "Yes. Export your CVs as Word or PDF, import them into MagicCV, and each becomes a structured profile automatically. Most teams are producing branded, tailored exports the same day.",
      },
      {
        question: "What does 'AI-native' mean in practice versus template generation?",
        answer:
          "Template tools take a stored CV and render it consistently. MagicCV first reads the brief, decides which projects, skills, and certifications matter for it, reorders and rewrites accordingly, and then renders in your template. The formatting is table stakes; the tailoring is the difference.",
      },
      {
        question: "Does MagicCV handle the languages we bid in?",
        answer:
          "Yes - MagicCV translates CVs into any language while keeping the layout intact, so a Portuguese master profile can go out in English, French, or German without a reformatting pass.",
      },
      {
        question: "How do the prices compare?",
        answer:
          "MagicCV's pricing is on the website: Free (10 profiles, 30 CVs), $50/month Pro (200 profiles, 600 CVs). Sprint CV pricing is typically arranged through their sales process, so get a quote and compare against Pro for your team size.",
      },
      {
        question: "Is MagicCV suitable for staffing agencies or only consultancies?",
        answer:
          "Both. Staffing teams use the same workflow - import candidate CVs, anonymize in one click for blind submissions, and export in the client's or your own template. The RFP tailoring works just as well on a role spec as on a tender.",
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
    h1: "MagicCV vs CuViBox: template engine or brief-first AI?",
    sub: "Both centralize consultant CVs and export them consistently. The fork in the road is whether tailoring starts from your template or from the client's brief.",
    whereCompetitorWins: [
      "An established consultant-CV manager with a mature template engine that has handled real consulting-firm document standards for years",
      "A predictable, structured workflow: store the data once, generate consistent documents from it",
      "Simpler to reason about if you distrust AI rewriting and want deterministic, field-by-field output",
    ],
    whereMagicCvDiffers: [
      "Reasons from the RFP before it renders: the AI reads the brief and decides which experience leads, instead of leaving that judgment call to whoever is formatting at 7pm",
      "Chat editing: tell the CV what to change in plain language rather than hunting through fields",
      "One-click anonymization and translation into any language with the layout preserved - the two most common EU tender requirements, built in",
      "Self-serve with public pricing: Free plan to test, $50/month Pro when it sticks",
    ],
    rows: [
      { category: "Approach", magiccv: "Brief-first: AI reads the RFP, then generates", competitor: "Template-first: structured data rendered into documents" },
      { category: "Per-bid tailoring", magiccv: "Automatic re-emphasis for each brief", competitor: "Typically manual selection of what to include" },
      { category: "Editing model", magiccv: "Chat instructions plus direct edits", competitor: "Structured fields and templates" },
      { category: "Anonymization / translation", magiccv: "One click each, layout preserved", competitor: "Varies by configuration" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Typically quote-based" },
      { category: "Getting started", magiccv: "Import existing CVs, first export same day", competitor: "Setup of data structure and templates first" },
    ],
    guidance:
      "If you want a deterministic template engine where every field is placed by a rule you configured, CuViBox is an established option. If the bottleneck at your firm is deciding and rewriting - reshaping 8 CVs around a 40-page RFP annex before Thursday - MagicCV automates that judgment work, not just the rendering. The free plan makes the comparison cheap to run.",
    faqs: [
      {
        question: "What's the practical difference between 'AI-native' and 'AI-assisted'?",
        answer:
          "MagicCV starts from the RFP: it reads the brief, decides which projects and skills matter, and reshapes the CV before rendering it in your template. Template-first tools start from the document format and use AI, if at all, to help fill fields in - the brief comes second.",
      },
      {
        question: "Can we move our CVs from CuViBox to MagicCV?",
        answer:
          "Yes. Export CVs as Word or PDF and import them into MagicCV - the AI parses each into a structured profile. There's no field-mapping exercise; a mid-size team's library imports in an afternoon.",
      },
      {
        question: "Will MagicCV keep our document standards as strict as a template engine does?",
        answer:
          "Yes. Your brand template is set up once, and every export - PDF or Word - renders pixel-consistent to it. The AI changes what the CV says for each brief, never how your firm's documents look.",
      },
      {
        question: "What if we don't trust AI to rewrite consultant CVs?",
        answer:
          "Nothing goes out unreviewed. The AI produces a tailored draft; you read it, adjust it via chat or direct edits, and export when you're satisfied. Most teams find reviewing a good draft takes 10 minutes where writing from scratch took an hour.",
      },
      {
        question: "How much does MagicCV cost compared to CuViBox?",
        answer:
          "MagicCV's pricing is public: Free (10 profiles, 30 CVs), $50/month Pro (200 profiles, 600 CVs), custom Enterprise with SSO. CuViBox pricing is typically obtained through their sales process, so compare a quote against Pro for your headcount.",
      },
    ],
    related: [
      { label: "RFP-to-CV tailoring", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Napta: fix proposal CVs, or re-platform staffing?",
    sub: "Napta is a resource-management platform where CVs are one module. MagicCV is the CV workflow, done deeply. The right pick depends on which problem is costing you bids.",
    whereCompetitorWins: [
      "A full staffing and resource-management platform: utilization, project staffing, skills, and career development in one place",
      "CV generation comes bundled with the staffing data, so profiles and availability live together once the platform is adopted",
      "A strong choice for firms whose core pain is staffing visibility and utilization, not just documents",
      "Established with mid-size and large consultancies, particularly in France",
    ],
    whereMagicCvDiffers: [
      "Goes deep where suites go wide: AI reads the actual RFP and reshapes each consultant's CV around it, with chat editing to refine the draft",
      "No platform migration: your staffing grid, HRIS, and CRM stay where they are - MagicCV just takes over the CV chaos",
      "Live the same day you import your Word and PDF CVs, versus a platform rollout with configuration and training",
      "Public pricing from $0, with Pro at $50/month - no need to scope a resource-management project to fix documents",
    ],
    rows: [
      { category: "Category", magiccv: "Focused CV-for-proposals workflow", competitor: "Resource management platform with a CV module" },
      { category: "RFP tailoring", magiccv: "AI reads the brief and reshapes each CV", competitor: "Template-based generation from staffing profiles" },
      { category: "What adoption requires", magiccv: "Import CVs, pick a template, go", competitor: "Typically platform rollout: data, processes, training" },
      { category: "Time to first result", magiccv: "Same day", competitor: "Weeks to months, typical for platform projects" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Quote-based, typically per user" },
      { category: "EU tender features", magiccv: "One-click anonymization, translation keeping layout", competitor: "Not the product's center of gravity" },
    ],
    guidance:
      "If your real problem is staffing - who's available, who's on the bench, how utilization trends - Napta is built for that, and its CV module rides along. If your real problem is the CVs themselves - reformatting 12 of them for one bid, versions drifting in SharePoint - MagicCV fixes that this week without touching how you staff projects. Diagnose the actual pain before buying the bigger surface area.",
    faqs: [
      {
        question: "Does MagicCV do resource planning or utilization tracking like Napta?",
        answer:
          "No. MagicCV covers consultant profiles, skills search, RFP tailoring, and branded export. If you need utilization dashboards and staffing workflows, that's platform territory where Napta genuinely has more.",
      },
      {
        question: "Can MagicCV work alongside Napta?",
        answer:
          "Yes. Some firms keep a staffing platform for planning and use MagicCV for client-facing CVs, because the CV module of a suite rarely reads RFPs. MagicCV imports any Word or PDF CV, so no integration is required to run both.",
      },
      {
        question: "How fast is MagicCV live compared to a Napta rollout?",
        answer:
          "MagicCV is self-serve: import your existing CVs, set up your brand template, and export the first tailored CV the same day. Resource-management platforms typically need configuration, data loading, and training before the CV module pays off.",
      },
      {
        question: "Can we migrate CVs out of Napta into MagicCV?",
        answer:
          "Yes - export them as Word or PDF and import into MagicCV. The AI parses each file into a structured, searchable profile with skills, sectors, languages, and certifications.",
      },
      {
        question: "What does MagicCV cost?",
        answer:
          "Pricing is public: Free (10 profiles, 30 CVs), Pro at $50/month (200 profiles, 600 CVs), and custom Enterprise with SSO and a DPA. Platform suites are typically priced per user per month across the whole headcount, which is a different budget conversation.",
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
    h1: "MagicCV vs SharePoint + Word + your evenings",
    sub: "The incumbent at most firms isn't a competitor - it's a folder called 'CVs FINAL', twelve template variants, and whoever stays late before the deadline.",
    whereCompetitorWins: [
      "Zero new license cost: you already pay for Microsoft 365, and finance never questions it",
      "Zero learning curve: everyone on the team has used Word since university",
      "Total flexibility: any partner can maintain their own CV version, in their own format, with their own photo from 2014",
      "No vendor risk, no procurement review, no new tool fatigue",
    ],
    whereMagicCvDiffers: [
      "Kills the hidden line item: reformatting 12 CVs for one bid takes hours in Word and about 15 minutes of review in MagicCV",
      "One current profile per person instead of final_v3_JS_edit.docx competing with final_v3_JS_edit_NEW.docx in three folders",
      "Every export matches your brand template exactly - no drift between whoever formatted it last",
      "Tailoring per bid actually happens: the AI reads the RFP and reshapes each CV, instead of the same generic CV going out because there was no time",
      "Friday-afternoon CV chases replaced by profiles the team updates in minutes, with AI filling structure from any pasted or uploaded source",
    ],
    rows: [
      { category: "License cost", magiccv: "Free to start; Pro $50/mo for 200 profiles", competitor: "$0 extra - already in your Microsoft stack" },
      { category: "Real cost per bid", magiccv: "About 15 minutes of review per CV pack", competitor: "Hours of chasing, copy-pasting, and reformatting" },
      { category: "Version truth", magiccv: "One structured profile per consultant", competitor: "final_v3, final_v3_NEW, and the partner's private copy" },
      { category: "Brand consistency", magiccv: "Pixel-consistent template on every export", competitor: "Depends who formatted it, and how late it was" },
      { category: "Tailoring to the brief", magiccv: "AI reads the RFP and reshapes each CV", competitor: "Skipped under deadline pressure, almost always" },
      { category: "Finding people", magiccv: "Search skills, sectors, languages, certifications", competitor: "Ask around on Teams and hope someone remembers" },
    ],
    guidance:
      "If your team submits a couple of bids a year and the CVs are genuinely under control, keep the folder - sincerely. But if CV prep eats hours every bid, versions drift, and at least one submission has gone out late or off-brand this year, the 'free' option is the most expensive tool you run. Import 10 CVs on the free plan and time the next bid honestly against the last one.",
    faqs: [
      {
        question: "Isn't free always cheaper than $50 a month?",
        answer:
          "Only if the hours are free too. If two people spend six hours reformatting CVs per bid and you bid twice a month, that's roughly 24 hours of senior time - which costs more than a year of Pro. The ROI calculator on the pricing page runs the math with your own numbers.",
      },
      {
        question: "What happens to the CVs we already have in SharePoint?",
        answer:
          "They become the starting point. Drag your existing Word and PDF files into MagicCV and the AI parses each into a structured profile - no retyping, no template surgery. Keep SharePoint as an archive if you like; the working copies live in one place from then on.",
      },
      {
        question: "Can we keep our existing Word template?",
        answer:
          "Yes. Your template is set up once in MagicCV, and every export - Word or PDF - renders pixel-consistent to it. The output looks like your firm made it, because it did; the AI just stops humans doing the formatting by hand.",
      },
      {
        question: "Our system mostly works. Why change something that isn't fully broken?",
        answer:
          "If nothing goes out late, off-brand, or untailored, don't. Most teams that evaluate CV management software do it after a specific incident - a lost framework bid, a client noticing an outdated CV, a 48-hour scramble. If you've had one of those this year, 'mostly works' is already costing you.",
      },
      {
        question: "Will the team actually adopt another tool?",
        answer:
          "Adoption is the honest risk with any tool, which is why MagicCV asks little of consultants: their profile is created from their existing CV, and updates take minutes with AI doing the structuring. The people who feel the change most are the ones formatting bids - and they tend to be the tool's loudest advocates.",
      },
      {
        question: "Is our CV data safer in SharePoint than in a SaaS tool?",
        answer:
          "SharePoint inherits your Microsoft security, which is solid - but CVs scattered across folders and inboxes are hard to audit or delete under GDPR. MagicCV is GDPR-by-design with EU data residency and audit logs, and one profile per person makes deletion requests a one-step job. SOC 2 is in progress.",
      },
    ],
    related: [
      { label: "Pricing & ROI calculator", href: "/pricing" },
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
    h1: "MagicCV vs CVGate: two focused tools for consulting CVs",
    sub: "This is a close comparison - both target consulting CV and proposal work with transparent pricing. The differences are in how tailoring works and what's built in for EU tenders.",
    whereCompetitorWins: [
      "Squarely focused on consulting and proposal CV management - a close use-case fit, not a general resume builder",
      "Transparent, public pricing tiers, which is rarer than it should be in this category",
      "Bundles adjacent proposal tooling: skills-based search plus CRM-style contact management alongside CVs",
      "Analytics on shared CVs - seeing when a client viewed or acted on a document is genuinely useful in a sales cycle",
    ],
    whereMagicCvDiffers: [
      "AI that starts from the brief: paste the RFP and each CV is reshaped around its requirements, with chat editing to refine - not just formatted consistently",
      "One-click anonymization and translation into any language with layout preserved - the two features EU tender teams ask for first",
      "Structured consultant profiles as a single source of truth, searchable by skills, sectors, languages, and certifications",
      "GDPR-by-design with EU data residency and audit logs, with SSO on the Enterprise plan",
    ],
    rows: [
      { category: "Category", magiccv: "AI-native CV tailoring + profile management", competitor: "CV management with proposal and contact tools" },
      { category: "Tailoring to a brief", magiccv: "AI reads the RFP and re-emphasizes each CV", competitor: "Template-based; tailoring is typically manual" },
      { category: "Pricing transparency", magiccv: "Public: Free, $50/mo Pro, custom Enterprise", competitor: "Public tiers - credit where due" },
      { category: "Anonymization", magiccv: "One click, in your template", competitor: "Varies by plan and configuration" },
      { category: "Translation", magiccv: "Any language, layout preserved", competitor: "Varies" },
      { category: "Editing", magiccv: "Chat instructions plus direct edits", competitor: "Form and template editing" },
    ],
    guidance:
      "CVGate is one of the fairer comparisons on this site: focused product, public pricing, real proposal features. If CV sharing analytics and built-in contact management matter to your sales motion, weigh them seriously. If per-bid AI tailoring, blind CVs, and multilingual output for EU tenders are the features you'll use weekly, MagicCV goes further on exactly those. Both have low-risk entry points - test with a live bid.",
    faqs: [
      {
        question: "Is CVGate a legitimate alternative to MagicCV?",
        answer:
          "Yes - it's genuinely focused on consulting CV and proposal management, with public pricing. The main differences are MagicCV's brief-first AI tailoring, chat editing, and built-in anonymization and translation for EU tenders.",
      },
      {
        question: "Can we migrate from CVGate to MagicCV?",
        answer:
          "Yes. Export your CVs as Word or PDF and import them into MagicCV; the AI builds a structured profile from each. Most teams complete the move in a day.",
      },
      {
        question: "Does MagicCV have CV-view analytics like CVGate?",
        answer:
          "No - MagicCV exports polished PDF and Word documents rather than hosting tracked links, so view analytics aren't part of the product today. If knowing when a client opened a CV drives your follow-up process, that's a genuine point for CVGate.",
      },
      {
        question: "How does per-bid tailoring differ between the two?",
        answer:
          "In MagicCV you paste the RFP or brief and the AI decides what each CV should lead with, then you review and refine via chat. Template-based tools keep the CV consistent but leave the what-to-emphasize decision to whoever is preparing the bid.",
      },
      {
        question: "How do the two compare on GDPR and data residency?",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, audit logs, and a DPA on the Enterprise plan; SOC 2 is in progress. Check CVGate's current hosting and compliance documentation directly - both vendors publish enough to complete a procurement checklist.",
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
    h1: "MagicCV vs CV-Transformer: reformatting engine or tailoring engine?",
    sub: "CV-Transformer turns inbound CVs into your branded format at volume. MagicCV manages consultant profiles over time and reshapes them per brief. Different jobs, some overlap.",
    whereCompetitorWins: [
      "Strong at exactly one thing: converting incoming CVs into a standardized, branded template, fast and at recruitment-agency volume",
      "Built-in anonymization and support for a wide range of languages",
      "Lists integrations with recruitment stacks such as Greenhouse, JobAdder, and Salesforce, plus EU-based storage",
      "A natural fit for staffing and recruitment firms processing a steady stream of third-party candidate CVs",
    ],
    whereMagicCvDiffers: [
      "Tailors, not just reformats: the AI reads the RFP or client brief and changes what each CV emphasizes, then renders it in your template",
      "Profiles persist and stay current: one structured record per consultant, updated over time, instead of one-off file conversions",
      "Skills matrix and search across the whole bench - find every consultant with Kubernetes, German, and a banking background in seconds",
      "Built around the consulting proposal workflow: CV packs per bid, chat editing, translation that keeps layout, public self-serve pricing from $0",
    ],
    rows: [
      { category: "Core job", magiccv: "Manage profiles, tailor per brief, export on-brand", competitor: "Convert inbound CVs into your branded format" },
      { category: "Data model", magiccv: "Persistent profile per person, kept current", competitor: "Per-file conversion; typically no long-lived profile" },
      { category: "Tailoring to a brief", magiccv: "AI re-emphasizes content from the RFP text", competitor: "Reformat and standardize, not re-emphasize" },
      { category: "Anonymization", magiccv: "One click, in your template", competitor: "Built in" },
      { category: "Team search", magiccv: "Skills, sectors, languages, certifications", competitor: "Not the focus" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Typically credit or subscription based, trial available" },
    ],
    guidance:
      "If you're a recruitment or staffing agency whose bottleneck is volume reformatting of candidate CVs into house style, CV-Transformer is strong at that job and connects to recruitment stacks. If you're a consulting or IT services firm that bids with the same bench of people repeatedly, you need profiles that persist and tailor per brief - that's MagicCV's job. Some staffing firms legitimately need both patterns; test each on its home turf.",
    faqs: [
      {
        question: "What's the core difference between MagicCV and CV-Transformer?",
        answer:
          "CV-Transformer converts each incoming CV into a standardized branded document - a per-file operation. MagicCV maintains a living profile per consultant and generates tailored, on-brand CVs from it for each bid, with the AI deciding what to emphasize based on the brief.",
      },
      {
        question: "We reuse the same consultants across bids. Which model fits better?",
        answer:
          "Persistent profiles. With per-file conversion you re-process a document every time it changes; with MagicCV the profile is updated once and every subsequent export - any template, any language, anonymized or not - draws from current data.",
      },
      {
        question: "Both tools anonymize CVs. Is there a difference?",
        answer:
          "Both handle the core job of producing blind CVs. In MagicCV anonymization is one click on any export and stays consistent with your template, and because it works from structured profiles you can re-export the named version instantly when the client shortlists.",
      },
      {
        question: "Does MagicCV integrate with our ATS the way CV-Transformer does?",
        answer:
          "MagicCV doesn't require an integration to be useful - you import CVs directly as Word, PDF, or LinkedIn exports. If your workflow depends on pushing documents into a specific ATS automatically, that's currently a real advantage of CV-Transformer's listed integrations; raise integration needs with us if you're evaluating the Enterprise plan.",
      },
      {
        question: "Can we migrate from CV-Transformer to MagicCV?",
        answer:
          "Yes - your converted CVs are standard Word or PDF files, and MagicCV imports them directly into structured profiles. From there, updates happen on the profile rather than through re-conversion.",
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
    h1: "MagicCV vs CV Converter: quick formatting fix or full CV workflow?",
    sub: "CV Converter does one small job cheaply and well: make candidate CVs match your template. MagicCV covers the whole consulting CV workflow. Scope is the whole decision.",
    whereCompetitorWins: [
      "Radically simple: upload your template, feed it CVs, get consistently formatted documents back",
      "Transparent, low pay-as-you-go pricing with a free trial - minimal commitment to test",
      "Positioned as not storing your candidate data long-term, which simplifies some data-protection conversations",
      "Well matched to high-volume recruitment and RPO formatting where per-document cost is the metric",
    ],
    whereMagicCvDiffers: [
      "Covers the workflow around the document: persistent consultant profiles, skills search across the team, and per-bid tailoring, not just conversion",
      "The AI reads the RFP and reshapes each CV around it - a formatting tool can't tell which of a consultant's 14 projects matter for this brief",
      "One-click anonymization, translation into any language with layout kept, and proposal-ready CV packs for EU bids",
      "Chat editing on any draft: 'cut it to two pages and lead with the public-sector work'",
    ],
    rows: [
      { category: "Scope", magiccv: "Profiles, search, tailoring, packs, export", competitor: "Format conversion, deliberately nothing more" },
      { category: "Source of truth", magiccv: "Structured profile per consultant, kept current", competitor: "Each file converted independently" },
      { category: "Tailoring to a brief", magiccv: "AI re-emphasizes content from the RFP", competitor: "Out of scope by design" },
      { category: "Anonymization / translation", magiccv: "One click each, layout preserved", competitor: "Not the focus" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro (200 profiles)", competitor: "Public pay-as-you-go, very low per file" },
      { category: "Best for", magiccv: "Firms bidding with a repeat bench", competitor: "Agencies formatting one-time candidate flow" },
    ],
    guidance:
      "If formatting is genuinely your whole problem - a stream of one-time candidate CVs that just need to look consistent - CV Converter is cheap, simple, and hard to argue with. If the same consultants appear in bid after bid and the real work is keeping their profiles current and tailoring them per brief, a converter leaves 90% of the job manual. Match the tool to whether your CVs are disposable or reusable.",
    faqs: [
      {
        question: "Is CV Converter cheaper than MagicCV?",
        answer:
          "For pure per-file formatting, its pay-as-you-go pricing can be very low, and MagicCV won't beat it on that single job. MagicCV's $50/month Pro plan covers 200 profiles and 600 CVs plus tailoring, search, anonymization, and translation - a broader scope, so compare against everything you currently do by hand, not just formatting.",
      },
      {
        question: "We're a recruitment agency. Which fits us?",
        answer:
          "If candidates pass through once and formatting is the whole job, CV Converter fits. If you resubmit the same contractors repeatedly, run blind-CV processes, or bid on frameworks, MagicCV's persistent profiles and one-click anonymization start paying off quickly.",
      },
      {
        question: "Can MagicCV match our exact template like a converter does?",
        answer:
          "Yes. Your brand template is set up once and every export renders pixel-consistent to it, in PDF or Word. The difference is what happens before rendering: MagicCV can tailor and translate the content, not just pour it into the layout.",
      },
      {
        question: "Does MagicCV store our data, and where?",
        answer:
          "Yes - persistent profiles are the point, so exports stay current without re-processing files. Data is GDPR-by-design with EU residency and audit logs, and Enterprise plans include a DPA. If your policy requires no vendor storage at all, a pass-through converter is the safer architectural match.",
      },
      {
        question: "Can we start with CV Converter and move to MagicCV later?",
        answer:
          "Easily - your converted CVs are ordinary Word or PDF files, and MagicCV imports them directly into structured profiles. Teams often make the switch when they notice the same CVs coming back for their third reformatting.",
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
    h1: "MagicCV vs MuchSkills CV Inventory: which system of record comes first?",
    sub: "MuchSkills generates CVs from its skills database. MagicCV builds profiles from the CVs you already have. The right order depends on where your data lives today.",
    whereCompetitorWins: [
      "CVs generated from live, verified skills data - if the MuchSkills database is your system of record, the CVs inherit its accuracy",
      "Strong version control and audit trails on every CV, useful where compliance reviews who sent what and when",
      "Manages internal staff and external consultants in one inventory",
      "A deep skills taxonomy covering certifications, technical skills, and capabilities at fine grain",
    ],
    whereMagicCvDiffers: [
      "Starts from what you have: import Word, PDF, or LinkedIn CVs and the AI builds structured profiles - no skills-platform adoption project first",
      "RFP-to-CV tailoring: the AI reads the actual brief and reshapes each CV around it, rather than assembling from skills matches alone",
      "Chat editing, one-click anonymization, and translation into any language with layout preserved - the EU tender toolkit in one place",
      "Public, self-serve pricing: Free to test, $50/month Pro, without a platform commitment",
    ],
    rows: [
      { category: "Data foundation", magiccv: "Structured profiles parsed from your existing CVs", competitor: "The MuchSkills skills database" },
      { category: "Prerequisite", magiccv: "None - import CVs and go", competitor: "Adopting MuchSkills as your skills system" },
      { category: "Tailoring to a brief", magiccv: "AI reads the RFP text and re-emphasizes", competitor: "Draws on skills-data matching" },
      { category: "Version control", magiccv: "Profile history and audit logs", competitor: "Strong, with per-CV audit trails" },
      { category: "Anonymization / translation", magiccv: "One click each, layout preserved", competitor: "Varies" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Typically quoted as part of the platform" },
    ],
    guidance:
      "If your organization already runs MuchSkills - or has decided to build its talent data around a verified skills taxonomy - CV Inventory is the natural extension and the data quality argument is real. If your skills data currently lives inside CVs, SharePoint, and people's heads, MagicCV gets you searchable profiles and tailored bid CVs this week, without standing up a skills platform first. Start from where your data actually is.",
    faqs: [
      {
        question: "Do we need a skills database before we can use MagicCV?",
        answer:
          "No. MagicCV builds structured profiles directly from your existing CVs - Word, PDF, or LinkedIn exports - and extracts skills, sectors, languages, and certifications into a searchable matrix as it goes. The skills data is a byproduct of import, not a prerequisite.",
      },
      {
        question: "Isn't a verified skills database more accurate than parsed CVs?",
        answer:
          "If it's maintained, yes - that's MuchSkills' honest strength. The trade-off is adoption: a verified database is only accurate if consultants keep it current. MagicCV bets on the artifact people already maintain (their CV) and makes updating it a five-minute AI-assisted job.",
      },
      {
        question: "Can MagicCV and MuchSkills coexist?",
        answer:
          "Yes. Some firms use MuchSkills for internal skills visibility and MagicCV for client-facing bid CVs, since exported CVs from any system can be imported into MagicCV as Word or PDF.",
      },
      {
        question: "How does tailoring differ between the two?",
        answer:
          "MuchSkills assembles CVs backed by its skills data. MagicCV reads the actual RFP text - the 40-page annex included - and decides what each CV should lead with for that specific brief, which you then refine via chat before export.",
      },
      {
        question: "How does MagicCV handle audit and compliance needs?",
        answer:
          "Profiles keep history, the platform logs activity, and data is GDPR-by-design with EU residency; Enterprise adds SSO and a DPA. SOC 2 is in progress. If per-document audit trails are a hard requirement today, weigh MuchSkills' version-control depth in your evaluation.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "RFP-to-CV tailoring", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs SprintCV Enterprise: mid-market speed or enterprise admin depth?",
    sub: "SprintCV's enterprise offering adds admin and team management on top of its CV engine. MagicCV bets the same budget on AI tailoring and same-day time-to-value.",
    whereCompetitorWins: [
      "Enterprise-grade CV management from a vendor focused on consulting and staffing, with proven parsing and template generation",
      "Mature admin and team-management features - roles, oversight, and structure that larger firms expect",
      "Established reference base in Iberia's IT services market",
      "A safer-feeling choice for a formal procurement process that wants an enterprise-labeled product",
    ],
    whereMagicCvDiffers: [
      "The AI does the tailoring, not just the parsing: paste an RFP and each CV is reshaped around its requirements before rendering",
      "Chat editing for refinement: instruct the draft in plain language instead of working through admin screens",
      "Public pricing at every tier below Enterprise - Free (10 profiles), $50/month Pro (200 profiles) - and self-serve onboarding the same day",
      "One-click anonymization and translation into any language with layout preserved, aimed at EU tender requirements",
    ],
    rows: [
      { category: "Core engine", magiccv: "AI reads the brief, then reshapes the CV", competitor: "Parsing and template generation, enterprise admin on top" },
      { category: "Admin depth", magiccv: "Team workspaces; SSO and DPA on Enterprise", competitor: "Mature enterprise admin and team management" },
      { category: "Time to first CV out", magiccv: "Same day, self-serve", competitor: "Typically an onboarding process" },
      { category: "Pricing", magiccv: "Public below Enterprise tier", competitor: "Typically quote-based" },
      { category: "Tender toolkit", magiccv: "Anonymization + translation built in, one click", competitor: "Varies by configuration" },
      { category: "Regional strength", magiccv: "EU-wide, EU data residency", competitor: "Strongest in Iberia" },
    ],
    guidance:
      "If you're a larger firm that wants enterprise admin controls from a consulting-focused CV vendor - and Iberian references matter to you - SprintCV's enterprise product deserves a look. If your priority is the output quality per bid and being live this week rather than after onboarding, MagicCV's brief-first AI and self-serve model fit better. Mid-market firms rarely use the admin depth they pay enterprise prices for.",
    faqs: [
      {
        question: "How is this page different from your Sprint CV comparison?",
        answer:
          "Same vendor, enterprise-tier offering: more admin and team-management surface on top of the same CV engine. The trade-off against MagicCV is unchanged - their strength is structure and regional track record; MagicCV's is brief-first AI tailoring, public pricing, and same-day setup.",
      },
      {
        question: "Does MagicCV have enterprise features at all?",
        answer:
          "Yes - the Enterprise plan adds SSO, a DPA, unlimited profiles, and priority support, on top of audit logs and EU data residency that every plan gets. What MagicCV skips is the mandatory enterprise sales cycle: Pro at $50/month is self-serve and covers teams up to 200 profiles.",
      },
      {
        question: "Can we migrate from SprintCV to MagicCV?",
        answer:
          "Yes. Export your CVs as Word or PDF, import them into MagicCV, and each becomes a structured profile automatically. There's no migration project to scope.",
      },
      {
        question: "How long does rollout take compared to an enterprise CV manager?",
        answer:
          "MagicCV: import CVs, set your brand template, export the first tailored CV - typically within a day, self-serve. Enterprise CV managers typically run onboarding with configuration and training first, which is justified at large scale and slow everywhere else.",
      },
      {
        question: "We bid across several EU countries. Which handles languages better?",
        answer:
          "MagicCV translates any CV into any language while preserving your template's layout, so one profile serves bids in Madrid, Munich, and Paris. Verify SprintCV's current language coverage against the specific languages you bid in.",
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
    h1: "MagicCV vs Enhancv: proposal CVs are a different job than resumes",
    sub: "Enhancv builds resumes that get candidates hired. MagicCV builds consultant CVs that win firms work. If you're comparing them, decide which document you're actually producing.",
    whereCompetitorWins: [
      "A genuinely excellent resume builder: polished editor, a large template library, and output candidates are proud to send",
      "One-click import from LinkedIn, DOCX, and PDF, with job-description matching to align a resume to a posting",
      "ATS-friendly formatting, which matters when documents are screened by recruitment software",
      "Team features with a shared library and custom branding - a good fit for recruitment, outplacement, and career-coaching teams",
    ],
    whereMagicCvDiffers: [
      "Built for the firm, not the job seeker: profiles for your whole bench, searchable by skills, sectors, languages, and certifications",
      "Optimizes for the client brief, not an ATS: the AI reads the RFP and reshapes each consultant's CV around its requirements",
      "Produces proposal-ready CV packs - 8 consultants, one template, one afternoon - plus one-click blind CVs for tenders",
      "GDPR-by-design with EU data residency, translation into any language keeping your layout, and public pricing from $0",
    ],
    rows: [
      { category: "Who it serves", magiccv: "Consulting and services firms bidding for work", competitor: "Job seekers, and teams that support them" },
      { category: "Document produced", magiccv: "Consultant CV for a client or tender", competitor: "Resume for a job application" },
      { category: "Optimized for", magiccv: "The client's brief and evaluation criteria", competitor: "ATS parsing and job-description keywords" },
      { category: "Team model", magiccv: "One profile per consultant, firm-wide search", competitor: "Shared library of individual resumes" },
      { category: "Tender features", magiccv: "Blind CVs and CV packs, one click", competitor: "Not the use case" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Public subscription plans" },
    ],
    guidance:
      "If your team helps individuals land jobs - recruitment, outplacement, career services - Enhancv is one of the best tools for that and MagicCV isn't trying to compete there. If your CVs go into proposals and tenders with your firm's name on the cover, ATS optimization is irrelevant and brief-tailoring is everything - that's MagicCV. The two products only look similar until you name the reader of the document.",
    faqs: [
      {
        question: "Can Enhancv handle consulting proposal CVs?",
        answer:
          "It can produce polished, branded documents, and some teams stretch it that way. What it isn't built for is the surrounding workflow: a searchable bench, RFP-driven tailoring, blind CVs for tenders, and multi-consultant CV packs. Those are MagicCV's core, not an adaptation.",
      },
      {
        question: "Do consulting CVs need ATS optimization?",
        answer:
          "Almost never. Proposal CVs are read by client evaluators and procurement panels, not resume-screening software. What moves the score is relevance to the brief - which is exactly what MagicCV's RFP-to-CV tailoring automates.",
      },
      {
        question: "Can we import resumes our consultants made in Enhancv?",
        answer:
          "Yes. Export them as PDF or DOCX and import into MagicCV - the AI parses each into a structured profile. LinkedIn exports work the same way, so onboarding the bench doesn't depend on any one source format.",
      },
      {
        question: "Our recruitment arm uses Enhancv. Should the consulting side use it too?",
        answer:
          "Only if the consulting side's needs stop at nice-looking documents. The moment you need to search the bench by skills, anonymize for a framework tender, or tailor 10 CVs to one RFP by Friday, you're outside what a resume builder is designed to do.",
      },
      {
        question: "How does pricing compare for a team?",
        answer:
          "MagicCV's Pro plan is $50/month for 200 profiles and 600 CVs, with a free plan (10 profiles, 30 CVs) to test. Enhancv publishes its own subscription pricing per user - directly comparable numbers, just priced for different jobs.",
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
    h1: "MagicCV vs VisualCV: team resume builder or bid-CV workflow?",
    sub: "VisualCV gives teams consistent, hosted resumes. MagicCV turns a bench of consultants into tailored, on-brand CVs per bid. Close on the surface, different underneath.",
    whereCompetitorWins: [
      "A long-established resume and CV builder with a business tier designed for teams",
      "Polished templates plus hosted online CVs with view analytics - useful when you share CVs as links and want to know they were opened",
      "Simple way to keep a team's resumes visually consistent under one brand",
      "Approachable pricing and low setup effort for what it does",
    ],
    whereMagicCvDiffers: [
      "Built around the bid, not the individual document: paste an RFP and the AI reshapes each consultant's CV around it, then assembles the pack",
      "Structured profiles as the source of truth - searchable by skills, sectors, languages, certifications - rather than a folder of designed resumes",
      "One-click anonymization for blind tender submissions and translation into any language with layout preserved",
      "GDPR-by-design with EU data residency and audit logs; SSO and DPA on Enterprise",
    ],
    rows: [
      { category: "Primary job", magiccv: "Tailored consultant CVs for bids and clients", competitor: "Consistent resumes and hosted online CVs" },
      { category: "Tailoring to a brief", magiccv: "AI reads the RFP and re-emphasizes each CV", competitor: "Manual editing within templates" },
      { category: "Team search", magiccv: "Skills matrix across the whole bench", competitor: "Not the focus" },
      { category: "Sharing model", magiccv: "Pixel-consistent PDF/Word exports", competitor: "Hosted links with view analytics" },
      { category: "Tender toolkit", magiccv: "Blind CVs and CV packs, one click", competitor: "Not the use case" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Public plans, business tier for teams" },
    ],
    guidance:
      "If what you need is a set of good-looking, consistent resumes - and hosted CV links with view tracking appeal to your sales motion - VisualCV does that job well at low effort. If your CVs are ammunition for proposals and tenders, the work is tailoring and assembly under deadline, and that's the workflow MagicCV automates end to end. Name your actual Tuesday-afternoon task and pick accordingly.",
    faqs: [
      {
        question: "Is VisualCV suitable for consulting proposals?",
        answer:
          "It produces consistent, branded documents, which covers the surface requirement. What it lacks is the proposal workflow underneath: RFP-driven tailoring, a searchable skills matrix, blind CVs, and multi-consultant packs. If those are weekly tasks for you, a general builder will leave them manual.",
      },
      {
        question: "Can we migrate our team's VisualCV resumes into MagicCV?",
        answer:
          "Yes. Export them as PDF or Word and import into MagicCV - each becomes a structured, searchable profile. A 30-person team is typically imported and exporting branded CVs within a day.",
      },
      {
        question: "Does MagicCV offer hosted CV links and view analytics like VisualCV?",
        answer:
          "No - MagicCV produces pixel-consistent PDF and Word exports, because that's what proposals and tender portals require. If tracked hosted links are central to how you share CVs, that's a genuine VisualCV advantage to weigh.",
      },
      {
        question: "How do the two handle keeping CVs up to date across a team?",
        answer:
          "In a resume builder, each document is edited individually and drift creeps in. In MagicCV each person has one profile; updates take minutes with AI structuring the input, and every export anywhere draws from the current version.",
      },
      {
        question: "What about GDPR - we're an EU firm?",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, audit logs, and one profile per person, which makes access and deletion requests straightforward; Enterprise adds a DPA and SSO. Check VisualCV's current data-residency documentation against your requirements.",
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
    h1: "MagicCV vs Rezi: ATS resumes and proposal CVs are different sports",
    sub: "Rezi is an AI resume builder tuned for ATS screening, often deployed white-label. MagicCV is tuned for client briefs and tenders. Same 'AI CV' label, different games.",
    whereCompetitorWins: [
      "A mature AI resume builder with strong ATS keyword targeting - the right optimization when software screens the document",
      "White-label deployment, which is why universities, career centers, and resume-writing services build on it",
      "Publicly advertises SOC 2 Type II and SSO, with a large established user base",
      "Review and feedback workflows suited to coaching scenarios, where an advisor iterates on a candidate's resume",
    ],
    whereMagicCvDiffers: [
      "Optimizes for a human evaluator reading against a brief: the AI parses the RFP and reshapes each consultant's CV around its actual requirements",
      "Manages the firm's bench, not individual job searches: structured profiles, skills search, and CV packs assembled per bid",
      "EU tender toolkit built in: one-click blind CVs, translation into any language keeping layout, EU data residency, GDPR-by-design",
      "Simple team pricing: Free to test, $50/month Pro for 200 profiles - no white-label or institutional contract needed",
    ],
    rows: [
      { category: "Who reads the output", magiccv: "Client evaluators and tender panels", competitor: "ATS software, then recruiters" },
      { category: "Optimization target", magiccv: "The brief's requirements and scoring criteria", competitor: "ATS keywords from the job description" },
      { category: "Typical buyer", magiccv: "Consulting, IT services, professional-services firms", competitor: "Universities, career centers, resume services" },
      { category: "Deployment", magiccv: "Team workspace, self-serve", competitor: "Direct or white-label programs" },
      { category: "Tender features", magiccv: "Blind CVs, CV packs, multilingual export", competitor: "Not the use case" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Public per-seat tiers" },
    ],
    guidance:
      "If you're deploying a resume builder to a population of job seekers - students, alumni, outplacement clients - Rezi is a strong, credentialed choice and MagicCV doesn't play there. If you're a firm whose CVs go into proposals with your logo on the cover, ATS keywords are the wrong optimization entirely; you need brief-tailoring, blind CVs, and pack assembly. Pick by who reads the document, not by which tool says 'AI'.",
    faqs: [
      {
        question: "Does MagicCV optimize CVs for ATS like Rezi does?",
        answer:
          "No, deliberately. Proposal CVs are read by client evaluators against a brief, not parsed by recruitment software. MagicCV optimizes for that reader: the AI reads the RFP and re-emphasizes each CV around its requirements.",
      },
      {
        question: "Rezi advertises SOC 2 Type II. Where is MagicCV on compliance?",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, audit logs, and SSO plus a DPA on the Enterprise plan. SOC 2 is in progress, not yet complete - if a finished SOC 2 report is a hard gate today, factor that honestly into your timeline.",
      },
      {
        question: "Can our consultants' Rezi resumes be imported into MagicCV?",
        answer:
          "Yes. Export them as PDF or DOCX and import into MagicCV - each becomes a structured profile searchable by skills, sectors, languages, and certifications.",
      },
      {
        question: "Does MagicCV offer white-label deployment?",
        answer:
          "No. MagicCV is a team workspace for firms managing their own bench, not a platform to rebrand for third parties. If white-label is the requirement - career services, resume businesses - Rezi is built for exactly that.",
      },
      {
        question: "We're an IT services firm, not a career center. Why would we have shortlisted Rezi?",
        answer:
          "Usually because 'AI resume builder' searches surface it first. The evaluation question that separates the categories: can it read a 40-page RFP annex and reshape 8 consultant CVs around it by Thursday? That's the job MagicCV is built for.",
      },
    ],
    related: [
      { label: "RFP-to-CV tailoring", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Neobrain: HR skills platform or bid-ready CVs?",
    sub: "Neobrain maps skills for internal HR strategy. MagicCV turns consultant experience into client-facing CVs. They share the word 'skills' and almost nothing else.",
    whereCompetitorWins: [
      "Enterprise skills-based talent management: skills mapping, internal mobility, and strategic workforce planning at organizational scale",
      "Career-development and performance modules with HRIS integrations, built for HR teams running skills transformations",
      "The right tool when the question is 'what skills does our workforce have and need' rather than 'which CV goes in this bid'",
      "Established with large organizations, particularly in France",
    ],
    whereMagicCvDiffers: [
      "Produces the artifact clients actually see: on-brand consultant CVs and proposal packs, tailored per RFP by AI that reads the brief",
      "Buyer and timeline match bid work: self-serve, public pricing from $0, first tailored CV out the same day - no HR transformation program required",
      "One-click anonymization and translation into any language keeping layout, for EU tenders and framework agreements",
      "Skills search included at the working level: find every consultant with SAP, French, and utilities experience in seconds",
    ],
    rows: [
      { category: "Category", magiccv: "Client-facing CV and proposal workflow", competitor: "Internal skills and talent management platform" },
      { category: "Primary buyer", magiccv: "Bid managers, ops leads, resourcing teams", competitor: "CHROs and HR transformation leaders" },
      { category: "Core output", magiccv: "Tailored, on-brand CVs and CV packs", competitor: "Skills maps, mobility paths, workforce plans" },
      { category: "Time to value", magiccv: "Same day, self-serve", competitor: "Typically an enterprise program with phased rollout" },
      { category: "Skills data role", magiccv: "Extracted from CVs to power search and tailoring", competitor: "The product itself - managed as strategic data" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Enterprise, quote-based" },
    ],
    guidance:
      "These tools answer different questions. If your organization needs to map workforce skills, plan reskilling, and drive internal mobility, Neobrain is built for that scale of HR problem. If your bid team needs tender-ready consultant CVs by Thursday, no skills platform will produce them - that's MagicCV's job. Larger firms sometimes run both; they don't overlap enough to conflict.",
    faqs: [
      {
        question: "Is Neobrain actually a MagicCV competitor?",
        answer:
          "Only at the edges. Neobrain is an internal skills and talent platform for HR; MagicCV produces client-facing CVs for bids. If both landed on your shortlist, the evaluation probably mixed two different projects.",
      },
      {
        question: "Doesn't MagicCV also do skills management?",
        answer:
          "At the working level, yes: importing CVs builds a skills matrix you can search by skill, sector, language, and certification. What it doesn't do is strategic workforce planning, mobility programs, or skills-gap analytics - that's genuinely Neobrain's territory.",
      },
      {
        question: "Could we use Neobrain's data to build proposal CVs?",
        answer:
          "Skills platforms describe people; they typically don't produce tender-ready documents in your template, anonymized and translated. Firms with both needs export CVs and import them into MagicCV - Word and PDF import means no integration project.",
      },
      {
        question: "Which is faster to get value from?",
        answer:
          "Different scales entirely. MagicCV is self-serve: CVs imported and the first tailored export the same day, $50/month at the Pro tier. An enterprise skills platform is typically a program - months of rollout with HRIS integration - because it's solving an organization-wide problem.",
      },
      {
        question: "We're mid-market. Do we need either?",
        answer:
          "If bid CVs are the pain, MagicCV solves it at mid-market price and effort. A full skills-transformation platform usually earns its cost at enterprise headcounts; below that, the skills matrix MagicCV builds from your CVs often covers what mid-market teams actually use.",
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
    h1: "MagicCV vs TechWolf: skills infrastructure or CVs you can send?",
    sub: "TechWolf infers skills data for enormous enterprises. MagicCV produces the tailored CVs your bid goes out with. Different layers of the stack, rarely a real either/or.",
    whereCompetitorWins: [
      "Skills-intelligence infrastructure that infers skills automatically from work signals, instead of relying on self-reported data",
      "Integrates with major HCM systems such as Workday and SAP SuccessFactors, built to operate at very large enterprise scale",
      "The strongest option when the goal is continuous, automated skills data across a workforce of tens of thousands",
      "An infrastructure play: other HR systems get smarter because TechWolf feeds them",
    ],
    whereMagicCvDiffers: [
      "Lives at the output layer: turns consultant profiles into client-ready, on-brand CVs, tailored per RFP by AI that reads the brief",
      "Sized for mid-market firms: self-serve setup the same day, public pricing from $0 with Pro at $50/month",
      "Ships the bid-team toolkit - chat editing, one-click blind CVs, translation keeping layout, proposal CV packs",
      "Needs no HCM integration to start: import Word, PDF, or LinkedIn CVs and the profiles build themselves",
    ],
    rows: [
      { category: "Layer", magiccv: "Output: documents clients see", competitor: "Infrastructure: skills data feeding HR systems" },
      { category: "Core output", magiccv: "Tailored, on-brand CVs and proposal packs", competitor: "Continuously inferred skills profiles in HCM systems" },
      { category: "Typical customer", magiccv: "Consulting and services firms, 10-250 people", competitor: "Very large enterprises, often 10,000+ employees" },
      { category: "Setup", magiccv: "Self-serve, import CVs, same-day output", competitor: "Enterprise integration project with HCM systems" },
      { category: "Buyer", magiccv: "Bid, ops, and resourcing leads", competitor: "Enterprise HR and IT leadership" },
      { category: "Pricing", magiccv: "Public: Free, $50/mo Pro", competitor: "Enterprise, quote-based" },
    ],
    guidance:
      "If you're an enterprise HR leader who needs trustworthy, continuously updated skills data flowing into Workday across 50,000 employees, TechWolf is built precisely for that and MagicCV is not. If you're a consulting firm that needs 8 tailored, anonymized CVs in the client's language by Thursday, skills infrastructure won't produce them - MagicCV will. Most readers of this page need the document, not the data layer.",
    faqs: [
      {
        question: "Does MagicCV infer skills from work activity like TechWolf?",
        answer:
          "No - that's TechWolf's specialty and a genuinely hard problem at enterprise scale. MagicCV extracts skills from the CVs you import, which is a good fit at mid-market size where the bench is hundreds of people, not tens of thousands.",
      },
      {
        question: "Could TechWolf's skills data generate our proposal CVs?",
        answer:
          "TechWolf produces skills data for HR systems, not client-facing documents; you'd still need something to write, brand, anonymize, and translate the CV. That output layer is MagicCV's entire product.",
      },
      {
        question: "We're 80 consultants. Is TechWolf even relevant to us?",
        answer:
          "Probably not - its model is built around large-enterprise HCM integration and workforce scale. At 80 people, MagicCV's approach - parse the CVs you have into searchable profiles - delivers the practical benefits of skills visibility without an infrastructure project.",
      },
      {
        question: "Could a large firm use both?",
        answer:
          "Yes, at different layers: TechWolf keeping enterprise skills data current in the HCM, MagicCV producing tailored bid CVs for the consulting arm. MagicCV imports Word and PDF CVs directly, so nothing about running both requires integration work.",
      },
      {
        question: "What does MagicCV cost compared to an enterprise skills platform?",
        answer:
          "MagicCV publishes pricing: Free (10 profiles, 30 CVs), $50/month Pro (200 profiles, 600 CVs), custom Enterprise with SSO and a DPA. Enterprise skills infrastructure is a different budget category entirely - typically a six-figure, quote-based engagement sized to workforce headcount.",
      },
    ],
    related: [
      { label: "Centralized profiles & skills", href: "/features/profiles-skills" },
      { label: "RFP-to-CV tailoring", href: "/features/rfp-to-cv" },
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
