import {test, expect, Locator} from "@playwright/test"


test('By get lable', async ({page}) => {
 await page.goto('https://demowebshop.tricentis.com');
 await page.getByText('Register').click();
 await page.getByLabel('Male').first().click();
 await page.getByLabel('First name:').fill('Jatin');
 await page.getByLabel('Last name:').fill('Joshi');
 await page.getByLabel('Email:').fill('jatinhari@yahoo.com');
 await page.getByLabel('Password:').first().fill('123456');
 await page.getByLabel('Confirm Password:').first().fill('123456');
 await page.waitForTimeout(5000);
})

test('Placeholder & Role & Title', async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', {name:' Login '}).click();
await page.getByTitle('Help').click();
await page.waitForTimeout(5000);
})
