import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sälj- och affärsutvecklingsansvariga som äger vinstfrekvens på anbud och tempo i pipelinen.",
    h1: "Vinn fler av de anbud ni lämnar.",
    sub: "Låt inte långsamma, generiska CV:n kosta er affärer. MagicCV ger säljteam RFP-klara konsultpaket på minuter - skräddarsydda för varje affärsmöjlighet.",
    pain: {
      quote: "Vi förlorar RFP:er vi borde vinna, och CV-arbetet är alltid flaskhalsen.",
      answer: "MagicCV ger er skräddarsydda, varumärkesanpassade CV-paket som matchar underlaget, klara före deadline.",
      proofPoints: [
        "Snabbare väg från underlag till inlämning",
        "Högre vinstfrekvens på skräddarsydda anbud",
        "Enhetlig, varumärkesanpassad kvalitet i hela teamet",
      ],
    },
    featureRows: [
      {
        title: "Matcha rätt personer mot varje underlag automatiskt",
        body: "MagicCV läser underlaget och lyfter fram de bäst matchande konsulterna ur er konsultstyrka.",
        screenshotAlt: "Konsultmatchning mot ett RFP-underlag",
      },
      {
        title: "Skräddarsy varje CV efter affärens vinnarkriterier",
        body: "Varje CV sätter det som just detta underlag utvärderas på i förgrunden - inte en generisk sammanfattning.",
        screenshotAlt: "Skräddarsytt CV som lyfter fram erfarenhet kopplad till vinnarkriterierna",
      },
      {
        title: "Missa aldrig en deadline - ett paket på 15 minuter",
        body: "Gå från underlag till ett inlämningsklart CV-paket snabbt nog för att sluta betrakta detta som flaskhalsen.",
        screenshotAlt: "CV-paket för anbud genererat snabbt före en deadline",
      },
      {
        title: "Enhetlig, varumärkesanpassad kvalitet som speglar företaget",
        body: "Varje inlämning ser ut att komma från samma företag, eftersom den bygger på samma varumärkesmall.",
        screenshotAlt: "Varumärkesenhetligt CV-paket för flera konsulter",
      },
    ],
    stats: [
      { value: "1 dag → 15 min", label: "per CV-paket", isPlaceholder: true },
      { value: "+18%", label: "vinstfrekvens på skräddarsydda anbud" },
    ],
    includeRoiTeaser: true,
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
    reader: "Rekryterings- och resursansvariga som underhåller konsultprofiler och svarar på bemannings- och anbudsförfrågningar.",
    h1: "Gör er talangpool till anbudsklara profiler.",
    sub: "Håll varje konsult-CV aktuellt, sökbart och direkt formaterat för vilket underlag eller anbud som helst.",
    pain: {
      quote: "Jag jagar ständigt konsulter efter uppdaterade CV:n och formaterar om dem för hand.",
      answer: "MagicCV ger varje person en central, alltid aktuell profil - generera vilket format som helst på begäran.",
      proofPoints: [
        "Slut på jakten på konsulter för uppdateringar",
        "En enda sanningskälla per person",
        "Snabb onboarding av nyanställdas CV:n",
      ],
    },
    featureRows: [
      {
        title: "Centraliserade, strukturerade konsultprofiler",
        body: "Varje konsults erfarenhet lagras som strukturerad data på ett ställe, inte i utspridda dokument.",
        screenshotAlt: "Centraliserad databas med konsultprofiler",
      },
      {
        title: "En profil → många skräddarsydda underlag",
        body: "Generera det format ett anbud eller en kund kräver, direkt från den aktuella profilen.",
        screenshotAlt: "Flera CV-varianter genererade från en profil",
      },
      {
        title: "Importera & berika från LinkedIn/HRIS",
        body: "Ta in befintliga CV:n redan i dag; LinkedIn- och HRIS-berikning finns på roadmapen.",
        screenshotAlt: "Importflöde för profilberikning",
      },
      {
        title: "Hitta rätt person snabbt",
        body: "Sök på kompetens och erfarenhet i hela konsultstyrkan för att snabbt svara på en bemanningsförfrågan.",
        screenshotAlt: "Kompetensbaserad sökning bland konsultprofiler",
      },
    ],
    stats: [
      { value: "6 tim", label: "sparade per vecka på att jaga uppdateringar" },
    ],
    related: [
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "Specialiserade bemannings- & talangbyråer", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "MagicCV för rekryterings- & resursteam",
      description:
        "Håll varje konsult-CV aktuellt, sökbart och direkt formaterat för vilket underlag eller anbud som helst.",
      keywords: ["CV-databas för konsulter", "CV-verktyg för resursplanering"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "HR / People Ops - dataförvaltarpersonan. Bryr sig om ren data och inga parallella system.",
    h1: "En enda sanningskälla för varje konsult-CV.",
    sub: "Sluta underhålla CV:n på fem ställen. MagicCV håller profilerna rena, enhetliga och regelefterlevande - utan skugg-IT.",
    pain: {
      quote: "CV:n ligger på delade enheter, i inkorgar och på folks laptoppar - datan är en enda röra.",
      answer: "MagicCV ersätter det med strukturerade, styrda profiler och rollbaserad åtkomst.",
      proofPoints: [
        "Ren, strukturerad data i stället för utspridda filer",
        "GDPR-by-design rakt igenom",
        "Inga dubbla system att underhålla",
      ],
    },
    featureRows: [
      {
        title: "Strukturerade profiler, slut på fritextdokument",
        body: "Varje konsults data lagras som strukturerade fält, inte som ett ostrukturerat Word-dokument.",
        screenshotAlt: "Vy över strukturerat profilschema",
      },
      {
        title: "Rollbaserad åtkomst & styrning",
        body: "Styr vem som kan se och redigera vad, med tydligt ägarskap över konsultdatan.",
        screenshotAlt: "Inställningar för rollbaserad åtkomstkontroll",
      },
      {
        title: "HRIS-integrationer (roadmap)",
        body: "Integrationer med Personio, BambooHR och HiBob finns på roadmapen för att hålla profilerna aktuella automatiskt.",
        screenshotAlt: "Inställningspanel för HRIS-integrationer",
      },
      {
        title: "GDPR-by-design, datalagring i EU, granskningsloggar",
        body: "Datahanteringen är byggd kring GDPR-kraven från grunden, med datalagring i EU och granskningsloggar.",
        screenshotAlt: "Inställningar för granskningslogg och datalagringsplats",
      },
    ],
    stats: [],
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
    reader: "Leverans-, uppdrags- och praktikansvariga som bemannar projekt och behöver CV:n för kundvända offerter och uppdragsstarter.",
    h1: "Sätt rätt personer framför varje kund.",
    sub: "Generera uppdragsklara, varumärkesanpassade konsult-CV:n som matchar kundens krav - utan att leveranstid går åt till administration.",
    pain: {
      quote: "Varje nytt uppdrag innebär en jakt på aktuella CV:n i rätt format för just den kunden.",
      answer: "MagicCV ger er kundanpassade CV-paket på direkten, så att leveransansvariga kan bemanna och pitcha snabbare.",
      proofPoints: [
        "Snabbare mobilisering in i nya uppdrag",
        "Kundspecifika mallar, inklusive format för offentlig upphandling och enterprise-inköp",
        "Flerspråkiga underlag för gränsöverskridande leverans",
      ],
    },
    featureRows: [
      {
        title: "Matcha konsulter mot projektkrav",
        body: "Hitta rätt personer för ett uppdrag utifrån kundens uttalade krav.",
        screenshotAlt: "Konsultmatchning mot projektkrav",
      },
      {
        title: "Kund- och mallspecifika exporter",
        body: "Växla mellan er egen stil och en kunds obligatoriska format utan extra manuellt arbete.",
        screenshotAlt: "Export av CV i kundspecifik mall",
      },
      {
        title: "Flerspråkigt för gränsöverskridande leverans",
        body: "Generera CV:n på de språk era leveransteam och kunder faktiskt arbetar på.",
        screenshotAlt: "Flerspråkig CV-uppsättning för ett gränsöverskridande uppdrag",
      },
      {
        title: "Anonymiserade profiler för blinda/konkurrensutsatta inlämningar",
        body: "Använd anonymisering när ett uppdrag eller en upphandling kräver det.",
        screenshotAlt: "Anonymiserat CV för en konkurrensutsatt uppdragsinlämning",
      },
    ],
    stats: [],
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
