const path = require("path");

class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  async submitContactForm(name, email, subject, message, filePath) {
    await this.page.getByRole("link", { name: " Contact us" }).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.getByPlaceholder("Name").fill(name);
    await this.page.getByPlaceholder("Email", { exact: true }).fill(email);
    await this.page.getByPlaceholder("Subject").fill(subject);
    await this.page.getByPlaceholder("Your Message Here").fill(message);
    await this.page
      .locator('input[name="upload_file"]')
      .setInputFiles(filePath);

    this.page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await this.page.getByRole("button", { name: "Submit" }).click();
  }
}

module.exports = ContactUsPage;
