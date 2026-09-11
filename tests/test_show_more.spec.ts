import { test, expect } from '@playwright/test';

test('Verify Browse Fonts Show More loads 9 fonts per click', async ({ page }) => {
  await page.goto('/fonts');

  // Wait for catalog load
  await page.waitForTimeout(500);

  // Initial count should be 9
  const fontCards = page.locator('.font-item');
  await expect(fontCards).toHaveCount(9);

  const countLabel = page.locator('#font-count-label');
  await expect(countLabel).toContainText('Showing 9 of');

  const btnShowMore = page.locator('#btn-show-more');
  await expect(btnShowMore).toBeVisible();

  // Click Show More (+9)
  await btnShowMore.click();
  await page.waitForTimeout(300);

  // Should now have 18 fonts
  await expect(fontCards).toHaveCount(18);
  await expect(countLabel).toContainText('Showing 18 of');

  // Click Show More (+9) again
  await btnShowMore.click();
  await page.waitForTimeout(300);

  // Should now have 27 fonts
  await expect(fontCards).toHaveCount(27);
  await expect(countLabel).toContainText('Showing 27 of');
});
