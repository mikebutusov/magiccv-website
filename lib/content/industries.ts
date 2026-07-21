import type { IndustryPage } from "./types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "IT services / software consultancies bidding for client and framework work; heavy on skills-matrix CVs.",
    angle:
      "The RFP annex wants a skills matrix: years per technology, certifications with expiry dates, project references in the client's table format. Your consultants' CVs live in SharePoint in ten different Word layouts, and the last verified version of half of them is from the previous bid. So the delivery lead spends the weekend before the deadline copy-pasting from final_v3 files and messaging consultants to confirm whether their AWS certifications are still current.\n\nMagicCV replaces that scramble with one structured profile per consultant. Import the Word and PDF CVs you have today, and skills, certifications, and project history become searchable fields instead of prose. When a bid lands, upload the RFP: the AI reads the requirements, reshapes each CV around the stack the client asked for, and exports in your house template or the framework's mandated format - in any language the tender requires.",
    h1: "Every RFP asks for a different skills matrix. Answer them all from one profile.",
    sub: "Search your bench by stack and certification, then generate RFP-ready consultant CVs in the exact format each framework or tender demands.",
    keyPoints: [
      {
        title: "Find the consultants who actually match the stack",
        body: "Filter the whole bench by skills, years of experience, certifications, and languages in one search. Instead of asking three delivery managers who knows Kubernetes, you get the shortlist in seconds - including the consultant who joined last quarter and never made it into the old spreadsheet.",
        screenshotAlt: "Team search filtered to Kubernetes + AWS + German, showing 6 matching consultants with certification badges",
      },
      {
        title: "CVs reshaped around the RFP's actual requirements",
        body: "Upload the RFP or paste the requirements, and the AI reorders each consultant's CV so the relevant projects, stack experience, and certifications lead. It works from real profile data only - nothing gets invented to fill a gap.",
        screenshotAlt: "RFP requirements panel beside a consultant CV with matching projects and certifications moved to the top",
      },
      {
        title: "One profile, every framework format",
        body: "Framework agreements and client tenders each mandate their own CV structure. Set the template once, and every export lands pixel-consistent in Word or PDF - no more rebuilding 12 CVs by hand because this client wants tables instead of bullets.",
        screenshotAlt: "Export dialog showing house brand template and two framework-specific CV templates for the same consultant",
      },
      {
        title: "Certifications that are current, not last year's",
        body: "Certifications live as structured fields on each profile, updated once and reflected in every CV generated afterward. Renewals stop being a Friday-afternoon chase across Slack before every submission.",
        screenshotAlt: "Consultant profile with certification list showing issue dates and current status",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "How do we get 80 consultant CVs out of SharePoint and into MagicCV?",
        answer:
          "Upload them as they are - Word, PDF, or exported LinkedIn profiles. MagicCV parses each file into a structured profile, one per person, so the mixed folder of final_v2 and final_v3 files becomes a clean, searchable database. Most teams migrate their whole bench in an afternoon.",
      },
      {
        question: "The RFP asks for a skills matrix with years per technology. Can MagicCV produce that?",
        answer:
          "Yes. Skills are stored as structured data on each profile, not buried in prose, so the AI can map them against what the brief asks for and present them in the format the tender requires. If the client mandates their own matrix layout, set it up as a template and export into it directly.",
      },
      {
        question: "Can we keep our existing Word CV template?",
        answer:
          "Yes. Recreate your house layout as a brand template in MagicCV - fonts, colors, structure - and every export matches it exactly, in Word or PDF. You can hold several templates in parallel, one per framework or key client.",
      },
      {
        question: "How do we keep 60+ consultant CVs up to date without chasing people?",
        answer:
          "Each consultant has one master profile, so an update happens once instead of across five Word files. Project history and certifications are discrete fields, which makes it obvious what is stale. The chat-based editor also makes updates fast enough that people actually do them.",
      },
      {
        question: "Is MagicCV an ATS or HRIS replacement?",
        answer:
          "No. An ATS tracks applicants and an HRIS runs payroll and leave - neither produces a client-ready consultant CV. MagicCV is the CV management software layer: it holds bid-ready profiles of your delivery team and generates tailored, on-brand CVs for RFPs and framework calls.",
      },
      {
        question: "Can subcontractor and freelancer CVs go into the same database?",
        answer:
          "Yes. A profile is a profile - many consultancies keep associates and regular subcontractors alongside employees so a bid team can staff a full proposal from one search. Access controls let you decide who sees which profiles.",
      },
      {
        question: "What does it cost for a 40-person consultancy?",
        answer:
          "The Pro plan is $50/month and covers 200 profiles and 600 generated CVs, which fits most consultancies up to a few hundred consultants. There is a free tier (10 profiles, 30 CVs) to trial the workflow on one live bid, and Enterprise adds unlimited usage, SSO, and a DPA.",
      },
      {
        question: "Where is our consultant data stored?",
        answer:
          "In the EU, with GDPR-by-design handling, audit logs, and role-based access. Enterprise plans add SSO and a DPA. SOC 2 certification is in progress; the Trust Center has the current status.",
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
        "Match consultants by skills and tech experience, then generate RFP-ready CVs - in any language.",
      keywords: ["IT consulting CV management", "tech consultant CV for RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Strategy/management consultancies where partner and consultant credibility wins deals.",
    angle:
      "Strategy proposals are won on the named team, and the named team's CVs are usually the weakest pages in the document. The partner keeps a personal bio from 2023 that nobody is allowed to touch. The engagement lists are generic because the analyst assembling the pack at 11pm pulled them from the last proposal, which pulled them from the one before. The client reads five bios in five slightly different formats and draws a conclusion about the firm's attention to detail.\n\nMagicCV gives every partner and consultant one master profile - engagements, sectors, competencies - maintained in one place. For each pitch, the AI reads the brief and reorders every bio so the most relevant engagements lead: retail turnaround work for the retail turnaround pitch, not the generic top five. The whole team pack exports in your brand template, so the document a partner signs off on Thursday morning looks like one firm wrote it.",
    h1: "The proposal names the team. Make every named CV earn its place.",
    sub: "Partner bios and consultant CVs that foreground the engagements this specific pitch calls for - assembled in minutes, consistent across the pack.",
    keyPoints: [
      {
        title: "The right engagements lead, per brief",
        body: "Feed MagicCV the pitch brief and it reorders each person's engagement history so the most relevant work comes first - sector, problem type, client size. The client sees a team assembled for their problem, not a recycled credentials page.",
        screenshotAlt: "Consultant bio with three retail transformation engagements moved above earlier work, brief requirements shown alongside",
      },
      {
        title: "One master profile ends the personal-version problem",
        body: "Each partner and consultant has a single source of truth for their experience, updated once through chat-based editing. The partner who kept their own Word version stops being a bottleneck, because tailored bios generate from the profile instead of from whichever file they last emailed.",
        screenshotAlt: "Partner profile showing engagement history, sector tags, and last-updated date",
      },
      {
        title: "A pack that reads as one firm",
        body: "Assemble partners, principals, and the delivery team into a single pitch pack, all in the same brand template. No more Thursday-night formatting pass to make five bios from three offices look like they belong in the same document.",
        screenshotAlt: "Six-person pitch pack in a consistent brand template, partner bios first",
      },
      {
        title: "Sector and competency tags do the remembering",
        body: "Engagements are tagged by sector and competency, so the pricing specialist with three grocery clients surfaces when the grocery pitch comes in - even if the staffing partner has never worked with her. Institutional memory stops depending on who happens to be in the room.",
        screenshotAlt: "Search results for pricing + grocery retail showing 4 consultants ranked by engagement relevance",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Does this work for partner-level bios, not just consultant CVs?",
        answer:
          "Yes - a partner bio is the same mechanism with different emphasis. The profile holds the full engagement history; the export template controls whether it renders as a one-page bio or a detailed CV, and the AI tailors either to the pitch at hand.",
      },
      {
        question: "How does MagicCV decide which engagements to foreground?",
        answer:
          "It reads the brief - stated sector, problem, scope - and ranks the person's real engagements against it. It reorders and rephrases; it never invents work that isn't on the profile. You review before anything goes into the pack.",
      },
      {
        question: "Can we generalize client names in engagement descriptions?",
        answer:
          "Yes. Engagements are stored as you wrote them, and the chat-based editor makes it quick to produce a discreet version (\"a top-3 European grocer\") for a given export without touching the master record. One-click anonymization is also available when a process requires fully blind CVs.",
      },
      {
        question: "How do we migrate bios that currently live inside old proposal decks?",
        answer:
          "Export or paste them in any form - Word, PDF, even rough text - and MagicCV parses each into a structured profile. The first pass takes minutes per person; partners then confirm their own profile once instead of re-approving a new bio every pitch.",
      },
      {
        question: "Can we keep our existing proposal template?",
        answer:
          "Yes. Set up your brand template - typography, layout, structure - and every bio and CV exports into it as pixel-consistent PDF or Word, ready to drop into the proposal document.",
      },
      {
        question: "How is this different from keeping bios in a well-organized SharePoint?",
        answer:
          "SharePoint stores documents; it can't tell you which of 40 consultants has energy-transition experience, and every tailored version becomes another file to govern. MagicCV stores structured profiles it can search, reason about against a brief, and export from - the document is an output, not the system of record.",
      },
      {
        question: "What does it cost for a boutique firm?",
        answer:
          "Free covers 10 profiles and 30 CVs - enough to run one real pitch through it. Pro is $50/month for 200 profiles and 600 CVs, which covers most independent and mid-size firms. Enterprise adds SSO, a DPA, and unlimited usage.",
      },
      {
        question: "Who controls what goes out under a partner's name?",
        answer:
          "Role-based access separates who can edit profiles from who can generate and export packs, and audit logs record every change. Partners can review their tailored bio before submission without needing to maintain it themselves.",
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
        "MagicCV reasons about the brief and surfaces each consultant's most relevant experience - on-brand, partner-ready.",
      keywords: ["management consulting proposal CVs", "strategy consulting bid CV"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Design / creative / digital agencies pitching for projects and retainers; portfolio + team credentials matter.",
    angle:
      "The pitch deck is beautiful. Then comes the team slide, and the bios are in six styles because they were copy-pasted from the last three credentials decks, and the new motion designer isn't in any of them. Someone senior rebuilds the bios in Figma the night before - again - because an agency that sells craft can't send a team page that looks assembled in a hurry, even when it was.\n\nMagicCV keeps one structured profile per person - employees and regular freelancers alike - and renders bios through your studio's own template: your fonts, your colors, your layout. For each pitch, the AI tailors what each bio leads with to match the brief, and the whole team page exports as finished PDF or Word. The craft stays visible; the rebuilding stops.",
    h1: "Team pages that look like your studio made them - without remaking them every pitch.",
    sub: "One profile per creative, rendered in your exact brand and tailored to each brief, so the team slide stops eating the night before the pitch.",
    keyPoints: [
      {
        title: "Your brand, applied automatically",
        body: "Set up your studio's template once - typography, colors, layout - and every bio exports pixel-consistent to it. The team page finally holds the same standard as the rest of the deck, without a designer touching it.",
        screenshotAlt: "Four creative bios rendered in a studio's own template with consistent typography and photo treatment",
      },
      {
        title: "Bios tailored to the brief, not recycled from the last deck",
        body: "Give MagicCV the pitch brief and each bio leads with the relevant work: the e-commerce projects for the e-commerce pitch, the rebrand work for the rebrand. Same people, sharper story, no manual rewriting.",
        screenshotAlt: "Creative director bio with e-commerce projects surfaced to the top for a retail pitch brief",
      },
      {
        title: "The whole roster in one place, freelancers included",
        body: "Import bios and CVs from Word, PDF, or LinkedIn and every person becomes a structured, searchable profile. When a pitch needs a UX researcher with fintech experience, you search - instead of scrolling Slack for the freelancer someone used last spring.",
        screenshotAlt: "Roster view filtered to UX researchers, mixing staff and freelance profiles with availability tags",
      },
      {
        title: "International pitches in the client's language",
        body: "Translate any bio or full team page into the client's language while keeping your layout intact. Cross-border pitches stop requiring a separate translation-and-relayout round.",
        screenshotAlt: "The same team bio shown side by side in English and German in identical studio branding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can we keep our studio's exact visual identity?",
        answer:
          "Yes - that's the point. You define the template with your fonts, colors, and layout, and every generated bio inherits it exactly, exported as PDF or Word. If the output doesn't look like yours, the template isn't finished yet.",
      },
      {
        question: "Is this for CVs, or the short bios we put in decks?",
        answer:
          "Both come from the same profile. A template controls the output format, so one person's profile can render as a three-line deck bio, a one-pager, or a full CV for a retainer or framework pitch - all consistent with each other.",
      },
      {
        question: "Can we include freelancers and regular collaborators?",
        answer:
          "Yes. Many agencies keep their trusted freelance bench in the same database as staff, so a pitch team can be assembled and presented in one pass. Access controls decide who can see and export which profiles.",
      },
      {
        question: "How do we get everyone's bio in without a big content project?",
        answer:
          "Upload whatever exists - old CVs, LinkedIn exports, bios copied from previous decks - and MagicCV parses each into a structured profile. From there, people polish their own profile through chat-based editing, which is faster than getting them to fill in a form.",
      },
      {
        question: "What does it cost for a 15-person studio?",
        answer:
          "Free covers 10 profiles and 30 generated CVs, which is enough to trial it on a real pitch. Pro at $50/month covers 200 profiles and 600 CVs - room for the whole studio plus the freelance bench. Enterprise exists for larger networks that need SSO and unlimited usage.",
      },
      {
        question: "How is personal data handled? Some profiles are freelancers, not employees.",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, role-based access, and audit logs, which matters when you hold profiles of people who aren't on payroll. Profiles can be removed cleanly when a collaboration ends.",
      },
    ],
    related: [
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
      { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
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
      "Civil/structural/MEP/environmental engineering consultancies - extremely tender- and CV-heavy, especially for public procurement.",
    angle:
      "The tender lands with a mandatory CV form in Annex C: qualifications, professional registrations, then project references with roles, values, and dates - for 12 engineers, submitted in the buyer's format, by Friday noon. The references exist, scattered across old bids and the engineers' own Word files, half of them describing the same project three different ways. Add a consortium partner who sends their CVs in yet another layout, and the bid manager loses two days to reformatting instead of writing the technical response.\n\nMagicCV holds each engineer's qualifications, registrations, and project references as structured data, entered once. When a tender arrives, the AI maps profiles against its requirements, surfaces the references that score, and exports every CV in the exact template the annex mandates - translated where the tender requires it, anonymized where evaluation is blind. The framework renewal next year starts from current profiles, not from an archaeology dig through the last submission.",
    h1: "Framework renewals and consortium bids, without rebuilding 12 engineer CVs by hand.",
    sub: "Qualifications, registrations, and project references stored once - exported in the exact format every tender annex demands, in any language.",
    keyPoints: [
      {
        title: "The annex format, produced instead of rebuilt",
        body: "Set up the buyer's mandated CV structure as a template and export every engineer's CV straight into it, in Word or PDF. When the next tender mandates a different structure, you add a template - you don't reformat 12 documents.",
        screenshotAlt: "Engineer CV exported in a public tender's mandated annex format, with registration and reference sections in the required order",
      },
      {
        title: "Project references that match the scoring criteria",
        body: "References live as structured entries - role, scope, value, dates - reusable across bids. Feed in the tender and the AI surfaces each engineer's references that best match what evaluators will score, instead of the same three projects everyone always lists.",
        screenshotAlt: "Reference list filtered to water infrastructure projects over 10M EUR, matched against tender criteria",
      },
      {
        title: "Registrations where evaluators look for them",
        body: "Chartered status and professional registrations are fields on the profile, kept current in one place and rendered exactly where each tender format expects them. No more discovering a lapsed registration date during the compliance check.",
        screenshotAlt: "Engineer profile showing chartered status and professional registrations with dates",
      },
      {
        title: "Blind evaluation and multilingual bids from the same profile",
        body: "One click anonymizes a CV for blind evaluation; translation produces the French or German version with layout intact. Both come from the same master profile, so language versions never drift out of sync with the original.",
        screenshotAlt: "Anonymized engineer CV beside its French translation, both in the tender's mandated format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Public tenders mandate their own CV forms. Can MagicCV export into them?",
        answer:
          "Yes. You recreate the mandated structure as a template - section order, tables, field labels - and export each engineer's CV directly into it. Consultancies bidding into several frameworks typically keep one template per buyer alongside the house format.",
      },
      {
        question: "Can we import our consortium partner's CVs for a joint bid?",
        answer:
          "Yes. Upload their Word or PDF CVs and they parse into structured profiles like your own, so the whole consortium's CVs export in one consistent, compliant format. Access controls keep partner profiles separated afterward if you want them to be.",
      },
      {
        question: "How does anonymization for blind evaluation work?",
        answer:
          "One click strips names, photos, and identifying details while keeping qualifications, registrations, and references intact. You review the blind version before it goes into the submission, and the master profile is untouched.",
      },
      {
        question: "How do we maintain a project reference library across 50 engineers?",
        answer:
          "Each reference is entered once as structured data and reused across every bid and engineer it applies to. When a project closes, you add it while details are fresh - then it's available for the framework renewal two years later, instead of being reconstructed from memory.",
      },
      {
        question: "We bid in German, French, and Dutch. Does translation keep the format?",
        answer:
          "Yes - CVs translate into the tender's language while keeping the template's layout intact, so the translated version is submission-ready rather than a restart. All language versions generate from the same master profile.",
      },
      {
        question: "Public buyers scrutinize data handling. Where does our data sit?",
        answer:
          "EU data residency, GDPR-by-design, audit logs, and role-based access. Enterprise adds SSO and a DPA. SOC 2 is in progress - the Trust Center carries the current status, which you can reference in your own compliance responses.",
      },
      {
        question: "Does this replace our HR system?",
        answer:
          "No. Your HRIS manages employment; MagicCV manages the bid-facing layer - tender-ready CVs, registrations, and references - which HR systems don't produce. They coexist; MagicCV owns the documents that go into submissions.",
      },
      {
        question: "What does it cost for a 60-engineer consultancy?",
        answer:
          "Pro is $50/month for 200 profiles and 600 generated CVs, which comfortably covers a firm this size across a year of tenders. The free tier (10 profiles, 30 CVs) lets you pilot one live tender first, and Enterprise adds unlimited usage, SSO, and a DPA.",
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
      "Panel submissions and engagement proposals keep asking for the same thing: credentialed team CVs showing the right sector experience, qualification dates, and regulatory track record - and every office assembles them differently. The Hamburg office uses one layout, the tax practice another, and when a partner rotates onto an engagement mid-proposal, someone rebuilds their CV from a two-year-old version at 8pm. For a firm that sells rigor, inconsistent team credentials are a bad look in front of an audit committee.\n\nMagicCV holds one profile per partner and professional - qualifications, sector experience, engagement history - tagged and searchable across the firm. Proposals pull tailored CVs that foreground the sector and regulatory experience each engagement calls for, exported in the firm template so every office submits the same firm. Role-based access and audit logs keep governance over who sees and changes what, which is the standard your own risk team will hold the tool to.",
    h1: "Panel submissions with the same credentialed CVs from every office, every time.",
    sub: "One governed profile per professional - qualifications, sector experience, engagement history - exported consistently for every proposal and framework submission.",
    keyPoints: [
      {
        title: "Credentials and sector experience as searchable data",
        body: "Qualifications, licenses, and sector tags are structured fields, not lines in a Word file. When the engagement needs a financial-services audit partner with public-interest-entity experience, the search answers in seconds - across every office, not just the one assembling the proposal.",
        screenshotAlt: "Firm-wide search filtered to audit partners with financial services and PIE experience, showing 5 results with qualification badges",
      },
      {
        title: "Every proposal reads as one firm",
        body: "All CVs export through the same firm template, whoever assembles them and wherever they sit. The panel submission from the tax practice and the RFP response from advisory stop looking like they came from different firms.",
        screenshotAlt: "Four professional CVs from different service lines rendered in one consistent firm template",
      },
      {
        title: "Governance your risk team will accept",
        body: "Role-based access controls who can view and edit profiles, and audit logs record every change with who and when. When someone asks how CV data is governed, there is an actual answer instead of a SharePoint permissions guess.",
        screenshotAlt: "Audit log showing profile edits with user, field, and timestamp, next to role-based access settings",
      },
      {
        title: "Cross-border engagements in the client's language",
        body: "Translate any CV into the engagement's working language while the firm template stays intact. Multi-country proposals stop needing a separate translation pass per member firm.",
        screenshotAlt: "Advisory partner CV shown in English and German versions in identical firm branding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can we track professional qualifications and license dates on each profile?",
        answer:
          "Yes - qualifications are structured fields with dates, updated once and reflected in every CV generated afterward. That ends the pre-submission scramble to confirm whose credentials are stated correctly.",
      },
      {
        question: "How is access to professional data governed across the firm?",
        answer:
          "Role-based access defines who can view, edit, and export profiles - for example, proposal teams can generate CVs without editing rights over the underlying data. Audit logs record every change, which satisfies most internal risk reviews.",
      },
      {
        question: "Is MagicCV SOC 2 certified?",
        answer:
          "SOC 2 certification is in progress, not complete - we won't claim otherwise. What's in place today: GDPR-by-design architecture, EU data residency, audit logs, role-based access, and SSO plus a DPA on Enterprise. The Trust Center has the current status.",
      },
      {
        question: "Where is the data stored, and is there a DPA?",
        answer:
          "Data is stored in the EU with GDPR-by-design handling. A DPA is part of the Enterprise plan, alongside SSO - the usual requirements when a firm's own compliance function reviews a new tool.",
      },
      {
        question: "How do we migrate CVs that live in each office's own drive?",
        answer:
          "Upload them as Word or PDF and MagicCV parses each into a structured profile. The realistic path is one practice group at a time: import, have professionals confirm their own profile via chat-based editing, then switch that group's proposals over.",
      },
      {
        question: "Can we keep our firm's existing CV template?",
        answer:
          "Yes. Your template is recreated once - layout, typography, section order - and every export matches it in Word or PDF. Firms in networks often keep the network-standard template alongside their local one.",
      },
      {
        question: "How is this different from our ATS or HR system?",
        answer:
          "Those systems manage recruitment and employment; neither produces a proposal-ready partner CV. MagicCV is CV management software for the client-facing layer - the credentialed team pages that go into panel submissions, RFPs, and engagement letters.",
      },
      {
        question: "What does pricing look like for a 100-person firm?",
        answer:
          "Pro at $50/month covers 200 profiles and 600 generated CVs, which fits most mid-market firms. Enterprise is custom-priced for unlimited usage, SSO, and a DPA - typically where multi-office firms land once risk and IT sign off.",
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
      "In public procurement, the CV is a compliance artifact before it is a sales document. The tender mandates a CV template in the annex, caps page counts, requires blind versions for evaluation, and wants the submission in two languages - and a single non-compliant CV can get an otherwise winning bid set aside. Teams that bid into frameworks know the drill: the same 15 experts, reformatted again for every call-off, with the anonymization done by hand in Word and checked twice because nobody trusts find-and-replace.\n\nMagicCV treats those requirements as the default, not the edge case. Master profiles export into whatever standardized template the buyer mandates; anonymization is one click, not an evening; translation into DE, FR, NL, or any tender language keeps the layout intact. Underneath, GDPR-by-design and EU data residency mean the tool holding your experts' personal data stands up to the same scrutiny your bid does.",
    h1: "Pass the CV compliance check the first time, in every tender.",
    sub: "Standardized templates, one-click blind CVs, multilingual output, and GDPR-by-design - the CV workflow EU and government procurement actually demands.",
    keyPoints: [
      {
        title: "The buyer's mandated template, exported not imitated",
        body: "Recreate the tender's required CV structure as a template - EU-standard formats included - and export every expert's CV directly into it. Compliance checks stop turning up formatting deviations at the worst possible moment.",
        screenshotAlt: "Expert CV exported in an EU tender's mandated standardized template with required section order",
      },
      {
        title: "Blind CVs in one click, not one evening",
        body: "Anonymization strips names, photos, and identifying details in a single step while preserving qualifications and project evidence. The blind set for evaluation and the named set for contracting come from the same profiles, so they can't contradict each other.",
        screenshotAlt: "Side-by-side view of a named CV and its anonymized version for blind evaluation",
      },
      {
        title: "Every tender language from one master profile",
        body: "Generate the DE, FR, or NL version of any CV with the layout untouched. Bilingual submissions stop doubling the preparation work, and the language versions stay in sync because they share one source.",
        screenshotAlt: "One expert CV rendered in German, French, and Dutch versions in the same standardized format",
      },
      {
        title: "Data handling that survives buyer scrutiny",
        body: "EU data residency, GDPR-by-design processing, audit logs, and role-based access - answers you can quote when the buyer's questionnaire asks how expert data is handled. Enterprise adds SSO and a DPA.",
        screenshotAlt: "Trust settings showing EU data residency, audit log, and access controls for a public-sector workspace",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can MagicCV produce CVs in the standardized formats EU tenders mandate?",
        answer:
          "Yes - mandated structures are set up as templates and every CV exports directly into them, in Word or PDF. Firms bidding into multiple frameworks keep one template per buyer, so the right format is a selection, not a rebuild.",
      },
      {
        question: "What exactly does anonymization remove?",
        answer:
          "Names, photos, contact details, and identifying references, while qualifications, experience, and project evidence stay intact. You review the blind CV before submission, and the named master profile is never modified.",
      },
      {
        question: "Does translation hold up for formal tender submissions?",
        answer:
          "Translations keep the mandated layout intact and generate from structured profile data, which avoids the drift you get when language versions are maintained as separate Word files. For high-stakes submissions, most teams have a native speaker do a final read - the point is that they review, not retype.",
      },
      {
        question: "Where is our experts' personal data stored?",
        answer:
          "In the EU, with GDPR-by-design handling, audit logs, and role-based access. Enterprise includes SSO and a DPA. The Trust Center carries the current, factual picture - including SOC 2 status, which is in progress.",
      },
      {
        question: "We resubmit the same experts for every framework call-off. Does that get easier?",
        answer:
          "Substantially. Master profiles stay current between call-offs, so responding to a mini-competition means selecting the experts, applying the framework's template, and reviewing - instead of resurrecting last quarter's Word files and re-checking every date.",
      },
      {
        question: "Can we manage CVs from consortium or subcontractor experts?",
        answer:
          "Yes - upload their CVs in any format and they become structured profiles alongside your own, exported in the same compliant template. Access controls keep external profiles ring-fenced outside the bid if needed.",
      },
      {
        question: "What happens if we exceed the plan limits mid-tender?",
        answer:
          "Free covers 10 profiles and 30 CVs; Pro ($50/month) covers 200 profiles and 600 CVs, which absorbs a heavy tender season for most firms. Enterprise removes limits and adds SSO and a DPA - the fit for firms where procurement volume or IT policy demands it.",
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
      "A candidate's Word CV arrives at 4pm. The client wants submittals in their format - branded, blind, two pages - by tomorrow morning, and this is the third client this week with a different template. So the recruiter spends the evening reformatting instead of sourcing, and the submittal still goes out with the candidate's name in a header someone forgot to check. In specialist placement, the submittal is the product the client actually sees; when it looks rushed, the agency looks interchangeable.\n\nMagicCV turns the incoming CV into a structured candidate profile in one import - Word, PDF, or LinkedIn. From there, the client-formatted, agency-branded submittal is an export: pick the client's template, apply one-click anonymization if the process is blind, translate if the role sits in another market. The candidate database underneath stays searchable by skills, sector, and language, so the next brief starts from candidates you already have, not from a fresh LinkedIn trawl.",
    h1: "Client-ready candidate submittals out the same day, in every client's format.",
    sub: "Import any candidate CV, export a branded, blind-ready submittal in the exact format each client requires - and keep a searchable candidate database underneath.",
    keyPoints: [
      {
        title: "From raw CV to client submittal in minutes",
        body: "Import the candidate's CV as it arrives and export it in the client's required submittal format, under your agency's brand. The evening reformatting session becomes a review pass, and per-client templates mean the third client's format is a dropdown choice, not a rebuild.",
        screenshotAlt: "Raw candidate CV beside the same candidate exported as a two-page branded client submittal",
      },
      {
        title: "Blind submittals without the find-and-replace ritual",
        body: "One click removes names, photos, and contact details while keeping the experience evidence the client needs to shortlist. No more manually scrubbing headers and file properties and hoping nothing slipped through.",
        screenshotAlt: "Anonymized candidate submittal with identifying details removed and skills summary intact",
      },
      {
        title: "A candidate database you can actually search",
        body: "Every imported CV becomes a structured profile, searchable by skills, sector, languages, and certifications. When a client briefs a role, the first pass is a search of candidates you already know - often faster than sourcing from zero.",
        screenshotAlt: "Candidate database filtered to SAP consultants with German, showing 9 profiles with skill and language tags",
      },
      {
        title: "Cross-border placements in the client's language",
        body: "Translate a candidate's CV into the client's language with the submittal layout intact. Placing a Warsaw-based developer with a German client stops requiring an external translation step on a 24-hour clock.",
        screenshotAlt: "Candidate submittal shown in English and German versions in the same agency-branded format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is MagicCV a fit for high-volume commodity recruitment?",
        answer:
          "No, and we'd rather say so upfront. MagicCV is built for specialist and professional placement, where each submittal is tailored and CV quality influences the fee. If you're moving hundreds of near-identical CVs a week, a volume tool serves you better.",
      },
      {
        question: "Does MagicCV replace our ATS?",
        answer:
          "No - your ATS keeps owning pipeline, stages, and client records. MagicCV owns the document layer the ATS is weak at: turning raw CVs into polished, client-formatted, blind-ready submittals. CVs move between the two as Word or PDF files.",
      },
      {
        question: "Can we set up a different submittal template per client?",
        answer:
          "Yes. Each client's required format - branding, structure, page count - lives as its own template, and exporting to it is one selection. Agencies serving MSP or enterprise accounts with strict submittal specs typically keep one template per account.",
      },
      {
        question: "How reliable is the anonymization for blind submittals?",
        answer:
          "It's systematic rather than manual: names, photos, and contact details are stripped from the structured profile data, not painted over in a document, so there's no header or file-property for a name to hide in. You still review before sending - it's your client relationship.",
      },
      {
        question: "How do we handle candidate data under GDPR?",
        answer:
          "MagicCV is GDPR-by-design with EU data residency, audit logs, and role-based access - relevant when you hold thousands of candidate profiles you don't employ. Profiles can be deleted cleanly when consent lapses, and Enterprise adds a DPA.",
      },
      {
        question: "Can we import candidates from LinkedIn?",
        answer:
          "Yes - LinkedIn profile exports import the same way Word and PDF CVs do, parsing into structured profiles. That ends the copy-paste step between a sourced profile and a presentable submittal.",
      },
      {
        question: "Our candidate database grows fast. What are the limits?",
        answer:
          "Free covers 10 profiles and 30 CVs - enough to test the submittal workflow on live roles. Pro ($50/month) covers 200 profiles and 600 CVs, which suits a specialist desk focused on active candidates. Agencies holding larger pools move to Enterprise for unlimited profiles, SSO, and a DPA.",
      },
    ],
    note: "MagicCV is built for specialist and professional placement - roles won on submittal quality - not high-volume commodity staffing.",
    related: [
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV for Specialist Staffing & Talent Agencies",
      description:
        "Format, brand, and anonymize candidate profiles for every client submission - in minutes, in any language.",
      keywords: ["staffing agency CV formatting", "candidate CV anonymization tool"],
    },
  },
];

export function getIndustry(slug: string): IndustryPage | undefined {
  return industries.find((i) => i.slug === slug);
}
