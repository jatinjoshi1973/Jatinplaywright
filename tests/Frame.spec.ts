
import {test, expect, Locator} from "@playwright/test"

test.only('Frame actions', async({page})=>{

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