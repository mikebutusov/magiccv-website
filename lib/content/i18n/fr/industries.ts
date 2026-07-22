import type { IndustryPage } from "../../types";

export const industries: IndustryPage[] = [
  {
    _type: "industryPage",
    slug: "it-consulting",
    reader: "Sociétés de services IT / cabinets de conseil en logiciel répondant à des missions clients et des accords-cadres ; forte culture des CV à matrice de compétences.",
    angle:
      "L'annexe du RFP exige une matrice de compétences : années par technologie, certifications avec dates d'expiration, références de projets dans le format de tableau du client - pour 12 ingénieurs, dans le format de l'acheteur. Les CV de vos consultants vivent dans SharePoint dans dix mises en page Word différentes, et la dernière version vérifiée de la moitié d'entre eux date du dossier précédent. Alors le responsable delivery passe le week-end avant l'échéance à copier-coller depuis des fichiers final_v3 et à écrire aux consultants pour confirmer que leurs certifications AWS sont encore valides.\n\nMagicCV remplace cette course par un profil structuré par consultant. Importez les CV Word et PDF que vous avez aujourd'hui, et les compétences, certifications et historiques de projets deviennent des champs consultables au lieu de prose. Quand un dossier arrive, chargez le RFP : l'IA lit les exigences, remodèle chaque CV autour de la stack demandée par le client et exporte dans votre modèle maison ou le format imposé par l'accord-cadre - dans toute langue qu'exige l'appel d'offres.",
    h1: "Chaque RFP demande une matrice de compétences différente. Répondez à toutes depuis un seul profil.",
    sub: "Recherchez dans votre vivier par stack et certification, puis générez des CV de consultants prêts pour le RFP, dans le format exact qu'exige chaque accord-cadre ou appel d'offres.",
    keyPoints: [
      {
        title: "Trouvez les consultants qui correspondent réellement à la stack",
        body: "Filtrez tout le vivier par compétences, années d'expérience, certifications et langues en une seule recherche. Au lieu de demander à trois responsables delivery qui connaît Kubernetes, vous obtenez la shortlist en quelques secondes - y compris le consultant arrivé au dernier trimestre qui n'a jamais été ajouté au vieux tableur.",
        screenshotAlt: "Recherche d'équipe filtrée sur Kubernetes + AWS + allemand, montrant 6 consultants correspondants avec badges de certification",
      },
      {
        title: "Des CV remodelés autour des exigences réelles du RFP",
        body: "Chargez le RFP ou collez les exigences, et l'IA réordonne le CV de chaque consultant pour que les projets pertinents, l'expérience de stack et les certifications arrivent en tête. Elle ne travaille qu'à partir des données réelles du profil - rien n'est inventé pour combler un manque.",
        screenshotAlt: "Panneau des exigences du RFP à côté d'un CV de consultant avec les projets et certifications correspondants remontés en tête",
      },
      {
        title: "Un profil, tous les formats d'accords-cadres",
        body: "Les accords-cadres et les appels d'offres clients imposent chacun leur propre structure de CV. Configurez le modèle une fois, et chaque export sort parfaitement homogène en Word ou PDF - fini de reconstruire 12 CV à la main parce que ce client veut des tableaux au lieu de puces.",
        screenshotAlt: "Fenêtre d'export montrant le modèle de marque maison et deux modèles de CV spécifiques à des accords-cadres pour le même consultant",
      },
      {
        title: "Des certifications à jour, pas celles de l'an dernier",
        body: "Les certifications existent en champs structurés sur chaque profil, mises à jour une fois et répercutées dans chaque CV généré ensuite. Les renouvellements cessent d'être une relance du vendredi après-midi sur Slack avant chaque soumission.",
        screenshotAlt: "Profil de consultant avec liste de certifications montrant les dates de délivrance et le statut actuel",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Comment sortir 80 CV de consultants de SharePoint pour les mettre dans MagicCV ?",
        answer:
          "Chargez-les tels quels - Word, PDF ou profils LinkedIn exportés. MagicCV analyse chaque fichier en un profil structuré, un par personne : le dossier mélangé de fichiers final_v2 et final_v3 devient une base propre et consultable. La plupart des équipes migrent tout leur vivier en un après-midi.",
      },
      {
        question: "Le RFP demande une matrice de compétences avec les années par technologie. MagicCV peut-il la produire ?",
        answer:
          "Oui. Les compétences sont stockées en données structurées sur chaque profil, pas enfouies dans de la prose : l'IA peut les mettre en regard de ce que demande le cahier des charges et les présenter dans le format qu'exige l'appel d'offres. Si le client impose sa propre mise en page de matrice, configurez-la comme modèle et exportez-y directement.",
      },
      {
        question: "Pouvons-nous conserver notre modèle de CV Word existant ?",
        answer:
          "Oui. Recréez votre mise en page maison comme modèle de marque dans MagicCV - polices, couleurs, structure - et chaque export y correspond exactement, en Word ou PDF. Vous pouvez conserver plusieurs modèles en parallèle, un par accord-cadre ou client clé.",
      },
      {
        question: "Comment garder plus de 60 CV de consultants à jour sans relancer les gens ?",
        answer:
          "Chaque consultant a un profil maître unique : une mise à jour se fait une fois au lieu de cinq fichiers Word. L'historique de projets et les certifications sont des champs distincts, ce qui rend évident ce qui est périmé. L'éditeur par chat rend aussi les mises à jour assez rapides pour que les gens les fassent vraiment.",
      },
      {
        question: "MagicCV remplace-t-il un ATS ou un HRIS ?",
        answer:
          "Non. Un ATS suit les candidats et un HRIS gère la paie et les congés - aucun des deux ne produit un CV de consultant prêt pour le client. MagicCV est la couche logicielle de gestion des CV : il détient les profils prêts pour les dossiers de votre équipe de delivery et génère des CV adaptés et à votre image pour les RFP et les consultations d'accords-cadres.",
      },
      {
        question: "Les CV de sous-traitants et de freelances peuvent-ils entrer dans la même base ?",
        answer:
          "Oui. Un profil est un profil - beaucoup de cabinets gardent les associés externes et les sous-traitants réguliers à côté des salariés pour qu'une équipe de réponse puisse staffer une proposition complète en une seule recherche. Les contrôles d'accès vous laissent décider qui voit quels profils.",
      },
      {
        question: "Combien cela coûte-t-il pour un cabinet de 40 personnes ?",
        answer:
          "L'offre Pro coûte 50 $/mois et couvre 200 profils et 600 CV générés, ce qui convient à la plupart des cabinets jusqu'à quelques centaines de consultants. Il existe une offre gratuite (10 profils, 30 CV) pour tester le flux sur un dossier réel, et Enterprise ajoute un usage illimité, le SSO et un DPA.",
      },
      {
        question: "Où les données de nos consultants sont-elles stockées ?",
        answer:
          "Dans l'UE, avec un traitement RGPD dès la conception, des journaux d'audit et un accès par rôles. Les offres Enterprise ajoutent le SSO et un DPA. La certification SOC 2 est en cours ; le Trust Center présente l'état actuel.",
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
      "Les propositions en stratégie se gagnent sur l'équipe nommée, et les CV de l'équipe nommée sont généralement les pages les plus faibles du document. L'associé garde une bio personnelle de 2023 que personne n'a le droit de toucher. Les listes de missions sont génériques parce que l'analyste qui assemble le dossier à 23 h les a tirées de la proposition précédente, elle-même tirée de celle d'avant. Le client lit cinq bios dans cinq formats légèrement différents et en tire une conclusion sur le souci du détail du cabinet.\n\nMagicCV donne à chaque associé et consultant un profil maître unique - missions, secteurs, compétences - maintenu à un seul endroit. Pour chaque pitch, l'IA lit le cahier des charges et réordonne chaque bio pour que les missions les plus pertinentes arrivent en tête : le redressement retail pour le pitch de redressement retail, pas le top cinq générique. Tout le dossier d'équipe s'exporte dans votre modèle de marque : le document qu'un associé valide jeudi matin donne l'impression qu'un seul cabinet l'a écrit.",
    h1: "La proposition nomme l'équipe. Faites que chaque CV nommé mérite sa place.",
    sub: "Des bios d'associés et des CV de consultants qui mettent en avant les missions que ce pitch précis appelle - assemblés en quelques minutes, cohérents dans tout le dossier.",
    keyPoints: [
      {
        title: "Les bonnes missions en tête, pour chaque cahier des charges",
        body: "Donnez à MagicCV le brief du pitch et il réordonne l'historique de missions de chaque personne pour que les travaux les plus pertinents arrivent en premier - secteur, type de problème, taille de client. Le client voit une équipe assemblée pour son problème, pas une page de références recyclée.",
        screenshotAlt: "Bio de consultant avec trois missions de transformation retail remontées au-dessus des travaux antérieurs, les exigences du brief affichées à côté",
      },
      {
        title: "Un profil maître met fin au problème des versions personnelles",
        body: "Chaque associé et consultant a une source de vérité unique pour son expérience, mise à jour une fois via l'édition par chat. L'associé qui gardait sa propre version Word cesse d'être un goulot d'étranglement, parce que les bios adaptées se génèrent depuis le profil et non depuis le dernier fichier qu'il a envoyé par e-mail.",
        screenshotAlt: "Profil d'associé montrant l'historique de missions, les étiquettes de secteur et la date de dernière mise à jour",
      },
      {
        title: "Un dossier qui se lit comme un seul cabinet",
        body: "Assemblez associés, principals et équipe de delivery en un seul dossier de pitch, tous dans le même modèle de marque. Fini la passe de mise en forme du jeudi soir pour faire tenir dans le même document cinq bios venues de trois bureaux.",
        screenshotAlt: "Dossier de pitch de six personnes dans un modèle de marque cohérent, bios d'associés en premier",
      },
      {
        title: "Les étiquettes de secteur et de compétence se souviennent à votre place",
        body: "Les missions sont étiquetées par secteur et compétence : la spécialiste pricing avec trois clients de la grande distribution ressort quand le pitch grande distribution arrive - même si l'associé qui staffe n'a jamais travaillé avec elle. La mémoire institutionnelle cesse de dépendre de qui se trouve dans la pièce.",
        screenshotAlt: "Résultats de recherche pour pricing + grande distribution montrant 4 consultants classés par pertinence de missions",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Cela fonctionne-t-il pour les bios d'associés, et pas seulement pour les CV de consultants ?",
        answer:
          "Oui - une bio d'associé est le même mécanisme avec un accent différent. Le profil contient l'historique complet des missions ; le modèle d'export contrôle le rendu en bio d'une page ou en CV détaillé, et l'IA adapte l'un comme l'autre au pitch du moment.",
      },
      {
        question: "Comment MagicCV décide-t-il quelles missions mettre en avant ?",
        answer:
          "Il lit le cahier des charges - secteur annoncé, problème, périmètre - et classe les missions réelles de la personne en regard. Il réordonne et reformule ; il n'invente jamais des travaux qui ne figurent pas sur le profil. Vous relisez avant que quoi que ce soit n'entre dans le dossier.",
      },
      {
        question: "Peut-on généraliser les noms de clients dans les descriptions de missions ?",
        answer:
          "Oui. Les missions sont stockées telles que vous les avez écrites, et l'éditeur par chat permet de produire rapidement une version discrète (\"un des trois premiers distributeurs alimentaires européens\") pour un export donné, sans toucher au dossier maître. L'anonymisation en un clic est aussi disponible quand un processus exige des CV entièrement anonymes.",
      },
      {
        question: "Comment migrer des bios qui vivent aujourd'hui dans d'anciennes présentations de proposition ?",
        answer:
          "Exportez-les ou collez-les sous n'importe quelle forme - Word, PDF, même du texte brut - et MagicCV analyse chacune en un profil structuré. La première passe prend quelques minutes par personne ; les associés confirment ensuite leur propre profil une fois au lieu de revalider une nouvelle bio à chaque pitch.",
      },
      {
        question: "Pouvons-nous conserver notre modèle de proposition existant ?",
        answer:
          "Oui. Configurez votre modèle de marque - typographie, mise en page, structure - et chaque bio et CV s'y exporte en PDF ou Word parfaitement homogène, prêt à insérer dans le document de proposition.",
      },
      {
        question: "En quoi est-ce différent de garder les bios dans un SharePoint bien organisé ?",
        answer:
          "SharePoint stocke des documents ; il ne peut pas vous dire lequel de vos 40 consultants a de l'expérience en transition énergétique, et chaque version adaptée devient un fichier de plus à gouverner. MagicCV stocke des profils structurés qu'il peut chercher, mettre en regard d'un cahier des charges et exporter - le document est un livrable, pas le système de référence.",
      },
      {
        question: "Combien cela coûte-t-il pour un cabinet boutique ?",
        answer:
          "Free couvre 10 profils et 30 CV - de quoi faire passer un vrai pitch. Pro coûte 50 $/mois pour 200 profils et 600 CV, ce qui couvre la plupart des cabinets indépendants et de taille moyenne. Enterprise ajoute le SSO, un DPA et un usage illimité.",
      },
      {
        question: "Qui contrôle ce qui sort sous le nom d'un associé ?",
        answer:
          "L'accès par rôles sépare qui peut modifier les profils de qui peut générer et exporter les dossiers, et les journaux d'audit enregistrent chaque changement. Les associés peuvent relire leur bio adaptée avant soumission sans avoir à la maintenir eux-mêmes.",
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
      "Le deck de pitch est superbe. Puis vient la page équipe, et les bios sont dans six styles différents parce qu'elles ont été copiées-collées des trois derniers decks de références, et le nouveau motion designer ne figure dans aucun. Quelqu'un de senior reconstruit les bios dans Figma la veille au soir - encore une fois - parce qu'une agence qui vend du savoir-faire ne peut pas envoyer une page équipe qui a l'air assemblée à la hâte, même quand c'est le cas.\n\nMagicCV conserve un profil structuré par personne - salariés comme freelances réguliers - et rend les bios via le modèle de votre studio : vos polices, vos couleurs, votre mise en page. Pour chaque pitch, l'IA adapte ce que chaque bio met en avant pour correspondre au brief, et toute la page équipe s'exporte en PDF ou Word fini. Le savoir-faire reste visible ; la reconstruction s'arrête.",
    h1: "Des pages équipe qui ont l'air faites par votre studio - sans les refaire à chaque pitch.",
    sub: "Un profil par créatif, rendu exactement dans votre marque et adapté à chaque brief, pour que la page équipe cesse de dévorer la veille du pitch.",
    keyPoints: [
      {
        title: "Votre marque, appliquée automatiquement",
        body: "Configurez le modèle de votre studio une fois - typographie, couleurs, mise en page - et chaque bio s'y exporte de façon parfaitement homogène. La page équipe tient enfin le même standard que le reste du deck, sans qu'un designer y touche.",
        screenshotAlt: "Quatre bios de créatifs rendues dans le modèle du studio avec typographie et traitement photo cohérents",
      },
      {
        title: "Des bios adaptées au brief, pas recyclées du dernier deck",
        body: "Donnez le brief du pitch à MagicCV et chaque bio commence par les travaux pertinents : les projets e-commerce pour le pitch e-commerce, le travail de rebranding pour le rebranding. Les mêmes personnes, un récit plus net, aucune réécriture manuelle.",
        screenshotAlt: "Bio de directeur de création avec les projets e-commerce remontés en tête pour un brief de pitch retail",
      },
      {
        title: "Tout l'effectif au même endroit, freelances compris",
        body: "Importez bios et CV depuis Word, PDF ou LinkedIn et chaque personne devient un profil structuré et consultable. Quand un pitch a besoin d'un chercheur UX avec de l'expérience fintech, vous cherchez - au lieu de remonter Slack pour retrouver le freelance que quelqu'un a utilisé au printemps dernier.",
        screenshotAlt: "Vue d'effectif filtrée sur les chercheurs UX, mêlant profils salariés et freelances avec étiquettes de disponibilité",
      },
      {
        title: "Des pitchs internationaux dans la langue du client",
        body: "Traduisez n'importe quelle bio ou page équipe complète dans la langue du client en gardant votre mise en page intacte. Les pitchs transfrontaliers cessent d'exiger un aller-retour séparé de traduction et de remise en page.",
        screenshotAlt: "La même bio d'équipe affichée côte à côte en anglais et en allemand dans une identité de studio identique",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Pouvons-nous conserver l'identité visuelle exacte de notre studio ?",
        answer:
          "Oui - c'est le but. Vous définissez le modèle avec vos polices, couleurs et mise en page, et chaque bio générée en hérite exactement, exportée en PDF ou Word. Si le résultat ne ressemble pas au vôtre, c'est que le modèle n'est pas encore terminé.",
      },
      {
        question: "Est-ce pour les CV, ou pour les bios courtes que nous mettons dans les decks ?",
        answer:
          "Les deux viennent du même profil. Un modèle contrôle le format de sortie : le profil d'une personne peut se rendre en bio de trois lignes pour un deck, en one-pager ou en CV complet pour un contrat récurrent ou un accord-cadre - tous cohérents entre eux.",
      },
      {
        question: "Pouvons-nous inclure les freelances et collaborateurs réguliers ?",
        answer:
          "Oui. Beaucoup d'agences gardent leur vivier de freelances de confiance dans la même base que les salariés, pour qu'une équipe de pitch puisse être assemblée et présentée en une seule passe. Les contrôles d'accès décident qui peut voir et exporter quels profils.",
      },
      {
        question: "Comment faire entrer la bio de tout le monde sans gros projet de contenu ?",
        answer:
          "Chargez ce qui existe - vieux CV, exports LinkedIn, bios copiées d'anciens decks - et MagicCV analyse chacun en un profil structuré. Ensuite, chacun peaufine son propre profil via l'édition par chat, ce qui est plus rapide que de leur faire remplir un formulaire.",
      },
      {
        question: "Combien cela coûte-t-il pour un studio de 15 personnes ?",
        answer:
          "Free couvre 10 profils et 30 CV générés, ce qui suffit pour le tester sur un vrai pitch. Pro à 50 $/mois couvre 200 profils et 600 CV - de la place pour tout le studio plus le vivier de freelances. Enterprise existe pour les réseaux plus grands qui ont besoin de SSO et d'un usage illimité.",
      },
      {
        question: "Comment les données personnelles sont-elles traitées ? Certains profils sont des freelances, pas des salariés.",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, accès par rôles et journaux d'audit, ce qui compte quand vous détenez des profils de personnes qui ne sont pas sur votre paie. Les profils peuvent être supprimés proprement quand une collaboration se termine.",
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
      "L'appel d'offres arrive avec un formulaire de CV obligatoire en annexe C : qualifications, inscriptions professionnelles, puis références de projets avec rôles, montants et dates - pour 12 ingénieurs, au format de l'acheteur, pour vendredi midi. Les références existent, éparpillées dans d'anciens dossiers et les fichiers Word des ingénieurs eux-mêmes, dont la moitié décrivent le même projet de trois façons différentes. Ajoutez un partenaire de groupement qui envoie ses CV dans encore une autre mise en page, et le bid manager perd deux jours en remise en forme au lieu d'écrire le mémoire technique.\n\nMagicCV conserve les qualifications, inscriptions et références de projets de chaque ingénieur en données structurées, saisies une fois. Quand un appel d'offres arrive, l'IA met les profils en regard de ses exigences, fait ressortir les références qui marquent des points et exporte chaque CV dans le modèle exact qu'impose l'annexe - traduit là où l'appel d'offres l'exige, anonymisé là où l'évaluation est à l'aveugle. Le renouvellement d'accord-cadre de l'an prochain part de profils à jour, pas d'une fouille archéologique dans la dernière soumission.",
    h1: "Renouvellements d'accords-cadres et dossiers en groupement, sans reconstruire 12 CV d'ingénieurs à la main.",
    sub: "Qualifications, inscriptions professionnelles et références de projets stockées une fois - exportées dans le format exact qu'exige chaque annexe d'appel d'offres, dans n'importe quelle langue.",
    keyPoints: [
      {
        title: "Le format de l'annexe, produit au lieu d'être reconstruit",
        body: "Configurez la structure de CV imposée par l'acheteur comme modèle et exportez-y directement le CV de chaque ingénieur, en Word ou PDF. Quand l'appel d'offres suivant impose une autre structure, vous ajoutez un modèle - vous ne reformatez pas 12 documents.",
        screenshotAlt: "CV d'ingénieur exporté dans le format d'annexe imposé par un marché public, avec les sections inscriptions et références dans l'ordre requis",
      },
      {
        title: "Des références de projets alignées sur les critères de notation",
        body: "Les références existent en entrées structurées - rôle, périmètre, montant, dates - réutilisables d'un dossier à l'autre. Chargez l'appel d'offres et l'IA fait ressortir pour chaque ingénieur les références qui correspondent le mieux à ce que les évaluateurs noteront, au lieu des trois mêmes projets que tout le monde liste toujours.",
        screenshotAlt: "Liste de références filtrée sur les projets d'infrastructure hydraulique de plus de 10 M EUR, mise en regard des critères de l'appel d'offres",
      },
      {
        title: "Les inscriptions professionnelles là où les évaluateurs les cherchent",
        body: "Le statut d'ingénieur agréé et les inscriptions professionnelles sont des champs du profil, tenus à jour à un seul endroit et rendus exactement là où chaque format d'appel d'offres les attend. Fini de découvrir une inscription expirée pendant le contrôle de conformité.",
        screenshotAlt: "Profil d'ingénieur montrant le statut d'agrément et les inscriptions professionnelles avec dates",
      },
      {
        title: "Évaluation à l'aveugle et dossiers multilingues depuis le même profil",
        body: "Un clic anonymise un CV pour l'évaluation à l'aveugle ; la traduction produit la version française ou allemande avec la mise en page intacte. Les deux viennent du même profil maître, donc les versions linguistiques ne se désynchronisent jamais de l'original.",
        screenshotAlt: "CV d'ingénieur anonymisé à côté de sa traduction française, tous deux dans le format imposé par l'appel d'offres",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Les marchés publics imposent leurs propres formulaires de CV. MagicCV peut-il exporter dedans ?",
        answer:
          "Oui. Vous recréez la structure imposée comme modèle - ordre des sections, tableaux, libellés de champs - et exportez le CV de chaque ingénieur directement dedans. Les bureaux d'études qui soumissionnent sur plusieurs accords-cadres gardent généralement un modèle par acheteur à côté du format maison.",
      },
      {
        question: "Peut-on importer les CV de notre partenaire de groupement pour un dossier commun ?",
        answer:
          "Oui. Chargez leurs CV Word ou PDF et ils s'analysent en profils structurés comme les vôtres : les CV de tout le groupement s'exportent dans un format cohérent et conforme. Les contrôles d'accès permettent ensuite de cloisonner les profils du partenaire si vous le souhaitez.",
      },
      {
        question: "Comment fonctionne l'anonymisation pour l'évaluation à l'aveugle ?",
        answer:
          "Un clic retire les noms, photos et éléments identifiants en gardant intacts les qualifications, inscriptions et références. Vous relisez la version anonyme avant qu'elle n'entre dans la soumission, et le profil maître reste intact.",
      },
      {
        question: "Comment maintenir une bibliothèque de références de projets pour 50 ingénieurs ?",
        answer:
          "Chaque référence est saisie une fois en données structurées et réutilisée sur chaque dossier et chaque ingénieur concerné. Quand un projet se clôture, vous l'ajoutez pendant que les détails sont frais - elle est ensuite disponible pour le renouvellement d'accord-cadre deux ans plus tard, au lieu d'être reconstituée de mémoire.",
      },
      {
        question: "Nous soumissionnons en allemand, français et néerlandais. La traduction conserve-t-elle le format ?",
        answer:
          "Oui - les CV se traduisent dans la langue de l'appel d'offres en gardant la mise en page du modèle intacte : la version traduite est prête à soumettre, pas un point de départ. Toutes les versions linguistiques se génèrent depuis le même profil maître.",
      },
      {
        question: "Les acheteurs publics scrutent le traitement des données. Où résident nos données ?",
        answer:
          "Résidence des données dans l'UE, RGPD dès la conception, journaux d'audit et accès par rôles. Enterprise ajoute le SSO et un DPA. SOC 2 est en cours - le Trust Center porte l'état actuel, que vous pouvez citer dans vos propres réponses de conformité.",
      },
      {
        question: "Cela remplace-t-il notre système RH ?",
        answer:
          "Non. Votre HRIS gère l'emploi ; MagicCV gère la couche tournée vers les dossiers - CV prêts pour les appels d'offres, inscriptions et références - que les systèmes RH ne produisent pas. Ils coexistent ; MagicCV possède les documents qui entrent dans les soumissions.",
      },
      {
        question: "Combien cela coûte-t-il pour un bureau d'études de 60 ingénieurs ?",
        answer:
          "Pro coûte 50 $/mois pour 200 profils et 600 CV générés, ce qui couvre confortablement un cabinet de cette taille sur une année d'appels d'offres. L'offre gratuite (10 profils, 30 CV) permet de piloter un appel d'offres réel d'abord, et Enterprise ajoute un usage illimité, le SSO et un DPA.",
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
      "Les soumissions de panels et les propositions de mission demandent toujours la même chose : des CV d'équipe accrédités montrant la bonne expérience sectorielle, les dates de qualification et le parcours réglementaire - et chaque bureau les assemble différemment. Le bureau de Hambourg utilise une mise en page, la practice fiscale une autre, et quand un associé rejoint une mission en pleine proposition, quelqu'un reconstruit son CV à 20 h depuis une version vieille de deux ans. Pour un cabinet qui vend de la rigueur, des références d'équipe incohérentes font mauvais effet devant un comité d'audit.\n\nMagicCV conserve un profil par associé et professionnel - qualifications, expérience sectorielle, historique de missions - étiqueté et consultable à l'échelle du cabinet. Les propositions tirent des CV adaptés qui mettent en avant l'expérience sectorielle et réglementaire que chaque mission appelle, exportés dans le modèle du cabinet pour que chaque bureau soumette le même cabinet. L'accès par rôles et les journaux d'audit gardent la gouvernance sur qui voit et modifie quoi - le standard auquel votre propre équipe risques tiendra l'outil.",
    h1: "Des soumissions de panels avec les mêmes CV accrédités depuis chaque bureau, à chaque fois.",
    sub: "Un profil gouverné par professionnel - qualifications, expérience sectorielle, historique de missions - exporté de façon cohérente pour chaque proposition et soumission d'accord-cadre.",
    keyPoints: [
      {
        title: "Accréditations et expérience sectorielle en données consultables",
        body: "Qualifications, agréments et étiquettes sectorielles sont des champs structurés, pas des lignes dans un fichier Word. Quand la mission exige un associé d'audit en services financiers avec expérience des entités d'intérêt public, la recherche répond en quelques secondes - dans tous les bureaux, pas seulement celui qui assemble la proposition.",
        screenshotAlt: "Recherche à l'échelle du cabinet filtrée sur les associés d'audit avec expérience services financiers et EIP, montrant 5 résultats avec badges de qualification",
      },
      {
        title: "Chaque proposition se lit comme un seul cabinet",
        body: "Tous les CV s'exportent via le même modèle du cabinet, quelle que soit la personne qui les assemble et où qu'elle se trouve. La soumission de panel de la practice fiscale et la réponse au RFP du conseil cessent d'avoir l'air de venir de cabinets différents.",
        screenshotAlt: "Quatre CV de professionnels de lignes de services différentes rendus dans un même modèle de cabinet cohérent",
      },
      {
        title: "Une gouvernance que votre équipe risques acceptera",
        body: "L'accès par rôles contrôle qui peut consulter et modifier les profils, et les journaux d'audit enregistrent chaque changement avec qui et quand. Quand quelqu'un demande comment les données de CV sont gouvernées, il y a une vraie réponse au lieu d'une supposition sur les permissions SharePoint.",
        screenshotAlt: "Journal d'audit montrant les modifications de profils avec utilisateur, champ et horodatage, à côté des paramètres d'accès par rôles",
      },
      {
        title: "Des missions transfrontalières dans la langue du client",
        body: "Traduisez n'importe quel CV dans la langue de travail de la mission pendant que le modèle du cabinet reste intact. Les propositions multi-pays cessent d'exiger une passe de traduction distincte par cabinet membre.",
        screenshotAlt: "CV d'associé conseil affiché en versions anglaise et allemande dans une identité de cabinet identique",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Peut-on suivre les qualifications professionnelles et les dates d'agrément sur chaque profil ?",
        answer:
          "Oui - les qualifications sont des champs structurés avec dates, mises à jour une fois et répercutées dans chaque CV généré ensuite. Cela met fin à la course d'avant-soumission pour confirmer que les accréditations de chacun sont correctement énoncées.",
      },
      {
        question: "Comment l'accès aux données des professionnels est-il gouverné à l'échelle du cabinet ?",
        answer:
          "L'accès par rôles définit qui peut consulter, modifier et exporter les profils - par exemple, les équipes de proposition peuvent générer des CV sans droits de modification sur les données sous-jacentes. Les journaux d'audit enregistrent chaque changement, ce qui satisfait la plupart des revues de risques internes.",
      },
      {
        question: "MagicCV est-il certifié SOC 2 ?",
        answer:
          "La certification SOC 2 est en cours, pas terminée - nous ne prétendrons pas le contraire. Ce qui est en place aujourd'hui : architecture RGPD dès la conception, résidence des données dans l'UE, journaux d'audit, accès par rôles, plus SSO et DPA sur Enterprise. Le Trust Center présente l'état actuel.",
      },
      {
        question: "Où les données sont-elles stockées, et y a-t-il un DPA ?",
        answer:
          "Les données sont stockées dans l'UE avec un traitement RGPD dès la conception. Un DPA fait partie de l'offre Enterprise, avec le SSO - les exigences habituelles quand la propre fonction conformité d'un cabinet examine un nouvel outil.",
      },
      {
        question: "Comment migrer des CV qui vivent sur le disque de chaque bureau ?",
        answer:
          "Chargez-les en Word ou PDF et MagicCV analyse chacun en un profil structuré. Le chemin réaliste est un groupe de practice à la fois : importer, faire confirmer par les professionnels leur propre profil via l'édition par chat, puis basculer les propositions de ce groupe.",
      },
      {
        question: "Pouvons-nous conserver le modèle de CV existant de notre cabinet ?",
        answer:
          "Oui. Votre modèle est recréé une fois - mise en page, typographie, ordre des sections - et chaque export y correspond en Word ou PDF. Les cabinets membres d'un réseau gardent souvent le modèle standard du réseau à côté du leur.",
      },
      {
        question: "En quoi est-ce différent de notre ATS ou de notre système RH ?",
        answer:
          "Ces systèmes gèrent le recrutement et l'emploi ; aucun ne produit un CV d'associé prêt pour une proposition. MagicCV est un logiciel de gestion des CV pour la couche tournée vers les clients - les pages d'équipe accréditées qui entrent dans les soumissions de panels, les RFP et les lettres de mission.",
      },
      {
        question: "À quoi ressemble la tarification pour un cabinet de 100 personnes ?",
        answer:
          "Pro à 50 $/mois couvre 200 profils et 600 CV générés, ce qui convient à la plupart des cabinets mid-market. Enterprise est sur tarification personnalisée pour un usage illimité, le SSO et un DPA - généralement là où atterrissent les cabinets multi-bureaux une fois que les risques et l'IT ont validé.",
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
      "Dans la commande publique, le CV est un artefact de conformité avant d'être un document commercial. L'appel d'offres impose un modèle de CV en annexe, plafonne le nombre de pages, exige des versions anonymes pour l'évaluation et veut la soumission en deux langues - et un seul CV non conforme peut faire écarter un dossier par ailleurs gagnant. Les équipes qui soumissionnent sur des accords-cadres connaissent la routine : les 15 mêmes experts, reformatés encore une fois pour chaque marché subséquent, avec l'anonymisation faite à la main dans Word et vérifiée deux fois parce que personne ne fait confiance au chercher-remplacer.\n\nMagicCV traite ces exigences comme le cas par défaut, pas comme l'exception. Les profils maîtres s'exportent dans n'importe quel modèle standardisé imposé par l'acheteur ; l'anonymisation tient en un clic, pas en une soirée ; la traduction en DE, FR, NL ou toute langue d'appel d'offres garde la mise en page intacte. En dessous, le RGPD dès la conception et la résidence des données dans l'UE font que l'outil qui détient les données personnelles de vos experts résiste au même examen que votre dossier.",
    h1: "Passez le contrôle de conformité des CV du premier coup, dans chaque appel d'offres.",
    sub: "Modèles standardisés, CV anonymes en un clic, sortie multilingue et RGPD dès la conception - le flux de travail CV que la commande publique européenne et gouvernementale exige réellement.",
    keyPoints: [
      {
        title: "Le modèle imposé par l'acheteur, exporté et non imité",
        body: "Recréez la structure de CV exigée par l'appel d'offres comme modèle - formats standard européens compris - et exportez le CV de chaque expert directement dedans. Les contrôles de conformité cessent de révéler des écarts de mise en forme au pire moment possible.",
        screenshotAlt: "CV d'expert exporté dans le modèle standardisé imposé par un appel d'offres européen avec l'ordre de sections requis",
      },
      {
        title: "Des CV anonymes en un clic, pas en une soirée",
        body: "L'anonymisation retire noms, photos et éléments identifiants en une seule étape tout en préservant les qualifications et les preuves de projets. Le jeu anonyme pour l'évaluation et le jeu nominatif pour la contractualisation viennent des mêmes profils, donc ils ne peuvent pas se contredire.",
        screenshotAlt: "Vue côte à côte d'un CV nominatif et de sa version anonymisée pour l'évaluation à l'aveugle",
      },
      {
        title: "Chaque langue d'appel d'offres depuis un profil maître",
        body: "Générez la version DE, FR ou NL de n'importe quel CV avec la mise en page intacte. Les soumissions bilingues cessent de doubler le travail de préparation, et les versions linguistiques restent synchronisées parce qu'elles partagent une seule source.",
        screenshotAlt: "Un CV d'expert rendu en versions allemande, française et néerlandaise dans le même format standardisé",
      },
      {
        title: "Un traitement des données qui résiste à l'examen de l'acheteur",
        body: "Résidence des données dans l'UE, traitement RGPD dès la conception, journaux d'audit et accès par rôles - des réponses que vous pouvez citer quand le questionnaire de l'acheteur demande comment les données des experts sont traitées. Enterprise ajoute le SSO et un DPA.",
        screenshotAlt: "Paramètres de confiance montrant la résidence des données UE, le journal d'audit et les contrôles d'accès d'un espace secteur public",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV peut-il produire des CV dans les formats standardisés qu'imposent les appels d'offres européens ?",
        answer:
          "Oui - les structures imposées se configurent comme modèles et chaque CV s'y exporte directement, en Word ou PDF. Les cabinets qui soumissionnent sur plusieurs accords-cadres gardent un modèle par acheteur : le bon format est une sélection, pas une reconstruction.",
      },
      {
        question: "Qu'est-ce que l'anonymisation retire exactement ?",
        answer:
          "Les noms, photos, coordonnées et références identifiantes, tandis que les qualifications, l'expérience et les preuves de projets restent intactes. Vous relisez le CV anonyme avant soumission, et le profil maître nominatif n'est jamais modifié.",
      },
      {
        question: "La traduction tient-elle pour des soumissions formelles d'appels d'offres ?",
        answer:
          "Les traductions gardent la mise en page imposée intacte et se génèrent depuis les données structurées du profil, ce qui évite la dérive que produisent des versions linguistiques maintenues en fichiers Word séparés. Pour les soumissions à fort enjeu, la plupart des équipes font faire une lecture finale par un locuteur natif - l'important est qu'il relit, il ne retape pas.",
      },
      {
        question: "Où les données personnelles de nos experts sont-elles stockées ?",
        answer:
          "Dans l'UE, avec un traitement RGPD dès la conception, des journaux d'audit et un accès par rôles. Enterprise inclut le SSO et un DPA. Le Trust Center porte la vue actuelle et factuelle - y compris le statut SOC 2, qui est en cours.",
      },
      {
        question: "Nous représentons les mêmes experts à chaque marché subséquent d'accord-cadre. Est-ce que cela devient plus simple ?",
        answer:
          "Nettement. Les profils maîtres restent à jour entre les marchés subséquents : répondre à une mise en concurrence revient à sélectionner les experts, appliquer le modèle de l'accord-cadre et relire - au lieu de ressusciter les fichiers Word du trimestre dernier et de revérifier chaque date.",
      },
      {
        question: "Peut-on gérer les CV d'experts de groupement ou de sous-traitants ?",
        answer:
          "Oui - chargez leurs CV dans n'importe quel format et ils deviennent des profils structurés à côté des vôtres, exportés dans le même modèle conforme. Les contrôles d'accès permettent de cloisonner les profils externes en dehors du dossier si nécessaire.",
      },
      {
        question: "Que se passe-t-il si nous dépassons les limites de l'offre en plein appel d'offres ?",
        answer:
          "Free couvre 10 profils et 30 CV ; Pro (50 $/mois) couvre 200 profils et 600 CV, ce qui absorbe une saison d'appels d'offres chargée pour la plupart des cabinets. Enterprise supprime les limites et ajoute le SSO et un DPA - le bon choix pour les cabinets où le volume de commande publique ou la politique IT l'exige.",
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
      "Le CV Word d'un candidat arrive à 16 h. Le client veut des dossiers de présentation à son format - à votre marque, anonymes, en deux pages - pour demain matin, et c'est le troisième client cette semaine avec un modèle différent. Alors le recruteur passe la soirée à reformater au lieu de sourcer, et le dossier part quand même avec le nom du candidat dans un en-tête que quelqu'un a oublié de vérifier. En placement spécialisé, le dossier de présentation est le produit que le client voit réellement ; quand il a l'air bâclé, l'agence a l'air interchangeable.\n\nMagicCV transforme le CV entrant en profil de candidat structuré en un seul import - Word, PDF ou LinkedIn. Ensuite, le dossier au format du client et à la marque de l'agence est un export : choisissez le modèle du client, appliquez l'anonymisation en un clic si le processus est à l'aveugle, traduisez si le poste se trouve sur un autre marché. La base de candidats en dessous reste consultable par compétences, secteur et langue : le brief suivant part des candidats que vous avez déjà, pas d'une nouvelle fouille de LinkedIn.",
    h1: "Des dossiers de candidats prêts pour le client le jour même, au format de chaque client.",
    sub: "Importez n'importe quel CV de candidat, exportez un dossier de présentation à votre marque et prêt pour l'aveugle, dans le format exact qu'exige chaque client - et gardez une base de candidats consultable en dessous.",
    keyPoints: [
      {
        title: "Du CV brut au dossier client en quelques minutes",
        body: "Importez le CV du candidat tel qu'il arrive et exportez-le dans le format de dossier exigé par le client, sous la marque de votre agence. La session de remise en forme du soir devient une passe de relecture, et les modèles par client font que le format du troisième client est un choix dans une liste, pas une reconstruction.",
        screenshotAlt: "CV brut de candidat à côté du même candidat exporté en dossier client de deux pages à la marque de l'agence",
      },
      {
        title: "Des dossiers anonymes sans le rituel du chercher-remplacer",
        body: "Un clic retire noms, photos et coordonnées tout en gardant les preuves d'expérience dont le client a besoin pour présélectionner. Fini de nettoyer à la main en-têtes et propriétés de fichier en espérant que rien n'a filtré.",
        screenshotAlt: "Dossier de candidat anonymisé avec éléments identifiants retirés et résumé de compétences intact",
      },
      {
        title: "Une base de candidats que vous pouvez réellement interroger",
        body: "Chaque CV importé devient un profil structuré, consultable par compétences, secteur, langues et certifications. Quand un client brief un poste, la première passe est une recherche parmi les candidats que vous connaissez déjà - souvent plus rapide que de sourcer de zéro.",
        screenshotAlt: "Base de candidats filtrée sur les consultants SAP germanophones, montrant 9 profils avec étiquettes de compétences et de langues",
      },
      {
        title: "Des placements transfrontaliers dans la langue du client",
        body: "Traduisez le CV d'un candidat dans la langue du client avec la mise en page du dossier intacte. Placer un développeur basé à Varsovie chez un client allemand cesse d'exiger une étape de traduction externe sur une horloge de 24 heures.",
        screenshotAlt: "Dossier de candidat affiché en versions anglaise et allemande dans le même format à la marque de l'agence",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV convient-il au recrutement de masse à haut volume ?",
        answer:
          "Non, et nous préférons le dire d'emblée. MagicCV est conçu pour le placement spécialisé et professionnel, où chaque dossier est adapté et où la qualité du CV influence les honoraires. Si vous traitez des centaines de CV quasi identiques par semaine, un outil de volume vous servira mieux.",
      },
      {
        question: "MagicCV remplace-t-il notre ATS ?",
        answer:
          "Non - votre ATS reste propriétaire du pipeline, des étapes et des fiches clients. MagicCV possède la couche documentaire où l'ATS est faible : transformer des CV bruts en dossiers soignés, au format du client et prêts pour l'aveugle. Les CV circulent entre les deux en fichiers Word ou PDF.",
      },
      {
        question: "Peut-on configurer un modèle de dossier différent par client ?",
        answer:
          "Oui. Le format exigé par chaque client - image de marque, structure, nombre de pages - vit comme son propre modèle, et exporter dedans est une sélection. Les agences qui servent des comptes MSP ou grands comptes avec des spécifications strictes gardent généralement un modèle par compte.",
      },
      {
        question: "Quelle est la fiabilité de l'anonymisation pour les dossiers à l'aveugle ?",
        answer:
          "Elle est systématique plutôt que manuelle : les noms, photos et coordonnées sont retirés des données structurées du profil, pas masqués dans un document - il n'y a donc ni en-tête ni propriété de fichier où un nom pourrait se cacher. Vous relisez quand même avant l'envoi - c'est votre relation client.",
      },
      {
        question: "Comment traitons-nous les données de candidats au regard du RGPD ?",
        answer:
          "MagicCV est RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit et accès par rôles - pertinent quand vous détenez des milliers de profils de candidats que vous n'employez pas. Les profils peuvent être supprimés proprement quand le consentement expire, et Enterprise ajoute un DPA.",
      },
      {
        question: "Peut-on importer des candidats depuis LinkedIn ?",
        answer:
          "Oui - les exports de profils LinkedIn s'importent comme les CV Word et PDF, en s'analysant en profils structurés. Cela met fin à l'étape de copier-coller entre un profil sourcé et un dossier présentable.",
      },
      {
        question: "Notre base de candidats grandit vite. Quelles sont les limites ?",
        answer:
          "Free couvre 10 profils et 30 CV - de quoi tester le flux de dossiers sur des postes réels. Pro (50 $/mois) couvre 200 profils et 600 CV, ce qui convient à un desk spécialisé concentré sur les candidats actifs. Les agences qui détiennent des viviers plus grands passent à Enterprise pour des profils illimités, le SSO et un DPA.",
      },
    ],
    note: "MagicCV est conçu pour le placement spécialisé et professionnel - des postes qui se gagnent sur la qualité du dossier de présentation - pas pour le staffing de masse à haut volume.",
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
