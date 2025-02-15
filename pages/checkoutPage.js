class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async placeOrderAndPay() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
    await this.page.locator('input[name="name_on_card"]').fill("Rafi");
    await this.page
      .locator('input[name="card_number"]')
      .fill("4242424242424242");
    await this.page.getByPlaceholder("ex.").fill("311");
    await this.page.getByPlaceholder("MM").fill("09");
    await this.page.getByPlaceholder("YYYY").fill("2029");
    await this.page
      .getByRole("button", { name: "Pay and Confirm Order" })
      .click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = CheckoutPage;
