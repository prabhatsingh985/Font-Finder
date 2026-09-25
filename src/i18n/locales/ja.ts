import type { TranslationSchema } from './en';

export const ja: TranslationSchema = {
  common: {
    brandName: 'Pro Font Finder',
    brandTagline: '開発者のための画像フォント識別ツール。文字の幾何学的特徴を検査し、本物のオープンソースGoogleフォントを検証し、本番環境向けのCSSコードをコピーできます。',
    nav: {
      finder: '検索ツール',
      tools: 'ツール一覧',
      guides: "ガイド",
      about: '概要',
      identifyFont: '特定する',
      toggleTheme: 'カラーテーマ切り替え',
      skipToContent: 'コンテンツへスキップ',
      language: '言語'
    },
    footer: {
      mission: '開発者のための画像フォント識別ツール。文字の幾何学的特徴を検査し、本物のオープンソースGoogleフォントを検証し、本番環境向けのCSSコードをコピーできます。',
      zeroStorageBadge: '画像保存ゼロ • 100% ブラウザ内メモリ処理',
      productsTitle: 'プロダクト',
      tools: {
        imageFontFinder: '画像フォントファインダー',
        urlFontFinder: 'URLフォントファインダー',
        logoFontFinder: 'ロゴフォント識別ツール',
        screenshotFontFinder: 'スクリーンショットフォント検索',
        fontPairing: 'フォントペアリングツール',
        handwritingMatcher: '手書きフォント照合ツール',
        commercialAlternatives: '商用フォントの無料代替'
      },
      companyTitle: '企業情報',
      aboutUs: '私たちについて',
      howItWorks: '仕組み',
      guides: "ガイド・チュートリアル",
      allFontTools: '全フォントツール',
      contactSupport: 'お問い合わせ・サポート',
      trustLegalTitle: '信頼と法務',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      googleFonts: 'Google Fonts',
      silLicense: 'SIL Open Font License',
      copyright: 'Pro Font Finder. 開発者・デザイナーのための高精度タイポグラフィ検査。',
      noCookies: 'Cookie不使用',
      noAccount: 'アカウント登録不要',
      freeCommercial: '商用利用無料'
    },
    buttons: {
      identifyNow: '今すぐフォントを特定',
      exploreTools: 'ツール一覧を見る',
      backToHome: 'ホームに戻る',
      copyCss: 'CSSをコピー',
      copied: 'コピー完了'
    }
  },
  fontFinderApp: {
      "stage2Badge": "02 / テキスト確認",
      "cropManually": "手動で切り抜き",
      "newImage": "新しい画像",
      "dragCursorInstruction": "画像上をドラッグして特定のテキスト領域を切り抜きます:",
      "applyAndRedetect": "適用して再検出",
      "detectedTextLabel": "検出されたテキスト:",
      "verifyDetectedText": "検出されたテキストを確認",
      "verifyInputPlaceholder": "テキストを確認または編集...",
      "inspectIndividualWords": "単語と文字を個別に確認",
      "wordSegmentsLabel": "単語セグメント (クリックして特定の単語を分離):",
      "letterGlyphsLabel": "文字グリフ (個別の文字を修正、または文字以外の部分を削除):",
      "identifyFont": "フォントを特定",
      "identifyFontFor": "「{word}」のフォントを特定",
      "ocrBadge": "光学式文字認識 (OCR)",
      "fetchingText": "テキストを取得中...",
      "detectingText": "テキストと文字の形状を検出中...",
      "cancelAndChooseAnother": "キャンセルして別の画像を選択",
      "distinctFont": "個別のフォント",
      "comparingLetterShapes": "文字の形状を比較中",
      "matchingFontsProgress": "ブラウザ内で {count} 種類のフォントと照合中...",
      "stageA": "ステージ A: 16×16 グリフ指紋マッチング",
      "evaluatingContours": "{count} 種類のフォントの輪郭を評価中...",
      "stageB": "ステージ B: 候補のランキング",
      "rankingMatches": "最も近い Google Fonts の候補を順位付け中...",
      "previewTextHeading": "プレビューテキスト。",
      "previewTextSubheading": "入力したテキストが各フォント候補にリアルタイムで反映されます。",
      "editText": "↑ テキストを編集",
      "previewPlaceholder": "プレビューするテキストを入力...",
      "bestMatch": "最適な一致",
      "match": "一致",
      "designedBy": "デザイナー: {designer} • SIL Open Font License",
      "copyName": "フォント名をコピー",
      "copied": "コピー完了！",
      "googleFonts": "Google Fonts",
      "scanAnother": "別の画像をスキャン",
      "commercialAlternative": "商用フォントの代替:",
      "commercialAlternativeDesc": "{commercial} のスタイルに類似しています。検証済みの無料 Google Fonts 代替は {family} です。",
      "compareWithImage": "元の画像と比較",
      "comparePlaceholder": "比較するテキストを入力...",
      "yourImage": "アップロード画像",
      "matchedFont": "一致したフォント",
      "typographySpecimen": "タイポグラフィ見本",
      "closestMatchesHeading": "最も近い GOOGLE FONTS 候補",
      "livePreviewGoogleFonts": "Google Fonts によるリアルタイム描画プレビュー",
      "closestRank": "位の近さ",
      "freeOpenLicense": "無料 • オープンライセンス",
      "viewOnGoogleFonts": "Google Fonts で見る",
      "copyCss": "CSSをコピー",
      "liveSpecimenTester": "02 / リアルタイム見本テスター",
      "size": "サイズ:",
      "specimenDefaultText": "いろはにほへと ちりぬるを わかよたれそ つねならむ",
      "weightLight": "Light 300",
      "weightRegular": "Regular 400",
      "weightSemiBold": "SemiBold 600",
      "weightBold": "Bold 700",
      "productionCssBlueprint": "03 / 本番用 CSS コード",
      "copy": "コピー",
      "openInGoogleFontsRepo": "Google Fonts リポジトリで開く",
      "inspectSpecimenDetails": "フォントの詳細を確認 →",
      "closestAlternatives": "04 / 最も近い検証済み代替フォント",
      "viewSpecimen": "見本を見る →",
      "opticalMatch": "{confidence}% 光学的一致度",
      "errSelectWord": "識別する単語を選択してください。",
      "errAtLeastOneLetter": "少なくとも1文字が入力または検出されていることを確認してください。",
      "errInvalidFormat": "PNG、JPG、または WebP 形式の画像をアップロードしてください。",
      "errFileTooLarge": "ファイルサイズが 10MB の上限を超えています。",
      "errParseFailed": "画像の解析に失敗しました。"
  },

  home: {
    "meta": {
      "title": "Font Finder — 無料の画像フォント識別ツール",
      "description": "Font Finderで画像やスクリーンショットからあらゆるフォントを瞬時に特定。文字形状を解析し、検証済みの100%無料Googleフォント代替候補を提示します。"
    },
    "hero": {
      "headlinePrefix": "フォントをすばやく特定",
      "subtitle": "スクリーンショットをドロップして文字の形状を分離し、輪郭を計算して、検証済みのオープンソースGoogleフォントを取得します。"
    },
    "dropzone": {
      "title": "画像をドロップまたはスクリーンショットを貼り付け (⌘V)",
      "subtitle": "PNG、JPG、WebP対応 • ブラウザ内100%完全非公開検出",
      "buttonText": "画像ファイルを選択"
    },
    "pipeline": {
      "badge": "認識アーキテクチャ",
      "heading": "3段階の認識パイプライン",
      "subheading": "制約のないビットマップピクセルから、検証済みの本番対応オープンソースCSSタイポグラフィへ。",
      "localInference": "< 150ms ローカル推論",
      "zeroUploads": "サーバー送信ゼロ",
      "step1": {
        "phase": "フェーズ 01 // 取り込み",
        "tag": "生入力",
        "title": "アップロードまたは貼り付け",
        "desc": "画像をドロップするか、クリップボードから直接貼り付けます：",
        "descSuffix": "インタラクティブなトリミングで文字の輪郭を正確に切り出します。",
        "crop": "トリミング",
        "autoDetect": "自動検出",
        "footerTraffic": "サーバー通信ゼロ",
        "step": "ステップ 1 / 3"
      },
      "step2": {
        "phase": "フェーズ 02 // ニューラルスキャン",
        "tag": "GPUアクセラレーション",
        "title": "光学スキャン",
        "desc": "サブピクセル精度のラスタライザを用いて、コントラスト、ストローク太さ、16×16のグリフ指紋をメモリ上でローカルに抽出します。",
        "matrix": "マトリクス: 16×16 ビットマップ",
        "apertures": "アパーチャ: 幾何学的",
        "vectorNodes": "ベクターノード: 100% 一致",
        "footerClient": "100% クライアントWebGL",
        "step": "ステップ 2 / 3"
      },
      "step3": {
        "phase": "フェーズ 03 // CSS合成",
        "tag": "OFL 1.1 検証済み",
        "title": "コードのエクスポート",
        "desc": "本番環境でテスト済みの@importおよびfont-family CSSルールで検証されたGoogle Fonts代替を取得します。",
        "descSuffix": "",
        "readyToEmbed": "埋め込み準備完了",
        "footerOfl": "商用無料 OFL",
        "step": "ステップ 3 / 3"
      }
    },
    "engineSpecs": {
      "badge": "エンジン仕様",
      "title": "オープンソースの一致。",
      "titleAccent": "本番運用対応。",
      "desc": "商用ライセンスの罠を回避。Font Finderはビットマップの字形を、本物の無料Google Fonts代替にマッピングします。",
      "licensingModel": "ライセンスモデル",
      "licensingValue": "100% 無料 SIL Open Font License",
      "processingArch": "処理アーキテクチャ",
      "processingValue": "100% クライアントサイド WebGL / Canvas",
      "cdnIntegration": "CDN統合",
      "cdnValue": "Google Fonts 直接埋め込み",
      "jsonOutput": "JSON 出力"
    },
    "guide": {
      "imageRecognition": {
        "badge": "画像認識",
        "title": "画像からフォントを見つける",
        "desc": "魅力的な書体を見つけたものの、画像からそのフォント名を特定するのは容易ではありません。ポスター、雑誌、バナー、スクリーンショットなど、「このフォントは何？」という疑問はデザイン制作における共通の課題です。",
        "cardP1": "専用の画像フォント識別ツールは、静的なビットマップピクセルと実際の書体フォントをつなぎます。何千ものカタログを探し回る代わりに、光学画像フォントファインダーが字形構造を抽出し、索引化されたライブラリと照合します。",
        "cardP2": "既存ブランドの調査、競合デザインの分析、タイポグラフィの探求など、光学画像フォント検出ツールが発見をシンプルにします。ProFontFinderは高い精度で目的のフォントを即座に見つけ出します。"
      },
      "opticalAnalysis": {
        "badge": "光学分析",
        "title": "フォント識別はどのように機能するのか？",
        "desc": "フォント識別はコンピュータビジョンとタイポグラフィの字形分析を組み合わせたものです。一般的なOCRが単に文字を書き起こすのに対し、専用のフォント認識ツールは曲線のカーブ、プロポーション比率、および構造的特徴を精密に分析します。"
      },
      "commercialFree": {
        "title": "サブスクリプション料金不要の商用レベルタイポグラフィ",
        "desc": "無料のFont Finderは、商用フォントをSIL Open Font Licenseに基づく本物のオープンソース代替書体にマッチングさせることでこの問題を解決します：",
        "commOriginal": "商用オリジナル",
        "exploreLink": "商用代替ツールで50以上の厳選されたオープンソース類似フォントを探索する"
      },
      "digitalAssets": {
        "badge": "デジタルアセットスキャン",
        "title": "スクリーンショットやロゴからフォントを特定",
        "desc": "デザインのインスピレーションはスクリーンショット、グラフィック、ブランドロゴから得られることがよくあります。",
        "card1Title": "Webおよびモバイルアプリのスクリーンショット",
        "card1Desc": "ブラウジング中に画面を切り取ってScreenshot Font Finderにドロップするだけで、有料の制限なしにフォント名を即座に判別できます。",
        "card1Link": "スクリーンショットスキャナーを起動",
        "card2Title": "ブランドロゴとワードマークの認識",
        "card2Desc": "Logo Font Finderを使って有名ロゴの背後にある基本書体を発見し、カスタムカーニングされた文字を手軽に使えるフォントファミリーに関連付けます。",
        "card2Link": "ロゴフォントディレクトリを見る"
      },
      "styleTaxonomy": {
        "badge": "スタイルの分類",
        "title": "多様なフォントスタイルを探究する",
        "desc": "フォントのカテゴリを理解することで、書体探しの精度が大幅に向上します：",
        "serifTitle": "セリフ（明朝・ローマン）体",
        "serifDesc": "線の端にある装飾的な「うろこ」が伝統と洗練された品格を醸し出します（例: Playfair Display、Merriweather、EB Garamond）。",
        "sansTitle": "サンセリフ（ゴシック）体",
        "sansDesc": "クリーンな直線と画面上での高い視認性を誇り、幾何学的なMontserratから汎用的なInterやRobotoまで揃っています。",
        "displayTitle": "ディスプレイ＆見出し用フォント",
        "displayDesc": "インパクトのある見出しのために設計された力強い個性と凝縮された幅を持ちます（例: Bebas Neue、Anton、Syne）。",
        "cursiveTitle": "手書き＆筆記体フォント",
        "cursiveDesc": "自然な筆跡と優美なカリグラフィ。Handwriting Font Finderでお好みの筆記体を発見するか、タイポグラフィツール群をご覧ください。"
      },
      "practicalUtility": {
        "badge": "実用的なメリット",
        "title": "デザイナーとエンジニアのためのFont Finder",
        "desc": "ProFontFinderはクリエイティブな各分野のワークフローを効率化します：",
        "devTitle": "フロントエンド開発者",
        "devDesc": "検証済みのGoogle Fonts @importスニペットやTailwindクラスを直接コピー可能。URL Font FinderでWebサイトのフォントを即座に調査できます。",
        "uiTitle": "UI/UXデザイナー",
        "uiDesc": "クライアントの参考画像やムードボードのフォントを特定し、Figmaデザインの一貫性を維持します。",
        "creatorTitle": "クリエイター＆タイポグラフィ愛好家",
        "creatorDesc": "インタラクティブなフォントペアリングツールを使って、美しい見出しと本文の組み合わせを探索できます。"
      }
    },
    "faq": {
      "badge": "FAQ",
      "title": "よくある質問",
      "items": [
        {
          "q": "What The Font Finderとは何ですか？どのように機能しますか？",
          "a": "画像や写真、スクリーンショット内の文字を解析し、正確な書体または最も近いオープンソースのGoogle Fonts代替品を特定する無料オンラインツールです。"
        },
        {
          "q": "Googleでフォントを識別することはできますか？",
          "a": "Google Lensはテキストを読み取れますが、フォントの太さや正確なCSS font-familyの特定には特化していません。ProFontFinderはデザイナーや開発者向けに開発されています。"
        },
        {
          "q": "フォントの種類を見分けるにはどうすればよいですか？",
          "a": "セリフの有無、文字「a」や「g」の形状、線の太さのコントラストを確認し、ProFontFinderに画像をアップロードして自動幾何学マッチングを実行してください。"
        },
        {
          "q": "Webサイトで使われているフォントを調べる方法は？",
          "a": "テキストを右クリックして「検証」(F12) を開き、CSSのfont-familyプロパティを確認します。画像内の文字の場合はスクリーンショットをProFontFinderにドロップしてください。"
        },
        {
          "q": "AIを使ってフォントを特定できますか？",
          "a": "はい。ProFontFinderはブラウザ内のコンピュータビジョンとベクトル類似性計算を用いて、画像を外部サーバーに送信することなく瞬時にフォントを照合します。"
        },
        {
          "q": "完全に無料で使えるフォント検索ツールはありますか？",
          "a": "はい、ProFontFinderは回数無制限・完全無料です。課金や登録は一切不要で、検索結果はすべて商用利用可能なSIL Open Font LicenseのGoogle Fontsです。"
        },
        {
          "q": "フォントを正確にマッチングさせる方法は？",
          "a": "コントラストの高い鮮明な画像をアップロードし、文字認識を確認した上で、比較スライダーを使って候補フォントと見比べてください。"
        },
        {
          "q": "写真で撮ったフォントを検索できますか？",
          "a": "はい！看板、ポスター、本の表紙などをスマートフォンで撮影してそのままアップロードできます。正面からピントを合わせて撮影すると精度が高まります。"
        },
        {
          "q": "無料フォントはどこで手に入りますか？",
          "a": "最も信頼できる無料Webフォントの提供元はGoogle Fonts（fonts.google.com）です。当サイトのツール群でも様々なフォントをご覧いただけます。"
        },
        {
          "q": "特定のテキストフォントを見つけるコツは？",
          "a": "特徴的な文字（R、g、a、eなど）を含む3〜6文字程度の単語を狭く切り取ってアップロードすると、識別精度が最も高くなります。"
        },
        {
          "q": "Google Fontsはどのように利用しますか？",
          "a": "表示された@importコードまたはHTMLリンクをWebサイトに貼り付け、CSSで font-family: \"Inter\", sans-serif; のように指定するだけで無料で利用できます。"
        },
        {
          "q": "PDF内のフォントを特定する方法は？",
          "a": "PDFの「ファイル > プロパティ > フォント」を確認してください。画像化されている場合はスクリーンショットを撮ってProFontFinderに貼り付けてください。"
        },
        {
          "q": "AIで新しいフォントを作ることはできますか？",
          "a": "ProFontFinderは既存フォントの特定に特化していますが、CalligraphrやFontjoyなどの生成AIツールで手書きからフォントを作成することも可能です。"
        },
        {
          "q": "筆記体や草書体のフォントも認識できますか？",
          "a": "はい、筆記体やカリグラフィ書体にも対応しています。文字がつながっていることが多いため、高解像度の画像を使用するとより正確に認識されます。"
        },
        {
          "q": "どのような種類のフォントに対応していますか？",
          "a": "サンセリフ、セリフ、等幅（コード用）、ディスプレイ（見出し用）、筆記体など、検証済みGoogle Fontsの全ジャンルに対応しています。"
        }
      ]
    },
    "cta": {
      "gridSpecimen": "GRID.SPECIMEN // SEC-08",
      "ocrLatency": "OCRレイテンシ // <80MS",
      "engineReady": "光学マッチングエンジン準備完了",
      "signatures": "1,935 件の署名",
      "title": "フォントを特定する準備はできましたか？",
      "desc": "上に画像をドロップして字形を分離し、輪郭ジオメトリを計算して、検証済みのオープンソースGoogle Fontsを取得します。",
      "btnIdentify": "今すぐフォントを特定",
      "btnTools": "フォントツール一覧を見る",
      "badgeInBrowser": "100% ブラウザ内完結",
      "badgeZeroLatency": "ゼロレイテンシ",
      "badgeTestedCss": "テスト済みCSS埋め込み"
    }
  },
  toolsOverview: {
    meta: {
      title: 'フォントツール一覧 — 無料のタイポグラフィ識別ユーティリティ',
      description: '商用代替フォントの発見、ロゴフォントの抽出、書体ペアリング、Webフォント検出のための特化型ユーティリティ集。'
    },
    badge: 'ツールスイート',
    title: 'フォントツール一覧',
    subtitle: '特定のタスクに合わせて調整されたタイポグラフィユーティリティ。すべて無料・無制限で、ブラウザ内でプライベートに実行されます。',
    tools: {
      commercialAlternative: {
        title: '有料フォントの無料代替を見つける',
        description: '商用書体の画像をアップロードして、法的に無料で使用できる最も近い代替フォントを取得します。'
      },
      urlFontFinder: {
                            title: 'Webサイトのリンクからフォントを検出',
        description: 'URLを入力するだけで、読み込まれているWebフォント、@font-face宣言、タイポグラフィスタックを抽出します。'
      },
      logoFontFinder: {
        title: 'ロゴ内のフォントを特定する',
        description: 'ロゴ画像をアップロードして使われている書体と、それと同等の無料フォントを特定します。'
      },
      screenshotFontFinder: {
        title: 'スクリーンショットからフォントを探す',
        description: 'スクリーンショットは最も認識しやすいケースです。鮮明で歪みのない文字が高精度のマッチングを実現します。'
      },
      handwritingFontFinder: {
        title: '手書き・筆記体フォントを見つける',
        description: 'スクリプト系フォントは判別が困難ですが、最適な候補を導き出します。'
      },
      fontPairing: {
                                                    title: 'フォントペアリングを探す',
        description: '1つのフォントを指定し、美しく調和する組み合わせフォントを取得します。'
      }
    },
    bottomBanner: {
      title: '光学スキャナーをお探しですか？',
      desc: 'スクリーンショットを光学エンジンに直接ドロップして文字を分離し、1,935以上のGoogleフォントと数秒で照合します。',
      button: '今すぐフォントを特定'
    }
  },
  commercialAlternative: {
    meta: {
      title: '有料フォントの無料代替検索 — 商用フォント照合ツール',
      description: '商用フォントの画像をアップロードして、本番用CSSを備えた検証済みの無料Googleフォント代替候補を見つけます。'
    },
    breadcrumb: '商用フォントの無料代替',
    title: '有料フォントの無料代替を見つける',
    subtitle: '商用フォントの画像をアップロードして、本番用CSSを備えた検証済みの無料Googleフォント代替を取得します。',
    dropzoneTitle: '商用フォントの画像をドロップ',
    dropzoneSubtitle: '見本画像、切り抜き、グラフィックをアップロードしてGoogleフォントの代替を探します',
    buttonText: 'サンプル画像を選択'
  },
  logoFontFinder: {
    meta: {
      title: 'ロゴのフォントを特定 — ブランド書体と無料代替検索',
      description: 'ブランドロゴ画像をアップロードして書体を特定し、無料のGoogleフォント代替候補を見つけます。'
    },
    breadcrumb: 'ロゴフォント識別ツール',
    title: 'ロゴ内のフォントを特定する',
    subtitle: 'ブランドロゴやワードマークの画像をアップロードして使用書体を特定し、無料の代替フォントを取得します。',
    dropzoneTitle: 'ブランドロゴまたはロゴタイプ画像をここにドロップ',
    dropzoneSubtitle: 'PNG、JPG、WebP形式に対応（透明背景・単色背景の両方をサポート）',
    buttonText: 'ロゴファイルを選択'
  },
  screenshotFontFinder: {
    meta: {
      title: 'スクリーンショットからフォント検索 — クリップボード貼り付け（⌘V）対応',
      description: '⌘V / Ctrl+Vでクリップボードから直接貼り付けるか、キャプチャした画像をドロップして瞬時にフォントを特定します。'
    },
    breadcrumb: 'スクリーンショットフォント検索',
    title: 'スクリーンショットからフォントを探す',
    subtitle: '⌘VまたはCtrl+Vを使ってクリップボードから直接貼り付けるか、スクリーンショットファイルをドロップしてください。',
    dropzoneTitle: 'スクリーンショットを貼り付け（⌘V / Ctrl+V）またはファイルをドロップ',
    dropzoneSubtitle: 'PNG、JPG、WebP画像に対応',
    buttonText: 'スクリーンショットを選択'
  },
  handwritingFontFinder: {
    meta: {
      title: '手書き・筆記体フォント識別 — 光学カリグラフィマッチャー',
      description: '手書きの文字サンプル、署名、カリグラフィをスキャンまたはアップロードして、一致する無料Googleフォントを特定します。'
    },
    breadcrumb: '手書きフォント照合ツール',
    title: '手書き・筆記体フォントを見つける',
    subtitle: '手書きサンプル、署名、スクリプト文字をアップロードして、一致するフォントを特定します。',
    dropzoneTitle: '手書きサンプル、署名、カリグラフィをドロップ',
    dropzoneSubtitle: 'PNG、JPG、WebP画像に対応',
    buttonText: '手書き画像を選択'
  },
  urlFontFinder: {
    primaryBrand: "主要ブランドフォント",
    highLegibility: "高い可読性",
    visualMatch: "視覚的一致度:",
    cssVariables: "CSS変数",
    notice: "ご注意:",

    meta: {
      title: 'URLフォントファインダー — Webサイトからフォントを自動検出',
      description: 'URLを解析して、アクティブなWebフォント、@font-faceルール、Googleフォントリンク、タイポグラフィスタック、無料代替フォントを瞬時に抽出します。'
    },
    badge: 'リアルタイムWebタイポグラフィ抽出',
    title: 'Webサイトのリンクからフォントを検出',
    subtitle: 'URLを入力するだけで、アクティブなフォントの解析、@font-faceルールの検査、タイポグラフィスタックの抽出、無料Googleフォント代替の発見が可能です。',
    inputPlaceholder: 'https://example.com',
    analyzeButton: 'タイポグラフィを解析',
    analyzingButton: 'タイポグラフィを解析中...',
    presetsLabel: 'またはサンプルサイトでテスト：',
    resultsTitle: 'タイポグラフィ検査結果',
    extractedHeading: '検出されたフォント',
    freeTwinHeading: 'Googleフォント代替',
    inspectFont: 'フォントを検査',
    liveSpecimenTitle: 'ライブ見本プレビュー（入力してテスト）：',
    sourcesTitle: 'フォントソースとスタイルシート',
    cssTitle: '本番用CSS設計図',
    copyCss: 'CSSをコピー',
    copied: 'コピー完了',
    howItWorksTitle: 'URLフォント検出の仕組み',
    howItWorksP1: 'Webアドレスを送信すると、抽出エンジンが公開HTMLドキュメントを解析し、スタイルシート宣言、フォントプロバイダー（Google Fonts、Adobe Typekitなど）、インラインスタイルを検出します。',
    howItWorksP2: '主要および補助書体が特定されると、幾何学的エンジンが本物の無料Googleフォントと照合し、コピーして使えるCSSルールを生成します。',
    faqTitle: 'よくある質問',
    faq1: {
      q: 'ログインが必要なページや有料記事のフォントも検出できますか？',
      a: '当ツールは認証なしでアクセスできる公開Webページのみを検査します。非公開ページの場合はスクリーンショットを撮り、スクリーンショットフォント検索をご利用ください。'
    },
    faq2: {
      q: 'Googleフォント代替の精度はどの程度ですか？',
      a: '当データベースは、xハイト、アパーチャの開き具合、ストロークコントラストなどを検証済みオープンソース書体と照合し、90%以上の幾何学的類似度を誇ります。'
    },
    faq3: {
      q: 'URLを解析する際にデータは保存されますか？',
      a: '一切保存されません。解析のために送信されたURLはメモリ内でのみ処理され、記録や共有は行われません。'
    }
  },
  fontPairing: {
    surpriseMe: "おまかせ選択",
    invertRoles: "役割を入れ替える",
    bodySize: "本文サイズ:",
    editable: "編集可能",
    zeroLayoutShift: "レイアウトシフトゼロ",
    zeroLayoutShiftDesc: "font-display swap で最適化。",
    zeroLatency: "レイテンシゼロ",
    zeroLatencyDesc: "Web Worker によるローカル処理。",
    openLicense: "オープンライセンス",
    commercialFree: "商用利用無料",
    silOpenFontLicense: "SIL Open Font License。",

    meta: {
      title: 'フォントペアリングツール — 無料Googleフォントの美しい組み合わせ',
      description: 'プロが厳選した31種類のGoogleフォント組み合わせを探索。見出しと本文の調和をライブで確認し、スケールを調整してCSSルールをコピーできます。'
    },
    badge: 'タイポグラフィシステム設計',
    title: 'フォントペアリングを探す',
    subtitle: 'プロが厳選した31種類のGoogleフォント組み合わせを探索。見出しと本文の調和をライブで確認し、スケールを調整してCSSルールをコピーできます。',
    filterAll: 'すべてのペア',
    filterSaas: 'SaaS・テック',
    filterEditorial: 'エディトリアル・ラグジュアリー',
    filterCreative: 'クリエイティブ',
    filterCorporate: 'コーポレート・金融',
    customPreviewPlaceholder: 'すべてのフォントペアでプレビューするテキストを入力...',
    sampleHeading: 'スケールするデザインシステム',
    sampleBody: '優れたタイポグラフィは、読者が自然かつストレスなくコンテンツを読み進められる視覚的ヒエラルキーを構築します。',
    copyRule: 'ルールをコピー',
    openSpecimen: '書体詳細'
  },
  about: {
    meta: {
      title: '概要 — ProFontFinder | 透明性の高いタイポグラフィ検出',
      description: 'ProFontFinderの理念：オープンソースのGoogleフォントと最新のブラウザ技術により、高速、安全、完全無料のフォント識別を実現します。'
    },
    badge: 'エンジニアリングの透明性とオープンタイポグラフィ',
    title: 'ProFontFinderについて',
    subtitle: 'Web上のタイポグラフィを発見、分析、実装するための、よりクリーンで高速、かつ真にオープンな手段を構築しています。',
    whyTitle: '私たちがProFontFinderを開発した理由',
    whyP1: 'これまで、画像からフォントを特定するには、会員登録の強制、邪魔な動画広告、有料の定期購入、スタイルごとに数百ドルもする高価な商用フォントの推薦といった煩わしい障壁がありました。',
    whyP2: '私たちは、デザイナーや開発者にはもっと良いツールが必要だと考えました。数ミリ秒で書体を識別し、本物のオープンソース代替を見つけ、追跡や支払いを要求することなくCSSコードを提供するブラウザ完結型のツールです。',
    pillar1: {
      title: '100%無料＆利用制限なし',
      desc: '1日のスキャン制限、有料プラン、メール登録の要求、隠れた料金は一切ありません。必要なだけ自由にスクリーンショットや画像を解析できます。'
    },
    pillar2: {
      title: '画像データの保持ゼロ',
      desc: '画像はHTML5 Canvasを使用してブラウザのメモリ内でのみローカル処理されます。プライベートな画像がサーバーにアップロードされることはありません。'
    },
    pillar3: {
      title: '本物のオープンソース',
      desc: 'すべての推奨フォントはGoogle Fontsの公式ディレクトリとSIL Open Font Licenseに準拠しており、商用利用の自由が保証されています。'
    },
    pillar4: {
      title: '高速なクライアント処理',
      desc: '画像のベクター化のためのサーバー通信を排除することで、光学認識はお使いのデバイス上で50ミリ秒未満で行われます。'
    },
    principlesTitle: '私たちのエンジニアリング原則',
    p1: {
      title: '構造によるプライバシー保護',
      desc: '信頼を求めるのではなく、画像を保存する能力自体をシステム構造から排除しました。ピクセルデータはクライアントのRAM内に留まります。'
    },
    p2: {
      title: '無駄を省き、ノイズを排除',
      desc: '全画面広告や紛らわしいダウンロードボタン、SNS共有の強要はありません。ツールは瞬時に読み込まれ、作業の邪魔をしません。'
    },
    p3: {
      title: '開発者に役立つ実用的な出力',
      desc: '書体の特定はプロセスの半分に過ぎません。検証済みの@importリンク、可変ウェイト軸、CSS font-family宣言を即座に生成します。'
    },
    ctaTitle: 'ご質問やご提案はありますか？',
    ctaDesc: '光学解析パイプラインの改良を常に行っており、開発者からのフィードバックを歓迎しています。',
    ctaButton: 'チームに問い合わせる'
  },
  howItWorks: {
    meta: {
      title: '仕組み — タイポグラフィ技術アーキテクチャ | ProFontFinder',
      description: 'ProFontFinderの技術的詳細：クライアント側HTML5 Canvasベクター化、光学グリフ輪郭解析、幾何学的Googleフォント照合。'
    },
    badge: '技術パイプライン仕様',
    title: 'ProFontFinderの仕組み',
    subtitle: '光学文字認識、輪郭ベクター化、幾何学的距離スコアリングアルゴリズムの内部構造を解説します。',
    overviewTitle: 'アーキテクチャの概要',
    overviewDesc: 'ProFontFinderはサーバーへの画像アップロードを行わないアーキテクチャを採用しています。画像デコード、輪郭抽出、特徴照合のすべての段階が、HTML5 CanvasとWebAssemblyを使用してブラウザ内でローカルに実行されます。',
    phase1: {
      title: 'フェーズ1：ローカルメモリでの読み込みと正規化',
      desc: '画像やスクリーンショットがドロップされたとき：',
      items: [
        'ブラウザのRAM内にある非表示のHTML5 Canvasコンテキストにデコードされます。',
        'ネットワーク通信は一切発生せず、画像データがデバイス外に出ることはありません。',
        '大津の適応的二値化処理により、背景やノイズから文字形状を分離します。',
        'コントラストと解像度を正規化し、線の太さを標準化します。'
      ]
    },
    phase2: {
      title: 'フェーズ2：文字グリフの光学ベクター化',
      desc: '二値化された画像マスクが確立されると：',
      items: [
        '連結成分ラベリングにより、個々の文字の境界ボックスを分離します。',
        '輪郭追跡アルゴリズムにより、外側の輪郭頂点と内側の穴（カウンター）を計算します。',
        '幾何学比率の計測により、xハイト、キャップハイト、アセンダー、ディセンダーを抽出します。',
        '終端角度と開口部の開き度合いをセリフ、サンセリフ、ディスプレイなどの書体クラスに分類します。'
      ]
    },
    phase3: {
      title: 'フェーズ3：1,935以上のGoogleフォントとの幾何学的スコアリング',
      desc: '抽出されたベクター特徴量は、事前構築されたカタログと照合されます：',
      items: [
        'ベクター特徴量はコンパクトに正規化された指紋データに変換されます。',
        'ユークリッド距離尺度により、光学輪郭を検証済みGoogleフォントと比較します。',
        'カテゴリフィルター（サン、セリフ、モノ、ディスプレイ、スクリプト）により検索範囲を絞り込みます。',
        '幾何学的類似度と構造的配置を反映した信頼度スコア（0〜100%）を算出します。'
      ]
    },
    phase4: {
      title: 'フェーズ4：本番用CSS設計図の生成',
      desc: '最適な候補は、コピー可能な開発者向けコードとして生成されます：',
      items: [
        '公式Google Fonts CDNの@importおよび<link>タグ。',
        '安全なシステムフォールバックを含む正確なCSS font-family宣言。',
        '利用可能なウェイトと可変フォント軸の指定。',
        'ライセンス確認のためのGoogle Fonts公式見本ページへの直接リンク。'
      ]
    },
    canvasTitle: 'クライアント側インメモリCanvas',
    canvasDesc: 'HTML5 Canvasとメモリ上のピクセル操作を活用することで、高コストなサーバーバックエンドを必要とせずに複雑な画像変換を実行します。これによりゼロレイテンシと絶対的な機密性が実現します。',
    privacyTitle: '保存ゼロの保証',
    privacyDesc: 'サーバーAPIが画像を受信しないため、未公開のロゴや社内資料のスクリーンショットも完全に安全です。ブラウザのタブを閉じると、すべての一時メモリは直ちに解放されます。'
  },
  privacy: {
    meta: {
      title: 'プライバシーポリシー — ProFontFinder | データ収集ゼロ',
      description: 'ProFontFinderのプライバシーポリシー。個人データを保存・送信することなく、ローカルで画像を安全に処理する仕組みについて説明します。'
    },
    badge: '透明性とデータ保護',
    title: 'プライバシーポリシー',
    subtitle: 'ProFontFinderはお客様のプライバシーを最優先に設計されています。すべてのフォント解析はブラウザ内でローカルに実行されます。',
    lastUpdated: '最終更新日：2026年9月',
    s1Title: '1. 画像保存ゼロの方針',
    s1P: 'ProFontFinderは、提供された画像、スクリーンショット、ロゴ、グラフィックをアップロード、保存、送信、保持することは一切ありません。すべての画像処理、文字認識、輪郭ベクター化、フォント照合アルゴリズムは、HTML5 Canvasメモリを使用してブラウザ上で100%ローカルに実行されます。',
    s2Title: '2. 個人情報の収集について',
    s2P: 'ProFontFinderの利用にあたり、ユーザーアカウント、パスワード、メールアドレス、支払い情報の登録は不要です。すべてのツールを完全に匿名で利用できます。',
    s3Title: '3. Cookieおよびローカルストレージ',
    s3P: 'ProFontFinderは、追跡用Cookie、広告用Cookie、クロスサイトフィンガープリントを使用しません。カラーテーマ（ダークモードまたはライトモード）の好みを保持するためにのみ、ローカルストレージ（localStorage）を使用します。',
    s4Title: '4. サードパーティリンクとCDN',
    s4P: 'フォントのプレビューや読み込みの際、ライブ見本を表示するためにブラウザがGoogle Fonts CDN（fonts.googleapis.comおよびfonts.gstatic.com）に直接接続する場合があります。これらの接続にはGoogleのプライバシーポリシーが適用されます。',
    s5Title: '5. プライバシーに関するお問い合わせ',
    s5P: '当プライバシーポリシーやローカル処理アーキテクチャについてご質問がある場合は、support@profontfinder.comまでご連絡ください。'
  },
  terms: {
    meta: {
      title: '利用規約 — ProFontFinder',
      description: 'ProFontFinderの利用規約。デザイナーと開発者のための、無料・オープン・クライアント完結型タイポグラフィツールの利用条件。'
    },
    badge: '法的ガイドラインと利用条件',
    title: '利用規約',
    subtitle: 'ProFontFinderサービスをご利用いただくためのシンプルで透明な規約です。',
    lastUpdated: '最終更新日：2026年9月',
    s1Title: '1. 規約への同意',
    s1P: 'ProFontFinder（profontfinder.com）にアクセスまたは利用することにより、本利用規約に同意したものとみなされます。本規約に同意いただけない場合は、サービスの利用を中止してください。',
    s2Title: '2. 許可された利用範囲',
    s2P: 'ProFontFinderは、デザイナー、開発者、タイポグラフィファンのための無料ツールとして提供されています。個人、商用、教育目的のプロジェクトにおいて、制限なく自由にご利用いただけます。',
    s3Title: '3. フォントのライセンスと知的財産権',
    s3P: 'ProFontFinderは文字の形状を識別し、SIL Open Font License（OFL）またはApache 2.0ライセンスに基づくオープンソースのGoogleフォントを推薦します。商用利用の前にフォントライセンスを確認する責任はユーザーにあります。',
    s4Title: '4. 保証の免責',
    s4P: 'ProFontFinderは「現状有姿」かつ「提供可能な範囲」で提供され、いかなる明示または黙示の保証も行いません。高精度な照合を目指して設計されていますが、すべての画像品質において100%の検出精度を保証するものではありません。',
    s5Title: '5. 責任の制限',
    s5P: 'ProFontFinderまたはその運営者は、本サービスの利用または利用不能から生じるいかなる間接的、付随的、結果的損害についても責任を負いません。',
    s6Title: '6. サービスの変更',
    s6P: '当サイトは、事前の通知なしにいつでもサービスの内容を変更または終了する権利を留保します。'
  },
  contact: {
    meta: {
      title: 'お問い合わせ — ProFontFinder サポート＆フィードバック',
      description: 'ProFontFinderエンジニアリングチームへのお問い合わせ。バグ報告、フォント追加の提案、ご意見、一般的なご質問をお寄せください。'
    },
    badge: 'お問い合わせ',
    title: 'お問い合わせ・サポート',
    subtitle: 'ご質問、ご意見、不具合の報告などがございましたら、ProFontFinderエンジニアリングチームまでお気軽にご連絡ください。',
    form: {
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ本文',
      send: 'メッセージを送信',
      success: 'ありがとうございます！メッセージを受け付けました。内容を確認のうえ、速やかにご連絡いたします。'
    },
    directEmail: {
      title: 'メールでのお問い合わせ',
      desc: '緊急のご相談、技術的な提携、セキュリティに関するご質問は、support@profontfinder.comまで直接メールをお送りください。'
    },
    responseTime: {
      title: '回答までの目安',
      desc: '通常、24〜48営業時間以内にお返事いたします。'
    },
    faqTitle: 'よくあるお問い合わせ',
    faq1: {
      q: '新しいGoogleフォントの追加をリクエストできますか？',
      a: '当データベースはGoogle Fontsの公式カタログと自動同期されています。新しく公開された書体は次回のカタログ更新時に自動的にインデックスされます。'
    },
    faq2: {
      q: 'プログラムから利用できるフォント識別APIは提供していますか？',
      a: '現在、開発者向けの自動フォント識別APIの提供を検討中です。具体的なユースケースがございましたら、ぜひご要望をお聞かせください。'
    }
  },
  guides: {
    meta: {
      title: "フォント特定＆タイポグラフィガイド — Pro Font Finder",
      description: "画像からのフォント特定、フォントペアリング、商用代替フォントの選定、Webタイポグラフィに関する専門ガイドと実践チュートリアル。"
    },
    badge: "ガイド＆チュートリアル",
    title: "フォント特定とタイポグラフィをマスターする",
    subtitle: "デザイナー、エンジニア、クリエイターのための実践的な解説、テクニック、ワークフロー。",
    allGuides: "すべてのガイド",
    readTimeSuffix: "で読了",
    tryTool: "このツールを試す",
    items: [
      {
        id: "image-identification-guide",
        category: "フォント特定",
        tag: "基本ガイド",
        title: "画像やスクリーンショットからフォントを高精度に特定する方法",
        desc: "画像の事前処理、文字のベースライン切り抜き、コントラスト調整を行い、わずか数秒で未知のフォントを突き止めるテクニック。",
        readTime: "4分",
        steps: [
          "コントラストが高く特徴的な文字（a、g、R、Qなど）の周囲をタイトにトリミング。",
          "OCR文字認識精度を高めるため、水平ベースラインの角度を補正。",
          "Pro Font Finderに直接アップロードし、形状ベクトルで即座に解析。"
        ],
        toolLink: "/",
        toolName: "画像フォント特定ツールを開く"
      },
      {
        id: "commercial-alternatives-guide",
        category: "商用代替フォント",
        tag: "コスト削減",
        title: "高額な有料商用フォントを高品質な無料Googleフォントで代用する方法",
        desc: "Helvetica、Futura、Gotham、Proxima Nova、DINなどを商用利用可能な完全無料オープンソースフォントに置き換えるチートシート。",
        readTime: "5分",
        steps: [
          "ジオメトリック（幾何学）系とヒューマニスト系の特徴（x-height、開口部、端部）を把握。",
          "専用代替エンジンで文字の太さやメトリクスを自動照合。",
          "ライセンス料不要ですぐに使えるCSS @importコードを出力。"
        ],
        toolLink: "/tools/commercial-alternative",
        toolName: "商用代替フォントを見る"
      },
      {
        id: "font-pairing-principles",
        category: "組み合わせとデザイン",
        tag: "デザインのベストプラクティス",
        title: "タイポグラフィの組み合わせ原則：コントラスト・階層・調和",
        desc: "フォントの組み合わせで迷わない。実績あるデザイン理論に基づいて、印象的な見出しフォントと可読性の高い本文フォントを調和させる方法。",
        readTime: "6分",
        steps: [
          "視覚的メリハリをつけるため、明朝・セリフ体の見出しとゴシック・サンセリフの本文をペアリング。",
          "雰囲気やデザイン年代の統一感を意識（モダン見出し＋端正な本文）。",
          "フォントペアリングスタジオでリアルタイムにプレビュー。"
        ],
        toolLink: "/tools/font-pairing",
        toolName: "ペアリングスタジオを開く"
      },
      {
        id: "inspect-web-fonts",
        category: "技術・Web開発",
        tag: "開発者ワークフロー",
        title: "公開中のWebサイトで使用されているフォントを抽出・調査する方法",
        desc: "ブラウザの開発者ツールを開いたり圧縮CSSを解析したりすることなく、目的のサイトで使われているタイポグラフィを一瞬で検出。",
        readTime: "3分",
        steps: [
          "調査したいWebサイトのURLをコピー。",
          "URLフォントファインダーに貼り付けてメイン・本文フォントを抽出。",
          "計算されたCSS変数、フォールバックチェーン、Googleフォントリンクを確認。"
        ],
        toolLink: "/tools/url-font-finder",
        toolName: "URLフォントファインダーを試す"
      },
      {
        id: "handwriting-identification",
        category: "フォント特定",
        tag: "手書き・筆記体",
        title: "手書きの文字やサインに近いGoogle筆記体フォントを見つける方法",
        desc: "手書き文字の崩し方や筆記体のつながりを分析し、同じニュアンスを持つ編集可能なGoogle筆記体フォントを素早く見つける手法。",
        readTime: "4分",
        steps: [
          "つながった筆記体文字を認識しやすい単位に切り分け。",
          "傾斜角、ループの比率、ストロークの太さの抑揚を解析。",
          "認証済みGoogle筆記体フォントカタログから瞬時に類似候補を検出。"
        ],
        toolLink: "/tools/handwriting-font-finder",
        toolName: "手書きフォントを照合する"
      },
      {
        id: "how-engine-works-guide",
        category: "技術・Web開発",
        tag: "アーキテクチャ",
        title: "技術解説：ProFontFinderのブラウザ内OCRと形状ベクトルの仕組み",
        desc: "クライアントサイド画像解析の全貌：Web Worker、エッジ検出、アスペクト比不変量、サーバー送信不要のプライバシー設計。",
        readTime: "5分",
        steps: [
          "画像処理はすべてお使いの端末のブラウザRAM内で完結。",
          "サーバーへの画像アップロード・保存・追跡ログは一切なし。",
          "数百種類の厳選オープンソースフォントと100ms未満で高速照合。"
        ],
        toolLink: "/how-it-works",
        toolName: "技術仕様を読む"
      }
    ],
    faqTitle: "フォント特定に関するよくある質問",
    faqs: [
      {
        q: "ピンボケや低解像度の画像からでもフォントを特定できますか？",
        a: "はい！コントラスト正規化、適応的二値化、形態学的フィルタリングの前処理パイプラインにより、文字の輪郭を強調してから照合を行います。"
      },
      {
        q: "提案された代替フォントはすべて商用利用できますか？",
        a: "ProFontFinderに登録されているすべての代替フォントは、SIL Open Font LicenseまたはApache 2.0ライセンスで認証されており、商用・個人利用ともに100%無料です。"
      },
      {
        q: "アップロードした画像はサーバーに保存されますか？",
        a: "いいえ、一切保存されません。すべての画像解析・OCR処理・ベクトル計算はお客様のブラウザ内（メモリ上）でのみ実行されます。"
      }
    ]
  },
  error404: {
    meta: {
      title: '404 — ページが見つかりません | ProFontFinder',
      description: 'お探しのページは存在しないか、移動した可能性があります。'
    },
    badge: '404 エラー',
    title: 'ページが見つかりません',
    desc: 'お探しのページは存在しないか、移動した可能性があります。',
    backHome: 'ホームに戻る',
    exploreTools: 'ツール一覧を見る'
  }
};
