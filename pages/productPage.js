class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart(quantity = 1) {
    await this.page
      .getByRole("link", { name: " View Product" })
      .nth(1)
      .click();
    await this.page.locator("#quantity").fill(quantity.toString());
    await this.page.getByRole("button", { name: " Add to cart" }).click();
  }
}

module.exports = ProductPage;
