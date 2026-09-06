
import {test, expect, Locator, Frame} from "@playwright/test"

test('Single iFrame', async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForTimeout(2000);
    //By using Name value
    // const singleframe = page.frame('SingleFrame');
    // singleframe?.locator("//input[@type='text']").fill("jatin");
    // await page.waitForTimeout(3000);
    //by using URL
    // const singleframe = page.frame({url:'https://demo.automationtesting.in/SingleFrame.html'});
    // singleframe?.locator("//input[@type='text']").fill('jatin');
    // await page.waitForTimeout(3000);

     //by using framelocator
     const singleframe=page.frameLocator('#singleframe');
     singleframe?.locator("//input[@type='text']").fill('jatin');
     await page.waitForTimeout(3000);


    })

    test.only('Nested iframe', async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForTimeout(2000);
    await page.getByRole('link', {name: 'Iframe with in an Iframe'}).click();
    const outerframe=await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'});
    if(outerframe){
        let innerFrames:Frame[]=outerframe.childFrames();
        console.log("Number of frame are:", innerFrames?.length);
        await innerFrames[0].locator("//input[@type='text']").fill('jatin');
        await page.waitForTimeout(2000)
    }
    else{
        console.log('Outer frame is null');
        
    }
    
     await page.waitForTimeout(3000);


    })