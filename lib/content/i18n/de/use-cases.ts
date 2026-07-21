import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Den CV jedes Beraters an die konkrete Ausschreibung anpassen, damit die relevanteste Erfahrung vorn steht - ohne Umschreibe-Marathon vor jeder Frist.",
    h1: "Schluss damit, denselben CV auf jede Ausschreibung einzureichen.",
    sub: "MagicCV liest das RFP und baut den CV jedes Beraters um dessen Anforderungen herum um - damit Gutachter die Passung auf Seite eins sehen, nicht auf Seite vier.",
    problemToday:
      "Gutachter bewerten CVs gegen die Kriterien im RFP, aber die meisten Firmen reichen bei jedem Kunden dasselbe generische Dokument ein. Die Alternative ist schlimmer: Ein Bid Manager sitzt mit dem 40-seitigen RFP-Anhang auf dem einen Bildschirm und final_v3_JS_edit.docx auf dem anderen und sortiert für 12 CVs Bullet Points von Hand um - meist innerhalb einer 48-Stunden-Frist. Die Hälfte des Zuschnitts wird erledigt, die andere Hälfte fällt weg, und der CV, der auf dem Tisch des Gutachters landet, verkauft einen Berater unter Wert, der eigentlich sehr gut passt.\n\nMit MagicCV fügen Sie das RFP, die Ausschreibung oder die Bewertungskriterien ein, und die KI liest, was der Kunde bewertet. Dann ordnet und gewichtet sie die echte Erfahrung jedes Beraters aus dessen strukturiertem Profil passend neu - die Public-Sector-Projekte der Delivery-Leiterin rücken für ein Behördenangebot nach oben, ihre Fintech-Arbeit führt bei einer Bank. Sie prüfen das Ergebnis, passen alles im Chat mit dem Editor an und exportieren in Ihrer Markenvorlage.",
    steps: [
      {
        title: "Geben Sie MagicCV die Ausschreibung, nicht eine Zusammenfassung davon",
        body: "Fügen Sie das vollständige RFP, die Übersicht der Bewertungskriterien oder eine Zwei-Zeilen-Beschreibung dessen ein, was der Kunde will. MagicCV extrahiert die Anforderungen, gegen die es zuschneiden wird, und zeigt sie Ihnen, bevor es einen einzigen CV anfasst.",
        screenshotAlt: "Hochgeladenes RFP-Dokument mit extrahierten Anforderungen als Tags: öffentlicher Sektor, Azure-Migration, Französisch sprechend",
      },
      {
        title: "Sehen Sie zu, wie sich der CV um die Anforderungen herum neu formt",
        body: "MagicCV ordnet und gewichtet Erfahrung aus dem Quellprofil des Beraters neu, sodass die relevantesten Projekte vorn stehen. Es erfindet nie etwas - jede Aussage im zugeschnittenen CV ist auf etwas rückführbar, das bereits im Profil steht.",
        screenshotAlt: "Original und zugeschnittener CV nebeneinander, relevante Public-Sector-Projekte nach oben verschoben und erfüllte Anforderungen hervorgehoben",
      },
      {
        title: "Details im Chat korrigieren, nicht in Word",
        body: "Fordern Sie Änderungen in normaler Sprache an - \"führe mit dem Nordhaus-Advisory-Mandat\" oder \"kürze die Rollen von 2015 auf eine Zeile\" - und der CV aktualisiert sich direkt im Dokument. Kein Ringen mit dem Layout, keine Versions-Abzweigungen.",
        screenshotAlt: "Chat-Panel neben einem CV mit der Anweisung 'frühe Karriere auf eine Zeile kürzen', angewendet auf das Dokument",
      },
      {
        title: "Markenkonform exportieren, bereit zum Anhängen",
        body: "Ein Klick erzeugt ein pixelgenau konsistentes PDF- oder Word-Dokument in der Vorlage Ihres Unternehmens. Die zugeschnittene Version wird am Profil gespeichert - das nächste Angebot startet von einer sauberen Basis, nicht von der lokalen Kopie eines Kollegen.",
        screenshotAlt: "Export-Dialog mit PDF- und Word-Optionen und Vorschau der Markenvorlage des Unternehmens",
      },
    ],
    outcome: "Vorher: drei Stunden pro CV für Neu-Lesen, Umsortieren und Umformatieren - oder ein generischer CV und stille Hoffnung. Nachher: Ausschreibung einfügen, zugeschnittenen Entwurf in Minuten prüfen und CVs einreichen, die die Bewertungskriterien direkt beantworten. Der Zuschnitt, der früher um 23 Uhr wegfiel, passiert jetzt bei jedem Angebot.",
    outcomeStats: [{ value: "+18%", label: "Gewinnquote bei Angeboten mit zugeschnittenen CVs", isPlaceholder: true }],
    faqs: [
      {
        question: "Wird beim Zuschneiden die tatsächliche Erfahrung eines Beraters umgeschrieben?",
        answer:
          "Nein. MagicCV ordnet und gewichtet Erfahrung neu, die bereits im strukturierten Profil des Beraters existiert. Es erfindet nie Projekte, Skills oder Daten - jede Zeile im zugeschnittenen CV ist auf das Quellprofil rückführbar. Das zählt, wenn ein Kunde verlangt, dass Sie zu einer Aussage stehen.",
      },
      {
        question: "Kann ich ein vollständiges 40-seitiges RFP einfügen, oder braucht es eine Zusammenfassung?",
        answer:
          "Fügen Sie das Ganze ein. MagicCV liest das vollständige Dokument, extrahiert Anforderungen und Bewertungskriterien und zeigt Ihnen vor dem Zuschnitt, was es gefunden hat. Eine Zwei-Zeilen-Beschreibung funktioniert auch - mehr Kontext gibt ihm schlicht mehr Material.",
      },
      {
        question: "Wie lange dauert das Zuschneiden eines CVs tatsächlich?",
        answer:
          "Wenige Minuten vom Einfügen der Ausschreibung bis zum geprüften, exportfertigen CV. Der Großteil davon ist Ihre Prüfung, nicht die Generierung. 12 CVs für ein Angebot zuzuschneiden ist derselbe Workflow gegen dieselbe Ausschreibung, nicht 12 separate Nachmittage.",
      },
      {
        question: "Können wir unsere bestehende Word-CV-Vorlage behalten?",
        answer:
          "Ja. Ihre Markenvorlage wird einmal in MagicCV eingerichtet, und jeder zugeschnittene CV exportiert darin als pixelgenau konsistentes PDF oder Word. Der Zuschnitt ändert, was der CV sagt, nicht, wie er aussieht.",
      },
      {
        question: "Worin unterscheidet sich das davon, einen CV in ChatGPT einzufügen?",
        answer:
          "Ein allgemeiner Chatbot hat keine verlässliche Datenbasis und schmückt daher bereitwillig aus - und er liefert reinen Text, den Sie trotzdem noch formatieren müssen. MagicCV schneidet aus dem strukturierten Profil des Beraters zu, weigert sich, Erfahrung zu erfinden, behält Ihre Markenvorlage und arbeitet über das ganze Team hinweg aus einer CV-Management-Plattform - nicht ein Dokument nach dem anderen.",
      },
      {
        question: "Zählt jeder zugeschnittene CV auf unsere Plan-Limits?",
        answer:
          "Ja - jeder generierte CV zählt auf das CV-Kontingent Ihres Plans. Free umfasst 10 Profile und 30 CVs insgesamt, Pro ($50/Monat) umfasst 200 Profile und 600 CVs, Enterprise ist unbegrenzt. Ein zugeschnittener CV für ein laufendes Angebot ist genau das, wofür diese Kontingente da sind.",
      },
      {
        question: "Wohin gehen die RFP- und CV-Daten? Wir arbeiten mit vertraulichen Kundenunterlagen.",
        answer:
          "MagicCV ist GDPR-first gebaut, mit EU-Datenresidenz. Ihre Ausschreibungen und Beraterdaten werden verarbeitet, um Ihre CVs zu generieren - nicht, um öffentliche Modelle zu trainieren. Enterprise ergänzt SSO, Audit-Logs und einen AVV, falls Ihre Kundenverträge einen verlangen.",
      },
    ],
    related: [
      { label: "So funktioniert RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Ein komplettes Angebots-CV-Paket erstellen", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV für Bid- und Sales-Teams", href: "/solutions/sales" },
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
    job: "Ein vollständiges, einheitliches CV-Paket für ein Angebot oder eine Ausschreibung zusammenstellen - zugeschnitten auf die Ausschreibung, in einem Durchgang, Stunden vor der Frist statt Minuten.",
    h1: "Nie wieder ein CV-Paket in der Nacht vor der Frist bauen.",
    sub: "Team auswählen, jeden CV in einem Durchgang auf dieselbe Ausschreibung zuschneiden und ein einziges markenkonformes Paket exportieren - rund 15 Minuten statt eines verlorenen Tages.",
    problemToday:
      "Das RFP kommt mit einer 48-Stunden-Frist. Der Bid Manager mailt sechs Berater wegen aktueller CVs an, bekommt vier Antworten, zwei final_v3.docx-Dateien mit unterschiedlichen Schriften und einmal \"nimm die Version aus dem Meridian-Angebot\". Dann beginnt die eigentliche Arbeit: 12 CVs von Hand umformatieren, damit das Paket nicht klingt, als hätten es sechs verschiedene Firmen geschrieben - während die Frist tickt. Der klassische Freitagabend-Endspurt, und er wiederholt sich bei jedem Angebot.\n\nMit MagicCV sind die Profile bereits aktuell, also beginnt der Endspurt gar nicht erst. Sie wählen das Team aus - oder lassen sich von MagicCV die am besten passenden Berater aus der Kompetenzmatrix vorschlagen - fügen die Ausschreibung einmal ein, und jeder CV im Paket wird gleichzeitig darauf zugeschnitten. Prüfen, im Chat anpassen und ein konsistentes, markenkonformes Paket exportieren, bereit zur Anlage an das Angebot.",
    steps: [
      {
        title: "Team auswählen - oder die Kompetenzmatrix mit auswählen lassen",
        body: "Wählen Sie die Berater für dieses Angebot selbst aus, oder durchsuchen Sie die Bench nach Skills, Branchen, Sprachen und Zertifizierungen und lassen Sie MagicCV die stärksten Passungen zur Ausschreibung vorschlagen. Die finale Entscheidung liegt immer bei Ihnen.",
        screenshotAlt: "Teamauswahl-Bildschirm mit 6 vorgeschlagenen Beratern, gerankt gegen die Ausschreibung, mit passenden Skill-Badges",
      },
      {
        title: "Jeden CV in einem Durchgang auf die Ausschreibung zuschneiden",
        body: "Fügen Sie das RFP einmal ein, und MagicCV schneidet alle ausgewählten CVs gleichzeitig gegen dieselben Anforderungen zu. Zwölf CVs bekommen die Behandlung, die früher ein einziger bekam - keine Nacharbeit pro Dokument.",
        screenshotAlt: "Fortschrittsansicht der Batch-Generierung mit 12 Berater-CVs, die gegen ein RFP zugeschnitten werden",
      },
      {
        title: "Das Paket prüfen, nicht die Absätze",
        body: "Überfliegen Sie jeden zugeschnittenen CV, korrigieren Sie alles im Chat mit dem Editor und bestätigen Sie. Weil jeder CV aus denselben strukturierten Profilen und derselben Vorlage kommt, ist Konsistenz nichts, was Sie prüfen müssen - sie ist der Standard.",
        screenshotAlt: "Paket-Prüfansicht mit 12 zugeschnittenen CVs in identischer Markenvorlage, einer zur Prüfung markiert",
      },
      {
        title: "Ein einreichungsfertiges Paket exportieren",
        body: "Exportieren Sie das ganze Team als ein einziges markenkonformes Dokument oder als Einzeldateien, als PDF oder Word - so, wie die Ausschreibung die CVs geliefert haben will. Anhängen und einreichen.",
        screenshotAlt: "Export-Dialog für ein kombiniertes CV-Paket mit Optionen für Einzeldokument und Dateien pro Berater",
      },
    ],
    outcome: "Vorher: ein ganzer Tag Hinterherlaufen, Umformatieren und Zusammenstückeln - fertig um Mitternacht, eingereicht mit gedrückten Daumen. Nachher: Das Paket dauert rund 15 Minuten, das meiste davon Prüfung, und jeder CV darin ist auf die Ausschreibung zugeschnitten statt nur vorhanden. Die Frist diktiert nicht mehr die Qualität.",
    outcomeStats: [{ value: "1 Tag → 15 Min", label: "typische Zeit bis zum einreichungsfertigen CV-Paket", isPlaceholder: true }],
    faqs: [
      {
        question: "Kann MagicCV vorschlagen, wer ins Paket gehört?",
        answer:
          "Ja. Auf Basis der Ausschreibung und der Kompetenzmatrix Ihres Teams - Skills, Branchen, Sprachen, Zertifizierungen - schlägt MagicCV die am besten passenden Berater vor. Es ist eine Shortlist, keine Entscheidung: Das finale Team wählen Sie.",
      },
      {
        question: "Was, wenn die Hälfte der Team-CVs veraltet ist, wenn das RFP kommt?",
        answer:
          "Genau dafür baut man Pakete aus Profilen statt aus Dateien. Jeder Berater hat ein strukturiertes Profil, das einmal zentral aktualisiert wird - keinen Ordner voller veralteter Dokumente. Fehlt tatsächlich etwas, aktualisieren Sie das Profil in Minuten, und jeder künftige CV, in jedem Format, übernimmt es.",
      },
      {
        question: "Sieht das Paket einheitlich aus, wenn verschiedene Personen die CVs generieren?",
        answer:
          "Ja. Jeder CV im Paket wird aus derselben Markenvorlage gerendert - Schriften, Abschnittsreihenfolge und Layout stimmen überein, egal wer auf Export geklickt hat. Das Paket liest sich wie das Dokument einer Firma, und genau darauf achten Gutachter.",
      },
      {
        question: "Einer unserer Partner besteht auf seiner eigenen CV-Version. Wie funktioniert das?",
        answer:
          "Seine Erfahrung lebt wie bei allen anderen in seinem strukturierten Profil, und die Vorlage steuert die Darstellung. Er kann Formulierungen vor dem Export per Chat prüfen und anpassen - was er nicht kann: still eine abweichende Word-Datei pflegen, die sechs Monate später in einem Paket auftaucht.",
      },
      {
        question: "Zählt ein 12-Personen-Paket als 12 CVs auf unseren Plan?",
        answer:
          "Ja, jeder generierte CV zählt einzeln. Pro ($50/Monat) umfasst 200 Profile und 600 CVs, was die reguläre Angebotstätigkeit der meisten mittelgroßen Teams abdeckt; Enterprise hebt die Limits auf. Free (10 Profile, 30 CVs) reicht, um ein oder zwei echte Angebote als Test durchzuspielen.",
      },
      {
        question: "Kann das Paket Sprachen mischen, wenn die Ausschreibung es verlangt?",
        answer:
          "Ja. MagicCV generiert CVs in der Sprache, die die jeweilige Einreichung verlangt, aus denselben Master-Profilen - die Markenvorlage bleibt intakt. Ein Paket für eine EU-Ausschreibung kann auf Französisch hinausgehen, während das Paket desselben Teams für einen britischen Kunden auf Englisch geht.",
      },
      {
        question: "Wir haben bereits Hunderte CVs in SharePoint. Wie fangen wir an?",
        answer:
          "Importieren Sie sie. MagicCV parst Word- und PDF-CVs in strukturierte Profile, eines pro Person - Ihre vorhandenen Dokumente werden zur Ausgangsbasis statt zu einem Migrationsprojekt. Ab dann werden Pakete aus Profilen gebaut, nicht aus dem, was die Suchbox findet.",
      },
      {
        question: "Ist das ein ATS? Wir haben schon eines fürs Recruiting.",
        answer:
          "Nein. Ein ATS verfolgt Kandidaten durch eine Recruiting-Pipeline; MagicCV verwaltet die CVs der Menschen, die bereits in Ihrem Team sind, und macht daraus zugeschnittene, markenkonforme Angebotsdokumente. Die beiden lösen unterschiedliche Probleme und koexistieren problemlos.",
      },
    ],
    related: [
      { label: "So funktioniert RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Markenkonsistente CV-Exporte", href: "/features/brand-templates" },
      { label: "MagicCV für Bid- und Sales-Teams", href: "/solutions/sales" },
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
    job: "Verstreute CVs auf Netzlaufwerken durch ein strukturiertes, aktuelles Profil pro Person ersetzen - die Quelle, aus der jedes Angebot, jede Staffing-Entscheidung und jede Kundenanfrage schöpft.",
    h1: "Von Datei-Archäologie in SharePoint zu einem aktuellen Profil pro Person.",
    sub: "CV-Datenbank-Software für Beratungen und Professional-Services-Teams: jeden CV einmal importieren, ein aktuelles Profil pro Berater führen und jedes Format auf Abruf generieren.",
    problemToday:
      "Heute besteht die \"CV-Datenbank\" aus einem SharePoint-Ordner, drei Postfächern und einer Handvoll Laptops. Derselbe Berater existiert als CV_2022.pdf, final_v3_JS_edit.docx und als LinkedIn-Profil, das nie jemand exportiert hat - und keines davon ist eindeutig aktuell. Das ist kein CV-Datenmanagement; das ist Datei-Archäologie. Und sie beißt im schlimmsten Moment zu: wenn ein Bid Manager 8 CVs innerhalb einer 48-Stunden-Frist braucht, oder wenn ein Account Lead dem Kunden \"Profile bis morgen\" verspricht und dann den Abend damit verbringt, Beratern hinterherzulaufen, die gerade abrechenbar arbeiten.\n\nMagicCV ersetzt den Ordner durch eine Datenbank. Sie importieren die CVs, die Sie bereits haben - Word, PDF, in welchem Format auch immer sie sich angesammelt haben - und MagicCV parst jeden in ein strukturiertes Profil, eines pro Person. Aktualisiert wird einmal, am Profil. Jeder Output danach - zugeschnittener Angebots-CV, anonymisierte Ausschreibungsversion, übersetzte Kopie - wird frisch aus den aktuellen Daten generiert. \"Welche Datei ist die neueste?\" hört auf, eine Frage zu sein, die irgendjemand stellt.",
    steps: [
      {
        title: "Importieren Sie das Chaos, das Sie haben - nicht die Daten, die Sie sich wünschen",
        body: "Laden Sie Ihre vorhandenen CV-Dateien in jedem Format hoch - Word, PDF, Exporte aus Altsystemen. MagicCV parst jede in ein strukturiertes Profil mit Erfahrung, Skills, Zertifizierungen und Sprachen als Daten, nicht als Absätze. Doppelte Dateien derselben Person verschmelzen zu einem Profil.",
        screenshotAlt: "Massenimport-Bildschirm, der 47 gemischte Word- und PDF-Dateien zu strukturierten Beraterprofilen verarbeitet",
      },
      {
        title: "Ein Profil pro Person führen - und aktuell halten, ohne hinterherzulaufen",
        body: "Jeder Berater hat genau ein Profil. Endet ein Projekt oder kommt eine Zertifizierung hinzu, wird sie einmal dort eingetragen - nicht in fünf Dokumente hineingeflickt. KI-gestützte Updates machen aus der Änderung eine Zwei-Minuten-Aufgabe statt einer Dokumentüberarbeitung.",
        screenshotAlt: "Beraterprofil-Ansicht mit strukturierten Erfahrungseinträgen und einem Indikator für kürzliche Aktualisierungen",
      },
      {
        title: "Das Team wie eine Datenbank durchsuchen - weil es eine ist",
        body: "Die Kompetenzmatrix macht die gesamte Bench durchsuchbar: Filtern Sie nach Skill, Branche, Sprache oder Zertifizierung und erhalten Sie Menschen, keine Dateinamen. \"Wer hat eine AWS-Zertifizierung und spricht Deutsch?\" wird zu einer Fünf-Sekunden-Abfrage statt zu einem E-Mail-Thread am Freitagnachmittag.",
        screenshotAlt: "Kompetenzmatrix-Suche, gefiltert auf Berater mit AWS-Zertifizierung und Deutsch, mit 6 passenden Profilen",
      },
      {
        title: "Jeden Output aus derselben verlässlichen Datenbasis generieren",
        body: "Zugeschnittener Angebots-CV, Blind-CV für eine Ausschreibung, französische Version für ein grenzüberschreitendes Angebot - alles auf Abruf aus dem aktuellen Profil generiert, alles in Ihrer Markenvorlage. Der Output ist Wegwerfware; das Profil ist das Kapital.",
        screenshotAlt: "Output-Auswahl an einem einzelnen Profil mit Optionen für zugeschnittene, anonymisierte und übersetzte CVs",
      },
    ],
    outcome: "Vorher: 20 Minuten Ordner-Tauchen pro CV, multipliziert mit jedem Angebot - und ein reales Risiko, dem Kunden etwas zwei Jahre Altes zu schicken. Nachher: eine Abfrage, ein aktuelles Profil, jedes Format in Minuten. Die Datenbank verzinst sich still - jedes Angebot wird schneller, weil das letzte die Daten sauber gehalten hat.",
    outcomeStats: [],
    faqs: [
      {
        question: "Was passiert mit den Hunderten CVs, die wir bereits in SharePoint haben?",
        answer:
          "Sie importieren sie. MagicCV parst Word- und PDF-Dateien in strukturierte Profile - eines pro Person, selbst wenn Sie vier Versionen des CVs desselben Beraters haben. Die alten Dateien können als Archiv in SharePoint bleiben; sie hören nur auf, die Arbeitskopie zu sein.",
      },
      {
        question: "Wie halten wir 200 Berater-CVs aktuell, ohne jedes Quartal Leuten hinterherzulaufen?",
        answer:
          "Indem das Update klein und einmalig wird. Jede Person hat ein Profil, Updates sind KI-gestützte Änderungen statt Dokumentüberarbeitungen, und danach muss nichts umformatiert werden - die Vorlagen übernehmen die Darstellung. Die meisten Teams verankern Profil-Updates im Projektabschluss, statt eine Erinnerungskampagne zu fahren.",
      },
      {
        question: "Worin unterscheidet sich CV-Datenbank-Software von unserem ATS oder HRIS?",
        answer:
          "Ein ATS verfolgt Bewerber; ein HRIS hält Beschäftigungsdaten wie Verträge und Gehaltsabrechnung. Keines von beiden ist dafür gebaut, einen zugeschnittenen, markenkonformen CV für ein Angebot zu erzeugen. MagicCV ist die Schicht für die Erfahrungsdaten Ihres Delivery-Teams - strukturiert, durchsuchbar und sofort als kundenfertige Dokumente exportierbar.",
      },
      {
        question: "Integriert ihr euch mit unserem HRIS?",
        answer:
          "HRIS-Integrationen (Personio, BambooHR, HiBob) stehen auf der Roadmap. Heute deckt der Dateiimport die Erstbefüllung ab, und weil Profile nur an einer Stelle aktualisiert werden müssen, ist der laufende Pflegeaufwand auch ohne Sync gering.",
      },
      {
        question: "Ist eine zentrale CV-Datenbank ein DSGVO-Problem oder eine DSGVO-Verbesserung?",
        answer:
          "Richtig gemacht, eine Verbesserung. MagicCV ist GDPR-first mit EU-Datenresidenz - Beraterdaten liegen in einem kontrollierten System statt verstreut in Postfächern und auf Laptops. Das macht Zugriffskontrolle, Löschanfragen und Audits handhabbar. Enterprise ergänzt SSO, Audit-Logs und einen AVV.",
      },
      {
        question: "Wie viele Profile decken die Pläne ab?",
        answer:
          "Free umfasst 10 Profile und 30 generierte CVs - genug, um den Workflow in einem Team zu belegen. Pro ($50/Monat) umfasst 200 Profile und 600 CVs, was für die meisten Beratungen mit bis zu ein paar hundert abrechenbaren Mitarbeitern passt. Enterprise ist unbegrenzt, mit SSO und AVV für größere Firmen.",
      },
      {
        question: "Wer pflegt die Profile - eine zentrale Stelle oder die Berater selbst?",
        answer:
          "Beide Modelle funktionieren. Manche Firmen lassen eine Ops- oder Resourcing-Verantwortliche die Datenbank besitzen; andere lassen Berater ihr Profil beim Projektabschluss selbst aktualisieren, mit Prüfung durch Ops. Weil es ein Profil pro Person gibt und die Vorlage die Formatierung steuert, können Beitragende keine Versionen abzweigen oder das Layout zerstören.",
      },
      {
        question: "Welche Formate können wir generieren, sobald die CVs zentralisiert sind?",
        answer:
          "Pixelgenau konsistente PDF- und Word-Exporte in Ihren Markenvorlagen, dazu zugeschnittene Versionen für ein konkretes RFP, anonymisierte Blind-CVs für Ausschreibungen und Übersetzungen - alles aus demselben Profil generiert. Die Zentralisierung ist der Aufbau; die generierten Outputs sind der Ertrag.",
      },
    ],
    related: [
      { label: "Profile und Kompetenzmatrix", href: "/features/profiles-skills" },
      { label: "MagicCV für HR und People Ops", href: "/solutions/hr" },
      { label: "MagicCV für Recruitment-Teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "CV-Datenbank-Software - CVs zentralisieren & standardisieren",
      description:
        "Lebenslauf-Verwaltung, die funktioniert: CVs einmal importieren, ein aktuelles Profil pro Person pflegen und jedes Format auf Abruf erstellen - Schluss mit der SharePoint-Suche.",
      keywords: ["cv datenbank", "lebenslauf datenbank", "lebenslauf verwaltung", "cv verwaltung"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Anonymisierte Blind-CVs für öffentliche Ausschreibungen, Wettbewerbsangebote und vorurteilsfreie Bewertung erstellen - ein Klick, dieselben Regeln für alle, keine manuelle Schwärzung.",
    h1: "Nie wieder einen CV für eine Ausschreibung von Hand schwärzen.",
    sub: "Blind-CVs mit einem Klick für öffentliche Ausschreibungen und anonymisierte Auswahlverfahren - dieselben Anonymisierungsregeln für jeden Berater, jedes Mal.",
    problemToday:
      "Der Ausschreibungsanhang verlangt anonymisierte CVs, also verbringt jemand einen Nachmittag in Word damit, Namen, Fotos und E-Mail-Adressen aus 10 Dokumenten zu löschen. Dann beginnen die Probleme: Ein Name überlebt in einer Kopfzeile auf Seite 3, die Dokumenteigenschaften verraten weiterhin, wer die Datei erstellt hat, und was ein Teammitglied unter \"anonymisiert\" versteht - Initialen behalten, Arbeitgebernamen entfernt - deckt sich nicht mit der Auffassung eines anderen. In einer öffentlichen Ausschreibung kann ein einziges durchgesickertes Identifikationsmerkmal die Einreichung anfechtbar machen; im anonymisierten Auswahlverfahren macht es den ganzen Sinn zunichte.\n\nMagicCV macht die Anonymisierung zu einer Eigenschaft des Exports, nicht zu einem manuellen Editierdurchgang. Sie konfigurieren einmal, was in Ihrem Prozess als identifizierend gilt - Name, Foto, Kontaktdaten, was auch immer Ihre Bewertungen verlangen - und aktivieren die Anonymisierung für jeden beliebigen CV. Weil der Blind-CV frisch aus dem strukturierten Profil generiert wird, statt aus einer alten Datei herausgeschwärzt, gibt es keine übrig gebliebenen Kopfzeilen, Metadaten oder übersehenen Erwähnungen, um die Sie sich sorgen müssten.",
    steps: [
      {
        title: "Von jedem CV ausgehen - Standard oder zugeschnitten",
        body: "Generieren Sie den CV des Beraters wie gewohnt, auch als Version, die auf die konkrete Ausschreibung zugeschnitten ist. Die Anonymisierung ist ein Schalter über jedem Output, kein separates Dokument, das Sie pflegen.",
        screenshotAlt: "Berater-CV, zugeschnitten auf eine öffentliche Ausschreibung, vor Anwendung der Anonymisierung",
      },
      {
        title: "Anonymisierung aktivieren - Ihre Regeln, automatisch angewendet",
        body: "Legen Sie den Anonymisierungs-Schalter um, und MagicCV entfernt jedes Detail, das Ihre konfigurierten Regeln als identifizierend behandeln: Name, Foto, Kontaktdaten und alles Weitere, was Ihr Bewertungsverfahren verlangt. Dasselbe Regelwerk gilt, egal wer im Team den CV generiert.",
        screenshotAlt: "Auf einen CV angewendeter Anonymisierungs-Schalter, Name durch eine Rollenbezeichnung ersetzt und Foto entfernt",
      },
      {
        title: "Saubere Blind-CVs exportieren - einzeln oder als komplettes Paket",
        body: "Exportieren Sie die anonymisierte Version in Ihrer Markenvorlage als PDF oder Word - für einen Berater oder das ganze Bid-Team auf einmal. Weil jede Datei aus Profildaten generiert wird, gibt es keine Rückstände eines Originaldokuments, die durchrutschen könnten.",
        screenshotAlt: "Export-Ansicht eines anonymisierten CV-Pakets für ein 6-Personen-Ausschreibungsteam, alle in identischer Vorlage",
      },
    ],
    outcome: "Vorher: ein Nachmittag manueller Schwärzung pro Ausschreibung und die leise Angst, dass ein Name in einer Fußzeile überlebt hat. Nachher: Die Blind-Version ist ein Klick, im Standard identisch mit jedem anderen Blind-CV, den Ihre Firma je erstellt hat. Anonymisierung hört auf, eine Aufgabe zu sein, und wird eine Einstellung.",
    outcomeStats: [],
    faqs: [
      {
        question: "Was genau wird aus einem Blind-CV entfernt?",
        answer:
          "Was Ihre Regeln vorgeben. Typischerweise Name, Foto und Kontaktdaten; viele Teams entfernen zusätzlich weitere Merkmale, die ihr Bewertungsverfahren als identifizierend behandelt. Sie konfigurieren das Regelwerk einmal, und es gilt für jeden anonymisierten Export, für jeden Berater.",
      },
      {
        question: "Kann ein Name trotzdem in einer Kopfzeile, Fußzeile oder in Datei-Metadaten durchsickern?",
        answer:
          "Das ist der Vorteil des Generierens gegenüber dem Schwärzen. Ein Blind-CV aus MagicCV wird frisch aus dem strukturierten Profil gebaut, mit angewendeten Anonymisierungsregeln - er ist keine bearbeitete Kopie einer alten Word-Datei. Es gibt keine übrig gebliebenen Kopfzeilen, nachverfolgten Änderungen oder Dokumenteigenschaften mit dem Namen des ursprünglichen Autors.",
      },
      {
        question: "Folgen die anonymisierten CVs aller Teammitglieder demselben Standard?",
        answer:
          "Ja. Die Regeln leben im Regelwerk, nicht im individuellen Ermessen - der Blind-CV, den eine Junior-Bid-Koordinatorin am Freitagabend erstellt, entspricht dem, den ein Partner erstellen würde. Bei öffentlichen Ausschreibungen, wo inkonsistente Anonymisierung eine Einreichung ungültig machen kann, ist genau diese Einheitlichkeit der Punkt.",
      },
      {
        question: "Können wir ein ganzes Angebotsteam auf einmal anonymisieren?",
        answer:
          "Ja. Bauen Sie das CV-Paket für das Angebot, wenden Sie die Anonymisierung an und exportieren Sie - jeder CV im Paket folgt denselben Regeln und derselben Markenvorlage. Ein 10-Personen-Ausschreibungspaket ist ein Durchgang, nicht 10 Schwärzungsjobs.",
      },
      {
        question: "Funktioniert das auch für anonymisierte Auswahlverfahren im Recruiting, nicht nur für Ausschreibungen?",
        answer:
          "Ja. Staffing- und Recruitment-Teams nutzen denselben Schalter, um Blind-CVs an Kunden zu schicken - Kandidaten werden nach Erfahrung und Skills bewertet, bevor ein Name oder Foto ins Gespräch kommt. Derselbe Mechanismus, dieselbe Konsistenz.",
      },
      {
        question: "Wie passt die Anonymisierung zu unseren DSGVO-Pflichten?",
        answer:
          "Sie ist ein Baustein der Datenminimierung: Es werden nur die personenbezogenen Daten geteilt, die ein Prozess tatsächlich braucht. MagicCV selbst ist GDPR-first mit EU-Datenresidenz, und Enterprise ergänzt Audit-Logs und einen AVV. Blind-CVs reduzieren, was Ihre Firma verlässt; die Plattform kontrolliert, was in ihr bleibt.",
      },
      {
        question: "Behalten anonymisierte CVs unsere Markenvorlage?",
        answer:
          "Ja - die Blind-Version exportiert in derselben pixelgenau konsistenten Vorlage wie jeder andere CV, nur ohne die identifizierenden Angaben. Verlangt eine Ausschreibung stattdessen ein neutrales oder kundenspezifisches Layout, exportieren Sie in einer dafür eingerichteten Vorlage.",
      },
      {
        question: "Ist die Anonymisierung in jedem Plan verfügbar?",
        answer:
          "Anonymisierte Exporte sind generierte CVs wie jeder andere und zählen auf das Kontingent Ihres Plans - 30 CVs in Free, 600 in Pro ($50/Monat), unbegrenzt in Enterprise. Sie können den kompletten Blind-CV-Workflow im Free-Plan testen, bevor eine echte Ausschreibung davon abhängt.",
      },
    ],
    related: [
      { label: "Anonymisierung und DSGVO", href: "/features/anonymization" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "Spezialisierte Personal- & Talentagenturen", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Anonymisierter Lebenslauf in einem Klick",
      description:
        "Anonyme Lebensläufe für Blindbewertung, öffentliche Ausschreibungen und faire Einreichungen - konsistent im gesamten Team.",
      keywords: ["anonymisierter lebenslauf", "anonymer lebenslauf", "cv anonymisierung"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Präzise, markenkonforme CVs in jeder Sprache erstellen, die Ihre Angebote verlangen - generiert aus einem Master-Profil statt von Hand abgetippt und neu layoutet.",
    h1: "Schluss mit dem Abtippen von CVs für jedes grenzüberschreitende Angebot.",
    sub: "Erstellen Sie präzise, markenkonforme CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen aus einem Master-Profil - kein Abtippen, keine zerstörten Layouts, keine veralteten Versionen.",
    problemToday:
      "Eine EU-Ausschreibung verlangt französische CVs bis Donnerstag. Die heutigen Optionen sind alle schlecht: 8 CVs an eine Übersetzungsagentur schicken und Tage warten, sie durch einen generischen Übersetzer jagen und Stunden damit verbringen, zerstörte Layouts und falsch übersetzte Jobtitel zu reparieren, oder parallele Sprachversionen von Hand pflegen - was garantiert, dass der deutsche CV noch das Projekt vom letzten Jahr listet, während der englische aktuell ist. Jede Sprache multipliziert den Pflegeaufwand, und er zeigt sich immer mitten in der Frist.\n\nMit MagicCV hört Übersetzung auf, Dokumentpflege zu sein. Jeder Berater hat ein Master-Profil als verlässliche Datenbasis. Verlangt ein Angebot eine andere Sprache, wählen Sie sie beim Export, und MagicCV generiert den CV in dieser Sprache, in Ihrer Markenvorlage, mit intaktem Layout. Aktualisieren Sie das Profil einmal und regenerieren Sie jede Sprache auf Abruf - nichts driftet auseinander, weil es keine parallelen Kopien gibt, die driften könnten.",
    steps: [
      {
        title: "Ein Master-Profil führen, nicht eines pro Sprache",
        body: "Erfahrung, Skills und Zertifizierungen jedes Beraters leben in einem einzigen strukturierten Profil. Das ist das Einzige, was irgendjemand pflegt - Sprachversionen sind Outputs, keine Dokumente mit Eigenleben.",
        screenshotAlt: "Master-Beraterprofil mit strukturierten Erfahrungseinträgen und einer Sprachauswahl für den Export",
      },
      {
        title: "Die Sprachen auswählen, die dieses Angebot verlangt",
        body: "Wählen Sie Französisch für die EU-Ausschreibung, Deutsch für den Münchner Kunden oder mehrere auf einmal für ein mehrsprachiges Bewertungsgremium. Die Auswahl passiert beim Export - eine vorher existierende übersetzte Datei braucht es nicht.",
        screenshotAlt: "Sprachauswahl-Dialog mit angehaktem Französisch und Deutsch für ein grenzüberschreitendes Angebot",
      },
      {
        title: "Die Übersetzung wie ein Bid Manager prüfen, nicht wie ein Linguist",
        body: "Der generierte CV behält Ihre Vorlage und Ihr Layout - die Prüfung dreht sich um Terminologie, nicht um Formatierung. Korrigieren Sie einen Jobtitel oder einen Branchenbegriff im Chat mit dem Editor, und die Änderung greift direkt im Dokument.",
        screenshotAlt: "Französischer CV in der Markenvorlage mit Chat-Panel, das eine Jobtitel-Übersetzung korrigiert",
      },
      {
        title: "Markenkonforme CVs in jeder gewählten Sprache exportieren",
        body: "Jede Sprache exportiert als pixelgenau konsistentes PDF- oder Word-Dokument in der Vorlage Ihres Unternehmens. Das französische Paket und das englische Paket sehen aus, als hätte sie dieselbe Firma erstellt - weil dasselbe System es getan hat.",
        screenshotAlt: "Englische und französische Version desselben Berater-CVs, nebeneinander exportiert in identischem Layout",
      },
    ],
    outcome: "Vorher: eine Woche Agentur-Durchlaufzeit oder ein Abend, um zu reparieren, was ein generischer Übersetzer dem Layout angetan hat - wiederholt bei jeder Profiländerung. Nachher: Jede Sprachversion ist Minuten entfernt und wird immer aus aktuellen Daten generiert. Grenzüberschreitende Angebote tragen keine Übersetzungssteuer mehr.",
    outcomeStats: [],
    faqs: [
      {
        question: "In welchen Sprachen können wir CVs generieren?",
        answer:
          "Englisch, Deutsch, Französisch, Niederländisch und Spanisch werden heute am meisten genutzt, und MagicCV kann CVs auch in weitere Sprachen übersetzen - Layout und Vorlage halten unabhängig von der Sprache. Wenn Ihre Angebote in einer bestimmten Sprache laufen, testen Sie sie im Free-Plan, bevor Sie sich darauf verlassen.",
      },
      {
        question: "Bleiben übersetzte CVs synchron, wenn sich das Profil eines Beraters ändert?",
        answer:
          "Ja, weil Übersetzungen keine gespeicherten Dokumente sind - sie werden auf Abruf aus dem aktuellen Master-Profil generiert. Aktualisieren Sie das Profil einmal, regenerieren Sie jede Sprache, und das neue Projekt oder die neue Zertifizierung erscheint überall. Es gibt keine zweite Kopie, die man vergessen könnte.",
      },
      {
        question: "Zerstört die Übersetzung das Layout oder die Markenvorlage?",
        answer:
          "Nein. MagicCV rendert den übersetzten Inhalt in dieselbe Markenvorlage und fängt dabei ab, dass Deutsch länger läuft als Englisch, ohne die Seite zu zerlegen. Was Sie prüfen, ist ein fertiger, markenkonformer CV - kein Texthaufen, den Sie neu layouten müssen.",
      },
      {
        question: "Wie präzise ist die Übersetzung bei technischen Jobtiteln und Branchenbegriffen?",
        answer:
          "Stark - aber prüfen Sie sie wie alles Kundenfertige. CV-Sprache ist eine gutmütige Domäne - Rollen, Projekte, Skills - und die KI beherrscht sie gut. Firmenspezifische Terminologie korrigieren Sie einmal im Chat während der Prüfung; der Fünf-Minuten-Blick eines muttersprachlichen Kollegen bleibt bei Ausschreibungen mit hohem Einsatz gute Praxis.",
      },
      {
        question: "Zählt jede Sprachversion als separater CV auf unseren Plan?",
        answer:
          "Ja - jeder generierte CV zählt auf das Kontingent: 30 CVs in Free, 600 in Pro ($50/Monat), unbegrenzt in Enterprise. Ein 6-Personen-Paket in zwei Sprachen sind 12 CVs, was Pro über eine normale Angebots-Pipeline hinweg bequem abfängt.",
      },
      {
        question: "Wo werden CV-Daten verarbeitet? Unsere Kundenverträge verlangen EU-Verarbeitung.",
        answer:
          "MagicCV läuft mit EU-Datenresidenz und ist GDPR-first konzipiert. Beraterdaten werden innerhalb dieses Rahmens verarbeitet, um Ihre CVs zu generieren, einschließlich Übersetzungen. Enterprise ergänzt SSO, Audit-Logs und einen AVV für Firmen, deren Kundenverträge die Nachweise verlangen.",
      },
      {
        question: "Kann ein Angebotspaket Sprachen mischen?",
        answer:
          "Ja. Generieren Sie den CV jedes Beraters in der Sprache, die die Einreichung verlangt - oder denselben Berater in zwei Sprachen für ein zweisprachiges Bewertungsgremium. Alles exportiert in derselben Vorlage, sodass das Paket über Sprachen hinweg visuell konsistent bleibt.",
      },
      {
        question: "Warum nicht einfach weiter unsere Übersetzungsagentur nutzen?",
        answer:
          "Für Rechtsdokumente: behalten Sie die Agentur. Für CVs scheitert das Agenturmodell an Geschwindigkeit und Synchronität: Tage Durchlaufzeit pro Runde, echte Kosten pro Dokument und eine übersetzte Datei, die veraltet ist, sobald sich das Profil ändert. MagicCV liefert Generierung in Minuten aus stets aktuellen Daten - mit menschlicher Prüfung, wo Sie sie wollen.",
      },
    ],
    related: [
      { label: "Mehrsprachige CV-Generierung", href: "/features/multilingual" },
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "Software- & IT-Beratung", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "CV übersetzen - professionelle Lebensläufe in jeder Sprache",
      description:
        "Erstellen Sie präzise, professionelle CVs auf EN, DE, FR, NL, ES und in weiteren Sprachen - ohne Abtippen und Neuformatieren.",
      keywords: ["mehrsprachiger CV-Generator", "CV Übersetzungstool Beratung"],
    },
  },
];
