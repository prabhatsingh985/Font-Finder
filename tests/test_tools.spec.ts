import { test, expect } from '@playwright/test';

test('Verify Tools hub and individual tool pages render properly', async ({ page }) => {
  // 1. Visit /tools hub
  await page.goto('http://localhost:4323/tools');
  await expect(page.getByRole('heading', { name: 'Font tools', level: 1 })).toBeVisible();

  // Verify all 6 tool links exist
  const expectedTools = [
    { href: '/tools/commercial-alternative', title: 'Find a free alternative to a paid font' },
    { href: '/tools/logo-font-finder', title: 'Identify the font in a logo' },
    { href: '/tools/screenshot-font-finder', title: 'Find the font in a screenshot' },
    { href: '/tools/pdf-font-finder', title: 'Detect the fonts in a PDF' },
    { href: '/tools/handwriting-font-finder', title: 'Find a handwriting or script font' },
    { href: '/tools/font-pairing', title: 'Find a font pairing' }
  ];

  for (const tool of expectedTools) {
    const link = page.locator(`a[href="${tool.href}"]`);
    await expect(link).toBeVisible();
    await expect(link).toContainText(tool.title);
  }

  // 2. Test navigation into Commercial Alternative tool
  await page.click('a[href="/tools/commercial-alternative"]');
  await expect(page).toHaveURL(/.*\/tools\/commercial-alternative/);
  await expect(page.getByRole('heading', { name: 'Find a free alternative to a paid font', level: 1 })).toBeVisible();
  await expect(page.locator('#dropzone')).toBeVisible();

  // 3. Test navigation into PDF font finder tool
  await page.goto('http://localhost:4323/tools/pdf-font-finder');
  await expect(page.getByRole('heading', { name: 'Detect the fonts in a PDF', level: 1 })).toBeVisible();
  await expect(page.locator('#dropzone')).toBeVisible();

  // 4. Test navigation into Font Pairing tool
  await page.goto('http://localhost:4323/tools/font-pairing');
  await expect(page.getByRole('heading', { name: 'Find a font pairing', level: 1 })).toBeVisible();
  await expect(page.locator('#dropzone')).toBeVisible();
});
