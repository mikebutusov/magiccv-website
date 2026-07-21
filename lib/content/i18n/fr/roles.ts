import type { RolePage } from "../../types";

export const roles: RolePage[] = [
  {
    _type: "rolePage",
    slug: "sales",
    reader: "Responsables commerciaux et business development de cabinets de conseil et de services IT, garants du taux de succès - et qui héritent de la préparation des CV chaque fois qu'une échéance approche.",
    h1: "Sortez la course aux CV de la gestion des appels d'offres.",
    sub: "MagicCV prend en charge le volet CV de la gestion des appels d'offres pour les équipes commerciales du conseil : des dossiers de consultants alignés sur le RFP, adaptés à ce que notent les évaluateurs et exportés sur votre modèle avant que l'échéance ne devienne tendue.",
    pain: {
      quote: "L'appel d'offres ferme à 9 h. Il est 23 h et je reformate le douzième CV parce que l'associé vient de m'envoyer final_v3_JS_edit.docx.",
      answer: "Chargez le RFP ou le cahier des charges et MagicCV en lit les exigences, fait ressortir les consultants les plus adaptés de votre vivier, remodèle chaque CV autour de ce que les critères d'évaluation récompensent réellement, et exporte tout le dossier sur votre modèle de marque en PDF ou Word. La reconstruction de la veille devient une relecture de 15 minutes.",
      proofPoints: [
        "L'IA lit le RFP - y compris l'annexe de 40 pages - et adapte chaque CV à ses exigences déclarées",
        "Recherche par compétences dans tout le vivier : compétences, secteurs, langues, certifications",
        "Exports PDF et Word parfaitement homogènes sur votre modèle de marque, pour que chaque soumission ressemble à un seul cabinet",
        "Un profil à jour par personne - fini de partir de la version qu'un associé a gardée",
      ],
    },
    featureRows: [
      {
        title: "Trouvez les bons consultants pendant que les concurrents lisent encore le RFP",
        body: "Recherchez dans le vivier par compétences, secteurs, langues et certifications au lieu d'écrire aux responsables de practice et d'attendre. Ce qui prenait deux jours de \"qui avons-nous pour ça ?\" devient une liste filtrée dont vous tirez une shortlist en une seule séance.",
        screenshotAlt: "Recherche par compétences filtrée sur les consultants certifiés AWS, avec expérience secteur public et français, affichant 6 correspondances",
      },
      {
        title: "Chaque CV remodelé autour de ce que notent les évaluateurs",
        body: "MagicCV lit le cahier des charges et réordonne le profil de chaque consultant pour que les projets et compétences pertinents arrivent en tête. La migration secteur énergie passe en page une pour le dossier utilities ; le paragraphe de résumé générique cesse de vous coûter des points d'évaluation.",
        screenshotAlt: "Vue côte à côte d'un CV de consultant avant et après adaptation aux critères d'évaluation d'un RFP",
      },
      {
        title: "Un dossier prêt à soumettre en quelques minutes, pas une soirée perdue",
        body: "Sélectionnez la shortlist, choisissez le modèle, exportez. Douze CV adaptés sortent en un dossier PDF ou Word cohérent, formaté à l'identique. La préparation des CV cesse d'être le poste du plan de réponse que tout le monde gonfle discrètement de deux jours.",
        screenshotAlt: "Fenêtre d'export générant un dossier de 12 CV sur un modèle de marque de cabinet avec indicateur de progression",
      },
      {
        title: "Un profil par personne, pour que les versions parallèles s'éteignent",
        body: "Les consultants et les associés mettent à jour le profil central - via l'édition par chat, pas via le suivi de modifications d'un fichier Word. Chaque export est généré depuis ce profil, donc la version qu'un associé garde sur son bureau cesse de refaire surface dans les soumissions.",
        screenshotAlt: "Profil de consultant montrant la date de dernière mise à jour et une modification par chat ajoutant une mission récente",
      },
    ],
    stats: [
      { value: "1 jour → 15 min", label: "du RFP reçu au dossier de CV prêt à soumettre", isPlaceholder: true },
      { value: "+18%", label: "de taux de succès sur les dossiers avec CV adaptés", isPlaceholder: true },
    ],
    includeRoiTeaser: true,
    faqs: [
      {
        question: "Comment empêcher les associés de garder leurs propres versions de CV ?",
        answer: "En faisant du profil central la seule source des exports. Dans MagicCV, chaque personne a un profil structuré unique ; les associés le mettent à jour via l'édition par chat au lieu de maintenir un fichier Word privé. Quand le dossier est toujours généré à neuf depuis le profil, le final_v3.docx privé n'a plus rien où se coller.",
      },
      {
        question: "MagicCV peut-il vraiment lire un RFP complet, ou dois-je coller les exigences à la main ?",
        answer: "Chargez le RFP ou le cahier des charges lui-même. L'IA le lit, extrait ce que l'évaluation demande, et remodèle chaque CV sélectionné autour de ces exigences. Vous relisez le résultat au lieu de faire l'interprétation vous-même - et vous pouvez toujours tout ajuster avant l'export.",
      },
      {
        question: "Est-ce une plateforme complète de gestion des appels d'offres ou seulement le volet CV ?",
        answer: "Seulement le volet CV - délibérément. MagicCV ne gère ni votre pipeline de dossiers, ni le chiffrage, ni l'assemblage documentaire ; il supprime le goulot d'étranglement des CV à l'intérieur de votre processus de réponse existant. La plupart des équipes l'utilisent à côté de ce qu'elles ont déjà pour le reste de la proposition.",
      },
      {
        question: "Nous avons un modèle Word maison validé par l'équipe marque. Pouvons-nous le garder ?",
        answer: "Oui. Votre modèle devient un modèle de marque dans MagicCV, et chaque export s'y rend de façon parfaitement homogène en PDF ou Word. Vous pouvez conserver plusieurs modèles - charte maison plus formats spécifiques à un client ou à un accord-cadre - et changer à chaque export.",
      },
      {
        question: "Nos CV de consultants vivent dans des dossiers SharePoint. Comment démarrer ?",
        answer: "Importez-les tels quels. MagicCV accepte les exports Word, PDF et LinkedIn et analyse chacun en un profil structuré, un par personne. Il n'y a pas de projet de ressaisie ; le dossier en désordre est la matière première, pas un obstacle.",
      },
      {
        question: "Certains accords-cadres exigent une évaluation à l'aveugle. Peut-on soumettre des CV anonymisés ?",
        answer: "Oui - l'anonymisation tient en un clic. MagicCV retire les noms, photos et éléments identifiants et exporte un CV anonyme sur le même modèle : les soumissions concurrentielles ou sous accord-cadre qui l'exigent ne nécessitent plus de passe manuelle séparée.",
      },
      {
        question: "À quelle vitesse peut-on réellement boucler un dossier avant une échéance ?",
        answer: "Une fois les profils en place, un dossier adapté représente quelques minutes de traitement machine plus votre relecture. La vraie contrainte est la qualité des profils : si le profil d'un consultant est à jour, son CV adapté l'est aussi. L'IA rend les profils faciles à mettre à jour, mais elle ne peut pas inventer une mission que personne n'a enregistrée.",
      },
      {
        question: "Combien cela coûte-t-il pour une équipe de réponse ?",
        answer: "Free couvre 10 profils et 30 exports de CV - de quoi faire passer un vrai dossier. Pro coûte 50 $/mois pour 200 profils et 600 CV, ce qui convient à la plupart des cabinets de taille moyenne. Enterprise ajoute une échelle illimitée, le SSO et un DPA, sur tarification personnalisée.",
      },
    ],
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
    reader: "Responsables recrutement et resourcing de cabinets de conseil et d'agences de staffing qui gardent les profils de consultants à jour et répondent à chaque \"qui avons-nous pour ça ?\" - généralement sur une échéance fixée par quelqu'un d'autre.",
    h1: "Une cvthèque qui reste à jour sans la relance du vendredi.",
    sub: "MagicCV transforme les CV éparpillés dans les boîtes mail et les disques en une cvthèque consultable - des profils structurés que vous pouvez chercher par compétence, adapter à un cahier des charges et exporter dans tout format, sans relancer personne.",
    pain: {
      quote: "J'ai envoyé le rappel de mise à jour des CV il y a trois semaines. Deux consultants ont répondu. L'un d'eux a envoyé un PDF de 2023.",
      answer: "MagicCV donne à chaque personne un profil structuré unique et confie à l'IA la partie fastidieuse : elle analyse ce qu'un consultant envoie - Word, PDF, export LinkedIn - et met le profil à jour à partir de là. Vous interrogez la base et exportez le format que la demande exige, au lieu de courir après des fichiers et de les reformater à la main.",
      proofPoints: [
        "Import de tout format de CV - Word, PDF, LinkedIn - en un profil structuré par personne",
        "L'IA analyse les mises à jour à partir de ce que les consultants envoient, sans ressaisie manuelle",
        "Recherche dans tout le vivier par compétences, secteurs, langues et certifications",
        "Anonymisation en un clic pour les soumissions clients à l'aveugle",
      ],
    },
    featureRows: [
      {
        title: "Un profil par personne, quoi qu'ils vous envoient",
        body: "Déposez le fichier Word, le PDF ou l'export LinkedIn et MagicCV l'analyse en un profil structuré. Les CV des nouvelles recrues cessent d'attendre dans votre boîte mail un après-midi calme qui n'arrive jamais.",
        screenshotAlt: "Écran d'import analysant un CV Word et un PDF LinkedIn en un seul profil de consultant structuré",
      },
      {
        title: "Répondez à \"qui avons-nous avec SAP et l'allemand ?\" en quelques secondes",
        body: "La matrice de compétences couvre tout votre vivier : compétences, secteurs, langues, certifications. Une demande de staffing devient une recherche et une shortlist, pas un vendredi après-midi de messages Slack aux responsables de practice.",
        screenshotAlt: "Cvthèque filtrée sur 8 consultants correspondant à SAP, allemand et expérience du secteur industriel",
      },
      {
        title: "Tout livrable qu'exige la demande, depuis le même profil",
        body: "Le client veut son propre format ? L'équipe de réponse veut le modèle maison ? Générez l'un ou l'autre depuis le profil à jour - et traduisez-le dans la langue du client, mise en page intacte. Un profil, tous les formats, zéro copier-coller.",
        screenshotAlt: "Options d'export pour un profil : PDF au modèle maison, format Word du client et traduction en allemand",
      },
      {
        title: "Des CV anonymes pour les soumissions clients en un clic",
        body: "Quand un client ou un accord-cadre exige un recrutement à l'aveugle, anonymisez le CV en un clic - nom, photo et éléments identifiants retirés, mise en page intacte. Fini de nettoyer douze documents à la main la veille de la soumission.",
        screenshotAlt: "CV de consultant anonymisé à côté de l'original, avec nom et photo remplacés par un code candidat",
      },
    ],
    stats: [
      { value: "6 hrs", label: "gagnées par semaine en relances et remises en forme évitées", isPlaceholder: true },
    ],
    faqs: [
      {
        question: "Les CV des candidats peuvent-ils être anonymisés pour la soumission au client ?",
        answer: "Oui, en un clic. MagicCV retire les noms, photos et éléments identifiants et exporte un CV anonyme sur le même modèle : les soumissions qui exigent un recrutement à l'aveugle n'ont plus besoin d'une passe de nettoyage manuelle. Le profil d'origine reste intact.",
      },
      {
        question: "Comment garder 200 CV de consultants à jour sans relancer tout le monde ?",
        answer: "En ramenant le coût de la mise à jour presque à zéro. Les consultants envoient ce qu'ils ont - un fichier Word annoté, un export LinkedIn - et l'IA l'analyse dans leur profil ; les modifications peuvent aussi passer par le chat. Vous cessez d'être la personne qui ressaisit les mises à jour, ce qui explique l'essentiel de pourquoi elles n'arrivaient jamais.",
      },
      {
        question: "Que deviennent les CV que nous avons déjà dans SharePoint et de vieilles boîtes mail ?",
        answer: "C'est votre source d'import. MagicCV analyse les fichiers Word, PDF et LinkedIn en profils structurés, un par personne : la pile existante devient la base de départ plutôt qu'un projet de migration. Commencez par les 20 personnes que vous staffez le plus souvent et élargissez ensuite.",
      },
      {
        question: "En quoi une cvthèque comme celle-ci diffère-t-elle de notre ATS ?",
        answer: "Un ATS suit les candidats dans un pipeline de recrutement et cesse pour l'essentiel de compter après l'offre. MagicCV gère les personnes que vous avez déjà : garder leurs profils à jour, consultables et exportables pour les demandes de staffing et les dossiers. La plupart des équipes utilisent les deux - ils répondent à des questions différentes.",
      },
      {
        question: "Peut-on chercher par certifications et expérience sectorielle, pas seulement par intitulé de poste ?",
        answer: "Oui. Les profils sont des données structurées : la matrice de compétences couvre compétences, secteurs, langues et certifications sur toute l'équipe. \"Certifié Azure, services financiers, néerlandophone\" est un filtre, pas un fil d'e-mails.",
      },
      {
        question: "Nous détenons beaucoup de données personnelles. Comment MagicCV gère-t-il le RGPD ?",
        answer: "RGPD dès la conception : résidence des données dans l'UE, journaux d'audit et contrôle par rôles de qui voit quoi. Les offres Enterprise ajoutent le SSO et un DPA. Quand quelqu'un part, son profil peut être supprimé au lieu de traîner dans des dossiers oubliés - ce que peu de disques partagés peuvent revendiquer.",
      },
      {
        question: "À quoi ressemble la tarification à mesure que la base grandit ?",
        answer: "Free couvre 10 profils et 30 exports de CV, utile pour un pilote. Pro coûte 50 $/mois pour 200 profils et 600 CV. Enterprise est sur tarification personnalisée avec profils illimités, SSO et DPA - le chemin habituel une fois que le resourcing fait passer tout le vivier par l'outil.",
      },
      {
        question: "Les consultants peuvent-ils mettre à jour leurs propres profils ?",
        answer: "Oui - c'est le but. Ils peuvent modifier via le chat ou simplement envoyer un CV à jour que l'IA analyse, et les contrôles d'accès décident qui peut modifier ou seulement consulter. La mise à jour devient une tâche de deux minutes pour le consultant au lieu d'un poste permanent sur votre liste de relances.",
      },
    ],
    related: [
      { label: "Centraliser & standardiser les CV", href: "/use-cases/centralize-cvs" },
      { label: "Profils centralisés & compétences", href: "/features/profiles-skills" },
      { label: "Agences de staffing & de talents spécialisées", href: "/solutions/staffing-agencies" },
    ],
    seo: {
      title: "Logiciel de gestion des candidatures avec cvthèque",
      description:
        "Gestion des candidatures et cvthèque en un outil : chaque CV à jour, consultable et instantanément au bon format pour chaque brief ou appel d'offres.",
      keywords: ["gestion des candidatures", "cvthèque", "base de données cv"],
    },
  },
  {
    _type: "rolePage",
    slug: "hr",
    reader: "Responsables RH et People Ops, garants de la qualité des données collaborateurs - et qui regardent les copies de CV se multiplier sur les disques partagés, les ordinateurs portables et les dossiers de réponse sans aucun moyen de les gouverner.",
    h1: "Un dossier gouverné par consultant. Aucune copie fantôme.",
    sub: "MagicCV remplace la prolifération de CV sur les disques, les boîtes mail et les ordinateurs portables par des profils structurés à accès contrôlé - des données propres que les RH peuvent réellement gouverner, sans ajouter un système que les gens contournent.",
    pain: {
      quote: "Il existe quatre versions du CV d'Anna : une dans SharePoint, une dans le dossier de réponse du mois dernier, une sur son ordinateur, et une qu'un associé a réécrite lui-même. Impossible de dire laquelle est la bonne.",
      answer: "MagicCV fait du profil le dossier unique et de chaque CV un export de celui-ci. Les données existent en champs structurés au lieu de documents Word libres, l'accès par rôles contrôle qui peut voir et modifier quoi, et comme chaque export est généré à neuf depuis le profil, les copies cessent de dériver en versions concurrentes.",
      proofPoints: [
        "Des champs de profil structurés remplacent les documents Word libres",
        "Accès par rôles : qui peut consulter, qui peut modifier, profil par profil",
        "RGPD dès la conception, avec résidence des données dans l'UE et journaux d'audit",
        "Chaque CV généré depuis le profil central, donc les exports ne peuvent pas dériver du dossier",
      ],
    },
    featureRows: [
      {
        title: "Des données que vous pouvez gouverner, pas des documents que vous ne pouvez que collectionner",
        body: "Compétences, projets, certifications et langues existent en champs structurés, pas en prose dans un .docx. Vous voyez ce qui est complet, ce qui est périmé et ce qui manque dans tout le cabinet - des questions auxquelles un dossier de fichiers Word ne peut pas répondre du tout.",
        screenshotAlt: "Vue d'ensemble de complétude des profils montrant les champs structurés et les dates de dernière mise à jour d'une équipe",
      },
      {
        title: "Un accès qui correspond au fonctionnement réel du cabinet",
        body: "Les consultants modifient leur propre profil, le resourcing consulte le vivier, les équipes de réponse exportent - et personne ne télécharge sur un ordinateur portable un tableur avec l'historique de carrière de tout le monde. L'accès par rôles remplace le système de confiance du disque partagé.",
        screenshotAlt: "Paramètres d'accès par rôles montrant les droits de consultation et de modification par équipe",
      },
      {
        title: "La conformité intégrée, pas reconstruite au moment de l'audit",
        body: "RGPD dès la conception, résidence des données dans l'UE, et des journaux d'audit qui montrent qui a consulté et modifié quoi. Quand un consultant part ou exerce ses droits sur ses données, vous agissez sur un seul dossier - pas sur une fouille de cinq disques et des messages envoyés de chacun.",
        screenshotAlt: "Journal d'audit listant les événements d'accès et de modification de profils avec horodatage et noms d'utilisateurs",
      },
      {
        title: "Un système, pas un système parallèle de plus",
        body: "MagicCV ne cherche pas à remplacer votre HRIS - il prend en charge le problème des CV pour lequel le HRIS n'a jamais été conçu. Les intégrations Personio, BambooHR et HiBob sont sur la feuille de route pour synchroniser les profils automatiquement ; aujourd'hui, l'import depuis Word, PDF ou LinkedIn fait entrer les CV existants sans ressaisie.",
        screenshotAlt: "Panneau de paramètres montrant les options d'import de CV et les intégrations HRIS prévues marquées feuille de route",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "MagicCV est-il conforme au RGPD, et où nos données sont-elles stockées ?",
        answer: "MagicCV est conçu RGPD dès la conception avec résidence des données dans l'UE, journaux d'audit et contrôle d'accès par rôles. Les offres Enterprise incluent un DPA. Les données des consultants restent dans un système gouverné unique au lieu de se disperser sur les disques et dans les boîtes mail - là où vit en réalité l'essentiel du risque RGPD lié aux CV.",
      },
      {
        question: "Avez-vous SOC 2 ?",
        answer: "La certification SOC 2 est en cours - nous ne la revendiquerons pas avant qu'elle soit obtenue. Ce qui est en place aujourd'hui : traitement des données RGPD dès la conception, résidence des données dans l'UE, journaux d'audit, plus SSO et DPA sur Enterprise. Demandez-nous l'état actuel lors de votre évaluation.",
      },
      {
        question: "Comment contrôler qui peut voir et modifier les profils de consultants ?",
        answer: "Accès par rôles, défini par groupe : les consultants modifient typiquement leur propre profil, le resourcing et les équipes de réponse ont des droits de consultation et d'export, les RH administrent l'ensemble. Le journal d'audit enregistre qui a consulté et modifié quoi : la gouvernance est vérifiable, pas supposée.",
      },
      {
        question: "Est-ce que cela fait doublon avec notre HRIS ?",
        answer: "Non - cela couvre ce que le HRIS ne couvre pas. Votre HRIS contient contrats, paie et absences ; il n'a aucun modèle structuré de l'expérience projet, des compétences et des CV prêts pour les clients. MagicCV possède cette couche, et les intégrations HRIS (Personio, BambooHR, HiBob) sont sur la feuille de route pour synchroniser automatiquement les champs de base.",
      },
      {
        question: "Que deviennent les données de quelqu'un quand il quitte le cabinet ?",
        answer: "Il y a un seul dossier sur lequel agir. Supprimez ou conservez le profil selon votre politique, le journal d'audit documentant ce qui s'est passé. Comparez cela au statu quo, où le CV d'un partant survit indéfiniment dans des dossiers de réponse et des disques personnels dont personne ne se souvient.",
      },
      {
        question: "Comment migrer les CV hors des disques partagés sans projet de saisie de données ?",
        answer: "Importez les fichiers tels quels - exports Word, PDF, LinkedIn. L'IA analyse chacun en un profil structuré, un par personne, et signale ce qu'elle n'a pas pu remplir pour que les responsables comblent les manques. Le travail devient de la relecture, pas de la ressaisie.",
      },
      {
        question: "Y a-t-il du SSO ?",
        answer: "Oui, sur l'offre Enterprise, avec un DPA et des profils illimités. Free (10 profils) et Pro (50 $/mois, 200 profils) utilisent la connexion standard - suffisant pour un pilote, tandis qu'Enterprise devient le bon choix dès que les exigences IT et conformité entrent en jeu.",
      },
      {
        question: "Les consultants l'utiliseront-ils vraiment, ou est-ce un système de plus qu'ils ignorent ?",
        answer: "Le parcours de mise à jour est volontairement à faible effort : envoyer un CV à jour que l'IA analyse, ou faire des modifications via le chat. Les consultants y gagnent quelque chose - un CV soigné et à votre image à la demande - ce qui est plus d'incitation que ce qu'un système de données RH leur offre d'habitude.",
      },
    ],
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
    reader: "Responsables delivery, mission et practice qui staffent les projets et doivent au client des CV au stade de la proposition et au lancement - en plus de faire tourner les missions.",
    h1: "Lancez chaque mission sans la course aux CV.",
    sub: "MagicCV fournit aux responsables delivery des CV de consultants prêts pour le client - alignés sur les exigences, dans le format et la langue du client - sans détourner des personnes facturables vers de l'administratif documentaire la semaine avant le lancement.",
    pain: {
      quote: "Le lancement est lundi. Le client veut cinq CV dans son modèle achats, en français, et la moitié des CV de l'équipe s'arrêtent à leurs projets de 2023.",
      answer: "MagicCV conserve un profil à jour par consultant et génère à la demande le CV destiné au client : aligné sur les exigences de la mission, rendu dans votre modèle ou celui du client, traduit avec la mise en page intacte, anonymisé si l'appel d'offres l'exige. La paperasse de staffing cesse de concurrencer le temps de delivery.",
      proofPoints: [
        "Recherche dans le vivier par compétences, secteurs, certifications et langues face aux exigences du client",
        "Export dans votre modèle maison ou dans le format exigé par le client, parfaitement homogène",
        "Traduction des CV dans n'importe quelle langue avec la mise en page préservée",
        "Anonymisation en un clic pour les soumissions à l'aveugle ou concurrentielles",
      ],
    },
    featureRows: [
      {
        title: "Staffez sur des preuves, pas de mémoire",
        body: "Recherchez dans tout le vivier ce dont la mission a réellement besoin - la certification que le client exige, l'expérience sectorielle, la langue. La shortlist vient des données, pas de la personne dont le responsable de practice s'est souvenu lors d'un appel du vendredi.",
        screenshotAlt: "Recherche dans le vivier alignée sur les exigences d'une mission, montrant les consultants classés par adéquation de compétences et de certifications",
      },
      {
        title: "Le format du client sans la reprise manuelle",
        body: "Grille achats d'un marché public, modèle fournisseur d'un grand compte ou votre propre charte maison - stockez chacun comme modèle et exportez-y directement le CV de n'importe quel consultant. Les deux heures par CV de copier-coller dans la structure de tableau du client disparaissent.",
        screenshotAlt: "Un profil de consultant exporté dans un modèle de CV achats d'un marché public et en PDF à la marque du cabinet",
      },
      {
        title: "La livraison transfrontalière dans la langue du client",
        body: "Traduisez un CV dans la langue de la mission avec la mise en page et le modèle intacts. Le lancement à Paris reçoit des CV en français, l'accord-cadre de Stockholm des CV en suédois, et personne ne reconstruit de documents à la main dans aucun des deux bureaux.",
        screenshotAlt: "Le même CV de consultant affiché en anglais et en français avec mise en page et image de marque identiques",
      },
      {
        title: "Des profils anonymes quand l'appel d'offres l'exige",
        body: "Les appels d'offres concurrentiels et certains accords-cadres exigent des CV sans noms ni photos. L'anonymisation est un clic sur le même profil et le même modèle : le dossier anonyme est une variante de votre export normal - pas un travail d'édition nocturne séparé.",
        screenshotAlt: "CV anonymisé pour une soumission d'appel d'offres avec nom et photo remplacés par un code de rôle",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Peut-on exporter les CV dans un modèle exigé par le client, comme un format achats de marché public ?",
        answer: "Oui. Ajoutez le format du client comme modèle à côté de votre charte maison, et le CV de n'importe quel consultant s'y exporte de façon parfaitement homogène en PDF ou Word. Les cabinets orientés appels d'offres gardent généralement une petite bibliothèque : marque maison, deux ou trois formats d'accords-cadres et une variante anonyme.",
      },
      {
        question: "La traduction garde-t-elle la mise en page, ou obtient-on un bloc de texte à remettre en forme ?",
        answer: "La mise en page survit. MagicCV traduit le contenu du CV dans n'importe quelle langue tout en gardant le modèle, la structure et l'image de marque intacts - la version française d'un CV ressemble exactement à la version anglaise, simplement en français.",
      },
      {
        question: "Puis-je chercher des consultants par certification et secteur, pas seulement par rôle ?",
        answer: "Oui. Les profils sont structurés : la matrice de compétences couvre certifications, secteurs, langues et compétences sur tout le vivier. \"Certifié PRINCE2, expérience utilities, disponible dans les pays nordiques\" est un filtre que vous lancez, pas une question que vous faites circuler.",
      },
      {
        question: "Comment s'assurer que les CV sont réellement à jour au lancement ?",
        answer: "Chaque consultant a un profil, et le mettre à jour coûte peu : il envoie un CV récent que l'IA analyse, ou modifie via le chat entre deux projets. Comme les CV clients sont générés depuis le profil plutôt qu'exhumés de dossiers, le lancement utilise ce qui est à jour - pas ce qui a été exporté en dernier.",
      },
      {
        question: "Peut-on anonymiser les CV pour les appels d'offres concurrentiels ?",
        answer: "Un clic. Les noms, photos et éléments identifiants sortent ; le modèle et la structure restent. C'est le même profil et le même flux d'export, donc les soumissions à l'aveugle n'ajoutent pas de chantier manuel séparé la semaine avant l'échéance.",
      },
      {
        question: "Est-ce un outil de plus que mes équipes delivery devront maintenir ?",
        answer: "La charge de maintenance est précisément ce qu'il supprime. Les consultants y passent brièvement entre deux missions pour garder leur profil à jour - en envoyant un CV ou une mise à jour par chat - et les responsables delivery l'utilisent pour staffer. Il n'y a pas d'entretien documentaire permanent, parce que les documents sont des livrables, pas le stockage.",
      },
      {
        question: "Une practice peut-elle démarrer sans déploiement à l'échelle du cabinet ?",
        answer: "Oui, et c'est le chemin le plus courant. L'offre Free couvre 10 profils et 30 exports de CV - de quoi faire passer une vraie mission pour une équipe. Pro à 50 $/mois couvre 200 profils ; Enterprise ajoute le SSO, un DPA et une échelle illimitée quand le reste du cabinet suit.",
      },
    ],
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
