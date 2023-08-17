import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  
  // permet de mettre l'exécution en pause, et de faire du Debug avec Inspector
  await page.pause()

  // Utilisation de n'importe quelle propriété du champ Username :
  await page.click('id=user-name')
  await page.locator('[id="user-name"]').fill('Consort')
  
  // Utilisation du Selector CSS :
//   await page.locator('#login-button').click()

// Utilisation du texte :
  await page.locator('text=LOGIN').click()
  //await page.locator('input:has-text("LOGI")').click()
  

});

