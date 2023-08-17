import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')

    await page.close()

})

test('Homepage', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('#item_1_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    await page.close()
})

test.only('Logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html')


    //await page.pause()

    await expect(page).toHaveScreenshot()
    
    await expect.soft(page.locator('//div[@class="app_logo"]')).toHaveText('Swag Labs')

    //await expect(page.locator('getByText(Swag Labs)')).toHaveText('Swag Labs')
    // await expect.soft(page.locator('#header_container > div.primary_header > div.header_label > div')).toHaveText('Swag Labos')

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    await page.close()
})

