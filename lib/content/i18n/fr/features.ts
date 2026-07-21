import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "Raisonnement RFP-vers-CV",
    h1: "Tout commence par le RFP, pas par un modèle.",
    sub: "MagicCV lit le cahier des charges, comprend les conditions de succès et remodèle chaque CV en conséquence - la différence d'un outil nativement IA.",
    whatItDoesBody:
      "Les outils à base de modèles partent d'un CV en espérant qu'il corresponde au cahier des charges. MagicCV part du RFP : il lit les conditions de succès, identifie l'expérience pertinente et la remet en avant dans le CV de chaque consultant. Chaque affirmation reste traçable jusqu'au profil source - nous n'inventons rien, nous remettons en valeur. Un mode conservateur optionnel « sans génération » est disponible pour les cas où un humain doit relire avant toute rédaction.",
    benefits: [
      {
        title: "Lit le cahier des charges comme un responsable d'appels d'offres",
        body: "MagicCV analyse le RFP pour en extraire les conditions de succès, les compétences requises et les critères d'évaluation - exactement ce qu'un bid manager expérimenté regarde en premier.",
        screenshotAlt: "Génération RFP-vers-CV : vue d'analyse du cahier des charges",
      },
      {
        title: "Remet en valeur, n'invente jamais",
        body: "Chaque phrase d'un CV généré est traçable jusqu'à un fait du profil source du consultant. Rien n'est inventé pour coller au cahier des charges.",
        screenshotAlt: "Génération RFP-vers-CV : vue de provenance des affirmations",
      },
      {
        title: "Un mode conservateur quand vous voulez garder l'humain dans la boucle",
        body: "Activez le mode « sans génération » pour que MagicCV signale l'expérience pertinente à relire, au lieu de rédiger directement le CV.",
        screenshotAlt: "Génération RFP-vers-CV : activation du mode conservateur",
      },
    ],
    connectsTo: [
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
    ],
    faqs: [
      {
        question: "MagicCV invente-t-il parfois une expérience que le consultant n'a pas ?",
        answer:
          "Non. Le raisonnement RFP-vers-CV ne fait que remettre en valeur et réordonner l'expérience réelle issue du profil source du consultant. Chaque affirmation d'un CV généré est traçable jusqu'à ce profil.",
      },
      {
        question: "Et si je veux qu'une personne vérifie le résultat avant utilisation ?",
        answer:
          "Activez le mode conservateur (« sans génération »). MagicCV présentera l'expérience pertinente et les mises en avant suggérées pour votre relecture, au lieu de produire automatiquement un CV final.",
      },
      {
        question: "Que dois-je coller - le RFP complet ou un résumé ?",
        answer:
          "Collez le cahier des charges tel que vous l'avez, qu'il s'agisse d'un document RFP complet, d'une grille de critères d'évaluation ou d'un court résumé. MagicCV en extrait ce dont il a besoin.",
      },
    ],
    related: [
      { label: "Adapter les CV à chaque cahier des charges", href: "/use-cases/tailor-cvs" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV vs Flowcase", href: "/compare/flowcase" },
    ],
    seo: {
      title: "Raisonnement RFP-vers-CV - le moteur nativement IA de MagicCV",
      description:
        "MagicCV lit le cahier des charges, comprend les conditions de succès et remodèle le CV de chaque consultant en conséquence - sans inventer d'expérience.",
      keywords: ["CV IA pour appel d'offres", "outil RFP vers CV", "adapter CV au RFP"],
    },
  },
  {
    _type: "featurePage",
    slug: "brand-templates",
    name: "Exports fidèles à votre marque",
    h1: "Chaque CV, parfaitement à votre image.",
    sub: "Vos polices, vos couleurs et votre mise en page - appliquées automatiquement à chaque CV de consultant et à chaque dossier de proposition.",
    whatItDoesBody:
      "Définissez votre marque une seule fois - polices, couleurs, emplacement du logo, mise en page - et chaque CV généré par MagicCV l'applique automatiquement. Exportez en PDF ou en DOCX, et basculez vers des modèles spécifiques à un client ou à un appel d'offres quand un dossier exige un format particulier, sans toucher aux données de profil sous-jacentes.",
    benefits: [
      {
        title: "Un modèle de marque, appliqué partout",
        body: "Définissez l'identité visuelle de votre cabinet une seule fois. Chaque CV de consultant et chaque dossier de proposition en hérite automatiquement - aucune mise en forme manuelle par dossier.",
        screenshotAlt: "Éditeur de modèle de marque avec logo et couleurs du cabinet appliqués",
      },
      {
        title: "Des formats spécifiques client ou appel d'offres à la demande",
        body: "Gardez votre charte maison par défaut, et basculez vers le modèle exigé par un client ou le format d'un marché public sans rien reconstruire à la main.",
        screenshotAlt: "Sélecteur de modèles montrant la charte maison face à un format spécifique client",
      },
      {
        title: "Export en PDF ou DOCX",
        body: "Générez des fichiers prêts à soumettre, dans le format dont votre processus de proposition a réellement besoin.",
        screenshotAlt: "Fenêtre d'export montrant les options de sortie PDF et DOCX",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Peut-on utiliser un modèle différent pour un client ou un appel d'offres précis ?",
        answer:
          "Oui. Définissez votre charte maison par défaut et ajoutez des modèles spécifiques à un client ou à un appel d'offres dès qu'un dossier l'exige, sans toucher aux données de profil sous-jacentes.",
      },
      {
        question: "Quels formats d'export sont pris en charge ?",
        answer: "PDF et DOCX aujourd'hui, tous deux générés à partir du même système de modèles à votre image.",
      },
    ],
    related: [
      { label: "Agences de design & créatives", href: "/solutions/design-agencies" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
    ],
    seo: {
      title: "Modèles de CV et exports fidèles à votre marque - MagicCV",
      description:
        "Vos polices, couleurs et mise en page appliquées automatiquement à chaque CV de consultant et dossier de proposition. Export PDF et DOCX.",
      keywords: ["modèle de CV à votre marque", "CV de consultants homogènes"],
    },
  },
  {
    _type: "featurePage",
    slug: "anonymization",
    name: "Anonymisation & RGPD",
    h1: "L'anonymisation intégrée d'origine, pas ajoutée après coup.",
    sub: "Des CV anonymes en un clic pour les appels d'offres et les dossiers concurrentiels, avec le RGPD intégré dès la conception.",
    whatItDoesBody:
      "Activez l'anonymisation sur n'importe quel CV pour retirer noms, photos et autres éléments identifiants selon des règles que vous contrôlez - de façon cohérente, dans toute votre équipe, à chaque fois. Conçu pour les évaluations à l'aveugle et les marchés publics, et adossé à un traitement des données conforme au RGPD dès la conception, de bout en bout. Consultez le Trust Center pour la vue complète de la conformité.",
    benefits: [
      {
        title: "Anonymisation en un clic",
        body: "Retirez les éléments identifiants de n'importe quel CV d'un simple bouton - pas de caviardage manuel, pas d'incohérence entre consultants.",
        screenshotAlt: "Bouton d'anonymisation montrant la comparaison avant/après du CV",
      },
      {
        title: "Des règles qui déterminent ce qui est retiré",
        body: "Configurez précisément quels champs comptent comme identifiants pour votre processus, afin que les CV anonymisés répondent à l'exigence spécifique de l'appel d'offres ou de l'évaluation.",
        screenshotAlt: "Panneau de configuration des règles d'anonymisation",
      },
      {
        title: "Cohérent à grande échelle",
        body: "Chaque CV anonymisé suit les mêmes règles, qu'il s'agisse d'une seule soumission ou d'un dossier d'équipe complet pour un marché public.",
        screenshotAlt: "Dossier de CV anonymisés pour une équipe de plusieurs consultants",
      },
    ],
    connectsTo: [
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Qu'est-ce qui est retiré lorsqu'un CV est anonymisé ?",
        answer:
          "Les noms, photos et autres éléments identifiants sont retirés selon les règles que vous configurez - conçues pour répondre aux exigences des évaluations à l'aveugle et des marchés publics.",
      },
      {
        question: "Est-ce conforme au RGPD ?",
        answer:
          "L'anonymisation est un des volets de l'approche RGPD dès la conception de MagicCV. Consultez le Trust Center pour la vue complète sur la résidence des données, la conservation et le traitement.",
      },
    ],
    related: [
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "Anonymisation de CV & RGPD - MagicCV",
      description:
        "Des CV anonymes en un clic pour les appels d'offres et les dossiers concurrentiels, avec le RGPD intégré dès la conception.",
      keywords: ["anonymisation de CV", "outil CV RGPD"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Multilingue & traduction",
    h1: "Répondez aux appels d'offres dans toutes les langues européennes.",
    sub: "Générez des CV professionnels et à votre image en EN, DE, FR, NL, ES et plus encore, à partir d'un seul profil maître.",
    whatItDoesBody:
      "Maintenez un seul profil maître par consultant, puis générez à la demande des CV précis et à votre image dans n'importe quelle langue prise en charge - sans ressaisie ni documents séparés à synchroniser. La couverture actuelle englobe les principales langues de l'UE dans lesquelles les clients mid-market de MagicCV soumissionnent le plus, avec d'autres langues sur la feuille de route.",
    benefits: [
      {
        title: "Un profil maître, de nombreuses langues",
        body: "Maintenez une source de vérité unique par consultant. Générez un CV traduit et à votre image dans n'importe quelle langue prise en charge dès qu'un dossier l'exige.",
        screenshotAlt: "Sélecteur de langue générant un CV en plusieurs langues de l'UE",
      },
      {
        title: "Conçu pour les marchés publics européens",
        body: "Les appels d'offres transfrontaliers et les jurys d'évaluation multilingues sont le cas normal pour les clients de MagicCV, pas une exception.",
        screenshotAlt: "Dossier de CV multilingue pour un appel d'offres transfrontalier",
      },
      {
        title: "Une qualité constante d'une langue à l'autre",
        body: "Le même modèle de marque et les mêmes faits sous-jacents se retrouvent dans chaque version linguistique - rien ne dérive entre les traductions.",
        screenshotAlt: "Comparaison côte à côte d'un CV dans deux langues",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Quelles langues sont prises en charge aujourd'hui ?",
        answer:
          "EN, DE, FR, NL et ES sont pris en charge aujourd'hui, couvrant les principales langues dans lesquelles les clients européens mid-market de MagicCV soumissionnent. D'autres langues de l'UE sont sur la feuille de route.",
      },
      {
        question: "Dois-je maintenir un profil distinct par langue ?",
        answer:
          "Non. Maintenez un seul profil maître par consultant et générez n'importe quelle langue prise en charge à la demande - il n'y a rien à synchroniser manuellement.",
      },
    ],
    related: [
      { label: "Traduire les CV dans n'importe quelle langue", href: "/use-cases/translate-cvs" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "CV multilingues & traduction - MagicCV",
      description:
        "Générez des CV professionnels et à votre image en EN, DE, FR, NL, ES et plus encore, à partir d'un seul profil maître.",
      keywords: ["outil de CV multilingue", "CV en plusieurs langues"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Profils centralisés & intelligence des compétences",
    h1: "Un profil structuré par personne - réutilisable à l'infini.",
    sub: "Importez, enrichissez et recherchez toute votre équipe par compétences et expérience ; générez n'importe quel livrable à la demande.",
    whatItDoesBody:
      "Remplacez les CV éparpillés dans les disques partagés et les boîtes mail par un profil structuré et toujours à jour par consultant. Importez depuis vos fichiers existants dès aujourd'hui, avec l'enrichissement LinkedIn et HRIS sur la feuille de route, puis recherchez dans tout votre vivier par compétence ou expérience et générez le livrable qu'exige chaque dossier - à la demande, depuis une source de vérité unique.",
    benefits: [
      {
        title: "Des profils structurés, pas des documents libres",
        body: "L'expérience, les compétences et les certifications de chaque consultant existent sous forme de données structurées - consultables et réutilisables, pas enfermées dans un fichier Word.",
        screenshotAlt: "Éditeur de profil de consultant structuré",
      },
      {
        title: "Importer et enrichir",
        body: "Commencez par importer vos CV existants. L'enrichissement LinkedIn et HRIS (Personio, BambooHR, HiBob) est sur la feuille de route pour maintenir les profils à jour automatiquement.",
        screenshotAlt: "Parcours d'import de profils depuis des fichiers CV existants",
      },
      {
        title: "Trouvez la bonne personne rapidement",
        body: "Recherchez dans tout votre vivier par compétence, certification ou projet passé pour staffer le prochain dossier en quelques minutes, sans fouiller dans des dossiers partagés.",
        screenshotAlt: "Recherche par compétences dans le vivier de consultants",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Comment importer nos CV existants dans MagicCV ?",
        answer:
          "Importez vos fichiers CV existants pour créer des profils structurés. L'enrichissement LinkedIn et HRIS (Personio, BambooHR, HiBob) est sur la feuille de route pour les maintenir à jour avec moins d'effort manuel.",
      },
      {
        question: "Puis-je rechercher parmi tous les consultants par compétence ?",
        answer:
          "Oui. Chaque profil est constitué de données structurées : vous pouvez donc rechercher dans tout votre vivier par compétence, certification ou projet passé pour staffer un dossier rapidement.",
      },
    ],
    related: [
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Pour les équipes RH / People Ops", href: "/solutions/hr" },
      { label: "Pour les équipes Recrutement", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Profils de consultants centralisés & intelligence des compétences - MagicCV",
      description:
        "Importez, enrichissez et recherchez toute votre équipe par compétences et expérience ; générez n'importe quel livrable à la demande.",
      keywords: ["base de compétences consultants", "gestion des profils CV"],
    },
  },
];
