import { test, TestInfo } from "@playwright/test";
 
test.beforeAll(async () => {
    console.log("Executing the beforeAll");
})
 
test.beforeEach(async ({ }, testInfo: TestInfo) => {
    if (testInfo.tags.includes('@nologinout')) {
        return;
    }
    console.log("Executing the beforeEach");
})
 
test('test1', { tag: '@nologinout' }, async () => { //tag name is given to this case
    console.log("This is test1");
})
 
test('test2', async () => {
    console.log("This is test2");
})
 
test.afterEach(async ({ }, testInfo: TestInfo) => {
    if (testInfo.tags.includes('@nologinout')) {
        return;
    }
    console.log("Executing the afterEach");
})
 
test.afterAll(async () => {
    console.log("Executing the afterAll");
})