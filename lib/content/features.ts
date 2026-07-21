import type { FeaturePage } from "./types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-to-CV reasoning",
    h1: "The RFP lands Friday afternoon. Your CVs are shaped around it by Monday morning.",
    sub: "MagicCV reads the brief, extracts the win conditions, and reworks each consultant's CV to match - built for bid teams tailoring 10+ CVs per submission.",
    whatItDoesBody:
      "Every bid manager knows the drill. The RFP arrives with a 40-page annex, the evaluation criteria are buried in section 7, and someone has to reshape a dozen consultant CVs around requirements the CVs were never written for. So you open final_v3_JS_edit.docx, start moving bullet points around by hand, and hope you didn't miss the mandatory certification listed on page 23. Multiply that by 12 CVs and a Thursday deadline, and tailoring is the task that eats the week.\n\nMagicCV starts from the brief instead of the template. Upload the RFP - the full document, the criteria sheet, or a short summary - and it extracts the required skills, certifications, and evaluation criteria. Then it rewrites each selected consultant's CV from their structured profile, pulling forward the projects and experience that answer the brief and trimming what doesn't. Every claim traces back to a fact in the source profile; nothing is invented to fit. You review, adjust anything through chat-based editing, and export on your template.",
    benefits: [
      {
        title: "The requirements surfaced before you finish reading the cover page",
        body: "Upload the RFP and MagicCV pulls out required skills, mandatory certifications, and evaluation criteria - the same list an experienced bid manager builds by hand, without the highlighter pass through the annex.",
        screenshotAlt: "Brief analysis panel listing 9 extracted requirements and 3 evaluation criteria from an uploaded 40-page RFP PDF",
      },
      {
        title: "Twelve tailored CVs from one brief, not twelve editing sessions",
        body: "Select the consultants on the bid and MagicCV reworks each CV against the extracted requirements - reordering projects, adjusting emphasis, and cutting irrelevant detail. What used to be an evening per CV becomes a review pass per CV.",
        screenshotAlt: "Batch view of 12 consultant CVs regenerated against one RFP, each marked ready for review",
      },
      {
        title: "Every sentence traceable, nothing fabricated",
        body: "Generated CVs only re-emphasize and reorder experience that already exists in the consultant's profile. Each claim links back to its source, so you can defend every line in front of an evaluation panel.",
        screenshotAlt: "Generated CV with a claim highlighted and its source entry shown in the consultant's profile",
      },
      {
        title: "A human in the loop whenever you want one",
        body: "Turn on conservative do-not-generate mode and MagicCV flags the relevant experience for your review instead of writing the CV outright. Or generate first and fine-tune wording through chat before anything leaves the building.",
        screenshotAlt: "Conservative mode toggle with flagged experience suggestions awaiting reviewer approval",
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
          "No. RFP-to-CV reasoning only re-emphasizes and reorders real experience from the consultant's source profile. Every claim in a generated CV traces back to that profile, so if a project isn't in the profile, it won't appear in the CV.",
      },
      {
        question: "What do I upload - the full RFP or a summary?",
        answer:
          "Whatever you have. A full RFP with annexes, an evaluation criteria sheet, or three paragraphs pasted from the client's email all work. MagicCV extracts requirements from the document you give it; more detail simply means a sharper match.",
      },
      {
        question: "How long does it take to tailor a full team pack for one bid?",
        answer:
          "Extraction runs in minutes, and each CV regenerates on demand from the consultant's profile. For a typical 10-12 person submission, the work shifts from a day of manual editing to a review pass - reading each CV and adjusting wording through chat where needed.",
      },
      {
        question: "Can someone review the output before it goes to the client?",
        answer:
          "Yes, and we recommend it. Use chat-based editing to adjust any section, or switch on conservative do-not-generate mode so MagicCV surfaces relevant experience for approval instead of writing the CV automatically. You decide how much autonomy the AI gets.",
      },
      {
        question: "Do tailored CVs come out in our template?",
        answer:
          "Yes. Tailoring changes the content; your brand template controls the presentation. Every generated CV exports as a pixel-consistent PDF or Word file in your house style, or in a client-specific template if the tender demands one.",
      },
      {
        question: "How is this different from pasting a CV and an RFP into ChatGPT?",
        answer:
          "A general chatbot has no memory of your team and no guardrails - it will happily invent a certification to fit the brief. MagicCV works from structured profiles, keeps every claim traceable to its source, applies your template on export, and does it for 12 consultants at once instead of one paste job at a time.",
      },
      {
        question: "What happens to the RFPs and CV data we upload?",
        answer:
          "MagicCV is built GDPR-by-design with EU data residency, and Enterprise plans include a DPA and audit logs. Your briefs and profiles stay your data. The Trust Center covers data handling, retention, and processing in detail.",
      },
    ],
    related: [
      { label: "Tailor CVs to every brief", href: "/use-cases/tailor-cvs" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "RFP-to-CV reasoning - MagicCV's AI-native engine",
      description:
        "MagicCV reads the brief, understands the win conditions, and reshapes each consultant CV to match - without fabricating experience.",
      keywords: ["AI CV for RFP", "RFP to CV tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Brand-consistent exports",
    h1: "Never send an off-brand CV again.",
    sub: "Set your template once and every consultant CV exports as a pixel-consistent PDF or Word file - no more Thursday-night reformatting before a submission.",
    whatItDoesBody:
      "Ask any proposal manager what the CV pack looked like before the last deadline: three consultants still on the 2019 template, one partner who keeps a personal version with his own fonts, and a contractor's CV in Calibri when the brand guide says otherwise. Fixing it means reformatting 12 documents by hand the night before submission - and the client still spots the one page where the logo sits 5mm too low.\n\nWith MagicCV, presentation is separated from content. You define the template once - fonts, colors, logo placement, section layout - and every CV generated from a consultant's profile inherits it automatically. Exports come out as submission-ready PDF or Word files, identical to the pixel across the whole pack. When a client or a government tender mandates its own format, you switch templates for that bid without touching the underlying profile data, and switch back when it's done.",
    benefits: [
      {
        title: "One template, zero drift",
        body: "Define your firm's visual identity once and every CV inherits it on export. The partner's personal version, the 2019 layout, the wrong-font contractor CV - all replaced by one source of formatting truth.",
        screenshotAlt: "Brand template editor showing font, color, and logo settings applied to a live CV preview",
      },
      {
        title: "Client and tender formats without rebuilding anything",
        body: "Keep your house style as the default and add client-specific or tender-mandated templates alongside it. Reformatting a 12-person pack for a government framework becomes a template switch, not a week of copy-paste.",
        screenshotAlt: "Template picker showing a house-style template next to a client-mandated tender format for the same consultant",
      },
      {
        title: "Submission-ready PDF and Word, from the same source",
        body: "Export any CV or full team pack to PDF or DOCX. Both come from the same template system, so the Word file a client asks to edit matches the PDF you submitted.",
        screenshotAlt: "Export dialog with PDF and Word options for an 8-consultant proposal pack",
      },
      {
        title: "Rebrand once, update every CV",
        body: "Content lives in profiles; presentation lives in the template. Change the logo or color palette after a rebrand and every future export - across 200 profiles - picks it up immediately, with nothing to chase down.",
        screenshotAlt: "Updated brand colors propagating across a grid of consultant CV previews",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Can we keep our existing Word template?",
        answer:
          "Yes - recreate your current layout in MagicCV's template system, including fonts, colors, logo placement, and section order. From then on, every CV exports in that format automatically instead of depending on whoever formatted the document last.",
      },
      {
        question: "Can we use a different template for a specific client or tender?",
        answer:
          "Yes. Your house style stays the default, and you add client-specific or tender-specific templates alongside it. Switching a whole CV pack to a mandated format is a template selection, not a manual rework - the profile data underneath never changes.",
      },
      {
        question: "What export formats are supported?",
        answer:
          "PDF and Word (DOCX), both generated from the same template system. The Word version matches the PDF, so you can submit one and hand the other to a client who insists on editing.",
      },
      {
        question: "Can consultants break the formatting when they update their CV?",
        answer:
          "No. Consultants update the content of their profile - projects, skills, certifications - while the template controls presentation. There's no document for them to reformat, so the pack stays consistent no matter who edited what.",
      },
      {
        question: "What happens when we rebrand?",
        answer:
          "Update the template once - new logo, colors, fonts - and every CV exported from that point on uses the new identity. You skip the usual rebrand cleanup of hunting old-template CVs out of SharePoint folders for months.",
      },
      {
        question: "Is template-based export available on every plan?",
        answer:
          "Yes. On-brand PDF and Word export works on Free, Pro, and Enterprise. Plans differ in scale: Free covers 10 profiles and 30 CVs total, Pro covers 200 profiles and 600 CVs per month, and Enterprise is unlimited.",
      },
      {
        question: "Do translated or anonymized CVs keep the same template?",
        answer:
          "Yes. Translation and anonymization change the content layer only - the exported file keeps your fonts, layout, and branding. A blind CV for a tender looks exactly like your standard CV, minus the identifying details.",
      },
    ],
    related: [
      { label: "Design & creative agencies", href: "/solutions/design-agencies" },
      { label: "Build a proposal-ready CV pack", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Brand-consistent CV templates & exports",
      description:
        "Your fonts, colors, and layout applied automatically to every consultant CV and proposal pack. PDF and DOCX export.",
      keywords: ["branded CV template tool", "consistent consultant CVs"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonymization & GDPR",
    h1: "Blind CVs in one click, not one evening of manual redaction.",
    sub: "One-click anonymization for public tenders, blind recruitment processes, and competitive bids - the same rules applied to every CV, every time.",
    whatItDoesBody:
      "The tender says candidate CVs must be anonymized. So the night before submission, someone works through 14 documents deleting names, photos, and employer references by hand - and misses the consultant's surname in a page footer, or the client name buried in a project description on page 3. One missed field can void a submission in a blind evaluation, and manual redaction gives you 14 chances to miss one.\n\nMagicCV makes anonymization a property of the export, not a task. Toggle it on any CV or full team pack and identifying details are stripped according to rules you configure - names, photos, and whichever other fields your process treats as identifying. The same rules apply to every consultant, every time, so a 14-person pack is as consistent as a single CV. Underneath, MagicCV is GDPR-by-design with EU data residency; the Trust Center covers the full compliance picture.",
    benefits: [
      {
        title: "From an evening of redaction to a single toggle",
        body: "Switch on anonymization at export and names, photos, and other identifying details come out - no manual find-and-delete pass, no footer or header that slips through, no second pair of eyes needed just to catch misses.",
        screenshotAlt: "Anonymization toggle with a before/after comparison of the same consultant CV, name and photo removed",
      },
      {
        title: "Your rules decide what counts as identifying",
        body: "Blind recruitment processes and public tenders disagree about what must be hidden - some want employer names gone, some only names and photos. Configure which fields are stripped so each submission meets its specific requirement.",
        screenshotAlt: "Anonymization rule panel with field-level toggles for name, photo, employer names, and contact details",
      },
      {
        title: "Whole team packs, identical treatment",
        body: "Anonymize a 14-consultant pack for a public tender and every CV follows the same rules. In a blind evaluation, consistency is the requirement - one differently-redacted CV can identify a candidate by omission.",
        screenshotAlt: "Anonymized CV pack for a 14-consultant tender submission, all profiles showing role codes instead of names",
      },
      {
        title: "GDPR by design underneath",
        body: "Anonymization sits on top of GDPR-by-design data handling with EU data residency, audit logs, and a DPA on Enterprise. Blind CVs are one output of a system built to handle personal data properly, not a patch on one that wasn't.",
        screenshotAlt: "Trust Center overview showing EU data residency and GDPR data-handling commitments",
      },
    ],
    connectsTo: [
      { label: "Multilingual & translation", href: "/features/multilingual" },
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "What exactly gets removed when a CV is anonymized?",
        answer:
          "Names, photos, and any other fields you configure as identifying - contact details, employer names, client names in project descriptions. You control the rule set, so the output matches what your tender or blind recruitment process actually requires.",
      },
      {
        question: "Does an anonymized CV still use our template?",
        answer:
          "Yes. Anonymization strips content; the template controls presentation. A blind CV exports in the same fonts, layout, and branding as your standard CV, so the pack still looks like your firm - just without the identifying details.",
      },
      {
        question: "Can we get the identified version back after the blind evaluation?",
        answer:
          "Yes. Anonymization is applied at export and never alters the underlying profile. Once the evaluation stage passes, export the same consultant's CV with anonymization off and you have the full version - no separate documents to maintain.",
      },
      {
        question: "Is MagicCV GDPR-compliant?",
        answer:
          "MagicCV is built GDPR-by-design with EU data residency, and Enterprise plans add a DPA and audit logs. Anonymized exports are one part of that; the Trust Center covers data residency, retention, and processing in full.",
      },
      {
        question: "Is MagicCV SOC 2 certified?",
        answer:
          "SOC 2 certification is in progress - we won't claim it before it's complete. Today MagicCV offers GDPR-by-design data handling, EU data residency, SSO and a DPA on Enterprise, and audit logs. The Trust Center has the current status.",
      },
      {
        question: "Does this work for blind recruitment as well as tenders?",
        answer:
          "Yes. The same one-click anonymization covers blind recruitment screening - strip names, photos, and other bias-carrying fields before CVs reach reviewers, then share the identified version once a shortlist is agreed.",
      },
      {
        question: "How do we know every CV in a pack was anonymized the same way?",
        answer:
          "Because the rules are applied by the system, not by whoever edited each document. Every CV in the pack passes through the same configured rule set at export, so there's no per-document variance to audit the night before a deadline.",
      },
    ],
    related: [
      { label: "Anonymize CVs", href: "/use-cases/anonymize-cvs" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "CV Anonymization & Blind Recruitment Software",
      description:
        "Blind recruitment software built in: one-click anonymised CVs for tenders, competitive bids, and bias-free evaluation - with GDPR-by-design throughout.",
      keywords: ["CV anonymization", "blind recruitment software", "anonymised CV", "anonymous CV", "GDPR CV tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Multilingual & translation",
    h1: "One master profile. Every language your clients tender in.",
    sub: "Translate consultant CVs into any language with layout and branding intact - built for cross-border bids and multilingual evaluation panels.",
    whatItDoesBody:
      "A German framework tender asks for CVs auf Deutsch by Thursday. Your masters are in English, the last agency translation took three days and came back as plain text that broke the template, and the German versions someone made last year have quietly drifted out of date - the consultant's two newest projects never made it in. Now you're reconciling two documents per person under deadline pressure, in a language half the bid team doesn't read.\n\nMagicCV keeps one master profile per consultant and generates the language at export. Pick the language the bid requires and the CV comes out translated with the layout, fonts, and branding untouched - the same template, the same structure, in French, German, Dutch, or whatever the evaluation panel reads. There are no parallel documents to keep in sync: update the profile once and every language version reflects it. Wording can be adjusted through chat-based editing before anything is submitted.",
    benefits: [
      {
        title: "No parallel versions to keep in sync",
        body: "The master profile is the single source of truth. Add a new project once and the English, German, and French CVs all carry it at the next export - the quiet drift between language versions simply can't happen.",
        screenshotAlt: "One consultant profile with export buttons for English, German, and French CV versions",
      },
      {
        title: "Layout and branding survive translation",
        body: "Translation happens inside the template, not in a text file that someone re-flows afterwards. German runs about 20% longer than English, and the layout absorbs it - your fonts, logo, and section structure come through intact.",
        screenshotAlt: "Side-by-side English and German CV exports of the same consultant, identical layout in both",
      },
      {
        title: "Three-day agency turnaround becomes an export setting",
        body: "When the tender demands a language you didn't plan for, you pick it at export instead of briefing a translation agency and waiting. The Thursday deadline stops depending on someone else's queue.",
        screenshotAlt: "Language picker at CV export with a translated PDF generating for a cross-border tender",
      },
      {
        title: "Built for cross-border procurement",
        body: "Multilingual evaluation panels and cross-border frameworks are the normal case for consulting and IT services firms bidding in Europe. Combine translation with anonymization and your template for a submission-ready pack in the panel's language.",
        screenshotAlt: "Multilingual CV pack for a cross-border tender, six consultants exported in two languages",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Anonymization & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Which languages can MagicCV translate CVs into?",
        answer:
          "Any language a bid requires - the core European business languages like English, German, French, Dutch, Spanish, and Swedish are the most common among our customers, but the translation isn't limited to a fixed list. Layout and branding are preserved regardless of language.",
      },
      {
        question: "Do we need to maintain a separate profile per language?",
        answer:
          "No. Each consultant has one master profile, and language versions are generated at export. Update the profile once - a new project, a new certification - and every language version includes it the next time you export.",
      },
      {
        question: "Will translation break our CV layout?",
        answer:
          "No. Translation happens within your brand template, so fonts, logo placement, and section structure carry through. Languages that run longer than English, like German or French, are absorbed by the layout rather than pushed into a reformatting job.",
      },
      {
        question: "Can a native speaker review the translation before we submit?",
        answer:
          "Yes, and for high-stakes submissions we recommend it. Any section can be adjusted through chat-based editing before export, so a native-speaking colleague can fix a term in minutes rather than re-translating the document.",
      },
      {
        question: "How does it handle technical and domain-specific terminology?",
        answer:
          "The AI translates in context, which handles most consulting, engineering, and IT terminology well. For niche domain terms or client-preferred vocabulary, review the export and correct through chat - the fix takes minutes, not another agency round.",
      },
      {
        question: "Does the master profile have to be in English?",
        answer:
          "No. Import CVs in the language they were written in - MagicCV parses them into structured profiles either way, and you export into whichever language each bid requires.",
      },
      {
        question: "Is translation included in the price, or billed separately?",
        answer:
          "It's included. Translated exports count toward your plan's CV allowance like any other export - 30 CVs total on Free, 600 per month on Pro, unlimited on Enterprise. There's no per-word or per-language fee.",
      },
      {
        question: "Can we translate and anonymize the same CV?",
        answer:
          "Yes. Translation, anonymization, and your brand template all apply at export, so one click produces a blind German CV in your house style for a cross-border tender that requires both.",
      },
    ],
    related: [
      { label: "Translate CVs into any language", href: "/use-cases/translate-cvs" },
      { label: "Public-sector & tender-driven consultancies", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Multilingual CVs & translation",
      description:
        "Generate professional, on-brand CVs in EN, DE, FR, NL, ES and more from a single master profile.",
      keywords: ["multilingual CV tool", "CV in multiple languages"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Centralized profiles & skills intelligence",
    h1: "From CVs scattered across SharePoint to one searchable resume database.",
    sub: "A searchable resume database and skills matrix for your whole bench: import the CVs you already have, keep one structured profile per person, and generate any output from it.",
    whatItDoesBody:
      "Right now the answer to \"who has done pharma work and speaks French?\" lives in a SharePoint folder full of files named final_v3_JS_edit.docx, a staffing grid in Excel that was accurate in March, and the memory of whoever staffed the last similar project. Finding out means opening documents one by one or emailing the whole practice - and when the deadline is 48 hours out, you shortlist from the CVs you can find, not the consultants you actually have.\n\nMagicCV replaces the folder with a structured database: one profile per person, parsed automatically from the Word, PDF, or LinkedIn CVs you already have. Skills, sectors, languages, and certifications become searchable fields instead of prose trapped in documents. Search the whole bench like a skills matrix, open a profile, and generate whatever the bid needs - tailored, translated, anonymized, on your template. HRIS enrichment (Personio, BambooHR, HiBob) is on the roadmap to reduce manual upkeep further.",
    benefits: [
      {
        title: "Structured data instead of 200 Word files",
        body: "Each consultant's experience, skills, certifications, and languages live as structured fields, not prose locked in a document. The same profile powers search, tailoring, translation, and export - update it once and every output reflects it.",
        screenshotAlt: "Structured consultant profile with separate sections for projects, skills, certifications, and languages",
      },
      {
        title: "Import the CVs you already have",
        body: "Upload Word and PDF files straight from SharePoint, or pull from LinkedIn - MagicCV parses each one into a structured profile automatically. Migrating a 50-person bench is an upload session, not a retyping project.",
        screenshotAlt: "Bulk import screen parsing a batch of Word and PDF CVs into structured profiles",
      },
      {
        title: "Answer 'who knows Kubernetes?' in seconds",
        body: "Search the whole bench by skill, certification, sector, or language and get a shortlist instantly. Staffing a brief stops depending on the Excel grid from March or on emailing the practice and waiting until Monday.",
        screenshotAlt: "Skills matrix search filtered to consultants with AWS certification and German, showing 6 matches",
      },
      {
        title: "Profiles that stay current without the Friday chase",
        body: "Consultants update their own profile in one place, and AI-assisted editing makes it a five-minute task instead of a document-formatting session. The version you pull for a bid is the current one - not the copy someone last touched in 2023.",
        screenshotAlt: "Profile update view with AI chat adding a recently completed project to a consultant's record",
      },
    ],
    connectsTo: [
      { label: "RFP-to-CV reasoning", href: "/features/rfp-to-cv" },
      { label: "Brand-consistent exports", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "What happens to the CVs we already have in SharePoint?",
        answer:
          "You upload them. MagicCV parses Word and PDF files - and LinkedIn profiles - into structured profiles automatically, one per person. A 50-person bench typically migrates in an upload session rather than a manual retyping project, and the old folder can be retired.",
      },
      {
        question: "How do we keep 200 consultant CVs up to date without chasing people?",
        answer:
          "Two ways. Consultants update their own profile in one place, with AI-assisted editing that turns it into a five-minute task. And because outputs are generated from the profile, there are no stray document copies drifting out of date - the database version is the only version.",
      },
      {
        question: "Can we search across all consultants by skill?",
        answer:
          "Yes - that's the point of a resume database over a folder. Every profile is structured data, so you can filter the whole bench by skill, certification, sector, or language and get a staffing shortlist in seconds instead of opening files one by one.",
      },
      {
        question: "How is this different from our ATS or HRIS?",
        answer:
          "An ATS tracks applicants through hiring; an HRIS manages employment records. Neither produces a client-ready CV. MagicCV is CV management software for the people you already employ: it keeps their profiles structured and searchable, then generates tailored, on-brand CVs for bids. HRIS enrichment (Personio, BambooHR, HiBob) is on the roadmap so records flow in rather than being retyped.",
      },
      {
        question: "How many profiles can we store on each plan?",
        answer:
          "Free covers 10 profiles and 30 CVs total - enough to trial with one team. Pro ($50/month) covers 200 profiles and 600 CVs per month. Enterprise is unlimited, with SSO and a DPA included. You can start on Free and upgrade when the bench outgrows it.",
      },
      {
        question: "Who can see and edit profiles?",
        answer:
          "Profiles are managed centrally, so bid and resourcing teams work from the same database while consultants keep their own records current. Enterprise adds SSO for access control and audit logs for tracking who changed what.",
      },
      {
        question: "Is a centralized resume database GDPR-compliant?",
        answer:
          "Centralizing actually helps: personal data sits in one governed system instead of scattered across inboxes and shared drives where nobody can answer a deletion request. MagicCV is GDPR-by-design with EU data residency, and the Trust Center covers retention and processing in detail.",
      },
      {
        question: "What outputs can we generate from a profile?",
        answer:
          "Any CV the bid requires: tailored against an RFP, translated into the tender's language, anonymized for blind evaluation, always exported on your brand template as PDF or Word. One profile is the source for all of it - no per-output document copies.",
      },
    ],
    related: [
      { label: "Centralize & standardize CVs", href: "/use-cases/centralize-cvs" },
      { label: "For HR / People Ops teams", href: "/solutions/hr" },
      { label: "For Recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Resume Database & Skills Matrix Software for Consulting Teams",
      description:
        "A searchable resume database and employee skills database in one: CV parsing on import, skills matrix search across your bench, and on-brand CV output on demand.",
      keywords: [
        "resume database",
        "skills matrix software",
        "cv parsing software",
        "employee skills database",
        "cv database software",
        "talent management software with resume search",
      ],
    },
  },
];

export function getFeature(slug: string): FeaturePage | undefined {
  return features.find((f) => f.slug === slug);
}
