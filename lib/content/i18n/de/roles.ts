import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales- / Business-Development-Verantwortliche, die Angebots-Gewinnquote und Pipeline-Geschwindigkeit verantworten.",
    h1: "Gewinnen Sie mehr der Angebote, die Sie einreichen.",
    sub: "Lassen Sie sich keine Ausschreibungen mehr durch langsame, generische CVs entgehen. MagicCV liefert Sales-Teams RFP-fertige Beraterpakete in Minuten - zugeschnitten auf jede Chance.",
    pain: {
      quote: "Wir verlieren RFPs, die wir gewinnen sollten - und die CV-Vorbereitung ist immer der Engpass.",
      answer: "MagicCV liefert Ihnen zugeschnittene, markenkonforme CV-Pakete, die zur Ausschreibung passen - fertig vor der Deadline.",
      proofPoints: [
        "Schnellere Durchlaufzeit von der Ausschreibung bis zur Einreichung",
        "Höhere Gewinnquote bei zugeschnittenen Angeboten",
        "Konsistente, markenkonforme Qualität im gesamten Team",
      ],
    },
    featureRows: [
      {
        title: "Die richtigen Personen automatisch jeder Ausschreibung zuordnen",
        body: "MagicCV liest die Ausschreibung und zeigt die am besten passenden Berater aus Ihrer Bench.",
        screenshotAlt: "Berater-Matching gegen eine RFP-Ausschreibung",
      },
      {
        title: "Jeden CV auf die Erfolgskriterien der Chance zuschneiden",
        body: "Jeder CV stellt in den Vordergrund, wonach diese konkrete Ausschreibung bewertet - keine generische Zusammenfassung.",
        screenshotAlt: "Zugeschnittener CV, der erfolgskritische Erfahrung hervorhebt",
      },
      {
        title: "Nie wieder eine Deadline verpassen - ein Paket in 15 Minuten",
        body: "Kommen Sie so schnell von der Ausschreibung zum einreichungsfertigen CV-Paket, dass dieser Schritt kein Engpass mehr ist.",
        screenshotAlt: "Kurz vor einer Deadline schnell generiertes Angebots-CV-Paket",
      },
      {
        title: "Konsistente, markenkonforme Qualität, die das Unternehmen widerspiegelt",
        body: "Jede Einreichung wirkt wie aus einem Guss, weil sie auf derselben Markenvorlage basiert.",
        screenshotAlt: "Markenkonsistentes CV-Paket über mehrere Berater hinweg",
      },
    ],
    stats: [
      { value: "1 Tag → 15 Min", label: "pro CV-Paket", isPlaceholder: true },
      { value: "+18%", label: "Gewinnquote bei zugeschnittenen Angeboten" },
    ],
    includeRoiTeaser: true,
    related: [
      { label: "CVs auf jede Ausschreibung zuschneiden", href: "/use-cases/tailor-cvs" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    ],
    seo: {
      title: "MagicCV für Sales-Teams - Mehr Beratungsangebote gewinnen",
      description:
        "Lassen Sie sich keine Ausschreibungen mehr durch langsame, generische CVs entgehen. MagicCV liefert Sales-Teams RFP-fertige Beraterpakete in Minuten.",
      keywords: ["Angebots-CV-Tool für Sales", "mehr RFPs gewinnen Beratung"],
    },
  },
  {
    _type: "rolePage",
    slug: "recruitment",
    reader: "Recruitment- / Resourcing-Verantwortliche, die Beraterprofile pflegen und auf Staffing- und Angebotsanfragen reagieren.",
    h1: "Machen Sie aus Ihrem Talentpool angebotsfertige Profile.",
    sub: "Halten Sie jeden Berater-CV aktuell, durchsuchbar und sofort formatiert für jede Ausschreibung oder jedes Angebot.",
    pain: {
      quote: "Ich laufe ständig Beratern wegen aktueller CVs hinterher und formatiere sie von Hand um.",
      answer: "MagicCV gibt jeder Person ein zentrales, stets aktuelles Profil - generieren Sie jedes Format auf Abruf.",
      proofPoints: [
        "Kein Hinterherlaufen wegen Updates mehr",
        "Eine einzige verlässliche Datenbasis pro Person",
        "Schnelles Onboarding der CVs neuer Mitarbeitender",
      ],
    },
    featureRows: [
      {
        title: "Zentrale, strukturierte Beraterprofile",
        body: "Die Erfahrung jedes Beraters liegt als strukturierte Daten an einem Ort - statt in verstreuten Dokumenten.",
        screenshotAlt: "Zentrale Beraterprofil-Datenbank",
      },
      {
        title: "Ein Profil → viele zugeschnittene Ausgaben",
        body: "Generieren Sie jedes Format, das ein Angebot oder ein Kunde benötigt, direkt aus dem aktuellen Profil.",
        screenshotAlt: "Mehrere CV-Ausgaben, generiert aus einem Profil",
      },
      {
        title: "Import & Anreicherung aus LinkedIn/HRIS",
        body: "Importieren Sie vorhandene CVs heute - LinkedIn- und HRIS-Anreicherung sind auf der Roadmap.",
        screenshotAlt: "Import-Flow zur Profilanreicherung",
      },
      {
        title: "Die richtige Person schnell finden",
        body: "Suchen Sie nach Skills und Erfahrung über Ihre gesamte Bench, um schnell auf eine Staffing-Anfrage zu reagieren.",
        screenshotAlt: "Skills-basierte Suche über Beraterprofile",
      },
    ],
    stats: [
      { value: "6 Std.", label: "pro Woche gespart, weil kein Hinterherlaufen mehr nötig ist" },
    ],
    related: [
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Spezialisierte Personal- & Talentagenturen", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Bewerbermanagement-Software mit CV-Datenbank",
      description:
        "Kandidatenprofile aktuell, durchsuchbar und sofort im richtigen Format - eine Lebenslauf-Datenbank für Ihren gesamten Talentpool.",
      keywords: ["bewerbermanagement software", "kandidaten datenbank", "cv datenbank", "lebenslauf datenbank"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "HR / People Ops - die Rolle des Data Stewards. Legt Wert auf saubere Daten und keine Parallelsysteme.",
    h1: "Eine verlässliche Datenbasis für jeden Berater-CV.",
    sub: "Schluss mit CVs an fünf verschiedenen Orten. MagicCV hält Profile sauber, konsistent und compliant - ohne Schatten-IT.",
    pain: {
      quote: "CVs liegen auf Netzlaufwerken, in Postfächern und auf Laptops - die Datenlage ist ein Chaos.",
      answer: "MagicCV ersetzt das durch strukturierte, kontrollierte Profile mit rollenbasierten Zugriffsrechten.",
      proofPoints: [
        "Saubere, strukturierte Daten statt verstreuter Dateien",
        "Durchgängiges GDPR-by-Design",
        "Keine doppelten Systeme, die gepflegt werden müssen",
      ],
    },
    featureRows: [
      {
        title: "Strukturierte Profile, keine Freitext-Dokumente mehr",
        body: "Die Daten jedes Beraters liegen in strukturierten Feldern - nicht in einem unstrukturierten Word-Dokument.",
        screenshotAlt: "Ansicht des strukturierten Profilschemas",
      },
      {
        title: "Rollenbasierter Zugriff & Governance",
        body: "Steuern Sie, wer was sehen und bearbeiten darf - mit klarer Verantwortlichkeit für Beraterdaten.",
        screenshotAlt: "Einstellungen für rollenbasierte Zugriffskontrolle",
      },
      {
        title: "HRIS-Integrationen (Roadmap)",
        body: "Integrationen mit Personio, BambooHR und HiBob sind auf der Roadmap, um Profile automatisch aktuell zu halten.",
        screenshotAlt: "Einstellungspanel für HRIS-Integrationen",
      },
      {
        title: "GDPR-by-Design, EU-Datenresidenz, Audit-Logs",
        body: "Die Datenverarbeitung ist von Grund auf an den Anforderungen der DSGVO ausgerichtet - mit EU-Datenresidenz und Audit-Logs.",
        screenshotAlt: "Einstellungen für Audit-Log und Datenresidenz",
      },
    ],
    stats: [],
    related: [
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV für HR & People Ops - Saubere, DSGVO-konforme CV-Daten",
      description:
        "Schluss mit CVs an fünf verschiedenen Orten. MagicCV hält Profile sauber, konsistent und compliant.",
      keywords: ["DSGVO CV-Verwaltung", "HR Berater-CV-System"],
    },
  },
  {
    _type: "rolePage",
    slug: "project-delivery",
    reader: "Delivery-, Engagement- und Practice-Leads, die Projekte besetzen und CVs für kundenseitige Angebote und Projektstarts benötigen.",
    h1: "Bringen Sie die richtigen Leute vor jeden Kunden.",
    sub: "Generieren Sie projektfertige, markenkonforme Berater-CVs, die den Anforderungen des Kunden entsprechen - ohne Delivery-Zeit für Administratives zu opfern.",
    pain: {
      quote: "Jedes neue Projekt bedeutet, hektisch nach aktuellen CVs im richtigen Format für diesen Kunden zu suchen.",
      answer: "MagicCV liefert Ihnen sofort kundenspezifisch zugeschnittene CV-Pakete - damit Delivery-Leads schneller besetzen und pitchen.",
      proofPoints: [
        "Schnellere Mobilisierung für neue Projekte",
        "Kundenspezifische Vorlagen, einschließlich Formaten für behördliche und Enterprise-Beschaffung",
        "Mehrsprachige Ausgabe für grenzüberschreitende Projekte",
      ],
    },
    featureRows: [
      {
        title: "Berater den Projektanforderungen zuordnen",
        body: "Finden Sie die richtigen Personen für ein Projekt anhand der ausdrücklichen Anforderungen des Kunden.",
        screenshotAlt: "Berater-Matching gegen Projektanforderungen",
      },
      {
        title: "Kunden- und vorlagenspezifische Exporte",
        body: "Wechseln Sie zwischen Ihrem Hausstil und dem geforderten Kundenformat, ohne zusätzlichen manuellen Aufwand.",
        screenshotAlt: "Export einer kundenspezifischen CV-Vorlage",
      },
      {
        title: "Mehrsprachig für grenzüberschreitende Projekte",
        body: "Generieren Sie CVs in den Sprachen, in denen Ihre Delivery-Teams und Kunden tatsächlich arbeiten.",
        screenshotAlt: "Mehrsprachiges CV-Set für ein grenzüberschreitendes Projekt",
      },
      {
        title: "Anonymisierte Profile für Blind- und Wettbewerbseinreichungen",
        body: "Nutzen Sie die Anonymisierung, wenn ein Projekt oder eine Ausschreibung es verlangt.",
        screenshotAlt: "Anonymisierter CV für eine wettbewerbliche Projekteinreichung",
      },
    ],
    stats: [],
    related: [
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "MagicCV für Project-Delivery- & Engagement-Teams",
      description:
        "Generieren Sie projektfertige, markenkonforme Berater-CVs, die den Anforderungen des Kunden entsprechen.",
      keywords: ["Projektbesetzung CV-Tool", "Projekt-CV Beratung"],
    },
  },
];
