import{test, Locator} from "@playwright/test"

test('Simple date picker', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/datePick?sublist=0')
    await page.waitForTimeout(2000)
    await page.getByRole('textbox', {name : 'Select A Date', exact: true}).fill('21/09/2026')
    await page.waitForTimeout(3000)
})

test.skip('Dropdown date picker', async({page})=> {

    await page.goto('https://demoapps.qspiders.com/ui/datePick/datedropdown?sublist=1');
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', {name: 'Select A Date', exact: true}).click();
    await page.getByLabel('Choose Wednesday, September 30th, 2026').click();
    await page.waitForTimeout(3000);
})

test.only('Icon datepicker', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/datePick/iconstrigger?sublist=2')
    await page.waitForTimeout(2000)
    await page.locator('#demoUI > main > section > article > aside > div > aside > div > article > div > div > svg').click();
    await page.getByLabel('Next Month').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('Choose Thursday, October 8th, 2026').click();
    await page.locator('#demoUI > main > section > article > aside > div > aside > div > article > div > div > svg').click();
    await page.getByLabel('Previous Month').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('Previous Month').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('Choose Thursday, July 30th, 2026').click();
    await page.waitForTimeout(3000)
})