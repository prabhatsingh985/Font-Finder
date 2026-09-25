import type { TranslationSchema } from './en';

export const fr: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'L\'identificateur de polices par image conçu pour les développeurs. Inspectez la géométrie des glyphes, vérifiez d\'authentiques polices Google Fonts open source et copiez du code CSS prêt pour la production.',
    nav: {
      finder: 'Identificateur',
      tools: 'Outils',
      guides: "Guides",
      about: 'À propos',
      identifyFont: 'Identifier',
      toggleTheme: 'Changer de thème de couleur',
      skipToContent: 'Aller au contenu',
      language: 'Langue'
    },
    footer: {
      mission: 'L\'identificateur de polices par image conçu pour les développeurs. Inspectez la géométrie des glyphes, vérifiez d\'authentiques polices Google Fonts open source et copiez du code CSS prêt pour la production.',
      zeroStorageBadge: 'Zéro Stockage d\'Images • 100% en Mémoire Navigateur',
      productsTitle: 'Produits',
      tools: {
        imageFontFinder: 'Détecteur de Polices par Image',
        urlFontFinder: 'Détecteur de Polices par URL',
        logoFontFinder: 'Identificateur de Police de Logo',
        screenshotFontFinder: 'Détecteur sur Capture d\'Écran',
        fontPairing: 'Outil d\'Association de Polices',
        handwritingMatcher: 'Reconnaissance d\'Écriture Manuscrite',
        commercialAlternatives: 'Alternatives aux Polices Commerciales'
      },
      companyTitle: 'Entreprise',
      aboutUs: 'À Propos de Nous',
      howItWorks: 'Comment Ça Marche',
      guides: "Guides & Tutoriels",
      allFontTools: 'Tous les Outils Typographiques',
      contactSupport: 'Contact et Support',
      trustLegalTitle: 'Confiance et Légal',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
      googleFonts: 'Google Fonts',
      silLicense: 'Licence SIL Open Font',
      copyright: 'Pro Font Finder. Inspection typographique de précision pour développeurs et designers.',
      noCookies: 'Aucun cookie',
      noAccount: 'Aucun compte requis',
      freeCommercial: 'Gratuit pour usage commercial'
    },
    buttons: {
      identifyNow: 'Identifier la Police Maintenant',
      exploreTools: 'Explorer les Outils',
      backToHome: 'Retour à l\'Accueil',
      copyCss: 'Copier le CSS',
      copied: 'Copié'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / VÉRIFICATION DU TEXTE",
      "cropManually": "Recadrer manuellement",
      "newImage": "Nouvelle image",
      "dragCursorInstruction": "Faites glisser le curseur sur l'image pour isoler une zone de texte spécifique :",
      "applyAndRedetect": "Appliquer et redétecter",
      "detectedTextLabel": "Texte détecté :",
      "verifyDetectedText": "Vérifier le texte détecté",
      "verifyInputPlaceholder": "Vérifier ou modifier le texte...",
      "inspectIndividualWords": "Inspecter les mots et lettres individuels",
      "wordSegmentsLabel": "Segments de mots (Cliquez pour isoler un mot spécifique) :",
      "letterGlyphsLabel": "Glyphes de lettres (Corrigez les caractères individuels ou effacez les non-lettres) :",
      "identifyFont": "Identifier la police",
      "identifyFontFor": "Identifier la police pour \"{word}\"",
      "ocrBadge": "Reconnaissance Optique de Caractères",
      "fetchingText": "Récupération du texte...",
      "detectingText": "Détection du texte et des formes de lettres...",
      "cancelAndChooseAnother": "Annuler et choisir une autre image",
      "distinctFont": "Police distincte",
      "comparingLetterShapes": "COMPARAISON DES FORMES DE LETTRES",
      "matchingFontsProgress": "Comparaison avec {count} polices dans votre navigateur...",
      "stageA": "ÉTAPE A : CORRESPONDANCE D'EMPREINTES DE GLYPHES 16×16",
      "evaluatingContours": "Évaluation des contours de lettres sur {count} polices...",
      "stageB": "ÉTAPE B : CLASSEMENT DES CANDIDATS",
      "rankingMatches": "Classement des correspondances Google Fonts les plus proches...",
      "previewTextHeading": "Texte d'aperçu.",
      "previewTextSubheading": "Tapez n'importe quel texte pour le voir appliqué sur chaque résultat.",
      "editText": "↑ Modifier le texte",
      "previewPlaceholder": "Tapez du texte pour prévisualiser...",
      "bestMatch": "Meilleur résultat",
      "match": "Correspondance",
      "designedBy": "Conçu par {designer} • SIL Open Font License",
      "copyName": "Copier le nom",
      "copied": "Copié !",
      "googleFonts": "Google Fonts",
      "scanAnother": "Scanner une autre image",
      "commercialAlternative": "Alternative commerciale :",
      "commercialAlternativeDesc": "Correspond au style de {commercial}. L'alternative gratuite vérifiée sur Google Fonts est {family}.",
      "compareWithImage": "Comparer avec votre image",
      "comparePlaceholder": "Tapez du texte pour comparer...",
      "yourImage": "Votre image",
      "matchedFont": "Police correspondante",
      "typographySpecimen": "Spécimen typographique",
      "closestMatchesHeading": "MEILLEURES CORRESPONDANCES GOOGLE FONTS",
      "livePreviewGoogleFonts": "Aperçu en direct rendu avec Google Fonts",
      "closestRank": "plus proche",
      "freeOpenLicense": "Gratuit • Licence ouverte",
      "viewOnGoogleFonts": "Voir sur Google Fonts",
      "copyCss": "Copier le CSS",
      "liveSpecimenTester": "02 / TESTEUR DE SPÉCIMEN EN DIRECT",
      "size": "Taille :",
      "specimenDefaultText": "Portez ce vieux whisky au juge blond qui fume",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / CODE CSS DE PRODUCTION",
      "copy": "Copier",
      "openInGoogleFontsRepo": "Ouvrir dans le répertoire Google Fonts",
      "inspectSpecimenDetails": "Inspecter les détails du spécimen →",
      "closestAlternatives": "04 / ALTERNATIVES VÉRIFIÉES LES PLUS PROCHES",
      "viewSpecimen": "Voir le spécimen →",
      "opticalMatch": "{confidence}% Correspondance optique",
      "errSelectWord": "Veuillez sélectionner un mot à identifier.",
      "errAtLeastOneLetter": "Veuillez vous assurer qu'au moins une lettre est saisie ou détectée.",
      "errInvalidFormat": "Veuillez importer une image au format PNG, JPG ou WebP.",
      "errFileTooLarge": "Le fichier dépasse la limite de 10 Mo.",
      "errParseFailed": "Échec du traitement de l'image."
  },

  home: {
    "meta": {
      "title": "Font Finder — Identificateur de polices gratuit par image",
      "description": "Identifiez instantanément n'importe quelle police à partir d'images et de captures d'écran avec Font Finder. Obtenez des alternatives Google Fonts 100% gratuites et vérifiées."
    },
    "hero": {
      "headlinePrefix": "Identifiez les polices en",
      "subtitle": "Déposez une capture d'écran pour isoler les glyphes, calculer les contours optiques et obtenir des polices Google Fonts open source vérifiées."
    },
    "dropzone": {
      "title": "Glissez une image ou collez une capture (⌘V)",
      "subtitle": "Prend en charge PNG, JPG, WebP • Détection 100% privée dans le navigateur",
      "buttonText": "Sélectionner un fichier image"
    },
    "pipeline": {
      "badge": "ARCHITECTURE DE RECONNAISSANCE",
      "heading": "Pipeline de reconnaissance en trois étapes",
      "subheading": "Des pixels bitmap bruts à une typographie CSS open source vérifiée et prête pour la production.",
      "localInference": "< 150 ms Inférence locale",
      "zeroUploads": "Aucun envoi sur serveur",
      "step1": {
        "phase": "PHASE 01 // ACQUISITION",
        "tag": "ENTRÉE BRUTE",
        "title": "Téléverser ou Coller",
        "desc": "Déposez une image ou collez instantanément depuis le presse-papiers avec",
        "descSuffix": "Le recadrage interactif isole avec précision les contours des glyphes.",
        "crop": "CADRER",
        "autoDetect": "Détection auto",
        "footerTraffic": "Zéro trafic serveur",
        "step": "Étape 1 sur 3"
      },
      "step2": {
        "phase": "PHASE 02 // SCAN NEURONAL",
        "tag": "ACCÉLÉRATION GPU",
        "title": "Scan Optique",
        "desc": "Extrait le contraste, l'épaisseur des traits et les empreintes de glyphes 16×16 en mémoire locale avec précision sous-pixel.",
        "matrix": "Matrice : Bitmaps 16×16",
        "apertures": "Ouvertures : Géométriques",
        "vectorNodes": "Nœuds vectoriels : 100% Correspondance",
        "footerClient": "100% WebGL Client",
        "step": "Étape 2 sur 3"
      },
      "step3": {
        "phase": "PHASE 03 // SYNTHÈSE CSS",
        "tag": "VÉRIFIÉ OFL 1.1",
        "title": "Exporter le Code",
        "desc": "Obtenez des alternatives Google Fonts vérifiées avec des règles CSS prêtes pour la production",
        "descSuffix": "validées pour le web.",
        "readyToEmbed": "Prêt à intégrer",
        "footerOfl": "Gratuit commercial OFL",
        "step": "Étape 3 sur 3"
      }
    },
    "engineSpecs": {
      "badge": "SPÉCIFICATIONS DU MOTEUR",
      "title": "Correspondances open source.",
      "titleAccent": "Prêtes pour la production.",
      "desc": "Évitez les pièges des licences commerciales. Font Finder associe les formes de lettres bitmap à d'authentiques polices gratuites de Google Fonts.",
      "licensingModel": "Modèle de licence",
      "licensingValue": "100% Gratuit SIL Open Font License",
      "processingArch": "Architecture de traitement",
      "processingValue": "100% Côté client WebGL / Canvas",
      "cdnIntegration": "Intégration CDN",
      "cdnValue": "Intégrations directes Google Fonts",
      "jsonOutput": "Sortie JSON"
    },
    "guide": {
      "imageRecognition": {
        "badge": "RECONNAISSANCE D'IMAGE",
        "title": "Trouver une police à partir d'une image",
        "desc": "Repérer une belle typographie est inspirant, mais l'identifier à partir d'une simple image peut s'avérer complexe. Que ce soit sur une affiche, un magazine ou une capture d'écran, se demander \"quelle est cette police ?\" est un défi quotidien en design.",
        "cardP1": "Un outil dédié comble le fossé entre les pixels statiques et les polices typographiques réelles. Au lieu de feuilleter des catalogues entiers, un identificateur optique extrait les structures des glyphes et les compare à des bibliothèques indexées.",
        "cardP2": "Qu'il s'agisse d'auditer une marque, d'analyser des interfaces concurrentes ou d'explorer de nouveaux styles, ProFontFinder vous aide à identifier instantanément la bonne police avec des résultats garantis."
      },
      "opticalAnalysis": {
        "badge": "ANALYSE OPTIQUE",
        "title": "Comment fonctionne l'identification de police ?",
        "desc": "L'identification typographique associe la vision par ordinateur à l'analyse morphologique des lettres. Alors qu'un OCR classique transcrit simplement des mots, notre moteur spécialisé analyse les courbes stylistiques, les proportions et les caractéristiques anatomiques."
      },
      "commercialFree": {
        "title": "Typographie de qualité commerciale sans abonnement",
        "desc": "Notre outil gratuit fait correspondre les polices payantes à d'authentiques alternatives open source sous licence SIL Open Font License :",
        "commOriginal": "ORIGINAL COMMERCIAL",
        "exploreLink": "Découvrez plus de 50 polices jumelles open source dans notre outil d'alternatives commerciales"
      },
      "digitalAssets": {
        "badge": "SCAN D'ASSETS DIGITAUX",
        "title": "Identifier les polices depuis des captures et logos",
        "desc": "L'inspiration typographique provient très souvent de captures d'écran, d'éléments graphiques et de logos de marques.",
        "card1Title": "Captures d'écran d'applications web et mobiles",
        "card1Desc": "Prenez une capture lors de votre navigation et déposez-la dans notre Screenshot Font Finder pour obtenir des réponses immédiates sans paywall.",
        "card1Link": "Lancer le scanner de captures",
        "card2Title": "Logos de marques et reconnaissance de lettrages",
        "card2Desc": "Découvrez la typographie fondamentale derrière les logos célèbres avec notre Logo Font Finder.",
        "card2Link": "Explorer le répertoire de polices de logos"
      },
      "styleTaxonomy": {
        "badge": "TAXONOMIE DES STYLES",
        "title": "Explorer les différents styles typographiques",
        "desc": "Comprendre les styles de polices permet d'affiner efficacement votre recherche :",
        "serifTitle": "Polices avec empattements (Serif)",
        "serifDesc": "Empattements décoratifs aux extrémités évoquant l'héritage et l'élégance éditoriale (ex. Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "Polices sans empattements (Sans-Serif)",
        "sansDesc": "Lignes épurées et haute lisibilité sur écran, de Montserrat la géométrique aux polices neutres comme Inter et Roboto.",
        "displayTitle": "Polices Display et Titres",
        "displayDesc": "Forte personnalité et chasses condensées conçues pour des titres à fort impact (ex. Bebas Neue, Anton, Syne).",
        "cursiveTitle": "Manuscrites et Cursives",
        "cursiveDesc": "Écriture manuscrite et calligraphie fluide. Découvrez nos polices cursives dans Handwriting Font Finder ou parcourez nos outils typographiques."
      },
      "practicalUtility": {
        "badge": "UTILITÉ PRATIQUE",
        "title": "Font Finder pour designers et développeurs",
        "desc": "ProFontFinder accélère le flux de travail à travers toutes les disciplines créatives :",
        "devTitle": "Développeurs Frontend",
        "devDesc": "Copiez directement les règles @import de Google Fonts et déclarations Tailwind. Inspectez les sites en direct avec URL Font Finder.",
        "uiTitle": "Designers UI/UX",
        "uiDesc": "Retrouvez les polices de captures et moodboards pour assurer la cohérence de vos maquettes Figma.",
        "creatorTitle": "Créateurs & Passionnés de Typographie",
        "creatorDesc": "Explorez des associations harmonieuses de titres et de textes avec notre outil interactif d'association de polices."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "Foire aux questions",
      "items": [
        {
          "q": "Qu'est-ce que What The Font Finder et comment cela fonctionne-t-il ?",
          "a": "C'est un outil typographique gratuit qui analyse le texte dans les images et captures pour identifier la police exacte ou l'alternative Google Fonts la plus proche."
        },
        {
          "q": "Google peut-il identifier une police ?",
          "a": "Google Lens sait lire du texte, mais ne gère pas les finesses typographiques ni les règles CSS font-family exactes. ProFontFinder a été conçu pour répondre à ce besoin."
        },
        {
          "q": "Comment reconnaître un type de police ?",
          "a": "Examinez la présence d'empattements, la forme des lettres \"a\" et \"g\", le contraste des traits, et téléversez une image sur ProFontFinder pour un scan automatique."
        },
        {
          "q": "Comment savoir quelle police est utilisée sur un site ?",
          "a": "Faites un clic droit puis \"Inspecter\" (F12) pour vérifier font-family. Si la police est incrustée dans une image, faites une capture et déposez-la sur ProFontFinder."
        },
        {
          "q": "Puis-je utiliser l'IA pour identifier une police ?",
          "a": "Oui. ProFontFinder utilise la vision par ordinateur et la similarité vectorielle directement dans votre navigateur sans téléverser vos fichiers sur un serveur."
        },
        {
          "q": "Existe-t-il un identificateur de polices gratuit ?",
          "a": "Oui, ProFontFinder est 100% gratuit, sans abonnement ni limites d'analyse. Toutes les polices suggérées sont libres d'usage commercial (licence SIL OFL)."
        },
        {
          "q": "Comment faire correspondre une police efficacement ?",
          "a": "Capturez une image nette et contrastée, déposez-la sur le site, validez les lettres détectées et comparez les résultats grâce au curseur interactif."
        },
        {
          "q": "Puis-je prendre en photo un texte pour trouver sa police ?",
          "a": "Oui ! Prenez en photo une affiche, un livre ou une enseigne bien éclairée et téléversez-la directement."
        },
        {
          "q": "Où puis-je trouver des polices gratuites ?",
          "a": "La référence mondiale pour les polices web gratuites est Google Fonts (fonts.google.com). Vous pouvez aussi utiliser l'ensemble de nos outils typographiques."
        },
        {
          "q": "Comment isoler une police spécifique ?",
          "a": "Cadrez un mot de 3 à 6 lettres caractéristiques (comme \"R\", \"g\", \"a\" ou \"e\") et soumettez cet extrait à ProFontFinder."
        },
        {
          "q": "Comment intégrer une police Google Fonts ?",
          "a": "Copiez le lien @import fourni dans votre feuille de style et appliquez la règle CSS correspondante, par exemple font-family: \"Inter\", sans-serif;."
        },
        {
          "q": "Comment identifier une police dans un PDF ?",
          "a": "Consultez Fichier > Propriétés > Polices. Si le texte est aplati en image, effectuez une capture d'écran et collez-la dans ProFontFinder."
        },
        {
          "q": "Peut-on créer une police avec l'IA ?",
          "a": "ProFontFinder identifie les polices existantes ; des outils génératifs comme Calligraphr ou Fontjoy permettent de concevoir de nouveaux glyphes à partir de croquis."
        },
        {
          "q": "L'outil reconnaît-il les polices manuscrites et cursives ?",
          "a": "Oui, ProFontFinder prend en charge les écritures cursives et calligraphiques. Une image nette facilite le suivi des traits liés."
        },
        {
          "q": "Quels styles typographiques sont pris en charge ?",
          "a": "Tous les styles majeurs : Sans-Serif, Serif, Monospace, Display et Cursives dans l'intégralité du catalogue officiel vérifié de Google Fonts."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "LATENCE OCR // <80MS",
      "engineReady": "Moteur d'analyse optique prêt",
      "signatures": "1 935 Signatures",
      "title": "Prêt à identifier une police ?",
      "desc": "Déposez une image ci-dessus pour isoler les lettres, calculer leur géométrie et obtenir des polices Google Fonts vérifiées.",
      "btnIdentify": "Identifier la police maintenant",
      "btnTools": "Explorer les outils typographiques",
      "badgeInBrowser": "100% Dans le navigateur",
      "badgeZeroLatency": "Zéro latence",
      "badgeTestedCss": "Intégrations CSS testées"
    }
  },
  toolsOverview: {
    meta: {
      title: 'Outils Typographiques — Utilitaires Gratuits d\'Identification de Polices',
      description: 'Utilitaires typographiques spécialisés pour trouver des alternatives commerciales gratuites, extraire les polices de logos, associer des polices et détecter les polices web.'
    },
    badge: 'SUITE D\'OUTILS',
    title: 'Outils typographiques',
    subtitle: 'Des utilitaires typographiques conçus pour des tâches ciblées. Tous gratuits, illimités et exécutés de manière privée dans votre navigateur.',
    tools: {
      commercialAlternative: {
        title: 'Trouver une alternative gratuite à une police payante',
        description: 'Téléversez une image de police commerciale et obtenez la police gratuite la plus proche que vous pouvez utiliser légalement.'
      },
      urlFontFinder: {
                            title: 'Détecter les polices depuis le lien d\'un site web',
        description: 'Entrez une URL pour extraire les polices web actives, les déclarations @font-face et les piles typographiques.'
      },
      logoFontFinder: {
        title: 'Identifier la police d\'un logo',
        description: 'Téléversez un logo pour découvrir quelle police il utilise, ainsi que des polices gratuites équivalentes.'
      },
      screenshotFontFinder: {
        title: 'Trouver la police dans une capture d\'écran',
        description: 'Les captures d\'écran offrent des contours nets et non déformés, parfaits pour une identification optimale.'
      },
      handwritingFontFinder: {
        title: 'Trouver une police manuscrite ou script',
        description: 'Les polices calligraphiques sont complexes à identifier. Voici comment obtenir un résultat précis.'
      },
      fontPairing: {
                                                    title: 'Trouver une association de polices',
        description: 'Identifiez une police, puis découvrez les typographies complémentaires qui s\'accordent parfaitement avec elle.'
      }
    },
    bottomBanner: {
      title: 'Vous recherchez le scanner optique complet ?',
      desc: 'Glissez n\'importe quelle capture d\'écran directement dans notre moteur optique pour comparer vos lettres à 1 935+ polices Google Fonts en quelques secondes.',
      button: 'Identifier la Police Maintenant'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Alternatives Gratuites aux Polices Payantes — Comparateur Typographique',
      description: 'Téléversez une image de police commerciale pour trouver des équivalents Google Fonts vérifiés et gratuits avec code CSS.'
    },
    breadcrumb: 'Alternatives aux Polices Commerciales',
    title: 'Trouver une alternative gratuite à une police payante',
    subtitle: 'Téléversez l\'image d\'une police commerciale pour obtenir des équivalents vérifiés sur Google Fonts avec code CSS prêt à l\'emploi.',
    dropzoneTitle: 'Déposez une image de police commerciale',
    dropzoneSubtitle: 'Téléversez un spécimen, extrait ou visuel pour trouver des équivalents sur Google Fonts',
    buttonText: 'Sélectionner une Image'
  },
  logoFontFinder: {
    meta: {
      title: 'Identifier la Police d\'un Logo — Détecteur de Typographies de Marques',
      description: 'Téléversez l\'image d\'un logo pour identifier sa typographie et trouver des alternatives gratuites sur Google Fonts.'
    },
    breadcrumb: 'Identificateur de Police de Logo',
    title: 'Identifier la police d\'un logo',
    subtitle: 'Téléversez un logo de marque ou un logotype pour découvrir quelle police il utilise et obtenir des alternatives gratuites.',
    dropzoneTitle: 'Déposez le logo de la marque ici',
    dropzoneSubtitle: 'Prend en charge les formats PNG, JPG et WebP avec fond transparent ou uni',
    buttonText: 'Sélectionner le Fichier du Logo'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Trouver la Police d\'une Capture d\'Écran — Collage Direct (⌘V) et OCR',
      description: 'Collez directement depuis votre presse-papiers avec ⌘V / Ctrl+V ou déposez une capture d\'écran pour identifier les polices en quelques secondes.'
    },
    breadcrumb: 'Détecteur sur Capture d\'Écran',
    title: 'Trouver la police dans une capture d\'écran',
    subtitle: 'Collez directement depuis le presse-papiers avec ⌘V ou Ctrl+V, ou déposez un fichier de capture d\'écran ci-dessous.',
    dropzoneTitle: 'Collez une capture (⌘V / Ctrl+V) ou déposez le fichier ici',
    dropzoneSubtitle: 'Prend en charge les images PNG, JPG et WebP',
    buttonText: 'Sélectionner la Capture'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Détecteur de Polices Manuscrites et Calligraphie — Reconnaissance Optique',
      description: 'Numérisez ou téléversez un échantillon d\'écriture manuelle, une signature ou une calligraphie pour trouver des polices Google Fonts correspondantes.'
    },
    breadcrumb: 'Reconnaissance d\'Écriture Manuscrite',
    title: 'Trouver une police manuscrite ou script',
    subtitle: 'Téléversez un échantillon d\'écriture manuscrite, une signature ou des lettres cursives pour identifier les polices correspondantes.',
    dropzoneTitle: 'Déposez un échantillon d\'écriture, signature ou calligraphie',
    dropzoneSubtitle: 'Prend en charge les images PNG, JPG et WebP',
    buttonText: 'Sélectionner l\'Image Manuscrite'
  },
  urlFontFinder: {
    primaryBrand: "Marque principale",
    highLegibility: "Haute lisibilité",
    visualMatch: "Correspondance visuelle :",
    cssVariables: "Variables CSS",
    notice: "Remarque :",

    meta: {
      title: 'Détecteur de Polices par URL — Analysez les Typographies de Tout Site Web',
      description: 'Analysez une URL pour extraire les polices web actives, règles @font-face, liens Google Fonts, styles typographiques et équivalents gratuits.'
    },
    badge: 'EXTRACTEUR TYPOGRAPHIQUE WEB EN DIRECT',
    title: 'Détecter les polices depuis le lien d\'un site web',
    subtitle: 'Entrez une URL pour analyser les polices actives, inspecter les règles @font-face, extraire les styles typographiques et trouver des équivalents gratuits sur Google Fonts.',
    inputPlaceholder: 'https://exemple.com',
    analyzeButton: 'Inspecter la Typographie',
    analyzingButton: 'Analyse de la typographie...',
    presetsLabel: 'Ou testez sur un exemple en ligne :',
    resultsTitle: 'Résultats de l\'Inspection Typographique',
    extractedHeading: 'Polices Détectées',
    freeTwinHeading: 'Équivalent Google Fonts',
    inspectFont: 'Inspecter la Police',
    liveSpecimenTitle: 'Aperçu en Direct (Tapez pour tester) :',
    sourcesTitle: 'Sources Typographiques et Feuilles de Style',
    cssTitle: 'Code CSS pour Production',
    copyCss: 'Copier le CSS',
    copied: 'Copié',
    howItWorksTitle: 'Comment Fonctionne la Détection de Polices par URL',
    howItWorksP1: 'Lorsque vous soumettez une adresse web, notre moteur analyse le document HTML public pour repérer les feuilles de style, les liens de fournisseurs de polices (Google Fonts, Adobe Typekit, Bunny Fonts) et les règles en ligne.',
    howItWorksP2: 'Une fois les polices principales et secondaires détectées, notre moteur géométrique leur associe des alternatives gratuites sur Google Fonts, générant du code CSS prêt à l\'emploi pour vos projets.',
    faqTitle: 'Foire Aux Questions',
    faq1: {
      q: 'Cet outil peut-il détecter les polices derrière une page de connexion ou un paywall ?',
      a: 'Le Détecteur par URL analyse uniquement les pages web publiques accessibles sans authentification. Pour les pages privées, effectuez une capture d\'écran et utilisez notre Détecteur sur Capture d\'Écran.'
    },
    faq2: {
      q: 'Quelle est la précision des équivalents Google Fonts recommandés ?',
      a: 'Notre base de données compare les métriques visuelles (hauteur d\'x, ouvertures, contrastes et terminaisons) à des polices open source vérifiées, affichant des taux de similarité géométrique supérieurs à 90%.'
    },
    faq3: {
      q: 'Des données sont-elles conservées lors de l\'analyse d\'une URL ?',
      a: 'Aucune. Les URLs analysées sont traitées en mémoire volatile et ne sont jamais enregistrées, stockées ni partagées.'
    }
  },
  fontPairing: {
    surpriseMe: "Surprenez-moi",
    invertRoles: "Inverser les rôles",
    bodySize: "Taille du corps :",
    editable: "modifiable",
    zeroLayoutShift: "Zéro décalage de mise en page",
    zeroLayoutShiftDesc: "Optimisé avec font-display swap.",
    zeroLatency: "Zéro latence",
    zeroLatencyDesc: "Traitement local par Web Worker.",
    openLicense: "Licence ouverte",
    commercialFree: "Gratuit pour usage commercial",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Outil d\'Association de Polices — Harmonies Typographiques Google Fonts',
      description: 'Explorez 31 associations de Google Fonts composées par des designers. Testez l\'harmonie entre titres et corps de texte en direct, ajustez l\'échelle et copiez les règles CSS.'
    },
    badge: 'CONCEPTION DE SYSTÈMES TYPOGRAPHIQUES',
    title: 'Trouver une association de polices',
    subtitle: 'Explorez 31 associations de Google Fonts composées par des designers. Testez l\'harmonie entre titres et corps de texte en direct, ajustez l\'échelle et copiez les règles CSS.',
    filterAll: 'Toutes les Associations',
    filterSaas: 'SaaS et Tech',
    filterEditorial: 'Éditorial et Luxe',
    filterCreative: 'Agence Créative',
    filterCorporate: 'Entreprise et Finance',
    customPreviewPlaceholder: 'Tapez un texte personnalisé pour prévisualiser toutes les associations...',
    sampleHeading: 'Systèmes de Design à Grande Échelle',
    sampleBody: 'Une typographie soignée établit une hiérarchie visuelle claire qui guide le lecteur à travers le contenu avec naturel et fluidité.',
    copyRule: 'Copier la Règle',
    openSpecimen: 'Spécimen'
  },
  about: {
    meta: {
      title: 'À Propos — ProFontFinder | Détection Typographique Transparente',
      description: 'Découvrez la mission de ProFontFinder : fournir une reconnaissance typographique rapide, privée et 100% gratuite, propulsée par Google Fonts et l\'ingénierie web moderne.'
    },
    badge: 'TRANSPARENCE TECHNIQUE ET TYPOGRAPHIE OUVERTE',
    title: 'À Propos de ProFontFinder',
    subtitle: 'Bâtir une façon plus propre, plus rapide et véritablement ouverte de découvrir, analyser et intégrer la typographie sur le web.',
    whyTitle: 'Pourquoi Nous Avons Créé ProFontFinder',
    whyP1: 'Pendant des années, identifier une police depuis une image impliquait des obstacles frustrants : inscriptions obligatoires, fenêtres publicitaires invasives, abonnements payants et recommandations de polices commerciales hors de prix.',
    whyP2: 'Nous étions convaincus que les designers et les développeurs méritaient bien mieux : un comparateur optique instantané qui identifie les polices en quelques millisecondes, trouve des alternatives libres authentiques et fournit du CSS prêt à l\'emploi sans traçage ni carte bancaire.',
    pillar1: {
      title: '100% Gratuit et Illimité',
      desc: 'Aucune limite quotidienne d\'analyse, aucun niveau payant, aucune demande d\'adresse e-mail et aucuns frais cachés. Analysez autant d\'images que nécessaire.'
    },
    pillar2: {
      title: 'Zéro Rétention d\'Images',
      desc: 'Vos images sont traitées localement dans la mémoire du navigateur via HTML5 Canvas. Nous ne téléversons, n\'enregistrons et n\'examinons jamais vos visuels privés.'
    },
    pillar3: {
      title: 'Véritable Open Source',
      desc: 'Chaque recommandation est vérifiée dans le répertoire officiel de Google Fonts sous licence SIL Open Font License pour une totale liberté commerciale.'
    },
    pillar4: {
      title: 'Rapidité Côté Client',
      desc: 'En supprimant les allers-retours avec un serveur pour vectoriser les images, la reconnaissance optique s\'opère en moins de 50 millisecondes sur votre machine.'
    },
    principlesTitle: 'Nos Principes d\'Ingénierie',
    p1: {
      title: 'Confidentialité par Conception',
      desc: 'Nous ne demandons pas votre confiance : nous avons éliminé la possibilité technique d\'enregistrer les images. Les pixels restent strictement dans la mémoire vive de l\'utilisateur.'
    },
    p2: {
      title: 'Zéro Superflu, Zéro Distraction',
      desc: 'Pas de publicités interstitielles en plein écran, pas de boutons de téléchargement trompeurs et aucun partage social forcé. L\'outil est immédiat et direct.'
    },
    p3: {
      title: 'Résultats Directement Exploitables',
      desc: 'Identifier une police n\'est que le début. Nous générons les liens @import vérifiés, les axes de graisse variable et les règles CSS font-family prêtes pour votre code.'
    },
    ctaTitle: 'Vous avez des questions ou des suggestions ?',
    ctaDesc: 'Nous améliorons en permanence notre pipeline d\'analyse et accordons une grande valeur aux retours de la communauté des développeurs.',
    ctaButton: 'Contacter l\'Équipe'
  },
  howItWorks: {
    meta: {
      title: 'Comment Ça Marche — Architecture Technique | ProFontFinder',
      description: 'Explorez le fonctionnement technique de ProFontFinder : vectorisation Canvas HTML5 côté client, analyse optique des glyphes et comparaison géométrique sur Google Fonts.'
    },
    badge: 'SPÉCIFICATION DU PIPELINE TECHNIQUE',
    title: 'Comment Fonctionne ProFontFinder',
    subtitle: 'Présentation détaillée de nos algorithmes de reconnaissance optique, de vectorisation des contours et de calcul de distance géométrique.',
    overviewTitle: 'Vue d\'Ensemble de l\'Architecture',
    overviewDesc: 'ProFontFinder fonctionne selon une architecture sans téléversement sur serveur. Chaque étape du décodage, du filtrage d\'arêtes, de l\'extraction de glyphes et de la comparaison se déroule localement dans votre navigateur via HTML5 Canvas et WebAssembly.',
    phase1: {
      title: 'Phase 1 : Ingestion et Normalisation en Mémoire Locale',
      desc: 'Lorsqu\'une image ou capture d\'écran est déposée :',
      items: [
        'Décodage dans un contexte Canvas HTML5 hors écran dans la mémoire vive du navigateur.',
        'Aucune requête réseau n\'est émise ; aucune donnée d\'image ne quitte votre appareil.',
        'Le seuillage adaptatif d\'Otsu sépare les caractères du bruit et des éléments d\'arrière-plan.',
        'Le contraste et la résolution sont normalisés pour standardiser l\'épaisseur des traits.'
      ]
    },
    phase2: {
      title: 'Phase 2 : Vectorisation Optique des Glyphes',
      desc: 'Une fois le masque binaire de l\'image établi :',
      items: [
        'L\'étiquetage en composantes connexes isole les boîtes englobantes de chaque lettre.',
        'Les algorithmes de suivi de contours calculent les sommets extérieurs et les contreformes intérieures.',
        'La mesure des proportions géométriques extrait la hauteur d\'x, la hauteur de capitale, les hampes et les jambages.',
        'Les angles des terminaisons et l\'ouverture sont catégorisés parmi les styles serif, sans-serif et display.'
      ]
    },
    phase3: {
      title: 'Phase 3 : Évaluation de Distance Géométrique sur 1 935+ Google Fonts',
      desc: 'Les signatures vectorielles extraites sont comparées à notre catalogue précompilé :',
      items: [
        'Les caractéristiques vectorielles sont converties en une empreinte normalisée compacte.',
        'La métrique de distance euclidienne compare les contours optiques aux polices Google Fonts vérifiées.',
        'Les filtres de catégories (Sans, Serif, Mono, Display, Script) réduisent l\'espace de recherche.',
        'Les scores de confiance (0-100%) traduisent la fidélité géométrique et la concordance structurelle.'
      ]
    },
    phase4: {
      title: 'Phase 4 : Génération du Code CSS pour la Production',
      desc: 'Les meilleures correspondances sont synthétisées en déclarations prêtes à être intégrées :',
      items: [
        'Balises officielles @import et <link> vers le CDN Google Fonts.',
        'Déclarations CSS font-family précises avec polices de secours système fiables.',
        'Spécifications des graisses disponibles et axes de polices variables.',
        'Liens directs vers les spécimens officiels de Google Fonts pour consulter les licences.'
      ]
    },
    canvasTitle: 'Canvas en Mémoire Côté Client',
    canvasDesc: 'En utilisant HTML5 Canvas et le traitement de pixels en mémoire vive, ProFontFinder effectue des transformations d\'image poussées sans solliciter de serveurs distants. Cela garantit une latence nulle et une confidentialité totale.',
    privacyTitle: 'Garantie de Stockage Zéro',
    privacyDesc: 'Puisqu\'aucun serveur ne reçoit vos images, vos captures d\'écran sensibles, logos inédits et créations de marques restent strictement confidentiels. À la fermeture de l\'onglet, toute la mémoire allouée est immédiatement libérée.'
  },
  privacy: {
    meta: {
      title: 'Politique de Confidentialité — ProFontFinder | Zéro Donnée Collectée',
      description: 'Consultez la Politique de Confidentialité de ProFontFinder. Découvrez comment notre moteur typographique traite les images localement sans stocker ni transmettre de données personnelles.'
    },
    badge: 'TRANSPARENCE ET PROTECTION DES DONNÉES',
    title: 'Politique de Confidentialité',
    subtitle: 'ProFontFinder a été conçu dès l\'origine pour préserver votre vie privée. Toutes les analyses typographiques s\'effectuent localement dans votre navigateur.',
    lastUpdated: 'Dernière mise à jour : Septembre 2026',
    s1Title: '1. Politique de Zéro Stockage d\'Images',
    s1P: 'ProFontFinder ne téléverse, ne stocke, ne transmet et ne conserve AUCUNE image, capture d\'écran, logo ou visuel soumis au service. L\'ensemble du traitement d\'image, de la reconnaissance optique, de la vectorisation et de l\'analyse typographique s\'exécute à 100% localement sur votre terminal dans la mémoire Canvas HTML5.',
    s2Title: '2. Collecte de Données Personnelles',
    s2P: 'Aucun compte utilisateur, mot de passe, adresse e-mail ou information de paiement n\'est nécessaire pour utiliser ProFontFinder. Vous pouvez accéder à tous les outils d\'identification typographique de manière parfaitement anonyme.',
    s3Title: '3. Cookies et Stockage Local',
    s3P: 'ProFontFinder n\'emploie aucun cookie de suivi, cookie publicitaire ou dispositif d\'empreinte numérique entre sites. Nous utilisons exclusivement le localStorage pour mémoriser votre préférence d\'affichage (thème sombre ou clair) sur votre appareil.',
    s4Title: '4. Liens Tiers et Réseaux CDN',
    s4P: 'Lors de l\'affichage ou du chargement de polices, votre navigateur peut se connecter directement au CDN de Google Fonts (fonts.googleapis.com et fonts.gstatic.com) afin d\'afficher les spécimens en direct. Ces connexions sont régies par la Politique de Confidentialité de Google.',
    s5Title: '5. Contact Relatif à la Vie Privée',
    s5P: 'Pour toute question concernant cette Politique de Confidentialité ou notre architecture sans stockage de données, vous pouvez nous écrire à support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Conditions d\'Utilisation — ProFontFinder',
      description: 'Prenez connaissance des Conditions d\'Utilisation de ProFontFinder. Des outils typographiques gratuits, ouverts et côté client destinés aux designers et développeurs.'
    },
    badge: 'DIRECTIVES LÉGALES ET D\'USAGE',
    title: 'Conditions d\'Utilisation',
    subtitle: 'Des conditions claires et transparentes pour l\'utilisation du service ProFontFinder.',
    lastUpdated: 'Dernière mise à jour : Septembre 2026',
    s1Title: '1. Acceptation des Conditions',
    s1P: 'En accédant à ProFontFinder (profontfinder.com) ou en l\'utilisant, vous acceptez d\'être lié par les présentes Conditions d\'Utilisation. Si vous êtes en désaccord avec une quelconque clause, veuillez cesser d\'utiliser le service.',
    s2Title: '2. Usage Autorisé',
    s2P: 'ProFontFinder est mis à disposition gratuitement pour les designers, développeurs et amateurs de typographie. Vous pouvez utiliser le service pour des projets personnels, commerciaux ou éducatifs sans restriction.',
    s3Title: '3. Licences Typographiques et Propriété Intellectuelle',
    s3P: 'ProFontFinder analyse la forme des lettres et propose des polices Google Fonts open source régies par la licence SIL Open Font License (OFL) ou Apache 2.0. Il incombe aux utilisateurs de vérifier les licences avant tout usage commercial.',
    s4Title: '4. Exclusion de Garanties',
    s4P: 'ProFontFinder est fourni « en l\'état » et « selon disponibilité », sans garantie d\'aucune sorte. Bien que notre chaîne d\'analyse optique vise une haute précision, nous ne pouvons garantir une exactitude absolue pour toutes les qualités d\'image.',
    s5Title: '5. Limitation de Responsabilité',
    s5P: 'En aucun cas ProFontFinder ou ses gestionnaires ne sauraient être tenus responsables de tout dommage indirect, accessoire ou consécutif découlant de l\'utilisation ou de l\'impossibilité d\'utiliser le service.',
    s6Title: '6. Modifications du Service',
    s6P: 'Nous nous réservons le droit d\'adapter ou d\'interrompre toute partie du service à tout moment et sans préavis.'
  },
  contact: {
    meta: {
      title: 'Contactez-Nous — Support et Questions | ProFontFinder',
      description: 'Contactez l\'équipe d\'ingénierie de ProFontFinder. Transmettez vos signalements de bugs, suggestions de polices, retours d\'expérience ou demandes générales.'
    },
    badge: 'PRENDRE CONTACT',
    title: 'Contact et Support',
    subtitle: 'Une question, une remarque ou un bug à signaler ? Contactez l\'équipe technique de ProFontFinder.',
    form: {
      name: 'Votre Nom',
      email: 'Adresse E-mail',
      subject: 'Objet',
      message: 'Message',
      send: 'Envoyer le Message',
      success: 'Merci ! Votre message a bien été envoyé. Notre équipe prendra connaissance de votre demande dans les meilleurs délais.'
    },
    directEmail: {
      title: 'Support par E-mail Direct',
      desc: 'Pour les demandes urgentes, partenariats techniques ou questions de sécurité, écrivez directement à notre équipe à support@profontfinder.com.'
    },
    responseTime: {
      title: 'Délai de Réponse',
      desc: 'Nous répondons généralement aux messages sous 24 à 48 heures ouvrées.'
    },
    faqTitle: 'Questions Fréquentes',
    faq1: {
      q: 'Puis-je demander l\'ajout d\'une nouvelle police Google Fonts ?',
      a: 'Notre base de données se synchronise automatiquement avec le catalogue officiel de Google Fonts. Toute nouvelle police publiée sur Google Fonts sera indexée lors de notre prochaine mise à jour.'
    },
    faq2: {
      q: 'Proposez-vous une API pour l\'identification programmatique de polices ?',
      a: 'Nous étudions actuellement la mise en place d\'une API pour développeurs destinée aux flux automatisés. N\'hésitez pas à nous faire part de vos besoins !'
    }
  },
  guides: {
    meta: {
      title: "Guides de Typographie et d'Identification de Polices — Pro Font Finder",
      description: "Guides d'experts, tutoriels pratiques et meilleures pratiques pour identifier les polices à partir d'images, associer des polices et trouver des alternatives commerciales."
    },
    badge: "Guides & Tutoriels",
    title: "Maîtrisez l'Identification de Polices et la Typographie",
    subtitle: "Tutoriels complets, astuces pratiques et méthodes de travail pour designers, développeurs et créatifs.",
    allGuides: "Tous les Guides",
    readTimeSuffix: "de lecture",
    tryTool: "Tester cet outil",
    items: [
      {
        id: "image-identification-guide",
        category: "Identification de Polices",
        tag: "Guide Essentiel",
        title: "Comment Identifier Précisément une Police à partir d'une Image ou Capture",
        desc: "Apprenez des techniques de haute précision pour préparer vos images, recadrer les glyphes et identifier des polices rares en quelques secondes.",
        readTime: "4 min",
        steps: [
          "Recadrez au plus près des caractères nets et contrastés (ex: a, g, R, Q).",
          "Alignez la ligne de base horizontalement pour une reconnaissance optimale.",
          "Importez directement dans Pro Font Finder pour une analyse vectorielle instantanée."
        ],
        toolLink: "/",
        toolName: "Ouvrir l'Identificateur d'Image"
      },
      {
        id: "commercial-alternatives-guide",
        category: "Alternatives Commerciales",
        tag: "Économie de Coûts",
        title: "Trouver des Polices Google Gratuites pour Remplacer des Polices Commerciales Chères",
        desc: "Le pense-bête des designers pour substituer Helvetica, Futura, Gotham, Proxima Nova et DIN par des fontes open-source 100% gratuites.",
        readTime: "5 min",
        steps: [
          "Identifiez les traits géométriques vs humanistes (hauteur d'x, ouvertures).",
          "Utilisez notre moteur dédié pour faire correspondre épaisseurs et proportions.",
          "Exportez vos règles CSS @import prêtes pour la production sans frais de licence."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "Voir les Alternatives Commerciales"
      },
      {
        id: "font-pairing-principles",
        category: "Association & Design",
        tag: "Bonnes Pratiques",
        title: "Les Règles d'Or de l'Association Typographique : Contraste, Hiérarchie et Harmonie",
        desc: "Ne doutez plus lors de l'association de vos fontes. Apprenez à marier titres audacieux et corps de texte ultra lisible.",
        readTime: "6 min",
        steps: [
          "Associez des titres avec empattements (Serif) à un texte Sans-Serif pour un contraste garanti.",
          "Conservez la même cohérence d'époque et d'ambiance.",
          "Testez vos combinaisons en direct dans notre Studio d'Association."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "Ouvrir le Studio d'Association"
      },
      {
        id: "inspect-web-fonts",
        category: "Technique & Web",
        tag: "Flux Développeur",
        title: "Comment Extraire et Inspecter les Polices de N'importe quel Site Web en Ligne",
        desc: "Découvrez la typographie exacte d'un site sans ouvrir les outils DevTools de Chrome ni fouiller dans des feuilles CSS minifiées.",
        readTime: "3 min",
        steps: [
          "Copiez l'URL du site souhaité.",
          "Collez-la dans notre outil URL Font Finder pour extraire les familles typographiques.",
          "Consultez les variables CSS calculées et les polices Google associées."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "Essayer URL Font Finder"
      },
      {
        id: "handwriting-identification",
        category: "Identification de Polices",
        tag: "Manuscrite & Script",
        title: "Comment Faire Correspondre des Notes Manuscrites à des Polices Cursives Digitales",
        desc: "Méthodes pour déchiffrer les lettres manuscrites et dénicher des polices Google Script modifiables avec le même charme authentique.",
        readTime: "4 min",
        steps: [
          "Isolez les lettres cursives connectées en racines identifiables.",
          "Analysez l'angle d'inclinaison, les proportions des boucles et la pression du trait.",
          "Faites correspondre instantanément avec notre catalogue de polices cursives Google."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "Identifier des Polices Manuscrites"
      },
      {
        id: "how-engine-works-guide",
        category: "Technique & Web",
        tag: "Architecture",
        title: "Dans les Coulisses : Comment ProFontFinder Combine OCR et Mathématiques Vectorielles",
        desc: "Plongez dans le traitement d'image côté client : Web Workers, détection de contours, invariants de forme et respect absolu de la vie privée.",
        readTime: "5 min",
        steps: [
          "Tous les calculs s'exécutent 100% dans la mémoire vive de votre navigateur.",
          "Zéro envoi d'image sur serveur, zéro stockage, zéro pistage.",
          "Comparaison vectorielle en moins de 100 ms parmi des centaines de polices ouvertes."
        ],
        toolLink: "/how-it-works",
        toolName: "Lire l'Architecture Technique"
      }
    ],
    faqTitle: "Foire Aux Questions sur l'Identification de Polices",
    faqs: [
      {
        q: "ProFontFinder peut-il identifier des polices sur des images floues ?",
        a: "Oui ! Notre pipeline de prétraitement effectue une normalisation du contraste, un seuillage adaptatif et un filtrage morphologique pour accentuer les contours."
      },
      {
        q: "Toutes les polices alternatives suggérées sont-elles gratuites pour un usage commercial ?",
        a: "Chaque alternative répertoriée est vérifiée sous licence open-source (SIL OFL ou Apache 2.0), ce qui les rend 100% gratuites pour vos projets commerciaux et personnels."
      },
      {
        q: "Mes images importées sont-elles conservées sur vos serveurs ?",
        a: "Jamais. Tout le traitement d'image, l'OCR et l'analyse vectorielle se font exclusivement en mémoire dans votre navigateur web."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — Page Non Trouvée | ProFontFinder',
      description: 'La page que vous recherchez n\'existe pas ou a été déplacée.'
    },
    badge: 'ERREUR 404',
    title: 'Page Non Trouvée',
    desc: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    backHome: 'Retour à l\'Accueil',
    exploreTools: 'Explorer les Outils'
  }
};
