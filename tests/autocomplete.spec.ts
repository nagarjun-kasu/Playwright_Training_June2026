import { expect, test } from '@playwright/test'

test("handling single frame", async({page})=>{
    await page.goto("https://demo.automationtesting.in/AutoComplete.html");
    
    await page.locator("#searchbox").fill("ind");

    const optionToSelect = "India";

    await page.getByRole('presentation').first().waitFor();

   const allOptions = page.getByRole('presentation');
   const countOfOptions = await allOptions.count();

   for(let i=0;i<countOfOptions;i++){
        const option = await page.getByRole('presentation').nth(i).innerText();
        if(option === optionToSelect){
            await page.getByRole('presentation').nth(i).click();
            break;
        }
   }


    await page.pause();

})