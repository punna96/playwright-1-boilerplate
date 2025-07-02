import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage";
import { DashboardPage } from "../pageObjects/DashboardPage";

const USERNAME_SELECTOR = '[data-testid="username"]';
const PASSWORD_SELECTOR = '[data-testid="password"]';
const LOGIN_BUTTON_SELECTOR = '[data-testid="login-btn"]';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  login: () => Promise<void>;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  login: async ({ page }, use) => {
    let email: string, password: string;
    if (process.env.STATIC_USER_ROLE) {
      const { getUserByRole } = await import("../utils/static-user");
      const credentials = getUserByRole(
        process.env.STATIC_USER_ROLE as "admin" | "user"
      );
      email = credentials.email;
      password = credentials.password;
    } else {
      email = process.env.USERNAME!;
      password = process.env.PASSWORD!;
    }
    await page.goto("/login");
    await page.fill(USERNAME_SELECTOR, email);
    await page.fill(PASSWORD_SELECTOR, password);
    await page.click(LOGIN_BUTTON_SELECTOR);
    await page.waitForURL("**/dashboard");
    await use(async () => {});
  },
});

export { expect } from "@playwright/test";

test.beforeEach(async ({ login }) => {
  await login();
});
