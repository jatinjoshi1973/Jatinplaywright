import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('jatinhari@yahoo.com');
  await page.getByRole('textbox', { name: 'Password:' }).fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
});