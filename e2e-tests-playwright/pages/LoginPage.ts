import { Page, Locator, expect} from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  get usernameField () {
    return this.page.getByPlaceholder('Username')
  }
  get passwordField () {
    return this.page.getByPlaceholder('Password')
  }

  get loginButton () {
    return this.page.getByRole('button').getByText('Login')
  }

  async navigateToLogin(username: string, password: string): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/')
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginButton.getByText('Login').click()
    await expect(this.page.getByText('Swag Labs')).toBeVisible()


  //   await this.page.waitForResponse(
  //     (response) =>
  //         response.url().includes('/inventory.html') &&
  //         response.request().method() === 'GET'
  // );
  }
}