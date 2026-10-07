import { test, expect } from '@playwright/test';

test('Retry Network', async({page})=> {
     

    await page.goto('https://demowebshop.tricentis.com/');
    const textfield=page.locator('#small-searchterms');
    textfield.fill('computer');
    await page.waitForTimeout(5000);
    expect(textfield).toHaveValue('computer');



})