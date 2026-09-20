import {chromium, Locator, test} from "@playwright/test"

test('Multiple child', async({})=>{
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

test('Multiple tab child', async({context})=>{
    
     const page = await context.newPage();
     await page.goto('https://demowebshop.tricentis.com/');
     const links = await page.locator('[target="_blank"]').all();
     for (const link of links) {
          await Promise.all([context.waitForEvent('page'),link.click()]);
     }
     const childpages = context.pages();
     for (const child of childpages){
          const actual_url = child.url();
          if (actual_url.includes('youtube')){
               await child.getByPlaceholder('Search').fill('naveen automation');
          }
          else if (actual_url.includes('facebook')){
               await child.locator('[aria-label="Create new account"]').click();
          }
     }
     await page.waitForTimeout(5000);
})

test('new window', async({context})=>{
     const page = await context.newPage();
     await page.goto('https://demowebshop.tricentis.com/');
     await page.keyboard.press('PageDown');
     await page.waitForTimeout(2000);
     await page.keyboard.press('PageDown');
     await page.waitForTimeout(2000);
     const facebook:Locator=page.getByRole('link', {name :'Facebook'});
     await page.keyboard.down('Shift');
     await Promise.all([context.waitForEvent('page'),facebook.click()]);
     const windows = context.pages();
     console.log('window count :' , windows.length);//2
     for (const window of windows) {
         const actual_url=window.url();
         if (actual_url.includes('facebook')){
          await window.locator('[aria-label="Create new account"]').click();
          console.log('window count :' , windows.length);//2         
     }
}
     await page.waitForTimeout(5000);
})

test.only('calendar with text field enabled', async({page})=> {
     page.goto('https://demo.automationtesting.in/Datepicker.html');
     //1st way
     //await page.locator('#datepicker2').fill('20/05/2000');
     //await page.waitForTimeout(3000);
     //2nd way
     // await page.locator('#datepicker2').click();
     // await page.getByTitle('change the year').selectOption({label: '2020'});
     // await page.getByTitle('change the month').selectOption({value: '5/2020'});
     // await page.getByRole('link', {name: '23'}).click();
     // await page.waitForTimeout(5000);

     //select system date in calendar
     let DateTime = new Date();
     let today = DateTime.toLocaleDateString('en-US');
     console.log(today);
     await page.locator('#datepicker2').fill(today);
     await page.waitForTimeout(5000);
     
})