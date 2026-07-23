import type { IndustryPage } from "../../types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "IT-tjänste- och mjukvarukonsultbolag som lämnar anbud på kund- och ramavtalsuppdrag; tunga på CV:n med kompetensmatriser.",
    angle:
      "RFP-bilagan vill ha en kompetensmatris: antal år per teknik, certifieringar med utgångsdatum, projektreferenser i kundens tabellformat. Era konsulters CV:n bor i SharePoint i tio olika Word-layouter, och den senast verifierade versionen av hälften av dem är från förra anbudet. Så leveransansvarig tillbringar helgen före deadline med att klippa och klistra ur final_v3-filer och skriva till konsulter för att bekräfta om deras AWS-certifieringar fortfarande gäller.\n\nMagicCV ersätter det kaoset med en strukturerad profil per konsult. Importera de Word- och PDF-CV:n ni har i dag, så blir kompetenser, certifieringar och projekthistorik sökbara fält i stället för prosa. När ett anbud landar laddar ni upp RFP:n: AI:n läser kraven, formar om varje CV kring den stack kunden efterfrågat och exporterar i er egen mall eller i ramavtalets obligatoriska format - på vilket språk upphandlingen än kräver.",
    h1: "Varje RFP kräver en annan kompetensmatris. Besvara alla från en profil.",
    sub: "Sök i konsultstyrkan på stack och certifiering, och generera sedan RFP-klara konsult-CV:n i exakt det format varje ramavtal eller upphandling kräver.",
    keyPoints: [
      {
        title: "Hitta konsulterna som faktiskt matchar stacken",
        body: "Filtrera hela konsultstyrkan på kompetenser, antal års erfarenhet, certifieringar och språk i en enda sökning. I stället för att fråga tre leveranschefer vem som kan Kubernetes får ni kortlistan på sekunder - inklusive konsulten som började förra kvartalet och aldrig kom in i det gamla kalkylbladet.",
        screenshotAlt: "Teamsökning filtrerad på Kubernetes + AWS + tyska, med 6 matchande konsulter och certifieringsmärken",
      },
      {
        title: "CV:n omformade kring RFP:ns faktiska krav",
        body: "Ladda upp RFP:n eller klistra in kraven, så sorterar AI:n om varje konsults CV så att relevanta projekt, stackerfarenhet och certifieringar leder. Den arbetar enbart med verklig profildata - ingenting hittas på för att fylla en lucka.",
        screenshotAlt: "Panel med RFP-krav bredvid ett konsult-CV där matchande projekt och certifieringar flyttats överst",
      },
      {
        title: "En profil, varje ramavtalsformat",
        body: "Ramavtal och kundupphandlingar kräver var sin egen CV-struktur. Ställ in mallen en gång, så landar varje export pixelkonsekvent i Word eller PDF - slut på att bygga om 12 CV:n för hand för att den här kunden vill ha tabeller i stället för punkter.",
        screenshotAlt: "Exportdialog med egen varumärkesmall och två ramavtalsspecifika CV-mallar för samma konsult",
      },
      {
        title: "Certifieringar som är aktuella, inte fjolårets",
        body: "Certifieringar lever som strukturerade fält på varje profil, uppdaterade en gång och speglade i varje CV som genereras efteråt. Förnyelser slutar vara en fredagseftermiddagsjakt i Slack före varje inlämning.",
        screenshotAlt: "Konsultprofil med certifieringslista som visar utfärdandedatum och aktuell status",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Hur får vi ut 80 konsult-CV:n ur SharePoint och in i MagicCV?",
        answer:
          "Ladda upp dem som de är - Word, PDF eller exporterade LinkedIn-profiler. MagicCV tolkar varje fil till en strukturerad profil, en per person, så att den blandade mappen med final_v2- och final_v3-filer blir en ren, sökbar databas. De flesta team migrerar hela konsultstyrkan på en eftermiddag.",
      },
      {
        question: "RFP:n kräver en kompetensmatris med antal år per teknik. Kan MagicCV producera den?",
        answer:
          "Ja. Kompetenser lagras som strukturerad data på varje profil, inte begravda i prosa, så AI:n kan mappa dem mot vad underlaget efterfrågar och presentera dem i det format upphandlingen kräver. Om kunden kräver sin egen matrislayout sätter ni upp den som en mall och exporterar direkt in i den.",
      },
      {
        question: "Kan vi behålla vår befintliga Word-CV-mall?",
        answer:
          "Ja. Återskapa er egen layout som en varumärkesmall i MagicCV - typsnitt, färger, struktur - så matchar varje export den exakt, i Word eller PDF. Ni kan hålla flera mallar parallellt, en per ramavtal eller nyckelkund.",
      },
      {
        question: "Hur håller vi 60+ konsult-CV:n aktuella utan att jaga folk?",
        answer:
          "Varje konsult har en masterprofil, så en uppdatering sker en gång i stället för i fem Word-filer. Projekthistorik och certifieringar är egna fält, vilket gör det uppenbart vad som är inaktuellt. Den chattbaserade redigeraren gör dessutom uppdateringar snabba nog att folk faktiskt gör dem.",
      },
      {
        question: "Är MagicCV en ersättning för ATS eller HRIS?",
        answer:
          "Nej. Ett ATS följer sökande och ett HRIS hanterar lön och ledighet - inget av dem producerar ett kundklart konsult-CV. MagicCV är CV-hanteringslagret: det håller anbudsklara profiler över ert leveransteam och genererar skräddarsydda, varumärkesanpassade CV:n för RFP:er och ramavtalsavrop.",
      },
      {
        question: "Kan underkonsulters och frilansares CV:n läggas i samma databas?",
        answer:
          "Ja. En profil är en profil - många konsultbolag håller associerade och återkommande underkonsulter bredvid anställda så att ett anbudsteam kan bemanna ett helt anbud från en sökning. Åtkomstkontroller låter er avgöra vem som ser vilka profiler.",
      },
      {
        question: "Vad kostar det för ett konsultbolag med 40 personer?",
        answer:
          "Pro-planen kostar $50/månad och täcker 200 profiler och 600 genererade CV:n, vilket räcker för de flesta konsultbolag upp till några hundra konsulter. Det finns en gratisnivå (10 profiler, 30 CV:n) för att testa arbetsflödet på ett skarpt anbud, och Enterprise lägger till obegränsad användning, SSO och ett personuppgiftsbiträdesavtal (DPA).",
      },
      {
        question: "Var lagras vår konsultdata?",
        answer:
          "I EU, med GDPR-by-design-hantering, granskningsloggar och rollbaserad åtkomst. Enterprise-planer lägger till SSO och ett personuppgiftsbiträdesavtal (DPA). SOC 2-certifieringen är pågående; Trust Center har den aktuella statusen.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "För säljteam", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV för mjukvaru- & IT-konsultbolag",
      description:
        "Matcha konsulter på kompetens och teknisk erfarenhet, och generera sedan RFP-klara CV:n - på vilket språk som helst.",
      keywords: ["CV-hantering IT-konsult", "teknikkonsult-CV för RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Strategi- och managementkonsultbolag där partner- och konsulttrovärdighet vinner affärer.",
    angle:
      "Strategianbud vinns på det namngivna teamet, och det namngivna teamets CV:n är oftast de svagaste sidorna i dokumentet. Partnern håller sig med en personlig bio från 2023 som ingen får röra. Uppdragslistorna är generiska eftersom analytikern som satte ihop paketet klockan 23 hämtade dem från förra anbudet, som hämtade dem från det innan. Kunden läser fem bios i fem något olika format och drar en slutsats om byråns känsla för detaljer.\n\nMagicCV ger varje partner och konsult en masterprofil - uppdrag, sektorer, kompetenser - underhållen på ett ställe. För varje pitch läser AI:n underlaget och sorterar om varje bio så att de mest relevanta uppdragen leder: turnaround-arbetet inom retail för retail-turnaround-pitchen, inte de generiska topp fem. Hela teampaketet exporteras i er varumärkesmall, så att dokumentet en partner godkänner torsdag morgon ser ut som om en enda byrå skrev det.",
    h1: "Anbudet namnger teamet. Se till att varje namngivet CV förtjänar sin plats.",
    sub: "Partnerbios och konsult-CV:n som sätter de uppdrag just den här pitchen kräver i förgrunden - sammansatta på minuter, enhetliga genom hela paketet.",
    keyPoints: [
      {
        title: "Rätt uppdrag leder, per underlag",
        body: "Ge MagicCV pitchunderlaget så sorterar den om varje persons uppdragshistorik så att det mest relevanta arbetet kommer först - sektor, problemtyp, kundstorlek. Kunden ser ett team sammansatt för deras problem, inte en återvunnen meritsida.",
        screenshotAlt: "Konsultbio med tre retail-transformationsuppdrag flyttade ovanför tidigare arbete, underlagets krav visade bredvid",
      },
      {
        title: "En masterprofil gör slut på problemet med personliga versioner",
        body: "Varje partner och konsult har en enda sanningskälla för sin erfarenhet, uppdaterad en gång via chattbaserad redigering. Partnern som höll sig med en egen Word-version slutar vara en flaskhals, eftersom skräddarsydda bios genereras från profilen i stället för från den fil hen senast mejlade.",
        screenshotAlt: "Partnerprofil med uppdragshistorik, sektortaggar och datum för senaste uppdatering",
      },
      {
        title: "Ett paket som läses som en byrå",
        body: "Sätt ihop partners, principals och leveransteamet i ett enda pitchpaket, alla i samma varumärkesmall. Slut på torsdagskvällens formateringspass för att få fem bios från tre kontor att se ut som om de hör hemma i samma dokument.",
        screenshotAlt: "Pitchpaket med sex personer i en enhetlig varumärkesmall, partnerbios först",
      },
      {
        title: "Sektor- och kompetenstaggar sköter minnet",
        body: "Uppdrag taggas per sektor och kompetens, så prissättningsspecialisten med tre dagligvarukunder dyker upp när dagligvarupitchen kommer in - även om bemanningsansvarig partner aldrig arbetat med henne. Institutionellt minne slutar bero på vem som råkar sitta i rummet.",
        screenshotAlt: "Sökresultat för prissättning + dagligvaruhandel med 4 konsulter rankade efter uppdragsrelevans",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Fungerar detta för bios på partnernivå, inte bara konsult-CV:n?",
        answer:
          "Ja - en partnerbio är samma mekanism med annan betoning. Profilen håller hela uppdragshistoriken; exportmallen styr om den renderas som en bio på en sida eller ett detaljerat CV, och AI:n skräddarsyr båda för den aktuella pitchen.",
      },
      {
        question: "Hur avgör MagicCV vilka uppdrag som ska lyftas fram?",
        answer:
          "Den läser underlaget - angiven sektor, problem, omfattning - och rankar personens verkliga uppdrag mot det. Den sorterar om och omformulerar; den hittar aldrig på arbete som inte finns i profilen. Ni granskar innan något går in i paketet.",
      },
      {
        question: "Kan vi generalisera kundnamn i uppdragsbeskrivningar?",
        answer:
          "Ja. Uppdragen lagras som ni skrev dem, och den chattbaserade redigeraren gör det snabbt att producera en diskret version (\"en av Europas tre största dagligvarukedjor\") för en viss export utan att röra masterposten. Anonymisering med ett klick finns också när en process kräver helt avidentifierade CV:n.",
      },
      {
        question: "Hur migrerar vi bios som i dag bor inne i gamla anbudspresentationer?",
        answer:
          "Exportera eller klistra in dem i valfri form - Word, PDF, till och med rå text - så tolkar MagicCV varje till en strukturerad profil. Första passet tar minuter per person; partners bekräftar sedan sin egen profil en gång i stället för att godkänna en ny bio varje pitch.",
      },
      {
        question: "Kan vi behålla vår befintliga anbudsmall?",
        answer:
          "Ja. Sätt upp er varumärkesmall - typografi, layout, struktur - så exporteras varje bio och CV in i den som pixelkonsekvent PDF eller Word, redo att läggas in i anbudsdokumentet.",
      },
      {
        question: "Hur skiljer sig detta från att hålla bios i en välorganiserad SharePoint?",
        answer:
          "SharePoint lagrar dokument; den kan inte tala om vilken av 40 konsulter som har erfarenhet av energiomställning, och varje skräddarsydd version blir ännu en fil att förvalta. MagicCV lagrar strukturerade profiler som den kan söka i, resonera kring mot ett underlag och exportera från - dokumentet är en utdata, inte systemet.",
      },
      {
        question: "Vad kostar det för en boutiquebyrå?",
        answer:
          "Free täcker 10 profiler och 30 CV:n - nog för att köra en riktig pitch genom verktyget. Pro kostar $50/månad för 200 profiler och 600 CV:n, vilket täcker de flesta oberoende och medelstora byråer. Enterprise lägger till SSO, ett personuppgiftsbiträdesavtal (DPA) och obegränsad användning.",
      },
      {
        question: "Vem kontrollerar vad som går ut under en partners namn?",
        answer:
          "Rollbaserad åtkomst separerar vem som kan redigera profiler från vem som kan generera och exportera paket, och granskningsloggar registrerar varje ändring. Partners kan granska sin skräddarsydda bio före inlämning utan att behöva underhålla den själva.",
      },
    ],
    related: [
      { label: "RFP-till-CV-resonemang", href: "/features/rfp-to-cv" },
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "För säljteam", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV för strategi- & managementkonsulting",
      description:
        "MagicCV resonerar kring underlaget och lyfter fram varje konsults mest relevanta erfarenhet - varumärkesanpassat, partnerklart.",
      keywords: ["anbuds-CV managementkonsult", "strategikonsult CV för anbud"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Design-, kreativa och digitala byråer som pitchar på projekt och retainers; portfölj och teammeriter avgör.",
    angle:
      "Pitchdecket är vackert. Sedan kommer teamsliden, och biosen är i sex stilar för att de klipptes ur de tre senaste meritdecken, och den nya motion designern finns inte i någon av dem. Någon senior bygger om biosen i Figma kvällen före - igen - för en byrå som säljer hantverk kan inte skicka en teamsida som ser hopslängd ut, även när den var det.\n\nMagicCV håller en strukturerad profil per person - anställda såväl som återkommande frilansare - och renderar bios genom er studios egen mall: era typsnitt, era färger, er layout. För varje pitch skräddarsyr AI:n vad varje bio leder med så att det matchar briefen, och hela teamsidan exporteras som färdig PDF eller Word. Hantverket förblir synligt; ombyggandet upphör.",
    h1: "Teamsidor som ser ut som om er studio gjorde dem - utan att göra om dem varje pitch.",
    sub: "En profil per kreatör, renderad i exakt er grafiska profil och skräddarsydd för varje brief, så att teamsliden slutar äta upp kvällen före pitchen.",
    keyPoints: [
      {
        title: "Ert varumärke, applicerat automatiskt",
        body: "Ställ in er studios mall en gång - typografi, färger, layout - så exporteras varje bio pixelkonsekvent i den. Teamsidan håller äntligen samma standard som resten av decket, utan att en designer rör den.",
        screenshotAlt: "Fyra kreatörsbios renderade i en studios egen mall med enhetlig typografi och fotobehandling",
      },
      {
        title: "Bios skräddarsydda för briefen, inte återvunna från förra decket",
        body: "Ge MagicCV pitchbriefen så leder varje bio med det relevanta arbetet: e-handelsprojekten för e-handelspitchen, rebrand-arbetet för rebranden. Samma personer, skarpare berättelse, ingen manuell omskrivning.",
        screenshotAlt: "Creative director-bio med e-handelsprojekt lyfta överst för en retailpitch",
      },
      {
        title: "Hela rostern på ett ställe, frilansare inräknade",
        body: "Importera bios och CV:n från Word, PDF eller LinkedIn så blir varje person en strukturerad, sökbar profil. När en pitch behöver en UX-researcher med fintecherfarenhet söker ni - i stället för att scrolla Slack efter frilansaren någon anlitade förra våren.",
        screenshotAlt: "Rostervy filtrerad på UX-researchers, med både anställda och frilansprofiler med tillgänglighetstaggar",
      },
      {
        title: "Internationella pitchar på kundens språk",
        body: "Översätt valfri bio eller en hel teamsida till kundens språk med er layout intakt. Gränsöverskridande pitchar slutar kräva en separat runda av översättning och omlayout.",
        screenshotAlt: "Samma teambio visad sida vid sida på engelska och tyska i identisk studiobranding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kan vi behålla vår studios exakta visuella identitet?",
        answer:
          "Ja - det är hela poängen. Ni definierar mallen med era typsnitt, färger och er layout, och varje genererad bio ärver den exakt, exporterad som PDF eller Word. Om resultatet inte ser ut som ert är mallen inte färdig än.",
      },
      {
        question: "Är detta för CV:n, eller de korta bios vi lägger i deck?",
        answer:
          "Båda kommer från samma profil. En mall styr utdataformatet, så en persons profil kan renderas som en deckbio på tre rader, en one-pager eller ett komplett CV för en retainer- eller ramavtalspitch - alla konsekventa med varandra.",
      },
      {
        question: "Kan vi inkludera frilansare och återkommande samarbetspartners?",
        answer:
          "Ja. Många byråer håller sin betrodda frilansbänk i samma databas som anställda, så att ett pitchteam kan sättas ihop och presenteras i ett svep. Åtkomstkontroller avgör vem som kan se och exportera vilka profiler.",
      },
      {
        question: "Hur får vi in allas bios utan ett stort innehållsprojekt?",
        answer:
          "Ladda upp det som finns - gamla CV:n, LinkedIn-exporter, bios kopierade från tidigare deck - så tolkar MagicCV varje till en strukturerad profil. Därifrån putsar folk sin egen profil via chattbaserad redigering, vilket går snabbare än att få dem att fylla i ett formulär.",
      },
      {
        question: "Vad kostar det för en studio med 15 personer?",
        answer:
          "Free täcker 10 profiler och 30 genererade CV:n, vilket räcker för att testa på en riktig pitch. Pro för $50/månad täcker 200 profiler och 600 CV:n - plats för hela studion plus frilansbänken. Enterprise finns för större nätverk som behöver SSO och obegränsad användning.",
      },
      {
        question: "Hur hanteras personuppgifter? Vissa profiler är frilansare, inte anställda.",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, rollbaserad åtkomst och granskningsloggar, vilket spelar roll när ni håller profiler över personer som inte står på lönelistan. Profiler kan tas bort rent när ett samarbete tar slut.",
      },
    ],
    related: [
      { label: "Varumärkessäkrade exporter", href: "/features/brand-templates" },
      { label: "Skräddarsy CV:n för varje underlag", href: "/use-cases/tailor-cvs" },
    ],
    seo: {
      title: "MagicCV för design- & kreativa byråer",
      description:
        "Generera snyggt enhetliga, skräddarsydda konsult- och kreatörsprofiler som matchar er studios varumärke.",
      keywords: ["verktyg för teambios byrå", "kreativ byrå CV för pitch"],
    },
  },
  {
    _type: "industryPage",
    slug: "engineering-consulting",
    reader:
      "Teknikkonsultbolag inom bygg/konstruktion/installation/miljö - extremt upphandlings- och CV-tunga, särskilt inom offentlig upphandling.",
    angle:
      "Upphandlingen landar med ett obligatoriskt CV-formulär i bilaga C: kvalifikationer, yrkesregistreringar, sedan projektreferenser med roller, värden och datum - för 12 ingenjörer, inlämnat i köparens format, till fredag klockan tolv. Referenserna finns, utspridda i gamla anbud och i ingenjörernas egna Word-filer, hälften beskriver samma projekt på tre olika sätt. Lägg till en konsortiepartner som skickar sina CV:n i ännu en layout, så förlorar anbudsansvarig två dagar på omformatering i stället för att skriva det tekniska svaret.\n\nMagicCV håller varje ingenjörs kvalifikationer, registreringar och projektreferenser som strukturerad data, inmatad en gång. När en upphandling kommer mappar AI:n profiler mot dess krav, plockar fram de referenser som ger poäng och exporterar varje CV i exakt den mall bilagan kräver - översatt där upphandlingen kräver det, anonymiserat där utvärderingen är blind. Nästa års ramavtalsförnyelse utgår från aktuella profiler, inte från en utgrävning i förra inlämningen.",
    h1: "Ramavtalsförnyelser och konsortieanbud, utan att bygga om 12 ingenjörs-CV:n för hand.",
    sub: "Kvalifikationer, registreringar och projektreferenser lagrade en gång - exporterade i exakt det format varje upphandlingsbilaga kräver, på vilket språk som helst.",
    keyPoints: [
      {
        title: "Bilagans format, producerat i stället för ombyggt",
        body: "Sätt upp köparens obligatoriska CV-struktur som en mall och exportera varje ingenjörs CV rakt in i den, i Word eller PDF. När nästa upphandling kräver en annan struktur lägger ni till en mall - ni formaterar inte om 12 dokument.",
        screenshotAlt: "Ingenjörs-CV exporterat i en offentlig upphandlings obligatoriska bilageformat, med registrerings- och referenssektioner i föreskriven ordning",
      },
      {
        title: "Projektreferenser som matchar poängkriterierna",
        body: "Referenser lever som strukturerade poster - roll, omfattning, värde, datum - återanvändbara över anbud. Mata in upphandlingen så plockar AI:n fram varje ingenjörs referenser som bäst matchar vad utvärderarna kommer att poängsätta, i stället för samma tre projekt alla alltid listar.",
        screenshotAlt: "Referenslista filtrerad på vatteninfrastrukturprojekt över 10 miljoner euro, matchad mot upphandlingskriterier",
      },
      {
        title: "Registreringar där utvärderarna letar efter dem",
        body: "Auktorisation och yrkesregistreringar är fält på profilen, hållna aktuella på ett ställe och renderade exakt där varje upphandlingsformat förväntar sig dem. Slut på att upptäcka ett utgånget registreringsdatum under efterlevnadskontrollen.",
        screenshotAlt: "Ingenjörsprofil med auktorisationsstatus och yrkesregistreringar med datum",
      },
      {
        title: "Blindutvärdering och flerspråkiga anbud från samma profil",
        body: "Ett klick anonymiserar ett CV för blindutvärdering; översättningen producerar den franska eller tyska versionen med layouten intakt. Båda kommer från samma masterprofil, så språkversionerna glider aldrig ur synk med originalet.",
        screenshotAlt: "Anonymiserat ingenjörs-CV bredvid sin franska översättning, båda i upphandlingens obligatoriska format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Offentliga upphandlingar kräver egna CV-formulär. Kan MagicCV exportera in i dem?",
        answer:
          "Ja. Ni återskapar den obligatoriska strukturen som en mall - sektionsordning, tabeller, fältetiketter - och exporterar varje ingenjörs CV direkt in i den. Konsultbolag som lämnar anbud i flera ramavtal håller vanligtvis en mall per köpare bredvid det egna formatet.",
      },
      {
        question: "Kan vi importera vår konsortiepartners CV:n för ett gemensamt anbud?",
        answer:
          "Ja. Ladda upp deras Word- eller PDF-CV:n så tolkas de till strukturerade profiler precis som era egna, så att hela konsortiets CV:n exporteras i ett enhetligt, regelrätt format. Åtkomstkontroller håller partnerprofiler separerade efteråt om ni vill det.",
      },
      {
        question: "Hur fungerar anonymisering för blindutvärdering?",
        answer:
          "Ett klick tar bort namn, foton och identifierande uppgifter medan kvalifikationer, registreringar och referenser förblir intakta. Ni granskar den avidentifierade versionen innan den går in i inlämningen, och masterprofilen förblir orörd.",
      },
      {
        question: "Hur underhåller vi ett referensbibliotek över 50 ingenjörer?",
        answer:
          "Varje referens matas in en gång som strukturerad data och återanvänds i varje anbud och för varje ingenjör den gäller. När ett projekt avslutas lägger ni till det medan detaljerna är färska - sedan finns det tillgängligt för ramavtalsförnyelsen två år senare, i stället för att rekonstrueras ur minnet.",
      },
      {
        question: "Vi lämnar anbud på tyska, franska och nederländska. Behåller översättningen formatet?",
        answer:
          "Ja - CV:n översätts till upphandlingens språk med mallens layout intakt, så den översatta versionen är inlämningsklar snarare än en omstart. Alla språkversioner genereras från samma masterprofil.",
      },
      {
        question: "Offentliga köpare granskar datahantering. Var ligger vår data?",
        answer:
          "Datalagring i EU, GDPR-by-design, granskningsloggar och rollbaserad åtkomst. Enterprise lägger till SSO och ett personuppgiftsbiträdesavtal (DPA). SOC 2 är pågående - Trust Center bär den aktuella statusen, som ni kan hänvisa till i era egna efterlevnadssvar.",
      },
      {
        question: "Ersätter detta vårt HR-system?",
        answer:
          "Nej. Ert HRIS hanterar anställningen; MagicCV hanterar det anbudsvända lagret - upphandlingsklara CV:n, registreringar och referenser - vilket HR-system inte producerar. De samexisterar; MagicCV äger dokumenten som går in i inlämningar.",
      },
      {
        question: "Vad kostar det för ett konsultbolag med 60 ingenjörer?",
        answer:
          "Pro kostar $50/månad för 200 profiler och 600 genererade CV:n, vilket med god marginal täcker ett bolag av den storleken genom ett års upphandlingar. Gratisnivån (10 profiler, 30 CV:n) låter er pilottesta en skarp upphandling först, och Enterprise lägger till obegränsad användning, SSO och ett personuppgiftsbiträdesavtal (DPA).",
      },
    ],
    related: [
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Anonymisera CV:n", href: "/use-cases/anonymize-cvs" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
    ],
    seo: {
      title: "MagicCV för ingenjörs- & teknikkonsultbolag",
      description:
        "Standardiserade, evidensbaserade ingenjörs-CV:n med kvalifikationer, registreringar och projektreferenser.",
      keywords: ["ingenjörs-CV för upphandling", "konsult-CV för offentlig upphandling"],
    },
  },
  {
    _type: "industryPage",
    slug: "audit-advisory",
    reader:
      "Medelstora revisions-, skatte- och rådgivningsbyråer samt redovisningsbyråer som svarar på RFP:er och panel-/ramavtalsinlämningar.",
    angle:
      "Panelinlämningar och uppdragsofferter fortsätter fråga efter samma sak: meriterade team-CV:n som visar rätt sektorerfarenhet, kvalifikationsdatum och regulatorisk historik - och varje kontor sätter ihop dem på olika sätt. Hamburgkontoret använder en layout, skattepraktiken en annan, och när en partner roterar in i ett uppdrag mitt i offertarbetet bygger någon om hens CV från en två år gammal version klockan 20. För en byrå som säljer noggrannhet är inkonsekventa teammeriter en dålig signal inför en revisionskommitté.\n\nMagicCV håller en profil per partner och yrkesperson - kvalifikationer, sektorerfarenhet, uppdragshistorik - taggad och sökbar i hela byrån. Offerter hämtar skräddarsydda CV:n som sätter den sektor- och regulatoriska erfarenhet varje uppdrag kräver i förgrunden, exporterade i byråmallen så att varje kontor lämnar in samma byrå. Rollbaserad åtkomst och granskningsloggar håller styrningen över vem som ser och ändrar vad, vilket är den standard ert eget riskteam kommer att kräva av verktyget.",
    h1: "Panelinlämningar med samma meriterade CV:n från varje kontor, varje gång.",
    sub: "En styrd profil per yrkesperson - kvalifikationer, sektorerfarenhet, uppdragshistorik - exporterad enhetligt för varje offert och ramavtalsinlämning.",
    keyPoints: [
      {
        title: "Meriter och sektorerfarenhet som sökbar data",
        body: "Kvalifikationer, licenser och sektortaggar är strukturerade fält, inte rader i en Word-fil. När uppdraget behöver en revisionspartner inom finansiella tjänster med erfarenhet av företag av allmänt intresse svarar sökningen på sekunder - över alla kontor, inte bara det som sätter ihop offerten.",
        screenshotAlt: "Byråövergripande sökning filtrerad på revisionspartners med erfarenhet av finansiella tjänster och PIE, med 5 resultat och kvalifikationsmärken",
      },
      {
        title: "Varje offert läses som en byrå",
        body: "Alla CV:n exporteras genom samma byråmall, vem som än sätter ihop dem och var de än sitter. Panelinlämningen från skattepraktiken och RFP-svaret från rådgivningen slutar se ut som om de kom från olika byråer.",
        screenshotAlt: "Fyra yrkes-CV:n från olika tjänsteområden renderade i en och samma byråmall",
      },
      {
        title: "Styrning som ert riskteam accepterar",
        body: "Rollbaserad åtkomst styr vem som kan se och redigera profiler, och granskningsloggar registrerar varje ändring med vem och när. När någon frågar hur CV-datan styrs finns ett faktiskt svar i stället för en gissning om SharePoint-behörigheter.",
        screenshotAlt: "Granskningslogg med profiländringar per användare, fält och tidsstämpel, bredvid inställningar för rollbaserad åtkomst",
      },
      {
        title: "Gränsöverskridande uppdrag på kundens språk",
        body: "Översätt valfritt CV till uppdragets arbetsspråk medan byråmallen förblir intakt. Offerter över flera länder slutar kräva en separat översättningsrunda per medlemsbyrå.",
        screenshotAlt: "Rådgivningspartner-CV visat i engelsk och tysk version i identisk byråbranding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kan vi spåra yrkeskvalifikationer och licensdatum på varje profil?",
        answer:
          "Ja - kvalifikationer är strukturerade fält med datum, uppdaterade en gång och speglade i varje CV som genereras efteråt. Det gör slut på jakten före inlämning på att bekräfta vems meriter som anges korrekt.",
      },
      {
        question: "Hur styrs åtkomsten till yrkesdata i hela byrån?",
        answer:
          "Rollbaserad åtkomst definierar vem som kan se, redigera och exportera profiler - till exempel kan offertteam generera CV:n utan redigeringsrättigheter över den underliggande datan. Granskningsloggar registrerar varje ändring, vilket tillfredsställer de flesta interna riskgranskningar.",
      },
      {
        question: "Är MagicCV SOC 2-certifierad?",
        answer:
          "SOC 2-certifieringen är pågående, inte klar - vi påstår inte annat. Det som finns på plats i dag: GDPR-by-design-arkitektur, datalagring i EU, granskningsloggar, rollbaserad åtkomst samt SSO och ett personuppgiftsbiträdesavtal (DPA) på Enterprise. Trust Center har den aktuella statusen.",
      },
      {
        question: "Var lagras datan, och finns det ett personuppgiftsbiträdesavtal?",
        answer:
          "Datan lagras i EU med GDPR-by-design-hantering. Ett personuppgiftsbiträdesavtal (DPA) ingår i Enterprise-planen, tillsammans med SSO - de vanliga kraven när byråns egen efterlevnadsfunktion granskar ett nytt verktyg.",
      },
      {
        question: "Hur migrerar vi CV:n som bor på varje kontors egen enhet?",
        answer:
          "Ladda upp dem som Word eller PDF så tolkar MagicCV varje till en strukturerad profil. Den realistiska vägen är en praktikgrupp i taget: importera, låt yrkespersonerna bekräfta sin egen profil via chattbaserad redigering, och byt sedan över den gruppens offerter.",
      },
      {
        question: "Kan vi behålla byråns befintliga CV-mall?",
        answer:
          "Ja. Er mall återskapas en gång - layout, typografi, sektionsordning - och varje export matchar den i Word eller PDF. Byråer i nätverk håller ofta nätverksstandardmallen bredvid den lokala.",
      },
      {
        question: "Hur skiljer sig detta från vårt ATS eller HR-system?",
        answer:
          "De systemen hanterar rekrytering och anställning; inget av dem producerar ett offertklart partner-CV. MagicCV är CV-hanteringsprogram för det kundvända lagret - de meriterade teamsidorna som går in i panelinlämningar, RFP:er och uppdragsbrev.",
      },
      {
        question: "Hur ser prissättningen ut för en byrå med 100 personer?",
        answer:
          "Pro för $50/månad täcker 200 profiler och 600 genererade CV:n, vilket passar de flesta medelstora byråer. Enterprise prissätts individuellt för obegränsad användning, SSO och ett personuppgiftsbiträdesavtal (DPA) - oftast där byråer med flera kontor landar när risk och IT godkänt.",
      },
    ],
    related: [
      { label: "För HR / People Ops-team", href: "/solutions/hr" },
      { label: "Centraliserade profiler & kompetenser", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV för revisions-, skatte- & rådgivningsbyråer",
      description:
        "Lyft fram rätt sektor- och regulatorisk erfarenhet för varje uppdrag, med styrning och enhetlighet inbyggd.",
      keywords: ["anbuds-CV rådgivningsbyrå", "CV-verktyg redovisningskonsult"],
    },
  },
  {
    _type: "industryPage",
    slug: "public-sector",
    reader: "Bolag som i hög grad lämnar anbud i EU- och myndighetsupphandlingar samt ramavtal (oavsett disciplin).",
    angle:
      "I offentlig upphandling är CV:t ett efterlevnadsdokument innan det är ett säljdokument. Upphandlingen föreskriver en CV-mall i bilagan, sätter tak på sidantal, kräver avidentifierade versioner för utvärdering och vill ha inlämningen på två språk - och ett enda icke-regelrätt CV kan få ett annars vinnande anbud förkastat. Team som lämnar anbud i ramavtal kan mönstret: samma 15 experter, omformaterade igen för varje avrop, med anonymiseringen gjord för hand i Word och kontrollerad två gånger för att ingen litar på sök-och-ersätt.\n\nMagicCV behandlar de kraven som standardfallet, inte undantaget. Masterprofiler exporteras in i vilken standardiserad mall köparen än föreskriver; anonymisering är ett klick, inte en kväll; översättning till DE, FR, NL eller vilket upphandlingsspråk som helst behåller layouten intakt. I grunden innebär GDPR-by-design och datalagring i EU att verktyget som håller era experters personuppgifter klarar samma granskning som ert anbud gör.",
    h1: "Klara CV-efterlevnadskontrollen på första försöket, i varje upphandling.",
    sub: "Standardiserade mallar, avidentifierade CV:n med ett klick, flerspråkig utdata och GDPR-by-design - det CV-arbetsflöde EU- och myndighetsupphandlingar faktiskt kräver.",
    keyPoints: [
      {
        title: "Köparens obligatoriska mall, exporterad inte imiterad",
        body: "Återskapa upphandlingens föreskrivna CV-struktur som en mall - EU-standardformat inräknade - och exportera varje experts CV direkt in i den. Efterlevnadskontroller slutar hitta formatavvikelser i sämsta möjliga läge.",
        screenshotAlt: "Expert-CV exporterat i en EU-upphandlings obligatoriska standardmall med föreskriven sektionsordning",
      },
      {
        title: "Avidentifierade CV:n med ett klick, inte en kväll",
        body: "Anonymiseringen tar bort namn, foton och identifierande uppgifter i ett enda steg medan kvalifikationer och projektbevis bevaras. Den blinda uppsättningen för utvärdering och den namngivna för kontraktering kommer från samma profiler, så de kan inte motsäga varandra.",
        screenshotAlt: "Ett namngivet CV och dess anonymiserade version sida vid sida för blindutvärdering",
      },
      {
        title: "Varje upphandlingsspråk från en masterprofil",
        body: "Generera DE-, FR- eller NL-versionen av valfritt CV med layouten orörd. Tvåspråkiga inlämningar slutar dubbla förberedelsearbetet, och språkversionerna förblir i synk eftersom de delar en källa.",
        screenshotAlt: "Ett expert-CV renderat i tysk, fransk och nederländsk version i samma standardiserade format",
      },
      {
        title: "Datahantering som klarar köparens granskning",
        body: "Datalagring i EU, GDPR-by-design-behandling, granskningsloggar och rollbaserad åtkomst - svar ni kan citera när köparens frågeformulär undrar hur expertdata hanteras. Enterprise lägger till SSO och ett personuppgiftsbiträdesavtal (DPA).",
        screenshotAlt: "Förtroendeinställningar med datalagring i EU, granskningslogg och åtkomstkontroller för en offentlig-sektor-arbetsyta",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kan MagicCV producera CV:n i de standardiserade format EU-upphandlingar föreskriver?",
        answer:
          "Ja - föreskrivna strukturer sätts upp som mallar och varje CV exporteras direkt in i dem, i Word eller PDF. Bolag som lämnar anbud i flera ramavtal håller en mall per köpare, så rätt format är ett val, inte en ombyggnad.",
      },
      {
        question: "Vad exakt tar anonymiseringen bort?",
        answer:
          "Namn, foton, kontaktuppgifter och identifierande referenser, medan kvalifikationer, erfarenhet och projektbevis förblir intakta. Ni granskar det avidentifierade CV:t före inlämning, och den namngivna masterprofilen ändras aldrig.",
      },
      {
        question: "Håller översättningen för formella upphandlingsinlämningar?",
        answer:
          "Översättningarna behåller den föreskrivna layouten intakt och genereras från strukturerad profildata, vilket undviker glidningen som uppstår när språkversioner underhålls som separata Word-filer. Vid inlämningar med höga insatser låter de flesta team en modersmålstalare göra en slutläsning - poängen är att de granskar, inte skriver om.",
      },
      {
        question: "Var lagras våra experters personuppgifter?",
        answer:
          "I EU, med GDPR-by-design-hantering, granskningsloggar och rollbaserad åtkomst. Enterprise inkluderar SSO och ett personuppgiftsbiträdesavtal (DPA). Trust Center bär den aktuella, faktabaserade bilden - inklusive SOC 2-statusen, som är pågående.",
      },
      {
        question: "Vi lämnar in samma experter för varje ramavtalsavrop. Blir det enklare?",
        answer:
          "Avsevärt. Masterprofilerna hålls aktuella mellan avropen, så att svara på en förnyad konkurrensutsättning betyder att välja experterna, applicera ramavtalets mall och granska - i stället för att återuppliva förra kvartalets Word-filer och dubbelkolla varje datum.",
      },
      {
        question: "Kan vi hantera CV:n från konsortie- eller underleverantörsexperter?",
        answer:
          "Ja - ladda upp deras CV:n i valfritt format så blir de strukturerade profiler bredvid era egna, exporterade i samma regelrätta mall. Åtkomstkontroller håller externa profiler avgränsade utanför anbudet om det behövs.",
      },
      {
        question: "Vad händer om vi överskrider planens gränser mitt i en upphandling?",
        answer:
          "Free täcker 10 profiler och 30 CV:n; Pro ($50/månad) täcker 200 profiler och 600 CV:n, vilket absorberar en tung upphandlingssäsong för de flesta bolag. Enterprise tar bort gränserna och lägger till SSO och ett personuppgiftsbiträdesavtal (DPA) - rätt val för bolag där upphandlingsvolymen eller IT-policyn kräver det.",
      },
    ],
    related: [
      { label: "Anonymisera CV:n", href: "/use-cases/anonymize-cvs" },
      { label: "Flerspråkighet & översättning", href: "/features/multilingual" },
      { label: "Trust Center", href: "/trust" },
      { label: "Ingenjörs- & teknikkonsulting", href: "/solutions/engineering-consulting" },
    ],
    seo: {
      title: "MagicCV för offentlig sektor & upphandlingsdriven konsulting",
      description:
        "Standardiserade mallar, anonymisering, flerspråkiga underlag och GDPR-by-design för EU- och myndighetsupphandlingar.",
      keywords: ["CV-format EU-upphandling", "CV-verktyg offentlig upphandling", "anonymiserat CV för upphandlingar"],
    },
  },
  {
    _type: "industryPage",
    slug: "staffing-agencies",
    reader:
      "Specialiserade (icke-volymbaserade) bemannings- och talangbyråer som placerar yrkespersoner och skickar kandidat-CV:n till kunder.",
    angle:
      "En kandidats Word-CV kommer in klockan 16. Kunden vill ha kandidatpresentationer i sitt format - varumärkta, avidentifierade, två sidor - till i morgon bitti, och det här är tredje kunden den här veckan med en annan mall. Så rekryteraren tillbringar kvällen med omformatering i stället för sourcing, och presentationen går ändå ut med kandidatens namn i ett sidhuvud någon glömde kontrollera. Inom specialiserad placering är presentationen produkten kunden faktiskt ser; när den ser stressad ut ser byrån utbytbar ut.\n\nMagicCV förvandlar det inkommande CV:t till en strukturerad kandidatprofil i en enda import - Word, PDF eller LinkedIn. Därifrån är den kundformaterade, byråvarumärkta presentationen en export: välj kundens mall, applicera anonymisering med ett klick om processen är blind, översätt om rollen sitter på en annan marknad. Kandidatdatabasen under förblir sökbar på kompetenser, sektor och språk, så nästa brief börjar med kandidater ni redan har, inte en ny LinkedIn-trålning.",
    h1: "Kundklara kandidatpresentationer ut samma dag, i varje kunds format.",
    sub: "Importera valfritt kandidat-CV, exportera en varumärkt, blindklar presentation i exakt det format varje kund kräver - och håll en sökbar kandidatdatabas i grunden.",
    keyPoints: [
      {
        title: "Från rått CV till kundpresentation på minuter",
        body: "Importera kandidatens CV som det kommer in och exportera det i kundens föreskrivna presentationsformat, under er byrås varumärke. Kvällens omformateringssession blir ett granskningspass, och mallar per kund gör att den tredje kundens format är ett val i en rullgardinsmeny, inte en ombyggnad.",
        screenshotAlt: "Rått kandidat-CV bredvid samma kandidat exporterad som en varumärkt kundpresentation på två sidor",
      },
      {
        title: "Blinda presentationer utan sök-och-ersätt-ritualen",
        body: "Ett klick tar bort namn, foton och kontaktuppgifter medan de erfarenhetsbevis kunden behöver för att göra en kortlista bevaras. Slut på att manuellt skrubba sidhuvuden och filegenskaper och hoppas att inget slank igenom.",
        screenshotAlt: "Anonymiserad kandidatpresentation med identifierande uppgifter borttagna och kompetenssammanfattningen intakt",
      },
      {
        title: "En kandidatdatabas ni faktiskt kan söka i",
        body: "Varje importerat CV blir en strukturerad profil, sökbar på kompetenser, sektor, språk och certifieringar. När en kund briefar en roll är första passet en sökning bland kandidater ni redan känner - ofta snabbare än att sourca från noll.",
        screenshotAlt: "Kandidatdatabas filtrerad på SAP-konsulter med tyska, med 9 profiler med kompetens- och språktaggar",
      },
      {
        title: "Gränsöverskridande placeringar på kundens språk",
        body: "Översätt en kandidats CV till kundens språk med presentationslayouten intakt. Att placera en Warszawabaserad utvecklare hos en tysk kund slutar kräva ett externt översättningssteg på en 24-timmarsklocka.",
        screenshotAlt: "Kandidatpresentation visad i engelsk och tysk version i samma byråvarumärkta format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Passar MagicCV för volymrekrytering med höga volymer?",
        answer:
          "Nej, och vi säger hellre det direkt. MagicCV är byggd för specialiserad och professionell placering, där varje presentation skräddarsys och CV-kvaliteten påverkar arvodet. Om ni flyttar hundratals nästan identiska CV:n i veckan tjänar ni bättre på ett volymverktyg.",
      },
      {
        question: "Ersätter MagicCV vårt ATS?",
        answer:
          "Nej - ert ATS fortsätter äga pipeline, steg och kundposter. MagicCV äger dokumentlagret som ATS:et är svagt på: att förvandla råa CV:n till genomarbetade, kundformaterade, blindklara presentationer. CV:n flyttas mellan de två som Word- eller PDF-filer.",
      },
      {
        question: "Kan vi sätta upp en egen presentationsmall per kund?",
        answer:
          "Ja. Varje kunds föreskrivna format - varumärke, struktur, sidantal - lever som sin egen mall, och att exportera till den är ett val. Byråer som betjänar MSP- eller enterprisekonton med strikta presentationskrav håller vanligtvis en mall per konto.",
      },
      {
        question: "Hur tillförlitlig är anonymiseringen för blinda presentationer?",
        answer:
          "Den är systematisk snarare än manuell: namn, foton och kontaktuppgifter tas bort ur den strukturerade profildatan, inte övermålade i ett dokument, så det finns inget sidhuvud eller någon filegenskap för ett namn att gömma sig i. Ni granskar ändå före utskick - det är er kundrelation.",
      },
      {
        question: "Hur hanterar vi kandidatdata under GDPR?",
        answer:
          "MagicCV är GDPR-by-design med datalagring i EU, granskningsloggar och rollbaserad åtkomst - relevant när ni håller tusentals kandidatprofiler över personer ni inte anställer. Profiler kan raderas rent när samtycket löper ut, och Enterprise lägger till ett personuppgiftsbiträdesavtal (DPA).",
      },
      {
        question: "Kan vi importera kandidater från LinkedIn?",
        answer:
          "Ja - LinkedIn-profilexporter importeras på samma sätt som Word- och PDF-CV:n och tolkas till strukturerade profiler. Det gör slut på klipp-och-klistra-steget mellan en sourcad profil och en presentabel kandidatpresentation.",
      },
      {
        question: "Vår kandidatdatabas växer snabbt. Vilka är gränserna?",
        answer:
          "Free täcker 10 profiler och 30 CV:n - nog för att testa presentationsflödet på skarpa roller. Pro ($50/månad) täcker 200 profiler och 600 CV:n, vilket passar en specialiserad desk med fokus på aktiva kandidater. Byråer med större pooler går till Enterprise för obegränsade profiler, SSO och ett personuppgiftsbiträdesavtal (DPA).",
      },
    ],
    note: "MagicCV är byggd för specialiserad och professionell placering - roller som vinns på presentationskvalitet - inte volymbemanning i höga volymer.",
    related: [
      { label: "Anonymisera CV:n", href: "/use-cases/anonymize-cvs" },
      { label: "Centralisera & standardisera CV:n", href: "/use-cases/centralize-cvs" },
      { label: "För rekryteringsteam", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV för specialiserade bemannings- & talangbyråer",
      description:
        "Formatera, varumärkesanpassa och anonymisera kandidatprofiler för varje kundinlämning - på minuter, på vilket språk som helst.",
      keywords: ["CV-formatering bemanningsbyrå", "verktyg för anonymisering av kandidat-CV"],
    },
  },
];
