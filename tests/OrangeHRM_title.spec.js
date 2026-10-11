// @ts-check
import{test,expect} from '@playwright/test';


test('Validate the title of OrangeHRM website', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveTitle(/OrangeHRM/);

})