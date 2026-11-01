import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('jatin789@test.com');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('radio', { name: 'Good' }).check();
  await page.getByRole('button', { name: 'Vote' }).click();
  await page.getByRole('heading', { name: 'Welcome to our store' }).click();
  await expect(page.getByText('jatin789@test.com Log out Shopping cart (0) Wishlist (0) You have no items in')).toBeVisible();
});