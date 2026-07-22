import type { IndustryPage } from "../../types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "IT-dienstverleners / softwareconsultancies die bieden op klant- en raamwerkopdrachten; sterk gericht op skills-matrix-cv's.",
    angle:
      "De RFP-bijlage wil een vaardighedenmatrix: jaren per technologie, certificeringen met vervaldatums, projectreferenties in het tabelformat van de klant. De cv's van je consultants staan in SharePoint in tien verschillende Word-lay-outs, en de laatst geverifieerde versie van de helft ervan stamt uit de vorige bid. Dus besteedt de delivery lead het weekend voor de deadline aan knippen en plakken uit final_v3-bestanden en aan consultants appen of hun AWS-certificeringen nog geldig zijn.\n\nMagicCV vervangt dat geren door één gestructureerd profiel per consultant. Importeer de Word- en PDF-cv's die je vandaag hebt, en vaardigheden, certificeringen en projecthistorie worden doorzoekbare velden in plaats van proza. Landt er een bid, upload dan de RFP: de AI leest de eisen, vormt elk cv om rond de stack waar de klant om vroeg en exporteert in je huissjabloon of het verplichte format van het raamwerk - in elke taal die de aanbesteding vereist.",
    h1: "Elke RFP vraagt om een andere vaardighedenmatrix. Beantwoord ze allemaal vanuit één profiel.",
    sub: "Doorzoek je bench op stack en certificering en genereer vervolgens RFP-klare consultant-cv's in exact het format dat elk raamwerk of elke aanbesteding eist.",
    keyPoints: [
      {
        title: "Vind de consultants die echt bij de stack passen",
        body: "Filter de hele bench op vaardigheden, jaren ervaring, certificeringen en talen in één zoekopdracht. In plaats van drie deliverymanagers te vragen wie Kubernetes kent, heb je de shortlist in seconden - inclusief de consultant die vorig kwartaal begon en nooit in de oude spreadsheet is beland.",
        screenshotAlt: "Teamzoekopdracht gefilterd op Kubernetes + AWS + Duits, met 6 passende consultants met certificeringsbadges",
      },
      {
        title: "Cv's omgevormd rond de daadwerkelijke eisen van de RFP",
        body: "Upload de RFP of plak de eisen, en de AI herordent het cv van elke consultant zodat de relevante projecten, stack-ervaring en certificeringen vooropstaan. Het werkt alleen met echte profieldata - er wordt niets verzonnen om een gat te vullen.",
        screenshotAlt: "RFP-eisenpaneel naast een consultant-cv met passende projecten en certificeringen bovenaan geplaatst",
      },
      {
        title: "Eén profiel, elk raamwerkformat",
        body: "Raamovereenkomsten en klantaanbestedingen schrijven elk hun eigen cv-structuur voor. Stel het sjabloon één keer in, en elke export landt pixelconsistent in Word of PDF - niet langer 12 cv's handmatig herbouwen omdat deze klant tabellen wil in plaats van bullets.",
        screenshotAlt: "Exportdialoog met het huissjabloon en twee raamwerkspecifieke cv-sjablonen voor dezelfde consultant",
      },
      {
        title: "Certificeringen die actueel zijn, niet die van vorig jaar",
        body: "Certificeringen leven als gestructureerde velden op elk profiel, één keer bijgewerkt en verwerkt in elk cv dat daarna wordt gegenereerd. Verlengingen zijn niet langer een vrijdagmiddagjacht door Slack voor elke indiening.",
        screenshotAlt: "Consultantprofiel met certificeringslijst met uitgiftedatums en actuele status",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Hoe krijgen we 80 consultant-cv's uit SharePoint en in MagicCV?",
        answer:
          "Upload ze zoals ze zijn - Word, PDF of geëxporteerde LinkedIn-profielen. MagicCV parseert elk bestand naar een gestructureerd profiel, één per persoon, zodat de gemengde map met final_v2- en final_v3-bestanden een schone, doorzoekbare database wordt. De meeste teams migreren hun hele bench in een middag.",
      },
      {
        question: "De RFP vraagt om een vaardighedenmatrix met jaren per technologie. Kan MagicCV die produceren?",
        answer:
          "Ja. Vaardigheden worden opgeslagen als gestructureerde data op elk profiel, niet begraven in proza, dus de AI kan ze afzetten tegen wat de briefing vraagt en presenteren in het format dat de aanbesteding vereist. Schrijft de klant een eigen matrixlay-out voor, dan stel je die in als sjabloon en exporteer je er rechtstreeks in.",
      },
      {
        question: "Kunnen we ons bestaande Word-cv-sjabloon behouden?",
        answer:
          "Ja. Bouw je huislay-out na als merksjabloon in MagicCV - lettertypen, kleuren, structuur - en elke export komt er exact mee overeen, in Word of PDF. Je kunt meerdere sjablonen naast elkaar aanhouden, één per raamwerk of belangrijke klant.",
      },
      {
        question: "Hoe houden we 60+ consultant-cv's actueel zonder mensen na te jagen?",
        answer:
          "Elke consultant heeft één masterprofiel, dus een update gebeurt één keer in plaats van in vijf Word-bestanden. Projecthistorie en certificeringen zijn aparte velden, waardoor direct zichtbaar is wat verouderd is. De chatgebaseerde editor maakt updates bovendien snel genoeg dat mensen ze daadwerkelijk doen.",
      },
      {
        question: "Is MagicCV een vervanging voor een ATS of HRIS?",
        answer:
          "Nee. Een ATS volgt sollicitanten en een HRIS regelt salaris en verlof - geen van beide produceert een klantklaar consultant-cv. MagicCV is de cv-managementlaag: het bevat bidklare profielen van je deliveryteam en genereert afgestemde, on-brand cv's voor RFP's en raamwerkoproepen.",
      },
      {
        question: "Kunnen cv's van onderaannemers en freelancers in dezelfde database?",
        answer:
          "Ja. Een profiel is een profiel - veel consultancies houden associates en vaste onderaannemers naast medewerkers aan, zodat een bidteam een volledige proposal kan bemensen vanuit één zoekopdracht. Met toegangsrechten bepaal je wie welke profielen ziet.",
      },
      {
        question: "Wat kost het voor een consultancy van 40 personen?",
        answer:
          "Het Pro-abonnement is $50/maand en dekt 200 profielen en 600 gegenereerde cv's, wat past bij de meeste consultancies tot enkele honderden consultants. Er is een gratis instap (10 profielen, 30 cv's) om de workflow op één echte bid te proberen, en Enterprise voegt onbeperkt gebruik, SSO en een verwerkersovereenkomst toe.",
      },
      {
        question: "Waar wordt onze consultantdata opgeslagen?",
        answer:
          "In de EU, met AVG-by-design verwerking, auditlogs en rolgebaseerde toegang. Enterprise-abonnementen voegen SSO en een verwerkersovereenkomst toe. De SOC 2-certificering is in uitvoering; het Trust Center toont de actuele status.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Voor salesteams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV voor software- & IT-consultancybureaus",
      description:
        "Match consultants op vaardigheden en tech-ervaring en genereer RFP-klare cv's - in elke taal.",
      keywords: ["cv-beheer IT-consultancy", "tech-consultant-cv voor RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Strategie- en managementconsultancies waar de geloofwaardigheid van partners en consultants deals wint.",
    angle:
      "Strategieproposals worden gewonnen op het genoemde team, en de cv's van dat team zijn meestal de zwakste pagina's van het document. De partner houdt een persoonlijke bio uit 2023 aan waar niemand aan mag komen. De engagementlijsten zijn generiek omdat de analist die het pakket om 23.00 uur samenstelde ze uit de vorige proposal trok, die ze weer uit de proposal daarvoor haalde. De klant leest vijf bio's in vijf net iets verschillende formats en trekt een conclusie over de zorgvuldigheid van het bureau.\n\nMagicCV geeft elke partner en consultant één masterprofiel - engagements, sectoren, competenties - op één plek onderhouden. Voor elke pitch leest de AI de briefing en herordent elke bio zodat de meest relevante engagements vooropstaan: het retail-turnaroundwerk voor de retail-turnaroundpitch, niet de generieke top vijf. Het hele teampakket exporteert in je merksjabloon, zodat het document waar een partner donderdagochtend zijn handtekening onder zet, oogt alsof één bureau het schreef.",
    h1: "De proposal noemt het team. Laat elk genoemd cv zijn plek verdienen.",
    sub: "Partnerbio's en consultant-cv's die de engagements naar voren brengen waar deze specifieke pitch om vraagt - in minuten samengesteld, consistent over het hele pakket.",
    keyPoints: [
      {
        title: "De juiste engagements voorop, per briefing",
        body: "Geef MagicCV de pitchbriefing en het herordent ieders engagementhistorie zodat het meest relevante werk vooraan staat - sector, probleemtype, klantomvang. De klant ziet een team dat voor hun probleem is samengesteld, geen hergebruikte credentialpagina.",
        screenshotAlt: "Consultantbio met drie retailtransformatie-engagements boven eerder werk geplaatst, met de briefingeisen ernaast",
      },
      {
        title: "Eén masterprofiel maakt een einde aan het persoonlijke-versieprobleem",
        body: "Elke partner en consultant heeft één bron van waarheid voor zijn ervaring, één keer bijgewerkt via chatgebaseerd bewerken. De partner die zijn eigen Word-versie bijhield is geen bottleneck meer, want afgestemde bio's worden gegenereerd vanuit het profiel in plaats van uit het bestand dat hij het laatst mailde.",
        screenshotAlt: "Partnerprofiel met engagementhistorie, sectortags en datum van laatste update",
      },
      {
        title: "Een pakket dat leest als één bureau",
        body: "Stel partners, principals en het deliveryteam samen tot één pitchpakket, allemaal in hetzelfde merksjabloon. Geen donderdagavond-opmaakronde meer om vijf bio's uit drie kantoren in hetzelfde document te laten thuishoren.",
        screenshotAlt: "Pitchpakket van zes personen in een consistent merksjabloon, partnerbio's eerst",
      },
      {
        title: "Sector- en competentietags doen het onthouden",
        body: "Engagements zijn getagd op sector en competentie, dus de pricingspecialist met drie supermarktklanten komt boven als de supermarktpitch binnenkomt - ook als de staffingpartner nooit met haar heeft gewerkt. Institutioneel geheugen hangt niet langer af van wie er toevallig in de kamer zit.",
        screenshotAlt: "Zoekresultaten voor pricing + levensmiddelenretail met 4 consultants gerangschikt op engagementrelevantie",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Werkt dit ook voor bio's op partnerniveau, niet alleen consultant-cv's?",
        answer:
          "Ja - een partnerbio is hetzelfde mechanisme met een ander accent. Het profiel bevat de volledige engagementhistorie; het exportsjabloon bepaalt of het rendert als een bio van één pagina of als een uitgebreid cv, en de AI stemt beide af op de pitch van dat moment.",
      },
      {
        question: "Hoe bepaalt MagicCV welke engagements naar voren komen?",
        answer:
          "Het leest de briefing - genoemde sector, probleem, scope - en rangschikt de echte engagements van de persoon ertegen. Het herordent en herformuleert; het verzint nooit werk dat niet op het profiel staat. Jij controleert voordat iets het pakket ingaat.",
      },
      {
        question: "Kunnen we klantnamen in engagementbeschrijvingen veralgemenen?",
        answer:
          "Ja. Engagements worden opgeslagen zoals je ze schreef, en de chatgebaseerde editor maakt het snel om voor een bepaalde export een discrete versie te maken (\"een top-3 Europese supermarktketen\") zonder het masterdossier aan te raken. Anonimisering met één klik is er ook voor processen die volledig blinde cv's vereisen.",
      },
      {
        question: "Hoe migreren we bio's die nu in oude proposaldecks leven?",
        answer:
          "Exporteer of plak ze in elke vorm - Word, PDF, zelfs ruwe tekst - en MagicCV parseert elk naar een gestructureerd profiel. De eerste ronde kost minuten per persoon; partners bevestigen daarna één keer hun eigen profiel in plaats van bij elke pitch een nieuwe bio goed te keuren.",
      },
      {
        question: "Kunnen we ons bestaande proposalsjabloon behouden?",
        answer:
          "Ja. Stel je merksjabloon in - typografie, lay-out, structuur - en elke bio en elk cv exporteert erin als pixelconsistente PDF of Word, klaar om in het proposaldocument te plaatsen.",
      },
      {
        question: "Hoe verschilt dit van bio's bewaren in een goed georganiseerde SharePoint?",
        answer:
          "SharePoint bewaart documenten; het kan je niet vertellen welke van 40 consultants ervaring heeft met de energietransitie, en elke afgestemde versie wordt weer een bestand om te beheren. MagicCV bewaart gestructureerde profielen waarin het kan zoeken, waarover het tegen een briefing kan redeneren en waaruit het kan exporteren - het document is een output, geen systeem van waarheid.",
      },
      {
        question: "Wat kost het voor een boetiekbureau?",
        answer:
          "Free dekt 10 profielen en 30 cv's - genoeg om er één echte pitch doorheen te draaien. Pro is $50/maand voor 200 profielen en 600 cv's, wat de meeste onafhankelijke en middelgrote bureaus dekt. Enterprise voegt SSO, een verwerkersovereenkomst en onbeperkt gebruik toe.",
      },
      {
        question: "Wie bepaalt wat er onder de naam van een partner de deur uitgaat?",
        answer:
          "Rolgebaseerde toegang scheidt wie profielen mag bewerken van wie pakketten mag genereren en exporteren, en auditlogs leggen elke wijziging vast. Partners kunnen hun afgestemde bio voor indiening controleren zonder die zelf te hoeven onderhouden.",
      },
    ],
    related: [
      { label: "RFP-naar-cv-redenering", href: "/features/rfp-to-cv" },
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Voor salesteams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV voor strategie- & managementconsultancy",
      description:
        "MagicCV redeneert over de briefing en licht per consultant de meest relevante ervaring uit - on-brand, partner-klaar.",
      keywords: ["proposal-cv's managementconsultancy", "bid-cv strategieconsultancy"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Design- / creatieve / digitale bureaus die pitchen op projecten en retainers; portfolio + teamcredentials tellen.",
    angle:
      "Het pitchdeck is prachtig. Dan komt de teamslide, en de bio's staan in zes stijlen omdat ze zijn geknipt en geplakt uit de laatste drie credentialdecks, en de nieuwe motion designer staat in geen enkele. Iemand senior herbouwt de bio's in Figma, de avond voor de pitch - alweer - want een bureau dat vakmanschap verkoopt kan geen teampagina sturen die haastig in elkaar gezet oogt, zelfs als dat zo was.\n\nMagicCV houdt één gestructureerd profiel per persoon aan - medewerkers en vaste freelancers - en rendert bio's via het eigen sjabloon van je studio: jouw lettertypen, jouw kleuren, jouw lay-out. Voor elke pitch stemt de AI af waarmee elke bio opent, passend bij de briefing, en de hele teampagina exporteert als afgewerkte PDF of Word. Het vakmanschap blijft zichtbaar; het herbouwen stopt.",
    h1: "Teampagina's die eruitzien alsof je studio ze maakte - zonder ze elke pitch opnieuw te maken.",
    sub: "Eén profiel per creatief, gerenderd in exact jouw huisstijl en afgestemd op elke briefing, zodat de teamslide niet langer de avond voor de pitch opeet.",
    keyPoints: [
      {
        title: "Jouw huisstijl, automatisch toegepast",
        body: "Stel het sjabloon van je studio één keer in - typografie, kleuren, lay-out - en elke bio exporteert er pixelconsistent naartoe. De teampagina haalt eindelijk dezelfde standaard als de rest van het deck, zonder dat een designer eraan te pas komt.",
        screenshotAlt: "Vier creatieve bio's gerenderd in het eigen sjabloon van een studio met consistente typografie en fotobehandeling",
      },
      {
        title: "Bio's afgestemd op de briefing, niet hergebruikt uit het vorige deck",
        body: "Geef MagicCV de pitchbriefing en elke bio opent met het relevante werk: de e-commerceprojecten voor de e-commercepitch, het rebrandwerk voor de rebrand. Dezelfde mensen, een scherper verhaal, geen handmatig herschrijven.",
        screenshotAlt: "Bio van een creative director met e-commerceprojecten bovenaan voor een retailpitchbriefing",
      },
      {
        title: "De hele bezetting op één plek, freelancers inbegrepen",
        body: "Importeer bio's en cv's uit Word, PDF of LinkedIn en elke persoon wordt een gestructureerd, doorzoekbaar profiel. Als een pitch een UX-researcher met fintech-ervaring nodig heeft, zoek je - in plaats van door Slack te scrollen naar de freelancer die iemand vorig voorjaar inschakelde.",
        screenshotAlt: "Bezettingsweergave gefilterd op UX-researchers, met vaste en freelance profielen en beschikbaarheidstags",
      },
      {
        title: "Internationale pitches in de taal van de klant",
        body: "Vertaal elke bio of volledige teampagina naar de taal van de klant met behoud van je lay-out. Grensoverschrijdende pitches vereisen geen aparte vertaal-en-heropmaakronde meer.",
        screenshotAlt: "Dezelfde teambio naast elkaar in het Engels en Duits in identieke studiobranding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kunnen we de exacte visuele identiteit van onze studio behouden?",
        answer:
          "Ja - dat is het punt. Je definieert het sjabloon met jouw lettertypen, kleuren en lay-out, en elke gegenereerde bio erft het exact, geëxporteerd als PDF of Word. Als de output er niet uitziet als de jouwe, is het sjabloon nog niet af.",
      },
      {
        question: "Is dit voor cv's, of voor de korte bio's die we in decks zetten?",
        answer:
          "Beide komen uit hetzelfde profiel. Een sjabloon bepaalt het outputformat, dus het profiel van één persoon kan renderen als een deckbio van drie regels, een one-pager of een volledig cv voor een retainer- of raamwerkpitch - allemaal consistent met elkaar.",
      },
      {
        question: "Kunnen we freelancers en vaste samenwerkingspartners opnemen?",
        answer:
          "Ja. Veel bureaus houden hun vertrouwde freelancebench in dezelfde database als het vaste team, zodat een pitchteam in één keer kan worden samengesteld en gepresenteerd. Met toegangsrechten bepaal je wie welke profielen mag zien en exporteren.",
      },
      {
        question: "Hoe krijgen we ieders bio erin zonder een groot contentproject?",
        answer:
          "Upload wat er is - oude cv's, LinkedIn-exports, bio's gekopieerd uit eerdere decks - en MagicCV parseert elk naar een gestructureerd profiel. Daarna polijsten mensen hun eigen profiel via chatgebaseerd bewerken, wat sneller is dan ze een formulier laten invullen.",
      },
      {
        question: "Wat kost het voor een studio van 15 personen?",
        answer:
          "Free dekt 10 profielen en 30 gegenereerde cv's, genoeg om het op een echte pitch te proberen. Pro voor $50/maand dekt 200 profielen en 600 cv's - ruimte voor de hele studio plus de freelancebench. Enterprise bestaat voor grotere netwerken die SSO en onbeperkt gebruik nodig hebben.",
      },
      {
        question: "Hoe worden persoonsgegevens verwerkt? Sommige profielen zijn freelancers, geen medewerkers.",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, rolgebaseerde toegang en auditlogs, wat telt als je profielen bewaart van mensen die niet op de loonlijst staan. Profielen kunnen netjes worden verwijderd als een samenwerking eindigt.",
      },
    ],
    related: [
      { label: "Merkconsistente exports", href: "/features/brand-templates" },
      { label: "Stem cv's af op elke briefing", href: "/use-cases/tailor-cvs" },
    ],
    seo: {
      title: "MagicCV voor design- & creatieve bureaus",
      description:
        "Genereer prachtig consistente, afgestemde consultant- en creatieve profielen die passen bij je studiomerk.",
      keywords: ["tool voor teambio's bureaus", "proposal-cv creatief bureau"],
    },
  },
  {
    _type: "industryPage",
    slug: "engineering-consulting",
    reader:
      "Ingenieursbureaus (civiel/constructief/installatietechniek/milieu) - extreem aanbestedings- en cv-intensief, vooral bij publieke inkoop.",
    angle:
      "De aanbesteding landt met een verplicht cv-formulier in bijlage C: kwalificaties, beroepsregistraties, daarna projectreferenties met rollen, waarden en datums - voor 12 ingenieurs, ingediend in het format van de opdrachtgever, uiterlijk vrijdag 12.00 uur. De referenties bestaan, verspreid over oude bids en de eigen Word-bestanden van de ingenieurs, waarvan de helft hetzelfde project op drie verschillende manieren beschrijft. Voeg een consortiumpartner toe die zijn cv's in weer een andere lay-out aanlevert, en de bidmanager verliest twee dagen aan heropmaken in plaats van het schrijven van het technische antwoord.\n\nMagicCV bewaart de kwalificaties, registraties en projectreferenties van elke ingenieur als gestructureerde data, één keer ingevoerd. Komt er een aanbesteding binnen, dan zet de AI de profielen af tegen de eisen, brengt de referenties naar voren die scoren en exporteert elk cv in exact het sjabloon dat de bijlage voorschrijft - vertaald waar de aanbesteding dat vereist, geanonimiseerd waar de beoordeling blind is. De raamwerkverlenging van volgend jaar begint vanuit actuele profielen, niet met een archeologische opgraving door de vorige indiening.",
    h1: "Raamwerkverlengingen en consortiumbids, zonder 12 ingenieurs-cv's handmatig te herbouwen.",
    sub: "Kwalificaties, registraties en projectreferenties één keer opgeslagen - geëxporteerd in exact het format dat elke aanbestedingsbijlage eist, in elke taal.",
    keyPoints: [
      {
        title: "Het bijlageformat, geproduceerd in plaats van herbouwd",
        body: "Stel de verplichte cv-structuur van de opdrachtgever in als sjabloon en exporteer het cv van elke ingenieur er rechtstreeks in, in Word of PDF. Schrijft de volgende aanbesteding een andere structuur voor, dan voeg je een sjabloon toe - je herformatteert geen 12 documenten.",
        screenshotAlt: "Ingenieurs-cv geëxporteerd in het verplichte bijlageformat van een publieke aanbesteding, met registratie- en referentiesecties in de vereiste volgorde",
      },
      {
        title: "Projectreferenties die aansluiten op de scoringscriteria",
        body: "Referenties leven als gestructureerde vermeldingen - rol, scope, waarde, datums - herbruikbaar over bids heen. Voer de aanbesteding in en de AI brengt per ingenieur de referenties naar voren die het best passen bij wat beoordelaars scoren, in plaats van dezelfde drie projecten die iedereen altijd opsomt.",
        screenshotAlt: "Referentielijst gefilterd op waterinfrastructuurprojecten boven 10 miljoen euro, gematcht op aanbestedingscriteria",
      },
      {
        title: "Registraties op de plek waar beoordelaars ze zoeken",
        body: "Chartered status en beroepsregistraties zijn velden op het profiel, op één plek actueel gehouden en gerenderd precies waar elk aanbestedingsformat ze verwacht. Nooit meer tijdens de compliancecheck ontdekken dat een registratiedatum is verlopen.",
        screenshotAlt: "Ingenieursprofiel met chartered status en beroepsregistraties met datums",
      },
      {
        title: "Blinde beoordeling en meertalige bids vanuit hetzelfde profiel",
        body: "Eén klik anonimiseert een cv voor blinde beoordeling; vertaling produceert de Franse of Duitse versie met de lay-out intact. Beide komen uit hetzelfde masterprofiel, dus taalversies lopen nooit uit de pas met het origineel.",
        screenshotAlt: "Geanonimiseerd ingenieurs-cv naast de Franse vertaling ervan, beide in het verplichte aanbestedingsformat",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Publieke aanbestedingen schrijven eigen cv-formulieren voor. Kan MagicCV daarin exporteren?",
        answer:
          "Ja. Je bouwt de verplichte structuur na als sjabloon - sectievolgorde, tabellen, veldlabels - en exporteert het cv van elke ingenieur er rechtstreeks in. Bureaus die op meerdere raamwerken bieden, houden doorgaans één sjabloon per opdrachtgever aan naast het huisformat.",
      },
      {
        question: "Kunnen we de cv's van onze consortiumpartner importeren voor een gezamenlijke bid?",
        answer:
          "Ja. Upload hun Word- of PDF-cv's en ze worden geparseerd naar gestructureerde profielen zoals die van jezelf, zodat de cv's van het hele consortium in één consistent, conform format exporteren. Toegangsrechten houden partnerprofielen daarna gescheiden als je dat wilt.",
      },
      {
        question: "Hoe werkt anonimisering voor blinde beoordeling?",
        answer:
          "Eén klik verwijdert namen, foto's en identificerende gegevens, terwijl kwalificaties, registraties en referenties intact blijven. Je controleert de blinde versie voordat die de indiening ingaat, en het masterprofiel blijft onaangetast.",
      },
      {
        question: "Hoe onderhouden we een projectreferentiebibliotheek over 50 ingenieurs?",
        answer:
          "Elke referentie wordt één keer ingevoerd als gestructureerde data en hergebruikt bij elke bid en ingenieur waarop die van toepassing is. Sluit een project af, dan voeg je het toe terwijl de details vers zijn - en is het beschikbaar voor de raamwerkverlenging twee jaar later, in plaats van uit het geheugen gereconstrueerd te worden.",
      },
      {
        question: "We bieden in het Duits, Frans en Nederlands. Behoudt vertaling het format?",
        answer:
          "Ja - cv's vertalen naar de taal van de aanbesteding met behoud van de sjabloonlay-out, dus de vertaalde versie is indieningsklaar in plaats van een herstart. Alle taalversies worden gegenereerd vanuit hetzelfde masterprofiel.",
      },
      {
        question: "Publieke opdrachtgevers kijken kritisch naar gegevensverwerking. Waar staat onze data?",
        answer:
          "EU-dataresidentie, AVG-by-design, auditlogs en rolgebaseerde toegang. Enterprise voegt SSO en een verwerkersovereenkomst toe. SOC 2 is in uitvoering - het Trust Center toont de actuele status, waarnaar je in je eigen compliance-antwoorden kunt verwijzen.",
      },
      {
        question: "Vervangt dit ons HR-systeem?",
        answer:
          "Nee. Je HRIS beheert het dienstverband; MagicCV beheert de bidgerichte laag - aanbestedingsklare cv's, registraties en referenties - die HR-systemen niet produceren. Ze bestaan naast elkaar; MagicCV bezit de documenten die de indieningen ingaan.",
      },
      {
        question: "Wat kost het voor een bureau met 60 ingenieurs?",
        answer:
          "Pro is $50/maand voor 200 profielen en 600 gegenereerde cv's, wat een bureau van deze omvang comfortabel dekt over een jaar aan aanbestedingen. Met de gratis instap (10 profielen, 30 cv's) draai je eerst een pilot op één lopende aanbesteding, en Enterprise voegt onbeperkt gebruik, SSO en een verwerkersovereenkomst toe.",
      },
    ],
    related: [
      { label: "Publieke sector & aanbestedingsgedreven consultancy", href: "/solutions/public-sector" },
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
    ],
    seo: {
      title: "MagicCV voor ingenieurs- & technische adviesbureaus",
      description:
        "Gestandaardiseerde, onderbouwde ingenieurs-cv's met kwalificaties, registraties en projectreferenties.",
      keywords: ["ingenieurs-cv aanbesteding", "consultant-cv voor publieke inkoop"],
    },
  },
  {
    _type: "industryPage",
    slug: "audit-advisory",
    reader:
      "Mid-market audit-, belasting- en adviesbureaus en accountantskantoren die reageren op RFP's en panel-/raamwerkindieningen.",
    angle:
      "Panelindieningen en engagementproposals blijven om hetzelfde vragen: gecertificeerde team-cv's met de juiste sectorervaring, kwalificatiedatums en toezichtstrackrecord - en elk kantoor stelt ze anders samen. Het kantoor in Hamburg gebruikt de ene lay-out, de belastingpraktijk een andere, en als een partner halverwege een proposal op een engagement rouleert, herbouwt iemand om 20.00 uur diens cv vanuit een versie van twee jaar oud. Voor een kantoor dat degelijkheid verkoopt, staan inconsistente teamcredentials slecht tegenover een auditcommissie.\n\nMagicCV houdt één profiel per partner en professional aan - kwalificaties, sectorervaring, engagementhistorie - getagd en doorzoekbaar door het hele kantoor. Proposals trekken afgestemde cv's die de sector- en toezichtservaring naar voren brengen waar elk engagement om vraagt, geëxporteerd in het kantoorsjabloon zodat elk kantoor hetzelfde kantoor indient. Rolgebaseerde toegang en auditlogs houden de governance over wie wat ziet en wijzigt - de standaard waar je eigen risicoteam de tool aan zal houden.",
    h1: "Panelindieningen met dezelfde gecertificeerde cv's vanuit elk kantoor, elke keer.",
    sub: "Eén beheerd profiel per professional - kwalificaties, sectorervaring, engagementhistorie - consistent geëxporteerd voor elke proposal en raamwerkindiening.",
    keyPoints: [
      {
        title: "Credentials en sectorervaring als doorzoekbare data",
        body: "Kwalificaties, licenties en sectortags zijn gestructureerde velden, geen regels in een Word-bestand. Als het engagement een auditpartner in de financiële sector met OOB-ervaring nodig heeft, geeft de zoekopdracht in seconden antwoord - over elk kantoor heen, niet alleen het kantoor dat de proposal samenstelt.",
        screenshotAlt: "Kantoorbrede zoekopdracht gefilterd op auditpartners met financiële dienstverlening en OOB-ervaring, met 5 resultaten met kwalificatiebadges",
      },
      {
        title: "Elke proposal leest als één kantoor",
        body: "Alle cv's exporteren via hetzelfde kantoorsjabloon, wie ze ook samenstelt en waar die ook zit. De panelindiening van de belastingpraktijk en het RFP-antwoord van advisory ogen niet langer alsof ze van verschillende kantoren komen.",
        screenshotAlt: "Vier professionele cv's uit verschillende servicelijnen gerenderd in één consistent kantoorsjabloon",
      },
      {
        title: "Governance die je risicoteam accepteert",
        body: "Rolgebaseerde toegang bepaalt wie profielen mag bekijken en bewerken, en auditlogs leggen elke wijziging vast met wie en wanneer. Vraagt iemand hoe cv-data wordt beheerd, dan is er een echt antwoord in plaats van een gok over SharePoint-rechten.",
        screenshotAlt: "Auditlog met profielwijzigingen met gebruiker, veld en tijdstempel, naast instellingen voor rolgebaseerde toegang",
      },
      {
        title: "Grensoverschrijdende engagements in de taal van de klant",
        body: "Vertaal elk cv naar de werktaal van het engagement terwijl het kantoorsjabloon intact blijft. Proposals over meerdere landen hebben geen aparte vertaalronde per lidkantoor meer nodig.",
        screenshotAlt: "Cv van een advisorypartner getoond in Engelse en Duitse versies in identieke kantoorbranding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kunnen we beroepskwalificaties en licentiedatums per profiel bijhouden?",
        answer:
          "Ja - kwalificaties zijn gestructureerde velden met datums, één keer bijgewerkt en verwerkt in elk cv dat daarna wordt gegenereerd. Dat maakt een einde aan het geren voor indiening om te bevestigen wiens credentials correct vermeld staan.",
      },
      {
        question: "Hoe wordt toegang tot professionele data binnen het kantoor beheerd?",
        answer:
          "Rolgebaseerde toegang bepaalt wie profielen mag bekijken, bewerken en exporteren - proposalteams kunnen bijvoorbeeld cv's genereren zonder bewerkrechten op de onderliggende data. Auditlogs leggen elke wijziging vast, wat de meeste interne risicoreviews tevredenstelt.",
      },
      {
        question: "Is MagicCV SOC 2-gecertificeerd?",
        answer:
          "De SOC 2-certificering is in uitvoering, niet afgerond - we beweren niets anders. Wat er vandaag staat: AVG-by-design architectuur, EU-dataresidentie, auditlogs, rolgebaseerde toegang en SSO plus een verwerkersovereenkomst op Enterprise. Het Trust Center toont de actuele status.",
      },
      {
        question: "Waar wordt de data opgeslagen, en is er een verwerkersovereenkomst?",
        answer:
          "Data wordt opgeslagen in de EU met AVG-by-design verwerking. Een verwerkersovereenkomst is onderdeel van het Enterprise-abonnement, samen met SSO - de gebruikelijke eisen wanneer de eigen compliancefunctie van een kantoor een nieuwe tool beoordeelt.",
      },
      {
        question: "Hoe migreren we cv's die op de eigen schijf van elk kantoor leven?",
        answer:
          "Upload ze als Word of PDF en MagicCV parseert elk naar een gestructureerd profiel. Het realistische pad is één praktijkgroep per keer: importeren, professionals hun eigen profiel laten bevestigen via chatgebaseerd bewerken, en dan de proposals van die groep omzetten.",
      },
      {
        question: "Kunnen we het bestaande cv-sjabloon van ons kantoor behouden?",
        answer:
          "Ja. Je sjabloon wordt één keer nagebouwd - lay-out, typografie, sectievolgorde - en elke export komt ermee overeen in Word of PDF. Kantoren in netwerken houden vaak het netwerkstandaardsjabloon aan naast het lokale.",
      },
      {
        question: "Hoe verschilt dit van ons ATS of HR-systeem?",
        answer:
          "Die systemen beheren werving en dienstverband; geen van beide produceert een proposalklaar partner-cv. MagicCV is cv-managementsoftware voor de klantgerichte laag - de gecertificeerde teampagina's die panelindieningen, RFP's en engagementbrieven ingaan.",
      },
      {
        question: "Hoe ziet de prijs eruit voor een kantoor van 100 personen?",
        answer:
          "Pro voor $50/maand dekt 200 profielen en 600 gegenereerde cv's, wat past bij de meeste mid-market kantoren. Enterprise heeft maatwerkprijzen voor onbeperkt gebruik, SSO en een verwerkersovereenkomst - waar kantoren met meerdere vestigingen doorgaans uitkomen zodra risk en IT akkoord zijn.",
      },
    ],
    related: [
      { label: "Voor HR / People Ops-teams", href: "/solutions/hr" },
      { label: "Gecentraliseerde profielen & skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV voor audit-, belasting- & adviesbureaus",
      description:
        "Breng per engagement de juiste sector- en toezichtservaring naar voren, met governance en consistentie ingebouwd.",
      keywords: ["proposal-cv adviesbureau", "cv-tool accountancy-consultants"],
    },
  },
  {
    _type: "industryPage",
    slug: "public-sector",
    reader: "Bureaus die intensief bieden op EU- en overheidsaanbestedingen en raamovereenkomsten (elke discipline).",
    angle:
      "Bij publieke inkoop is het cv eerst een compliance-artefact en daarna pas een verkoopdocument. De aanbesteding schrijft een cv-sjabloon voor in de bijlage, begrenst het aantal pagina's, vereist blinde versies voor de beoordeling en wil de indiening in twee talen - en één niet-conform cv kan een verder winnende bid terzijde laten leggen. Teams die op raamwerken bieden, kennen het ritueel: dezelfde 15 experts, opnieuw opgemaakt voor elke nadere opdracht, met de anonimisering handmatig in Word gedaan en twee keer gecontroleerd omdat niemand zoeken-en-vervangen vertrouwt.\n\nMagicCV behandelt die eisen als de standaard, niet als randgeval. Masterprofielen exporteren naar welk gestandaardiseerd sjabloon de opdrachtgever ook voorschrijft; anonimisering is één klik, geen avond; vertaling naar DE, FR, NL of elke aanbestedingstaal houdt de lay-out intact. Daaronder zorgen AVG-by-design en EU-dataresidentie dat de tool die de persoonsgegevens van je experts bewaart, dezelfde toetsing doorstaat als je bid.",
    h1: "Kom in elke aanbesteding in één keer door de cv-compliancecheck.",
    sub: "Gestandaardiseerde sjablonen, blinde cv's met één klik, meertalige output en AVG-by-design - de cv-workflow die EU- en overheidsinkoop daadwerkelijk eist.",
    keyPoints: [
      {
        title: "Het verplichte sjabloon van de opdrachtgever, geëxporteerd in plaats van nagebootst",
        body: "Bouw de vereiste cv-structuur van de aanbesteding na als sjabloon - inclusief EU-standaardformats - en exporteer het cv van elke expert er rechtstreeks in. Compliancechecks leveren niet langer opmaakafwijkingen op op het slechtst denkbare moment.",
        screenshotAlt: "Expert-cv geëxporteerd in het verplichte gestandaardiseerde sjabloon van een EU-aanbesteding met de vereiste sectievolgorde",
      },
      {
        title: "Blinde cv's in één klik, niet in één avond",
        body: "Anonimisering verwijdert namen, foto's en identificerende gegevens in één stap, met behoud van kwalificaties en projectbewijs. De blinde set voor de beoordeling en de herleidbare set voor de contractering komen uit dezelfde profielen, dus ze kunnen elkaar niet tegenspreken.",
        screenshotAlt: "Herleidbaar cv en de geanonimiseerde versie ervan voor blinde beoordeling, naast elkaar",
      },
      {
        title: "Elke aanbestedingstaal vanuit één masterprofiel",
        body: "Genereer de DE-, FR- of NL-versie van elk cv met de lay-out onaangetast. Tweetalige indieningen verdubbelen het voorbereidende werk niet meer, en de taalversies blijven synchroon omdat ze één bron delen.",
        screenshotAlt: "Eén expert-cv gerenderd in Duitse, Franse en Nederlandse versies in hetzelfde gestandaardiseerde format",
      },
      {
        title: "Gegevensverwerking die de toetsing van de opdrachtgever doorstaat",
        body: "EU-dataresidentie, AVG-by-design verwerking, auditlogs en rolgebaseerde toegang - antwoorden die je kunt citeren als de vragenlijst van de opdrachtgever vraagt hoe expertdata wordt verwerkt. Enterprise voegt SSO en een verwerkersovereenkomst toe.",
        screenshotAlt: "Trust-instellingen met EU-dataresidentie, auditlog en toegangsbeheer voor een publieke-sectorworkspace",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kan MagicCV cv's produceren in de gestandaardiseerde formats die EU-aanbestedingen voorschrijven?",
        answer:
          "Ja - verplichte structuren worden ingesteld als sjablonen en elk cv exporteert er rechtstreeks in, in Word of PDF. Bureaus die op meerdere raamwerken bieden, houden één sjabloon per opdrachtgever aan, zodat het juiste format een keuze is, geen verbouwing.",
      },
      {
        question: "Wat verwijdert anonimisering precies?",
        answer:
          "Namen, foto's, contactgegevens en identificerende verwijzingen, terwijl kwalificaties, ervaring en projectbewijs intact blijven. Je controleert het blinde cv voor indiening, en het herleidbare masterprofiel wordt nooit gewijzigd.",
      },
      {
        question: "Houdt de vertaling stand voor formele aanbestedingsindieningen?",
        answer:
          "Vertalingen houden de verplichte lay-out intact en worden gegenereerd vanuit gestructureerde profieldata, wat het uiteenlopen voorkomt dat je krijgt als taalversies als aparte Word-bestanden worden onderhouden. Bij indieningen waar veel van afhangt, laten de meeste teams een moedertaalspreker een laatste leesronde doen - het punt is dat die controleert, niet overtypt.",
      },
      {
        question: "Waar worden de persoonsgegevens van onze experts opgeslagen?",
        answer:
          "In de EU, met AVG-by-design verwerking, auditlogs en rolgebaseerde toegang. Enterprise bevat SSO en een verwerkersovereenkomst. Het Trust Center toont het actuele, feitelijke beeld - inclusief de SOC 2-status, die in uitvoering is.",
      },
      {
        question: "We dienen dezelfde experts in bij elke nadere opdracht onder een raamwerk. Wordt dat makkelijker?",
        answer:
          "Aanzienlijk. Masterprofielen blijven actueel tussen nadere opdrachten door, dus reageren op een minicompetitie betekent de experts selecteren, het raamwerksjabloon toepassen en controleren - in plaats van de Word-bestanden van vorig kwartaal opgraven en elke datum opnieuw nalopen.",
      },
      {
        question: "Kunnen we cv's van consortium- of onderaannemerexperts beheren?",
        answer:
          "Ja - upload hun cv's in elk format en ze worden gestructureerde profielen naast die van jezelf, geëxporteerd in hetzelfde conforme sjabloon. Toegangsrechten houden externe profielen buiten de bid afgeschermd als dat nodig is.",
      },
      {
        question: "Wat gebeurt er als we midden in een aanbesteding de abonnementslimieten overschrijden?",
        answer:
          "Free dekt 10 profielen en 30 cv's; Pro ($50/maand) dekt 200 profielen en 600 cv's, wat voor de meeste bureaus een druk aanbestedingsseizoen opvangt. Enterprise heft de limieten op en voegt SSO en een verwerkersovereenkomst toe - de keuze voor bureaus waar het inkoopvolume of het IT-beleid erom vraagt.",
      },
    ],
    related: [
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Meertaligheid & vertaling", href: "/features/multilingual" },
      { label: "Trust Center", href: "/trust" },
      { label: "Ingenieurs- & technische consultancy", href: "/solutions/engineering-consulting" },
    ],
    seo: {
      title: "MagicCV voor publieke sector & aanbestedingsgedreven consultancy",
      description:
        "Gestandaardiseerde sjablonen, anonimisering, meertalige output en AVG-by-design voor EU- en overheidsinkoop.",
      keywords: ["EU-aanbesteding cv-format", "cv-tool overheidsinkoop", "geanonimiseerd cv voor aanbestedingen"],
    },
  },
  {
    _type: "industryPage",
    slug: "staffing-agencies",
    reader:
      "Gespecialiseerde (niet-commodity) staffing- en talentbureaus die professionals plaatsen en kandidaat-cv's indienen bij klanten.",
    angle:
      "Het Word-cv van een kandidaat komt om 16.00 uur binnen. De klant wil de voordrachten in hun format - gebrand, blind, twee pagina's - morgenochtend, en dit is de derde klant deze week met een ander sjabloon. Dus besteedt de recruiter de avond aan heropmaken in plaats van sourcen, en de voordracht gaat alsnog de deur uit met de naam van de kandidaat in een koptekst die iemand vergat te controleren. Bij gespecialiseerde plaatsing is de voordracht het product dat de klant daadwerkelijk ziet; oogt die gehaast, dan oogt het bureau inwisselbaar.\n\nMagicCV maakt van het binnenkomende cv in één import een gestructureerd kandidaatprofiel - Word, PDF of LinkedIn. Vanaf daar is de klantgeformatteerde, bureaugebrande voordracht een export: kies het sjabloon van de klant, pas anonimisering met één klik toe als het proces blind is, vertaal als de rol in een andere markt zit. De kandidatendatabase eronder blijft doorzoekbaar op vaardigheden, sector en taal, zodat de volgende briefing begint bij kandidaten die je al hebt, niet bij een verse LinkedIn-zoektocht.",
    h1: "Klant-klare kandidaatvoordrachten dezelfde dag de deur uit, in het format van elke klant.",
    sub: "Importeer elk kandidaat-cv, exporteer een gebrande, blind-klare voordracht in exact het format dat elke klant vereist - met daaronder een doorzoekbare kandidatendatabase.",
    keyPoints: [
      {
        title: "Van ruw cv naar klantvoordracht in minuten",
        body: "Importeer het cv van de kandidaat zoals het binnenkomt en exporteer het in het vereiste voordrachtformat van de klant, onder de branding van jouw bureau. De avondlijke heropmaaksessie wordt een controleronde, en met sjablonen per klant is het format van de derde klant een keuzemenu, geen verbouwing.",
        screenshotAlt: "Ruw kandidaat-cv naast dezelfde kandidaat geëxporteerd als gebrande klantvoordracht van twee pagina's",
      },
      {
        title: "Blinde voordrachten zonder het zoeken-en-vervangen-ritueel",
        body: "Eén klik verwijdert namen, foto's en contactgegevens, met behoud van het ervaringsbewijs dat de klant nodig heeft om een shortlist te maken. Nooit meer handmatig kopteksten en bestandseigenschappen schoonpoetsen en hopen dat er niets doorheen glipte.",
        screenshotAlt: "Geanonimiseerde kandidaatvoordracht met identificerende gegevens verwijderd en de vaardighedensamenvatting intact",
      },
      {
        title: "Een kandidatendatabase waarin je echt kunt zoeken",
        body: "Elk geïmporteerd cv wordt een gestructureerd profiel, doorzoekbaar op vaardigheden, sector, talen en certificeringen. Brieft een klant een rol, dan is de eerste ronde een zoekopdracht door kandidaten die je al kent - vaak sneller dan sourcen vanaf nul.",
        screenshotAlt: "Kandidatendatabase gefilterd op SAP-consultants met Duits, met 9 profielen met vaardigheids- en taaltags",
      },
      {
        title: "Grensoverschrijdende plaatsingen in de taal van de klant",
        body: "Vertaal het cv van een kandidaat naar de taal van de klant met de voordrachtlay-out intact. Een developer uit Warschau plaatsen bij een Duitse klant vereist geen externe vertaalstap meer op een klok van 24 uur.",
        screenshotAlt: "Kandidaatvoordracht getoond in Engelse en Duitse versies in hetzelfde bureaugebrande format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is MagicCV geschikt voor high-volume commodity-recruitment?",
        answer:
          "Nee, en dat zeggen we liever meteen. MagicCV is gebouwd voor gespecialiseerde en professionele plaatsing, waar elke voordracht op maat is en cv-kwaliteit de fee beïnvloedt. Verplaats je honderden vrijwel identieke cv's per week, dan ben je beter af met een volumetool.",
      },
      {
        question: "Vervangt MagicCV ons ATS?",
        answer:
          "Nee - je ATS blijft eigenaar van pipeline, fases en klantdossiers. MagicCV bezit de documentlaag waar het ATS zwak in is: ruwe cv's omzetten in verzorgde, klantgeformatteerde, blind-klare voordrachten. Cv's bewegen tussen de twee als Word- of PDF-bestanden.",
      },
      {
        question: "Kunnen we per klant een ander voordrachtsjabloon instellen?",
        answer:
          "Ja. Het vereiste format van elke klant - branding, structuur, aantal pagina's - leeft als eigen sjabloon, en ernaartoe exporteren is één keuze. Bureaus die MSP- of enterprise-accounts met strikte voordrachtspecificaties bedienen, houden doorgaans één sjabloon per account aan.",
      },
      {
        question: "Hoe betrouwbaar is de anonimisering voor blinde voordrachten?",
        answer:
          "Systematisch in plaats van handmatig: namen, foto's en contactgegevens worden verwijderd uit de gestructureerde profieldata, niet overgeschilderd in een document, dus er is geen koptekst of bestandseigenschap waar een naam zich in kan verstoppen. Je controleert nog steeds voor verzending - het is jouw klantrelatie.",
      },
      {
        question: "Hoe gaan we om met kandidaatdata onder de AVG?",
        answer:
          "MagicCV is AVG-by-design met EU-dataresidentie, auditlogs en rolgebaseerde toegang - relevant als je duizenden kandidaatprofielen bewaart van mensen die je niet in dienst hebt. Profielen kunnen netjes worden verwijderd als de toestemming vervalt, en Enterprise voegt een verwerkersovereenkomst toe.",
      },
      {
        question: "Kunnen we kandidaten importeren vanuit LinkedIn?",
        answer:
          "Ja - LinkedIn-profielexports importeren op dezelfde manier als Word- en PDF-cv's, geparseerd naar gestructureerde profielen. Dat maakt een einde aan de knip-en-plakstap tussen een gesourcet profiel en een presentabele voordracht.",
      },
      {
        question: "Onze kandidatendatabase groeit snel. Wat zijn de limieten?",
        answer:
          "Free dekt 10 profielen en 30 cv's - genoeg om de voordrachtworkflow op lopende rollen te testen. Pro ($50/maand) dekt 200 profielen en 600 cv's, wat past bij een gespecialiseerde desk gericht op actieve kandidaten. Bureaus met grotere pools stappen over naar Enterprise voor onbeperkte profielen, SSO en een verwerkersovereenkomst.",
      },
    ],
    note: "MagicCV is gebouwd voor gespecialiseerde en professionele plaatsing - rollen die worden gewonnen op voordrachtkwaliteit - niet voor high-volume commodity-staffing.",
    related: [
      { label: "Anonimiseer cv's", href: "/use-cases/anonymize-cvs" },
      { label: "Centraliseer & standaardiseer cv's", href: "/use-cases/centralize-cvs" },
      { label: "Voor recruitmentteams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV voor gespecialiseerde staffing- & talentbureaus",
      description:
        "Formatteer, brand en anonimiseer kandidaatprofielen voor elke klantindiening - in minuten, in elke taal.",
      keywords: ["cv-opmaak staffingbureau", "anonimiseringstool kandidaat-cv"],
    },
  },
];
