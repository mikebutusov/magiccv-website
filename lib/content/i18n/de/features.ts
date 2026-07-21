import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "RFP-zu-CV-Reasoning",
    h1: "Das RFP kommt Freitagnachmittag. Montagfrüh sind Ihre CVs darauf zugeschnitten.",
    sub: "MagicCV liest die Ausschreibung, extrahiert die Erfolgskriterien und arbeitet den CV jedes Beraters darauf um - gebaut für Bid-Teams, die 10+ CVs pro Einreichung anpassen.",
    whatItDoesBody:
      "Jeder Bid Manager kennt den Ablauf. Das RFP kommt mit einem 40-seitigen Anhang, die Bewertungskriterien stecken in Abschnitt 7, und jemand muss ein Dutzend Berater-CVs um Anforderungen herum umbauen, für die diese CVs nie geschrieben wurden. Also öffnen Sie final_v3_JS_edit.docx, verschieben Bullet Points von Hand und hoffen, die Pflichtzertifizierung auf Seite 23 nicht übersehen zu haben. Multiplizieren Sie das mit 12 CVs und einer Frist am Donnerstag - und das Zuschneiden ist die Aufgabe, die die Woche auffrisst.\n\nMagicCV beginnt bei der Ausschreibung statt bei der Vorlage. Laden Sie das RFP hoch - das vollständige Dokument, die Kriterienübersicht oder eine kurze Zusammenfassung - und es extrahiert geforderte Skills, Zertifizierungen und Bewertungskriterien. Danach schreibt es den CV jedes ausgewählten Beraters aus dessen strukturiertem Profil neu: Projekte und Erfahrung, die die Ausschreibung beantworten, rücken nach vorn, Irrelevantes wird gekürzt. Jede Aussage ist auf einen Fakt im Quellprofil rückführbar; nichts wird erfunden, damit es passt. Sie prüfen, passen alles per Chat-Editing an und exportieren auf Ihrer Vorlage.",
    benefits: [
      {
        title: "Die Anforderungen liegen vor, bevor Sie das Deckblatt zu Ende gelesen haben",
        body: "Laden Sie das RFP hoch und MagicCV zieht geforderte Skills, Pflichtzertifizierungen und Bewertungskriterien heraus - dieselbe Liste, die ein erfahrener Bid Manager von Hand aufbaut, nur ohne den Textmarker-Durchgang durch den Anhang.",
        screenshotAlt: "Analyse-Panel mit 9 extrahierten Anforderungen und 3 Bewertungskriterien aus einem hochgeladenen 40-seitigen RFP-PDF",
      },
      {
        title: "Zwölf zugeschnittene CVs aus einer Ausschreibung, nicht zwölf Editier-Sitzungen",
        body: "Wählen Sie die Berater des Angebots aus und MagicCV arbeitet jeden CV gegen die extrahierten Anforderungen um - Projekte neu geordnet, Schwerpunkte angepasst, irrelevante Details gestrichen. Aus einem Abend pro CV wird ein Prüfdurchgang pro CV.",
        screenshotAlt: "Batch-Ansicht von 12 Berater-CVs, gegen ein RFP neu generiert, jeder zur Prüfung markiert",
      },
      {
        title: "Jeder Satz rückführbar, nichts erfunden",
        body: "Generierte CVs gewichten und ordnen ausschließlich Erfahrung neu, die bereits im Profil des Beraters steht. Jede Aussage verlinkt auf ihre Quelle - Sie können jede Zeile vor einem Bewertungsgremium verteidigen.",
        screenshotAlt: "Generierter CV mit hervorgehobener Aussage und dem zugehörigen Quelleintrag im Beraterprofil",
      },
      {
        title: "Ein Mensch in der Schleife, wann immer Sie einen wollen",
        body: "Aktivieren Sie den konservativen Do-not-generate-Modus und MagicCV markiert die relevante Erfahrung zur Prüfung, statt den CV direkt zu schreiben. Oder Sie generieren zuerst und schärfen Formulierungen per Chat nach, bevor irgendetwas das Haus verlässt.",
        screenshotAlt: "Umschalter für den konservativen Modus mit markierten Erfahrungsvorschlägen, die auf Freigabe warten",
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
          "Nein. Das RFP-zu-CV-Reasoning gewichtet und ordnet ausschließlich echte Erfahrung aus dem Quellprofil des Beraters neu. Jede Aussage in einem generierten CV ist auf dieses Profil rückführbar - steht ein Projekt nicht im Profil, taucht es auch nicht im CV auf.",
      },
      {
        question: "Was lade ich hoch - das vollständige RFP oder eine Zusammenfassung?",
        answer:
          "Was Sie haben. Ein vollständiges RFP mit Anhängen, eine Übersicht der Bewertungskriterien oder drei Absätze aus der E-Mail des Kunden funktionieren alle. MagicCV extrahiert die Anforderungen aus dem Dokument, das Sie ihm geben; mehr Detail bedeutet schlicht eine schärfere Passung.",
      },
      {
        question: "Wie lange dauert das Zuschneiden eines kompletten Team-Pakets für ein Angebot?",
        answer:
          "Die Extraktion läuft in Minuten, und jeder CV wird auf Abruf aus dem Beraterprofil neu generiert. Bei einer typischen Einreichung mit 10-12 Personen verschiebt sich die Arbeit von einem Tag manuellen Editierens zu einem Prüfdurchgang - jeden CV lesen und wo nötig Formulierungen per Chat anpassen.",
      },
      {
        question: "Kann jemand das Ergebnis prüfen, bevor es an den Kunden geht?",
        answer:
          "Ja, und wir empfehlen es. Passen Sie jeden Abschnitt per Chat-Editing an, oder aktivieren Sie den konservativen Do-not-generate-Modus, damit MagicCV relevante Erfahrung zur Freigabe vorlegt, statt den CV automatisch zu schreiben. Sie entscheiden, wie viel Autonomie die KI bekommt.",
      },
      {
        question: "Kommen zugeschnittene CVs in unserer Vorlage heraus?",
        answer:
          "Ja. Das Zuschneiden ändert den Inhalt; Ihre Markenvorlage steuert die Darstellung. Jeder generierte CV exportiert als pixelgenau konsistentes PDF- oder Word-Dokument in Ihrem Hausstil - oder in einer kundenspezifischen Vorlage, wenn die Ausschreibung eine verlangt.",
      },
      {
        question: "Worin unterscheidet sich das davon, CV und RFP in ChatGPT einzufügen?",
        answer:
          "Ein allgemeiner Chatbot kennt Ihr Team nicht und hat keine Leitplanken - er erfindet bereitwillig eine Zertifizierung, damit sie zur Ausschreibung passt. MagicCV arbeitet aus strukturierten Profilen, hält jede Aussage auf ihre Quelle rückführbar, wendet beim Export Ihre Vorlage an - und erledigt das für 12 Berater auf einmal statt Copy-Paste für jeden Einzelnen.",
      },
      {
        question: "Was passiert mit den RFPs und CV-Daten, die wir hochladen?",
        answer:
          "MagicCV ist GDPR-by-Design gebaut, mit EU-Datenresidenz; Enterprise-Pläne enthalten einen AVV und Audit-Logs. Ihre Ausschreibungen und Profile bleiben Ihre Daten. Das Trust Center beschreibt Datenverarbeitung, Aufbewahrung und Residenz im Detail.",
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
    h1: "Nie wieder einen CV verschicken, der nicht dem Corporate Design entspricht.",
    sub: "Legen Sie Ihre Vorlage einmal fest, und jeder Berater-CV exportiert als pixelgenau konsistentes PDF- oder Word-Dokument - keine Neuformatierung mehr am Donnerstagabend vor der Einreichung.",
    whatItDoesBody:
      "Fragen Sie einen Proposal Manager, wie das CV-Paket vor der letzten Frist aussah: drei Berater noch auf der Vorlage von 2019, ein Partner mit einer persönlichen Version samt eigener Schriften, und der CV eines Contractors in Calibri, obwohl der Brand Guide etwas anderes vorgibt. Das zu beheben heißt, 12 Dokumente in der Nacht vor der Einreichung von Hand neu zu formatieren - und der Kunde entdeckt trotzdem die eine Seite, auf der das Logo 5 mm zu tief sitzt.\n\nMit MagicCV ist die Darstellung vom Inhalt getrennt. Sie definieren die Vorlage einmal - Schriften, Farben, Logo-Platzierung, Abschnittslayout - und jeder aus einem Beraterprofil generierte CV übernimmt sie automatisch. Exporte kommen als einreichungsfertige PDF- oder Word-Dateien heraus, pixelgenau identisch über das gesamte Paket. Wenn ein Kunde oder eine öffentliche Ausschreibung ein eigenes Format vorschreibt, wechseln Sie für dieses Angebot die Vorlage, ohne die zugrunde liegenden Profildaten anzufassen - und danach wieder zurück.",
    benefits: [
      {
        title: "Eine Vorlage, null Abweichung",
        body: "Definieren Sie die visuelle Identität Ihres Unternehmens einmal, und jeder CV übernimmt sie beim Export. Die persönliche Version des Partners, das Layout von 2019, der Contractor-CV in der falschen Schrift - alle ersetzt durch eine einzige verbindliche Formatquelle.",
        screenshotAlt: "Markenvorlagen-Editor mit Schrift-, Farb- und Logo-Einstellungen, angewendet auf eine Live-CV-Vorschau",
      },
      {
        title: "Kunden- und Ausschreibungsformate, ohne etwas neu aufzubauen",
        body: "Behalten Sie Ihren Hausstil als Standard und legen Sie kundenspezifische oder ausschreibungsvorgeschriebene Vorlagen daneben an. Ein 12-Personen-Paket für einen behördlichen Rahmenvertrag umzuformatieren wird zu einem Vorlagenwechsel, nicht zu einer Woche Copy-Paste.",
        screenshotAlt: "Vorlagenauswahl mit Hausstil-Vorlage neben einem kundenvorgeschriebenen Ausschreibungsformat für denselben Berater",
      },
      {
        title: "Einreichungsfertiges PDF und Word, aus derselben Quelle",
        body: "Exportieren Sie jeden CV oder ein komplettes Team-Paket als PDF oder DOCX. Beide stammen aus demselben Vorlagensystem - die Word-Datei, die ein Kunde bearbeiten möchte, entspricht exakt dem PDF, das Sie eingereicht haben.",
        screenshotAlt: "Export-Dialog mit PDF- und Word-Optionen für ein Angebotspaket mit 8 Beratern",
      },
      {
        title: "Einmal rebranden, jeden CV aktualisieren",
        body: "Der Inhalt lebt in Profilen, die Darstellung in der Vorlage. Ändern Sie nach einem Rebranding Logo oder Farbpalette, und jeder künftige Export - über 200 Profile hinweg - übernimmt es sofort, ohne dass Sie irgendetwas einsammeln müssen.",
        screenshotAlt: "Aktualisierte Markenfarben, die sich über ein Raster von Berater-CV-Vorschauen ausbreiten",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Können wir unsere bestehende Word-Vorlage behalten?",
        answer:
          "Ja - bilden Sie Ihr aktuelles Layout im Vorlagensystem von MagicCV nach, inklusive Schriften, Farben, Logo-Platzierung und Abschnittsreihenfolge. Von da an exportiert jeder CV automatisch in diesem Format, statt davon abzuhängen, wer das Dokument zuletzt formatiert hat.",
      },
      {
        question: "Können wir für einen bestimmten Kunden oder eine Ausschreibung eine andere Vorlage verwenden?",
        answer:
          "Ja. Ihr Hausstil bleibt der Standard, und Sie legen kunden- oder ausschreibungsspezifische Vorlagen daneben an. Ein komplettes CV-Paket auf ein vorgeschriebenes Format umzustellen ist eine Vorlagenauswahl, keine manuelle Überarbeitung - die Profildaten darunter ändern sich nie.",
      },
      {
        question: "Welche Exportformate werden unterstützt?",
        answer:
          "PDF und Word (DOCX), beide aus demselben Vorlagensystem generiert. Die Word-Version entspricht dem PDF - Sie können das eine einreichen und das andere einem Kunden geben, der unbedingt selbst editieren will.",
      },
      {
        question: "Können Berater die Formatierung kaputt machen, wenn sie ihren CV aktualisieren?",
        answer:
          "Nein. Berater aktualisieren den Inhalt ihres Profils - Projekte, Skills, Zertifizierungen - während die Vorlage die Darstellung steuert. Es gibt kein Dokument, das sie umformatieren könnten; das Paket bleibt konsistent, egal wer was bearbeitet hat.",
      },
      {
        question: "Was passiert bei einem Rebranding?",
        answer:
          "Aktualisieren Sie die Vorlage einmal - neues Logo, neue Farben, neue Schriften - und jeder ab diesem Zeitpunkt exportierte CV nutzt die neue Identität. Sie sparen sich die übliche Nacharbeit, monatelang Alt-Vorlagen-CVs aus SharePoint-Ordnern zu fischen.",
      },
      {
        question: "Ist der vorlagenbasierte Export in jedem Plan enthalten?",
        answer:
          "Ja. Markenkonformer PDF- und Word-Export funktioniert in Free, Pro und Enterprise. Die Pläne unterscheiden sich im Umfang: Free umfasst 10 Profile und 30 CVs insgesamt, Pro 200 Profile und 600 CVs pro Monat, Enterprise ist unbegrenzt.",
      },
      {
        question: "Behalten übersetzte oder anonymisierte CVs dieselbe Vorlage?",
        answer:
          "Ja. Übersetzung und Anonymisierung ändern nur die Inhaltsebene - die exportierte Datei behält Ihre Schriften, Ihr Layout und Ihr Branding. Ein Blind-CV für eine Ausschreibung sieht exakt aus wie Ihr Standard-CV, nur ohne die identifizierenden Angaben.",
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
    h1: "Blind-CVs mit einem Klick, nicht in einem Abend manueller Schwärzung.",
    sub: "Ein-Klick-Anonymisierung für öffentliche Ausschreibungen, anonymisierte Auswahlverfahren und Wettbewerbsangebote - dieselben Regeln für jeden CV, jedes Mal.",
    whatItDoesBody:
      "Die Ausschreibung verlangt anonymisierte Kandidaten-CVs. Also arbeitet sich in der Nacht vor der Einreichung jemand durch 14 Dokumente und löscht von Hand Namen, Fotos und Arbeitgeberangaben - und übersieht den Nachnamen des Beraters in einer Fußzeile oder den Kundennamen, der in einer Projektbeschreibung auf Seite 3 steckt. Ein übersehenes Feld kann eine Einreichung in einer Blindbewertung ungültig machen, und manuelle Schwärzung gibt Ihnen 14 Chancen, eines zu übersehen.\n\nMagicCV macht Anonymisierung zu einer Eigenschaft des Exports, nicht zu einer Aufgabe. Aktivieren Sie sie für einen CV oder ein komplettes Team-Paket, und identifizierende Angaben werden nach Regeln entfernt, die Sie konfigurieren - Namen, Fotos und welche Felder auch immer Ihr Prozess als identifizierend behandelt. Dieselben Regeln gelten für jeden Berater, jedes Mal, sodass ein 14-Personen-Paket so konsistent ist wie ein einzelner CV. Darunter ist MagicCV GDPR-by-Design mit EU-Datenresidenz; das vollständige Compliance-Bild finden Sie im Trust Center.",
    benefits: [
      {
        title: "Von einem Abend Schwärzung zu einem einzigen Schalter",
        body: "Aktivieren Sie die Anonymisierung beim Export, und Namen, Fotos und andere identifizierende Angaben verschwinden - kein manueller Suchen-und-Löschen-Durchgang, keine Fuß- oder Kopfzeile, die durchrutscht, kein zweites Augenpaar nur zum Abfangen von Fehlern.",
        screenshotAlt: "Anonymisierungs-Umschalter mit Vorher-Nachher-Vergleich desselben Berater-CVs, Name und Foto entfernt",
      },
      {
        title: "Ihre Regeln entscheiden, was als identifizierend gilt",
        body: "Anonymisierte Auswahlverfahren und öffentliche Ausschreibungen sind sich uneinig, was verborgen werden muss - manche wollen Arbeitgebernamen entfernt, andere nur Namen und Fotos. Konfigurieren Sie, welche Felder entfernt werden, damit jede Einreichung ihre konkrete Anforderung erfüllt.",
        screenshotAlt: "Regel-Panel für die Anonymisierung mit Feld-Schaltern für Name, Foto, Arbeitgebernamen und Kontaktdaten",
      },
      {
        title: "Komplette Team-Pakete, identische Behandlung",
        body: "Anonymisieren Sie ein Paket mit 14 Beratern für eine öffentliche Ausschreibung, und jeder CV folgt denselben Regeln. In einer Blindbewertung ist Konsistenz die Anforderung - ein abweichend geschwärzter CV kann einen Kandidaten durch das Fehlende identifizieren.",
        screenshotAlt: "Anonymisiertes CV-Paket für eine Ausschreibung mit 14 Beratern, alle Profile mit Rollencodes statt Namen",
      },
      {
        title: "GDPR by Design als Fundament",
        body: "Die Anonymisierung sitzt auf GDPR-by-Design-Datenverarbeitung mit EU-Datenresidenz, Audit-Logs und einem AVV im Enterprise-Plan. Blind-CVs sind ein Output eines Systems, das für den korrekten Umgang mit personenbezogenen Daten gebaut wurde - kein Flicken auf einem, das es nicht wurde.",
        screenshotAlt: "Trust-Center-Übersicht mit EU-Datenresidenz und DSGVO-Zusagen zur Datenverarbeitung",
      },
    ],
    connectsTo: [
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Was genau wird entfernt, wenn ein CV anonymisiert wird?",
        answer:
          "Namen, Fotos und alle weiteren Felder, die Sie als identifizierend konfigurieren - Kontaktdaten, Arbeitgebernamen, Kundennamen in Projektbeschreibungen. Sie steuern das Regelwerk, damit das Ergebnis dem entspricht, was Ihre Ausschreibung oder Ihr anonymisiertes Auswahlverfahren tatsächlich verlangt.",
      },
      {
        question: "Nutzt ein anonymisierter CV weiterhin unsere Vorlage?",
        answer:
          "Ja. Die Anonymisierung entfernt Inhalte; die Vorlage steuert die Darstellung. Ein Blind-CV exportiert mit denselben Schriften, demselben Layout und demselben Branding wie Ihr Standard-CV - das Paket sieht weiterhin nach Ihrem Unternehmen aus, nur ohne die identifizierenden Angaben.",
      },
      {
        question: "Bekommen wir die identifizierte Version nach der Blindbewertung zurück?",
        answer:
          "Ja. Die Anonymisierung greift beim Export und verändert das zugrunde liegende Profil nie. Ist die Bewertungsphase vorbei, exportieren Sie den CV desselben Beraters mit ausgeschalteter Anonymisierung und haben die vollständige Version - ohne separate Dokumente zu pflegen.",
      },
      {
        question: "Ist MagicCV DSGVO-konform?",
        answer:
          "MagicCV ist GDPR-by-Design gebaut, mit EU-Datenresidenz; Enterprise-Pläne ergänzen einen AVV und Audit-Logs. Anonymisierte Exporte sind ein Teil davon; das Trust Center beschreibt Datenresidenz, Aufbewahrung und Verarbeitung vollständig.",
      },
      {
        question: "Ist MagicCV SOC-2-zertifiziert?",
        answer:
          "Die SOC-2-Zertifizierung ist in Arbeit - wir behaupten sie nicht, bevor sie abgeschlossen ist. Heute bietet MagicCV GDPR-by-Design-Datenverarbeitung, EU-Datenresidenz, SSO und einen AVV im Enterprise-Plan sowie Audit-Logs. Den aktuellen Stand finden Sie im Trust Center.",
      },
      {
        question: "Funktioniert das auch für anonymisierte Bewerbungsverfahren, nicht nur für Ausschreibungen?",
        answer:
          "Ja. Dieselbe Ein-Klick-Anonymisierung deckt anonymisiertes Screening im Recruiting ab - entfernen Sie Namen, Fotos und andere potenziell verzerrende Felder, bevor CVs die Prüfer erreichen, und teilen Sie die identifizierte Version, sobald eine Shortlist steht.",
      },
      {
        question: "Woher wissen wir, dass jeder CV im Paket gleich anonymisiert wurde?",
        answer:
          "Weil die Regeln vom System angewendet werden, nicht von der Person, die das jeweilige Dokument bearbeitet hat. Jeder CV im Paket durchläuft beim Export dasselbe konfigurierte Regelwerk - es gibt keine Abweichungen pro Dokument, die man in der Nacht vor der Frist noch prüfen müsste.",
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
    h1: "Ein Master-Profil. Jede Sprache, in der Ihre Kunden ausschreiben.",
    sub: "Übersetzen Sie Berater-CVs in jede Sprache - Layout und Branding bleiben intakt. Gebaut für grenzüberschreitende Angebote und mehrsprachige Bewertungsgremien.",
    whatItDoesBody:
      "Eine deutsche Rahmenvertrags-Ausschreibung verlangt CVs auf Deutsch bis Donnerstag. Ihre Master-Versionen sind auf Englisch, die letzte Agenturübersetzung hat drei Tage gedauert und kam als reiner Text zurück, der die Vorlage zerlegt hat - und die deutschen Versionen, die jemand letztes Jahr angelegt hat, sind still veraltet: Die zwei neuesten Projekte des Beraters haben es nie hinein geschafft. Jetzt gleichen Sie unter Termindruck zwei Dokumente pro Person ab, in einer Sprache, die die Hälfte des Bid-Teams nicht liest.\n\nMagicCV führt ein Master-Profil pro Berater und erzeugt die Sprache beim Export. Wählen Sie die Sprache, die das Angebot verlangt, und der CV kommt übersetzt heraus - Layout, Schriften und Branding unangetastet, dieselbe Vorlage, dieselbe Struktur, auf Französisch, Deutsch, Niederländisch oder in der Sprache des Bewertungsgremiums. Es gibt keine Parallel-Dokumente, die synchron gehalten werden müssen: Aktualisieren Sie das Profil einmal, und jede Sprachversion spiegelt es wider. Formulierungen lassen sich vor der Einreichung per Chat-Editing anpassen.",
    benefits: [
      {
        title: "Keine Parallel-Versionen, die synchron gehalten werden müssen",
        body: "Das Master-Profil ist die einzige verlässliche Datenbasis. Fügen Sie ein neues Projekt einmal hinzu, und der englische, deutsche und französische CV tragen es beim nächsten Export - das stille Auseinanderdriften der Sprachversionen kann schlicht nicht passieren.",
        screenshotAlt: "Ein Beraterprofil mit Export-Buttons für englische, deutsche und französische CV-Versionen",
      },
      {
        title: "Layout und Branding überstehen die Übersetzung",
        body: "Die Übersetzung passiert innerhalb der Vorlage, nicht in einer Textdatei, die anschließend jemand neu einfließen lässt. Deutsch läuft rund 20% länger als Englisch, und das Layout fängt das ab - Ihre Schriften, Ihr Logo und Ihre Abschnittsstruktur kommen intakt durch.",
        screenshotAlt: "Englischer und deutscher CV-Export desselben Beraters nebeneinander, identisches Layout in beiden",
      },
      {
        title: "Aus drei Tagen Agentur-Durchlaufzeit wird eine Export-Einstellung",
        body: "Wenn die Ausschreibung eine Sprache verlangt, mit der Sie nicht geplant haben, wählen Sie sie beim Export aus, statt eine Übersetzungsagentur zu briefen und zu warten. Die Donnerstagsfrist hängt nicht mehr an der Warteschlange von jemand anderem.",
        screenshotAlt: "Sprachauswahl beim CV-Export mit einem übersetzten PDF, das für eine grenzüberschreitende Ausschreibung generiert wird",
      },
      {
        title: "Gebaut für grenzüberschreitende Beschaffung",
        body: "Mehrsprachige Bewertungsgremien und grenzüberschreitende Rahmenverträge sind für Beratungen und IT-Dienstleister, die in Europa anbieten, der Normalfall. Kombinieren Sie Übersetzung mit Anonymisierung und Ihrer Vorlage zu einem einreichungsfertigen Paket in der Sprache des Gremiums.",
        screenshotAlt: "Mehrsprachiges CV-Paket für eine grenzüberschreitende Ausschreibung, sechs Berater in zwei Sprachen exportiert",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Anonymisierung & DSGVO", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "In welche Sprachen kann MagicCV CVs übersetzen?",
        answer:
          "In jede Sprache, die ein Angebot verlangt - die zentralen europäischen Geschäftssprachen wie Englisch, Deutsch, Französisch, Niederländisch, Spanisch und Schwedisch sind bei unseren Kunden am häufigsten, aber die Übersetzung ist nicht auf eine feste Liste beschränkt. Layout und Branding bleiben unabhängig von der Sprache erhalten.",
      },
      {
        question: "Müssen wir pro Sprache ein separates Profil pflegen?",
        answer:
          "Nein. Jeder Berater hat ein Master-Profil, und die Sprachversionen werden beim Export erzeugt. Aktualisieren Sie das Profil einmal - ein neues Projekt, eine neue Zertifizierung - und jede Sprachversion enthält es beim nächsten Export.",
      },
      {
        question: "Zerstört die Übersetzung unser CV-Layout?",
        answer:
          "Nein. Die Übersetzung passiert innerhalb Ihrer Markenvorlage, sodass Schriften, Logo-Platzierung und Abschnittsstruktur erhalten bleiben. Sprachen, die länger laufen als Englisch - etwa Deutsch oder Französisch - werden vom Layout abgefangen, statt in eine Umformatierungsaufgabe zu münden.",
      },
      {
        question: "Kann ein Muttersprachler die Übersetzung vor der Einreichung prüfen?",
        answer:
          "Ja, und bei Einreichungen mit hohem Einsatz empfehlen wir das. Jeder Abschnitt lässt sich vor dem Export per Chat-Editing anpassen - ein muttersprachlicher Kollege korrigiert einen Begriff in Minuten, statt das Dokument neu zu übersetzen.",
      },
      {
        question: "Wie geht das System mit Fach- und Branchenterminologie um?",
        answer:
          "Die KI übersetzt im Kontext, was den Großteil der Beratungs-, Engineering- und IT-Terminologie gut abdeckt. Bei Nischenbegriffen oder kundenspezifischem Vokabular prüfen Sie den Export und korrigieren per Chat - die Korrektur dauert Minuten, nicht eine weitere Agenturrunde.",
      },
      {
        question: "Muss das Master-Profil auf Englisch sein?",
        answer:
          "Nein. Importieren Sie CVs in der Sprache, in der sie geschrieben wurden - MagicCV parst sie in beiden Fällen in strukturierte Profile, und Sie exportieren in die Sprache, die das jeweilige Angebot verlangt.",
      },
      {
        question: "Ist die Übersetzung im Preis enthalten oder wird sie separat berechnet?",
        answer:
          "Sie ist enthalten. Übersetzte Exporte zählen wie jeder andere Export auf das CV-Kontingent Ihres Plans - 30 CVs insgesamt in Free, 600 pro Monat in Pro, unbegrenzt in Enterprise. Es gibt keine Gebühr pro Wort oder pro Sprache.",
      },
      {
        question: "Können wir denselben CV übersetzen und anonymisieren?",
        answer:
          "Ja. Übersetzung, Anonymisierung und Ihre Markenvorlage greifen alle beim Export - ein Klick erzeugt einen deutschen Blind-CV in Ihrem Hausstil für eine grenzüberschreitende Ausschreibung, die beides verlangt.",
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
    h1: "Von CVs, verstreut über SharePoint, zu einer durchsuchbaren Lebenslauf-Datenbank.",
    sub: "Eine durchsuchbare Lebenslauf-Datenbank und Kompetenzmatrix für Ihre gesamte Bench: Importieren Sie die CVs, die Sie schon haben, führen Sie ein strukturiertes Profil pro Person und generieren Sie daraus jedes Format.",
    whatItDoesBody:
      "Heute liegt die Antwort auf \"Wer hat Pharma-Erfahrung und spricht Französisch?\" in einem SharePoint-Ordner voller Dateien namens final_v3_JS_edit.docx, in einem Excel-Staffing-Raster, das im März noch stimmte, und im Gedächtnis der Person, die das letzte ähnliche Projekt besetzt hat. Es herauszufinden heißt, Dokumente einzeln zu öffnen oder die ganze Practice anzumailen - und wenn die Frist 48 Stunden entfernt ist, erstellen Sie die Shortlist aus den CVs, die Sie finden, nicht aus den Beratern, die Sie tatsächlich haben.\n\nMagicCV ersetzt den Ordner durch eine strukturierte Datenbank: ein Profil pro Person, automatisch geparst aus den Word-, PDF- oder LinkedIn-CVs, die Sie bereits haben. Skills, Branchen, Sprachen und Zertifizierungen werden zu durchsuchbaren Feldern statt zu Fließtext, der in Dokumenten feststeckt. Durchsuchen Sie die gesamte Bench wie eine Kompetenzmatrix, öffnen Sie ein Profil und generieren Sie, was das Angebot braucht - zugeschnitten, übersetzt, anonymisiert, auf Ihrer Vorlage. HRIS-Anreicherung (Personio, BambooHR, HiBob) steht auf der Roadmap, um den manuellen Pflegeaufwand weiter zu senken.",
    benefits: [
      {
        title: "Strukturierte Daten statt 200 Word-Dateien",
        body: "Erfahrung, Skills, Zertifizierungen und Sprachen jedes Beraters liegen als strukturierte Felder vor, nicht als Fließtext in einem Dokument. Dasselbe Profil speist Suche, Zuschnitt, Übersetzung und Export - einmal aktualisieren, und jeder Output spiegelt es wider.",
        screenshotAlt: "Strukturiertes Beraterprofil mit separaten Abschnitten für Projekte, Skills, Zertifizierungen und Sprachen",
      },
      {
        title: "Importieren Sie die CVs, die Sie schon haben",
        body: "Laden Sie Word- und PDF-Dateien direkt aus SharePoint hoch oder ziehen Sie Daten aus LinkedIn - MagicCV parst jede Datei automatisch in ein strukturiertes Profil. Eine 50-Personen-Bench zu migrieren ist eine Upload-Sitzung, kein Abtipp-Projekt.",
        screenshotAlt: "Massenimport-Ansicht, die einen Stapel Word- und PDF-CVs in strukturierte Profile parst",
      },
      {
        title: "\"Wer kann Kubernetes?\" in Sekunden beantworten",
        body: "Durchsuchen Sie die gesamte Bench nach Skill, Zertifizierung, Branche oder Sprache und erhalten Sie sofort eine Shortlist. Die Besetzung einer Ausschreibung hängt nicht mehr am Excel-Raster vom März oder daran, die Practice anzumailen und bis Montag zu warten.",
        screenshotAlt: "Kompetenzmatrix-Suche, gefiltert auf Berater mit AWS-Zertifizierung und Deutsch, mit 6 Treffern",
      },
      {
        title: "Profile, die aktuell bleiben - ohne die Freitags-Erinnerungsmail",
        body: "Berater aktualisieren ihr eigenes Profil an einer Stelle, und KI-gestütztes Editing macht daraus eine Fünf-Minuten-Aufgabe statt einer Formatierungssitzung. Die Version, die Sie für ein Angebot ziehen, ist die aktuelle - nicht die Kopie, die zuletzt 2023 jemand angefasst hat.",
        screenshotAlt: "Profil-Update-Ansicht mit KI-Chat, der ein kürzlich abgeschlossenes Projekt zum Datensatz eines Beraters hinzufügt",
      },
    ],
    connectsTo: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Was passiert mit den CVs, die wir schon in SharePoint haben?",
        answer:
          "Sie laden sie hoch. MagicCV parst Word- und PDF-Dateien - und LinkedIn-Profile - automatisch in strukturierte Profile, eines pro Person. Eine 50-Personen-Bench migriert typischerweise in einer Upload-Sitzung statt in einem manuellen Abtipp-Projekt, und der alte Ordner kann in Rente gehen.",
      },
      {
        question: "Wie halten wir 200 Berater-CVs aktuell, ohne Leuten hinterherzulaufen?",
        answer:
          "Auf zwei Wegen. Berater aktualisieren ihr eigenes Profil an einer Stelle, mit KI-gestütztem Editing, das daraus eine Fünf-Minuten-Aufgabe macht. Und weil Outputs aus dem Profil generiert werden, gibt es keine verstreuten Dokumentkopien, die veralten - die Datenbankversion ist die einzige Version.",
      },
      {
        question: "Können wir über alle Berater hinweg nach Skills suchen?",
        answer:
          "Ja - genau das ist der Vorteil einer Lebenslauf-Datenbank gegenüber einem Ordner. Jedes Profil besteht aus strukturierten Daten, also filtern Sie die gesamte Bench nach Skill, Zertifizierung, Branche oder Sprache und erhalten in Sekunden eine Staffing-Shortlist, statt Dateien einzeln zu öffnen.",
      },
      {
        question: "Worin unterscheidet sich das von unserem ATS oder HRIS?",
        answer:
          "Ein ATS verfolgt Bewerber durch den Einstellungsprozess; ein HRIS verwaltet Beschäftigungsdaten. Keines von beiden erzeugt einen kundenfertigen CV. MagicCV ist CV-Management-Software für die Menschen, die Sie bereits beschäftigen: Es hält ihre Profile strukturiert und durchsuchbar und generiert daraus zugeschnittene, markenkonforme CVs für Angebote. HRIS-Anreicherung (Personio, BambooHR, HiBob) steht auf der Roadmap, damit Daten hineinfließen, statt abgetippt zu werden.",
      },
      {
        question: "Wie viele Profile können wir in den einzelnen Plänen speichern?",
        answer:
          "Free umfasst 10 Profile und 30 CVs insgesamt - genug, um mit einem Team zu testen. Pro ($50/Monat) umfasst 200 Profile und 600 CVs pro Monat. Enterprise ist unbegrenzt, mit SSO und AVV inklusive. Sie können auf Free starten und upgraden, wenn die Bench herauswächst.",
      },
      {
        question: "Wer kann Profile sehen und bearbeiten?",
        answer:
          "Profile werden zentral verwaltet: Bid- und Resourcing-Teams arbeiten aus derselben Datenbank, während Berater ihre eigenen Einträge aktuell halten. Enterprise ergänzt SSO für die Zugriffskontrolle und Audit-Logs, um nachzuvollziehen, wer was geändert hat.",
      },
      {
        question: "Ist eine zentrale Lebenslauf-Datenbank DSGVO-konform?",
        answer:
          "Die Zentralisierung hilft sogar: Personenbezogene Daten liegen in einem kontrollierten System statt verstreut in Postfächern und Netzlaufwerken, wo niemand eine Löschanfrage beantworten kann. MagicCV ist GDPR-by-Design mit EU-Datenresidenz; das Trust Center beschreibt Aufbewahrung und Verarbeitung im Detail.",
      },
      {
        question: "Welche Outputs können wir aus einem Profil generieren?",
        answer:
          "Jeden CV, den das Angebot verlangt: zugeschnitten auf ein RFP, übersetzt in die Sprache der Ausschreibung, anonymisiert für die Blindbewertung - immer exportiert auf Ihrer Markenvorlage als PDF oder Word. Ein Profil ist die Quelle für alles; keine Dokumentkopien pro Output.",
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
