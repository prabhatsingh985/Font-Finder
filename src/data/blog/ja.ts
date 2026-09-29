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

      <h2>4. TeX Gyre Heros — 歴史的Groteskのリバイバル</h2>
      <p>ポーランドのGUST e-foundryによって開発された<strong>TeX Gyre Heros</strong>は、正規ライセンスクローンであるURW Nimbus Sansをベースにしており、デジタル以前のクラシックなHelvetica Neueの幾何学プロポーションを忠実に再現しています。</p>

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

      <h2>プロジェクトに応じた最適な選択法</h2>
      <p>WebアプリやSaaSインターフェースを開発する場合は、間違いなく<strong>Inter</strong>が最高峰の選択肢です。紙面レイアウトの崩れを防ぎたい印刷物や帳票には、<strong>Arimo</strong>または<strong>TeX Gyre Heros</strong>を推奨します。</p>
    `
  },
  {
    slug: 'free-alternatives-to-futura-gotham-proxima-nova',
    title: 'Futura・Gotham・Proxima Novaの無料代替Google Fonts決定版',
    metaTitle: 'Futura・Gotham・Proxima Novaの無料代替Google Fonts | ProFontFinder',
    description: 'モダン幾何学サンセリフの3大巨頭Futura・Gotham・Proxima Novaに完全対応する無料Google Fonts（Jost, Montserrat, Poppins）を徹底比較。',
    category: 'フォント代替',
    date: '2026年9月',
    readTime: '7分 読了時間',
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
      <p>ブランディングやデジタルデザインにおいて、見出しやロゴで絶大な人気を誇る3つの幾何学サンセリフ書体があります。バウハウスの幾何学精神を極めた<strong>Futura</strong>、ニューヨークの建築的看板から生まれた<strong>Gotham</strong>、そして現代Webのスタンダード<strong>Proxima Nova</strong>です。</p>

      <p>いずれも力強く洗練されたビジュアルを作りますが、これらすべてにライセンス料を支払うと数十万円単位のコストがかかります。100%無料のGoogle Fontsを活用して、同等のデザイン品質を担保する手法をご紹介します。</p>

      <h2>第1部：Futuraの最適な無料代替フォント</h2>
      <p>Paul Rennerによって1927年に作られたFuturaは、円・三角・四角の純粋な幾何学形状から成り立っています。'A'や'M'の鋭角な先端や、完璧な円を描く'O'が特徴です。</p>

      <h3>1. Jost（indestructible type*作）— 忠実なFuturaリバイバル</h3>
      <p><strong>Jost</strong>は、Futuraへのオマージュとして設計されたオープンソースのバリアブルフォントです。厳格なバウハウスの哲学を継承し、9つのウェイトにわたって鋭角なアペックスと純粋な幾何学円環を備えています。</p>

      <h3>2. Poppins（Indian Type Foundry作）— モダンな幾何学フォント</h3>
      <p>Poppinsはわずかにソフトな終端を持ちますが、ExtraBoldやBlackウェイトはFutura Boldと全く同等の力強い幾何学的インパクトを与えます。</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-4 overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700;800&display=swap');
font-family: 'Jost', sans-serif;</code></pre>

      <h2>第2部：Gothamの最適な無料代替フォント</h2>
      <p>Tobias Frere-Jonesによって制作され、オバマ大統領の2008年選挙キャンペーンで一躍世界標準となった<strong>Gotham</strong>。マンハッタンの建築サインに着想を得た幅広の大文字プロポーションと重厚な存在感を誇ります。</p>

      <h3>1. Montserrat（Julieta Ulanovsky作）— 世界定番のGotham代替</h3>
      <p>ブエノスアイレスの歴史地区モンセラートの看板文字から着想を得た<strong>Montserrat</strong>は、世界で最も使われているオープンソースGotham代替フォントです。堂々とした大文字の幅と完璧な幾何学バランスを持ちます。</p>

      <h3>2. Figtree（Erik Kennedy作）— 親しみやすいモダンハイブリッド</h3>
      <p>クリーンな円形カウンターを持つFigtreeは、Gothamの力強いプロポーションに現代UIらしい親しみやすさを付加しています。</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-4 overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
font-family: 'Montserrat', sans-serif;</code></pre>

      <h2>第3部：Proxima Novaの最適な無料代替フォント</h2>
      <p>Mark Simonsonによる<strong>Proxima Nova</strong>は、Futuraの純粋幾何学とAkzidenz-Groteskのヒューマニストな可読性を理想的にブレンドした「Webで最も愛されたフォント」です。</p>

      <h3>1. Work Sans（Wei Huang作）</h3>
      <p>画面上の本文と見出しの両方に最適化されたWork Sansは、Proxima Novaを有名にした寛容なカウンターとクリアなリズムを忠実に再現します。</p>

      <h3>2. Nunito Sans（Vernon Adams & Jacques Le Bailly作）</h3>
      <p>Nunito Sansは、すっきりとした端部カットと優れたウェイト展開を備えたバランスの良い幾何学サンセリフです。</p>

      <h2>総合比較レファレンスガイド</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e2e4e8] dark:border-[#23252a] text-[#64748b] dark:text-[#8a8f98] font-mono">
              <th class="py-3 px-4">有料対象フォント</th>
              <th class="py-3 px-4">フォントファウンドリ</th>
              <th class="py-3 px-4">推奨無料代替フォント</th>
              <th class="py-3 px-4">一致率</th>
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
        <li class="flex items-start gap-2">
          <span class="text-[#ef4444] font-bold">✗</span>
          <span><strong>唯一の禁止事項：</strong> フォントファイル単体を取り出して転売・販売することは禁止されています（成果物デザインの一部として利用するのは自由）。</span>
        </li>
      </ul>

      <h2>クライアント案件でのフォント特定と法的リスク回避</h2>
      <p>クライアント案件やリニューアル案件を引き継ぐ際は、必ず<a href="/ja/" class="text-[#ff4d00] dark:text-[#e4f222] font-semibold underline">ProFontFinder</a>などの特定ツールを用いて使用フォントを監査してください。有償フォントが使われておりクライアントがWebフォントライセンスを所有していない場合は、直ちに同等のGoogle Fonts代替へ切り替えることで、法的トラブルを未然に防止できます。</p>
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

      <h2>クライアントサイド解析の4段階パイプライン</h2>

      <h3>第1段階：コントラスト正規化と二値化</h3>
      <p>画像を貼り付けると（<kbd class="font-mono text-xs bg-white dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a] px-1.5 py-0.5 rounded">Ctrl+V / ⌘V</kbd>）、オフスクリーンCanvas上で輝度マッピングが実行されます：
      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-2 text-[#1e293b] dark:text-[#d0d6e0]"><code>Y = 0.299*R + 0.587*G + 0.114*B</code></pre>
      大津の二値化アルゴリズム（Otsu Thresholding）により、文字グリフと背景ノイズが瞬時に分離されます。</p>

      <h3>第2段階：幾何学的輪郭の抽出</h3>
      <p>文字の境界を特定し、基本的なタイポグラフィ比率を測定します：
      <ul class="space-y-1.5 text-sm text-[#475569] dark:text-[#8a8f98] my-3">
        <li>• <strong>アスペクト比と幅指数：</strong> 凝縮フォント（Oswald）と広幅フォント（Montserrat）を区別。</li>
        <li>• <strong>x-ハイト比率：</strong> 高いx-ハイトのネオグロテスクと古典的セリフを識別。</li>
        <li>• <strong>ストロークコントラスト：</strong> 縦線と横線の太さの比率を評価。</li>
        <li>• <strong>セリフ（うろこ）検出：</strong> 文字端部の突起とセリフの有無を測定。</li>
      </ul>
      </p>

      <h3>第3段階：16×16ベクトル指紋照合</h3>
      <p>ネットワーク通信なしで数千フォントから瞬時に特定するため、正規化されたグリフ形状を16×16のビット行列（256次元ベクトル）に圧縮し、コサイン類似度で照合します：</p>

      <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] my-3 text-[#1e293b] dark:text-[#d0d6e0]"><code>similarity = (VectorA · VectorB) / (||VectorA|| * ||VectorB||)</code></pre>

      <h3>第4段階：複数文字によるコンセンサス判定</h3>
      <p>単一の文字だけでなく、切り取られた単語全体の複数文字の結果を統合し、最も確率の高いフォントをランキング表示します。</p>

      <h2>100%クライアントサイド処理とプライバシー保護</h2>
      <p>デザインの現場では、未公開の新製品や社外秘のブランドロゴなどを扱うことが日常茶飯事です。ProFontFinderはすべての処理をブラウザのローカルメモリ上でのみ完結させるため、画像データが外部クラウドサーバーに一切送信されず、情報漏洩のリスクはゼロです。</p>
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
      <p>Futuraが1920年代の厳格で機械的なバウハウス幾何学を象徴する一方で、その冷たさを和らげ、デジタル時代に親しみやすい完成度をもたらした2つの名作があります。伝説的スイスの巨匠Adrian Frutigerが1988年に制作した<strong>Avenir</strong>、そしてLaurenz Brunnerが設計し2013年にLinetoからリリースされた<strong>Circular Std</strong>です。</p>
      
      <p>AvenirはApple Mapsの標準フォントとして採用され、BloombergやDisneyにも愛用されています。一方Circular Stdは、<strong>Spotify、Airbnb、Mint</strong>の象徴的なブランドボイスとなり、丸みを帯びた高い可読性を持つ幾何学ブランディングの世界的トレンドを巻き起こしました。</p>

      <p>しかし、LinetoのCircular StdやMonotypeのAvenir Nextの商用ライセンスは、1ウェイトあたり80〜150ドルを超える高額なものです。Google Fontsで完全無料で使用できる最高峰の代替フォントをご紹介します。</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">Circular & Avenirの重要な共通特徴：</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>円形のボウル（Circular Bowls）：</strong> 'b', 'd', 'p', 'q', 'o' に見られる完璧な幾何学円環カウンター。</li>
          <li>• <strong>ヒューマニストの温かみ：</strong> 鋭利な直線ではなく、柔らかな曲線を持つ文字造形。</li>
          <li>• <strong>開放的な開口部（Apertures）：</strong> 低解像度やスマホ画面でも文字同士が潰れない広い文字内部空間。</li>
          <li>• <strong>ゆとりある字間設計：</strong> モバイルアプリの画面表示に最適化された現代的なリズム。</li>
        </ul>
      </div>

      <h2>1. Plus Jakarta Sans（Tokotype作）— Circular Stdの最有力代替フォント</h2>
      <p>ジャカルタ特別州政府のデザインシステムのために開発された<strong>Plus Jakarta Sans</strong>は、Circular Stdの無料代替として世界中で圧倒的な支持を得ています。Circularと同じ丸みを帯びた円環カーブ、クリーンな終端、美しい水平リズムを共有しています。BoldやMediumウェイトで組むと、SpotifyのUIデザインとほとんど見分けがつきません。</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>見本：PLUS JAKARTA SANS（OFL 100% 完全無料）</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">視覚的一致率: 97%</span>
        </div>
        <p class="text-2xl sm:text-3xl font-semibold text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          Soundtrack your life. Millions of songs and podcasts.
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
font-family: 'Plus Jakarta Sans', sans-serif;</code></pre>
      </div>

      <h2>2. Figtree（Erik Kennedy作）— プロダクトUIに最適な代替フォント</h2>
      <p>UIデザイナーErik Kennedyによって設計された<strong>Figtree</strong>は、Webアプリにおける幾何学フォントの弱点を解消するために開発されました。Circularの豊かな丸みとAvenirの明瞭な可読性を併せ持ち、SaaSダッシュボードやモバイルアプリに最適な書体です。</p>

      <h2>3. Outfit（Rodrigo Fuenzalida作）— モダンブランドに最適な代替フォント</h2>
      <p>Outfit.ioプラットフォームのブランドフォントに着想を得た<strong>Outfit</strong>は、Avenirの端正なプロポーションを彷彿とさせる幾何学サンセリフです。細いウェイトはAvenir Lightの上品さを、太いウェイトは力強いブランディングを表現します。</p>

      <h2>4. Questrial（Joe Prince作）— 純粋な円形ミニマリズム</h2>
      <p>円と曲線を基盤に設計された<strong>Questrial</strong>は、AvenirやCentury Gothicが持つタイムレスな幾何学美を備えています。クリーンでモダンなロゴや見出しに最適です。</p>
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
      <p>18世紀末、パリのフィルマン・ディド（Firmin Didot）とパルマのジャンバッティスタ・ボドニ（Giambattista Bodoni）によって完成された<strong>ディドン様式（モダンセリフ）</strong>。極端に太い垂直ストロークと紙のように薄い水平ヘアラインの対比は、ハイファッションや高級フレグランスの代名詞となりました。</p>
      
      <p><em>Vogue、Harper's Bazaar、Giorgio Armani</em>のマスターヘッドに見られる圧倒的な気品と権威は、今も世界中のラグジュアリーブランディングの頂点です。本物のLinotype Didotなどのライセンスは極めて高額ですが、Google Fontsで完全無料で使用できる傑作があります。</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">ディドン様式の構造的特徴：</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>極端なストロークコントラスト：</strong> 太い縦軸と極細のヘアライン。</li>
          <li>• <strong>厳格な垂直応力（90° Vertical Stress）：</strong> 'O'や'C'などの曲線部に傾きが一切ありません。</li>
          <li>• <strong>フラットな直角セリフ：</strong> ブラケット（曲線の移行部）を持たず直角に接合するセリフ。</li>
          <li>• <strong>ティアドロップ端部：</strong> 'a', 'c', 'f', 'r' に見られる水滴のような美しいターミナル。</li>
        </ul>
      </div>

      <h2>1. Bodoni Moda（Indestructible Type作）— 最高峰の現代的マスターピース</h2>
      <p>Owen Earlによって設計された<strong>Bodoni Moda</strong>は、光学サイズ軸（opsz）を備えたオープンソースのバリアブルフォントです。大見出しサイズでは極限まで細く鋭いヘアラインを描き、デジタル画面でも一流メゾンの品格を放ちます。</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>見本：BODONI MODA（OFL 100% 完全無料）</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">視覚的一致率: 99%</span>
        </div>
        <p class="text-3xl sm:text-4xl font-normal text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3 italic" style="font-family: 'Bodoni Moda', serif;">
          Haute Couture Autumn / Winter Collection
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap');
font-family: 'Bodoni Moda', serif;</code></pre>
      </div>

      <h2>2. Playfair Display（Claus Eggers Sørensen作）— 編集デザインの王道</h2>
      <p>高いコントラストと繊細なティアドロップ端を持つ<strong>Playfair Display</strong>は、ラグジュアリーなライフスタイルサイトやレストランのメニューに最適な無料フォントです。</p>

      <h2>3. Cormorant Garamond（Christian Thalmann作）— 繊細で気品ある美しさ</h2>
      <p>極めて細いヘアラインと針のようなセリフを持ち、伝統的なフランス・ディドットを彷彿とさせる静謐なラグジュアリーの空気感を生み出します。</p>
    `
  },
  {
    slug: 'how-to-find-fonts-from-instagram-and-tiktok',
    title: 'インスタリールやTikTokの動画からフォントを特定する方法',
    metaTitle: 'インスタリール＆TikTok動画のフォント特定ガイド | ProFontFinder',
    description: 'SNSショート動画のトレンドフォントを特定する実用ワークフロー。スクショの最適な撮り方と無料の類似フォントの見つけ方。',
    category: 'フォント特定',
    date: '2026年10月',
    readTime: '読了時間: 5分',
    author: 'ビジュアルAI開発チーム',
    heroExcerpt: 'ショート動画の視聴維持率はタイポグラフィで決まります。スクリーンショットから文字を切り出し、AI画像認識で30秒以内に特定する手順を解説します。',
    keywords: [
      'インスタ フォント 特定',
      'TikTok テキスト フォント 調べる',
      'リール 動画 フォント 検索',
      'インスタストーリー フォント 調べる'
    ],
    contentHtml: `
      <h2>ショート動画におけるタイポグラフィの重要性</h2>
      <p>Instagramリール、TikTok、YouTubeショートにおいて、印象的なテキストテロップは視聴者の離脱を防ぐ最も強力な要素です。トップクリエイターが愛用する太字のイエローテロップや、レトロなタイプライター風フォントを見るたびに、「このフォントは何だろう？」と気になったことがあるはずです。</p>

      <p>動画からのフォント特定は、圧縮ノイズやモーションブラーがあるため工夫が必要です。ProFontFinderを使用して30秒で特定する確実なワークフローをご紹介します。</p>

      <h2>ステップ1：最も静止した鮮明なコマで一時停止する</h2>
      <p>文字がアニメーションで動いている瞬間ではなく、文字が完全に停止して不透明度100%になったキーフレームで一時停止してスクリーンショットを撮影します。</p>

      <h2>ステップ2：余計な要素（顔や動画背景）をトリミングする</h2>
      <p>スマホの画面全体をアップロードすると、背景の人物や風景の輪郭をAIが誤認識する原因になります。</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">高精度識別のためのベストプラクティス：</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>タイトにトリミング：</strong> 認識させたい2〜4単語の文字周りだけを切り抜きます。</li>
          <li>• <strong>背景とのコントラストが高い文字を選ぶ：</strong> 白や単色のテロップが最も認識精度が高くなります。</li>
          <li>• <strong>過度なネオングローを避ける：</strong> 発光エフェクトが強すぎる文字は避けてください。</li>
        </ul>
      </div>

      <h2>ステップ3：ProFontFinderの解析エンジンへドロップ</h2>
      <p>切り抜いた画像を<a href="/ja/" class="text-[#ff4d00] dark:text-[#e4f222] font-semibold underline">ProFontFinder</a>にアップロードまたはクリップボードから直接貼り付けます。文字の境界が瞬時に二値化され、類似フォントがランキング表示されます。</p>

      <h2>SNS動画で頻出する代表的フォントと無料代替：</h2>
      <ul class="space-y-3 text-sm text-[#475569] dark:text-[#8a8f98] my-4">
        <li>• <strong>Instagram「クラシック」：</strong> iOSでは<em>San Francisco</em>、Androidでは<em>Roboto</em>。無料代替：<a href="/fonts/roboto" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Roboto</a> または <a href="/fonts/inter" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Inter</a>。</li>
        <li>• <strong>Instagram「モダン」：</strong> オールキャップスの幾何学サンセリフ。無料代替：<a href="/fonts/montserrat" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Montserrat</a>（Bold/Blackウェイト）。</li>
        <li>• <strong>TikTok公式テロップ：</strong> <em>TikTok Display / Proxima Nova</em>。無料代替：<a href="/fonts/figtree" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Figtree</a> または <a href="/fonts/nunito-sans" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Nunito Sans</a>。</li>
        <li>• <strong>CapCut人気字幕：</strong> 定番の超極太コンデンスフォントは<em>The Bold Font</em>や<em>Bebas Neue</em>。無料代替：<a href="/fonts/bebas-neue" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Bebas Neue</a> または <a href="/fonts/anton" class="text-[#ff4d00] dark:text-[#e4f222] font-medium underline">Anton</a>。</li>
      </ul>
    `
  },
  {
    slug: 'free-alternatives-to-gill-sans-and-frutiger',
    title: 'Gill Sans & Frutigerの無料代替フォント：英国とスイスの名作ヒューマニスト',
    metaTitle: 'Gill SansとFrutigerの無料代替Google Fonts | ProFontFinder',
    description: 'ヒューマニスト・サンセリフの頂点であるGill SansとFrutiger。サイン計画やコーポレートデザインに最適な無料Google Fontsを解説。',
    category: 'フォント代替',
    date: '2026年10月',
    readTime: '読了時間: 6分',
    author: 'タイポグラフィ技術開発チーム',
    heroExcerpt: 'エリック・ギルの人間味あふれる幾何学と、アドリアン・フルティガーの空港サインが生み出した圧倒的可読性。CabinやSource Sans 3などの無料代替フォントを紹介。',
    keywords: [
      'Gill Sans 代替 フォント',
      'Frutiger 無料 代替 Google Fonts',
      'ヒューマニスト サンセリフ フリー',
      'Cabin Gill Sans 比較'
    ],
    contentHtml: `
      <h2>ヒューマニスト・サンセリフの金字塔</h2>
      <p>機械的な定規とコンパスに頼るグロテスク書体（Helveticaなど）と異なり、ルネサンス期のカリグラフィや古典的なローマン碑文のプロポーションを色濃く受け継ぐのが<strong>ヒューマニスト・サンセリフ</strong>です。その代表格が、エリック・ギル（Eric Gill）による<strong>Gill Sans</strong>（1928年）と、アドリアン・フルティガー（Adrian Frutiger）による<strong>Frutiger</strong>（1976年）です。</p>

      <p>Gill Sansは「英国のHelvetica」と称され、<strong>BBC、ペンギン・ブックス、英国国鉄、ロンドン地下鉄サイン</strong>に広く採用されました。またFrutigerは、パリのシャルル・ド・ゴール空港の案内サインのために、薄暗い照明や動く歩道からでも瞬時に読み取れる驚異的な視認性を目指して開発されました。</p>

      <div class="comparison-highlight my-8 p-6 rounded-2xl bg-white dark:bg-[#0f1011] border border-[#e2e4e8] dark:border-[#23252a] shadow-sm">
        <h3 class="text-xl font-bold text-[#08090a] dark:text-[#ffffff] mb-3">ヒューマニスト書体の重要な構造的特徴：</h3>
        <ul class="space-y-2 text-sm text-[#475569] dark:text-[#8a8f98]">
          <li>• <strong>古典的プロポーション：</strong> ローマンキャピタルの変化に富んだ幅比率（狭い'E'や'B'、広い'M'や'O'）。</li>
          <li>• <strong>2階建ての'g'と'a'：</strong> 小文字'g'には上部の耳と閉じたループ、'a'にはアーチとテールが存在します。</li>
          <li>• <strong>開放的な開口部（Apertures）：</strong> 'c', 'e', 's' の端部が広く開いており、画面上での潰れを防ぎます。</li>
          <li>• <strong>カリグラフィックなニュアンス：</strong> 微妙なストロークの抑揚が、長文読書でも疲れにくい温かみを生みます。</li>
        </ul>
      </div>

      <h2>1. Cabin（Pablo Impallari作）— Gill Sansの現代的ツイン</h2>
      <p>アルゼンチンのタイプデザイナーPablo Impallariによって設計された<strong>Cabin</strong>は、Gill Sansのプロポーションに敬意を払いながら、デジタル画面での視認性を徹底追求したフォントです。エリック・ギル特有の柔らかな人間味と斜めのカット端部を受け継ぎ、見出しにも本文にも見事に調和します。</p>

      <div class="specimen-card my-6 p-5 rounded-xl bg-[#f1f3f6] dark:bg-[#14161a] border border-[#e2e4e8] dark:border-[#23252a]">
        <div class="flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#8a8f98] mb-2">
          <span>見本：CABIN（OFL 100% 完全無料）</span>
          <span class="text-[#16a34a] dark:text-[#10b981] font-semibold">視覚的一致率: 96%</span>
        </div>
        <p class="text-2xl sm:text-3xl font-medium text-[#08090a] dark:text-[#ffffff] tracking-tight mb-3" style="font-family: 'Cabin', sans-serif;">
          The British Library & Classic Penguin Paperback Collection.
        </p>
        <pre class="text-xs font-mono bg-white dark:bg-[#08090a] p-3 rounded border border-[#e2e4e8] dark:border-[#23252a] overflow-x-auto text-[#1e293b] dark:text-[#d0d6e0]"><code>@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap');
font-family: 'Cabin', sans-serif;</code></pre>
      </div>

      <h2>2. Source Sans 3（Adobe / Paul D. Hunt作）— Frutiger直系の最強ワークホース</h2>
      <p>Adobe初のオープンソースフォントとして制作された<strong>Source Sans</strong>は、Frutigerの圧倒的な機能主義的視認性から直接インスピレーションを得ています。大きなx-ハイト、開放的な開口部、ニュートラルかつ親しみやすいリズムを持ち、現代のWeb UIやドキュメントに最も採用されている書体の一つです。</p>

      <h2>3. Hind（Indian Type Foundry作）— 幾何学とヒューマニストの洗練された融合</h2>
      <p>Indian Type Foundryによって開発された<strong>Hind</strong>は、フラットな終端とオープンなカウンター、堅牢な垂直ステムを持ち、フルティガーの公共サインのような端正な佇まいを提供します。</p>
    `
  }
];
