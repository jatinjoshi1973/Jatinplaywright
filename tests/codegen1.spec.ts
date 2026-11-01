import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('Computer');
  await page.getByRole('button', { name: 'Search' }).click();
});