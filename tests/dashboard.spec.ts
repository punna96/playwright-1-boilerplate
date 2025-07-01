import {test} from '../fixtures/customFixtures'

test.beforeEach(async ({ dashboardPage }) => {
  await dashboardPage.NavigateToDashboard();
});
test('Dashboard loads and displays welcome message', async ({ dashboardPage }) => {
  await dashboardPage.NavigateToDashboard()
})