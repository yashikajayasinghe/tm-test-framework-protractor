import { Before, BeforeAll, After, Scenario, Status, CallbackStepDefinition  } from "cucumber";
import { browser } from "protractor";

/**
 * Hooks used with Cucumber.js 
 * Ref: https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
 * @Author: YashJ
 */

After( async function(scenario){
  // This hook will be executed After all scenarios
  //console.log("End of the test");
  if(scenario.result.status === Status.FAILED)  {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
    

});
