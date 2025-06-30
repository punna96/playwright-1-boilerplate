import { test, expect } from '@playwright/test';

test('Dashboard loads and displays welcome message', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('h1')).toHaveText('Welcome');
});