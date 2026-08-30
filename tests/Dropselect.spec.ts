import {test, expect, Locator} from "@playwright/test"

test('single select', async ({page}) => {
    await page.goto('file:///C:/Users/LENOVO/Downloads/demo-1.html');
    await page.waitForTimeout(2000);
    //by using text
    const cars1:Locator=page.getByTestId('standard_cars');
    await cars1.selectOption('Land Rover');
    await page.waitForTimeout(2000);
    //by using label
    await cars1.selectOption({label:'Mercedes'});
    await page.waitForTimeout(2000);
    //by using Value
    await cars1.selectOption({value:'jgr'});
    await page.waitForTimeout(2000);
    //by using index
    await cars1.selectOption({index:2});
    await page.waitForTimeout(2000);

    let alltext:string[] = await cars1.allTextContents();
    console.log(alltext);
    
})

test.only('Multiple select', async ({page}) => {
    await page.goto('file:///C:/Users/LENOVO/Downloads/demo-1.html');
    await page.waitForTimeout(2000);
    //by using text
    const cars1:Locator=page.getByTestId('multiple_cars');
    await cars1.selectOption(['Audi', 'BMW', 'Ford']);
    await page.waitForTimeout(2000);
    await cars1.selectOption([{label:'Audi'},{label:'BMW'}]);
    await page.waitForTimeout(2000); 
    await cars1.selectOption([{index:5},{index:6}]);
    await page.waitForTimeout(3000);  
    
    let alltext1:string[] = await cars1.allTextContents();
    console.log(alltext1);
})