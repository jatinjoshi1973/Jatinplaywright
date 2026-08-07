import {test, expect, Locator} from "@playwright/test"


test('By Alt Locator', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com/register');
 const logo:Locator=page.getByAltText('Tricentis Demo Web shop');
 await logo.click();
 await page.waitForTimeout(3000);
 await expect(logo).toBeVisible(); // check image is visible



})