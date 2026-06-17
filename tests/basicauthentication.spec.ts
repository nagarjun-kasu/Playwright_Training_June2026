import { expect, test } from '@playwright/test'

test("Handling basic authentication", async({browser})=>{

    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    });

    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await page.pause();

})

//IQ: How to handle basic authentication popup in playwright?