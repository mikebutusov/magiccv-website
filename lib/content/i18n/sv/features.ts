import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-till-CV-resonemang",
    h1: "RFP:n landar fredag eftermiddag. Era CV:n är formade efter den på måndag morgon.",
    sub: "MagicCV läser underlaget, extraherar vinnarkriterierna och arbetar om varje konsults CV så att det matchar - byggt för anbudsteam som skräddarsyr 10+ CV:n per inlämning.",
    whatItDoesBody:
      "Varje anbudsansvarig känner igen mönstret. RFP:n kommer med en bilaga på 40 sidor, utvärderingskriterierna är begravda i avsnitt 7, och någon måste forma om ett dussin konsult-CV:n efter krav som CV:na aldrig skrevs för. Så du öppnar final_v3_JS_edit.docx, börjar flytta punkter för hand och hoppas att du inte missade den obligatoriska certifieringen på sidan 23. Multiplicera det med 12 CV:n och en torsdagsdeadline, så är skräddarsyendet uppgiften som äter upp veckan.\n\nMagicCV utgår från underlaget i stället för mallen. Ladda upp RFP:n - hela dokumentet, kriteriebladet eller en kort sammanfattning - så extraherar den efterfrågade kompetenser, certifieringar och utvärderingskriterier. Sedan skriver den om varje vald konsults CV utifrån den strukturerade profilen, lyfter fram de projekt och den erfarenhet som svarar på underlaget och skalar bort det som inte gör det. Varje påstående går att spåra tillbaka till ett faktum i källprofilen; ingenting hittas på för att passa. Du granskar, justerar vad som helst via chattbaserad redigering och exporterar i er mall.",
    benefits: [
      {
        title: "Kraven framplockade innan du hunnit läsa klart försättsbladet",
        body: "Ladda upp RFP:n så plockar MagicCV ut efterfrågade kompetenser, obligatoriska certifieringar och utvärderingskriterier - samma lista som en erfaren anbudsansvarig bygger för hand, utan överstrykningspennan genom bilagan.",
        screenshotAlt: "Analyspanel för underlaget med 9 extraherade krav och 3 utvärderingskriterier från en uppladdad RFP-PDF på 40 sidor",
      },
      {
        title: "Tolv skräddarsydda CV:n från ett underlag, inte tolv redigeringspass",
        body: "Välj konsulterna på anbudet så arbetar MagicCV om varje CV mot de extraherade kraven - sorterar om projekt, justerar betoningen och skär bort irrelevanta detaljer. Det som tidigare var en kväll per CV blir ett granskningspass per CV.",
        screenshotAlt: "Batchvy med 12 konsult-CV:n omgenererade mot en RFP, alla markerade som klara för granskning",
      },
      {
        title: "Varje mening spårbar, ingenting påhittat",
        body: "Genererade CV:n omprioriterar och sorterar bara om erfarenhet som redan finns i konsultens profil. Varje påstående länkar tillbaka till sin källa, så att du kan försvara varje rad inför en utvärderingspanel.",
        screenshotAlt: "Genererat CV med ett påstående markerat och dess källpost visad i konsultens profil",
      },
      {
        title: "En människa i loopen närhelst ni vill ha en",
        body: "Aktivera det konservativa do-not-generate-läget så flaggar MagicCV relevant erfarenhet för er granskning i stället för att skriva CV:t direkt. Eller generera först och finjustera formuleringar via chatt innan något lämnar huset.",
        screenshotAlt: "Reglage för konservativt läge med flaggade erfarenhetsförslag som väntar på granskarens godkännande",
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
          "Nej. RFP-till-CV-resonemanget omprioriterar och sorterar bara om verklig erfarenhet från konsultens källprofil. Varje påstående i ett genererat CV går att spåra tillbaka till den profilen, så om ett projekt inte finns i profilen dyker det inte upp i CV:t.",
      },
      {
        question: "Vad laddar jag upp - hela RFP:n eller en sammanfattning?",
        answer:
          "Det ni har. En komplett RFP med bilagor, ett blad med utvärderingskriterier eller tre stycken inklistrade från kundens mejl fungerar alla. MagicCV extraherar kraven ur det dokument ni ger den; mer detalj betyder bara en skarpare matchning.",
      },
      {
        question: "Hur lång tid tar det att skräddarsy ett komplett teampaket för ett anbud?",
        answer:
          "Extraktionen körs på minuter, och varje CV genereras om på begäran från konsultens profil. För en typisk inlämning med 10-12 personer flyttas arbetet från en dag av manuell redigering till ett granskningspass - att läsa varje CV och justera formuleringar via chatt där det behövs.",
      },
      {
        question: "Kan någon granska resultatet innan det går till kunden?",
        answer:
          "Ja, och vi rekommenderar det. Använd chattbaserad redigering för att justera valfritt avsnitt, eller slå på det konservativa do-not-generate-läget så visar MagicCV relevant erfarenhet för godkännande i stället för att skriva CV:t automatiskt. Ni bestämmer hur mycket autonomi AI:n får.",
      },
      {
        question: "Kommer skräddarsydda CV:n ut i vår mall?",
        answer:
          "Ja. Skräddarsyendet ändrar innehållet; er varumärkesmall styr presentationen. Varje genererat CV exporteras som en pixelkonsekvent PDF- eller Word-fil i er grafiska profil, eller i en kundspecifik mall om upphandlingen kräver en.",
      },
      {
        question: "Hur skiljer sig detta från att klistra in ett CV och en RFP i ChatGPT?",
        answer:
          "En allmän chattbot har inget minne av ert team och inga skyddsräcken - den hittar gärna på en certifiering för att passa underlaget. MagicCV arbetar från strukturerade profiler, håller varje påstående spårbart till sin källa, applicerar er mall vid export och gör det för 12 konsulter samtidigt i stället för ett inklistringsjobb i taget.",
      },
      {
        question: "Vad händer med de RFP:er och CV-data vi laddar upp?",
        answer:
          "MagicCV är byggd GDPR-by-design med datalagring i EU, och Enterprise-planer inkluderar ett personuppgiftsbiträdesavtal (DPA) och granskningsloggar. Era underlag och profiler förblir er data. Trust Center täcker datahantering, gallring och behandling i detalj.",
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
    h1: "Skicka aldrig ett CV utanför er grafiska profil igen.",
    sub: "Ställ in er mall en gång så exporteras varje konsult-CV som en pixelkonsekvent PDF- eller Word-fil - slut på torsdagskvällens omformatering före en inlämning.",
    whatItDoesBody:
      "Fråga vilken anbudsansvarig som helst hur CV-paketet såg ut före senaste deadline: tre konsulter fortfarande på 2019 års mall, en partner som håller sig med en egen version med egna typsnitt, och en underkonsults CV i Calibri fast varumärkesguiden säger något annat. Att fixa det betyder att formatera om 12 dokument för hand kvällen före inlämning - och kunden hittar ändå sidan där logotypen sitter 5 mm för lågt.\n\nMed MagicCV är presentationen separerad från innehållet. Ni definierar mallen en gång - typsnitt, färger, logotypplacering, sektionslayout - och varje CV som genereras från en konsults profil ärver den automatiskt. Exporterna kommer ut som inlämningsklara PDF- eller Word-filer, identiska ner till pixeln genom hela paketet. När en kund eller en offentlig upphandling kräver ett eget format byter ni mall för det anbudet utan att röra den underliggande profildatan, och byter tillbaka när det är klart.",
    benefits: [
      {
        title: "En mall, noll glidning",
        body: "Definiera företagets visuella identitet en gång så ärver varje CV den vid export. Partnerns egna version, 2019 års layout, underkonsultens CV i fel typsnitt - alla ersatta av en enda källa till formateringssanning.",
        screenshotAlt: "Redigerare för varumärkesmall med typsnitts-, färg- och logotypinställningar applicerade på en live CV-förhandsvisning",
      },
      {
        title: "Kund- och upphandlingsformat utan att bygga om något",
        body: "Behåll er egen stil som standard och lägg till kundspecifika eller upphandlingskrävda mallar bredvid den. Att formatera om ett paket med 12 personer för ett statligt ramavtal blir ett mallbyte, inte en vecka av klipp och klistra.",
        screenshotAlt: "Mallväljare som visar en mall i egen stil bredvid ett kundkrävt upphandlingsformat för samma konsult",
      },
      {
        title: "Inlämningsklar PDF och Word, från samma källa",
        body: "Exportera valfritt CV eller ett helt teampaket till PDF eller DOCX. Båda kommer från samma mallsystem, så Word-filen en kund vill redigera matchar PDF:en ni lämnade in.",
        screenshotAlt: "Exportdialog med PDF- och Word-alternativ för ett anbudspaket med 8 konsulter",
      },
      {
        title: "Byt grafisk profil en gång, uppdatera varje CV",
        body: "Innehållet bor i profilerna; presentationen bor i mallen. Byt logotyp eller färgpalett efter en omprofilering så plockar varje framtida export - över 200 profiler - upp det direkt, utan något att jaga ikapp.",
        screenshotAlt: "Uppdaterade varumärkesfärger som slår igenom över ett rutnät av CV-förhandsvisningar",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Kan vi behålla vår befintliga Word-mall?",
        answer:
          "Ja - återskapa er nuvarande layout i MagicCV:s mallsystem, inklusive typsnitt, färger, logotypplacering och sektionsordning. Därefter exporteras varje CV i det formatet automatiskt, i stället för att bero på vem som formaterade dokumentet senast.",
      },
      {
        question: "Kan vi använda en annan mall för en specifik kund eller upphandling?",
        answer:
          "Ja. Er egen stil förblir standard, och ni lägger till kund- eller upphandlingsspecifika mallar bredvid den. Att byta ett helt CV-paket till ett obligatoriskt format är ett mallval, inte ett manuellt omarbete - profildatan under förblir orörd.",
      },
      {
        question: "Vilka exportformat stöds?",
        answer:
          "PDF och Word (DOCX), båda genererade från samma mallsystem. Word-versionen matchar PDF:en, så ni kan lämna in den ena och ge den andra till en kund som insisterar på att redigera.",
      },
      {
        question: "Kan konsulter förstöra formateringen när de uppdaterar sitt CV?",
        answer:
          "Nej. Konsulterna uppdaterar innehållet i sin profil - projekt, kompetenser, certifieringar - medan mallen styr presentationen. Det finns inget dokument för dem att formatera om, så paketet förblir enhetligt oavsett vem som redigerade vad.",
      },
      {
        question: "Vad händer när vi byter grafisk profil?",
        answer:
          "Uppdatera mallen en gång - ny logotyp, nya färger, nya typsnitt - så använder varje CV som exporteras från den punkten den nya identiteten. Ni slipper den vanliga uppstädningen efter en omprofilering, att jaga gamla mall-CV:n ur SharePoint-mappar i månader.",
      },
      {
        question: "Finns mallbaserad export på alla planer?",
        answer:
          "Ja. Varumärkesanpassad PDF- och Word-export fungerar på Free, Pro och Enterprise. Planerna skiljer sig i skala: Free täcker 10 profiler och 30 CV:n totalt, Pro täcker 200 profiler och 600 CV:n per månad, och Enterprise är obegränsad.",
      },
      {
        question: "Behåller översatta eller anonymiserade CV:n samma mall?",
        answer:
          "Ja. Översättning och anonymisering ändrar bara innehållslagret - den exporterade filen behåller era typsnitt, er layout och ert varumärke. Ett avidentifierat CV för en upphandling ser exakt ut som ert standard-CV, minus de identifierande uppgifterna.",
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
    h1: "Avidentifierade CV:n med ett klick, inte en kväll av manuell maskning.",
    sub: "Anonymisering med ett klick för offentliga upphandlingar, anonymiserade rekryteringsprocesser och konkurrensutsatta anbud - samma regler applicerade på varje CV, varje gång.",
    whatItDoesBody:
      "Upphandlingen säger att kandidaternas CV:n måste anonymiseras. Så kvällen före inlämning sitter någon och går igenom 14 dokument och raderar namn, foton och arbetsgivarreferenser för hand - och missar konsultens efternamn i en sidfot, eller kundnamnet begravt i en projektbeskrivning på sidan 3. Ett enda missat fält kan ogiltigförklara en inlämning i en blindutvärdering, och manuell maskning ger er 14 chanser att missa ett.\n\nMagicCV gör anonymiseringen till en egenskap hos exporten, inte en arbetsuppgift. Slå på den för valfritt CV eller ett helt teampaket så tas identifierande uppgifter bort enligt regler ni konfigurerar - namn, foton och vilka andra fält er process än räknar som identifierande. Samma regler gäller för varje konsult, varje gång, så ett paket med 14 personer blir lika konsekvent som ett enda CV. I grunden är MagicCV byggd GDPR-by-design med datalagring i EU; Trust Center täcker hela efterlevnadsbilden.",
    benefits: [
      {
        title: "Från en kväll av maskning till ett enda reglage",
        body: "Slå på anonymisering vid export så försvinner namn, foton och andra identifierande uppgifter - inget manuellt sök-och-radera-pass, ingen sidfot eller sidhuvud som slinker igenom, inget andra par ögon som behövs bara för att fånga missar.",
        screenshotAlt: "Anonymiseringsreglage med en före/efter-jämförelse av samma konsult-CV, namn och foto borttagna",
      },
      {
        title: "Era regler avgör vad som räknas som identifierande",
        body: "Anonymiserade rekryteringsprocesser och offentliga upphandlingar är oense om vad som måste döljas - vissa vill att arbetsgivarnamn tas bort, andra bara namn och foton. Konfigurera vilka fält som stryks så att varje inlämning uppfyller sitt specifika krav.",
        screenshotAlt: "Regelpanel för anonymisering med fältnivåreglage för namn, foto, arbetsgivarnamn och kontaktuppgifter",
      },
      {
        title: "Hela teampaket, identisk behandling",
        body: "Anonymisera ett paket med 14 konsulter för en offentlig upphandling så följer varje CV samma regler. I en blindutvärdering är konsekvens själva kravet - ett annorlunda maskat CV kan identifiera en kandidat genom det som saknas.",
        screenshotAlt: "Anonymiserat CV-paket för en upphandlingsinlämning med 14 konsulter, alla profiler med rollkoder i stället för namn",
      },
      {
        title: "GDPR by design i grunden",
        body: "Anonymiseringen vilar på GDPR-by-design-datahantering med datalagring i EU, granskningsloggar och ett personuppgiftsbiträdesavtal (DPA) på Enterprise. Avidentifierade CV:n är en av utdatan från ett system byggt för att hantera personuppgifter korrekt, inte en lagning på ett som inte var det.",
        screenshotAlt: "Trust Center-översikt som visar datalagring i EU och åtaganden för GDPR-datahantering",
      },
    ],
    connectsTo: [
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Vad exakt tas bort när ett CV anonymiseras?",
        answer:
          "Namn, foton och alla andra fält ni konfigurerar som identifierande - kontaktuppgifter, arbetsgivarnamn, kundnamn i projektbeskrivningar. Ni styr regeluppsättningen, så resultatet matchar vad er upphandling eller anonymiserade rekryteringsprocess faktiskt kräver.",
      },
      {
        question: "Använder ett anonymiserat CV fortfarande vår mall?",
        answer:
          "Ja. Anonymiseringen tar bort innehåll; mallen styr presentationen. Ett avidentifierat CV exporteras med samma typsnitt, layout och varumärke som ert standard-CV, så paketet ser fortfarande ut som ert företag - bara utan de identifierande uppgifterna.",
      },
      {
        question: "Kan vi få tillbaka den identifierade versionen efter blindutvärderingen?",
        answer:
          "Ja. Anonymiseringen appliceras vid export och ändrar aldrig den underliggande profilen. När utvärderingssteget passerat exporterar ni samma konsults CV med anonymiseringen avslagen och har den fullständiga versionen - inga separata dokument att underhålla.",
      },
      {
        question: "Är MagicCV GDPR-kompatibel?",
        answer:
          "MagicCV är byggd GDPR-by-design med datalagring i EU, och Enterprise-planer lägger till ett personuppgiftsbiträdesavtal (DPA) och granskningsloggar. Anonymiserade exporter är en del av det; Trust Center täcker datalagring, gallring och behandling i sin helhet.",
      },
      {
        question: "Är MagicCV SOC 2-certifierad?",
        answer:
          "SOC 2-certifieringen är pågående - vi påstår inte att den finns innan den är klar. I dag erbjuder MagicCV GDPR-by-design-datahantering, datalagring i EU, SSO och ett personuppgiftsbiträdesavtal (DPA) på Enterprise samt granskningsloggar. Trust Center har den aktuella statusen.",
      },
      {
        question: "Fungerar detta för anonymiserad rekrytering såväl som upphandlingar?",
        answer:
          "Ja. Samma ettklicksanonymisering täcker anonymiserad rekryteringsgranskning - ta bort namn, foton och andra fält som kan bära bias innan CV:na når granskarna, och dela sedan den identifierade versionen när en kortlista är överenskommen.",
      },
      {
        question: "Hur vet vi att varje CV i ett paket anonymiserades på samma sätt?",
        answer:
          "För att reglerna appliceras av systemet, inte av den som råkade redigera varje dokument. Varje CV i paketet passerar samma konfigurerade regeluppsättning vid export, så det finns ingen variation per dokument att granska kvällen före en deadline.",
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
    h1: "En masterprofil. Varje språk era kunder upphandlar på.",
    sub: "Översätt konsult-CV:n till vilket språk som helst med layout och varumärke intakta - byggt för gränsöverskridande anbud och flerspråkiga utvärderingspaneler.",
    whatItDoesBody:
      "En tysk ramavtalsupphandling kräver CV:n auf Deutsch till torsdag. Era masterversioner är på engelska, den senaste byråöversättningen tog tre dagar och kom tillbaka som ren text som förstörde mallen, och de tyska versionerna någon gjorde förra året har i tysthet glidit ur datum - konsultens två senaste projekt kom aldrig med. Nu sitter ni och stämmer av två dokument per person under deadlinepress, på ett språk halva anbudsteamet inte läser.\n\nMagicCV håller en masterprofil per konsult och genererar språket vid export. Välj språket anbudet kräver så kommer CV:t ut översatt med layout, typsnitt och varumärke orörda - samma mall, samma struktur, på franska, tyska, nederländska eller vad utvärderingspanelen än läser. Det finns inga parallella dokument att hålla i synk: uppdatera profilen en gång så speglar varje språkversion det. Formuleringar kan justeras via chattbaserad redigering innan något lämnas in.",
    benefits: [
      {
        title: "Inga parallella versioner att hålla i synk",
        body: "Masterprofilen är den enda sanningskällan. Lägg till ett nytt projekt en gång så bär de engelska, tyska och franska CV:na alla med sig det vid nästa export - den tysta glidningen mellan språkversioner kan helt enkelt inte uppstå.",
        screenshotAlt: "En konsultprofil med exportknappar för engelska, tyska och franska CV-versioner",
      },
      {
        title: "Layout och varumärke överlever översättningen",
        body: "Översättningen sker inuti mallen, inte i en textfil som någon flödar om efteråt. Tyska blir ungefär 20 % längre än engelska, och layouten absorberar det - era typsnitt, er logotyp och er sektionsstruktur kommer igenom intakta.",
        screenshotAlt: "Engelsk och tysk CV-export av samma konsult sida vid sida, identisk layout i båda",
      },
      {
        title: "Tre dagars byråledtid blir en exportinställning",
        body: "När upphandlingen kräver ett språk ni inte planerat för väljer ni det vid export i stället för att briefa en översättningsbyrå och vänta. Torsdagsdeadlinen slutar bero på någon annans kö.",
        screenshotAlt: "Språkväljare vid CV-export med en översatt PDF som genereras för en gränsöverskridande upphandling",
      },
      {
        title: "Byggd för gränsöverskridande upphandling",
        body: "Flerspråkiga utvärderingspaneler och gränsöverskridande ramavtal är normalfallet för konsult- och IT-tjänsteföretag som lämnar anbud i Europa. Kombinera översättning med anonymisering och er mall för ett inlämningsklart paket på panelens språk.",
        screenshotAlt: "Flerspråkigt CV-paket för en gränsöverskridande upphandling, sex konsulter exporterade på två språk",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Vilka språk kan MagicCV översätta CV:n till?",
        answer:
          "Vilket språk ett anbud än kräver - de centrala europeiska affärsspråken som engelska, tyska, franska, nederländska, spanska och svenska är vanligast bland våra kunder, men översättningen är inte begränsad till en fast lista. Layout och varumärke bevaras oavsett språk.",
      },
      {
        question: "Behöver vi underhålla en separat profil per språk?",
        answer:
          "Nej. Varje konsult har en masterprofil, och språkversioner genereras vid export. Uppdatera profilen en gång - ett nytt projekt, en ny certifiering - så inkluderar varje språkversion det nästa gång ni exporterar.",
      },
      {
        question: "Kommer översättningen att förstöra vår CV-layout?",
        answer:
          "Nej. Översättningen sker inom er varumärkesmall, så typsnitt, logotypplacering och sektionsstruktur följer med. Språk som blir längre än engelska, som tyska eller franska, absorberas av layouten i stället för att bli ett omformateringsjobb.",
      },
      {
        question: "Kan en modersmålstalare granska översättningen innan vi lämnar in?",
        answer:
          "Ja, och för inlämningar med höga insatser rekommenderar vi det. Varje avsnitt kan justeras via chattbaserad redigering före export, så en kollega med språket som modersmål kan rätta en term på minuter i stället för att översätta om dokumentet.",
      },
      {
        question: "Hur hanteras teknisk och domänspecifik terminologi?",
        answer:
          "AI:n översätter i kontext, vilket hanterar det mesta av konsult-, ingenjörs- och IT-terminologin väl. För smala facktermer eller kundens föredragna vokabulär: granska exporten och rätta via chatt - fixen tar minuter, inte ännu en byrårunda.",
      },
      {
        question: "Måste masterprofilen vara på engelska?",
        answer:
          "Nej. Importera CV:n på det språk de skrevs på - MagicCV tolkar dem till strukturerade profiler oavsett, och ni exporterar till vilket språk varje anbud än kräver.",
      },
      {
        question: "Ingår översättning i priset, eller faktureras den separat?",
        answer:
          "Den ingår. Översatta exporter räknas mot planens CV-utrymme som vilken annan export som helst - 30 CV:n totalt på Free, 600 per månad på Pro, obegränsat på Enterprise. Det finns ingen avgift per ord eller per språk.",
      },
      {
        question: "Kan vi översätta och anonymisera samma CV?",
        answer:
          "Ja. Översättning, anonymisering och er varumärkesmall appliceras alla vid export, så ett klick producerar ett avidentifierat tyskt CV i er grafiska profil för en gränsöverskridande upphandling som kräver båda.",
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
    h1: "Från CV:n utspridda i SharePoint till en sökbar CV-databas.",
    sub: "En sökbar CV-databas och kompetensmatris för hela konsultstyrkan: importera CV:na ni redan har, håll en strukturerad profil per person och generera valfri utdata från den.",
    whatItDoesBody:
      "Just nu bor svaret på \"vem har gjort pharmaarbete och talar franska?\" i en SharePoint-mapp full av filer med namn som final_v3_JS_edit.docx, en bemanningsmatris i Excel som stämde i mars, och minnet hos den som bemannade det senaste liknande projektet. Att ta reda på det betyder att öppna dokument ett i taget eller mejla hela avdelningen - och när deadlinen är 48 timmar bort gör ni kortlistan från de CV:n ni hittar, inte de konsulter ni faktiskt har.\n\nMagicCV ersätter mappen med en strukturerad databas: en profil per person, tolkad automatiskt från de Word-, PDF- eller LinkedIn-CV:n ni redan har. Kompetenser, sektorer, språk och certifieringar blir sökbara fält i stället för prosa instängd i dokument. Sök i hela konsultstyrkan som i en kompetensmatris, öppna en profil och generera vad anbudet än behöver - skräddarsytt, översatt, anonymiserat, i er mall. HRIS-berikning (Personio, BambooHR, HiBob) finns på roadmapen för att minska det manuella underhållet ytterligare.",
    benefits: [
      {
        title: "Strukturerad data i stället för 200 Word-filer",
        body: "Varje konsults erfarenhet, kompetenser, certifieringar och språk lever som strukturerade fält, inte prosa inlåst i ett dokument. Samma profil driver sökning, skräddarsyende, översättning och export - uppdatera den en gång så speglar varje utdata det.",
        screenshotAlt: "Strukturerad konsultprofil med separata sektioner för projekt, kompetenser, certifieringar och språk",
      },
      {
        title: "Importera CV:na ni redan har",
        body: "Ladda upp Word- och PDF-filer direkt från SharePoint, eller hämta från LinkedIn - MagicCV tolkar var och en till en strukturerad profil automatiskt. Att migrera en konsultstyrka på 50 personer är en uppladdningssession, inte ett omskrivningsprojekt.",
        screenshotAlt: "Massimportskärm som tolkar en omgång Word- och PDF-CV:n till strukturerade profiler",
      },
      {
        title: "Svara på 'vem kan Kubernetes?' på sekunder",
        body: "Sök i hela konsultstyrkan på kompetens, certifiering, sektor eller språk och få en kortlista direkt. Att bemanna ett uppdrag slutar bero på Excel-matrisen från mars eller på att mejla avdelningen och vänta till måndag.",
        screenshotAlt: "Kompetensmatrissökning filtrerad på konsulter med AWS-certifiering och tyska, med 6 träffar",
      },
      {
        title: "Profiler som håller sig aktuella utan fredagsjakten",
        body: "Konsulterna uppdaterar sin egen profil på ett ställe, och AI-assisterad redigering gör det till en femminutersuppgift i stället för en dokumentformateringssession. Versionen ni hämtar till ett anbud är den aktuella - inte kopian någon senast rörde 2023.",
        screenshotAlt: "Profiluppdateringsvy med AI-chatt som lägger till ett nyligen avslutat projekt i en konsults profil",
      },
    ],
    connectsTo: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Vad händer med de CV:n vi redan har i SharePoint?",
        answer:
          "Ni laddar upp dem. MagicCV tolkar Word- och PDF-filer - och LinkedIn-profiler - till strukturerade profiler automatiskt, en per person. En konsultstyrka på 50 personer migreras vanligtvis i en uppladdningssession snarare än ett manuellt omskrivningsprojekt, och den gamla mappen kan pensioneras.",
      },
      {
        question: "Hur håller vi 200 konsult-CV:n aktuella utan att jaga folk?",
        answer:
          "På två sätt. Konsulterna uppdaterar sin egen profil på ett ställe, med AI-assisterad redigering som gör det till en femminutersuppgift. Och eftersom all utdata genereras från profilen finns det inga lösa dokumentkopior som glider ur datum - databasversionen är den enda versionen.",
      },
      {
        question: "Kan vi söka på kompetens bland alla konsulter?",
        answer:
          "Ja - det är poängen med en CV-databas framför en mapp. Varje profil är strukturerad data, så ni kan filtrera hela konsultstyrkan på kompetens, certifiering, sektor eller språk och få en bemanningskortlista på sekunder i stället för att öppna filer en i taget.",
      },
      {
        question: "Hur skiljer sig detta från vårt ATS eller HRIS?",
        answer:
          "Ett ATS följer sökande genom rekryteringen; ett HRIS hanterar anställningsuppgifter. Inget av dem producerar ett kundklart CV. MagicCV är CV-hanteringsprogram för de personer ni redan anställt: det håller deras profiler strukturerade och sökbara, och genererar sedan skräddarsydda, varumärkesanpassade CV:n för anbud. HRIS-berikning (Personio, BambooHR, HiBob) finns på roadmapen så att uppgifter flödar in i stället för att skrivas om.",
      },
      {
        question: "Hur många profiler kan vi lagra på varje plan?",
        answer:
          "Free täcker 10 profiler och 30 CV:n totalt - nog för att testa med ett team. Pro ($50/månad) täcker 200 profiler och 600 CV:n per månad. Enterprise är obegränsad, med SSO och ett personuppgiftsbiträdesavtal (DPA) inkluderade. Ni kan börja på Free och uppgradera när konsultstyrkan växer ur den.",
      },
      {
        question: "Vem kan se och redigera profiler?",
        answer:
          "Profilerna hanteras centralt, så anbuds- och bemanningsteam arbetar från samma databas medan konsulterna håller sina egna uppgifter aktuella. Enterprise lägger till SSO för åtkomstkontroll och granskningsloggar för att spåra vem som ändrade vad.",
      },
      {
        question: "Är en centraliserad CV-databas GDPR-kompatibel?",
        answer:
          "Centralisering hjälper faktiskt: personuppgifterna sitter i ett styrt system i stället för utspridda i inkorgar och på delade enheter där ingen kan besvara en raderingsbegäran. MagicCV är GDPR-by-design med datalagring i EU, och Trust Center täcker gallring och behandling i detalj.",
      },
      {
        question: "Vilken utdata kan vi generera från en profil?",
        answer:
          "Vilket CV anbudet än kräver: skräddarsytt mot en RFP, översatt till upphandlingens språk, anonymiserat för blindutvärdering, alltid exporterat i er varumärkesmall som PDF eller Word. En profil är källan till allt - inga dokumentkopior per utdata.",
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
