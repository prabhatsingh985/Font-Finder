import type { TranslationSchema } from './en';

export const it: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'L\'identificatore di font da immagini pensato per gli sviluppatori. Ispeziona la geometria dei glifi, verifica autentici font open source di Google Fonts e copia codice CSS pronto per la produzione.',
    nav: {
      finder: 'Identificatore',
      tools: 'Strumenti',
      guides: "Guide",
      about: 'Chi siamo',
      identifyFont: 'Identifica',
      toggleTheme: 'Cambia tema colore',
      skipToContent: 'Salta al contenuto',
      language: 'Lingua'
    },
    footer: {
      mission: 'L\'identificatore di font da immagini pensato per gli sviluppatori. Ispeziona la geometria dei glifi, verifica autentici font open source di Google Fonts e copia codice CSS pronto per la produzione.',
      zeroStorageBadge: 'Nessun Salvataggio di Immagini • 100% nella Memoria del Browser',
      productsTitle: 'Prodotti',
      tools: {
        imageFontFinder: 'Cerca Font da Immagine',
        urlFontFinder: 'Cerca Font da URL',
        logoFontFinder: 'Identifica Font nei Loghi',
        screenshotFontFinder: 'Cerca Font da Screenshot',
        fontPairing: 'Strumento Abbinamento Font',
        handwritingMatcher: 'Riconoscimento Scrittura a Mano',
        commercialAlternatives: 'Alternative a Font Commerciali'
      },
      companyTitle: 'Azienda',
      aboutUs: 'Chi Siamo',
      howItWorks: 'Come Funziona',
      guides: "Guide e Tutorial",
      allFontTools: 'Tutti gli Strumenti Font',
      contactSupport: 'Contatti e Supporto',
      trustLegalTitle: 'Fiducia e Note Legali',
      privacyPolicy: 'Informativa sulla Privacy',
      termsOfService: 'Termini di Servizio',
      googleFonts: 'Google Fonts',
      silLicense: 'Licenza SIL Open Font',
      copyright: 'Pro Font Finder. Ispezione tipografica di precisione per sviluppatori e designer.',
      noCookies: 'Nessun cookie',
      noAccount: 'Nessuna registrazione richiesta',
      freeCommercial: 'Gratuito per uso commerciale'
    },
    buttons: {
      identifyNow: 'Identifica Font Ora',
      exploreTools: 'Esplora gli Strumenti',
      backToHome: 'Torna alla Home',
      copyCss: 'Copia CSS',
      copied: 'Copiato'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / VERIFICA DEL TESTO",
      "cropManually": "Ritaglia manualmente",
      "newImage": "Nuova immagine",
      "dragCursorInstruction": "Trascina il cursore sull'immagine per isolare un'area di testo specifica:",
      "applyAndRedetect": "Applica e rileva di nuovo",
      "detectedTextLabel": "Testo rilevato:",
      "verifyDetectedText": "Verifica il testo rilevato",
      "verifyInputPlaceholder": "Verifica o modifica il testo...",
      "inspectIndividualWords": "Ispeziona singole parole e lettere",
      "wordSegmentsLabel": "Segmenti di parole (Fai clic per isolare una parola specifica):",
      "letterGlyphsLabel": "Glifi delle lettere (Correggi singoli caratteri o rimuovi non-lettere):",
      "identifyFont": "Identifica font",
      "identifyFontFor": "Identifica font per \"{word}\"",
      "ocrBadge": "Riconoscimento Ottico dei Caratteri",
      "fetchingText": "Recupero del testo...",
      "detectingText": "Rilevamento del testo e delle forme dei caratteri...",
      "cancelAndChooseAnother": "Annulla e scegli un'altra immagine",
      "distinctFont": "Font distinto",
      "comparingLetterShapes": "CONFRONTO FORME DEI CARATTERI",
      "matchingFontsProgress": "Confronto con {count} font nel tuo browser...",
      "stageA": "FASE A: CORRISPONDENZA IMPRONTE GLIFI 16×16",
      "evaluatingContours": "Valutazione dei contorni delle lettere su {count} font...",
      "stageB": "FASE B: CLASSIFICA DEI CANDIDATI",
      "rankingMatches": "Classificazione delle corrispondenze Google Fonts più vicine...",
      "previewTextHeading": "Testo di anteprima.",
      "previewTextSubheading": "Scrivi qualsiasi testo per vederlo applicato a ogni risultato.",
      "editText": "↑ Modifica testo",
      "previewPlaceholder": "Scrivi testo per l'anteprima...",
      "bestMatch": "Miglior risultato",
      "match": "Corrispondenza",
      "designedBy": "Creato da {designer} • SIL Open Font License",
      "copyName": "Copia nome",
      "copied": "Copiato!",
      "googleFonts": "Google Fonts",
      "scanAnother": "Scansiona un'altra immagine",
      "commercialAlternative": "Alternativa commerciale:",
      "commercialAlternativeDesc": "Corrisponde allo stile di {commercial}. L'alternativa gratuita verificata su Google Fonts è {family}.",
      "compareWithImage": "Confronta con la tua immagine",
      "comparePlaceholder": "Scrivi testo da confrontare...",
      "yourImage": "La tua immagine",
      "matchedFont": "Font corrispondente",
      "typographySpecimen": "Campione tipografico",
      "closestMatchesHeading": "MIGLIORI CORRISPONDENZE GOOGLE FONTS",
      "livePreviewGoogleFonts": "Anteprima dal vivo renderizzata con Google Fonts",
      "closestRank": "più vicino",
      "freeOpenLicense": "Gratuito • Licenza aperta",
      "viewOnGoogleFonts": "Vedi su Google Fonts",
      "copyCss": "Copia CSS",
      "liveSpecimenTester": "02 / TESTER DI CAMPIONI DAL VIVO",
      "size": "Dimensione:",
      "specimenDefaultText": "Quel viticchio biondo e zeppo fa fuggire maiali e cani",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / CODICE CSS DI PRODUZIONE",
      "copy": "Copia",
      "openInGoogleFontsRepo": "Apri nel repository Google Fonts",
      "inspectSpecimenDetails": "Ispeziona dettagli del font →",
      "closestAlternatives": "04 / ALTERNATIVE VERIFICATE PIÙ VICINE",
      "viewSpecimen": "Vedi campione →",
      "opticalMatch": "{confidence}% Corrispondenza ottica",
      "errSelectWord": "Seleziona una parola da identificare.",
      "errAtLeastOneLetter": "Assicurati che sia inserita o rilevata almeno una lettera.",
      "errInvalidFormat": "Carica un'immagine in formato PNG, JPG o WebP.",
      "errFileTooLarge": "Il file supera il limite di 10 MB.",
      "errParseFailed": "Impossibile elaborare l'immagine."
  },

  home: {
    "meta": {
      "title": "Font Finder — Riconoscimento gratuito di font da immagini",
      "description": "Identifica qualsiasi font da immagini e screenshot all'istante con Font Finder. Trova alternative Google Fonts 100% gratuite e verificate."
    },
    "hero": {
      "headlinePrefix": "Identifica i font in",
      "subtitle": "Trascina uno screenshot per isolare i glifi, calcolare i contorni ottici e ottenere font Google Fonts open source verificati."
    },
    "dropzone": {
      "title": "Trascina un'immagine o incolla uno screenshot (⌘V)",
      "subtitle": "Supporta PNG, JPG, WebP • Riconoscimento 100% privato nel browser",
      "buttonText": "Seleziona file immagine"
    },
    "pipeline": {
      "badge": "ARCHITETTURA DI RICONOSCIMENTO",
      "heading": "Pipeline di riconoscimento in tre passaggi",
      "subheading": "Dai pixel bitmap non vincolati a una tipografia CSS open source verificata e pronta per la produzione.",
      "localInference": "< 150 ms Inferenza locale",
      "zeroUploads": "Nessun caricamento su server",
      "step1": {
        "phase": "FASE 01 // ACQUISIZIONE",
        "tag": "INPUT GREZZO",
        "title": "Carica o Incolla",
        "desc": "Trascina un'immagine o incolla istantaneamente dagli appunti con",
        "descSuffix": "Il ritaglio interattivo isola con precisione i contorni dei glifi.",
        "crop": "RITAGLIA",
        "autoDetect": "Rilevamento automatico",
        "footerTraffic": "Zero traffico server",
        "step": "Passaggio 1 di 3"
      },
      "step2": {
        "phase": "FASE 02 // SCANSIONE NEURALE",
        "tag": "ACCELERAZIONE GPU",
        "title": "Scansione Ottica",
        "desc": "Estrae contrasto, spessore dei tratti e impronte di glifi 16×16 localmente in memoria con rasterizzatore a precisione sub-pixel.",
        "matrix": "Matrice: Bitmap 16×16",
        "apertures": "Aperture: Geometriche",
        "vectorNodes": "Nodi vettoriali: 100% Corrispondenza",
        "footerClient": "100% WebGL Client",
        "step": "Passaggio 2 di 3"
      },
      "step3": {
        "phase": "FASE 03 // SINTESI CSS",
        "tag": "VERIFICATO OFL 1.1",
        "title": "Esporta Codice",
        "desc": "Ottieni alternative verificate di Google Fonts con regole CSS testate per la produzione di",
        "descSuffix": "regole CSS.",
        "readyToEmbed": "Pronto da incorporare",
        "footerOfl": "Gratuito commerciale OFL",
        "step": "Passaggio 3 di 3"
      }
    },
    "engineSpecs": {
      "badge": "SPECIFICHE DEL MOTORE",
      "title": "Corrispondenze open source.",
      "titleAccent": "Pronte per la produzione.",
      "desc": "Evita le trappole delle licenze commerciali. Font Finder mappa le forme delle lettere su autentiche alternative gratuite di Google Fonts.",
      "licensingModel": "Modello di licenza",
      "licensingValue": "100% Gratuito SIL Open Font License",
      "processingArch": "Architettura di elaborazione",
      "processingValue": "100% WebGL / Canvas lato client",
      "cdnIntegration": "Integrazione CDN",
      "cdnValue": "Incorporamenti diretti di Google Fonts",
      "jsonOutput": "Output JSON"
    },
    "guide": {
      "imageRecognition": {
        "badge": "RICONOSCIMENTO IMMAGINE",
        "title": "Trova un font da un'immagine",
        "desc": "Scorgere una bella tipografia è stimolante, ma identificarla da una grafica può rivelarsi difficile. Che si tratti di un poster, di una rivista o di uno screenshot, chiedersi \"che font è questo?\" è un dilemma comune nel design.",
        "cardP1": "Un identificatore di font specializzato colma il divario tra pixel statici e caratteri tipografici reali. Invece di scorrere cataloghi infiniti, estrae i contorni dei glifi e li confronta con librerie indicizzate.",
        "cardP2": "Che tu stia analizzando loghi storici, interfacce concorrenti o nuovi stili, ProFontFinder ti aiuta a trovare il font corretto all'istante con risultati garantiti."
      },
      "opticalAnalysis": {
        "badge": "ANALISI OTTICA",
        "title": "Come funziona l'identificazione dei font?",
        "desc": "L'identificazione dei font unisce computer vision e analisi morfologica dei caratteri. Mentre un comune OCR si limita a trascrivere il testo, un motore specializzato analizza curvature, proporzioni e tratti anatomici."
      },
      "commercialFree": {
        "title": "Tipografia professionale senza costi di abbonamento",
        "desc": "Il nostro strumento gratuito risolve i problemi di licenza abbinando i font commerciali ad autentiche alternative open source sotto licenza SIL Open Font License:",
        "commOriginal": "ORIGINALE COMMERCIALE",
        "exploreLink": "Esplora oltre 50 font gemelli open source nel nostro strumento di alternative commerciali"
      },
      "digitalAssets": {
        "badge": "SCANSIONE ASSET DIGITALI",
        "title": "Identifica font da screenshot e loghi",
        "desc": "L'ispirazione tipografica proviene spesso da schermate catturate online, banner e loghi aziendali.",
        "card1Title": "Screenshot di app web e mobile",
        "card1Desc": "Cattura uno scorcio dello schermo durante la navigazione e rilascialo in Screenshot Font Finder per risposte immediate senza costi.",
        "card1Link": "Avvia scanner per screenshot",
        "card2Title": "Loghi di brand e marchi denominativi",
        "card2Desc": "Scopri i caratteri alla base dei marchi famosi con Logo Font Finder e trova alternative gratuite accessibili.",
        "card2Link": "Esplora la directory dei font dei loghi"
      },
      "styleTaxonomy": {
        "badge": "TASSONOMIA DEGLI STILI",
        "title": "Esplora diversi stili di font",
        "desc": "Comprendere gli stili tipografici aiuta a perfezionare la ricerca:",
        "serifTitle": "Caratteri con grazie (Serif)",
        "serifDesc": "Tratti terminali decorativi che comunicano tradizione ed eleganza editoriale (es. Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "Caratteri senza grazie (Sans-Serif)",
        "sansDesc": "Linee pulite ed elevata leggibilità su schermo, dal geometrico Montserrat a scelte versatili come Inter e Roboto.",
        "displayTitle": "Font Display e per Titoli",
        "displayDesc": "Forte personalità e larghezze compatte pensate per titoli di grande impatto (es. Bebas Neue, Anton, Syne).",
        "cursiveTitle": "Manoscritti e Corsivi",
        "cursiveDesc": "Tratto calligrafico naturale e fluido. Scopri i font corsivi in Handwriting Font Finder o esplora i nostri strumenti tipografici."
      },
      "practicalUtility": {
        "badge": "UTILITÀ PRATICA",
        "title": "Font Finder per designer e sviluppatori",
        "desc": "ProFontFinder ottimizza i flussi di lavoro in tutte le discipline creative:",
        "devTitle": "Sviluppatori Frontend",
        "devDesc": "Copia frammenti @import di Google Fonts e classi Tailwind pronte all'uso. Analizza siti web dal vivo con URL Font Finder.",
        "uiTitle": "Designer UI/UX",
        "uiDesc": "Individua la tipografia da immagini e moodboard per garantire la coerenza dei tuoi progetti in Figma.",
        "creatorTitle": "Creativi e appassionati di tipografia",
        "creatorDesc": "Trova abbinamenti bilanciati tra titoli e testo con il nostro strumento interattivo di combinazione font."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "Domande frequenti",
      "items": [
        {
          "q": "Cos'è What The Font Finder e come funziona?",
          "a": "È uno strumento tipografico online gratuito che esamina il testo nelle immagini per individuare il font esatto o l'alternativa open source di Google Fonts più simile."
        },
        {
          "q": "Google può identificare un font?",
          "a": "Google Lens legge le parole, ma non riconosce spessori o regole CSS font-family precise. ProFontFinder è stato creato su misura per designer e sviluppatori."
        },
        {
          "q": "Come distinguere un tipo di font?",
          "a": "Osserva se ha le grazie, controlla la forma di lettere come \"a\" e \"g\", valuta il contrasto dello spessore e carica uno screenshot su ProFontFinder."
        },
        {
          "q": "Come scoprire quale font usa un sito web?",
          "a": "Fai clic destro sul testo e seleziona \"Ispeziona\" (F12) per verificare font-family. Se il testo fa parte di un'immagine o di un logo, incolla lo screenshot in ProFontFinder."
        },
        {
          "q": "Posso usare l'IA per riconoscere un font?",
          "a": "Sì. ProFontFinder sfrutta computer vision e calcolo di somiglianza vettoriale nel browser, senza mai caricare le tue immagini su server esterni."
        },
        {
          "q": "Esiste un cercatore di font gratuito?",
          "a": "Sì, ProFontFinder è completamente gratuito, senza limiti di ricerca o abbonamenti. Tutti i risultati sono font liberi per uso commerciale con licenza SIL OFL."
        },
        {
          "q": "Come trovare il font corrispondente con precisione?",
          "a": "Usa un'immagine nitida e ad alto contrasto, verifica le lettere rilevate e confronta i risultati con il cursore interattivo prima e dopo."
        },
        {
          "q": "Posso scattare una foto a un testo e trovare il font?",
          "a": "Sì! Fotografa cartelli, libri o manifesti ben illuminati e carica direttamente il file per la scansione."
        },
        {
          "q": "Dove posso trovare font gratuiti per i miei progetti?",
          "a": "La principale fonte di web font gratuiti per uso commerciale è Google Fonts (fonts.google.com). Puoi anche esplorare la nostra raccolta di strumenti."
        },
        {
          "q": "Come trovare un font specifico all'interno di una frase?",
          "a": "Ritaglia da 3 a 6 lettere caratteristiche (come \"R\", \"g\", \"a\" o \"e\") e carica solo quel ritaglio su ProFontFinder."
        },
        {
          "q": "Come utilizzo i Google Fonts nel mio codice?",
          "a": "Copia la riga @import fornita o il tag <link> nella tua pagina e inserisci nel CSS la regola: font-family: \"Inter\", sans-serif;."
        },
        {
          "q": "Come individuare un font in un file PDF?",
          "a": "Apri il PDF e controlla File > Proprietà > Font. Se il testo è un'immagine rasterizzata, cattura una schermata e incollala in ProFontFinder."
        },
        {
          "q": "È possibile creare un font con l'IA?",
          "a": "ProFontFinder identifica font già creati; software generativi come Calligraphr o Fontjoy consentono di produrre file di font da disegni personalizzati."
        },
        {
          "q": "L'identificatore riconosce i font corsivi e calligrafici?",
          "a": "Sì, riconosce anche stili calligrafici e corsivi. Un'immagine ad alta definizione garantisce la migliore tracciatura delle lettere collegate."
        },
        {
          "q": "Quali stili di font supporta ProFontFinder?",
          "a": "Supporta tutti i generi principali: Sans-Serif, Serif, Monospace, Display e Corsivi nell'intera collezione ufficiale di Google Fonts."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "LATENZA OCR // <80MS",
      "engineReady": "Motore di matching ottico pronto",
      "signatures": "1.935 Firme",
      "title": "Pronto a identificare un font?",
      "desc": "Trascina un'immagine in alto per isolare le lettere, calcolare la geometria dei contorni e ottenere font verificati di Google Fonts.",
      "btnIdentify": "Identifica il font ora",
      "btnTools": "Esplora gli strumenti font",
      "badgeInBrowser": "100% Nel browser",
      "badgeZeroLatency": "Zero latenza",
      "badgeTestedCss": "Incorporamenti CSS testati"
    }
  },
  toolsOverview: {
    meta: {
      title: 'Strumenti Tipografici — Utility Gratuite di Riconoscimento Font',
      description: 'Utility tipografiche specializzate per trovare alternative gratuite a font commerciali, estrarre font da loghi, abbinare caratteri e rilevare font web.'
    },
    badge: 'SUITE DI STRUMENTI',
    title: 'Strumenti tipografici',
    subtitle: 'Utility create appositamente per compiti tipografici mirati. Gratuite, illimitate ed eseguite in completa privacy nel tuo browser.',
    tools: {
      commercialAlternative: {
        title: 'Trova un\'alternativa gratuita a un font a pagamento',
        description: 'Carica l\'immagine di un font commerciale e trova la tipografia gratuita più vicina da usare legalmente.'
      },
      urlFontFinder: {
                            title: 'Rileva font da qualsiasi link di sito web',
        description: 'Inserisci un indirizzo URL per estrarre i web font caricati, le dichiarazioni @font-face e le famiglie tipografiche.'
      },
      logoFontFinder: {
        title: 'Identifica il font utilizzato in un logo',
        description: 'Carica un logo per scoprire quale carattere tipografico impiega e visualizzare font gratuiti equivalenti.'
      },
      screenshotFontFinder: {
        title: 'Trova il font presente in uno screenshot',
        description: 'Gli screenshot sono ideali: caratteri nitidi e privi di distorsioni assicurano la massima precisione.'
      },
      handwritingFontFinder: {
        title: 'Trova un font calligrafico o scritto a mano',
        description: 'I font corsivi e calligrafici sono complessi da classificare: ecco come ottenere risultati attendibili.'
      },
      fontPairing: {
                                                    title: 'Trova il perfetto abbinamento di font',
        description: 'Seleziona un font e scopri i caratteri complementari che si sposano con naturalezza ed equilibrio.'
      }
    },
    bottomBanner: {
      title: 'Cerchi lo scanner ottico completo?',
      desc: 'Trascina qualsiasi screenshot direttamente nel nostro motore per confrontare i caratteri con oltre 1.935 Google Fonts in pochi istanti.',
      button: 'Identifica Font Ora'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Alternative Gratuite a Font Commerciali — Comparatore Tipografico',
      description: 'Carica un\'immagine di un font a pagamento per individuare alternative verificate e gratuite di Google Fonts con codice CSS.'
    },
    breadcrumb: 'Alternative a Font Commerciali',
    title: 'Trova un\'alternativa gratuita a un font a pagamento',
    subtitle: 'Carica l\'immagine di un font commerciale per ottenere alternative gratuite su Google Fonts con codice CSS pronto per i tuoi fogli di stile.',
    dropzoneTitle: 'Trascina un\'immagine con il font commerciale',
    dropzoneSubtitle: 'Carica un saggio, un ritaglio o un elemento grafico per trovare i corrispondenti su Google Fonts',
    buttonText: 'Seleziona Immagine'
  },
  logoFontFinder: {
    meta: {
      title: 'Identifica il Font di un Logo — Riconoscimento Marchi e Alternative Gratuite',
      description: 'Carica l\'immagine di un logo per risalire alla tipografia utilizzata e individuare alternative gratuite su Google Fonts.'
    },
    breadcrumb: 'Identifica Font nei Loghi',
    title: 'Identifica il font utilizzato in un logo',
    subtitle: 'Carica l\'immagine di un logo o logotipo per scoprire il carattere tipografico e ottenere alternative gratuite.',
    dropzoneTitle: 'Trascina qui l\'immagine del logo o marchio',
    dropzoneSubtitle: 'Supporta formati PNG, JPG e WebP con sfondo trasparente o a tinta unita',
    buttonText: 'Seleziona File del Logo'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Trova Font da Screenshot — Incolla Diretto (⌘V) e Riconoscimento Ottico',
      description: 'Incolla direttamente dagli appunti con ⌘V / Ctrl+V oppure trascina uno screenshot per riconoscere i font in pochi secondi.'
    },
    breadcrumb: 'Cerca Font da Screenshot',
    title: 'Trova il font presente in uno screenshot',
    subtitle: 'Incolla direttamente dagli appunti premendo ⌘V o Ctrl+V, oppure trascina qui il file dello screenshot.',
    dropzoneTitle: 'Incolla screenshot (⌘V / Ctrl+V) o trascina il file qui',
    dropzoneSubtitle: 'Supporta immagini in formato PNG, JPG e WebP',
    buttonText: 'Seleziona Screenshot'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Identificatore di Font Manoscritti e Calligrafia — Riconoscimento Ottico',
      description: 'Carica o scansiona un saggio di scrittura a mano, una firma o una calligrafia per individuare font Google Fonts affini.'
    },
    breadcrumb: 'Riconoscimento Scrittura a Mano',
    title: 'Trova un font calligrafico o scritto a mano',
    subtitle: 'Carica o trascina una firma, un testo scritto a mano o un lettering per identificare i font corrispondenti.',
    dropzoneTitle: 'Trascina campione scritto a mano, firma o calligrafia',
    dropzoneSubtitle: 'Supporta immagini in formato PNG, JPG e WebP',
    buttonText: 'Seleziona Immagine Manoscritta'
  },
  urlFontFinder: {
    primaryBrand: "Brand principale",
    highLegibility: "Alta leggibilità",
    visualMatch: "Corrispondenza visiva:",
    cssVariables: "Variabili CSS",
    notice: "Nota:",

    meta: {
      title: 'Cerca Font da URL — Rileva i Web Font di Qualsiasi Sito Web',
      description: 'Analizza qualsiasi indirizzo URL per estrarre font web attivi, dichiarazioni @font-face, link a Google Fonts e corrispettivi gratuiti.'
    },
    badge: 'ESTRATTORE TIPOGRAFICO WEB IN DIRETTA',
    title: 'Rileva font da qualsiasi link di sito web',
    subtitle: 'Inserisci un URL attivo per esaminare i font caricati, ispezionare le regole @font-face, estrarre le famiglie tipografiche e trovare equivalenti gratuiti su Google Fonts.',
    inputPlaceholder: 'https://esempio.it',
    analyzeButton: 'Ispeziona Tipografia in Diretta',
    analyzingButton: 'Analisi tipografica in corso...',
    presetsLabel: 'Oppure prova con un sito di esempio:',
    resultsTitle: 'Risultati dell\'Ispezione Tipografica',
    extractedHeading: 'Font Estratti',
    freeTwinHeading: 'Alternativa Google Fonts',
    inspectFont: 'Ispeziona Font',
    liveSpecimenTitle: 'Anteprima in Tempo Reale (Scrivi per testare):',
    sourcesTitle: 'Sorgenti Tipografiche e Fogli di Stile',
    cssTitle: 'Blueprint CSS per la Produzione',
    copyCss: 'Copia CSS',
    copied: 'Copiato',
    howItWorksTitle: 'Come Funziona il Rilevamento dei Font da URL',
    howItWorksP1: 'Quando inserisci un indirizzo web, il nostro motore scansiona il documento HTML pubblico per rilevare fogli di stile, font provider (Google Fonts, Adobe Typekit, Bunny Fonts) e stili in linea.',
    howItWorksP2: 'Individuati i caratteri primari e secondari, il sistema li abbina ad autentiche alternative su Google Fonts, fornendo snippet CSS pronti all\'integrazione.',
    faqTitle: 'Domande Frequenti',
    faq1: {
      q: 'Questo strumento può esaminare pagine protette da login o paywall?',
      a: 'Il Rilevatore da URL opera solo su pagine pubbliche aperte. Per contenuti protetti da credenziali, effettua uno screenshot e usa il nostro Cerca Font da Screenshot.'
    },
    faq2: {
      q: 'Quanto sono affidabili i font Google Fonts consigliati?',
      a: 'Il nostro archivio raffronta proporzioni geometriche (altezza degli occhielli, aperture, spessori) con un grado di somiglianza strutturale superiore al 90%.'
    },
    faq3: {
      q: 'Vengono archiviati dati durante l\'ispezione di un URL?',
      a: 'Nessuno. Gli indirizzi inseriti per l\'analisi vengono elaborati unicamente in memoria volatile e non vengono mai salvati o ceduti.'
    }
  },
  fontPairing: {
    surpriseMe: "Sorprendimi",
    invertRoles: "Inverti ruoli",
    bodySize: "Dimensione corpo:",
    editable: "modificabile",
    zeroLayoutShift: "Zero spostamento layout",
    zeroLayoutShiftDesc: "Ottimizzato con font-display swap.",
    zeroLatency: "Zero latenza",
    zeroLatencyDesc: "Elaborazione locale tramite Web Worker.",
    openLicense: "Licenza aperta",
    commercialFree: "Uso commerciale gratuito",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Strumento Abbinamento Font — Armonie Tipografiche su Google Fonts',
      description: 'Esplora 31 combinazioni di Google Fonts realizzate da designer. Verifica la coerenza visiva tra titoli e paragrafi in tempo reale e copia le regole CSS.'
    },
    badge: 'PROGETTAZIONE DI SISTEMI TIPOGRAFICI',
    title: 'Trova il perfetto abbinamento di font',
    subtitle: 'Esplora 31 combinazioni di Google Fonts realizzate da designer. Verifica la coerenza visiva tra titoli e paragrafi in tempo reale e copia le regole CSS.',
    filterAll: 'Tutti gli Abbinamenti',
    filterSaas: 'SaaS e Tech',
    filterEditorial: 'Editoria e Lusso',
    filterCreative: 'Agenzia Creativa',
    filterCorporate: 'Aziendale e Finanza',
    customPreviewPlaceholder: 'Digita un testo di prova da visualizzare in tutte le coppie di font...',
    sampleHeading: 'Sistemi di Design su Larga Scala',
    sampleBody: 'Una tipografia ben congegnata instaura una gerarchia visiva armoniosa che guida l\'occhio del lettore lungo il testo con estrema scorrevolezza.',
    copyRule: 'Copia Regola',
    openSpecimen: 'Scheda Font'
  },
  about: {
    meta: {
      title: 'Chi Siamo — ProFontFinder | Riconoscimento Tipografico Trasparente',
      description: 'La missione di ProFontFinder: offrire un\'identificazione tipografica rapida, riservata e gratuita al 100%, basata su Google Fonts open source e moderne tecnologie browser.'
    },
    badge: 'TRASPARENZA TECNICA E TIPOGRAFIA APERTA',
    title: 'Chi Siamo — ProFontFinder',
    subtitle: 'Costruire un modo più pulito, reattivo e realmente accessibile di scoprire, analizzare e implementare la tipografia sul web.',
    whyTitle: 'Perché Abbiamo Creato ProFontFinder',
    whyP1: 'Per troppo tempo, scoprire il font presente in un\'immagine significava affrontare barriere fastidiose: registrazioni forzate, video pubblicitari invasivi, canoni a pagamento e suggerimenti di font commerciali dal costo di centinaia di euro.',
    whyP2: 'Eravamo certi che designer e sviluppatori meritassero uno strumento superiore: un comparatore ottico immediato che identifica i font in pochi millisecondi, consiglia alternative aperte autentiche e fornisce codice CSS pronto, senza tracciamenti né carte di credito.',
    pillar1: {
      title: '100% Gratuito e Illimitato',
      desc: 'Nessun limite di scansioni quotidiane, nessun livello a pagamento, nessuna richiesta di email e nessun costo nascosto. Analizza tutte le immagini che desideri.'
    },
    pillar2: {
      title: 'Nessuna Ritenzione di Immagini',
      desc: 'I tuoi file vengono processati nella memoria locale del browser tramite HTML5 Canvas. Non carichiamo, non archiviamo e non consultiamo mai le tue immagini.'
    },
    pillar3: {
      title: 'Autentico Open Source',
      desc: 'Ogni consiglio si basa sull\'archivio ufficiale di Google Fonts nel pieno rispetto della licenza SIL Open Font License per uso commerciale.'
    },
    pillar4: {
      title: 'Esecuzione Lato Client',
      desc: 'Evitando il trasferimento dei file verso server remoti, l\'elaborazione ottica si completa in meno di 50 millisecondi direttamente sul tuo dispositivo.'
    },
    principlesTitle: 'I Nostri Principi Guida',
    p1: {
      title: 'Privacy Architetturale',
      desc: 'Non chiediamo un atto di fede: abbiamo rimosso sul piano tecnico la possibilità di salvare le immagini. I pixel restano esclusivamente nella RAM dell\'utente.'
    },
    p2: {
      title: 'Zero Fronzoli, Nessuna Distrazione',
      desc: 'Nessun annuncio a pieno schermo, nessun pulsante ingannevole e nessuna richiesta di condivisione social. Lo strumento si apre subito ed è pronto all\'uso.'
    },
    p3: {
      title: 'Output Subito Pronti per il Codice',
      desc: 'Conoscere il nome del font è solo un tassello. Generiamo snippet @import collaudati, definizioni di assi variabili e regole CSS font-family per il tuo progetto.'
    },
    ctaTitle: 'Hai domande o suggerimenti?',
    ctaDesc: 'Siamo costantemente al lavoro per affinare i nostri algoritmi e apprezziamo molto i riscontri della comunità di programmatori.',
    ctaButton: 'Scrivi al Team'
  },
  howItWorks: {
    meta: {
      title: 'Come Funziona — Architettura Tipografica | ProFontFinder',
      description: 'L\'architettura alla base di ProFontFinder: vettorizzazione in Canvas HTML5 lato client, tracciamento ottico dei glifi e calcolo geometrico su Google Fonts.'
    },
    badge: 'SPECIFICHE DELLA PIPELINE TECNICA',
    title: 'Come Funziona ProFontFinder',
    subtitle: 'Uno sguardo approfondito ai nostri algoritmi di OCR, vettorizzazione dei contorni e calcolo della distanza geometrica.',
    overviewTitle: 'Panoramica dell\'Architettura',
    overviewDesc: 'ProFontFinder opera secondo una logica con zero caricamenti su server. Ciascuna fase di lettura dell\'immagine, filtraggio dei bordi, estrazione dei caratteri e confronto avviene in locale nel browser tramite HTML5 Canvas e WebAssembly.',
    phase1: {
      title: 'Fase 1: Acquisizione e Normalizzazione in Memoria',
      desc: 'Nel momento in cui rilasci un\'immagine o uno screenshot:',
      items: [
        'Viene decodificata in un contesto Canvas HTML5 fuori schermo nella memoria RAM del browser.',
        'Non viene inviata alcuna chiamata di rete; nessun byte lascia il dispositivo.',
        'La sogliatura adattiva di Otsu separa le lettere da sfondi complessi e artefatti visivi.',
        'Contrasto e risoluzione vengono pareggiati per uniformare lo spessore delle aste.'
      ]
    },
    phase2: {
      title: 'Fase 2: Vettorizzazione Ottica dei Glifi',
      desc: 'Una volta definita la maschera binarizzata:',
      items: [
        'L\'analisi delle componenti connesse isola i riquadri delimitatori dei singoli caratteri.',
        'Algoritmi di contour-tracing determinano il perimetro esterno e gli spazi vuoti interni.',
        'Le misurazioni proporzionali ricavano altezza della x, altezza delle maiuscole, ascendenti e discendenti.',
        'L\'inclinazione delle terminazioni e l\'ampiezza dei tagli vengono catalogate tra serif, sans e display.'
      ]
    },
    phase3: {
      title: 'Fase 3: Misurazione Geometrica su 1.935+ Google Fonts',
      desc: 'Le caratteristiche estratte vengono confrontate con la nostra banca dati indicizzata:',
      items: [
        'I tratti vettoriali sono tradotti in un\'impronta digitale sintetica e normalizzata.',
        'Il calcolo della distanza euclidea misura l\'affinità con i caratteri autenticati di Google Fonts.',
        'I filtri di categoria (Sans, Serif, Mono, Display, Script) restringono il raggio d\'azione.',
        'La percentuale di confidenza (0-100%) illustra il grado di corrispondenza morfologica.'
      ]
    },
    phase4: {
      title: 'Fase 4: Generazione di Codice CSS per la Produzione',
      desc: 'Le migliori rispondenze sono raccolte in blocchi di codice pronti per essere inseriti nei progetti:',
      items: [
        'Tag ufficiali @import e <link> con puntamento al CDN di Google Fonts.',
        'Dichiarazioni CSS font-family corrette corredate da font di riserva generici.',
        'Elenco dettagliato dei pesi disponibili e parametri per font variabili.',
        'Collegamenti alle pagine dei saggi su Google Fonts per visionare le clausole di licenza.'
      ]
    },
    canvasTitle: 'Canvas in Memoria Lato Client',
    canvasDesc: 'Operando su Canvas HTML5 e manipolando i pixel direttamente in RAM, ProFontFinder compie trasformazioni visive complesse senza ricorrere a server dedicati. Ne scaturiscono reattività istantanea e totale riservatezza.',
    privacyTitle: 'Garanzia di Nessun Salvataggio',
    privacyDesc: 'Dato che nessun server esterno riceve i tuoi file, bozze riservate, loghi inediti e screenshot confidenziali rimangono protetti al 100%. Chiudendo la pagina web, la memoria allocata viene liberata seduta stante.'
  },
  privacy: {
    meta: {
      title: 'Informativa sulla Privacy — ProFontFinder | Raccolta Dati Zero',
      description: 'Leggi l\'Informativa sulla Privacy di ProFontFinder. Scopri come il nostro motore analizza le immagini localmente senza memorizzare né trasferire dati personali.'
    },
    badge: 'TRASPARENZA E PROTEZIONE DEI DATI',
    title: 'Informativa sulla Privacy',
    subtitle: 'ProFontFinder è concepito sin dalle fondamenta per tutelare i tuoi dati. Ogni elaborazione tipografica viene eseguita localmente nel tuo browser.',
    lastUpdated: 'Ultimo aggiornamento: Settembre 2026',
    s1Title: '1. Politica di Non Archiviazione delle Immagini',
    s1P: 'ProFontFinder NON carica, non memorizza, non inoltra né trattiene alcuna immagine, screenshot, logo o elemento visivo inserito nel servizio. Tutte le procedure di elaborazione, OCR, vettorizzazione e comparazione tipografica hanno luogo per intero sul tuo dispositivo nella memoria Canvas HTML5.',
    s2Title: '2. Raccolta di Dati Personali',
    s2P: 'Non è richiesto alcun profilo utente, credenziale, indirizzo di posta o dato bancario per fruire dei servizi di ProFontFinder. Puoi adoperare tutti gli strumenti di identificazione in forma completamente anonima.',
    s3Title: '3. Cookie e Memoria Locale',
    s3P: 'ProFontFinder non impiega cookie di tracciamento, cookie pubblicitari né identificatori univoci cross-site. Ci limitiamo a utilizzare il localStorage per conservare sul dispositivo la preferenza di stile (tema scuro o chiaro).',
    s4Title: '4. Collegamenti Esterni e CDN',
    s4P: 'Nella visualizzazione e nel caricamento delle anteprime dei caratteri, il browser può interfacciarsi con il CDN di Google Fonts (fonts.googleapis.com e fonts.gstatic.com). A tali scambi si applica l\'Informativa sulla Privacy di Google.',
    s5Title: '5. Richieste sulla Privacy',
    s5P: 'Per qualunque quesito relativo a questa informativa o alla nostra architettura con assenza di archiviazione dati, puoi scriverci a support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Termini di Servizio — ProFontFinder',
      description: 'Esamina i Termini di Servizio di ProFontFinder. Strumenti tipografici gratuiti, aperti e basati sul browser dedicati a grafici e sviluppatori.'
    },
    badge: 'LINEE GUIDA E NOTE LEGALI',
    title: 'Termini di Servizio',
    subtitle: 'Accordi lineari e trasparenti per l\'utilizzo del servizio ProFontFinder.',
    lastUpdated: 'Ultimo aggiornamento: Settembre 2026',
    s1Title: '1. Accettazione dei Termini',
    s1P: 'Accedendo o usufruendo di ProFontFinder (profontfinder.com), l\'utente accetta di sottostare a questi Termini di Servizio. Qualora non si concordi con i punti indicati, si è invitati a non proseguire nella navigazione.',
    s2Title: '2. Utilizzo Consentito',
    s2P: 'ProFontFinder viene offerto come strumento gratuito a beneficio di sviluppatori, grafici e appassionati di caratteri tipografici. L\'uso è libero sia per iniziative personali, sia per progetti didattici e commerciali.',
    s3Title: '3. Licenze dei Caratteri e Proprietà Intellettuale',
    s3P: 'ProFontFinder analizza il disegno delle lettere e propone font open source reperibili su Google Fonts regolati da licenza SIL Open Font License (OFL) o Apache 2.0. Spetta all\'utente accertarsi della licenza appropriata prima dell\'impiego in contesti commerciali.',
    s4Title: '4. Esclusione di Garanzie',
    s4P: 'ProFontFinder viene fornito "così com\'è" e "in base alla disponibilità", senza garanzie esplicite o implicite. Sebbene il meccanismo ottico persegua un elevato grado di fedeltà, non viene assicurata la precisione assoluta su immagini a bassa definizione.',
    s5Title: '5. Limitazione di Responsabilità',
    s5P: 'In nessun caso ProFontFinder o i suoi gestori potranno essere ritenuti responsabili per eventuali danni indiretti, accidentali o consequenziali scaturiti dall\'utilizzo o dall\'impossibilità di fruire del servizio.',
    s6Title: '6. Modifiche al Servizio',
    s6P: 'Ci riserviamo la facoltà di variare o interrompere qualsiasi funzionalità della piattaforma in ogni momento e senza obbligo di notifica preventiva.'
  },
  contact: {
    meta: {
      title: 'Contatti — Assistenza e Richieste | ProFontFinder',
      description: 'Mettiti in contatto con il team di sviluppo di ProFontFinder. Segnala anomalie, suggerisci nuovi caratteri, invia commenti o formula richieste di carattere generale.'
    },
    badge: 'SCRIVICI',
    title: 'Contatti e Supporto',
    subtitle: 'Hai domande, consigli o vuoi segnalare un errore? Mettiti in contatto con il team tecnico di ProFontFinder.',
    form: {
      name: 'Il Tuo Nome',
      email: 'Indirizzo E-mail',
      subject: 'Oggetto',
      message: 'Messaggio',
      send: 'Invia Messaggio',
      success: 'Grazie! Abbiamo ricevuto la tua comunicazione. Il nostro staff prenderà in carico la richiesta al più presto.'
    },
    directEmail: {
      title: 'Indirizzo E-mail Diretto',
      desc: 'Per comunicazioni prioritarie, accordi di integrazione o tematiche relative alla sicurezza, scrivici a support@profontfinder.com.'
    },
    responseTime: {
      title: 'Tempi Medi di Risposta',
      desc: 'Di consueto forniamo riscontro entro 24-48 ore lavorative.'
    },
    faqTitle: 'Domande Ricorrenti',
    faq1: {
      q: 'È possibile richiedere l\'inserimento di un nuovo font Google Fonts?',
      a: 'Il nostro database è allineato periodicamente con il catalogo ufficiale di Google Fonts. I nuovi font distribuiti saranno automaticamente considerati nel ciclo di sincronizzazione successivo.'
    },
    faq2: {
      q: 'Mettete a disposizione un\'API per l\'identificazione automatica?',
      a: 'Stiamo vagliando l\'introduzione di un\'API dedicata a flussi automatizzati per sviluppatori. Raccontaci pure le tue necessità d\'uso!'
    }
  },
  guides: {
    meta: {
      title: "Guide di Tipografia e Identificazione Font — Pro Font Finder",
      description: "Guide per esperti, tutorial pratici e best practice per identificare font da immagini, combinare caratteri tipografici e trovare alternative commerciali gratuite."
    },
    badge: "Guide & Tutorial",
    title: "Padroneggia l'Identificazione dei Font e la Tipografia",
    subtitle: "Tutorial approfonditi, consigli pratici e flussi di lavoro per designer, sviluppatori e appassionati di tipografia.",
    allGuides: "Tutte le Guide",
    readTimeSuffix: "di lettura",
    tryTool: "Prova Questo Strumento",
    items: [
      {
        id: "image-identification-guide",
        category: "Identificazione Font",
        tag: "Guida Essenziale",
        title: "Come Identificare con Precisione Qualsiasi Font da un'Immagine o Screenshot",
        desc: "Tecniche ad alta precisione per preparare le immagini, ritagliare le linee di base dei glifi e identificare font rari in pochi secondi.",
        readTime: "4 min",
        steps: [
          "Ritaglia accuratamente attorno a caratteri nitidi e ad alto contrasto (es. a, g, R, Q).",
          "Allinea orizzontalmente la linea di base per migliorare la precisione OCR.",
          "Carica direttamente su Pro Font Finder per un'analisi vettoriale immediata."
        ],
        toolLink: "/",
        toolName: "Apri Trova Font da Immagine"
      },
      {
        id: "commercial-alternatives-guide",
        category: "Alternative Commerciali",
        tag: "Risparmio Costi",
        title: "Trovare Font Google Gratuiti per Sostituire Costosi Caratteri Commerciali",
        desc: "La guida per designer: sostituisci Helvetica, Futura, Gotham, Proxima Nova e DIN con font open-source 100% gratuiti per uso commerciale.",
        readTime: "5 min",
        steps: [
          "Individua tratti geometrici vs umanisti (altezza x, aperture, terminali).",
          "Usa il nostro motore per confrontare spessore dei tratti e proporzioni.",
          "Esporta regole CSS @import pronte per la produzione a costo zero."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "Esplora Alternative Commerciali"
      },
      {
        id: "font-pairing-principles",
        category: "Abbinamento e Design",
        tag: "Migliori Pratiche",
        title: "Le Regole d'Oro dell'Abbinamento Tipografico: Contrasto, Gerarchia e Armonia",
        desc: "Elimina ogni dubbio nell'abbinamento dei caratteri. Impara a combinare titoli d'impatto con testi di lettura chiari e leggibili.",
        readTime: "6 min",
        steps: [
          "Abbina titoli Serif a testi Sans-Serif (o viceversa) per un contrasto visivo garantito.",
          "Mantieni armonia stilistica ed epoca del font.",
          "Testa gli abbinamenti in tempo reale nel nostro Studio di Abbinamento Font."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "Apri Studio di Abbinamento"
      },
      {
        id: "inspect-web-fonts",
        category: "Tecnico e Web",
        tag: "Flusso Sviluppatore",
        title: "Come Estrarre e Ispezionare i Font da Qualsiasi Sito Web Online",
        desc: "Scopri quale tipografia usa un sito web senza aprire Chrome DevTools o frugare nei file CSS minificati.",
        readTime: "3 min",
        steps: [
          "Copia l'URL del sito web da analizzare.",
          "Incolla nello strumento Trova Font da URL per estrarre le famiglie di caratteri.",
          "Ispeziona variabili CSS calcolate, catene di fallback e link Google Fonts."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "Prova Trova Font da URL"
      },
      {
        id: "handwriting-identification",
        category: "Identificazione Font",
        tag: "Manoscritto & Calligrafia",
        title: "Come Associare Note Scritte a Mano a Font Corsivi Digitali",
        desc: "Tecniche per decifrare lettere manoscritte e trovare font corsivi Google modificabili con lo stesso fascino espressivo.",
        readTime: "4 min",
        steps: [
          "Isola i caratteri corsivi uniti in radici di lettere riconoscibili.",
          "Analizza angolo di inclinazione, proporzioni dei tratti e variazione di pressione.",
          "Confronta istantaneamente con il catalogo dei font corsivi verificati di Google."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "Abbina Font Manoscritti"
      },
      {
        id: "how-engine-works-guide",
        category: "Tecnico e Web",
        tag: "Architettura",
        title: "Dietro le Quinte: Come Funziona l'OCR nel Browser e la Matematica Vettoriale",
        desc: "Panoramica sull'elaborazione lato client: Web Workers, rilevamento dei bordi, invarianti di forma e massima privacy senza server.",
        readTime: "5 min",
        steps: [
          "Tutta l'elaborazione dell'immagine avviene al 100% nella memoria del tuo browser.",
          "Nessun caricamento su server, nessun salvataggio, nessun tracciamento.",
          "Confronto vettoriale in meno di 100 ms su centinaie di font open-source."
        ],
        toolLink: "/how-it-works",
        toolName: "Leggi Architettura Tecnica"
      }
    ],
    faqTitle: "Domande Frequenti sull'Identificazione dei Font",
    faqs: [
      {
        q: "ProFontFinder può identificare font da immagini sfocate o a bassa risoluzione?",
        a: "Sì! La pipeline include normalizzazione del contrasto, binarizzazione adattiva e filtri morfologici per risaltare i contorni prima del confronto."
      },
      {
        q: "Tutti i font alternativi consigliati sono gratuiti per uso commerciale?",
        a: "Tutti i font alternativi catalogati sono distribuiti con licenze open-source (SIL OFL o Apache 2.0), rendendoli 100% gratuiti anche per progetti commerciali."
      },
      {
        q: "Le immagini caricate vengono salvate sui vostri server?",
        a: "Mai. Tutte le operazioni di analisi, OCR e calcolo vettoriale si svolgono in locale nella memoria del tuo browser."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — Pagina Non Trovata | ProFontFinder',
      description: 'La pagina richiesta non esiste o è stata spostata.'
    },
    badge: 'ERRORE 404',
    title: 'Pagina Non Trovata',
    desc: 'La pagina richiesta non esiste o è stata spostata.',
    backHome: 'Torna alla Home',
    exploreTools: 'Esplora gli Strumenti'
  }
};
