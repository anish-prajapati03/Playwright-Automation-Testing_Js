
import { test, expect } from '@playwright/test';

test('Verify broken images', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/broken_images');

    const images = page.locator('img');
    const count = await images.count();

    console.log('Total images:', count);

    for (let i = 0; i < count; i++) {
        const image = images.nth(i);

        const isLoaded = await image.evaluate(
            img => img.complete && img.naturalWidth > 0
        );

        console.log(`Image ${i + 1} loaded successfully: ${isLoaded}`);

        // Optional: Fail the test if the image is broken
        expect(isLoaded, `Image ${i + 1} is broken`).toBe(true);
    }
});
