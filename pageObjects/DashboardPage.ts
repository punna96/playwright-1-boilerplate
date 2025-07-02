import { Locator, Page, expect } from "@playwright/test";
import { validationmessages } from "../utils/constants";

export class DashboardPage {
  readonly page: Page;
  readonly WelcomeTag: Locator;
  constructor(page: Page) {
    this.page = page;
    this.WelcomeTag = page.locator('[data-testid="welcometag"]');
  }
  async NavigateToDashboard() {
    await this.page.goto("/dashboard");
    await expect(this.WelcomeTag).toHaveText(
      validationmessages.dashboard.welcomeHeader
    );
  }
}
