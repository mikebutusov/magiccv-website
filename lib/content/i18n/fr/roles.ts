import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Responsables commerciaux / business development, garants du taux de succès des propositions et de la vélocité du pipeline.",
    h1: "Gagnez davantage des propositions que vous soumettez.",
    sub: "Ne laissez plus des CV lents et génériques vous coûter des dossiers. MagicCV donne aux équipes commerciales des dossiers de consultants prêts pour le RFP en quelques minutes - adaptés à chaque opportunité.",
    pain: {
      quote: "Nous perdons des RFP que nous devrions gagner, et la préparation des CV est toujours le goulot d'étranglement.",
      answer: "MagicCV vous fournit des dossiers de CV adaptés et à votre image, alignés sur le cahier des charges, prêts avant l'échéance.",
      proofPoints: [
        "Un délai réduit entre le cahier des charges et la soumission",
        "Un taux de succès plus élevé sur les dossiers adaptés",
        "Une qualité cohérente et à votre image dans toute l'équipe",
      ],
    },
    featureRows: [
      {
        title: "Associez automatiquement les bonnes personnes à chaque cahier des charges",
        body: "MagicCV lit le cahier des charges et fait ressortir les consultants les plus adaptés de votre vivier.",
        screenshotAlt: "Rapprochement des consultants avec un cahier des charges RFP",
      },
      {
        title: "Adaptez chaque CV aux conditions de succès de l'opportunité",
        body: "Chaque CV met en avant ce sur quoi ce cahier des charges précis évalue - pas un résumé générique.",
        screenshotAlt: "CV adapté mettant en évidence l'expérience liée aux conditions de succès",
      },
      {
        title: "Ne ratez plus jamais une échéance - un dossier en 15 minutes",
        body: "Passez du cahier des charges à un dossier de CV prêt à soumettre assez vite pour que ce ne soit plus le goulot d'étranglement.",
        screenshotAlt: "Dossier de CV de proposition généré rapidement avant une échéance",
      },
      {
        title: "Une qualité cohérente et à votre image, qui reflète le cabinet",
        body: "Chaque soumission semble venir du même cabinet, parce qu'elle repose sur le même modèle de marque.",
        screenshotAlt: "Dossier de CV cohérents avec la marque pour plusieurs consultants",
      },
    ],
    stats: [
      { value: "1 jour → 15 min", label: "par dossier de CV", isPlaceholder: true },
      { value: "+18%", label: "de taux de succès sur les dossiers adaptés" },
    ],
    includeRoiTeaser: true,
    related: [
      { label: "Adapter les CV à chaque cahier des charges", href: "/use-cases/tailor-cvs" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "MagicCV vs SharePoint + Word", href: "/compare/sharepoint-word" },
    ],
    seo: {
      title: "MagicCV pour les équipes commerciales - Gagnez plus de propositions de conseil",
      description:
        "Ne laissez plus des CV lents et génériques vous coûter des dossiers. MagicCV donne aux équipes commerciales des dossiers de consultants prêts pour le RFP en quelques minutes.",
      keywords: ["outil de CV pour propositions commerciales", "gagner plus de RFP conseil"],
    },
  },
  {
    _type: "rolePage",
    slug: "recruitment",
    reader: "Responsables recrutement / resourcing qui maintiennent les profils de consultants et répondent aux demandes de staffing et d'appels d'offres.",
    h1: "Transformez votre vivier de talents en profils prêts pour la proposition.",
    sub: "Gardez chaque CV de consultant à jour, consultable et instantanément mis en forme pour n'importe quel cahier des charges ou dossier.",
    pain: {
      quote: "Je passe mon temps à relancer les consultants pour des CV à jour et à les reformater à la main.",
      answer: "MagicCV donne à chaque personne un profil central, toujours à jour - générez n'importe quel format à la demande.",
      proofPoints: [
        "Fini les relances de consultants pour des mises à jour",
        "Une source de vérité unique par personne",
        "Une intégration rapide des CV des nouvelles recrues",
      ],
    },
    featureRows: [
      {
        title: "Des profils de consultants centralisés et structurés",
        body: "L'expérience de chaque consultant existe sous forme de données structurées, au même endroit, et non dans des documents éparpillés.",
        screenshotAlt: "Base de données centralisée de profils de consultants",
      },
      {
        title: "Un profil → de nombreux livrables adaptés",
        body: "Générez le format dont un dossier ou un client a besoin, directement depuis le profil à jour.",
        screenshotAlt: "Plusieurs CV générés à partir d'un seul profil",
      },
      {
        title: "Import & enrichissement depuis LinkedIn/HRIS",
        body: "Importez vos CV existants dès aujourd'hui ; l'enrichissement LinkedIn et HRIS est sur la feuille de route.",
        screenshotAlt: "Parcours d'import et d'enrichissement de profil",
      },
      {
        title: "Trouvez la bonne personne rapidement",
        body: "Recherchez par compétences et expérience dans tout votre vivier pour répondre vite à une demande de staffing.",
        screenshotAlt: "Recherche par compétences dans les profils de consultants",
      },
    ],
    stats: [
      { value: "6 hrs", label: "gagnées par semaine en relances évitées" },
    ],
    related: [
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Agences de staffing & de talents spécialisées", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "MagicCV pour les équipes Recrutement & Resourcing",
      description:
        "Gardez chaque CV de consultant à jour, consultable et instantanément mis en forme pour n'importe quel cahier des charges ou dossier.",
      keywords: ["base de CV de consultants", "outil de CV pour le resourcing"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "RH / People Ops - le profil gardien des données. Se soucie de données propres et de l'absence de systèmes parallèles.",
    h1: "Une source de vérité unique pour chaque CV de consultant.",
    sub: "Cessez de maintenir des CV à cinq endroits. MagicCV garde les profils propres, cohérents et conformes - sans shadow IT.",
    pain: {
      quote: "Les CV vivent dans des disques partagés, des boîtes mail et des ordinateurs portables - les données sont un chaos.",
      answer: "MagicCV remplace tout cela par des profils structurés et gouvernés, avec un accès basé sur les rôles.",
      proofPoints: [
        "Des données propres et structurées plutôt que des fichiers éparpillés",
        "Le RGPD intégré dès la conception, de bout en bout",
        "Aucun système en double à maintenir",
      ],
    },
    featureRows: [
      {
        title: "Des profils structurés, fini les documents libres",
        body: "Les données de chaque consultant existent sous forme de champs structurés, et non dans un document Word non structuré.",
        screenshotAlt: "Vue du schéma de profil structuré",
      },
      {
        title: "Accès basé sur les rôles & gouvernance",
        body: "Contrôlez qui peut voir et modifier quoi, avec une responsabilité claire sur les données des consultants.",
        screenshotAlt: "Paramètres de contrôle d'accès basé sur les rôles",
      },
      {
        title: "Intégrations HRIS (feuille de route)",
        body: "Les intégrations Personio, BambooHR et HiBob sont sur la feuille de route pour maintenir les profils à jour automatiquement.",
        screenshotAlt: "Panneau des paramètres d'intégration HRIS",
      },
      {
        title: "RGPD dès la conception, résidence des données dans l'UE, journaux d'audit",
        body: "Le traitement des données est bâti autour des exigences du RGPD depuis le départ, avec résidence des données dans l'UE et journaux d'audit.",
        screenshotAlt: "Paramètres des journaux d'audit et de résidence des données",
      },
    ],
    stats: [],
    related: [
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV pour les RH & People Ops - Des données de CV propres et conformes",
      description:
        "Cessez de maintenir des CV à cinq endroits. MagicCV garde les profils propres, cohérents et conformes.",
      keywords: ["gestion de CV RGPD", "système de CV de consultants RH"],
    },
  },
  {
    _type: "rolePage",
    slug: "project-delivery",
    reader: "Responsables delivery / mission / practice qui staffent les projets et ont besoin de CV pour les propositions clients et les lancements de mission.",
    h1: "Mettez les bonnes personnes face à chaque client.",
    sub: "Générez des CV de consultants prêts pour la mission et à votre image, alignés sur les exigences du client - sans détourner le temps de delivery vers de l'administratif.",
    pain: {
      quote: "Chaque nouvelle mission signifie courir après des CV à jour, au bon format pour ce client.",
      answer: "MagicCV vous donne des dossiers de CV instantanés et adaptés au client, pour staffer et pitcher plus vite.",
      proofPoints: [
        "Une mobilisation plus rapide sur les nouvelles missions",
        "Des modèles spécifiques au client, y compris les formats de marchés publics et grands comptes",
        "Un rendu multilingue pour la livraison transfrontalière",
      ],
    },
    featureRows: [
      {
        title: "Associez les consultants aux exigences du projet",
        body: "Trouvez les bonnes personnes pour une mission à partir des exigences exprimées par le client.",
        screenshotAlt: "Rapprochement des consultants avec les exigences du projet",
      },
      {
        title: "Exports spécifiques au client et au modèle",
        body: "Basculez entre votre charte maison et le format exigé par un client sans travail manuel supplémentaire.",
        screenshotAlt: "Export de CV dans un modèle spécifique au client",
      },
      {
        title: "Multilingue pour la livraison transfrontalière",
        body: "Générez des CV dans les langues où travaillent réellement vos équipes de delivery et vos clients.",
        screenshotAlt: "Jeu de CV multilingues pour une mission transfrontalière",
      },
      {
        title: "Profils anonymisés pour les soumissions à l'aveugle ou concurrentielles",
        body: "Recourez à l'anonymisation quand une mission ou un appel d'offres l'exige.",
        screenshotAlt: "CV anonymisé pour une soumission de mission concurrentielle",
      },
    ],
    stats: [],
    related: [
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "MagicCV pour les équipes Delivery & Missions",
      description:
        "Générez des CV de consultants prêts pour la mission et à votre image, alignés sur les exigences du client.",
      keywords: ["outil de CV pour le staffing de projets", "CV de mission conseil"],
    },
  },
];
