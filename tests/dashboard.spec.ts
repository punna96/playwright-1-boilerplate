import {test} from '../fixtures/customFixtures'

test('Dashboard loads and displays welcome message', async ({ dashboardPage }) => {
  await dashboardPage.NavigateToDashboard()
})