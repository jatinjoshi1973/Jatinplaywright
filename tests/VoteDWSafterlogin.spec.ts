import { test, expect, Locator } from "@playwright/test";

test('Vote', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Login flow
  await page.getByText('Log in').click();
  await page.getByLabel('Email:').fill('jatinhari13@yahoo.com');
  await page.getByLabel('Password:').fill('123456');
  await page.getByLabel('Remember me?').check();
  await page.getByRole('button', { name: 'Log in' }).click();

  // Verify login
  await expect(page.getByText('Log out')).toBeVisible();

  // Community poll section
  const poll: Locator = page.getByText('Community poll');
  const text = await poll.textContent();
  console.log(text);

  // Vote action
  await page.getByText('Excellent').click();
  const voteButton = page.locator('#vote-poll-1');

  await voteButton.scrollIntoViewIfNeeded();
  await expect(voteButton).toBeVisible();
  await expect(voteButton).toBeEnabled();

  await voteButton.click();
  
  await page.waitForTimeout(5000);
  await page.close();

 
});
