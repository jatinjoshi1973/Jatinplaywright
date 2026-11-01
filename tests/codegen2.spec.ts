import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('computer');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('body')).toContainText('Build your own cheap computer');
});