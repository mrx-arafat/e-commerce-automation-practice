const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const HomePage = require("../pages/homePage");
const ProductPage = require("../pages/productPage");
const CartPage = require("../pages/cartPage");
const CheckoutPage = require("../pages/checkoutPage");
const ContactUsPage = require("../pages/contactUsPage");
const path = require("path");
const config = require("../utils/config");

test("Full E-commerce Flow with POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const contactUsPage = new ContactUsPage(page);

  await loginPage.login(config.loginData.email, config.loginData.password);
  await homePage.navigateToJeansCategory();
  await productPage.addProductToCart(2);
  await cartPage.proceedToCheckout();
  await checkoutPage.placeOrderAndPay();

  // Download invoice
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download Invoice" }).click();
  await page.waitForLoadState("networkidle");
  const download = await downloadPromise;
  console.log(`Invoice downloaded to: ${download.suggestedFilename()}`);

  // Contact Us
  const filePath = path.join(__dirname, "../sitelist.txt");
  await contactUsPage.submitContactForm(
    "rafi",
    "rafi@test.com",
    "TEST",
    "this is a dummy msg",
    filePath
  );
});
