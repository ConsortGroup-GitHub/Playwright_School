import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('Slow Motion and video recording demo', async () => {

    const browser = await chromium.launch({  // On pourrait avoir firefox.launch() ou webkit.launch()
        headless: false, // permettra ici de lancer par défaut en mode headed
        slowMo: 500
    })

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {
                width: 800,
                height: 600
            }
        }
    })

    const page = await context.newPage()

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    await context.close()

})

