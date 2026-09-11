import { test, expect } from '@playwright/test';

test('Verify cursive / handwriting image matching', async ({ page }) => {
  await page.goto('/');

  // Generate cursive script image for "equipment"
  const dataUrl = await page.evaluate(async () => {
    // Load a handwriting font
    await document.fonts.load('400 48px "Caveat"');

    const canvas = document.createElement('canvas');
    canvas.width = 460;
    canvas.height = 130;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#111111';
    ctx.font = '400 48px "Caveat", cursive';
    ctx.textBaseline = 'middle';
    ctx.fillText('equipment', 30, 65);
    return canvas.toDataURL('image/png');
  });

  await page.evaluate(async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], 'cursive-specimen.png', { type: 'image/png' });
    const dt = new DataTransfer();
    dt.items.add(file);
    const input = document.getElementById('file-input') as HTMLInputElement;
    input.files = dt.files;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }, dataUrl);

  await expect(page.locator('#crop-stage')).toBeVisible({ timeout: 5000 });
  await page.locator('#crop-text-input').fill('equipment');
  await page.locator('#btn-run-analysis').click();
  await expect(page.locator('#results-stage')).toBeVisible({ timeout: 10000 });

  // Verify that Nunito is NOT the primary font
  const primaryFamily = await page.locator('#res-font-family').textContent();
  console.log('Primary Matched Font:', primaryFamily);
  expect(primaryFamily).not.toBe('Nunito');

  // Verify that the category is handwriting or display, NOT plain sans-serif
  const category = await page.locator('#res-trait-category').textContent();
  console.log('Matched Category:', category);
  expect(category).toMatch(/handwriting|display/i);

  // Check ranked cards list
  const rankedCards = page.locator('#res-ranked-cards-list > div');
  const count = await rankedCards.count();
  console.log('Ranked cards rendered count:', count);
  expect(count).toBeGreaterThanOrEqual(3);

  // Verify Copy CSS button exists and shows feedback
  const firstCopyBtn = rankedCards.first().locator('.btn-copy-card-css');
  await expect(firstCopyBtn).toBeVisible();
  await firstCopyBtn.click();
  await expect(firstCopyBtn).toContainText('Copied');
});
