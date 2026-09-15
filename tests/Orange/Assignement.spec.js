import { test, expect } from '@playwright/test';

test("Verify total price in greencart", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  let productName1 = "Cucumber ";
  let productName2 = "Beetroot ";

  let priceCucumber = await page
    .locator(
      `//div[@class='product']/h4[@class='product-name' and contains(text(),'${productName1}')]/../p[@class='product-price']`,
    )
    .textContent();
  priceCucumber = Number(priceCucumber);
  console.log("Price1=", priceCucumber);

  let priceBeetroot = await page
    .locator(
      `//div[@class='product']/h4[@class='product-name' and contains(text(),'${productName2}')]/../p[@class='product-price']`,
    )
    .textContent();
  priceBeetroot = Number(priceBeetroot);
  console.log("Price2=", priceBeetroot);

  const totalSum = priceCucumber + priceBeetroot;
  console.log("TotalSum", totalSum);

  const product1 = page.locator(
    `//div[@class='product' and .//h4[@class='product-name' and contains(., '${productName1}')]]`,
  );
  await product1.locator("button[type='button']").click();

  const product2 = page.locator(
    `//div[@class='product' and .//h4[@class='product-name' and contains(., '${productName2}')]]`,
  );
  await product2.locator("button[type='button']").click();

  let total = await page.locator(".cart-info strong").nth(1).textContent();

  total = Number(total);

  console.log("Cart Total", total);

  await expect(total).toBe(totalSum);
});