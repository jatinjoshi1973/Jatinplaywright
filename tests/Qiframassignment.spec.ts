import { test, expect, Locator, Frame  } from '@playwright/test';

test ('Qifram', async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    await page.waitForTimeout(2000);
    const frameone = page.frameLocator('.w-full.h-96');
    frameone?.locator('#username').fill('jatinhari@yahoo.com');
    await page.waitForTimeout(2000);
    frameone?.locator('#password').fill('123456');
    await page.waitForTimeout(2000);
    frameone?.getByRole('button', {name: 'Login'}).click();
    await page.waitForTimeout(3000);


})

test('Qiframnested', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1');
  await page.waitForTimeout(2000);

  // Outer iframe
  const outerFrame = page.frameLocator('.w-full.h-96');

  // Inner iframe inside outer
  const innerFrame = outerFrame.frameLocator('xpath=/html/body/div/div/section/div[2]/iframe')

  // Fill form fields
  await innerFrame.locator('#email').fill('Admin@gmail.com');
  await innerFrame.locator('#password').fill('Admin@1234');
  await innerFrame.locator('#confirm-password').fill('Admin@1234');

  await page.waitForTimeout(2000);

  // Click Sign Up button
  await innerFrame.getByRole('button', { name: 'Sign Up' }).click();

  await page.waitForTimeout(3000);
 
});

test('Qiframmulti', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2');
  await page.waitForTimeout(2000);
  await page.getByRole('heading', {name: 'Sign Up'});
  const outerFrameone = page.frames()[1];
  await outerFrameone.locator('#email').fill('Admin@gmail.com');
  await outerFrameone.locator('#password').first().fill('Admin@1234')
  await outerFrameone.locator('#confirm-password').fill('Admin@1234')
  await page.waitForTimeout(2000);
  await outerFrameone.getByRole('button', {name: 'Sign Up', exact: true}).first().click();
  await expect(page.getByText('Sign up successful!', { exact: true })).toBeVisible();
  await page.waitForTimeout(3000);
  await page.getByRole('heading', {name: 'Login'});
  const outerFrametwo = page.frames()[2];
  await outerFrametwo.locator('#username').fill('SuperAdmin@gmail.com');
  await outerFrametwo.locator('#password').first().fill('SuperAdmin@1234')
  await page.waitForTimeout(2000);
  await outerFrametwo.getByRole('button', {name: 'Login', exact: true}).first().click();
  await expect(page.getByText('Login successful!', { exact: true })).toBeVisible();
  await page.waitForTimeout(3000);
});

test.only('Qiframenestedmulti', async ({page}) => {
  
  await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3');
  await page.waitForTimeout(2000);
  const outerframe = page.frameLocator('.w-full.h-96');
  const innerframeone = outerframe.locator('xpath=/html/body/div/div/section/div[1]').first();
  await expect(innerframeone.getByText('Default Email', {exact: true})).toBeVisible();
  await expect(innerframeone.getByText('Default Password', {exact: true})).toBeVisible();
  await expect(innerframeone.getByText('Default Confirm Password', {exact: true})).toBeVisible();
  await expect(innerframeone.getByText('Note : Please use the login credentials shown above', {exact: true})).toBeVisible();
  await page.waitForTimeout(3000);
 
  
  const innerframtwo = outerframe.frameLocator('xpath=/html/body/div/div/section/div[2]/iframe');
  await expect(innerframtwo.getByRole('heading', { name: 'Login', exact: true })).toBeVisible();
  const inneremail = innerframtwo.frameLocator('xpath=/html/body/div/div/form/div[1]/iframe');
  inneremail?.locator('#email').fill('Admin@gmail.com');
  const innerpassword = innerframtwo.frameLocator('xpath=/html/body/div/div/form/div[2]/iframe');
  innerpassword?.locator('#password').fill('Admin@1234');
  const innerconfirm = innerframtwo.frameLocator('xpath=/html/body/div/div/form/div[3]/iframe');
  innerconfirm?.locator('#confirm').fill('Admin@1234');
  await page.waitForTimeout(2000);
  const innerbutton = innerframtwo.frameLocator('xpath=/html/body/div/div/form/div[4]/iframe');
  innerbutton?.getByRole('button', {name: 'Submit'}).click();
  await expect(page.getByText('Login successful!', { exact: true })).toBeVisible();
  await page.waitForTimeout(3000);
  

})

