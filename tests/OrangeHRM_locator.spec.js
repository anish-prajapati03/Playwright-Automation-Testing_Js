// @ts-check
import { test, expect } from '@playwright/test'


test('OrangeHRM Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();
});



