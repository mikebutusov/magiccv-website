import type { FeaturePage } from "../../types";

export const features: FeaturePage[] = [
  {
    _type: "featurePage",
    slug: "rfp-to-cv",
    name: "Raisonnement RFP-vers-CV",
    h1: "L'appel d'offres arrive vendredi après-midi. Vos CV sont remodelés autour de lui lundi matin.",
    sub: "MagicCV lit le cahier des charges, en extrait les conditions de succès et retravaille le CV de chaque consultant en conséquence - conçu pour les équipes de réponse qui adaptent plus de 10 CV par soumission.",
    whatItDoesBody:
      "Tous les bid managers connaissent la routine. Le RFP arrive avec une annexe de 40 pages, les critères d'évaluation sont enfouis dans la section 7, et quelqu'un doit remodeler une douzaine de CV de consultants autour d'exigences pour lesquelles ces CV n'ont jamais été écrits. Alors vous ouvrez final_v3_JS_edit.docx, vous déplacez des puces à la main, et vous espérez ne pas avoir manqué la certification obligatoire mentionnée page 23. Multipliez cela par 12 CV et une échéance le jeudi, et l'adaptation devient la tâche qui dévore la semaine.\n\nMagicCV part du cahier des charges plutôt que du modèle. Chargez le RFP - le document complet, la grille de critères ou un court résumé - et il en extrait les compétences requises, les certifications et les critères d'évaluation. Il réécrit ensuite le CV de chaque consultant sélectionné à partir de son profil structuré, en remontant les projets et l'expérience qui répondent au cahier des charges et en élaguant ce qui n'y répond pas. Chaque affirmation reste traçable jusqu'à un fait du profil source ; rien n'est inventé pour coller au dossier. Vous relisez, ajustez ce que vous voulez via l'édition par chat, et exportez sur votre modèle.",
    benefits: [
      {
        title: "Les exigences extraites avant même que vous ayez fini la page de garde",
        body: "Chargez le RFP et MagicCV en sort les compétences requises, les certifications obligatoires et les critères d'évaluation - la même liste qu'un bid manager expérimenté construit à la main, sans la passe au surligneur dans l'annexe.",
        screenshotAlt: "Panneau d'analyse du cahier des charges listant 9 exigences extraites et 3 critères d'évaluation d'un RFP PDF de 40 pages",
      },
      {
        title: "Douze CV adaptés à partir d'un cahier des charges, pas douze sessions d'édition",
        body: "Sélectionnez les consultants du dossier et MagicCV retravaille chaque CV face aux exigences extraites - réordonnancement des projets, ajustement des accents, suppression des détails hors sujet. Ce qui prenait une soirée par CV devient une passe de relecture par CV.",
        screenshotAlt: "Vue en lot de 12 CV de consultants régénérés face à un même RFP, chacun marqué prêt pour relecture",
      },
      {
        title: "Chaque phrase traçable, rien de fabriqué",
        body: "Les CV générés ne font que remettre en valeur et réordonner l'expérience qui existe déjà dans le profil du consultant. Chaque affirmation renvoie à sa source, si bien que vous pouvez défendre chaque ligne devant un jury d'évaluation.",
        screenshotAlt: "CV généré avec une affirmation surlignée et son entrée source affichée dans le profil du consultant",
      },
      {
        title: "Un humain dans la boucle dès que vous le souhaitez",
        body: "Activez le mode conservateur sans génération et MagicCV signale l'expérience pertinente pour votre relecture au lieu de rédiger le CV directement. Ou générez d'abord et affinez la formulation via le chat avant que quoi que ce soit ne quitte le cabinet.",
        screenshotAlt: "Bouton du mode conservateur avec des suggestions d'expérience signalées en attente d'approbation du relecteur",
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
          "Non. Le raisonnement RFP-vers-CV ne fait que remettre en valeur et réordonner l'expérience réelle issue du profil source du consultant. Chaque affirmation d'un CV généré est traçable jusqu'à ce profil : si un projet n'est pas dans le profil, il n'apparaîtra pas dans le CV.",
      },
      {
        question: "Que dois-je charger - le RFP complet ou un résumé ?",
        answer:
          "Ce que vous avez. Un RFP complet avec ses annexes, une grille de critères d'évaluation ou trois paragraphes collés depuis l'e-mail du client fonctionnent tout autant. MagicCV extrait les exigences du document que vous lui donnez ; plus de détail signifie simplement une correspondance plus fine.",
      },
      {
        question: "Combien de temps faut-il pour adapter le dossier complet d'une équipe sur un appel d'offres ?",
        answer:
          "L'extraction prend quelques minutes, et chaque CV se régénère à la demande depuis le profil du consultant. Pour une soumission typique de 10 à 12 personnes, le travail passe d'une journée d'édition manuelle à une passe de relecture - lire chaque CV et ajuster la formulation via le chat si nécessaire.",
      },
      {
        question: "Quelqu'un peut-il relire le résultat avant l'envoi au client ?",
        answer:
          "Oui, et nous le recommandons. Utilisez l'édition par chat pour ajuster n'importe quelle section, ou activez le mode conservateur sans génération pour que MagicCV présente l'expérience pertinente à valider au lieu de rédiger le CV automatiquement. C'est vous qui décidez du degré d'autonomie de l'IA.",
      },
      {
        question: "Les CV adaptés sortent-ils dans notre modèle ?",
        answer:
          "Oui. L'adaptation change le contenu ; votre modèle de marque contrôle la présentation. Chaque CV généré s'exporte en PDF ou en fichier Word parfaitement homogène dans votre charte maison, ou dans un modèle spécifique au client si l'appel d'offres l'exige.",
      },
      {
        question: "En quoi est-ce différent de coller un CV et un RFP dans ChatGPT ?",
        answer:
          "Un chatbot généraliste n'a aucune mémoire de votre équipe et aucun garde-fou - il inventera volontiers une certification pour coller au cahier des charges. MagicCV travaille à partir de profils structurés, garde chaque affirmation traçable jusqu'à sa source, applique votre modèle à l'export, et le fait pour 12 consultants à la fois plutôt qu'un copier-coller à la fois.",
      },
      {
        question: "Que deviennent les RFP et les données de CV que nous chargeons ?",
        answer:
          "MagicCV est conçu RGPD dès la conception avec résidence des données dans l'UE, et les offres Enterprise incluent un DPA et des journaux d'audit. Vos cahiers des charges et vos profils restent vos données. Le Trust Center détaille le traitement, la conservation et la gestion des données.",
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
    h1: "N'envoyez plus jamais un CV hors charte.",
    sub: "Définissez votre modèle une fois et chaque CV de consultant s'exporte en PDF ou Word parfaitement homogène - fini la remise en forme du jeudi soir avant une soumission.",
    whatItDoesBody:
      "Demandez à n'importe quel responsable de propositions à quoi ressemblait le dossier de CV avant la dernière échéance : trois consultants encore sur le modèle 2019, un associé qui garde une version personnelle avec ses propres polices, et le CV d'un sous-traitant en Calibri alors que la charte graphique dit autre chose. Corriger cela signifie reformater 12 documents à la main la veille de la soumission - et le client repère quand même la page où le logo est 5 mm trop bas.\n\nAvec MagicCV, la présentation est séparée du contenu. Vous définissez le modèle une fois - polices, couleurs, emplacement du logo, mise en page des sections - et chaque CV généré depuis le profil d'un consultant en hérite automatiquement. Les exports sortent en PDF ou Word prêts à soumettre, identiques au pixel près sur tout le dossier. Quand un client ou un marché public impose son propre format, vous changez de modèle pour ce dossier sans toucher aux données de profil sous-jacentes, puis vous revenez à votre charte une fois le dossier clos.",
    benefits: [
      {
        title: "Un modèle, zéro dérive",
        body: "Définissez l'identité visuelle de votre cabinet une fois et chaque CV en hérite à l'export. La version personnelle de l'associé, la mise en page 2019, le CV du sous-traitant dans la mauvaise police - tous remplacés par une source unique de vérité pour la mise en forme.",
        screenshotAlt: "Éditeur de modèle de marque montrant les réglages de police, couleurs et logo appliqués à un aperçu de CV en direct",
      },
      {
        title: "Des formats client et appel d'offres sans rien reconstruire",
        body: "Gardez votre charte maison par défaut et ajoutez à côté des modèles spécifiques à un client ou imposés par un appel d'offres. Reformater un dossier de 12 personnes pour un accord-cadre public devient un changement de modèle, pas une semaine de copier-coller.",
        screenshotAlt: "Sélecteur de modèles montrant la charte maison à côté d'un format imposé par un appel d'offres pour le même consultant",
      },
      {
        title: "PDF et Word prêts à soumettre, depuis la même source",
        body: "Exportez n'importe quel CV ou dossier d'équipe complet en PDF ou DOCX. Les deux proviennent du même système de modèles : le fichier Word qu'un client demande à modifier correspond au PDF que vous avez soumis.",
        screenshotAlt: "Fenêtre d'export avec options PDF et Word pour un dossier de proposition de 8 consultants",
      },
      {
        title: "Changez de marque une fois, mettez à jour chaque CV",
        body: "Le contenu vit dans les profils ; la présentation vit dans le modèle. Changez le logo ou la palette de couleurs après un rebranding et chaque export futur - sur 200 profils - l'applique immédiatement, sans rien à traquer.",
        screenshotAlt: "Nouvelles couleurs de marque se propageant sur une grille d'aperçus de CV de consultants",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Pouvons-nous conserver notre modèle Word existant ?",
        answer:
          "Oui - recréez votre mise en page actuelle dans le système de modèles de MagicCV, polices, couleurs, emplacement du logo et ordre des sections compris. Ensuite, chaque CV s'exporte automatiquement dans ce format au lieu de dépendre de la dernière personne qui a mis en forme le document.",
      },
      {
        question: "Peut-on utiliser un modèle différent pour un client ou un appel d'offres précis ?",
        answer:
          "Oui. Votre charte maison reste le modèle par défaut, et vous ajoutez à côté des modèles spécifiques à un client ou à un appel d'offres. Faire passer tout un dossier de CV sur un format imposé est une sélection de modèle, pas une reprise manuelle - les données de profil sous-jacentes ne changent jamais.",
      },
      {
        question: "Quels formats d'export sont pris en charge ?",
        answer:
          "PDF et Word (DOCX), tous deux générés depuis le même système de modèles. La version Word correspond au PDF : vous pouvez soumettre l'un et remettre l'autre à un client qui tient à faire ses modifications.",
      },
      {
        question: "Les consultants peuvent-ils casser la mise en forme en mettant à jour leur CV ?",
        answer:
          "Non. Les consultants mettent à jour le contenu de leur profil - projets, compétences, certifications - tandis que le modèle contrôle la présentation. Il n'y a pas de document à reformater, donc le dossier reste cohérent quels que soient les contributeurs.",
      },
      {
        question: "Que se passe-t-il quand nous changeons d'identité visuelle ?",
        answer:
          "Mettez le modèle à jour une fois - nouveau logo, couleurs, polices - et chaque CV exporté à partir de ce moment utilise la nouvelle identité. Vous vous épargnez le nettoyage habituel post-rebranding, à traquer pendant des mois les CV à l'ancien modèle dans les dossiers SharePoint.",
      },
      {
        question: "L'export par modèle est-il disponible sur toutes les offres ?",
        answer:
          "Oui. L'export PDF et Word à votre image fonctionne sur Free, Pro et Enterprise. Les offres diffèrent par l'échelle : Free couvre 10 profils et 30 CV au total, Pro couvre 200 profils et 600 CV par mois, et Enterprise est illimité.",
      },
      {
        question: "Les CV traduits ou anonymisés gardent-ils le même modèle ?",
        answer:
          "Oui. La traduction et l'anonymisation ne modifient que la couche de contenu - le fichier exporté conserve vos polices, votre mise en page et votre image de marque. Un CV anonyme pour un appel d'offres ressemble exactement à votre CV standard, moins les éléments identifiants.",
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
    h1: "Des CV anonymes en un clic, pas en une soirée de caviardage manuel.",
    sub: "Anonymisation en un clic pour les marchés publics, les processus de recrutement à l'aveugle et les dossiers concurrentiels - les mêmes règles appliquées à chaque CV, à chaque fois.",
    whatItDoesBody:
      "L'appel d'offres exige des CV de candidats anonymisés. Alors la veille de la soumission, quelqu'un passe 14 documents en revue pour supprimer à la main les noms, photos et références d'employeurs - et manque le nom de famille du consultant dans un pied de page, ou le nom du client enfoui dans une description de projet en page 3. Un seul champ manqué peut invalider une soumission dans une évaluation à l'aveugle, et le caviardage manuel vous donne 14 occasions d'en manquer un.\n\nMagicCV fait de l'anonymisation une propriété de l'export, pas une tâche. Activez-la sur n'importe quel CV ou dossier d'équipe complet et les éléments identifiants sont retirés selon les règles que vous configurez - noms, photos, et tous les autres champs que votre processus considère comme identifiants. Les mêmes règles s'appliquent à chaque consultant, à chaque fois : un dossier de 14 personnes est aussi cohérent qu'un CV seul. En dessous, MagicCV est RGPD dès la conception avec résidence des données dans l'UE ; le Trust Center couvre la vue complète de la conformité.",
    benefits: [
      {
        title: "D'une soirée de caviardage à un simple bouton",
        body: "Activez l'anonymisation à l'export et les noms, photos et autres éléments identifiants disparaissent - pas de passe manuelle chercher-supprimer, pas d'en-tête ou de pied de page qui passe à travers, pas besoin d'une deuxième paire d'yeux juste pour attraper les oublis.",
        screenshotAlt: "Bouton d'anonymisation avec comparaison avant/après du même CV de consultant, nom et photo retirés",
      },
      {
        title: "Vos règles décident de ce qui compte comme identifiant",
        body: "Les processus de recrutement à l'aveugle et les marchés publics ne s'accordent pas sur ce qui doit être masqué - certains veulent supprimer les noms d'employeurs, d'autres seulement les noms et les photos. Configurez quels champs sont retirés pour que chaque soumission réponde à son exigence spécifique.",
        screenshotAlt: "Panneau de règles d'anonymisation avec bascules champ par champ pour le nom, la photo, les noms d'employeurs et les coordonnées",
      },
      {
        title: "Des dossiers d'équipe complets, un traitement identique",
        body: "Anonymisez un dossier de 14 consultants pour un marché public et chaque CV suit les mêmes règles. Dans une évaluation à l'aveugle, la cohérence est l'exigence - un seul CV caviardé différemment peut identifier un candidat par omission.",
        screenshotAlt: "Dossier de CV anonymisés pour une soumission d'appel d'offres à 14 consultants, tous les profils affichant des codes de rôle à la place des noms",
      },
      {
        title: "Le RGPD dès la conception, en dessous",
        body: "L'anonymisation repose sur un traitement des données RGPD dès la conception, avec résidence des données dans l'UE, journaux d'audit et DPA sur Enterprise. Les CV anonymes sont une sortie d'un système conçu pour traiter correctement les données personnelles, pas un correctif sur un système qui ne l'était pas.",
        screenshotAlt: "Vue d'ensemble du Trust Center montrant la résidence des données dans l'UE et les engagements de traitement RGPD",
      },
    ],
    connectsTo: [
      { label: "Multilingue & traduction", href: "/features/multilingual" },
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
    ],
    faqs: [
      {
        question: "Qu'est-ce qui est exactement retiré lorsqu'un CV est anonymisé ?",
        answer:
          "Les noms, les photos et tous les autres champs que vous configurez comme identifiants - coordonnées, noms d'employeurs, noms de clients dans les descriptions de projets. Vous contrôlez le jeu de règles, donc le résultat correspond à ce que votre appel d'offres ou votre processus de recrutement à l'aveugle exige réellement.",
      },
      {
        question: "Un CV anonymisé utilise-t-il toujours notre modèle ?",
        answer:
          "Oui. L'anonymisation retire du contenu ; le modèle contrôle la présentation. Un CV anonyme s'exporte avec les mêmes polices, la même mise en page et la même image de marque que votre CV standard - le dossier ressemble toujours à votre cabinet, simplement sans les éléments identifiants.",
      },
      {
        question: "Peut-on récupérer la version nominative après l'évaluation à l'aveugle ?",
        answer:
          "Oui. L'anonymisation s'applique à l'export et ne modifie jamais le profil sous-jacent. Une fois l'étape d'évaluation passée, exportez le CV du même consultant sans anonymisation et vous avez la version complète - aucun document séparé à maintenir.",
      },
      {
        question: "MagicCV est-il conforme au RGPD ?",
        answer:
          "MagicCV est conçu RGPD dès la conception avec résidence des données dans l'UE, et les offres Enterprise ajoutent un DPA et des journaux d'audit. Les exports anonymisés en sont un volet ; le Trust Center couvre en détail la résidence des données, la conservation et le traitement.",
      },
      {
        question: "MagicCV est-il certifié SOC 2 ?",
        answer:
          "La certification SOC 2 est en cours - nous ne la revendiquerons pas avant qu'elle soit obtenue. Aujourd'hui, MagicCV offre un traitement des données RGPD dès la conception, la résidence des données dans l'UE, le SSO et un DPA sur Enterprise, ainsi que des journaux d'audit. Le Trust Center présente l'état actuel.",
      },
      {
        question: "Cela fonctionne-t-il pour le recrutement à l'aveugle comme pour les appels d'offres ?",
        answer:
          "Oui. La même anonymisation en un clic couvre la présélection en recrutement à l'aveugle - retirez les noms, photos et autres champs porteurs de biais avant que les CV n'atteignent les évaluateurs, puis partagez la version nominative une fois la shortlist arrêtée.",
      },
      {
        question: "Comment savoir que chaque CV d'un dossier a été anonymisé de la même façon ?",
        answer:
          "Parce que les règles sont appliquées par le système, pas par la personne qui a édité chaque document. Chaque CV du dossier passe par le même jeu de règles configuré à l'export : il n'y a aucune variance par document à auditer la veille d'une échéance.",
      },
    ],
    related: [
      { label: "Anonymiser les CV", href: "/use-cases/anonymize-cvs" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
      { label: "Trust Center", href: "/trust" },
    ],
    seo: {
      title: "Anonymisation de CV - CV anonyme en un clic",
      description:
        "CV anonymes pour appels d'offres et évaluations à l'aveugle en un clic - cohérents dans toute l'équipe, RGPD by design.",
      keywords: ["cv anonyme", "anonymisation cv", "cv anonymisé appel d'offres"],
    },
  },
  {
    _type: "featurePage",
    slug: "multilingual",
    name: "Multilingue & traduction",
    h1: "Un profil maître. Toutes les langues dans lesquelles vos clients lancent leurs appels d'offres.",
    sub: "Traduisez les CV de consultants dans n'importe quelle langue, mise en page et image de marque intactes - conçu pour les dossiers transfrontaliers et les jurys d'évaluation multilingues.",
    whatItDoesBody:
      "Un accord-cadre allemand exige des CV auf Deutsch pour jeudi. Vos versions maîtres sont en anglais, la dernière traduction en agence a pris trois jours et est revenue en texte brut qui a cassé le modèle, et les versions allemandes que quelqu'un a faites l'an dernier se sont discrètement périmées - les deux projets les plus récents du consultant n'y figurent pas. Vous voilà à réconcilier deux documents par personne sous pression d'échéance, dans une langue que la moitié de l'équipe de réponse ne lit pas.\n\nMagicCV conserve un profil maître par consultant et génère la langue à l'export. Choisissez la langue qu'exige le dossier et le CV sort traduit avec la mise en page, les polices et l'image de marque intactes - le même modèle, la même structure, en français, en allemand, en néerlandais ou dans la langue du jury d'évaluation. Il n'y a pas de documents parallèles à synchroniser : mettez le profil à jour une fois et chaque version linguistique le reflète. La formulation peut être ajustée via l'édition par chat avant toute soumission.",
    benefits: [
      {
        title: "Pas de versions parallèles à synchroniser",
        body: "Le profil maître est la source de vérité unique. Ajoutez un projet une fois et les CV anglais, allemand et français le contiennent tous au prochain export - la dérive silencieuse entre versions linguistiques ne peut tout simplement pas se produire.",
        screenshotAlt: "Un profil de consultant avec boutons d'export pour les versions anglaise, allemande et française du CV",
      },
      {
        title: "La mise en page et l'image de marque survivent à la traduction",
        body: "La traduction se fait dans le modèle, pas dans un fichier texte que quelqu'un remet en page ensuite. L'allemand est environ 20 % plus long que l'anglais, et la mise en page l'absorbe - vos polices, votre logo et la structure des sections restent intacts.",
        screenshotAlt: "Exports anglais et allemand côte à côte du CV du même consultant, mise en page identique dans les deux",
      },
      {
        title: "Trois jours de délai d'agence deviennent un réglage d'export",
        body: "Quand l'appel d'offres exige une langue que vous n'aviez pas prévue, vous la choisissez à l'export au lieu de briefer une agence de traduction et d'attendre. L'échéance de jeudi cesse de dépendre de la file d'attente de quelqu'un d'autre.",
        screenshotAlt: "Sélecteur de langue à l'export d'un CV avec un PDF traduit en cours de génération pour un appel d'offres transfrontalier",
      },
      {
        title: "Conçu pour les marchés publics transfrontaliers",
        body: "Les jurys d'évaluation multilingues et les accords-cadres transfrontaliers sont le cas normal pour les cabinets de conseil et de services IT qui soumissionnent en Europe. Combinez traduction, anonymisation et votre modèle pour un dossier prêt à soumettre dans la langue du jury.",
        screenshotAlt: "Dossier de CV multilingue pour un appel d'offres transfrontalier, six consultants exportés en deux langues",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Anonymisation & RGPD", href: "/features/anonymization" },
    ],
    faqs: [
      {
        question: "Dans quelles langues MagicCV peut-il traduire les CV ?",
        answer:
          "Toute langue qu'un dossier exige - les grandes langues d'affaires européennes comme l'anglais, l'allemand, le français, le néerlandais, l'espagnol et le suédois sont les plus courantes chez nos clients, mais la traduction n'est pas limitée à une liste fixe. La mise en page et l'image de marque sont préservées quelle que soit la langue.",
      },
      {
        question: "Devons-nous maintenir un profil distinct par langue ?",
        answer:
          "Non. Chaque consultant a un seul profil maître, et les versions linguistiques sont générées à l'export. Mettez le profil à jour une fois - un nouveau projet, une nouvelle certification - et chaque version linguistique l'inclut au prochain export.",
      },
      {
        question: "La traduction va-t-elle casser la mise en page de nos CV ?",
        answer:
          "Non. La traduction se fait dans votre modèle de marque : polices, emplacement du logo et structure des sections sont conservés. Les langues plus longues que l'anglais, comme l'allemand ou le français, sont absorbées par la mise en page au lieu de déclencher un travail de remise en forme.",
      },
      {
        question: "Un locuteur natif peut-il relire la traduction avant la soumission ?",
        answer:
          "Oui, et pour les soumissions à fort enjeu nous le recommandons. N'importe quelle section peut être ajustée via l'édition par chat avant l'export : un collègue natif corrige un terme en quelques minutes au lieu de retraduire le document.",
      },
      {
        question: "Comment est gérée la terminologie technique et métier ?",
        answer:
          "L'IA traduit en contexte, ce qui gère bien la plupart de la terminologie du conseil, de l'ingénierie et de l'IT. Pour les termes de niche ou le vocabulaire préféré d'un client, relisez l'export et corrigez via le chat - la correction prend quelques minutes, pas un nouvel aller-retour avec une agence.",
      },
      {
        question: "Le profil maître doit-il être en anglais ?",
        answer:
          "Non. Importez les CV dans la langue dans laquelle ils ont été rédigés - MagicCV les analyse en profils structurés dans tous les cas, et vous exportez dans la langue qu'exige chaque dossier.",
      },
      {
        question: "La traduction est-elle incluse dans le prix, ou facturée à part ?",
        answer:
          "Elle est incluse. Les exports traduits comptent dans le quota de CV de votre offre comme tout autre export - 30 CV au total sur Free, 600 par mois sur Pro, illimité sur Enterprise. Il n'y a aucun coût au mot ni par langue.",
      },
      {
        question: "Peut-on traduire et anonymiser le même CV ?",
        answer:
          "Oui. La traduction, l'anonymisation et votre modèle de marque s'appliquent tous à l'export : un clic produit un CV anonyme en allemand dans votre charte maison pour un appel d'offres transfrontalier qui exige les deux.",
      },
    ],
    related: [
      { label: "Traduire les CV dans n'importe quelle langue", href: "/use-cases/translate-cvs" },
      { label: "Cabinets orientés secteur public & appels d'offres", href: "/solutions/public-sector" },
    ],
    seo: {
      title: "CV multilingues - traduire les CV sans retaper ni reformater",
      description:
        "Générez des CV professionnels et à votre image en EN, DE, FR, NL, ES et plus encore, à partir d'un seul profil maître.",
      keywords: ["outil de CV multilingue", "CV en plusieurs langues"],
    },
  },
  {
    _type: "featurePage",
    slug: "profiles-skills",
    name: "Profils centralisés & intelligence des compétences",
    h1: "Des CV éparpillés dans SharePoint à une cvthèque consultable.",
    sub: "Une cvthèque consultable et une matrice de compétences pour tout votre vivier : importez les CV que vous avez déjà, gardez un profil structuré par personne et générez n'importe quel livrable à partir de lui.",
    whatItDoesBody:
      "Aujourd'hui, la réponse à \"qui a fait de la pharma et parle français ?\" vit dans un dossier SharePoint rempli de fichiers nommés final_v3_JS_edit.docx, une grille de staffing dans Excel qui était exacte en mars, et la mémoire de la personne qui a staffé le dernier projet similaire. Trouver la réponse signifie ouvrir les documents un par un ou écrire à toute la practice - et quand l'échéance est à 48 heures, vous présélectionnez à partir des CV que vous trouvez, pas des consultants que vous avez réellement.\n\nMagicCV remplace le dossier par une base structurée : un profil par personne, analysé automatiquement depuis les CV Word, PDF ou LinkedIn que vous avez déjà. Les compétences, secteurs, langues et certifications deviennent des champs consultables au lieu de prose enfermée dans des documents. Interrogez tout le vivier comme une matrice de compétences, ouvrez un profil et générez ce dont le dossier a besoin - adapté, traduit, anonymisé, sur votre modèle. L'enrichissement HRIS (Personio, BambooHR, HiBob) est sur la feuille de route pour réduire encore la maintenance manuelle.",
    benefits: [
      {
        title: "Des données structurées au lieu de 200 fichiers Word",
        body: "L'expérience, les compétences, les certifications et les langues de chaque consultant existent sous forme de champs structurés, pas de prose enfermée dans un document. Le même profil alimente la recherche, l'adaptation, la traduction et l'export - mettez-le à jour une fois et chaque livrable le reflète.",
        screenshotAlt: "Profil de consultant structuré avec sections distinctes pour projets, compétences, certifications et langues",
      },
      {
        title: "Importez les CV que vous avez déjà",
        body: "Chargez des fichiers Word et PDF directement depuis SharePoint, ou importez depuis LinkedIn - MagicCV analyse chacun en un profil structuré automatiquement. Migrer un vivier de 50 personnes est une session d'import, pas un projet de ressaisie.",
        screenshotAlt: "Écran d'import en masse analysant un lot de CV Word et PDF en profils structurés",
      },
      {
        title: "Répondez à \"qui connaît Kubernetes ?\" en quelques secondes",
        body: "Recherchez dans tout le vivier par compétence, certification, secteur ou langue et obtenez une shortlist instantanément. Staffer un dossier cesse de dépendre de la grille Excel de mars ou d'un e-mail à toute la practice en attendant lundi.",
        screenshotAlt: "Recherche dans la matrice de compétences filtrée sur les consultants certifiés AWS parlant allemand, affichant 6 correspondances",
      },
      {
        title: "Des profils qui restent à jour sans la relance du vendredi",
        body: "Les consultants mettent à jour leur propre profil à un seul endroit, et l'édition assistée par IA en fait une tâche de cinq minutes au lieu d'une session de mise en forme de document. La version que vous sortez pour un dossier est la version actuelle - pas la copie touchée pour la dernière fois en 2023.",
        screenshotAlt: "Vue de mise à jour de profil avec le chat IA ajoutant un projet récemment terminé au dossier d'un consultant",
      },
    ],
    connectsTo: [
      { label: "Raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Exports fidèles à votre marque", href: "/features/brand-templates" },
    ],
    faqs: [
      {
        question: "Que deviennent les CV que nous avons déjà dans SharePoint ?",
        answer:
          "Vous les importez. MagicCV analyse les fichiers Word et PDF - et les profils LinkedIn - en profils structurés automatiquement, un par personne. Un vivier de 50 personnes migre généralement en une session d'import plutôt qu'en un projet de ressaisie manuelle, et l'ancien dossier peut être archivé.",
      },
      {
        question: "Comment garder 200 CV de consultants à jour sans relancer tout le monde ?",
        answer:
          "De deux façons. Les consultants mettent à jour leur propre profil à un seul endroit, avec une édition assistée par IA qui en fait une tâche de cinq minutes. Et parce que les livrables sont générés depuis le profil, il n'y a pas de copies de documents qui dérivent - la version de la base est la seule version.",
      },
      {
        question: "Peut-on rechercher parmi tous les consultants par compétence ?",
        answer:
          "Oui - c'est tout l'intérêt d'une cvthèque par rapport à un dossier de fichiers. Chaque profil est constitué de données structurées : vous filtrez tout le vivier par compétence, certification, secteur ou langue et obtenez une shortlist de staffing en quelques secondes au lieu d'ouvrir les fichiers un par un.",
      },
      {
        question: "En quoi est-ce différent de notre ATS ou de notre HRIS ?",
        answer:
          "Un ATS suit les candidats dans le recrutement ; un HRIS gère les dossiers d'emploi. Aucun des deux ne produit un CV prêt à présenter au client. MagicCV est un logiciel de gestion des CV pour les personnes que vous employez déjà : il garde leurs profils structurés et consultables, puis génère des CV adaptés et à votre image pour les dossiers. L'enrichissement HRIS (Personio, BambooHR, HiBob) est sur la feuille de route pour que les données arrivent au lieu d'être ressaisies.",
      },
      {
        question: "Combien de profils chaque offre permet-elle de stocker ?",
        answer:
          "Free couvre 10 profils et 30 CV au total - de quoi tester avec une équipe. Pro (50 $/mois) couvre 200 profils et 600 CV par mois. Enterprise est illimité, avec SSO et DPA inclus. Vous pouvez commencer sur Free et monter en gamme quand le vivier dépasse la limite.",
      },
      {
        question: "Qui peut voir et modifier les profils ?",
        answer:
          "Les profils sont gérés de façon centralisée : les équipes de réponse et de staffing travaillent depuis la même base pendant que les consultants tiennent leur propre dossier à jour. Enterprise ajoute le SSO pour le contrôle d'accès et des journaux d'audit pour tracer qui a modifié quoi.",
      },
      {
        question: "Une cvthèque centralisée est-elle conforme au RGPD ?",
        answer:
          "La centralisation aide, en réalité : les données personnelles résident dans un système gouverné unique au lieu d'être éparpillées dans des boîtes mail et des disques partagés où personne ne peut répondre à une demande de suppression. MagicCV est RGPD dès la conception avec résidence des données dans l'UE, et le Trust Center détaille la conservation et le traitement.",
      },
      {
        question: "Quels livrables peut-on générer depuis un profil ?",
        answer:
          "Tout CV qu'exige le dossier : adapté à un RFP, traduit dans la langue de l'appel d'offres, anonymisé pour une évaluation à l'aveugle, toujours exporté sur votre modèle de marque en PDF ou Word. Un seul profil est la source de tout - aucune copie de document par livrable.",
      },
    ],
    related: [
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Pour les équipes RH / People Ops", href: "/solutions/hr" },
      { label: "Pour les équipes Recrutement", href: "/solutions/recruitment" },
    ],
    seo: {
      title: "Cvthèque & logiciel de matrice de compétences",
      description:
        "Une cvthèque consultable et une matrice de compétences en un seul outil : importez les CV, cherchez par compétence dans toute l'équipe et générez des CV à votre image à la demande.",
      keywords: ["cvthèque", "logiciel cvthèque", "matrice de compétences", "logiciel matrice de compétences", "base de données cv"],
    },
  },
];
