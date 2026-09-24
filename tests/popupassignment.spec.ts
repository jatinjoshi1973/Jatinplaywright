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

test.only('Hidden division pop up', async({page})=> {
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
    
    
