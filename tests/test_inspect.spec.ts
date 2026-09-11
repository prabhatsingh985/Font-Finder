import { test, expect } from '@playwright/test';

test('Verify Inspect link navigates to font specimen page without 404', async ({ page }) => {
  await page.goto('/fonts');
  await page.waitForLoadState('networkidle');

  const fontsToTest = ['AR One Sans', 'ABeeZee', 'ADLaM Display', 'Abhaya Libre'];

  for (const fontName of fontsToTest) {
    await page.goto('/fonts');
    await page.waitForLoadState('networkidle');
    const card = page.locator('.font-item', { hasText: fontName }).first();
    await expect(card).toBeVisible();

    const inspectLink = card.locator('a', { hasText: 'Inspect' });
    await inspectLink.click();
    await page.waitForLoadState('networkidle');

    const h1 = page.locator('article h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(fontName);

    const notFound = page.locator('text=404: Not found');
    await expect(notFound).toHaveCount(0);
  }
});
