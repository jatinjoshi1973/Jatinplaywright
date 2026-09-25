import {test, expect, Locator} from "@playwright/test"

test('Javascript pop up', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1');

    // Select Levis Shirt
    await page.locator(`//tr[td[contains(., 'Levis Shirt')]]//input[@type='checkbox']`).click();

    // Handle the prompt BEFORE clicking Delete
    page.once('dialog', async dialog => {

        console.log('Dialog message:', dialog.message());
        console.log('Dialog type:', dialog.type());
              
        await dialog.accept('Levis shirt purchased successfully');
    });

    // Trigger the prompt
    await page.locator('#deleteButton').click();
    await page.waitForTimeout(15000)

});

test('Hidden division pop up', async({page})=> {
     await page.goto('https://demoapps.qspiders.com/ui/hidden?sublist=0', {waitUntil: 'domcontentloaded'});
     await page.waitForTimeout(2000);
     await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/hidden?sublist=0');
     
     await page.getByRole('button', {name: 'Add Customer'}).click();
     const popup = page.getByText('Create a customer', { exact: true });
     await expect(popup).toBeVisible();
    
        await page.locator('#customerName').fill('Jatin')
        await page.locator('#customerEmail').fill('jatin@test.com')
        await page.locator('#prod').selectOption('Mobile')
        await page.locator('#message').fill('This is for test')
        await page.waitForTimeout(3000);
        await page.getByRole('button', {name: 'Submit'}).click();
        await page.waitForTimeout(5000);
   
})

test.skip('new window', async({context})=>{
    const page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0', {waitUntil : 'domcontentloaded'})
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/browser?sublist=0');
    await page.locator('button').filter({ hasText: 'view more' }).first().click();
    const pages = context.pages();
    const newPage = pages[pages.length - 1];
    await newPage.getByRole('button', { name: 'Add to Cart' }).click();
    await page.waitForTimeout(2000)
    await page.locator('button').filter({ hasText: 'view more' }).last().click();
    const pages1 = context.pages();
    const newPage1 = pages1[pages1.length - 1];
    await newPage1.locator('button').filter({ hasText: 'Add to Cart' }).last().click();
    await page.waitForTimeout(5000)
})

test.only('new Tab', async({context})=>{
    const page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1', {waitUntil : 'domcontentloaded'})
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
    await page.locator('button').filter({ hasText: 'view more' }).first().click();
   const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        page.goto('https://demoapps.qspiders.com/ui/browser/product/1')
    ]);
    await childPage.waitForLoadState('domcontentloaded');
    await childPage.getByRole('button', { name: 'Add to Cart' }).click();
    console.log(await childPage.url());
    await page.waitForTimeout(2000)
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1', {waitUntil : 'domcontentloaded'})
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
    await page.locator('button').filter({ hasText: 'view more' }).last().click();
    const [childPage1] = await Promise.all([
        context.waitForEvent('page'),
        page.goto('https://demoapps.qspiders.com/ui/browser/product/2')
    ]);
    await childPage1.waitForLoadState('domcontentloaded');
    await childPage1.getByRole('button', { name: 'Add to Cart' }).click();
    console.log(await childPage1.url());
    await page.waitForTimeout(5000)
})

