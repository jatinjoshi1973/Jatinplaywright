import {test, expect, Locator} from "@playwright/test"

test ('customised testid', async({page}) => {
await page.goto('https://demowebshop.tricentis.com/');
//by id attribute
await page.getByTestId('small-searchterms').fill('Build');
await page.getByRole('button', {name: 'Search'}).click();
await page.waitForTimeout(10000);
})