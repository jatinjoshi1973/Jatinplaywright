import { test, expect } from '@playwright/test';

test('Visible and Whole page screen shot', async({page})=> {
    const localdatetime = new Date().toLocaleString("sv-SE").replace(" ", "T").replaceAll(':', '-');
    console.log(localdatetime);
    const dynamicName = "DWS"+localdatetime;

    

    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.getByRole('textbox', {name: 'Email'}).fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').fill('123456');
    await page.locator('input.button-1.login-button').click();
    //Visible page
    //await page.screenshot({path:'E:/Q-spiders-JS/Jatinplaywright/tests/Resourcefile/dws.png'});
    //whole page
    await page.screenshot({path:'E:/Q-spiders-JS/Jatinplaywright/tests/Resourcefile/'+dynamicName+'.png', fullPage:true});
    await page.waitForTimeout(3000);



})

test('Element screenshot', async({page})=> {
    const localdatetime = new Date().toLocaleString("sv-SE").replace(" ", "T").replaceAll(':', '-');
    console.log(localdatetime);
    const dynamicName = "DWSHomepageproduct"+localdatetime;
    await page.goto('https://demowebshop.tricentis.com/')
    await page.locator('div.product-grid.home-page-product-grid').screenshot({path:'E:/Q-spiders-JS/Jatinplaywright/tests/Resourcefile/'+dynamicName+'.png'})
    await page.waitForTimeout(3000)
})    

test('Screen shot taken on failure and video', async({page})=> {
     

    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.getByRole('textbox', {name: 'Email'}).fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').fill('123');
    await page.locator('input.button-1.login-button').click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')
    await page.waitForTimeout(3000);



})

test.only('Trace viewer by steps', async({context,page})=> {
     await context.tracing.start({screenshots:true, snapshots:true});

    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.getByRole('textbox', {name: 'Email'}).fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').fill('123');
    await page.locator('input.button-1.login-button').click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')
    await page.waitForTimeout(3000);
    await context.tracing.stop({path:'E:/Q-spiders-JS/Jatinplaywright/tests/Resourcefile/trace.zip'});


})