/**
 * All the tests are included in the spec file.
 * Spec file uses Jasmine synatx ('describe' for the 'test suite' and 'it' for the 'test case') https://jasmine.github.io/
 * Protractor code is placed in the 'it' function
 * ref https://www.protractortest.org/#/tutorial
 * @Author: YashJ
 */

import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder , protractor} from 'protractor'

describe('As a TM user I can got to TM main Homepage to perform a search', function(){
	
	  
	it('go to tm home and search for a baby stroller',function(){
		
		browser.get("https://www.trademe.co.nz/a"); //Fact: Homepage is identified as an agnular page by the protractor webdriver
		var searchTextBox = element(by.id('search'));
		var searchButton = element(by.css('tm-global-search button[class="tm-global-search__search-form-submit-button o-button2--primary o-button2"]'));
		searchTextBox.sendKeys('baby stroller');

		browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page
		
		//urlChanged is a customized Expected Condition that is being used in the 'browser.wait' method,  which replaces 'browser.sleep'
			var urlChanged = function() {
				return browser.getCurrentUrl().then(function(url) {
				return url === 'https://www.trademe.co.nz/a/marketplace/baby-gear/prams-strollers/search?search_string=baby%20stroller';
				});
			};
			
		
		searchButton.click().then(function(){	
						
			browser.wait(urlChanged, 5000);//Hack for: Dom element is not being able to locate after ignoring async operations (5 seconds efficient than previously used browser.sleep)	
			
			var catSugesstionHeading = element(by.css('tm-category-suggestions h2[class="tm-category-suggestions__heading"]'));
			catSugesstionHeading.getText().then(function(text){

				expect(text).toBe("Narrow your search for 'baby stroller'");
	
			});		
		});							
	});

	/**
	 * Protractor : actions API
	 */

	it('go to tm home and search for samsung and select search sugesstions', function(){
		browser.get("https://www.trademe.co.nz/a");
		
		let  searchTextBox = element(by.id('search'));			

		
		browser.actions()
				.click(searchTextBox)
				.sendKeys('samsung')
				.mouseMove(searchTextBox)
				.perform();
		/**below Key.ARROW_DOWN and Key.ENTER actions may not work unless capabilities for goog:chromeOptions 
		in the configurations file chenged to 'w3c:false'**/
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		
		browser.waitForAngularEnabled(false); //Hack for: the search results page is not being identified as an angular page
		
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			
			//Hack for: Dom element is not being able to locate after ignoring async operations	
			var urlChanged = function() {
				return browser.getCurrentUrl().then(function(url) {
				return url === 'https://www.trademe.co.nz/a/search?search_string=samsung';
				});
			};

			browser.wait(urlChanged, 5000);
			
			element.all(by.css('tm-search-results tm-search-card-switcher')).count().then(function(count){
					
				expect(count).toBe(24);

			});				
		});
	});	
	/**
	 * Protractor : switchTo API
	 */
	it('go to TM Home page and click on the covid19 banner to open a new browser tab', function(){
        browser.get("https://www.trademe.co.nz/a");
        browser.waitForAngularEnabled(false);
        element(by.css("tm-homepage-announcement a[class*='tm-homepage-announcement__covid-announcement']")).click().then(function(){
            browser.getAllWindowHandles().then(function(handle){
                browser.switchTo().window(handle[1]);
                browser.getTitle().then(function(title){
                    expect(title).toBe('COVID-19 update: changes to our services - Announcements | Trade Me');
                });
            });
        });
    });
		
});