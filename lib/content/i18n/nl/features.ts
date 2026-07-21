import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-naar-cv-redenering",
    h1: "De RFP valt vrijdagmiddag binnen. Maandagochtend zijn je cv's erop afgestemd.",
    sub: "MagicCV leest de briefing, haalt de winvoorwaarden eruit en werkt het cv van elke consultant daarop om - gebouwd voor bidteams die 10+ cv's per indiening op maat maken.",
    whatItDoesBody:
      "Elke bidmanager kent het ritueel. De RFP komt binnen met een bijlage van 40 pagina's, de beoordelingscriteria zitten verstopt in sectie 7, en iemand moet een dozijn consultant-cv's omvormen rond eisen waarvoor die cv's nooit geschreven zijn. Dus open je final_v3_JS_edit.docx, begin je handmatig bulletpoints te verschuiven en hoop je dat je de verplichte certificering op pagina 23 niet hebt gemist. Vermenigvuldig dat met 12 cv's en een deadline op donderdag, en het op maat maken is de taak die de week opeet.\n\nMagicCV begint bij de briefing in plaats van bij het sjabloon. Upload de RFP - het volledige document, het criteriaoverzicht of een korte samenvatting - en het haalt de vereiste vaardigheden, certificeringen en beoordelingscriteria eruit. Daarna herschrijft het het cv van elke geselecteerde consultant vanuit diens gestructureerde profiel: de projecten en ervaring die de briefing beantwoorden komen naar voren, wat niet relevant is wordt geschrapt. Elke bewering is herleidbaar naar een feit in het bronprofiel; er wordt niets verzonnen om te passen. Jij controleert, past waar nodig bij via chatgebaseerd bewerken en exporteert op je eigen sjabloon.",
    benefits: [
      {
        title: "De eisen boven tafel voordat je de voorpagina uit hebt",
        body: "Upload de RFP en MagicCV haalt de vereiste vaardigheden, verplichte certificeringen en beoordelingscriteria eruit - dezelfde lijst die een ervaren bidmanager handmatig opstelt, zonder de markeerstiftronde door de bijlage.",
        screenshotAlt: "Analysepaneel van de briefing met 9 geëxtraheerde eisen en 3 beoordelingscriteria uit een geüploade RFP-pdf van 40 pagina's",
      },
      {
        title: "Twaalf cv's op maat vanuit één briefing, geen twaalf bewerksessies",
        body: "Selecteer de consultants op de bid en MagicCV werkt elk cv om tegen de geëxtraheerde eisen - projecten herordenen, accenten verleggen en irrelevante details schrappen. Wat een avond per cv was, wordt een controleronde per cv.",
        screenshotAlt: "Batchweergave van 12 consultant-cv's, opnieuw gegenereerd tegen één RFP, elk gemarkeerd als klaar voor controle",
      },
      {
        title: "Elke zin herleidbaar, niets verzonnen",
        body: "Gegenereerde cv's herordenen en herprioriteren alleen ervaring die al in het profiel van de consultant staat. Elke bewering linkt terug naar de bron, dus je kunt elke regel verdedigen tegenover een beoordelingspanel.",
        screenshotAlt: "Gegenereerd cv met een gemarkeerde bewering en de bijbehorende bronvermelding in het profiel van de consultant",
      },
      {
        title: "Een mens in de loop wanneer je dat wilt",
        body: "Zet de conservatieve niet-genereren-modus aan en MagicCV markeert de relevante ervaring voor jouw beoordeling in plaats van het cv direct te schrijven. Of genereer eerst en stel de formulering bij via chat voordat er iets de deur uitgaat.",
        screenshotAlt: "Schakelaar voor conservatieve modus met gemarkeerde ervaringssuggesties in afwachting van goedkeuring",
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
          "Nee. De RFP-naar-cv-redenering herprioriteert en herordent alleen echte ervaring uit het bronprofiel van de consultant. Elke bewering in een gegenereerd cv is herleidbaar naar dat profiel - staat een project niet in het profiel, dan verschijnt het niet in het cv.",
      },
      {
        question: "Wat upload ik - de volledige RFP of een samenvatting?",
        answer:
          "Wat je hebt. Een volledige RFP met bijlagen, een overzicht van beoordelingscriteria of drie alinea's geplakt uit de e-mail van de klant werken allemaal. MagicCV haalt de eisen uit het document dat je aanlevert; meer detail betekent simpelweg een scherpere match.",
      },
      {
        question: "Hoe lang duurt het om een volledig teampakket voor één bid op maat te maken?",
        answer:
          "De extractie draait in minuten, en elk cv wordt op aanvraag opnieuw gegenereerd vanuit het profiel van de consultant. Voor een typische indiening met 10-12 personen verschuift het werk van een dag handmatig bewerken naar een controleronde - elk cv lezen en waar nodig de formulering bijstellen via chat.",
      },
      {
        question: "Kan iemand de output controleren voordat die naar de klant gaat?",
        answer:
          "Ja, en dat raden we aan. Gebruik chatgebaseerd bewerken om elke sectie aan te passen, of zet de conservatieve niet-genereren-modus aan zodat MagicCV relevante ervaring ter goedkeuring voorlegt in plaats van het cv automatisch te schrijven. Jij bepaalt hoeveel autonomie de AI krijgt.",
      },
      {
        question: "Komen op maat gemaakte cv's eruit in ons sjabloon?",
        answer:
          "Ja. Het op maat maken verandert de inhoud; je merksjabloon bepaalt de presentatie. Elk gegenereerd cv exporteert als pixelconsistente PDF of Word-bestand in je huisstijl, of in een klantspecifiek sjabloon als de aanbesteding dat vereist.",
      },
      {
        question: "Hoe verschilt dit van een cv en een RFP in ChatGPT plakken?",
        answer:
          "Een algemene chatbot heeft geen geheugen van je team en geen vangrails - die verzint met plezier een certificering die bij de briefing past. MagicCV werkt vanuit gestructureerde profielen, houdt elke bewering herleidbaar naar de bron, past bij export je sjabloon toe en doet het voor 12 consultants tegelijk in plaats van één plaksessie per keer.",
      },
      {
        question: "Wat gebeurt er met de RFP's en cv-data die we uploaden?",
        answer:
          "MagicCV is AVG-by-design gebouwd met EU-dataresidentie, en Enterprise-abonnementen bevatten een verwerkersovereenkomst en auditlogs. Je briefings en profielen blijven jouw data. Het Trust Center beschrijft gegevensverwerking, bewaartermijnen en verwerking in detail.",
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
    h1: "Nooit meer een off-brand cv versturen.",
    sub: "Stel je sjabloon één keer in en elk consultant-cv exporteert als pixelconsistente PDF of Word-bestand - geen donderdagavond meer herformatteren voor een indiening.",
    whatItDoesBody:
      "Vraag een proposalmanager hoe het cv-pakket eruitzag voor de laatste deadline: drie consultants nog op het sjabloon uit 2019, één partner die een persoonlijke versie met eigen lettertypen bijhoudt, en het cv van een contractor in Calibri terwijl de merkgids anders voorschrijft. Dat rechttrekken betekent 12 documenten handmatig herformatteren, de avond voor de indiening - en de klant ziet alsnog de ene pagina waar het logo 5 mm te laag staat.\n\nBij MagicCV is presentatie gescheiden van inhoud. Je definieert het sjabloon één keer - lettertypen, kleuren, logoplaatsing, sectie-indeling - en elk cv dat vanuit een consultantprofiel wordt gegenereerd, erft het automatisch. Exports komen eruit als indieningsklare PDF- of Word-bestanden, tot op de pixel identiek over het hele pakket. Vereist een klant of een overheidsaanbesteding een eigen format, dan wissel je voor die bid van sjabloon zonder de onderliggende profieldata aan te raken, en wissel je daarna weer terug.",
    benefits: [
      {
        title: "Eén sjabloon, nul afwijking",
        body: "Definieer de visuele identiteit van je bureau één keer en elk cv erft die bij export. De persoonlijke versie van de partner, de lay-out uit 2019, het contractor-cv in het verkeerde lettertype - allemaal vervangen door één bron van opmaakwaarheid.",
        screenshotAlt: "Merksjablooneditor met lettertype-, kleur- en logo-instellingen toegepast op een live cv-voorbeeld",
      },
      {
        title: "Klant- en aanbestedingsformats zonder iets opnieuw op te bouwen",
        body: "Houd je huisstijl als standaard en voeg klantspecifieke of door de aanbesteding verplichte sjablonen ernaast toe. Een pakket van 12 personen herformatteren voor een overheidsraamovereenkomst wordt een sjabloonwissel, geen week knippen en plakken.",
        screenshotAlt: "Sjabloonkiezer met een huisstijlsjabloon naast een door de klant verplicht aanbestedingsformat voor dezelfde consultant",
      },
      {
        title: "Indieningsklare PDF en Word, vanuit dezelfde bron",
        body: "Exporteer elk cv of volledig teampakket naar PDF of DOCX. Beide komen uit hetzelfde sjabloonsysteem, dus het Word-bestand dat een klant wil bewerken komt overeen met de PDF die je hebt ingediend.",
        screenshotAlt: "Exportdialoog met PDF- en Word-opties voor een proposalpakket met 8 consultants",
      },
      {
        title: "Eén keer rebranden, elk cv bijgewerkt",
        body: "Inhoud leeft in profielen; presentatie leeft in het sjabloon. Verander het logo of het kleurenpalet na een rebranding en elke toekomstige export - over 200 profielen heen - neemt het direct over, zonder iets na te jagen.",
        screenshotAlt: "Bijgewerkte merkkleuren die doorwerken in een raster van consultant-cv-voorbeelden",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Kunnen we ons bestaande Word-sjabloon behouden?",
        answer:
          "Ja - bouw je huidige lay-out na in het sjabloonsysteem van MagicCV, inclusief lettertypen, kleuren, logoplaatsing en sectievolgorde. Vanaf dat moment exporteert elk cv automatisch in dat format, in plaats van afhankelijk te zijn van wie het document als laatste opmaakte.",
      },
      {
        question: "Kunnen we een ander sjabloon gebruiken voor een specifieke klant of aanbesteding?",
        answer:
          "Ja. Je huisstijl blijft de standaard, en je voegt klant- of aanbestedingsspecifieke sjablonen ernaast toe. Een volledig cv-pakket omzetten naar een verplicht format is een sjabloonkeuze, geen handmatige verbouwing - de profieldata eronder verandert nooit.",
      },
      {
        question: "Welke exportformaten worden ondersteund?",
        answer:
          "PDF en Word (DOCX), beide gegenereerd vanuit hetzelfde sjabloonsysteem. De Word-versie komt overeen met de PDF, dus je kunt de een indienen en de ander geven aan een klant die per se wil bewerken.",
      },
      {
        question: "Kunnen consultants de opmaak breken als ze hun cv bijwerken?",
        answer:
          "Nee. Consultants werken de inhoud van hun profiel bij - projecten, vaardigheden, certificeringen - terwijl het sjabloon de presentatie bepaalt. Er is geen document dat ze kunnen herformatteren, dus het pakket blijft consistent, ongeacht wie wat heeft bewerkt.",
      },
      {
        question: "Wat gebeurt er als we rebranden?",
        answer:
          "Werk het sjabloon één keer bij - nieuw logo, kleuren, lettertypen - en elk cv dat vanaf dat moment wordt geëxporteerd, gebruikt de nieuwe identiteit. Je slaat de gebruikelijke rebrandingopruiming over waarbij je maandenlang oude-sjabloon-cv's uit SharePoint-mappen vist.",
      },
      {
        question: "Is sjabloongebaseerde export op elk abonnement beschikbaar?",
        answer:
          "Ja. On-brand PDF- en Word-export werkt op Free, Pro en Enterprise. De abonnementen verschillen in schaal: Free dekt 10 profielen en 30 cv's in totaal, Pro dekt 200 profielen en 600 cv's per maand, en Enterprise is onbeperkt.",
      },
      {
        question: "Behouden vertaalde of geanonimiseerde cv's hetzelfde sjabloon?",
        answer:
          "Ja. Vertaling en anonimisering veranderen alleen de inhoudslaag - het geëxporteerde bestand behoudt je lettertypen, lay-out en huisstijl. Een blind cv voor een aanbesteding ziet er exact uit als je standaard-cv, minus de identificerende gegevens.",
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
    h1: "Blinde cv's in één klik, niet in één avond handmatig lakken.",
    sub: "Anonimisering met één klik voor openbare aanbestedingen, blinde wervingsprocessen en competitieve bids - dezelfde regels toegepast op elk cv, elke keer.",
    whatItDoesBody:
      "De aanbesteding schrijft voor dat kandidaat-cv's geanonimiseerd moeten zijn. Dus werkt iemand de avond voor de indiening 14 documenten door en verwijdert handmatig namen, foto's en werkgeververwijzingen - en mist de achternaam van de consultant in een paginavoettekst, of de klantnaam diep in een projectbeschrijving op pagina 3. Eén gemist veld kan een indiening ongeldig maken in een blinde beoordeling, en handmatig lakken geeft je 14 kansen om er één te missen.\n\nMagicCV maakt van anonimisering een eigenschap van de export, geen taak. Zet de schakelaar om op elk cv of volledig teampakket en identificerende gegevens worden verwijderd volgens regels die jij instelt - namen, foto's en de andere velden die jouw proces als identificerend beschouwt. Dezelfde regels gelden voor elke consultant, elke keer, dus een pakket van 14 personen is even consistent als één cv. Daaronder is MagicCV AVG-by-design met EU-dataresidentie; het Trust Center beschrijft het volledige compliancebeeld.",
    benefits: [
      {
        title: "Van een avond lakken naar één schakelaar",
        body: "Zet anonimisering aan bij export en namen, foto's en andere identificerende gegevens verdwijnen - geen handmatige zoek-en-verwijderronde, geen voettekst of koptekst die erdoorheen glipt, geen tweede paar ogen nodig alleen om missers te vangen.",
        screenshotAlt: "Anonimiseringsschakelaar met een voor/na-vergelijking van hetzelfde consultant-cv, naam en foto verwijderd",
      },
      {
        title: "Jouw regels bepalen wat als identificerend geldt",
        body: "Blinde wervingsprocessen en openbare aanbestedingen verschillen van mening over wat verborgen moet worden - de een wil werkgeversnamen weg, de ander alleen namen en foto's. Configureer welke velden worden verwijderd, zodat elke indiening aan de specifieke eis voldoet.",
        screenshotAlt: "Paneel met anonimiseringsregels met schakelaars per veld voor naam, foto, werkgeversnamen en contactgegevens",
      },
      {
        title: "Volledige teampakketten, identieke behandeling",
        body: "Anonimiseer een pakket van 14 consultants voor een openbare aanbesteding en elk cv volgt dezelfde regels. In een blinde beoordeling is consistentie de eis - één afwijkend gelakt cv kan een kandidaat identificeren door wat er ontbreekt.",
        screenshotAlt: "Geanonimiseerd cv-pakket voor een aanbesteding met 14 consultants, alle profielen tonen rolcodes in plaats van namen",
      },
      {
        title: "AVG by design als fundament",
        body: "Anonimisering rust op AVG-by-design gegevensverwerking met EU-dataresidentie, auditlogs en een verwerkersovereenkomst op Enterprise. Blinde cv's zijn één output van een systeem dat gebouwd is om zorgvuldig met persoonsgegevens om te gaan, geen pleister op een systeem dat dat niet is.",
        screenshotAlt: "Trust Center-overzicht met EU-dataresidentie en AVG-toezeggingen voor gegevensverwerking",
      },
    ],
    connectsTo: [
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Wat wordt er precies verwijderd als een cv wordt geanonimiseerd?",
        answer:
          "Namen, foto's en alle andere velden die jij als identificerend configureert - contactgegevens, werkgeversnamen, klantnamen in projectbeschrijvingen. Jij beheert de regelset, dus de output past bij wat jouw aanbesteding of blinde wervingsproces daadwerkelijk vereist.",
      },
      {
        question: "Gebruikt een geanonimiseerd cv nog steeds ons sjabloon?",
        answer:
          "Ja. Anonimisering verwijdert inhoud; het sjabloon bepaalt de presentatie. Een blind cv exporteert in dezelfde lettertypen, lay-out en huisstijl als je standaard-cv, dus het pakket blijft eruitzien als jouw bureau - alleen zonder de identificerende gegevens.",
      },
      {
        question: "Kunnen we de herleidbare versie terugkrijgen na de blinde beoordeling?",
        answer:
          "Ja. Anonimisering wordt toegepast bij export en verandert het onderliggende profiel nooit. Zodra de beoordelingsfase voorbij is, exporteer je het cv van dezelfde consultant met anonimisering uit en heb je de volledige versie - geen aparte documenten om bij te houden.",
      },
      {
        question: "Voldoet MagicCV aan de AVG?",
        answer:
          "MagicCV is AVG-by-design gebouwd met EU-dataresidentie, en Enterprise-abonnementen voegen een verwerkersovereenkomst en auditlogs toe. Geanonimiseerde exports zijn daar één onderdeel van; het Trust Center beschrijft dataresidentie, bewaartermijnen en verwerking volledig.",
      },
      {
        question: "Is MagicCV SOC 2-gecertificeerd?",
        answer:
          "De SOC 2-certificering is in uitvoering - we claimen niets voordat die is afgerond. Vandaag biedt MagicCV AVG-by-design gegevensverwerking, EU-dataresidentie, SSO en een verwerkersovereenkomst op Enterprise, en auditlogs. Het Trust Center toont de actuele status.",
      },
      {
        question: "Werkt dit zowel voor blinde werving als voor aanbestedingen?",
        answer:
          "Ja. Dezelfde één-klik-anonimisering dekt blinde wervingsscreening - verwijder namen, foto's en andere velden die vooringenomenheid kunnen voeden voordat cv's bij beoordelaars komen, en deel de herleidbare versie zodra er een shortlist is afgesproken.",
      },
      {
        question: "Hoe weten we dat elk cv in een pakket op dezelfde manier is geanonimiseerd?",
        answer:
          "Omdat de regels door het systeem worden toegepast, niet door degene die elk document bewerkte. Elk cv in het pakket gaat bij export door dezelfde geconfigureerde regelset, dus er is geen variatie per document om de avond voor een deadline te controleren.",
      },
    ],
    related: [
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "CV-anonimisering - anoniem cv met één klik",
      description:
        "Anonieme cv's voor aanbestedingen en onbevooroordeelde beoordeling met één klik - consistent voor het hele team, AVG by design.",
      keywords: ["anoniem cv", "geanonimiseerd cv", "cv anonimiseren"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Meertaligheid & vertaling",
    h1: "Eén masterprofiel. Elke taal waarin je klanten aanbesteden.",
    sub: "Vertaal consultant-cv's naar elke taal met behoud van lay-out en huisstijl - gebouwd voor grensoverschrijdende bids en meertalige beoordelingspanels.",
    whatItDoesBody:
      "Een Duitse aanbesteding onder een raamovereenkomst vraagt om cv's auf Deutsch, uiterlijk donderdag. Je masters zijn in het Engels, de laatste bureauvertaling duurde drie dagen en kwam terug als platte tekst die het sjabloon brak, en de Duitse versies die iemand vorig jaar maakte zijn stilletjes verouderd - de twee nieuwste projecten van de consultant zijn er nooit in beland. Nu zit je onder deadlinedruk twee documenten per persoon te vergelijken, in een taal die de helft van het bidteam niet leest.\n\nMagicCV houdt één masterprofiel per consultant aan en genereert de taal bij export. Kies de taal die de bid vereist en het cv komt er vertaald uit, met lay-out, lettertypen en huisstijl onaangetast - hetzelfde sjabloon, dezelfde structuur, in het Frans, Duits, Nederlands of welke taal het beoordelingspanel ook leest. Er zijn geen parallelle documenten om synchroon te houden: werk het profiel één keer bij en elke taalversie neemt het over. Formuleringen kun je bijstellen via chatgebaseerd bewerken voordat er iets wordt ingediend.",
    benefits: [
      {
        title: "Geen parallelle versies om synchroon te houden",
        body: "Het masterprofiel is de enige bron van waarheid. Voeg een nieuw project één keer toe en de Engelse, Duitse en Franse cv's dragen het allemaal bij de volgende export - het stille uiteenlopen van taalversies kan simpelweg niet gebeuren.",
        screenshotAlt: "Eén consultantprofiel met exportknoppen voor Engelse, Duitse en Franse cv-versies",
      },
      {
        title: "Lay-out en huisstijl overleven de vertaling",
        body: "Vertaling gebeurt binnen het sjabloon, niet in een tekstbestand dat iemand achteraf opnieuw laat doorlopen. Duits loopt ongeveer 20% langer dan Engels, en de lay-out vangt dat op - je lettertypen, logo en sectiestructuur komen intact door.",
        screenshotAlt: "Engelse en Duitse cv-exports van dezelfde consultant naast elkaar, identieke lay-out in beide",
      },
      {
        title: "Drie dagen bureaudoorlooptijd wordt een exportinstelling",
        body: "Als de aanbesteding een taal vereist waar je niet op had gerekend, kies je die bij export in plaats van een vertaalbureau te briefen en te wachten. De donderdagdeadline hangt niet langer af van andermans wachtrij.",
        screenshotAlt: "Taalkiezer bij cv-export met een vertaalde PDF in aanmaak voor een grensoverschrijdende aanbesteding",
      },
      {
        title: "Gebouwd voor grensoverschrijdende inkoop",
        body: "Meertalige beoordelingspanels en grensoverschrijdende raamovereenkomsten zijn de normale gang van zaken voor consultancy- en IT-dienstverleners die in Europa bieden. Combineer vertaling met anonimisering en je sjabloon voor een indieningsklaar pakket in de taal van het panel.",
        screenshotAlt: "Meertalig cv-pakket voor een grensoverschrijdende aanbesteding, zes consultants geëxporteerd in twee talen",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Anonimisering & AVG", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Naar welke talen kan MagicCV cv's vertalen?",
        answer:
          "Elke taal die een bid vereist - de belangrijkste Europese zakentalen zoals Engels, Duits, Frans, Nederlands, Spaans en Zweeds komen bij onze klanten het meest voor, maar de vertaling is niet beperkt tot een vaste lijst. Lay-out en huisstijl blijven behouden, ongeacht de taal.",
      },
      {
        question: "Moeten we per taal een apart profiel bijhouden?",
        answer:
          "Nee. Elke consultant heeft één masterprofiel, en taalversies worden gegenereerd bij export. Werk het profiel één keer bij - een nieuw project, een nieuwe certificering - en elke taalversie bevat het bij de volgende export.",
      },
      {
        question: "Breekt vertaling onze cv-lay-out?",
        answer:
          "Nee. Vertaling gebeurt binnen je merksjabloon, dus lettertypen, logoplaatsing en sectiestructuur blijven overeind. Talen die langer lopen dan Engels, zoals Duits of Frans, worden opgevangen door de lay-out in plaats van uit te monden in een herformatteerklus.",
      },
      {
        question: "Kan een moedertaalspreker de vertaling controleren voordat we indienen?",
        answer:
          "Ja, en voor indieningen waar veel van afhangt raden we dat aan. Elke sectie kan via chatgebaseerd bewerken worden bijgesteld voor export, dus een collega die de taal spreekt corrigeert een term in minuten in plaats van het document opnieuw te vertalen.",
      },
      {
        question: "Hoe gaat het om met technische en domeinspecifieke terminologie?",
        answer:
          "De AI vertaalt in context, wat de meeste consultancy-, engineering- en IT-terminologie goed afdekt. Voor niche-vaktermen of vocabulaire waar de klant de voorkeur aan geeft, controleer je de export en corrigeer je via chat - de fix kost minuten, geen extra bureauronde.",
      },
      {
        question: "Moet het masterprofiel in het Engels zijn?",
        answer:
          "Nee. Importeer cv's in de taal waarin ze geschreven zijn - MagicCV parseert ze hoe dan ook naar gestructureerde profielen, en je exporteert naar welke taal elke bid ook vereist.",
      },
      {
        question: "Is vertaling inbegrepen in de prijs, of wordt die apart gefactureerd?",
        answer:
          "Inbegrepen. Vertaalde exports tellen mee voor het cv-tegoed van je abonnement, net als elke andere export - 30 cv's in totaal op Free, 600 per maand op Pro, onbeperkt op Enterprise. Er is geen tarief per woord of per taal.",
      },
      {
        question: "Kunnen we hetzelfde cv vertalen en anonimiseren?",
        answer:
          "Ja. Vertaling, anonimisering en je merksjabloon worden allemaal toegepast bij export, dus één klik levert een blind Duits cv in je huisstijl op voor een grensoverschrijdende aanbesteding die beide vereist.",
      },
    ],
    related: [
      { label: "Vertaal cv's naar elke taal", href: "/use-cases/translate-cvs" },
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Meertalige cv's - cv vertalen zonder opnieuw opmaken",
      description:
        "Genereer professionele, on-brand cv's in EN, DE, FR, NL, ES en meer, vanuit één masterprofiel.",
      keywords: ["meertalige cv-tool", "cv in meerdere talen"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Gecentraliseerde profielen & skills-intelligentie",
    h1: "Van cv's verspreid over SharePoint naar één doorzoekbare cv-database.",
    sub: "Een doorzoekbare cv-database en vaardighedenmatrix voor je hele bench: importeer de cv's die je al hebt, houd één gestructureerd profiel per persoon aan en genereer elke output daaruit.",
    whatItDoesBody:
      "Op dit moment leeft het antwoord op \"wie heeft farma-ervaring en spreekt Frans?\" in een SharePoint-map vol bestanden met namen als final_v3_JS_edit.docx, een bezettingsoverzicht in Excel dat in maart nog klopte, en het geheugen van degene die het vorige vergelijkbare project bemenste. Het achterhalen betekent documenten één voor één openen of de hele praktijk mailen - en met een 48-uursdeadline maak je een shortlist van de cv's die je kunt vinden, niet van de consultants die je daadwerkelijk hebt.\n\nMagicCV vervangt de map door een gestructureerde database: één profiel per persoon, automatisch geparseerd uit de Word-, PDF- of LinkedIn-cv's die je al hebt. Vaardigheden, sectoren, talen en certificeringen worden doorzoekbare velden in plaats van proza dat vastzit in documenten. Doorzoek de hele bench als een vaardighedenmatrix, open een profiel en genereer wat de bid nodig heeft - op maat, vertaald, geanonimiseerd, op jouw sjabloon. HRIS-verrijking (Personio, BambooHR, HiBob) staat op de roadmap om handmatig onderhoud verder terug te dringen.",
    benefits: [
      {
        title: "Gestructureerde data in plaats van 200 Word-bestanden",
        body: "De ervaring, vaardigheden, certificeringen en talen van elke consultant leven als gestructureerde velden, niet als proza opgesloten in een document. Hetzelfde profiel voedt zoeken, op maat maken, vertalen en exporteren - werk het één keer bij en elke output neemt het over.",
        screenshotAlt: "Gestructureerd consultantprofiel met aparte secties voor projecten, vaardigheden, certificeringen en talen",
      },
      {
        title: "Importeer de cv's die je al hebt",
        body: "Upload Word- en PDF-bestanden rechtstreeks vanuit SharePoint, of haal ze uit LinkedIn - MagicCV parseert elk bestand automatisch naar een gestructureerd profiel. Een bench van 50 personen migreren is een uploadsessie, geen overtypproject.",
        screenshotAlt: "Bulkimportscherm dat een batch Word- en PDF-cv's parseert naar gestructureerde profielen",
      },
      {
        title: "Beantwoord 'wie kent Kubernetes?' in seconden",
        body: "Doorzoek de hele bench op vaardigheid, certificering, sector of taal en krijg direct een shortlist. Een briefing bemensen hangt niet langer af van het Excel-overzicht uit maart of van de praktijk mailen en tot maandag wachten.",
        screenshotAlt: "Vaardighedenmatrix-zoekopdracht gefilterd op consultants met AWS-certificering en Duits, met 6 matches",
      },
      {
        title: "Profielen die actueel blijven zonder de vrijdagse najaagronde",
        body: "Consultants werken hun eigen profiel op één plek bij, en AI-ondersteund bewerken maakt er een taak van vijf minuten van in plaats van een documentopmaaksessie. De versie die je voor een bid pakt is de actuele - niet de kopie die iemand voor het laatst in 2023 aanraakte.",
        screenshotAlt: "Profielupdateweergave waarin AI-chat een recent afgerond project toevoegt aan het dossier van een consultant",
      },
    ],
    connectsTo: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Wat gebeurt er met de cv's die we al in SharePoint hebben?",
        answer:
          "Die upload je. MagicCV parseert Word- en PDF-bestanden - en LinkedIn-profielen - automatisch naar gestructureerde profielen, één per persoon. Een bench van 50 personen migreert doorgaans in een uploadsessie in plaats van een handmatig overtypproject, en de oude map kan met pensioen.",
      },
      {
        question: "Hoe houden we 200 consultant-cv's actueel zonder mensen na te jagen?",
        answer:
          "Op twee manieren. Consultants werken hun eigen profiel op één plek bij, met AI-ondersteund bewerken dat er een taak van vijf minuten van maakt. En omdat outputs vanuit het profiel worden gegenereerd, zijn er geen losse documentkopieën die verouderen - de databaseversie is de enige versie.",
      },
      {
        question: "Kunnen we alle consultants doorzoeken op vaardigheid?",
        answer:
          "Ja - dat is het punt van een cv-database ten opzichte van een map. Elk profiel is gestructureerde data, dus je filtert de hele bench op vaardigheid, certificering, sector of taal en hebt in seconden een bezettingsshortlist in plaats van bestanden één voor één te openen.",
      },
      {
        question: "Hoe verschilt dit van ons ATS of HRIS?",
        answer:
          "Een ATS volgt sollicitanten door het wervingsproces; een HRIS beheert personeelsdossiers. Geen van beide produceert een klantklaar cv. MagicCV is cv-managementsoftware voor de mensen die je al in dienst hebt: het houdt hun profielen gestructureerd en doorzoekbaar en genereert vervolgens op maat gemaakte, on-brand cv's voor bids. HRIS-verrijking (Personio, BambooHR, HiBob) staat op de roadmap, zodat gegevens binnenstromen in plaats van overgetypt worden.",
      },
      {
        question: "Hoeveel profielen kunnen we op elk abonnement opslaan?",
        answer:
          "Free dekt 10 profielen en 30 cv's in totaal - genoeg om met één team te proberen. Pro ($50/maand) dekt 200 profielen en 600 cv's per maand. Enterprise is onbeperkt, met SSO en een verwerkersovereenkomst inbegrepen. Je kunt op Free starten en upgraden zodra de bench eruit groeit.",
      },
      {
        question: "Wie kan profielen zien en bewerken?",
        answer:
          "Profielen worden centraal beheerd, dus bid- en resourcingteams werken vanuit dezelfde database terwijl consultants hun eigen gegevens actueel houden. Enterprise voegt SSO toe voor toegangsbeheer en auditlogs om bij te houden wie wat heeft gewijzigd.",
      },
      {
        question: "Is een gecentraliseerde cv-database AVG-conform?",
        answer:
          "Centraliseren helpt juist: persoonsgegevens staan in één beheerd systeem in plaats van verspreid over inboxen en gedeelde schijven waar niemand een verwijderverzoek kan beantwoorden. MagicCV is AVG-by-design met EU-dataresidentie, en het Trust Center beschrijft bewaartermijnen en verwerking in detail.",
      },
      {
        question: "Welke outputs kunnen we vanuit een profiel genereren?",
        answer:
          "Elk cv dat de bid vereist: op maat gemaakt tegen een RFP, vertaald naar de taal van de aanbesteding, geanonimiseerd voor blinde beoordeling, altijd geëxporteerd op je merksjabloon als PDF of Word. Eén profiel is de bron voor dat alles - geen documentkopieën per output.",
      },
    ],
    related: [
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Voor HR / People Ops-teams", href: "/solutions/hr" },
      { label: "Voor recruitmentteams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV-database & vaardighedenmatrix-software",
      description:
        "Een doorzoekbare cv-database en vaardighedenmatrix in één: importeer cv's, zoek je hele team op skills en genereer merkconforme cv's op aanvraag.",
      keywords: ["cv database", "vaardighedenmatrix", "skills matrix", "kandidatendatabase"],
    },
  },
];
