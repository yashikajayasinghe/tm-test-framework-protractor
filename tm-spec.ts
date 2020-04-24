/**
 * All the tests are included in the spec file.
 * Spec file uses Jasmine synatx ('describe' for the 'test suite' and 'it' for the 'test case') https://jasmine.github.io/
 * Protractor code is placed in the 'it' function
 * ref https://www.protractortest.org/#/tutorial
 * @Author: YashJ
 */

import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder , protractor} from 'protractor'
import { tmHomePo } from './page_objects/tm-home-po';
import { tmMPSearch } from './page_objects/tm-mp-search-po';

describe('As a TM user I can got to TM main Homepage to perform a search', function () {


	it('go to tm home and search for a baby stroller', async () => {

		await browser.get("https://www.trademe.co.nz/a"); //Fact: Homepage is identified as an agnular page by the protractor webdriver
		let homepage = new tmHomePo();
		await homepage.searchTextBox.sendKeys('baby stroller');

		browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page	

		await homepage.searchButton.click()

		let MpSearch = new tmMPSearch();
		let EC = browser.ExpectedConditions;
		await browser.wait(EC.visibilityOf(MpSearch.catSugesstionHeading), 5000, 'waiting for the dialog title to appear');    
    	expect(MpSearch.catSugesstionHeading.getText()).toContain("Narrow your search for 'baby stroller'");

	});

	
});