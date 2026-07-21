import type { UseCasePage } from "./types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Adapt each consultant's CV to the specific brief so the most relevant experience leads - without a rewrite marathon before every deadline.",
    h1: "Stop submitting the same CV to every brief.",
    sub: "MagicCV reads the RFP and reshapes each consultant's CV around its requirements - so evaluators see fit on page one, not on page four.",
    problemToday:
      "Evaluators score CVs against the criteria in the RFP, but most firms submit the same generic document to every client. The alternative is worse: a bid manager sits with the 40-page RFP annex on one screen and final_v3_JS_edit.docx on the other, manually reordering bullets for 12 CVs, usually inside a 48-hour deadline window. Half the tailoring gets done, the other half gets skipped, and the CV that lands on the evaluator's desk undersells a consultant who is actually a strong fit.\n\nWith MagicCV, you paste the RFP, the brief, or the evaluation criteria, and the AI reads what the client is scoring. It then reorders and re-emphasizes each consultant's real experience from their structured profile to match - the delivery lead's public-sector projects move to the top for a government bid, her fintech work leads for a bank. You review the result, adjust anything by chatting with the editor, and export in your brand template.",
    steps: [
      {
        title: "Give MagicCV the brief, not a summary of it",
        body: "Paste the full RFP, the evaluation criteria sheet, or a two-line description of what the client wants. MagicCV extracts the requirements it will tailor against and shows them to you before touching a single CV.",
        screenshotAlt: "RFP document uploaded with extracted requirements listed as tags: public sector, Azure migration, French-speaking",
      },
      {
        title: "Watch the CV reshape around the requirements",
        body: "MagicCV reorders and re-emphasizes experience from the consultant's source profile so the most relevant projects lead. It never fabricates - every claim in the tailored CV traces back to something already in the profile.",
        screenshotAlt: "Side-by-side view of original and tailored CV with relevant public-sector projects moved to the top and matched requirements highlighted",
      },
      {
        title: "Fix the details in chat, not in Word",
        body: "Ask for changes in plain language - \"lead with the Nordhaus Advisory engagement\" or \"cut the 2015 roles to one line\" - and the CV updates in place. No layout wrestling, no version forks.",
        screenshotAlt: "Chat panel beside a CV with the instruction 'shorten early career to one line' applied to the document",
      },
      {
        title: "Export on-brand, ready to attach",
        body: "One click produces a pixel-consistent PDF or Word file in your firm's template. The tailored version is saved against the profile, so the next bid starts from a clean slate, not from someone's local copy.",
        screenshotAlt: "Export dialog showing PDF and Word options with the firm's brand template preview",
      },
    ],
    outcome: "Before: three hours per CV of re-reading, reordering, and reformatting - or a generic CV and a quiet hope. After: paste the brief, review a tailored draft in minutes, and submit CVs that answer the evaluation criteria directly. The tailoring that used to get skipped at 11pm now happens on every bid.",
    outcomeStats: [{ value: "+18%", label: "win rate on bids with tailored CVs", isPlaceholder: true }],
    faqs: [
      {
        question: "Does tailoring rewrite a consultant's actual experience?",
        answer:
          "No. MagicCV reorders and re-emphasizes experience that already exists in the consultant's structured profile. It never invents projects, skills, or dates - every line in the tailored CV is traceable back to the source profile, which matters when a client asks you to stand behind a claim.",
      },
      {
        question: "Can I paste a full 40-page RFP, or does it need a summary?",
        answer:
          "Paste the whole thing. MagicCV reads the full document, extracts the requirements and evaluation criteria, and shows you what it found before tailoring. A two-line brief works too - more context simply gives it more to work with.",
      },
      {
        question: "How long does tailoring one CV actually take?",
        answer:
          "A few minutes from pasting the brief to a reviewed, export-ready CV. Most of that time is your review, not the generation. Tailoring 12 CVs for one bid is the same workflow run against the same brief, not 12 separate afternoons.",
      },
      {
        question: "Can we keep our existing Word CV template?",
        answer:
          "Yes. Your brand template is set up once in MagicCV, and every tailored CV exports into it as pixel-consistent PDF or Word. The tailoring changes what the CV says, not how it looks.",
      },
      {
        question: "How is this different from pasting a CV into ChatGPT?",
        answer:
          "A general chatbot has no source of truth, so it will happily embellish - and it outputs plain text you still have to reformat. MagicCV tailors from the consultant's structured profile, refuses to invent experience, keeps your brand template, and works across the whole team from one CV management platform, not one document at a time.",
      },
      {
        question: "Does each tailored CV count against our plan limits?",
        answer:
          "Yes - each generated CV counts toward your plan's CV allowance. Free includes 10 profiles and 30 CVs total, Pro ($50/month) includes 200 profiles and 600 CVs, and Enterprise is unlimited. A tailored CV for an active bid is exactly what those allowances are for.",
      },
      {
        question: "Where does the RFP and CV data go? We handle client-confidential briefs.",
        answer:
          "MagicCV is built GDPR-first with EU data residency. Your briefs and consultant data are processed to generate your CVs, not to train public models. Enterprise adds SSO, audit logs, and a DPA if your client contracts require one.",
      },
    ],
    related: [
      { label: "How RFP-to-CV reasoning works", href: "/features/rfp-to-cv" },
      { label: "Build a full proposal CV pack", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV for bid and sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Tailor consultant CVs to every brief",
      description:
        "MagicCV reasons about the RFP and reshapes each consultant's CV to foreground what matters for this opportunity.",
      keywords: ["tailor CV to RFP", "customize consultant CV"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Assemble a complete, consistent CV pack for a proposal or bid - tailored to the brief, in one pass, hours before the deadline instead of minutes.",
    h1: "Never build a CV pack the night before a deadline again.",
    sub: "Pick the team, tailor every CV to the same brief in one pass, and export a single on-brand pack - about 15 minutes instead of a lost day.",
    problemToday:
      "The RFP lands with a 48-hour window. The bid manager emails six consultants for current CVs, gets four replies, two final_v3.docx files with different fonts, and one \"use the version from the Meridian bid\". Then comes the real work: reformatting 12 CVs by hand so the pack doesn't read like six different firms wrote it, while the deadline clock runs. It's the classic Friday-night scramble, and it repeats on every bid.\n\nWith MagicCV, the profiles are already current, so the scramble never starts. You select the team - or let MagicCV suggest best-fit consultants from the skills matrix - paste the brief once, and every CV in the pack is tailored to it at the same time. Review, adjust in chat, and export one consistent, on-brand pack ready to attach to the proposal.",
    steps: [
      {
        title: "Pick the team - or let the skills matrix pick with you",
        body: "Select the consultants for this bid yourself, or search the bench by skills, sectors, languages, and certifications and let MagicCV suggest the strongest fits against the brief. You always have the final say.",
        screenshotAlt: "Team selection screen showing 6 suggested consultants ranked against the brief with matching skills badges",
      },
      {
        title: "Tailor every CV to the brief in one pass",
        body: "Paste the RFP once and MagicCV tailors all selected CVs against the same requirements simultaneously. Twelve CVs get the treatment one CV used to get - no per-document rework.",
        screenshotAlt: "Batch generation progress view with 12 consultant CVs being tailored against one RFP",
      },
      {
        title: "Review the pack, not the paragraphs",
        body: "Skim each tailored CV, fix anything by chatting with the editor, and confirm. Because every CV comes from the same structured profiles and the same template, consistency isn't something you check - it's the default.",
        screenshotAlt: "Pack review screen with 12 tailored CVs in identical brand template, one flagged for review",
      },
      {
        title: "Export one submission-ready pack",
        body: "Export the whole team as a single on-brand document or as individual files, in PDF or Word, matching however the tender wants CVs delivered. Attach and submit.",
        screenshotAlt: "Export dialog for a combined CV pack with single-document and per-consultant file options",
      },
    ],
    outcome: "Before: a full day of chasing, reformatting, and stitching - finished at midnight, submitted with fingers crossed. After: the pack takes about 15 minutes, most of it review, and every CV in it is tailored to the brief instead of just present. The deadline stops dictating the quality.",
    outcomeStats: [{ value: "1 day → 15 min", label: "typical time to a submission-ready CV pack", isPlaceholder: true }],
    faqs: [
      {
        question: "Can MagicCV suggest who to put in the pack?",
        answer:
          "Yes. Based on the brief and your team's skills matrix - skills, sectors, languages, certifications - MagicCV suggests best-fit consultants. It's a shortlist, not a decision: you pick the final team.",
      },
      {
        question: "What if half the team's CVs are out of date when the RFP lands?",
        answer:
          "That's the point of building packs from profiles instead of files. Each consultant has one structured profile that gets updated once, centrally - not a folder of stale documents. If something is genuinely missing, you update the profile in minutes and every future CV, in any format, picks it up.",
      },
      {
        question: "Will the pack look consistent if different people generate the CVs?",
        answer:
          "Yes. Every CV in the pack renders from the same brand template, so fonts, section order, and layout match regardless of who clicked export. The pack reads as one firm's document, which is exactly what evaluators notice.",
      },
      {
        question: "One of our partners insists on his own CV version. How does that work?",
        answer:
          "His experience lives in his structured profile like everyone else's, and the template controls presentation. He can review and adjust wording through chat before export - what he can't do is quietly maintain a divergent Word file that surfaces in a pack six months later.",
      },
      {
        question: "Does a 12-person pack count as 12 CVs against our plan?",
        answer:
          "Yes, each generated CV counts individually. Pro ($50/month) includes 200 profiles and 600 CVs, which covers regular bid activity for most mid-size teams; Enterprise removes the limits. Free (10 profiles, 30 CVs) is enough to run a real bid or two as a trial.",
      },
      {
        question: "Can the pack mix languages if the tender requires it?",
        answer:
          "Yes. MagicCV generates CVs in the language each submission requires from the same master profiles, keeping the brand template intact. A pack for an EU tender can go out in French while the same team's pack for a UK client goes out in English.",
      },
      {
        question: "We already have hundreds of CVs in SharePoint. How do we start?",
        answer:
          "Import them. MagicCV parses Word and PDF CVs into structured profiles, one per person, so your existing documents become the starting data rather than a migration project. From then on, packs are built from profiles, not from whatever the search box surfaces.",
      },
      {
        question: "Is this an ATS? We already have one for hiring.",
        answer:
          "No. An ATS tracks candidates through a hiring pipeline; MagicCV manages the CVs of the people already on your team and turns them into tailored, on-brand bid documents. The two solve different problems and coexist fine.",
      },
    ],
    related: [
      { label: "How RFP-to-CV reasoning works", href: "/features/rfp-to-cv" },
      { label: "Brand-consistent CV exports", href: "/features/brand-templates" },
      { label: "MagicCV for bid and sales teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Build a proposal-ready CV pack in minutes",
      description:
        "Select the team, generate tailored CVs for everyone, and export a single on-brand pack ready to submit.",
      keywords: ["proposal CV pack", "RFP CV bundle consulting"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Replace scattered shared-drive CVs with one structured, current profile per person - the source every bid, staffing decision, and client request draws from.",
    h1: "From file archaeology in SharePoint to one current profile per person.",
    sub: "CV database software for consulting and professional-services teams: import every CV once, keep one live profile per consultant, and generate any format on demand.",
    problemToday:
      "Right now the \"CV database\" is a SharePoint folder, three inboxes, and a handful of laptops. The same consultant exists as CV_2022.pdf, final_v3_JS_edit.docx, and a LinkedIn profile nobody exported - and none of them is clearly current. That isn't cv data management; it's file archaeology. It bites hardest at the worst moment: a bid manager needing 8 CVs inside a 48-hour tender window, or an account lead promising a client \"profiles by tomorrow\" and then spending the evening chasing consultants who are busy billing.\n\nMagicCV replaces the folder with a database. You import the CVs you already have - Word, PDF, whatever format they accumulated in - and MagicCV parses each into a structured profile, one per person. Updates happen once, on the profile. Every output after that - tailored bid CV, anonymized tender version, translated copy - is generated fresh from the current data, so \"which file is the latest?\" stops being a question anyone asks.",
    steps: [
      {
        title: "Import the mess you have, not the data you wish you had",
        body: "Drop in your existing CV files in any format - Word, PDF, exports from old systems. MagicCV parses each into a structured profile with experience, skills, certifications, and languages as data, not paragraphs. Duplicate files for the same person merge into one profile.",
        screenshotAlt: "Bulk import screen processing 47 mixed Word and PDF files into structured consultant profiles",
      },
      {
        title: "Keep one profile per person - and keep it current without chasing",
        body: "Each consultant has exactly one profile. When a project ends or a certification lands, it's added once, there - not patched into five documents. AI-assisted updates make the edit a two-minute job instead of a document rewrite.",
        screenshotAlt: "Consultant profile view with structured experience entries and a recent-update indicator",
      },
      {
        title: "Search the team like a database, because it is one",
        body: "The skills matrix makes the whole bench searchable: filter by skill, sector, language, or certification and get people, not filenames. \"Who has AWS certification and speaks German?\" becomes a five-second query instead of a Friday-afternoon email thread.",
        screenshotAlt: "Skills matrix search filtered to consultants with AWS certification and German, showing 6 matching profiles",
      },
      {
        title: "Generate any output from the same source of truth",
        body: "Tailored bid CV, blind CV for a tender, French version for a cross-border proposal - all generated on demand from the current profile, all in your brand template. The output is disposable; the profile is the asset.",
        screenshotAlt: "Output picker on a single profile showing tailored, anonymized, and translated CV options",
      },
    ],
    outcome: "Before: 20 minutes of folder-diving per CV, multiplied by every bid, with a real chance of sending a client something two years stale. After: one query, one current profile, any format in minutes. The database quietly compounds - every bid gets faster because the last one kept the data clean.",
    outcomeStats: [],
    faqs: [
      {
        question: "What happens to the hundreds of CVs we already have in SharePoint?",
        answer:
          "You import them. MagicCV parses Word and PDF files into structured profiles - one per person, even if you have four versions of the same consultant's CV. The old files can stay in SharePoint as an archive; they just stop being the working copy.",
      },
      {
        question: "How do we keep 200 consultant CVs current without chasing people every quarter?",
        answer:
          "By making the update small and singular. Each person has one profile, updates are AI-assisted edits rather than document rewrites, and there's nothing to reformat afterward - the templates handle presentation. Most teams fold profile updates into project close-out instead of running a chase campaign.",
      },
      {
        question: "How is CV database software different from our ATS or HRIS?",
        answer:
          "An ATS tracks job applicants; an HRIS holds employment records like contracts and payroll data. Neither is built to produce a tailored, on-brand CV for a bid. MagicCV is the layer for your delivery team's experience data - structured, searchable, and instantly exportable as client-facing documents.",
      },
      {
        question: "Do you integrate with our HRIS?",
        answer:
          "HRIS integrations (Personio, BambooHR, HiBob) are on the roadmap. Today, file import covers the initial load, and because profiles only need updating in one place, day-to-day upkeep is light even without a sync.",
      },
      {
        question: "Is a central CV database a GDPR problem or a GDPR improvement?",
        answer:
          "Done properly, an improvement. MagicCV is GDPR-first with EU data residency, so consultant data sits in one governed system instead of scattered across inboxes and laptops - which makes access control, deletion requests, and audits tractable. Enterprise adds SSO, audit logs, and a DPA.",
      },
      {
        question: "How many profiles do the plans cover?",
        answer:
          "Free covers 10 profiles and 30 generated CVs - enough to prove the workflow on one team. Pro ($50/month) covers 200 profiles and 600 CVs, which fits most consultancies up to a couple hundred billable staff. Enterprise is unlimited, with SSO and a DPA for larger firms.",
      },
      {
        question: "Who maintains the profiles - a central owner or the consultants themselves?",
        answer:
          "Either model works. Some firms have an ops or resourcing lead own the database; others have consultants update their own profile at project close-out with ops reviewing. Because there's one profile per person and the template controls formatting, contributors can't fork versions or break the layout.",
      },
      {
        question: "What formats can we generate once the CVs are centralized?",
        answer:
          "Pixel-consistent PDF and Word exports in your brand templates, plus tailored versions for a specific RFP, anonymized blind CVs for tenders, and translations - all generated from the same profile. Centralizing is the setup; the generated outputs are the payoff.",
      },
    ],
    related: [
      { label: "Profiles and skills matrix", href: "/features/profiles-skills" },
      { label: "MagicCV for HR and People Ops", href: "/solutions/hr" },
      { label: "MagicCV for recruitment teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV Database Software - Centralize & Standardize CVs",
      description:
        "Resume database management software for consulting teams: import CVs once, keep one current profile per person, and generate any format on demand. Proper CV data management, no more SharePoint hunts.",
      keywords: [
        "cv database software",
        "resume database software",
        "cv data management",
        "resume database management software",
        "cv dataset management",
        "cv database",
      ],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Produce anonymized, blind CVs for public tenders, competitive bids, and bias-free evaluation - one click, same rules for everyone, no manual redaction.",
    h1: "Never hand-redact a CV for a tender again.",
    sub: "One-click blind CVs for public tenders and blind recruitment - the same anonymization rules applied to every consultant, every time.",
    problemToday:
      "The tender annex says CVs must be anonymized, so someone spends an afternoon in Word deleting names, photos, and email addresses from 10 documents. Then the problems start: a name survives in a header on page 3, the document properties still say who authored the file, and one team member's idea of \"anonymized\" - initials kept, employer names removed - doesn't match another's. In a public tender, one leaked identifier can get a submission challenged; in blind recruitment, it defeats the entire point.\n\nMagicCV makes anonymization a property of the export, not a manual editing pass. You configure once what counts as identifying for your process - name, photo, contact details, whatever your evaluations require - and toggle anonymization on any CV. Because the blind CV is generated fresh from the structured profile rather than redacted from an old file, there are no leftover headers, metadata, or missed mentions to worry about.",
    steps: [
      {
        title: "Start from any CV - standard or tailored",
        body: "Generate the consultant's CV as usual, including a version tailored to the specific tender. Anonymization is a switch on top of any output, not a separate document you maintain.",
        screenshotAlt: "Consultant CV tailored to a public tender, before anonymization is applied",
      },
      {
        title: "Toggle anonymization - your rules, applied automatically",
        body: "Flip the anonymization toggle and MagicCV removes every detail your configured rules treat as identifying: name, photo, contact details, and anything else your evaluation process requires. The same ruleset applies no matter who on the team generates the CV.",
        screenshotAlt: "Anonymization toggle applied to a CV, with name replaced by a role label and photo removed",
      },
      {
        title: "Export clean blind CVs, singly or as a full pack",
        body: "Export the anonymized version in your brand template as PDF or Word - for one consultant or the whole bid team at once. Because each file is generated from profile data, there's no residue from an original document to slip through.",
        screenshotAlt: "Export view of an anonymized CV pack for a 6-person tender team, all in matching template",
      },
    ],
    outcome: "Before: an afternoon of manual redaction per tender, and a low-grade fear that a name survived in a footer. After: the blind version is one click, identical in standard to every other blind CV your firm has ever produced. Anonymization stops being a task and becomes a setting.",
    outcomeStats: [],
    faqs: [
      {
        question: "What exactly gets removed from a blind CV?",
        answer:
          "Whatever your rules say. Typically name, photo, and contact details; many teams also strip other markers their evaluation process treats as identifying. You configure the ruleset once and it applies to every anonymized export, for every consultant.",
      },
      {
        question: "Can a name still leak through in a header, footer, or file metadata?",
        answer:
          "This is the advantage of generating rather than redacting. A blind CV from MagicCV is built fresh from the structured profile with the anonymization rules applied - it isn't an edited copy of an old Word file, so there are no leftover headers, tracked changes, or document properties carrying the original author's name.",
      },
      {
        question: "Will every team member's anonymized CVs follow the same standard?",
        answer:
          "Yes. The rules live in the ruleset, not in individual judgment, so the blind CV produced by a junior bid coordinator on Friday evening matches the one a partner would produce. For public tenders where inconsistent anonymization can void a submission, that uniformity is the point.",
      },
      {
        question: "Can we anonymize a whole proposal team at once?",
        answer:
          "Yes. Build the CV pack for the bid, apply anonymization, and export - every CV in the pack follows the same rules and the same brand template. A 10-person tender pack is one pass, not 10 redaction jobs.",
      },
      {
        question: "Does this work for blind recruitment as well as tenders?",
        answer:
          "Yes. Staffing and recruitment teams use the same toggle to send blind CVs to clients - candidates evaluated on experience and skills before a name or photo enters the conversation. Same mechanism, same consistency.",
      },
      {
        question: "How does anonymization fit our GDPR obligations?",
        answer:
          "It's one piece of a data-minimization posture: sharing only the personal data a process actually needs. MagicCV itself is GDPR-first with EU data residency, and Enterprise adds audit logs and a DPA. Blind CVs reduce what leaves your firm; the platform governs what stays inside it.",
      },
      {
        question: "Do anonymized CVs keep our brand template?",
        answer:
          "Yes - the blind version exports in the same pixel-consistent template as any other CV, minus the identifying details. If a tender requires a neutral or client-specified layout instead, export in a template set up for that.",
      },
      {
        question: "Is anonymization available on every plan?",
        answer:
          "Anonymized exports are generated CVs like any other, counting toward your plan's allowance - 30 CVs on Free, 600 on Pro ($50/month), unlimited on Enterprise. You can test the full blind-CV workflow on the Free plan before a real tender depends on it.",
      },
    ],
    related: [
      { label: "Anonymization and GDPR", href: "/features/anonymization" },
      { label: "Public-sector and tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Specialist staffing and talent agencies", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anonymised CVs in One Click - Blind CVs for Tenders & Hiring",
      description:
        "Create an anonymous CV for blind evaluation, public tenders, and bias-free submissions - consistently, across your whole team, in one click.",
      keywords: ["anonymised cv", "anonymous cv", "CV anonymization tool", "anonymized CV for tenders", "blind recruitment"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Produce accurate, on-brand CVs in every language your bids require - generated from one master profile instead of retyped and re-laid-out by hand.",
    h1: "Stop retyping CVs for every cross-border bid.",
    sub: "Generate accurate, on-brand CVs in EN, DE, FR, NL, ES and more from one master profile - no retyping, no broken layouts, no stale versions.",
    problemToday:
      "An EU tender requires French CVs by Thursday. The options today are all bad: send 8 CVs to a translation agency and wait days, run them through a generic translator and spend hours fixing broken layouts and mistranslated job titles, or keep parallel language versions by hand - which guarantees the German CV still lists the project that ended last year while the English one is current. Every language multiplies the maintenance, and it always surfaces mid-deadline.\n\nWith MagicCV, translation stops being document maintenance. Each consultant has one master profile as the source of truth. When a bid requires another language, you pick it at export and MagicCV generates the CV in that language, in your brand template, with the layout intact. Update the profile once and regenerate any language on demand - nothing drifts, because there are no parallel copies to drift.",
    steps: [
      {
        title: "Keep one master profile, not one per language",
        body: "Each consultant's experience, skills, and certifications live in a single structured profile. That's the only thing anyone maintains - language versions are outputs, not documents with a life of their own.",
        screenshotAlt: "Master consultant profile with structured experience entries and a language selector for export",
      },
      {
        title: "Pick the languages this bid requires",
        body: "Select French for the EU tender, German for the Munich client, or several at once for a multilingual evaluation panel. Selection happens at export - no pre-existing translated file needs to exist.",
        screenshotAlt: "Language selection dialog with French and German checked for a cross-border proposal",
      },
      {
        title: "Review the translation like a bid manager, not a linguist",
        body: "The generated CV keeps your template and layout, so review is about terminology, not formatting. Fix a job title or a sector term by chatting with the editor and the change applies in place.",
        screenshotAlt: "French CV in brand template with chat panel correcting a job title translation",
      },
      {
        title: "Export on-brand CVs in every selected language",
        body: "Each language exports as a pixel-consistent PDF or Word file in your firm's template. The French pack and the English pack look like the same firm produced them - because the same system did.",
        screenshotAlt: "English and French versions of the same consultant CV exported side by side in identical layout",
      },
    ],
    outcome: "Before: a week of agency turnaround or an evening fixing what a generic translator did to the layout - repeated whenever a profile changed. After: any language version is minutes away and always generated from current data. Cross-border bids stop carrying a translation tax.",
    outcomeStats: [],
    faqs: [
      {
        question: "Which languages can we generate CVs in?",
        answer:
          "English, German, French, Dutch, and Spanish are the most used today, and MagicCV can translate CVs into other languages as well - the layout and template hold regardless of language. If your bids run in a specific language, test it on the Free plan before you rely on it.",
      },
      {
        question: "Do translated CVs stay in sync when a consultant's profile changes?",
        answer:
          "Yes, because translations aren't stored documents - they're generated on demand from the current master profile. Update the profile once, regenerate any language, and the new project or certification appears everywhere. There is no second copy to forget.",
      },
      {
        question: "Does translation break the layout or the brand template?",
        answer:
          "No. MagicCV renders the translated content into the same brand template, handling the fact that German runs longer than English without wrecking the page. What you review is a finished, on-brand CV, not a text dump to re-lay-out.",
      },
      {
        question: "How accurate is the translation for technical job titles and sector terms?",
        answer:
          "Strong, but review it like anything client-facing. CV language is a well-behaved domain - roles, projects, skills - and the AI handles it well. For firm-specific terminology, fix it once in chat during review; a native-speaking colleague's five-minute skim is still good practice on high-stakes tenders.",
      },
      {
        question: "Does each language version count as a separate CV against our plan?",
        answer:
          "Yes - each generated CV counts toward the allowance: 30 CVs on Free, 600 on Pro ($50/month), unlimited on Enterprise. A 6-person pack in two languages is 12 CVs, which Pro absorbs comfortably across a normal bid pipeline.",
      },
      {
        question: "Where is CV data processed? Our client contracts require EU processing.",
        answer:
          "MagicCV runs with EU data residency and is GDPR-first by design. Consultant data is processed to generate your CVs, including translations, within that setup. Enterprise adds SSO, audit logs, and a DPA for firms whose client contracts demand the paperwork.",
      },
      {
        question: "Can one proposal pack mix languages?",
        answer:
          "Yes. Generate each consultant's CV in the language the submission requires - or the same consultant in two languages for a bilingual evaluation panel. Everything exports in the same template, so the pack stays visually consistent across languages.",
      },
      {
        question: "Why not just keep using our translation agency?",
        answer:
          "For legal documents, keep the agency. For CVs, the agency model breaks on speed and sync: days of turnaround per round, real cost per document, and a translated file that's stale as soon as the profile changes. MagicCV gives you minutes-fast generation from always-current data, with human review where you want it.",
      },
    ],
    related: [
      { label: "Multilingual CV generation", href: "/features/multilingual" },
      { label: "Public-sector and tender-driven consultancies", href: "/solutions/public-sector" },
      { label: "Software and IT consulting firms", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Translate consultant CVs into any language",
      description:
        "Generate accurate, professional CVs in EN, DE, FR, NL, ES and more - without retyping or re-formatting.",
      keywords: ["multilingual CV generator", "CV translation tool consulting"],
    },
  },
];

export function getUseCase(slug: string): UseCasePage | undefined {
  return useCases.find((u) => u.slug === slug);
}
