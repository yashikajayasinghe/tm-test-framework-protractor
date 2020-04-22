/**
 * Configuration file lists:
 * seleniumAddress: The port where protractor is running in the local machine
 * scpecs: All the test files it has to execute
 * @Author: YashJ
 */
import {Config} from "protractor";
export let config:Config = {
    directConnect:true,
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions':{w3c: false}
    },
    framework: 'jasmine',
    specs:['tm-spec.js']
}