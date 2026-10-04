# Pro Font Finder — Technical & SEO Audit

Branch: `feature/opus-audit-optimization` (nothing on `main` was touched).
Build: `npm run build` → 3,435 pages, exit 0, no errors.

> **Note on the competitor comparison.** Competitor sites were not crawled for this audit (automated fetching was not available). The comparison below is based on how those products work publicly. Re-check it against a live crawl before using it in planning.

---

## 1. Gap analysis

| Capability | thefontfinder.com | Creative Market Font Finder | Fontspring Matcherator | fontfinderai.com | MyFonts WhatTheFont | **Pro Font Finder** |
|---|---|---|---|---|---|---|
| Where matching runs | Server | Server | Server | Server (ML) | Server (deep learning) | **In the browser; the image never leaves the device** |
| Catalog matched against | Mixed | Creative Market's commercial fonts | Fontspring's commercial fonts | Mixed | ~130k+ commercial fonts | 1,935 open-source Google Fonts |
| Free alternative suggestions | Partial | No (sells fonts) | No (sells fonts) | Partial | No (sells fonts) | **Yes — the core use case** |
| Script / handwriting | Weak | Weak | Medium | Medium | Strong | Weak (see §3) |
| Glyph segmentation | Server-side | Manual glyph confirmation | Manual glyph confirmation | Automatic | Automatic, then user fixes | Automatic plus a manual crop |
| Confidence shown | Rarely | No | No | Yes (%) | No | Yes (%) — now calibrated, see §3.4 |
| Per-font landing pages | Few | Product pages | Product pages | Few | Product pages | ~1,950 canonical pages + 8 locales for tools |

**Where we can win:**
- **Privacy** is a real differentiator: no upload and no server.
- **Free-font focus.** None of the commercial players are motivated to compete for "free font alternative finder" or "google font identifier".

**Where we lose:**
- Raw recall on commercial and script faces. A Google-Fonts-only catalog can't name a commercial font; it can only name the nearest free equivalent. The copy should present this as a feature ("closest free match"), not let it read as a miss.

---

## 2. Feasibility: no backend, privacy preserved

Everything recommended here runs fully client-side on static hosting (Cloudflare Workers static assets):

| Recommendation | Client-side? | Cost |
|---|---|---|
| Web Worker for Stage A/B matching | Yes | Moves work off the main thread |
| SIMD / WASM popcount | Yes | ~10–40KB WASM; JS fallback kept |
| OffscreenCanvas rasterization in a worker | Yes (Chrome, Edge, Firefox, Safari 17+) | Keep the main-thread fallback |
| Moment-invariant / Fourier features | Yes | Precomputed at build time; adds ~100–200KB to the signature DB |
| Calibration (isotonic or Platt) | Yes | A few constants learned offline |
| `_redirects` 301s | Yes (Cloudflare edge rules, not a backend) | Free |

**Privacy constraint for Stage B:** the user's pixels are never sent anywhere. Stage B downloads Google Fonts CSS and font files for the top candidates, restricted to the characters in `manifest.chars`. So Google learns *which candidate fonts* were tried and *which characters* were in the text, but never the image itself.

To remove even that leak, self-host subsetted WOFF2 files for the catalog in `/public`. This is a follow-up, not done here.

---

## 3. Engine audit (`src/components/FontFinderApp.astro`)

### 3.1 Findings

**1. Live engine vs dead code.**
- The live engine is inline in `FontFinderApp.astro`.
- `src/services/fontDetection/*` (`opticalEngine.ts`, `ocrEngine.ts`, `fontSignatures.ts`) is not imported by any page or component.
- Either delete it or move the inline engine into it. Two diverging engines is a maintenance trap.

**2. Stage A** compares 16×16 binary signatures using Hamming distance with a popcount lookup table (LUT), plus an Empirical-Bayes prior.
- It is fast and fine as a coarse filter.
- But 16×16 binarization throws away stroke contrast, terminals and serifs at small sizes. That is exactly the information needed for low-contrast and distressed faces.

