import {test, expect, Locator} from "@playwright/test"

test('Mouse hover', async({page})=>{

    await page.goto('https://www.myntra.com/');
    await page.getByRole('link', {name: 'Home'}).first().hover();
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name: 'Clocks'}).first().click();
    await page.waitForTimeout(3000);
})

test('Click, Rightclick, Doubleclick', async({page})=>{

    await page.goto('https://demoqa.com/buttons');
    await page.waitForTimeout(2000);
    await page.getByTestId("doubleClickBtn").dblclick();
    await page.waitForTimeout(2000);
    await page.getByTestId("rightClickBtn").click({button:'right'});
    await page.waitForTimeout(2000);
    await page.getByRole('button',{name:'Click Me', exact:true}).click({button:'left'});
    await page.waitForTimeout(3000);
})

test('scrolling', async({page})=>{

    await page.goto('https://www.myntra.com/');
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,1500);
    await page.waitForTimeout(2000); 
    await page.mouse.wheel(0,-1500);
    await page.waitForTimeout(2000);
    const men:Locator = page.locator("(//a[text()='Men'])[2]");
    await men.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

})

test.only('Drag and Drop', async({page})=>{

    await page.goto('https://demo.automationtesting.in/Static.html');
    await page.waitForTimeout(2000);
    // Single Drag and Drop
    const drag:Locator=page.getByTestId('mongo');
    const target:Locator=page.getByTestId('droparea');
    //drag.dragTo(target);
    //multiple drag and drop
    const drags:Locator=page.locator('#dragarea>div>img');
    let size=await drags.count();
    console.log(size);
    for (let i=0;i<size;i++){
        drags.nth(i).dragTo(target);
        await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(3000);

})

