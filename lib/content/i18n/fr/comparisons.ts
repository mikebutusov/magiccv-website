import type { ComparisonPage } from "../../types";

export const comparisons: ComparisonPage[] = [
  {
    _type: "comparisonPage",
    slug: "flowcase",
    competitorName: "Flowcase",
    h1: "MagicCV vs Flowcase",
    sub: "Une comparaison honnête pour la gestion des CV et des propositions de conseil.",
    whereCompetitorWins: [
      "Une forte notoriété de marque sur le marché",
      "Une UX aboutie et mature, construite sur des années",
      "Des clients grands comptes établis et des études de cas",
      "Des workflows de génération de propositions éprouvés",
    ],
    whereMagicCvDiffers: [
      "Un raisonnement RFP-vers-CV qui part du cahier des charges, pas d'un modèle",
      "Des tarifs publics, en libre-service - pas de démo obligatoire pour connaître le prix",
      "Conçu pour les cabinets mid-market, pas d'abord pour les grands comptes",
      "Opérationnel en une semaine environ, pas un déploiement d'un trimestre",
      "Nativement européen : multilingue, RGPD dès la conception, anonymisation intégrée",
    ],
    rows: [
      { category: "Point de départ", magiccv: "Raisonne à partir du cahier des charges RFP", competitor: "Mise en forme de CV à partir de modèles" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Accessibles après démo" },
      { category: "Taille de cabinet cible", magiccv: "Mid-market (10-250 employés)", competitor: "Orienté grands comptes" },
      { category: "Délai type de mise en service", magiccv: "Une semaine environ", competitor: "Plus long, déploiement de type grand compte" },
      { category: "Multilingue", magiccv: "5+ langues de l'UE", competitor: "Variable" },
      { category: "Anonymisation", magiccv: "Intégrée, en un clic", competitor: "Variable" },
    ],
    guidance:
      "Besoin de contrats grands comptes adaptés aux achats et d'une longue implémentation ? Flowcase convient. Envie d'être opérationnel en une semaine et de partir d'un vrai RFP ? MagicCV.",
    faqs: [
      {
        question: "MagicCV remplace-t-il directement Flowcase ?",
        answer:
          "Pour les cabinets mid-market qui veulent avancer vite sur les CV de propositions sans déploiement à l'échelle grand compte, oui. Les cabinets plus grands, aux besoins d'achats plus complexes, peuvent encore préférer le track record grand compte de Flowcase.",
      },
      {
        question: "Puis-je essayer MagicCV sans appel commercial ?",
        answer: "Oui - les tarifs sont publics et il existe une offre gratuite (10 profils, 30 CV), vous pouvez donc commencer sans réserver de démo.",
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
    h1: "MagicCV vs Cinode",
    sub: "Une comparaison honnête pour la gestion des CV et des ressources de conseil.",
    whereCompetitorWins: [
      "Une suite large : gestion des CV, compétences, ventes et planification des ressources sur une même plateforme",
      "Une forte présence dans les pays nordiques",
      "Très ancré et profondément intégré une fois pleinement déployé",
    ],
    whereMagicCvDiffers: [
      "Un focus plus net : le CV-pour-RFP mieux fait que n'importe quel module d'une suite plus large",
      "Un déploiement plus rapide",
      "Un coût plus faible et un coût de changement réduit",
      "Des tarifs publics, en libre-service",
    ],
    rows: [
      { category: "Périmètre", magiccv: "Ciblé : le workflow RFP-vers-CV", competitor: "Suite large : CV + compétences + ventes + resourcing" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
      { category: "Délai de déploiement", magiccv: "Une semaine environ", competitor: "Plus long, déploiement de toute la suite" },
      { category: "Force régionale", magiccv: "Toute l'UE, multilingue", competitor: "Fort dans les pays nordiques" },
      { category: "Coût de changement", magiccv: "Faible - outil ciblé et additif", competitor: "Plus élevé une fois pleinement intégré" },
    ],
    guidance:
      "Vous remplacez votre HRIS, votre CRM et votre planification des ressources d'un coup ? Cinode. Vous voulez d'abord régler les propositions et garder vos autres outils ? MagicCV.",
    faqs: [
      {
        question: "MagicCV remplace-t-il la planification des ressources ou un CRM ?",
        answer:
          "Non - MagicCV se concentre spécifiquement sur le workflow RFP-vers-CV. Si vous avez besoin d'une suite plus large couvrant la planification des ressources et les ventes, le périmètre de Cinode est plus étendu.",
      },
      {
        question: "MagicCV et Cinode peuvent-ils être utilisés côte à côte ?",
        answer:
          "Certains cabinets utilisent MagicCV spécifiquement pour les CV de propositions tout en gardant une plateforme plus large pour le resourcing - cela dépend de la part de la suite que vous utilisez réellement aujourd'hui.",
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
    h1: "MagicCV vs Sprint CV",
    sub: "Une comparaison honnête pour les outils de CV de conseil et de staffing.",
    whereCompetitorWins: [
      "Un produit centré sur le conseil et le staffing",
      "Un parsing de CV et des modèles solides",
      "Une forte présence dans la péninsule Ibérique",
    ],
    whereMagicCvDiffers: [
      "Une architecture nativement IA bâtie autour du raisonnement sur le RFP, pas seulement du parsing",
      "Des tarifs publics",
      "Une itération plus rapide et une feuille de route plus véloce",
      "Une couverture plus large des langues de l'UE",
    ],
    rows: [
      { category: "Moteur central", magiccv: "Raisonnement RFP nativement IA", competitor: "Parsing de CV et modèles" },
      { category: "Force régionale", magiccv: "Toute l'UE", competitor: "Fort dans la péninsule Ibérique" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
      { category: "Couverture linguistique", magiccv: "5+ langues de l'UE", competitor: "Variable" },
    ],
    guidance:
      "Vous opérez principalement dans la péninsule Ibérique ? Sprint CV est un choix respectable. Vous voulez une couverture linguistique européenne plus large et un raisonnement RFP nativement IA ? MagicCV.",
    faqs: [
      {
        question: "Sprint CV est-il un mauvais choix ?",
        answer:
          "Non - c'est un produit solide et ciblé, en particulier pour les cabinets opérant principalement dans la péninsule Ibérique. L'avantage de MagicCV tient à une couverture linguistique européenne plus large et au raisonnement RFP-vers-CV, plutôt qu'au parsing de modèles.",
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
    h1: "MagicCV vs CuViBox",
    sub: "Une comparaison honnête pour la gestion des CV de consultants.",
    whereCompetitorWins: ["Un gestionnaire de CV solide et établi", "Un moteur de modèles mature"],
    whereMagicCvDiffers: [
      "Nativement IA : raisonne d'abord sur le RFP, plutôt qu'un moteur de modèles avec de l'IA ajoutée par-dessus",
      "Un modèle mid-market, en libre-service",
    ],
    rows: [
      { category: "Approche", magiccv: "Nativement IA, raisonne à partir du cahier des charges", competitor: "Moteur de modèles, IA en supplément" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
      { category: "Taille de cabinet cible", magiccv: "Mid-market (10-250 employés)", competitor: "Variable" },
    ],
    guidance:
      "Satisfait d'un workflow à base de modèles avec une couche d'assistance IA ? CuViBox est une option établie. Vous voulez que le raisonnement IA soit le point de départ, pas un supplément ? MagicCV.",
    faqs: [
      {
        question: "Quelle est la différence concrète entre « nativement IA » et « assisté par l'IA » ?",
        answer:
          "MagicCV part du RFP et raisonne sur l'expérience qui compte avant de toucher à un modèle. Les outils à base de modèles partent d'un format de CV et utilisent l'IA pour aider à le remplir - le cahier des charges vient en second.",
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
    h1: "MagicCV vs Napta",
    sub: "Une comparaison honnête pour la gestion des CV de consultants et des ressources.",
    whereCompetitorWins: [
      "Une plateforme large de gestion des ressources et de staffing",
      "La génération de CV est un module au sein d'un produit plus vaste",
    ],
    whereMagicCvDiffers: [
      "Un focus net sur le CV-pour-RFP spécifiquement",
      "Plus rapide à déployer",
      "Un raisonnement RFP nativement IA",
    ],
    rows: [
      { category: "Périmètre", magiccv: "Ciblé : le CV-pour-RFP", competitor: "Suite large de gestion des ressources" },
      { category: "Délai de déploiement", magiccv: "Une semaine environ", competitor: "Plus long, déploiement de toute la plateforme" },
      { category: "Moteur central", magiccv: "Raisonnement RFP nativement IA", competitor: "À base de modèles" },
    ],
    guidance: "Besoin d'une suite complète de gestion des ressources ? Napta. Envie de régler d'abord les CV de propositions, et d'être opérationnel en jours plutôt qu'en mois ? MagicCV.",
    faqs: [
      {
        question: "MagicCV fait-il de la planification des ressources comme Napta ?",
        answer:
          "Non - MagicCV se concentre spécifiquement sur le workflow RFP-vers-CV. Si vous avez besoin d'une gestion des ressources plus large, le périmètre de Napta est plus étendu.",
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
    h1: "MagicCV vs SharePoint + Word",
    sub: "Le coût réel de ne rien changer.",
    whereCompetitorWins: ["Aucun coût logiciel direct", "Aucune courbe d'apprentissage", "Familier pour toute l'équipe"],
    whereMagicCvDiffers: [
      "Élimine le coût caché en heures hebdomadaires de relances et de remises en forme manuelles des CV",
      "Un rendu cohérent et à votre image, au lieu de dérives entre les versions",
      "Fini les courses de dernière minute avant une échéance",
      "Moins de RFP perdus sans traçabilité à cause de CV qui n'étaient pas prêts à temps",
    ],
    rows: [
      { category: "Coût direct", magiccv: "Abonnement mensuel transparent", competitor: "0 € de coût direct" },
      { category: "Temps par dossier de CV", magiccv: "Environ 15 minutes", competitor: "Des heures par RFP, à chaque fois" },
      { category: "Cohérence", magiccv: "Le même modèle de marque à chaque fois", competitor: "Dérive selon la personne qui met en forme" },
      { category: "Risque d'échéance", magiccv: "Conçu pour des délais courts", competitor: "Les courses de dernière minute sont fréquentes" },
    ],
    guidance:
      "SharePoint et Word ne coûtent rien en licences - mais les heures passées à relancer, reformater et courir avant les échéances constituent un coût réel et récurrent. Utilisez le calculateur ci-dessous pour estimer ce que cela coûte probablement à votre équipe.",
    faqs: [
      {
        question: "Le « gratuit » n'est-il pas toujours moins cher qu'un outil payant ?",
        answer:
          "Seulement si vous ne comptez pas le coût en temps. Les heures passées par RFP à relancer et reformater les CV s'accumulent - souvent au-delà du coût mensuel d'une offre MagicCV. Le calculateur de ROI sur cette page et sur la page Tarifs fait le calcul avec vos propres chiffres.",
      },
      {
        question: "Nous avons déjà un système de disques partagés qui fonctionne à peu près - pourquoi changer ?",
        answer:
          "S'il fonctionne vraiment, sans RFP perdus, sans incohérences ni courses de dernière minute, vous n'en avez peut-être pas besoin. La plupart des équipes qui évaluent MagicCV le font parce qu'au moins l'une de ces douleurs leur coûte déjà du temps ou des dossiers.",
      },
    ],
    related: [
      { label: "Tarifs", href: "/pricing" },
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
    h1: "MagicCV vs CVGate",
    sub: "Une comparaison honnête pour la gestion des CV et des propositions de conseil.",
    whereCompetitorWins: [
      "Centré sur la gestion des CV de conseil et de propositions, un cas d'usage très proche",
      "Des paliers tarifaires transparents et publics",
      "Recherche par compétences, gestion CRM/contacts et outils de proposition au même endroit",
      "Des statistiques de consultation et d'action sur les CV partagés",
    ],
    whereMagicCvDiffers: [
      "Nativement IA : remodèle chaque CV autour d'un cahier des charges ou d'un client, pas seulement une mise en forme par modèle",
      "Anonymisation et sortie multilingue intégrées pour les appels d'offres européens",
      "Une gestion plus large des profils de consultants comme source de vérité unique",
    ],
    rows: [
      { category: "Catégorie", magiccv: "Génération + gestion de CV nativement IA", competitor: "Gestion de CV + outils de proposition" },
      { category: "Adaptation au cahier des charges", magiccv: "Raisonne à partir du cahier des charges", competitor: "À base de modèles" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Paliers publics" },
      { category: "Anonymisation", magiccv: "Intégrée, en un clic", competitor: "Variable" },
      { category: "Multilingue", magiccv: "5+ langues de l'UE", competitor: "Variable" },
    ],
    guidance:
      "CVGate est un choix solide, aux tarifs transparents, pour centraliser les CV et accélérer les propositions. Si vous voulez en plus une IA qui remodèle chaque CV autour du cahier des charges, avec anonymisation et sortie multilingue intégrées pour les appels d'offres européens, MagicCV va plus loin.",
    faqs: [
      {
        question: "CVGate est-il une alternative sérieuse à MagicCV ?",
        answer:
          "Oui - il est réellement centré sur la gestion des CV et des propositions de conseil, avec des tarifs publics. La principale différence tient à l'adaptation nativement IA de MagicCV et à son anonymisation et sa sortie multilingue nativement européennes.",
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
    h1: "MagicCV vs CV-Transformer",
    sub: "Une comparaison honnête pour la mise en forme et la gestion des CV.",
    whereCompetitorWins: [
      "Excellent pour la mise en forme automatique des CV dans des modèles standardisés à votre marque",
      "Anonymisation des CV et prise en charge de 14 langues",
      "Intégrations ATS (Greenhouse, JobAdder, Salesforce et plus), stockage basé dans l'UE",
      "Une remise en forme rapide et à haut volume pour le staffing et le recrutement",
    ],
    whereMagicCvDiffers: [
      "Part du cahier des charges et redéfinit quelle expérience mettre en avant - pas seulement une remise en forme",
      "Des profils de consultants centralisés et toujours à jour comme source de vérité",
      "Construit autour du workflow de proposition de conseil, avec des tarifs publics en libre-service",
    ],
    rows: [
      { category: "Mission principale", magiccv: "Raisonnement + génération + gestion", competitor: "Remise en forme dans un modèle à votre marque" },
      { category: "Adaptation au cahier des charges", magiccv: "Raisonne à partir du cahier des charges", competitor: "Reformate, sans remettre en valeur" },
      { category: "Anonymisation", magiccv: "Intégrée", competitor: "Intégrée" },
      { category: "Langues", magiccv: "5+ langues de l'UE", competitor: "14 langues" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Crédits / mensuel (essai disponible)" },
    ],
    guidance:
      "Si votre besoin principal est de transformer des CV de candidats entrants en un format de marque cohérent, à haut volume, CV-Transformer est solide et s'intègre aux principaux ATS. Si vous voulez que l'outil raisonne sur le cahier des charges et gère les profils de consultants dans la durée, c'est le focus de MagicCV.",
    faqs: [
      {
        question: "Quelle est la différence fondamentale ?",
        answer:
          "CV-Transformer excelle dans la remise en forme des CV dans un modèle standardisé à votre marque. MagicCV ajoute le raisonnement RFP-vers-CV et la gestion continue des profils, en plus de l'export à votre image.",
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
    h1: "MagicCV vs CV Converter",
    sub: "Une comparaison honnête pour les outils de mise en forme de CV.",
    whereCompetitorWins: [
      "Très simple : chargez un modèle Google Docs, convertissez les CV de candidats pour qu'ils y correspondent",
      "Une tarification à l'usage transparente et abordable, avec essai gratuit",
      "Préserve la structure et l'image de votre modèle, sans stockage de données chez l'éditeur",
      "Idéal pour la mise en forme à haut volume en recrutement et RPO",
    ],
    whereMagicCvDiffers: [
      "Fait le raisonnement, pas seulement la mise en forme - remodèle les CV autour d'un cahier des charges ou d'un client",
      "Des profils de consultants centralisés et maintenus à jour dans la durée",
      "Anonymisation, sortie multilingue et dossiers de proposition pour les appels d'offres de conseil européens",
    ],
    rows: [
      { category: "Périmètre", magiccv: "Gérer, adapter, générer, exporter", competitor: "Conversion de format uniquement" },
      { category: "Source de vérité", magiccv: "Profils structurés par consultant", competitor: "Conversion fichier par fichier" },
      { category: "Adaptation au cahier des charges", magiccv: "Raisonne à partir du cahier des charges", competitor: "Pas le focus" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Publics, à la conversion / mensuel" },
    ],
    guidance:
      "CV Converter est un moyen astucieux et peu coûteux de standardiser la mise en forme des CV à haut volume. Si la mise en forme est vraiment tout ce dont vous avez besoin, il est difficile à battre en simplicité. Si vous voulez la gestion de profils et l'adaptation pilotée par le cahier des charges, MagicCV est l'outil plus complet.",
    faqs: [
      {
        question: "CV Converter est-il moins cher que MagicCV ?",
        answer:
          "Pour de la pure mise en forme fichier par fichier, sa tarification à l'usage peut être très basse. MagicCV couvre un workflow plus large - gestion de profils, adaptation, anonymisation, dossiers multilingues - les deux répondent donc à des périmètres différents.",
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
    h1: "MagicCV vs MuchSkills CV Inventory",
    sub: "Une comparaison honnête pour les CV de consultants pilotés par les compétences.",
    whereCompetitorWins: [
      "Génère des CV à partir de données de compétences vérifiées et vivantes dans la base MuchSkills",
      "Un contrôle de versions solide et des pistes d'audit pour chaque CV",
      "Gère ensemble collaborateurs internes et consultants externes",
      "Une taxonomie de compétences profonde (des milliers de certifications, compétences tech et capacités)",
    ],
    whereMagicCvDiffers: [
      "Fonctionne à partir de vos profils et CV existants - sans devoir d'abord adopter un produit de données de compétences séparé",
      "Un raisonnement RFP-vers-CV qui remet en valeur l'expérience réelle pour chaque cahier des charges",
      "Anonymisation et sortie multilingue nativement européennes pour les appels d'offres, avec des tarifs publics en libre-service",
    ],
    rows: [
      { category: "Modèle de données", magiccv: "Profils structurés à partir de vos CV/HRIS", competitor: "Piloté par une base de compétences" },
      { category: "Adaptation au cahier des charges", magiccv: "Raisonne à partir du cahier des charges", competitor: "Rapproche sur les données de compétences" },
      { category: "Contrôle de versions", magiccv: "Oui", competitor: "Oui, avec pistes d'audit" },
      { category: "Anonymisation / multilingue", magiccv: "Intégrées", competitor: "Variable" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
    ],
    guidance:
      "Si vous utilisez déjà (ou souhaitez adopter) MuchSkills comme référentiel de compétences, son CV Inventory en est une extension naturelle, avec d'excellentes données de compétences. Si vous préférez générer des CV solides, adaptés au cahier des charges, à partir des profils et CV que vous avez déjà, MagicCV vous y amène sans devoir d'abord monter une plateforme de compétences séparée.",
    faqs: [
      {
        question: "Ai-je besoin d'une base de compétences pour utiliser MagicCV ?",
        answer:
          "Non. MagicCV construit des profils structurés à partir de vos CV existants (et du HRIS, sur la feuille de route). MuchSkills CV Inventory est bâti autour de sa base de compétences, ce qui est puissant si c'est déjà votre référentiel.",
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
    h1: "MagicCV vs SprintCV Enterprise CV Manager",
    sub: "Une comparaison honnête pour la gestion des CV de conseil en entreprise.",
    whereCompetitorWins: [
      "Une gestion de CV de niveau entreprise, avec un parsing et des modèles solides",
      "Centré sur le conseil et le staffing, établi dans la péninsule Ibérique",
      "Des fonctions d'administration et de gestion d'équipe matures pour les cabinets plus grands",
    ],
    whereMagicCvDiffers: [
      "Une architecture nativement IA bâtie autour du raisonnement sur le RFP, pas du parsing et des modèles",
      "Des tarifs publics en libre-service et une valeur rapide pour les cabinets mid-market",
      "Une couverture plus large des langues de l'UE, anonymisation intégrée",
    ],
    rows: [
      { category: "Moteur central", magiccv: "Raisonnement RFP nativement IA", competitor: "Parsing + modèles" },
      { category: "Taille de cabinet cible", magiccv: "Mid-market (10-250)", competitor: "Orienté grands comptes" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
      { category: "Force régionale", magiccv: "Toute l'UE", competitor: "Fort dans la péninsule Ibérique" },
    ],
    guidance:
      "Pour une grande entreprise cherchant un gestionnaire de CV mature et riche en administration, le produit entreprise de SprintCV mérite un examen. Pour les cabinets mid-market qui veulent être opérationnels en une semaine, avec une adaptation nativement IA et des tarifs publics, MagicCV convient mieux.",
    faqs: [
      {
        question: "En quoi est-ce différent de votre comparaison avec Sprint CV ?",
        answer:
          "Il s'agit de l'offre de gestion de CV pour entreprises du même éditeur. Les conclusions sont similaires : l'avantage de MagicCV tient au raisonnement nativement IA, aux tarifs publics et à la vitesse de mise en valeur pour le mid-market.",
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
    h1: "MagicCV vs Enhancv",
    sub: "Une comparaison honnête pour les créateurs de CV.",
    whereCompetitorWins: [
      "Un excellent créateur de CV, soigné, avec plus de 40 modèles",
      "Un import en un clic depuis LinkedIn/DOCX/PDF et un rapprochement avec les offres d'emploi",
      "Un rendu compatible ATS et une bibliothèque d'équipe avec image de marque personnalisée",
      "Très adapté aux équipes de recrutement, de staffing et de coaching de carrière",
    ],
    whereMagicCvDiffers: [
      "Conçu pour les propositions et missions de conseil, pas pour les CV de candidats en recherche d'emploi",
      "Un raisonnement RFP-vers-CV et des dossiers de CV prêts pour la proposition, pas l'optimisation ATS d'un CV isolé",
      "Nativement européen : anonymisation et sortie multilingue pour les appels d'offres, RGPD dès la conception",
    ],
    rows: [
      { category: "Usage principal", magiccv: "CV de consultants pour dossiers/clients", competitor: "CV de candidats / chercheurs d'emploi" },
      { category: "Optimisé pour", magiccv: "Le cahier des charges du client", competitor: "ATS / offres d'emploi" },
      { category: "Dossiers de CV de proposition", magiccv: "Oui", competitor: "Pas le focus" },
      { category: "Anonymisation pour appels d'offres", magiccv: "Intégrée", competitor: "Pas le focus" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Publics" },
    ],
    guidance:
      "Enhancv est un excellent choix si vous produisez des CV de candidats - en particulier pour le recrutement et l'outplacement, où la compatibilité ATS compte. Si vos CV vont dans des propositions de conseil et des appels d'offres, MagicCV est conçu pour ce travail.",
    faqs: [
      {
        question: "Enhancv peut-il produire des CV de propositions de conseil ?",
        answer:
          "Il peut produire des CV de marque compatibles ATS à grande échelle. MagicCV est conçu spécifiquement pour le conseil : adaptation pilotée par le cahier des charges, dossiers de proposition, anonymisation et sortie multilingue pour les appels d'offres européens.",
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
    h1: "MagicCV vs VisualCV",
    sub: "Une comparaison honnête pour les créateurs de CV.",
    whereCompetitorWins: [
      "Un créateur de CV établi, avec une offre business pour les équipes",
      "Des modèles soignés, des CV hébergés en ligne et des statistiques de consultation",
      "Un bon choix pour des CV de marque homogènes à l'échelle d'une équipe",
    ],
    whereMagicCvDiffers: [
      "Spécifique au conseil : remodèle les CV autour d'un cahier des charges client et assemble des dossiers de proposition",
      "Anonymisation et sortie multilingue pour les appels d'offres européens, RGPD dès la conception",
      "Une gestion centralisée des profils de consultants comme source de vérité",
    ],
    rows: [
      { category: "Usage principal", magiccv: "CV de consultants pour dossiers/clients", competitor: "CV / CV en ligne" },
      { category: "Adaptation au cahier des charges", magiccv: "Raisonne à partir du cahier des charges", competitor: "À base de modèles" },
      { category: "Dossiers de CV de proposition", magiccv: "Oui", competitor: "Pas le focus" },
      { category: "Anonymisation / multilingue", magiccv: "Intégrées", competitor: "Variable" },
    ],
    guidance:
      "VisualCV est un solide créateur de CV généraliste, y compris pour les équipes voulant des CV de marque homogènes. Si votre métier, ce sont les propositions de conseil - adaptation aux cahiers des charges, dossiers, appels d'offres - MagicCV est le choix plus spécialisé.",
    faqs: [
      {
        question: "VisualCV est-il conçu pour les propositions de conseil ?",
        answer:
          "C'est un créateur de CV généraliste avec des fonctions d'équipe. MagicCV se concentre spécifiquement sur le workflow de proposition de conseil et les exigences des appels d'offres européens.",
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
    h1: "MagicCV vs Rezi",
    sub: "Une comparaison honnête pour les créateurs de CV par IA.",
    whereCompetitorWins: [
      "Un créateur de CV par IA mature, avec un déploiement en marque blanche",
      "Un ciblage de mots-clés ATS puissant et un workflow de gestion des relectures",
      "SOC 2 Type II, SSO et une large base d'utilisateurs",
      "Très adapté aux universités, centres de carrière et services de rédaction de CV",
    ],
    whereMagicCvDiffers: [
      "Les propositions de conseil, pas les CV de chercheurs d'emploi ni l'optimisation ATS",
      "Une adaptation pilotée par le cahier des charges et des dossiers de CV prêts pour les soumissions clients",
      "Anonymisation et sortie multilingue nativement européennes pour les appels d'offres",
    ],
    rows: [
      { category: "Usage principal", magiccv: "CV de consultants pour dossiers/clients", competitor: "CV de chercheurs d'emploi (marque blanche)" },
      { category: "Optimisé pour", magiccv: "Le cahier des charges du client", competitor: "Les mots-clés ATS" },
      { category: "Audience", magiccv: "Cabinets de conseil & services professionnels", competitor: "Universités, centres de carrière, agences" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Publics (paliers par siège)" },
    ],
    guidance:
      "Rezi est un excellent choix si vous déployez un créateur de CV en marque blanche pour des chercheurs d'emploi et que l'optimisation ATS vous importe. Pour les cabinets de conseil produisant des CV destinés aux clients et des dossiers de proposition, MagicCV est l'outil le mieux adapté.",
    faqs: [
      {
        question: "MagicCV optimise-t-il les CV pour les ATS comme Rezi ?",
        answer:
          "Non - l'optimisation de mots-clés ATS est une préoccupation de chercheur d'emploi. MagicCV optimise les CV de consultants pour le cahier des charges du client et les exigences des propositions et des appels d'offres.",
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
    h1: "MagicCV vs Neobrain",
    sub: "Une catégorie différente - gestion des compétences et des talents vs CV de proposition.",
    whereCompetitorWins: [
      "Une gestion des talents par les compétences de niveau entreprise : cartographie des compétences, mobilité interne, planification des effectifs",
      "Des modules de performance et de développement de carrière, des intégrations HRIS",
      "Très adapté aux grandes organisations RH qui se modernisent autour des compétences",
    ],
    whereMagicCvDiffers: [
      "Produit des CV de consultants destinés aux clients et des dossiers de proposition - pas de la planification RH interne",
      "Adaptation pilotée par le cahier des charges, export à votre image, anonymisation, multilingue pour les appels d'offres",
      "Opérationnel en une semaine, avec des tarifs publics en libre-service",
    ],
    rows: [
      { category: "Catégorie", magiccv: "CV destinés aux clients pour les propositions", competitor: "Gestion interne des compétences & talents" },
      { category: "Acheteur principal", magiccv: "Responsables bid / delivery / resourcing", competitor: "Direction RH / people" },
      { category: "Livrable", magiccv: "CV & dossiers de proposition à votre image", competitor: "Cartographies de compétences, mobilité, planification" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
    ],
    guidance:
      "Neobrain et MagicCV résolvent des problèmes différents. Si vous avez besoin d'une cartographie des compétences de niveau entreprise et de mobilité interne des talents, Neobrain est fait pour cela. Si vous devez transformer des profils de consultants en CV et dossiers de proposition prêts pour le client, c'est MagicCV. Certains cabinets utilisent les deux.",
    faqs: [
      {
        question: "Neobrain est-il un concurrent de MagicCV ?",
        answer:
          "Seulement à la marge. Neobrain est une plateforme RH/talents fondée sur les compétences ; MagicCV produit des CV destinés aux clients pour les propositions. Ils peuvent être complémentaires plutôt qu'exclusifs.",
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
    h1: "MagicCV vs TechWolf",
    sub: "Une catégorie différente - intelligence des compétences vs CV de proposition.",
    whereCompetitorWins: [
      "Une infrastructure d'intelligence des compétences de niveau entreprise, qui infère les compétences à partir des signaux de travail",
      "S'intègre aux grands HCM (Workday, SAP SuccessFactors) à très grande échelle",
      "Le meilleur de sa catégorie pour des données de compétences continues et automatisées sur d'immenses effectifs",
    ],
    whereMagicCvDiffers: [
      "Transforme les profils en CV et dossiers de proposition prêts pour le client - pas des données de compétences internes",
      "Adaptation pilotée par le cahier des charges, export à votre image, anonymisation, multilingue pour les appels d'offres européens",
      "Adapté au mid-market : opérationnel en une semaine, tarifs publics en libre-service",
    ],
    rows: [
      { category: "Catégorie", magiccv: "CV destinés aux clients pour les propositions", competitor: "Intelligence interne des compétences" },
      { category: "Livrable", magiccv: "CV & dossiers de proposition à votre image", competitor: "Données de compétences dans les systèmes RH" },
      { category: "Échelle", magiccv: "Cabinets de conseil mid-market", competitor: "Très grandes entreprises (100k+ collaborateurs)" },
      { category: "Tarifs", magiccv: "Publics, en libre-service", competitor: "Non publics" },
    ],
    guidance:
      "TechWolf est une puissante couche d'intelligence des compétences pour les grandes entreprises - un métier différent de celui de MagicCV. Si vous voulez des données de compétences automatisées et continues sur un immense effectif, TechWolf. Si vous voulez des CV de consultants et des dossiers de proposition prêts pour le client, MagicCV.",
    faqs: [
      {
        question: "MagicCV infère-t-il les compétences depuis l'activité de travail, comme TechWolf ?",
        answer:
          "Non - c'est la spécialité de TechWolf. MagicCV travaille à partir des profils et des CV des consultants pour produire des documents destinés aux clients ; les deux opèrent à des niveaux différents de la pile.",
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
