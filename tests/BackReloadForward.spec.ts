import {test, expect} from "@playwright/test"


test('BackReloadForward', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com');
 await page.waitForTimeout(3000);
 await page.goto('https://www.redbus.in');
 await page.goBack();
 await page.reload();
 await page.goForward();
 await page.waitForTimeout(3000);
 console.log("Action is performed");
 

})