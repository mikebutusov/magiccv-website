/**
 * v1 localization: DE / FR / NL / SV locales get localized chrome (header,
 * footer) plus fully translated homepage and pricing. Deeper pages remain
 * English for now; the dictionaries below are hand-written, not machine glue.
 * EN stays unprefixed at the site root so existing URLs never change.
 */

export const LOCALES = ["de", "fr", "nl", "sv"] as const;
export type Locale = (typeof LOCALES)[number];
export type AnyLocale = Locale | "en";

export const OG_LOCALES: Record<Locale, string> = { de: "de_DE", fr: "fr_FR", nl: "nl_NL", sv: "sv_SE" };

export const LOCALE_LABELS: Record<AnyLocale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  nl: "NL",
  sv: "SE",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePrefix(locale: AnyLocale): string {
  return locale === "en" ? "" : `/${locale}`;
}

/** hreflang alternates map for a canonical (unprefixed) path, e.g. "/features/rfp-to-cv". */
export function languagesFor(path: string): Record<string, string> {
  const p = path === "/" ? "" : path;
  return {
    en: p || "/",
    de: `/de${p}`,
    fr: `/fr${p}`,
    nl: `/nl${p}`,
    sv: `/sv${p}`,
    "x-default": p || "/",
  };
}

interface TierCopy {
  name: string;
  limits: string;
  anchor: string;
  features: string[];
  cta: string;
}

export interface Dict {
  htmlLang: string;
  nav: {
    top: Record<string, string>; // maps EN section labels -> localized
    pricing: string;
    blog: string;
    login: string;
    bookDemo: string;
    getStarted: string;
  };
  footer: {
    headings: { product: string; solutions: string; comparisons: string; resources: string; company: string; legal: string };
    description: string;
    euBadge: string;
    newsletterTitle: string;
    language: string;
    rights: string;
  };
  cta: { headline: string; body: string };
  home: {
    seoTitle: string;
    seoDesc: string;
    eyebrow: string;
    h1: string;
    sub: string;
    stats: { value: string; label: string }[];
    logoWall: string;
    problemH2: string;
    problemP: string;
    howTitle: string;
    how: { title: string; body: string }[];
    capsTitle: string;
    caps: { title: string; body: string }[];
    valueTitle: string;
    valueP: string;
    valueLink: string;
    roiTitle: string;
    vsTitle: string;
    vsSeeAll: string;
    vsCols: { magiccv: string; template: string; nothing: string };
    vsRows: { label: string; a: string; b: string; c: string }[];
    teamTitle: string;
    teamLinks: string[];
    firmTitle: string;
    firmLinks: string[];
    trustTitle: string;
    trustP: string;
    trustLink: string;
    seoBlock: {
      h2: string;
      p1: string;
      p2: string;
      faqTitle: string;
      faqs: { question: string; answer: string }[];
    };
  };
  pricing: {
    seoTitle: string;
    seoDesc: string;
    h1: string;
    sub: string;
    mostPopular: string;
    custom: string;
    tiers: { free: TierCopy; pro: TierCopy; enterprise: TierCopy };
    matrixTitle: string;
    featureCol: string;
    matrix: { group: string; rows: { feature: string; free: string; pro: string; enterprise: string }[] }[];
    strip: string[];
    roiTitle: string;
    faqsTitle: string;
    faqs: { question: string; answer: string }[];
  };
}

