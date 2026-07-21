import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase",
    sub: "En ärlig jämförelse för CV- och anbudshantering i konsultbolag.",
    whereCompetitorWins: [
      "Stark varumärkeskännedom på marknaden",
      "Genomarbetad, mogen UX byggd under många år",
      "Etablerade enterprise-kunder och kundcase",
      "Etablerade arbetsflöden för anbudsgenerering",
    ],
    whereMagicCvDiffers: [
      "RFP-till-CV-resonemang som utgår från underlaget, inte från en mall",
      "Publik, självbetjänad prissättning - ingen demospärr för att se kostnaden",
      "Byggd för medelstora bolag, inte enterprise-först",
      "I drift på ungefär en vecka, inte en utrullning som tar ett kvartal",
      "EU-native: flerspråkighet, GDPR-by-design och anonymisering inbyggt",
    ],
    rows: [
      { category: "Utgångspunkt", magiccv: "Resonerar utifrån RFP-underlaget", competitor: "Mallbaserad CV-formatering" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Kräver demo" },
      { category: "Målgruppens storlek", magiccv: "Mellansegment (10-250 anställda)", competitor: "Enterprise-orienterad" },
      { category: "Typisk tid till drift", magiccv: "Ungefär en vecka", competitor: "Längre utrullning i enterprise-stil" },
      { category: "Flerspråkighet", magiccv: "5+ EU-språk", competitor: "Varierar" },
      { category: "Anonymisering", magiccv: "Inbyggd, ett klick", competitor: "Varierar" },
    ],
    guidance:
      "Behöver ni upphandlingsklara enterprise-avtal och en lång implementation? Då passar Flowcase. Vill ni vara i drift på en vecka och utgå från en verklig RFP? MagicCV.",
    faqs: [
      {
        question: "Är MagicCV en direkt ersättare för Flowcase?",
        answer:
          "För medelstora bolag som vill komma igång snabbt med anbuds-CV:n utan en utrullning i enterprise-skala, ja. Större bolag med mer komplexa inköpsbehov kan fortfarande föredra Flowcases meritlista inom enterprise.",
      },
      {
        question: "Kan jag prova MagicCV utan ett säljsamtal?",
        answer: "Ja - prissättningen är publik och det finns en gratisplan (10 profiler, 30 CV:n), så ni kan börja utan att boka en demo.",
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
    h1: "MagicCV vs Cinode",
    sub: "En ärlig jämförelse för CV- och resurshantering i konsultbolag.",
    whereCompetitorWins: [
      "Bred svit: CV-hantering, kompetens, sälj och resursplanering i en plattform",
      "Stark närvaro i Norden",
      "Blir djupt förankrad och svår att byta ut när den väl är fullt utrullad",
    ],
    whereMagicCvDiffers: [
      "Skarpare fokus: CV-för-RFP gjort bättre än någon enskild modul i en bredare svit",
      "Snabbare driftsättning",
      "Lägre kostnad och lägre byteskostnad",
      "Publik, självbetjänad prissättning",
    ],
    rows: [
      { category: "Omfattning", magiccv: "Fokuserad: RFP-till-CV-arbetsflödet", competitor: "Bred svit: CV + kompetens + sälj + resursplanering" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
      { category: "Tid till driftsättning", magiccv: "Ungefär en vecka", competitor: "Längre utrullning av hela sviten" },
      { category: "Regional styrka", magiccv: "Hela EU, flerspråkig", competitor: "Stark i Norden" },
      { category: "Byteskostnad", magiccv: "Låg - ett smalt, kompletterande verktyg", competitor: "Högre när den väl är fullt förankrad" },
    ],
    guidance:
      "Ska ni byta ut HRIS, CRM och resursplanering på en gång? Cinode. Vill ni fixa anbuden först och behålla era övriga verktyg? MagicCV.",
    faqs: [
      {
        question: "Ersätter MagicCV resursplanering eller ett CRM?",
        answer:
          "Nej - MagicCV är fokuserad specifikt på RFP-till-CV-arbetsflödet. Behöver ni en bredare svit som täcker resursplanering och sälj har Cinode ett vidare omfång.",
      },
      {
        question: "Kan MagicCV och Cinode användas sida vid sida?",
        answer:
          "Vissa bolag använder MagicCV specifikt för anbuds-CV:n och behåller en bredare plattform för resursplanering - det beror på hur mycket av sviten ni faktiskt använder i dag.",
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
    h1: "MagicCV vs Sprint CV",
    sub: "En ärlig jämförelse av CV-verktyg för konsult- och bemanningsbolag.",
    whereCompetitorWins: [
      "Produkt fokuserad på konsult- och bemanningsbranschen",
      "Gedigen CV-tolkning och gedigna mallar",
      "Stark närvaro på Iberiska halvön",
    ],
    whereMagicCvDiffers: [
      "AI-native arkitektur byggd kring RFP-resonemang, inte bara tolkning",
      "Publik prissättning",
      "Snabbare iteration och högre tempo i roadmapen",
      "Bredare täckning av EU-språk",
    ],
    rows: [
      { category: "Kärnmotor", magiccv: "AI-native RFP-resonemang", competitor: "CV-tolkning och mallar" },
      { category: "Regional styrka", magiccv: "Hela EU", competitor: "Stark på Iberiska halvön" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
      { category: "Språktäckning", magiccv: "5+ EU-språk", competitor: "Varierar" },
    ],
    guidance:
      "Verkar ni främst på Iberiska halvön? Då är Sprint CV ett respektabelt val. Vill ni ha bredare stöd för EU-språk och AI-native RFP-resonemang? MagicCV.",
    faqs: [
      {
        question: "Är Sprint CV ett dåligt val?",
        answer:
          "Nej - det är en gedigen, fokuserad produkt, särskilt för bolag som främst verkar på Iberiska halvön. MagicCV:s fördel är bredare täckning av EU-språk och RFP-till-CV-resonemang snarare än malltolkning.",
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
    h1: "MagicCV vs CuViBox",
    sub: "En ärlig jämförelse för hantering av konsult-CV:n.",
    whereCompetitorWins: ["Gedigen, etablerad CV-hanterare", "Mogen mallmotor"],
    whereMagicCvDiffers: [
      "AI-native: resonerar kring RFP:n först, i stället för en mallmotor med AI påklistrad ovanpå",
      "Modell för mellansegmentet, med självbetjäning",
    ],
    rows: [
      { category: "Angreppssätt", magiccv: "AI-native, resonerar utifrån underlaget", competitor: "Mallmotor, AI som tillägg" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
      { category: "Målgruppens storlek", magiccv: "Mellansegment (10-250 anställda)", competitor: "Varierar" },
    ],
    guidance:
      "Nöjda med ett mallbaserat arbetsflöde med lite AI-stöd ovanpå? Då är CuViBox ett etablerat alternativ. Vill ni att AI-resonemanget ska vara utgångspunkten, inte ett tillägg? MagicCV.",
    faqs: [
      {
        question: "Vad är den praktiska skillnaden mellan 'AI-native' och 'AI-assisterad'?",
        answer:
          "MagicCV utgår från RFP:n och resonerar kring vilken erfarenhet som är avgörande innan den rör en mall. Mallbaserade verktyg utgår från ett CV-format och använder AI för att fylla i det - underlaget kommer i andra hand.",
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
    h1: "MagicCV vs Napta",
    sub: "En ärlig jämförelse för CV- och resurshantering i konsultbolag.",
    whereCompetitorWins: [
      "Bred plattform för resurshantering och bemanning",
      "CV-generering är en modul i en större produkt",
    ],
    whereMagicCvDiffers: [
      "Skarpt fokus specifikt på CV-för-RFP",
      "Snabbare att driftsätta",
      "AI-native RFP-resonemang",
    ],
    rows: [
      { category: "Omfattning", magiccv: "Fokuserad: CV-för-RFP", competitor: "Bred svit för resurshantering" },
      { category: "Tid till driftsättning", magiccv: "Ungefär en vecka", competitor: "Längre utrullning av hela plattformen" },
      { category: "Kärnmotor", magiccv: "AI-native RFP-resonemang", competitor: "Mallbaserad" },
    ],
    guidance: "Behöver ni en komplett svit för resurshantering? Napta. Vill ni fixa anbuds-CV:na först och vara igång på dagar, inte månader? MagicCV.",
    faqs: [
      {
        question: "Gör MagicCV resursplanering som Napta?",
        answer:
          "Nej - MagicCV är fokuserad specifikt på RFP-till-CV-arbetsflödet. Behöver ni bredare resurshantering har Napta ett vidare omfång.",
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
    h1: "MagicCV vs SharePoint + Word",
    sub: "Den verkliga kostnaden för att inte göra något.",
    whereCompetitorWins: ["Noll direkt mjukvarukostnad", "Ingen inlärningströskel", "Bekant för alla i teamet"],
    whereMagicCvDiffers: [
      "Tar bort den dolda kostnaden i timmar per vecka för manuell CV-jakt och omformatering",
      "Enhetliga, varumärkesanpassade underlag i stället för att versionerna glider isär",
      "Slut på paniken i sista minuten före deadline",
      "Färre ospårade, förlorade RFP:er på grund av CV:n som inte hann fram i tid",
    ],
    rows: [
      { category: "Direkt kostnad", magiccv: "Transparent månadsplan", competitor: "0 € i direkt kostnad" },
      { category: "Tid per CV-paket", magiccv: "Ungefär 15 minuter", competitor: "Timmar per RFP, varje gång" },
      { category: "Enhetlighet", magiccv: "Samma varumärkesmall varje gång", competitor: "Glider isär beroende på vem som formaterar" },
      { category: "Deadlinerisk", magiccv: "Byggd för snabb vändning", competitor: "Panik i sista minuten är vanligt" },
    ],
    guidance:
      "SharePoint och Word kostar inget i licens - men timmarna som går åt till att jaga, formatera om och stressa före deadline är en verklig, återkommande kostnad. Använd kalkylatorn nedan för att se vad det sannolikt kostar ert team.",
    faqs: [
      {
        question: "Är inte 'gratis' alltid billigare än ett betalt verktyg?",
        answer:
          "Bara om ni inte räknar tidskostnaden. Timmarna per RFP som går åt till att jaga och formatera om CV:n summerar sig - ofta till mer än vad en MagicCV-plan kostar per månad. ROI-kalkylatorn på den här sidan och på prissidan går igenom matematiken med era egna siffror.",
      },
      {
        question: "Vi har redan ett system med delade enheter som mestadels fungerar - varför byta?",
        answer:
          "Om det verkligen fungerar utan förlorade RFP:er, inkonsekvens eller stress kanske ni inte behöver byta. De flesta team som utvärderar MagicCV gör det för att minst en av de smärtorna redan kostar dem tid eller affärer.",
      },
    ],
    related: [
      { label: "Priser", href: "/pricing" },
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
    h1: "MagicCV vs CVGate",
    sub: "En ärlig jämförelse för CV- och anbudshantering i konsultbolag.",
    whereCompetitorWins: [
      "Fokuserad på CV-hantering för konsulter/anbud, ett näraliggande användningsområde",
      "Transparenta, publika prisnivåer",
      "Kompetensbaserad sökning, CRM/kontakthantering och anbudsverktyg på ett ställe",
      "Visnings- och åtgärdsstatistik på delade CV:n",
    ],
    whereMagicCvDiffers: [
      "AI-native: formar om varje CV kring ett underlag eller en kund, inte bara mallformatering",
      "Anonymisering och flerspråkiga underlag inbyggt för EU-upphandlingar",
      "Bredare konsultprofilhantering som den enda sanningskällan",
    ],
    rows: [
      { category: "Kategori", magiccv: "AI-native CV-generering + hantering", competitor: "CV-hantering + anbudsverktyg" },
      { category: "Anpassning till underlag", magiccv: "Resonerar utifrån underlaget", competitor: "Mallbaserad" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Publika prisnivåer" },
      { category: "Anonymisering", magiccv: "Inbyggd, ett klick", competitor: "Varierar" },
      { category: "Flerspråkighet", magiccv: "5+ EU-språk", competitor: "Varierar" },
    ],
    guidance:
      "CVGate är ett gediget val med transparent prissättning för att centralisera CV:n och snabba upp anbud. Vill ni dessutom ha AI som formar om varje CV kring underlaget, plus inbyggd anonymisering och flerspråkiga underlag för EU-upphandlingar, går MagicCV längre.",
    faqs: [
      {
        question: "Är CVGate ett rimligt alternativ till MagicCV?",
        answer:
          "Ja - det är genuint fokuserat på CV- och anbudshantering för konsultbolag, med publik prissättning. Den största skillnaden är MagicCV:s AI-native anpassning och dess EU-native anonymisering och flerspråkiga underlag.",
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
    h1: "MagicCV vs CV-Transformer",
    sub: "En ärlig jämförelse för CV-formatering och CV-hantering.",
    whereCompetitorWins: [
      "Stark på automatisk CV-formatering till varumärkesanpassade, standardiserade mallar",
      "CV-anonymisering och stöd för 14 språk",
      "ATS-integrationer (Greenhouse, JobAdder, Salesforce med flera), lagring inom EU",
      "Snabb omformatering i höga volymer för bemanning och rekrytering",
    ],
    whereMagicCvDiffers: [
      "Utgår från underlaget och formar om vilken erfarenhet som ska lyftas fram - inte bara omformatering",
      "Centraliserade, alltid aktuella konsultprofiler som sanningskälla",
      "Byggd kring konsultbolagets anbudsarbetsflöde, med publik självbetjänad prissättning",
    ],
    rows: [
      { category: "Kärnuppgift", magiccv: "Resonemang + generering + hantering", competitor: "Omformatering till en varumärkesmall" },
      { category: "Anpassning till underlag", magiccv: "Resonerar utifrån underlaget", competitor: "Omformaterar, omprioriterar inte" },
      { category: "Anonymisering", magiccv: "Inbyggd", competitor: "Inbyggd" },
      { category: "Språk", magiccv: "5+ EU-språk", competitor: "14 språk" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Krediter / månadsvis (testperiod finns)" },
    ],
    guidance:
      "Är ert främsta behov att omvandla inkommande kandidat-CV:n till ett enhetligt varumärkesformat i volym, är CV-Transformer stark och integrerar med de stora ATS:erna. Vill ni att verktyget ska resonera kring underlaget och hantera konsultprofiler över tid, är det MagicCV:s fokus.",
    faqs: [
      {
        question: "Vad är kärnskillnaden?",
        answer:
          "CV-Transformer utmärker sig på att omformatera CV:n till en standardiserad varumärkesmall. MagicCV lägger till RFP-till-CV-resonemang och löpande profilhantering ovanpå varumärkesanpassad export.",
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
    h1: "MagicCV vs CV Converter",
    sub: "En ärlig jämförelse av verktyg för CV-formatering.",
    whereCompetitorWins: [
      "Mycket enkelt: ladda upp en Google Docs-mall och konvertera kandidat-CV:n så att de matchar",
      "Transparent, låg pay-as-you-go-prissättning med gratis testperiod",
      "Bevarar er mallstruktur och ert varumärke, ingen datalagring hos leverantören",
      "Utmärkt för volymrekrytering och RPO-formatering",
    ],
    whereMagicCvDiffers: [
      "Gör resonemanget, inte bara formateringen - formar om CV:n kring ett underlag eller en kund",
      "Centraliserade konsultprofiler som hålls aktuella över tid",
      "Anonymisering, flerspråkiga underlag och anbudspaket för konsultanbud inom EU",
    ],
    rows: [
      { category: "Omfattning", magiccv: "Hantera, skräddarsy, generera, exportera", competitor: "Enbart formatkonvertering" },
      { category: "Sanningskälla", magiccv: "Strukturerade profiler per konsult", competitor: "Konvertering per fil" },
      { category: "Anpassning till underlag", magiccv: "Resonerar utifrån underlaget", competitor: "Inte fokus" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Publik, per konvertering / månadsvis" },
    ],
    guidance:
      "CV Converter är ett smidigt, billigt sätt att standardisera CV-formatering i volym. Är formatering verkligen allt ni behöver är den svårslagen på enkelhet. Vill ni ha profilhantering och underlagsdriven anpassning är MagicCV det bredare verktyget.",
    faqs: [
      {
        question: "Är CV Converter billigare än MagicCV?",
        answer:
          "För ren formatering per fil kan dess pay-as-you-go-prissättning vara mycket låg. MagicCV täcker ett bredare arbetsflöde - profilhantering, anpassning, anonymisering, flerspråkiga paket - så de två löser olika omfång.",
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
    h1: "MagicCV vs MuchSkills CV Inventory",
    sub: "En ärlig jämförelse för kompetensdrivna konsult-CV:n.",
    whereCompetitorWins: [
      "Genererar CV:n från verifierad, levande kompetensdata i MuchSkills databas",
      "Stark versionshantering och granskningsspår för varje CV",
      "Hanterar intern personal och externa konsulter tillsammans",
      "Djup kompetenstaxonomi (tusentals certifieringar, tekniska kompetenser, förmågor)",
    ],
    whereMagicCvDiffers: [
      "Arbetar utifrån era befintliga profiler och CV:n - ni behöver inte först införa en separat kompetensdataprodukt",
      "RFP-till-CV-resonemang som omprioriterar verklig erfarenhet för varje underlag",
      "EU-native anonymisering och flerspråkiga underlag för upphandlingar, med publik självbetjänad prissättning",
    ],
    rows: [
      { category: "Datamodell", magiccv: "Strukturerade profiler från era CV:n/HRIS", competitor: "Driven av kompetensdatabas" },
      { category: "Anpassning till underlag", magiccv: "Resonerar utifrån underlaget", competitor: "Matchar på kompetensdata" },
      { category: "Versionshantering", magiccv: "Ja", competitor: "Ja, med granskningsspår" },
      { category: "Anonymisering / flerspråkighet", magiccv: "Inbyggd", competitor: "Varierar" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
    ],
    guidance:
      "Om ni redan kör (eller vill införa) MuchSkills som ert kompetenssystem är dess CV Inventory en naturlig förlängning med utmärkt kompetensdata. Vill ni hellre generera starka, underlagsanpassade CV:n från de profiler och CV:n ni redan har, tar MagicCV er dit utan att ni först behöver sätta upp en separat kompetensplattform.",
    faqs: [
      {
        question: "Behöver jag en kompetensdatabas för att använda MagicCV?",
        answer:
          "Nej. MagicCV bygger strukturerade profiler från era befintliga CV:n (och HRIS på roadmapen). MuchSkills CV Inventory är byggd kring sin kompetensdatabas, vilket är kraftfullt om den redan är ert huvudsystem.",
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
    h1: "MagicCV vs SprintCV Enterprise CV Manager",
    sub: "En ärlig jämförelse för CV-hantering i konsultbolag på enterprise-nivå.",
    whereCompetitorWins: [
      "CV-hantering i enterprise-klass med gedigen tolkning och gedigna mallar",
      "Fokuserad på konsult- och bemanningsbranschen, etablerad på Iberiska halvön",
      "Mogna funktioner för administration och teamhantering för större bolag",
    ],
    whereMagicCvDiffers: [
      "AI-native arkitektur byggd kring RFP-resonemang, inte tolkning och mallar",
      "Publik, självbetjänad prissättning och snabb tid till värde för medelstora bolag",
      "Bredare täckning av EU-språk, anonymisering inbyggd",
    ],
    rows: [
      { category: "Kärnmotor", magiccv: "AI-native RFP-resonemang", competitor: "Tolkning + mallar" },
      { category: "Målgruppens storlek", magiccv: "Mellansegment (10-250)", competitor: "Enterprise-orienterad" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
      { category: "Regional styrka", magiccv: "Hela EU", competitor: "Stark på Iberiska halvön" },
    ],
    guidance:
      "För ett större enterprise-bolag som vill ha en mogen, administrationstung CV-hanterare är SprintCV:s enterprise-produkt värd en titt. För medelstora bolag som vill vara i drift på en vecka med AI-native anpassning och publik prissättning passar MagicCV bättre.",
    faqs: [
      {
        question: "Hur skiljer sig detta från er jämförelse med Sprint CV?",
        answer:
          "Det är samma leverantörs enterprise-erbjudande för CV-hantering. Slutsatserna är likartade: MagicCV:s fördel är AI-native resonemang, publik prissättning och snabb tid till värde för mellansegmentet.",
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
    h1: "MagicCV vs Enhancv",
    sub: "En ärlig jämförelse av CV-byggare.",
    whereCompetitorWins: [
      "Utmärkt, genomarbetad CV-byggare med 40+ mallar",
      "Import med ett klick från LinkedIn/DOCX/PDF och matchning mot jobbannonser",
      "ATS-vänliga underlag och ett teambibliotek med eget varumärke",
      "Stark passform för rekryterings-, bemannings- och karriärcoachningsteam",
    ],
    whereMagicCvDiffers: [
      "Byggd för konsultanbud och uppdrag, inte CV:n för jobbsökare",
      "RFP-till-CV-resonemang och anbudsklara CV-paket, inte ATS-optimering av enskilda CV:n",
      "EU-native: anonymisering och flerspråkiga underlag för upphandlingar, GDPR-by-design",
    ],
    rows: [
      { category: "Primär användning", magiccv: "Konsult-CV:n för anbud/kunder", competitor: "CV:n för kandidater/jobbsökare" },
      { category: "Optimerad för", magiccv: "Kundens underlag", competitor: "ATS / jobbannonser" },
      { category: "CV-paket för anbud", magiccv: "Ja", competitor: "Inte fokus" },
      { category: "Anonymisering för upphandlingar", magiccv: "Inbyggd", competitor: "Inte fokus" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Publik" },
    ],
    guidance:
      "Enhancv är ett utmärkt val om ni producerar kandidat-CV:n - särskilt inom rekrytering och omställning där ATS-vänlighet är viktig. Går era CV:n in i konsultanbud och upphandlingar är MagicCV byggd för just det jobbet.",
    faqs: [
      {
        question: "Kan Enhancv göra CV:n för konsultanbud?",
        answer:
          "Den kan producera varumärkesanpassade, ATS-vänliga CV:n i skala. MagicCV är specialbyggd för konsultbranschen: underlagsdriven anpassning, anbudspaket, anonymisering och flerspråkiga underlag för anbud inom EU.",
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
    h1: "MagicCV vs VisualCV",
    sub: "En ärlig jämförelse av CV-byggare.",
    whereCompetitorWins: [
      "Etablerad CV-byggare med en företagsnivå för team",
      "Genomarbetade mallar, publicerade online-CV:n och visningsstatistik",
      "Bra för enhetliga, varumärkesanpassade CV:n i ett team",
    ],
    whereMagicCvDiffers: [
      "Konsultspecifik: formar om CV:n kring ett kundunderlag och sätter ihop anbudspaket",
      "Anonymisering och flerspråkiga underlag för EU-upphandlingar, GDPR-by-design",
      "Centraliserad konsultprofilhantering som sanningskälla",
    ],
    rows: [
      { category: "Primär användning", magiccv: "Konsult-CV:n för anbud/kunder", competitor: "CV:n / online-CV:n" },
      { category: "Anpassning till underlag", magiccv: "Resonerar utifrån underlaget", competitor: "Mallbaserad" },
      { category: "CV-paket för anbud", magiccv: "Ja", competitor: "Inte fokus" },
      { category: "Anonymisering / flerspråkighet", magiccv: "Inbyggd", competitor: "Varierar" },
    ],
    guidance:
      "VisualCV är en stark generell CV-byggare, även för team som vill ha enhetliga varumärkesanpassade CV:n. Handlar ert arbete om konsultanbud - anpassning till underlag, paket, upphandlingar - är MagicCV den mer specialiserade lösningen.",
    faqs: [
      {
        question: "Är VisualCV byggd för konsultanbud?",
        answer:
          "Den är en generell CV-byggare med teamfunktioner. MagicCV fokuserar specifikt på konsultbolagets anbudsarbetsflöde och kraven i EU-upphandlingar.",
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
    h1: "MagicCV vs Rezi",
    sub: "En ärlig jämförelse av AI-drivna CV-byggare.",
    whereCompetitorWins: [
      "Mogen AI-CV-byggare med white label-utrullning",
      "Stark ATS-nyckelordsoptimering och arbetsflöde för granskningshantering",
      "SOC 2 Type II, SSO och en stor användarbas",
      "Utmärkt passform för universitet, karriärcenter och CV-skrivartjänster",
    ],
    whereMagicCvDiffers: [
      "Konsultanbud, inte CV:n för jobbsökare eller ATS-optimering",
      "Underlagsdriven anpassning och anbudsklara CV-paket för kundinlämningar",
      "EU-native anonymisering och flerspråkiga underlag för upphandlingar",
    ],
    rows: [
      { category: "Primär användning", magiccv: "Konsult-CV:n för anbud/kunder", competitor: "CV:n för jobbsökare (white label)" },
      { category: "Optimerad för", magiccv: "Kundens underlag", competitor: "ATS-nyckelord" },
      { category: "Målgrupp", magiccv: "Konsult- och professionella tjänstebolag", competitor: "Universitet, karriärcenter, byråer" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Publik (nivåer per användare)" },
    ],
    guidance:
      "Rezi är ett starkt val om ni rullar ut en varumärkesanpassad CV-byggare till jobbsökare och bryr er om ATS-optimering. För konsultbolag som producerar kundvända CV:n och anbudspaket är MagicCV det bättre anpassade verktyget.",
    faqs: [
      {
        question: "Optimerar MagicCV CV:n för ATS som Rezi gör?",
        answer:
          "Nej - ATS-nyckelordsoptimering är en fråga för jobbsökare. MagicCV optimerar konsult-CV:n för kundens underlag och kraven i anbud och upphandlingar.",
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
    h1: "MagicCV vs Neobrain",
    sub: "En annan kategori - kompetens- och talanghantering kontra anbuds-CV:n.",
    whereCompetitorWins: [
      "Kompetensbaserad talanghantering på enterprise-nivå: kompetenskartläggning, intern rörlighet, personalplanering",
      "Moduler för prestation och karriärutveckling, HRIS-integrationer",
      "Stark passform för stora HR-organisationer som moderniserar kring kompetens",
    ],
    whereMagicCvDiffers: [
      "Producerar kundvända konsult-CV:n och anbudspaket - inte intern HR-planering",
      "Underlagsdriven anpassning, varumärkesanpassad export, anonymisering, flerspråkighet för upphandlingar",
      "I drift på en vecka med publik, självbetjänad prissättning",
    ],
    rows: [
      { category: "Kategori", magiccv: "Kundvända CV:n för anbud", competitor: "Intern kompetens- & talanghantering" },
      { category: "Primär köpare", magiccv: "Anbuds-, leverans- och resursansvariga", competitor: "HR / people-ledning" },
      { category: "Resultat", magiccv: "Varumärkesanpassade CV:n & anbudspaket", competitor: "Kompetenskartor, rörlighet, planering" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
    ],
    guidance:
      "Neobrain och MagicCV löser olika problem. Behöver ni kompetenskartläggning på enterprise-nivå och intern talangrörlighet är Neobrain byggd för det. Behöver ni omvandla konsultprofiler till kundklara CV:n och anbudspaket är det MagicCV. Vissa bolag använder båda.",
    faqs: [
      {
        question: "Är Neobrain en konkurrent till MagicCV?",
        answer:
          "Bara i kanterna. Neobrain är en kompetensbaserad HR- och talangplattform; MagicCV producerar kundvända CV:n för anbud. De kan vara kompletterande snarare än antingen/eller.",
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
    h1: "MagicCV vs TechWolf",
    sub: "En annan kategori - kompetensintelligens kontra anbuds-CV:n.",
    whereCompetitorWins: [
      "Infrastruktur för kompetensintelligens på enterprise-nivå som härleder kompetenser från arbetssignaler",
      "Integrerar med de stora HCM-systemen (Workday, SAP SuccessFactors) i mycket stor skala",
      "Bäst i klassen för kontinuerlig, automatiserad kompetensdata över enorma personalstyrkor",
    ],
    whereMagicCvDiffers: [
      "Omvandlar profiler till kundklara CV:n och anbudspaket - inte intern kompetensdata",
      "Underlagsdriven anpassning, varumärkesanpassad export, anonymisering, flerspråkighet för EU-upphandlingar",
      "Anpassad för mellansegmentet: i drift på en vecka, publik självbetjänad prissättning",
    ],
    rows: [
      { category: "Kategori", magiccv: "Kundvända CV:n för anbud", competitor: "Intern kompetensintelligens" },
      { category: "Resultat", magiccv: "Varumärkesanpassade CV:n & anbudspaket", competitor: "Kompetensdata i HR-system" },
      { category: "Skala", magiccv: "Medelstora konsultbolag", competitor: "Mycket stora företag (100k+ anställda)" },
      { category: "Prissättning", magiccv: "Publik, självbetjänad", competitor: "Inte publik" },
    ],
    guidance:
      "TechWolf är ett kraftfullt kompetensintelligenslager för stora företag - ett annat jobb än MagicCV:s. Vill ni ha automatiserad, kontinuerlig kompetensdata över en enorm personalstyrka: TechWolf. Vill ni ha kundklara konsult-CV:n och anbudspaket: MagicCV.",
    faqs: [
      {
        question: "Härleder MagicCV kompetenser från arbetsaktivitet som TechWolf gör?",
        answer:
          "Nej - det är TechWolfs specialitet. MagicCV arbetar utifrån konsultprofiler och CV:n för att producera kundvända dokument; de två verkar i olika lager av stacken.",
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
