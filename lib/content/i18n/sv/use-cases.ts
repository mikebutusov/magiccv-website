import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Anpassa varje konsults CV till det specifika underlaget och lyft fram den mest relevanta erfarenheten och vinnarkriterierna.",
    h1: "Skräddarsy varje CV för varje underlag - automatiskt.",
    sub: "MagicCV resonerar kring RFP:n och formar om varje konsults CV så att det som är avgörande för just den här affären hamnar i förgrunden.",
    problemToday:
      "Varje RFP har sina egna vinnarkriterier, men de flesta CV:n är statiska dokument. Anbudsteamen hamnar i att manuellt läsa om och sortera om varje konsults erfarenhet för hand, för varje enskilt underlag - eller så hoppar de över det och skickar in ett generiskt CV som inte gör matchningen rättvisa.",
    steps: [
      {
        title: "Klistra in RFP:n eller underlaget",
        body: "Lägg in RFP-dokumentet, en lista med utvärderingskriterier eller en kort sammanfattning av vad kunden letar efter.",
        screenshotAlt: "RFP-underlag inklistrat i MagicCV",
      },
      {
        title: "MagicCV identifierar och lyfter fram relevant erfarenhet",
        body: "Den hittar aldrig på - varje påstående går att spåra tillbaka till konsultens källprofil, bara omsorterat och omprioriterat för att matcha underlaget.",
        screenshotAlt: "Relevant erfarenhet markerad mot kraven i underlaget",
      },
      {
        title: "Granska och exportera, i er grafiska profil",
        body: "Kontrollera resultatet, justera vid behov och exportera i företagets varumärkesmall.",
        screenshotAlt: "Skräddarsytt CV exporterat i varumärkesmall",
      },
    ],
    outcome: "Högre relevans per underlag och bättre chanser i varje anbud ni lämnar.",
    outcomeStats: [{ value: "+18%", label: "vinstfrekvens på skräddarsydda anbud" }],
    faqs: [
      {
        question: "Skriver detta om en konsults faktiska erfarenhet?",
        answer:
          "Nej. MagicCV omprioriterar och sorterar om verklig erfarenhet från källprofilen för att matcha underlaget - den hittar aldrig på erfarenhet som inte finns.",
      },
      {
        question: "Hur lång tid tar det att skräddarsy ett CV?",
        answer: "Vanligtvis ett par minuter från att underlaget klistras in till ett granskat, exportklart CV.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Bygg ett anbudsklart CV-paket", href: "/use-cases/proposal-cv-pack" },
      { label: "För säljteam", href: "/solutions/sales" },
    ],
    seo: {
      title: "Skräddarsy konsult-CV:n för varje underlag - MagicCV",
      description:
        "MagicCV resonerar kring RFP:n och formar om varje konsults CV så att det som avgör affären hamnar i förgrunden.",
      keywords: ["skräddarsy CV för RFP", "anpassa konsult-CV"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Sätt ihop ett komplett, enhetligt CV-paket för en offert eller ett anbud i ett svep.",
    h1: "Från RFP till ett komplett CV-paket på 15 minuter.",
    sub: "Välj teamet, generera skräddarsydda CV:n för alla och exportera ett enda varumärkesanpassat paket, klart att skicka in.",
    problemToday:
      "Att sätta ihop ett CV-paket för ett anbud innebär att jaga flera personer efter aktuella CV:n, formatera om vart och ett för hand och hoppas att hela paketet känns enhetligt. Det är den klassiska fredagskvällsstressen inför en deadline.",
    steps: [
      {
        title: "Välj teamet",
        body: "Välj konsulterna för det här anbudet själva, eller låt MagicCV föreslå de bäst matchande personerna ur er konsultstyrka.",
        screenshotAlt: "Skärm för teamval till ett anbud",
      },
      {
        title: "Generera skräddarsydda CV:n för alla på en gång",
        body: "Varje CV i paketet skräddarsys mot samma underlag, samtidigt.",
        screenshotAlt: "Batchgenerering av CV:n för ett helt anbudsteam",
      },
      {
        title: "Exportera ett enhetligt, varumärkesanpassat och inlämningsklart paket",
        body: "Ett sammanhållet dokument, redo att bifogas anbudet.",
        screenshotAlt: "Exporterat CV-paket som kombinerar flera konsulter",
      },
    ],
    outcome: "Det som tidigare tog en dag tar nu ungefär femton minuter - ingen stress i sista minuten.",
    outcomeStats: [{ value: "1 dag → 15 min", label: "per CV-paket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kan MagicCV föreslå vilka som ska ingå i paketet?",
        answer:
          "Ja. Utifrån underlaget och konsultstyrkans kompetens och erfarenhet kan MagicCV föreslå de bäst matchande konsulterna, men ni har alltid sista ordet.",
      },
      {
        question: "Håller hela paketet en enhetlig formatering?",
        answer: "Ja - varje CV i paketet använder samma varumärkesmall, så paketet läses som ett enda dokument.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "För säljteam", href: "/solutions/sales" },
    ],
    seo: {
      title: "Bygg ett anbudsklart CV-paket på minuter - MagicCV",
      description:
        "Välj teamet, generera skräddarsydda CV:n för alla och exportera ett enda varumärkesanpassat paket, klart att skicka in.",
      keywords: ["CV-paket för anbud", "RFP CV-paket konsultbolag"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Ersätt utspridda CV:n på delade enheter med en strukturerad, aktuell sanningskälla.",
    h1: "Ett hem för varje konsult-CV.",
    sub: "Importera en gång, håll aktuellt och generera vilket format som helst på begäran - slut på letandet i SharePoint.",
    problemToday:
      "CV:n ligger på delade enheter, i inkorgar och på folks laptoppar - flera versioner av samma persons CV, utan att någon av dem tydligt är den aktuella. Att hitta rätt fil kostar tid varje gång den behövs.",
    steps: [
      {
        title: "Importera från befintliga filer",
        body: "Ta in de CV:n ni redan har för att skapa strukturerade profiler. LinkedIn- och HRIS-import finns på roadmapen.",
        screenshotAlt: "Skärm för massimport av CV:n",
      },
      {
        title: "Underhåll strukturerade profiler, alltid aktuella",
        body: "En profil per person, uppdaterad på ett ställe i stället för utspridda dokument.",
        screenshotAlt: "Listvy över strukturerade profiler",
      },
      {
        title: "Generera vilket underlag som helst, i vilket format som helst, när som helst",
        body: "Vad ett anbud eller en förfrågan än kräver - generera det från den aktuella profilen, utan att leta efter den senaste filen.",
        screenshotAlt: "Formatväljare för underlag från en enda profil",
      },
    ],
    outcome: "En enda sanningskälla, ingen dubbellagrad data och snabbare arbete i alla efterföljande led.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vad händer med våra befintliga CV-filer?",
        answer:
          "Importera dem för att skapa strukturerade profiler i MagicCV. Därefter blir den strukturerade profilen den aktuella sanningskällan, inte originalfilen.",
      },
      {
        question: "Integrerar ni med vårt HRIS?",
        answer: "HRIS-integrationer (Personio, BambooHR, HiBob) finns på vår roadmap.",
      },
    ],
    related: [
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "För HR / People Ops-team", href: "/solutions/hr" },
      { label: "För rekryteringsteam", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Centralisera & standardisera konsult-CV:n - MagicCV",
      description:
        "Importera en gång, håll aktuellt och generera vilket format som helst på begäran - slut på letandet i SharePoint.",
      keywords: ["centraliserad CV-databas konsultbolag", "standardisera konsult-CV:n"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Ta fram anonymiserade, avidentifierade CV:n för konkurrensutsatta anbud, offentliga upphandlingar och fördomsfri inlämning.",
    h1: "Anonymiserade CV:n med ett klick.",
    sub: "Ta bort identifierande uppgifter för blindutvärdering och offentliga upphandlingar - konsekvent, i hela teamet.",
    problemToday:
      "Offentliga upphandlingar och blindutvärderingsprocesser kräver anonymiserade CV:n, och manuell maskning är långsam och inkonsekvent - en medarbetares bild av vad 'anonymiserat' innebär stämmer sällan med en annans.",
    steps: [
      {
        title: "Generera ett CV",
        body: "Utgå från ett skräddarsytt eller standardiserat CV för konsulten.",
        screenshotAlt: "Standard-CV före anonymisering",
      },
      {
        title: "Aktivera anonymisering",
        body: "Namn, foton och andra identifierande uppgifter tas bort enligt de regler ni har konfigurerat.",
        screenshotAlt: "Anonymiseringsreglage applicerat på ett CV",
      },
      {
        title: "Exportera för blind eller konkurrensutsatt inlämning",
        body: "Den anonymiserade versionen är exportklar och konsekvent med alla andra anonymiserade CV:n ert team producerar.",
        screenshotAlt: "Anonymiserat CV redo för inlämning i upphandling",
      },
    ],
    outcome: "Upphandlingskompatibla inlämningar med minskad partiskhet, framtagna snabbt och konsekvent.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vad räknas som en identifierande uppgift?",
        answer:
          "Ni styr reglerna - vanligtvis namn, foto och alla andra uppgifter som er utvärderingsprocess betraktar som identifierande.",
      },
      {
        question: "Är anonymiseringen konsekvent i hela teamet?",
        answer: "Ja - varje anonymiserat CV följer samma konfigurerade regler, oavsett vem som genererar det.",
      },
    ],
    related: [
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Specialiserade bemannings- & talangbyråer", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anonymisera konsult-CV:n för blind inlämning & upphandling - MagicCV",
      description:
        "Ta bort identifierande uppgifter för blindutvärdering och offentliga upphandlingar - konsekvent, i hela teamet.",
      keywords: ["verktyg för CV-anonymisering", "anonymiserat CV för upphandlingar"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Ta fram korrekta, varumärkesanpassade CV:n på flera europeiska språk för gränsöverskridande anbud.",
    h1: "Varje CV, på varje språk ni lämnar anbud på.",
    sub: "Generera korrekta, professionella CV:n på EN, DE, FR, NL, ES med flera - utan att skriva om eller formatera om.",
    problemToday:
      "Gränsöverskridande anbud och flerspråkiga utvärderingspaneler innebär att samma CV måste finnas på flera språk och hållas i synk när konsultens profil förändras. Manuell översättning är långsam och blir snabbt inaktuell.",
    steps: [
      {
        title: "Underhåll en masterprofil",
        body: "Håll en enda, aktuell profil per konsult som sanningskälla.",
        screenshotAlt: "Masterprofil för konsult på ett språk",
      },
      {
        title: "Välj målspråk",
        body: "Välj det eller de språk som det här anbudet kräver.",
        screenshotAlt: "Språkval för CV-generering",
      },
      {
        title: "Exportera skräddarsydda, översatta, varumärkesanpassade CV:n",
        body: "Få ett enhetligt, professionellt CV på varje valt språk, redo att skickas in.",
        screenshotAlt: "Översatta CV:n exporterade sida vid sida",
      },
    ],
    outcome: "Flerspråkiga paket på direkten för EU-upphandling och gränsöverskridande leverans.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vilka språk kan jag generera i dag?",
        answer: "EN, DE, FR, NL och ES i dag, med fler EU-språk på roadmapen.",
      },
      {
        question: "Hålls översatta CV:n i synk när profilen uppdateras?",
        answer: "Ja - generera om vilket språk som helst på begäran från den aktuella masterprofilen.",
      },
    ],
    related: [
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Mjukvaru- & IT-konsulting", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Översätt konsult-CV:n till vilket språk som helst - MagicCV",
      description:
        "Generera korrekta, professionella CV:n på EN, DE, FR, NL, ES med flera - utan att skriva om eller formatera om.",
      keywords: ["flerspråkig CV-generator", "CV-översättningsverktyg konsultbolag"],
    },
  },
];
