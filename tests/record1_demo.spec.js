// const {test, expect} = require('@playwright/test')

import { test, expect } from '@playwright/test';

test('record demo test', async ({ page, context }) => {
  
  // await context.tracing.start({snapshots: true, screenshots: true})
  
  await page.goto('https://www.saucedemo.com/');
  
  // permet de mettre l'exécution en pause, et de faire du Debug avec Inspector :
  //await page.pause();

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // await context.tracing.stop({path: 'test1_trace.zip'})

});