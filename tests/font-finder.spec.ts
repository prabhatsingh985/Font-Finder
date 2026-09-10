import { test, expect } from '@playwright/test';

test.describe('Font Finder Website E2E Tests', () => {
  test('1. Homepage renders properly with title and uploader', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Font Finder/i);

    // Check main heading
    const heading = page.locator('h1');
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

    // Verify interactive specimen tester
    const specimenInput = page.locator('#specimen-text-input');
    await expect(specimenInput).toBeVisible();
    await specimenInput.fill('Custom Brand Headline Testing');
    await expect(specimenInput).toHaveValue('Custom Brand Headline Testing');
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

  test('4. Browse Fonts page has search, category filter, and live preview', async ({ page }) => {
    await page.goto('/fonts');

    await expect(page.locator('h1')).toContainText(/Verified Google Fonts/i);

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

    await expect(page.locator('h1')).toContainText('Inter');
    await expect(page.locator('text=Google Fonts Verified').first()).toBeVisible();

    // Check styles and weights section
    await expect(page.locator('text=Styles & Weights')).toBeVisible();

    // Check CSS code block
    await expect(page.locator('code').first()).toBeVisible();
  });

  test('6. Informational pages load correctly', async ({ page }) => {
    // How It Works
    await page.goto('/how-it-works');
    await expect(page.locator('h1')).toContainText(/How Font Finder Works/i);

    // About
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText(/About Font Finder/i);

    // Privacy
    await page.goto('/privacy');
    await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
    await expect(page.locator('body')).toContainText(/Zero Retention/i);

    // Terms
    await page.goto('/terms');
    await expect(page.locator('h1')).toContainText(/Terms of Service/i);
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
});
