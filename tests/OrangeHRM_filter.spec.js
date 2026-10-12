// @ts-check
import { test, expect } from '@playwright/test';


test('Filtering Locator', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();


    //filtering by text
    // await page.getByRole('listitem').filter({hasText:/Leave/}).click();

    // Verify successful login
    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    // Click the Leave navigation item
    await page.getByRole('link', { name: 'Leave' }).click();

    // verify the heading Leave
    await expect(
        page.getByRole('heading', { name: 'Leave', exact: true })
    ).toBeVisible();
    

    await page.waitForTimeout(10000);

})