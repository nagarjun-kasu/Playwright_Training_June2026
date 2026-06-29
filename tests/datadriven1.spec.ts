import { expect, test, Page, Locator } from '@playwright/test'
import loginData from '../testdata/login.json'

test("Lambdatest login1", async({page})=>{
    for(const data of loginData){
        await page.goto(data.url);
        await page.getByPlaceholder("E-Mail Address").fill(data.username);
        await page.getByPlaceholder("Password").fill(data.password);
        await page.locator("input[value='Login']").click();
    }
    
    await page.pause();

})