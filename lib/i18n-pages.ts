import type { Locale } from "./i18n";

/**
 * Template + standalone-page strings for localized routes. Content data
 * (features/use-cases/roles/industries/comparisons) lives in
 * lib/content/i18n/<locale>/ - this file covers the surrounding UI copy.
 * EN_TEMPLATE keeps the English defaults so the shared templates behave
 * identically for the unprefixed (EN) routes.
 */

export interface TemplateStrings {
  breadcrumbFeatures: string;
  breadcrumbUseCases: string;
  breadcrumbSolutions: string;
  breadcrumbComparisons: string;
  whatItDoes: string;
  whyItMatters: string;
  connects: string;
  faqTitle: string;
  relatedTitle: string;
  problemToday: string;
  howMagiccvDoesIt: string;
  outcome: string;
  whereStrong: string; // contains {x}
  whereDiffers: string;
  sideBySide: string;
  whoShouldChoose: string;
  roiTitle: string;
  learnMore: string;
}

export interface DemoFormStrings {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  selectRole: string;
  roleOptions: string[];
  firmSize: string;
  selectFirmSize: string;
  employees: string;
  useCaseLegend: string;
  useCaseOptions: string[];
  message: string;
  submit: string;
  thanksTitle: string;
  thanksPre: string;
  thanksLink: string;
  thanksPost: string;
}

export interface PageDict {
  template: TemplateStrings;
  featuresHub: { seoTitle: string; seoDesc: string; title: string; sub: string };
  useCasesHub: { seoTitle: string; seoDesc: string; title: string; sub: string };
  compareHub: { seoTitle: string; seoDesc: string; title: string; sub: string; pickTitle: string; summaryLabel: string };
  demo: {
    seoTitle: string;
    seoDesc: string;
    h1: string;
    sub: string;
    expectations: string[];
    preferPre: string;
    preferLink: string;
    preferPost: string;
    gdprLine: string;
    form: DemoFormStrings;
  };
  trust: {
    seoTitle: string;
    seoDesc: string;
    h1: string;
    sub: string;
    cards: { title: string; body: string }[];
    certTitle: string;
    certLead: string;
    certBody: string;
    subprocTitle: string;
    subprocBody: string;
    secTitle: string;
    secBody: string;
    secCta: string;
  };
  about: {
    seoTitle: string;
    seoDesc: string;
    h1: string;
    paras: string[];
    noteTitle: string;
    noteParas: string[];
    noteBy: string;
    noteWhere: string;
    touchTitle: string;
    touchPre: string;
    touchLink: string;
    touchPost: string;
  };
  testimonial: { quote: string; name: string; role: string; firm: string; initials: string };
}

export const EN_TEMPLATE: TemplateStrings = {
  breadcrumbFeatures: "Features",
  breadcrumbUseCases: "Use cases",
  breadcrumbSolutions: "Solutions",
  breadcrumbComparisons: "Comparisons",
  whatItDoes: "What it does",
  whyItMatters: "Why it matters",
  connects: "How this connects",
  faqTitle: "Frequently asked questions",
  relatedTitle: "Related",
  problemToday: "The problem today",
  howMagiccvDoesIt: "How MagicCV does it",
  outcome: "Outcome",
  whereStrong: "Where {x} is strong",
  whereDiffers: "Where MagicCV is different",
  sideBySide: "Side by side",
  whoShouldChoose: "Who should choose which",
  roiTitle: "What is the status quo costing you?",
  learnMore: "Learn more",
};

