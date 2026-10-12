import {test, expect} from "@playwright/test"

test('Action on element', async({page})=> {
    await page.goto('https://demowebshop.tricentis.com/');
    //await page.getByRole('link', {name: 'Register'}).click();
    await page.getByRole('link', {name: '3rd Album'}).click();

})

test('Specific wait', async({page})=> {
    test.setTimeout(40000);
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill('computer')
    //await page.getByRole('link', {name: 'Register'}).click();
    await page.getByRole('link', {name: '3rd Album'}).click();

})

test('Triple the wait', async({page})=> {
    test.slow();
    await page.goto('https://demowebshop.tricentis.com/');
    //await page.getByRole('link', {name: 'Register'}).click();
    await page.getByRole('link', {name: '3rd Album'}).click();

})

test('Auto retrying Assertion', async({page})=> {
 
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name: 'Register'}).click();
    const heading=page.getByRole('heading', {name: 'Welcome to our store'})
    await expect(heading).toBeVisible({timeout:7000});
})

test.only('non retrying Assertion', async({page})=> {
 
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name: 'Register'}).click();
    const url = page.url();
    expect(url.includes('Men')).toBeTruthy();
})

test('Forcefully click', async({page})=> {
   
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill('computer', {force:true})
    await page.getByRole('link', {name: 'Register'}).click({force:true});
    
})
