import { expect, test, Page, Locator } from '@playwright/test'
import path from 'path'


const APP_URL = "https://nagarjunreddykasu.github.io/web-automation-practice-site/";


test.describe("Handling Multiple windows",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(`${APP_URL}`);
        await page.getByRole("link", {name:'Upload'}).click();
    })

    test("Handling File Upload", async({page})=>{

        console.log(path.resolve(__dirname)); //D:\Playwright\PlaywrightTraining_June2026\tests

        //const filePath = path.resolve(__dirname, '../testdata/Playwright_AI.jpg');
        //await page.locator("#fileInput").setInputFiles(filePath);

        uploadFile(page.locator("#fileInput"), "Playwright_AI.jpg");

        /*
        const [upload] = await Promise.all(
            [
                page.waitForEvent('filechooser'),
                page.locator(".upload-icon").click()
            ]
        )

        await upload.setFiles(filePath);
        */

        await page.pause();

    })

    test("Upload Multiple files", async({page})=>{
        console.log(path.resolve(__dirname)); //D:\Playwright\PlaywrightTraining_June2026\tests

        /*
        const filePath1 = path.resolve(__dirname, '../testdata/Playwright_AI.jpg');
        const filePath2 = path.resolve(__dirname, '../testdata/automation_tools.png');
        const filePath3 = path.resolve(__dirname, '../testdata/Git Documentation.pdf');

        const files = [filePath1, filePath2, filePath3];

        await page.locator("#fileInput").setInputFiles(files);
        */
        const fileNames:string[] = ["automation_tools.png","Git Documentation.pdf","Playwright_AI.jpg"];
        uploadFiles(page.locator("#fileInput"), fileNames);


        /*
        const [upload] = await Promise.all(
            [
                page.waitForEvent('filechooser'),
                page.locator(".upload-icon").click()
            ]
        )

        await upload.setFiles(files);
        */
        await page.pause();

    })

    test("Download File", async({page})=>{

        const [download] = await Promise.all(
            [
                page.waitForEvent('download'),
                page.getByRole("button", {name:'Download data.csv'}).click()
            ]
        )

        const FILES_DIR = path.join(__dirname,'../testdata');
        const downloadFilePath = path.join(FILES_DIR,'download-file.csv');
        await download.saveAs(downloadFilePath);

        await page.pause();

    })





})

//IQ: How to upload a file in Playwright?
// How to upload multiple files in playwright?

async function uploadFile(element:Locator, file:string):Promise<void>{
    const filePath = path.resolve(__dirname, '../testdata/', file);
    await element.setInputFiles(filePath);
}

async function uploadFiles(element:Locator, fileNames:string[]){
    const files = [];
    for(const f of fileNames){
        files.push(path.resolve(__dirname, '../testdata/',f));
    }
    await element.setInputFiles(files);
}