const de: PageDict = {
  template: {
    breadcrumbFeatures: "Funktionen",
    breadcrumbUseCases: "Anwendungsfälle",
    breadcrumbSolutions: "Lösungen",
    breadcrumbComparisons: "Vergleiche",
    whatItDoes: "Was es macht",
    whyItMatters: "Warum es zählt",
    connects: "So hängt es zusammen",
    faqTitle: "Häufige Fragen",
    relatedTitle: "Verwandt",
    problemToday: "Das Problem heute",
    howMagiccvDoesIt: "So macht es MagicCV",
    outcome: "Ergebnis",
    whereStrong: "Wo {x} stark ist",
    whereDiffers: "Wo MagicCV anders ist",
    sideBySide: "Im direkten Vergleich",
    whoShouldChoose: "Wer sollte was wählen",
    roiTitle: "Was kostet Sie der Status quo?",
    learnMore: "Mehr erfahren",
  },
  featuresHub: {
    seoTitle: "CV-Management-Software: alle Funktionen",
    seoDesc: "Alles, damit CVs Aufträge gewinnen: RFP-to-CV-Reasoning, Marken-Templates, Anonymisierung, Mehrsprachigkeit und zentrale Profile.",
    title: "Alles, damit CVs Aufträge gewinnen.",
    sub: "Fünf Fähigkeiten, ein Workflow - vom Lesen des Briefs bis zum abgabefertigen, markenkonformen CV-Paket.",
  },
  useCasesHub: {
    seoTitle: "Lebenslauf-Verwaltung in der Praxis: Anwendungsfälle",
    seoDesc: "Was auch immer ansteht - zuschneiden, bündeln, zentralisieren, anonymisieren oder übersetzen - so macht es MagicCV.",
    title: "Was immer Sie mit einem CV vorhaben - MagicCV kann es.",
    sub: "Fünf Aufgaben, dieselbe zugrunde liegende Logik und Profildaten.",
  },
  compareHub: {
    seoTitle: "MagicCV vs. Alternativen - ehrliche Vergleiche",
    seoDesc: "Faire, faktenbasierte Vergleiche von MagicCV mit Flowcase, Cinode, Napta und weiteren - inklusive Nichtstun.",
    title: "So schlägt sich MagicCV im Vergleich.",
    sub: "Faire, faktenbasierte Vergleiche - auch dort, wo die Alternative wirklich gewinnt.",
    pickTitle: "Vergleich auswählen",
    summaryLabel: "Alternativen (Überblick)",
  },
  demo: {
    seoTitle: "MagicCV-Demo buchen",
    seoDesc: "Sehen Sie MagicCV mit Ihren eigenen Consultants - von unordentlichen CVs zum markenkonformen Paket. 30 Minuten, keine Folien.",
    h1: "Sehen Sie MagicCV mit Ihren eigenen Consultants.",
    sub: "30 Minuten, keine Folien - wir führen Ihr Szenario live vor, von unordentlichen CVs zum markenkonformen Paket.",
    expectations: [
      "Wir gehen Ihren aktuellen CV-/Angebotsprozess durch",
      "Ein Live-Durchlauf mit Ihrem Szenario - Kundenvorstellung, Angebot oder komplettes Paket",
      "Transparente Preise - keine Überraschungen nach dem Gespräch",
    ],
    preferPre: "Lieber direkt ausprobieren? ",
    preferLink: "Mit dem Free-Plan starten",
    preferPost: " - 10 Profile und 30 CVs, ohne Kreditkarte.",
    gdprLine: "DSGVO-konform, EU-Datenresidenz",
    form: {
      fullName: "Vollständiger Name",
      workEmail: "Geschäftliche E-Mail",
      company: "Unternehmen",
      role: "Rolle",
      selectRole: "Rolle auswählen",
      roleOptions: ["Bid-/Proposal-Manager", "Head of Ops/COO", "Managing Partner", "IT/Security", "Andere"],
      firmSize: "Firmengröße",
      selectFirmSize: "Firmengröße auswählen",
      employees: "Mitarbeitende",
      useCaseLegend: "Primärer Anwendungsfall",
      useCaseOptions: [
        "CVs auf jeden Brief zuschneiden",
        "Angebotsfertiges CV-Paket erstellen",
        "CVs zentralisieren & standardisieren",
        "CVs anonymisieren",
        "CVs in jede Sprache übersetzen",
      ],
      message: "Nachricht (optional)",
      submit: "Demo anfragen",
      thanksTitle: "Danke - wir melden uns in Kürze.",
      thanksPre: "Nicht warten wollen? Sie können auch direkt ",
      thanksLink: "kostenlos starten",
      thanksPost: ".",
    },
  },
  trust: {
    seoTitle: "MagicCV Trust & Sicherheit - DSGVO, Datenresidenz, SSO",
    seoDesc: "DSGVO by Design, EU-Datenresidenz, SSO, Audit-Logs - ein faktenbasiertes, aktuelles Bild der Sicherheitslage von MagicCV.",
    h1: "Vertrauen & Sicherheit - faktenbasiert und aktuell.",
    sub: "Gebaut für die Prüftiefe, mit der europäische Beratungen einkaufen. Keine übertriebenen Zertifizierungen - was live ist, ist live, und Roadmap ist klar als Roadmap markiert.",
    cards: [
      { title: "DSGVO by Design", body: "Die Datenverarbeitung ist von Grund auf um DSGVO-Anforderungen herum gebaut - nicht nachgerüstet. Anonymisierung, Zugriffskontrolle und Aufbewahrung sind Kernbestandteile, keine Add-ons." },
      { title: "EU-Datenresidenz", body: "Consultant- und Firmendaten liegen in EU-Infrastruktur - im Einklang mit den Erwartungen europäischer Beratungs- und Professional-Services-Firmen." },
      { title: "SSO & rollenbasierter Zugriff", body: "In Enterprise verfügbar: Single Sign-on und rollenbasierte Zugriffskontrolle, damit Firmen genau steuern, wer Consultant-Daten sieht und bearbeitet." },
      { title: "Audit-Logs", body: "Änderungen an Profilen und CV-Exporten nachvollziehen - HR und People Ops sehen, wer wann was geändert hat." },
      { title: "AVV-Vorlage", body: "Eine Auftragsverarbeitungsvereinbarung ist auf Anfrage verfügbar - wir senden die aktuelle Version zur Prüfung durch Ihre Rechtsabteilung." },
      { title: "Löschung & Aufbewahrung", body: "Consultant- und Firmendaten können auf Anfrage gelöscht werden, im Einklang mit den Betroffenenrechten der DSGVO. Vollständige Dokumentation auf Anfrage." },
    ],
    certTitle: "Zertifizierungen",
    certLead: "SOC 2 Type I - in Arbeit (geplant).",
    certBody: " Es steht auf unserer Roadmap; diese Seite wird aktualisiert, sobald es erreicht ist. Wir behaupten keine Zertifizierung, bevor sie real ist.",
    subprocTitle: "Subprozessoren",
    subprocBody: "Unsere aktuelle Subprozessoren-Liste ist auf Anfrage verfügbar und wird hier veröffentlicht. Fragen Sie uns - wir senden die aktuelle Liste zur Prüfung.",
    secTitle: "Sie brauchen einen ausgefüllten Sicherheitsfragebogen?",
    secBody: "Wir arbeiten den Fragebogen Ihres IT-/Security-Teams direkt durch - kein generisches Trust-Center-PDF nötig.",
    secCta: "Security-Review anfragen",
  },
  about: {
    seoTitle: "Über MagicCV",
    seoDesc: "Warum wir MagicCV gebaut haben - und was eine KI-native, EU-native Plattform für Angebots-CVs für den Mittelstand bedeutet.",
    h1: "Warum wir MagicCV gebaut haben.",
    paras: [
      "Beratungs- und Professional-Services-Firmen gewinnen Geschäft über schriftliche Angebote - und verlieren bei jedem Angebot Stunden an dasselbe unglamouröse Problem: Consultants nach aktuellen CVs jagen, von Hand formatieren und hoffen, dass das Ergebnis wie eine Firma wirkt.",
      "Diese Arbeit braucht kein zusätzliches Personal und keine Template-Bibliothek. Sie erfordert, beim Brief anzufangen - zu verstehen, was der RFP des Kunden wirklich verlangt - und zu überlegen, welche echte Erfahrung darauf antwortet, bevor irgendetwas formatiert wird.",
      "Wir glauben außerdem: Für Europa gebaut zu sein ist ein Feature, keine Einschränkung. Mehrsprachige Ausgabe, DSGVO by Design und EU-Datenresidenz sind keine nachgereichten Checkboxen - sie sind die Grundanforderungen der mittelständischen europäischen Firmen, für die wir bauen.",
    ],
    noteTitle: "Eine Notiz des Gründungsteams",
    noteParas: [
      "Wir haben Jahre in Beratungs- und Professional-Services-Teams verbracht, und der Angebots-Crunch war immer derselbe: Die Strategie stand, die Leute waren richtig - und dann verschwand ein ganzer Abend im Jagen und Formatieren von CVs vor der Deadline.",
      "MagicCV ist das Tool, das wir uns gewünscht hätten - eines, das beim Brief anfängt, die Wahrheit der Erfahrung jedes Einzelnen respektiert und die Zeit an die Arbeit zurückgibt, die Angebote wirklich gewinnt. Es zuerst für Europa zu bauen, mit DSGVO und mehreren Sprachen im Kern, ist für uns keine Einschränkung. Es ist der Punkt.",
    ],
    noteBy: "Das MagicCV-Gründungsteam",
    noteWhere: "Amsterdam & Lviv",
    touchTitle: "Kontakt",
    touchPre: "Fragen, Feedback oder Presseanfragen - erreichen Sie uns über ",
    touchLink: "das Demo-Formular",
    touchPost: ", wir leiten es an die richtige Person weiter.",
  },
  testimonial: {
    quote: "Das RFP-to-CV-Reasoning hat mich am meisten überrascht. Es hebt genau die Projekte hervor, die zum Brief passen - statt eines generischen Profil-Dumps.",
    name: "Tomas Lindqvist",
    role: "Head of Delivery",
    firm: "Lindqvist & Co",
    initials: "TL",
  },
};

