import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('link', { name: 'Jeans' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Mast & Harbour Men Mid-Rise' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '32' }).click();
  await page1.getByRole('button', { name: '32' }).click();
  await page1.getByText('ADD TO BAG').click();
  await page1.getByText('Bag', { exact: true }).click();
  await expect(page1.getByText('ENTER PIN CODE')).toBeVisible();
  await expect(page1.locator('#appContent')).toContainText('Check delivery time & services');
  await page1.getByText('₹10', { exact: true }).click();
  await page1.getByText('Apply CouponsAPPLYLogin to').click();
  await expect(page1.locator('#appContent')).toMatchAriaSnapshot(`
    - text: Check delivery time & services ENTER PIN CODE
    - img
    - text: 1/1 Items Selected
    - button "REMOVE"
    - button "MOVE TO WISHLIST"
    - img
    - link "image":
      - img "image"
    - text: Mast & Harbour
    - link "Men Mid-Rise Pure Cotton Relaxed Fit Jeans":
      - /url: /Jeans/Mast+%26+Harbour/Mast--Harbour-Men-Mid-Rise-Pure-Cotton-Relaxed-Fit-Jeans/32467375/buy?mini=true&skuId=104593047&sellerPartnerId=4028&isMnowCalloutDisplayedInSrc=false
    - text: "/Sold by: Truecom Retail Size: \\\\d+/"
    - img
    - text: "Qty: 1"
    - img
    - text: /₹\\d+ ₹\\d+,\\d+ \\d+% Off/
    - img
    - img
    - text: 7 days return available
    - img
    - img "image"
    - text: Login to see items from your existing bag and wishlist.
    - link "LOGIN NOW":
      - /url: /login?referer=/checkout/cart
    `);
});