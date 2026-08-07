import {test, expect, Locator} from "@playwright/test"

test('DWS Login', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByText('Log in').click();
    await page.getByLabel('Email:').fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').fill('123456');
    await page.getByLabel('Remember me?').click();
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(5000);
    await page.close();

})    