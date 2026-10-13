// @ts-check

import { test, expect } from '@playwright/test'

test("Handle dropdown button", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill('standard_user');
    await page.locator("//input[@id='password']").fill('secret_sauce');
    await page.locator("//input[@id='login-button']").click();
    await page.locator("//select[@aria-label='Sort products']").selectOption('hilo');
    await page.locator("//select[@aria-label='Sort products']").selectOption({ label: "Price (low to high)" });
    await page.locator("//select[@aria-label='Sort products']").selectOption("Price (low to high)");  // both line 11 & 12 are correct way
    await page.waitForTimeout(5000);
})