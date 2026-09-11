import { test, expect } from '@playwright/test';

test.describe('Font Finder Website E2E Tests', () => {
  test('1. Homepage renders properly with title and uploader', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Font Finder/i);

    // Check main heading
    const heading = page.locator('main h1');
    await expect(heading).toContainText(/Upload an image/i);

    // Check dropzone presence
    const dropzone = page.locator('#dropzone');
    await expect(dropzone).toBeVisible();

    // Check sample buttons
    const sampleBtns = page.locator('.sample-btn');
    await expect(sampleBtns).toHaveCount(4);
  });

  test('2. Optical Font Identification flow with sample specimen', async ({ page }) => {
    await page.goto('/');

    // Click "Clean Sans" sample preset
    const cleanSansBtn = page.locator('[data-sample="inter"]');
    await cleanSansBtn.click();

    // Verify crop stage appears with canvas
    const cropStage = page.locator('#crop-stage');
    await expect(cropStage).toBeVisible();
    const canvas = page.locator('#crop-canvas');
    await expect(canvas).toBeVisible();

    // Click "Analyze Letterforms & Find Font"
    const analyzeBtn = page.locator('#btn-run-analysis');
    await analyzeBtn.click();

    // Verify results stage appears after analysis
    const resultsStage = page.locator('#results-stage');
    await expect(resultsStage).toBeVisible({ timeout: 10000 });

    // Verify primary font detection (Inter or verified clean sans-serif match)
    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/Inter|Roboto|Montserrat|Plus Jakarta Sans|DM Sans|Open Sans|Oswald/i);

    // Verify Google Fonts Verified badge
    const verifiedBadge = page.locator('#res-verified-badge');
    await expect(verifiedBadge).toBeVisible();
    await expect(verifiedBadge).toContainText(/Google Fonts Verified/i);

    // Verify Confidence score
    const confidence = page.locator('#res-confidence');
    await expect(confidence).toContainText(/%/);

    // Verify CSS snippets
    const codeImport = page.locator('#code-import');
    await expect(codeImport).toContainText(/fonts\.googleapis\.com/);

    const codeFamily = page.locator('#code-family');
    await expect(codeFamily).toContainText(/font-family:\s*'(Inter|Montserrat|Roboto|Plus Jakarta Sans|DM Sans|Open Sans|Oswald)'/i);

    // Test Copy button interaction
    const copyBtn = page.locator('#btn-copy-family');
    await copyBtn.click();
    await expect(copyBtn).toContainText(/Copied!/i);

    // Verify side-by-side comparison specimen is dynamically matched and NOT hardcoded Handgloves
    const compareMatched = page.locator('#res-compare-matched');
    await expect(compareMatched).not.toHaveText('Handgloves');
    await expect(compareMatched).toHaveText('Inter Typography');

    // Test typing in compare-text-input (e.g. monkeytype)
    const compareInput = page.locator('#compare-text-input');
    await compareInput.fill('monkeytype');
    await expect(compareMatched).toHaveText('monkeytype');

    // Verify interactive specimen tester
    const specimenInput = page.locator('#specimen-text-input');
    await expect(specimenInput).toBeVisible();
    await expect(specimenInput).toHaveValue('monkeytype');
    await specimenInput.fill('Custom Brand Headline Testing');
    await expect(specimenInput).toHaveValue('Custom Brand Headline Testing');
    await expect(compareMatched).toHaveText('Custom Brand Headline Testing');
  });

  test('3. Test Serif typography sample detection', async ({ page }) => {
    await page.goto('/');

    // Click "Luxury Serif" sample preset
    const serifBtn = page.locator('[data-sample="playfair"]');
    await serifBtn.click();

    // Click analyze
    const analyzeBtn = page.locator('#btn-run-analysis');
    await analyzeBtn.click();

    // Verify result
    const resultsStage = page.locator('#results-stage');
    await expect(resultsStage).toBeVisible({ timeout: 10000 });

    const traitCategory = page.locator('#res-trait-category');
    await expect(traitCategory).toContainText(/serif/i);
  });

  test('3b. Test Monospace typography sample detection', async ({ page }) => {
    await page.goto('/');

    // Click "Dev Mono" sample preset
    const monoBtn = page.locator('[data-sample="jetbrains"]');
    await monoBtn.click();

    // Click analyze
    const analyzeBtn = page.locator('#btn-run-analysis');
    await analyzeBtn.click();

    // Verify result
    const resultsStage = page.locator('#results-stage');
    await expect(resultsStage).toBeVisible({ timeout: 10000 });

    const traitCategory = page.locator('#res-trait-category');
    await expect(traitCategory).toContainText(/monospace/i);

    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/JetBrains Mono|Space Mono|Fira Code/i);
  });

  test('4. Browse Fonts page has search, category filter, and live preview', async ({ page }) => {
    await page.goto('/fonts');

    await expect(page.locator('main h1')).toContainText(/Verified Google Fonts/i);

    // Check search functionality
    const searchInput = page.locator('#font-search');
    await searchInput.fill('Roboto');
    await page.waitForTimeout(200);

    const fontItems = page.locator('.font-item:visible');
    const count = await fontItems.count();
    expect(count).toBeGreaterThan(0);

    // Clear search and test category filter
    await searchInput.fill('');
    const serifTab = page.locator('.cat-tab[data-cat="serif"]');
    await serifTab.click();
    await page.waitForTimeout(200);

    const serifItems = page.locator('.font-item:visible');
    expect(await serifItems.count()).toBeGreaterThan(0);
  });

  test('5. Individual Font Page renders full specimen and metadata', async ({ page }) => {
    await page.goto('/fonts/inter');

    await expect(page.locator('main h1')).toContainText('Inter');
    await expect(page.locator('text=Google Fonts Verified').first()).toBeVisible();

    // Check styles and weights section
    await expect(page.locator('text=Styles & Weights')).toBeVisible();

    // Check CSS code block
    await expect(page.locator('code').first()).toBeVisible();
  });

  test('6. Informational pages load correctly', async ({ page }) => {
    // How It Works
    await page.goto('/how-it-works');
    await expect(page.locator('main h1')).toContainText(/How Font Finder Works/i);

    // About
    await page.goto('/about');
    await expect(page.locator('main h1')).toContainText(/About Font Finder/i);

    // Privacy
    await page.goto('/privacy');
    await expect(page.locator('main h1')).toContainText(/Privacy Policy/i);
    await expect(page.locator('body')).toContainText(/Zero Retention/i);

    // Terms
    await page.goto('/terms');
    await expect(page.locator('main h1')).toContainText(/Terms of Service/i);
  });

  test('7. Dark mode toggle works seamlessly', async ({ page }) => {
    await page.goto('/');

    const themeBtn = page.locator('#theme-toggle');
    await themeBtn.click();

    const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(isDark).toBe(true);

    await themeBtn.click();
    const isLight = await page.evaluate(() => !document.documentElement.classList.contains('dark'));
    expect(isLight).toBe(true);
  });

  test('8. Dark background image (Monkeytype style) detection evaluates as sans-serif and dynamically syncs specimen', async ({ page }) => {
    await page.goto('/');

    // Generate simulated Monkeytype image in browser (dark background with light sans-serif text)
    const dataUrl = await page.evaluate(() => {
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 120;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#323437';
      ctx.fillRect(0, 0, 400, 120);
      ctx.fillStyle = '#e2b714';
      ctx.fillRect(20, 45, 25, 25);
      ctx.fillStyle = '#d1d0c5';
      ctx.font = 'bold 40px Arial, sans-serif';
      ctx.fillText('monkeytype', 60, 68);
      return canvas.toDataURL('image/png');
    });

    // Feed file into file-input
    await page.evaluate(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], 'monkeytype-screenshot.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('file-input') as HTMLInputElement;
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, dataUrl);

    // Verify crop stage appears
    const cropStage = page.locator('#crop-stage');
    await expect(cropStage).toBeVisible({ timeout: 5000 });

    // Click analyze
    const analyzeBtn = page.locator('#btn-run-analysis');
    await analyzeBtn.click();

    // Verify results stage appears
    const resultsStage = page.locator('#results-stage');
    await expect(resultsStage).toBeVisible({ timeout: 10000 });

    // Category MUST be sans-serif, NEVER serif or Playfair Display!
    const traitCategory = page.locator('#res-trait-category');
    await expect(traitCategory).toContainText(/sans-serif/i);

    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).not.toContainText(/Playfair/i);

    // Verify comparison matched specimen is NOT Handgloves
    const compareMatched = page.locator('#res-compare-matched');
    await expect(compareMatched).not.toHaveText('Handgloves');

    // Type "monkeytype" in the comparison bar
    const compareInput = page.locator('#compare-text-input');
    await compareInput.fill('monkeytype');
    await expect(compareMatched).toHaveText('monkeytype');

    // Specimen playground should also reflect monkeytype
    const specimenInput = page.locator('#specimen-text-input');
    await expect(specimenInput).toHaveValue('monkeytype');
  });

  test('9. Benchmark: Luxury High-Contrast Serif identification (Playfair Display / Didone)', async ({ page }) => {
    await page.goto('/');

    const dataUrl = await page.evaluate(() => {
      const canvas = document.createElement('canvas');
      canvas.width = 540;
      canvas.height = 140;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 540, 140);
      ctx.fillStyle = '#111111';
      ctx.font = 'bold 50px "Playfair Display", Georgia, serif';
      ctx.fillText('torial Gazette', 30, 85);
      return canvas.toDataURL('image/png');
    });

    await page.evaluate(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], 'playfair-specimen.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('file-input') as HTMLInputElement;
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, dataUrl);

    await expect(page.locator('#crop-stage')).toBeVisible({ timeout: 5000 });
    await page.locator('#crop-text-input').fill('torial Gazette');
    await page.locator('#btn-run-analysis').click();
    await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

    // Category MUST be serif
    await expect(page.locator('#res-trait-category')).toContainText(/serif/i);

    // Font must be Playfair Display or top serif
    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/Playfair Display|Cormorant Garamond|Cinzel|Merriweather/i);

    // Confidence must be honest (not blindly clamped to 100%)
    const confText = await page.locator('#res-confidence').textContent();
    const confNum = parseInt(confText?.replace('%', '') || '0', 10);
    expect(confNum).toBeGreaterThanOrEqual(65);
    expect(confNum).toBeLessThanOrEqual(95);
  });

  test('10. Benchmark: Condensed Bold Poster identification (Oswald / Bebas Neue)', async ({ page }) => {
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
    await page.goto('/');

    const dataUrl = await page.evaluate(async () => {
      try {
        await document.fonts.load('700 52px Oswald');
        await document.fonts.ready;
      } catch (e) {}
      const isOswaldLoaded = document.fonts.check('700 52px Oswald');
      const canvas = document.createElement('canvas');
      canvas.width = 560;
      canvas.height = 140;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 560, 140);
      ctx.fillStyle = '#111111';
      ctx.font = isOswaldLoaded ? '700 52px Oswald, sans-serif' : 'bold 52px Impact, sans-serif';
      ctx.fillText('MODERN POSTER', 30, 85);
      return canvas.toDataURL('image/png');
    });

    await page.evaluate(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], 'oswald-specimen.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('file-input') as HTMLInputElement;
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, dataUrl);

    await expect(page.locator('#crop-stage')).toBeVisible({ timeout: 5000 });
    await page.locator('#crop-text-input').fill('MODERN POSTER');
    await page.locator('#btn-run-analysis').click();
    await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/Oswald|Bebas Neue|Anton/i);
  });

  test('11. Benchmark: Developer Monospace with numbers & symbols (JetBrains Mono / Fira Code)', async ({ page }) => {
    await page.goto('/');

    const dataUrl = await page.evaluate(async () => {
      try {
        await document.fonts.load('500 42px "JetBrains Mono"');
      } catch (e) {}
      const canvas = document.createElement('canvas');
      canvas.width = 560;
      canvas.height = 140;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 560, 140);
      ctx.fillStyle = '#111111';
      ctx.font = '500 42px "JetBrains Mono", monospace';
      ctx.fillText('const type = "mono";', 30, 85);
      return canvas.toDataURL('image/png');
    });

    await page.evaluate(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], 'mono-specimen.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('file-input') as HTMLInputElement;
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, dataUrl);

    await expect(page.locator('#crop-stage')).toBeVisible({ timeout: 5000 });
    await page.locator('#btn-run-analysis').click();
    await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

    await expect(page.locator('#res-trait-category')).toContainText(/monospace/i);
    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/JetBrains Mono|Fira Code|Space Mono/i);
  });

  test('12. Benchmark: Book Serif with numerals & distinctive glyphs (Merriweather / Lora)', async ({ page }) => {
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
    await page.goto('/');

    const dataUrl = await page.evaluate(async () => {
      try {
        await document.fonts.load('normal 46px Merriweather');
      } catch (e) {}
      const canvas = document.createElement('canvas');
      canvas.width = 580;
      canvas.height = 140;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 580, 140);
      ctx.fillStyle = '#111111';
      ctx.font = 'normal 46px Merriweather, Georgia, serif';
      ctx.fillText('Heritage & Craft 1928', 30, 85);
      return canvas.toDataURL('image/png');
    });

    await page.evaluate(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], 'merriweather-specimen.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('file-input') as HTMLInputElement;
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, dataUrl);

    await expect(page.locator('#crop-stage')).toBeVisible({ timeout: 5000 });
    await page.locator('#crop-text-input').fill('Heritage & Craft 1928');
    await page.locator('#btn-run-analysis').click();
    await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

    await expect(page.locator('#res-trait-category')).toContainText(/serif/i);
    const fontFamily = page.locator('#res-font-family');
    await expect(fontFamily).toContainText(/Merriweather|Lora|EB Garamond|Playfair Display/i);
  });

  test('13. Benchmark: Honest Confidence Calibration on ambiguous input (no false 100%)', async ({ page }) => {
    await page.goto('/');

    // Inter vs Roboto is notoriously close
    const cleanSansBtn = page.locator('[data-sample="inter"]');
    await cleanSansBtn.click();
    await page.locator('#btn-run-analysis').click();
    await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

    const confText = await page.locator('#res-confidence').textContent();
    const confNum = parseInt(confText?.replace('%', '') || '0', 10);

    // Must NEVER claim 100% on ambiguous sans-serif
    expect(confNum).toBeLessThanOrEqual(95);

    // Runner ups must be populated with close alternatives
    const altCount = await page.locator('#res-alternatives-list > div').count();
    expect(altCount).toBeGreaterThanOrEqual(2);

    // Confidence label must be honest (Good Match or Uncertain / Close Match, not fake 100%)
    const confLabel = await page.locator('#res-confidence-label').textContent();
    expect(confLabel).toMatch(/Good Match|Uncertain \/ Close Match|High Confidence/i);
  });
});
