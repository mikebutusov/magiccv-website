import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Pas het cv van elke consultant aan op de specifieke briefing, met nadruk op de meest relevante ervaring en de winvoorwaarden.",
    h1: "Stem elk cv af op elke briefing - automatisch.",
    sub: "MagicCV redeneert over de RFP en vormt het cv van elke consultant om, zodat naar voren komt wat voor deze kans telt.",
    problemToday:
      "Elke RFP heeft zijn eigen winvoorwaarden, maar de meeste cv's zijn statische documenten. Bidteams herlezen en herordenen de ervaring van elke consultant handmatig, voor elke afzonderlijke briefing - of ze slaan het over en dienen een generiek cv in dat de fit onderverkoopt.",
    steps: [
      {
        title: "Plak de RFP of briefing",
        body: "Zet het RFP-document erin, een overzicht van beoordelingscriteria of een korte samenvatting van wat de klant zoekt.",
        screenshotAlt: "RFP-briefing geplakt in MagicCV",
      },
      {
        title: "MagicCV identificeert en herprioriteert relevante ervaring",
        body: "Het verzint nooit iets - elke bewering is herleidbaar naar het bronprofiel van de consultant, alleen herordend en opnieuw geaccentueerd om bij de briefing te passen.",
        screenshotAlt: "Relevante ervaring uitgelicht tegen de eisen van de briefing",
      },
      {
        title: "Controleer en exporteer, on-brand",
        body: "Controleer het resultaat, pas aan waar nodig en exporteer in het merksjabloon van je bureau.",
        screenshotAlt: "Export van een afgestemd cv in merksjabloon",
      },
    ],
    outcome: "Hogere relevantie per briefing, en een betere kans op elke bid die je indient.",
    outcomeStats: [{ value: "+18%", label: "winratio op afgestemde bids" }],
    faqs: [
      {
        question: "Herschrijft dit de daadwerkelijke ervaring van een consultant?",
        answer:
          "Nee. MagicCV herprioriteert en herordent echte ervaring uit het bronprofiel om bij de briefing te passen - het verzint nooit ervaring die er niet is.",
      },
      {
        question: "Hoe lang duurt het afstemmen van één cv?",
        answer: "Doorgaans een paar minuten, van het plakken van de briefing tot een gecontroleerd, exportklaar cv.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "Voor salesteams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Stem consultant-cv's af op elke briefing - MagicCV",
      description:
        "MagicCV redeneert over de RFP en vormt het cv van elke consultant om, zodat naar voren komt wat voor deze kans telt.",
      keywords: ["cv afstemmen op RFP", "consultant-cv op maat maken"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Stel in één keer een compleet, consistent cv-pakket samen voor een proposal of bid.",
    h1: "Van RFP naar een compleet cv-pakket in 15 minuten.",
    sub: "Selecteer het team, genereer voor iedereen afgestemde cv's en exporteer één on-brand pakket, klaar om in te dienen.",
    problemToday:
      "Een cv-pakket samenstellen voor een proposal betekent meerdere mensen achternalopen voor actuele cv's, elk cv handmatig heropmaken en hopen dat het geheel consistent leest. Het klassieke vrijdagavondgeren vlak voor een deadline.",
    steps: [
      {
        title: "Kies het team",
        body: "Selecteer zelf de consultants voor deze bid, of laat MagicCV de best passende mensen uit je bench voorstellen.",
        screenshotAlt: "Teamselectiescherm voor een proposal",
      },
      {
        title: "Genereer afgestemde cv's voor iedereen tegelijk",
        body: "Elk cv in het pakket wordt op dezelfde briefing afgestemd, op hetzelfde moment.",
        screenshotAlt: "Batchgeneratie van cv's voor een volledig proposalteam",
      },
      {
        title: "Exporteer een uniform, on-brand, indieningsklaar pakket",
        body: "Eén consistent document, klaar om bij de proposal te voegen.",
        screenshotAlt: "Geëxporteerd cv-pakket met meerdere consultants gecombineerd",
      },
    ],
    outcome: "Wat vroeger een dag kostte, duurt nu ongeveer vijftien minuten - geen paniek op het laatste moment.",
    outcomeStats: [{ value: "1 dag → 15 min", label: "per cv-pakket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kan MagicCV voorstellen wie er in het pakket moet?",
        answer:
          "Ja. Op basis van de briefing en de vaardigheden en ervaring van je bench kan MagicCV de best passende consultants voorstellen - maar jij houdt altijd het laatste woord.",
      },
      {
        question: "Blijft de opmaak van het hele pakket consistent?",
        answer: "Ja - elk cv in het pakket gebruikt hetzelfde merksjabloon, waardoor het pakket als één document leest.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Voor salesteams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Stel in minuten een proposal-klaar cv-pakket samen - MagicCV",
      description:
        "Selecteer het team, genereer voor iedereen afgestemde cv's en exporteer één on-brand pakket, klaar om in te dienen.",
      keywords: ["proposal cv-pakket", "RFP cv-bundel consultancy"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Vervang verspreide cv's op gedeelde schijven door één gestructureerde, actuele bron van waarheid.",
    h1: "Eén thuis voor elk consultant-cv.",
    sub: "Importeer eenmalig, houd actueel en genereer elk format op aanvraag - nooit meer zoeken in SharePoint.",
    problemToday:
      "Cv's leven op gedeelde schijven, in inboxen en op laptops van medewerkers - meerdere versies van het cv van dezelfde persoon, waarvan geen enkele duidelijk de actuele is. Het juiste bestand vinden kost tijd, elke keer dat het nodig is.",
    steps: [
      {
        title: "Importeer vanuit bestaande bestanden",
        body: "Breng de cv's die je al hebt binnen om gestructureerde profielen te maken. LinkedIn- en HRIS-import staan op de roadmap.",
        screenshotAlt: "Scherm voor bulkimport van cv's",
      },
      {
        title: "Onderhoud gestructureerde profielen, altijd actueel",
        body: "Eén profiel per persoon, op één plek bijgehouden in plaats van verspreide documenten.",
        screenshotAlt: "Lijstweergave van gestructureerde profielen",
      },
      {
        title: "Genereer elke output, elk format, op elk moment",
        body: "Wat een bid of verzoek ook nodig heeft, genereer het vanuit het actuele profiel - geen speurtocht naar het nieuwste bestand.",
        screenshotAlt: "Formatkiezer voor output vanuit één profiel",
      },
    ],
    outcome: "Eén bron van waarheid, geen dubbele data, en alles stroomafwaarts wordt sneller.",
    outcomeStats: [],
    faqs: [
      {
        question: "Wat gebeurt er met onze bestaande cv-bestanden?",
        answer:
          "Importeer ze om gestructureerde profielen in MagicCV te maken. Vanaf dat moment is het gestructureerde profiel de actuele bron van waarheid, niet het oorspronkelijke bestand.",
      },
      {
        question: "Integreren jullie met ons HRIS?",
        answer: "HRIS-integraties (Personio, BambooHR, HiBob) staan op onze roadmap.",
      },
    ],
    related: [
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Voor HR / People Ops-teams", href: "/solutions/hr" },
      { label: "Voor recruitmentteams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV-databasesoftware - centraliseer en standaardiseer cv's",
      description:
        "Cv-beheer dat werkt: importeer één keer, houd per persoon één actueel profiel bij en genereer elk format op aanvraag - nooit meer zoeken in SharePoint.",
      keywords: ["cv database", "cv databank", "cv beheer", "cv beheren"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Produceer geanonimiseerde, blinde cv's voor competitieve bids, openbare aanbestedingen en indiening zonder bias.",
    h1: "Geanonimiseerde cv's in één klik.",
    sub: "Verwijder identificerende gegevens voor blinde beoordeling en openbare aanbestedingen - consistent, voor je hele team.",
    problemToday:
      "Openbare aanbestedingen en blinde beoordelingsprocessen vereisen geanonimiseerde cv's, en handmatig zwartlakken is traag en inconsistent - wat de één onder 'geanonimiseerd' verstaat, komt zelden overeen met de opvatting van een ander.",
    steps: [
      {
        title: "Genereer een cv",
        body: "Begin met een afgestemd of standaard cv voor de consultant.",
        screenshotAlt: "Standaard cv vóór anonimisering",
      },
      {
        title: "Schakel anonimisering in",
        body: "Namen, foto's en andere identificerende gegevens worden verwijderd volgens de regels die je hebt geconfigureerd.",
        screenshotAlt: "Anonimiseringsschakelaar toegepast op een cv",
      },
      {
        title: "Exporteer voor blinde of competitieve indiening",
        body: "De geanonimiseerde versie is exportklaar en consistent met elk ander geanonimiseerd cv dat je team produceert.",
        screenshotAlt: "Geanonimiseerd cv klaar voor indiening bij een aanbesteding",
      },
    ],
    outcome: "Aanbestedingsconforme indieningen met minder bias, snel en consistent geproduceerd.",
    outcomeStats: [],
    faqs: [
      {
        question: "Wat geldt als een identificerend gegeven?",
        answer:
          "Jij bepaalt de regels - doorgaans naam, foto en alle andere gegevens die jouw beoordelingsproces als identificerend beschouwt.",
      },
      {
        question: "Is de anonimisering consistent binnen het team?",
        answer: "Ja - elk geanonimiseerd cv volgt dezelfde geconfigureerde regels, ongeacht wie het genereert.",
      },
    ],
    related: [
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Gespecialiseerde staffing- & talentbureaus", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anoniem cv met één klik - voor aanbestedingen en werving",
      description:
        "Maak geanonimiseerde cv's voor blinde beoordeling, aanbestedingen en onbevooroordeelde indiening - consistent voor het hele team.",
      keywords: ["anoniem cv", "geanonimiseerd cv", "cv anonimiseren"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Produceer nauwkeurige, on-brand cv's in meerdere Europese talen voor grensoverschrijdende bids.",
    h1: "Elk cv, in elke taal waarin je biedt.",
    sub: "Genereer nauwkeurige, professionele cv's in EN, DE, FR, NL, ES en meer - zonder overtypen of heropmaken.",
    problemToday:
      "Grensoverschrijdende bids en meertalige beoordelingspanels betekenen dat hetzelfde cv in meerdere talen moet bestaan, synchroon gehouden terwijl het profiel van de consultant verandert. Handmatig vertalen is traag en raakt verouderd.",
    steps: [
      {
        title: "Onderhoud één masterprofiel",
        body: "Houd één actueel profiel per consultant bij als bron van waarheid.",
        screenshotAlt: "Masterprofiel van een consultant in één taal",
      },
      {
        title: "Kies de doeltaal of -talen",
        body: "Kies welke taal of talen deze bid vereist.",
        screenshotAlt: "Taalselectie voor cv-generatie",
      },
      {
        title: "Exporteer afgestemde, vertaalde, on-brand cv's",
        body: "Krijg een consistent, professioneel cv in elke geselecteerde taal, klaar om in te dienen.",
        screenshotAlt: "Vertaalde cv's naast elkaar geëxporteerd",
      },
    ],
    outcome: "Direct meertalige pakketten voor Europese aanbestedingen en grensoverschrijdende dienstverlening.",
    outcomeStats: [],
    faqs: [
      {
        question: "Welke talen kan ik vandaag genereren?",
        answer: "EN, DE, FR, NL en ES vandaag, met meer EU-talen op de roadmap.",
      },
      {
        question: "Blijven vertaalde cv's synchroon als het profiel wordt bijgewerkt?",
        answer: "Ja - genereer elke taal op aanvraag opnieuw vanuit het actuele masterprofiel.",
      },
    ],
    related: [
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Software- & IT-consultancy", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Vertaal consultant-cv's naar elke taal - MagicCV",
      description:
        "Genereer nauwkeurige, professionele cv's in EN, DE, FR, NL, ES en meer - zonder overtypen of heropmaken.",
      keywords: ["meertalige cv-generator", "cv-vertaaltool consultancy"],
    },
  },
];
