import { expect, test, Page, Locator } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
    await page.getByRole("link", {name:'Interactions'}).click();
})

test("handle drag and drop", async({page})=>{

    await page.getByPlaceholder("Select a date").scrollIntoViewIfNeeded();
    //sourceitem.dragTo(target/destination)
    const sourceItem = page.locator("#dndSource [data-id='1']");
    const target = page.locator("#dndTarget");
    await sourceItem.dragTo(target);
    await expect(page.locator("#dndOutput")).toContainText("Available: 3, Dropped: 1");

    await page.pause();

})