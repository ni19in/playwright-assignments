import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

// Test Case 1 - Valid Login
test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce' );
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
});

// Test Case 2 - Invalid Password
test('Invalid Password', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user','wrongpassword');
    await expect(loginPage.errorMsg).toBeVisible();
});

// Test Case 3 - Locked User
test('Locked User', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('locked_out_user','secret_sauce');
  await expect(loginPage.errorMsg).toContainText('Sorry, this user has been locked out' );
});

// Test Case 4 - Blank Credentials
test('Blank Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
   await loginPage.clickLogin();
   await expect(loginPage.errorMsg).toContainText('Username is required');
});