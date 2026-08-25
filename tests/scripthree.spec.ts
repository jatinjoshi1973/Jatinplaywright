import { test, expect } from '@playwright/test';

test('Search flight Pune to Dubai', async ({ page }) => {

  await page.goto('https://www.makemytrip.com/flights/');

 // From
  await page.getByText('From', { exact: true }).click();

  // Enter Pune
  const fromInput = page.locator('input[placeholder="From"]');
  await fromInput.fill('Pune');

  // Wait for Pune suggestion
  await page.getByText('PNQ', { exact: true }).first().click({ force: true });
  await page.waitForTimeout(4000);

   // To
  await page.getByText('To', { exact: true }).click();

  // Enter Dubai
  const toInput = page.locator('input[placeholder="To"]');
  await toInput.fill('Dubai');

  // Wait for Dubai suggestion
  await page.getByText('DXB', { exact: true }).first().click({ force: true });
  await page.waitForTimeout(4000);

  //Select date from calendar
  await page.locator('[role="gridcell"][aria-label="Wed Sep 16 2026"]').click();

  // Search
  await page.locator('a.widgetSearchBtn').click();
  
});