**3. Stage B (word-silhouette rerank) was written but never called. It is now wired in.**
- It runs on the top 12 Stage-A candidates within a 2.5s budget.
- It renders the user's own word with each candidate and scores soft IoU (intersection-over-union) against the user's silhouette.
- Final ranking = `0.55·zA + 0.45·zB`, where zA and zB are the Stage A and Stage B scores standardized against each other.
- It degrades gracefully: if fonts fail to load or the budget runs out, Stage-A order is kept.

**4. Confidence was cosmetic.** Scores were clamped into a flattering band. The new top-1 confidence combines three things:
- **Absolute similarity:** `(score−0.80)/0.15`.
- **Margin over the runner-up:** the rerank gap when Stage B ran, otherwise the score gap.
- **Evidence (N, the number of glyphs matched):** `N/(N+3)`.

Lower-ranked results are monotonically non-increasing, with a floor of 20.

**5. A legacy clamp remains:** `Math.max(72, Math.min(99, …))` at `FontFinderApp.astro:4794` in `analyzePixelsInBrowser`, the fallback path. A poor match on that path still reports ≥72%. Replace it with the same calibrated formula.

**6. The calibration constants are hand-set** (0.80/0.15, 0.45/0.35/0.20, 45+54·x). They are sensible but not fitted.
- Build a labeled set of ~300 crops with known fonts.
- Fit isotonic regression of P(top-1 correct) on the raw composite.
- Ship the resulting lookup table, so that "80%" means right 80% of the time.

**7. Unused asset.**
- `public/tessdata/eng.traineddata` (5.2MB) is never fetched, because Tesseract loads with `gzip: true` and so only uses `eng.traineddata.gz` (2.9MB).
- It is safe to delete. It was left in place pending the owner's confirmation that nothing else references it.

### 3.2 Script, cursive, low-contrast and distressed fonts

| Problem | Cause | Fix |
|---|---|---|
| Cursive or connected scripts | Per-glyph segmentation fails when letters touch | Prefer Stage B (whole-word silhouette) whenever connected components < 0.6 × OCR character count. For scripts, treat the word as the unit, not the glyph. |
| Low-contrast (hairline) faces | Binarization at a global Otsu threshold loses the hairlines | Use an adaptive (Sauvola) threshold. Keep a grayscale 32×32 thumbnail per glyph alongside the bit signature. |
| Distressed / grunge | Texture noise flips many bits | Apply a morphological close plus median filter before signatures, and compare on outline (contour) features, which are less noise-sensitive than filled bits. |
| Italic vs upright confusions | 16×16 signatures don't separate slant well | Add a cheap slant estimate (second-order moments: μ11/μ02) as a hard gate (±4°). |

### 3.3 Better descriptors than the 16×16 signature

**Hu / Zernike moment invariants**
- Use 7–12 floats per glyph.
- They are invariant to scale and translation, and Zernike moments are robust to noise.
- They are cheap to precompute at build time.
- Use them as a second Stage-A score (cosine distance), z-scored and blended like Stage B.

**Elliptic Fourier descriptors of the outer contour**
- Use ~16 harmonics per glyph.
- They describe outline shape very well (serifs, terminals, bowls) and are naturally smooth.
- Best for display and logo faces.

**Recommendation**
- Keep 16×16 Hamming as the fast prefilter (top 50).
- Rerank with Zernike + Fourier (top 12).
- Then run Stage B (word silhouette).
- Each stage is O(candidates) and all run client-side.

### 3.4 Segmentation and ligatures
- **Touching letters:** split connected components wider than 1.4× the median glyph width at vertical-projection minima. Validate each split against OCR bounding boxes from Tesseract, which already runs.
- **Ligatures** (fi, fl, ff, ffi, Th): detect them where OCR reports two characters but there is one connected component. Either match against ligature glyphs rendered at build time, or exclude those glyphs from Stage A and let Stage B handle the word.

### 3.5 Speed
1. **Web Worker.** Move signature extraction and Stage A into a Worker. They are pure functions over `Uint8Array`, so the UI never blocks. The signature DB can be transferred once as an `ArrayBuffer`.
2. **SIMD popcount.** Write a WASM SIMD kernel (`i8x16.popcnt`) over 32-byte signatures. That gives roughly 4–8× faster Stage A on large catalogs. Keep the LUT as the fallback.
3. **OffscreenCanvas.** Render Stage B candidates on an OffscreenCanvas inside the worker. Fonts can be loaded in workers with `FontFace` + `self.fonts`.
4. **Font prefetch.** Start fetching Stage-B candidate fonts as soon as Stage A finishes, in parallel with UI rendering.

