import type { SupportedLocale } from './languages';

export interface ViewTranslation {
  commercial: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    buttonText: string;
    directoryBadge: string;
    directoryTitle: string;
    directorySubtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterGeometric: string;
    filterNeoGrotesque: string;
    filterSerif: string;
    filterHumanist: string;
    filterDisplay: string;
    recommendedStandIn: string;
    freeOfl: string;
    match: string;
    by: string;
    getFreeFont: string;
    specimen: string;
    copyCss: string;
    copied: string;
    noResults: string;
    faqBadge: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: { q: string; a: string }[];
  };
  logo: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    buttonText: string;
    directoryBadge: string;
    directoryTitle: string;
    directorySubtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterTech: string;
    filterFashion: string;
    filterMedia: string;
    filterAuto: string;
    filterAerospace: string;
    officialTypeface: string;
    freeEquivalent: string;
    match: string;
    by: string;
    getFont: string;
    specimen: string;
    copyCss: string;
    copied: string;
    noResults: string;
    faqBadge: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: { q: string; a: string }[];
  };
  pdf: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    buttonText: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    faqBadge: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: { q: string; a: string }[];
  };
  guidesFeatured: {
    badge: string;
    title: string;
    viewAll: string;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    backToGuides: string;
    backToArticles: string;
    tryLiveEngine: string;
    tryLiveEngineSubtitle: string;
    launchFinder: string;
    browseTwins: string;
    minRead: string;
  };
  home: {
    heroTitle: string;
    heroHighlight: string;
    matrixBadge: string;
    matrixTitle: string;
    matrixSubtitle: string;
    colFeature: string;
    colGeneric: string;
    colLegacy: string;
    rowDualTitle: string;
    rowDualPro: string;
    rowDualGeneric: string;
    rowDualLegacy: string;
    rowPrivacyTitle: string;
    rowPrivacyPro: string;
    rowPrivacyGeneric: string;
    rowPrivacyLegacy: string;
    rowExportTitle: string;
    rowExportPro: string;
    rowExportGeneric: string;
    rowExportLegacy: string;
    rowSpecimenTitle: string;
    rowSpecimenPro: string;
    rowSpecimenGeneric: string;
    rowSpecimenLegacy: string;
    rowPricingTitle: string;
    rowPricingPro: string;
    rowPricingGeneric: string;
    rowPricingLegacy: string;
    repoBadge: string;
    repoTitle: string;
    repoSubtitle: string;
    repoViewAll: string;
  };
  toolsIndex: {
    pdfTitle: string;
    pdfDesc: string;
    blogTitle: string;
  };
}

