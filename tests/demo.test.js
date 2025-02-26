const { test, expect } = require("@playwright/test");

test("@Web UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");

  const termsText = page.locator(".termsText");

  await expect(termsText).toHaveText("I Agree to the terms and conditions");

  await userName.fill("rahulshetty");

  await dropdown.selectOption("consult");

  await page.locator(".radiotextsty").last().click();

  await page.locator("#okayBtn").click();

  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  // await page.pause();
});
