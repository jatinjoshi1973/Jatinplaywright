import {test, expect, Locator} from "@playwright/test"

test('Xpath', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    //await page.locator("xpath=/html/body/div[4]/div/div/div[2]/ul/li[1]/a").click();
    await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[1]/a").click();
    await page.waitForTimeout(3000);
    await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[2]/a").click();
    await page.waitForTimeout(3000);
    await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[3]/a").click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Wishlist (0)' }).click();
    await page.waitForTimeout(5000);
})    