export const VIEW_TRANSLATIONS: Record<SupportedLocale, ViewTranslation> = {
  en: {
    commercial: {
      badge: 'COMMERCIAL FONT ALTERNATIVE FINDER',
      heroTitle: 'Free Alternatives to',
      heroHighlight: 'Commercial Fonts',
      heroSubtitle: 'Upload any commercial font screenshot or browse the index below to find visually matching 100% free Google Fonts with production CSS.',
      dropzoneTitle: 'Drop a commercial font image or screenshot',
      dropzoneSubtitle: 'Supports PNG, JPG, WebP • Match paid typefaces with free Google Font twins',
      buttonText: 'Select Image to Match',
      directoryBadge: 'COMMERCIAL TO FREE GOOGLE FONT INDEX',
      directoryTitle: 'Commercial Font Twins Directory',
      directorySubtitle: "Don't let expensive licensing budgets halt your project. Replace paid typefaces with verified, open-source Google Font twins.",
      searchPlaceholder: 'Search font (e.g. Helvetica, Futura)...',
      filterAll: 'All Fonts',
      filterGeometric: 'Geometric Sans',
      filterNeoGrotesque: 'Neo-Grotesque',
      filterSerif: 'Serif Typefaces',
      filterHumanist: 'Humanist Sans',
      filterDisplay: 'Display & Slab',
      recommendedStandIn: 'RECOMMENDED FREE STAND-IN',
      freeOfl: '100% Free OFL',
      match: 'Match',
      by: 'by',
      getFreeFont: 'Get Free Font ↗',
      specimen: 'Specimen →',
      copyCss: 'Copy CSS',
      copied: 'Copied!',
      noResults: "No matching commercial fonts found. Try another query like 'Helvetica' or 'Futura'.",
      faqBadge: 'FREQUENTLY ASKED QUESTIONS',
      faqTitle: 'Commercial Font Alternatives Guide',
      faqSubtitle: 'Everything you need to know about replacing paid typefaces with 100% legal Google Font stand-ins.',
      faqs: [
        {
          q: 'What is a font alternative or twin font?',
          a: 'A font alternative (or twin font) is an open-source or free typeface that shares nearly identical optical proportions, x-height, terminal cuts, and stroke contrast with an expensive commercial typeface, making it an ideal zero-license replacement.'
        },
        {
          q: 'Can I legally use these Google Fonts for commercial client projects?',
          a: 'Yes, 100%. All recommended font twins are licensed under the SIL Open Font License (OFL) or Apache 2.0 license, allowing unrestricted commercial use in websites, apps, print graphics, and merchandise.'
        },
        {
          q: 'What is the closest free Google Font to Helvetica?',
          a: 'Inter (by Rasmus Andersson) is widely regarded as the closest modern free alternative to Helvetica, featuring identical horizontal terminals and neutral Neo-Grotesque geometry optimized for screens.'
        },
        {
          q: 'How does ProFontFinder calculate optical similarity?',
          a: 'Our client-side matching engine analyzes glyph aspect ratios, x-height proportions, stroke contrast, terminal angles, and 16×16 vector matrix signatures to calculate exact geometric similarity scores.'
        }
      ]
    },
    logo: {
      badge: 'LOGO FONT IDENTIFIER',
      heroTitle: 'Identify the Font in a',
      heroHighlight: 'Brand Logo',
      heroSubtitle: 'Upload any brand logo or wordmark image to discover what typeface it uses and get 100% free Google Font alternatives.',
      dropzoneTitle: 'Drop brand logo or wordmark image here',
      dropzoneSubtitle: 'Supports PNG, JPG, and WebP logos with transparent or solid backgrounds',
      buttonText: 'Select Logo File',
      directoryBadge: 'BRAND TYPOGRAPHY INDEX',
      directoryTitle: 'Brand Logos & Official Fonts Directory',
      directorySubtitle: 'Explore the official typefaces and verified free Google Font alternatives behind the world’s most recognizable brand identities.',
      searchPlaceholder: 'Search brand or font (e.g. Nike, Spotify, Apple)...',
      filterAll: 'All Brands',
      filterTech: 'Tech & Software',
      filterFashion: 'Fashion & Luxury',
      filterMedia: 'Media & Entertainment',
      filterAuto: 'Automotive & Mobility',
      filterAerospace: 'Aerospace & Science',
      officialTypeface: 'OFFICIAL BRAND TYPEFACE',
      freeEquivalent: 'FREE GOOGLE FONT EQUIVALENT',
      match: 'Match',
      by: 'by',
      getFont: 'Get Font ↗',
      specimen: 'Specimen →',
      copyCss: 'Copy CSS',
      copied: 'Copied!',
      noResults: "No matching brand logos found. Try searching for 'Nike', 'Spotify', or 'Apple'.",
      faqBadge: 'FREQUENTLY ASKED QUESTIONS',
      faqTitle: 'Logo Font Identification Guide',
      faqSubtitle: 'Learn how world-class logos use typography and how to find legal free alternatives for your branding.',
      faqs: [
        {
          q: 'How do I identify a font from a logo image?',
          a: 'Upload the logo image into ProFontFinder, drag the crop box to isolate the wordmark text, and our in-browser AI engine will analyze letter contours and rank the closest commercial fonts and free Google Font alternatives in seconds.'
        },
        {
          q: 'Can I legally use famous brand logo fonts in my own projects?',
          a: 'You cannot copy a registered brand logo or trademark. However, you CAN legally license the underlying commercial typeface, or use our recommended 100% free Google Font stand-ins (like Inter, Oswald, or Poppins) for your own original branding.'
        },
        {
          q: 'What font does the Nike logo use?',
          a: 'The Nike wordmark and "Just Do It" slogan use a heavily customized, slanted version of Futura Bold Extra Condensed. The closest free Google Font equivalent is Oswald (700 Italic).'
        },
        {
          q: 'What font is used in the Netflix logo?',
          a: 'Netflix uses a custom bespoke typeface called Netflix Sans, which evolved from Gotham and Bebas Neue roots. The closest free Google Font is Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'PDF FONT DETECTOR',
      heroTitle: 'Identify Fonts in',
      heroHighlight: 'PDF',
      heroSubtitle: 'Upload any PDF document, invoice, or ebook directly. Match fonts against 1,935+ verified Google Fonts with 100% in-browser privacy.',
      dropzoneTitle: 'Drop PDF file or paste screenshot (⌘V / Ctrl+V)',
      dropzoneSubtitle: 'Supports .pdf documents, invoices, or image snippets',
      buttonText: 'Select PDF File',
      feature1Title: 'High-Resolution Vector Rasterization',
      feature1Desc: 'Extract sharp letterform contours directly from your PDF document without distortion.',
      feature2Title: '100% In-Browser Privacy',
      feature2Desc: 'Confidential PDF invoices and legal contracts stay in your browser RAM. Zero server uploads.',
      feature3Title: 'Free Google Font Equivalents',
      feature3Desc: 'Instantly find open-source substitutes to replace missing fonts in your PDF documents.',
      faqBadge: 'FREQUENTLY ASKED QUESTIONS',
      faqTitle: 'PDF Font Identification FAQ',
      faqSubtitle: 'Common questions about detecting fonts inside PDF documents and ebooks.',
      faqs: [
        {
          q: 'How do I detect a font from a PDF file?',
          a: 'Upload your .pdf document directly into the dropzone (or paste a screenshot using Ctrl+V / Cmd+V), and our in-browser engine will automatically extract the page and identify the font in seconds.'
        },
        {
          q: 'Can ProFontFinder identify both vector and scanned PDF text?',
          a: 'Yes. Our dual-stage optical engine works on both vector-exported PDF pages and scanned paper documents with optical thresholding and contrast enhancement.'
        },
        {
          q: 'Are my confidential PDF documents kept private?',
          a: 'Yes, 100%. All PDF processing and letterform matching occur locally within your browser memory. No PDF pages or files are ever uploaded to external servers.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'FEATURED RESEARCH & COMPARISON GUIDES',
      title: 'Commercial Alternatives & Typography Mechanics',
      viewAll: 'View all guides →'
    },
    blog: {
      badge: 'PROFONTFINDER RESEARCH & GUIDES',
      title: 'Typography Engineering & Font Alternatives',
      subtitle: 'In-depth research on commercial font equivalents, optical OCR mechanics, and legal open-source font deployment.',
      readArticle: 'Read Article →',
      backToGuides: 'Back to Guides',
      backToArticles: 'Back to All Articles',
      tryLiveEngine: 'TRY THE LIVE MATCHING ENGINE',
      tryLiveEngineSubtitle: 'Need to identify an unknown font from an image, logo, or screenshot?',
      launchFinder: 'Launch Font Finder',
      browseTwins: 'Browse Free Twins',
      minRead: 'min read'
    },
    home: {
      heroTitle: 'Identify Any Font',
      heroHighlight: 'In Seconds',
      matrixBadge: 'TOOL COMPARISON',
      matrixTitle: 'Built for Pure In-Browser Speed & Zero Server Uploads',
      matrixSubtitle: 'See how Pro Font Finder’s local recognition engine compares against legacy paywalls and slow cloud tools.',
      colFeature: 'Feature Capability',
      colGeneric: 'Generic Online Tools',
      colLegacy: 'Legacy Commercial Tools',
      rowDualTitle: 'Dual Engine Matching',
      rowDualPro: 'Identifies paid + 1-click free Google Font twins',
      rowDualGeneric: 'Basic font guessing only',
      rowDualLegacy: 'Paid commercial fonts only (No free twins)',
      rowPrivacyTitle: 'Client-Side Privacy',
      rowPrivacyPro: '100% In-Browser (Zero uploads to remote servers)',
      rowPrivacyGeneric: 'Uploads images to third-party cloud',
      rowPrivacyLegacy: 'Mandatory server uploads & cloud retention',
      rowExportTitle: 'Developer Code Export',
      rowExportPro: 'Production CSS blueprints, @import rules, HTML tags & Tailwind v4 design tokens',
      rowExportGeneric: 'Plain font name text',
      rowExportLegacy: 'Purchase links only ($35-$300+)',
      rowSpecimenTitle: 'Side-by-Side Specimen Comparison',
      rowSpecimenPro: 'Dual-pane visual inspection, live specimen editor & sticky crop zoom',
      rowSpecimenGeneric: 'Static low-res preview',
      rowSpecimenLegacy: 'None',
      rowPricingTitle: 'Pricing & Usage Limits',
      rowPricingPro: '100% Free Forever • Unlimited Scans • No Signup',
      rowPricingGeneric: 'Ad-cluttered with daily scan limits',
      rowPricingLegacy: 'Monthly subscriptions or per-scan billing',
      repoBadge: 'VERIFIED REPOSITORY',
      repoTitle: 'Popular open-source typefaces',
      repoSubtitle: 'Ready to browse, test, and copy for your projects.',
      repoViewAll: 'View all verified fonts'
    },
    toolsIndex: {
      pdfTitle: 'PDF Font Detector',
      pdfDesc: 'Capture any invoice, contract, or ebook screenshot to identify embedded or rasterized PDF typography.',
      blogTitle: 'Typography Blog'
    }
  },
  es: {
    commercial: {
      badge: 'BUSCADOR DE ALTERNATIVAS A FUENTES DE PAGO',
      heroTitle: 'Alternativas Gratuitas a',
      heroHighlight: 'Fuentes Comerciales',
      heroSubtitle: 'Sube una captura de cualquier fuente de pago o explora el directorio para encontrar tipografías gratuitas de Google Fonts con CSS para producción.',
      dropzoneTitle: 'Arrastra una imagen o captura de fuente comercial',
      dropzoneSubtitle: 'Compatible con PNG, JPG, WebP • Encuentra equivalentes en Google Fonts',
      buttonText: 'Seleccionar Imagen para Comparar',
      directoryBadge: 'ÍNDICE DE FUENTES COMERCIALES A GOOGLE FONTS',
      directoryTitle: 'Directorio de Fuentes Comerciales y sus Gemelas',
      directorySubtitle: 'No dejes que los costes de licencia detengan tu proyecto. Reemplaza fuentes de pago con alternativas verificadas de Google Fonts.',
      searchPlaceholder: 'Buscar fuente (ej. Helvetica, Futura)...',
      filterAll: 'Todas las Fuentes',
      filterGeometric: 'Geométricas',
      filterNeoGrotesque: 'Neo-Grotescas',
      filterSerif: 'Con Serifas',
      filterHumanist: 'Humanistas',
      filterDisplay: 'Display y Slab',
      recommendedStandIn: 'ALTERNATIVA GRATUITA RECOMENDADA',
      freeOfl: '100% Libre OFL',
      match: 'Coincidencia',
      by: 'por',
      getFreeFont: 'Obtener Fuente ↗',
      specimen: 'Espécimen →',
      copyCss: 'Copiar CSS',
      copied: '¡Copiado!',
      noResults: "No se encontraron fuentes comerciales. Prueba con otra búsqueda como 'Helvetica' o 'Futura'.",
      faqBadge: 'PREGUNTAS FRECUENTES',
      faqTitle: 'Guía de Alternativas a Fuentes Comerciales',
      faqSubtitle: 'Todo lo que necesitas saber para reemplazar tipografías de pago por alternativas 100% legales de Google Fonts.',
      faqs: [
        {
          q: '¿Qué es una fuente alternativa o fuente gemela?',
          a: 'Una fuente alternativa es una tipografía de código abierto o gratuita que comparte proporciones visuales, altura de x, remates y contraste casi idénticos a una fuente comercial de pago.'
        },
        {
          q: '¿Puedo usar estas fuentes de Google comercialmente en proyectos de clientes?',
          a: 'Sí, 100%. Todas las fuentes recomendadas tienen licencia SIL Open Font License (OFL) o Apache 2.0, lo que permite su uso comercial sin restricciones en webs, apps y material impreso.'
        },
        {
          q: '¿Cuál es la fuente de Google más parecida a Helvetica?',
          a: 'Inter (diseñada por Rasmus Andersson) es ampliamente considerada la alternativa gratuita moderna más cercana a Helvetica, con remates horizontales idénticos y diseño optimizado para pantallas.'
        },
        {
          q: '¿Cómo calcula ProFontFinder la similitud óptica?',
          a: 'Nuestro motor en el navegador analiza proporciones de caracteres, altura de x, contraste de trazo, ángulos de remate y firmas de vectores 16×16 para calcular puntuaciones exactas de similitud geométrica.'
        }
      ]
    },
    logo: {
      badge: 'IDENTIFICADOR DE FUENTES EN LOGOS',
      heroTitle: 'Identifica la Fuente de un',
      heroHighlight: 'Logotipo de Marca',
      heroSubtitle: 'Sube cualquier logotipo o imagen de marca para descubrir qué tipografía utiliza y obtener alternativas 100% gratuitas en Google Fonts.',
      dropzoneTitle: 'Arrastra el logotipo o imagen de la marca aquí',
      dropzoneSubtitle: 'Compatible con logos PNG, JPG y WebP con fondo transparente o sólido',
      buttonText: 'Seleccionar Archivo de Logo',
      directoryBadge: 'ÍNDICE DE TIPOGRAFÍA DE MARCAS',
      directoryTitle: 'Directorio de Logos y Fuentes Oficiales',
      directorySubtitle: 'Descubre las tipografías oficiales y las alternativas gratuitas de Google Fonts detrás de las marcas más reconocidas del mundo.',
      searchPlaceholder: 'Buscar marca o fuente (ej. Nike, Spotify, Apple)...',
      filterAll: 'Todas las Marcas',
      filterTech: 'Tecnología',
      filterFashion: 'Moda y Lujo',
      filterMedia: 'Medios y Entretenimiento',
      filterAuto: 'Automoción',
      filterAerospace: 'Aeroespacial',
      officialTypeface: 'TIPOGRAFÍA OFICIAL DE LA MARCA',
      freeEquivalent: 'EQUIVALENTE GRATUITO EN GOOGLE FONTS',
      match: 'Coincidencia',
      by: 'por',
      getFont: 'Obtener Fuente ↗',
      specimen: 'Espécimen →',
      copyCss: 'Copiar CSS',
      copied: '¡Copiado!',
      noResults: "No se encontraron logotipos de marca. Intenta buscar 'Nike', 'Spotify' o 'Apple'.",
      faqBadge: 'PREGUNTAS FRECUENTES',
      faqTitle: 'Guía de Identificación de Fuentes en Logos',
      faqSubtitle: 'Aprende cómo las marcas mundiales usan la tipografía y cómo encontrar alternativas legales para tus proyectos.',
      faqs: [
        {
          q: '¿Cómo identifico una fuente a partir de la imagen de un logo?',
          a: 'Sube la imagen del logo a ProFontFinder, recorta el texto y nuestro motor de IA analizará los contornos para encontrar las fuentes comerciales y alternativas gratuitas de Google Fonts más cercanas en segundos.'
        },
        {
          q: '¿Puedo usar legalmente las fuentes de logos famosos en mis propios proyectos?',
          a: 'No puedes copiar un logotipo o marca registrada. Sin embargo, SÍ puedes usar legalmente la tipografía comercial subyacente o nuestras alternativas gratuitas recomendadas de Google Fonts (como Inter, Oswald o Poppins).'
        },
        {
          q: '¿Qué fuente usa el logo de Nike?',
          a: 'El logotipo de Nike y el eslogan "Just Do It" usan una versión personalizada de Futura Bold Extra Condensed. La alternativa gratuita más cercana es Oswald (700 Italic).'
        },
        {
          q: '¿Qué fuente se utiliza en el logo de Netflix?',
          a: 'Netflix usa una tipografía personalizada llamada Netflix Sans, inspirada en Gotham y Bebas Neue. El equivalente gratuito más cercano es Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'DETECTOR DE FUENTES EN PDF',
      heroTitle: 'Identifica Fuentes en',
      heroHighlight: 'PDF',
      heroSubtitle: 'Captura una pantalla de cualquier factura, contrato o libro en PDF. Identifica fuentes entre más de 1,935 fuentes de Google con 100% de privacidad en el navegador.',
      dropzoneTitle: 'Pega captura de PDF (⌘V / Ctrl+V) o arrastra imagen',
      dropzoneSubtitle: 'Haz un recorte de tu página PDF y pégalo directamente aquí',
      buttonText: 'Seleccionar Imagen de PDF',
      feature1Title: 'Rasterización Vectorial de Alta Resolución',
      feature1Desc: 'Extrae contornos nítidos de capturas de PDF sin distorsión por pixelado.',
      feature2Title: '100% Privacidad en tu Navegador',
      feature2Desc: 'Las facturas y contratos confidenciales permanecen en la memoria RAM de tu navegador. Cero subidas a servidores.',
      feature3Title: 'Equivalentes Gratuitos de Google Fonts',
      feature3Desc: 'Encuentra al instante sustitutos de código abierto para reemplazar fuentes faltantes en tus documentos PDF.',
      faqBadge: 'PREGUNTAS FRECUENTES',
      faqTitle: 'Preguntas sobre Detección de Fuentes en PDF',
      faqSubtitle: 'Respuestas a dudas comunes sobre cómo detectar fuentes dentro de documentos PDF y libros electrónicos.',
      faqs: [
        {
          q: '¿Cómo detecto una fuente de un archivo PDF?',
          a: 'Haz una captura de pantalla clara del PDF (con Win + Shift + S o Cmd + Shift + 4), pulsa Ctrl+V / Cmd+V para pegarla en ProFontFinder y nuestro motor identificará la fuente en segundos.'
        },
        {
          q: '¿Puede ProFontFinder identificar tanto texto vectorial como escaneado en PDF?',
          a: 'Sí. Nuestro motor óptico dual funciona tanto en páginas PDF vectoriales como en documentos escaneados con filtrado de contraste.'
        },
        {
          q: '¿Mis documentos PDF confidenciales se mantienen privados?',
          a: 'Sí, al 100%. Todo el procesamiento ocurre localmente en la memoria de tu navegador. Ningún archivo se envía a servidores externos.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'GUÍAS DE INVESTIGACIÓN Y COMPARATIVAS DESTACADAS',
      title: 'Alternativas Comerciales y Mecánica Tipográfica',
      viewAll: 'Ver todas las guías →'
    },
    blog: {
      badge: 'INVESTIGACIÓN Y GUÍAS DE PROFONTFINDER',
      title: 'Ingeniería Tipográfica y Alternativas de Fuentes',
      subtitle: 'Investigación profunda sobre equivalentes a fuentes comerciales, mecánica de OCR óptico y despliegue legal de código abierto.',
      readArticle: 'Leer Artículo →',
      backToGuides: 'Volver a las Guías',
      backToArticles: 'Volver a Todos los Artículos',
      tryLiveEngine: 'PROBAR EL MOTOR DE BÚSQUEDA EN VIVO',
      tryLiveEngineSubtitle: '¿Necesitas identificar una fuente desconocida de una imagen, logo o captura?',
      launchFinder: 'Abrir Font Finder',
      browseTwins: 'Explorar Fuentes Gemelas',
      minRead: 'min de lectura'
    },
    home: {
      heroTitle: 'Identifica Cualquier Fuente',
      heroHighlight: 'En Segundos',
      matrixBadge: 'COMPARATIVA DE HERRAMIENTAS',
      matrixTitle: 'Diseñado para Máxima Velocidad en Navegador y Cero Subidas al Servidor',
      matrixSubtitle: 'Compara el motor de reconocimiento local de Pro Font Finder frente a muros de pago y lentas herramientas en la nube.',
      colFeature: 'Capacidad y Función',
      colGeneric: 'Herramientas Genéricas Online',
      colLegacy: 'Herramientas de Pago Tradicionales',
      rowDualTitle: 'Motor de Comparación Dual',
      rowDualPro: 'Identifica fuentes de pago y gemelas gratis en Google Fonts',
      rowDualGeneric: 'Solo estimaciones básicas de fuentes',
      rowDualLegacy: 'Solo fuentes comerciales de pago (sin alternativas libres)',
      rowPrivacyTitle: 'Privacidad 100% en Navegador',
      rowPrivacyPro: '100% en el navegador (Cero subidas a servidores)',
      rowPrivacyGeneric: 'Sube las imágenes a servidores en la nube',
      rowPrivacyLegacy: 'Subida obligatoria y retención en la nube',
      rowExportTitle: 'Exportación de Código para Desarrolladores',
      rowExportPro: 'CSS listo para producción, reglas @import, etiquetas HTML y tokens Tailwind v4',
      rowExportGeneric: 'Solo texto con el nombre de la fuente',
      rowExportLegacy: 'Solo enlaces de compra ($35-$300+)',
      rowSpecimenTitle: 'Comparación Visual Lado a Lado',
      rowSpecimenPro: 'Inspección visual en dos paneles, editor en vivo y zoom de recorte fijo',
      rowSpecimenGeneric: 'Vista previa estática en baja resolución',
      rowSpecimenLegacy: 'Ninguno',
      rowPricingTitle: 'Precios y Límites de Uso',
      rowPricingPro: '100% Gratis para Siempre • Escaneos Ilimitados • Sin Registro',
      rowPricingGeneric: 'Lleno de publicidad y límites de escaneo diarios',
      rowPricingLegacy: 'Suscripciones mensuales o cobro por escaneo',
      repoBadge: 'REPOSITORIO VERIFICADO',
      repoTitle: 'Tipografías de código abierto populares',
      repoSubtitle: 'Listas para explorar, probar y copiar en tus proyectos.',
      repoViewAll: 'Ver todas las fuentes verificadas'
    },
    toolsIndex: {
      pdfTitle: 'Detector de Fuentes PDF',
      pdfDesc: 'Captura cualquier factura, contrato o página PDF para identificar su tipografía incrustada o rasterizada.',
      blogTitle: 'Blog Tipográfico'
    }
  },
  de: {
    commercial: {
      badge: 'SUCHE NACH KOSTENLOSEN SCHRIFT-ALTERNATIVEN',
      heroTitle: 'Kostenlose Alternativen zu',
      heroHighlight: 'Kommerziellen Schriftarten',
      heroSubtitle: 'Laden Sie einen Screenshot einer kommerziellen Schriftart hoch oder durchsuchen Sie das Verzeichnis nach verifizierten Google Fonts mit Produktions-CSS.',
      dropzoneTitle: 'Bild oder Screenshot einer kommerziellen Schrift ablegen',
      dropzoneSubtitle: 'Unterstützt PNG, JPG, WebP • Finden Sie kostenlose Google Fonts Zwillinge',
      buttonText: 'Bild zum Abgleichen auswählen',
      directoryBadge: 'INDEX: KOMMERZIELLE ZU KOSTENLOSEN GOOGLE FONTS',
      directoryTitle: 'Verzeichnis kommerzieller Schrift-Zwillinge',
      directorySubtitle: 'Keine teuren Lizenzbudgets nötig. Ersetzen Sie Bezahlschriften durch verifizierte, freie Google Fonts.',
      searchPlaceholder: 'Schriftart suchen (z.B. Helvetica, Futura)...',
      filterAll: 'Alle Schriften',
      filterGeometric: 'Geometrische Sans',
      filterNeoGrotesque: 'Neo-Grotesk',
      filterSerif: 'Serifenschriften',
      filterHumanist: 'Humanistische Sans',
      filterDisplay: 'Display & Slab',
      recommendedStandIn: 'EMPFOHLENE KOSTENLOSE ALTERNATIVE',
      freeOfl: '100% Kostenlos OFL',
      match: 'Übereinstimmung',
      by: 'von',
      getFreeFont: 'Schrift herunterladen ↗',
      specimen: 'Schriftprobe →',
      copyCss: 'CSS kopieren',
      copied: 'Kopiert!',
      noResults: "Keine passenden kommerziellen Schriften gefunden. Versuchen Sie eine Suche nach 'Helvetica' oder 'Futura'.",
      faqBadge: 'HÄUFIG GESTELLTE FRAGEN',
      faqTitle: 'Leitfaden für Schrift-Alternativen',
      faqSubtitle: 'Alles, was Sie wissen müssen, um Bezahlschriften legal durch Google Fonts zu ersetzen.',
      faqs: [
        {
          q: 'Was ist eine Schriftalternative oder ein Schrift-Zwilling?',
          a: 'Eine Schriftalternative ist eine quelloffene oder freie Schriftart, die nahezu identische Proportionen, x-Höhen und Strichkontraste wie eine teure kommerzielle Schriftart aufweist.'
        },
        {
          q: 'Darf ich diese Google Fonts legal für kommerzielle Kundenprojekte nutzen?',
          a: 'Ja, zu 100%. Alle empfohlenen Schriftarten stehen unter der SIL Open Font License (OFL) oder Apache 2.0 Lizenz und dürfen uneingeschränkt kommerziell genutzt werden.'
        },
        {
          q: 'Was ist die beste kostenlose Google Font Alternative zu Helvetica?',
          a: 'Inter (von Rasmus Andersson) gilt als die beste moderne freie Alternative zu Helvetica mit identischen horizontalen Endungen und bildschirmoptimierter Geometrie.'
        },
        {
          q: 'Wie berechnet ProFontFinder die optische Ähnlichkeit?',
          a: 'Unsere browserbasierte Erkennungs-Engine analysiert Glyphen-Seitenverhältnisse, x-Höhen, Strichkontraste und 16×16 Vektormatrizen zur Ermittlung exakter Ähnlichkeitswerte.'
        }
      ]
    },
    logo: {
      badge: 'LOGO-SCHRIFTEN-ERKENNUNG',
      heroTitle: 'Schriftart im',
      heroHighlight: 'Markenlogo erkennen',
      heroSubtitle: 'Laden Sie ein Logo hoch, um herauszufinden, welche Schriftart verwendet wird, und erhalten Sie 100% kostenlose Google Fonts Alternativen.',
      dropzoneTitle: 'Logo oder Markenbild hier ablegen',
      dropzoneSubtitle: 'Unterstützt PNG, JPG und WebP mit transparentem oder einfarbigem Hintergrund',
      buttonText: 'Logo-Datei auswählen',
      directoryBadge: 'MARKEN-TYPOGRAFIE-INDEX',
      directoryTitle: 'Markenlogos & Offizielle Schriften',
      directorySubtitle: 'Entdecken Sie die offiziellen Schriftarten und verifizierten kostenlosen Google Fonts Alternativen der bekanntesten Marken der Welt.',
      searchPlaceholder: 'Marke oder Schrift suchen (z.B. Nike, Spotify, Apple)...',
      filterAll: 'Alle Marken',
      filterTech: 'Technologie',
      filterFashion: 'Mode & Luxus',
      filterMedia: 'Medien & Unterhaltung',
      filterAuto: 'Automobil',
      filterAerospace: 'Luft- & Raumfahrt',
      officialTypeface: 'OFFIZIELLE MARKEN-SCHRIFT',
      freeEquivalent: 'KOSTENLOSER GOOGLE FONT ZWILLING',
      match: 'Übereinstimmung',
      by: 'von',
      getFont: 'Schrift abrufen ↗',
      specimen: 'Schriftprobe →',
      copyCss: 'CSS kopieren',
      copied: 'Kopiert!',
      noResults: "Keine Markenlogos gefunden. Versuchen Sie es mit 'Nike', 'Spotify' oder 'Apple'.",
      faqBadge: 'HÄUFIG GESTELLTE FRAGEN',
      faqTitle: 'Leitfaden zur Logo-Schrifterkennung',
      faqSubtitle: 'Erfahren Sie, wie Weltklasse-Marken Typografie einsetzen und wie Sie legale freie Alternativen finden.',
      faqs: [
        {
          q: 'Wie erkenne ich eine Schriftart anhand eines Logobildes?',
          a: 'Laden Sie das Logobild in ProFontFinder hoch, schneiden Sie den Schriftzug zu und unsere KI-Engine analysiert die Konturen in Sekundenschnelle.'
        },
        {
          q: 'Darf ich Schriften bekannter Logos in eigenen Projekten nutzen?',
          a: 'Ein geschütztes Logo darf nicht kopiert werden. Die zugrundeliegende Schriftart dürfen Sie lizenzieren oder unsere kostenlosen Google Fonts Zwillinge nutzen.'
        },
        {
          q: 'Welche Schriftart nutzt das Nike-Logo?',
          a: 'Nike verwendet eine maßgeschneiderte, kursive Version der Futura Bold Extra Condensed. Der beste kostenlose Google Font Zwilling ist Oswald (700 Italic).'
        },
        {
          q: 'Welche Schriftart wird im Netflix-Logo verwendet?',
          a: 'Netflix verwendet Netflix Sans, basierend auf Gotham und Bebas Neue. Der beste freie Google Font ist Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'PDF-SCHRIFT-DETEKTOR',
      heroTitle: 'Schriftarten in',
      heroHighlight: 'PDF',
      heroSubtitle: 'Erstellen Sie einen Screenshot aus Rechnungen, Verträgen oder PDFs. Gleichen Sie Schriften mit 1.935+ Google Fonts mit 100% Privatsphäre ab.',
      dropzoneTitle: 'PDF-Screenshot einfügen (⌘V / Ctrl+V) oder ablegen',
      dropzoneSubtitle: 'Erstellen Sie einen Bildschirmausschnitt Ihrer PDF-Seite und fügen Sie ihn direkt ein',
      buttonText: 'PDF-Bild auswählen',
      feature1Title: 'Hochauflösende Vektor-Rasterisierung',
      feature1Desc: 'Extrahieren Sie gestochen scharfe Schriftkonturen ohne Pixelverzerrung.',
      feature2Title: '100% Privatsphäre im Browser',
      feature2Desc: 'Vertrauliche PDFs und Rechnungen verbleiben im Browser-Speicher. Keine Server-Uploads.',
      feature3Title: 'Kostenlose Google Fonts Alternativen',
      feature3Desc: 'Finden Sie sofort passende quelloffene Schriftarten zum Ersetzen fehlender PDF-Schriften.',
      faqBadge: 'HÄUFIG GESTELLTE FRAGEN',
      faqTitle: 'PDF-Schrifterkennung FAQ',
      faqSubtitle: 'Antworten auf häufige Fragen zur Erkennung von Schriften in PDF-Dokumenten.',
      faqs: [
        {
          q: 'Wie erkenne ich eine Schriftart aus einer PDF-Datei?',
          a: 'Machen Sie einen Screenshot der PDF-Stelle, drücken Sie Ctrl+V / Cmd+V in ProFontFinder und die Schriftart wird sofort erkannt.'
        },
        {
          q: 'Funktioniert ProFontFinder auch bei gescannten PDF-Dokumenten?',
          a: 'Ja. Unsere optische Erkennung funktioniert sowohl bei Vektor-PDFs als auch bei gescannten Papierdokumenten.'
        },
        {
          q: 'Bleiben meine vertraulichen Dokumente geschützt?',
          a: 'Ja, zu 100%. Die gesamte Analyse erfolgt lokal in Ihrem Browser ohne Datentransfer an externe Server.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'EMPFOHLENE RECHERCHE- UND VERGLEICHSLEITFÄDEN',
      title: 'Kommerzielle Alternativen & Typografie-Mechanik',
      viewAll: 'Alle Leitfäden ansehen →'
    },
    blog: {
      badge: 'PROFONTFINDER FORSCHUNG & LEITFÄDEN',
      title: 'Typografie-Engineering & Schrift-Alternativen',
      subtitle: 'Detaillierte Analysen zu kommerziellen Schrift-Äquivalenten, OCR-Mechanik und quelloffener Typografie.',
      readArticle: 'Artikel lesen →',
      backToGuides: 'Zurück zu den Leitfäden',
      backToArticles: 'Zurück zu allen Artikeln',
      tryLiveEngine: 'LIVE-SCHRIFTERKENNUNG TESTEN',
      tryLiveEngineSubtitle: 'Möchten Sie eine unbekannte Schrift aus einem Bild oder Logo identifizieren?',
      launchFinder: 'Font Finder starten',
      browseTwins: 'Schrift-Zwillinge ansehen',
      minRead: 'Min. Lesezeit'
    },
    home: {
      heroTitle: 'Jede Schriftart erkennen',
      heroHighlight: 'In Sekundenschnelle',
      matrixBadge: 'TOOL-VERGLEICH',
      matrixTitle: 'Entwickelt für reine Browser-Geschwindigkeit & null Server-Uploads',
      matrixSubtitle: 'Erfahren Sie, wie sich die lokale Erkennungs-Engine von Pro Font Finder im Vergleich zu teuren Bezahlschranken und langsamen Cloud-Tools schlägt.',
      colFeature: 'Funktion & Leistungsmerkmal',
      colGeneric: 'Generische Online-Tools',
      colLegacy: 'Klassische kommerzielle Tools',
      rowDualTitle: 'Dual-Engine-Erkennung',
      rowDualPro: 'Erkennt Bezahlschriften + kostenlose Google Fonts-Zwillinge',
      rowDualGeneric: 'Nur einfache Schriftvermutungen',
      rowDualLegacy: 'Nur kostenpflichtige Schriften (keine freien Alternativen)',
      rowPrivacyTitle: 'Datenschutz im Browser',
      rowPrivacyPro: '100% im Browser (Keine Server-Uploads)',
      rowPrivacyGeneric: 'Lädt Bilder auf Drittanbieter-Server hoch',
      rowPrivacyLegacy: 'Obligatorischer Cloud-Upload mit Datenspeicherung',
      rowExportTitle: 'Entwickler-Code-Export',
      rowExportPro: 'Produktionsfertiges CSS, @import-Regeln, HTML-Tags & Tailwind v4 Design-Tokens',
      rowExportGeneric: 'Nur reiner Schriftname als Text',
      rowExportLegacy: 'Nur Kauflinks ($35-$300+)',
      rowSpecimenTitle: 'Visueller Direktvergleich',
      rowSpecimenPro: 'Zweispaltige visuelle Prüfung, Live-Muster-Editor & fixierter Ausschnitts-Zoom',
      rowSpecimenGeneric: 'Statische Vorschau in niedriger Auflösung',
      rowSpecimenLegacy: 'Keine',
      rowPricingTitle: 'Preise & Nutzungslimits',
      rowPricingPro: '100% dauerhaft kostenlos • Unbegrenzte Scans • Keine Registrierung',
      rowPricingGeneric: 'Werbelastig mit täglichen Scan-Beschränkungen',
      rowPricingLegacy: 'Monatliche Abonnements oder Abrechnung pro Scan',
      repoBadge: 'VERIFIZIERTES VERZEICHNIS',
      repoTitle: 'Beliebte Open-Source-Schriftarten',
      repoSubtitle: 'Bereit zum Durchsuchen, Testen und Kopieren für Ihre Projekte.',
      repoViewAll: 'Alle verifizierten Schriftarten anzeigen'
    },
    toolsIndex: {
      pdfTitle: 'PDF-Schrifterkennung',
      pdfDesc: 'Erfassen Sie Screenshots von Rechnungen oder Verträgen, um PDF-Typografie zu identifizieren.',
      blogTitle: 'Typografie-Blog'
    }
  },
  fr: {
    commercial: {
      badge: 'TROUVER DES ALTERNATIVES AUX POLICES PAYANTES',
      heroTitle: 'Alternatives Gratuites aux',
      heroHighlight: 'Polices Commerciales',
      heroSubtitle: 'Téléversez une capture de police commerciale ou parcourez le répertoire pour trouver des polices Google Fonts gratuites avec CSS prêt à l’emploi.',
      dropzoneTitle: 'Déposez une image ou capture de police commerciale',
      dropzoneSubtitle: 'Prend en charge PNG, JPG, WebP • Trouvez des équivalents Google Fonts',
      buttonText: 'Sélectionner une Image',
      directoryBadge: 'INDEX DES POLICES COMMERCIALES VERS GOOGLE FONTS',
      directoryTitle: 'Répertoire des Équivalents de Polices Commerciales',
      directorySubtitle: 'Ne laissez pas les coûts de licence bloquer votre projet. Remplacez les polices payantes par des alternatives Google Fonts vérifiées.',
      searchPlaceholder: 'Rechercher une police (ex. Helvetica, Futura)...',
      filterAll: 'Toutes les Polices',
      filterGeometric: 'Sans Géométrique',
      filterNeoGrotesque: 'Néo-Grotesque',
      filterSerif: 'Avec Serif',
      filterHumanist: 'Sans Humaniste',
      filterDisplay: 'Display & Slab',
      recommendedStandIn: 'ALTERNATIVE GRATUITE RECOMMANDÉE',
      freeOfl: '100% Gratuit OFL',
      match: 'Correspondance',
      by: 'par',
      getFreeFont: 'Télécharger la Police ↗',
      specimen: 'Spécimen →',
      copyCss: 'Copier le CSS',
      copied: 'Copié !',
      noResults: "Aucune police commerciale trouvée. Essayez une recherche comme 'Helvetica' ou 'Futura'.",
      faqBadge: 'FOIRE AUX QUESTIONS',
      faqTitle: 'Guide des Alternatives aux Polices Commerciales',
      faqSubtitle: 'Tout ce que vous devez savoir pour remplacer légalement les polices payantes par Google Fonts.',
      faqs: [
        {
          q: 'Qu’est-ce qu’une police alternative ou police jumelle ?',
          a: 'Une police jumelle est une typographie open-source gratuite partageant des proportions, hauteurs d’x et contrastes quasiment identiques à une police commerciale payante.'
        },
        {
          q: 'Puis-je utiliser ces polices Google pour des projets clients commerciaux ?',
          a: 'Oui, à 100%. Toutes les polices recommandées sont sous licence SIL Open Font License (OFL) ou Apache 2.0, autorisant un usage commercial illimité.'
        },
        {
          q: 'Quelle est la police Google la plus proche d’Helvetica ?',
          a: 'Inter (par Rasmus Andersson) est considérée comme la meilleure alternative moderne et gratuite à Helvetica, avec des terminaisons horizontales identiques.'
        },
        {
          q: 'Comment ProFontFinder calcule-t-il la similarité optique ?',
          a: 'Notre moteur analyse les proportions de glyphes, la hauteur d’x, le contraste des traits et des matrices vectorielles 16×16 pour établir des scores précis.'
        }
      ]
    },
    logo: {
      badge: 'IDENTIFICATEUR DE POLICE DE LOGO',
      heroTitle: 'Identifiez la Police d’un',
      heroHighlight: 'Logo de Marque',
      heroSubtitle: 'Téléversez un logo pour découvrir sa police officielle et trouver des alternatives 100% gratuites sur Google Fonts.',
      dropzoneTitle: 'Déposez le logo ou l’image de marque ici',
      dropzoneSubtitle: 'Prend en charge PNG, JPG et WebP avec fond transparent ou uni',
      buttonText: 'Sélectionner le Logo',
      directoryBadge: 'INDEX TYPOGRAPHIQUE DES MARQUES',
      directoryTitle: 'Logos de Marques & Polices Officielles',
      directorySubtitle: 'Découvrez les typographies officielles et les alternatives gratuites Google Fonts des marques les plus célèbres.',
      searchPlaceholder: 'Rechercher une marque ou police (ex. Nike, Spotify, Apple)...',
      filterAll: 'Toutes les Marques',
      filterTech: 'Technologie',
      filterFashion: 'Mode & Luxe',
      filterMedia: 'Médias & Divertissement',
      filterAuto: 'Automobile',
      filterAerospace: 'Aérospatiale',
      officialTypeface: 'POLICE OFFICIELLE DE LA MARQUE',
      freeEquivalent: 'ÉQUIVALENT GRATUIT GOOGLE FONTS',
      match: 'Correspondance',
      by: 'par',
      getFont: 'Obtenir la Police ↗',
      specimen: 'Spécimen →',
      copyCss: 'Copier le CSS',
      copied: 'Copié !',
      noResults: "Aucun logo de marque trouvé. Essayez 'Nike', 'Spotify' ou 'Apple'.",
      faqBadge: 'FOIRE AUX QUESTIONS',
      faqTitle: 'Guide d’Identification des Polices de Logos',
      faqSubtitle: 'Découvrez comment les plus grandes marques utilisent la typographie et comment trouver des équivalents légaux gratuits.',
      faqs: [
        {
          q: 'Comment identifier une police à partir d’un logo ?',
          a: 'Déposez l’image dans ProFontFinder, recadrez le texte et notre IA analysera les contours pour trouver les polices correspondantes en quelques secondes.'
        },
        {
          q: 'Ai-je le droit d’utiliser les polices de logos célèbres ?',
          a: 'Vous ne pouvez pas copier une marque déposée, mais vous POUVEZ acquérir la licence de la police commerciale ou utiliser nos équivalents gratuits Google Fonts.'
        },
        {
          q: 'Quelle police utilise le logo Nike ?',
          a: 'Le logo Nike utilise une version personnalisée et inclinée de Futura Bold Extra Condensed. L’équivalent gratuit le plus proche est Oswald (700 Italic).'
        },
        {
          q: 'Quelle police est utilisée dans le logo Netflix ?',
          a: 'Netflix utilise Netflix Sans, inspirée de Gotham et Bebas Neue. L’équivalent gratuit le plus proche est Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'DÉTECTEUR DE POLICES DANS LES PDF',
      heroTitle: 'Identifiez les Polices de',
      heroHighlight: 'PDF',
      heroSubtitle: 'Capturez une capture d’écran de n’importe quelle facture ou contrat PDF. Comparez avec 1 935+ polices Google Fonts en toute confidentialité.',
      dropzoneTitle: 'Collez une capture PDF (⌘V / Ctrl+V) ou déposez l’image',
      dropzoneSubtitle: 'Faites une capture de votre page PDF et collez-la directement ici',
      buttonText: 'Sélectionner l’Image PDF',
      feature1Title: 'Rastérisation Vectorielle Haute Résolution',
      feature1Desc: 'Extrayez des contours nets sans distorsion de pixellisation.',
      feature2Title: '100% Confidentialité dans le Navigateur',
      feature2Desc: 'Vos factures et contrats confidentiels restent dans la mémoire vive de votre navigateur. Aucun envoi sur serveur.',
      feature3Title: 'Équivalents Gratuits Google Fonts',
      feature3Desc: 'Trouvez immédiatement des polices open-source pour remplacer les polices manquantes de vos PDF.',
      faqBadge: 'FOIRE AUX QUESTIONS',
      faqTitle: 'FAQ sur la Détection de Polices PDF',
      faqSubtitle: 'Réponses aux questions courantes sur l’identification de polices dans les documents PDF.',
      faqs: [
        {
          q: 'Comment détecter une police dans un fichier PDF ?',
          a: 'Faites une capture d’écran de la page PDF, collez-la avec Ctrl+V / Cmd+V dans ProFontFinder et la police sera identifiée en quelques secondes.'
        },
        {
          q: 'ProFontFinder fonctionne-t-il sur les PDF scannés ?',
          a: 'Oui. Notre moteur optique prend en charge les PDF vectoriels ainsi que les documents papier scannés.'
        },
        {
          q: 'Mes documents PDF confidentiels sont-ils protégés ?',
          a: 'Oui, à 100%. Tout le traitement est effectué localement dans la mémoire de votre navigateur sans aucun transfert externe.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'GUIDES DE RECHERCHE ET COMPARATIFS À LA UNE',
      title: 'Alternatives Commerciales et Mécanique Typographique',
      viewAll: 'Voir tous les guides →'
    },
    blog: {
      badge: 'RECHERCHE & GUIDES PROFONTFINDER',
      title: 'Ingénierie Typographique & Alternatives de Polices',
      subtitle: 'Analyses approfondies sur les équivalents de polices payantes, le fonctionnement de l’OCR optique et les polices libres de droits.',
      readArticle: 'Lire l’article →',
      backToGuides: 'Retour aux guides',
      backToArticles: 'Retour à tous les articles',
      tryLiveEngine: 'TESTER LE MOTEUR EN DIRECT',
      tryLiveEngineSubtitle: 'Vous souhaitez identifier une police inconnue depuis une image ou un logo ?',
      launchFinder: 'Lancer Font Finder',
      browseTwins: 'Explorer les Polices Jumelles',
      minRead: 'min de lecture'
    },
    home: {
      heroTitle: 'Identifiez N’importe Quelle Police',
      heroHighlight: 'En Quelques Secondes',
      matrixBadge: 'COMPARATIF D’OUTILS',
      matrixTitle: 'Conçu pour une Vitesse 100% Navigateur et Zéro Envoi sur Serveur',
      matrixSubtitle: 'Découvrez comment le moteur local de Pro Font Finder se compare aux paywalls traditionnels et aux outils cloud plus lents.',
      colFeature: 'Fonctionnalité',
      colGeneric: 'Outils en Ligne Génériques',
      colLegacy: 'Outils Commerciaux Traditionnels',
      rowDualTitle: 'Moteur de Correspondance Dual',
      rowDualPro: 'Identifie polices payantes + alternatives Google Fonts gratuites',
      rowDualGeneric: 'Simples estimations approximatives',
      rowDualLegacy: 'Polices payantes uniquement (aucun équivalent libre)',
      rowPrivacyTitle: 'Confidentialité dans le Navigateur',
      rowPrivacyPro: '100% dans le navigateur (Zéro envoi vers des serveurs)',
      rowPrivacyGeneric: 'Téléverse vos images sur des serveurs tiers',
      rowPrivacyLegacy: 'Téléversement obligatoire et conservation sur le cloud',
      rowExportTitle: 'Export de Code pour Développeurs',
      rowExportPro: 'Blueprints CSS prêts pour la production, règles @import, balises HTML et tokens Tailwind v4',
      rowExportGeneric: 'Nom de la police en texte brut',
      rowExportLegacy: 'Liens d’achat uniquement (35 $ à 300 $+)',
      rowSpecimenTitle: 'Comparaison Visuelle Côte à Côte',
      rowSpecimenPro: 'Inspection visuelle double volet, éditeur de spécimen en direct et zoom de cadrage',
      rowSpecimenGeneric: 'Aperçu statique en basse résolution',
      rowSpecimenLegacy: 'Aucun',
      rowPricingTitle: 'Tarification et Limites d’Usage',
      rowPricingPro: '100% Gratuit pour Toujours • Scans Illimités • Sans Inscription',
      rowPricingGeneric: 'Envahi de publicités et limité quotidiennement',
      rowPricingLegacy: 'Abonnements mensuels ou facturation à chaque analyse',
      repoBadge: 'RÉPERTOIRE VÉRIFIÉ',
      repoTitle: 'Polices libres et open source populaires',
      repoSubtitle: 'Prêtes à explorer, tester et intégrer dans vos créations.',
      repoViewAll: 'Voir toutes les polices vérifiées'
    },
    toolsIndex: {
      pdfTitle: 'Détecteur de Polices PDF',
      pdfDesc: 'Capturez une facture, un contrat ou un ebook PDF pour identifier instantanément la typographie utilisée.',
      blogTitle: 'Blog Typographique'
    }
  },
  it: {
    commercial: {
      badge: 'TROVA ALTERNATIVE A FONT A PAGAMENTO',
      heroTitle: 'Alternative Gratuite a',
      heroHighlight: 'Font Commerciali',
      heroSubtitle: 'Carica uno screenshot di un font commerciale o esplora la directory per trovare font Google Fonts gratuiti con codice CSS pronto all’uso.',
      dropzoneTitle: 'Trascina un’immagine o screenshot di font commerciale',
      dropzoneSubtitle: 'Supporta PNG, JPG, WebP • Trova font gemelli su Google Fonts',
      buttonText: 'Seleziona Immagine da Confrontare',
      directoryBadge: 'INDICE FONT COMMERCIALI VERSO GOOGLE FONTS',
      directoryTitle: 'Directory dei Font Gemelli Commerciali',
      directorySubtitle: 'Non farti bloccare dai costi di licenza. Sostituisci i font a pagamento con alternative Google Fonts verificate.',
      searchPlaceholder: 'Cerca font (es. Helvetica, Futura)...',
      filterAll: 'Tutti i Font',
      filterGeometric: 'Sans Geometrici',
      filterNeoGrotesque: 'Neo-Grotesque',
      filterSerif: 'Font con Grazie',
      filterHumanist: 'Sans Umanistici',
      filterDisplay: 'Display & Slab',
      recommendedStandIn: 'ALTERNATIVA GRATUITA CONSIGLIATA',
      freeOfl: '100% Gratuito OFL',
      match: 'Corrispondenza',
      by: 'di',
      getFreeFont: 'Scarica Font ↗',
      specimen: 'Specimen →',
      copyCss: 'Copia CSS',
      copied: 'Copiato!',
      noResults: "Nessun font commerciale trovato. Prova a cercare 'Helvetica' o 'Futura'.",
      faqBadge: 'DOMANDE FREQUENTI',
      faqTitle: 'Guida alle Alternative dei Font Commerciali',
      faqSubtitle: 'Tutto ciò che devi sapere per sostituire legalmente i font a pagamento con Google Fonts.',
      faqs: [
        {
          q: 'Che cos’è un font alternativo o font gemello?',
          a: 'Un font gemello è un carattere tipografico open source gratuito che condivide proporzioni, altezza della x e contrasto dei tratti quasi identici a un font a pagamento.'
        },
        {
          q: 'Posso usare questi Google Fonts per progetti commerciali?',
          a: 'Sì, al 100%. Tutti i caratteri consigliati sono distribuiti con licenza SIL Open Font License (OFL) o Apache 2.0, che ne consente l’uso commerciale illimitato.'
        },
        {
          q: 'Qual è il Google Font più simile a Helvetica?',
          a: 'Inter (creato da Rasmus Andersson) è considerato la migliore alternativa gratuita moderna a Helvetica, ottimizzato per schermi ad alta risoluzione.'
        },
        {
          q: 'Come calcola ProFontFinder la somiglianza ottica?',
          a: 'Il nostro motore nel browser analizza le proporzioni dei glifi, l’altezza della x, il contrasto delle aste e le matrici vettoriali 16×16 per calcolare punteggi accurati.'
        }
      ]
    },
    logo: {
      badge: 'IDENTIFICATORE FONT NEI LOGHI',
      heroTitle: 'Identifica il Font in un',
      heroHighlight: 'Logo Aziendale',
      heroSubtitle: 'Carica un logo per scoprire quale carattere utilizza e trovare alternative 100% gratuite su Google Fonts.',
      dropzoneTitle: 'Trascina qui il logo o l’immagine del brand',
      dropzoneSubtitle: 'Supporta PNG, JPG e WebP con sfondo trasparente o a tinta unita',
      buttonText: 'Seleziona File del Logo',
      directoryBadge: 'INDICE TIPOGRAFIA DEI BRAND',
      directoryTitle: 'Loghi di Marchi & Font Ufficiali',
      directorySubtitle: 'Esplora i caratteri ufficiali e le alternative gratuite su Google Fonts dei marchi più celebri al mondo.',
      searchPlaceholder: 'Cerca brand o font (es. Nike, Spotify, Apple)...',
      filterAll: 'Tutti i Brand',
      filterTech: 'Tecnologia',
      filterFashion: 'Moda e Lusso',
      filterMedia: 'Media & Spettacolo',
      filterAuto: 'Automotive',
      filterAerospace: 'Aerospazio',
      officialTypeface: 'FONT UFFICIALE DEL BRAND',
      freeEquivalent: 'EQUIVALENTE GRATUITO GOOGLE FONTS',
      match: 'Corrispondenza',
      by: 'di',
      getFont: 'Ottieni Font ↗',
      specimen: 'Specimen →',
      copyCss: 'Copia CSS',
      copied: 'Copiato!',
      noResults: "Nessun logo trovato. Prova a cercare 'Nike', 'Spotify' o 'Apple'.",
      faqBadge: 'DOMANDE FREQUENTI',
      faqTitle: 'Guida all’Identificazione dei Font nei Loghi',
      faqSubtitle: 'Scopri come i migliori marchi usano la tipografia e come trovare alternative legali gratuite.',
      faqs: [
        {
          q: 'Come posso identificare un font da un logo?',
          a: 'Carica l’immagine in ProFontFinder, ritaglia la scritta e la nostra intelligenza artificiale analizzerà i tratti in pochi istanti.'
        },
        {
          q: 'È legale usare i font dei loghi famosi nei miei progetti?',
          a: 'Non puoi copiare un logo registrato. Tuttavia, PUOI acquisire legalmente la licenza del font commerciale o usare i nostri Google Fonts gratuiti equivalenti.'
        },
        {
          q: 'Quale font usa il logo Nike?',
          a: 'Nike usa una versione personalizzata e inclinata di Futura Bold Extra Condensed. L’equivalente gratuito più simile è Oswald (700 Italic).'
        },
        {
          q: 'Che font è usato nel logo Netflix?',
          a: 'Netflix usa Netflix Sans, sviluppato da basi Gotham e Bebas Neue. L’equivalente gratuito più vicino è Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'RILEVATORE FONT IN DOCUMENTI PDF',
      heroTitle: 'Identifica i Font nei',
      heroHighlight: 'PDF',
      heroSubtitle: 'Cattura uno screenshot da fatture, contratti o PDF. Trova corrispondenze tra oltre 1.935 Google Fonts con la massima privacy nel browser.',
      dropzoneTitle: 'Incolla screenshot PDF (⌘V / Ctrl+V) o trascina immagine',
      dropzoneSubtitle: 'Cattura un ritaglio della pagina PDF e incollalo direttamente qui',
      buttonText: 'Seleziona Immagine PDF',
      feature1Title: 'Rasterizzazione Vettoriale ad Alta Risoluzione',
      feature1Desc: 'Estrae contorni nitidi dai PDF senza distorsioni da sgranatura.',
      feature2Title: '100% Privacy nel Tuo Browser',
      feature2Desc: 'Fatture e contratti riservati restano nella memoria RAM locale. Nessun file inviato a server esterni.',
      feature3Title: 'Equivalenti Gratuiti Google Fonts',
      feature3Desc: 'Trova all’istante font open-source sostitutivi per rimpiazzare i caratteri mancanti nei tuoi PDF.',
      faqBadge: 'DOMANDE FREQUENTI',
      faqTitle: 'FAQ Rilevamento Font nei PDF',
      faqSubtitle: 'Domande comuni su come identificare i font all’interno di documenti PDF.',
      faqs: [
        {
          q: 'Come faccio a trovare un font da un file PDF?',
          a: 'Fai uno screenshot nitido della pagina PDF, incollalo con Ctrl+V / Cmd+V in ProFontFinder e il carattere verrà identificato in pochi secondi.'
        },
        {
          q: 'ProFontFinder riconosce anche i testi nei PDF scansionati?',
          a: 'Sì. Il nostro motore ottico funziona sia su PDF vettoriali sia su documenti cartacei scansionati.'
        },
        {
          q: 'I miei documenti PDF rimangono privati?',
          a: 'Sì, al 100%. Tutta l’elaborazione avviene localmente nella memoria del browser.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'GUIDE DI RICERCA E COMPARAZIONE IN EVIDENZA',
      title: 'Alternative Commerciali e Meccanica Tipografica',
      viewAll: 'Vedi tutte le guide →'
    },
    blog: {
      badge: 'RICERCA E GUIDE DI PROFONTFINDER',
      title: 'Ingegneria Tipografica e Alternative ai Font',
      subtitle: 'Approfondimenti su equivalenti gratuiti, algoritmi di riconoscimento OCR e uso legale di font open source.',
      readArticle: 'Leggi Articolo →',
      backToGuides: 'Torna alle Guide',
      backToArticles: 'Torna a Tutti gli Articoli',
      tryLiveEngine: 'PROVA IL MOTORE DI RICONOSCIMENTO IN TEMPO REALE',
      tryLiveEngineSubtitle: 'Vuoi identificare un font sconosciuto da un’immagine o un logo?',
      launchFinder: 'Avvia Font Finder',
      browseTwins: 'Esplora Font Gemelli',
      minRead: 'min di lettura'
    },
    home: {
      heroTitle: 'Identifica Qualsiasi Font',
      heroHighlight: 'In Pochi Secondi',
      matrixBadge: 'CONFRONTO STRUMENTI',
      matrixTitle: 'Progettato per Massima Velocità nel Browser e Zero Caricamenti su Server',
      matrixSubtitle: 'Scopri come il motore di riconoscimento locale di Pro Font Finder supera paywall costosi e lenti strumenti cloud.',
      colFeature: 'Funzionalità',
      colGeneric: 'Strumenti Online Generici',
      colLegacy: 'Strumenti Commerciali Tradizionali',
      rowDualTitle: 'Corrispondenza con Motore Duale',
      rowDualPro: 'Identifica font commerciali + alternative Google Fonts gratuite',
      rowDualGeneric: 'Semplice stima approssimativa del font',
      rowDualLegacy: 'Solo font commerciali a pagamento (nessun gemello gratuito)',
      rowPrivacyTitle: 'Privacy 100% nel Browser',
      rowPrivacyPro: '100% nel browser (Zero caricamenti su server remoti)',
      rowPrivacyGeneric: 'Carica le immagini su cloud di terze parti',
      rowPrivacyLegacy: 'Caricamento obbligatorio e conservazione su cloud',
      rowExportTitle: 'Esportazione Codice per Sviluppatori',
      rowExportPro: 'Codice CSS pronto per la produzione, regole @import, tag HTML e token Tailwind v4',
      rowExportGeneric: 'Solo testo con il nome del font',
      rowExportLegacy: 'Solo link per l’acquisto ($35-$300+)',
      rowSpecimenTitle: 'Confronto Visivo Fianco a Fianco',
      rowSpecimenPro: 'Ispezione visiva a doppio pannello, editor di testo in tempo reale e zoom ritaglio',
      rowSpecimenGeneric: 'Anteprima statica a bassa risoluzione',
      rowSpecimenLegacy: 'Nessuno',
      rowPricingTitle: 'Prezzi e Limiti di Utilizzo',
      rowPricingPro: '100% Gratis per Sempre • Scansioni Illimitate • Nessuna Registrazione',
      rowPricingGeneric: 'Ricco di annunci pubblicitari con limiti giornalieri',
      rowPricingLegacy: 'Abbonamenti mensili o fatturazione per singola scansione',
      repoBadge: 'ARCHIVIO VERIFICATO',
      repoTitle: 'Tipografie open-source più richieste',
      repoSubtitle: 'Pronte da esplorare, collaudare e copiare per i tuoi progetti.',
      repoViewAll: 'Visualizza tutti i font verificati'
    },
    toolsIndex: {
      pdfTitle: 'Rilevatore di Font PDF',
      pdfDesc: 'Cattura uno screenshot da fatture, contratti o pagine PDF per identificare i font incorporati.',
      blogTitle: 'Blog Tipografico'
    }
  },
  ja: {
    commercial: {
      badge: '有料フォントの無料代替検索',
      heroTitle: '有料商用フォントの',
      heroHighlight: '無料代替Google Fonts',
      heroSubtitle: '有料フォントのスクリーンショットをアップロードするか、下のインデックスから本番用CSS付きの100%無料Google Fontsを探せます。',
      dropzoneTitle: '商用フォントの画像やスクリーンショットをドロップ',
      dropzoneSubtitle: 'PNG、JPG、WebP対応 • 有料フォントに酷似したGoogle Fontsを発見',
      buttonText: '照合する画像を選択',
      directoryBadge: '商用フォントから無料GOOGLE FONTSへの対照表',
      directoryTitle: '商用フォント代替ディクショナリ',
      directorySubtitle: '高額なライセンス料でプロジェクトを諦める必要はありません。商用フォントを高品質な無料Google Fontsで置き換えましょう。',
      searchPlaceholder: 'フォント名で検索 (例: Helvetica, Futura)...',
      filterAll: 'すべてのフォント',
      filterGeometric: 'ジオメトリック・サンセリフ',
      filterNeoGrotesque: 'ネオ・グロテスク',
      filterSerif: 'セリフ書体',
      filterHumanist: 'ヒューマニスト・サンセリフ',
      filterDisplay: 'ディスプレイ＆スラブ',
      recommendedStandIn: 'おすすめの無料代替フォント',
      freeOfl: '100% 商用無料 (OFL)',
      match: '類似度',
      by: '作者:',
      getFreeFont: 'フォントを入手 ↗',
      specimen: '書体サンプル →',
      copyCss: 'CSSをコピー',
      copied: 'コピー完了！',
      noResults: "該当する商用フォントが見つかりませんでした。『Helvetica』や『Futura』でお試しください。",
      faqBadge: 'よくある質問 (FAQ)',
      faqTitle: '商用フォント代替ガイド',
      faqSubtitle: '有料フォントを法的に安全な無料Google Fontsで置き換えるための基礎知識。',
      faqs: [
        {
          q: 'フォント代替（ツインフォント）とは何ですか？',
          a: '高額な有料商用フォントと骨格、xハイト、字形バランス、線の太さが極めて酷似しており、ライセンス料ゼロでそのまま差し替えられるオープンソースフォントのことです。'
        },
        {
          q: 'これらのGoogle Fontsはクライアントの商用プロジェクトで使えますか？',
          a: 'はい、100%可能です。推奨するフォントはすべてSIL Open Font License (OFL)またはApache 2.0ライセンスで、商用利用が無制限に許可されています。'
        },
        {
          q: 'Helveticaに最も近い無料Google Fontsは何ですか？',
          a: 'Rasmus Andersson氏による「Inter」が最も近いモダン代替フォントです。水平なターミナルカットと画面表示に最適化された幾何学構造を備えています。'
        },
        {
          q: 'ProFontFinderはどのように視覚的類似度を計算しますか？',
          a: 'ブラウザ内エンジンが字形のアスペクト比、xハイト比率、ストロークコントラスト、16×16ベクトル行列シグネチャを瞬時に解析して算出します。'
        }
      ]
    },
    logo: {
      badge: 'ロゴフォント判定ツール',
      heroTitle: 'ブランドロゴの',
      heroHighlight: '使用フォントを特定',
      heroSubtitle: 'ロゴ画像をアップロードして使われている書体を判別し、100%無料のGoogle Fonts代替フォントを見つけます。',
      dropzoneTitle: 'ブランドロゴまたはロゴマーク画像をここにドロップ',
      dropzoneSubtitle: 'PNG、JPG、WebP対応（透過背景・単色背景どちらも可）',
      buttonText: 'ロゴファイルを選択',
      directoryBadge: 'ブランド・タイポグラフィ対照インデックス',
      directoryTitle: '有名ブランドロゴ＆公式フォント一覧',
      directorySubtitle: '世界的に有名なブランドアイデンティティを支える公式書体と、完全無料のGoogle Fonts代替案を一覧で確認できます。',
      searchPlaceholder: 'ブランドやフォント名で検索 (例: Nike, Spotify, Apple)...',
      filterAll: 'すべてのブランド',
      filterTech: 'テクノロジー',
      filterFashion: 'ファッション＆ラグジュアリー',
      filterMedia: 'メディア＆エンタメ',
      filterAuto: '自動車・モビリティ',
      filterAerospace: '航空宇宙・科学',
      officialTypeface: '公式ブランド書体',
      freeEquivalent: '無料GOOGLE FONTS代替',
      match: '類似度',
      by: '作者:',
      getFont: 'フォントを入手 ↗',
      specimen: '書体サンプル →',
      copyCss: 'CSSをコピー',
      copied: 'コピー完了！',
      noResults: "該当するロゴが見つかりませんでした。『Nike』『Spotify』『Apple』などで検索してください。",
      faqBadge: 'よくある質問 (FAQ)',
      faqTitle: 'ロゴフォント特定ガイド',
      faqSubtitle: '世界的ブランドのフォント戦略と、自社ブランドで使える無料フォントの活用法。',
      faqs: [
        {
          q: 'ロゴ画像からフォントを特定するには？',
          a: 'ProFontFinderにロゴ画像をドロップして文字部分をトリミングするだけで、ブラウザ内AIが輪郭を解析し、最も近い商用フォントと無料代替フォントを瞬時に表示します。'
        },
        {
          q: '有名ブランドのロゴフォントを自分のプロジェクトで使っても大丈夫ですか？',
          a: '登録商標やロゴデザインを模倣することはできませんが、元となった商用フォントの正規ライセンスを取得するか、推奨の無料Google Fonts（Inter、Oswaldなど）を使うことは合法です。'
        },
        {
          q: 'ナイキのロゴフォントは何ですか？',
          a: 'ナイキのロゴや「Just Do It」は「Futura Bold Extra Condensed」を傾斜カスタマイズした書体です。最も近い無料Google Fontsは「Oswald (700 Italic)」です。'
        },
        {
          q: 'Netflixのロゴフォントは何ですか？',
          a: 'NetflixはGothamとBebas Neueをベースにした独自書体「Netflix Sans」を使用しています。最も近い無料Google Fontsは「Bebas Neue」です。'
        }
      ]
    },
    pdf: {
      badge: 'PDFフォント検出ツール',
      heroTitle: 'PDFのフォントを特定',
      heroHighlight: '',
      heroSubtitle: 'PDFの請求書、契約書、電子書籍のスクリーンショットを撮って貼り付けるだけ。1,935以上のGoogle Fontsと100%ローカル照合。',
      dropzoneTitle: 'PDFスクリーンショットを貼り付け (⌘V / Ctrl+V) またはドロップ',
      dropzoneSubtitle: 'PDF画面をキャプチャしてここに直接貼り付けてください',
      buttonText: 'PDF画像を選択',
      feature1Title: '高解像度ベクターラスタライゼーション',
      feature1Desc: 'ピクセル崩れのない鮮明な文字輪郭をPDFキャプチャから抽出。',
      feature2Title: '100% ブラウザ内ローカル処理（完全プライベート）',
      feature2Desc: '機密の請求書や契約書が外部サーバーに送信されることはありません。',
      feature3Title: '無料Google Fonts代替を即座に提示',
      feature3Desc: 'PDFで文字化けしたり不足しているフォントの代替フォントを素早く見つけられます。',
      faqBadge: 'よくある質問 (FAQ)',
      faqTitle: 'PDFフォント検出に関する質問',
      faqSubtitle: 'PDFファイルや電子書籍のフォント特定についての回答。',
      faqs: [
        {
          q: 'PDFファイルからフォントを特定する方法は？',
          a: 'PDFの該当部分をスクリーンショット（Win + Shift + S または Cmd + Shift + 4）で撮影し、ProFontFinderでCtrl+V / Cmd+Vを押して貼り付けるだけです。'
        },
        {
          q: 'スキャンしたPDFでも判定できますか？',
          a: 'はい。ベクター形式で出力されたPDFはもちろん、紙の書類をスキャンしたPDF画像でもコントラスト調整により高精度に判定できます。'
        },
        {
          q: '機密のPDFファイルが外部に漏れる心配はありませんか？',
          a: '一切ありません。すべての処理はお使いのブラウザのメモリ内のみで完結し、外部サーバーへのアップロードは行われません。'
        }
      ]
    },
    guidesFeatured: {
      badge: 'おすすめのタイポグラフィ研究＆代替比較ガイド',
      title: '商用代替フォントとタイポグラフィの仕組み',
      viewAll: 'すべてのガイドを見る →'
    },
    blog: {
      badge: 'PROFONTFINDER 研究リポート＆ガイド',
      title: 'タイポグラフィ・エンジニアリングと代替フォント研究',
      subtitle: '商用フォントの無料代替比較、ブラウザ内OCR技術の解説、商用利用可能なオープンソース書体の活用法。',
      readArticle: '記事を読む →',
      backToGuides: 'ガイド一覧に戻る',
      backToArticles: 'すべての記事に戻る',
      tryLiveEngine: 'リアルタイム照合エンジンを試す',
      tryLiveEngineSubtitle: '画像やロゴ、スクリーンショットのフォントを今すぐ特定したいですか？',
      launchFinder: 'Font Finderを起動',
      browseTwins: '代替フォント一覧を見る',
      minRead: '分で読めます'
    },
    home: {
      heroTitle: 'あらゆるフォントを',
      heroHighlight: '数秒で瞬時に特定',
      matrixBadge: 'ツール比較',
      matrixTitle: '完全ブラウザ処理の超高速認識＆サーバー画像送信ゼロ',
      matrixSubtitle: 'Pro Font Finderのローカル認識エンジンと、従来の有料課金ツールや低速クラウドツールの違いをご覧ください。',
      colFeature: '機能・性能',
      colGeneric: '一般的なオンラインツール',
      colLegacy: '従来の有料商用ツール',
      rowDualTitle: 'デュアル照合エンジン',
      rowDualPro: '有料フォント特定＋商用無料Google Fonts代替案を提案',
      rowDualGeneric: '大まかな推測のみ',
      rowDualLegacy: '有料フォントのみ提示（無料の代替案なし）',
      rowPrivacyTitle: '完全ブラウザ内プライバシー',
      rowPrivacyPro: '100%ブラウザ内処理（サーバーへの画像送信ゼロ）',
      rowPrivacyGeneric: '外部クラウドサーバーへ画像をアップロード',
      rowPrivacyLegacy: 'サーバーへの強制送信とクラウド保持',
      rowExportTitle: '開発者向けコード出力',
      rowExportPro: '本番対応CSSコード、@import構文、HTMLタグ、Tailwind v4トークン',
      rowExportGeneric: 'フォント名テキストのみ表示',
      rowExportLegacy: '購入リンクのみ提示（35ドル〜300ドル以上）',
      rowSpecimenTitle: '並列ビジュアル比較',
      rowSpecimenPro: '2ペイン比較検査、リアルタイム文字テスト、固定クロップズーム',
      rowSpecimenGeneric: '低解像度の静止プレビュー画像のみ',
      rowSpecimenLegacy: 'なし',
      rowPricingTitle: '料金と利用制限',
      rowPricingPro: '完全無料・利用回数無制限・会員登録不要',
      rowPricingGeneric: '広告多数、1日のスキャン上限あり',
      rowPricingLegacy: '月額サブスクリプションまたはスキャン課金',
      repoBadge: '検証済みフォント一覧',
      repoTitle: '人気のオープンソースフォント',
      repoSubtitle: 'ブラウジング、テスト、プロジェクトへの導入がすぐに可能です。',
      repoViewAll: 'すべての検証済みフォントを見る'
    },
    toolsIndex: {
      pdfTitle: 'PDFフォント検出ツール',
      pdfDesc: '請求書や契約書などのPDFのスクリーンショットから、埋め込みフォントやラスターフォントを特定します。',
      blogTitle: 'タイポグラフィブログ'
    }
  },
  ko: {
    commercial: {
      badge: '유료 폰트 무료 대체제 탐색기',
      heroTitle: '유료 상용 폰트의',
      heroHighlight: '무료 대체 폰트',
      heroSubtitle: '유료 폰트 캡처 이미지를 업로드하거나 아래 디렉토리를 탐색하여 프로덕션 CSS가 포함된 100% 무료 Google Fonts를 찾으세요.',
      dropzoneTitle: '상용 폰트 이미지 또는 스크린샷 드롭',
      dropzoneSubtitle: 'PNG, JPG, WebP 지원 • 유료 서체와 흡사한 무료 Google Fonts 발견',
      buttonText: '대조할 이미지 선택',
      directoryBadge: '상용 폰트 무료 GOOGLE FONTS 대체 인덱스',
      directoryTitle: '상용 폰트 무료 대체제 디렉토리',
      directorySubtitle: '비싼 폰트 라이선스 비용 때문에 프로젝트를 멈추지 마세요. 검증된 무료 Google Fonts로 즉시 교체하세요.',
      searchPlaceholder: '폰트 검색 (예: Helvetica, Futura)...',
      filterAll: '전체 폰트',
      filterGeometric: '기하학적 산세리프',
      filterNeoGrotesque: '네오 그로테스크',
      filterSerif: '세리프 서체',
      filterHumanist: '휴머니스트 산세리프',
      filterDisplay: '디스플레이 & 슬랩',
      recommendedStandIn: '추천 무료 대체 폰트',
      freeOfl: '100% 무료 상용 (OFL)',
      match: '일치율',
      by: '디자이너:',
      getFreeFont: '폰트 받기 ↗',
      specimen: '폰트 샘플 →',
      copyCss: 'CSS 복사',
      copied: '복사 완료!',
      noResults: "일치하는 상용 폰트를 찾을 수 없습니다. 'Helvetica' 또는 'Futura'로 다시 검색해 보세요.",
      faqBadge: '자주 묻는 질문 (FAQ)',
      faqTitle: '상용 폰트 대체제 안내 가이드',
      faqSubtitle: '유료 폰트를 법적으로 안전한 무료 Google Fonts로 교체하는 데 필요한 모든 정보.',
      faqs: [
        {
          q: '폰트 대체제(트윈 폰트)란 무엇인가요?',
          a: '비싼 유료 상용 폰트와 글자 비례, x-높이, 획 대비 및 마감이 거의 동일하여 라이선스 비용 없이 교체할 수 있는 오픈소스 무료 서체를 의미합니다.'
        },
        {
          q: '이 Google Fonts 서체들을 클라이언트 상용 프로젝트에 써도 되나요?',
          a: '네, 100% 가능합니다. 추천하는 서체는 모두 SIL Open Font License(OFL) 또는 Apache 2.0 라이선스로 배포되어 상용 프로젝트에 제한 없이 사용할 수 있습니다.'
        },
        {
          q: 'Helvetica와 가장 비슷한 무료 Google Fonts는 무엇인가요?',
          a: 'Rasmus Andersson이 디자인한 Inter가 가장 가까운 현대적 대체제로 손꼽히며, 화면 디스플레이에 최적화된 네오 그로테스크 구조를 가집니다.'
        },
        {
          q: 'ProFontFinder는 시각적 유사도를 어떻게 측정하나요?',
          a: '브라우저 내부 엔진이 글리프 비율, 획 두께, 마감 각도 및 16×16 벡터 매트릭스를 실시간으로 연산하여 정확한 기하학적 일치도를 도출합니다.'
        }
      ]
    },
    logo: {
      badge: '로고 폰트 판별기',
      heroTitle: '브랜드 로고의',
      heroHighlight: '사용 서체 식별',
      heroSubtitle: '로고 이미지를 업로드하여 어떤 서체가 쓰였는지 알아보고 100% 무료 Google Fonts 대체제를 확인하세요.',
      dropzoneTitle: '브랜드 로고 또는 심볼 이미지 드롭',
      dropzoneSubtitle: '투명 배경 또는 단색 배경의 PNG, JPG, WebP 파일 지원',
      buttonText: '로고 파일 선택',
      directoryBadge: '브랜드 타이포그래피 인덱스',
      directoryTitle: '브랜드 로고 및 공식 서체 디렉토리',
      directorySubtitle: '세계적인 브랜드 정체성을 이끄는 공식 폰트와 검증된 무료 Google Fonts 대체제를 확인하세요.',
      searchPlaceholder: '브랜드 또는 폰트 검색 (예: Nike, Spotify, Apple)...',
      filterAll: '전체 브랜드',
      filterTech: '테크 & 소프트웨어',
      filterFashion: '패션 & 럭셔리',
      filterMedia: '미디어 & 엔터테인먼트',
      filterAuto: '자동차 & 모빌리티',
      filterAerospace: '항공우주 & 과학',
      officialTypeface: '공식 브랜드 서체',
      freeEquivalent: '무료 GOOGLE FONTS 대체제',
      match: '일치율',
      by: '디자이너:',
      getFont: '폰트 받기 ↗',
      specimen: '폰트 샘플 →',
      copyCss: 'CSS 복사',
      copied: '복사 완료!',
      noResults: "해당 브랜드를 찾을 수 없습니다. 'Nike', 'Spotify' 또는 'Apple'로 검색해 보세요.",
      faqBadge: '자주 묻는 질문 (FAQ)',
      faqTitle: '로고 폰트 식별 가이드',
      faqSubtitle: '세계적인 브랜드들의 서체 활용 전략과 합법적인 무료 대체제 활용법.',
      faqs: [
        {
          q: '로고 이미지에서 폰트를 어떻게 찾나요?',
          a: 'ProFontFinder에 로고 이미지를 업로드하고 글자 부분을 자르면 브라우저 내 AI가 윤곽을 분석하여 가장 가까운 폰트를 즉시 찾아냅니다.'
        },
        {
          q: '유명 브랜드 로고의 폰트를 내 프로젝트에 사용해도 되나요?',
          a: '상표권이 등록된 로고 디자인 자체는 복제할 수 없으나, 기반이 된 상용 서체를 정식 구매하거나 추천 무료 Google Fonts를 사용하는 것은 완전히 합법입니다.'
        },
        {
          q: '나이키 로고에는 어떤 폰트가 쓰였나요?',
          a: '나이키 로고와 슬로건은 Futura Bold Extra Condensed를 커스텀하여 기울인 서체입니다. 가장 비슷한 무료 Google Fonts는 Oswald (700 Italic)입니다.'
        },
        {
          q: '넷플릭스 로고 폰트는 무엇인가요?',
          a: '넷플릭스는 Gotham과 Bebas Neue에서 파생된 맞춤형 Netflix Sans 서체를 씁니다. 가장 유사한 무료 Google Fonts는 Bebas Neue입니다.'
        }
      ]
    },
    pdf: {
      badge: 'PDF 폰트 감지기',
      heroTitle: 'PDF 폰트 식별',
      heroHighlight: '',
      heroSubtitle: 'PDF 청구서, 계약서, 전자책 캡처 이미지를 붙여넣으세요. 1,935개 이상의 Google Fonts와 100% 브라우저 내 비공개 대조.',
      dropzoneTitle: 'PDF 스크린샷 붙여넣기 (⌘V / Ctrl+V) 또는 파일 드롭',
      dropzoneSubtitle: 'PDF 페이지를 캡처하여 여기에 바로 붙여넣으세요',
      buttonText: 'PDF 이미지 선택',
      feature1Title: '고해상도 벡터 래스터화',
      feature1Desc: '픽셀 깨짐 없이 정밀한 글자 윤곽을 PDF 캡처에서 추출합니다.',
      feature2Title: '100% 브라우저 메모리 보안',
      feature2Desc: '기밀 계약서와 인보이스가 외부 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.',
      feature3Title: '무료 대체 Google Fonts 즉시 제안',
      feature3Desc: 'PDF에서 유실되거나 깨진 서체를 대체할 수 있는 무료 서체를 빠르게 찾습니다.',
      faqBadge: '자주 묻는 질문 (FAQ)',
      faqTitle: 'PDF 폰트 감지 자주 묻는 질문',
      faqSubtitle: 'PDF 문서 내 폰트 식별에 관한 필수 안내.',
      faqs: [
        {
          q: 'PDF 파일에서 폰트를 어떻게 찾나요?',
          a: 'PDF 페이지를 캡처(Win + Shift + S 또는 Cmd + Shift + 4)한 뒤 ProFontFinder에서 Ctrl+V / Cmd+V로 붙여넣으면 몇 초 만에 폰트가 식별됩니다.'
        },
        {
          q: '스캔된 종이 문서 PDF도 인식되나요?',
          a: '네. 디지털 벡터 PDF뿐 아니라 종이 문서를 스캔한 이미지 PDF도 대비 강화 알고리즘을 통해 인식 가능합니다.'
        },
        {
          q: '기밀 PDF 문서가 외부에 유출되지 않나요?',
          a: '전혀 유출되지 않습니다. 모든 과정은 사용자 브라우저의 로컬 메모리에서만 수행되며 서버로 업로드되지 않습니다.'
        }
      ]
    },
    guidesFeatured: {
      badge: '추천 타이포그래피 연구 및 폰트 비교 가이드',
      title: '상용 폰트 대체제 및 타이포그래피 메커니즘',
      viewAll: '모든 가이드 보기 →'
    },
    blog: {
      badge: 'PROFONTFINDER 연구 리포트 & 가이드',
      title: '타이포그래피 엔지니어링 및 폰트 대체제 연구',
      subtitle: '유료 상용 서체 무료 대체 비교, 브라우저 내 OCR 알고리즘 메커니즘 및 오픈소스 서체 배포 가이드.',
      readArticle: '가이드 읽기 →',
      backToGuides: '가이드 목록으로 돌아가기',
      backToArticles: '모든 기사로 돌아가기',
      tryLiveEngine: '실시간 폰트 인식 엔진 체험하기',
      tryLiveEngineSubtitle: '이미지, 로고, 스크린샷 속 미지의 폰트를 지금 바로 찾고 싶으신가요?',
      launchFinder: 'Font Finder 실행',
      browseTwins: '무료 대체 폰트 탐색',
      minRead: '분 소요'
    },
    home: {
      heroTitle: '모든 폰트를',
      heroHighlight: '단 몇 초 만에 식별',
      matrixBadge: '도구 성능 비교',
      matrixTitle: '순수 브라우저 속도 및 서버 업로드 제로를 위한 설계',
      matrixSubtitle: 'Pro Font Finder의 로컬 인식 엔진이 기존 유료 결제 도구 및 느린 클라우드 서비스와 어떻게 다른지 확인해 보세요.',
      colFeature: '기능 및 역량',
      colGeneric: '일반 온라인 도구',
      colLegacy: '기존 상용 유료 도구',
      rowDualTitle: '듀얼 엔진 매칭',
      rowDualPro: '유료 폰트 판별 + 무료 Google Fonts 대체 폰트 1클릭 매칭',
      rowDualGeneric: '기본적인 폰트 추측만 제공',
      rowDualLegacy: '유료 상용 폰트만 제공 (무료 대체안 없음)',
      rowPrivacyTitle: '완벽한 브라우저 프라이버시',
      rowPrivacyPro: '100% 브라우저 내 처리 (외부 서버 이미지 전송 제로)',
      rowPrivacyGeneric: '서드파티 클라우드로 이미지 업로드',
      rowPrivacyLegacy: '서버 업로드 필수 및 클라우드 데이터 보관',
      rowExportTitle: '개발자 코드 내보내기',
      rowExportPro: '프로덕션 CSS 청사진, @import 구문, HTML 태그 및 Tailwind v4 디자인 토큰',
      rowExportGeneric: '단순 폰트 이름 텍스트만 표시',
      rowExportLegacy: '구매 링크만 제공 ($35~$300 이상)',
      rowSpecimenTitle: '나란히 실시간 시각적 비교',
      rowSpecimenPro: '듀얼 패널 시각 검사, 실시간 텍스트 에디터 및 고정 크롭 확대',
      rowSpecimenGeneric: '저화질 정적 미리보기만 제공',
      rowSpecimenLegacy: '없음',
      rowPricingTitle: '가격 및 사용 제한',
      rowPricingPro: '평생 100% 무료 • 무제한 스캔 • 가입 불필요',
      rowPricingGeneric: '광고 과다 및 일일 분석 횟수 제한',
      rowPricingLegacy: '월간 구독료 또는 스캔당 비용 청구',
      repoBadge: '검증된 폰트 리포지토리',
      repoTitle: '인기 오픈소스 서체',
      repoSubtitle: '프로젝트에 바로 탐색, 테스트 및 복사할 수 있습니다.',
      repoViewAll: '검증된 모든 폰트 보기'
    },
    toolsIndex: {
      pdfTitle: 'PDF 폰트 감지기',
      pdfDesc: '청구서, 계약서 또는 전자책의 스크린샷을 캡처하여 PDF 속 폰트를 즉시 식별합니다.',
      blogTitle: '타이포그래피 블로그'
    }
  },
  pt: {
    commercial: {
      badge: 'LOCALIZADOR DE ALTERNATIVAS A FONTES PAGAS',
      heroTitle: 'Alternativas Gratuitas para',
      heroHighlight: 'Fontes Comerciais',
      heroSubtitle: 'Envie uma captura de qualquer fonte comercial ou navegue no diretório para encontrar fontes Google Fonts gratuitas com CSS de produção.',
      dropzoneTitle: 'Solte a imagem ou captura da fonte comercial aqui',
      dropzoneSubtitle: 'Compatível com PNG, JPG, WebP • Encontre fontes irmãs no Google Fonts',
      buttonText: 'Selecionar Imagem para Comparar',
      directoryBadge: 'ÍNDICE DE FONTES COMERCIAIS PARA GOOGLE FONTS',
      directoryTitle: 'Diretório de Fontes Comerciais Gêmeas',
      directorySubtitle: 'Não deixe orçamentos de licença caros pararem seu projeto. Substitua fontes pagas por alternativas verificadas do Google Fonts.',
      searchPlaceholder: 'Pesquisar fonte (ex. Helvetica, Futura)...',
      filterAll: 'Todas as Fontes',
      filterGeometric: 'Sans Geométricas',
      filterNeoGrotesque: 'Neo-Grotescas',
      filterSerif: 'Fontes com Serifa',
      filterHumanist: 'Sans Humanistas',
      filterDisplay: 'Display & Slab',
      recommendedStandIn: 'ALTERNATIVA GRATUITA RECOMENDADA',
      freeOfl: '100% Gratuito OFL',
      match: 'Correspondência',
      by: 'por',
      getFreeFont: 'Baixar Fonte ↗',
      specimen: 'Espécime →',
      copyCss: 'Copiar CSS',
      copied: 'Copiado!',
      noResults: "Nenhuma fonte comercial encontrada. Tente pesquisar por 'Helvetica' ou 'Futura'.",
      faqBadge: 'PERGUNTAS FREQUENTES',
      faqTitle: 'Guia de Alternativas a Fontes Comerciais',
      faqSubtitle: 'Tudo o que você precisa saber para substituir legalmente fontes pagas por Google Fonts.',
      faqs: [
        {
          q: 'O que é uma fonte alternativa ou fonte gêmea?',
          a: 'Uma fonte gêmea é um tipo de letra de código aberto que compartilha proporções visuais, altura-x e contraste quase idênticos a uma fonte comercial paga.'
        },
        {
          q: 'Posso usar essas fontes do Google comercialmente em projetos de clientes?',
          a: 'Sim, 100%. Todas as fontes recomendadas possuem licença SIL Open Font License (OFL) ou Apache 2.0, permitindo uso comercial irrestrito.'
        },
        {
          q: 'Qual é a fonte do Google mais próxima da Helvetica?',
          a: 'A Inter (criada por Rasmus Andersson) é amplamente considerada a melhor alternativa moderna e gratuita para a Helvetica, otimizada para telas digitais.'
        },
        {
          q: 'Como o ProFontFinder calcula a similaridade óptica?',
          a: 'Nosso mecanismo no navegador analisa proporções de glifos, altura-x, contraste de traço e matrizes vetoriais 16×16 para calcular pontuações precisas.'
        }
      ]
    },
    logo: {
      badge: 'IDENTIFICADOR DE FONTES DE LOGOTIPOS',
      heroTitle: 'Identifique a Fonte de um',
      heroHighlight: 'Logotipo de Marca',
      heroSubtitle: 'Envie um logotipo para descobrir qual fonte é usada e obter alternativas 100% gratuitas no Google Fonts.',
      dropzoneTitle: 'Solte a imagem do logotipo da marca aqui',
      dropzoneSubtitle: 'Compatível com logos PNG, JPG e WebP com fundo transparente ou sólido',
      buttonText: 'Selecionar Arquivo do Logo',
      directoryBadge: 'ÍNDICE DE TIPOGRAFIA DE MARCAS',
      directoryTitle: 'Logotipos de Marcas & Fontes Oficiais',
      directorySubtitle: 'Explore os tipos de letra oficiais e as alternativas gratuitas do Google Fonts das marcas mais famosas do mundo.',
      searchPlaceholder: 'Pesquisar marca ou fonte (ex. Nike, Spotify, Apple)...',
      filterAll: 'Todas as Marcas',
      filterTech: 'Tecnologia',
      filterFashion: 'Moda e Luxo',
      filterMedia: 'Mídia e Entretenimento',
      filterAuto: 'Automotivo',
      filterAerospace: 'Aeroespacial',
      officialTypeface: 'FONTE OFICIAL DA MARCA',
      freeEquivalent: 'EQUIVALENTE GRATUITO GOOGLE FONTS',
      match: 'Correspondência',
      by: 'por',
      getFont: 'Obter Fonte ↗',
      specimen: 'Espécime →',
      copyCss: 'Copiar CSS',
      copied: 'Copiado!',
      noResults: "Nenhum logotipo encontrado. Tente pesquisar por 'Nike', 'Spotify' ou 'Apple'.",
      faqBadge: 'PERGUNTAS FREQUENTES',
      faqTitle: 'Guia de Identificação de Fontes de Logos',
      faqSubtitle: 'Descubra como grandes marcas utilizam a tipografia e como encontrar alternativas legais e gratuitas.',
      faqs: [
        {
          q: 'Como identifico uma fonte a partir de uma imagem de logo?',
          a: 'Envie o logo para o ProFontFinder, recorte o texto e nossa inteligência artificial analisará os contornos para encontrar as fontes correspondentes em segundos.'
        },
        {
          q: 'Posso usar legalmente fontes de logos famosos nos meus projetos?',
          a: 'Você não pode copiar um logotipo registrado. No entanto, PODE licenciar a fonte comercial subjacente ou usar nossas fontes gratuitas recomendadas do Google Fonts.'
        },
        {
          q: 'Qual fonte o logotipo da Nike usa?',
          a: 'A Nike usa uma versão personalizada e inclinada da Futura Bold Extra Condensed. O equivalente gratuito mais próximo é a Oswald (700 Italic).'
        },
        {
          q: 'Qual fonte é usada no logo da Netflix?',
          a: 'A Netflix usa a Netflix Sans, criada a partir da Gotham e Bebas Neue. A alternativa gratuita mais próxima é a Bebas Neue.'
        }
      ]
    },
    pdf: {
      badge: 'DETECTOR DE FONTES EM PDF',
      heroTitle: 'Identifique Fontes em',
      heroHighlight: 'PDF',
      heroSubtitle: 'Capture uma tela de qualquer fatura ou contrato em PDF. Compare com mais de 1.935 Google Fonts com 100% de privacidade no navegador.',
      dropzoneTitle: 'Cole a captura do PDF (⌘V / Ctrl+V) ou solte a imagem',
      dropzoneSubtitle: 'Faça um recorte da sua página PDF e cole diretamente aqui',
      buttonText: 'Selecionar Imagem PDF',
      feature1Title: 'Rasterização Vetorial de Alta Resolução',
      feature1Desc: 'Extraia contornos nítidos de capturas de PDF sem distorção por pixelização.',
      feature2Title: '100% de Privacidade no seu Navegador',
      feature2Desc: 'Faturas e contratos confidenciais permanecem na memória RAM local. Zero upload para servidores.',
      feature3Title: 'Equivalentes Gratuitos no Google Fonts',
      feature3Desc: 'Encontre instantaneamente substitutos de código aberto para substituir fontes ausentes em seus documentos PDF.',
      faqBadge: 'PERGUNTAS FREQUENTES',
      faqTitle: 'Perguntas Frequentes sobre Fontes em PDF',
      faqSubtitle: 'Respostas para dúvidas comuns sobre a identificação de fontes em arquivos PDF.',
      faqs: [
        {
          q: 'Como descubro uma fonte de um arquivo PDF?',
          a: 'Tire uma captura de tela nítida do PDF, cole com Ctrl+V / Cmd+V no ProFontFinder e a fonte será identificada em poucos segundos.'
        },
        {
          q: 'O ProFontFinder funciona em PDFs digitalizados?',
          a: 'Sim. Nosso motor óptico funciona tanto em PDFs vetoriais quanto em documentos digitalizados com filtragem de contraste.'
        },
        {
          q: 'Meus documentos PDF confidenciais permanecem seguros?',
          a: 'Sim, 100%. Todo o processamento acontece localmente na memória do seu navegador sem envio para servidores externos.'
        }
      ]
    },
    guidesFeatured: {
      badge: 'GUIAS DE PESQUISA E COMPARAÇÃO EM DESTAQUE',
      title: 'Alternativas Comerciais e Mecânica Tipográfica',
      viewAll: 'Ver todos os guias →'
    },
    blog: {
      badge: 'PESQUISA E GUIAS PROFONTFINDER',
      title: 'Engenharia Tipográfica & Alternativas de Fontes',
      subtitle: 'Pesquisas aprofundadas sobre equivalentes de fontes comerciais, funcionamento de OCR óptico e uso de fontes de código aberto.',
      readArticle: 'Ler Artigo →',
      backToGuides: 'Volver aos Guias',
      backToArticles: 'Voltar a Todos os Artigos',
      tryLiveEngine: 'TESTAR O MOTOR EM TEMPO REAL',
      tryLiveEngineSubtitle: 'Quer identificar uma fonte desconhecida em uma imagem ou logo?',
      launchFinder: 'Iniciar Font Finder',
      browseTwins: 'Explorar Fontes Gêmeas',
      minRead: 'min de leitura'
    },
    home: {
      heroTitle: 'Identifique Qualquer Fonte',
      heroHighlight: 'Em Poucos Segundos',
      matrixBadge: 'COMPARAÇÃO DE FERRAMENTAS',
      matrixTitle: 'Projetado para Velocidade Pura no Navegador e Zero Envios para o Servidor',
      matrixSubtitle: 'Veja como o motor de reconhecimento local do Pro Font Finder se compara a paywalls tradicionais e ferramentas lentas na nuvem.',
      colFeature: 'Recursos e Capacidade',
      colGeneric: 'Ferramentas Online Genéricas',
      colLegacy: 'Ferramentas Comerciais Tradicionais',
      rowDualTitle: 'Correspondência de Motor Dual',
      rowDualPro: 'Identifica fontes pagas + alternativas gratuitas no Google Fonts',
      rowDualGeneric: 'Apenas suposições básicas de fontes',
      rowDualLegacy: 'Apenas fontes comerciais pagas (sem alternativas livres)',
      rowPrivacyTitle: 'Privacidade 100% no Navegador',
      rowPrivacyPro: '100% no navegador (Zero envios para servidores)',
      rowPrivacyGeneric: 'Envia imagens para a nuvem de terceiros',
      rowPrivacyLegacy: 'Upload obrigatório e retenção de dados na nuvem',
      rowExportTitle: 'Exportação de Código para Desenvolvedores',
      rowExportPro: 'Modelos CSS prontos para produção, regras @import, tags HTML e tokens Tailwind v4',
      rowExportGeneric: 'Apenas o nome da fonte em texto simples',
      rowExportLegacy: 'Apenas links de compra ($35-$300+)',
      rowSpecimenTitle: 'Comparação Visual Lado a Lado',
      rowSpecimenPro: 'Inspeção visual em dois painéis, editor de espécime em tempo real e zoom de corte fixo',
      rowSpecimenGeneric: 'Pré-visualização estática de baixa resolução',
      rowSpecimenLegacy: 'Nenhum',
      rowPricingTitle: 'Preços e Limites de Uso',
      rowPricingPro: '100% Gratuito para Sempre • Varreduras Ilimitadas • Sem Cadastro',
      rowPricingGeneric: 'Cheio de anúncios e com limites diários de varredura',
      rowPricingLegacy: 'Assinaturas mensais ou cobrança por análise',
      repoBadge: 'REPOSITÓRIO VERIFICADO',
      repoTitle: 'Tipografias de código aberto populares',
      repoSubtitle: 'Prontas para explorar, testar e copiar em seus projetos.',
      repoViewAll: 'Ver todas as fontes verificadas'
    },
    toolsIndex: {
      pdfTitle: 'Detector de Fontes PDF',
      pdfDesc: 'Capture um screenshot de faturas, contratos ou páginas em PDF para identificar fontes embutidas ou rasterizadas.',
      blogTitle: 'Blog Tipográfico'
    }
  }
};

export function getViewTranslations(locale: string | undefined): ViewTranslation {
  const loc = (locale || 'en') as SupportedLocale;
  return VIEW_TRANSLATIONS[loc] || VIEW_TRANSLATIONS.en;
}
