import type { RolePage } from "./types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales and business-development leads at consulting and IT services firms who own win rate - and who end up owning CV prep every time a deadline gets close.",
    h1: "Take the CV scramble out of bid management.",
    sub: "MagicCV handles the CV side of bid management for consulting sales teams: consultant packs matched to the RFP, tailored to what the evaluators score, and exported on your template before the deadline gets tense.",
    pain: {
      quote: "The tender closes at 9am. It's 11pm and I'm reformatting the twelfth CV because the partner just sent me final_v3_JS_edit.docx.",
      answer: "Upload the RFP or brief and MagicCV reads its requirements, surfaces the best-fit consultants from your bench, reshapes each CV around what the evaluation criteria actually reward, and exports the whole pack on your brand template as PDF or Word. The night-before rebuild becomes a 15-minute review.",
      proofPoints: [
        "AI reads the RFP - including the 40-page annex - and tailors each CV to its stated requirements",
        "Skills search across the whole bench: skills, sectors, languages, certifications",
        "Pixel-consistent PDF and Word exports on your brand template, so every submission looks like one firm",
        "One current profile per person - no more starting from whichever version a partner kept",
      ],
    },
    featureRows: [
      {
        title: "Find the right consultants while competitors are still reading the RFP",
        body: "Search the bench by skills, sectors, languages, and certifications instead of emailing practice leads and waiting. What used to be two days of \"who do we have for this?\" becomes a filtered list you can shortlist from in one sitting.",
        screenshotAlt: "Skills search filtered to consultants with AWS certification, public-sector experience, and French, showing 6 matches",
      },
      {
        title: "Every CV reshaped around what the evaluators score",
        body: "MagicCV reads the brief and reorders each consultant's profile so the relevant projects and skills lead. The energy-sector migration goes on page one for the utilities bid; the generic summary paragraph stops costing you evaluation points.",
        screenshotAlt: "Side-by-side view of a consultant CV before and after tailoring against an RFP's evaluation criteria",
      },
      {
        title: "A submission-ready pack in minutes, not a lost evening",
        body: "Select the shortlist, pick the template, export. Twelve tailored CVs come out as one consistent PDF or Word pack, formatted identically. CV prep stops being the item on the bid plan that everyone quietly pads by two days.",
        screenshotAlt: "Export dialog generating a 12-CV proposal pack on a firm brand template with a progress indicator",
      },
      {
        title: "One profile per person, so rogue versions die out",
        body: "Consultants and partners update the central profile - through chat-based editing, not tracked changes in a Word file. Every export is generated from that profile, which means the version a partner keeps on his desktop stops turning up in submissions.",
        screenshotAlt: "Consultant profile showing last-updated date and a chat-based edit adding a recent engagement",
      },
    ],
    stats: [
      { value: "1 day → 15 min", label: "from RFP received to submission-ready CV pack", isPlaceholder: true },
      { value: "+18%", label: "win rate on bids with tailored CVs", isPlaceholder: true },
    ],
    includeRoiTeaser: true,
    faqs: [
      {
        question: "How do I stop partners keeping their own CV versions?",
        answer: "By making the central profile the only thing exports come from. In MagicCV each person has one structured profile; partners update it with chat-based editing instead of maintaining a private Word file. When the pack is always generated fresh from the profile, the private final_v3.docx has nothing to be pasted into.",
      },
      {
        question: "Can MagicCV actually read a full RFP, or do I paste requirements in by hand?",
        answer: "Upload the RFP or brief itself. The AI reads it, extracts what the evaluation is asking for, and reshapes each selected CV around those requirements. You review the result rather than doing the interpretation yourself - and you can still adjust anything before export.",
      },
      {
        question: "Is this a full bid management platform or just the CV part?",
        answer: "Just the CV part - deliberately. MagicCV doesn't manage your bid pipeline, pricing, or document assembly; it removes the CV bottleneck inside your existing bid management process. Most teams run it alongside whatever they already use for the rest of the proposal.",
      },
      {
        question: "We have a house Word template the brand team signed off. Can we keep it?",
        answer: "Yes. Your template becomes a brand template in MagicCV, and every export renders to it pixel-consistently in PDF or Word. You can hold multiple templates - house style plus client- or framework-specific formats - and switch per export.",
      },
      {
        question: "Our consultant CVs live in SharePoint folders. How do we get started?",
        answer: "Import them as they are. MagicCV accepts Word, PDF, and LinkedIn exports and parses each into a structured profile, one per person. There's no retyping project; the messy folder is the input, not a blocker.",
      },
      {
        question: "Some frameworks require blind evaluation. Can we submit anonymized CVs?",
        answer: "Yes - anonymization is one click. MagicCV strips names, photos, and identifying details and exports a blind CV on the same template, so competitive and framework submissions that require it don't need a separate manual pass.",
      },
      {
        question: "How fast can we realistically turn a pack around before a deadline?",
        answer: "Once profiles are in, a tailored pack is minutes of machine time plus your review. The honest constraint is profile quality: if a consultant's profile is current, their tailored CV is too. The AI keeps profiles easy to update, but it can't invent an engagement nobody recorded.",
      },
      {
        question: "What does this cost for a bid team?",
        answer: "Free covers 10 profiles and 30 CV exports - enough to run a real bid through it. Pro is $50/month for 200 profiles and 600 CVs, which fits most mid-size consultancies. Enterprise adds unlimited scale, SSO, and a DPA at custom pricing.",
      },
    ],
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
    reader: "Recruitment and resourcing leads at consulting and staffing firms who keep consultant profiles current and answer every \"who do we have for this?\" request - usually on a deadline someone else set.",
    h1: "A candidate database that stays current without the Friday chase.",
    sub: "MagicCV turns the CVs scattered across inboxes and drives into one searchable candidate database - structured profiles you can search by skill, tailor to a brief, and export in any format without chasing anyone.",
    pain: {
      quote: "I sent the CV update reminder three weeks ago. Two consultants replied. One of them sent a PDF from 2023.",
      answer: "MagicCV gives every person one structured profile and lets the AI do the tedious part: it parses whatever a consultant sends - Word, PDF, a LinkedIn export - and updates the profile from it. You search the database and export the format the request needs, instead of chasing files and reformatting them by hand.",
      proofPoints: [
        "Import any CV format - Word, PDF, LinkedIn - into one structured profile per person",
        "AI parses updates from whatever consultants send, no manual re-entry",
        "Search the whole bench by skills, sectors, languages, and certifications",
        "One-click anonymization for blind client submissions",
      ],
    },
    featureRows: [
      {
        title: "One profile per person, whatever they send you",
        body: "Drop in the Word file, the PDF, or the LinkedIn export and MagicCV parses it into a structured profile. New joiner CVs stop sitting in your inbox waiting for a quiet afternoon that never comes.",
        screenshotAlt: "Import screen parsing a Word CV and a LinkedIn PDF into one structured consultant profile",
      },
      {
        title: "Answer \"who do we have with SAP and German?\" in seconds",
        body: "The skills matrix covers your whole bench: skills, sectors, languages, certifications. A staffing request becomes a search and a shortlist, not a Friday afternoon of Slack messages to practice leads.",
        screenshotAlt: "Candidate database filtered to 8 consultants matching SAP, German, and manufacturing sector experience",
      },
      {
        title: "Any output the request needs, from the same profile",
        body: "Client wants their own format? Bid team wants the house template? Generate either from the current profile - and translate it into the client's language with the layout intact. One profile, every format, zero copy-paste.",
        screenshotAlt: "Export options for one profile: house template PDF, client Word format, and a German translation",
      },
      {
        title: "Blind CVs for client submission in one click",
        body: "When a client or framework requires blind recruitment, anonymize the CV in one click - name, photo, and identifying details removed, layout untouched. No more manually scrubbing twelve documents the night before submission.",
        screenshotAlt: "Anonymized consultant CV next to the original, with name and photo replaced by a candidate code",
      },
    ],
    stats: [
      { value: "6 hrs", label: "saved per week on chasing and reformatting CVs", isPlaceholder: true },
    ],
    faqs: [
      {
        question: "Can candidates' CVs be anonymized for client submission?",
        answer: "Yes, in one click. MagicCV removes names, photos, and identifying details and exports a blind CV on the same template, so submissions that require blind recruitment don't need a manual scrubbing pass. The original profile stays untouched.",
      },
      {
        question: "How do we keep 200 consultant CVs up to date without chasing people?",
        answer: "Lower the cost of updating to near zero. Consultants send whatever they have - a marked-up Word file, a LinkedIn export - and the AI parses it into their profile; edits can also happen through chat. You stop being the person who retypes updates, which is most of why updates never happened.",
      },
      {
        question: "What happens to the CVs we already have in SharePoint and old inboxes?",
        answer: "They're your import source. MagicCV parses Word, PDF, and LinkedIn files into structured profiles, one per person, so the existing pile becomes the starting database rather than a migration project. Start with the 20 people you staff most often and widen from there.",
      },
      {
        question: "How is a candidate database like this different from our ATS?",
        answer: "An ATS tracks applicants through a hiring pipeline and mostly stops mattering after the offer. MagicCV manages the people you already have: keeping their profiles current, searchable, and exportable for staffing requests and bids. Most teams run both - they answer different questions.",
      },
      {
        question: "Can we search by certifications and sector experience, not just job titles?",
        answer: "Yes. Profiles are structured data, so the skills matrix covers skills, sectors, languages, and certifications across the whole team. \"Azure-certified, financial services, Dutch-speaking\" is a filter, not an email thread.",
      },
      {
        question: "We hold a lot of personal data. How does MagicCV handle GDPR?",
        answer: "GDPR by design: EU data residency, audit logs, and role-based control over who sees what. Enterprise plans add SSO and a DPA. When someone leaves, their profile can be removed rather than lingering in forgotten folders - which is more than most shared drives can say.",
      },
      {
        question: "What does pricing look like as the database grows?",
        answer: "Free covers 10 profiles and 30 CV exports, useful for a pilot. Pro is $50/month for 200 profiles and 600 CVs. Enterprise is custom-priced with unlimited profiles, SSO, and a DPA - the usual path once resourcing runs the whole bench through it.",
      },
      {
        question: "Can consultants update their own profiles?",
        answer: "Yes - that's the point. They can edit through chat or just send a current CV for the AI to parse in, and access controls decide who can edit versus view. Updates become a two-minute task for the consultant instead of a standing item on your chase list.",
      },
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
    reader: "HR and People Ops leads who are accountable for employee data quality - and who watch CV copies multiply across shared drives, laptops, and bid folders with no way to govern any of it.",
    h1: "One governed record per consultant. No shadow copies.",
    sub: "MagicCV replaces the CV sprawl across drives, inboxes, and laptops with structured, access-controlled profiles - clean data that HR can actually govern, without adding another system people route around.",
    pain: {
      quote: "There are four versions of Anna's CV: one in SharePoint, one in last month's bid folder, one on her laptop, and one a partner rewrote himself. I couldn't tell you which is true.",
      answer: "MagicCV makes the profile the single record and every CV an export of it. Data lives as structured fields instead of freeform Word documents, role-based access controls who can see and edit what, and because every export is generated fresh from the profile, copies stop drifting into competing versions.",
      proofPoints: [
        "Structured profile fields replace freeform Word documents",
        "Role-based access: who can view, who can edit, per profile",
        "GDPR by design, with EU data residency and audit logs",
        "Every CV generated from the central profile, so exports can't drift from the record",
      ],
    },
    featureRows: [
      {
        title: "Data you can govern, not documents you can only collect",
        body: "Skills, projects, certifications, and languages live as structured fields, not prose in a .docx. You can see what's complete, what's stale, and what's missing across the whole firm - questions a folder of Word files can't answer at all.",
        screenshotAlt: "Profile completeness overview showing structured fields and last-updated dates across a team",
      },
      {
        title: "Access that matches how the firm actually works",
        body: "Consultants edit their own profile, resourcing views the bench, bid teams export - and nobody downloads a spreadsheet of everyone's career history to a laptop. Role-based access replaces the honor system of the shared drive.",
        screenshotAlt: "Role-based access settings showing view and edit permissions per team",
      },
      {
        title: "Compliance built in, not reconstructed at audit time",
        body: "GDPR by design, EU data residency, and audit logs that show who accessed and changed what. When a consultant leaves or exercises their data rights, you act on one record - not a search across five drives and everyone's sent mail.",
        screenshotAlt: "Audit log listing profile access and edit events with timestamps and user names",
      },
      {
        title: "One system, not another parallel one",
        body: "MagicCV doesn't try to replace your HRIS - it takes over the CV problem the HRIS was never built for. Personio, BambooHR, and HiBob integrations are on the roadmap to keep profiles in sync automatically; today, import from Word, PDF, or LinkedIn gets existing CVs in without retyping.",
        screenshotAlt: "Settings panel showing CV import options and planned HRIS integrations marked as roadmap",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is MagicCV GDPR-compliant, and where is our data stored?",
        answer: "MagicCV is built GDPR-by-design with EU data residency, audit logs, and role-based access control. Enterprise plans include a DPA. Consultant data stays in one governed system instead of scattering across drives and inboxes - which is where most CV-related GDPR risk actually lives.",
      },
      {
        question: "Do you have SOC 2?",
        answer: "SOC 2 certification is in progress - we won't claim it before it's complete. What's in place today: GDPR-by-design data handling, EU data residency, audit logs, and SSO plus a DPA on Enterprise. Ask us for the current status when you evaluate.",
      },
      {
        question: "How do we control who can see and edit consultant profiles?",
        answer: "Role-based access, set per group: consultants typically edit their own profile, resourcing and bid teams get view and export rights, HR administers the lot. The audit log records who viewed and changed what, so governance is verifiable rather than assumed.",
      },
      {
        question: "Does this duplicate our HRIS?",
        answer: "No - it covers what the HRIS doesn't. Your HRIS holds contracts, payroll, and absence; it has no structured model of project experience, skills, and client-ready CVs. MagicCV owns that layer, and HRIS integrations (Personio, BambooHR, HiBob) are on the roadmap to keep core fields in sync automatically.",
      },
      {
        question: "What happens to someone's data when they leave the firm?",
        answer: "There's one record to act on. Remove or retain the profile according to your policy, with the audit log documenting what happened. Compare that to the status quo, where a leaver's CV survives indefinitely in bid folders and personal drives nobody remembers.",
      },
      {
        question: "How do we migrate CVs out of the shared drives without a data-entry project?",
        answer: "Import the files as they are - Word, PDF, LinkedIn exports. The AI parses each into a structured profile, one per person, and flags what it couldn't fill so owners can complete the gaps. The work becomes review, not retyping.",
      },
      {
        question: "Is there SSO?",
        answer: "Yes, on the Enterprise plan, alongside a DPA and unlimited profiles. Free (10 profiles) and Pro ($50/month, 200 profiles) use standard sign-in - fine for a pilot, while Enterprise is the fit once IT and compliance requirements enter the picture.",
      },
      {
        question: "Will consultants actually use it, or is this another system they ignore?",
        answer: "The update path is deliberately low-effort: send a current CV and the AI parses it in, or make edits through chat. Consultants get something back - a polished, on-brand CV on demand - which is more incentive than any HR data system usually offers them.",
      },
    ],
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
    reader: "Delivery, engagement, and practice leads who staff projects and owe the client CVs at proposal stage and kickoff - on top of actually running the work.",
    h1: "Kick off every engagement without the CV scramble.",
    sub: "MagicCV gets delivery leads client-ready consultant CVs - matched to the requirements, in the client's format and language - without pulling billable people onto document admin the week before kickoff.",
    pain: {
      quote: "Kickoff is Monday. The client wants five CVs in their procurement template, in French, and half the team's CVs still end at their 2023 projects.",
      answer: "MagicCV keeps one current profile per consultant and generates the client-facing CV from it on demand: matched to the engagement's requirements, rendered in your template or the client's, translated with the layout intact, anonymized if the tender demands it. Staffing paperwork stops competing with delivery time.",
      proofPoints: [
        "Search the bench by skills, sectors, certifications, and languages against the client's requirements",
        "Export in your house template or the client's required format, pixel-consistent",
        "Translate CVs into any language with the layout preserved",
        "One-click anonymization for blind or competitive submissions",
      ],
    },
    featureRows: [
      {
        title: "Staff from evidence, not from memory",
        body: "Search the whole bench against what the engagement actually needs - the certification the client insists on, the sector experience, the language. The shortlist comes from data, not from whoever the practice lead happened to remember on a Friday call.",
        screenshotAlt: "Bench search matching an engagement's requirements, showing consultants ranked by skills and certification fit",
      },
      {
        title: "The client's format without the manual rework",
        body: "Government procurement grid, enterprise vendor template, or your own house style - store each as a template and export any consultant's CV into it directly. The two hours per CV of copy-pasting into the client's table structure goes away.",
        screenshotAlt: "One consultant profile exported into a government procurement CV template and a firm-branded PDF",
      },
      {
        title: "Cross-border delivery in the client's language",
        body: "Translate a CV into the engagement language with the layout and template intact. The Paris kickoff gets French CVs, the Stockholm framework gets Swedish ones, and nobody rebuilds documents by hand in either office.",
        screenshotAlt: "The same consultant CV shown in English and French with identical layout and branding",
      },
      {
        title: "Blind profiles when the tender demands it",
        body: "Competitive tenders and some frameworks require CVs without names or photos. Anonymization is one click on the same profile and template, so the blind pack is a variant of your normal export - not a separate late-night editing job.",
        screenshotAlt: "Anonymized CV for a tender submission with name and photo replaced by a role code",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can we export CVs in a client's required template, like a government procurement format?",
        answer: "Yes. Add the client's format as a template alongside your house style, and any consultant's CV exports into it pixel-consistently as PDF or Word. Tender-driven firms typically keep a small library: house brand, two or three framework formats, and a blind variant.",
      },
      {
        question: "Does translation keep the layout, or do we get a wall of text to reformat?",
        answer: "The layout survives. MagicCV translates the CV content into any language while keeping the template, structure, and branding intact - so the French version of a CV looks exactly like the English one, just in French.",
      },
      {
        question: "Can I search for consultants by certification and sector, not just role?",
        answer: "Yes. Profiles are structured, so the skills matrix covers certifications, sectors, languages, and skills across the whole bench. \"PRINCE2-certified, utilities experience, available in the Nordics\" is a filter you run, not a question you circulate.",
      },
      {
        question: "How do we make sure CVs are actually current at kickoff?",
        answer: "Each consultant has one profile, and updating it is cheap: they send a recent CV for the AI to parse, or edit through chat between projects. Because client CVs are generated from the profile rather than dug out of folders, kickoff uses whatever is current - not whatever was last exported.",
      },
      {
        question: "Can we anonymize CVs for competitive tenders?",
        answer: "One click. Names, photos, and identifying details come out; the template and structure stay. It's the same profile and export flow, so blind submissions don't add a separate manual workstream the week before the deadline.",
      },
      {
        question: "Is this another tool my delivery teams have to maintain?",
        answer: "The maintenance burden is the point of removing. Consultants touch it briefly between engagements to keep their profile current - by sending a CV or chatting an update - and delivery leads use it when staffing. There's no ongoing document housekeeping, because documents are outputs, not the storage.",
      },
      {
        question: "Can one practice start without a firm-wide rollout?",
        answer: "Yes, and it's the common path. The Free plan covers 10 profiles and 30 CV exports - enough for one team to run a real engagement through it. Pro at $50/month covers 200 profiles; Enterprise adds SSO, a DPA, and unlimited scale when the rest of the firm follows.",
      },
    ],
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
