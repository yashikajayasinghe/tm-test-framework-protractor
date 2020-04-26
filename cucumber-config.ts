/**
 * Configuration file lists:
 * Settings to run files with cucumber feature files
 * @Author: YashJ
 */
import { Config } from 'protractor';

export let config: Config = {

    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'custom',
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions':{w3c: false}
    },

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        '../features/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            './step_definitions/*-steps.js' // accepts a glob
        ]
    }

};