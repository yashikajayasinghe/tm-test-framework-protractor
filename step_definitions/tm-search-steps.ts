
import{Given, When, Then} from "cucumber";
import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder , protractor} from 'protractor';
import { tmHomePo } from '../page_objects/tm-home-po';
import { tmMPSearch } from '../page_objects/tm-mp-search-po';
import chai from 'chai';

let homepage = new tmHomePo();
let MpSearch = new tmMPSearch();
let EC = browser.ExpectedConditions;
let expect = chai.expect;
 
 Given('a user is in {string}', async (string)=> {
    await browser.get("https://www.trademe.co.nz/a");
  })

  When('enterd {string} to search', async (string)=> {    
    		
    await homepage.searchTextBox.sendKeys('baby stroller');

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