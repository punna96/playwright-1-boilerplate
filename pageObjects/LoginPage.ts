import { Locator, Page, expect } from "@playwright/test";
import { validationmessages } from "../utils/constants";
import { getUserByRole } from "../utils/static-user";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitbutton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-testid="username"]');
    this.password = page.locator('[data-testid="password"]');
    this.submitbutton = page.locator('[data-testid="login-btn"]');
  }

  async navigate() {
    await this.page.goto("/login");
  }

  async verifylogin() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async verifyinvalidlogin() {
    await expect(this.username).toHaveText(
      validationmessages.login.requiredemail
    );
    await expect(this.password).toHaveText(
      validationmessages.login.requiredpassword
    );
  }
}
