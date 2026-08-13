import {test, expect, Locator} from "@playwright/test"

test ('testid', async({page}) => {
await page.goto('file:///C:/Users/LENOVO/Downloads/TestId%20Demo.html');
await page.getByTestId('txtName').fill('Jatin');
await page.getByTestId('txtEmail').fill('jatinhari@yahoo.com');
await page.getByTestId('txtPassword').fill('123456');
await page.getByTestId('ddlCourse').selectOption('Java');
await page.getByTestId('radioMale').click();
await page.getByTestId('chkTerms').check();
await page.getByTestId('btnRegister').click();
await page.waitForTimeout(10000);
})