const fr: PageDict = {
  template: {
    breadcrumbFeatures: "Fonctionnalités",
    breadcrumbUseCases: "Cas d'usage",
    breadcrumbSolutions: "Solutions",
    breadcrumbComparisons: "Comparatifs",
    whatItDoes: "Ce que ça fait",
    whyItMatters: "Pourquoi c'est important",
    connects: "Comment tout s'articule",
    faqTitle: "Questions fréquentes",
    relatedTitle: "À voir aussi",
    problemToday: "Le problème aujourd'hui",
    howMagiccvDoesIt: "Comment MagicCV s'y prend",
    outcome: "Résultat",
    whereStrong: "Là où {x} est fort",
    whereDiffers: "Là où MagicCV se distingue",
    sideBySide: "Côte à côte",
    whoShouldChoose: "Qui devrait choisir quoi",
    roiTitle: "Que vous coûte le statu quo ?",
    learnMore: "En savoir plus",
  },
  featuresHub: {
    seoTitle: "Logiciel de gestion de CV : fonctionnalités",
    seoDesc: "Tout pour que vos CV remportent des missions : raisonnement RFP-to-CV, templates de marque, anonymisation, multilingue et profils centralisés.",
    title: "Tout pour que vos CV remportent des missions.",
    sub: "Cinq capacités, un seul workflow - de la lecture du brief au dossier de CV prêt à soumettre, à votre image.",
  },
  useCasesHub: {
    seoTitle: "Gestion des CV en pratique : cas d'usage",
    seoDesc: "Quel que soit le besoin - adapter, assembler, centraliser, anonymiser ou traduire des CV - voici comment MagicCV s'y prend.",
    title: "Quoi que vous vouliez faire d'un CV, MagicCV le fait.",
    sub: "Cinq missions, la même logique sous-jacente et les mêmes données de profil.",
  },
  compareHub: {
    seoTitle: "MagicCV vs alternatives - comparatifs honnêtes",
    seoDesc: "Comparatifs équitables et factuels de MagicCV face à Flowcase, Cinode, Napta et d'autres - y compris ne rien faire.",
    title: "Comment MagicCV se compare.",
    sub: "Des comparatifs équitables et factuels - y compris là où l'alternative gagne vraiment.",
    pickTitle: "Choisir un comparatif",
    summaryLabel: "Alternatives (synthèse)",
  },
  demo: {
    seoTitle: "Réserver une démo MagicCV",
    seoDesc: "Voyez MagicCV sur vos propres consultants - de CV en désordre à un dossier à votre image. 30 minutes, sans slides.",
    h1: "Voyez MagicCV sur vos propres consultants.",
    sub: "30 minutes, sans slides - nous déroulons votre scénario en direct, de CV en désordre à un dossier à votre image.",
    expectations: [
      "Nous passons en revue votre processus CV / propositions actuel",
      "Un déroulé en direct sur votre scénario - présentation client, appel d'offres ou dossier complet",
      "Des tarifs transparents - aucune surprise après l'appel",
    ],
    preferPre: "Vous préférez essayer directement ? ",
    preferLink: "Commencez avec l'offre gratuite",
    preferPost: " - 10 profils et 30 CV, sans carte bancaire.",
    gdprLine: "Conforme RGPD, résidence des données en UE",
    form: {
      fullName: "Nom complet",
      workEmail: "E-mail professionnel",
      company: "Entreprise",
      role: "Rôle",
      selectRole: "Sélectionnez un rôle",
      roleOptions: ["Responsable propositions/appels d'offres", "Head of Ops/COO", "Managing Partner", "IT/Sécurité", "Autre"],
      firmSize: "Taille du cabinet",
      selectFirmSize: "Sélectionnez la taille",
      employees: "employés",
      useCaseLegend: "Cas d'usage principal",
      useCaseOptions: [
        "Adapter les CV à chaque brief",
        "Constituer un dossier de CV prêt à soumettre",
        "Centraliser & standardiser les CV",
        "Anonymiser les CV",
        "Traduire les CV dans toutes les langues",
      ],
      message: "Message (optionnel)",
      submit: "Demander une démo",
      thanksTitle: "Merci - nous revenons vers vous rapidement.",
      thanksPre: "Vous ne voulez pas attendre ? Vous pouvez aussi ",
      thanksLink: "commencer gratuitement",
      thanksPost: ".",
    },
  },
  trust: {
    seoTitle: "MagicCV Confiance & Sécurité - RGPD, résidence des données, SSO",
    seoDesc: "RGPD by design, résidence des données en UE, SSO, journaux d'audit - un état factuel et à jour de la posture de sécurité de MagicCV.",
    h1: "Confiance & sécurité, factuelles et à jour.",
    sub: "Conçu pour le niveau d'exigence des achats des cabinets européens. Pas de certifications survendues - ce qui est en production est en production, et la roadmap est clairement indiquée comme telle.",
    cards: [
      { title: "RGPD by design", body: "Le traitement des données est construit autour des exigences du RGPD dès l'origine - pas rétrofitté. Anonymisation, contrôle d'accès et rétention font partie du cœur du produit." },
      { title: "Résidence des données en UE", body: "Les données des consultants et des cabinets sont stockées sur une infrastructure européenne, conformément aux attentes des cabinets européens." },
      { title: "SSO & accès par rôles", body: "Disponible en Enterprise : authentification unique et contrôle d'accès par rôles pour gouverner précisément qui voit et modifie les données." },
      { title: "Journaux d'audit", body: "Suivez les modifications des profils et des exports de CV - les équipes RH/People Ops voient qui a changé quoi, et quand." },
      { title: "Modèle de DPA", body: "Un accord de traitement des données est disponible sur demande - nous envoyons la version à jour pour revue par votre équipe juridique." },
      { title: "Suppression & rétention", body: "Les données peuvent être supprimées sur demande, conformément aux droits des personnes du RGPD. Documentation complète disponible sur demande." },
    ],
    certTitle: "Certifications",
    certLead: "SOC 2 Type I - en cours (planifié).",
    certBody: " C'est sur notre roadmap ; cette page sera mise à jour dès l'obtention. Nous ne revendiquons aucune certification avant qu'elle soit réelle.",
    subprocTitle: "Sous-traitants",
    subprocBody: "Notre liste de sous-traitants est disponible sur demande et sera publiée ici. Demandez-la et nous vous l'enverrons pour revue.",
    secTitle: "Besoin d'un questionnaire de sécurité complété ?",
    secBody: "Nous traitons directement le questionnaire de votre équipe IT/sécurité - pas de PDF générique.",
    secCta: "Demander une revue de sécurité",
  },
  about: {
    seoTitle: "À propos de MagicCV",
    seoDesc: "Pourquoi nous avons construit MagicCV - et ce que signifie une plateforme native IA et native UE pour les CV de propositions.",
    h1: "Pourquoi nous avons construit MagicCV.",
    paras: [
      "Les cabinets de conseil gagnent leurs missions par des propositions écrites - et perdent des heures sur chaque dossier à cause du même problème ingrat : relancer les consultants pour des CV à jour, reformater à la main, et espérer que le résultat ressemble à un seul cabinet.",
      "Ce travail n'exige pas plus d'effectifs, ni une bibliothèque de templates. Il exige de partir du brief - comprendre ce que le RFP du client demande vraiment - et de raisonner sur l'expérience réelle qui y répond, avant tout formatage.",
      "Nous pensons aussi qu'être conçu pour l'Europe est un atout, pas une contrainte. Sortie multilingue, RGPD by design et résidence des données en UE ne sont pas des cases à cocher ajoutées après coup - ce sont les exigences de départ des cabinets européens pour lesquels nous construisons.",
    ],
    noteTitle: "Un mot de l'équipe fondatrice",
    noteParas: [
      "Nous avons passé des années dans des équipes de conseil, et le rush des propositions était toujours le même : la stratégie était bonne, les personnes étaient les bonnes - puis une soirée entière disparaissait à courir après des CV et à les reformater avant la deadline.",
      "MagicCV est l'outil que nous aurions voulu avoir - un outil qui part du brief, respecte la vérité de l'expérience de chacun et rend le temps au travail qui gagne réellement les missions. Le construire d'abord pour l'Europe, avec le RGPD et plusieurs langues au cœur, n'est pas une contrainte pour nous. C'est tout l'enjeu.",
    ],
    noteBy: "L'équipe fondatrice de MagicCV",
    noteWhere: "Amsterdam & Lviv",
    touchTitle: "Nous contacter",
    touchPre: "Questions, retours ou demandes presse - contactez-nous via ",
    touchLink: "le formulaire de démo",
    touchPost: ", nous transmettrons à la bonne personne.",
  },
  testimonial: {
    quote: "Le raisonnement RFP-to-CV est ce qui m'a le plus surpris. Il fait ressortir exactement les projets qui correspondent au brief, au lieu d'un déversement générique de profil.",
    name: "Tomas Lindqvist",
    role: "Head of Delivery",
    firm: "Lindqvist & Co",
    initials: "TL",
  },
};

