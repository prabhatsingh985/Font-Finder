import type { TranslationSchema } from './en';

export const es: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'El identificador de fuentes por imagen para desarrolladores. Inspecciona la geometría de las letras, verifica auténticas fuentes abiertas de Google Fonts y copia código CSS listo para producción.',
    nav: {
      finder: 'Buscador',
      tools: 'Herramientas',
      guides: "Guías",
      about: 'Acerca de',
      identifyFont: 'Identificar',
      toggleTheme: 'Cambiar tema de color',
      skipToContent: 'Saltar al contenido',
      language: 'Idioma'
    },
    footer: {
      mission: 'El identificador de fuentes por imagen para desarrolladores. Inspecciona la geometría de las letras, verifica auténticas fuentes abiertas de Google Fonts y copia código CSS listo para producción.',
      zeroStorageBadge: 'Cero Almacenamiento de Imágenes • 100% en Memoria del Navegador',
      productsTitle: 'Productos',
      tools: {
        imageFontFinder: 'Buscador de Fuentes por Imagen',
        urlFontFinder: 'Buscador de Fuentes por URL',
        logoFontFinder: 'Identificador de Fuentes en Logos',
        screenshotFontFinder: 'Buscador de Fuentes en Capturas',
        fontPairing: 'Herramienta de Combinación de Fuentes',
        handwritingMatcher: 'Buscador de Fuentes Manuscritas',
        commercialAlternatives: 'Alternativas Comerciales Gratuitas'
      },
      companyTitle: 'Empresa',
      aboutUs: 'Acerca de Nosotros',
      howItWorks: 'Cómo Funciona',
      guides: "Guías y Tutoriales",
      allFontTools: 'Todas las Herramientas',
      contactSupport: 'Contacto y Soporte',
      trustLegalTitle: 'Confianza y Legal',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      googleFonts: 'Google Fonts',
      silLicense: 'Licencia SIL Open Font',
      copyright: 'Pro Font Finder. Inspección tipográfica de precisión para desarrolladores y diseñadores.',
      noCookies: 'Sin cookies',
      noAccount: 'Sin registro obligatorio',
      freeCommercial: 'Gratis para uso comercial'
    },
    buttons: {
      identifyNow: 'Identificar Fuente Ahora',
      exploreTools: 'Explorar Herramientas',
      backToHome: 'Volver al Inicio',
      copyCss: 'Copiar CSS',
      copied: 'Copiado'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / VERIFICACIÓN DE TEXTO",
      "cropManually": "Recortar manualmente",
      "newImage": "Nueva imagen",
      "dragCursorInstruction": "Arrastra el cursor sobre la imagen para aislar una región de texto específica:",
      "applyAndRedetect": "Aplicar y redetectar",
      "detectedTextLabel": "Texto detectado:",
      "verifyDetectedText": "Verificar texto detectado",
      "verifyInputPlaceholder": "Verificar o editar texto...",
      "inspectIndividualWords": "Inspeccionar palabras y letras individuales",
      "wordSegmentsLabel": "Segmentos de palabras (Haz clic para aislar una palabra específica):",
      "letterGlyphsLabel": "Glifos de letras (Corrige caracteres individuales o elimina los que no sean letras):",
      "identifyFont": "Identificar fuente",
      "identifyFontFor": "Identificar fuente de \"{word}\"",
      "detectingText": "Detectando texto y formas de letras...",
      "distinctFont": "Fuente distintiva",
      "comparingLetterShapes": "COMPARANDO FORMAS DE LETRAS",
      "matchingFontsProgress": "Comparando con {count} fuentes en tu navegador...",
      "stageA": "ETAPA A: COINCIDENCIA DE HUELLAS DE GLIFOS 16×16",
      "evaluatingContours": "Evaluando contornos de letras en {count} fuentes...",
      "stageB": "ETAPA B: CLASIFICACIÓN DE CANDIDATOS",
      "rankingMatches": "Clasificando las coincidencias más cercanas de Google Fonts...",
      "previewTextHeading": "Texto de vista previa.",
      "previewTextSubheading": "Escribe cualquier texto para verlo aplicado en cada coincidencia.",
      "editText": "↑ Editar texto",
      "previewPlaceholder": "Escribe texto para previsualizar...",
      "bestMatch": "Mejor coincidencia",
      "match": "Coincidencia",
      "designedBy": "Diseñado por {designer} • SIL Open Font License",
      "copyName": "Copiar nombre",
      "copied": "¡Copiado!",
      "googleFonts": "Google Fonts",
      "scanAnother": "Escanear otra imagen",
      "commercialAlternative": "Alternativa comercial:",
      "commercialAlternativeDesc": "Coincide con el estilo de {commercial}. La alternativa gratuita y verificada de Google Fonts es {family}.",
      "compareWithImage": "Comparar con tu imagen",
      "comparePlaceholder": "Escribe texto para comparar...",
      "yourImage": "Tu imagen",
      "matchedFont": "Fuente coincidente",
      "typographySpecimen": "Muestra tipográfica",
      "closestMatchesHeading": "COINCIDENCIAS MÁS CERCANAS DE GOOGLE FONTS",
      "livePreviewGoogleFonts": "Vista previa en vivo renderizada con Google Fonts",
      "closestRank": "más cercana",
      "freeOpenLicense": "Gratis • Licencia abierta",
      "viewOnGoogleFonts": "Ver en Google Fonts",
      "copyCss": "Copiar CSS",
      "liveSpecimenTester": "02 / PROBADOR DE MUESTRAS EN VIVO",
      "size": "Tamaño:",
      "specimenDefaultText": "El veloz murciélago hindú comía feliz cardillo y kiwi",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / PLANO CSS PARA PRODUCCIÓN",
      "copy": "Copiar",
      "openInGoogleFontsRepo": "Abrir en el repositorio de Google Fonts",
      "inspectSpecimenDetails": "Inspeccionar detalles de la muestra →",
      "closestAlternatives": "04 / ALTERNATIVAS VERIFICADAS MÁS CERCANAS",
      "viewSpecimen": "Ver muestra →",
      "opticalMatch": "{confidence}% Coincidencia óptica",
      "errSelectWord": "Por favor, selecciona una palabra para identificar.",
      "errAtLeastOneLetter": "Asegúrate de que haya al menos una letra introducida o detectada.",
      "errInvalidFormat": "Por favor, sube una imagen en formato PNG, JPG o WebP.",
      "errFileTooLarge": "El archivo supera el límite de 10 MB.",
      "errParseFailed": "Error al procesar la imagen."
  },

  home: {
    "meta": {
      "title": "Font Finder — Identificador gratuito de fuentes por imagen",
      "description": "Identifica cualquier fuente a partir de imágenes y capturas de pantalla al instante con Font Finder. Analiza las formas de las letras y obtén alternativas gratuitas y verificadas."
    },
    "hero": {
      "headlinePrefix": "Identifica fuentes en",
      "subtitle": "Suelta cualquier captura de pantalla para aislar formas de letras, calcular contornos ópticos y obtener Google Fonts de código abierto verificadas."
    },
    "dropzone": {
      "title": "Suelta una imagen o pega una captura (⌘V)",
      "subtitle": "Compatible con PNG, JPG, WebP • Detección 100% privada en el navegador",
      "buttonText": "Seleccionar archivo de imagen"
    },
    "pipeline": {
      "badge": "ARQUITECTURA DE RECONOCIMIENTO",
      "heading": "Canal de reconocimiento en tres pasos",
      "subheading": "De píxeles de mapa de bits sin restricciones a tipografía CSS de código abierto verificada y lista para producción.",
      "localInference": "< 150 ms Inferencia local",
      "zeroUploads": "Cero subidas al servidor",
      "step1": {
        "phase": "FASE 01 // INGESTA",
        "tag": "ENTRADA PURA",
        "title": "Subir o Pegar",
        "desc": "Suelta una imagen o pega al instante desde el portapapeles con",
        "descSuffix": "El recorte interactivo aísla los contornos de los glifos.",
        "crop": "RECORTAR",
        "autoDetect": "Detección automática",
        "footerTraffic": "Cero tráfico al servidor",
        "step": "Paso 1 de 3"
      },
      "step2": {
        "phase": "FASE 02 // ESCANEO NEURONAL",
        "tag": "ACELERACIÓN GPU",
        "title": "Escaneo Óptico",
        "desc": "Extrae contraste, grosores de trazo y huellas dactilares de glifos de 16×16 localmente en memoria con rasterizador de precisión subpíxel.",
        "matrix": "Matriz: Mapas de bits 16×16",
        "apertures": "Aperturas: Geométricas",
        "vectorNodes": "Nodos vectoriales: 100% Coincidencia",
        "footerClient": "100% WebGL del cliente",
        "step": "Paso 2 de 3"
      },
      "step3": {
        "phase": "FASE 03 // SÍNTESIS CSS",
        "tag": "OFL 1.1 VERIFICADO",
        "title": "Exportar Código",
        "desc": "Obtén alternativas verificadas de Google Fonts con reglas CSS probadas en producción de",
        "descSuffix": "reglas CSS.",
        "readyToEmbed": "Listo para insertar",
        "footerOfl": "Gratuito comercial OFL",
        "step": "Paso 3 de 3"
      }
    },
    "engineSpecs": {
      "badge": "ESPECIFICACIONES DEL MOTOR",
      "title": "Coincidencias de código abierto.",
      "titleAccent": "Listas para producción.",
      "desc": "Evita trampas de licencias comerciales. Font Finder asigna formas de letras de mapa de bits a alternativas auténticas y gratuitas de Google Fonts.",
      "licensingModel": "Modelo de licencia",
      "licensingValue": "100% Gratuito SIL Open Font License",
      "processingArch": "Arquitectura de procesamiento",
      "processingValue": "100% WebGL / Canvas en el cliente",
      "cdnIntegration": "Integración CDN",
      "cdnValue": "Incrustaciones directas de Google Fonts",
      "jsonOutput": "Salida JSON"
    },
    "guide": {
      "imageRecognition": {
        "badge": "RECONOCIMIENTO DE IMAGEN",
        "title": "Encontrar una fuente a partir de una imagen",
        "desc": "Descubrir una tipografía atractiva es inspirador, pero identificarla a partir de un gráfico plano puede resultar complicado. Ya sea en un cartel, revista, banner o captura, preguntar \"¿qué fuente es esta?\" es un dilema común en el diseño visual.",
        "cardP1": "Un identificador de fuentes por imagen dedicado une los píxeles estáticos con fuentes tipográficas activas. En lugar de buscar en catálogos, extrae estructuras de glifos y las compara con bibliotecas indexadas.",
        "cardP2": "Ya sea auditando marcas heredadas, analizando interfaces de la competencia o explorando tipografías, un buscador óptico simplifica el descubrimiento. ProFontFinder te ayuda a encontrar esa fuente al instante con resultados garantizados."
      },
      "opticalAnalysis": {
        "badge": "ANÁLISIS ÓPTICO",
        "title": "¿Cómo funciona la identificación de fuentes?",
        "desc": "La identificación de fuentes combina visión artificial con análisis de formas de letras. Mientras que el OCR tradicional solo transcribe palabras, un identificador especializado analiza curvaturas estilísticas, proporciones y rasgos anatómicos."
      },
      "commercialFree": {
        "title": "Tipografía de nivel comercial sin tarifas de suscripción",
        "desc": "Nuestro buscador gratuito de fuentes soluciona esto haciendo coincidir fuentes comerciales con alternativas auténticas de código abierto bajo la licencia SIL Open Font License:",
        "commOriginal": "ORIGINAL COMERCIAL",
        "exploreLink": "Explora más de 50 fuentes gemelas de código abierto en nuestra herramienta de alternativas comerciales"
      },
      "digitalAssets": {
        "badge": "ESCANEO DE ACTIVOS DIGITALES",
        "title": "Identifica fuentes de capturas de pantalla y logotipos",
        "desc": "La inspiración tipográfica suele provenir de capturas de pantalla, gráficos y logotipos de marcas.",
        "card1Title": "Capturas de pantalla de aplicaciones web y móviles",
        "card1Desc": "Toma un recorte de pantalla mientras navegas y suéltalo en nuestro Screenshot Font Finder para obtener respuestas instantáneas sin muros de pago.",
        "card1Link": "Iniciar escáner de capturas de pantalla",
        "card2Title": "Logotipos de marcas y reconocimiento de marcas denominativas",
        "card2Desc": "Descubre la tipografía fundamental detrás de marcas famosas con nuestro Logo Font Finder, asignando el interletreado personalizado a familias accesibles.",
        "card2Link": "Explorar directorio de fuentes de logotipos"
      },
      "styleTaxonomy": {
        "badge": "TAXONOMÍA DE ESTILOS",
        "title": "Explora diferentes estilos de fuentes",
        "desc": "Comprender los estilos tipográficos te ayuda a afinar tu búsqueda:",
        "serifTitle": "Fuentes con serifa (Serif)",
        "serifDesc": "Trazos decorativos en los extremos que transmiten elegancia editorial y tradición (p. ej., Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "Fuentes de palo seco (Sans-Serif)",
        "sansDesc": "Líneas limpias y alta legibilidad en pantalla, desde Montserrat geométrica hasta opciones versátiles como Inter y Roboto.",
        "displayTitle": "Fuentes de visualización y titulares",
        "displayDesc": "Fuerte personalidad y anchos condensados diseñados para títulos de gran impacto (p. ej., Bebas Neue, Anton, Syne).",
        "cursiveTitle": "Manuscritas y cursivas",
        "cursiveDesc": "Caligrafía orgánica y trazos naturales. Descubre fuentes cursivas en nuestro Handwriting Font Finder o explora nuestras herramientas tipográficas."
      },
      "practicalUtility": {
        "badge": "UTILIDAD PRÁCTICA",
        "title": "Font Finder para diseñadores y desarrolladores",
        "desc": "ProFontFinder agiliza los flujos de trabajo en todas las disciplinas creativas:",
        "devTitle": "Desarrolladores Frontend",
        "devDesc": "Copia fragmentos @import de Google Fonts y declaraciones Tailwind directamente. Inspecciona sitios web con nuestro URL Font Finder.",
        "uiTitle": "Diseñadores UI/UX",
        "uiDesc": "Haz coincidir la tipografía de capturas y paneles de inspiración para mantener la coherencia en tus diseños de Figma.",
        "creatorTitle": "Creadores y aficionados a la tipografía",
        "creatorDesc": "Explora combinaciones equilibradas de titulares y cuerpo de texto con nuestra herramienta interactiva de emparejamiento de fuentes."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "Preguntas frecuentes",
      "items": [
        {
          "q": "¿Qué es What The Font Finder y cómo funciona?",
          "a": "What The Font Finder es una herramienta tipográfica gratuita en línea que analiza texto en imágenes, fotos y capturas para identificar la fuente exacta o la alternativa de Google Fonts de código abierto más cercana."
        },
        {
          "q": "¿Puede Google identificar una fuente?",
          "a": "Aunque Google Lens reconoce texto, no está especializado en pesos tipográficos ni declaraciones exactas de font-family. ProFontFinder está optimizado para diseñadores y desarrolladores."
        },
        {
          "q": "¿Cómo puedo identificar un tipo de fuente?",
          "a": "Examina si tiene serifas o es sans-serif, observa la forma de letras como la \"a\" o la \"g\", y sube una captura a ProFontFinder para obtener coincidencia óptica automática."
        },
        {
          "q": "¿Cómo ver qué fuente se está usando?",
          "a": "Haz clic derecho en una web y pulsa \"Inspeccionar\" (F12) para ver font-family en DevTools. Si está dentro de una imagen o logotipo, captura la pantalla y súbela a ProFontFinder."
        },
        {
          "q": "¿Puedo usar IA para identificar una fuente?",
          "a": "Sí. Los identificadores modernos como ProFontFinder utilizan visión artificial y comparación vectorial en el navegador sin subir tus imágenes a ningún servidor."
        },
        {
          "q": "¿Existe un identificador de fuentes gratuito?",
          "a": "Sí, ProFontFinder es 100% gratuito sin límites de escaneo ni muros de pago. Todos los resultados son fuentes libres bajo la licencia SIL Open Font License."
        },
        {
          "q": "¿Cómo hacer coincidir una fuente?",
          "a": "Captura una imagen nítida, súbela a ProFontFinder, verifica los caracteres detectados y revisa las fuentes sugeridas con el comparador interactivo."
        },
        {
          "q": "¿Puedo tomar una foto de una fuente y encontrarla?",
          "a": "¡Sí! Puedes fotografiar cualquier cartel, libro o menú con tu móvil y subirlo directamente. Asegúrate de que tenga buena iluminación y esté enfocado."
        },
        {
          "q": "¿Dónde puedo encontrar fuentes gratuitas?",
          "a": "La fuente principal de tipografías web gratuitas con licencia comercial es Google Fonts (fonts.google.com). También puedes usar nuestra suite de herramientas tipográficas."
        },
        {
          "q": "¿Cómo encontrar una fuente de texto específica?",
          "a": "Recorta de forma ajustada una palabra de 3 a 6 letras distintivas (como \"R\", \"g\", \"a\" o \"e\") y súbela a ProFontFinder."
        },
        {
          "q": "¿Cómo uso Google Fonts?",
          "a": "Elige tu fuente identificada, copia el enlace @import o la etiqueta <link> en tu web y aplica la regla CSS: font-family: \"Inter\", sans-serif;."
        },
        {
          "q": "¿Cómo identificar una fuente en un PDF?",
          "a": "Abre el PDF y consulta Archivo > Propiedades > Fuentes. Si el texto está rasterizado, haz una captura (Win+Shift+S o Cmd+Shift+4) y pégala en ProFontFinder."
        },
        {
          "q": "¿Puedo crear una fuente usando IA?",
          "a": "ProFontFinder identifica fuentes existentes; herramientas generativas (como Calligraphr o Fontjoy) permiten generar archivos de fuentes a partir de bocetos."
        },
        {
          "q": "¿El identificador reconoce fuentes cursivas?",
          "a": "Sí, ProFontFinder reconoce estilos cursivos y caligráficos. Usar una imagen de alta resolución ayuda al motor a trazar los trazos continuos."
        },
        {
          "q": "¿Qué tipos de fuentes cubre ProFontFinder?",
          "a": "Cubre todos los géneros: Sans-Serif, Serif, Monoespaciadas, Display y Cursivas en toda la colección verificada de Google Fonts."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "LATENCIA OCR // <80MS",
      "engineReady": "Motor de coincidencia óptica listo",
      "signatures": "1.935 Firmas",
      "title": "¿Listo para identificar una fuente?",
      "desc": "Suelta cualquier imagen arriba para aislar formas de letras, calcular geometría de contornos y obtener Google Fonts de código abierto verificadas.",
      "btnIdentify": "Identificar fuente ahora",
      "btnTools": "Explorar herramientas de fuentes",
      "badgeInBrowser": "100% En el navegador",
      "badgeZeroLatency": "Cero latencia",
      "badgeTestedCss": "Incrustaciones CSS probadas"
    }
  },
  toolsOverview: {
    meta: {
      title: 'Herramientas Tipográficas — Utilidades Gratuitas de Identificación',
      description: 'Utilidades tipográficas especializadas para encontrar alternativas comerciales gratuitas, extraer fuentes de logos, combinar tipografías y detectar fuentes web.'
    },
    badge: 'SUITE DE HERRAMIENTAS',
    title: 'Herramientas tipográficas',
    subtitle: 'Utilidades tipográficas diseñadas para tareas específicas. Todas gratuitas, ilimitadas y ejecutadas de forma privada en tu navegador.',
    tools: {
      commercialAlternative: {
        title: 'Encuentra una alternativa gratuita a una fuente de pago',
        description: 'Sube una imagen de una tipografía comercial y obtén la fuente gratuita más cercana que puedes usar legalmente.'
      },
      urlFontFinder: {
                            title: 'Detecta fuentes desde el enlace de cualquier sitio web',
        description: 'Introduce cualquier URL para extraer fuentes web activas, declaraciones @font-face y pilas tipográficas.'
      },
      logoFontFinder: {
        title: 'Identifica la fuente en un logotipo',
        description: 'Sube un logotipo y descubre qué tipografía utiliza, además de fuentes gratuitas con un aspecto idéntico.'
      },
      screenshotFontFinder: {
        title: 'Encuentra la fuente en una captura de pantalla',
        description: 'Las capturas son el caso ideal: letras nítidas, limpias y sin distorsión para una coincidencia exacta.'
      },
      handwritingFontFinder: {
        title: 'Encuentra una fuente manuscrita o script',
        description: 'Las fuentes caligráficas son complejas de identificar. Te mostramos cómo obtener resultados precisos.'
      },
      fontPairing: {
                                                    title: 'Encuentra una combinación de fuentes',
        description: 'Identifica una tipografía y descubre las fuentes complementarias que funcionan en armonía.'
      }
    },
    bottomBanner: {
      title: '¿Buscas el escáner óptico completo?',
      desc: 'Arrastra cualquier captura directamente a nuestro motor óptico principal para aislar letras y comparar con 1,935+ Google Fonts en segundos.',
      button: 'Identificar Fuente Ahora'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Alternativas Gratuitas a Fuentes Comerciales — Comparador de Tipografías',
      description: 'Sube una imagen de una fuente comercial para encontrar alternativas gratuitas y verificadas de Google Fonts con CSS listo para producción.'
    },
    breadcrumb: 'Alternativas a Fuentes Comerciales',
    title: 'Encuentra una alternativa gratuita a una fuente de pago',
    subtitle: 'Sube una imagen de una fuente comercial para obtener alternativas gratuitas verificadas de Google Fonts con código CSS.',
    dropzoneTitle: 'Arrastra una imagen de una fuente comercial',
    dropzoneSubtitle: 'Sube cualquier espécimen, recorte o gráfico para encontrar equivalentes en Google Fonts',
    buttonText: 'Seleccionar Imagen de Muestra'
  },
  logoFontFinder: {
    meta: {
      title: 'Identificar la Fuente de un Logo — Tipografía de Marcas y Alternativas Gratuitas',
      description: 'Sube cualquier imagen de logo para identificar su tipografía y encontrar alternativas gratuitas en Google Fonts.'
    },
    breadcrumb: 'Buscador de Fuentes en Logos',
    title: 'Identifica la fuente en un logotipo',
    subtitle: 'Sube cualquier logotipo o imagen de marca para descubrir qué tipografía utiliza y obtener alternativas gratuitas.',
    dropzoneTitle: 'Arrastra la imagen o isotipo de la marca aquí',
    dropzoneSubtitle: 'Compatible con logos PNG, JPG y WebP con fondo transparente o sólido',
    buttonText: 'Seleccionar Archivo de Logo'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Buscar Fuente en Captura de Pantalla — Pegado Rápido (⌘V) y Coincidencia Óptica',
      description: 'Pega directamente desde tu portapapeles con ⌘V / Ctrl+V o arrastra una captura de pantalla para identificar fuentes en segundos.'
    },
    breadcrumb: 'Buscador de Fuentes en Capturas',
    title: 'Encuentra la fuente en una captura de pantalla',
    subtitle: 'Pega directamente desde tu portapapeles usando ⌘V o Ctrl+V, o arrastra un archivo de captura a continuación.',
    dropzoneTitle: 'Pega una captura (⌘V / Ctrl+V) o arrastra el archivo aquí',
    dropzoneSubtitle: 'Compatible con imágenes PNG, JPG y WebP',
    buttonText: 'Seleccionar Archivo de Captura'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Identificador de Fuentes Manuscritas y Caligrafía — Reconocimiento Óptico',
      description: 'Sube o escanea cualquier muestra de escritura a mano, firma o caligrafía cursiva para identificar fuentes de Google Fonts coincidentes.'
    },
    breadcrumb: 'Buscador de Fuentes Manuscritas',
    title: 'Encuentra una fuente manuscrita o script',
    subtitle: 'Sube o arrastra cualquier muestra de escritura a mano, firma o letras caligráficas para identificar fuentes coincidentes.',
    dropzoneTitle: 'Arrastra muestra de escritura a mano, firma o caligrafía',
    dropzoneSubtitle: 'Compatible con imágenes PNG, JPG y WebP',
    buttonText: 'Seleccionar Imagen Manuscrita'
  },
  urlFontFinder: {
    primaryBrand: "Marca principal",
    highLegibility: "Alta legibilidad",
    visualMatch: "Coincidencia visual:",
    cssVariables: "Variables CSS",
    notice: "Aviso:",

    meta: {
      title: 'Detector de Fuentes por URL — Detecta Tipografías Web desde Cualquier Enlace',
      description: 'Analiza cualquier URL para extraer al instante fuentes web activas, reglas @font-face, enlaces de Google Fonts, pilas tipográficas y fuentes equivalentes gratuitas.'
    },
    badge: 'EXTRACTOR TIPOGRÁFICO WEB EN VIVO',
    title: 'Detecta fuentes desde el enlace de cualquier sitio web',
    subtitle: 'Introduce cualquier URL para analizar fuentes activas, inspeccionar reglas @font-face, extraer pilas tipográficas y descubrir equivalentes gratuitos en Google Fonts.',
    inputPlaceholder: 'https://ejemplo.com',
    analyzeButton: 'Inspeccionar Tipografía en Vivo',
    analyzingButton: 'Analizando tipografía...',
    presetsLabel: 'O prueba una muestra arquitectónica en vivo:',
    resultsTitle: 'Resultados de Inspección Tipográfica en Vivo',
    extractedHeading: 'Fuentes Extraídas',
    freeTwinHeading: 'Equivalente en Google Fonts',
    inspectFont: 'Inspeccionar Fuente',
    liveSpecimenTitle: 'Vista Previa en Vivo (Escribe para probar):',
    sourcesTitle: 'Fuentes Tipográficas y Hojas de Estilo',
    cssTitle: 'Blueprint CSS para Producción',
    copyCss: 'Copiar CSS',
    copied: 'Copiado',
    howItWorksTitle: 'Cómo Funciona la Detección de Fuentes por URL',
    howItWorksP1: 'Al enviar una dirección web, nuestro motor de extracción analiza el documento HTML público para detectar declaraciones de hojas de estilo, enlaces de proveedores de fuentes (Google Fonts, Adobe Typekit, Bunny Fonts) y estilos en línea.',
    howItWorksP2: 'Una vez identificadas las tipografías principales y secundarias, nuestro motor geométrico las empareja con alternativas auténticas y gratuitas de Google Fonts, generando código CSS listo para tus estilos.',
    faqTitle: 'Preguntas Frecuentes',
    faq1: {
      q: '¿Puede esta herramienta detectar fuentes tras páginas de inicio de sesión o muros de pago?',
      a: 'El Buscador por URL solo inspecciona páginas web públicas accesibles sin autenticación. Para páginas o aplicaciones privadas, toma una captura y utiliza nuestro Buscador de Fuentes en Capturas.'
    },
    faq2: {
      q: '¿Qué tan precisa es la recomendación de equivalentes en Google Fonts?',
      a: 'Nuestra base de datos compara métricas visuales (altura de la x, apertura, contraste y ángulos terminales) frente a tipografías verificadas con puntuaciones de similitud geométrica superiores al 90%.'
    },
    faq3: {
      q: '¿Se almacena algún dato al analizar una URL?',
      a: 'Cero. Las URLs enviadas para análisis tipográfico se procesan en memoria y nunca se registran, almacenan ni comparten.'
    }
  },
  fontPairing: {
    surpriseMe: "Sorpréndeme",
    invertRoles: "Invertir roles",
    bodySize: "Tamaño del cuerpo:",
    editable: "editable",
    zeroLayoutShift: "Cero cambios de diseño",
    zeroLayoutShiftDesc: "Intercambio optimizado con font-display swap.",
    zeroLatency: "Cero latencia",
    zeroLatencyDesc: "Procesamiento local con Web Workers.",
    openLicense: "Licencia abierta",
    commercialFree: "Uso comercial gratuito",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Herramienta de Combinación de Fuentes — Armonías Tipográficas en Google Fonts',
      description: 'Explora 31 combinaciones de Google Fonts diseñadas por profesionales. Prueba la armonía entre títulos y texto en vivo, ajusta escalas y copia reglas CSS listas para usar.'
    },
    badge: 'DISEÑO DE SISTEMAS TIPOGRÁFICOS',
    title: 'Encuentra una combinación de fuentes',
    subtitle: 'Explora 31 combinaciones de Google Fonts diseñadas por profesionales. Prueba la armonía entre títulos y texto en vivo, ajusta escalas y copia reglas CSS listas para usar.',
    filterAll: 'Todas las Combinaciones',
    filterSaas: 'SaaS y Tecnología',
    filterEditorial: 'Editorial y Lujo',
    filterCreative: 'Agencia Creativa',
    filterCorporate: 'Corporativo y Finanzas',
    customPreviewPlaceholder: 'Escribe un texto de muestra personalizado para previsualizar en todas las combinaciones...',
    sampleHeading: 'Sistemas de Diseño a Escala',
    sampleBody: 'Una buena tipografía establece una jerarquía visual que guía al lector a través del contenido de manera natural y sin esfuerzo.',
    copyRule: 'Copiar Regla',
    openSpecimen: 'Espécimen'
  },
  about: {
    meta: {
      title: 'Acerca de Nosotros — ProFontFinder | Detección Tipográfica Transparente',
      description: 'Conoce la misión detrás de ProFontFinder: ofrecer reconocimiento tipográfico rápido, privado y 100% gratuito impulsado por Google Fonts y tecnología web moderna.'
    },
    badge: 'TRANSPARENCIA EN INGENIERÍA Y TIPOGRAFÍA ABIERTA',
    title: 'Acerca de ProFontFinder',
    subtitle: 'Construyendo una forma más limpia, rápida y verdaderamente abierta de descubrir, analizar e implementar tipografías en la web.',
    whyTitle: 'Por Qué Creamos ProFontFinder',
    whyP1: 'Durante años, identificar una fuente a partir de una imagen implicaba lidiar con obstáculos frustrantes: registros obligatorios, ventanas emergentes invasivas, suscripciones de pago y sugerencias de fuentes comerciales que costaban cientos de dólares por estilo.',
    whyP2: 'Creíamos que diseñadores y desarrolladores merecían algo fundamentalmente mejor: un comparador óptico instantáneo en el navegador que identifica tipografías en milisegundos, encuentra alternativas abiertas auténticas y entrega código CSS sin rastrearte ni solicitar tarjetas de crédito.',
    pillar1: {
      title: '100% Gratis e Ilimitado',
      desc: 'Sin límites diarios de escaneo, sin planes de pago, sin barreras de correo electrónico y sin costos ocultos. Puedes analizar tantas capturas e imágenes como desees.'
    },
    pillar2: {
      title: 'Cero Retención de Imágenes',
      desc: 'Tus imágenes se procesan localmente en la memoria del navegador usando HTML5 Canvas. Nunca subimos, guardamos ni inspeccionamos tus archivos privados.'
    },
    pillar3: {
      title: 'Auténtico Código Abierto',
      desc: 'Cada recomendación está verificada frente al catálogo oficial de Google Fonts con licencias SIL Open Font License para total libertad comercial.'
    },
    pillar4: {
      title: 'Velocidad en el Cliente',
      desc: 'Al prescindir de conexiones al servidor para vectorizar imágenes, el reconocimiento óptico ocurre en menos de 50 milisegundos directamente en tu dispositivo.'
    },
    principlesTitle: 'Nuestros Principios de Ingeniería',
    p1: {
      title: 'Privacidad por Arquitectura',
      desc: 'No pedimos confianza: diseñamos el sistema eliminando la capacidad técnica de guardar imágenes. Los píxeles permanecen estrictamente en la RAM del cliente.'
    },
    p2: {
      title: 'Cero Relleno, Cero Distracciones',
      desc: 'Sin anuncios a pantalla completa, sin botones de descarga engañosos y sin publicaciones obligatorias en redes. La herramienta carga al instante.'
    },
    p3: {
      title: 'Resultados Listos para Desarrolladores',
      desc: 'Identificar una tipografía es solo la mitad del trabajo. Generamos enlaces @import comprobados, ejes de peso variable y reglas font-family listas para tu código.'
    },
    ctaTitle: '¿Tienes preguntas o sugerencias?',
    ctaDesc: 'Mejoramos constantemente nuestro pipeline de análisis de formas de letras y valoramos los comentarios de la comunidad de desarrolladores.',
    ctaButton: 'Contactar al Equipo'
  },
  howItWorks: {
    meta: {
      title: 'Cómo Funciona — Arquitectura Tipográfica Técnica | ProFontFinder',
      description: 'Descubre la arquitectura técnica de ProFontFinder: vectorización en canvas HTML5 en el cliente, análisis óptico de contornos y puntuación geométrica de Google Fonts.'
    },
    badge: 'ESPECIFICACIÓN TÉCNICA DEL PIPELINE',
    title: 'Cómo Funciona ProFontFinder',
    subtitle: 'Una mirada profunda a nuestros algoritmos de reconocimiento óptico de caracteres, vectorización de contornos y cálculo de distancia geométrica.',
    overviewTitle: 'Visión General de la Arquitectura',
    overviewDesc: 'ProFontFinder opera bajo una arquitectura de cero subidas al servidor. Cada etapa de decodificación de imagen, filtrado de bordes, extracción de glifos y comparación de firmas ocurre localmente en tu navegador web mediante HTML5 Canvas y WebAssembly.',
    phase1: {
      title: 'Fase 1: Ingesta y Normalización Local en Memoria',
      desc: 'Cuando se arrastra una imagen o captura de pantalla al área de trabajo:',
      items: [
        'Se decodifica en un contexto HTML5 Canvas fuera de pantalla en la RAM del navegador.',
        'No se realiza ninguna petición de red; ningún dato de imagen abandona tu dispositivo.',
        'La binarización adaptativa de Otsu separa las formas de letras de gráficos de fondo y ruido.',
        'El contraste y la resolución se normalizan para estandarizar el grosor del trazo.'
      ]
    },
    phase2: {
      title: 'Fase 2: Vectorización Óptica de Glifos',
      desc: 'Una vez establecida la máscara de imagen binarizada:',
      items: [
        'El etiquetado de componentes conectados aísla cuadros delimitadores de glifos individuales.',
        'Algoritmos de trazado de contornos calculan vértices exteriores y contraformas internas.',
        'Las mediciones de proporciones geométricas extraen altura de x, altura de mayúsculas, ascendentes y descendentes.',
        'Los ángulos terminales y la apertura se clasifican en familias serif, sans y display.'
      ]
    },
    phase3: {
      title: 'Fase 3: Puntuación de Distancia Geométrica frente a 1,935+ Google Fonts',
      desc: 'Las firmas vectoriales extraídas se evalúan frente a nuestro catálogo tipográfico precompilado:',
      items: [
        'Los rasgos vectoriales se convierten en una huella digital normalizada y compacta.',
        'La distancia métrica euclidiana compara contornos ópticos con fuentes verificadas de Google Fonts.',
        'Los filtros por categoría (Sans, Serif, Mono, Display, Script) reducen el espacio de búsqueda.',
        'Las puntuaciones de confianza (0-100%) reflejan la similitud geométrica y alineación estructural.'
      ]
    },
    phase4: {
      title: 'Fase 4: Generación de Blueprint CSS para Producción',
      desc: 'Las mejores coincidencias se sintetizan en declaraciones listas para copiar:',
      items: [
        'Etiquetas oficiales de hojas de estilo @import y <link> de Google Fonts CDN.',
        'Declaraciones font-family precisas con fuentes seguras del sistema como respaldo.',
        'Especificaciones de pesos disponibles y ejes de fuentes variables.',
        'Enlaces directos a páginas oficiales de especímenes en Google Fonts para revisión de licencias.'
      ]
    },
    canvasTitle: 'Canvas en Memoria del Lado del Cliente',
    canvasDesc: 'Al aprovechar HTML5 Canvas y la manipulación de píxeles en memoria, ProFontFinder ejecuta transformaciones complejas de imagen sin necesidad de servidores costosos. Esto ofrece cero latencia y confidencialidad absoluta.',
    privacyTitle: 'Garantía de Cero Almacenamiento',
    privacyDesc: 'Dado que ninguna API de servidor recibe tu imagen, tus capturas confidenciales, logotipos inéditos y gráficos privados permanecen 100% seguros. Al cerrar la pestaña del navegador, toda la memoria temporal se libera de inmediato.'
  },
  privacy: {
    meta: {
      title: 'Política de Privacidad — ProFontFinder | Cero Recopilación de Datos',
      description: 'Lee la Política de Privacidad de ProFontFinder. Conoce cómo nuestro motor tipográfico procesa imágenes localmente sin almacenar ni transmitir datos personales.'
    },
    badge: 'TRANSPARENCIA Y PRIVACIDAD DE DATOS',
    title: 'Política de Privacidad',
    subtitle: 'ProFontFinder está diseñado desde sus cimientos para respetar tu privacidad. Todo el análisis tipográfico se realiza localmente en tu navegador.',
    lastUpdated: 'Última actualización: Septiembre de 2026',
    s1Title: '1. Política de Cero Almacenamiento de Imágenes',
    s1P: 'ProFontFinder NO sube, almacena, transmite ni retiene ninguna imagen, captura de pantalla, logotipo o gráfico que proporciones al servicio. Todo el procesamiento de imágenes, reconocimiento óptico, vectorización de contornos y comparación de fuentes se ejecuta 100% localmente en tu dispositivo mediante la memoria Canvas de HTML5.',
    s2Title: '2. Recopilación de Información Personal',
    s2P: 'No requerimos cuentas de usuario, contraseñas, direcciones de correo electrónico ni información de pago para utilizar ProFontFinder. Puedes usar todas las herramientas de identificación tipográfica de forma totalmente anónima.',
    s3Title: '3. Cookies y Almacenamiento Local',
    s3P: 'ProFontFinder no utiliza cookies de seguimiento, cookies publicitarias ni mecanismos de huella digital entre sitios. Únicamente empleamos localStorage para recordar tu preferencia de tema (modo claro u oscuro) localmente en tu dispositivo.',
    s4Title: '4. Enlaces de Terceros y Redes CDN',
    s4P: 'Al previsualizar o cargar fuentes, tu navegador puede conectarse directamente a la CDN de Google Fonts (fonts.googleapis.com y fonts.gstatic.com) para renderizar muestras en vivo. Dichas conexiones están sujetas a la Política de Privacidad de Google.',
    s5Title: '5. Contacto sobre Privacidad',
    s5P: 'Si tienes alguna duda sobre esta Política de Privacidad o sobre nuestra implementación técnica de cero almacenamiento, contáctanos en support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Términos de Servicio — ProFontFinder',
      description: 'Consulta los Términos de Servicio para el uso de ProFontFinder. Herramientas tipográficas gratuitas, abiertas y del lado del cliente para diseñadores y desarrolladores.'
    },
    badge: 'DIRECTRICES LEGALES Y DE USO',
    title: 'Términos de Servicio',
    subtitle: 'Términos sencillos y transparentes para el uso del servicio ProFontFinder.',
    lastUpdated: 'Última actualización: Septiembre de 2026',
    s1Title: '1. Aceptación de los Términos',
    s1P: 'Al acceder o utilizar ProFontFinder (profontfinder.com), aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte de los términos, te rogamos discontinuar el uso del servicio.',
    s2Title: '2. Uso Permitido',
    s2P: 'ProFontFinder se ofrece como una herramienta gratuita para diseñadores, desarrolladores y aficionados a la tipografía. Puedes utilizar el servicio para proyectos personales, comerciales y educativos sin restricciones.',
    s3Title: '3. Licencias Tipográficas y Propiedad Intelectual',
    s3P: 'ProFontFinder identifica formas de letras y recomienda fuentes de código abierto de Google Fonts bajo licencia SIL Open Font License (OFL) o Apache 2.0. Los usuarios son responsables de comprobar las licencias antes de su despliegue comercial.',
    s4Title: '4. Exclusión de Garantías',
    s4P: 'ProFontFinder se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo. Aunque nuestro sistema óptico está diseñado para una alta exactitud, no garantizamos una precisión del 100% en todas las calidades de imagen.',
    s5Title: '5. Limitación de Responsabilidad',
    s5P: 'En ningún caso ProFontFinder ni sus administradores serán responsables por daños indirectos, incidentales o consecuentes derivados del uso o de la imposibilidad de uso del servicio.',
    s6Title: '6. Modificaciones al Servicio',
    s6P: 'Nos reservamos el derecho de modificar o discontinuar cualquier parte del servicio en cualquier momento y sin previo aviso.'
  },
  contact: {
    meta: {
      title: 'Contacto — Soporte y Consultas | ProFontFinder',
      description: 'Ponte en contacto con el equipo de ingeniería de ProFontFinder. Envía reportes de errores, sugerencias de fuentes, comentarios o consultas generales.'
    },
    badge: 'PONTE EN CONTACTO',
    title: 'Contacto y Soporte',
    subtitle: '¿Tienes preguntas, sugerencias o un reporte de error? Comunícate con el equipo de ingeniería de ProFontFinder.',
    form: {
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Gracias! Hemos recibido tu mensaje. Nuestro equipo revisará tu consulta a la brevedad.'
    },
    directEmail: {
      title: 'Soporte por Correo Directo',
      desc: 'Para consultas urgentes, colaboraciones técnicas o cuestiones de seguridad, escribe a nuestro equipo directamente a support@profontfinder.com.'
    },
    responseTime: {
      title: 'Tiempo de Respuesta',
      desc: 'Normalmente respondemos a las consultas en un plazo de 24 a 48 horas laborables.'
    },
    faqTitle: 'Preguntas Frecuentes',
    faq1: {
      q: '¿Puedo solicitar la adición de una nueva fuente de Google Fonts?',
      a: 'Nuestra base de datos se sincroniza automáticamente con el catálogo oficial de Google Fonts. Si una fuente nueva fue publicada recientemente, será indexada en la siguiente actualización del catálogo.'
    },
    faq2: {
      q: '¿Ofrecen una API para identificación tipográfica automatizada?',
      a: 'Actualmente estamos evaluando una API para desarrolladores para flujos de trabajo automatizados. ¡No dudes en contactarnos con tu caso de uso!'
    }
  },
  guides: {
    meta: {
      title: "Guías de Tipografía e Identificación de Fuentes — Pro Font Finder",
      description: "Guías de expertos, tutoriales prácticos y mejores prácticas para identificar fuentes a partir de imágenes, combinar fuentes y encontrar alternativas comerciales."
    },
    badge: "Guías y Tutoriales",
    title: "Domina la Identificación de Fuentes y Tipografía",
    subtitle: "Guías completas, consejos prácticos y flujos de trabajo para diseñadores, desarrolladores y creadores.",
    allGuides: "Todas las Guías",
    readTimeSuffix: "de lectura",
    tryTool: "Probar Esta Herramienta",
    items: [
      {
        id: "image-identification-guide",
        category: "Identificación de Fuentes",
        tag: "Guía Esencial",
        title: "Cómo Identificar con Precisión Cualquier Fuente desde una Imagen o Captura",
        desc: "Aprende técnicas de alta precisión para preparar imágenes, recortar líneas base de glifos y encontrar fuentes oscuras en segundos.",
        readTime: "4 min",
        steps: [
          "Recorta ajustadamente alrededor de caracteres nítidos y de alto contraste (como a, g, R, Q).",
          "Asegura la alineación horizontal de la línea base para un reconocimiento óptico óptimo.",
          "Sube la imagen directamente a Pro Font Finder para un análisis instantáneo por vectores."
        ],
        toolLink: "/",
        toolName: "Abrir Buscador de Fuentes por Imagen"
      },
      {
        id: "commercial-alternatives-guide",
        category: "Alternativas Comerciales",
        tag: "Ahorro de Costes",
        title: "Encontrar Fuentes de Google Gratuitas para Reemplazar Tipografías Comerciales Costosas",
        desc: "Hoja de trucos para diseñadores: reemplaza Helvetica, Futura, Gotham, Proxima Nova y DIN por fuentes de código abierto 100% gratuitas.",
        readTime: "5 min",
        steps: [
          "Identifica rasgos geométricos frente a humanistas (altura de x, apertura, terminales).",
          "Usa nuestro motor especializado para hacer coincidir grosor de trazo y proporciones.",
          "Exporta reglas CSS @import listas para usar sin pagar tarifas de licencia."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "Explorar Alternativas Comerciales"
      },
      {
        id: "font-pairing-principles",
        category: "Combinación y Diseño",
        tag: "Mejores Prácticas",
        title: "Las Reglas de Oro para Combinar Tipografías: Contraste, Jerarquía y Armonía",
        desc: "No vuelvas a dudar al combinar fuentes. Aprende a asociar títulos llamativos con texto de párrafo nítido usando teoría probada de diseño.",
        readTime: "6 min",
        steps: [
          "Combina títulos con Serif y cuerpo Sans-Serif (o viceversa) para una distinción visual clara.",
          "Mantén coherencia en el tono y la época (ej. títulos geométricos con cuerpo sans moderno).",
          "Prueba combinaciones en tiempo real con nuestro Estudio de Combinación de Fuentes."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "Abrir Estudio de Combinación"
      },
      {
        id: "inspect-web-fonts",
        category: "Técnico y Web",
        tag: "Flujo de Desarrollador",
        title: "Cómo Extraer e Inspeccionar Fuentes de Cualquier Sitio Web Activo",
        desc: "Descubre qué tipografía utiliza cualquier página web sin abrir las herramientas para desarrolladores ni bucear en CSS minificado.",
        readTime: "3 min",
        steps: [
          "Copia la URL del sitio web de destino.",
          "Pégala en nuestro Buscador de Fuentes por URL para extraer las familias tipográficas.",
          "Inspecciona variables CSS computadas, fuentes de respaldo y enlaces a Google Fonts."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "Probar Buscador de Fuentes por URL"
      },
      {
        id: "handwriting-identification",
        category: "Identificación de Fuentes",
        tag: "Manuscrita y Caligrafía",
        title: "Cómo Emparejar Notas Manuscritas y Firmas con Fuentes Digitales de Script",
        desc: "Técnicas para descifrar letras hechas a mano, ligaduras cursivas y encontrar fuentes Google Script editables con el mismo encanto.",
        readTime: "4 min",
        steps: [
          "Segmenta caracteres cursivos conectados en raíces de letras identificables.",
          "Analiza el ángulo de inclinación, las proporciones de bucles y la variación de presión.",
          "Encuentra coincidencias entre fuentes cursivas verificadas de Google Fonts."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "Emparejar Fuentes Manuscritas"
      },
      {
        id: "how-engine-works-guide",
        category: "Técnico y Web",
        tag: "Arquitectura",
        title: "Bambalinas: Cómo ProFontFinder Utiliza OCR en el Navegador y Matemáticas Vectoriales",
        desc: "Descubre el procesamiento de imágenes en el cliente: Web Workers, detección de bordes, invariantes de forma y privacidad total sin servidores.",
        readTime: "5 min",
        steps: [
          "Toda la manipulación de imágenes se ejecuta 100% en la memoria RAM de tu dispositivo.",
          "Cero subidas de imágenes, cero almacenamiento en servidores, cero telemetría.",
          "Comparación de vectores en menos de 100 ms contra cientos de fuentes abiertas."
        ],
        toolLink: "/how-it-works",
        toolName: "Leer Arquitectura Técnica"
      }
    ],
    faqTitle: "Preguntas Frecuentes sobre Identificación de Fuentes",
    faqs: [
      {
        q: "¿Puede ProFontFinder identificar fuentes en imágenes borrosas o de baja resolución?",
        a: "¡Sí! Nuestro preprocesamiento incluye normalización de contraste, umbralización y filtros morfológicos para realzar los contornos antes de comparar."
      },
      {
        q: "¿Todas las alternativas recomendadas son gratuitas para uso comercial?",
        a: "Cada una de las fuentes catalogadas en ProFontFinder cuenta con licencias de código abierto (SIL OFL o Apache 2.0), haciéndolas 100% gratuitas para proyectos comerciales y personales."
      },
      {
        q: "¿Se almacenan mis imágenes subidas en sus servidores?",
        a: "Nunca. Todo el análisis de fuentes, procesamiento OCR y comparación vectorial ocurre localmente en la memoria de tu navegador. Jamás transmitimos ni guardamos tus imágenes."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — Página No Encontrada | ProFontFinder',
      description: 'La página que buscas no existe o ha sido movida.'
    },
    badge: 'ERROR 404',
    title: 'Página No Encontrada',
    desc: 'La página que buscas no existe o ha sido movida.',
    backHome: 'Volver al Inicio',
    exploreTools: 'Explorar Herramientas'
  }
};
