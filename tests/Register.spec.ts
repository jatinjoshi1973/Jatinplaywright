import {test, expect, Locator} from "@playwright/test"

test('Register DWS', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByText('Register').click();
    await page.getByLabel('Male').first().click();
    await page.getByLabel('First name:').fill('Jatin');
    await page.getByLabel('Last name:').fill('Joshi');
    await page.getByLabel('Email:').fill('jatinhari13@yahoo.com');
    await page.getByLabel('Password:').first().fill('123456');
    await page.getByLabel('Confirm password:').fill('123456');
    await page.getByRole('button', {name: 'Register'}).click();
    await page.waitForTimeout(5000);
    await page.close();
    
})