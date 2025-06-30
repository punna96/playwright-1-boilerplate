import { test, expect } from '../fixtures/customFixtures';

test('Login flow works correctly', async ({ loginPage }) => {
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  await expect(loginPage['page']).toHaveURL(/dashboard/);
});