const nl: PageDict = {
  template: {
    breadcrumbFeatures: "Functies",
    breadcrumbUseCases: "Use cases",
    breadcrumbSolutions: "Oplossingen",
    breadcrumbComparisons: "Vergelijkingen",
    whatItDoes: "Wat het doet",
    whyItMatters: "Waarom het ertoe doet",
    connects: "Zo hangt het samen",
    faqTitle: "Veelgestelde vragen",
    relatedTitle: "Gerelateerd",
    problemToday: "Het probleem vandaag",
    howMagiccvDoesIt: "Zo doet MagicCV het",
    outcome: "Resultaat",
    whereStrong: "Waar {x} sterk is",
    whereDiffers: "Waar MagicCV verschilt",
    sideBySide: "Naast elkaar",
    whoShouldChoose: "Wie zou wat moeten kiezen",
    roiTitle: "Wat kost de status quo je?",
    learnMore: "Meer informatie",
  },
  featuresHub: {
    seoTitle: "Cv-managementsoftware: alle functies",
    seoDesc: "Alles om met cv's opdrachten te winnen: RFP-naar-cv-redenering, merktemplates, anonimisering, meertaligheid en centrale profielen.",
    title: "Alles om met cv's opdrachten te winnen.",
    sub: "Vijf capaciteiten, één workflow - van het lezen van de brief tot een indieningsklaar, merkconform cv-pakket.",
  },
  useCasesHub: {
    seoTitle: "Cv-beheer in de praktijk: use cases",
    seoDesc: "Wat de klus ook is - afstemmen, bundelen, centraliseren, anonimiseren of vertalen van cv's - zo pakt MagicCV het aan.",
    title: "Wat je ook met een cv wilt doen, MagicCV doet het.",
    sub: "Vijf klussen, dezelfde onderliggende logica en profieldata.",
  },
  compareHub: {
    seoTitle: "MagicCV vs alternatieven - eerlijke vergelijkingen",
    seoDesc: "Eerlijke, feitelijke vergelijkingen van MagicCV met Flowcase, Cinode, Napta en meer - inclusief niets doen.",
    title: "Zo verhoudt MagicCV zich tot de rest.",
    sub: "Eerlijke, feitelijke vergelijkingen - ook waar het alternatief echt wint.",
    pickTitle: "Kies een vergelijking",
    summaryLabel: "Alternatieven (samenvatting)",
  },
  demo: {
    seoTitle: "Boek een MagicCV-demo",
    seoDesc: "Bekijk MagicCV met je eigen consultants - van rommelige cv's naar een merkconform pakket. 30 minuten, geen slides.",
    h1: "Bekijk MagicCV met je eigen consultants.",
    sub: "30 minuten, geen slides - we draaien jouw scenario live, van rommelige cv's naar een merkconform pakket.",
    expectations: [
      "We lopen je huidige cv-/offerteproces door",
      "Een live run met jouw scenario - een klantintroductie, offerte of compleet pakket",
      "Transparante prijzen - geen verrassingen na het gesprek",
    ],
    preferPre: "Liever direct proberen? ",
    preferLink: "Start met het gratis plan",
    preferPost: " - 10 profielen en 30 cv's, zonder creditcard.",
    gdprLine: "AVG-proof, EU-dataresidentie",
    form: {
      fullName: "Volledige naam",
      workEmail: "Zakelijke e-mail",
      company: "Bedrijf",
      role: "Rol",
      selectRole: "Selecteer een rol",
      roleOptions: ["Bid-/proposalmanager", "Head of Ops/COO", "Managing partner", "IT/Security", "Anders"],
      firmSize: "Bedrijfsgrootte",
      selectFirmSize: "Selecteer bedrijfsgrootte",
      employees: "medewerkers",
      useCaseLegend: "Primaire use case",
      useCaseOptions: [
        "Cv's afstemmen op elke brief",
        "Een indieningsklaar cv-pakket bouwen",
        "Cv's centraliseren & standaardiseren",
        "Cv's anonimiseren",
        "Cv's vertalen naar elke taal",
      ],
      message: "Bericht (optioneel)",
      submit: "Demo aanvragen",
      thanksTitle: "Bedankt - we nemen snel contact op.",
      thanksPre: "Niet wachten? Je kunt ook direct ",
      thanksLink: "gratis starten",
      thanksPost: ".",
    },
  },
  trust: {
    seoTitle: "MagicCV Trust & Security - AVG, dataresidentie, SSO",
    seoDesc: "AVG by design, EU-dataresidentie, SSO, auditlogs - een feitelijk, actueel beeld van de beveiliging van MagicCV.",
    h1: "Vertrouwen & beveiliging, feitelijk en actueel.",
    sub: "Gebouwd voor de toetsing waarmee Europese consultancies inkopen. Geen overdreven certificeringen - wat live is, is live, en roadmap heet gewoon roadmap.",
    cards: [
      { title: "AVG by design", body: "Dataverwerking is vanaf de basis rond AVG-eisen gebouwd - niet achteraf toegevoegd. Anonimisering, toegangsbeheer en retentie zijn kernonderdelen, geen add-ons." },
      { title: "EU-dataresidentie", body: "Consultant- en bedrijfsdata staan op EU-infrastructuur, in lijn met de verwachtingen van Europese consultancy- en professional-servicesbureaus." },
      { title: "SSO & rolgebaseerde toegang", body: "Beschikbaar in Enterprise: single sign-on en rolgebaseerde toegang zodat je precies bepaalt wie consultantdata ziet en bewerkt." },
      { title: "Auditlogs", body: "Volg wijzigingen aan profielen en cv-exports - HR en People Ops zien wie wat wanneer heeft aangepast." },
      { title: "DPA-template", body: "Een verwerkersovereenkomst is op verzoek beschikbaar - we sturen de actuele versie voor review door je juridische team." },
      { title: "Verwijdering & retentie", body: "Data kan op verzoek worden verwijderd, in lijn met de rechten van betrokkenen onder de AVG. Volledige documentatie op verzoek." },
    ],
    certTitle: "Certificeringen",
    certLead: "SOC 2 Type I - in uitvoering (gepland).",
    certBody: " Het staat op onze roadmap; deze pagina wordt bijgewerkt zodra het rond is. We claimen geen certificering voordat die echt is.",
    subprocTitle: "Subverwerkers",
    subprocBody: "Onze actuele lijst met subverwerkers is op verzoek beschikbaar en wordt hier gepubliceerd. Vraag ernaar en we sturen de lijst ter review.",
    secTitle: "Een ingevulde security-vragenlijst nodig?",
    secBody: "We werken de vragenlijst van je IT-/securityteam direct door - geen generiek trustcenter-PDF nodig.",
    secCta: "Security-review aanvragen",
  },
  about: {
    seoTitle: "Over MagicCV",
    seoDesc: "Waarom we MagicCV bouwden - en wat een AI-native, EU-native platform voor proposal-cv's betekent voor het middensegment.",
    h1: "Waarom we MagicCV hebben gebouwd.",
    paras: [
      "Consultancy- en professional-servicesbureaus winnen werk met geschreven voorstellen - en verliezen bij elk voorstel uren aan hetzelfde ondankbare probleem: consultants najagen voor actuele cv's, handmatig formatteren en hopen dat het resultaat als één bureau leest.",
      "Dat werk vraagt geen extra mensen en geen templatebibliotheek. Het vraagt om te beginnen bij de brief - begrijpen wat de RFP van de klant echt vraagt - en te redeneren welke echte ervaring daarop antwoordt, vóór er iets wordt geformatteerd.",
      "We vinden bovendien dat gebouwd zijn voor Europa een feature is, geen beperking. Meertalige output, AVG by design en EU-dataresidentie zijn geen afvinklijstjes achteraf - het zijn de startvereisten van de Europese middenmarktbureaus waarvoor we bouwen.",
    ],
    noteTitle: "Een bericht van het foundingteam",
    noteParas: [
      "We hebben jaren in consultancyteams gewerkt, en de proposal-crunch was altijd hetzelfde: de strategie stond, de mensen klopten - en dan verdween een hele avond in het najagen en herformatteren van cv's vóór de deadline.",
      "MagicCV is de tool die we zelf hadden willen hebben - één die begint bij de brief, de waarheid van ieders ervaring respecteert en de tijd teruggeeft aan het werk dat voorstellen echt wint. Het eerst voor Europa bouwen, met AVG en meerdere talen in de kern, is voor ons geen beperking. Het is precies het punt.",
    ],
    noteBy: "Het foundingteam van MagicCV",
    noteWhere: "Amsterdam & Lviv",
    touchTitle: "Contact",
    touchPre: "Vragen, feedback of persverzoeken - bereik ons via ",
    touchLink: "het demoformulier",
    touchPost: ", dan zorgen we dat het bij de juiste persoon komt.",
  },
  testimonial: {
    quote: "De RFP-naar-cv-redenering verraste me het meest. Het haalt precies de projecten naar voren die bij de brief passen, in plaats van een generieke profieldump.",
    name: "Tomas Lindqvist",
    role: "Head of Delivery",
    firm: "Lindqvist & Co",
    initials: "TL",
  },
};

