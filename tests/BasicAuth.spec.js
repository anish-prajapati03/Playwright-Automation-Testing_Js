// @ts-check
import { test, expect } from '@playwright/test';

test('Basic Auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });

    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    const text = await page.locator('div.example p').textContent();

    expect(text).toContain('Congratulations');

    await context.close();
});
