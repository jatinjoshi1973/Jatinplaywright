import { expect, test } from "@playwright/test";
import * as XLSX from 'xlsx';

const path = 'E:/Q-spiders-JS/Jatinplaywright/testdata/login.xlsx'
const WorkBook=XLSX.readFile(path);
const sheetname=WorkBook.SheetNames[0]; //getting the name of the sheet using index
const sheet=WorkBook.Sheets[sheetname]; //passing the name to the sheet

//convert to json
const data:any=XLSX.utils.sheet_to_json(sheet);
console.log(data);
for (const{username,password,validity} of data){
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
