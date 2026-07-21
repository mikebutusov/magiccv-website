import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Adapter le CV de chaque consultant au cahier des charges spécifique, en mettant en avant l'expérience la plus pertinente et les conditions de succès.",
    h1: "Adaptez chaque CV à chaque cahier des charges - automatiquement.",
    sub: "MagicCV raisonne sur le RFP et remodèle le CV de chaque consultant pour mettre en avant ce qui compte pour cette opportunité.",
    problemToday:
      "Chaque RFP a ses propres conditions de succès, mais la plupart des CV sont des documents figés. Les équipes de réponse finissent par relire et réordonner à la main l'expérience de chaque consultant, pour chaque cahier des charges - ou elles y renoncent et soumettent un CV générique qui sous-vend l'adéquation.",
    steps: [
      {
        title: "Collez le RFP ou le cahier des charges",
        body: "Déposez le document RFP, une grille de critères d'évaluation ou un court résumé de ce que recherche le client.",
        screenshotAlt: "Cahier des charges RFP collé dans MagicCV",
      },
      {
        title: "MagicCV identifie et remet en valeur l'expérience pertinente",
        body: "Il n'invente jamais - chaque affirmation est traçable jusqu'au profil source du consultant, simplement réordonnée et remise en valeur pour correspondre au cahier des charges.",
        screenshotAlt: "Expérience pertinente mise en évidence face aux exigences du cahier des charges",
      },
      {
        title: "Relisez et exportez, à votre image",
        body: "Vérifiez le résultat, ajustez si nécessaire, et exportez dans le modèle de marque de votre cabinet.",
        screenshotAlt: "Export d'un CV adapté dans le modèle de marque",
      },
    ],
    outcome: "Une pertinence accrue à chaque cahier des charges, et de meilleures chances à chaque dossier soumis.",
    outcomeStats: [{ value: "+18%", label: "de taux de succès sur les dossiers adaptés" }],
    faqs: [
      {
        question: "Cela réécrit-il l'expérience réelle d'un consultant ?",
        answer:
          "Non. MagicCV remet en valeur et réordonne l'expérience réelle issue du profil source pour correspondre au cahier des charges - il n'invente jamais une expérience qui n'existe pas.",
      },
      {
        question: "Combien de temps prend l'adaptation d'un CV ?",
        answer: "Généralement quelques minutes, du collage du cahier des charges à un CV relu et prêt à exporter.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Pour les équipes commerciales", href: "/solutions/sales" },
    ],
    seo: {
      title: "Adapter les CV de consultants à chaque cahier des charges - MagicCV",
      description:
        "MagicCV raisonne sur le RFP et remodèle le CV de chaque consultant pour mettre en avant ce qui compte pour cette opportunité.",
      keywords: ["adapter CV au RFP", "personnaliser CV de consultant"],
    },
  },
  {
    _type: "useCasePage",
    slug: "proposal-cv-pack",
    job: "Assembler en une seule fois un dossier de CV complet et cohérent pour une proposition ou un appel d'offres.",
    h1: "Du RFP à un dossier de CV complet en 15 minutes.",
    sub: "Sélectionnez l'équipe, générez des CV adaptés pour tout le monde, et exportez un dossier unique à votre image, prêt à soumettre.",
    problemToday:
      "Assembler un dossier de CV pour une proposition, c'est relancer plusieurs personnes pour obtenir des CV à jour, reformater chacun à la main, et espérer que l'ensemble soit cohérent. C'est la classique course du vendredi soir avant l'échéance.",
    steps: [
      {
        title: "Choisissez l'équipe",
        body: "Sélectionnez vous-même les consultants pour ce dossier, ou laissez MagicCV suggérer les profils les plus adaptés de votre vivier.",
        screenshotAlt: "Écran de sélection d'équipe pour une proposition",
      },
      {
        title: "Générez des CV adaptés pour tout le monde à la fois",
        body: "Chaque CV du dossier est adapté au même cahier des charges, au même moment.",
        screenshotAlt: "Génération de CV en lot pour une équipe de proposition complète",
      },
      {
        title: "Exportez un dossier unifié, à votre image, prêt à soumettre",
        body: "Un document cohérent, prêt à joindre à la proposition.",
        screenshotAlt: "Dossier de CV exporté regroupant plusieurs consultants",
      },
    ],
    outcome: "Ce qui prenait une journée prend désormais environ quinze minutes - fini la course de dernière minute.",
    outcomeStats: [{ value: "1 jour → 15 min", label: "par dossier de CV", isPlaceholder: true }],
    faqs: [
      {
        question: "MagicCV peut-il suggérer qui inclure dans le dossier ?",
        answer:
          "Oui. À partir du cahier des charges et des compétences et de l'expérience de votre vivier, MagicCV peut suggérer les consultants les plus adaptés - mais vous gardez toujours le dernier mot.",
      },
      {
        question: "Le dossier reste-t-il cohérent dans sa mise en forme ?",
        answer: "Oui - chaque CV du dossier utilise le même modèle de marque, si bien que l'ensemble se lit comme un seul document.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Pour les équipes commerciales", href: "/solutions/sales" },
    ],
    seo: {
      title: "Constituer un dossier de CV prêt pour la proposition en quelques minutes - MagicCV",
      description:
        "Sélectionnez l'équipe, générez des CV adaptés pour tout le monde, et exportez un dossier unique à votre image, prêt à soumettre.",
      keywords: ["dossier de CV pour proposition", "pack CV appel d'offres conseil"],
    },
  },
  {
    _type: "useCasePage",
    slug: "centralize-cvs",
    job: "Remplacer les CV éparpillés sur les disques partagés par une source de vérité unique, structurée et à jour.",
    h1: "Un seul foyer pour chaque CV de consultant.",
    sub: "Un logiciel de cvthèque qui met fin à la chasse dans SharePoint : importez une fois, gardez chaque profil à jour et générez tout format à la demande.",
    problemToday:
      "Les CV vivent dans des disques partagés, des boîtes mail et des ordinateurs portables - plusieurs versions du CV d'une même personne, sans qu'aucune ne soit clairement la version à jour. Retrouver le bon fichier coûte du temps à chaque fois.",
    steps: [
      {
        title: "Importez depuis vos fichiers existants",
        body: "Apportez les CV que vous avez déjà pour créer des profils structurés. L'import LinkedIn et HRIS est sur la feuille de route.",
        screenshotAlt: "Écran d'import de CV en masse",
      },
      {
        title: "Maintenez des profils structurés, toujours à jour",
        body: "Un profil par personne, tenu à jour au même endroit plutôt que des documents éparpillés.",
        screenshotAlt: "Vue en liste des profils structurés",
      },
      {
        title: "Générez n'importe quel livrable, dans n'importe quel format, à tout moment",
        body: "Quel que soit le besoin d'un dossier ou d'une demande, générez-le depuis le profil à jour - sans chercher le dernier fichier en date.",
        screenshotAlt: "Sélecteur de format de sortie depuis un profil unique",
      },
    ],
    outcome: "Une source de vérité unique, aucune donnée en double, et tout va plus vite en aval.",
    outcomeStats: [],
    faqs: [
      {
        question: "Que deviennent nos fichiers CV existants ?",
        answer:
          "Importez-les pour créer des profils structurés dans MagicCV. À partir de là, le profil structuré devient la source de vérité à jour, et non le fichier d'origine.",
      },
      {
        question: "Vous intégrez-vous à notre HRIS ?",
        answer: "Les intégrations HRIS (Personio, BambooHR, HiBob) sont sur notre feuille de route.",
      },
    ],
    related: [
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Pour les équipes RH / People Ops", href: "/solutions/hr" },
      { label: "Pour les équipes Recrutement", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Logiciel de cvthèque - centralisez et standardisez les CV",
      description:
        "Un logiciel de gestion des CV qui met fin à la chasse dans SharePoint : importez une fois, gardez un profil à jour par personne et générez tout format à la demande.",
      keywords: ["cvthèque", "logiciel cvthèque", "base de données cv", "logiciel gestion cv"],
    },
  },
  {
    _type: "useCasePage",
    slug: "anonymize-cvs",
    job: "Produire des CV anonymisés pour les dossiers concurrentiels, les marchés publics et les soumissions sans biais.",
    h1: "Des CV anonymisés en un clic.",
    sub: "Retirez les éléments identifiants pour les évaluations à l'aveugle et les marchés publics - de façon cohérente, dans toute votre équipe.",
    problemToday:
      "Les marchés publics et les processus d'évaluation à l'aveugle exigent des CV anonymisés, et le caviardage manuel est lent et incohérent - la notion d'« anonymisé » d'un membre de l'équipe correspond rarement à celle d'un autre.",
    steps: [
      {
        title: "Générez un CV",
        body: "Partez d'un CV adapté ou standard pour le consultant.",
        screenshotAlt: "CV standard avant anonymisation",
      },
      {
        title: "Activez l'anonymisation",
        body: "Les noms, photos et autres éléments identifiants sont retirés selon les règles que vous avez configurées.",
        screenshotAlt: "Anonymisation appliquée à un CV",
      },
      {
        title: "Exportez pour une soumission à l'aveugle ou concurrentielle",
        body: "La version anonymisée est prête à exporter, cohérente avec chaque autre CV anonymisé produit par votre équipe.",
        screenshotAlt: "CV anonymisé prêt pour la soumission à un appel d'offres",
      },
    ],
    outcome: "Des soumissions conformes aux appels d'offres et à biais réduit, produites vite et de façon cohérente.",
    outcomeStats: [],
    faqs: [
      {
        question: "Qu'est-ce qui compte comme élément identifiant ?",
        answer:
          "Vous contrôlez les règles - typiquement le nom, la photo et tout autre élément que votre processus d'évaluation considère comme identifiant.",
      },
      {
        question: "L'anonymisation est-elle cohérente dans toute l'équipe ?",
        answer: "Oui - chaque CV anonymisé suit les mêmes règles configurées, quelle que soit la personne qui le génère.",
      },
    ],
    related: [
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
      { label: "Agences de staffing & de talents spécialisées", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "CV anonyme en un clic - pour appels d'offres et recrutement",
      description:
        "Produisez des CV anonymes pour l'évaluation à l'aveugle, les marchés publics et les candidatures sans biais - de façon cohérente dans toute l'équipe.",
      keywords: ["cv anonyme", "anonymisation cv", "cv anonymisé"],
    },
  },
  {
    _type: "useCasePage",
    slug: "translate-cvs",
    job: "Produire des CV précis et à votre image en plusieurs langues européennes pour les dossiers transfrontaliers.",
    h1: "Chaque CV, dans chaque langue où vous soumissionnez.",
    sub: "Générez des CV précis et professionnels en EN, DE, FR, NL, ES et plus encore - sans ressaisie ni remise en forme.",
    problemToday:
      "Les dossiers transfrontaliers et les jurys d'évaluation multilingues imposent que le même CV existe en plusieurs langues, synchronisées à mesure que le profil du consultant évolue. La traduction manuelle est lente et se périme vite.",
    steps: [
      {
        title: "Maintenez un profil maître unique",
        body: "Conservez un seul profil à jour par consultant comme source de vérité.",
        screenshotAlt: "Profil maître de consultant dans une langue",
      },
      {
        title: "Choisissez la ou les langues cibles",
        body: "Sélectionnez la ou les langues qu'exige ce dossier.",
        screenshotAlt: "Sélection de la langue pour la génération de CV",
      },
      {
        title: "Exportez des CV adaptés, traduits et à votre image",
        body: "Obtenez un CV cohérent et professionnel dans chaque langue sélectionnée, prêt à soumettre.",
        screenshotAlt: "CV traduits exportés côte à côte",
      },
    ],
    outcome: "Des dossiers multilingues instantanés pour les marchés publics européens et la livraison transfrontalière.",
    outcomeStats: [],
    faqs: [
      {
        question: "Quelles langues puis-je générer aujourd'hui ?",
        answer: "EN, DE, FR, NL et ES aujourd'hui, avec d'autres langues de l'UE sur la feuille de route.",
      },
      {
        question: "Les CV traduits restent-ils synchronisés quand le profil évolue ?",
        answer: "Oui - régénérez n'importe quelle langue à la demande depuis le profil maître à jour.",
      },
    ],
    related: [
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
      { label: "Conseil en logiciel & IT", href: "/solutions/it-consulting" },
    ],
    seo: {
      title: "Traduire un CV - des CV professionnels dans chaque langue",
      description:
        "Générez des CV précis et professionnels en EN, DE, FR, NL, ES et plus encore - sans ressaisie ni remise en forme.",
      keywords: ["générateur de CV multilingue", "outil de traduction de CV conseil"],
    },
  },
];
