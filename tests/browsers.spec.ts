import {test, Page, BrowserContext, chromium, firefox, webkit} from '@playwright/test'

test("launch the browser using page object", async({page})=>{
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.pause();
})

test("launch the browser using context", async({browser})=>{
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");
    await page.pause();

})

test("launch chrome browser", async()=>{
    const browser = await chromium.launch({headless:false, channel:"chrome"});
    const context: BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.pause();
})

test("launch firefox browser", async()=>{
    const browser = await firefox.launch({headless:false, channel:"firefox"});
    const context: BrowserContext = await browser.newContext({viewport:{width:1500, height:800}});
    const page:Page = await context.newPage();
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.pause();
})

test("launch webkit browser", async()=>{
    const browser = await webkit.launch({headless:false, channel:"webkit"});
    const context: BrowserContext = await browser.newContext({viewport:{height:800, width:1500}});
    const page:Page = await context.newPage();
    await page.goto("https://nagarjunreddykasu.github.io/web-automation-practice-site/");

    await page.pause();
})