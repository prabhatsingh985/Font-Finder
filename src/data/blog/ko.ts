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
    keywords: [
      'Helvetica 무료 대체',
      '헬베티카 대체 폰트',
      'Inter vs 헬베티카',
      'Helvetica Google Fonts',
      '네오그로테스크 무료 폰트'
    ],
    contentHtml: `
      <h2>Helvetica에 현실적인 무료 대체 폰트가 필요한 이유</h2>
      <p>1957년 하스 활자 주조소(Haas Type Foundry)에서 막스 미딩거(Max Miedinger)와 에두아르트 호프만(Eduard Hoffmann)이 디자인한 Helvetica는 전 세계에서 가장 인지도 높은 네오 그로테스크 서체입니다. 특유의 중립적인 톤, 균일한 수직 스트로크, 수평으로 깔끔하게 잘린 터미널 디자인은 루프트한자, 아메리칸 항공, 타깃(Target), 뉴욕 지하철 안내 체계 등 수많은 글로벌 브랜드와 공공 인프라의 표준이 되었습니다.</p>
      
      <p>그러나 현대 웹 개발자, 스타트업 창업가, 프로덕트 디자이너에게 Monotype의 <strong>Helvetica Neue</strong>나 <strong>Helvetica Now</strong> 상용 라이선스 비용은 큰 부담입니다. 단순 데스크톱 용도조차 웨이트당 35~65달러에 달하며, 트래픽이 높은 웹 서비스나 모바일 앱의 경우 연간 수천 달러 이상의 비용이 청구됩니다.</p>

      <p>다행히 오픈소스 타이포그래피 생태계의 비약적 발전 덕분에 단 한 푼의 비용 없이도 스위스 모더니즘의 명확성을 완벽하게 재현할 수 있는 초정밀 대체 폰트들이 존재합니다.</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">Helvetica의 핵심 시각적 특징:</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>엄격한 수평 터미널:</strong> 'a', 'c', 'e', 's'와 같은 글자의 끝부분이 완벽한 수평선으로 잘려 있습니다.</li>
          <li>• <strong>높은 x-하이트(x-Height):</strong> 소문자의 높이가 대문자의 약 70~72%를 차지하여 화면상 가독성을 극대화합니다.</li>
          <li>• <strong>모노라인(Monoline) 굵기 균일성:</strong> 수직 기둥과 수평 가로획 간의 굵기 대비(스트로크 콘트라스트)가 매우 적습니다.</li>
          <li>• <strong>밀도 높은 리듬감:</strong> 닫힌 카운터(내부 공간)와 안정적인 자간 비율을 유지합니다.</li>
        </ul>
      </div>

      <h2>1. Inter (Rasmus Andersson 제작) — 디지털 UI 환경의 최고봉 대안</h2>
      <p><strong>Inter</strong>는 현대 오픈소스 UI 타이포그래피의 금자탑으로 불립니다. Figma의 디자이너였던 Rasmus Andersson이 제작한 이 서체는 컴퓨터 모니터와 픽셀 그리드 상에서의 미세 가독성을 위해 광학적으로 치밀하게 계산되었습니다.</p>
      
      <p>Inter는 Helvetica의 높은 x-하이트, 중립적인 글자 형태, 수평 터미널 컷을 계승하면서도 12px~14px의 작은 본문 크기에서 글자가 뭉개지는 것을 방지하는 광학적 보정을 적용했습니다.</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>견본: INTER (OFL 100% 완전 무료)</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">시각적 일치율: 98%</span>
        </div>
        <p class="text-2xl sm:text-3xl font-normal text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Inter', sans-serif;">
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
font-family: 'Inter', sans-serif;</code></pre>
      </div>

      <h2>2. Roboto (구글 제작) — 모바일과 웹의 기하학적 일꾼</h2>
      <p>Christian Robertson이 구글 안드로이드 생태계를 위해 개발한 <strong>Roboto</strong>는 네오 그로테스크 기반에 열린 기하학적 곡선을 결합했습니다. 페이지 전반에 부여하는 담백하고 세련된 분위기로 Helvetica를 손쉽게 대체합니다.</p>

      <h2>3. Arimo (Steve Matteson 제작) — 치수 완벽 호환(메트릭 호환) 서체</h2>
      <p>전설적인 타입 디자이너 Steve Matteson이 제작한 <strong>Arimo</strong>는 Arial 및 Helvetica와 글자 폭과 줄바꿈 규격이 완전히 일치하도록 설계된 오픈소스 폰트입니다. 기존 PDF 서식이나 출력물 레이아웃의 줄 바꿈 깨짐 없이 즉각 대체할 수 있습니다.</p>

      <h2>4. TeX Gyre Heros — 역사적 그로테스크 복원판</h2>
      <p>폴란드의 GUST e-foundry가 개발한 <strong>TeX Gyre Heros</strong>는 공인 라이선스 클론인 URW Nimbus Sans를 기반으로 하여 클래식한 인쇄용 Helvetica Neue의 기하학적 프로포션을 정확하게 계승합니다.</p>

      <h2>비교 분석표: Helvetica vs 무료 대체 서체</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e2e4e8] dark:border-[#23252a] text-[#64748b] dark:text-[#8a8f98] font-mono">
              <th class="py-3 px-4">서체명</th>
              <th class="py-3 px-4">라이선스 비용</th>
              <th class="py-3 px-4">라이선스 유형</th>
              <th class="py-3 px-4">최적 활용 분야</th>
              <th class="py-3 px-4">일치율</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e2e4e8] dark:divide-[#23252a]">
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Helvetica Neue</td>
              <td class="py-3 px-4 text-[#ef4444] font-mono">$35+ / 웨이트</td>
              <td class="py-3 px-4">상용 EULA</td>
              <td class="py-3 px-4">대기업 CI 브랜딩, 오프라인 인쇄</td>
              <td class="py-3 px-4 font-mono">100% (오리지널)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#16a34a] dark:text-[#10b981]">Inter</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">완전 무료 ($0)</td>
              <td class="py-3 px-4">SIL Open Font License</td>
              <td class="py-3 px-4">현대 UI, SaaS 대시보드, 웹앱</td>
              <td class="py-3 px-4 font-mono text-[#16a34a]">98% 일치</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Roboto</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">완전 무료 ($0)</td>
              <td class="py-3 px-4">Apache 2.0</td>
              <td class="py-3 px-4">모바일 앱, 콘텐츠 블로그</td>
              <td class="py-3 px-4 font-mono">92% 일치</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Arimo</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">완전 무료 ($0)</td>
              <td class="py-3 px-4">Apache 2.0</td>
              <td class="py-3 px-4">메트릭 호환 문서 인쇄, PDF</td>
              <td class="py-3 px-4 font-mono">95% 일치</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>프로젝트에 꼭 맞는 대체 서체 선택 가이드</h2>
      <p>반응형 웹 애플리케이션이나 모던 SaaS UI를 제작 중이라면 단연 <strong>Inter</strong>가 최고의 선택입니다. 기존 문서 서식이나 레이아웃의 줄바꿈 틀어짐을 방지해야 한다면 <strong>Arimo</strong>나 <strong>TeX Gyre Heros</strong>를 권장합니다.</p>
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
    keywords: [
      'Futura 대체 폰트',
      'Gotham 대체 무료 서체',
      'Proxima Nova 대안',
      'Jost vs Futura',
      'Montserrat vs Gotham'
    ],
    contentHtml: `
      <h2>기하학 산세리프 3대 서체</h2>
      <p>그래픽 디자인과 디지털 브랜딩에서 헤드라인, 브랜드 로고, 테크 UI를 주도하는 3개의 서체가 있습니다. 바우하우스의 기하학적 철학을 구현한 <strong>Futura</strong>, 20세기 중반 뉴욕의 건축적 표지판에서 탄생한 <strong>Gotham</strong>, 그리고 현대 웹의 확고한 표준 <strong>Proxima Nova</strong>입니다.</p>

      <p>이들은 권위 있고 세련된 인상을 남기지만, 디지털 제품에서 셋 모두의 라이선스를 구매하려면 수백만 원의 비용이 소요됩니다. 100% 무료 Google Fonts로 동일한 시각적 효과를 구현하는 방법을 소개합니다.</p>

      <h2>파트 1: Futura의 가장 훌륭한 무료 대체 폰트</h2>
      <p>1927년 Paul Renner가 디자인한 Futura는 원, 삼각형, 사각형이라는 순수 기하학적 도형으로 구성되어 있습니다. 'A'와 'M'의 뾰족한 정점과 완벽한 정원을 그리는 'O'가 시그니처입니다.</p>

      <h3>1. Jost (indestructible type* 제작) — 가장 정통성 있는 복원</h3>
      <p><strong>Jost</strong>는 Futura에 바치는 오마주로 설계된 오픈소스 가변 폰트입니다. 9개 웨이트에 걸쳐 엄격한 바우하우스 철학과 날카로운 정점, 순수 원형 기하학을 충실히 반영합니다.</p>

      <h3>2. Poppins (Indian Type Foundry 제작) — 현대적인 부드러운 기하학</h3>
      <p>끝부분이 약간 둥글게 다듬어져 있지만, ExtraBold와 Black 웨이트는 Futura Bold 특유의 힘찬 브랜딩 존재감을 동일하게 전달합니다.</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-4 overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700;800&display=swap');
