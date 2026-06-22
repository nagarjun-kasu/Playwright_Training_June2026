import { expect, test, Page, Locator } from '@playwright/test'


test("validate the session storage", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page.getByPlaceholder("E-Mail Address").fill("nagarjun.sdet@gmail.com");
    await page.getByPlaceholder("Password").fill("Welcome@2025");
    await page.locator("[value='Login']").click();
    await expect(page.getByRole("heading", {name:'My Account'})).toBeVisible();
    await context.storageState({path:'login.json'});

})

test("validate the update of account information", async({browser})=>{
    const context = await browser.newContext({storageState:'login.json'});
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page.getByRole("link", {name:'Change your password'}).click();

    await page.pause();
})

//IQ: What is the use of storage state in Playwright?
//How do you handle session info and bypass login?