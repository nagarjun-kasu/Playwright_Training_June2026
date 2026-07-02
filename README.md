# Playwright Setup:
=====================

1. Download and Install Node.js latest version (>=20)
   node -v
   npm -v

2. Download and Install VS Code

3. Setup the Playwright project in VS Code

   i. Create a project folder and open in vs code

   ii. Install the Playwright using npm command --> npm init playwright@latest

   iii. Install the typescript at project level

   npm install typescript --save-dev

   verify the typescript --> npx tsc -v

   iv. Create tsconfig.json file --> npx tsc --init
   

Extensions:
Playwright Test for VS Code
Playwright Test Runner

WEB URLs:
==========
https://nagarjunreddykasu.github.io/web-automation-practice-site/

https://nagarjun-kasu.github.io/mobile_ecommerce/

https://nagarjunreddykasu.github.io/NDigital/  (username: nagarjun, password: Test@2026)

https://nagarjunreddykasu.github.io/web_ecommerce/#/login  (username: nagarjun, password: Test@2026)

https://nagarjunreddykasu.github.io/calculator/

https://the-internet.herokuapp.com/

https://demo.automationtesting.in/Datepicker.html
https://demo.automationtesting.in/AutoComplete.html
https://demo.automationtesting.in/Frames.html

https://ecommerce-playground.lambdatest.io/index.php?route=account/register
https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
https://ecommerce-playground.lambdatest.io/index.php?route=account/login

https://www.saucedemo.com/

https://jqueryui.com/droppable/


API URLs:
==========

https://petstore.swagger.io/

https://restful-booker.herokuapp.com/apidoc/index.html

https://jsonplaceholder.typicode.com/

https://fakerestapi.azurewebsites.net/index.html

https://gorest.co.in/ (requires token)

#######################################################################

Test Execution Commands:
=========================
npx playwright test
npx playwright test test/visual.spec.ts
npx playwright test --grep "@sanity"
npx playwright test --grep "@sanity|@regression" --> To execute both sanity and regression test cases
npx playwright test --grep-invert "@sanity" --> TO exclude sanity test cases

npx playwright test --grep "@regression" --grep-invert "@bug"

DEBUG:
=======
In WIndows: $env:pwdebug=1; npx playwright test tests/myntra.spec.ts

In MAC: pwdebug=1 npx playwright test tests/myntra.spec.ts

or use --> await page.pause();

Allure Report:
==================
Install the following dependencies:

npm install -g allure-commandline
npm install allure-playwright --save-dev

To generate the allure report:
allure generate allure-results --clean -o allure-report
