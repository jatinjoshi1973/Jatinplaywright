import {test, expect, Locator, Frame, chromium} from "@playwright/test"

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

test('Prompt alert', async({page})=>{
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

test('Notification', async({page})=>{
     

     await page.goto('https://www.easemytrip.com/');
     await page.waitForTimeout(6000);

})

test('Authentication pop up', async({page})=>{
    
     await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');
     await page.waitForTimeout(6000);

})



test('File upload', async({page})=>{
    
     await page.goto('https://www.ilovepdf.com/word_to_pdf');
     const uploadelement:Locator = page.locator('[type="file"]')
     uploadelement.setInputFiles('C:\\Users\\LENOVO\\Desktop\\playwrightword.docx')
     await page.waitForTimeout(6000);

})

test('multipleFile upload', async({page})=>{
    
     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
     const uploadelement:Locator = page.getByTestId('filesToUpload')
     uploadelement.setInputFiles(['C:\\Users\\LENOVO\\Desktop\\playwrightword.docx', 'C:\\Users\\LENOVO\\Desktop\\Insurance claim.xlsx']);
     expect(page.locator('#fileList li:nth-child(1)')).toHaveText('playwrightword.docx');
     expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Insurance claim.xlsx');
     await page.waitForTimeout(2000);
     uploadelement.setInputFiles([]);
     expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
     await page.waitForTimeout(4000);

})

test('Single child', async({})=>{

     const browser = await chromium.launch();
     const context = await browser.newContext();
     const page1 = await context.newPage();
     await page1.goto('https://demowebshop.tricentis.com/');
     await Promise.all([context.waitForEvent('page'), page1.getByRole('link', {name: 'Facebook'}).click()]);
     const tabs = context.pages();
     console.log('number pages present :', tabs.length); //2
     console.log( tabs[0].url());//demo
     console.log( tabs[1].url());//facebook
     await tabs[1].locator('[aria-label="Create new account"]').click();
     await page1.waitForTimeout(2000);
     
     
})

test.only('Multiple child', async({})=>{
     const browser = await chromium.launch();
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto('https://demowebshop.tricentis.com/');
     const links = await page.locator('[target="_blank"]').all();

     for (const link of links) {
          await Promise.all([context.waitForEvent('page'),link.click()]);
     }
     const childTabs=await context.pages();
     console.log(childTabs.length);
     
     
})

