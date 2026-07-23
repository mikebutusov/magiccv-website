import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase: wat past bij hoe jouw team bidt?",
    sub: "Beide tools beheren consultant-cv's voor proposals. De echte verschillen zitten in voor wie ze gebouwd zijn, hoe snel je live bent en wat de AI daadwerkelijk met een RFP doet.",
    whereCompetitorWins: [
      "De categorieleider qua naamsbekendheid: vraagt je inkoopteam om referenties, dan heeft Flowcase jaren aan enterprise-casestudy's om naar te wijzen",
      "Een volwassen, verzorgd product, verfijnd over een groot klantenbestand sinds de CV Partner-tijd",
      "Diepere enterprise-proposalworkflows, inclusief gevestigde processen voor grote bidteams met formele reviewfases",
      "Een betere fit als je een leverancier nodig hebt die al vele malen door de securityreview is gekomen bij bureaus van jouw omvang",
    ],
    whereMagicCvDiffers: [
      "Start vanuit de RFP: plak de briefing en de AI vormt elk cv om rond de eisen, in plaats van dat jij binnen een sjabloon bepaalt wat de nadruk krijgt",
      "Chatgebaseerd bewerken: 'kort de laatste twee rollen in, begin met het bankenwerk' in plaats van door formuliervelden klikken",
      "Prijzen op de website: Free-abonnement (10 profielen, 30 cv's), Pro voor $50/maand (200 profielen, 600 cv's). Geen demogesprek om de kosten te achterhalen",
      "Time-to-value gemeten in een dag, geen implementatieproject: importeer je bestaande Word- en PDF-cv's en exporteer dezelfde middag het eerste gebrande cv",
      "Anonimisering en vertaling met één klik die je lay-out behouden, ingebouwd voor EU-aanbestedingen en raamovereenkomsten",
    ],
    rows: [
      { category: "Waar afstemming begint", magiccv: "Vanuit de RFP-tekst: AI leest de briefing en heraccentueert elk cv", competitor: "Vanuit het cv: jij kiest hoogtepunten binnen masterprofiel-sjablonen" },
      { category: "Hoe je bewerkt", magiccv: "Chatinstructies plus directe bewerkingen", competitor: "Gestructureerde formulieren en sjabloonvelden" },
      { category: "Prijsmodel", magiccv: "Publiek: Free, $50/mnd Pro, maatwerk Enterprise", competitor: "Op offertebasis, doorgaans via een sales- en demoproces" },
      { category: "Voor wie gebouwd", magiccv: "Mid-market bureaus, 10-250 consultants", competitor: "Gepositioneerd richting grotere enterprise-bureaus" },
      { category: "Aan de slag", magiccv: "Self-serve: importeer cv's, eerste export dezelfde dag", competitor: "Doorgaans een onboarding- en implementatiefase" },
      { category: "Anonimisering voor aanbestedingen", magiccv: "Eén klik, blinde cv's in je sjabloon", competitor: "Beschikbaar; opzet wisselt per configuratie" },
    ],
    guidance:
      "Ben je een bureau van 500 mensen met een inkoopproces, een securityteam en budget voor een implementatiepartner, dan is de staat van dienst van Flowcase een echt pluspunt. Ben je een bureau van 15-150 mensen dat avonden verliest aan cv-heropmaak en wil je dat deze week oplossen zonder salescyclus, dan is MagicCV daar precies voor gebouwd. Probeer het gratis abonnement op één lopende bid en vergelijk de output.",
    faqs: [
      {
        question: "Kunnen we migreren van Flowcase naar MagicCV?",
        answer:
          "Ja. Exporteer je cv's uit Flowcase als Word of PDF, sleep ze in MagicCV en de AI parseert elk bestand naar een gestructureerd profiel. Er is geen migratieproject - de cv's van een team van 50 personen zijn doorgaans in een middag geïmporteerd.",
      },
      {
        question: "Is MagicCV een volledige vervanger voor Flowcase?",
        answer:
          "Voor de kerntaak - consultant-cv's actueel houden, ze per bid afstemmen en on-brand documenten exporteren - ja. Flowcase gaat dieper op enterprise-proposalworkflows en heeft een langere enterprise-staat van dienst, wat zwaarder weegt naarmate je bureau groter is.",
      },
      {
        question: "Hoe verhouden de prijzen van MagicCV zich tot die van Flowcase?",
        answer:
          "MagicCV publiceert prijzen: Free (10 profielen, 30 cv's), Pro voor $50/maand (200 profielen, 600 cv's) en een maatwerk Enterprise-abonnement met SSO. De prijzen van Flowcase zijn doorgaans op offertebasis, dus een een-op-eenvergelijking vereist hun salesproces.",
      },
      {
        question: "Hoe lang duurt de uitrol vergeleken met Flowcase?",
        answer:
          "MagicCV is self-serve: de meeste teams importeren hun bestaande cv's en exporteren dezelfde dag het eerste gebrande cv. Enterprise-platforms draaien doorgaans een onboardingfase met sjabloonopzet en training - redelijk op enterprise-schaal, maar overkill voor een bureau van 30 mensen.",
      },
      {
        question: "We werken aan EU-aanbestedingen. Hoe vergelijken de twee op compliance?",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, auditlogs en blinde cv's met één klik voor geanonimiseerde indieningen. SOC 2 is in uitvoering. Flowcase bedient ook Europese bureaus; verifieer hun actuele certificeringen rechtstreeks voor je inkoopchecklist.",
      },
      {
        question: "Kan ik MagicCV proberen zonder met sales te praten?",
        answer:
          "Ja. Meld je aan op getmagic.cv, importeer een handvol cv's op het gratis abonnement en draai er één echte RFP doorheen. Is de afgestemde output niet beter dan wat je handmatig produceert, dan ben je een uur kwijt, geen kwartaal.",
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
    h1: "MagicCV vs Cinode: gefocuste cv-tool of volledige consultancysuite?",
    sub: "Cinode is een businessplatform voor consultancies. MagicCV doet één taak - proposal-klare cv's - en doet die in een dag. Wat je nodig hebt, hangt af van wat er daadwerkelijk kapot is.",
    whereCompetitorWins: [
      "Echte suitebreedte: cv's, skillsmanagement, salespipeline, onderaannemersnetwerken en resourceplanning in één platform",
      "Sterke aanwezigheid onder Scandinavische consultancies, met een gevestigd partnernetwerk in die markt",
      "Eén leverancier, één login, één datamodel over sales, staffing en delivery heen zodra volledig geadopteerd",
      "Een betere fit als je bureau heeft besloten de hele business op één consultancyplatform te draaien",
    ],
    whereMagicCvDiffers: [
      "Doet de ene taak die de meeste suites het minst goed doen: een RFP lezen en consultant-cv's eromheen vormen, met AI die start vanuit de briefing",
      "Geen suitebrede uitrol: importeer je bestaande cv's en exporteer dezelfde dag het eerste gebrande document, terwijl je CRM en planningstools onaangeraakt blijven",
      "Pro-abonnement voor $50/maand met prijzen op de website - geen scopinggesprek om te horen wat een module kost",
      "Chatbewerking en anonimisering en vertaling met één klik voor EU-aanbestedingen, ingebouwd in de cv-workflow in plaats van verspreid over modules",
    ],
    rows: [
      { category: "Scope", magiccv: "Eén workflow: profielen, RFP-afstemming, gebrande export", competitor: "Businesssuite: cv's, skills, sales, resourcing, partners" },
      { category: "Wat je vervangt", magiccv: "De SharePoint-map en het dinsdagavond-opmaken", competitor: "Mogelijk je CRM, bezettingsoverzicht en cv-proces tegelijk" },
      { category: "Tijd tot het eerste cv eruit is", magiccv: "Dezelfde dag, self-serve", competitor: "Doorgaans een gefaseerde, suitebrede implementatie" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Op offertebasis, doorgaans per module en seat" },
      { category: "Overstapkosten later", magiccv: "Laag: exporteer je cv's en profielen en stap over", competitor: "Hoger zodra sales- en staffingdata in de suite leven" },
      { category: "RFP-afstemming", magiccv: "AI leest de briefing en vormt elk cv om", competitor: "Cv-module met sjablonen; afstemmen is grotendeels handmatig" },
    ],
    guidance:
      "Consolideert je bureau sales, staffing en skills op één platform - en heb je de appetijt voor dat project - dan is Cinode een geloofwaardige suite met echte Scandinavische roots. Is de acute pijn proposal-cv's en wil je je business niet re-platformen om dat op te lossen, dan lost MagicCV dat ene probleem deze week op. Genoeg teams fixen eerst de cv's en nemen de suitebeslissing later, met betere informatie.",
    faqs: [
      {
        question: "Vervangt MagicCV de resourceplanning of salespipeline van Cinode?",
        answer:
          "Nee. MagicCV dekt consultantprofielen, RFP-afstemming en gebrande cv-export. Heb je bezettingsplanning, een salespipeline of onderaannemersbeheer nodig, dan is dat suiteterritorium - de scope van Cinode is oprecht breder.",
      },
      {
        question: "Kunnen we MagicCV naast Cinode gebruiken?",
        answer:
          "Ja, en sommige teams doen dat: de suite voor staffing en pipeline, MagicCV voor de cv's die in bids gaan. Omdat MagicCV elk Word- of PDF-cv importeert, is er geen integratieproject nodig om ze naast elkaar te laten bestaan.",
      },
      {
        question: "Kunnen we cv's migreren van Cinode naar MagicCV?",
        answer:
          "Ja. Exporteer cv's uit Cinode als Word of PDF en importeer ze in MagicCV; de AI parseert elk bestand naar een gestructureerd, doorzoekbaar profiel. Geen veldmapping, geen migratieconsultant.",
      },
      {
        question: "Hoe verhouden de kosten zich?",
        answer:
          "MagicCV publiceert prijzen: Free (10 profielen, 30 cv's), $50/maand Pro (200 profielen, 600 cv's), maatwerk Enterprise. Cinode-prijzen worden doorgaans per module en aantal seats geoffreerd, dus de totale kosten hangen af van hoeveel van de suite je afneemt.",
      },
      {
        question: "We zijn een Scandinavische consultancy - is Cinode dan niet de logische keuze?",
        answer:
          "Het is een sterke regionale keuze, zeker als je de hele suite wilt. Maar draait je evaluatie eigenlijk om proposal-cv's, vergelijk dan de specifieke workflow: plak een briefing in MagicCV, stem drie cv's af en klok het tegen je huidige proces voordat je je aan een platform verbindt.",
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
    h1: "MagicCV vs Sprint CV: twee visies op cv-automatisering voor consultancy",
    sub: "Beide richten zich op consultancy- en staffingbureaus die handmatige cv-opmaak beu zijn. Het verschil is wat de automatisering doet: snel sjablonen vullen, of eerst over de briefing redeneren.",
    whereCompetitorWins: [
      "Specifiek gebouwd voor consultancy en staffing, dus de cv-structuren passen bij hoe IT-dienstverleners mensen daadwerkelijk presenteren",
      "Degelijke cv-parsing en sjabloongeneratie die al jaren in productie draait bij consultancies",
      "Sterke aanwezigheid in Portugal en Spanje, met referentieklanten in de Iberische IT-dienstenmarkt",
      "Een rechttoe rechtaan, bewezen workflow als sjabloongebaseerde generatie alles is wat je nodig hebt",
    ],
    whereMagicCvDiffers: [
      "AI-native afstemming: plak de RFP of klantbriefing en het cv wordt omgevormd rond de eisen - welke projecten vooropstaan, wat wordt ingekort - niet alleen opnieuw gerenderd in een sjabloon",
      "Chatbewerking bovenop gestructureerde profielen: 'leg de nadruk op het Azure-migratiewerk' verslaat het handmatig herbewerken van een gegenereerd document",
      "Vertaling naar elke taal met behoud van je lay-out, plus anonimisering met één klik voor blinde indieningen",
      "Publieke prijzen met een gratis abonnement, zodat je de outputkwaliteit op een echte bid kunt benchmarken voordat je iets uitgeeft",
    ],
    rows: [
      { category: "Kern-engine", magiccv: "AI leest de briefing en vormt daarna het cv om", competitor: "Parseert cv's en genereert vanuit sjablonen" },
      { category: "Afstemming per bid", magiccv: "Automatische heraccentuering vanuit de RFP-tekst", competitor: "Doorgaans handmatige selectie binnen het sjabloon" },
      { category: "Bewerken", magiccv: "Chatinstructies plus directe bewerkingen", competitor: "Sjabloon- en formuliergebaseerd bewerken" },
      { category: "Talen", magiccv: "Vertaal elk cv, lay-out behouden", competitor: "Meertalige ondersteuning; dekking wisselt" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Doorgaans op offertebasis" },
      { category: "Regionale kracht", magiccv: "EU-breed, AVG-by-design, EU-dataresidentie", competitor: "Sterkst op het Iberisch schiereiland" },
    ],
    guidance:
      "Ben je een Iberische consultancy die bewezen sjabloongebaseerde cv-generatie wil van een leverancier met lokale referenties, dan is Sprint CV een respectabele keuze. Is het denkwerk het deel dat je geautomatiseerd wilt - welke ervaring naar voren moet voor deze specifieke briefing - dan is dat wat de RFP-naar-cv-engine van MagicCV doet. Draai dezelfde RFP door beide en vergelijk de concepten.",
    faqs: [
      {
        question: "Kunnen we overstappen van Sprint CV naar MagicCV?",
        answer:
          "Ja. Exporteer je cv's als Word of PDF, importeer ze in MagicCV en elk bestand wordt automatisch een gestructureerd profiel. De meeste teams produceren dezelfde dag gebrande, afgestemde exports.",
      },
      {
        question: "Wat betekent 'AI-native' in de praktijk versus sjabloongeneratie?",
        answer:
          "Sjabloontools nemen een opgeslagen cv en renderen het consistent. MagicCV leest eerst de briefing, bepaalt welke projecten, vaardigheden en certificeringen ertoe doen, herordent en herschrijft dienovereenkomstig, en rendert daarna in jouw sjabloon. De opmaak is de basisvoorwaarde; de afstemming is het verschil.",
      },
      {
        question: "Dekt MagicCV de talen waarin wij bieden?",
        answer:
          "Ja - MagicCV vertaalt cv's naar elke taal met behoud van de lay-out, dus een Portugees masterprofiel kan de deur uit in het Engels, Frans of Duits zonder heropmaakronde.",
      },
      {
        question: "Hoe verhouden de prijzen zich?",
        answer:
          "De prijzen van MagicCV staan op de website: Free (10 profielen, 30 cv's), $50/maand Pro (200 profielen, 600 cv's). De prijzen van Sprint CV lopen doorgaans via hun salesproces, dus vraag een offerte op en vergelijk die met Pro voor jouw teamgrootte.",
      },
      {
        question: "Is MagicCV geschikt voor staffingbureaus of alleen voor consultancies?",
        answer:
          "Beide. Staffingteams gebruiken dezelfde workflow - importeer kandidaat-cv's, anonimiseer met één klik voor blinde indieningen en exporteer in het sjabloon van de klant of van jezelf. De RFP-afstemming werkt net zo goed op een rolomschrijving als op een aanbesteding.",
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
    h1: "MagicCV vs CuViBox: sjabloon-engine of briefing-first AI?",
    sub: "Beide centraliseren consultant-cv's en exporteren ze consistent. De splitsing in de weg is of afstemming start vanuit jouw sjabloon of vanuit de briefing van de klant.",
    whereCompetitorWins: [
      "Een gevestigde consultant-cv-manager met een volwassen sjabloon-engine die al jaren echte documentstandaarden van consultancybureaus aankan",
      "Een voorspelbare, gestructureerde workflow: sla de data één keer op en genereer er consistente documenten uit",
      "Eenvoudiger te doorgronden als je AI-herschrijven wantrouwt en deterministische, veld-voor-veld output wilt",
    ],
    whereMagicCvDiffers: [
      "Redeneert vanuit de RFP voordat het rendert: de AI leest de briefing en bepaalt welke ervaring vooropstaat, in plaats van dat oordeel over te laten aan wie er om 19.00 uur zit op te maken",
      "Chatbewerking: vertel het cv in gewone taal wat er anders moet, in plaats van door velden te speuren",
      "Anonimisering met één klik en vertaling naar elke taal met behoud van lay-out - de twee meest gevraagde eisen bij EU-aanbestedingen, ingebouwd",
      "Self-serve met publieke prijzen: Free-abonnement om te testen, $50/maand Pro als het beklijft",
    ],
    rows: [
      { category: "Aanpak", magiccv: "Briefing-first: AI leest de RFP en genereert daarna", competitor: "Sjabloon-first: gestructureerde data gerenderd naar documenten" },
      { category: "Afstemming per bid", magiccv: "Automatische heraccentuering per briefing", competitor: "Doorgaans handmatige selectie van wat erin komt" },
      { category: "Bewerkmodel", magiccv: "Chatinstructies plus directe bewerkingen", competitor: "Gestructureerde velden en sjablonen" },
      { category: "Anonimisering / vertaling", magiccv: "Elk één klik, lay-out behouden", competitor: "Wisselt per configuratie" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Doorgaans op offertebasis" },
      { category: "Aan de slag", magiccv: "Importeer bestaande cv's, eerste export dezelfde dag", competitor: "Eerst opzet van datastructuur en sjablonen" },
    ],
    guidance:
      "Wil je een deterministische sjabloon-engine waarin elk veld wordt geplaatst door een regel die jij configureerde, dan is CuViBox een gevestigde optie. Is de bottleneck bij jouw bureau het beslissen en herschrijven - 8 cv's omvormen rond een RFP-bijlage van 40 pagina's vóór donderdag - dan automatiseert MagicCV dat oordeelswerk, niet alleen het renderen. Het gratis abonnement maakt de vergelijking goedkoop om uit te voeren.",
    faqs: [
      {
        question: "Wat is het praktische verschil tussen 'AI-native' en 'AI-assisted'?",
        answer:
          "MagicCV start vanuit de RFP: het leest de briefing, bepaalt welke projecten en vaardigheden ertoe doen en vormt het cv om voordat het in je sjabloon wordt gerenderd. Sjabloon-first tools starten vanuit het documentformat en gebruiken AI, als ze dat al doen, om velden te helpen invullen - de briefing komt op de tweede plaats.",
      },
      {
        question: "Kunnen we onze cv's van CuViBox naar MagicCV verhuizen?",
        answer:
          "Ja. Exporteer cv's als Word of PDF en importeer ze in MagicCV - de AI parseert elk bestand naar een gestructureerd profiel. Er is geen veldmapping-exercitie; de bibliotheek van een middelgroot team importeert in een middag.",
      },
      {
        question: "Houdt MagicCV onze documentstandaarden even strikt aan als een sjabloon-engine?",
        answer:
          "Ja. Je merksjabloon wordt één keer ingesteld, en elke export - PDF of Word - rendert er pixelconsistent naartoe. De AI verandert wat het cv zegt per briefing, nooit hoe de documenten van je bureau eruitzien.",
      },
      {
        question: "Wat als we AI niet vertrouwen om consultant-cv's te herschrijven?",
        answer:
          "Er gaat niets ongecontroleerd de deur uit. De AI produceert een afgestemd concept; jij leest het, past het aan via chat of directe bewerkingen en exporteert als je tevreden bent. De meeste teams merken dat het beoordelen van een goed concept 10 minuten kost waar vanaf nul schrijven een uur kostte.",
      },
      {
        question: "Wat kost MagicCV vergeleken met CuViBox?",
        answer:
          "De prijzen van MagicCV zijn publiek: Free (10 profielen, 30 cv's), $50/maand Pro (200 profielen, 600 cv's), maatwerk Enterprise met SSO. CuViBox-prijzen verkrijg je doorgaans via hun salesproces, dus vergelijk een offerte met Pro voor jouw personeelsomvang.",
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
    h1: "MagicCV vs Napta: proposal-cv's fixen, of staffing re-platformen?",
    sub: "Napta is een resourcemanagementplatform waarin cv's één module zijn. MagicCV is de cv-workflow, diepgaand gedaan. De juiste keuze hangt af van welk probleem je bids kost.",
    whereCompetitorWins: [
      "Een volledig staffing- en resourcemanagementplatform: bezetting, projectbemensing, skills en loopbaanontwikkeling op één plek",
      "Cv-generatie komt gebundeld met de staffingdata, dus profielen en beschikbaarheid leven samen zodra het platform is geadopteerd",
      "Een sterke keuze voor bureaus waarvan de kernpijn staffingzichtbaarheid en bezetting is, niet alleen documenten",
      "Gevestigd bij middelgrote en grote consultancies, met name in Frankrijk",
    ],
    whereMagicCvDiffers: [
      "Gaat diep waar suites breed gaan: AI leest de daadwerkelijke RFP en vormt het cv van elke consultant eromheen, met chatbewerking om het concept te verfijnen",
      "Geen platformmigratie: je bezettingsoverzicht, HRIS en CRM blijven waar ze zijn - MagicCV neemt alleen de cv-chaos over",
      "Live op de dag dat je je Word- en PDF-cv's importeert, versus een platformuitrol met configuratie en training",
      "Publieke prijzen vanaf $0, met Pro voor $50/maand - geen resourcemanagementproject nodig om documenten te fixen",
    ],
    rows: [
      { category: "Categorie", magiccv: "Gefocuste cv-voor-proposals-workflow", competitor: "Resourcemanagementplatform met een cv-module" },
      { category: "RFP-afstemming", magiccv: "AI leest de briefing en vormt elk cv om", competitor: "Sjabloongebaseerde generatie vanuit staffingprofielen" },
      { category: "Wat adoptie vereist", magiccv: "Importeer cv's, kies een sjabloon, start", competitor: "Doorgaans platformuitrol: data, processen, training" },
      { category: "Tijd tot eerste resultaat", magiccv: "Dezelfde dag", competitor: "Weken tot maanden, gebruikelijk bij platformprojecten" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Op offertebasis, doorgaans per gebruiker" },
      { category: "EU-aanbestedingsfuncties", magiccv: "Anonimisering met één klik, vertaling met behoud van lay-out", competitor: "Niet het zwaartepunt van het product" },
    ],
    guidance:
      "Is je echte probleem staffing - wie is beschikbaar, wie zit op de bench, hoe trends in bezetting lopen - dan is Napta daarvoor gebouwd en rijdt de cv-module mee. Is je echte probleem de cv's zelf - er 12 heropmaken voor één bid, versies die uiteenlopen in SharePoint - dan lost MagicCV dat deze week op zonder te raken aan hoe je projecten bemenst. Diagnosticeer de daadwerkelijke pijn voordat je het grotere oppervlak koopt.",
    faqs: [
      {
        question: "Doet MagicCV resourceplanning of bezettingstracking zoals Napta?",
        answer:
          "Nee. MagicCV dekt consultantprofielen, skills-zoeken, RFP-afstemming en gebrande export. Heb je bezettingsdashboards en staffingworkflows nodig, dan is dat platformterritorium waar Napta oprecht meer heeft.",
      },
      {
        question: "Kan MagicCV naast Napta werken?",
        answer:
          "Ja. Sommige bureaus houden een staffingplatform voor planning en gebruiken MagicCV voor klantgerichte cv's, omdat de cv-module van een suite zelden RFP's leest. MagicCV importeert elk Word- of PDF-cv, dus er is geen integratie nodig om beide te draaien.",
      },
      {
        question: "Hoe snel is MagicCV live vergeleken met een Napta-uitrol?",
        answer:
          "MagicCV is self-serve: importeer je bestaande cv's, stel je merksjabloon in en exporteer dezelfde dag het eerste afgestemde cv. Resourcemanagementplatforms hebben doorgaans configuratie, dataloading en training nodig voordat de cv-module zich terugbetaalt.",
      },
      {
        question: "Kunnen we cv's uit Napta migreren naar MagicCV?",
        answer:
          "Ja - exporteer ze als Word of PDF en importeer ze in MagicCV. De AI parseert elk bestand naar een gestructureerd, doorzoekbaar profiel met vaardigheden, sectoren, talen en certificeringen.",
      },
      {
        question: "Wat kost MagicCV?",
        answer:
          "De prijzen zijn publiek: Free (10 profielen, 30 cv's), Pro voor $50/maand (200 profielen, 600 cv's) en maatwerk Enterprise met SSO en een verwerkersovereenkomst. Platformsuites worden doorgaans per gebruiker per maand geprijsd over het hele personeelsbestand, wat een ander budgetgesprek is.",
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
    h1: "MagicCV vs SharePoint + Word + jouw avonden",
    sub: "De gevestigde orde bij de meeste bureaus is geen concurrent - het is een map met de naam 'CVs DEFINITIEF', twaalf sjabloonvarianten en wie er ook laat blijft voor de deadline.",
    whereCompetitorWins: [
      "Nul extra licentiekosten: je betaalt al voor Microsoft 365 en finance stelt er nooit vragen bij",
      "Nul leercurve: iedereen in het team gebruikt Word al sinds de universiteit",
      "Totale flexibiliteit: elke partner kan zijn eigen cv-versie bijhouden, in zijn eigen format, met zijn eigen foto uit 2014",
      "Geen leveranciersrisico, geen inkoopreview, geen nieuwe-tool-moeheid",
    ],
    whereMagicCvDiffers: [
      "Schrapt de verborgen kostenpost: 12 cv's heropmaken voor één bid kost uren in Word en ongeveer 15 minuten controle in MagicCV",
      "Eén actueel profiel per persoon in plaats van final_v3_JS_edit.docx dat concurreert met final_v3_JS_edit_NEW.docx in drie mappen",
      "Elke export komt exact overeen met je merksjabloon - geen drift tussen wie het als laatste opmaakte",
      "Afstemmen per bid gebeurt daadwerkelijk: de AI leest de RFP en vormt elk cv om, in plaats van dat hetzelfde generieke cv de deur uitgaat omdat er geen tijd was",
      "Vrijdagmiddagse cv-najaagrondes vervangen door profielen die het team in minuten bijwerkt, met AI die structuur vult vanuit elke geplakte of geüploade bron",
    ],
    rows: [
      { category: "Licentiekosten", magiccv: "Gratis om te starten; Pro $50/mnd voor 200 profielen", competitor: "$0 extra - zit al in je Microsoft-stack" },
      { category: "Echte kosten per bid", magiccv: "Ongeveer 15 minuten controle per cv-pakket", competitor: "Uren najagen, knippen-plakken en heropmaken" },
      { category: "Versiewaarheid", magiccv: "Eén gestructureerd profiel per consultant", competitor: "final_v3, final_v3_NEW en de privékopie van de partner" },
      { category: "Merkconsistentie", magiccv: "Pixelconsistent sjabloon op elke export", competitor: "Hangt af van wie het opmaakte, en hoe laat het was" },
      { category: "Afstemmen op de briefing", magiccv: "AI leest de RFP en vormt elk cv om", competitor: "Onder deadlinedruk vrijwel altijd overgeslagen" },
      { category: "Mensen vinden", magiccv: "Zoek op vaardigheden, sectoren, talen, certificeringen", competitor: "Rondvragen op Teams en hopen dat iemand het nog weet" },
    ],
    guidance:
      "Dient je team een paar bids per jaar in en zijn de cv's echt onder controle, houd dan de map - oprecht. Maar vreet cv-voorbereiding uren bij elke bid, lopen versies uiteen en is er dit jaar minstens één indiening te laat of off-brand de deur uitgegaan, dan is de 'gratis' optie de duurste tool die je draait. Importeer 10 cv's op het gratis abonnement en klok de volgende bid eerlijk tegen de vorige.",
    faqs: [
      {
        question: "Is gratis niet altijd goedkoper dan $50 per maand?",
        answer:
          "Alleen als de uren ook gratis zijn. Als twee mensen zes uur per bid aan cv-heropmaak besteden en je twee keer per maand biedt, is dat ruwweg 24 uur seniortijd - en dat kost meer dan een jaar Pro. De ROI-calculator op de prijspagina rekent het voor met je eigen cijfers.",
      },
      {
        question: "Wat gebeurt er met de cv's die we al in SharePoint hebben?",
        answer:
          "Die worden het startpunt. Sleep je bestaande Word- en PDF-bestanden in MagicCV en de AI parseert elk bestand naar een gestructureerd profiel - geen overtypen, geen sjablooncorrectie. Houd SharePoint desgewenst als archief; de werkkopieën leven vanaf dan op één plek.",
      },
      {
        question: "Kunnen we ons bestaande Word-sjabloon behouden?",
        answer:
          "Ja. Je sjabloon wordt één keer ingesteld in MagicCV, en elke export - Word of PDF - rendert er pixelconsistent naartoe. De output ziet eruit alsof je bureau hem maakte, want dat deed het ook; de AI zorgt er alleen voor dat mensen de opmaak niet meer handmatig doen.",
      },
      {
        question: "Ons systeem werkt grotendeels. Waarom iets veranderen dat niet helemaal kapot is?",
        answer:
          "Als er niets te laat, off-brand of onafgestemd de deur uitgaat: niet doen. De meeste teams die cv-managementsoftware evalueren, doen dat na een specifiek incident - een verloren raamovereenkomst-bid, een klant die een verouderd cv opmerkt, een 48-uursgeren. Heb je er dit jaar een van gehad, dan kost 'grotendeels werkt' je al iets.",
      },
      {
        question: "Gaat het team weer een tool echt gebruiken?",
        answer:
          "Adoptie is het eerlijke risico bij elke tool, en daarom vraagt MagicCV weinig van consultants: hun profiel wordt aangemaakt vanuit hun bestaande cv, en updates kosten minuten doordat de AI de structurering doet. De mensen die de verandering het meest voelen zijn degenen die bids opmaken - en die zijn doorgaans de luidste pleitbezorgers van de tool.",
      },
      {
        question: "Is onze cv-data veiliger in SharePoint dan in een SaaS-tool?",
        answer:
          "SharePoint erft je Microsoft-beveiliging, en die is solide - maar cv's verspreid over mappen en inboxen zijn onder de AVG moeilijk te auditen of te verwijderen. MagicCV is AVG-by-design met EU-dataresidentie en auditlogs, en één profiel per persoon maakt van verwijderverzoeken een klus van één stap. SOC 2 is in uitvoering.",
      },
    ],
    related: [
      { label: "Prijzen & ROI-calculator", href: "/pricing" },
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
    h1: "MagicCV vs CVGate: twee gefocuste tools voor consultancy-cv's",
    sub: "Dit is een nauwe vergelijking - beide richten zich op consultancy-cv- en proposalwerk met transparante prijzen. De verschillen zitten in hoe afstemming werkt en wat er is ingebouwd voor EU-aanbestedingen.",
    whereCompetitorWins: [
      "Vierkant gericht op cv- en proposalbeheer voor consultancy - een nauwe use-case-fit, geen algemene cv-builder",
      "Transparante, publieke prijsniveaus, wat zeldzamer is dan het zou moeten zijn in deze categorie",
      "Bundelt aangrenzende proposaltools: zoeken op skills plus CRM-achtig contactbeheer naast cv's",
      "Analytics op gedeelde cv's - zien wanneer een klant een document bekeek of ermee aan de slag ging is oprecht nuttig in een salescyclus",
    ],
    whereMagicCvDiffers: [
      "AI die start vanuit de briefing: plak de RFP en elk cv wordt omgevormd rond de eisen, met chatbewerking om te verfijnen - niet alleen consistent opgemaakt",
      "Anonimisering met één klik en vertaling naar elke taal met behoud van lay-out - de twee functies waar EU-aanbestedingsteams als eerste om vragen",
      "Gestructureerde consultantprofielen als één bron van waarheid, doorzoekbaar op vaardigheden, sectoren, talen en certificeringen",
      "AVG-by-design met EU-dataresidentie en auditlogs, met SSO op het Enterprise-abonnement",
    ],
    rows: [
      { category: "Categorie", magiccv: "AI-native cv-afstemming + profielbeheer", competitor: "Cv-beheer met proposal- en contacttools" },
      { category: "Afstemmen op een briefing", magiccv: "AI leest de RFP en heraccentueert elk cv", competitor: "Sjabloongebaseerd; afstemmen is doorgaans handmatig" },
      { category: "Prijstransparantie", magiccv: "Publiek: Free, $50/mnd Pro, maatwerk Enterprise", competitor: "Publieke prijsniveaus - eer wie eer toekomt" },
      { category: "Anonimisering", magiccv: "Eén klik, in je sjabloon", competitor: "Wisselt per abonnement en configuratie" },
      { category: "Vertaling", magiccv: "Elke taal, lay-out behouden", competitor: "Wisselt" },
      { category: "Bewerken", magiccv: "Chatinstructies plus directe bewerkingen", competitor: "Formulier- en sjabloonbewerking" },
    ],
    guidance:
      "CVGate is een van de eerlijkere vergelijkingen op deze site: gefocust product, publieke prijzen, echte proposalfuncties. Zijn analytics op gedeelde cv's en ingebouwd contactbeheer belangrijk voor je salesaanpak, weeg ze dan serieus mee. Zijn AI-afstemming per bid, blinde cv's en meertalige output voor EU-aanbestedingen de functies die je wekelijks gebruikt, dan gaat MagicCV precies daarop verder. Beide hebben laagdrempelige instappunten - test met een lopende bid.",
    faqs: [
      {
        question: "Is CVGate een volwaardig alternatief voor MagicCV?",
        answer:
          "Ja - het is oprecht gericht op cv- en proposalbeheer voor consultancy, met publieke prijzen. De belangrijkste verschillen zijn de briefing-first AI-afstemming van MagicCV, chatbewerking en ingebouwde anonimisering en vertaling voor EU-aanbestedingen.",
      },
      {
        question: "Kunnen we migreren van CVGate naar MagicCV?",
        answer:
          "Ja. Exporteer je cv's als Word of PDF en importeer ze in MagicCV; de AI bouwt van elk bestand een gestructureerd profiel. De meeste teams ronden de overstap in een dag af.",
      },
      {
        question: "Heeft MagicCV cv-weergave-analytics zoals CVGate?",
        answer:
          "Nee - MagicCV exporteert verzorgde PDF- en Word-documenten in plaats van getrackte links te hosten, dus weergave-analytics zitten vandaag niet in het product. Stuurt het weten wanneer een klant een cv opende jouw opvolgproces, dan is dat een oprecht punt voor CVGate.",
      },
      {
        question: "Hoe verschilt afstemming per bid tussen de twee?",
        answer:
          "In MagicCV plak je de RFP of briefing en bepaalt de AI waar elk cv mee moet openen, waarna jij controleert en verfijnt via chat. Sjabloongebaseerde tools houden het cv consistent, maar laten de wat-benadrukken-beslissing over aan wie de bid voorbereidt.",
      },
      {
        question: "Hoe vergelijken de twee op AVG en dataresidentie?",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, auditlogs en een verwerkersovereenkomst op het Enterprise-abonnement; SOC 2 is in uitvoering. Controleer de actuele hosting- en compliancedocumentatie van CVGate rechtstreeks - beide leveranciers publiceren genoeg om een inkoopchecklist af te ronden.",
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
    h1: "MagicCV vs CV-Transformer: heropmaak-engine of afstemmings-engine?",
    sub: "CV-Transformer zet binnenkomende cv's op volume om naar jouw gebrande format. MagicCV beheert consultantprofielen door de tijd heen en vormt ze om per briefing. Verschillende taken, enige overlap.",
    whereCompetitorWins: [
      "Sterk in precies één ding: binnenkomende cv's omzetten naar een gestandaardiseerd, gebrand sjabloon, snel en op recruitmentbureau-volume",
      "Ingebouwde anonimisering en ondersteuning voor een breed scala aan talen",
      "Vermeldt integraties met recruitmentstacks zoals Greenhouse, JobAdder en Salesforce, plus opslag binnen de EU",
      "Een natuurlijke fit voor staffing- en recruitmentbureaus die een gestage stroom kandidaat-cv's van derden verwerken",
    ],
    whereMagicCvDiffers: [
      "Stemt af, niet alleen heropmaken: de AI leest de RFP of klantbriefing en verandert wat elk cv benadrukt, en rendert het daarna in jouw sjabloon",
      "Profielen blijven bestaan en actueel: één gestructureerd dossier per consultant, bijgewerkt door de tijd heen, in plaats van eenmalige bestandsconversies",
      "Vaardighedenmatrix en zoeken over de hele bench - vind elke consultant met Kubernetes, Duits en een bankenachtergrond in seconden",
      "Gebouwd rond de proposalworkflow van consultancy: cv-pakketten per bid, chatbewerking, vertaling met behoud van lay-out, publieke self-serve prijzen vanaf $0",
    ],
    rows: [
      { category: "Kerntaak", magiccv: "Profielen beheren, afstemmen per briefing, on-brand exporteren", competitor: "Binnenkomende cv's omzetten naar jouw gebrande format" },
      { category: "Datamodel", magiccv: "Blijvend profiel per persoon, actueel gehouden", competitor: "Conversie per bestand; doorgaans geen blijvend profiel" },
      { category: "Afstemmen op een briefing", magiccv: "AI heraccentueert inhoud vanuit de RFP-tekst", competitor: "Heropmaken en standaardiseren, niet heraccentueren" },
      { category: "Anonimisering", magiccv: "Eén klik, in je sjabloon", competitor: "Ingebouwd" },
      { category: "Teamzoeken", magiccv: "Vaardigheden, sectoren, talen, certificeringen", competitor: "Niet de focus" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Doorgaans op credits of abonnement, proefperiode beschikbaar" },
    ],
    guidance:
      "Ben je een recruitment- of staffingbureau waarvan de bottleneck het op volume heropmaken van kandidaat-cv's naar huisstijl is, dan is CV-Transformer sterk in die taak en sluit het aan op recruitmentstacks. Ben je een consultancy- of IT-dienstverlener die herhaaldelijk biedt met dezelfde bench aan mensen, dan heb je profielen nodig die blijven bestaan en per briefing worden afgestemd - dat is de taak van MagicCV. Sommige staffingbureaus hebben terecht beide patronen nodig; test elk op zijn eigen terrein.",
    faqs: [
      {
        question: "Wat is het kernverschil tussen MagicCV en CV-Transformer?",
        answer:
          "CV-Transformer zet elk binnenkomend cv om naar een gestandaardiseerd gebrand document - een bewerking per bestand. MagicCV onderhoudt een levend profiel per consultant en genereert daaruit afgestemde, on-brand cv's voor elke bid, waarbij de AI op basis van de briefing bepaalt wat de nadruk krijgt.",
      },
      {
        question: "We hergebruiken dezelfde consultants over bids heen. Welk model past beter?",
        answer:
          "Blijvende profielen. Bij conversie per bestand verwerk je een document opnieuw telkens als het verandert; bij MagicCV wordt het profiel één keer bijgewerkt en put elke volgende export - elk sjabloon, elke taal, geanonimiseerd of niet - uit actuele data.",
      },
      {
        question: "Beide tools anonimiseren cv's. Is er een verschil?",
        answer:
          "Beide dekken de kerntaak van blinde cv's produceren. In MagicCV is anonimisering één klik op elke export en blijft die consistent met je sjabloon, en omdat het vanuit gestructureerde profielen werkt, kun je de versie mét naam direct opnieuw exporteren zodra de klant een shortlist maakt.",
      },
      {
        question: "Integreert MagicCV met ons ATS zoals CV-Transformer dat doet?",
        answer:
          "MagicCV heeft geen integratie nodig om nuttig te zijn - je importeert cv's rechtstreeks als Word-, PDF- of LinkedIn-exports. Hangt je workflow af van het automatisch doorzetten van documenten naar een specifiek ATS, dan is dat momenteel een reëel voordeel van de vermelde integraties van CV-Transformer; kaart integratiebehoeften bij ons aan als je het Enterprise-abonnement evalueert.",
      },
      {
        question: "Kunnen we migreren van CV-Transformer naar MagicCV?",
        answer:
          "Ja - je geconverteerde cv's zijn standaard Word- of PDF-bestanden, en MagicCV importeert ze rechtstreeks naar gestructureerde profielen. Vanaf dat moment gebeuren updates op het profiel in plaats van via herconversie.",
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
    h1: "MagicCV vs CV Converter: snelle opmaakfix of volledige cv-workflow?",
    sub: "CV Converter doet één kleine taak goedkoop en goed: kandidaat-cv's laten aansluiten op je sjabloon. MagicCV dekt de hele consultancy-cv-workflow. Scope is de hele beslissing.",
    whereCompetitorWins: [
      "Radicaal eenvoudig: upload je sjabloon, voer het cv's en krijg consistent opgemaakte documenten terug",
      "Transparante, lage pay-as-you-go prijzen met een gratis proefperiode - minimale verplichting om te testen",
      "Gepositioneerd als geen langdurige opslag van kandidaatdata, wat sommige gegevensbeschermingsgesprekken vereenvoudigt",
      "Goed passend bij high-volume recruitment- en RPO-opmaak waar kosten per document de maatstaf zijn",
    ],
    whereMagicCvDiffers: [
      "Dekt de workflow rond het document: blijvende consultantprofielen, skills-zoeken over het team en afstemming per bid, niet alleen conversie",
      "De AI leest de RFP en vormt elk cv eromheen - een opmaaktool kan niet zien welke van de 14 projecten van een consultant ertoe doen voor deze briefing",
      "Anonimisering met één klik, vertaling naar elke taal met behoud van lay-out en proposal-klare cv-pakketten voor EU-bids",
      "Chatbewerking op elk concept: 'kort het in tot twee pagina's en begin met het publieke-sectorwerk'",
    ],
    rows: [
      { category: "Scope", magiccv: "Profielen, zoeken, afstemmen, pakketten, export", competitor: "Formatconversie, bewust niets meer" },
      { category: "Bron van waarheid", magiccv: "Gestructureerd profiel per consultant, actueel gehouden", competitor: "Elk bestand onafhankelijk geconverteerd" },
      { category: "Afstemmen op een briefing", magiccv: "AI heraccentueert inhoud vanuit de RFP", competitor: "Bewust buiten de scope" },
      { category: "Anonimisering / vertaling", magiccv: "Elk één klik, lay-out behouden", competitor: "Niet de focus" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro (200 profielen)", competitor: "Publiek pay-as-you-go, zeer laag per bestand" },
      { category: "Best voor", magiccv: "Bureaus die bieden met een terugkerende bench", competitor: "Bureaus die eenmalige kandidaatstromen opmaken" },
    ],
    guidance:
      "Is opmaak echt je hele probleem - een stroom eenmalige kandidaat-cv's die er alleen consistent uit moeten zien - dan is CV Converter goedkoop, eenvoudig en moeilijk te betwisten. Duiken dezelfde consultants op in bid na bid en is het echte werk hun profielen actueel houden en per briefing afstemmen, dan laat een converter 90% van de taak handmatig. Kies de tool op basis van of je cv's wegwerpbaar of herbruikbaar zijn.",
    faqs: [
      {
        question: "Is CV Converter goedkoper dan MagicCV?",
        answer:
          "Voor pure opmaak per bestand kunnen de pay-as-you-go prijzen erg laag zijn, en MagicCV gaat het op die ene taak niet verslaan. Het Pro-abonnement van MagicCV van $50/maand dekt 200 profielen en 600 cv's plus afstemming, zoeken, anonimisering en vertaling - een bredere scope, dus vergelijk met alles wat je nu handmatig doet, niet alleen met de opmaak.",
      },
      {
        question: "We zijn een recruitmentbureau. Wat past bij ons?",
        answer:
          "Passeren kandidaten één keer en is opmaak de hele taak, dan past CV Converter. Dien je dezelfde contractors herhaaldelijk opnieuw in, draai je blinde-cv-processen of bied je op raamovereenkomsten, dan beginnen de blijvende profielen en anonimisering met één klik van MagicCV zich snel terug te betalen.",
      },
      {
        question: "Kan MagicCV ons exacte sjabloon evenaren zoals een converter dat doet?",
        answer:
          "Ja. Je merksjabloon wordt één keer ingesteld en elke export rendert er pixelconsistent naartoe, in PDF of Word. Het verschil zit in wat er vóór het renderen gebeurt: MagicCV kan de inhoud afstemmen en vertalen, niet alleen in de lay-out gieten.",
      },
      {
        question: "Slaat MagicCV onze data op, en waar?",
        answer:
          "Ja - blijvende profielen zijn het punt, zodat exports actueel blijven zonder bestanden opnieuw te verwerken. Data is AVG-by-design met EU-residentie en auditlogs, en Enterprise-abonnementen bevatten een verwerkersovereenkomst. Vereist jouw beleid helemaal geen opslag bij de leverancier, dan is een doorgeef-converter de veiligere architectuurkeuze.",
      },
      {
        question: "Kunnen we starten met CV Converter en later overstappen naar MagicCV?",
        answer:
          "Makkelijk - je geconverteerde cv's zijn gewone Word- of PDF-bestanden, en MagicCV importeert ze rechtstreeks naar gestructureerde profielen. Teams maken de overstap vaak zodra ze merken dat dezelfde cv's voor de derde heropmaak terugkomen.",
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
    h1: "MagicCV vs MuchSkills CV Inventory: welk systeem van record komt eerst?",
    sub: "MuchSkills genereert cv's vanuit zijn skillsdatabase. MagicCV bouwt profielen vanuit de cv's die je al hebt. De juiste volgorde hangt af van waar je data vandaag leeft.",
    whereCompetitorWins: [
      "Cv's gegenereerd vanuit actuele, geverifieerde skillsdata - is de MuchSkills-database je systeem van record, dan erven de cv's die nauwkeurigheid",
      "Sterk versiebeheer en audittrails op elk cv, nuttig waar compliance nakijkt wie wat wanneer verstuurde",
      "Beheert intern personeel en externe consultants in één inventaris",
      "Een diepe skills-taxonomie die certificeringen, technische vaardigheden en capabilities fijnmazig dekt",
    ],
    whereMagicCvDiffers: [
      "Start vanuit wat je hebt: importeer Word-, PDF- of LinkedIn-cv's en de AI bouwt gestructureerde profielen - geen adoptieproject van een skillsplatform vooraf",
      "RFP-naar-cv-afstemming: de AI leest de daadwerkelijke briefing en vormt elk cv eromheen, in plaats van alleen samen te stellen op basis van skills-matches",
      "Chatbewerking, anonimisering met één klik en vertaling naar elke taal met behoud van lay-out - de EU-aanbestedingstoolkit op één plek",
      "Publieke, self-serve prijzen: Free om te testen, $50/maand Pro, zonder platformverplichting",
    ],
    rows: [
      { category: "Datafundament", magiccv: "Gestructureerde profielen geparseerd uit je bestaande cv's", competitor: "De MuchSkills-skillsdatabase" },
      { category: "Voorwaarde", magiccv: "Geen - importeer cv's en start", competitor: "MuchSkills adopteren als je skills-systeem" },
      { category: "Afstemmen op een briefing", magiccv: "AI leest de RFP-tekst en heraccentueert", competitor: "Put uit matching op skillsdata" },
      { category: "Versiebeheer", magiccv: "Profielhistorie en auditlogs", competitor: "Sterk, met audittrails per cv" },
      { category: "Anonimisering / vertaling", magiccv: "Elk één klik, lay-out behouden", competitor: "Wisselt" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Doorgaans geoffreerd als onderdeel van het platform" },
    ],
    guidance:
      "Draait je organisatie al MuchSkills - of heeft ze besloten haar talentdata rond een geverifieerde skills-taxonomie te bouwen - dan is CV Inventory de natuurlijke uitbreiding en is het datakwaliteitsargument reëel. Leeft je skillsdata momenteel in cv's, SharePoint en de hoofden van mensen, dan geeft MagicCV je deze week doorzoekbare profielen en afgestemde bid-cv's, zonder eerst een skillsplatform op te tuigen. Start vanaf waar je data daadwerkelijk is.",
    faqs: [
      {
        question: "Hebben we een skillsdatabase nodig voordat we MagicCV kunnen gebruiken?",
        answer:
          "Nee. MagicCV bouwt gestructureerde profielen rechtstreeks vanuit je bestaande cv's - Word-, PDF- of LinkedIn-exports - en haalt daarbij vaardigheden, sectoren, talen en certificeringen naar een doorzoekbare matrix. De skillsdata is een bijproduct van de import, geen voorwaarde.",
      },
      {
        question: "Is een geverifieerde skillsdatabase niet nauwkeuriger dan geparseerde cv's?",
        answer:
          "Als hij wordt onderhouden, ja - dat is de eerlijke kracht van MuchSkills. De afweging is adoptie: een geverifieerde database is alleen nauwkeurig als consultants hem actueel houden. MagicCV zet in op het artefact dat mensen al onderhouden (hun cv) en maakt het bijwerken een AI-ondersteunde klus van vijf minuten.",
      },
      {
        question: "Kunnen MagicCV en MuchSkills naast elkaar bestaan?",
        answer:
          "Ja. Sommige bureaus gebruiken MuchSkills voor interne skillszichtbaarheid en MagicCV voor klantgerichte bid-cv's, omdat geëxporteerde cv's uit elk systeem als Word of PDF in MagicCV kunnen worden geïmporteerd.",
      },
      {
        question: "Hoe verschilt de afstemming tussen de twee?",
        answer:
          "MuchSkills stelt cv's samen die worden gestaafd door zijn skillsdata. MagicCV leest de daadwerkelijke RFP-tekst - inclusief de bijlage van 40 pagina's - en bepaalt waar elk cv mee moet openen voor die specifieke briefing, wat jij daarna via chat verfijnt vóór export.",
      },
      {
        question: "Hoe gaat MagicCV om met audit- en compliancebehoeften?",
        answer:
          "Profielen behouden historie, het platform logt activiteit en data is AVG-by-design met EU-residentie; Enterprise voegt SSO en een verwerkersovereenkomst toe. SOC 2 is in uitvoering. Zijn audittrails per document vandaag een harde eis, weeg dan de diepte van het versiebeheer van MuchSkills mee in je evaluatie.",
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
    h1: "MagicCV vs SprintCV Enterprise: mid-market snelheid of enterprise-beheerdiepte?",
    sub: "Het enterprise-aanbod van SprintCV voegt beheer en teammanagement toe bovenop zijn cv-engine. MagicCV zet hetzelfde budget in op AI-afstemming en time-to-value van dezelfde dag.",
    whereCompetitorWins: [
      "Enterprise-grade cv-beheer van een leverancier gericht op consultancy en staffing, met bewezen parsing en sjabloongeneratie",
      "Volwassen beheer- en teammanagementfuncties - rollen, toezicht en structuur die grotere bureaus verwachten",
      "Gevestigde referentiebasis in de IT-dienstenmarkt van het Iberisch schiereiland",
      "Een veiliger aanvoelende keuze voor een formeel inkoopproces dat een enterprise-gelabeld product wil",
    ],
    whereMagicCvDiffers: [
      "De AI doet de afstemming, niet alleen de parsing: plak een RFP en elk cv wordt omgevormd rond de eisen vóór het renderen",
      "Chatbewerking voor verfijning: geef het concept instructies in gewone taal in plaats van door beheerschermen te werken",
      "Publieke prijzen op elk niveau onder Enterprise - Free (10 profielen), $50/maand Pro (200 profielen) - en self-serve onboarding op dezelfde dag",
      "Anonimisering met één klik en vertaling naar elke taal met behoud van lay-out, gericht op de eisen van EU-aanbestedingen",
    ],
    rows: [
      { category: "Kern-engine", magiccv: "AI leest de briefing en vormt daarna het cv om", competitor: "Parsing en sjabloongeneratie, enterprise-beheer erbovenop" },
      { category: "Beheerdiepte", magiccv: "Teamworkspaces; SSO en verwerkersovereenkomst op Enterprise", competitor: "Volwassen enterprise-beheer en teammanagement" },
      { category: "Tijd tot het eerste cv eruit is", magiccv: "Dezelfde dag, self-serve", competitor: "Doorgaans een onboardingproces" },
      { category: "Prijzen", magiccv: "Publiek onder het Enterprise-niveau", competitor: "Doorgaans op offertebasis" },
      { category: "Aanbestedingstoolkit", magiccv: "Anonimisering + vertaling ingebouwd, één klik", competitor: "Wisselt per configuratie" },
      { category: "Regionale kracht", magiccv: "EU-breed, EU-dataresidentie", competitor: "Sterkst op het Iberisch schiereiland" },
    ],
    guidance:
      "Ben je een groter bureau dat enterprise-beheercontroles wil van een consultancy-gerichte cv-leverancier - en tellen Iberische referenties voor jou - dan verdient het enterprise-product van SprintCV een blik. Is je prioriteit de outputkwaliteit per bid en deze week live zijn in plaats van na onboarding, dan passen de briefing-first AI en het self-serve model van MagicCV beter. Mid-market bureaus gebruiken de beheerdiepte waar ze enterprise-prijzen voor betalen zelden.",
    faqs: [
      {
        question: "Hoe verschilt deze pagina van jullie Sprint CV-vergelijking?",
        answer:
          "Dezelfde leverancier, het aanbod op enterprise-niveau: meer beheer- en teammanagementoppervlak bovenop dezelfde cv-engine. De afweging tegen MagicCV blijft gelijk - hun kracht is structuur en regionale staat van dienst; die van MagicCV is briefing-first AI-afstemming, publieke prijzen en opzet op dezelfde dag.",
      },
      {
        question: "Heeft MagicCV überhaupt enterprise-functies?",
        answer:
          "Ja - het Enterprise-abonnement voegt SSO, een verwerkersovereenkomst, onbeperkte profielen en prioriteitssupport toe, bovenop de auditlogs en EU-dataresidentie die elk abonnement krijgt. Wat MagicCV overslaat is de verplichte enterprise-salescyclus: Pro voor $50/maand is self-serve en dekt teams tot 200 profielen.",
      },
      {
        question: "Kunnen we migreren van SprintCV naar MagicCV?",
        answer:
          "Ja. Exporteer je cv's als Word of PDF, importeer ze in MagicCV en elk bestand wordt automatisch een gestructureerd profiel. Er is geen migratieproject om te scopen.",
      },
      {
        question: "Hoe lang duurt de uitrol vergeleken met een enterprise cv-manager?",
        answer:
          "MagicCV: importeer cv's, stel je merksjabloon in, exporteer het eerste afgestemde cv - doorgaans binnen een dag, self-serve. Enterprise cv-managers draaien doorgaans eerst onboarding met configuratie en training, wat gerechtvaardigd is op grote schaal en overal elders traag.",
      },
      {
        question: "We bieden in meerdere EU-landen. Wie gaat beter om met talen?",
        answer:
          "MagicCV vertaalt elk cv naar elke taal met behoud van de lay-out van je sjabloon, dus één profiel bedient bids in Madrid, München en Parijs. Verifieer de actuele taaldekking van SprintCV tegen de specifieke talen waarin jij biedt.",
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
    h1: "MagicCV vs Enhancv: proposal-cv's zijn een andere taak dan sollicitatie-cv's",
    sub: "Enhancv bouwt cv's waarmee kandidaten worden aangenomen. MagicCV bouwt consultant-cv's waarmee bureaus werk winnen. Vergelijk je ze, bepaal dan eerst welk document je eigenlijk produceert.",
    whereCompetitorWins: [
      "Een werkelijk uitstekende cv-builder: verzorgde editor, een grote sjabloonbibliotheek en output waar kandidaten trots op zijn",
      "One-click import vanuit LinkedIn, DOCX en PDF, met matching op vacatureteksten om een cv op een vacature af te stemmen",
      "ATS-vriendelijke opmaak, wat telt wanneer documenten door recruitmentsoftware worden gescreend",
      "Teamfuncties met een gedeelde bibliotheek en eigen branding - een goede fit voor recruitment-, outplacement- en loopbaancoachingteams",
    ],
    whereMagicCvDiffers: [
      "Gebouwd voor het bureau, niet de werkzoekende: profielen voor je hele bench, doorzoekbaar op vaardigheden, sectoren, talen en certificeringen",
      "Optimaliseert voor de klantbriefing, niet voor een ATS: de AI leest de RFP en vormt het cv van elke consultant om rond de eisen",
      "Produceert proposal-klare cv-pakketten - 8 consultants, één sjabloon, één middag - plus blinde cv's met één klik voor aanbestedingen",
      "AVG-by-design met EU-dataresidentie, vertaling naar elke taal met behoud van je lay-out en publieke prijzen vanaf $0",
    ],
    rows: [
      { category: "Wie het bedient", magiccv: "Consultancy- en dienstverleners die op werk bieden", competitor: "Werkzoekenden, en teams die hen ondersteunen" },
      { category: "Geproduceerd document", magiccv: "Consultant-cv voor een klant of aanbesteding", competitor: "Cv voor een sollicitatie" },
      { category: "Geoptimaliseerd voor", magiccv: "De briefing en beoordelingscriteria van de klant", competitor: "ATS-parsing en vacaturekeywords" },
      { category: "Teammodel", magiccv: "Eén profiel per consultant, bureaubreed zoeken", competitor: "Gedeelde bibliotheek van individuele cv's" },
      { category: "Aanbestedingsfuncties", magiccv: "Blinde cv's en cv-pakketten, één klik", competitor: "Niet de use-case" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Publieke abonnementen" },
    ],
    guidance:
      "Helpt je team individuen aan een baan - recruitment, outplacement, loopbaandiensten - dan is Enhancv een van de beste tools daarvoor en probeert MagicCV daar niet te concurreren. Gaan je cv's mee in proposals en aanbestedingen met de naam van je bureau op de omslag, dan is ATS-optimalisatie irrelevant en is afstemming op de briefing alles - dat is MagicCV. De twee producten lijken alleen op elkaar totdat je de lezer van het document benoemt.",
    faqs: [
      {
        question: "Kan Enhancv consulting-proposal-cv's aan?",
        answer:
          "Het kan verzorgde, gebrande documenten produceren, en sommige teams rekken het zo op. Waar het niet voor is gebouwd, is de workflow eromheen: een doorzoekbare bench, RFP-gedreven afstemming, blinde cv's voor aanbestedingen en cv-pakketten met meerdere consultants. Dat is de kern van MagicCV, geen aanpassing.",
      },
      {
        question: "Hebben consulting-cv's ATS-optimalisatie nodig?",
        answer:
          "Vrijwel nooit. Proposal-cv's worden gelezen door klantbeoordelaars en inkooppanels, niet door cv-screeningsoftware. Wat de score beweegt is relevantie voor de briefing - en dat is precies wat de RFP-naar-cv-afstemming van MagicCV automatiseert.",
      },
      {
        question: "Kunnen we cv's importeren die onze consultants in Enhancv maakten?",
        answer:
          "Ja. Exporteer ze als PDF of DOCX en importeer ze in MagicCV - de AI parseert elk bestand naar een gestructureerd profiel. LinkedIn-exports werken op dezelfde manier, dus het onboarden van de bench hangt niet af van één bronformat.",
      },
      {
        question: "Onze recruitmenttak gebruikt Enhancv. Moet de consultingkant het ook gebruiken?",
        answer:
          "Alleen als de behoeften van de consultingkant ophouden bij mooi ogende documenten. Zodra je de bench op vaardigheden moet doorzoeken, moet anonimiseren voor een raamovereenkomst-aanbesteding of 10 cv's op één RFP moet afstemmen vóór vrijdag, zit je buiten wat een cv-builder is ontworpen te doen.",
      },
      {
        question: "Hoe vergelijken de prijzen voor een team?",
        answer:
          "Het Pro-abonnement van MagicCV is $50/maand voor 200 profielen en 600 cv's, met een gratis abonnement (10 profielen, 30 cv's) om te testen. Enhancv publiceert zijn eigen abonnementsprijzen per gebruiker - direct vergelijkbare cijfers, alleen geprijsd voor verschillende taken.",
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
    h1: "MagicCV vs VisualCV: team-cv-builder of bid-cv-workflow?",
    sub: "VisualCV geeft teams consistente, gehoste cv's. MagicCV maakt van een bench consultants afgestemde, on-brand cv's per bid. Aan de oppervlakte dichtbij, daaronder verschillend.",
    whereCompetitorWins: [
      "Een al lang gevestigde cv-builder met een businessniveau ontworpen voor teams",
      "Verzorgde sjablonen plus gehoste online cv's met weergave-analytics - nuttig als je cv's als links deelt en wilt weten dat ze geopend zijn",
      "Eenvoudige manier om de cv's van een team visueel consistent onder één merk te houden",
      "Toegankelijke prijzen en lage opzetinspanning voor wat het doet",
    ],
    whereMagicCvDiffers: [
      "Gebouwd rond de bid, niet het losse document: plak een RFP en de AI vormt het cv van elke consultant eromheen en stelt daarna het pakket samen",
      "Gestructureerde profielen als bron van waarheid - doorzoekbaar op vaardigheden, sectoren, talen, certificeringen - in plaats van een map met vormgegeven cv's",
      "Anonimisering met één klik voor blinde aanbestedingsindieningen en vertaling naar elke taal met behoud van lay-out",
      "AVG-by-design met EU-dataresidentie en auditlogs; SSO en verwerkersovereenkomst op Enterprise",
    ],
    rows: [
      { category: "Primaire taak", magiccv: "Afgestemde consultant-cv's voor bids en klanten", competitor: "Consistente cv's en gehoste online cv's" },
      { category: "Afstemmen op een briefing", magiccv: "AI leest de RFP en heraccentueert elk cv", competitor: "Handmatig bewerken binnen sjablonen" },
      { category: "Teamzoeken", magiccv: "Vaardighedenmatrix over de hele bench", competitor: "Niet de focus" },
      { category: "Deelmodel", magiccv: "Pixelconsistente PDF/Word-exports", competitor: "Gehoste links met weergave-analytics" },
      { category: "Aanbestedingstoolkit", magiccv: "Blinde cv's en cv-pakketten, één klik", competitor: "Niet de use-case" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Publieke abonnementen, businessniveau voor teams" },
    ],
    guidance:
      "Heb je een set mooi ogende, consistente cv's nodig - en spreken gehoste cv-links met weergavetracking je salesaanpak aan - dan doet VisualCV die taak goed met weinig moeite. Zijn je cv's munitie voor proposals en aanbestedingen, dan is het werk afstemmen en samenstellen onder deadline, en dat is de workflow die MagicCV van begin tot eind automatiseert. Benoem je daadwerkelijke dinsdagmiddagtaak en kies daarop.",
    faqs: [
      {
        question: "Is VisualCV geschikt voor consultingproposals?",
        answer:
          "Het produceert consistente, gebrande documenten, wat de oppervlakkige eis dekt. Wat het mist, is de proposalworkflow eronder: RFP-gedreven afstemming, een doorzoekbare vaardighedenmatrix, blinde cv's en pakketten met meerdere consultants. Zijn dat wekelijkse taken voor jou, dan laat een algemene builder ze handmatig.",
      },
      {
        question: "Kunnen we de VisualCV-cv's van ons team migreren naar MagicCV?",
        answer:
          "Ja. Exporteer ze als PDF of Word en importeer ze in MagicCV - elk bestand wordt een gestructureerd, doorzoekbaar profiel. Een team van 30 personen is doorgaans binnen een dag geïmporteerd en aan het exporteren van gebrande cv's.",
      },
      {
        question: "Biedt MagicCV gehoste cv-links en weergave-analytics zoals VisualCV?",
        answer:
          "Nee - MagicCV produceert pixelconsistente PDF- en Word-exports, want dat is wat proposals en aanbestedingsportalen vereisen. Zijn getrackte gehoste links centraal in hoe je cv's deelt, dan is dat een oprecht VisualCV-voordeel om mee te wegen.",
      },
      {
        question: "Hoe houden de twee cv's actueel over een team heen?",
        answer:
          "In een cv-builder wordt elk document afzonderlijk bewerkt en sluipt er drift in. In MagicCV heeft elke persoon één profiel; updates kosten minuten doordat de AI de input structureert, en elke export waar dan ook put uit de actuele versie.",
      },
      {
        question: "En de AVG - we zijn een EU-bureau?",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, auditlogs en één profiel per persoon, wat toegangs- en verwijderverzoeken overzichtelijk maakt; Enterprise voegt een verwerkersovereenkomst en SSO toe. Toets de actuele dataresidentie-documentatie van VisualCV aan jouw eisen.",
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
    h1: "MagicCV vs Rezi: ATS-cv's en proposal-cv's zijn verschillende sporten",
    sub: "Rezi is een AI-cv-builder afgesteld op ATS-screening, vaak white-label ingezet. MagicCV is afgesteld op klantbriefings en aanbestedingen. Hetzelfde label 'AI-cv', verschillende spellen.",
    whereCompetitorWins: [
      "Een volwassen AI-cv-builder met sterke ATS-keywordtargeting - de juiste optimalisatie wanneer software het document screent",
      "White-label-implementatie, en daarom bouwen universiteiten, loopbaancentra en cv-schrijfdiensten erop",
      "Adverteert publiekelijk met SOC 2 Type II en SSO, met een grote gevestigde gebruikersgroep",
      "Review- en feedbackworkflows die passen bij coachingscenario's, waarin een adviseur itereert op het cv van een kandidaat",
    ],
    whereMagicCvDiffers: [
      "Optimaliseert voor een menselijke beoordelaar die tegen een briefing leest: de AI parseert de RFP en vormt het cv van elke consultant om rond de daadwerkelijke eisen",
      "Beheert de bench van het bureau, geen individuele zoektochten naar werk: gestructureerde profielen, skills-zoeken en cv-pakketten per bid samengesteld",
      "EU-aanbestedingstoolkit ingebouwd: blinde cv's met één klik, vertaling naar elke taal met behoud van lay-out, EU-dataresidentie, AVG-by-design",
      "Eenvoudige teamprijzen: Free om te testen, $50/maand Pro voor 200 profielen - geen white-label- of institutioneel contract nodig",
    ],
    rows: [
      { category: "Wie de output leest", magiccv: "Klantbeoordelaars en aanbestedingspanels", competitor: "ATS-software, daarna recruiters" },
      { category: "Optimalisatiedoel", magiccv: "De eisen en scoringscriteria van de briefing", competitor: "ATS-keywords uit de vacaturetekst" },
      { category: "Typische koper", magiccv: "Consultancy-, IT- en professionele-dienstverleners", competitor: "Universiteiten, loopbaancentra, cv-diensten" },
      { category: "Implementatie", magiccv: "Teamworkspace, self-serve", competitor: "Direct of via white-label-programma's" },
      { category: "Aanbestedingsfuncties", magiccv: "Blinde cv's, cv-pakketten, meertalige export", competitor: "Niet de use-case" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Publieke niveaus per seat" },
    ],
    guidance:
      "Rol je een cv-builder uit naar een populatie werkzoekenden - studenten, alumni, outplacementklanten - dan is Rezi een sterke, gecertificeerde keuze en speelt MagicCV daar niet. Ben je een bureau waarvan de cv's in proposals gaan met jouw logo op de omslag, dan zijn ATS-keywords volledig de verkeerde optimalisatie; je hebt afstemming op de briefing, blinde cv's en pakketopbouw nodig. Kies op wie het document leest, niet op welke tool 'AI' zegt.",
    faqs: [
      {
        question: "Optimaliseert MagicCV cv's voor ATS zoals Rezi?",
        answer:
          "Nee, bewust niet. Proposal-cv's worden gelezen door klantbeoordelaars tegen een briefing, niet geparseerd door recruitmentsoftware. MagicCV optimaliseert voor die lezer: de AI leest de RFP en heraccentueert elk cv rond de eisen.",
      },
      {
        question: "Rezi adverteert met SOC 2 Type II. Waar staat MagicCV op compliance?",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, auditlogs en SSO plus een verwerkersovereenkomst op het Enterprise-abonnement. SOC 2 is in uitvoering, nog niet afgerond - is een afgerond SOC 2-rapport vandaag een harde eis, neem dat dan eerlijk mee in je tijdlijn.",
      },
      {
        question: "Kunnen de Rezi-cv's van onze consultants worden geïmporteerd in MagicCV?",
        answer:
          "Ja. Exporteer ze als PDF of DOCX en importeer ze in MagicCV - elk bestand wordt een gestructureerd profiel, doorzoekbaar op vaardigheden, sectoren, talen en certificeringen.",
      },
      {
        question: "Biedt MagicCV white-label-implementatie?",
        answer:
          "Nee. MagicCV is een teamworkspace voor bureaus die hun eigen bench beheren, geen platform om te rebranden voor derden. Is white-label de eis - loopbaandiensten, cv-bedrijven - dan is Rezi daar precies voor gebouwd.",
      },
      {
        question: "We zijn een IT-dienstverlener, geen loopbaancentrum. Waarom stond Rezi dan op onze shortlist?",
        answer:
          "Meestal omdat zoekopdrachten op 'AI-cv-builder' het als eerste tonen. De evaluatievraag die de categorieën scheidt: kan het een RFP-bijlage van 40 pagina's lezen en er 8 consultant-cv's omheen vormen vóór donderdag? Dat is de taak waarvoor MagicCV is gebouwd.",
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
    h1: "MagicCV vs Neobrain: HR-skillsplatform of bid-klare cv's?",
    sub: "Neobrain brengt skills in kaart voor interne HR-strategie. MagicCV zet consultantervaring om in klantgerichte cv's. Ze delen het woord 'skills' en verder vrijwel niets.",
    whereCompetitorWins: [
      "Enterprise skills-gebaseerd talentmanagement: skillsmapping, interne mobiliteit en strategische workforceplanning op organisatieschaal",
      "Modules voor loopbaanontwikkeling en performance met HRIS-integraties, gebouwd voor HR-teams die skillstransformaties draaien",
      "De juiste tool wanneer de vraag is 'welke skills heeft en mist ons personeelsbestand' in plaats van 'welk cv gaat in deze bid'",
      "Gevestigd bij grote organisaties, met name in Frankrijk",
    ],
    whereMagicCvDiffers: [
      "Produceert het artefact dat klanten daadwerkelijk zien: on-brand consultant-cv's en proposalpakketten, per RFP afgestemd door AI die de briefing leest",
      "Koper en tijdlijn passen bij bidwerk: self-serve, publieke prijzen vanaf $0, het eerste afgestemde cv dezelfde dag eruit - geen HR-transformatieprogramma vereist",
      "Anonimisering met één klik en vertaling naar elke taal met behoud van lay-out, voor EU-aanbestedingen en raamovereenkomsten",
      "Skills-zoeken inbegrepen op werkniveau: vind elke consultant met SAP, Frans en nutssectorervaring in seconden",
    ],
    rows: [
      { category: "Categorie", magiccv: "Klantgerichte cv- en proposalworkflow", competitor: "Intern skills- en talentmanagementplatform" },
      { category: "Primaire koper", magiccv: "Bidmanagers, ops-leads, resourcingteams", competitor: "CHRO's en HR-transformatieleiders" },
      { category: "Kernoutput", magiccv: "Afgestemde, on-brand cv's en cv-pakketten", competitor: "Skillsmaps, mobiliteitspaden, workforceplannen" },
      { category: "Time-to-value", magiccv: "Dezelfde dag, self-serve", competitor: "Doorgaans een enterprise-programma met gefaseerde uitrol" },
      { category: "Rol van skillsdata", magiccv: "Geëxtraheerd uit cv's om zoeken en afstemming te voeden", competitor: "Het product zelf - beheerd als strategische data" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Enterprise, op offertebasis" },
    ],
    guidance:
      "Deze tools beantwoorden verschillende vragen. Moet je organisatie workforceskills in kaart brengen, omscholing plannen en interne mobiliteit aanjagen, dan is Neobrain gebouwd voor die schaal van HR-probleem. Heeft je bidteam vóór donderdag aanbestedingsklare consultant-cv's nodig, dan produceert geen enkel skillsplatform die - dat is de taak van MagicCV. Grotere bureaus draaien soms beide; ze overlappen niet genoeg om te botsen.",
    faqs: [
      {
        question: "Is Neobrain eigenlijk een concurrent van MagicCV?",
        answer:
          "Alleen aan de randen. Neobrain is een intern skills- en talentplatform voor HR; MagicCV produceert klantgerichte cv's voor bids. Belandden beide op je shortlist, dan zijn er in de evaluatie waarschijnlijk twee verschillende projecten door elkaar gelopen.",
      },
      {
        question: "Doet MagicCV niet ook skillsmanagement?",
        answer:
          "Op werkniveau, ja: het importeren van cv's bouwt een vaardighedenmatrix die je doorzoekt op vaardigheid, sector, taal en certificering. Wat het niet doet is strategische workforceplanning, mobiliteitsprogramma's of skills-gap-analytics - dat is oprecht het territorium van Neobrain.",
      },
      {
        question: "Kunnen we de data van Neobrain gebruiken om proposal-cv's te bouwen?",
        answer:
          "Skillsplatforms beschrijven mensen; ze produceren doorgaans geen aanbestedingsklare documenten in jouw sjabloon, geanonimiseerd en vertaald. Bureaus met beide behoeften exporteren cv's en importeren ze in MagicCV - Word- en PDF-import betekent geen integratieproject.",
      },
      {
        question: "Waar haal je het snelst waarde uit?",
        answer:
          "Volledig verschillende schalen. MagicCV is self-serve: cv's geïmporteerd en de eerste afgestemde export dezelfde dag, $50/maand op het Pro-niveau. Een enterprise-skillsplatform is doorgaans een programma - maanden uitrol met HRIS-integratie - omdat het een organisatiebreed probleem oplost.",
      },
      {
        question: "We zijn mid-market. Hebben we een van beide nodig?",
        answer:
          "Zijn bid-cv's de pijn, dan lost MagicCV die op tegen mid-market prijs en inspanning. Een volledig skillstransformatieplatform verdient zijn kosten meestal pas terug op enterprise-personeelsaantallen; daaronder dekt de vaardighedenmatrix die MagicCV uit je cv's bouwt vaak wat mid-market teams daadwerkelijk gebruiken.",
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
    h1: "MagicCV vs TechWolf: skillsinfrastructuur of cv's die je kunt versturen?",
    sub: "TechWolf leidt skillsdata af voor enorme enterprises. MagicCV produceert de afgestemde cv's waarmee je bid de deur uitgaat. Verschillende lagen van de stack, zelden een echte of-of.",
    whereCompetitorWins: [
      "Skills-intelligentie-infrastructuur die vaardigheden automatisch afleidt uit werksignalen, in plaats van te leunen op zelfgerapporteerde data",
      "Integreert met grote HCM-systemen zoals Workday en SAP SuccessFactors, gebouwd om op zeer grote enterprise-schaal te opereren",
      "De sterkste optie wanneer het doel continue, geautomatiseerde skillsdata is over een personeelsbestand van tienduizenden",
      "Een infrastructuurspeler: andere HR-systemen worden slimmer omdat TechWolf ze voedt",
    ],
    whereMagicCvDiffers: [
      "Leeft op de outputlaag: zet consultantprofielen om in klant-klare, on-brand cv's, per RFP afgestemd door AI die de briefing leest",
      "Op maat van mid-market bureaus: self-serve opzet dezelfde dag, publieke prijzen vanaf $0 met Pro voor $50/maand",
      "Levert de bidteam-toolkit - chatbewerking, blinde cv's met één klik, vertaling met behoud van lay-out, proposal-cv-pakketten",
      "Heeft geen HCM-integratie nodig om te starten: importeer Word-, PDF- of LinkedIn-cv's en de profielen bouwen zichzelf",
    ],
    rows: [
      { category: "Laag", magiccv: "Output: documenten die klanten zien", competitor: "Infrastructuur: skillsdata die HR-systemen voedt" },
      { category: "Kernoutput", magiccv: "Afgestemde, on-brand cv's en proposalpakketten", competitor: "Continu afgeleide skillsprofielen in HCM-systemen" },
      { category: "Typische klant", magiccv: "Consultancy- en dienstverleners, 10-250 mensen", competitor: "Zeer grote enterprises, vaak 10.000+ medewerkers" },
      { category: "Opzet", magiccv: "Self-serve, cv's importeren, output dezelfde dag", competitor: "Enterprise-integratieproject met HCM-systemen" },
      { category: "Koper", magiccv: "Bid-, ops- en resourcing-leads", competitor: "Enterprise HR- en IT-leiderschap" },
      { category: "Prijzen", magiccv: "Publiek: Free, $50/mnd Pro", competitor: "Enterprise, op offertebasis" },
    ],
    guidance:
      "Ben je een enterprise HR-leider die betrouwbare, continu bijgewerkte skillsdata nodig heeft die naar Workday stroomt over 50.000 medewerkers, dan is TechWolf daar precies voor gebouwd en MagicCV niet. Ben je een consultancybureau dat vóór donderdag 8 afgestemde, geanonimiseerde cv's in de taal van de klant nodig heeft, dan gaat skillsinfrastructuur die niet produceren - MagicCV wel. De meeste lezers van deze pagina hebben het document nodig, niet de datalaag.",
    faqs: [
      {
        question: "Leidt MagicCV vaardigheden af uit werkactiviteit zoals TechWolf?",
        answer:
          "Nee - dat is de specialiteit van TechWolf en een oprecht moeilijk probleem op enterprise-schaal. MagicCV haalt vaardigheden uit de cv's die je importeert, wat goed past bij mid-market omvang waar de bench honderden mensen telt, geen tienduizenden.",
      },
      {
        question: "Zou de skillsdata van TechWolf onze proposal-cv's kunnen genereren?",
        answer:
          "TechWolf produceert skillsdata voor HR-systemen, geen klantgerichte documenten; je hebt nog steeds iets nodig om het cv te schrijven, branden, anonimiseren en vertalen. Die outputlaag is het volledige product van MagicCV.",
      },
      {
        question: "We zijn met 80 consultants. Is TechWolf überhaupt relevant voor ons?",
        answer:
          "Waarschijnlijk niet - het model is gebouwd rond HCM-integratie op grote enterprise-schaal en workforce-omvang. Met 80 mensen levert de aanpak van MagicCV - parseer de cv's die je hebt naar doorzoekbare profielen - de praktische voordelen van skillszichtbaarheid zonder infrastructuurproject.",
      },
      {
        question: "Kan een groot bureau beide gebruiken?",
        answer:
          "Ja, op verschillende lagen: TechWolf dat enterprise-skillsdata actueel houdt in het HCM, MagicCV dat afgestemde bid-cv's produceert voor de consultingtak. MagicCV importeert Word- en PDF-cv's rechtstreeks, dus niets aan het draaien van beide vereist integratiewerk.",
      },
      {
        question: "Wat kost MagicCV vergeleken met een enterprise-skillsplatform?",
        answer:
          "MagicCV publiceert prijzen: Free (10 profielen, 30 cv's), $50/maand Pro (200 profielen, 600 cv's), maatwerk Enterprise met SSO en een verwerkersovereenkomst. Enterprise-skillsinfrastructuur is een compleet andere budgetcategorie - doorgaans een zescijferige opdracht op offertebasis, gedimensioneerd op personeelsomvang.",
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
