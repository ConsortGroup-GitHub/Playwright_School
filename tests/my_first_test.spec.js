const {test, expect} = require('@playwright/test')

// import {test, expect} from '@playwright/test'

test('My first test', async ({page}) => {

    // await console.log('Début du traitement !')
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
    // await console.log('Fin du traitement !')
})
