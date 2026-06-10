import {expect, test} from '@playwright/test'

test("check box validations", async({page})=>{
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.getByRole("link", {name:"Checkboxes"}).click();

    await expect(page.locator("#page-checkboxes h2")).toContainText("Checkboxes");
    await expect(page.locator("#page-checkboxes p")).toHaveText("Select the options below:");
    await expect(page.getByRole("checkbox")).toHaveCount(8);

    await expect(page.getByRole("button", {name:"Select All", exact:true})).toBeVisible();
    await expect(page.getByRole("button", {name:"Deselect All"})).toBeVisible();

    await page.pause();
})