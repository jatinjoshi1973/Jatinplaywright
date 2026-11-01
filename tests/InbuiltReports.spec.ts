import {test, expect, Locator} from "@playwright/test"

test('test1', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');      
    
}); 

test.fail('test2', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');      
    
});

test.fail('test3', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');      
    
});

//allure report

/*step1: install allure2 report using command line
-> npm install -D allure-playwright

step2: declare this step inside defineConfig
reporter: "allure-playwright",

step3:Execute the test script 
-> npx playwright test
then all the test will be converted to result(json)format and we need convert to report

step 4:convert from result to Report need to install
-> npm install -g allure-commandline

step5:now convert from result to report use this command
-> allure generate ./allure-results -o ./allure-report

step6:to open report 
-> allure open ./allure-report

note : after executing test , clean the previous and convert to report type use this 
command -> allure generate allure-results --clean -o allure-report
then open the report .*/ 


