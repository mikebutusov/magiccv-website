import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Anpassa varje konsults CV till det specifika underlaget så att den mest relevanta erfarenheten leder - utan ett omskrivningsmaraton före varje deadline.",
    h1: "Sluta skicka in samma CV till varje underlag.",
    sub: "MagicCV läser RFP:n och formar om varje konsults CV efter dess krav - så att utvärderarna ser matchningen på sida ett, inte på sida fyra.",
    problemToday:
      "Utvärderare poängsätter CV:n mot kriterierna i RFP:n, men de flesta bolag skickar in samma generiska dokument till varje kund. Alternativet är värre: en anbudsansvarig sitter med RFP-bilagan på 40 sidor på ena skärmen och final_v3_JS_edit.docx på den andra, och sorterar om punkter för hand i 12 CV:n, oftast inom ett 48-timmarsfönster. Halva skräddarsyendet blir gjort, andra halvan hoppas över, och CV:t som landar på utvärderarens bord säljer in en konsult som faktiskt passar starkt alldeles för dåligt.\n\nMed MagicCV klistrar ni in RFP:n, underlaget eller utvärderingskriterierna, och AI:n läser vad kunden poängsätter. Sedan sorterar den om och omprioriterar varje konsults verkliga erfarenhet från den strukturerade profilen så att den matchar - leveransledarens offentliga sektor-projekt flyttas överst för ett myndighetsanbud, hennes fintecharbete leder för en bank. Ni granskar resultatet, justerar vad som helst genom att chatta med redigeraren och exporterar i er varumärkesmall.",
    steps: [
      {
        title: "Ge MagicCV underlaget, inte en sammanfattning av det",
        body: "Klistra in hela RFP:n, bladet med utvärderingskriterier eller en beskrivning på två rader av vad kunden vill ha. MagicCV extraherar kraven den ska skräddarsy mot och visar dem för er innan den rör ett enda CV.",
        screenshotAlt: "RFP-dokument uppladdat med extraherade krav listade som taggar: offentlig sektor, Azure-migrering, fransktalande",
      },
      {
        title: "Se CV:t formas om kring kraven",
        body: "MagicCV sorterar om och omprioriterar erfarenhet från konsultens källprofil så att de mest relevanta projekten leder. Den hittar aldrig på - varje påstående i det skräddarsydda CV:t går att spåra tillbaka till något som redan finns i profilen.",
        screenshotAlt: "Vy sida vid sida med original och skräddarsytt CV, där relevanta offentliga sektor-projekt flyttats överst och matchade krav markerats",
      },
      {
        title: "Rätta detaljerna i chatten, inte i Word",
        body: "Be om ändringar på vanligt språk - \"led med Nordhaus Advisory-uppdraget\" eller \"korta 2015 års roller till en rad\" - så uppdateras CV:t på plats. Ingen layoutbrottning, inga versionsförgreningar.",
        screenshotAlt: "Chattpanel bredvid ett CV med instruktionen 'korta tidig karriär till en rad' applicerad på dokumentet",
      },
      {
        title: "Exportera i er profil, redo att bifogas",
        body: "Ett klick producerar en pixelkonsekvent PDF- eller Word-fil i företagets mall. Den skräddarsydda versionen sparas mot profilen, så nästa anbud startar från ett rent blad, inte från någons lokala kopia.",
        screenshotAlt: "Exportdialog med PDF- och Word-alternativ och förhandsvisning av företagets varumärkesmall",
      },
    ],
    outcome: "Före: tre timmar per CV av omläsning, omsortering och omformatering - eller ett generiskt CV och ett tyst hopp. Efter: klistra in underlaget, granska ett skräddarsytt utkast på minuter och skicka in CV:n som svarar direkt på utvärderingskriterierna. Skräddarsyendet som brukade hoppas över klockan 23 sker nu på varje anbud.",
    outcomeStats: [{ value: "+18%", label: "vinstfrekvens på anbud med skräddarsydda CV:n", isPlaceholder: true }],
    faqs: [
      {
        question: "Skriver skräddarsyendet om en konsults faktiska erfarenhet?",
        answer:
          "Nej. MagicCV sorterar om och omprioriterar erfarenhet som redan finns i konsultens strukturerade profil. Den hittar aldrig på projekt, kompetenser eller datum - varje rad i det skräddarsydda CV:t går att spåra tillbaka till källprofilen, vilket spelar roll när en kund ber er stå bakom ett påstående.",
      },
      {
        question: "Kan jag klistra in en komplett RFP på 40 sidor, eller behövs en sammanfattning?",
        answer:
          "Klistra in hela. MagicCV läser hela dokumentet, extraherar kraven och utvärderingskriterierna och visar vad den hittade innan skräddarsyendet börjar. Ett underlag på två rader fungerar också - mer kontext ger den bara mer att arbeta med.",
      },
      {
        question: "Hur lång tid tar det egentligen att skräddarsy ett CV?",
        answer:
          "Ett par minuter från att underlaget klistras in till ett granskat, exportklart CV. Det mesta av den tiden är er granskning, inte genereringen. Att skräddarsy 12 CV:n för ett anbud är samma arbetsflöde kört mot samma underlag, inte 12 separata eftermiddagar.",
      },
      {
        question: "Kan vi behålla vår befintliga Word-mall för CV:n?",
        answer:
          "Ja. Er varumärkesmall ställs in en gång i MagicCV, och varje skräddarsytt CV exporteras i den som pixelkonsekvent PDF eller Word. Skräddarsyendet ändrar vad CV:t säger, inte hur det ser ut.",
      },
      {
        question: "Hur skiljer sig detta från att klistra in ett CV i ChatGPT?",
        answer:
          "En allmän chattbot har ingen sanningskälla, så den broderar gärna ut - och den producerar ren text som ni ändå måste formatera om. MagicCV skräddarsyr från konsultens strukturerade profil, vägrar hitta på erfarenhet, behåller er varumärkesmall och fungerar över hela teamet från en och samma CV-hanteringsplattform, inte ett dokument i taget.",
      },
      {
        question: "Räknas varje skräddarsytt CV mot våra plangränser?",
        answer:
          "Ja - varje genererat CV räknas mot planens CV-utrymme. Free inkluderar 10 profiler och 30 CV:n totalt, Pro ($50/månad) inkluderar 200 profiler och 600 CV:n, och Enterprise är obegränsad. Ett skräddarsytt CV för ett aktivt anbud är exakt vad det utrymmet är till för.",
      },
      {
        question: "Vart tar RFP- och CV-datan vägen? Vi hanterar kundkonfidentiella underlag.",
        answer:
          "MagicCV är byggd GDPR-först med datalagring i EU. Era underlag och er konsultdata behandlas för att generera era CV:n, inte för att träna publika modeller. Enterprise lägger till SSO, granskningsloggar och ett personuppgiftsbiträdesavtal (DPA) om era kundavtal kräver ett.",
      },
    ],
    related: [
      { label: "Så fungerar RFP-till-CV-resonemanget", href: "/features/rfp-to-cv" },
      { label: "Bygg ett komplett CV-paket för anbud", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV för anbuds- och säljteam", href: "/solutions/sales" },
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
    job: "Sätt ihop ett komplett, enhetligt CV-paket för en offert eller ett anbud - skräddarsytt mot underlaget, i ett svep, timmar före deadline i stället för minuter.",
    h1: "Bygg aldrig ett CV-paket kvällen före deadline igen.",
    sub: "Välj teamet, skräddarsy varje CV mot samma underlag i ett svep och exportera ett enda varumärkesanpassat paket - ungefär 15 minuter i stället för en förlorad dag.",
    problemToday:
      "RFP:n landar med ett 48-timmarsfönster. Den anbudsansvarige mejlar sex konsulter efter aktuella CV:n, får fyra svar, två final_v3.docx-filer med olika typsnitt och ett \"använd versionen från Meridian-anbudet\". Sedan kommer det verkliga arbetet: att formatera om 12 CV:n för hand så att paketet inte läses som om sex olika bolag skrivit det, medan deadlineklockan tickar. Det är den klassiska fredagskvällsstressen, och den upprepas på varje anbud.\n\nMed MagicCV är profilerna redan aktuella, så jakten börjar aldrig. Ni väljer teamet - eller låter MagicCV föreslå de bäst matchande konsulterna ur kompetensmatrisen - klistrar in underlaget en gång, och varje CV i paketet skräddarsys mot det samtidigt. Granska, justera i chatten och exportera ett enhetligt, varumärkesanpassat paket redo att bifogas offerten.",
    steps: [
      {
        title: "Välj teamet - eller låt kompetensmatrisen välja med er",
        body: "Välj konsulterna för det här anbudet själva, eller sök i konsultstyrkan på kompetenser, sektorer, språk och certifieringar och låt MagicCV föreslå de starkaste matchningarna mot underlaget. Ni har alltid sista ordet.",
        screenshotAlt: "Teamvalsskärm med 6 föreslagna konsulter rankade mot underlaget med märken för matchande kompetenser",
      },
      {
        title: "Skräddarsy varje CV mot underlaget i ett svep",
        body: "Klistra in RFP:n en gång så skräddarsyr MagicCV alla valda CV:n mot samma krav samtidigt. Tolv CV:n får den behandling ett CV brukade få - inget omarbete per dokument.",
        screenshotAlt: "Förloppsvy för batchgenerering med 12 konsult-CV:n som skräddarsys mot en RFP",
      },
      {
        title: "Granska paketet, inte styckena",
        body: "Skumma igenom varje skräddarsytt CV, rätta vad som helst genom att chatta med redigeraren och bekräfta. Eftersom varje CV kommer från samma strukturerade profiler och samma mall är enhetlighet inget ni kontrollerar - det är standardläget.",
        screenshotAlt: "Granskningsskärm för paket med 12 skräddarsydda CV:n i identisk varumärkesmall, ett flaggat för granskning",
      },
      {
        title: "Exportera ett inlämningsklart paket",
        body: "Exportera hela teamet som ett enda varumärkesanpassat dokument eller som enskilda filer, i PDF eller Word, i det format upphandlingen vill ha CV:na levererade. Bifoga och skicka in.",
        screenshotAlt: "Exportdialog för ett kombinerat CV-paket med alternativ för ett samlat dokument eller fil per konsult",
      },
    ],
    outcome: "Före: en hel dag av jagande, omformatering och hopfogning - klart vid midnatt, inskickat med korsade fingrar. Efter: paketet tar ungefär 15 minuter, det mesta granskning, och varje CV i det är skräddarsytt mot underlaget i stället för att bara vara med. Deadlinen slutar diktera kvaliteten.",
    outcomeStats: [{ value: "1 dag → 15 min", label: "typisk tid till ett inlämningsklart CV-paket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kan MagicCV föreslå vilka som ska ingå i paketet?",
        answer:
          "Ja. Utifrån underlaget och teamets kompetensmatris - kompetenser, sektorer, språk, certifieringar - föreslår MagicCV de bäst matchande konsulterna. Det är en kortlista, inte ett beslut: ni väljer det slutliga teamet.",
      },
      {
        question: "Vad händer om halva teamets CV:n är inaktuella när RFP:n landar?",
        answer:
          "Det är poängen med att bygga paket från profiler i stället för filer. Varje konsult har en strukturerad profil som uppdateras en gång, centralt - inte en mapp med gamla dokument. Om något verkligen saknas uppdaterar ni profilen på minuter, och varje framtida CV, i vilket format som helst, plockar upp det.",
      },
      {
        question: "Ser paketet enhetligt ut om olika personer genererar CV:na?",
        answer:
          "Ja. Varje CV i paketet renderas från samma varumärkesmall, så typsnitt, sektionsordning och layout matchar oavsett vem som klickade på exportera. Paketet läses som ett enda bolags dokument, vilket är exakt vad utvärderare lägger märke till.",
      },
      {
        question: "En av våra partners insisterar på sin egen CV-version. Hur fungerar det?",
        answer:
          "Hans erfarenhet bor i hans strukturerade profil som alla andras, och mallen styr presentationen. Han kan granska och justera formuleringar via chatt före export - vad han inte kan göra är att i tysthet underhålla en avvikande Word-fil som dyker upp i ett paket sex månader senare.",
      },
      {
        question: "Räknas ett paket med 12 personer som 12 CV:n mot vår plan?",
        answer:
          "Ja, varje genererat CV räknas individuellt. Pro ($50/månad) inkluderar 200 profiler och 600 CV:n, vilket täcker normal anbudsaktivitet för de flesta medelstora team; Enterprise tar bort gränserna. Free (10 profiler, 30 CV:n) räcker för att köra ett riktigt anbud eller två som test.",
      },
      {
        question: "Kan paketet blanda språk om upphandlingen kräver det?",
        answer:
          "Ja. MagicCV genererar CV:n på det språk varje inlämning kräver från samma masterprofiler, med varumärkesmallen intakt. Ett paket för en EU-upphandling kan gå ut på franska medan samma teams paket för en brittisk kund går ut på engelska.",
      },
      {
        question: "Vi har redan hundratals CV:n i SharePoint. Hur börjar vi?",
        answer:
          "Importera dem. MagicCV tolkar Word- och PDF-CV:n till strukturerade profiler, en per person, så att era befintliga dokument blir startdatan snarare än ett migreringsprojekt. Därefter byggs paketen från profiler, inte från vad sökrutan råkar hitta.",
      },
      {
        question: "Är detta ett ATS? Vi har redan ett för rekrytering.",
        answer:
          "Nej. Ett ATS följer kandidater genom en rekryteringspipeline; MagicCV hanterar CV:na för de personer som redan finns i ert team och gör dem till skräddarsydda, varumärkesanpassade anbudsdokument. De två löser olika problem och samexisterar utmärkt.",
      },
    ],
    related: [
      { label: "Så fungerar RFP-till-CV-resonemanget", href: "/features/rfp-to-cv" },
      { label: "Varumärkessäkrade CV-exporter", href: "/features/brand-templates" },
      { label: "MagicCV för anbuds- och säljteam", href: "/solutions/sales" },
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
    job: "Ersätt utspridda CV:n på delade enheter med en strukturerad, aktuell profil per person - källan som varje anbud, bemanningsbeslut och kundförfrågan hämtar från.",
    h1: "Från filarkeologi i SharePoint till en aktuell profil per person.",
    sub: "CV-databas för konsult- och tjänsteföretag: importera varje CV en gång, håll en levande profil per konsult och generera valfritt format på begäran.",
    problemToday:
      "Just nu är \"CV-databasen\" en SharePoint-mapp, tre inkorgar och en handfull laptoppar. Samma konsult existerar som CV_2022.pdf, final_v3_JS_edit.docx och en LinkedIn-profil ingen exporterat - och ingen av dem är tydligt aktuell. Det är inte CV-datahantering; det är filarkeologi. Det biter hårdast i värsta möjliga läge: en anbudsansvarig som behöver 8 CV:n inom ett 48-timmarsfönster i en upphandling, eller en kundansvarig som lovar en kund \"profiler till i morgon\" och sedan tillbringar kvällen med att jaga konsulter som är upptagna med att fakturera.\n\nMagicCV ersätter mappen med en databas. Ni importerar de CV:n ni redan har - Word, PDF, vilket format de än samlats i - och MagicCV tolkar varje fil till en strukturerad profil, en per person. Uppdateringar sker en gång, på profilen. All utdata efter det - skräddarsytt anbuds-CV, anonymiserad upphandlingsversion, översatt kopia - genereras färskt från aktuell data, så \"vilken fil är den senaste?\" slutar vara en fråga någon ställer.",
    steps: [
      {
        title: "Importera röran ni har, inte datan ni önskar att ni hade",
        body: "Släpp in era befintliga CV-filer i vilket format som helst - Word, PDF, exporter från gamla system. MagicCV tolkar varje fil till en strukturerad profil med erfarenhet, kompetenser, certifieringar och språk som data, inte stycken. Dubblettfiler för samma person slås ihop till en profil.",
        screenshotAlt: "Massimportskärm som behandlar 47 blandade Word- och PDF-filer till strukturerade konsultprofiler",
      },
      {
        title: "Håll en profil per person - och håll den aktuell utan jagande",
        body: "Varje konsult har exakt en profil. När ett projekt avslutas eller en certifiering landar läggs den till en gång, där - inte lappad in i fem dokument. AI-assisterade uppdateringar gör redigeringen till ett tvåminutersjobb i stället för en dokumentomskrivning.",
        screenshotAlt: "Konsultprofilvy med strukturerade erfarenhetsposter och en indikator för senaste uppdatering",
      },
      {
        title: "Sök i teamet som i en databas, för det är en",
        body: "Kompetensmatrisen gör hela konsultstyrkan sökbar: filtrera på kompetens, sektor, språk eller certifiering och få personer, inte filnamn. \"Vem har AWS-certifiering och talar tyska?\" blir en femsekundersfråga i stället för en mejltråd på fredagseftermiddagen.",
        screenshotAlt: "Kompetensmatrissökning filtrerad på konsulter med AWS-certifiering och tyska, med 6 matchande profiler",
      },
      {
        title: "Generera valfri utdata från samma sanningskälla",
        body: "Skräddarsytt anbuds-CV, avidentifierat CV för en upphandling, fransk version för en gränsöverskridande offert - allt genererat på begäran från den aktuella profilen, allt i er varumärkesmall. Utdatan är en förbrukningsvara; profilen är tillgången.",
        screenshotAlt: "Utdataväljare på en enskild profil med alternativ för skräddarsytt, anonymiserat och översatt CV",
      },
    ],
    outcome: "Före: 20 minuter av mappdykning per CV, multiplicerat med varje anbud, med en verklig risk att skicka en kund något som är två år gammalt. Efter: en fråga, en aktuell profil, valfritt format på minuter. Databasen växer i värde i det tysta - varje anbud går snabbare eftersom det förra höll datan ren.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vad händer med de hundratals CV:n vi redan har i SharePoint?",
        answer:
          "Ni importerar dem. MagicCV tolkar Word- och PDF-filer till strukturerade profiler - en per person, även om ni har fyra versioner av samma konsults CV. De gamla filerna kan ligga kvar i SharePoint som arkiv; de slutar bara vara arbetskopian.",
      },
      {
        question: "Hur håller vi 200 konsult-CV:n aktuella utan att jaga folk varje kvartal?",
        answer:
          "Genom att göra uppdateringen liten och enskild. Varje person har en profil, uppdateringar är AI-assisterade redigeringar snarare än dokumentomskrivningar, och det finns inget att formatera om efteråt - mallarna sköter presentationen. De flesta team bakar in profiluppdateringar i projektavslutet i stället för att köra en jaktkampanj.",
      },
      {
        question: "Hur skiljer sig en CV-databas från vårt ATS eller HRIS?",
        answer:
          "Ett ATS följer jobbsökande; ett HRIS håller anställningsuppgifter som kontrakt och lönedata. Inget av dem är byggt för att producera ett skräddarsytt, varumärkesanpassat CV för ett anbud. MagicCV är lagret för ert leveransteams erfarenhetsdata - strukturerat, sökbart och direkt exporterbart som kundvända dokument.",
      },
      {
        question: "Integrerar ni med vårt HRIS?",
        answer:
          "HRIS-integrationer (Personio, BambooHR, HiBob) finns på roadmapen. I dag täcker filimport den initiala laddningen, och eftersom profilerna bara behöver uppdateras på ett ställe är det dagliga underhållet lätt även utan en synk.",
      },
      {
        question: "Är en central CV-databas ett GDPR-problem eller en GDPR-förbättring?",
        answer:
          "Rätt gjort, en förbättring. MagicCV är GDPR-först med datalagring i EU, så konsultdatan sitter i ett styrt system i stället för utspridd i inkorgar och på laptoppar - vilket gör åtkomstkontroll, raderingsbegäranden och granskningar hanterbara. Enterprise lägger till SSO, granskningsloggar och ett personuppgiftsbiträdesavtal (DPA).",
      },
      {
        question: "Hur många profiler täcker planerna?",
        answer:
          "Free täcker 10 profiler och 30 genererade CV:n - nog för att bevisa arbetsflödet på ett team. Pro ($50/månad) täcker 200 profiler och 600 CV:n, vilket passar de flesta konsultbolag upp till ett par hundra debiterande medarbetare. Enterprise är obegränsad, med SSO och ett DPA för större bolag.",
      },
      {
        question: "Vem underhåller profilerna - en central ägare eller konsulterna själva?",
        answer:
          "Båda modellerna fungerar. Vissa bolag låter en ops- eller bemanningsansvarig äga databasen; andra låter konsulterna uppdatera sin egen profil vid projektavslut med ops som granskare. Eftersom det finns en profil per person och mallen styr formateringen kan bidragsgivare varken förgrena versioner eller förstöra layouten.",
      },
      {
        question: "Vilka format kan vi generera när CV:na är centraliserade?",
        answer:
          "Pixelkonsekventa PDF- och Word-exporter i era varumärkesmallar, plus skräddarsydda versioner för en specifik RFP, anonymiserade avidentifierade CV:n för upphandlingar och översättningar - allt genererat från samma profil. Centraliseringen är förberedelsen; den genererade utdatan är utdelningen.",
      },
    ],
    related: [
      { label: "Profiler och kompetensmatris", href: "/features/profiles-skills" },
      { label: "MagicCV för HR och People Ops", href: "/solutions/hr" },
      { label: "MagicCV för rekryteringsteam", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV-databas - centralisera och standardisera CV:n",
      description:
        "CV-hantering som fungerar: importera en gång, håll en aktuell profil per person och generera valfritt format på begäran - slut på letandet i SharePoint.",
      keywords: ["cv databas", "kompetensdatabas", "cv hantering"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Ta fram anonymiserade, avidentifierade CV:n för offentliga upphandlingar, konkurrensutsatta anbud och fördomsfri utvärdering - ett klick, samma regler för alla, ingen manuell maskning.",
    h1: "Maska aldrig ett CV för hand inför en upphandling igen.",
    sub: "Avidentifierade CV:n med ett klick för offentliga upphandlingar och anonymiserad rekrytering - samma anonymiseringsregler applicerade på varje konsult, varje gång.",
    problemToday:
      "Upphandlingsbilagan säger att CV:na måste anonymiseras, så någon tillbringar en eftermiddag i Word med att radera namn, foton och e-postadresser ur 10 dokument. Sedan börjar problemen: ett namn överlever i ett sidhuvud på sidan 3, dokumentegenskaperna avslöjar fortfarande vem som författade filen, och en teammedlems bild av \"anonymiserat\" - initialer kvar, arbetsgivarnamn borttagna - stämmer inte med en annans. I en offentlig upphandling kan en enda läckt identifierare få en inlämning överklagad; i anonymiserad rekrytering omintetgör den hela poängen.\n\nMagicCV gör anonymiseringen till en egenskap hos exporten, inte ett manuellt redigeringspass. Ni konfigurerar en gång vad som räknas som identifierande i er process - namn, foto, kontaktuppgifter, vad era utvärderingar än kräver - och slår på anonymisering för valfritt CV. Eftersom det avidentifierade CV:t genereras färskt från den strukturerade profilen i stället för att maskas ur en gammal fil finns det inga kvarlämnade sidhuvuden, ingen metadata och inga missade omnämnanden att oroa sig för.",
    steps: [
      {
        title: "Utgå från vilket CV som helst - standard eller skräddarsytt",
        body: "Generera konsultens CV som vanligt, inklusive en version skräddarsydd för den specifika upphandlingen. Anonymiseringen är ett reglage ovanpå valfri utdata, inte ett separat dokument ni underhåller.",
        screenshotAlt: "Konsult-CV skräddarsytt för en offentlig upphandling, innan anonymisering applicerats",
      },
      {
        title: "Slå på anonymisering - era regler, applicerade automatiskt",
        body: "Vänd på anonymiseringsreglaget så tar MagicCV bort varje uppgift era konfigurerade regler behandlar som identifierande: namn, foto, kontaktuppgifter och allt annat er utvärderingsprocess kräver. Samma regeluppsättning gäller oavsett vem i teamet som genererar CV:t.",
        screenshotAlt: "Anonymiseringsreglage applicerat på ett CV, med namnet ersatt av en rolletikett och fotot borttaget",
      },
      {
        title: "Exportera rena avidentifierade CV:n, enskilt eller som helt paket",
        body: "Exportera den anonymiserade versionen i er varumärkesmall som PDF eller Word - för en konsult eller hela anbudsteamet på en gång. Eftersom varje fil genereras från profildata finns det inga rester från ett originaldokument som kan slinka igenom.",
        screenshotAlt: "Exportvy av ett anonymiserat CV-paket för ett upphandlingsteam på 6 personer, alla i matchande mall",
      },
    ],
    outcome: "Före: en eftermiddag av manuell maskning per upphandling, och en lågintensiv rädsla för att ett namn överlevt i en sidfot. Efter: den avidentifierade versionen är ett klick, identisk i standard med varje annat avidentifierat CV ert bolag någonsin producerat. Anonymiseringen slutar vara en arbetsuppgift och blir en inställning.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vad exakt tas bort ur ett avidentifierat CV?",
        answer:
          "Vad era regler än säger. Vanligtvis namn, foto och kontaktuppgifter; många team stryker också andra markörer som deras utvärderingsprocess behandlar som identifierande. Ni konfigurerar regeluppsättningen en gång och den gäller för varje anonymiserad export, för varje konsult.",
      },
      {
        question: "Kan ett namn ändå läcka igenom i ett sidhuvud, en sidfot eller filens metadata?",
        answer:
          "Det är fördelen med att generera i stället för att maska. Ett avidentifierat CV från MagicCV byggs färskt från den strukturerade profilen med anonymiseringsreglerna applicerade - det är inte en redigerad kopia av en gammal Word-fil, så det finns inga kvarlämnade sidhuvuden, spårade ändringar eller dokumentegenskaper som bär originalförfattarens namn.",
      },
      {
        question: "Följer alla teammedlemmars anonymiserade CV:n samma standard?",
        answer:
          "Ja. Reglerna bor i regeluppsättningen, inte i individuella bedömningar, så det avidentifierade CV som en junior anbudskoordinator producerar på fredagskvällen matchar det en partner skulle producera. För offentliga upphandlingar där inkonsekvent anonymisering kan ogiltigförklara en inlämning är den enhetligheten själva poängen.",
      },
      {
        question: "Kan vi anonymisera ett helt offertteam på en gång?",
        answer:
          "Ja. Bygg CV-paketet för anbudet, applicera anonymiseringen och exportera - varje CV i paketet följer samma regler och samma varumärkesmall. Ett upphandlingspaket med 10 personer är ett pass, inte 10 maskningsjobb.",
      },
      {
        question: "Fungerar detta för anonymiserad rekrytering såväl som upphandlingar?",
        answer:
          "Ja. Bemannings- och rekryteringsteam använder samma reglage för att skicka avidentifierade CV:n till kunder - kandidater utvärderade på erfarenhet och kompetens innan ett namn eller foto kommer in i samtalet. Samma mekanism, samma konsekvens.",
      },
      {
        question: "Hur passar anonymiseringen in i våra GDPR-skyldigheter?",
        answer:
          "Den är en del av en dataminimeringshållning: att bara dela de personuppgifter en process faktiskt behöver. MagicCV i sig är GDPR-först med datalagring i EU, och Enterprise lägger till granskningsloggar och ett personuppgiftsbiträdesavtal (DPA). Avidentifierade CV:n minskar vad som lämnar ert bolag; plattformen styr vad som stannar inuti det.",
      },
      {
        question: "Behåller anonymiserade CV:n vår varumärkesmall?",
        answer:
          "Ja - den avidentifierade versionen exporteras i samma pixelkonsekventa mall som varje annat CV, minus de identifierande uppgifterna. Om en upphandling i stället kräver en neutral eller kundspecificerad layout exporterar ni i en mall uppsatt för det.",
      },
      {
        question: "Finns anonymisering på alla planer?",
        answer:
          "Anonymiserade exporter är genererade CV:n som alla andra och räknas mot planens utrymme - 30 CV:n på Free, 600 på Pro ($50/månad), obegränsat på Enterprise. Ni kan testa hela arbetsflödet för avidentifierade CV:n på Free-planen innan en riktig upphandling hänger på det.",
      },
    ],
    related: [
      { label: "Anonymisering & GDPR", href: "/features/anonymization" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Specialiserade bemannings- & talangbyråer", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anonymt CV med ett klick - för upphandling och rekrytering",
      description:
        "Skapa anonymiserade CV:n för blind utvärdering, offentliga upphandlingar och fördomsfria inlämningar - konsekvent i hela teamet.",
      keywords: ["anonymt cv", "anonymiserat cv", "cv anonymisering"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Ta fram korrekta, varumärkesanpassade CV:n på varje språk era anbud kräver - genererade från en masterprofil i stället för omskrivna och omlayoutade för hand.",
    h1: "Sluta skriva om CV:n för varje gränsöverskridande anbud.",
    sub: "Generera korrekta, varumärkesanpassade CV:n på EN, DE, FR, NL, ES med flera från en masterprofil - inget omskrivande, inga trasiga layouter, inga inaktuella versioner.",
    problemToday:
      "En EU-upphandling kräver franska CV:n till torsdag. Alternativen i dag är alla dåliga: skicka 8 CV:n till en översättningsbyrå och vänta i dagar, köra dem genom en generisk översättare och lägga timmar på att laga trasiga layouter och felöversatta jobbtitlar, eller hålla parallella språkversioner för hand - vilket garanterar att det tyska CV:t fortfarande listar projektet som avslutades förra året medan det engelska är aktuellt. Varje språk multiplicerar underhållet, och det visar sig alltid mitt i en deadline.\n\nMed MagicCV slutar översättning vara dokumentunderhåll. Varje konsult har en masterprofil som sanningskälla. När ett anbud kräver ett annat språk väljer ni det vid export, och MagicCV genererar CV:t på det språket, i er varumärkesmall, med layouten intakt. Uppdatera profilen en gång och generera om valfritt språk på begäran - ingenting glider isär, för det finns inga parallella kopior som kan glida.",
    steps: [
      {
        title: "Håll en masterprofil, inte en per språk",
        body: "Varje konsults erfarenhet, kompetenser och certifieringar bor i en enda strukturerad profil. Det är det enda någon underhåller - språkversioner är utdata, inte dokument med eget liv.",
        screenshotAlt: "Masterprofil för konsult med strukturerade erfarenhetsposter och en språkväljare för export",
      },
      {
        title: "Välj språken det här anbudet kräver",
        body: "Välj franska för EU-upphandlingen, tyska för München-kunden, eller flera på en gång för en flerspråkig utvärderingspanel. Valet sker vid export - ingen förexisterande översatt fil behöver finnas.",
        screenshotAlt: "Språkvalsdialog med franska och tyska ikryssade för en gränsöverskridande offert",
      },
      {
        title: "Granska översättningen som en anbudsansvarig, inte som en lingvist",
        body: "Det genererade CV:t behåller er mall och layout, så granskningen handlar om terminologi, inte formatering. Rätta en jobbtitel eller en sektorterm genom att chatta med redigeraren så appliceras ändringen på plats.",
        screenshotAlt: "Franskt CV i varumärkesmall med chattpanel som rättar en jobbtitelöversättning",
      },
      {
        title: "Exportera varumärkesanpassade CV:n på varje valt språk",
        body: "Varje språk exporteras som en pixelkonsekvent PDF- eller Word-fil i företagets mall. Det franska paketet och det engelska paketet ser ut som om samma bolag producerat dem - för det gjorde samma system.",
        screenshotAlt: "Engelsk och fransk version av samma konsult-CV exporterade sida vid sida i identisk layout",
      },
    ],
    outcome: "Före: en vecka av byråledtid eller en kväll av att laga vad en generisk översättare gjorde med layouten - upprepat varje gång en profil ändrades. Efter: valfri språkversion är minuter bort och alltid genererad från aktuell data. Gränsöverskridande anbud slutar bära en översättningsskatt.",
    outcomeStats: [],
    faqs: [
      {
        question: "Vilka språk kan vi generera CV:n på?",
        answer:
          "Engelska, tyska, franska, nederländska och spanska används mest i dag, och MagicCV kan översätta CV:n till andra språk också - layouten och mallen håller oavsett språk. Om era anbud går på ett specifikt språk, testa det på Free-planen innan ni förlitar er på det.",
      },
      {
        question: "Hålls översatta CV:n i synk när en konsults profil ändras?",
        answer:
          "Ja, för översättningarna är inte lagrade dokument - de genereras på begäran från den aktuella masterprofilen. Uppdatera profilen en gång, generera om valfritt språk, så dyker det nya projektet eller certifieringen upp överallt. Det finns ingen andra kopia att glömma.",
      },
      {
        question: "Förstör översättningen layouten eller varumärkesmallen?",
        answer:
          "Nej. MagicCV renderar det översatta innehållet i samma varumärkesmall och hanterar att tyska blir längre än engelska utan att förstöra sidan. Det ni granskar är ett färdigt, varumärkesanpassat CV, inte en textdump att layouta om.",
      },
      {
        question: "Hur korrekt är översättningen för tekniska jobbtitlar och sektortermer?",
        answer:
          "Stark, men granska den som allt annat kundvänt. CV-språk är en väluppfostrad domän - roller, projekt, kompetenser - och AI:n hanterar den väl. För bolagsspecifik terminologi: rätta en gång i chatten under granskningen; en femminutersskumning av en kollega med språket som modersmål är fortfarande god praxis vid upphandlingar med höga insatser.",
      },
      {
        question: "Räknas varje språkversion som ett separat CV mot vår plan?",
        answer:
          "Ja - varje genererat CV räknas mot utrymmet: 30 CV:n på Free, 600 på Pro ($50/månad), obegränsat på Enterprise. Ett paket med 6 personer på två språk är 12 CV:n, vilket Pro absorberar bekvämt över en normal anbudspipeline.",
      },
      {
        question: "Var behandlas CV-datan? Våra kundavtal kräver behandling inom EU.",
        answer:
          "MagicCV körs med datalagring i EU och är GDPR-först by design. Konsultdatan behandlas för att generera era CV:n, inklusive översättningar, inom den uppsättningen. Enterprise lägger till SSO, granskningsloggar och ett personuppgiftsbiträdesavtal (DPA) för bolag vars kundavtal kräver pappersarbetet.",
      },
      {
        question: "Kan ett och samma offertpaket blanda språk?",
        answer:
          "Ja. Generera varje konsults CV på det språk inlämningen kräver - eller samma konsult på två språk för en tvåspråkig utvärderingspanel. Allt exporteras i samma mall, så paketet förblir visuellt enhetligt över språken.",
      },
      {
        question: "Varför inte bara fortsätta med vår översättningsbyrå?",
        answer:
          "För juridiska dokument, behåll byrån. För CV:n brister byråmodellen på hastighet och synk: dagar av ledtid per runda, verklig kostnad per dokument, och en översatt fil som är inaktuell så fort profilen ändras. MagicCV ger er minutsnabb generering från alltid aktuell data, med mänsklig granskning där ni vill ha den.",
      },
    ],
    related: [
      { label: "Flerspråkig CV-generering", href: "/features/multilingual" },
      { label: "Offentlig sektor & upphandlingsdrivna konsultbolag", href: "/solutions/public-sector" },
      { label: "Mjukvaru- & IT-konsultbolag", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Översätta CV - professionella CV:n på varje språk",
      description:
        "Generera korrekta, professionella CV:n på EN, DE, FR, NL, ES med flera - utan att skriva om eller formatera om.",
      keywords: ["flerspråkig CV-generator", "CV-översättningsverktyg konsultbolag"],
    },
  },
];
