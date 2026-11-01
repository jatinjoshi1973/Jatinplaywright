import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 17 Pro'],
});

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('jatin');
  await page.getByRole('textbox', { name: 'First name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('hari');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('jatin789@test.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Admin@123');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});