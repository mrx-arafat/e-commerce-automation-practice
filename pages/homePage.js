class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToJeansCategory() {
    await this.page.getByRole("heading", { name: " Men" }).click();
    await this.page.getByRole("link", { name: " Men" }).click();
    await this.page.getByRole("link", { name: "Jeans" }).click();
  }
}

module.exports = HomePage;
