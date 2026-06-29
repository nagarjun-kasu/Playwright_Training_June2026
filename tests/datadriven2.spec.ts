import { expect, test, Page, Locator } from "@playwright/test";
import loginData from "../testdata/credentials.json";

test("datadriven testing-2", async ({ page }) => {
  for (const environment in loginData) {
    console.log("Environment", environment);
    if (environment === process.env.ENV) {
      console.log(`Executing the test case in ${environment} environment`);
      const environmentData = loginData[environment as keyof typeof loginData];
      await page.goto(environmentData.url);
      await page.getByPlaceholder("E-Mail Address").fill(environmentData.username);
      await page.getByPlaceholder("Password").fill(environmentData.password);
      await page.locator("input[value='Login']").click();
    }
  }

  //await page.pause();
});

test("datadriven testing-4", async ({ page }) => {
      const environmentData = loginData[process.env.ENV as keyof typeof loginData];
      await page.goto(environmentData.url);
      await page.getByPlaceholder("E-Mail Address").fill(environmentData.username);
      await page.getByPlaceholder("Password").fill(environmentData.password);
      await page.locator("input[value='Login']").click();
      //await page.pause();
});

Object.entries(loginData).forEach(([environment, details]) => {
  test(`datadriven testing ${environment}`, async ({ page }) => {
    console.log("Environment", environment);
    if (environment === process.env.ENV) {
      console.log(`Executing the test case in ${environment} environment`);
      await page.goto(details.url);
      await page.getByPlaceholder("E-Mail Address").fill(details.username);
      await page.getByPlaceholder("Password").fill(details.password);
      await page.locator("input[value='Login']").click();
    }
  });
});

// In Mac, ENV="QA" npx playwright test tests/datadriven2.spec.ts

//In windows, $env:ENV="QA"
//npx playwright test tests/datadriven2.spec.ts
