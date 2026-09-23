import type { TranslationSchema } from './en';

export const pt: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: 'O identificador de fontes por imagem feito para desenvolvedores. Inspecione a geometria dos caracteres, valide fontes Google Fonts de código aberto e copie código CSS pronto para produção.',
    nav: {
      finder: 'Localizador',
      tools: 'Ferramentas',
      guides: "Guias",
      about: 'Sobre',
      identifyFont: 'Identificar',
      toggleTheme: 'Alternar tema de cor',
      skipToContent: 'Pular para o conteúdo',
      language: 'Idioma'
    },
    footer: {
      mission: 'O identificador de fontes por imagem feito para desenvolvedores. Inspecione a geometria dos caracteres, valide fontes Google Fonts de código aberto e copie código CSS pronto para produção.',
      zeroStorageBadge: 'Zero Armazenamento de Imagens • 100% em Memória no Navegador',
      productsTitle: 'Produtos',
      tools: {
        imageFontFinder: 'Localizador de Fonte por Imagem',
        urlFontFinder: 'Localizador de Fonte por URL',
        logoFontFinder: 'Identificador de Fonte em Logo',
        screenshotFontFinder: 'Identificador em Captura de Tela',
        fontPairing: 'Ferramenta de Combinação de Fontes',
        handwritingMatcher: 'Reconhecimento de Manuscrito',
        commercialAlternatives: 'Alternativas a Fontes Comerciais'
      },
      companyTitle: 'Empresa',
      aboutUs: 'Sobre Nós',
      howItWorks: 'Como Funciona',
      guides: "Guias e Tutoriais",
      allFontTools: 'Todas as Ferramentas',
      contactSupport: 'Contato e Suporte',
      trustLegalTitle: 'Confiança e Termos',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      googleFonts: 'Google Fonts',
      silLicense: 'Licença SIL Open Font',
      copyright: 'Pro Font Finder. Inspeção tipográfica de precisão para desenvolvedores e designers.',
      noCookies: 'Sem cookies',
      noAccount: 'Sem necessidade de cadastro',
      freeCommercial: 'Gratuito para uso comercial'
    },
    buttons: {
      identifyNow: 'Identificar Fonte Agora',
      exploreTools: 'Explorar Ferramentas',
      backToHome: 'Voltar ao Início',
      copyCss: 'Copiar CSS',
      copied: 'Copiado'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / VERIFICAÇÃO DE TEXTO",
      "cropManually": "Recortar manualmente",
      "newImage": "Nova imagem",
      "dragCursorInstruction": "Arraste o cursor sobre a imagem para isolar uma região de texto específica:",
      "applyAndRedetect": "Aplicar e redetectar",
      "detectedTextLabel": "Texto detectado:",
      "verifyDetectedText": "Verificar texto detectado",
      "verifyInputPlaceholder": "Verificar ou editar texto...",
      "inspectIndividualWords": "Inspecionar palavras e letras individuais",
      "wordSegmentsLabel": "Segmentos de palavras (Clique para isolar uma palavra específica):",
      "letterGlyphsLabel": "Glifos de letras (Corrija caracteres individuais ou limpe não-letras):",
      "identifyFont": "Identificar fonte",
      "identifyFontFor": "Identificar fonte para \"{word}\"",
      "detectingText": "Detectando texto e formas de letras...",
      "distinctFont": "Fonte distinta",
      "comparingLetterShapes": "COMPARANDO FORMAS DAS LETRAS",
      "matchingFontsProgress": "Comparando com {count} fontes no seu navegador...",
      "stageA": "ETAPA A: CORRESPONDÊNCIA DE IMPRESSÕES DE GLIFOS 16×16",
      "evaluatingContours": "Avaliando contornos de letras em {count} fontes...",
      "stageB": "ETAPA B: CLASSIFICAÇÃO DE CANDIDATOS",
      "rankingMatches": "Classificando as correspondências mais próximas do Google Fonts...",
      "previewTextHeading": "Texto de pré-visualização.",
      "previewTextSubheading": "Digite qualquer texto para vê-lo renderizado em cada resultado.",
      "editText": "↑ Editar texto",
      "previewPlaceholder": "Digite um texto para pré-visualizar...",
      "bestMatch": "Melhor correspondência",
      "match": "Correspondência",
      "designedBy": "Criado por {designer} • SIL Open Font License",
      "copyName": "Copiar nome",
      "copied": "Copiado!",
      "googleFonts": "Google Fonts",
      "scanAnother": "Escanear outra imagem",
      "commercialAlternative": "Alternativa comercial:",
      "commercialAlternativeDesc": "Combina com o estilo de {commercial}. A alternativa gratuita verificada no Google Fonts é {family}.",
      "compareWithImage": "Comparar com a sua imagem",
      "comparePlaceholder": "Digite um texto para comparar...",
      "yourImage": "Sua imagem",
      "matchedFont": "Fonte correspondente",
      "typographySpecimen": "Espécime tipográfico",
      "closestMatchesHeading": "CORRESPONDÊNCIAS MAIS PRÓXIMAS DO GOOGLE FONTS",
      "livePreviewGoogleFonts": "Pré-visualização em tempo real renderizada com Google Fonts",
      "closestRank": "mais próxima",
      "freeOpenLicense": "Gratuito • Licença aberta",
      "viewOnGoogleFonts": "Ver no Google Fonts",
      "copyCss": "Copiar CSS",
      "liveSpecimenTester": "02 / TESTADOR DE ESPÉCIMES EM TEMPO REAL",
      "size": "Tamanho:",
      "specimenDefaultText": "Um pequeno jabuti xereta viu dez cegonhas felizes",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / CÓDIGO CSS DE PRODUÇÃO",
      "copy": "Copiar",
      "openInGoogleFontsRepo": "Abrir no repositório Google Fonts",
      "inspectSpecimenDetails": "Inspecionar detalhes da fonte →",
      "closestAlternatives": "04 / ALTERNATIVAS VERIFICADAS MAIS PRÓXIMAS",
      "viewSpecimen": "Ver espécime →",
      "opticalMatch": "{confidence}% Correspondência óptica",
      "errSelectWord": "Por favor, selecione uma palavra para identificar.",
      "errAtLeastOneLetter": "Certifique-se de que pelo menos uma letra seja inserida ou detectada.",
      "errInvalidFormat": "Por favor, envie uma imagem nos formatos PNG, JPG ou WebP.",
      "errFileTooLarge": "O arquivo excede o limite de 10 MB.",
      "errParseFailed": "Falha ao processar a imagem."
  },

  home: {
    "meta": {
      "title": "Font Finder — Identificador gratuito de fontes por imagem",
      "description": "Identifique qualquer fonte em imagens e capturas de tela instantaneamente com o Font Finder. Obtenha alternativas 100% gratuitas e verificadas do Google Fonts."
    },
    "hero": {
      "headlinePrefix": "Identifique fontes em",
      "subtitle": "Arraste qualquer captura de tela para isolar as formas das letras, calcular contornos ópticos e obter Google Fonts de código aberto verificadas."
    },
    "dropzone": {
      "title": "Arraste uma imagem ou cole uma captura (⌘V)",
      "subtitle": "Compatível com PNG, JPG, WebP • Detecção 100% privada no navegador",
      "buttonText": "Selecionar arquivo de imagem"
    },
    "pipeline": {
      "badge": "ARQUITETURA DE RECONHECIMENTO",
      "heading": "Pipeline de reconhecimento em três etapas",
      "subheading": "De pixels de bitmap irrestritos a tipografia CSS de código aberto verificada e pronta para produção.",
      "localInference": "< 150 ms Inferência local",
      "zeroUploads": "Zero envios para o servidor",
      "step1": {
        "phase": "FASE 01 // INGESTÃO",
        "tag": "ENTRADA BRUTA",
        "title": "Enviar ou Colar",
        "desc": "Arraste uma imagem ou cole instantaneamente da área de transferência com",
        "descSuffix": "O recorte interativo isola com precisão os contornos dos glifos.",
        "crop": "RECORTAR",
        "autoDetect": "Detecção automática",
        "footerTraffic": "Zero tráfego de servidor",
        "step": "Etapa 1 de 3"
      },
      "step2": {
        "phase": "FASE 02 // VARREDURA NEURAL",
        "tag": "ACELERAÇÃO GPU",
        "title": "Varredura Óptica",
        "desc": "Extrai contraste, espessura de traços e assinaturas de glifos 16×16 localmente na memória com rasterizador de precisão subpixel.",
        "matrix": "Matriz: Bitmaps 16×16",
        "apertures": "Aberturas: Geométricas",
        "vectorNodes": "Nós vetoriais: 100% Correspondência",
        "footerClient": "100% WebGL Cliente",
        "step": "Etapa 2 de 3"
      },
      "step3": {
        "phase": "FASE 03 // SÍNTESE CSS",
        "tag": "VERIFICADO OFL 1.1",
        "title": "Exportar Código",
        "desc": "Obtenha alternativas verificadas do Google Fonts com regras CSS testadas para produção de",
        "descSuffix": "regras CSS.",
        "readyToEmbed": "Pronto para incorporar",
        "footerOfl": "Gratuito comercial OFL",
        "step": "Etapa 3 de 3"
      }
    },
    "engineSpecs": {
      "badge": "ESPECIFICAÇÕES DO MOTOR",
      "title": "Correspondências de código aberto.",
      "titleAccent": "Prontas para produção.",
      "desc": "Evite armadilhas de licenças comerciais. O Font Finder mapeia formas de letras para alternativas autênticas e gratuitas do Google Fonts.",
      "licensingModel": "Modelo de licença",
      "licensingValue": "100% Gratuito SIL Open Font License",
      "processingArch": "Arquitetura de processamento",
      "processingValue": "100% WebGL / Canvas no cliente",
      "cdnIntegration": "Integração CDN",
      "cdnValue": "Incorporações diretas do Google Fonts",
      "jsonOutput": "Saída JSON"
    },
    "guide": {
      "imageRecognition": {
        "badge": "RECONHECIMENTO DE IMAGEM",
        "title": "Encontre uma fonte a partir de uma imagem",
        "desc": "Encontrar uma tipografia marcante é inspirador, mas identificá-la a partir de uma imagem estática pode ser um desafio. Seja em cartazes, revistas ou capturas de tela, perguntar \"qual é essa fonte?\" é uma dúvida comum no design.",
        "cardP1": "Um identificador óptico especializado une os pixels estáticos a fontes reais utilizáveis. Em vez de folhear catálogos extensos, a ferramenta extrai a geometria das letras e a compara com acervos indexados.",
        "cardP2": "Seja para analisar marcas, estudar interfaces ou explorar estilos visuais, o ProFontFinder facilita a descoberta instantânea com resultados confiáveis."
      },
      "opticalAnalysis": {
        "badge": "ANÁLISE ÓPTICA",
        "title": "Como funciona a identificação de fontes?",
        "desc": "A identificação combina visão computacional com análise estrutural dos tipos. Enquanto um OCR comum apenas transcreve palavras, nosso motor analisa curvas, proporções e traços anatômicos das letras."
      },
      "commercialFree": {
        "title": "Tipografia de nível profissional sem custos de assinatura",
        "desc": "Nosso identificador gratuito soluciona custos de licenciamento associando fontes comerciais a alternativas autênticas de código aberto sob a licença SIL Open Font License:",
        "commOriginal": "ORIGINAL COMERCIAL",
        "exploreLink": "Explore mais de 50 fontes gêmeas de código aberto na nossa ferramenta de alternativas comerciais"
      },
      "digitalAssets": {
        "badge": "VARREDURA DE ATIVOS DIGITAIS",
        "title": "Identifique fontes de capturas de tela e logotipos",
        "desc": "A inspiração tipográfica geralmente surge em capturas de tela, gráficos e logotipos de marcas.",
        "card1Title": "Capturas de tela da web e aplicativos móveis",
        "card1Desc": "Capture um trecho da tela enquanto navega e arraste para o Screenshot Font Finder para obter respostas imediatas sem custos.",
        "card1Link": "Iniciar scanner de capturas",
        "card2Title": "Logotipos de marcas e marcas nominativas",
        "card2Desc": "Descubra a tipografia de marcas famosas com o Logo Font Finder e encontre fontes semelhantes de livre acesso.",
        "card2Link": "Ver diretório de fontes de marcas"
      },
      "styleTaxonomy": {
        "badge": "TAXONOMIA DE ESTILOS",
        "title": "Explore diferentes estilos de fontes",
        "desc": "Compreender os estilos tipográficos ajuda a refinar sua busca:",
        "serifTitle": "Fontes com serifa (Serif)",
        "serifDesc": "Pequenos traços decorativos nas extremidades que transmitem tradição e elegância editorial (ex.: Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "Fontes sem serifa (Sans-Serif)",
        "sansDesc": "Linhas limpas e ótima legibilidade digital, desde a geométrica Montserrat até opções neutras como Inter e Roboto.",
        "displayTitle": "Fontes Display e Títulos",
        "displayDesc": "Forte personalidade e proporções marcantes feitas para títulos de grande destaque (ex.: Bebas Neue, Anton, Syne).",
        "cursiveTitle": "Manuscritas e Cursivas",
        "cursiveDesc": "Caligrafia orgânica e traços fluídos. Descubra fontes cursivas no Handwriting Font Finder ou confira nossas ferramentas tipográficas."
      },
      "practicalUtility": {
        "badge": "UTILIDADE PRÁTICA",
        "title": "Font Finder para designers e desenvolvedores",
        "desc": "O ProFontFinder otimiza fluxos de trabalho em diversas frentes criativas:",
        "devTitle": "Desenvolvedores Frontend",
        "devDesc": "Copie trechos @import do Google Fonts e classes Tailwind diretamente. Inspecione sites ao vivo com o URL Font Finder.",
        "uiTitle": "Designers UI/UX",
        "uiDesc": "Descubra fontes em capturas e moodboards para manter a consistência em seus projetos no Figma.",
        "creatorTitle": "Criadores e entusiastas da tipografia",
        "creatorDesc": "Descubra combinações ideais de títulos e parágrafos com nossa ferramenta interativa de combinação de fontes."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "Perguntas frequentes",
      "items": [
        {
          "q": "O que é o What The Font Finder e como ele funciona?",
          "a": "É uma ferramenta tipográfica online gratuita que analisa texto em imagens e capturas para identificar a fonte exata ou a alternativa de código aberto mais próxima no Google Fonts."
        },
        {
          "q": "O Google consegue identificar uma fonte?",
          "a": "O Google Lens reconhece palavras, mas não identifica pesos ou declarações CSS precisas de font-family. O ProFontFinder foi desenvolvido especificamente para designers e desenvolvedores."
        },
        {
          "q": "Como identificar um estilo de fonte?",
          "a": "Observe se há serifas, analise o desenho de letras como \"a\" e \"g\", verifique o contraste de espessura e envie uma imagem para o ProFontFinder."
        },
        {
          "q": "Como saber qual fonte está sendo usada em um site?",
          "a": "Clique com o botão direito no texto e selecione \"Inspecionar\" (F12) para ver a regra font-family. Para imagens ou logotipos, tire uma captura e envie ao ProFontFinder."
        },
        {
          "q": "Posso usar IA para identificar uma fonte?",
          "a": "Sim. O ProFontFinder utiliza visão computacional e comparação vetorial diretamente no seu navegador, sem enviar imagens para servidores externos."
        },
        {
          "q": "Existe um identificador de fontes gratuito?",
          "a": "Sim, o ProFontFinder é 100% gratuito, sem limite de buscas ou planos pagos. Todas as correspondências são fontes livres sob a licença SIL OFL."
        },
        {
          "q": "Como encontrar a fonte correspondente com precisão?",
          "a": "Envie uma imagem nítida com bom contraste, confirme os caracteres identificados e avalie as opções recomendadas com nosso comparador interativo."
        },
        {
          "q": "Posso tirar uma foto de um texto e encontrar a fonte?",
          "a": "Sim! Fotografe placas, livros ou cartazes com boa iluminação e envie o arquivo diretamente."
        },
        {
          "q": "Onde encontrar fontes gratuitas para projetos?",
          "a": "O maior acervo de fontes web gratuitas para uso comercial é o Google Fonts (fonts.google.com). Conheça também nossa suíte de ferramentas."
        },
        {
          "q": "Como identificar uma fonte específica em um parágrafo?",
          "a": "Recorte uma palavra de 3 a 6 caracteres marcantes (como \"R\", \"g\", \"a\" ou \"e\") e envie esse recorte ao ProFontFinder."
        },
        {
          "q": "Como usar as fontes do Google Fonts no meu site?",
          "a": "Copie a linha @import fornecida ou a tag <link> e adicione ao seu CSS a regra: font-family: \"Inter\", sans-serif;."
        },
        {
          "q": "Como identificar fontes em um arquivo PDF?",
          "a": "Abra o PDF e acerte em Arquivo > Propriedades > Fontes. Se o texto estiver rasterizado em imagem, faça uma captura de tela e cole no ProFontFinder."
        },
        {
          "q": "É possível criar uma fonte usando inteligência artificial?",
          "a": "O ProFontFinder foca na identificação de fontes existentes; softwares gerativos como o Calligraphr ajudam a converter desenhos em arquivos de fontes."
        },
        {
          "q": "O identificador reconhece fontes cursivas e manuscritas?",
          "a": "Sim, o ProFontFinder identifica estilos manuscritos e caligráficos. Uma imagem nítida melhora o rastreamento das conexões entre letras."
        },
        {
          "q": "Quais estilos de fontes o ProFontFinder suporta?",
          "a": "Suporta todos os principais gêneros: Sans-Serif, Serif, Monoespaçada, Display e Cursivas em todo o acervo verificado do Google Fonts."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "LATÊNCIA OCR // <80MS",
      "engineReady": "Motor de correspondência óptica pronto",
      "signatures": "1.935 Assinaturas",
      "title": "Pronto para identificar uma fonte?",
      "desc": "Arraste qualquer imagem acima para isolar letras, calcular geometrias de contorno e obter fontes verificadas do Google Fonts.",
      "btnIdentify": "Identificar fonte agora",
      "btnTools": "Explorar ferramentas de fontes",
      "badgeInBrowser": "100% No navegador",
      "badgeZeroLatency": "Zero latência",
      "badgeTestedCss": "Códigos CSS testados"
    }
  },
  toolsOverview: {
    meta: {
      title: 'Ferramentas Tipográficas — Utilitários Gratuitos de Identificação',
      description: 'Utilitários especializados para encontrar alternativas comerciais gratuitas, extrair fontes de logos, combinar estilos e detectar fontes web.'
    },
    badge: 'SUÍTE DE FERRAMENTAS',
    title: 'Ferramentas tipográficas',
    subtitle: 'Utilitários feitos sob medida para tarefas específicas de tipografia. Gratuitos, ilimitados e executados com total privacidade no seu navegador.',
    tools: {
      commercialAlternative: {
        title: 'Encontrar alternativa gratuita para fonte paga',
        description: 'Envie uma imagem de fonte comercial e descubra a opção gratuita mais próxima para usar legalmente.'
      },
      urlFontFinder: {
                            title: 'Detectar fontes a partir do link de qualquer site',
        description: 'Digite qualquer URL para extrair as fontes em uso, regras @font-face e famílias tipográficas.'
      },
      logoFontFinder: {
        title: 'Identificar a fonte usada em um logotipo',
        description: 'Envie um logo para saber qual tipografia foi empregada e veja fontes gratuitas idênticas.'
      },
      screenshotFontFinder: {
        title: 'Descobrir a fonte em uma captura de tela',
        description: 'Capturas de tela são perfeitas: caracteres nítidos e retos garantem a melhor taxa de acerto.'
      },
      handwritingFontFinder: {
        title: 'Identificar fonte manuscrita ou cursiva',
        description: 'Fontes manuscritas são difíceis de classificar. Veja como obter uma resposta precisa.'
      },
      fontPairing: {
                                                    title: 'Encontrar uma boa combinação de fontes',
        description: 'Escolha uma fonte principal e descubra fontes secundárias que se harmonizam perfeitamente.'
      }
    },
    bottomBanner: {
      title: 'Procurando o scanner óptico completo?',
      desc: 'Solte qualquer captura de tela em nosso motor óptico para comparar letras com mais de 1.935 fontes do Google Fonts em poucos segundos.',
      button: 'Identificar Fonte Agora'
    }
  },
  commercialAlternative: {
    meta: {
      title: 'Alternativas Gratuitas a Fontes Comerciais — Comparador de Tipografias',
      description: 'Envie a imagem de uma fonte comercial para encontrar alternativas gratuitas verificadas do Google Fonts com código CSS pronto.'
    },
    breadcrumb: 'Alternativas a Fontes Comerciais',
    title: 'Encontrar alternativa gratuita para fonte paga',
    subtitle: 'Envie a imagem de uma fonte comercial e obtenha alternativas gratuitas do Google Fonts com CSS de produção.',
    dropzoneTitle: 'Solte a imagem de uma fonte comercial',
    dropzoneSubtitle: 'Envie uma amostra, recorte ou arte para encontrar opções equivalentes no Google Fonts',
    buttonText: 'Selecionar Imagem de Amostra'
  },
  logoFontFinder: {
    meta: {
      title: 'Identificar Fonte em Logo — Tipografia de Marcas e Opções Gratuitas',
      description: 'Envie o logo de qualquer marca para descobrir qual tipografia ele utiliza e achar fontes gratuitas no Google Fonts.'
    },
    breadcrumb: 'Identificador de Fonte em Logo',
    title: 'Identificar a fonte usada em um logotipo',
    subtitle: 'Envie a imagem de uma marca ou logotipo para descobrir sua fonte e obter alternativas gratuitas.',
    dropzoneTitle: 'Solte a imagem do logo ou marca aqui',
    dropzoneSubtitle: 'Compatível com logos em PNG, JPG e WebP com fundo transparente ou sólido',
    buttonText: 'Selecionar Arquivo do Logo'
  },
  screenshotFontFinder: {
    meta: {
      title: 'Identificar Fonte em Captura de Tela — Colagem Direta (⌘V) e OCR',
      description: 'Cole diretamente da área de transferência com ⌘V / Ctrl+V ou solte um print para descobrir a fonte em instantes.'
    },
    breadcrumb: 'Identificador em Captura de Tela',
    title: 'Descobrir a fonte em uma captura de tela',
    subtitle: 'Cole da área de transferência usando ⌘V ou Ctrl+V, ou envie um arquivo de print abaixo.',
    dropzoneTitle: 'Cole a captura (⌘V / Ctrl+V) ou solte o arquivo aqui',
    dropzoneSubtitle: 'Compatível com imagens PNG, JPG e WebP',
    buttonText: 'Selecionar Arquivo de Captura'
  },
  handwritingFontFinder: {
    meta: {
      title: 'Identificador de Fontes Manuscritas e Cursivas — Reconhecimento Óptico',
      description: 'Envie ou escaneie uma amostra de escrita à mão, assinatura ou caligrafia para identificar fontes similares no Google Fonts.'
    },
    breadcrumb: 'Reconhecimento de Manuscrito',
    title: 'Identificar fonte manuscrita ou cursiva',
    subtitle: 'Envie amostras de letra cursiva, assinaturas ou caligrafia para descobrir fontes compatíveis.',
    dropzoneTitle: 'Solte amostra de manuscrito, assinatura ou caligrafia',
    dropzoneSubtitle: 'Compatível com imagens PNG, JPG e WebP',
    buttonText: 'Selecionar Imagem Manuscrita'
  },
  urlFontFinder: {
    primaryBrand: "Marca principal",
    highLegibility: "Alta legibilidade",
    visualMatch: "Correspondência visual:",
    cssVariables: "Variáveis CSS",
    notice: "Aviso:",

    meta: {
      title: 'Identificador de Fonte por URL — Detecte Tipografias em Qualquer Site',
      description: 'Analise qualquer link para extrair instantaneamente fontes ativas, regras @font-face, links do Google Fonts e fontes equivalentes gratuitas.'
    },
    badge: 'EXTRATOR TIPOGRÁFICO WEB EM TEMPO REAL',
    title: 'Detectar fontes a partir do link de qualquer site',
    subtitle: 'Digite qualquer URL ativa para analisar fontes em uso, verificar regras @font-face, extrair famílias tipográficas e encontrar opções livres no Google Fonts.',
    inputPlaceholder: 'https://exemplo.com.br',
    analyzeButton: 'Inspecionar Tipografia',
    analyzingButton: 'Analisando tipografia...',
    presetsLabel: 'Ou experimente com um modelo pronto:',
    resultsTitle: 'Resultados da Inspeção Tipográfica',
    extractedHeading: 'Fontes Detectadas',
    freeTwinHeading: 'Fonte Equivalente no Google Fonts',
    inspectFont: 'Inspecionar Fonte',
    liveSpecimenTitle: 'Prévia em Tempo Real (Digite para testar):',
    sourcesTitle: 'Fontes e Folhas de Estilo Identificadas',
    cssTitle: 'Código CSS para Produção',
    copyCss: 'Copiar CSS',
    copied: 'Copiado',
    howItWorksTitle: 'Como Funciona a Identificação de Fontes por URL',
    howItWorksP1: 'Ao informar um endereço web, nossa ferramenta examina o documento HTML público para identificar folhas de estilo, servidores de fontes (Google Fonts, Adobe Typekit, Bunny Fonts) e estilos em linha.',
    howItWorksP2: 'Identificadas as tipografías principal e secundária, o sistema busca alternativas autênticas no Google Fonts e gera as regras CSS prontas para copiar.',
    faqTitle: 'Perguntas Frequentes',
    faq1: {
      q: 'A ferramenta detecta fontes em páginas protegidas por senha ou paywall?',
      a: 'O Localizador por URL analisa somente páginas públicas. Para páginas restritas, faça uma captura de tela e utilize nosso Identificador em Captura de Tela.'
    },
    faq2: {
      q: 'Qual o nível de precisão das sugestões do Google Fonts?',
      a: 'Nosso catálogo compara métricas estruturais (altura-x, formato das aberturas, espessura dos traços) com índices de semelhança geométrica superiores a 90%.'
    },
    faq3: {
      q: 'Algum dado fica salvo ao analisar um endereço?',
      a: 'Nenhum. Os links submetidos são tratados estritamente em memória volátil e nunca são registrados, salvos ou repassados.'
    }
  },
  fontPairing: {
    surpriseMe: "Surpreenda-me",
    invertRoles: "Inverter funções",
    bodySize: "Tamanho do corpo:",
    editable: "editável",
    zeroLayoutShift: "Zero mudança de layout",
    zeroLayoutShiftDesc: "Otimizado com font-display swap.",
    zeroLatency: "Zero latência",
    zeroLatencyDesc: "Processamento local via Web Worker.",
    openLicense: "Licença aberta",
    commercialFree: "Grátis para uso comercial",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: 'Ferramenta de Combinação de Fontes — Harmonias no Google Fonts',
      description: 'Explore 31 combinações de Google Fonts criadas por designers. Teste a harmonia de títulos e parágrafos ao vivo, ajuste tamanhos e copie regras CSS prontas.'
    },
    badge: 'DESIGN DE SISTEMAS TIPOGRÁFICOS',
    title: 'Encontrar uma boa combinação de fontes',
    subtitle: 'Explore 31 combinações de Google Fonts criadas por designers. Teste a harmonia de títulos e parágrafos ao vivo, ajuste tamanhos e copie regras CSS prontas.',
    filterAll: 'Todas as Combinações',
    filterSaas: 'SaaS e Tecnologia',
    filterEditorial: 'Editorial e Luxo',
    filterCreative: 'Agência Criativa',
    filterCorporate: 'Corporativo e Finanças',
    customPreviewPlaceholder: 'Digite um texto de teste para visualizar em todas as combinações...',
    sampleHeading: 'Sistemas de Design em Escala',
    sampleBody: 'Uma boa tipografia constrói uma hierarquia visual intuitiva, guiando o leitor pelo conteúdo de maneira natural e agradável.',
    copyRule: 'Copiar Regra',
    openSpecimen: 'Ver Fonte'
  },
  about: {
    meta: {
      title: 'Sobre Nós — ProFontFinder | Identificação Tipográfica Aberta e Transparente',
      description: 'Conheça a proposta do ProFontFinder: reconhecimento tipográfico veloz, seguro e 100% gratuito, baseado em Google Fonts de código aberto e engenharia web moderna.'
    },
    badge: 'TRANSPARÊNCIA TÉCNICA E TIPOGRAFIA LIVRE',
    title: 'Sobre o ProFontFinder',
    subtitle: 'Criando uma forma mais limpa, rápida e verdadeiramente aberta de encontrar, analisar e usar tipografia na web.',
    whyTitle: 'Por Que Criamos o ProFontFinder',
    whyP1: 'Por muito tempo, tentar descobrir o nome de uma fonte a partir de uma foto significava encarar aborrecimentos: cadastros obrigatórios, anúncios em vídeo intrusivos, cobranças e sugestões de fontes caras que custam centenas de dólares por estilo.',
    whyP2: 'Acreditamos que designers e desenvolvedores mereciam algo muito melhor: um comparador visual instantâneo que identifica tipos em milissegundos, encontra opções abertas autênticas e gera código CSS sem rastreamento ou exigência de cartão de crédito.',
    pillar1: {
      title: '100% Gratuito e Ilimitado',
      desc: 'Sem cotas diárias de uso, sem planos pagos, sem bloqueios por e-mail e sem taxas ocultas. Analise quantas imagens precisar.'
    },
    pillar2: {
      title: 'Sem Retenção de Imagens',
      desc: 'Seus arquivos são processados na memória local do navegador via HTML5 Canvas. Nós nunca enviamos, guardamos ou visualizamos suas imagens.'
    },
    pillar3: {
      title: 'Código Aberto Autêntico',
      desc: 'Todas as recomendações são validadas no acervo oficial do Google Fonts com licença SIL Open Font License para uso comercial livre.'
    },
    pillar4: {
      title: 'Velocidade no Dispositivo',
      desc: 'Eliminando viagens de ida e volta ao servidor para vetorizar imagens, o reconhecimento óptico ocorre em menos de 50 milissegundos no seu próprio aparelho.'
    },
    principlesTitle: 'Nossos Princípios de Engenharia',
    p1: {
      title: 'Privacidade Estrutural',
      desc: 'Não pedimos um voto de confiança: nós removemos da arquitetura a capacidade de armazenar imagens. Os pixels existem apenas na RAM do usuário.'
    },
    p2: {
      title: 'Sem Ruído, Sem Distrações',
      desc: 'Sem anúncios em tela cheia, sem botões de download falsos e sem exigência de compartilhamento em redes. A ferramenta carrega na hora e sai do seu caminho.'
    },
    p3: {
      title: 'Resultados Úteis para Programadores',
      desc: 'Saber o nome da fonte é só o começo. Nós entregamos links @import testados, eixos variáveis e declarações CSS prontas para seu código.'
    },
    ctaTitle: 'Tem dúvidas ou sugestões?',
    ctaDesc: 'Estamos constantemente aprimorando nosso pipeline de análise óptica e adoramos receber comentários da comunidade de desenvolvedores.',
    ctaButton: 'Falar com a Equipe'
  },
  howItWorks: {
    meta: {
      title: 'Como Funciona — Engenharia Tipográfica | ProFontFinder',
      description: 'Veja como funciona o ProFontFinder: vetorização em HTML5 Canvas no navegador, análise de contornos de glifos e pontuação geométrica no Google Fonts.'
    },
    badge: 'ESPECIFICAÇÃO DO PIPELINE TÉCNICO',
    title: 'Como Funciona o ProFontFinder',
    subtitle: 'Um panorama detalhado de nossos algoritmos de OCR, vetorização de bordas e cálculo de similaridade geométrica.',
    overviewTitle: 'Visão Geral da Arquitetura',
    overviewDesc: 'O ProFontFinder funciona em um modelo com zero uploads para servidor. Todas as etapas de decodificação de imagem, filtros de borda, separação de letras e comparação acontecem no próprio navegador via HTML5 Canvas e WebAssembly.',
    phase1: {
      title: 'Fase 1: Leitura e Normalização Local em Memória',
      desc: 'Ao soltar uma imagem ou captura de tela na tela:',
      items: [
        'A imagem é decodificada em um Canvas HTML5 fora da tela, na memória RAM do navegador.',
        'Nenhuma requisição de rede é enviada; nenhum dado de imagem sai do computador.',
        'O método adaptativo de Otsu isola os caracteres do fundo e de ruídos visuais.',
        'Contraste e resolução são equilibrados para padronizar a espessura dos traços.'
      ]
    },
    phase2: {
      title: 'Fase 2: Vetorização Óptica de Glifos',
      desc: 'Com a imagem binarizada pronta:',
      items: [
        'A rotulagem de componentes conectados demarca as caixas envolventes de cada caractere.',
        'Algoritmos de rastreamento traçam os vértices externos e os vazados internos das letras.',
        'Medições geométricas apuram a altura-x, altura das maiúsculas, ascendentes e descendentes.',
        'A inclinação das terminações e a abertura são classificadas em categorias serif, sans e display.'
      ]
    },
    phase3: {
      title: 'Fase 3: Comparação Geométrica com 1.935+ Fontes do Google Fonts',
      desc: 'As assinaturas vetoriais extraídas são comparadas com nosso catálogo pré-processado:',
      items: [
        'As características dos traços viram uma impressão digital normalizada e compacta.',
        'A métrica de distância euclidiana afere a proximidade com fontes verificadas do Google Fonts.',
        'Filtros por estilo (Sans, Serif, Mono, Display, Script) afunilam o espaço de busca.',
        'Índices de confiança (0-100%) refletem a exatidão geométrica e o alinhamento das formas.'
      ]
    },
    phase4: {
      title: 'Fase 4: Geração do Código CSS para Produção',
      desc: 'As melhores alternativas são transformadas em trechos de código prontos para copiar:',
      items: [
        'Tags oficiais @import e <link> apontando para o CDN do Google Fonts.',
        'Definições corretas de font-family em CSS com fontes de reserva seguras.',
        'Informação clara sobre pesos disponíveis e eixos variáveis.',
        'Atalhos diretos para as páginas oficiais no Google Fonts para conferência de termos.'
      ]
    },
    canvasTitle: 'Canvas em Memória no Lado do Cliente',
    canvasDesc: 'Com o uso do Canvas HTML5 e manipulação direta de pixels na memória, o ProFontFinder executa transformações de imagem pesadas sem depender de servidores remotos. Isso garante rapidez instantânea e total sigilo.',
    privacyTitle: 'Garantia de Armazenamento Zero',
    privacyDesc: 'Como nenhuma API externa recebe sua imagem, capturas confidenciais, marcas ainda não lançadas e rascunhos continuam totalmente seguros. Ao fechar a aba, toda a memória temporária é liberada de imediato.'
  },
  privacy: {
    meta: {
      title: 'Política de Privacidade — ProFontFinder | Coleta de Dados Zero',
      description: 'Leia a Política de Privacidade do ProFontFinder. Veja como nossa ferramenta tipográfica processa imagens localmente sem gravar nem repassar informações pessoais.'
    },
    badge: 'TRANSPARÊNCIA E PRIVACIDADE DE DADOS',
    title: 'Política de Privacidade',
    subtitle: 'O ProFontFinder foi desenvolvido desde o primeiro dia para respeitar seus dados. Todas as avaliações de fontes rodam localmente no seu navegador.',
    lastUpdated: 'Última atualização: Setembro de 2026',
    s1Title: '1. Política de Não Armazenamento de Imagens',
    s1P: 'O ProFontFinder NÃO realiza upload, não armazena, não transmite e não retém nenhuma imagem, captura de tela, logotipo ou arquivo visual enviado ao serviço. Todo o processamento, reconhecimento óptico, vetorização e comparação de fontes ocorre 100% no seu próprio dispositivo, usando a memória Canvas do HTML5.',
    s2Title: '2. Coleta de Informações Pessoais',
    s2P: 'Nós não exigimos conta de usuário, senhas, e-mail ou dados de cartão para uso do ProFontFinder. Você pode aproveitar todas as funcionalidades de identificação de forma inteiramente anônima.',
    s3Title: '3. Cookies e Armazenamento Local',
    s3P: 'O ProFontFinder não utiliza cookies de rastreamento, publicidade ou identificação cruzada. Usamos apenas o localStorage do navegador para gravar sua preferência visual (tema escuro ou claro) no seu próprio aparelho.',
    s4Title: '4. Links Externos e Redes CDN',
    s4P: 'Ao visualizar ou carregar fontes, seu navegador pode estabelecer conexão direta com a CDN do Google Fonts (fonts.googleapis.com e fonts.gstatic.com) para renderizar os textos de teste. Essas chamadas estão sujeitas à Política de Privacidade do Google.',
    s5Title: '5. Dúvidas sobre Privacidade',
    s5P: 'Caso tenha qualquer pergunta sobre esta Política de Privacidade ou sobre nossa engenharia sem retenção de dados, fale conosco pelo e-mail support@profontfinder.com.'
  },
  terms: {
    meta: {
      title: 'Termos de Serviço — ProFontFinder',
      description: 'Confira os Termos de Serviço do ProFontFinder. Ferramentas tipográficas gratuitas, abertas e processadas no navegador para designers e desenvolvedores.'
    },
    badge: 'DIRETRIZES LEGAIS E DE USO',
    title: 'Termos de Serviço',
    subtitle: 'Condições simples e diretas para o uso da plataforma ProFontFinder.',
    lastUpdated: 'Última atualização: Setembro de 2026',
    s1Title: '1. Aceitação dos Termos',
    s1P: 'Ao acessar ou utilizar o ProFontFinder (profontfinder.com), você concorda com estes Termos de Serviço. Caso discorde de qualquer condição aqui descrita, pedimos que interrompa o uso do serviço.',
    s2Title: '2. Uso Permitido',
    s2P: 'O ProFontFinder é disponibilizado gratuitamente para designers, programadores e entusiastas da tipografia. Você pode utilizar a plataforma em projetos pessoais, comerciais ou acadêmicos sem restrições.',
    s3Title: '3. Licenciamento de Fontes e Propriedade Intelectual',
    s3P: 'O ProFontFinder mapeia formatos de letras e sugere fontes livres do Google Fonts sob as licenças SIL Open Font License (OFL) ou Apache 2.0. Cabe ao usuário conferir a licença específica antes de publicar em ambiente comercial.',
    s4Title: '4. Isenção de Garantias',
    s4P: 'O ProFontFinder é fornecido "no estado em que se encontra" e "conforme disponível", sem garantias implícitas ou explícitas. Embora nosso sistema busque máxima precisão, não garantimos 100% de acerto em imagens de baixa qualidade.',
    s5Title: '5. Limitação de Responsabilidade',
    s5P: 'Em nenhuma hipótese o ProFontFinder ou seus idealizadores serão responsáveis por quaisquer danos indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso da plataforma.',
    s6Title: '6. Alterações no Serviço',
    s6P: 'Reservamo-nos o direito de ajustar ou descontinuar qualquer recurso do serviço a qualquer instante, sem necessidade de aviso prévio.'
  },
  contact: {
    meta: {
      title: 'Contato — Suporte e Dúvidas | ProFontFinder',
      description: 'Fale com a equipe de engenharia do ProFontFinder. Envie relatos de falhas, sugestões de fontes, ideias ou dúvidas em geral.'
    },
    badge: 'FALE CONOSCO',
    title: 'Contato e Suporte',
    subtitle: 'Tem dúvidas, sugestões ou encontrou algum problema? Fale com a equipe técnica do ProFontFinder.',
    form: {
      name: 'Seu Nome',
      email: 'Seu E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Obrigado! Sua mensagem foi enviada com sucesso. Nossa equipe responderá o mais breve possível.'
    },
    directEmail: {
      title: 'E-mail Direto para Suporte',
      desc: 'Para assuntos urgentes, parcerias técnicas ou questões de segurança, envie uma mensagem para support@profontfinder.com.'
    },
    responseTime: {
      title: 'Prazo de Resposta',
      desc: 'Geralmente respondemos a chamados em um prazo de 24 a 48 horas úteis.'
    },
    faqTitle: 'Dúvidas Comuns',
    faq1: {
      q: 'Posso sugerir a adição de uma nova fonte do Google Fonts?',
      a: 'Nossa base de dados sincroniza periodicamente com o índice oficial do Google Fonts. Fontes recém-adicionadas à plataforma são incorporadas na atualização seguinte.'
    },
    faq2: {
      q: 'Vocês disponibilizam uma API para identificação automatizada?',
      a: 'Estamos estudando uma API voltada para programadores interessados em integrar o reconhecimento de fontes em seus sistemas. Envie-nos uma mensagem contando seu caso de uso!'
    }
  },
  guides: {
    meta: {
      title: "Guias de Tipografia e Identificação de Fontes — Pro Font Finder",
      description: "Guias especializados, tutoriais práticos e melhores práticas para identificar fontes a partir de imagens, combinar fontes e encontrar alternativas comerciais gratuitas."
    },
    badge: "Guias e Tutoriais",
    title: "Domine a Identificação de Fontes e Tipografia",
    subtitle: "Tutoriais passo a passo, dicas práticas e fluxos de trabalho para designers, desenvolvedores e entusiastas de fontes.",
    allGuides: "Todos os Guias",
    readTimeSuffix: "de leitura",
    tryTool: "Experimentar Esta Ferramenta",
    items: [
      {
        id: "image-identification-guide",
        category: "Identificação de Fontes",
        tag: "Guia Essencial",
        title: "Como Identificar Qualquer Fonte com Precisão a partir de Imagem ou Captura",
        desc: "Aprenda técnicas de alta precisão para preparar imagens, recortar linhas de base de glifos e descobrir fontes desconhecidas em segundos.",
        readTime: "4 min",
        steps: [
          "Recorte rente aos caracteres nítidos e de alto contraste (como a, g, R, Q).",
          "Alinhe a linha de base horizontalmente para otimizar o reconhecimento óptico.",
          "Envie diretamente para o Pro Font Finder para análise vetorial instantânea."
        ],
        toolLink: "/",
        toolName: "Abrir Localizador por Imagem"
      },
      {
        id: "commercial-alternatives-guide",
        category: "Alternativas Comerciais",
        tag: "Economia de Custos",
        title: "Encontrar Fontes Google Gratuitas para Substituir Fontes Comerciais Caras",
        desc: "Guia prático para designers: troque Helvetica, Futura, Gotham, Proxima Nova e DIN por fontes de código aberto 100% gratuitas.",
        readTime: "5 min",
        steps: [
          "Identifique traços geométricos versus humanistas (altura de x, aberturas).",
          "Use nosso motor de alternativas para sincronizar espessura e proporções.",
          "Exporte código CSS @import pronto para produção sem custos de licença."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "Ver Alternativas Comerciais"
      },
      {
        id: "font-pairing-principles",
        category: "Combinação e Design",
        tag: "Boas Práticas",
        title: "As Regras de Ouro da Combinação Tipográfica: Contraste, Hierarquia e Harmonia",
        desc: "Nunca mais tenha dúvidas ao combinar fontes. Aprenda a harmonizar títulos marcantes com texto de parágrafo legível usando princípios comprovados.",
        readTime: "6 min",
        steps: [
          "Combine títulos com serifa e texto sem serifa (ou vice-versa) para um contraste nítido.",
          "Mantenha a harmonia de estilo e época (ex.: títulos modernos com fontes neutras).",
          "Teste combinações em tempo real no nosso Estúdio de Combinação de Fontes."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "Abrir Estúdio de Combinação"
      },
      {
        id: "inspect-web-fonts",
        category: "Técnico e Web",
        tag: "Fluxo Dev",
        title: "Como Extrair e Inspecionar Fontes de Qualquer Site Ativo",
        desc: "Descubra a tipografia de qualquer página web sem abrir o DevTools nem pesquisar em arquivos CSS minificados.",
        readTime: "3 min",
        steps: [
          "Copie a URL do site desejado.",
          "Cole no Localizador de Fontes por URL para extrair as famílias tipográficas.",
          "Visualize variáveis CSS computadas, fontes de fallback e links do Google Fonts."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "Testar Localizador por URL"
      },
      {
        id: "handwriting-identification",
        category: "Identificação de Fontes",
        tag: "Manuscrita & Caligrafia",
        title: "Como Associar Anotações Manuscritas a Fontes Cursivas Digitais",
        desc: "Técnicas para decifrar letras manuscritas e encontrar fontes Google Script editáveis com o mesmo charme autêntico.",
        readTime: "4 min",
        steps: [
          "Isole os caracteres cursivos conectados em raízes de letras identificáveis.",
          "Analise o ângulo de inclinação, proporções de laços e variação de pressão.",
          "Compare instantaneamente com fontes cursivas verificadas do Google Fonts."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "Localizar Fontes Manuscritas"
      },
      {
        id: "how-engine-works-guide",
        category: "Técnico e Web",
        tag: "Arquitetura",
        title: "Bastidores: Como o ProFontFinder Utiliza OCR no Navegador e Vetores Matemáticos",
        desc: "Entenda o processamento de imagens do lado do cliente: Web Workers, detecção de bordas, invariantes de forma e privacidade total sem servidor.",
        readTime: "5 min",
        steps: [
          "Todo o processamento é executado 100% na memória RAM do seu navegador.",
          "Nenhum upload para servidores, nenhum armazenamento e nenhum rastreamento.",
          "Comparação vetorial em menos de 100 ms contra centenas de fontes abertas."
        ],
        toolLink: "/how-it-works",
        toolName: "Ler Arquitetura Técnica"
      }
    ],
    faqTitle: "Perguntas Frequentes sobre Identificação de Fontes",
    faqs: [
      {
        q: "O ProFontFinder consegue identificar fontes em imagens borradas ou de baixa resolução?",
        a: "Sim! Nosso pipeline inclui normalização de contraste, binarização adaptativa e filtros morfológicos para realçar os contornos antes da comparação."
      },
      {
        q: "Todas as fontes alternativas recomendadas são gratuitas para uso comercial?",
        a: "Sim! Todas as fontes alternativas catalogadas no ProFontFinder possuem licenças de código aberto (SIL OFL ou Apache 2.0), sendo 100% gratuitas."
      },
      {
        q: "Minhas imagens enviadas ficam salvas nos servidores de vocês?",
        a: "Nunca. Toda a análise, OCR e comparação vetorial ocorrem localmente na memória do seu navegador. Jamais armazenamos suas fotos."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — Página Não Encontrada | ProFontFinder',
      description: 'A página que você procura não existe ou foi transferida para outro endereço.'
    },
    badge: 'ERRO 404',
    title: 'Página Não Encontrada',
    desc: 'A página que você procura não existe ou foi transferida para outro endereço.',
    backHome: 'Voltar ao Início',
    exploreTools: 'Explorar Ferramentas'
  }
};
