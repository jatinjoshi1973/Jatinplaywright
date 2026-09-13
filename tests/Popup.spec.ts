import {test, expect, Locator, Frame} from "@playwright/test"

test('Simple alert', async({page})=>{
     page.on('dialog', async dialog => {
        await dialog.accept();
        console.log(dialog.message());
        
     })

     await page.goto('https://demo.automationtesting.in/Alerts.html');
     const displayalert:Locator = page.locator('.btn.btn-danger');
     await displayalert.click();
     await page.waitForTimeout(3000);

})

test('Confirmation alert', async({page})=>{
     page.on('dialog', async dialog => {
        await dialog.accept();
        console.log(dialog.message());
        console.log(dialog.type());
             
     })

     await page.goto('https://demo.automationtesting.in/Alerts.html');
     await page.getByRole('link', {name:'Alert with OK & Cancel'}).click();
     const displayalert:Locator = page.locator('.btn.btn-primary');
     await displayalert.click();
     await page.waitForTimeout(3000);

})

test.only('Prompt alert', async({page})=>{
     page.on('dialog', async dialog => {
        
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.defaultValue());
        dialog.accept('Jatin');
        
             
     })

     await page.goto('https://demo.automationtesting.in/Alerts.html');
     await page.getByRole('link', {name:'Alert with Textbox '}).click();
     const displayalert:Locator = page.locator('.btn.btn-info');
     await displayalert.click();
     await page.waitForTimeout(3000);

})