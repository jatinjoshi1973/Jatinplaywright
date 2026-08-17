import {test, expect, Locator} from "@playwright/test"

test('Clear and Getattributes', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("input[value='Add to cart']").first().click(); 
    await page.waitForTimeout(2000);
    const qty:Locator = await page.locator(".qty-input");
    await qty.clear();
    await qty.fill('3');
    await page.waitForTimeout(3000);
    let attributevalue = await qty.getAttribute('value');
    console.log("Attribute value is :", attributevalue);
    await page.waitForTimeout(5000);
    
}); 

test('Inpute value', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    let field = await page.getByTestId("small-searchterms");
    await field.fill("Computer");
    let currentdata:string = await field.inputValue();
    console.log('Current data is :', currentdata);
    await page.waitForTimeout(5000);
    
});

test.only('Check and Uncheck', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const excellent = await page.getByRole('radio', {name: 'Excellent'})
    excellent.check();
    await page.locator("input[value= 'Add to cart']").nth(1).click();
    await page.getByRole('link', {name: 'shopping cart'}).first().click();
    const checkbox:Locator = await page.locator("//input[@name='removefromcart']");
    checkbox.check();
    await page.waitForTimeout(2000);
    checkbox.uncheck();
    await page.waitForTimeout(5000);
    
});