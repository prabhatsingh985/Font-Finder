import type { BlogArticle } from './types';

export const ARTICLES_KO: BlogArticle[] = [
  {
    slug: 'free-alternatives-to-helvetica',
    title: '실전에서 바로 쓰는 Helvetica 무료 대체 Google Fonts 엄선',
    metaTitle: 'Helvetica(헬베티카) 무료 대체 Google Fonts 가이드 | ProFontFinder',
    description: '디자인의 표준이지만 고가인 Helvetica Neue. 동일한 네오 그로테스크 골격과 CSS를 제공하는 최적의 무료 오픈소스 폰트를 소개합니다.',
    category: '폰트 대체',
    date: '2026년 9월',
    readTime: '6분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: 'Helvetica Neue는 업계 표준이지만 상용 라이선스는 매우 비쌉니다. 화면 가독성과 시각적 구조를 그대로 재현하는 무료 Google Fonts 대안을 만나보세요.',
    keywords: ['Helvetica 무료 대체', '헬베티카 대체 폰트', 'Inter vs 헬베티카', '네오그로테스크 무료 폰트'],
    contentHtml: `
      <h2>Helvetica에 무료 대체 폰트가 필요한 이유</h2>
      <p>1957년 막스 미딩거와 에두아르트 호프만이 디자인한 Helvetica는 전 세계에서 가장 사랑받는 산세리프 서체입니다. 그러나 Monotype의 상용 라이선스는 매우 고가입니다.</p>
      <h2>1. Inter — 디지털 UI 환경의 최고봉</h2>
      <p>Rasmus Andersson이 제작한 <strong>Inter</strong>는 화면 상에서의 초정밀 가독성을 위해 최적화된 서체로, Helvetica를 완벽히 대체합니다.</p>
      <h2>2. Roboto — 구글이 다듬은 탄탄한 산세리프</h2>
      <p>안드로이드의 기본 서체인 <strong>Roboto</strong>는 개방된 기하학적 곡선과 스위스 모더니즘의 구조를 겸비하고 있습니다.</p>
    `
  },
  {
    slug: 'free-alternatives-to-futura-gotham-proxima-nova',
    title: 'Futura, Gotham, Proxima Nova 무료 대체 Google Fonts',
    metaTitle: 'Futura · Gotham · Proxima Nova 무료 대체 서체 | ProFontFinder',
    description: '현대 브랜딩을 대표하는 기하학 산세리프 3대장. Jost, Montserrat, Poppins 등 100% 무료 Google Fonts로 완벽히 대체하는 법.',
    category: '폰트 대체',
    date: '2026년 9월',
    readTime: '7분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: 'Futura, Gotham, Proxima Nova는 모던 기하학 서체의 정점입니다. 이들의 강력한 브랜딩 파워를 무료 오픈소스 폰트로 재현하는 방법을 안내합니다.',
    keywords: ['Futura 대체 폰트', 'Gotham 대체 무료 서체', 'Proxima Nova 대안'],
    contentHtml: `
      <h2>기하학 산세리프 3대 서체</h2>
      <p>Futura의 예리한 기하학은 <strong>Jost</strong>로, Gotham의 당당한 폭은 <strong>Montserrat</strong>로, Proxima Nova의 세련된 리듬은 <strong>Work Sans</strong>로 대체 가능합니다.</p>
    `
  },
  {
    slug: 'font-licensing-explained',
    title: '폰트 라이선스 완벽 정리: 데스크톱, 웹폰트, 앱, 오픈소스 차이',
    metaTitle: '폰트 라이선스 완벽 가이드: 상용 이용 & OFL 규정 | ProFontFinder',
    description: 'SIL Open Font License (OFL), 일반 상용 EULA, 웹폰트 PV 제한 등의 복잡한 라이선스 차이를 쉽게 해설합니다.',
    category: '법률 및 라이선스',
    date: '2026년 9월',
    readTime: '5분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: '폰트 라이선스 위반 소송은 빈번하고 비용이 큽니다. 상용 라이선스의 허용 범위와 Google Fonts가 상용으로 100% 안전한 이유를 알아보세요.',
    keywords: ['폰트 상용 라이선스 해설', 'SIL Open Font License 상업적 이용', '구글 폰트 라이선스 안전'],
    contentHtml: `
      <h2>타이포그래피의 법적 현실</h2>
      <p>디지털 폰트 파일(.ttf, .woff2)은 저작권법상 컴퓨터 소프트웨어로 보호됩니다. Google Fonts의 <strong>SIL OFL</strong> 서체는 상업적 프로젝트에 무료로 안전하게 사용할 수 있습니다.</p>
    `
  },
  {
    slug: 'how-image-font-identification-works',
    title: '브라우저 내 AI 이미지 폰트 인식 기술의 작동 원리',
    metaTitle: '이미지로 폰트 찾는 AI 기술 원리 | ProFontFinder',
    description: 'HTML5 Canvas, 외곽선 분석, 16×16 벡터 지문 대조를 통해 서버 업로드 없이 브라우저에서 즉시 폰트를 판별하는 메커니즘.',
    category: '엔지니어링 & AI',
    date: '2026년 9월',
    readTime: '6분 소요',
    author: '수석 시스템 아키텍트',
    heroExcerpt: '전통적인 폰트 탐색기는 이미지를 원격 서버로 전송합니다. 순수 클라이언트사이드 처리로 개인정보를 완벽히 보호하는 AI 기술을 확인해보세요.',
    keywords: ['이미지 폰트 찾기 알고리즘', '브라우저 OCR 캔버스'],
    contentHtml: `
      <h2>클라이언트사이드 폰트 인식의 혁신</h2>
      <p>서버 통신 없이 브라우저 메모리 안에서 글자 영역을 이진화하고 기하학적 유사도를 판별하여 민감한 기업 그래픽도 안심하고 분석할 수 있습니다.</p>
    `
  },
  {
    slug: 'free-alternatives-to-avenir-and-circular-std',
    title: 'Avenir & Circular Std(스포티파이 서체) 무료 대체 폰트',
    metaTitle: 'Avenir 및 Circular Std 무료 대체 폰트 | ProFontFinder',
    description: '스포티파이와 에어비앤비의 브랜드 이미지를 만든 따뜻한 기하학 서체. Plus Jakarta Sans와 Figtree로 무료 구현하기.',
    category: '폰트 대체',
    date: '2026년 10월',
    readTime: '7분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: 'Circular Std와 Avenir는 모던 디지털 프로덕트의 상징입니다. 이들의 친근하고 세련된 원형 비율을 무료 Google Fonts로 만나보세요.',
    keywords: ['스포티파이 폰트 무료 대체', 'Circular Std 유사 폰트', 'Avenir 대체 Google Fonts'],
    contentHtml: `
      <h2>인간적인 따뜻함을 품은 기하학 서체</h2>
      <p><strong>Plus Jakarta Sans</strong>는 Circular Std의 가장 이상적인 오픈소스 대체제이며, <strong>Figtree</strong>는 깔끔한 UI에 최적화되어 있습니다.</p>
    `
  },
  {
    slug: 'free-alternatives-to-didot-and-bodoni',
    title: 'Didot & Bodoni 무료 대체 폰트: 하이패션 럭셔리 매거진 서체',
    metaTitle: 'Didot 및 Bodoni 무료 대체 세리프 폰트 | ProFontFinder',
    description: '보그(Vogue)와 하퍼스 바자의 표지를 장식하는 모던 세리프 서체. 극적인 대비를 자랑하는 무료 Google Fonts 모음.',
    category: '폰트 대체',
    date: '2026년 10월',
    readTime: '6분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: '디돈(Didone) 양식은 궁극의 화려함과 매거진의 품격을 대변합니다. 바늘처럼 얇은 헤어라인 세리프를 무료 폰트로 재현해보세요.',
    keywords: ['보그 잡지 폰트 무료 대체', 'Didot 대체 폰트', 'Bodoni Moda Google Fonts'],
    contentHtml: `
      <h2>타이포그래피의 귀족: 디돈 스타일</h2>
      <p><strong>Bodoni Moda</strong>와 <strong>Playfair Display</strong>를 활용하면 고가의 라이선스 비용 없이도 명품 브랜드의 고급스러운 분위기를 연출할 수 있습니다.</p>
    `
  },
  {
    slug: 'how-to-find-fonts-from-instagram-and-tiktok',
    title: '인스타 릴스, 스토리, 틱톡 영상 속 폰트 찾는 법',
    metaTitle: '인스타 릴스 및 틱톡 영상 속 자막 폰트 찾기 | ProFontFinder',
    description: '숏폼 영상에서 자막 폰트를 정확하게 캡처하고 AI 이미지 검색으로 30초 안에 일치하는 폰트를 찾는 실전 팁.',
    category: '폰트 식별 가이드',
    date: '2026년 10월',
    readTime: '5분 소요',
    author: '컴퓨터 비전 & OCR 팀',
    heroExcerpt: 'SNS 영상의 시청 지속 시간은 매력적인 자막 서체에 달려 있습니다. 영상 캡처로부터 폰트를 빠르고 정확하게 찾아보세요.',
    keywords: ['인스타 릴스 폰트 찾기', '틱톡 자막 폰트 알아내기'],
    contentHtml: `
      <h2>숏폼 영상 시대의 타이포그래피</h2>
      <p>텍스트가 멈춘 선명한 프레임에서 캡처한 뒤 불필요한 배경을 제외하고 ProFontFinder에 드롭하면 가장 일치하는 서체를 즉시 찾을 수 있습니다.</p>
    `
  },
  {
    slug: 'free-alternatives-to-gill-sans-and-frutiger',
    title: 'Gill Sans & Frutiger 무료 대체 폰트: 영국과 스위스의 명작 서체',
    metaTitle: 'Gill Sans 및 Frutiger 무료 대체 폰트 | ProFontFinder',
    description: 'BBC와 공항 안내판에서 검증된 휴머니스트 산세리프의 결정체. Cabin과 Source Sans 3 등 오픈소스 대안 안내.',
    category: '폰트 대체',
    date: '2026년 10월',
    readTime: '6분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: '에릭 길의 감성적인 기하학과 아드리안 프루티거의 뛰어난 시인성. 현대 웹 프로젝트에 사용할 수 있는 무료 쌍둥이 서체를 탐색해보세요.',
    keywords: ['Gill Sans 무료 대체', 'Frutiger Google Fonts 대체'],
    contentHtml: `
      <h2>휴머니스트 산세리프의 정점</h2>
      <p><strong>Cabin</strong>은 Gill Sans의 따뜻한 비율을 계승하고 있으며, Adobe의 <strong>Source Sans 3</strong>는 Frutiger의 명쾌한 가독성을 제공합니다.</p>
    `
  }
];
