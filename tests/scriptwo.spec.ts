import { test, expect, Locator } from '@playwright/test';

test('Scriptlogin', async({page})=> {

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.getByLabel('Email:').fill('jatinhari@yahoo.com');
    await page.getByLabel('Password:').first().fill('123456');
    await page.getByLabel('Remember me?').click();
    await page.waitForTimeout(3000);
    await page.locator('.button-1.login-button').click();
    
    await page.getByRole('link', {name : 'Digital downloads'}).first().click();
    await page.waitForTimeout(3000);
    await page.locator("//a[text()='3rd Album']/../following-sibling::div[3]/div/span").isVisible();
    await page.locator("(//input[@value='Add to cart'])[1]").click();
    await page.waitForTimeout(4000);
    await page.locator("//a[text()='Music 2']/../following-sibling::div[2]/div/span").isVisible();
    await page.locator("(//input[@value='Add to cart'])[2]").click();
    await page.waitForTimeout(4000);
    await page.locator('xpath=/html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[3]/div/div[2]/div[3]/div[1]/span')
    await page.locator("(//input[@value='Add to cart'])[3]").click();
    await page.waitForTimeout(4000);
    await page.getByRole('link', {name: 'Shopping cart'}).first().click();
    await page.locator('xpath=/html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/table/tbody/tr[1]/td[1]/input').click();
    await page.locator('xpath=/html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/table/tbody/tr[2]/td[1]/input').click();
    await page.locator('xpath=/html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/table/tbody/tr[3]/td[1]/input').click();
    
    await page.locator("//input[@value='Update shopping cart']").click();
    
    await page.getByRole('link', {name: 'Log out'}).click();
})