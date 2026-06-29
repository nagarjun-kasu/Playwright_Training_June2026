import { expect, test, Page, Locator } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.describe.configure({mode:'serial'})

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
})

test("@sanity validate visual comparison", async({page})=>{
    await page.getByRole("link", {name:'KMart'}).click();
    await expect(page).toHaveScreenshot('kmart.png');
})

test("validate visual comparison of specific element @regression", async({page})=>{
    await page.getByRole("link", {name:'Webtables'}).click();
    await expect(page.locator('#page-webtables')).toHaveScreenshot('webatables.png');
})

test("validate visual comparison by excluding specific section @sanity", async({page})=>{
    await page.getByRole("link", {name:'Webtables'}).click();
    await expect(page).toHaveScreenshot({mask:[page.locator('#page-webtables')]})
})

test("validate visual comparison of full page @regression", async({page})=>{
     await page.getByRole("link", {name:'Interactions'}).click();

     await expect(page).toHaveScreenshot({
        fullPage:true,
        animations:'disabled',
        maxDiffPixelRatio:0.1
     })
})

test("validate the accessibility snapshot @e2e", async({page})=>{
    await page.getByRole("link", {name:'Checkboxes'}).click();

    const ariaSnapshot = await page.locator("#page-checkboxes").ariaSnapshot();
    console.log(ariaSnapshot);

    await expect(page.locator("#page-checkboxes")).toMatchAriaSnapshot(
        `
        - heading "☑ Checkboxes" [level=2]
        - paragraph: "Select the options below:"
        - list:
            - listitem:
                - checkbox "Receive email notifications"
                - text: Receive email notifications
            - listitem:
                - checkbox "Enable dark mode"
                - text: Enable dark mode
            - listitem:
                - checkbox "Subscribe to newsletter"
                - text: Subscribe to newsletter
            - listitem:
                - checkbox "Share usage analytics"
                - text: Share usage analytics
            - listitem:
                - checkbox "Enable two-factor authentication"
                - text: Enable two-factor authentication
            - listitem:
                - checkbox "Auto-save drafts"
                - text: Auto-save drafts
            - listitem:
                - checkbox "Accept Terms and Conditions (readonly)" [checked] [disabled]
                - text: Accept Terms and Conditions
                - emphasis: (readonly)
            - listitem:
                - checkbox "Required cookies (readonly)" [disabled]
                - text: Required cookies
                - emphasis: (readonly)
        - button "Select All"
        - button "Deselect All"
        - text: No items selected.
        `
    )




})