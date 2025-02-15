class CartPage {
  constructor(page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.getByText("Proceed To Checkout").click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = CartPage;
