import {test, expect} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.only("Basic Test", async({page}, testInfo) => {

    await page.goto("https://commitquality.com/practice-api");
    await page.locator(".back-link").waitFor();

    //Check de la page complète :
    // const axeBuilder = await new AxeBuilder({page})
    //     .analyze();

    //Check d'un seul élément de la page (avec include) :
    // const axeBuilder = await new AxeBuilder({page})
    //     .include(".back-link")
    //     .analyze();

    // //Check avec exlusion d'un élément de la page :
    // const axeBuilder = await new AxeBuilder({page})
    //     .exclude("h2")
    //     .analyze();

    //Check en taguant les règles wcag2 : ici on a un fail à cause de "best-practice"
    // On disable la règle "region" : cf https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
    const axeBuilder = await new AxeBuilder({page})
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
        .disableRules(["region"])
        .analyze();

        await testInfo.attach("accessibility-scan-results", {
            body: JSON.stringify(axeBuilder, null, 2),
            contentType: "application/json"
        });
    
    // Résultat attendu : on ne souhaite aucune violation de règle d'accessibilité :
    expect(axeBuilder.violations).toEqual([]);


});