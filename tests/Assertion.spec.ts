import {test, expect, Locator} from "@playwright/test"

test.only('Assertions', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const url:string= page.url();
    //by using url
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
    // by using title
    await expect(page).toHaveTitle("Demo Web shop .computers")
    const searchfield:Locator=page.getByTestId('small-searchterms');
    const excellent:Locator=page.locator('[for="pollanswers-1"]');
    // to be checked is it disabled
    await expect.soft(searchfield).toBeDisabled();
    //is it editable
    await expect(searchfield).toBeEditable();
    // is it empty
    await searchfield.clear();
    await expect(searchfield).toBeEmpty();
    //is excact text is present
    await expect(excellent).toHaveText('Excellent');
    // check URL using URL
    expect(url).toBe("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(2000)




}); 