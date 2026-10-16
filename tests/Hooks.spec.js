// @ts-check

import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.google.com/");

})
test.afterEach(async ({ page }) => {
    await page.close();
})

test('Verify the Title', async ({ page }) => {
    const title = await page.title()
    expect(title).toBe('Google');
})

test('Verify the URL', async ({ page }) => {
    console.log('Actual URL:', page.url());

    await expect(page).toHaveURL(/google\.com/);
});