import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-till-CV-resonemang",
    h1: "Det börjar med RFP:n, inte med en mall.",
    sub: "MagicCV läser underlaget, förstår vad som avgör vinsten och formar om varje CV därefter - det är skillnaden med AI-native.",
    whatItDoesBody:
      "Mallverktyg utgår från ett CV och hoppas att det passar underlaget. MagicCV utgår från RFP:n: den läser vinnarkriterierna, identifierar vilken erfarenhet som är relevant och lyfter fram den i varje konsults CV. Varje påstående går att spåra tillbaka till källprofilen - vi hittar inte på, vi omprioriterar. Ett valfritt konservativt läge ('do-not-generate') finns för situationer där en människa bör granska innan något skrivs.",
    benefits: [
      {
        title: "Läser underlaget som en anbudsansvarig skulle göra",
        body: "MagicCV analyserar RFP:n efter vinnarkriterier, efterfrågade kompetenser och utvärderingskriterier - samma saker som en erfaren anbudsansvarig letar efter först.",
        screenshotAlt: "RFP-till-CV-generering: analysvy för underlaget",
      },
      {
        title: "Omprioriterar, hittar aldrig på",
        body: "Varje mening i ett genererat CV går att spåra tillbaka till ett faktum i konsultens källprofil. Ingenting hittas på för att passa underlaget.",
        screenshotAlt: "RFP-till-CV-generering: spårbarhetsvy för påståenden",
      },
      {
        title: "Ett konservativt läge när ni vill ha en människa i loopen",
        body: "Aktivera do-not-generate-läget så flaggar MagicCV relevant erfarenhet för granskning i stället för att skriva CV:t direkt.",
        screenshotAlt: "RFP-till-CV-generering: reglage för konservativt läge",
      },
    ],
    connectsTo: [
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
    ],
    faqs: [
      {
        question: "Hittar MagicCV någonsin på erfarenhet som en konsult inte har?",
        answer:
          "Nej. RFP-till-CV-resonemanget omprioriterar och sorterar bara om verklig erfarenhet från konsultens källprofil. Varje påstående i ett genererat CV kan spåras tillbaka till den profilen.",
      },
      {
        question: "Tänk om jag vill att en person kontrollerar resultatet innan det används?",
        answer:
          "Aktivera det konservativa läget ('do-not-generate'). MagicCV visar då relevant erfarenhet och föreslagna betoningar för er granskning i stället för att automatiskt producera ett färdigt CV.",
      },
      {
        question: "Vad klistrar jag in - hela RFP:n eller en sammanfattning?",
        answer:
          "Klistra in underlaget i den form ni har det, oavsett om det är ett komplett RFP-dokument, en lista med utvärderingskriterier eller en kort sammanfattning. MagicCV plockar ut det den behöver ur det ni tillhandahåller.",
      },
    ],
    related: [
      { label: "Skräddarsy CV:n för varje underlag", href: "/use-cases/tailor-cvs" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "RFP-till-CV-resonemang - MagicCV:s AI-native motor",
      description:
        "MagicCV läser underlaget, förstår vad som avgör vinsten och formar om varje konsult-CV därefter - utan att hitta på erfarenhet.",
      keywords: ["AI CV för RFP", "RFP till CV verktyg"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Varumärkessäkrade exporter",
    h1: "Varje CV, perfekt i er grafiska profil.",
    sub: "Era typsnitt, färger och layouter - applicerade automatiskt på varje konsult-CV och anbudspaket.",
    whatItDoesBody:
      "Ställ in ert varumärke en gång - typsnitt, färger, logotypplacering, layout - så använder varje CV som MagicCV genererar det automatiskt. Exportera till PDF eller DOCX, och byt till kund- eller upphandlingsspecifika mallar när ett anbud kräver ett visst format, utan att röra den underliggande profildatan.",
    benefits: [
      {
        title: "En varumärkesmall, applicerad överallt",
        body: "Definiera företagets visuella identitet en gång. Varje konsult-CV och varje anbudspaket ärver den automatiskt - ingen manuell formatering per anbud.",
        screenshotAlt: "Redigerare för varumärkesmall med företagets logotyp och färger applicerade",
      },
      {
        title: "Kund- och upphandlingsspecifika format på begäran",
        body: "Behåll er egen stil som standard och byt till en kunds obligatoriska mall eller ett format för offentlig upphandling utan att bygga om något för hand.",
        screenshotAlt: "Mallväljare som visar egen stil jämfört med kundspecifikt format",
      },
      {
        title: "Exportera till PDF eller DOCX",
        body: "Generera inlämningsklara filer i det format er anbudsprocess faktiskt kräver.",
        screenshotAlt: "Exportdialog som visar PDF- och DOCX-alternativ",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Kan vi använda en annan mall för en specifik kund eller upphandling?",
        answer:
          "Ja. Sätt ert eget varumärke som standard och lägg till kund- eller upphandlingsspecifika mallar närhelst ett anbud kräver det, utan att röra den underliggande profildatan.",
      },
      {
        question: "Vilka exportformat stöds?",
        answer: "PDF och DOCX i dag, båda genererade från samma varumärkesanpassade mallsystem.",
      },
    ],
    related: [
      { label: "Design- & kreativa byråer", href: "/solutions/design-agencies" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Varumärkessäkrade CV-mallar & exporter - MagicCV",
      description:
        "Era typsnitt, färger och layouter appliceras automatiskt på varje konsult-CV och anbudspaket. Export till PDF och DOCX.",
      keywords: ["CV-mall med eget varumärke", "enhetliga konsult-CV:n"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonymisering & GDPR",
    h1: "Anonymisering inbyggd från start, inte påklistrad.",
    sub: "Avidentifierade CV:n med ett klick för upphandlingar och konkurrensutsatta anbud, med GDPR-by-design rakt igenom.",
    whatItDoesBody:
      "Aktivera anonymisering på vilket CV som helst för att ta bort namn, foton och andra identifierande uppgifter enligt regler ni själva styr - konsekvent, i hela teamet, varje gång. Byggd för blindutvärderingar och offentliga upphandlingar, och uppbackad av GDPR-by-design i hela datahanteringen. Se Trust Center för den fullständiga efterlevnadsbilden.",
    benefits: [
      {
        title: "Anonymisering med ett klick",
        body: "Ta bort identifierande uppgifter från vilket CV som helst med ett enda reglage - ingen manuell maskning, inga skillnader mellan konsulter.",
        screenshotAlt: "Anonymiseringsreglage som visar CV före och efter",
      },
      {
        title: "Regelstyrning över vad som tas bort",
        body: "Konfigurera exakt vilka fält som räknas som identifierande i er process, så att anonymiserade CV:n uppfyller kraven i den specifika upphandlingen eller utvärderingen.",
        screenshotAlt: "Konfigurationspanel för anonymiseringsregler",
      },
      {
        title: "Konsekvent i stor skala",
        body: "Varje anonymiserat CV följer samma regler, oavsett om det gäller en enskild inlämning eller ett komplett teampaket för en offentlig upphandling.",
        screenshotAlt: "Anonymiserat CV-paket för ett team med flera konsulter",
      },
    ],
    connectsTo: [
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Vad tas bort när ett CV anonymiseras?",
        answer:
          "Namn, foton och andra identifierande uppgifter tas bort enligt regler ni konfigurerar - byggt för att möta kraven i blindutvärderingar och offentliga upphandlingar.",
      },
      {
        question: "Är detta GDPR-kompatibelt?",
        answer:
          "Anonymisering är en del av MagicCV:s GDPR-by-design-ansats. Se Trust Center för den fullständiga bilden av datalagring, gallring och behandling.",
      },
    ],
    related: [
      { label: "Anonymisera CV:n", href: "/use-cases/anonymize-cvs" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "CV-anonymisering - anonymt CV med ett klick",
      description:
        "Anonyma CV:n för upphandlingar och fördomsfri utvärdering med ett klick - konsekvent i hela teamet, GDPR by design.",
      keywords: ["anonymt cv", "anonymiserat cv", "cv anonymisering"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Flerspråkighet & översättning",
    h1: "Lämna anbud på alla europeiska språk.",
    sub: "Generera professionella, varumärkesanpassade CV:n på EN, DE, FR, NL, ES med flera - från en enda masterprofil.",
    whatItDoesBody:
      "Underhåll en masterprofil per konsult och generera sedan korrekta, varumärkesanpassade CV:n på vilket språk som helst av de som stöds - inget omskrivande, inga separata dokument att hålla i synk. Täckningen omfattar i dag de centrala EU-språk som MagicCV:s medelstora konsultkunder oftast lämnar anbud på, med fler på väg.",
    benefits: [
      {
        title: "En masterprofil, många språk",
        body: "Underhåll en enda sanningskälla per konsult. Generera ett översatt, varumärkesanpassat CV på vilket språk som helst av de som stöds, närhelst ett anbud kräver det.",
        screenshotAlt: "Språkväljare som genererar ett CV på flera EU-språk",
      },
      {
        title: "Byggd för EU-upphandling",
        body: "Gränsöverskridande upphandlingar och flerspråkiga utvärderingspaneler är normalfallet för MagicCV:s kunder, inte ett undantag.",
        screenshotAlt: "Flerspråkigt CV-paket för en gränsöverskridande upphandling",
      },
      {
        title: "Jämn kvalitet på alla språk",
        body: "Samma varumärkesmall och samma underliggande fakta följer med i varje språkversion - ingenting glider isär mellan översättningarna.",
        screenshotAlt: "CV-jämförelse sida vid sida på två språk",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Vilka språk stöds i dag?",
        answer:
          "EN, DE, FR, NL och ES stöds i dag, vilket täcker de centrala språk som MagicCV:s medelstora europeiska kunder lämnar anbud på. Fler EU-språk finns på roadmapen.",
      },
      {
        question: "Behöver jag underhålla en separat profil per språk?",
        answer:
          "Nej. Underhåll en masterprofil per konsult och generera vilket språk som helst av de som stöds på begäran - det finns inget att hålla i synk manuellt.",
      },
    ],
    related: [
      { label: "Översätt CV:n till vilket språk som helst", href: "/use-cases/translate-cvs" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Flerspråkiga CV:n - översätt CV utan omformatering",
      description:
        "Generera professionella, varumärkesanpassade CV:n på EN, DE, FR, NL, ES med flera från en enda masterprofil.",
      keywords: ["flerspråkigt CV-verktyg", "CV på flera språk"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Centraliserade profiler & kompetensintelligens",
    h1: "Teamets CV-databas - en strukturerad profil per person.",
    sub: "En sökbar CV-databas och kompetensmatris för hela teamet: importera en gång, håll profilerna aktuella och generera valfritt format på begäran.",
    whatItDoesBody:
      "Ersätt utspridda CV:n på delade enheter och i inkorgar med en strukturerad, alltid aktuell profil per konsult. Importera från befintliga filer i dag, med LinkedIn- och HRIS-berikning på roadmapen, och sök sedan i hela konsultstyrkan på kompetens eller erfarenhet och generera det underlag ett anbud kräver - på begäran, från en enda sanningskälla.",
    benefits: [
      {
        title: "Strukturerade profiler, inte fritextdokument",
        body: "Varje konsults erfarenhet, kompetenser och certifieringar lagras som strukturerad data - sökbar och återanvändbar, inte inlåst i en Word-fil.",
        screenshotAlt: "Redigerare för strukturerad konsultprofil",
      },
      {
        title: "Importera och berika",
        body: "Börja med att ta in befintliga CV:n. LinkedIn- och HRIS-berikning (Personio, BambooHR, HiBob) finns på roadmapen för att hålla profilerna aktuella automatiskt.",
        screenshotAlt: "Importflöde för profiler från befintliga CV-filer",
      },
      {
        title: "Hitta rätt person snabbt",
        body: "Sök i hela konsultstyrkan på kompetens, certifiering eller tidigare projekt för att bemanna nästa uppdrag på minuter, i stället för att leta i mappar.",
        screenshotAlt: "Kompetenssökning i hela konsultstyrkan",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Hur får jag in befintliga CV:n i MagicCV?",
        answer:
          "Importera era befintliga CV-filer för att skapa strukturerade profiler. LinkedIn- och HRIS-berikning (Personio, BambooHR, HiBob) finns på roadmapen för att hålla dem aktuella med mindre manuellt arbete.",
      },
      {
        question: "Kan jag söka på kompetens bland alla konsulter?",
        answer:
          "Ja. Varje profil är strukturerad data, så ni kan söka i hela konsultstyrkan på kompetens, certifiering eller tidigare projekt och bemanna ett uppdrag snabbt.",
      },
    ],
    related: [
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "För HR / People Ops-team", href: "/solutions/hr" },
      { label: "För rekryteringsteam", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV-databas & kompetensmatris-program",
      description:
        "En sökbar CV-databas och kompetensmatris i ett: importera CV:n, sök hela teamet på kompetens och generera CV:n i er profil på begäran.",
      keywords: ["cv databas", "kompetensmatris", "kompetensdatabas"],
    },
  },
];
