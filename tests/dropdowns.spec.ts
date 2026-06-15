import { expect, Locator, test } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.beforeEach(async({page})=>{
    await page.goto(`${APP_URL}`);
    await page.getByRole("link", {name:'Dropdowns'}).click();

})
test("validate the output when selecting a country from Country dropdown", async({page})=>{

    //await page.getByRole("combobox", {name:'Country'}).selectOption("India");
    //await page.getByRole("combobox", {name:'Country'}).selectOption({value:'India'});
    //await page.getByRole("combobox", {name:'Country'}).selectOption({label:'India'});
    //await page.getByRole("combobox", {name:'Country'}).selectOption({index:1});

    const ddlCountry:Locator = page.getByRole("combobox", {name:'Country'});
    selectDropdownValue(ddlCountry, "India");

    await expect(page.getByRole("combobox", {name:'Country'})).toHaveValue("India");
    await expect(page.locator("#ddOutput")).toContainText("Country: India");

    const outputMessage1 = await page.locator("#ddOutput").textContent();
    const outputMessage2 = await page.locator("#ddOutput").innerText();

    console.log(outputMessage1);
     console.log(outputMessage2);
    await page.pause();
})

test("validate the expected Country dropdown value are displaying", async({page})=>{
    const expectedCountryNames:string[] = ['Select country', 'India', 'USA', 'UK', 'Germany', 'Australia'];

    const ddlActualCountries = page.getByRole('combobox', {name:'Country'}).locator('option');

    for(let i=0;i<expectedCountryNames.length;i++){
       await expect(ddlActualCountries.nth(i)).toHaveText(expectedCountryNames[i]);
    }
    await page.pause();
    //validate currency dropdown values
    //validate Language dropdown values
    //validate Framework dropdown values
})

test("Validate the selection of multiple dropdown values", async({page})=>{
    await page.getByRole("listbox", {name:'Courses'}).selectOption(['Playwright with TypeScript','API Testing with Postman']);
    await expect(page.locator("#ddOutput")).toContainText("Courses: Playwright with TypeScript, API Testing with Postman");
    await page.pause();
})


async function selectDropdownValue(element:Locator, value:string):Promise<void>{
    await element.selectOption(value);
}

//click
async function click(element:Locator):Promise<void>{
    await element.click();
}

//fill
async function enterData(element:Locator, value:string){
    await element.fill(value);
}
