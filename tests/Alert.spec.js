// @ts-check
import { test, expect } from '@playwright/test'

// Best Practice
test.skip("Handle Popup", async ({ page }) => {                                                                   
    await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
    page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});

await page.locator('//input[@name="alert"]').click();

})
test.skip("Handle Popup", async ({ page }) => {
    await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
    await page.on("dialog", async (b) => {
        console.log(await b.message());
        b.dismiss()
    })
    await page.locator("//input[@name='confirmation']").click()

})
test("Handle Popup", async ({ page }) => {
    await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
    await page.on("dialog", async (b) => {
        console.log(await b.message());
        b.accept("I'm QA Engineer")
    })
    await page.locator("//input[@name='prompt']").click()

})