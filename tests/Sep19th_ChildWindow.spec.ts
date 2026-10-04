import {chromium, Locator, test} from "@playwright/test"

test.skip('Multiple child', async({})=>{
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
     console.log(childTabs[0].url());
     console.log(childTabs[1].url());
     console.log(childTabs[2].url());
     console.log(childTabs[3].url());
     console.log(childTabs[4].url());
     
     await page.waitForTimeout(15000)
     
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
     await page.waitForTimeout(10000);
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
     const youtube:Locator=page.getByRole('link', {name :'Youtube'});
     await page.keyboard.down('Shift');
     await Promise.all([context.waitForEvent('page'),youtube.click()]);
     const windows = context.pages();
     console.log('window count :' , windows.length);//3
     for (const window of windows) {
         const actual_url=window.url();
         if (actual_url.includes('facebook')){
          await window.locator('[aria-label="Create new account"]').click();
          console.log('window count :' , windows.length);//3
                 
     }
     else if (actual_url.includes('youtube')){
               await window.getByPlaceholder('Search').fill('naveen automation');
               console.log('window count :' , windows.length);//3
          }

     }
     //await page.waitForTimeout(15000)
})
     


test.skip('calendar with text field enabled', async({page})=> {
     page.goto('https://demo.automationtesting.in/Datepicker.html');
     // //1st way
     // await page.locator('#datepicker2').fill('20/05/2000');
     // await page.waitForTimeout(3000);
     // //2nd way
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

test('Disabled date picker', async({page})=>{

     await page.goto('https://demo.automationtesting.in/Datepicker.html');
     await page.locator('#datepicker1').click();
     await page.getByTitle('Prev').click();
     await page.waitForTimeout(2000)
     await page.getByTitle('Next').click();
     await page.waitForTimeout(2000);
     await page.getByTitle('Next').click();
     await page.waitForTimeout(2000);
     await page.getByRole('link', {name: '21', exact: true}).click();
     await page.waitForTimeout(3000);
})

test.only('Calendar with out textfield', async({page})=> {
     //todays date
     let datetime = new Date();
     let today = datetime.toLocaleDateString('en-Gb');
     //pluse date
     let plusDT = new Date ();
     plusDT.setDate(plusDT.getDate()+120);
     let pluseDate = plusDT.toLocaleDateString('en-Gb');
     console.log(today);
     console.log('=============');
     console.log(pluseDate);
     await page.goto("https://www.easemytrip.com");
     await page.locator('#ddate').click();
     await page.locator("//li[contains(@id,'"+today+"')]").click();
     await page.locator('#rtag').click();
     for(;;){
          let calheader = page.locator('[class="month2"]').first();
          let text= await calheader.textContent();
          if (text?.includes('Jan 2027')){
               await page.locator("//li[contains(@id,'"+pluseDate+"')]").click();
               break;
          }
          else{
          await page.locator('#img2Nex').click();
          }
     }
     await page.waitForTimeout(3000)
     
     
     
})