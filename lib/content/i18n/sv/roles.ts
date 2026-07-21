import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sälj- och affärsutvecklingsansvariga på konsult- och IT-tjänsteföretag som äger vinstfrekvensen - och som slutar med att äga CV-arbetet varje gång en deadline närmar sig.",
    h1: "Ta bort CV-stressen ur anbudsarbetet.",
    sub: "MagicCV sköter CV-sidan av anbudsarbetet för säljteam i konsultbranschen: konsultpaket matchade mot RFP:n, skräddarsydda efter vad utvärderarna poängsätter och exporterade i er mall innan deadlinen blir spänd.",
    pain: {
      quote: "Upphandlingen stänger klockan 9. Klockan är 23 och jag formaterar om det tolfte CV:t för att partnern precis skickade final_v3_JS_edit.docx.",
      answer: "Ladda upp RFP:n eller underlaget så läser MagicCV dess krav, lyfter fram de bäst matchande konsulterna ur er konsultstyrka, formar om varje CV kring vad utvärderingskriterierna faktiskt belönar och exporterar hela paketet i er varumärkesmall som PDF eller Word. Ombygget kvällen innan blir en 15-minutersgranskning.",
      proofPoints: [
        "AI läser RFP:n - inklusive bilagan på 40 sidor - och skräddarsyr varje CV mot dess uttalade krav",
        "Kompetenssökning i hela konsultstyrkan: kompetenser, sektorer, språk, certifieringar",
        "Pixelkonsekventa PDF- och Word-exporter i er varumärkesmall, så att varje inlämning ser ut som ett bolag",
        "En aktuell profil per person - slut på att utgå från vilken version en partner än behållit",
      ],
    },
    featureRows: [
      {
        title: "Hitta rätt konsulter medan konkurrenterna fortfarande läser RFP:n",
        body: "Sök i konsultstyrkan på kompetenser, sektorer, språk och certifieringar i stället för att mejla praktikansvariga och vänta. Det som brukade vara två dagar av \"vem har vi för det här?\" blir en filtrerad lista ni kan kortlista från i en sittning.",
        screenshotAlt: "Kompetenssökning filtrerad på konsulter med AWS-certifiering, erfarenhet av offentlig sektor och franska, med 6 träffar",
      },
      {
        title: "Varje CV omformat kring vad utvärderarna poängsätter",
        body: "MagicCV läser underlaget och sorterar om varje konsults profil så att de relevanta projekten och kompetenserna leder. Energisektormigreringen hamnar på sida ett för elbolagsanbudet; det generiska sammanfattningsstycket slutar kosta er utvärderingspoäng.",
        screenshotAlt: "Vy sida vid sida av ett konsult-CV före och efter skräddarsyende mot en RFP:s utvärderingskriterier",
      },
      {
        title: "Ett inlämningsklart paket på minuter, inte en förlorad kväll",
        body: "Välj kortlistan, välj mallen, exportera. Tolv skräddarsydda CV:n kommer ut som ett enhetligt PDF- eller Word-paket, identiskt formaterat. CV-arbetet slutar vara punkten i anbudsplanen som alla i tysthet lägger på två extra dagar.",
        screenshotAlt: "Exportdialog som genererar ett offertpaket med 12 CV:n i en varumärkesmall med förloppsindikator",
      },
      {
        title: "En profil per person, så att vildvuxna versioner dör ut",
        body: "Konsulter och partners uppdaterar den centrala profilen - genom chattbaserad redigering, inte spårade ändringar i en Word-fil. Varje export genereras från den profilen, vilket betyder att versionen en partner håller på sitt skrivbord slutar dyka upp i inlämningar.",
        screenshotAlt: "Konsultprofil med datum för senaste uppdatering och en chattbaserad redigering som lägger till ett nyligen avslutat uppdrag",
      },
    ],
    stats: [
      { value: "1 dag → 15 min", label: "från mottagen RFP till inlämningsklart CV-paket", isPlaceholder: true },
      { value: "+18%", label: "vinstfrekvens på anbud med skräddarsydda CV:n", isPlaceholder: true },
    ],
    includeRoiTeaser: true,
    faqs: [
      {
        question: "Hur får jag partners att sluta hålla sig med egna CV-versioner?",
        answer: "Genom att göra den centrala profilen till det enda exporterna kommer från. I MagicCV har varje person en strukturerad profil; partners uppdaterar den med chattbaserad redigering i stället för att underhålla en privat Word-fil. När paketet alltid genereras färskt från profilen finns det inget för den privata final_v3.docx att klistras in i.",
      },
      {
        question: "Kan MagicCV faktiskt läsa en komplett RFP, eller klistrar jag in kraven för hand?",
        answer: "Ladda upp själva RFP:n eller underlaget. AI:n läser det, extraherar vad utvärderingen frågar efter och formar om varje valt CV kring de kraven. Ni granskar resultatet i stället för att göra tolkningen själva - och kan fortfarande justera vad som helst före export.",
      },
      {
        question: "Är detta en komplett anbudsplattform eller bara CV-delen?",
        answer: "Bara CV-delen - medvetet. MagicCV hanterar inte er anbudspipeline, prissättning eller dokumentsammanställning; den tar bort CV-flaskhalsen i er befintliga anbudsprocess. De flesta team kör den vid sidan av vad de redan använder för resten av offerten.",
      },
      {
        question: "Vi har en egen Word-mall som varumärkesteamet godkänt. Kan vi behålla den?",
        answer: "Ja. Er mall blir en varumärkesmall i MagicCV, och varje export renderas i den pixelkonsekvent som PDF eller Word. Ni kan hålla flera mallar - egen stil plus kund- eller ramavtalsspecifika format - och byta per export.",
      },
      {
        question: "Våra konsult-CV:n ligger i SharePoint-mappar. Hur kommer vi igång?",
        answer: "Importera dem som de är. MagicCV tar emot Word-, PDF- och LinkedIn-exporter och tolkar varje fil till en strukturerad profil, en per person. Det finns inget omskrivningsprojekt; den röriga mappen är indatan, inte ett hinder.",
      },
      {
        question: "Vissa ramavtal kräver blindutvärdering. Kan vi lämna in anonymiserade CV:n?",
        answer: "Ja - anonymisering är ett klick. MagicCV tar bort namn, foton och identifierande uppgifter och exporterar ett avidentifierat CV i samma mall, så konkurrensutsatta inlämningar och ramavtalsinlämningar som kräver det inte behöver ett separat manuellt pass.",
      },
      {
        question: "Hur snabbt kan vi realistiskt vända ett paket före en deadline?",
        answer: "När profilerna är på plats är ett skräddarsytt paket minuter av maskintid plus er granskning. Den ärliga begränsningen är profilkvaliteten: om en konsults profil är aktuell är dennes skräddarsydda CV det också. AI:n gör profilerna lätta att uppdatera, men den kan inte hitta på ett uppdrag ingen registrerat.",
      },
      {
        question: "Vad kostar detta för ett anbudsteam?",
        answer: "Free täcker 10 profiler och 30 CV-exporter - nog för att köra ett riktigt anbud genom den. Pro kostar $50/månad för 200 profiler och 600 CV:n, vilket passar de flesta medelstora konsultbolag. Enterprise lägger till obegränsad skala, SSO och ett personuppgiftsbiträdesavtal (DPA) till anpassat pris.",
      },
    ],
    related: [
      { label: "Skräddarsy CV:n för varje underlag", href: "/use-cases/tailor-cvs" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    ],
    seo: {
      title: "MagicCV för säljteam - vinn fler konsultanbud",
      description:
        "Låt inte långsamma, generiska CV:n kosta er affärer. MagicCV ger säljteam RFP-klara konsultpaket på minuter.",
      keywords: ["CV-verktyg för anbud och sälj", "vinn fler RFP:er konsultbolag"],
    },
  },
  {
    _type: "rolePage",
    slug: "recruitment",
    reader: "Rekryterings- och resursansvariga på konsult- och bemanningsbolag som håller konsultprofiler aktuella och svarar på varje \"vem har vi för det här?\"-förfrågan - oftast på en deadline någon annan satt.",
    h1: "En kandidatdatabas som håller sig aktuell utan fredagsjakten.",
    sub: "MagicCV gör CV:na utspridda i inkorgar och på enheter till en sökbar kandidatdatabas - strukturerade profiler ni kan söka på kompetens, skräddarsy mot ett underlag och exportera i valfritt format utan att jaga någon.",
    pain: {
      quote: "Jag skickade påminnelsen om CV-uppdatering för tre veckor sedan. Två konsulter svarade. En av dem skickade en PDF från 2023.",
      answer: "MagicCV ger varje person en strukturerad profil och låter AI:n göra det tråkiga: den tolkar vad konsulten än skickar - Word, PDF, en LinkedIn-export - och uppdaterar profilen från det. Ni söker i databasen och exporterar formatet förfrågan behöver, i stället för att jaga filer och formatera om dem för hand.",
      proofPoints: [
        "Importera valfritt CV-format - Word, PDF, LinkedIn - till en strukturerad profil per person",
        "AI tolkar uppdateringar från vad konsulterna än skickar, ingen manuell ominmatning",
        "Sök i hela konsultstyrkan på kompetenser, sektorer, språk och certifieringar",
        "Anonymisering med ett klick för avidentifierade kundinlämningar",
      ],
    },
    featureRows: [
      {
        title: "En profil per person, vad de än skickar er",
        body: "Släpp in Word-filen, PDF:en eller LinkedIn-exporten så tolkar MagicCV den till en strukturerad profil. Nyanställdas CV:n slutar ligga i er inkorg i väntan på en lugn eftermiddag som aldrig kommer.",
        screenshotAlt: "Importskärm som tolkar ett Word-CV och en LinkedIn-PDF till en strukturerad konsultprofil",
      },
      {
        title: "Svara på \"vem har vi med SAP och tyska?\" på sekunder",
        body: "Kompetensmatrisen täcker hela konsultstyrkan: kompetenser, sektorer, språk, certifieringar. En bemanningsförfrågan blir en sökning och en kortlista, inte en fredagseftermiddag av Slack-meddelanden till praktikansvariga.",
        screenshotAlt: "Kandidatdatabas filtrerad till 8 konsulter som matchar SAP, tyska och erfarenhet från tillverkningssektorn",
      },
      {
        title: "Vilken utdata förfrågan än behöver, från samma profil",
        body: "Kunden vill ha sitt eget format? Anbudsteamet vill ha den egna mallen? Generera båda från den aktuella profilen - och översätt den till kundens språk med layouten intakt. En profil, varje format, noll klipp och klistra.",
        screenshotAlt: "Exportalternativ för en profil: PDF i egen mall, kundens Word-format och en tysk översättning",
      },
      {
        title: "Avidentifierade CV:n för kundinlämning med ett klick",
        body: "När en kund eller ett ramavtal kräver anonymiserad rekrytering anonymiserar ni CV:t med ett klick - namn, foto och identifierande uppgifter borttagna, layouten orörd. Slut på att manuellt skrubba tolv dokument kvällen före inlämning.",
        screenshotAlt: "Anonymiserat konsult-CV bredvid originalet, med namn och foto ersatta av en kandidatkod",
      },
    ],
    stats: [
      { value: "6 tim", label: "sparade per vecka på att jaga och formatera om CV:n", isPlaceholder: true },
    ],
    faqs: [
      {
        question: "Kan kandidaters CV:n anonymiseras för kundinlämning?",
        answer: "Ja, med ett klick. MagicCV tar bort namn, foton och identifierande uppgifter och exporterar ett avidentifierat CV i samma mall, så inlämningar som kräver anonymiserad rekrytering inte behöver ett manuellt skrubbningspass. Originalprofilen förblir orörd.",
      },
      {
        question: "Hur håller vi 200 konsult-CV:n aktuella utan att jaga folk?",
        answer: "Sänk kostnaden för att uppdatera till nästan noll. Konsulterna skickar vad de har - en kommenterad Word-fil, en LinkedIn-export - så tolkar AI:n in det i deras profil; redigeringar kan också ske via chatt. Ni slutar vara personen som skriver om uppdateringar, vilket är största delen av varför uppdateringar aldrig blev av.",
      },
      {
        question: "Vad händer med CV:na vi redan har i SharePoint och gamla inkorgar?",
        answer: "De är er importkälla. MagicCV tolkar Word-, PDF- och LinkedIn-filer till strukturerade profiler, en per person, så den befintliga högen blir startdatabasen snarare än ett migreringsprojekt. Börja med de 20 personer ni bemannar oftast och bredda därifrån.",
      },
      {
        question: "Hur skiljer sig en sådan här kandidatdatabas från vårt ATS?",
        answer: "Ett ATS följer sökande genom en rekryteringspipeline och slutar i stort sett spela roll efter erbjudandet. MagicCV hanterar de personer ni redan har: håller deras profiler aktuella, sökbara och exporterbara för bemanningsförfrågningar och anbud. De flesta team kör båda - de svarar på olika frågor.",
      },
      {
        question: "Kan vi söka på certifieringar och sektorerfarenhet, inte bara jobbtitlar?",
        answer: "Ja. Profilerna är strukturerad data, så kompetensmatrisen täcker kompetenser, sektorer, språk och certifieringar över hela teamet. \"Azure-certifierad, finanssektorn, nederländsktalande\" är ett filter, inte en mejltråd.",
      },
      {
        question: "Vi hanterar mycket personuppgifter. Hur hanterar MagicCV GDPR?",
        answer: "GDPR by design: datalagring i EU, granskningsloggar och rollbaserad kontroll över vem som ser vad. Enterprise-planer lägger till SSO och ett personuppgiftsbiträdesavtal (DPA). När någon slutar kan profilen tas bort i stället för att ligga kvar i bortglömda mappar - vilket är mer än de flesta delade enheter kan säga.",
      },
      {
        question: "Hur ser prissättningen ut när databasen växer?",
        answer: "Free täcker 10 profiler och 30 CV-exporter, användbart för en pilot. Pro kostar $50/månad för 200 profiler och 600 CV:n. Enterprise har anpassat pris med obegränsade profiler, SSO och ett DPA - den vanliga vägen när resursteamet kör hela konsultstyrkan genom den.",
      },
      {
        question: "Kan konsulterna uppdatera sina egna profiler?",
        answer: "Ja - det är poängen. De kan redigera via chatt eller bara skicka ett aktuellt CV för AI:n att tolka in, och åtkomstkontroller avgör vem som kan redigera respektive visa. Uppdateringar blir en tvåminutersuppgift för konsulten i stället för en stående punkt på er jaktlista.",
      },
    ],
    related: [
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "Specialiserade bemannings- & talangbyråer", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Rekryteringsverktyg med CV-databas",
      description:
        "Håll varje CV aktuellt, sökbart och direkt i rätt format för varje brief eller anbud - en kompetensdatabas för hela er talangpool.",
      keywords: ["rekryteringsverktyg", "kompetensdatabas", "cv databas"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "HR- och People Ops-ansvariga som ansvarar för kvaliteten på medarbetardata - och som ser CV-kopior föröka sig över delade enheter, laptoppar och anbudsmappar utan något sätt att styra det.",
    h1: "En styrd post per konsult. Inga skuggkopior.",
    sub: "MagicCV ersätter CV-spridningen över enheter, inkorgar och laptoppar med strukturerade, åtkomststyrda profiler - ren data som HR faktiskt kan styra, utan att lägga till ännu ett system folk går runt.",
    pain: {
      quote: "Det finns fyra versioner av Annas CV: en i SharePoint, en i förra månadens anbudsmapp, en på hennes laptop och en som en partner skrev om själv. Jag kan inte säga vilken som stämmer.",
      answer: "MagicCV gör profilen till den enda posten och varje CV till en export av den. Datan lever som strukturerade fält i stället för fritt formulerade Word-dokument, rollbaserad åtkomst styr vem som kan se och redigera vad, och eftersom varje export genereras färskt från profilen slutar kopior glida isär till konkurrerande versioner.",
      proofPoints: [
        "Strukturerade profilfält ersätter fritt formulerade Word-dokument",
        "Rollbaserad åtkomst: vem som kan visa, vem som kan redigera, per profil",
        "GDPR by design, med datalagring i EU och granskningsloggar",
        "Varje CV genereras från den centrala profilen, så exporter kan inte glida ifrån posten",
      ],
    },
    featureRows: [
      {
        title: "Data ni kan styra, inte dokument ni bara kan samla",
        body: "Kompetenser, projekt, certifieringar och språk lever som strukturerade fält, inte prosa i en .docx. Ni kan se vad som är komplett, vad som är gammalt och vad som saknas i hela bolaget - frågor en mapp med Word-filer inte kan besvara alls.",
        screenshotAlt: "Översikt över profilkompletthet med strukturerade fält och datum för senaste uppdatering över ett team",
      },
      {
        title: "Åtkomst som matchar hur bolaget faktiskt arbetar",
        body: "Konsulterna redigerar sin egen profil, resursteamet ser konsultstyrkan, anbudsteamen exporterar - och ingen laddar ner ett kalkylblad med allas karriärhistorik till en laptop. Rollbaserad åtkomst ersätter den delade enhetens hederssystem.",
        screenshotAlt: "Inställningar för rollbaserad åtkomst med visnings- och redigeringsrättigheter per team",
      },
      {
        title: "Efterlevnad inbyggd, inte rekonstruerad vid granskningstillfället",
        body: "GDPR by design, datalagring i EU och granskningsloggar som visar vem som fått åtkomst till och ändrat vad. När en konsult slutar eller utövar sina datarättigheter agerar ni på en post - inte en sökning över fem enheter och allas skickade mejl.",
        screenshotAlt: "Granskningslogg som listar åtkomst- och redigeringshändelser för profiler med tidsstämplar och användarnamn",
      },
      {
        title: "Ett system, inte ännu ett parallellt",
        body: "MagicCV försöker inte ersätta ert HRIS - den tar över CV-problemet som HRIS:et aldrig byggdes för. Integrationer med Personio, BambooHR och HiBob finns på roadmapen för att hålla profilerna i synk automatiskt; i dag får import från Word, PDF eller LinkedIn in befintliga CV:n utan omskrivning.",
        screenshotAlt: "Inställningspanel med alternativ för CV-import och planerade HRIS-integrationer markerade som roadmap",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Är MagicCV GDPR-kompatibel, och var lagras vår data?",
        answer: "MagicCV är byggd GDPR-by-design med datalagring i EU, granskningsloggar och rollbaserad åtkomstkontroll. Enterprise-planer inkluderar ett personuppgiftsbiträdesavtal (DPA). Konsultdatan stannar i ett styrt system i stället för att spridas över enheter och inkorgar - vilket är där den mesta CV-relaterade GDPR-risken faktiskt bor.",
      },
      {
        question: "Har ni SOC 2?",
        answer: "SOC 2-certifieringen är pågående - vi påstår inte att den finns innan den är klar. Vad som finns på plats i dag: GDPR-by-design-datahantering, datalagring i EU, granskningsloggar samt SSO plus ett DPA på Enterprise. Fråga oss om aktuell status när ni utvärderar.",
      },
      {
        question: "Hur styr vi vem som kan se och redigera konsultprofiler?",
        answer: "Rollbaserad åtkomst, satt per grupp: konsulterna redigerar vanligtvis sin egen profil, resurs- och anbudsteam får visnings- och exporträttigheter, HR administrerar helheten. Granskningsloggen registrerar vem som visat och ändrat vad, så styrningen är verifierbar snarare än antagen.",
      },
      {
        question: "Duplicerar detta vårt HRIS?",
        answer: "Nej - den täcker vad HRIS:et inte gör. Ert HRIS håller kontrakt, lön och frånvaro; det har ingen strukturerad modell av projekterfarenhet, kompetenser och kundklara CV:n. MagicCV äger det lagret, och HRIS-integrationer (Personio, BambooHR, HiBob) finns på roadmapen för att hålla kärnfält i synk automatiskt.",
      },
      {
        question: "Vad händer med någons data när personen lämnar bolaget?",
        answer: "Det finns en post att agera på. Ta bort eller behåll profilen enligt er policy, med granskningsloggen som dokumenterar vad som hände. Jämför det med status quo, där en avgången medarbetares CV lever kvar på obestämd tid i anbudsmappar och personliga enheter ingen minns.",
      },
      {
        question: "Hur migrerar vi CV:n ut ur de delade enheterna utan ett datainmatningsprojekt?",
        answer: "Importera filerna som de är - Word, PDF, LinkedIn-exporter. AI:n tolkar varje fil till en strukturerad profil, en per person, och flaggar vad den inte kunde fylla i så att ägarna kan komplettera luckorna. Arbetet blir granskning, inte omskrivning.",
      },
      {
        question: "Finns det SSO?",
        answer: "Ja, på Enterprise-planen, tillsammans med ett DPA och obegränsade profiler. Free (10 profiler) och Pro ($50/månad, 200 profiler) använder standardinloggning - bra för en pilot, medan Enterprise passar när IT- och efterlevnadskrav kommer in i bilden.",
      },
      {
        question: "Kommer konsulterna faktiskt att använda den, eller är detta ännu ett system de ignorerar?",
        answer: "Uppdateringsvägen är medvetet lågtröskel: skicka ett aktuellt CV så tolkar AI:n in det, eller gör redigeringar via chatt. Konsulterna får något tillbaka - ett polerat, varumärkesanpassat CV på begäran - vilket är mer incitament än något HR-datasystem vanligtvis erbjuder dem.",
      },
    ],
    related: [
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV för HR & People Ops - ren, regelefterlevande CV-data",
      description:
        "Sluta underhålla CV:n på fem ställen. MagicCV håller profilerna rena, enhetliga och regelefterlevande.",
      keywords: ["GDPR CV-hantering", "HR-system för konsult-CV:n"],
    },
  },
  {
    _type: "rolePage",
    slug: "project-delivery",
    reader: "Leverans-, uppdrags- och praktikansvariga som bemannar projekt och är skyldiga kunden CV:n i offertskedet och vid uppdragsstart - utöver att faktiskt driva arbetet.",
    h1: "Starta varje uppdrag utan CV-stressen.",
    sub: "MagicCV ger leveransansvariga kundklara konsult-CV:n - matchade mot kraven, i kundens format och språk - utan att dra in debiterande personal i dokumentadministration veckan före uppdragsstart.",
    pain: {
      quote: "Uppdragsstart är på måndag. Kunden vill ha fem CV:n i sin upphandlingsmall, på franska, och halva teamets CV:n slutar fortfarande vid deras 2023-projekt.",
      answer: "MagicCV håller en aktuell profil per konsult och genererar det kundvända CV:t från den på begäran: matchat mot uppdragets krav, renderat i er mall eller kundens, översatt med layouten intakt, anonymiserat om upphandlingen kräver det. Bemanningspappersarbetet slutar konkurrera med leveranstiden.",
      proofPoints: [
        "Sök i konsultstyrkan på kompetenser, sektorer, certifieringar och språk mot kundens krav",
        "Exportera i er egen mall eller kundens krävda format, pixelkonsekvent",
        "Översätt CV:n till vilket språk som helst med layouten bevarad",
        "Anonymisering med ett klick för blinda eller konkurrensutsatta inlämningar",
      ],
    },
    featureRows: [
      {
        title: "Bemanna utifrån belägg, inte minne",
        body: "Sök i hela konsultstyrkan mot vad uppdraget faktiskt behöver - certifieringen kunden insisterar på, sektorerfarenheten, språket. Kortlistan kommer från data, inte från vem den praktikansvarige råkade minnas på ett fredagssamtal.",
        screenshotAlt: "Sökning i konsultstyrkan mot ett uppdrags krav, med konsulter rankade efter kompetens- och certifieringsmatchning",
      },
      {
        title: "Kundens format utan det manuella omarbetet",
        body: "Upphandlingsmatris från en myndighet, en enterprise-leverantörsmall eller er egen stil - spara varje som en mall och exportera valfri konsults CV direkt i den. De två timmarna per CV av att klistra in i kundens tabellstruktur försvinner.",
        screenshotAlt: "En konsultprofil exporterad till en CV-mall för offentlig upphandling och en företagsprofilerad PDF",
      },
      {
        title: "Gränsöverskridande leverans på kundens språk",
        body: "Översätt ett CV till uppdragsspråket med layouten och mallen intakta. Parisstarten får franska CV:n, Stockholmsramavtalet får svenska, och ingen bygger om dokument för hand på något av kontoren.",
        screenshotAlt: "Samma konsult-CV visat på engelska och franska med identisk layout och varumärke",
      },
      {
        title: "Avidentifierade profiler när upphandlingen kräver det",
        body: "Konkurrensutsatta upphandlingar och vissa ramavtal kräver CV:n utan namn eller foton. Anonymiseringen är ett klick på samma profil och mall, så det avidentifierade paketet är en variant av er normala export - inte ett separat sena kvällen-redigeringsjobb.",
        screenshotAlt: "Anonymiserat CV för en upphandlingsinlämning med namn och foto ersatta av en rollkod",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kan vi exportera CV:n i en kunds krävda mall, som ett format för offentlig upphandling?",
        answer: "Ja. Lägg till kundens format som en mall bredvid er egen stil, så exporteras valfri konsults CV i den pixelkonsekvent som PDF eller Word. Upphandlingsdrivna bolag håller sig vanligtvis med ett litet bibliotek: egen profil, två eller tre ramavtalsformat och en avidentifierad variant.",
      },
      {
        question: "Behåller översättningen layouten, eller får vi en textvägg att formatera om?",
        answer: "Layouten överlever. MagicCV översätter CV-innehållet till vilket språk som helst med mallen, strukturen och varumärket intakta - så den franska versionen av ett CV ser exakt ut som den engelska, bara på franska.",
      },
      {
        question: "Kan jag söka konsulter på certifiering och sektor, inte bara roll?",
        answer: "Ja. Profilerna är strukturerade, så kompetensmatrisen täcker certifieringar, sektorer, språk och kompetenser i hela konsultstyrkan. \"PRINCE2-certifierad, erfarenhet från energisektorn, tillgänglig i Norden\" är ett filter ni kör, inte en fråga ni skickar runt.",
      },
      {
        question: "Hur säkerställer vi att CV:na faktiskt är aktuella vid uppdragsstart?",
        answer: "Varje konsult har en profil, och att uppdatera den är billigt: de skickar ett färskt CV för AI:n att tolka, eller redigerar via chatt mellan projekt. Eftersom kund-CV:n genereras från profilen i stället för att grävas fram ur mappar använder uppdragsstarten det som är aktuellt - inte det som senast exporterades.",
      },
      {
        question: "Kan vi anonymisera CV:n för konkurrensutsatta upphandlingar?",
        answer: "Ett klick. Namn, foton och identifierande uppgifter försvinner; mallen och strukturen består. Det är samma profil och samma exportflöde, så avidentifierade inlämningar lägger inte till ett separat manuellt arbetsspår veckan före deadline.",
      },
      {
        question: "Är detta ännu ett verktyg mina leveransteam måste underhålla?",
        answer: "Underhållsbördan är just det som ska bort. Konsulterna rör den kort mellan uppdrag för att hålla sin profil aktuell - genom att skicka ett CV eller chatta en uppdatering - och leveransansvariga använder den vid bemanning. Det finns inget löpande dokumentpyssel, för dokumenten är utdata, inte lagringen.",
      },
      {
        question: "Kan en praktik börja utan en bolagsomfattande utrullning?",
        answer: "Ja, och det är den vanliga vägen. Free-planen täcker 10 profiler och 30 CV-exporter - nog för att ett team ska kunna köra ett riktigt uppdrag genom den. Pro för $50/månad täcker 200 profiler; Enterprise lägger till SSO, ett DPA och obegränsad skala när resten av bolaget följer efter.",
      },
    ],
    related: [
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "MagicCV för projektleverans- & uppdragsteam",
      description:
        "Generera uppdragsklara, varumärkesanpassade konsult-CV:n som matchar kundens krav.",
      keywords: ["CV-verktyg för projektbemanning", "uppdrags-CV konsultbolag"],
    },
  },
];
