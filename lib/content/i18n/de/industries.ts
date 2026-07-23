import type { IndustryPage } from "../../types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "IT-Dienstleister / Software-Beratungen, die sich auf Kunden- und Rahmenvertragsprojekte bewerben; stark geprägt von Skills-Matrix-CVs.",
    angle:
      "Der RFP-Anhang verlangt eine Kompetenzmatrix: Jahre pro Technologie, Zertifizierungen mit Ablaufdatum, Projektreferenzen im Tabellenformat des Kunden. Die CVs Ihrer Berater liegen in SharePoint in zehn verschiedenen Word-Layouts, und die letzte verifizierte Version der Hälfte davon stammt aus dem vorigen Angebot. Also verbringt der Delivery Lead das Wochenende vor der Frist damit, aus final_v3-Dateien zu kopieren und Berater anzuschreiben, um zu klären, ob ihre AWS-Zertifizierungen noch aktuell sind.\n\nMagicCV ersetzt dieses Gehetze durch ein strukturiertes Profil pro Berater. Importieren Sie die Word- und PDF-CVs, die Sie heute haben, und Skills, Zertifizierungen und Projekthistorie werden zu durchsuchbaren Feldern statt Fließtext. Kommt ein Angebot herein, laden Sie das RFP hoch: Die KI liest die Anforderungen, baut jeden CV um den Stack herum um, den der Kunde verlangt, und exportiert in Ihrer Hausvorlage oder im vorgeschriebenen Format des Rahmenvertrags - in jeder Sprache, die die Ausschreibung verlangt.",
    h1: "Jedes RFP verlangt eine andere Kompetenzmatrix. Beantworten Sie alle aus einem Profil.",
    sub: "Durchsuchen Sie Ihre Bench nach Stack und Zertifizierung und generieren Sie RFP-fertige Berater-CVs im exakten Format, das jeder Rahmenvertrag und jede Ausschreibung verlangt.",
    keyPoints: [
      {
        title: "Die Berater finden, die tatsächlich zum Stack passen",
        body: "Filtern Sie die gesamte Bench nach Skills, Jahren an Erfahrung, Zertifizierungen und Sprachen in einer Suche. Statt drei Delivery Manager zu fragen, wer Kubernetes kann, haben Sie die Shortlist in Sekunden - inklusive des Beraters, der letztes Quartal angefangen hat und es nie in die alte Tabelle geschafft hat.",
        screenshotAlt: "Team-Suche gefiltert auf Kubernetes + AWS + Deutsch, mit 6 passenden Beratern und Zertifizierungs-Badges",
      },
      {
        title: "CVs umgebaut um die tatsächlichen RFP-Anforderungen",
        body: "Laden Sie das RFP hoch oder fügen Sie die Anforderungen ein, und die KI ordnet den CV jedes Beraters so um, dass die relevanten Projekte, die Stack-Erfahrung und die Zertifizierungen vorne stehen. Sie arbeitet ausschließlich mit echten Profildaten - nichts wird erfunden, um eine Lücke zu füllen.",
        screenshotAlt: "RFP-Anforderungspanel neben einem Berater-CV, in dem passende Projekte und Zertifizierungen nach oben verschoben wurden",
      },
      {
        title: "Ein Profil, jedes Rahmenvertragsformat",
        body: "Rahmenverträge und Kundenausschreibungen schreiben jeweils ihre eigene CV-Struktur vor. Legen Sie die Vorlage einmal an, und jeder Export landet pixelgenau konsistent in Word oder PDF - kein manuelles Neubauen von 12 CVs mehr, weil dieser Kunde Tabellen statt Bullet Points will.",
        screenshotAlt: "Export-Dialog mit Hausvorlage und zwei rahmenvertragsspezifischen CV-Vorlagen für denselben Berater",
      },
      {
        title: "Zertifizierungen, die aktuell sind - nicht die vom letzten Jahr",
        body: "Zertifizierungen liegen als strukturierte Felder auf jedem Profil, werden einmal aktualisiert und erscheinen in jedem danach generierten CV. Verlängerungen sind keine Freitagnachmittag-Jagd durch Slack mehr vor jeder Einreichung.",
        screenshotAlt: "Beraterprofil mit Zertifizierungsliste, Ausstellungsdaten und aktuellem Status",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Wie bekommen wir 80 Berater-CVs aus SharePoint in MagicCV?",
        answer:
          "Laden Sie sie hoch, wie sie sind - Word, PDF oder exportierte LinkedIn-Profile. MagicCV parst jede Datei in ein strukturiertes Profil, eines pro Person, sodass der gemischte Ordner aus final_v2- und final_v3-Dateien zu einer sauberen, durchsuchbaren Datenbank wird. Die meisten Teams migrieren ihre gesamte Bench an einem Nachmittag.",
      },
      {
        question: "Das RFP verlangt eine Kompetenzmatrix mit Jahren pro Technologie. Kann MagicCV das liefern?",
        answer:
          "Ja. Skills liegen als strukturierte Daten auf jedem Profil, nicht vergraben im Fließtext - die KI kann sie gegen die Anforderungen der Ausschreibung mappen und in dem Format darstellen, das die Ausschreibung verlangt. Schreibt der Kunde ein eigenes Matrix-Layout vor, richten Sie es als Vorlage ein und exportieren direkt hinein.",
      },
      {
        question: "Können wir unsere bestehende Word-CV-Vorlage behalten?",
        answer:
          "Ja. Bilden Sie Ihr Hauslayout als Markenvorlage in MagicCV nach - Schriften, Farben, Struktur - und jeder Export entspricht ihm exakt, in Word oder PDF. Sie können mehrere Vorlagen parallel führen, eine pro Rahmenvertrag oder Schlüsselkunde.",
      },
      {
        question: "Wie halten wir 60+ Berater-CVs aktuell, ohne Leuten hinterherzulaufen?",
        answer:
          "Jeder Berater hat ein Master-Profil, also passiert ein Update einmal statt in fünf Word-Dateien. Projekthistorie und Zertifizierungen sind eigenständige Felder, was sofort sichtbar macht, was veraltet ist. Der Chat-basierte Editor macht Updates zudem so schnell, dass die Leute sie tatsächlich machen.",
      },
      {
        question: "Ist MagicCV ein Ersatz für ATS oder HRIS?",
        answer:
          "Nein. Ein ATS verfolgt Bewerber und ein HRIS erledigt Gehalt und Urlaub - keines von beiden erzeugt einen kundenfertigen Berater-CV. MagicCV ist die CV-Management-Schicht: Es hält angebotsfertige Profile Ihres Delivery-Teams und generiert zugeschnittene, markenkonforme CVs für RFPs und Rahmenvertragsabrufe.",
      },
      {
        question: "Können CVs von Subunternehmern und Freelancern in dieselbe Datenbank?",
        answer:
          "Ja. Ein Profil ist ein Profil - viele Beratungen führen Associates und regelmäßige Subunternehmer neben den Angestellten, damit ein Bid-Team ein komplettes Angebot aus einer Suche besetzen kann. Über Zugriffsrechte steuern Sie, wer welche Profile sieht.",
      },
      {
        question: "Was kostet das für eine Beratung mit 40 Personen?",
        answer:
          "Der Pro-Plan kostet $50/Monat und umfasst 200 Profile und 600 generierte CVs - das passt für die meisten Beratungen bis zu einigen hundert Beratern. Es gibt einen Free-Plan (10 Profile, 30 CVs), um den Workflow an einem echten Angebot zu testen, und Enterprise ergänzt unbegrenzte Nutzung, SSO und einen AVV.",
      },
      {
        question: "Wo werden unsere Beraterdaten gespeichert?",
        answer:
          "In der EU, mit GDPR-by-Design-Verarbeitung, Audit-Logs und rollenbasiertem Zugriff. Enterprise-Pläne ergänzen SSO und einen AVV. Die SOC-2-Zertifizierung ist in Arbeit; den aktuellen Stand finden Sie im Trust Center.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Für Sales-Teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV für Software- & IT-Beratungen",
      description:
        "Matchen Sie Berater nach Skills und Technologieerfahrung und generieren Sie RFP-fertige CVs - in jeder Sprache.",
      keywords: ["IT-Beratung CV-Verwaltung", "Tech-Berater-CV für RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Strategie- und Managementberatungen, bei denen die Glaubwürdigkeit von Partnern und Beratern Deals gewinnt.",
    angle:
      "Strategieangebote werden über das benannte Team gewonnen - und die CVs des benannten Teams sind meist die schwächsten Seiten des Dokuments. Der Partner hält an einer persönlichen Bio von 2023 fest, die niemand anfassen darf. Die Projektlisten sind generisch, weil der Analyst, der das Paket um 23 Uhr zusammenstellt, sie aus dem letzten Angebot gezogen hat, das sie aus dem davor gezogen hat. Der Kunde liest fünf Bios in fünf leicht unterschiedlichen Formaten und zieht daraus einen Schluss über die Sorgfalt des Hauses.\n\nMagicCV gibt jedem Partner und Berater ein Master-Profil - Mandate, Sektoren, Kompetenzen - gepflegt an einer Stelle. Für jeden Pitch liest die KI das Briefing und ordnet jede Bio so um, dass die relevantesten Mandate vorne stehen: die Retail-Turnaround-Projekte für den Retail-Turnaround-Pitch, nicht die generischen Top fünf. Das gesamte Team-Paket exportiert in Ihrer Markenvorlage - das Dokument, das ein Partner Donnerstagfrüh freigibt, sieht aus, als hätte es ein einziges Haus geschrieben.",
    h1: "Das Angebot benennt das Team. Sorgen Sie dafür, dass jeder benannte CV seinen Platz verdient.",
    sub: "Partner-Bios und Berater-CVs, die die Mandate in den Vordergrund stellen, die dieser konkrete Pitch verlangt - zusammengestellt in Minuten, konsistent über das ganze Paket.",
    keyPoints: [
      {
        title: "Die richtigen Mandate vorne, pro Briefing",
        body: "Geben Sie MagicCV das Pitch-Briefing, und es ordnet die Mandatshistorie jeder Person so um, dass die relevanteste Arbeit zuerst kommt - Sektor, Problemtyp, Kundengröße. Der Kunde sieht ein Team, das für sein Problem zusammengestellt wurde, keine recycelte Referenzseite.",
        screenshotAlt: "Berater-Bio mit drei Retail-Transformationsmandaten, die über ältere Arbeit gestellt wurden, daneben die Briefing-Anforderungen",
      },
      {
        title: "Ein Master-Profil beendet das Problem der persönlichen Versionen",
        body: "Jeder Partner und Berater hat eine einzige verbindliche Quelle für seine Erfahrung, aktualisiert per Chat-Editing. Der Partner, der seine eigene Word-Version pflegte, ist kein Engpass mehr - zugeschnittene Bios generieren aus dem Profil, nicht aus der Datei, die er zuletzt gemailt hat.",
        screenshotAlt: "Partner-Profil mit Mandatshistorie, Sektor-Tags und Datum der letzten Aktualisierung",
      },
      {
        title: "Ein Paket, das sich wie ein Haus liest",
        body: "Stellen Sie Partner, Principals und das Delivery-Team in einem einzigen Pitch-Paket zusammen, alle in derselben Markenvorlage. Kein Formatierungsdurchgang am Donnerstagabend mehr, damit fünf Bios aus drei Büros aussehen, als gehörten sie ins selbe Dokument.",
        screenshotAlt: "Sechs-Personen-Pitch-Paket in einer konsistenten Markenvorlage, Partner-Bios zuerst",
      },
      {
        title: "Sektor- und Kompetenz-Tags übernehmen das Erinnern",
        body: "Mandate sind nach Sektor und Kompetenz getaggt - die Pricing-Spezialistin mit drei Lebensmittelhandel-Kunden taucht auf, wenn der Lebensmittelhandel-Pitch hereinkommt, auch wenn der Staffing-Partner nie mit ihr gearbeitet hat. Das institutionelle Gedächtnis hängt nicht mehr davon ab, wer zufällig im Raum sitzt.",
        screenshotAlt: "Suchergebnisse für Pricing + Lebensmitteleinzelhandel mit 4 Beratern, sortiert nach Mandatsrelevanz",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Funktioniert das auch für Partner-Bios, nicht nur für Berater-CVs?",
        answer:
          "Ja - eine Partner-Bio ist derselbe Mechanismus mit anderer Gewichtung. Das Profil hält die vollständige Mandatshistorie; die Exportvorlage steuert, ob daraus eine einseitige Bio oder ein detaillierter CV wird, und die KI schneidet beides auf den anstehenden Pitch zu.",
      },
      {
        question: "Wie entscheidet MagicCV, welche Mandate in den Vordergrund rücken?",
        answer:
          "Es liest das Briefing - genannter Sektor, Problem, Umfang - und rankt die echten Mandate der Person dagegen. Es ordnet um und formuliert neu; es erfindet nie Arbeit, die nicht im Profil steht. Sie prüfen, bevor etwas ins Paket geht.",
      },
      {
        question: "Können wir Kundennamen in Mandatsbeschreibungen verallgemeinern?",
        answer:
          "Ja. Mandate sind so gespeichert, wie Sie sie geschrieben haben, und der Chat-basierte Editor erzeugt schnell eine diskrete Version (\"ein Top-3-Lebensmittelhändler in Europa\") für einen bestimmten Export, ohne den Master-Eintrag anzufassen. Für Verfahren, die vollständig blinde CVs verlangen, gibt es zusätzlich die Ein-Klick-Anonymisierung.",
      },
      {
        question: "Wie migrieren wir Bios, die derzeit in alten Angebots-Decks stecken?",
        answer:
          "Exportieren oder fügen Sie sie in beliebiger Form ein - Word, PDF, auch grober Text - und MagicCV parst jede in ein strukturiertes Profil. Der erste Durchgang dauert Minuten pro Person; Partner bestätigen ihr Profil danach einmal, statt bei jedem Pitch eine neue Bio freizugeben.",
      },
      {
        question: "Können wir unsere bestehende Angebotsvorlage behalten?",
        answer:
          "Ja. Richten Sie Ihre Markenvorlage ein - Typografie, Layout, Struktur - und jede Bio und jeder CV exportiert pixelgenau als PDF oder Word, bereit zum Einfügen ins Angebotsdokument.",
      },
      {
        question: "Worin unterscheidet sich das von Bios in einem gut organisierten SharePoint?",
        answer:
          "SharePoint speichert Dokumente; es kann Ihnen nicht sagen, welcher von 40 Beratern Energiewende-Erfahrung hat, und jede zugeschnittene Version wird zu einer weiteren Datei, die verwaltet werden muss. MagicCV speichert strukturierte Profile, die es durchsuchen, gegen ein Briefing abwägen und exportieren kann - das Dokument ist ein Output, nicht das System of Record.",
      },
      {
        question: "Was kostet das für eine Boutique-Beratung?",
        answer:
          "Free umfasst 10 Profile und 30 CVs - genug, um einen echten Pitch damit durchzuspielen. Pro kostet $50/Monat für 200 Profile und 600 CVs, was die meisten unabhängigen und mittelgroßen Häuser abdeckt. Enterprise ergänzt SSO, einen AVV und unbegrenzte Nutzung.",
      },
      {
        question: "Wer kontrolliert, was unter dem Namen eines Partners hinausgeht?",
        answer:
          "Rollenbasierter Zugriff trennt, wer Profile bearbeiten und wer Pakete generieren und exportieren darf, und Audit-Logs protokollieren jede Änderung. Partner können ihre zugeschnittene Bio vor der Einreichung prüfen, ohne sie selbst pflegen zu müssen.",
      },
    ],
    related: [
      { label: "RFP-zu-CV-Reasoning", href: "/features/rfp-to-cv" },
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "Für Sales-Teams", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV für Strategie- & Managementberatungen",
      description:
        "MagicCV analysiert die Ausschreibung und stellt die relevanteste Erfahrung jedes Beraters heraus - markenkonform, partnertauglich.",
      keywords: ["Managementberatung Angebots-CVs", "Strategieberatung Ausschreibungs-CV"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Design-, Kreativ- und Digitalagenturen, die um Projekte und Retainer pitchen; Portfolio und Team-Referenzen zählen.",
    angle:
      "Das Pitch-Deck ist wunderschön. Dann kommt die Team-Slide, und die Bios sind in sechs Stilen, weil sie aus den letzten drei Credentials-Decks kopiert wurden - und die neue Motion Designerin taucht in keinem davon auf. Also baut jemand Seniores die Bios in der Nacht vor dem Pitch wieder in Figma nach, denn eine Agentur, die Handwerk verkauft, kann keine Team-Seite verschicken, die hastig zusammengesetzt aussieht - selbst wenn sie es war.\n\nMagicCV führt ein strukturiertes Profil pro Person - Angestellte wie Stamm-Freelancer - und rendert Bios durch die eigene Vorlage Ihres Studios: Ihre Schriften, Ihre Farben, Ihr Layout. Für jeden Pitch schneidet die KI zu, womit jede Bio führt, passend zum Briefing, und die gesamte Team-Seite exportiert als fertiges PDF oder Word. Das Handwerk bleibt sichtbar; das Nachbauen hört auf.",
    h1: "Team-Seiten, die aussehen, als hätte Ihr Studio sie gemacht - ohne sie für jeden Pitch neu zu machen.",
    sub: "Ein Profil pro Kreativem, gerendert in Ihrer exakten Marke und zugeschnitten auf jedes Briefing - damit die Team-Slide nicht mehr die Nacht vor dem Pitch auffrisst.",
    keyPoints: [
      {
        title: "Ihre Marke, automatisch angewendet",
        body: "Richten Sie die Vorlage Ihres Studios einmal ein - Typografie, Farben, Layout - und jede Bio exportiert pixelgenau darin. Die Team-Seite hält endlich denselben Standard wie der Rest des Decks, ohne dass ein Designer sie anfasst.",
        screenshotAlt: "Vier Kreativ-Bios in der eigenen Vorlage eines Studios mit konsistenter Typografie und Fotobehandlung",
      },
      {
        title: "Bios zugeschnitten aufs Briefing, nicht recycelt aus dem letzten Deck",
        body: "Geben Sie MagicCV das Pitch-Briefing, und jede Bio führt mit der relevanten Arbeit: die E-Commerce-Projekte für den E-Commerce-Pitch, die Rebrand-Arbeit für das Rebranding. Dieselben Leute, schärfere Geschichte, kein manuelles Umschreiben.",
        screenshotAlt: "Creative-Director-Bio mit E-Commerce-Projekten, die für ein Retail-Pitch-Briefing nach oben geholt wurden",
      },
      {
        title: "Das ganze Roster an einem Ort, Freelancer inklusive",
        body: "Importieren Sie Bios und CVs aus Word, PDF oder LinkedIn, und jede Person wird zu einem strukturierten, durchsuchbaren Profil. Wenn ein Pitch eine UX-Researcherin mit Fintech-Erfahrung braucht, suchen Sie - statt durch Slack zu scrollen nach dem Freelancer, den jemand letzten Frühling engagiert hat.",
        screenshotAlt: "Roster-Ansicht gefiltert auf UX-Researcher, mit Angestellten- und Freelancer-Profilen samt Verfügbarkeits-Tags",
      },
      {
        title: "Internationale Pitches in der Sprache des Kunden",
        body: "Übersetzen Sie jede Bio oder komplette Team-Seite in die Sprache des Kunden, während Ihr Layout intakt bleibt. Grenzüberschreitende Pitches brauchen keine separate Übersetzungs- und Relayout-Runde mehr.",
        screenshotAlt: "Dieselbe Team-Bio nebeneinander auf Englisch und Deutsch in identischem Studio-Branding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Können wir die exakte visuelle Identität unseres Studios beibehalten?",
        answer:
          "Ja - das ist der Punkt. Sie definieren die Vorlage mit Ihren Schriften, Farben und Ihrem Layout, und jede generierte Bio übernimmt sie exakt, exportiert als PDF oder Word. Wenn der Output nicht nach Ihnen aussieht, ist die Vorlage noch nicht fertig.",
      },
      {
        question: "Ist das für CVs oder für die kurzen Bios, die wir in Decks setzen?",
        answer:
          "Beides kommt aus demselben Profil. Eine Vorlage steuert das Ausgabeformat - das Profil einer Person kann als dreizeilige Deck-Bio, als Einseiter oder als vollständiger CV für einen Retainer- oder Rahmenvertrags-Pitch rendern, alle konsistent zueinander.",
      },
      {
        question: "Können wir Freelancer und Stamm-Kollaborateure aufnehmen?",
        answer:
          "Ja. Viele Agenturen führen ihre bewährte Freelancer-Bench in derselben Datenbank wie die Angestellten, damit ein Pitch-Team in einem Durchgang zusammengestellt und präsentiert werden kann. Über Zugriffsrechte steuern Sie, wer welche Profile sehen und exportieren darf.",
      },
      {
        question: "Wie bekommen wir alle Bios hinein, ohne ein großes Content-Projekt?",
        answer:
          "Laden Sie hoch, was existiert - alte CVs, LinkedIn-Exporte, Bios aus früheren Decks kopiert - und MagicCV parst jedes davon in ein strukturiertes Profil. Danach polieren die Leute ihr eigenes Profil per Chat-Editing, was schneller geht, als sie ein Formular ausfüllen zu lassen.",
      },
      {
        question: "Was kostet das für ein Studio mit 15 Personen?",
        answer:
          "Free umfasst 10 Profile und 30 generierte CVs - genug, um es an einem echten Pitch zu testen. Pro für $50/Monat umfasst 200 Profile und 600 CVs - Platz für das ganze Studio plus die Freelancer-Bench. Enterprise gibt es für größere Netzwerke, die SSO und unbegrenzte Nutzung brauchen.",
      },
      {
        question: "Wie werden personenbezogene Daten gehandhabt? Manche Profile sind Freelancer, keine Angestellten.",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, rollenbasiertem Zugriff und Audit-Logs - relevant, wenn Sie Profile von Menschen halten, die nicht auf Ihrer Gehaltsliste stehen. Profile lassen sich sauber entfernen, wenn eine Zusammenarbeit endet.",
      },
    ],
    related: [
      { label: "Markenkonsistente Exporte", href: "/features/brand-templates" },
      { label: "CVs auf jede Ausschreibung zuschneiden", href: "/use-cases/tailor-cvs" },
    ],
    seo: {
      title: "MagicCV für Design- & Kreativagenturen",
      description:
        "Erstellen Sie konsistent gestaltete, zugeschnittene Berater- und Kreativprofile, die zu Ihrer Studio-Marke passen.",
      keywords: ["Agentur Team-Bios Tool", "Kreativagentur Angebots-CV"],
    },
  },
  {
    _type: "industryPage",
    slug: "engineering-consulting",
    reader:
      "Ingenieurbüros für Bau, Tragwerk, TGA und Umwelt - extrem ausschreibungs- und CV-intensiv, insbesondere bei öffentlicher Beschaffung.",
    angle:
      "Die Ausschreibung kommt mit einem verpflichtenden CV-Formular in Anlage C: Qualifikationen, Kammereintragungen, dann Projektreferenzen mit Rollen, Auftragswerten und Daten - für 12 Ingenieure, einzureichen im Format des Auftraggebers, bis Freitag 12 Uhr. Die Referenzen existieren, verstreut über alte Angebote und die eigenen Word-Dateien der Ingenieure, die Hälfte davon beschreibt dasselbe Projekt auf drei verschiedene Arten. Kommt ein Konsortialpartner dazu, der seine CVs in noch einem anderen Layout schickt, verliert der Bid Manager zwei Tage ans Umformatieren statt an die technische Antwort.\n\nMagicCV hält die Qualifikationen, Eintragungen und Projektreferenzen jedes Ingenieurs als strukturierte Daten, einmal erfasst. Kommt eine Ausschreibung, mappt die KI die Profile gegen deren Anforderungen, holt die Referenzen nach vorn, die Punkte bringen, und exportiert jeden CV exakt in der Vorlage, die die Anlage vorschreibt - übersetzt, wo die Ausschreibung es verlangt, anonymisiert, wo blind bewertet wird. Die Rahmenvertragsverlängerung nächstes Jahr startet aus aktuellen Profilen, nicht aus einer Ausgrabung in der letzten Einreichung.",
    h1: "Rahmenvertragsverlängerungen und Konsortialangebote - ohne 12 Ingenieur-CVs von Hand neu zu bauen.",
    sub: "Qualifikationen, Eintragungen und Projektreferenzen einmal erfasst - exportiert im exakten Format, das jede Ausschreibungsanlage verlangt, in jeder Sprache.",
    keyPoints: [
      {
        title: "Das Anlagenformat wird erzeugt statt nachgebaut",
        body: "Richten Sie die vorgeschriebene CV-Struktur des Auftraggebers als Vorlage ein und exportieren Sie den CV jedes Ingenieurs direkt hinein, in Word oder PDF. Schreibt die nächste Ausschreibung eine andere Struktur vor, legen Sie eine Vorlage an - Sie formatieren nicht 12 Dokumente um.",
        screenshotAlt: "Ingenieur-CV exportiert im vorgeschriebenen Anlagenformat einer öffentlichen Ausschreibung, mit Eintragungs- und Referenzabschnitten in der geforderten Reihenfolge",
      },
      {
        title: "Projektreferenzen, die zu den Wertungskriterien passen",
        body: "Referenzen liegen als strukturierte Einträge vor - Rolle, Umfang, Auftragswert, Daten - wiederverwendbar über alle Angebote. Geben Sie die Ausschreibung hinein, und die KI holt pro Ingenieur die Referenzen nach vorn, die am besten zu dem passen, was die Prüfer werten - statt der immer gleichen drei Projekte.",
        screenshotAlt: "Referenzliste gefiltert auf Wasserinfrastrukturprojekte über 10 Mio. EUR, abgeglichen mit Ausschreibungskriterien",
      },
      {
        title: "Eintragungen dort, wo Prüfer sie suchen",
        body: "Kammerstatus und berufliche Eintragungen sind Felder auf dem Profil, an einer Stelle aktuell gehalten und exakt dort gerendert, wo jedes Ausschreibungsformat sie erwartet. Kein abgelaufenes Eintragungsdatum mehr, das erst beim Compliance-Check auffällt.",
        screenshotAlt: "Ingenieurprofil mit Kammerstatus und beruflichen Eintragungen samt Daten",
      },
      {
        title: "Blindbewertung und mehrsprachige Angebote aus demselben Profil",
        body: "Ein Klick anonymisiert einen CV für die Blindbewertung; die Übersetzung erzeugt die französische oder deutsche Version mit intaktem Layout. Beides kommt aus demselben Master-Profil - Sprachversionen driften nie vom Original weg.",
        screenshotAlt: "Anonymisierter Ingenieur-CV neben seiner französischen Übersetzung, beide im vorgeschriebenen Ausschreibungsformat",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Öffentliche Ausschreibungen schreiben eigene CV-Formulare vor. Kann MagicCV in diese exportieren?",
        answer:
          "Ja. Sie bilden die vorgeschriebene Struktur als Vorlage nach - Abschnittsreihenfolge, Tabellen, Feldbezeichnungen - und exportieren den CV jedes Ingenieurs direkt hinein. Büros, die in mehrere Rahmenverträge bieten, führen typischerweise eine Vorlage pro Auftraggeber neben dem Hausformat.",
      },
      {
        question: "Können wir die CVs unseres Konsortialpartners für ein gemeinsames Angebot importieren?",
        answer:
          "Ja. Laden Sie deren Word- oder PDF-CVs hoch, und sie werden wie Ihre eigenen in strukturierte Profile geparst - die CVs des ganzen Konsortiums exportieren in einem konsistenten, konformen Format. Zugriffsrechte halten Partnerprofile danach getrennt, wenn Sie das wollen.",
      },
      {
        question: "Wie funktioniert die Anonymisierung für Blindbewertungen?",
        answer:
          "Ein Klick entfernt Namen, Fotos und identifizierende Angaben, während Qualifikationen, Eintragungen und Referenzen intakt bleiben. Sie prüfen die blinde Version, bevor sie in die Einreichung geht, und das Master-Profil bleibt unangetastet.",
      },
      {
        question: "Wie pflegen wir eine Projektreferenz-Bibliothek über 50 Ingenieure?",
        answer:
          "Jede Referenz wird einmal als strukturierter Datensatz erfasst und über jedes Angebot und jeden Ingenieur wiederverwendet, auf den sie zutrifft. Wenn ein Projekt abschließt, tragen Sie es ein, solange die Details frisch sind - dann steht es für die Rahmenvertragsverlängerung zwei Jahre später bereit, statt aus dem Gedächtnis rekonstruiert zu werden.",
      },
      {
        question: "Wir bieten auf Deutsch, Französisch und Niederländisch. Bleibt das Format bei der Übersetzung erhalten?",
        answer:
          "Ja - CVs übersetzen in die Sprache der Ausschreibung, während das Layout der Vorlage intakt bleibt. Die übersetzte Version ist einreichungsfertig statt ein Neustart, und alle Sprachversionen generieren aus demselben Master-Profil.",
      },
      {
        question: "Öffentliche Auftraggeber prüfen den Datenumgang genau. Wo liegen unsere Daten?",
        answer:
          "EU-Datenresidenz, GDPR-by-Design, Audit-Logs und rollenbasierter Zugriff. Enterprise ergänzt SSO und einen AVV. SOC 2 ist in Arbeit - das Trust Center trägt den aktuellen Stand, den Sie in Ihren eigenen Compliance-Antworten referenzieren können.",
      },
      {
        question: "Ersetzt das unser HR-System?",
        answer:
          "Nein. Ihr HRIS verwaltet die Beschäftigung; MagicCV verwaltet die angebotsseitige Ebene - ausschreibungsfertige CVs, Eintragungen und Referenzen - die HR-Systeme nicht erzeugen. Beide koexistieren; MagicCV gehören die Dokumente, die in Einreichungen gehen.",
      },
      {
        question: "Was kostet das für ein Büro mit 60 Ingenieuren?",
        answer:
          "Pro kostet $50/Monat für 200 Profile und 600 generierte CVs - das deckt ein Büro dieser Größe über ein Ausschreibungsjahr bequem ab. Der Free-Plan (10 Profile, 30 CVs) erlaubt einen Pilot an einer laufenden Ausschreibung, und Enterprise ergänzt unbegrenzte Nutzung, SSO und einen AVV.",
      },
    ],
    related: [
      { label: "Beratungen im öffentlichen Sektor & Ausschreibungsgeschäft", href: "/solutions/public-sector" },
      { label: "CVs anonymisieren", href: "/use-cases/anonymize-cvs" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
    ],
    seo: {
      title: "MagicCV für Ingenieur- & Technikberatungen",
      description:
        "Standardisierte, belegbare Ingenieur-CVs mit Qualifikationen, Registrierungen und Projektreferenzen.",
      keywords: ["Ingenieur Ausschreibungs-CV", "Berater-CV für öffentliche Vergabe"],
    },
  },
  {
    _type: "industryPage",
    slug: "audit-advisory",
    reader:
      "Mittelständische Wirtschaftsprüfungs-, Steuer- und Advisory-Kanzleien, die auf RFPs sowie Panel- und Rahmenvertragsausschreibungen antworten.",
    angle:
      "Panel-Einreichungen und Mandatsangebote verlangen immer wieder dasselbe: qualifizierte Team-CVs mit der richtigen Branchenerfahrung, Qualifikationsdaten und regulatorischer Historie - und jedes Büro stellt sie anders zusammen. Das Hamburger Büro nutzt ein Layout, die Steuer-Practice ein anderes, und wenn mitten im Angebot ein Partner auf das Mandat rotiert, baut jemand um 20 Uhr dessen CV aus einer zwei Jahre alten Version nach. Für ein Haus, das Sorgfalt verkauft, sind inkonsistente Team-Referenzen vor einem Prüfungsausschuss ein schlechtes Bild.\n\nMagicCV hält ein Profil pro Partner und Professional - Qualifikationen, Branchenerfahrung, Mandatshistorie - getaggt und durchsuchbar über die ganze Kanzlei. Angebote ziehen zugeschnittene CVs, die die Branchen- und Regulierungserfahrung in den Vordergrund stellen, die das jeweilige Mandat verlangt, exportiert in der Kanzleivorlage - jedes Büro reicht dasselbe Haus ein. Rollenbasierter Zugriff und Audit-Logs sichern die Governance darüber, wer was sieht und ändert - der Standard, an dem Ihr eigenes Risk-Team das Tool messen wird.",
    h1: "Panel-Einreichungen mit denselben qualifizierten CVs aus jedem Büro, jedes Mal.",
    sub: "Ein kontrolliertes Profil pro Professional - Qualifikationen, Branchenerfahrung, Mandatshistorie - konsistent exportiert für jedes Angebot und jede Rahmenvertragseinreichung.",
    keyPoints: [
      {
        title: "Qualifikationen und Branchenerfahrung als durchsuchbare Daten",
        body: "Qualifikationen, Zulassungen und Branchen-Tags sind strukturierte Felder, keine Zeilen in einer Word-Datei. Braucht das Mandat einen Audit-Partner mit Financial-Services- und PIE-Erfahrung, antwortet die Suche in Sekunden - über jedes Büro hinweg, nicht nur das, das gerade das Angebot zusammenstellt.",
        screenshotAlt: "Kanzleiweite Suche gefiltert auf Audit-Partner mit Financial-Services- und PIE-Erfahrung, 5 Ergebnisse mit Qualifikations-Badges",
      },
      {
        title: "Jedes Angebot liest sich wie eine Kanzlei",
        body: "Alle CVs exportieren durch dieselbe Kanzleivorlage - egal wer sie zusammenstellt und wo die Person sitzt. Die Panel-Einreichung der Steuer-Practice und die RFP-Antwort von Advisory sehen nicht mehr aus, als kämen sie aus verschiedenen Häusern.",
        screenshotAlt: "Vier Professional-CVs aus verschiedenen Service Lines, gerendert in einer konsistenten Kanzleivorlage",
      },
      {
        title: "Governance, die Ihr Risk-Team akzeptiert",
        body: "Rollenbasierter Zugriff steuert, wer Profile sehen und bearbeiten darf, und Audit-Logs protokollieren jede Änderung mit Person und Zeitpunkt. Fragt jemand, wie CV-Daten kontrolliert werden, gibt es eine echte Antwort statt einer Vermutung über SharePoint-Berechtigungen.",
        screenshotAlt: "Audit-Log mit Profiländerungen samt Nutzer, Feld und Zeitstempel, daneben Einstellungen für rollenbasierten Zugriff",
      },
      {
        title: "Grenzüberschreitende Mandate in der Sprache des Kunden",
        body: "Übersetzen Sie jeden CV in die Arbeitssprache des Mandats, während die Kanzleivorlage intakt bleibt. Angebote über mehrere Länder brauchen keinen separaten Übersetzungsdurchgang pro Member Firm mehr.",
        screenshotAlt: "Advisory-Partner-CV in englischer und deutscher Version in identischem Kanzlei-Branding",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Können wir Berufsqualifikationen und Zulassungsdaten auf jedem Profil nachhalten?",
        answer:
          "Ja - Qualifikationen sind strukturierte Felder mit Daten, einmal aktualisiert und in jedem danach generierten CV korrekt ausgewiesen. Das beendet das Gehetze vor der Einreichung, um zu bestätigen, wessen Qualifikationen korrekt angegeben sind.",
      },
      {
        question: "Wie wird der Zugriff auf Professional-Daten in der Kanzlei kontrolliert?",
        answer:
          "Rollenbasierter Zugriff definiert, wer Profile sehen, bearbeiten und exportieren darf - Angebots-Teams können zum Beispiel CVs generieren, ohne Bearbeitungsrechte an den zugrunde liegenden Daten. Audit-Logs protokollieren jede Änderung, was die meisten internen Risk-Reviews zufriedenstellt.",
      },
      {
        question: "Ist MagicCV SOC-2-zertifiziert?",
        answer:
          "Die SOC-2-Zertifizierung ist in Arbeit, nicht abgeschlossen - wir behaupten nichts anderes. Was heute steht: GDPR-by-Design-Architektur, EU-Datenresidenz, Audit-Logs, rollenbasierter Zugriff sowie SSO und ein AVV im Enterprise-Plan. Den aktuellen Stand trägt das Trust Center.",
      },
      {
        question: "Wo liegen die Daten, und gibt es einen AVV?",
        answer:
          "Die Daten liegen in der EU, mit GDPR-by-Design-Verarbeitung. Ein AVV ist Teil des Enterprise-Plans, ebenso wie SSO - die üblichen Anforderungen, wenn die eigene Compliance-Funktion einer Kanzlei ein neues Tool prüft.",
      },
      {
        question: "Wie migrieren wir CVs, die auf den Laufwerken der einzelnen Büros liegen?",
        answer:
          "Laden Sie sie als Word oder PDF hoch, und MagicCV parst jede Datei in ein strukturiertes Profil. Der realistische Weg ist eine Practice Group nach der anderen: importieren, die Professionals ihr eigenes Profil per Chat-Editing bestätigen lassen, dann die Angebote dieser Gruppe umstellen.",
      },
      {
        question: "Können wir die bestehende CV-Vorlage unserer Kanzlei behalten?",
        answer:
          "Ja. Ihre Vorlage wird einmal nachgebaut - Layout, Typografie, Abschnittsreihenfolge - und jeder Export entspricht ihr in Word oder PDF. Kanzleien in Netzwerken führen oft die Netzwerk-Standardvorlage neben der lokalen.",
      },
      {
        question: "Worin unterscheidet sich das von unserem ATS oder HR-System?",
        answer:
          "Diese Systeme verwalten Recruiting und Beschäftigung; keines erzeugt einen angebotsfertigen Partner-CV. MagicCV ist CV-Management-Software für die kundenseitige Ebene - die qualifizierten Team-Seiten, die in Panel-Einreichungen, RFPs und Mandatsschreiben gehen.",
      },
      {
        question: "Wie sieht die Preisgestaltung für eine Kanzlei mit 100 Personen aus?",
        answer:
          "Pro für $50/Monat umfasst 200 Profile und 600 generierte CVs, was für die meisten mittelständischen Kanzleien passt. Enterprise ist individuell bepreist für unbegrenzte Nutzung, SSO und einen AVV - typischerweise die Wahl von Kanzleien mit mehreren Büros, sobald Risk und IT freigegeben haben.",
      },
    ],
    related: [
      { label: "Für HR- / People-Ops-Teams", href: "/solutions/hr" },
      { label: "Zentrale Profile & Skills", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV für Wirtschaftsprüfung, Steuern & Advisory",
      description:
        "Stellen Sie für jedes Mandat die richtige Branchen- und Regulierungserfahrung heraus - mit integrierter Governance und Konsistenz.",
      keywords: ["Advisory Angebots-CV", "CV-Tool Wirtschaftsprüfung"],
    },
  },
  {
    _type: "industryPage",
    slug: "public-sector",
    reader: "Unternehmen, die intensiv auf EU- und Behördenausschreibungen sowie Rahmenverträge bieten (disziplinunabhängig).",
    angle:
      "In der öffentlichen Beschaffung ist der CV zuerst ein Compliance-Artefakt und dann ein Verkaufsdokument. Die Ausschreibung schreibt eine CV-Vorlage in der Anlage vor, deckelt Seitenzahlen, verlangt blinde Versionen für die Bewertung und will die Einreichung in zwei Sprachen - und ein einziger nicht konformer CV kann ein sonst gewinnendes Angebot aus der Wertung nehmen. Teams, die in Rahmenverträge bieten, kennen den Ablauf: dieselben 15 Experten, für jeden Abruf erneut umformatiert, die Anonymisierung von Hand in Word erledigt und doppelt geprüft, weil niemand Suchen-und-Ersetzen traut.\n\nMagicCV behandelt diese Anforderungen als Normalfall, nicht als Ausnahme. Master-Profile exportieren in jede standardisierte Vorlage, die der Auftraggeber vorschreibt; Anonymisierung ist ein Klick, kein Abend; die Übersetzung nach DE, FR, NL oder in jede Ausschreibungssprache lässt das Layout intakt. Darunter sorgen GDPR-by-Design und EU-Datenresidenz dafür, dass das Tool, das die personenbezogenen Daten Ihrer Experten hält, derselben Prüfung standhält wie Ihr Angebot.",
    h1: "Bestehen Sie den CV-Compliance-Check beim ersten Mal, in jeder Ausschreibung.",
    sub: "Standardisierte Vorlagen, Blind-CVs mit einem Klick, mehrsprachige Ausgabe und GDPR-by-Design - der CV-Workflow, den EU- und Behördenbeschaffung tatsächlich verlangt.",
    keyPoints: [
      {
        title: "Die vorgeschriebene Vorlage des Auftraggebers - exportiert, nicht imitiert",
        body: "Bilden Sie die geforderte CV-Struktur der Ausschreibung als Vorlage nach - EU-Standardformate inklusive - und exportieren Sie den CV jedes Experten direkt hinein. Compliance-Checks fördern keine Formatabweichungen mehr zutage, ausgerechnet im schlechtesten Moment.",
        screenshotAlt: "Experten-CV exportiert in der vorgeschriebenen standardisierten Vorlage einer EU-Ausschreibung mit geforderter Abschnittsreihenfolge",
      },
      {
        title: "Blind-CVs mit einem Klick, nicht in einem Abend",
        body: "Die Anonymisierung entfernt Namen, Fotos und identifizierende Angaben in einem Schritt, während Qualifikationen und Projektnachweise erhalten bleiben. Der blinde Satz für die Bewertung und der benannte Satz für den Vertragsschluss kommen aus denselben Profilen - sie können sich nicht widersprechen.",
        screenshotAlt: "Benannter CV und seine anonymisierte Version für die Blindbewertung nebeneinander",
      },
      {
        title: "Jede Ausschreibungssprache aus einem Master-Profil",
        body: "Generieren Sie die DE-, FR- oder NL-Version jedes CVs mit unangetastetem Layout. Zweisprachige Einreichungen verdoppeln die Vorbereitung nicht mehr, und die Sprachversionen bleiben synchron, weil sie eine Quelle teilen.",
        screenshotAlt: "Ein Experten-CV in deutscher, französischer und niederländischer Version im selben standardisierten Format",
      },
      {
        title: "Datenverarbeitung, die der Prüfung des Auftraggebers standhält",
        body: "EU-Datenresidenz, GDPR-by-Design-Verarbeitung, Audit-Logs und rollenbasierter Zugriff - Antworten, die Sie zitieren können, wenn der Fragebogen des Auftraggebers wissen will, wie Expertendaten gehandhabt werden. Enterprise ergänzt SSO und einen AVV.",
        screenshotAlt: "Trust-Einstellungen mit EU-Datenresidenz, Audit-Log und Zugriffskontrollen für einen Public-Sector-Workspace",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Kann MagicCV CVs in den standardisierten Formaten erzeugen, die EU-Ausschreibungen vorschreiben?",
        answer:
          "Ja - vorgeschriebene Strukturen werden als Vorlagen eingerichtet, und jeder CV exportiert direkt hinein, in Word oder PDF. Unternehmen, die in mehrere Rahmenverträge bieten, führen eine Vorlage pro Auftraggeber - das richtige Format ist eine Auswahl, kein Neubau.",
      },
      {
        question: "Was genau entfernt die Anonymisierung?",
        answer:
          "Namen, Fotos, Kontaktdaten und identifizierende Referenzen, während Qualifikationen, Erfahrung und Projektnachweise intakt bleiben. Sie prüfen den Blind-CV vor der Einreichung, und das benannte Master-Profil wird nie verändert.",
      },
      {
        question: "Hält die Übersetzung formellen Ausschreibungseinreichungen stand?",
        answer:
          "Übersetzungen lassen das vorgeschriebene Layout intakt und generieren aus strukturierten Profildaten - das vermeidet die Drift, die entsteht, wenn Sprachversionen als separate Word-Dateien gepflegt werden. Bei Einreichungen mit hohem Einsatz lassen die meisten Teams einen Muttersprachler final lesen - der Punkt ist: prüfen, nicht abtippen.",
      },
      {
        question: "Wo werden die personenbezogenen Daten unserer Experten gespeichert?",
        answer:
          "In der EU, mit GDPR-by-Design-Verarbeitung, Audit-Logs und rollenbasiertem Zugriff. Enterprise enthält SSO und einen AVV. Das Trust Center trägt das aktuelle, faktische Bild - inklusive des SOC-2-Status, der in Arbeit ist.",
      },
      {
        question: "Wir reichen dieselben Experten für jeden Rahmenvertragsabruf erneut ein. Wird das einfacher?",
        answer:
          "Deutlich. Master-Profile bleiben zwischen den Abrufen aktuell - auf einen Miniwettbewerb zu antworten heißt: Experten auswählen, die Vorlage des Rahmenvertrags anwenden, prüfen. Statt die Word-Dateien vom letzten Quartal wiederzubeleben und jedes Datum neu zu kontrollieren.",
      },
      {
        question: "Können wir CVs von Konsortial- oder Subunternehmer-Experten verwalten?",
        answer:
          "Ja - laden Sie deren CVs in beliebigem Format hoch, und sie werden zu strukturierten Profilen neben Ihren eigenen, exportiert in derselben konformen Vorlage. Zugriffsrechte halten externe Profile außerhalb des Angebots abgeschottet, wenn nötig.",
      },
      {
        question: "Was passiert, wenn wir mitten in einer Ausschreibung die Plan-Limits überschreiten?",
        answer:
          "Free umfasst 10 Profile und 30 CVs; Pro ($50/Monat) umfasst 200 Profile und 600 CVs, was für die meisten Unternehmen eine intensive Ausschreibungssaison abfängt. Enterprise hebt die Limits auf und ergänzt SSO und einen AVV - passend, wo Vergabevolumen oder IT-Richtlinie es verlangen.",
      },
    ],
    related: [
      { label: "CVs anonymisieren", href: "/use-cases/anonymize-cvs" },
      { label: "Mehrsprachigkeit & Übersetzung", href: "/features/multilingual" },
      { label: "Trust Center", href: "/trust" },
      { label: "Ingenieur- & Technikberatung", href: "/solutions/engineering-consulting" },
    ],
    seo: {
      title: "MagicCV für den öffentlichen Sektor & ausschreibungsgetriebene Beratungen",
      description:
        "Standardisierte Vorlagen, Anonymisierung, mehrsprachige Ausgabe und GDPR-by-Design für EU- und Behördenbeschaffung.",
      keywords: ["EU-Ausschreibung CV-Format", "Vergabeverfahren CV-Tool", "anonymisierter CV für Ausschreibungen"],
    },
  },
  {
    _type: "industryPage",
    slug: "staffing-agencies",
    reader:
      "Spezialisierte (nicht auf Massengeschäft ausgerichtete) Personal- und Talentagenturen, die Fachkräfte vermitteln und Kandidaten-CVs bei Kunden einreichen.",
    angle:
      "Der Word-CV eines Kandidaten kommt um 16 Uhr an. Der Kunde will die Einreichung in seinem Format - gebrandet, blind, zwei Seiten - bis morgen früh, und das ist der dritte Kunde diese Woche mit einer anderen Vorlage. Also verbringt der Recruiter den Abend mit Umformatieren statt mit Sourcing, und die Einreichung geht trotzdem mit dem Kandidatennamen in einer Kopfzeile raus, die jemand vergessen hat zu prüfen. In der spezialisierten Vermittlung ist die Einreichung das Produkt, das der Kunde tatsächlich sieht; wirkt sie gehetzt, wirkt die Agentur austauschbar.\n\nMagicCV macht aus dem eingehenden CV in einem Import ein strukturiertes Kandidatenprofil - Word, PDF oder LinkedIn. Von dort ist die kundenformatierte, agenturgebrandete Einreichung ein Export: Vorlage des Kunden wählen, Ein-Klick-Anonymisierung anwenden, wenn das Verfahren blind ist, übersetzen, wenn die Rolle in einem anderen Markt sitzt. Die Kandidatendatenbank darunter bleibt nach Skills, Branche und Sprache durchsuchbar - das nächste Briefing startet bei Kandidaten, die Sie schon haben, nicht bei einer frischen LinkedIn-Suche.",
    h1: "Kundenfertige Kandidaten-Einreichungen noch am selben Tag, im Format jedes Kunden.",
    sub: "Importieren Sie jeden Kandidaten-CV, exportieren Sie eine gebrandete, blind-fähige Einreichung im exakten Format jedes Kunden - und behalten Sie darunter eine durchsuchbare Kandidatendatenbank.",
    keyPoints: [
      {
        title: "Vom rohen CV zur Kundeneinreichung in Minuten",
        body: "Importieren Sie den CV des Kandidaten, wie er ankommt, und exportieren Sie ihn im geforderten Einreichungsformat des Kunden, unter der Marke Ihrer Agentur. Die abendliche Umformatierungssitzung wird zu einem Prüfdurchgang, und Vorlagen pro Kunde machen das Format des dritten Kunden zu einer Dropdown-Auswahl, nicht zu einem Neubau.",
        screenshotAlt: "Roher Kandidaten-CV neben demselben Kandidaten, exportiert als zweiseitige gebrandete Kundeneinreichung",
      },
      {
        title: "Blindeinreichungen ohne das Suchen-und-Ersetzen-Ritual",
        body: "Ein Klick entfernt Namen, Fotos und Kontaktdaten, während die Erfahrungsnachweise erhalten bleiben, die der Kunde für die Shortlist braucht. Kein manuelles Säubern von Kopfzeilen und Dateieigenschaften mehr, in der Hoffnung, dass nichts durchgerutscht ist.",
        screenshotAlt: "Anonymisierte Kandidaten-Einreichung mit entfernten identifizierenden Angaben und intakter Skills-Zusammenfassung",
      },
      {
        title: "Eine Kandidatendatenbank, die Sie wirklich durchsuchen können",
        body: "Jeder importierte CV wird zu einem strukturierten Profil, durchsuchbar nach Skills, Branche, Sprachen und Zertifizierungen. Wenn ein Kunde eine Rolle brieft, ist der erste Durchgang eine Suche unter Kandidaten, die Sie schon kennen - oft schneller als Sourcing von null.",
        screenshotAlt: "Kandidatendatenbank gefiltert auf SAP-Berater mit Deutsch, 9 Profile mit Skill- und Sprach-Tags",
      },
      {
        title: "Grenzüberschreitende Vermittlungen in der Sprache des Kunden",
        body: "Übersetzen Sie den CV eines Kandidaten in die Sprache des Kunden, mit intaktem Einreichungslayout. Einen Entwickler aus Warschau bei einem deutschen Kunden zu platzieren braucht keinen externen Übersetzungsschritt mehr auf einer 24-Stunden-Uhr.",
        screenshotAlt: "Kandidaten-Einreichung in englischer und deutscher Version im selben agenturgebrandeten Format",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Ist MagicCV für volumenstarkes Massenrecruiting geeignet?",
        answer:
          "Nein, und das sagen wir lieber vorab. MagicCV ist für die spezialisierte Vermittlung von Fach- und Führungskräften gebaut, bei der jede Einreichung zugeschnitten ist und die CV-Qualität das Honorar beeinflusst. Wenn Sie hunderte nahezu identische CVs pro Woche bewegen, dient Ihnen ein Volumen-Tool besser.",
      },
      {
        question: "Ersetzt MagicCV unser ATS?",
        answer:
          "Nein - Ihr ATS behält Pipeline, Phasen und Kundendaten. MagicCV übernimmt die Dokumentebene, in der das ATS schwach ist: rohe CVs in polierte, kundenformatierte, blind-fähige Einreichungen zu verwandeln. CVs wandern als Word- oder PDF-Dateien zwischen beiden.",
      },
      {
        question: "Können wir pro Kunde eine eigene Einreichungsvorlage einrichten?",
        answer:
          "Ja. Das geforderte Format jedes Kunden - Branding, Struktur, Seitenzahl - lebt als eigene Vorlage, und der Export dorthin ist eine Auswahl. Agenturen mit MSP- oder Enterprise-Accounts mit strengen Einreichungsvorgaben führen typischerweise eine Vorlage pro Account.",
      },
      {
        question: "Wie zuverlässig ist die Anonymisierung für Blindeinreichungen?",
        answer:
          "Sie ist systematisch statt manuell: Namen, Fotos und Kontaktdaten werden aus den strukturierten Profildaten entfernt, nicht in einem Dokument übermalt - es gibt keine Kopfzeile und keine Dateieigenschaft, in der sich ein Name verstecken könnte. Sie prüfen trotzdem vor dem Versand - es ist Ihre Kundenbeziehung.",
      },
      {
        question: "Wie handhaben wir Kandidatendaten unter der DSGVO?",
        answer:
          "MagicCV ist GDPR-by-Design mit EU-Datenresidenz, Audit-Logs und rollenbasiertem Zugriff - relevant, wenn Sie tausende Kandidatenprofile halten, die Sie nicht beschäftigen. Profile lassen sich sauber löschen, wenn die Einwilligung abläuft, und Enterprise ergänzt einen AVV.",
      },
      {
        question: "Können wir Kandidaten aus LinkedIn importieren?",
        answer:
          "Ja - LinkedIn-Profilexporte importieren genauso wie Word- und PDF-CVs und werden in strukturierte Profile geparst. Das beendet den Copy-Paste-Schritt zwischen einem gesourcten Profil und einer präsentablen Einreichung.",
      },
      {
        question: "Unsere Kandidatendatenbank wächst schnell. Wo liegen die Limits?",
        answer:
          "Free umfasst 10 Profile und 30 CVs - genug, um den Einreichungs-Workflow an laufenden Rollen zu testen. Pro ($50/Monat) umfasst 200 Profile und 600 CVs, was zu einem spezialisierten Desk mit Fokus auf aktive Kandidaten passt. Agenturen mit größeren Pools wechseln zu Enterprise für unbegrenzte Profile, SSO und einen AVV.",
      },
    ],
    note: "MagicCV ist für die spezialisierte Vermittlung von Fach- und Führungskräften gebaut - Rollen, die über die Qualität der Einreichung gewonnen werden - nicht für volumenstarkes Massenrecruiting.",
    related: [
      { label: "CVs anonymisieren", href: "/use-cases/anonymize-cvs" },
      { label: "CVs zentralisieren & standardisieren", href: "/use-cases/centralize-cvs" },
      { label: "Für Recruitment-Teams", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV für spezialisierte Personal- & Talentagenturen",
      description:
        "Formatieren, branden und anonymisieren Sie Kandidatenprofile für jede Kundeneinreichung - in Minuten, in jeder Sprache.",
      keywords: ["Personalagentur CV-Formatierung", "Kandidaten-CV Anonymisierungstool"],
    },
  },
];