---

## 4. SEO audit

### 4.1 Fixed on this branch

| # | Issue | Impact | Fix |
|---|---|---|---|
| 1 | **1,245 duplicate font pages.** Every multi-word family existed at both `/fonts/abhaya libre` and `/fonts/abhaya-libre`, each self-canonical. | Duplicate content, split link equity, wasted crawl budget | `src/pages/fonts/[font].astro` now canonicalizes every font page to the lowercase hyphenated slug. The sitemap already listed only those slugs. |
| 2 | **Broken hreflang on ~3,200 font pages.** Each one pointed at `/es/fonts/…`, `/ja/fonts/…` etc., which don't exist (404). | Google drops the whole hreflang cluster when its targets are invalid | New `hreflang` prop on `BaseLayout`/`SeoHead`; turned off for font detail pages. |
| 3 | **Language picker linked to 404s** on every font page (7 broken links × ~3,200 pages). | Crawl errors; bad UX | `LanguagePicker.astro` now sends non-English locales to the localized `/fonts` index from font detail pages. |
| 4 | **Legacy URLs used meta-refresh.** Astro's static `redirects` emit HTML meta-refresh, which is a weak signal that can leak equity. | Slower consolidation of old URLs | `public/_redirects`: 96 real **301** rules (6 legacy paths × 8 locales × with and without trailing slash), applied by Cloudflare before static files. The Astro redirects remain as a fallback. |
| 5 | **Render-blocking CSS for 30 font families** on every page. | LCP/FCP on mobile | Only Inter + JetBrains Mono (the UI fonts) are blocking. The other 28 families load non-blocking (`media="print"` swap, with a `<noscript>` fallback). |
| 6 | **App schema on every page**, including blog posts and the 3,200 font pages. | Schema that doesn't describe the page (Google guidelines) | One `@graph`: WebSite + Organization everywhere. `["WebApplication","SoftwareApplication"]` appears only on home and `/tools/*`. |
| 7 | **No `aggregateRating`.** | No star rich result | Deliberately **not** invented. Add it only once real, on-site ratings exist; fabricated ratings risk a manual action. |
| 8 | **`data-nosnippet` on FAQ blocks** (home and guides). | Hid the most query-matching text from snippets, featured snippets and AI Overviews for "what font is this"-type queries | Removed. *This reverses commit 8eace17.* If it was added to stop FAQ text appearing as the meta description, the fix is a better `description`, not hiding the content. |
| 9 | **Duplicate Twitter tags** (`property=` + `name=`). | Noise | Only `name="twitter:*"` kept. |
| 10 | **Font pages were dead ends for crawl flow.** | Weak topical clustering | Each font page now has a breadcrumb (Home → Fonts → Family, with BreadcrumbList JSON-LD). It links to 6 deterministic same-category neighbors (a stable ring, so every page gets inbound links, unlike a "top similar" list that concentrates on popular fonts). It also links to 4 finder tools ("find a font from an image", screenshot, logo, free-alternative finder). |

Already in place and kept:
- FAQPage JSON-LD on home, guides, logo, PDF and free-alternative pages.
- BreadcrumbList.
- Reciprocal hreflang + x-default on all localized pages.
- An XML sitemap with `xhtml:link` alternates and git-based `lastmod`.

### 4.2 Keyword → page mapping

| Keyword cluster | Target page | Status |
|---|---|---|
| font finder, free font finder, font identifier, what font is this | `/` | ✓ Title and H1 aligned; FAQ now snippet-eligible |
| find font from image, identify font from image, font finder from image, image font finder | `/` (primary), `/guides` (support) | Add an H2 "Identify a font from an image in 3 steps" on home, plus HowTo-style content on guides |
| screenshot font finder | `/tools/screenshot-font-finder` | ✓ Exists |
| logo font finder | `/tools/logo-font-finder` | ✓ Exists; old `/logo-font-identifier` now 301s here |
| pdf font detector | `/tools/pdf-font-detector` | ✓ Exists; 301 from the root path |
| free font alternative finder | `/tools/free-font-alternative-finder` | ✓ Exists; 301s from two legacy paths |
| google font identifier | **No dedicated page** | **Gap.** Create `/tools/google-font-identifier`. It is the most honest positioning for a Google-Fonts catalog, and competition for it is weak. |

