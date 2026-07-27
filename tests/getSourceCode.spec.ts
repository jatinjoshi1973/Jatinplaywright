import {test, expect} from "@playwright/test"


test('Getting source code from web page', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com');
 await page.waitForTimeout(5000);
 const source_code = await page.content();
 console.log(source_code);
 await page.waitForTimeout(5000);
 console.log("Completed");
 
 

})