import {test, Locator, expect} from "@playwright/test"

test('Dynamic webtable', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/table/dynamicTable?scenario=1')
    await page.getByRole('button', {name: 'Add To Favourite'}).click();
    await page.locator('#selection').selectOption('Jackets');
    await page.locator('[name="quantity"]').selectOption('2');
    await page.getByText('Add', { exact: true }).click();
    await expect(page.getByText('Jackets added to favourite!', {exact:true}).first()).toBeVisible();
    await page.waitForTimeout(3000);
    await page.locator("//tbody/tr[5]/td[5]/div[1]//*[name()='svg']").click();
    await page.locator('select[name="name"]').selectOption('Samsung Galaxy');
    await page.locator('select[name="quantity"]').selectOption('1');
    await page.getByRole('button', { name: 'Update' }).click();
    await expect(page.getByText('Samsung Galaxy updated successfully!', {exact: true}).first()).toBeVisible();
     await page.waitForTimeout(3000);
    await page.locator("//tbody/tr[5]/td[5]/section[1]/a[1]//*[name()='svg']").click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page.getByText('Samsung Galaxy deleted successfully!', {exact:true}).first()).toBeVisible();
    await page.waitForTimeout(5000);
})

test('Sort column', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/table/tableSort');
    await page.waitForTimeout(3000);
    await page.locator("//th[1]//article[1]//section[2]//*[name()='svg']").click();
    await page.waitForTimeout(3000);
    await page.locator("//th[2]//article[1]//section[2]//*[name()='svg']").click();
    await page.waitForTimeout(3000);
    await page.locator("//th[3]//article[1]//section[2]//*[name()='svg']").click();
    await page.waitForTimeout(3000);
    await page.locator("//th[4]//article[1]//section[2]//*[name()='svg']").click();
    await page.waitForTimeout(3000);
    await page.locator("//th[5]//article[1]//section[2]//*[name()='svg']").click();
    await page.waitForTimeout(3000);
})

test.skip('Table pagination', async({page})=>{
    
    await page.goto('https://demoapps.qspiders.com/ui/table/tablePagination');
    await page.waitForTimeout(3000);
    const pagination = page.locator('xpath = //*[@id="demoUI"]/main/section/article[1]/aside/div/div[2]/ul/li');
    let paginationcount = await pagination.count();
    console.log(paginationcount);
    for(let i=0;i<paginationcount;i++){
       await pagination.nth(i).click();
       await page.waitForTimeout(5000);
    }
 })

test('Table with check box', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/table/tableWithCheck');
    await page.waitForTimeout(3000);
    await page.locator(`//tr[td[contains(., 'Levis Shirt')]]//input[@type='checkbox']`).click();
    await page.locator(`//tr[td[contains(., 'APPLEIPhone')]]//input[@type='checkbox']`).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name: 'Remove Checked Rows'}).click();
    await page.getByRole('button', { name: 'yes' }).click();
    await page.waitForTimeout(3000);
})

test.only('multiple table', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/table/multipleTable');
    await page.waitForTimeout(3000);
    const productclick = await page.locator('xpath = //*[@id="demoUI"]/main/section/article[1]/aside/div/div[1]/table/tbody/tr')
    let product = await productclick.count();
    console.log(product);
    for(let i=0;i<product;i++){
        await productclick.nth(i).click();
        await page.waitForTimeout(3000);
    }

})

