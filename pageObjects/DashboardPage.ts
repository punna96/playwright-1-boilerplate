import { Locator, Page, expect } from "@playwright/test";
import { validationmessages } from "../utils/constants";

export class DashboardPage {
  readonly page: Page;
  readonly welcomeTag: Locator;
  constructor(page: Page) {
    this.page = page;
    this.welcomeTag = page.locator('[data-testid="welcometag"]');
  }
  async NavigateToDashboard() {
    await this.page.goto("/dashboard");
    await expect(this.welcomeTag).toHaveText(
      validationmessages.dashboard.welcomeHeader
    );
  }
}
