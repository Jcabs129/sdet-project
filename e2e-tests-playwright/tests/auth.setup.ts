import { test as setup } from '../fixtures/pom/test-options';

setup('auth user', async ({ loginPage, page }) => {
  await setup.step('create logged in user session', async () => {
    await loginPage.navigateToLogin('standard_user', 'secret_sauce');

    await page.context().storageState({ path: '.auth/userSession.json'})
  });
});