const de: Dict = {
  htmlLang: "de",
  nav: {
    top: { Product: "Produkt", "Use cases": "Anwendungsfälle", Solutions: "Lösungen", Comparisons: "Vergleiche" },
    pricing: "Preise",
    blog: "Blog",
    login: "Anmelden",
    bookDemo: "Demo buchen",
    getStarted: "Kostenlos starten",
  },
  footer: {
    headings: { product: "Produkt", solutions: "Lösungen", comparisons: "Vergleiche", resources: "Ressourcen", company: "Unternehmen", legal: "Rechtliches" },
    description: "MagicCV hält die Profile Ihrer Consultants aktuell und macht daraus maßgeschneiderte, markenkonforme CVs - für jeden Kunden, jedes Angebot und jede Sprache, in Minuten.",
    euBadge: "EU-Datenresidenz",
    newsletterTitle: "Tipps zu Proposals & CV-Ops ins Postfach",
    language: "Sprache:",
    rights: "Alle Rechte vorbehalten.",
  },
  cta: {
    headline: "Von verstreuten CVs zum polierten, markenkonformen Paket in Minuten.",
    body: "Sehen Sie es mit Ihren eigenen Consultants - oder starten Sie noch heute kostenlos, ohne Kreditkarte.",
  },
  home: {
    seoTitle: "CV-Management-Software für Beratungsunternehmen",
    seoDesc: "KI-native CV-Management-Software: eine durchsuchbare Lebenslauf-Datenbank, maßgeschneiderte markenkonforme CVs in Minuten, 5+ EU-Sprachen, DSGVO by Design. Kostenloser Plan.",
    eyebrow: "KI-native CV-Management-Software für Beratungen",
    h1: "Jeder Consultant-CV: markenkonform und in Minuten fertig.",
    sub: "MagicCV hält die Profile Ihres Teams aktuell und macht daraus maßgeschneiderte, markenkonforme CVs - für jeden Kunden, jedes Angebot, jede Sprache. Eine Quelle der Wahrheit, Minuten statt Abende.",
    stats: [
      { value: "1 Tag → 15 Min", label: "pro CV-Paket" },
      { value: "5+", label: "EU-Sprachen" },
      { value: "DSGVO by Design", label: "von Anfang an integriert" },
    ],
    logoWall: "Vertraut von europäischen Beratungsteams",
    problemH2: "Consultant-CVs sollten nicht so viel Arbeit machen.",
    problemP: "CVs liegen in Laufwerken, Postfächern und auf Laptops - veraltet, sobald man sie braucht. Jede Kundenvorstellung, jedes Angebot bedeutet Hinterherlaufen und manuelles Formatieren, und die Qualität driftet jedes Mal. MagicCV macht die aktuelle Version zur einfachen Version.",
    howTitle: "So funktioniert es",
    how: [
      { title: "Consultants einmal importieren", body: "Importieren Sie vorhandene CVs und erhalten Sie strukturierte, stets aktuelle Profile für Ihr gesamtes Team - eine Quelle der Wahrheit statt verstreuter Dateien." },
      { title: "Auf Kunde, Brief oder Format zuschneiden", body: "Wählen Sie Consultant und Zweck - Kundenvorstellung, Angebot, bestimmtes Template - und MagicCV formt den CV entsprechend. Ein RFP einfügen geht auch; es ist ein Weg, nicht der einzige." },
      { title: "Markenkonformes Paket in jeder Sprache exportieren", body: "Erhalten Sie einen abgabefertigen CV oder ein ganzes Paket im Design Ihrer Firma, auf Wunsch anonymisiert, in Ihrer Arbeitssprache." },
    ],
    capsTitle: "Alles, damit CVs Aufträge gewinnen",
    caps: [
      { title: "RFP-to-CV-Reasoning", body: "Beginnt beim Brief, nicht beim Template." },
      { title: "Markenkonforme Exporte", body: "Jeder CV, perfekt on-brand." },
      { title: "Anonymisierung & DSGVO", body: "Integriert, nicht angeflanscht." },
      { title: "Mehrsprachig & Übersetzung", body: "Bieten Sie in jeder europäischen Sprache." },
      { title: "Zentrale Profile & Skills", body: "Ein strukturiertes Profil, endlos wiederverwendbar." },
    ],
    valueTitle: "Konstante Qualität, bei jedem Volumen",
    valueP: "Für COO oder Managing Partner: Angebotsleistung skalieren ohne mehr Personal - mit sichtbarem ROI für jeden versendeten CV.",
    valueLink: "Vollständige Preise & ROI ansehen",
    roiTitle: "Was könnte das Ihr Team kosten?",
    vsTitle: "Warum MagicCV statt der Alternativen",
    vsSeeAll: "Alle Vergleiche ansehen",
    vsCols: { magiccv: "MagicCV", template: "Template-Tools", nothing: "Nichts tun (SharePoint + Word)" },
    vsRows: [
      { label: "Ausgangspunkt", a: "Denkt vom Brief aus", b: "Ein CV-Template", c: "Jedes Mal ein leeres Dokument" },
      { label: "Preise", a: "Öffentlich, Self-Service", b: "Oft nur nach Demo", c: "0 € direkte Kosten" },
      { label: "Zeit pro CV-Paket", a: "Etwa 15 Minuten", b: "Schneller als nichts, aber manuell", c: "Jedes Mal Stunden" },
    ],
    teamTitle: "Für Ihr Team gebaut",
    teamLinks: ["Sales-Teams", "Recruiting-Teams", "HR / People Ops", "Projekt-Delivery"],
    firmTitle: "Für Ihre Firma gebaut",
    firmLinks: ["Software- & IT-Beratung", "Strategie- & Managementberatung", "Design- & Kreativagenturen", "Öffentlicher Sektor & Ausschreibungen"],
    trustTitle: "Von Tag eins auf EU-Vertrauen gebaut",
    trustP: "EU-Datenresidenz, SSO, AVV-Vorlagen und DSGVO-by-Design durchgängig.",
    trustLink: "Zum Trust Center",
    seoBlock: {
      h2: "CV-Management-Software, gebaut für die Realität von Beratungen",
      p1: "Die meiste Software für Lebenslauf-Verwaltung wurde für Recruiter gebaut, die tausende Bewerbungen sichten. MagicCV ist anders: ein CV-Management-System für die Menschen, die Sie bereits beschäftigen - eine durchsuchbare Lebenslauf-Datenbank, in der Skills, Projekte und Zertifizierungen jedes Consultants als strukturierte Daten liegen statt in veralteten Word-Dateien.",
      p2: "Damit werden die mühsamen Teile der CV-Datenpflege automatisch: Bestehende Dateien importieren und per CV-Parsing strukturieren. Das ganze Team wie eine Kompetenzmatrix durchsuchen. In Minuten einen maßgeschneiderten, markenkonformen CV für jeden Kunden, jedes Angebot und jede Sprache erstellen - mit der Datenbank als einziger Quelle der Wahrheit.",
      faqTitle: "CV-Management-Software, kurz erklärt",
      faqs: [
        { question: "Was ist CV-Management-Software?", answer: "CV-Management-Software hält die CVs Ihres Teams in einer strukturierten, durchsuchbaren Datenbank und erstellt daraus auf Abruf gepflegte, aktuelle Dokumente. Statt der Jagd nach der neuesten Word-Datei pflegen Sie ein Profil pro Person und exportieren maßgeschneiderte, markenkonforme CVs für jeden Kunden, jedes Angebot und jede Sprache." },
        { question: "Was unterscheidet eine CV-Datenbank von einem Bewerbermanagement-System (ATS)?", answer: "Ein ATS verwaltet externe Bewerbungen entlang eines Einstellungsprozesses. Eine CV-Datenbank wie MagicCV verwaltet die Menschen, die Sie bereits haben - Consultants, deren CVs Sie Kunden präsentieren - und hält deren Profile aktuell und sofort exportierbar im Design Ihrer Firma." },
        { question: "Eignet sich MagicCV als Lebenslauf-Verwaltung für Recruiting-Teams?", answer: "Ja. Recruiting- und Resourcing-Teams nutzen MagicCV als Kandidaten-Datenbank: CVs einmal importieren, strukturierte Profile aktuell halten, nach Skills suchen und in Minuten kundenfertige, anonymisierte oder übersetzte CVs exportieren." },
        { question: "Kann ich die Lebenslauf-Datenbank nach Skills durchsuchen?", answer: "Ja - jedes Profil ist strukturierte Daten. Filtern Sie Ihr gesamtes Team nach Skill, Zertifizierung, Sprache oder Projekt und besetzen Sie den nächsten Brief in Minuten." },
      ],
    },
  },
  pricing: {
    seoTitle: "Preise - Kostenloser Plan, Pro für 50 $/Monat",
    seoDesc: "Transparente Preise für Consultant-CV-Management. Kostenlos starten (10 Profile, 30 CVs - ohne Kreditkarte), Pro für 50 $/Monat, Enterprise individuell.",
    h1: "Einfache, öffentliche Preise.",
    sub: "Keine Demo-Schranke. Keine Überraschungen. Kostenlos starten, bei Wachstum upgraden.",
    mostPopular: "Am beliebtesten",
    custom: "Individuell",
    tiers: {
      free: {
        name: "Free",
        limits: "10 Kandidatenprofile · 30 CVs (gesamt)",
        anchor: "Testen Sie den kompletten Workflow mit Ihrem Team - ohne Kreditkarte, ohne Zeitlimit.",
        features: ["10 Kandidatenprofile (gesamt)", "30 CVs (gesamt)", "KI-CV-Erstellung & Chat-Bearbeitung", "Marken-Templates & PDF-Export", "Community-Support"],
        cta: "Kostenlos starten",
      },
      pro: {
        name: "Pro",
        limits: "200 Kandidatenprofile · 600 CVs",
        anchor: "Der komplette CV-Workflow für ein aktives Beratungsteam.",
        features: ["Alles aus Free", "200 Kandidatenprofile", "600 CVs", "Anonymisierung & mehrsprachige Ausgabe", "Zentrale Profilsuche & Tags", "Priorisierter Support"],
        cta: "Kostenlos starten",
      },
      enterprise: {
        name: "Enterprise",
        limits: "Unbegrenzte Profile & CVs",
        anchor: "Unbegrenzte Skalierung, SSO, Datenresidenz, beschaffungstaugliche Verträge.",
        features: ["Alles aus Pro", "Unbegrenzte Profile & CVs", "SSO & rollenbasierter Zugriff", "EU-Datenresidenz-Garantien", "AVV & individuelle Verträge", "Dediziertes Onboarding & SLAs"],
        cta: "Kontakt aufnehmen",
      },
    },
    matrixTitle: "Alle Funktionen im Planvergleich",
    featureCol: "Funktion",
    matrix: [
      { group: "Limits", rows: [
        { feature: "Kandidatenprofile", free: "10 (gesamt)", pro: "200", enterprise: "Unbegrenzt" },
        { feature: "Generierte CVs", free: "30 (gesamt)", pro: "600", enterprise: "Unbegrenzt" },
      ]},
      { group: "Kern-Workflow", rows: [
        { feature: "KI-CV-Erstellung & Chat-Bearbeitung", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Zuschnitt auf Brief oder RFP", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Zentrale Profilsuche & Tags", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Branding & Export", rows: [
        { feature: "Marken-Templates & PDF-Export", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Kunden-/ausschreibungsspezifische Templates", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "White-Label-Exporte", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Sprachen & Anonymisierung", rows: [
        { feature: "Mehrsprachige Ausgabe (5+ EU-Sprachen)", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "Ein-Klick-Anonymisierung", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Sicherheit & Compliance", rows: [
        { feature: "DSGVO by Design", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "SSO & rollenbasierter Zugriff", free: "-", pro: "-", enterprise: "✓" },
        { feature: "EU-Datenresidenz-Garantien", free: "-", pro: "-", enterprise: "✓" },
        { feature: "AVV & individuelle Verträge", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Support", rows: [
        { feature: "Support", free: "Community", pro: "Priorisiert", enterprise: "Dediziertes Onboarding + SLA" },
      ]},
    ],
    strip: ["Kostenloser Plan - ohne Kreditkarte, ohne Ablauf.", "Pro ist monatlich kündbar.", "Zahlung per Karte (Stripe); Rechnung bei Enterprise.", "Individuelle Verträge & AVV bei Enterprise."],
    roiTitle: "Was kostet Sie der Status quo?",
    faqsTitle: "Häufige Fragen",
    faqs: [
      { question: "Ist der Free-Plan ein Test?", answer: "Nein - es ist ein echter kostenloser Plan ohne Zeitlimit. Sie erhalten insgesamt 10 Kandidatenprofile und 30 CVs, ohne Kreditkarte." },
      { question: "Sind die Free-Limits monatlich?", answer: "Nein, es sind Gesamtwerte: 10 Kandidatenprofile und 30 generierte CVs insgesamt. Pro erhöht das auf 200 Profile und 600 CVs." },
      { question: "In welcher Währung wird abgerechnet?", answer: "In USD. Pro kostet 50 $ pro Monat; Enterprise wird individuell angeboten." },
      { question: "Was enthält Enterprise?", answer: "Unbegrenzte Profile und CVs, SSO und rollenbasierten Zugriff, EU-Datenresidenz-Garantien, AVV und individuelle Verträge sowie dediziertes Onboarding und SLAs." },
      { question: "Wo werden unsere Daten gespeichert?", answer: "Das Trust Center zeigt den aktuellen, faktenbasierten Stand zu EU-Datenresidenz und Datenverarbeitung über alle Pläne." },
      { question: "Kann ich jederzeit kündigen?", answer: "Ja. Pro läuft monatlich - jederzeit kündbar. Und der Free-Plan läuft nie ab." },
    ],
  },
};

const fr: Dict = {
  htmlLang: "fr",
  nav: {
    top: { Product: "Produit", "Use cases": "Cas d'usage", Solutions: "Solutions", Comparisons: "Comparatifs" },
    pricing: "Tarifs",
    blog: "Blog",
    login: "Connexion",
    bookDemo: "Réserver une démo",
    getStarted: "Commencer gratuitement",
  },
  footer: {
    headings: { product: "Produit", solutions: "Solutions", comparisons: "Comparatifs", resources: "Ressources", company: "Entreprise", legal: "Mentions légales" },
    description: "MagicCV garde les profils de vos consultants à jour et les transforme en CV sur mesure, à votre image - pour chaque client, appel d'offres ou langue, en quelques minutes.",
    euBadge: "Résidence des données en UE",
    newsletterTitle: "Conseils proposals & CV-ops dans votre boîte mail",
    language: "Langue :",
    rights: "Tous droits réservés.",
  },
  cta: {
    headline: "De CV éparpillés à un dossier soigné et à votre image, en quelques minutes.",
    body: "Voyez-le sur vos propres consultants, ou commencez gratuitement dès aujourd'hui - sans carte bancaire.",
  },
  home: {
    seoTitle: "Logiciel de gestion de CV pour cabinets de conseil",
    seoDesc: "Logiciel de gestion de CV natif IA : une cvthèque à jour et consultable en un clic, des CV sur mesure à votre image en minutes, 5+ langues européennes, RGPD by design. Offre gratuite.",
    eyebrow: "Logiciel de gestion de CV natif IA pour cabinets de conseil",
    h1: "Chaque CV de consultant, à votre image et prêt en quelques minutes.",
    sub: "MagicCV garde les profils de votre équipe à jour et les transforme en CV sur mesure - pour chaque client, appel d'offres ou langue. Une source unique de vérité, des minutes au lieu de soirées.",
    stats: [
      { value: "1 jour → 15 min", label: "par dossier de CV" },
      { value: "5+", label: "langues européennes" },
      { value: "RGPD by design", label: "intégré dès le premier jour" },
    ],
    logoWall: "La confiance d'équipes de conseil européennes",
    problemH2: "Les CV de consultants ne devraient pas demander autant de travail.",
    problemP: "Les CV vivent dans des drives, des boîtes mail et des ordinateurs portables - obsolètes dès qu'on en a besoin. Chaque présentation client ou appel d'offres signifie relancer les gens et reformater à la main, et la qualité dérive à chaque fois. MagicCV fait de la version à jour la version facile.",
    howTitle: "Comment ça marche",
    how: [
      { title: "Importez vos consultants une seule fois", body: "Importez vos CV existants pour créer des profils structurés et toujours à jour pour toute l'équipe - une source unique au lieu de fichiers éparpillés." },
      { title: "Adaptez à chaque client, brief ou format", body: "Choisissez un consultant et un objectif - présentation client, appel d'offres, template précis - et MagicCV refaçonne son CV. Collez un RFP si vous en avez un ; c'est une voie, pas la seule." },
      { title: "Exportez un dossier à votre image, dans chaque langue", body: "Obtenez un CV ou un dossier complet prêt à soumettre, à la marque de votre cabinet, anonymisé si besoin, dans votre langue de travail." },
    ],
    capsTitle: "Tout pour que vos CV remportent des missions",
    caps: [
      { title: "Raisonnement RFP-to-CV", body: "Part du brief, pas du template." },
      { title: "Exports à votre image", body: "Chaque CV, parfaitement à la marque." },
      { title: "Anonymisation & RGPD", body: "Intégré, pas greffé." },
      { title: "Multilingue & traduction", body: "Répondez dans chaque langue européenne." },
      { title: "Profils centralisés & compétences", body: "Un profil structuré, réutilisable à l'infini." },
    ],
    valueTitle: "Une qualité constante, quel que soit le volume",
    valueP: "Pour le COO ou le Managing Partner : augmentez la production de propositions sans augmenter les effectifs, avec un ROI visible sur chaque CV envoyé.",
    valueLink: "Voir les tarifs complets & le ROI",
    roiTitle: "Combien cela coûte-t-il à votre équipe ?",
    vsTitle: "Pourquoi MagicCV plutôt que les alternatives",
    vsSeeAll: "Voir tous les comparatifs",
    vsCols: { magiccv: "MagicCV", template: "Outils à templates", nothing: "Ne rien faire (SharePoint + Word)" },
    vsRows: [
      { label: "Point de départ", a: "Raisonne à partir du brief", b: "Un template de CV", c: "Un document vide, à chaque fois" },
      { label: "Tarifs", a: "Publics, en libre-service", b: "Souvent derrière une démo", c: "0 € de coût direct" },
      { label: "Temps par dossier", a: "Environ 15 minutes", b: "Plus vite que rien, mais manuel", c: "Des heures, à chaque fois" },
    ],
    teamTitle: "Conçu pour votre équipe",
    teamLinks: ["Équipes commerciales", "Équipes recrutement", "RH / People Ops", "Delivery de projets"],
    firmTitle: "Conçu pour votre cabinet",
    firmLinks: ["Conseil IT & logiciel", "Conseil en stratégie & management", "Agences design & créatives", "Secteur public & appels d'offres"],
    trustTitle: "Bâti sur la confiance européenne dès le premier jour",
    trustP: "Résidence des données en UE, SSO, modèles de DPA et RGPD by design de bout en bout.",
    trustLink: "Visiter le Trust Center",
    seoBlock: {
      h2: "Un logiciel de gestion de CV pensé pour le conseil",
      p1: "La plupart des logiciels de gestion de CV ont été conçus pour des recruteurs qui trient des milliers de candidatures. MagicCV est différent : c'est une cvthèque pour les personnes que vous employez déjà - une base de données consultable où les compétences, projets et certifications de chaque consultant vivent en données structurées plutôt qu'en fichiers Word périmés.",
      p2: "Les tâches ingrates de la gestion des CV deviennent automatiques : importez vos fichiers existants et laissez le parsing construire les profils. Cherchez dans toute l'équipe comme dans une matrice de compétences. Générez en minutes un CV sur mesure, à votre image, pour chaque client, appel d'offres ou langue - la cvthèque restant votre source unique de vérité.",
      faqTitle: "Le logiciel de gestion de CV, expliqué",
      faqs: [
        { question: "Qu'est-ce qu'un logiciel de gestion de CV ?", answer: "Un logiciel de gestion de CV conserve les CV de votre équipe dans une base structurée et consultable - une cvthèque - et génère à la demande des documents soignés et à jour. Au lieu de courir après le dernier fichier Word, vous maintenez un profil par personne et exportez des CV sur mesure, à votre image, pour chaque client, proposition ou langue." },
        { question: "Quelle différence entre une cvthèque et un ATS ?", answer: "Un ATS gère des candidats externes dans un pipeline de recrutement. Une cvthèque comme MagicCV gère les personnes que vous avez déjà - les consultants dont vous présentez les CV aux clients - en gardant leurs profils à jour et instantanément exportables à la marque de votre cabinet." },
        { question: "MagicCV convient-il aux équipes de recrutement ?", answer: "Oui. Les équipes recrutement et staffing utilisent MagicCV pour la gestion des candidatures : importez les CV une fois, gardez des profils structurés à jour, cherchez par compétence et exportez en minutes des CV prêts pour le client, anonymisés ou traduits." },
        { question: "Peut-on chercher dans la cvthèque par compétence ?", answer: "Oui - chaque profil est une donnée structurée. Filtrez toute votre équipe par compétence, certification, langue ou projet passé et staffez le prochain brief en minutes." },
      ],
    },
  },
  pricing: {
    seoTitle: "Tarifs - Offre gratuite, Pro à 50 $/mois",
    seoDesc: "Tarifs transparents pour la gestion de CV de consultants. Commencez gratuitement (10 profils, 30 CV - sans carte bancaire), Pro à 50 $/mois, Enterprise sur mesure.",
    h1: "Des tarifs simples et publics.",
    sub: "Pas de barrière de démo. Pas de surprises. Commencez gratuitement, évoluez quand vous grandissez.",
    mostPopular: "Le plus populaire",
    custom: "Sur mesure",
    tiers: {
      free: {
        name: "Free",
        limits: "10 profils candidats · 30 CV (au total)",
        anchor: "Essayez le workflow complet avec votre équipe - sans carte bancaire, sans limite de temps.",
        features: ["10 profils candidats (au total)", "30 CV (au total)", "Génération de CV par IA & édition par chat", "Templates de marque & export PDF", "Support communautaire"],
        cta: "Commencer gratuitement",
      },
      pro: {
        name: "Pro",
        limits: "200 profils candidats · 600 CV",
        anchor: "Le workflow CV complet pour une équipe de conseil active.",
        features: ["Tout Free", "200 profils candidats", "600 CV", "Anonymisation & sortie multilingue", "Recherche centralisée & tags", "Support prioritaire"],
        cta: "Commencer gratuitement",
      },
      enterprise: {
        name: "Enterprise",
        limits: "Profils & CV illimités",
        anchor: "Échelle illimitée, SSO, résidence des données, contrats adaptés aux achats.",
        features: ["Tout Pro", "Profils & CV illimités", "SSO & accès par rôles", "Garanties de résidence des données en UE", "DPA & contrats sur mesure", "Onboarding dédié & SLA"],
        cta: "Nous contacter",
      },
    },
    matrixTitle: "Comparez chaque fonctionnalité par offre",
    featureCol: "Fonctionnalité",
    matrix: [
      { group: "Limites", rows: [
        { feature: "Profils candidats", free: "10 (au total)", pro: "200", enterprise: "Illimité" },
        { feature: "CV générés", free: "30 (au total)", pro: "600", enterprise: "Illimité" },
      ]},
      { group: "Workflow principal", rows: [
        { feature: "Génération de CV par IA & édition par chat", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Adaptation à un brief ou RFP", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Recherche centralisée & tags", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Marque & export", rows: [
        { feature: "Templates de marque & export PDF", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Templates spécifiques client/appel d'offres", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "Exports en marque blanche", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Langues & anonymisation", rows: [
        { feature: "Sortie multilingue (5+ langues UE)", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "Anonymisation en un clic", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Sécurité & conformité", rows: [
        { feature: "RGPD by design", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "SSO & accès par rôles", free: "-", pro: "-", enterprise: "✓" },
        { feature: "Garanties de résidence des données en UE", free: "-", pro: "-", enterprise: "✓" },
        { feature: "DPA & contrats sur mesure", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Support", rows: [
        { feature: "Support", free: "Communautaire", pro: "Prioritaire", enterprise: "Onboarding dédié + SLA" },
      ]},
    ],
    strip: ["Offre gratuite - sans carte bancaire, sans expiration.", "Pro est mensuel ; résiliable à tout moment.", "Paiement par carte (Stripe) ; facturation pour Enterprise.", "Contrats sur mesure & DPA pour Enterprise."],
    roiTitle: "Que vous coûte le statu quo ?",
    faqsTitle: "Questions fréquentes",
    faqs: [
      { question: "L'offre Free est-elle un essai ?", answer: "Non - c'est une vraie offre gratuite, sans limite de temps. Vous disposez de 10 profils candidats et 30 CV au total, sans carte bancaire." },
      { question: "Les limites Free sont-elles mensuelles ?", answer: "Non, ce sont des totaux : 10 profils candidats et 30 CV générés au total. Pro passe à 200 profils et 600 CV." },
      { question: "Dans quelle devise facturez-vous ?", answer: "En USD. Pro coûte 50 $ par mois ; Enterprise est sur devis." },
      { question: "Que contient Enterprise ?", answer: "Profils et CV illimités, SSO et accès par rôles, garanties de résidence des données en UE, DPA et contrats sur mesure, plus un onboarding dédié et des SLA." },
      { question: "Où nos données sont-elles stockées ?", answer: "Le Trust Center présente l'état actuel et factuel de la résidence des données en UE et du traitement des données pour toutes les offres." },
      { question: "Puis-je résilier à tout moment ?", answer: "Oui. Pro est mensuel - résiliable à tout moment. Et l'offre Free n'expire jamais." },
    ],
  },
};

const nl: Dict = {
  htmlLang: "nl",
  nav: {
    top: { Product: "Product", "Use cases": "Use cases", Solutions: "Oplossingen", Comparisons: "Vergelijkingen" },
    pricing: "Prijzen",
    blog: "Blog",
    login: "Inloggen",
    bookDemo: "Demo boeken",
    getStarted: "Gratis starten",
  },
  footer: {
    headings: { product: "Product", solutions: "Oplossingen", comparisons: "Vergelijkingen", resources: "Bronnen", company: "Bedrijf", legal: "Juridisch" },
    description: "MagicCV houdt de profielen van je consultants actueel en zet ze om in op maat gemaakte, merkconforme cv's - voor elke klant, offerte of taal, binnen minuten.",
    euBadge: "EU-dataresidentie",
    newsletterTitle: "Tips over proposals & cv-ops in je inbox",
    language: "Taal:",
    rights: "Alle rechten voorbehouden.",
  },
  cta: {
    headline: "Van verspreide cv's naar een verzorgd, merkconform pakket in minuten.",
    body: "Bekijk het met je eigen consultants, of start vandaag gratis - zonder creditcard.",
  },
  home: {
    seoTitle: "CV-managementsoftware voor consultancybureaus",
    seoDesc: "AI-native cv-managementsoftware: één doorzoekbare cv-database, op maat gemaakte merkconforme cv's in minuten, 5+ EU-talen, AVG by design. Gratis plan.",
    eyebrow: "AI-native cv-managementsoftware voor consultancybureaus",
    h1: "Elk consultant-cv, merkconform en binnen minuten klaar.",
    sub: "MagicCV houdt de profielen van je team actueel en zet ze om in op maat gemaakte, merkconforme cv's - voor elke klant, offerte of taal. Eén bron van waarheid, minuten in plaats van avonden.",
    stats: [
      { value: "1 dag → 15 min", label: "per cv-pakket" },
      { value: "5+", label: "EU-talen" },
      { value: "AVG by design", label: "vanaf dag één ingebouwd" },
    ],
    logoWall: "Vertrouwd door Europese consultancyteams",
    problemH2: "Consultant-cv's zouden niet zoveel werk moeten zijn.",
    problemP: "Cv's leven op schijven, in inboxen en op laptops - verouderd zodra je ze nodig hebt. Elke klantintroductie of offerte betekent mensen najagen en handmatig herformatteren, en de kwaliteit verschuift elke keer. MagicCV maakt de actuele versie de makkelijke versie.",
    howTitle: "Zo werkt het",
    how: [
      { title: "Importeer je consultants één keer", body: "Zet bestaande cv's om in gestructureerde, altijd actuele profielen voor je hele team - één bron van waarheid in plaats van verspreide bestanden." },
      { title: "Stem af op elke klant, brief of format", body: "Kies een consultant en een doel - een klantintroductie, een offerte, een specifiek template - en MagicCV vormt het cv daaromheen. Plak een RFP als je die hebt; het is één route, niet de enige." },
      { title: "Exporteer een merkconform pakket in elke taal", body: "Ontvang een indieningsklaar cv of compleet pakket in de huisstijl van je bureau, desgewenst geanonimiseerd, in de taal waarin je werkt." },
    ],
    capsTitle: "Alles om met cv's opdrachten te winnen",
    caps: [
      { title: "RFP-naar-cv-redenering", body: "Begint bij de brief, niet bij het template." },
      { title: "Merkconforme exports", body: "Elk cv perfect on-brand." },
      { title: "Anonimisering & AVG", body: "Ingebouwd, niet aangeplakt." },
      { title: "Meertalig & vertaling", body: "Bied aan in elke Europese taal." },
      { title: "Centrale profielen & skills", body: "Eén gestructureerd profiel, eindeloos herbruikbaar." },
    ],
    valueTitle: "Constante kwaliteit, bij elk volume",
    valueP: "Voor de COO of managing partner: schaal de proposal-output zonder extra mensen, met zichtbare ROI op elk verzonden cv.",
    valueLink: "Bekijk volledige prijzen & ROI",
    roiTitle: "Wat kan dit je team kosten?",
    vsTitle: "Waarom MagicCV in plaats van de alternatieven",
    vsSeeAll: "Alle vergelijkingen bekijken",
    vsCols: { magiccv: "MagicCV", template: "Template-tools", nothing: "Niets doen (SharePoint + Word)" },
    vsRows: [
      { label: "Vertrekpunt", a: "Redeneert vanuit de brief", b: "Een cv-template", c: "Elke keer een leeg document" },
      { label: "Prijzen", a: "Publiek, self-service", b: "Vaak achter een demo", c: "€ 0 directe kosten" },
      { label: "Tijd per cv-pakket", a: "Ongeveer 15 minuten", b: "Sneller dan niets, maar handmatig", c: "Elke keer uren" },
    ],
    teamTitle: "Gebouwd voor je team",
    teamLinks: ["Salesteams", "Recruitmentteams", "HR / People Ops", "Projectdelivery"],
    firmTitle: "Gebouwd voor je bureau",
    firmLinks: ["Software- & IT-consultancy", "Strategie- & managementconsultancy", "Design- & creatieve bureaus", "Publieke sector & aanbestedingen"],
    trustTitle: "Vanaf dag één gebouwd op Europees vertrouwen",
    trustP: "EU-dataresidentie, SSO, DPA-templates en AVG by design, overal.",
    trustLink: "Naar het Trust Center",
    seoBlock: {
      h2: "Cv-managementsoftware, gebouwd rond hoe consultancy echt werkt",
      p1: "De meeste cv-managementsoftware is gebouwd voor recruiters die duizenden sollicitaties screenen. MagicCV is anders: een cv-managementsysteem voor de mensen die je al in dienst hebt - een doorzoekbare cv-database waarin de skills, projecten en certificeringen van elke consultant als gestructureerde data leven in plaats van in verouderde Word-bestanden.",
      p2: "Zo wordt het lastige deel van cv-beheer automatisch: importeer bestaande bestanden en laat cv-parsing het profiel opbouwen. Doorzoek je hele team als een vaardighedenmatrix. Genereer in minuten een op maat gemaakt, merkconform cv voor elke klant, offerte of taal - met de database als enige bron van waarheid.",
      faqTitle: "Cv-managementsoftware, uitgelegd",
      faqs: [
        { question: "Wat is cv-managementsoftware?", answer: "Cv-managementsoftware bewaart de cv's van je team in één gestructureerde, doorzoekbare database en genereert op aanvraag verzorgde, actuele documenten. In plaats van te jagen op het nieuwste Word-bestand onderhoud je één profiel per persoon en exporteer je op maat gemaakte, merkconforme cv's voor elke klant, elk voorstel en elke taal." },
        { question: "Wat is het verschil tussen een cv-database en een ATS?", answer: "Een ATS beheert externe kandidaten in een wervingspijplijn. Een cv-database zoals MagicCV beheert de mensen die je al hebt - consultants van wie je de cv's aan klanten presenteert - en houdt hun profielen actueel en direct exporteerbaar in de huisstijl van je bureau." },
        { question: "Werkt MagicCV als recruitmentsoftware met kandidatendatabase?", answer: "Ja. Recruitment- en resourcingteams gebruiken MagicCV als kandidatendatabase: importeer cv's één keer, houd gestructureerde profielen actueel, zoek op skills en exporteer in minuten klantklare, geanonimiseerde of vertaalde cv's." },
        { question: "Kan ik de cv-database doorzoeken op skills?", answer: "Ja - elk profiel is gestructureerde data. Filter je hele team op skill, certificering, taal of eerder project en bezet de volgende brief in minuten." },
      ],
    },
  },
  pricing: {
    seoTitle: "Prijzen - Gratis plan, Pro voor $50/maand",
    seoDesc: "Transparante prijzen voor consultant-cv-beheer. Start gratis (10 profielen, 30 cv's - zonder creditcard), Pro voor $50/maand, Enterprise op maat.",
    h1: "Eenvoudige, publieke prijzen.",
    sub: "Geen demodrempel. Geen verrassingen. Start gratis, upgrade als je groeit.",
    mostPopular: "Populairst",
    custom: "Op maat",
    tiers: {
      free: {
        name: "Free",
        limits: "10 kandidaatprofielen · 30 cv's (totaal)",
        anchor: "Probeer de volledige workflow met je eigen team - zonder creditcard, zonder klok.",
        features: ["10 kandidaatprofielen (totaal)", "30 cv's (totaal)", "AI-cv-generatie & chatbewerking", "Merktemplates & PDF-export", "Communitysupport"],
        cta: "Gratis starten",
      },
      pro: {
        name: "Pro",
        limits: "200 kandidaatprofielen · 600 cv's",
        anchor: "De volledige cv-workflow voor een actief consultancyteam.",
        features: ["Alles uit Free", "200 kandidaatprofielen", "600 cv's", "Anonimisering & meertalige output", "Centrale profielzoekfunctie & tags", "Prioriteitssupport"],
        cta: "Gratis starten",
      },
      enterprise: {
        name: "Enterprise",
        limits: "Onbeperkte profielen & cv's",
        anchor: "Onbeperkte schaal, SSO, dataresidentie, inkoopklare contracten.",
        features: ["Alles uit Pro", "Onbeperkte profielen & cv's", "SSO & rolgebaseerde toegang", "EU-dataresidentie-garanties", "DPA & maatwerkcontracten", "Toegewijde onboarding & SLA's"],
        cta: "Neem contact op",
      },
    },
    matrixTitle: "Vergelijk elke functie per plan",
    featureCol: "Functie",
    matrix: [
      { group: "Limieten", rows: [
        { feature: "Kandidaatprofielen", free: "10 (totaal)", pro: "200", enterprise: "Onbeperkt" },
        { feature: "Gegenereerde cv's", free: "30 (totaal)", pro: "600", enterprise: "Onbeperkt" },
      ]},
      { group: "Kernworkflow", rows: [
        { feature: "AI-cv-generatie & chatbewerking", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Afstemming op een brief of RFP", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Centrale profielzoekfunctie & tags", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Branding & export", rows: [
        { feature: "Merktemplates & PDF-export", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Klant-/aanbestedingsspecifieke templates", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "White-label-exports", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Talen & anonimisering", rows: [
        { feature: "Meertalige output (5+ EU-talen)", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "Anonimisering met één klik", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Beveiliging & compliance", rows: [
        { feature: "AVG by design", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "SSO & rolgebaseerde toegang", free: "-", pro: "-", enterprise: "✓" },
        { feature: "EU-dataresidentie-garanties", free: "-", pro: "-", enterprise: "✓" },
        { feature: "DPA & maatwerkcontracten", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Support", rows: [
        { feature: "Support", free: "Community", pro: "Prioriteit", enterprise: "Toegewijde onboarding + SLA" },
      ]},
    ],
    strip: ["Gratis plan - zonder creditcard, zonder einddatum.", "Pro is maandelijks; altijd opzegbaar.", "Betaling per kaart (Stripe); facturatie bij Enterprise.", "Maatwerkcontracten & DPA bij Enterprise."],
    roiTitle: "Wat kost de status quo je?",
    faqsTitle: "Veelgestelde vragen",
    faqs: [
      { question: "Is het Free-plan een proefperiode?", answer: "Nee - het is een echt gratis plan zonder klok. Je krijgt in totaal 10 kandidaatprofielen en 30 cv's, zonder creditcard." },
      { question: "Zijn de Free-limieten maandelijks?", answer: "Nee, het zijn totalen: 10 kandidaatprofielen en 30 gegenereerde cv's in totaal. Pro verhoogt dat naar 200 profielen en 600 cv's." },
      { question: "In welke valuta rekenen jullie af?", answer: "In USD. Pro kost $50 per maand; Enterprise is op offertebasis." },
      { question: "Wat zit er in Enterprise?", answer: "Onbeperkte profielen en cv's, SSO en rolgebaseerde toegang, EU-dataresidentie-garanties, DPA en maatwerkcontracten, plus toegewijde onboarding en SLA's." },
      { question: "Waar worden onze data opgeslagen?", answer: "Het Trust Center toont het actuele, feitelijke beeld van EU-dataresidentie en dataverwerking voor alle plannen." },
      { question: "Kan ik op elk moment opzeggen?", answer: "Ja. Pro is maandelijks - altijd opzegbaar. En het Free-plan verloopt nooit." },
    ],
  },
};

const sv: Dict = {
  htmlLang: "sv",
  nav: {
    top: { Product: "Produkt", "Use cases": "Användningsfall", Solutions: "Lösningar", Comparisons: "Jämförelser" },
    pricing: "Priser",
    blog: "Blogg",
    login: "Logga in",
    bookDemo: "Boka demo",
    getStarted: "Kom igång gratis",
  },
  footer: {
    headings: { product: "Produkt", solutions: "Lösningar", comparisons: "Jämförelser", resources: "Resurser", company: "Företag", legal: "Juridik" },
    description: "MagicCV håller konsulternas profiler uppdaterade och gör om dem till skräddarsydda CV:n i er grafiska profil - för varje kund, anbud och språk, på minuter.",
    euBadge: "Datalagring inom EU",
    newsletterTitle: "Tips om proposals & CV-ops i din inkorg",
    language: "Språk:",
    rights: "Alla rättigheter förbehållna.",
  },
  cta: {
    headline: "Från utspridda CV:n till ett polerat paket i er profil - på minuter.",
    body: "Se det med era egna konsulter, eller börja gratis idag - inget betalkort krävs.",
  },
  home: {
    seoTitle: "CV-hanteringsprogram för konsultbolag",
    seoDesc: "AI-nativt CV-hanteringsprogram: en sökbar CV-databas och kompetensdatabas, skräddarsydda CV:n i er profil på minuter, 5+ EU-språk, GDPR by design. Gratisplan.",
    eyebrow: "AI-nativ CV-hanteringsprogramvara för konsultbolag",
    h1: "Varje konsult-CV, i er profil och klart på minuter.",
    sub: "MagicCV håller teamets profiler uppdaterade och gör om dem till skräddarsydda CV:n - för varje kund, anbud och språk. En enda sanningskälla, minuter i stället för kvällar.",
    stats: [
      { value: "1 dag → 15 min", label: "per CV-paket" },
      { value: "5+", label: "EU-språk" },
      { value: "GDPR by design", label: "inbyggt från dag ett" },
    ],
    logoWall: "Betrott av europeiska konsultteam",
    problemH2: "Konsult-CV:n borde inte vara så mycket jobb.",
    problemP: "CV:n ligger på delade diskar, i inkorgar och på laptops - inaktuella i samma stund som de behövs. Varje kundintro eller anbud innebär att jaga folk och formatera om för hand, och kvaliteten glider varje gång. MagicCV gör den aktuella versionen till den enkla versionen.",
    howTitle: "Så fungerar det",
    how: [
      { title: "Importera konsulterna en gång", body: "Ta in befintliga CV:n och få strukturerade, alltid aktuella profiler för hela teamet - en sanningskälla i stället för utspridda filer." },
      { title: "Anpassa till kund, brief eller format", body: "Välj konsult och syfte - en kundintro, ett anbud, en specifik mall - så formar MagicCV CV:t därefter. Klistra in en RFP när du har en; det är en väg, inte den enda." },
      { title: "Exportera ett paket i er profil, på valfritt språk", body: "Få ett inlämningsklart CV eller helt paket i byråns grafiska profil, anonymiserat vid behov, på språket ni arbetar i." },
    ],
    capsTitle: "Allt för att CV:n ska vinna uppdrag",
    caps: [
      { title: "RFP-till-CV-resonemang", body: "Utgår från briefen, inte mallen." },
      { title: "Profilsäkra exporter", body: "Varje CV, perfekt i er profil." },
      { title: "Anonymisering & GDPR", body: "Inbyggt, inte påklistrat." },
      { title: "Flerspråkigt & översättning", body: "Lämna anbud på varje europeiskt språk." },
      { title: "Centrala profiler & kompetenser", body: "En strukturerad profil, oändligt återanvändbar." },
    ],
    valueTitle: "Jämn kvalitet, oavsett volym",
    valueP: "För COO:n eller managing partnern: skala anbudsproduktionen utan fler anställda, med synlig ROI på varje skickat CV.",
    valueLink: "Se fullständiga priser & ROI",
    roiTitle: "Vad kan detta kosta ert team?",
    vsTitle: "Varför MagicCV i stället för alternativen",
    vsSeeAll: "Se alla jämförelser",
    vsCols: { magiccv: "MagicCV", template: "Mallverktyg", nothing: "Göra ingenting (SharePoint + Word)" },
    vsRows: [
      { label: "Utgångspunkt", a: "Resonerar utifrån briefen", b: "En CV-mall", c: "Ett tomt dokument, varje gång" },
      { label: "Priser", a: "Publika, självbetjäning", b: "Ofta bakom en demo", c: "0 kr i direkt kostnad" },
      { label: "Tid per CV-paket", a: "Cirka 15 minuter", b: "Snabbare än inget, men manuellt", c: "Timmar, varje gång" },
    ],
    teamTitle: "Byggt för ert team",
    teamLinks: ["Säljteam", "Rekryteringsteam", "HR / People Ops", "Projektleverans"],
    firmTitle: "Byggt för er byrå",
    firmLinks: ["Mjukvaru- & IT-konsulting", "Strategi- & managementkonsulting", "Design- & kreativa byråer", "Offentlig sektor & upphandling"],
    trustTitle: "Byggt på europeiskt förtroende från dag ett",
    trustP: "Datalagring inom EU, SSO, DPA-mallar och GDPR by design rakt igenom.",
    trustLink: "Besök Trust Center",
    seoBlock: {
      h2: "CV-hanteringsprogram byggt för hur konsultarbete faktiskt fungerar",
      p1: "De flesta CV-hanteringsprogram byggdes för rekryterare som gallrar tusentals ansökningar. MagicCV är annorlunda: ett CV-hanteringssystem för de människor ni redan anställer - en sökbar CV-databas där varje konsults kompetenser, projekt och certifieringar ligger som strukturerad data i stället för i inaktuella Word-filer.",
      p2: "Då blir de tunga delarna av CV-hantering automatiska: importera befintliga filer och låt CV-parsning bygga profilen. Sök hela teamet som i en kompetensmatris. Generera på minuter ett skräddarsytt CV i er profil för varje kund, anbud och språk - med databasen som enda sanningskälla.",
      faqTitle: "CV-hanteringsprogram, förklarat",
      faqs: [
        { question: "Vad är ett CV-hanteringsprogram?", answer: "Ett CV-hanteringsprogram håller teamets CV:n i en strukturerad, sökbar databas och genererar putsade, aktuella dokument på begäran. I stället för att jaga den senaste Word-filen underhåller ni en profil per person och exporterar skräddarsydda CV:n i er profil för varje kund, anbud och språk." },
        { question: "Vad skiljer en CV-databas från ett ATS?", answer: "Ett ATS hanterar externa kandidater i en rekryteringspipeline. En CV-databas som MagicCV hanterar de människor ni redan har - konsulter vars CV:n ni presenterar för kunder - och håller deras profiler aktuella och direkt exporterbara i er grafiska profil." },
        { question: "Fungerar MagicCV som rekryteringsverktyg med kompetensdatabas?", answer: "Ja. Rekryterings- och bemanningsteam använder MagicCV som kompetensdatabas: importera CV:n en gång, håll strukturerade profiler aktuella, sök på kompetens och exportera kundklara, anonymiserade eller översatta CV:n på minuter." },
        { question: "Kan jag söka i CV-databasen på kompetens?", answer: "Ja - varje profil är strukturerad data. Filtrera hela teamet på kompetens, certifiering, språk eller tidigare projekt och bemanna nästa brief på minuter." },
      ],
    },
  },
  pricing: {
    seoTitle: "Priser - Gratisplan, Pro för 50 $/mån",
    seoDesc: "Transparenta priser för konsult-CV-hantering. Börja gratis (10 profiler, 30 CV:n - inget betalkort), Pro för 50 $/mån, Enterprise på offert.",
    h1: "Enkla, publika priser.",
    sub: "Ingen demospärr. Inga överraskningar. Börja gratis, uppgradera när ni växer.",
    mostPopular: "Mest populär",
    custom: "Offert",
    tiers: {
      free: {
        name: "Free",
        limits: "10 kandidatprofiler · 30 CV:n (totalt)",
        anchor: "Prova hela arbetsflödet med ert eget team - inget betalkort, ingen klocka.",
        features: ["10 kandidatprofiler (totalt)", "30 CV:n (totalt)", "AI-generering & chattredigering", "Profilmallar & PDF-export", "Communitysupport"],
        cta: "Kom igång gratis",
      },
      pro: {
        name: "Pro",
        limits: "200 kandidatprofiler · 600 CV:n",
        anchor: "Hela CV-arbetsflödet för ett aktivt konsultteam.",
        features: ["Allt i Free", "200 kandidatprofiler", "600 CV:n", "Anonymisering & flerspråkig export", "Central profilsökning & taggar", "Prioriterad support"],
        cta: "Kom igång gratis",
      },
      enterprise: {
        name: "Enterprise",
        limits: "Obegränsade profiler & CV:n",
        anchor: "Obegränsad skala, SSO, datalagring inom EU, upphandlingsklara avtal.",
        features: ["Allt i Pro", "Obegränsade profiler & CV:n", "SSO & rollbaserad åtkomst", "Garantier för datalagring inom EU", "DPA & anpassade avtal", "Dedikerad onboarding & SLA:er"],
        cta: "Kontakta oss",
      },
    },
    matrixTitle: "Jämför varje funktion per plan",
    featureCol: "Funktion",
    matrix: [
      { group: "Gränser", rows: [
        { feature: "Kandidatprofiler", free: "10 (totalt)", pro: "200", enterprise: "Obegränsat" },
        { feature: "Genererade CV:n", free: "30 (totalt)", pro: "600", enterprise: "Obegränsat" },
      ]},
      { group: "Kärnflöde", rows: [
        { feature: "AI-generering & chattredigering", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Anpassning till brief eller RFP", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Central profilsökning & taggar", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Varumärke & export", rows: [
        { feature: "Profilmallar & PDF-export", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "Kund-/upphandlingsspecifika mallar", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "White label-exporter", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Språk & anonymisering", rows: [
        { feature: "Flerspråkig export (5+ EU-språk)", free: "-", pro: "✓", enterprise: "✓" },
        { feature: "Anonymisering med ett klick", free: "-", pro: "✓", enterprise: "✓" },
      ]},
      { group: "Säkerhet & efterlevnad", rows: [
        { feature: "GDPR by design", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "SSO & rollbaserad åtkomst", free: "-", pro: "-", enterprise: "✓" },
        { feature: "Garantier för datalagring inom EU", free: "-", pro: "-", enterprise: "✓" },
        { feature: "DPA & anpassade avtal", free: "-", pro: "-", enterprise: "✓" },
      ]},
      { group: "Support", rows: [
        { feature: "Support", free: "Community", pro: "Prioriterad", enterprise: "Dedikerad onboarding + SLA" },
      ]},
    ],
    strip: ["Gratisplan - inget betalkort, inget slutdatum.", "Pro är månadsvis; avsluta när som helst.", "Betalning med kort (Stripe); faktura för Enterprise.", "Anpassade avtal & DPA för Enterprise."],
    roiTitle: "Vad kostar nuläget er?",
    faqsTitle: "Vanliga frågor",
    faqs: [
      { question: "Är gratisplanen en provperiod?", answer: "Nej - det är en riktig gratisplan utan klocka. Ni får totalt 10 kandidatprofiler och 30 CV:n, inget betalkort krävs." },
      { question: "Är gränserna i Free per månad?", answer: "Nej, de är totaler: 10 kandidatprofiler och 30 genererade CV:n totalt. Pro höjer det till 200 profiler och 600 CV:n." },
      { question: "I vilken valuta sker debitering?", answer: "I USD. Pro kostar 50 $ per månad; Enterprise offereras individuellt." },
      { question: "Vad ingår i Enterprise?", answer: "Obegränsade profiler och CV:n, SSO och rollbaserad åtkomst, garantier för datalagring inom EU, DPA och anpassade avtal, plus dedikerad onboarding och SLA:er." },
      { question: "Var lagras våra data?", answer: "Trust Center visar den aktuella, faktabaserade bilden av datalagring inom EU och databehandling för alla planer." },
      { question: "Kan jag säga upp när som helst?", answer: "Ja. Pro löper månadsvis - avsluta när som helst. Och gratisplanen upphör aldrig." },
    ],
  },
};

export const dictionaries: Record<Locale, Dict> = { de, fr, nl, sv };
