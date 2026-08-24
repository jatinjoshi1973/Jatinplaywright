import { test, expect, Locator } from "@playwright/test";

test ('Dropdown', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name : 'Books'}).first().click();
    const sortDropdown = page.locator('#products-orderby');
    await sortDropdown.selectOption({ label: 'Price: Low to High' });
    await expect(sortDropdown).toHaveValue('https://demowebshop.tricentis.com/books?orderby=10');
    await page.waitForTimeout(4000);
    const dropdownpage = page.locator('#products-pagesize');
    await dropdownpage.selectOption({label : '4'});
    await expect(dropdownpage).toHaveValue('https://demowebshop.tricentis.com/books?orderby=10&pagesize=4');
    await page.waitForTimeout(4000);
    const productviewmode = page.locator('#products-viewmode');
    await productviewmode.selectOption({label : 'List'});
    //await expect(productviewmode).toHaveValue('https://demowebshop.tricentis.com/books?orderby=10&viewmode=list&pagesize=4');
    await page.waitForTimeout(4000);
})