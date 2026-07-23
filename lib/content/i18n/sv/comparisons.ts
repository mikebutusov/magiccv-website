import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase: vilken passar hur ert team lämnar anbud?",
    sub: "Båda verktygen hanterar konsult-CV:n för anbud. De verkliga skillnaderna är vem de är byggda för, hur snabbt ni är i drift och vad AI:n faktiskt gör med en RFP.",
    whereCompetitorWins: [
      "Kategoriledaren i kännedom: om ert inköpsteam ber om referenser har Flowcase år av enterprise-kundcase att peka på",
      "En mogen, genomarbetad produkt förfinad över en stor kundbas sedan CV Partner-tiden",
      "Djupare enterprise-anbudsflöden, inklusive etablerade processer för stora anbudsteam med formella granskningssteg",
      "Ett bättre val om ni behöver en leverantör som redan klarat säkerhetsgranskning hos bolag i er storlek, många gånger",
    ],
    whereMagicCvDiffers: [
      "Utgår från RFP:n: klistra in underlaget så formar AI:n om varje CV kring dess krav, i stället för att ni avgör vad som ska betonas inuti en mall",
      "Chattbaserad redigering: 'korta ner de två senaste rollerna, led med bankarbetet' i stället för att klicka genom formulärfält",
      "Prissättning på webbplatsen: Free-plan (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n). Inget demosamtal för att få veta kostnaden",
      "Tid till värde mätt i en dag, inte ett implementationsprojekt: importera era befintliga Word- och PDF-CV:n och exportera det första varumärkta CV:t samma eftermiddag",
      "Anonymisering och översättning med ett klick som behåller er layout, inbyggt för EU-upphandlingar och ramavtal",
    ],
    rows: [
      { category: "Var skräddarsyendet börjar", magiccv: "Från RFP-texten: AI läser underlaget och omprioriterar varje CV", competitor: "Från CV:t: ni väljer höjdpunkter inuti masterprofilmallar" },
      { category: "Hur ni redigerar", magiccv: "Chattinstruktioner plus direkta redigeringar", competitor: "Strukturerade formulär och mallfält" },
      { category: "Prismodell", magiccv: "Publik: Free, $50/mån Pro, anpassad Enterprise", competitor: "Offertbaserad, vanligen via en sälj- och demoprocess" },
      { category: "Vem den är byggd för", magiccv: "Medelstora bolag, 10-250 konsulter", competitor: "Positionerad mot större enterprise-bolag" },
      { category: "Att komma igång", magiccv: "Självbetjäning: importera CV:n, första export samma dag", competitor: "Vanligen en onboarding- och implementationsfas" },
      { category: "Anonymisering för upphandlingar", magiccv: "Ett klick, avidentifierade CV:n i er mall", competitor: "Finns; konfigurationen varierar" },
    ],
    guidance:
      "Är ni ett bolag med 500 anställda, en inköpsprocess, ett säkerhetsteam och budget för en implementationspartner är Flowcases meritlista en verklig tillgång. Är ni ett bolag med 15-150 personer som förlorar kvällar på CV-omformatering och vill fixa det den här veckan utan en säljcykel, är MagicCV byggd för exakt det. Testa gratisplanen på ett skarpt anbud och jämför resultatet.",
    faqs: [
      {
        question: "Kan vi migrera från Flowcase till MagicCV?",
        answer:
          "Ja. Exportera era CV:n från Flowcase som Word eller PDF, dra in dem i MagicCV, så tolkar AI:n var och en till en strukturerad profil. Det finns inget migreringsprojekt - ett team på 50 personer importerar vanligtvis sina CV:n på en eftermiddag.",
      },
      {
        question: "Är MagicCV en fullständig ersättare för Flowcase?",
        answer:
          "För kärnjobbet - att hålla konsult-CV:n aktuella, skräddarsy dem per anbud och exportera varumärkesanpassade dokument - ja. Flowcase går djupare i enterprise-anbudsflöden och har en längre enterprise-meritlista, vilket väger tyngre ju större ert bolag är.",
      },
      {
        question: "Hur står sig MagicCV:s prissättning mot Flowcases?",
        answer:
          "MagicCV publicerar priser: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n) och en anpassad Enterprise-plan med SSO. Flowcases prissättning är vanligen offertbaserad, så en rättvis jämförelse kräver deras säljprocess.",
      },
      {
        question: "Hur lång tid tar utrullningen jämfört med Flowcase?",
        answer:
          "MagicCV är självbetjäning: de flesta team importerar sina befintliga CV:n och exporterar det första varumärkta CV:t samma dag. Enterprise-plattformar kör vanligen en onboardingfas med malluppsättning och utbildning - rimligt i enterprise-skala, men överkurs för ett bolag med 30 personer.",
      },
      {
        question: "Vi arbetar med EU-upphandlingar. Hur står sig de två på efterlevnad?",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, granskningsloggar och avidentifierade CV:n med ett klick för anonymiserade inlämningar. SOC 2 är pågående. Flowcase betjänar också europeiska bolag; verifiera deras aktuella certifieringar direkt för er inköpschecklista.",
      },
      {
        question: "Kan jag prova MagicCV utan att prata med sälj?",
        answer:
          "Ja. Registrera er på getmagic.cv, importera en handfull CV:n på gratisplanen och kör en riktig RFP genom verktyget. Om det skräddarsydda resultatet inte är bättre än vad ni producerar för hand har ni förlorat en timme, inte ett kvartal.",
      },
    ],
    related: [
      { label: "Priser", href: "/pricing" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase - ärlig jämförelse",
      description:
        "Hur MagicCV står sig mot Flowcase för CV-hantering i konsultbolag: pris, AI, implementation, EU-efterlevnad.",
      keywords: ["Flowcase-alternativ", "Flowcase vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cinode",
    competitorName: "Cinode",
    h1: "MagicCV vs Cinode: fokuserat CV-verktyg eller komplett konsultsvit?",
    sub: "Cinode är en affärsplattform för konsultbolag. MagicCV gör ett jobb - anbudsklara CV:n - och gör det på en dag. Vilket ni behöver beror på vad som faktiskt är trasigt.",
    whereCompetitorWins: [
      "Genuin svitbredd: CV:n, kompetenshantering, säljpipeline, underkonsultnätverk och resursplanering i en plattform",
      "Starkt fotfäste bland nordiska konsultbolag, med ett etablerat partnernätverk på den marknaden",
      "En leverantör, en inloggning, en datamodell över sälj, bemanning och leverans när den väl är fullt införd",
      "Ett bättre val om ert bolag har bestämt sig för att driva hela verksamheten på en enda konsultplattform",
    ],
    whereMagicCvDiffers: [
      "Gör det enda jobb som de flesta sviter gör sämst: läsa en RFP och forma om konsult-CV:n kring den, med AI som utgår från underlaget",
      "Ingen svitomfattande utrullning: importera era befintliga CV:n och exportera det första varumärkta dokumentet samma dag, medan ert CRM och era planeringsverktyg förblir orörda",
      "Pro-plan för $50/månad med priser på webbplatsen - inget scopingsamtal för att få veta vad en modul kostar",
      "Chattredigering samt anonymisering och översättning med ett klick för EU-upphandlingar, inbyggt i CV-arbetsflödet i stället för utspritt över moduler",
    ],
    rows: [
      { category: "Omfattning", magiccv: "Ett arbetsflöde: profiler, RFP-skräddarsyende, varumärkt export", competitor: "Affärssvit: CV:n, kompetens, sälj, resursplanering, partners" },
      { category: "Vad ni ersätter", magiccv: "SharePoint-mappen och tisdagskvällens formatering", competitor: "Potentiellt ert CRM, er bemanningsmatris och er CV-process på en gång" },
      { category: "Tid till första CV ut", magiccv: "Samma dag, självbetjäning", competitor: "Vanligen en stegvis, svitomfattande implementation" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Offertbaserad, vanligen per modul och plats" },
      { category: "Byteskostnad senare", magiccv: "Låg: exportera era CV:n och profiler, gå vidare", competitor: "Högre när sälj- och bemanningsdata väl bor i sviten" },
      { category: "RFP-skräddarsyende", magiccv: "AI läser underlaget och formar om varje CV", competitor: "CV-modul med mallar; skräddarsyendet är i huvudsak manuellt" },
    ],
    guidance:
      "Om ert bolag konsoliderar sälj, bemanning och kompetens på en plattform - och ni har aptit för det projektet - är Cinode en trovärdig svit med genuint nordiskt påbrå. Är den akuta smärtan anbuds-CV:n, och ni inte vill byta plattform för hela verksamheten för att fixa det, löser MagicCV just det problemet den här veckan. Många team fixar CV:na först och tar svitbeslutet senare, med bättre underlag.",
    faqs: [
      {
        question: "Ersätter MagicCV Cinodes resursplanering eller säljpipeline?",
        answer:
          "Nej. MagicCV täcker konsultprofiler, RFP-skräddarsyende och varumärkt CV-export. Behöver ni beläggningsplanering, säljpipeline eller underkonsulthantering är det svitterritorium - Cinodes omfång är genuint bredare.",
      },
      {
        question: "Kan vi använda MagicCV vid sidan av Cinode?",
        answer:
          "Ja, och en del team gör det: sviten för bemanning och pipeline, MagicCV för CV:na som går in i anbud. Eftersom MagicCV importerar vilket Word- eller PDF-CV som helst krävs inget integrationsprojekt för att de ska samexistera.",
      },
      {
        question: "Kan vi migrera CV:n från Cinode till MagicCV?",
        answer:
          "Ja. Exportera CV:n från Cinode som Word eller PDF och importera dem i MagicCV; AI:n tolkar varje till en strukturerad, sökbar profil. Ingen fältmappning, ingen migreringskonsult.",
      },
      {
        question: "Hur jämför sig kostnaderna?",
        answer:
          "MagicCV publicerar priser: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n), anpassad Enterprise. Cinodes priser offereras vanligen per modul och antal platser, så totalkostnaden beror på hur mycket av sviten ni tar.",
      },
      {
        question: "Vi är ett nordiskt konsultbolag - är inte Cinode det självklara valet?",
        answer:
          "Det är ett starkt regionalt val, särskilt om ni vill ha hela sviten. Men om er utvärdering egentligen handlar om anbuds-CV:n, jämför det specifika arbetsflödet: klistra in ett underlag i MagicCV, skräddarsy tre CV:n och ta tid mot er nuvarande process innan ni binder er till en plattform.",
      },
    ],
    related: [
      { label: "Priser", href: "/pricing" },
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Cinode: fokus, driftsättningshastighet, kostnad och regional passform.",
      keywords: ["Cinode-alternativ", "Cinode vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv",
    competitorName: "Sprint CV",
    h1: "MagicCV vs Sprint CV: två synsätt på CV-automatisering för konsulter",
    sub: "Båda riktar sig till konsult- och bemanningsbolag som tröttnat på manuell CV-formatering. Skillnaden är vad automatiseringen gör: fylla mallar snabbt, eller resonera kring underlaget först.",
    whereCompetitorWins: [
      "Byggd specifikt för konsulting och bemanning, så CV-strukturerna matchar hur IT-tjänstebolag faktiskt presenterar människor",
      "Gedigen CV-tolkning och mallgenerering som varit i produktion hos konsultbolag i åratal",
      "Stark närvaro i Portugal och Spanien, med referenskunder på den iberiska IT-tjänstemarknaden",
      "Ett rakt, beprövat arbetsflöde om mallbaserad generering är allt ni behöver",
    ],
    whereMagicCvDiffers: [
      "AI-native skräddarsyende: klistra in RFP:n eller kundunderlaget så formas CV:t om kring dess krav - vilka projekt som leder, vad som skärs bort - inte bara omrenderas i en mall",
      "Chattredigering ovanpå strukturerade profiler: 'betona Azure-migreringsarbetet' slår att redigera om ett genererat dokument för hand",
      "Översättning till vilket språk som helst som behåller er layout, plus anonymisering med ett klick för blinda inlämningar",
      "Publik prissättning med en gratisplan, så att ni kan jämföra utdatakvaliteten på ett riktigt anbud innan ni spenderar något",
    ],
    rows: [
      { category: "Kärnmotor", magiccv: "AI läser underlaget, formar sedan om CV:t", competitor: "Tolkar CV:n och genererar från mallar" },
      { category: "Skräddarsyende per anbud", magiccv: "Automatisk omprioritering utifrån RFP-texten", competitor: "Vanligen manuellt urval inom mallen" },
      { category: "Redigering", magiccv: "Chattinstruktioner plus direkta redigeringar", competitor: "Mall- och formulärbaserad redigering" },
      { category: "Språk", magiccv: "Översätt valfritt CV, layouten bevarad", competitor: "Flerspråkigt stöd; täckningen varierar" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Vanligen offertbaserad" },
      { category: "Regional styrka", magiccv: "Hela EU, GDPR-by-design, datalagring i EU", competitor: "Starkast på Iberiska halvön" },
    ],
    guidance:
      "Är ni ett iberiskt konsultbolag som vill ha beprövad mallbaserad CV-generering från en leverantör med lokala referenser är Sprint CV ett respektabelt val. Är det tänkandet ni vill automatisera - vilken erfarenhet som ska lyftas fram för just det här underlaget - är det vad MagicCV:s RFP-till-CV-motor gör. Kör samma RFP genom båda och jämför utkasten.",
    faqs: [
      {
        question: "Kan vi byta från Sprint CV till MagicCV?",
        answer:
          "Ja. Exportera era CV:n som Word eller PDF, importera dem i MagicCV, så blir varje ett strukturerad profil automatiskt. De flesta team producerar varumärkta, skräddarsydda exporter samma dag.",
      },
      {
        question: "Vad betyder 'AI-native' i praktiken jämfört med mallgenerering?",
        answer:
          "Mallverktyg tar ett lagrat CV och renderar det konsekvent. MagicCV läser först underlaget, avgör vilka projekt, kompetenser och certifieringar som spelar roll för det, sorterar om och skriver om därefter, och renderar sedan i er mall. Formateringen är grundkravet; skräddarsyendet är skillnaden.",
      },
      {
        question: "Hanterar MagicCV språken vi lämnar anbud på?",
        answer:
          "Ja - MagicCV översätter CV:n till vilket språk som helst med layouten intakt, så en portugisisk masterprofil kan gå ut på engelska, franska eller tyska utan ett omformateringspass.",
      },
      {
        question: "Hur jämför sig priserna?",
        answer:
          "MagicCV:s priser finns på webbplatsen: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n). Sprint CV:s priser ordnas vanligen via deras säljprocess, så begär en offert och jämför mot Pro för er teamstorlek.",
      },
      {
        question: "Passar MagicCV bemanningsbyråer eller bara konsultbolag?",
        answer:
          "Båda. Bemanningsteam använder samma arbetsflöde - importera kandidat-CV:n, anonymisera med ett klick för blinda inlämningar och exportera i kundens eller er egen mall. RFP-skräddarsyendet fungerar lika bra på en rollspecifikation som på en upphandling.",
      },
    ],
    related: [
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Sprint CV för CV-hantering i konsult- och bemanningsbolag.",
      keywords: ["Sprint CV-alternativ"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cuvibox",
    competitorName: "CuViBox",
    h1: "MagicCV vs CuViBox: mallmotor eller underlagsdriven AI?",
    sub: "Båda centraliserar konsult-CV:n och exporterar dem konsekvent. Vägvalet är om skräddarsyendet utgår från er mall eller från kundens underlag.",
    whereCompetitorWins: [
      "En etablerad konsult-CV-hanterare med en mogen mallmotor som hanterat verkliga konsultbolags dokumentstandarder i åratal",
      "Ett förutsägbart, strukturerat arbetsflöde: lagra datan en gång, generera konsekventa dokument från den",
      "Enklare att resonera kring om ni misstror AI-omskrivning och vill ha deterministisk utdata fält för fält",
    ],
    whereMagicCvDiffers: [
      "Resonerar utifrån RFP:n innan den renderar: AI:n läser underlaget och avgör vilken erfarenhet som leder, i stället för att lämna det omdömet till den som formaterar klockan 19",
      "Chattredigering: säg till CV:t vad som ska ändras på vanligt språk i stället för att leta genom fält",
      "Anonymisering med ett klick och översättning till vilket språk som helst med layouten bevarad - de två vanligaste kraven i EU-upphandlingar, inbyggda",
      "Självbetjäning med publik prissättning: Free-plan att testa, $50/månad Pro när det sitter",
    ],
    rows: [
      { category: "Angreppssätt", magiccv: "Underlaget först: AI läser RFP:n, genererar sedan", competitor: "Mallen först: strukturerad data renderad till dokument" },
      { category: "Skräddarsyende per anbud", magiccv: "Automatisk omprioritering för varje underlag", competitor: "Vanligen manuellt urval av vad som ska ingå" },
      { category: "Redigeringsmodell", magiccv: "Chattinstruktioner plus direkta redigeringar", competitor: "Strukturerade fält och mallar" },
      { category: "Anonymisering / översättning", magiccv: "Ett klick vardera, layouten bevarad", competitor: "Varierar med konfigurationen" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Vanligen offertbaserad" },
      { category: "Att komma igång", magiccv: "Importera befintliga CV:n, första export samma dag", competitor: "Uppsättning av datastruktur och mallar först" },
    ],
    guidance:
      "Vill ni ha en deterministisk mallmotor där varje fält placeras av en regel ni konfigurerat är CuViBox ett etablerat alternativ. Är flaskhalsen hos er att besluta och skriva om - att forma om 8 CV:n kring en RFP-bilaga på 40 sidor före torsdag - automatiserar MagicCV det omdömesarbetet, inte bara renderingen. Gratisplanen gör jämförelsen billig att göra.",
    faqs: [
      {
        question: "Vad är den praktiska skillnaden mellan 'AI-native' och 'AI-assisterad'?",
        answer:
          "MagicCV utgår från RFP:n: den läser underlaget, avgör vilka projekt och kompetenser som spelar roll och formar om CV:t innan den renderar det i er mall. Mallförst-verktyg utgår från dokumentformatet och använder AI, om alls, för att hjälpa till att fylla i fält - underlaget kommer i andra hand.",
      },
      {
        question: "Kan vi flytta våra CV:n från CuViBox till MagicCV?",
        answer:
          "Ja. Exportera CV:n som Word eller PDF och importera dem i MagicCV - AI:n tolkar varje till en strukturerad profil. Ingen fältmappningsövning; ett medelstort teams bibliotek importeras på en eftermiddag.",
      },
      {
        question: "Håller MagicCV våra dokumentstandarder lika strikt som en mallmotor?",
        answer:
          "Ja. Er varumärkesmall sätts upp en gång, och varje export - PDF eller Word - renderas pixelkonsekvent mot den. AI:n ändrar vad CV:t säger för varje underlag, aldrig hur ert bolags dokument ser ut.",
      },
      {
        question: "Vad händer om vi inte litar på AI för att skriva om konsult-CV:n?",
        answer:
          "Ingenting går ut ogranskad. AI:n producerar ett skräddarsytt utkast; ni läser det, justerar via chatt eller direkta redigeringar och exporterar när ni är nöjda. De flesta team märker att granska ett bra utkast tar 10 minuter där skrivandet från noll tog en timme.",
      },
      {
        question: "Vad kostar MagicCV jämfört med CuViBox?",
        answer:
          "MagicCV:s priser är publika: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n), anpassad Enterprise med SSO. CuViBox-priser fås vanligen via deras säljprocess, så jämför en offert mot Pro för ert antal personer.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox - ärlig jämförelse",
      description: "Hur MagicCV står sig mot CuViBox: mallbaserad kontra AI-native CV-generering.",
      keywords: ["CuViBox-alternativ"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "napta",
    competitorName: "Napta",
    h1: "MagicCV vs Napta: fixa anbuds-CV:na, eller byta bemanningsplattform?",
    sub: "Napta är en resurshanteringsplattform där CV:n är en modul. MagicCV är CV-arbetsflödet, gjort på djupet. Rätt val beror på vilket problem som kostar er anbud.",
    whereCompetitorWins: [
      "En komplett bemannings- och resurshanteringsplattform: beläggning, projektbemanning, kompetens och karriärutveckling på ett ställe",
      "CV-genereringen kommer paketerad med bemanningsdatan, så profiler och tillgänglighet bor tillsammans när plattformen väl är införd",
      "Ett starkt val för bolag vars kärnsmärta är bemanningsöversikt och beläggning, inte bara dokument",
      "Etablerad hos medelstora och stora konsultbolag, särskilt i Frankrike",
    ],
    whereMagicCvDiffers: [
      "Går på djupet där sviter går på bredden: AI:n läser den faktiska RFP:n och formar om varje konsults CV kring den, med chattredigering för att finslipa utkastet",
      "Ingen plattformsmigrering: er bemanningsmatris, ert HRIS och ert CRM stannar där de är - MagicCV tar bara över CV-kaoset",
      "I drift samma dag som ni importerar era Word- och PDF-CV:n, jämfört med en plattformsutrullning med konfiguration och utbildning",
      "Publik prissättning från $0, med Pro för $50/månad - inget behov av att scopa ett resurshanteringsprojekt för att fixa dokument",
    ],
    rows: [
      { category: "Kategori", magiccv: "Fokuserat CV-för-anbud-arbetsflöde", competitor: "Resurshanteringsplattform med en CV-modul" },
      { category: "RFP-skräddarsyende", magiccv: "AI läser underlaget och formar om varje CV", competitor: "Mallbaserad generering från bemanningsprofiler" },
      { category: "Vad införandet kräver", magiccv: "Importera CV:n, välj en mall, kör", competitor: "Vanligen plattformsutrullning: data, processer, utbildning" },
      { category: "Tid till första resultat", magiccv: "Samma dag", competitor: "Veckor till månader, typiskt för plattformsprojekt" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Offertbaserad, vanligen per användare" },
      { category: "Funktioner för EU-upphandlingar", magiccv: "Anonymisering med ett klick, översättning som behåller layouten", competitor: "Inte produktens tyngdpunkt" },
    ],
    guidance:
      "Är ert verkliga problem bemanning - vem som är tillgänglig, vem som är på bänken, hur beläggningen utvecklas - är Napta byggd för det, och dess CV-modul följer med. Är ert verkliga problem CV:na själva - att formatera om 12 av dem för ett anbud, versioner som glider isär i SharePoint - fixar MagicCV det den här veckan utan att röra hur ni bemannar projekt. Diagnostisera den faktiska smärtan innan ni köper den större ytan.",
    faqs: [
      {
        question: "Gör MagicCV resursplanering eller beläggningsuppföljning som Napta?",
        answer:
          "Nej. MagicCV täcker konsultprofiler, kompetenssökning, RFP-skräddarsyende och varumärkt export. Behöver ni beläggningsdashboards och bemanningsflöden är det plattformsterritorium där Napta genuint har mer.",
      },
      {
        question: "Kan MagicCV fungera vid sidan av Napta?",
        answer:
          "Ja. Vissa bolag behåller en bemanningsplattform för planering och använder MagicCV för kundvända CV:n, eftersom en svits CV-modul sällan läser RFP:er. MagicCV importerar vilket Word- eller PDF-CV som helst, så ingen integration krävs för att köra båda.",
      },
      {
        question: "Hur snabbt är MagicCV i drift jämfört med en Napta-utrullning?",
        answer:
          "MagicCV är självbetjäning: importera era befintliga CV:n, sätt upp er varumärkesmall och exportera det första skräddarsydda CV:t samma dag. Resurshanteringsplattformar behöver vanligen konfiguration, datainläsning och utbildning innan CV-modulen betalar sig.",
      },
      {
        question: "Kan vi migrera CV:n ut ur Napta till MagicCV?",
        answer:
          "Ja - exportera dem som Word eller PDF och importera i MagicCV. AI:n tolkar varje fil till en strukturerad, sökbar profil med kompetenser, sektorer, språk och certifieringar.",
      },
      {
        question: "Vad kostar MagicCV?",
        answer:
          "Priserna är publika: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n) och anpassad Enterprise med SSO och ett personuppgiftsbiträdesavtal (DPA). Plattformssviter prissätts vanligen per användare och månad över hela personalstyrkan, vilket är ett annat budgetsamtal.",
      },
    ],
    related: [
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Napta: fokuserat CV-för-RFP-verktyg kontra bred svit för resurshantering.",
      keywords: ["Napta-alternativ"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sharepoint-word",
    competitorName: "SharePoint + Word",
    h1: "MagicCV vs SharePoint + Word + era kvällar",
    sub: "Det sittande alternativet hos de flesta bolag är ingen konkurrent - det är en mapp som heter 'CV SLUTGILTIG', tolv mallvarianter och den som stannar sent före deadline.",
    whereCompetitorWins: [
      "Noll ny licenskostnad: ni betalar redan för Microsoft 365, och ekonomi ifrågasätter det aldrig",
      "Noll inlärningströskel: alla i teamet har använt Word sedan universitetet",
      "Total flexibilitet: varje partner kan underhålla sin egen CV-version, i sitt eget format, med sitt eget foto från 2014",
      "Ingen leverantörsrisk, ingen inköpsgranskning, ingen trötthet på nya verktyg",
    ],
    whereMagicCvDiffers: [
      "Dödar den dolda kostnadsposten: att formatera om 12 CV:n för ett anbud tar timmar i Word och ungefär 15 minuters granskning i MagicCV",
      "En aktuell profil per person i stället för final_v3_JS_edit.docx som tävlar med final_v3_JS_edit_NEW.docx i tre mappar",
      "Varje export matchar er varumärkesmall exakt - ingen glidning mellan den som formaterade senast",
      "Skräddarsyende per anbud sker faktiskt: AI:n läser RFP:n och formar om varje CV, i stället för att samma generiska CV går ut för att tiden inte fanns",
      "Fredagseftermiddagens CV-jakter ersatta av profiler teamet uppdaterar på minuter, med AI som fyller i strukturen från valfri inklistrad eller uppladdad källa",
    ],
    rows: [
      { category: "Licenskostnad", magiccv: "Gratis att börja; Pro $50/mån för 200 profiler", competitor: "$0 extra - redan i er Microsoft-stack" },
      { category: "Verklig kostnad per anbud", magiccv: "Ungefär 15 minuters granskning per CV-paket", competitor: "Timmar av jagande, klippande och omformatering" },
      { category: "Versionssanning", magiccv: "En strukturerad profil per konsult", competitor: "final_v3, final_v3_NEW och partnerns privata kopia" },
      { category: "Varumärkesenhetlighet", magiccv: "Pixelkonsekvent mall vid varje export", competitor: "Beror på vem som formaterade, och hur sent det var" },
      { category: "Skräddarsyende mot underlaget", magiccv: "AI läser RFP:n och formar om varje CV", competitor: "Hoppas över under deadlinepress, nästan alltid" },
      { category: "Att hitta människor", magiccv: "Sök kompetenser, sektorer, språk, certifieringar", competitor: "Fråga runt på Teams och hoppas att någon minns" },
    ],
    guidance:
      "Om ert team lämnar ett par anbud om året och CV:na verkligen är under kontroll, behåll mappen - uppriktigt. Men om CV-förberedelsen äter timmar varje anbud, versionerna glider isär och minst en inlämning gått ut för sent eller utanför profilen i år, är 'gratis'-alternativet det dyraste verktyg ni kör. Importera 10 CV:n på gratisplanen och ta tid på nästa anbud, ärligt, mot det förra.",
    faqs: [
      {
        question: "Är inte gratis alltid billigare än $50 i månaden?",
        answer:
          "Bara om timmarna också är gratis. Om två personer lägger sex timmar på CV-omformatering per anbud och ni lämnar anbud två gånger i månaden är det ungefär 24 timmar seniortid - vilket kostar mer än ett år av Pro. ROI-kalkylatorn på prissidan räknar med era egna siffror.",
      },
      {
        question: "Vad händer med de CV:n vi redan har i SharePoint?",
        answer:
          "De blir startpunkten. Dra era befintliga Word- och PDF-filer till MagicCV så tolkar AI:n varje till en strukturerad profil - ingen omskrivning, ingen mallkirurgi. Behåll SharePoint som arkiv om ni vill; arbetskopiorna bor på ett ställe från och med då.",
      },
      {
        question: "Kan vi behålla vår befintliga Word-mall?",
        answer:
          "Ja. Er mall sätts upp en gång i MagicCV, och varje export - Word eller PDF - renderas pixelkonsekvent mot den. Resultatet ser ut som om ert bolag gjorde det, för det gjorde det; AI:n får bara människor att sluta formatera för hand.",
      },
      {
        question: "Vårt system fungerar för det mesta. Varför ändra något som inte är helt trasigt?",
        answer:
          "Om inget går ut för sent, utanför profilen eller oskräddarsytt: gör det inte. De flesta team som utvärderar CV-hanteringsprogram gör det efter en specifik incident - ett förlorat ramavtalsanbud, en kund som märkte ett inaktuellt CV, ett 48-timmarskaos. Har ni haft en sådan i år kostar 'fungerar för det mesta' er redan.",
      },
      {
        question: "Kommer teamet faktiskt att införa ännu ett verktyg?",
        answer:
          "Införandet är den ärliga risken med varje verktyg, och därför begär MagicCV lite av konsulterna: deras profil skapas från deras befintliga CV, och uppdateringar tar minuter med AI som sköter struktureringen. De som känner förändringen mest är de som formaterar anbud - och de brukar bli verktygets högljuddaste förespråkare.",
      },
      {
        question: "Är vår CV-data säkrare i SharePoint än i ett SaaS-verktyg?",
        answer:
          "SharePoint ärver er Microsoft-säkerhet, som är gedigen - men CV:n utspridda över mappar och inkorgar är svåra att granska eller radera under GDPR. MagicCV är GDPR-by-design med datalagring i EU och granskningsloggar, och en profil per person gör raderingsbegäranden till ett enstegsjobb. SOC 2 är pågående.",
      },
    ],
    related: [
      { label: "Priser & ROI-kalkylator", href: "/pricing" },
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "För säljteam", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV vs SharePoint + Word - den verkliga kostnaden för att inte göra något",
      description: "Den dolda kostnaden för att hantera konsult-CV:n i SharePoint och Word, och vad den summerar till.",
      keywords: ["konsult-CV SharePoint", "sluta hantera CV:n i Word"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvgate",
    competitorName: "CVGate",
    h1: "MagicCV vs CVGate: två fokuserade verktyg för konsult-CV:n",
    sub: "Det här är en jämn jämförelse - båda riktar sig till CV- och anbudsarbete för konsulter med transparent prissättning. Skillnaderna sitter i hur skräddarsyendet fungerar och vad som är inbyggt för EU-upphandlingar.",
    whereCompetitorWins: [
      "Helt fokuserad på CV- och anbudshantering för konsulter - en näraliggande passform, inte en generell CV-byggare",
      "Transparenta, publika prisnivåer, vilket är mer sällsynt än det borde vara i den här kategorin",
      "Paketerar näraliggande anbudsverktyg: kompetensbaserad sökning plus kontakthantering i CRM-stil vid sidan av CV:na",
      "Statistik på delade CV:n - att se när en kund öppnade eller agerade på ett dokument är genuint användbart i en säljcykel",
    ],
    whereMagicCvDiffers: [
      "AI som utgår från underlaget: klistra in RFP:n så formas varje CV om kring dess krav, med chattredigering för finslipning - inte bara konsekvent formatering",
      "Anonymisering med ett klick och översättning till vilket språk som helst med layouten bevarad - de två funktioner EU-anbudsteam frågar efter först",
      "Strukturerade konsultprofiler som en enda sanningskälla, sökbara på kompetenser, sektorer, språk och certifieringar",
      "GDPR-by-design med datalagring i EU och granskningsloggar, med SSO på Enterprise-planen",
    ],
    rows: [
      { category: "Kategori", magiccv: "AI-native CV-skräddarsyende + profilhantering", competitor: "CV-hantering med anbuds- och kontaktverktyg" },
      { category: "Skräddarsyende mot underlag", magiccv: "AI läser RFP:n och omprioriterar varje CV", competitor: "Mallbaserad; skräddarsyendet är vanligen manuellt" },
      { category: "Pristransparens", magiccv: "Publik: Free, $50/mån Pro, anpassad Enterprise", competitor: "Publika nivåer - heder åt det" },
      { category: "Anonymisering", magiccv: "Ett klick, i er mall", competitor: "Varierar med plan och konfiguration" },
      { category: "Översättning", magiccv: "Vilket språk som helst, layouten bevarad", competitor: "Varierar" },
      { category: "Redigering", magiccv: "Chattinstruktioner plus direkta redigeringar", competitor: "Formulär- och mallredigering" },
    ],
    guidance:
      "CVGate är en av de mer rättvisa jämförelserna på den här sajten: fokuserad produkt, publika priser, riktiga anbudsfunktioner. Om CV-delningsstatistik och inbyggd kontakthantering spelar roll för ert säljarbete, väg dem seriöst. Är AI-skräddarsyende per anbud, avidentifierade CV:n och flerspråkig utdata för EU-upphandlingar funktionerna ni använder varje vecka, går MagicCV längre på exakt de punkterna. Båda har ingångar med låg risk - testa med ett skarpt anbud.",
    faqs: [
      {
        question: "Är CVGate ett rimligt alternativ till MagicCV?",
        answer:
          "Ja - det är genuint fokuserat på CV- och anbudshantering för konsulter, med publik prissättning. De största skillnaderna är MagicCV:s underlagsdrivna AI-skräddarsyende, chattredigering samt inbyggd anonymisering och översättning för EU-upphandlingar.",
      },
      {
        question: "Kan vi migrera från CVGate till MagicCV?",
        answer:
          "Ja. Exportera era CV:n som Word eller PDF och importera dem i MagicCV; AI:n bygger en strukturerad profil av varje. De flesta team är klara med flytten på en dag.",
      },
      {
        question: "Har MagicCV statistik på CV-visningar som CVGate?",
        answer:
          "Nej - MagicCV exporterar genomarbetade PDF- och Word-dokument snarare än att hosta spårade länkar, så visningsstatistik är inte en del av produkten i dag. Om vetskapen om när en kund öppnade ett CV styr er uppföljningsprocess är det en genuin poäng för CVGate.",
      },
      {
        question: "Hur skiljer sig skräddarsyendet per anbud mellan de två?",
        answer:
          "I MagicCV klistrar ni in RFP:n eller underlaget så avgör AI:n vad varje CV ska leda med, och sedan granskar och finslipar ni via chatt. Mallbaserade verktyg håller CV:t konsekvent men lämnar beslutet om vad som ska betonas till den som förbereder anbudet.",
      },
      {
        question: "Hur står sig de två på GDPR och datalagringsplats?",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, granskningsloggar och ett personuppgiftsbiträdesavtal (DPA) på Enterprise-planen; SOC 2 är pågående. Kontrollera CVGates aktuella hosting- och efterlevnadsdokumentation direkt - båda leverantörerna publicerar nog för att fylla i en inköpschecklista.",
      },
    ],
    related: [
      { label: "Priser", href: "/pricing" },
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CVGate - ärlig jämförelse",
      description: "Hur MagicCV står sig mot CVGate för CV-hantering och anbud i konsultbolag: AI-anpassning, anonymisering, flerspråkighet, pris.",
      keywords: ["CVGate-alternativ", "CVGate vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cv-transformer",
    competitorName: "CV-Transformer",
    h1: "MagicCV vs CV-Transformer: omformateringsmotor eller skräddarsymotor?",
    sub: "CV-Transformer omvandlar inkommande CV:n till ert varumärkesformat i volym. MagicCV hanterar konsultprofiler över tid och formar om dem per underlag. Olika jobb, viss överlappning.",
    whereCompetitorWins: [
      "Stark på exakt en sak: att konvertera inkommande CV:n till en standardiserad, varumärkt mall, snabbt och i rekryteringsbyråvolym",
      "Inbyggd anonymisering och stöd för ett brett spann av språk",
      "Listar integrationer med rekryteringsstackar som Greenhouse, JobAdder och Salesforce, plus lagring inom EU",
      "En naturlig passform för bemannings- och rekryteringsbolag som bearbetar en jämn ström av kandidat-CV:n från tredje part",
    ],
    whereMagicCvDiffers: [
      "Skräddarsyr, inte bara omformaterar: AI:n läser RFP:n eller kundunderlaget och ändrar vad varje CV betonar, och renderar det sedan i er mall",
      "Profilerna består och hålls aktuella: en strukturerad post per konsult, uppdaterad över tid, i stället för engångskonverteringar av filer",
      "Kompetensmatris och sökning över hela konsultstyrkan - hitta varje konsult med Kubernetes, tyska och bankbakgrund på sekunder",
      "Byggd kring konsultbolagets anbudsarbetsflöde: CV-paket per anbud, chattredigering, översättning som behåller layouten, publik självbetjänad prissättning från $0",
    ],
    rows: [
      { category: "Kärnuppgift", magiccv: "Hantera profiler, skräddarsy per underlag, exportera varumärkt", competitor: "Konvertera inkommande CV:n till ert varumärkesformat" },
      { category: "Datamodell", magiccv: "Beständig profil per person, hålls aktuell", competitor: "Konvertering per fil; vanligen ingen långlivad profil" },
      { category: "Skräddarsyende mot underlag", magiccv: "AI omprioriterar innehållet utifrån RFP-texten", competitor: "Omformaterar och standardiserar, omprioriterar inte" },
      { category: "Anonymisering", magiccv: "Ett klick, i er mall", competitor: "Inbyggd" },
      { category: "Teamsökning", magiccv: "Kompetenser, sektorer, språk, certifieringar", competitor: "Inte fokus" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Vanligen kredit- eller abonnemangsbaserad, testperiod finns" },
    ],
    guidance:
      "Är ni en rekryterings- eller bemanningsbyrå vars flaskhals är volymomformatering av kandidat-CV:n till egen stil, är CV-Transformer stark på det jobbet och kopplar till rekryteringsstackar. Är ni ett konsult- eller IT-tjänstebolag som lämnar anbud med samma personer gång på gång behöver ni profiler som består och skräddarsys per underlag - det är MagicCV:s jobb. Vissa bemanningsbolag behöver legitimt båda mönstren; testa vardera på sin hemmaplan.",
    faqs: [
      {
        question: "Vad är kärnskillnaden mellan MagicCV och CV-Transformer?",
        answer:
          "CV-Transformer konverterar varje inkommande CV till ett standardiserat varumärkt dokument - en operation per fil. MagicCV underhåller en levande profil per konsult och genererar skräddarsydda, varumärkesanpassade CV:n från den för varje anbud, med AI som avgör vad som ska betonas utifrån underlaget.",
      },
      {
        question: "Vi återanvänder samma konsulter över anbud. Vilken modell passar bättre?",
        answer:
          "Beständiga profiler. Med konvertering per fil bearbetar ni om ett dokument varje gång det ändras; med MagicCV uppdateras profilen en gång och varje efterföljande export - valfri mall, valfritt språk, anonymiserad eller inte - hämtar från aktuell data.",
      },
      {
        question: "Båda verktygen anonymiserar CV:n. Finns det en skillnad?",
        answer:
          "Båda klarar kärnjobbet att producera avidentifierade CV:n. I MagicCV är anonymiseringen ett klick på valfri export och håller sig konsekvent med er mall, och eftersom den arbetar från strukturerade profiler kan ni exportera om den namngivna versionen direkt när kunden gör en kortlista.",
      },
      {
        question: "Integrerar MagicCV med vårt ATS som CV-Transformer gör?",
        answer:
          "MagicCV kräver ingen integration för att vara användbar - ni importerar CV:n direkt som Word, PDF eller LinkedIn-exporter. Om ert arbetsflöde bygger på att automatiskt trycka dokument in i ett specifikt ATS är det i dag en verklig fördel för CV-Transformers listade integrationer; ta upp integrationsbehov med oss om ni utvärderar Enterprise-planen.",
      },
      {
        question: "Kan vi migrera från CV-Transformer till MagicCV?",
        answer:
          "Ja - era konverterade CV:n är vanliga Word- eller PDF-filer, och MagicCV importerar dem direkt till strukturerade profiler. Därifrån sker uppdateringar på profilen i stället för genom omkonvertering.",
      },
    ],
    related: [
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "Anonymisera CV:n", href: "/use-cases/anonymize-cvs" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV-Transformer - ärlig jämförelse",
      description: "Hur MagicCV står sig mot CV-Transformer: omformatering kontra AI-resonemang, anonymisering, språk och pris.",
      keywords: ["CV-Transformer-alternativ", "CV Transformer vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvconverter",
    competitorName: "CV Converter",
    h1: "MagicCV vs CV Converter: snabb formateringsfix eller helt CV-arbetsflöde?",
    sub: "CV Converter gör ett litet jobb billigt och bra: får kandidat-CV:n att matcha er mall. MagicCV täcker hela konsult-CV-arbetsflödet. Omfånget är hela beslutet.",
    whereCompetitorWins: [
      "Radikalt enkel: ladda upp er mall, mata den med CV:n, få tillbaka konsekvent formaterade dokument",
      "Transparent, låg pay-as-you-go-prissättning med gratis testperiod - minimalt åtagande för att testa",
      "Positionerad som att den inte lagrar er kandidatdata långsiktigt, vilket förenklar vissa dataskyddssamtal",
      "Väl matchad mot volymrekrytering och RPO-formatering där kostnad per dokument är måttet",
    ],
    whereMagicCvDiffers: [
      "Täcker arbetsflödet runt dokumentet: beständiga konsultprofiler, kompetenssökning över teamet och skräddarsyende per anbud, inte bara konvertering",
      "AI:n läser RFP:n och formar om varje CV kring den - ett formateringsverktyg kan inte avgöra vilka av en konsults 14 projekt som spelar roll för det här underlaget",
      "Anonymisering med ett klick, översättning till vilket språk som helst med layouten kvar, och anbudsklara CV-paket för EU-anbud",
      "Chattredigering på valfritt utkast: 'kapa till två sidor och led med offentlig sektor-arbetet'",
    ],
    rows: [
      { category: "Omfattning", magiccv: "Profiler, sökning, skräddarsyende, paket, export", competitor: "Formatkonvertering, medvetet inget mer" },
      { category: "Sanningskälla", magiccv: "Strukturerad profil per konsult, hålls aktuell", competitor: "Varje fil konverteras oberoende" },
      { category: "Skräddarsyende mot underlag", magiccv: "AI omprioriterar innehållet utifrån RFP:n", competitor: "Utanför omfånget, avsiktligt" },
      { category: "Anonymisering / översättning", magiccv: "Ett klick vardera, layouten bevarad", competitor: "Inte fokus" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro (200 profiler)", competitor: "Publik pay-as-you-go, mycket låg per fil" },
      { category: "Bäst för", magiccv: "Bolag som lämnar anbud med en återkommande konsultstyrka", competitor: "Byråer som formaterar engångsflöden av kandidater" },
    ],
    guidance:
      "Är formatering genuint hela ert problem - en ström av engångskandidat-CV:n som bara behöver se enhetliga ut - är CV Converter billig, enkel och svår att argumentera emot. Dyker samma konsulter upp i anbud efter anbud, och det verkliga arbetet är att hålla deras profiler aktuella och skräddarsy dem per underlag, lämnar en konverterare 90 % av jobbet manuellt. Matcha verktyget mot om era CV:n är engångs eller återanvändbara.",
    faqs: [
      {
        question: "Är CV Converter billigare än MagicCV?",
        answer:
          "För ren formatering per fil kan dess pay-as-you-go-prissättning vara mycket låg, och MagicCV slår den inte på just det jobbet. MagicCV:s Pro-plan för $50/månad täcker 200 profiler och 600 CV:n plus skräddarsyende, sökning, anonymisering och översättning - ett bredare omfång, så jämför mot allt ni gör för hand i dag, inte bara formateringen.",
      },
      {
        question: "Vi är en rekryteringsbyrå. Vilken passar oss?",
        answer:
          "Om kandidater passerar en gång och formatering är hela jobbet passar CV Converter. Skickar ni in samma kontraktorer gång på gång, kör blinda CV-processer eller lämnar anbud på ramavtal, börjar MagicCV:s beständiga profiler och ettklicksanonymisering betala sig snabbt.",
      },
      {
        question: "Kan MagicCV matcha vår exakta mall som en konverterare gör?",
        answer:
          "Ja. Er varumärkesmall sätts upp en gång och varje export renderas pixelkonsekvent mot den, i PDF eller Word. Skillnaden är vad som händer före renderingen: MagicCV kan skräddarsy och översätta innehållet, inte bara hälla det i layouten.",
      },
      {
        question: "Lagrar MagicCV vår data, och var?",
        answer:
          "Ja - beständiga profiler är poängen, så att exporterna förblir aktuella utan att filer bearbetas om. Datan hanteras GDPR-by-design med lagring i EU och granskningsloggar, och Enterprise-planer inkluderar ett personuppgiftsbiträdesavtal (DPA). Kräver er policy noll lagring hos leverantören är en genomströmningskonverterare den säkrare arkitektoniska matchningen.",
      },
      {
        question: "Kan vi börja med CV Converter och byta till MagicCV senare?",
        answer:
          "Lätt - era konverterade CV:n är vanliga Word- eller PDF-filer, och MagicCV importerar dem direkt till strukturerade profiler. Team byter ofta när de märker att samma CV:n kommer tillbaka för sin tredje omformatering.",
      },
    ],
    related: [
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "Priser", href: "/pricing" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV Converter - ärlig jämförelse",
      description: "Hur MagicCV står sig mot CV Converter: enbart formatkonvertering kontra komplett CV-hantering och AI-anpassning.",
      keywords: ["CV Converter-alternativ", "cvconverter vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "muchskills",
    competitorName: "MuchSkills CV Inventory",
    h1: "MagicCV vs MuchSkills CV Inventory: vilket huvudsystem kommer först?",
    sub: "MuchSkills genererar CV:n från sin kompetensdatabas. MagicCV bygger profiler från de CV:n ni redan har. Rätt ordning beror på var er data bor i dag.",
    whereCompetitorWins: [
      "CV:n genererade från levande, verifierad kompetensdata - om MuchSkills-databasen är ert huvudsystem ärver CV:na dess noggrannhet",
      "Stark versionshantering och granskningsspår på varje CV, användbart där efterlevnad granskar vem som skickade vad och när",
      "Hanterar intern personal och externa konsulter i en och samma förteckning",
      "En djup kompetenstaxonomi som täcker certifieringar, tekniska kompetenser och förmågor på fin detaljnivå",
    ],
    whereMagicCvDiffers: [
      "Utgår från det ni har: importera Word-, PDF- eller LinkedIn-CV:n så bygger AI:n strukturerade profiler - inget projekt för att införa en kompetensplattform först",
      "RFP-till-CV-skräddarsyende: AI:n läser det faktiska underlaget och formar om varje CV kring det, snarare än att sätta ihop enbart från kompetensmatchningar",
      "Chattredigering, anonymisering med ett klick och översättning till vilket språk som helst med layouten bevarad - EU-upphandlingsverktygen på ett ställe",
      "Publik, självbetjänad prissättning: Free att testa, $50/månad Pro, utan ett plattformsåtagande",
    ],
    rows: [
      { category: "Datagrund", magiccv: "Strukturerade profiler tolkade från era befintliga CV:n", competitor: "MuchSkills kompetensdatabas" },
      { category: "Förutsättning", magiccv: "Ingen - importera CV:n och kör", competitor: "Att införa MuchSkills som ert kompetenssystem" },
      { category: "Skräddarsyende mot underlag", magiccv: "AI läser RFP-texten och omprioriterar", competitor: "Bygger på kompetensdatamatchning" },
      { category: "Versionshantering", magiccv: "Profilhistorik och granskningsloggar", competitor: "Stark, med granskningsspår per CV" },
      { category: "Anonymisering / översättning", magiccv: "Ett klick vardera, layouten bevarad", competitor: "Varierar" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Vanligen offererad som del av plattformen" },
    ],
    guidance:
      "Om er organisation redan kör MuchSkills - eller har beslutat att bygga sin talangdata kring en verifierad kompetenstaxonomi - är CV Inventory den naturliga förlängningen och datakvalitetsargumentet är verkligt. Bor er kompetensdata i dag i CV:n, SharePoint och människors huvuden, ger MagicCV er sökbara profiler och skräddarsydda anbuds-CV:n den här veckan, utan att först resa en kompetensplattform. Utgå från där er data faktiskt finns.",
    faqs: [
      {
        question: "Behöver vi en kompetensdatabas innan vi kan använda MagicCV?",
        answer:
          "Nej. MagicCV bygger strukturerade profiler direkt från era befintliga CV:n - Word, PDF eller LinkedIn-exporter - och extraherar kompetenser, sektorer, språk och certifieringar till en sökbar matris längs vägen. Kompetensdatan är en biprodukt av importen, inte en förutsättning.",
      },
      {
        question: "Är inte en verifierad kompetensdatabas mer träffsäker än tolkade CV:n?",
        answer:
          "Om den underhålls, ja - det är MuchSkills ärliga styrka. Avvägningen är införandet: en verifierad databas är bara träffsäker om konsulterna håller den aktuell. MagicCV satsar på artefakten folk redan underhåller (sitt CV) och gör uppdateringen till ett femminuters AI-assisterat jobb.",
      },
      {
        question: "Kan MagicCV och MuchSkills samexistera?",
        answer:
          "Ja. Vissa bolag använder MuchSkills för intern kompetensöversikt och MagicCV för kundvända anbuds-CV:n, eftersom exporterade CV:n från vilket system som helst kan importeras i MagicCV som Word eller PDF.",
      },
      {
        question: "Hur skiljer sig skräddarsyendet mellan de två?",
        answer:
          "MuchSkills sätter ihop CV:n med stöd i sin kompetensdata. MagicCV läser den faktiska RFP-texten - bilagan på 40 sidor inräknad - och avgör vad varje CV ska leda med för just det underlaget, vilket ni sedan finslipar via chatt före export.",
      },
      {
        question: "Hur hanterar MagicCV gransknings- och efterlevnadsbehov?",
        answer:
          "Profilerna behåller historik, plattformen loggar aktivitet, och datan hanteras GDPR-by-design med lagring i EU; Enterprise lägger till SSO och ett personuppgiftsbiträdesavtal (DPA). SOC 2 är pågående. Är granskningsspår per dokument ett hårt krav i dag, väg in MuchSkills versionshanteringsdjup i er utvärdering.",
      },
    ],
    related: [
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs MuchSkills CV Inventory - ärlig jämförelse",
      description: "Hur MagicCV står sig mot MuchSkills CV Inventory: profildrivna kontra kompetensdatabasdrivna konsult-CV:n.",
      keywords: ["MuchSkills-alternativ", "CV Inventory vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv-manager",
    competitorName: "SprintCV Enterprise",
    h1: "MagicCV vs SprintCV Enterprise: mellansegmentets fart eller enterprise-administrationens djup?",
    sub: "SprintCV:s enterprise-erbjudande lägger administration och teamhantering ovanpå sin CV-motor. MagicCV satsar samma budget på AI-skräddarsyende och tid till värde samma dag.",
    whereCompetitorWins: [
      "CV-hantering i enterprise-klass från en leverantör fokuserad på konsulting och bemanning, med beprövad tolkning och mallgenerering",
      "Mogna funktioner för administration och teamhantering - roller, översikt och struktur som större bolag förväntar sig",
      "Etablerad referensbas på Iberiens IT-tjänstemarknad",
      "Ett val som känns tryggare i en formell inköpsprocess som vill ha en produkt med enterprise-etikett",
    ],
    whereMagicCvDiffers: [
      "AI:n gör skräddarsyendet, inte bara tolkningen: klistra in en RFP så formas varje CV om kring dess krav före renderingen",
      "Chattredigering för finslipning: instruera utkastet på vanligt språk i stället för att arbeta genom adminvyer",
      "Publik prissättning på varje nivå under Enterprise - Free (10 profiler), Pro för $50/månad (200 profiler) - och självbetjänad onboarding samma dag",
      "Anonymisering med ett klick och översättning till vilket språk som helst med layouten bevarad, riktad mot kraven i EU-upphandlingar",
    ],
    rows: [
      { category: "Kärnmotor", magiccv: "AI läser underlaget, formar sedan om CV:t", competitor: "Tolkning och mallgenerering, enterprise-administration ovanpå" },
      { category: "Administrationsdjup", magiccv: "Teamarbetsytor; SSO och DPA på Enterprise", competitor: "Mogen enterprise-administration och teamhantering" },
      { category: "Tid till första CV ut", magiccv: "Samma dag, självbetjäning", competitor: "Vanligen en onboardingprocess" },
      { category: "Prissättning", magiccv: "Publik under Enterprise-nivån", competitor: "Vanligen offertbaserad" },
      { category: "Upphandlingsverktyg", magiccv: "Anonymisering + översättning inbyggt, ett klick", competitor: "Varierar med konfigurationen" },
      { category: "Regional styrka", magiccv: "Hela EU, datalagring i EU", competitor: "Starkast på Iberiska halvön" },
    ],
    guidance:
      "Är ni ett större bolag som vill ha enterprise-adminkontroller från en konsultfokuserad CV-leverantör - och iberiska referenser spelar roll för er - förtjänar SprintCV:s enterprise-produkt en titt. Är er prioritet utdatakvaliteten per anbud och att vara i drift den här veckan snarare än efter onboarding, passar MagicCV:s underlagsdrivna AI och självbetjäningsmodell bättre. Medelstora bolag använder sällan det administrationsdjup de betalar enterprise-priser för.",
    faqs: [
      {
        question: "Hur skiljer sig den här sidan från er Sprint CV-jämförelse?",
        answer:
          "Samma leverantör, enterprise-nivåns erbjudande: mer administrations- och teamhanteringsyta ovanpå samma CV-motor. Avvägningen mot MagicCV är oförändrad - deras styrka är struktur och regional meritlista; MagicCV:s är underlagsdrivet AI-skräddarsyende, publik prissättning och uppsättning samma dag.",
      },
      {
        question: "Har MagicCV enterprise-funktioner över huvud taget?",
        answer:
          "Ja - Enterprise-planen lägger till SSO, ett personuppgiftsbiträdesavtal (DPA), obegränsade profiler och prioriterad support, ovanpå granskningsloggar och datalagring i EU som varje plan får. Det MagicCV hoppar över är den obligatoriska enterprise-säljcykeln: Pro för $50/månad är självbetjäning och täcker team upp till 200 profiler.",
      },
      {
        question: "Kan vi migrera från SprintCV till MagicCV?",
        answer:
          "Ja. Exportera era CV:n som Word eller PDF, importera dem i MagicCV, så blir varje ett strukturerad profil automatiskt. Det finns inget migreringsprojekt att scopa.",
      },
      {
        question: "Hur lång tid tar utrullningen jämfört med en enterprise-CV-hanterare?",
        answer:
          "MagicCV: importera CV:n, sätt er varumärkesmall, exportera det första skräddarsydda CV:t - vanligtvis inom en dag, självbetjäning. Enterprise-CV-hanterare kör vanligen onboarding med konfiguration och utbildning först, vilket är motiverat i stor skala och långsamt överallt annars.",
      },
      {
        question: "Vi lämnar anbud i flera EU-länder. Vilken hanterar språk bäst?",
        answer:
          "MagicCV översätter valfritt CV till vilket språk som helst med er malls layout bevarad, så en profil betjänar anbud i Madrid, München och Paris. Verifiera SprintCV:s aktuella språktäckning mot de specifika språk ni lämnar anbud på.",
      },
    ],
    related: [
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Priser", href: "/pricing" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs SprintCV Enterprise CV Manager - ärlig jämförelse",
      description: "Hur MagicCV står sig mot SprintCV:s enterprise-CV-hanterare: AI-resonemang, pris, EU-språk.",
      keywords: ["SprintCV-alternativ", "Sprint CV enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "enhancv",
    competitorName: "Enhancv",
    h1: "MagicCV vs Enhancv: anbuds-CV:n är ett annat jobb än jobbsökar-CV:n",
    sub: "Enhancv bygger CV:n som får kandidater anställda. MagicCV bygger konsult-CV:n som vinner uppdrag åt bolag. Jämför ni dem, bestäm först vilket dokument ni faktiskt producerar.",
    whereCompetitorWins: [
      "En genuint utmärkt CV-byggare: genomarbetad redigerare, ett stort mallbibliotek och resultat kandidater är stolta över att skicka",
      "Import med ett klick från LinkedIn, DOCX och PDF, med matchning mot jobbannonser för att rikta ett CV mot en utlysning",
      "ATS-vänlig formatering, vilket spelar roll när dokument sållas av rekryteringsmjukvara",
      "Teamfunktioner med delat bibliotek och eget varumärke - en bra passform för rekryterings-, omställnings- och karriärcoachningsteam",
    ],
    whereMagicCvDiffers: [
      "Byggd för bolaget, inte jobbsökaren: profiler för hela er konsultstyrka, sökbara på kompetenser, sektorer, språk och certifieringar",
      "Optimerar för kundunderlaget, inte ett ATS: AI:n läser RFP:n och formar om varje konsults CV kring dess krav",
      "Producerar anbudsklara CV-paket - 8 konsulter, en mall, en eftermiddag - plus avidentifierade CV:n med ett klick för upphandlingar",
      "GDPR-by-design med datalagring i EU, översättning till vilket språk som helst med er layout kvar, och publik prissättning från $0",
    ],
    rows: [
      { category: "Vem den tjänar", magiccv: "Konsult- och tjänstebolag som lämnar anbud", competitor: "Jobbsökare, och team som stöttar dem" },
      { category: "Dokument som produceras", magiccv: "Konsult-CV för en kund eller upphandling", competitor: "CV för en jobbansökan" },
      { category: "Optimerad för", magiccv: "Kundens underlag och utvärderingskriterier", competitor: "ATS-tolkning och nyckelord från jobbannonsen" },
      { category: "Teammodell", magiccv: "En profil per konsult, sökning i hela bolaget", competitor: "Delat bibliotek av individuella CV:n" },
      { category: "Upphandlingsfunktioner", magiccv: "Avidentifierade CV:n och CV-paket, ett klick", competitor: "Inte användningsfallet" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Publika abonnemangsplaner" },
    ],
    guidance:
      "Hjälper ert team individer att landa jobb - rekrytering, omställning, karriärtjänster - är Enhancv ett av de bästa verktygen för det och MagicCV försöker inte konkurrera där. Går era CV:n in i anbud och upphandlingar med ert bolagsnamn på omslaget är ATS-optimering irrelevant och underlagsanpassning allt - det är MagicCV. De två produkterna ser bara likadana ut tills ni namnger dokumentets läsare.",
    faqs: [
      {
        question: "Kan Enhancv hantera CV:n för konsultanbud?",
        answer:
          "Den kan producera genomarbetade, varumärkta dokument, och vissa team tänjer den åt det hållet. Vad den inte är byggd för är arbetsflödet runtomkring: en sökbar konsultstyrka, RFP-drivet skräddarsyende, avidentifierade CV:n för upphandlingar och CV-paket med flera konsulter. Det är MagicCV:s kärna, inte en anpassning.",
      },
      {
        question: "Behöver konsult-CV:n ATS-optimering?",
        answer:
          "Nästan aldrig. Anbuds-CV:n läses av kundens utvärderare och upphandlingspaneler, inte av CV-sållningsmjukvara. Det som flyttar poängen är relevansen mot underlaget - vilket är exakt vad MagicCV:s RFP-till-CV-skräddarsyende automatiserar.",
      },
      {
        question: "Kan vi importera CV:n våra konsulter gjort i Enhancv?",
        answer:
          "Ja. Exportera dem som PDF eller DOCX och importera i MagicCV - AI:n tolkar varje till en strukturerad profil. LinkedIn-exporter fungerar likadant, så onboarding av konsultstyrkan hänger inte på något enskilt källformat.",
      },
      {
        question: "Vår rekryteringsgren använder Enhancv. Ska konsultsidan också göra det?",
        answer:
          "Bara om konsultsidans behov slutar vid snygga dokument. I samma ögonblick som ni behöver söka i konsultstyrkan på kompetens, anonymisera för en ramavtalsupphandling eller skräddarsy 10 CV:n mot en RFP till fredag, är ni utanför vad en CV-byggare är designad för.",
      },
      {
        question: "Hur jämför sig priset för ett team?",
        answer:
          "MagicCV:s Pro-plan kostar $50/månad för 200 profiler och 600 CV:n, med en gratisplan (10 profiler, 30 CV:n) att testa. Enhancv publicerar sin egen abonnemangsprissättning per användare - direkt jämförbara siffror, bara prissatta för olika jobb.",
      },
    ],
    related: [
      { label: "För rekryteringsteam", href: "/solutions/recruitment" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Enhancv - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Enhancv: CV:n för konsultanbud kontra CV-byggande för kandidater och jobbsökare.",
      keywords: ["Enhancv-alternativ", "Enhancv vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "visualcv",
    competitorName: "VisualCV",
    h1: "MagicCV vs VisualCV: CV-byggare för team eller anbuds-CV-arbetsflöde?",
    sub: "VisualCV ger team enhetliga, hostade CV:n. MagicCV förvandlar en konsultstyrka till skräddarsydda, varumärkesanpassade CV:n per anbud. Lika på ytan, olika under.",
    whereCompetitorWins: [
      "En sedan länge etablerad CV-byggare med en företagsnivå designad för team",
      "Genomarbetade mallar plus hostade online-CV:n med visningsstatistik - användbart när ni delar CV:n som länkar och vill veta att de öppnades",
      "Ett enkelt sätt att hålla ett teams CV:n visuellt enhetliga under ett varumärke",
      "Tillgänglig prissättning och låg uppsättningsinsats för det den gör",
    ],
    whereMagicCvDiffers: [
      "Byggd kring anbudet, inte det enskilda dokumentet: klistra in en RFP så formar AI:n om varje konsults CV kring den, och sätter sedan ihop paketet",
      "Strukturerade profiler som sanningskälla - sökbara på kompetenser, sektorer, språk, certifieringar - snarare än en mapp med designade CV:n",
      "Anonymisering med ett klick för blinda upphandlingsinlämningar och översättning till vilket språk som helst med layouten bevarad",
      "GDPR-by-design med datalagring i EU och granskningsloggar; SSO och DPA på Enterprise",
    ],
    rows: [
      { category: "Primärt jobb", magiccv: "Skräddarsydda konsult-CV:n för anbud och kunder", competitor: "Enhetliga CV:n och hostade online-CV:n" },
      { category: "Skräddarsyende mot underlag", magiccv: "AI läser RFP:n och omprioriterar varje CV", competitor: "Manuell redigering inom mallar" },
      { category: "Teamsökning", magiccv: "Kompetensmatris över hela konsultstyrkan", competitor: "Inte fokus" },
      { category: "Delningsmodell", magiccv: "Pixelkonsekventa PDF/Word-exporter", competitor: "Hostade länkar med visningsstatistik" },
      { category: "Upphandlingsverktyg", magiccv: "Avidentifierade CV:n och CV-paket, ett klick", competitor: "Inte användningsfallet" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Publika planer, företagsnivå för team" },
    ],
    guidance:
      "Behöver ni en uppsättning snygga, enhetliga CV:n - och hostade CV-länkar med visningsspårning tilltalar ert säljarbete - gör VisualCV det jobbet bra med låg insats. Är era CV:n ammunition för anbud och upphandlingar är arbetet skräddarsyende och sammansättning under deadline, och det är arbetsflödet MagicCV automatiserar från början till slut. Namnge er faktiska tisdagseftermiddagsuppgift och välj därefter.",
    faqs: [
      {
        question: "Passar VisualCV för konsultanbud?",
        answer:
          "Den producerar enhetliga, varumärkta dokument, vilket täcker ytkravet. Vad den saknar är anbudsarbetsflödet under: RFP-drivet skräddarsyende, en sökbar kompetensmatris, avidentifierade CV:n och paket med flera konsulter. Är de veckouppgifter för er lämnar en generell byggare dem manuella.",
      },
      {
        question: "Kan vi migrera vårt teams VisualCV-CV:n till MagicCV?",
        answer:
          "Ja. Exportera dem som PDF eller Word och importera i MagicCV - varje blir en strukturerad, sökbar profil. Ett team på 30 personer är vanligtvis importerat och exporterar varumärkta CV:n inom en dag.",
      },
      {
        question: "Erbjuder MagicCV hostade CV-länkar och visningsstatistik som VisualCV?",
        answer:
          "Nej - MagicCV producerar pixelkonsekventa PDF- och Word-exporter, för det är vad anbud och upphandlingsportaler kräver. Är spårade hostade länkar centrala för hur ni delar CV:n är det en genuin VisualCV-fördel att väga in.",
      },
      {
        question: "Hur hanterar de två att hålla CV:n aktuella i ett team?",
        answer:
          "I en CV-byggare redigeras varje dokument individuellt och glidningen smyger sig in. I MagicCV har varje person en profil; uppdateringar tar minuter med AI som strukturerar inmatningen, och varje export överallt hämtar från den aktuella versionen.",
      },
      {
        question: "Hur blir det med GDPR - vi är ett EU-bolag?",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, granskningsloggar och en profil per person, vilket gör åtkomst- och raderingsbegäranden okomplicerade; Enterprise lägger till ett personuppgiftsbiträdesavtal (DPA) och SSO. Kontrollera VisualCV:s aktuella dokumentation om datalagringsplats mot era krav.",
      },
    ],
    related: [
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "Skräddarsy CV:n för varje underlag", href: "/use-cases/tailor-cvs" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs VisualCV - ärlig jämförelse",
      description: "Hur MagicCV står sig mot VisualCV: CV:n för konsultanbud kontra generellt CV-byggande för team.",
      keywords: ["VisualCV-alternativ", "VisualCV business vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "rezi",
    competitorName: "Rezi",
    h1: "MagicCV vs Rezi: ATS-CV:n och anbuds-CV:n är olika sporter",
    sub: "Rezi är en AI-CV-byggare trimmad för ATS-sållning, ofta utrullad som white label. MagicCV är trimmad för kundunderlag och upphandlingar. Samma 'AI-CV'-etikett, olika spel.",
    whereCompetitorWins: [
      "En mogen AI-CV-byggare med stark ATS-nyckelordsriktning - rätt optimering när mjukvara sållar dokumentet",
      "White label-utrullning, vilket är skälet till att universitet, karriärcenter och CV-skrivartjänster bygger på den",
      "Marknadsför publikt SOC 2 Type II och SSO, med en stor etablerad användarbas",
      "Gransknings- och återkopplingsflöden anpassade för coachningsscenarier, där en rådgivare itererar på en kandidats CV",
    ],
    whereMagicCvDiffers: [
      "Optimerar för en mänsklig utvärderare som läser mot ett underlag: AI:n tolkar RFP:n och formar om varje konsults CV kring dess faktiska krav",
      "Hanterar bolagets konsultstyrka, inte individuella jobbsökningar: strukturerade profiler, kompetenssökning och CV-paket sammansatta per anbud",
      "EU-upphandlingsverktygen inbyggda: avidentifierade CV:n med ett klick, översättning till vilket språk som helst med layouten kvar, datalagring i EU, GDPR-by-design",
      "Enkel teamprissättning: Free att testa, $50/månad Pro för 200 profiler - inget white label- eller institutionsavtal behövs",
    ],
    rows: [
      { category: "Vem läser resultatet", magiccv: "Kundens utvärderare och upphandlingspaneler", competitor: "ATS-mjukvara, sedan rekryterare" },
      { category: "Optimeringsmål", magiccv: "Underlagets krav och poängkriterier", competitor: "ATS-nyckelord från jobbannonsen" },
      { category: "Typisk köpare", magiccv: "Konsult-, IT-tjänste- och professionella tjänstebolag", competitor: "Universitet, karriärcenter, CV-tjänster" },
      { category: "Utrullning", magiccv: "Teamarbetsyta, självbetjäning", competitor: "Direkt eller via white label-program" },
      { category: "Upphandlingsfunktioner", magiccv: "Avidentifierade CV:n, CV-paket, flerspråkig export", competitor: "Inte användningsfallet" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Publika nivåer per plats" },
    ],
    guidance:
      "Rullar ni ut en CV-byggare till en population av jobbsökare - studenter, alumner, omställningsklienter - är Rezi ett starkt, meriterat val och MagicCV spelar inte där. Är ni ett bolag vars CV:n går in i anbud med er logotyp på omslaget är ATS-nyckelord helt fel optimering; ni behöver underlagsanpassning, avidentifierade CV:n och paketsammansättning. Välj efter vem som läser dokumentet, inte efter vilket verktyg som säger 'AI'.",
    faqs: [
      {
        question: "Optimerar MagicCV CV:n för ATS som Rezi gör?",
        answer:
          "Nej, avsiktligt. Anbuds-CV:n läses av kundens utvärderare mot ett underlag, inte tolkas av rekryteringsmjukvara. MagicCV optimerar för den läsaren: AI:n läser RFP:n och omprioriterar varje CV kring dess krav.",
      },
      {
        question: "Rezi marknadsför SOC 2 Type II. Var står MagicCV på efterlevnad?",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, granskningsloggar samt SSO plus ett personuppgiftsbiträdesavtal (DPA) på Enterprise-planen. SOC 2 är pågående, inte klar än - är en färdig SOC 2-rapport en hård spärr i dag, väg in det ärligt i er tidplan.",
      },
      {
        question: "Kan våra konsulters Rezi-CV:n importeras i MagicCV?",
        answer:
          "Ja. Exportera dem som PDF eller DOCX och importera i MagicCV - varje blir en strukturerad profil sökbar på kompetenser, sektorer, språk och certifieringar.",
      },
      {
        question: "Erbjuder MagicCV white label-utrullning?",
        answer:
          "Nej. MagicCV är en teamarbetsyta för bolag som hanterar sin egen konsultstyrka, inte en plattform att märka om åt tredje part. Är white label kravet - karriärtjänster, CV-företag - är Rezi byggd för exakt det.",
      },
      {
        question: "Vi är ett IT-tjänstebolag, inte ett karriärcenter. Varför skulle vi ha kortlistat Rezi?",
        answer:
          "Oftast för att sökningar på 'AI-CV-byggare' visar den först. Utvärderingsfrågan som skiljer kategorierna åt: kan den läsa en RFP-bilaga på 40 sidor och forma om 8 konsult-CV:n kring den till torsdag? Det är jobbet MagicCV är byggd för.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Rezi - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Rezi: CV:n för konsultanbud kontra white label-CV-byggande med ATS-fokus.",
      keywords: ["Rezi-alternativ", "Rezi enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "neobrain",
    competitorName: "Neobrain",
    h1: "MagicCV vs Neobrain: HR-kompetensplattform eller anbudsklara CV:n?",
    sub: "Neobrain kartlägger kompetens för intern HR-strategi. MagicCV förvandlar konsulterfarenhet till kundvända CV:n. De delar ordet 'kompetens' och nästan ingenting annat.",
    whereCompetitorWins: [
      "Kompetensbaserad talanghantering på enterprise-nivå: kompetenskartläggning, intern rörlighet och strategisk personalplanering i organisationsskala",
      "Moduler för karriärutveckling och prestation med HRIS-integrationer, byggda för HR-team som driver kompetensomställningar",
      "Rätt verktyg när frågan är 'vilka kompetenser har och behöver vår personalstyrka' snarare än 'vilket CV går in i det här anbudet'",
      "Etablerad hos stora organisationer, särskilt i Frankrike",
    ],
    whereMagicCvDiffers: [
      "Producerar artefakten kunderna faktiskt ser: varumärkesanpassade konsult-CV:n och anbudspaket, skräddarsydda per RFP av AI som läser underlaget",
      "Köpare och tidslinje matchar anbudsarbetet: självbetjäning, publik prissättning från $0, första skräddarsydda CV:t ut samma dag - inget HR-transformationsprogram krävs",
      "Anonymisering med ett klick och översättning till vilket språk som helst med layouten kvar, för EU-upphandlingar och ramavtal",
      "Kompetenssökning ingår på arbetsnivå: hitta varje konsult med SAP, franska och energibranschserfarenhet på sekunder",
    ],
    rows: [
      { category: "Kategori", magiccv: "Kundvänt CV- och anbudsarbetsflöde", competitor: "Intern kompetens- och talanghanteringsplattform" },
      { category: "Primär köpare", magiccv: "Anbudsansvariga, ops-ledare, bemanningsteam", competitor: "HR-chefer och ledare för HR-transformation" },
      { category: "Kärnresultat", magiccv: "Skräddarsydda, varumärkesanpassade CV:n och CV-paket", competitor: "Kompetenskartor, rörlighetsvägar, personalplaner" },
      { category: "Tid till värde", magiccv: "Samma dag, självbetjäning", competitor: "Vanligen ett enterprise-program med stegvis utrullning" },
      { category: "Kompetensdatans roll", magiccv: "Extraherad ur CV:n för att driva sökning och skräddarsyende", competitor: "Själva produkten - förvaltad som strategisk data" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Enterprise, offertbaserad" },
    ],
    guidance:
      "De här verktygen besvarar olika frågor. Behöver er organisation kartlägga personalstyrkans kompetens, planera omskolning och driva intern rörlighet är Neobrain byggd för den skalan av HR-problem. Behöver ert anbudsteam upphandlingsklara konsult-CV:n till torsdag producerar ingen kompetensplattform dem - det är MagicCV:s jobb. Större bolag kör ibland båda; de överlappar inte nog för att krocka.",
    faqs: [
      {
        question: "Är Neobrain faktiskt en konkurrent till MagicCV?",
        answer:
          "Bara i kanterna. Neobrain är en intern kompetens- och talangplattform för HR; MagicCV producerar kundvända CV:n för anbud. Landade båda på er kortlista blandade utvärderingen förmodligen ihop två olika projekt.",
      },
      {
        question: "Gör inte MagicCV också kompetenshantering?",
        answer:
          "På arbetsnivå, ja: importen av CV:n bygger en kompetensmatris ni kan söka i på kompetens, sektor, språk och certifiering. Vad den inte gör är strategisk personalplanering, rörlighetsprogram eller kompetensgapsanalys - det är genuint Neobrains territorium.",
      },
      {
        question: "Skulle vi kunna använda Neobrains data för att bygga anbuds-CV:n?",
        answer:
          "Kompetensplattformar beskriver människor; de producerar vanligen inte upphandlingsklara dokument i er mall, anonymiserade och översatta. Bolag med båda behoven exporterar CV:n och importerar dem i MagicCV - Word- och PDF-import betyder inget integrationsprojekt.",
      },
      {
        question: "Vilken är snabbast att få värde ur?",
        answer:
          "Helt olika skalor. MagicCV är självbetjäning: CV:n importerade och den första skräddarsydda exporten samma dag, $50/månad på Pro-nivån. En enterprise-kompetensplattform är vanligen ett program - månader av utrullning med HRIS-integration - eftersom den löser ett organisationsomfattande problem.",
      },
      {
        question: "Vi är i mellansegmentet. Behöver vi någon av dem?",
        answer:
          "Är anbuds-CV:n smärtan löser MagicCV den till mellansegmentets pris och insats. En komplett kompetenstransformationsplattform tjänar oftast in sin kostnad vid enterprise-personalstyrkor; under det täcker kompetensmatrisen MagicCV bygger från era CV:n ofta det mellansegmentsteam faktiskt använder.",
      },
    ],
    related: [
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "För HR / People Ops-team", href: "/solutions/hr" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Neobrain - ärlig jämförelse",
      description: "Hur MagicCV står sig mot Neobrain: kundvända anbuds-CV:n kontra kompetens- och talanghantering på enterprise-nivå.",
      keywords: ["Neobrain-alternativ", "Neobrain vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "techwolf",
    competitorName: "TechWolf",
    h1: "MagicCV vs TechWolf: kompetensinfrastruktur eller CV:n ni kan skicka?",
    sub: "TechWolf härleder kompetensdata åt enorma företag. MagicCV producerar de skräddarsydda CV:n ert anbud går ut med. Olika lager av stacken, sällan ett verkligt antingen/eller.",
    whereCompetitorWins: [
      "Kompetensintelligensinfrastruktur som härleder kompetenser automatiskt från arbetssignaler, i stället för att förlita sig på självrapporterad data",
      "Integrerar med de stora HCM-systemen som Workday och SAP SuccessFactors, byggd för att fungera i mycket stor enterprise-skala",
      "Det starkaste alternativet när målet är kontinuerlig, automatiserad kompetensdata över en personalstyrka på tiotusentals",
      "En infrastruktursatsning: andra HR-system blir smartare för att TechWolf matar dem",
    ],
    whereMagicCvDiffers: [
      "Lever i utdatalagret: förvandlar konsultprofiler till kundklara, varumärkesanpassade CV:n, skräddarsydda per RFP av AI som läser underlaget",
      "Dimensionerad för medelstora bolag: självbetjänad uppsättning samma dag, publik prissättning från $0 med Pro för $50/månad",
      "Levererar anbudsteamets verktygslåda - chattredigering, avidentifierade CV:n med ett klick, översättning som behåller layouten, anbudsklara CV-paket",
      "Behöver ingen HCM-integration för att börja: importera Word-, PDF- eller LinkedIn-CV:n så bygger profilerna sig själva",
    ],
    rows: [
      { category: "Lager", magiccv: "Utdata: dokument kunder ser", competitor: "Infrastruktur: kompetensdata som matar HR-system" },
      { category: "Kärnresultat", magiccv: "Skräddarsydda, varumärkesanpassade CV:n och anbudspaket", competitor: "Kontinuerligt härledda kompetensprofiler i HCM-system" },
      { category: "Typisk kund", magiccv: "Konsult- och tjänstebolag, 10-250 personer", competitor: "Mycket stora företag, ofta 10 000+ anställda" },
      { category: "Uppsättning", magiccv: "Självbetjäning, importera CV:n, resultat samma dag", competitor: "Enterprise-integrationsprojekt med HCM-system" },
      { category: "Köpare", magiccv: "Anbuds-, ops- och bemanningsansvariga", competitor: "Enterprise-ledning inom HR och IT" },
      { category: "Prissättning", magiccv: "Publik: Free, $50/mån Pro", competitor: "Enterprise, offertbaserad" },
    ],
    guidance:
      "Är ni en enterprise-HR-ledare som behöver pålitlig, kontinuerligt uppdaterad kompetensdata som flödar in i Workday över 50 000 anställda är TechWolf byggd exakt för det och MagicCV är det inte. Är ni ett konsultbolag som behöver 8 skräddarsydda, anonymiserade CV:n på kundens språk till torsdag producerar kompetensinfrastruktur dem inte - det gör MagicCV. De flesta läsare av den här sidan behöver dokumentet, inte datalagret.",
    faqs: [
      {
        question: "Härleder MagicCV kompetenser från arbetsaktivitet som TechWolf?",
        answer:
          "Nej - det är TechWolfs specialitet och ett genuint svårt problem i enterprise-skala. MagicCV extraherar kompetenser ur de CV:n ni importerar, vilket passar bra i mellansegmentsstorlek där konsultstyrkan är hundratals personer, inte tiotusentals.",
      },
      {
        question: "Skulle TechWolfs kompetensdata kunna generera våra anbuds-CV:n?",
        answer:
          "TechWolf producerar kompetensdata för HR-system, inte kundvända dokument; ni skulle fortfarande behöva något som skriver, varumärker, anonymiserar och översätter CV:t. Det utdatalagret är MagicCV:s hela produkt.",
      },
      {
        question: "Vi är 80 konsulter. Är TechWolf ens relevant för oss?",
        answer:
          "Förmodligen inte - dess modell är byggd kring HCM-integration och personalskala för stora företag. Vid 80 personer levererar MagicCV:s angreppssätt - tolka CV:na ni har till sökbara profiler - de praktiska fördelarna med kompetensöversikt utan ett infrastrukturprojekt.",
      },
      {
        question: "Skulle ett stort bolag kunna använda båda?",
        answer:
          "Ja, i olika lager: TechWolf håller enterprise-kompetensdatan aktuell i HCM-systemet, MagicCV producerar skräddarsydda anbuds-CV:n för konsultgrenen. MagicCV importerar Word- och PDF-CV:n direkt, så ingenting i att köra båda kräver integrationsarbete.",
      },
      {
        question: "Vad kostar MagicCV jämfört med en enterprise-kompetensplattform?",
        answer:
          "MagicCV publicerar priser: Free (10 profiler, 30 CV:n), Pro för $50/månad (200 profiler, 600 CV:n), anpassad Enterprise med SSO och ett personuppgiftsbiträdesavtal (DPA). Enterprise-kompetensinfrastruktur är en helt annan budgetkategori - vanligen ett sexsiffrigt, offertbaserat åtagande dimensionerat efter personalstyrkan.",
      },
    ],
    related: [
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Jämförelseöversikt", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - ärlig jämförelse",
      description: "Hur MagicCV står sig mot TechWolf: kundvända anbuds-CV:n kontra kompetensintelligens på enterprise-nivå.",
      keywords: ["TechWolf-alternativ", "TechWolf vs MagicCV"],
    },
  },
];
