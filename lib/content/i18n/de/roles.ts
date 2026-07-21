import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Sales- und Business-Development-Verantwortliche in Beratungs- und IT-Dienstleistungsfirmen, die die Gewinnquote verantworten - und die jedes Mal die CV-Vorbereitung an der Backe haben, wenn eine Frist näher rückt.",
    h1: "Nehmen Sie den CV-Endspurt aus dem Bid Management.",
    sub: "MagicCV übernimmt die CV-Seite des Bid Managements für Sales-Teams in der Beratung: Beraterpakete passend zum RFP, zugeschnitten auf das, was die Gutachter bewerten, und exportiert auf Ihrer Vorlage, bevor die Frist eng wird.",
    pain: {
      quote: "Die Ausschreibung schließt um 9 Uhr. Es ist 23 Uhr und ich formatiere den zwölften CV um, weil der Partner mir gerade final_v3_JS_edit.docx geschickt hat.",
      answer: "Laden Sie das RFP oder die Ausschreibung hoch, und MagicCV liest die Anforderungen, findet die am besten passenden Berater aus Ihrer Bench, baut jeden CV um das um, was die Bewertungskriterien tatsächlich honorieren, und exportiert das ganze Paket auf Ihrer Markenvorlage als PDF oder Word. Aus dem Neubau in der Nacht davor wird eine 15-minütige Prüfung.",
      proofPoints: [
        "Die KI liest das RFP - inklusive des 40-seitigen Anhangs - und schneidet jeden CV auf die genannten Anforderungen zu",
        "Skills-Suche über die gesamte Bench: Skills, Branchen, Sprachen, Zertifizierungen",
        "Pixelgenau konsistente PDF- und Word-Exporte auf Ihrer Markenvorlage - jede Einreichung wirkt wie aus einer Firma",
        "Ein aktuelles Profil pro Person - kein Starten mehr von der Version, die ein Partner aufbewahrt hat",
      ],
    },
    featureRows: [
      {
        title: "Die richtigen Berater finden, während die Konkurrenz noch das RFP liest",
        body: "Durchsuchen Sie die Bench nach Skills, Branchen, Sprachen und Zertifizierungen, statt Practice Leads anzumailen und zu warten. Aus zwei Tagen \"Wen haben wir dafür?\" wird eine gefilterte Liste, aus der Sie in einer Sitzung eine Shortlist bauen.",
        screenshotAlt: "Skills-Suche, gefiltert auf Berater mit AWS-Zertifizierung, Public-Sector-Erfahrung und Französisch, mit 6 Treffern",
      },
      {
        title: "Jeder CV umgebaut um das, was die Gutachter bewerten",
        body: "MagicCV liest die Ausschreibung und ordnet das Profil jedes Beraters so, dass die relevanten Projekte und Skills vorn stehen. Die Migration im Energiesektor kommt beim Versorger-Angebot auf Seite eins; der generische Zusammenfassungsabsatz kostet Sie keine Bewertungspunkte mehr.",
        screenshotAlt: "Berater-CV vor und nach dem Zuschnitt gegen die Bewertungskriterien eines RFP nebeneinander",
      },
      {
        title: "Ein einreichungsfertiges Paket in Minuten, nicht in einem verlorenen Abend",
        body: "Shortlist auswählen, Vorlage wählen, exportieren. Zwölf zugeschnittene CVs kommen als ein konsistentes PDF- oder Word-Paket heraus, identisch formatiert. Die CV-Vorbereitung hört auf, der Posten im Angebotsplan zu sein, den alle stillschweigend um zwei Tage aufpolstern.",
        screenshotAlt: "Export-Dialog, der ein 12-CV-Angebotspaket auf einer Firmen-Markenvorlage generiert, mit Fortschrittsanzeige",
      },
      {
        title: "Ein Profil pro Person - Schattenversionen sterben aus",
        body: "Berater und Partner aktualisieren das zentrale Profil - per Chat-Editing, nicht per Änderungsverfolgung in einer Word-Datei. Jeder Export wird aus diesem Profil generiert. Die Version, die ein Partner auf seinem Desktop hortet, taucht nicht mehr in Einreichungen auf.",
        screenshotAlt: "Beraterprofil mit Datum der letzten Aktualisierung und einer Chat-Änderung, die ein aktuelles Mandat hinzufügt",
      },
    ],
    stats: [
      { value: "1 Tag → 15 Min", label: "vom RFP-Eingang zum einreichungsfertigen CV-Paket", isPlaceholder: true },
      { value: "+18%", label: "Gewinnquote bei Angeboten mit zugeschnittenen CVs", isPlaceholder: true },
    ],
    includeRoiTeaser: true,
    faqs: [
      {
        question: "Wie bringe ich Partner davon ab, eigene CV-Versionen zu pflegen?",
        answer: "Indem das zentrale Profil das Einzige ist, woraus Exporte entstehen. In MagicCV hat jede Person ein strukturiertes Profil; Partner aktualisieren es per Chat-Editing, statt eine private Word-Datei zu pflegen. Wenn das Paket immer frisch aus dem Profil generiert wird, gibt es nichts mehr, wo die private final_v3.docx hineingeklebt werden könnte.",
      },
      {
        question: "Kann MagicCV wirklich ein vollständiges RFP lesen, oder füge ich Anforderungen von Hand ein?",
        answer: "Laden Sie das RFP oder die Ausschreibung selbst hoch. Die KI liest sie, extrahiert, was die Bewertung verlangt, und baut jeden ausgewählten CV um diese Anforderungen herum um. Sie prüfen das Ergebnis, statt die Auslegung selbst zu machen - und können vor dem Export weiterhin alles anpassen.",
      },
      {
        question: "Ist das eine vollständige Bid-Management-Plattform oder nur der CV-Teil?",
        answer: "Nur der CV-Teil - bewusst. MagicCV verwaltet weder Ihre Angebots-Pipeline noch Preisfindung oder Dokumentzusammenstellung; es beseitigt den CV-Engpass innerhalb Ihres bestehenden Bid-Management-Prozesses. Die meisten Teams betreiben es neben dem, was sie für den Rest des Angebots ohnehin nutzen.",
      },
      {
        question: "Wir haben eine Word-Hausvorlage, die das Brand-Team freigegeben hat. Können wir sie behalten?",
        answer: "Ja. Ihre Vorlage wird zu einer Markenvorlage in MagicCV, und jeder Export rendert pixelgenau konsistent hinein - als PDF oder Word. Sie können mehrere Vorlagen halten - Hausstil plus kunden- oder rahmenvertragsspezifische Formate - und pro Export wechseln.",
      },
      {
        question: "Unsere Berater-CVs liegen in SharePoint-Ordnern. Wie starten wir?",
        answer: "Importieren Sie sie, wie sie sind. MagicCV akzeptiert Word-, PDF- und LinkedIn-Exporte und parst jeden in ein strukturiertes Profil, eines pro Person. Es gibt kein Abtipp-Projekt; der unordentliche Ordner ist der Input, kein Hindernis.",
      },
      {
        question: "Manche Rahmenverträge verlangen Blindbewertung. Können wir anonymisierte CVs einreichen?",
        answer: "Ja - die Anonymisierung ist ein Klick. MagicCV entfernt Namen, Fotos und identifizierende Angaben und exportiert einen Blind-CV auf derselben Vorlage. Wettbewerbs- und Rahmenvertragseinreichungen, die das verlangen, brauchen keinen separaten manuellen Durchgang.",
      },
      {
        question: "Wie schnell können wir ein Paket vor einer Frist realistisch umdrehen?",
        answer: "Sobald die Profile drin sind, ist ein zugeschnittenes Paket Minuten Maschinenzeit plus Ihre Prüfung. Die ehrliche Grenze ist die Profilqualität: Ist das Profil eines Beraters aktuell, ist es sein zugeschnittener CV auch. Die KI hält Profile leicht aktualisierbar, aber sie kann kein Mandat erfinden, das niemand erfasst hat.",
      },
      {
        question: "Was kostet das für ein Bid-Team?",
        answer: "Free umfasst 10 Profile und 30 CV-Exporte - genug, um ein echtes Angebot durchzuspielen. Pro kostet $50/Monat für 200 Profile und 600 CVs, was für die meisten mittelgroßen Beratungen passt. Enterprise ergänzt unbegrenzten Umfang, SSO und einen AVV zu individueller Preisgestaltung.",
      },
    ],
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
    reader: "Recruitment- und Resourcing-Verantwortliche in Beratungs- und Personalfirmen, die Beraterprofile aktuell halten und jede \"Wen haben wir dafür?\"-Anfrage beantworten - meist zu einer Frist, die jemand anderes gesetzt hat.",
    h1: "Eine Kandidaten-Datenbank, die ohne die Freitags-Erinnerung aktuell bleibt.",
    sub: "MagicCV macht aus den CVs, die über Postfächer und Laufwerke verstreut sind, eine durchsuchbare Kandidaten-Datenbank - strukturierte Profile, die Sie nach Skill durchsuchen, auf eine Ausschreibung zuschneiden und in jedem Format exportieren, ohne jemandem hinterherzulaufen.",
    pain: {
      quote: "Ich habe die CV-Update-Erinnerung vor drei Wochen geschickt. Zwei Berater haben geantwortet. Einer davon hat ein PDF von 2023 geschickt.",
      answer: "MagicCV gibt jeder Person ein strukturiertes Profil und lässt die KI den mühsamen Teil erledigen: Sie parst, was ein Berater schickt - Word, PDF, einen LinkedIn-Export - und aktualisiert das Profil daraus. Sie durchsuchen die Datenbank und exportieren das Format, das die Anfrage braucht, statt Dateien hinterherzujagen und von Hand umzuformatieren.",
      proofPoints: [
        "Jedes CV-Format importieren - Word, PDF, LinkedIn - in ein strukturiertes Profil pro Person",
        "Die KI parst Updates aus dem, was Berater schicken - keine manuelle Nacherfassung",
        "Die gesamte Bench nach Skills, Branchen, Sprachen und Zertifizierungen durchsuchen",
        "Ein-Klick-Anonymisierung für Blind-Einreichungen beim Kunden",
      ],
    },
    featureRows: [
      {
        title: "Ein Profil pro Person - egal, was sie Ihnen schicken",
        body: "Legen Sie die Word-Datei, das PDF oder den LinkedIn-Export ab, und MagicCV parst alles in ein strukturiertes Profil. CVs neuer Mitarbeitender liegen nicht mehr in Ihrem Postfach und warten auf einen ruhigen Nachmittag, der nie kommt.",
        screenshotAlt: "Import-Bildschirm, der einen Word-CV und ein LinkedIn-PDF in ein strukturiertes Beraterprofil parst",
      },
      {
        title: "\"Wen haben wir mit SAP und Deutsch?\" in Sekunden beantworten",
        body: "Die Kompetenzmatrix deckt Ihre gesamte Bench ab: Skills, Branchen, Sprachen, Zertifizierungen. Aus einer Staffing-Anfrage werden eine Suche und eine Shortlist - kein Freitagnachmittag voller Slack-Nachrichten an Practice Leads.",
        screenshotAlt: "Kandidaten-Datenbank, gefiltert auf 8 Berater mit SAP, Deutsch und Erfahrung im Fertigungssektor",
      },
      {
        title: "Jeder Output, den die Anfrage braucht, aus demselben Profil",
        body: "Der Kunde will sein eigenes Format? Das Bid-Team will die Hausvorlage? Generieren Sie beides aus dem aktuellen Profil - und übersetzen Sie es in die Sprache des Kunden, mit intaktem Layout. Ein Profil, jedes Format, null Copy-Paste.",
        screenshotAlt: "Export-Optionen für ein Profil: Hausvorlagen-PDF, Kunden-Word-Format und eine deutsche Übersetzung",
      },
      {
        title: "Blind-CVs für die Kunden-Einreichung mit einem Klick",
        body: "Wenn ein Kunde oder Rahmenvertrag anonymisierte Auswahl verlangt, anonymisieren Sie den CV mit einem Klick - Name, Foto und identifizierende Angaben entfernt, Layout unangetastet. Kein manuelles Säubern von zwölf Dokumenten mehr in der Nacht vor der Einreichung.",
        screenshotAlt: "Anonymisierter Berater-CV neben dem Original, Name und Foto durch einen Kandidatencode ersetzt",
      },
    ],
    stats: [
      { value: "6 Std.", label: "pro Woche gespart bei Hinterherlaufen und Umformatieren von CVs", isPlaceholder: true },
    ],
    faqs: [
      {
        question: "Können Kandidaten-CVs für die Einreichung beim Kunden anonymisiert werden?",
        answer: "Ja, mit einem Klick. MagicCV entfernt Namen, Fotos und identifizierende Angaben und exportiert einen Blind-CV auf derselben Vorlage - Einreichungen, die anonymisierte Auswahl verlangen, brauchen keinen manuellen Säuberungsdurchgang. Das ursprüngliche Profil bleibt unangetastet.",
      },
      {
        question: "Wie halten wir 200 Berater-CVs aktuell, ohne Leuten hinterherzulaufen?",
        answer: "Indem die Kosten eines Updates gegen null gehen. Berater schicken, was sie haben - eine überarbeitete Word-Datei, einen LinkedIn-Export - und die KI parst es in ihr Profil; Änderungen gehen auch per Chat. Sie hören auf, die Person zu sein, die Updates abtippt - und genau das war der Hauptgrund, warum Updates nie passierten.",
      },
      {
        question: "Was passiert mit den CVs, die wir schon in SharePoint und alten Postfächern haben?",
        answer: "Sie sind Ihre Importquelle. MagicCV parst Word-, PDF- und LinkedIn-Dateien in strukturierte Profile, eines pro Person - der vorhandene Stapel wird zur Startdatenbank statt zu einem Migrationsprojekt. Beginnen Sie mit den 20 Personen, die Sie am häufigsten besetzen, und weiten Sie von dort aus.",
      },
      {
        question: "Worin unterscheidet sich so eine Kandidaten-Datenbank von unserem ATS?",
        answer: "Ein ATS verfolgt Bewerber durch eine Recruiting-Pipeline und hört nach dem Angebot weitgehend auf, relevant zu sein. MagicCV verwaltet die Menschen, die Sie bereits haben: Profile aktuell, durchsuchbar und exportierbar für Staffing-Anfragen und Angebote. Die meisten Teams betreiben beides - sie beantworten unterschiedliche Fragen.",
      },
      {
        question: "Können wir nach Zertifizierungen und Branchenerfahrung suchen, nicht nur nach Jobtiteln?",
        answer: "Ja. Profile sind strukturierte Daten, also deckt die Kompetenzmatrix Skills, Branchen, Sprachen und Zertifizierungen über das ganze Team ab. \"Azure-zertifiziert, Finanzdienstleistungen, Niederländisch sprechend\" ist ein Filter, kein E-Mail-Thread.",
      },
      {
        question: "Wir halten viele personenbezogene Daten. Wie geht MagicCV mit der DSGVO um?",
        answer: "GDPR by Design: EU-Datenresidenz, Audit-Logs und rollenbasierte Kontrolle darüber, wer was sieht. Enterprise-Pläne ergänzen SSO und einen AVV. Verlässt jemand die Firma, kann das Profil entfernt werden, statt in vergessenen Ordnern weiterzuleben - mehr, als die meisten Netzlaufwerke von sich behaupten können.",
      },
      {
        question: "Wie sieht die Preisgestaltung aus, wenn die Datenbank wächst?",
        answer: "Free umfasst 10 Profile und 30 CV-Exporte, gut für einen Pilot. Pro kostet $50/Monat für 200 Profile und 600 CVs. Enterprise hat individuelle Preise mit unbegrenzten Profilen, SSO und AVV - der übliche Weg, sobald das Resourcing die ganze Bench darüber laufen lässt.",
      },
      {
        question: "Können Berater ihre eigenen Profile aktualisieren?",
        answer: "Ja - genau das ist der Punkt. Sie können per Chat editieren oder einfach einen aktuellen CV schicken, den die KI einparst; Zugriffsrechte regeln, wer bearbeiten und wer nur ansehen darf. Updates werden zur Zwei-Minuten-Aufgabe für den Berater statt zum Dauerposten auf Ihrer Erinnerungsliste.",
      },
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
    reader: "HR- und People-Ops-Verantwortliche, die für die Qualität der Mitarbeiterdaten geradestehen - und zusehen, wie sich CV-Kopien über Netzlaufwerke, Laptops und Angebotsordner vermehren, ohne jede Möglichkeit, das zu kontrollieren.",
    h1: "Ein kontrollierter Datensatz pro Berater. Keine Schattenkopien.",
    sub: "MagicCV ersetzt den CV-Wildwuchs über Laufwerke, Postfächer und Laptops durch strukturierte, zugriffskontrollierte Profile - saubere Daten, die HR tatsächlich steuern kann, ohne ein weiteres System einzuführen, um das die Leute herumarbeiten.",
    pain: {
      quote: "Es gibt vier Versionen von Annas CV: eine in SharePoint, eine im Angebotsordner vom letzten Monat, eine auf ihrem Laptop und eine, die ein Partner selbst umgeschrieben hat. Ich könnte Ihnen nicht sagen, welche stimmt.",
      answer: "MagicCV macht das Profil zum einzigen Datensatz und jeden CV zu einem Export davon. Daten liegen als strukturierte Felder statt als freie Word-Dokumente, rollenbasierter Zugriff steuert, wer was sehen und bearbeiten darf - und weil jeder Export frisch aus dem Profil generiert wird, driften Kopien nicht mehr zu konkurrierenden Versionen auseinander.",
      proofPoints: [
        "Strukturierte Profilfelder ersetzen freie Word-Dokumente",
        "Rollenbasierter Zugriff: wer ansehen, wer bearbeiten darf - pro Profil",
        "GDPR by Design, mit EU-Datenresidenz und Audit-Logs",
        "Jeder CV wird aus dem zentralen Profil generiert - Exporte können nicht vom Datensatz abweichen",
      ],
    },
    featureRows: [
      {
        title: "Daten, die Sie steuern können - statt Dokumente, die Sie nur sammeln",
        body: "Skills, Projekte, Zertifizierungen und Sprachen liegen als strukturierte Felder vor, nicht als Fließtext in einer .docx. Sie sehen firmenweit, was vollständig, was veraltet und was lückenhaft ist - Fragen, die ein Ordner voller Word-Dateien überhaupt nicht beantworten kann.",
        screenshotAlt: "Übersicht der Profilvollständigkeit mit strukturierten Feldern und Daten der letzten Aktualisierung über ein Team hinweg",
      },
      {
        title: "Zugriff, der zur tatsächlichen Arbeitsweise der Firma passt",
        body: "Berater bearbeiten ihr eigenes Profil, Resourcing sieht die Bench ein, Bid-Teams exportieren - und niemand lädt eine Tabelle mit den Karrieredaten aller auf einen Laptop herunter. Rollenbasierter Zugriff ersetzt das Ehrensystem des Netzlaufwerks.",
        screenshotAlt: "Einstellungen für rollenbasierten Zugriff mit Ansichts- und Bearbeitungsrechten pro Team",
      },
      {
        title: "Compliance eingebaut, nicht zur Auditzeit rekonstruiert",
        body: "GDPR by Design, EU-Datenresidenz und Audit-Logs, die zeigen, wer worauf zugegriffen und was geändert hat. Wenn ein Berater geht oder seine Datenrechte ausübt, handeln Sie an einem Datensatz - nicht per Suche über fünf Laufwerke und die gesendeten Mails aller Kollegen.",
        screenshotAlt: "Audit-Log mit Zugriffs- und Änderungsereignissen an Profilen, mit Zeitstempeln und Benutzernamen",
      },
      {
        title: "Ein System - kein weiteres Parallelsystem",
        body: "MagicCV versucht nicht, Ihr HRIS zu ersetzen - es übernimmt das CV-Problem, für das das HRIS nie gebaut wurde. Personio-, BambooHR- und HiBob-Integrationen stehen auf der Roadmap, um Profile automatisch synchron zu halten; heute bringt der Import aus Word, PDF oder LinkedIn vorhandene CVs ohne Abtippen hinein.",
        screenshotAlt: "Einstellungspanel mit CV-Import-Optionen und geplanten HRIS-Integrationen, als Roadmap markiert",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Ist MagicCV DSGVO-konform, und wo werden unsere Daten gespeichert?",
        answer: "MagicCV ist GDPR-by-Design gebaut, mit EU-Datenresidenz, Audit-Logs und rollenbasierter Zugriffskontrolle. Enterprise-Pläne enthalten einen AVV. Beraterdaten bleiben in einem kontrollierten System, statt sich über Laufwerke und Postfächer zu verteilen - und genau dort sitzt das meiste CV-bezogene DSGVO-Risiko.",
      },
      {
        question: "Habt ihr SOC 2?",
        answer: "Die SOC-2-Zertifizierung ist in Arbeit - wir behaupten sie nicht, bevor sie abgeschlossen ist. Heute im Einsatz: GDPR-by-Design-Datenverarbeitung, EU-Datenresidenz, Audit-Logs sowie SSO plus AVV im Enterprise-Plan. Fragen Sie uns bei der Evaluierung nach dem aktuellen Stand.",
      },
      {
        question: "Wie steuern wir, wer Beraterprofile sehen und bearbeiten darf?",
        answer: "Rollenbasierter Zugriff, pro Gruppe eingestellt: Berater bearbeiten typischerweise ihr eigenes Profil, Resourcing- und Bid-Teams erhalten Ansichts- und Exportrechte, HR administriert das Ganze. Das Audit-Log protokolliert, wer was angesehen und geändert hat - Governance ist überprüfbar, nicht nur angenommen.",
      },
      {
        question: "Dupliziert das unser HRIS?",
        answer: "Nein - es deckt ab, was das HRIS nicht abdeckt. Ihr HRIS hält Verträge, Gehaltsabrechnung und Abwesenheiten; es hat kein strukturiertes Modell für Projekterfahrung, Skills und kundenfertige CVs. MagicCV besitzt diese Schicht, und HRIS-Integrationen (Personio, BambooHR, HiBob) stehen auf der Roadmap, um Kernfelder automatisch synchron zu halten.",
      },
      {
        question: "Was passiert mit den Daten einer Person, wenn sie die Firma verlässt?",
        answer: "Es gibt einen Datensatz, an dem Sie handeln. Entfernen oder behalten Sie das Profil gemäß Ihrer Richtlinie, mit dem Audit-Log als Nachweis, was passiert ist. Vergleichen Sie das mit dem Status quo, in dem der CV eines Ausgeschiedenen unbegrenzt in Angebotsordnern und persönlichen Laufwerken überlebt, an die sich niemand erinnert.",
      },
      {
        question: "Wie migrieren wir CVs von den Netzlaufwerken, ohne ein Datenerfassungsprojekt zu starten?",
        answer: "Importieren Sie die Dateien, wie sie sind - Word, PDF, LinkedIn-Exporte. Die KI parst jede in ein strukturiertes Profil, eines pro Person, und markiert, was sie nicht füllen konnte, damit die Verantwortlichen die Lücken schließen. Aus der Arbeit wird Prüfung, nicht Abtippen.",
      },
      {
        question: "Gibt es SSO?",
        answer: "Ja, im Enterprise-Plan, zusammen mit einem AVV und unbegrenzten Profilen. Free (10 Profile) und Pro ($50/Monat, 200 Profile) nutzen die Standard-Anmeldung - für einen Pilot ausreichend; Enterprise passt, sobald IT- und Compliance-Anforderungen ins Spiel kommen.",
      },
      {
        question: "Werden Berater es tatsächlich nutzen, oder ist das wieder ein System, das ignoriert wird?",
        answer: "Der Update-Weg ist bewusst aufwandsarm: einen aktuellen CV schicken, den die KI einparst, oder Änderungen per Chat machen. Berater bekommen etwas zurück - einen sauberen, markenkonformen CV auf Abruf - und das ist mehr Anreiz, als HR-Datensysteme ihnen üblicherweise bieten.",
      },
    ],
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
    reader: "Delivery-, Engagement- und Practice-Leads, die Projekte besetzen und dem Kunden CVs in der Angebotsphase und zum Kickoff schulden - zusätzlich zur eigentlichen Projektarbeit.",
    h1: "Jedes Projekt starten - ohne den CV-Endspurt.",
    sub: "MagicCV liefert Delivery-Leads kundenfertige Berater-CVs - passend zu den Anforderungen, im Format und in der Sprache des Kunden - ohne abrechenbare Leute in der Woche vor dem Kickoff für Dokumenten-Administration abzuziehen.",
    pain: {
      quote: "Kickoff ist Montag. Der Kunde will fünf CVs in seiner Beschaffungsvorlage, auf Französisch - und die Hälfte der Team-CVs endet noch bei den Projekten von 2023.",
      answer: "MagicCV führt ein aktuelles Profil pro Berater und generiert daraus den kundenfertigen CV auf Abruf: passend zu den Anforderungen des Projekts, gerendert in Ihrer Vorlage oder der des Kunden, übersetzt mit intaktem Layout, anonymisiert, wenn die Ausschreibung es verlangt. Staffing-Papierkram konkurriert nicht mehr mit Delivery-Zeit.",
      proofPoints: [
        "Die Bench nach Skills, Branchen, Zertifizierungen und Sprachen gegen die Anforderungen des Kunden durchsuchen",
        "Export in Ihrer Hausvorlage oder im geforderten Kundenformat, pixelgenau konsistent",
        "CVs in jede Sprache übersetzen, mit erhaltenem Layout",
        "Ein-Klick-Anonymisierung für Blind- und Wettbewerbseinreichungen",
      ],
    },
    featureRows: [
      {
        title: "Aus Belegen besetzen, nicht aus dem Gedächtnis",
        body: "Durchsuchen Sie die gesamte Bench nach dem, was das Projekt tatsächlich braucht - die Zertifizierung, auf die der Kunde besteht, die Branchenerfahrung, die Sprache. Die Shortlist kommt aus Daten, nicht von dem, an wen sich der Practice Lead in einem Freitags-Call zufällig erinnert hat.",
        screenshotAlt: "Bench-Suche gegen die Anforderungen eines Projekts, mit Beratern gerankt nach Skill- und Zertifizierungspassung",
      },
      {
        title: "Das Format des Kunden ohne die manuelle Nacharbeit",
        body: "Behördliches Beschaffungsraster, Enterprise-Lieferantenvorlage oder Ihr eigener Hausstil - speichern Sie jedes als Vorlage und exportieren Sie den CV jedes Beraters direkt hinein. Die zwei Stunden pro CV für das Hineinkopieren in die Tabellenstruktur des Kunden entfallen.",
        screenshotAlt: "Ein Beraterprofil, exportiert in eine behördliche Beschaffungs-CV-Vorlage und ein firmengebrandetes PDF",
      },
      {
        title: "Grenzüberschreitende Delivery in der Sprache des Kunden",
        body: "Übersetzen Sie einen CV in die Projektsprache - Layout und Vorlage bleiben intakt. Der Kickoff in Paris bekommt französische CVs, der Rahmenvertrag in Stockholm schwedische, und in keinem der beiden Büros baut jemand Dokumente von Hand neu.",
        screenshotAlt: "Derselbe Berater-CV auf Englisch und Französisch mit identischem Layout und Branding",
      },
      {
        title: "Blind-Profile, wenn die Ausschreibung es verlangt",
        body: "Wettbewerbliche Ausschreibungen und manche Rahmenverträge verlangen CVs ohne Namen oder Fotos. Die Anonymisierung ist ein Klick auf demselben Profil und derselben Vorlage - das Blind-Paket ist eine Variante Ihres normalen Exports, kein separater Editierjob spät in der Nacht.",
        screenshotAlt: "Anonymisierter CV für eine Ausschreibungseinreichung, Name und Foto durch einen Rollencode ersetzt",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Können wir CVs in der geforderten Vorlage eines Kunden exportieren, etwa einem behördlichen Beschaffungsformat?",
        answer: "Ja. Legen Sie das Format des Kunden als Vorlage neben Ihrem Hausstil an, und der CV jedes Beraters exportiert pixelgenau konsistent hinein - als PDF oder Word. Ausschreibungsgetriebene Firmen halten typischerweise eine kleine Bibliothek: Hausmarke, zwei oder drei Rahmenvertragsformate und eine Blind-Variante.",
      },
      {
        question: "Behält die Übersetzung das Layout, oder bekommen wir eine Textwand zum Umformatieren?",
        answer: "Das Layout überlebt. MagicCV übersetzt den CV-Inhalt in jede Sprache und hält dabei Vorlage, Struktur und Branding intakt - die französische Version eines CVs sieht exakt aus wie die englische, nur auf Französisch.",
      },
      {
        question: "Kann ich Berater nach Zertifizierung und Branche suchen, nicht nur nach Rolle?",
        answer: "Ja. Profile sind strukturiert, also deckt die Kompetenzmatrix Zertifizierungen, Branchen, Sprachen und Skills über die gesamte Bench ab. \"PRINCE2-zertifiziert, Versorger-Erfahrung, verfügbar in den nordischen Ländern\" ist ein Filter, den Sie ausführen - keine Frage, die Sie herumschicken.",
      },
      {
        question: "Wie stellen wir sicher, dass die CVs zum Kickoff tatsächlich aktuell sind?",
        answer: "Jeder Berater hat ein Profil, und es zu aktualisieren ist billig: Er schickt einen aktuellen CV, den die KI einparst, oder editiert zwischen Projekten per Chat. Weil Kunden-CVs aus dem Profil generiert werden, statt aus Ordnern ausgegraben, nutzt der Kickoff das, was aktuell ist - nicht das, was zuletzt exportiert wurde.",
      },
      {
        question: "Können wir CVs für wettbewerbliche Ausschreibungen anonymisieren?",
        answer: "Ein Klick. Namen, Fotos und identifizierende Angaben verschwinden; Vorlage und Struktur bleiben. Es ist dasselbe Profil und derselbe Export-Ablauf - Blind-Einreichungen erzeugen keinen separaten manuellen Arbeitsstrang in der Woche vor der Frist.",
      },
      {
        question: "Ist das wieder ein Tool, das meine Delivery-Teams pflegen müssen?",
        answer: "Der Pflegeaufwand ist genau das, was wegfallen soll. Berater fassen es zwischen Projekten kurz an, um ihr Profil aktuell zu halten - per CV-Upload oder Chat-Update - und Delivery-Leads nutzen es beim Besetzen. Es gibt keine laufende Dokumentenpflege, weil Dokumente Outputs sind, nicht der Speicher.",
      },
      {
        question: "Kann eine Practice starten, ohne dass die ganze Firma ausrollt?",
        answer: "Ja, und das ist der übliche Weg. Der Free-Plan umfasst 10 Profile und 30 CV-Exporte - genug, damit ein Team ein echtes Projekt darüber abwickelt. Pro für $50/Monat umfasst 200 Profile; Enterprise ergänzt SSO, AVV und unbegrenzten Umfang, wenn der Rest der Firma nachzieht.",
      },
    ],
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
