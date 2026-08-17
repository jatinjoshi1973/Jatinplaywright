import {test, expect, Locator} from "@playwright/test"

test('css', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    
    const poll1:string = await page.locator(".block.block-poll>div>strong").innerText();
    console.log((poll1)); 
       
    //await page.locator("input[id='small-searchterms']").fill("Computer");
    //await page.locator("input[class='button-1 search-box-button']").click();
    await page.locator("#small-searchterms").fill("computer");
    await page.locator(".button-1.search-box-button").click();
    await page.waitForTimeout(4000);

})    