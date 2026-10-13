//@ts-check
import { test, expect } from '@playwright/test';

test("Upload single File", async ({ page }) => {
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    await page.locator("//input[@id='upload']").setInputFiles('C:/Users/anish/Downloads/WhatsApp Image 2026-10-07 at 1.39.33 PM.jpeg');
    await page.waitForTimeout(5000)
})

test("Upload Multi File", async ({ page }) => {
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    await page.locator("//input[@id='upload']").setInputFiles(['C:/Users/anish/Downloads/WhatsApp Image 2026-10-07 at 1.39.33 PM.jpeg', 'C:/Users/anish/Downloads/WhatsApp Image 2026-10-07 at 1.39.33 PM.jpeg', 'C:/Users/anish/Downloads/WhatsApp Image 2026-10-07 at 1.39.33 PM.jpeg']);
    await page.waitForTimeout(5000)
})

test("Upload File without input", async ({ page }) => {
    await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('').click()
    const filechooser = await fileChooserPromise;
    await filechooser.setFiles('');

    await page.waitForTimeout(5000)
})