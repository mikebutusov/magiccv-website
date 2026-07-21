import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales- / businessdevelopment-leads die verantwoordelijk zijn voor de winratio van proposals en de snelheid van de pipeline.",
    h1: "Win meer van de proposals die je indient.",
    sub: "Laat trage, generieke cv's je geen bids meer kosten. MagicCV geeft salesteams RFP-klare consultantpakketten in minuten - afgestemd op elke kans.",
    pain: {
      quote: "We verliezen RFP's die we zouden moeten winnen, en cv-voorbereiding is altijd de bottleneck.",
      answer: "MagicCV geeft je afgestemde, on-brand cv-pakketten die bij de briefing passen, klaar vóór de deadline.",
      proofPoints: [
        "Snellere doorlooptijd van briefing tot indiening",
        "Hogere winratio op afgestemde bids",
        "Consistente, on-brand kwaliteit voor het hele team",
      ],
    },
    featureRows: [
      {
        title: "Match automatisch de juiste mensen aan elke briefing",
        body: "MagicCV leest de briefing en toont de best passende consultants uit je bench.",
        screenshotAlt: "Consultantmatching tegen een RFP-briefing",
      },
      {
        title: "Stem elk cv af op de winvoorwaarden van de kans",
        body: "Elk cv legt de nadruk op waar deze specifieke briefing op beoordeelt - geen generieke samenvatting.",
        screenshotAlt: "Afgestemd cv met nadruk op winvoorwaarde-ervaring",
      },
      {
        title: "Mis nooit meer een deadline - een pakket in 15 minuten",
        body: "Ga zo snel van briefing naar een indieningsklaar cv-pakket dat dit niet langer de bottleneck is.",
        screenshotAlt: "Proposal-cv-pakket snel gegenereerd vóór een deadline",
      },
      {
        title: "Consistente, on-brand kwaliteit die het bureau weerspiegelt",
        body: "Elke indiening oogt alsof die van hetzelfde bureau komt, omdat die op hetzelfde merksjabloon is gebouwd.",
        screenshotAlt: "Merkconsistent cv-pakket over meerdere consultants",
      },
    ],
    stats: [
      { value: "1 dag → 15 min", label: "per cv-pakket", isPlaceholder: true },
      { value: "+18%", label: "winratio op afgestemde bids" },
    ],
    includeRoiTeaser: true,
    related: [
      { label: "Stem cv's af op elke briefing", href: "/use-cases/tailor-cvs" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    ],
    seo: {
      title: "MagicCV voor salesteams - win meer consultingproposals",
      description:
        "Laat trage, generieke cv's je geen bids meer kosten. MagicCV geeft salesteams RFP-klare consultantpakketten in minuten.",
      keywords: ["proposal cv-tool voor sales", "meer RFP's winnen consultancy"],
    },
  },
  {
    _type: "rolePage",
    slug: "recruitment",
    reader: "Recruitment- / resourcing-leads die consultantprofielen onderhouden en reageren op staffing- en bidverzoeken.",
    h1: "Maak van je talentpool proposal-klare profielen.",
    sub: "Houd elk consultant-cv actueel, doorzoekbaar en direct opgemaakt voor elke briefing of bid.",
    pain: {
      quote: "Ik loop constant consultants achterna voor bijgewerkte cv's en maak ze handmatig opnieuw op.",
      answer: "MagicCV geeft iedereen één centraal, altijd actueel profiel - genereer elk format op aanvraag.",
      proofPoints: [
        "Nooit meer consultants achternalopen voor updates",
        "Eén bron van waarheid per persoon",
        "Snelle onboarding van cv's van nieuwe medewerkers",
      ],
    },
    featureRows: [
      {
        title: "Gecentraliseerde, gestructureerde consultantprofielen",
        body: "De ervaring van elke consultant leeft als gestructureerde data op één plek, niet in verspreide documenten.",
        screenshotAlt: "Gecentraliseerde database met consultantprofielen",
      },
      {
        title: "Eén profiel → vele afgestemde outputs",
        body: "Genereer elk format dat een bid of klant nodig heeft, rechtstreeks vanuit het actuele profiel.",
        screenshotAlt: "Meerdere cv-outputs gegenereerd vanuit één profiel",
      },
      {
        title: "Importeren & verrijken vanuit LinkedIn/HRIS",
        body: "Breng bestaande cv's vandaag binnen; LinkedIn- en HRIS-verrijking staan op de roadmap.",
        screenshotAlt: "Importflow voor profielverrijking",
      },
      {
        title: "Vind snel de juiste persoon",
        body: "Zoek op vaardigheden en ervaring in je hele bench om snel op een staffingverzoek te reageren.",
        screenshotAlt: "Zoeken op skills over consultantprofielen",
      },
    ],
    stats: [
      { value: "6 uur", label: "per week bespaard op het najagen van updates" },
    ],
    related: [
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Gespecialiseerde staffing- & talentbureaus", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Recruitmentsoftware met cv-database",
      description:
        "Houd elk cv actueel, doorzoekbaar en direct in het juiste format voor elke brief of offerte - één kandidatendatabase voor je hele talentpool.",
      keywords: ["recruitment software", "kandidatendatabase", "cv database"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "HR / People Ops - de datasteward-persona. Geeft om schone data en geen parallelle systemen.",
    h1: "Eén bron van waarheid voor elk consultant-cv.",
    sub: "Stop met cv's onderhouden op vijf plekken. MagicCV houdt profielen schoon, consistent en compliant - zonder schaduw-IT.",
    pain: {
      quote: "Cv's leven op gedeelde schijven, in inboxen en op laptops van medewerkers - de data is een rommeltje.",
      answer: "MagicCV vervangt dat door gestructureerde, beheerde profielen met rolgebaseerde toegang.",
      proofPoints: [
        "Schone, gestructureerde data in plaats van verspreide bestanden",
        "AVG-by-design door en door",
        "Geen dubbele systemen om te onderhouden",
      ],
    },
    featureRows: [
      {
        title: "Gestructureerde profielen, geen vrije documenten meer",
        body: "De data van elke consultant leeft als gestructureerde velden, niet als een ongestructureerd Word-document.",
        screenshotAlt: "Weergave van het gestructureerde profielschema",
      },
      {
        title: "Rolgebaseerde toegang & governance",
        body: "Bepaal wie wat kan zien en bewerken, met duidelijk eigenaarschap over consultantdata.",
        screenshotAlt: "Instellingen voor rolgebaseerde toegangscontrole",
      },
      {
        title: "HRIS-integraties (roadmap)",
        body: "Integraties met Personio, BambooHR en HiBob staan op de roadmap om profielen automatisch actueel te houden.",
        screenshotAlt: "Instellingenpaneel voor HRIS-integraties",
      },
      {
        title: "AVG-by-design, EU-dataresidentie, auditlogs",
        body: "De gegevensverwerking is vanaf de basis rond de AVG-vereisten gebouwd, met EU-dataresidentie en auditlogs.",
        screenshotAlt: "Instellingen voor auditlog en dataresidentie",
      },
    ],
    stats: [],
    related: [
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV voor HR & People Ops - schone, compliant cv-data",
      description:
        "Stop met cv's onderhouden op vijf plekken. MagicCV houdt profielen schoon, consistent en compliant.",
      keywords: ["AVG cv-beheer", "HR consultant-cv-systeem"],
    },
  },
  {
    _type: "rolePage",
    slug: "project-delivery",
    reader: "Delivery- / engagement- / practice-leads die projecten bemensen en cv's nodig hebben voor klantgerichte proposals en de start van engagements.",
    h1: "Zet bij elke klant de juiste mensen aan tafel.",
    sub: "Genereer engagement-klare, on-brand consultant-cv's die aansluiten op de eisen van de klant - zonder deliverytijd op te offeren aan admin.",
    pain: {
      quote: "Elk nieuw engagement betekent rennen om actuele cv's in het juiste format voor die klant.",
      answer: "MagicCV geeft je direct klantspecifieke cv-pakketten, zodat delivery-leads sneller bemensen en pitchen.",
      proofPoints: [
        "Snellere mobilisatie op nieuwe engagements",
        "Klantspecifieke sjablonen, inclusief formats voor overheids- en enterprise-inkoop",
        "Meertalige output voor grensoverschrijdende dienstverlening",
      ],
    },
    featureRows: [
      {
        title: "Match consultants aan projectvereisten",
        body: "Vind de juiste mensen voor een engagement op basis van de gestelde eisen van de klant.",
        screenshotAlt: "Consultantmatching tegen projectvereisten",
      },
      {
        title: "Klant- en sjabloonspecifieke exports",
        body: "Schakel tussen je huisstijl en het verplichte format van een klant zonder extra handwerk.",
        screenshotAlt: "Export van een klantspecifiek cv-sjabloon",
      },
      {
        title: "Meertalig voor grensoverschrijdende dienstverlening",
        body: "Genereer cv's in de talen waarin je deliveryteams en klanten daadwerkelijk werken.",
        screenshotAlt: "Meertalige cv-set voor een grensoverschrijdend engagement",
      },
      {
        title: "Geanonimiseerde profielen voor blinde/competitieve indieningen",
        body: "Gebruik anonimisering wanneer een engagement of aanbesteding daarom vraagt.",
        screenshotAlt: "Geanonimiseerd cv voor een competitieve engagement-indiening",
      },
    ],
    stats: [],
    related: [
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "MagicCV voor projectdelivery- & engagementteams",
      description:
        "Genereer engagement-klare, on-brand consultant-cv's die aansluiten op de eisen van de klant.",
      keywords: ["cv-tool projectbemensing", "engagement-cv consultancy"],
    },
  },
];
