//@ts-check

import { test, expect } from '@playwright/test';

test("Handle Multiple value dropdown", async ({ page }) => {
    await page.goto("https://chercher.tech/practice/dropdowns");
    await page.locator("//select[@id='second']").selectOption(['Pizza', 'Donut', 'Burger']);
    await page.locator("//select[@id='second']").selectOption([
        { label: 'Pizza' },
        { label: 'Donut' },
        { label: 'Burger' }
    ]);
    await page.waitForTimeout(5000);
})