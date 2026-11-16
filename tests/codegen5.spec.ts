import { test, expect } from '@playwright/test';

test('Qspidertest', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/slider?sublist=0');
  await page.waitForTimeout(3000)
  await page.locator('#slide').fill('6000');
  await page.waitForTimeout(3000)
  await page.getByRole('heading', { name: 'Mens Cotton Jacket...' }).click();
  await expect(page.getByText('Mens Casual Slim Fit')).toBeVisible();
  await page.waitForTimeout(3000)
});