import { expect, test } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
    await page.getByRole("link", {name:'Interactions'}).click();
})

test("validate the output message when radio button is selected", async({page})=>{
    await expect(page.getByRole("radio", {name:'Python'})).not.toBeChecked();
    await page.getByRole("radio", {name:'Python'}).check();
    await expect(page.getByRole("radio", {name:'Python'})).toBeChecked();

    await expect(page.locator("#radioOutput")).toHaveText("Selected: Python");

    await page.pause();

})