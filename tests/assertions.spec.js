import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')

    // Vérifier la présence (unique) d'un élément :
    // On passe ici par le CSS du texte "The Kitchen" :
    await expect(page.locator('#__next > div > div > section > div > h1')).toHaveCount(1)

    if (await page.$('#__next > div > div > section > div > h1')) {
        await page.locator('#__next > div > div > section > div > h1').click()
    }

    // Assertion Hidden / Visible :
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeVisible()
    //await expect.soft(page.locator('#__next > div > div > section > div > h1')).toBeHidden()

    // Assertion Enabled / Disabled :
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeEnabled()
    //await expect.soft(page.locator('#__next > div > div > section > div > h1')).toBeDisabled()

    // Assertion Text :
    await expect(page.locator('#__next > div > div > section > div > h1')).toHaveText('The Kitchen')
    await expect(page.locator('#__next > div > div > section > div > h1')).toContainText('he Kitch')
    await expect(page.locator('#__next > div > div > section > div > h1')).not.toHaveText('The Bathroom')


    // Assertion Attribut (ici un attribut class) :
    await expect(page.locator('#__next > div > div > section > div > div > a:nth-child(1) > h3')).toHaveAttribute('class', 'chakra-heading css-zey6tx')
    // OU
    await expect(page.locator('#__next > div > div > section > div > div > a:nth-child(1) > h3')).toHaveAttribute('class', /.*css-zey6tx/)
    // OU
    await expect(page.locator('#__next > div > div > section > div > div > a:nth-child(1) > h3')).toHaveClass('chakra-heading css-zey6tx')
    // OU
    await expect(page.locator('#__next > div > div > section > div > div > a:nth-child(1) > h3')).toHaveClass(/.*css-zey6tx/)

    // permet de mettre l'exécution en pause, et de faire du Debug avec Inspector :
    // await page.pause()

    // Assertion de l'URL :
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    // OU
    await expect(page).toHaveURL(/kitchen.applitools.com/)

    // Assertion du Title :
    await expect(page).toHaveTitle('The Kitchen')
    //OU
    await expect(page).toHaveTitle(/.*Kitchen/)

    // Assertion Validation visuelle avec Screenshot
    await expect(page).toHaveScreenshot()

});

