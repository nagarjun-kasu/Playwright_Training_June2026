import { expect, test, Page, Locator } from '@playwright/test'

test("validate the categories", async ({page})=>{

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await page.getByRole("button", {name:'All Categories'}).click();

    const allCategoriesElements = page.locator(".dropdown.search-category.show").getByRole('link');
    const countOfCategories = await allCategoriesElements.count();

    let actualCategories:string[] = [];
    for(let i=0; i<countOfCategories; i++){
        //actualCategories.push(await page.locator(".dropdown.search-category.show").locator("//div/a["+i+"]").innerText());
        actualCategories.push(await page.locator(".dropdown.search-category.show").getByRole("link").nth(i).innerText());
    }

    let expectedCategories:string[] = ["All Categories","Desktops","Laptops","Components", "Tablets", "Software", "Phones & PDAs", "Cameras", "MP3 Players"];
    expect(actualCategories).toEqual(expectedCategories);
    await page.pause();
})