import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales- en businessdevelopment-leads bij consultancy- en IT-dienstverleners die verantwoordelijk zijn voor de winratio - en die de cv-voorbereiding erbij krijgen zodra een deadline dichtbij komt.",
    h1: "Haal het cv-geren uit bidmanagement.",
    sub: "MagicCV neemt de cv-kant van bidmanagement over voor consultancy-salesteams: consultantpakketten gematcht op de RFP, afgestemd op wat de beoordelaars scoren en geëxporteerd op je sjabloon voordat de deadline spannend wordt.",
    pain: {
      quote: "De aanbesteding sluit om 9.00 uur. Het is 23.00 uur en ik ben het twaalfde cv aan het heropmaken omdat de partner me net final_v3_JS_edit.docx heeft gestuurd.",
      answer: "Upload de RFP of briefing en MagicCV leest de eisen, toont de best passende consultants uit je bench, vormt elk cv om rond wat de beoordelingscriteria daadwerkelijk belonen en exporteert het hele pakket op je merksjabloon als PDF of Word. De nachtelijke verbouwing wordt een controle van 15 minuten.",
      proofPoints: [
        "AI leest de RFP - inclusief de bijlage van 40 pagina's - en stemt elk cv af op de gestelde eisen",
        "Skills-zoeken over de hele bench: vaardigheden, sectoren, talen, certificeringen",
        "Pixelconsistente PDF- en Word-exports op je merksjabloon, zodat elke indiening oogt als één bureau",
        "Eén actueel profiel per persoon - niet meer beginnen vanuit de versie die een partner toevallig bewaarde",
      ],
    },
    featureRows: [
      {
        title: "Vind de juiste consultants terwijl concurrenten de RFP nog aan het lezen zijn",
        body: "Doorzoek de bench op vaardigheden, sectoren, talen en certificeringen in plaats van practice leads te mailen en te wachten. Wat twee dagen \"wie hebben we hiervoor?\" was, wordt een gefilterde lijst waaruit je in één zitting een shortlist maakt.",
        screenshotAlt: "Skills-zoekopdracht gefilterd op consultants met AWS-certificering, publieke-sectorervaring en Frans, met 6 matches",
      },
      {
        title: "Elk cv omgevormd rond wat de beoordelaars scoren",
        body: "MagicCV leest de briefing en herordent het profiel van elke consultant zodat de relevante projecten en vaardigheden vooropstaan. De migratie in de energiesector komt op pagina één voor de nutsbedrijven-bid; de generieke samenvattingsalinea kost je geen beoordelingspunten meer.",
        screenshotAlt: "Consultant-cv voor en na afstemming op de beoordelingscriteria van een RFP, naast elkaar",
      },
      {
        title: "Een indieningsklaar pakket in minuten, geen verloren avond",
        body: "Selecteer de shortlist, kies het sjabloon, exporteer. Twaalf afgestemde cv's komen eruit als één consistent PDF- of Word-pakket, identiek opgemaakt. Cv-voorbereiding is niet langer het punt op het bidplan dat iedereen stilletjes met twee dagen oprekt.",
        screenshotAlt: "Exportdialoog die een proposalpakket van 12 cv's genereert op een merksjabloon, met voortgangsindicator",
      },
      {
        title: "Eén profiel per persoon, zodat wilde versies uitsterven",
        body: "Consultants en partners werken het centrale profiel bij - via chatgebaseerd bewerken, niet via bijgehouden wijzigingen in een Word-bestand. Elke export wordt gegenereerd vanuit dat profiel, waardoor de versie die een partner op zijn bureaublad bewaart niet langer in indieningen opduikt.",
        screenshotAlt: "Consultantprofiel met datum van laatste update en een chatbewerking die een recente opdracht toevoegt",
      },
    ],
    stats: [
      { value: "1 dag → 15 min", label: "van ontvangen RFP tot indieningsklaar cv-pakket", isPlaceholder: true },
      { value: "+18%", label: "winratio op bids met afgestemde cv's", isPlaceholder: true },
    ],
    includeRoiTeaser: true,
    faqs: [
      {
        question: "Hoe stop ik dat partners hun eigen cv-versies bijhouden?",
        answer: "Door het centrale profiel het enige te maken waar exports uit komen. In MagicCV heeft elke persoon één gestructureerd profiel; partners werken dat bij met chatgebaseerd bewerken in plaats van een privé Word-bestand te onderhouden. Als het pakket altijd vers vanuit het profiel wordt gegenereerd, is er niets waar de privé-final_v3.docx nog in geplakt kan worden.",
      },
      {
        question: "Kan MagicCV echt een volledige RFP lezen, of plak ik eisen handmatig in?",
        answer: "Upload de RFP of briefing zelf. De AI leest die, haalt eruit waar de beoordeling om vraagt en vormt elk geselecteerd cv om rond die eisen. Jij controleert het resultaat in plaats van de interpretatie zelf te doen - en je kunt voor export nog alles aanpassen.",
      },
      {
        question: "Is dit een volledig bidmanagementplatform of alleen het cv-deel?",
        answer: "Alleen het cv-deel - bewust. MagicCV beheert niet je bidpipeline, prijsstelling of documentassemblage; het haalt de cv-bottleneck uit je bestaande bidmanagementproces. De meeste teams draaien het naast wat ze al gebruiken voor de rest van de proposal.",
      },
      {
        question: "We hebben een huissjabloon in Word dat door het merkteam is goedgekeurd. Kunnen we dat houden?",
        answer: "Ja. Je sjabloon wordt een merksjabloon in MagicCV, en elke export rendert er pixelconsistent naartoe in PDF of Word. Je kunt meerdere sjablonen aanhouden - huisstijl plus klant- of raamovereenkomstspecifieke formats - en per export wisselen.",
      },
      {
        question: "Onze consultant-cv's staan in SharePoint-mappen. Hoe beginnen we?",
        answer: "Importeer ze zoals ze zijn. MagicCV accepteert Word-, PDF- en LinkedIn-exports en parseert elk bestand naar een gestructureerd profiel, één per persoon. Er is geen overtypproject; de rommelige map is de input, geen blokkade.",
      },
      {
        question: "Sommige raamovereenkomsten vereisen blinde beoordeling. Kunnen we geanonimiseerde cv's indienen?",
        answer: "Ja - anonimisering is één klik. MagicCV verwijdert namen, foto's en identificerende gegevens en exporteert een blind cv op hetzelfde sjabloon, zodat competitieve en raamovereenkomst-indieningen die dit vereisen geen aparte handmatige ronde nodig hebben.",
      },
      {
        question: "Hoe snel kunnen we realistisch een pakket rondkrijgen voor een deadline?",
        answer: "Zodra de profielen erin staan, is een afgestemd pakket minuten machinetijd plus jouw controle. De eerlijke beperking is profielkwaliteit: als het profiel van een consultant actueel is, is het afgestemde cv dat ook. De AI houdt profielen makkelijk bij te werken, maar kan geen opdracht verzinnen die niemand heeft vastgelegd.",
      },
      {
        question: "Wat kost dit voor een bidteam?",
        answer: "Free dekt 10 profielen en 30 cv-exports - genoeg om er een echte bid doorheen te draaien. Pro is $50/maand voor 200 profielen en 600 cv's, wat past bij de meeste middelgrote consultancies. Enterprise voegt onbeperkte schaal, SSO en een verwerkersovereenkomst toe tegen maatwerkprijzen.",
      },
    ],
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
    reader: "Recruitment- en resourcing-leads bij consultancy- en staffingbureaus die consultantprofielen actueel houden en elk \"wie hebben we hiervoor?\"-verzoek beantwoorden - meestal op een deadline die iemand anders heeft gezet.",
    h1: "Een kandidatendatabase die actueel blijft zonder de vrijdagse najaagronde.",
    sub: "MagicCV maakt van de cv's die verspreid liggen over inboxen en schijven één doorzoekbare kandidatendatabase - gestructureerde profielen die je doorzoekt op vaardigheid, afstemt op een briefing en exporteert in elk format, zonder iemand na te jagen.",
    pain: {
      quote: "Drie weken geleden stuurde ik de herinnering voor cv-updates. Twee consultants reageerden. Een van hen stuurde een PDF uit 2023.",
      answer: "MagicCV geeft elke persoon één gestructureerd profiel en laat de AI het saaie deel doen: het parseert wat een consultant ook stuurt - Word, PDF, een LinkedIn-export - en werkt het profiel ermee bij. Jij doorzoekt de database en exporteert het format dat het verzoek nodig heeft, in plaats van bestanden na te jagen en handmatig te heropmaken.",
      proofPoints: [
        "Importeer elk cv-format - Word, PDF, LinkedIn - naar één gestructureerd profiel per persoon",
        "AI parseert updates uit wat consultants ook sturen, geen handmatig overtypen",
        "Doorzoek de hele bench op vaardigheden, sectoren, talen en certificeringen",
        "Anonimisering met één klik voor blinde klantindieningen",
      ],
    },
    featureRows: [
      {
        title: "Eén profiel per persoon, wat ze ook sturen",
        body: "Zet het Word-bestand, de PDF of de LinkedIn-export erin en MagicCV parseert het naar een gestructureerd profiel. Cv's van nieuwe medewerkers blijven niet langer in je inbox wachten op een rustige middag die nooit komt.",
        screenshotAlt: "Importscherm dat een Word-cv en een LinkedIn-PDF parseert naar één gestructureerd consultantprofiel",
      },
      {
        title: "Beantwoord \"wie hebben we met SAP en Duits?\" in seconden",
        body: "De vaardighedenmatrix dekt je hele bench: vaardigheden, sectoren, talen, certificeringen. Een staffingverzoek wordt een zoekopdracht en een shortlist, geen vrijdagmiddag vol Slack-berichten aan practice leads.",
        screenshotAlt: "Kandidatendatabase gefilterd op 8 consultants met SAP, Duits en ervaring in de maakindustrie",
      },
      {
        title: "Elke output die het verzoek nodig heeft, vanuit hetzelfde profiel",
        body: "Wil de klant een eigen format? Wil het bidteam het huissjabloon? Genereer beide vanuit het actuele profiel - en vertaal het naar de taal van de klant met de lay-out intact. Eén profiel, elk format, nul knip-en-plakwerk.",
        screenshotAlt: "Exportopties voor één profiel: PDF in huissjabloon, Word-format van de klant en een Duitse vertaling",
      },
      {
        title: "Blinde cv's voor klantindiening in één klik",
        body: "Als een klant of raamovereenkomst blinde werving vereist, anonimiseer je het cv met één klik - naam, foto en identificerende gegevens verwijderd, lay-out onaangetast. Nooit meer twaalf documenten handmatig schoonpoetsen de avond voor indiening.",
        screenshotAlt: "Geanonimiseerd consultant-cv naast het origineel, met naam en foto vervangen door een kandidaatcode",
      },
    ],
    stats: [
      { value: "6 uur", label: "per week bespaard op het najagen en heropmaken van cv's", isPlaceholder: true },
    ],
    faqs: [
      {
        question: "Kunnen cv's van kandidaten worden geanonimiseerd voor klantindiening?",
        answer: "Ja, in één klik. MagicCV verwijdert namen, foto's en identificerende gegevens en exporteert een blind cv op hetzelfde sjabloon, zodat indieningen die blinde werving vereisen geen handmatige poetsronde nodig hebben. Het oorspronkelijke profiel blijft onaangetast.",
      },
      {
        question: "Hoe houden we 200 consultant-cv's actueel zonder mensen na te jagen?",
        answer: "Verlaag de kosten van bijwerken tot bijna nul. Consultants sturen wat ze hebben - een aangepast Word-bestand, een LinkedIn-export - en de AI parseert het naar hun profiel; bewerkingen kunnen ook via chat. Jij bent niet langer de persoon die updates overtypt, en dat was grotendeels waarom updates nooit gebeurden.",
      },
      {
        question: "Wat gebeurt er met de cv's die we al in SharePoint en oude inboxen hebben?",
        answer: "Dat is je importbron. MagicCV parseert Word-, PDF- en LinkedIn-bestanden naar gestructureerde profielen, één per persoon, zodat de bestaande stapel de startdatabase wordt in plaats van een migratieproject. Begin met de 20 mensen die je het vaakst inzet en breid vanaf daar uit.",
      },
      {
        question: "Hoe verschilt zo'n kandidatendatabase van ons ATS?",
        answer: "Een ATS volgt sollicitanten door een wervingspipeline en doet er na het aanbod amper nog toe. MagicCV beheert de mensen die je al hebt: hun profielen actueel, doorzoekbaar en exporteerbaar houden voor staffingverzoeken en bids. De meeste teams draaien beide - ze beantwoorden verschillende vragen.",
      },
      {
        question: "Kunnen we zoeken op certificeringen en sectorervaring, niet alleen op functietitels?",
        answer: "Ja. Profielen zijn gestructureerde data, dus de vaardighedenmatrix dekt vaardigheden, sectoren, talen en certificeringen over het hele team. \"Azure-gecertificeerd, financiële dienstverlening, Nederlandstalig\" is een filter, geen e-mailthread.",
      },
      {
        question: "We beheren veel persoonsgegevens. Hoe gaat MagicCV om met de AVG?",
        answer: "AVG by design: EU-dataresidentie, auditlogs en rolgebaseerde controle over wie wat ziet. Enterprise-abonnementen voegen SSO en een verwerkersovereenkomst toe. Als iemand vertrekt, kan het profiel worden verwijderd in plaats van te blijven hangen in vergeten mappen - meer dan de meeste gedeelde schijven kunnen zeggen.",
      },
      {
        question: "Hoe ziet de prijs eruit naarmate de database groeit?",
        answer: "Free dekt 10 profielen en 30 cv-exports, handig voor een pilot. Pro is $50/maand voor 200 profielen en 600 cv's. Enterprise heeft maatwerkprijzen met onbeperkte profielen, SSO en een verwerkersovereenkomst - het gebruikelijke pad zodra resourcing de hele bench erdoorheen draait.",
      },
      {
        question: "Kunnen consultants hun eigen profiel bijwerken?",
        answer: "Ja - dat is het punt. Ze kunnen bewerken via chat of gewoon een actueel cv sturen dat de AI inleest, en toegangsrechten bepalen wie mag bewerken en wie alleen bekijken. Updates worden een taak van twee minuten voor de consultant in plaats van een vast punt op jouw najaaglijst.",
      },
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
    reader: "HR- en People Ops-leads die verantwoordelijk zijn voor de kwaliteit van medewerkersdata - en die cv-kopieën zien vermenigvuldigen over gedeelde schijven, laptops en bidmappen zonder er iets over te kunnen beheren.",
    h1: "Eén beheerd dossier per consultant. Geen schaduwkopieën.",
    sub: "MagicCV vervangt de cv-wildgroei over schijven, inboxen en laptops door gestructureerde profielen met toegangsbeheer - schone data die HR daadwerkelijk kan besturen, zonder er nog een systeem bij te zetten dat mensen omzeilen.",
    pain: {
      quote: "Er zijn vier versies van Anna's cv: één in SharePoint, één in de bidmap van vorige maand, één op haar laptop en één die een partner zelf heeft herschreven. Ik zou je niet kunnen zeggen welke klopt.",
      answer: "MagicCV maakt het profiel het enige dossier en elk cv een export ervan. Data leeft als gestructureerde velden in plaats van vrije Word-documenten, rolgebaseerde toegang bepaalt wie wat mag zien en bewerken, en omdat elke export vers vanuit het profiel wordt gegenereerd, groeien kopieën niet langer uit tot concurrerende versies.",
      proofPoints: [
        "Gestructureerde profielvelden vervangen vrije Word-documenten",
        "Rolgebaseerde toegang: wie mag bekijken, wie mag bewerken, per profiel",
        "AVG by design, met EU-dataresidentie en auditlogs",
        "Elk cv gegenereerd vanuit het centrale profiel, dus exports kunnen niet afdrijven van het dossier",
      ],
    },
    featureRows: [
      {
        title: "Data die je kunt besturen, geen documenten die je alleen kunt verzamelen",
        body: "Vaardigheden, projecten, certificeringen en talen leven als gestructureerde velden, niet als proza in een .docx. Je ziet wat compleet is, wat verouderd is en wat ontbreekt over het hele bureau - vragen die een map met Word-bestanden helemaal niet kan beantwoorden.",
        screenshotAlt: "Overzicht van profielcompleetheid met gestructureerde velden en datums van laatste update over een team",
      },
      {
        title: "Toegang die past bij hoe het bureau echt werkt",
        body: "Consultants bewerken hun eigen profiel, resourcing bekijkt de bench, bidteams exporteren - en niemand downloadt een spreadsheet met ieders loopbaanhistorie naar een laptop. Rolgebaseerde toegang vervangt het erewoordsysteem van de gedeelde schijf.",
        screenshotAlt: "Instellingen voor rolgebaseerde toegang met bekijk- en bewerkrechten per team",
      },
      {
        title: "Compliance ingebouwd, niet gereconstrueerd op auditmoment",
        body: "AVG by design, EU-dataresidentie en auditlogs die tonen wie wat heeft ingezien en gewijzigd. Als een consultant vertrekt of zijn datarechten uitoefent, handel je op één dossier - geen zoektocht over vijf schijven en ieders verzonden items.",
        screenshotAlt: "Auditlog met toegangs- en bewerkgebeurtenissen op profielen, met tijdstempels en gebruikersnamen",
      },
      {
        title: "Eén systeem, geen tweede parallel systeem",
        body: "MagicCV probeert je HRIS niet te vervangen - het neemt het cv-probleem over waarvoor het HRIS nooit is gebouwd. Integraties met Personio, BambooHR en HiBob staan op de roadmap om profielen automatisch synchroon te houden; vandaag brengt import vanuit Word, PDF of LinkedIn bestaande cv's binnen zonder overtypen.",
        screenshotAlt: "Instellingenpaneel met cv-importopties en geplande HRIS-integraties gemarkeerd als roadmap",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Voldoet MagicCV aan de AVG, en waar wordt onze data opgeslagen?",
        answer: "MagicCV is AVG-by-design gebouwd met EU-dataresidentie, auditlogs en rolgebaseerde toegangscontrole. Enterprise-abonnementen bevatten een verwerkersovereenkomst. Consultantdata blijft in één beheerd systeem in plaats van te verspreiden over schijven en inboxen - en daar zit het meeste cv-gerelateerde AVG-risico nu juist.",
      },
      {
        question: "Hebben jullie SOC 2?",
        answer: "De SOC 2-certificering is in uitvoering - we claimen niets voordat die is afgerond. Wat er vandaag staat: AVG-by-design gegevensverwerking, EU-dataresidentie, auditlogs en SSO plus een verwerkersovereenkomst op Enterprise. Vraag ons naar de actuele status als je evalueert.",
      },
      {
        question: "Hoe bepalen we wie consultantprofielen mag zien en bewerken?",
        answer: "Rolgebaseerde toegang, ingesteld per groep: consultants bewerken doorgaans hun eigen profiel, resourcing- en bidteams krijgen bekijk- en exportrechten, HR beheert het geheel. Het auditlog legt vast wie wat heeft bekeken en gewijzigd, dus governance is verifieerbaar in plaats van aangenomen.",
      },
      {
        question: "Dupliceert dit ons HRIS?",
        answer: "Nee - het dekt wat het HRIS niet dekt. Je HRIS bevat contracten, salaris en verzuim; het heeft geen gestructureerd model van projectervaring, vaardigheden en klantklare cv's. MagicCV beheert die laag, en HRIS-integraties (Personio, BambooHR, HiBob) staan op de roadmap om kernvelden automatisch synchroon te houden.",
      },
      {
        question: "Wat gebeurt er met iemands data als die het bureau verlaat?",
        answer: "Er is één dossier om op te handelen. Verwijder of bewaar het profiel volgens jouw beleid, met het auditlog dat documenteert wat er is gebeurd. Vergelijk dat met de status quo, waarin het cv van een vertrekker eindeloos voortleeft in bidmappen en persoonlijke schijven waar niemand meer aan denkt.",
      },
      {
        question: "Hoe migreren we cv's van de gedeelde schijven zonder een data-invoerproject?",
        answer: "Importeer de bestanden zoals ze zijn - Word, PDF, LinkedIn-exports. De AI parseert elk bestand naar een gestructureerd profiel, één per persoon, en markeert wat het niet kon invullen, zodat eigenaren de gaten aanvullen. Het werk wordt controleren, geen overtypen.",
      },
      {
        question: "Is er SSO?",
        answer: "Ja, op het Enterprise-abonnement, samen met een verwerkersovereenkomst en onbeperkte profielen. Free (10 profielen) en Pro ($50/maand, 200 profielen) gebruiken standaard inloggen - prima voor een pilot, terwijl Enterprise past zodra IT- en compliance-eisen in beeld komen.",
      },
      {
        question: "Gaan consultants het echt gebruiken, of is dit weer een systeem dat ze negeren?",
        answer: "Het updatepad is bewust laagdrempelig: stuur een actueel cv en de AI leest het in, of bewerk via chat. Consultants krijgen er iets voor terug - een verzorgd, on-brand cv op aanvraag - en dat is meer stimulans dan een HR-datasysteem ze doorgaans biedt.",
      },
    ],
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
    reader: "Delivery-, engagement- en practice leads die projecten bemensen en de klant cv's verschuldigd zijn in de proposalfase en bij de kickoff - bovenop het daadwerkelijk leiden van het werk.",
    h1: "Start elk engagement zonder het cv-geren.",
    sub: "MagicCV geeft delivery leads klantklare consultant-cv's - gematcht op de eisen, in het format en de taal van de klant - zonder factureerbare mensen in de week voor de kickoff op documentadmin te zetten.",
    pain: {
      quote: "De kickoff is maandag. De klant wil vijf cv's in hun inkoopsjabloon, in het Frans, en de helft van de team-cv's stopt nog bij hun projecten uit 2023.",
      answer: "MagicCV houdt één actueel profiel per consultant aan en genereert het klantgerichte cv daaruit op aanvraag: gematcht op de eisen van het engagement, gerenderd in jouw sjabloon of dat van de klant, vertaald met de lay-out intact, geanonimiseerd als de aanbesteding dat eist. Bemensingspapierwerk concurreert niet langer met deliverytijd.",
      proofPoints: [
        "Doorzoek de bench op vaardigheden, sectoren, certificeringen en talen tegen de eisen van de klant",
        "Exporteer in je huissjabloon of het verplichte format van de klant, pixelconsistent",
        "Vertaal cv's naar elke taal met behoud van lay-out",
        "Anonimisering met één klik voor blinde of competitieve indieningen",
      ],
    },
    featureRows: [
      {
        title: "Bemensen op bewijs, niet op geheugen",
        body: "Doorzoek de hele bench tegen wat het engagement daadwerkelijk nodig heeft - de certificering waar de klant op staat, de sectorervaring, de taal. De shortlist komt uit data, niet uit wie de practice lead zich toevallig herinnerde tijdens een vrijdagcall.",
        screenshotAlt: "Bench-zoekopdracht gematcht op de eisen van een engagement, met consultants gerangschikt op vaardigheden en certificeringsfit",
      },
      {
        title: "Het format van de klant zonder het handmatige herwerk",
        body: "Inkoopraster van de overheid, sjabloon van een enterprise-leverancier of je eigen huisstijl - sla elk op als sjabloon en exporteer het cv van elke consultant er rechtstreeks in. De twee uur per cv knippen en plakken in de tabelstructuur van de klant verdwijnt.",
        screenshotAlt: "Eén consultantprofiel geëxporteerd naar een cv-sjabloon voor overheidsinkoop en een PDF in bureaubranding",
      },
      {
        title: "Grensoverschrijdende delivery in de taal van de klant",
        body: "Vertaal een cv naar de taal van het engagement met lay-out en sjabloon intact. De kickoff in Parijs krijgt Franse cv's, de raamovereenkomst in Stockholm Zweedse, en in geen van beide kantoren bouwt iemand documenten handmatig na.",
        screenshotAlt: "Hetzelfde consultant-cv getoond in het Engels en Frans met identieke lay-out en branding",
      },
      {
        title: "Blinde profielen als de aanbesteding erom vraagt",
        body: "Competitieve aanbestedingen en sommige raamovereenkomsten vereisen cv's zonder namen of foto's. Anonimisering is één klik op hetzelfde profiel en sjabloon, dus het blinde pakket is een variant van je normale export - geen aparte nachtelijke bewerkklus.",
        screenshotAlt: "Geanonimiseerd cv voor een aanbestedingsindiening met naam en foto vervangen door een rolcode",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kunnen we cv's exporteren in het verplichte sjabloon van een klant, zoals een format voor overheidsinkoop?",
        answer: "Ja. Voeg het format van de klant toe als sjabloon naast je huisstijl, en het cv van elke consultant exporteert er pixelconsistent in als PDF of Word. Aanbestedingsgedreven bureaus houden doorgaans een kleine bibliotheek aan: huisstijl, twee of drie raamovereenkomstformats en een blinde variant.",
      },
      {
        question: "Behoudt vertaling de lay-out, of krijgen we een muur van tekst om te heropmaken?",
        answer: "De lay-out overleeft. MagicCV vertaalt de cv-inhoud naar elke taal met behoud van sjabloon, structuur en branding - dus de Franse versie van een cv ziet er precies uit als de Engelse, alleen in het Frans.",
      },
      {
        question: "Kan ik consultants zoeken op certificering en sector, niet alleen op rol?",
        answer: "Ja. Profielen zijn gestructureerd, dus de vaardighedenmatrix dekt certificeringen, sectoren, talen en vaardigheden over de hele bench. \"PRINCE2-gecertificeerd, ervaring bij nutsbedrijven, beschikbaar in de Nordics\" is een filter dat je draait, geen vraag die je rondstuurt.",
      },
      {
        question: "Hoe zorgen we dat cv's echt actueel zijn bij de kickoff?",
        answer: "Elke consultant heeft één profiel, en bijwerken is goedkoop: ze sturen een recent cv dat de AI inleest, of bewerken via chat tussen projecten door. Omdat klant-cv's vanuit het profiel worden gegenereerd in plaats van uit mappen opgediept, gebruikt de kickoff wat actueel is - niet wat het laatst is geëxporteerd.",
      },
      {
        question: "Kunnen we cv's anonimiseren voor competitieve aanbestedingen?",
        answer: "Eén klik. Namen, foto's en identificerende gegevens gaan eruit; het sjabloon en de structuur blijven. Het is hetzelfde profiel en dezelfde exportflow, dus blinde indieningen voegen geen aparte handmatige werkstroom toe in de week voor de deadline.",
      },
      {
        question: "Is dit weer een tool die mijn deliveryteams moeten onderhouden?",
        answer: "De onderhoudslast is precies wat het weghaalt. Consultants raken het kort aan tussen engagements om hun profiel actueel te houden - door een cv te sturen of een update te chatten - en delivery leads gebruiken het bij het bemensen. Er is geen doorlopend documentonderhoud, want documenten zijn outputs, niet de opslag.",
      },
      {
        question: "Kan één practice starten zonder bureaubrede uitrol?",
        answer: "Ja, en dat is het gebruikelijke pad. Het Free-abonnement dekt 10 profielen en 30 cv-exports - genoeg voor één team om er een echt engagement doorheen te draaien. Pro voor $50/maand dekt 200 profielen; Enterprise voegt SSO, een verwerkersovereenkomst en onbeperkte schaal toe zodra de rest van het bureau volgt.",
      },
    ],
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
