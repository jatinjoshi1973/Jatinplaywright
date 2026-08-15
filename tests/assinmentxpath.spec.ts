import {test, expect, Locator } from "@playwright/test";

test ('assinment', async({page}) => {
     await page.goto('https://demowebshop.tricentis.com/gift-cards')
     const gift1:Locator = page.locator("//a[text()='$5 Virtual Gift Card']")
     console.log(await gift1.innerText());
     await page.locator("(//input[@value='Add to cart'])[1]").click();
     await page.waitForTimeout(5000)
     await page.locator("//input[@id='giftcard_1_RecipientName']").fill("Jatin Joshi");
     await page.locator("//input[@id='giftcard_1_RecipientEmail']").fill('jatinhari@yahoo.com');
     await page.locator("//input[@id='giftcard_1_SenderName']").fill('Nitin Joshi');
     await page.locator("//input[@id='giftcard_1_SenderEmail']").fill('jatinhari13@yahoo.com');
     await page.locator("//textarea[@name='giftcard_1.Message']").fill("This is a gift card message");
     await page.locator("//input[@name='addtocart_1.EnteredQuantity']").fill("2");
     await page.locator("//input[@id='add-to-cart-button-1']").click();
     await page.waitForTimeout(5000)
     await page.goto('https://demowebshop.tricentis.com/cart');
     await page.locator("//input[@name='removefromcart']").check();
     await page.locator("//input[@value='Update shopping cart']").click();
     await page.waitForTimeout(5000)

})