const sv: PageDict = {
  template: {
    breadcrumbFeatures: "Funktioner",
    breadcrumbUseCases: "Användningsfall",
    breadcrumbSolutions: "Lösningar",
    breadcrumbComparisons: "Jämförelser",
    whatItDoes: "Vad det gör",
    whyItMatters: "Varför det spelar roll",
    connects: "Så hänger det ihop",
    faqTitle: "Vanliga frågor",
    relatedTitle: "Relaterat",
    problemToday: "Problemet idag",
    howMagiccvDoesIt: "Så gör MagicCV",
    outcome: "Resultat",
    whereStrong: "Där {x} är starkt",
    whereDiffers: "Där MagicCV skiljer sig",
    sideBySide: "Sida vid sida",
    whoShouldChoose: "Vem bör välja vad",
    roiTitle: "Vad kostar nuläget er?",
    learnMore: "Läs mer",
  },
  featuresHub: {
    seoTitle: "CV-hanteringsprogram: alla funktioner",
    seoDesc: "Allt för att CV:n ska vinna uppdrag: RFP-till-CV-resonemang, profilmallar, anonymisering, flerspråkighet och centrala profiler.",
    title: "Allt för att CV:n ska vinna uppdrag.",
    sub: "Fem förmågor, ett arbetsflöde - från att läsa briefen till ett inlämningsklart CV-paket i er profil.",
  },
  useCasesHub: {
    seoTitle: "CV-hantering i praktiken: användningsfall",
    seoDesc: "Vad uppgiften än är - skräddarsy, paketera, centralisera, anonymisera eller översätta CV:n - så gör MagicCV det.",
    title: "Vad ni än vill göra med ett CV gör MagicCV det.",
    sub: "Fem uppgifter, samma underliggande logik och profildata.",
  },
  compareHub: {
    seoTitle: "MagicCV vs alternativen - ärliga jämförelser",
    seoDesc: "Rättvisa, faktabaserade jämförelser av MagicCV mot Flowcase, Cinode, Napta med flera - inklusive att inte göra något.",
    title: "Så står sig MagicCV i jämförelse.",
    sub: "Rättvisa, faktabaserade jämförelser - även där alternativet faktiskt vinner.",
    pickTitle: "Välj en jämförelse",
    summaryLabel: "Alternativ (översikt)",
  },
  demo: {
    seoTitle: "Boka en MagicCV-demo",
    seoDesc: "Se MagicCV med era egna konsulter - från röriga CV:n till ett paket i er profil. 30 minuter, inga slides.",
    h1: "Se MagicCV med era egna konsulter.",
    sub: "30 minuter, inga slides - vi kör ert scenario live, från röriga CV:n till ett paket i er profil.",
    expectations: [
      "Vi går igenom er nuvarande CV-/anbudsprocess",
      "En live-körning med ert scenario - en kundintro, ett anbud eller ett helt paket",
      "Transparenta priser - inga överraskningar efter samtalet",
    ],
    preferPre: "Vill ni hellre prova direkt? ",
    preferLink: "Börja med gratisplanen",
    preferPost: " - 10 profiler och 30 CV:n, inget betalkort.",
    gdprLine: "GDPR-säkert, datalagring inom EU",
    form: {
      fullName: "Fullständigt namn",
      workEmail: "Jobbmejl",
      company: "Företag",
      role: "Roll",
      selectRole: "Välj roll",
      roleOptions: ["Bid-/anbudsansvarig", "Head of Ops/COO", "Managing partner", "IT/Säkerhet", "Annat"],
      firmSize: "Företagsstorlek",
      selectFirmSize: "Välj storlek",
      employees: "anställda",
      useCaseLegend: "Primärt användningsfall",
      useCaseOptions: [
        "Skräddarsy CV:n till varje brief",
        "Bygg ett anbudsklart CV-paket",
        "Centralisera & standardisera CV:n",
        "Anonymisera CV:n",
        "Översätt CV:n till valfritt språk",
      ],
      message: "Meddelande (valfritt)",
      submit: "Begär demo",
      thanksTitle: "Tack - vi hör av oss inom kort.",
      thanksPre: "Vill ni inte vänta? Ni kan också ",
      thanksLink: "komma igång gratis",
      thanksPost: ".",
    },
  },
  trust: {
    seoTitle: "MagicCV Trust & Säkerhet - GDPR, datalagring, SSO",
    seoDesc: "GDPR by design, datalagring inom EU, SSO, granskningsloggar - en faktabaserad, aktuell bild av MagicCVs säkerhet.",
    h1: "Förtroende & säkerhet - faktabaserat och aktuellt.",
    sub: "Byggt för den granskning som europeiska konsultbolag gör vid inköp. Inga överdrivna certifieringar - det som är live är live, och roadmap är tydligt markerad som roadmap.",
    cards: [
      { title: "GDPR by design", body: "Databehandlingen är byggd kring GDPR-kraven från grunden - inte i efterhand. Anonymisering, åtkomstkontroll och lagring är kärnkomponenter, inte tillägg." },
      { title: "Datalagring inom EU", body: "Konsult- och företagsdata lagras på EU-infrastruktur, i linje med förväntningarna hos europeiska konsult- och professional services-bolag." },
      { title: "SSO & rollbaserad åtkomst", body: "Tillgängligt i Enterprise: single sign-on och rollbaserad åtkomst så att ni styr exakt vem som ser och redigerar konsultdata." },
      { title: "Granskningsloggar", body: "Följ ändringar i profiler och CV-exporter - HR och People Ops ser vem som ändrade vad, och när." },
      { title: "DPA-mall", body: "Ett personuppgiftsbiträdesavtal finns på begäran - vi skickar den aktuella versionen för granskning av ert juridikteam." },
      { title: "Radering & lagring", body: "Data kan raderas på begäran, i linje med de registrerades rättigheter enligt GDPR. Fullständig dokumentation på begäran." },
    ],
    certTitle: "Certifieringar",
    certLead: "SOC 2 Type I - pågår (planerad).",
    certBody: " Den ligger på vår roadmap; sidan uppdateras så snart den är klar. Vi påstår ingen certifiering innan den är verklig.",
    subprocTitle: "Underbiträden",
    subprocBody: "Vår aktuella lista över underbiträden finns på begäran och kommer att publiceras här. Fråga oss så skickar vi listan för granskning.",
    secTitle: "Behöver ni ett ifyllt säkerhetsformulär?",
    secBody: "Vi går igenom ert IT-/säkerhetsteams formulär direkt - ingen generisk trustcenter-PDF behövs.",
    secCta: "Begär säkerhetsgranskning",
  },
  about: {
    seoTitle: "Om MagicCV",
    seoDesc: "Varför vi byggde MagicCV - och vad en AI-native, EU-native plattform för anbuds-CV:n betyder för medelstora konsultbolag.",
    h1: "Varför vi byggde MagicCV.",
    paras: [
      "Konsult- och professional services-bolag vinner affärer genom skriftliga anbud - och förlorar timmar på varje anbud till samma otacksamma problem: jaga konsulter efter aktuella CV:n, formatera om för hand och hoppas att resultatet läses som ett enda bolag.",
      "Det arbetet kräver inte fler anställda och ingen mallbibliotek. Det kräver att man utgår från briefen - förstår vad kundens RFP faktiskt efterfrågar - och resonerar kring vilken verklig erfarenhet som svarar på den, innan något formateras.",
      "Vi tycker dessutom att vara byggd för Europa är en styrka, inte en begränsning. Flerspråkig export, GDPR by design och datalagring inom EU är inga kryssrutor i efterhand - de är grundkraven hos de europeiska medelstora bolag vi bygger för.",
    ],
    noteTitle: "En hälsning från grundarteamet",
    noteParas: [
      "Vi har tillbringat år i konsultteam, och anbudsruschen var alltid densamma: strategin satt, rätt personer fanns - och sedan försvann en hel kväll i att jaga och formatera om CV:n före deadline.",
      "MagicCV är verktyget vi själva önskat - ett som utgår från briefen, respekterar sanningen i varje persons erfarenhet och ger tiden tillbaka till arbetet som faktiskt vinner anbud. Att bygga det för Europa först, med GDPR och flera språk i kärnan, är ingen begränsning för oss. Det är hela poängen.",
    ],
    noteBy: "MagicCVs grundarteam",
    noteWhere: "Amsterdam & Lviv",
    touchTitle: "Kontakt",
    touchPre: "Frågor, feedback eller pressförfrågningar - nå oss via ",
    touchLink: "demoformuläret",
    touchPost: ", så ser vi till att rätt person svarar.",
  },
  testimonial: {
    quote: "RFP-till-CV-resonemanget överraskade mig mest. Det lyfter exakt de projekt som matchar briefen - i stället för en generisk profildump.",
    name: "Tomas Lindqvist",
    role: "Head of Delivery",
    firm: "Lindqvist & Co",
    initials: "TL",
  },
};

export const pageDictionaries: Record<Locale, PageDict> = { de, fr, nl, sv };

export function templateStrings(locale: Locale | "en"): TemplateStrings {
  return locale === "en" ? EN_TEMPLATE : pageDictionaries[locale].template;
}
