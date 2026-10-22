import { test } from "@playwright/test";
 
test("test1", { tag: ['@smoke', '@sanity'] }, async () => {
    console.log("This is smoke test");
 
})
 
test("test2", { tag: '@smoke' }, async () => {
    console.log("This is smoke test");
 
})
 
test("test3", { tag: '@reg' }, async () => {
    console.log("This is Regression test");
 
})
 
test("test4", { tag: '@fun' }, async () => {
    console.log("This is Functional test");
 
})
 
test("test5", { tag: ['@sanity','@smoke'] }, async () => {
    console.log("This is Sanity test");
 
})
 
//Execute by tagName
//npx playwright test groupByTags.spec.ts --grep "@smoke"
 
//OR
//npx playwright test groupByTags.spec.ts --grep "@smoke|@sanity"
 
//AND
//npx playwright test groupByTags.spec.ts --grep "(?=.*@smoke)(?=.*@sanity)"
 
//excludeByTagName
//npx playwright test groupByTags.spec.ts --grep-invert "@smoke"
 
//
//npx playwright test groupByTags.spec.ts --grep-invert "(?=.*@smoke)(?=.*@sanity)"

//npx playwright test GroupByTags.spec.ts --grep "register|@smoke"

//--grep-invert "(?=.*@smoke)(?=.*@sanity)"
 
//--grep "(?=.*@smoke)(?=.*@sanity)"