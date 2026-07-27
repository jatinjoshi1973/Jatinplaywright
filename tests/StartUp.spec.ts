import {test, expect} from "@playwright/test"


test('Test1', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com/register');
 const current_url = page.url();
 const current_title = await page.title();
 console.log("Actual URL:", current_url);
 console.log("Actual Title:", current_title);
 
 
 

})