import type { TranslationSchema } from './en';

export const ko: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: '개발자를 위한 이미지 기반 폰트 식별 도구. 글자 형태의 기하학적 특징을 분석하고, 검증된 오픈소스 Google Fonts를 확인하며, 즉시 사용 가능한 프로덕션 CSS 코드를 복사하세요.',
    nav: {
      finder: '폰트 찾기',
      tools: '도구 모음',
      guides: "가이드",
      about: '소개',
      identifyFont: '폰트 식별하기',
      toggleTheme: '색상 테마 전환',
      skipToContent: '본문으로 이동',
      language: '언어'
    },
    footer: {
      mission: '개발자를 위한 이미지 기반 폰트 식별 도구. 글자 형태의 기하학적 특징을 분석하고, 검증된 오픈소스 Google Fonts를 확인하며, 즉시 사용 가능한 프로덕션 CSS 코드를 복사하세요.',
      zeroStorageBadge: '이미지 저장 제로 • 100% 브라우저 메모리 내 로컬 처리',
      productsTitle: '제품',
      tools: {
        imageFontFinder: '이미지 폰트 찾기',
        urlFontFinder: 'URL 폰트 찾기',
        logoFontFinder: '로고 폰트 식별기',
        screenshotFontFinder: '스크린샷 폰트 검색',
        fontPairing: '폰트 페어링 도구',
        handwritingMatcher: '손글씨 폰트 매칭',
        commercialAlternatives: '유료 폰트 무료 대체제'
      },
      companyTitle: '회사',
      aboutUs: '회사 소개',
      howItWorks: '작동 원리',
      guides: "가이드 및 튜토리얼",
      allFontTools: '모든 폰트 도구',
      contactSupport: '문의 및 지원',
      trustLegalTitle: '신뢰 및 약관',
      privacyPolicy: '개인정보 처리방침',
      termsOfService: '이용약관',
      googleFonts: 'Google Fonts',
      silLicense: 'SIL 오픈 폰트 라이선스',
      copyright: 'Pro Font Finder. 개발자와 디자이너를 위한 정밀 타이포그래피 분석 도구.',
      noCookies: '쿠키 수집 없음',
      noAccount: '회원가입 불필요',
      freeCommercial: '상업적 이용 무료'
    },
    buttons: {
      identifyNow: '지금 폰트 식별하기',
      exploreTools: '도구 둘러보기',
      backToHome: '홈으로 돌아가기',
      copyCss: 'CSS 복사',
      copied: '복사 완료'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / 텍스트 검증",
      "cropManually": "수동 자르기",
      "newImage": "새 이미지",
      "dragCursorInstruction": "이미지 위를 드래그하여 특정 텍스트 영역을 분리하세요:",
      "applyAndRedetect": "적용 및 재감지",
      "detectedTextLabel": "감지된 텍스트:",
      "verifyDetectedText": "감지된 텍스트 확인",
      "verifyInputPlaceholder": "텍스트 확인 또는 편집...",
      "inspectIndividualWords": "개별 단어 및 문자 검사",
      "wordSegmentsLabel": "단어 세그먼트 (특정 단어를 선택하려면 클릭):",
      "letterGlyphsLabel": "문자 글리프 (개별 문자 수정 또는 불필요한 기호 삭제):",
      "identifyFont": "폰트 식별",
      "identifyFontFor": "\"{word}\" 폰트 식별",
      "detectingText": "텍스트 및 문자 형태 감지 중...",
      "distinctFont": "개별 폰트",
      "comparingLetterShapes": "문자 형태 비교 중",
      "matchingFontsProgress": "브라우저 내 {count}개 폰트와 대조 중...",
      "stageA": "단계 A: 16×16 글리프 핑거프린트 매칭",
      "evaluatingContours": "{count}개 폰트의 외곽선 평가 중...",
      "stageB": "단계 B: 후보 랭킹 산출",
      "rankingMatches": "가장 유사한 Google Fonts 후보 순위 계산 중...",
      "previewTextHeading": "미리보기 텍스트.",
      "previewTextSubheading": "원하는 문구를 입력하여 각 일치 폰트에서 바로 확인하세요.",
      "editText": "↑ 텍스트 수정",
      "previewPlaceholder": "미리 볼 텍스트 입력...",
      "bestMatch": "최적의 일치",
      "match": "일치",
      "designedBy": "디자이너: {designer} • SIL Open Font License",
      "copyName": "폰트명 복사",
      "copied": "복사 완료!",
      "googleFonts": "Google Fonts",
      "scanAnother": "다른 이미지 스캔",
      "commercialAlternative": "상용 폰트 대체제:",
      "commercialAlternativeDesc": "{commercial}의 스타일과 일치합니다. 검증된 무료 Google Fonts 대안은 {family}입니다.",
      "compareWithImage": "원본 이미지와 비교",
      "comparePlaceholder": "비교할 텍스트 입력...",
      "yourImage": "업로드한 이미지",
      "matchedFont": "일치하는 폰트",
      "typographySpecimen": "타이포그래피 샘플",
      "closestMatchesHeading": "가장 가까운 GOOGLE FONTS 일치 항목",
      "livePreviewGoogleFonts": "Google Fonts 실시간 렌더링 미리보기",
      "closestRank": "위 근접",
      "freeOpenLicense": "무료 • 오픈 라이선스",
      "viewOnGoogleFonts": "Google Fonts에서 보기",
      "copyCss": "CSS 복사",
      "liveSpecimenTester": "02 / 실시간 폰트 테스터",
      "size": "크기:",
      "specimenDefaultText": "다람쥐 헌 쳇바퀴에 타고파",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / 프로덕션 CSS 코드",
      "copy": "복사",
      "openInGoogleFontsRepo": "Google Fonts 저장소에서 열기",
      "inspectSpecimenDetails": "폰트 세부 정보 보기 →",
      "closestAlternatives": "04 / 가장 가까운 검증된 대체 폰트",
      "viewSpecimen": "샘플 보기 →",
      "opticalMatch": "{confidence}% 광학적 일치",
      "errSelectWord": "식별할 단어를 선택해 주세요.",
      "errAtLeastOneLetter": "최소 한 글자 이상 입력되거나 감지되었는지 확인하세요.",
      "errInvalidFormat": "PNG, JPG 또는 WebP 형식의 이미지를 업로드해 주세요.",
      "errFileTooLarge": "파일 크기가 10MB 제한을 초과했습니다.",
      "errParseFailed": "이미지 처리에 실패했습니다."
  },

  home: {
    "meta": {
      "title": "Font Finder — 무료 이미지 폰트 찾기 및 식별 도구",
      "description": "Font Finder를 사용해 이미지와 스크린샷에서 모든 글꼴을 즉시 식별하세요. 글자 형태를 분석하여 검증된 100% 무료 Google Fonts 대안을 찾습니다."
    },
    "hero": {
      "headlinePrefix": "이미지 속 폰트 즉시 식별",
      "subtitle": "스크린샷을 드롭하여 글자 형태를 분리하고 윤곽선을 계산해 검증된 오픈소스 Google Fonts를 찾아보세요."
    },
    "dropzone": {
      "title": "이미지를 드롭하거나 스크린샷 붙여넣기 (⌘V)",
      "subtitle": "PNG, JPG, WebP 지원 • 브라우저 내 100% 비공개 감지",
      "buttonText": "이미지 파일 선택"
    },
    "pipeline": {
      "badge": "인식 아키텍처",
      "heading": "3단계 글꼴 인식 파이프라인",
      "subheading": "비트맵 픽셀에서 검증된 프로덕션 지원 오픈소스 CSS 타이포그래피까지.",
      "localInference": "< 150ms 로컬 추론",
      "zeroUploads": "서버 업로드 제로",
      "step1": {
        "phase": "단계 01 // 입력",
        "tag": "원시 데이터",
        "title": "업로드 또는 붙여넣기",
        "desc": "이미지를 드롭하거나 클립보드에서 즉시 붙여넣으세요:",
        "descSuffix": "직관적인 자르기 도구로 글리프 윤곽선을 격리합니다.",
        "crop": "자르기",
        "autoDetect": "자동 감지",
        "footerTraffic": "서버 트래픽 제로",
        "step": "3단계 중 1단계"
      },
      "step2": {
        "phase": "단계 02 // 뉴럴 스캔",
        "tag": "GPU 가속",
        "title": "광학 스캔",
        "desc": "서브픽셀 래스터라이저를 사용하여 메모리에서 로컬로 대비, 획 굵기, 16×16 글리프 지문을 추출합니다.",
        "matrix": "매트릭스: 16×16 비트맵",
        "apertures": "개구부: 기하학적 형태",
        "vectorNodes": "벡터 노드: 100% 일치",
        "footerClient": "100% 클라이언트 WebGL",
        "step": "3단계 중 2단계"
      },
      "step3": {
        "phase": "단계 03 // CSS 생성",
        "tag": "OFL 1.1 검증됨",
        "title": "코드 내보내기",
        "desc": "프로덕션에서 검증된 @import 및 font-family CSS 규칙으로 Google Fonts 대안을 가져옵니다.",
        "descSuffix": "",
        "readyToEmbed": "임베드 준비 완료",
        "footerOfl": "상업적 무료 OFL",
        "step": "3단계 중 3단계"
      }
    },
    "engineSpecs": {
      "badge": "엔진 사양",
      "title": "오픈소스 일치.",
      "titleAccent": "프로덕션 준비 완료.",
      "desc": "상업용 라이선스 부담을 줄이세요. Font Finder는 비트맵 글자 형태를 합법적으로 사용 가능한 무료 Google Fonts 대안에 매핑합니다.",
      "licensingModel": "라이선스 모델",
      "licensingValue": "100% 무료 SIL Open Font License",
      "processingArch": "처리 아키텍처",
      "processingValue": "100% 클라이언트 측 WebGL / Canvas",
      "cdnIntegration": "CDN 연동",
      "cdnValue": "Google Fonts 직접 임베드",
      "jsonOutput": "JSON 출력"
    },
    "guide": {
      "imageRecognition": {
        "badge": "이미지 인식",
        "title": "이미지에서 글꼴 찾기",
        "desc": "매력적인 서체를 발견해도 이미지에서 글꼴명을 알아내기는 쉽지 않습니다. 포스터, 잡지, 배너, 캡처 화면에서 \"이 글꼴이 뭐지?\"라는 궁금증은 디자인 작업에서 자주 마주치는 문제입니다.",
        "cardP1": "전용 이미지 폰트 식별 도구는 정적인 픽셀과 실제 서체를 연결해 줍니다. 수많은 카탈로그를 뒤지는 대신, 글리프 구조를 추출해 색인화된 라이브러리와 대조합니다.",
        "cardP2": "브랜드 서체 조사, 경쟁사 인터페이스 분석, 새로운 디자인 연구 등 다양한 작업에서 ProFontFinder가 정확한 결과를 즉시 찾아드립니다."
      },
      "opticalAnalysis": {
        "badge": "광학 분석",
        "title": "글꼴 식별은 어떻게 작동하나요?",
        "desc": "글꼴 식별은 컴퓨터 비전과 타이포그래피 글자 분석을 결합합니다. 일반 OCR이 단어만 읽어내는 것과 달리, 전문 식별 엔진은 곡률, 비율, 해부학적 글자 특성을 세밀하게 분석합니다."
      },
      "commercialFree": {
        "title": "구독료 없는 상업적 수준의 타이포그래피",
        "desc": "무료 Font Finder는 고가의 상업용 글꼴을 SIL Open Font License 기반의 정품 오픈소스 무료 폰트와 매칭하여 라이선스 비용 문제를 해결합니다:",
        "commOriginal": "상업용 원본 글꼴",
        "exploreLink": "상업용 대체 글꼴 도구에서 엄선된 50개 이상의 오픈소스 대안 폰트 탐색하기"
      },
      "digitalAssets": {
        "badge": "디지털 에셋 스캔",
        "title": "스크린샷과 로고에서 글꼴 식별하기",
        "desc": "타이포그래피 영감은 웹 서핑 중 캡처한 화면이나 브랜드 로고에서 자주 얻게 됩니다.",
        "card1Title": "웹 및 모바일 앱 스크린샷",
        "card1Desc": "화면을 캡처하여 Screenshot Font Finder에 드롭하면 유료 결제 없이 즉시 서체를 확인할 수 있습니다.",
        "card1Link": "스크린샷 스캐너 실행",
        "card2Title": "브랜드 로고 및 워드마크 인식",
        "card2Desc": "Logo Font Finder로 유명 브랜드 로고에 사용된 기본 서체를 찾아내고 유사한 오픈소스 글꼴을 매핑하세요.",
        "card2Link": "로고 글꼴 디렉터리 탐색"
      },
      "styleTaxonomy": {
        "badge": "서체 스타일 분류",
        "title": "다양한 서체 스타일 탐색",
        "desc": "서체 스타일을 이해하면 원하는 폰트를 훨씬 더 빠르고 정확하게 찾을 수 있습니다:",
        "serifTitle": "세리프(명조) 서체",
        "serifDesc": "획 끝의 장식 돌기가 우아함과 전통적인 품격을 표현합니다 (예: Playfair Display, Merriweather, EB Garamond).",
        "sansTitle": "산세리프(고딕) 서체",
        "sansDesc": "깔끔한 직선과 높은 화면 가독성을 자랑하며, 기하학적 Montserrat부터 중립적인 Inter, Roboto까지 다양합니다.",
        "displayTitle": "디스플레이 및 제목용 서체",
        "displayDesc": "강렬한 개성과 좁은 자폭으로 시선을 사로잡는 타이틀에 적합합니다 (예: Bebas Neue, Anton, Syne).",
        "cursiveTitle": "손글씨 및 필기체 서체",
        "cursiveDesc": "자연스러운 필치와 캘리그래피 감성을 선사합니다. Handwriting Font Finder에서 필기체 폰트를 찾아보세요."
      },
      "practicalUtility": {
        "badge": "실무적 유용성",
        "title": "디자이너와 개발자를 위한 Font Finder",
        "desc": "ProFontFinder는 디자인과 개발 전반의 워크플로를 크게 단축시킵니다:",
        "devTitle": "프론트엔드 개발자",
        "devDesc": "검증된 Google Fonts @import 코드와 Tailwind 클래스를 즉시 복사하세요. URL Font Finder로 라이브 사이트 서체도 분석할 수 있습니다.",
        "uiTitle": "UI/UX 디자이너",
        "uiDesc": "참고 이미지 속 폰트를 빠르게 파악하여 Figma 디자인의 일관성을 유지할 수 있습니다.",
        "creatorTitle": "크리에이터 및 디자인 애호가",
        "creatorDesc": "폰트 페어링 도구를 사용하여 제목과 본문에 어울리는 이상적인 서체 조합을 찾아보세요."
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "자주 묻는 질문",
      "items": [
        {
          "q": "What The Font Finder란 무엇이며 어떻게 작동하나요?",
          "a": "이미지나 스크린샷 속 텍스트를 분석하여 일치하는 글꼴 또는 가장 가까운 오픈소스 Google Fonts 무료 대안을 찾아주는 도구입니다."
        },
        {
          "q": "Google로 글꼴을 식별할 수 있나요?",
          "a": "Google Lens는 텍스트 추출에 능하지만 글꼴 두께나 CSS font-family 판별에는 특화되어 있지 않습니다. ProFontFinder는 이를 전문적으로 지원합니다."
        },
        {
          "q": "서체 유형을 어떻게 구분할 수 있나요?",
          "a": "세리프 돌기 유무, \"a\"나 \"g\"의 형태, 획 굵기 대비를 확인하고 ProFontFinder에 이미지를 올려 자동 분석해보세요."
        },
        {
          "q": "웹사이트에서 사용 중인 폰트를 확인하는 방법은?",
          "a": "텍스트를 우클릭하고 \"검사\"(F12)를 눌러 DevTools의 font-family 속성을 확인하세요. 이미지 속 글꼴이라면 캡처 후 ProFontFinder에 업로드하면 됩니다."
        },
        {
          "q": "AI를 사용해 폰트를 식별할 수 있나요?",
          "a": "네. ProFontFinder는 브라우저 내 컴퓨터 비전과 벡터 유사도 계산을 활용하여 서버 전송 없이 안전하게 글꼴을 식별합니다."
        },
        {
          "q": "완전 무료로 쓸 수 있는 폰트 찾기 도구가 있나요?",
          "a": "네, ProFontFinder는 검색 횟수 제한이나 결제 요구 없이 100% 무료이며, 매칭 결과는 상업적으로 사용 가능한 무료 Google Fonts입니다."
        },
        {
          "q": "글꼴 매칭 정확도를 높이려면 어떻게 해야 하나요?",
          "a": "대비가 선명한 고화질 이미지를 업로드하고 인식된 문자를 확인한 뒤, 비교 슬라이더를 통해 원본과 대조해보세요."
        },
        {
          "q": "사진을 찍어서 글꼴을 찾을 수 있나요?",
          "a": "네! 간판, 책 표지, 포스터 등을 정면에서 초점을 맞춰 촬영한 후 바로 업로드하면 됩니다."
        },
        {
          "q": "무료 폰트는 어디서 구할 수 있나요?",
          "a": "가장 대표적인 무료 상업용 웹 글꼴 저장소는 Google Fonts(fonts.google.com)입니다. 당사 도구에서도 다양한 추천을 제공합니다."
        },
        {
          "q": "특정 텍스트의 글꼴만 정확히 찾으려면?",
          "a": "특징이 뚜렷한 글자(R, g, a, e 등)가 포함된 3~6글자 정도의 단어만 깔끔하게 잘라내어 업로드하세요."
        },
        {
          "q": "Google Fonts는 어떻게 적용하나요?",
          "a": "제공되는 @import 링크나 HTML 코드를 웹사이트에 추가하고 CSS에 font-family: \"Inter\", sans-serif; 형태로 지정하면 됩니다."
        },
        {
          "q": "PDF 문서 내 폰트는 어떻게 찾나요?",
          "a": "PDF 프로그램의 파일 > 속성 > 글꼴에서 이름을 확인하세요. 이미지로 처리된 텍스트라면 캡처하여 ProFontFinder에 붙여넣으세요."
        },
        {
          "q": "AI로 나만의 글꼴을 만들 수도 있나요?",
          "a": "ProFontFinder는 기존 폰트 검색에 집중하며, Calligraphr 같은 생성형 AI 도구를 사용하면 손글씨로부터 글꼴 파일을 제작할 수 있습니다."
        },
        {
          "q": "필기체나 캘리그래피 폰트도 인식이 되나요?",
          "a": "네, 필기체와 스크립트 스타일도 지원합니다. 이어진 글자가 많으므로 해상도가 높은 이미지를 사용할수록 정확도가 높아집니다."
        },
        {
          "q": "어떤 글꼴 유형들이 지원되나요?",
          "a": "산세리프, 세리프, 고정폭(코딩용), 디스플레이(제목용), 필기체 등 Google Fonts에 등록된 모든 검증 서체를 지원합니다."
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "OCR 지연 시간 // <80MS",
      "engineReady": "광학 매칭 엔진 준비 완료",
      "signatures": "1,935개 시그니처",
      "title": "글꼴을 식별할 준비가 되셨나요?",
      "desc": "이미지를 위에 드롭하여 글자 형태를 분리하고 윤곽선을 계산해 검증된 무료 Google Fonts를 찾아보세요.",
      "btnIdentify": "지금 글꼴 찾기",
      "btnTools": "글꼴 도구 모음 보기",
      "badgeInBrowser": "100% 브라우저 내 처리",
      "badgeZeroLatency": "지연 시간 제로",
      "badgeTestedCss": "검증된 CSS 임베드"
    }
  },
  toolsOverview: {
    meta: {
      title: '폰트 도구 모음 — 무료 타이포그래피 식별 유틸리티',
      description: '유료 폰트 무료 대체제 검색, 로고 폰트 추출, 폰트 페어링, 웹 폰트 감지를 위한 전문 타이포그래피 도구 모음.'
    },
    badge: '도구 모음',
    title: '폰트 도구 모음',
    subtitle: '특정 목적에 맞게 정밀 조율된 타이포그래피 도구들입니다. 모두 무료이고 무제한이며, 브라우저에서 안전하게 작동합니다.',
    tools: {
      commercialAlternative: {
        title: '유료 폰트의 무료 대체 폰트 찾기',
        description: '상용 서체 이미지를 업로드하여 법적으로 안전하게 사용할 수 있는 가장 가까운 무료 폰트를 찾아보세요.'
      },
      urlFontFinder: {
                            title: '모든 웹사이트 링크에서 폰트 감지',
        description: 'URL을 입력하여 실제 적용된 웹 폰트, @font-face 선언 및 타이포그래피 스택을 추출합니다.'
      },
      logoFontFinder: {
        title: '로고 이미지에 쓰인 폰트 식별',
        description: '로고를 업로드하여 어떤 서체가 사용되었는지 확인하고, 동일한 느낌의 무료 폰트를 찾아보세요.'
      },
      screenshotFontFinder: {
        title: '스크린샷 속 폰트 찾기',
        description: '스크린샷은 가장 깔끔한 케이스입니다. 왜곡 없이 선명한 글자일수록 가장 높은 매칭 정확도를 보입니다.'
      },
      handwritingFontFinder: {
        title: '손글씨 및 필기체 폰트 찾기',
        description: '필기체 폰트는 식별하기 까다롭지만, 정밀 알고리즘으로 최적의 무료 서체를 추천해 드립니다.'
      },
      fontPairing: {
                                                    title: '어울리는 폰트 조합 찾기',
        description: '하나의 폰트를 선택하면 함께 어우러지는 조화로운 파트너 폰트를 추천합니다.'
      }
    },
    bottomBanner: {
      title: '풀기능 광학 스캐너를 찾고 계신가요?',
      desc: '스크린샷을 광학 엔진에 직접 끌어다 놓으면 몇 초 만에 글자를 분석하고 1,935개 이상의 Google Fonts와 대조합니다.',
      button: '지금 폰트 식별하기'
    }
  },
  commercialAlternative: {
    meta: {
      title: '유료 폰트 무료 대체제 검색 — 상용 폰트 매처',
      description: '상용 폰트 이미지를 업로드하여 프로덕션 CSS를 갖춘 검증된 무료 Google Fonts 대체 폰트를 찾아보세요.'
    },
    breadcrumb: '상용 폰트 무료 대체제',
    title: '유료 폰트의 무료 대체 폰트 찾기',
    subtitle: '상용 폰트 이미지를 업로드하여 프로덕션 CSS와 함께 검증된 무료 Google Fonts 대체 폰트를 확인하세요.',
    dropzoneTitle: '상용 폰트 이미지를 여기에 끌어다 놓으세요',
    dropzoneSubtitle: '샘플 이미지나 크롭 이미지를 업로드하여 어울리는 Google Fonts를 찾아보세요',
    buttonText: '샘플 이미지 선택'
  },
  logoFontFinder: {
    meta: {
      title: '로고 폰트 식별기 — 브랜드 서체 및 무료 대체 폰트 찾기',
      description: '로고 이미지를 업로드하여 서체를 알아내고 유사한 무료 Google Fonts를 확인하세요.'
    },
    breadcrumb: '로고 폰트 식별기',
    title: '로고 이미지에 쓰인 폰트 식별',
    subtitle: '브랜드 로고나 워드마크 이미지를 업로드하여 어떤 서체가 쓰였는지 알아보고 무료 대체 폰트를 찾으세요.',
    dropzoneTitle: '브랜드 로고 또는 워드마크 이미지를 놓으세요',
    dropzoneSubtitle: '투명 또는 단색 배경의 PNG, JPG, WebP 로고 이미지 지원',
    buttonText: '로고 파일 선택'
  },
  screenshotFontFinder: {
    meta: {
      title: '스크린샷 폰트 찾기 — 클립보드 붙여넣기(⌘V) 및 광학 매칭',
      description: '⌘V / Ctrl+V로 클립보드에서 바로 붙여넣거나 화면 캡처 이미지를 놓아 몇 초 만에 폰트를 식별하세요.'
    },
    breadcrumb: '스크린샷 폰트 검색',
    title: '스크린샷 속 폰트 찾기',
    subtitle: '⌘V 또는 Ctrl+V를 눌러 클립보드에서 바로 붙여넣거나 아래에 스크린샷 파일을 끌어다 놓으세요.',
    dropzoneTitle: '스크린샷 붙여넣기(⌘V / Ctrl+V) 또는 파일 끌어놓기',
    dropzoneSubtitle: 'PNG, JPG, WebP 이미지 지원',
    buttonText: '스크린샷 파일 선택'
  },
  handwritingFontFinder: {
    meta: {
      title: '손글씨 및 필기체 폰트 식별 — 광학 캘리그래피 매처',
      description: '손글씨 메모, 서명, 캘리그래피 이미지를 스캔하거나 업로드하여 일치하는 무료 Google Fonts를 찾으세요.'
    },
    breadcrumb: '손글씨 폰트 매칭',
    title: '손글씨 및 필기체 폰트 찾기',
    subtitle: '손글씨 샘플, 서명, 필기체 레터링 이미지를 업로드하여 어울리는 폰트를 찾아보세요.',
    dropzoneTitle: '손글씨 샘플, 서명 또는 캘리그래피 이미지 끌어놓기',
    dropzoneSubtitle: 'PNG, JPG, WebP 이미지 지원',
    buttonText: '손글씨 이미지 선택'
  },
  urlFontFinder: {
    primaryBrand: "주요 브랜드 폰트",
    highLegibility: "높은 가독성",
    visualMatch: "시각적 일치도:",
    cssVariables: "CSS 변수",
    notice: "알림:",

    meta: {
      title: 'URL 폰트 찾기 — 웹사이트 링크에서 웹폰트 자동 추출',
      description: '웹사이트 URL을 분석하여 현재 적용된 웹폰트, @font-face 규칙, Google Fonts 링크 및 무료 대체 서체를 즉시 추출하세요.'
    },
    badge: '실시간 웹 타이포그래피 추출기',
    title: '모든 웹사이트 링크에서 폰트 감지',
    subtitle: 'URL을 입력하면 실시간으로 활성 폰트를 분석하고, @font-face 규칙을 검사하며, 100% 무료 Google Fonts 대체제를 찾아드립니다.',
    inputPlaceholder: 'https://example.com',
    analyzeButton: '실시간 폰트 분석',
    analyzingButton: '타이포그래피 분석 중...',
    presetsLabel: '또는 샘플 사이트로 테스트해보세요:',
    resultsTitle: '타이포그래피 분석 결과',
    extractedHeading: '추출된 폰트',
    freeTwinHeading: '추천 Google Fonts 대체제',
    inspectFont: '폰트 상세 보기',
    liveSpecimenTitle: '실시간 미리보기 (텍스트를 직접 입력해보세요):',
    sourcesTitle: '폰트 소스 및 스타일시트',
    cssTitle: '프로덕션 CSS 코드',
    copyCss: 'CSS 복사',
    copied: '복사 완료',
    howItWorksTitle: 'URL 폰트 감지 원리',
    howItWorksP1: '웹 주소를 제출하면 추출 엔진이 공개 HTML 문서를 분석하여 스타일시트 링크, 폰트 공급자(Google Fonts, Adobe Typekit, Bunny Fonts) 및 인라인 스타일을 파악합니다.',
    howItWorksP2: '기본 및 보조 서체가 식별되면 기하학 분석 엔진이 정품 무료 Google Fonts와 매칭하여 바로 복사해 쓸 수 있는 CSS 코드를 생성합니다.',
    faqTitle: '자주 묻는 질문',
    faq1: {
      q: '로그인이 필요한 페이지나 유료 기사의 폰트도 감지할 수 있나요?',
      a: 'URL 폰트 찾기는 로그인 없이 접근 가능한 공개 웹페이지만 분석할 수 있습니다. 비공개 화면은 스크린샷을 찍어 스크린샷 폰트 검색을 이용해주세요.'
    },
    faq2: {
      q: 'Google Fonts 추천의 정확도는 어느 정도인가요?',
      a: 'x-높이, 개구부 형태, 획 대비 등 세밀한 시각적 지표를 비교하여 90% 이상의 기하학적 유사도를 보이는 검증된 오픈소스 폰트를 제안합니다.'
    },
    faq3: {
      q: 'URL을 분석할 때 기록이나 데이터가 저장되나요?',
      a: '전혀 저장되지 않습니다. 제출된 URL은 일시적으로 메모리에서만 처리되며 어디에도 기록되거나 공유되지 않습니다.'
    }
  },
  fontPairing: {
    surpriseMe: "랜덤 조합",
    invertRoles: "역할 바꾸기",
    bodySize: "본문 크기:",
    editable: "편집 가능",
    zeroLayoutShift: "레이아웃 이동 없음",
    zeroLayoutShiftDesc: "font-display swap 최적화.",
    zeroLatency: "지연 시간 제로",
    zeroLatencyDesc: "로컬 Web Worker 실시간 처리.",
    openLicense: "오픈 라이선스",
    commercialFree: "상업적 무료 이용",
    silOpenFontLicense: "SIL Open Font License.",

    meta: {
      title: '폰트 페어링 도구 — 조화로운 무료 Google Fonts 조합 추천',
      description: '디자이너가 엄선한 31가지 Google Fonts 조합을 살펴보세요. 제목과 본문의 조화를 실시간으로 테스트하고, 크기를 조정하며, 완성된 CSS를 복사하세요.'
    },
    badge: '타이포그래피 시스템 디자인',
    title: '어울리는 폰트 조합 찾기',
    subtitle: '디자이너가 엄선한 31가지 Google Fonts 조합을 살펴보세요. 제목과 본문의 조화를 실시간으로 테스트하고, 크기를 조정하며, 완성된 CSS를 복사하세요.',
    filterAll: '전체 조합',
    filterSaas: 'SaaS 및 테크',
    filterEditorial: '에디토리얼 및 럭셔리',
    filterCreative: '크리에이티브 에이전시',
    filterCorporate: '기업 및 금융',
    customPreviewPlaceholder: '모든 폰트 조합에 적용할 샘플 문구를 입력해보세요...',
    sampleHeading: '확장 가능한 디자인 시스템',
    sampleBody: '좋은 타이포그래피는 독자가 콘텐츠를 자연스럽고 편안하게 읽을 수 있도록 명확한 시각적 위계를 형성합니다.',
    copyRule: '규칙 복사',
    openSpecimen: '상세 정보'
  },
  about: {
    meta: {
      title: '소개 — ProFontFinder | 투명한 타이포그래피 탐색 도구',
      description: 'ProFontFinder의 비전: 오픈소스 Google Fonts와 현대적인 웹 엔지니어링을 바탕으로 빠르고 안전하며 100% 무료인 폰트 식별 경험을 제공합니다.'
    },
    badge: '엔지니어링 투명성과 오픈 타이포그래피',
    title: 'ProFontFinder 소개',
    subtitle: '웹에서 타이포그래피를 발견하고 분석하며 적용하는 더 깔끔하고 빠르며 진정으로 열린 방식을 만들어갑니다.',
    whyTitle: 'ProFontFinder를 만든 이유',
    whyP1: '오랫동안 이미지 속 폰트를 찾으려면 강제 회원가입, 화면을 가리는 동영상 광고, 유료 구독 결제 유도, 패밀리당 수백 달러에 달하는 값비싼 상용 폰트 추천 등 답답한 장벽을 마주해야 했습니다.',
    whyP2: '디자이너와 개발자에게는 더 나은 도구가 필요하다고 믿었습니다. 수 밀리초 만에 폰트를 식별하고, 믿을 수 있는 오픈소스 대안을 제시하며, 개인정보 추적이나 카드 번호 요구 없이 깔끔한 CSS를 제공하는 브라우저 완결형 도구입니다.',
    pillar1: {
      title: '100% 완전 무료 및 무제한',
      desc: '일일 스캔 횟수 제한도, 유료 멤버십도, 이메일 수집도, 숨겨진 비용도 없습니다. 필요한 만큼 마음껏 이미지를 분석하세요.'
    },
    pillar2: {
      title: '이미지 저장 없는 완벽한 보안',
      desc: '이미지는 HTML5 Canvas를 이용해 사용자 브라우저 메모리 안에서만 로컬 처리됩니다. 사용자의 이미지를 서버로 전송하거나 저장하지 않습니다.'
    },
    pillar3: {
      title: '신뢰할 수 있는 오픈소스',
      desc: '모든 추천 서체는 Google Fonts 공식 디렉토리와 SIL 오픈 폰트 라이선스 규정을 준수하여 상업적 프로젝트에서도 자유롭게 활용할 수 있습니다.'
    },
    pillar4: {
      title: '클라이언트 측의 신속한 처리',
      desc: '이미지 분석을 위한 서버 통신 과정을 없앰으로써, 사용자 기기에서 50밀리초 이내에 광학 식별 작업이 완료됩니다.'
    },
    principlesTitle: '우리의 엔지니어링 철학',
    p1: {
      title: '아키텍처 단계의 프라이버시',
      desc: '막연한 신뢰를 구하지 않습니다. 이미지 저장 기능 자체를 원천적으로 배제하도록 시스템을 설계했습니다. 픽셀 데이터는 사용자의 램(RAM)에만 머뭅니다.'
    },
    p2: {
      title: '군더더기 없는 쾌적함',
      desc: '전체 화면 광고, 낚시성 다운로드 버튼, 소셜 공유 강요가 없습니다. 도구는 즉시 로딩되어 본래의 작업에만 집중할 수 있게 합니다.'
    },
    p3: {
      title: '개발자 친화적인 실용적 결과물',
      desc: '폰트 이름을 아는 것은 절반에 불과합니다. 검증된 @import 링크, 가변 폰트 축, CSS font-family 선언을 코드에 바로 쓸 수 있게 제공합니다.'
    },
    ctaTitle: '궁금한 점이나 제안이 있으신가요?',
    ctaDesc: '광학 문자 분석 파이프라인을 지속적으로 개선하고 있으며, 개발자 여러분의 피드백을 언제나 환영합니다.',
    ctaButton: '팀에 문의하기'
  },
  howItWorks: {
    meta: {
      title: '작동 원리 — 기술 아키텍처 상세 안내 | ProFontFinder',
      description: 'ProFontFinder의 기술 아키텍처: 클라이언트 측 HTML5 Canvas 벡터화, 글자 윤곽선 광학 분석, Google Fonts 기하학적 매칭 알고리즘.'
    },
    badge: '기술 파이프라인 사양',
    title: 'ProFontFinder 작동 원리',
    subtitle: '클라이언트 측 광학 문자 인식, 윤곽선 벡터화, 기하학적 거리 측정 알고리즘의 세부 작동 구조를 소개합니다.',
    overviewTitle: '아키텍처 개요',
    overviewDesc: 'ProFontFinder는 서버 업로드 없는 아키텍처를 기반으로 합니다. 이미지 디코딩, 에지 필터링, 글자 추출, 특징 비교 등 모든 과정이 HTML5 Canvas와 WebAssembly를 통해 사용자의 브라우저 내에서 직접 수행됩니다.',
    phase1: {
      title: '1단계: 로컬 인메모리 수집 및 정규화',
      desc: '이미지나 캡처 화면을 화면에 끌어다 놓으면:',
      items: [
        '브라우저 RAM 내 오프스크린 HTML5 Canvas 컨텍스트로 이미지가 디코딩됩니다.',
        '네트워크 요청이 발생하지 않으며, 어떠한 이미지 데이터도 기기 외부로 나가지 않습니다.',
        '적응형 오츠(Otsu) 이진화 알고리즘이 배경 및 노이즈로부터 글자 형태를 분리합니다.',
        '명암비와 해상도를 정규화하여 글자 획의 두께를 표준화합니다.'
      ]
    },
    phase2: {
      title: '2단계: 글자 윤곽의 광학 벡터화',
      desc: '이진화 마스크가 완성되면:',
      items: [
        '연결 요소 라벨링 기법을 통해 개별 글자의 경계 상자(Bounding Box)를 추출합니다.',
        '윤곽선 추적 알고리즘이 바깥쪽 외곽선과 글자 내부의 빈 공간(Counter)을 계산합니다.',
        '기하학적 비율 측정을 통해 x-높이, 대문자 높이, 어센더, 디센더 수치를 추출합니다.',
        '말단 각도와 개구부의 열린 정도를 측정하여 세리프, 산세리프, 디스플레이 서체군으로 분류합니다.'
      ]
    },
    phase3: {
      title: '3단계: 1,935개 이상의 Google Fonts와 기하학적 유사도 비교',
      desc: '추출된 벡터 시그니처를 사전에 컴파일된 서체 카탈로그와 대조합니다:',
      items: [
        '벡터 특징들을 정규화된 경량 디지털 지문 데이터로 변환합니다.',
        '유클리드 거리 척도를 이용해 검증된 Google Fonts와 광학 윤곽선을 비교합니다.',
        '서체 카테고리 필터(Sans, Serif, Mono, Display, Script)로 탐색 범위를 좁힙니다.',
        '기하학적 유사도와 구조적 일치성을 반영하여 신뢰도 점수(0~100%)를 산출합니다.'
      ]
    },
    phase4: {
      title: '4단계: 프로덕션 CSS 코드 자동 생성',
      desc: '가장 일치하는 폰트 결과를 즉시 복사 가능한 코드로 정리합니다:',
      items: [
        '공식 Google Fonts CDN @import 규칙 및 <link> 스타일시트 태그 생성.',
        '안전한 시스템 폰트가 폴백으로 포함된 정확한 CSS font-family 선언.',
        '지원되는 굵기(Weight) 목록 및 가변 폰트 축 상세 정보 제공.',
        '라이선스를 직접 검토할 수 있는 Google Fonts 공식 상세 페이지 링크 제공.'
      ]
    },
    canvasTitle: '클라이언트 측 인메모리 Canvas',
    canvasDesc: 'HTML5 Canvas와 인메모리 픽셀 연산을 활용하여 고가의 서버 백엔드 없이도 고난도 이미지 변환을 수행합니다. 덕분에 대기 시간이 전혀 없고 완벽한 데이터 보안이 보장됩니다.',
    privacyTitle: '저장 없는 안전 보장',
    privacyDesc: '서버 API로 이미지가 전송되지 않으므로 미공개 로고나 비공개 작업물 스크린샷도 안심하고 분석할 수 있습니다. 탭을 닫으면 사용된 모든 메모리가 즉시 정리됩니다.'
  },
  privacy: {
    meta: {
      title: '개인정보 처리방침 — ProFontFinder | 데이터 수집 제로',
      description: 'ProFontFinder의 개인정보 처리방침입니다. 개인 데이터를 저장하거나 외부로 전송하지 않고 브라우저에서 안전하게 이미지를 처리하는 원리를 안내합니다.'
    },
    badge: '투명성과 개인정보 보호',
    title: '개인정보 처리방침',
    subtitle: 'ProFontFinder는 기획 단계부터 사용자의 프라이버시를 철저히 지키도록 설계되었습니다. 모든 폰트 분석은 브라우저에서 로컬로 실행됩니다.',
    lastUpdated: '최종 업데이트: 2026년 9월',
    s1Title: '1. 이미지 저장 제로 원칙',
    s1P: 'ProFontFinder는 사용자가 제공한 어떠한 이미지, 스크린샷, 로고, 그래픽 파일도 업로드, 저장, 전송 또는 보관하지 않습니다. 모든 이미지 처리, 문자 인식, 벡터화, 폰트 매칭 알고리즘은 HTML5 Canvas 메모리를 사용하여 사용자의 기기 내부에서 100% 로컬로 실행됩니다.',
    s2Title: '2. 개인정보 수집 안내',
    s2P: 'ProFontFinder의 모든 기능은 사용자 계정 생성, 비밀번호, 이메일 주소, 결제 정보 입력 없이 이용하실 수 있습니다. 모든 도구를 완벽한 익명 상태로 자유롭게 사용하실 수 있습니다.',
    s3Title: '3. 쿠키 및 로컬 저장소',
    s3P: 'ProFontFinder는 사용자 추적 쿠키, 광고성 쿠키, 크로스사이트 식별 기술을 사용하지 않습니다. 오직 사용자의 화면 테마 설정(다크 모드 또는 라이트 모드)을 브라우저 로컬 저장소(localStorage)에 기억하는 용도로만 사용합니다.',
    s4Title: '4. 타사 링크 및 CDN 안내',
    s4P: '폰트 미리보기를 위해 브라우저가 Google Fonts CDN(fonts.googleapis.com 및 fonts.gstatic.com)에 직접 접속하여 폰트 리소스를 불러올 수 있습니다. 이 과정에는 Google의 개인정보 처리방침이 적용됩니다.',
    s5Title: '5. 개인정보 관련 문의',
    s5P: '본 개인정보 처리방침이나 데이터 미저장 아키텍처에 대해 궁금한 점이 있으시다면 언제든 support@profontfinder.com으로 문의해 주세요.'
  },
  terms: {
    meta: {
      title: '이용약관 — ProFontFinder',
      description: 'ProFontFinder 이용약관 안내. 디자이너와 개발자를 위한 무료, 오픈, 브라우저 기반 타이포그래피 도구의 이용 조건입니다.'
    },
    badge: '법적 고지 및 이용 안내',
    title: '이용약관',
    subtitle: 'ProFontFinder 서비스 이용을 위한 간결하고 투명한 약관입니다.',
    lastUpdated: '최종 업데이트: 2026년 9월',
    s1Title: '1. 약관의 동의',
    s1P: 'ProFontFinder(profontfinder.com)에 접속하거나 서비스를 이용함으로써 본 이용약관에 동의하는 것으로 간주됩니다. 약관 내용에 동의하지 않으시는 경우 서비스 이용을 중단해 주시기 바랍니다.',
    s2Title: '2. 허용된 이용 범위',
    s2P: 'ProFontFinder는 디자이너, 개발자, 폰트에 관심 있는 모든 분들을 위한 무료 도구로 제공됩니다. 개인 프로젝트, 상업적 프로젝트, 교육적 목적에 제한 없이 자유롭게 활용하실 수 있습니다.',
    s3Title: '3. 폰트 라이선스 및 지식재산권',
    s3P: 'ProFontFinder는 글자 형태를 감지하여 SIL 오픈 폰트 라이선스(OFL) 또는 Apache 2.0 라이선스 기반의 오픈소스 Google Fonts를 추천합니다. 상용 프로젝트에 최종 배포하기 전 라이선스 조건을 확인하는 책임은 사용자에게 있습니다.',
    s4Title: '4. 보증의 한계',
    s4P: 'ProFontFinder는 "있는 그대로" 제공됩니다. 고도의 정밀 알고리즘으로 분석하지만, 이미지 해상도나 품질에 따라 100%의 정확도를 보장하지는 않습니다.',
    s5Title: '5. 책임의 제한',
    s5P: 'ProFontFinder 및 운영진은 본 서비스의 이용 또는 이용 불가로 인해 발생하는 간접적, 부수적, 결과적 손해에 대해 법적 책임을 지지 않습니다.',
    s6Title: '6. 서비스 내용 변경',
    s6P: '당사는 사전 고지 없이 언제든지 서비스의 일부 또는 전체를 수정하거나 중단할 권리를 보유합니다.'
  },
  contact: {
    meta: {
      title: '문의하기 — ProFontFinder 지원 및 피드백',
      description: 'ProFontFinder 엔지니어링 팀에 연락하세요. 버그 제보, 서체 추가 제안, 의견이나 일반 문의를 남겨주세요.'
    },
    badge: '문의하기',
    title: '문의 및 지원',
    subtitle: '질문이나 개선 제안, 버그 제보가 있으신가요? ProFontFinder 엔지니어링 팀에 편하게 메시지를 보내주세요.',
    form: {
      name: '이름',
      email: '이메일 주소',
      subject: '제목',
      message: '메시지 내용',
      send: '메시지 전송',
      success: '감사합니다! 메시지가 성공적으로 접수되었습니다. 확인 후 신속하게 답변해 드리겠습니다.'
    },
    directEmail: {
      title: '이메일 직접 문의',
      desc: '긴급 문의, 기술 제휴, 보안 관련 사항은 support@profontfinder.com으로 직접 메일을 보내주시기 바랍니다.'
    },
    responseTime: {
      title: '답변 소요 시간',
      desc: '영업일 기준 일반적으로 24~48시간 이내에 답변을 드립니다.'
    },
    faqTitle: '자주 묻는 문의',
    faq1: {
      q: '새로운 Google Fonts 폰트 추가를 요청할 수 있나요?',
      a: '저희 데이터베이스는 Google Fonts 공식 카탈로그와 정기적으로 동기화됩니다. 새로 공개된 폰트는 다음 정기 업데이트 때 자동으로 반영됩니다.'
    },
    faq2: {
      q: '자동화 폰트 식별을 위한 API를 제공하나요?',
      a: '현재 개발자를 위한 폰트 식별 API 도입을 긍정적으로 검토 중입니다. 필요하신 활용 방안이 있으시다면 언제든 문의해 주세요!'
    }
  },
  guides: {
    meta: {
      title: "폰트 식별 및 타이포그래피 가이드 — Pro Font Finder",
      description: "이미지에서 폰트 찾기, 폰트 페어링, 상용 폰트 무료 대체제 찾기, 웹 타이포그래피를 위한 실전 가이드와 튜토리얼."
    },
    badge: "가이드 & 튜토리얼",
    title: "폰트 식별과 타이포그래피 마스터하기",
    subtitle: "디자이너, 개발자, 크리에이터를 위한 완벽한 실무 팁과 워크플로우.",
    allGuides: "모든 가이드",
    readTimeSuffix: "읽기",
    tryTool: "이 도구 사용해보기",
    items: [
      {
        id: "image-identification-guide",
        category: "폰트 식별",
        tag: "필수 가이드",
        title: "이미지나 캡처 화면에서 어떤 폰트든 정확하게 찾아내는 방법",
        desc: "이미지 전처리, 글자 기준선 자르기, 대비 조절을 통해 잘 알려지지 않은 폰트도 몇 초 만에 찾아내는 고정밀 기법.",
        readTime: "4분",
        steps: [
          "선명하고 대비가 뚜렷한 글자(예: a, g, R, Q) 주변을 여백 없이 타이트하게 크롭합니다.",
          "OCR 인식률을 극대화하기 위해 글자 기준선이 수평이 되도록 정렬합니다.",
          "Pro Font Finder에 업로드하여 즉각적인 형상 벡터 분석을 실행합니다."
        ],
        toolLink: "/",
        toolName: "이미지 폰트 찾기 열기"
      },
      {
        id: "commercial-alternatives-guide",
        category: "상용 폰트 대체제",
        tag: "비용 절감",
        title: "비싼 유료 상용 폰트를 완벽한 무료 Google 폰트로 대체하는 방법",
        desc: "Helvetica, Futura, Gotham, Proxima Nova, DIN을 100% 상업적 이용 가능한 오픈소스 Google 폰트로 교체하는 디자이너 치트시트.",
        readTime: "5분",
        steps: [
          "기하학적(Geometric) 및 인문주의적(Humanist) 특징(x-height, 열림 정도)을 파악합니다.",
          "전용 대체 폰트 엔진으로 굵기와 비율이 가장 흡사한 폰트를 매칭합니다.",
          "라이선스 비용 없이 즉시 배포할 수 있는 CSS @import 코드를 복사합니다."
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "상용 폰트 대체제 탐색"
      },
      {
        id: "font-pairing-principles",
        category: "페어링 및 디자인",
        tag: "디자인 모범 사례",
        title: "타이포그래피 폰트 조합의 황금률: 대비, 계층 구조, 조화",
        desc: "더 이상 폰트 조합으로 고민하지 마세요. 검증된 디자인 원리를 바탕으로 제목 폰트와 본문 폰트를 이상적으로 매치하는 방법.",
        readTime: "6분",
        steps: [
          "명확한 시각적 구분을 위해 세리프 제목과 산세리프 본문(또는 그 반대)을 조합합니다.",
          "무드와 서체 출시 시대를 일관되게 맞춥니다.",
          "실시간 폰트 페어링 스튜디오에서 바로 결과를 확인합니다."
        ],
        toolLink: "/tools/font-pairing",
        toolName: "폰트 페어링 스튜디오 열기"
      },
      {
        id: "inspect-web-fonts",
        category: "기술 및 웹",
        tag: "개발자 워크플로우",
        title: "실제 운영 중인 웹사이트에서 폰트를 추출하고 분석하는 방법",
        desc: "브라우저 개발자 도구를 열거나 압축된 CSS를 뒤지지 않고도 모든 웹사이트의 서체를 즉시 파악하는 방법.",
        readTime: "3분",
        steps: [
          "분석하려는 웹사이트 URL을 복사합니다.",
          "URL 폰트 찾기에 붙여넣어 메인 및 본문 폰트 패밀리를 추출합니다.",
          "계산된 CSS 변수, 폴백 폰트 체인, Google Fonts 링크를 확인합니다."
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "URL 폰트 찾기 사용"
      },
      {
        id: "handwriting-identification",
        category: "폰트 식별",
        tag: "손글씨 & 캘리그래피",
        title: "손글씨 메모와 서명을 감성적인 디지털 필기체 폰트로 매칭하기",
        desc: "자연스러운 손글씨의 획과 연결 부위를 분석하여 동일한 감성을 지닌 편집 가능한 Google 필기체 폰트를 찾아냅니다.",
        readTime: "4분",
        steps: [
          "이어지는 필기체 글자를 식별 가능한 글자 단위로 분리합니다.",
          "기울기 각도, 루프 비율, 획의 굵기 변화를 분석합니다.",
          "검증된 Google 필기체 서체 카탈로그에서 최적의 후보를 검색합니다."
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "손글씨 폰트 매칭하기"
      },
      {
        id: "how-engine-works-guide",
        category: "기술 및 웹",
        tag: "아키텍처",
        title: "엔진 작동 원리: 브라우저 내부 OCR과 형상 벡터 수학의 조화",
        desc: "클라이언트 측 이미지 처리 심층 분석: Web Worker, 윤곽선 감지, 가로세로 비율 불변성, 서버가 전혀 필요 없는 프라이버시 설계.",
        readTime: "5분",
        steps: [
          "모든 이미지 처리는 기기의 브라우저 RAM 내에서 100% 처리됩니다.",
          "서버 이미지 업로드, 저장, 원격 전송이 전혀 발생하지 않습니다.",
          "수백 개의 오픈소스 서체와 100ms 미만으로 초고속 벡터 매칭이 이루어집니다."
        ],
        toolLink: "/how-it-works",
        toolName: "기술 아키텍처 보기"
      }
    ],
    faqTitle: "폰트 식별 자주 묻는 질문",
    faqs: [
      {
        q: "흐릿하거나 저해상도 이미지에서도 폰트를 찾을 수 있나요?",
        a: "네! 대비 정규화, 적응형 임계값 처리 및 형태학적 필터링을 통해 글자 윤곽선을 뚜렷하게 보정한 후 매칭합니다."
      },
      {
        q: "추천된 대체 폰트는 모두 상업적으로 무료인가요?",
        a: "ProFontFinder에 등록된 모든 대체 폰트는 SIL OFL 또는 Apache 2.0 오픈소스 라이선스로 검증되어 상업적 프로젝트에서도 완전 무료입니다."
      },
      {
        q: "업로드한 이미지가 서버에 저장되나요?",
        a: "절대 저장되지 않습니다. 모든 이미지 분석, OCR 처리, 벡터 매칭은 사용자의 브라우저 메모리 내에서만 로컬로 실행됩니다."
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — 페이지를 찾을 수 없습니다 | ProFontFinder',
      description: '요청하신 페이지가 존재하지 않거나 다른 주소로 이동되었습니다.'
    },
    badge: '404 오류',
    title: '페이지를 찾을 수 없습니다',
    desc: '요청하신 페이지가 존재하지 않거나 다른 주소로 이동되었습니다.',
    backHome: '홈으로 돌아가기',
    exploreTools: '도구 둘러보기'
  }
};
