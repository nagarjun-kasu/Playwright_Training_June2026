import { expect, test } from '@playwright/test'

const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";

test.describe("Handling Iframes",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(`${APP_URL}`);
        await page.getByRole("link", {name:'Interactions'}).click();
    })

    test("iframe validations", async({page})=>{
        const iframe = page.frameLocator("#sampleIframe");
        await expect(iframe.getByRole('heading')).toContainText('Hello from the iframe!');
        await expect(iframe.getByRole('button', {name:'Click Me Inside'})).toBeVisible();
        await expect(iframe.getByRole('paragraph')).toContainText("This is an embedded inline frame.");
        await iframe.getByRole('button', {name:'Click Me Inside'}).click();
        await expect(iframe.locator("#iframeMsg")).toContainText("Button inside iframe was clicked!");
        await page.pause();
    })
})

test("handling single frame", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.frameLocator("#singleframe").getByRole("textbox").fill("Playwright");
    await page.pause();
})

test("handling nested frames", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.getByRole("link", {name:'Iframe with in an Iframe'}).click();

    const outerFrame = page.frameLocator("iframe[src='MultipleFrames.html']");

    const innerFrame = outerFrame.frameLocator("iframe[src='SingleFrame.html']");

    await innerFrame.getByRole('textbox').fill("Nested Frame data");

    console.log(await outerFrame.getByRole('heading').textContent());
    console.log(await innerFrame.getByRole('heading').textContent());

    await page.pause();
})

test("handling single frame without attributes", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    
    //await page.locator("iframe").first().contentFrame().getByRole("textbox").fill("Playwright");

    page.frames().filter(frame => frame.url().includes('SingleFrame.html'))[0].getByRole('textbox').fill("Playwright automation");

    await page.pause();
})

test("handling nested frames without attributes", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.getByRole("link", {name:'Iframe with in an Iframe'}).click();

    const innerFrame = page.frames().find(frame =>{
        return frame.url().includes("SingleFrame.html") && frame.parentFrame()?.url().includes("MultipleFrames.html");
    })

    if(!innerFrame)
        throw new Error("Inner frame not found");
    
    await innerFrame.getByRole("textbox").fill("Playwright with Typescript");

    await page.pause();
})