---

## 5. Prioritized plan

### A. Quick wins (≤1 day each)
1. ✅ Canonicalize alias font pages; disable hreflang and fix language-picker links on English-only font pages.
2. ✅ Real 301s via `public/_redirects`.
3. ✅ Non-blocking webfont CSS; scope the app schema; remove duplicate Twitter tags; remove FAQ `data-nosnippet`.
4. ✅ Breadcrumbs, related-font ring and tool CTAs on font pages.
5. ✅ Wire Stage B rerank; calibrated, monotonic confidence.
6. ☐ Replace the legacy 72–99 clamp (`FontFinderApp.astro:4794`) with the calibrated formula.
7. ☐ Stop generating space-separated alias slugs at all. Have `getAllStaticFontPaths` emit only hyphenated slugs and add one dynamic `_redirects` rule. This cuts ~1,245 HTML files and build time. The canonical tag handles it in the meantime.
8. ☐ Delete `public/tessdata/eng.traineddata` (5.2MB, unused).
9. ☐ Delete or consolidate `src/services/fontDetection/*` (dead code).
10. ☐ Drop `<meta name="keywords">` (ignored by Google; harmless but noise).

### B. Engine enhancements (1–3 weeks)
1. Move Stage A + signature extraction into a Web Worker, then use OffscreenCanvas for Stage B.
2. Labeled evaluation set (~300 crops across sans, serif, display, script, distressed). Track top-1 and top-5 accuracy per class in CI.
3. Fit isotonic calibration on that set; ship it as a lookup table.
4. Add Zernike + elliptic Fourier descriptors (precomputed at build time) as a middle rerank stage.
5. Adaptive thresholding, slant gate and a denoise pass for low-contrast and distressed inputs.
6. Splitting of touching glyphs and ligature handling (§3.4). Script fonts use a word-level-only path.
7. WASM SIMD popcount.
8. Self-host subsetted WOFF2 files for Stage B, removing even the font-request signal to Google.

### C. Content & topical authority (ongoing)
1. A `/tools/google-font-identifier` landing page (keyword gap).
2. "Free alternative to X" cluster: expand the existing blog posts into one page per popular commercial font (Helvetica, Futura, Gotham, Proxima Nova, Avenir, Circular, Brandon Grotesque…). Each page links to the matching `/fonts/<slug>` pages and the free-alternative tool. These are high-intent, long-tail and linkable.
3. Category hubs: `/fonts/category/serif|sans-serif|display|handwriting|monospace`, linking all members. These give the font pages a second crawl path and target "free serif fonts"-type queries.
4. Font pages: add one or two unique sentences per family (designer, year, recommended use, pairing). Today they are mostly template text, which risks "thin content" at 1,950-page scale.
5. Brand-logo case studies ("What font is the Spotify logo?", etc.). They have high search volume, can be produced as a template, and support the logo finder.
6. Earn `aggregateRating` legitimately: an on-site "Was this match right?" widget, stored anonymously. It also produces the labeled data needed for B.2 and B.3.

---

## 6. Files changed on this branch

| File | Change |
|---|---|
| `src/components/FontFinderApp.astro` | Stage B wiring, calibrated confidence, catalog count |
| `src/components/SeoHead.astro` | `hreflang` toggle, JSON-LD `@graph` with scoped app entity, non-blocking font CSS, Twitter dedupe |
| `src/layouts/BaseLayout.astro` | Passes the `hreflang` prop through |
| `src/pages/fonts/[font].astro` | Canonical slug, no hreflang, breadcrumbs, related-font ring, tool links |
| `src/components/LanguagePicker.astro` | No links to non-existent localized font pages |
| `src/components/pages/HomeView.astro`, `GuidesView.astro` | FAQ `data-nosnippet` removed |
| `public/_redirects` | 96 Cloudflare 301 rules |
