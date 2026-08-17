import {test, expect, Locator } from "@playwright/test";

test ('assinment', async({page}) => {
     await page.goto('https://demowebshop.tricentis.com/desktops')
     const desktop = page.locator("//a[text()='Build your own cheap computer']");
     console.log(await desktop.innerText());
     await page.waitForTimeout(5000);
     await page.locator("(//input[@value='Add to cart'])[1]").click();
     await page.waitForTimeout(5000);
     await page.locator("//label[contains(normalize-space(),'Processor')]").isVisible();
     await page.locator("//label[normalize-space()='Slow']/preceding-sibling::input[@type='radio']").check();
     await page.locator("//label[contains(normalize-space(),'RAM')]").isVisible();
     await page.locator("//label[text()='8 GB  [+60.00]']").check();
     await page.locator("//label[contains(normalize-space(),'HDD')]").isVisible();
     await page.locator("//label[text()='400 GB  [+100.00]']").check();
     await page.locator("//label[contains(normalize-space(),'Software')]").isVisible();
     await page.locator("//label[text()='Image Viever  [+5.00]']").check();
     await page.locator("#addtocart_72_EnteredQuantity").fill('2');
     await page.locator(".button-1.add-to-cart-button").click();
     await page.waitForTimeout(5000);
     await page.getByRole('link', { name : 'Shopping cart'}).first().click();
     const checkbox:Locator = await page.locator("//input[@name='removefromcart']");
     checkbox.check();
     await page.locator("//input[@value='Update shopping cart']").click();
     await page.waitForTimeout(5000);


});     