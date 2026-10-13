import {test, Expect, Page, expect, TestInfo} from "@playwright/test"

let page:Page
test.beforeAll('Hooks Before All', async({browser})=> {
    page = await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/')
    await page.waitForTimeout(3000)
    console.log('BeforeAll');   

})

test.beforeEach('before', async({},testInfo:TestInfo)=> {
    if(testInfo.title=="TC_09"){
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('jatinhari@yahoo.com')
    await page.getByLabel('Password:').fill('123456');
    await page.locator('input.button-1.login-button').click();
    console.log('BeforeEach');

    }   


})

test.afterEach('after', async({},testInfo:TestInfo)=>{
    if(testInfo.title=="TC_09"){
      await page.getByRole('link', {name: 'Log out'}).click();
    console.log('AfterEach');  
    } 
    

})


test.afterAll('Afterall', async()=>{
    await page.close();
    console.log('AfterAll');
    
})

test('TC_01', async({})=> {
    expect(await page.getByRole('link', {name: 'Demo Web Shop'} )).toBeVisible();  
    console.log('TC_01 is passed: Open the demo web page');
    
})

test('TC_02', async({})=> {
    expect(await page.getByRole('link', { name: 'Register' })).toBeVisible();
    console.log('TC_02 is passed: On home page Register link display');
    
})

test('TC_03', async({})=> {
    expect(await page.getByRole('link', { name: 'Log in' })).toBeVisible();
    console.log('TC_03 is passed: On home page Login link display');
    
})

test('TC_04', async({})=> {
    expect(await page.locator('span:has-text("Shopping cart")')).toBeVisible();
    console.log('TC_04 is passed: On home page Shopping cart link display');
    
})

test('TC_05', async({})=> {
    expect(await page.locator('span:has-text("Wishlist")')).toBeVisible();
    console.log('TC_05 is passed: On home page Whishlist link display');
    
})

test('TC_06', async({})=> {
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Log in' })).toBeVisible();
    console.log('TC_06 is passed: On home page Login link display and clickable');
    
})

test('TC_07', async({})=> {
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('j@t.com');
    await page.getByLabel('Password:').fill('1234');
    await page.locator('input.button-1.login-button').click();
    await page.waitForTimeout(5000);
    expect(await page.getByText('Login was unsuccessful. Please correct the errors and try again.')).toBeVisible();
    expect(await page.getByText('The credentials provided are incorrect')).toBeVisible();
    console.log('TC_07 is passed: Enter Login credentials are invalid');
    
})

test('TC_08', async({})=> {
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').fill('123456');
    await page.locator('input.button-1.login-button').click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Log out' })).toBeVisible();
    console.log('TC_08 is passed: Login is successful and Logout link display');
    
})

test.only('TC_09', async({})=> {

    await page.locator('#small-searchterms').fill('14.1 - INCH Laptop')
    await page.locator('input[type="submit"]').click
    await page.goto('https://demowebshop.tricentis.com/141-inch-laptop')
    await page.waitForTimeout(3000);
    await page.locator('#add-to-cart-button-31').click();
    await page.locator('span').filter({ hasText: 'Shopping cart' }).click();
    await page.waitForTimeout(3000);
    console.log('TC_09 : Is passed');
    
})