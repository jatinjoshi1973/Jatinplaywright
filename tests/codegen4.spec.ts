import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('jatin789@test.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to our store' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
});

test('Search', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('computer');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('mobile');
  await page.locator('form').filter({ hasText: 'No search results. Search' }).getByRole('button').click();
  await expect(page.getByText('No products were found that')).toBeVisible();
});