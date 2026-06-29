import { expect, test, Page, Locator } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
    await page.getByRole("link", {name:'Interactions'}).click();
})

test("select a date from calendar", async({page})=>{
    await page.getByPlaceholder("Select a date").click();
    await page.getByRole('button', {name:'25'}).click();

    //await page.pause();
})

test("select a current date", async({page})=>{
    await page.getByPlaceholder("Select a date").click();
    await page.locator(".dp-day.today").click();
    //await page.pause();

})

test("select a future date @sanity", async({page})=>{
    await page.getByPlaceholder("Select a date").click();
    while(await page.locator('#dpMonthYear').innerText() !== 'December 2026'){
        //await page.locator('#dpNext').click();
        await page.getByRole('button', {name:'▶'}).click();
        //await page.waitForTimeout(2000);
    }

    await page.getByRole('button', {name:'31'}).click();
})