font-family: 'Jost', sans-serif;</code></pre>

      <h2>파트 2: Gotham의 가장 훌륭한 무료 대체 폰트</h2>
      <p>2000년 GQ 매거진의 의뢰로 Tobias Frere-Jones가 디자인하고 2008년 오바마 대선 캠페인을 통해 전 세계적인 표준으로 도약한 <strong>Gotham</strong>은 맨해튼 거리의 건축 표지판에서 영감을 받았습니다.</p>

      <h3>1. Montserrat (Julieta Ulanovsky 제작) — 세계적인 Gotham 대체 서체</h3>
      <p>부에노스아이레스의 유서 깊은 몬세라트 지역의 빈티지 간판에서 영감을 얻은 <strong>Montserrat</strong>는 전 세계에서 가장 인기 있는 오픈소스 Gotham 대안입니다. 널찍하고 당당한 대문자 폭과 탄탄한 균형감을 지닙니다.</p>

      <h3>2. Figtree (Erik Kennedy 제작) — 현대 UI를 위한 친근한 하이브리드</h3>
      <p>정갈한 원형 카운터를 지닌 Figtree는 Gotham의 무게감에 최신 앱 인터페이스의 뛰어난 명료성을 더해줍니다.</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-4 overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
font-family: 'Montserrat', sans-serif;</code></pre>

      <h2>파트 3: Proxima Nova의 가장 훌륭한 무료 대체 폰트</h2>
      <p>Mark Simonson의 <strong>Proxima Nova</strong>는 Futura의 엄격한 기하학과 Akzidenz-Grotesk의 휴머니스트적 온기를 완벽하게 결합하여 웹에서 가장 널리 쓰이는 서체 중 하나가 되었습니다.</p>

      <h3>1. Work Sans (Wei Huang 제작)</h3>
      <p>화면 본문 읽기와 제목 모두에 최적화된 Work Sans는 Proxima Nova를 대표하는 넉넉한 글자 내부 공간과 산뜻한 리듬을 재현합니다.</p>

      <h3>2. Nunito Sans (Vernon Adams & Jacques Le Bailly 제작)</h3>
      <p>균형 잡힌 기하학적 골격과 깔끔한 단면 커팅, 우수한 웨이트 라인업을 제공합니다.</p>

      <h2>요약 비교 레퍼런스 가이드</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e2e4e8] dark:border-[#23252a] text-[#64748b] dark:text-[#8a8f98] font-mono">
              <th class="py-3 px-4">유료 타깃 서체</th>
              <th class="py-3 px-4">파운드리</th>
              <th class="py-3 px-4">무료 대체 서체</th>
              <th class="py-3 px-4">일치도</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e2e4e8] dark:divide-[#23252a]">
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Futura</td>
              <td class="py-3 px-4 text-[#64748b]">Bauer / Monotype</td>
              <td class="py-3 px-4 text-[#16a34a] font-bold">Jost / Poppins</td>
              <td class="py-3 px-4 font-mono">96%</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Gotham</td>
              <td class="py-3 px-4 text-[#64748b]">Hoefler & Co.</td>
              <td class="py-3 px-4 text-[#16a34a] font-bold">Montserrat / Figtree</td>
              <td class="py-3 px-4 font-mono">96%</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Proxima Nova</td>
              <td class="py-3 px-4 text-[#64748b]">Mark Simonson</td>
              <td class="py-3 px-4 text-[#16a34a] font-bold">Montserrat / Work Sans</td>
              <td class="py-3 px-4 font-mono">95%</td>
            </tr>
          </tbody>
        </table>
      </div>
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
    keywords: [
      '폰트 상용 라이선스 해설',
      'SIL Open Font License 상업적 이용',
      '구글 폰트 라이선스 안전',
      '폰트 저작권 소송 예방'
    ],
    contentHtml: `
      <h2>타이포그래피의 법적 현실</h2>
      <p>대부분의 국가에서 글자의 외형 디자인 자체는 특허와 달리 보호 범위가 제한적이지만, <strong>디지털 폰트 파일(.ttf, .otf, .woff2)은 컴퓨터 소프트웨어 저작물로서 저작권법에 의해 엄격히 보호됩니다</strong>.</p>

      <p>즉, 폰트를 구입하거나 다운로드하는 행위는 '글자를 소유하는 것'이 아니라, 명시된 조건 하에서만 렌더링하고 설치할 수 있는 <strong>제한적 사용 권리(EULA 라이선스)</strong>를 획득하는 것입니다.</p>

      <h2>상용 폰트의 4대 핵심 라이선스 분류</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">1. 데스크톱 라이선스</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">지정된 수량의 PC에 설치를 허용합니다. 정적 이미지, 비트맵 로고, 인쇄물 및 출판물 제작에 국한됩니다.</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">2. 웹폰트 라이선스</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">@font-face를 통한 웹페이지 임베딩을 허가합니다. 보통 월간 페이지뷰(PV)에 따라 요금이 차등 부과됩니다.</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">3. 모바일 앱 임베딩</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">iOS나 안드로이드 앱의 바이너리 파일 내에 폰트를 포함하여 배포할 때 요구되는 고가의 라이선스입니다.</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">4. 방송 및 서버 생성</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">TV 방송 자막이나 사용자가 웹상에서 직접 티셔츠, 명함 문구를 입력해 생성하는 서비스에서 필수적입니다.</p>
        </div>
      </div>

      <h2>Google Fonts와 SIL OFL이 100% 안전한 이유</h2>
      <p>Google Fonts 카탈로그에 등록된 대다수의 서체는 <strong>SIL Open Font License (OFL) v1.1</strong> 또는 <strong>Apache 2.0 라이선스</strong>로 배포됩니다.</p>

      <ul class="space-y-3 text-sm text-[#475569] dark:text-[#8a8f98] my-6">
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>상업적 이용 100% 무료:</strong> 로열티 없이 상업용 웹사이트, 모바일 앱, 인쇄물, 로고 등에 자유롭게 쓸 수 있습니다.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>트래픽/PV 무제한:</strong> 월간 수천만 명의 방문자가 유입되어도 추가 과금이 전혀 발생하지 않습니다.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>자체 호스팅(Self-hosting) 전면 허용:</strong> .woff2 파일을 다운로드하여 자체 서버나 CDN에서 직접 서빙하는 것도 합법입니다.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-[#ef4444] font-bold">✗</span>
          <span><strong>유일한 제한사항:</strong> 폰트 파일 단독을 그대로 유료로 판매하는 행위만 금지됩니다.</span>
        </li>
      </ul>

      <h2>고객 프로젝트 폰트 식별과 법적 위험 예방</h2>
      <p>클라이언트 프로젝트를 인계받거나 리뉴얼을 진행할 때는 항상 <a href="/ko/" class="text-[#ff4d00] dark:text-[#e4f222] font-semibold underline">ProFontFinder</a>를 사용하여 사용 중인 폰트를 먼저 확인하세요. 유료 상용 폰트가 사용되었으나 웹폰트 라이선스가 확보되지 않은 경우, 즉시 동급의 Google Fonts 대체 서체로 교체하여 저작권 침해 분쟁을 사전에 방지해야 합니다.</p>
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
    heroExcerpt: '전통적인 폰트 탐색기는 이미지를 원격 서버로 전송합니다. 순수 클라이언트사이드 처리로 개인정보를 완벽히 보호하며 수 밀리초 만에 판별하는 원리를 확인해보세요.',
    keywords: [
      '이미지 폰트 찾기 알고리즘',
      '브라우저 OCR 캔버스',
      '사진으로 폰트 검색 무료',
      '클라이언트사이드 폰트 매칭'
    ],
    contentHtml: `
      <h2>폰트 식별 기술의 진화</h2>
      <p>과거 이미지 속 서체를 알아내려면 보안상 민감한 디자인 파일을 외부 유료 서버에 업로드하고 느린 OCR 대기열을 거치거나 해외 포럼에 질문해야 했습니다.</p>

      <p>현대 웹 표준 기술인 <strong>HTML5 Canvas API, Web Workers, SIMD 가속 벡터 연산</strong> 덕분에 이제 모든 광학 문자 인식과 서체 벡터 대조 연산을 사용자의 웹 브라우저 메모리 안에서 단 수 밀리초 만에 처리할 수 있습니다.</p>

      <h2>클라이언트사이드 4단계 인식 파이프라인</h2>

      <h3>1단계: 대비 정규화 및 글리프 이진화</h3>
      <p>클립보드에서 이미지를 붙여넣으면(<kbd class="font-mono text-xs bg-white dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a] px-1.5 py-0.5 rounded">Ctrl+V / ⌘V</kbd>), 엔진은 백그라운드 캔버스에서 가중 휘도 변환을 수행합니다:
      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-2 text-[#1e293b] dark:text-[#d0d6e0]"><code>Y = 0.299*R + 0.587*G + 0.114*B</code></pre>
      오츠(Otsu) 이진화 알고리즘이 배경 잡음과 텍스트 글리프를 깔끔하게 분리해냅니다.</p>

      <h3>2단계: 기하학적 외곽선 추출</h3>
      <p>개별 글자의 테두리를 감지하고 서체의 핵심 비율을 즉시 산출합니다:
      <ul class="space-y-1.5 text-sm text-[#475569] dark:text-[#8a8f98] my-3">
        <li>• <strong>종횡비 및 너비 지수:</strong> 장체 폰트(Oswald)와 평체 기하학 폰트(Montserrat)를 구분.</li>
        <li>• <strong>x-하이트 비율:</strong> 높은 x-하이트의 네오 그로테스크와 고전 세리프 서체를 식별.</li>
        <li>• <strong>스트로크 콘트라스트:</strong> 수직선과 수평선의 두께 차이를 정밀 계측.</li>
        <li>• <strong>세리프 감지:</strong> 획 끝단의 돌기 및 삐침 유무를 판별.</li>
      </ul>
      </p>

      <h3>3단계: 16×16 벡터 매트릭스 핑거프린팅</h3>
      <p>네트워크 지연 없이 1,935개 이상의 폰트를 즉시 검색하기 위해, 정규화된 글자 형태를 16×16 비트 행렬(256차원 벡터)로 압축한 뒤 코사인 유사도로 대조합니다:</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-3 text-[#1e293b] dark:text-[#d0d6e0]"><code>similarity = (VectorA · VectorB) / (||VectorA|| * ||VectorB||)</code></pre>

      <h3>4단계: 다중 글자 합의(Consensus) 판별</h3>
      <p>단일 글자에 의존하지 않고 추출된 단어 전체의 여러 글자를 종합 평가하여 최종 서체 매칭 순위를 매깁니다.</p>

      <h2>100% 클라이언트사이드 프라이버시 보장</h2>
      <p>디자인 실무에서는 출시 전 제품 화면이나 미공개 브랜드 로고를 다루는 경우가 많습니다. ProFontFinder는 모든 데이터 처리를 사용자의 로컬 RAM에서만 끝내므로 이미지가 외부 네트워크로 전송되지 않아 완벽한 보안을 유지합니다.</p>
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
    keywords: [
      '스포티파이 폰트 무료 대체',
      'Circular Std 유사 폰트',
      'Avenir 대체 Google Fonts',
      'Plus Jakarta Sans vs Circular',
      '기하학 산세리프 무료 폰트'
    ],
    contentHtml: `
      <h2>따뜻함을 품은 기하학 산세리프의 전성기</h2>
      <p>Futura가 1920년대의 엄격하고 기계적인 바우하우스 기하학을 대변한다면, 그 차가움을 걷어내고 디지털 시대에 가장 친근한 세련미를 완성한 두 서체가 있습니다. 스위스의 거장 Adrian Frutiger가 1988년에 완성한 <strong>Avenir</strong>, 그리고 Laurenz Brunner가 디자인하여 2013년 Lineto에서 출시한 <strong>Circular Std</strong>입니다.</p>
      
      <p>Avenir는 Apple Maps의 공식 서체로 활약했으며 블룸버그와 디즈니의 사랑을 받고 있습니다. 한편 Circular Std는 <strong>Spotify, Airbnb, Mint</strong>의 상징적인 브랜드 보이스가 되어 둥글고 가독성 높은 기하학 브랜딩의 세계적 열풍을 일으켰습니다.</p>

      <p>하지만 Circular Std나 Avenir Next의 상용 라이선스는 웨이트당 80~150달러를 쉽게 넘어섭니다. Google Fonts에서 제공하는 가장 뛰어난 무료 오픈소스 대체 서체들을 소개합니다.</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">Circular & Avenir의 핵심 시각적 공통점:</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>원형 볼(Circular Bowls):</strong> 'b', 'd', 'p', 'q', 'o'에 나타나는 완벽한 기하학적 정원 카운터.</li>
          <li>• <strong>휴머니스트 감성:</strong> 직선의 딱딱함 대신 부드러운 곡선이 가미된 온기 있는 글꼴.</li>
          <li>• <strong>개방된 조형(Open Apertures):</strong> 저해상도 모바일 화면에서도 글자 뭉침을 방지하는 넉넉한 공간.</li>
          <li>• <strong>여유로운 자간과 리듬:</strong> 모바일 앱 UI에 이상적으로 최적화된 글자 간격.</li>
        </ul>
      </div>

      <h2>1. Plus Jakarta Sans (Tokotype 제작) — Circular Std의 가장 완벽한 쌍둥이</h2>
      <p>인도네시아 자카르타 주정부의 디자인 시스템을 위해 제작된 <strong>Plus Jakarta Sans</strong>는 Circular Std의 무료 대안 중 최고로 평가받습니다. 특유의 원형 곡선, 깔끔한 터미널, 균형 잡힌 수평 리듬을 완벽히 공유합니다. Bold와 Medium 웨이트로 작성하면 스포티파이 UI와 구별이 불가능할 정도입니다.</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>견본: PLUS JAKARTA SANS (OFL 100% 완전 무료)</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">97% CIRCULAR STD 유사도</span>
        </div>
        <p class="text-2xl sm:text-3xl font-semibold text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          Soundtrack your life. Millions of songs and podcasts.
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
font-family: 'Plus Jakarta Sans', sans-serif;</code></pre>
      </div>

      <h2>2. Figtree (Erik Kennedy 제작) — 현대 소프트웨어 UI의 걸작</h2>
      <p>UI 디자이너 Erik Kennedy가 설계한 <strong>Figtree</strong>는 기하학 서체의 단점을 보완하여 개발되었습니다. Circular의 부드러움과 Avenir의 명쾌함을 조화시키고, 대문자 'I'와 소문자 'l'의 명확한 시각적 구분을 제공하여 SaaS 대시보드와 모바일 앱에 탁월합니다.</p>

      <h2>3. Outfit (Rodrigo Fuenzalida 제작) — 세련된 브랜드 아이덴티티</h2>
      <p>Outfit.io 플랫폼의 브랜드 서체에서 착안한 <strong>Outfit</strong>은 Avenir의 단아한 비례감을 훌륭하게 재현하며, 얇은 두께부터 묵직한 볼드까지 뛰어난 조형미를 선사합니다.</p>

      <h2>4. Questrial (Joe Prince 제작) — 순수한 원형 미니멀리즘</h2>
      <p>원을 기본 뼈대로 설계된 <strong>Questrial</strong>은 Avenir와 Century Gothic의 시대를 초월한 기하학적 간결함을 담고 있어 모던한 로고와 헤드라인에 이상적입니다.</p>
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
    keywords: [
      '보그 잡지 폰트 무료 대체',
      'Didot 대체 폰트',
      'Bodoni Moda Google Fonts',
      '럭셔리 세리프 무료 폰트',
      '디돈 스타일 오픈소스 서체'
    ],
    contentHtml: `
      <h2>타이포그래피의 귀족: 디돈(Didone) 스타일</h2>
      <p>18세기 후반 파리의 피르맹 디도(Firmin Didot)와 파르마의 잠바티스타 보도니(Giambattista Bodoni)는 르네상스 캘리그래피의 유기적 선을 탈피하여 활자 디자인의 새 지평을 열며 <strong>디돈(Didone, 모던 세리프) 양식</strong>을 완성했습니다.</p>
      
      <p>두꺼운 수직 획과 종이처럼 얇은 수평 헤어라인 사이의 극단적인 두께 대비, 직각으로 깔끔하게 떨어지는 세리프는 <strong>하이패션, 고급 향수, <em>Vogue, Harper's Bazaar</em>, 조르지오 아르마니</strong>의 영원한 시각적 언어가 되었습니다.</p>

      <p>정식 라이선스 구매 비용이 부담스러운 분들을 위해 Google Fonts에서 제공하는 가장 뛰어난 오픈소스 명작들을 안내합니다.</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">디돈 양식의 필수 조형적 특징:</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>극단적인 굵기 대비:</strong> 강렬한 수직 줄기와 면도날처럼 날카롭고 얇은 헤어라인의 공존.</li>
          <li>• <strong>엄격한 90° 수직 축:</strong> 'O'와 'C' 같은 둥근 글자에 기울기가 전혀 없습니다.</li>
          <li>• <strong>평평하고 얇은 세리프:</strong> 곡선 이음매 없이 직각으로 접합되는 단면.</li>
          <li>• <strong>물방울 모양 터미널:</strong> 'a', 'c', 'f', 'r', 'y' 끝에 맺히는 우아한 티어드롭 형태.</li>
        </ul>
      </div>

      <h2>1. Bodoni Moda (Indestructible Type 제작) — 현대적 마스터피스</h2>
      <p>Owen Earl이 설계한 <strong>Bodoni Moda</strong>는 광학 크기 축(opsz)이 적용된 오픈소스 가변 폰트입니다. 60px 이상의 대형 제목에서는 고전 동판 인쇄처럼 칼날 같은 세련미를 뽐내며, 작은 크기에서는 디지털 화면에 맞게 대비가 자동 조절되어 뛰어난 가독성을 유지합니다.</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>견본: BODONI MODA (OFL 100% 완전 무료)</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">99% BODONI / DIDOT 호환성</span>
        </div>
        <p class="text-3xl sm:text-4xl font-normal text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3 italic" style="font-family: 'Bodoni Moda', serif;">
          Haute Couture Autumn / Winter Collection
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap');
font-family: 'Bodoni Moda', serif;</code></pre>
      </div>

      <h2>2. Playfair Display (Claus Eggers Sørensen 제작) — 매거진 편집 디자인의 정석</h2>
      <p>바스커빌 과도기 양식에 뿌리를 둔 <strong>Playfair Display</strong>는 풍부한 대비와 섬세한 물방울 터미널을 갖추어 럭셔리 라이프스타일 웹사이트나 파인다이닝 메뉴판에 우아함을 더해줍니다.</p>

      <h2>3. Cormorant Garamond (Christian Thalmann 제작) — 귀족적인 섬세함</h2>
      <p>극도로 얇은 헤어라인과 예리한 세리프를 통해 고전 프랑스 인쇄물 특유의 조용하고 격조 높은 럭셔리 무드를 연출합니다.</p>
    `
  },
  {
    slug: 'how-to-find-fonts-from-instagram-and-tiktok',
    title: '인스타 릴스 및 틱톡 영상에서 폰트 알아내는 실전 가이드',
    metaTitle: '인스타 릴스 & 틱톡 영상 속 폰트 찾는 법 | ProFontFinder',
    description: 'SNS 숏폼 영상에서 본 예쁜 폰트가 궁금하신가요? 캡처부터 AI 인식까지 30초 만에 무료로 폰트를 식별하는 실전 워크플로우.',
    category: '폰트 식별',
    date: '2026년 10월',
    readTime: '5분 소요',
    author: '비주얼 AI & OCR 팀',
    heroExcerpt: '숏폼 영상의 시청 지속 시간은 매력적인 자막 폰트가 좌우합니다. 스크린샷에서 텍스트를 분리하고 AI로 즉시 식별하는 방법을 알아보세요.',
    keywords: [
      '인스타 릴스 폰트 찾기',
      '틱톡 자막 폰트 알아내기',
      '스크린샷 폰트 검색 무료',
      '인스타 스토리 폰트 이름'
    ],
    contentHtml: `
      <h2>숏폼 영상의 핵심 무기, 타이포그래피</h2>
      <p>인스타그램 릴스, 틱톡, 유튜브 쇼츠에서 시각적 텍스트 자막은 시청자를 사로잡는 가장 중요한 요소입니다. 유명 크리에이터들의 시그니처 노란색 볼드 자막부터 감성적인 타자기 폰트까지, <em>"이 영상에 쓰인 폰트가 뭐지?"</em>라는 질문은 언제나 끊이지 않습니다.</p>

      <p>영상 속 폰트는 비디오 압축 노이즈와 모션 블러 때문에 분석이 까다롭습니다. ProFontFinder를 활용해 30초 만에 정확하게 찾아내는 3단계 방법을 소개합니다.</p>

      <h2>1단계: 텍스트가 완전히 멈춘 선명한 프레임에서 일시정지</h2>
      <p>글자가 화면 안으로 날아오거나 페이드인되는 도중에 캡처하지 마세요. 모션 블러 없이 불투명도 100%로 완전히 멈춘 키프레임에서 스크린샷을 찍어야 합니다.</p>

      <h2>2단계: 얼굴과 배경 영상을 깔끔하게 잘라내기(Crop)</h2>
      <p>스마트폰 화면 전체를 업로드하면 인물의 얼굴이나 역동적인 배경 영상 때문에 AI 엔진이 글자 테두리를 인식하는 데 혼선이 생깁니다.</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">정확한 인식을 위한 캡처 팁:</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>글자 위주로 타이트하게 자르기:</strong> 명확하게 보이는 2~4개 단어만 집중적으로 크롭합니다.</li>
          <li>• <strong>단색 텍스트 선호:</strong> 배경과 명암 대비가 확실한 흰색이나 단색 자막이 가장 인식률이 높습니다.</li>
          <li>• <strong>과도한 네온 외곽선 피하기:</strong> 글꼴의 원형을 보존하기 위해 발광 효과가 너무 센 글자는 피합니다.</li>
        </ul>
      </div>

      <h2>3단계: ProFontFinder 광학 엔진에 이미지 드롭</h2>
      <p>잘라낸 이미지를 <a href="/ko/" class="text-[#ff4d00] dark:text-[#e4f222] font-semibold underline">ProFontFinder</a>에 업로드하거나 붙여넣으세요. 브라우저 내 이미지 엔진이 글자 외곽선을 즉시 분석하여 최적의 무료 서체를 추천합니다.</p>

      <h2>SNS 영상에 자주 쓰이는 대표 서체와 무료 대체제:</h2>
      <ul class="space-y-3 text-sm text-[#475569] dark:text-[#8a8f98] my-4">
        <li>• <strong>인스타그램 "클래식":</strong> iOS는 <em>San Francisco</em>, 안드로이드는 <em>Roboto</em> 기반. 무료 대체: <a href="/ko/fonts/roboto" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Roboto</a> 또는 <a href="/ko/fonts/inter" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Inter</a>.</li>
        <li>• <strong>인스타그램 "모던":</strong> 대문자 기하학 산세리프. 무료 대체: <a href="/ko/fonts/montserrat" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Montserrat</a> (Bold/Black 웨이트).</li>
        <li>• <strong>틱톡 기본 자막:</strong> <em>TikTok Display / Proxima Nova</em>. 무료 대체: <a href="/ko/fonts/figtree" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Figtree</a> 또는 <a href="/ko/fonts/nunito-sans" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Nunito Sans</a>.</li>
        <li>• <strong>캡컷(CapCut) 바이럴 자막:</strong> 유명한 초극태 장체 자막 서체는 <em>The Bold Font</em>나 <em>Bebas Neue</em>. 무료 대체: <a href="/ko/fonts/bebas-neue" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Bebas Neue</a> 또는 <a href="/ko/fonts/anton" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Anton</a>.</li>
      </ul>
    `
  },
  {
    slug: 'free-alternatives-to-gill-sans-and-frutiger',
    title: 'Gill Sans & Frutiger 무료 대체 폰트: 영국과 스위스의 휴머니스트 명작',
    metaTitle: 'Gill Sans 및 Frutiger 무료 대체 Google Fonts | ProFontFinder',
    description: '휴머니스트 산세리프 가독성의 정점인 Gill Sans와 Frutiger. 사인물과 기업 브랜딩에 최적인 무료 Google Fonts 대안을 소개합니다.',
    category: '폰트 대체',
    date: '2026년 10월',
    readTime: '6분 소요',
    author: '타이포그래피 엔지니어링 팀',
    heroExcerpt: '에릭 길의 인간미 넘치는 기하학과 아드리안 프루티거의 공항 사인 가독성은 타이포그래피의 큰 축입니다. Cabin, Source Sans 3 등의 무료 대안을 탐색해보세요.',
    keywords: [
      'Gill Sans 무료 대체 폰트',
      'Frutiger 대체 Google Fonts',
      '휴머니스트 산세리프 무료 서체',
      'Cabin vs Gill Sans'
    ],
    contentHtml: `
      <h2>휴머니스트 산세리프의 승리</h2>
      <p>자(Ruler)와 컴퍼스에 의존하는 그로테스크 서체(Helvetica 등)와 달리, <strong>휴머니스트 산세리프</strong>는 르네상스 캘리그래피와 고전 로마 석문 비례에서 출발합니다. 이 분야를 대표하는 두 거장은 에릭 길(Eric Gill)의 <strong>Gill Sans</strong>(1928년)와 아드리안 프루티거(Adrian Frutiger)의 <strong>Frutiger</strong>(1976년)입니다.</p>

      <p>Gill Sans는 "영국의 헬베티카"라 불리며 <strong>BBC, 펭귄 북스, 영국 철도, 런던 지하철 안내판</strong>에 광범위하게 쓰였습니다. Frutiger는 파리 샤를 드골 공항의 사인 시스템을 위해 개발되어, 어두운 조명과 움직이는 무빙워크 위에서도 즉시 읽히는 압도적 가독성을 지녔습니다.</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">휴머니스트 서체의 구조적 본질:</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>고전적 비율:</strong> 로마 대문자의 다양한 폭 비율('E'와 'B'는 좁고, 'M'과 'O'는 넓음)을 반영.</li>
          <li>• <strong>2층 구조의 'g'와 'a':</strong> 'g'에는 귀와 닫힌 아래 루프가, 'a'에는 아치와 꼬리가 존재.</li>
          <li>• <strong>열린 조형(Open Apertures):</strong> 'c', 'e', 's'의 단면이 시원하게 열려 있어 글자 뭉침을 차단.</li>
          <li>• <strong>캘리그래피적 뉘앙스:</strong> 미세한 획 두께 변화가 장문 독서 시 편안한 안정감을 제공.</li>
        </ul>
      </div>

      <h2>1. Cabin (Pablo Impallari 제작) — Gill Sans의 현대적 도플갱어</h2>
      <p>아르헨티나의 타입 디자이너 Pablo Impallari가 제작한 <strong>Cabin</strong>은 에릭 길의 비율에 현대 디지털 인체공학을 녹여낸 서체입니다. 특유의 인간미와 둥근 곡선, 경사진 터미널 컷을 계승하여 본문과 제목 모두에서 탁월한 조화를 보여줍니다.</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>견본: CABIN (OFL 100% 완전 무료)</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">96% GILL SANS 유사도</span>
        </div>
        <p class="text-2xl sm:text-3xl font-medium text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Cabin', sans-serif;">
          The British Library & Classic Penguin Paperback Collection.
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap');
font-family: 'Cabin', sans-serif;</code></pre>
      </div>

      <h2>2. Source Sans 3 (Adobe / Paul D. Hunt 제작) — Frutiger를 잇는 궁극의 실용 서체</h2>
      <p>Adobe 최초의 오픈소스 폰트인 <strong>Source Sans</strong>는 Frutiger의 기능적 가독성에서 직접적인 영감을 받았습니다. 시원한 x-하이트와 자연스러운 리듬감으로 모던 웹 UI와 기술 문서에서 가장 널리 쓰이는 서체 중 하나입니다.</p>

      <h2>3. Hind (Indian Type Foundry 제작) — 정갈한 휴머니스트 기하학</h2>
      <p>Indian Type Foundry가 개발한 <strong>Hind</strong>는 평평한 터미널과 안정적인 수직 기둥을 통해 아드리안 프루티거의 공공 사인물처럼 정돈된 시각적 무게감을 선사합니다.</p>
    `
  }
];
