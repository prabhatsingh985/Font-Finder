import type { BlogArticle } from './types';

export const ARTICLES_JA: BlogArticle[] = [
  {
    slug: 'free-alternatives-to-helvetica',
    title: '実際に使えるHelveticaの無料代替Google Fonts厳選',
    metaTitle: 'Helvetica（ヘルベチカ）の無料代替Google Fonts厳選 | ProFontFinder',
    description: '世界で最も使われているHelvetica Neueの無料オープンソース代替フォント。スイスモダニズムの骨格とCSS設定を徹底解説。',
    category: 'フォント代替',
    date: '2026年9月',
    readTime: '読了時間: 6分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: '広く使われているHelvetica Neueですが、商用ライセンス料は高額です。デザインの骨格や視認性を忠実に受け継いだ完全無料のGoogle Fonts代替フォントを紹介します。',
    keywords: [
      'Helvetica 代替 フォント',
      'ヘルベチカ 代替 無料',
      'Helvetica Google Fonts',
      'Inter ヘルベチカ 比較',
      'ネオグロテスク フリーフォント'
    ],
    contentHtml: `
      <h2>なぜHelveticaに実用的な無料代替フォントが必要なのか</h2>
      <p>1957年にハース活字鋳造所でマックス・ミーディンガーとエドゥアルト・ホフマンによってデザインされたHelveticaは、世界で最も認知されているネオ・グロテスク書体です。中立的なトーン、均一な垂直ストローク、水平にカットされた終端部により、多くのグローバル企業のブランドや公共サインの標準となってきました。</p>
      
      <p>しかし、現代のWeb開発者やスタートアップ、デジタルデザイナーにとって、Monotypeから<strong>Helvetica Neue</strong>や<strong>Helvetica Now</strong>の商用ライセンスを購入することは高額な費用（1ウェイトあたり35〜65ドル以上、アプリやWeb配信では年間数十万〜数百万円規模）が発生します。</p>

      <p>幸いなことに、オープンソースタイポグラフィの進化により、費用を一切かけずにスイス・モダニズムの明快さを再現できる高品質な代替フォントが複数登場しています。</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">Helveticaの構造的特徴：</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>水平なストローク終端：</strong> 'a', 'c', 'e', 's' などの文字端が水平にまっすぐカットされています。</li>
          <li>• <strong>高いx-ハイト：</strong> 小文字の高さが大文字の約70〜72%を占め、画面上でも高い可読性を維持します。</li>
          <li>• <strong>モノラインな太さ均一性：</strong> 縦線と横線の太さの差（コントラスト）が極めて少なく設計されています。</li>
          <li>• <strong>引き締まった字間：</strong> 閉じたカウンターと均整のとれた文字スペーシング。</li>
        </ul>
      </div>

      <h2>1. Inter（Rasmus Andersson作）— デジタルUIの最高峰代替フォント</h2>
      <p><strong>Inter</strong>は、現代のオープンソースUIタイポグラフィの金字塔として世界中で称賛されています。FigmaのデザイナーであったRasmus Anderssonによって設計され、特にディスプレイ画面やピクセルグリッド上での高い可読性を目指して開発されました。</p>
      
      <p>InterはHelveticaの高いx-ハイト、中立的な文字骨格、水平のカットを踏襲しながらも、12px〜14pxなどの極小テキストで文字が潰れないよう光学的な調整が施されています。</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>見本：INTER（OFL 100% 完全無料）</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">視覚的一致率: 98%</span>
        </div>
        <p class="text-2xl sm:text-3xl font-normal text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Inter', sans-serif;">
          The quick brown fox jumps over the lazy dog. 0123456789
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
font-family: 'Inter', sans-serif;</code></pre>
      </div>

      <h2>2. Roboto（Google作）— スタイリッシュな実用サンセリフ</h2>
      <p>GoogleのAndroidエコシステムのためにChristian Robertsonによって作られた<strong>Roboto</strong>は、ネオ・グロテスクの基盤に開放的な幾何学カーブを融合させています。全体のページリズムと洗練された佇まいにより、Helveticaの代替として極めて自然に機能します。</p>

      <h2>3. Arimo（Steve Matteson作）— 寸法互換（メトリクス互換）フォント</h2>
      <p>伝説的タイプデザイナーSteve Mattesonが手掛けた<strong>Arimo</strong>は、ArialやHelveticaと正確な文字幅・行送りを共有するメトリクス互換フォントです。既存のPDFやレイアウトを崩さずにフォントを差し替えたい場合に最適です。</p>

      <h2>比較表：Helveticaと無料代替フォント</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e2e4e8] dark:border-[#23252a] text-[#64748b] dark:text-[#8a8f98] font-mono">
              <th class="py-3 px-4">フォント名</th>
              <th class="py-3 px-4">ライセンス費用</th>
              <th class="py-3 px-4">ライセンス種別</th>
              <th class="py-3 px-4">最適用途</th>
              <th class="py-3 px-4">一致率</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e2e4e8] dark:divide-[#23252a]">
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Helvetica Neue</td>
              <td class="py-3 px-4 text-[#ef4444] font-mono">$35〜/ウェイト</td>
              <td class="py-3 px-4">商用有償EULA</td>
              <td class="py-3 px-4">大企業印刷物・CIブランド</td>
              <td class="py-3 px-4 font-mono">100%（原本）</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#16a34a] dark:text-[#10b981]">Inter</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">完全無料 ($0)</td>
              <td class="py-3 px-4">SIL Open Font License</td>
              <td class="py-3 px-4">Webアプリ、SaaS、UI全般</td>
              <td class="py-3 px-4 font-mono text-[#16a34a]">98% 一致</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Roboto</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">完全無料 ($0)</td>
              <td class="py-3 px-4">Apache 2.0</td>
              <td class="py-3 px-4">モバイルアプリ、オウンドメディア</td>
              <td class="py-3 px-4 font-mono">92% 一致</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-[#08090a] dark:text-[#ffffff]">Arimo</td>
              <td class="py-3 px-4 text-[#16a34a] font-mono">完全無料 ($0)</td>
              <td class="py-3 px-4">Apache 2.0</td>
              <td class="py-3 px-4">PDF帳票、文書印刷</td>
              <td class="py-3 px-4 font-mono">95% 一致</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    slug: 'free-alternatives-to-futura-gotham-proxima-nova',
    title: 'Futura・Gotham・Proxima Novaの無料代替Google Fonts決定版',
    metaTitle: 'Futura・Gotham・Proxima Novaの無料代替Google Fonts | ProFontFinder',
    description: 'モダン幾何学サンセリフの3大巨頭Futura・Gotham・Proxima Novaに完全対応する無料Google Fonts（Jost, Montserrat, Poppins）を徹底比較。',
    category: 'フォント代替',
    date: '2026年9月',
    readTime: '読了時間: 7分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'Futura、Gotham、Proxima Novaは現代の幾何学サンセリフにおける3大定番です。これらが放つ圧倒的なブランディング力を、商用フリーのオープンソースフォントで再現する方法を解説します。',
    keywords: [
      'Futura 代替 フォント',
      'Gotham フォント 代替 無料',
      'Proxima Nova Google Fonts 代替',
      'Jost Futura 比較',
      'Montserrat Gotham 比較'
    ],
    contentHtml: `
      <h2>幾何学サンセリフの3大名作</h2>
      <p>ブランディングやデジタルデザインにおいて、見出しやロゴで絶大な人気を誇る3つの書体があります。バウハウスの幾何学精神を極めた<strong>Futura</strong>、ニューヨークの建築的看板から生まれた<strong>Gotham</strong>、そして現代Webのスタンダード<strong>Proxima Nova</strong>です。</p>

      <p>いずれも力強く洗練されたビジュアルを作りますが、これらすべてにライセンス料を支払うと数十万円単位のコストがかかります。100%無料のGoogle Fontsを活用して、同等のデザイン品質を担保する手法をご紹介します。</p>

      <h2>1. Futuraの最適な無料代替：Jost</h2>
      <p>Paul Rennerによって1927年に作られたFuturaは、円・三角・四角の純粋な幾何学形状から成り立っています。'A'や'M'の鋭角な先端や、完璧な円を描く'O'が特徴です。</p>
      <p><strong>Jost</strong>は、Futuraへのオマージュとして設計されたオープンソースフォントであり、9つのウェイトと完全な幾何学的カーブを備えています。</p>

      <h2>2. Gothamの最適な無料代替：Montserrat</h2>
      <p>ブエノスアイレスの伝統的な看板文字から着想を得た<strong>Montserrat</strong>は、Gothamの代替として世界中で愛されています。幅広で誇らしげな大文字のプロポーションとしっかりとした幾何学的構造が共通しています。</p>

      <h2>3. Proxima Novaの最適な無料代替：Work Sans & Nunito Sans</h2>
      <p>幾何学的なモダンさと人間味あふれる可読性を両立したProxima Novaには、<strong>Work Sans</strong>や<strong>Nunito Sans</strong>が最適です。適度な文字幅とすっきりした字形が長文でも高い視認性を保ちます。</p>
    `
  },
  {
    slug: 'font-licensing-explained',
    title: 'フォントライセンスの基本解説：Desktop、Webfont、App、オープンソースの違い',
    metaTitle: 'フォントライセンス解説：Web・商用利用・OFL規約 | ProFontFinder',
    description: '商用フォントのDesktop、Webfont、Appライセンスの違いから、Google FontsのSIL Open Font License (OFL) が100%安全に商用利用できる理由まで徹底解説。',
    category: 'ライセンスと規約',
    date: '2026年9月',
    readTime: '読了時間: 5分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'フォントのライセンス違反トラブルは高額で頻発しています。商用ライセンスの適用範囲、WebフォントのPV制限、そしてGoogle Fontsが商用利用で100%安全な理由を解説します。',
    keywords: [
      'フォント ライセンス 商用利用',
      'Webフォント ライセンス 仕組み',
      'Google Fonts 商用利用 安全',
      'SIL Open Font License 日本語 解説',
      'フォント 著作権 トラブル'
    ],
    contentHtml: `
      <h2>タイポグラフィの法的な真実</h2>
      <p>日本や欧米の法域において、文字の形状デザインそのものは特許と異なり保護が限定的ですが、<strong>フォントファイル（.ttf、.otf、.woff2）はコンピュータプログラム（ソフトウェア著作物）として厳格に著作権法で保護されています</strong>。</p>

      <p>つまり、フォントを購入またはダウンロードする行為は「文字を買う」のではなく、「そのフォントファイルを特定の条件下で使用する<strong>許諾権（EULAライセンス）</strong>を購入する」ことを意味します。</p>

      <h2>商用フォントの主な4大ライセンス形態</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">1. デスクトップライセンス</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">指定された台数のPCへのインストールを許可。印刷物、画像ロゴ、PDF出力などの静的画像作成に限定されます。</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">2. Webフォントライセンス</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">CSS @font-face経由でのWeb配信を許可。月間ページビュー（PV）に応じた従量課金や制限が課されるのが一般的です。</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">3. アプリケーション組み込み</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">iOSやAndroidアプリのバイナリ内にフォントファイルを同梱して配布する場合に必須となる高額ライセンスです。</p>
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a]">
          <h3 class="font-bold text-[#08090a] dark:text-[#ffffff] text-base mb-2">4. 放送・サーバー生成</h3>
          <p class="text-xs text-[#475569] dark:text-[#8a8f98]">テレビ放送、動画テロップ、エンドユーザーが名刺やTシャツを編集・自動生成するWebサービス等で必要です。</p>
        </div>
      </div>

      <h2>Google FontsとSIL OFLが完全に安全である理由</h2>
      <p>Google Fontsカタログ内の大半の書体は、<strong>SIL Open Font License (OFL) v1.1</strong> または <strong>Apache 2.0</strong> のもとで提供されています。</p>

      <ul class="space-y-3 text-sm text-[#475569] dark:text-[#8a8f98] my-6">
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>商用利用が100%無料：</strong> ロイヤリティや利用料なしで、商用Webサイト、アプリ、ロゴ、印刷物に自由に使用できます。</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>PV数上限なし：</strong> 月間数百万・数千万PVの大規模メディアでも追加費用は発生しません。</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-[#16a34a] font-bold">✓</span>
          <span><strong>セルフホスティング対応：</strong> フォントファイルをダウンロードして自社CDNから配信することも完全に合法です。</span>
        </li>
      </ul>
    `
  },
  {
    slug: 'how-image-font-identification-works',
    title: 'AI画像フォント特定の仕組み：ブラウザ内OCRと形状ベクトルの裏側',
    metaTitle: 'AI画像フォント特定の技術解説：クライアントサイドOCR | ProFontFinder',
    description: 'HTML5 Canvas、輪郭抽出、16×16ベクトル指紋照合による完全クライアントサイド・フォント特定の仕組みを詳しく解説。',
    category: 'AI技術と仕組み',
    date: '2026年9月',
    readTime: '読了時間: 6分',
    author: 'システム開発責任者',
    heroExcerpt: '従来のフォント特定ツールは画像を外部サーバーへ送信していました。完全クライアントサイドで文字の輪郭を抽出し、1,935以上のフォントと瞬時に照合する技術を解説します。',
    keywords: [
      '画像 フォント 特定 仕組み',
      'フォント 検索 AI アルゴリズム',
      'ブラウザ内 OCR Canvas',
      'タイポグラフィ ベクトル照合'
    ],
    contentHtml: `
      <h2>フォント特定技術の革新</h2>
      <p>かつて画像からフォントを調べるには、外部の有料サーバーに画像をアップロードし、遅いキューを待つか、フォーラムに投稿して専門家に尋ねる必要がありました。</p>

      <p>最新のWeb標準技術（HTML5 Canvas API、Web Workers、SIMD配列演算）により、文字認識からベクトルの類似度判定まで、すべてをユーザーのブラウザメモリ内だけでミリ秒単位で実行できるようになりました。</p>

      <h2>クライアントサイド解析の4段階</h2>
      <h3>第1段階：コントラスト正規化と二値化</h3>
      <p>画像を貼り付けると、オフスクリーンCanvas上でグレースケール変換と大津の二値化アルゴリズムが実行され、文字と背景が完璧に分離されます。</p>

      <h3>第2段階：輪郭幾何学の抽出</h3>
      <p>文字の境界を特定し、x-ハイト比率、アスペクト比、ストロークの太さコントラスト、セリフ（ウロコ）の有無を即座に測定します。</p>

      <h3>第3段階：16×16ベクトル照合</h3>
      <p>正規化された文字形状を256次元ベクトルに圧縮し、あらかじめ計算されたデータベースとコサイン類似度で照合します。</p>

      <h3>第4段階：複数文字のコンセンサス判定</h3>
      <p>単一の文字だけでなく単語全体の複数文字の結果を統合し、最も確率の高いフォントをランキング表示します。</p>
    `
  },
  {
    slug: 'free-alternatives-to-avenir-and-circular-std',
    title: 'Avenir & Circular Std（Spotify採用フォント）の無料代替フォント',
    metaTitle: 'AvenirとCircular Stdの無料代替Google Fonts | ProFontFinder',
    description: 'SpotifyやAirbnbのブランドデザインを象徴する幾何学サンセリフの無料代替フォント。Plus Jakarta SansやFigtreeの活用法。',
    category: 'フォント代替',
    date: '2026年10月',
    readTime: '読了時間: 7分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'SpotifyやAirbnbのブランドを定義する洗練された幾何学フォント。高い幾何学的精度と親しみやすいリズムを併せ持つ無料Google Fontsを紹介します。',
    keywords: [
      'Avenir 代替 フォント',
      'Circular Std 無料 代替',
      'Spotify フォント Google Fonts',
      'Plus Jakarta Sans Circular 比較'
    ],
    contentHtml: `
      <h2>親しみやすい幾何学サンセリフの系譜</h2>
      <p>冷たく機械的になりがちな幾何学フォントに、あたたかな人間味を加えたのが<strong>Avenir</strong>（Adrian Frutiger作）と<strong>Circular Std</strong>（Laurenz Brunner作）です。</p>

      <p>特にCircular StdはSpotifyやAirbnb、Mintのコーポレートフォントとして採用され、現代のデジタルプロダクトデザインの代表格となりました。これらと見分けがつかないほどの高い親和性を持つGoogle Fontsをご紹介します。</p>

      <h2>1. Plus Jakarta Sans — Circular Stdの最有力代替</h2>
      <p>ジャカルタ特別州のデザインシステムのために作られた<strong>Plus Jakarta Sans</strong>は、Circular Stdの無料代替として最も評価の高いフォントです。完璧な円形のカウンターと端正な水平終端を持ち、SpotifyのUIのような親しみやすくモダンなトーンを完全再現できます。</p>

      <h2>2. Figtree — 直感的なUIフォントの傑作</h2>
      <p>UIデザイナーErik Kennedyによって設計された<strong>Figtree</strong>は、Avenirの清潔感とCircularの丸みを両立させた書体で、SaaSダッシュボードやモバイルアプリに最適です。</p>
    `
  },
  {
    slug: 'free-alternatives-to-didot-and-bodoni',
    title: 'Didot & Bodoniの無料代替フォント：高級ブランド・ラグジュアリー誌の定番',
    metaTitle: 'DidotとBodoniの無料代替セリフフォント | ProFontFinder',
    description: 'VogueやHarper\'s Bazaarを飾る極上のモダンセリフ体Didot・Bodoni。強烈なコントラストと極細ヘアラインを無料Google Fontsで再現。',
    category: 'フォント代替',
    date: '2026年10月',
    readTime: '読了時間: 6分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'Vogueやハーパーズ バザーが体現する圧倒的な気品。垂直の強いコントラストと極細のヘアラインセリフを美しく再現する無料Google Fontsを厳選。',
    keywords: [
      'Didot 代替 フォント',
      'Bodoni 無料 代替 Google Fonts',
      '高級感 セリフ体 フリー',
      'Vogue フォント 代替'
    ],
    contentHtml: `
      <h2>タイポグラフィの貴族：ディドンスタイル</h2>
      <p>18世紀末、パリのフィルマン・ディドとパルマのジャンバッティスタ・ボドニによって完成された<strong>ディドン様式（モダンセリフ）</strong>。極端に太い垂直ストロークと紙のように薄い水平ヘアラインの対比は、ハイファッションや高級フレグランスの代名詞となりました。</p>

      <h2>1. Bodoni Moda — 圧倒的な再現度を誇る傑作</h2>
      <p><strong>Bodoni Moda</strong>は、光学サイズ軸（opsz）を備えたオープンソースのバリアブルフォントです。大きな見出しでは極限まで細い優雅なヘアラインを描き、デジタル画面でも一流メゾンの品格を放ちます。</p>

      <h2>2. Playfair Display — 編集デザインの王道</h2>
      <p>高いコントラストと繊細なティアドロップ端を持つ<strong>Playfair Display</strong>は、ラグジュアリーなライフスタイルサイトやレストランのメニューに最適な無料フォントです。</p>
    `
  },
  {
    slug: 'how-to-find-fonts-from-instagram-and-tiktok',
    title: 'インスタリールやTikTokの動画からフォントを特定する方法',
    metaTitle: 'インスタリール＆TikTok動画のフォント特定ガイド | ProFontFinder',
    description: 'SNSショート動画のトレンドフォントを特定する実用ワークフロー。スクショの最適な撮り方と無料の類似フォントの見つけ方。',
    category: 'フォント特定ガイド',
    date: '2026年10月',
    readTime: '読了時間: 5分',
    author: '画像認識・OCR技術チーム',
    heroExcerpt: 'SNSショート動画のトレンドを左右するタイポグラフィ。動画から文字を鮮明に切り出し、AI画像認識で30秒以内にフォントを特定する実用手順を解説します。',
    keywords: [
      'インスタ フォント 特定',
      'TikTok テロップ フォント 調べる',
      'リール 動画 フォント 検索',
      'CapCut 字幕 フォント'
    ],
    contentHtml: `
      <h2>ショート動画時代のタイポグラフィ</h2>
      <p>Instagramリール、TikTok、YouTubeショートにおいて、視聴維持率を左右するのがテロップフォントです。人気クリエイターが使う印象的なフォントを調べる方法を解説します。</p>

      <h2>ステップ1：最も鮮明なコマで一時停止</h2>
      <p>アニメーション中やフェード中ではなく、文字が完全に静止して不透明度が100%になった瞬間を狙ってスクリーンショットを撮影します。</p>

      <h2>ステップ2：余計な背景を除外してトリミング</h2>
      <p>顔や動画の派手な背景を含めず、はっきりした文字を2〜4文字程度タイトに切り抜くことがAI判定の精度を高める最大のコツです。</p>

      <h2>ステップ3：ProFontFinderにドロップ</h2>
      <p>切り抜いた画像をProFontFinderにドロップするだけで、数秒で一致するフォントと無料Google Fontsの代替候補が提示されます。</p>
    `
  },
  {
    slug: 'free-alternatives-to-gill-sans-and-frutiger',
    title: 'Gill Sans & Frutigerの無料代替フォント：英国＆スイスの至高クラシック',
    metaTitle: 'Gill SansとFrutigerの無料代替フォント | ProFontFinder',
    description: 'BBCや空港サインで実証されたヒューマニストサンセリフの最高峰。CabinやSource Sans 3による商用無料Google Fonts代替。',
    category: 'フォント代替',
    date: '2026年10月',
    readTime: '読了時間: 6分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'エリック・ギルの人間味あふれる幾何学と、アドリアン・フルティガーの空港サイン用視認性。現代のWebでも使える優れたオープンソース代替フォントを探索します。',
    keywords: [
      'Gill Sans 代替 フォント',
      'Frutiger 代替 Google Fonts',
      'ヒューマニスト サンセリフ 無料',
      'Cabin Gill Sans 比較'
    ],
    contentHtml: `
      <h2>ヒューマニストサンセリフの真価</h2>
      <p>機械的な定規とコンパスに頼る幾何学フォントとは異なり、ルネサンス期の古典的プロポーションを基礎にしたのが<strong>ヒューマニストサンセリフ</strong>です。</p>

      <p>英国のBBCやペンギンブックスで愛された<strong>Gill Sans</strong>、そしてシャルル・ド・ゴール空港の誘導標識のために設計された<strong>Frutiger</strong>は、遠距離や悪条件下でも抜群の視認性を誇ります。</p>

      <h2>1. Cabin — モダンなGill Sansの兄弟フォント</h2>
      <p><strong>Cabin</strong>は、Gill Sansの有機的なプロポーションを受け継ぎながら、現代のディスプレイ表示に最適化されたオープンソースフォントです。</p>

      <h2>2. Source Sans 3 — Frutiger譲りの抜群の視認性</h2>
      <p>Adobe初のオープンソースフォントである<strong>Source Sans</strong>は、Frutigerの機能主義的アプローチを忠実に再現しており、技術文書やWeb UIに最適です。</p>
    `
  }
];
