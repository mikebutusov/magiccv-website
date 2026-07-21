import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-naar-cv-redenering",
    h1: "Het begint bij de RFP, niet bij een sjabloon.",
    sub: "MagicCV leest de briefing, begrijpt de winvoorwaarden en vormt elk cv daarnaar om - het AI-native verschil.",
    whatItDoesBody:
      "Sjabloontools beginnen bij een cv en hopen dat het bij de briefing past. MagicCV begint bij de RFP: het leest de winvoorwaarden, bepaalt welke ervaring relevant is en legt daar in het cv van elke consultant de nadruk op. Elke bewering blijft herleidbaar naar het bronprofiel - we verzinnen niets, we herprioriteren. Er is een optionele conservatieve 'niet-genereren'-modus voor situaties waarin een mens moet meekijken voordat er iets wordt geschreven.",
    benefits: [
      {
        title: "Leest de briefing zoals een proposalmanager dat zou doen",
        body: "MagicCV analyseert de RFP op winvoorwaarden, vereiste vaardigheden en beoordelingscriteria - precies waar een ervaren bidmanager als eerste naar kijkt.",
        screenshotAlt: "RFP-naar-cv-generatie: analyse van de briefing",
      },
      {
        title: "Herprioriteert, verzint nooit",
        body: "Elke zin in een gegenereerd cv is herleidbaar naar een feit in het bronprofiel van de consultant. Er wordt niets verzonnen om bij de briefing te passen.",
        screenshotAlt: "RFP-naar-cv-generatie: herkomstweergave van beweringen",
      },
      {
        title: "Een conservatieve modus als je een mens in de loop wilt",
        body: "Zet de niet-genereren-modus aan en MagicCV markeert relevante ervaring ter beoordeling in plaats van het cv meteen te schrijven.",
        screenshotAlt: "RFP-naar-cv-generatie: schakelaar voor conservatieve modus",
      },
    ],
    connectsTo: [
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
    ],
    faqs: [
      {
        question: "Verzint MagicCV ooit ervaring die een consultant niet heeft?",
        answer:
          "Nee. De RFP-naar-cv-redenering herprioriteert en herordent alleen echte ervaring uit het bronprofiel van een consultant. Elke bewering in een gegenereerd cv is herleidbaar naar dat profiel.",
      },
      {
        question: "Wat als ik wil dat iemand de output controleert voordat die wordt gebruikt?",
        answer:
          "Zet de conservatieve ('niet-genereren') modus aan. MagicCV toont dan de relevante ervaring en de voorgestelde accenten ter beoordeling, in plaats van automatisch een definitief cv te produceren.",
      },
      {
        question: "Wat plak ik in - de volledige RFP of een samenvatting?",
        answer:
          "Plak de briefing zoals je die hebt: een volledig RFP-document, een overzicht van beoordelingscriteria of een korte samenvatting. MagicCV haalt eruit wat het nodig heeft, ongeacht wat je aanlevert.",
      },
    ],
    related: [
      { label: "Stem cv's af op elke briefing", href: "/use-cases/tailor-cvs" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "RFP-naar-cv-redenering - de AI-native engine van MagicCV",
      description:
        "MagicCV leest de briefing, begrijpt de winvoorwaarden en vormt elk consultant-cv daarnaar om - zonder ervaring te verzinnen.",
      keywords: ["AI cv voor RFP", "RFP naar cv tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Merkconsistente exports",
    h1: "Elk cv, perfect on-brand.",
    sub: "Jouw lettertypen, kleuren en lay-out - automatisch toegepast op elk consultant-cv en proposalpakket.",
    whatItDoesBody:
      "Stel je huisstijl één keer in - lettertypen, kleuren, logoplaatsing, lay-out - en elk cv dat MagicCV genereert gebruikt die automatisch. Exporteer naar PDF of DOCX en schakel over naar klant- of aanbestedingsspecifieke sjablonen wanneer een bid een bepaald format vereist, zonder de onderliggende profieldata aan te raken.",
    benefits: [
      {
        title: "Eén merksjabloon, overal toegepast",
        body: "Definieer de visuele identiteit van je bureau één keer. Elk consultant-cv en elk proposalpakket erft die automatisch - geen handmatige opmaak per bid.",
        screenshotAlt: "Merksjablooneditor met toegepast bedrijfslogo en kleuren",
      },
      {
        title: "Klant- en aanbestedingsspecifieke formats op aanvraag",
        body: "Houd je huisstijl als standaard en schakel over naar het verplichte sjabloon van een klant of een format voor overheidsaanbestedingen, zonder iets handmatig opnieuw op te bouwen.",
        screenshotAlt: "Sjabloonkiezer met huisstijl versus klantspecifiek format",
      },
      {
        title: "Exporteren naar PDF of DOCX",
        body: "Genereer indieningsklare bestanden in het format dat jouw proposalproces daadwerkelijk nodig heeft.",
        screenshotAlt: "Exportdialoog met PDF- en DOCX-uitvoeropties",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Kunnen we een ander sjabloon gebruiken voor een specifieke klant of aanbesteding?",
        answer:
          "Ja. Stel je huisstijl in als standaard en voeg klant- of aanbestedingsspecifieke sjablonen toe wanneer een bid dat vereist, zonder de onderliggende profieldata aan te raken.",
      },
      {
        question: "Welke exportformaten worden ondersteund?",
        answer: "Op dit moment PDF en DOCX, beide gegenereerd vanuit hetzelfde on-brand sjabloonsysteem.",
      },
    ],
    related: [
      { label: "Design- & creatieve bureaus", href: "/solutions/design-agencies" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Merkconsistente cv-sjablonen & exports - MagicCV",
      description:
        "Jouw lettertypen, kleuren en lay-out automatisch toegepast op elk consultant-cv en proposalpakket. Export naar PDF en DOCX.",
      keywords: ["cv-sjabloon huisstijl tool", "consistente consultant-cv's"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonimisering & AVG",
    h1: "Anonimisering ingebouwd, niet aangeplakt.",
    sub: "Blinde cv's voor aanbestedingen en competitieve bids met één klik, met AVG-by-design door en door.",
    whatItDoesBody:
      "Schakel anonimisering in op elk cv om namen, foto's en andere identificerende gegevens te verwijderen volgens regels die jij bepaalt - consistent, voor je hele team, elke keer. Gebouwd voor blinde beoordelingsprocessen en openbare aanbestedingen, en van begin tot eind ondersteund door AVG-by-design gegevensverwerking. Zie het Trust Center voor het volledige compliancebeeld.",
    benefits: [
      {
        title: "Anonimiseren met één klik",
        body: "Verwijder identificerende gegevens uit elk cv met één schakelaar - geen handmatig zwartlakken, geen inconsistentie tussen consultants.",
        screenshotAlt: "Anonimiseringsschakelaar met cv-vergelijking voor/na",
      },
      {
        title: "Regie over wat er wordt verwijderd",
        body: "Configureer precies welke velden in jouw proces als identificerend gelden, zodat geanonimiseerde cv's voldoen aan de specifieke aanbestedings- of beoordelingseis.",
        screenshotAlt: "Configuratiepaneel voor anonimiseringsregels",
      },
      {
        title: "Consistent op schaal",
        body: "Elk geanonimiseerd cv volgt dezelfde regels, of het nu om één indiening gaat of om een volledig teampakket voor een openbare aanbesteding.",
        screenshotAlt: "Geanonimiseerd cv-pakket voor een team van meerdere consultants",
      },
    ],
    connectsTo: [
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Wat wordt er verwijderd als een cv wordt geanonimiseerd?",
        answer:
          "Namen, foto's en andere identificerende gegevens worden verwijderd volgens regels die jij configureert - afgestemd op de eisen van blinde beoordelingen en openbare aanbestedingen.",
      },
      {
        question: "Voldoet dit aan de AVG?",
        answer:
          "Anonimisering is één onderdeel van MagicCV's AVG-by-design aanpak. Zie het Trust Center voor het volledige beeld van dataresidentie, bewaartermijnen en verwerking.",
      },
    ],
    related: [
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "Cv-anonimisering & AVG - MagicCV",
      description:
        "Blinde cv's voor aanbestedingen en competitieve bids met één klik, met AVG-by-design door en door.",
      keywords: ["cv anonimiseren", "AVG cv-tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Meertaligheid & vertaling",
    h1: "Bied in elke Europese taal.",
    sub: "Genereer professionele, on-brand cv's in EN, DE, FR, NL, ES en meer, vanuit één masterprofiel.",
    whatItDoesBody:
      "Onderhoud één masterprofiel per consultant en genereer op aanvraag nauwkeurige, on-brand cv's in elke ondersteunde taal - niets overtypen, geen losse documenten om synchroon te houden. De huidige dekking omvat de belangrijkste EU-talen waarin de mid-market consultingklanten van MagicCV het vaakst bieden, met meer talen op de roadmap.",
    benefits: [
      {
        title: "Eén masterprofiel, vele talen",
        body: "Onderhoud één bron van waarheid per consultant. Genereer een vertaald, on-brand cv in elke ondersteunde taal wanneer een bid daarom vraagt.",
        screenshotAlt: "Taalkiezer die een cv in meerdere EU-talen genereert",
      },
      {
        title: "Gebouwd voor Europese aanbestedingen",
        body: "Grensoverschrijdende aanbestedingen en meertalige beoordelingspanels zijn voor de klanten van MagicCV de normale gang van zaken, geen uitzondering.",
        screenshotAlt: "Meertalig cv-pakket voor een grensoverschrijdende aanbesteding",
      },
      {
        title: "Consistente kwaliteit in elke taal",
        body: "Hetzelfde merksjabloon en dezelfde onderliggende feiten lopen door elke taalversie heen - niets drijft af tussen vertalingen.",
        screenshotAlt: "Cv-vergelijking naast elkaar in twee talen",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Welke talen worden op dit moment ondersteund?",
        answer:
          "EN, DE, FR, NL en ES worden vandaag ondersteund - de kerntalen waarin de mid-market Europese klanten van MagicCV bieden. Meer EU-talen staan op de roadmap.",
      },
      {
        question: "Moet ik per taal een apart profiel bijhouden?",
        answer:
          "Nee. Onderhoud één masterprofiel per consultant en genereer elke ondersteunde taal op aanvraag - er is niets dat je handmatig synchroon hoeft te houden.",
      },
    ],
    related: [
      { label: "Vertaal cv's naar elke taal", href: "/use-cases/translate-cvs" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Meertalige cv's & vertaling - MagicCV",
      description:
        "Genereer professionele, on-brand cv's in EN, DE, FR, NL, ES en meer, vanuit één masterprofiel.",
      keywords: ["meertalige cv-tool", "cv in meerdere talen"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Gecentraliseerde profielen & skills-intelligentie",
    h1: "Eén gestructureerd profiel per persoon - eindeloos herbruikbaar.",
    sub: "Importeer, verrijk en doorzoek je hele team op vaardigheden en ervaring; genereer elke output op aanvraag.",
    whatItDoesBody:
      "Vervang verspreide cv's op gedeelde schijven en in inboxen door één gestructureerd, altijd actueel profiel per consultant. Importeer vandaag vanuit bestaande bestanden, met LinkedIn- en HRIS-verrijking op de roadmap. Doorzoek vervolgens je hele bench op vaardigheid of ervaring en genereer wat een bid ook vereist - op aanvraag, vanuit één bron van waarheid.",
    benefits: [
      {
        title: "Gestructureerde profielen, geen vrije documenten",
        body: "De ervaring, vaardigheden en certificeringen van elke consultant leven als gestructureerde data - doorzoekbaar en herbruikbaar, niet opgesloten in een Word-bestand.",
        screenshotAlt: "Editor voor gestructureerd consultantprofiel",
      },
      {
        title: "Importeren en verrijken",
        body: "Breng bestaande cv's binnen om te starten. LinkedIn- en HRIS-verrijking (Personio, BambooHR, HiBob) staan op de roadmap om profielen automatisch actueel te houden.",
        screenshotAlt: "Profielimport vanuit bestaande cv-bestanden",
      },
      {
        title: "Vind snel de juiste persoon",
        body: "Doorzoek je hele bench op vaardigheid, certificering of eerder project om de volgende briefing in minuten te bemensen - zonder speurtocht door mappen.",
        screenshotAlt: "Skills-zoekopdracht over de consultantbench",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Hoe krijg ik bestaande cv's in MagicCV?",
        answer:
          "Importeer je bestaande cv-bestanden om gestructureerde profielen te maken. LinkedIn- en HRIS-verrijking (Personio, BambooHR, HiBob) staan op de roadmap om ze met minder handwerk actueel te houden.",
      },
      {
        question: "Kan ik alle consultants doorzoeken op vaardigheid?",
        answer:
          "Ja. Elk profiel bestaat uit gestructureerde data, dus je kunt je hele bench doorzoeken op vaardigheid, certificering of eerder project om een briefing snel te bemensen.",
      },
    ],
    related: [
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Voor HR / People Ops-teams", href: "/solutions/hr" },
      { label: "Voor recruitmentteams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Gecentraliseerde consultantprofielen & skills-intelligentie - MagicCV",
      description:
        "Importeer, verrijk en doorzoek je hele team op vaardigheden en ervaring; genereer elke output op aanvraag.",
      keywords: ["skills-database consultants", "cv-profielbeheer"],
    },
  },
];
