import { expect, test, Page, Locator } from '@playwright/test'

test("validate the slider", async({page})=>{
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8");

    const slider = page.locator("[data-role='rangeslider']").last();//208

    const sliderWidth = await slider.evaluate((el)=>{
        return el.getBoundingClientRect().width;
    })

    console.log("WIDTH of Slider: ", sliderWidth);

    /*
    await slider.hover({position:{x:0, y:0}});
    await page.mouse.down();
    //await slider.hover({position:{x:30,y:0}})
    await slider.hover({position:{x:sliderWidth*3/4,y:0}})
    await page.mouse.up();
    */

    let startX = 1;
    for(let i=20;i<=sliderWidth;i++){
        await slider.hover({position:{x:startX, y:0}});
        await page.mouse.down();
        await slider.hover({position:{x:i,y:0}})
        await page.mouse.up();
        startX = i;

        await page.reload();

       //const minPrice = await page.getByPlaceholder("Minimum Price").getAttribute('value');
       const minPrice = await page.locator("input[type='number'][min='122']").first().getAttribute('value');
       console.log("Minimum Price: ", minPrice);
       if(minPrice && parseInt(minPrice)>=500)
        break;
    }

    await page.pause();
})