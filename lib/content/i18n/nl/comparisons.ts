import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase",
    sub: "Een eerlijke vergelijking voor cv- en proposalbeheer in consultancy.",
    whereCompetitorWins: [
      "Sterke merkbekendheid in de markt",
      "Verzorgde, volwassen UX, opgebouwd over jaren",
      "Gevestigde enterprise-klanten en casestudy's",
      "Gevestigde workflows voor proposalgeneratie",
    ],
    whereMagicCvDiffers: [
      "RFP-naar-cv-redenering die start bij de briefing, niet bij een sjabloon",
      "Publieke, self-serve prijzen - geen demogate om de kosten te zien",
      "Gebouwd voor mid-market bureaus, niet enterprise-first",
      "Live in ongeveer een week, geen implementatie van een kwartaal",
      "EU-native: meertalig, AVG-by-design, anonimisering ingebouwd",
    ],
    rows: [
      { category: "Startpunt", magiccv: "Redeneert vanuit de RFP-briefing", competitor: "Sjabloongedreven cv-opmaak" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Achter een demogate" },
      { category: "Doelgroep bureaugrootte", magiccv: "Mid-market (10-250 medewerkers)", competitor: "Enterprise-gericht" },
      { category: "Typische tijd tot live", magiccv: "Ongeveer een week", competitor: "Langere, enterprise-achtige uitrol" },
      { category: "Meertaligheid", magiccv: "5+ EU-talen", competitor: "Wisselt" },
      { category: "Anonimisering", magiccv: "Ingebouwd, één klik", competitor: "Wisselt" },
    ],
    guidance:
      "Heb je inkoopwaardige enterprise-contracten en een lange implementatie nodig? Dan past Flowcase. Wil je binnen een week live zijn en starten vanuit een echte RFP? MagicCV.",
    faqs: [
      {
        question: "Is MagicCV een directe vervanger voor Flowcase?",
        answer:
          "Voor mid-market bureaus die snel willen schakelen op proposal-cv's zonder een uitrol op enterprise-schaal: ja. Grotere organisaties met complexere inkoopeisen geven mogelijk nog de voorkeur aan de enterprise-staat van dienst van Flowcase.",
      },
      {
        question: "Kan ik MagicCV proberen zonder salesgesprek?",
        answer: "Ja - de prijzen zijn publiek en er is een gratis plan (10 profielen, 30 cv's), dus je kunt starten zonder een demo te boeken.",
      },
    ],
    related: [
      { label: "Prijzen", href: "/pricing" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase - eerlijke vergelijking",
      description:
        "Hoe MagicCV zich verhoudt tot Flowcase voor cv-beheer in consultancy: prijzen, AI, implementatie, EU-compliance.",
      keywords: ["Flowcase alternatief", "Flowcase vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cinode",
    competitorName: "Cinode",
    h1: "MagicCV vs Cinode",
    sub: "Een eerlijke vergelijking voor cv- en resourcebeheer in consultancy.",
    whereCompetitorWins: [
      "Brede suite: cv-beheer, skills, sales en resourceplanning in één platform",
      "Sterke aanwezigheid in de Scandinavische landen",
      "Sticky en diep verankerd zodra volledig uitgerold",
    ],
    whereMagicCvDiffers: [
      "Scherpere focus: cv-voor-RFP, beter gedaan dan welke losse module van een bredere suite ook",
      "Snellere uitrol",
      "Lagere kosten en lagere overstapkosten",
      "Publieke, self-serve prijzen",
    ],
    rows: [
      { category: "Scope", magiccv: "Gefocust: RFP-naar-cv-workflow", competitor: "Brede suite: cv + skills + sales + resourcing" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
      { category: "Uitroltijd", magiccv: "Ongeveer een week", competitor: "Langere, suitebrede uitrol" },
      { category: "Regionale kracht", magiccv: "EU-breed, meertalig", competitor: "Sterk in Scandinavië" },
      { category: "Overstapkosten", magiccv: "Laag - smalle, aanvullende tool", competitor: "Hoger zodra volledig verankerd" },
    ],
    guidance:
      "Vervang je HRIS, CRM en resourceplanning in één keer? Cinode. Wil je eerst je proposals op orde brengen en je andere tools houden? MagicCV.",
    faqs: [
      {
        question: "Vervangt MagicCV resourceplanning of een CRM?",
        answer:
          "Nee - MagicCV richt zich specifiek op de RFP-naar-cv-workflow. Heb je een bredere suite nodig die ook resourceplanning en sales dekt, dan is de scope van Cinode ruimer.",
      },
      {
        question: "Kunnen MagicCV en Cinode naast elkaar worden gebruikt?",
        answer:
          "Sommige bureaus gebruiken MagicCV specifiek voor proposal-cv's en houden daarnaast een breder platform voor resourcing - het hangt ervan af hoeveel van de suite je vandaag echt gebruikt.",
      },
    ],
    related: [
      { label: "Prijzen", href: "/pricing" },
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Cinode: focus, uitrolsnelheid, kosten en regionale fit.",
      keywords: ["Cinode alternatief", "Cinode vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv",
    competitorName: "Sprint CV",
    h1: "MagicCV vs Sprint CV",
    sub: "Een eerlijke vergelijking van cv-tools voor consultancy en staffing.",
    whereCompetitorWins: [
      "Product gericht op consultancy en staffing",
      "Degelijke cv-parsing en sjablonen",
      "Sterke aanwezigheid op het Iberisch schiereiland",
    ],
    whereMagicCvDiffers: [
      "AI-native architectuur gebouwd rond RFP-redenering, niet alleen parsing",
      "Publieke prijzen",
      "Snellere iteratie en roadmapvelocity",
      "Bredere dekking van EU-talen",
    ],
    rows: [
      { category: "Kern-engine", magiccv: "AI-native RFP-redenering", competitor: "Cv-parsing en sjablonen" },
      { category: "Regionale kracht", magiccv: "EU-breed", competitor: "Sterk op het Iberisch schiereiland" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
      { category: "Taaldekking", magiccv: "5+ EU-talen", competitor: "Wisselt" },
    ],
    guidance:
      "Voornamelijk actief op het Iberisch schiereiland? Dan is Sprint CV een respectabele keuze. Wil je bredere ondersteuning van EU-talen en AI-native RFP-redenering? MagicCV.",
    faqs: [
      {
        question: "Is Sprint CV een slechte keuze?",
        answer:
          "Nee - het is een degelijk, gefocust product, vooral voor bureaus die voornamelijk op het Iberisch schiereiland actief zijn. Het voordeel van MagicCV zit in bredere dekking van EU-talen en RFP-naar-cv-redenering in plaats van sjabloonparsing.",
      },
    ],
    related: [
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Sprint CV voor cv-beheer in consultancy en staffing.",
      keywords: ["Sprint CV alternatief"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cuvibox",
    competitorName: "CuViBox",
    h1: "MagicCV vs CuViBox",
    sub: "Een eerlijke vergelijking voor consultant-cv-beheer.",
    whereCompetitorWins: ["Degelijke, gevestigde cv-manager", "Volwassen sjabloon-engine"],
    whereMagicCvDiffers: [
      "AI-native: redeneert eerst over de RFP, in plaats van een sjabloon-engine met AI erbovenop",
      "Mid-market, self-serve model",
    ],
    rows: [
      { category: "Aanpak", magiccv: "AI-native, redeneert vanuit de briefing", competitor: "Sjabloon-engine, AI als add-on" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
      { category: "Doelgroep bureaugrootte", magiccv: "Mid-market (10-250 medewerkers)", competitor: "Wisselt" },
    ],
    guidance:
      "Tevreden met een sjabloongedreven workflow met wat AI-hulp erbovenop? Dan is CuViBox een gevestigde optie. Wil je dat de AI-redenering het startpunt is, geen add-on? MagicCV.",
    faqs: [
      {
        question: "Wat is het praktische verschil tussen 'AI-native' en 'AI-assisted'?",
        answer:
          "MagicCV begint bij de RFP en redeneert over welke ervaring ertoe doet, nog vóór er een sjabloon aan te pas komt. Sjabloongedreven tools beginnen bij een cv-format en gebruiken AI om het in te vullen - de briefing komt op de tweede plaats.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot CuViBox: sjabloongedreven vs AI-native cv-generatie.",
      keywords: ["CuViBox alternatief"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "napta",
    competitorName: "Napta",
    h1: "MagicCV vs Napta",
    sub: "Een eerlijke vergelijking voor consultant-cv- en resourcebeheer.",
    whereCompetitorWins: [
      "Breed platform voor resourcemanagement en staffing",
      "Cv-generatie is één module binnen een breder product",
    ],
    whereMagicCvDiffers: [
      "Scherpe focus op specifiek cv-voor-RFP",
      "Sneller uit te rollen",
      "AI-native RFP-redenering",
    ],
    rows: [
      { category: "Scope", magiccv: "Gefocust: cv-voor-RFP", competitor: "Brede resourcemanagement-suite" },
      { category: "Uitroltijd", magiccv: "Ongeveer een week", competitor: "Langere, platformbrede uitrol" },
      { category: "Kern-engine", magiccv: "AI-native RFP-redenering", competitor: "Sjabloongebaseerd" },
    ],
    guidance: "Heb je een volledige resourcemanagement-suite nodig? Napta. Wil je eerst proposal-cv's op orde brengen en in dagen live zijn, niet maanden? MagicCV.",
    faqs: [
      {
        question: "Doet MagicCV resourceplanning zoals Napta?",
        answer:
          "Nee - MagicCV richt zich specifiek op de RFP-naar-cv-workflow. Heb je breder resourcemanagement nodig, dan is de scope van Napta ruimer.",
      },
    ],
    related: [
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Napta: gefocuste cv-voor-RFP-tool vs brede resourcemanagement-suite.",
      keywords: ["Napta alternatief"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sharepoint-word",
    competitorName: "SharePoint + Word",
    h1: "MagicCV vs SharePoint + Word",
    sub: "De echte kosten van niets doen.",
    whereCompetitorWins: ["Geen directe softwarekosten", "Geen leercurve", "Vertrouwd voor iedereen in het team"],
    whereMagicCvDiffers: [
      "Elimineert de verborgen uren-per-week aan handmatig cv's najagen en heropmaken",
      "Consistente, on-brand output in plaats van drift tussen versies",
      "Geen paniek meer op het laatste moment vóór een deadline",
      "Minder onopgemerkt verloren RFP's door cv's die de deadline niet haalden",
    ],
    rows: [
      { category: "Directe kosten", magiccv: "Transparant maandabonnement", competitor: "€0 directe kosten" },
      { category: "Tijd per cv-pakket", magiccv: "Ongeveer 15 minuten", competitor: "Uren per RFP, elke keer weer" },
      { category: "Consistentie", magiccv: "Elke keer hetzelfde merksjabloon", competitor: "Drijft af per persoon die opmaakt" },
      { category: "Deadlinerisico", magiccv: "Gebouwd voor snelle doorlooptijd", competitor: "Paniek op het laatste moment is gebruikelijk" },
    ],
    guidance:
      "SharePoint en Word kosten niets aan licenties - maar de uren die je kwijt bent aan najagen, heropmaken en haastwerk vóór deadlines zijn echte, terugkerende kosten. Gebruik de calculator hieronder om te zien wat dat je team waarschijnlijk kost.",
    faqs: [
      {
        question: "Is 'gratis' niet altijd goedkoper dan een betaalde tool?",
        answer:
          "Alleen als je de tijdskosten niet meetelt. De uren die per RFP opgaan aan het najagen en heropmaken van cv's tellen op - vaak tot meer dan een MagicCV-abonnement per maand kost. De ROI-calculator op deze pagina en op de prijspagina rekent het voor met je eigen cijfers.",
      },
      {
        question: "We hebben al een gedeelde-schijfsysteem dat grotendeels werkt - waarom overstappen?",
        answer:
          "Als het echt werkt, zonder verloren RFP's, inconsistentie of haastwerk, heb je het misschien niet nodig. De meeste teams die MagicCV evalueren, doen dat omdat ten minste één van die pijnpunten hen al tijd of bids kost.",
      },
    ],
    related: [
      { label: "Prijzen", href: "/pricing" },
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Voor salesteams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV vs SharePoint + Word - de echte kosten van niets doen",
      description: "De verborgen kosten van consultant-cv's beheren in SharePoint en Word, en waar dat op uitkomt.",
      keywords: ["consultant-cv SharePoint", "stoppen met cv's beheren in Word"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvgate",
    competitorName: "CVGate",
    h1: "MagicCV vs CVGate",
    sub: "Een eerlijke vergelijking voor cv- en proposalbeheer in consultancy.",
    whereCompetitorWins: [
      "Gericht op cv-beheer voor consultancy/proposals, een nauwe use-case-fit",
      "Transparante, publieke prijsniveaus",
      "Zoeken op skills, CRM/contactbeheer en proposaltools op één plek",
      "Analytics op weergaven/acties van gedeelde cv's",
    ],
    whereMagicCvDiffers: [
      "AI-native: vormt elk cv om rond een briefing of klant, niet alleen sjabloonopmaak",
      "Anonimisering en meertalige output ingebouwd voor EU-aanbestedingen",
      "Breder consultantprofielbeheer als de enige bron van waarheid",
    ],
    rows: [
      { category: "Categorie", magiccv: "AI-native cv-generatie + beheer", competitor: "Cv-beheer + proposaltools" },
      { category: "Afstemmen op een briefing", magiccv: "Redeneert vanuit de briefing", competitor: "Sjabloongebaseerd" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Publieke prijsniveaus" },
      { category: "Anonimisering", magiccv: "Ingebouwd, één klik", competitor: "Wisselt" },
      { category: "Meertaligheid", magiccv: "5+ EU-talen", competitor: "Wisselt" },
    ],
    guidance:
      "CVGate is een degelijke, transparant geprijsde keuze om cv's te centraliseren en proposals te versnellen. Wil je daarnaast AI die elk cv omvormt rond de briefing, plus ingebouwde anonimisering en meertalige output voor EU-aanbestedingen, dan gaat MagicCV verder.",
    faqs: [
      {
        question: "Is CVGate een redelijk alternatief voor MagicCV?",
        answer:
          "Ja - het is oprecht gericht op cv- en proposalbeheer voor consultancy, met publieke prijzen. Het belangrijkste verschil is de AI-native afstemming van MagicCV en de EU-native anonimisering en meertalige output.",
      },
    ],
    related: [
      { label: "Prijzen", href: "/pricing" },
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CVGate - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot CVGate voor cv-beheer en proposals in consultancy: AI-afstemming, anonimisering, meertaligheid, prijzen.",
      keywords: ["CVGate alternatief", "CVGate vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cv-transformer",
    competitorName: "CV-Transformer",
    h1: "MagicCV vs CV-Transformer",
    sub: "Een eerlijke vergelijking voor cv-opmaak en -beheer.",
    whereCompetitorWins: [
      "Sterk in het automatisch opmaken van cv's naar gebrande, gestandaardiseerde sjablonen",
      "Cv-anonimisering en ondersteuning voor 14 talen",
      "ATS-integraties (Greenhouse, JobAdder, Salesforce en meer), opslag binnen de EU",
      "Snelle heropmaak op hoog volume voor staffing en recruitment",
    ],
    whereMagicCvDiffers: [
      "Begint bij de briefing en bepaalt welke ervaring naar voren moet - niet alleen heropmaken",
      "Gecentraliseerde, altijd actuele consultantprofielen als bron van waarheid",
      "Gebouwd rond de proposalworkflow van consultancy, met publieke self-serve prijzen",
    ],
    rows: [
      { category: "Kerntaak", magiccv: "Redeneren + genereren + beheren", competitor: "Heropmaken naar een gebrand sjabloon" },
      { category: "Afstemmen op een briefing", magiccv: "Redeneert vanuit de briefing", competitor: "Heropmaken, niet herprioriteren" },
      { category: "Anonimisering", magiccv: "Ingebouwd", competitor: "Ingebouwd" },
      { category: "Talen", magiccv: "5+ EU-talen", competitor: "14 talen" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Credits / maandelijks (proefperiode beschikbaar)" },
    ],
    guidance:
      "Is je voornaamste behoefte om binnenkomende kandidaat-cv's op volume naar een consistent gebrand format om te zetten, dan is CV-Transformer sterk en integreert het met grote ATS'en. Wil je dat de tool over de briefing redeneert en consultantprofielen door de tijd heen beheert, dan is dat de focus van MagicCV.",
    faqs: [
      {
        question: "Wat is het kernverschil?",
        answer:
          "CV-Transformer blinkt uit in het heropmaken van cv's naar een gestandaardiseerd gebrand sjabloon. MagicCV voegt daar RFP-naar-cv-redenering en doorlopend profielbeheer aan toe, bovenop on-brand export.",
      },
    ],
    related: [
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV-Transformer - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot CV-Transformer: heropmaken vs AI-redenering, anonimisering, talen en prijzen.",
      keywords: ["CV-Transformer alternatief", "CV Transformer vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvconverter",
    competitorName: "CV Converter",
    h1: "MagicCV vs CV Converter",
    sub: "Een eerlijke vergelijking van cv-opmaaktools.",
    whereCompetitorWins: [
      "Heel eenvoudig: upload een Google Docs-sjabloon en converteer kandidaat-cv's ernaar",
      "Transparante, lage pay-as-you-go prijzen met een gratis proefperiode",
      "Behoudt je sjabloonstructuur en branding, geen dataopslag bij de leverancier",
      "Uitstekend voor high-volume recruitment- en RPO-opmaak",
    ],
    whereMagicCvDiffers: [
      "Doet het denkwerk, niet alleen de opmaak - vormt cv's om rond een briefing of klant",
      "Gecentraliseerde consultantprofielen die door de tijd heen actueel blijven",
      "Anonimisering, meertalige output en proposalpakketten voor Europese consultancybids",
    ],
    rows: [
      { category: "Scope", magiccv: "Beheren, afstemmen, genereren, exporteren", competitor: "Alleen formatconversie" },
      { category: "Bron van waarheid", magiccv: "Gestructureerde profielen per consultant", competitor: "Conversie per bestand" },
      { category: "Afstemmen op een briefing", magiccv: "Redeneert vanuit de briefing", competitor: "Niet de focus" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Publiek, per conversie / maandelijks" },
    ],
    guidance:
      "CV Converter is een handige, goedkope manier om cv-opmaak op volume te standaardiseren. Als opmaak echt alles is wat je nodig hebt, is het qua eenvoud moeilijk te verslaan. Wil je profielbeheer en briefinggedreven afstemming, dan is MagicCV de bredere tool.",
    faqs: [
      {
        question: "Is CV Converter goedkoper dan MagicCV?",
        answer:
          "Voor pure opmaak per bestand kunnen de pay-as-you-go prijzen erg laag zijn. MagicCV dekt een bredere workflow - profielbeheer, afstemming, anonimisering, meertalige pakketten - dus de twee lossen een verschillende scope op.",
      },
    ],
    related: [
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Prijzen", href: "/pricing" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV Converter - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot CV Converter: alleen formatconversie vs volledig cv-beheer en AI-afstemming.",
      keywords: ["CV Converter alternatief", "cvconverter vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "muchskills",
    competitorName: "MuchSkills CV Inventory",
    h1: "MagicCV vs MuchSkills CV Inventory",
    sub: "Een eerlijke vergelijking voor skills-gedreven consultant-cv's.",
    whereCompetitorWins: [
      "Genereert cv's vanuit geverifieerde, actuele skillsdata in de MuchSkills-database",
      "Sterk versiebeheer en audittrails voor elk cv",
      "Beheert intern personeel en externe consultants samen",
      "Diepe skills-taxonomie (duizenden certificeringen, tech-vaardigheden, capabilities)",
    ],
    whereMagicCvDiffers: [
      "Werkt vanuit je bestaande profielen en cv's - je hoeft niet eerst een apart skillsdataproduct te adopteren",
      "RFP-naar-cv-redenering die echte ervaring per briefing herprioriteert",
      "EU-native anonimisering en meertalige output voor aanbestedingen, met publieke self-serve prijzen",
    ],
    rows: [
      { category: "Datamodel", magiccv: "Gestructureerde profielen vanuit je cv's/HRIS", competitor: "Gedreven door een skillsdatabase" },
      { category: "Afstemmen op een briefing", magiccv: "Redeneert vanuit de briefing", competitor: "Matcht op skillsdata" },
      { category: "Versiebeheer", magiccv: "Ja", competitor: "Ja, met audittrails" },
      { category: "Anonimisering / meertaligheid", magiccv: "Ingebouwd", competitor: "Wisselt" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
    ],
    guidance:
      "Draai je MuchSkills al als je skills-systeem van record (of wil je dat adopteren), dan is de CV Inventory een natuurlijke uitbreiding met uitstekende skillsdata. Wil je liever sterke, op de briefing afgestemde cv's genereren vanuit de profielen en cv's die je al hebt, dan brengt MagicCV je daar zonder eerst een apart skillsplatform op te tuigen.",
    faqs: [
      {
        question: "Heb ik een skillsdatabase nodig om MagicCV te gebruiken?",
        answer:
          "Nee. MagicCV bouwt gestructureerde profielen vanuit je bestaande cv's (en HRIS op de roadmap). MuchSkills CV Inventory is gebouwd rond zijn skillsdatabase, wat krachtig is als dat al je systeem van record is.",
      },
    ],
    related: [
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs MuchSkills CV Inventory - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot MuchSkills CV Inventory: profielgedreven vs skillsdatabase-gedreven consultant-cv's.",
      keywords: ["MuchSkills alternatief", "CV Inventory vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv-manager",
    competitorName: "SprintCV Enterprise",
    h1: "MagicCV vs SprintCV Enterprise CV Manager",
    sub: "Een eerlijke vergelijking voor enterprise cv-beheer in consultancy.",
    whereCompetitorWins: [
      "Enterprise-grade cv-beheer met degelijke parsing en sjablonen",
      "Gericht op consultancy en staffing, gevestigd op het Iberisch schiereiland",
      "Volwassen beheer- en teammanagementfuncties voor grotere bureaus",
    ],
    whereMagicCvDiffers: [
      "AI-native architectuur gebouwd rond RFP-redenering, niet rond parsing en sjablonen",
      "Publieke, self-serve prijzen en snelle time-to-value voor mid-market bureaus",
      "Bredere dekking van EU-talen, anonimisering ingebouwd",
    ],
    rows: [
      { category: "Kern-engine", magiccv: "AI-native RFP-redenering", competitor: "Parsing + sjablonen" },
      { category: "Doelgroep bureaugrootte", magiccv: "Mid-market (10-250)", competitor: "Enterprise-gericht" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
      { category: "Regionale kracht", magiccv: "EU-breed", competitor: "Sterk op het Iberisch schiereiland" },
    ],
    guidance:
      "Voor een grotere enterprise die een volwassen, beheerintensieve cv-manager zoekt, is het enterprise-product van SprintCV het bekijken waard. Voor mid-market bureaus die binnen een week live willen zijn met AI-native afstemming en publieke prijzen past MagicCV beter.",
    faqs: [
      {
        question: "Hoe verschilt dit van jullie Sprint CV-vergelijking?",
        answer:
          "Het is het enterprise cv-manageraanbod van dezelfde leverancier. De conclusies zijn vergelijkbaar: het voordeel van MagicCV zit in AI-native redenering, publieke prijzen en mid-market snelheid naar waarde.",
      },
    ],
    related: [
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Prijzen", href: "/pricing" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs SprintCV Enterprise CV Manager - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot de enterprise cv-manager van SprintCV: AI-redenering, prijzen, EU-talen.",
      keywords: ["SprintCV alternatief", "Sprint CV enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "enhancv",
    competitorName: "Enhancv",
    h1: "MagicCV vs Enhancv",
    sub: "Een eerlijke vergelijking van cv-builders.",
    whereCompetitorWins: [
      "Uitstekende, verzorgde cv-builder met 40+ sjablonen",
      "One-click import vanuit LinkedIn/DOCX/PDF en matching op vacatureteksten",
      "ATS-vriendelijke output en een teambibliotheek met eigen branding",
      "Sterke fit voor recruitment-, staffing- en loopbaancoachingteams",
    ],
    whereMagicCvDiffers: [
      "Gebouwd voor consultingproposals en engagements, niet voor sollicitatie-cv's",
      "RFP-naar-cv-redenering en proposal-klare cv-pakketten, geen ATS-optimalisatie van losse cv's",
      "EU-native: anonimisering en meertalige output voor aanbestedingen, AVG-by-design",
    ],
    rows: [
      { category: "Primair gebruik", magiccv: "Consultant-cv's voor bids/klanten", competitor: "Cv's van kandidaten/werkzoekenden" },
      { category: "Geoptimaliseerd voor", magiccv: "De klantbriefing", competitor: "ATS / vacatureteksten" },
      { category: "Proposal-cv-pakketten", magiccv: "Ja", competitor: "Niet de focus" },
      { category: "Anonimisering voor aanbestedingen", magiccv: "Ingebouwd", competitor: "Niet de focus" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Publiek" },
    ],
    guidance:
      "Enhancv is een uitstekende keuze als je kandidaat-cv's produceert - vooral voor recruitment- en outplacementwerk waar ATS-vriendelijkheid telt. Gaan je cv's mee in consultingproposals en aanbestedingen, dan is MagicCV voor die taak gebouwd.",
    faqs: [
      {
        question: "Kan Enhancv consulting-proposal-cv's maken?",
        answer:
          "Het kan gebrande, ATS-vriendelijke cv's op schaal produceren. MagicCV is doelgericht gebouwd voor consultancy: briefinggedreven afstemming, proposalpakketten, anonimisering en meertalige output voor Europese bids.",
      },
    ],
    related: [
      { label: "Voor recruitmentteams", href: "/solutions/recruitment" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Enhancv - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Enhancv: consulting-proposal-cv's vs cv-bouw voor kandidaten/werkzoekenden.",
      keywords: ["Enhancv alternatief", "Enhancv vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "visualcv",
    competitorName: "VisualCV",
    h1: "MagicCV vs VisualCV",
    sub: "Een eerlijke vergelijking van cv-builders.",
    whereCompetitorWins: [
      "Gevestigde cv-builder met een businessniveau voor teams",
      "Verzorgde sjablonen, gehoste online cv's en weergave-analytics",
      "Goed voor consistente, gebrande cv's binnen een team",
    ],
    whereMagicCvDiffers: [
      "Consultancy-specifiek: vormt cv's om rond een klantbriefing en stelt proposalpakketten samen",
      "Anonimisering en meertalige output voor EU-aanbestedingen, AVG-by-design",
      "Gecentraliseerd consultantprofielbeheer als bron van waarheid",
    ],
    rows: [
      { category: "Primair gebruik", magiccv: "Consultant-cv's voor bids/klanten", competitor: "Cv's / online cv's" },
      { category: "Afstemmen op een briefing", magiccv: "Redeneert vanuit de briefing", competitor: "Sjabloongebaseerd" },
      { category: "Proposal-cv-pakketten", magiccv: "Ja", competitor: "Niet de focus" },
      { category: "Anonimisering / meertaligheid", magiccv: "Ingebouwd", competitor: "Wisselt" },
    ],
    guidance:
      "VisualCV is een sterke algemene cv-builder, ook voor teams die consistente gebrande cv's willen. Draait je werk om consultingproposals - afstemmen op briefings, pakketten, aanbestedingen - dan is MagicCV de meer gespecialiseerde fit.",
    faqs: [
      {
        question: "Is VisualCV gebouwd voor consultingproposals?",
        answer:
          "Het is een algemene cv-builder met teamfuncties. MagicCV richt zich specifiek op de proposalworkflow van consultancy en de eisen van Europese aanbestedingen.",
      },
    ],
    related: [
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Stem cv's af op elke briefing", href: "/use-cases/tailor-cvs" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs VisualCV - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot VisualCV: consulting-proposal-cv's vs algemene cv-bouw voor teams.",
      keywords: ["VisualCV alternatief", "VisualCV business vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "rezi",
    competitorName: "Rezi",
    h1: "MagicCV vs Rezi",
    sub: "Een eerlijke vergelijking van AI-cv-builders.",
    whereCompetitorWins: [
      "Volwassen AI-cv-builder met white-label-implementatie",
      "Sterke ATS-keywordtargeting en een workflow voor reviewmanagement",
      "SOC 2 Type II, SSO en een grote gebruikersgroep",
      "Uitstekende fit voor universiteiten, loopbaancentra en cv-schrijfdiensten",
    ],
    whereMagicCvDiffers: [
      "Consultingproposals, geen sollicitatie-cv's of ATS-optimalisatie",
      "Briefinggedreven afstemming en proposal-klare cv-pakketten voor klantindieningen",
      "EU-native anonimisering en meertalige output voor aanbestedingen",
    ],
    rows: [
      { category: "Primair gebruik", magiccv: "Consultant-cv's voor bids/klanten", competitor: "Sollicitatie-cv's (white-label)" },
      { category: "Geoptimaliseerd voor", magiccv: "De klantbriefing", competitor: "ATS-keywords" },
      { category: "Doelgroep", magiccv: "Consultancy- & professionele-dienstverleners", competitor: "Universiteiten, loopbaancentra, bureaus" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Publiek (niveaus per seat)" },
    ],
    guidance:
      "Rezi is een sterke keuze als je een gebrande cv-builder uitrolt naar werkzoekenden en om ATS-optimalisatie geeft. Voor consultancybureaus die klantgerichte cv's en proposalpakketten produceren, is MagicCV de beter passende tool.",
    faqs: [
      {
        question: "Optimaliseert MagicCV cv's voor ATS zoals Rezi?",
        answer:
          "Nee - ATS-keywordoptimalisatie is een zorg van werkzoekenden. MagicCV optimaliseert consultant-cv's voor de briefing van de klant en de eisen van proposals en aanbestedingen.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Stel een proposal-klaar cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Rezi - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Rezi: consulting-proposal-cv's vs white-label ATS-cv-bouw.",
      keywords: ["Rezi alternatief", "Rezi enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "neobrain",
    competitorName: "Neobrain",
    h1: "MagicCV vs Neobrain",
    sub: "Een andere categorie - skills- & talentmanagement vs proposal-cv's.",
    whereCompetitorWins: [
      "Enterprise skills-gebaseerd talentmanagement: skillsmapping, interne mobiliteit, workforceplanning",
      "Modules voor performance en loopbaanontwikkeling, HRIS-integraties",
      "Sterke fit voor grote HR-organisaties die moderniseren rond skills",
    ],
    whereMagicCvDiffers: [
      "Produceert klantgerichte consultant-cv's en proposalpakketten - geen interne HR-planning",
      "Briefinggedreven afstemming, on-brand export, anonimisering, meertalig voor aanbestedingen",
      "Live in een week met publieke, self-serve prijzen",
    ],
    rows: [
      { category: "Categorie", magiccv: "Klantgerichte cv's voor proposals", competitor: "Intern skills- & talentmanagement" },
      { category: "Primaire koper", magiccv: "Bid- / delivery- / resourcing-leads", competitor: "HR / peopleleiderschap" },
      { category: "Output", magiccv: "On-brand cv's & proposalpakketten", competitor: "Skillsmaps, mobiliteit, planning" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
    ],
    guidance:
      "Neobrain en MagicCV lossen verschillende problemen op. Heb je enterprise skillsmapping en interne talentmobiliteit nodig, dan is Neobrain daarvoor gebouwd. Wil je consultantprofielen omzetten in klant-klare cv's en proposalpakketten, dan is dat MagicCV. Sommige bureaus gebruiken beide.",
    faqs: [
      {
        question: "Is Neobrain een concurrent van MagicCV?",
        answer:
          "Alleen aan de randen. Neobrain is een skills-gebaseerd HR-/talentplatform; MagicCV produceert klantgerichte cv's voor proposals. Ze kunnen elkaar aanvullen in plaats van elkaar uit te sluiten.",
      },
    ],
    related: [
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Voor HR / People Ops-teams", href: "/solutions/hr" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Neobrain - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot Neobrain: klantgerichte proposal-cv's vs enterprise skills- en talentmanagement.",
      keywords: ["Neobrain alternatief", "Neobrain vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "techwolf",
    competitorName: "TechWolf",
    h1: "MagicCV vs TechWolf",
    sub: "Een andere categorie - skills-intelligentie vs proposal-cv's.",
    whereCompetitorWins: [
      "Enterprise skills-intelligentie-infrastructuur die vaardigheden afleidt uit werksignalen",
      "Integreert met grote HCM's (Workday, SAP SuccessFactors) op zeer grote schaal",
      "Best-in-class voor continue, geautomatiseerde skillsdata over enorme personeelsbestanden",
    ],
    whereMagicCvDiffers: [
      "Zet profielen om in klant-klare cv's en proposalpakketten - geen interne skillsdata",
      "Briefinggedreven afstemming, on-brand export, anonimisering, meertalig voor EU-aanbestedingen",
      "Mid-market-vriendelijk: live in een week, publieke self-serve prijzen",
    ],
    rows: [
      { category: "Categorie", magiccv: "Klantgerichte cv's voor proposals", competitor: "Interne skills-intelligentie" },
      { category: "Output", magiccv: "On-brand cv's & proposalpakketten", competitor: "Skillsdata in HR-systemen" },
      { category: "Schaal", magiccv: "Mid-market consultancybureaus", competitor: "Zeer grote enterprises (100k+ medewerkers)" },
      { category: "Prijzen", magiccv: "Publiek, self-serve", competitor: "Niet publiek" },
    ],
    guidance:
      "TechWolf is een krachtige skills-intelligentielaag voor grote enterprises - een andere taak dan die van MagicCV. Wil je geautomatiseerde, continue skillsdata over een enorm personeelsbestand? TechWolf. Wil je klant-klare consultant-cv's en proposalpakketten? MagicCV.",
    faqs: [
      {
        question: "Leidt MagicCV vaardigheden af uit werkactiviteit zoals TechWolf?",
        answer:
          "Nee - dat is de specialiteit van TechWolf. MagicCV werkt vanuit consultantprofielen en cv's om klantgerichte documenten te produceren; de twee opereren in verschillende lagen van de stack.",
      },
    ],
    related: [
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Vergelijkingshub", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - eerlijke vergelijking",
      description: "Hoe MagicCV zich verhoudt tot TechWolf: klantgerichte proposal-cv's vs enterprise skills-intelligentie.",
      keywords: ["TechWolf alternatief", "TechWolf vs MagicCV"],
    },
  },
];
