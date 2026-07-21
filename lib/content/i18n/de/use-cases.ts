import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Den CV jedes Beraters an die konkrete Ausschreibung anpassen und die relevanteste Erfahrung sowie die Erfolgskriterien hervorheben.",
    h1: "Jeden CV auf jede Ausschreibung zuschneiden - automatisch.",
    sub: "MagicCV analysiert das RFP und passt den CV jedes Beraters so an, dass das im Vordergrund steht, worauf es bei dieser Chance ankommt.",
    problemToday:
      "Jedes RFP hat eigene Erfolgskriterien, aber die meisten CVs sind statische Dokumente. Bid-Teams lesen und sortieren die Erfahrung jedes Beraters am Ende von Hand neu - für jede einzelne Ausschreibung. Oder sie lassen es und reichen einen generischen CV ein, der die Passung unter Wert verkauft.",
    steps: [
      {
        title: "RFP oder Ausschreibung einfügen",
        body: "Fügen Sie das RFP-Dokument, eine Übersicht der Bewertungskriterien oder eine kurze Zusammenfassung dessen ein, was der Kunde sucht.",
        screenshotAlt: "In MagicCV eingefügte RFP-Ausschreibung",
      },
      {
        title: "MagicCV erkennt relevante Erfahrung und stellt sie heraus",
        body: "Es erfindet nie etwas - jede Aussage ist auf das Quellprofil des Beraters rückführbar, lediglich neu angeordnet und passend zur Ausschreibung gewichtet.",
        screenshotAlt: "Relevante Erfahrung, hervorgehoben anhand der Anforderungen der Ausschreibung",
      },
      {
        title: "Prüfen und markenkonform exportieren",
        body: "Prüfen Sie das Ergebnis, passen Sie es bei Bedarf an und exportieren Sie es in der Markenvorlage Ihres Unternehmens.",
        screenshotAlt: "Export des zugeschnittenen CVs in der Markenvorlage",
      },
    ],
    outcome: "Höhere Relevanz pro Ausschreibung - und bessere Chancen bei jedem Angebot, das Sie einreichen.",
    outcomeStats: [{ value: "+18%", label: "Gewinnquote bei zugeschnittenen Angeboten" }],
    faqs: [
      {
        question: "Wird dabei die tatsächliche Erfahrung eines Beraters umgeschrieben?",
        answer:
          "Nein. MagicCV gewichtet und ordnet echte Erfahrung aus dem Quellprofil passend zur Ausschreibung neu - es erfindet nie Erfahrung, die nicht vorhanden ist.",
      },
      {
        question: "Wie lange dauert das Zuschneiden eines CVs?",
        answer: "In der Regel wenige Minuten - vom Einfügen der Ausschreibung bis zum geprüften, exportfertigen CV.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "Für Sales-Teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Berater-CVs auf jede Ausschreibung zuschneiden - MagicCV",
      description:
        "MagicCV analysiert das RFP und passt den CV jedes Beraters so an, dass das im Vordergrund steht, worauf es bei dieser Chance ankommt.",
      keywords: ["CV auf RFP zuschneiden", "Berater-CV anpassen", "Lebenslauf für Ausschreibung anpassen"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Ein vollständiges, einheitliches CV-Paket für ein Angebot oder eine Ausschreibung in einem Durchgang zusammenstellen.",
    h1: "Vom RFP zum kompletten CV-Paket in 15 Minuten.",
    sub: "Team auswählen, zugeschnittene CVs für alle generieren und ein einheitliches, markenkonformes Paket exportieren - einreichungsfertig.",
    problemToday:
      "Ein CV-Paket für ein Angebot zusammenzustellen bedeutet: mehreren Personen wegen aktueller CVs hinterherlaufen, jeden einzeln von Hand umformatieren und hoffen, dass das Paket am Ende einheitlich wirkt. Der klassische Freitagabend-Endspurt vor der Deadline.",
    steps: [
      {
        title: "Team auswählen",
        body: "Wählen Sie die Berater für dieses Angebot selbst aus - oder lassen Sie sich von MagicCV die am besten passenden Personen aus Ihrer Bench vorschlagen.",
        screenshotAlt: "Teamauswahl-Bildschirm für ein Angebot",
      },
      {
        title: "Zugeschnittene CVs für alle gleichzeitig generieren",
        body: "Jeder CV im Paket wird auf dieselbe Ausschreibung zugeschnitten - und das gleichzeitig.",
        screenshotAlt: "Batch-CV-Generierung für ein komplettes Angebotsteam",
      },
      {
        title: "Ein einheitliches, markenkonformes, einreichungsfertiges Paket exportieren",
        body: "Ein konsistentes Dokument, bereit zur Anlage an das Angebot.",
        screenshotAlt: "Exportiertes CV-Paket mit mehreren Beratern",
      },
    ],
    outcome: "Was früher einen Tag dauerte, dauert jetzt rund fünfzehn Minuten - kein Endspurt in letzter Minute mehr.",
    outcomeStats: [{ value: "1 Tag → 15 Min", label: "pro CV-Paket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kann MagicCV vorschlagen, wer ins Paket gehört?",
        answer:
          "Ja. Auf Basis der Ausschreibung sowie der Skills und Erfahrung Ihrer Bench kann MagicCV die am besten passenden Berater vorschlagen - die finale Entscheidung liegt aber immer bei Ihnen.",
      },
      {
        question: "Bleibt das gesamte Paket in der Formatierung einheitlich?",
        answer: "Ja - jeder CV im Paket verwendet dieselbe Markenvorlage, sodass das Paket wie ein Dokument wirkt.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "Für Sales-Teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "Angebotsfertiges CV-Paket in Minuten erstellen - MagicCV",
      description:
        "Team auswählen, zugeschnittene CVs für alle generieren und ein einheitliches, markenkonformes Paket exportieren - einreichungsfertig.",
      keywords: ["CV-Paket für Angebot", "RFP CV-Paket Beratung", "Angebots-CVs Consulting"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Verstreute CVs auf Netzlaufwerken durch eine strukturierte, aktuelle und verlässliche Datenbasis ersetzen.",
    h1: "Ein Zuhause für jeden Berater-CV.",
    sub: "Einmal importieren, aktuell halten und jedes Format auf Abruf generieren - Schluss mit der Suche in SharePoint.",
    problemToday:
      "CVs liegen auf Netzlaufwerken, in Postfächern und auf Laptops - mehrere Versionen des CVs derselben Person, und keine ist eindeutig die aktuelle. Die richtige Datei zu finden kostet jedes einzelne Mal Zeit.",
    steps: [
      {
        title: "Aus vorhandenen Dateien importieren",
        body: "Importieren Sie CVs, die Sie bereits haben, um strukturierte Profile zu erstellen. LinkedIn- und HRIS-Import sind auf der Roadmap.",
        screenshotAlt: "Bildschirm für den Massenimport von CVs",
      },
      {
        title: "Strukturierte Profile pflegen, immer aktuell",
        body: "Ein Profil pro Person, an einem Ort aktuell gehalten - statt verstreuter Dokumente.",
        screenshotAlt: "Listenansicht strukturierter Profile",
      },
      {
        title: "Jedes Ausgabeformat generieren, jederzeit",
        body: "Was auch immer ein Angebot oder eine Anfrage benötigt - generieren Sie es aus dem aktuellen Profil, ohne nach der neuesten Datei suchen zu müssen.",
        screenshotAlt: "Auswahl des Ausgabeformats aus einem einzigen Profil",
      },
    ],
    outcome: "Eine einzige verlässliche Datenbasis, keine doppelten Daten - und alles Nachgelagerte wird schneller.",
    outcomeStats: [],
    faqs: [
      {
        question: "Was passiert mit unseren vorhandenen CV-Dateien?",
        answer:
          "Importieren Sie sie, um strukturierte Profile in MagicCV zu erstellen. Ab dann ist das strukturierte Profil die aktuelle, verlässliche Datenbasis - nicht mehr die Originaldatei.",
      },
      {
        question: "Integriert ihr euch mit unserem HRIS?",
        answer: "HRIS-Integrationen (Personio, BambooHR, HiBob) stehen auf unserer Roadmap.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Für HR- / People-Ops-Teams", href: "/solutions/hr" },
      { label: "Für Recruitment-Teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Berater-CVs zentralisieren & standardisieren - MagicCV",
      description:
        "Einmal importieren, aktuell halten und jedes Format auf Abruf generieren - Schluss mit der Suche in SharePoint.",
      keywords: ["zentrale CV-Datenbank Beratung", "Berater-CVs standardisieren"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Anonymisierte CVs für Wettbewerbsangebote, öffentliche Ausschreibungen und vorurteilsfreie Einreichungen erstellen.",
    h1: "Anonymisierte CVs mit einem Klick.",
    sub: "Entfernen Sie identifizierende Angaben für Blindbewertungen und öffentliche Ausschreibungen - konsistent, im gesamten Team.",
    problemToday:
      "Öffentliche Ausschreibungen und Blindbewertungsverfahren verlangen anonymisierte CVs - und manuelles Schwärzen ist langsam und inkonsistent: Was für das eine Teammitglied 'anonymisiert' bedeutet, deckt sich selten mit der Auffassung eines anderen.",
    steps: [
      {
        title: "CV generieren",
        body: "Starten Sie mit einem zugeschnittenen oder Standard-CV des Beraters.",
        screenshotAlt: "Standard-CV vor der Anonymisierung",
      },
      {
        title: "Anonymisierung aktivieren",
        body: "Namen, Fotos und andere identifizierende Angaben werden nach den von Ihnen konfigurierten Regeln entfernt.",
        screenshotAlt: "Auf einen CV angewendeter Anonymisierungs-Umschalter",
      },
      {
        title: "Für Blind- oder Wettbewerbseinreichung exportieren",
        body: "Die anonymisierte Version ist exportfertig - und konsistent mit jedem anderen anonymisierten CV, den Ihr Team erstellt.",
        screenshotAlt: "Anonymisierter CV, bereit zur Einreichung in einer Ausschreibung",
      },
    ],
    outcome: "Ausschreibungskonforme Einreichungen mit reduziertem Bias - schnell und konsistent erstellt.",
    outcomeStats: [],
    faqs: [
      {
        question: "Was gilt als identifizierende Angabe?",
        answer:
          "Die Regeln legen Sie fest - typischerweise Name, Foto und alle weiteren Angaben, die Ihr Bewertungsverfahren als identifizierend behandelt.",
      },
      {
        question: "Ist die Anonymisierung teamweit konsistent?",
        answer: "Ja - jeder anonymisierte CV folgt denselben konfigurierten Regeln, unabhängig davon, wer ihn generiert.",
      },
    ],
    related: [
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "Spezialisierte Personal- & Talentagenturen", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Berater-CVs für Blind- & Ausschreibungseinreichungen anonymisieren - MagicCV",
      description:
        "Entfernen Sie identifizierende Angaben für Blindbewertungen und öffentliche Ausschreibungen - konsistent, im gesamten Team.",
      keywords: ["CV Anonymisierungstool", "anonymisierter CV für Ausschreibungen"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Präzise, markenkonforme CVs in mehreren europäischen Sprachen für grenzüberschreitende Angebote erstellen.",
    h1: "Jeder CV, in jeder Sprache, in der Sie anbieten.",
    sub: "Erstellen Sie präzise, professionelle CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen - ohne Abtippen und Neuformatieren.",
    problemToday:
      "Grenzüberschreitende Angebote und mehrsprachige Bewertungsgremien bedeuten: Derselbe CV muss in mehreren Sprachen existieren und synchron bleiben, während sich das Profil des Beraters weiterentwickelt. Manuelle Übersetzung ist langsam und veraltet schleichend.",
    steps: [
      {
        title: "Ein Master-Profil pflegen",
        body: "Halten Sie ein einziges, aktuelles Profil pro Berater als verlässliche Datenbasis.",
        screenshotAlt: "Master-Beraterprofil in einer Sprache",
      },
      {
        title: "Zielsprache(n) auswählen",
        body: "Wählen Sie die Sprache oder Sprachen, die dieses Angebot erfordert.",
        screenshotAlt: "Sprachauswahl für die CV-Generierung",
      },
      {
        title: "Zugeschnittene, übersetzte, markenkonforme CVs exportieren",
        body: "Erhalten Sie einen konsistenten, professionellen CV in jeder gewählten Sprache - bereit zur Einreichung.",
        screenshotAlt: "Übersetzte CVs, nebeneinander exportiert",
      },
    ],
    outcome: "Mehrsprachige Pakete auf Knopfdruck - für EU-Beschaffung und grenzüberschreitende Projekte.",
    outcomeStats: [],
    faqs: [
      {
        question: "Welche Sprachen kann ich heute generieren?",
        answer: "Aktuell EN, DE, FR, NL und ES - weitere EU-Sprachen sind auf der Roadmap.",
      },
      {
        question: "Bleiben übersetzte CVs synchron, wenn sich das Profil ändert?",
        answer: "Ja - generieren Sie jede Sprache auf Abruf neu, direkt aus dem aktuellen Master-Profil.",
      },
    ],
    related: [
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "Software- & IT-Beratung", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Berater-CVs in jede Sprache übersetzen - MagicCV",
      description:
        "Erstellen Sie präzise, professionelle CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen - ohne Abtippen und Neuformatieren.",
      keywords: ["mehrsprachiger CV-Generator", "CV Übersetzungstool Beratung"],
    },
  },
];
