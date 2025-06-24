import { Page, Locator, expect} from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  get usernameField () {
    return this.page.getByPlaceholder('Username').fill('standard_user')
  }
  get passwordField () {
    return this.page.getByPlaceholder('Password').fill('secret_sauce')
  }

  async navigateToLogin() {
    await this.page.goto('https://www.saucedemo.com/')
    await this.usernameField
    await this.passwordField
    await this.page.getByRole('button').getByText('Login').click()
    await expect(this.page.getByText('Swag Labs')).toBeVisible()


  //   await this.page.waitForResponse(
  //     (response) =>
  //         response.url().includes('/inventory.html') &&
  //         response.request().method() === 'GET'
  // );
  }
}