import { test, expect, Locator } from '@playwright/test';

// test('Scriptlogin', async({page})=> {

//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.getByRole('link', {name: 'Log in'}).click();
//     await page.getByLabel('Email:').fill('johndoe@testmail.com');
//     await page.getByLabel('Password:').first().fill('123456');
//     await page.getByLabel('Remember me?').click();
//     await page.waitForTimeout(3000);
//     await page.locator('.button-1.login-button').click();
// })

test.only('Scriptcomputers', async({page})=> {

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name : 'Register'}).click();
    await page.locator('#gender-male').click();
    await page.getByLabel('First name:').fill('Peter');
    await page.getByLabel('Last name:').fill('Thomas')
    await page.getByLabel('Email:').fill('Peterthomas11@testmail.com');
    await page.getByLabel('Password:').first().fill('123456');
    await page.getByLabel('Confirm password:').fill('123456');
    await page.waitForTimeout(3000);
    await page.locator('#register-button').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name : 'Continue'}).click();
    await page.getByRole('link', { name: 'Computers' }).first().click();
    await page.getByRole('link', { name: 'Desktops' }).first().click();
    await page.waitForTimeout(3000);
    await page.locator("//a[text()='Build your own expensive computer']").click();
    await page.locator("//label[contains(normalize-space(),'Processor')]").isVisible();
    await page.locator("//label[text()='Fast  [+100.00]']").check();
    await page.locator("//label[contains(normalize-space(),'RAM')]").isVisible();
    await page.locator("//label[text()='8GB  [+60.00]']").check();
    await page.locator("//label[contains(normalize-space(),'HDD')]").isVisible();
    await page.locator("//label[text()='400 GB  [+100.00]']").check();
    await page.locator("//label[contains(normalize-space(),'Software')]").isVisible();
    await page.locator("//label[text()='Office Suite  [+100.00]']").check();
    await page.getByLabel('Qty:').fill('2');
    await page.locator(".button-1.add-to-cart-button").click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', {name : 'Shopping cart'}).first().click();
    const checkbox:Locator = await page.locator("//input[@name='removefromcart']");
    checkbox.check();
    await page.locator("//input[@value='Update shopping cart']").click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name: 'Log out'}).click();
   
})