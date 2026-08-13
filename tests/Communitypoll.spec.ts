import {test, expect, Locator} from "@playwright/test"

test('Community option Excellent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    let poll:Locator=page.getByText('Community poll');
    let text= await poll.textContent();
    console.log(text);
    await page.getByRole('radio', { name: 'Excellent' }).click();
    await page.getByRole('button', { name: 'Vote' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('radio', { name: 'Good' }).click();
    await page.getByRole('button', { name: 'Vote' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('radio', { name: 'Poor' }).click();
    await page.getByRole('button', { name: 'Vote' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('radio', { name: 'Very bad' }).click();
    await page.getByRole('button', { name: 'Vote' }).click();
    await page.waitForTimeout(5000);
    await page.close();

}) 

