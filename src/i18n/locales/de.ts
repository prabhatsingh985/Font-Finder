import type { TranslationSchema } from './en';

export const de: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'Der Bild-Schrifterkenner für Entwickler. Untersuchen Sie Schriftgeometrie, finden Sie verifizierte Open-Source-Google-Fonts und kopieren Sie produktionsreifen CSS-Code.',
    nav: {
      finder: 'Finder',
      tools: 'Werkzeuge',
      guides: "Anleitungen",
      about: 'Über uns',
      identifyFont: 'Erkennen',
      toggleTheme: 'Farbdesign wechseln',
      skipToContent: 'Zum Inhalt springen',
      language: 'Sprache'
    },
    footer: {
      mission: 'Der Bild-Schrifterkenner für Entwickler. Untersuchen Sie Schriftgeometrie, finden Sie verifizierte Open-Source-Google-Fonts und kopieren Sie produktionsreifen CSS-Code.',
      zeroStorageBadge: 'Keine Bildspeicherung • 100% Client-seitig im Browser-RAM',
      productsTitle: 'Produkte',
      tools: {
        imageFontFinder: 'Bild-Schriftarten-Finder',
        urlFontFinder: 'URL-Schriftarten-Finder',
        logoFontFinder: 'Logo-Schrifterkennung',
        screenshotFontFinder: 'Screenshot-Schriftarten-Finder',
        fontPairing: 'Schriftkombinations-Tool',
        handwritingMatcher: 'Handschrifterkennung',
        commercialAlternatives: 'Kommerzielle Schrift-Alternativen'
      },
      companyTitle: 'Unternehmen',
      aboutUs: 'Über uns',
      howItWorks: 'Funktionsweise',
      guides: "Anleitungen & Ratgeber",
      allFontTools: 'Alle Schrift-Werkzeuge',
      contactSupport: 'Kontakt & Support',
      trustLegalTitle: 'Vertrauen & Rechtliches',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfService: 'Nutzungsbedingungen',
      googleFonts: 'Google Fonts',
      silLicense: 'SIL Open Font License',
      copyright: 'Pro Font Finder. Präzise typografische Analyse für Entwickler und Designer.',
      noCookies: 'Keine Cookies',
      noAccount: 'Keine Registrierung erforderlich',
      freeCommercial: 'Kostenlos für kommerzielle Nutzung'
    },
    buttons: {
      identifyNow: 'Schriftart jetzt erkennen',
      exploreTools: 'Werkzeuge entdecken',
      backToHome: 'Zur Startseite',
      copyCss: 'CSS kopieren',
      copied: 'Kopiert'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / TEXTÜBERPRÜFUNG",
      "cropManually": "Manuell zuschneiden",
      "newImage": "Neues Bild",
      "dragCursorInstruction": "Ziehen Sie den Mauszeiger über das Bild, um einen bestimmten Textbereich zu isolieren:",
      "applyAndRedetect": "Anwenden & neu erkennen",
      "detectedTextLabel": "Erkannter Text:",
      "verifyDetectedText": "Erkannten Text überprüfen",
      "verifyInputPlaceholder": "Text überprüfen oder bearbeiten...",
      "inspectIndividualWords": "Einzelne Wörter & Buchstaben untersuchen",
      "wordSegmentsLabel": "Wortsegmente (Klicken, um ein bestimmtes Wort zu isolieren):",
      "letterGlyphsLabel": "Buchstabenglyphen (Einzelne Zeichen korrigieren oder Nicht-Buchstaben entfernen):",
      "identifyFont": "Schriftart erkennen",
      "identifyFontFor": "Schriftart für \"{word}\" erkennen",
      "detectingText": "Erkenne Text und Buchstabenformen...",
      "distinctFont": "Besondere Schriftart",
      "comparingLetterShapes": "BUCHSTABENFORMEN VERGLEICHEN",
      "matchingFontsProgress": "Abgleich mit {count} Schriftarten in Ihrem Browser...",
      "stageA": "STUFE A: 16×16 GLYPHEN-FINGERABDRUCK-ABGLEICH",
      "evaluatingContours": "Buchstabenkonturen werden für {count} Schriftarten ausgewertet...",
      "stageB": "STUFE B: KANDIDATEN-RANGLISTE",
      "rankingMatches": "Nächste Google Fonts-Treffer werden ermittelt...",
      "previewTextHeading": "Vorschautext.",
      "previewTextSubheading": "Geben Sie beliebigen Text ein, um ihn in jedem Treffer zu sehen.",
      "editText": "↑ Text bearbeiten",
      "previewPlaceholder": "Text eingeben für Vorschau...",
      "bestMatch": "Bester Treffer",
      "match": "Treffer",
      "designedBy": "Entworfen von {designer} • SIL Open Font License",
      "copyName": "Name kopieren",
      "copied": "Kopiert!",
      "googleFonts": "Google Fonts",
      "scanAnother": "Anderes Bild scannen",
      "commercialAlternative": "Kommerzielle Alternative:",
      "commercialAlternativeDesc": "Entspricht dem Stil von {commercial}. Kostenlose verifizierte Google Fonts-Alternative ist {family}.",
      "compareWithImage": "Mit Ihrem Bild vergleichen",
      "comparePlaceholder": "Text zum Vergleichen eingeben...",
      "yourImage": "Ihr Bild",
      "matchedFont": "Erkannte Schriftart",
      "typographySpecimen": "Typografie-Probe",
      "closestMatchesHeading": "NÄCHSTE GOOGLE FONTS-TREFFER",
      "livePreviewGoogleFonts": "Live-Vorschau gerendert mit Google Fonts",
      "closestRank": "am nächsten",
      "freeOpenLicense": "Kostenlos • Freie Lizenz",
      "viewOnGoogleFonts": "Auf Google Fonts ansehen",
      "copyCss": "CSS kopieren",
      "liveSpecimenTester": "02 / LIVE-SCHRIFTMUSTER-TESTER",
      "size": "Größe:",
      "specimenDefaultText": "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern",
      "weightLight": "Leicht 300",
      "weightRegular": "Normal 400",
      "weightSemiBold": "Halbfett 600",
      "weightBold": "Fett 700",
      "productionCssBlueprint": "03 / PRODUKTIONS-CSS-BAUPLAN",
      "copy": "Kopieren",
      "openInGoogleFontsRepo": "Im Google Fonts-Verzeichnis öffnen",
      "inspectSpecimenDetails": "Schriftdetails untersuchen →",
      "closestAlternatives": "04 / NÄCHSTE VERIFIZIERTE ALTERNATIVEN",
      "viewSpecimen": "Schriftmuster ansehen →",
      "opticalMatch": "{confidence}% Optische Übereinstimmung",
      "errSelectWord": "Bitte wählen Sie ein Wort zur Erkennung aus.",
      "errAtLeastOneLetter": "Bitte stellen Sie sicher, dass mindestens ein Buchstabe eingegeben oder erkannt wurde.",
      "errInvalidFormat": "Bitte laden Sie ein PNG-, JPG- oder WebP-Bild hoch.",
      "errFileTooLarge": "Die Datei überschreitet das Limit von 10 MB.",
      "errParseFailed": "Bild konnte nicht verarbeitet werden."
  },

  home: {
    "meta": {
      "title": "Font Finder — Kostenlose Schriftarterkennung per Bild",
      "description": "Erkennen Sie jede Schriftart aus Bildern und Screenshots im Handumdrehen mit Font Finder. Analysieren Sie Buchstabenformen und erhalten Sie 100% kostenlose, verifizierte Google-Fonts-Alternativen."
    },
    "hero": {
      "headlinePrefix": "Schriftarten erkennen in",
      "subtitle": "Ziehen Sie einen Screenshot hinein, um Buchstabenformen zu isolieren, optische Konturen zu berechnen und verifizierte Open-Source-Google-Fonts zu erhalten."
    },
    "dropzone": {
      "title": "Bild ablegen oder Screenshot einfügen (⌘V)",
      "subtitle": "Unterstützt PNG, JPG, WebP • 100% private Erkennung im Browser",
      "buttonText": "Bilddatei auswählen"
    },
    "pipeline": {
      "badge": "ERKENNUNGS-ARCHITEKTUR",
      "heading": "Drei-Stufen-Erkennungspipeline",
      "subheading": "Von einfachen Bitmap-Pixeln zu verifizierter, produktionsreifer Open-Source-CSS-Typografie.",
      "localInference": "< 150 ms lokale Inferenz",
      "zeroUploads": "Keine Server-Uploads",
      "step1": {
        "phase": "PHASE 01 // AUFNAHME",
        "tag": "ROHE EINGABE",
        "title": "Hochladen oder Einfügen",
        "desc": "Ziehen Sie ein Bild hinein oder fügen Sie es direkt mit",
        "descSuffix": "aus der Zwischenablage ein. Interaktiver Zuschnitt isoliert Glyphenkonturen.",
        "crop": "ZUSCHNITT",
        "autoDetect": "Automatisch erkennen",
        "footerTraffic": "Kein Server-Datenverkehr",
        "step": "Schritt 1 von 3"
      },
      "step2": {
        "phase": "PHASE 02 // NEURALER SCAN",
        "tag": "GPU-BESCHLEUNIGT",
        "title": "Optischer Scan",
        "desc": "Extrahiert Kontrast, Strichstärken und 16×16-Glyphen-Fingerabdrücke lokal im Speicher mit Subpixel-Präzisions-Rasterizer.",
        "matrix": "Matrix: 16×16 Bitmaps",
        "apertures": "Öffnungen: Geometrisch",
        "vectorNodes": "Vektorknoten: 100% Übereinstimmung",
        "footerClient": "100% Client-WebGL",
        "step": "Schritt 2 von 3"
      },
      "step3": {
        "phase": "PHASE 03 // CSS-SYNTHESE",
        "tag": "OFL 1.1 VERIFIZIERT",
        "title": "Code exportieren",
        "desc": "Erhalten Sie verifizierte Google Fonts-Alternativen mit praxiserprobten",
        "descSuffix": "CSS-Regeln.",
        "readyToEmbed": "Bereit zum Einbinden",
        "footerOfl": "Kostenlos kommerziell OFL",
        "step": "Schritt 3 von 3"
      }
    },
    "engineSpecs": {
      "badge": "ENGINE-SPEZIFIKATIONEN",
      "title": "Open-Source-Treffer.",
      "titleAccent": "Produktionsreif.",
      "desc": "Vermeiden Sie kommerzielle Lizenzfallen. Font Finder ordnet Bitmap-Buchstabenformen authentischen, kostenlosen Google Fonts-Alternativen zu.",
      "licensingModel": "Lizenzmodell",
      "licensingValue": "100% freie SIL Open Font License",
      "processingArch": "Verarbeitungsarchitektur",
      "processingValue": "100% Client-seitiges WebGL / Canvas",
      "cdnIntegration": "CDN-Integration",
      "cdnValue": "Direkte Google Fonts-Einbindungen",
      "jsonOutput": "JSON-Ausgabe"
    },
    "guide": {
      "imageRecognition": {
        "badge": "BILDERKENNUNG",
        "title": "Schriftart aus einem Bild finden",
        "desc": "Eine auffällige Schriftart in freier Wildbahn zu entdecken ist inspirierend, aber sie anhand einer flachen Grafik zu identifizieren, kann schwierig sein. Ob auf Plakaten, Magazin-Layouts, Bannern oder Screenshots: Die Frage \"Welche Schriftart ist das?\" ist eine häufige Hürde im visuellen Design.",
        "cardP1": "Ein dedizierter Schriftarten-Finder aus Bildern schließt die Lücke zwischen statischen Rasterpixeln und echten typografischen Schriftarten. Statt Schriftkataloge zu durchforsten, extrahiert ein optischer Bild-Font-Finder Glyphenstrukturen und gleicht sie mit indexierten Bibliotheken ab.",
        "cardP2": "Ob bei der Überprüfung von Markenidentitäten, der Analyse von Mitbewerber-Oberflächen oder der Typografie-Recherche: Ein optischer Bild-zu-Schrift-Finder vereinfacht die Entdeckung. ProFontFinder hilft Ihnen, diese Schriftart sofort und mit verlässlichen Ergebnissen zu finden."
      },
      "opticalAnalysis": {
        "badge": "OPTISCHE ANALYSE",
        "title": "Wie funktioniert die Schriftarterkennung?",
        "desc": "Die Schriftarterkennung kombiniert Computer Vision mit typografischer Buchstabenform-Analyse. Während herkömmliche OCR lediglich Wörter transkribiert, analysiert ein spezialisierter Schriftart-Erkenner stilistische Kurven, Proportionen und anatomische Merkmale."
      },
      "commercialFree": {
        "title": "Kommerzielle Typografie ohne Abonnementgebühren",
        "desc": "Unser kostenloser Schriftarten-Finder löst dieses Problem, indem er kommerzielle Schriften mit authentischen Open-Source-Alternativen unter der SIL Open Font License abgleicht:",
        "commOriginal": "KOMMERZIELLES ORIGINAL",
        "exploreLink": "Entdecken Sie 50+ kuratierte Open-Source-Schrift-Zwillinge in unserem Tool für kommerzielle Alternativen"
      },
      "digitalAssets": {
        "badge": "DIGITALE ASSET-ERFASSUNG",
        "title": "Schriftarten aus Screenshots und Logos erkennen",
        "desc": "Typografie-Inspiration entsteht häufig aus Screenshots, Grafiken und Marken-Wortmarken.",
        "card1Title": "Screenshots von Web- und Mobil-Apps",
        "card1Desc": "Machen Sie beim Surfen einen Bildschirmausschnitt und ziehen Sie ihn in unseren Screenshot Font Finder. Wenn Sie sich fragen \"Welche Schrift ist das?\", erhalten Sie sofort Antworten ohne Bezahlschranke.",
        "card1Link": "Screenshot-Scanner starten",
        "card2Title": "Markenlogos & Wortmarken-Erkennung",
        "card2Desc": "Entdecken Sie die grundlegende Typografie hinter bekannten Marken mit unserem Logo Font Finder, der individuelles Kerning wieder auf zugängliche Schriftfamilien zurückführt.",
        "card2Link": "Markenlogo-Schriftenverzeichnis erkunden"
      },
      "styleTaxonomy": {
        "badge": "STIL-TAXONOMIE",
        "title": "Verschiedene Schriftstile erkunden",
        "desc": "Das Verständnis von Schriftstilen hilft bei der Verfeinerung Ihrer typografischen Suche:",
        "serifTitle": "Serifen-Schriften",
        "serifDesc": "Dekorative Füßchen an Strichenden vermitteln Tradition und Eleganz (z. B. Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "Sans-Serif-Schriften",
        "sansDesc": "Klare Linien und hohe Lesbarkeit am Bildschirm von geometrischer Montserrat bis hin zu neutralen Allroundern wie Inter und Roboto.",
        "displayTitle": "Display- & Überschriftsschriften",
        "displayDesc": "Ausdrucksstarke Persönlichkeit und kompakte Breiten für wirkungsvolle Hero-Titel (z. B. Bebas Neue, Anton, Syne).",
        "cursiveTitle": "Handschriften & Kursiv",
        "cursiveDesc": "Organische Handschrift und Kalligrafie. Entdecken Sie natürliche Schreibschriften in unserem Handschrift-Font-Finder oder durchstöbern Sie unsere Typografie-Werkzeuge."
      },
      "practicalUtility": {
        "badge": "PRAKTISCHER NUTZEN",
        "title": "Font Finder für Designer und Entwickler",
        "desc": "ProFontFinder optimiert Workflows über alle kreativen Disziplinen hinweg:",
        "devTitle": "Frontend-Entwickler",
        "devDesc": "Kopieren Sie verifizierte Google Fonts @import-Snippets und Tailwind-Deklarationen direkt. Prüfen Sie Live-Websites mit unserem URL Font Finder.",
        "uiTitle": "UI/UX-Designer",
        "uiDesc": "Gleichen Sie Typografie aus Kunden-Screenshots und Moodboards ab, um Figma-Designs konsistent zu halten.",
        "creatorTitle": "Kreative & Typografie-Begeisterte",
        "creatorDesc": "Erkunden Sie harmonische Kombinationen von Überschriften und Fließtext mit unserem interaktiven Schriftarten-Kombinationstool."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "Häufig gestellte Fragen",
      "items": [
        {
          "q": "Was ist What The Font Finder und wie funktioniert es?",
          "a": "What The Font Finder ist ein kostenloses Online-Typografiewerkzeug, das Text in Bildern, Fotos und Screenshots analysiert, um die exakte Schriftart oder die ähnlichste Open-Source-Google-Fonts-Alternative zu identifizieren. Es isoliert geometrische Konturen, misst Strichstärken und Serifen und liefert sofortige Download-Links und CSS-Einbindungscodes."
        },
        {
          "q": "Kann Google eine Schriftart identifizieren?",
          "a": "Während Google Lens Wörter in einem Bild erkennen kann, ist es nicht auf typografische Erkennung, Schriftstärken oder exakte CSS-font-family-Deklarationen spezialisiert. ProFontFinder wurde speziell für Designer und Entwickler entwickelt, um Schriftformen mit der vollständigen Google Fonts-Bibliothek abzugleichen."
        },
        {
          "q": "Wie kann ich einen Schriftstil erkennen?",
          "a": "Um eine Schriftart zu bestimmen, prüfen Sie typografische Schlüsselmerkmale: Gibt es Serifen oder ist es eine serifenlose Schrift, wie sehen die Endungen von Buchstaben wie \"a\" und \"g\" aus, und laden Sie einen Screenshot in ProFontFinder hoch."
        },
        {
          "q": "Wie finde ich heraus, welche Schriftart verwendet wird?",
          "a": "Klicken Sie auf einer Website mit der rechten Maustaste auf den Text und wählen Sie \"Untersuchen\" (F12), um die CSS-Eigenschaft font-family zu prüfen. Befindet sich der Text in einem Bild oder Logo, machen Sie einen Screenshot und laden Sie ihn in ProFontFinder hoch."
        },
        {
          "q": "Kann ich KI zur Schrifterkennung verwenden?",
          "a": "Ja. Moderne KI-Schrifterkenner wie ProFontFinder nutzen clientseitige Bildverarbeitung und Vektorähnlichkeit, um Glyphen in Millisekunden direkt in Ihrem Browser abzugleichen, ohne private Bilder auf Server hochzuladen."
        },
        {
          "q": "Gibt es einen kostenlosen Font Finder?",
          "a": "Ja, ProFontFinder ist vollkommen kostenlos ohne Scan-Limits, Bezahlschranken oder Registrierung. Alle Übereinstimmungen sind zu 100% geprüfte, freie Open-Source-Schriften unter der SIL Open Font License."
        },
        {
          "q": "Wie ordne ich eine Schriftart zu?",
          "a": "Erstellen Sie ein scharfes Bild des Textes, laden Sie es in ProFontFinder hoch, überprüfen Sie die erkannten Buchstaben und nutzen Sie den Schieberegler zum direkten visuellen Vergleich mit den Treffern."
        },
        {
          "q": "Kann ich ein Foto einer Schriftart machen und sie finden?",
          "a": "Ja! Fotografieren Sie Plakate, Schilder oder Buchcover gerade von vorn und laden Sie das Bild direkt hoch. Bei guter Ausleuchtung erzielt die optische Erkennung höchste Genauigkeit."
        },
        {
          "q": "Wo finde ich kostenlose Schriften?",
          "a": "Die führende Plattform für freie, kommerziell nutzbare Web-Schriftarten ist Google Fonts (fonts.google.com). Nutzen Sie auch unsere Suite von Typografie-Werkzeugen."
        },
        {
          "q": "Wie finde ich eine ganz bestimmte Textschrift?",
          "a": "Schneiden Sie ein prägnantes Wort mit 3 bis 6 charakteristischen Buchstaben (wie \"R\", \"g\", \"a\" oder \"e\") eng zu und laden Sie diesen Ausschnitt in ProFontFinder hoch."
        },
        {
          "q": "Wie verwende ich Google Fonts?",
          "a": "Wählen Sie die gefundene Schriftart aus, kopieren Sie den bereitgestellten CSS-@import-Link oder das HTML-<link>-Tag in Ihre Website und wenden Sie font-family: \"Inter\", sans-serif; in Ihrem Stylesheet an."
        },
        {
          "q": "Wie identifiziere ich eine Schriftart in einer PDF-Datei?",
          "a": "Öffnen Sie das PDF und prüfen Sie unter Datei > Eigenschaften > Schriften die eingebetteten Namen. Handelt es sich um gerasterten Text, erstellen Sie einen Screenshot (Win+Shift+S oder Cmd+Shift+4) und fügen Sie ihn in ProFontFinder ein."
        },
        {
          "q": "Kann ich mit KI eine eigene Schriftart erstellen?",
          "a": "Während ProFontFinder bestehende Schriften erkennt, können generative KI-Tools (wie Calligraphr oder Fontjoy) dabei helfen, eigene Schriftdaten aus Skizzen zu erzeugen."
        },
        {
          "q": "Erkennt das Tool auch Schreibschriften und Kursivschriften?",
          "a": "Ja, ProFontFinder erkennt Schreib-, Kursiv- und Kalligrafieschriften. Da verbundene Buchstaben anspruchsvoller sind, hilft ein hochauflösendes Bild dem Kontur-Algorithmus besonders."
        },
        {
          "q": "Welche Schriftarten deckt ProFontFinder ab?",
          "a": "ProFontFinder deckt alle wichtigen Genres ab: Sans-Serif (geometrisch, humanistisch), Serif (Klassizistisch, Antiqua), Monospace (Code-Schriften), Display-Schriften sowie Schreib- und Pinselschriften aus der gesamten verifizierten Google Fonts-Sammlung."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "OCR.LATENZ // <80MS",
      "engineReady": "Optische Erkennungs-Engine bereit",
      "signatures": "1.935 Signaturen",
      "title": "Bereit, eine Schriftart zu erkennen?",
      "desc": "Ziehen Sie ein beliebiges Bild oben hinein, um Buchstabenformen zu isolieren, Konturgeometrien zu berechnen und verifizierte Open-Source-Google-Fonts zu erhalten.",
      "btnIdentify": "Schriftart jetzt erkennen",
      "btnTools": "Schriftart-Werkzeuge erkunden",
      "badgeInBrowser": "100% im Browser",
      "badgeZeroLatency": "Null Latenz",
      "badgeTestedCss": "Geprüfte CSS-Einbindungen"
    }
  },
  toolsOverview: {
    meta: {
      title: 'Schrift-Werkzeuge — Kostenlose Typografie-Erkennungstools',
      description: 'Spezialisierte Typografie-Werkzeuge zum Finden kostenloser kommerzieller Alternativen, Extrahieren von Logo-Schriften, Kombinieren von Schriften und Erkennen von Webfonts.'
    },
    badge: 'WERKZEUG-SUITE',
    title: 'Schrift-Werkzeuge',
    subtitle: 'Zweckgebundene typografische Werkzeuge für konkrete Aufgaben. Alle kostenlos, unbegrenzt und privat in Ihrem Browser ausgeführt.',
    tools: {
      commercialAlternative: {
        title: 'Kostenlose Alternative zu einer Bezahlschrift finden',
        description: 'Laden Sie ein Bild einer kommerziellen Schrift hoch und erhalten Sie die ähnlichste Schriftart, die Sie legal nutzen können.'
      },
      urlFontFinder: {
                            title: 'Schriften von jedem Website-Link erkennen',
        description: 'Geben Sie eine beliebige URL ein, um geladene Webfonts, @font-face-Deklarationen und Schrift-Stacks auszulesen.'
      },
      logoFontFinder: {
        title: 'Schriftart in einem Logo bestimmen',
        description: 'Laden Sie ein Logo hoch und finden Sie heraus, welche Schriftart verwendet wird – inklusive kostenloser Alternativen.'
      },
      screenshotFontFinder: {
        title: 'Schriftart in einem Screenshot finden',
        description: 'Screenshots sind der ideale Fall: Klare, unverzerrte Buchstaben sorgen für die höchste Treffergenauigkeit.'
      },
      handwritingFontFinder: {
        title: 'Handschrift- oder Schreibschriftart finden',
        description: 'Schreibschriften sind oft knifflig zu identifizieren. So erhalten Sie trotzdem präzise Ergebnisse.'
      },
      fontPairing: {
                                                    title: 'Passende Schriftkombination finden',
        description: 'Bestimmen Sie eine Schriftart und entdecken Sie harmonisch abgestimmte Begleitschriften.'
      }
    },
    bottomBanner: {
      title: 'Suchen Sie den vollwertigen optischen Scanner?',
      desc: 'Ziehen Sie einen beliebigen Screenshot direkt in unsere optische Engine, um Buchstaben zu isolieren und mit 1.935+ Google Fonts abzugleichen.',
      button: 'Schriftart jetzt erkennen'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Kostenlose Alternativen zu kommerziellen Schriften — Schrift-Matcher',
      description: 'Laden Sie das Bild einer kommerziellen Schriftart hoch, um verifizierte kostenlose Google-Fonts-Alternativen mit produktionsreifem CSS zu finden.'
    },
    breadcrumb: 'Kommerzielle Schrift-Alternativen',
    title: 'Kostenlose Alternative zu einer Bezahlschrift finden',
    subtitle: 'Laden Sie ein Bild einer kommerziellen Schriftart hoch, um geprüfte kostenlose Google-Fonts-Alternativen samt CSS zu erhalten.',
    dropzoneTitle: 'Bild einer kommerziellen Schriftart hineinziehen',
    dropzoneSubtitle: 'Laden Sie ein Schriftmuster oder einen Ausschnitt hoch, um passende Google-Fonts-Zwillinge zu finden',
    buttonText: 'Beispielbild auswählen'
  },
  logoFontFinder: {
    meta: {
      title: 'Schriftart in einem Logo erkennen — Marken-Schriften & Alternativen',
      description: 'Laden Sie ein Logobild hoch, um dessen Schriftart zu identifizieren und kostenlose Google-Fonts-Pendants zu ermitteln.'
    },
    breadcrumb: 'Logo-Schrifterkennung',
    title: 'Schriftart in einem Logo bestimmen',
    subtitle: 'Laden Sie ein Logo oder ein Wortmarken-Bild hoch, um die Schriftart zu ermitteln und kostenlose Alternativen zu erhalten.',
    dropzoneTitle: 'Markenlogo oder Wortmarke hier ablegen',
    dropzoneSubtitle: 'Unterstützt PNG-, JPG- und WebP-Logos mit transparentem oder farbigem Hintergrund',
    buttonText: 'Logo-Datei auswählen'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Schriftart im Screenshot finden — Direkte Zwischenablage (⌘V) & OCR',
      description: 'Fügen Sie Bilder per ⌘V / Strg+V direkt aus der Zwischenablage ein oder legen Sie einen Screenshot ab, um Schriften sofort zu erkennen.'
    },
    breadcrumb: 'Screenshot-Schriftarten-Finder',
    title: 'Schriftart in einem Screenshot finden',
    subtitle: 'Fügen Sie Bilder mit ⌘V bzw. Strg+V direkt aus der Zwischenablage ein oder legen Sie eine Datei ab.',
    dropzoneTitle: 'Screenshot einfügen (⌘V / Strg+V) oder Datei hier ablegen',
    dropzoneSubtitle: 'Unterstützt PNG-, JPG- und WebP-Bilder',
    buttonText: 'Screenshot-Datei auswählen'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Handschriften & Kalligrafie erkennen — Optischer Schrift-Matcher',
      description: 'Scannen oder laden Sie Handschriften, Unterschriften oder Kalligrafien hoch, um passende kostenlose Google-Fonts-Schriften zu finden.'
    },
    breadcrumb: 'Handschrifterkennung',
    title: 'Handschrift- oder Schreibschriftart finden',
    subtitle: 'Laden Sie ein Schriftmuster, eine Signatur oder Schreibschriftzüge hoch, um übereinstimmende Schriftarten zu ermitteln.',
    dropzoneTitle: 'Handschriftprobe, Unterschrift oder Kalligrafie ablegen',
    dropzoneSubtitle: 'Unterstützt PNG-, JPG- und WebP-Bilder',
    buttonText: 'Handschrift-Bild auswählen'
  },
  urlFontFinder: {
    primaryBrand: "Primäre Marke",
    highLegibility: "Hohe Lesbarkeit",
    visualMatch: "Optische Übereinstimmung:",
    cssVariables: "CSS-Variablen",
    notice: "Hinweis:",

    meta: {
      title: 'URL-Schriftarten-Finder — Schriften jeder Website automatisch auslesen',
      description: 'Analysieren Sie jede beliebige Webadresse, um aktive Webfonts, @font-face-Regeln, Google-Fonts-Einbindungen und Schrift-Stacks zu extrahieren.'
    },
    badge: 'LIVE-WEB-TYPOGRAFIE-EXTRAKTOR',
    title: 'Schriften von jedem Website-Link erkennen',
    subtitle: 'Geben Sie eine Live-URL ein, um aktive Schriften zu analysieren, @font-face-Regeln zu prüfen und kostenlose Google-Fonts-Zwillinge zu ermitteln.',
    inputPlaceholder: 'https://beispiel.de',
    analyzeButton: 'Typografie live untersuchen',
    analyzingButton: 'Typografie wird analysiert...',
    presetsLabel: 'Oder an einem Live-Beispiel testen:',
    resultsTitle: 'Ergebnisse der Live-Typografie-Analyse',
    extractedHeading: 'Extrahierte Schriften',
    freeTwinHeading: 'Google-Fonts-Zwilling',
    inspectFont: 'Schriftart untersuchen',
    liveSpecimenTitle: 'Live-Schriftprobe (Tippen zum Testen):',
    sourcesTitle: 'Schriftquellen & Stylesheets',
    cssTitle: 'CSS-Blueprint für die Produktion',
    copyCss: 'CSS kopieren',
    copied: 'Kopiert',
    howItWorksTitle: 'So funktioniert die URL-Schrifterkennung',
    howItWorksP1: 'Wenn Sie eine Adresse übermitteln, analysiert unsere Engine das öffentliche HTML-Dokument auf Stylesheet-Einbindungen, Schriftanbieter (Google Fonts, Adobe Typekit, Bunny Fonts) und Inline-Stile.',
    howItWorksP2: 'Sobald primäre und sekundäre Schriften erkannt sind, verknüpft unsere Geometrie-Engine diese mit authentischen kostenlosen Google Fonts und erzeugt einsatzbereite CSS-Regeln.',
    faqTitle: 'Häufig gestellte Fragen',
    faq1: {
      q: 'Kann das Tool Schriften hinter Logins oder Paywalls erkennen?',
      a: 'Der URL-Finder untersucht nur öffentlich zugängliche Webseiten ohne Login. Für geschützte Bereiche erstellen Sie bitte einen Screenshot und nutzen unseren Screenshot-Finder.'
    },
    faq2: {
      q: 'Wie treffsicher sind die Google-Fonts-Empfehlungen?',
      a: 'Unsere Datenbank vergleicht visuelle Metriken (x-Höhe, Öffnungsgrade, Strichkontraste) mit verifizierten Schriften und erzielt geometrische Ähnlichkeitswerte von über 90%.'
    },
    faq3: {
      q: 'Werden bei der URL-Analyse Daten gespeichert?',
      a: 'Nein. Analysierte URLs werden ausschließlich flüchtig im Speicher verarbeitet und niemals protokolliert oder weitergegeben.'
    }
  },
  fontPairing: {
    surpriseMe: "Überrasche mich",
    invertRoles: "Rollen tauschen",
    bodySize: "Fließtextgröße:",
    editable: "editierbar",
    zeroLayoutShift: "Kein Layout-Shift",
    zeroLayoutShiftDesc: "Optimierter font-display swap.",
    zeroLatency: "Null Latenz",
    zeroLatencyDesc: "Lokale Web-Worker-Verarbeitung.",
    openLicense: "Freie Lizenz",
    commercialFree: "Kommerziell kostenlos",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Schriftkombinations-Tool — Harmonische Google-Fonts-Kombinationen',
      description: 'Entdecken Sie 31 von Designern erstellte Kombinationen aus Google Fonts. Prüfen Sie das Zusammenspiel von Titel und Fließtext live und kopieren Sie fertige CSS-Regeln.'
    },
    badge: 'TYPOGRAFISCHES SYSTEMDESIGN',
    title: 'Passende Schriftkombination finden',
    subtitle: 'Entdecken Sie 31 von Designern erstellte Kombinationen aus Google Fonts. Prüfen Sie das Zusammenspiel von Titel und Fließtext live und kopieren Sie fertige CSS-Regeln.',
    filterAll: 'Alle Kombinationen',
    filterSaas: 'SaaS & Tech',
    filterEditorial: 'Editorial & Luxus',
    filterCreative: 'Kreativagentur',
    filterCorporate: 'Corporate & Finanzen',
    customPreviewPlaceholder: 'Eigenen Beispieltext eingeben, um ihn in allen Schriftpaaren zu sehen...',
    sampleHeading: 'Skalierbare Designsysteme',
    sampleBody: 'Gute Typografie schafft eine klare visuelle Hierarchie, die den Leser natürlich und mühelos durch den Inhalt führt.',
    copyRule: 'Regel kopieren',
    openSpecimen: 'Schriftprobe'
  },
  about: {
    meta: {
      title: 'Über uns — ProFontFinder | Transparente Typografie-Erkennung',
      description: 'Erfahren Sie mehr über ProFontFinder: Schnelle, private und 100% kostenlose Schrifterkennung auf Basis von Open-Source-Google-Fonts und moderner Webtechnologie.'
    },
    badge: 'TRANSPARENZ & OFFENE TYPOGRAFIE',
    title: 'Über ProFontFinder',
    subtitle: 'Wir schaffen einen saubereren, schnelleren und wahrhaft offenen Weg, Schriften im Web zu entdecken, zu analysieren und einzusetzen.',
    whyTitle: 'Warum wir ProFontFinder entwickelt haben',
    whyP1: 'Jahrelang bedeutete die Schrifterkennung aus Bildern lästige Hürden: Registrierungszwang, störende Video-Popups, teure Abos und Empfehlungen für kommerzielle Schriften, die Hunderte von Euro kosten.',
    whyP2: 'Wir waren überzeugt, dass Designer und Entwickler etwas Besseres verdienen: Einen sofortigen, browserbasierten optischen Matcher, der Schriften in Millisekunden identifiziert, echte Open-Source-Alternativen findet und einsatzbereites CSS liefert – ohne Tracking oder Zahlungsdaten.',
    pillar1: {
      title: '100% kostenlos & unbegrenzt',
      desc: 'Keine täglichen Limits, keine Premium-Stufen, keine E-Mail-Schranken und keine versteckten Kosten. Untersuchen Sie so viele Bilder wie nötig.'
    },
    pillar2: {
      title: 'Keine Speicherung von Bildern',
      desc: 'Ihre Bilder werden mittels HTML5 Canvas ausschließlich lokal im Browser-RAM verarbeitet. Wir laden niemals private Grafiken hoch oder speichern diese.'
    },
    pillar3: {
      title: 'Echtes Open Source',
      desc: 'Jede Empfehlung wird mit dem offiziellen Google-Fonts-Verzeichnis abgeglichen und unterliegt der freien SIL Open Font License.'
    },
    pillar4: {
      title: 'Geschwindigkeit auf Client-Seite',
      desc: 'Durch den Verzicht auf Server-Roundtrips zur Bildvektorisierung erfolgt die optische Erkennung in unter 50 Millisekunden direkt auf Ihrem Gerät.'
    },
    principlesTitle: 'Unsere Entwicklungsprinzipien',
    p1: {
      title: 'Datenschutz durch Architektur',
      desc: 'Wir verlangen kein blindes Vertrauen: Wir haben die technische Möglichkeit zur Bildspeicherung von vornherein ausgeschlossen. Pixel bleiben im Client-RAM.'
    },
    p2: {
      title: 'Kein Ballast, keine Ablenkung',
      desc: 'Keine Vollbildanzeigen, keine irreführenden Download-Buttons und keine Social-Share-Pflichten. Das Tool lädt blitzschnell und steht Ihnen nicht im Weg.'
    },
    p3: {
      title: 'Direkt nutzbare Entwickler-Ausgaben',
      desc: 'Eine Schriftart zu benennen ist nur die halbe Miete. Wir liefern getestete @import-Links, variable Achsen und CSS font-family-Regeln für Ihre Codebasis.'
    },
    ctaTitle: 'Haben Sie Fragen oder Anregungen?',
    ctaDesc: 'Wir entwickeln unsere Schriftanalyse kontinuierlich weiter und freuen uns über Feedback aus der Entwickler-Community.',
    ctaButton: 'Team kontaktieren'
  },
  howItWorks: {
    meta: {
      title: 'Funktionsweise — Technische Typografie-Architektur | ProFontFinder',
      description: 'Einblicke in die technische Pipeline von ProFontFinder: Client-seitige HTML5-Canvas-Vektorisierung, optische Konturanalyse und geometrische Google-Fonts-Bewertung.'
    },
    badge: 'TECHNISCHE PIPELINE-SPEZIFIKATION',
    title: 'Wie ProFontFinder funktioniert',
    subtitle: 'Ein detaillierter Einblick in unsere Algorithmen für optische Zeichenerkennung, Konturvektorisierung und geometrische Distanzberechnung.',
    overviewTitle: 'Architektur-Überblick',
    overviewDesc: 'ProFontFinder arbeitet mit einer Architektur ohne Server-Uploads. Jeder Schritt der Bilddekodierung, Kantenfilterung, Glyphenextraktion und Signaturprüfung findet lokal in Ihrem Webbrowser mittels HTML5 Canvas und WebAssembly statt.',
    phase1: {
      title: 'Phase 1: Lokale In-Memory-Verarbeitung & Normalisierung',
      desc: 'Sobald ein Bild oder Screenshot in den Arbeitsbereich gezogen wird:',
      items: [
        'Wird es in einen Off-Screen-HTML5-Canvas-Kontext im RAM des Browsers dekodiert.',
        'Werden keinerlei Netzwerkanfragen abgesetzt; es verlassen keine Bilddaten Ihr Gerät.',
        'Trennt adaptive Otsu-Schwellenwertbildung Buchstabenformen von Bildrauschen und Hintergründen.',
        'Werden Kontrast und Auflösung angeglichen, um Strichstärken zu standardisieren.'
      ]
    },
    phase2: {
      title: 'Phase 2: Optische Vektorisierung der Glyphen',
      desc: 'Sobald die binäre Maske berechnet ist:',
      items: [
        'Isoliert die Kennzeichnung zusammenhängender Komponenten die Bounding-Boxes einzelner Zeichen.',
        'Berechnen Konturverfolgungs-Algorithmen äußere Hüllkurven und innere Punzen.',
        'Extrahieren geometrische Verhältnisberechnungen x-Höhe, Versalhöhe, Ober- und Unterlängen.',
        'Werden Endungswinkel und Öffnungsgrade in Serif-, Sans- und Display-Klassen eingestuft.'
      ]
    },
    phase3: {
      title: 'Phase 3: Geometrischer Distanzabgleich mit 1.935+ Google Fonts',
      desc: 'Die extrahierten Vektormerkmale werden mit unserem vorkompilierten Katalog verglichen:',
      items: [
        'Vektoreigenschaften werden in einen normierten, kompakten Fingerabdruck gewandelt.',
        'Die euklidische Distanzmetrik vergleicht optische Konturen mit geprüften Google Fonts.',
        'Kategoriefilter (Sans, Serif, Mono, Display, Script) grenzen den Suchraum ein.',
        'Konfidenzwerte (0-100%) spiegeln die geometrische Übereinstimmung wider.'
      ]
    },
    phase4: {
      title: 'Phase 4: Erzeugung produktionsreifer CSS-Regeln',
      desc: 'Die besten Treffer werden zu direkt kopierbaren Deklarationen zusammengefasst:',
      items: [
        'Offizielle @import- und <link>-Tags für das Google Fonts CDN.',
        'Exakte CSS font-family-Angaben inklusive sicherer System-Fallbacks.',
        'Angaben verfügbarer Schriftstärken und variabler Schriftachsen.',
        'Direktlinks zu offiziellen Google-Fonts-Seiten zur Prüfung der Lizenzbedingungen.'
      ]
    },
    canvasTitle: 'Client-seitiges In-Memory-Canvas',
    canvasDesc: 'Durch den Einsatz von HTML5 Canvas und direkter Pixelmanipulation im Speicher führt ProFontFinder anspruchsvolle Bildtransformationen ohne Server-Infrastruktur durch. Das sorgt für null Latenz und absolute Vertraulichkeit.',
    privacyTitle: 'Garantie: Null Speicherung',
    privacyDesc: 'Da keine Server-API Bilder entgegennimmt, bleiben unveröffentlichte Logos, vertrauliche Screenshots und Markengrafiken vollkommen sicher. Beim Schließen des Browser-Tabs wird der temporäre Speicher umgehend freigegeben.'
  },
  privacy: {
    meta: {
      title: 'Datenschutzerklärung — ProFontFinder | Keine Datenerfassung',
      description: 'Lesen Sie die Datenschutzerklärung von ProFontFinder. Erfahren Sie, wie unsere client-seitige Typografie-Engine Bilder lokal verarbeitet, ohne persönliche Daten zu speichern.'
    },
    badge: 'TRANSPARENZ & DATENSCHUTZ',
    title: 'Datenschutzerklärung',
    subtitle: 'ProFontFinder ist von Grund auf so konzipiert, dass Ihre Privatsphäre gewahrt bleibt. Alle Schriftanalysen laufen lokal in Ihrem Browser.',
    lastUpdated: 'Stand: September 2026',
    s1Title: '1. Grundsatz der Nicht-Speicherung von Bildern',
    s1P: 'ProFontFinder lädt KEINE Bilder, Screenshots, Logos oder Grafiken hoch, speichert diese nicht und gibt sie nicht weiter. Die gesamte Bildverarbeitung, Zeichenerkennung und Schriftanalyse läuft zu 100% lokal auf Ihrem Gerät im HTML5-Canvas-Speicher Ihres Browsers.',
    s2Title: '2. Erhebung personenbezogener Daten',
    s2P: 'Für die Nutzung von ProFontFinder sind weder Benutzerkonten noch Passwörter, E-Mail-Adressen oder Zahlungsinformationen erforderlich. Sie können alle Typografie-Tools vollkommen anonym nutzen.',
    s3Title: '3. Cookies & lokaler Speicher',
    s3P: 'ProFontFinder setzt weder Tracking- noch Werbe-Cookies ein. Wir nutzen lediglich den localStorage Ihres Browsers, um Ihre Spracheinstellung und Farbwahl (Dunkel- oder Hellmodus) lokal auf Ihrem Gerät zu speichern.',
    s4Title: '4. Externe Links & CDNs',
    s4P: 'Beim Laden oder Voranschaulichen von Schriftarten kann sich Ihr Browser direkt mit dem CDN von Google Fonts (fonts.googleapis.com und fonts.gstatic.com) verbinden, um Schriftproben zu rendern. Für diese Verbindungen gilt die Datenschutzerklärung von Google.',
    s5Title: '5. Kontakt bei Datenschutzfragen',
    s5P: 'Bei Fragen zu dieser Datenschutzerklärung oder unserer technischen Architektur ohne Datenspeicherung schreiben Sie uns gerne an support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Nutzungsbedingungen — ProFontFinder',
      description: 'Die Nutzungsbedingungen von ProFontFinder: Kostenlose, offene und client-seitige Typografie-Tools für Entwickler und Designer.'
    },
    badge: 'RECHTLICHE HINWEISE',
    title: 'Nutzungsbedingungen',
    subtitle: 'Einfache und transparente Bedingungen für die Nutzung von ProFontFinder.',
    lastUpdated: 'Stand: September 2026',
    s1Title: '1. Geltungsbereich & Zustimmung',
    s1P: 'Mit dem Zugriff auf ProFontFinder (profontfinder.com) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Sollten Sie Teilen der Bedingungen nicht zustimmen, stellen Sie die Nutzung des Dienstes bitte ein.',
    s2Title: '2. Zulässige Nutzung',
    s2P: 'ProFontFinder wird als kostenloses Werkzeug für Designer, Entwickler und Typografie-Interessierte bereitgestellt. Sie können den Dienst uneingeschränkt für persönliche, kommerzielle und akademische Projekte nutzen.',
    s3Title: '3. Schriftlizenzen & Urheberrechte',
    s3P: 'ProFontFinder analysiert Buchstabenformen und empfiehlt Open-Source-Schriften aus Google Fonts, die unter der SIL Open Font License (OFL) oder Apache 2.0 stehen. Die Prüfung der Lizenz vor kommerziellem Einsatz obliegt dem Nutzer.',
    s4Title: '4. Gewährleistungsausschluss',
    s4P: 'ProFontFinder wird im Ist-Zustand bereitgestellt. Obwohl unsere Erkennungspipeline auf hohe Präzision ausgelegt ist, können wir keine hundertprozentige Treffsicherheit bei allen Bildqualitäten garantieren.',
    s5Title: '5. Haftungsbeschränkung',
    s5P: 'ProFontFinder und seine Betreiber haften in keinem Fall für indirekte oder Folgeschäden, die aus der Nutzung oder Unmöglichkeit der Nutzung des Dienstes entstehen.',
    s6Title: '6. Änderungen des Dienstes',
    s6P: 'Wir behalten uns das Recht vor, Teile des Dienstes jederzeit ohne gesonderte Ankündigung anzupassen oder einzustellen.'
  },
  contact: {
    meta: {
      title: 'Kontakt — ProFontFinder Support & Anfragen',
      description: 'Treten Sie mit dem ProFontFinder-Entwicklungsteam in Kontakt. Senden Sie uns Fehlerberichte, Schriftvorschläge oder allgemeine Fragen.'
    },
    badge: 'KONTAKT AUFNEHMEN',
    title: 'Kontakt & Support',
    subtitle: 'Haben Sie Fragen, Feedback oder einen Fehlerbericht? Kontaktieren Sie das ProFontFinder-Team.',
    form: {
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Vielen Dank! Ihre Nachricht ist eingegangen. Unser Team wird sich zeitnah mit Ihnen in Verbindung setzen.'
    },
    directEmail: {
      title: 'Direkter E-Mail-Kontakt',
      desc: 'Für dringende Anfragen, technische Kooperationen oder Sicherheitsfragen erreichen Sie uns direkt unter support@profontfinder.com.'
    },
    responseTime: {
      title: 'Antwortzeit',
      desc: 'In der Regel antworten wir innerhalb von 24 bis 48 Geschäftsstunden.'
    },
    faqTitle: 'Häufig gestellte Anfragen',
    faq1: {
      q: 'Kann ich die Aufnahme neuer Google Fonts vorschlagen?',
      a: 'Unsere Datenbank synchronisiert sich automatisch mit dem offiziellen Google-Fonts-Katalog. Neu veröffentlichte Schriften werden beim nächsten Aktualisierungszyklus erfasst.'
    },
    faq2: {
      q: 'Bieten Sie eine API zur automatisierten Schrifterkennung an?',
      a: 'Wir prüfen derzeit die Bereitstellung einer Entwickler-API für automatisierte Workflows. Teilen Sie uns gerne Ihren konkreten Anwendungsfall mit!'
    }
  },
  guides: {
    meta: {
      title: "Typografie- & Schriftarten-Ratgeber — Pro Font Finder",
      description: "Experten-Leitfäden, praxisnahe Anleitungen und Best Practices zur Schriftarterkennung aus Bildern, Schriftkombinationen und kommerziellen Alternativen."
    },
    badge: "Anleitungen & Ratgeber",
    title: "Schrifterkennung und Typografie meistern",
    subtitle: "Umfassende Schritt-für-Schritt-Anleitungen und Workflows für Designer, Entwickler und Typografie-Begeisterte.",
    allGuides: "Alle Anleitungen",
    readTimeSuffix: "Lesezeit",
    tryTool: "Dieses Tool ausprobieren",
    items: [
      {
        id: "image-identification-guide",
        category: "Schrifterkennung",
        tag: "Grundlagen",
        title: "So erkennen Sie jede Schriftart präzise aus einem Bild oder Screenshot",
        desc: "Erfahren Sie praxiserprobte Techniken zur Bildvorbereitung, Grundlinien-Zuschnitt und Kontrastverstärkung für sekundenschnelle Treffer.",
        readTime: "4 Min.",
        steps: [
          "Schneiden Sie markante Zeichen mit hohem Kontrast (wie a, g, R, Q) passgenau zu.",
          "Achten Sie auf eine horizontale Grundlinie für optimale OCR-Erkennungsraten.",
          "Laden Sie das Bild direkt in Pro Font Finder zur sofortigen Vektoranalyse hoch."
        ],
        toolLink: "/",
        toolName: "Bild-Schriftartenfinder öffnen"
      },
      {
        id: "commercial-alternatives-guide",
        category: "Kommerzielle Alternativen",
        tag: "Kostensparend",
        title: "Echte kostenlose Google Fonts als Ersatz für teure kommerzielle Schriften",
        desc: "Der Spickzettel für Designer: Helvetica, Futura, Gotham, Proxima Nova und DIN durch 100% kostenlose Open-Source-Schriften ersetzen.",
        readTime: "5 Min.",
        steps: [
          "Geometrische vs. humanistische Merkmale (x-Höhe, Öffnungen, Endungen) bestimmen.",
          "Mit unserer Alternativen-Engine Strichstärke und Proportionen abgleichen.",
          "Fertigen CSS @import-Code lizenzkostenfrei für die Produktion exportieren."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "Kommerzielle Alternativen durchsuchen"
      },
      {
        id: "font-pairing-principles",
        category: "Kombination & Design",
        tag: "Best Practice",
        title: "Die goldenen Regeln der Schriftkombination: Kontrast, Hierarchie und Harmonie",
        desc: "Nie wieder unsicher beim Kombinieren von Schriften. Verbinden Sie ausdrucksstarke Überschriften mit kristallklarem Fließtext nach bewährten Gestaltungsregeln.",
        readTime: "6 Min.",
        steps: [
          "Serifen-Überschriften mit serifenlosem Fließtext (oder umgekehrt) für klaren Kontrast kombinieren.",
          "Stimmung und Entstehungszeit abstimmen (z. B. geometrische Titel mit zeitloser Sans).",
          "Kombinationen live in unserem Schriftarten-Kombinationstool ausprobieren."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "Kombinationstool öffnen"
      },
      {
        id: "inspect-web-fonts",
        category: "Technik & Web",
        tag: "Entwickler-Workflow",
        title: "Schriftarten jeder Live-Website schnell ermitteln und untersuchen",
        desc: "Finden Sie heraus, welche Typografie eine beliebige Website verwendet, ohne DevTools zu öffnen oder minifiziertes CSS zu durchsuchen.",
        readTime: "3 Min.",
        steps: [
          "Ziel-URL der gewünschten Website kopieren.",
          "In unseren URL Font Finder einfügen, um primäre Schriftfamilien zu extrahieren.",
          "Berechnete CSS-Variablen, Fallback-Ketten und Google Fonts-Links einsehen."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "URL Font Finder testen"
      },
      {
        id: "handwriting-identification",
        category: "Schrifterkennung",
        tag: "Handschrift & Script",
        title: "Handschriftliche Notizen und Unterschriften digitalen Schreibschriften zuordnen",
        desc: "Techniken zum Entziffern handschriftlicher Glyphen und Auffinden editierbarer Google Script-Schriften mit gleichem manuellem Charme.",
        readTime: "4 Min.",
        steps: [
          "Verbundene Schreibschriftzeichen in erkennbare Wortstämme segmentieren.",
          "Neigungswinkel, Schleifenproportionen und Strichstärkenunterschiede analysieren.",
          "Automatisch mit verifizierten Google Schreibschriften abgleichen."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "Handschriften abgleichen"
      },
      {
        id: "how-engine-works-guide",
        category: "Technik & Web",
        tag: "Architektur",
        title: "Hinter den Kulissen: So nutzt ProFontFinder clientseitiges OCR & Vektormathematik",
        desc: "Einblick in die browserbasierte Bildverarbeitung: Web Worker, Kantenerkennung, Forminvarianten und kompromisslose Privatsphäre ohne Server.",
        readTime: "5 Min.",
        steps: [
          "Sämtliche Bildverarbeitung läuft zu 100% im Arbeitsspeicher Ihres Browsers.",
          "Keine Bilduploads auf Server, keine Speicherung, kein Tracking.",
          "Blitzschneller Vektorabgleich in unter 100 ms gegen Hunderte freie Schriften."
        ],
        toolLink: "/how-it-works",
        toolName: "Technische Architektur lesen"
      }
    ],
    faqTitle: "Häufig gestellte Fragen zur Schriftarterkennung",
    faqs: [
      {
        q: "Kann ProFontFinder Schriftarten aus unscharfen Bildern erkennen?",
        a: "Ja! Unsere Vorverarbeitung umfasst Kontrastanpassung, adaptive Schwellenwertbildung und morphologische Filterung zur Konturschärfung vor dem Abgleich."
      },
      {
        q: "Dürfen alle empfohlenen Ersatzschriftarten kommerziell genutzt werden?",
        a: "Jede gelistete Alternative ist unter anerkannten Open-Source-Lizenzen (SIL OFL oder Apache 2.0) verifiziert und für gewerbliche Zwecke zu 100% kostenfrei."
      },
      {
        q: "Werden meine hochgeladenen Bilder auf Servern gespeichert?",
        a: "Niemals. Die gesamte Analyse, Texterkennung und der Vektorabgleich finden ausschließlich lokal in Ihrem Browser statt."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — Seite nicht gefunden | ProFontFinder',
      description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.'
    },
    badge: '404 FEHLER',
    title: 'Seite nicht gefunden',
    desc: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zur Startseite',
    exploreTools: 'Werkzeuge entdecken'
  }
};
