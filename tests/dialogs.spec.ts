import { expect, test } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
    await page.getByRole("link", {name:'Interactions'}).click();
})

test("validate the Alert message", async({page})=>{
    await page.getByRole("button", {name:'Alert'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Alert was displayed and dismissed.");

    await page.getByRole("button", {name:'Confirm'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Confirm result: Cancel (false)");

    await page.getByRole("button", {name:'Prompt'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Prompt was cancelled.");

    //await page.pause();
})

test("validate the output message on accepting the Confirm", async({page})=>{

    page.on('dialog', async(confirm)=>{
        //await confirm.dismiss(); //it clicks on Cancel button
        expect(confirm.message()).toContain("Do you want to confirm this action?");
        await confirm.accept(); //it clicks on OK button
    })

    await page.getByRole("button", {name:'Confirm'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Confirm result: OK (true)");
    await page.pause();

})

test("validate the output message on accepting the Prompt", async({page})=>{

    page.on('dialog', async(confirm)=>{
        //await confirm.dismiss(); //it clicks on Cancel button
        expect(confirm.message()).toContain("Enter your name:");
        await confirm.accept("Playwright Automation"); //it clicks on OK button
    })

    await page.getByRole("button", {name:'Prompt'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Prompt returned: \"Playwright Automation\"");
    await page.pause();

})

test("validate the output message on accepting the alert", async({page})=>{

    page.on('dialog', async(confirm)=>{
        expect(confirm.message()).toContain("This is a sample Alert dialog!");
        await confirm.accept(); //it clicks on OK button
    })

    await page.getByRole("button", {name:'Alert'}).click();
    await expect(page.locator('#dialogOutput')).toHaveText("Alert was displayed and dismissed.");
    await page.pause();

})

/*
Dialogs are automatically dismissed, unless there is a page.on('dialog') listener is registered.
When we register the listener, we must have to call either accept or dismiss method or else it will freeze and wair for the dialog.


*/