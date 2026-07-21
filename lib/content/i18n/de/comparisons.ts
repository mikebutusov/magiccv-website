import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase",
    sub: "Ein ehrlicher Vergleich für CV- und Angebotsmanagement in der Beratung.",
    whereCompetitorWins: [
      "Starke Markenbekanntheit im Markt",
      "Ausgereifte, über Jahre entwickelte UX",
      "Etablierte Enterprise-Kunden und Case Studies",
      "Etablierte Workflows für die Angebotserstellung",
    ],
    whereMagicCvDiffers: [
      "RFP-zu-CV-Reasoning, das bei der Ausschreibung ansetzt, nicht bei einer Vorlage",
      "Öffentliche Self-Service-Preise - keine Demo-Hürde, um die Kosten zu sehen",
      "Gebaut für den Mittelstand, nicht Enterprise-first",
      "Live in etwa einer Woche, nicht nach einem quartalslangen Rollout",
      "EU-nativ: mehrsprachig, GDPR-by-Design, Anonymisierung integriert",
    ],
    rows: [
      { category: "Ausgangspunkt", magiccv: "Analysiert die RFP-Ausschreibung", competitor: "Vorlagenbasierte CV-Formatierung" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nur nach Demo" },
      { category: "Zielunternehmensgröße", magiccv: "Mittelstand (10-250 Mitarbeitende)", competitor: "Enterprise-orientiert" },
      { category: "Typische Zeit bis zum Go-live", magiccv: "Etwa eine Woche", competitor: "Länger, Enterprise-Rollout" },
      { category: "Mehrsprachigkeit", magiccv: "5+ EU-Sprachen", competitor: "Unterschiedlich" },
      { category: "Anonymisierung", magiccv: "Integriert, ein Klick", competitor: "Unterschiedlich" },
    ],
    guidance:
      "Sie brauchen beschaffungstaugliche Enterprise-Verträge und eine lange Implementierung? Dann passt Flowcase. Sie wollen in einer Woche live sein und bei einem echten RFP ansetzen? MagicCV.",
    faqs: [
      {
        question: "Ist MagicCV ein direkter Ersatz für Flowcase?",
        answer:
          "Für mittelständische Unternehmen, die bei Angebots-CVs schnell vorankommen wollen, ohne einen Enterprise-Rollout zu stemmen: ja. Größere Unternehmen mit komplexeren Beschaffungsanforderungen bevorzugen möglicherweise weiterhin die Enterprise-Erfahrung von Flowcase.",
      },
      {
        question: "Kann ich MagicCV ohne Sales-Gespräch ausprobieren?",
        answer: "Ja - die Preise sind öffentlich und es gibt einen kostenlosen Plan (10 Profile, 30 CVs), sodass Sie ohne Demo-Termin starten können.",
      },
    ],
    related: [
      { label: "Preise", href: "/pricing" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase - ehrlicher Vergleich",
      description:
        "Wie sich MagicCV und Flowcase beim CV-Management für Beratungen vergleichen: Preise, KI, Implementierung, EU-Compliance.",
      keywords: ["Flowcase Alternative", "Flowcase vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cinode",
    competitorName: "Cinode",
    h1: "MagicCV vs Cinode",
    sub: "Ein ehrlicher Vergleich für CV- und Ressourcenmanagement in der Beratung.",
    whereCompetitorWins: [
      "Breite Suite: CV-Management, Skills, Vertrieb und Ressourcenplanung auf einer Plattform",
      "Starke Präsenz in den nordischen Ländern",
      "Nach vollständigem Rollout tief verankert und schwer zu ersetzen",
    ],
    whereMagicCvDiffers: [
      "Schärferer Fokus: CV-für-RFP besser gelöst als jedes einzelne Modul einer breiteren Suite",
      "Schnellere Einführung",
      "Geringere Kosten und geringere Wechselkosten",
      "Öffentliche Self-Service-Preise",
    ],
    rows: [
      { category: "Umfang", magiccv: "Fokussiert: RFP-zu-CV-Workflow", competitor: "Breite Suite: CV + Skills + Vertrieb + Resourcing" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
      { category: "Einführungsdauer", magiccv: "Etwa eine Woche", competitor: "Länger, Suite-weiter Rollout" },
      { category: "Regionale Stärke", magiccv: "EU-weit, mehrsprachig", competitor: "Stark in den nordischen Ländern" },
      { category: "Wechselkosten", magiccv: "Gering - schlankes, ergänzendes Tool", competitor: "Höher nach vollständiger Einbettung" },
    ],
    guidance:
      "Sie wollen HRIS, CRM und Ressourcenplanung auf einmal ersetzen? Cinode. Sie wollen zuerst die Angebote in den Griff bekommen und Ihre übrigen Tools behalten? MagicCV.",
    faqs: [
      {
        question: "Ersetzt MagicCV die Ressourcenplanung oder ein CRM?",
        answer:
          "Nein - MagicCV konzentriert sich gezielt auf den RFP-zu-CV-Workflow. Wenn Sie eine breitere Suite inklusive Ressourcenplanung und Vertrieb brauchen, ist der Umfang von Cinode größer.",
      },
      {
        question: "Können MagicCV und Cinode parallel eingesetzt werden?",
        answer:
          "Manche Unternehmen nutzen MagicCV gezielt für Angebots-CVs und behalten daneben eine breitere Plattform für das Resourcing - es hängt davon ab, wie viel der Suite Sie heute tatsächlich verwenden.",
      },
    ],
    related: [
      { label: "Preise", href: "/pricing" },
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Cinode vergleichen: Fokus, Einführungsgeschwindigkeit, Kosten und regionale Passung.",
      keywords: ["Cinode Alternative", "Cinode vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv",
    competitorName: "Sprint CV",
    h1: "MagicCV vs Sprint CV",
    sub: "Ein ehrlicher Vergleich für CV-Tools in Beratung und Personalvermittlung.",
    whereCompetitorWins: [
      "Auf Beratung und Personalvermittlung fokussiertes Produkt",
      "Solides CV-Parsing und Vorlagen",
      "Starke Präsenz auf der Iberischen Halbinsel",
    ],
    whereMagicCvDiffers: [
      "AI-native Architektur, gebaut um RFP-Reasoning - nicht nur Parsing",
      "Öffentliche Preise",
      "Schnellere Iteration und Roadmap-Geschwindigkeit",
      "Breitere Abdeckung von EU-Sprachen",
    ],
    rows: [
      { category: "Kern-Engine", magiccv: "AI-natives RFP-Reasoning", competitor: "CV-Parsing und Vorlagen" },
      { category: "Regionale Stärke", magiccv: "EU-weit", competitor: "Stark auf der Iberischen Halbinsel" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
      { category: "Sprachabdeckung", magiccv: "5+ EU-Sprachen", competitor: "Unterschiedlich" },
    ],
    guidance:
      "Sie sind hauptsächlich auf der Iberischen Halbinsel tätig? Dann ist Sprint CV eine respektable Wahl. Sie wollen breitere EU-Sprachunterstützung und AI-natives RFP-Reasoning? MagicCV.",
    faqs: [
      {
        question: "Ist Sprint CV eine schlechte Wahl?",
        answer:
          "Nein - es ist ein solides, fokussiertes Produkt, insbesondere für Unternehmen, die hauptsächlich auf der Iberischen Halbinsel tätig sind. Der Vorteil von MagicCV liegt in der breiteren EU-Sprachabdeckung und im RFP-zu-CV-Reasoning statt im vorlagenbasierten Parsing.",
      },
    ],
    related: [
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Sprint CV beim CV-Management für Beratung und Personalvermittlung vergleichen.",
      keywords: ["Sprint CV Alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cuvibox",
    competitorName: "CuViBox",
    h1: "MagicCV vs CuViBox",
    sub: "Ein ehrlicher Vergleich für das Management von Berater-CVs.",
    whereCompetitorWins: ["Solider, etablierter CV-Manager", "Ausgereifte Template-Engine"],
    whereMagicCvDiffers: [
      "AI-nativ: analysiert zuerst das RFP, statt einer Template-Engine mit nachträglich aufgesetzter KI",
      "Self-Service-Modell für den Mittelstand",
    ],
    rows: [
      { category: "Ansatz", magiccv: "AI-nativ, analysiert die Ausschreibung", competitor: "Template-Engine, KI als Add-on" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
      { category: "Zielunternehmensgröße", magiccv: "Mittelstand (10-250 Mitarbeitende)", competitor: "Unterschiedlich" },
    ],
    guidance:
      "Sie sind mit einem vorlagenbasierten Workflow und etwas KI-Unterstützung zufrieden? Dann ist CuViBox eine etablierte Option. Sie wollen, dass das KI-Reasoning der Ausgangspunkt ist und kein Add-on? MagicCV.",
    faqs: [
      {
        question: "Was ist der praktische Unterschied zwischen 'AI-nativ' und 'AI-gestützt'?",
        answer:
          "MagicCV startet beim RFP und überlegt, welche Erfahrung zählt, bevor eine Vorlage überhaupt ins Spiel kommt. Vorlagenbasierte Tools starten bei einem CV-Format und nutzen KI zum Befüllen - die Ausschreibung kommt erst an zweiter Stelle.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox - ehrlicher Vergleich",
      description: "Wie sich MagicCV und CuViBox vergleichen: vorlagenbasierte vs AI-native CV-Generierung.",
      keywords: ["CuViBox Alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "napta",
    competitorName: "Napta",
    h1: "MagicCV vs Napta",
    sub: "Ein ehrlicher Vergleich für CV- und Ressourcenmanagement in der Beratung.",
    whereCompetitorWins: [
      "Breite Plattform für Ressourcenmanagement und Staffing",
      "CV-Generierung ist ein Modul innerhalb eines größeren Produkts",
    ],
    whereMagicCvDiffers: [
      "Scharfer Fokus speziell auf CV-für-RFP",
      "Schneller einzuführen",
      "AI-natives RFP-Reasoning",
    ],
    rows: [
      { category: "Umfang", magiccv: "Fokussiert: CV-für-RFP", competitor: "Breite Ressourcenmanagement-Suite" },
      { category: "Einführungsdauer", magiccv: "Etwa eine Woche", competitor: "Länger, plattformweiter Rollout" },
      { category: "Kern-Engine", magiccv: "AI-natives RFP-Reasoning", competitor: "Vorlagenbasiert" },
    ],
    guidance: "Sie brauchen eine vollständige Ressourcenmanagement-Suite? Napta. Sie wollen zuerst die Angebots-CVs in den Griff bekommen - in Tagen statt Monaten? MagicCV.",
    faqs: [
      {
        question: "Bietet MagicCV Ressourcenplanung wie Napta?",
        answer:
          "Nein - MagicCV konzentriert sich gezielt auf den RFP-zu-CV-Workflow. Wenn Sie ein breiteres Ressourcenmanagement brauchen, ist der Umfang von Napta größer.",
      },
    ],
    related: [
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Napta vergleichen: fokussiertes CV-für-RFP-Tool vs breite Ressourcenmanagement-Suite.",
      keywords: ["Napta Alternative"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sharepoint-word",
    competitorName: "SharePoint + Word",
    h1: "MagicCV vs SharePoint + Word",
    sub: "Die wahren Kosten des Nichtstuns.",
    whereCompetitorWins: ["Keine direkten Softwarekosten", "Keine Lernkurve", "Jedem im Team vertraut"],
    whereMagicCvDiffers: [
      "Beseitigt die versteckten Wochenstunden für manuelles CV-Hinterherlaufen und Umformatieren",
      "Konsistente, markenkonforme Ergebnisse statt Abweichungen zwischen Versionen",
      "Keine hektischen Nachtschichten mehr vor der Deadline",
      "Weniger unerfasste, verlorene RFPs durch CVs, die die Deadline verpasst haben",
    ],
    rows: [
      { category: "Direkte Kosten", magiccv: "Transparenter Monatsplan", competitor: "0 € direkte Kosten" },
      { category: "Zeit pro CV-Paket", magiccv: "Etwa 15 Minuten", competitor: "Stunden pro RFP, jedes Mal" },
      { category: "Konsistenz", magiccv: "Jedes Mal dieselbe Markenvorlage", competitor: "Variiert je nachdem, wer formatiert" },
      { category: "Deadline-Risiko", magiccv: "Gebaut für schnelle Durchlaufzeiten", competitor: "Hektik in letzter Minute ist die Regel" },
    ],
    guidance:
      "SharePoint und Word kosten in der Lizenz nichts - aber die Stunden für Hinterherlaufen, Umformatieren und den Endspurt vor Deadlines sind ein realer, wiederkehrender Kostenfaktor. Nutzen Sie den Rechner unten, um zu sehen, was das Ihr Team voraussichtlich kostet.",
    faqs: [
      {
        question: "Ist 'kostenlos' nicht immer günstiger als ein bezahltes Tool?",
        answer:
          "Nur, wenn man die Zeitkosten nicht mitrechnet. Die Stunden pro RFP für das Hinterherlaufen und Umformatieren von CVs summieren sich - oft auf mehr, als ein MagicCV-Plan pro Monat kostet. Der ROI-Rechner auf dieser Seite und auf der Preisseite rechnet es mit Ihren eigenen Zahlen durch.",
      },
      {
        question: "Wir haben bereits ein Netzlaufwerk-System, das größtenteils funktioniert - warum wechseln?",
        answer:
          "Wenn es wirklich funktioniert - ohne verlorene RFPs, Inkonsistenzen oder Endspurts - brauchen Sie vielleicht keinen Wechsel. Die meisten Teams, die MagicCV evaluieren, tun das, weil mindestens einer dieser Schmerzpunkte sie bereits Zeit oder Aufträge kostet.",
      },
    ],
    related: [
      { label: "Preise", href: "/pricing" },
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Für Sales-Teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV vs SharePoint + Word - die wahren Kosten des Nichtstuns",
      description: "Die versteckten Kosten der Verwaltung von Berater-CVs in SharePoint und Word - und worauf sie sich summieren.",
      keywords: ["Berater-CV SharePoint", "CVs nicht mehr in Word verwalten"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvgate",
    competitorName: "CVGate",
    h1: "MagicCV vs CVGate",
    sub: "Ein ehrlicher Vergleich für CV- und Angebotsmanagement in der Beratung.",
    whereCompetitorWins: [
      "Fokus auf CV-Management für Beratung und Angebote - ein sehr ähnlicher Anwendungsfall",
      "Transparente, öffentliche Preisstufen",
      "Skills-basierte Suche, CRM-/Kontaktmanagement und Angebotstools an einem Ort",
      "Auswertungen zu Ansichten und Aktionen bei geteilten CVs",
    ],
    whereMagicCvDiffers: [
      "AI-nativ: formt jeden CV um eine Ausschreibung oder einen Kunden herum - nicht nur Vorlagenformatierung",
      "Anonymisierung und mehrsprachige Ausgabe für EU-Ausschreibungen integriert",
      "Umfassenderes Beraterprofil-Management als einzige verlässliche Datenbasis",
    ],
    rows: [
      { category: "Kategorie", magiccv: "AI-native CV-Generierung + Management", competitor: "CV-Management + Angebotstools" },
      { category: "Zuschneiden auf eine Ausschreibung", magiccv: "Analysiert die Ausschreibung", competitor: "Vorlagenbasiert" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Öffentliche Preisstufen" },
      { category: "Anonymisierung", magiccv: "Integriert, ein Klick", competitor: "Unterschiedlich" },
      { category: "Mehrsprachigkeit", magiccv: "5+ EU-Sprachen", competitor: "Unterschiedlich" },
    ],
    guidance:
      "CVGate ist eine solide, transparent bepreiste Wahl, um CVs zu zentralisieren und Angebote zu beschleunigen. Wenn Sie zusätzlich KI wollen, die jeden CV um die Ausschreibung herum formt, plus integrierte Anonymisierung und mehrsprachige Ausgabe für EU-Ausschreibungen, geht MagicCV weiter.",
    faqs: [
      {
        question: "Ist CVGate eine faire Alternative zu MagicCV?",
        answer:
          "Ja - es ist mit öffentlichen Preisen ernsthaft auf CV- und Angebotsmanagement für Beratungen fokussiert. Der Hauptunterschied ist das AI-native Zuschneiden von MagicCV sowie die EU-native Anonymisierung und mehrsprachige Ausgabe.",
      },
    ],
    related: [
      { label: "Preise", href: "/pricing" },
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CVGate - ehrlicher Vergleich",
      description: "Wie sich MagicCV und CVGate bei CV-Management und Angeboten für Beratungen vergleichen: KI-Zuschneiden, Anonymisierung, Mehrsprachigkeit, Preise.",
      keywords: ["CVGate Alternative", "CVGate vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cv-transformer",
    competitorName: "CV-Transformer",
    h1: "MagicCV vs CV-Transformer",
    sub: "Ein ehrlicher Vergleich für CV-Formatierung und -Management.",
    whereCompetitorWins: [
      "Stark bei der automatischen CV-Formatierung in gebrandete, standardisierte Vorlagen",
      "CV-Anonymisierung und Unterstützung für 14 Sprachen",
      "ATS-Integrationen (Greenhouse, JobAdder, Salesforce und mehr), Datenspeicherung in der EU",
      "Schnelles, volumenstarkes Umformatieren für Staffing und Recruitment",
    ],
    whereMagicCvDiffers: [
      "Startet bei der Ausschreibung und entscheidet, welche Erfahrung in den Vordergrund gehört - nicht nur Umformatieren",
      "Zentrale, stets aktuelle Beraterprofile als verlässliche Datenbasis",
      "Gebaut um den Angebotsworkflow in der Beratung, mit öffentlichen Self-Service-Preisen",
    ],
    rows: [
      { category: "Kernaufgabe", magiccv: "Reasoning + Generierung + Management", competitor: "Umformatieren in eine gebrandete Vorlage" },
      { category: "Zuschneiden auf eine Ausschreibung", magiccv: "Analysiert die Ausschreibung", competitor: "Umformatieren, keine Neugewichtung" },
      { category: "Anonymisierung", magiccv: "Integriert", competitor: "Integriert" },
      { category: "Sprachen", magiccv: "5+ EU-Sprachen", competitor: "14 Sprachen" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Credits / monatlich (Testphase verfügbar)" },
    ],
    guidance:
      "Wenn Ihr Hauptbedarf darin besteht, eingehende Kandidaten-CVs in großem Volumen in ein konsistentes, gebrandetes Format zu bringen, ist CV-Transformer stark und integriert sich mit den großen ATS-Systemen. Wenn das Tool über die Ausschreibung nachdenken und Beraterprofile langfristig verwalten soll, ist das der Fokus von MagicCV.",
    faqs: [
      {
        question: "Was ist der zentrale Unterschied?",
        answer:
          "CV-Transformer glänzt beim Umformatieren von CVs in eine standardisierte, gebrandete Vorlage. MagicCV ergänzt den markenkonformen Export um RFP-zu-CV-Reasoning und laufendes Profilmanagement.",
      },
    ],
    related: [
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "CVs anonymisieren", href: "/use-cases/anonymize-cvs" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV-Transformer - ehrlicher Vergleich",
      description: "Wie sich MagicCV und CV-Transformer vergleichen: Umformatieren vs KI-Reasoning, Anonymisierung, Sprachen und Preise.",
      keywords: ["CV-Transformer Alternative", "CV Transformer vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvconverter",
    competitorName: "CV Converter",
    h1: "MagicCV vs CV Converter",
    sub: "Ein ehrlicher Vergleich für CV-Formatierungstools.",
    whereCompetitorWins: [
      "Sehr einfach: Google-Docs-Vorlage hochladen, Kandidaten-CVs passend konvertieren",
      "Transparente, günstige Pay-as-you-go-Preise mit kostenloser Testphase",
      "Erhält Ihre Vorlagenstruktur und Ihr Branding, keine Datenspeicherung beim Anbieter",
      "Ideal für volumenstarkes Recruitment und RPO-Formatierung",
    ],
    whereMagicCvDiffers: [
      "Übernimmt das Reasoning, nicht nur die Formatierung - formt CVs um eine Ausschreibung oder einen Kunden herum",
      "Zentrale Beraterprofile, die langfristig aktuell gehalten werden",
      "Anonymisierung, mehrsprachige Ausgabe und Angebotspakete für EU-Beratungsangebote",
    ],
    rows: [
      { category: "Umfang", magiccv: "Verwalten, zuschneiden, generieren, exportieren", competitor: "Nur Formatkonvertierung" },
      { category: "Verlässliche Datenbasis", magiccv: "Strukturierte Profile pro Berater", competitor: "Konvertierung pro Datei" },
      { category: "Zuschneiden auf eine Ausschreibung", magiccv: "Analysiert die Ausschreibung", competitor: "Nicht der Fokus" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Öffentlich, pro Konvertierung / monatlich" },
    ],
    guidance:
      "CV Converter ist ein cleverer, günstiger Weg, CV-Formatierung in großem Volumen zu standardisieren. Wenn Formatierung wirklich alles ist, was Sie brauchen, ist er in seiner Einfachheit schwer zu schlagen. Wenn Sie Profilmanagement und ausschreibungsgetriebenes Zuschneiden wollen, ist MagicCV das umfassendere Tool.",
    faqs: [
      {
        question: "Ist CV Converter günstiger als MagicCV?",
        answer:
          "Für reine Formatierung pro Datei kann das Pay-as-you-go-Modell sehr günstig sein. MagicCV deckt einen breiteren Workflow ab - Profilmanagement, Zuschneiden, Anonymisierung, mehrsprachige Pakete - die beiden lösen also unterschiedliche Aufgaben.",
      },
    ],
    related: [
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "Preise", href: "/pricing" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV Converter - ehrlicher Vergleich",
      description: "Wie sich MagicCV und CV Converter vergleichen: reine Formatkonvertierung vs vollständiges CV-Management mit KI-Zuschneiden.",
      keywords: ["CV Converter Alternative", "cvconverter vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "muchskills",
    competitorName: "MuchSkills CV Inventory",
    h1: "MagicCV vs MuchSkills CV Inventory",
    sub: "Ein ehrlicher Vergleich für skills-getriebene Berater-CVs.",
    whereCompetitorWins: [
      "Generiert CVs aus verifizierten, aktuellen Skills-Daten in der MuchSkills-Datenbank",
      "Starke Versionskontrolle und Audit-Trails für jeden CV",
      "Verwaltet interne Mitarbeitende und externe Berater gemeinsam",
      "Tiefe Skills-Taxonomie (Tausende Zertifizierungen, Tech-Skills, Fähigkeiten)",
    ],
    whereMagicCvDiffers: [
      "Arbeitet mit Ihren vorhandenen Profilen und CVs - keine Notwendigkeit, zuerst ein separates Skills-Daten-Produkt einzuführen",
      "RFP-zu-CV-Reasoning, das echte Erfahrung für jede Ausschreibung neu gewichtet",
      "EU-native Anonymisierung und mehrsprachige Ausgabe für Ausschreibungen, mit öffentlichen Self-Service-Preisen",
    ],
    rows: [
      { category: "Datenmodell", magiccv: "Strukturierte Profile aus Ihren CVs/HRIS", competitor: "Skills-Datenbank-getrieben" },
      { category: "Zuschneiden auf eine Ausschreibung", magiccv: "Analysiert die Ausschreibung", competitor: "Matcht auf Skills-Daten" },
      { category: "Versionskontrolle", magiccv: "Ja", competitor: "Ja, mit Audit-Trails" },
      { category: "Anonymisierung / Mehrsprachigkeit", magiccv: "Integriert", competitor: "Unterschiedlich" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
    ],
    guidance:
      "Wenn Sie MuchSkills bereits als Skills-System of Record betreiben (oder einführen wollen), ist das CV Inventory eine naheliegende Erweiterung mit exzellenten Skills-Daten. Wenn Sie lieber starke, auf die Ausschreibung zugeschnittene CVs aus den Profilen und CVs generieren, die Sie bereits haben, bringt MagicCV Sie ans Ziel - ohne zuerst eine separate Skills-Plattform aufzusetzen.",
    faqs: [
      {
        question: "Brauche ich eine Skills-Datenbank, um MagicCV zu nutzen?",
        answer:
          "Nein. MagicCV erstellt strukturierte Profile aus Ihren vorhandenen CVs (HRIS auf der Roadmap). MuchSkills CV Inventory ist um seine Skills-Datenbank herum gebaut - stark, wenn diese bereits Ihr System of Record ist.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs MuchSkills CV Inventory - ehrlicher Vergleich",
      description: "Wie sich MagicCV und MuchSkills CV Inventory vergleichen: profilgetriebene vs skills-datenbank-getriebene Berater-CVs.",
      keywords: ["MuchSkills Alternative", "CV Inventory vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv-manager",
    competitorName: "SprintCV Enterprise",
    h1: "MagicCV vs SprintCV Enterprise CV Manager",
    sub: "Ein ehrlicher Vergleich für Enterprise-CV-Management in der Beratung.",
    whereCompetitorWins: [
      "Enterprise-taugliches CV-Management mit solidem Parsing und Vorlagen",
      "Fokus auf Beratung und Personalvermittlung, etabliert auf der Iberischen Halbinsel",
      "Ausgereifte Admin- und Team-Management-Funktionen für größere Unternehmen",
    ],
    whereMagicCvDiffers: [
      "AI-native Architektur, gebaut um RFP-Reasoning statt um Parsing und Vorlagen",
      "Öffentliche Self-Service-Preise und schnelle Time-to-Value für den Mittelstand",
      "Breitere Abdeckung von EU-Sprachen, Anonymisierung integriert",
    ],
    rows: [
      { category: "Kern-Engine", magiccv: "AI-natives RFP-Reasoning", competitor: "Parsing + Vorlagen" },
      { category: "Zielunternehmensgröße", magiccv: "Mittelstand (10-250)", competitor: "Enterprise-orientiert" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
      { category: "Regionale Stärke", magiccv: "EU-weit", competitor: "Stark auf der Iberischen Halbinsel" },
    ],
    guidance:
      "Für ein größeres Unternehmen, das einen ausgereiften, administrationsstarken CV-Manager sucht, lohnt ein Blick auf das Enterprise-Produkt von SprintCV. Für mittelständische Unternehmen, die in einer Woche mit AI-nativem Zuschneiden und öffentlichen Preisen live sein wollen, passt MagicCV besser.",
    faqs: [
      {
        question: "Worin unterscheidet sich dieser Vergleich von eurem Sprint-CV-Vergleich?",
        answer:
          "Es ist das Enterprise-CV-Manager-Angebot desselben Anbieters. Die Kernaussagen sind ähnlich: Der Vorteil von MagicCV liegt in AI-nativem Reasoning, öffentlichen Preisen und schneller Time-to-Value für den Mittelstand.",
      },
    ],
    related: [
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Preise", href: "/pricing" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs SprintCV Enterprise CV Manager - ehrlicher Vergleich",
      description: "Wie sich MagicCV und der Enterprise-CV-Manager von SprintCV vergleichen: KI-Reasoning, Preise, EU-Sprachen.",
      keywords: ["SprintCV Alternative", "Sprint CV Enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "enhancv",
    competitorName: "Enhancv",
    h1: "MagicCV vs Enhancv",
    sub: "Ein ehrlicher Vergleich für CV- und Lebenslauf-Builder.",
    whereCompetitorWins: [
      "Exzellenter, ausgereifter Lebenslauf-Builder mit über 40 Vorlagen",
      "Ein-Klick-Import aus LinkedIn/DOCX/PDF und Abgleich mit Stellenbeschreibungen",
      "ATS-freundliche Ausgabe und Team-Bibliothek mit eigenem Branding",
      "Sehr gut geeignet für Recruitment-, Staffing- und Karriere-Coaching-Teams",
    ],
    whereMagicCvDiffers: [
      "Gebaut für Beratungsangebote und Projekte, nicht für Bewerber-Lebensläufe",
      "RFP-zu-CV-Reasoning und angebotsfertige CV-Pakete statt ATS-Optimierung einzelner Lebensläufe",
      "EU-nativ: Anonymisierung und mehrsprachige Ausgabe für Ausschreibungen, GDPR-by-Design",
    ],
    rows: [
      { category: "Primärer Einsatz", magiccv: "Berater-CVs für Angebote/Kunden", competitor: "Bewerber-Lebensläufe" },
      { category: "Optimiert für", magiccv: "Das Kundenbriefing", competitor: "ATS / Stellenbeschreibungen" },
      { category: "Angebots-CV-Pakete", magiccv: "Ja", competitor: "Nicht der Fokus" },
      { category: "Anonymisierung für Ausschreibungen", magiccv: "Integriert", competitor: "Nicht der Fokus" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Öffentlich" },
    ],
    guidance:
      "Enhancv ist eine hervorragende Wahl, wenn Sie Kandidaten-Lebensläufe erstellen - besonders in Recruitment und Outplacement, wo ATS-Tauglichkeit zählt. Wenn Ihre CVs in Beratungsangebote und Ausschreibungen gehen, ist MagicCV für genau diese Aufgabe gebaut.",
    faqs: [
      {
        question: "Kann Enhancv CVs für Beratungsangebote erstellen?",
        answer:
          "Es kann gebrandete, ATS-freundliche Lebensläufe in großem Umfang erstellen. MagicCV ist gezielt für die Beratung gebaut: ausschreibungsgetriebenes Zuschneiden, Angebotspakete, Anonymisierung und mehrsprachige Ausgabe für EU-Angebote.",
      },
    ],
    related: [
      { label: "Für Recruitment-Teams", href: "/solutions/recruitment" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Enhancv - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Enhancv vergleichen: CVs für Beratungsangebote vs Lebenslauf-Builder für Bewerber.",
      keywords: ["Enhancv Alternative", "Enhancv vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "visualcv",
    competitorName: "VisualCV",
    h1: "MagicCV vs VisualCV",
    sub: "Ein ehrlicher Vergleich für CV- und Lebenslauf-Builder.",
    whereCompetitorWins: [
      "Etablierter Lebenslauf-/CV-Builder mit einem Business-Tarif für Teams",
      "Ausgereifte Vorlagen, gehostete Online-CVs und Ansichts-Analytics",
      "Gut für konsistente, gebrandete Lebensläufe im Team",
    ],
    whereMagicCvDiffers: [
      "Beratungsspezifisch: formt CVs um ein Kundenbriefing herum und stellt Angebotspakete zusammen",
      "Anonymisierung und mehrsprachige Ausgabe für EU-Ausschreibungen, GDPR-by-Design",
      "Zentrales Beraterprofil-Management als verlässliche Datenbasis",
    ],
    rows: [
      { category: "Primärer Einsatz", magiccv: "Berater-CVs für Angebote/Kunden", competitor: "Lebensläufe / Online-CVs" },
      { category: "Zuschneiden auf eine Ausschreibung", magiccv: "Analysiert die Ausschreibung", competitor: "Vorlagenbasiert" },
      { category: "Angebots-CV-Pakete", magiccv: "Ja", competitor: "Nicht der Fokus" },
      { category: "Anonymisierung / Mehrsprachigkeit", magiccv: "Integriert", competitor: "Unterschiedlich" },
    ],
    guidance:
      "VisualCV ist ein starker, universeller Lebenslauf-/CV-Builder - auch für Teams, die konsistente, gebrandete CVs wollen. Wenn Ihre Arbeit aus Beratungsangeboten besteht - Zuschneiden auf Ausschreibungen, Pakete, Tender - ist MagicCV die spezialisiertere Lösung.",
    faqs: [
      {
        question: "Ist VisualCV für Beratungsangebote gebaut?",
        answer:
          "Es ist ein universeller CV-/Lebenslauf-Builder mit Team-Funktionen. MagicCV konzentriert sich gezielt auf den Angebotsworkflow in der Beratung und die Anforderungen von EU-Ausschreibungen.",
      },
    ],
    related: [
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "CVs auf jede Ausschreibung zuschneiden", href: "/use-cases/tailor-cvs" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs VisualCV - ehrlicher Vergleich",
      description: "Wie sich MagicCV und VisualCV vergleichen: CVs für Beratungsangebote vs universelles Lebenslauf-/CV-Building für Teams.",
      keywords: ["VisualCV Alternative", "VisualCV Business vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "rezi",
    competitorName: "Rezi",
    h1: "MagicCV vs Rezi",
    sub: "Ein ehrlicher Vergleich für KI-Lebenslauf-Builder.",
    whereCompetitorWins: [
      "Ausgereifter KI-Lebenslauf-Builder mit White-Label-Deployment",
      "Starkes ATS-Keyword-Targeting und Review-Management-Workflow",
      "SOC 2 Type II, SSO und eine große Nutzerbasis",
      "Sehr gut geeignet für Hochschulen, Career Center und Bewerbungsservices",
    ],
    whereMagicCvDiffers: [
      "Beratungsangebote statt Bewerber-Lebensläufe oder ATS-Optimierung",
      "Ausschreibungsgetriebenes Zuschneiden und angebotsfertige CV-Pakete für Kundeneinreichungen",
      "EU-native Anonymisierung und mehrsprachige Ausgabe für Ausschreibungen",
    ],
    rows: [
      { category: "Primärer Einsatz", magiccv: "Berater-CVs für Angebote/Kunden", competitor: "Bewerber-Lebensläufe (White-Label)" },
      { category: "Optimiert für", magiccv: "Das Kundenbriefing", competitor: "ATS-Keywords" },
      { category: "Zielgruppe", magiccv: "Beratungen & Professional-Services-Firmen", competitor: "Hochschulen, Career Center, Agenturen" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Öffentlich (Preisstufen pro Nutzer)" },
    ],
    guidance:
      "Rezi ist eine starke Wahl, wenn Sie einen gebrandeten Lebenslauf-Builder für Jobsuchende bereitstellen und Wert auf ATS-Optimierung legen. Für Beratungen, die kundenfertige CVs und Angebotspakete erstellen, ist MagicCV das passendere Tool.",
    faqs: [
      {
        question: "Optimiert MagicCV CVs für ATS wie Rezi?",
        answer:
          "Nein - ATS-Keyword-Optimierung ist ein Thema für Jobsuchende. MagicCV optimiert Berater-CVs für das Briefing des Kunden und die Anforderungen von Angeboten und Ausschreibungen.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Ein angebotsfertiges CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Rezi - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Rezi vergleichen: CVs für Beratungsangebote vs White-Label-ATS-Lebenslauf-Building.",
      keywords: ["Rezi Alternative", "Rezi Enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "neobrain",
    competitorName: "Neobrain",
    h1: "MagicCV vs Neobrain",
    sub: "Eine andere Kategorie - Skills- & Talentmanagement vs Angebots-CVs.",
    whereCompetitorWins: [
      "Skills-basiertes Talentmanagement für Enterprises: Skills-Mapping, interne Mobilität, Workforce-Planung",
      "Module für Performance und Karriereentwicklung, HRIS-Integrationen",
      "Sehr gut geeignet für große HR-Organisationen, die sich rund um Skills modernisieren",
    ],
    whereMagicCvDiffers: [
      "Erstellt kundenfertige Berater-CVs und Angebotspakete - keine interne HR-Planung",
      "Ausschreibungsgetriebenes Zuschneiden, markenkonformer Export, Anonymisierung, mehrsprachig für Ausschreibungen",
      "Live in einer Woche, mit öffentlichen Self-Service-Preisen",
    ],
    rows: [
      { category: "Kategorie", magiccv: "Kundenfertige CVs für Angebote", competitor: "Internes Skills- & Talentmanagement" },
      { category: "Primärer Käufer", magiccv: "Bid-, Delivery- und Resourcing-Leads", competitor: "HR- / People-Leadership" },
      { category: "Output", magiccv: "Markenkonforme CVs & Angebotspakete", competitor: "Skills-Maps, Mobilität, Planung" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
    ],
    guidance:
      "Neobrain und MagicCV lösen unterschiedliche Probleme. Wenn Sie Enterprise-Skills-Mapping und interne Talentmobilität brauchen, ist Neobrain dafür gebaut. Wenn Sie Beraterprofile in kundenfertige CVs und Angebotspakete verwandeln wollen, ist das MagicCV. Manche Unternehmen nutzen beides.",
    faqs: [
      {
        question: "Ist Neobrain ein Wettbewerber von MagicCV?",
        answer:
          "Nur an den Rändern. Neobrain ist eine skills-basierte HR-/Talent-Plattform; MagicCV erstellt kundenfertige CVs für Angebote. Die beiden können sich ergänzen, statt sich auszuschließen.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Für HR- / People-Ops-Teams", href: "/solutions/hr" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Neobrain - ehrlicher Vergleich",
      description: "Wie sich MagicCV und Neobrain vergleichen: kundenfertige Angebots-CVs vs Enterprise-Skills- und Talentmanagement.",
      keywords: ["Neobrain Alternative", "Neobrain vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "techwolf",
    competitorName: "TechWolf",
    h1: "MagicCV vs TechWolf",
    sub: "Eine andere Kategorie - Skills Intelligence vs Angebots-CVs.",
    whereCompetitorWins: [
      "Skills-Intelligence-Infrastruktur für Enterprises, die Skills aus Arbeitssignalen ableitet",
      "Integriert sich mit den großen HCM-Systemen (Workday, SAP SuccessFactors) in sehr großem Maßstab",
      "Erstklassig für kontinuierliche, automatisierte Skills-Daten über riesige Belegschaften",
    ],
    whereMagicCvDiffers: [
      "Verwandelt Profile in kundenfertige CVs und Angebotspakete - keine internen Skills-Daten",
      "Ausschreibungsgetriebenes Zuschneiden, markenkonformer Export, Anonymisierung, mehrsprachig für EU-Ausschreibungen",
      "Mittelstandsfreundlich: live in einer Woche, öffentliche Self-Service-Preise",
    ],
    rows: [
      { category: "Kategorie", magiccv: "Kundenfertige CVs für Angebote", competitor: "Interne Skills Intelligence" },
      { category: "Output", magiccv: "Markenkonforme CVs & Angebotspakete", competitor: "Skills-Daten in HR-Systemen" },
      { category: "Größenordnung", magiccv: "Mittelständische Beratungen", competitor: "Sehr große Enterprises (100k+ Mitarbeitende)" },
      { category: "Preise", magiccv: "Öffentlich, Self-Service", competitor: "Nicht öffentlich" },
    ],
    guidance:
      "TechWolf ist eine leistungsstarke Skills-Intelligence-Schicht für große Enterprises - eine andere Aufgabe als die von MagicCV. Wenn Sie automatisierte, kontinuierliche Skills-Daten über eine riesige Belegschaft wollen: TechWolf. Wenn Sie kundenfertige Berater-CVs und Angebotspakete wollen: MagicCV.",
    faqs: [
      {
        question: "Leitet MagicCV Skills aus Arbeitsaktivität ab wie TechWolf?",
        answer:
          "Nein - das ist die Spezialität von TechWolf. MagicCV arbeitet mit Beraterprofilen und CVs, um kundenfertige Dokumente zu erstellen; die beiden operieren auf unterschiedlichen Ebenen des Stacks.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - ehrlicher Vergleich",
      description: "Wie sich MagicCV und TechWolf vergleichen: kundenfertige Angebots-CVs vs Enterprise Skills Intelligence.",
      keywords: ["TechWolf Alternative", "TechWolf vs MagicCV"],
    },
  },
];
