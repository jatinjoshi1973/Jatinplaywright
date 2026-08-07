import {test, expect, Locator} from "@playwright/test"

test('Element by text', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com/');
 //await page.getByText('Register').click();
 await page.getByText('Shopping cart').first().click();
 await page.waitForTimeout(3000);
})

test('Read by text', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com/');
 let poll:Locator=page.getByText('Community poll');
 let text=await poll.innerText();
 console.log(text);
 
 await page.waitForTimeout(3000);
})

test('Read text inside element', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com/');
 let poll:Locator=page.getByText('Community poll');
 let text=await poll.textContent();
 console.log(text);
 
 await page.waitForTimeout(3000);
})

