// @ts-check
import { test, expect } from '@playwright/test';


test('Handling Radio Button', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//label[normal-space()="Male"]').click();
    await page.locator('//label[normal-space()="Female"]').check();
    await page.waitForTimeout(10000);
})