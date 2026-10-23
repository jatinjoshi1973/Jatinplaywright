import { test } from "@playwright/test";
 
test.describe('register', async () => {
    test("test1", { tag: '@smoke' }, async () => {
        console.log("test1-This is smoke test");
 
    })
 
    test("test2", { tag: ['@smoke','@sanity'] }, async () => {
        console.log("test2-This is smoke test");
 
    })
 
    test("test3", { tag: '@reg' }, async () => {
        console.log("test3-This is Regression test");
 
    })
})
 
test.describe('login', async () => {
    test("test4", { tag: '@fun' }, async () => {
        console.log("test4-This is Functional test");
 
    })
 
    test("test5", { tag: '@sanity' }, async () => {
        console.log("test5-This is Sanity test");
 
    })
})
 
//execute group
//npx playwright test grpDesAndTag.spec.ts --grep "register"
 
//Execute specific test from group.
//npx playwright test grpDesAndTag.spec.ts --grep "(?=.*register)(?=.*smoke)"

//npx playwright test grpDesAndTag.spec.ts --grep "register|@smoke"
 