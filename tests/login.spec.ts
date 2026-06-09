import {test} from '@playwright/test'

test("validate the login functionality", async({page})=>{
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.getByRole("link", {name:"Login"}).click();
    //await page.getByText("Login").click();
    //await page.locator("//a[@data-page='login']").click();
    //wait page.locator("[data-page=''login]").click();

    await page.getByRole("textbox", {name:"Username", exact:true}).fill("nagarjun");
    //await page.getByPlaceholder("Enter username").fill("nagarjun");
    //await page.getByLabel("Username").fill("nagarjun");
    //await page.locator("//input[@id='loginUser']").fill("nagarjun");
    //await page.locator("#loginUser").fill("nagarjun");

    await page.getByRole("textbox", {name:"Password", exact:true}).fill("Test@123");
    //await page.getByPlaceholder("Enter password").fill("Test@123");
    //await page.getByLabel("Password").fill("Test@123");
    //await page.locator("//input[@id='loginPass']").fill("Test@123");
    //await page.locator("#loginPass").fill("Test@123");

    //await page.getByRole("button", {name:"Login"}).click();
    await page.getByText("Login").last().click();
    //await page.getByText("Login").nth(4).click();
    //await page.locator("//button[@type='submit']").click();
    //await page.locator("button[type='submit']").click();
    //await page.locator(".btn.btn-primary").click();


    await page.pause();
})

/*
getByRole()
getByTestId()
getByText("");
getByLabel();
getByPlaceHolder();
getByTitle()
getByAltText()
locator()

xpath:
syntax:
//tagname[@attribute='value']
//a[@data-page='login']
//tagname[text()='value']
//a[text()='Login']
//tag[starts-with(text(), 'startingpartialvalue')]
//tag[contains(text(), 'somepartialvalue')]
//tag[starts-with(@attribute, 'startingattributevalue')]
//tag[contains(@attribute, 'somepartialattributevalue')]

css:
syntax:
#idattributevalue
.classattributevalue

tag.classname

[attribute='attributevalue']
ex: [data-page='login']








*/