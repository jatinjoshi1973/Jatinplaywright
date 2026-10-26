import{test,expect} from "@playwright/test"
import data1 from "../testdata/single.json"
import data2 from "../testdata/multiple.json"

test ('single test', async({page})=>{
     await page.goto('https://demowebshop.tricentis.com/');
           await page.getByRole('link', { name: 'Log in' }).click(); 
           await page.getByRole('textbox', { name: 'Email:' }).fill(data1.username);
           await page.getByLabel('Password:').fill(data1.password);
           await page.locator('input.button-1.login-button').click();
           if (data1.validity=='valid'){
            await expect(page,"with valid credntials login is not successful").toHaveURL('https://demowebshop.tricentis.com/')
           }
           else{
            await expect(page,"with valid credntials login is successful").not.toHaveURL('https://demowebshop.tricentis.com/')
           }
            await page.waitForTimeout(2000);
            
})

for (const{username,password,validity} of data2){
    test.only(`multiple test with ${username} and ${password}`, async({page})=>{
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
            
});
}
