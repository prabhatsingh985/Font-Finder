export const en = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'The developer-first image font identifier. Inspect letterform geometry, verify authentic open-source Google Fonts, and copy production-ready CSS blueprints.',
    nav: {
      finder: 'Finder',
      tools: 'Tools',
      about: 'About',
      identifyFont: 'Identify Font',
      toggleTheme: 'Toggle color theme',
      skipToContent: 'Skip to content',
      language: 'Language'
    },
    footer: {
      mission: 'The developer-first image font identifier. Inspect letterform geometry, verify authentic open-source Google Fonts, and copy production-ready CSS blueprints.',
      zeroStorageBadge: 'Zero Image Storage • 100% Client-Side In-Memory',
      productsTitle: 'Products',
      tools: {
        imageFontFinder: 'Image Font Finder',
        urlFontFinder: 'URL Font Finder',
        logoFontFinder: 'Logo Font Finder',
        screenshotFontFinder: 'Screenshot Font Finder',
        fontPairing: 'Font Pairing Tool',
        handwritingMatcher: 'Handwriting Matcher',
        commercialAlternatives: 'Commercial Alternatives'
      },
      companyTitle: 'Company',
      aboutUs: 'About Us',
      howItWorks: 'How It Works',
      allFontTools: 'All Font Tools',
      contactSupport: 'Contact Support',
      trustLegalTitle: 'Trust & Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      googleFonts: 'Google Fonts',
      silLicense: 'SIL Open Font License',
      copyright: 'Pro Font Finder. Precision typography inspection for developers & designers.',
      noCookies: 'No cookies',
      noAccount: 'No account required',
      freeCommercial: 'Free for commercial use'
    },
    buttons: {
      identifyNow: 'Identify Font Now',
      exploreTools: 'Explore Font Tools',
      backToHome: 'Back to Home',
      copyCss: 'Copy CSS',
      copied: 'Copied'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / TEXT VERIFICATION",
      "cropManually": "Crop manually",
      "newImage": "New Image",
      "dragCursorInstruction": "Drag cursor across image to isolate a specific text region:",
      "applyAndRedetect": "Apply & Re-detect",
      "detectedTextLabel": "Detected text:",
      "verifyDetectedText": "Verify detected text",
      "verifyInputPlaceholder": "Verify or edit text...",
      "inspectIndividualWords": "Inspect individual words & letters",
      "wordSegmentsLabel": "Word Segments (Click to isolate a specific word):",
      "letterGlyphsLabel": "Letter Glyphs (Fix individual characters or clear non-letters):",
      "identifyFont": "Identify font",
      "identifyFontFor": "Identify \"{word}\"",
      "detectingText": "Detecting text and letterforms...",
      "distinctFont": "Distinct Font",
      "comparingLetterShapes": "COMPARING LETTER SHAPES",
      "matchingFontsProgress": "Matching against {count} fonts in your browser...",
      "stageA": "STAGE A: 16×16 GLYPH FINGERPRINT MATCHING",
      "evaluatingContours": "Evaluating letter contours across {count} fonts...",
      "stageB": "STAGE B: RANKING CANDIDATES",
      "rankingMatches": "Ranking closest Google Fonts matches...",
      "previewTextHeading": "Preview text.",
      "previewTextSubheading": "Type anything to see it set in each match.",
      "editText": "↑ Edit Text",
      "previewPlaceholder": "Type text to preview in matches...",
      "bestMatch": "Best Match",
      "match": "Match",
      "designedBy": "Designed by {designer} • SIL Open Font License",
      "copyName": "Copy Name",
      "copied": "Copied!",
      "googleFonts": "Google Fonts",
      "scanAnother": "Scan Another",
      "commercialAlternative": "Commercial Alternative:",
      "commercialAlternativeDesc": "Matches style of {commercial}. Free Google Fonts stand-in is {family}.",
      "compareWithImage": "Compare with your image",
      "comparePlaceholder": "Type text to compare...",
      "yourImage": "Your Image",
      "matchedFont": "Matched Font",
      "typographySpecimen": "Typography Specimen",
      "closestMatchesHeading": "CLOSEST GOOGLE FONT MATCHES",
      "livePreviewGoogleFonts": "Live preview rendered with Google Fonts",
      "closestRank": "closest",
      "freeOpenLicense": "Free • open licence",
      "viewOnGoogleFonts": "View on Google Fonts",
      "copyCss": "Copy CSS",
      "liveSpecimenTester": "02 / LIVE SPECIMEN TESTER",
      "size": "Size:",
      "specimenDefaultText": "The quick brown fox jumps over the lazy dog",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / PRODUCTION CSS BLUEPRINT",
      "copy": "Copy",
      "openInGoogleFontsRepo": "Open in Google Fonts Repository",
      "inspectSpecimenDetails": "Inspect Specimen Details →",
      "closestAlternatives": "04 / CLOSEST VERIFIED ALTERNATIVES",
      "viewSpecimen": "View Specimen →",
      "opticalMatch": "{confidence}% Optical Match",
      "errSelectWord": "Please select a word to identify.",
      "errAtLeastOneLetter": "Please ensure at least one letter is entered or detected.",
      "errInvalidFormat": "Please upload a PNG, JPG, or WebP image.",
      "errFileTooLarge": "File exceeds 10MB limit.",
      "errParseFailed": "Failed to parse image."
  },

  home: {
    meta: {
      title: 'Font Finder — Free Image Font Identifier',
      description: 'Identify any font from images and screenshots instantly with Font Finder. Upload an image to analyze letterforms and get 100% verified free font alternatives.'
    },
    hero: {
      headlinePrefix: 'Identify fonts in',
      subtitle: 'Drop any screenshot to isolate letterforms, calculate optical contours, and get verified open-source Google Fonts.'
    },
    dropzone: {
      title: 'Drop an image or paste screenshot (⌘V)',
      subtitle: 'Supports PNG, JPG, WebP • 100% private in-browser detection',
      buttonText: 'Select Image File'
    },
    pipeline: {
      badge: 'RECOGNITION ARCHITECTURE',
      heading: 'Three-step recognition pipeline',
      subheading: 'From unconstrained bitmap pixels to verified, production-ready open-source CSS typography.',
      localInference: '< 150ms Local Inference',
      zeroUploads: 'Zero Server Uploads',
      step1: {
        phase: 'PHASE 01 // INGESTION',
        tag: 'RAW INPUT',
        title: 'Upload or Paste',
        desc: 'Drop an image or paste instantly from clipboard with',
        descSuffix: 'Interactive crop isolate glyph contours.',
        crop: 'CROP',
        autoDetect: 'Auto-Detect',
        footerTraffic: 'Zero Server Traffic',
        step: 'Step 1 of 3'
      },
      step2: {
        phase: 'PHASE 02 // NEURAL SCAN',
        tag: 'GPU ACCEL',
        title: 'Optical Scan',
        desc: 'Extracts contrast, stroke weights, and 16×16 glyph fingerprints locally in memory with subpixel precision rasterizer.',
        matrix: 'Matrix: 16×16 Bitmaps',
        apertures: 'Apertures: Geometric',
        vectorNodes: 'Vector Nodes: 100% Match',
        footerClient: '100% Client WebGL',
        step: 'Step 2 of 3'
      },
      step3: {
        phase: 'PHASE 03 // CSS SYNTHESIS',
        tag: 'OFL 1.1 VERIFIED',
        title: 'Export Code',
        desc: 'Get verified Google Fonts alternatives with production-tested',
        descSuffix: 'CSS rules.',
        readyToEmbed: 'Ready to Embed',
        footerOfl: 'Commercial Free OFL',
        step: 'Step 3 of 3'
      }
    },
    engineSpecs: {
      badge: 'ENGINE SPECIFICATIONS',
      title: 'Open-source matches.',
      titleAccent: 'Production ready.',
      desc: 'Avoid commercial license traps. Font Finder maps bitmap letterforms to authentic, free-to-use Google Fonts alternatives.',
      licensingModel: 'Licensing Model',
      licensingValue: '100% Free SIL Open Font License',
      processingArch: 'Processing Architecture',
      processingValue: '100% Client-Side WebGL / Canvas',
      cdnIntegration: 'CDN Integration',
      cdnValue: 'Direct Google Fonts Embeds',
      jsonOutput: 'JSON Output'
    },
    guide: {
      imageRecognition: {
        badge: 'IMAGE RECOGNITION',
        title: 'Find a Font from an Image',
        desc: 'Spotting an eye-catching typeface in the wild is inspiring, but identifying it from a flat graphic can be difficult. Whether you are examining a poster, magazine layout, banner, or screenshot, asking "what font is this?" is a frequent hurdle in visual design.',
        cardP1: 'A dedicated font finder from image bridges the gap between static raster pixels and live typographic fonts. Rather than scrolling through foundry catalogs, an optical image font finder extracts glyph structures and matches them against indexed libraries.',
        cardP2: 'Whether auditing legacy branding, analyzing competitor interfaces, or exploring typography, an optical image to font finder simplifies discovery. ProFontFinder helps you find that font instantly with guaranteed results.'
      },
      opticalAnalysis: {
        badge: 'OPTICAL ANALYSIS',
        title: 'How Does Font Identification Work?',
        desc: 'Font identification combines computer vision with typographic letterform analysis. While standard OCR simply transcribes words, a specialized font identifier analyzes stylistic curvature, proportional ratios, and anatomical traits.'
      },
      commercialFree: {
        title: 'Commercial-Grade Typography Without Subscription Fees',
        desc: 'Our free font finder solves this by matching commercial fonts to authentic open-source alternatives under the SIL Open Font License:',
        commOriginal: 'COMMERCIAL ORIGINAL',
        exploreLink: 'Explore 50+ Curated Open-Source Font Twins in our Commercial Alternatives Tool'
      },
      digitalAssets: {
        badge: 'DIGITAL ASSET SCANNING',
        title: 'Identify Fonts from Screenshots and Logos',
        desc: 'Typography inspiration frequently arrives as screenshots, graphics, and brand wordmarks.',
        card1Title: 'Screenshots from Web & Mobile Apps',
        card1Desc: 'Capture a screen snip while browsing and drop it into our Screenshot Font Finder. If you wonder "what font is it" or search for WhatTheFont and WhatFontIs, get instant answers without paywalls.',
        card1Link: 'Launch Screenshot Snip Scanner',
        card2Title: 'Brand Logos & Wordmark Recognition',
        card2Desc: 'Discover the foundational typography behind famous marks with our Logo Font Finder, mapping custom kerning back to accessible font families.',
        card2Link: 'Explore Brand Logo Font Directory'
      },
      styleTaxonomy: {
        badge: 'STYLE TAXONOMY',
        title: 'Explore Different Font Styles',
        desc: 'Understanding font styles helps refine your typographic search:',
        serifTitle: 'Serif Fonts',
        serifDesc: 'Decorative feet at stroke terminals conveying heritage and editorial elegance (e.g., Playfair Display, Merriweather, EB Garamond).',
        sansTitle: 'Sans-Serif Fonts',
        sansDesc: 'Clean lines and high screen legibility from geometric Montserrat to neutral workhorses like Inter and Roboto.',
        displayTitle: 'Display & Headline',
        displayDesc: 'Bold personality and condensed widths designed for high-impact hero titles (e.g., Bebas Neue, Anton, Syne).',
        cursiveTitle: 'Handwritten & Cursive',
        cursiveDesc: 'Organic penmanship and calligraphy. Discover natural cursive font options in our Handwriting Font Finder or explore our Typography Tools.'
      },
      practicalUtility: {
        badge: 'PRACTICAL UTILITY',
        title: 'Font Finder for Designers and Developers',
        desc: 'ProFontFinder streamlines workflows across creative disciplines:',
        devTitle: 'Frontend Developers',
        devDesc: 'Copy verified Google Fonts @import snippets and Tailwind declarations directly. Inspect live sites with our URL Font Finder.',
        uiTitle: 'UI/UX Designers',
        uiDesc: 'Match typography from client screenshots and mood boards to keep Figma designs consistent.',
        creatorTitle: 'Creators & Typography Enthusiasts',
        creatorDesc: 'Explore balanced headline and body pairings using our interactive Font Pairing Tool.'
      }
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What the font finder: What is a font finder and how does it work?',
          a: 'What The Font Finder is a free online typography tool that analyzes text inside images, photos, and screenshots to identify the exact typeface or closest open-source Google Font alternative. It extracts geometric letterform contours, measures stroke weight and serifs, and provides instant download links and CSS embed codes.'
        },
        {
          q: 'Can Google identify a font?',
          a: "While Google Lens can recognize words in an image, it does not specialize in typographic identification, font weights, or matching exact CSS font-family declarations. ProFontFinder is built specifically for designers and developers to match letterforms against the full Google Fonts library with 100% verified CSS embed codes."
        },
        {
          q: 'How can I identify a type of font?',
          a: "To identify a type of font, examine key typographic traits: check whether it has serifs (feet on strokes) or is sans-serif, observe the x-height and terminal shapes of letters like 'a' and 'g', note stroke weight contrast, and upload a clear screenshot to ProFontFinder for automatic optical contour matching."
        },
        {
          q: 'How to see which font is used?',
          a: "To see which font is used on a live website, right-click the text and select 'Inspect' (or press F12) to examine the CSS font-family property in DevTools. If the font is rendered inside an image, logo, graphic banner, or PDF, take a screenshot and upload it to ProFontFinder to detect the exact font family."
        },
        {
          q: 'Can I use AI to identify a font?',
          a: 'Yes. Modern AI font identifiers like ProFontFinder use client-side computer vision, optical character segmentation, and geometric vector similarity to compare glyph letterforms against pre-computed font datasets in milliseconds right in your browser without uploading your private images to any cloud server.'
        },
        {
          q: 'Is there a free font finder?',
          a: 'Yes, ProFontFinder is completely free with no scan limits, paywalls, or registrations required. Unlike paid services that charge per lookup or promote costly commercial licenses, all matched results are 100% verified, free, open-source Google Fonts safe for commercial and personal use under the SIL Open Font License.'
        },
        {
          q: 'How to match a font?',
          a: 'To match a font: (1) Capture a crisp, high-contrast image or screenshot of the text. (2) Upload or paste the image into ProFontFinder. (3) Verify the detected characters in the letter verification stage. (4) Review the ranked font matches using the interactive side-by-side comparison slider and live specimen tester.'
        },
        {
          q: 'Can I take a picture of a font and find it?',
          a: 'Yes! You can take a photo of any printed typography—such as book covers, street signs, posters, menus, or product packaging—with your phone and upload it directly into Font Finder. Ensure the picture is well-lit, in focus, and taken straight-on for the highest optical matching accuracy.'
        },
        {
          q: 'Where can I find free fonts?',
          a: 'The premier source for free, commercially licensed web fonts is Google Fonts (fonts.google.com). You can also explore our suite of specialized Typography Tools for pairing guides, font identification, and commercial alternatives.'
        },
        {
          q: 'How to find a specific text font?',
          a: "To identify a specific text font, crop tightly around a clean word containing 3 to 6 distinct characters (like 'R', 'g', 'a', or 'e' which have unique structural traits). Upload the cropped sample to ProFontFinder to isolate and match that specific typeface style and weight."
        },
        {
          q: 'How do I use Google Fonts?',
          a: "Using Google Fonts is simple: (1) Pick your matched font. (2) Copy the provided CSS @import link or HTML <link> tag and paste it into your stylesheet or website <head>. (3) Apply the CSS rule, for example: font-family: 'Inter', sans-serif;. Google Fonts are hosted on high-speed global CDNs for free."
        },
        {
          q: 'How to identify a font in a PDF?',
          a: 'To identify fonts in a PDF document: (1) Open the PDF in Adobe Acrobat or browser and check File > Properties > Fonts to see embedded font names. (2) If the PDF contains flattened vector or rasterized text, take a screenshot (Win+Shift+S or Cmd+Shift+4) and paste it into ProFontFinder for instant optical recognition.'
        },
        {
          q: 'Can I create a font using AI?',
          a: 'While ProFontFinder is designed to identify existing fonts and find free open-source matches, generative AI tools (such as Calligraphr, Fontjoy, or custom vector AI models) can help generate custom typography and font files from user drawings or prompt sketches.'
        },
        {
          q: 'Can the font identifier match cursive fonts?',
          a: 'Yes. ProFontFinder recognizes cursive, script, handwritten, and calligraphic font styles. Because cursive letters often connect, using a sharp, high-resolution image helps the optical engine trace interconnected strokes accurately. You can also test dedicated script fonts with our Handwriting Font Finder tool.'
        },
        {
          q: 'What font types does it cover?',
          a: 'ProFontFinder covers all major typographic genres: Sans-Serif (Geometric, Neo-Grotesque, Humanist), Serif (Old Style, Transitional, Slab Serif), Monospace (Developer and Terminal fonts), Display (Poster and Headline fonts), and Script/Cursive typefaces across the entire verified Google Fonts collection.'
        }
      ]
    },
    cta: {
      gridSpecimen: 'GRID.SPECIMEN // SEC-08',
      ocrLatency: 'OCR.LATENCY // <80MS',
      engineReady: 'Optical Match Engine Ready',
      signatures: '1,935 Signatures',
      title: 'Ready to identify a font?',
      desc: 'Drop any image above to isolate letterforms, calculate contour geometry, and get verified open-source Google Fonts.',
      btnIdentify: 'Identify Font Now',
      btnTools: 'Explore Font Tools',
      badgeInBrowser: '100% In-Browser',
      badgeZeroLatency: 'Zero Latency',
      badgeTestedCss: 'Tested CSS Embeds'
    }
  },
  toolsOverview: {
    meta: {
      title: 'Font Tools — Free Typography Identification Utilities',
      description: 'Specialized typography utilities for finding free commercial alternatives, extracting logo fonts, pairing typefaces, and detecting document fonts.'
    },
    badge: 'TOOL SUITE',
    title: 'Font tools',
    subtitle: 'Purpose-built typography utilities tuned for specific tasks. All free, all unlimited, running privately in your browser.',
    tools: {
      commercialAlternative: {
        title: 'Find a free alternative to a paid font',
        description: 'Upload an image of a commercial typeface and get the closest free font you can legally use.'
      },
      urlFontFinder: {
                            title: 'Detect fonts from any website link',
        description: 'Enter any URL to extract loaded web fonts, stylesheet @font-face declarations, and typography stacks.'
      },
      logoFontFinder: {
        title: 'Identify the font in a logo',
        description: 'Upload a logo and find out what typeface it uses — plus free fonts that look the same.'
      },
      screenshotFontFinder: {
        title: 'Find the font in a screenshot',
        description: 'Screenshots are the easiest case — clean, sharp, undistorted letters are exactly what the matcher wants.'
      },
      handwritingFontFinder: {
        title: 'Find a handwriting or script font',
        description: 'Script fonts are the hardest to identify. Here is how to get a usable answer anyway.'
      },
      fontPairing: {
                                                title: 'Find a font pairing',
        description: 'Identify one font, then get the companions that work alongside it.'
      }
    },
    bottomBanner: {
      title: 'Looking for the full-featured optical scanner?',
      desc: 'Drop any screenshot directly into our core optical engine to isolate letterforms and match against all 1,935 Google Fonts in seconds.',
      button: 'Identify Font Now'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Find Free Alternatives to Paid Fonts — Commercial Font Matcher',
      description: 'Upload an image of a commercial font to find verified free, open-source Google Font alternatives with production CSS.'
    },
    breadcrumb: 'Commercial Font Twins',
    title: 'Find a free alternative to a paid font',
    subtitle: 'Upload an image of a commercial font to get verified free Google Font alternatives with production CSS.',
    dropzoneTitle: 'Drop an image of a commercial font',
    dropzoneSubtitle: 'Upload any specimen, crop, or graphic to find free Google Font twins',
    buttonText: 'Select Sample Image'
  },
  logoFontFinder: {
    meta: {
      title: 'Identify the Font in a Logo — Brand Typeface & Free Alternative Identifier',
      description: 'Upload any logo image to identify its typeface and find free Google Font alternatives.'
    },
    breadcrumb: 'Logo Font Finder',
    title: 'Identify the font in a logo',
    subtitle: 'Upload any brand logo or wordmark image to discover what typeface it uses and get free font alternatives.',
    dropzoneTitle: 'Drop brand logo or wordmark image here',
    dropzoneSubtitle: 'Supports PNG, JPG, and WebP logos with transparent or solid backgrounds',
    buttonText: 'Select Logo File'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Find the Font in a Screenshot — Instant Clipboard (⌘V) & Optical Matcher',
      description: 'Paste directly from your clipboard with ⌘V / Ctrl+V or drop any captured screen snip to identify fonts in seconds.'
    },
    breadcrumb: 'Screenshot Font Finder',
    title: 'Find the font in a screenshot',
    subtitle: 'Paste directly from your clipboard using ⌘V or Ctrl+V, or drop a screenshot file below.',
    dropzoneTitle: 'Paste screenshot (⌘V / Ctrl+V) or drop file here',
    dropzoneSubtitle: 'Supports PNG, JPG, and WebP images',
    buttonText: 'Select Screenshot File'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Find a Handwriting or Script Font — Optical Calligraphy Identifier',
      description: 'Upload or scan any handwriting sample, signature, or cursive calligraphy to identify matching free Google Fonts.'
    },
    breadcrumb: 'Handwriting Font Finder',
    title: 'Find a handwriting or script font',
    subtitle: 'Upload or drop any handwriting sample, signature, or script lettering to identify matching fonts.',
    dropzoneTitle: 'Drop handwriting sample, signature, or calligraphy',
    dropzoneSubtitle: 'Supports PNG, JPG, and WebP images',
    buttonText: 'Select Handwriting Image'
  },
  urlFontFinder: {
    primaryBrand: "Primary Brand",
    highLegibility: "High Legibility",
    visualMatch: "Visual Match:",
    cssVariables: "CSS Variables",
    notice: "Notice:",

    meta: {
      title: 'URL Font Finder — Detect Web Fonts from Any Website Link',
      description: 'Analyze any URL to instantly extract active web fonts, loaded @font-face rules, Google Fonts links, typography stacks, and 100% free Google Font twins.'
    },
    badge: 'LIVE WEB TYPOGRAPHY EXTRACTOR',
    title: 'Detect fonts from any website link',
    subtitle: 'Enter any live URL to instantly analyze active fonts, inspect @font-face rules, extract typography stacks, and discover 100% free Google Font twins.',
    inputPlaceholder: 'https://example.com',
    analyzeButton: 'Inspect Live Typography',
    analyzingButton: 'Analyzing typography...',
    presetsLabel: 'Or test a live architectural specimen:',
    resultsTitle: 'Live Typography Inspection Results',
    extractedHeading: 'Extracted Fonts',
    freeTwinHeading: 'Google Font Twin',
    inspectFont: 'Inspect Font',
    liveSpecimenTitle: 'Live Specimen Preview (Type to test):',
    sourcesTitle: 'Typography Sources & Stylesheets',
    cssTitle: 'Production CSS Blueprint',
    copyCss: 'Copy CSS',
    copied: 'Copied',
    howItWorksTitle: 'How URL Font Detection Works',
    howItWorksP1: 'When you submit a web address, our extraction engine analyzes the public HTML document to detect stylesheet declarations, font provider links (Google Fonts, Adobe Typekit, Bunny Fonts), and inline style rules.',
    howItWorksP2: 'Once the primary and secondary typefaces are identified, our geometry engine pairs them with authentic free Google Font alternatives, generating ready-to-copy CSS rules for your stylesheets.',
    faqTitle: 'Frequently Asked Questions',
    faq1: {
      q: 'Can this tool detect fonts behind login pages or paywalls?',
      a: 'The URL Font Finder only inspects public web pages accessible without authentication. For private pages or apps, take a screenshot and use our Screenshot Font Finder instead.'
    },
    faq2: {
      q: 'How accurate is the Google Font twin recommendation?',
      a: 'Our database matches visual metrics (x-height, aperture openness, stroke contrast, terminal angles) against verified open-source typefaces with 90%+ geometric similarity scores.'
    },
    faq3: {
      q: 'Is any data stored when I analyze a URL?',
      a: 'Zero. URLs submitted for typography analysis are processed in memory and never logged, recorded, or shared.'
    }
  },
  fontPairing: {
    surpriseMe: "Surprise Me",
    invertRoles: "Invert Roles",
    bodySize: "Body Size:",
    editable: "editable",
    zeroLayoutShift: "Zero Layout Shift",
    zeroLayoutShiftDesc: "Optimized font-display swap.",
    zeroLatency: "Zero Latency",
    zeroLatencyDesc: "Local Web Worker processing.",
    openLicense: "Open License",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Font Pairing Tool — Free Google Font Combinations & Typography Harmonies',
      description: 'Explore 31 designer-engineered combinations of Google Fonts. Test heading and body harmony live, adjust scale, and copy ready-to-use CSS rules.'
    },
    badge: 'TYPOGRAPHIC SYSTEM DESIGN',
    title: 'Find a font pairing',
    subtitle: 'Explore 31 designer-engineered combinations of Google Fonts. Test heading and body harmony live, adjust scale, and copy ready-to-use CSS rules.',
    filterAll: 'All Pairings',
    filterSaas: 'SaaS & Tech',
    filterEditorial: 'Editorial & Luxury',
    filterCreative: 'Creative Agency',
    filterCorporate: 'Corporate & Finance',
    customPreviewPlaceholder: 'Type custom specimen text to preview across all font pairings...',
    sampleHeading: 'Design Systems at Scale',
    sampleBody: 'Good typography establishes a visual hierarchy that guides the reader through the content naturally and effortlessly.',
    copyRule: 'Copy Rule',
    openSpecimen: 'Specimen'
  },
  about: {
    meta: {
      title: 'About Us — ProFontFinder | Transparent Typography Detection',
      description: 'Discover the mission behind ProFontFinder: delivering fast, private, 100% free typography recognition powered by open-source Google Fonts and modern browser engineering.'
    },
    badge: 'ENGINEERING TRANSPARENCY & OPEN TYPOGRAPHY',
    title: 'About ProFontFinder',
    subtitle: 'Building a cleaner, faster, and truly open way to discover, analyze, and implement typography on the web.',
    whyTitle: 'Why We Built ProFontFinder',
    whyP1: 'For years, identifying a font from an image meant dealing with frustrating roadblocks: mandatory account registrations, intrusive video popups, subscription paywalls, and recommendations for expensive commercial fonts costing hundreds of dollars per style.',
    whyP2: 'We believed designers and developers deserved something fundamentally better: an instant, in-browser optical matcher that identifies typography in milliseconds, matches authentic open-source alternatives, and gives you copy-ready CSS code without tracking you or asking for a credit card.',
    pillar1: {
      title: '100% Free & Unlimited',
      desc: 'No daily scan limits, no premium tiers, no email gates, and zero hidden charges. You can analyze as many screenshots and graphics as you need.'
    },
    pillar2: {
      title: 'Zero Image Retention',
      desc: 'Your images are processed locally in your browser memory using HTML5 Canvas. We never upload, save, or inspect your private graphics.'
    },
    pillar3: {
      title: 'Authentic Open Source',
      desc: 'Every recommendation is verified against the official Google Fonts directory with SIL Open Font License compliance for commercial freedom.'
    },
    pillar4: {
      title: 'Client-Side Speed',
      desc: 'By eliminating server roundtrips for image vectorization, optical recognition happens in under 50 milliseconds directly on your device.'
    },
    principlesTitle: 'Our Engineering Principles',
    p1: {
      title: 'Privacy by Architecture',
      desc: 'We do not ask for trust; we engineer out the capability to store user images. Canvas pixels remain strictly in client RAM.'
    },
    p2: {
      title: 'Zero Bloat, Zero Distraction',
      desc: 'No full-screen interstitial ads, no deceptive download buttons, and no forced social shares. The tool loads instantly and gets out of your way.'
    },
    p3: {
      title: 'Actionable Developer Output',
      desc: 'Identifying a typeface is only half the battle. We generate production-tested @import links, variable weight axes, and CSS font-family rules ready for your codebase.'
    },
    ctaTitle: 'Have questions or suggestions?',
    ctaDesc: 'We are actively improving our optical letterform analysis pipeline and welcome developer feedback.',
    ctaButton: 'Contact the Team'
  },
  howItWorks: {
    meta: {
      title: 'How It Works — Technical Typography Architecture | ProFontFinder',
      description: 'Explore the technical pipeline behind ProFontFinder: client-side HTML5 canvas vectorization, optical glyph contour analysis, and geometric Google Font scoring.'
    },
    badge: 'TECHNICAL PIPELINE SPECIFICATION',
    title: 'How ProFontFinder Works',
    subtitle: 'An inside look at our client-side optical character recognition, contour vectorization, and geometric distance scoring algorithms.',
    overviewTitle: 'Architectural Overview',
    overviewDesc: 'ProFontFinder operates on a zero-server-upload architecture. Every stage of image decoding, optical edge filtering, glyph extraction, and signature matching occurs locally inside your web browser using HTML5 Canvas and WebAssembly.',
    phase1: {
      title: 'Phase 1: Local In-Memory Ingestion & Normalization',
      desc: 'When an image or screenshot is dropped into the viewport:',
      items: [
        'Decoded into an off-screen HTML5 Canvas context in browser RAM.',
        'Zero network requests are dispatched; no image data ever leaves your device.',
        'Adaptive Otsu thresholding separates letterforms from background graphics and noise.',
        'Contrast and resolution are normalized to standardize stroke thickness.'
      ]
    },
    phase2: {
      title: 'Phase 2: Optical Letterform Vectorization',
      desc: 'Once the binarized image mask is established:',
      items: [
        'Connected-component labeling isolates individual glyph bounding boxes.',
        'Contour-tracing algorithms calculate outer hull vertices and internal counters.',
        'Geometric ratio measurements extract x-height, cap-height, ascenders, and descenders.',
        'Terminal angles and aperture openness are categorized across serif, sans, and display classes.'
      ]
    },
    phase3: {
      title: 'Phase 3: Geometric Distance Scoring Against 1,935+ Google Fonts',
      desc: 'Extracted vector signatures are evaluated against our pre-compiled font catalog:',
      items: [
        'Vector features are converted into a compact normalized fingerprint.',
        'Euclidean distance metric compares optical contours against verified Google Fonts.',
        'Category filters (Sans, Serif, Mono, Display, Script) narrow search space.',
        'Confidence scores (0-100%) reflect geometric similarity and structural alignment.'
      ]
    },
    phase4: {
      title: 'Phase 4: Production CSS Blueprint Generation',
      desc: 'The best matches are synthesized into copy-ready developer declarations:',
      items: [
        'Official Google Fonts CDN @import and <link> stylesheet tags.',
        'Correct CSS font-family declarations including safe system fallbacks.',
        'Available weights and variable font axes specifications.',
        'Direct links to official Google Fonts specimen pages for licensing review.'
      ]
    },
    canvasTitle: 'Client-Side In-Memory Canvas',
    canvasDesc: 'By utilizing HTML5 Canvas and in-memory pixel manipulation, ProFontFinder executes complex image transformations without requiring costly server backends. This delivers zero latency and absolute data confidentiality.',
    privacyTitle: 'Zero-Storage Guarantee',
    privacyDesc: 'Because no server API receives your image, your sensitive screenshots, unpublished logos, and private brand assets remain 100% confidential. When you close the browser tab, all temporary memory is immediately freed.'
  },
  privacy: {
    meta: {
      title: 'Privacy Policy — ProFontFinder | Zero Data Collection',
      description: 'Read the ProFontFinder Privacy Policy. Learn how our 100% client-side typography engine processes images locally without storing or transmitting personal data.'
    },
    badge: 'TRANSPARENCY & DATA PRIVACY',
    title: 'Privacy Policy',
    subtitle: 'ProFontFinder is built from the ground up to respect your privacy. All font analysis runs locally in your browser.',
    lastUpdated: 'Last updated: September 2026',
    s1Title: '1. Zero Image Storage Policy',
    s1P: 'ProFontFinder does NOT upload, store, transmit, or retain any images, screenshots, logos, or graphics that you provide to the service. All image processing, optical character recognition, contour vectorization, and font matching algorithms execute 100% locally on your device within your web browser using HTML5 Canvas memory.',
    s2Title: '2. Personal Information Collection',
    s2P: 'We do not require user accounts, passwords, email addresses, or payment information to use any part of the ProFontFinder service. You can use all font identification and typography tools completely anonymously.',
    s3Title: '3. Cookies & Local Storage',
    s3P: 'ProFontFinder does not use tracking cookies, advertising cookies, or cross-site fingerprinting mechanisms. We only use localStorage to remember your theme preference (dark or light mode) locally on your device.',
    s4Title: '4. Third-Party Links & CDNs',
    s4P: 'When you preview or load fonts, your browser may connect directly to Google Fonts CDN (fonts.googleapis.com and fonts.gstatic.com) to render live specimens. These connections are subject to Google\'s Privacy Policy.',
    s5Title: '5. Contact Regarding Privacy',
    s5P: 'If you have any questions about this Privacy Policy or our architectural zero-storage implementation, please contact us at support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Terms of Service — ProFontFinder',
      description: 'Review the Terms of Service for using ProFontFinder. Free, open, client-side typography identification tools for designers and developers.'
    },
    badge: 'LEGAL & USAGE GUIDELINES',
    title: 'Terms of Service',
    subtitle: 'Simple, transparent terms for using the ProFontFinder service.',
    lastUpdated: 'Last updated: September 2026',
    s1Title: '1. Acceptance of Terms',
    s1P: 'By accessing or using ProFontFinder (profontfinder.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the service.',
    s2Title: '2. Permitted Use',
    s2P: 'ProFontFinder is provided as a free tool for designers, developers, and typography enthusiasts. You may use the service for personal, commercial, and educational projects without restriction.',
    s3Title: '3. Font Licensing & Intellectual Property',
    s3P: 'ProFontFinder identifies letterforms and recommends open-source Google Fonts licensed under the SIL Open Font License (OFL) or Apache 2.0 license. Users are responsible for verifying font licenses prior to commercial deployment.',
    s4Title: '4. Disclaimer of Warranties',
    s4P: 'ProFontFinder is provided "as is" and "as available" without warranties of any kind. While our optical matching pipeline is engineered for high accuracy, we do not guarantee 100% detection precision for all image qualities.',
    s5Title: '5. Limitation of Liability',
    s5P: 'In no event shall ProFontFinder or its maintainers be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service.',
    s6Title: '6. Modifications to Service',
    s6P: 'We reserve the right to modify or discontinue any part of the service at any time without notice.'
  },
  contact: {
    meta: {
      title: 'Contact Us — ProFontFinder Support & Inquiries',
      description: 'Get in touch with the ProFontFinder engineering team. Send bug reports, font suggestions, feedback, or general inquiries.'
    },
    badge: 'GET IN TOUCH',
    title: 'Contact Support',
    subtitle: 'Have questions, feedback, or a bug report? Reach out to the ProFontFinder engineering team.',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you! Your message has been received. Our team will review your inquiry shortly.'
    },
    directEmail: {
      title: 'Direct Email Support',
      desc: 'For urgent inquiries, technical partnerships, or security questions, email our team directly at support@profontfinder.com.'
    },
    responseTime: {
      title: 'Response Time',
      desc: 'We typically respond to inquiries within 24 to 48 business hours.'
    },
    faqTitle: 'Frequently Asked Inquiries',
    faq1: {
      q: 'Can I request a new Google Font to be added?',
      a: 'Our database automatically syncs with the official Google Fonts catalog. If a new font was recently published on Google Fonts, it will be indexed during our next catalog update.'
    },
    faq2: {
      q: 'Do you offer an API for programmatic font identification?',
      a: 'We are currently evaluating a developer API for automated font recognition workflows. Feel free to contact us with your use case!'
    }
  },
  error404: {
    meta: {
      title: '404 — Page Not Found | ProFontFinder',
      description: 'The page you are looking for doesn\'t exist or has been moved.'
    },
    badge: '404 ERROR',
    title: 'Page Not Found',
    desc: 'The page you are looking for doesn\'t exist or has been moved.',
    backHome: 'Back to Home',
    exploreTools: 'Explore Tools'
  }
};

export type TranslationSchema = typeof en;
