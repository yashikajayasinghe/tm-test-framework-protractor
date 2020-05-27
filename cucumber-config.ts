/**
 * Configuration file lists:
 * Settings to run files with cucumber feature files
 * proractor Config is an interface hence you can define the body of the
 * methods, customized to the needs
 * Ref: https://github.com/angular/protractor/blob/master/lib/config.ts
 * @Author: YashJ
 */
import { Config, browser } from 'protractor';
import * as reporter from 'cucumber-html-reporter';


export let config: Config = {

    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'custom',
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions':{w3c: false,  args: [ "--headless"]}
    },

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    specs: [
        '../features/*.feature' 
    ],

    cucumberOpts: {
        tags: "@login",
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: 'json:./test_reports/cucumber-json-report.json',      // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable) 
        require: [
            './step_definitions/*-steps.js', 
            './step_definitions/hooks.js' 
        ]
        
    },
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
      },
      
    onComplete: () =>{
        var options = {
            theme: 'bootstrap',
            jsonFile: './test_reports/cucumber-json-report.json',
            output: './test_reports/cucumber-html-report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
     
        reporter.generate(options);
    }
    

};