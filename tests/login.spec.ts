import { test } from '../fixtures/customFixtures';

test('Login with empty credentials shows validation', async ({loginPage})=>{
  await loginPage.verifyinvalidlogin()
})

