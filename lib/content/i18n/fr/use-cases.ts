import type { UseCasePage } from "../../types";

export const useCases: UseCasePage[] = [
  {
    _type: "useCasePage",
    slug: "tailor-cvs",
    job: "Adapter le CV de chaque consultant au cahier des charges spécifique pour que l'expérience la plus pertinente arrive en tête - sans marathon de réécriture avant chaque échéance.",
    h1: "Arrêtez de soumettre le même CV à chaque cahier des charges.",
    sub: "MagicCV lit le RFP et remodèle le CV de chaque consultant autour de ses exigences - pour que les évaluateurs voient l'adéquation en page une, pas en page quatre.",
    problemToday:
      "Les évaluateurs notent les CV face aux critères du RFP, mais la plupart des cabinets soumettent le même document générique à chaque client. L'alternative est pire : un bid manager s'installe avec l'annexe de 40 pages du RFP sur un écran et final_v3_JS_edit.docx sur l'autre, à réordonner les puces à la main pour 12 CV, généralement dans une fenêtre de 48 heures. La moitié de l'adaptation se fait, l'autre moitié passe à la trappe, et le CV qui arrive sur le bureau de l'évaluateur sous-vend un consultant qui correspond pourtant très bien.\n\nAvec MagicCV, vous collez le RFP, le cahier des charges ou les critères d'évaluation, et l'IA lit ce que le client note. Elle réordonne et remet en valeur l'expérience réelle de chaque consultant depuis son profil structuré pour y correspondre - les projets secteur public de la directrice de mission remontent en tête pour un dossier public, son expérience fintech mène pour une banque. Vous relisez le résultat, ajustez ce que vous voulez en discutant avec l'éditeur, et exportez dans votre modèle de marque.",
    steps: [
      {
        title: "Donnez à MagicCV le cahier des charges, pas un résumé de celui-ci",
        body: "Collez le RFP complet, la grille de critères d'évaluation ou une description en deux lignes de ce que veut le client. MagicCV extrait les exigences sur lesquelles il va adapter et vous les montre avant de toucher au moindre CV.",
        screenshotAlt: "Document RFP chargé avec les exigences extraites affichées en étiquettes : secteur public, migration Azure, francophone",
      },
      {
        title: "Regardez le CV se remodeler autour des exigences",
        body: "MagicCV réordonne et remet en valeur l'expérience issue du profil source du consultant pour que les projets les plus pertinents arrivent en tête. Il ne fabrique jamais rien - chaque affirmation du CV adapté renvoie à quelque chose qui existe déjà dans le profil.",
        screenshotAlt: "Vue côte à côte du CV original et du CV adapté, avec les projets secteur public remontés en tête et les exigences correspondantes surlignées",
      },
      {
        title: "Corrigez les détails dans le chat, pas dans Word",
        body: "Demandez des changements en langage courant - \"commence par la mission Nordhaus Advisory\" ou \"réduis les postes de 2015 à une ligne\" - et le CV se met à jour sur place. Pas de lutte avec la mise en page, pas de versions qui divergent.",
        screenshotAlt: "Panneau de chat à côté d'un CV avec l'instruction 'raccourcir le début de carrière à une ligne' appliquée au document",
      },
      {
        title: "Exportez à votre image, prêt à joindre",
        body: "Un clic produit un PDF ou un fichier Word parfaitement homogène dans le modèle de votre cabinet. La version adaptée est enregistrée sur le profil : le prochain dossier part d'une base propre, pas de la copie locale de quelqu'un.",
        screenshotAlt: "Fenêtre d'export montrant les options PDF et Word avec l'aperçu du modèle de marque du cabinet",
      },
    ],
    outcome: "Avant : trois heures par CV de relecture, de réordonnancement et de remise en forme - ou un CV générique et un espoir silencieux. Après : collez le cahier des charges, relisez un brouillon adapté en quelques minutes, et soumettez des CV qui répondent directement aux critères d'évaluation. L'adaptation qu'on sautait à 23 h se fait désormais sur chaque dossier.",
    outcomeStats: [{ value: "+18%", label: "de taux de succès sur les dossiers avec CV adaptés", isPlaceholder: true }],
    faqs: [
      {
        question: "L'adaptation réécrit-elle l'expérience réelle d'un consultant ?",
        answer:
          "Non. MagicCV réordonne et remet en valeur l'expérience qui existe déjà dans le profil structuré du consultant. Il n'invente jamais de projets, de compétences ni de dates - chaque ligne du CV adapté est traçable jusqu'au profil source, ce qui compte quand un client vous demande d'assumer une affirmation.",
      },
      {
        question: "Puis-je coller un RFP complet de 40 pages, ou faut-il un résumé ?",
        answer:
          "Collez tout. MagicCV lit le document complet, extrait les exigences et les critères d'évaluation, et vous montre ce qu'il a trouvé avant d'adapter. Un cahier des charges en deux lignes fonctionne aussi - plus de contexte lui donne simplement plus de matière.",
      },
      {
        question: "Combien de temps prend réellement l'adaptation d'un CV ?",
        answer:
          "Quelques minutes entre le collage du cahier des charges et un CV relu, prêt à exporter. L'essentiel de ce temps est votre relecture, pas la génération. Adapter 12 CV pour un dossier, c'est le même flux de travail exécuté sur le même cahier des charges, pas 12 après-midis distincts.",
      },
      {
        question: "Pouvons-nous conserver notre modèle de CV Word existant ?",
        answer:
          "Oui. Votre modèle de marque se configure une fois dans MagicCV, et chaque CV adapté s'y exporte en PDF ou Word parfaitement homogène. L'adaptation change ce que le CV dit, pas son apparence.",
      },
      {
        question: "En quoi est-ce différent de coller un CV dans ChatGPT ?",
        answer:
          "Un chatbot généraliste n'a pas de source de vérité, donc il enjolive volontiers - et il produit du texte brut que vous devez encore remettre en forme. MagicCV adapte depuis le profil structuré du consultant, refuse d'inventer de l'expérience, conserve votre modèle de marque et fonctionne pour toute l'équipe depuis une seule plateforme de gestion des CV, pas un document à la fois.",
      },
      {
        question: "Chaque CV adapté compte-t-il dans les limites de notre offre ?",
        answer:
          "Oui - chaque CV généré compte dans le quota de CV de votre offre. Free inclut 10 profils et 30 CV au total, Pro (50 $/mois) inclut 200 profils et 600 CV, et Enterprise est illimité. Un CV adapté pour un dossier actif est exactement ce à quoi servent ces quotas.",
      },
      {
        question: "Où vont les données du RFP et des CV ? Nous traitons des cahiers des charges confidentiels.",
        answer:
          "MagicCV est conçu RGPD d'abord avec résidence des données dans l'UE. Vos cahiers des charges et les données de vos consultants sont traités pour générer vos CV, pas pour entraîner des modèles publics. Enterprise ajoute le SSO, des journaux d'audit et un DPA si vos contrats clients l'exigent.",
      },
    ],
    related: [
      { label: "Comment fonctionne le raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Constituer un dossier de CV complet pour la proposition", href: "/use-cases/proposal-cv-pack" },
      { label: "MagicCV pour les équipes commerciales et de réponse", href: "/solutions/sales" },
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
    job: "Assembler un dossier de CV complet et cohérent pour une proposition ou un appel d'offres - adapté au cahier des charges, en une seule passe, des heures avant l'échéance au lieu de quelques minutes.",
    h1: "Ne construisez plus jamais un dossier de CV la veille d'une échéance.",
    sub: "Choisissez l'équipe, adaptez chaque CV au même cahier des charges en une passe, et exportez un dossier unique à votre image - environ 15 minutes au lieu d'une journée perdue.",
    problemToday:
      "Le RFP arrive avec une fenêtre de 48 heures. Le bid manager écrit à six consultants pour obtenir des CV à jour, reçoit quatre réponses, deux fichiers final_v3.docx avec des polices différentes, et un \"prends la version du dossier Meridian\". Puis vient le vrai travail : reformater 12 CV à la main pour que le dossier ne donne pas l'impression d'avoir été écrit par six cabinets différents, pendant que l'horloge de l'échéance tourne. C'est la classique course du vendredi soir, et elle se répète à chaque dossier.\n\nAvec MagicCV, les profils sont déjà à jour, donc la course ne commence jamais. Vous sélectionnez l'équipe - ou laissez MagicCV suggérer les consultants les plus adaptés depuis la matrice de compétences - vous collez le cahier des charges une fois, et chaque CV du dossier est adapté en même temps. Relisez, ajustez dans le chat, et exportez un dossier cohérent et à votre image, prêt à joindre à la proposition.",
    steps: [
      {
        title: "Choisissez l'équipe - ou laissez la matrice de compétences choisir avec vous",
        body: "Sélectionnez vous-même les consultants pour ce dossier, ou recherchez dans le vivier par compétences, secteurs, langues et certifications et laissez MagicCV suggérer les meilleures correspondances face au cahier des charges. Vous gardez toujours le dernier mot.",
        screenshotAlt: "Écran de sélection d'équipe montrant 6 consultants suggérés classés face au cahier des charges avec badges de compétences correspondantes",
      },
      {
        title: "Adaptez chaque CV au cahier des charges en une passe",
        body: "Collez le RFP une fois et MagicCV adapte tous les CV sélectionnés face aux mêmes exigences, simultanément. Douze CV reçoivent le traitement qu'un seul CV recevait avant - aucune reprise document par document.",
        screenshotAlt: "Vue de progression de génération en lot avec 12 CV de consultants en cours d'adaptation face à un même RFP",
      },
      {
        title: "Relisez le dossier, pas les paragraphes",
        body: "Parcourez chaque CV adapté, corrigez ce qu'il faut en discutant avec l'éditeur, et validez. Comme chaque CV provient des mêmes profils structurés et du même modèle, la cohérence n'est pas quelque chose que vous vérifiez - c'est la valeur par défaut.",
        screenshotAlt: "Écran de relecture du dossier avec 12 CV adaptés dans un modèle de marque identique, un signalé pour relecture",
      },
      {
        title: "Exportez un dossier prêt à soumettre",
        body: "Exportez toute l'équipe en un seul document à votre image ou en fichiers individuels, en PDF ou Word, selon la façon dont l'appel d'offres exige que les CV soient remis. Joignez et soumettez.",
        screenshotAlt: "Fenêtre d'export pour un dossier de CV combiné avec options document unique et fichier par consultant",
      },
    ],
    outcome: "Avant : une journée complète de relances, de remise en forme et d'assemblage - terminée à minuit, soumise en croisant les doigts. Après : le dossier prend environ 15 minutes, dont l'essentiel en relecture, et chaque CV qu'il contient est adapté au cahier des charges au lieu d'être simplement présent. L'échéance cesse de dicter la qualité.",
    outcomeStats: [{ value: "1 jour → 15 min", label: "temps typique jusqu'à un dossier de CV prêt à soumettre", isPlaceholder: true }],
    faqs: [
      {
        question: "MagicCV peut-il suggérer qui inclure dans le dossier ?",
        answer:
          "Oui. À partir du cahier des charges et de la matrice de compétences de votre équipe - compétences, secteurs, langues, certifications - MagicCV suggère les consultants les plus adaptés. C'est une shortlist, pas une décision : c'est vous qui choisissez l'équipe finale.",
      },
      {
        question: "Et si la moitié des CV de l'équipe sont périmés quand le RFP arrive ?",
        answer:
          "C'est tout l'intérêt de construire les dossiers depuis des profils plutôt que des fichiers. Chaque consultant a un profil structuré unique, mis à jour une fois, de façon centralisée - pas un dossier de documents périmés. S'il manque réellement quelque chose, vous mettez le profil à jour en quelques minutes et chaque CV futur, dans tout format, en tient compte.",
      },
      {
        question: "Le dossier restera-t-il cohérent si des personnes différentes génèrent les CV ?",
        answer:
          "Oui. Chaque CV du dossier se génère depuis le même modèle de marque : polices, ordre des sections et mise en page correspondent quelle que soit la personne qui a cliqué sur exporter. Le dossier se lit comme le document d'un seul cabinet, ce qui est exactement ce que les évaluateurs remarquent.",
      },
      {
        question: "Un de nos associés tient à sa propre version de CV. Comment cela se passe-t-il ?",
        answer:
          "Son expérience vit dans son profil structuré comme celle de tout le monde, et le modèle contrôle la présentation. Il peut relire et ajuster la formulation via le chat avant l'export - ce qu'il ne peut pas faire, c'est maintenir discrètement un fichier Word divergent qui refait surface dans un dossier six mois plus tard.",
      },
      {
        question: "Un dossier de 12 personnes compte-t-il comme 12 CV dans notre offre ?",
        answer:
          "Oui, chaque CV généré compte individuellement. Pro (50 $/mois) inclut 200 profils et 600 CV, ce qui couvre l'activité de réponse régulière de la plupart des équipes de taille moyenne ; Enterprise supprime les limites. Free (10 profils, 30 CV) suffit pour mener un ou deux vrais dossiers à titre d'essai.",
      },
      {
        question: "Le dossier peut-il mélanger les langues si l'appel d'offres l'exige ?",
        answer:
          "Oui. MagicCV génère les CV dans la langue qu'exige chaque soumission depuis les mêmes profils maîtres, en conservant le modèle de marque. Un dossier pour un appel d'offres de l'UE peut partir en français pendant que le dossier de la même équipe pour un client britannique part en anglais.",
      },
      {
        question: "Nous avons déjà des centaines de CV dans SharePoint. Comment démarrer ?",
        answer:
          "Importez-les. MagicCV analyse les CV Word et PDF en profils structurés, un par personne : vos documents existants deviennent les données de départ plutôt qu'un projet de migration. Ensuite, les dossiers se construisent depuis les profils, pas depuis ce que la barre de recherche fait remonter.",
      },
      {
        question: "Est-ce un ATS ? Nous en avons déjà un pour le recrutement.",
        answer:
          "Non. Un ATS suit les candidats dans un pipeline de recrutement ; MagicCV gère les CV des personnes déjà dans votre équipe et les transforme en documents de réponse adaptés et à votre image. Les deux résolvent des problèmes différents et coexistent très bien.",
      },
    ],
    related: [
      { label: "Comment fonctionne le raisonnement RFP-vers-CV", href: "/features/rfp-to-cv" },
      { label: "Exports de CV fidèles à votre marque", href: "/features/brand-templates" },
      { label: "MagicCV pour les équipes commerciales et de réponse", href: "/solutions/sales" },
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
    job: "Remplacer les CV éparpillés sur les disques partagés par un profil structuré et à jour par personne - la source dont chaque dossier, chaque décision de staffing et chaque demande client s'alimente.",
    h1: "De l'archéologie de fichiers dans SharePoint à un profil à jour par personne.",
    sub: "Un logiciel de cvthèque pour les équipes de conseil et de services professionnels : importez chaque CV une fois, gardez un profil vivant par consultant et générez tout format à la demande.",
    problemToday:
      "Aujourd'hui, la \"base de CV\" est un dossier SharePoint, trois boîtes mail et une poignée d'ordinateurs portables. Le même consultant existe en CV_2022.pdf, final_v3_JS_edit.docx et un profil LinkedIn que personne n'a exporté - et aucun n'est clairement à jour. Ce n'est pas de la gestion de données de CV ; c'est de l'archéologie de fichiers. Et cela frappe au pire moment : un bid manager qui a besoin de 8 CV dans une fenêtre d'appel d'offres de 48 heures, ou un responsable de compte qui promet à un client \"les profils pour demain\" avant de passer la soirée à relancer des consultants occupés à facturer.\n\nMagicCV remplace le dossier par une base. Vous importez les CV que vous avez déjà - Word, PDF, quel que soit le format dans lequel ils se sont accumulés - et MagicCV analyse chacun en un profil structuré, un par personne. Les mises à jour se font une fois, sur le profil. Chaque livrable ensuite - CV adapté à un dossier, version anonymisée pour un appel d'offres, copie traduite - est généré à neuf depuis les données actuelles, si bien que \"quel fichier est le plus récent ?\" cesse d'être une question que quiconque se pose.",
    steps: [
      {
        title: "Importez le désordre que vous avez, pas les données dont vous rêvez",
        body: "Déposez vos fichiers CV existants dans n'importe quel format - Word, PDF, exports d'anciens systèmes. MagicCV analyse chacun en un profil structuré avec l'expérience, les compétences, les certifications et les langues sous forme de données, pas de paragraphes. Les fichiers en double pour une même personne fusionnent en un seul profil.",
        screenshotAlt: "Écran d'import en masse traitant 47 fichiers Word et PDF mélangés en profils de consultants structurés",
      },
      {
        title: "Gardez un profil par personne - et gardez-le à jour sans relances",
        body: "Chaque consultant a exactement un profil. Quand un projet se termine ou qu'une certification arrive, elle s'ajoute une fois, là - pas rapiécée dans cinq documents. Les mises à jour assistées par IA font de la modification un travail de deux minutes au lieu d'une réécriture de document.",
        screenshotAlt: "Vue de profil de consultant avec entrées d'expérience structurées et indicateur de mise à jour récente",
      },
      {
        title: "Interrogez l'équipe comme une base de données, parce que c'en est une",
        body: "La matrice de compétences rend tout le vivier consultable : filtrez par compétence, secteur, langue ou certification et obtenez des personnes, pas des noms de fichiers. \"Qui a la certification AWS et parle allemand ?\" devient une requête de cinq secondes au lieu d'un fil d'e-mails du vendredi après-midi.",
        screenshotAlt: "Recherche dans la matrice de compétences filtrée sur les consultants certifiés AWS parlant allemand, affichant 6 profils correspondants",
      },
      {
        title: "Générez n'importe quel livrable depuis la même source de vérité",
        body: "CV adapté pour un dossier, CV anonyme pour un appel d'offres, version française pour une proposition transfrontalière - tous générés à la demande depuis le profil à jour, tous dans votre modèle de marque. Le livrable est jetable ; le profil est l'actif.",
        screenshotAlt: "Sélecteur de livrable sur un profil unique montrant les options de CV adapté, anonymisé et traduit",
      },
    ],
    outcome: "Avant : 20 minutes de fouille de dossiers par CV, multipliées par chaque dossier, avec un risque réel d'envoyer à un client un document périmé de deux ans. Après : une requête, un profil à jour, tout format en quelques minutes. La base se bonifie discrètement - chaque dossier va plus vite parce que le précédent a gardé les données propres.",
    outcomeStats: [],
    faqs: [
      {
        question: "Que deviennent les centaines de CV que nous avons déjà dans SharePoint ?",
        answer:
          "Vous les importez. MagicCV analyse les fichiers Word et PDF en profils structurés - un par personne, même si vous avez quatre versions du CV du même consultant. Les anciens fichiers peuvent rester dans SharePoint comme archive ; ils cessent simplement d'être la copie de travail.",
      },
      {
        question: "Comment garder 200 CV de consultants à jour sans relancer tout le monde chaque trimestre ?",
        answer:
          "En rendant la mise à jour petite et unique. Chaque personne a un profil, les mises à jour sont des modifications assistées par IA plutôt que des réécritures de documents, et il n'y a rien à remettre en forme ensuite - les modèles gèrent la présentation. La plupart des équipes intègrent la mise à jour du profil à la clôture de projet au lieu de mener une campagne de relances.",
      },
      {
        question: "En quoi un logiciel de cvthèque diffère-t-il de notre ATS ou de notre HRIS ?",
        answer:
          "Un ATS suit les candidats à un poste ; un HRIS conserve les dossiers d'emploi comme les contrats et les données de paie. Aucun des deux n'est conçu pour produire un CV adapté et à votre image pour un dossier. MagicCV est la couche dédiée aux données d'expérience de votre équipe de delivery - structurées, consultables et exportables instantanément en documents destinés aux clients.",
      },
      {
        question: "Vous intégrez-vous à notre HRIS ?",
        answer:
          "Les intégrations HRIS (Personio, BambooHR, HiBob) sont sur la feuille de route. Aujourd'hui, l'import de fichiers couvre le chargement initial, et comme les profils ne se mettent à jour qu'à un seul endroit, l'entretien au quotidien reste léger même sans synchronisation.",
      },
      {
        question: "Une cvthèque centralisée est-elle un problème RGPD ou une amélioration RGPD ?",
        answer:
          "Bien faite, une amélioration. MagicCV est RGPD d'abord avec résidence des données dans l'UE : les données des consultants résident dans un système gouverné unique au lieu d'être éparpillées dans des boîtes mail et des ordinateurs portables - ce qui rend le contrôle d'accès, les demandes de suppression et les audits gérables. Enterprise ajoute le SSO, des journaux d'audit et un DPA.",
      },
      {
        question: "Combien de profils les offres couvrent-elles ?",
        answer:
          "Free couvre 10 profils et 30 CV générés - de quoi valider le flux de travail sur une équipe. Pro (50 $/mois) couvre 200 profils et 600 CV, ce qui convient à la plupart des cabinets jusqu'à environ deux cents personnes facturables. Enterprise est illimité, avec SSO et DPA pour les cabinets plus grands.",
      },
      {
        question: "Qui maintient les profils - un responsable central ou les consultants eux-mêmes ?",
        answer:
          "Les deux modèles fonctionnent. Certains cabinets confient la base à un responsable ops ou staffing ; d'autres font mettre à jour le profil par les consultants à la clôture de projet, avec relecture par les ops. Comme il y a un profil par personne et que le modèle contrôle la mise en forme, les contributeurs ne peuvent ni créer des versions divergentes ni casser la mise en page.",
      },
      {
        question: "Quels formats peut-on générer une fois les CV centralisés ?",
        answer:
          "Des exports PDF et Word parfaitement homogènes dans vos modèles de marque, plus des versions adaptées à un RFP précis, des CV anonymes pour les appels d'offres et des traductions - tous générés depuis le même profil. La centralisation est la mise en place ; les livrables générés sont le bénéfice.",
      },
    ],
    related: [
      { label: "Profils et matrice de compétences", href: "/features/profiles-skills" },
      { label: "MagicCV pour les RH et People Ops", href: "/solutions/hr" },
      { label: "MagicCV pour les équipes Recrutement", href: "/solutions/recruitment" },
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
    job: "Produire des CV anonymes pour les marchés publics, les dossiers concurrentiels et l'évaluation sans biais - un clic, les mêmes règles pour tout le monde, aucun caviardage manuel.",
    h1: "Ne caviardez plus jamais un CV à la main pour un appel d'offres.",
    sub: "Des CV anonymes en un clic pour les marchés publics et le recrutement à l'aveugle - les mêmes règles d'anonymisation appliquées à chaque consultant, à chaque fois.",
    problemToday:
      "L'annexe de l'appel d'offres exige des CV anonymisés, alors quelqu'un passe un après-midi dans Word à supprimer noms, photos et adresses e-mail de 10 documents. Puis les problèmes commencent : un nom survit dans un en-tête en page 3, les propriétés du document indiquent toujours l'auteur du fichier, et la notion d'\"anonymisé\" d'un membre de l'équipe - initiales conservées, noms d'employeurs supprimés - ne correspond pas à celle d'un autre. Dans un marché public, un seul identifiant qui fuite peut faire contester une soumission ; en recrutement à l'aveugle, il ruine tout l'exercice.\n\nMagicCV fait de l'anonymisation une propriété de l'export, pas une passe d'édition manuelle. Vous configurez une fois ce qui compte comme identifiant pour votre processus - nom, photo, coordonnées, ce que vos évaluations exigent - et vous activez l'anonymisation sur n'importe quel CV. Comme le CV anonyme est généré à neuf depuis le profil structuré plutôt que caviardé depuis un vieux fichier, il n'y a ni en-têtes résiduels, ni métadonnées, ni mentions oubliées dont il faudrait se soucier.",
    steps: [
      {
        title: "Partez de n'importe quel CV - standard ou adapté",
        body: "Générez le CV du consultant comme d'habitude, y compris une version adaptée à l'appel d'offres en question. L'anonymisation est un interrupteur posé sur n'importe quel livrable, pas un document séparé à maintenir.",
        screenshotAlt: "CV de consultant adapté à un marché public, avant application de l'anonymisation",
      },
      {
        title: "Activez l'anonymisation - vos règles, appliquées automatiquement",
        body: "Basculez l'interrupteur d'anonymisation et MagicCV retire chaque détail que vos règles configurées considèrent comme identifiant : nom, photo, coordonnées et tout ce que votre processus d'évaluation exige. Le même jeu de règles s'applique quelle que soit la personne de l'équipe qui génère le CV.",
        screenshotAlt: "Anonymisation appliquée à un CV, avec le nom remplacé par un intitulé de rôle et la photo retirée",
      },
      {
        title: "Exportez des CV anonymes propres, seuls ou en dossier complet",
        body: "Exportez la version anonymisée dans votre modèle de marque en PDF ou Word - pour un consultant ou toute l'équipe du dossier à la fois. Comme chaque fichier est généré depuis les données de profil, aucun résidu d'un document d'origine ne peut passer à travers.",
        screenshotAlt: "Vue d'export d'un dossier de CV anonymisés pour une équipe d'appel d'offres de 6 personnes, tous dans le même modèle",
      },
    ],
    outcome: "Avant : un après-midi de caviardage manuel par appel d'offres, et la crainte sourde qu'un nom ait survécu dans un pied de page. Après : la version anonyme est un clic, identique en standard à chaque autre CV anonyme que votre cabinet a jamais produit. L'anonymisation cesse d'être une tâche et devient un réglage.",
    outcomeStats: [],
    faqs: [
      {
        question: "Qu'est-ce qui est exactement retiré d'un CV anonyme ?",
        answer:
          "Ce que vos règles indiquent. Typiquement le nom, la photo et les coordonnées ; beaucoup d'équipes retirent aussi d'autres marqueurs que leur processus d'évaluation considère comme identifiants. Vous configurez le jeu de règles une fois et il s'applique à chaque export anonymisé, pour chaque consultant.",
      },
      {
        question: "Un nom peut-il encore fuiter via un en-tête, un pied de page ou les métadonnées du fichier ?",
        answer:
          "C'est l'avantage de générer plutôt que de caviarder. Un CV anonyme de MagicCV est construit à neuf depuis le profil structuré avec les règles d'anonymisation appliquées - ce n'est pas la copie éditée d'un vieux fichier Word, donc il n'y a ni en-têtes résiduels, ni suivi de modifications, ni propriétés de document portant le nom de l'auteur d'origine.",
      },
      {
        question: "Les CV anonymisés de chaque membre de l'équipe suivront-ils le même standard ?",
        answer:
          "Oui. Les règles vivent dans le jeu de règles, pas dans le jugement individuel : le CV anonyme produit par un coordinateur junior un vendredi soir correspond à celui qu'un associé produirait. Pour les marchés publics où une anonymisation incohérente peut invalider une soumission, cette uniformité est précisément le but.",
      },
      {
        question: "Peut-on anonymiser toute une équipe de proposition à la fois ?",
        answer:
          "Oui. Constituez le dossier de CV du dossier, appliquez l'anonymisation et exportez - chaque CV du dossier suit les mêmes règles et le même modèle de marque. Un dossier d'appel d'offres de 10 personnes est une seule passe, pas 10 travaux de caviardage.",
      },
      {
        question: "Cela fonctionne-t-il pour le recrutement à l'aveugle comme pour les appels d'offres ?",
        answer:
          "Oui. Les équipes de staffing et de recrutement utilisent le même interrupteur pour envoyer des CV anonymes aux clients - des candidats évalués sur l'expérience et les compétences avant qu'un nom ou une photo n'entre dans la conversation. Même mécanisme, même cohérence.",
      },
      {
        question: "Comment l'anonymisation s'inscrit-elle dans nos obligations RGPD ?",
        answer:
          "C'est un volet d'une posture de minimisation des données : ne partager que les données personnelles dont un processus a réellement besoin. MagicCV lui-même est RGPD d'abord avec résidence des données dans l'UE, et Enterprise ajoute des journaux d'audit et un DPA. Les CV anonymes réduisent ce qui sort de votre cabinet ; la plateforme gouverne ce qui y reste.",
      },
      {
        question: "Les CV anonymisés conservent-ils notre modèle de marque ?",
        answer:
          "Oui - la version anonyme s'exporte dans le même modèle parfaitement homogène que tout autre CV, moins les éléments identifiants. Si un appel d'offres exige plutôt une mise en page neutre ou imposée par le client, exportez dans un modèle configuré pour cela.",
      },
      {
        question: "L'anonymisation est-elle disponible sur toutes les offres ?",
        answer:
          "Les exports anonymisés sont des CV générés comme les autres et comptent dans le quota de votre offre - 30 CV sur Free, 600 sur Pro (50 $/mois), illimité sur Enterprise. Vous pouvez tester le flux complet de CV anonymes sur l'offre Free avant qu'un vrai appel d'offres n'en dépende.",
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
    job: "Produire des CV précis et à votre image dans chaque langue qu'exigent vos dossiers - générés depuis un profil maître unique au lieu d'être retapés et remis en page à la main.",
    h1: "Arrêtez de retaper des CV pour chaque dossier transfrontalier.",
    sub: "Générez des CV précis et à votre image en EN, DE, FR, NL, ES et plus encore depuis un profil maître unique - sans ressaisie, sans mise en page cassée, sans versions périmées.",
    problemToday:
      "Un appel d'offres de l'UE exige des CV en français pour jeudi. Les options actuelles sont toutes mauvaises : envoyer 8 CV à une agence de traduction et attendre des jours, les passer dans un traducteur générique et passer des heures à réparer les mises en page cassées et les intitulés de poste mal traduits, ou maintenir des versions linguistiques parallèles à la main - ce qui garantit que le CV allemand mentionne encore le projet terminé l'an dernier pendant que la version anglaise est à jour. Chaque langue multiplie la maintenance, et cela ressort toujours en pleine échéance.\n\nAvec MagicCV, la traduction cesse d'être de la maintenance documentaire. Chaque consultant a un profil maître unique comme source de vérité. Quand un dossier exige une autre langue, vous la choisissez à l'export et MagicCV génère le CV dans cette langue, dans votre modèle de marque, mise en page intacte. Mettez le profil à jour une fois et régénérez n'importe quelle langue à la demande - rien ne dérive, parce qu'il n'y a pas de copies parallèles pour dériver.",
    steps: [
      {
        title: "Gardez un profil maître, pas un par langue",
        body: "L'expérience, les compétences et les certifications de chaque consultant vivent dans un seul profil structuré. C'est la seule chose que quiconque maintient - les versions linguistiques sont des livrables, pas des documents avec une vie propre.",
        screenshotAlt: "Profil maître de consultant avec entrées d'expérience structurées et sélecteur de langue à l'export",
      },
      {
        title: "Choisissez les langues qu'exige ce dossier",
        body: "Sélectionnez le français pour l'appel d'offres de l'UE, l'allemand pour le client munichois, ou plusieurs à la fois pour un jury d'évaluation multilingue. La sélection se fait à l'export - aucun fichier traduit préexistant n'est nécessaire.",
        screenshotAlt: "Fenêtre de sélection de langues avec le français et l'allemand cochés pour une proposition transfrontalière",
      },
      {
        title: "Relisez la traduction en bid manager, pas en linguiste",
        body: "Le CV généré conserve votre modèle et votre mise en page : la relecture porte sur la terminologie, pas sur la mise en forme. Corrigez un intitulé de poste ou un terme sectoriel en discutant avec l'éditeur et le changement s'applique sur place.",
        screenshotAlt: "CV en français dans le modèle de marque avec panneau de chat corrigeant la traduction d'un intitulé de poste",
      },
      {
        title: "Exportez des CV à votre image dans chaque langue sélectionnée",
        body: "Chaque langue s'exporte en PDF ou Word parfaitement homogène dans le modèle de votre cabinet. Le dossier français et le dossier anglais donnent l'impression d'avoir été produits par le même cabinet - parce que c'est le même système qui l'a fait.",
        screenshotAlt: "Versions anglaise et française du CV du même consultant exportées côte à côte, mise en page identique",
      },
    ],
    outcome: "Avant : une semaine de délai d'agence ou une soirée à réparer ce qu'un traducteur générique a fait à la mise en page - à répéter à chaque évolution de profil. Après : toute version linguistique est à quelques minutes et toujours générée depuis des données à jour. Les dossiers transfrontaliers cessent de payer une taxe de traduction.",
    outcomeStats: [],
    faqs: [
      {
        question: "Dans quelles langues pouvons-nous générer des CV ?",
        answer:
          "L'anglais, l'allemand, le français, le néerlandais et l'espagnol sont les plus utilisés aujourd'hui, et MagicCV peut aussi traduire les CV vers d'autres langues - la mise en page et le modèle tiennent quelle que soit la langue. Si vos dossiers se jouent dans une langue précise, testez-la sur l'offre Free avant de vous appuyer dessus.",
      },
      {
        question: "Les CV traduits restent-ils synchronisés quand le profil d'un consultant évolue ?",
        answer:
          "Oui, parce que les traductions ne sont pas des documents stockés - elles sont générées à la demande depuis le profil maître à jour. Mettez le profil à jour une fois, régénérez n'importe quelle langue, et le nouveau projet ou la nouvelle certification apparaît partout. Il n'y a pas de deuxième copie à oublier.",
      },
      {
        question: "La traduction casse-t-elle la mise en page ou le modèle de marque ?",
        answer:
          "Non. MagicCV rend le contenu traduit dans le même modèle de marque, en gérant le fait que l'allemand est plus long que l'anglais sans démolir la page. Ce que vous relisez est un CV fini et à votre image, pas un bloc de texte à remettre en page.",
      },
      {
        question: "Quelle est la précision de la traduction pour les intitulés de poste techniques et les termes sectoriels ?",
        answer:
          "Solide, mais relisez-la comme tout ce qui est destiné à un client. Le langage des CV est un domaine bien balisé - rôles, projets, compétences - et l'IA le gère bien. Pour la terminologie propre au cabinet, corrigez une fois dans le chat lors de la relecture ; le survol de cinq minutes d'un collègue natif reste une bonne pratique sur les appels d'offres à fort enjeu.",
      },
      {
        question: "Chaque version linguistique compte-t-elle comme un CV distinct dans notre offre ?",
        answer:
          "Oui - chaque CV généré compte dans le quota : 30 CV sur Free, 600 sur Pro (50 $/mois), illimité sur Enterprise. Un dossier de 6 personnes en deux langues fait 12 CV, ce que Pro absorbe confortablement sur un pipeline de dossiers normal.",
      },
      {
        question: "Où les données de CV sont-elles traitées ? Nos contrats clients exigent un traitement dans l'UE.",
        answer:
          "MagicCV fonctionne avec résidence des données dans l'UE et est RGPD d'abord dès la conception. Les données des consultants sont traitées pour générer vos CV, traductions comprises, dans ce cadre. Enterprise ajoute le SSO, des journaux d'audit et un DPA pour les cabinets dont les contrats clients exigent ces documents.",
      },
      {
        question: "Un même dossier de proposition peut-il mélanger les langues ?",
        answer:
          "Oui. Générez le CV de chaque consultant dans la langue qu'exige la soumission - ou le même consultant en deux langues pour un jury d'évaluation bilingue. Tout s'exporte dans le même modèle, donc le dossier reste visuellement cohérent d'une langue à l'autre.",
      },
      {
        question: "Pourquoi ne pas simplement continuer avec notre agence de traduction ?",
        answer:
          "Pour les documents juridiques, gardez l'agence. Pour les CV, le modèle de l'agence casse sur la vitesse et la synchronisation : des jours de délai par aller-retour, un coût réel par document, et un fichier traduit périmé dès que le profil change. MagicCV vous donne une génération en quelques minutes depuis des données toujours à jour, avec une relecture humaine là où vous la voulez.",
      },
    ],
    related: [
      { label: "Génération de CV multilingues", href: "/features/multilingual" },
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
