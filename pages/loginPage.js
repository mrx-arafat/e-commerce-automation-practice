class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    await this.page.goto("https://automationexercise.com/login");
    await this.page.fill("[data-qa='login-email']", email);
    await this.page.fill("[data-qa='login-password']", password);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.getByRole("button", { name: "Login" }).click(),
    ]);
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = LoginPage;
