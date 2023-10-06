import { test, expect } from '@playwright/test';

test('Login to SauceDemo.com', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');

  //await page.pause();

  await expect(page).toHaveTitle('Swag Labs');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  

});
