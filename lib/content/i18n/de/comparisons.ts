import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase: Was passt dazu, wie Ihr Team anbietet?",
    sub: "Beide Tools verwalten Berater-CVs für Angebote. Die echten Unterschiede: für wen sie gebaut sind, wie schnell Sie live sind und was die KI mit einem RFP tatsächlich macht.",
    whereCompetitorWins: [
      "Der Kategorieführer nach Bekanntheit: Wenn Ihr Einkauf Referenzen verlangt, hat Flowcase Jahre an Enterprise-Fallstudien vorzuweisen",
      "Ein ausgereiftes, poliertes Produkt, verfeinert über eine große Kundenbasis seit den CV-Partner-Zeiten",
      "Tiefere Enterprise-Angebotsworkflows, inklusive etablierter Prozesse für große Bid-Teams mit formellen Prüfstufen",
      "Die bessere Wahl, wenn Sie einen Anbieter brauchen, der Security-Reviews bei Unternehmen Ihrer Größe schon viele Male bestanden hat",
    ],
    whereMagicCvDiffers: [
      "Startet beim RFP: Fügen Sie die Ausschreibung ein, und die KI baut jeden CV um deren Anforderungen herum um - statt dass Sie innerhalb einer Vorlage entscheiden, was betont wird",
      "Chat-basiertes Editing: 'Kürze die letzten zwei Rollen, führe mit der Banking-Erfahrung' statt Klicken durch Formularfelder",
      "Preise auf der Website: Free-Plan (10 Profile, 30 CVs), Pro für $50/Monat (200 Profile, 600 CVs). Kein Demo-Call, um die Kosten zu erfahren",
      "Time-to-Value in einem Tag statt in einem Implementierungsprojekt: Importieren Sie Ihre bestehenden Word- und PDF-CVs und exportieren Sie den ersten gebrandeten CV noch am selben Nachmittag",
      "Ein-Klick-Anonymisierung und Übersetzung, die Ihr Layout behält - eingebaut für EU-Ausschreibungen und Rahmenverträge",
    ],
    rows: [
      { category: "Wo das Zuschneiden beginnt", magiccv: "Beim RFP-Text: Die KI liest die Ausschreibung und gewichtet jeden CV neu", competitor: "Beim CV: Sie wählen Highlights innerhalb von Master-Profil-Vorlagen" },
      { category: "Wie Sie editieren", magiccv: "Chat-Anweisungen plus direkte Bearbeitung", competitor: "Strukturierte Formulare und Vorlagenfelder" },
      { category: "Preismodell", magiccv: "Öffentlich: Free, $50/Monat Pro, individuelles Enterprise", competitor: "Auf Anfrage, typischerweise über einen Sales- und Demo-Prozess" },
      { category: "Für wen gebaut", magiccv: "Mittelständische Unternehmen, 10-250 Berater", competitor: "Positioniert für größere Enterprise-Unternehmen" },
      { category: "Einstieg", magiccv: "Self-Service: CVs importieren, erster Export am selben Tag", competitor: "Typischerweise eine Onboarding- und Implementierungsphase" },
      { category: "Anonymisierung für Ausschreibungen", magiccv: "Ein Klick, Blind-CVs in Ihrer Vorlage", competitor: "Verfügbar; Einrichtung je nach Konfiguration" },
    ],
    guidance:
      "Wenn Sie ein Unternehmen mit 500 Personen, einem Beschaffungsprozess, einem Security-Team und Budget für einen Implementierungspartner sind, ist Flowcases Track Record ein echtes Asset. Wenn Sie ein Unternehmen mit 15-150 Personen sind, das Abende an CV-Umformatierung verliert, und Sie das diese Woche ohne Sales-Zyklus beheben wollen, ist MagicCV genau dafür gebaut. Testen Sie den Free-Plan an einem laufenden Angebot und vergleichen Sie das Ergebnis.",
    faqs: [
      {
        question: "Können wir von Flowcase zu MagicCV migrieren?",
        answer:
          "Ja. Exportieren Sie Ihre CVs aus Flowcase als Word oder PDF, ziehen Sie sie in MagicCV, und die KI parst jeden in ein strukturiertes Profil. Es gibt kein Migrationsprojekt - die CVs eines 50-Personen-Teams sind typischerweise an einem Nachmittag importiert.",
      },
      {
        question: "Ist MagicCV ein vollständiger Ersatz für Flowcase?",
        answer:
          "Für den Kernjob - Berater-CVs aktuell halten, pro Angebot zuschneiden und markenkonforme Dokumente exportieren - ja. Flowcase geht bei Enterprise-Angebotsworkflows tiefer und hat einen längeren Enterprise-Track-Record, was umso mehr zählt, je größer Ihr Unternehmen ist.",
      },
      {
        question: "Wie vergleichen sich die Preise von MagicCV und Flowcase?",
        answer:
          "MagicCV veröffentlicht seine Preise: Free (10 Profile, 30 CVs), Pro für $50/Monat (200 Profile, 600 CVs) und ein individueller Enterprise-Plan mit SSO. Flowcase-Preise gibt es typischerweise auf Anfrage - ein direkter Vergleich erfordert deren Sales-Prozess.",
      },
      {
        question: "Wie lange dauert der Rollout im Vergleich zu Flowcase?",
        answer:
          "MagicCV ist Self-Service: Die meisten Teams importieren ihre bestehenden CVs und exportieren den ersten gebrandeten CV am selben Tag. Enterprise-Plattformen fahren typischerweise eine Onboarding-Phase mit Vorlagen-Setup und Schulung - vernünftig im Enterprise-Maßstab, überdimensioniert für ein Unternehmen mit 30 Personen.",
      },
      {
        question: "Wir arbeiten an EU-Ausschreibungen. Wie vergleichen sich die beiden bei Compliance?",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, Audit-Logs und Ein-Klick-Blind-CVs für anonymisierte Einreichungen. SOC 2 ist in Arbeit. Flowcase bedient ebenfalls europäische Unternehmen; prüfen Sie deren aktuelle Zertifizierungen direkt für Ihre Beschaffungs-Checkliste.",
      },
      {
        question: "Kann ich MagicCV testen, ohne mit dem Vertrieb zu sprechen?",
        answer:
          "Ja. Registrieren Sie sich auf getmagic.cv, importieren Sie eine Handvoll CVs im Free-Plan und lassen Sie ein echtes RFP durchlaufen. Wenn das zugeschnittene Ergebnis nicht besser ist als das, was Sie von Hand produzieren, haben Sie eine Stunde verloren, kein Quartal.",
      },
    ],
    related: [
      { label: "Preise", href: "/pricing" },
      { label: "RFP-zu-CV-Zuschneiden", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Cinode: fokussiertes CV-Tool oder komplette Consulting-Suite?",
    sub: "Cinode ist eine Business-Plattform für Beratungen. MagicCV macht einen Job - angebotsfertige CVs - und das in einem Tag. Was Sie brauchen, hängt davon ab, was tatsächlich kaputt ist.",
    whereCompetitorWins: [
      "Echte Suite-Breite: CVs, Skills-Management, Sales-Pipeline, Subunternehmer-Netzwerke und Ressourcenplanung in einer Plattform",
      "Starke Präsenz bei nordischen Beratungen, mit einem etablierten Partnernetzwerk in diesem Markt",
      "Ein Anbieter, ein Login, ein Datenmodell über Sales, Staffing und Delivery hinweg - sobald vollständig eingeführt",
      "Die bessere Wahl, wenn Ihr Unternehmen entschieden hat, das gesamte Geschäft auf einer einzigen Consulting-Plattform zu führen",
    ],
    whereMagicCvDiffers: [
      "Macht den einen Job, den die meisten Suiten am schwächsten machen: ein RFP lesen und Berater-CVs darum herum umbauen, mit KI, die bei der Ausschreibung startet",
      "Kein suite-weiter Rollout: Importieren Sie Ihre bestehenden CVs und exportieren Sie das erste gebrandete Dokument am selben Tag, während CRM und Planungstools unangetastet bleiben",
      "Pro-Plan für $50/Monat mit Preisen auf der Website - kein Scoping-Call, um zu erfahren, was ein Modul kostet",
      "Chat-Editing sowie Ein-Klick-Anonymisierung und Übersetzung für EU-Ausschreibungen, eingebaut in den CV-Workflow statt verteilt über Module",
    ],
    rows: [
      { category: "Umfang", magiccv: "Ein Workflow: Profile, RFP-Zuschneiden, gebrandeter Export", competitor: "Business-Suite: CVs, Skills, Sales, Resourcing, Partner" },
      { category: "Was Sie ersetzen", magiccv: "Den SharePoint-Ordner und die Dienstagabend-Formatierung", competitor: "Potenziell CRM, Staffing-Raster und CV-Prozess auf einmal" },
      { category: "Zeit bis zum ersten CV", magiccv: "Am selben Tag, Self-Service", competitor: "Typischerweise eine phasenweise, suite-weite Implementierung" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Auf Anfrage, typischerweise pro Modul und Seat" },
      { category: "Spätere Wechselkosten", magiccv: "Niedrig: CVs und Profile exportieren, fertig", competitor: "Höher, sobald Sales- und Staffing-Daten in der Suite leben" },
      { category: "RFP-Zuschneiden", magiccv: "Die KI liest die Ausschreibung und baut jeden CV um", competitor: "CV-Modul mit Vorlagen; Zuschneiden ist weitgehend manuell" },
    ],
    guidance:
      "Wenn Ihr Unternehmen Sales, Staffing und Skills auf einer Plattform konsolidiert - und Sie Appetit auf dieses Projekt haben - ist Cinode eine glaubwürdige Suite mit echtem nordischem Stammbaum. Wenn der akute Schmerz die Angebots-CVs sind und Sie Ihr Geschäft nicht re-platformen wollen, um das zu beheben, löst MagicCV genau dieses Problem noch diese Woche. Viele Teams beheben zuerst die CVs und treffen die Suite-Entscheidung später - mit besseren Informationen.",
    faqs: [
      {
        question: "Ersetzt MagicCV die Ressourcenplanung oder Sales-Pipeline von Cinode?",
        answer:
          "Nein. MagicCV deckt Beraterprofile, RFP-Zuschneiden und gebrandeten CV-Export ab. Wenn Sie Auslastungsplanung, Sales-Pipeline oder Subunternehmer-Management brauchen, ist das Suite-Territorium - Cinodes Umfang ist tatsächlich breiter.",
      },
      {
        question: "Können wir MagicCV neben Cinode verwenden?",
        answer:
          "Ja, und einige Teams tun das: die Suite für Staffing und Pipeline, MagicCV für die CVs, die in Angebote gehen. Da MagicCV jeden Word- oder PDF-CV importiert, braucht es kein Integrationsprojekt, damit beide koexistieren.",
      },
      {
        question: "Können wir CVs aus Cinode in MagicCV migrieren?",
        answer:
          "Ja. Exportieren Sie CVs aus Cinode als Word oder PDF und importieren Sie sie in MagicCV; die KI parst jeden in ein strukturiertes, durchsuchbares Profil. Kein Feld-Mapping, kein Migrationsberater.",
      },
      {
        question: "Wie vergleichen sich die Kosten?",
        answer:
          "MagicCV veröffentlicht seine Preise: Free (10 Profile, 30 CVs), $50/Monat Pro (200 Profile, 600 CVs), individuelles Enterprise. Cinode-Preise werden typischerweise pro Modul und Seat-Anzahl angeboten - die Gesamtkosten hängen davon ab, wie viel der Suite Sie nehmen.",
      },
      {
        question: "Wir sind eine nordische Beratung - ist Cinode nicht die Standardwahl?",
        answer:
          "Es ist eine starke regionale Wahl, besonders wenn Sie die ganze Suite wollen. Aber wenn es in Ihrer Evaluierung eigentlich um Angebots-CVs geht, vergleichen Sie den konkreten Workflow: Fügen Sie eine Ausschreibung in MagicCV ein, schneiden Sie drei CVs zu und stoppen Sie die Zeit gegen Ihren aktuellen Prozess, bevor Sie sich auf eine Plattform festlegen.",
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
    h1: "MagicCV vs Sprint CV: zwei Ansätze für die CV-Automatisierung in der Beratung",
    sub: "Beide zielen auf Beratungen und Personaldienstleister, die manuelle CV-Formatierung satt haben. Der Unterschied ist, was die Automatisierung tut: schnell Vorlagen füllen - oder zuerst über die Ausschreibung nachdenken.",
    whereCompetitorWins: [
      "Speziell für Beratung und Personalvermittlung gebaut - die CV-Strukturen entsprechen dem, wie IT-Dienstleister Menschen tatsächlich präsentieren",
      "Solides CV-Parsing und Vorlagen-Generierung, seit Jahren produktiv im Einsatz bei Beratungen",
      "Starke Präsenz in Portugal und Spanien, mit Referenzkunden im iberischen IT-Dienstleistungsmarkt",
      "Ein geradliniger, bewährter Workflow, wenn vorlagenbasierte Generierung alles ist, was Sie brauchen",
    ],
    whereMagicCvDiffers: [
      "AI-natives Zuschneiden: Fügen Sie das RFP oder Kundenbriefing ein, und der CV wird um dessen Anforderungen herum umgebaut - welche Projekte vorne stehen, was gekürzt wird - nicht nur neu in einer Vorlage gerendert",
      "Chat-Editing auf strukturierten Profilen: 'Betone die Azure-Migrationsarbeit' schlägt das manuelle Nachbearbeiten eines generierten Dokuments",
      "Übersetzung in jede Sprache, die Ihr Layout behält, plus Ein-Klick-Anonymisierung für Blindeinreichungen",
      "Öffentliche Preise mit Free-Plan - Sie können die Ergebnisqualität an einem echten Angebot benchmarken, bevor Sie etwas ausgeben",
    ],
    rows: [
      { category: "Kern-Engine", magiccv: "Die KI liest die Ausschreibung, dann baut sie den CV um", competitor: "Parst CVs und generiert aus Vorlagen" },
      { category: "Zuschneiden pro Angebot", magiccv: "Automatische Neugewichtung aus dem RFP-Text", competitor: "Typischerweise manuelle Auswahl innerhalb der Vorlage" },
      { category: "Editing", magiccv: "Chat-Anweisungen plus direkte Bearbeitung", competitor: "Vorlagen- und formularbasiertes Editing" },
      { category: "Sprachen", magiccv: "Jeden CV übersetzen, Layout bleibt erhalten", competitor: "Mehrsprachige Unterstützung; Abdeckung variiert" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Typischerweise auf Anfrage" },
      { category: "Regionale Stärke", magiccv: "EU-weit, GDPR-by-Design, EU-Datenresidenz", competitor: "Am stärksten auf der Iberischen Halbinsel" },
    ],
    guidance:
      "Wenn Sie eine iberische Beratung sind, die bewährte vorlagenbasierte CV-Generierung von einem Anbieter mit lokalen Referenzen will, ist Sprint CV eine respektable Wahl. Wenn der Teil, den Sie automatisieren wollen, das Denken ist - welche Erfahrung für dieses konkrete Briefing nach vorn gehört - dann ist das der Job der RFP-zu-CV-Engine von MagicCV. Lassen Sie dasselbe RFP durch beide laufen und vergleichen Sie die Entwürfe.",
    faqs: [
      {
        question: "Können wir von Sprint CV zu MagicCV wechseln?",
        answer:
          "Ja. Exportieren Sie Ihre CVs als Word oder PDF, importieren Sie sie in MagicCV, und jeder wird automatisch zu einem strukturierten Profil. Die meisten Teams produzieren noch am selben Tag gebrandete, zugeschnittene Exporte.",
      },
      {
        question: "Was bedeutet 'AI-nativ' in der Praxis gegenüber Vorlagen-Generierung?",
        answer:
          "Vorlagen-Tools nehmen einen gespeicherten CV und rendern ihn konsistent. MagicCV liest zuerst die Ausschreibung, entscheidet, welche Projekte, Skills und Zertifizierungen dafür zählen, ordnet um und formuliert entsprechend neu - und rendert dann in Ihrer Vorlage. Die Formatierung ist das Grundprogramm; das Zuschneiden ist der Unterschied.",
      },
      {
        question: "Beherrscht MagicCV die Sprachen, in denen wir anbieten?",
        answer:
          "Ja - MagicCV übersetzt CVs in jede Sprache und lässt das Layout intakt, sodass ein portugiesisches Master-Profil auf Englisch, Französisch oder Deutsch rausgehen kann, ohne Umformatierungsdurchgang.",
      },
      {
        question: "Wie vergleichen sich die Preise?",
        answer:
          "Die Preise von MagicCV stehen auf der Website: Free (10 Profile, 30 CVs), $50/Monat Pro (200 Profile, 600 CVs). Sprint-CV-Preise laufen typischerweise über deren Sales-Prozess - holen Sie ein Angebot ein und vergleichen Sie es mit Pro für Ihre Teamgröße.",
      },
      {
        question: "Ist MagicCV für Personalagenturen geeignet oder nur für Beratungen?",
        answer:
          "Für beide. Staffing-Teams nutzen denselben Workflow - Kandidaten-CVs importieren, mit einem Klick für Blindeinreichungen anonymisieren und in der Vorlage des Kunden oder der eigenen exportieren. Das RFP-Zuschneiden funktioniert an einer Rollenbeschreibung genauso gut wie an einer Ausschreibung.",
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
    h1: "MagicCV vs CuViBox: Vorlagen-Engine oder Briefing-first-KI?",
    sub: "Beide zentralisieren Berater-CVs und exportieren sie konsistent. Die Weggabelung: Beginnt das Zuschneiden bei Ihrer Vorlage oder beim Briefing des Kunden?",
    whereCompetitorWins: [
      "Ein etablierter Berater-CV-Manager mit einer ausgereiften Vorlagen-Engine, die seit Jahren echte Dokumentenstandards von Beratungen abbildet",
      "Ein vorhersehbarer, strukturierter Workflow: Daten einmal speichern, konsistente Dokumente daraus generieren",
      "Einfacher zu durchschauen, wenn Sie KI-Umschreibungen misstrauen und deterministische, Feld-für-Feld-Ausgabe wollen",
    ],
    whereMagicCvDiffers: [
      "Denkt vom RFP her, bevor es rendert: Die KI liest die Ausschreibung und entscheidet, welche Erfahrung vorne steht - statt diese Ermessensentscheidung der Person zu überlassen, die um 19 Uhr formatiert",
      "Chat-Editing: Sagen Sie dem CV in normaler Sprache, was sich ändern soll, statt durch Felder zu suchen",
      "Ein-Klick-Anonymisierung und Übersetzung in jede Sprache mit erhaltenem Layout - die zwei häufigsten Anforderungen von EU-Ausschreibungen, eingebaut",
      "Self-Service mit öffentlichen Preisen: Free-Plan zum Testen, $50/Monat Pro, wenn es sich bewährt",
    ],
    rows: [
      { category: "Ansatz", magiccv: "Briefing-first: Die KI liest das RFP, dann generiert sie", competitor: "Vorlagen-first: strukturierte Daten in Dokumente gerendert" },
      { category: "Zuschneiden pro Angebot", magiccv: "Automatische Neugewichtung für jedes Briefing", competitor: "Typischerweise manuelle Auswahl, was hineinkommt" },
      { category: "Editing-Modell", magiccv: "Chat-Anweisungen plus direkte Bearbeitung", competitor: "Strukturierte Felder und Vorlagen" },
      { category: "Anonymisierung / Übersetzung", magiccv: "Je ein Klick, Layout bleibt erhalten", competitor: "Variiert je nach Konfiguration" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Typischerweise auf Anfrage" },
      { category: "Einstieg", magiccv: "Bestehende CVs importieren, erster Export am selben Tag", competitor: "Zuerst Aufbau von Datenstruktur und Vorlagen" },
    ],
    guidance:
      "Wenn Sie eine deterministische Vorlagen-Engine wollen, in der jedes Feld von einer Regel platziert wird, die Sie konfiguriert haben, ist CuViBox eine etablierte Option. Wenn der Engpass in Ihrem Unternehmen das Entscheiden und Umschreiben ist - 8 CVs vor Donnerstag um einen 40-seitigen RFP-Anhang herum umbauen - automatisiert MagicCV genau diese Urteilsarbeit, nicht nur das Rendern. Der Free-Plan macht den Vergleich billig.",
    faqs: [
      {
        question: "Was ist der praktische Unterschied zwischen 'AI-nativ' und 'AI-gestützt'?",
        answer:
          "MagicCV startet beim RFP: Es liest die Ausschreibung, entscheidet, welche Projekte und Skills zählen, ordnet um und formuliert entsprechend - und rendert dann in Ihrer Vorlage. Vorlagen-first-Tools starten beim Dokumentformat und nutzen KI, wenn überhaupt, zum Befüllen von Feldern - die Ausschreibung kommt an zweiter Stelle.",
      },
      {
        question: "Können wir unsere CVs von CuViBox zu MagicCV umziehen?",
        answer:
          "Ja. Exportieren Sie CVs als Word oder PDF und importieren Sie sie in MagicCV - die KI parst jeden in ein strukturiertes Profil. Es gibt keine Feld-Mapping-Übung; die Bibliothek eines mittelgroßen Teams importiert an einem Nachmittag.",
      },
      {
        question: "Hält MagicCV unsere Dokumentenstandards so strikt ein wie eine Vorlagen-Engine?",
        answer:
          "Ja. Ihre Markenvorlage wird einmal eingerichtet, und jeder Export - PDF oder Word - rendert pixelgenau darin. Die KI ändert, was der CV pro Briefing sagt - nie, wie die Dokumente Ihres Unternehmens aussehen.",
      },
      {
        question: "Was, wenn wir der KI nicht zutrauen, Berater-CVs umzuschreiben?",
        answer:
          "Nichts geht ungeprüft raus. Die KI produziert einen zugeschnittenen Entwurf; Sie lesen ihn, passen ihn per Chat oder direkter Bearbeitung an und exportieren, wenn Sie zufrieden sind. Die meisten Teams stellen fest: Einen guten Entwurf zu prüfen dauert 10 Minuten, wo das Schreiben von Grund auf eine Stunde brauchte.",
      },
      {
        question: "Was kostet MagicCV im Vergleich zu CuViBox?",
        answer:
          "Die Preise von MagicCV sind öffentlich: Free (10 Profile, 30 CVs), $50/Monat Pro (200 Profile, 600 CVs), individuelles Enterprise mit SSO. CuViBox-Preise erhält man typischerweise über deren Sales-Prozess - vergleichen Sie ein Angebot mit Pro für Ihre Kopfzahl.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Zuschneiden", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Napta: Angebots-CVs beheben oder das Staffing re-platformen?",
    sub: "Napta ist eine Ressourcenmanagement-Plattform, in der CVs ein Modul sind. MagicCV ist der CV-Workflow, in der Tiefe. Die richtige Wahl hängt davon ab, welches Problem Sie Angebote kostet.",
    whereCompetitorWins: [
      "Eine vollständige Staffing- und Ressourcenmanagement-Plattform: Auslastung, Projektbesetzung, Skills und Karriereentwicklung an einem Ort",
      "Die CV-Generierung kommt gebündelt mit den Staffing-Daten - Profile und Verfügbarkeit leben zusammen, sobald die Plattform eingeführt ist",
      "Eine starke Wahl für Unternehmen, deren Kernschmerz Staffing-Transparenz und Auslastung ist, nicht nur Dokumente",
      "Etabliert bei mittelgroßen und großen Beratungen, insbesondere in Frankreich",
    ],
    whereMagicCvDiffers: [
      "Geht in die Tiefe, wo Suiten in die Breite gehen: Die KI liest das tatsächliche RFP und baut den CV jedes Beraters darum herum um, mit Chat-Editing zum Verfeinern des Entwurfs",
      "Keine Plattform-Migration: Ihr Staffing-Raster, HRIS und CRM bleiben, wo sie sind - MagicCV übernimmt nur das CV-Chaos",
      "Live am selben Tag, an dem Sie Ihre Word- und PDF-CVs importieren - statt eines Plattform-Rollouts mit Konfiguration und Schulung",
      "Öffentliche Preise ab $0, mit Pro für $50/Monat - kein Ressourcenmanagement-Projekt nötig, um Dokumente zu reparieren",
    ],
    rows: [
      { category: "Kategorie", magiccv: "Fokussierter CV-für-Angebote-Workflow", competitor: "Ressourcenmanagement-Plattform mit CV-Modul" },
      { category: "RFP-Zuschneiden", magiccv: "Die KI liest die Ausschreibung und baut jeden CV um", competitor: "Vorlagenbasierte Generierung aus Staffing-Profilen" },
      { category: "Was die Einführung verlangt", magiccv: "CVs importieren, Vorlage wählen, los", competitor: "Typischerweise Plattform-Rollout: Daten, Prozesse, Schulung" },
      { category: "Zeit bis zum ersten Ergebnis", magiccv: "Am selben Tag", competitor: "Wochen bis Monate, typisch für Plattform-Projekte" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Auf Anfrage, typischerweise pro Nutzer" },
      { category: "EU-Ausschreibungsfunktionen", magiccv: "Ein-Klick-Anonymisierung, Übersetzung mit erhaltenem Layout", competitor: "Nicht der Schwerpunkt des Produkts" },
    ],
    guidance:
      "Wenn Ihr eigentliches Problem das Staffing ist - wer verfügbar ist, wer auf der Bench sitzt, wie sich die Auslastung entwickelt - ist Napta dafür gebaut, und das CV-Modul fährt mit. Wenn Ihr eigentliches Problem die CVs selbst sind - 12 davon für ein Angebot umformatieren, Versionen, die in SharePoint auseinanderdriften - behebt MagicCV das noch diese Woche, ohne anzufassen, wie Sie Projekte besetzen. Diagnostizieren Sie den tatsächlichen Schmerz, bevor Sie die größere Angriffsfläche kaufen.",
    faqs: [
      {
        question: "Macht MagicCV Ressourcenplanung oder Auslastungs-Tracking wie Napta?",
        answer:
          "Nein. MagicCV deckt Beraterprofile, Skills-Suche, RFP-Zuschneiden und gebrandeten Export ab. Wenn Sie Auslastungs-Dashboards und Staffing-Workflows brauchen, ist das Plattform-Territorium, wo Napta wirklich mehr bietet.",
      },
      {
        question: "Kann MagicCV neben Napta arbeiten?",
        answer:
          "Ja. Einige Unternehmen behalten eine Staffing-Plattform für die Planung und nutzen MagicCV für kundenseitige CVs, weil das CV-Modul einer Suite selten RFPs liest. MagicCV importiert jeden Word- oder PDF-CV, also braucht der Parallelbetrieb keine Integration.",
      },
      {
        question: "Wie schnell ist MagicCV live im Vergleich zu einem Napta-Rollout?",
        answer:
          "MagicCV ist Self-Service: bestehende CVs importieren, Markenvorlage einrichten und den ersten zugeschnittenen CV am selben Tag exportieren. Ressourcenmanagement-Plattformen brauchen typischerweise Konfiguration, Datenladen und Schulung, bevor sich das CV-Modul auszahlt.",
      },
      {
        question: "Können wir CVs aus Napta in MagicCV migrieren?",
        answer:
          "Ja - exportieren Sie sie als Word oder PDF und importieren Sie sie in MagicCV. Die KI parst jede Datei in ein strukturiertes, durchsuchbares Profil mit Skills, Branchen, Sprachen und Zertifizierungen.",
      },
      {
        question: "Was kostet MagicCV?",
        answer:
          "Die Preise sind öffentlich: Free (10 Profile, 30 CVs), Pro für $50/Monat (200 Profile, 600 CVs) und individuelles Enterprise mit SSO und AVV. Plattform-Suiten werden typischerweise pro Nutzer und Monat über die gesamte Kopfzahl bepreist - ein anderes Budgetgespräch.",
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
    h1: "MagicCV vs SharePoint + Word + Ihre Abende",
    sub: "Der Platzhirsch in den meisten Unternehmen ist kein Wettbewerber - es ist ein Ordner namens 'CVs FINAL', zwölf Vorlagenvarianten und wer auch immer vor der Frist länger bleibt.",
    whereCompetitorWins: [
      "Null zusätzliche Lizenzkosten: Sie zahlen bereits für Microsoft 365, und die Finanzabteilung hinterfragt es nie",
      "Null Lernkurve: Jeder im Team nutzt Word seit dem Studium",
      "Totale Flexibilität: Jeder Partner kann seine eigene CV-Version pflegen, im eigenen Format, mit dem eigenen Foto von 2014",
      "Kein Anbieterrisiko, kein Beschaffungsreview, keine Müdigkeit durch noch ein neues Tool",
    ],
    whereMagicCvDiffers: [
      "Streicht den versteckten Kostenposten: 12 CVs für ein Angebot umzuformatieren dauert in Word Stunden - und in MagicCV etwa 15 Minuten Review",
      "Ein aktuelles Profil pro Person statt final_v3_JS_edit.docx im Wettstreit mit final_v3_JS_edit_NEW.docx in drei Ordnern",
      "Jeder Export entspricht exakt Ihrer Markenvorlage - keine Abweichung mehr, je nachdem, wer zuletzt formatiert hat",
      "Das Zuschneiden pro Angebot findet tatsächlich statt: Die KI liest das RFP und baut jeden CV um - statt dass derselbe generische CV rausgeht, weil keine Zeit war",
      "Die Freitagnachmittag-CV-Jagd wird ersetzt durch Profile, die das Team in Minuten aktualisiert, mit KI, die aus jeder eingefügten oder hochgeladenen Quelle Struktur macht",
    ],
    rows: [
      { category: "Lizenzkosten", magiccv: "Kostenloser Start; Pro $50/Monat für 200 Profile", competitor: "$0 extra - schon in Ihrem Microsoft-Stack" },
      { category: "Echte Kosten pro Angebot", magiccv: "Etwa 15 Minuten Review pro CV-Paket", competitor: "Stunden an Hinterherlaufen, Copy-Paste und Umformatieren" },
      { category: "Versionswahrheit", magiccv: "Ein strukturiertes Profil pro Berater", competitor: "final_v3, final_v3_NEW und die Privatkopie des Partners" },
      { category: "Markenkonsistenz", magiccv: "Pixelgenaue Vorlage bei jedem Export", competitor: "Hängt davon ab, wer formatiert hat - und wie spät es war" },
      { category: "Zuschneiden auf die Ausschreibung", magiccv: "Die KI liest das RFP und baut jeden CV um", competitor: "Unter Termindruck fast immer übersprungen" },
      { category: "Leute finden", magiccv: "Suche nach Skills, Branchen, Sprachen, Zertifizierungen", competitor: "In Teams herumfragen und hoffen, dass sich jemand erinnert" },
    ],
    guidance:
      "Wenn Ihr Team zwei Angebote im Jahr einreicht und die CVs wirklich unter Kontrolle sind, behalten Sie den Ordner - ganz ehrlich. Aber wenn die CV-Vorbereitung bei jedem Angebot Stunden frisst, Versionen auseinanderdriften und dieses Jahr mindestens eine Einreichung zu spät oder nicht markenkonform rausgegangen ist, ist die 'kostenlose' Option das teuerste Tool, das Sie betreiben. Importieren Sie 10 CVs im Free-Plan und stoppen Sie das nächste Angebot ehrlich gegen das letzte.",
    faqs: [
      {
        question: "Ist kostenlos nicht immer billiger als $50 im Monat?",
        answer:
          "Nur wenn die Arbeitsstunden auch kostenlos sind. Wenn zwei Personen sechs Stunden pro Angebot mit CV-Umformatierung verbringen und Sie zweimal im Monat anbieten, sind das rund 24 Stunden Senior-Zeit - was mehr kostet als ein Jahr Pro. Der ROI-Rechner auf der Preisseite rechnet es mit Ihren eigenen Zahlen durch.",
      },
      {
        question: "Was passiert mit den CVs, die wir schon in SharePoint haben?",
        answer:
          "Sie werden zum Ausgangspunkt. Ziehen Sie Ihre bestehenden Word- und PDF-Dateien in MagicCV, und die KI parst jede in ein strukturiertes Profil - kein Abtippen, keine Vorlagen-Chirurgie. Behalten Sie SharePoint gern als Archiv; die Arbeitskopien leben ab dann an einem Ort.",
      },
      {
        question: "Können wir unsere bestehende Word-Vorlage behalten?",
        answer:
          "Ja. Ihre Vorlage wird einmal in MagicCV eingerichtet, und jeder Export - Word oder PDF - rendert pixelgenau darin. Das Ergebnis sieht aus, als hätte es Ihr Unternehmen gemacht, denn das hat es; die KI beendet nur das manuelle Formatieren.",
      },
      {
        question: "Unser System funktioniert größtenteils. Warum etwas ändern, das nicht ganz kaputt ist?",
        answer:
          "Wenn nichts zu spät, nicht markenkonform oder ungeschnitten rausgeht: nicht ändern. Die meisten Teams, die CV-Management-Software evaluieren, tun das nach einem konkreten Vorfall - einem verlorenen Rahmenvertragsangebot, einem Kunden, dem ein veralteter CV auffällt, einem 48-Stunden-Gehetze. Wenn Sie so etwas dieses Jahr hatten, kostet 'funktioniert größtenteils' Sie bereits.",
      },
      {
        question: "Wird das Team noch ein Tool tatsächlich annehmen?",
        answer:
          "Adoption ist das ehrliche Risiko bei jedem Tool - deshalb verlangt MagicCV von Beratern wenig: Ihr Profil entsteht aus ihrem bestehenden CV, und Updates dauern Minuten, weil die KI die Strukturierung übernimmt. Am stärksten spüren die Veränderung die Leute, die Angebote formatieren - und die werden meist die lautesten Fürsprecher des Tools.",
      },
      {
        question: "Sind unsere CV-Daten in SharePoint sicherer als in einem SaaS-Tool?",
        answer:
          "SharePoint erbt Ihre Microsoft-Sicherheit, die solide ist - aber CVs verstreut über Ordner und Postfächer sind unter der DSGVO schwer zu auditieren oder zu löschen. MagicCV ist GDPR-by-Design mit EU-Datenresidenz und Audit-Logs, und ein Profil pro Person macht Löschanfragen zu einem Ein-Schritt-Job. SOC 2 ist in Arbeit.",
      },
    ],
    related: [
      { label: "Preise & ROI-Rechner", href: "/pricing" },
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
    h1: "MagicCV vs CVGate: zwei fokussierte Tools für Beratungs-CVs",
    sub: "Das ist ein enger Vergleich - beide zielen auf Beratungs-CVs und Angebotsarbeit, mit transparenten Preisen. Die Unterschiede liegen darin, wie das Zuschneiden funktioniert und was für EU-Ausschreibungen eingebaut ist.",
    whereCompetitorWins: [
      "Klar fokussiert auf CV- und Angebots-Management für Beratungen - eine enge Use-Case-Passung, kein allgemeiner Lebenslauf-Builder",
      "Transparente, öffentliche Preisstufen - seltener, als es in dieser Kategorie sein sollte",
      "Bündelt angrenzendes Angebots-Tooling: skills-basierte Suche plus CRM-artiges Kontaktmanagement neben den CVs",
      "Analytics zu geteilten CVs - zu sehen, wann ein Kunde ein Dokument angesehen oder darauf reagiert hat, ist im Sales-Zyklus wirklich nützlich",
    ],
    whereMagicCvDiffers: [
      "KI, die bei der Ausschreibung startet: Fügen Sie das RFP ein, und jeder CV wird um dessen Anforderungen herum umgebaut, mit Chat-Editing zum Verfeinern - nicht nur konsistent formatiert",
      "Ein-Klick-Anonymisierung und Übersetzung in jede Sprache mit erhaltenem Layout - die zwei Features, nach denen EU-Ausschreibungsteams zuerst fragen",
      "Strukturierte Beraterprofile als einzige verbindliche Datenbasis, durchsuchbar nach Skills, Branchen, Sprachen und Zertifizierungen",
      "GDPR-by-Design mit EU-Datenresidenz und Audit-Logs, mit SSO im Enterprise-Plan",
    ],
    rows: [
      { category: "Kategorie", magiccv: "AI-natives CV-Zuschneiden + Profilverwaltung", competitor: "CV-Management mit Angebots- und Kontakt-Tools" },
      { category: "Zuschneiden auf ein Briefing", magiccv: "Die KI liest das RFP und gewichtet jeden CV neu", competitor: "Vorlagenbasiert; Zuschneiden ist typischerweise manuell" },
      { category: "Preistransparenz", magiccv: "Öffentlich: Free, $50/Monat Pro, individuelles Enterprise", competitor: "Öffentliche Stufen - Anerkennung, wo sie hingehört" },
      { category: "Anonymisierung", magiccv: "Ein Klick, in Ihrer Vorlage", competitor: "Variiert je nach Plan und Konfiguration" },
      { category: "Übersetzung", magiccv: "Jede Sprache, Layout bleibt erhalten", competitor: "Variiert" },
      { category: "Editing", magiccv: "Chat-Anweisungen plus direkte Bearbeitung", competitor: "Formular- und Vorlagen-Editing" },
    ],
    guidance:
      "CVGate ist einer der faireren Vergleiche auf dieser Seite: fokussiertes Produkt, öffentliche Preise, echte Angebots-Features. Wenn CV-Sharing-Analytics und eingebautes Kontaktmanagement für Ihren Vertriebsprozess zählen, wägen Sie sie ernsthaft ab. Wenn KI-Zuschneiden pro Angebot, Blind-CVs und mehrsprachige Ausgabe für EU-Ausschreibungen die Features sind, die Sie wöchentlich nutzen, geht MagicCV genau dort weiter. Beide haben risikoarme Einstiege - testen Sie mit einem laufenden Angebot.",
    faqs: [
      {
        question: "Ist CVGate eine legitime Alternative zu MagicCV?",
        answer:
          "Ja - es ist wirklich auf CV- und Angebots-Management für Beratungen fokussiert, mit öffentlichen Preisen. Die Hauptunterschiede sind das Briefing-first-KI-Zuschneiden von MagicCV, das Chat-Editing sowie die eingebaute Anonymisierung und Übersetzung für EU-Ausschreibungen.",
      },
      {
        question: "Können wir von CVGate zu MagicCV migrieren?",
        answer:
          "Ja. Exportieren Sie Ihre CVs als Word oder PDF und importieren Sie sie in MagicCV; die KI baut aus jedem ein strukturiertes Profil. Die meisten Teams schließen den Umzug an einem Tag ab.",
      },
      {
        question: "Hat MagicCV CV-Ansichts-Analytics wie CVGate?",
        answer:
          "Nein - MagicCV exportiert polierte PDF- und Word-Dokumente, statt getrackte Links zu hosten, also gehören Ansichts-Analytics heute nicht zum Produkt. Wenn das Wissen, wann ein Kunde einen CV geöffnet hat, Ihren Follow-up-Prozess steuert, ist das ein echter Punkt für CVGate.",
      },
      {
        question: "Wie unterscheidet sich das Zuschneiden pro Angebot zwischen den beiden?",
        answer:
          "In MagicCV fügen Sie das RFP oder Briefing ein, und die KI entscheidet, womit jeder CV führen sollte; danach prüfen und verfeinern Sie per Chat. Vorlagenbasierte Tools halten den CV konsistent, überlassen die Was-betonen-Entscheidung aber der Person, die das Angebot vorbereitet.",
      },
      {
        question: "Wie vergleichen sich die beiden bei DSGVO und Datenresidenz?",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, Audit-Logs und einem AVV im Enterprise-Plan; SOC 2 ist in Arbeit. Prüfen Sie CVGates aktuelle Hosting- und Compliance-Dokumentation direkt - beide Anbieter veröffentlichen genug für eine vollständige Beschaffungs-Checkliste.",
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
    h1: "MagicCV vs CV-Transformer: Umformatierungs-Engine oder Zuschneide-Engine?",
    sub: "CV-Transformer verwandelt eingehende CVs in Ihr gebrandetes Format, in großem Volumen. MagicCV verwaltet Beraterprofile über die Zeit und baut sie pro Briefing um. Verschiedene Jobs, etwas Überschneidung.",
    whereCompetitorWins: [
      "Stark in genau einer Sache: eingehende CVs schnell und im Volumen einer Recruiting-Agentur in eine standardisierte, gebrandete Vorlage konvertieren",
      "Eingebaute Anonymisierung und Unterstützung für eine breite Palette an Sprachen",
      "Listet Integrationen mit Recruiting-Stacks wie Greenhouse, JobAdder und Salesforce, plus Speicherung in der EU",
      "Eine natürliche Wahl für Personal- und Recruiting-Unternehmen, die einen stetigen Strom von Dritt-Kandidaten-CVs verarbeiten",
    ],
    whereMagicCvDiffers: [
      "Schneidet zu, statt nur umzuformatieren: Die KI liest das RFP oder Kundenbriefing und ändert, was jeder CV betont - und rendert ihn dann in Ihrer Vorlage",
      "Profile bestehen fort und bleiben aktuell: ein strukturierter Datensatz pro Berater, über die Zeit gepflegt, statt einmaliger Dateikonvertierungen",
      "Kompetenzmatrix und Suche über die ganze Bench - jeden Berater mit Kubernetes, Deutsch und Banking-Hintergrund in Sekunden finden",
      "Gebaut um den Beratungs-Angebotsworkflow: CV-Pakete pro Angebot, Chat-Editing, Übersetzung mit erhaltenem Layout, öffentliche Self-Service-Preise ab $0",
    ],
    rows: [
      { category: "Kernjob", magiccv: "Profile verwalten, pro Briefing zuschneiden, markenkonform exportieren", competitor: "Eingehende CVs in Ihr gebrandetes Format konvertieren" },
      { category: "Datenmodell", magiccv: "Dauerhaftes Profil pro Person, aktuell gehalten", competitor: "Konvertierung pro Datei; typischerweise kein langlebiges Profil" },
      { category: "Zuschneiden auf ein Briefing", magiccv: "Die KI gewichtet Inhalte anhand des RFP-Texts neu", competitor: "Umformatieren und standardisieren, nicht neu gewichten" },
      { category: "Anonymisierung", magiccv: "Ein Klick, in Ihrer Vorlage", competitor: "Eingebaut" },
      { category: "Team-Suche", magiccv: "Skills, Branchen, Sprachen, Zertifizierungen", competitor: "Nicht der Fokus" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Typischerweise Credit- oder Abo-basiert, Trial verfügbar" },
    ],
    guidance:
      "Wenn Sie eine Recruiting- oder Personalagentur sind, deren Engpass das Volumen-Umformatieren von Kandidaten-CVs in den Hausstil ist, ist CV-Transformer stark in diesem Job und verbindet sich mit Recruiting-Stacks. Wenn Sie eine Beratung oder ein IT-Dienstleister sind, der wiederholt mit derselben Bench anbietet, brauchen Sie Profile, die fortbestehen und pro Briefing zuschneiden - das ist der Job von MagicCV. Manche Personalunternehmen brauchen legitim beide Muster; testen Sie jedes auf seinem Heimterrain.",
    faqs: [
      {
        question: "Was ist der Kernunterschied zwischen MagicCV und CV-Transformer?",
        answer:
          "CV-Transformer konvertiert jeden eingehenden CV in ein standardisiertes gebrandetes Dokument - eine Operation pro Datei. MagicCV pflegt ein lebendes Profil pro Berater und generiert daraus zugeschnittene, markenkonforme CVs für jedes Angebot - die KI entscheidet anhand des Briefings, was betont wird.",
      },
      {
        question: "Wir setzen dieselben Berater über Angebote hinweg ein. Welches Modell passt besser?",
        answer:
          "Dauerhafte Profile. Bei Konvertierung pro Datei verarbeiten Sie ein Dokument bei jeder Änderung neu; bei MagicCV wird das Profil einmal aktualisiert, und jeder folgende Export - jede Vorlage, jede Sprache, anonymisiert oder nicht - zieht aus aktuellen Daten.",
      },
      {
        question: "Beide Tools anonymisieren CVs. Gibt es einen Unterschied?",
        answer:
          "Beide erledigen den Kernjob, Blind-CVs zu erzeugen. In MagicCV ist die Anonymisierung ein Klick bei jedem Export und bleibt konsistent mit Ihrer Vorlage - und weil sie auf strukturierten Profilen arbeitet, können Sie die benannte Version sofort neu exportieren, wenn der Kunde die Shortlist zieht.",
      },
      {
        question: "Integriert sich MagicCV mit unserem ATS wie CV-Transformer?",
        answer:
          "MagicCV braucht keine Integration, um nützlich zu sein - Sie importieren CVs direkt als Word, PDF oder LinkedIn-Export. Wenn Ihr Workflow davon abhängt, Dokumente automatisch in ein bestimmtes ATS zu schieben, ist das aktuell ein echter Vorteil der gelisteten Integrationen von CV-Transformer; sprechen Sie Integrationsbedarf bei uns an, wenn Sie den Enterprise-Plan evaluieren.",
      },
      {
        question: "Können wir von CV-Transformer zu MagicCV migrieren?",
        answer:
          "Ja - Ihre konvertierten CVs sind normale Word- oder PDF-Dateien, und MagicCV importiert sie direkt in strukturierte Profile. Ab dann passieren Updates am Profil statt über erneute Konvertierung.",
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
    h1: "MagicCV vs CV Converter: schnelle Formatierungslösung oder kompletter CV-Workflow?",
    sub: "CV Converter macht einen kleinen Job günstig und gut: Kandidaten-CVs an Ihre Vorlage anpassen. MagicCV deckt den gesamten Beratungs-CV-Workflow ab. Der Umfang ist die ganze Entscheidung.",
    whereCompetitorWins: [
      "Radikal einfach: Vorlage hochladen, CVs hineingeben, konsistent formatierte Dokumente zurückbekommen",
      "Transparente, niedrige Pay-as-you-go-Preise mit kostenloser Testphase - minimales Commitment zum Ausprobieren",
      "Positioniert sich damit, Kandidatendaten nicht langfristig zu speichern, was manche Datenschutzgespräche vereinfacht",
      "Gut passend für volumenstarkes Recruitment und RPO-Formatierung, wo die Kosten pro Dokument die Kennzahl sind",
    ],
    whereMagicCvDiffers: [
      "Deckt den Workflow rund um das Dokument ab: dauerhafte Beraterprofile, Skills-Suche über das Team und Zuschneiden pro Angebot, nicht nur Konvertierung",
      "Die KI liest das RFP und baut jeden CV darum herum um - ein Formatierungstool kann nicht sagen, welche der 14 Projekte eines Beraters für dieses Briefing zählen",
      "Ein-Klick-Anonymisierung, Übersetzung in jede Sprache mit erhaltenem Layout und angebotsfertige CV-Pakete für EU-Angebote",
      "Chat-Editing auf jedem Entwurf: 'Kürze auf zwei Seiten und führe mit der Public-Sector-Arbeit'",
    ],
    rows: [
      { category: "Umfang", magiccv: "Profile, Suche, Zuschneiden, Pakete, Export", competitor: "Formatkonvertierung, bewusst nichts weiter" },
      { category: "Verlässliche Datenbasis", magiccv: "Strukturiertes Profil pro Berater, aktuell gehalten", competitor: "Jede Datei unabhängig konvertiert" },
      { category: "Zuschneiden auf ein Briefing", magiccv: "Die KI gewichtet Inhalte anhand des RFPs neu", competitor: "Bewusst außerhalb des Umfangs" },
      { category: "Anonymisierung / Übersetzung", magiccv: "Je ein Klick, Layout bleibt erhalten", competitor: "Nicht der Fokus" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro (200 Profile)", competitor: "Öffentlich, Pay-as-you-go, sehr niedrig pro Datei" },
      { category: "Am besten für", magiccv: "Unternehmen, die mit einer wiederkehrenden Bench anbieten", competitor: "Agenturen, die einmaligen Kandidatenstrom formatieren" },
    ],
    guidance:
      "Wenn Formatierung wirklich Ihr ganzes Problem ist - ein Strom einmaliger Kandidaten-CVs, die nur konsistent aussehen müssen - ist CV Converter günstig, einfach und schwer zu widerlegen. Wenn dieselben Berater in Angebot um Angebot auftauchen und die eigentliche Arbeit darin besteht, ihre Profile aktuell zu halten und pro Briefing zuzuschneiden, lässt ein Konverter 90% des Jobs manuell. Wählen Sie das Tool danach, ob Ihre CVs Wegwerfware oder wiederverwendbar sind.",
    faqs: [
      {
        question: "Ist CV Converter günstiger als MagicCV?",
        answer:
          "Für reine Formatierung pro Datei kann das Pay-as-you-go-Modell sehr günstig sein, und MagicCV wird es in diesem einen Job nicht schlagen. Der Pro-Plan von MagicCV für $50/Monat umfasst 200 Profile und 600 CVs plus Zuschneiden, Suche, Anonymisierung und Übersetzung - ein breiterer Umfang. Vergleichen Sie also gegen alles, was Sie heute von Hand machen, nicht nur die Formatierung.",
      },
      {
        question: "Wir sind eine Recruiting-Agentur. Was passt zu uns?",
        answer:
          "Wenn Kandidaten einmal durchlaufen und Formatierung der ganze Job ist, passt CV Converter. Wenn Sie dieselben Contractor wiederholt einreichen, Blind-CV-Prozesse fahren oder auf Rahmenverträge bieten, zahlen sich die dauerhaften Profile und die Ein-Klick-Anonymisierung von MagicCV schnell aus.",
      },
      {
        question: "Kann MagicCV unsere exakte Vorlage treffen wie ein Konverter?",
        answer:
          "Ja. Ihre Markenvorlage wird einmal eingerichtet, und jeder Export rendert pixelgenau darin, als PDF oder Word. Der Unterschied liegt davor: MagicCV kann den Inhalt zuschneiden und übersetzen, statt ihn nur ins Layout zu gießen.",
      },
      {
        question: "Speichert MagicCV unsere Daten, und wo?",
        answer:
          "Ja - dauerhafte Profile sind der Punkt: Exporte bleiben aktuell, ohne Dateien neu zu verarbeiten. Die Daten sind GDPR-by-Design mit EU-Residenz und Audit-Logs, und Enterprise-Pläne enthalten einen AVV. Wenn Ihre Richtlinie gar keine Anbieterspeicherung erlaubt, ist ein Durchlauf-Konverter die architektonisch sicherere Wahl.",
      },
      {
        question: "Können wir mit CV Converter starten und später zu MagicCV wechseln?",
        answer:
          "Problemlos - Ihre konvertierten CVs sind gewöhnliche Word- oder PDF-Dateien, und MagicCV importiert sie direkt in strukturierte Profile. Teams wechseln oft, wenn ihnen auffällt, dass dieselben CVs zur dritten Umformatierung zurückkommen.",
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
    h1: "MagicCV vs MuchSkills CV Inventory: Welches System of Record kommt zuerst?",
    sub: "MuchSkills generiert CVs aus seiner Skills-Datenbank. MagicCV baut Profile aus den CVs, die Sie schon haben. Die richtige Reihenfolge hängt davon ab, wo Ihre Daten heute liegen.",
    whereCompetitorWins: [
      "CVs generiert aus lebendigen, verifizierten Skills-Daten - wenn die MuchSkills-Datenbank Ihr System of Record ist, erben die CVs ihre Genauigkeit",
      "Starke Versionskontrolle und Audit-Trails für jeden CV - nützlich, wo Compliance prüft, wer was wann verschickt hat",
      "Verwaltet interne Mitarbeitende und externe Berater in einem Inventar",
      "Eine tiefe Skills-Taxonomie, die Zertifizierungen, Tech-Skills und Fähigkeiten feingranular abdeckt",
    ],
    whereMagicCvDiffers: [
      "Startet bei dem, was Sie haben: Importieren Sie Word-, PDF- oder LinkedIn-CVs, und die KI baut strukturierte Profile - kein Skills-Plattform-Einführungsprojekt vorab",
      "RFP-zu-CV-Zuschneiden: Die KI liest das tatsächliche Briefing und baut jeden CV darum herum um, statt nur aus Skills-Matches zusammenzusetzen",
      "Chat-Editing, Ein-Klick-Anonymisierung und Übersetzung in jede Sprache mit erhaltenem Layout - der EU-Ausschreibungs-Werkzeugkasten an einem Ort",
      "Öffentliche Self-Service-Preise: Free zum Testen, $50/Monat Pro, ohne Plattform-Commitment",
    ],
    rows: [
      { category: "Datenfundament", magiccv: "Strukturierte Profile, geparst aus Ihren bestehenden CVs", competitor: "Die MuchSkills-Skills-Datenbank" },
      { category: "Voraussetzung", magiccv: "Keine - CVs importieren und loslegen", competitor: "MuchSkills als Ihr Skills-System einführen" },
      { category: "Zuschneiden auf ein Briefing", magiccv: "Die KI liest den RFP-Text und gewichtet neu", competitor: "Stützt sich auf Skills-Daten-Matching" },
      { category: "Versionskontrolle", magiccv: "Profilhistorie und Audit-Logs", competitor: "Stark, mit Audit-Trails pro CV" },
      { category: "Anonymisierung / Übersetzung", magiccv: "Je ein Klick, Layout bleibt erhalten", competitor: "Variiert" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Typischerweise als Teil der Plattform angeboten" },
    ],
    guidance:
      "Wenn Ihre Organisation bereits MuchSkills betreibt - oder entschieden hat, ihre Talentdaten um eine verifizierte Skills-Taxonomie herum aufzubauen - ist CV Inventory die natürliche Erweiterung, und das Datenqualitäts-Argument ist real. Wenn Ihre Skills-Daten derzeit in CVs, SharePoint und den Köpfen der Leute leben, bringt MagicCV Sie noch diese Woche zu durchsuchbaren Profilen und zugeschnittenen Angebots-CVs, ohne zuerst eine Skills-Plattform aufzusetzen. Starten Sie dort, wo Ihre Daten tatsächlich sind.",
    faqs: [
      {
        question: "Brauchen wir eine Skills-Datenbank, bevor wir MagicCV nutzen können?",
        answer:
          "Nein. MagicCV baut strukturierte Profile direkt aus Ihren bestehenden CVs - Word, PDF oder LinkedIn-Exporte - und extrahiert dabei Skills, Branchen, Sprachen und Zertifizierungen in eine durchsuchbare Matrix. Die Skills-Daten sind ein Nebenprodukt des Imports, keine Voraussetzung.",
      },
      {
        question: "Ist eine verifizierte Skills-Datenbank nicht genauer als geparste CVs?",
        answer:
          "Wenn sie gepflegt wird, ja - das ist die ehrliche Stärke von MuchSkills. Der Trade-off ist die Adoption: Eine verifizierte Datenbank ist nur so genau, wie Berater sie aktuell halten. MagicCV setzt auf das Artefakt, das die Leute ohnehin pflegen (ihren CV), und macht das Aktualisieren zu einem Fünf-Minuten-Job mit KI-Unterstützung.",
      },
      {
        question: "Können MagicCV und MuchSkills koexistieren?",
        answer:
          "Ja. Einige Unternehmen nutzen MuchSkills für interne Skills-Transparenz und MagicCV für kundenseitige Angebots-CVs - exportierte CVs aus jedem System lassen sich als Word oder PDF in MagicCV importieren.",
      },
      {
        question: "Wie unterscheidet sich das Zuschneiden zwischen den beiden?",
        answer:
          "MuchSkills setzt CVs zusammen, gestützt auf seine Skills-Daten. MagicCV liest den tatsächlichen RFP-Text - den 40-seitigen Anhang eingeschlossen - und entscheidet, womit jeder CV für dieses konkrete Briefing führen sollte; das verfeinern Sie dann per Chat vor dem Export.",
      },
      {
        question: "Wie deckt MagicCV Audit- und Compliance-Anforderungen ab?",
        answer:
          "Profile behalten ihre Historie, die Plattform protokolliert Aktivitäten, und die Daten sind GDPR-by-Design mit EU-Residenz; Enterprise ergänzt SSO und einen AVV. SOC 2 ist in Arbeit. Wenn Audit-Trails pro Dokument heute eine harte Anforderung sind, gewichten Sie die Versionskontroll-Tiefe von MuchSkills in Ihrer Evaluierung.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "RFP-zu-CV-Zuschneiden", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs SprintCV Enterprise: Mittelstands-Tempo oder Enterprise-Admin-Tiefe?",
    sub: "Das Enterprise-Angebot von SprintCV legt Admin- und Team-Management auf seine CV-Engine. MagicCV setzt dasselbe Budget auf KI-Zuschneiden und Time-to-Value am selben Tag.",
    whereCompetitorWins: [
      "Enterprise-taugliches CV-Management von einem auf Beratung und Personalvermittlung fokussierten Anbieter, mit bewährtem Parsing und Vorlagen-Generierung",
      "Ausgereifte Admin- und Team-Management-Funktionen - Rollen, Aufsicht und Struktur, die größere Unternehmen erwarten",
      "Etablierte Referenzbasis im IT-Dienstleistungsmarkt der Iberischen Halbinsel",
      "Die gefühlt sicherere Wahl für einen formellen Beschaffungsprozess, der ein als Enterprise etikettiertes Produkt will",
    ],
    whereMagicCvDiffers: [
      "Die KI übernimmt das Zuschneiden, nicht nur das Parsing: Fügen Sie ein RFP ein, und jeder CV wird vor dem Rendern um dessen Anforderungen herum umgebaut",
      "Chat-Editing zum Verfeinern: Weisen Sie den Entwurf in normaler Sprache an, statt sich durch Admin-Bildschirme zu arbeiten",
      "Öffentliche Preise auf jeder Stufe unterhalb von Enterprise - Free (10 Profile), $50/Monat Pro (200 Profile) - und Self-Service-Onboarding am selben Tag",
      "Ein-Klick-Anonymisierung und Übersetzung in jede Sprache mit erhaltenem Layout, ausgerichtet auf die Anforderungen von EU-Ausschreibungen",
    ],
    rows: [
      { category: "Kern-Engine", magiccv: "Die KI liest die Ausschreibung, dann baut sie den CV um", competitor: "Parsing und Vorlagen-Generierung, Enterprise-Admin obendrauf" },
      { category: "Admin-Tiefe", magiccv: "Team-Workspaces; SSO und AVV im Enterprise-Plan", competitor: "Ausgereiftes Enterprise-Admin und Team-Management" },
      { category: "Zeit bis zum ersten CV", magiccv: "Am selben Tag, Self-Service", competitor: "Typischerweise ein Onboarding-Prozess" },
      { category: "Preise", magiccv: "Öffentlich unterhalb der Enterprise-Stufe", competitor: "Typischerweise auf Anfrage" },
      { category: "Ausschreibungs-Werkzeugkasten", magiccv: "Anonymisierung + Übersetzung eingebaut, ein Klick", competitor: "Variiert je nach Konfiguration" },
      { category: "Regionale Stärke", magiccv: "EU-weit, EU-Datenresidenz", competitor: "Am stärksten auf der Iberischen Halbinsel" },
    ],
    guidance:
      "Wenn Sie ein größeres Unternehmen sind, das Enterprise-Admin-Kontrollen von einem beratungsfokussierten CV-Anbieter will - und iberische Referenzen für Sie zählen - verdient das Enterprise-Produkt von SprintCV einen Blick. Wenn Ihre Priorität die Ergebnisqualität pro Angebot ist und Sie diese Woche live sein wollen statt nach dem Onboarding, passen die Briefing-first-KI und das Self-Service-Modell von MagicCV besser. Mittelständler nutzen die Admin-Tiefe, für die sie Enterprise-Preise zahlen, selten aus.",
    faqs: [
      {
        question: "Worin unterscheidet sich diese Seite von eurem Sprint-CV-Vergleich?",
        answer:
          "Derselbe Anbieter, das Enterprise-Angebot: mehr Admin- und Team-Management-Oberfläche auf derselben CV-Engine. Der Trade-off gegenüber MagicCV bleibt gleich - ihre Stärke ist Struktur und regionaler Track Record; die von MagicCV ist Briefing-first-KI-Zuschneiden, öffentliche Preise und Setup am selben Tag.",
      },
      {
        question: "Hat MagicCV überhaupt Enterprise-Funktionen?",
        answer:
          "Ja - der Enterprise-Plan ergänzt SSO, einen AVV, unbegrenzte Profile und Priority-Support, zusätzlich zu Audit-Logs und EU-Datenresidenz, die jeder Plan bekommt. Was MagicCV auslässt, ist der verpflichtende Enterprise-Sales-Zyklus: Pro für $50/Monat ist Self-Service und deckt Teams bis 200 Profile ab.",
      },
      {
        question: "Können wir von SprintCV zu MagicCV migrieren?",
        answer:
          "Ja. Exportieren Sie Ihre CVs als Word oder PDF, importieren Sie sie in MagicCV, und jeder wird automatisch zu einem strukturierten Profil. Es gibt kein Migrationsprojekt zu scopen.",
      },
      {
        question: "Wie lange dauert der Rollout im Vergleich zu einem Enterprise-CV-Manager?",
        answer:
          "MagicCV: CVs importieren, Markenvorlage einrichten, den ersten zugeschnittenen CV exportieren - typischerweise innerhalb eines Tages, Self-Service. Enterprise-CV-Manager fahren typischerweise zuerst Onboarding mit Konfiguration und Schulung - gerechtfertigt im großen Maßstab, langsam überall sonst.",
      },
      {
        question: "Wir bieten in mehreren EU-Ländern an. Wer beherrscht Sprachen besser?",
        answer:
          "MagicCV übersetzt jeden CV in jede Sprache und bewahrt dabei das Layout Ihrer Vorlage - ein Profil bedient Angebote in Madrid, München und Paris. Prüfen Sie die aktuelle Sprachabdeckung von SprintCV gegen die konkreten Sprachen, in denen Sie anbieten.",
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
    h1: "MagicCV vs Enhancv: Angebots-CVs sind ein anderer Job als Bewerbungslebensläufe",
    sub: "Enhancv baut Lebensläufe, mit denen Kandidaten eingestellt werden. MagicCV baut Berater-CVs, mit denen Unternehmen Aufträge gewinnen. Wenn Sie die beiden vergleichen, klären Sie zuerst, welches Dokument Sie eigentlich produzieren.",
    whereCompetitorWins: [
      "Ein wirklich exzellenter Lebenslauf-Builder: polierter Editor, eine große Vorlagenbibliothek und Ergebnisse, die Kandidaten mit Stolz verschicken",
      "Ein-Klick-Import aus LinkedIn, DOCX und PDF, mit Abgleich gegen Stellenbeschreibungen, um einen Lebenslauf auf eine Ausschreibung auszurichten",
      "ATS-freundliche Formatierung - relevant, wenn Dokumente von Recruiting-Software gescreent werden",
      "Team-Funktionen mit gemeinsamer Bibliothek und eigenem Branding - eine gute Wahl für Recruitment-, Outplacement- und Karriere-Coaching-Teams",
    ],
    whereMagicCvDiffers: [
      "Gebaut für das Unternehmen, nicht für Jobsuchende: Profile für Ihre gesamte Bench, durchsuchbar nach Skills, Branchen, Sprachen und Zertifizierungen",
      "Optimiert für das Kundenbriefing, nicht für ein ATS: Die KI liest das RFP und baut den CV jedes Beraters um dessen Anforderungen herum um",
      "Erzeugt angebotsfertige CV-Pakete - 8 Berater, eine Vorlage, ein Nachmittag - plus Ein-Klick-Blind-CVs für Ausschreibungen",
      "GDPR-by-Design mit EU-Datenresidenz, Übersetzung in jede Sprache mit erhaltenem Layout und öffentliche Preise ab $0",
    ],
    rows: [
      { category: "Wen es bedient", magiccv: "Beratungen und Dienstleister, die um Aufträge bieten", competitor: "Jobsuchende und Teams, die sie unterstützen" },
      { category: "Erzeugtes Dokument", magiccv: "Berater-CV für einen Kunden oder eine Ausschreibung", competitor: "Lebenslauf für eine Bewerbung" },
      { category: "Optimiert für", magiccv: "Das Briefing und die Bewertungskriterien des Kunden", competitor: "ATS-Parsing und Keywords der Stellenbeschreibung" },
      { category: "Team-Modell", magiccv: "Ein Profil pro Berater, unternehmensweite Suche", competitor: "Gemeinsame Bibliothek individueller Lebensläufe" },
      { category: "Ausschreibungsfunktionen", magiccv: "Blind-CVs und CV-Pakete, ein Klick", competitor: "Nicht der Anwendungsfall" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Öffentliche Abo-Pläne" },
    ],
    guidance:
      "Wenn Ihr Team Einzelpersonen zu Jobs verhilft - Recruitment, Outplacement, Karriereservices - ist Enhancv eines der besten Tools dafür, und MagicCV tritt dort gar nicht an. Wenn Ihre CVs in Angebote und Ausschreibungen mit dem Namen Ihres Unternehmens auf dem Deckblatt gehen, ist ATS-Optimierung irrelevant und Briefing-Zuschneiden alles - das ist MagicCV. Die beiden Produkte sehen sich nur so lange ähnlich, bis Sie den Leser des Dokuments benennen.",
    faqs: [
      {
        question: "Kann Enhancv CVs für Beratungsangebote erstellen?",
        answer:
          "Es kann polierte, gebrandete Dokumente erzeugen, und manche Teams zweckentfremden es dafür. Wofür es nicht gebaut ist, ist der umgebende Workflow: eine durchsuchbare Bench, RFP-getriebenes Zuschneiden, Blind-CVs für Ausschreibungen und CV-Pakete für mehrere Berater. Das ist der Kern von MagicCV, keine Anpassung.",
      },
      {
        question: "Brauchen Beratungs-CVs ATS-Optimierung?",
        answer:
          "Fast nie. Angebots-CVs werden von Kunden-Evaluatoren und Vergabegremien gelesen, nicht von Lebenslauf-Screening-Software. Was die Punktzahl bewegt, ist die Relevanz zum Briefing - genau das automatisiert das RFP-zu-CV-Zuschneiden von MagicCV.",
      },
      {
        question: "Können wir Lebensläufe importieren, die unsere Berater in Enhancv gebaut haben?",
        answer:
          "Ja. Exportieren Sie sie als PDF oder DOCX und importieren Sie sie in MagicCV - die KI parst jeden in ein strukturiertes Profil. LinkedIn-Exporte funktionieren genauso; das Onboarding der Bench hängt an keinem bestimmten Quellformat.",
      },
      {
        question: "Unser Recruiting-Arm nutzt Enhancv. Sollte die Beratungsseite es auch nutzen?",
        answer:
          "Nur wenn die Bedürfnisse der Beratungsseite bei gut aussehenden Dokumenten enden. Sobald Sie die Bench nach Skills durchsuchen, für eine Rahmenvertrags-Ausschreibung anonymisieren oder 10 CVs bis Freitag auf ein RFP zuschneiden müssen, sind Sie außerhalb dessen, wofür ein Lebenslauf-Builder gebaut ist.",
      },
      {
        question: "Wie vergleichen sich die Preise für ein Team?",
        answer:
          "Der Pro-Plan von MagicCV kostet $50/Monat für 200 Profile und 600 CVs, mit einem Free-Plan (10 Profile, 30 CVs) zum Testen. Enhancv veröffentlicht eigene Abo-Preise pro Nutzer - direkt vergleichbare Zahlen, nur bepreist für unterschiedliche Jobs.",
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
    h1: "MagicCV vs VisualCV: Team-Lebenslauf-Builder oder Angebots-CV-Workflow?",
    sub: "VisualCV gibt Teams konsistente, gehostete Lebensläufe. MagicCV verwandelt eine Berater-Bench in zugeschnittene, markenkonforme CVs pro Angebot. An der Oberfläche ähnlich, darunter verschieden.",
    whereCompetitorWins: [
      "Ein lange etablierter Lebenslauf- und CV-Builder mit einem Business-Tarif für Teams",
      "Polierte Vorlagen plus gehostete Online-CVs mit Ansichts-Analytics - nützlich, wenn Sie CVs als Links teilen und wissen wollen, dass sie geöffnet wurden",
      "Ein einfacher Weg, die Lebensläufe eines Teams visuell konsistent unter einer Marke zu halten",
      "Zugängliche Preise und geringer Einrichtungsaufwand für das, was es tut",
    ],
    whereMagicCvDiffers: [
      "Gebaut um das Angebot, nicht um das einzelne Dokument: Fügen Sie ein RFP ein, und die KI baut den CV jedes Beraters darum herum um und stellt dann das Paket zusammen",
      "Strukturierte Profile als verbindliche Datenbasis - durchsuchbar nach Skills, Branchen, Sprachen, Zertifizierungen - statt eines Ordners gestalteter Lebensläufe",
      "Ein-Klick-Anonymisierung für blinde Ausschreibungseinreichungen und Übersetzung in jede Sprache mit erhaltenem Layout",
      "GDPR-by-Design mit EU-Datenresidenz und Audit-Logs; SSO und AVV im Enterprise-Plan",
    ],
    rows: [
      { category: "Primärer Job", magiccv: "Zugeschnittene Berater-CVs für Angebote und Kunden", competitor: "Konsistente Lebensläufe und gehostete Online-CVs" },
      { category: "Zuschneiden auf ein Briefing", magiccv: "Die KI liest das RFP und gewichtet jeden CV neu", competitor: "Manuelles Editieren innerhalb von Vorlagen" },
      { category: "Team-Suche", magiccv: "Kompetenzmatrix über die ganze Bench", competitor: "Nicht der Fokus" },
      { category: "Sharing-Modell", magiccv: "Pixelgenaue PDF-/Word-Exporte", competitor: "Gehostete Links mit Ansichts-Analytics" },
      { category: "Ausschreibungs-Werkzeugkasten", magiccv: "Blind-CVs und CV-Pakete, ein Klick", competitor: "Nicht der Anwendungsfall" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Öffentliche Pläne, Business-Tarif für Teams" },
    ],
    guidance:
      "Wenn Sie einen Satz gut aussehender, konsistenter Lebensläufe brauchen - und gehostete CV-Links mit View-Tracking zu Ihrem Vertriebsprozess passen - erledigt VisualCV diesen Job gut und mit wenig Aufwand. Wenn Ihre CVs Munition für Angebote und Ausschreibungen sind, besteht die Arbeit aus Zuschneiden und Zusammenstellen unter Termindruck - und das ist der Workflow, den MagicCV Ende zu Ende automatisiert. Benennen Sie Ihre tatsächliche Dienstagnachmittag-Aufgabe und wählen Sie danach.",
    faqs: [
      {
        question: "Ist VisualCV für Beratungsangebote geeignet?",
        answer:
          "Es erzeugt konsistente, gebrandete Dokumente, was die Oberflächenanforderung abdeckt. Was fehlt, ist der Angebotsworkflow darunter: RFP-getriebenes Zuschneiden, eine durchsuchbare Kompetenzmatrix, Blind-CVs und Pakete mit mehreren Beratern. Wenn das für Sie wöchentliche Aufgaben sind, bleibt bei einem universellen Builder alles davon manuell.",
      },
      {
        question: "Können wir die VisualCV-Lebensläufe unseres Teams in MagicCV migrieren?",
        answer:
          "Ja. Exportieren Sie sie als PDF oder Word und importieren Sie sie in MagicCV - jeder wird zu einem strukturierten, durchsuchbaren Profil. Ein 30-Personen-Team ist typischerweise innerhalb eines Tages importiert und exportiert gebrandete CVs.",
      },
      {
        question: "Bietet MagicCV gehostete CV-Links und Ansichts-Analytics wie VisualCV?",
        answer:
          "Nein - MagicCV erzeugt pixelgenaue PDF- und Word-Exporte, weil Angebote und Ausschreibungsportale genau das verlangen. Wenn getrackte gehostete Links zentral dafür sind, wie Sie CVs teilen, ist das ein echter VisualCV-Vorteil, den Sie abwägen sollten.",
      },
      {
        question: "Wie halten die beiden CVs über ein Team hinweg aktuell?",
        answer:
          "In einem Lebenslauf-Builder wird jedes Dokument einzeln bearbeitet, und die Drift schleicht sich ein. In MagicCV hat jede Person ein Profil; Updates dauern Minuten, weil die KI die Eingabe strukturiert, und jeder Export überall zieht aus der aktuellen Version.",
      },
      {
        question: "Was ist mit der DSGVO - wir sind ein EU-Unternehmen?",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, Audit-Logs und einem Profil pro Person, was Auskunfts- und Löschanfragen unkompliziert macht; Enterprise ergänzt einen AVV und SSO. Prüfen Sie die aktuelle Datenresidenz-Dokumentation von VisualCV gegen Ihre Anforderungen.",
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
    h1: "MagicCV vs Rezi: ATS-Lebensläufe und Angebots-CVs sind verschiedene Sportarten",
    sub: "Rezi ist ein KI-Lebenslauf-Builder, getrimmt auf ATS-Screening, oft im White-Label-Einsatz. MagicCV ist getrimmt auf Kundenbriefings und Ausschreibungen. Dasselbe 'KI-CV'-Etikett, verschiedene Spiele.",
    whereCompetitorWins: [
      "Ein ausgereifter KI-Lebenslauf-Builder mit starkem ATS-Keyword-Targeting - die richtige Optimierung, wenn Software das Dokument screent",
      "White-Label-Deployment - deshalb bauen Hochschulen, Career Center und Bewerbungsservices darauf auf",
      "Wirbt öffentlich mit SOC 2 Type II und SSO, mit einer großen etablierten Nutzerbasis",
      "Review- und Feedback-Workflows für Coaching-Szenarien, in denen ein Berater am Lebenslauf eines Kandidaten iteriert",
    ],
    whereMagicCvDiffers: [
      "Optimiert für einen menschlichen Evaluator, der gegen ein Briefing liest: Die KI parst das RFP und baut den CV jedes Beraters um dessen tatsächliche Anforderungen herum um",
      "Verwaltet die Bench des Unternehmens, nicht individuelle Jobsuchen: strukturierte Profile, Skills-Suche und CV-Pakete pro Angebot",
      "EU-Ausschreibungs-Werkzeugkasten eingebaut: Ein-Klick-Blind-CVs, Übersetzung in jede Sprache mit erhaltenem Layout, EU-Datenresidenz, GDPR-by-Design",
      "Einfache Team-Preise: Free zum Testen, $50/Monat Pro für 200 Profile - kein White-Label- oder Institutionsvertrag nötig",
    ],
    rows: [
      { category: "Wer das Ergebnis liest", magiccv: "Kunden-Evaluatoren und Vergabegremien", competitor: "ATS-Software, dann Recruiter" },
      { category: "Optimierungsziel", magiccv: "Die Anforderungen und Wertungskriterien des Briefings", competitor: "ATS-Keywords aus der Stellenbeschreibung" },
      { category: "Typischer Käufer", magiccv: "Beratungen, IT-Dienstleister, Professional Services", competitor: "Hochschulen, Career Center, Bewerbungsservices" },
      { category: "Deployment", magiccv: "Team-Workspace, Self-Service", competitor: "Direkt oder White-Label-Programme" },
      { category: "Ausschreibungsfunktionen", magiccv: "Blind-CVs, CV-Pakete, mehrsprachiger Export", competitor: "Nicht der Anwendungsfall" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Öffentliche Stufen pro Nutzer" },
    ],
    guidance:
      "Wenn Sie einen Lebenslauf-Builder für eine Population von Jobsuchenden bereitstellen - Studierende, Alumni, Outplacement-Klienten - ist Rezi eine starke, zertifizierte Wahl, und MagicCV spielt dort nicht mit. Wenn Sie ein Unternehmen sind, dessen CVs in Angebote mit Ihrem Logo auf dem Deckblatt gehen, sind ATS-Keywords die völlig falsche Optimierung; Sie brauchen Briefing-Zuschneiden, Blind-CVs und Paket-Zusammenstellung. Wählen Sie danach, wer das Dokument liest - nicht danach, welches Tool 'KI' sagt.",
    faqs: [
      {
        question: "Optimiert MagicCV CVs für ATS wie Rezi?",
        answer:
          "Nein, bewusst nicht. Angebots-CVs werden von Kunden-Evaluatoren gegen ein Briefing gelesen, nicht von Recruiting-Software geparst. MagicCV optimiert für diesen Leser: Die KI liest das RFP und gewichtet jeden CV um dessen Anforderungen herum neu.",
      },
      {
        question: "Rezi wirbt mit SOC 2 Type II. Wo steht MagicCV bei Compliance?",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, Audit-Logs sowie SSO und einem AVV im Enterprise-Plan. SOC 2 ist in Arbeit, noch nicht abgeschlossen - wenn ein fertiger SOC-2-Bericht heute ein hartes Kriterium ist, rechnen Sie das ehrlich in Ihren Zeitplan ein.",
      },
      {
        question: "Können die Rezi-Lebensläufe unserer Berater in MagicCV importiert werden?",
        answer:
          "Ja. Exportieren Sie sie als PDF oder DOCX und importieren Sie sie in MagicCV - jeder wird zu einem strukturierten Profil, durchsuchbar nach Skills, Branchen, Sprachen und Zertifizierungen.",
      },
      {
        question: "Bietet MagicCV White-Label-Deployment?",
        answer:
          "Nein. MagicCV ist ein Team-Workspace für Unternehmen, die ihre eigene Bench verwalten - keine Plattform zum Rebranden für Dritte. Wenn White-Label die Anforderung ist - Karriereservices, Bewerbungs-Businesses - ist Rezi genau dafür gebaut.",
      },
      {
        question: "Wir sind ein IT-Dienstleister, kein Career Center. Warum stand Rezi auf unserer Shortlist?",
        answer:
          "Meist weil Suchen nach 'KI-Lebenslauf-Builder' es zuerst ausspielen. Die Evaluierungsfrage, die die Kategorien trennt: Kann es einen 40-seitigen RFP-Anhang lesen und 8 Berater-CVs bis Donnerstag darum herum umbauen? Das ist der Job, für den MagicCV gebaut ist.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Zuschneiden", href: "/features/rfp-to-cv" },
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
    h1: "MagicCV vs Neobrain: HR-Skills-Plattform oder angebotsfertige CVs?",
    sub: "Neobrain kartiert Skills für die interne HR-Strategie. MagicCV verwandelt Beratererfahrung in kundenseitige CVs. Sie teilen das Wort 'Skills' und fast nichts sonst.",
    whereCompetitorWins: [
      "Skills-basiertes Enterprise-Talentmanagement: Skills-Mapping, interne Mobilität und strategische Workforce-Planung im Organisationsmaßstab",
      "Module für Karriereentwicklung und Performance mit HRIS-Integrationen, gebaut für HR-Teams, die Skills-Transformationen fahren",
      "Das richtige Tool, wenn die Frage lautet 'Welche Skills hat und braucht unsere Belegschaft?' statt 'Welcher CV geht in dieses Angebot?'",
      "Etabliert bei großen Organisationen, insbesondere in Frankreich",
    ],
    whereMagicCvDiffers: [
      "Erzeugt das Artefakt, das Kunden tatsächlich sehen: markenkonforme Berater-CVs und Angebotspakete, zugeschnitten pro RFP von KI, die das Briefing liest",
      "Käufer und Zeitrahmen passen zur Angebotsarbeit: Self-Service, öffentliche Preise ab $0, erster zugeschnittener CV am selben Tag - kein HR-Transformationsprogramm nötig",
      "Ein-Klick-Anonymisierung und Übersetzung in jede Sprache mit erhaltenem Layout, für EU-Ausschreibungen und Rahmenverträge",
      "Skills-Suche auf Arbeitsebene inklusive: jeden Berater mit SAP, Französisch und Utilities-Erfahrung in Sekunden finden",
    ],
    rows: [
      { category: "Kategorie", magiccv: "Kundenseitiger CV- und Angebotsworkflow", competitor: "Interne Skills- und Talentmanagement-Plattform" },
      { category: "Primärer Käufer", magiccv: "Bid Manager, Ops-Leads, Resourcing-Teams", competitor: "CHROs und HR-Transformationsverantwortliche" },
      { category: "Kern-Output", magiccv: "Zugeschnittene, markenkonforme CVs und CV-Pakete", competitor: "Skills-Maps, Mobilitätspfade, Workforce-Pläne" },
      { category: "Time-to-Value", magiccv: "Am selben Tag, Self-Service", competitor: "Typischerweise ein Enterprise-Programm mit phasenweisem Rollout" },
      { category: "Rolle der Skills-Daten", magiccv: "Aus CVs extrahiert, um Suche und Zuschneiden zu speisen", competitor: "Das Produkt selbst - verwaltet als strategische Daten" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Enterprise, auf Anfrage" },
    ],
    guidance:
      "Diese Tools beantworten unterschiedliche Fragen. Wenn Ihre Organisation Workforce-Skills kartieren, Reskilling planen und interne Mobilität treiben muss, ist Neobrain für diese Größenordnung von HR-Problem gebaut. Wenn Ihr Bid-Team bis Donnerstag ausschreibungsfertige Berater-CVs braucht, wird keine Skills-Plattform sie erzeugen - das ist der Job von MagicCV. Größere Unternehmen betreiben manchmal beides; sie überschneiden sich nicht genug, um zu kollidieren.",
    faqs: [
      {
        question: "Ist Neobrain überhaupt ein Wettbewerber von MagicCV?",
        answer:
          "Nur an den Rändern. Neobrain ist eine interne Skills- und Talent-Plattform für HR; MagicCV erzeugt kundenseitige CVs für Angebote. Wenn beide auf Ihrer Shortlist gelandet sind, hat die Evaluierung vermutlich zwei verschiedene Projekte vermischt.",
      },
      {
        question: "Macht MagicCV nicht auch Skills-Management?",
        answer:
          "Auf Arbeitsebene, ja: Der CV-Import baut eine Kompetenzmatrix, die Sie nach Skill, Branche, Sprache und Zertifizierung durchsuchen können. Was es nicht macht, ist strategische Workforce-Planung, Mobilitätsprogramme oder Skills-Gap-Analytik - das ist tatsächlich Neobrains Territorium.",
      },
      {
        question: "Könnten wir mit Neobrains Daten Angebots-CVs bauen?",
        answer:
          "Skills-Plattformen beschreiben Menschen; sie erzeugen typischerweise keine ausschreibungsfertigen Dokumente in Ihrer Vorlage, anonymisiert und übersetzt. Unternehmen mit beiden Bedürfnissen exportieren CVs und importieren sie in MagicCV - Word- und PDF-Import heißt: kein Integrationsprojekt.",
      },
      {
        question: "Was liefert schneller Wert?",
        answer:
          "Völlig verschiedene Größenordnungen. MagicCV ist Self-Service: CVs importiert und der erste zugeschnittene Export am selben Tag, $50/Monat auf der Pro-Stufe. Eine Enterprise-Skills-Plattform ist typischerweise ein Programm - Monate an Rollout mit HRIS-Integration - weil sie ein organisationsweites Problem löst.",
      },
      {
        question: "Wir sind Mittelstand. Brauchen wir überhaupt eines von beiden?",
        answer:
          "Wenn Angebots-CVs der Schmerz sind, löst MagicCV das zu Mittelstandspreis und -aufwand. Eine vollständige Skills-Transformationsplattform verdient ihre Kosten meist erst bei Enterprise-Kopfzahlen; darunter deckt die Kompetenzmatrix, die MagicCV aus Ihren CVs baut, oft ab, was mittelständische Teams tatsächlich nutzen.",
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
    h1: "MagicCV vs TechWolf: Skills-Infrastruktur oder CVs, die Sie verschicken können?",
    sub: "TechWolf leitet Skills-Daten für riesige Enterprises ab. MagicCV erzeugt die zugeschnittenen CVs, mit denen Ihr Angebot rausgeht. Verschiedene Ebenen des Stacks, selten ein echtes Entweder-oder.",
    whereCompetitorWins: [
      "Skills-Intelligence-Infrastruktur, die Skills automatisch aus Arbeitssignalen ableitet, statt sich auf selbst gemeldete Daten zu verlassen",
      "Integriert sich mit den großen HCM-Systemen wie Workday und SAP SuccessFactors, gebaut für den Betrieb in sehr großem Enterprise-Maßstab",
      "Die stärkste Option, wenn das Ziel kontinuierliche, automatisierte Skills-Daten über eine Belegschaft von Zehntausenden ist",
      "Ein Infrastruktur-Play: Andere HR-Systeme werden schlauer, weil TechWolf sie speist",
    ],
    whereMagicCvDiffers: [
      "Lebt auf der Output-Ebene: verwandelt Beraterprofile in kundenfertige, markenkonforme CVs, zugeschnitten pro RFP von KI, die das Briefing liest",
      "Dimensioniert für den Mittelstand: Self-Service-Setup am selben Tag, öffentliche Preise ab $0 mit Pro für $50/Monat",
      "Liefert den Bid-Team-Werkzeugkasten - Chat-Editing, Ein-Klick-Blind-CVs, Übersetzung mit erhaltenem Layout, Angebots-CV-Pakete",
      "Braucht keine HCM-Integration zum Start: Importieren Sie Word-, PDF- oder LinkedIn-CVs, und die Profile bauen sich selbst",
    ],
    rows: [
      { category: "Ebene", magiccv: "Output: Dokumente, die Kunden sehen", competitor: "Infrastruktur: Skills-Daten, die HR-Systeme speisen" },
      { category: "Kern-Output", magiccv: "Zugeschnittene, markenkonforme CVs und Angebotspakete", competitor: "Kontinuierlich abgeleitete Skills-Profile in HCM-Systemen" },
      { category: "Typischer Kunde", magiccv: "Beratungen und Dienstleister, 10-250 Personen", competitor: "Sehr große Enterprises, oft 10.000+ Mitarbeitende" },
      { category: "Setup", magiccv: "Self-Service, CVs importieren, Ergebnis am selben Tag", competitor: "Enterprise-Integrationsprojekt mit HCM-Systemen" },
      { category: "Käufer", magiccv: "Bid-, Ops- und Resourcing-Leads", competitor: "Enterprise-HR- und IT-Leadership" },
      { category: "Preise", magiccv: "Öffentlich: Free, $50/Monat Pro", competitor: "Enterprise, auf Anfrage" },
    ],
    guidance:
      "Wenn Sie eine Enterprise-HR-Führungskraft sind, die vertrauenswürdige, kontinuierlich aktualisierte Skills-Daten braucht, die über 50.000 Mitarbeitende in Workday fließen, ist TechWolf genau dafür gebaut - und MagicCV nicht. Wenn Sie eine Beratung sind, die bis Donnerstag 8 zugeschnittene, anonymisierte CVs in der Sprache des Kunden braucht, wird Skills-Infrastruktur sie nicht erzeugen - MagicCV schon. Die meisten Leser dieser Seite brauchen das Dokument, nicht die Datenschicht.",
    faqs: [
      {
        question: "Leitet MagicCV Skills aus Arbeitsaktivität ab wie TechWolf?",
        answer:
          "Nein - das ist TechWolfs Spezialität und ein wirklich schweres Problem im Enterprise-Maßstab. MagicCV extrahiert Skills aus den CVs, die Sie importieren - eine gute Passung im Mittelstand, wo die Bench aus Hunderten besteht, nicht Zehntausenden.",
      },
      {
        question: "Könnten TechWolfs Skills-Daten unsere Angebots-CVs generieren?",
        answer:
          "TechWolf produziert Skills-Daten für HR-Systeme, keine kundenseitigen Dokumente; Sie bräuchten weiterhin etwas, das den CV schreibt, brandet, anonymisiert und übersetzt. Diese Output-Ebene ist das gesamte Produkt von MagicCV.",
      },
      {
        question: "Wir sind 80 Berater. Ist TechWolf für uns überhaupt relevant?",
        answer:
          "Vermutlich nicht - sein Modell ist um Large-Enterprise-HCM-Integration und Belegschaftsgröße gebaut. Bei 80 Personen liefert der Ansatz von MagicCV - die vorhandenen CVs in durchsuchbare Profile parsen - den praktischen Nutzen von Skills-Transparenz ohne Infrastrukturprojekt.",
      },
      {
        question: "Könnte ein großes Unternehmen beide nutzen?",
        answer:
          "Ja, auf verschiedenen Ebenen: TechWolf hält die Enterprise-Skills-Daten im HCM aktuell, MagicCV erzeugt zugeschnittene Angebots-CVs für den Beratungsarm. MagicCV importiert Word- und PDF-CVs direkt - nichts am Parallelbetrieb erfordert Integrationsarbeit.",
      },
      {
        question: "Was kostet MagicCV im Vergleich zu einer Enterprise-Skills-Plattform?",
        answer:
          "MagicCV veröffentlicht seine Preise: Free (10 Profile, 30 CVs), $50/Monat Pro (200 Profile, 600 CVs), individuelles Enterprise mit SSO und AVV. Enterprise-Skills-Infrastruktur ist eine ganz andere Budgetkategorie - typischerweise ein sechsstelliges, angebotsbasiertes Engagement, dimensioniert nach Belegschaftsgröße.",
      },
    ],
    related: [
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "RFP-zu-CV-Zuschneiden", href: "/features/rfp-to-cv" },
      { label: "Vergleichsübersicht", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - ehrlicher Vergleich",
      description: "Wie sich MagicCV und TechWolf vergleichen: kundenfertige Angebots-CVs vs Enterprise Skills Intelligence.",
      keywords: ["TechWolf Alternative", "TechWolf vs MagicCV"],
    },
  },
];
