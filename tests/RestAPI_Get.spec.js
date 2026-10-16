import { test, expect, request } from '@playwright/test';

test.skip('Test Rest API with GET Method', async ({ request }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const res = await request.get(url);
    expect(res.status()).toBe(200);
});




test('Test REST API with GET Method', async () => {
    const apiContext = await request.newContext();

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    const res = await apiContext.get(url);

    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log(body);

    await apiContext.dispose();
});
