// @ts-check
import { test, expect } from '@playwright/test';


test('Handling checkbox', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//label[normal-space()="Sports"]').click();
    await page.locator('//label[normal-space()="Music"]').check();
    await page.locator('//label[normal-space()="Sports"]').uncheck();
    await page.waitForTimeout(10000);
})