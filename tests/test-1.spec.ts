import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Men', exact: true }).click();
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Men', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: /^Jeans$/ }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Mast & Harbour Men Mid-Rise' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByText('ADD TO BAG')).toBeVisible();
  await expect(page1.locator('#mountRoot')).toContainText('Mast & Harbour');
  await expect(page1.locator('#mountRoot')).toMatchAriaSnapshot(`
    - heading "Mast & Harbour" [level=1]
    - heading "Men Mid-Rise Pure Cotton Relaxed Fit Jeans" [level=1]
    - text: /3\\.9 \\| \\d+ Ratings/
    - paragraph:
      - strong: /₹\\d+/
      - text: /Price Details Maximum Retail Price Rs\\. \\d+ \\(Incl\\. of all taxes\\)/
      - separator
      - text: /Discount \\d+% OFF Selling Price Rs\\. \\d+ \\(Incl\\. of all taxes\\) MRP ₹\\d+\\(\\d+% OFF\\)/
    - paragraph: inclusive of all taxes
    - paragraph:
      - strong: More Colors
    - link "Blue":
      - /url: /jeans/mast+%26+harbour/mast--harbour-men-pure-cotton-relaxed-fit-jeans/32467399/buy
      - img
    - link "Blue":
      - /url: /jeans/mast+%26+harbour/mast--harbour-men-relaxed-fit-light-fade-jeans/32467479/buy
      - img
    - heading "SELECT SIZE" [level=4]
    - button "Size Chart"
    - button /\\d+/:
      - paragraph: /\\d+/
    - button /\\d+/:
      - paragraph: /\\d+/
    - button /\\d+/:
      - paragraph: /\\d+/
    - button /\\d+/:
      - paragraph: /\\d+/
    - button /\\d+/:
      - paragraph: /\\d+/
    - text: ADD TO BAG WISHLIST
    - heading "Delivery Options" [level=4]
    - textbox "Enter pincode"
    - button "Check"
    - paragraph: Please enter PIN code to check delivery time & Pay on Delivery Availability
    - text: /\\d+% Original Products Pay on delivery might be available Easy 7 days returns and exchanges/
    - heading "BEST OFFERS" [level=4]
    - text: "/Best Price: Rs\\\\. \\\\d+/"
    - list:
      - listitem: "Coupon code: MYNTRAEXCLUSIVE"
      - listitem: "/Coupon Discount: \\\\d+% off upto Rs\\\\. \\\\d+ \\\\(check cart for final savings\\\\)/"
      - listitem: "/Applicable on: Orders above Rs\\\\. \\\\d+ \\\\(only on first purchase\\\\)/"
    - link "View Eligible Products":
      - /url: https://www.myntra.com/myntra?f=Coupons:MYNTRAEXCLUSIVE_129164
    - text: /\\d+% Instant Discount on BOBCARD Credit Card/
    - listitem: /Min Spend ₹\\d+,\\d+ Max Discount ₹\\d+,\\d+/
    - link "Terms & Condition":
      - /url: https://www.myntra.com/shop/seasonsstylefest
    - text: /\\d+% Instant Discount on BOBCARD Credit Card EMI/
    - listitem: /Min Spend ₹\\d+,\\d+ Max Discount ₹\\d+,\\d+/
    - link "Terms & Condition":
      - /url: https://www.myntra.com/shop/seasonsstylefest
    - text: /\\d+% Instant Discount on Kotak Bank Credit Card/
    - listitem: /Min Spend ₹\\d+,\\d+ Max Discount ₹\\d+,\\d+/
    - link "Terms & Condition":
      - /url: https://www.myntra.com/shop/seasonsstylefest
    - text: /\\d+% Instant Discount on Kotak Bank Credit Card EMI/
    - listitem: /Min Spend ₹\\d+,\\d+ Max Discount ₹\\d+,\\d+/
    - link "Terms & Condition":
      - /url: https://www.myntra.com/shop/seasonsstylefest
    - text: FLat 7.5% Cashback on Flipkart Axis Bank & SBI Credit Cards.
    - listitem: /Flat 7\\.5% Cashback on Flipkart Axis Bank & SBI Credit Cards on a min spend of ₹\\d+/
    - link "Terms & Condition":
      - /url: https://www.myntra.com/cbc/store?source=BankSISPage#modal
    - text: EMI option available
    - listitem: /EMI starting from Rs\\.\\d+\\/month/
    - text: View Plan
    - heading "Product Details" [level=4]
    - paragraph:
      - list:
        - listitem: Light shade, no fade white jeans
        - listitem: Relaxed fit, mid-rise
        - listitem: Clean look
        - listitem: Non stretchable
        - listitem: 5 pockets
        - listitem: Button and zip closure
        - listitem: "Length: regular"
    - heading "Size & Fit" [level=4]
    - paragraph: "/Fit: Relaxed Fit Non Stretchable The model \\\\(height 6'\\\\) is wearing a size \\\\d+/"
    - heading "Material & Care" [level=4]
    - paragraph: /\\d+% Cotton Machine wash/
    - heading "Specifications" [level=4]
    - text: Distress Clean Look Waist Rise Mid-Rise Fade No Fade Shade Light Fit Relaxed Fit Length Regular Waistband With belt loops Stretch Non Stretchable See More
    - main:
      - text: /Ratings 3\\.9 \\d+ Verified Buyers 5/
      - progressbar
      - text: /\\d+ 4/
      - progressbar
      - text: /\\d+ 3/
      - progressbar
      - text: /\\d+ 2/
      - progressbar
      - text: /\\d+ 1/
      - progressbar
      - text: /\\d+ What Customers Said/
      - img
      - text: /Fit Loose \\(\\d+%\\) Stretch Medium \\(\\d+%\\) View Details Customer Photos \\(\\d+\\) Customer Reviews \\(\\d+\\) 5/
      - img
      - text: /I recently bought this loose fit pants and I'm honestly impressed!! The fit is relaxed and airy, giving a breezy feel\\. Great for summer and lounging\\.Made with soft cotton, the fabric feels light on the skin and doesn’t cling even in humid weather\\.I ordered my regular size and The fit is truly relaxed without looking oversized, and they’re super comfortable for all-day wear\\. The length is also perfect not too long not too short\\.Overall, they’re great value for money and I’d definitely recommend them\\. Hari Bingi \\| \\d+ June \\d+/
      - img
      - text: "2"
      - img
      - text: 0 5
      - img
      - text: /⭐⭐⭐⭐⭐ Excellent Product – Highly Recommended! I am extremely satisfied with this clothing item\\. The quality of the fabric is excellent—soft, comfortable, and feels premium\\. The fitting is perfect and exactly as described, which makes it even better\\. The design and color are also very appealing and look even better in real life\\. It’s suitable for both casual and semi-formal wear\\. After multiple washes, the cloth still maintains its shape and color, which shows its durability\\. Overall, this is one of the best purchases I’ve made on Myntra\\. Totally worth the price! I would highly recommend it to anyone looking for quality and style in one product\\. Raj Jha \\| 2 Apr \\d+/
      - img
      - text: "0"
      - img
      - text: 0 5
      - img
      - text: /"This white pant is simply excellent\\. The material is very comfortable and breathable, and hence this pant can be worn throughout the day\\. The fitting is right according to the sizes mentioned\\. This pant has a very stylish appearance\\. Quality wise, the stitching is fine and the fabric used is top-notch considering the pricing of the product\\. This pant goes well with either casual or formal dress\\. I am glad about my purchase\\." "An excellent fit and quality fabric\\. The color white gives it an exquisite look and can be worn with anything,Worth buying\\. Rajat \\| 3 June \\d+/
      - img
      - text: "0"
      - img
      - text: "0"
      - link /View all \\d+ reviews/:
        - /url: /reviews/32467375
    - text: "/Product Code: \\\\d+ Seller: Truecom Retail View Supplier Information/"
    `);
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await page.getByRole('link', { name: 'How to install Playwright' }).click();

    await page.pause();

    //getByRole('link', { name: 'Writing tests', exact: true })
    //getByRole('link', { name: 'Trace viewer' }).first()
});