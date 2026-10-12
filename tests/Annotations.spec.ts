import{test, Locator} from "@playwright/test"

test.skip('dws', async({page})=>{
    console.log('dws');    
    await page.goto('https://demowebshop.tricentis.com/');
})

test.fail('amazon', async({page})=>{
    console.log('amazon');    
    await page.goto('https://www.amazon.in/');
})

test.fixme('flipkart', async({page})=>{
    console.log('flipkart');    
    await page.goto('https://www.filpkart.com/');
})

test('myntra', async({page})=>{
    console.log('myntra');
    test.slow();    
    await page.goto('https://www.myntra.com/');
})

test('testcase skip on condition', async({page,browserName})=>{
    test.skip(browserName=='chromium',"then skip")
    console.log('testcase skip on condition');
    await page.goto('https://demowebshop.tricentis.com/');
})