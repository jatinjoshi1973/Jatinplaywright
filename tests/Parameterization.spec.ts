import {test, expect} from "@playwright/test"

const products:string[] = ['laptop', 'computer', 'gift card', 'mobile'];

for (const product of products) {
    test (`search product of ${product}`, async({page})=> {
        const ouput = product+'is not availble'
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(product);
        await page.locator('input.button-1.search-box-button').click();
        const result = page.locator('[class="product-item"]');
        expect (await result.count(), ouput).toBeGreaterThan(0);
        console.log(product, 'is available');
        await page.waitForTimeout(2000)
        
    })
}

const credentials:string[][] = [
    ['jatinhari@yahoo.com','123456','valid'],
    ['jatin@arkenea.com', '123456', 'valid'],
    ['jatintest.com','123456','invalid'],
    ['','','invalid'],
]

for (const [username,password,validity] of credentials) {
    test.only (`test with ${validity} is ${username} and ${password}`, async({page})=> {
        await page.goto('https://demowebshop.tricentis.com/');
       await page.getByRole('link', { name: 'Log in' }).click(); 
       await page.getByRole('textbox', { name: 'Email:' }).fill(username);
       await page.getByLabel('Password:').fill(password);
       await page.locator('input.button-1.login-button').click();
       if (validity=='valid'){
        await expect(page,"with valid credntials login is not successful").toHaveURL('https://demowebshop.tricentis.com/')
       }
       else{
        await expect(page,"with valid credntials login is successful").not.toHaveURL('https://demowebshop.tricentis.com/')
       }
        await page.waitForTimeout(2000);
        
    })
}