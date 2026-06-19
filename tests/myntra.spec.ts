import { expect, test, Page, Locator } from '@playwright/test'

test("validate the product in myntra", async({page})=>{
    await page.goto("https://www.myntra.com/");
    await page.getByRole("link", {name:"Men", exact:true}).first().hover();

    await page.getByRole("link", {name:"Jeans", exact:true}).click();


    const lastProductName:string = await page.locator(".product-base").last().locator("h3").innerText();

    const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator(".product-base").last().click()
    ])

    const pages: Page[] = newPage.context().pages();

    let childWindow;
    for(const tab of pages){
        if(tab.url().includes("https://www.myntra.com/jeans")){
            childWindow = tab;
            break;
        }
    }
    //'childWindow' is possibly 'undefined'.

    if(!childWindow)
        throw new Error("Child window is not found");

    await childWindow.getByRole("button", {name:'34'}).click();
    //await childWindow.getByRole("button", {name:'ADD TO BAG'}).click();
    await childWindow.getByText("ADD TO BAG", {exact:true}).click();
    await childWindow.getByText("Bag", {exact:true}).click();
    await page.waitForTimeout(3000);
    await childWindow.screenshot({path:'screenshots/fullpage.png', fullPage:true});
    await expect(childWindow.getByText(lastProductName)).toBeVisible();
    await childWindow.close();

    await page.getByText("Bag", {exact:true}).click();
    await expect(page.getByText(lastProductName)).toBeVisible();
    await page.pause();
})