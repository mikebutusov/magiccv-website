import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-zu-CV-Reasoning",
    h1: "Es beginnt mit dem RFP, nicht mit einer Vorlage.",
    sub: "MagicCV liest die Ausschreibung, versteht die Erfolgskriterien und passt jeden CV gezielt daran an - das ist der AI-native Unterschied.",
    whatItDoesBody:
      "Vorlagenbasierte Tools starten beim CV und hoffen, dass er zur Ausschreibung passt. MagicCV startet beim RFP: Es liest die Erfolgskriterien, erkennt, welche Erfahrung relevant ist, und stellt sie im CV jedes Beraters gezielt heraus. Jede Aussage bleibt auf das Quellprofil rückführbar - wir erfinden nichts, wir setzen Schwerpunkte neu. Für Fälle, in denen ein Mensch prüfen soll, bevor etwas geschrieben wird, steht optional ein konservativer 'Do-not-generate'-Modus zur Verfügung.",
    benefits: [
      {
        title: "Liest die Ausschreibung wie ein erfahrener Proposal Manager",
        body: "MagicCV analysiert das RFP auf Erfolgskriterien, geforderte Skills und Bewertungskriterien - genau das, worauf ein erfahrener Bid Manager zuerst achtet.",
        screenshotAlt: "RFP-zu-CV-Generierung: Ansicht der Ausschreibungsanalyse",
      },
      {
        title: "Setzt Schwerpunkte neu, erfindet aber nie etwas",
        body: "Jeder Satz in einem generierten CV lässt sich auf einen Fakt im Quellprofil des Beraters zurückführen. Nichts wird erfunden, um zur Ausschreibung zu passen.",
        screenshotAlt: "RFP-zu-CV-Generierung: Ansicht der Aussagen-Herkunft",
      },
      {
        title: "Ein konservativer Modus, wenn Sie einen Menschen einbinden möchten",
        body: "Aktivieren Sie den Do-not-generate-Modus, damit MagicCV relevante Erfahrung zur Prüfung markiert, statt den CV direkt zu schreiben.",
        screenshotAlt: "RFP-zu-CV-Generierung: Umschalter für den konservativen Modus",
      },
    ],
    connectsTo: [
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
    ],
    faqs: [
      {
        question: "Erfindet MagicCV jemals Erfahrung, die ein Berater nicht hat?",
        answer:
          "Nein. Das RFP-zu-CV-Reasoning setzt ausschließlich neue Schwerpunkte und ordnet echte Erfahrung aus dem Quellprofil des Beraters neu an. Jede Aussage in einem generierten CV ist auf dieses Profil rückführbar.",
      },
      {
        question: "Was, wenn eine Person das Ergebnis prüfen soll, bevor es verwendet wird?",
        answer:
          "Aktivieren Sie den konservativen ('Do-not-generate') Modus. MagicCV zeigt Ihnen dann die relevante Erfahrung und die vorgeschlagene Gewichtung zur Prüfung an, statt automatisch einen fertigen CV zu erstellen.",
      },
      {
        question: "Was füge ich ein - das vollständige RFP oder eine Zusammenfassung?",
        answer:
          "Fügen Sie die Ausschreibung so ein, wie sie Ihnen vorliegt - ob als vollständiges RFP-Dokument, als Übersicht der Bewertungskriterien oder als kurze Zusammenfassung. MagicCV extrahiert aus Ihrem Material alles, was es braucht.",
      },
    ],
    related: [
      { label: "CVs auf jede Ausschreibung zuschneiden", href: "/use-cases/tailor-cvs" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "RFP-zu-CV-Reasoning - die AI-native Engine von MagicCV",
      description:
        "MagicCV liest die Ausschreibung, versteht die Erfolgskriterien und passt jeden Berater-CV gezielt an - ohne Erfahrung zu erfinden.",
      keywords: ["KI CV für RFP", "RFP zu CV Tool", "CV für Ausschreibung erstellen"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Markenkonsistente Exporte",
    h1: "Jeder CV, perfekt im Corporate Design.",
    sub: "Ihre Schriften, Farben und Layouts - automatisch auf jeden Berater-CV und jedes Angebotspaket angewendet.",
    whatItDoesBody:
      "Definieren Sie Ihre Marke einmal - Schriften, Farben, Logo-Platzierung, Layout - und jeder von MagicCV generierte CV verwendet sie automatisch. Exportieren Sie als PDF oder DOCX, und wechseln Sie zu kunden- oder ausschreibungsspezifischen Vorlagen, wenn ein Angebot ein bestimmtes Format verlangt - ohne die zugrunde liegenden Profildaten anzufassen.",
    benefits: [
      {
        title: "Eine Markenvorlage, überall angewendet",
        body: "Definieren Sie die visuelle Identität Ihres Unternehmens einmal. Jeder Berater-CV und jedes Angebotspaket übernimmt sie automatisch - keine manuelle Formatierung pro Angebot.",
        screenshotAlt: "Markenvorlagen-Editor mit angewendetem Firmenlogo und Farben",
      },
      {
        title: "Kunden- und ausschreibungsspezifische Formate auf Abruf",
        body: "Behalten Sie Ihren Hausstil als Standard und wechseln Sie zur geforderten Kundenvorlage oder einem behördlichen Ausschreibungsformat, ohne etwas von Hand neu aufzubauen.",
        screenshotAlt: "Vorlagenauswahl mit Hausstil und kundenspezifischem Format",
      },
      {
        title: "Export als PDF oder DOCX",
        body: "Erstellen Sie einreichungsfertige Dateien in dem Format, das Ihr Angebotsprozess tatsächlich benötigt.",
        screenshotAlt: "Export-Dialog mit PDF- und DOCX-Ausgabeoptionen",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Können wir für einen bestimmten Kunden oder eine Ausschreibung eine andere Vorlage verwenden?",
        answer:
          "Ja. Legen Sie Ihre Hausmarke als Standard fest und ergänzen Sie kunden- oder ausschreibungsspezifische Vorlagen, wann immer ein Angebot es erfordert - ohne die zugrunde liegenden Profildaten anzufassen.",
      },
      {
        question: "Welche Exportformate werden unterstützt?",
        answer: "Aktuell PDF und DOCX, beide aus demselben markenkonformen Vorlagensystem generiert.",
      },
    ],
    related: [
      { label: "Design- & Kreativagenturen", href: "/solutions/design-agencies" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Markenkonsistente CV-Vorlagen & Exporte - MagicCV",
      description:
        "Ihre Schriften, Farben und Layouts, automatisch auf jeden Berater-CV und jedes Angebotspaket angewendet. PDF- und DOCX-Export.",
      keywords: ["CV Vorlage Corporate Design", "einheitliche Berater-CVs"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonymisierung & DSGVO",
    h1: "Anonymisierung von Grund auf integriert, nicht nachgerüstet.",
    sub: "Anonymisierte CVs für Ausschreibungen und Wettbewerbsangebote mit einem Klick - mit durchgängigem GDPR-by-Design.",
    whatItDoesBody:
      "Aktivieren Sie die Anonymisierung für jeden beliebigen CV, um Namen, Fotos und andere identifizierende Angaben nach Regeln zu entfernen, die Sie selbst festlegen - konsistent, im gesamten Team, jedes Mal. Entwickelt für Blindbewertungsverfahren und öffentliche Ausschreibungen, mit durchgängiger GDPR-by-Design-Datenverarbeitung. Das vollständige Compliance-Bild finden Sie im Trust Center.",
    benefits: [
      {
        title: "Anonymisierung mit einem Klick",
        body: "Entfernen Sie identifizierende Angaben aus jedem CV mit einem einzigen Schalter - keine manuelle Schwärzung, keine Inkonsistenzen zwischen Beratern.",
        screenshotAlt: "Anonymisierungs-Umschalter mit Vorher-Nachher-Vergleich eines CVs",
      },
      {
        title: "Regelbasierte Kontrolle darüber, was entfernt wird",
        body: "Konfigurieren Sie genau, welche Felder in Ihrem Prozess als identifizierend gelten, damit anonymisierte CVs die konkreten Anforderungen der Ausschreibung oder Bewertung erfüllen.",
        screenshotAlt: "Konfigurationspanel für Anonymisierungsregeln",
      },
      {
        title: "Konsistent auch in großem Umfang",
        body: "Jeder anonymisierte CV folgt denselben Regeln - ob es um eine einzelne Einreichung oder ein komplettes Team-Paket für eine öffentliche Ausschreibung geht.",
        screenshotAlt: "Anonymisiertes CV-Paket für ein Team aus mehreren Beratern",
      },
    ],
    connectsTo: [
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Was wird entfernt, wenn ein CV anonymisiert wird?",
        answer:
          "Namen, Fotos und andere identifizierende Angaben werden nach von Ihnen konfigurierten Regeln entfernt - ausgelegt auf die Anforderungen von Blindbewertungen und öffentlichen Ausschreibungen.",
      },
      {
        question: "Ist das DSGVO-konform?",
        answer:
          "Die Anonymisierung ist ein Baustein des GDPR-by-Design-Ansatzes von MagicCV. Das vollständige Bild zu Datenresidenz, Aufbewahrung und Verarbeitung finden Sie im Trust Center.",
      },
    ],
    related: [
      { label: "CVs anonymisieren", href: "/use-cases/anonymize-cvs" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "CV-Anonymisierung - anonymisierter Lebenslauf per Klick",
      description:
        "Anonymisierte Lebensläufe für Ausschreibungen und faire Auswahlverfahren per Klick - konsistent im ganzen Team, DSGVO by Design.",
      keywords: ["anonymisierter lebenslauf", "anonymer lebenslauf", "cv anonymisierung", "dsgvo cv tool"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Mehrsprachigkeit & Übersetzung",
    h1: "Bieten Sie in jeder europäischen Sprache an.",
    sub: "Erstellen Sie professionelle, markenkonforme CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen - aus einem einzigen Master-Profil.",
    whatItDoesBody:
      "Pflegen Sie ein Master-Profil pro Berater und generieren Sie daraus bei Bedarf präzise, markenkonforme CVs in jeder unterstützten Sprache - ohne Abtippen, ohne separate Dokumente, die synchron gehalten werden müssen. Die Abdeckung umfasst heute die zentralen EU-Sprachen, in denen die Mittelstandskunden von MagicCV am häufigsten anbieten - weitere sind auf der Roadmap.",
    benefits: [
      {
        title: "Ein Master-Profil, viele Sprachen",
        body: "Pflegen Sie eine einzige verlässliche Datenbasis pro Berater. Generieren Sie einen übersetzten, markenkonformen CV in jeder unterstützten Sprache, sobald ein Angebot ihn erfordert.",
        screenshotAlt: "Sprachauswahl beim Generieren eines CVs in mehreren EU-Sprachen",
      },
      {
        title: "Gebaut für die EU-Beschaffung",
        body: "Grenzüberschreitende Ausschreibungen und mehrsprachige Bewertungsgremien sind für die Kunden von MagicCV der Normalfall, kein Sonderfall.",
        screenshotAlt: "Mehrsprachiges CV-Paket für eine grenzüberschreitende Ausschreibung",
      },
      {
        title: "Konsistente Qualität über alle Sprachen hinweg",
        body: "Dieselbe Markenvorlage und dieselben zugrunde liegenden Fakten ziehen sich durch jede Sprachversion - zwischen den Übersetzungen driftet nichts auseinander.",
        screenshotAlt: "CV-Vergleich in zwei Sprachen nebeneinander",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Welche Sprachen werden heute unterstützt?",
        answer:
          "Aktuell werden EN, DE, FR, NL und ES unterstützt - die zentralen Sprachen, in denen die europäischen Mittelstandskunden von MagicCV anbieten. Weitere EU-Sprachen sind auf der Roadmap.",
      },
      {
        question: "Muss ich pro Sprache ein separates Profil pflegen?",
        answer:
          "Nein. Pflegen Sie ein Master-Profil pro Berater und generieren Sie jede unterstützte Sprache auf Abruf - es gibt nichts, was manuell synchron gehalten werden müsste.",
      },
    ],
    related: [
      { label: "CVs in jede Sprache übersetzen", href: "/use-cases/translate-cvs" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "Mehrsprachige CVs - Lebenslauf übersetzen ohne Neuformatierung",
      description:
        "Erstellen Sie professionelle, markenkonforme CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen - aus einem einzigen Master-Profil.",
      keywords: ["mehrsprachiges CV Tool", "CV in mehreren Sprachen", "Lebenslauf übersetzen Beratung"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Zentrale Profile & Skills-Intelligenz",
    h1: "Die Lebenslauf-Datenbank Ihres Teams - ein strukturiertes Profil pro Person.",
    sub: "Eine durchsuchbare Lebenslauf-Datenbank und Kompetenzmatrix für Ihr ganzes Team: einmal importieren, Profile aktuell halten und jedes Format auf Abruf erstellen.",
    whatItDoesBody:
      "Ersetzen Sie verstreute CVs in Netzlaufwerken und Postfächern durch ein strukturiertes, stets aktuelles Profil pro Berater. Importieren Sie heute aus vorhandenen Dateien - LinkedIn- und HRIS-Anreicherung sind auf der Roadmap - und durchsuchen Sie dann Ihre gesamte Bench nach Skills oder Erfahrung, um jedes von einem Angebot geforderte Ausgabeformat zu generieren: auf Abruf, aus einer einzigen verlässlichen Datenbasis.",
    benefits: [
      {
        title: "Strukturierte Profile statt Freitext-Dokumente",
        body: "Erfahrung, Skills und Zertifizierungen jedes Beraters liegen als strukturierte Daten vor - durchsuchbar und wiederverwendbar, nicht in einer Word-Datei eingeschlossen.",
        screenshotAlt: "Editor für strukturierte Beraterprofile",
      },
      {
        title: "Importieren und anreichern",
        body: "Starten Sie mit dem Import vorhandener CVs. LinkedIn- und HRIS-Anreicherung (Personio, BambooHR, HiBob) sind auf der Roadmap, um Profile automatisch aktuell zu halten.",
        screenshotAlt: "Profilimport aus vorhandenen CV-Dateien",
      },
      {
        title: "Die richtige Person schnell finden",
        body: "Durchsuchen Sie Ihre gesamte Bench nach Skill, Zertifizierung oder früheren Projekten und besetzen Sie die nächste Ausschreibung in Minuten - statt sich durch Ordner zu wühlen.",
        screenshotAlt: "Skills-Suche über die gesamte Berater-Bench",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Wie bekomme ich vorhandene CVs in MagicCV?",
        answer:
          "Importieren Sie Ihre vorhandenen CV-Dateien, um strukturierte Profile zu erstellen. LinkedIn- und HRIS-Anreicherung (Personio, BambooHR, HiBob) sind auf der Roadmap, um sie mit weniger manuellem Aufwand aktuell zu halten.",
      },
      {
        question: "Kann ich über alle Berater hinweg nach Skills suchen?",
        answer:
          "Ja. Jedes Profil besteht aus strukturierten Daten - Sie können Ihre gesamte Bench nach Skill, Zertifizierung oder früheren Projekten durchsuchen, um eine Ausschreibung schnell zu besetzen.",
      },
    ],
    related: [
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Für HR- / People-Ops-Teams", href: "/solutions/hr" },
      { label: "Für Recruitment-Teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Lebenslauf-Datenbank & Kompetenzmatrix-Software",
      description:
        "Eine durchsuchbare Lebenslauf-Datenbank und Kompetenzmatrix in einem: CVs per Parsing importieren, das ganze Team nach Skills durchsuchen und markenkonforme CVs auf Abruf erstellen.",
      keywords: ["lebenslauf datenbank", "cv datenbank", "kompetenzmatrix software", "skill matrix software", "mitarbeiterprofile software"],
    },
  },
];
