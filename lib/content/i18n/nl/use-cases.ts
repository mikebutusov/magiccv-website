import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Pas het cv van elke consultant aan op de specifieke briefing, zodat de meest relevante ervaring vooropstaat - zonder herschrijfmarathon voor elke deadline.",
    h1: "Stop met hetzelfde cv indienen bij elke briefing.",
    sub: "MagicCV leest de RFP en vormt het cv van elke consultant om rond de eisen - zodat beoordelaars de fit op pagina één zien, niet op pagina vier.",
    problemToday:
      "Beoordelaars scoren cv's tegen de criteria in de RFP, maar de meeste bureaus dienen bij elke klant hetzelfde generieke document in. Het alternatief is erger: een bidmanager zit met de RFP-bijlage van 40 pagina's op het ene scherm en final_v3_JS_edit.docx op het andere, en herordent handmatig bullets voor 12 cv's, meestal binnen een 48-uursdeadline. De helft van het afstemmen wordt gedaan, de andere helft wordt overgeslagen, en het cv dat op het bureau van de beoordelaar landt, onderverkoopt een consultant die eigenlijk uitstekend past.\n\nMet MagicCV plak je de RFP, de briefing of de beoordelingscriteria, en de AI leest waar de klant op scoort. Vervolgens herordent en heraccentueert het de echte ervaring van elke consultant vanuit diens gestructureerde profiel - de publieke-sectorprojecten van de delivery lead schuiven naar boven voor een overheidsbid, haar fintechwerk staat voorop bij een bank. Jij controleert het resultaat, past alles aan door met de editor te chatten en exporteert in je merksjabloon.",
    steps: [
      {
        title: "Geef MagicCV de briefing, geen samenvatting ervan",
        body: "Plak de volledige RFP, het overzicht met beoordelingscriteria of een beschrijving van twee regels van wat de klant wil. MagicCV haalt de eisen eruit waarop het gaat afstemmen en toont ze aan jou voordat het één cv aanraakt.",
        screenshotAlt: "Geüpload RFP-document met geëxtraheerde eisen als tags: publieke sector, Azure-migratie, Franstalig",
      },
      {
        title: "Zie het cv zich hervormen rond de eisen",
        body: "MagicCV herordent en heraccentueert ervaring uit het bronprofiel van de consultant, zodat de meest relevante projecten vooropstaan. Het verzint nooit iets - elke bewering in het afgestemde cv is herleidbaar naar iets dat al in het profiel staat.",
        screenshotAlt: "Origineel en afgestemd cv naast elkaar, met relevante publieke-sectorprojecten bovenaan en gematchte eisen gemarkeerd",
      },
      {
        title: "Werk de details bij in chat, niet in Word",
        body: "Vraag om wijzigingen in gewone taal - \"begin met de Nordhaus Advisory-opdracht\" of \"kort de rollen uit 2015 in tot één regel\" - en het cv wordt ter plekke bijgewerkt. Geen geworstel met de lay-out, geen versievorken.",
        screenshotAlt: "Chatpaneel naast een cv met de instructie 'vroege carrière inkorten tot één regel' toegepast op het document",
      },
      {
        title: "Exporteer on-brand, klaar om bij te voegen",
        body: "Eén klik levert een pixelconsistente PDF of Word-bestand in het sjabloon van je bureau op. De afgestemde versie wordt bewaard bij het profiel, dus de volgende bid begint met een schone lei, niet met iemands lokale kopie.",
        screenshotAlt: "Exportdialoog met PDF- en Word-opties en een voorbeeld van het merksjabloon van het bureau",
      },
    ],
    outcome: "Voorheen: drie uur per cv herlezen, herordenen en heropmaken - of een generiek cv en stilletjes hopen. Nu: plak de briefing, controleer in minuten een afgestemd concept en dien cv's in die de beoordelingscriteria rechtstreeks beantwoorden. Het afstemmen dat om 23.00 uur werd overgeslagen, gebeurt nu bij elke bid.",
    outcomeStats: [{ value: "+18%", label: "winratio op bids met afgestemde cv's", isPlaceholder: true }],
    faqs: [
      {
        question: "Herschrijft het afstemmen de daadwerkelijke ervaring van een consultant?",
        answer:
          "Nee. MagicCV herordent en heraccentueert ervaring die al in het gestructureerde profiel van de consultant staat. Het verzint nooit projecten, vaardigheden of data - elke regel in het afgestemde cv is herleidbaar naar het bronprofiel, wat telt als een klant vraagt of je achter een bewering staat.",
      },
      {
        question: "Kan ik een volledige RFP van 40 pagina's plakken, of moet het een samenvatting zijn?",
        answer:
          "Plak het hele document. MagicCV leest de volledige RFP, haalt de eisen en beoordelingscriteria eruit en toont je wat het heeft gevonden voordat het gaat afstemmen. Een briefing van twee regels werkt ook - meer context geeft het simpelweg meer om mee te werken.",
      },
      {
        question: "Hoe lang duurt het afstemmen van één cv eigenlijk?",
        answer:
          "Een paar minuten, van het plakken van de briefing tot een gecontroleerd, exportklaar cv. Het meeste van die tijd is jouw controle, niet de generatie. Twaalf cv's afstemmen voor één bid is dezelfde workflow tegen dezelfde briefing, geen 12 aparte middagen.",
      },
      {
        question: "Kunnen we ons bestaande Word-cv-sjabloon behouden?",
        answer:
          "Ja. Je merksjabloon wordt één keer in MagicCV ingesteld, en elk afgestemd cv exporteert erin als pixelconsistente PDF of Word. Het afstemmen verandert wat het cv zegt, niet hoe het eruitziet.",
      },
      {
        question: "Hoe verschilt dit van een cv in ChatGPT plakken?",
        answer:
          "Een algemene chatbot heeft geen bron van waarheid, dus die dikt met plezier aan - en levert platte tekst op die je alsnog moet opmaken. MagicCV stemt af vanuit het gestructureerde profiel van de consultant, weigert ervaring te verzinnen, behoudt je merksjabloon en werkt over het hele team heen vanuit één cv-managementplatform, niet één document per keer.",
      },
      {
        question: "Telt elk afgestemd cv mee voor onze abonnementslimieten?",
        answer:
          "Ja - elk gegenereerd cv telt mee voor het cv-tegoed van je abonnement. Free bevat 10 profielen en 30 cv's in totaal, Pro ($50/maand) bevat 200 profielen en 600 cv's, en Enterprise is onbeperkt. Een afgestemd cv voor een lopende bid is precies waar die tegoeden voor bedoeld zijn.",
      },
      {
        question: "Waar gaan de RFP- en cv-data naartoe? Wij verwerken vertrouwelijke klantbriefings.",
        answer:
          "MagicCV is AVG-first gebouwd met EU-dataresidentie. Je briefings en consultantdata worden verwerkt om jouw cv's te genereren, niet om publieke modellen te trainen. Enterprise voegt SSO, auditlogs en een verwerkersovereenkomst toe als je klantcontracten die vereisen.",
      },
    ],
    related: [
      { label: "Hoe RFP-naar-cv-redenering werkt", href: "/features/rfp-to-cv" },
      { label: "Stel een volledig proposal-cv-pakket samen", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV voor bid- en salesteams", href: "/solutions/sales" },
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
    job: "Stel een compleet, consistent cv-pakket samen voor een proposal of bid - afgestemd op de briefing, in één keer, uren voor de deadline in plaats van minuten.",
    h1: "Nooit meer de avond voor een deadline een cv-pakket bouwen.",
    sub: "Kies het team, stem elk cv in één keer af op dezelfde briefing en exporteer één on-brand pakket - ongeveer 15 minuten in plaats van een verloren dag.",
    problemToday:
      "De RFP landt met een venster van 48 uur. De bidmanager mailt zes consultants om actuele cv's, krijgt vier antwoorden, twee final_v3.docx-bestanden met verschillende lettertypen en één \"gebruik de versie van de Meridian-bid\". Dan begint het echte werk: 12 cv's handmatig heropmaken zodat het pakket niet leest alsof zes verschillende bureaus het schreven, terwijl de deadlineklok doorloopt. Het is het klassieke vrijdagavondgeren, en het herhaalt zich bij elke bid.\n\nMet MagicCV zijn de profielen al actueel, dus het geren begint nooit. Je selecteert het team - of laat MagicCV de best passende consultants voorstellen vanuit de vaardighedenmatrix - plakt de briefing één keer, en elk cv in het pakket wordt tegelijkertijd erop afgestemd. Controleren, bijstellen in chat en één consistent, on-brand pakket exporteren dat klaar is om bij de proposal te voegen.",
    steps: [
      {
        title: "Kies het team - of laat de vaardighedenmatrix meekiezen",
        body: "Selecteer zelf de consultants voor deze bid, of doorzoek de bench op vaardigheden, sectoren, talen en certificeringen en laat MagicCV de sterkste matches tegen de briefing voorstellen. Jij hebt altijd het laatste woord.",
        screenshotAlt: "Teamselectiescherm met 6 voorgestelde consultants, gerangschikt tegen de briefing met badges voor overeenkomende vaardigheden",
      },
      {
        title: "Stem elk cv in één keer af op de briefing",
        body: "Plak de RFP één keer en MagicCV stemt alle geselecteerde cv's tegelijk af op dezelfde eisen. Twaalf cv's krijgen de behandeling die vroeger één cv kreeg - geen herwerk per document.",
        screenshotAlt: "Voortgangsweergave van batchgeneratie waarin 12 consultant-cv's worden afgestemd op één RFP",
      },
      {
        title: "Controleer het pakket, niet de alinea's",
        body: "Scan elk afgestemd cv, werk waar nodig bij door met de editor te chatten en bevestig. Omdat elk cv uit dezelfde gestructureerde profielen en hetzelfde sjabloon komt, is consistentie niet iets dat je controleert - het is de standaard.",
        screenshotAlt: "Pakketcontrolescherm met 12 afgestemde cv's in identiek merksjabloon, één gemarkeerd voor controle",
      },
      {
        title: "Exporteer één indieningsklaar pakket",
        body: "Exporteer het hele team als één on-brand document of als losse bestanden, in PDF of Word, precies zoals de aanbesteding de cv's aangeleverd wil hebben. Bijvoegen en indienen.",
        screenshotAlt: "Exportdialoog voor een gecombineerd cv-pakket met opties voor één document of een bestand per consultant",
      },
    ],
    outcome: "Voorheen: een volle dag najagen, heropmaken en aan elkaar naaien - klaar om middernacht, ingediend met de vingers gekruist. Nu: het pakket kost ongeveer 15 minuten, grotendeels controle, en elk cv erin is afgestemd op de briefing in plaats van alleen maar aanwezig. De deadline dicteert niet langer de kwaliteit.",
    outcomeStats: [{ value: "1 dag → 15 min", label: "typische tijd tot een indieningsklaar cv-pakket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kan MagicCV voorstellen wie er in het pakket moet?",
        answer:
          "Ja. Op basis van de briefing en de vaardighedenmatrix van je team - vaardigheden, sectoren, talen, certificeringen - stelt MagicCV de best passende consultants voor. Het is een shortlist, geen besluit: jij kiest het definitieve team.",
      },
      {
        question: "Wat als de helft van de cv's van het team verouderd is als de RFP landt?",
        answer:
          "Dat is precies waarom je pakketten bouwt vanuit profielen in plaats van bestanden. Elke consultant heeft één gestructureerd profiel dat één keer, centraal, wordt bijgewerkt - geen map met verouderde documenten. Ontbreekt er echt iets, dan werk je het profiel in minuten bij en elk toekomstig cv, in elk format, neemt het over.",
      },
      {
        question: "Ziet het pakket er consistent uit als verschillende mensen de cv's genereren?",
        answer:
          "Ja. Elk cv in het pakket wordt gerenderd vanuit hetzelfde merksjabloon, dus lettertypen, sectievolgorde en lay-out komen overeen, ongeacht wie op exporteren klikte. Het pakket leest als het document van één bureau - precies wat beoordelaars opvalt.",
      },
      {
        question: "Een van onze partners staat op zijn eigen cv-versie. Hoe werkt dat?",
        answer:
          "Zijn ervaring leeft in zijn gestructureerde profiel, net als bij iedereen, en het sjabloon bepaalt de presentatie. Hij kan formuleringen controleren en bijstellen via chat voor de export - wat hij niet kan, is stilletjes een afwijkend Word-bestand bijhouden dat zes maanden later in een pakket opduikt.",
      },
      {
        question: "Telt een pakket van 12 personen als 12 cv's voor ons abonnement?",
        answer:
          "Ja, elk gegenereerd cv telt afzonderlijk mee. Pro ($50/maand) bevat 200 profielen en 600 cv's, wat de reguliere bidactiviteit van de meeste middelgrote teams dekt; Enterprise heft de limieten op. Free (10 profielen, 30 cv's) is genoeg om een echte bid of twee als proef te draaien.",
      },
      {
        question: "Kan het pakket talen mengen als de aanbesteding dat vereist?",
        answer:
          "Ja. MagicCV genereert cv's in de taal die elke indiening vereist vanuit dezelfde masterprofielen, met het merksjabloon intact. Een pakket voor een EU-aanbesteding kan in het Frans de deur uit, terwijl het pakket van hetzelfde team voor een Britse klant in het Engels gaat.",
      },
      {
        question: "We hebben al honderden cv's in SharePoint. Hoe beginnen we?",
        answer:
          "Importeer ze. MagicCV parseert Word- en PDF-cv's naar gestructureerde profielen, één per persoon, zodat je bestaande documenten de startdata worden in plaats van een migratieproject. Vanaf dat moment worden pakketten gebouwd vanuit profielen, niet vanuit wat de zoekbalk toevallig oplevert.",
      },
      {
        question: "Is dit een ATS? We hebben er al een voor werving.",
        answer:
          "Nee. Een ATS volgt kandidaten door een wervingspipeline; MagicCV beheert de cv's van de mensen die al in je team zitten en maakt er afgestemde, on-brand biddocumenten van. De twee lossen verschillende problemen op en bestaan prima naast elkaar.",
      },
    ],
    related: [
      { label: "Hoe RFP-naar-cv-redenering werkt", href: "/features/rfp-to-cv" },
      { label: "Merkconsistente cv-exports", href: "/features/brand-templates" },
      { label: "MagicCV voor bid- en salesteams", href: "/solutions/sales" },
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
    job: "Vervang verspreide cv's op gedeelde schijven door één gestructureerd, actueel profiel per persoon - de bron waar elke bid, bezettingsbeslissing en klantvraag uit put.",
    h1: "Van bestandsarcheologie in SharePoint naar één actueel profiel per persoon.",
    sub: "Cv-databasesoftware voor consultancy- en professional-services-teams: importeer elk cv één keer, houd één actueel profiel per consultant aan en genereer elk format op aanvraag.",
    problemToday:
      "Op dit moment is de \"cv-database\" een SharePoint-map, drie inboxen en een handvol laptops. Dezelfde consultant bestaat als CV_2022.pdf, final_v3_JS_edit.docx en een LinkedIn-profiel dat niemand exporteerde - en geen van alle is duidelijk de actuele. Dat is geen cv-databeheer; het is bestandsarcheologie. Het bijt het hardst op het slechtste moment: een bidmanager die 8 cv's nodig heeft binnen een aanbestedingsvenster van 48 uur, of een accountlead die een klant \"profielen voor morgen\" belooft en vervolgens de avond doorbrengt met het najagen van consultants die druk aan het factureren zijn.\n\nMagicCV vervangt de map door een database. Je importeert de cv's die je al hebt - Word, PDF, in welk format ze ook zijn opgestapeld - en MagicCV parseert elk bestand naar een gestructureerd profiel, één per persoon. Updates gebeuren één keer, op het profiel. Elke output daarna - afgestemd bid-cv, geanonimiseerde aanbestedingsversie, vertaalde kopie - wordt vers gegenereerd vanuit de actuele data, dus \"welk bestand is het nieuwste?\" is een vraag die niemand meer stelt.",
    steps: [
      {
        title: "Importeer de rommel die je hebt, niet de data die je zou willen hebben",
        body: "Zet je bestaande cv-bestanden erin, in elk format - Word, PDF, exports uit oude systemen. MagicCV parseert elk bestand naar een gestructureerd profiel met ervaring, vaardigheden, certificeringen en talen als data, niet als alinea's. Dubbele bestanden van dezelfde persoon worden samengevoegd tot één profiel.",
        screenshotAlt: "Bulkimportscherm dat 47 gemengde Word- en PDF-bestanden verwerkt tot gestructureerde consultantprofielen",
      },
      {
        title: "Houd één profiel per persoon aan - en houd het actueel zonder najagen",
        body: "Elke consultant heeft precies één profiel. Als een project eindigt of een certificering binnenkomt, wordt die één keer toegevoegd, daar - niet in vijf documenten geplakt. AI-ondersteunde updates maken van de bewerking een klus van twee minuten in plaats van een documentherschrijving.",
        screenshotAlt: "Consultantprofielweergave met gestructureerde ervaringsvermeldingen en een indicator voor recente updates",
      },
      {
        title: "Doorzoek het team als een database, want dat is het",
        body: "De vaardighedenmatrix maakt de hele bench doorzoekbaar: filter op vaardigheid, sector, taal of certificering en krijg mensen, geen bestandsnamen. \"Wie heeft een AWS-certificering en spreekt Duits?\" wordt een query van vijf seconden in plaats van een e-mailthread op vrijdagmiddag.",
        screenshotAlt: "Vaardighedenmatrix-zoekopdracht gefilterd op consultants met AWS-certificering en Duits, met 6 passende profielen",
      },
      {
        title: "Genereer elke output vanuit dezelfde bron van waarheid",
        body: "Afgestemd bid-cv, blind cv voor een aanbesteding, Franse versie voor een grensoverschrijdende proposal - allemaal op aanvraag gegenereerd vanuit het actuele profiel, allemaal in je merksjabloon. De output is wegwerpbaar; het profiel is het bezit.",
        screenshotAlt: "Outputkiezer op één profiel met opties voor afgestemde, geanonimiseerde en vertaalde cv's",
      },
    ],
    outcome: "Voorheen: 20 minuten mappen doorspitten per cv, vermenigvuldigd met elke bid, met een reële kans om een klant iets van twee jaar oud te sturen. Nu: één query, één actueel profiel, elk format in minuten. De database stapelt stilletjes waarde op - elke bid wordt sneller omdat de vorige de data schoon hield.",
    outcomeStats: [],
    faqs: [
      {
        question: "Wat gebeurt er met de honderden cv's die we al in SharePoint hebben?",
        answer:
          "Die importeer je. MagicCV parseert Word- en PDF-bestanden naar gestructureerde profielen - één per persoon, ook als je vier versies van het cv van dezelfde consultant hebt. De oude bestanden mogen als archief in SharePoint blijven; ze zijn alleen niet langer de werkkopie.",
      },
      {
        question: "Hoe houden we 200 consultant-cv's actueel zonder mensen elk kwartaal na te jagen?",
        answer:
          "Door de update klein en enkelvoudig te maken. Elke persoon heeft één profiel, updates zijn AI-ondersteunde bewerkingen in plaats van documentherschrijvingen, en er valt achteraf niets op te maken - de sjablonen regelen de presentatie. De meeste teams nemen profielupdates op in de projectafronding in plaats van een najaagcampagne te draaien.",
      },
      {
        question: "Hoe verschilt cv-databasesoftware van ons ATS of HRIS?",
        answer:
          "Een ATS volgt sollicitanten; een HRIS bevat personeelsdossiers zoals contracten en salarisdata. Geen van beide is gebouwd om een afgestemd, on-brand cv voor een bid te produceren. MagicCV is de laag voor de ervaringsdata van je deliveryteam - gestructureerd, doorzoekbaar en direct exporteerbaar als klantgerichte documenten.",
      },
      {
        question: "Integreren jullie met ons HRIS?",
        answer:
          "HRIS-integraties (Personio, BambooHR, HiBob) staan op de roadmap. Vandaag dekt bestandsimport de eerste lading, en omdat profielen maar op één plek bijgewerkt hoeven te worden, is het dagelijkse onderhoud ook zonder synchronisatie licht.",
      },
      {
        question: "Is een centrale cv-database een AVG-probleem of een AVG-verbetering?",
        answer:
          "Goed gedaan, een verbetering. MagicCV is AVG-first met EU-dataresidentie, dus consultantdata staat in één beheerd systeem in plaats van verspreid over inboxen en laptops - wat toegangsbeheer, verwijderverzoeken en audits behapbaar maakt. Enterprise voegt SSO, auditlogs en een verwerkersovereenkomst toe.",
      },
      {
        question: "Hoeveel profielen dekken de abonnementen?",
        answer:
          "Free dekt 10 profielen en 30 gegenereerde cv's - genoeg om de workflow met één team te bewijzen. Pro ($50/maand) dekt 200 profielen en 600 cv's, wat past bij de meeste consultancies tot een paar honderd factureerbare medewerkers. Enterprise is onbeperkt, met SSO en een verwerkersovereenkomst voor grotere bureaus.",
      },
      {
        question: "Wie onderhoudt de profielen - een centrale eigenaar of de consultants zelf?",
        answer:
          "Beide modellen werken. Sommige bureaus laten een ops- of resourcinglead de database beheren; bij andere werken consultants hun eigen profiel bij tijdens de projectafronding, met controle door ops. Omdat er één profiel per persoon is en het sjabloon de opmaak bepaalt, kunnen bijdragers geen versies forken of de lay-out breken.",
      },
      {
        question: "Welke formats kunnen we genereren zodra de cv's gecentraliseerd zijn?",
        answer:
          "Pixelconsistente PDF- en Word-exports in je merksjablonen, plus afgestemde versies voor een specifieke RFP, geanonimiseerde blinde cv's voor aanbestedingen en vertalingen - allemaal gegenereerd vanuit hetzelfde profiel. Centraliseren is de opzet; de gegenereerde outputs zijn de opbrengst.",
      },
    ],
    related: [
      { label: "Profielen en vaardighedenmatrix", href: "/features/profiles-skills" },
      { label: "MagicCV voor HR en People Ops", href: "/solutions/hr" },
      { label: "MagicCV voor recruitmentteams", href: "/solutions/recruitment" },
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
    job: "Produceer geanonimiseerde, blinde cv's voor openbare aanbestedingen, competitieve bids en beoordeling zonder bias - één klik, dezelfde regels voor iedereen, geen handmatig lakken.",
    h1: "Nooit meer handmatig een cv lakken voor een aanbesteding.",
    sub: "Blinde cv's met één klik voor openbare aanbestedingen en blinde werving - dezelfde anonimiseringsregels toegepast op elke consultant, elke keer.",
    problemToday:
      "De aanbestedingsbijlage schrijft voor dat cv's geanonimiseerd moeten zijn, dus besteedt iemand een middag in Word aan het verwijderen van namen, foto's en e-mailadressen uit 10 documenten. Dan beginnen de problemen: een naam overleeft in een koptekst op pagina 3, de documenteigenschappen vermelden nog steeds wie het bestand schreef, en wat het ene teamlid onder \"geanonimiseerd\" verstaat - initialen behouden, werkgeversnamen weg - komt niet overeen met de opvatting van een ander. Bij een openbare aanbesteding kan één gelekt identificerend gegeven een indiening aanvechtbaar maken; bij blinde werving ondermijnt het het hele punt.\n\nMagicCV maakt van anonimisering een eigenschap van de export, geen handmatige bewerkingsronde. Je configureert één keer wat in jouw proces als identificerend geldt - naam, foto, contactgegevens, wat je beoordelingen ook vereisen - en zet anonimisering aan op elk cv. Omdat het blinde cv vers wordt gegenereerd vanuit het gestructureerde profiel in plaats van gelakt uit een oud bestand, zijn er geen achtergebleven kop- en voetteksten, metadata of gemiste vermeldingen om je zorgen over te maken.",
    steps: [
      {
        title: "Begin vanuit elk cv - standaard of afgestemd",
        body: "Genereer het cv van de consultant zoals gebruikelijk, inclusief een versie die is afgestemd op de specifieke aanbesteding. Anonimisering is een schakelaar bovenop elke output, geen apart document dat je onderhoudt.",
        screenshotAlt: "Consultant-cv afgestemd op een openbare aanbesteding, voordat anonimisering is toegepast",
      },
      {
        title: "Zet anonimisering aan - jouw regels, automatisch toegepast",
        body: "Zet de anonimiseringsschakelaar om en MagicCV verwijdert elk gegeven dat je geconfigureerde regels als identificerend beschouwen: naam, foto, contactgegevens en alles wat je beoordelingsproces verder vereist. Dezelfde regelset geldt, ongeacht wie in het team het cv genereert.",
        screenshotAlt: "Anonimiseringsschakelaar toegepast op een cv, met de naam vervangen door een rollabel en de foto verwijderd",
      },
      {
        title: "Exporteer schone blinde cv's, los of als volledig pakket",
        body: "Exporteer de geanonimiseerde versie in je merksjabloon als PDF of Word - voor één consultant of het hele bidteam tegelijk. Omdat elk bestand wordt gegenereerd vanuit profieldata, is er geen residu van een origineel document dat erdoorheen kan glippen.",
        screenshotAlt: "Exportweergave van een geanonimiseerd cv-pakket voor een aanbestedingsteam van 6 personen, allemaal in hetzelfde sjabloon",
      },
    ],
    outcome: "Voorheen: een middag handmatig lakken per aanbesteding, en een sluimerende angst dat een naam in een voettekst is blijven staan. Nu: de blinde versie is één klik, identiek in standaard aan elk ander blind cv dat je bureau ooit heeft geproduceerd. Anonimisering is geen taak meer, maar een instelling.",
    outcomeStats: [],
    faqs: [
      {
        question: "Wat wordt er precies verwijderd uit een blind cv?",
        answer:
          "Wat jouw regels zeggen. Doorgaans naam, foto en contactgegevens; veel teams verwijderen ook andere kenmerken die hun beoordelingsproces als identificerend beschouwt. Je configureert de regelset één keer en die geldt voor elke geanonimiseerde export, voor elke consultant.",
      },
      {
        question: "Kan een naam alsnog lekken via een koptekst, voettekst of bestandsmetadata?",
        answer:
          "Dit is het voordeel van genereren in plaats van lakken. Een blind cv van MagicCV wordt vers opgebouwd vanuit het gestructureerde profiel met de anonimiseringsregels toegepast - het is geen bewerkte kopie van een oud Word-bestand, dus er zijn geen achtergebleven kopteksten, bijgehouden wijzigingen of documenteigenschappen met de naam van de oorspronkelijke auteur.",
      },
      {
        question: "Volgen de geanonimiseerde cv's van elk teamlid dezelfde standaard?",
        answer:
          "Ja. De regels leven in de regelset, niet in individueel oordeel, dus het blinde cv dat een junior bidcoördinator op vrijdagavond produceert, komt overeen met wat een partner zou produceren. Voor openbare aanbestedingen waar inconsistente anonimisering een indiening ongeldig kan maken, is die uniformiteit precies het punt.",
      },
      {
        question: "Kunnen we een heel proposalteam in één keer anonimiseren?",
        answer:
          "Ja. Bouw het cv-pakket voor de bid, pas anonimisering toe en exporteer - elk cv in het pakket volgt dezelfde regels en hetzelfde merksjabloon. Een aanbestedingspakket van 10 personen is één ronde, geen 10 lakklussen.",
      },
      {
        question: "Werkt dit zowel voor blinde werving als voor aanbestedingen?",
        answer:
          "Ja. Staffing- en recruitmentteams gebruiken dezelfde schakelaar om blinde cv's naar klanten te sturen - kandidaten beoordeeld op ervaring en vaardigheden voordat een naam of foto het gesprek binnenkomt. Zelfde mechanisme, zelfde consistentie.",
      },
      {
        question: "Hoe past anonimisering in onze AVG-verplichtingen?",
        answer:
          "Het is één onderdeel van een dataminimalisatiehouding: alleen de persoonsgegevens delen die een proces daadwerkelijk nodig heeft. MagicCV zelf is AVG-first met EU-dataresidentie, en Enterprise voegt auditlogs en een verwerkersovereenkomst toe. Blinde cv's beperken wat je bureau verlaat; het platform beheert wat erbinnen blijft.",
      },
      {
        question: "Behouden geanonimiseerde cv's ons merksjabloon?",
        answer:
          "Ja - de blinde versie exporteert in hetzelfde pixelconsistente sjabloon als elk ander cv, minus de identificerende gegevens. Vereist een aanbesteding juist een neutrale of door de klant voorgeschreven lay-out, dan exporteer je in een sjabloon dat daarvoor is ingericht.",
      },
      {
        question: "Is anonimisering op elk abonnement beschikbaar?",
        answer:
          "Geanonimiseerde exports zijn gegenereerde cv's zoals alle andere en tellen mee voor het tegoed van je abonnement - 30 cv's op Free, 600 op Pro ($50/maand), onbeperkt op Enterprise. Je kunt de volledige blinde-cv-workflow op het Free-abonnement testen voordat een echte aanbesteding ervan afhangt.",
      },
    ],
    related: [
      { label: "Anonimisering en AVG", href: "/features/anonymization" },
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
    job: "Produceer nauwkeurige, on-brand cv's in elke taal die je bids vereisen - gegenereerd vanuit één masterprofiel in plaats van handmatig overgetypt en opnieuw opgemaakt.",
    h1: "Stop met cv's overtypen voor elke grensoverschrijdende bid.",
    sub: "Genereer nauwkeurige, on-brand cv's in EN, DE, FR, NL, ES en meer vanuit één masterprofiel - geen overtypen, geen gebroken lay-outs, geen verouderde versies.",
    problemToday:
      "Een EU-aanbesteding vereist Franse cv's, uiterlijk donderdag. De opties van vandaag zijn allemaal slecht: stuur 8 cv's naar een vertaalbureau en wacht dagen, haal ze door een generieke vertaler en besteed uren aan het repareren van gebroken lay-outs en verkeerd vertaalde functietitels, of houd parallelle taalversies handmatig bij - wat garandeert dat het Duitse cv nog steeds het project vermeldt dat vorig jaar eindigde, terwijl het Engelse actueel is. Elke taal vermenigvuldigt het onderhoud, en het komt altijd midden in een deadline boven.\n\nMet MagicCV is vertalen geen documentonderhoud meer. Elke consultant heeft één masterprofiel als bron van waarheid. Als een bid een andere taal vereist, kies je die bij export en genereert MagicCV het cv in die taal, in je merksjabloon, met de lay-out intact. Werk het profiel één keer bij en genereer elke taal op aanvraag opnieuw - niets loopt uiteen, want er zijn geen parallelle kopieën om uiteen te lopen.",
    steps: [
      {
        title: "Houd één masterprofiel aan, geen profiel per taal",
        body: "De ervaring, vaardigheden en certificeringen van elke consultant leven in één gestructureerd profiel. Dat is het enige dat iemand onderhoudt - taalversies zijn outputs, geen documenten met een eigen leven.",
        screenshotAlt: "Masterprofiel van een consultant met gestructureerde ervaringsvermeldingen en een taalkiezer voor export",
      },
      {
        title: "Kies de talen die deze bid vereist",
        body: "Selecteer Frans voor de EU-aanbesteding, Duits voor de klant in München, of meerdere tegelijk voor een meertalig beoordelingspanel. De keuze gebeurt bij export - er hoeft geen vooraf vertaald bestand te bestaan.",
        screenshotAlt: "Taalselectiedialoog met Frans en Duits aangevinkt voor een grensoverschrijdende proposal",
      },
      {
        title: "Beoordeel de vertaling als een bidmanager, niet als een taalkundige",
        body: "Het gegenereerde cv behoudt je sjabloon en lay-out, dus de controle gaat over terminologie, niet over opmaak. Corrigeer een functietitel of een sectorterm door met de editor te chatten en de wijziging wordt ter plekke toegepast.",
        screenshotAlt: "Frans cv in merksjabloon met een chatpaneel dat de vertaling van een functietitel corrigeert",
      },
      {
        title: "Exporteer on-brand cv's in elke geselecteerde taal",
        body: "Elke taal exporteert als pixelconsistente PDF of Word-bestand in het sjabloon van je bureau. Het Franse pakket en het Engelse pakket zien eruit alsof hetzelfde bureau ze produceerde - want hetzelfde systeem deed dat ook.",
        screenshotAlt: "Engelse en Franse versies van hetzelfde consultant-cv naast elkaar geëxporteerd in identieke lay-out",
      },
    ],
    outcome: "Voorheen: een week bureaudoorlooptijd of een avond repareren wat een generieke vertaler met de lay-out deed - herhaald bij elke profielwijziging. Nu: elke taalversie is minuten weg en altijd gegenereerd vanuit actuele data. Grensoverschrijdende bids dragen geen vertaalbelasting meer.",
    outcomeStats: [],
    faqs: [
      {
        question: "In welke talen kunnen we cv's genereren?",
        answer:
          "Engels, Duits, Frans, Nederlands en Spaans worden vandaag het meest gebruikt, en MagicCV kan cv's ook naar andere talen vertalen - de lay-out en het sjabloon houden stand, ongeacht de taal. Lopen je bids in een specifieke taal, test die dan op het Free-abonnement voordat je erop vertrouwt.",
      },
      {
        question: "Blijven vertaalde cv's synchroon als het profiel van een consultant verandert?",
        answer:
          "Ja, want vertalingen zijn geen opgeslagen documenten - ze worden op aanvraag gegenereerd vanuit het actuele masterprofiel. Werk het profiel één keer bij, genereer elke taal opnieuw, en het nieuwe project of de nieuwe certificering verschijnt overal. Er is geen tweede kopie om te vergeten.",
      },
      {
        question: "Breekt vertaling de lay-out of het merksjabloon?",
        answer:
          "Nee. MagicCV rendert de vertaalde inhoud in hetzelfde merksjabloon en vangt op dat Duits langer loopt dan Engels zonder de pagina te slopen. Wat je beoordeelt is een afgewerkt, on-brand cv, geen tekstdump om opnieuw op te maken.",
      },
      {
        question: "Hoe nauwkeurig is de vertaling voor technische functietitels en sectortermen?",
        answer:
          "Sterk, maar beoordeel het zoals alles wat naar de klant gaat. Cv-taal is een overzichtelijk domein - rollen, projecten, vaardigheden - en de AI gaat er goed mee om. Bureauspecifieke terminologie corrigeer je één keer in chat tijdens de controle; een scan van vijf minuten door een collega die de taal spreekt blijft goede praktijk bij aanbestedingen waar veel van afhangt.",
      },
      {
        question: "Telt elke taalversie als een apart cv voor ons abonnement?",
        answer:
          "Ja - elk gegenereerd cv telt mee voor het tegoed: 30 cv's op Free, 600 op Pro ($50/maand), onbeperkt op Enterprise. Een pakket van 6 personen in twee talen is 12 cv's, wat Pro comfortabel opvangt binnen een normale bidpipeline.",
      },
      {
        question: "Waar worden cv-data verwerkt? Onze klantcontracten vereisen EU-verwerking.",
        answer:
          "MagicCV draait met EU-dataresidentie en is AVG-first by design. Consultantdata wordt binnen die opzet verwerkt om jouw cv's te genereren, inclusief vertalingen. Enterprise voegt SSO, auditlogs en een verwerkersovereenkomst toe voor bureaus waarvan de klantcontracten het papierwerk vereisen.",
      },
      {
        question: "Kan één proposalpakket talen mengen?",
        answer:
          "Ja. Genereer het cv van elke consultant in de taal die de indiening vereist - of dezelfde consultant in twee talen voor een tweetalig beoordelingspanel. Alles exporteert in hetzelfde sjabloon, dus het pakket blijft visueel consistent over talen heen.",
      },
      {
        question: "Waarom niet gewoon ons vertaalbureau blijven gebruiken?",
        answer:
          "Voor juridische documenten: houd het bureau. Voor cv's breekt het bureaumodel op snelheid en synchronisatie: dagen doorlooptijd per ronde, reële kosten per document, en een vertaald bestand dat verouderd is zodra het profiel verandert. MagicCV geeft je generatie in minuten vanuit altijd actuele data, met menselijke controle waar jij die wilt.",
      },
    ],
    related: [
      { label: "Meertalige cv-generatie", href: "/features/multilingual" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Software- & IT-consultancy", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Cv vertalen - professionele cv's in elke taal",
      description:
        "Genereer nauwkeurige, professionele cv's in EN, DE, FR, NL, ES en meer - zonder overtypen of heropmaken.",
      keywords: ["meertalige cv-generator", "cv-vertaaltool consultancy"],
    },
  },
];
