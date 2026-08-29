import {test, expect, Locator} from "@playwright/test"

// test('Action elements', async ({page}) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     const polls = page.locator("//input[@name='pollanswers-1']");
//     let size = await polls.count();
//     console.log(" Size of polls is:", size);
//     for(let i=0;i<size;i++){
//     await polls.nth(i).click();
//     await page.waitForTimeout(2000);
//     }
//     await page.waitForTimeout(3000);
    
    
// }); 

test.only('Action elements with click', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const polls = page.locator(".poll-options>li>input");
    let size = await polls.count();
    console.log(" Size of polls is:", size);
    for(let i=0;i<size;i++){
    await polls.nth(i).click();
    await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(3000);
    
    
}); 