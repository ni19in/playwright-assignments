import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Valid Login', async ({ page }) => {

    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

    await expect(page.locator('.title'))
        .toHaveText('Products');
});

test('Login Again', async ({ page }) => {

    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

    await expect(
        page.getByText('Products')
    ).toBeVisible();
});

test.afterEach(async () => {
    console.log('Test execution completed');
});