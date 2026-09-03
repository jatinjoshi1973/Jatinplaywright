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

test('Drag and Drop', async({page})=>{

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

test('QspidersDrag and Drop', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0&scenario=3');
    await page.waitForTimeout(2000);
    const qdrag:Locator = page.locator('.container-drag>div>section>div>div');
    const qdrop:Locator = page.locator('.container-drag');
    qdrag.dragTo(qdrop);
    await page.waitForTimeout(3000)
})

test('Qspiders Drop', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    await page.waitForTimeout(2000);
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'));
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'));
    await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'));
    await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'));
    await page.waitForTimeout(3000);
})

test('Qspiders Drag', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3');
    await page.waitForTimeout(2000);

     // Locate items
    const mobileCharger = page.getByText('Mobile Charger', { exact: true });
    const mobileCover = page.getByText('Mobile Cover', { exact: true });

    // Select multiple items using Ctrl
    await mobileCharger.click();
    await page.keyboard.down('Control');
    await mobileCover.click();
    await page.keyboard.up('Control');

    // Target
    const mobileAccessories = page.getByText('Mobile Accessories', { exact: true });

    // Drag selected items to target
    await mobileCharger.hover();
    await page.mouse.down();
    await mobileAccessories.hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);

    //Laptop dropdown
    const laptopcharger = page.getByText('Laptop Charger', {exact:true});
    const laptopcover = page.getByText('Laptop Cover', {exact:true});
    await laptopcharger.click();
    await page.keyboard.down('Control');
    await laptopcover.click();
    await page.keyboard.up('Control');
    const laptopaccessories = page.getByText('Laptop Accessories', {exact:true});
    await laptopcharger.hover();
    await page.mouse.down();
    await laptopaccessories.hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);

});

test('Qmouse hover', async ({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0');
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Enter Password').hover();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Enter Password').fill('123456');
    await page.waitForTimeout(3000)
    
    
})

test('Qmouse hover tooltip', async ({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/mouseHover/mouseHoverimage?sublist=1');
    const Image:Locator = page.locator('.px-8.pt-8.rounded-xl >div>img');
    await Image.hover();
    await page.waitForTimeout(2000)  
    const tooltip = await page.getByTitle('Order Placed Image', {exact:true}).getAttribute('title');
    console.log(tooltip);
    await page.waitForTimeout(3000);
    
    
})

test('Mousehover ratings', async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover/rating?sublist=2');
    await page.waitForTimeout(3000)
    const rating = page.locator('svg.Rating').nth(4);
    await rating.hover();
    await page.waitForTimeout(3000);
})

test('Mouse hover Tab', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3');
    await page.locator('.Men.p-4.relative').first().hover();
    await page.getByText("Men's Top wear", { exact: true }).hover();
    const tshirts = page.getByText("Men's T-Shirts", { exact: true });
    await expect(tshirts).toBeVisible();
    await tshirts.hover();

   const discounts = page.getByText("Discounts", { exact: true }).first();
   await expect(discounts).toBeVisible();
   await discounts.hover();

   const option = page.getByText("80% or more", { exact: true }).first();
   await expect(option).toBeVisible();
   await option.hover();
   await page.waitForTimeout(3000);
    
})

test.only('Mouse Click and hold', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0');
    await page.waitForTimeout(2000);
    await page.locator('#circle').hover();
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    
})
