// @ts-check
import {test,expect} from '@playwright/test';

test('Validate the URl',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page).toHaveURL(/.*orangehrmlive/)
})