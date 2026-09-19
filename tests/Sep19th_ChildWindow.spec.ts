import {chromium, test} from "@playwright/test"

test('Multiple child', async({})=>{
     const browser = await chromium.launch();
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto('https://demowebshop.tricentis.com/');
     const links = await page.locator('[target="_blank"]').all();

     for (const link of links) {
          await Promise.all([context.waitForEvent('page'),link.click()]);
     }
     const childTabs=await context.pages();
     console.log(childTabs.length);
     
})