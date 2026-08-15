import {test, expect, Locator} from "@playwright/test"

// test('Xpath', async ({page}) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     //await page.locator("xpath=/html/body/div[4]/div/div/div[2]/ul/li[1]/a").click();
//     await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[1]/a").click();
//     await page.waitForTimeout(3000);
//     await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[2]/a").click();
//     await page.waitForTimeout(3000);
//     await page.locator("xpath=/html/body/div[4]/div/div/div/div/ul/li[3]/a").click();
//     await page.waitForTimeout(3000);
//     await page.getByRole('link', { name: 'Wishlist (0)' }).click();
//     await page.waitForTimeout(5000);
// })  

// test('Relative Xpath by Attribute', async ({page}) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     //By attribute
//     // await page.locator("//input[@value='Add to cart']").first().click();
//     // await page.locator("//input[@value='Add to cart']").nth(1).click();
//     // by contains attribute for partial selection
//     await page.locator("input[contains(@class,'search-box-text')]").fill('laptop')
//     await page.waitForTimeout(3000);
//     await page.locator("(//input[@value='Add to cart'])[2]").click();
//     await page.locator("//a[@class='ico-cart']").first().click();
//     await page.waitForTimeout(5000);
// })

// test('Relative Xpath by Text contain', async ({page}) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     //By Text
//     await page.locator("//a[text()='Register']").click();
//     await page.waitForTimeout(3000);
//     await page.locator("//a[contains(text(),'Digital downloads')])[1]").click();
//     await page.waitForTimeout(5000);
 
// })

test('Relative Xpath Traversing', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const poll:Locator = page.locator("//div[@class='block block-poll']/div/strong");
    console.log(await poll.innerText());
    await page.locator("(//a[contains(text(),'Digital downloads')])[1]").click();
    const price:Locator = page.locator("//a[text()='3rd Album']/../following-sibling::div[3]/div/span");
    console.log(await price.innerText());
    await page.waitForTimeout(5000);
 
})

