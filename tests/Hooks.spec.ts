import{test, Expect, Page, Locator, expect, TestInfo} from "@playwright/test"

let page:Page;
test.beforeAll('Beforeall', async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/');
    console.log('BeforAll');
    
})

test.beforeEach('before', async({},testInfo:TestInfo)=> {
    if(testInfo.title=="tc_003"){
        return;
    }
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('jatinhari@yahoo.com')
    await page.getByLabel('Password:').fill('123456');
    await page.locator('input.button-1.login-button').click();
    console.log('BeforeEach');
    


})

test.afterEach('after', async({},testInfo:TestInfo)=>{
    if(testInfo.title=="tc_003"){
        return;
    }
    await page.getByRole('link', {name: 'Log out'}).click();
    console.log('AfterEach');
    

})

test.afterAll('Afterall', async()=>{
    await page.close();
    console.log('AfterAll');
    
})

test('tc_001', async({})=>{
    expect(await page.getByRole('link', {name: 'Log out'})).toBeVisible();
    console.log('tc_001');
    
})

test('tc_002', async({})=>{
    await page.locator('#small-searchterms').fill('computer');
    await page.locator('input.button-1.search-box-button').click();
    const products = await page.locator('.product-item').all();
    const size = products.length;
    console.log(size);
    expect(size).toBe(4);
    console.log('tc_002');
    
    
})

test('tc_003', async({})=>{
    console.log('tc_003');
    
})