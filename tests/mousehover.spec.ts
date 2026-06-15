import { expect, test } from '@playwright/test'

const APP_URL = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
})

test("validate the mousehover action", async({page})=>{
    await page.getByRole("button", {name:'Mega Menu'}).hover();

    await page.waitForTimeout(2000);

    await page.getByRole("link", {name:'Apple',exact:true}).click();
    await page.pause();
})