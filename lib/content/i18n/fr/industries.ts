import type { IndustryPage } from "../../types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "Sociétés de services IT / cabinets de conseil en logiciel répondant à des missions clients et des accords-cadres ; forte culture des CV à matrice de compétences.",
    angle:
      "Les CV tech doivent démontrer la bonne stack, les certifications et l'expérience projet pour chaque dossier. Les RFP exigent une correspondance précise des compétences.",
    h1: "Des CV qui prouvent que votre équipe maîtrise la stack.",
    sub: "Rapprochez les consultants par compétences et expérience technologique, puis générez des CV prêts pour le RFP qui parlent le langage des exigences du client - dans n'importe quelle langue.",
    keyPoints: [
      {
        title: "Correspondance des compétences et technologies avec les exigences du RFP",
        body: "MagicCV met directement en regard l'expérience de stack des consultants et ce que demande le cahier des charges.",
        screenshotAlt: "Matrice de compétences rapprochée des exigences techniques du RFP",
      },
      {
        title: "Certifications et faits marquants de projets mis en avant automatiquement",
        body: "Les certifications et l'historique de projets qui comptent pour ce dossier remontent en tête du CV.",
        screenshotAlt: "Certifications et faits marquants de projets sur un CV tech",
      },
      {
        title: "Formats d'accords-cadres et d'appels d'offres",
        body: "Exportez dans le format précis qu'exige un accord-cadre ou un appel d'offres.",
        screenshotAlt: "Export d'un modèle de CV pour accord-cadre",
      },
      {
        title: "Multilingue pour la livraison en Europe",
        body: "Soumissionnez et livrez au-delà des frontières sans processus de traduction séparé.",
        screenshotAlt: "Jeu de CV multilingues de consultants tech",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV gère-t-il les CV à matrice de compétences détaillée ?",
        answer:
          "Oui - MagicCV est bâti autour du rapprochement entre les compétences et l'expérience technologique des consultants et les exigences des RFP, exactement ce dont les formats à matrice de compétences ont besoin.",
      },
      {
        question: "Prend-il en charge les formats d'accords-cadres ?",
        answer:
          "Oui, vous pouvez exporter dans votre charte maison ou basculer vers un modèle spécifique à un client ou à un accord-cadre quand un dossier l'exige.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Pour les équipes commerciales", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV pour les cabinets de conseil en logiciel & IT",
      description:
        "Rapprochez les consultants par compétences et expérience technologique, puis générez des CV prêts pour le RFP - dans n'importe quelle langue.",
      keywords: ["gestion de CV conseil IT", "CV de consultant tech pour RFP"],
    },
  },
  {
    _type: "industryPage",
    slug: "strategy-consulting",
    reader: "Cabinets de conseil en stratégie/management où la crédibilité des associés et des consultants fait gagner les affaires.",
    angle:
      "Les propositions se gagnent sur la solidité et la pertinence de l'équipe nommée. Les CV doivent mettre en avant les missions les plus pertinentes pour chaque pitch.",
    h1: "Présentez l'équipe la plus pertinente pour chaque pitch.",
    sub: "MagicCV raisonne sur le cahier des charges et fait ressortir l'expérience la plus pertinente de chaque consultant - à votre image, digne d'un associé, en quelques minutes.",
    keyPoints: [
      {
        title: "Raisonnement sur la pertinence de l'expérience par cahier des charges",
        body: "Le CV de chaque consultant met en avant les missions les plus pertinentes pour ce pitch précis.",
        screenshotAlt: "CV de consultant mettant en évidence les missions les plus pertinentes pour un pitch",
      },
      {
        title: "Une présentation de marque cohérente et haut de gamme",
        body: "Chaque dossier d'associé et d'équipe reflète le même standard soigné et fidèle à la marque.",
        screenshotAlt: "Modèle de CV d'associé haut de gamme et cohérent avec la marque",
      },
      {
        title: "Dossiers associés + équipe",
        body: "Assemblez un dossier complet et cohérent réunissant les associés et l'équipe élargie pour un même pitch.",
        screenshotAlt: "Dossier combiné de CV d'associés et d'équipe",
      },
      {
        title: "Étiquetage par secteur et compétence",
        body: "Étiquetez l'expérience par secteur et compétence pour que les travaux les plus pertinents ressortent automatiquement.",
        screenshotAlt: "Étiquettes de secteur et de compétence sur un profil de consultant",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Cela fonctionne-t-il pour les bios d'associés, et pas seulement pour les CV de consultants ?",
        answer:
          "Oui - le même système d'adaptation et de modèles de marque s'applique, qu'il s'agisse d'un CV de consultant ou d'une bio d'associé.",
      },
      {
        question: "Comment MagicCV décide-t-il quelles missions mettre en avant ?",
        answer:
          "Il raisonne sur les exigences exprimées dans le cahier des charges et fait ressortir l'expérience réelle la plus pertinente du consultant - il n'invente jamais de missions.",
      },
    ],
    related: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Pour les équipes commerciales", href: "/solutions/sales" },
    ],
    seo: {
      title: "MagicCV pour le conseil en stratégie & management",
      description:
        "MagicCV raisonne sur le cahier des charges et fait ressortir l'expérience la plus pertinente de chaque consultant - à votre image, digne d'un associé.",
      keywords: ["CV de propositions conseil en management", "CV d'appel d'offres conseil en stratégie"],
    },
  },
  {
    _type: "industryPage",
    slug: "design-agencies",
    reader: "Agences de design / créatives / digitales pitchant pour des projets et des contrats récurrents ; le portfolio et les références de l'équipe comptent.",
    angle:
      "Les agences pitchent des équipes et des références créatives ; les CV/bios doivent être fidèles à la marque et adaptés rapidement à chaque pitch.",
    h1: "Des bios d'équipe à votre image pour chaque pitch - sans y passer du temps de design.",
    sub: "Générez des profils de consultants et de créatifs magnifiquement cohérents et adaptés, alignés sur la marque de votre studio et le brief du client.",
    keyPoints: [
      {
        title: "Des modèles parfaitement fidèles à la marque",
        body: "Les polices, couleurs et mise en page de votre studio, appliquées automatiquement à chaque bio d'équipe.",
        screenshotAlt: "Modèle de bio d'équipe aux couleurs du studio",
      },
      {
        title: "Des bios créatives adaptées à chaque pitch",
        body: "Mettez en avant les membres de l'équipe et les travaux les plus pertinents pour ce pitch précis.",
        screenshotAlt: "Bio d'équipe créative adaptée pour un pitch client",
      },
      {
        title: "Multilingue pour les clients internationaux",
        body: "Pitchez les clients transfrontaliers dans leur langue, sans processus séparé.",
        screenshotAlt: "Bios d'équipe créative multilingues",
      },
      {
        title: "Des profils d'équipe centralisés",
        body: "Gardez les références et les réalisations de chaque membre de l'équipe dans un seul endroit, structuré et à jour.",
        screenshotAlt: "Base de données centralisée de profils d'équipe créative",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Pouvons-nous conserver l'identité visuelle exacte de notre studio ?",
        answer:
          "Oui - définissez votre modèle de marque une seule fois (polices, couleurs, mise en page) et chaque bio générée en hérite automatiquement.",
      },
      {
        question: "Est-ce réservé aux CV, ou aussi aux bios d'équipe ?",
        answer: "Le même système d'adaptation et de modèles fonctionne aussi bien pour les CV de consultants que pour les bios d'équipes créatives.",
      },
    ],
    related: [
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
      { label: "Adapter les CV à chaque cahier des charges", href: "/use-cases/tailor-cvs" },
    ],
    seo: {
      title: "MagicCV pour les agences de design & créatives",
      description:
        "Générez des profils de consultants et de créatifs magnifiquement cohérents et adaptés, alignés sur la marque de votre studio.",
      keywords: ["outil de bios d'équipe agence", "CV de proposition agence créative"],
    },
  },
  {
    _type: "industryPage",
    slug: "engineering-consulting",
    reader:
      "Bureaux d'études en génie civil/structure/CVC/environnement - extrêmement dépendants des appels d'offres et des CV, en particulier pour la commande publique.",
    angle:
      "Les appels d'offres publics et privés exigent des CV d'ingénieurs standardisés et étayés (qualifications, inscriptions professionnelles, références de projets) dans des formats stricts et souvent en plusieurs langues.",
    h1: "Des CV d'ingénieurs prêts pour l'appel d'offres, au format exact que chaque dossier exige.",
    sub: "Des CV standardisés et étayés, avec qualifications, inscriptions professionnelles et références de projets - mis en forme pour n'importe quel appel d'offres, dans n'importe quelle langue.",
    keyPoints: [
      {
        title: "Formats stricts d'appels d'offres et de commande publique",
        body: "Exportez dans la structure exacte qu'exige un appel d'offres public ou privé.",
        screenshotAlt: "CV d'appel d'offres d'ingénierie dans un format strict de commande publique",
      },
      {
        title: "Rapprochement des références de projets avec les exigences de l'appel d'offres",
        body: "Faites ressortir les références de projets les plus pertinentes au regard de ce que demande cet appel d'offres.",
        screenshotAlt: "Références de projets rapprochées des exigences de l'appel d'offres",
      },
      {
        title: "Inscriptions professionnelles et certifications mises en avant",
        body: "Les inscriptions professionnelles et certifications sont présentées clairement, là où les évaluateurs s'attendent à les trouver.",
        screenshotAlt: "Inscriptions professionnelles sur un CV d'ingénieur",
      },
      {
        title: "Multilingue et anonymisation pour les dossiers publics",
        body: "Répondez aux exigences de langue et d'évaluation à l'aveugle, courantes dans la commande publique.",
        screenshotAlt: "CV d'ingénieur multilingue anonymisé pour un dossier public",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV prend-il en charge les formats stricts exigés par les marchés publics ?",
        answer:
          "Oui - vous pouvez configurer des modèles spécifiques à un client ou à un appel d'offres pour que les CV s'exportent dans la structure exacte qu'exige un appel d'offres donné.",
      },
      {
        question: "Peut-on anonymiser des CV d'ingénieurs pour une évaluation à l'aveugle ?",
        answer: "Oui, l'anonymisation est intégrée et peut s'appliquer à tout CV que votre processus de marché public exige.",
      },
    ],
    related: [
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
    ],
    seo: {
      title: "MagicCV pour les bureaux d'études & le conseil technique",
      description:
        "Des CV d'ingénieurs standardisés et étayés, avec qualifications, inscriptions professionnelles et références de projets.",
      keywords: ["CV appel d'offres ingénierie", "CV de consultant pour la commande publique"],
    },
  },
  {
    _type: "industryPage",
    slug: "audit-advisory",
    reader:
      "Cabinets mid-market d'audit/fiscalité/conseil et d'expertise comptable répondant à des RFP et à des soumissions de panels ou d'accords-cadres.",
    angle:
      "Les propositions de conseil exigent des CV d'équipe accrédités et conformes, mettant en avant l'expérience sectorielle et réglementaire ; la cohérence et la gouvernance des données comptent.",
    h1: "Des CV de conseil accrédités, cohérents dans chaque proposition.",
    sub: "Faites ressortir la bonne expérience sectorielle et réglementaire pour chaque mission, avec gouvernance et cohérence intégrées.",
    keyPoints: [
      {
        title: "Étiquetage par secteur et accréditation",
        body: "Étiquetez l'expérience par secteur et accréditation professionnelle pour que la bonne expertise ressorte pour chaque mission.",
        screenshotAlt: "Étiquettes de secteur et d'accréditation sur un CV de conseil",
      },
      {
        title: "Une présentation cohérente à l'échelle du cabinet",
        body: "Chaque proposition se lit comme émanant d'un seul cabinet, quelle que soit la personne qui l'a assemblée.",
        screenshotAlt: "Dossier de CV de conseil cohérent avec la marque du cabinet",
      },
      {
        title: "Gouvernance et journaux d'audit",
        body: "Tracez qui a modifié quoi, avec un accès basé sur les rôles pour les données des consultants.",
        screenshotAlt: "Vue de la gouvernance et du journal d'audit",
      },
      {
        title: "Multilingue pour le conseil transfrontalier",
        body: "Répondez aux exigences réglementaires et clients sur plusieurs marchés.",
        screenshotAlt: "Jeu de CV de conseil multilingues",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Peut-on étiqueter les consultants par accréditation réglementaire et par secteur ?",
        answer:
          "Oui - étiquetez les profils par secteur et par accréditation pour que l'expertise la plus pertinente ressorte automatiquement à chaque mission.",
      },
      {
        question: "Comment les données sont-elles gouvernées à l'échelle du cabinet ?",
        answer:
          "L'accès basé sur les rôles et les journaux d'audit vous donnent visibilité et contrôle sur qui peut voir et modifier les données des consultants.",
      },
    ],
    related: [
      { label: "Pour les équipes RH / People Ops", href: "/solutions/hr" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "MagicCV pour les cabinets d'audit, de fiscalité & de conseil",
      description:
        "Faites ressortir la bonne expérience sectorielle et réglementaire pour chaque mission, avec gouvernance et cohérence intégrées.",
      keywords: ["CV de proposition cabinet de conseil", "outil de CV de consultants expertise comptable"],
    },
  },
  {
    _type: "industryPage",
    slug: "public-sector",
    reader: "Cabinets qui soumissionnent massivement aux appels d'offres et accords-cadres européens et gouvernementaux (toutes disciplines).",
    angle:
      "La commande publique exige des modèles de CV standardisés, l'anonymisation pour l'évaluation à l'aveugle, la localisation linguistique et une conformité irréprochable. C'est le terrain où MagicCV excelle le plus.",
    h1: "Conçu pour les exigences des appels d'offres publics.",
    sub: "Modèles standardisés, anonymisation, sortie multilingue et RGPD dès la conception - tout ce qu'exige la commande publique européenne et gouvernementale.",
    keyPoints: [
      {
        title: "Conformité aux modèles gouvernementaux et européens",
        body: "Exportez les CV dans les formats standardisés qu'exigent les appels d'offres gouvernementaux et européens.",
        screenshotAlt: "Modèle de CV standardisé pour appel d'offres public",
      },
      {
        title: "Soumissions anonymisées et à l'aveugle",
        body: "Une anonymisation en un clic, conçue pour les processus d'évaluation à l'aveugle.",
        screenshotAlt: "CV anonymisé pour une évaluation d'appel d'offres à l'aveugle",
      },
      {
        title: "Localisation multilingue",
        body: "Générez des CV en DE, FR, NL et plus encore, à partir d'un seul profil maître.",
        screenshotAlt: "Jeu de CV secteur public localisés et multilingues",
      },
      {
        title: "Résidence des données et RGPD pour les acheteurs publics",
        body: "Résidence des données dans l'UE et traitement conforme au RGPD dès la conception, bâtis pour le niveau d'exigence de la commande publique.",
        screenshotAlt: "Paramètres de résidence des données UE pour un environnement secteur public",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV est-il conçu spécifiquement pour la commande publique européenne ?",
        answer:
          "Oui - modèles standardisés, anonymisation pour l'évaluation à l'aveugle, sortie multilingue et traitement des données conforme au RGPD dès la conception sont au cœur de la construction de MagicCV, pas des options ajoutées.",
      },
      {
        question: "Où nos données sont-elles stockées ?",
        answer: "Consultez le Trust Center pour la vue actuelle et factuelle sur la résidence des données dans l'UE et le traitement des données.",
      },
    ],
    related: [
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Trust Center", href: "/trust" },
      { label: "Bureaux d'études & conseil technique", href: "/solutions/engineering-consulting" },
    ],
    seo: {
      title: "MagicCV pour le conseil orienté secteur public & appels d'offres",
      description:
        "Modèles standardisés, anonymisation, sortie multilingue et RGPD dès la conception pour la commande publique européenne et gouvernementale.",
      keywords: ["format de CV appel d'offres UE", "outil de CV commande publique", "CV anonymisé pour appels d'offres"],
    },
  },
  {
    _type: "industryPage",
    slug: "staffing-agencies",
    reader:
      "Agences de staffing/talents spécialisées (non généralistes) plaçant des professionnels et soumettant des CV de candidats aux clients.",
    angle:
      "Les agences vivent et meurent par des CV de candidats rapides, soignés, au format du client, et des profils anonymisés. Note : le recrutement de masse est hors périmètre - cette page cible le placement spécialisé/professionnel.",
    h1: "Des CV de candidats soignés et prêts pour le client, à la vitesse d'une agence.",
    sub: "Mettez en forme, habillez à la marque et anonymisez les profils de candidats pour chaque soumission client - en quelques minutes, dans n'importe quelle langue.",
    keyPoints: [
      {
        title: "Des soumissions rapides, au format du client",
        body: "Générez rapidement un CV de candidat dans le format exact qu'exige une soumission client.",
        screenshotAlt: "Export d'un CV de candidat au format du client",
      },
      {
        title: "Des profils anonymisés pour la soumission à l'aveugle",
        body: "Appliquez l'anonymisation quand un client ou un processus exige une évaluation à l'aveugle.",
        screenshotAlt: "CV de candidat anonymisé pour une soumission à l'aveugle",
      },
      {
        title: "Une base de candidats centrale",
        body: "Gardez chaque profil de candidat structuré et à jour, au même endroit.",
        screenshotAlt: "Base de données centrale de profils de candidats",
      },
      {
        title: "Multilingue",
        body: "Soumettez les candidats dans la langue qu'exige le processus du client.",
        screenshotAlt: "Jeu de CV de candidats multilingues",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV convient-il au recrutement de masse à haut volume ?",
        answer:
          "Non - MagicCV est conçu pour le placement spécialisé et de services professionnels, où la qualité du CV et l'adaptation par client comptent, pas pour le staffing de masse à haut volume.",
      },
      {
        question: "Les CV de candidats peuvent-ils être anonymisés pour la soumission au client ?",
        answer: "Oui, la même anonymisation en un clic utilisée partout dans MagicCV s'applique aux profils de candidats.",
      },
    ],
    note: "MagicCV est conçu pour le placement spécialisé et de services professionnels, pas pour le recrutement de masse à haut volume.",
    related: [
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Pour les équipes Recrutement", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "MagicCV pour les agences de staffing & de talents spécialisées",
      description:
        "Mettez en forme, habillez à la marque et anonymisez les profils de candidats pour chaque soumission client - en quelques minutes, dans n'importe quelle langue.",
      keywords: ["mise en forme de CV agence de staffing", "outil d'anonymisation de CV de candidats"],
    },
  },
];
