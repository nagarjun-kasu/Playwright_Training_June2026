import { expect, test, Page } from '@playwright/test'

import path from "path";

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.describe("Handling Multiple windows",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(`${APP_URL}`);
        await page.getByRole("link", {name:'Interactions'}).click();
    })

    test("validate the switching to child window", async({page})=>{

        const [newPage] = await Promise.all(
            [
                page.waitForEvent('popup'),
                page.getByRole('button', {name:'Open Child Window'}).click()
            ]
        )

        const pages:Page[] = newPage.context().pages();

        let childWindow;
        for(const tab of pages){
            if(tab.url().includes('about:blank')){
                childWindow = tab;
            }
        }

        if(!childWindow)
            throw new Error("There is no child window");

        await childWindow.getByRole('button', {name:'Click Me'}).click();

        await expect(childWindow.locator("#childMsg")).toContainText("Button clicked inside child window!");
        await childWindow.close();


        await page.pause();
        
    })


})
//IQ: How to handle multiple windows in Playwright?
// How to switch to child window in Playwright?