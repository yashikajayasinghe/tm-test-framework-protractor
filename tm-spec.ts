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
		
		await browser.wait(EC.visibilityOf(MpSearch.catSugesstionHeading), 5000, 'waiting for the category sugesstion header to appear');    
		
		console.log((await MpSearch.allListingCards).length);
		
		expect(MpSearch.catSugesstionHeading.getText()).toContain("Narrow your search for 'baby stroller'");		

	});
	/**
	 * Protractor : actions API
	 */

	it('go to tm home and search for samsung and select search sugesstions', async () => {
		
		await browser.get("https://www.trademe.co.nz/a");

		let homepage = new tmHomePo();

		let EC1 = browser.ExpectedConditions;

		await homepage.searchTextBox.sendKeys('samsung');

		await browser.wait(EC1.visibilityOf(homepage.searchSugesstions), 3000, 'Waiting for search suggestions to appear')

		await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

		browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page

		await browser.actions().sendKeys(protractor.Key.ENTER).perform();

		let MpSearch = new tmMPSearch();

		await browser.wait(EC1.urlContains('https://www.trademe.co.nz/a/marketplace/mobile-phones/mobile-phones/samsung'), 5000, 'waiting for the url to change');

		let SearchResults = await MpSearch.allListingCards;

		expect(SearchResults.length).toBe(24);



	});	

	
});