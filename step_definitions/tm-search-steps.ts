
import{Given, When, Then} from "cucumber";
import {browser, protractor} from 'protractor';
import { tmHomePo } from '../page_objects/tm-home-po';
import { tmMPSearch } from '../page_objects/tm-mp-search-po';
import {setDefaultTimeout} from 'cucumber';

import chai from 'chai';

setDefaultTimeout(60000);

let homepage = new tmHomePo();
let MpSearch = new tmMPSearch();
let EC = browser.ExpectedConditions;
let expect = chai.expect;
 
 Given('a user is in {string}', async (string)=> {
    
    await browser.get("https://www.trademe.co.nz/a");
    //await browser.waitForAngular();
  })

  When('enterd {string} to search', async (string)=> {    
    		
    await homepage.searchTextBox.sendKeys(string);

  });

  When('hit search button', async ()=> {
        browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page
		await homepage.searchButton.click()
  });

  When('user is navigated to the search results page', async ()=> {    
		
    await browser.wait(EC.visibilityOf(MpSearch.catSugesstionHeading), 5000, 'waiting for the category sugesstion header to appear'); 
  });

  Then('assert the user has served with matching search results', async ()=> {
     let text = await MpSearch.catSugesstionHeading.getText(); 
    expect(text).to.equal("Narrow your search for 'baby stroller'");
  });

  When('wait for search sugesstions to appear', async ()=> {
    await browser.wait(EC.visibilityOf(homepage.searchSugesstions), 3000, 'Waiting for search suggestions to appear')
  });

  When('move arrow down key to select the first sugesstions', async ()=> {
    await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  });
 
  When('press enter key', async ()=> {
    browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page

	await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });

  Then('assert user is served with matching number of search items', async ()=> {
    
    await browser.wait(EC.urlContains('https://www.trademe.co.nz/a/marketplace/mobile-phones/mobile-phones/samsung'), 5000, 'waiting for the url to change');

	let SearchResults = await MpSearch.allListingCards;

	expect(SearchResults.length).to.equal(24);

  });
