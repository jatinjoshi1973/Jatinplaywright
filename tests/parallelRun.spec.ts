import { test } from "@playwright/test";
//make this file paraller execution.
// if not used as per config file it will use.
// if used parellel then multiple workes will be created & test executes fast
// from terminal you can execute workers=5
test.describe.configure({ mode: 'parallel' })
 
test.only('test1', async ({ page }) => {
    await page.goto('https://www.google.com/')
    console.log("This is test1");
})
 
test('test2', async ({ page }) => {
    await page.goto('https://www.google.com/')
    console.log("This is test2");
})
 
test('test3', async ({ page }) => {
    await page.goto('https://www.google.com/')
    console.log("This is test3");
})
 
test('test4', async ({ page }) => {
    await page.goto('https://www.google.com/')
    console.log("This is test4");
})
 
test('test5', async ({ page }) => {
    await page.goto('https://www.google.com/')
    console.log("This is test5");
})