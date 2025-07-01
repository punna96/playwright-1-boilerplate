import { test } from '../fixtures/customFixtures';

test.beforeEach(async({loginPage})=>{
  await loginPage.navigate()
})
test('Login flow works correctly', async ({ loginPage }) => {
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
});

test('Login with empty credentials shows validation', async ({ loginPage})=>{
  await loginPage.login('','')
  await loginPage.verifyinvalidlogin()
})

test('Login flow using static admin data', async ({ loginPage }) => {
  await loginPage.loginWithStaticRole('admin');
});