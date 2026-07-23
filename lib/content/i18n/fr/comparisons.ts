import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase : lequel correspond à la façon dont votre équipe soumissionne ?",
    sub: "Les deux outils gèrent les CV de consultants pour les propositions. Les vraies différences : pour qui ils sont conçus, la vitesse de mise en service, et ce que l'IA fait réellement d'un RFP.",
    whereCompetitorWins: [
      "Le leader de la catégorie en notoriété : si votre équipe achats demande des références, Flowcase a des années d'études de cas grands comptes à présenter",
      "Un produit mature et abouti, affiné sur une large base de clients depuis l'époque CV Partner",
      "Des workflows de proposition grands comptes plus profonds, avec des processus établis pour les grandes équipes de réponse et des étapes formelles de relecture",
      "Un meilleur choix si vous avez besoin d'un éditeur qui a déjà passé la revue de sécurité dans des cabinets de votre taille, de nombreuses fois",
    ],
    whereMagicCvDiffers: [
      "Part du RFP : collez le cahier des charges et l'IA remodèle chaque CV autour de ses exigences, au lieu que vous décidiez quoi mettre en avant dans un modèle",
      "Édition par chat : « raccourcis les deux derniers postes, mets le travail bancaire en tête » au lieu de cliquer dans des champs de formulaire",
      "Des tarifs sur le site : offre Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV). Pas d'appel de démo pour connaître le prix",
      "Un délai de mise en valeur qui se compte en une journée, pas en projet d'implémentation : importez vos CV Word et PDF existants et exportez le premier CV à votre image l'après-midi même",
      "Anonymisation et traduction en un clic qui conservent votre mise en page, intégrées pour les appels d'offres et accords-cadres européens",
    ],
    rows: [
      { category: "Point de départ de l'adaptation", magiccv: "Le texte du RFP : l'IA lit le cahier des charges et remet chaque CV en valeur", competitor: "Le CV : vous choisissez les points forts dans des modèles de profil maître" },
      { category: "Mode d'édition", magiccv: "Instructions par chat plus modifications directes", competitor: "Formulaires structurés et champs de modèle" },
      { category: "Modèle tarifaire", magiccv: "Public : Free, Pro à 50 $/mois, Enterprise sur mesure", competitor: "Sur devis, généralement via un processus commercial et de démo" },
      { category: "Pour qui c'est conçu", magiccv: "Cabinets mid-market, 10-250 consultants", competitor: "Positionné vers les grands cabinets" },
      { category: "Démarrage", magiccv: "En libre-service : import des CV, premier export le jour même", competitor: "Généralement une phase d'onboarding et d'implémentation" },
      { category: "Anonymisation pour appels d'offres", magiccv: "Un clic, CV anonymes dans votre modèle", competitor: "Disponible ; la mise en place varie selon la configuration" },
    ],
    guidance:
      "Si vous êtes un cabinet de 500 personnes avec un processus achats, une équipe sécurité et le budget pour un partenaire d'implémentation, le track record de Flowcase est un vrai atout. Si vous êtes un cabinet de 15 à 150 personnes qui perd ses soirées en remise en forme de CV et que vous voulez régler cela cette semaine sans cycle commercial, MagicCV est conçu exactement pour cela. Essayez l'offre gratuite sur un appel d'offres réel et comparez le résultat.",
    faqs: [
      {
        question: "Peut-on migrer de Flowcase vers MagicCV ?",
        answer:
          "Oui. Exportez vos CV depuis Flowcase en Word ou PDF, glissez-les dans MagicCV, et l'IA analyse chacun en un profil structuré. Il n'y a pas de projet de migration - les CV d'une équipe de 50 personnes s'importent généralement en un après-midi.",
      },
      {
        question: "MagicCV remplace-t-il complètement Flowcase ?",
        answer:
          "Pour le cœur du travail - garder les CV de consultants à jour, les adapter par dossier et exporter des documents à votre image - oui. Flowcase va plus loin sur les workflows de proposition grands comptes et a un historique entreprise plus long, ce qui compte d'autant plus que votre cabinet est grand.",
      },
      {
        question: "Comment les tarifs de MagicCV se comparent-ils à ceux de Flowcase ?",
        answer:
          "MagicCV publie ses tarifs : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV), et une offre Enterprise sur mesure avec SSO. Les tarifs de Flowcase sont généralement sur devis, donc une comparaison à périmètre égal passe par leur processus commercial.",
      },
      {
        question: "Combien de temps prend le déploiement par rapport à Flowcase ?",
        answer:
          "MagicCV est en libre-service : la plupart des équipes importent leurs CV existants et exportent le premier CV à leur image le jour même. Les plateformes grands comptes passent généralement par une phase d'onboarding avec mise en place des modèles et formation - raisonnable à l'échelle entreprise, mais disproportionné pour un cabinet de 30 personnes.",
      },
      {
        question: "Nous travaillons sur des appels d'offres européens. Comment les deux se comparent-ils sur la conformité ?",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit et CV anonymes en un clic pour les soumissions anonymisées. SOC 2 est en cours. Flowcase sert aussi des cabinets européens ; vérifiez leurs certifications actuelles directement pour votre checklist achats.",
      },
      {
        question: "Puis-je essayer MagicCV sans parler à un commercial ?",
        answer:
          "Oui. Inscrivez-vous sur getmagic.cv, importez quelques CV sur l'offre gratuite et faites passer un vrai RFP dedans. Si le résultat adapté n'est pas meilleur que ce que vous produisez à la main, vous avez perdu une heure, pas un trimestre.",
      },
    ],
    related: [
      { label: "Tarifs", href: "/pricing" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Flowcase - comparaison honnête",
      description:
        "Comment MagicCV se compare à Flowcase pour la gestion des CV de conseil : tarifs, IA, implémentation, conformité européenne.",
      keywords: ["alternative à Flowcase", "Flowcase vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cinode",
    competitorName: "Cinode",
    h1: "MagicCV vs Cinode : outil de CV ciblé ou suite complète pour cabinets de conseil ?",
    sub: "Cinode est une plateforme de gestion pour cabinets de conseil. MagicCV fait un seul métier - des CV prêts pour la proposition - et le fait en une journée. Le bon choix dépend de ce qui est réellement cassé.",
    whereCompetitorWins: [
      "Une vraie largeur de suite : CV, gestion des compétences, pipeline commercial, réseaux de sous-traitants et planification des ressources sur une même plateforme",
      "Une forte présence chez les cabinets de conseil nordiques, avec un réseau de partenaires établi sur ce marché",
      "Un seul éditeur, un seul login, un seul modèle de données entre ventes, staffing et delivery une fois la suite pleinement adoptée",
      "Un meilleur choix si votre cabinet a décidé de piloter toute son activité sur une plateforme de conseil unique",
    ],
    whereMagicCvDiffers: [
      "Fait le métier que les suites font le moins bien : lire un RFP et remodeler les CV de consultants autour de lui, avec une IA qui part du cahier des charges",
      "Pas de déploiement de toute une suite : importez vos CV existants et exportez le premier document à votre image le jour même, pendant que votre CRM et vos outils de planification restent en place",
      "Une offre Pro à 50 $/mois avec les tarifs sur le site - pas d'appel de cadrage pour apprendre ce que coûte un module",
      "Édition par chat, anonymisation et traduction en un clic pour les appels d'offres européens, intégrées au workflow CV plutôt que réparties entre modules",
    ],
    rows: [
      { category: "Périmètre", magiccv: "Un workflow : profils, adaptation au RFP, export à votre image", competitor: "Suite de gestion : CV, compétences, ventes, resourcing, partenaires" },
      { category: "Ce que vous remplacez", magiccv: "Le dossier SharePoint et la mise en forme du mardi soir", competitor: "Potentiellement votre CRM, votre grille de staffing et votre processus CV d'un coup" },
      { category: "Délai jusqu'au premier CV sorti", magiccv: "Le jour même, en libre-service", competitor: "Généralement une implémentation par phases, à l'échelle de la suite" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Sur devis, généralement par module et par siège" },
      { category: "Coût de changement plus tard", magiccv: "Faible : exportez vos CV et profils, partez", competitor: "Plus élevé une fois les données de vente et de staffing dans la suite" },
      { category: "Adaptation au RFP", magiccv: "L'IA lit le cahier des charges et remodèle chaque CV", competitor: "Module CV avec modèles ; l'adaptation reste largement manuelle" },
    ],
    guidance:
      "Si votre cabinet consolide ventes, staffing et compétences sur une seule plateforme - et que vous avez l'appétit pour ce projet - Cinode est une suite crédible avec un vrai pedigree nordique. Si la douleur aiguë, ce sont les CV de propositions et que vous ne voulez pas re-plateformer votre activité pour la régler, MagicCV résout ce problème précis cette semaine. Beaucoup d'équipes règlent d'abord les CV et prennent la décision de suite plus tard, avec de meilleures informations.",
    faqs: [
      {
        question: "MagicCV remplace-t-il la planification des ressources ou le pipeline commercial de Cinode ?",
        answer:
          "Non. MagicCV couvre les profils de consultants, l'adaptation au RFP et l'export de CV à votre image. Si vous avez besoin de planification du taux d'occupation, de pipeline commercial ou de gestion des sous-traitants, c'est le territoire des suites - le périmètre de Cinode est réellement plus large.",
      },
      {
        question: "Peut-on utiliser MagicCV à côté de Cinode ?",
        answer:
          "Oui, et certaines équipes le font : la suite pour le staffing et le pipeline, MagicCV pour les CV qui partent dans les dossiers. Comme MagicCV importe n'importe quel CV Word ou PDF, aucun projet d'intégration n'est nécessaire pour les faire coexister.",
      },
      {
        question: "Peut-on migrer les CV de Cinode vers MagicCV ?",
        answer:
          "Oui. Exportez les CV de Cinode en Word ou PDF et importez-les dans MagicCV ; l'IA analyse chacun en un profil structuré et consultable. Pas de mappage de champs, pas de consultant de migration.",
      },
      {
        question: "Comment les coûts se comparent-ils ?",
        answer:
          "MagicCV publie ses tarifs : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV), Enterprise sur mesure. Les tarifs de Cinode sont généralement établis par module et par nombre de sièges, donc le coût total dépend de la part de la suite que vous prenez.",
      },
      {
        question: "Nous sommes un cabinet nordique - Cinode n'est-il pas le choix par défaut ?",
        answer:
          "C'est un choix régional fort, surtout si vous voulez toute la suite. Mais si votre évaluation porte vraiment sur les CV de propositions, comparez le workflow précis : collez un cahier des charges dans MagicCV, adaptez trois CV et chronométrez face à votre processus actuel avant de vous engager sur une plateforme.",
      },
    ],
    related: [
      { label: "Tarifs", href: "/pricing" },
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Cinode - comparaison honnête",
      description: "Comment MagicCV se compare à Cinode : focus, vitesse de déploiement, coût et adéquation régionale.",
      keywords: ["alternative à Cinode", "Cinode vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv",
    competitorName: "Sprint CV",
    h1: "MagicCV vs Sprint CV : deux visions de l'automatisation des CV de conseil",
    sub: "Les deux ciblent les cabinets de conseil et de staffing fatigués de la mise en forme manuelle des CV. La différence : ce que fait l'automatisation - remplir des modèles vite, ou raisonner d'abord sur le cahier des charges.",
    whereCompetitorWins: [
      "Conçu spécifiquement pour le conseil et le staffing, donc les structures de CV correspondent à la façon dont les sociétés de services IT présentent réellement leurs profils",
      "Un parsing de CV et une génération par modèles solides, en production dans des cabinets depuis des années",
      "Une forte présence au Portugal et en Espagne, avec des clients de référence sur le marché ibérique des services IT",
      "Un workflow simple et éprouvé si la génération à base de modèles est tout ce dont vous avez besoin",
    ],
    whereMagicCvDiffers: [
      "Une adaptation nativement IA : collez le RFP ou le brief client et le CV est remodelé autour de ses exigences - quels projets en tête, ce qui est élagué - pas seulement re-rendu dans un modèle",
      "L'édition par chat au-dessus de profils structurés : « mets en avant la migration Azure » bat la ré-édition manuelle d'un document généré",
      "La traduction dans n'importe quelle langue qui conserve votre mise en page, plus l'anonymisation en un clic pour les soumissions à l'aveugle",
      "Des tarifs publics avec une offre gratuite, pour évaluer la qualité du résultat sur un dossier réel avant de dépenser quoi que ce soit",
    ],
    rows: [
      { category: "Moteur central", magiccv: "L'IA lit le cahier des charges, puis remodèle le CV", competitor: "Analyse les CV et génère à partir de modèles" },
      { category: "Adaptation par dossier", magiccv: "Remise en valeur automatique depuis le texte du RFP", competitor: "Sélection généralement manuelle dans le modèle" },
      { category: "Édition", magiccv: "Instructions par chat plus modifications directes", competitor: "Édition par modèles et formulaires" },
      { category: "Langues", magiccv: "Traduction de tout CV, mise en page préservée", competitor: "Support multilingue ; couverture variable" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Généralement sur devis" },
      { category: "Force régionale", magiccv: "Toute l'UE, RGPD dès la conception, résidence des données dans l'UE", competitor: "Plus fort dans la péninsule Ibérique" },
    ],
    guidance:
      "Si vous êtes un cabinet ibérique qui veut une génération de CV par modèles éprouvée, auprès d'un éditeur avec des références locales, Sprint CV est un choix respectable. Si la partie que vous voulez automatiser est la réflexion - quelle expérience mettre en avant pour ce cahier des charges précis - c'est ce que fait le moteur RFP-vers-CV de MagicCV. Passez le même RFP dans les deux et comparez les brouillons.",
    faqs: [
      {
        question: "Peut-on passer de Sprint CV à MagicCV ?",
        answer:
          "Oui. Exportez vos CV en Word ou PDF, importez-les dans MagicCV, et chacun devient automatiquement un profil structuré. La plupart des équipes produisent des exports adaptés et à leur image le jour même.",
      },
      {
        question: "Que signifie « nativement IA » en pratique, face à la génération par modèles ?",
        answer:
          "Les outils à modèles prennent un CV stocké et le rendent de façon cohérente. MagicCV lit d'abord le cahier des charges, décide quels projets, compétences et certifications comptent pour lui, réordonne et réécrit en conséquence, puis rend le tout dans votre modèle. La mise en forme est le minimum ; l'adaptation est la différence.",
      },
      {
        question: "MagicCV gère-t-il les langues dans lesquelles nous soumissionnons ?",
        answer:
          "Oui - MagicCV traduit les CV dans n'importe quelle langue en gardant la mise en page intacte, si bien qu'un profil maître portugais peut sortir en anglais, en français ou en allemand sans passe de remise en forme.",
      },
      {
        question: "Comment les prix se comparent-ils ?",
        answer:
          "Les tarifs de MagicCV sont sur le site : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV). Les tarifs de Sprint CV s'obtiennent généralement via leur processus commercial ; demandez un devis et comparez-le à Pro pour la taille de votre équipe.",
      },
      {
        question: "MagicCV convient-il aux agences de staffing ou seulement aux cabinets de conseil ?",
        answer:
          "Aux deux. Les équipes de staffing utilisent le même workflow - import des CV de candidats, anonymisation en un clic pour les soumissions à l'aveugle, export dans le modèle du client ou le vôtre. L'adaptation au RFP fonctionne aussi bien sur une fiche de poste que sur un appel d'offres.",
      },
    ],
    related: [
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Sprint CV - comparaison honnête",
      description: "Comment MagicCV se compare à Sprint CV pour la gestion des CV de conseil et de staffing.",
      keywords: ["alternative à Sprint CV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cuvibox",
    competitorName: "CuViBox",
    h1: "MagicCV vs CuViBox : moteur de modèles ou IA qui part du cahier des charges ?",
    sub: "Les deux centralisent les CV de consultants et les exportent de façon homogène. La bifurcation : l'adaptation part-elle de votre modèle ou du cahier des charges du client ?",
    whereCompetitorWins: [
      "Un gestionnaire de CV de consultants établi, avec un moteur de modèles mature qui gère depuis des années les vrais standards documentaires des cabinets de conseil",
      "Un workflow prévisible et structuré : stockez les données une fois, générez des documents homogènes à partir d'elles",
      "Plus simple à appréhender si vous vous méfiez de la réécriture par IA et voulez une sortie déterministe, champ par champ",
    ],
    whereMagicCvDiffers: [
      "Raisonne sur le RFP avant de rendre le document : l'IA lit le cahier des charges et décide quelle expérience mener, au lieu de laisser ce jugement à la personne qui met en forme à 19 h",
      "Édition par chat : dites au CV quoi changer en langage courant plutôt que de chercher dans des champs",
      "Anonymisation en un clic et traduction dans n'importe quelle langue avec la mise en page préservée - les deux exigences les plus fréquentes des appels d'offres européens, intégrées",
      "En libre-service avec tarifs publics : offre Free pour tester, Pro à 50 $/mois quand cela tient",
    ],
    rows: [
      { category: "Approche", magiccv: "Cahier des charges d'abord : l'IA lit le RFP, puis génère", competitor: "Modèle d'abord : données structurées rendues en documents" },
      { category: "Adaptation par dossier", magiccv: "Remise en valeur automatique pour chaque cahier des charges", competitor: "Sélection généralement manuelle de ce qui figure" },
      { category: "Modèle d'édition", magiccv: "Instructions par chat plus modifications directes", competitor: "Champs structurés et modèles" },
      { category: "Anonymisation / traduction", magiccv: "Un clic chacune, mise en page préservée", competitor: "Variable selon la configuration" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Généralement sur devis" },
      { category: "Démarrage", magiccv: "Import des CV existants, premier export le jour même", competitor: "Mise en place préalable de la structure de données et des modèles" },
    ],
    guidance:
      "Si vous voulez un moteur de modèles déterministe où chaque champ est placé par une règle que vous avez configurée, CuViBox est une option établie. Si le goulot d'étranglement de votre cabinet est de décider et de réécrire - remodeler 8 CV autour d'une annexe de RFP de 40 pages avant jeudi - MagicCV automatise ce travail de jugement, pas seulement le rendu. L'offre gratuite rend la comparaison peu coûteuse à mener.",
    faqs: [
      {
        question: "Quelle est la différence concrète entre « nativement IA » et « assisté par IA » ?",
        answer:
          "MagicCV part du RFP : il lit le cahier des charges, décide quels projets et compétences comptent, et remodèle le CV avant de le rendre dans votre modèle. Les outils à modèles partent du format du document et utilisent l'IA, quand ils le font, pour aider à remplir des champs - le cahier des charges vient en second.",
      },
      {
        question: "Peut-on déplacer nos CV de CuViBox vers MagicCV ?",
        answer:
          "Oui. Exportez les CV en Word ou PDF et importez-les dans MagicCV - l'IA analyse chacun en un profil structuré. Pas d'exercice de mappage de champs ; la bibliothèque d'une équipe de taille moyenne s'importe en un après-midi.",
      },
      {
        question: "MagicCV maintiendra-t-il nos standards documentaires aussi strictement qu'un moteur de modèles ?",
        answer:
          "Oui. Votre modèle de marque est configuré une fois, et chaque export - PDF ou Word - lui est fidèle au pixel près. L'IA change ce que le CV dit pour chaque cahier des charges, jamais l'apparence des documents de votre cabinet.",
      },
      {
        question: "Et si nous ne faisons pas confiance à l'IA pour réécrire les CV de consultants ?",
        answer:
          "Rien ne part sans relecture. L'IA produit un brouillon adapté ; vous le lisez, l'ajustez par chat ou par modifications directes, et exportez quand vous êtes satisfait. La plupart des équipes constatent que relire un bon brouillon prend 10 minutes là où écrire de zéro prenait une heure.",
      },
      {
        question: "Combien coûte MagicCV par rapport à CuViBox ?",
        answer:
          "Les tarifs de MagicCV sont publics : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV), Enterprise sur mesure avec SSO. Les tarifs de CuViBox s'obtiennent généralement via leur processus commercial ; comparez un devis à Pro pour votre effectif.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CuViBox - comparaison honnête",
      description: "Comment MagicCV se compare à CuViBox : génération de CV à base de modèles vs nativement IA.",
      keywords: ["alternative à CuViBox"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "napta",
    competitorName: "Napta",
    h1: "MagicCV vs Napta : régler les CV de propositions, ou re-plateformer le staffing ?",
    sub: "Napta est une plateforme de gestion des ressources où les CV sont un module. MagicCV est le workflow CV, traité en profondeur. Le bon choix dépend du problème qui vous coûte des dossiers.",
    whereCompetitorWins: [
      "Une plateforme complète de staffing et de gestion des ressources : taux d'occupation, staffing de projets, compétences et développement de carrière au même endroit",
      "La génération de CV arrive avec les données de staffing, si bien que profils et disponibilités vivent ensemble une fois la plateforme adoptée",
      "Un choix fort pour les cabinets dont la douleur centrale est la visibilité du staffing et le taux d'occupation, pas seulement les documents",
      "Établi auprès des cabinets de conseil de taille moyenne et grande, en particulier en France",
    ],
    whereMagicCvDiffers: [
      "Va en profondeur là où les suites vont en largeur : l'IA lit le vrai RFP et remodèle le CV de chaque consultant autour de lui, avec l'édition par chat pour affiner le brouillon",
      "Pas de migration de plateforme : votre grille de staffing, votre HRIS et votre CRM restent où ils sont - MagicCV reprend juste le chaos des CV",
      "Opérationnel le jour même où vous importez vos CV Word et PDF, contre un déploiement de plateforme avec configuration et formation",
      "Des tarifs publics dès 0 $, avec Pro à 50 $/mois - pas besoin de cadrer un projet de gestion des ressources pour régler des documents",
    ],
    rows: [
      { category: "Catégorie", magiccv: "Workflow ciblé de CV pour propositions", competitor: "Plateforme de gestion des ressources avec un module CV" },
      { category: "Adaptation au RFP", magiccv: "L'IA lit le cahier des charges et remodèle chaque CV", competitor: "Génération par modèles depuis les profils de staffing" },
      { category: "Ce que demande l'adoption", magiccv: "Importer les CV, choisir un modèle, y aller", competitor: "Généralement un déploiement de plateforme : données, processus, formation" },
      { category: "Délai jusqu'au premier résultat", magiccv: "Le jour même", competitor: "Des semaines à des mois, typique des projets de plateforme" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Sur devis, généralement par utilisateur" },
      { category: "Fonctions pour appels d'offres européens", magiccv: "Anonymisation en un clic, traduction gardant la mise en page", competitor: "Pas le centre de gravité du produit" },
    ],
    guidance:
      "Si votre vrai problème est le staffing - qui est disponible, qui est en intercontrat, comment évolue le taux d'occupation - Napta est fait pour cela, et son module CV suit. Si votre vrai problème, ce sont les CV eux-mêmes - en reformater 12 pour un dossier, des versions qui dérivent dans SharePoint - MagicCV règle cela cette semaine sans toucher à votre façon de staffer les projets. Diagnostiquez la vraie douleur avant d'acheter la surface la plus large.",
    faqs: [
      {
        question: "MagicCV fait-il de la planification des ressources ou du suivi du taux d'occupation comme Napta ?",
        answer:
          "Non. MagicCV couvre les profils de consultants, la recherche par compétences, l'adaptation au RFP et l'export à votre image. Si vous avez besoin de tableaux de bord d'occupation et de workflows de staffing, c'est le territoire des plateformes, où Napta a réellement plus.",
      },
      {
        question: "MagicCV peut-il fonctionner à côté de Napta ?",
        answer:
          "Oui. Certains cabinets gardent une plateforme de staffing pour la planification et utilisent MagicCV pour les CV destinés aux clients, parce que le module CV d'une suite lit rarement les RFP. MagicCV importe n'importe quel CV Word ou PDF, donc aucune intégration n'est requise pour faire tourner les deux.",
      },
      {
        question: "En combien de temps MagicCV est-il opérationnel par rapport à un déploiement Napta ?",
        answer:
          "MagicCV est en libre-service : importez vos CV existants, configurez votre modèle de marque et exportez le premier CV adapté le jour même. Les plateformes de gestion des ressources demandent généralement configuration, chargement de données et formation avant que le module CV rapporte.",
      },
      {
        question: "Peut-on migrer les CV hors de Napta vers MagicCV ?",
        answer:
          "Oui - exportez-les en Word ou PDF et importez-les dans MagicCV. L'IA analyse chaque fichier en un profil structuré et consultable, avec compétences, secteurs, langues et certifications.",
      },
      {
        question: "Combien coûte MagicCV ?",
        answer:
          "Les tarifs sont publics : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV), et Enterprise sur mesure avec SSO et DPA. Les suites de plateforme sont généralement facturées par utilisateur et par mois sur tout l'effectif, ce qui est une autre conversation budgétaire.",
      },
    ],
    related: [
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Napta - comparaison honnête",
      description: "Comment MagicCV se compare à Napta : outil ciblé de CV-pour-RFP vs suite large de gestion des ressources.",
      keywords: ["alternative à Napta"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sharepoint-word",
    competitorName: "SharePoint + Word",
    h1: "MagicCV vs SharePoint + Word + vos soirées",
    sub: "Le titulaire en place dans la plupart des cabinets n'est pas un concurrent - c'est un dossier nommé « CV FINAL », douze variantes de modèle, et la personne qui reste tard avant l'échéance.",
    whereCompetitorWins: [
      "Zéro coût de licence supplémentaire : vous payez déjà Microsoft 365, et la finance ne pose jamais de question",
      "Zéro courbe d'apprentissage : tout le monde dans l'équipe utilise Word depuis l'université",
      "Une flexibilité totale : chaque associé peut entretenir sa propre version de CV, dans son propre format, avec sa photo de 2014",
      "Pas de risque fournisseur, pas de revue achats, pas de fatigue du nouvel outil",
    ],
    whereMagicCvDiffers: [
      "Supprime le poste de coût caché : reformater 12 CV pour un dossier prend des heures dans Word et environ 15 minutes de relecture dans MagicCV",
      "Un profil à jour par personne au lieu de final_v3_JS_edit.docx en concurrence avec final_v3_JS_edit_NEW.docx dans trois dossiers",
      "Chaque export correspond exactement à votre modèle de marque - pas de dérive selon la dernière personne qui a mis en forme",
      "L'adaptation par dossier a réellement lieu : l'IA lit le RFP et remodèle chaque CV, au lieu que le même CV générique parte faute de temps",
      "Les courses aux CV du vendredi après-midi remplacées par des profils que l'équipe met à jour en quelques minutes, l'IA structurant tout contenu collé ou chargé",
    ],
    rows: [
      { category: "Coût de licence", magiccv: "Gratuit pour commencer ; Pro à 50 $/mois pour 200 profils", competitor: "0 $ de plus - déjà dans votre stack Microsoft" },
      { category: "Coût réel par dossier", magiccv: "Environ 15 minutes de relecture par dossier de CV", competitor: "Des heures de relances, de copier-coller et de remise en forme" },
      { category: "Vérité des versions", magiccv: "Un profil structuré par consultant", competitor: "final_v3, final_v3_NEW et la copie privée de l'associé" },
      { category: "Cohérence de marque", magiccv: "Modèle fidèle au pixel à chaque export", competitor: "Dépend de qui a mis en forme, et de l'heure qu'il était" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA lit le RFP et remodèle chaque CV", competitor: "Sautée sous pression d'échéance, presque toujours" },
      { category: "Trouver des profils", magiccv: "Recherche par compétences, secteurs, langues, certifications", competitor: "Demander sur Teams et espérer que quelqu'un se souvienne" },
    ],
    guidance:
      "Si votre équipe soumet deux dossiers par an et que les CV sont réellement sous contrôle, gardez le dossier - sincèrement. Mais si la préparation des CV mange des heures à chaque dossier, que les versions dérivent, et qu'au moins une soumission est partie en retard ou hors charte cette année, l'option « gratuite » est l'outil le plus cher que vous utilisez. Importez 10 CV sur l'offre gratuite et chronométrez honnêtement le prochain dossier face au précédent.",
    faqs: [
      {
        question: "Le gratuit n'est-il pas toujours moins cher que 50 $ par mois ?",
        answer:
          "Seulement si les heures sont gratuites aussi. Si deux personnes passent six heures à reformater des CV par dossier et que vous soumissionnez deux fois par mois, cela fait environ 24 heures de temps senior - ce qui coûte plus qu'une année de Pro. Le calculateur de ROI sur la page Tarifs fait le calcul avec vos propres chiffres.",
      },
      {
        question: "Que deviennent les CV que nous avons déjà dans SharePoint ?",
        answer:
          "Ils deviennent le point de départ. Glissez vos fichiers Word et PDF existants dans MagicCV et l'IA analyse chacun en un profil structuré - pas de ressaisie, pas de chirurgie de modèle. Gardez SharePoint comme archive si vous voulez ; les copies de travail vivent désormais à un seul endroit.",
      },
      {
        question: "Pouvons-nous conserver notre modèle Word existant ?",
        answer:
          "Oui. Votre modèle est configuré une fois dans MagicCV, et chaque export - Word ou PDF - lui est fidèle au pixel près. Le résultat ressemble à un document fait par votre cabinet, parce que c'en est un ; l'IA évite simplement aux humains de faire la mise en forme à la main.",
      },
      {
        question: "Notre système fonctionne à peu près. Pourquoi changer quelque chose qui n'est pas complètement cassé ?",
        answer:
          "Si rien ne part en retard, hors charte ou sans adaptation, ne changez pas. La plupart des équipes qui évaluent un logiciel de gestion des CV le font après un incident précis - un accord-cadre perdu, un client qui remarque un CV périmé, une course de 48 heures. Si vous avez vécu l'un d'eux cette année, le « à peu près » vous coûte déjà.",
      },
      {
        question: "L'équipe adoptera-t-elle vraiment un outil de plus ?",
        answer:
          "L'adoption est le risque honnête de tout outil, et c'est pourquoi MagicCV demande peu aux consultants : leur profil est créé depuis leur CV existant, et les mises à jour prennent quelques minutes, l'IA se chargeant de la structuration. Les personnes qui ressentent le plus le changement sont celles qui mettent en forme les dossiers - et elles deviennent en général les plus ardentes avocates de l'outil.",
      },
      {
        question: "Nos données de CV sont-elles plus en sécurité dans SharePoint que dans un outil SaaS ?",
        answer:
          "SharePoint hérite de votre sécurité Microsoft, qui est solide - mais des CV éparpillés entre dossiers et boîtes mail sont difficiles à auditer ou à supprimer au titre du RGPD. MagicCV est RGPD dès la conception avec résidence des données dans l'UE et journaux d'audit, et un profil par personne rend les demandes de suppression triviales. SOC 2 est en cours.",
      },
    ],
    related: [
      { label: "Tarifs & calculateur de ROI", href: "/pricing" },
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Pour les équipes commerciales", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV vs SharePoint + Word - le coût réel de ne rien changer",
      description: "Le coût caché de la gestion des CV de consultants dans SharePoint et Word, et ce que cela représente au total.",
      keywords: ["CV de consultants SharePoint", "arrêter de gérer les CV dans Word"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvgate",
    competitorName: "CVGate",
    h1: "MagicCV vs CVGate : deux outils ciblés pour les CV de conseil",
    sub: "Une comparaison serrée - les deux ciblent les CV de conseil et le travail de proposition avec des tarifs transparents. Les différences tiennent au fonctionnement de l'adaptation et à ce qui est intégré pour les appels d'offres européens.",
    whereCompetitorWins: [
      "Résolument centré sur la gestion des CV de conseil et de propositions - un cas d'usage très proche, pas un créateur de CV généraliste",
      "Des paliers tarifaires transparents et publics, ce qui est plus rare qu'il ne le faudrait dans cette catégorie",
      "Regroupe des outils de proposition adjacents : recherche par compétences plus gestion de contacts façon CRM à côté des CV",
      "Des statistiques sur les CV partagés - savoir quand un client a consulté ou traité un document est réellement utile dans un cycle de vente",
    ],
    whereMagicCvDiffers: [
      "Une IA qui part du cahier des charges : collez le RFP et chaque CV est remodelé autour de ses exigences, avec l'édition par chat pour affiner - pas seulement mis en forme de façon homogène",
      "Anonymisation en un clic et traduction dans n'importe quelle langue avec la mise en page préservée - les deux fonctions que les équipes d'appels d'offres européennes demandent en premier",
      "Des profils de consultants structurés comme source de vérité unique, consultables par compétences, secteurs, langues et certifications",
      "RGPD dès la conception avec résidence des données dans l'UE et journaux d'audit, avec SSO sur l'offre Enterprise",
    ],
    rows: [
      { category: "Catégorie", magiccv: "Adaptation de CV nativement IA + gestion des profils", competitor: "Gestion de CV avec outils de proposition et de contacts" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA lit le RFP et remet chaque CV en valeur", competitor: "À base de modèles ; l'adaptation est généralement manuelle" },
      { category: "Transparence tarifaire", magiccv: "Public : Free, Pro à 50 $/mois, Enterprise sur mesure", competitor: "Paliers publics - c'est à mettre à son crédit" },
      { category: "Anonymisation", magiccv: "Un clic, dans votre modèle", competitor: "Variable selon l'offre et la configuration" },
      { category: "Traduction", magiccv: "Toute langue, mise en page préservée", competitor: "Variable" },
      { category: "Édition", magiccv: "Instructions par chat plus modifications directes", competitor: "Édition par formulaires et modèles" },
    ],
    guidance:
      "CVGate est l'une des comparaisons les plus équitables de ce site : produit ciblé, tarifs publics, vraies fonctions de proposition. Si les statistiques de partage de CV et la gestion de contacts intégrée comptent pour votre démarche commerciale, pesez-les sérieusement. Si l'adaptation IA par dossier, les CV anonymes et la sortie multilingue pour les appels d'offres européens sont les fonctions que vous utiliserez chaque semaine, MagicCV va plus loin exactement là-dessus. Les deux ont des points d'entrée à faible risque - testez sur un dossier réel.",
    faqs: [
      {
        question: "CVGate est-il une alternative sérieuse à MagicCV ?",
        answer:
          "Oui - il est réellement centré sur la gestion des CV et des propositions de conseil, avec des tarifs publics. Les principales différences sont l'adaptation IA de MagicCV qui part du cahier des charges, l'édition par chat, et l'anonymisation et la traduction intégrées pour les appels d'offres européens.",
      },
      {
        question: "Peut-on migrer de CVGate vers MagicCV ?",
        answer:
          "Oui. Exportez vos CV en Word ou PDF et importez-les dans MagicCV ; l'IA construit un profil structuré à partir de chacun. La plupart des équipes achèvent le passage en une journée.",
      },
      {
        question: "MagicCV a-t-il des statistiques de consultation de CV comme CVGate ?",
        answer:
          "Non - MagicCV exporte des documents PDF et Word soignés plutôt que d'héberger des liens suivis, donc les statistiques de consultation ne font pas partie du produit aujourd'hui. Si savoir quand un client a ouvert un CV pilote votre processus de relance, c'est un vrai point pour CVGate.",
      },
      {
        question: "Comment l'adaptation par dossier diffère-t-elle entre les deux ?",
        answer:
          "Dans MagicCV, vous collez le RFP ou le brief et l'IA décide par quoi chaque CV doit commencer, puis vous relisez et affinez par chat. Les outils à modèles gardent le CV cohérent mais laissent la décision de quoi mettre en avant à la personne qui prépare le dossier.",
      },
      {
        question: "Comment les deux se comparent-ils sur le RGPD et la résidence des données ?",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit et DPA sur l'offre Enterprise ; SOC 2 est en cours. Vérifiez directement la documentation d'hébergement et de conformité actuelle de CVGate - les deux éditeurs publient de quoi remplir une checklist achats.",
      },
    ],
    related: [
      { label: "Tarifs", href: "/pricing" },
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CVGate - comparaison honnête",
      description: "Comment MagicCV se compare à CVGate pour la gestion des CV de conseil et les propositions : adaptation IA, anonymisation, multilingue, tarifs.",
      keywords: ["alternative à CVGate", "CVGate vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cv-transformer",
    competitorName: "CV-Transformer",
    h1: "MagicCV vs CV-Transformer : moteur de remise en forme ou moteur d'adaptation ?",
    sub: "CV-Transformer convertit les CV entrants dans votre format de marque, à volume. MagicCV gère les profils de consultants dans la durée et les remodèle par cahier des charges. Des métiers différents, avec un peu de recouvrement.",
    whereCompetitorWins: [
      "Fort sur exactement une chose : convertir les CV entrants en un modèle standardisé à votre marque, vite et au volume d'une agence de recrutement",
      "Anonymisation intégrée et prise en charge d'un large éventail de langues",
      "Annonce des intégrations avec les stacks de recrutement comme Greenhouse, JobAdder et Salesforce, plus un stockage basé dans l'UE",
      "Un choix naturel pour les sociétés de staffing et de recrutement qui traitent un flux régulier de CV de candidats tiers",
    ],
    whereMagicCvDiffers: [
      "Adapte, pas seulement reformate : l'IA lit le RFP ou le brief client et change ce que chaque CV met en avant, puis le rend dans votre modèle",
      "Des profils qui persistent et restent à jour : un dossier structuré par consultant, mis à jour dans le temps, au lieu de conversions de fichiers ponctuelles",
      "Une matrice de compétences et une recherche sur tout le vivier - trouvez chaque consultant avec Kubernetes, l'allemand et un passé bancaire en quelques secondes",
      "Construit autour du workflow de proposition de conseil : dossiers de CV par appel d'offres, édition par chat, traduction qui garde la mise en page, tarifs publics en libre-service dès 0 $",
    ],
    rows: [
      { category: "Mission principale", magiccv: "Gérer les profils, adapter par cahier des charges, exporter à votre image", competitor: "Convertir les CV entrants dans votre format de marque" },
      { category: "Modèle de données", magiccv: "Un profil persistant par personne, tenu à jour", competitor: "Conversion par fichier ; généralement pas de profil durable" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA remet le contenu en valeur depuis le texte du RFP", competitor: "Reformater et standardiser, pas remettre en valeur" },
      { category: "Anonymisation", magiccv: "Un clic, dans votre modèle", competitor: "Intégrée" },
      { category: "Recherche d'équipe", magiccv: "Compétences, secteurs, langues, certifications", competitor: "Pas le focus" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Généralement à crédits ou abonnement, essai disponible" },
    ],
    guidance:
      "Si vous êtes une agence de recrutement ou de staffing dont le goulot est la remise en forme à volume des CV de candidats dans votre charte, CV-Transformer est fort sur ce métier et se connecte aux stacks de recrutement. Si vous êtes un cabinet de conseil ou de services IT qui soumissionne avec le même vivier de profils de façon répétée, il vous faut des profils qui persistent et s'adaptent par cahier des charges - c'est le métier de MagicCV. Certaines sociétés de staffing ont légitimement besoin des deux schémas ; testez chacun sur son terrain.",
    faqs: [
      {
        question: "Quelle est la différence fondamentale entre MagicCV et CV-Transformer ?",
        answer:
          "CV-Transformer convertit chaque CV entrant en un document standardisé à votre marque - une opération par fichier. MagicCV maintient un profil vivant par consultant et génère des CV adaptés et à votre image à partir de lui pour chaque dossier, l'IA décidant quoi mettre en avant à partir du cahier des charges.",
      },
      {
        question: "Nous réutilisons les mêmes consultants d'un dossier à l'autre. Quel modèle convient le mieux ?",
        answer:
          "Les profils persistants. Avec la conversion par fichier, vous retraitez un document à chaque changement ; avec MagicCV, le profil est mis à jour une fois et chaque export ultérieur - tout modèle, toute langue, anonymisé ou non - puise dans des données à jour.",
      },
      {
        question: "Les deux outils anonymisent les CV. Y a-t-il une différence ?",
        answer:
          "Les deux couvrent le cœur du besoin : produire des CV anonymes. Dans MagicCV, l'anonymisation est un clic sur n'importe quel export et reste cohérente avec votre modèle, et comme elle part de profils structurés, vous ré-exportez la version nominative instantanément quand le client établit sa shortlist.",
      },
      {
        question: "MagicCV s'intègre-t-il à notre ATS comme le fait CV-Transformer ?",
        answer:
          "MagicCV n'a pas besoin d'intégration pour être utile - vous importez les CV directement en Word, PDF ou exports LinkedIn. Si votre workflow dépend de l'envoi automatique de documents vers un ATS précis, c'est aujourd'hui un vrai avantage des intégrations annoncées de CV-Transformer ; parlez-nous de vos besoins d'intégration si vous évaluez l'offre Enterprise.",
      },
      {
        question: "Peut-on migrer de CV-Transformer vers MagicCV ?",
        answer:
          "Oui - vos CV convertis sont des fichiers Word ou PDF ordinaires, et MagicCV les importe directement en profils structurés. À partir de là, les mises à jour se font sur le profil plutôt que par re-conversion.",
      },
    ],
    related: [
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV-Transformer - comparaison honnête",
      description: "Comment MagicCV se compare à CV-Transformer : remise en forme vs raisonnement IA, anonymisation, langues et tarifs.",
      keywords: ["alternative à CV-Transformer", "CV Transformer vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "cvconverter",
    competitorName: "CV Converter",
    h1: "MagicCV vs CV Converter : correctif de mise en forme rapide ou workflow CV complet ?",
    sub: "CV Converter fait un petit métier, bien et pour pas cher : faire correspondre les CV de candidats à votre modèle. MagicCV couvre tout le workflow des CV de conseil. Le périmètre est toute la décision.",
    whereCompetitorWins: [
      "Radicalement simple : chargez votre modèle, donnez-lui des CV, récupérez des documents mis en forme de façon homogène",
      "Une tarification à l'usage transparente et basse, avec essai gratuit - un engagement minimal pour tester",
      "Se positionne comme ne stockant pas vos données de candidats dans la durée, ce qui simplifie certaines conversations de protection des données",
      "Bien adapté à la mise en forme à haut volume en recrutement et RPO, où le coût par document est la métrique",
    ],
    whereMagicCvDiffers: [
      "Couvre le workflow autour du document : profils de consultants persistants, recherche par compétences dans l'équipe et adaptation par dossier, pas seulement la conversion",
      "L'IA lit le RFP et remodèle chaque CV autour de lui - un outil de mise en forme ne peut pas dire lequel des 14 projets d'un consultant compte pour ce cahier des charges",
      "Anonymisation en un clic, traduction dans n'importe quelle langue avec mise en page conservée, et dossiers de CV prêts pour la proposition pour les appels d'offres européens",
      "Édition par chat sur n'importe quel brouillon : « ramène-le à deux pages et commence par le travail secteur public »",
    ],
    rows: [
      { category: "Périmètre", magiccv: "Profils, recherche, adaptation, dossiers, export", competitor: "Conversion de format, délibérément rien de plus" },
      { category: "Source de vérité", magiccv: "Un profil structuré par consultant, tenu à jour", competitor: "Chaque fichier converti indépendamment" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA remet le contenu en valeur depuis le RFP", competitor: "Hors périmètre, par conception" },
      { category: "Anonymisation / traduction", magiccv: "Un clic chacune, mise en page préservée", competitor: "Pas le focus" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois (200 profils)", competitor: "Publics à l'usage, très bas par fichier" },
      { category: "Idéal pour", magiccv: "Les cabinets qui soumissionnent avec un vivier récurrent", competitor: "Les agences qui mettent en forme un flux de candidats ponctuels" },
    ],
    guidance:
      "Si la mise en forme est réellement tout votre problème - un flux de CV de candidats ponctuels qui doivent juste avoir l'air homogènes - CV Converter est bon marché, simple et difficile à contester. Si les mêmes consultants reviennent de dossier en dossier et que le vrai travail est de garder leurs profils à jour et de les adapter par cahier des charges, un convertisseur laisse 90 % du travail manuel. Choisissez l'outil selon que vos CV sont jetables ou réutilisables.",
    faqs: [
      {
        question: "CV Converter est-il moins cher que MagicCV ?",
        answer:
          "Pour de la pure mise en forme par fichier, sa tarification à l'usage peut être très basse, et MagicCV ne le battra pas sur ce seul métier. L'offre Pro de MagicCV à 50 $/mois couvre 200 profils et 600 CV plus l'adaptation, la recherche, l'anonymisation et la traduction - un périmètre plus large, donc comparez avec tout ce que vous faites actuellement à la main, pas seulement la mise en forme.",
      },
      {
        question: "Nous sommes une agence de recrutement. Lequel nous convient ?",
        answer:
          "Si les candidats ne passent qu'une fois et que la mise en forme est tout le travail, CV Converter convient. Si vous resoumettez les mêmes contractuels de façon répétée, menez des processus de CV anonymes ou répondez à des accords-cadres, les profils persistants et l'anonymisation en un clic de MagicCV deviennent vite rentables.",
      },
      {
        question: "MagicCV peut-il respecter notre modèle exact comme le fait un convertisseur ?",
        answer:
          "Oui. Votre modèle de marque est configuré une fois et chaque export lui est fidèle au pixel près, en PDF ou en Word. La différence est ce qui se passe avant le rendu : MagicCV peut adapter et traduire le contenu, pas seulement le verser dans la mise en page.",
      },
      {
        question: "MagicCV stocke-t-il nos données, et où ?",
        answer:
          "Oui - les profils persistants sont le principe, pour que les exports restent à jour sans retraiter des fichiers. Les données sont RGPD dès la conception avec résidence dans l'UE et journaux d'audit, et les offres Enterprise incluent un DPA. Si votre politique interdit tout stockage chez un fournisseur, un convertisseur en flux tendu est le choix architectural le plus sûr.",
      },
      {
        question: "Peut-on commencer avec CV Converter et passer à MagicCV plus tard ?",
        answer:
          "Facilement - vos CV convertis sont des fichiers Word ou PDF ordinaires, et MagicCV les importe directement en profils structurés. Les équipes font souvent le pas quand elles remarquent que les mêmes CV reviennent pour leur troisième remise en forme.",
      },
    ],
    related: [
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs CV Converter - comparaison honnête",
      description: "Comment MagicCV se compare à CV Converter : conversion de format seule vs gestion complète des CV et adaptation IA.",
      keywords: ["alternative à CV Converter", "cvconverter vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "muchskills",
    competitorName: "MuchSkills CV Inventory",
    h1: "MagicCV vs MuchSkills CV Inventory : quel référentiel vient en premier ?",
    sub: "MuchSkills génère des CV depuis sa base de compétences. MagicCV construit des profils depuis les CV que vous avez déjà. Le bon ordre dépend de l'endroit où vivent vos données aujourd'hui.",
    whereCompetitorWins: [
      "Des CV générés depuis des données de compétences vivantes et vérifiées - si la base MuchSkills est votre référentiel, les CV héritent de sa précision",
      "Un contrôle de versions solide et des pistes d'audit sur chaque CV, utile là où la conformité vérifie qui a envoyé quoi et quand",
      "Gère collaborateurs internes et consultants externes dans un même inventaire",
      "Une taxonomie de compétences profonde couvrant certifications, compétences techniques et capacités à grain fin",
    ],
    whereMagicCvDiffers: [
      "Part de ce que vous avez : importez des CV Word, PDF ou LinkedIn et l'IA construit des profils structurés - sans projet d'adoption d'une plateforme de compétences au préalable",
      "L'adaptation RFP-vers-CV : l'IA lit le vrai cahier des charges et remodèle chaque CV autour de lui, plutôt que d'assembler à partir des seules correspondances de compétences",
      "Édition par chat, anonymisation en un clic et traduction dans n'importe quelle langue avec mise en page préservée - la boîte à outils des appels d'offres européens en un seul endroit",
      "Des tarifs publics, en libre-service : Free pour tester, Pro à 50 $/mois, sans engagement de plateforme",
    ],
    rows: [
      { category: "Fondation des données", magiccv: "Profils structurés analysés depuis vos CV existants", competitor: "La base de compétences MuchSkills" },
      { category: "Prérequis", magiccv: "Aucun - importez les CV et allez-y", competitor: "Adopter MuchSkills comme référentiel de compétences" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA lit le texte du RFP et remet en valeur", competitor: "S'appuie sur le rapprochement des données de compétences" },
      { category: "Contrôle de versions", magiccv: "Historique des profils et journaux d'audit", competitor: "Solide, avec pistes d'audit par CV" },
      { category: "Anonymisation / traduction", magiccv: "Un clic chacune, mise en page préservée", competitor: "Variable" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Généralement sur devis, dans le cadre de la plateforme" },
    ],
    guidance:
      "Si votre organisation utilise déjà MuchSkills - ou a décidé de construire ses données talents autour d'une taxonomie de compétences vérifiée - CV Inventory en est l'extension naturelle et l'argument de qualité des données est réel. Si vos données de compétences vivent aujourd'hui dans des CV, SharePoint et la tête des gens, MagicCV vous donne des profils consultables et des CV de dossier adaptés cette semaine, sans monter d'abord une plateforme de compétences. Partez de là où sont réellement vos données.",
    faqs: [
      {
        question: "Faut-il une base de compétences avant de pouvoir utiliser MagicCV ?",
        answer:
          "Non. MagicCV construit des profils structurés directement depuis vos CV existants - Word, PDF ou exports LinkedIn - et en extrait au passage compétences, secteurs, langues et certifications dans une matrice consultable. Les données de compétences sont un sous-produit de l'import, pas un prérequis.",
      },
      {
        question: "Une base de compétences vérifiée n'est-elle pas plus précise que des CV analysés ?",
        answer:
          "Si elle est maintenue, oui - c'est la force honnête de MuchSkills. Le compromis, c'est l'adoption : une base vérifiée n'est précise que si les consultants la tiennent à jour. MagicCV parie sur l'artefact que les gens maintiennent déjà (leur CV) et fait de sa mise à jour une tâche de cinq minutes assistée par IA.",
      },
      {
        question: "MagicCV et MuchSkills peuvent-ils coexister ?",
        answer:
          "Oui. Certains cabinets utilisent MuchSkills pour la visibilité interne des compétences et MagicCV pour les CV de dossier destinés aux clients, puisque les CV exportés de n'importe quel système peuvent être importés dans MagicCV en Word ou PDF.",
      },
      {
        question: "Comment l'adaptation diffère-t-elle entre les deux ?",
        answer:
          "MuchSkills assemble des CV adossés à ses données de compétences. MagicCV lit le texte réel du RFP - annexe de 40 pages comprise - et décide par quoi chaque CV doit commencer pour ce cahier des charges précis, ce que vous affinez ensuite par chat avant l'export.",
      },
      {
        question: "Comment MagicCV répond-il aux besoins d'audit et de conformité ?",
        answer:
          "Les profils conservent un historique, la plateforme journalise l'activité, et les données sont RGPD dès la conception avec résidence dans l'UE ; Enterprise ajoute SSO et DPA. SOC 2 est en cours. Si des pistes d'audit par document sont une exigence dure aujourd'hui, pesez la profondeur du contrôle de versions de MuchSkills dans votre évaluation.",
      },
    ],
    related: [
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs MuchSkills CV Inventory - comparaison honnête",
      description: "Comment MagicCV se compare à MuchSkills CV Inventory : CV de consultants pilotés par les profils vs par une base de compétences.",
      keywords: ["alternative à MuchSkills", "CV Inventory vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "sprint-cv-manager",
    competitorName: "SprintCV Enterprise",
    h1: "MagicCV vs SprintCV Enterprise : vitesse mid-market ou profondeur d'administration entreprise ?",
    sub: "L'offre entreprise de SprintCV ajoute administration et gestion d'équipe au-dessus de son moteur de CV. MagicCV mise le même budget sur l'adaptation IA et une mise en valeur le jour même.",
    whereCompetitorWins: [
      "Une gestion de CV de niveau entreprise, chez un éditeur centré sur le conseil et le staffing, avec un parsing et une génération par modèles éprouvés",
      "Des fonctions d'administration et de gestion d'équipe matures - rôles, supervision et structure attendus par les cabinets plus grands",
      "Une base de références établie sur le marché ibérique des services IT",
      "Un choix plus rassurant pour un processus achats formel qui veut un produit étiqueté entreprise",
    ],
    whereMagicCvDiffers: [
      "L'IA fait l'adaptation, pas seulement le parsing : collez un RFP et chaque CV est remodelé autour de ses exigences avant le rendu",
      "L'édition par chat pour affiner : donnez des instructions au brouillon en langage courant au lieu de passer par des écrans d'administration",
      "Des tarifs publics à chaque palier sous Enterprise - Free (10 profils), Pro à 50 $/mois (200 profils) - et un onboarding en libre-service le jour même",
      "Anonymisation en un clic et traduction dans n'importe quelle langue avec mise en page préservée, pensées pour les exigences des appels d'offres européens",
    ],
    rows: [
      { category: "Moteur central", magiccv: "L'IA lit le cahier des charges, puis remodèle le CV", competitor: "Parsing et génération par modèles, administration entreprise par-dessus" },
      { category: "Profondeur d'administration", magiccv: "Espaces d'équipe ; SSO et DPA sur Enterprise", competitor: "Administration entreprise et gestion d'équipe matures" },
      { category: "Délai jusqu'au premier CV sorti", magiccv: "Le jour même, en libre-service", competitor: "Généralement un processus d'onboarding" },
      { category: "Tarifs", magiccv: "Publics sous le palier Enterprise", competitor: "Généralement sur devis" },
      { category: "Boîte à outils appels d'offres", magiccv: "Anonymisation + traduction intégrées, en un clic", competitor: "Variable selon la configuration" },
      { category: "Force régionale", magiccv: "Toute l'UE, résidence des données dans l'UE", competitor: "Plus fort dans la péninsule Ibérique" },
    ],
    guidance:
      "Si vous êtes un cabinet plus grand qui veut des contrôles d'administration entreprise chez un éditeur de CV centré sur le conseil - et que les références ibériques comptent pour vous - le produit entreprise de SprintCV mérite un examen. Si votre priorité est la qualité du résultat par dossier et être opérationnel cette semaine plutôt qu'après un onboarding, l'IA de MagicCV qui part du cahier des charges et son modèle en libre-service conviennent mieux. Les cabinets mid-market utilisent rarement la profondeur d'administration qu'ils paient au prix entreprise.",
    faqs: [
      {
        question: "En quoi cette page diffère-t-elle de votre comparaison avec Sprint CV ?",
        answer:
          "Même éditeur, offre de palier entreprise : plus de surface d'administration et de gestion d'équipe au-dessus du même moteur de CV. L'arbitrage face à MagicCV ne change pas - leur force est la structure et le track record régional ; celle de MagicCV, l'adaptation IA qui part du cahier des charges, les tarifs publics et la mise en service le jour même.",
      },
      {
        question: "MagicCV a-t-il seulement des fonctions entreprise ?",
        answer:
          "Oui - l'offre Enterprise ajoute SSO, DPA, profils illimités et support prioritaire, en plus des journaux d'audit et de la résidence des données dans l'UE dont bénéficie chaque offre. Ce que MagicCV évite, c'est le cycle commercial entreprise obligatoire : Pro à 50 $/mois est en libre-service et couvre les équipes jusqu'à 200 profils.",
      },
      {
        question: "Peut-on migrer de SprintCV vers MagicCV ?",
        answer:
          "Oui. Exportez vos CV en Word ou PDF, importez-les dans MagicCV, et chacun devient automatiquement un profil structuré. Il n'y a pas de projet de migration à cadrer.",
      },
      {
        question: "Combien de temps prend le déploiement par rapport à un gestionnaire de CV entreprise ?",
        answer:
          "MagicCV : importez les CV, configurez votre modèle de marque, exportez le premier CV adapté - généralement en une journée, en libre-service. Les gestionnaires de CV entreprise passent généralement par un onboarding avec configuration et formation, justifié à grande échelle et lent partout ailleurs.",
      },
      {
        question: "Nous soumissionnons dans plusieurs pays de l'UE. Lequel gère le mieux les langues ?",
        answer:
          "MagicCV traduit n'importe quel CV dans n'importe quelle langue en préservant la mise en page de votre modèle : un seul profil sert les dossiers à Madrid, Munich et Paris. Vérifiez la couverture linguistique actuelle de SprintCV pour les langues précises dans lesquelles vous soumissionnez.",
      },
    ],
    related: [
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs SprintCV Enterprise CV Manager - comparaison honnête",
      description: "Comment MagicCV se compare au gestionnaire de CV entreprise de SprintCV : raisonnement IA, tarifs, langues de l'UE.",
      keywords: ["alternative à SprintCV", "Sprint CV enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "enhancv",
    competitorName: "Enhancv",
    h1: "MagicCV vs Enhancv : les CV de propositions sont un autre métier que les CV de candidats",
    sub: "Enhancv construit des CV qui font embaucher des candidats. MagicCV construit des CV de consultants qui font gagner des missions aux cabinets. Si vous les comparez, décidez quel document vous produisez réellement.",
    whereCompetitorWins: [
      "Un créateur de CV réellement excellent : éditeur soigné, grande bibliothèque de modèles, et un rendu que les candidats sont fiers d'envoyer",
      "Un import en un clic depuis LinkedIn, DOCX et PDF, avec rapprochement d'offres d'emploi pour aligner un CV sur une annonce",
      "Une mise en forme compatible ATS, ce qui compte quand les documents sont filtrés par des logiciels de recrutement",
      "Des fonctions d'équipe avec bibliothèque partagée et image de marque personnalisée - un bon choix pour les équipes de recrutement, d'outplacement et de coaching de carrière",
    ],
    whereMagicCvDiffers: [
      "Conçu pour le cabinet, pas pour le chercheur d'emploi : des profils pour tout votre vivier, consultables par compétences, secteurs, langues et certifications",
      "Optimise pour le cahier des charges du client, pas pour un ATS : l'IA lit le RFP et remodèle le CV de chaque consultant autour de ses exigences",
      "Produit des dossiers de CV prêts pour la proposition - 8 consultants, un modèle, un après-midi - plus des CV anonymes en un clic pour les appels d'offres",
      "RGPD dès la conception avec résidence des données dans l'UE, traduction dans n'importe quelle langue gardant votre mise en page, et tarifs publics dès 0 $",
    ],
    rows: [
      { category: "Qui il sert", magiccv: "Cabinets de conseil et de services qui soumissionnent", competitor: "Chercheurs d'emploi, et les équipes qui les accompagnent" },
      { category: "Document produit", magiccv: "CV de consultant pour un client ou un appel d'offres", competitor: "CV pour une candidature à un poste" },
      { category: "Optimisé pour", magiccv: "Le cahier des charges et les critères d'évaluation du client", competitor: "Le parsing ATS et les mots-clés des offres d'emploi" },
      { category: "Modèle d'équipe", magiccv: "Un profil par consultant, recherche à l'échelle du cabinet", competitor: "Bibliothèque partagée de CV individuels" },
      { category: "Fonctions pour appels d'offres", magiccv: "CV anonymes et dossiers de CV, en un clic", competitor: "Pas le cas d'usage" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Abonnements publics" },
    ],
    guidance:
      "Si votre équipe aide des personnes à décrocher un poste - recrutement, outplacement, services carrière - Enhancv est l'un des meilleurs outils pour cela et MagicCV n'essaie pas de le concurrencer là. Si vos CV vont dans des propositions et des appels d'offres avec le nom de votre cabinet en couverture, l'optimisation ATS est hors sujet et l'adaptation au cahier des charges est tout - c'est MagicCV. Les deux produits ne se ressemblent que tant qu'on n'a pas nommé le lecteur du document.",
    faqs: [
      {
        question: "Enhancv peut-il gérer des CV de propositions de conseil ?",
        answer:
          "Il peut produire des documents soignés et à votre image, et certaines équipes l'étirent dans ce sens. Ce pour quoi il n'est pas conçu, c'est le workflow autour : un vivier consultable, l'adaptation pilotée par le RFP, les CV anonymes pour appels d'offres et les dossiers multi-consultants. Ce sont le cœur de MagicCV, pas une adaptation.",
      },
      {
        question: "Les CV de conseil ont-ils besoin d'optimisation ATS ?",
        answer:
          "Presque jamais. Les CV de propositions sont lus par des évaluateurs clients et des jurys d'achats, pas par des logiciels de tri de candidatures. Ce qui fait bouger la note, c'est la pertinence face au cahier des charges - exactement ce que l'adaptation RFP-vers-CV de MagicCV automatise.",
      },
      {
        question: "Peut-on importer les CV que nos consultants ont faits dans Enhancv ?",
        answer:
          "Oui. Exportez-les en PDF ou DOCX et importez-les dans MagicCV - l'IA analyse chacun en un profil structuré. Les exports LinkedIn fonctionnent de la même façon, donc l'onboarding du vivier ne dépend d'aucun format source.",
      },
      {
        question: "Notre pôle recrutement utilise Enhancv. Le pôle conseil devrait-il l'utiliser aussi ?",
        answer:
          "Seulement si les besoins du pôle conseil s'arrêtent à de beaux documents. Dès que vous devez chercher dans le vivier par compétences, anonymiser pour un accord-cadre ou adapter 10 CV à un RFP pour vendredi, vous sortez de ce pour quoi un créateur de CV est conçu.",
      },
      {
        question: "Comment les tarifs se comparent-ils pour une équipe ?",
        answer:
          "L'offre Pro de MagicCV est à 50 $/mois pour 200 profils et 600 CV, avec une offre gratuite (10 profils, 30 CV) pour tester. Enhancv publie ses propres abonnements par utilisateur - des chiffres directement comparables, simplement tarifés pour des métiers différents.",
      },
    ],
    related: [
      { label: "Pour les équipes Recrutement", href: "/solutions/recruitment" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Enhancv - comparaison honnête",
      description: "Comment MagicCV se compare à Enhancv : CV de propositions de conseil vs création de CV pour candidats en recherche d'emploi.",
      keywords: ["alternative à Enhancv", "Enhancv vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "visualcv",
    competitorName: "VisualCV",
    h1: "MagicCV vs VisualCV : créateur de CV d'équipe ou workflow de CV de dossier ?",
    sub: "VisualCV donne aux équipes des CV homogènes et hébergés. MagicCV transforme un vivier de consultants en CV adaptés et à votre image par dossier. Proches en surface, différents en dessous.",
    whereCompetitorWins: [
      "Un créateur de CV établi de longue date, avec une offre business conçue pour les équipes",
      "Des modèles soignés plus des CV hébergés en ligne avec statistiques de consultation - utile quand vous partagez des CV en liens et voulez savoir qu'ils ont été ouverts",
      "Un moyen simple de garder les CV d'une équipe visuellement homogènes sous une même marque",
      "Des tarifs abordables et une mise en place légère pour ce qu'il fait",
    ],
    whereMagicCvDiffers: [
      "Construit autour du dossier, pas du document individuel : collez un RFP et l'IA remodèle le CV de chaque consultant autour de lui, puis assemble le dossier",
      "Des profils structurés comme source de vérité - consultables par compétences, secteurs, langues, certifications - plutôt qu'un dossier de CV designés",
      "Anonymisation en un clic pour les soumissions d'appels d'offres à l'aveugle et traduction dans n'importe quelle langue avec mise en page préservée",
      "RGPD dès la conception avec résidence des données dans l'UE et journaux d'audit ; SSO et DPA sur Enterprise",
    ],
    rows: [
      { category: "Mission première", magiccv: "CV de consultants adaptés pour dossiers et clients", competitor: "CV homogènes et CV hébergés en ligne" },
      { category: "Adaptation au cahier des charges", magiccv: "L'IA lit le RFP et remet chaque CV en valeur", competitor: "Édition manuelle dans des modèles" },
      { category: "Recherche d'équipe", magiccv: "Matrice de compétences sur tout le vivier", competitor: "Pas le focus" },
      { category: "Modèle de partage", magiccv: "Exports PDF/Word fidèles au pixel", competitor: "Liens hébergés avec statistiques de consultation" },
      { category: "Boîte à outils appels d'offres", magiccv: "CV anonymes et dossiers de CV, en un clic", competitor: "Pas le cas d'usage" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Offres publiques, palier business pour les équipes" },
    ],
    guidance:
      "Si ce dont vous avez besoin, c'est d'un ensemble de CV homogènes et soignés - et que les liens de CV hébergés avec suivi de consultation séduisent votre démarche commerciale - VisualCV fait ce métier bien et à faible effort. Si vos CV sont des munitions pour propositions et appels d'offres, le travail est l'adaptation et l'assemblage sous échéance, et c'est le workflow que MagicCV automatise de bout en bout. Nommez votre vraie tâche du mardi après-midi et choisissez en conséquence.",
    faqs: [
      {
        question: "VisualCV convient-il aux propositions de conseil ?",
        answer:
          "Il produit des documents homogènes et à votre image, ce qui couvre l'exigence de surface. Ce qui lui manque, c'est le workflow de proposition en dessous : adaptation pilotée par le RFP, matrice de compétences consultable, CV anonymes et dossiers multi-consultants. Si ce sont des tâches hebdomadaires chez vous, un créateur généraliste les laissera manuelles.",
      },
      {
        question: "Peut-on migrer les CV VisualCV de notre équipe vers MagicCV ?",
        answer:
          "Oui. Exportez-les en PDF ou Word et importez-les dans MagicCV - chacun devient un profil structuré et consultable. Une équipe de 30 personnes est généralement importée et exporte des CV à son image en une journée.",
      },
      {
        question: "MagicCV propose-t-il des liens de CV hébergés et des statistiques de consultation comme VisualCV ?",
        answer:
          "Non - MagicCV produit des exports PDF et Word fidèles au pixel, parce que c'est ce qu'exigent les propositions et les portails d'appels d'offres. Si les liens hébergés suivis sont au centre de votre façon de partager les CV, c'est un vrai avantage de VisualCV à peser.",
      },
      {
        question: "Comment les deux gèrent-ils la mise à jour des CV à l'échelle d'une équipe ?",
        answer:
          "Dans un créateur de CV, chaque document est édité individuellement et la dérive s'installe. Dans MagicCV, chaque personne a un profil ; les mises à jour prennent quelques minutes, l'IA structurant l'entrée, et chaque export où que ce soit puise dans la version à jour.",
      },
      {
        question: "Et le RGPD - nous sommes un cabinet européen ?",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit et un profil par personne, ce qui rend les demandes d'accès et de suppression simples ; Enterprise ajoute DPA et SSO. Vérifiez la documentation actuelle de VisualCV sur la résidence des données face à vos exigences.",
      },
    ],
    related: [
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Adapter les CV à chaque cahier des charges", href: "/use-cases/tailor-cvs" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs VisualCV - comparaison honnête",
      description: "Comment MagicCV se compare à VisualCV : CV de propositions de conseil vs création de CV généraliste pour les équipes.",
      keywords: ["alternative à VisualCV", "VisualCV business vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "rezi",
    competitorName: "Rezi",
    h1: "MagicCV vs Rezi : CV pour ATS et CV de propositions sont deux sports différents",
    sub: "Rezi est un créateur de CV par IA réglé pour le filtrage ATS, souvent déployé en marque blanche. MagicCV est réglé pour les cahiers des charges clients et les appels d'offres. Même étiquette « CV par IA », jeux différents.",
    whereCompetitorWins: [
      "Un créateur de CV par IA mature avec un ciblage de mots-clés ATS solide - la bonne optimisation quand un logiciel filtre le document",
      "Un déploiement en marque blanche, raison pour laquelle universités, centres de carrière et services de rédaction de CV construisent dessus",
      "Annonce publiquement SOC 2 Type II et SSO, avec une large base d'utilisateurs établie",
      "Des workflows de relecture et de retours adaptés au coaching, où un conseiller itère sur le CV d'un candidat",
    ],
    whereMagicCvDiffers: [
      "Optimise pour un évaluateur humain qui lit face à un cahier des charges : l'IA analyse le RFP et remodèle le CV de chaque consultant autour de ses exigences réelles",
      "Gère le vivier du cabinet, pas des recherches d'emploi individuelles : profils structurés, recherche par compétences et dossiers de CV assemblés par appel d'offres",
      "La boîte à outils des appels d'offres européens intégrée : CV anonymes en un clic, traduction dans n'importe quelle langue gardant la mise en page, résidence des données dans l'UE, RGPD dès la conception",
      "Des tarifs d'équipe simples : Free pour tester, Pro à 50 $/mois pour 200 profils - sans marque blanche ni contrat institutionnel",
    ],
    rows: [
      { category: "Qui lit le résultat", magiccv: "Évaluateurs clients et jurys d'appels d'offres", competitor: "Logiciels ATS, puis recruteurs" },
      { category: "Cible d'optimisation", magiccv: "Les exigences et critères de notation du cahier des charges", competitor: "Les mots-clés ATS de l'offre d'emploi" },
      { category: "Acheteur type", magiccv: "Cabinets de conseil, services IT, services professionnels", competitor: "Universités, centres de carrière, services de CV" },
      { category: "Déploiement", magiccv: "Espace d'équipe, en libre-service", competitor: "Direct ou programmes en marque blanche" },
      { category: "Fonctions pour appels d'offres", magiccv: "CV anonymes, dossiers de CV, export multilingue", competitor: "Pas le cas d'usage" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Paliers publics par siège" },
    ],
    guidance:
      "Si vous déployez un créateur de CV pour une population de chercheurs d'emploi - étudiants, alumni, clients d'outplacement - Rezi est un choix solide et crédité, et MagicCV ne joue pas sur ce terrain. Si vous êtes un cabinet dont les CV partent dans des propositions avec votre logo en couverture, les mots-clés ATS sont la mauvaise optimisation tout court ; il vous faut l'adaptation au cahier des charges, les CV anonymes et l'assemblage de dossiers. Choisissez selon qui lit le document, pas selon quel outil dit « IA ».",
    faqs: [
      {
        question: "MagicCV optimise-t-il les CV pour les ATS comme Rezi ?",
        answer:
          "Non, délibérément. Les CV de propositions sont lus par des évaluateurs clients face à un cahier des charges, pas analysés par des logiciels de recrutement. MagicCV optimise pour ce lecteur : l'IA lit le RFP et remet chaque CV en valeur autour de ses exigences.",
      },
      {
        question: "Rezi annonce SOC 2 Type II. Où en est MagicCV sur la conformité ?",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit, et SSO plus DPA sur l'offre Enterprise. SOC 2 est en cours, pas encore obtenu - si un rapport SOC 2 finalisé est une condition dure aujourd'hui, intégrez-le honnêtement à votre calendrier.",
      },
      {
        question: "Les CV Rezi de nos consultants peuvent-ils être importés dans MagicCV ?",
        answer:
          "Oui. Exportez-les en PDF ou DOCX et importez-les dans MagicCV - chacun devient un profil structuré, consultable par compétences, secteurs, langues et certifications.",
      },
      {
        question: "MagicCV propose-t-il un déploiement en marque blanche ?",
        answer:
          "Non. MagicCV est un espace d'équipe pour les cabinets qui gèrent leur propre vivier, pas une plateforme à rebrander pour des tiers. Si la marque blanche est l'exigence - services carrière, activités de rédaction de CV - Rezi est construit exactement pour cela.",
      },
      {
        question: "Nous sommes une société de services IT, pas un centre de carrière. Pourquoi Rezi a-t-il fini sur notre shortlist ?",
        answer:
          "En général parce que les recherches « créateur de CV par IA » le font remonter en premier. La question d'évaluation qui sépare les catégories : peut-il lire une annexe de RFP de 40 pages et remodeler 8 CV de consultants autour d'elle pour jeudi ? C'est le métier pour lequel MagicCV est construit.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Constituer un dossier de CV prêt pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Rezi - comparaison honnête",
      description: "Comment MagicCV se compare à Rezi : CV de propositions de conseil vs création de CV ATS en marque blanche.",
      keywords: ["alternative à Rezi", "Rezi enterprise vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "neobrain",
    competitorName: "Neobrain",
    h1: "MagicCV vs Neobrain : plateforme RH de compétences ou CV prêts pour le dossier ?",
    sub: "Neobrain cartographie les compétences pour la stratégie RH interne. MagicCV transforme l'expérience des consultants en CV destinés aux clients. Ils partagent le mot « compétences » et presque rien d'autre.",
    whereCompetitorWins: [
      "Une gestion des talents par les compétences de niveau entreprise : cartographie des compétences, mobilité interne et planification stratégique des effectifs à l'échelle de l'organisation",
      "Des modules de développement de carrière et de performance avec intégrations HRIS, construits pour les équipes RH qui mènent des transformations par les compétences",
      "Le bon outil quand la question est « quelles compétences notre effectif a-t-il et lui faut-il » plutôt que « quel CV va dans ce dossier »",
      "Établi auprès des grandes organisations, en particulier en France",
    ],
    whereMagicCvDiffers: [
      "Produit l'artefact que les clients voient réellement : des CV de consultants et des dossiers de proposition à votre image, adaptés par RFP par une IA qui lit le cahier des charges",
      "Un acheteur et un calendrier alignés sur le travail de dossier : libre-service, tarifs publics dès 0 $, premier CV adapté sorti le jour même - sans programme de transformation RH",
      "Anonymisation en un clic et traduction dans n'importe quelle langue gardant la mise en page, pour les appels d'offres et accords-cadres européens",
      "La recherche par compétences incluse au niveau opérationnel : trouvez chaque consultant avec SAP, le français et une expérience utilities en quelques secondes",
    ],
    rows: [
      { category: "Catégorie", magiccv: "Workflow de CV et propositions destinés aux clients", competitor: "Plateforme interne de compétences et de gestion des talents" },
      { category: "Acheteur principal", magiccv: "Bid managers, responsables ops, équipes de resourcing", competitor: "DRH et responsables de transformation RH" },
      { category: "Livrable central", magiccv: "CV adaptés et à votre image, dossiers de CV", competitor: "Cartographies de compétences, parcours de mobilité, plans d'effectifs" },
      { category: "Délai de mise en valeur", magiccv: "Le jour même, en libre-service", competitor: "Généralement un programme entreprise avec déploiement par phases" },
      { category: "Rôle des données de compétences", magiccv: "Extraites des CV pour alimenter recherche et adaptation", competitor: "Le produit lui-même - gérées comme données stratégiques" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Entreprise, sur devis" },
    ],
    guidance:
      "Ces outils répondent à des questions différentes. Si votre organisation doit cartographier les compétences de son effectif, planifier la reconversion et animer la mobilité interne, Neobrain est construit pour cette échelle de problème RH. Si votre équipe de réponse a besoin de CV de consultants prêts pour l'appel d'offres jeudi, aucune plateforme de compétences ne les produira - c'est le métier de MagicCV. Les plus grands cabinets font parfois tourner les deux ; ils ne se recouvrent pas assez pour se gêner.",
    faqs: [
      {
        question: "Neobrain est-il réellement un concurrent de MagicCV ?",
        answer:
          "Seulement à la marge. Neobrain est une plateforme interne de compétences et de talents pour les RH ; MagicCV produit des CV destinés aux clients pour les dossiers. Si les deux ont atterri sur votre shortlist, l'évaluation a probablement mélangé deux projets différents.",
      },
      {
        question: "MagicCV ne fait-il pas aussi de la gestion des compétences ?",
        answer:
          "Au niveau opérationnel, oui : l'import des CV construit une matrice de compétences consultable par compétence, secteur, langue et certification. Ce qu'il ne fait pas, c'est la planification stratégique des effectifs, les programmes de mobilité ou l'analyse des écarts de compétences - c'est réellement le territoire de Neobrain.",
      },
      {
        question: "Pourrait-on utiliser les données de Neobrain pour construire des CV de propositions ?",
        answer:
          "Les plateformes de compétences décrivent les personnes ; elles ne produisent généralement pas de documents prêts pour l'appel d'offres dans votre modèle, anonymisés et traduits. Les cabinets qui ont les deux besoins exportent les CV et les importent dans MagicCV - l'import Word et PDF évite tout projet d'intégration.",
      },
      {
        question: "Lequel apporte de la valeur le plus vite ?",
        answer:
          "Des échelles entièrement différentes. MagicCV est en libre-service : CV importés et premier export adapté le jour même, 50 $/mois au palier Pro. Une plateforme de compétences entreprise est généralement un programme - des mois de déploiement avec intégration HRIS - parce qu'elle résout un problème à l'échelle de l'organisation.",
      },
      {
        question: "Nous sommes mid-market. Avons-nous besoin de l'un ou de l'autre ?",
        answer:
          "Si les CV de dossier sont la douleur, MagicCV la règle à prix et effort mid-market. Une plateforme complète de transformation par les compétences justifie généralement son coût à des effectifs d'entreprise ; en dessous, la matrice de compétences que MagicCV construit depuis vos CV couvre souvent ce que les équipes mid-market utilisent réellement.",
      },
    ],
    related: [
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Pour les équipes RH / People Ops", href: "/solutions/hr" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs Neobrain - comparaison honnête",
      description: "Comment MagicCV se compare à Neobrain : CV de proposition destinés aux clients vs gestion des compétences et des talents en entreprise.",
      keywords: ["alternative à Neobrain", "Neobrain vs MagicCV"],
    },
  },
  {
    _type: "comparisonPage",
    slug: "techwolf",
    competitorName: "TechWolf",
    h1: "MagicCV vs TechWolf : infrastructure de compétences ou CV que vous pouvez envoyer ?",
    sub: "TechWolf infère des données de compétences pour d'immenses entreprises. MagicCV produit les CV adaptés avec lesquels votre dossier part. Des couches différentes de la pile, rarement un vrai choix binaire.",
    whereCompetitorWins: [
      "Une infrastructure d'intelligence des compétences qui infère les compétences automatiquement depuis les signaux de travail, au lieu de s'appuyer sur des données auto-déclarées",
      "S'intègre aux grands systèmes HCM comme Workday et SAP SuccessFactors, conçu pour fonctionner à très grande échelle d'entreprise",
      "L'option la plus forte quand l'objectif est des données de compétences continues et automatisées sur un effectif de dizaines de milliers de personnes",
      "Un pari d'infrastructure : les autres systèmes RH deviennent plus intelligents parce que TechWolf les alimente",
    ],
    whereMagicCvDiffers: [
      "Vit à la couche de sortie : transforme les profils de consultants en CV prêts pour le client et à votre image, adaptés par RFP par une IA qui lit le cahier des charges",
      "Dimensionné pour les cabinets mid-market : mise en place en libre-service le jour même, tarifs publics dès 0 $ avec Pro à 50 $/mois",
      "Livre la boîte à outils de l'équipe de réponse - édition par chat, CV anonymes en un clic, traduction gardant la mise en page, dossiers de CV de proposition",
      "Aucune intégration HCM nécessaire pour démarrer : importez des CV Word, PDF ou LinkedIn et les profils se construisent d'eux-mêmes",
    ],
    rows: [
      { category: "Couche", magiccv: "Sortie : les documents que les clients voient", competitor: "Infrastructure : des données de compétences alimentant les systèmes RH" },
      { category: "Livrable central", magiccv: "CV adaptés et à votre image, dossiers de proposition", competitor: "Profils de compétences inférés en continu dans les systèmes HCM" },
      { category: "Client type", magiccv: "Cabinets de conseil et de services, 10-250 personnes", competitor: "Très grandes entreprises, souvent 10 000+ collaborateurs" },
      { category: "Mise en place", magiccv: "Libre-service, import des CV, résultat le jour même", competitor: "Projet d'intégration entreprise avec les systèmes HCM" },
      { category: "Acheteur", magiccv: "Responsables bid, ops et resourcing", competitor: "Directions RH et IT d'entreprise" },
      { category: "Tarifs", magiccv: "Publics : Free, Pro à 50 $/mois", competitor: "Entreprise, sur devis" },
    ],
    guidance:
      "Si vous êtes un dirigeant RH d'entreprise qui a besoin de données de compétences fiables et mises à jour en continu dans Workday pour 50 000 collaborateurs, TechWolf est construit précisément pour cela et MagicCV non. Si vous êtes un cabinet de conseil qui a besoin de 8 CV adaptés, anonymisés et dans la langue du client pour jeudi, une infrastructure de compétences ne les produira pas - MagicCV oui. La plupart des lecteurs de cette page ont besoin du document, pas de la couche de données.",
    faqs: [
      {
        question: "MagicCV infère-t-il les compétences depuis l'activité de travail comme TechWolf ?",
        answer:
          "Non - c'est la spécialité de TechWolf et un problème réellement difficile à l'échelle entreprise. MagicCV extrait les compétences des CV que vous importez, ce qui convient bien à la taille mid-market où le vivier compte des centaines de personnes, pas des dizaines de milliers.",
      },
      {
        question: "Les données de compétences de TechWolf pourraient-elles générer nos CV de propositions ?",
        answer:
          "TechWolf produit des données de compétences pour les systèmes RH, pas des documents destinés aux clients ; il vous faudrait encore quelque chose pour rédiger, habiller, anonymiser et traduire le CV. Cette couche de sortie est tout le produit de MagicCV.",
      },
      {
        question: "Nous sommes 80 consultants. TechWolf est-il seulement pertinent pour nous ?",
        answer:
          "Probablement pas - son modèle est construit autour de l'intégration HCM des grandes entreprises et de l'échelle d'effectif. À 80 personnes, l'approche de MagicCV - analyser les CV que vous avez en profils consultables - apporte les bénéfices pratiques de la visibilité des compétences sans projet d'infrastructure.",
      },
      {
        question: "Un grand cabinet pourrait-il utiliser les deux ?",
        answer:
          "Oui, à des couches différentes : TechWolf maintenant à jour les données de compétences d'entreprise dans le HCM, MagicCV produisant les CV de dossier adaptés pour la branche conseil. MagicCV importe directement les CV Word et PDF, donc rien dans le fait de faire tourner les deux ne demande de travail d'intégration.",
      },
      {
        question: "Combien coûte MagicCV par rapport à une plateforme de compétences d'entreprise ?",
        answer:
          "MagicCV publie ses tarifs : Free (10 profils, 30 CV), Pro à 50 $/mois (200 profils, 600 CV), Enterprise sur mesure avec SSO et DPA. L'infrastructure de compétences d'entreprise est une toute autre catégorie budgétaire - typiquement un engagement à six chiffres, sur devis, dimensionné à l'effectif.",
      },
    ],
    related: [
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Hub des comparaisons", href: "/compare" },
    ],
    seo: {
      title: "MagicCV vs TechWolf - comparaison honnête",
      description: "Comment MagicCV se compare à TechWolf : CV de proposition destinés aux clients vs intelligence des compétences en entreprise.",
      keywords: ["alternative à TechWolf", "TechWolf vs MagicCV"],
    },
  },
];
